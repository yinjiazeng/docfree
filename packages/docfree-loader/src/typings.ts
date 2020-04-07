import { Heading } from 'remark-docfree-heading-link';

export interface ParserResult {
  headings: Heading[];
  content: string;
}
