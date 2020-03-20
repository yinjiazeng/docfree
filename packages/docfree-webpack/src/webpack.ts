import webpack from 'webpack';
import config from './config';

export default function(options: webpack.Configuration) {
  webpack(config(options));
}
