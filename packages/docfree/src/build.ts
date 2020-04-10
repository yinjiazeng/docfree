import { build } from 'docfree-webpack';
import { generate } from 'docfree-generate';

export default async function() {
  process.env.NODE_ENV = 'production';
  generate();
  build();
}
