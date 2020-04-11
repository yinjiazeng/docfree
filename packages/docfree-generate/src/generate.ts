import { getDocPath, tempPath, tempData } from 'docfree-utils';
import generateData from './generateData';
import generateEntry from './generateEntry';

export default function() {
  const docPath = getDocPath();
  const { routes, data } = generateData(docPath);
  const content = generateEntry(routes);

  tempData.write(data);
  tempPath.write('docfree.js', content);
}
