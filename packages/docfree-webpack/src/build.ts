import webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
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

  webpack(webpackConfig, (err, stats) => {
    // stats.toJson().errors.forEach(err => {
    //   console.error(err)
    // })
  });
}
