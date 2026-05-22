(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [995, 3376, 3817], {
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
          if (null === e || "object" != l(e) && "function" != typeof e) return {
            default: e
          };
          if ((t = c(t)) && t.has(e)) return t.get(e);
          var r, n, o = {
              __proto__: null
            },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (r in e) "default" !== r && ({}).hasOwnProperty.call(e, r) && ((n = a ? Object.getOwnPropertyDescriptor(e, r) : null) && (n.get || n.set) ? Object.defineProperty(o, r, n) : o[r] = e[r]);
          return o.default = e, t && t.set(e, o), o
        }(r(12115)),
        o = u(r(95338)),
        a = u(r(14051)),
        i = ["type", "width", "height", "series", "options", "chartRef"];

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

      function l(e) {
        return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }

      function f(e, t) {
        var r, n = Object.keys(e);
        return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(e), t && (r = r.filter(function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)), n
      }

      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? f(Object(r), !0).forEach(function(t) {
            d(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function d(e, t, r) {
        var n;
        return (n = function(e, t) {
          if ("object" != l(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 === r) return ("string" === t ? String : Number)(e);
          if (r = r.call(e, t || "default"), "object" != l(r)) return r;
          throw TypeError("@@toPrimitive must return a primitive value.")
        }(n = t, "string"), (t = "symbol" == l(n) ? n : n + "") in e) ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function y(e, t) {
        var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : new WeakSet;
        if (e !== t) {
          if ("object" !== l(e) || null === e || "object" !== l(t) || null === t) return !1;
          if (!r.has(e) && !r.has(t)) {
            r.add(e), r.add(t);
            var n = Object.keys(e),
              o = Object.keys(t);
            if (n.length !== o.length) return !1;
            for (var a = 0; a < n.length; a++) {
              var i = n[a];
              if (!o.includes(i) || !y(e[i], t[i], r)) return !1
            }
          }
        }
        return !0
      }

      function b(e) {
        function t(e) {
          return e && "object" === l(e) && !Array.isArray(e)
        }
        var r, a, u, c = e.type,
          f = void 0 === c ? "line" : c,
          c = e.width,
          h = void 0 === c ? "100%" : c,
          c = e.height,
          g = void 0 === c ? "auto" : c,
          m = e.series,
          O = e.options,
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
              for (var o = Object.getOwnPropertySymbols(e), a = 0; a < o.length; a++) r = o[a], t.includes(r) || ({}).propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
            return n
          }(e, i),
          v = (0, n.useRef)(null),
          w = c || (0, n.useRef)(null),
          j = (0, n.useRef)(),
          S = ((0, n.useEffect)(function() {
            j.current = O;
            var e = v.current;
            return w.current = new o.default(e, S()), w.current.render(),
              function() {
                w.current && "function" == typeof w.current.destroy && w.current.destroy()
              }
          }, []), (0, n.useEffect)(function() {
            var e = !y(w.current.w.config.series, m),
              t = !y(j.current, O) || g !== w.current.opts.chart.height || h !== w.current.opts.chart.width;
            (e || t) && (!e || t ? w.current.updateOptions(S()) : w.current.updateSeries(m)), j.current = O
          }, [O, m, g, h]), function() {
            return P(O, {
              chart: {
                type: f,
                height: g,
                width: h
              },
              series: m
            })
          }),
          P = function(e, r) {
            var n = p({}, e);
            return t(e) && t(r) && Object.keys(r).forEach(function(o) {
              t(r[o]) && o in e ? n[o] = P(e[o], r[o]) : Object.assign(n, d({}, o, r[o]))
            }), n
          },
          c = (r = e, a = Object.keys(b.propTypes), u = p({}, r), a.forEach(function(e) {
            delete u[e]
          }), u);
        return n.default.createElement("div", s({
          ref: v
        }, c))
      }
      b.propTypes = {
        type: a.default.string.isRequired,
        series: a.default.array.isRequired,
        options: a.default.object.isRequired,
        width: a.default.oneOfType([a.default.string, a.default.number]),
        height: a.default.oneOfType([a.default.string, a.default.number]),
        chartRef: a.default.shape({
          current: a.default.any
        })
      }
    },
    34701: (e, t, r) => {
      "use strict";
      var n = r(82114);

      function o() {}

      function a() {}
      a.resetWarningCache = o, e.exports = function() {
        function e(e, t, r, o, a, i) {
          if (i !== n) {
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
          checkPropTypes: a,
          resetWarningCache: o
        };
        return r.PropTypes = r, r
      }
    },
    60995: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        default: () => i
      });
      var n = r(95155);
      r(12115);
      var o = r(33817),
        a = r(96351);
      let i = ({
        pageViewsData: e,
        timeRange: t = 14
      }) => {
        let r = (0, a.kj)(),
          i = new Date,
          u = [],
          c = [];
        if (1 === t) {
          let t = Intl.DateTimeFormat(void 0, {
              hour: "numeric"
            }).resolvedOptions().hour12,
            r = Array.from({
              length: 24
            }).map((e, t) => {
              let r = new Date(i);
              return r.setHours(i.getHours() - (22 - t), 0, 0, 0), r
            }),
            n = new Map(e.map(e => [e._id, e.count])),
            o = r.map(e => {
              let t = e.getFullYear(),
                r = String(e.getMonth() + 1).padStart(2, "0"),
                o = String(e.getDate()).padStart(2, "0"),
                a = String(e.getHours()).padStart(2, "0"),
                i = `${t}-${r}-${o}T${a}`;
              return {
                label: i,
                count: n.get(i) || 0
              }
            });
          u = o.map(e => {
            let r = new Date(e.label + ":00:00");
            return t ? r.toLocaleTimeString(void 0, {
              hour: "numeric",
              hour12: !0
            }).replace(":00", "").toUpperCase() : r.toLocaleTimeString(void 0, {
              hour: "2-digit",
              minute: "2-digit",
              hour12: !1
            })
          }), c = o.map(e => e.count)
        } else {
          let r = Array.from({
              length: t
            }).map((e, r) => {
              let n = new Date(i);
              return n.setDate(i.getDate() - (t - 1 - r)), n.toISOString().slice(0, 10)
            }),
            n = new Map(e.map(e => [e._id, e.count])),
            o = r.map(e => ({
              date: e,
              count: n.get(e) || 0
            }));
          u = o.map(e => e.date), c = o.map(e => e.count)
        }
        let s = {
            chart: {
              id: "pageViews",
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
              categories: u,
              labels: {
                formatter: e => 1 === t ? e : new Date(e).toLocaleDateString(void 0, {
                  month: "short",
                  day: "numeric"
                })
              },
              axisBorder: {
                show: !1
              },
              axisTicks: {
                height: 8,
                offsetX: 0,
                offsetY: -.5,
                borderType: "solid",
                color: "#555555"
              },
              tickAmount: 1 === t ? 5 : 7
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
          l = [{
            name: r("dashboard.account.analytics.chart.series_name"),
            data: c
          }];
        return (0, n.jsx)(o.default, {
          options: s,
          series: l,
          type: "area",
          height: 370
        })
      }
    },
    82114: e => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }
  }
]);