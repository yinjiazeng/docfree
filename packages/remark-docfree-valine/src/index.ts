export default function(options = {}) {
  return function({ children }) {
    children.push({
      type: 'jsx',
      value: `<section>
      <Docfree.Component render={function($el, { location, store: { state: { setting } } }){
        if (setting.valine !== false) {
          window.AV = require('leancloud-storage');
          const Valine = require('valine');
          const options = ${JSON.stringify(options)};
          options.el = $el;
          options.path = location.pathname;
          new Valine(options);
        }
      }} />
      </section>`,
    });
  };
}
