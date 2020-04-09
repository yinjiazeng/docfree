import { join } from 'path';

export default function getDocPath(): string {
  const dir = process.argv[3];
  const cwd = process.cwd();

  return dir ? join(cwd, dir) : cwd;
}
