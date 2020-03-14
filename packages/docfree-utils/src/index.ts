import { join } from 'path';

export const getDocPath = (): string => {
  const dir = process.argv[3];
  const cwd = process.cwd();
  return dir ? join(cwd, dir) : cwd;
};
