import { Configuration, RuleSetRule } from 'webpack';
import { getDocPath, getConfig } from 'docfree-utils';
import { join, resolve } from 'path';
import merge from 'webpack-merge';
import autoprefixer from 'autoprefixer';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import extToRegexp from './extToRegexp';

export default function(options: Configuration): Configuration {
  const { mode } = options;
  const isDev = mode === 'development';
  const { webpackConfig, dest: defaultDest, title, favicon, meta } = getConfig();
  process.env.NODE_ENV = mode;

  // 文档根目录
  const docPath = getDocPath();
  // 文档配置目录
  const docfreePath = join(docPath, '.docfree');
  // 临时文件目录
  const entryPath = join(docfreePath, '.temp.js');
  // 静态资源目录
  const staticPath = join(docfreePath, 'static');
  // 构建输出文件目录
  const destPath = defaultDest || join(docfreePath, 'dist');
  // 构建输出静态资源目录
  const destStaticPath = join(destPath, 'static');

  const publicPath = (webpackConfig.output && webpackConfig.output.publicPath) || './';
  const publicjsPath = `static/js`;
  const publicCssPath = `static/css`;
  const publicMediaPath = `static/media`;

  const jsExts = ['js', 'jsx', 'mjs'];
  const exts = [...jsExts, 'json'];
  const cssExt = 'css';
  const lessExt = 'less';
  const sassExts = ['sass', 'scss'];
  const mdExts = ['md'];
  const extensions = exts.map((ext) => `.${ext}`);
  const jsExtReg = extToRegexp(jsExts);
  const cssExtReg = extToRegexp(cssExt);
  const cssModuleExtReg = extToRegexp(cssExt, 'module');
  const lessExtReg = extToRegexp(lessExt);
  const lessModuleExtReg = extToRegexp(lessExt, 'module');
  const sassExtReg = extToRegexp(sassExts);
  const sassModuleExtReg = extToRegexp(sassExts, 'module');
  const mdExtReg = extToRegexp(mdExts);
  const extsReg = extToRegexp(exts);

  const plugins = [
    new HtmlWebpackPlugin({
      title,
      favicon: resolve(publicPath, favicon),
      meta,
    }),
    new CopyWebpackPlugin([
      {
        from: staticPath,
        to: destStaticPath,
      },
    ]),
    new MiniCssExtractPlugin({
      filename: `${publicCssPath}/[name].[contenthash:8].css`,
    }),
  ];

  const cssLoader = (module: boolean = false): RuleSetRule[] => {
    const sourceMap = isDev;
    const use = [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath,
        },
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
              overrideBrowserslist: ['last 1 version', '> 1%', 'ie >= 9'],
            }),
          ],
        },
      },
    ];

    return [
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
              sourceMap,
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
    ];
  };

  const rules: RuleSetRule[] = [
    {
      test: [jsExtReg, mdExtReg],
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    },
    {
      test: mdExtReg,
      loader: 'docfree-loader',
      options: {
        plugins: ['jsx'],
      },
    },
    {
      exclude: [mdExtReg, extsReg, cssExtReg, lessExtReg, sassExtReg],
      loader: 'file-loader',
      options: {
        name: `${publicMediaPath}/[name].[hash:8].[ext]`,
        useRelativePath: true,
      },
    },
    ...cssLoader(),
    ...cssLoader(true),
  ];

  const defaultConfig: Configuration = {
    entry: {
      docfree: ['@babel/polyfill', entryPath],
    },
    output: {
      path: destPath,
      filename: `${publicjsPath}/[name].[contenthash:8].js`,
      publicPath,
    },
    resolve: {
      extensions,
    },
    module: {
      rules,
    },
    plugins,
  };

  return merge(defaultConfig, options, webpackConfig);
}