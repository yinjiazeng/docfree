export default function(ext: string | string[], prefix?: string): RegExp {
  const str = Array.isArray(ext) ? ext.join('|') : ext;
  return new RegExp(`${prefix ? `\\.${prefix}` : ''}\\.${str}$`);
}
