!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
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
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
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
    n((n.s = 5));
})([
  function(e, t) {
    e.exports = require('react');
  },
  function(e, t) {
    e.exports = require('express');
  },
  function(e, t) {
    e.exports = require('compression');
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
    n(4);
    var r = n(1),
      o = n.n(r),
      i = n(0),
      u = n.n(i),
      c = n(2),
      l = n.n(c),
      a = n(3),
      s = o()();
    s.use(
      l()({
        level: 2,
        filter: function(e, t) {
          return !e.headers['x-no-compression'] && l.a.filter(e, t);
        }
      })
    );
    var f = process.env.PORT || 4e3;
    s.use(o.a.static('public')),
      s.get('*', function(e, t) {
        e.params[0].split('/')[2];
        var n = {},
          r = (function(e, t) {
            var n = Object(a.renderToString)(u.a.createElement('div', null, 'Hello from React!'));
            return '<!DOCTYPE html>\n            <head>\n                <title>Bookstore SSR</title>\n                <meta charset="UTF-8">\n                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n            </head>\n            <body>\n                <div id="root">'.concat(
              n,
              '</div>\n            </body>\n    </html>'
            );
          })();
        n.notFound && t.status(404), t.send(r);
      }),
      s.listen(f, function() {
        console.log('Listening on port: '.concat(f));
      });
  }
]);
