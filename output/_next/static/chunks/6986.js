(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3817, 6986], {
    14051: (e, t, r) => {
      e.exports = r(34701)()
    },
    33817: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = b;
      var n = function(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || "object" != f(e) && "function" != typeof e) return {
            default: e
          };
          if ((t = c(t)) && t.has(e)) return t.get(e);
          var r, n, o = {
              __proto__: null
            },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (r in e) "default" !== r && ({}).hasOwnProperty.call(e, r) && ((n = i ? Object.getOwnPropertyDescriptor(e, r) : null) && (n.get || n.set) ? Object.defineProperty(o, r, n) : o[r] = e[r]);
          return o.default = e, t && t.set(e, o), o
        }(r(12115)),
        o = u(r(95338)),
        i = u(r(14051)),
        a = ["type", "width", "height", "series", "options", "chartRef"];

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function c(e) {
        var t, r;
        return "function" != typeof WeakMap ? null : (t = new WeakMap, r = new WeakMap, (c = function(e) {
          return e ? r : t
        })(e))
      }

      function s() {
        return (s = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r, n = arguments[t];
            for (r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }).apply(null, arguments)
      }

      function f(e) {
        return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }

      function l(e, t) {
        var r, n = Object.keys(e);
        return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(e), t && (r = r.filter(function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)), n
      }

      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? l(Object(r), !0).forEach(function(t) {
            y(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function y(e, t, r) {
        var n;
        return (n = function(e, t) {
          if ("object" != f(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 === r) return ("string" === t ? String : Number)(e);
          if (r = r.call(e, t || "default"), "object" != f(r)) return r;
          throw TypeError("@@toPrimitive must return a primitive value.")
        }(n = t, "string"), (t = "symbol" == f(n) ? n : n + "") in e) ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function d(e, t) {
        var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : new WeakSet;
        if (e !== t) {
          if ("object" !== f(e) || null === e || "object" !== f(t) || null === t) return !1;
          if (!r.has(e) && !r.has(t)) {
            r.add(e), r.add(t);
            var n = Object.keys(e),
              o = Object.keys(t);
            if (n.length !== o.length) return !1;
            for (var i = 0; i < n.length; i++) {
              var a = n[i];
              if (!o.includes(a) || !d(e[a], t[a], r)) return !1
            }
          }
        }
        return !0
      }

      function b(e) {
        function t(e) {
          return e && "object" === f(e) && !Array.isArray(e)
        }
        var r, i, u, c = e.type,
          l = void 0 === c ? "line" : c,
          c = e.width,
          h = void 0 === c ? "100%" : c,
          c = e.height,
          O = void 0 === c ? "auto" : c,
          g = e.series,
          m = e.options,
          c = e.chartRef,
          e = function(e, t) {
            if (null == e) return {};
            var r, n = function(e, t) {
              if (null == e) return {};
              var r, n = {};
              for (r in e)
                if (({}).hasOwnProperty.call(e, r)) {
                  if (t.includes(r)) continue;
                  n[r] = e[r]
                } return n
            }(e, t);
            if (Object.getOwnPropertySymbols)
              for (var o = Object.getOwnPropertySymbols(e), i = 0; i < o.length; i++) r = o[i], t.includes(r) || ({}).propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
            return n
          }(e, a),
          v = (0, n.useRef)(null),
          j = c || (0, n.useRef)(null),
          w = (0, n.useRef)(),
          P = ((0, n.useEffect)(function() {
            w.current = m;
            var e = v.current;
            return j.current = new o.default(e, P()), j.current.render(),
              function() {
                j.current && "function" == typeof j.current.destroy && j.current.destroy()
              }
          }, []), (0, n.useEffect)(function() {
            var e = !d(j.current.w.config.series, g),
              t = !d(w.current, m) || O !== j.current.opts.chart.height || h !== j.current.opts.chart.width;
            (e || t) && (!e || t ? j.current.updateOptions(P()) : j.current.updateSeries(g)), w.current = m
          }, [m, g, O, h]), function() {
            return _(m, {
              chart: {
                type: l,
                height: O,
                width: h
              },
              series: g
            })
          }),
          _ = function(e, r) {
            var n = p({}, e);
            return t(e) && t(r) && Object.keys(r).forEach(function(o) {
              t(r[o]) && o in e ? n[o] = _(e[o], r[o]) : Object.assign(n, y({}, o, r[o]))
            }), n
          },
          c = (r = e, i = Object.keys(b.propTypes), u = p({}, r), i.forEach(function(e) {
            delete u[e]
          }), u);
        return n.default.createElement("div", s({
          ref: v
        }, c))
      }
      b.propTypes = {
        type: i.default.string.isRequired,
        series: i.default.array.isRequired,
        options: i.default.object.isRequired,
        width: i.default.oneOfType([i.default.string, i.default.number]),
        height: i.default.oneOfType([i.default.string, i.default.number]),
        chartRef: i.default.shape({
          current: i.default.any
        })
      }
    },
    34701: (e, t, r) => {
      "use strict";
      var n = r(82114);

      function o() {}

      function i() {}
      i.resetWarningCache = o, e.exports = function() {
        function e(e, t, r, o, i, a) {
          if (a !== n) {
            var u = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw u.name = "Invariant Violation", u
          }
        }

        function t() {
          return e
        }
        e.isRequired = e;
        var r = {
          array: e,
          bigint: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: i,
          resetWarningCache: o
        };
        return r.PropTypes = r, r
      }
    },
    36986: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        default: () => a
      });
      var n = r(95155);
      r(12115);
      var o = r(33817),
        i = r(38256);
      let a = ({
        dailyData: e,
        height: t = 420
      }) => {
        let r = (0, i.kj)(),
          a = new Date,
          u = Array.from({
            length: 14
          }).map((e, t) => {
            let r = new Date(a);
            return r.setDate(a.getDate() - (13 - t)), r.toISOString().slice(0, 10)
          }),
          c = new Map(e.map(e => [e._id, e.count])),
          s = u.map(e => ({
            date: e,
            count: c.get(e) || 0
          })),
          f = s.map(e => e.date),
          l = s.map(e => e.count),
          p = [{
            name: r("dashboard.imagehost.usage.chart.series_label"),
            data: l
          }];
        return (0, n.jsx)(o.default, {
          options: {
            chart: {
              id: "dailyUploads",
              type: "area",
              toolbar: {
                show: !1
              },
              zoom: {
                enabled: !1
              },
              foreColor: "#575757",
              fontFamily: "Satoshi, sans-serif"
            },
            xaxis: {
              categories: f,
              labels: {
                formatter: e => new Date(e).toLocaleDateString(void 0, {
                  month: "short",
                  day: "numeric"
                })
              },
              axisBorder: {
                show: !1
              },
              axisTicks: {
                show: !1
              },
              tickAmount: 7
            },
            yaxis: {
              labels: {
                formatter: e => e.toFixed(0)
              }
            },
            tooltip: {
              enabled: !1
            },
            dataLabels: {
              enabled: !1
            },
            grid: {
              show: !1
            },
            colors: ["#8b519c"]
          },
          series: p,
          type: "area",
          height: t
        })
      }
    },
    82114: e => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }
  }
]);