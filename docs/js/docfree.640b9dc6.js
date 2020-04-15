(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    124: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return r;
      }),
        n.d(t, 'b', function() {
          return o;
        });
      var r = function() {
          var e = this,
            t = e.$createElement;
          return (e._self._c || t)(
            'button',
            {
              on: {
                click: function(t) {
                  e.count++;
                },
              },
            },
            [e._v('You clicked me ' + e._s(e.count) + ' times.')],
          );
        },
        o = [];
    },
    184: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var r,
        o = (r = n(0)) && r.__esModule ? r : { default: r };
      function a() {
        return (a =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e) {
        var t = e.lang,
          n = e.content,
          r = e.forwardRef;
        return o.default.createElement(
          'pre',
          { style: { margin: 0 } },
          o.default.createElement('code', { ref: r, className: 'languge-'.concat(t) }, n),
        );
      }
      var l = o.default.forwardRef(function(e, t) {
        return o.default.createElement(u, a({}, e, { forwardRef: t }));
      });
      t.default = l;
    },
    186: function(e, t, n) {
      'use strict';
      function r(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function a(e) {
        return (a = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function u(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function l(e, t) {
        return (l =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function c(e) {
        return (c =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var i = (function(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== c(e) && 'function' != typeof e)) return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set) ? Object.defineProperty(n, o, a) : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(0)),
        f = n(19);
      function s() {
        if ('function' != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      function d() {
        return (d =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var p = (function(e) {
        function t(e) {
          var n, r, o, l, f, s;
          return (
            (function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            })(this, t),
            (r = this),
            (n =
              !(o = a(t).call(this, e)) || ('object' !== c(o) && 'function' != typeof o)
                ? u(r)
                : o),
            (l = u(n)),
            (s = void 0),
            (f = 'ref') in l
              ? Object.defineProperty(l, f, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (l[f] = s),
            (n.ref = (0, i.createRef)()),
            n
          );
        }
        var n, s, p;
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function');
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && l(e, t);
          })(t, e),
          (n = t),
          (s = [
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.props,
                  n = t.to,
                  o = t.children,
                  a = r(t, ['to', 'children']);
                return i.default.createElement(f.RouterContext.Consumer, null, function(t) {
                  var r = t.type,
                    u = t.location,
                    l = n,
                    c = u.pathname,
                    f = u.search,
                    s = u.hash === '#'.concat(n) ? 'current' : void 0;
                  return (
                    'hash' === r &&
                      (l = ''
                        .concat(c)
                        .concat(f, '#')
                        .concat(n)),
                    i.default.createElement(
                      'a',
                      d({ id: l }, a, { ref: e.ref, href: '#'.concat(l), className: s }),
                      o,
                    )
                  );
                });
              },
            },
          ]) && o(n.prototype, s),
          p && o(n, p),
          t
        );
      })(i.PureComponent);
      t.default = p;
    },
    187: function(e, t, n) {
      'use strict';
      function r(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          var t = e.data,
            n = e.className,
            l = (function e(t) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              return (
                Array.isArray(t) &&
                  t.length &&
                  t.forEach(function(t, l) {
                    t.depth;
                    var i = t.level,
                      f = t.text,
                      s = t.to,
                      d = t.menus,
                      p = t.isActive,
                      y = r(t, ['depth', 'level', 'text', 'to', 'menus', 'isActive']);
                    if (f) {
                      var m;
                      if (
                        ((m =
                          void 0 !== i
                            ? o.default.createElement(
                                u.default,
                                c({ id: null, to: f }, y, { style: { paddingLeft: 12 * i } }),
                                f,
                              )
                            : s
                            ? /^(https?:)?\/\//.test(s)
                              ? o.default.createElement('a', c({ href: s, target: '_blank' }, y), f)
                              : o.default.createElement(a.NavLink, c({ to: s, isActive: p }, y), f)
                            : o.default.createElement('b', null, f)),
                        d)
                      ) {
                        var b = e(d);
                        b.length &&
                          (m = o.default.createElement(
                            o.default.Fragment,
                            null,
                            m,
                            o.default.createElement('ul', null, b),
                          ));
                      }
                      n.push(o.default.createElement('li', { key: l }, m));
                    }
                  }),
                n
              );
            })(t);
          if (l.length)
            return o.default.createElement(
              'ul',
              { className: 'docfree-menus'.concat(n ? ' '.concat(n) : '') },
              l,
            );
          return null;
        });
      var o = l(n(0)),
        a = n(19),
        u = l(n(186));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c() {
        return (c =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      n(659);
    },
    188: function(e, t, n) {},
    189: function(e, t, n) {
      'use strict';
      function r(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            if (
              !(Symbol.iterator in Object(e)) &&
              '[object Arguments]' !== Object.prototype.toString.call(e)
            )
              return;
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var u, l = e[Symbol.iterator]();
                !(r = (u = l.next()).done) && (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                r || null == l.return || l.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t) ||
          (function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
          })()
        );
      }
      function o(e) {
        return (o =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          var t = e.icon,
            n = e.dir,
            o = void 0 === n ? 'right' : n,
            u = e.children,
            l = r((0, a.useState)(null), 2),
            c = l[0],
            i = l[1],
            f = r((0, a.useState)(null), 2),
            s = f[0],
            d = f[1],
            p = null,
            y = '';
          (0, a.useEffect)(function() {
            var e = function() {
              window.outerWidth > 800 && null !== c && i(null);
            };
            return (
              window.addEventListener('resize', e),
              function() {
                window.removeEventListener('resize', e);
              }
            );
          }),
            null !== c && ((p = { display: c }), (y = 'docfree-animate-'.concat(s, '-').concat(o)));
          return a.default.createElement(
            a.default.Fragment,
            null,
            a.default.createElement(
              'a',
              {
                className: 'docfree-drawer-icon',
                onClick: function() {
                  i('block'), d('show');
                },
              },
              t,
            ),
            a.default.createElement('span', {
              className: 'docfree-drawer-background',
              style: p,
              onClick: function() {
                d('hide'),
                  setTimeout(function() {
                    i(null);
                  }, 100);
              },
            }),
            a.default.createElement('div', { className: y, style: p }, u),
          );
        });
      var a = (function(e) {
        if (e && e.__esModule) return e;
        if (null === e || ('object' !== o(e) && 'function' != typeof e)) return { default: e };
        var t = u();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in e)
          if (Object.prototype.hasOwnProperty.call(e, a)) {
            var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
            l && (l.get || l.set) ? Object.defineProperty(n, a, l) : (n[a] = e[a]);
          }
        (n.default = e), t && t.set(e, n);
        return n;
      })(n(0));
      function u() {
        if ('function' != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      n(660);
    },
    19: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.BackTop = t.Button = t.List = t.Table = t.Popover = t.Input = t.Result = t.Col = t.Row = t.Pagination = t.Card = t.Tooltip = t.hljs = void 0);
      var r = n(125);
      Object.keys(r).forEach(function(e) {
        'default' !== e &&
          '__esModule' !== e &&
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
              return r[e];
            },
          });
      });
      var o = n(82);
      Object.defineProperty(t, 'Tooltip', {
        enumerable: !0,
        get: function() {
          return v(o).default;
        },
      });
      var a = n(281);
      Object.defineProperty(t, 'Card', {
        enumerable: !0,
        get: function() {
          return v(a).default;
        },
      });
      var u = n(103);
      Object.defineProperty(t, 'Pagination', {
        enumerable: !0,
        get: function() {
          return v(u).default;
        },
      });
      var l = n(153);
      Object.defineProperty(t, 'Row', {
        enumerable: !0,
        get: function() {
          return v(l).default;
        },
      });
      var c = n(155);
      Object.defineProperty(t, 'Col', {
        enumerable: !0,
        get: function() {
          return v(c).default;
        },
      });
      var i = n(338);
      Object.defineProperty(t, 'Result', {
        enumerable: !0,
        get: function() {
          return v(i).default;
        },
      });
      var f = n(349);
      Object.defineProperty(t, 'Input', {
        enumerable: !0,
        get: function() {
          return v(f).default;
        },
      });
      var s = n(368);
      Object.defineProperty(t, 'Popover', {
        enumerable: !0,
        get: function() {
          return v(s).default;
        },
      });
      var d = n(369);
      Object.defineProperty(t, 'Table', {
        enumerable: !0,
        get: function() {
          return v(d).default;
        },
      });
      var p = n(425);
      Object.defineProperty(t, 'List', {
        enumerable: !0,
        get: function() {
          return v(p).default;
        },
      });
      var y = n(40);
      Object.defineProperty(t, 'Button', {
        enumerable: !0,
        get: function() {
          return v(y).default;
        },
      });
      var m = n(428);
      Object.defineProperty(t, 'BackTop', {
        enumerable: !0,
        get: function() {
          return v(m).default;
        },
      });
      var b = v(n(430));
      function v(e) {
        return e && e.__esModule ? e : { default: e };
      }
      n(617),
        n(619),
        n(115),
        n(181),
        n(182),
        n(628),
        n(630),
        n(633),
        n(635),
        n(644),
        n(42),
        n(646),
        (t.hljs = b.default);
    },
    190: function(e, t, n) {
      e.exports = { buttons: '_3loKrc2xiTgno7_H5v9kP_' };
    },
    197: function(e, t, n) {
      'use strict';
      var r = c(n(0)),
        o = c(n(10)),
        a = n(125),
        u = (function(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== i(e) && 'function' != typeof e)) return { default: e };
          var t = l();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set) ? Object.defineProperty(n, o, a) : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(65));
      function l() {
        if ('function' != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e) {
        return (i =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function f(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function(t) {
                p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function p(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      n(673);
      var y = [
          d(
            {
              ctime: 1586786416847.3335,
              utime: 1586914287025.555,
              pathname: '/',
              filename: 'README',
              ext: '.md',
              title: 'README',
              path: '/',
            },
            n(674).default,
          ),
          {
            path: '/guide',
            children: [
              d(
                {
                  ctime: 1586786416848.5488,
                  utime: 1586914285717.9224,
                  pathname: '/guide/',
                  filename: 'README',
                  ext: '.md',
                  title: 'README',
                  path: '/',
                },
                n(675).default,
              ),
              d(
                {
                  ctime: 1586786416848.8818,
                  utime: 1586947241226.944,
                  pathname: '/guide/',
                  filename: 'functions',
                  ext: '.md',
                  title: 'functions',
                  path: '/functions',
                },
                n(676).default,
              ),
              { path: '*', children: r.default.createElement(u.NotFound, null) },
            ],
          },
        ],
        m = (function e(t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          return (
            t.forEach(function(t) {
              if ('*' !== t.path) {
                var r = t.children,
                  o =
                    (t.render,
                    t.effects,
                    t.onInit,
                    t.onChange,
                    f(t, ['children', 'render', 'effects', 'onInit', 'onChange']));
                Array.isArray(r) ? (n = e(r, n)) : t.title && n.push(o);
              }
            }),
            n
          );
        })(y),
        b = function e(t) {
          var n = this,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          return (
            t.forEach(function(t) {
              if ('string' == typeof t) {
                var a = t.trim();
                if (a) {
                  var u,
                    l = m.find(function(e) {
                      return e.pathname === n.pathname && e.filename === a;
                    });
                  if (l) {
                    var c = l.pathname,
                      f = l.filename,
                      s = l.title,
                      d = l.ext,
                      p = { to: c + (/^README$/i.test(f) ? '' : f), text: s };
                    f === n.filename && d === n.ext && (p.menus = n.sidebarMenus), (u = p);
                  } else u = { to: n.pathname + a, text: a };
                  o.push(u), r.push(u);
                }
              } else if (t && 'object' === i(t))
                if (Array.isArray(t)) {
                  var y = e.call(n, t),
                    b = y.menus,
                    v = y.list;
                  (o = o.concat(v)), (r = r.concat(b));
                } else {
                  var h = t.text,
                    O = t.menus;
                  if (h)
                    if (Array.isArray(O)) {
                      var g = e.call(n, O),
                        E = g.menus,
                        j = g.list,
                        P = { text: h, menus: E };
                      (o = o.concat(j)), r.push(P);
                    } else r.push({ text: h });
                }
            }),
            { menus: r, list: o }
          );
        };
      a.nuomi.config({
        state: { listSource: [] },
        effects: {
          initData: function() {
            var e = this.getNuomiProps(),
              t = e.title,
              n = e.pathname,
              r = e.filename,
              o = e.showSidebar,
              u = e.showPageSidebar,
              l = e.sidebarTitle,
              c = e.sidebarMenus,
              i = e.pageSidebarMenus,
              f = e.data,
              s =
                (e.location,
                { sidebarTitle: l, showSidebar: !!o, showPageSidebar: !!u, pageSidebarMenus: i });
            if (!f.computedSidebarMenus) {
              var d,
                p = { '/guide': { title: '指南', menus: ['README', 'functions'] } };
              if (
                (d = p[n] || p[n.replace(/\/+$/, '') || '/']) &&
                (function e(t, n) {
                  var r = !1;
                  if (Array.isArray(t)) {
                    var o = !0,
                      a = !1,
                      u = void 0;
                    try {
                      for (var l, c = t[Symbol.iterator](); !(o = (l = c.next()).done); o = !0) {
                        var i = l.value;
                        if (i === n) {
                          r = !0;
                          break;
                        }
                        !r && i && i.menus && (r = e(i.menus, n));
                      }
                    } catch (e) {
                      (a = !0), (u = e);
                    } finally {
                      try {
                        o || null == c.return || c.return();
                      } finally {
                        if (a) throw u;
                      }
                    }
                  }
                  return r;
                })(d.menus, r)
              ) {
                var y = d,
                  m = y.title,
                  v = y.menus;
                if (((s.sidebarTitle = m), Array.isArray(v) && v.length)) {
                  var h = b.call(e, v),
                    O = h.menus,
                    g = h.list;
                  (f.listSource = g), (f.computedSidebarMenus = O);
                }
              } else (f.listSource = []), (f.computedSidebarMenus = [{ text: t, menus: c }]);
            }
            s.sidebarMenus = f.computedSidebarMenus || [];
            var E = f.listSource || [];
            this.dispatch({ type: '_updateState', payload: { listSource: E } }),
              a.store.dispatch({ type: 'global/_updateState', payload: s });
          },
        },
        onInit: function() {
          var e = this.path,
            t = this.title,
            n = this.location,
            r = this.data;
          if (((document.title = t && '/' !== e ? t + ' | Docfree' : 'Docfree'), t)) {
            if (r.hash) {
              var o = window.location.hash;
              return void setTimeout(function() {
                window.location.hash = o + '#' + r.hash;
              });
            }
            n.hash || window.scrollTo({ top: 0 });
          } else e && window.scrollTo({ top: 0 });
        },
      });
      var v = (function e(t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          return (
            t.forEach(function(t) {
              var r = t.to,
                o = t.text,
                a = t.menus;
              o &&
                (Array.isArray(a)
                  ? n.push({ text: o, to: r, menus: e(a) })
                  : n.push({ text: o, to: r }));
            }),
            n
          );
        })([
          { text: '指南', to: '/guide' },
          { text: '版本', to: 'https://github.com/yinjiazeng/docfree/releases' },
          { text: 'GitHub', to: 'https://github.com/yinjiazeng/docfree' },
        ]),
        h = {
          showSidebar: !1,
          pageSidebar: !1,
          sidebarTtile: '',
          sidebarMenus: [],
          pageSidebarMenus: [],
        };
      o.default.render(
        r.default.createElement(function() {
          return r.default.createElement(
            a.Router,
            { type: 'hash' },
            r.default.createElement(
              a.Nuomi,
              { id: 'global', state: h, onInit: null },
              r.default.createElement(
                u.Layout,
                {
                  type: 'hash',
                  title: 'Docfree',
                  nav: v,
                  footer: 'MIT Licensed | Copyright © 2020-present',
                  dataSource: m,
                },
                r.default.createElement(a.ShapeRoute, { routes: y }),
                r.default.createElement(
                  a.Route,
                  { path: '*' },
                  r.default.createElement(u.NotFound, null),
                ),
              ),
            ),
          );
        }, null),
        document.getElementById('root'),
      );
    },
    223: function(e, t, n) {
      'use strict';
      function r(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            if (
              !(Symbol.iterator in Object(e)) &&
              '[object Arguments]' !== Object.prototype.toString.call(e)
            )
              return;
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var u, l = e[Symbol.iterator]();
                !(r = (u = l.next()).done) && (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                r || null == l.return || l.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t) ||
          (function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
          })()
        );
      }
      function o(e) {
        return (o =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          var t = e.code,
            n = e.render,
            o = e.children,
            a = (0, u.useRef)(),
            f = r((0, c.useConnect)(), 1)[0].showCode,
            d = r((0, u.useState)(o), 2),
            p = d[0],
            y = d[1],
            m = r((0, u.useState)(!1), 2),
            b = m[0],
            v = m[1];
          return (
            (0, u.useEffect)(function() {
              n && y(n(a.current));
            }, []),
            (0, u.useEffect)(
              function() {
                v(f);
              },
              [f],
            ),
            u.default.createElement(
              'div',
              { className: 'docfree-playground' },
              u.default.createElement('div', null, u.default.createElement('div', { ref: a }, p)),
              u.default.createElement(
                'a',
                {
                  onClick: function() {
                    v(!b);
                  },
                },
                b
                  ? u.default.createElement(l.EyeInvisibleOutlined, null)
                  : u.default.createElement(l.EyeOutlined, null),
                b ? '隐藏' : '显示',
                '代码',
              ),
              b &&
                [].concat(t).map(function(e, t) {
                  return u.default.createElement(i.default, s({}, e, { key: t }));
                }),
            )
          );
        });
      var a,
        u = (function(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== o(e) && 'function' != typeof e)) return { default: e };
          var t = f();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
              var u = r ? Object.getOwnPropertyDescriptor(e, a) : null;
              u && (u.get || u.set) ? Object.defineProperty(n, a, u) : (n[a] = e[a]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(0)),
        l = n(52),
        c = n(19),
        i = (a = n(648)) && a.__esModule ? a : { default: a };
      function f() {
        if ('function' != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      function s() {
        return (s =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      n(649);
    },
    648: function(e, t, n) {
      'use strict';
      function r(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            if (
              !(Symbol.iterator in Object(e)) &&
              '[object Arguments]' !== Object.prototype.toString.call(e)
            )
              return;
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var u, l = e[Symbol.iterator]();
                !(r = (u = l.next()).done) && (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                r || null == l.return || l.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t) ||
          (function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
          })()
        );
      }
      function o(e) {
        return (o =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          var t = e.lang,
            n = e.content,
            o = r((0, u.useState)(!1), 2),
            a = o[0],
            f = o[1],
            s = (0, u.useRef)(),
            d = function() {
              var e = document.createElement('textarea');
              return (
                (e.style.position = 'fixed'),
                (e.style.top = '-999em'),
                (e.style.left = '-999em'),
                (e.value = n),
                document.body.append(e),
                e.select(),
                document.execCommand('copy'),
                e
              );
            };
          return (
            (0, u.useLayoutEffect)(function() {
              c.hljs.highlightBlock(s.current);
            }, []),
            u.default.createElement(
              c.Card,
              {
                title: t,
                bordered: !1,
                extra: u.default.createElement(
                  c.Tooltip,
                  { placement: 'top', title: '复制'.concat(a ? '成功' : '代码') },
                  a
                    ? u.default.createElement(l.CheckOutlined, { style: { color: 'green' } })
                    : u.default.createElement(l.CopyOutlined, {
                        onClick: function() {
                          var e = d();
                          f(!0),
                            e.remove(),
                            setTimeout(function() {
                              f(!1);
                            }, 1e3);
                        },
                      }),
                ),
              },
              u.default.createElement(i.default, { ref: s, lang: t, content: n }),
            )
          );
        });
      var a,
        u = (function(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== o(e) && 'function' != typeof e)) return { default: e };
          var t = f();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
              var u = r ? Object.getOwnPropertyDescriptor(e, a) : null;
              u && (u.get || u.set) ? Object.defineProperty(n, a, u) : (n[a] = e[a]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(0)),
        l = n(52),
        c = n(19),
        i = (a = n(184)) && a.__esModule ? a : { default: a };
      function f() {
        if ('function' != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
    },
    649: function(e, t, n) {},
    65: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'Playground', {
          enumerable: !0,
          get: function() {
            return r.default;
          },
        }),
        Object.defineProperty(t, 'BlogEntry', {
          enumerable: !0,
          get: function() {
            return o.default;
          },
        }),
        Object.defineProperty(t, 'Content', {
          enumerable: !0,
          get: function() {
            return a.default;
          },
        }),
        Object.defineProperty(t, 'AnchorLinkEnhance', {
          enumerable: !0,
          get: function() {
            return u.default;
          },
        }),
        Object.defineProperty(t, 'Layout', {
          enumerable: !0,
          get: function() {
            return l.default;
          },
        }),
        Object.defineProperty(t, 'Props', {
          enumerable: !0,
          get: function() {
            return c.default;
          },
        }),
        Object.defineProperty(t, 'NotFound', {
          enumerable: !0,
          get: function() {
            return i.default;
          },
        }),
        Object.defineProperty(t, 'PreCode', {
          enumerable: !0,
          get: function() {
            return f.default;
          },
        }),
        Object.defineProperty(t, 'Home', {
          enumerable: !0,
          get: function() {
            return s.default;
          },
        }),
        Object.defineProperty(t, 'Component', {
          enumerable: !0,
          get: function() {
            return d.default;
          },
        });
      var r = p(n(223)),
        o = p(n(650)),
        a = p(n(652)),
        u = p(n(654)),
        l = p(n(655)),
        c = p(n(666)),
        i = p(n(668)),
        f = p(n(184)),
        s = p(n(670)),
        d = p(n(672));
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
    },
    650: function(e, t, n) {
      'use strict';
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function a(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      function u(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            if (
              !(Symbol.iterator in Object(e)) &&
              '[object Arguments]' !== Object.prototype.toString.call(e)
            )
              return;
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var u, l = e[Symbol.iterator]();
                !(r = (u = l.next()).done) && (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                r || null == l.return || l.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t) ||
          (function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
          })()
        );
      }
      function l(e) {
        return (l =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          var t = e.pageSize,
            n = u((0, s.useConnect)(), 2),
            l = n[0].listSource,
            c = n[1],
            d = (0, s.useNuomi)().nuomiProps.location,
            p = l.length,
            y = Number(d.query.page) || 1,
            m = (y - 1) * t,
            b = l.slice(m, m + t),
            v = [];
          b.forEach(function(e) {
            var t = e.to,
              n = e.text,
              r = e.ctime,
              o = (0, f.default)('yyyyMM/dd', new Date(r)),
              a = o.substr(0, 4),
              u = o.substr(4),
              l = v.find(function(e) {
                return e.year === a;
              }),
              c = { date: u, to: t, text: n };
            l && l.year === a ? l.list.push(c) : v.push({ year: a, list: [c] });
          });
          return (
            (0, i.useLayoutEffect)(function() {
              c({ type: 'initData' });
            }, []),
            i.default.createElement(
              'div',
              { className: 'docfree-blog' },
              i.default.createElement(
                'div',
                { className: 'docfree-blog-list' },
                v.map(function(e) {
                  var t = e.year,
                    n = e.list;
                  return i.default.createElement(
                    'dl',
                    { key: t },
                    i.default.createElement('dt', null, t),
                    n.map(function(e) {
                      var t = e.to,
                        n = e.text,
                        r = e.date;
                      return i.default.createElement(
                        'dd',
                        { key: t },
                        i.default.createElement('span', null, r),
                        i.default.createElement(s.Link, { to: t }, n),
                      );
                    }),
                  );
                }),
              ),
              i.default.createElement(s.Pagination, {
                current: y,
                simple: !0,
                pageSize: t,
                total: p,
                onChange: function(e) {
                  d.url, d.search;
                  var t = a(d, ['url', 'search']);
                  s.router.location(
                    (function(e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? r(Object(n), !0).forEach(function(t) {
                              o(e, t, n[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                          : r(Object(n)).forEach(function(t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            });
                      }
                      return e;
                    })({}, t, { query: { page: e } }),
                  );
                },
              }),
            )
          );
        });
      var c,
        i = (function(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== l(e) && 'function' != typeof e)) return { default: e };
          var t = d();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set) ? Object.defineProperty(n, o, a) : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(0)),
        f = (c = n(185)) && c.__esModule ? c : { default: c },
        s = n(19);
      function d() {
        if ('function' != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      n(651);
    },
    651: function(e, t, n) {},
    652: function(e, t, n) {
      'use strict';
      function r(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            if (
              !(Symbol.iterator in Object(e)) &&
              '[object Arguments]' !== Object.prototype.toString.call(e)
            )
              return;
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var u, l = e[Symbol.iterator]();
                !(r = (u = l.next()).done) && (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                r || null == l.return || l.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t) ||
          (function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
          })()
        );
      }
      function o(e) {
        return (o =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a,
        u = (function(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== o(e) && 'function' != typeof e)) return { default: e };
          var t = f();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
              var u = r ? Object.getOwnPropertyDescriptor(e, a) : null;
              u && (u.get || u.set) ? Object.defineProperty(n, a, u) : (n[a] = e[a]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(0)),
        l = (a = n(185)) && a.__esModule ? a : { default: a },
        c = n(52),
        i = n(19);
      function f() {
        if ('function' != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      n(653);
      var s = function(e) {
        var t = e.children,
          n = e.pageExtra,
          o = r((0, i.useConnect)(), 2),
          a = o[0].listSource,
          f = o[1],
          s = (0, i.useNuomi)().nuomiProps,
          d = r((0, u.useState)([]), 2),
          p = d[0],
          y = d[1];
        return (
          (0, u.useLayoutEffect)(function() {
            f({ type: 'initData' }),
              document.querySelectorAll('pre code').forEach(function(e) {
                i.hljs.highlightBlock(e);
              });
          }, []),
          (0, u.useLayoutEffect)(
            function() {
              var e = a.findIndex(function(e) {
                var t = e.text;
                return s.title === t;
              });
              -1 !== e && y([a[e - 1], a[e + 1]]);
            },
            [a],
          ),
          u.default.createElement(
            'div',
            { className: 'docfree-content' },
            t,
            !!n &&
              u.default.createElement(
                i.Row,
                { justify: 'space-between', className: 'docfree-content-extra' },
                u.default.createElement(
                  i.Col,
                  null,
                  u.default.createElement(
                    'a',
                    {
                      href: (function() {
                        var e = n.path;
                        if ('string' == typeof e && e) {
                          var t = s.ext,
                            r = s.filename,
                            o = s.pathname;
                          return (e = e.replace(/\/+$/, '')) + o + r + t;
                        }
                      })(),
                      target: '_blank',
                    },
                    '在',
                    n.platform,
                    '上编辑此文件',
                  ),
                ),
                u.default.createElement(
                  i.Col,
                  null,
                  '最后更新时间：',
                  (0, l.default)(n.format, new Date(s.utime)),
                ),
              ),
            (!!p[0] || !!p[1]) &&
              u.default.createElement(
                i.Row,
                { justify: 'space-between', className: 'docfree-next-prev' },
                u.default.createElement(
                  i.Col,
                  null,
                  !!p[0] &&
                    u.default.createElement(
                      i.Link,
                      { to: p[0].to },
                      u.default.createElement(c.LeftOutlined, null),
                      p[0].text,
                    ),
                ),
                u.default.createElement(
                  i.Col,
                  null,
                  !!p[1] &&
                    u.default.createElement(
                      i.Link,
                      { to: p[1].to },
                      p[1].text,
                      u.default.createElement(c.RightOutlined, null),
                    ),
                ),
              ),
          )
        );
      };
      t.default = s;
    },
    653: function(e, t, n) {},
    654: function(e, t, n) {
      'use strict';
      function r(e) {
        return (r =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function a(e) {
        return (a = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function u(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function l(e, t) {
        return (l =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var c,
        i = n(19);
      function f(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var s = (function(e) {
        function t(e) {
          var n, o, l;
          return (
            (function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            })(this, t),
            (o = this),
            (l = a(t).call(this, e)),
            (n = !l || ('object' !== r(l) && 'function' != typeof l) ? u(o) : l),
            f(u(n), 'offsetTop', void 0),
            f(u(n), 'scrollHandler', function() {
              var e = n.findData().to,
                t = i.router.location(),
                r = t.pathname,
                o = t.search;
              i.router.replace({ pathname: r, search: o, hash: e });
            }),
            f(u(n), 'findData', function() {
              var e = window.scrollY,
                n = t.data;
              return (
                n.find(function(t, r) {
                  var o = t.top,
                    a = n[r + 1],
                    u = o <= e;
                  return a ? u && e < a.top : u;
                }) || { to: '' }
              );
            }),
            (n.offsetTop = 0),
            n
          );
        }
        var n, c, s;
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function');
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && l(e, t);
          })(t, e),
          (n = t),
          (c = [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this;
                setTimeout(function() {
                  var n = e.ref.current,
                    r = window.getComputedStyle(n);
                  e.offsetTop = n.offsetTop + parseFloat(r.paddingTop) || 0;
                  var o = e.props.to,
                    a = t.data;
                  a.length ||
                    setTimeout(function() {
                      window.addEventListener('scroll', e.scrollHandler);
                    }, 1500),
                    a.push({ to: o, top: e.offsetTop });
                }, 0);
              },
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                var e = this.props.to,
                  n = t.data;
                (t.data = n.filter(function(t) {
                  return t.to !== e;
                })),
                  t.data.length || window.removeEventListener('scroll', this.scrollHandler);
              },
            },
          ]) && o(n.prototype, c),
          s && o(n, s),
          t
        );
      })(((c = n(186)) && c.__esModule ? c : { default: c }).default);
      (t.default = s), f(s, 'data', []);
    },
    655: function(e, t, n) {
      'use strict';
      function r(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          var t = e.children,
            n = e.footer,
            i = r(e, ['children', 'footer']);
          return o.default.createElement(
            'div',
            { className: 'docfree-layout' },
            o.default.createElement(c.BackTop, null),
            o.default.createElement(a.default, i),
            o.default.createElement(u.default, null),
            o.default.createElement(
              'section',
              null,
              t,
              o.default.createElement(l.default, { content: n }),
            ),
          );
        });
      var o = i(n(0)),
        a = i(n(656)),
        u = i(n(661)),
        l = i(n(663)),
        c = n(19);
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      n(665);
    },
    656: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          var t = e.title,
            n = e.dataSource,
            i = e.type,
            f = e.nav;
          return r.default.createElement(
            a.Row,
            { className: 'docfree-header', justify: 'space-between' },
            r.default.createElement(a.Col, { className: 'docfree-header-left-col' }),
            r.default.createElement(
              a.Col,
              null,
              r.default.createElement(a.Link, { to: '/', className: 'docfree-logo' }, t),
            ),
            r.default.createElement(
              a.Col,
              { className: 'docfree-header-right-col' },
              r.default.createElement(
                c.default,
                { icon: r.default.createElement(o.UnorderedListOutlined, null) },
                r.default.createElement(u.default, { data: n, type: i }),
                r.default.createElement(l.default, { data: f }),
              ),
            ),
          );
        });
      var r = i(n(0)),
        o = n(52),
        a = n(19),
        u = i(n(657)),
        l = i(n(658)),
        c = i(n(189));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      n(188);
    },
    657: function(e, t, n) {
      'use strict';
      function r(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
              return n;
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance');
          })()
        );
      }
      function o(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            if (
              !(Symbol.iterator in Object(e)) &&
              '[object Arguments]' !== Object.prototype.toString.call(e)
            )
              return;
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var u, l = e[Symbol.iterator]();
                !(r = (u = l.next()).done) && (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                r || null == l.return || l.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t) ||
          (function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
          })()
        );
      }
      function a(e) {
        return (a =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          var t = e.data,
            n = e.type,
            a = o((0, u.useState)(!1), 2),
            i = a[0],
            f = a[1],
            s = o((0, u.useState)([]), 2),
            d = s[0],
            p = s[1];
          return u.default.createElement(
            'div',
            { className: 'docfree-search' },
            u.default.createElement(
              c.Popover,
              {
                overlayClassName: 'docfree-popover',
                overlayStyle: i ? void 0 : { display: 'none' },
                placement: 'bottomLeft',
                trigger: 'focus',
                title: '搜索结果',
                visible: i,
                onVisibleChange: function(e) {
                  e && d.length ? f(!0) : f(!1);
                },
                content: u.default.createElement(c.List, {
                  dataSource: d,
                  renderItem: function(e) {
                    var t = e.text,
                      r = e.to;
                    return u.default.createElement(
                      c.List.Item,
                      {
                        onClick: function() {
                          var e, t, o, a;
                          (t = (e = r).pathname),
                            (o = e.hash),
                            (a = c.router.location()).pathname === t
                              ? ((o = '#'.concat(o)),
                                'hash' === n &&
                                  (o = '#'
                                    .concat(t)
                                    .concat(a.search)
                                    .concat(o)),
                                (window.location.hash = o))
                              : c.router.location({ pathname: t }, { hash: o });
                        },
                      },
                      u.default.createElement('span', null, t),
                    );
                  },
                }),
              },
              u.default.createElement(c.Input, {
                prefix: u.default.createElement(l.SearchOutlined, null),
                onChange: function(e) {
                  var n = e.target.value.trim(),
                    o = [],
                    a = 0;
                  n
                    ? (t.forEach(function(e) {
                        var t = e.pathname,
                          c = e.filename,
                          i = e.title,
                          f = e.headings,
                          s = e.path,
                          d = [{ text: i, depth: 1 }].concat(r(f)),
                          p = t + (/^README$/i.test(c) && '/' === s ? '' : c);
                        d.forEach(function(e) {
                          var t = e.text,
                            r = e.depth,
                            c = t.indexOf(n);
                          if (-1 !== c) {
                            var f = t.substr(0, c),
                              s = t.substr(c + n.length),
                              d = u.default.createElement(
                                u.default.Fragment,
                                null,
                                f,
                                u.default.createElement('b', null, n),
                                s,
                              );
                            o.push({
                              to: { pathname: p, hash: 1 === r ? '' : t },
                              text:
                                1 === r
                                  ? d
                                  : u.default.createElement(
                                      u.default.Fragment,
                                      null,
                                      i,
                                      ' ',
                                      u.default.createElement(l.RightOutlined, null),
                                      ' ',
                                      d,
                                    ),
                              key: a,
                            }),
                              (a += 1);
                          }
                        });
                      }),
                      f(!0))
                    : f(!1),
                    p(o);
                },
                placeholder: '搜索内容...',
              }),
            ),
          );
        });
      var u = (function(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== a(e) && 'function' != typeof e)) return { default: e };
          var t = i();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var u = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              u && (u.get || u.set) ? Object.defineProperty(n, o, u) : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(0)),
        l = n(52),
        c = n(19);
      function i() {
        if ('function' != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (i = function() {
            return e;
          }),
          e
        );
      }
    },
    658: function(e, t, n) {
      'use strict';
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function(t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function a(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function u(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          var t = e.data,
            n = function(e, t, n) {
              var r = t.pathname,
                o = n.to;
              return e || r.startsWith(o);
            },
            r = function e(t) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              return (
                t.forEach(function(t) {
                  var r = t.text,
                    o = t.to,
                    a = t.menus;
                  r && (o && n.push(o), Array.isArray(a) && (n = n.concat(e(a))));
                }),
                n
              );
            };
          return l.default.createElement(c.default, {
            className: 'docfree-nav',
            data: (function e(t) {
              var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                l = arguments.length > 2 ? arguments[2] : void 0;
              return (
                t.forEach(function(t) {
                  var c = t.text,
                    i = t.to,
                    f = t.menus,
                    s = u(t, ['text', 'to', 'menus']);
                  if (c) {
                    var d = Array.isArray(f) && f.length;
                    if (l && !i && f && d) {
                      var p = r(f);
                      a.push(
                        o(
                          {
                            to: '/',
                            text: c,
                            menus: e(f),
                            onClick: function() {
                              return !1;
                            },
                            isActive: function(e, t) {
                              var n = t.pathname,
                                r = !0,
                                o = !1,
                                a = void 0;
                              try {
                                for (
                                  var u, l = p[Symbol.iterator]();
                                  !(r = (u = l.next()).done);
                                  r = !0
                                ) {
                                  var c = u.value;
                                  if (n.startsWith(c)) return !0;
                                }
                              } catch (e) {
                                (o = !0), (a = e);
                              } finally {
                                try {
                                  r || null == l.return || l.return();
                                } finally {
                                  if (o) throw a;
                                }
                              }
                              return !1;
                            },
                          },
                          s,
                        ),
                      );
                    } else
                      f && d
                        ? a.push(o({}, t, { menus: e(f), isActive: i ? n : null }))
                        : i
                        ? a.push(o({}, t, { isActive: n }))
                        : a.push(t);
                  }
                }),
                a
              );
            })(t, [], !0),
          });
        });
      var l = i(n(0)),
        c = i(n(187));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      n(188);
    },
    659: function(e, t, n) {},
    660: function(e, t, n) {},
    661: function(e, t, n) {
      'use strict';
      function r(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            if (
              !(Symbol.iterator in Object(e)) &&
              '[object Arguments]' !== Object.prototype.toString.call(e)
            )
              return;
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var u, l = e[Symbol.iterator]();
                !(r = (u = l.next()).done) && (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                r || null == l.return || l.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t) ||
          (function() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
          })()
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function() {
          var e = r((0, u.useConnect)(), 1)[0],
            t = e.showSidebar,
            n = e.showPageSidebar,
            i = e.sidebarMenus,
            f = e.sidebarTitle,
            s = e.pageSidebarMenus;
          return o.default.createElement(
            o.default.Fragment,
            null,
            t &&
              o.default.createElement(
                'div',
                { className: 'docfree-sidebar' },
                o.default.createElement(
                  c.default,
                  { icon: o.default.createElement(a.MenuUnfoldOutlined, null), dir: 'left' },
                  !!f && o.default.createElement('strong', null, f),
                  o.default.createElement(l.default, { data: i }),
                ),
              ),
            n &&
              o.default.createElement(
                'div',
                { className: 'docfree-page-sidebar' },
                o.default.createElement(l.default, { data: s }),
              ),
          );
        });
      var o = i(n(0)),
        a = n(52),
        u = n(19),
        l = i(n(187)),
        c = i(n(189));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      n(662);
    },
    662: function(e, t, n) {},
    663: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          var t = e.content;
          return o.default.createElement('footer', { className: 'docfree-footer' }, t);
        });
      var r,
        o = (r = n(0)) && r.__esModule ? r : { default: r };
      n(664);
    },
    664: function(e, t, n) {},
    665: function(e, t, n) {},
    666: function(e, t, n) {
      'use strict';
      function r(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
              return n;
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance');
          })()
        );
      }
      function o(e) {
        return (o =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a,
        u = (function(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== o(e) && 'function' != typeof e)) return { default: e };
          var t = c();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
              var u = r ? Object.getOwnPropertyDescriptor(e, a) : null;
              u && (u.get || u.set) ? Object.defineProperty(n, a, u) : (n[a] = e[a]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(0)),
        l = (a = n(1)) && a.__esModule ? a : { default: a };
      function c() {
        if ('function' != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      function i(e) {
        var t = e.titles,
          n = e.datas,
          a = e.of,
          l = e.widths,
          c = (0, u.useMemo)(function() {
            var e = [];
            if (n) e = r(n);
            else if (a) {
              var l = a.propTypes || {},
                c = a.defaultProps || {},
                i = a.__PROPTYPES_DESCRIPTIONS__ || {};
              Object.keys(l).forEach(function(t) {
                var n = l[t].type,
                  r = i[t],
                  a = (function(e) {
                    if (void 0 !== e)
                      return 'object' === o(e) ||
                        'string' == typeof e ||
                        'number' == typeof e ||
                        'boolean' == typeof e
                        ? JSON.stringify(e)
                        : o(e);
                  })(c[t]);
                n && (n = Array.from(new Set([].concat(n))).join(' | ')),
                  'string' == typeof r &&
                    (r = r
                      .trim()
                      .split(/[\r\n]+/)
                      .filter(function(e) {
                        return !!e.trim();
                      })
                      .map(function(e, t) {
                        return u.default.createElement('div', { key: t }, e.trim());
                      })),
                  e.push([t, n, a, r]);
              });
            }
            var f = t.length;
            return e.map(function(e) {
              var t = e.length;
              return t > f
                ? e.slice(0, f)
                : t < f
                ? Object.assign(new Array(f).fill(void 0), e)
                : e;
            });
          }, []);
        return u.default.createElement(
          'table',
          { className: 'docfree-props' },
          u.default.createElement(
            'thead',
            null,
            u.default.createElement(
              'tr',
              null,
              t.map(function(e, t) {
                return u.default.createElement('th', { key: t, style: { width: l[t] } }, e);
              }),
            ),
          ),
          u.default.createElement(
            'tbody',
            null,
            c.map(function(e, t) {
              return u.default.createElement(
                'tr',
                { key: t },
                e.map(function(e, t) {
                  return u.default.createElement('td', { key: t }, null == e ? '-' : e);
                }),
              );
            }),
          ),
        );
      }
      n(667),
        (i.defaultProps = {
          widths: ['22%', '22%', '22%'],
          titles: ['参数', '类型', '默认值', '说明'],
          datas: null,
          of: null,
        }),
        (i.propTypes = {
          widths: l.default.arrayOf(l.default.any),
          titles: l.default.arrayOf(l.default.string),
          datas: l.default.oneOfType([
            l.default.arrayOf(l.default.arrayOf(l.default.string)),
            l.default.arrayOf(l.default.arrayOf(l.default.element)),
          ]),
          of: l.default.elementType,
        });
      var f = i;
      t.default = f;
    },
    667: function(e, t, n) {},
    668: function(e, t, n) {
      'use strict';
      function r(e) {
        return (r =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function() {
          return (
            (0, o.useLayoutEffect)(function() {
              a.store.dispatch({ type: 'global/_updateState', payload: { showPageSidebar: !1 } });
            }, []),
            o.default.createElement(
              'div',
              { className: 'docfree-404' },
              o.default.createElement(a.Result, { status: '404', title: 'Not Found' }),
            )
          );
        });
      var o = (function(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== r(e) && 'function' != typeof e)) return { default: e };
          var t = u();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
              var l = o ? Object.getOwnPropertyDescriptor(e, a) : null;
              l && (l.get || l.set) ? Object.defineProperty(n, a, l) : (n[a] = e[a]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(0)),
        a = n(19);
      function u() {
        if ('function' != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      n(669);
    },
    669: function(e, t, n) {},
    670: function(e, t, n) {
      'use strict';
      function r(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          var t = e.title,
            n = e.description,
            o = e.buttons,
            c = e.features;
          return a.default.createElement(
            'div',
            { className: 'docfree-home' },
            !!t && a.default.createElement('h1', null, t),
            !!n && a.default.createElement('h2', null, n),
            Array.isArray(o) &&
              a.default.createElement(
                'p',
                null,
                o.map(function(e, t) {
                  var n = e.to,
                    o = e.text,
                    c = r(e, ['to', 'text']);
                  return a.default.createElement(
                    u.Button,
                    l({ size: 'large' }, c, {
                      key: t,
                      onClick: function() {
                        return (function(e) {
                          e && (/^(https?:)?\/\//.test(e) ? window.open(e) : u.router.location(e));
                        })(n);
                      },
                    }),
                    o,
                  );
                }),
              ),
            Array.isArray(c) &&
              a.default.createElement(
                'div',
                null,
                c.map(function(e, t) {
                  return a.default.createElement(
                    'dl',
                    { key: t },
                    a.default.createElement('dt', null, e.title),
                    a.default.createElement('dd', null, e.detail),
                  );
                }),
              ),
          );
        });
      var o,
        a = (o = n(0)) && o.__esModule ? o : { default: o },
        u = n(19);
      function l() {
        return (l =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      n(671);
    },
    671: function(e, t, n) {},
    672: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          var t = e.render,
            n = e.children;
          if ('function' == typeof t) return t();
          return n;
        });
    },
    673: function(e, t, n) {},
    674: function(e, t, n) {
      'use strict';
      function r(e) {
        return (r =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.MDXContent = p);
      var o,
        a = n(0),
        u = (o = a) && o.__esModule ? o : { default: o },
        l = (function(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== r(e) && 'function' != typeof e)) return { default: e };
          var t = c();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
              var u = o ? Object.getOwnPropertyDescriptor(e, a) : null;
              u && (u.get || u.set) ? Object.defineProperty(n, a, u) : (n[a] = e[a]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(65));
      function c() {
        if ('function' != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      function i() {
        return (i =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function f(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      var s = {},
        d = l.Content;
      function p(e) {
        var t = e.components,
          n = f(e, ['components']);
        return u.default.createElement(
          d,
          i({}, s, n, { components: t }),
          u.default.createElement(l.Home, {
            title: 'Docfree',
            description: '基于webpack+nuomi开发的md静态文档生成工具',
            buttons: [
              { type: 'primary', text: '查看功能 →', to: '/guide/functions' },
              { text: 'GITHUB', to: 'https://github.com/yinjiazeng/docfree' },
            ],
            features: [
              {
                title: '简洁至上',
                detail: '以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。',
              },
              {
                title: 'React 驱动',
                detail:
                  '享受 React + webpack 的开发体验，可以在 Markdown 中使用 React 组件，也可以基于 React 组件自动生成组件 API 文档。',
              },
              {
                title: '插件化',
                detail: u.default.createElement(
                  u.default.Fragment,
                  null,
                  '基于',
                  u.default.createElement(
                    'a',
                    { href: 'https://remark.js.org/', target: '_blank' },
                    'remark',
                  ),
                  ' 插件化机制，可以使用丰富的第三方插件增强写作体验。',
                ),
              },
            ],
          }),
          u.default.createElement(
            'h2',
            null,
            u.default.createElement(l.AnchorLinkEnhance, { to: '安装使用吧' }, '#'),
            u.default.createElement('span', null, '安装使用吧'),
          ),
          u.default.createElement(
            'pre',
            null,
            u.default.createElement(
              'code',
              { className: 'language-sh' },
              '# 安装\nyarn global add docfree\n\n# 初始化\ndocfree init docs\n\n# 开始写作\ndocfree dev docs\n\n# 构建静态文件\ndocfree build docs\n',
            ),
          ),
        );
      }
      p.isMDXComponent = !0;
      var y = {
        state: { showCode: !1 },
        headings: [{ text: '安装使用吧', depth: 2, level: 1 }],
        showSidebar: !1,
        showPageSidebar: !1,
        sidebarMenus: [],
        pageSidebarMenus: [],
        utime: 1586914287025.555,
        render: function() {
          return u.default.createElement(p, { pageExtra: !1 });
        },
        title: 'Docfree',
      };
      t.default = y;
    },
    675: function(e, t, n) {
      'use strict';
      function r(e) {
        return (r =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.MDXContent = p);
      var o,
        a = n(0),
        u = (o = a) && o.__esModule ? o : { default: o },
        l = (function(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== r(e) && 'function' != typeof e)) return { default: e };
          var t = c();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
              var u = o ? Object.getOwnPropertyDescriptor(e, a) : null;
              u && (u.get || u.set) ? Object.defineProperty(n, a, u) : (n[a] = e[a]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(65));
      function c() {
        if ('function' != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      function i() {
        return (i =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function f(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      var s = {},
        d = l.Content;
      function p(e) {
        var t = e.components,
          n = f(e, ['components']);
        return u.default.createElement(
          d,
          i({}, s, n, { components: t }),
          u.default.createElement(
            'h1',
            null,
            u.default.createElement(l.AnchorLinkEnhance, { to: '介绍' }, '#'),
            u.default.createElement('span', null, '介绍'),
          ),
          u.default.createElement(
            'p',
            null,
            u.default.createElement('code', { className: 'inline' }, 'docfrees'),
            '是基于',
            u.default.createElement('code', { className: 'inline' }, 'webpack'),
            '+',
            u.default.createElement('code', { className: 'inline' }, 'nuomi'),
            '开发的md静态文档生成工具',
          ),
          u.default.createElement(
            'h2',
            null,
            u.default.createElement(l.AnchorLinkEnhance, { to: '特性' }, '#'),
            u.default.createElement('span', null, '特性'),
          ),
          u.default.createElement(
            'ul',
            null,
            u.default.createElement(
              'li',
              null,
              '以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。',
            ),
            u.default.createElement(
              'li',
              null,
              '享受 React + webpack 的开发体验，可以在 Markdown 中使用 React 组件，也可以基于 React 组件自动生成组件 API 文档。',
            ),
            u.default.createElement(
              'li',
              null,
              '基于',
              u.default.createElement(
                'a',
                { href: 'https://remark.js.org/', target: '_blank' },
                'remark',
              ),
              '插件化机制，可以使用丰富的第三方插件增强写作体验。',
            ),
          ),
          u.default.createElement(
            'h2',
            null,
            u.default.createElement(l.AnchorLinkEnhance, { to: '它能做什么？' }, '#'),
            u.default.createElement('span', null, '它能做什么？'),
          ),
          u.default.createElement('p', null, '写组件库文档，写博客。'),
        );
      }
      p.isMDXComponent = !0;
      var y = {
        state: { showCode: !1 },
        headings: [
          { text: '特性', depth: 2, level: 1 },
          { text: '它能做什么？', depth: 2, level: 1 },
        ],
        showSidebar: !0,
        showPageSidebar: !1,
        sidebarMenus: [
          { text: '特性', depth: 2, level: 1 },
          { text: '它能做什么？', depth: 2, level: 1 },
        ],
        pageSidebarMenus: [],
        utime: 1586914285717.9224,
        render: function() {
          return u.default.createElement(p, {
            pageExtra: {
              platform: 'Github',
              path: 'https://github.com/yinjiazeng/docfree/tree/master/doc',
              format: 'yyyy/MM/dd hh:mm:ss',
            },
          });
        },
        title: '介绍',
      };
      t.default = y;
    },
    676: function(e, t, n) {
      'use strict';
      function r(e) {
        return (r =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.MDXContent = v);
      var o,
        a = n(0),
        u = (o = a) && o.__esModule ? o : { default: o },
        l = (function(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== r(e) && 'function' != typeof e)) return { default: e };
          var t = c();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
              var u = o ? Object.getOwnPropertyDescriptor(e, a) : null;
              u && (u.get || u.set) ? Object.defineProperty(n, a, u) : (n[a] = e[a]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(65));
      function c() {
        if ('function' != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      function i() {
        return (i =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function f(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
              return n;
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance');
          })()
        );
      }
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function p(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function(e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      var y = function(e) {
          return function(t) {
            return (
              console.warn(
                'Component ' +
                  e +
                  ' was not imported, exported, or provided by MDXProvider as global scope',
              ),
              u.default.createElement('div', t)
            );
          };
        },
        m = (y('Playground'), y('Alert'), {}),
        b = l.Content;
      function v(e) {
        var t = e.components,
          r = p(e, ['components']);
        return u.default.createElement(
          b,
          i({}, m, r, { components: t }),
          u.default.createElement(
            'h2',
            null,
            u.default.createElement(l.AnchorLinkEnhance, { to: '展示组件' }, '#'),
            u.default.createElement('span', null, '展示组件'),
          ),
          u.default.createElement(l.Playground, {
            code: [
              {
                lang: 'javascript',
                content:
                  'import React from \'react\';\nimport { Button } from \'antd\';\n\n<div className="buttons">\n  <Button type="primary">Primary</Button>\n  <Button>Default</Button>\n  <Button type="dashed">Dashed</Button>\n  <Button type="link">Link</Button>\n</div>',
              },
              {
                lang: 'less',
                content: '.buttons {\n  & > button {\n    margin-right: 8px;\n  }\n}',
              },
            ],
            render: function() {
              n(42);
              var e = (function(e) {
                return e && e.__esModule ? e : { default: e };
              })(n(40));
              return (
                n(677),
                n(0),
                u.default.createElement(
                  'div',
                  { className: 'buttons' },
                  u.default.createElement(e.default, { type: 'primary' }, 'Primary'),
                  u.default.createElement(e.default, null, 'Default'),
                  u.default.createElement(e.default, { type: 'dashed' }, 'Dashed'),
                  u.default.createElement(e.default, { type: 'link' }, 'Link'),
                )
              );
            },
          }),
          u.default.createElement(
            'p',
            null,
            u.default.createElement('strong', null, 'markdown代码'),
          ),
          u.default.createElement(
            'pre',
            null,
            u.default.createElement(
              'code',
              { className: 'language-js' },
              '//```jsx\nimport React from \'react\';\nimport { Button } from \'antd\';\n\n<div className="buttons">\n  <Button type="primary">Primary</Button>\n  <Button>Default</Button>\n  <Button type="dashed">Dashed</Button>\n  <Button type="link">Link</Button>\n</div>\n\n<style lang="less">\n.buttons {\n  & > button {\n    margin-right: 8px;\n  }\n}\n</style>\n//```\n',
            ),
          ),
          u.default.createElement(
            'p',
            null,
            '可以直接在',
            u.default.createElement('code', { className: 'inline' }, 'jsx'),
            '中使用',
            u.default.createElement('code', { className: 'inline' }, 'style'),
            '标签写样式，',
            u.default.createElement('code', { className: 'inline' }, 'lang'),
            '支持',
            u.default.createElement(
              'code',
              { className: 'inline' },
              'css/less/sass/scss/styl/stylus',
            ),
            '，默认支持',
            u.default.createElement('code', { className: 'inline' }, 'css/less'),
            '，其他支持需安装对应的',
            u.default.createElement('code', { className: 'inline' }, 'loader'),
            '。\n也支持',
            u.default.createElement('code', { className: 'inline' }, 'cssModules'),
            '，通过',
            u.default.createElement('code', { className: 'inline' }, '$style'),
            '获取样式，熟悉',
            u.default.createElement('code', { className: 'inline' }, 'Vue'),
            '的应该知道怎么用。',
          ),
          u.default.createElement(
            'h2',
            null,
            u.default.createElement(l.AnchorLinkEnhance, { to: '支持Typescript' }, '#'),
            u.default.createElement('span', null, '支持Typescript'),
          ),
          u.default.createElement(l.Playground, {
            code: [
              {
                lang: 'typescript',
                content:
                  'import React, { ElementType } from \'react\';\nimport { Button } from \'antd\';\n\nconst Buttons: ElementType<any> = () => (\n  <div className={$style.buttons}>\n    <Button type="primary">Primary</Button>\n    <Button>Default</Button>\n    <Button type="dashed">Dashed</Button>\n    <Button type="link">Link</Button>\n  </div>\n);\n\n<Buttons />',
              },
              {
                lang: 'less',
                content: '.buttons {\n  & > button {\n    margin-right: 8px;\n  }\n}',
              },
            ],
            render: function() {
              n(42);
              var e = r(n(40)),
                t = r(n(680));
              function r(e) {
                return e && e.__esModule ? e : { default: e };
              }
              n(0);
              return u.default.createElement(function() {
                return u.default.createElement(
                  'div',
                  { className: t.default.buttons },
                  u.default.createElement(e.default, { type: 'primary' }, 'Primary'),
                  u.default.createElement(e.default, null, 'Default'),
                  u.default.createElement(e.default, { type: 'dashed' }, 'Dashed'),
                  u.default.createElement(e.default, { type: 'link' }, 'Link'),
                );
              }, null);
            },
          }),
          u.default.createElement(
            'p',
            null,
            u.default.createElement('strong', null, 'markdown代码'),
          ),
          u.default.createElement(
            'pre',
            null,
            u.default.createElement(
              'code',
              { className: 'language-js' },
              '//```tsx\nimport React, { ElementType } from \'react\';\nimport { Button } from \'antd\';\n\nconst Buttons: ElementType<any> = () => (\n  <div className={$style.buttons}>\n    <Button type="primary">Primary</Button>\n    <Button>Default</Button>\n    <Button type="dashed">Dashed</Button>\n    <Button type="link">Link</Button>\n  </div>\n);\n\n<Buttons />\n\n<style lang="less" module>\n.buttons {\n  & > button {\n    margin-right: 8px;\n  }\n}\n</style>\n//```\n',
            ),
          ),
          u.default.createElement(
            'h2',
            null,
            u.default.createElement(l.AnchorLinkEnhance, { to: '引入文件展示组件' }, '#'),
            u.default.createElement('span', null, '引入文件展示组件'),
          ),
          u.default.createElement(l.Playground, {
            code: [
              {
                lang: 'javascript',
                content:
                  "import React from 'react';\nimport { Button } from 'antd';\nimport propTypes from 'prop-types';\nimport style from './style.module.less';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div className={style.buttons}>\n        <Button type=\"primary\">Primary</Button>\n        <Button>Default</Button>\n        <Button type=\"dashed\">Dashed</Button>\n        <Button type=\"link\">Link</Button>\n      </div>\n    );\n  }\n}\n\nDemo.defaultProps = {\n  title: 'docfree',\n  isActive: null,\n};\n\nDemo.propTypes = {\n  // 标题\n  title: propTypes.oneOf(['docfree', true, false, null]),\n  // 是否选中\n  isActive: propTypes.func,\n};\n\nexport default Demo;",
              },
              {
                lang: 'less',
                content: '.buttons {\n  & > button {\n    margin-right: 8px;\n  }\n}',
              },
            ],
            render: function() {
              var e = (function(e) {
                return e && e.default ? e.default : e;
              })(n(683));
              return u.default.createElement(e, null);
            },
          }),
          u.default.createElement(
            'p',
            null,
            u.default.createElement('strong', null, 'markdown代码'),
          ),
          u.default.createElement(
            'pre',
            null,
            u.default.createElement(
              'code',
              { className: 'language-js' },
              '<Docfree.Playground src="./Demo.jsx" />\n',
            ),
          ),
          u.default.createElement(
            'h2',
            null,
            u.default.createElement(l.AnchorLinkEnhance, { to: '自动生成组件文档' }, '#'),
            u.default.createElement('span', null, '自动生成组件文档'),
          ),
          u.default.createElement(l.Props, {
            of: (function(e) {
              return e && e.default ? e.default : e;
            })(n(684)),
          }),
          u.default.createElement(
            'p',
            null,
            u.default.createElement('strong', null, 'markdown代码'),
          ),
          u.default.createElement(
            'pre',
            null,
            u.default.createElement(
              'code',
              { className: 'language-js' },
              '<Docfree.Props src="./Demo.jsx" />\n',
            ),
          ),
          u.default.createElement(
            'p',
            null,
            u.default.createElement('code', { className: 'inline' }, 'src'),
            '引入的组件需包含',
            u.default.createElement('code', { className: 'inline' }, 'defaultProps'),
            '和',
            u.default.createElement('code', { className: 'inline' }, 'propTypes'),
            '2个静态对象，并且需要在组件外部定义，类组件不要使用',
            u.default.createElement('code', { className: 'inline' }, 'static'),
            '定义，否则无法解析，\n',
            u.default.createElement('code', { className: 'inline' }, 'propTypes'),
            '对象的值必须用 ',
            u.default.createElement(
              'a',
              { href: 'https://github.com/facebook/prop-types', target: '_blank' },
              'prop-types',
            ),
            ' 定义，可以在属性的上方使用',
            u.default.createElement('code', { className: 'inline' }, '//'),
            '或',
            u.default.createElement('code', { className: 'inline' }, '/**/'),
            '注释\n自动生成接口说明。',
          ),
          u.default.createElement(
            'section',
            null,
            u.default.createElement(l.Component, {
              render: function() {
                var e = n(75).default;
                return (
                  n(117),
                  u.default.createElement(e, {
                    type: 'warning',
                    message: '注意',
                    description:
                      '<Docfree.Props /> 和 <Docfree.Playground /> src属性必须包含文件类型后缀，比如.jsx/.tsx。',
                  })
                );
              },
            }),
          ),
          u.default.createElement(
            'h2',
            null,
            u.default.createElement(l.AnchorLinkEnhance, { to: '支持Vue' }, '#'),
            u.default.createElement('span', null, '支持Vue'),
          ),
          u.default.createElement(
            'pre',
            null,
            u.default.createElement(
              'code',
              { className: 'language-sh' },
              'yarn add webpack vue-loader vue vue-template-compiler\n',
            ),
          ),
          u.default.createElement(
            'pre',
            null,
            u.default.createElement(
              'code',
              { className: 'language-js' },
              "// docs/.docfree/config.js\n\nconst VuePlugin = require('vue-loader/lib/plugin-webpack4');\n\nmodule.exports = {\n  // ...其他选项\n  webpack: {\n    plugins: [new VuePlugin()],\n    module: {\n      rules: [{\n        test: /\\.vue$/,\n        loader: 'vue-loader',\n      }, {\n        exclude: /\\.vue$/,\n        loader: 'file-loader',\n      }]\n    }\n  },\n};\n",
            ),
          ),
          u.default.createElement(l.Playground, {
            code: [
              {
                lang: 'vue',
                content:
                  '<template>\n  <div :class="$style.div">\n    <p>点击试一试</p>\n    <button-counter></button-counter>\n  </div>\n</template>\n\n<script>\nimport buttonCounter from \'./button-counter.vue\';\n\nexport default {\n  components: {\n    \'button-counter\': buttonCounter,\n  }\n}\n</script>\n\n<style lang="less" module>\n.div {\n  & > p {\n    color: #1890ff;\n  }\n}\n</style>',
              },
            ],
            render: function(e) {
              var t = n(706),
                r =
                  {
                    components: {
                      'button-counter': (function(e) {
                        return e && e.__esModule ? e : { default: e };
                      })(n(709)).default,
                    },
                  } || {},
                o = r.mixins,
                a = void 0 === o ? [] : o,
                u = p(r, ['mixins']),
                l = {};
              l.docfree$style = n(710);
              var c =
                '<div :class="$style.div">\n    <p>点击试一试</p>\n    <button-counter></button-counter>\n  </div>';
              l.docfree$style && (c = c.replace(/(\$style\.)/g, 'docfree$1')),
                new t(
                  (function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? s(Object(n), !0).forEach(function(t) {
                            d(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : s(Object(n)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                    }
                    return e;
                  })({}, u, { el: e, template: c, mixins: [].concat(f(a), [{ data: l }]) }),
                );
            },
          }),
          u.default.createElement(
            'p',
            null,
            u.default.createElement('strong', null, 'markdown代码'),
          ),
          u.default.createElement(
            'pre',
            null,
            u.default.createElement(
              'code',
              { className: 'language-html' },
              '//```vue\n<template>\n  <div :class="$style.div">\n    <p>点击试一试</p>\n    <button-counter></button-counter>\n  </div>\n</template>\n\n<script>\nimport buttonCounter from \'./button-counter.vue\';\n\nexport default {\n  components: {\n    \'button-counter\': buttonCounter,\n  }\n}\n</script>\n\n<style lang="less" module>\n.div {\n  & > p {\n    color: #1890ff;\n  }\n}\n</style>\n//```\n',
            ),
          ),
          u.default.createElement(
            'h2',
            null,
            u.default.createElement(l.AnchorLinkEnhance, { to: '插件使用' }, '#'),
            u.default.createElement('span', null, '插件使用'),
          ),
          u.default.createElement(
            'h3',
            null,
            u.default.createElement(l.AnchorLinkEnhance, { to: 'tip' }, '#'),
            u.default.createElement('span', null, 'tip'),
          ),
          u.default.createElement(
            'pre',
            null,
            u.default.createElement(
              'code',
              { className: 'language-sh' },
              'yarn add antd remark-docfree-tip remark-emoji\n',
            ),
          ),
          u.default.createElement(
            'pre',
            null,
            u.default.createElement(
              'code',
              { className: 'language-js' },
              "// docs/.docfree/config.js\n\nmodule.exports = {\n  // ...其他选项\n  plugins: ['docfree-tip'],\n};\n",
            ),
          ),
          u.default.createElement(
            'section',
            null,
            u.default.createElement(l.Component, {
              render: function() {
                var e = n(75).default;
                return (
                  n(117),
                  u.default.createElement(e, {
                    type: 'success',
                    message: '正确',
                    description: u.default.createElement(l.PreCode, {
                      lang: 'jsx',
                      content: '<div></div>',
                    }),
                  })
                );
              },
            }),
          ),
          u.default.createElement(
            'section',
            null,
            u.default.createElement(l.Component, {
              render: function() {
                var e = n(75).default;
                return (
                  n(117),
                  u.default.createElement(e, {
                    type: 'error',
                    message: '错误',
                    description: u.default.createElement(l.PreCode, {
                      lang: 'jsx',
                      content: '<div></d>',
                    }),
                  })
                );
              },
            }),
          ),
          u.default.createElement(
            'p',
            null,
            u.default.createElement('strong', null, 'markdown代码'),
          ),
          u.default.createElement(
            'pre',
            null,
            u.default.createElement(
              'code',
              {},
              '//```tip:success:jsx\n正确\n<div></div>\n//```\n\n//```tip:error:jsx\n错误\n<div></d>\n//```\n',
            ),
          ),
          u.default.createElement(
            'h3',
            null,
            u.default.createElement(l.AnchorLinkEnhance, { to: 'emoji' }, '#'),
            u.default.createElement('span', null, 'emoji'),
          ),
          u.default.createElement(
            'pre',
            null,
            u.default.createElement(
              'code',
              { className: 'language-sh' },
              'yarn add remark-emoji\n',
            ),
          ),
          u.default.createElement(
            'pre',
            null,
            u.default.createElement(
              'code',
              { className: 'language-js' },
              "// docs/.docfree/config.js\n\nmodule.exports = {\n  // ...其他选项\n  plugins: ['emoji'],\n};\n",
            ),
          ),
          u.default.createElement('p', null, '🐶 👍 👍 👍 👍 👍'),
          u.default.createElement(
            'p',
            null,
            u.default.createElement('strong', null, 'markdown代码'),
          ),
          u.default.createElement(
            'pre',
            null,
            u.default.createElement('code', {}, ':dog: :+1: :+1: :+1: :+1: :+1:\n'),
          ),
          u.default.createElement(
            'h2',
            null,
            u.default.createElement(l.AnchorLinkEnhance, { to: '其他功能' }, '#'),
            u.default.createElement('span', null, '其他功能'),
          ),
          u.default.createElement('p', null, '文档整理中...'),
        );
      }
      v.isMDXComponent = !0;
      var h = {
        state: { showCode: !1 },
        headings: [
          { text: '展示组件', depth: 2, level: 1 },
          { text: '支持Typescript', depth: 2, level: 1 },
          { text: '引入文件展示组件', depth: 2, level: 1 },
          { text: '自动生成组件文档', depth: 2, level: 1 },
          { text: '支持Vue', depth: 2, level: 1 },
          { text: '插件使用', depth: 2, level: 1 },
          { text: 'tip', depth: 3, level: 2 },
          { text: 'emoji', depth: 3, level: 2 },
          { text: '其他功能', depth: 2, level: 1 },
        ],
        showSidebar: !0,
        showPageSidebar: !1,
        sidebarMenus: [
          { text: '展示组件', depth: 2, level: 1 },
          { text: '支持Typescript', depth: 2, level: 1 },
          { text: '引入文件展示组件', depth: 2, level: 1 },
          { text: '自动生成组件文档', depth: 2, level: 1 },
          { text: '支持Vue', depth: 2, level: 1 },
          { text: '插件使用', depth: 2, level: 1 },
          { text: 'tip', depth: 3, level: 2 },
          { text: 'emoji', depth: 3, level: 2 },
          { text: '其他功能', depth: 2, level: 1 },
        ],
        pageSidebarMenus: [],
        utime: 1586947241226.944,
        render: function() {
          return u.default.createElement(v, {
            pageExtra: {
              platform: 'Github',
              path: 'https://github.com/yinjiazeng/docfree/tree/master/doc',
              format: 'yyyy/MM/dd hh:mm:ss',
            },
          });
        },
        title: '查看功能',
      };
      t.default = h;
    },
    677: function(e, t, n) {
      'use strict';
      e.exports = n(678);
    },
    678: function(e, t, n) {
      e.exports = n(679);
    },
    679: function(e, t, n) {},
    680: function(e, t, n) {
      'use strict';
      e.exports = n(681);
    },
    681: function(e, t, n) {
      e.exports = n(682);
    },
    682: function(e, t, n) {
      e.exports = { buttons: 'Y95AwFsXPcUhEpKPlOx9H' };
    },
    683: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = l(n(40));
      n(42);
      var o = l(n(0)),
        a = l(n(1)),
        u = l(n(190));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e) {
        return (c =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function f(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e, t) {
        return !t || ('object' !== c(t) && 'function' != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e)
          : t;
      }
      function d(e) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var y = (function(e) {
        function t() {
          return i(this, t), s(this, d(t).apply(this, arguments));
        }
        var n, a, l;
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function');
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && p(e, t);
          })(t, e),
          (n = t),
          (a = [
            {
              key: 'render',
              value: function() {
                return o.default.createElement(
                  'div',
                  { className: u.default.buttons },
                  o.default.createElement(r.default, { type: 'primary' }, 'Primary'),
                  o.default.createElement(r.default, null, 'Default'),
                  o.default.createElement(r.default, { type: 'dashed' }, 'Dashed'),
                  o.default.createElement(r.default, { type: 'link' }, 'Link'),
                );
              },
            },
          ]) && f(n.prototype, a),
          l && f(n, l),
          t
        );
      })(o.default.Component);
      (y.defaultProps = { title: 'docfree', isActive: null }),
        (y.propTypes = {
          title: a.default.oneOf(['docfree', !0, !1, null]),
          isActive: a.default.func,
        }),
        (t.default = y);
    },
    684: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = l(n(40));
      n(42);
      var o = l(n(0)),
        a = l(n(685)),
        u = l(n(190));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e) {
        return (c =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function f(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function s(e, t) {
        return !t || ('object' !== c(t) && 'function' != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e)
          : t;
      }
      function d(e) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var y = (function(e) {
        function t() {
          return i(this, t), s(this, d(t).apply(this, arguments));
        }
        var n, a, l;
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function');
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && p(e, t);
          })(t, e),
          (n = t),
          (a = [
            {
              key: 'render',
              value: function() {
                return o.default.createElement(
                  'div',
                  { className: u.default.buttons },
                  o.default.createElement(r.default, { type: 'primary' }, 'Primary'),
                  o.default.createElement(r.default, null, 'Default'),
                  o.default.createElement(r.default, { type: 'dashed' }, 'Dashed'),
                  o.default.createElement(r.default, { type: 'link' }, 'Link'),
                );
              },
            },
          ]) && f(n.prototype, a),
          l && f(n, l),
          t
        );
      })(o.default.Component);
      (y.defaultProps = { title: 'docfree', isActive: null }),
        (y.propTypes = {
          title: a.default.oneOf(['docfree', !0, !1, null]),
          isActive: a.default.func,
        }),
        (y.__PROPTYPES_DESCRIPTIONS__ = { title: ' 标题', isActive: ' 是否选中' }),
        (t.default = y);
    },
    685: function(e, t, n) {
      'use strict';
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function a(e) {
        return (a =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var u = {};
      t.default = void 0;
      var l = f(n(686));
      Object.keys(l).forEach(function(e) {
        'default' !== e &&
          '__esModule' !== e &&
          (Object.prototype.hasOwnProperty.call(u, e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function() {
                return l[e];
              },
            }));
      });
      var c = f(n(687));
      function i() {
        if ('function' != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (i = function() {
            return e;
          }),
          e
        );
      }
      function f(e) {
        if (e && e.__esModule) return e;
        if (null === e || ('object' !== a(e) && 'function' != typeof e)) return { default: e };
        var t = i();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var u = r ? Object.getOwnPropertyDescriptor(e, o) : null;
            u && (u.get || u.set) ? Object.defineProperty(n, o, u) : (n[o] = e[o]);
          }
        return (n.default = e), t && t.set(e, n), n;
      }
      Object.keys(c).forEach(function(e) {
        'default' !== e &&
          '__esModule' !== e &&
          (Object.prototype.hasOwnProperty.call(u, e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function() {
                return c[e];
              },
            }));
      });
      var s = (function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function(t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      })({}, l, {}, c);
      t.default = s;
    },
    686: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.elementType = t.symbol = t.element = t.node = t.object = t.number = t.func = t.bool = t.array = t.string = t.any = void 0);
      var r,
        o = (r = n(1)) && r.__esModule ? r : { default: r };
      var a = {};
      [
        'any',
        'string',
        'array',
        'bool',
        'func',
        'number',
        'object',
        'node',
        'element',
        'symbol',
        'elementType',
      ].forEach(function(e) {
        var t = (a[e] = function() {
          var t;
          return (t = o.default)[e].apply(t, arguments);
        });
        (t.isRequired = function() {
          var t;
          return (t = o.default[e]).isRequired.apply(t, arguments);
        }),
          'func' === e ? (e = 'function') : 'bool' === e && (e = 'boolean'),
          (t.type = t.isRequired.type = e);
      });
      var u = a.any,
        l = a.string,
        c = a.array,
        i = a.bool,
        f = a.func,
        s = a.number,
        d = a.object,
        p = a.node,
        y = a.element,
        m = a.symbol,
        b = a.elementType;
      (t.elementType = b),
        (t.symbol = m),
        (t.element = y),
        (t.node = p),
        (t.object = d),
        (t.number = s),
        (t.func = f),
        (t.bool = i),
        (t.array = c),
        (t.string = l),
        (t.any = u);
    },
    687: function(e, t, n) {
      'use strict';
      function r(e) {
        return (r =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.instanceOf = function(e) {
          var t = o.default.instanceOf(e);
          return (t.type = 'instanceOf '.concat(e.name)), t;
        }),
        (t.oneOf = function(e) {
          var t = o.default.oneOf(e);
          return (
            (t.type = e.map(function(e) {
              return null == e ||
                'string' == typeof e ||
                'number' == typeof e ||
                'boolean' == typeof e
                ? JSON.stringify(e)
                : Array.isArray(e)
                ? 'array'
                : r(e);
            })),
            t
          );
        }),
        (t.oneOfType = function(e) {
          var t = o.default.oneOfType(e);
          return (
            (t.type = e.map(function(e) {
              return e.type;
            })),
            t
          );
        }),
        (t.arrayOf = function(e) {
          var t = o.default.arrayOf(e);
          return (t.type = ''.concat(e.type, '[]')), t;
        }),
        (t.objectOf = function(e) {
          var t = o.default.objectOf(e);
          return (t.type = '{ [key]: '.concat(e.type, ' }')), t;
        }),
        (t.shape = function(e) {
          var t = o.default.shape(e);
          return (
            (t.type = '{ '.concat(
              Object.keys(e)
                .map(function(t) {
                  return ''.concat(t, ': ').concat(e[t].type);
                })
                .join(', '),
              ' }',
            )),
            t
          );
        }),
        (t.exact = function(e) {
          var t = o.default.exact(e);
          return (
            (t.type = '{ '.concat(
              Object.keys(e)
                .map(function(t) {
                  return ''.concat(t, ': ').concat(e[t].type);
                })
                .join(', '),
              ' }',
            )),
            t
          );
        }),
        Object.defineProperty(t, 'checkPropTypes', {
          enumerable: !0,
          get: function() {
            return o.checkPropTypes;
          },
        }),
        Object.defineProperty(t, 'resetWarningCache', {
          enumerable: !0,
          get: function() {
            return o.resetWarningCache;
          },
        });
      var o = (function(e) {
        if (e && e.__esModule) return e;
        if (null === e || ('object' !== r(e) && 'function' != typeof e)) return { default: e };
        var t = a();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
          if (Object.prototype.hasOwnProperty.call(e, u)) {
            var l = o ? Object.getOwnPropertyDescriptor(e, u) : null;
            l && (l.get || l.set) ? Object.defineProperty(n, u, l) : (n[u] = e[u]);
          }
        (n.default = e), t && t.set(e, n);
        return n;
      })(n(1));
      function a() {
        if ('function' != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (a = function() {
            return e;
          }),
          e
        );
      }
    },
    709: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(124),
        o = n(77);
      for (var a in o)
        'default' !== a &&
          (function(e) {
            n.d(t, e, function() {
              return o[e];
            });
          })(a);
      var u = n(196),
        l = Object(u.a)(o.default, r.a, r.b, !1, null, null, null);
      t.default = l.exports;
    },
    710: function(e, t, n) {
      'use strict';
      e.exports = n(711);
    },
    711: function(e, t, n) {
      e.exports = n(712);
    },
    712: function(e, t, n) {
      e.exports = { div: '_3zBxAV7fneT3FmWKcsF0DR' };
    },
    77: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(78),
        o = n.n(r);
      for (var a in r)
        'default' !== a &&
          (function(e) {
            n.d(t, e, function() {
              return r[e];
            });
          })(a);
      t.default = o.a;
    },
    78: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          data: function() {
            return { count: 0 };
          },
        });
    },
  },
  [[197, 1, 2]],
]);
