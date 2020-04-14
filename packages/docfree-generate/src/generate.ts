import { getDocPath, tempData, fsExtra } from 'docfree-utils';
import { resolve } from 'path';
import generateData from './generateData';
import generateEntry from './generateEntry';

export default function() {
  const docPath = getDocPath();
  const { routes, data } = generateData(docPath);
  const content = generateEntry(routes);

  tempData.write(data);
  fsExtra.outputFileSync(resolve(__dirname, '../.temp.js'), content);
}
