import { outputFileSync } from 'fs-extra';
import { join } from 'path';
import { getDocPath } from 'docfree-utils';
import resolveToRoutes from './resolveToRoutes';
import generateEntry from './generateEntry';

export default function resolver() {
  const docPath = getDocPath();
  const routes = resolveToRoutes(docPath);
  const entry = generateEntry(routes);
  outputFileSync(join(docPath, '/.docfree/.temp/index.js'), entry);
}
