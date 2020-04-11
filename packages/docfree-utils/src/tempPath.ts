import { join } from 'path';
import { fsExtra } from '.';
import getDocPath from './getDocPath';

export const create = (path: string = '') => {
  const docPath = getDocPath();

  return join(docPath, '.docfree/temp', path);
};

export const write = (path: string, content: string) => {
  const writePath = create(path);

  fsExtra.outputFileSync(writePath, content);
  return writePath;
};
