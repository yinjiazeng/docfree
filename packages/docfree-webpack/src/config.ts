import webpack, { Configuration, RuleSetRule } from 'webpack';
import { getDocPath, getConfig, qs, babelOptions, merge } from 'docfree-utils';
import { join, resolve } from 'path';
import webpackMerge from 'webpack-merge';
import autoprefixer from 'autoprefixer';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

function extToRegexp(ext: string | string[], prefix?: string): RegExp {
  const str = Array.isArray(ext) ? ext.join('|') : ext;
  return new RegExp(`${prefix ? `\\.${prefix}` : ''}\\.(${str})$`);
}

export default function(options: Configuration): Configuration {
  const { mode } = options;
  const isDev = mode === 'development';
  const { webpack: webpackConfig, dest: defaultDest, title, type } = getConfig();

  // 文档根目录
  const docPath = getDocPath();
  // 文档配置目录
  const docfreePath = join(docPath, '.docfree');
  // less主题配置文件
  const modifyVarsPath = join(docfreePath, 'modify-vars.js');
  // 静态资源目录
  const staticPath = join(docfreePath, 'public');
  // 构建输出文件目录
  const destPath = defaultDest || join(docfreePath, 'dist');
  // 入口
  const entry = resolve(require.resolve('docfree-generate'), '../../.temp.js');

  const publicPath =
    (webpackConfig.output && webpackConfig.output.publicPath) || (type === 'browser' ? '/' : './');
  const publicjsPath = `js`;
  const publicMediaPath = `media`;

  const jsExts = ['js', 'jsx', 'mjs', 'ts', 'tsx'];
  const exts = [...jsExts, 'json'];
  const cssExt = 'css';
  const lessExt = 'less';
  const sassExts = ['sass', 'scss'];
  const stylusExts = ['styl', 'stylus'];
  const mdExts = ['md', 'mdx'];
  const extensions = exts.map((ext) => `.${ext}`);
  const jsExtReg = extToRegexp(jsExts);
  const cssExtReg = extToRegexp(cssExt);
  const cssModuleExtReg = extToRegexp(cssExt, 'module');
  const lessExtReg = extToRegexp(lessExt);
  const lessModuleExtReg = extToRegexp(lessExt, 'module');
  const sassExtReg = extToRegexp(sassExts);
  const sassModuleExtReg = extToRegexp(sassExts, 'module');
  const stylusExtReg = extToRegexp(stylusExts);
  const stylusModuleExtReg = extToRegexp(stylusExts, 'module');
  const mdExtReg = extToRegexp(mdExts);
  const extsReg = extToRegexp(exts);

  let fileLoaderExcludes = [
    mdExtReg,
    extsReg,
    cssExtReg,
    lessExtReg,
    sassExtReg,
    stylusExtReg,
    /\.html$/,
  ];

  if (webpackConfig.module && Array.isArray(webpackConfig.module.rules)) {
    webpackConfig.module.rules = webpackConfig.module.rules.filter((rule: any) => {
      if (rule && typeof rule.loader === 'string' && rule.loader.indexOf('file-loader') !== -1) {
        if (rule.exclude) {
          fileLoaderExcludes = fileLoaderExcludes.concat(rule.exclude);
        }
        return false;
      }
      return true;
    });
  }

  let modifyVars = {};

  try {
    modifyVars = require(modifyVarsPath);
  } catch (e) {}

  const plugins = [
    new HtmlWebpackPlugin({
      minify: isDev
        ? false
        : {
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
          },
      title,
      template: join(staticPath, 'index.html'),
    }),
    new CopyWebpackPlugin([
      {
        from: staticPath,
        to: destPath,
      },
    ]),
    new webpack.ProgressPlugin(),
  ];

  const getStyleLoaders = (module: boolean = false): RuleSetRule[] => {
    const sourceMap = isDev;
    const use = [
      isDev
        ? { loader: require.resolve('style-loader') }
        : {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
      {
        loader: require.resolve('css-loader'),
        options: {
          modules: module,
          sourceMap,
        },
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          sourceMap,
          plugins: [
            autoprefixer({
              overrideBrowserslist: ['last 1 version', '> 1%', 'IE 11'],
            }),
          ],
        },
      },
    ];

    const rules = [
      {
        test: module ? cssModuleExtReg : cssExtReg,
        exclude: !module ? cssModuleExtReg : undefined,
        use,
      },
      {
        test: module ? lessModuleExtReg : lessExtReg,
        exclude: !module ? lessModuleExtReg : undefined,
        use: [
          ...use,
          {
            loader: require.resolve('less-loader'),
            options: {
              javascriptEnabled: true,
              sourceMap,
              modifyVars,
            },
          },
        ],
      },
      {
        test: module ? sassModuleExtReg : sassExtReg,
        exclude: !module ? sassModuleExtReg : undefined,
        use: [
          ...use,
          {
            loader: 'sass-loader',
            options: {
              sourceMap,
            },
          },
        ],
      },
      {
        test: module ? stylusModuleExtReg : stylusExtReg,
        exclude: !module ? stylusModuleExtReg : undefined,
        use: [
          ...use,
          {
            loader: 'stylus-loader',
            options: {
              sourceMap,
            },
          },
        ],
      },
    ];

    return rules;
  };

  const styleLoaders = getStyleLoaders();
  const styleModuleLoaders = getStyleLoaders(true);

  const playgroundStyleLoaders = styleLoaders.map(({ test, use }: any) => ({
    test: mdExtReg,
    resourceQuery(query: string) {
      const params = qs.parse(query.slice(1));

      if (params.styleContentKey && params.styleLang) {
        const extname = `.${params.styleLang}`;

        if (!params.module && test.test(extname)) {
          return true;
        }
      }

      return false;
    },
    use: [
      {
        loader: require.resolve('docfree-loader'),
      },
      ...use,
    ],
  }));

  const playgroundStyleModuleLoaders = styleModuleLoaders.map(({ test, use }: any) => ({
    test: mdExtReg,
    resourceQuery(query: string) {
      const params = qs.parse(query.slice(1));

      if (params.styleContentKey && params.styleLang) {
        const extname = `.module.${params.styleLang}`;

        if (params.module && test.test(extname)) {
          return true;
        }
      }

      return false;
    },
    use: [
      {
        loader: require.resolve('docfree-loader'),
      },
      ...use,
    ],
  }));

  const babelRule = {
    loader: require.resolve('babel-loader'),
    options: merge(babelOptions, {
      plugins: [require.resolve('babel-plugin-transform-es2015-modules-commonjs')],
    }),
  };

  const rules: RuleSetRule[] = [
    {
      include: entry,
      ...babelRule,
    },
    {
      test: [jsExtReg, mdExtReg],
      exclude: /node_modules/,
      ...babelRule,
    },
    {
      test: jsExtReg,
      resourceQuery(query: string) {
        const params = qs.parse(query.slice(1));

        return params.getPropTypesDescription === '1';
      },
      loader: require.resolve('docfree-component-loader'),
    },
    {
      test: mdExtReg,
      loader: require.resolve('docfree-loader'),
    },
    ...playgroundStyleLoaders,
    ...playgroundStyleModuleLoaders,
    ...styleLoaders,
    ...styleModuleLoaders,
    {
      exclude: fileLoaderExcludes,
      loader: require.resolve('file-loader'),
      options: {
        name: `${publicMediaPath}/[name].[hash:8].[ext]`,
      },
    },
  ];

  const defaultConfig: Configuration = {
    stats: 'errors-only',
    entry: {
      docfree: entry,
    },
    output: {
      path: destPath,
      filename: `${publicjsPath}/[name].[${isDev ? 'hash' : 'contenthash'}:8].js`,
      publicPath,
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /node_modules/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
      runtimeChunk: {
        name: 'runtime',
      },
    },
    resolve: {
      extensions,
      alias: {
        'docfree-components$': require.resolve('docfree-components'),
        react$: require.resolve('react'),
        'react-dom$': require.resolve('react-dom'),
      },
    },
    module: {
      rules,
    },
    plugins,
  };

  return webpackMerge(defaultConfig, options, webpackConfig);
}
