import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import portfinder from 'portfinder';
import config from './config';

export default async function() {
  const { devServer, ...webpackConfig } = config({
    mode: 'development',
    devtool: 'eval-source-map',
  });
  const { path, publicPath }: any = webpackConfig.output;

  const serverConfig = {
    port: 3000,
    contentBase: path,
    compress: true,
    historyApiFallback: true,
    hot: true,
    disableHostCheck: true,
    publicPath,
    ...devServer,
  };

  portfinder.basePort = serverConfig.port;
  serverConfig.port = await portfinder.getPortPromise();

  WebpackDevServer.addDevServerEntrypoints(webpackConfig, serverConfig);

  const compiler = webpack(webpackConfig);

  // eslint-disable-next-line no-new
  new WebpackDevServer(compiler, serverConfig);
}
