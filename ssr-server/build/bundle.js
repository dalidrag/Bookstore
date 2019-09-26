!(function(e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var r = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          n.d(
            o,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return o;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 7));
})([
  function(e, t) {
    e.exports = require('react');
  },
  function(e, t) {
    e.exports = require('react-router-dom');
  },
  function(e, t) {
    e.exports = require('express');
  },
  function(e, t) {
    e.exports = require('compression');
  },
  function(e, t) {
    e.exports = require('prop-types');
  },
  function(e, t) {
    e.exports = require('react-dom/server');
  },
  function(e, t) {
    e.exports = require('@babel/polyfill');
  },
  function(e, t, n) {
    'use strict';
    n.r(t);
    n(6);
    var o = n(2),
      r = n.n(o),
      c = n(0),
      a = n.n(c),
      i = n(3),
      u = n.n(i),
      l = n(5),
      s = n(1);
    function f() {
      return (f =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }).apply(this, arguments);
    }
    var p = function(e) {
      return e
        ? a.a.createElement(
            s.Switch,
            null,
            e.map(function(e, t) {
              return a.a.createElement(s.Route, {
                key: e.key || t,
                path: e.path,
                exact: e.exact,
                render: function(t) {
                  return a.a.createElement(e.component, f({}, t, { route: e }));
                }
              });
            })
          )
        : null;
    };
    n(4), n(8);
    function y(e) {
      return (y =
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
    function d(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    function m(e, t) {
      return !t || ('object' !== y(t) && 'function' != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
          })(e)
        : t;
    }
    function b(e) {
      return (b = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function v(e, t) {
      return (v =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var h = (function(e) {
      function t(e) {
        return (
          (function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
          })(this, t),
          m(this, b(t).call(this, e))
        );
      }
      var n, o, r;
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && v(e, t);
        })(t, e),
        (n = t),
        (o = [
          { key: 'componentWillMount', value: function() {} },
          { key: 'componentDidMount', value: function() {} },
          { key: 'componentWillReceiveProps', value: function(e) {} },
          { key: 'componentWillUpdate', value: function(e, t) {} },
          { key: 'componentDidUpdate', value: function(e, t) {} },
          { key: 'componentWillUnmount', value: function() {} },
          {
            key: 'render',
            value: function() {
              return a.a.createElement(
                'div',
                { className: 'bs-c-category-view' },
                this.props.booksFromCategory &&
                  this.props.booksFromCategory.map(function(e) {
                    return a.a.createElement(
                      'div',
                      null,
                      a.a.createElement('img', {
                        src: 'http://localhost:3000/api/covers/' + e.id,
                        alt: 'book cover'
                      }),
                      a.a.createElement('p', null, e.year)
                    );
                  })
              );
            }
          }
        ]) && d(n.prototype, o),
        r && d(n, r),
        t
      );
    })(c.Component);
    h.propTypes = {};
    var O = [
      { path: '/', exact: !0, component: null },
      { path: '/category/:category', component: h }
    ];
    n(10);
    function w(e) {
      return (w =
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
    function g(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    function j(e) {
      return (j = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function k(e) {
      if (void 0 === e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function E(e, t) {
      return (E =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var _ = (function(e) {
      function t(e) {
        var n, o, r, c, a, i;
        return (
          (function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
          })(this, t),
          (o = this),
          (n =
            !(r = j(t).call(this, e)) || ('object' !== w(r) && 'function' != typeof r) ? k(o) : r),
          (c = k(n)),
          (i = function() {
            var e = Math.round(window.scrollY),
              t = document.querySelector('.js-sticky-header'),
              n = document.querySelector('.js-sticky-header-wrapper');
            n &&
              (e > 1
                ? (t.classList.add('is-detached'), n.classList.add('is-detached'))
                : (t.classList.remove('is-detached'), n.classList.remove('is-detached')));
          }),
          (a = 'switchHeaderMode') in c
            ? Object.defineProperty(c, a, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (c[a] = i),
          n
        );
      }
      var n, o, r;
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && E(e, t);
        })(t, e),
        (n = t),
        (o = [
          { key: 'componentWillMount', value: function() {} },
          {
            key: 'componentDidMount',
            value: function() {
              window.addEventListener('scroll', this.switchHeaderMode);
            }
          },
          { key: 'shouldComponentUpdate', value: function(e, t) {} },
          { key: 'componentDidUpdate', value: function(e, t) {} },
          { key: 'componentWillUnmount', value: function() {} },
          {
            key: 'render',
            value: function() {
              return a.a.createElement(
                'div',
                { className: 'bs-c-header-wrapper js-sticky-header-wrapper' },
                a.a.createElement(
                  'div',
                  { className: 'bs-c-header js-sticky-header' },
                  a.a.createElement('div', { className: 'bs-c-header__logo' }),
                  a.a.createElement(
                    'nav',
                    { className: 'bs-c-header__main-menu' },
                    a.a.createElement(s.Link, { to: '/category/Fiction' }, 'Categories'),
                    a.a.createElement('a', { href: '#' }, 'Favorites'),
                    a.a.createElement('a', { href: '#' }, 'Profile')
                  )
                )
              );
            }
          }
        ]) && g(n.prototype, o),
        r && g(n, r),
        t
      );
    })(c.Component);
    _.propTypes = {};
    var S = _,
      x = r()();
    x.use(
      u()({
        level: 2,
        filter: function(e, t) {
          return !e.headers['x-no-compression'] && u.a.filter(e, t);
        }
      })
    );
    var P = process.env.PORT || 4e3;
    x.use(r.a.static('public')),
      x.get('*', function(e, t) {
        e.params[0].split('/')[2];
        var n = {},
          o = (function(e, t) {
            var n = Object(l.renderToString)(
              a.a.createElement(
                s.StaticRouter,
                { location: e.path, context: t },
                a.a.createElement(
                  'div',
                  { className: 'bs-screen-container' },
                  a.a.createElement(
                    'div',
                    { className: 'bs-content-container' },
                    a.a.createElement(S, null),
                    p(O)
                  )
                )
              )
            );
            return '<!DOCTYPE html>\n            <head>\n                <title>Bookstore SSR</title>\n                <meta charset="UTF-8">\n                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n                <link rel="stylesheet" type="text/css" href="http://localhost:4000/styles.min.css" />\n            </head>\n            <body>\n                <div id="root">'.concat(
              n,
              '</div>\n            </body>\n    </html>'
            );
          })(e, n);
        n.notFound && t.status(404), t.send(o);
      }),
      x.listen(P, function() {
        console.log('Listening on port: '.concat(P));
      });
  },
  function(e, t) {},
  ,
  function(e, t) {}
]);
