import fsExtra from 'fs-extra';
import fs from 'fs';

export * from 'fs-extra';

export const ensureWriteFileSync = (path: string, content: string) => {
  fsExtra.ensureFileSync(path);
  fs.writeFileSync(path, content);
};
