import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import portfinder from 'portfinder';
import { getDocPath } from 'docfree-utils';
import { join } from 'path';
import config from './config';
import CompileDonePlugin from './CompileDonePlugin';

export default async function() {
  const { devServer, ...webpackConfig }: any = config({
    mode: 'development',
    devtool: 'eval-source-map',
    plugins: [new CompileDonePlugin()],
  });

  const serverConfig: any = {
    port: 8000,
    host: 'localhost',
    clientLogLevel: 'error',
    compress: true,
    quiet: true,
    historyApiFallback: true,
    // hot: true,
    disableHostCheck: true,
    ...devServer,
    contentBase: join(getDocPath(), '.docfree/public'),
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
    },
  };

  portfinder.basePort = serverConfig.port;
  serverConfig.port = await portfinder.getPortPromise();

  // WebpackDevServer.addDevServerEntrypoints(webpackConfig, serverConfig);

  const compiler = webpack(webpackConfig);

  const server = new WebpackDevServer(compiler, serverConfig);

  server.listen(serverConfig.port, serverConfig.host, (err) => {
    if (err) {
      throw err;
    }
  });
}
