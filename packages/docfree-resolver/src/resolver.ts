import { getDocPath, tempPath } from 'docfree-utils';
import resolveToRoutes from './resolveToRoutes';
import generateEntry from './generateEntry';

export default function resolver() {
  const docPath = getDocPath();
  const routes = resolveToRoutes(docPath);
  const entry = generateEntry(routes);

  tempPath.write('docfree.js', entry);
}
