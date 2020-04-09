import { tempPath } from 'docfree-utils';
import { build } from 'docfree-webpack';
import { generate } from 'docfree-generate';

export default async function() {
  process.env.NODE_ENV = 'production';
  tempPath.remove();
  generate();
  build();
}
