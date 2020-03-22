import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import portfinder from 'portfinder';
import config from './config';
import CompileDonePlugin from './CompileDonePlugin';

export default async function() {
  const { devServer, ...webpackConfig } = config({
    mode: 'development',
    devtool: 'eval-source-map',
  });
  const { path, publicPath }: any = webpackConfig.output;

  const serverConfig = {
    port: 8000,
    host: 'localhost',
    contentBase: path,
    // clientLogLevel: 'error',
    compress: true,
    quiet: true,
    historyApiFallback: true,
    hot: true,
    disableHostCheck: true,
    publicPath,
    ...devServer,
  };

  portfinder.basePort = serverConfig.port;
  serverConfig.port = await portfinder.getPortPromise();

  // WebpackDevServer.addDevServerEntrypoints(webpackConfig, serverConfig);

  // webpackConfig.plugins.push(new CompileDonePlugin());

  const compiler = webpack(webpackConfig);

  const server = new WebpackDevServer(compiler, serverConfig);

  server.listen(serverConfig.port, serverConfig.host, (err) => {
    if (err) {
      throw err;
    }
  });
}
