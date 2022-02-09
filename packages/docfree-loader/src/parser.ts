import { isAbsolute, resolve } from 'path';
import vfile from 'vfile';
import remark from 'remark';
import mdx from 'remark-mdx';
import docfreeHeadingLink, { Heading } from 'remark-docfree-heading-link';
import docfreePlayground from 'remark-docfree-playground';
import docfreeVue from 'remark-docfree-vue';
import docfreeProps from 'remark-docfree-props';
import docfreeJsx from 'remark-docfree-jsx';
import enhanceLink from 'remark-enhance-link';

export interface ParserResult {
  headings: Heading[];
  content: string;
}

export default function({ content, resourcePath }, { plugins, publicPath }: any): ParserResult {
  let headings: Heading[] = [];
  let remarkPlugins = [
    remark()
      .use(enhanceLink, {
        publicPath,
      })
      .use(docfreeHeadingLink, {
        complete(data: Heading[]) {
          headings = data;
        },
      })
      .use(docfreePlayground)
      .use(docfreeProps)
      .use(docfreeJsx)
      .use(docfreeVue)
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
        if (!isAbsolute(plugin)) {
          if (!plugin.startsWith('remark-')) {
            plugin = `remark-${plugin}`;
          }

          plugin = resolve(process.cwd(), 'node_modules', plugin);
        }

        plugin = require(plugin);
        plugin = plugin.default || plugin;
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
}
