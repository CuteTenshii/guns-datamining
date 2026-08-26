(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9184], {
    1605: (e, n, a) => {
      "use strict";

      function o(e) {
        return function() {
          return this.matches(e)
        }
      }

      function t(e) {
        return function(n) {
          return n.matches(e)
        }
      }
      a.d(n, {
        A: () => o,
        j: () => t
      })
    },
    5214: (e, n, a) => {
      "use strict";
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), Object.defineProperty(n, "workAsyncStorage", {
        enumerable: !0,
        get: function() {
          return o.workAsyncStorageInstance
        }
      });
      let o = a(17828)
    },
    5823: (e, n, a) => {
      "use strict";
      a.d(n, {
        A: () => r
      });
      var o = a(68908),
        t = a(66161);

      function r(e) {
        var n = (0, o.A)(e);
        return (n.local ? function(e) {
          return function() {
            return this.ownerDocument.createElementNS(e.space, e.local)
          }
        } : function(e) {
          return function() {
            var n = this.ownerDocument,
              a = this.namespaceURI;
            return a === t.g && n.documentElement.namespaceURI === t.g ? n.createElement(e) : n.createElementNS(a, e)
          }
        })(n)
      }
    },
    9752: (e, n) => {
      "use strict";
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = function(e, n) {
        return e.replace(/{([^{}]*)}/g, (e, a) => {
          let o = n[a];
          return "string" == typeof o || "number" == typeof o ? o.toString() : e
        })
      }
    },
    12351: function(e, n, a) {
      (function(e, n, a, o, t, r, i) {
        "use strict";

        function c(e) {
          return e && "object" == typeof e && "default" in e ? e : {
            default: e
          }
        }
        var u = c(n),
          l = c(a),
          f = function(e) {
            if (e && e.__esModule) return e;
            var n = Object.create(null);
            return e && Object.keys(e).forEach(function(a) {
              if ("default" !== a) {
                var o = Object.getOwnPropertyDescriptor(e, a);
                Object.defineProperty(n, a, o.get ? o : {
                  enumerable: !0,
                  get: function() {
                    return e[a]
                  }
                })
              }
            }), n.default = e, Object.freeze(n)
          }(o);

        function g(e, n) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            n && (o = o.filter(function(n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable
            })), a.push.apply(a, o)
          }
          return a
        }

        function s(e) {
          for (var n = 1; n < arguments.length; n++) {
            var a = null != arguments[n] ? arguments[n] : {};
            n % 2 ? g(Object(a), !0).forEach(function(n) {
              var o, t, r;
              o = e, t = n, r = a[n], t in o ? Object.defineProperty(o, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : o[t] = r
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : g(Object(a)).forEach(function(n) {
              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n))
            })
          }
          return e
        }

        function d(e) {
          return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }

        function y() {
          return (y = Object.assign ? Object.assign.bind() : function(e) {
            for (var n = 1; n < arguments.length; n++) {
              var a = arguments[n];
              for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o])
            }
            return e
          }).apply(this, arguments)
        }

        function m(e, n) {
          if (null == e) return {};
          var a, o, t = function(e, n) {
            if (null == e) return {};
            var a, o, t = {},
              r = Object.keys(e);
            for (o = 0; o < r.length; o++) a = r[o], n.indexOf(a) >= 0 || (t[a] = e[a]);
            return t
          }(e, n);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            for (o = 0; o < r.length; o++) a = r[o], n.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (t[a] = e[a])
          }
          return t
        }

        function h(e, n) {
          return function(e) {
            if (Array.isArray(e)) return e
          }(e) || function(e, n) {
            var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != a) {
              var o, t, r = [],
                i = !0,
                c = !1;
              try {
                for (a = a.call(e); !(i = (o = a.next()).done) && (r.push(o.value), !n || r.length !== n); i = !0);
              } catch (e) {
                c = !0, t = e
              } finally {
                try {
                  i || null == a.return || a.return()
                } finally {
                  if (c) throw t
                }
              }
              return r
            }
          }(e, n) || function(e, n) {
            if (e) {
              if ("string" == typeof e) return N(e, n);
              var a = Object.prototype.toString.call(e).slice(8, -1);
              if ("Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a) return Array.from(e);
              if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return N(e, n)
            }
          }(e, n) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
        }

        function N(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var a = 0, o = Array(n); a < n; a++) o[a] = e[a];
          return o
        }
        var C = ["width", "height", "projection", "projectionConfig"],
          p = f.geoPath,
          L = m(f, ["geoPath"]),
          E = n.createContext(),
          v = function(e) {
            var a = e.width,
              o = e.height,
              t = e.projection,
              r = e.projectionConfig,
              i = m(e, C),
              c = h(r.center || [], 2),
              l = c[0],
              f = c[1],
              g = h(r.rotate || [], 3),
              s = g[0],
              d = g[1],
              N = g[2],
              v = h(r.parallels || [], 2),
              b = v[0],
              A = v[1],
              S = r.scale || null,
              T = n.useMemo(function() {
                return function(e) {
                  var n = e.projectionConfig,
                    a = void 0 === n ? {} : n,
                    o = e.projection,
                    t = void 0 === o ? "geoEqualEarth" : o,
                    r = e.width,
                    i = e.height;
                  if ("function" == typeof t) return t;
                  var c = L[t]().translate([(void 0 === r ? 800 : r) / 2, (void 0 === i ? 600 : i) / 2]);
                  return [c.center ? "center" : null, c.rotate ? "rotate" : null, c.scale ? "scale" : null, c.parallels ? "parallels" : null].forEach(function(e) {
                    e && (c = c[e](a[e] || c[e]()))
                  }), c
                }({
                  projectionConfig: {
                    center: l || 0 === l || f || 0 === f ? [l, f] : null,
                    rotate: s || 0 === s || d || 0 === d ? [s, d, N] : null,
                    parallels: b || 0 === b || A || 0 === A ? [b, A] : null,
                    scale: S
                  },
                  projection: t,
                  width: a,
                  height: o
                })
              }, [a, o, t, l, f, s, d, N, b, A, S]),
              _ = n.useCallback(T, [T]),
              w = n.useMemo(function() {
                return {
                  width: a,
                  height: o,
                  projection: _,
                  path: p().projection(_)
                }
              }, [a, o, _]);
            return u.default.createElement(E.Provider, y({
              value: w
            }, i))
          };
        v.propTypes = {
          width: l.default.number,
          height: l.default.number,
          projection: l.default.oneOfType([l.default.string, l.default.func]),
          projectionConfig: l.default.object
        };
        var b = ["width", "height", "projection", "projectionConfig", "className"],
          A = n.forwardRef(function(e, n) {
            var a = e.width,
              o = void 0 === a ? 800 : a,
              t = e.height,
              r = void 0 === t ? 600 : t,
              i = e.projection,
              c = e.projectionConfig,
              l = e.className,
              f = m(e, b);
            return u.default.createElement(v, {
              width: o,
              height: r,
              projection: void 0 === i ? "geoEqualEarth" : i,
              projectionConfig: void 0 === c ? {} : c
            }, u.default.createElement("svg", y({
              ref: n,
              viewBox: "0 0 ".concat(o, " ").concat(r),
              className: "rsm-svg ".concat(void 0 === l ? "" : l)
            }, f)))
          });

        function S(e, n, a) {
          var o = (e * a.k - e) / 2,
            t = (n * a.k - n) / 2;
          return [e / 2 - (o + a.x) / a.k, n / 2 - (t + a.y) / a.k]
        }

        function T(e, n) {
          if ("Topology" !== e.type) return n ? n(e.features || e) : e.features || e;
          var a = t.feature(e, e.objects[Object.keys(e.objects)[0]]).features;
          return n ? n(a) : a
        }

        function _(e) {
          return "Topology" === e.type ? {
            outline: t.mesh(e, e.objects[Object.keys(e.objects)[0]], function(e, n) {
              return e === n
            }),
            borders: t.mesh(e, e.objects[Object.keys(e.objects)[0]], function(e, n) {
              return e !== n
            })
          } : null
        }

        function w(e) {
          var a = e.geography,
            o = e.parseGeographies,
            t = n.useContext(E).path,
            r = h(n.useState({}), 2),
            i = r[0],
            c = r[1];
          n.useEffect(function() {
            "undefined" !== ("undefined" == typeof window ? "undefined" : d(window)) && a && ("string" == typeof a ? fetch(a).then(function(e) {
              if (!e.ok) throw Error(e.statusText);
              return e.json()
            }).catch(function(e) {
              console.log("There was a problem when fetching the data: ", e)
            }).then(function(e) {
              e && c({
                geographies: T(e, o),
                mesh: _(e)
              })
            }) : c({
              geographies: T(a, o),
              mesh: _(a)
            }))
          }, [a, o]);
          var u = n.useMemo(function() {
            var e, n, a, o = i.mesh || {},
              r = (e = o.outline, n = o.borders, e && n ? {
                outline: s(s({}, e), {}, {
                  rsmKey: "outline",
                  svgPath: t(e)
                }),
                borders: s(s({}, n), {}, {
                  rsmKey: "borders",
                  svgPath: t(n)
                })
              } : {});
            return {
              geographies: (a = i.geographies, a ? a.map(function(e, n) {
                return s(s({}, e), {}, {
                  rsmKey: "geo-".concat(n),
                  svgPath: t(e)
                })
              }) : []),
              outline: r.outline,
              borders: r.borders
            }
          }, [i, t]);
          return {
            geographies: u.geographies,
            outline: u.outline,
            borders: u.borders
          }
        }
        A.displayName = "ComposableMap", A.propTypes = {
          width: l.default.number,
          height: l.default.number,
          projection: l.default.oneOfType([l.default.string, l.default.func]),
          projectionConfig: l.default.object,
          className: l.default.string
        };
        var M = ["geography", "children", "parseGeographies", "className"],
          x = n.forwardRef(function(e, a) {
            var o = e.geography,
              t = e.children,
              r = e.parseGeographies,
              i = e.className,
              c = m(e, M),
              l = n.useContext(E),
              f = l.path,
              g = l.projection,
              s = w({
                geography: o,
                parseGeographies: r
              }),
              d = s.geographies,
              h = s.outline,
              N = s.borders;
            return u.default.createElement("g", y({
              ref: a,
              className: "rsm-geographies ".concat(void 0 === i ? "" : i)
            }, c), d && d.length > 0 && t({
              geographies: d,
              outline: h,
              borders: N,
              path: f,
              projection: g
            }))
          });
        x.displayName = "Geographies", x.propTypes = {
          geography: l.default.oneOfType([l.default.string, l.default.object, l.default.array]),
          children: l.default.func,
          parseGeographies: l.default.func,
          className: l.default.string
        };
        var P = ["geography", "onMouseEnter", "onMouseLeave", "onMouseDown", "onMouseUp", "onFocus", "onBlur", "style", "className"],
          k = n.forwardRef(function(e, a) {
            var o = e.geography,
              t = e.onMouseEnter,
              r = e.onMouseLeave,
              i = e.onMouseDown,
              c = e.onMouseUp,
              l = e.onFocus,
              f = e.onBlur,
              g = e.style,
              s = e.className,
              d = m(e, P),
              N = h(n.useState(!1), 2),
              C = N[0],
              p = N[1],
              L = h(n.useState(!1), 2),
              E = L[0],
              v = L[1];
            return u.default.createElement("path", y({
              ref: a,
              tabIndex: "0",
              className: "rsm-geography ".concat(void 0 === s ? "" : s),
              d: o.svgPath,
              onMouseEnter: function(e) {
                v(!0), t && t(e)
              },
              onMouseLeave: function(e) {
                v(!1), C && p(!1), r && r(e)
              },
              onFocus: function(e) {
                v(!0), l && l(e)
              },
              onBlur: function(e) {
                v(!1), C && p(!1), f && f(e)
              },
              onMouseDown: function(e) {
                p(!0), i && i(e)
              },
              onMouseUp: function(e) {
                p(!1), c && c(e)
              },
              style: (void 0 === g ? {} : g)[C || E ? C ? "pressed" : "hover" : "default"]
            }, d))
          });
        k.displayName = "Geography", k.propTypes = {
          geography: l.default.object,
          onMouseEnter: l.default.func,
          onMouseLeave: l.default.func,
          onMouseDown: l.default.func,
          onMouseUp: l.default.func,
          onFocus: l.default.func,
          onBlur: l.default.func,
          style: l.default.object,
          className: l.default.string
        };
        var R = n.memo(k),
          F = ["fill", "stroke", "step", "className"],
          I = n.forwardRef(function(e, a) {
            var t = e.fill,
              r = e.stroke,
              i = e.step,
              c = e.className,
              l = m(e, F),
              f = n.useContext(E).path;
            return u.default.createElement("path", y({
              ref: a,
              d: f(o.geoGraticule().step(void 0 === i ? [10, 10] : i)()),
              fill: void 0 === t ? "transparent" : t,
              stroke: void 0 === r ? "currentcolor" : r,
              className: "rsm-graticule ".concat(void 0 === c ? "" : c)
            }, l))
          });
        I.displayName = "Graticule", I.propTypes = {
          fill: l.default.string,
          stroke: l.default.string,
          step: l.default.array,
          className: l.default.string
        };
        var B = n.memo(I),
          D = ["value"],
          O = n.createContext(),
          j = {
            x: 0,
            y: 0,
            k: 1,
            transformString: "translate(0 0) scale(1)"
          },
          U = function(e) {
            var n = e.value,
              a = m(e, D);
            return u.default.createElement(O.Provider, y({
              value: void 0 === n ? j : n
            }, a))
          };

        function z(e) {
          var a = e.center,
            o = e.filterZoomEvent,
            t = e.onMoveStart,
            c = e.onMoveEnd,
            u = e.onMove,
            l = e.translateExtent,
            f = e.scaleExtent,
            g = e.zoom,
            s = void 0 === g ? 1 : g,
            d = n.useContext(E),
            y = d.width,
            m = d.height,
            N = d.projection,
            C = h(a, 2),
            p = C[0],
            L = C[1],
            v = h(n.useState({
              x: 0,
              y: 0,
              k: 1
            }), 2),
            b = v[0],
            A = v[1],
            T = n.useRef({
              x: 0,
              y: 0,
              k: 1
            }),
            _ = n.useRef(),
            w = n.useRef(),
            M = n.useRef(!1),
            x = h(void 0 === l ? [
              [-1 / 0, -1 / 0],
              [1 / 0, 1 / 0]
            ] : l, 2),
            P = x[0],
            k = x[1],
            R = h(P, 2),
            F = R[0],
            I = R[1],
            B = h(k, 2),
            D = B[0],
            O = B[1],
            j = h(void 0 === f ? [1, 8] : f, 2),
            U = j[0],
            z = j[1];
          return n.useEffect(function() {
            var e = i.select(_.current),
              n = r.zoom().filter(function(e) {
                return o ? o(e) : !!e && !e.ctrlKey && !e.button
              }).scaleExtent([U, z]).translateExtent([
                [F, I],
                [D, O]
              ]).on("start", function(e) {
                t && !M.current && t({
                  coordinates: N.invert(S(y, m, e.transform)),
                  zoom: e.transform.k
                }, e)
              }).on("zoom", function(e) {
                if (!M.current) {
                  var n = e.transform,
                    a = e.sourceEvent;
                  A({
                    x: n.x,
                    y: n.y,
                    k: n.k,
                    dragging: a
                  }), u && u({
                    x: n.x,
                    y: n.y,
                    zoom: n.k,
                    dragging: a
                  }, e)
                }
              }).on("end", function(e) {
                if (M.current) M.current = !1;
                else {
                  var n = h(N.invert(S(y, m, e.transform)), 2),
                    a = n[0],
                    o = n[1];
                  T.current = {
                    x: a,
                    y: o,
                    k: e.transform.k
                  }, c && c({
                    coordinates: [a, o],
                    zoom: e.transform.k
                  }, e)
                }
              });
            w.current = n, e.call(n)
          }, [y, m, F, I, D, O, U, z, N, t, u, c, o]), n.useEffect(function() {
            if (p !== T.current.x || L !== T.current.y || s !== T.current.k) {
              var e = N([p, L]),
                n = e[0] * s,
                a = e[1] * s,
                o = i.select(_.current);
              M.current = !0, o.call(w.current.transform, r.zoomIdentity.translate(y / 2 - n, m / 2 - a).scale(s)), A({
                x: y / 2 - n,
                y: m / 2 - a,
                k: s
              }), T.current = {
                x: p,
                y: L,
                k: s
              }
            }
          }, [p, L, s, y, m, N]), {
            mapRef: _,
            position: b,
            transformString: "translate(".concat(b.x, " ").concat(b.y, ") scale(").concat(b.k, ")")
          }
        }
        U.propTypes = {
          x: l.default.number,
          y: l.default.number,
          k: l.default.number,
          transformString: l.default.string
        };
        var G = ["center", "zoom", "minZoom", "maxZoom", "translateExtent", "filterZoomEvent", "onMoveStart", "onMove", "onMoveEnd", "className"],
          K = n.forwardRef(function(e, a) {
            var o = e.center,
              t = e.zoom,
              r = e.minZoom,
              i = e.maxZoom,
              c = e.translateExtent,
              l = e.filterZoomEvent,
              f = e.onMoveStart,
              g = e.onMove,
              s = e.onMoveEnd,
              d = e.className,
              h = m(e, G),
              N = n.useContext(E),
              C = N.width,
              p = N.height,
              L = z({
                center: void 0 === o ? [0, 0] : o,
                filterZoomEvent: l,
                onMoveStart: f,
                onMove: g,
                onMoveEnd: s,
                scaleExtent: [void 0 === r ? 1 : r, void 0 === i ? 8 : i],
                translateExtent: c,
                zoom: void 0 === t ? 1 : t
              }),
              v = L.mapRef,
              b = L.transformString,
              A = L.position;
            return u.default.createElement(U, {
              value: {
                x: A.x,
                y: A.y,
                k: A.k,
                transformString: b
              }
            }, u.default.createElement("g", {
              ref: v
            }, u.default.createElement("rect", {
              width: C,
              height: p,
              fill: "transparent"
            }), u.default.createElement("g", y({
              ref: a,
              transform: b,
              className: "rsm-zoomable-group ".concat(d)
            }, h))))
          });
        K.displayName = "ZoomableGroup", K.propTypes = {
          center: l.default.array,
          zoom: l.default.number,
          minZoom: l.default.number,
          maxZoom: l.default.number,
          translateExtent: l.default.arrayOf(l.default.array),
          onMoveStart: l.default.func,
          onMove: l.default.func,
          onMoveEnd: l.default.func,
          className: l.default.string
        };
        var V = ["id", "fill", "stroke", "strokeWidth", "className"],
          q = n.forwardRef(function(e, a) {
            var o = e.id,
              t = e.fill,
              r = e.stroke,
              i = e.strokeWidth,
              c = e.className,
              l = m(e, V),
              f = n.useContext(E).path,
              g = n.useMemo(function() {
                return f({
                  type: "Sphere"
                })
              }, [f]);
            return u.default.createElement(n.Fragment, null, u.default.createElement("defs", null, u.default.createElement("clipPath", {
              id: void 0 === o ? "rsm-sphere" : o
            }, u.default.createElement("path", {
              d: g
            }))), u.default.createElement("path", y({
              ref: a,
              d: g,
              fill: void 0 === t ? "transparent" : t,
              stroke: void 0 === r ? "currentcolor" : r,
              strokeWidth: void 0 === i ? .5 : i,
              style: {
                pointerEvents: "none"
              },
              className: "rsm-sphere ".concat(void 0 === c ? "" : c)
            }, l)))
          });
        q.displayName = "Sphere", q.propTypes = {
          id: l.default.string,
          fill: l.default.string,
          stroke: l.default.string,
          strokeWidth: l.default.number,
          className: l.default.string
        };
        var H = n.memo(q),
          Z = ["coordinates", "children", "onMouseEnter", "onMouseLeave", "onMouseDown", "onMouseUp", "onFocus", "onBlur", "style", "className"],
          X = n.forwardRef(function(e, a) {
            var o = e.coordinates,
              t = e.children,
              r = e.onMouseEnter,
              i = e.onMouseLeave,
              c = e.onMouseDown,
              l = e.onMouseUp,
              f = e.onFocus,
              g = e.onBlur,
              s = e.style,
              d = e.className,
              N = m(e, Z),
              C = n.useContext(E).projection,
              p = h(n.useState(!1), 2),
              L = p[0],
              v = p[1],
              b = h(n.useState(!1), 2),
              A = b[0],
              S = b[1],
              T = h(C(o), 2),
              _ = T[0],
              w = T[1];
            return u.default.createElement("g", y({
              ref: a,
              transform: "translate(".concat(_, ", ").concat(w, ")"),
              className: "rsm-marker ".concat(void 0 === d ? "" : d),
              onMouseEnter: function(e) {
                S(!0), r && r(e)
              },
              onMouseLeave: function(e) {
                S(!1), L && v(!1), i && i(e)
              },
              onFocus: function(e) {
                S(!0), f && f(e)
              },
              onBlur: function(e) {
                S(!1), L && v(!1), g && g(e)
              },
              onMouseDown: function(e) {
                v(!0), c && c(e)
              },
              onMouseUp: function(e) {
                v(!1), l && l(e)
              },
              style: (void 0 === s ? {} : s)[L || A ? L ? "pressed" : "hover" : "default"]
            }, N), t)
          });
        X.displayName = "Marker", X.propTypes = {
          coordinates: l.default.array,
          children: l.default.oneOfType([l.default.node, l.default.arrayOf(l.default.node)]),
          onMouseEnter: l.default.func,
          onMouseLeave: l.default.func,
          onMouseDown: l.default.func,
          onMouseUp: l.default.func,
          onFocus: l.default.func,
          onBlur: l.default.func,
          style: l.default.object,
          className: l.default.string
        };
        var W = ["from", "to", "coordinates", "stroke", "strokeWidth", "fill", "className"],
          Y = n.forwardRef(function(e, a) {
            var o = e.from,
              t = e.to,
              r = e.coordinates,
              i = e.stroke,
              c = e.strokeWidth,
              l = e.fill,
              f = e.className,
              g = m(e, W),
              s = n.useContext(E).path,
              d = {
                type: "LineString",
                coordinates: r || [void 0 === o ? [0, 0] : o, void 0 === t ? [0, 0] : t]
              };
            return u.default.createElement("path", y({
              ref: a,
              d: s(d),
              className: "rsm-line ".concat(void 0 === f ? "" : f),
              stroke: void 0 === i ? "currentcolor" : i,
              strokeWidth: void 0 === c ? 3 : c,
              fill: void 0 === l ? "transparent" : l
            }, g))
          });
        Y.displayName = "Line", Y.propTypes = {
          from: l.default.array,
          to: l.default.array,
          coordinates: l.default.array,
          stroke: l.default.string,
          strokeWidth: l.default.number,
          fill: l.default.string,
          className: l.default.string
        };
        var J = ["subject", "children", "connectorProps", "dx", "dy", "curve", "className"],
          Q = n.forwardRef(function(e, a) {
            var o = e.subject,
              t = e.children,
              r = e.connectorProps,
              i = e.dx,
              c = void 0 === i ? 30 : i,
              l = e.dy,
              f = void 0 === l ? 30 : l,
              g = e.curve,
              s = e.className,
              d = m(e, J),
              N = h((0, n.useContext(E).projection)(o), 2),
              C = N[0],
              p = N[1],
              L = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30,
                  a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .5,
                  o = Array.isArray(a) ? a : [a, a],
                  t = e / 2 * o[0],
                  r = n / 2 * o[1];
                return "M".concat(0, ",", 0, " Q", -e / 2 - t, ",").concat(-n / 2 + r, " ").concat(-e, ",").concat(-n)
              }(c, f, void 0 === g ? 0 : g);
            return u.default.createElement("g", y({
              ref: a,
              transform: "translate(".concat(C + c, ", ").concat(p + f, ")"),
              className: "rsm-annotation ".concat(void 0 === s ? "" : s)
            }, d), u.default.createElement("path", y({
              d: L,
              fill: "transparent",
              stroke: "#000"
            }, r)), t)
          });
        Q.displayName = "Annotation", Q.propTypes = {
          subject: l.default.array,
          children: l.default.oneOfType([l.default.node, l.default.arrayOf(l.default.node)]),
          dx: l.default.number,
          dy: l.default.number,
          curve: l.default.number,
          connectorProps: l.default.object,
          className: l.default.string
        }, e.Annotation = Q, e.ComposableMap = A, e.Geographies = x, e.Geography = R, e.Graticule = B, e.Line = Y, e.MapContext = E, e.MapProvider = v, e.Marker = X, e.Sphere = H, e.ZoomPanContext = O, e.ZoomPanProvider = U, e.ZoomableGroup = K, e.useGeographies = w, e.useMapContext = function() {
          return n.useContext(E)
        }, e.useZoomPan = z, e.useZoomPanContext = function() {
          return n.useContext(O)
        }, Object.defineProperty(e, "__esModule", {
          value: !0
        })
      })(n, a(12115), a(14051), a(79264), a(18163), a(26856), a(91213))
    },
    14051: (e, n, a) => {
      e.exports = a(34701)()
    },
    17828: (e, n, a) => {
      "use strict";
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), Object.defineProperty(n, "workAsyncStorageInstance", {
        enumerable: !0,
        get: function() {
          return o
        }
      });
      let o = (0, a(64054).createAsyncLocalStorage)()
    },
    18163: (e, n, a) => {
      "use strict";

      function o(e) {
        return e
      }

      function t(e) {
        if (null == e) return o;
        var n, a, t = e.scale[0],
          r = e.scale[1],
          i = e.translate[0],
          c = e.translate[1];
        return function(e, o) {
          o || (n = a = 0);
          var u = 2,
            l = e.length,
            f = Array(l);
          for (f[0] = (n += e[0]) * t + i, f[1] = (a += e[1]) * r + c; u < l;) f[u] = e[u], ++u;
          return f
        }
      }

      function r(e) {
        var n, a = t(e.transform),
          o = 1 / 0,
          r = 1 / 0,
          i = -1 / 0,
          c = -1 / 0;

        function u(e) {
          (e = a(e))[0] < o && (o = e[0]), e[0] > i && (i = e[0]), e[1] < r && (r = e[1]), e[1] > c && (c = e[1])
        }
        for (n in e.arcs.forEach(function(e) {
            for (var n, t = -1, u = e.length; ++t < u;)(n = a(e[t], t))[0] < o && (o = n[0]), n[0] > i && (i = n[0]), n[1] < r && (r = n[1]), n[1] > c && (c = n[1])
          }), e.objects) ! function e(n) {
          switch (n.type) {
            case "GeometryCollection":
              n.geometries.forEach(e);
              break;
            case "Point":
              u(n.coordinates);
              break;
            case "MultiPoint":
              n.coordinates.forEach(u)
          }
        }(e.objects[n]);
        return [o, r, i, c]
      }

      function i(e, n) {
        return "string" == typeof n && (n = e.objects[n]), "GeometryCollection" === n.type ? {
          type: "FeatureCollection",
          features: n.geometries.map(function(n) {
            return c(e, n)
          })
        } : c(e, n)
      }

      function c(e, n) {
        var a = n.id,
          o = n.bbox,
          t = null == n.properties ? {} : n.properties,
          r = u(e, n);
        return null == a && null == o ? {
          type: "Feature",
          properties: t,
          geometry: r
        } : null == o ? {
          type: "Feature",
          id: a,
          properties: t,
          geometry: r
        } : {
          type: "Feature",
          id: a,
          bbox: o,
          properties: t,
          geometry: r
        }
      }

      function u(e, n) {
        var a = t(e.transform),
          o = e.arcs;

        function r(e) {
          return a(e)
        }

        function i(e) {
          for (var n = [], t = 0, r = e.length; t < r; ++t) ! function(e, n) {
            n.length && n.pop();
            for (var t = o[e < 0 ? ~e : e], r = 0, i = t.length; r < i; ++r) n.push(a(t[r], r));
            e < 0 && function(e, n) {
              for (var a, o = e.length, t = o - n; t < --o;) a = e[t], e[t++] = e[o], e[o] = a
            }(n, i)
          }(e[t], n);
          return n.length < 2 && n.push(n[0]), n
        }

        function c(e) {
          for (var n = i(e); n.length < 4;) n.push(n[0]);
          return n
        }

        function u(e) {
          return e.map(c)
        }
        return function e(n) {
          var a, o = n.type;
          switch (o) {
            case "GeometryCollection":
              return {
                type: o, geometries: n.geometries.map(e)
              };
            case "Point":
              a = r(n.coordinates);
              break;
            case "MultiPoint":
              a = n.coordinates.map(r);
              break;
            case "LineString":
              a = i(n.arcs);
              break;
            case "MultiLineString":
              a = n.arcs.map(i);
              break;
            case "Polygon":
              a = u(n.arcs);
              break;
            case "MultiPolygon":
              a = n.arcs.map(u);
              break;
            default:
              return null
          }
          return {
            type: o,
            coordinates: a
          }
        }(n)
      }

      function l(e, n) {
        var a = {},
          o = {},
          t = {},
          r = [],
          i = -1;

        function c(e, n) {
          for (var o in e) {
            var t = e[o];
            delete n[t.start], delete t.start, delete t.end, t.forEach(function(e) {
              a[e < 0 ? ~e : e] = 1
            }), r.push(t)
          }
        }
        return n.forEach(function(a, o) {
          var t, r = e.arcs[a < 0 ? ~a : a];
          !(r.length < 3) || r[1][0] || r[1][1] || (t = n[++i], n[i] = a, n[o] = t)
        }), n.forEach(function(n) {
          var a, r, i, c, u, l, f = (a = n, c = (i = e.arcs[a < 0 ? ~a : a])[0], e.transform ? (r = [0, 0], i.forEach(function(e) {
              r[0] += e[0], r[1] += e[1]
            })) : r = i[i.length - 1], a < 0 ? [r, c] : [c, r]),
            g = f[0],
            s = f[1];
          if (u = t[g])
            if (delete t[u.end], u.push(n), u.end = s, l = o[s]) {
              delete o[l.start];
              var d = l === u ? u : u.concat(l);
              o[d.start = u.start] = t[d.end = l.end] = d
            } else o[u.start] = t[u.end] = u;
          else if (u = o[s])
            if (delete o[u.start], u.unshift(n), u.start = g, l = t[g]) {
              delete t[l.end];
              var y = l === u ? u : l.concat(u);
              o[y.start = l.start] = t[y.end = u.end] = y
            } else o[u.start] = t[u.end] = u;
          else o[(u = [n]).start = g] = t[u.end = s] = u
        }), c(t, o), c(o, t), n.forEach(function(e) {
          a[e < 0 ? ~e : e] || r.push([e])
        }), r
      }

      function f(e) {
        return u(e, g.apply(this, arguments))
      }

      function g(e, n, a) {
        var o, t, r;
        if (arguments.length > 1) o = function(e, n, a) {
          var o, t = [],
            r = [];

          function i(e) {
            var n = e < 0 ? ~e : e;
            (r[n] || (r[n] = [])).push({
              i: e,
              g: o
            })
          }

          function c(e) {
            e.forEach(i)
          }

          function u(e) {
            e.forEach(c)
          }
          return ! function e(n) {
            switch (o = n, n.type) {
              case "GeometryCollection":
                n.geometries.forEach(e);
                break;
              case "LineString":
                c(n.arcs);
                break;
              case "MultiLineString":
              case "Polygon":
                u(n.arcs);
                break;
              case "MultiPolygon":
                n.arcs.forEach(u)
            }
          }(n), r.forEach(null == a ? function(e) {
            t.push(e[0].i)
          } : function(e) {
            a(e[0].g, e[e.length - 1].g) && t.push(e[0].i)
          }), t
        }(0, n, a);
        else
          for (t = 0, o = Array(r = e.arcs.length); t < r; ++t) o[t] = t;
        return {
          type: "MultiLineString",
          arcs: l(e, o)
        }
      }

      function s(e) {
        return u(e, d.apply(this, arguments))
      }

      function d(e, n) {
        var a = {},
          o = [],
          t = [];

        function r(e) {
          e.forEach(function(n) {
            n.forEach(function(n) {
              (a[n = n < 0 ? ~n : n] || (a[n] = [])).push(e)
            })
          }), o.push(e)
        }

        function i(n) {
          return function(e) {
            for (var n, a = -1, o = e.length, t = e[o - 1], r = 0; ++a < o;) n = t, t = e[a], r += n[0] * t[1] - n[1] * t[0];
            return Math.abs(r)
          }(u(e, {
            type: "Polygon",
            arcs: [n]
          }).coordinates[0])
        }
        return n.forEach(function e(n) {
          switch (n.type) {
            case "GeometryCollection":
              n.geometries.forEach(e);
              break;
            case "Polygon":
              r(n.arcs);
              break;
            case "MultiPolygon":
              n.arcs.forEach(r)
          }
        }), o.forEach(function(e) {
          if (!e._) {
            var n = [],
              o = [e];
            for (e._ = 1, t.push(n); e = o.pop();) n.push(e), e.forEach(function(e) {
              e.forEach(function(e) {
                a[e < 0 ? ~e : e].forEach(function(e) {
                  e._ || (e._ = 1, o.push(e))
                })
              })
            })
          }
        }), o.forEach(function(e) {
          delete e._
        }), {
          type: "MultiPolygon",
          arcs: t.map(function(n) {
            var o, t = [];
            if (n.forEach(function(e) {
                e.forEach(function(e) {
                  e.forEach(function(e) {
                    a[e < 0 ? ~e : e].length < 2 && t.push(e)
                  })
                })
              }), (o = (t = l(e, t)).length) > 1)
              for (var r, c, u = 1, f = i(t[0]); u < o; ++u)(r = i(t[u])) > f && (c = t[0], t[0] = t[u], t[u] = c, f = r);
            return t
          }).filter(function(e) {
            return e.length > 0
          })
        }
      }

      function y(e, n) {
        for (var a = 0, o = e.length; a < o;) {
          var t = a + o >>> 1;
          e[t] < n ? a = t + 1 : o = t
        }
        return a
      }

      function m(e) {
        var n = {},
          a = e.map(function() {
            return []
          });

        function o(e, a) {
          e.forEach(function(e) {
            e < 0 && (e = ~e);
            var o = n[e];
            o ? o.push(a) : n[e] = [a]
          })
        }

        function t(e, n) {
          e.forEach(function(e) {
            o(e, n)
          })
        }
        var r = {
          LineString: o,
          MultiLineString: t,
          Polygon: t,
          MultiPolygon: function(e, n) {
            e.forEach(function(e) {
              t(e, n)
            })
          }
        };
        for (var i in e.forEach(function e(n, a) {
            "GeometryCollection" === n.type ? n.geometries.forEach(function(n) {
              e(n, a)
            }) : n.type in r && r[n.type](n.arcs, a)
          }), n)
          for (var c = n[i], u = c.length, l = 0; l < u; ++l)
            for (var f = l + 1; f < u; ++f) {
              var g, s = c[l],
                d = c[f];
              (g = a[s])[i = y(g, d)] !== d && g.splice(i, 0, d), (g = a[d])[i = y(g, s)] !== s && g.splice(i, 0, s)
            }
        return a
      }

      function h(e) {
        if (null == e) return o;
        var n, a, t = e.scale[0],
          r = e.scale[1],
          i = e.translate[0],
          c = e.translate[1];
        return function(e, o) {
          o || (n = a = 0);
          var u = 2,
            l = e.length,
            f = Array(l),
            g = Math.round((e[0] - i) / t),
            s = Math.round((e[1] - c) / r);
          for (f[0] = g - n, n = g, f[1] = s - a, a = s; u < l;) f[u] = e[u], ++u;
          return f
        }
      }

      function N(e, n) {
        if (e.transform) throw Error("already quantized");
        if (n && n.scale) u = e.bbox;
        else {
          if (!((a = Math.floor(n)) >= 2)) throw Error("n must be ≥2");
          var a, o = (u = e.bbox || r(e))[0],
            t = u[1],
            i = u[2],
            c = u[3];
          n = {
            scale: [i - o ? (i - o) / (a - 1) : 1, c - t ? (c - t) / (a - 1) : 1],
            translate: [o, t]
          }
        }
        var u, l, f = h(n),
          g = e.objects,
          s = {};

        function d(e) {
          return f(e)
        }
        for (l in g) s[l] = function e(n) {
          var a;
          switch (n.type) {
            case "GeometryCollection":
              a = {
                type: "GeometryCollection",
                geometries: n.geometries.map(e)
              };
              break;
            case "Point":
              a = {
                type: "Point",
                coordinates: d(n.coordinates)
              };
              break;
            case "MultiPoint":
              a = {
                type: "MultiPoint",
                coordinates: n.coordinates.map(d)
              };
              break;
            default:
              return n
          }
          return null != n.id && (a.id = n.id), null != n.bbox && (a.bbox = n.bbox), null != n.properties && (a.properties = n.properties), a
        }(g[l]);
        return {
          type: "Topology",
          bbox: u,
          transform: n,
          objects: s,
          arcs: e.arcs.map(function(e) {
            var n, a = 0,
              o = 1,
              t = e.length,
              r = Array(t);
            for (r[0] = f(e[0], 0); ++a < t;)((n = f(e[a], a))[0] || n[1]) && (r[o++] = n);
            return 1 === o && (r[o++] = [0, 0]), r.length = o, r
          })
        }
      }
      a.r(n), a.d(n, {
        bbox: () => r,
        feature: () => i,
        merge: () => s,
        mergeArcs: () => d,
        mesh: () => f,
        meshArcs: () => g,
        neighbors: () => m,
        quantize: () => N,
        transform: () => t,
        untransform: () => h
      })
    },
    18808: (e, n, a) => {
      "use strict";

      function o() {}

      function t(e) {
        return null == e ? o : function() {
          return this.querySelector(e)
        }
      }
      a.d(n, {
        A: () => t
      })
    },
    21957: (e, n, a) => {
      "use strict";

      function o({
        moduleIds: e
      }) {
        return null
      }
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), Object.defineProperty(n, "PreloadChunks", {
        enumerable: !0,
        get: function() {
          return o
        }
      }), a(95155), a(47650), a(5214), a(2451)
    },
    22783: (e, n, a) => {
      "use strict";

      function o() {
        return []
      }

      function t(e) {
        return null == e ? o : function() {
          return this.querySelectorAll(e)
        }
      }
      a.d(n, {
        A: () => t
      })
    },
    24373: (e, n, a) => {
      "use strict";
      a.d(n, {
        A: () => t
      });
      var o = a(91242);

      function t(e) {
        return "string" == typeof e ? new o.LN([
          [document.querySelector(e)]
        ], [document.documentElement]) : new o.LN([
          [e]
        ], o.zr)
      }
    },
    25640: (e, n, a) => {
      "use strict";

      function o(e) {
        let n;
        for (; n = e.sourceEvent;) e = n;
        return e
      }
      a.d(n, {
        A: () => o
      })
    },
    26856: (e, n, a) => {
      "use strict";
      a.r(n), a.d(n, {
        zoom: () => e$,
        zoomIdentity: () => eK,
        zoomTransform: () => eV
      });
      var o, t = {
        value: () => {}
      };

      function r() {
        for (var e, n = 0, a = arguments.length, o = {}; n < a; ++n) {
          if (!(e = arguments[n] + "") || e in o || /[\s.]/.test(e)) throw Error("illegal type: " + e);
          o[e] = []
        }
        return new i(o)
      }

      function i(e) {
        this._ = e
      }

      function c(e, n, a) {
        for (var o = 0, r = e.length; o < r; ++o)
          if (e[o].name === n) {
            e[o] = t, e = e.slice(0, o).concat(e.slice(o + 1));
            break
          } return null != a && e.push({
          name: n,
          value: a
        }), e
      }
      i.prototype = r.prototype = {
        constructor: i,
        on: function(e, n) {
          var a, o = this._,
            t = (e + "").trim().split(/^|\s+/).map(function(e) {
              var n = "",
                a = e.indexOf(".");
              if (a >= 0 && (n = e.slice(a + 1), e = e.slice(0, a)), e && !o.hasOwnProperty(e)) throw Error("unknown type: " + e);
              return {
                type: e,
                name: n
              }
            }),
            r = -1,
            i = t.length;
          if (arguments.length < 2) {
            for (; ++r < i;)
              if ((a = (e = t[r]).type) && (a = function(e, n) {
                  for (var a, o = 0, t = e.length; o < t; ++o)
                    if ((a = e[o]).name === n) return a.value
                }(o[a], e.name))) return a;
            return
          }
          if (null != n && "function" != typeof n) throw Error("invalid callback: " + n);
          for (; ++r < i;)
            if (a = (e = t[r]).type) o[a] = c(o[a], e.name, n);
            else if (null == n)
            for (a in o) o[a] = c(o[a], e.name, null);
          return this
        },
        copy: function() {
          var e = {},
            n = this._;
          for (var a in n) e[a] = n[a].slice();
          return new i(e)
        },
        call: function(e, n) {
          if ((a = arguments.length - 2) > 0)
            for (var a, o, t = Array(a), r = 0; r < a; ++r) t[r] = arguments[r + 2];
          if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
          for (o = this._[e], r = 0, a = o.length; r < a; ++r) o[r].value.apply(n, t)
        },
        apply: function(e, n, a) {
          if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
          for (var o = this._[e], t = 0, r = o.length; t < r; ++t) o[t].value.apply(n, a)
        }
      };
      var u = a(24373);

      function l(e) {
        e.preventDefault(), e.stopImmediatePropagation()
      }

      function f(e) {
        return ((e = Math.exp(e)) + 1 / e) / 2
      }
      let g = function e(n, a, o) {
        function t(e, t) {
          var r, i, c = e[0],
            u = e[1],
            l = e[2],
            g = t[0],
            s = t[1],
            d = t[2],
            y = g - c,
            m = s - u,
            h = y * y + m * m;
          if (h < 1e-12) i = Math.log(d / l) / n, r = function(e) {
            return [c + e * y, u + e * m, l * Math.exp(n * e * i)]
          };
          else {
            var N = Math.sqrt(h),
              C = (d * d - l * l + o * h) / (2 * l * a * N),
              p = (d * d - l * l - o * h) / (2 * d * a * N),
              L = Math.log(Math.sqrt(C * C + 1) - C);
            i = (Math.log(Math.sqrt(p * p + 1) - p) - L) / n, r = function(e) {
              var o, t, r = e * i,
                g = f(L),
                s = l / (a * N) * (g * (((o = Math.exp(2 * (o = n * r + L))) - 1) / (o + 1)) - ((t = Math.exp(t = L)) - 1 / t) / 2);
              return [c + s * y, u + s * m, l * g / f(n * r + L)]
            }
          }
          return r.duration = 1e3 * i * n / Math.SQRT2, r
        }
        return t.rho = function(n) {
          var a = Math.max(.001, +n),
            o = a * a;
          return e(a, o, o * o)
        }, t
      }(Math.SQRT2, 2, 4);
      var s, d, y = a(67770),
        m = a(91242),
        h = 0,
        N = 0,
        C = 0,
        p = 0,
        L = 0,
        E = 0,
        v = "object" == typeof performance && performance.now ? performance : Date,
        b = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
          setTimeout(e, 17)
        };

      function A() {
        return L || (b(S), L = v.now() + E)
      }

      function S() {
        L = 0
      }

      function T() {
        this._call = this._time = this._next = null
      }

      function _(e, n, a) {
        var o = new T;
        return o.restart(e, n, a), o
      }

      function w() {
        L = (p = v.now()) + E, h = N = 0;
        try {
          A(), ++h;
          for (var e, n = s; n;)(e = L - n._time) >= 0 && n._call.call(null, e), n = n._next;
          --h
        } finally {
          h = 0,
            function() {
              for (var e, n, a = s, o = 1 / 0; a;) a._call ? (o > a._time && (o = a._time), e = a, a = a._next) : (n = a._next, a._next = null, a = e ? e._next = n : s = n);
              d = e, x(o)
            }(), L = 0
        }
      }

      function M() {
        var e = v.now(),
          n = e - p;
        n > 1e3 && (E -= n, p = e)
      }

      function x(e) {
        !h && (N && (N = clearTimeout(N)), e - L > 24 ? (e < 1 / 0 && (N = setTimeout(w, e - v.now() - E)), C && (C = clearInterval(C))) : (C || (p = v.now(), C = setInterval(M, 1e3)), h = 1, b(w)))
      }

      function P(e, n, a) {
        var o = new T;
        return n = null == n ? 0 : +n, o.restart(a => {
          o.stop(), e(a + n)
        }, n, a), o
      }
      T.prototype = _.prototype = {
        constructor: T,
        restart: function(e, n, a) {
          if ("function" != typeof e) throw TypeError("callback is not a function");
          a = (null == a ? A() : +a) + (null == n ? 0 : +n), this._next || d === this || (d ? d._next = this : s = this, d = this), this._call = e, this._time = a, x()
        },
        stop: function() {
          this._call && (this._call = null, this._time = 1 / 0, x())
        }
      };
      var k = r("start", "end", "cancel", "interrupt"),
        R = [];

      function F(e, n, a, o, t, r) {
        var i = e.__transition;
        if (i) {
          if (a in i) return
        } else e.__transition = {};
        ! function(e, n, a) {
          var o, t = e.__transition;

          function r(u) {
            var l, f, g, s;
            if (1 !== a.state) return c();
            for (l in t)
              if ((s = t[l]).name === a.name) {
                if (3 === s.state) return P(r);
                4 === s.state ? (s.state = 6, s.timer.stop(), s.on.call("interrupt", e, e.__data__, s.index, s.group), delete t[l]) : +l < n && (s.state = 6, s.timer.stop(), s.on.call("cancel", e, e.__data__, s.index, s.group), delete t[l])
              } if (P(function() {
                3 === a.state && (a.state = 4, a.timer.restart(i, a.delay, a.time), i(u))
              }), a.state = 2, a.on.call("start", e, e.__data__, a.index, a.group), 2 === a.state) {
              for (l = 0, a.state = 3, o = Array(g = a.tween.length), f = -1; l < g; ++l)(s = a.tween[l].value.call(e, e.__data__, a.index, a.group)) && (o[++f] = s);
              o.length = f + 1
            }
          }

          function i(n) {
            for (var t = n < a.duration ? a.ease.call(null, n / a.duration) : (a.timer.restart(c), a.state = 5, 1), r = -1, i = o.length; ++r < i;) o[r].call(e, t);
            5 === a.state && (a.on.call("end", e, e.__data__, a.index, a.group), c())
          }

          function c() {
            for (var o in a.state = 6, a.timer.stop(), delete t[n], t) return;
            delete e.__transition
          }
          t[n] = a, a.timer = _(function(e) {
            a.state = 1, a.timer.restart(r, a.delay, a.time), a.delay <= e && r(e - a.delay)
          }, 0, a.time)
        }(e, a, {
          name: n,
          index: o,
          group: t,
          on: k,
          tween: R,
          time: r.time,
          delay: r.delay,
          duration: r.duration,
          ease: r.ease,
          timer: null,
          state: 0
        })
      }

      function I(e, n) {
        var a = D(e, n);
        if (a.state > 0) throw Error("too late; already scheduled");
        return a
      }

      function B(e, n) {
        var a = D(e, n);
        if (a.state > 3) throw Error("too late; already running");
        return a
      }

      function D(e, n) {
        var a = e.__transition;
        if (!a || !(a = a[n])) throw Error("transition not found");
        return a
      }

      function O(e, n) {
        var a, o, t, r = e.__transition,
          i = !0;
        if (r) {
          for (t in n = null == n ? null : n + "", r) {
            if ((a = r[t]).name !== n) {
              i = !1;
              continue
            }
            o = a.state > 2 && a.state < 5, a.state = 6, a.timer.stop(), a.on.call(o ? "interrupt" : "cancel", e, e.__data__, a.index, a.group), delete r[t]
          }
          i && delete e.__transition
        }
      }

      function j(e, n) {
        return e *= 1, n *= 1,
          function(a) {
            return e * (1 - a) + n * a
          }
      }
      var U = 180 / Math.PI,
        z = {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          skewX: 0,
          scaleX: 1,
          scaleY: 1
        };

      function G(e, n, a, o, t, r) {
        var i, c, u;
        return (i = Math.sqrt(e * e + n * n)) && (e /= i, n /= i), (u = e * a + n * o) && (a -= e * u, o -= n * u), (c = Math.sqrt(a * a + o * o)) && (a /= c, o /= c, u /= c), e * o < n * a && (e = -e, n = -n, u = -u, i = -i), {
          translateX: t,
          translateY: r,
          rotate: Math.atan2(n, e) * U,
          skewX: Math.atan(u) * U,
          scaleX: i,
          scaleY: c
        }
      }

      function K(e, n, a, o) {
        function t(e) {
          return e.length ? e.pop() + " " : ""
        }
        return function(r, i) {
          var c, u, l, f, g = [],
            s = [];
          return r = e(r), i = e(i), ! function(e, o, t, r, i, c) {
              if (e !== t || o !== r) {
                var u = i.push("translate(", null, n, null, a);
                c.push({
                  i: u - 4,
                  x: j(e, t)
                }, {
                  i: u - 2,
                  x: j(o, r)
                })
              } else(t || r) && i.push("translate(" + t + n + r + a)
            }(r.translateX, r.translateY, i.translateX, i.translateY, g, s), c = r.rotate, u = i.rotate, c !== u ? (c - u > 180 ? u += 360 : u - c > 180 && (c += 360), s.push({
              i: g.push(t(g) + "rotate(", null, o) - 2,
              x: j(c, u)
            })) : u && g.push(t(g) + "rotate(" + u + o), l = r.skewX, f = i.skewX, l !== f ? s.push({
              i: g.push(t(g) + "skewX(", null, o) - 2,
              x: j(l, f)
            }) : f && g.push(t(g) + "skewX(" + f + o), ! function(e, n, a, o, r, i) {
              if (e !== a || n !== o) {
                var c = r.push(t(r) + "scale(", null, ",", null, ")");
                i.push({
                  i: c - 4,
                  x: j(e, a)
                }, {
                  i: c - 2,
                  x: j(n, o)
                })
              } else(1 !== a || 1 !== o) && r.push(t(r) + "scale(" + a + "," + o + ")")
            }(r.scaleX, r.scaleY, i.scaleX, i.scaleY, g, s), r = i = null,
            function(e) {
              for (var n, a = -1, o = s.length; ++a < o;) g[(n = s[a]).i] = n.x(e);
              return g.join("")
            }
        }
      }
      var V = K(function(e) {
          let n = new("function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix)(e + "");
          return n.isIdentity ? z : G(n.a, n.b, n.c, n.d, n.e, n.f)
        }, "px, ", "px)", "deg)"),
        q = K(function(e) {
          return null == e ? z : (o || (o = document.createElementNS("http://www.w3.org/2000/svg", "g")), o.setAttribute("transform", e), e = o.transform.baseVal.consolidate()) ? G((e = e.matrix).a, e.b, e.c, e.d, e.e, e.f) : z
        }, ", ", ")", ")"),
        H = a(68908);

      function Z(e, n, a) {
        var o = e._id;
        return e.each(function() {
            var e = B(this, o);
            (e.value || (e.value = {}))[n] = a.apply(this, arguments)
          }),
          function(e) {
            return D(e, o).value[n]
          }
      }

      function X(e, n, a) {
        e.prototype = n.prototype = a, a.constructor = e
      }

      function W(e, n) {
        var a = Object.create(e.prototype);
        for (var o in n) a[o] = n[o];
        return a
      }

      function Y() {}
      var J = "\\s*([+-]?\\d+)\\s*",
        Q = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        $ = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        ee = /^#([0-9a-f]{3,8})$/,
        en = RegExp("^rgb\\(" + [J, J, J] + "\\)$"),
        ea = RegExp("^rgb\\(" + [$, $, $] + "\\)$"),
        eo = RegExp("^rgba\\(" + [J, J, J, Q] + "\\)$"),
        et = RegExp("^rgba\\(" + [$, $, $, Q] + "\\)$"),
        er = RegExp("^hsl\\(" + [Q, $, $] + "\\)$"),
        ei = RegExp("^hsla\\(" + [Q, $, $, Q] + "\\)$"),
        ec = {
          aliceblue: 0xf0f8ff,
          antiquewhite: 0xfaebd7,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 0xf0ffff,
          beige: 0xf5f5dc,
          bisque: 0xffe4c4,
          black: 0,
          blanchedalmond: 0xffebcd,
          blue: 255,
          blueviolet: 9055202,
          brown: 0xa52a2a,
          burlywood: 0xdeb887,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 0xd2691e,
          coral: 0xff7f50,
          cornflowerblue: 6591981,
          cornsilk: 0xfff8dc,
          crimson: 0xdc143c,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 0xb8860b,
          darkgray: 0xa9a9a9,
          darkgreen: 25600,
          darkgrey: 0xa9a9a9,
          darkkhaki: 0xbdb76b,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 0xff8c00,
          darkorchid: 0x9932cc,
          darkred: 9109504,
          darksalmon: 0xe9967a,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 0xff1493,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 0xb22222,
          floralwhite: 0xfffaf0,
          forestgreen: 2263842,
          fuchsia: 0xff00ff,
          gainsboro: 0xdcdcdc,
          ghostwhite: 0xf8f8ff,
          gold: 0xffd700,
          goldenrod: 0xdaa520,
          gray: 8421504,
          green: 32768,
          greenyellow: 0xadff2f,
          grey: 8421504,
          honeydew: 0xf0fff0,
          hotpink: 0xff69b4,
          indianred: 0xcd5c5c,
          indigo: 4915330,
          ivory: 0xfffff0,
          khaki: 0xf0e68c,
          lavender: 0xe6e6fa,
          lavenderblush: 0xfff0f5,
          lawngreen: 8190976,
          lemonchiffon: 0xfffacd,
          lightblue: 0xadd8e6,
          lightcoral: 0xf08080,
          lightcyan: 0xe0ffff,
          lightgoldenrodyellow: 0xfafad2,
          lightgray: 0xd3d3d3,
          lightgreen: 9498256,
          lightgrey: 0xd3d3d3,
          lightpink: 0xffb6c1,
          lightsalmon: 0xffa07a,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 0xb0c4de,
          lightyellow: 0xffffe0,
          lime: 65280,
          limegreen: 3329330,
          linen: 0xfaf0e6,
          magenta: 0xff00ff,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 0xba55d3,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 0xc71585,
          midnightblue: 1644912,
          mintcream: 0xf5fffa,
          mistyrose: 0xffe4e1,
          moccasin: 0xffe4b5,
          navajowhite: 0xffdead,
          navy: 128,
          oldlace: 0xfdf5e6,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 0xffa500,
          orangered: 0xff4500,
          orchid: 0xda70d6,
          palegoldenrod: 0xeee8aa,
          palegreen: 0x98fb98,
          paleturquoise: 0xafeeee,
          palevioletred: 0xdb7093,
          papayawhip: 0xffefd5,
          peachpuff: 0xffdab9,
          peru: 0xcd853f,
          pink: 0xffc0cb,
          plum: 0xdda0dd,
          powderblue: 0xb0e0e6,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 0xff0000,
          rosybrown: 0xbc8f8f,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 0xfa8072,
          sandybrown: 0xf4a460,
          seagreen: 3050327,
          seashell: 0xfff5ee,
          sienna: 0xa0522d,
          silver: 0xc0c0c0,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 0xfffafa,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 0xd2b48c,
          teal: 32896,
          thistle: 0xd8bfd8,
          tomato: 0xff6347,
          turquoise: 4251856,
          violet: 0xee82ee,
          wheat: 0xf5deb3,
          white: 0xffffff,
          whitesmoke: 0xf5f5f5,
          yellow: 0xffff00,
          yellowgreen: 0x9acd32
        };

      function eu() {
        return this.rgb().formatHex()
      }

      function el() {
        return this.rgb().formatRgb()
      }

      function ef(e) {
        var n, a;
        return e = (e + "").trim().toLowerCase(), (n = ee.exec(e)) ? (a = n[1].length, n = parseInt(n[1], 16), 6 === a ? eg(n) : 3 === a ? new ey(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : 8 === a ? es(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (255 & n) / 255) : 4 === a ? es(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, ((15 & n) << 4 | 15 & n) / 255) : null) : (n = en.exec(e)) ? new ey(n[1], n[2], n[3], 1) : (n = ea.exec(e)) ? new ey(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = eo.exec(e)) ? es(n[1], n[2], n[3], n[4]) : (n = et.exec(e)) ? es(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = er.exec(e)) ? eC(n[1], n[2] / 100, n[3] / 100, 1) : (n = ei.exec(e)) ? eC(n[1], n[2] / 100, n[3] / 100, n[4]) : ec.hasOwnProperty(e) ? eg(ec[e]) : "transparent" === e ? new ey(NaN, NaN, NaN, 0) : null
      }

      function eg(e) {
        return new ey(e >> 16 & 255, e >> 8 & 255, 255 & e, 1)
      }

      function es(e, n, a, o) {
        return o <= 0 && (e = n = a = NaN), new ey(e, n, a, o)
      }

      function ed(e, n, a, o) {
        var t;
        return 1 == arguments.length ? ((t = e) instanceof Y || (t = ef(t)), t) ? new ey((t = t.rgb()).r, t.g, t.b, t.opacity) : new ey : new ey(e, n, a, null == o ? 1 : o)
      }

      function ey(e, n, a, o) {
        this.r = +e, this.g = +n, this.b = +a, this.opacity = +o
      }

      function em() {
        return "#" + eN(this.r) + eN(this.g) + eN(this.b)
      }

      function eh() {
        var e = this.opacity;
        return (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === e ? ")" : ", " + e + ")")
      }

      function eN(e) {
        return ((e = Math.max(0, Math.min(255, Math.round(e) || 0))) < 16 ? "0" : "") + e.toString(16)
      }

      function eC(e, n, a, o) {
        return o <= 0 ? e = n = a = NaN : a <= 0 || a >= 1 ? e = n = NaN : n <= 0 && (e = NaN), new eL(e, n, a, o)
      }

      function ep(e) {
        if (e instanceof eL) return new eL(e.h, e.s, e.l, e.opacity);
        if (e instanceof Y || (e = ef(e)), !e) return new eL;
        if (e instanceof eL) return e;
        var n = (e = e.rgb()).r / 255,
          a = e.g / 255,
          o = e.b / 255,
          t = Math.min(n, a, o),
          r = Math.max(n, a, o),
          i = NaN,
          c = r - t,
          u = (r + t) / 2;
        return c ? (i = n === r ? (a - o) / c + (a < o) * 6 : a === r ? (o - n) / c + 2 : (n - a) / c + 4, c /= u < .5 ? r + t : 2 - r - t, i *= 60) : c = u > 0 && u < 1 ? 0 : i, new eL(i, c, u, e.opacity)
      }

      function eL(e, n, a, o) {
        this.h = +e, this.s = +n, this.l = +a, this.opacity = +o
      }

      function eE(e, n, a) {
        return (e < 60 ? n + (a - n) * e / 60 : e < 180 ? a : e < 240 ? n + (a - n) * (240 - e) / 60 : n) * 255
      }

      function ev(e, n, a, o, t) {
        var r = e * e,
          i = r * e;
        return ((1 - 3 * e + 3 * r - i) * n + (4 - 6 * r + 3 * i) * a + (1 + 3 * e + 3 * r - 3 * i) * o + i * t) / 6
      }
      X(Y, ef, {
        copy: function(e) {
          return Object.assign(new this.constructor, this, e)
        },
        displayable: function() {
          return this.rgb().displayable()
        },
        hex: eu,
        formatHex: eu,
        formatHsl: function() {
          return ep(this).formatHsl()
        },
        formatRgb: el,
        toString: el
      }), X(ey, ed, W(Y, {
        brighter: function(e) {
          return e = null == e ? 1.4285714285714286 : Math.pow(1.4285714285714286, e), new ey(this.r * e, this.g * e, this.b * e, this.opacity)
        },
        darker: function(e) {
          return e = null == e ? .7 : Math.pow(.7, e), new ey(this.r * e, this.g * e, this.b * e, this.opacity)
        },
        rgb: function() {
          return this
        },
        displayable: function() {
          return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
        },
        hex: em,
        formatHex: em,
        formatRgb: eh,
        toString: eh
      })), X(eL, function(e, n, a, o) {
        return 1 == arguments.length ? ep(e) : new eL(e, n, a, null == o ? 1 : o)
      }, W(Y, {
        brighter: function(e) {
          return e = null == e ? 1.4285714285714286 : Math.pow(1.4285714285714286, e), new eL(this.h, this.s, this.l * e, this.opacity)
        },
        darker: function(e) {
          return e = null == e ? .7 : Math.pow(.7, e), new eL(this.h, this.s, this.l * e, this.opacity)
        },
        rgb: function() {
          var e = this.h % 360 + (this.h < 0) * 360,
            n = isNaN(e) || isNaN(this.s) ? 0 : this.s,
            a = this.l,
            o = a + (a < .5 ? a : 1 - a) * n,
            t = 2 * a - o;
          return new ey(eE(e >= 240 ? e - 240 : e + 120, t, o), eE(e, t, o), eE(e < 120 ? e + 240 : e - 120, t, o), this.opacity)
        },
        displayable: function() {
          return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
        },
        formatHsl: function() {
          var e = this.opacity;
          return (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === e ? ")" : ", " + e + ")")
        }
      }));
      let eb = e => () => e;

      function eA(e, n) {
        var a = n - e;
        return a ? function(n) {
          return e + n * a
        } : eb(isNaN(e) ? n : e)
      }
      let eS = function e(n) {
        var a, o = 1 == (a = +n) ? eA : function(e, n) {
          var o, t, r;
          return n - e ? (o = e, t = n, o = Math.pow(o, r = a), t = Math.pow(t, r) - o, r = 1 / r, function(e) {
            return Math.pow(o + e * t, r)
          }) : eb(isNaN(e) ? n : e)
        };

        function t(e, n) {
          var a = o((e = ed(e)).r, (n = ed(n)).r),
            t = o(e.g, n.g),
            r = o(e.b, n.b),
            i = eA(e.opacity, n.opacity);
          return function(n) {
            return e.r = a(n), e.g = t(n), e.b = r(n), e.opacity = i(n), e + ""
          }
        }
        return t.gamma = e, t
      }(1);

      function eT(e) {
        return function(n) {
          var a, o, t = n.length,
            r = Array(t),
            i = Array(t),
            c = Array(t);
          for (a = 0; a < t; ++a) o = ed(n[a]), r[a] = o.r || 0, i[a] = o.g || 0, c[a] = o.b || 0;
          return r = e(r), i = e(i), c = e(c), o.opacity = 1,
            function(e) {
              return o.r = r(e), o.g = i(e), o.b = c(e), o + ""
            }
        }
      }
      eT(function(e) {
        var n = e.length - 1;
        return function(a) {
          var o = a <= 0 ? a = 0 : a >= 1 ? (a = 1, n - 1) : Math.floor(a * n),
            t = e[o],
            r = e[o + 1],
            i = o > 0 ? e[o - 1] : 2 * t - r,
            c = o < n - 1 ? e[o + 2] : 2 * r - t;
          return ev((a - o / n) * n, i, t, r, c)
        }
      }), eT(function(e) {
        var n = e.length;
        return function(a) {
          var o = Math.floor(((a %= 1) < 0 ? ++a : a) * n),
            t = e[(o + n - 1) % n],
            r = e[o % n],
            i = e[(o + 1) % n],
            c = e[(o + 2) % n];
          return ev((a - o / n) * n, t, r, i, c)
        }
      });
      var e_ = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        ew = RegExp(e_.source, "g");

      function eM(e, n) {
        var a;
        return ("number" == typeof n ? j : n instanceof ef ? eS : (a = ef(n)) ? (n = a, eS) : function(e, n) {
          var a, o, t, r, i, c = e_.lastIndex = ew.lastIndex = 0,
            u = -1,
            l = [],
            f = [];
          for (e += "", n += "";
            (t = e_.exec(e)) && (r = ew.exec(n));)(i = r.index) > c && (i = n.slice(c, i), l[u] ? l[u] += i : l[++u] = i), (t = t[0]) === (r = r[0]) ? l[u] ? l[u] += r : l[++u] = r : (l[++u] = null, f.push({
            i: u,
            x: j(t, r)
          })), c = ew.lastIndex;
          return c < n.length && (i = n.slice(c), l[u] ? l[u] += i : l[++u] = i), l.length < 2 ? f[0] ? (a = f[0].x, function(e) {
            return a(e) + ""
          }) : (o = n, function() {
            return o
          }) : (n = f.length, function(e) {
            for (var a, o = 0; o < n; ++o) l[(a = f[o]).i] = a.x(e);
            return l.join("")
          })
        })(e, n)
      }
      var ex = a(1605),
        eP = a(18808),
        ek = a(22783),
        eR = m.Ay.prototype.constructor,
        eF = a(55475);

      function eI(e) {
        return function() {
          this.style.removeProperty(e)
        }
      }
      var eB = 0;

      function eD(e, n, a, o) {
        this._groups = e, this._parents = n, this._name = a, this._id = o
      }
      var eO = m.Ay.prototype;
      eD.prototype = (function(e) {
        return (0, m.Ay)().transition(e)
      }).prototype = {
        constructor: eD,
        select: function(e) {
          var n = this._name,
            a = this._id;
          "function" != typeof e && (e = (0, eP.A)(e));
          for (var o = this._groups, t = o.length, r = Array(t), i = 0; i < t; ++i)
            for (var c, u, l = o[i], f = l.length, g = r[i] = Array(f), s = 0; s < f; ++s)(c = l[s]) && (u = e.call(c, c.__data__, s, l)) && ("__data__" in c && (u.__data__ = c.__data__), g[s] = u, F(g[s], n, a, s, g, D(c, a)));
          return new eD(r, this._parents, n, a)
        },
        selectAll: function(e) {
          var n = this._name,
            a = this._id;
          "function" != typeof e && (e = (0, ek.A)(e));
          for (var o = this._groups, t = o.length, r = [], i = [], c = 0; c < t; ++c)
            for (var u, l = o[c], f = l.length, g = 0; g < f; ++g)
              if (u = l[g]) {
                for (var s, d = e.call(u, u.__data__, g, l), y = D(u, a), m = 0, h = d.length; m < h; ++m)(s = d[m]) && F(s, n, a, m, d, y);
                r.push(d), i.push(u)
              } return new eD(r, i, n, a)
        },
        filter: function(e) {
          "function" != typeof e && (e = (0, ex.A)(e));
          for (var n = this._groups, a = n.length, o = Array(a), t = 0; t < a; ++t)
            for (var r, i = n[t], c = i.length, u = o[t] = [], l = 0; l < c; ++l)(r = i[l]) && e.call(r, r.__data__, l, i) && u.push(r);
          return new eD(o, this._parents, this._name, this._id)
        },
        merge: function(e) {
          if (e._id !== this._id) throw Error();
          for (var n = this._groups, a = e._groups, o = n.length, t = a.length, r = Math.min(o, t), i = Array(o), c = 0; c < r; ++c)
            for (var u, l = n[c], f = a[c], g = l.length, s = i[c] = Array(g), d = 0; d < g; ++d)(u = l[d] || f[d]) && (s[d] = u);
          for (; c < o; ++c) i[c] = n[c];
          return new eD(i, this._parents, this._name, this._id)
        },
        selection: function() {
          return new eR(this._groups, this._parents)
        },
        transition: function() {
          for (var e = this._name, n = this._id, a = ++eB, o = this._groups, t = o.length, r = 0; r < t; ++r)
            for (var i, c = o[r], u = c.length, l = 0; l < u; ++l)
              if (i = c[l]) {
                var f = D(i, n);
                F(i, e, a, l, c, {
                  time: f.time + f.delay + f.duration,
                  delay: 0,
                  duration: f.duration,
                  ease: f.ease
                })
              } return new eD(o, this._parents, e, a)
        },
        call: eO.call,
        nodes: eO.nodes,
        node: eO.node,
        size: eO.size,
        empty: eO.empty,
        each: eO.each,
        on: function(e, n) {
          var a, o, t, r, i, c, u = this._id;
          return arguments.length < 2 ? D(this.node(), u).on.on(e) : this.each((a = u, o = e, t = n, c = (o + "").trim().split(/^|\s+/).every(function(e) {
            var n = e.indexOf(".");
            return n >= 0 && (e = e.slice(0, n)), !e || "start" === e
          }) ? I : B, function() {
            var e = c(this, a),
              n = e.on;
            n !== r && (i = (r = n).copy()).on(o, t), e.on = i
          }))
        },
        attr: function(e, n) {
          var a = (0, H.A)(e),
            o = "transform" === a ? q : eM;
          return this.attrTween(e, "function" == typeof n ? (a.local ? function(e, n, a) {
            var o, t, r;
            return function() {
              var i, c, u = a(this);
              return null == u ? void this.removeAttributeNS(e.space, e.local) : (i = this.getAttributeNS(e.space, e.local)) === (c = u + "") ? null : i === o && c === t ? r : (t = c, r = n(o = i, u))
            }
          } : function(e, n, a) {
            var o, t, r;
            return function() {
              var i, c, u = a(this);
              return null == u ? void this.removeAttribute(e) : (i = this.getAttribute(e)) === (c = u + "") ? null : i === o && c === t ? r : (t = c, r = n(o = i, u))
            }
          })(a, o, Z(this, "attr." + e, n)) : null == n ? (a.local ? function(e) {
            return function() {
              this.removeAttributeNS(e.space, e.local)
            }
          } : function(e) {
            return function() {
              this.removeAttribute(e)
            }
          })(a) : (a.local ? function(e, n, a) {
            var o, t, r = a + "";
            return function() {
              var i = this.getAttributeNS(e.space, e.local);
              return i === r ? null : i === o ? t : t = n(o = i, a)
            }
          } : function(e, n, a) {
            var o, t, r = a + "";
            return function() {
              var i = this.getAttribute(e);
              return i === r ? null : i === o ? t : t = n(o = i, a)
            }
          })(a, o, n))
        },
        attrTween: function(e, n) {
          var a = "attr." + e;
          if (arguments.length < 2) return (a = this.tween(a)) && a._value;
          if (null == n) return this.tween(a, null);
          if ("function" != typeof n) throw Error();
          var o = (0, H.A)(e);
          return this.tween(a, (o.local ? function(e, n) {
            var a, o;

            function t() {
              var t = n.apply(this, arguments);
              return t !== o && (a = (o = t) && function(n) {
                this.setAttributeNS(e.space, e.local, t.call(this, n))
              }), a
            }
            return t._value = n, t
          } : function(e, n) {
            var a, o;

            function t() {
              var t = n.apply(this, arguments);
              return t !== o && (a = (o = t) && function(n) {
                this.setAttribute(e, t.call(this, n))
              }), a
            }
            return t._value = n, t
          })(o, n))
        },
        style: function(e, n, a) {
          var o, t, r, i, c, u, l, f, g, s, d, y, m, h, N, C, p, L, E, v, b, A = "transform" == (e += "") ? V : eM;
          return null == n ? this.styleTween(e, (o = e, function() {
            var e = (0, eF.j)(this, o),
              n = (this.style.removeProperty(o), (0, eF.j)(this, o));
            return e === n ? null : e === t && n === r ? i : i = A(t = e, r = n)
          })).on("end.style." + e, eI(e)) : "function" == typeof n ? this.styleTween(e, (c = e, u = Z(this, "style." + e, n), function() {
            var e = (0, eF.j)(this, c),
              n = u(this),
              a = n + "";
            return null == n && (this.style.removeProperty(c), a = n = (0, eF.j)(this, c)), e === a ? null : e === l && a === f ? g : (f = a, g = A(l = e, n))
          })).each((s = this._id, p = "end." + (C = "style." + (d = e)), function() {
            var e = B(this, s),
              n = e.on,
              a = null == e.value[C] ? N || (N = eI(d)) : void 0;
            (n !== y || h !== a) && (m = (y = n).copy()).on(p, h = a), e.on = m
          })) : this.styleTween(e, (L = e, b = n + "", function() {
            var e = (0, eF.j)(this, L);
            return e === b ? null : e === E ? v : v = A(E = e, n)
          }), a).on("end.style." + e, null)
        },
        styleTween: function(e, n, a) {
          var o = "style." + (e += "");
          if (arguments.length < 2) return (o = this.tween(o)) && o._value;
          if (null == n) return this.tween(o, null);
          if ("function" != typeof n) throw Error();
          return this.tween(o, function(e, n, a) {
            var o, t;

            function r() {
              var r = n.apply(this, arguments);
              return r !== t && (o = (t = r) && function(n) {
                this.style.setProperty(e, r.call(this, n), a)
              }), o
            }
            return r._value = n, r
          }(e, n, null == a ? "" : a))
        },
        text: function(e) {
          var n, a;
          return this.tween("text", "function" == typeof e ? (n = Z(this, "text", e), function() {
            var e = n(this);
            this.textContent = null == e ? "" : e
          }) : (a = null == e ? "" : e + "", function() {
            this.textContent = a
          }))
        },
        textTween: function(e) {
          var n = "text";
          if (arguments.length < 1) return (n = this.tween(n)) && n._value;
          if (null == e) return this.tween(n, null);
          if ("function" != typeof e) throw Error();
          return this.tween(n, function(e) {
            var n, a;

            function o() {
              var o = e.apply(this, arguments);
              return o !== a && (n = (a = o) && function(e) {
                this.textContent = o.call(this, e)
              }), n
            }
            return o._value = e, o
          }(e))
        },
        remove: function() {
          var e;
          return this.on("end.remove", (e = this._id, function() {
            var n = this.parentNode;
            for (var a in this.__transition)
              if (+a !== e) return;
            n && n.removeChild(this)
          }))
        },
        tween: function(e, n) {
          var a = this._id;
          if (e += "", arguments.length < 2) {
            for (var o, t = D(this.node(), a).tween, r = 0, i = t.length; r < i; ++r)
              if ((o = t[r]).name === e) return o.value;
            return null
          }
          return this.each((null == n ? function(e, n) {
            var a, o;
            return function() {
              var t = B(this, e),
                r = t.tween;
              if (r !== a) {
                o = a = r;
                for (var i = 0, c = o.length; i < c; ++i)
                  if (o[i].name === n) {
                    (o = o.slice()).splice(i, 1);
                    break
                  }
              }
              t.tween = o
            }
          } : function(e, n, a) {
            var o, t;
            if ("function" != typeof a) throw Error();
            return function() {
              var r = B(this, e),
                i = r.tween;
              if (i !== o) {
                t = (o = i).slice();
                for (var c = {
                    name: n,
                    value: a
                  }, u = 0, l = t.length; u < l; ++u)
                  if (t[u].name === n) {
                    t[u] = c;
                    break
                  } u === l && t.push(c)
              }
              r.tween = t
            }
          })(a, e, n))
        },
        delay: function(e) {
          var n = this._id;
          return arguments.length ? this.each(("function" == typeof e ? function(e, n) {
            return function() {
              I(this, e).delay = +n.apply(this, arguments)
            }
          } : function(e, n) {
            return n *= 1,
              function() {
                I(this, e).delay = n
              }
          })(n, e)) : D(this.node(), n).delay
        },
        duration: function(e) {
          var n = this._id;
          return arguments.length ? this.each(("function" == typeof e ? function(e, n) {
            return function() {
              B(this, e).duration = +n.apply(this, arguments)
            }
          } : function(e, n) {
            return n *= 1,
              function() {
                B(this, e).duration = n
              }
          })(n, e)) : D(this.node(), n).duration
        },
        ease: function(e) {
          var n = this._id;
          return arguments.length ? this.each(function(e, n) {
            if ("function" != typeof n) throw Error();
            return function() {
              B(this, e).ease = n
            }
          }(n, e)) : D(this.node(), n).ease
        },
        easeVarying: function(e) {
          var n;
          if ("function" != typeof e) throw Error();
          return this.each((n = this._id, function() {
            var a = e.apply(this, arguments);
            if ("function" != typeof a) throw Error();
            B(this, n).ease = a
          }))
        },
        end: function() {
          var e, n, a = this,
            o = a._id,
            t = a.size();
          return new Promise(function(r, i) {
            var c = {
                value: i
              },
              u = {
                value: function() {
                  0 == --t && r()
                }
              };
            a.each(function() {
              var a = B(this, o),
                t = a.on;
              t !== e && ((n = (e = t).copy())._.cancel.push(c), n._.interrupt.push(c), n._.end.push(u)), a.on = n
            }), 0 === t && r()
          })
        },
        [Symbol.iterator]: eO[Symbol.iterator]
      };
      var ej = {
        time: null,
        delay: 0,
        duration: 250,
        ease: function(e) {
          return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2
        }
      };
      m.Ay.prototype.interrupt = function(e) {
        return this.each(function() {
          O(this, e)
        })
      }, m.Ay.prototype.transition = function(e) {
        var n, a;
        e instanceof eD ? (n = e._id, e = e._name) : (n = ++eB, (a = ej).time = A(), e = null == e ? null : e + "");
        for (var o = this._groups, t = o.length, r = 0; r < t; ++r)
          for (var i, c = o[r], u = c.length, l = 0; l < u; ++l)(i = c[l]) && F(i, e, n, l, c, a || function(e, n) {
            for (var a; !(a = e.__transition) || !(a = a[n]);)
              if (!(e = e.parentNode)) throw Error(`transition ${n} not found`);
            return a
          }(i, n));
        return new eD(o, this._parents, e, n)
      };
      let eU = e => () => e;

      function ez(e, {
        sourceEvent: n,
        target: a,
        transform: o,
        dispatch: t
      }) {
        Object.defineProperties(this, {
          type: {
            value: e,
            enumerable: !0,
            configurable: !0
          },
          sourceEvent: {
            value: n,
            enumerable: !0,
            configurable: !0
          },
          target: {
            value: a,
            enumerable: !0,
            configurable: !0
          },
          transform: {
            value: o,
            enumerable: !0,
            configurable: !0
          },
          _: {
            value: t
          }
        })
      }

      function eG(e, n, a) {
        this.k = e, this.x = n, this.y = a
      }
      eG.prototype = {
        constructor: eG,
        scale: function(e) {
          return 1 === e ? this : new eG(this.k * e, this.x, this.y)
        },
        translate: function(e, n) {
          return 0 === e & 0 === n ? this : new eG(this.k, this.x + this.k * e, this.y + this.k * n)
        },
        apply: function(e) {
          return [e[0] * this.k + this.x, e[1] * this.k + this.y]
        },
        applyX: function(e) {
          return e * this.k + this.x
        },
        applyY: function(e) {
          return e * this.k + this.y
        },
        invert: function(e) {
          return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k]
        },
        invertX: function(e) {
          return (e - this.x) / this.k
        },
        invertY: function(e) {
          return (e - this.y) / this.k
        },
        rescaleX: function(e) {
          return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e))
        },
        rescaleY: function(e) {
          return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e))
        },
        toString: function() {
          return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
        }
      };
      var eK = new eG(1, 0, 0);

      function eV(e) {
        for (; !e.__zoom;)
          if (!(e = e.parentNode)) return eK;
        return e.__zoom
      }

      function eq(e) {
        e.stopImmediatePropagation()
      }

      function eH(e) {
        e.preventDefault(), e.stopImmediatePropagation()
      }

      function eZ(e) {
        return (!e.ctrlKey || "wheel" === e.type) && !e.button
      }

      function eX() {
        var e = this;
        return e instanceof SVGElement ? (e = e.ownerSVGElement || e).hasAttribute("viewBox") ? [
          [(e = e.viewBox.baseVal).x, e.y],
          [e.x + e.width, e.y + e.height]
        ] : [
          [0, 0],
          [e.width.baseVal.value, e.height.baseVal.value]
        ] : [
          [0, 0],
          [e.clientWidth, e.clientHeight]
        ]
      }

      function eW() {
        return this.__zoom || eK
      }

      function eY(e) {
        return -e.deltaY * (1 === e.deltaMode ? .05 : e.deltaMode ? 1 : .002) * (e.ctrlKey ? 10 : 1)
      }

      function eJ() {
        return navigator.maxTouchPoints || "ontouchstart" in this
      }

      function eQ(e, n, a) {
        var o = e.invertX(n[0][0]) - a[0][0],
          t = e.invertX(n[1][0]) - a[1][0],
          r = e.invertY(n[0][1]) - a[0][1],
          i = e.invertY(n[1][1]) - a[1][1];
        return e.translate(t > o ? (o + t) / 2 : Math.min(0, o) || Math.max(0, t), i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i))
      }

      function e$() {
        var e, n, a, o = eZ,
          t = eX,
          i = eQ,
          c = eY,
          f = eJ,
          s = [0, 1 / 0],
          d = [
            [-1 / 0, -1 / 0],
            [1 / 0, 1 / 0]
          ],
          m = 250,
          h = g,
          N = r("start", "zoom", "end"),
          C = 0,
          p = 10;

        function L(e) {
          e.property("__zoom", eW).on("wheel.zoom", _).on("mousedown.zoom", w).on("dblclick.zoom", M).filter(f).on("touchstart.zoom", x).on("touchmove.zoom", P).on("touchend.zoom touchcancel.zoom", k).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
        }

        function E(e, n) {
          return (n = Math.max(s[0], Math.min(s[1], n))) === e.k ? e : new eG(n, e.x, e.y)
        }

        function v(e, n, a) {
          var o = n[0] - a[0] * e.k,
            t = n[1] - a[1] * e.k;
          return o === e.x && t === e.y ? e : new eG(e.k, o, t)
        }

        function b(e) {
          return [(+e[0][0] + +e[1][0]) / 2, (+e[0][1] + +e[1][1]) / 2]
        }

        function A(e, n, a, o) {
          e.on("start.zoom", function() {
            S(this, arguments).event(o).start()
          }).on("interrupt.zoom end.zoom", function() {
            S(this, arguments).event(o).end()
          }).tween("zoom", function() {
            var e = arguments,
              r = S(this, e).event(o),
              i = t.apply(this, e),
              c = null == a ? b(i) : "function" == typeof a ? a.apply(this, e) : a,
              u = Math.max(i[1][0] - i[0][0], i[1][1] - i[0][1]),
              l = this.__zoom,
              f = "function" == typeof n ? n.apply(this, e) : n,
              g = h(l.invert(c).concat(u / l.k), f.invert(c).concat(u / f.k));
            return function(e) {
              if (1 === e) e = f;
              else {
                var n = g(e),
                  a = u / n[2];
                e = new eG(a, c[0] - n[0] * a, c[1] - n[1] * a)
              }
              r.zoom(null, e)
            }
          })
        }

        function S(e, n, a) {
          return !a && e.__zooming || new T(e, n)
        }

        function T(e, n) {
          this.that = e, this.args = n, this.active = 0, this.sourceEvent = null, this.extent = t.apply(e, n), this.taps = 0
        }

        function _(e, ...n) {
          if (o.apply(this, arguments)) {
            var a = S(this, n).event(e),
              t = this.__zoom,
              r = Math.max(s[0], Math.min(s[1], t.k * Math.pow(2, c.apply(this, arguments)))),
              u = (0, y.A)(e);
            if (a.wheel)(a.mouse[0][0] !== u[0] || a.mouse[0][1] !== u[1]) && (a.mouse[1] = t.invert(a.mouse[0] = u)), clearTimeout(a.wheel);
            else {
              if (t.k === r) return;
              a.mouse = [u, t.invert(u)], O(this), a.start()
            }
            eH(e), a.wheel = setTimeout(function() {
              a.wheel = null, a.end()
            }, 150), a.zoom("mouse", i(v(E(t, r), a.mouse[0], a.mouse[1]), a.extent, d))
          }
        }

        function w(e, ...n) {
          if (!a && o.apply(this, arguments)) {
            var t, r, c, f = S(this, n, !0).event(e),
              g = (0, u.A)(e.view).on("mousemove.zoom", function(e) {
                if (eH(e), !f.moved) {
                  var n = e.clientX - h,
                    a = e.clientY - N;
                  f.moved = n * n + a * a > C
                }
                f.event(e).zoom("mouse", i(v(f.that.__zoom, f.mouse[0] = (0, y.A)(e, m), f.mouse[1]), f.extent, d))
              }, !0).on("mouseup.zoom", function(e) {
                var n, a, o, t;
                g.on("mousemove.zoom mouseup.zoom", null), n = e.view, a = f.moved, o = n.document.documentElement, t = (0, u.A)(n).on("dragstart.drag", null), a && (t.on("click.drag", l, !0), setTimeout(function() {
                  t.on("click.drag", null)
                }, 0)), "onselectstart" in o ? t.on("selectstart.drag", null) : (o.style.MozUserSelect = o.__noselect, delete o.__noselect), eH(e), f.event(e).end()
              }, !0),
              s = (0, y.A)(e, m),
              m = e.currentTarget,
              h = e.clientX,
              N = e.clientY;
            r = (t = e.view).document.documentElement, c = (0, u.A)(t).on("dragstart.drag", l, !0), "onselectstart" in r ? c.on("selectstart.drag", l, !0) : (r.__noselect = r.style.MozUserSelect, r.style.MozUserSelect = "none"), eq(e), f.mouse = [s, this.__zoom.invert(s)], O(this), f.start()
          }
        }

        function M(e, ...n) {
          if (o.apply(this, arguments)) {
            var a = this.__zoom,
              r = (0, y.A)(e.changedTouches ? e.changedTouches[0] : e, this),
              c = a.invert(r),
              l = a.k * (e.shiftKey ? .5 : 2),
              f = i(v(E(a, l), r, c), t.apply(this, n), d);
            eH(e), m > 0 ? (0, u.A)(this).transition().duration(m).call(A, f, r, e) : (0, u.A)(this).call(L.transform, f, r, e)
          }
        }

        function x(a, ...t) {
          if (o.apply(this, arguments)) {
            var r, i, c, u, l = a.touches,
              f = l.length,
              g = S(this, t, a.changedTouches.length === f).event(a);
            for (eq(a), i = 0; i < f; ++i) c = l[i], u = [u = (0, y.A)(c, this), this.__zoom.invert(u), c.identifier], g.touch0 ? g.touch1 || g.touch0[2] === u[2] || (g.touch1 = u, g.taps = 0) : (g.touch0 = u, r = !0, g.taps = 1 + !!e);
            e && (e = clearTimeout(e)), r && (g.taps < 2 && (n = u[0], e = setTimeout(function() {
              e = null
            }, 500)), O(this), g.start())
          }
        }

        function P(e, ...n) {
          if (this.__zooming) {
            var a, o, t, r, c = S(this, n).event(e),
              u = e.changedTouches,
              l = u.length;
            for (eH(e), a = 0; a < l; ++a) o = u[a], t = (0, y.A)(o, this), c.touch0 && c.touch0[2] === o.identifier ? c.touch0[0] = t : c.touch1 && c.touch1[2] === o.identifier && (c.touch1[0] = t);
            if (o = c.that.__zoom, c.touch1) {
              var f = c.touch0[0],
                g = c.touch0[1],
                s = c.touch1[0],
                m = c.touch1[1],
                h = (h = s[0] - f[0]) * h + (h = s[1] - f[1]) * h,
                N = (N = m[0] - g[0]) * N + (N = m[1] - g[1]) * N;
              o = E(o, Math.sqrt(h / N)), t = [(f[0] + s[0]) / 2, (f[1] + s[1]) / 2], r = [(g[0] + m[0]) / 2, (g[1] + m[1]) / 2]
            } else {
              if (!c.touch0) return;
              t = c.touch0[0], r = c.touch0[1]
            }
            c.zoom("touch", i(v(o, t, r), c.extent, d))
          }
        }

        function k(e, ...o) {
          if (this.__zooming) {
            var t, r, i = S(this, o).event(e),
              c = e.changedTouches,
              l = c.length;
            for (eq(e), a && clearTimeout(a), a = setTimeout(function() {
                a = null
              }, 500), t = 0; t < l; ++t) r = c[t], i.touch0 && i.touch0[2] === r.identifier ? delete i.touch0 : i.touch1 && i.touch1[2] === r.identifier && delete i.touch1;
            if (i.touch1 && !i.touch0 && (i.touch0 = i.touch1, delete i.touch1), i.touch0) i.touch0[1] = this.__zoom.invert(i.touch0[0]);
            else if (i.end(), 2 === i.taps && (r = (0, y.A)(r, this), Math.hypot(n[0] - r[0], n[1] - r[1]) < p)) {
              var f = (0, u.A)(this).on("dblclick.zoom");
              f && f.apply(this, arguments)
            }
          }
        }
        return L.transform = function(e, n, a, o) {
          var t = e.selection ? e.selection() : e;
          t.property("__zoom", eW), e !== t ? A(e, n, a, o) : t.interrupt().each(function() {
            S(this, arguments).event(o).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
          })
        }, L.scaleBy = function(e, n, a, o) {
          L.scaleTo(e, function() {
            var e = this.__zoom.k,
              a = "function" == typeof n ? n.apply(this, arguments) : n;
            return e * a
          }, a, o)
        }, L.scaleTo = function(e, n, a, o) {
          L.transform(e, function() {
            var e = t.apply(this, arguments),
              o = this.__zoom,
              r = null == a ? b(e) : "function" == typeof a ? a.apply(this, arguments) : a,
              c = o.invert(r),
              u = "function" == typeof n ? n.apply(this, arguments) : n;
            return i(v(E(o, u), r, c), e, d)
          }, a, o)
        }, L.translateBy = function(e, n, a, o) {
          L.transform(e, function() {
            return i(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof a ? a.apply(this, arguments) : a), t.apply(this, arguments), d)
          }, null, o)
        }, L.translateTo = function(e, n, a, o, r) {
          L.transform(e, function() {
            var e = t.apply(this, arguments),
              r = this.__zoom,
              c = null == o ? b(e) : "function" == typeof o ? o.apply(this, arguments) : o;
            return i(eK.translate(c[0], c[1]).scale(r.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof a ? -a.apply(this, arguments) : -a), e, d)
          }, o, r)
        }, T.prototype = {
          event: function(e) {
            return e && (this.sourceEvent = e), this
          },
          start: function() {
            return 1 == ++this.active && (this.that.__zooming = this, this.emit("start")), this
          },
          zoom: function(e, n) {
            return this.mouse && "mouse" !== e && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== e && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== e && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this
          },
          end: function() {
            return 0 == --this.active && (delete this.that.__zooming, this.emit("end")), this
          },
          emit: function(e) {
            var n = (0, u.A)(this.that).datum();
            N.call(e, this.that, new ez(e, {
              sourceEvent: this.sourceEvent,
              target: L,
              type: e,
              transform: this.that.__zoom,
              dispatch: N
            }), n)
          }
        }, L.wheelDelta = function(e) {
          return arguments.length ? (c = "function" == typeof e ? e : eU(+e), L) : c
        }, L.filter = function(e) {
          return arguments.length ? (o = "function" == typeof e ? e : eU(!!e), L) : o
        }, L.touchable = function(e) {
          return arguments.length ? (f = "function" == typeof e ? e : eU(!!e), L) : f
        }, L.extent = function(e) {
          return arguments.length ? (t = "function" == typeof e ? e : eU([
            [+e[0][0], +e[0][1]],
            [+e[1][0], +e[1][1]]
          ]), L) : t
        }, L.scaleExtent = function(e) {
          return arguments.length ? (s[0] = +e[0], s[1] = +e[1], L) : [s[0], s[1]]
        }, L.translateExtent = function(e) {
          return arguments.length ? (d[0][0] = +e[0][0], d[1][0] = +e[1][0], d[0][1] = +e[0][1], d[1][1] = +e[1][1], L) : [
            [d[0][0], d[0][1]],
            [d[1][0], d[1][1]]
          ]
        }, L.constrain = function(e) {
          return arguments.length ? (i = e, L) : i
        }, L.duration = function(e) {
          return arguments.length ? (m = +e, L) : m
        }, L.interpolate = function(e) {
          return arguments.length ? (h = e, L) : h
        }, L.on = function() {
          var e = N.on.apply(N, arguments);
          return e === N ? L : e
        }, L.clickDistance = function(e) {
          return arguments.length ? (C = (e *= 1) * e, L) : Math.sqrt(C)
        }, L.tapDistance = function(e) {
          return arguments.length ? (p = +e, L) : p
        }, L
      }
      eV.prototype = eG.prototype
    },
    34701: (e, n, a) => {
      "use strict";
      var o = a(82114);

      function t() {}

      function r() {}
      r.resetWarningCache = t, e.exports = function() {
        function e(e, n, a, t, r, i) {
          if (i !== o) {
            var c = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw c.name = "Invariant Violation", c
          }
        }

        function n() {
          return e
        }
        e.isRequired = e;
        var a = {
          array: e,
          bigint: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: n,
          element: e,
          elementType: e,
          instanceOf: n,
          node: e,
          objectOf: n,
          oneOf: n,
          oneOfType: n,
          shape: n,
          exact: n,
          checkPropTypes: r,
          resetWarningCache: t
        };
        return a.PropTypes = a, a
      }
    },
    37206: (e, n, a) => {
      "use strict";
      a.d(n, {
        default: () => t.a
      });
      var o = a(75707),
        t = a.n(o)
    },
    41112: (e, n, a) => {
      "use strict";

      function o({
        reason: e,
        children: n
      }) {
        return n
      }
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), Object.defineProperty(n, "BailoutToCSR", {
        enumerable: !0,
        get: function() {
          return o
        }
      }), a(1980)
    },
    55163: (e, n) => {
      "use strict";
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = [{
        countryNameEn: "Andorra",
        countryNameLocal: "Andorra",
        countryCode: "AD",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ca",
        officialLanguageNameEn: "Catalan, Valencian",
        officialLanguageNameLocal: "Catal\xe0, Valenci\xe0",
        countryCallingCode: "376",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDE6\uD83C\uDDE9"
      }, {
        countryNameEn: "Afghanistan",
        countryNameLocal: "د افغانستان اسلامي دولتدولت اسلامی افغانستان, جمهوری اسلامی افغانستان",
        countryCode: "AF",
        currencyCode: "AFN",
        currencyNameEn: "Afghan afghani",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fa",
        officialLanguageNameEn: "Persian",
        officialLanguageNameLocal: "فارسی",
        countryCallingCode: "93",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDE6\uD83C\uDDEB"
      }, {
        countryNameEn: "Antigua and Barbuda",
        countryNameLocal: "Antigua and Barbuda",
        countryCode: "AG",
        currencyCode: "XCD",
        currencyNameEn: "East Caribbean dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1268",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDE6\uD83C\uDDEC"
      }, {
        countryNameEn: "Anguilla",
        countryNameLocal: "Anguilla",
        countryCode: "AI",
        currencyCode: "XCD",
        currencyNameEn: "East Caribbean dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1264",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDE6\uD83C\uDDEE"
      }, {
        countryNameEn: "Albania",
        countryNameLocal: "Shqip\xebria",
        countryCode: "AL",
        currencyCode: "ALL",
        currencyNameEn: "Albanian lek",
        tinType: "NIPT",
        tinName: "Numri i Identifikimit p\xebr Personin e Tatuesh\xebm",
        officialLanguageCode: "sq",
        officialLanguageNameEn: "Albanian",
        officialLanguageNameLocal: "Shqip",
        countryCallingCode: "355",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDE6\uD83C\uDDF1"
      }, {
        countryNameEn: "Armenia",
        countryNameLocal: "Հայաստան",
        countryCode: "AM",
        currencyCode: "AMD",
        currencyNameEn: "Armenian dram",
        tinType: "",
        tinName: "",
        officialLanguageCode: "hy",
        officialLanguageNameEn: "Armenian",
        officialLanguageNameLocal: "Հայերեն",
        countryCallingCode: "374",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDE6\uD83C\uDDF2"
      }, {
        countryNameEn: "Angola",
        countryNameLocal: "Angola",
        countryCode: "AO",
        currencyCode: "AOA",
        currencyNameEn: "Angolan kwanza",
        tinType: "",
        tinName: "",
        officialLanguageCode: "pt",
        officialLanguageNameEn: "Portuguese",
        officialLanguageNameLocal: "Portugu\xeas",
        countryCallingCode: "244",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDE6\uD83C\uDDF4"
      }, {
        countryNameEn: "Antarctica",
        countryNameLocal: "Antarctica, Ant\xe1rtico, Antarctique, Антарктике",
        countryCode: "AQ",
        currencyCode: "",
        currencyNameEn: "",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "672",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDE6\uD83C\uDDF6"
      }, {
        countryNameEn: "Argentina",
        countryNameLocal: "Argentina",
        countryCode: "AR",
        currencyCode: "ARS",
        currencyNameEn: "Argentine peso",
        tinType: "CUIT",
        tinName: "C\xf3digo \xdanico de Identificaci\xf3n Tributaria",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Espa\xf1ol",
        countryCallingCode: "54",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDE6\uD83C\uDDF7"
      }, {
        countryNameEn: "American Samoa",
        countryNameLocal: "American Samoa",
        countryCode: "AS",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1684",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDE6\uD83C\uDDF8"
      }, {
        countryNameEn: "Austria",
        countryNameLocal: "\xd6sterreich",
        countryCode: "AT",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "UID",
        tinName: "Umsatzsteuer-Identifikationsnummer",
        officialLanguageCode: "de",
        officialLanguageNameEn: "German",
        officialLanguageNameLocal: "Deutsch",
        countryCallingCode: "43",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDE6\uD83C\uDDF9"
      }, {
        countryNameEn: "Australia",
        countryNameLocal: "Australia",
        countryCode: "AU",
        currencyCode: "AUD",
        currencyNameEn: "Australian dollar",
        tinType: "ABN",
        tinName: "Australian Business Number",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "61",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDE6\uD83C\uDDFA"
      }, {
        countryNameEn: "Aruba",
        countryNameLocal: "Aruba",
        countryCode: "AW",
        currencyCode: "AWG",
        currencyNameEn: "Aruban florin",
        tinType: "",
        tinName: "",
        officialLanguageCode: "nl",
        officialLanguageNameEn: "Dutch, Flemish",
        officialLanguageNameLocal: "Nederlands, Vlaams",
        countryCallingCode: "297",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDE6\uD83C\uDDFC"
      }, {
        countryNameEn: "\xc5land Islands",
        countryNameLocal: "\xc5land",
        countryCode: "AX",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "sv",
        officialLanguageNameEn: "Swedish",
        officialLanguageNameLocal: "Svenska",
        countryCallingCode: "358",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDE6\uD83C\uDDFD"
      }, {
        countryNameEn: "Azerbaijan",
        countryNameLocal: "Azərbaycan",
        countryCode: "AZ",
        currencyCode: "AZN",
        currencyNameEn: "Azerbaijani manat",
        tinType: "",
        tinName: "",
        officialLanguageCode: "az",
        officialLanguageNameEn: "Azerbaijani",
        officialLanguageNameLocal: "azərbaycan dili",
        countryCallingCode: "994",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDE6\uD83C\uDDFF"
      }, {
        countryNameEn: "Bosnia and Herzegovina",
        countryNameLocal: "Bosna i Hercegovina",
        countryCode: "BA",
        currencyCode: "BAM",
        currencyNameEn: "Bosnia and Herzegovina convertible mark",
        tinType: "",
        tinName: "",
        officialLanguageCode: "bs",
        officialLanguageNameEn: "Bosnian",
        officialLanguageNameLocal: "bosanski jezik",
        countryCallingCode: "387",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDE7\uD83C\uDDE6"
      }, {
        countryNameEn: "Barbados",
        countryNameLocal: "Barbados",
        countryCode: "BB",
        currencyCode: "BBD",
        currencyNameEn: "Barbados dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1246",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDE7\uD83C\uDDE7"
      }, {
        countryNameEn: "Bangladesh",
        countryNameLocal: "গণপ্রজাতন্ত্রী বাংলাদেশ",
        countryCode: "BD",
        currencyCode: "BDT",
        currencyNameEn: "Bangladeshi taka",
        tinType: "",
        tinName: "",
        officialLanguageCode: "bn",
        officialLanguageNameEn: "Bengali",
        officialLanguageNameLocal: "বাংলা",
        countryCallingCode: "880",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDE7\uD83C\uDDE9"
      }, {
        countryNameEn: "Belgium",
        countryNameLocal: "Belgi\xeb, Belgique, Belgien",
        countryCode: "BE",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "n\xb0 TVABTW-nr Mwst-nr",
        tinName: "BTW identificatienummer / Num\xe9ro de TVA",
        officialLanguageCode: "nl",
        officialLanguageNameEn: "Dutch, Flemish",
        officialLanguageNameLocal: "Nederlands, Vlaams",
        countryCallingCode: "32",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDE7\uD83C\uDDEA"
      }, {
        countryNameEn: "Burkina Faso",
        countryNameLocal: "Burkina Faso",
        countryCode: "BF",
        currencyCode: "XOF",
        currencyNameEn: "CFA franc BCEAO",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "226",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDE7\uD83C\uDDEB"
      }, {
        countryNameEn: "Bulgaria",
        countryNameLocal: "България",
        countryCode: "BG",
        currencyCode: "BGN",
        currencyNameEn: "Bulgarian lev",
        tinType: "ДДС номер",
        tinName: "Идентификационен номер по ДДС",
        officialLanguageCode: "bg",
        officialLanguageNameEn: "Bulgarian",
        officialLanguageNameLocal: "български език",
        countryCallingCode: "359",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDE7\uD83C\uDDEC"
      }, {
        countryNameEn: "Bahrain",
        countryNameLocal: "البحرين",
        countryCode: "BH",
        currencyCode: "BHD",
        currencyNameEn: "Bahraini dinar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "973",
        areaCodes: [],
        region: "Arab States",
        flag: "\uD83C\uDDE7\uD83C\uDDED"
      }, {
        countryNameEn: "Burundi",
        countryNameLocal: "Burundi",
        countryCode: "BI",
        currencyCode: "BIF",
        currencyNameEn: "Burundian franc",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "257",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDE7\uD83C\uDDEE"
      }, {
        countryNameEn: "Benin",
        countryNameLocal: "B\xe9nin",
        countryCode: "BJ",
        currencyCode: "XOF",
        currencyNameEn: "CFA franc BCEAO",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "229",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDE7\uD83C\uDDEF"
      }, {
        countryNameEn: "Saint Barth\xe9lemy",
        countryNameLocal: "Saint-Barth\xe9lemy",
        countryCode: "BL",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "590",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDE7\uD83C\uDDF1"
      }, {
        countryNameEn: "Bermuda",
        countryNameLocal: "Bermuda",
        countryCode: "BM",
        currencyCode: "BMD",
        currencyNameEn: "Bermudian dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1441",
        areaCodes: [],
        region: "North America",
        flag: "\uD83C\uDDE7\uD83C\uDDF2"
      }, {
        countryNameEn: "Brunei Darussalam",
        countryNameLocal: "Brunei Darussalam",
        countryCode: "BN",
        currencyCode: "BND",
        currencyNameEn: "Brunei dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ms",
        officialLanguageNameEn: "Malay",
        officialLanguageNameLocal: "Bahasa Melayu, بهاس ملايو‎",
        countryCallingCode: "673",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDE7\uD83C\uDDF3"
      }, {
        countryNameEn: "Bolivia (Plurinational State of)",
        countryNameLocal: "Bolivia, Bulibiya, Vol\xedvia, Wuliwya",
        countryCode: "BO",
        currencyCode: "BOP",
        currencyNameEn: "",
        tinType: "NIT",
        tinName: "N\xfamero de Identificaci\xf3n Tributaria",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Espa\xf1ol",
        countryCallingCode: "591",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDE7\uD83C\uDDF4"
      }, {
        countryNameEn: "Bonaire, Sint Eustatius and Saba",
        countryNameLocal: "Caribisch Nederland",
        countryCode: "BQ",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "nl",
        officialLanguageNameEn: "Dutch, Flemish",
        officialLanguageNameLocal: "Nederlands, Vlaams",
        countryCallingCode: "5997",
        areaCodes: [],
        region: "Unknown",
        flag: "\uD83C\uDDE7\uD83C\uDDF6"
      }, {
        countryNameEn: "Brazil",
        countryNameLocal: "Brasil",
        countryCode: "BR",
        currencyCode: "BRL",
        currencyNameEn: "Brazilian real",
        tinType: "CNPJ",
        tinName: "Cadastro Nacional de Pessoa Jur\xeddica",
        officialLanguageCode: "pt",
        officialLanguageNameEn: "Portuguese",
        officialLanguageNameLocal: "Portugu\xeas",
        countryCallingCode: "55",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDE7\uD83C\uDDF7"
      }, {
        countryNameEn: "Bhutan",
        countryNameLocal: "འབྲུག་ཡུལ",
        countryCode: "BT",
        currencyCode: "BTN",
        currencyNameEn: "Bhutanese ngultrum",
        tinType: "",
        tinName: "",
        officialLanguageCode: "dz",
        officialLanguageNameEn: "Dzongkha",
        officialLanguageNameLocal: "རྫོང་ཁ",
        countryCallingCode: "975",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDE7\uD83C\uDDF9"
      }, {
        countryNameEn: "Bouvet Island",
        countryNameLocal: "Bouvet\xf8ya",
        countryCode: "BV",
        currencyCode: "NOK",
        currencyNameEn: "Norwegian krone",
        tinType: "",
        tinName: "",
        officialLanguageCode: "no",
        officialLanguageNameEn: "Norwegian",
        officialLanguageNameLocal: "Norsk",
        countryCallingCode: "47",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDE7\uD83C\uDDFB"
      }, {
        countryNameEn: "Botswana",
        countryNameLocal: "Botswana",
        countryCode: "BW",
        currencyCode: "BWP",
        currencyNameEn: "Botswana pula",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "267",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDE7\uD83C\uDDFC"
      }, {
        countryNameEn: "Belarus",
        countryNameLocal: "Беларусь",
        countryCode: "BY",
        currencyCode: "BYR",
        currencyNameEn: "",
        tinType: "УНП (UNP)",
        tinName: "Учетный номер плательщика",
        officialLanguageCode: "be",
        officialLanguageNameEn: "Belarusian",
        officialLanguageNameLocal: "беларуская мова",
        countryCallingCode: "375",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDE7\uD83C\uDDFE"
      }, {
        countryNameEn: "Belize",
        countryNameLocal: "Belize",
        countryCode: "BZ",
        currencyCode: "BZD",
        currencyNameEn: "Belize dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "501",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDE7\uD83C\uDDFF"
      }, {
        countryNameEn: "Canada",
        countryNameLocal: "Canada",
        countryCode: "CA",
        currencyCode: "CAD",
        currencyNameEn: "Canadian dollar",
        tinType: "BN / NE",
        tinName: "Business Number",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1",
        areaCodes: ["403", "587", "780", "825", "236", "250", "604", "672", "778", "204", "431", "506", "709", "782", "902", "226", "249", "289", "343", "365", "416", "437", "519", "548", "613", "647", "705", "807", "905", "367", "418", "438", "450", "514", "579", "581", "819", "873", "306", "639", "867"],
        region: "North America",
        flag: "\uD83C\uDDE8\uD83C\uDDE6"
      }, {
        countryNameEn: "Switzerland",
        countryNameLocal: "Schweiz, Suisse, Svizzera, Svizra",
        countryCode: "CH",
        currencyCode: "CHF",
        currencyNameEn: "Swiss franc",
        tinType: "MWST/TVA/IVA",
        tinName: "Mehrwertsteuernummer",
        officialLanguageCode: "de",
        officialLanguageNameEn: "German",
        officialLanguageNameLocal: "Deutsch",
        countryCallingCode: "41",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDE8\uD83C\uDDED"
      }, {
        countryNameEn: "C\xf4te d'Ivoire",
        countryNameLocal: "C\xf4te d'Ivoire",
        countryCode: "CI",
        currencyCode: "XOF",
        currencyNameEn: "CFA franc BCEAO",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "225",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDE8\uD83C\uDDEE"
      }, {
        countryNameEn: "Chile",
        countryNameLocal: "Chile",
        countryCode: "CL",
        currencyCode: "CLP",
        currencyNameEn: "Chilean peso",
        tinType: "RUT",
        tinName: "Rol \xdanico Tributario",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Espa\xf1ol",
        countryCallingCode: "56",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDE8\uD83C\uDDF1"
      }, {
        countryNameEn: "Cameroon",
        countryNameLocal: "Cameroun, Cameroon",
        countryCode: "CM",
        currencyCode: "XAF",
        currencyNameEn: "CFA franc BEAC",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "237",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDE8\uD83C\uDDF2"
      }, {
        countryNameEn: "China",
        countryNameLocal: "中国",
        countryCode: "CN",
        currencyCode: "CNY",
        currencyNameEn: "Renminbi (Chinese) yuan",
        tinType: "",
        tinName: "",
        officialLanguageCode: "zh-hans",
        officialLanguageNameEn: "",
        officialLanguageNameLocal: "",
        countryCallingCode: "86",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDE8\uD83C\uDDF3"
      }, {
        countryNameEn: "Colombia",
        countryNameLocal: "Colombia",
        countryCode: "CO",
        currencyCode: "COP",
        currencyNameEn: "Colombian peso",
        tinType: "NIT",
        tinName: "N\xfamero De Identificaci\xf3n Tributaria",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Espa\xf1ol",
        countryCallingCode: "57",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDE8\uD83C\uDDF4"
      }, {
        countryNameEn: "Costa Rica",
        countryNameLocal: "Costa Rica",
        countryCode: "CR",
        currencyCode: "CRC",
        currencyNameEn: "Costa Rican colon",
        tinType: "",
        tinName: "C\xe9dula Jur\xeddica",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Espa\xf1ol",
        countryCallingCode: "506",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDE8\uD83C\uDDF7"
      }, {
        countryNameEn: "Cuba",
        countryNameLocal: "Cuba",
        countryCode: "CU",
        currencyCode: "CUC",
        currencyNameEn: "Cuban convertible peso",
        tinType: "",
        tinName: "",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Espa\xf1ol",
        countryCallingCode: "53",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDE8\uD83C\uDDFA"
      }, {
        countryNameEn: "Cabo Verde",
        countryNameLocal: "Cabo Verde",
        countryCode: "CV",
        currencyCode: "CVE",
        currencyNameEn: "Cape Verdean escudo",
        tinType: "",
        tinName: "",
        officialLanguageCode: "pt",
        officialLanguageNameEn: "Portuguese",
        officialLanguageNameLocal: "Portugu\xeas",
        countryCallingCode: "238",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDE8\uD83C\uDDFB"
      }, {
        countryNameEn: "Cura\xe7ao",
        countryNameLocal: "Cura\xe7ao",
        countryCode: "CW",
        currencyCode: "ANG",
        currencyNameEn: "Netherlands Antillean guilder",
        tinType: "",
        tinName: "",
        officialLanguageCode: "nl",
        officialLanguageNameEn: "Dutch, Flemish",
        officialLanguageNameLocal: "Nederlands, Vlaams",
        countryCallingCode: "599",
        areaCodes: [],
        region: "Unknown",
        flag: "\uD83C\uDDE8\uD83C\uDDFC"
      }, {
        countryNameEn: "Christmas Island",
        countryNameLocal: "Christmas Island",
        countryCode: "CX",
        currencyCode: "AUD",
        currencyNameEn: "Australian dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "61",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDE8\uD83C\uDDFD"
      }, {
        countryNameEn: "Cyprus",
        countryNameLocal: "Κύπρος, Kibris",
        countryCode: "CY",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "ΦΠΑ",
        tinName: "Αριθμός Εγγραφής Φ.Π.Α.",
        officialLanguageCode: "el",
        officialLanguageNameEn: "Greek, Modern (1453-)",
        officialLanguageNameLocal: "ελληνικά",
        countryCallingCode: "357",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDE8\uD83C\uDDFE"
      }, {
        countryNameEn: "Germany",
        countryNameLocal: "Deutschland",
        countryCode: "DE",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "USt-IdNr.",
        tinName: "Umsatzsteuer-Identifikationsnummer",
        officialLanguageCode: "de",
        officialLanguageNameEn: "German",
        officialLanguageNameLocal: "Deutsch",
        countryCallingCode: "49",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDE9\uD83C\uDDEA"
      }, {
        countryNameEn: "Djibouti",
        countryNameLocal: "Djibouti, جيبوتي, Jabuuti, Gabuutih",
        countryCode: "DJ",
        currencyCode: "DJF",
        currencyNameEn: "Djiboutian franc",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "253",
        areaCodes: [],
        region: "Arab States",
        flag: "\uD83C\uDDE9\uD83C\uDDEF"
      }, {
        countryNameEn: "Denmark",
        countryNameLocal: "Danmark",
        countryCode: "DK",
        currencyCode: "DKK",
        currencyNameEn: "Danish krone",
        tinType: "CVR",
        tinName: "Momsregistreringsnummer",
        officialLanguageCode: "da",
        officialLanguageNameEn: "Danish",
        officialLanguageNameLocal: "dansk",
        countryCallingCode: "45",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDE9\uD83C\uDDF0"
      }, {
        countryNameEn: "Dominica",
        countryNameLocal: "Dominica",
        countryCode: "DM",
        currencyCode: "XCD",
        currencyNameEn: "East Caribbean dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "767",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDE9\uD83C\uDDF2"
      }, {
        countryNameEn: "Algeria",
        countryNameLocal: "الجزائر",
        countryCode: "DZ",
        currencyCode: "DZD",
        currencyNameEn: "Algerian dinar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "213",
        areaCodes: [],
        region: "Arab States",
        flag: "\uD83C\uDDE9\uD83C\uDDFF"
      }, {
        countryNameEn: "Ecuador",
        countryNameLocal: "Ecuador",
        countryCode: "EC",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "RUC",
        tinName: "N\xfamero de Registro Unico de Contribuyentes",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Espa\xf1ol",
        countryCallingCode: "593",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDEA\uD83C\uDDE8"
      }, {
        countryNameEn: "Estonia",
        countryNameLocal: "Eesti",
        countryCode: "EE",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "KMKR",
        tinName: "K\xe4ibemaksukohustuslase number",
        officialLanguageCode: "et",
        officialLanguageNameEn: "Estonian",
        officialLanguageNameLocal: "eesti, eesti keel",
        countryCallingCode: "372",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDEA\uD83C\uDDEA"
      }, {
        countryNameEn: "Egypt",
        countryNameLocal: "مصر",
        countryCode: "EG",
        currencyCode: "EGP",
        currencyNameEn: "Egyptian pound",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "20",
        areaCodes: [],
        region: "Arab States",
        flag: "\uD83C\uDDEA\uD83C\uDDEC"
      }, {
        countryNameEn: "Western Sahara",
        countryNameLocal: "Sahara Occidental",
        countryCode: "EH",
        currencyCode: "MAD",
        currencyNameEn: "Moroccan dirham",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "212",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDEA\uD83C\uDDED"
      }, {
        countryNameEn: "Eritrea",
        countryNameLocal: "ኤርትራ, إرتريا, Eritrea",
        countryCode: "ER",
        currencyCode: "ERN",
        currencyNameEn: "Eritrean nakfa",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ti",
        officialLanguageNameEn: "Tigrinya",
        officialLanguageNameLocal: "ትግርኛ",
        countryCallingCode: "291",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDEA\uD83C\uDDF7"
      }, {
        countryNameEn: "Spain",
        countryNameLocal: "Espa\xf1a",
        countryCode: "ES",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "NIF (CIF)",
        tinName: "N\xfamero de Identificaci\xf3n Fiscal (formerly named C\xf3digo de Identificaci\xf3n Fiscal)",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Espa\xf1ol",
        countryCallingCode: "34",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDEA\uD83C\uDDF8"
      }, {
        countryNameEn: "Ethiopia",
        countryNameLocal: "ኢትዮጵያ, Itoophiyaa",
        countryCode: "ET",
        currencyCode: "ETB",
        currencyNameEn: "Ethiopian birr",
        tinType: "",
        tinName: "",
        officialLanguageCode: "am",
        officialLanguageNameEn: "Amharic",
        officialLanguageNameLocal: "አማርኛ",
        countryCallingCode: "251",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDEA\uD83C\uDDF9"
      }, {
        countryNameEn: "Finland",
        countryNameLocal: "Suomi",
        countryCode: "FI",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "ALV nro",
        tinName: "Arvonlis\xe4veronumero",
        officialLanguageCode: "fi",
        officialLanguageNameEn: "Finnish",
        officialLanguageNameLocal: "suomi, suomen kieli",
        countryCallingCode: "358",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDEB\uD83C\uDDEE"
      }, {
        countryNameEn: "Fiji",
        countryNameLocal: "Fiji",
        countryCode: "FJ",
        currencyCode: "FJD",
        currencyNameEn: "Fiji dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "679",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDEB\uD83C\uDDEF"
      }, {
        countryNameEn: "Micronesia (Federated States of)",
        countryNameLocal: "Micronesia",
        countryCode: "FM",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "691",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDEB\uD83C\uDDF2"
      }, {
        countryNameEn: "France",
        countryNameLocal: "France",
        countryCode: "FR",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "n\xb0 TVA",
        tinName: "Num\xe9ro d'identification \xe0 la taxe sur la valeur ajout\xe9e / Num\xe9ro de TVA intracommunautaire",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "33",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDEB\uD83C\uDDF7"
      }, {
        countryNameEn: "Gabon",
        countryNameLocal: "Gabon",
        countryCode: "GA",
        currencyCode: "XAF",
        currencyNameEn: "CFA franc BEAC",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "241",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDEC\uD83C\uDDE6"
      }, {
        countryNameEn: "Grenada",
        countryNameLocal: "Grenada",
        countryCode: "GD",
        currencyCode: "XCD",
        currencyNameEn: "East Caribbean dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1473",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDEC\uD83C\uDDE9"
      }, {
        countryNameEn: "Georgia",
        countryNameLocal: "საქართველო",
        countryCode: "GE",
        currencyCode: "GEL",
        currencyNameEn: "Georgian lari",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ka",
        officialLanguageNameEn: "Georgian",
        officialLanguageNameLocal: "ქართული",
        countryCallingCode: "995",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDEC\uD83C\uDDEA"
      }, {
        countryNameEn: "French Guiana",
        countryNameLocal: "Guyane fran\xe7aise",
        countryCode: "GF",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "594",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDEC\uD83C\uDDEB"
      }, {
        countryNameEn: "Guernsey",
        countryNameLocal: "Guernsey",
        countryCode: "GG",
        currencyCode: "GBP",
        currencyNameEn: "Pound sterling",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "44",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDEC\uD83C\uDDEC"
      }, {
        countryNameEn: "Ghana",
        countryNameLocal: "Ghana",
        countryCode: "GH",
        currencyCode: "GHS",
        currencyNameEn: "Ghanaian cedi",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "233",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDEC\uD83C\uDDED"
      }, {
        countryNameEn: "Gibraltar",
        countryNameLocal: "Gibraltar",
        countryCode: "GI",
        currencyCode: "GIP",
        currencyNameEn: "Gibraltar pound",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "350",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDEC\uD83C\uDDEE"
      }, {
        countryNameEn: "Greenland",
        countryNameLocal: "Kalaallit Nunaat, Gr\xf8nland",
        countryCode: "GL",
        currencyCode: "DKK",
        currencyNameEn: "Danish krone",
        tinType: "",
        tinName: "",
        officialLanguageCode: "kl",
        officialLanguageNameEn: "Kalaallisut, Greenlandic",
        officialLanguageNameLocal: "kalaallisut, kalaallit oqaasii",
        countryCallingCode: "299",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDEC\uD83C\uDDF1"
      }, {
        countryNameEn: "Guinea",
        countryNameLocal: "Guin\xe9e",
        countryCode: "GN",
        currencyCode: "GNF",
        currencyNameEn: "Guinean franc",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "224",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDEC\uD83C\uDDF3"
      }, {
        countryNameEn: "Guadeloupe",
        countryNameLocal: "Guadeloupe",
        countryCode: "GP",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "590",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDEC\uD83C\uDDF5"
      }, {
        countryNameEn: "Equatorial Guinea",
        countryNameLocal: "Guiena ecuatorial, Guin\xe9e \xe9quatoriale, Guin\xe9 Equatorial",
        countryCode: "GQ",
        currencyCode: "XAF",
        currencyNameEn: "CFA franc BEAC",
        tinType: "",
        tinName: "",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Espa\xf1ol",
        countryCallingCode: "240",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDEC\uD83C\uDDF6"
      }, {
        countryNameEn: "Greece",
        countryNameLocal: "Ελλάδα",
        countryCode: "GR",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "el",
        officialLanguageNameEn: "Greek, Modern (1453-)",
        officialLanguageNameLocal: "ελληνικά",
        countryCallingCode: "30",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDEC\uD83C\uDDF7"
      }, {
        countryNameEn: "South Georgia and the South Sandwich Islands",
        countryNameLocal: "South Georgia and the South Sandwich Islands",
        countryCode: "GS",
        currencyCode: "",
        currencyNameEn: "",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "500",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDEC\uD83C\uDDF8"
      }, {
        countryNameEn: "Guatemala",
        countryNameLocal: "Guatemala",
        countryCode: "GT",
        currencyCode: "GTQ",
        currencyNameEn: "Guatemalan quetzal",
        tinType: "NIT",
        tinName: "N\xfamero de Identificaci\xf3n Tributaria",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Espa\xf1ol",
        countryCallingCode: "502",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDEC\uD83C\uDDF9"
      }, {
        countryNameEn: "Guam",
        countryNameLocal: "Guam, Gu\xe5h\xe5n",
        countryCode: "GU",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDEC\uD83C\uDDFA"
      }, {
        countryNameEn: "Guinea-Bissau",
        countryNameLocal: "Guin\xe9-Bissau",
        countryCode: "GW",
        currencyCode: "XOF",
        currencyNameEn: "CFA franc BCEAO",
        tinType: "",
        tinName: "",
        officialLanguageCode: "pt",
        officialLanguageNameEn: "Portuguese",
        officialLanguageNameLocal: "Portugu\xeas",
        countryCallingCode: "245",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDEC\uD83C\uDDFC"
      }, {
        countryNameEn: "Guyana",
        countryNameLocal: "Guyana",
        countryCode: "GY",
        currencyCode: "GYD",
        currencyNameEn: "Guyanese dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "592",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDEC\uD83C\uDDFE"
      }, {
        countryNameEn: "Hong Kong",
        countryNameLocal: "香港, Hong Kong",
        countryCode: "HK",
        currencyCode: "HKD",
        currencyNameEn: "Hong Kong dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "zh-hant",
        officialLanguageNameEn: "",
        officialLanguageNameLocal: "",
        countryCallingCode: "852",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDED\uD83C\uDDF0"
      }, {
        countryNameEn: "Honduras",
        countryNameLocal: "Honduras",
        countryCode: "HN",
        currencyCode: "HNL",
        currencyNameEn: "Honduran lempira",
        tinType: "RTN",
        tinName: "Registro Tributario Nacional",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Espa\xf1ol",
        countryCallingCode: "504",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDED\uD83C\uDDF3"
      }, {
        countryNameEn: "Croatia",
        countryNameLocal: "Hrvatska",
        countryCode: "HR",
        currencyCode: "HRK",
        currencyNameEn: "Croatian kuna",
        tinType: "PDV-ID; OIB",
        tinName: "PDV Id. Broj OIB",
        officialLanguageCode: "hr",
        officialLanguageNameEn: "Croatian",
        officialLanguageNameLocal: "hrvatski jezik",
        countryCallingCode: "385",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDED\uD83C\uDDF7"
      }, {
        countryNameEn: "Haiti",
        countryNameLocal: "Ha\xefti, Ayiti",
        countryCode: "HT",
        currencyCode: "HTG",
        currencyNameEn: "Haitian gourde",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "509",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDED\uD83C\uDDF9"
      }, {
        countryNameEn: "Hungary",
        countryNameLocal: "Magyarorsz\xe1g",
        countryCode: "HU",
        currencyCode: "HUF",
        currencyNameEn: "Hungarian forint",
        tinType: "ANUM",
        tinName: "K\xf6z\xf6ss\xe9gi ad\xf3sz\xe1m",
        officialLanguageCode: "hu",
        officialLanguageNameEn: "Hungarian",
        officialLanguageNameLocal: "magyar",
        countryCallingCode: "36",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDED\uD83C\uDDFA"
      }, {
        countryNameEn: "Indonesia",
        countryNameLocal: "Indonesia",
        countryCode: "ID",
        currencyCode: "IDR",
        currencyNameEn: "Indonesian rupiah",
        tinType: "NPWP",
        tinName: "Nomor Pokok Wajib Pajak",
        officialLanguageCode: "id",
        officialLanguageNameEn: "Indonesian",
        officialLanguageNameLocal: "Bahasa Indonesia",
        countryCallingCode: "62",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDEE\uD83C\uDDE9"
      }, {
        countryNameEn: "Ireland",
        countryNameLocal: "Ireland, \xc9ire",
        countryCode: "IE",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "VAT or CBL",
        tinName: "Value added tax identification no.",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "353",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDEE\uD83C\uDDEA"
      }, {
        countryNameEn: "Israel",
        countryNameLocal: "ישראל",
        countryCode: "IL",
        currencyCode: "ILS",
        currencyNameEn: "Israeli new shekel",
        tinType: "",
        tinName: "מס' עוסק מורשה / ח\"פ",
        officialLanguageCode: "he",
        officialLanguageNameEn: "Hebrew",
        officialLanguageNameLocal: "עברית",
        countryCallingCode: "972",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDEE\uD83C\uDDF1"
      }, {
        countryNameEn: "Isle of Man",
        countryNameLocal: "Isle of Man",
        countryCode: "IM",
        currencyCode: "GBP",
        currencyNameEn: "Pound sterling",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "44",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDEE\uD83C\uDDF2"
      }, {
        countryNameEn: "India",
        countryNameLocal: "भारत, India",
        countryCode: "IN",
        currencyCode: "INR",
        currencyNameEn: "Indian rupee",
        tinType: "VAT TIN / CST TIN",
        tinName: "Value Added Tax - Taxpayer Identification Number / Central Sales Tax - Taxpayer Identification Number (In most states)Not applicable",
        officialLanguageCode: "hi",
        officialLanguageNameEn: "Hindi",
        officialLanguageNameLocal: "हिन्दी, हिंदी",
        countryCallingCode: "91",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDEE\uD83C\uDDF3"
      }, {
        countryNameEn: "British Indian Ocean Territories",
        countryNameLocal: "British Indian Ocean Territories",
        countryCode: "IO",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "246",
        areaCodes: [],
        region: "Indian Ocean",
        flag: "\uD83C\uDDEE\uD83C\uDDF4"
      }, {
        countryNameEn: "Iraq",
        countryNameLocal: "العراق, Iraq",
        countryCode: "IQ",
        currencyCode: "IQD",
        currencyNameEn: "Iraqi dinar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "964",
        areaCodes: [],
        region: "Arab States",
        flag: "\uD83C\uDDEE\uD83C\uDDF6"
      }, {
        countryNameEn: "Iran (Islamic Republic of)",
        countryNameLocal: "ایران",
        countryCode: "IR",
        currencyCode: "IRR",
        currencyNameEn: "Iranian rial",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fa",
        officialLanguageNameEn: "Persian",
        officialLanguageNameLocal: "فارسی",
        countryCallingCode: "98",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDEE\uD83C\uDDF7"
      }, {
        countryNameEn: "Iceland",
        countryNameLocal: "\xcdsland",
        countryCode: "IS",
        currencyCode: "ISK",
        currencyNameEn: "Icelandic kr\xf3na",
        tinType: "VSK / VASK",
        tinName: "Vir\xf0isaukaskattsn\xfamer",
        officialLanguageCode: "is",
        officialLanguageNameEn: "Icelandic",
        officialLanguageNameLocal: "\xcdslenska",
        countryCallingCode: "354",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDEE\uD83C\uDDF8"
      }, {
        countryNameEn: "Italy",
        countryNameLocal: "Italia",
        countryCode: "IT",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "P.IVA",
        tinName: "Partita IVA(IVA = Imposta sul Valore Aggiunto)",
        officialLanguageCode: "it",
        officialLanguageNameEn: "Italian",
        officialLanguageNameLocal: "Italiano",
        countryCallingCode: "39",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDEE\uD83C\uDDF9"
      }, {
        countryNameEn: "Jersey",
        countryNameLocal: "Jersey",
        countryCode: "JE",
        currencyCode: "GBP",
        currencyNameEn: "Pound sterling",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "44",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDEF\uD83C\uDDEA"
      }, {
        countryNameEn: "Jamaica",
        countryNameLocal: "Jamaica",
        countryCode: "JM",
        currencyCode: "JMD",
        currencyNameEn: "Jamaican dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "876",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDEF\uD83C\uDDF2"
      }, {
        countryNameEn: "Jordan",
        countryNameLocal: "الأُرْدُن",
        countryCode: "JO",
        currencyCode: "JOD",
        currencyNameEn: "Jordanian dinar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "962",
        areaCodes: [],
        region: "Arab States",
        flag: "\uD83C\uDDEF\uD83C\uDDF4"
      }, {
        countryNameEn: "Japan",
        countryNameLocal: "日本",
        countryCode: "JP",
        currencyCode: "JPY",
        currencyNameEn: "Japanese yen",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ja",
        officialLanguageNameEn: "Japanese",
        officialLanguageNameLocal: "日本語 (にほんご)",
        countryCallingCode: "81",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDEF\uD83C\uDDF5"
      }, {
        countryNameEn: "Kenya",
        countryNameLocal: "Kenya",
        countryCode: "KE",
        currencyCode: "KES",
        currencyNameEn: "Kenyan shilling",
        tinType: "",
        tinName: "",
        officialLanguageCode: "sw",
        officialLanguageNameEn: "Swahili",
        officialLanguageNameLocal: "Kiswahili",
        countryCallingCode: "254",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDF0\uD83C\uDDEA"
      }, {
        countryNameEn: "Kyrgyzstan",
        countryNameLocal: "Кыргызстан, Киргизия",
        countryCode: "KG",
        currencyCode: "KGS",
        currencyNameEn: "Kyrgyzstani som",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ky",
        officialLanguageNameEn: "Kirghiz, Kyrgyz",
        officialLanguageNameLocal: "Кыргызча, Кыргыз тили",
        countryCallingCode: "996",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF0\uD83C\uDDEC"
      }, {
        countryNameEn: "Cambodia",
        countryNameLocal: "កម្ពុជា",
        countryCode: "KH",
        currencyCode: "KHR",
        currencyNameEn: "Cambodian riel",
        tinType: "",
        tinName: "",
        officialLanguageCode: "km",
        officialLanguageNameEn: "Central Khmer",
        officialLanguageNameLocal: "ខ្មែរ, ខេមរភាសា, ភាសាខ្មែរ",
        countryCallingCode: "855",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF0\uD83C\uDDED"
      }, {
        countryNameEn: "North Korea",
        countryNameLocal: "조선민주주의인민공화국",
        countryCode: "KP",
        currencyCode: "KPW",
        currencyNameEn: "North Korean won",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ko",
        officialLanguageNameEn: "Korean",
        officialLanguageNameLocal: "조선어",
        countryCallingCode: "850",
        areaCodes: [],
        region: "Asia",
        flag: "\uD83C\uDDF0\uD83C\uDDF5"
      }, {
        countryNameEn: "South Korea",
        countryNameLocal: "대한민국",
        countryCode: "KR",
        currencyCode: "KRW",
        currencyNameEn: "South Korean won",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ko",
        officialLanguageNameEn: "Korean",
        officialLanguageNameLocal: "한국어",
        countryCallingCode: "82",
        areaCodes: [],
        region: "Asia",
        flag: "\uD83C\uDDF0\uD83C\uDDF7"
      }, {
        countryNameEn: "Kiribati",
        countryNameLocal: "Kiribati",
        countryCode: "KI",
        currencyCode: "AUD",
        currencyNameEn: "Australian dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "686",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF0\uD83C\uDDEE"
      }, {
        countryNameEn: "Saint Kitts and Nevis",
        countryNameLocal: "Saint Kitts and Nevis",
        countryCode: "KN",
        currencyCode: "XCD",
        currencyNameEn: "East Caribbean dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1869",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDF0\uD83C\uDDF3"
      }, {
        countryNameEn: "Kuwait",
        countryNameLocal: "الكويت",
        countryCode: "KW",
        currencyCode: "KWD",
        currencyNameEn: "Kuwaiti dinar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "965",
        areaCodes: [],
        region: "Arab States",
        flag: "\uD83C\uDDF0\uD83C\uDDFC"
      }, {
        countryNameEn: "Kazakhstan",
        countryNameLocal: "Қазақстан, Казахстан",
        countryCode: "KZ",
        currencyCode: "KZT",
        currencyNameEn: "Kazakhstani tenge",
        tinType: "",
        tinName: "",
        officialLanguageCode: "kk",
        officialLanguageNameEn: "Kazakh",
        officialLanguageNameLocal: "қазақ тілі",
        countryCallingCode: "7",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF0\uD83C\uDDFF"
      }, {
        countryNameEn: "Lebanon",
        countryNameLocal: "لبنان, Liban",
        countryCode: "LB",
        currencyCode: "LBP",
        currencyNameEn: "Lebanese pound",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "961",
        areaCodes: [],
        region: "Arab States",
        flag: "\uD83C\uDDF1\uD83C\uDDE7"
      }, {
        countryNameEn: "Saint Lucia",
        countryNameLocal: "Saint Lucia",
        countryCode: "LC",
        currencyCode: "XCD",
        currencyNameEn: "East Caribbean dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1758",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDF1\uD83C\uDDE8"
      }, {
        countryNameEn: "Liechtenstein",
        countryNameLocal: "Liechtenstein",
        countryCode: "LI",
        currencyCode: "CHF",
        currencyNameEn: "Swiss franc",
        tinType: "",
        tinName: "",
        officialLanguageCode: "de",
        officialLanguageNameEn: "German",
        officialLanguageNameLocal: "Deutsch",
        countryCallingCode: "423",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDF1\uD83C\uDDEE"
      }, {
        countryNameEn: "Sri Lanka",
        countryNameLocal: "ශ්‍රී ලංකා, இலங்கை",
        countryCode: "LK",
        currencyCode: "LKR",
        currencyNameEn: "Sri Lankan rupee",
        tinType: "",
        tinName: "",
        officialLanguageCode: "si",
        officialLanguageNameEn: "Sinhala, Sinhalese",
        officialLanguageNameLocal: "සිංහල",
        countryCallingCode: "94",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF1\uD83C\uDDF0"
      }, {
        countryNameEn: "Liberia",
        countryNameLocal: "Liberia",
        countryCode: "LR",
        currencyCode: "LRD",
        currencyNameEn: "Liberian dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "231",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDF1\uD83C\uDDF7"
      }, {
        countryNameEn: "Lesotho",
        countryNameLocal: "Lesotho",
        countryCode: "LS",
        currencyCode: "LSL",
        currencyNameEn: "Lesotho loti",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "266",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDF1\uD83C\uDDF8"
      }, {
        countryNameEn: "Lithuania",
        countryNameLocal: "Lietuva",
        countryCode: "LT",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "PVM kodas",
        tinName: "PVM (abbrev. Pridėtinės vertės mokestis) mokėtojo kodas",
        officialLanguageCode: "lt",
        officialLanguageNameEn: "Lithuanian",
        officialLanguageNameLocal: "lietuvių kalba",
        countryCallingCode: "370",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDF1\uD83C\uDDF9"
      }, {
        countryNameEn: "Luxembourg",
        countryNameLocal: "L\xebtzebuerg, Luxembourg, Luxemburg",
        countryCode: "LU",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "No. TVA",
        tinName: "Num\xe9ro d'identification \xe0 la taxe sur la valeur ajout\xe9e",
        officialLanguageCode: "lb",
        officialLanguageNameEn: "Luxembourgish, Letzeburgesch",
        officialLanguageNameLocal: "L\xebtzebuergesch",
        countryCallingCode: "352",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDF1\uD83C\uDDFA"
      }, {
        countryNameEn: "Latvia",
        countryNameLocal: "Latvija",
        countryCode: "LV",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "PVN",
        tinName: "Pievienotās vērtības nodokļa (PVN) reģistrācijas numurs",
        officialLanguageCode: "lv",
        officialLanguageNameEn: "Latvian",
        officialLanguageNameLocal: "latviešu valoda",
        countryCallingCode: "371",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDF1\uD83C\uDDFB"
      }, {
        countryNameEn: "Libya",
        countryNameLocal: "ليبيا",
        countryCode: "LY",
        currencyCode: "LYD",
        currencyNameEn: "Libyan dinar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "218",
        areaCodes: [],
        region: "Arab States",
        flag: "\uD83C\uDDF1\uD83C\uDDFE"
      }, {
        countryNameEn: "Morocco",
        countryNameLocal: "Maroc, ⵍⵎⵖⵔⵉⴱ, المغرب",
        countryCode: "MA",
        currencyCode: "MAD",
        currencyNameEn: "Moroccan dirham",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "212",
        areaCodes: [],
        region: "Arab States",
        flag: "\uD83C\uDDF2\uD83C\uDDE6"
      }, {
        countryNameEn: "Monaco",
        countryNameLocal: "Monaco",
        countryCode: "MC",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "377",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDF2\uD83C\uDDE8"
      }, {
        countryNameEn: "Montenegro",
        countryNameLocal: "Crna Gora, Црна Гора",
        countryCode: "ME",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "srp",
        officialLanguageNameEn: "српски језик",
        officialLanguageNameLocal: "",
        countryCallingCode: "382",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDF2\uD83C\uDDEA"
      }, {
        countryNameEn: "Saint Martin (French part)",
        countryNameLocal: "Saint-Martin",
        countryCode: "MF",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "590",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDF2\uD83C\uDDEB"
      }, {
        countryNameEn: "Madagascar",
        countryNameLocal: "Madagasikara, Madagascar",
        countryCode: "MG",
        currencyCode: "MGA",
        currencyNameEn: "Malagasy ariary",
        tinType: "",
        tinName: "",
        officialLanguageCode: "mg",
        officialLanguageNameEn: "Malagasy",
        officialLanguageNameLocal: "fiteny malagasy",
        countryCallingCode: "261",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDF2\uD83C\uDDEC"
      }, {
        countryNameEn: "Mali",
        countryNameLocal: "Mali",
        countryCode: "ML",
        currencyCode: "XOF",
        currencyNameEn: "CFA franc BCEAO",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "223",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDF2\uD83C\uDDF1"
      }, {
        countryNameEn: "Myanmar",
        countryNameLocal: "မြန်မာ",
        countryCode: "MM",
        currencyCode: "MMK",
        currencyNameEn: "Myanmar kyat",
        tinType: "",
        tinName: "",
        officialLanguageCode: "my",
        officialLanguageNameEn: "Burmese",
        officialLanguageNameLocal: "ဗမာစာ",
        countryCallingCode: "95",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF2\uD83C\uDDF2"
      }, {
        countryNameEn: "Mongolia",
        countryNameLocal: "Монгол Улс",
        countryCode: "MN",
        currencyCode: "MNT",
        currencyNameEn: "Mongolian t\xf6gr\xf6g",
        tinType: "",
        tinName: "",
        officialLanguageCode: "mn",
        officialLanguageNameEn: "Mongolian",
        officialLanguageNameLocal: "Монгол хэл",
        countryCallingCode: "976",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF2\uD83C\uDDF3"
      }, {
        countryNameEn: "Macao",
        countryNameLocal: "澳門, Macau",
        countryCode: "MO",
        currencyCode: "MOP",
        currencyNameEn: "Macanese pataca",
        tinType: "",
        tinName: "",
        officialLanguageCode: "zh-hant",
        officialLanguageNameEn: "",
        officialLanguageNameLocal: "",
        countryCallingCode: "853",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF2\uD83C\uDDF4"
      }, {
        countryNameEn: "Martinique",
        countryNameLocal: "Martinique",
        countryCode: "MQ",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "596",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDF2\uD83C\uDDF6"
      }, {
        countryNameEn: "Mauritania",
        countryNameLocal: "موريتانيا, Mauritanie",
        countryCode: "MR",
        currencyCode: "MRU",
        currencyNameEn: "",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "222",
        areaCodes: [],
        region: "Arab States",
        flag: "\uD83C\uDDF2\uD83C\uDDF7"
      }, {
        countryNameEn: "Montserrat",
        countryNameLocal: "Montserrat",
        countryCode: "MS",
        currencyCode: "XCD",
        currencyNameEn: "East Caribbean dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1664",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDF2\uD83C\uDDF8"
      }, {
        countryNameEn: "Malta",
        countryNameLocal: "Malta",
        countryCode: "MT",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "Vat No.",
        tinName: "Vat reg. no.",
        officialLanguageCode: "mt",
        officialLanguageNameEn: "Maltese",
        officialLanguageNameLocal: "Malti",
        countryCallingCode: "356",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDF2\uD83C\uDDF9"
      }, {
        countryNameEn: "Mauritius",
        countryNameLocal: "Maurice, Mauritius",
        countryCode: "MU",
        currencyCode: "MUR",
        currencyNameEn: "Mauritian rupee",
        tinType: "",
        tinName: "",
        officialLanguageCode: "mfe",
        officialLanguageNameEn: "",
        officialLanguageNameLocal: "",
        countryCallingCode: "230",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDF2\uD83C\uDDFA"
      }, {
        countryNameEn: "Maldives",
        countryNameLocal: "",
        countryCode: "MV",
        currencyCode: "MVR",
        currencyNameEn: "Maldivian rufiyaa",
        tinType: "",
        tinName: "",
        officialLanguageCode: "dv",
        officialLanguageNameEn: "Divehi, Dhivehi, Maldivian",
        officialLanguageNameLocal: "ދިވެހި",
        countryCallingCode: "960",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF2\uD83C\uDDFB"
      }, {
        countryNameEn: "Malawi",
        countryNameLocal: "Malawi",
        countryCode: "MW",
        currencyCode: "MWK",
        currencyNameEn: "Malawian kwacha",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "265",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDF2\uD83C\uDDFC"
      }, {
        countryNameEn: "Mexico",
        countryNameLocal: "M\xe9xico",
        countryCode: "MX",
        currencyCode: "MXN",
        currencyNameEn: "Mexican peso",
        tinType: "RFC",
        tinName: "Registro Federal de Contribuyentes",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Espa\xf1ol",
        countryCallingCode: "52",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDF2\uD83C\uDDFD"
      }, {
        countryNameEn: "Malaysia",
        countryNameLocal: "",
        countryCode: "MY",
        currencyCode: "MYR",
        currencyNameEn: "Malaysian ringgit",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ms",
        officialLanguageNameEn: "Malay",
        officialLanguageNameLocal: "Bahasa Melayu, بهاس ملايو‎",
        countryCallingCode: "60",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF2\uD83C\uDDFE"
      }, {
        countryNameEn: "Mozambique",
        countryNameLocal: "Mozambique",
        countryCode: "MZ",
        currencyCode: "MZN",
        currencyNameEn: "Mozambican metical",
        tinType: "",
        tinName: "",
        officialLanguageCode: "pt",
        officialLanguageNameEn: "Portuguese",
        officialLanguageNameLocal: "Portugu\xeas",
        countryCallingCode: "258",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDF2\uD83C\uDDFF"
      }, {
        countryNameEn: "Namibia",
        countryNameLocal: "Namibia",
        countryCode: "NA",
        currencyCode: "NAD",
        currencyNameEn: "Namibian dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "264",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDF3\uD83C\uDDE6"
      }, {
        countryNameEn: "New Caledonia",
        countryNameLocal: "Nouvelle-Cal\xe9donie",
        countryCode: "NC",
        currencyCode: "XPF",
        currencyNameEn: "CFP franc (franc Pacifique)",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "687",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF3\uD83C\uDDE8"
      }, {
        countryNameEn: "Norfolk Island",
        countryNameLocal: "Norfolk Island",
        countryCode: "NF",
        currencyCode: "AUD",
        currencyNameEn: "Australian dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "672",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF3\uD83C\uDDEB"
      }, {
        countryNameEn: "Nigeria",
        countryNameLocal: "Nigeria",
        countryCode: "NG",
        currencyCode: "NGN",
        currencyNameEn: "Nigerian naira",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "234",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDF3\uD83C\uDDEC"
      }, {
        countryNameEn: "Nicaragua",
        countryNameLocal: "Nicaragua",
        countryCode: "NI",
        currencyCode: "NIO",
        currencyNameEn: "Nicaraguan c\xf3rdoba",
        tinType: "RUC",
        tinName: "Registro Unico de Contribuyentes",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Espa\xf1ol",
        countryCallingCode: "505",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDF3\uD83C\uDDEE"
      }, {
        countryNameEn: "Norway",
        countryNameLocal: "Norge, Noreg",
        countryCode: "NO",
        currencyCode: "NOK",
        currencyNameEn: "Norwegian krone",
        tinType: "Orgnr",
        tinName: "Organisasjonsnummer",
        officialLanguageCode: "nb",
        officialLanguageNameEn: "Norwegian Bokm\xe5l",
        officialLanguageNameLocal: "Norsk Bokm\xe5l",
        countryCallingCode: "47",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDF3\uD83C\uDDF4"
      }, {
        countryNameEn: "Nepal",
        countryNameLocal: "",
        countryCode: "NP",
        currencyCode: "NPR",
        currencyNameEn: "Nepalese rupee",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ne",
        officialLanguageNameEn: "Nepali",
        officialLanguageNameLocal: "नेपाली",
        countryCallingCode: "977",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF3\uD83C\uDDF5"
      }, {
        countryNameEn: "Nauru",
        countryNameLocal: "Nauru",
        countryCode: "NR",
        currencyCode: "AUD",
        currencyNameEn: "Australian dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "na",
        officialLanguageNameEn: "Nauru",
        officialLanguageNameLocal: "Dorerin Naoero",
        countryCallingCode: "674",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF3\uD83C\uDDF7"
      }, {
        countryNameEn: "Niue",
        countryNameLocal: "Niue",
        countryCode: "NU",
        currencyCode: "NZD",
        currencyNameEn: "New Zealand dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "niu",
        officialLanguageNameEn: "",
        officialLanguageNameLocal: "",
        countryCallingCode: "683",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF3\uD83C\uDDFA"
      }, {
        countryNameEn: "New Zealand",
        countryNameLocal: "New Zealand",
        countryCode: "NZ",
        currencyCode: "NZD",
        currencyNameEn: "New Zealand dollar",
        tinType: "NZBN",
        tinName: "NZ Business Number",
        officialLanguageCode: "mi",
        officialLanguageNameEn: "Maori",
        officialLanguageNameLocal: "te reo Māori",
        countryCallingCode: "64",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF3\uD83C\uDDFF"
      }, {
        countryNameEn: "Oman",
        countryNameLocal: "سلطنة عُمان",
        countryCode: "OM",
        currencyCode: "OMR",
        currencyNameEn: "Omani rial",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "968",
        areaCodes: [],
        region: "Arab States",
        flag: "\uD83C\uDDF4\uD83C\uDDF2"
      }, {
        countryNameEn: "Panama",
        countryNameLocal: "Panama",
        countryCode: "PA",
        currencyCode: "PAB",
        currencyNameEn: "Panamanian balboa",
        tinType: "RUC",
        tinName: "Registro Unico de Contribuyentes",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Espa\xf1ol",
        countryCallingCode: "507",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDF5\uD83C\uDDE6"
      }, {
        countryNameEn: "Peru",
        countryNameLocal: "Per\xfa",
        countryCode: "PE",
        currencyCode: "PEN",
        currencyNameEn: "Peruvian sol",
        tinType: "RUC",
        tinName: "Registro Unico de Contribuyentes",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Espa\xf1ol",
        countryCallingCode: "51",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDF5\uD83C\uDDEA"
      }, {
        countryNameEn: "French Polynesia",
        countryNameLocal: "Polyn\xe9sie fran\xe7aise",
        countryCode: "PF",
        currencyCode: "XPF",
        currencyNameEn: "CFP franc (franc Pacifique)",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "689",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF5\uD83C\uDDEB"
      }, {
        countryNameEn: "Papua New Guinea",
        countryNameLocal: "Papua New Guinea",
        countryCode: "PG",
        currencyCode: "PGK",
        currencyNameEn: "Papua New Guinean kina",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "675",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF5\uD83C\uDDEC"
      }, {
        countryNameEn: "Pakistan",
        countryNameLocal: "پاکستان",
        countryCode: "PK",
        currencyCode: "PKR",
        currencyNameEn: "Pakistani rupee",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "92",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF5\uD83C\uDDF0"
      }, {
        countryNameEn: "Poland",
        countryNameLocal: "Polska",
        countryCode: "PL",
        currencyCode: "PLN",
        currencyNameEn: "Polish złoty",
        tinType: "NIP",
        tinName: "numer identyfikacji podatkowej",
        officialLanguageCode: "pl",
        officialLanguageNameEn: "Polish",
        officialLanguageNameLocal: "język polski, polszczyzna",
        countryCallingCode: "48",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDF5\uD83C\uDDF1"
      }, {
        countryNameEn: "Saint Pierre and Miquelon",
        countryNameLocal: "Saint-Pierre-et-Miquelon",
        countryCode: "PM",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "508",
        areaCodes: [],
        region: "North America",
        flag: "\uD83C\uDDF5\uD83C\uDDF2"
      }, {
        countryNameEn: "Pitcairn",
        countryNameLocal: "Pitcairn",
        countryCode: "PN",
        currencyCode: "NZD",
        currencyNameEn: "New Zealand dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "64",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF5\uD83C\uDDF3"
      }, {
        countryNameEn: "Puerto Rico",
        countryNameLocal: "Puerto Rico",
        countryCode: "PR",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Espa\xf1ol",
        countryCallingCode: "1",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDF5\uD83C\uDDF7"
      }, {
        countryNameEn: "Palestine, State of",
        countryNameLocal: "Palestinian Territory",
        countryCode: "PS",
        currencyCode: "",
        currencyNameEn: "",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "970",
        areaCodes: [],
        region: "Arab States",
        flag: "\uD83C\uDDF5\uD83C\uDDF8"
      }, {
        countryNameEn: "Portugal",
        countryNameLocal: "Portugal",
        countryCode: "PT",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "NIPC",
        tinName: "N\xfamero de Identifica\xe7\xe3o de Pessoa Coletiva (NIPC)",
        officialLanguageCode: "pt",
        officialLanguageNameEn: "Portuguese",
        officialLanguageNameLocal: "Portugu\xeas",
        countryCallingCode: "351",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDF5\uD83C\uDDF9"
      }, {
        countryNameEn: "Palau",
        countryNameLocal: "Palau",
        countryCode: "PW",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "680",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF5\uD83C\uDDFC"
      }, {
        countryNameEn: "Paraguay",
        countryNameLocal: "Paraguay",
        countryCode: "PY",
        currencyCode: "PYG",
        currencyNameEn: "Paraguayan guaran\xed",
        tinType: "RUC",
        tinName: "Registro Unico de Contribuyentes",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Espa\xf1ol",
        countryCallingCode: "595",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDF5\uD83C\uDDFE"
      }, {
        countryNameEn: "Qatar",
        countryNameLocal: "قطر",
        countryCode: "QA",
        currencyCode: "QAR",
        currencyNameEn: "Qatari riyal",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "974",
        areaCodes: [],
        region: "Arab States",
        flag: "\uD83C\uDDF6\uD83C\uDDE6"
      }, {
        countryNameEn: "R\xe9union",
        countryNameLocal: "La R\xe9union",
        countryCode: "RE",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "262",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF7\uD83C\uDDEA"
      }, {
        countryNameEn: "Romania",
        countryNameLocal: "Rom\xe2nia",
        countryCode: "RO",
        currencyCode: "RON",
        currencyNameEn: "Romanian leu",
        tinType: "CIF",
        tinName: "Codul de identificare fiscală",
        officialLanguageCode: "ro",
        officialLanguageNameEn: "Romanian, Moldavian, Moldovan",
        officialLanguageNameLocal: "Rom\xe2nă",
        countryCallingCode: "40",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDF7\uD83C\uDDF4"
      }, {
        countryNameEn: "Serbia",
        countryNameLocal: "Србија",
        countryCode: "RS",
        currencyCode: "RSD",
        currencyNameEn: "Serbian dinar",
        tinType: "PIB",
        tinName: "Poreski identifikacioni broj",
        officialLanguageCode: "sr",
        officialLanguageNameEn: "Serbian",
        officialLanguageNameLocal: "српски језик",
        countryCallingCode: "381",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDF7\uD83C\uDDF8"
      }, {
        countryNameEn: "Russia",
        countryNameLocal: "Россия",
        countryCode: "RU",
        currencyCode: "RUB",
        currencyNameEn: "Russian ruble",
        tinType: "ИНН",
        tinName: "Идентификационный номер налогоплательщика",
        officialLanguageCode: "ru",
        officialLanguageNameEn: "Russian",
        officialLanguageNameLocal: "русский",
        countryCallingCode: "7",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDF7\uD83C\uDDFA"
      }, {
        countryNameEn: "Rwanda",
        countryNameLocal: "Rwanda",
        countryCode: "RW",
        currencyCode: "RWF",
        currencyNameEn: "Rwandan franc",
        tinType: "",
        tinName: "",
        officialLanguageCode: "rw",
        officialLanguageNameEn: "Kinyarwanda",
        officialLanguageNameLocal: "Ikinyarwanda",
        countryCallingCode: "250",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDF7\uD83C\uDDFC"
      }, {
        countryNameEn: "Saudi Arabia",
        countryNameLocal: "السعودية",
        countryCode: "SA",
        currencyCode: "SAR",
        currencyNameEn: "Saudi riyal",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "966",
        areaCodes: [],
        region: "Arab States",
        flag: "\uD83C\uDDF8\uD83C\uDDE6"
      }, {
        countryNameEn: "Solomon Islands",
        countryNameLocal: "Solomon Islands",
        countryCode: "SB",
        currencyCode: "SBD",
        currencyNameEn: "Solomon Islands dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "677",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF8\uD83C\uDDE7"
      }, {
        countryNameEn: "Seychelles",
        countryNameLocal: "Seychelles",
        countryCode: "SC",
        currencyCode: "SCR",
        currencyNameEn: "Seychelles rupee",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "248",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDF8\uD83C\uDDE8"
      }, {
        countryNameEn: "Sweden",
        countryNameLocal: "Sverige",
        countryCode: "SE",
        currencyCode: "SEK",
        currencyNameEn: "Swedish krona/kronor",
        tinType: "Momsnr.",
        tinName: "VAT-nummer",
        officialLanguageCode: "sv",
        officialLanguageNameEn: "Swedish",
        officialLanguageNameLocal: "Svenska",
        countryCallingCode: "46",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDF8\uD83C\uDDEA"
      }, {
        countryNameEn: "Singapore",
        countryNameLocal: "Singapore",
        countryCode: "SG",
        currencyCode: "SGD",
        currencyNameEn: "Singapore dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "zh-hans",
        officialLanguageNameEn: "",
        officialLanguageNameLocal: "",
        countryCallingCode: "65",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF8\uD83C\uDDEC"
      }, {
        countryNameEn: "Saint Helena, Ascension and Tristan da Cunha",
        countryNameLocal: "Saint Helena",
        countryCode: "SH",
        currencyCode: "SHP",
        currencyNameEn: "Saint Helena pound",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "290",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDF8\uD83C\uDDED"
      }, {
        countryNameEn: "Slovenia",
        countryNameLocal: "Slovenija",
        countryCode: "SI",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "ID za DDV",
        tinName: "Davčna številka",
        officialLanguageCode: "sl",
        officialLanguageNameEn: "Slovenian",
        officialLanguageNameLocal: "Slovenski Jezik, Slovenščina",
        countryCallingCode: "386",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDF8\uD83C\uDDEE"
      }, {
        countryNameEn: "Svalbard and Jan Mayen",
        countryNameLocal: "Svalbard and Jan Mayen",
        countryCode: "SJ",
        currencyCode: "NOK",
        currencyNameEn: "Norwegian krone",
        tinType: "",
        tinName: "",
        officialLanguageCode: "no",
        officialLanguageNameEn: "Norwegian",
        officialLanguageNameLocal: "Norsk",
        countryCallingCode: "4779",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDF8\uD83C\uDDEF"
      }, {
        countryNameEn: "Slovakia",
        countryNameLocal: "Slovensko",
        countryCode: "SK",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "IČ DPH",
        tinName: "Identifikačn\xe9 č\xedslo pre daň z pridanej hodnoty",
        officialLanguageCode: "sk",
        officialLanguageNameEn: "Slovak",
        officialLanguageNameLocal: "Slovenčina, Slovensk\xfd Jazyk",
        countryCallingCode: "421",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDF8\uD83C\uDDF0"
      }, {
        countryNameEn: "Sierra Leone",
        countryNameLocal: "Sierra Leone",
        countryCode: "SL",
        currencyCode: "SLL",
        currencyNameEn: "Sierra Leonean leone",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "232",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDF8\uD83C\uDDF1"
      }, {
        countryNameEn: "Republic of San Marino",
        countryNameLocal: "Repubblica di San Marino",
        countryCode: "SM",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "C.O.E.",
        tinName: "Codice operatore economico",
        officialLanguageCode: "it",
        officialLanguageNameEn: "Italian",
        officialLanguageNameLocal: "Italiano",
        countryCallingCode: "378",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDF8\uD83C\uDDF2"
      }, {
        countryNameEn: "Senegal",
        countryNameLocal: "S\xe9n\xe9gal",
        countryCode: "SN",
        currencyCode: "XOF",
        currencyNameEn: "CFA franc BCEAO",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "221",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDF8\uD83C\uDDF3"
      }, {
        countryNameEn: "Somalia",
        countryNameLocal: "Somalia, الصومال",
        countryCode: "SO",
        currencyCode: "SOS",
        currencyNameEn: "Somali shilling",
        tinType: "",
        tinName: "",
        officialLanguageCode: "so",
        officialLanguageNameEn: "Somali",
        officialLanguageNameLocal: "Soomaaliga, af Soomaali",
        countryCallingCode: "252",
        areaCodes: [],
        region: "Arab States",
        flag: "\uD83C\uDDF8\uD83C\uDDF4"
      }, {
        countryNameEn: "Suriname",
        countryNameLocal: "Suriname",
        countryCode: "SR",
        currencyCode: "SRD",
        currencyNameEn: "Surinamese dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "nl",
        officialLanguageNameEn: "Dutch, Flemish",
        officialLanguageNameLocal: "Nederlands, Vlaams",
        countryCallingCode: "597",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDF8\uD83C\uDDF7"
      }, {
        countryNameEn: "South Sudan",
        countryNameLocal: "South Sudan",
        countryCode: "SS",
        currencyCode: "SSP",
        currencyNameEn: "South Sudanese pound",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "211",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDF8\uD83C\uDDF8"
      }, {
        countryNameEn: "Sao Tome and Principe",
        countryNameLocal: "S\xe3o Tom\xe9 e Pr\xedncipe",
        countryCode: "ST",
        currencyCode: "STN",
        currencyNameEn: "",
        tinType: "",
        tinName: "",
        officialLanguageCode: "pt",
        officialLanguageNameEn: "Portuguese",
        officialLanguageNameLocal: "Portugu\xeas",
        countryCallingCode: "239",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDF8\uD83C\uDDF9"
      }, {
        countryNameEn: "El Salvador",
        countryNameLocal: "El Salvador",
        countryCode: "SV",
        currencyCode: "SVC",
        currencyNameEn: "Salvadoran col\xf3n",
        tinType: "NIT",
        tinName: "N\xfamero de Identificaci\xf3n Tributaria",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Espa\xf1ol",
        countryCallingCode: "503",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDF8\uD83C\uDDFB"
      }, {
        countryNameEn: "Sint Maarten (Dutch part)",
        countryNameLocal: "Sint Maarten",
        countryCode: "SX",
        currencyCode: "ANG",
        currencyNameEn: "Netherlands Antillean guilder",
        tinType: "",
        tinName: "",
        officialLanguageCode: "nl",
        officialLanguageNameEn: "Dutch, Flemish",
        officialLanguageNameLocal: "Nederlands, Vlaams",
        countryCallingCode: "1721",
        areaCodes: [],
        region: "Unknown",
        flag: "\uD83C\uDDF8\uD83C\uDDFD"
      }, {
        countryNameEn: "Syrian Arab Republic",
        countryNameLocal: "سوريا, Sūriyya",
        countryCode: "SY",
        currencyCode: "SYP",
        currencyNameEn: "Syrian pound",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "963",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF8\uD83C\uDDFE"
      }, {
        countryNameEn: "Chad",
        countryNameLocal: "Tchad, تشاد",
        countryCode: "TD",
        currencyCode: "XAF",
        currencyNameEn: "CFA franc BEAC",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "235",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDF9\uD83C\uDDE9"
      }, {
        countryNameEn: "Togo",
        countryNameLocal: "Togo",
        countryCode: "TG",
        currencyCode: "XOF",
        currencyNameEn: "CFA franc BCEAO",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "228",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDF9\uD83C\uDDEC"
      }, {
        countryNameEn: "Thailand",
        countryNameLocal: "ประเทศไทย",
        countryCode: "TH",
        currencyCode: "THB",
        currencyNameEn: "Thai baht",
        tinType: "",
        tinName: "",
        officialLanguageCode: "th",
        officialLanguageNameEn: "Thai",
        officialLanguageNameLocal: "ไทย",
        countryCallingCode: "66",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF9\uD83C\uDDED"
      }, {
        countryNameEn: "Tajikistan",
        countryNameLocal: ",",
        countryCode: "TJ",
        currencyCode: "TJS",
        currencyNameEn: "Tajikistani somoni",
        tinType: "",
        tinName: "",
        officialLanguageCode: "tg",
        officialLanguageNameEn: "Tajik",
        officialLanguageNameLocal: "тоҷикӣ, to\xe7ikī, تاجیکی‎",
        countryCallingCode: "992",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF9\uD83C\uDDEF"
      }, {
        countryNameEn: "Tokelau",
        countryNameLocal: "Tokelau",
        countryCode: "TK",
        currencyCode: "NZD",
        currencyNameEn: "New Zealand dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "tkl",
        officialLanguageNameEn: "",
        officialLanguageNameLocal: "",
        countryCallingCode: "690",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF9\uD83C\uDDF0"
      }, {
        countryNameEn: "Timor-Leste",
        countryNameLocal: "Timor-Leste, Timor Lorosa'e",
        countryCode: "TL",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "pt",
        officialLanguageNameEn: "Portuguese",
        officialLanguageNameLocal: "Portugu\xeas",
        countryCallingCode: "670",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF9\uD83C\uDDF1"
      }, {
        countryNameEn: "Turkmenistan",
        countryNameLocal: "T\xfcrkmenistan",
        countryCode: "TM",
        currencyCode: "TMT",
        currencyNameEn: "Turkmenistan manat",
        tinType: "",
        tinName: "",
        officialLanguageCode: "tk",
        officialLanguageNameEn: "Turkmen",
        officialLanguageNameLocal: "T\xfcrkmen, Түркмен",
        countryCallingCode: "993",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF9\uD83C\uDDF2"
      }, {
        countryNameEn: "Tunisia",
        countryNameLocal: "تونس, Tunisie",
        countryCode: "TN",
        currencyCode: "TND",
        currencyNameEn: "Tunisian dinar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "216",
        areaCodes: [],
        region: "Arab States",
        flag: "\uD83C\uDDF9\uD83C\uDDF3"
      }, {
        countryNameEn: "Tonga",
        countryNameLocal: "Tonga",
        countryCode: "TO",
        currencyCode: "TOP",
        currencyNameEn: "Tongan paʻanga",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "676",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF9\uD83C\uDDF4"
      }, {
        countryNameEn: "Turkey",
        countryNameLocal: "T\xfcrkiye",
        countryCode: "TR",
        currencyCode: "TRY",
        currencyNameEn: "Turkish lira",
        tinType: "KDV",
        tinName: "Vergi Kimlik Numarası",
        officialLanguageCode: "tr",
        officialLanguageNameEn: "Turkish",
        officialLanguageNameLocal: "T\xfcrk\xe7e",
        countryCallingCode: "90",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDF9\uD83C\uDDF7"
      }, {
        countryNameEn: "Trinidad and Tobago",
        countryNameLocal: "Trinidad and Tobago",
        countryCode: "TT",
        currencyCode: "TTD",
        currencyNameEn: "Trinidad and Tobago dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "868",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDF9\uD83C\uDDF9"
      }, {
        countryNameEn: "Tuvalu",
        countryNameLocal: "Tuvalu",
        countryCode: "TV",
        currencyCode: "AUD",
        currencyNameEn: "Australian dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "688",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF9\uD83C\uDDFB"
      }, {
        countryNameEn: "United Republic of Tanzania",
        countryNameLocal: "Tanzania",
        countryCode: "TZ",
        currencyCode: "TZS",
        currencyNameEn: "Tanzanian shilling",
        tinType: "",
        tinName: "",
        officialLanguageCode: "sw",
        officialLanguageNameEn: "Swahili",
        officialLanguageNameLocal: "Kiswahili",
        countryCallingCode: "255",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDF9\uD83C\uDDFF"
      }, {
        countryNameEn: "Ukraine",
        countryNameLocal: "Україна",
        countryCode: "UA",
        currencyCode: "UAH",
        currencyNameEn: "Ukrainian hryvnia",
        tinType: "ІНПП",
        tinName: "Ідентифікаційний номер платника податків",
        officialLanguageCode: "uk",
        officialLanguageNameEn: "Ukrainian",
        officialLanguageNameLocal: "Українська",
        countryCallingCode: "380",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDFA\uD83C\uDDE6"
      }, {
        countryNameEn: "Uganda",
        countryNameLocal: "Uganda",
        countryCode: "UG",
        currencyCode: "UGX",
        currencyNameEn: "Ugandan shilling",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "256",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDFA\uD83C\uDDEC"
      }, {
        countryNameEn: "United States of America",
        countryNameLocal: "United States of America",
        countryCode: "US",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "EIN",
        tinName: "Tax Identification Number",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1",
        areaCodes: [],
        region: "North America",
        flag: "\uD83C\uDDFA\uD83C\uDDF8"
      }, {
        countryNameEn: "Uruguay",
        countryNameLocal: "Uruguay",
        countryCode: "UY",
        currencyCode: "UYU",
        currencyNameEn: "Uruguayan peso",
        tinType: "RUT",
        tinName: "Registro \xdanico Tributario",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Espa\xf1ol",
        countryCallingCode: "598",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDFA\uD83C\uDDFE"
      }, {
        countryNameEn: "Uzbekistan",
        countryNameLocal: "",
        countryCode: "UZ",
        currencyCode: "UZS",
        currencyNameEn: "Uzbekistan som",
        tinType: "СТИР",
        tinName: "Солиқ тўловчиларнинг идентификация рақами",
        officialLanguageCode: "uz",
        officialLanguageNameEn: "Uzbek",
        officialLanguageNameLocal: "Oʻzbek, Ўзбек, أۇزبېك‎",
        countryCallingCode: "998",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDFA\uD83C\uDDFF"
      }, {
        countryNameEn: "Saint Vincent and the Grenadines",
        countryNameLocal: "Saint Vincent and the Grenadines",
        countryCode: "VC",
        currencyCode: "XCD",
        currencyNameEn: "East Caribbean dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1784",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDFB\uD83C\uDDE8"
      }, {
        countryNameEn: "Venezuela (Bolivarian Republic of)",
        countryNameLocal: "Venezuela",
        countryCode: "VE",
        currencyCode: "VES",
        currencyNameEn: "",
        tinType: "RIF",
        tinName: "Registro de Informacion Fiscal",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Espa\xf1ol",
        countryCallingCode: "58",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDFB\uD83C\uDDEA"
      }, {
        countryNameEn: "Virgin Islands (British)",
        countryNameLocal: "British Virgin Islands",
        countryCode: "VG",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1284",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDFB\uD83C\uDDEC"
      }, {
        countryNameEn: "Virgin Islands (U.S.)",
        countryNameLocal: "United States Virgin Islands",
        countryCode: "VI",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1340",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDFB\uD83C\uDDEE"
      }, {
        countryNameEn: "Vietnam",
        countryNameLocal: "Việt Nam",
        countryCode: "VN",
        currencyCode: "VND",
        currencyNameEn: "Vietnamese đồng",
        tinType: "",
        tinName: "",
        officialLanguageCode: "vi",
        officialLanguageNameEn: "Vietnamese",
        officialLanguageNameLocal: "Tiếng Việt",
        countryCallingCode: "84",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDFB\uD83C\uDDF3"
      }, {
        countryNameEn: "Vanuatu",
        countryNameLocal: "Vanuatu",
        countryCode: "VU",
        currencyCode: "VUV",
        currencyNameEn: "Vanuatu vatu",
        tinType: "",
        tinName: "",
        officialLanguageCode: "bi",
        officialLanguageNameEn: "Bislama",
        officialLanguageNameLocal: "Bislama",
        countryCallingCode: "678",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDFB\uD83C\uDDFA"
      }, {
        countryNameEn: "Wallis and Futuna",
        countryNameLocal: "Wallis-et-Futuna",
        countryCode: "WF",
        currencyCode: "XPF",
        currencyNameEn: "CFP franc (franc Pacifique)",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "681",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDFC\uD83C\uDDEB"
      }, {
        countryNameEn: "Samoa",
        countryNameLocal: "Samoa",
        countryCode: "WS",
        currencyCode: "WST",
        currencyNameEn: "Samoan tala",
        tinType: "",
        tinName: "",
        officialLanguageCode: "sm",
        officialLanguageNameEn: "Samoan",
        officialLanguageNameLocal: "gagana fa'a Samoa",
        countryCallingCode: "685",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDFC\uD83C\uDDF8"
      }, {
        countryNameEn: "Yemen",
        countryNameLocal: "اليَمَن",
        countryCode: "YE",
        currencyCode: "YER",
        currencyNameEn: "Yemeni rial",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "967",
        areaCodes: [],
        region: "Arab States",
        flag: "\uD83C\uDDFE\uD83C\uDDEA"
      }, {
        countryNameEn: "Mayotte",
        countryNameLocal: "Mayotte",
        countryCode: "YT",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "262",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDFE\uD83C\uDDF9"
      }, {
        countryNameEn: "South Africa",
        countryNameLocal: "South Africa",
        countryCode: "ZA",
        currencyCode: "ZAR",
        currencyNameEn: "South African rand",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "27",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDFF\uD83C\uDDE6"
      }, {
        countryNameEn: "Zambia",
        countryNameLocal: "Zambia",
        countryCode: "ZM",
        currencyCode: "ZMW",
        currencyNameEn: "Zambian kwacha",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "260",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDFF\uD83C\uDDF2"
      }, {
        countryNameEn: "Zimbabwe",
        countryNameLocal: "Zimbabwe",
        countryCode: "ZW",
        currencyCode: "ZWL",
        currencyNameEn: "Zimbabwean dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "263",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDFF\uD83C\uDDFC"
      }, {
        countryNameEn: "Eswatini",
        countryNameLocal: "Swaziland",
        countryCode: "SZ",
        currencyCode: "SZL",
        currencyNameEn: "Swazi lilangeni",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "268",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDF8\uD83C\uDDFF"
      }, {
        countryNameEn: "North Macedonia",
        countryNameLocal: "Македонија",
        countryCode: "MK",
        currencyCode: "MKD",
        currencyNameEn: "Macedonian denar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "mk",
        officialLanguageNameEn: "Macedonian",
        officialLanguageNameLocal: "македонски јазик",
        countryCallingCode: "389",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDF2\uD83C\uDDF0"
      }, {
        countryNameEn: "Philippines",
        countryNameLocal: "Philippines",
        countryCode: "PH",
        currencyCode: "PHP",
        currencyNameEn: "Philippine peso",
        tinType: "TIN",
        tinName: "Tax Identification Number",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "63",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF5\uD83C\uDDED"
      }, {
        countryNameEn: "Netherlands",
        countryNameLocal: "Nederland",
        countryCode: "NL",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "Btw-nr.",
        tinName: "Btw-nummer",
        officialLanguageCode: "nl",
        officialLanguageNameEn: "Dutch, Flemish",
        officialLanguageNameLocal: "Nederlands, Vlaams",
        countryCallingCode: "31",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDF3\uD83C\uDDF1"
      }, {
        countryNameEn: "United Arab Emirates",
        countryNameLocal: "دولة الإمارات العربيّة المتّحدة",
        countryCode: "AE",
        currencyCode: "AED",
        currencyNameEn: "United Arab Emirates dirham",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "971",
        areaCodes: [],
        region: "Arab States",
        flag: "\uD83C\uDDE6\uD83C\uDDEA"
      }, {
        countryNameEn: "Republic of Moldova",
        countryNameLocal: "Moldova, Молдавия",
        countryCode: "MD",
        currencyCode: "MDL",
        currencyNameEn: "Moldovan leu",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ro",
        officialLanguageNameEn: "Romanian, Moldavian, Moldovan",
        officialLanguageNameLocal: "Rom\xe2nă",
        countryCallingCode: "373",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDF2\uD83C\uDDE9"
      }, {
        countryNameEn: "Gambia",
        countryNameLocal: "The Gambia",
        countryCode: "GM",
        currencyCode: "GMD",
        currencyNameEn: "Gambian dalasi",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "220",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDEC\uD83C\uDDF2"
      }, {
        countryNameEn: "Dominican Republic",
        countryNameLocal: "Rep\xfablica Dominicana",
        countryCode: "DO",
        currencyCode: "DOP",
        currencyNameEn: "Dominican peso",
        tinType: "RNC",
        tinName: "Registro Nacional del Contribuyente",
        officialLanguageCode: "es",
        officialLanguageNameEn: "Spanish, Castilian",
        officialLanguageNameLocal: "Espa\xf1ol",
        countryCallingCode: "1",
        areaCodes: [],
        region: "South/Latin America",
        flag: "\uD83C\uDDE9\uD83C\uDDF4"
      }, {
        countryNameEn: "Sudan",
        countryNameLocal: "السودان",
        countryCode: "SD",
        currencyCode: "SDG",
        currencyNameEn: "Sudanese pound",
        tinType: "",
        tinName: "",
        officialLanguageCode: "ar",
        officialLanguageNameEn: "Arabic",
        officialLanguageNameLocal: "العربية",
        countryCallingCode: "249",
        areaCodes: [],
        region: "Arab States",
        flag: "\uD83C\uDDF8\uD83C\uDDE9"
      }, {
        countryNameEn: "Lao People's Democratic Republic",
        countryNameLocal: "ປະຊາຊົນລາວ",
        countryCode: "LA",
        currencyCode: "LAK",
        currencyNameEn: "Lao kip",
        tinType: "",
        tinName: "",
        officialLanguageCode: "lo",
        officialLanguageNameEn: "Lao",
        officialLanguageNameLocal: "ພາສາລາວ",
        countryCallingCode: "856",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF1\uD83C\uDDE6"
      }, {
        countryNameEn: "Taiwan, Province of China",
        countryNameLocal: "Taiwan",
        countryCode: "TW",
        currencyCode: "TWD",
        currencyNameEn: "New Taiwan dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "zh-hant",
        officialLanguageNameEn: "",
        officialLanguageNameLocal: "",
        countryCallingCode: "886",
        areaCodes: [],
        region: "Asia & Pacific",
        flag: "\uD83C\uDDF9\uD83C\uDDFC"
      }, {
        countryNameEn: "Republic of the Congo",
        countryNameLocal: "R\xe9publique du Congo",
        countryCode: "CG",
        currencyCode: "XAF",
        currencyNameEn: "CFA franc BEAC",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "242",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDE8\uD83C\uDDEC"
      }, {
        countryNameEn: "Czechia",
        countryNameLocal: "Česk\xe1 republika",
        countryCode: "CZ",
        currencyCode: "CZK",
        currencyNameEn: "Czech koruna",
        tinType: "DIČ",
        tinName: "Daňov\xe9 identifikačn\xed č\xedslo",
        officialLanguageCode: "cs",
        officialLanguageNameEn: "Czech",
        officialLanguageNameLocal: "Čeština",
        countryCallingCode: "420",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDE8\uD83C\uDDFF"
      }, {
        countryNameEn: "United Kingdom",
        countryNameLocal: "Great Britain",
        countryCode: "GB",
        currencyCode: "GBP",
        currencyNameEn: "Pound sterling",
        tinType: "VAT Reg No",
        tinName: "Value added tax registration number",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "44",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDEC\uD83C\uDDE7"
      }, {
        countryNameEn: "Niger",
        countryNameLocal: "Niger",
        countryCode: "NE",
        currencyCode: "XOF",
        currencyNameEn: "CFA franc BCEAO",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "227",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDF3\uD83C\uDDEA"
      }, {
        countryNameEn: "Democratic Republic of the Congo",
        countryNameLocal: "Democratic Republic of the Congo",
        countryCode: "CD",
        currencyCode: "CDF",
        currencyNameEn: "Congolese franc",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "243",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDE8\uD83C\uDDE9"
      }, {
        countryNameEn: "Commonwealth of The Bahamas",
        countryNameLocal: "Commonwealth of The Bahamas",
        countryCode: "BS",
        currencyCode: "BSD",
        currencyNameEn: "Bahamian dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1 242",
        areaCodes: [],
        region: "Caribbean",
        flag: "\uD83C\uDDE7\uD83C\uDDF8"
      }, {
        countryNameEn: "Cocos (Keeling) Islands",
        countryNameLocal: "Pulu Kokos (Keeling)",
        countryCode: "CC",
        currencyCode: "AUD",
        currencyNameEn: "Australian dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "61 891",
        areaCodes: [],
        region: "Australia",
        flag: "\uD83C\uDDE8\uD83C\uDDE8"
      }, {
        countryNameEn: "Central African Republic",
        countryNameLocal: "R\xe9publique centrafricaine",
        countryCode: "CF",
        currencyCode: "XAF",
        currencyNameEn: "Central African CFA",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "236",
        areaCodes: [],
        region: "Africa",
        flag: "\uD83C\uDDE8\uD83C\uDDEB"
      }, {
        countryNameEn: "Cook Islands",
        countryNameLocal: "Kūki 'Āirani",
        countryCode: "CK",
        currencyCode: "NZD",
        currencyNameEn: "New Zealand dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "682",
        areaCodes: [],
        region: "South Pacific Ocean",
        flag: "\uD83C\uDDE8\uD83C\uDDF0"
      }, {
        countryNameEn: "Falkland Islands",
        countryNameLocal: "Falkland Islands",
        countryCode: "FK",
        currencyCode: "FKP",
        currencyNameEn: "Falklands pound",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "500",
        areaCodes: [],
        region: "South Atlantic Ocean",
        flag: "\uD83C\uDDEB\uD83C\uDDF0"
      }, {
        countryNameEn: "Faroe Islands",
        countryNameLocal: "F\xe6r\xf8erne",
        countryCode: "FO",
        currencyCode: "DKK",
        currencyNameEn: "Faroese kr\xf3na",
        tinType: "",
        tinName: "",
        officialLanguageCode: "da",
        officialLanguageNameEn: "Danish",
        officialLanguageNameLocal: "dansk",
        countryCallingCode: "298",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDEB\uD83C\uDDF4"
      }, {
        countryNameEn: "Territory of Heard Island and McDonald Islands",
        countryNameLocal: "Territory of Heard Island and McDonald Islands",
        countryCode: "HM",
        currencyCode: "AUD",
        currencyNameEn: "Australian dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "672",
        areaCodes: [],
        region: "Indian Ocean",
        flag: "\uD83C\uDDED\uD83C\uDDF2"
      }, {
        countryNameEn: "British Indian Ocean Territory",
        countryNameLocal: "British Indian Ocean Territory",
        countryCode: "IO",
        currencyCode: "USD",
        currencyNameEn: "United States Dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "246",
        areaCodes: [],
        region: "Indian Ocean",
        flag: "\uD83C\uDDEE\uD83C\uDDF4"
      }, {
        countryNameEn: "Comoros",
        countryNameLocal: "Umoja wa Komori",
        countryCode: "KM",
        currencyCode: "KMF",
        currencyNameEn: "Comorian franc",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "269",
        areaCodes: [],
        region: "Indian Ocean",
        flag: "\uD83C\uDDF0\uD83C\uDDF2"
      }, {
        countryNameEn: "Cayman Islands",
        countryNameLocal: "Cayman Islands",
        countryCode: "KY",
        currencyCode: "KYD",
        currencyNameEn: "Cayman Islands dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1 345",
        areaCodes: [],
        region: "Caribbean Sea",
        flag: "\uD83C\uDDF0\uD83C\uDDFE"
      }, {
        countryNameEn: "Republic of the Marshall Islands",
        countryNameLocal: "Aolepān Aorōkin Ṃajeḷ",
        countryCode: "MH",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "692",
        areaCodes: [],
        region: "Pacific Ocean",
        flag: "\uD83C\uDDF2\uD83C\uDDED"
      }, {
        countryNameEn: "Commonwealth of the Northern Mariana Islands",
        countryNameLocal: "Sankattan Siha Na Islas Mari\xe5nas",
        countryCode: "MP",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1 670",
        areaCodes: [],
        region: "Pacific Ocean",
        flag: "\uD83C\uDDF2\uD83C\uDDF5"
      }, {
        countryNameEn: "Turks and Caicos Islands",
        countryNameLocal: "Turks and Caicos Islands",
        countryCode: "TC",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1 649",
        areaCodes: [],
        region: "Atlantic Ocean",
        flag: "\uD83C\uDDF9\uD83C\uDDE8"
      }, {
        countryNameEn: "French Southern and Antarctic Lands",
        countryNameLocal: "Terres australes et antarctiques fran\xe7aises",
        countryCode: "TF",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "fr",
        officialLanguageNameEn: "French",
        officialLanguageNameLocal: "Fran\xe7ais",
        countryCallingCode: "672",
        areaCodes: [],
        region: "Indian Ocean",
        flag: "\uD83C\uDDF9\uD83C\uDDEB"
      }, {
        countryNameEn: "United States Minor Outlying Islands",
        countryNameLocal: "United States Minor Outlying Islands",
        countryCode: "UM",
        currencyCode: "USD",
        currencyNameEn: "United States dollar",
        tinType: "",
        tinName: "",
        officialLanguageCode: "en",
        officialLanguageNameEn: "English",
        officialLanguageNameLocal: "English",
        countryCallingCode: "1",
        areaCodes: [],
        region: "Pacific Ocean",
        flag: "\uD83C\uDDFA\uD83C\uDDF2"
      }, {
        countryNameEn: "Holy See",
        countryNameLocal: "Sancta Sedes",
        countryCode: "VA",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "la",
        officialLanguageNameEn: "Latin",
        officialLanguageNameLocal: "lingua latīna",
        countryCallingCode: "39",
        areaCodes: [],
        region: "Europe",
        flag: "\uD83C\uDDFB\uD83C\uDDE6"
      }, {
        countryNameEn: "Republic of Kosovo",
        countryNameLocal: "Republika e Kosov\xebs",
        countryCode: "XK",
        currencyCode: "EUR",
        currencyNameEn: "Euro",
        tinType: "",
        tinName: "",
        officialLanguageCode: "sq",
        officialLanguageNameEn: "Albanian",
        officialLanguageNameLocal: "Shqip",
        countryCallingCode: "383",
        region: "Europe",
        flag: "\uD83C\uDDFD\uD83C\uDDF0"
      }, {
        countryNameEn: "Netherlands Antilles",
        countryNameLocal: "Nederlandse Antillen",
        countryCode: "AN",
        currencyCode: "ANG",
        currencyNameEn: "Netherlands Antillean guilder",
        tinType: "",
        tinName: "",
        officialLanguageCode: "nl",
        officialLanguageNameEn: "Dutch, Flemish",
        officialLanguageNameLocal: "Nederlands, Vlaams",
        countryCallingCode: "599",
        region: "Europe",
        flag: "\uD83C\uDDE7\uD83C\uDDF6"
      }]
    },
    55333: (e, n, a) => {
      "use strict";

      function o(e) {
        return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView
      }
      a.d(n, {
        A: () => o
      })
    },
    55475: (e, n, a) => {
      "use strict";
      a.d(n, {
        A: () => t,
        j: () => r
      });
      var o = a(55333);

      function t(e, n, a) {
        return arguments.length > 1 ? this.each((null == n ? function(e) {
          return function() {
            this.style.removeProperty(e)
          }
        } : "function" == typeof n ? function(e, n, a) {
          return function() {
            var o = n.apply(this, arguments);
            null == o ? this.style.removeProperty(e) : this.style.setProperty(e, o, a)
          }
        } : function(e, n, a) {
          return function() {
            this.style.setProperty(e, n, a)
          }
        })(e, n, null == a ? "" : a)) : r(this.node(), e)
      }

      function r(e, n) {
        return e.style.getPropertyValue(n) || (0, o.A)(e).getComputedStyle(e, null).getPropertyValue(n)
      }
    },
    64054: (e, n) => {
      "use strict";
      Object.defineProperty(n, "__esModule", {
        value: !0
      });
      var a = {
        bindSnapshot: function() {
          return u
        },
        createAsyncLocalStorage: function() {
          return c
        },
        createSnapshot: function() {
          return l
        }
      };
      for (var o in a) Object.defineProperty(n, o, {
        enumerable: !0,
        get: a[o]
      });
      let t = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
        value: "E504",
        enumerable: !1,
        configurable: !0
      });
      class r {
        disable() {
          throw t
        }
        getStore() {}
        run() {
          throw t
        }
        exit() {
          throw t
        }
        enterWith() {
          throw t
        }
        static bind(e) {
          return e
        }
      }
      let i = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;

      function c() {
        return i ? new i : new r
      }

      function u(e) {
        return i ? i.bind(e) : r.bind(e)
      }

      function l() {
        return i ? i.snapshot() : function(e, ...n) {
          return e(...n)
        }
      }
    },
    64522: (e, n, a) => {
      "use strict";

      function o(e) {
        return "object" == typeof e && "length" in e ? e : Array.from(e)
      }
      a.d(n, {
        A: () => o
      })
    },
    65709: function(e, n, a) {
      "use strict";
      var o = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      };
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.customList = n.customArray = n.findOne = n.filter = n.all = n.utils = void 0;
      let t = o(a(83973)),
        r = o(a(9752)),
        i = o(a(55163));
      n.utils = {
        groupBy: t.default
      }, n.all = function() {
        return i.default
      }, n.filter = function(e, n) {
        return i.default.filter(a => a[e] === n)
      }, n.findOne = function(e, n) {
        return i.default.find(a => a[e] === n)
      }, n.customArray = function(e = {
        name: "{countryNameEn} ({countryCode})",
        value: "{countryCode}"
      }, {
        sortBy: n,
        sortDataBy: a,
        filter: o
      } = {}) {
        let t = [],
          c = i.default;
        if ("function" == typeof o && (c = c.filter(o)), a) {
          let e = new Intl.Collator([], {
            sensitivity: "accent"
          });
          c.sort((n, o) => e.compare(n[a], o[a]))
        }
        if (c.forEach(n => {
            let a = {};
            for (let o in e) a[o] = (0, r.default)(e[o], n);
            t.push(a)
          }), n && e[n]) {
          let e = new Intl.Collator([], {
            sensitivity: "accent"
          });
          t.sort((a, o) => e.compare(a[n], o[n]))
        }
        return t
      }, n.customList = function(e = "countryCode", n = "{countryNameEn} ({countryCode})", {
        filter: a
      } = {}) {
        let o = {},
          t = i.default;
        return "function" == typeof a && (t = t.filter(a)), t.forEach(a => {
          let t = (0, r.default)(n, a);
          o[String(a[e])] = t
        }), o
      }
    },
    66161: (e, n, a) => {
      "use strict";
      a.d(n, {
        A: () => t,
        g: () => o
      });
      var o = "http://www.w3.org/1999/xhtml";
      let t = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: o,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
      }
    },
    67770: (e, n, a) => {
      "use strict";
      a.d(n, {
        A: () => t
      });
      var o = a(25640);

      function t(e, n) {
        if (e = (0, o.A)(e), void 0 === n && (n = e.currentTarget), n) {
          var a = n.ownerSVGElement || n;
          if (a.createSVGPoint) {
            var t = a.createSVGPoint();
            return t.x = e.clientX, t.y = e.clientY, [(t = t.matrixTransform(n.getScreenCTM().inverse())).x, t.y]
          }
          if (n.getBoundingClientRect) {
            var r = n.getBoundingClientRect();
            return [e.clientX - r.left - n.clientLeft, e.clientY - r.top - n.clientTop]
          }
        }
        return [e.pageX, e.pageY]
      }
    },
    68635: (e, n, a) => {
      "use strict";
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), Object.defineProperty(n, "default", {
        enumerable: !0,
        get: function() {
          return u
        }
      });
      let o = a(95155),
        t = a(12115),
        r = a(41112);

      function i(e) {
        return {
          default: e && "default" in e ? e.default : e
        }
      }
      a(21957);
      let c = {
          loader: () => Promise.resolve(i(() => null)),
          loading: null,
          ssr: !0
        },
        u = function(e) {
          let n = {
              ...c,
              ...e
            },
            a = (0, t.lazy)(() => n.loader().then(i)),
            u = n.loading;

          function l(e) {
            let i = u ? (0, o.jsx)(u, {
                isLoading: !0,
                pastDelay: !0,
                error: null
              }) : null,
              c = !n.ssr || !!n.loading,
              l = c ? t.Suspense : t.Fragment,
              f = n.ssr ? (0, o.jsxs)(o.Fragment, {
                children: [null, (0, o.jsx)(a, {
                  ...e
                })]
              }) : (0, o.jsx)(r.BailoutToCSR, {
                reason: "next/dynamic",
                children: (0, o.jsx)(a, {
                  ...e
                })
              });
            return (0, o.jsx)(l, {
              ...c ? {
                fallback: i
              } : {},
              children: f
            })
          }
          return l.displayName = "LoadableComponent", l
        }
    },
    68908: (e, n, a) => {
      "use strict";
      a.d(n, {
        A: () => t
      });
      var o = a(66161);

      function t(e) {
        var n = e += "",
          a = n.indexOf(":");
        return a >= 0 && "xmlns" !== (n = e.slice(0, a)) && (e = e.slice(a + 1)), o.A.hasOwnProperty(n) ? {
          space: o.A[n],
          local: e
        } : e
      }
    },
    75707: (e, n, a) => {
      "use strict";
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), Object.defineProperty(n, "default", {
        enumerable: !0,
        get: function() {
          return t
        }
      });
      let o = a(73623)._(a(68635));

      function t(e, n) {
        let a = {};
        "function" == typeof e && (a.loader = e);
        let t = {
          ...a,
          ...n
        };
        return (0, o.default)({
          ...t,
          modules: t.loadableGenerated?.modules
        })
      }("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
      }), Object.assign(n.default, n), e.exports = n.default)
    },
    79264: (e, n, a) => {
      "use strict";
      a.r(n), a.d(n, {
        geoAlbers: () => aK,
        geoAlbersUsa: () => aV,
        geoArea: () => V,
        geoAzimuthalEqualArea: () => aX,
        geoAzimuthalEqualAreaRaw: () => aZ,
        geoAzimuthalEquidistant: () => aY,
        geoAzimuthalEquidistantRaw: () => aW,
        geoBounds: () => el,
        geoCentroid: () => eE,
        geoCircle: () => ek,
        geoClipAntimeridian: () => eV,
        geoClipCircle: () => eq,
        geoClipExtent: () => eZ,
        geoClipRectangle: () => eH,
        geoConicConformal: () => a2,
        geoConicConformalRaw: () => a1,
        geoConicEqualArea: () => aG,
        geoConicEqualAreaRaw: () => az,
        geoConicEquidistant: () => a9,
        geoConicEquidistantRaw: () => a3,
        geoContains: () => e7,
        geoDistance: () => e1,
        geoEqualEarth: () => a7,
        geoEqualEarthRaw: () => a8,
        geoEquirectangular: () => a6,
        geoEquirectangularRaw: () => a5,
        geoGnomonic: () => on,
        geoGnomonicRaw: () => oe,
        geoGraticule: () => no,
        geoGraticule10: () => nt,
        geoIdentity: () => oa,
        geoInterpolate: () => nr,
        geoLength: () => eQ,
        geoMercator: () => aQ,
        geoMercatorRaw: () => aJ,
        geoNaturalEarth1: () => ot,
        geoNaturalEarth1Raw: () => oo,
        geoOrthographic: () => oi,
        geoOrthographicRaw: () => or,
        geoPath: () => aS,
        geoProjection: () => aO,
        geoProjectionMutator: () => aj,
        geoRotation: () => eM,
        geoStereographic: () => ou,
        geoStereographicRaw: () => oc,
        geoStream: () => P,
        geoTransform: () => aT,
        geoTransverseMercator: () => of,
        geoTransverseMercatorRaw: () => ol
      });
      class o {
        constructor() {
          this._partials = new Float64Array(32), this._n = 0
        }
        add(e) {
          let n = this._partials,
            a = 0;
          for (let o = 0; o < this._n && o < 32; o++) {
            let t = n[o],
              r = e + t,
              i = Math.abs(e) < Math.abs(t) ? e - (r - t) : t - (r - e);
            i && (n[a++] = i), e = r
          }
          return n[a] = e, this._n = a + 1, this
        }
        valueOf() {
          let e = this._partials,
            n = this._n,
            a, o, t, r = 0;
          if (n > 0) {
            for (r = e[--n]; n > 0 && (r = (a = r) + (o = e[--n]), !(t = o - (r - a))););
            n > 0 && (t < 0 && e[n - 1] < 0 || t > 0 && e[n - 1] > 0) && (a = r + (o = 2 * t), o == a - r && (r = a))
          }
          return r
        }
      }
      var t = Math.PI,
        r = t / 2,
        i = t / 4,
        c = 2 * t,
        u = 180 / t,
        l = t / 180,
        f = Math.abs,
        g = Math.atan,
        s = Math.atan2,
        d = Math.cos,
        y = Math.ceil,
        m = Math.exp,
        h = Math.hypot,
        N = Math.log,
        C = Math.pow,
        p = Math.sin,
        L = Math.sign || function(e) {
          return e > 0 ? 1 : e < 0 ? -1 : 0
        },
        E = Math.sqrt,
        v = Math.tan;

      function b(e) {
        return e > 1 ? 0 : e < -1 ? t : Math.acos(e)
      }

      function A(e) {
        return e > 1 ? r : e < -1 ? -r : Math.asin(e)
      }

      function S() {}

      function T(e, n) {
        e && w.hasOwnProperty(e.type) && w[e.type](e, n)
      }
      var _ = {
          Feature: function(e, n) {
            T(e.geometry, n)
          },
          FeatureCollection: function(e, n) {
            for (var a = e.features, o = -1, t = a.length; ++o < t;) T(a[o].geometry, n)
          }
        },
        w = {
          Sphere: function(e, n) {
            n.sphere()
          },
          Point: function(e, n) {
            e = e.coordinates, n.point(e[0], e[1], e[2])
          },
          MultiPoint: function(e, n) {
            for (var a = e.coordinates, o = -1, t = a.length; ++o < t;) e = a[o], n.point(e[0], e[1], e[2])
          },
          LineString: function(e, n) {
            M(e.coordinates, n, 0)
          },
          MultiLineString: function(e, n) {
            for (var a = e.coordinates, o = -1, t = a.length; ++o < t;) M(a[o], n, 0)
          },
          Polygon: function(e, n) {
            x(e.coordinates, n)
          },
          MultiPolygon: function(e, n) {
            for (var a = e.coordinates, o = -1, t = a.length; ++o < t;) x(a[o], n)
          },
          GeometryCollection: function(e, n) {
            for (var a = e.geometries, o = -1, t = a.length; ++o < t;) T(a[o], n)
          }
        };

      function M(e, n, a) {
        var o, t = -1,
          r = e.length - a;
        for (n.lineStart(); ++t < r;) o = e[t], n.point(o[0], o[1], o[2]);
        n.lineEnd()
      }

      function x(e, n) {
        var a = -1,
          o = e.length;
        for (n.polygonStart(); ++a < o;) M(e[a], n, 1);
        n.polygonEnd()
      }

      function P(e, n) {
        e && _.hasOwnProperty(e.type) ? _[e.type](e, n) : T(e, n)
      }
      var k, R, F, I, B, D = new o,
        O = new o,
        j = {
          point: S,
          lineStart: S,
          lineEnd: S,
          polygonStart: function() {
            D = new o, j.lineStart = U, j.lineEnd = z
          },
          polygonEnd: function() {
            var e = +D;
            O.add(e < 0 ? c + e : e), this.lineStart = this.lineEnd = this.point = S
          },
          sphere: function() {
            O.add(c)
          }
        };

      function U() {
        j.point = G
      }

      function z() {
        K(k, R)
      }

      function G(e, n) {
        j.point = K, k = e, R = n, e *= l, n *= l, F = e, I = d(n = n / 2 + i), B = p(n)
      }

      function K(e, n) {
        e *= l, n *= l;
        var a = e - F,
          o = a >= 0 ? 1 : -1,
          t = o * a,
          r = d(n = n / 2 + i),
          c = p(n),
          u = B * c,
          f = I * r + u * d(t),
          g = u * o * p(t);
        D.add(s(g, f)), F = e, I = r, B = c
      }

      function V(e) {
        return O = new o, P(e, j), 2 * O
      }

      function q(e) {
        return [s(e[1], e[0]), A(e[2])]
      }

      function H(e) {
        var n = e[0],
          a = e[1],
          o = d(a);
        return [o * d(n), o * p(n), p(a)]
      }

      function Z(e, n) {
        return e[0] * n[0] + e[1] * n[1] + e[2] * n[2]
      }

      function X(e, n) {
        return [e[1] * n[2] - e[2] * n[1], e[2] * n[0] - e[0] * n[2], e[0] * n[1] - e[1] * n[0]]
      }

      function W(e, n) {
        e[0] += n[0], e[1] += n[1], e[2] += n[2]
      }

      function Y(e, n) {
        return [e[0] * n, e[1] * n, e[2] * n]
      }

      function J(e) {
        var n = E(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
        e[0] /= n, e[1] /= n, e[2] /= n
      }
      var Q = {
        point: $,
        lineStart: en,
        lineEnd: ea,
        polygonStart: function() {
          Q.point = eo, Q.lineStart = et, Q.lineEnd = er, nm = new o, j.polygonStart()
        },
        polygonEnd: function() {
          j.polygonEnd(), Q.point = $, Q.lineStart = en, Q.lineEnd = ea, D < 0 ? (nc = -(nl = 180), nu = -(nf = 90)) : nm > 1e-6 ? nf = 90 : nm < -1e-6 && (nu = -90), nN[0] = nc, nN[1] = nl
        },
        sphere: function() {
          nc = -(nl = 180), nu = -(nf = 90)
        }
      };

      function $(e, n) {
        nh.push(nN = [nc = e, nl = e]), n < nu && (nu = n), n > nf && (nf = n)
      }

      function ee(e, n) {
        var a = H([e * l, n * l]);
        if (ny) {
          var o = X(ny, a),
            t = X([o[1], -o[0], 0], o);
          J(t), t = q(t);
          var r, i = e - ng,
            c = i > 0 ? 1 : -1,
            g = t[0] * u * c,
            s = f(i) > 180;
          s ^ (c * ng < g && g < c * e) ? (r = t[1] * u) > nf && (nf = r) : s ^ (c * ng < (g = (g + 360) % 360 - 180) && g < c * e) ? (r = -t[1] * u) < nu && (nu = r) : (n < nu && (nu = n), n > nf && (nf = n)), s ? e < ng ? ei(nc, e) > ei(nc, nl) && (nl = e) : ei(e, nl) > ei(nc, nl) && (nc = e) : nl >= nc ? (e < nc && (nc = e), e > nl && (nl = e)) : e > ng ? ei(nc, e) > ei(nc, nl) && (nl = e) : ei(e, nl) > ei(nc, nl) && (nc = e)
        } else nh.push(nN = [nc = e, nl = e]);
        n < nu && (nu = n), n > nf && (nf = n), ny = a, ng = e
      }

      function en() {
        Q.point = ee
      }

      function ea() {
        nN[0] = nc, nN[1] = nl, Q.point = $, ny = null
      }

      function eo(e, n) {
        if (ny) {
          var a = e - ng;
          nm.add(f(a) > 180 ? a + (a > 0 ? 360 : -360) : a)
        } else ns = e, nd = n;
        j.point(e, n), ee(e, n)
      }

      function et() {
        j.lineStart()
      }

      function er() {
        eo(ns, nd), j.lineEnd(), f(nm) > 1e-6 && (nc = -(nl = 180)), nN[0] = nc, nN[1] = nl, ny = null
      }

      function ei(e, n) {
        return (n -= e) < 0 ? n + 360 : n
      }

      function ec(e, n) {
        return e[0] - n[0]
      }

      function eu(e, n) {
        return e[0] <= e[1] ? e[0] <= n && n <= e[1] : n < e[0] || e[1] < n
      }

      function el(e) {
        var n, a, o, t, r, i, c;
        if (nf = nl = -(nc = nu = 1 / 0), nh = [], P(e, Q), a = nh.length) {
          for (nh.sort(ec), n = 1, r = [o = nh[0]]; n < a; ++n) eu(o, (t = nh[n])[0]) || eu(o, t[1]) ? (ei(o[0], t[1]) > ei(o[0], o[1]) && (o[1] = t[1]), ei(t[0], o[1]) > ei(o[0], o[1]) && (o[0] = t[0])) : r.push(o = t);
          for (i = -1 / 0, a = r.length - 1, n = 0, o = r[a]; n <= a; o = t, ++n) t = r[n], (c = ei(o[1], t[0])) > i && (i = c, nc = t[0], nl = o[1])
        }
        return nh = nN = null, nc === 1 / 0 || nu === 1 / 0 ? [
          [NaN, NaN],
          [NaN, NaN]
        ] : [
          [nc, nu],
          [nl, nf]
        ]
      }
      var ef = {
        sphere: S,
        point: eg,
        lineStart: ed,
        lineEnd: eh,
        polygonStart: function() {
          ef.lineStart = eN, ef.lineEnd = eC
        },
        polygonEnd: function() {
          ef.lineStart = ed, ef.lineEnd = eh
        }
      };

      function eg(e, n) {
        e *= l;
        var a = d(n *= l);
        es(a * d(e), a * p(e), p(n))
      }

      function es(e, n, a) {
        ++nC, nL += (e - nL) / nC, nE += (n - nE) / nC, nv += (a - nv) / nC
      }

      function ed() {
        ef.point = ey
      }

      function ey(e, n) {
        e *= l;
        var a = d(n *= l);
        nP = a * d(e), nk = a * p(e), nR = p(n), ef.point = em, es(nP, nk, nR)
      }

      function em(e, n) {
        e *= l;
        var a = d(n *= l),
          o = a * d(e),
          t = a * p(e),
          r = p(n),
          i = s(E((i = nk * r - nR * t) * i + (i = nR * o - nP * r) * i + (i = nP * t - nk * o) * i), nP * o + nk * t + nR * r);
        np += i, nb += i * (nP + (nP = o)), nA += i * (nk + (nk = t)), nS += i * (nR + (nR = r)), es(nP, nk, nR)
      }

      function eh() {
        ef.point = eg
      }

      function eN() {
        ef.point = ep
      }

      function eC() {
        eL(nM, nx), ef.point = eg
      }

      function ep(e, n) {
        nM = e, nx = n, e *= l, n *= l, ef.point = eL;
        var a = d(n);
        nP = a * d(e), nk = a * p(e), nR = p(n), es(nP, nk, nR)
      }

      function eL(e, n) {
        e *= l;
        var a = d(n *= l),
          o = a * d(e),
          t = a * p(e),
          r = p(n),
          i = nk * r - nR * t,
          c = nR * o - nP * r,
          u = nP * t - nk * o,
          f = h(i, c, u),
          g = A(f),
          s = f && -g / f;
        nT.add(s * i), n_.add(s * c), nw.add(s * u), np += g, nb += g * (nP + (nP = o)), nA += g * (nk + (nk = t)), nS += g * (nR + (nR = r)), es(nP, nk, nR)
      }

      function eE(e) {
        nC = np = nL = nE = nv = nb = nA = nS = 0, nT = new o, n_ = new o, nw = new o, P(e, ef);
        var n = +nT,
          a = +n_,
          t = +nw,
          r = h(n, a, t);
        return r < 1e-12 && (n = nb, a = nA, t = nS, np < 1e-6 && (n = nL, a = nE, t = nv), (r = h(n, a, t)) < 1e-12) ? [NaN, NaN] : [s(a, n) * u, A(t / r) * u]
      }

      function ev(e) {
        return function() {
          return e
        }
      }

      function eb(e, n) {
        function a(a, o) {
          return n((a = e(a, o))[0], a[1])
        }
        return e.invert && n.invert && (a.invert = function(a, o) {
          return (a = n.invert(a, o)) && e.invert(a[0], a[1])
        }), a
      }

      function eA(e, n) {
        return [f(e) > t ? e + Math.round(-e / c) * c : e, n]
      }

      function eS(e, n, a) {
        return (e %= c) ? n || a ? eb(e_(e), ew(n, a)) : e_(e) : n || a ? ew(n, a) : eA
      }

      function eT(e) {
        return function(n, a) {
          return [(n += e) > t ? n - c : n < -t ? n + c : n, a]
        }
      }

      function e_(e) {
        var n = eT(e);
        return n.invert = eT(-e), n
      }

      function ew(e, n) {
        var a = d(e),
          o = p(e),
          t = d(n),
          r = p(n);

        function i(e, n) {
          var i = d(n),
            c = d(e) * i,
            u = p(e) * i,
            l = p(n),
            f = l * a + c * o;
          return [s(u * t - f * r, c * a - l * o), A(f * t + u * r)]
        }
        return i.invert = function(e, n) {
          var i = d(n),
            c = d(e) * i,
            u = p(e) * i,
            l = p(n),
            f = l * t - u * r;
          return [s(u * t + l * r, c * a + f * o), A(f * a - c * o)]
        }, i
      }

      function eM(e) {
        function n(n) {
          return n = e(n[0] * l, n[1] * l), n[0] *= u, n[1] *= u, n
        }
        return e = eS(e[0] * l, e[1] * l, e.length > 2 ? e[2] * l : 0), n.invert = function(n) {
          return n = e.invert(n[0] * l, n[1] * l), n[0] *= u, n[1] *= u, n
        }, n
      }

      function ex(e, n, a, o, t, r) {
        if (a) {
          var i = d(n),
            u = p(n),
            l = o * a;
          null == t ? (t = n + o * c, r = n - l / 2) : (t = eP(i, t), r = eP(i, r), (o > 0 ? t < r : t > r) && (t += o * c));
          for (var f, g = t; o > 0 ? g > r : g < r; g -= l) f = q([i, -u * d(g), -u * p(g)]), e.point(f[0], f[1])
        }
      }

      function eP(e, n) {
        n = H(n), n[0] -= e, J(n);
        var a = b(-n[1]);
        return ((0 > -n[2] ? -a : a) + c - 1e-6) % c
      }

      function ek() {
        var e, n, a = ev([0, 0]),
          o = ev(90),
          t = ev(6),
          r = {
            point: function(a, o) {
              e.push(a = n(a, o)), a[0] *= u, a[1] *= u
            }
          };

        function i() {
          var i = a.apply(this, arguments),
            c = o.apply(this, arguments) * l,
            u = t.apply(this, arguments) * l;
          return e = [], n = eS(-i[0] * l, -i[1] * l, 0).invert, ex(r, c, u, 1), i = {
            type: "Polygon",
            coordinates: [e]
          }, e = n = null, i
        }
        return i.center = function(e) {
          return arguments.length ? (a = "function" == typeof e ? e : ev([+e[0], +e[1]]), i) : a
        }, i.radius = function(e) {
          return arguments.length ? (o = "function" == typeof e ? e : ev(+e), i) : o
        }, i.precision = function(e) {
          return arguments.length ? (t = "function" == typeof e ? e : ev(+e), i) : t
        }, i
      }

      function eR() {
        var e, n = [];
        return {
          point: function(n, a, o) {
            e.push([n, a, o])
          },
          lineStart: function() {
            n.push(e = [])
          },
          lineEnd: S,
          rejoin: function() {
            n.length > 1 && n.push(n.pop().concat(n.shift()))
          },
          result: function() {
            var a = n;
            return n = [], e = null, a
          }
        }
      }

      function eF(e, n) {
        return 1e-6 > f(e[0] - n[0]) && 1e-6 > f(e[1] - n[1])
      }

      function eI(e, n, a, o) {
        this.x = e, this.z = n, this.o = a, this.e = o, this.v = !1, this.n = this.p = null
      }

      function eB(e, n, a, o, t) {
        var r, i, c = [],
          u = [];
        if (e.forEach(function(e) {
            if (!((n = e.length - 1) <= 0)) {
              var n, a, o = e[0],
                i = e[n];
              if (eF(o, i)) {
                if (!o[2] && !i[2]) {
                  for (t.lineStart(), r = 0; r < n; ++r) t.point((o = e[r])[0], o[1]);
                  t.lineEnd();
                  return
                }
                i[0] += 2e-6
              }
              c.push(a = new eI(o, e, null, !0)), u.push(a.o = new eI(o, null, a, !1)), c.push(a = new eI(i, e, null, !1)), u.push(a.o = new eI(i, null, a, !0))
            }
          }), c.length) {
          for (u.sort(n), eD(c), eD(u), r = 0, i = u.length; r < i; ++r) u[r].e = a = !a;
          for (var l, f, g = c[0];;) {
            for (var s = g, d = !0; s.v;)
              if ((s = s.n) === g) return;
            l = s.z, t.lineStart();
            do {
              if (s.v = s.o.v = !0, s.e) {
                if (d)
                  for (r = 0, i = l.length; r < i; ++r) t.point((f = l[r])[0], f[1]);
                else o(s.x, s.n.x, 1, t);
                s = s.n
              } else {
                if (d)
                  for (r = (l = s.p.z).length - 1; r >= 0; --r) t.point((f = l[r])[0], f[1]);
                else o(s.x, s.p.x, -1, t);
                s = s.p
              }
              l = (s = s.o).z, d = !d
            } while (!s.v);
            t.lineEnd()
          }
        }
      }

      function eD(e) {
        if (n = e.length) {
          for (var n, a, o = 0, t = e[0]; ++o < n;) t.n = a = e[o], a.p = t, t = a;
          t.n = a = e[0], a.p = t
        }
      }

      function eO(e) {
        return f(e[0]) <= t ? e[0] : L(e[0]) * ((f(e[0]) + t) % c - t)
      }

      function ej(e, n) {
        var a = eO(n),
          u = n[1],
          l = p(u),
          f = [p(a), -d(a), 0],
          g = 0,
          y = 0,
          m = new o;
        1 === l ? u = r + 1e-6 : -1 === l && (u = -r - 1e-6);
        for (var h = 0, N = e.length; h < N; ++h)
          if (L = (C = e[h]).length)
            for (var C, L, E = C[L - 1], v = eO(E), b = E[1] / 2 + i, S = p(b), T = d(b), _ = 0; _ < L; ++_, v = M, S = P, T = k, E = w) {
              var w = C[_],
                M = eO(w),
                x = w[1] / 2 + i,
                P = p(x),
                k = d(x),
                R = M - v,
                F = R >= 0 ? 1 : -1,
                I = F * R,
                B = I > t,
                D = S * P;
              if (m.add(s(D * F * p(I), T * k + D * d(I))), g += B ? R + F * c : R, B ^ v >= a ^ M >= a) {
                var O = X(H(E), H(w));
                J(O);
                var j = X(f, O);
                J(j);
                var U = (B ^ R >= 0 ? -1 : 1) * A(j[2]);
                (u > U || u === U && (O[0] || O[1])) && (y += B ^ R >= 0 ? 1 : -1)
              }
            }
        return (g < -1e-6 || g < 1e-6 && m < -1e-12) ^ 1 & y
      }

      function eU(e) {
        return Array.from(function*(e) {
          for (let n of e) yield* n
        }(e))
      }

      function ez(e, n, a, o) {
        return function(t) {
          var r, i, c, u = n(t),
            l = eR(),
            f = n(l),
            g = !1,
            s = {
              point: d,
              lineStart: m,
              lineEnd: h,
              polygonStart: function() {
                s.point = N, s.lineStart = C, s.lineEnd = p, i = [], r = []
              },
              polygonEnd: function() {
                s.point = d, s.lineStart = m, s.lineEnd = h, i = eU(i);
                var e = ej(r, o);
                i.length ? (g || (t.polygonStart(), g = !0), eB(i, eK, e, a, t)) : e && (g || (t.polygonStart(), g = !0), t.lineStart(), a(null, null, 1, t), t.lineEnd()), g && (t.polygonEnd(), g = !1), i = r = null
              },
              sphere: function() {
                t.polygonStart(), t.lineStart(), a(null, null, 1, t), t.lineEnd(), t.polygonEnd()
              }
            };

          function d(n, a) {
            e(n, a) && t.point(n, a)
          }

          function y(e, n) {
            u.point(e, n)
          }

          function m() {
            s.point = y, u.lineStart()
          }

          function h() {
            s.point = d, u.lineEnd()
          }

          function N(e, n) {
            c.push([e, n]), f.point(e, n)
          }

          function C() {
            f.lineStart(), c = []
          }

          function p() {
            N(c[0][0], c[0][1]), f.lineEnd();
            var e, n, a, o, u = f.clean(),
              s = l.result(),
              d = s.length;
            if (c.pop(), r.push(c), c = null, d) {
              if (1 & u) {
                if ((n = (a = s[0]).length - 1) > 0) {
                  for (g || (t.polygonStart(), g = !0), t.lineStart(), e = 0; e < n; ++e) t.point((o = a[e])[0], o[1]);
                  t.lineEnd()
                }
                return
              }
              d > 1 && 2 & u && s.push(s.pop().concat(s.shift())), i.push(s.filter(eG))
            }
          }
          return s
        }
      }

      function eG(e) {
        return e.length > 1
      }

      function eK(e, n) {
        return ((e = e.x)[0] < 0 ? e[1] - r - 1e-6 : r - e[1]) - ((n = n.x)[0] < 0 ? n[1] - r - 1e-6 : r - n[1])
      }
      eA.invert = eA;
      let eV = ez(function() {
        return !0
      }, function(e) {
        var n, a = NaN,
          o = NaN,
          i = NaN;
        return {
          lineStart: function() {
            e.lineStart(), n = 1
          },
          point: function(c, u) {
            var l, s, y, m, h, N, C, L = c > 0 ? t : -t,
              E = f(c - a);
            1e-6 > f(E - t) ? (e.point(a, o = (o + u) / 2 > 0 ? r : -r), e.point(i, o), e.lineEnd(), e.lineStart(), e.point(L, o), e.point(c, o), n = 0) : i !== L && E >= t && (1e-6 > f(a - i) && (a -= 1e-6 * i), 1e-6 > f(c - L) && (c -= 1e-6 * L), l = a, s = o, y = c, m = u, o = f(C = p(l - y)) > 1e-6 ? g((p(s) * (N = d(m)) * p(y) - p(m) * (h = d(s)) * p(l)) / (h * N * C)) : (s + m) / 2, e.point(i, o), e.lineEnd(), e.lineStart(), e.point(L, o), n = 0), e.point(a = c, o = u), i = L
          },
          lineEnd: function() {
            e.lineEnd(), a = o = NaN
          },
          clean: function() {
            return 2 - n
          }
        }
      }, function(e, n, a, o) {
        var i;
        if (null == e) i = a * r, o.point(-t, i), o.point(0, i), o.point(t, i), o.point(t, 0), o.point(t, -i), o.point(0, -i), o.point(-t, -i), o.point(-t, 0), o.point(-t, i);
        else if (f(e[0] - n[0]) > 1e-6) {
          var c = e[0] < n[0] ? t : -t;
          i = a * c / 2, o.point(-c, i), o.point(0, i), o.point(c, i)
        } else o.point(n[0], n[1])
      }, [-t, -r]);

      function eq(e) {
        var n = d(e),
          a = 6 * l,
          o = n > 0,
          r = f(n) > 1e-6;

        function i(e, a) {
          return d(e) * d(a) > n
        }

        function c(e, a, o) {
          var r = H(e),
            i = H(a),
            c = [1, 0, 0],
            u = X(r, i),
            l = Z(u, u),
            g = u[0],
            s = l - g * g;
          if (!s) return !o && e;
          var d = X(c, u),
            y = Y(c, n * l / s);
          W(y, Y(u, -n * g / s));
          var m = Z(y, d),
            h = Z(d, d),
            N = m * m - h * (Z(y, y) - 1);
          if (!(N < 0)) {
            var C = E(N),
              p = Y(d, (-m - C) / h);
            if (W(p, y), p = q(p), !o) return p;
            var L, v = e[0],
              b = a[0],
              A = e[1],
              S = a[1];
            b < v && (L = v, v = b, b = L);
            var T = b - v,
              _ = 1e-6 > f(T - t);
            if (!_ && S < A && (L = A, A = S, S = L), _ || T < 1e-6 ? _ ? A + S > 0 ^ p[1] < (1e-6 > f(p[0] - v) ? A : S) : A <= p[1] && p[1] <= S : T > t ^ (v <= p[0] && p[0] <= b)) {
              var w = Y(d, (-m + C) / h);
              return W(w, y), [p, q(w)]
            }
          }
        }

        function u(n, a) {
          var r = o ? e : t - e,
            i = 0;
          return n < -r ? i |= 1 : n > r && (i |= 2), a < -r ? i |= 4 : a > r && (i |= 8), i
        }
        return ez(i, function(e) {
          var n, a, l, f, g;
          return {
            lineStart: function() {
              f = l = !1, g = 1
            },
            point: function(s, d) {
              var y, m, h = [s, d],
                N = i(s, d),
                C = o ? N ? 0 : u(s, d) : N ? u(s + (s < 0 ? t : -t), d) : 0;
              !n && (f = l = N) && e.lineStart(), N !== l && (!(m = c(n, h)) || eF(n, m) || eF(h, m)) && (h[2] = 1), N !== l ? (g = 0, N ? (e.lineStart(), m = c(h, n), e.point(m[0], m[1])) : (m = c(n, h), e.point(m[0], m[1], 2), e.lineEnd()), n = m) : r && n && o ^ N && !(C & a) && (y = c(h, n, !0)) && (g = 0, o ? (e.lineStart(), e.point(y[0][0], y[0][1]), e.point(y[1][0], y[1][1]), e.lineEnd()) : (e.point(y[1][0], y[1][1]), e.lineEnd(), e.lineStart(), e.point(y[0][0], y[0][1], 3))), !N || n && eF(n, h) || e.point(h[0], h[1]), n = h, l = N, a = C
            },
            lineEnd: function() {
              l && e.lineEnd(), n = null
            },
            clean: function() {
              return g | (f && l) << 1
            }
          }
        }, function(n, o, t, r) {
          ex(r, e, a, t, n, o)
        }, o ? [0, -e] : [-t, e - t])
      }

      function eH(e, n, a, o) {
        function t(t, r) {
          return e <= t && t <= a && n <= r && r <= o
        }

        function r(t, r, c, l) {
          var f = 0,
            g = 0;
          if (null == t || (f = i(t, c)) !== (g = i(r, c)) || 0 > u(t, r) ^ c > 0)
            do l.point(0 === f || 3 === f ? e : a, f > 1 ? o : n); while ((f = (f + c + 4) % 4) !== g);
          else l.point(r[0], r[1])
        }

        function i(o, t) {
          return 1e-6 > f(o[0] - e) ? t > 0 ? 0 : 3 : 1e-6 > f(o[0] - a) ? t > 0 ? 2 : 1 : 1e-6 > f(o[1] - n) ? +(t > 0) : t > 0 ? 3 : 2
        }

        function c(e, n) {
          return u(e.x, n.x)
        }

        function u(e, n) {
          var a = i(e, 1),
            o = i(n, 1);
          return a !== o ? a - o : 0 === a ? n[1] - e[1] : 1 === a ? e[0] - n[0] : 2 === a ? e[1] - n[1] : n[0] - e[0]
        }
        return function(i) {
          var u, l, f, g, s, d, y, m, h, N, C, p = i,
            L = eR(),
            E = {
              point: v,
              lineStart: function() {
                E.point = b, l && l.push(f = []), N = !0, h = !1, y = m = NaN
              },
              lineEnd: function() {
                u && (b(g, s), d && h && L.rejoin(), u.push(L.result())), E.point = v, h && p.lineEnd()
              },
              polygonStart: function() {
                p = L, u = [], l = [], C = !0
              },
              polygonEnd: function() {
                var n = function() {
                    for (var n = 0, a = 0, t = l.length; a < t; ++a)
                      for (var r, i, c = l[a], u = 1, f = c.length, g = c[0], s = g[0], d = g[1]; u < f; ++u) r = s, i = d, s = (g = c[u])[0], d = g[1], i <= o ? d > o && (s - r) * (o - i) > (d - i) * (e - r) && ++n : d <= o && (s - r) * (o - i) < (d - i) * (e - r) && --n;
                    return n
                  }(),
                  a = C && n,
                  t = (u = eU(u)).length;
                (a || t) && (i.polygonStart(), a && (i.lineStart(), r(null, null, 1, i), i.lineEnd()), t && eB(u, c, n, r, i), i.polygonEnd()), p = i, u = l = f = null
              }
            };

          function v(e, n) {
            t(e, n) && p.point(e, n)
          }

          function b(r, i) {
            var c = t(r, i);
            if (l && f.push([r, i]), N) g = r, s = i, d = c, N = !1, c && (p.lineStart(), p.point(r, i));
            else if (c && h) p.point(r, i);
            else {
              var u = [y = Math.max(-1e9, Math.min(1e9, y)), m = Math.max(-1e9, Math.min(1e9, m))],
                L = [r = Math.max(-1e9, Math.min(1e9, r)), i = Math.max(-1e9, Math.min(1e9, i))];
              ! function(e, n, a, o, t, r) {
                var i, c = e[0],
                  u = e[1],
                  l = n[0],
                  f = n[1],
                  g = 0,
                  s = 1,
                  d = l - c,
                  y = f - u;
                if (i = a - c, !d && i > 0) return;
                if (i /= d, d < 0) {
                  if (i < g) return;
                  i < s && (s = i)
                } else if (d > 0) {
                  if (i > s) return;
                  i > g && (g = i)
                }
                if (i = t - c, d || !(i < 0)) {
                  if (i /= d, d < 0) {
                    if (i > s) return;
                    i > g && (g = i)
                  } else if (d > 0) {
                    if (i < g) return;
                    i < s && (s = i)
                  }
                  if (i = o - u, y || !(i > 0)) {
                    if (i /= y, y < 0) {
                      if (i < g) return;
                      i < s && (s = i)
                    } else if (y > 0) {
                      if (i > s) return;
                      i > g && (g = i)
                    }
                    if (i = r - u, y || !(i < 0)) {
                      if (i /= y, y < 0) {
                        if (i > s) return;
                        i > g && (g = i)
                      } else if (y > 0) {
                        if (i < g) return;
                        i < s && (s = i)
                      }
                      return g > 0 && (e[0] = c + g * d, e[1] = u + g * y), s < 1 && (n[0] = c + s * d, n[1] = u + s * y), !0
                    }
                  }
                }
              }(u, L, e, n, a, o) ? c && (p.lineStart(), p.point(r, i), C = !1): (h || (p.lineStart(), p.point(u[0], u[1])), p.point(L[0], L[1]), c || p.lineEnd(), C = !1)
            }
            y = r, m = i, h = c
          }
          return E
        }
      }

      function eZ() {
        var e, n, a, o = 0,
          t = 0,
          r = 960,
          i = 500;
        return a = {
          stream: function(a) {
            return e && n === a ? e : e = eH(o, t, r, i)(n = a)
          },
          extent: function(c) {
            return arguments.length ? (o = +c[0][0], t = +c[0][1], r = +c[1][0], i = +c[1][1], e = n = null, a) : [
              [o, t],
              [r, i]
            ]
          }
        }
      }
      var eX = {
        sphere: S,
        point: S,
        lineStart: function() {
          eX.point = eY, eX.lineEnd = eW
        },
        lineEnd: S,
        polygonStart: S,
        polygonEnd: S
      };

      function eW() {
        eX.point = eX.lineEnd = S
      }

      function eY(e, n) {
        e *= l, n *= l, nI = e, nB = p(n), nD = d(n), eX.point = eJ
      }

      function eJ(e, n) {
        e *= l;
        var a = p(n *= l),
          o = d(n),
          t = f(e - nI),
          r = d(t),
          i = o * p(t),
          c = nD * a - nB * o * r,
          u = nB * a + nD * o * r;
        nF.add(s(E(i * i + c * c), u)), nI = e, nB = a, nD = o
      }

      function eQ(e) {
        return nF = new o, P(e, eX), +nF
      }
      var e$ = [null, null],
        e0 = {
          type: "LineString",
          coordinates: e$
        };

      function e1(e, n) {
        return e$[0] = e, e$[1] = n, eQ(e0)
      }
      var e2 = {
          Feature: function(e, n) {
            return e6(e.geometry, n)
          },
          FeatureCollection: function(e, n) {
            for (var a = e.features, o = -1, t = a.length; ++o < t;)
              if (e6(a[o].geometry, n)) return !0;
            return !1
          }
        },
        e5 = {
          Sphere: function() {
            return !0
          },
          Point: function(e, n) {
            var a;
            return a = e.coordinates, 0 === e1(a, n)
          },
          MultiPoint: function(e, n) {
            for (var a, o = e.coordinates, t = -1, r = o.length; ++t < r;) {
              if (a = o[t], 0 === e1(a, n)) return !0
            }
            return !1
          },
          LineString: function(e, n) {
            return e3(e.coordinates, n)
          },
          MultiLineString: function(e, n) {
            for (var a = e.coordinates, o = -1, t = a.length; ++o < t;)
              if (e3(a[o], n)) return !0;
            return !1
          },
          Polygon: function(e, n) {
            return e9(e.coordinates, n)
          },
          MultiPolygon: function(e, n) {
            for (var a = e.coordinates, o = -1, t = a.length; ++o < t;)
              if (e9(a[o], n)) return !0;
            return !1
          },
          GeometryCollection: function(e, n) {
            for (var a = e.geometries, o = -1, t = a.length; ++o < t;)
              if (e6(a[o], n)) return !0;
            return !1
          }
        };

      function e6(e, n) {
        return !!(e && e5.hasOwnProperty(e.type)) && e5[e.type](e, n)
      }

      function e3(e, n) {
        for (var a, o, t, r = 0, i = e.length; r < i; r++) {
          if (0 === (o = e1(e[r], n)) || r > 0 && (t = e1(e[r], e[r - 1])) > 0 && a <= t && o <= t && (a + o - t) * (1 - Math.pow((a - o) / t, 2)) < 1e-12 * t) return !0;
          a = o
        }
        return !1
      }

      function e9(e, n) {
        return !!ej(e.map(e4), e8(n))
      }

      function e4(e) {
        return (e = e.map(e8)).pop(), e
      }

      function e8(e) {
        return [e[0] * l, e[1] * l]
      }

      function e7(e, n) {
        return (e && e2.hasOwnProperty(e.type) ? e2[e.type] : e6)(e, n)
      }

      function ne(e, n, a) {
        e *= 1, n *= 1, a = (t = arguments.length) < 2 ? (n = e, e = 0, 1) : t < 3 ? 1 : +a;
        for (var o = -1, t = 0 | Math.max(0, Math.ceil((n - e) / a)), r = Array(t); ++o < t;) r[o] = e + o * a;
        return r
      }

      function nn(e, n, a) {
        var o = ne(e, n - 1e-6, a).concat(n);
        return function(e) {
          return o.map(function(n) {
            return [e, n]
          })
        }
      }

      function na(e, n, a) {
        var o = ne(e, n - 1e-6, a).concat(n);
        return function(e) {
          return o.map(function(n) {
            return [n, e]
          })
        }
      }

      function no() {
        var e, n, a, o, t, r, i, c, u, l, g, s, d = 10,
          m = 10,
          h = 90,
          N = 360,
          C = 2.5;

        function p() {
          return {
            type: "MultiLineString",
            coordinates: L()
          }
        }

        function L() {
          return ne(y(o / h) * h, a, h).map(g).concat(ne(y(c / N) * N, i, N).map(s)).concat(ne(y(n / d) * d, e, d).filter(function(e) {
            return f(e % h) > 1e-6
          }).map(u)).concat(ne(y(r / m) * m, t, m).filter(function(e) {
            return f(e % N) > 1e-6
          }).map(l))
        }
        return p.lines = function() {
          return L().map(function(e) {
            return {
              type: "LineString",
              coordinates: e
            }
          })
        }, p.outline = function() {
          return {
            type: "Polygon",
            coordinates: [g(o).concat(s(i).slice(1), g(a).reverse().slice(1), s(c).reverse().slice(1))]
          }
        }, p.extent = function(e) {
          return arguments.length ? p.extentMajor(e).extentMinor(e) : p.extentMinor()
        }, p.extentMajor = function(e) {
          return arguments.length ? (o = +e[0][0], a = +e[1][0], c = +e[0][1], i = +e[1][1], o > a && (e = o, o = a, a = e), c > i && (e = c, c = i, i = e), p.precision(C)) : [
            [o, c],
            [a, i]
          ]
        }, p.extentMinor = function(a) {
          return arguments.length ? (n = +a[0][0], e = +a[1][0], r = +a[0][1], t = +a[1][1], n > e && (a = n, n = e, e = a), r > t && (a = r, r = t, t = a), p.precision(C)) : [
            [n, r],
            [e, t]
          ]
        }, p.step = function(e) {
          return arguments.length ? p.stepMajor(e).stepMinor(e) : p.stepMinor()
        }, p.stepMajor = function(e) {
          return arguments.length ? (h = +e[0], N = +e[1], p) : [h, N]
        }, p.stepMinor = function(e) {
          return arguments.length ? (d = +e[0], m = +e[1], p) : [d, m]
        }, p.precision = function(f) {
          return arguments.length ? (C = +f, u = nn(r, t, 90), l = na(n, e, C), g = nn(c, i, 90), s = na(o, a, C), p) : C
        }, p.extentMajor([
          [-180, -89.999999],
          [180, 89.999999]
        ]).extentMinor([
          [-180, -80.000001],
          [180, 80.000001]
        ])
      }

      function nt() {
        return no()()
      }

      function nr(e, n) {
        var a, o, t = e[0] * l,
          r = e[1] * l,
          i = n[0] * l,
          c = n[1] * l,
          f = d(r),
          g = p(r),
          y = d(c),
          m = p(c),
          h = f * d(t),
          N = f * p(t),
          C = y * d(i),
          L = y * p(i),
          v = 2 * A(E((a = p((a = c - r) / 2)) * a + f * y * ((o = p((o = i - t) / 2)) * o))),
          b = p(v),
          S = v ? function(e) {
            var n = p(e *= v) / b,
              a = p(v - e) / b,
              o = a * h + n * C,
              t = a * N + n * L;
            return [s(t, o) * u, s(a * g + n * m, E(o * o + t * t)) * u]
          } : function() {
            return [t * u, r * u]
          };
        return S.distance = v, S
      }
      let ni = e => e;
      var nc, nu, nl, nf, ng, ns, nd, ny, nm, nh, nN, nC, np, nL, nE, nv, nb, nA, nS, nT, n_, nw, nM, nx, nP, nk, nR, nF, nI, nB, nD, nO, nj, nU, nz, nG = new o,
        nK = new o,
        nV = {
          point: S,
          lineStart: S,
          lineEnd: S,
          polygonStart: function() {
            nV.lineStart = nq, nV.lineEnd = nX
          },
          polygonEnd: function() {
            nV.lineStart = nV.lineEnd = nV.point = S, nG.add(f(nK)), nK = new o
          },
          result: function() {
            var e = nG / 2;
            return nG = new o, e
          }
        };

      function nq() {
        nV.point = nH
      }

      function nH(e, n) {
        nV.point = nZ, nO = nU = e, nj = nz = n
      }

      function nZ(e, n) {
        nK.add(nz * e - nU * n), nU = e, nz = n
      }

      function nX() {
        nZ(nO, nj)
      }
      var nW = 1 / 0,
        nY = 1 / 0,
        nJ = -1 / 0,
        nQ = nJ;
      let n$ = {
        point: function(e, n) {
          e < nW && (nW = e), e > nJ && (nJ = e), n < nY && (nY = n), n > nQ && (nQ = n)
        },
        lineStart: S,
        lineEnd: S,
        polygonStart: S,
        polygonEnd: S,
        result: function() {
          var e = [
            [nW, nY],
            [nJ, nQ]
          ];
          return nJ = nQ = -(nY = nW = 1 / 0), e
        }
      };
      var n0, n1, n2, n5, n6 = 0,
        n3 = 0,
        n9 = 0,
        n4 = 0,
        n8 = 0,
        n7 = 0,
        ae = 0,
        an = 0,
        aa = 0,
        ao = {
          point: at,
          lineStart: ar,
          lineEnd: au,
          polygonStart: function() {
            ao.lineStart = al, ao.lineEnd = af
          },
          polygonEnd: function() {
            ao.point = at, ao.lineStart = ar, ao.lineEnd = au
          },
          result: function() {
            var e = aa ? [ae / aa, an / aa] : n7 ? [n4 / n7, n8 / n7] : n9 ? [n6 / n9, n3 / n9] : [NaN, NaN];
            return n6 = n3 = n9 = n4 = n8 = n7 = ae = an = aa = 0, e
          }
        };

      function at(e, n) {
        n6 += e, n3 += n, ++n9
      }

      function ar() {
        ao.point = ai
      }

      function ai(e, n) {
        ao.point = ac, at(n2 = e, n5 = n)
      }

      function ac(e, n) {
        var a = e - n2,
          o = n - n5,
          t = E(a * a + o * o);
        n4 += t * (n2 + e) / 2, n8 += t * (n5 + n) / 2, n7 += t, at(n2 = e, n5 = n)
      }

      function au() {
        ao.point = at
      }

      function al() {
        ao.point = ag
      }

      function af() {
        as(n0, n1)
      }

      function ag(e, n) {
        ao.point = as, at(n0 = n2 = e, n1 = n5 = n)
      }

      function as(e, n) {
        var a = e - n2,
          o = n - n5,
          t = E(a * a + o * o);
        n4 += t * (n2 + e) / 2, n8 += t * (n5 + n) / 2, n7 += t, ae += (t = n5 * e - n2 * n) * (n2 + e), an += t * (n5 + n), aa += 3 * t, at(n2 = e, n5 = n)
      }

      function ad(e) {
        this._context = e
      }
      ad.prototype = {
        _radius: 4.5,
        pointRadius: function(e) {
          return this._radius = e, this
        },
        polygonStart: function() {
          this._line = 0
        },
        polygonEnd: function() {
          this._line = NaN
        },
        lineStart: function() {
          this._point = 0
        },
        lineEnd: function() {
          0 === this._line && this._context.closePath(), this._point = NaN
        },
        point: function(e, n) {
          switch (this._point) {
            case 0:
              this._context.moveTo(e, n), this._point = 1;
              break;
            case 1:
              this._context.lineTo(e, n);
              break;
            default:
              this._context.moveTo(e + this._radius, n), this._context.arc(e, n, this._radius, 0, c)
          }
        },
        result: S
      };
      var ay, am, ah, aN, aC, ap = new o,
        aL = {
          point: S,
          lineStart: function() {
            aL.point = aE
          },
          lineEnd: function() {
            ay && av(am, ah), aL.point = S
          },
          polygonStart: function() {
            ay = !0
          },
          polygonEnd: function() {
            ay = null
          },
          result: function() {
            var e = +ap;
            return ap = new o, e
          }
        };

      function aE(e, n) {
        aL.point = av, am = aN = e, ah = aC = n
      }

      function av(e, n) {
        aN -= e, aC -= n, ap.add(E(aN * aN + aC * aC)), aN = e, aC = n
      }

      function ab() {
        this._string = []
      }

      function aA(e) {
        return "m0," + e + "a" + e + "," + e + " 0 1,1 0," + -2 * e + "a" + e + "," + e + " 0 1,1 0," + 2 * e + "z"
      }

      function aS(e, n) {
        var a, o, t = 4.5;

        function r(e) {
          return e && ("function" == typeof t && o.pointRadius(+t.apply(this, arguments)), P(e, a(o))), o.result()
        }
        return r.area = function(e) {
          return P(e, a(nV)), nV.result()
        }, r.measure = function(e) {
          return P(e, a(aL)), aL.result()
        }, r.bounds = function(e) {
          return P(e, a(n$)), n$.result()
        }, r.centroid = function(e) {
          return P(e, a(ao)), ao.result()
        }, r.projection = function(n) {
          return arguments.length ? (a = null == n ? (e = null, ni) : (e = n).stream, r) : e
        }, r.context = function(e) {
          return arguments.length ? (o = null == e ? (n = null, new ab) : new ad(n = e), "function" != typeof t && o.pointRadius(t), r) : n
        }, r.pointRadius = function(e) {
          return arguments.length ? (t = "function" == typeof e ? e : (o.pointRadius(+e), +e), r) : t
        }, r.projection(e).context(n)
      }

      function aT(e) {
        return {
          stream: a_(e)
        }
      }

      function a_(e) {
        return function(n) {
          var a = new aw;
          for (var o in e) a[o] = e[o];
          return a.stream = n, a
        }
      }

      function aw() {}

      function aM(e, n, a) {
        var o = e.clipExtent && e.clipExtent();
        return e.scale(150).translate([0, 0]), null != o && e.clipExtent(null), P(a, e.stream(n$)), n(n$.result()), null != o && e.clipExtent(o), e
      }

      function ax(e, n, a) {
        return aM(e, function(a) {
          var o = n[1][0] - n[0][0],
            t = n[1][1] - n[0][1],
            r = Math.min(o / (a[1][0] - a[0][0]), t / (a[1][1] - a[0][1])),
            i = +n[0][0] + (o - r * (a[1][0] + a[0][0])) / 2,
            c = +n[0][1] + (t - r * (a[1][1] + a[0][1])) / 2;
          e.scale(150 * r).translate([i, c])
        }, a)
      }

      function aP(e, n, a) {
        return ax(e, [
          [0, 0], n
        ], a)
      }

      function ak(e, n, a) {
        return aM(e, function(a) {
          var o = +n,
            t = o / (a[1][0] - a[0][0]),
            r = (o - t * (a[1][0] + a[0][0])) / 2,
            i = -t * a[0][1];
          e.scale(150 * t).translate([r, i])
        }, a)
      }

      function aR(e, n, a) {
        return aM(e, function(a) {
          var o = +n,
            t = o / (a[1][1] - a[0][1]),
            r = -t * a[0][0],
            i = (o - t * (a[1][1] + a[0][1])) / 2;
          e.scale(150 * t).translate([r, i])
        }, a)
      }
      ab.prototype = {
        _radius: 4.5,
        _circle: aA(4.5),
        pointRadius: function(e) {
          return (e *= 1) !== this._radius && (this._radius = e, this._circle = null), this
        },
        polygonStart: function() {
          this._line = 0
        },
        polygonEnd: function() {
          this._line = NaN
        },
        lineStart: function() {
          this._point = 0
        },
        lineEnd: function() {
          0 === this._line && this._string.push("Z"), this._point = NaN
        },
        point: function(e, n) {
          switch (this._point) {
            case 0:
              this._string.push("M", e, ",", n), this._point = 1;
              break;
            case 1:
              this._string.push("L", e, ",", n);
              break;
            default:
              null == this._circle && (this._circle = aA(this._radius)), this._string.push("M", e, ",", n, this._circle)
          }
        },
        result: function() {
          if (!this._string.length) return null;
          var e = this._string.join("");
          return this._string = [], e
        }
      }, aw.prototype = {
        constructor: aw,
        point: function(e, n) {
          this.stream.point(e, n)
        },
        sphere: function() {
          this.stream.sphere()
        },
        lineStart: function() {
          this.stream.lineStart()
        },
        lineEnd: function() {
          this.stream.lineEnd()
        },
        polygonStart: function() {
          this.stream.polygonStart()
        },
        polygonEnd: function() {
          this.stream.polygonEnd()
        }
      };
      var aF = d(30 * l);

      function aI(e, n) {
        var a;
        return +n ? function(e, n) {
          function a(o, t, r, i, c, u, l, g, d, y, m, h, N, C) {
            var p = l - o,
              L = g - t,
              v = p * p + L * L;
            if (v > 4 * n && N--) {
              var b = i + y,
                S = c + m,
                T = u + h,
                _ = E(b * b + S * S + T * T),
                w = A(T /= _),
                M = 1e-6 > f(f(T) - 1) || 1e-6 > f(r - d) ? (r + d) / 2 : s(S, b),
                x = e(M, w),
                P = x[0],
                k = x[1],
                R = P - o,
                F = k - t,
                I = L * R - p * F;
              (I * I / v > n || f((p * R + L * F) / v - .5) > .3 || i * y + c * m + u * h < aF) && (a(o, t, r, i, c, u, P, k, M, b /= _, S /= _, T, N, C), C.point(P, k), a(P, k, M, b, S, T, l, g, d, y, m, h, N, C))
            }
          }
          return function(n) {
            var o, t, r, i, c, u, l, f, g, s, d, y, m = {
              point: h,
              lineStart: N,
              lineEnd: p,
              polygonStart: function() {
                n.polygonStart(), m.lineStart = L
              },
              polygonEnd: function() {
                n.polygonEnd(), m.lineStart = N
              }
            };

            function h(a, o) {
              a = e(a, o), n.point(a[0], a[1])
            }

            function N() {
              f = NaN, m.point = C, n.lineStart()
            }

            function C(o, t) {
              var r = H([o, t]),
                i = e(o, t);
              a(f, g, l, s, d, y, f = i[0], g = i[1], l = o, s = r[0], d = r[1], y = r[2], 16, n), n.point(f, g)
            }

            function p() {
              m.point = h, n.lineEnd()
            }

            function L() {
              N(), m.point = E, m.lineEnd = v
            }

            function E(e, n) {
              C(o = e, n), t = f, r = g, i = s, c = d, u = y, m.point = C
            }

            function v() {
              a(f, g, l, s, d, y, t, r, o, i, c, u, 16, n), m.lineEnd = p, p()
            }
            return m
          }
        }(e, n) : (a = e, a_({
          point: function(e, n) {
            e = a(e, n), this.stream.point(e[0], e[1])
          }
        }))
      }
      var aB = a_({
        point: function(e, n) {
          this.stream.point(e * l, n * l)
        }
      });

      function aD(e, n, a, o, t, r) {
        if (!r) {
          function i(r, i) {
            return [n + e * (r *= o), a - e * (i *= t)]
          }
          return i.invert = function(r, i) {
            return [(r - n) / e * o, (a - i) / e * t]
          }, i
        }
        var c = d(r),
          u = p(r),
          l = c * e,
          f = u * e,
          g = c / e,
          s = u / e,
          y = (u * a - c * n) / e,
          m = (u * n + c * a) / e;

        function h(e, r) {
          return [l * (e *= o) - f * (r *= t) + n, a - f * e - l * r]
        }
        return h.invert = function(e, n) {
          return [o * (g * e - s * n + y), t * (m - s * e - g * n)]
        }, h
      }

      function aO(e) {
        return aj(function() {
          return e
        })()
      }

      function aj(e) {
        var n, a, o, t, r, i, c, f, g, s, d = 150,
          y = 480,
          m = 250,
          h = 0,
          N = 0,
          C = 0,
          p = 0,
          L = 0,
          v = 0,
          b = 1,
          A = 1,
          S = null,
          T = eV,
          _ = null,
          w = ni,
          M = .5;

        function x(e) {
          return f(e[0] * l, e[1] * l)
        }

        function P(e) {
          return (e = f.invert(e[0], e[1])) && [e[0] * u, e[1] * u]
        }

        function k() {
          var e = aD(d, 0, 0, b, A, v).apply(null, n(h, N)),
            o = aD(d, y - e[0], m - e[1], b, A, v);
          return a = eS(C, p, L), c = eb(n, o), f = eb(a, c), i = aI(c, M), R()
        }

        function R() {
          return g = s = null, x
        }
        return x.stream = function(e) {
            var n;
            return g && s === e ? g : g = aB((n = a, a_({
              point: function(e, a) {
                var o = n(e, a);
                return this.stream.point(o[0], o[1])
              }
            }))(T(i(w(s = e)))))
          }, x.preclip = function(e) {
            return arguments.length ? (T = e, S = void 0, R()) : T
          }, x.postclip = function(e) {
            return arguments.length ? (w = e, _ = o = t = r = null, R()) : w
          }, x.clipAngle = function(e) {
            return arguments.length ? (T = +e ? eq(S = e * l) : (S = null, eV), R()) : S * u
          }, x.clipExtent = function(e) {
            return arguments.length ? (w = null == e ? (_ = o = t = r = null, ni) : eH(_ = +e[0][0], o = +e[0][1], t = +e[1][0], r = +e[1][1]), R()) : null == _ ? null : [
              [_, o],
              [t, r]
            ]
          }, x.scale = function(e) {
            return arguments.length ? (d = +e, k()) : d
          }, x.translate = function(e) {
            return arguments.length ? (y = +e[0], m = +e[1], k()) : [y, m]
          }, x.center = function(e) {
            return arguments.length ? (h = e[0] % 360 * l, N = e[1] % 360 * l, k()) : [h * u, N * u]
          }, x.rotate = function(e) {
            return arguments.length ? (C = e[0] % 360 * l, p = e[1] % 360 * l, L = e.length > 2 ? e[2] % 360 * l : 0, k()) : [C * u, p * u, L * u]
          }, x.angle = function(e) {
            return arguments.length ? (v = e % 360 * l, k()) : v * u
          }, x.reflectX = function(e) {
            return arguments.length ? (b = e ? -1 : 1, k()) : b < 0
          }, x.reflectY = function(e) {
            return arguments.length ? (A = e ? -1 : 1, k()) : A < 0
          }, x.precision = function(e) {
            return arguments.length ? (i = aI(c, M = e * e), R()) : E(M)
          }, x.fitExtent = function(e, n) {
            return ax(x, e, n)
          }, x.fitSize = function(e, n) {
            return aP(x, e, n)
          }, x.fitWidth = function(e, n) {
            return ak(x, e, n)
          }, x.fitHeight = function(e, n) {
            return aR(x, e, n)
          },
          function() {
            return n = e.apply(this, arguments), x.invert = n.invert && P, k()
          }
      }

      function aU(e) {
        var n = 0,
          a = t / 3,
          o = aj(e),
          r = o(n, a);
        return r.parallels = function(e) {
          return arguments.length ? o(n = e[0] * l, a = e[1] * l) : [n * u, a * u]
        }, r
      }

      function az(e, n) {
        var a = p(e),
          o = (a + p(n)) / 2;
        if (1e-6 > f(o)) {
          var r = d(e);

          function i(e, n) {
            return [e * r, p(n) / r]
          }
          return i.invert = function(e, n) {
            return [e / r, A(n * r)]
          }, i
        }
        var c = 1 + a * (2 * o - a),
          u = E(c) / o;

        function l(e, n) {
          var a = E(c - 2 * o * p(n)) / o;
          return [a * p(e *= o), u - a * d(e)]
        }
        return l.invert = function(e, n) {
          var a = u - n,
            r = s(e, f(a)) * L(a);
          return a * o < 0 && (r -= t * L(e) * L(a)), [r / o, A((c - (e * e + a * a) * o * o) / (2 * o))]
        }, l
      }

      function aG() {
        return aU(az).scale(155.424).center([0, 33.6442])
      }

      function aK() {
        return aG().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7])
      }

      function aV() {
        var e, n, a, o, t, r, i = aK(),
          c = aG().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
          u = aG().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
          l = {
            point: function(e, n) {
              r = [e, n]
            }
          };

        function f(e) {
          var n = e[0],
            i = e[1];
          return r = null, a.point(n, i), r || (o.point(n, i), r) || (t.point(n, i), r)
        }

        function g() {
          return e = n = null, f
        }
        return f.invert = function(e) {
          var n = i.scale(),
            a = i.translate(),
            o = (e[0] - a[0]) / n,
            t = (e[1] - a[1]) / n;
          return (t >= .12 && t < .234 && o >= -.425 && o < -.214 ? c : t >= .166 && t < .234 && o >= -.214 && o < -.115 ? u : i).invert(e)
        }, f.stream = function(a) {
          var o, t;
          return e && n === a ? e : (t = (o = [i.stream(n = a), c.stream(a), u.stream(a)]).length, e = {
            point: function(e, n) {
              for (var a = -1; ++a < t;) o[a].point(e, n)
            },
            sphere: function() {
              for (var e = -1; ++e < t;) o[e].sphere()
            },
            lineStart: function() {
              for (var e = -1; ++e < t;) o[e].lineStart()
            },
            lineEnd: function() {
              for (var e = -1; ++e < t;) o[e].lineEnd()
            },
            polygonStart: function() {
              for (var e = -1; ++e < t;) o[e].polygonStart()
            },
            polygonEnd: function() {
              for (var e = -1; ++e < t;) o[e].polygonEnd()
            }
          })
        }, f.precision = function(e) {
          return arguments.length ? (i.precision(e), c.precision(e), u.precision(e), g()) : i.precision()
        }, f.scale = function(e) {
          return arguments.length ? (i.scale(e), c.scale(.35 * e), u.scale(e), f.translate(i.translate())) : i.scale()
        }, f.translate = function(e) {
          if (!arguments.length) return i.translate();
          var n = i.scale(),
            r = +e[0],
            f = +e[1];
          return a = i.translate(e).clipExtent([
            [r - .455 * n, f - .238 * n],
            [r + .455 * n, f + .238 * n]
          ]).stream(l), o = c.translate([r - .307 * n, f + .201 * n]).clipExtent([
            [r - .425 * n + 1e-6, f + .12 * n + 1e-6],
            [r - .214 * n - 1e-6, f + .234 * n - 1e-6]
          ]).stream(l), t = u.translate([r - .205 * n, f + .212 * n]).clipExtent([
            [r - .214 * n + 1e-6, f + .166 * n + 1e-6],
            [r - .115 * n - 1e-6, f + .234 * n - 1e-6]
          ]).stream(l), g()
        }, f.fitExtent = function(e, n) {
          return ax(f, e, n)
        }, f.fitSize = function(e, n) {
          return aP(f, e, n)
        }, f.fitWidth = function(e, n) {
          return ak(f, e, n)
        }, f.fitHeight = function(e, n) {
          return aR(f, e, n)
        }, f.scale(1070)
      }

      function aq(e) {
        return function(n, a) {
          var o = d(n),
            t = d(a),
            r = e(o * t);
          return r === 1 / 0 ? [2, 0] : [r * t * p(n), r * p(a)]
        }
      }

      function aH(e) {
        return function(n, a) {
          var o = E(n * n + a * a),
            t = e(o),
            r = p(t);
          return [s(n * r, o * d(t)), A(o && a * r / o)]
        }
      }
      var aZ = aq(function(e) {
        return E(2 / (1 + e))
      });

      function aX() {
        return aO(aZ).scale(124.75).clipAngle(179.999)
      }
      aZ.invert = aH(function(e) {
        return 2 * A(e / 2)
      });
      var aW = aq(function(e) {
        return (e = b(e)) && e / p(e)
      });

      function aY() {
        return aO(aW).scale(79.4188).clipAngle(179.999)
      }

      function aJ(e, n) {
        return [e, N(v((r + n) / 2))]
      }

      function aQ() {
        return a$(aJ).scale(961 / c)
      }

      function a$(e) {
        var n, a, o, r = aO(e),
          i = r.center,
          c = r.scale,
          u = r.translate,
          l = r.clipExtent,
          f = null;

        function g() {
          var i = t * c(),
            u = r(eM(r.rotate()).invert([0, 0]));
          return l(null == f ? [
            [u[0] - i, u[1] - i],
            [u[0] + i, u[1] + i]
          ] : e === aJ ? [
            [Math.max(u[0] - i, f), n],
            [Math.min(u[0] + i, a), o]
          ] : [
            [f, Math.max(u[1] - i, n)],
            [a, Math.min(u[1] + i, o)]
          ])
        }
        return r.scale = function(e) {
          return arguments.length ? (c(e), g()) : c()
        }, r.translate = function(e) {
          return arguments.length ? (u(e), g()) : u()
        }, r.center = function(e) {
          return arguments.length ? (i(e), g()) : i()
        }, r.clipExtent = function(e) {
          return arguments.length ? (null == e ? f = n = a = o = null : (f = +e[0][0], n = +e[0][1], a = +e[1][0], o = +e[1][1]), g()) : null == f ? null : [
            [f, n],
            [a, o]
          ]
        }, g()
      }

      function a0(e) {
        return v((r + e) / 2)
      }

      function a1(e, n) {
        var a = d(e),
          o = e === n ? p(e) : N(a / d(n)) / N(a0(n) / a0(e)),
          i = a * C(a0(e), o) / o;
        if (!o) return aJ;

        function c(e, n) {
          i > 0 ? n < -r + 1e-6 && (n = -r + 1e-6) : n > r - 1e-6 && (n = r - 1e-6);
          var a = i / C(a0(n), o);
          return [a * p(o * e), i - a * d(o * e)]
        }
        return c.invert = function(e, n) {
          var a = i - n,
            c = L(o) * E(e * e + a * a),
            u = s(e, f(a)) * L(a);
          return a * o < 0 && (u -= t * L(e) * L(a)), [u / o, 2 * g(C(i / c, 1 / o)) - r]
        }, c
      }

      function a2() {
        return aU(a1).scale(109.5).parallels([30, 30])
      }

      function a5(e, n) {
        return [e, n]
      }

      function a6() {
        return aO(a5).scale(152.63)
      }

      function a3(e, n) {
        var a = d(e),
          o = e === n ? p(e) : (a - d(n)) / (n - e),
          r = a / o + e;
        if (1e-6 > f(o)) return a5;

        function i(e, n) {
          var a = r - n,
            t = o * e;
          return [a * p(t), r - a * d(t)]
        }
        return i.invert = function(e, n) {
          var a = r - n,
            i = s(e, f(a)) * L(a);
          return a * o < 0 && (i -= t * L(e) * L(a)), [i / o, r - L(o) * E(e * e + a * a)]
        }, i
      }

      function a9() {
        return aU(a3).scale(131.154).center([0, 13.9389])
      }
      aW.invert = aH(function(e) {
        return e
      }), aJ.invert = function(e, n) {
        return [e, 2 * g(m(n)) - r]
      }, a5.invert = a5;
      var a4 = E(3) / 2;

      function a8(e, n) {
        var a = A(a4 * p(n)),
          o = a * a,
          t = o * o * o;
        return [e * d(a) / (a4 * (1.340264 + -.24331799999999998 * o + t * (.0062510000000000005 + .034164 * o))), a * (1.340264 + -.081106 * o + t * (893e-6 + .003796 * o))]
      }

      function a7() {
        return aO(a8).scale(177.158)
      }

      function oe(e, n) {
        var a = d(n),
          o = d(e) * a;
        return [a * p(e) / o, p(n) / o]
      }

      function on() {
        return aO(oe).scale(144.049).clipAngle(60)
      }

      function oa() {
        var e, n, a, o, t, r, i, c = 1,
          f = 0,
          g = 0,
          s = 1,
          y = 1,
          m = 0,
          h = null,
          N = 1,
          C = 1,
          L = a_({
            point: function(e, n) {
              var a = b([e, n]);
              this.stream.point(a[0], a[1])
            }
          }),
          E = ni;

        function v() {
          return N = c * s, C = c * y, r = i = null, b
        }

        function b(a) {
          var o = a[0] * N,
            t = a[1] * C;
          if (m) {
            var r = t * e - o * n;
            o = o * e + t * n, t = r
          }
          return [o + f, t + g]
        }
        return b.invert = function(a) {
          var o = a[0] - f,
            t = a[1] - g;
          if (m) {
            var r = t * e + o * n;
            o = o * e - t * n, t = r
          }
          return [o / N, t / C]
        }, b.stream = function(e) {
          return r && i === e ? r : r = L(E(i = e))
        }, b.postclip = function(e) {
          return arguments.length ? (E = e, h = a = o = t = null, v()) : E
        }, b.clipExtent = function(e) {
          return arguments.length ? (E = null == e ? (h = a = o = t = null, ni) : eH(h = +e[0][0], a = +e[0][1], o = +e[1][0], t = +e[1][1]), v()) : null == h ? null : [
            [h, a],
            [o, t]
          ]
        }, b.scale = function(e) {
          return arguments.length ? (c = +e, v()) : c
        }, b.translate = function(e) {
          return arguments.length ? (f = +e[0], g = +e[1], v()) : [f, g]
        }, b.angle = function(a) {
          return arguments.length ? (n = p(m = a % 360 * l), e = d(m), v()) : m * u
        }, b.reflectX = function(e) {
          return arguments.length ? (s = e ? -1 : 1, v()) : s < 0
        }, b.reflectY = function(e) {
          return arguments.length ? (y = e ? -1 : 1, v()) : y < 0
        }, b.fitExtent = function(e, n) {
          return ax(b, e, n)
        }, b.fitSize = function(e, n) {
          return aP(b, e, n)
        }, b.fitWidth = function(e, n) {
          return ak(b, e, n)
        }, b.fitHeight = function(e, n) {
          return aR(b, e, n)
        }, b
      }

      function oo(e, n) {
        var a = n * n,
          o = a * a;
        return [e * (.8707 - .131979 * a + o * (-.013791 + o * (.003971 * a - .001529 * o))), n * (1.007226 + a * (.015085 + o * (-.044475 + .028874 * a - .005916 * o)))]
      }

      function ot() {
        return aO(oo).scale(175.295)
      }

      function or(e, n) {
        return [d(n) * p(e), p(n)]
      }

      function oi() {
        return aO(or).scale(249.5).clipAngle(90.000001)
      }

      function oc(e, n) {
        var a = d(n),
          o = 1 + d(e) * a;
        return [a * p(e) / o, p(n) / o]
      }

      function ou() {
        return aO(oc).scale(250).clipAngle(142)
      }

      function ol(e, n) {
        return [N(v((r + n) / 2)), -e]
      }

      function of() {
        var e = a$(ol),
          n = e.center,
          a = e.rotate;
        return e.center = function(e) {
          return arguments.length ? n([-e[1], e[0]]) : [(e = n())[1], -e[0]]
        }, e.rotate = function(e) {
          return arguments.length ? a([e[0], e[1], e.length > 2 ? e[2] + 90 : 90]) : [(e = a())[0], e[1], e[2] - 90]
        }, a([0, 0, 90]).scale(159.155)
      }
      a8.invert = function(e, n) {
        for (var a, o, t = n, r = t * t, i = r * r * r, c = 0; c < 12 && (o = t * (1.340264 + -.081106 * r + i * (893e-6 + .003796 * r)) - n, t -= a = o / (1.340264 + -.24331799999999998 * r + i * (.0062510000000000005 + .034164 * r)), i = (r = t * t) * r * r, !(1e-12 > f(a))); ++c);
        return [a4 * e * (1.340264 + -.24331799999999998 * r + i * (.0062510000000000005 + .034164 * r)) / d(t), A(p(t) / a4)]
      }, oe.invert = aH(g), oo.invert = function(e, n) {
        var a, o = n,
          t = 25;
        do {
          var r = o * o,
            i = r * r;
          o -= a = (o * (1.007226 + r * (.015085 + i * (-.044475 + .028874 * r - .005916 * i))) - n) / (1.007226 + r * (.045255 + i * (-.311325 + .259866 * r - .005916 * 11 * i)))
        } while (f(a) > 1e-6 && --t > 0);
        return [e / (.8707 + (r = o * o) * (-.131979 + r * (-.013791 + r * r * r * (.003971 - .001529 * r)))), o]
      }, or.invert = aH(A), oc.invert = aH(function(e) {
        return 2 * g(e)
      }), ol.invert = function(e, n) {
        return [-n, 2 * g(m(e)) - r]
      }
    },
    82114: e => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    83973: (e, n) => {
      "use strict";
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = function(e, n) {
        return e.reduce((e, a) => {
          let o = String(a[n]);
          return e[o] || (e[o] = []), e[o].push(a), e
        }, {})
      }
    },
    91213: (e, n, a) => {
      "use strict";
      a.r(n), a.d(n, {
        create: () => r,
        creator: () => o.A,
        local: () => c,
        matcher: () => l.A,
        namespace: () => f.A,
        namespaces: () => g.A,
        pointer: () => s.A,
        pointers: () => y,
        select: () => t.A,
        selectAll: () => N,
        selection: () => h.Ay,
        selector: () => C.A,
        selectorAll: () => p.A,
        style: () => L.j,
        window: () => E.A
      });
      var o = a(5823),
        t = a(24373);

      function r(e) {
        return (0, t.A)((0, o.A)(e).call(document.documentElement))
      }
      var i = 0;

      function c() {
        return new u
      }

      function u() {
        this._ = "@" + (++i).toString(36)
      }
      u.prototype = c.prototype = {
        constructor: u,
        get: function(e) {
          for (var n = this._; !(n in e);)
            if (!(e = e.parentNode)) return;
          return e[n]
        },
        set: function(e, n) {
          return e[this._] = n
        },
        remove: function(e) {
          return this._ in e && delete e[this._]
        },
        toString: function() {
          return this._
        }
      };
      var l = a(1605),
        f = a(68908),
        g = a(66161),
        s = a(67770),
        d = a(25640);

      function y(e, n) {
        return e.target && (e = (0, d.A)(e), void 0 === n && (n = e.currentTarget), e = e.touches || [e]), Array.from(e, e => (0, s.A)(e, n))
      }
      var m = a(64522),
        h = a(91242);

      function N(e) {
        return "string" == typeof e ? new h.LN([document.querySelectorAll(e)], [document.documentElement]) : new h.LN([null == e ? [] : (0, m.A)(e)], h.zr)
      }
      var C = a(18808),
        p = a(22783),
        L = a(55475),
        E = a(55333)
    },
    91242: (e, n, a) => {
      "use strict";
      a.d(n, {
        LN: () => O,
        Ay: () => U,
        zr: () => D
      });
      var o = a(18808),
        t = a(64522),
        r = a(22783),
        i = a(1605),
        c = Array.prototype.find;

      function u() {
        return this.firstElementChild
      }
      var l = Array.prototype.filter;

      function f() {
        return this.children
      }

      function g(e) {
        return Array(e.length)
      }

      function s(e, n) {
        this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = n
      }

      function d(e, n, a, o, t, r) {
        for (var i, c = 0, u = n.length, l = r.length; c < l; ++c)(i = n[c]) ? (i.__data__ = r[c], o[c] = i) : a[c] = new s(e, r[c]);
        for (; c < u; ++c)(i = n[c]) && (t[c] = i)
      }

      function y(e, n, a, o, t, r, i) {
        var c, u, l, f = new Map,
          g = n.length,
          d = r.length,
          y = Array(g);
        for (c = 0; c < g; ++c)(u = n[c]) && (y[c] = l = i.call(u, u.__data__, c, n) + "", f.has(l) ? t[c] = u : f.set(l, u));
        for (c = 0; c < d; ++c) l = i.call(e, r[c], c, r) + "", (u = f.get(l)) ? (o[c] = u, u.__data__ = r[c], f.delete(l)) : a[c] = new s(e, r[c]);
        for (c = 0; c < g; ++c)(u = n[c]) && f.get(y[c]) === u && (t[c] = u)
      }

      function m(e) {
        return e.__data__
      }

      function h(e, n) {
        return e < n ? -1 : e > n ? 1 : e >= n ? 0 : NaN
      }
      s.prototype = {
        constructor: s,
        appendChild: function(e) {
          return this._parent.insertBefore(e, this._next)
        },
        insertBefore: function(e, n) {
          return this._parent.insertBefore(e, n)
        },
        querySelector: function(e) {
          return this._parent.querySelector(e)
        },
        querySelectorAll: function(e) {
          return this._parent.querySelectorAll(e)
        }
      };
      var N = a(68908),
        C = a(55475);

      function p(e) {
        return e.trim().split(/^|\s+/)
      }

      function L(e) {
        return e.classList || new E(e)
      }

      function E(e) {
        this._node = e, this._names = p(e.getAttribute("class") || "")
      }

      function v(e, n) {
        for (var a = L(e), o = -1, t = n.length; ++o < t;) a.add(n[o])
      }

      function b(e, n) {
        for (var a = L(e), o = -1, t = n.length; ++o < t;) a.remove(n[o])
      }

      function A() {
        this.textContent = ""
      }

      function S() {
        this.innerHTML = ""
      }

      function T() {
        this.nextSibling && this.parentNode.appendChild(this)
      }

      function _() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
      }
      E.prototype = {
        add: function(e) {
          0 > this._names.indexOf(e) && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")))
        },
        remove: function(e) {
          var n = this._names.indexOf(e);
          n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
        },
        contains: function(e) {
          return this._names.indexOf(e) >= 0
        }
      };
      var w = a(5823);

      function M() {
        return null
      }

      function x() {
        var e = this.parentNode;
        e && e.removeChild(this)
      }

      function P() {
        var e = this.cloneNode(!1),
          n = this.parentNode;
        return n ? n.insertBefore(e, this.nextSibling) : e
      }

      function k() {
        var e = this.cloneNode(!0),
          n = this.parentNode;
        return n ? n.insertBefore(e, this.nextSibling) : e
      }

      function R(e) {
        return function() {
          var n = this.__on;
          if (n) {
            for (var a, o = 0, t = -1, r = n.length; o < r; ++o)(a = n[o], e.type && a.type !== e.type || a.name !== e.name) ? n[++t] = a : this.removeEventListener(a.type, a.listener, a.options);
            ++t ? n.length = t : delete this.__on
          }
        }
      }

      function F(e, n, a) {
        return function() {
          var o, t = this.__on,
            r = function(e) {
              n.call(this, e, this.__data__)
            };
          if (t) {
            for (var i = 0, c = t.length; i < c; ++i)
              if ((o = t[i]).type === e.type && o.name === e.name) {
                this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = r, o.options = a), o.value = n;
                return
              }
          }
          this.addEventListener(e.type, r, a), o = {
            type: e.type,
            name: e.name,
            value: n,
            listener: r,
            options: a
          }, t ? t.push(o) : this.__on = [o]
        }
      }
      var I = a(55333);

      function B(e, n, a) {
        var o = (0, I.A)(e),
          t = o.CustomEvent;
        "function" == typeof t ? t = new t(n, a) : (t = o.document.createEvent("Event"), a ? (t.initEvent(n, a.bubbles, a.cancelable), t.detail = a.detail) : t.initEvent(n, !1, !1)), e.dispatchEvent(t)
      }
      var D = [null];

      function O(e, n) {
        this._groups = e, this._parents = n
      }

      function j() {
        return new O([
          [document.documentElement]
        ], D)
      }
      O.prototype = j.prototype = {
        constructor: O,
        select: function(e) {
          "function" != typeof e && (e = (0, o.A)(e));
          for (var n = this._groups, a = n.length, t = Array(a), r = 0; r < a; ++r)
            for (var i, c, u = n[r], l = u.length, f = t[r] = Array(l), g = 0; g < l; ++g)(i = u[g]) && (c = e.call(i, i.__data__, g, u)) && ("__data__" in i && (c.__data__ = i.__data__), f[g] = c);
          return new O(t, this._parents)
        },
        selectAll: function(e) {
          if ("function" == typeof e) {
            var n;
            n = e, e = function() {
              var e = n.apply(this, arguments);
              return null == e ? [] : (0, t.A)(e)
            }
          } else e = (0, r.A)(e);
          for (var a = this._groups, o = a.length, i = [], c = [], u = 0; u < o; ++u)
            for (var l, f = a[u], g = f.length, s = 0; s < g; ++s)(l = f[s]) && (i.push(e.call(l, l.__data__, s, f)), c.push(l));
          return new O(i, c)
        },
        selectChild: function(e) {
          var n;
          return this.select(null == e ? u : (n = "function" == typeof e ? e : (0, i.j)(e), function() {
            return c.call(this.children, n)
          }))
        },
        selectChildren: function(e) {
          var n;
          return this.selectAll(null == e ? f : (n = "function" == typeof e ? e : (0, i.j)(e), function() {
            return l.call(this.children, n)
          }))
        },
        filter: function(e) {
          "function" != typeof e && (e = (0, i.A)(e));
          for (var n = this._groups, a = n.length, o = Array(a), t = 0; t < a; ++t)
            for (var r, c = n[t], u = c.length, l = o[t] = [], f = 0; f < u; ++f)(r = c[f]) && e.call(r, r.__data__, f, c) && l.push(r);
          return new O(o, this._parents)
        },
        data: function(e, n) {
          if (!arguments.length) return Array.from(this, m);
          var a = n ? y : d,
            o = this._parents,
            r = this._groups;
          "function" != typeof e && (E = e, e = function() {
            return E
          });
          for (var i = r.length, c = Array(i), u = Array(i), l = Array(i), f = 0; f < i; ++f) {
            var g = o[f],
              s = r[f],
              h = s.length,
              N = (0, t.A)(e.call(g, g && g.__data__, f, o)),
              C = N.length,
              p = u[f] = Array(C),
              L = c[f] = Array(C);
            a(g, s, p, L, l[f] = Array(h), N, n);
            for (var E, v, b, A = 0, S = 0; A < C; ++A)
              if (v = p[A]) {
                for (A >= S && (S = A + 1); !(b = L[S]) && ++S < C;);
                v._next = b || null
              }
          }
          return (c = new O(c, o))._enter = u, c._exit = l, c
        },
        enter: function() {
          return new O(this._enter || this._groups.map(g), this._parents)
        },
        exit: function() {
          return new O(this._exit || this._groups.map(g), this._parents)
        },
        join: function(e, n, a) {
          var o = this.enter(),
            t = this,
            r = this.exit();
          return o = "function" == typeof e ? e(o) : o.append(e + ""), null != n && (t = n(t)), null == a ? r.remove() : a(r), o && t ? o.merge(t).order() : t
        },
        merge: function(e) {
          if (!(e instanceof O)) throw Error("invalid merge");
          for (var n = this._groups, a = e._groups, o = n.length, t = a.length, r = Math.min(o, t), i = Array(o), c = 0; c < r; ++c)
            for (var u, l = n[c], f = a[c], g = l.length, s = i[c] = Array(g), d = 0; d < g; ++d)(u = l[d] || f[d]) && (s[d] = u);
          for (; c < o; ++c) i[c] = n[c];
          return new O(i, this._parents)
        },
        selection: function() {
          return this
        },
        order: function() {
          for (var e = this._groups, n = -1, a = e.length; ++n < a;)
            for (var o, t = e[n], r = t.length - 1, i = t[r]; --r >= 0;)(o = t[r]) && (i && 4 ^ o.compareDocumentPosition(i) && i.parentNode.insertBefore(o, i), i = o);
          return this
        },
        sort: function(e) {
          function n(n, a) {
            return n && a ? e(n.__data__, a.__data__) : !n - !a
          }
          e || (e = h);
          for (var a = this._groups, o = a.length, t = Array(o), r = 0; r < o; ++r) {
            for (var i, c = a[r], u = c.length, l = t[r] = Array(u), f = 0; f < u; ++f)(i = c[f]) && (l[f] = i);
            l.sort(n)
          }
          return new O(t, this._parents).order()
        },
        call: function() {
          var e = arguments[0];
          return arguments[0] = this, e.apply(null, arguments), this
        },
        nodes: function() {
          return Array.from(this)
        },
        node: function() {
          for (var e = this._groups, n = 0, a = e.length; n < a; ++n)
            for (var o = e[n], t = 0, r = o.length; t < r; ++t) {
              var i = o[t];
              if (i) return i
            }
          return null
        },
        size: function() {
          let e = 0;
          for (let n of this) ++e;
          return e
        },
        empty: function() {
          return !this.node()
        },
        each: function(e) {
          for (var n = this._groups, a = 0, o = n.length; a < o; ++a)
            for (var t, r = n[a], i = 0, c = r.length; i < c; ++i)(t = r[i]) && e.call(t, t.__data__, i, r);
          return this
        },
        attr: function(e, n) {
          var a = (0, N.A)(e);
          if (arguments.length < 2) {
            var o = this.node();
            return a.local ? o.getAttributeNS(a.space, a.local) : o.getAttribute(a)
          }
          return this.each((null == n ? a.local ? function(e) {
            return function() {
              this.removeAttributeNS(e.space, e.local)
            }
          } : function(e) {
            return function() {
              this.removeAttribute(e)
            }
          } : "function" == typeof n ? a.local ? function(e, n) {
            return function() {
              var a = n.apply(this, arguments);
              null == a ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, a)
            }
          } : function(e, n) {
            return function() {
              var a = n.apply(this, arguments);
              null == a ? this.removeAttribute(e) : this.setAttribute(e, a)
            }
          } : a.local ? function(e, n) {
            return function() {
              this.setAttributeNS(e.space, e.local, n)
            }
          } : function(e, n) {
            return function() {
              this.setAttribute(e, n)
            }
          })(a, n))
        },
        style: C.A,
        property: function(e, n) {
          return arguments.length > 1 ? this.each((null == n ? function(e) {
            return function() {
              delete this[e]
            }
          } : "function" == typeof n ? function(e, n) {
            return function() {
              var a = n.apply(this, arguments);
              null == a ? delete this[e] : this[e] = a
            }
          } : function(e, n) {
            return function() {
              this[e] = n
            }
          })(e, n)) : this.node()[e]
        },
        classed: function(e, n) {
          var a = p(e + "");
          if (arguments.length < 2) {
            for (var o = L(this.node()), t = -1, r = a.length; ++t < r;)
              if (!o.contains(a[t])) return !1;
            return !0
          }
          return this.each(("function" == typeof n ? function(e, n) {
            return function() {
              (n.apply(this, arguments) ? v : b)(this, e)
            }
          } : n ? function(e) {
            return function() {
              v(this, e)
            }
          } : function(e) {
            return function() {
              b(this, e)
            }
          })(a, n))
        },
        text: function(e) {
          return arguments.length ? this.each(null == e ? A : ("function" == typeof e ? function(e) {
            return function() {
              var n = e.apply(this, arguments);
              this.textContent = null == n ? "" : n
            }
          } : function(e) {
            return function() {
              this.textContent = e
            }
          })(e)) : this.node().textContent
        },
        html: function(e) {
          return arguments.length ? this.each(null == e ? S : ("function" == typeof e ? function(e) {
            return function() {
              var n = e.apply(this, arguments);
              this.innerHTML = null == n ? "" : n
            }
          } : function(e) {
            return function() {
              this.innerHTML = e
            }
          })(e)) : this.node().innerHTML
        },
        raise: function() {
          return this.each(T)
        },
        lower: function() {
          return this.each(_)
        },
        append: function(e) {
          var n = "function" == typeof e ? e : (0, w.A)(e);
          return this.select(function() {
            return this.appendChild(n.apply(this, arguments))
          })
        },
        insert: function(e, n) {
          var a = "function" == typeof e ? e : (0, w.A)(e),
            t = null == n ? M : "function" == typeof n ? n : (0, o.A)(n);
          return this.select(function() {
            return this.insertBefore(a.apply(this, arguments), t.apply(this, arguments) || null)
          })
        },
        remove: function() {
          return this.each(x)
        },
        clone: function(e) {
          return this.select(e ? k : P)
        },
        datum: function(e) {
          return arguments.length ? this.property("__data__", e) : this.node().__data__
        },
        on: function(e, n, a) {
          var o, t, r = (e + "").trim().split(/^|\s+/).map(function(e) {
              var n = "",
                a = e.indexOf(".");
              return a >= 0 && (n = e.slice(a + 1), e = e.slice(0, a)), {
                type: e,
                name: n
              }
            }),
            i = r.length;
          if (arguments.length < 2) {
            var c = this.node().__on;
            if (c) {
              for (var u, l = 0, f = c.length; l < f; ++l)
                for (o = 0, u = c[l]; o < i; ++o)
                  if ((t = r[o]).type === u.type && t.name === u.name) return u.value
            }
            return
          }
          for (o = 0, c = n ? F : R; o < i; ++o) this.each(c(r[o], n, a));
          return this
        },
        dispatch: function(e, n) {
          return this.each(("function" == typeof n ? function(e, n) {
            return function() {
              return B(this, e, n.apply(this, arguments))
            }
          } : function(e, n) {
            return function() {
              return B(this, e, n)
            }
          })(e, n))
        },
        [Symbol.iterator]: function*() {
          for (var e = this._groups, n = 0, a = e.length; n < a; ++n)
            for (var o, t = e[n], r = 0, i = t.length; r < i; ++r)(o = t[r]) && (yield o)
        }
      };
      let U = j
    }
  }
]);