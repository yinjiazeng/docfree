import { readFileSync } from 'fs';
import * as tempPath from './tempPath';
import formatJSON from './formatJSON';
import getDocPath from './getDocPath';

export interface DataTime {
  ctime: number;
  utime: number;
}

export interface TempData {
  [path: string]: DataTime;
}

export const normalPath = function(path: string) {
  const docPath = getDocPath();

  return path.substr(docPath.length).replace(/\\/g, '/');
};

export const get = function(p?: string) {
  let fileData: TempData;

  try {
    const filePath = tempPath.create('data.json');
    fileData = JSON.parse(readFileSync(filePath).toString());
  } catch (e) {
    fileData = {};
  }

  if (p) {
    const path = normalPath(p);
    const data = fileData[path];

    return data || {};
  }

  return fileData;
};

export const write = function(data: any) {
  tempPath.write('data.json', formatJSON(data));
};
