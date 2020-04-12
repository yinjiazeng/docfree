import { join } from 'path';
import { fsExtra } from '.';
import getDocPath from './getDocPath';

export const create = function(path: string = '') {
  const docPath = getDocPath();

  return join(docPath, '.docfree/temp', path);
};

export const write = function(path: string, content: string) {
  const writePath = create(path);

  fsExtra.outputFileSync(writePath, content);
  return writePath;
};
