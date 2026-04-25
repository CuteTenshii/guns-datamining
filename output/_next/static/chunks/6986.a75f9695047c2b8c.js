(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4822, 6986], {
    14051: (e, t, r) => {
      e.exports = r(34701)()
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
      var o = r(44822),
        i = r(96351);
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
    44822: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        default: () => b
      });
      var n = r(12115),
        o = r(95338),
        i = r(14051),
        a = r.n(i);

      function u() {
        return (u = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }).apply(null, arguments)
      }

      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? c(Object(r), !0).forEach(function(t) {
            ! function(e, t, r) {
              var n;
              (t = "symbol" == typeof(n = function(e, t) {
                if ("object" != typeof e || !e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                  var n = r.call(e, t || "default");
                  if ("object" != typeof n) return n;
                  throw TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
              }(t, "string")) ? n : n + "") in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = r
            }(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function f(e) {
        return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }
      var l = ["type", "width", "height", "series", "options", "chartRef"];

      function p(e) {
        return e && "object" === f(e) && !Array.isArray(e)
      }

      function y(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new WeakSet;
        if (e === t) return !0;
        if ("object" !== f(e) || null === e || "object" !== f(t) || null === t) return !1;
        if (r.has(e) || r.has(t)) return !0;
        r.add(e), r.add(t);
        var n = Object.keys(e),
          o = Object.keys(t);
        if (n.length !== o.length) return !1;
        for (var i = 0; i < n.length; i++) {
          var a = n[i];
          if (!o.includes(a) || !y(e[a], t[a], r)) return !1
        }
        return !0
      }
      var h = ["type", "series", "options", "width", "height", "chartRef"];

      function b(e) {
        var t = e.type,
          r = void 0 === t ? "line" : t,
          i = e.width,
          a = void 0 === i ? "100%" : i,
          c = e.height,
          f = void 0 === c ? "auto" : c,
          b = e.series,
          d = e.options,
          g = e.chartRef,
          m = function(e, t) {
            if (null == e) return {};
            var r, n, o = function(e, t) {
              if (null == e) return {};
              var r = {};
              for (var n in e)
                if (({}).hasOwnProperty.call(e, n)) {
                  if (t.includes(n)) continue;
                  r[n] = e[n]
                } return r
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (n = 0; n < i.length; n++) r = i[n], t.includes(r) || ({}).propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
          }(e, l),
          v = (0, n.useRef)(null),
          O = (0, n.useRef)(null),
          w = (0, n.useRef)(null),
          j = g || w,
          P = function() {
            return function e(t, r) {
              var n = s({}, t);
              return p(t) && p(r) && Object.keys(r).forEach(function(o) {
                p(r[o]) ? n[o] = o in t ? e(t[o], r[o]) : r[o] : n[o] = r[o]
              }), n
            }(d, {
              chart: {
                type: r,
                height: f,
                width: a
              },
              series: b
            })
          };
        (0, n.useEffect)(function() {
          return j.current = new o.default(v.current, P()), j.current.render(), O.current = d,
            function() {
              j.current && "function" == typeof j.current.destroy && j.current.destroy()
            }
        }, []), (0, n.useEffect)(function() {
          if (j.current && j.current.w) {
            var e = !y(j.current.w.config.series, b),
              t = !y(O.current, d) || f !== j.current.opts.chart.height || a !== j.current.opts.chart.width;
            (e || t) && (e ? t ? j.current.updateOptions(P()) : j.current.updateSeries(b) : j.current.updateOptions(P())), O.current = d
          }
        }, [d, b, f, a]);
        var S, k = (S = s({}, m), h.forEach(function(e) {
          delete S[e]
        }), S);
        return n.createElement("div", u({
          ref: v
        }, k))
      }
      b.propTypes = {
        type: a().string.isRequired,
        series: a().array.isRequired,
        options: a().object.isRequired,
        width: a().oneOfType([a().string, a().number]),
        height: a().oneOfType([a().string, a().number]),
        chartRef: a().shape({
          current: a().any
        })
      }
    },
    82114: e => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }
  }
]);