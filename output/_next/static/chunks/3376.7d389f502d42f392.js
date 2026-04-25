"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3376], {
    44822: (e, t, r) => {
      r.r(t), r.d(t, {
        default: () => y
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

      function l(e) {
        return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }
      var f = ["type", "width", "height", "series", "options", "chartRef"];

      function p(e) {
        return e && "object" === l(e) && !Array.isArray(e)
      }

      function h(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new WeakSet;
        if (e === t) return !0;
        if ("object" !== l(e) || null === e || "object" !== l(t) || null === t) return !1;
        if (r.has(e) || r.has(t)) return !0;
        r.add(e), r.add(t);
        var n = Object.keys(e),
          o = Object.keys(t);
        if (n.length !== o.length) return !1;
        for (var i = 0; i < n.length; i++) {
          var a = n[i];
          if (!o.includes(a) || !h(e[a], t[a], r)) return !1
        }
        return !0
      }
      var d = ["type", "series", "options", "width", "height", "chartRef"];

      function y(e) {
        var t = e.type,
          r = void 0 === t ? "line" : t,
          i = e.width,
          a = void 0 === i ? "100%" : i,
          c = e.height,
          l = void 0 === c ? "auto" : c,
          y = e.series,
          b = e.options,
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
          }(e, f),
          v = (0, n.useRef)(null),
          w = (0, n.useRef)(null),
          O = (0, n.useRef)(null),
          j = g || O,
          S = function() {
            return function e(t, r) {
              var n = s({}, t);
              return p(t) && p(r) && Object.keys(r).forEach(function(o) {
                p(r[o]) ? n[o] = o in t ? e(t[o], r[o]) : r[o] : n[o] = r[o]
              }), n
            }(b, {
              chart: {
                type: r,
                height: l,
                width: a
              },
              series: y
            })
          };
        (0, n.useEffect)(function() {
          return j.current = new o.default(v.current, S()), j.current.render(), w.current = b,
            function() {
              j.current && "function" == typeof j.current.destroy && j.current.destroy()
            }
        }, []), (0, n.useEffect)(function() {
          if (j.current && j.current.w) {
            var e = !h(j.current.w.config.series, y),
              t = !h(w.current, b) || l !== j.current.opts.chart.height || a !== j.current.opts.chart.width;
            (e || t) && (e ? t ? j.current.updateOptions(S()) : j.current.updateSeries(y) : j.current.updateOptions(S())), w.current = b
          }
        }, [b, y, l, a]);
        var P, D = (P = s({}, m), d.forEach(function(e) {
          delete P[e]
        }), P);
        return n.createElement("div", u({
          ref: v
        }, D))
      }
      y.propTypes = {
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
    60995: (e, t, r) => {
      r.r(t), r.d(t, {
        default: () => a
      });
      var n = r(95155);
      r(12115);
      var o = r(44822),
        i = r(96351);
      let a = ({
        pageViewsData: e,
        timeRange: t = 14
      }) => {
        let r = (0, i.kj)(),
          a = new Date,
          u = [],
          c = [];
        if (1 === t) {
          let t = Intl.DateTimeFormat(void 0, {
              hour: "numeric"
            }).resolvedOptions().hour12,
            r = Array.from({
              length: 24
            }).map((e, t) => {
              let r = new Date(a);
              return r.setHours(a.getHours() - (22 - t), 0, 0, 0), r
            }),
            n = new Map(e.map(e => [e._id, e.count])),
            o = r.map(e => {
              let t = e.getFullYear(),
                r = String(e.getMonth() + 1).padStart(2, "0"),
                o = String(e.getDate()).padStart(2, "0"),
                i = String(e.getHours()).padStart(2, "0"),
                a = `${t}-${r}-${o}T${i}`;
              return {
                label: a,
                count: n.get(a) || 0
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
              let n = new Date(a);
              return n.setDate(a.getDate() - (t - 1 - r)), n.toISOString().slice(0, 10)
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
    }
  }
]);