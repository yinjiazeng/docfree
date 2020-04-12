import qs from 'qs';
import chalk from 'chalk';
import * as inquirer from 'inquirer';
import merge from 'lodash.merge';
import unistVisit from 'unist-util-visit';
import pathParse from 'path-parse-plus';
import generator from '@babel/generator';
import traverse from '@babel/traverse';
import * as babel from '@babel/core';
import * as types from '@babel/types';
import * as parser from '@babel/parser';
import * as fsExtra from 'fs-extra';
import * as logger from './logger';
import * as tempPath from './tempPath';
import * as storage from './storage';
import * as tempData from './tempData';
import getDocPath from './getDocPath';
import getConfig from './getConfig';
import formatJSON from './formatJSON';
import matchHtml from './matchHtml';
import babelOptions from './babelOptions';

export {
  qs,
  chalk,
  inquirer,
  merge,
  fsExtra,
  pathParse,
  logger,
  tempPath,
  tempData,
  storage,
  unistVisit,
  babel,
  generator,
  traverse,
  types,
  parser,
  getDocPath,
  getConfig,
  formatJSON,
  matchHtml,
  babelOptions,
};

export interface ObjectAny {
  [key: string]: any;
}
export interface UnistNode {
  type: string;
  children?: UnistNode[];
  [key: string]: any;
}
export { VFile, VFileOptions } from 'vfile';
export { NodePath, NodePaths } from '@babel/traverse';
export { ParserOptions } from '@babel/parser';
export { ParseResult, TransformOptions } from '@babel/core';
export { GeneratorOptions, GeneratorResult } from '@babel/generator';
export { TempData, DataTime } from './tempData';
export { MatchHtmlResult } from './matchHtml';
export {
  DocfreeConfig,
  DocfreeNav,
  DocfreePlugin,
  DocfreeSidebar,
  DocfreeSidebarData,
  DocfreeSidebarDepth,
} from './getConfig';
