(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1911], {
    5585: e => {
      e.exports = {
        overlay: "GUNS__2a-ec424462-e2d1ad6f-42d31c98",
        modal: "GUNS__c9-9f956df0-2aa75d71-7434650d",
        "overlay-fade-in": "GUNS__28-fac3e645-eb45c253-1613aaec",
        "overlay-fade-out": "GUNS__08-a43818b0-b02ed44f-26fc9b5d",
        "modal-scale-in": "GUNS__f8-f3bfe6a6-ed71fab1-6cb58cec",
        "modal-scale-out": "GUNS__d9-8be0fc70-7c7db8fc-95d242f5",
        header: "GUNS__c6-de21a81f-58192bf7-b172e0ea",
        title: "GUNS__2a-e1e76140-19cae230-28ef5727",
        closeButton: "GUNS__8f-a6cb3991-90ec747f-4d7f9d93",
        body: "GUNS__28-d82a957e-1d95260e-e1b07846",
        drawer: "GUNS__1e-a2cb22f3-a6b37ef1-2fe16456",
        drawerHandleRow: "GUNS__60-2921f6d3-fbed4139-e99dd41a",
        drawerHandle: "GUNS__90-f4bdf061-c1f315b9-62244f64",
        visuallyHidden: "GUNS__9f-457904b5-64ff6868-ee8e9a39"
      }
    },
    13782: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => h
      });
      var n = a(95155),
        r = a(12115),
        l = a(47650),
        i = a(5677),
        s = a(5585),
        o = a.n(s);
      let d = "(max-width: 768px)",
        c = e => {
          if ("function" != typeof window.matchMedia) return () => void 0;
          let t = window.matchMedia(d);
          return "function" == typeof t.addEventListener ? (t.addEventListener("change", e), () => t.removeEventListener("change", e)) : (t.addListener(e), () => t.removeListener(e))
        },
        u = () => "function" == typeof window.matchMedia && window.matchMedia(d).matches,
        f = () => !1,
        m = (0, n.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "7.43 7.45 9.15 9.15",
          children: (0, n.jsx)("path", {
            fill: "currentColor",
            d: "m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"
          })
        });

      function h({
        opened: e,
        onClose: t,
        onOverlayClose: a,
        onCloseButtonClick: s,
        onEscapeClose: d,
        title: h,
        centered: p = !0,
        size: b = "auto",
        closeOnOverlayClick: v = !0,
        withCloseButton: w = !0,
        centerTitle: N = !1,
        className: x,
        bodyClassName: _,
        mobileVariant: g = "drawer",
        children: y
      }) {
        let [S, E] = (0, r.useState)(e), [j, k] = (0, r.useState)(!1), [C, M] = (0, r.useState)(null), U = (0, r.useRef)(null), $ = (0, r.useRef)(null), G = (0, r.useRef)(null), L = (0, r.useRef)(null), D = (0, r.useRef)(!1), P = (0, r.useSyncExternalStore)(c, u, f) && "drawer" === g, H = e => {
          if (!e) return !1;
          let t = window.getComputedStyle(e).overflowY;
          return e.scrollHeight > e.clientHeight + 1 && ("auto" === t || "scroll" === t)
        }, R = e => {
          let t = $.current;
          if (!t || !e) return null;
          let a = e;
          for (; a && t.contains(a);) {
            if (H(a)) return a;
            a = a.parentElement
          }
          return null
        }, W = (e, t) => t < 0 ? e.scrollTop > 0 : !(t > 0) || e.scrollTop + e.clientHeight < e.scrollHeight, T = (0, r.useCallback)(e => {
          "overlay" === e ? (a ?? t)() : "escape" === e ? (d ?? t)() : "button" === e ? (s ?? t)() : t()
        }, [t, s, d, a]);
        (0, r.useEffect)(() => {
          if (e) {
            E(!0), k(!1);
            return
          }
          return k(!0), U.current = setTimeout(() => {
            E(!1), k(!1)
          }, P ? 320 : 250), () => {
            U.current && (clearTimeout(U.current), U.current = null)
          }
        }, [P, e]), (0, r.useEffect)(() => {
          if ("undefined" == typeof document) return;
          let e = document.createElement("div");
          return document.body.appendChild(e), M(e), () => {
            document.body.removeChild(e), M(null)
          }
        }, []), (0, r.useEffect)(() => {
          if (!S) return;
          let e = e => {
              if ("Escape" === e.key) {
                if (P) return;
                T("escape");
                return
              } ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(e.key) && !$.current?.contains(e.target) && e.preventDefault()
            },
            t = e => {
              let t = $.current;
              if (!t) return void e.preventDefault();
              let a = e.target;
              if (!(a && t.contains(a))) return void e.preventDefault();
              if (!P) {
                if (e instanceof WheelEvent) {
                  let t = R(a);
                  t && W(t, e.deltaY) || e.preventDefault();
                  return
                }
                if (e instanceof TouchEvent) {
                  let t = e.touches[0]?.clientY ?? null,
                    n = L.current;
                  L.current = t;
                  let r = R(a);
                  r && W(r, null !== n && null !== t ? n - t : 0) || e.preventDefault()
                }
              }
            },
            a = {
              passive: !1
            };
          return window.addEventListener("keydown", e, {
            passive: !1
          }), window.addEventListener("wheel", t, a), window.addEventListener("touchmove", t, a), () => {
            window.removeEventListener("keydown", e), window.removeEventListener("wheel", t, a), window.removeEventListener("touchmove", t, a)
          }
        }, [P, W, R, S, T]), (0, r.useEffect)(() => {
          if (!S) return;
          let e = e => {
            if (!$.current?.contains(e.target)) {
              L.current = null;
              return
            }
            L.current = e.touches[0]?.clientY ?? null
          };
          return window.addEventListener("touchstart", e, {
            passive: !0
          }), () => window.removeEventListener("touchstart", e)
        }, [S]), (0, r.useEffect)(() => {
          if (!P || !e || "undefined" == typeof document) return;
          let t = document.body,
            a = () => {
              "none" === t.style.pointerEvents && t.style.removeProperty("pointer-events")
            };
          a();
          let n = new MutationObserver(a);
          return n.observe(t, {
            attributes: !0,
            attributeFilter: ["style"]
          }), () => {
            n.disconnect(), a()
          }
        }, [P, e]);
        let A = j ? "closing" : "open",
          B = N ? {
            textAlign: "center",
            width: "100%"
          } : {},
          z = h || w ? (0, n.jsxs)("div", {
            className: o().header,
            children: [h && (0, n.jsx)("h2", {
              className: o().title,
              style: B,
              children: h
            }), w && (0, n.jsx)("button", {
              type: "button",
              className: o().closeButton,
              onClick: P ? () => T("button") : s ?? t,
              children: m
            })]
          }) : null,
          O = (0, r.useCallback)((e, t) => {
            let a = Math.max(0, Math.min(1, t)),
              n = G.current;
            n && (n.style.transition = "none", n.style.opacity = `${1-a}`)
          }, []),
          q = (0, r.useCallback)((e, t) => {
            let a = G.current;
            a && (a.style.transition = `opacity ${t?.5:.3}s cubic-bezier(0.32, 0.72, 0, 1)`, a.style.opacity = t ? "1" : "0")
          }, []);
        if (P) return (0, n.jsx)(i._s.Root, {
          open: e,
          onOpenChange: e => {
            e || T("drag")
          },
          modal: !1,
          noBodyStyles: !0,
          repositionInputs: !1,
          onDrag: O,
          onRelease: q,
          children: (0, n.jsxs)(i._s.Portal, {
            children: [(0, n.jsx)("div", {
              ref: G,
              className: o().overlay,
              "data-variant": "drawer",
              "data-state": e ? "open" : "closing",
              onClick: () => {
                v && T("overlay")
              }
            }), (0, n.jsxs)(i._s.Content, {
              ref: $,
              className: `${o().drawer} ${x??""}`,
              onEscapeKeyDown: e => {
                e.preventDefault(), T("escape")
              },
              onInteractOutside: e => e.preventDefault(),
              children: [(0, n.jsx)("div", {
                className: o().drawerHandleRow,
                children: (0, n.jsx)(i._s.Handle, {
                  className: o().drawerHandle
                })
              }), !h && (0, n.jsx)(i._s.Title, {
                className: o().visuallyHidden,
                children: "Dialog"
              }), (h || w) && (0, n.jsxs)("div", {
                className: o().header,
                children: [h && (0, n.jsx)(i._s.Title, {
                  asChild: !0,
                  children: (0, n.jsx)("h2", {
                    className: o().title,
                    style: B,
                    children: h
                  })
                }), w && (0, n.jsx)("button", {
                  type: "button",
                  className: o().closeButton,
                  onClick: () => T("button"),
                  children: m
                })]
              }), (0, n.jsx)("div", {
                className: `${o().body} ${_??""}`,
                children: y
              })]
            })]
          })
        });
        if (!S || !C) return null;
        let F = "number" == typeof b ? `${b}px` : b,
          I = {};
        F && "auto" !== F ? I.maxWidth = F : (I.width = "fit-content", I.maxWidth = "clamp(100%, 100%, 850px)", I.boxSizing = "border-box");
        let Y = (0, n.jsx)("div", {
          className: o().overlay,
          "data-centered": p,
          "data-state": A,
          onMouseDown: e => {
            D.current = e.target === e.currentTarget
          },
          onClick: e => {
            let t = e.target === e.currentTarget,
              a = v && t && D.current;
            D.current = !1, a && T("overlay")
          },
          children: (0, n.jsxs)("div", {
            className: `${o().modal} ${x??""}`,
            "data-state": A,
            style: I,
            ref: $,
            onClick: e => e.stopPropagation(),
            children: [z, (0, n.jsx)("div", {
              className: `${o().body} ${_??""}`,
              children: y
            })]
          })
        });
        return (0, l.createPortal)(Y, C)
      }
    },
    21924: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => u
      });
      var n = a(95155),
        r = a(29722),
        l = a(12115),
        i = a(98241),
        s = a.n(i),
        o = a(51047),
        d = a.n(o);
      let c = (e, t) => {
        if ("number" == typeof e && Number.isFinite(e)) return e;
        if ("string" == typeof e) {
          let t = Number(e);
          if (!Number.isNaN(t)) return t
        }
        return t
      };

      function u({
        featureName: e,
        marks: t,
        value: a,
        defaultValue: i,
        onChangeFunction: o,
        label: u,
        className: f,
        min: m,
        max: h,
        step: p,
        disabled: b,
        onChange: v,
        onFocus: w,
        onBlur: N,
        onPointerDown: x,
        onPointerUp: _,
        onPointerCancel: g,
        ...y
      }) {
        let S = c(m, 0),
          E = c(h, 100),
          j = c(p, 1) || 1,
          k = a ?? i ?? S,
          C = void 0 !== a,
          [M, U] = (0, l.useState)(k),
          [$, G] = (0, l.useState)(!1),
          [L, D] = (0, l.useState)(!1);
        (0, l.useEffect)(() => {
          C || U(i ?? S)
        }, [i, C, S]);
        let P = C ? a ?? S : M,
          H = Math.min(E, Math.max(S, P)),
          R = Math.max(E - S, Number.EPSILON),
          W = (H - S) / R * 100;
        (0, l.useEffect)(() => {
          C || U(e => Math.min(E, Math.max(S, e)))
        }, [C, S, E]);
        let T = (0, l.useMemo)(() => t?.length ? t.map(e => ({
            ...e,
            normalizedValue: Math.min(E, Math.max(S, e.value)),
            position: Math.min(100, Math.max(0, (Math.min(E, Math.max(S, e.value)) - S) / R * 100))
          })) : [], [t, S, E, R]),
          A = (0, l.useMemo)(() => {
            if (!u) return `${H}`;
            let e = "function" == typeof u ? u(H) : u;
            return null == e || !1 === e ? `${H}` : e
          }, [u, H]),
          B = !b && ($ || L),
          z = "string" == typeof e ? e : void 0;
        return (0, n.jsxs)("div", {
          className: s().inputContainerWrapper,
          "data-dashboard-feature-label": z,
          children: [e && (0, n.jsx)("h1", {
            className: s().featureName,
            style: {
              marginLeft: 0
            },
            children: e
          }), (0, n.jsx)("div", {
            className: (0, r.A)(s().inputWrapperDiv, d().wrapper, f),
            "data-vaul-no-drag": !0,
            children: (0, n.jsx)("div", {
              className: d().sliderContent,
              children: (0, n.jsxs)("div", {
                className: d().sliderShell,
                onMouseEnter: () => G(!0),
                onMouseLeave: () => {
                  L || G(!1)
                },
                children: [(0, n.jsxs)("div", {
                  className: d().track,
                  children: [(0, n.jsx)("div", {
                    className: d().progress,
                    style: {
                      width: `${W}%`
                    }
                  }), (0, n.jsx)("div", {
                    className: d().thumb,
                    style: {
                      left: `calc(${W}% - (var(--thumb-size) / 2))`
                    },
                    "data-visible": B,
                    children: (0, n.jsx)("span", {
                      className: d().tooltip,
                      "data-visible": B,
                      children: A
                    })
                  })]
                }), (0, n.jsx)("input", {
                  ...y,
                  type: "range",
                  min: S,
                  max: E,
                  step: j,
                  value: H,
                  disabled: b,
                  className: d().range,
                  onChange: e => {
                    let t = Number(e.target.value);
                    Number.isNaN(t) || (C || U(t), o?.(t), v?.(e))
                  },
                  onFocus: e => {
                    G(!0), w?.(e)
                  },
                  onBlur: e => {
                    G(!1), N?.(e)
                  },
                  onPointerDown: e => {
                    D(!0), x?.(e)
                  },
                  onPointerUp: e => {
                    D(!1), _?.(e)
                  },
                  onPointerCancel: e => {
                    D(!1), g?.(e)
                  },
                  "aria-valuemin": S,
                  "aria-valuemax": E,
                  "aria-valuenow": H
                }), T.length > 0 && (0, n.jsx)("div", {
                  className: d().marks,
                  children: T.map((e, t) => (0, n.jsxs)("div", {
                    className: d().mark,
                    style: {
                      left: `${e.position}%`
                    },
                    children: [(0, n.jsx)("span", {
                      className: d().markDot,
                      "data-active": e.normalizedValue <= H
                    }), e.label && (0, n.jsx)("span", {
                      className: d().markLabel,
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
    24579: e => {
      e.exports = {
        wrapper: "GUNS__ba-7f5364ea-c3a36c5d-b0f3d011",
        tooltip: "GUNS__ca-42ad2aff-c7e7db33-534468e1"
      }
    },
    44419: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 70660))
    },
    51047: e => {
      e.exports = {
        wrapper: "GUNS__ec-a9da6dd8-132e02a7-cd16b658",
        sliderContent: "GUNS__96-8304f174-bd54cefb-75d6707a",
        sliderShell: "GUNS__44-193d757e-48269873-02bed72a",
        track: "GUNS__72-5ce6f53d-1413285c-aa6090ba",
        progress: "GUNS__57-039aee70-e5a62261-c63c93e9",
        thumb: "GUNS__20-345a5613-0b52cc9b-60d52f5a",
        range: "GUNS__f2-0dba9ea2-5811641b-e8f7ca3d",
        marks: "GUNS__bb-eca8726a-511bfcaa-1f3a0f0b",
        mark: "GUNS__7d-7a14a53e-dda05dd7-53bba004",
        markDot: "GUNS__d3-1976450f-9b2b2cdf-a9709b05",
        markLabel: "GUNS__b7-e71a8b02-36dda168-51e16392",
        valueLabel: "GUNS__cd-2203985c-bbac1cbe-0445495c",
        tooltip: "GUNS__0d-d338da93-6652d4fb-5730347d"
      }
    },
    61778: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => d
      });
      var n = a(95155),
        r = a(47650),
        l = a(12115),
        i = a(24579),
        s = a.n(i);
      let o = "undefined" != typeof navigator && /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      function d({
        content: e,
        children: t,
        placement: a = "top",
        delay: i = 110,
        offset: d = 10,
        maxWidth: c = 260,
        className: u,
        tooltipClassName: f,
        hideTooltip: m = !1,
        pageTooltipStyles: h = !1
      }) {
        let [p, b] = (0, l.useState)(!1), [v, w] = (0, l.useState)(!1), [N, x] = (0, l.useState)({
          top: 0,
          left: 0
        }), [_, g] = (0, l.useState)(!1), y = (0, l.useRef)(null), S = (0, l.useRef)(null), E = (0, l.useRef)(null), j = h ? 25 + 30 * !!o : i;
        (0, l.useEffect)(() => {
          g(!0)
        }, []);
        let k = (0, l.useCallback)(() => {
            y.current && (clearTimeout(y.current), y.current = null)
          }, []),
          C = (0, l.useCallback)(() => "undefined" != typeof document && "active" === document.documentElement.getAttribute("data-user-page-enter-transition"), []),
          M = (0, l.useCallback)(e => {
            if (m || C()) return;
            let t = e?.immediate ?? !1;
            (k(), t || j <= 0) ? b(!0): y.current = setTimeout(() => b(!0), j)
          }, [k, j, m, C]),
          U = (0, l.useCallback)(e => {
            k(), e?.immediate, b(!1)
          }, [k]);
        (0, l.useEffect)(() => () => {
          k()
        }, [k]), (0, l.useEffect)(() => {
          m && U({
            immediate: !0
          })
        }, [m, U]);
        let $ = (e, t, a) => Math.min(Math.max(e, t), a),
          G = (0, l.useCallback)(() => {
            let e = S.current,
              t = E.current;
            if (!e || !t) return;
            let n = e.getBoundingClientRect(),
              r = t.getBoundingClientRect(),
              l = 0,
              i = 0;
            switch (a) {
              case "bottom":
                l = n.bottom + d, i = n.left + n.width / 2 - r.width / 2;
                break;
              case "left":
                l = n.top + n.height / 2 - r.height / 2, i = n.left - r.width - d;
                break;
              case "right":
                l = n.top + n.height / 2 - r.height / 2, i = n.right + d;
                break;
              default:
                l = n.top - r.height - d, i = n.left + n.width / 2 - r.width / 2
            }
            let s = window.innerWidth - r.width - 8,
              o = window.innerHeight - r.height - 8,
              c = r.width >= window.innerWidth ? 8 : $(i, 8, Math.max(8, s));
            x({
              top: r.height >= window.innerHeight ? 8 : $(l, 8, Math.max(8, o)),
              left: c
            })
          }, [d, a]);
        (0, l.useLayoutEffect)(() => {
          if (!p) return;
          G();
          let e = () => G();
          return window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
            window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0)
          }
        }, [G, p]);
        let L = (0, l.useCallback)(e => {
          C() || (e.stopPropagation(), w(!0), p ? U({
            immediate: !0
          }) : M({
            immediate: !0
          }))
        }, [U, C, M, p]);
        (0, l.useEffect)(() => {
          if (!p || !v) return;
          let e = e => {
            S.current && (S.current.contains(e.target) || U({
              immediate: !0
            }))
          };
          return document.addEventListener("touchstart", e, {
            passive: !0
          }), () => {
            document.removeEventListener("touchstart", e)
          }
        }, [m, U, v, p]);
        let D = {
            "--tooltip-max-width": "number" == typeof c ? `${c}px` : c,
            top: `${N.top}px`,
            left: `${N.left}px`
          },
          P = (0, n.jsx)("span", {
            ref: E,
            className: `${s().tooltip} ${f??""}`,
            style: {
              ...D,
              borderColor: h ? "#1a1a1a33" : "var(--tooltip-border-color)",
              backgroundColor: h ? "#14141463" : "var(--tooltip-background-color)"
            },
            "data-visible": p,
            "data-placement": a,
            children: e
          });
        return (0, n.jsxs)("span", {
          ref: S,
          className: `${s().wrapper} ${u??""}`,
          onMouseEnter: () => M(),
          onMouseLeave: () => U(),
          onFocusCapture: () => M(),
          onBlurCapture: () => U({
            immediate: !0
          }),
          onTouchStart: L,
          children: [t, _ ? (0, r.createPortal)(P, document.body) : P]
        })
      }
    },
    81934: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => l
      });
      var n = a(95155),
        r = a(86891);

      function l({
        href: e,
        asTag: t,
        locale: a,
        children: l,
        ...i
      }) {
        let s = a || (0, r.useLang)();
        if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) return (0, n.jsx)("a", {
          href: e,
          ...i,
          children: l
        });
        let o = "en" == s ? `${e.startsWith("/")?"":"/"}${e}` : `/${s}${e.startsWith("/")?"":"/"}${e}`;
        return (0, n.jsx)("a", {
          href: o,
          ...i,
          children: l
        })
      }
    }
  },
  e => {
    e.O(0, [7958, 7274, 1899, 9255, 8986, 8463, 1831, 4664, 9367, 8413, 6413, 5592, 4293, 5686, 4564, 2483, 7740, 6891, 5886, 5395, 2131, 7605, 8542, 660, 8441, 3794, 7358], () => e(e.s = 44419)), _N_E = e.O()
  }
]);