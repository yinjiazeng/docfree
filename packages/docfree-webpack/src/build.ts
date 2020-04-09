import webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import config from './config';

export default function() {
  const { devServer, ...webpackConfig } = config({
    mode: 'production',
    plugins: [new CleanWebpackPlugin()],
  });

  webpack(webpackConfig, (err, stats) => {
    // stats.toJson().errors.forEach(err => {
    //   console.error(err)
    // })
  });
}
