import { outputFileSync } from 'fs-extra';
import { join } from 'path';
import { getDocPath } from 'docfree-utils';
import { resolveToRoutes, generateEntry } from './utils';

export default () => {
  const routes = resolveToRoutes(getDocPath());
  const entry = generateEntry(routes);
  outputFileSync(join(__dirname, '../entry.js'), entry);
};
