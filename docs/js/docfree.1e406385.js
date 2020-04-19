(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    1098: function(e, t, n) {
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
                var l, u = e[Symbol.iterator]();
                !(r = (l = u.next()).done) && (n.push(l.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                r || null == u.return || u.return();
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
            o = r((0, l.useState)(!1), 2),
            a = o[0],
            i = o[1],
            f = (0, l.useRef)(),
            s = function() {
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
            (0, l.useLayoutEffect)(function() {
              u.hljs.highlightBlock(f.current);
            }, []),
            l.default.createElement(
              u.Card,
              {
                title: t,
                bordered: !1,
                extra: l.default.createElement(
                  u.Tooltip,
                  { placement: 'top', title: '复制'.concat(a ? '成功' : '代码') },
                  a
                    ? l.default.createElement(u.Icon, { type: 'check', style: { color: 'green' } })
                    : l.default.createElement(u.Icon, {
                        type: 'copy',
                        onClick: function() {
                          var e = s();
                          i(!0),
                            e.remove(),
                            setTimeout(function() {
                              i(!1);
                            }, 1e3);
                        },
                      }),
                ),
              },
              l.default.createElement(c.default, { ref: f, lang: t, content: n }),
            )
          );
        });
      var a,
        l = (function(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== o(e) && 'function' != typeof e)) return { default: e };
          var t = i();
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
        })(n(1)),
        u = n(28),
        c = (a = n(429)) && a.__esModule ? a : { default: a };
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
    1099: function(e, t, n) {},
    1100: function(e, t, n) {
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
      function l(e, t) {
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
                var l, u = e[Symbol.iterator]();
                !(r = (l = u.next()).done) && (n.push(l.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                r || null == u.return || u.return();
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
      function u(e) {
        return (u =
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
            n = l((0, s.useConnect)(), 2),
            u = n[0].listSource,
            c = n[1],
            d = (0, s.useNuomi)().nuomiProps.location,
            p = u.length,
            y = Number(d.query.page) || 1,
            m = (y - 1) * t,
            b = u.slice(m, m + t),
            v = [];
          b.forEach(function(e) {
            var t = e.to,
              n = e.text,
              r = e.ctime,
              o = (0, f.default)('yyyyMM/dd', new Date(r)),
              a = o.substr(0, 4),
              l = o.substr(4),
              u = v.find(function(e) {
                return e.year === a;
              }),
              c = { date: l, to: t, text: n };
            u && u.year === a ? u.list.push(c) : v.push({ year: a, list: [c] });
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
                v.length
                  ? v.map(function(e) {
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
                    })
                  : i.default.createElement(s.Empty, { description: !1 }),
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
          if (null === e || ('object' !== u(e) && 'function' != typeof e)) return { default: e };
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
        })(n(1)),
        f = (c = n(431)) && c.__esModule ? c : { default: c },
        s = n(28);
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
      n(1101);
    },
    1101: function(e, t, n) {},
    1102: function(e, t, n) {
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
                var l, u = e[Symbol.iterator]();
                !(r = (l = u.next()).done) && (n.push(l.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                r || null == u.return || u.return();
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
        l = (function(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== o(e) && 'function' != typeof e)) return { default: e };
          var t = i();
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
        })(n(1)),
        u = (a = n(431)) && a.__esModule ? a : { default: a },
        c = n(28);
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
      n(1103);
      var f = function(e) {
        var t = e.children,
          n = e.pageExtra,
          o = r((0, c.useConnect)(), 2),
          a = o[0].listSource,
          i = o[1],
          f = (0, c.useNuomi)().nuomiProps,
          s = r((0, l.useState)([]), 2),
          d = s[0],
          p = s[1];
        return (
          (0, l.useLayoutEffect)(function() {
            i({ type: 'initData' });
            var e = document.querySelectorAll('pre code');
            [].forEach.call(e, function(e) {
              c.hljs.highlightBlock(e);
            });
          }, []),
          (0, l.useLayoutEffect)(
            function() {
              var e = a.findIndex(function(e) {
                var t = e.text;
                return f.title === t;
              });
              -1 !== e && p([a[e - 1], a[e + 1]]);
            },
            [a],
          ),
          l.default.createElement(
            'div',
            { className: 'docfree-content' },
            t,
            !!n &&
              l.default.createElement(
                c.Row,
                { type: 'flex', justify: 'space-between', className: 'docfree-content-extra' },
                l.default.createElement(
                  c.Col,
                  null,
                  l.default.createElement(
                    'a',
                    {
                      href: (function() {
                        var e = n.path;
                        if ('string' == typeof e && e) {
                          var t = f.ext,
                            r = f.filename,
                            o = f.pathname;
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
                l.default.createElement(
                  c.Col,
                  null,
                  '更新时间：',
                  (0, u.default)(n.format, new Date(f.utime)),
                ),
              ),
            (!!d[0] || !!d[1]) &&
              l.default.createElement(
                c.Row,
                { type: 'flex', justify: 'space-between', className: 'docfree-next-prev' },
                l.default.createElement(
                  c.Col,
                  null,
                  !!d[0] &&
                    l.default.createElement(
                      c.Link,
                      { to: d[0].to },
                      l.default.createElement(c.Icon, { type: 'left' }),
                      d[0].text,
                    ),
                ),
                l.default.createElement(
                  c.Col,
                  null,
                  !!d[1] &&
                    l.default.createElement(
                      c.Link,
                      { to: d[1].to },
                      d[1].text,
                      l.default.createElement(c.Icon, { type: 'right' }),
                    ),
                ),
              ),
          )
        );
      };
      t.default = f;
    },
    1103: function(e, t, n) {},
    1104: function(e, t, n) {
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
      function l(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var c,
        i = n(28);
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
          var n, o, u;
          return (
            (function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            })(this, t),
            (o = this),
            (u = a(t).call(this, e)),
            (n = !u || ('object' !== r(u) && 'function' != typeof u) ? l(o) : u),
            f(l(n), 'offsetTop', void 0),
            f(l(n), 'scrollHandler', function() {
              var e = n.findData().to,
                t = i.router.location(),
                r = t.pathname,
                o = t.search;
              i.router.replace({ pathname: r, search: o, hash: e });
            }),
            f(l(n), 'findData', function() {
              var e = window.scrollY,
                n = t.data;
              return (
                n.find(function(t, r) {
                  var o = t.top,
                    a = n[r + 1],
                    l = o <= e;
                  return a ? l && e < a.top : l;
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
              t && u(e, t);
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
      })(((c = n(432)) && c.__esModule ? c : { default: c }).default);
      (t.default = s), f(s, 'data', []);
    },
    1105: function(e, t, n) {
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
            o.default.createElement(l.default, null),
            o.default.createElement(
              'section',
              null,
              t,
              o.default.createElement(u.default, { content: n }),
            ),
          );
        });
      var o = i(n(1)),
        a = i(n(1106)),
        l = i(n(1111)),
        u = i(n(1113)),
        c = n(28);
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      n(1115);
    },
    1106: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          var t = e.title,
            n = e.dataSource,
            c = e.type,
            i = e.nav;
          return r.default.createElement(
            'div',
            { className: 'docfree-header' },
            r.default.createElement(
              'div',
              null,
              r.default.createElement(
                u.default,
                { icon: r.default.createElement(o.Icon, { type: 'unordered-list' }) },
                r.default.createElement(a.default, { data: n, type: c }),
                r.default.createElement(l.default, { data: i }),
              ),
            ),
            r.default.createElement(
              'div',
              null,
              r.default.createElement(o.Link, { to: '/', className: 'docfree-logo' }, t),
            ),
          );
        });
      var r = c(n(1)),
        o = n(28),
        a = c(n(1107)),
        l = c(n(1108)),
        u = c(n(435));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      n(434);
    },
    1107: function(e, t, n) {
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
                var l, u = e[Symbol.iterator]();
                !(r = (l = u.next()).done) && (n.push(l.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                r || null == u.return || u.return();
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
            a = o((0, l.useState)(!1), 2),
            c = a[0],
            i = a[1],
            f = o((0, l.useState)([]), 2),
            s = f[0],
            d = f[1];
          return l.default.createElement(
            'div',
            { className: 'docfree-search' },
            l.default.createElement(
              u.Popover,
              {
                overlayClassName: 'docfree-popover',
                overlayStyle: c ? void 0 : { display: 'none' },
                placement: 'bottomLeft',
                trigger: 'focus',
                title: '搜索结果',
                visible: c,
                onVisibleChange: function(e) {
                  e && s.length ? i(!0) : i(!1);
                },
                content: l.default.createElement(u.List, {
                  dataSource: s,
                  renderItem: function(e) {
                    var t = e.text,
                      r = e.to;
                    return l.default.createElement(
                      u.List.Item,
                      {
                        onClick: function() {
                          var e, t, o, a;
                          (t = (e = r).pathname),
                            (o = e.hash),
                            (a = u.router.location()).pathname === t
                              ? ((o = '#'.concat(o)),
                                'hash' === n &&
                                  (o = '#'
                                    .concat(t)
                                    .concat(a.search)
                                    .concat(o)),
                                (window.location.hash = o))
                              : u.router.location({ pathname: t }, { hash: o });
                        },
                      },
                      l.default.createElement('span', null, t),
                    );
                  },
                }),
              },
              l.default.createElement(u.Input, {
                prefix: l.default.createElement(u.Icon, { type: 'search' }),
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
                              d = l.default.createElement(
                                l.default.Fragment,
                                null,
                                f,
                                l.default.createElement('b', null, n),
                                s,
                              );
                            o.push({
                              to: { pathname: p, hash: 1 === r ? '' : t },
                              text:
                                1 === r
                                  ? d
                                  : l.default.createElement(
                                      l.default.Fragment,
                                      null,
                                      i,
                                      ' ',
                                      l.default.createElement(u.Icon, { type: 'right' }),
                                      ' ',
                                      d,
                                    ),
                              key: a,
                            }),
                              (a += 1);
                          }
                        });
                      }),
                      i(!0))
                    : i(!1),
                    d(o);
                },
                placeholder: '搜索内容...',
              }),
            ),
          );
        });
      var l = (function(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== a(e) && 'function' != typeof e)) return { default: e };
          var t = c();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              l && (l.get || l.set) ? Object.defineProperty(n, o, l) : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(1)),
        u = n(28);
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
    },
    1108: function(e, t, n) {
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
      function l(e, t) {
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
          return u.default.createElement(c.default, {
            className: 'docfree-nav',
            data: (function e(t) {
              var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                u = arguments.length > 2 ? arguments[2] : void 0;
              return (
                t.forEach(function(t) {
                  var c = t.text,
                    i = t.to,
                    f = t.menus,
                    s = l(t, ['text', 'to', 'menus']);
                  if (c) {
                    var d = Array.isArray(f) && f.length;
                    if (u && !i && f && d) {
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
                                  var l, u = p[Symbol.iterator]();
                                  !(r = (l = u.next()).done);
                                  r = !0
                                ) {
                                  var c = l.value;
                                  if (n.startsWith(c)) return !0;
                                }
                              } catch (e) {
                                (o = !0), (a = e);
                              } finally {
                                try {
                                  r || null == u.return || u.return();
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
      var u = i(n(1)),
        c = i(n(433));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      n(434);
    },
    1109: function(e, t, n) {},
    1110: function(e, t, n) {},
    1111: function(e, t, n) {
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
                var l, u = e[Symbol.iterator]();
                !(r = (l = u.next()).done) && (n.push(l.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                r || null == u.return || u.return();
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
          var e = r((0, a.useConnect)(), 1)[0],
            t = e.showSidebar,
            n = e.showPageSidebar,
            c = e.sidebarMenus,
            i = e.sidebarTitle,
            f = e.pageSidebarMenus;
          return o.default.createElement(
            o.default.Fragment,
            null,
            t &&
              o.default.createElement(
                'div',
                { className: 'docfree-sidebar' },
                o.default.createElement(
                  u.default,
                  { icon: o.default.createElement(a.Icon, { type: 'menu-unfold' }), dir: 'left' },
                  !!i && o.default.createElement('strong', null, i),
                  o.default.createElement(l.default, { data: c }),
                ),
              ),
            n &&
              o.default.createElement(
                'div',
                { className: 'docfree-page-sidebar' },
                o.default.createElement(l.default, { data: f }),
              ),
          );
        });
      var o = c(n(1)),
        a = n(28),
        l = c(n(433)),
        u = c(n(435));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      n(1112);
    },
    1112: function(e, t, n) {},
    1113: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          var t = e.content;
          return o.default.createElement('footer', { className: 'docfree-footer' }, t);
        });
      var r,
        o = (r = n(1)) && r.__esModule ? r : { default: r };
      n(1114);
    },
    1114: function(e, t, n) {},
    1115: function(e, t, n) {},
    1116: function(e, t, n) {
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
        l = (function(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== o(e) && 'function' != typeof e)) return { default: e };
          var t = c();
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
        })(n(1)),
        u = (a = n(0)) && a.__esModule ? a : { default: a };
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
          u = e.widths,
          c = (0, l.useMemo)(function() {
            var e = [];
            if (n) e = r(n);
            else if (a) {
              var u = a.propTypes || {},
                c = a.defaultProps || {},
                i = a.__PROPTYPES_DESCRIPTIONS__ || {};
              Object.keys(u).forEach(function(t) {
                var n = u[t].type,
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
                        return l.default.createElement('div', { key: t }, e.trim());
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
        return l.default.createElement(
          'table',
          { className: 'docfree-props' },
          l.default.createElement(
            'thead',
            null,
            l.default.createElement(
              'tr',
              null,
              t.map(function(e, t) {
                return l.default.createElement('th', { key: t, style: { width: u[t] } }, e);
              }),
            ),
          ),
          l.default.createElement(
            'tbody',
            null,
            c.map(function(e, t) {
              return l.default.createElement(
                'tr',
                { key: t },
                e.map(function(e, t) {
                  return l.default.createElement('td', { key: t }, null == e ? '-' : e);
                }),
              );
            }),
          ),
        );
      }
      n(1117),
        (i.defaultProps = {
          widths: ['22%', '22%', '22%'],
          titles: ['参数', '类型', '默认值', '说明'],
          datas: null,
          of: null,
        }),
        (i.propTypes = {
          widths: u.default.arrayOf(u.default.any),
          titles: u.default.arrayOf(u.default.string),
          datas: u.default.oneOfType([
            u.default.arrayOf(u.default.arrayOf(u.default.string)),
            u.default.arrayOf(u.default.arrayOf(u.default.element)),
          ]),
          of: u.default.elementType,
        });
      var f = i;
      t.default = f;
    },
    1117: function(e, t, n) {},
    1118: function(e, t, n) {
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
          var t = l();
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
        })(n(1)),
        a = n(28);
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
      n(1119);
    },
    1119: function(e, t, n) {},
    1120: function(e, t, n) {
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
                    l.Button,
                    u({ size: 'large' }, c, {
                      key: t,
                      onClick: function() {
                        return (function(e) {
                          e && (/^(https?:)?\/\//.test(e) ? window.open(e) : l.router.location(e));
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
        a = (o = n(1)) && o.__esModule ? o : { default: o },
        l = n(28);
      function u() {
        return (u =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      n(1121);
    },
    1121: function(e, t, n) {},
    1122: function(e, t, n) {},
    1123: function(e, t, n) {
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
        a = n(1),
        l = (o = a) && o.__esModule ? o : { default: o },
        u = (function(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== r(e) && 'function' != typeof e)) return { default: e };
          var t = c();
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
        })(n(126));
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
        d = u.Content;
      function p(e) {
        var t = e.components,
          n = f(e, ['components']);
        return l.default.createElement(
          d,
          i({}, s, n, { components: t }),
          l.default.createElement(u.Home, {
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
                detail: l.default.createElement(
                  l.default.Fragment,
                  null,
                  '基于',
                  l.default.createElement(
                    'a',
                    { href: 'https://remark.js.org/', target: '_blank' },
                    'remark',
                  ),
                  ' 插件化机制，可以使用丰富的第三方插件增强写作体验。',
                ),
              },
            ],
          }),
          l.default.createElement(
            'h2',
            null,
            l.default.createElement(u.AnchorLinkEnhance, { to: '安装使用吧' }, '#'),
            l.default.createElement('span', null, '安装使用吧'),
          ),
          l.default.createElement(
            'pre',
            null,
            l.default.createElement(
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
        setting: { depth: 0, pageDepth: 0, pageExtra: !1, valine: !1, title: 'Docfree' },
        headings: [{ text: '安装使用吧', depth: 2, level: 1 }],
        showSidebar: !1,
        showPageSidebar: !1,
        sidebarMenus: [],
        pageSidebarMenus: [],
        utime: 1587022712781.9827,
        render: function() {
          return l.default.createElement(p, { pageExtra: !1 });
        },
        title: 'Docfree',
      };
      t.default = y;
    },
    1124: function(e, t, n) {
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
        a = n(1),
        l = (o = a) && o.__esModule ? o : { default: o },
        u = (function(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== r(e) && 'function' != typeof e)) return { default: e };
          var t = c();
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
        })(n(126));
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
        d = u.Content;
      function p(e) {
        var t = e.components,
          n = f(e, ['components']);
        return l.default.createElement(
          d,
          i({}, s, n, { components: t }),
          l.default.createElement(
            'h1',
            null,
            l.default.createElement(u.AnchorLinkEnhance, { to: '介绍' }, '#'),
            l.default.createElement('span', null, '介绍'),
          ),
          l.default.createElement(
            'p',
            null,
            l.default.createElement('code', { className: 'inline' }, 'docfrees'),
            '是基于',
            l.default.createElement('code', { className: 'inline' }, 'webpack'),
            '+',
            l.default.createElement('code', { className: 'inline' }, 'nuomi'),
            '开发的md静态文档生成工具',
          ),
          l.default.createElement(
            'h2',
            null,
            l.default.createElement(u.AnchorLinkEnhance, { to: '特性' }, '#'),
            l.default.createElement('span', null, '特性'),
          ),
          l.default.createElement(
            'ul',
            null,
            l.default.createElement(
              'li',
              null,
              '以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。',
            ),
            l.default.createElement(
              'li',
              null,
              '享受 React + webpack 的开发体验，可以在 Markdown 中使用 React 组件，也可以基于 React 组件自动生成组件 API 文档。',
            ),
            l.default.createElement(
              'li',
              null,
              '基于',
              l.default.createElement(
                'a',
                { href: 'https://remark.js.org/', target: '_blank' },
                'remark',
              ),
              '插件化机制，可以使用丰富的第三方插件增强写作体验。',
            ),
          ),
          l.default.createElement(
            'h2',
            null,
            l.default.createElement(u.AnchorLinkEnhance, { to: '它能做什么？' }, '#'),
            l.default.createElement('span', null, '它能做什么？'),
          ),
          l.default.createElement('p', null, '写组件库文档，写博客。'),
        );
      }
      p.isMDXComponent = !0;
      var y = {
        state: { showCode: !1 },
        setting: {},
        headings: [
          { text: '特性', depth: 2, level: 1 },
          { text: '它能做什么？', depth: 2, level: 1 },
        ],
        showSidebar: !0,
        showPageSidebar: !0,
        sidebarMenus: [
          { text: '特性', depth: 2, level: 1 },
          { text: '它能做什么？', depth: 2, level: 1 },
        ],
        pageSidebarMenus: [],
        utime: 1586914285717.9224,
        render: function() {
          return l.default.createElement(p, {
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
    1125: function(e, t, n) {
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
        a = n(1),
        l = (o = a) && o.__esModule ? o : { default: o },
        u = (function(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== r(e) && 'function' != typeof e)) return { default: e };
          var t = c();
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
        })(n(126));
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
              l.default.createElement('div', t)
            );
          };
        },
        m = (y('Playground'), y('Alert'), {}),
        b = u.Content;
      function v(e) {
        var t = e.components,
          r = p(e, ['components']);
        return l.default.createElement(
          b,
          i({}, m, r, { components: t }),
          l.default.createElement(
            'h2',
            null,
            l.default.createElement(u.AnchorLinkEnhance, { to: '展示组件' }, '#'),
            l.default.createElement('span', null, '展示组件'),
          ),
          l.default.createElement(u.Playground, {
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
              n(83);
              var e = (function(e) {
                return e && e.__esModule ? e : { default: e };
              })(n(82));
              return (
                n(1126),
                n(1),
                l.default.createElement(
                  'div',
                  { className: 'buttons' },
                  l.default.createElement(e.default, { type: 'primary' }, 'Primary'),
                  l.default.createElement(e.default, null, 'Default'),
                  l.default.createElement(e.default, { type: 'dashed' }, 'Dashed'),
                  l.default.createElement(e.default, { type: 'link' }, 'Link'),
                )
              );
            },
          }),
          l.default.createElement(
            'p',
            null,
            l.default.createElement('strong', null, 'markdown代码'),
          ),
          l.default.createElement(
            'pre',
            null,
            l.default.createElement(
              'code',
              { className: 'language-js' },
              '//```jsx\nimport React from \'react\';\nimport { Button } from \'antd\';\n\n<div className="buttons">\n  <Button type="primary">Primary</Button>\n  <Button>Default</Button>\n  <Button type="dashed">Dashed</Button>\n  <Button type="link">Link</Button>\n</div>\n\n<style lang="less">\n.buttons {\n  & > button {\n    margin-right: 8px;\n  }\n}\n</style>\n//```\n',
            ),
          ),
          l.default.createElement(
            'p',
            null,
            '可以直接在',
            l.default.createElement('code', { className: 'inline' }, 'jsx'),
            '中使用',
            l.default.createElement('code', { className: 'inline' }, 'style'),
            '标签写样式，',
            l.default.createElement('code', { className: 'inline' }, 'lang'),
            '支持',
            l.default.createElement(
              'code',
              { className: 'inline' },
              'css/less/sass/scss/styl/stylus',
            ),
            '，默认支持',
            l.default.createElement('code', { className: 'inline' }, 'css/less'),
            '，其他支持需安装对应的',
            l.default.createElement('code', { className: 'inline' }, 'loader'),
            '。\n也支持',
            l.default.createElement('code', { className: 'inline' }, 'cssModules'),
            '，通过',
            l.default.createElement('code', { className: 'inline' }, '$style'),
            '获取样式，熟悉',
            l.default.createElement('code', { className: 'inline' }, 'Vue'),
            '的应该知道怎么用。',
          ),
          l.default.createElement(
            'h2',
            null,
            l.default.createElement(u.AnchorLinkEnhance, { to: '支持Typescript' }, '#'),
            l.default.createElement('span', null, '支持Typescript'),
          ),
          l.default.createElement(u.Playground, {
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
              n(83);
              var e = r(n(82)),
                t = r(n(1129));
              function r(e) {
                return e && e.__esModule ? e : { default: e };
              }
              n(1);
              return l.default.createElement(function() {
                return l.default.createElement(
                  'div',
                  { className: t.default.buttons },
                  l.default.createElement(e.default, { type: 'primary' }, 'Primary'),
                  l.default.createElement(e.default, null, 'Default'),
                  l.default.createElement(e.default, { type: 'dashed' }, 'Dashed'),
                  l.default.createElement(e.default, { type: 'link' }, 'Link'),
                );
              }, null);
            },
          }),
          l.default.createElement(
            'p',
            null,
            l.default.createElement('strong', null, 'markdown代码'),
          ),
          l.default.createElement(
            'pre',
            null,
            l.default.createElement(
              'code',
              { className: 'language-js' },
              '//```tsx\nimport React, { ElementType } from \'react\';\nimport { Button } from \'antd\';\n\nconst Buttons: ElementType<any> = () => (\n  <div className={$style.buttons}>\n    <Button type="primary">Primary</Button>\n    <Button>Default</Button>\n    <Button type="dashed">Dashed</Button>\n    <Button type="link">Link</Button>\n  </div>\n);\n\n<Buttons />\n\n<style lang="less" module>\n.buttons {\n  & > button {\n    margin-right: 8px;\n  }\n}\n</style>\n//```\n',
            ),
          ),
          l.default.createElement(
            'h2',
            null,
            l.default.createElement(u.AnchorLinkEnhance, { to: '引入文件展示组件' }, '#'),
            l.default.createElement('span', null, '引入文件展示组件'),
          ),
          l.default.createElement(u.Playground, {
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
              })(n(1132));
              return l.default.createElement(e, null);
            },
          }),
          l.default.createElement(
            'p',
            null,
            l.default.createElement('strong', null, 'markdown代码'),
          ),
          l.default.createElement(
            'pre',
            null,
            l.default.createElement(
              'code',
              { className: 'language-js' },
              '<Docfree.Playground src="./Demo.jsx" />\n',
            ),
          ),
          l.default.createElement(
            'h2',
            null,
            l.default.createElement(u.AnchorLinkEnhance, { to: '自动生成组件文档' }, '#'),
            l.default.createElement('span', null, '自动生成组件文档'),
          ),
          l.default.createElement(u.Props, {
            of: (function(e) {
              return e && e.default ? e.default : e;
            })(n(1133)),
          }),
          l.default.createElement(
            'p',
            null,
            l.default.createElement('strong', null, 'markdown代码'),
          ),
          l.default.createElement(
            'pre',
            null,
            l.default.createElement(
              'code',
              { className: 'language-js' },
              '<Docfree.Props src="./Demo.jsx" />\n',
            ),
          ),
          l.default.createElement(
            'p',
            null,
            l.default.createElement('code', { className: 'inline' }, 'src'),
            '引入的组件需包含',
            l.default.createElement('code', { className: 'inline' }, 'defaultProps'),
            '和',
            l.default.createElement('code', { className: 'inline' }, 'propTypes'),
            '2个静态对象，并且需要在组件外部定义，类组件不要使用',
            l.default.createElement('code', { className: 'inline' }, 'static'),
            '定义，否则无法解析，\n',
            l.default.createElement('code', { className: 'inline' }, 'propTypes'),
            '对象的值必须用 ',
            l.default.createElement(
              'a',
              { href: 'https://github.com/facebook/prop-types', target: '_blank' },
              'prop-types',
            ),
            ' 定义，可以在属性的上方使用',
            l.default.createElement('code', { className: 'inline' }, '//'),
            '或',
            l.default.createElement('code', { className: 'inline' }, '/**/'),
            '注释\n自动生成接口说明。',
          ),
          l.default.createElement(
            'section',
            null,
            l.default.createElement(u.Component, {
              render: function() {
                var e = n(202).default;
                return (
                  n(203),
                  l.default.createElement(e, {
                    type: 'warning',
                    message: '注意',
                    description:
                      '<Docfree.Props /> 和 <Docfree.Playground /> src属性必须包含文件类型后缀，比如.jsx/.tsx。',
                  })
                );
              },
            }),
          ),
          l.default.createElement(
            'h2',
            null,
            l.default.createElement(u.AnchorLinkEnhance, { to: '支持Vue' }, '#'),
            l.default.createElement('span', null, '支持Vue'),
          ),
          l.default.createElement(
            'pre',
            null,
            l.default.createElement(
              'code',
              { className: 'language-sh' },
              'yarn add webpack vue-loader vue vue-template-compiler\n',
            ),
          ),
          l.default.createElement(
            'pre',
            null,
            l.default.createElement(
              'code',
              { className: 'language-js' },
              "// docs/.docfree/config.js\n\nconst VuePlugin = require('vue-loader/lib/plugin-webpack4');\n\nmodule.exports = {\n  // ...其他选项\n  webpack: {\n    plugins: [new VuePlugin()],\n    module: {\n      rules: [{\n        test: /\\.vue$/,\n        loader: 'vue-loader',\n      }, {\n        exclude: /\\.vue$/,\n        loader: 'file-loader',\n      }]\n    }\n  },\n};\n",
            ),
          ),
          l.default.createElement(u.Playground, {
            code: [
              {
                lang: 'vue',
                content:
                  '<template>\n  <div :class="$style.div">\n    <p>点击试一试</p>\n    <button-counter></button-counter>\n  </div>\n</template>\n\n<script>\nimport buttonCounter from \'./button-counter.vue\';\n\nexport default {\n  components: {\n    \'button-counter\': buttonCounter,\n  }\n}\n</script>\n\n<style lang="less" module>\n.div {\n  & > p {\n    color: #1890ff;\n  }\n}\n</style>',
              },
            ],
            render: function(e) {
              var t = n(1139),
                r =
                  {
                    components: {
                      'button-counter': (function(e) {
                        return e && e.__esModule ? e : { default: e };
                      })(n(1142)).default,
                    },
                  } || {},
                o = r.mixins,
                a = void 0 === o ? [] : o,
                l = p(r, ['mixins']),
                u = {};
              u.docfree$style = n(1143);
              var c =
                '<div :class="$style.div">\n    <p>点击试一试</p>\n    <button-counter></button-counter>\n  </div>';
              u.docfree$style && (c = c.replace(/(\$style\.)/g, 'docfree$1'));
              var i = new t(
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
                })({}, l, { el: e, template: c, mixins: [].concat(f(a), [{ data: u }]) }),
              );
              return function() {
                i.$destroy();
              };
            },
          }),
          l.default.createElement(
            'p',
            null,
            l.default.createElement('strong', null, 'markdown代码'),
          ),
          l.default.createElement(
            'pre',
            null,
            l.default.createElement(
              'code',
              { className: 'language-html' },
              '//```vue\n<template>\n  <div :class="$style.div">\n    <p>点击试一试</p>\n    <button-counter></button-counter>\n  </div>\n</template>\n\n<script>\nimport buttonCounter from \'./button-counter.vue\';\n\nexport default {\n  components: {\n    \'button-counter\': buttonCounter,\n  }\n}\n</script>\n\n<style lang="less" module>\n.div {\n  & > p {\n    color: #1890ff;\n  }\n}\n</style>\n//```\n',
            ),
          ),
          l.default.createElement(
            'h2',
            null,
            l.default.createElement(u.AnchorLinkEnhance, { to: '插件使用' }, '#'),
            l.default.createElement('span', null, '插件使用'),
          ),
          l.default.createElement(
            'h3',
            null,
            l.default.createElement(u.AnchorLinkEnhance, { to: 'tip' }, '#'),
            l.default.createElement('span', null, 'tip'),
          ),
          l.default.createElement(
            'pre',
            null,
            l.default.createElement(
              'code',
              { className: 'language-sh' },
              'yarn add antd remark-docfree-tip remark-emoji\n',
            ),
          ),
          l.default.createElement(
            'pre',
            null,
            l.default.createElement(
              'code',
              { className: 'language-js' },
              "// docs/.docfree/config.js\n\nmodule.exports = {\n  // ...其他选项\n  plugins: ['docfree-tip'],\n};\n",
            ),
          ),
          l.default.createElement(
            'section',
            null,
            l.default.createElement(u.Component, {
              render: function() {
                var e = n(202).default;
                return (
                  n(203),
                  l.default.createElement(e, {
                    type: 'success',
                    message: '正确',
                    description: l.default.createElement(u.PreCode, {
                      lang: 'jsx',
                      content: '<div></div>',
                    }),
                  })
                );
              },
            }),
          ),
          l.default.createElement(
            'section',
            null,
            l.default.createElement(u.Component, {
              render: function() {
                var e = n(202).default;
                return (
                  n(203),
                  l.default.createElement(e, {
                    type: 'error',
                    message: '错误',
                    description: l.default.createElement(u.PreCode, {
                      lang: 'jsx',
                      content: '<div></d>',
                    }),
                  })
                );
              },
            }),
          ),
          l.default.createElement(
            'p',
            null,
            l.default.createElement('strong', null, 'markdown代码'),
          ),
          l.default.createElement(
            'pre',
            null,
            l.default.createElement(
              'code',
              {},
              '//```tip:success:jsx\n正确\n<div></div>\n//```\n\n//```tip:error:jsx\n错误\n<div></d>\n//```\n',
            ),
          ),
          l.default.createElement(
            'h3',
            null,
            l.default.createElement(u.AnchorLinkEnhance, { to: 'emoji' }, '#'),
            l.default.createElement('span', null, 'emoji'),
          ),
          l.default.createElement(
            'pre',
            null,
            l.default.createElement(
              'code',
              { className: 'language-sh' },
              'yarn add remark-emoji\n',
            ),
          ),
          l.default.createElement(
            'pre',
            null,
            l.default.createElement(
              'code',
              { className: 'language-js' },
              "// docs/.docfree/config.js\n\nmodule.exports = {\n  // ...其他选项\n  plugins: ['emoji'],\n};\n",
            ),
          ),
          l.default.createElement('p', null, '🐶 👍 👍 👍 👍 👍'),
          l.default.createElement(
            'p',
            null,
            l.default.createElement('strong', null, 'markdown代码'),
          ),
          l.default.createElement(
            'pre',
            null,
            l.default.createElement('code', {}, ':dog: :+1: :+1: :+1: :+1: :+1:\n'),
          ),
          l.default.createElement(
            'h2',
            null,
            l.default.createElement(u.AnchorLinkEnhance, { to: '目录介绍' }, '#'),
            l.default.createElement('span', null, '目录介绍'),
          ),
          l.default.createElement(
            'p',
            null,
            '文档根目录下包含',
            l.default.createElement('code', { className: 'inline' }, '.docfree'),
            '文件夹，该文件夹用于存放配置相关文件，',
            l.default.createElement('code', { className: 'inline' }, 'config.js'),
            '是主配置文件，',
            l.default.createElement('code', { className: 'inline' }, 'public'),
            '是静态资源目录，默认只有index.html，你可以在里面新建任意文件或者文件夹，编译时都会被拷贝到构建目录下。\n如果需要在index.html中引入一些资源可以通过',
            l.default.createElement(
              'code',
              { className: 'inline' },
              '<%= htmlWebpackPlugin.options.publicPath %>',
            ),
            '作为资源路径前缀。\n',
            l.default.createElement('code', { className: 'inline' }, 'temp'),
            '是临时文件目录，目前里面包含',
            l.default.createElement('code', { className: 'inline' }, 'data.json'),
            '和',
            l.default.createElement('code', { className: 'inline' }, 'docfree.js'),
            '，data.json是存储文件时间数据的，该文件提交时不可以忽略，否则展示最终编辑时间和排序都会丢失，docfree.js是入口文件，每次都会自动生成，无需提交，\n请自行设置在',
            l.default.createElement('code', { className: 'inline' }, '.gitignore'),
            '中。',
          ),
          l.default.createElement(
            'h2',
            null,
            l.default.createElement(u.AnchorLinkEnhance, { to: '路由' }, '#'),
            l.default.createElement('span', null, '路由'),
          ),
          l.default.createElement(
            'p',
            null,
            'docfree将所有',
            l.default.createElement('code', { className: 'inline' }, 'md'),
            ' ',
            l.default.createElement('code', { className: 'inline' }, 'mdx'),
            '文件以及非',
            l.default.createElement('code', { className: 'inline' }, '.'),
            '开头的文件夹解析为路由，格式是',
            l.default.createElement('code', { className: 'inline' }, '目录/文件名'),
            '，文件名后缀会被忽略。例如根目录下包含a.md，会被解析为路由',
            l.default.createElement('code', { className: 'inline' }, '/a'),
            '，b目录会被解析为',
            l.default.createElement('code', { className: 'inline' }, '/b'),
            '，b目录下的c文件会被解析为',
            l.default.createElement('code', { className: 'inline' }, '/b/c'),
            '，\n依次类推，同一目录下文件名和文件夹名不要重名，否则只会解析文件夹。在',
            l.default.createElement('code', { className: 'inline' }, 'doc'),
            '模式时，如果文件为README.md，那么访问时文件名会被忽略，例如',
            l.default.createElement('code', { className: 'inline' }, '/README'),
            '需用',
            l.default.createElement('code', { className: 'inline' }, '/'),
            '访问。',
          ),
          l.default.createElement(
            'h2',
            null,
            l.default.createElement(u.AnchorLinkEnhance, { to: '配置' }, '#'),
            l.default.createElement('span', null, '配置'),
          ),
          l.default.createElement(u.Props, {
            datas: [
              ['type', '"hash" | "browser"', '"hash"', '路由类型'],
              ['mode', '"doc" | "blog"', '"doc"', '页面模式'],
              ['title', 'string', '-', '页面title以及logo文字内容'],
              ['dest', 'string', '.docfree/dist', '生成静态文件目录'],
              [
                'footer',
                'string',
                '',
                '页面脚注内容，支持字符串或者js文件路径，路径必须是绝对路径，js中可以使用React',
              ],
              [
                'nav',
                'array',
                '',
                '导航配置，数组内容为 { "to": "跳转的链接", "text": "导航文字", "menus": 子集导航数组，数据等同父级 }，to 和 menus不是必须的，to 值包含http或者https时会被作为外部链接，否则作为路由',
              ],
              [
                'sidebar',
                'object',
                '{ "depth": 3, "pageDepth": 6, data: null }',
                '侧边栏配置，depth是左侧导航深度，pageDepth是右侧导航深度，深度值设置为0将不展示侧边栏，data为配置数据，具体下面讲',
              ],
              [
                'pageExtra',
                'object',
                '{ "platform": "Github", "path": "", "format": "yyyy/MM/dd hh:mm:ss" }',
                '页面底部额外数据设置，包含日期和编辑链接，path是编辑链接，需设置为相应平台文档根目录',
              ],
              ['langTheme', 'string', '', 'highlight.js主题样式'],
              ['pageSize', 'number', '30', 'bolg模式时列表展示数量'],
              ['plugins', 'array', '', 'remark插件，如果是字符串，可以忽略remrk-前缀'],
              ['webpack', 'object', '', 'webpack配置'],
            ],
          }),
          l.default.createElement(
            'h2',
            null,
            l.default.createElement(u.AnchorLinkEnhance, { to: '侧边栏配置' }, '#'),
            l.default.createElement('span', null, '侧边栏配置'),
          ),
          l.default.createElement(
            'p',
            null,
            '默认时，每个页面的侧边栏只会包含该页面的标题和子标题，通过配置可以让侧边栏展示其他页面的标题',
          ),
          l.default.createElement(
            'pre',
            null,
            l.default.createElement(
              'code',
              { className: 'language-js' },
              "// 格式如下\n{\n  depth: 3,\n  data: {\n    '/': {\n      title: '侧边栏标题',\n      menus: [\n        'README',\n        'a',\n        {\n          text: '',\n          menus: [...]\n        }\n      ]\n    },\n    '/guide': {\n      title: '侧边栏标题',\n      menus: [{\n        text: '',\n        menus: [{\n          text: '',\n          menus: [...]\n        }]\n      }]\n    }\n  }\n}\n",
            ),
          ),
          l.default.createElement(
            'p',
            null,
            l.default.createElement('code', { className: 'inline' }, 'data'),
            '值为一个对象，键为目录，',
            l.default.createElement('code', { className: 'inline' }, '/'),
            '表示根目录，值对对象，包含',
            l.default.createElement('code', { className: 'inline' }, 'title'),
            '和',
            l.default.createElement('code', { className: 'inline' }, 'menus'),
            '字段，',
            l.default.createElement('code', { className: 'inline' }, 'title'),
            '为侧边栏大标题，非必须，menus为该目录下文件名数组，',
            l.default.createElement('code', { className: 'inline' }, '.md'),
            '后缀需要省略，这样，每个页面都会展示其他页面的标题。\nmenus数组值也可以设置为对象，用于为侧边栏配置子标题，必须包含',
            l.default.createElement('code', { className: 'inline' }, 'text'),
            '字段。',
          ),
          l.default.createElement(
            'h2',
            null,
            l.default.createElement(u.AnchorLinkEnhance, { to: '页面设置' }, '#'),
            l.default.createElement('span', null, '页面设置'),
          ),
          l.default.createElement(
            'p',
            null,
            l.default.createElement('code', { className: 'inline' }, 'config.js'),
            '用于全局配置，每个',
            l.default.createElement('code', { className: 'inline' }, 'md'),
            '文件也可以通过设置来覆盖全局配置，设置项需要在文件内容顶部。',
          ),
          l.default.createElement(
            'pre',
            null,
            l.default.createElement(
              'code',
              {},
              '---\ntitle: 标题\ndepth: 侧边栏深度\npageDepth: 子（右）侧边栏深度\npageExtra: false 只可以设置false 用于隐藏额外内容\n---\n',
            ),
          ),
          l.default.createElement(
            'h2',
            null,
            l.default.createElement(u.AnchorLinkEnhance, { to: '主题' }, '#'),
            l.default.createElement('span', null, '主题'),
          ),
          l.default.createElement(
            'p',
            null,
            'docfree界面是使用',
            l.default.createElement('code', { className: 'inline' }, 'antd4.0'),
            '开发的，预处理器使用的是less，修改主题样式需要在',
            l.default.createElement('code', { className: 'inline' }, '.docfree'),
            '目录下新建',
            l.default.createElement('code', { className: 'inline' }, 'modify-vars.js'),
            '，导出对象即可，具体参考',
            l.default.createElement(
              'a',
              {
                href:
                  'https://ant-design.gitee.io/docs/react/customize-theme-cn#Ant-Design-的样式变量',
                target: '_blank',
              },
              'Ant Design 的样式变量',
            ),
          ),
          l.default.createElement(
            'h2',
            null,
            l.default.createElement(u.AnchorLinkEnhance, { to: '组件' }, '#'),
            l.default.createElement('span', null, '组件'),
          ),
          l.default.createElement('p', null, '整理中...'),
          l.default.createElement(
            'h2',
            null,
            l.default.createElement(u.AnchorLinkEnhance, { to: '插件开发' }, '#'),
            l.default.createElement('span', null, '插件开发'),
          ),
          l.default.createElement('p', null, '整理中...'),
          l.default.createElement(
            'h2',
            null,
            l.default.createElement(u.AnchorLinkEnhance, { to: '其他功能' }, '#'),
            l.default.createElement('span', null, '其他功能'),
          ),
          l.default.createElement('p', null, '整理中...'),
        );
      }
      v.isMDXComponent = !0;
      var h = {
        state: { showCode: !1 },
        setting: { title: '查看功能' },
        headings: [
          { text: '展示组件', depth: 2, level: 1 },
          { text: '支持Typescript', depth: 2, level: 1 },
          { text: '引入文件展示组件', depth: 2, level: 1 },
          { text: '自动生成组件文档', depth: 2, level: 1 },
          { text: '支持Vue', depth: 2, level: 1 },
          { text: '插件使用', depth: 2, level: 1 },
          { text: 'tip', depth: 3, level: 2 },
          { text: 'emoji', depth: 3, level: 2 },
          { text: '目录介绍', depth: 2, level: 1 },
          { text: '路由', depth: 2, level: 1 },
          { text: '配置', depth: 2, level: 1 },
          { text: '侧边栏配置', depth: 2, level: 1 },
          { text: '页面设置', depth: 2, level: 1 },
          { text: '主题', depth: 2, level: 1 },
          { text: '组件', depth: 2, level: 1 },
          { text: '插件开发', depth: 2, level: 1 },
          { text: '其他功能', depth: 2, level: 1 },
        ],
        showSidebar: !0,
        showPageSidebar: !0,
        sidebarMenus: [
          { text: '展示组件', depth: 2, level: 1 },
          { text: '支持Typescript', depth: 2, level: 1 },
          { text: '引入文件展示组件', depth: 2, level: 1 },
          { text: '自动生成组件文档', depth: 2, level: 1 },
          { text: '支持Vue', depth: 2, level: 1 },
          { text: '插件使用', depth: 2, level: 1 },
          { text: 'tip', depth: 3, level: 2 },
          { text: 'emoji', depth: 3, level: 2 },
          { text: '目录介绍', depth: 2, level: 1 },
          { text: '路由', depth: 2, level: 1 },
          { text: '配置', depth: 2, level: 1 },
          { text: '侧边栏配置', depth: 2, level: 1 },
          { text: '页面设置', depth: 2, level: 1 },
          { text: '主题', depth: 2, level: 1 },
          { text: '组件', depth: 2, level: 1 },
          { text: '插件开发', depth: 2, level: 1 },
          { text: '其他功能', depth: 2, level: 1 },
        ],
        pageSidebarMenus: [],
        utime: 1587033349627.2737,
        render: function() {
          return l.default.createElement(v, {
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
    1126: function(e, t, n) {
      'use strict';
      e.exports = n(1127);
    },
    1127: function(e, t, n) {
      e.exports = n(1128);
    },
    1128: function(e, t, n) {},
    1129: function(e, t, n) {
      'use strict';
      e.exports = n(1130);
    },
    1130: function(e, t, n) {
      e.exports = n(1131);
    },
    1131: function(e, t, n) {
      e.exports = { buttons: 'Y95AwFsXPcUhEpKPlOx9H' };
    },
    1132: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = u(n(82));
      n(83);
      var o = u(n(1)),
        a = u(n(0)),
        l = u(n(436));
      function u(e) {
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
        var n, a, u;
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
                  { className: l.default.buttons },
                  o.default.createElement(r.default, { type: 'primary' }, 'Primary'),
                  o.default.createElement(r.default, null, 'Default'),
                  o.default.createElement(r.default, { type: 'dashed' }, 'Dashed'),
                  o.default.createElement(r.default, { type: 'link' }, 'Link'),
                );
              },
            },
          ]) && f(n.prototype, a),
          u && f(n, u),
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
    1133: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = u(n(82));
      n(83);
      var o = u(n(1)),
        a = u(n(1134)),
        l = u(n(436));
      function u(e) {
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
        var n, a, u;
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
                  { className: l.default.buttons },
                  o.default.createElement(r.default, { type: 'primary' }, 'Primary'),
                  o.default.createElement(r.default, null, 'Default'),
                  o.default.createElement(r.default, { type: 'dashed' }, 'Dashed'),
                  o.default.createElement(r.default, { type: 'link' }, 'Link'),
                );
              },
            },
          ]) && f(n.prototype, a),
          u && f(n, u),
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
    1134: function(e, t, n) {
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
      var l = {};
      t.default = void 0;
      var u = f(n(1135));
      Object.keys(u).forEach(function(e) {
        'default' !== e &&
          '__esModule' !== e &&
          (Object.prototype.hasOwnProperty.call(l, e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function() {
                return u[e];
              },
            }));
      });
      var c = f(n(1136));
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
            var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set) ? Object.defineProperty(n, o, l) : (n[o] = e[o]);
          }
        return (n.default = e), t && t.set(e, n), n;
      }
      Object.keys(c).forEach(function(e) {
        'default' !== e &&
          '__esModule' !== e &&
          (Object.prototype.hasOwnProperty.call(l, e) ||
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
      })({}, u, {}, c);
      t.default = s;
    },
    1135: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.elementType = t.symbol = t.element = t.node = t.object = t.number = t.func = t.bool = t.array = t.string = t.any = void 0);
      var r,
        o = (r = n(0)) && r.__esModule ? r : { default: r };
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
      var l = a.any,
        u = a.string,
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
        (t.string = u),
        (t.any = l);
    },
    1136: function(e, t, n) {
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
        for (var l in e)
          if (Object.prototype.hasOwnProperty.call(e, l)) {
            var u = o ? Object.getOwnPropertyDescriptor(e, l) : null;
            u && (u.get || u.set) ? Object.defineProperty(n, l, u) : (n[l] = e[l]);
          }
        (n.default = e), t && t.set(e, n);
        return n;
      })(n(0));
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
    1142: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(206),
        o = n(143);
      for (var a in o)
        'default' !== a &&
          (function(e) {
            n.d(t, e, function() {
              return o[e];
            });
          })(a);
      var l = n(441),
        u = Object(l.a)(o.default, r.a, r.b, !1, null, null, null);
      t.default = u.exports;
    },
    1143: function(e, t, n) {
      'use strict';
      e.exports = n(1144);
    },
    1144: function(e, t, n) {
      e.exports = n(1145);
    },
    1145: function(e, t, n) {
      e.exports = { div: '_3zBxAV7fneT3FmWKcsF0DR' };
    },
    126: function(e, t, n) {
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
            return l.default;
          },
        }),
        Object.defineProperty(t, 'Layout', {
          enumerable: !0,
          get: function() {
            return u.default;
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
      var r = p(n(645)),
        o = p(n(1100)),
        a = p(n(1102)),
        l = p(n(1104)),
        u = p(n(1105)),
        c = p(n(1116)),
        i = p(n(1118)),
        f = p(n(429)),
        s = p(n(1120)),
        d = p(n(430));
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
    },
    143: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n(144),
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
    144: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          data: function() {
            return { count: 0 };
          },
        });
    },
    206: function(e, t, n) {
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
    28: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.Icon = t.Empty = t.BackTop = t.Button = t.List = t.Table = t.Popover = t.Input = t.Result = t.Col = t.Row = t.Pagination = t.Card = t.Tooltip = t.hljs = void 0);
      var r = n(241);
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
      var o = n(175);
      Object.defineProperty(t, 'Tooltip', {
        enumerable: !0,
        get: function() {
          return j(o).default;
        },
      });
      var a = n(701);
      Object.defineProperty(t, 'Card', {
        enumerable: !0,
        get: function() {
          return j(a).default;
        },
      });
      var l = n(191);
      Object.defineProperty(t, 'Pagination', {
        enumerable: !0,
        get: function() {
          return j(l).default;
        },
      });
      var u = n(391);
      Object.defineProperty(t, 'Row', {
        enumerable: !0,
        get: function() {
          return j(u).default;
        },
      });
      var c = n(394);
      Object.defineProperty(t, 'Col', {
        enumerable: !0,
        get: function() {
          return j(c).default;
        },
      });
      var i = n(742);
      Object.defineProperty(t, 'Result', {
        enumerable: !0,
        get: function() {
          return j(i).default;
        },
      });
      var f = n(746);
      Object.defineProperty(t, 'Input', {
        enumerable: !0,
        get: function() {
          return j(f).default;
        },
      });
      var s = n(763);
      Object.defineProperty(t, 'Popover', {
        enumerable: !0,
        get: function() {
          return j(s).default;
        },
      });
      var d = n(764);
      Object.defineProperty(t, 'Table', {
        enumerable: !0,
        get: function() {
          return j(d).default;
        },
      });
      var p = n(876);
      Object.defineProperty(t, 'List', {
        enumerable: !0,
        get: function() {
          return j(p).default;
        },
      });
      var y = n(82);
      Object.defineProperty(t, 'Button', {
        enumerable: !0,
        get: function() {
          return j(y).default;
        },
      });
      var m = n(879);
      Object.defineProperty(t, 'BackTop', {
        enumerable: !0,
        get: function() {
          return j(m).default;
        },
      });
      var b = n(388);
      Object.defineProperty(t, 'Empty', {
        enumerable: !0,
        get: function() {
          return j(b).default;
        },
      });
      var v = n(26);
      Object.defineProperty(t, 'Icon', {
        enumerable: !0,
        get: function() {
          return j(v).default;
        },
      });
      var h = j(n(880));
      function j(e) {
        return e && e.__esModule ? e : { default: e };
      }
      n(1067),
        n(1069),
        n(201),
        n(426),
        n(427),
        n(1078),
        n(1080),
        n(1083),
        n(1085),
        n(1094),
        n(83),
        n(1096),
        n(140),
        (t.hljs = h.default);
    },
    429: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var r,
        o = (r = n(1)) && r.__esModule ? r : { default: r };
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
      function l(e) {
        var t = e.lang,
          n = e.content,
          r = e.forwardRef;
        return o.default.createElement(
          'pre',
          { style: { margin: 0 } },
          o.default.createElement('code', { ref: r, className: 'languge-'.concat(t) }, n),
        );
      }
      var u = o.default.forwardRef(function(e, t) {
        return o.default.createElement(l, a({}, e, { forwardRef: t }));
      });
      t.default = u;
    },
    430: function(e, t, n) {
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
                var l, u = e[Symbol.iterator]();
                !(r = (l = u.next()).done) && (n.push(l.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                r || null == u.return || u.return();
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
      function o(e, t) {
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
          var t = e.render,
            n = e.children,
            a = o(e, ['render', 'children']),
            c = (0, l.useRef)(),
            f = r((0, l.useState)(n), 2),
            s = f[0],
            d = f[1],
            p = (0, u.useNuomi)().nuomiProps;
          return (
            (0, l.useEffect)(function() {
              if (t) {
                var e = t(c.current, p),
                  n = null,
                  r = null;
                if (
                  ('function' == typeof e
                    ? (n = e)
                    : Array.isArray(e)
                    ? ((n = e[1]), (r = e[0]))
                    : (r = e),
                  d(r),
                  'function' == typeof n)
                )
                  return function() {
                    n();
                  };
              }
            }, []),
            l.default.createElement('div', i({}, a, { ref: c }), s)
          );
        });
      var l = (function(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== a(e) && 'function' != typeof e)) return { default: e };
          var t = c();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              l && (l.get || l.set) ? Object.defineProperty(n, o, l) : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(1)),
        u = n(28);
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
    },
    432: function(e, t, n) {
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
      function l(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function u(e, t) {
        return (u =
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
        })(n(1)),
        f = n(28);
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
          var n, r, o, u, f, s;
          return (
            (function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            })(this, t),
            (r = this),
            (n =
              !(o = a(t).call(this, e)) || ('object' !== c(o) && 'function' != typeof o)
                ? l(r)
                : o),
            (u = l(n)),
            (s = void 0),
            (f = 'ref') in u
              ? Object.defineProperty(u, f, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (u[f] = s),
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
              t && u(e, t);
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
                    l = t.location,
                    u = n,
                    c = l.pathname,
                    f = l.search,
                    s = l.hash === '#'.concat(n) ? 'current' : void 0;
                  return (
                    'hash' === r &&
                      (u = ''
                        .concat(c)
                        .concat(f, '#')
                        .concat(n)),
                    i.default.createElement(
                      'a',
                      d({ id: u }, a, { ref: e.ref, href: '#'.concat(u), className: s }),
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
    433: function(e, t, n) {
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
            u = (function e(t) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              return (
                Array.isArray(t) &&
                  t.length &&
                  t.forEach(function(t, u) {
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
                                l.default,
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
                      n.push(o.default.createElement('li', { key: u }, m));
                    }
                  }),
                n
              );
            })(t);
          if (u.length)
            return o.default.createElement(
              'ul',
              { className: 'docfree-menus'.concat(n ? ' '.concat(n) : '') },
              u,
            );
          return null;
        });
      var o = u(n(1)),
        a = n(28),
        l = u(n(432));
      function u(e) {
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
      n(1109);
    },
    434: function(e, t, n) {},
    435: function(e, t, n) {
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
                var l, u = e[Symbol.iterator]();
                !(r = (l = u.next()).done) && (n.push(l.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                r || null == u.return || u.return();
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
            c = r((0, a.useState)(null), 2),
            i = c[0],
            f = c[1],
            s = r((0, a.useState)(null), 2),
            d = s[0],
            p = s[1],
            y = null,
            m = '',
            b = function() {
              p('hide'),
                setTimeout(function() {
                  f(null);
                }, 100);
            };
          (0, a.useEffect)(
            function() {
              var e = l.router.listener(function(e, t) {
                !t && i && b();
              });
              return function() {
                e();
              };
            },
            [i],
          ),
            (0, a.useEffect)(function() {
              var e = function() {
                window.outerWidth > 800 && null !== i && f(null);
              };
              return (
                window.addEventListener('resize', e),
                function() {
                  window.removeEventListener('resize', e);
                }
              );
            }, []),
            null !== i && ((y = { display: i }), (m = 'docfree-animate-'.concat(d, '-').concat(o)));
          return a.default.createElement(
            a.default.Fragment,
            null,
            a.default.createElement(
              'a',
              {
                className: 'docfree-drawer-icon',
                onClick: function() {
                  f('block'), p('show');
                },
              },
              t,
            ),
            a.default.createElement('span', {
              className: 'docfree-drawer-background',
              style: y,
              onClick: b,
            }),
            a.default.createElement('div', { className: m, style: y }, u),
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
        })(n(1)),
        l = n(28);
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
      n(1110);
    },
    436: function(e, t, n) {
      e.exports = { buttons: '_3loKrc2xiTgno7_H5v9kP_' };
    },
    442: function(e, t, n) {
      n(443), (e.exports = n(619));
    },
    619: function(e, t, n) {
      'use strict';
      var r = c(n(1)),
        o = c(n(5)),
        a = n(241),
        l = (function(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== i(e) && 'function' != typeof e)) return { default: e };
          var t = u();
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
        })(n(126));
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
      n(1122), 'undefined' == typeof btoa && (window.btoa = function() {});
      var y = [
          d(
            {
              ctime: 1586786416847.3335,
              utime: 1587022712781.9827,
              pathname: '/',
              filename: 'README',
              ext: '.md',
              title: 'README',
              path: '/',
            },
            n(1123).default,
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
                n(1124).default,
              ),
              d(
                {
                  ctime: 1586786416848.8818,
                  utime: 1587033349627.2737,
                  pathname: '/guide/',
                  filename: 'functions',
                  ext: '.md',
                  title: 'functions',
                  path: '/functions',
                },
                n(1125).default,
              ),
              { path: '*', children: r.default.createElement(l.NotFound, null) },
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
                    t.reducers,
                    t.onInit,
                    t.onChange,
                    f(t, ['children', 'render', 'effects', 'reducers', 'onInit', 'onChange']));
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
                  var l,
                    u = m.find(function(e) {
                      return e.pathname === n.pathname && e.filename === a;
                    });
                  if (u) {
                    var c = u.pathname,
                      f = u.filename,
                      s = u.title,
                      d = u.ext,
                      p = { to: c + (/^README$/i.test(f) ? '' : f), text: s };
                    f === n.filename && d === n.ext && (p.menus = n.sidebarMenus), (l = p);
                  } else l = { to: n.pathname + a, text: a };
                  o.push(l), r.push(l);
                }
              } else if (t && 'object' === i(t))
                if (Array.isArray(t)) {
                  var y = e.call(n, t),
                    b = y.menus,
                    v = y.list;
                  (o = o.concat(v)), (r = r.concat(b));
                } else {
                  var h = t.text,
                    j = t.menus;
                  if (h)
                    if (Array.isArray(j)) {
                      var g = e.call(n, j),
                        O = g.menus,
                        E = g.list,
                        w = { text: h, menus: O };
                      (o = o.concat(E)), r.push(w);
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
              l = e.showPageSidebar,
              u = e.sidebarTitle,
              c = e.sidebarMenus,
              i = e.pageSidebarMenus,
              f = e.data,
              s =
                (e.location,
                { sidebarTitle: u, showSidebar: !!o, showPageSidebar: !!l, pageSidebarMenus: i });
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
                      l = void 0;
                    try {
                      for (var u, c = t[Symbol.iterator](); !(o = (u = c.next()).done); o = !0) {
                        var i = u.value;
                        if (i === n) {
                          r = !0;
                          break;
                        }
                        !r && i && i.menus && (r = e(i.menus, n));
                      }
                    } catch (e) {
                      (a = !0), (l = e);
                    } finally {
                      try {
                        o || null == c.return || c.return();
                      } finally {
                        if (a) throw l;
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
                    j = h.menus,
                    g = h.list;
                  (f.listSource = g), (f.computedSidebarMenus = j);
                }
              } else (f.listSource = []), (f.computedSidebarMenus = [{ text: t, menus: c }]);
            }
            s.sidebarMenus = f.computedSidebarMenus || [];
            var O = f.listSource || [];
            this.dispatch({ type: '_updateState', payload: { listSource: O } }),
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
          { text: 'v0.4.0', to: 'https://github.com/yinjiazeng/docfree/releases' },
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
                l.Layout,
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
                  r.default.createElement(l.NotFound, null),
                ),
              ),
            ),
          );
        }, null),
        document.getElementById('root'),
      );
    },
    645: function(e, t, n) {
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
                var l, u = e[Symbol.iterator]();
                !(r = (l = u.next()).done) && (n.push(l.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                r || null == u.return || u.return();
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
            i = r((0, l.useConnect)(), 1)[0].showCode,
            f = r((0, a.useState)(!1), 2),
            d = f[0],
            p = f[1];
          return (
            (0, a.useEffect)(
              function() {
                p(i);
              },
              [i],
            ),
            a.default.createElement(
              'div',
              { className: 'docfree-playground' },
              a.default.createElement(
                'div',
                null,
                a.default.createElement(c.default, { render: n }, o),
              ),
              a.default.createElement(
                'a',
                {
                  onClick: function() {
                    p(!d);
                  },
                },
                d
                  ? a.default.createElement(l.Icon, { type: 'eye-invisible' })
                  : a.default.createElement(l.Icon, { type: 'eye' }),
                d ? '隐藏' : '显示',
                '代码',
              ),
              d &&
                [].concat(t).map(function(e, t) {
                  return a.default.createElement(u.default, s({}, e, { key: t }));
                }),
            )
          );
        });
      var a = (function(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== o(e) && 'function' != typeof e)) return { default: e };
          var t = f();
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
        })(n(1)),
        l = n(28),
        u = i(n(1098)),
        c = i(n(430));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
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
      n(1099);
    },
    689: function(e, t, n) {
      var r = {
        './af': 258,
        './af.js': 258,
        './ar': 259,
        './ar-dz': 260,
        './ar-dz.js': 260,
        './ar-kw': 261,
        './ar-kw.js': 261,
        './ar-ly': 262,
        './ar-ly.js': 262,
        './ar-ma': 263,
        './ar-ma.js': 263,
        './ar-sa': 264,
        './ar-sa.js': 264,
        './ar-tn': 265,
        './ar-tn.js': 265,
        './ar.js': 259,
        './az': 266,
        './az.js': 266,
        './be': 267,
        './be.js': 267,
        './bg': 268,
        './bg.js': 268,
        './bm': 269,
        './bm.js': 269,
        './bn': 270,
        './bn.js': 270,
        './bo': 271,
        './bo.js': 271,
        './br': 272,
        './br.js': 272,
        './bs': 273,
        './bs.js': 273,
        './ca': 274,
        './ca.js': 274,
        './cs': 275,
        './cs.js': 275,
        './cv': 276,
        './cv.js': 276,
        './cy': 277,
        './cy.js': 277,
        './da': 278,
        './da.js': 278,
        './de': 279,
        './de-at': 280,
        './de-at.js': 280,
        './de-ch': 281,
        './de-ch.js': 281,
        './de.js': 279,
        './dv': 282,
        './dv.js': 282,
        './el': 283,
        './el.js': 283,
        './en-SG': 284,
        './en-SG.js': 284,
        './en-au': 285,
        './en-au.js': 285,
        './en-ca': 286,
        './en-ca.js': 286,
        './en-gb': 287,
        './en-gb.js': 287,
        './en-ie': 288,
        './en-ie.js': 288,
        './en-il': 289,
        './en-il.js': 289,
        './en-nz': 290,
        './en-nz.js': 290,
        './eo': 291,
        './eo.js': 291,
        './es': 292,
        './es-do': 293,
        './es-do.js': 293,
        './es-us': 294,
        './es-us.js': 294,
        './es.js': 292,
        './et': 295,
        './et.js': 295,
        './eu': 296,
        './eu.js': 296,
        './fa': 297,
        './fa.js': 297,
        './fi': 298,
        './fi.js': 298,
        './fo': 299,
        './fo.js': 299,
        './fr': 300,
        './fr-ca': 301,
        './fr-ca.js': 301,
        './fr-ch': 302,
        './fr-ch.js': 302,
        './fr.js': 300,
        './fy': 303,
        './fy.js': 303,
        './ga': 304,
        './ga.js': 304,
        './gd': 305,
        './gd.js': 305,
        './gl': 306,
        './gl.js': 306,
        './gom-latn': 307,
        './gom-latn.js': 307,
        './gu': 308,
        './gu.js': 308,
        './he': 309,
        './he.js': 309,
        './hi': 310,
        './hi.js': 310,
        './hr': 311,
        './hr.js': 311,
        './hu': 312,
        './hu.js': 312,
        './hy-am': 313,
        './hy-am.js': 313,
        './id': 314,
        './id.js': 314,
        './is': 315,
        './is.js': 315,
        './it': 316,
        './it-ch': 317,
        './it-ch.js': 317,
        './it.js': 316,
        './ja': 318,
        './ja.js': 318,
        './jv': 319,
        './jv.js': 319,
        './ka': 320,
        './ka.js': 320,
        './kk': 321,
        './kk.js': 321,
        './km': 322,
        './km.js': 322,
        './kn': 323,
        './kn.js': 323,
        './ko': 324,
        './ko.js': 324,
        './ku': 325,
        './ku.js': 325,
        './ky': 326,
        './ky.js': 326,
        './lb': 327,
        './lb.js': 327,
        './lo': 328,
        './lo.js': 328,
        './lt': 329,
        './lt.js': 329,
        './lv': 330,
        './lv.js': 330,
        './me': 331,
        './me.js': 331,
        './mi': 332,
        './mi.js': 332,
        './mk': 333,
        './mk.js': 333,
        './ml': 334,
        './ml.js': 334,
        './mn': 335,
        './mn.js': 335,
        './mr': 336,
        './mr.js': 336,
        './ms': 337,
        './ms-my': 338,
        './ms-my.js': 338,
        './ms.js': 337,
        './mt': 339,
        './mt.js': 339,
        './my': 340,
        './my.js': 340,
        './nb': 341,
        './nb.js': 341,
        './ne': 342,
        './ne.js': 342,
        './nl': 343,
        './nl-be': 344,
        './nl-be.js': 344,
        './nl.js': 343,
        './nn': 345,
        './nn.js': 345,
        './pa-in': 346,
        './pa-in.js': 346,
        './pl': 347,
        './pl.js': 347,
        './pt': 348,
        './pt-br': 349,
        './pt-br.js': 349,
        './pt.js': 348,
        './ro': 350,
        './ro.js': 350,
        './ru': 351,
        './ru.js': 351,
        './sd': 352,
        './sd.js': 352,
        './se': 353,
        './se.js': 353,
        './si': 354,
        './si.js': 354,
        './sk': 355,
        './sk.js': 355,
        './sl': 356,
        './sl.js': 356,
        './sq': 357,
        './sq.js': 357,
        './sr': 358,
        './sr-cyrl': 359,
        './sr-cyrl.js': 359,
        './sr.js': 358,
        './ss': 360,
        './ss.js': 360,
        './sv': 361,
        './sv.js': 361,
        './sw': 362,
        './sw.js': 362,
        './ta': 363,
        './ta.js': 363,
        './te': 364,
        './te.js': 364,
        './tet': 365,
        './tet.js': 365,
        './tg': 366,
        './tg.js': 366,
        './th': 367,
        './th.js': 367,
        './tl-ph': 368,
        './tl-ph.js': 368,
        './tlh': 369,
        './tlh.js': 369,
        './tr': 370,
        './tr.js': 370,
        './tzl': 371,
        './tzl.js': 371,
        './tzm': 372,
        './tzm-latn': 373,
        './tzm-latn.js': 373,
        './tzm.js': 372,
        './ug-cn': 374,
        './ug-cn.js': 374,
        './uk': 375,
        './uk.js': 375,
        './ur': 376,
        './ur.js': 376,
        './uz': 377,
        './uz-latn': 378,
        './uz-latn.js': 378,
        './uz.js': 377,
        './vi': 379,
        './vi.js': 379,
        './x-pseudo': 380,
        './x-pseudo.js': 380,
        './yo': 381,
        './yo.js': 381,
        './zh-cn': 382,
        './zh-cn.js': 382,
        './zh-hk': 383,
        './zh-hk.js': 383,
        './zh-tw': 384,
        './zh-tw.js': 384,
      };
      function o(e) {
        var t = a(e);
        return n(t);
      }
      function a(e) {
        if (!n.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        }
        return r[e];
      }
      (o.keys = function() {
        return Object.keys(r);
      }),
        (o.resolve = a),
        (e.exports = o),
        (o.id = 689);
    },
  },
  [[442, 1, 2]],
]);
