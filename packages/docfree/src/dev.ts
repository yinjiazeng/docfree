import { tempPath } from 'docfree-utils';
import { server } from 'docfree-webpack';
import { generateWatch } from 'docfree-generate';

export default async function() {
  process.env.NODE_ENV = 'development';
  tempPath.remove();
  await generateWatch();
  server();
}
