import remark from 'remark';
import mdx from 'remark-mdx';
import vfile from 'vfile';
import docfreeHeadingLink, { Heading } from 'remark-docfree-heading-link';
import docfreePlayground from 'remark-docfree-playground';
import docfreeJsx from 'remark-docfree-jsx';
import docfreeVue from 'remark-docfree-vue';
import docfreeTip from 'remark-docfree-tip';
import enhanceLink from 'remark-enhance-link';
import { ParserResult } from './typings';

export default ({ content, resourcePath }, plugins: any): ParserResult => {
  let headings: Heading[] = [];
  let remarkPlugins = [
    remark()
      .use(docfreePlayground)
      .use(docfreeHeadingLink, {
        complete(data: Heading[]) {
          headings = data;
        },
      })
      .use(docfreeJsx)
      .use(docfreeVue)
      .use(docfreeTip)
      .use(enhanceLink)
      .use(mdx),
  ];

  if (Array.isArray(plugins)) {
    remarkPlugins = remarkPlugins.concat(plugins);
  }

  const processors = remarkPlugins.reduce((processor, plugin: any) => {
    if (plugin) {
      let opts = {};

      if (Array.isArray(plugin)) {
        opts = plugin[1] || {};
        plugin = plugin[0] || null;
      }

      if (typeof plugin === 'string') {
        if (!plugin.startsWith('remark-')) {
          plugin = `remark-${plugin}`;
        }

        plugin = require(plugin);
      }
      return processor.use(plugin, opts);
    }

    return processor;
  });

  content = processors.processSync(vfile({ contents: content, path: resourcePath })).toString();

  return {
    headings,
    content,
  };
};
