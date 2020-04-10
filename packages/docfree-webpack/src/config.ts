import webpack, { Configuration, RuleSetRule } from 'webpack';
import { getDocPath, getConfig, tempPath, qs, babelOptions, merge } from 'docfree-utils';
import { join } from 'path';
import webpackMerge from 'webpack-merge';
import autoprefixer from 'autoprefixer';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import extToRegexp from './extToRegexp';

export default function(options: Configuration): Configuration {
  const { mode } = options;
  const isDev = mode === 'development';
  const { webpackConfig, dest: defaultDest, title } = getConfig();

  // 文档根目录
  const docPath = getDocPath();
  // 文档配置目录
  const docfreePath = join(docPath, '.docfree');
  // less主题配置文件
  const themePath = join(docfreePath, 'theme.js');
  // 静态资源目录
  const staticPath = join(docfreePath, 'public');
  // 构建输出文件目录
  const destPath = defaultDest || join(docfreePath, 'dist');

  const publicPath = (webpackConfig.output && webpackConfig.output.publicPath) || './';
  const publicjsPath = `js`;
  const publicMediaPath = `media`;

  const jsExts = ['js', 'jsx', 'mjs'];
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
      if (rule && rule.loader === 'file-loader') {
        if (rule.exclude) {
          fileLoaderExcludes = fileLoaderExcludes.concat(rule.exclude);
        }
        return false;
      }
      return true;
    });
  }

  let modifyVars: any;

  try {
    modifyVars = require(themePath);
    // eslint-disable-next-line no-empty
  } catch (e) {}

  const plugins = [
    new HtmlWebpackPlugin({
      minify: isDev
        ? false
        : {
            removeComments: true,
            collapseWhitespace: true,
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
      {
        loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      },
      {
        loader: 'css-loader',
        options: {
          modules: module,
          sourceMap,
        },
      },
      {
        loader: 'postcss-loader',
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
            loader: 'less-loader',
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
    use: ['docfree-loader', ...use],
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
    use: ['docfree-loader', ...use],
  }));

  const rules: RuleSetRule[] = [
    {
      test: [jsExtReg, mdExtReg],
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: merge(babelOptions, {
        plugins: ['transform-es2015-modules-commonjs'],
      }),
    },
    {
      test: jsExtReg,
      resourceQuery(query: string) {
        const params = qs.parse(query.slice(1));

        return params.getPropTypesDescription === '1';
      },
      loader: 'docfree-component-loader',
    },
    {
      test: mdExtReg,
      loader: 'docfree-loader',
    },
    ...playgroundStyleLoaders,
    ...playgroundStyleModuleLoaders,
    ...styleLoaders,
    ...styleModuleLoaders,
    {
      exclude: fileLoaderExcludes,
      loader: 'file-loader',
      options: {
        name: `${publicMediaPath}/[name].[hash:8].[ext]`,
        useRelativePath: true,
      },
    },
  ];

  const defaultConfig: Configuration = {
    stats: 'errors-only',
    entry: {
      docfree: ['@babel/polyfill', tempPath.create('docfree.js')],
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
    },
    module: {
      rules,
    },
    plugins,
  };

  return webpackMerge(defaultConfig, options, webpackConfig);
}
