import { join } from 'path';
import { ensureWriteFileSync, removeSync } from './fsExtra';
import getDocPath from './getDocPath';

export const create = (path: string = '') => {
  const docPath = getDocPath();

  return join(docPath, '.docfree/.temp', path);
};

export const remove = (path: string = '') => {
  const removePath = create(path);

  removeSync(removePath);
  return removePath;
};

export const write = (path: string, content: string) => {
  const writePath = create(path);

  ensureWriteFileSync(writePath, content);
  return writePath;
};
