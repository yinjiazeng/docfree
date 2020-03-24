// eslint-disable-next-line import/no-unresolved
import { Node } from 'unist';

export interface AstNode extends Node {
  children?: AstNode[];
  value?: any;
  lang?: string;
  [key: string]: any;
}

export interface Heading {
  text: string;
  depth: number;
  level: number;
}

export interface ParseResult {
  data: Heading[];
  content: string;
}
