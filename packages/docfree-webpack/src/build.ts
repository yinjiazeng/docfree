import webpack, { Stats } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { logger } from 'docfree-utils';
import prettyBytes from 'pretty-bytes';
import config from './config';

export default function() {
  const { devServer, ...webpackConfig } = config({
    mode: 'production',
    optimization: {
      minimizer: [new TerserPlugin({ extractComments: false }), new OptimizeCSSAssetsPlugin()],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: `css/[name].[contenthash:8].css`,
      }),
    ],
  });

  webpack(webpackConfig, (err: Error, stats: Stats) => {
    if (err) {
      logger.error(err.stack || err);
      return;
    }

    if (stats.hasErrors()) {
      logger.error(stats.toJson().errors);
      return;
    }

    const data = stats.toJson();
    let destPath = '';

    if (data.outputPath) {
      destPath = data.outputPath.replace(process.cwd(), '').replace(/^[/\\]/, '');
    }

    logger.log();

    if (data.assets) {
      data.assets.forEach(({ name, size }) => {
        logger.info(name, prettyBytes(size));
      });
    }

    logger.log();
    logger.success('构建成功，静态资源存储在', destPath);
  });
}
