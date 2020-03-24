import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { tempPath } from 'docfree-utils';
import portfinder from 'portfinder';
import { join } from 'path';
import config from './config';
import CompileDonePlugin from './CompileDonePlugin';

export default async function() {
  const { devServer, ...webpackConfig } = config({
    mode: 'development',
    devtool: 'eval-source-map',
  });
  const { path }: any = webpackConfig.output;

  const serverConfig = {
    port: 8000,
    host: 'localhost',
    contentBase: join(path, '../public'),
    // clientLogLevel: 'error',
    compress: true,
    // quiet: true,
    historyApiFallback: true,
    hot: true,
    disableHostCheck: true,
    ...devServer,
    watchOptions: {
      ignored: [tempPath.create()],
    },
  };

  portfinder.basePort = serverConfig.port;
  serverConfig.port = await portfinder.getPortPromise();

  WebpackDevServer.addDevServerEntrypoints(webpackConfig, serverConfig);

  // webpackConfig.plugins.push(new CompileDonePlugin());

  const compiler = webpack(webpackConfig);

  const server = new WebpackDevServer(compiler, serverConfig);

  server.listen(serverConfig.port, serverConfig.host, (err) => {
    if (err) {
      throw err;
    }
  });
}
