(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1911], {
    5214: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "workAsyncStorage", {
        enumerable: !0,
        get: function() {
          return n.workAsyncStorageInstance
        }
      });
      let n = r(17828)
    },
    5585: e => {
      e.exports = {
        overlay: "modalWrapper_overlay__YYEDi",
        modal: "modalWrapper_modal__M1y6L",
        "overlay-fade-in": "modalWrapper_overlay-fade-in__xCPl5",
        "overlay-fade-out": "modalWrapper_overlay-fade-out__MSx7M",
        "modal-scale-in": "modalWrapper_modal-scale-in__Ld0gl",
        "modal-scale-out": "modalWrapper_modal-scale-out__IUp7n",
        header: "modalWrapper_header__cjFZs",
        title: "modalWrapper_title__RzvAM",
        closeButton: "modalWrapper_closeButton__Z8MLT",
        body: "modalWrapper_body__AsTAG"
      }
    },
    17828: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "workAsyncStorageInstance", {
        enumerable: !0,
        get: function() {
          return n
        }
      });
      let n = (0, r(64054).createAsyncLocalStorage)()
    },
    21924: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => c
      });
      var n = r(95155),
        a = r(29722),
        l = r(12115),
        i = r(98241),
        o = r.n(i),
        s = r(51047),
        u = r.n(s);
      let d = (e, t) => {
        if ("number" == typeof e && Number.isFinite(e)) return e;
        if ("string" == typeof e) {
          let t = Number(e);
          if (!Number.isNaN(t)) return t
        }
        return t
      };

      function c({
        featureName: e,
        marks: t,
        value: r,
        defaultValue: i,
        onChangeFunction: s,
        label: c,
        className: p,
        min: f,
        max: m,
        step: h,
        disabled: v,
        onChange: _,
        onFocus: b,
        onBlur: g,
        onPointerDown: w,
        onPointerUp: y,
        onPointerCancel: x,
        ...j
      }) {
        let E = d(f, 0),
          k = d(m, 100),
          P = d(h, 1) || 1,
          M = r ?? i ?? E,
          N = void 0 !== r,
          [W, C] = (0, l.useState)(M),
          [L, S] = (0, l.useState)(!1),
          [O, A] = (0, l.useState)(!1);
        (0, l.useEffect)(() => {
          N || C(i ?? E)
        }, [i, N, E]);
        let $ = N ? r ?? E : W,
          R = Math.min(k, Math.max(E, $)),
          T = Math.max(k - E, Number.EPSILON),
          D = (R - E) / T * 100;
        (0, l.useEffect)(() => {
          N || C(e => Math.min(k, Math.max(E, e)))
        }, [N, E, k]);
        let B = (0, l.useMemo)(() => t?.length ? t.map(e => ({
            ...e,
            normalizedValue: Math.min(k, Math.max(E, e.value)),
            position: Math.min(100, Math.max(0, (Math.min(k, Math.max(E, e.value)) - E) / T * 100))
          })) : [], [t, E, k, T]),
          z = (0, l.useMemo)(() => {
            if (!c) return `${R}`;
            let e = "function" == typeof c ? c(R) : c;
            return null == e || !1 === e ? `${R}` : e
          }, [c, R]),
          F = !v && (L || O),
          q = "string" == typeof e ? e : void 0;
        return (0, n.jsxs)("div", {
          className: o().inputContainerWrapper,
          "data-dashboard-feature-label": q,
          children: [e && (0, n.jsx)("h1", {
            className: o().featureName,
            style: {
              marginLeft: 0
            },
            children: e
          }), (0, n.jsx)("div", {
            className: (0, a.A)(o().inputWrapperDiv, u().wrapper, p),
            children: (0, n.jsx)("div", {
              className: u().sliderContent,
              children: (0, n.jsxs)("div", {
                className: u().sliderShell,
                onMouseEnter: () => S(!0),
                onMouseLeave: () => {
                  O || S(!1)
                },
                children: [(0, n.jsxs)("div", {
                  className: u().track,
                  children: [(0, n.jsx)("div", {
                    className: u().progress,
                    style: {
                      width: `${D}%`
                    }
                  }), (0, n.jsx)("div", {
                    className: u().thumb,
                    style: {
                      left: `calc(${D}% - (var(--thumb-size) / 2))`
                    },
                    "data-visible": F,
                    children: (0, n.jsx)("span", {
                      className: u().tooltip,
                      "data-visible": F,
                      children: z
                    })
                  })]
                }), (0, n.jsx)("input", {
                  ...j,
                  type: "range",
                  min: E,
                  max: k,
                  step: P,
                  value: R,
                  disabled: v,
                  className: u().range,
                  onChange: e => {
                    let t = Number(e.target.value);
                    Number.isNaN(t) || (N || C(t), s?.(t), _?.(e))
                  },
                  onFocus: e => {
                    S(!0), b?.(e)
                  },
                  onBlur: e => {
                    S(!1), g?.(e)
                  },
                  onPointerDown: e => {
                    A(!0), w?.(e)
                  },
                  onPointerUp: e => {
                    A(!1), y?.(e)
                  },
                  onPointerCancel: e => {
                    A(!1), x?.(e)
                  },
                  "aria-valuemin": E,
                  "aria-valuemax": k,
                  "aria-valuenow": R
                }), B.length > 0 && (0, n.jsx)("div", {
                  className: u().marks,
                  children: B.map((e, t) => (0, n.jsxs)("div", {
                    className: u().mark,
                    style: {
                      left: `${e.position}%`
                    },
                    children: [(0, n.jsx)("span", {
                      className: u().markDot,
                      "data-active": e.normalizedValue <= R
                    }), e.label && (0, n.jsx)("span", {
                      className: u().markLabel,
                      children: e.label
                    })]
                  }, `${e.value}-${t}`))
                })]
              })
            })
          })]
        })
      }
    },
    21957: (e, t, r) => {
      "use strict";

      function n({
        moduleIds: e
      }) {
        return null
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "PreloadChunks", {
        enumerable: !0,
        get: function() {
          return n
        }
      }), r(95155), r(47650), r(5214), r(2451)
    },
    24579: e => {
      e.exports = {
        wrapper: "tooltipWrapper_wrapper__XIQY2",
        tooltip: "tooltipWrapper_tooltip__vVc01"
      }
    },
    29722: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => n
      });
      let n = function() {
        for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++)(e = arguments[r]) && (t = function e(t) {
          var r, n, a = "";
          if ("string" == typeof t || "number" == typeof t) a += t;
          else if ("object" == typeof t)
            if (Array.isArray(t)) {
              var l = t.length;
              for (r = 0; r < l; r++) t[r] && (n = e(t[r])) && (a && (a += " "), a += n)
            } else
              for (n in t) t[n] && (a && (a += " "), a += n);
          return a
        }(e)) && (n && (n += " "), n += t);
        return n
      }
    },
    37206: (e, t, r) => {
      "use strict";
      r.d(t, {
        default: () => a.a
      });
      var n = r(75707),
        a = r.n(n)
    },
    41112: (e, t, r) => {
      "use strict";

      function n({
        reason: e,
        children: t
      }) {
        return t
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "BailoutToCSR", {
        enumerable: !0,
        get: function() {
          return n
        }
      }), r(1980)
    },
    44419: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 16053))
    },
    51047: e => {
      e.exports = {
        wrapper: "sliderWrapper_wrapper__gzM17",
        sliderContent: "sliderWrapper_sliderContent__uCR1G",
        sliderShell: "sliderWrapper_sliderShell__MTFUa",
        track: "sliderWrapper_track__Xgedw",
        progress: "sliderWrapper_progress__gFerd",
        thumb: "sliderWrapper_thumb__KYwhv",
        range: "sliderWrapper_range__EZCQS",
        marks: "sliderWrapper_marks__2rpOc",
        mark: "sliderWrapper_mark___KvGl",
        markDot: "sliderWrapper_markDot__rJqsU",
        markLabel: "sliderWrapper_markLabel__vO_PU",
        valueLabel: "sliderWrapper_valueLabel__bFZqo",
        tooltip: "sliderWrapper_tooltip__oZii8"
      }
    },
    57776: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => s
      });
      var n = r(95155),
        a = r(12115),
        l = r(47650),
        i = r(5585),
        o = r.n(i);

      function s({
        opened: e,
        onClose: t,
        onOverlayClose: r,
        onCloseButtonClick: i,
        onEscapeClose: s,
        title: u,
        centered: d = !0,
        size: c = "auto",
        closeOnOverlayClick: p = !0,
        withCloseButton: f = !0,
        centerTitle: m = !1,
        className: h,
        bodyClassName: v,
        children: _
      }) {
        let [b, g] = (0, a.useState)(e), [w, y] = (0, a.useState)(!1), [x, j] = (0, a.useState)(null), E = (0, a.useRef)(null), k = (0, a.useRef)(null), P = (0, a.useRef)(null), M = (0, a.useRef)(!1), N = e => {
          if (!e) return !1;
          let t = window.getComputedStyle(e).overflowY;
          return e.scrollHeight > e.clientHeight + 1 && ("auto" === t || "scroll" === t)
        }, W = e => {
          let t = k.current;
          if (!t || !e) return null;
          let r = e;
          for (; r && t.contains(r);) {
            if (N(r)) return r;
            r = r.parentElement
          }
          return null
        }, C = (e, t) => t < 0 ? e.scrollTop > 0 : !(t > 0) || e.scrollTop + e.clientHeight < e.scrollHeight;
        if ((0, a.useEffect)(() => {
            if (e) {
              g(!0), y(!1);
              return
            }
            return y(!0), E.current = setTimeout(() => {
              g(!1), y(!1)
            }, 180), () => {
              E.current && (clearTimeout(E.current), E.current = null)
            }
          }, [e]), (0, a.useEffect)(() => {
            if ("undefined" == typeof document) return;
            let e = document.createElement("div");
            return document.body.appendChild(e), j(e), () => {
              document.body.removeChild(e), j(null)
            }
          }, []), (0, a.useEffect)(() => {
            if (!b) return;
            let e = e => {
                "Escape" === e.key ? s ? s() : t() : ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(e.key) && !k.current?.contains(e.target) && e.preventDefault()
              },
              r = e => {
                let t = k.current;
                if (!t) return void e.preventDefault();
                let r = e.target;
                if (!(r && t.contains(r))) return void e.preventDefault();
                if (e instanceof WheelEvent) {
                  let t = W(r);
                  t && C(t, e.deltaY) || e.preventDefault();
                  return
                }
                if (e instanceof TouchEvent) {
                  let t = e.touches[0]?.clientY ?? null,
                    n = P.current;
                  P.current = t;
                  let a = W(r);
                  a && C(a, null !== n && null !== t ? n - t : 0) || e.preventDefault()
                }
              },
              n = {
                passive: !1
              };
            return window.addEventListener("keydown", e, {
              passive: !1
            }), window.addEventListener("wheel", r, n), window.addEventListener("touchmove", r, n), () => {
              window.removeEventListener("keydown", e), window.removeEventListener("wheel", r, n), window.removeEventListener("touchmove", r, n)
            }
          }, [C, W, t, s, b]), (0, a.useEffect)(() => {
            if (!b) return;
            let e = e => {
              if (!k.current?.contains(e.target)) {
                P.current = null;
                return
              }
              P.current = e.touches[0]?.clientY ?? null
            };
            return window.addEventListener("touchstart", e, {
              passive: !0
            }), () => window.removeEventListener("touchstart", e)
          }, [b]), !b || !x) return null;
        let L = "number" == typeof c ? `${c}px` : c,
          S = {};
        L && "auto" !== L ? S.maxWidth = L : (S.width = "fit-content", S.maxWidth = "clamp(100%, 100%, 850px)", S.boxSizing = "border-box");
        let O = w ? "closing" : "open",
          A = (0, n.jsx)("div", {
            className: o().overlay,
            "data-centered": d,
            "data-state": O,
            onMouseDown: e => {
              M.current = e.target === e.currentTarget
            },
            onClick: e => {
              let n = e.target === e.currentTarget,
                a = p && n && M.current;
              M.current = !1, a && (r ? r() : t())
            },
            children: (0, n.jsxs)("div", {
              className: `${o().modal} ${h??""}`,
              "data-state": O,
              style: S,
              ref: k,
              onClick: e => e.stopPropagation(),
              children: [(u || f) && (0, n.jsxs)("div", {
                className: o().header,
                children: [u && (0, n.jsx)("h2", {
                  className: o().title,
                  style: m ? {
                    textAlign: "center",
                    width: "100%"
                  } : {},
                  children: u
                }), f && (0, n.jsx)("button", {
                  type: "button",
                  className: o().closeButton,
                  onClick: i ?? t,
                  children: (0, n.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1em",
                    height: "1em",
                    viewBox: "7.43 7.45 9.15 9.15",
                    children: (0, n.jsx)("path", {
                      fill: "currentColor",
                      d: "m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"
                    })
                  })
                })]
              }), (0, n.jsx)("div", {
                className: `${o().body} ${v??""}`,
                children: _
              })]
            })
          });
        return (0, l.createPortal)(A, x)
      }
    },
    61778: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => u
      });
      var n = r(95155),
        a = r(47650),
        l = r(12115),
        i = r(24579),
        o = r.n(i);
      let s = "undefined" != typeof navigator && /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      function u({
        content: e,
        children: t,
        placement: r = "top",
        delay: i = 110,
        offset: u = 10,
        maxWidth: d = 260,
        className: c,
        tooltipClassName: p,
        hideTooltip: f = !1,
        pageTooltipStyles: m = !1
      }) {
        let [h, v] = (0, l.useState)(!1), [_, b] = (0, l.useState)(!1), [g, w] = (0, l.useState)({
          top: 0,
          left: 0
        }), [y, x] = (0, l.useState)(!1), j = (0, l.useRef)(null), E = (0, l.useRef)(null), k = (0, l.useRef)(null), P = m ? 25 + 30 * !!s : i;
        (0, l.useEffect)(() => {
          x(!0)
        }, []);
        let M = (0, l.useCallback)(() => {
            j.current && (clearTimeout(j.current), j.current = null)
          }, []),
          N = (0, l.useCallback)(() => "undefined" != typeof document && "active" === document.documentElement.getAttribute("data-user-page-enter-transition"), []),
          W = (0, l.useCallback)(e => {
            if (f || N()) return;
            let t = e?.immediate ?? !1;
            (M(), t || P <= 0) ? v(!0): j.current = setTimeout(() => v(!0), P)
          }, [M, P, f, N]),
          C = (0, l.useCallback)(e => {
            M(), e?.immediate, v(!1)
          }, [M]);
        (0, l.useEffect)(() => () => {
          M()
        }, [M]), (0, l.useEffect)(() => {
          f && C({
            immediate: !0
          })
        }, [f, C]);
        let L = (e, t, r) => Math.min(Math.max(e, t), r),
          S = (0, l.useCallback)(() => {
            let e = E.current,
              t = k.current;
            if (!e || !t) return;
            let n = e.getBoundingClientRect(),
              a = t.getBoundingClientRect(),
              l = 0,
              i = 0;
            switch (r) {
              case "bottom":
                l = n.bottom + u, i = n.left + n.width / 2 - a.width / 2;
                break;
              case "left":
                l = n.top + n.height / 2 - a.height / 2, i = n.left - a.width - u;
                break;
              case "right":
                l = n.top + n.height / 2 - a.height / 2, i = n.right + u;
                break;
              default:
                l = n.top - a.height - u, i = n.left + n.width / 2 - a.width / 2
            }
            let o = window.innerWidth - a.width - 8,
              s = window.innerHeight - a.height - 8,
              d = a.width >= window.innerWidth ? 8 : L(i, 8, Math.max(8, o));
            w({
              top: a.height >= window.innerHeight ? 8 : L(l, 8, Math.max(8, s)),
              left: d
            })
          }, [u, r]);
        (0, l.useLayoutEffect)(() => {
          if (!h) return;
          S();
          let e = () => S();
          return window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
            window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0)
          }
        }, [S, h]);
        let O = (0, l.useCallback)(e => {
          N() || (e.stopPropagation(), b(!0), h ? C({
            immediate: !0
          }) : W({
            immediate: !0
          }))
        }, [C, N, W, h]);
        (0, l.useEffect)(() => {
          if (!h || !_) return;
          let e = e => {
            E.current && (E.current.contains(e.target) || C({
              immediate: !0
            }))
          };
          return document.addEventListener("touchstart", e, {
            passive: !0
          }), () => {
            document.removeEventListener("touchstart", e)
          }
        }, [f, C, _, h]);
        let A = {
            "--tooltip-max-width": "number" == typeof d ? `${d}px` : d,
            top: `${g.top}px`,
            left: `${g.left}px`
          },
          $ = (0, n.jsx)("span", {
            ref: k,
            className: `${o().tooltip} ${p??""}`,
            style: {
              ...A,
              borderColor: m ? "#1a1a1a33" : "var(--tooltip-border-color)",
              backgroundColor: m ? "#14141463" : "var(--tooltip-background-color)"
            },
            "data-visible": h,
            "data-placement": r,
            children: e
          });
        return (0, n.jsxs)("span", {
          ref: E,
          className: `${o().wrapper} ${c??""}`,
          onMouseEnter: () => W(),
          onMouseLeave: () => C(),
          onFocusCapture: () => W(),
          onBlurCapture: () => C({
            immediate: !0
          }),
          onTouchStart: O,
          children: [t, y ? (0, a.createPortal)($, document.body) : $]
        })
      }
    },
    64054: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = {
        bindSnapshot: function() {
          return s
        },
        createAsyncLocalStorage: function() {
          return o
        },
        createSnapshot: function() {
          return u
        }
      };
      for (var n in r) Object.defineProperty(t, n, {
        enumerable: !0,
        get: r[n]
      });
      let a = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
        value: "E504",
        enumerable: !1,
        configurable: !0
      });
      class l {
        disable() {
          throw a
        }
        getStore() {}
        run() {
          throw a
        }
        exit() {
          throw a
        }
        enterWith() {
          throw a
        }
        static bind(e) {
          return e
        }
      }
      let i = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;

      function o() {
        return i ? new i : new l
      }

      function s(e) {
        return i ? i.bind(e) : l.bind(e)
      }

      function u() {
        return i ? i.snapshot() : function(e, ...t) {
          return e(...t)
        }
      }
    },
    68635: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
          return s
        }
      });
      let n = r(95155),
        a = r(12115),
        l = r(41112);

      function i(e) {
        return {
          default: e && "default" in e ? e.default : e
        }
      }
      r(21957);
      let o = {
          loader: () => Promise.resolve(i(() => null)),
          loading: null,
          ssr: !0
        },
        s = function(e) {
          let t = {
              ...o,
              ...e
            },
            r = (0, a.lazy)(() => t.loader().then(i)),
            s = t.loading;

          function u(e) {
            let i = s ? (0, n.jsx)(s, {
                isLoading: !0,
                pastDelay: !0,
                error: null
              }) : null,
              o = !t.ssr || !!t.loading,
              u = o ? a.Suspense : a.Fragment,
              d = t.ssr ? (0, n.jsxs)(n.Fragment, {
                children: [null, (0, n.jsx)(r, {
                  ...e
                })]
              }) : (0, n.jsx)(l.BailoutToCSR, {
                reason: "next/dynamic",
                children: (0, n.jsx)(r, {
                  ...e
                })
              });
            return (0, n.jsx)(u, {
              ...o ? {
                fallback: i
              } : {},
              children: d
            })
          }
          return u.displayName = "LoadableComponent", u
        }
    },
    73321: (e, t, r) => {
      "use strict";
      var n = r(74645);
      r.o(n, "redirect") && r.d(t, {
        redirect: function() {
          return n.redirect
        }
      }), r.o(n, "useParams") && r.d(t, {
        useParams: function() {
          return n.useParams
        }
      }), r.o(n, "usePathname") && r.d(t, {
        usePathname: function() {
          return n.usePathname
        }
      }), r.o(n, "useRouter") && r.d(t, {
        useRouter: function() {
          return n.useRouter
        }
      }), r.o(n, "useSearchParams") && r.d(t, {
        useSearchParams: function() {
          return n.useSearchParams
        }
      })
    },
    75707: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
          return a
        }
      });
      let n = r(73623)._(r(68635));

      function a(e, t) {
        let r = {};
        "function" == typeof e && (r.loader = e);
        let a = {
          ...r,
          ...t
        };
        return (0, n.default)({
          ...a,
          modules: a.loadableGenerated?.modules
        })
      }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    81934: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => o
      });
      var n = r(95155),
        a = r(98500),
        l = r.n(a),
        i = r(38256);

      function o({
        href: e,
        asTag: t,
        locale: r,
        children: a,
        ...o
      }) {
        let s = r || (0, i.useLang)();
        if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) return t ? (0, n.jsx)("a", {
          href: e,
          ...o,
          children: a
        }) : (0, n.jsx)(l(), {
          href: e,
          ...o,
          children: a
        });
        let u = "en" == s ? `${e.startsWith("/")?"":"/"}${e}` : `/${s}${e.startsWith("/")?"":"/"}${e}`;
        return t ? (0, n.jsx)("a", {
          href: u,
          ...o,
          children: a
        }) : (0, n.jsx)(l(), {
          href: u,
          ...o,
          children: a
        })
      }
    }
  },
  e => {
    e.O(0, [7958, 7274, 3785, 2520, 4103, 6564, 9427, 8463, 1831, 4664, 9367, 8413, 6413, 5592, 8500, 5686, 4564, 9388, 8256, 5886, 5395, 2131, 8542, 3957, 6053, 8441, 3794, 7358], () => e(e.s = 44419)), _N_E = e.O()
  }
]);