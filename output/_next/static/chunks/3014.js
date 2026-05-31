(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3014], {
    7092: e => {
      e.exports = {
        container: "selectWrapper_container__BGFhd",
        label: "selectWrapper_label__l8Ag6",
        shell: "selectWrapper_shell__Gd_uz",
        iconSlot: "selectWrapper_iconSlot___0FXz",
        trigger: "selectWrapper_trigger__H6qu1",
        triggerWithIcon: "selectWrapper_triggerWithIcon__npo7_",
        value: "selectWrapper_value__onMW2",
        placeholder: "selectWrapper_placeholder__AJ7aS",
        chevrons: "selectWrapper_chevrons__hIv57",
        dropdown: "selectWrapper_dropdown__4g2Mv",
        optionList: "selectWrapper_optionList__nF5AJ",
        option: "selectWrapper_option__5YaSH",
        emptyState: "selectWrapper_emptyState__pO_b_"
      }
    },
    9992: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => s
      });
      var a = r(95155),
        l = r(98241),
        n = r.n(l);

      function s({
        children: e,
        featureName: t,
        transparent: r
      }) {
        return (0, a.jsxs)("div", {
          className: n().featureContainerWrapper,
          "data-dashboard-feature-label": "string" == typeof t ? t : void 0,
          children: [(0, a.jsx)("span", {
            className: `${n().featureContainerSpan}`,
            children: t
          }), (0, a.jsx)("div", {
            className: n().featureContainer,
            style: {
              backgroundColor: r && "transparent",
              padding: r && 0
            },
            children: e
          })]
        })
      }
    },
    21924: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => p
      });
      var a = r(95155),
        l = r(29722),
        n = r(12115),
        s = r(98241),
        i = r.n(s),
        o = r(51047),
        u = r.n(o);
      let d = (e, t) => {
        if ("number" == typeof e && Number.isFinite(e)) return e;
        if ("string" == typeof e) {
          let t = Number(e);
          if (!Number.isNaN(t)) return t
        }
        return t
      };

      function p({
        featureName: e,
        marks: t,
        value: r,
        defaultValue: s,
        onChangeFunction: o,
        label: p,
        className: c,
        min: h,
        max: v,
        step: m,
        disabled: f,
        onChange: _,
        onFocus: b,
        onBlur: x,
        onPointerDown: w,
        onPointerUp: g,
        onPointerCancel: y,
        ...W
      }) {
        let N = d(h, 0),
          k = d(v, 100),
          j = d(m, 1) || 1,
          S = r ?? s ?? N,
          C = void 0 !== r,
          [E, I] = (0, n.useState)(S),
          [M, L] = (0, n.useState)(!1),
          [$, A] = (0, n.useState)(!1);
        (0, n.useEffect)(() => {
          C || I(s ?? N)
        }, [s, C, N]);
        let D = C ? r ?? N : E,
          B = Math.min(k, Math.max(N, D)),
          R = Math.max(k - N, Number.EPSILON),
          z = (B - N) / R * 100;
        (0, n.useEffect)(() => {
          C || I(e => Math.min(k, Math.max(N, e)))
        }, [C, N, k]);
        let H = (0, n.useMemo)(() => t?.length ? t.map(e => ({
            ...e,
            normalizedValue: Math.min(k, Math.max(N, e.value)),
            position: Math.min(100, Math.max(0, (Math.min(k, Math.max(N, e.value)) - N) / R * 100))
          })) : [], [t, N, k, R]),
          F = (0, n.useMemo)(() => {
            if (!p) return `${B}`;
            let e = "function" == typeof p ? p(B) : p;
            return null == e || !1 === e ? `${B}` : e
          }, [p, B]),
          O = !f && (M || $),
          P = "string" == typeof e ? e : void 0;
        return (0, a.jsxs)("div", {
          className: i().inputContainerWrapper,
          "data-dashboard-feature-label": P,
          children: [e && (0, a.jsx)("h1", {
            className: i().featureName,
            style: {
              marginLeft: 0
            },
            children: e
          }), (0, a.jsx)("div", {
            className: (0, l.A)(i().inputWrapperDiv, u().wrapper, c),
            children: (0, a.jsx)("div", {
              className: u().sliderContent,
              children: (0, a.jsxs)("div", {
                className: u().sliderShell,
                onMouseEnter: () => L(!0),
                onMouseLeave: () => {
                  $ || L(!1)
                },
                children: [(0, a.jsxs)("div", {
                  className: u().track,
                  children: [(0, a.jsx)("div", {
                    className: u().progress,
                    style: {
                      width: `${z}%`
                    }
                  }), (0, a.jsx)("div", {
                    className: u().thumb,
                    style: {
                      left: `calc(${z}% - (var(--thumb-size) / 2))`
                    },
                    "data-visible": O,
                    children: (0, a.jsx)("span", {
                      className: u().tooltip,
                      "data-visible": O,
                      children: F
                    })
                  })]
                }), (0, a.jsx)("input", {
                  ...W,
                  type: "range",
                  min: N,
                  max: k,
                  step: j,
                  value: B,
                  disabled: f,
                  className: u().range,
                  onChange: e => {
                    let t = Number(e.target.value);
                    Number.isNaN(t) || (C || I(t), o?.(t), _?.(e))
                  },
                  onFocus: e => {
                    L(!0), b?.(e)
                  },
                  onBlur: e => {
                    L(!1), x?.(e)
                  },
                  onPointerDown: e => {
                    A(!0), w?.(e)
                  },
                  onPointerUp: e => {
                    A(!1), g?.(e)
                  },
                  onPointerCancel: e => {
                    A(!1), y?.(e)
                  },
                  "aria-valuemin": N,
                  "aria-valuemax": k,
                  "aria-valuenow": B
                }), H.length > 0 && (0, a.jsx)("div", {
                  className: u().marks,
                  children: H.map((e, t) => (0, a.jsxs)("div", {
                    className: u().mark,
                    style: {
                      left: `${e.position}%`
                    },
                    children: [(0, a.jsx)("span", {
                      className: u().markDot,
                      "data-active": e.normalizedValue <= B
                    }), e.label && (0, a.jsx)("span", {
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
    30184: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => _
      });
      var a = r(95155),
        l = r(12115),
        n = r(47650),
        s = r(29722),
        i = r(98241),
        o = r.n(i),
        u = r(65095),
        d = r.n(u);
      let p = "#1c1c1c",
        c = (e, t, r) => Math.min(Math.max(e, t), r),
        h = e => {
          if (!e) return "";
          let t = e.trim(),
            r = t.replace(/^#/, "").replace(/[^0-9a-f]/gi, "").slice(0, 6).toLowerCase();
          return r ? `#${r}` : t.startsWith("#") ? "#" : ""
        },
        v = e => {
          if (/^#[0-9a-f]{6}$/i.test(e)) return e.toLowerCase();
          if (/^#[0-9a-f]{3}$/i.test(e)) return `#${e.slice(1).split("").map(e=>`${e}${e}`).join("")}`.toLowerCase();
          return null
        },
        m = e => {
          let t, r, a, l, n, s, i, {
            r: o,
            g: u,
            b: d
          } = {
            r: (t = parseInt(e.replace("#", ""), 16)) >> 16 & 255,
            g: t >> 8 & 255,
            b: 255 & t
          };
          return s = (n = Math.max(r = o / 255, a = u / 255, l = d / 255)) - Math.min(r, a, l), i = 0, 0 !== s && (i = (n === r ? (a - l) / s % 6 : n === a ? (l - r) / s + 2 : (r - a) / s + 4) * 60) < 0 && (i += 360), {
            h: i,
            s: 0 === n ? 0 : s / n,
            v: n
          }
        },
        f = (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "19",
          height: "19",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "currentColor",
            d: "M19.5 3.56a2.26 2.26 0 0 0-3.18 0l-2.05 2.05l-.48-.48a.75.75 0 0 0-1.06 0l-1 1a.75.75 0 0 0 0 1.06l.48.48l-6.8 6.8a2.5 2.5 0 0 0-.66 1.15l-.54 2.06a1 1 0 0 0 1.21 1.21l2.06-.54a2.5 2.5 0 0 0 1.15-.66l6.8-6.8l.48.48a.75.75 0 0 0 1.06 0l1-1a.75.75 0 0 0 0-1.06l-.48-.48l2.05-2.05a2.26 2.26 0 0 0 0-3.18Z"
          })
        });

      function _({
        featureName: e,
        onChangeFunction: t,
        value: r,
        placeholder: i = "#000000",
        icon: u,
        className: _,
        disabled: b,
        style: x,
        ...w
      }) {
        let g = (0, l.useRef)(null),
          y = (0, l.useRef)(null),
          W = (0, l.useRef)(null),
          [N, k] = (0, l.useState)(!1),
          [j, S] = (0, l.useState)(() => m(p)),
          [C, E] = (0, l.useState)(p),
          [I, M] = (0, l.useState)(!1),
          [L, $] = (0, l.useState)(!1),
          [A, D] = (0, l.useState)({
            left: 0,
            top: 0,
            width: 220
          }),
          [B, R] = (0, l.useState)(!1),
          z = h("string" == typeof r ? r : ""),
          H = (0, l.useMemo)(() => z ? v(z) : null, [z]),
          F = H ?? C;
        (0, l.useEffect)(() => {
          H && E(H)
        }, [H]), (0, l.useEffect)(() => {
          S(m(F))
        }, [F]), (0, l.useEffect)(() => {
          R(!0)
        }, []);
        let O = (0, l.useCallback)(() => {
          if (!g.current) return;
          let e = g.current.getBoundingClientRect(),
            t = Math.min(270, e.width),
            r = W.current?.offsetHeight ?? 260,
            a = e.bottom + 10;
          if (a + r > window.innerHeight - 12) {
            let t = e.top - 10 - r;
            t >= 12 && (a = t)
          }
          let l = window.innerWidth - t - 12;
          D({
            left: c(e.left, 12, Math.max(12, l)),
            top: a,
            width: t
          })
        }, []);
        (0, l.useLayoutEffect)(() => {
          if (!N) return;
          let e = () => {
            O()
          };
          return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
            window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0)
          }
        }, [N, O]), (0, l.useEffect)(() => {
          if (!N) return;
          let e = e => {
              let t = e.target,
                r = g.current,
                a = W.current;
              r && r.contains(t) || a && a.contains(t) || k(!1)
            },
            t = e => {
              "Escape" === e.key && k(!1)
            };
          return document.addEventListener("mousedown", e), document.addEventListener("keydown", t), () => {
            document.removeEventListener("mousedown", e), document.removeEventListener("keydown", t)
          }
        }, [N]);
        let P = (0, l.useCallback)(e => {
            S(e);
            let r = (e => {
              let t, {
                r,
                g: a,
                b: l
              } = (({
                h: e,
                s: t,
                v: r
              }) => {
                let a = r * t,
                  l = a * (1 - Math.abs(e / 60 % 2 - 1)),
                  n = r - a,
                  s = 0,
                  i = 0,
                  o = 0;
                e < 60 ? (s = a, i = l) : e < 120 ? (s = l, i = a) : e < 180 ? (i = a, o = l) : e < 240 ? (i = l, o = a) : e < 300 ? (s = l, o = a) : (s = a, o = l);
                let u = Math.round((s + n) * 255);
                return {
                  r: u,
                  g: Math.round((i + n) * 255),
                  b: Math.round((o + n) * 255)
                }
              })({
                ...e,
                h: (e.h % 360 + 360) % 360,
                s: c(e.s, 0, 1),
                v: c(e.v, 0, 1)
              });
              return t = e => e.toString(16).padStart(2, "0"), `#${t(r)}${t(a)}${t(l)}`
            })(e);
            E(r), t?.(r)
          }, [t]),
          T = (0, l.useCallback)(e => {
            let r = h(e.target.value);
            t?.(r)
          }, [t]),
          U = (0, l.useCallback)((e, t) => {
            if (!y.current) return;
            let r = y.current.getBoundingClientRect(),
              a = c((e - r.left) / r.width, 0, 1),
              l = c((t - r.top) / r.height, 0, 1);
            P({
              h: j.h,
              s: a,
              v: 1 - l
            })
          }, [j.h, P]),
          X = (0, l.useCallback)(e => {
            if (b) return;
            e.preventDefault();
            let t = e.pointerId;
            U(e.clientX, e.clientY);
            let r = e => {
                e.pointerId === t && U(e.clientX, e.clientY)
              },
              a = e => {
                e.pointerId === t && (document.removeEventListener("pointermove", r), document.removeEventListener("pointerup", a))
              };
            document.addEventListener("pointermove", r), document.addEventListener("pointerup", a)
          }, [b, U]),
          q = (0, l.useCallback)(e => {
            P({
              ...j,
              h: Number(e.target.value)
            })
          }, [j, P]),
          G = (0, l.useCallback)(() => {
            b || k(e => (e || O(), !0))
          }, [b, O]),
          K = (0, l.useCallback)(() => {
            b || k(e => {
              let t = !e;
              return t && O(), t
            })
          }, [b, O]),
          J = (0, l.useCallback)(async () => {
            if (!b && I && void 0 !== window.EyeDropper && !L) try {
              $(!0);
              let e = new window.EyeDropper,
                t = await e.open(),
                r = v(t.sRGBHex);
              r && P(m(r))
            } catch (e) {} finally {
              $(!1)
            }
          }, [b, L, I, P]);
        (0, l.useEffect)(() => {
          M(void 0 !== window.EyeDropper)
        }, []);
        let V = (0, s.A)(o().inputWrapperInput, d().textInput, u && d().textInputWithIcon, _),
          Y = "undefined" != typeof document ? document.body : null,
          Z = !!(N && B && Y),
          Q = Z ? {
            position: "fixed",
            left: `${A.left}px`,
            top: `${A.top}px`,
            width: `${A.width}px`
          } : void 0,
          ee = "string" == typeof e ? e : void 0,
          et = (0, a.jsxs)("div", {
            ref: W,
            className: d().panel,
            style: Q,
            children: [(0, a.jsxs)("div", {
              ref: y,
              className: d().svArea,
              style: {
                backgroundColor: `hsl(${j.h}, 100%, 50%)`
              },
              onPointerDown: X,
              children: [(0, a.jsx)("div", {
                className: d().svWhiteOverlay
              }), (0, a.jsx)("div", {
                className: d().svBlackOverlay
              }), (0, a.jsx)("div", {
                className: d().svCursor,
                style: {
                  left: `${100*j.s}%`,
                  top: `${(1-j.v)*100}%`
                }
              })]
            }), (0, a.jsx)("div", {
              className: d().hueSliderWrapper,
              children: (0, a.jsx)("input", {
                type: "range",
                min: 0,
                max: 360,
                step: 1,
                value: j.h,
                onChange: q,
                className: d().hueSlider,
                disabled: b
              })
            })]
          });
        return (0, a.jsxs)("div", {
          className: o().inputContainerWrapper,
          "data-dashboard-feature-label": ee,
          children: [(0, a.jsx)("h1", {
            className: o().featureName,
            children: e
          }), (0, a.jsxs)("div", {
            className: (0, s.A)(o().inputWrapperDiv, d().wrapper),
            ref: g,
            children: [(0, a.jsx)("button", {
              type: "button",
              className: d().leftSwatchButton,
              onClick: K,
              style: {
                cursor: b ? "not-allowed" : "pointer"
              },
              disabled: b,
              children: (0, a.jsx)("span", {
                className: d().colorSwatch,
                style: {
                  backgroundColor: F
                }
              })
            }), u && (0, a.jsx)("span", {
              className: d().leftIcon,
              children: u
            }), (0, a.jsx)("input", {
              type: "text",
              autoComplete: "off",
              spellCheck: !1,
              inputMode: "text",
              maxLength: 7,
              className: V,
              placeholder: i,
              value: z,
              onChange: T,
              onFocus: G,
              onClick: G,
              disabled: b,
              style: x,
              ...w
            }), (0, a.jsx)("button", {
              type: "button",
              className: d().pickerButton,
              onClick: I ? J : K,
              disabled: b || I && L,
              children: f
            }), N && (Z && Y ? (0, n.createPortal)(et, Y) : et)]
          })]
        })
      }
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
    60141: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => u
      });
      var a = r(95155),
        l = r(29722),
        n = r(12115),
        s = r(47650),
        i = r(7092),
        o = r.n(i);

      function u({
        featureName: e,
        icon: t,
        placeholder: r,
        data: i,
        value: u,
        defaultValue: d = null,
        onChangeFunction: p,
        dropdownMaxHeight: c = 240,
        dropdownClassName: h,
        className: v,
        disabled: m,
        name: f,
        required: _,
        id: b,
        onFocus: x,
        onBlur: w,
        onKeyDown: g,
        ...y
      }) {
        let W = (0, n.useMemo)(() => Array.isArray(i) ? i.map(e => "string" == typeof e ? {
            value: e,
            label: e
          } : e?.value === void 0 || e?.value === null ? null : {
            value: e.value,
            label: e.label ?? e.value,
            disabled: e.disabled ?? !1
          }).filter(e => !!e) : [], [i]),
          N = void 0 !== u,
          [k, j] = (0, n.useState)(d ?? null),
          [S, C] = (0, n.useState)(!1),
          [E, I] = (0, n.useState)(!1),
          [M, L] = (0, n.useState)(-1),
          $ = (0, n.useRef)(null),
          A = (0, n.useRef)(null),
          D = (0, n.useRef)(null),
          B = (0, n.useRef)(null),
          [R, z] = (0, n.useState)(null),
          [H, F] = (0, n.useState)(!1),
          O = (0, n.useId)(),
          P = b ?? O,
          T = `${P}-dropdown`,
          U = (0, n.useCallback)(() => {
            let e = A.current;
            if (!e) return;
            let t = e.getBoundingClientRect();
            z({
              left: t.left,
              top: t.bottom + 9,
              width: t.width
            })
          }, []);
        (0, n.useEffect)(() => {
          N || j(d ?? null)
        }, [d, N]), (0, n.useEffect)(() => {
          F(!0)
        }, []);
        let X = N ? u ?? null : k,
          q = null == X ? "" : String(X),
          G = W.find(e => e.value === X) ?? null,
          K = !!G || null != X && "" != `${X}`;
        (0, n.useEffect)(() => {
          S ? L(G && !G.disabled ? W.findIndex(e => e.value === G.value) : W.findIndex(e => !e.disabled)) : L(-1)
        }, [S, W, G]), (0, n.useEffect)(() => {
          if (S) return U(), window.addEventListener("resize", U), window.addEventListener("scroll", U, !0), () => {
            window.removeEventListener("resize", U), window.removeEventListener("scroll", U, !0)
          }
        }, [S, U]), (0, n.useEffect)(() => {
          if (!S) return;
          let e = e => {
            let t = e.target,
              r = $.current?.contains(t),
              a = B.current?.contains(t);
            r || a || C(!1)
          };
          return document.addEventListener("mousedown", e), document.addEventListener("touchstart", e), () => {
            document.removeEventListener("mousedown", e), document.removeEventListener("touchstart", e)
          }
        }, [S]), (0, n.useEffect)(() => {
          if (!S || M < 0) return;
          let e = D.current,
            t = e?.children[M];
          if (e && t) {
            let r = t.offsetTop,
              a = r + t.offsetHeight,
              l = e.scrollTop,
              n = l + e.clientHeight;
            r < l ? e.scrollTop = r : a > n && (e.scrollTop = a - e.clientHeight)
          }
        }, [M, S]);
        let J = e => {
            let t = W[e];
            if (t && !t.disabled) {
              var r;
              r = t.value, N || j(r), p?.(r), C(!1)
            }
          },
          V = e => {
            if (!W.length || !W.some(e => !e.disabled)) return;
            let t = M;
            for (let r = 0; r < W.length; r += 1)
              if (t = (t + e + W.length) % W.length, !W[t].disabled) {
                L(t);
                break
              }
          },
          Y = G?.label ?? (K ? String(X ?? "") : r),
          Z = (0, a.jsx)("div", {
            ref: B,
            className: (0, l.A)(o().dropdown, h),
            "data-open": S,
            id: T,
            style: {
              position: "fixed",
              width: R?.width,
              left: R?.left,
              top: R?.top
            },
            children: W.length > 0 ? (0, a.jsx)("ul", {
              ref: D,
              className: o().optionList,
              style: {
                maxHeight: c
              },
              children: W.map((e, t) => {
                let r = `${T}-option-${t}`,
                  l = t === M,
                  n = e.value === X;
                return (0, a.jsx)("li", {
                  id: r,
                  "data-highlighted": l,
                  "data-selected": n,
                  "data-disabled": e.disabled,
                  className: o().option,
                  onMouseDown: e => e.preventDefault(),
                  onMouseEnter: () => {
                    e.disabled || L(t)
                  },
                  onClick: () => J(t),
                  children: (0, a.jsx)("span", {
                    children: e.label
                  })
                }, `${e.value}-${t}`)
              })
            }) : (0, a.jsx)("div", {
              className: o().emptyState,
              children: "No options available"
            })
          }),
          Q = H && "undefined" != typeof document ? (0, s.createPortal)(Z, document.body) : null,
          ee = "string" == typeof e ? e : void 0;
        return (0, a.jsxs)("div", {
          className: o().container,
          ref: $,
          "data-dashboard-feature-label": ee,
          children: [e && (0, a.jsx)("div", {
            className: o().label,
            children: e
          }), f && (0, a.jsx)("input", {
            type: "hidden",
            name: f,
            value: q,
            required: _
          }), (0, a.jsxs)("div", {
            className: (0, l.A)(o().shell, v),
            "data-open": S,
            "data-focused": E,
            "data-disabled": m,
            ref: A,
            children: [t && (0, a.jsx)("span", {
              className: o().iconSlot,
              children: t
            }), (0, a.jsx)("button", {
              ...y,
              id: P,
              type: "button",
              className: (0, l.A)(o().trigger, t ? o().triggerWithIcon : void 0),
              onFocus: e => {
                I(!0), x?.(e)
              },
              onBlur: e => {
                let t = e.relatedTarget;
                t && $.current?.contains(t) || (I(!1), C(!1)), w?.(e)
              },
              onClick: () => {
                m || C(e => {
                  let t = !e;
                  return !e && t && U(), t
                })
              },
              onKeyDown: e => {
                m || ("ArrowDown" === e.key ? (e.preventDefault(), S ? V(1) : (U(), C(!0))) : "ArrowUp" === e.key ? (e.preventDefault(), S ? V(-1) : (U(), C(!0))) : "Enter" === e.key || " " === e.key ? (e.preventDefault(), S ? M >= 0 && J(M) : (U(), C(!0))) : "Escape" === e.key ? S && (e.preventDefault(), C(!1)) : "Tab" === e.key && C(!1)), g?.(e)
              },
              disabled: m,
              children: (0, a.jsx)("span", {
                className: (0, l.A)(o().value, !K && o().placeholder),
                children: Y || r || "Select an option"
              })
            }), (0, a.jsxs)("span", {
              className: o().chevrons,
              children: [(0, a.jsx)("span", {
                children: "▲"
              }), (0, a.jsx)("span", {
                children: "▼"
              })]
            })]
          }), Q]
        })
      }
    },
    65095: e => {
      e.exports = {
        wrapper: "colorInputWrapper_wrapper__HMrVe",
        textInput: "colorInputWrapper_textInput__lIQe9",
        textInputWithIcon: "colorInputWrapper_textInputWithIcon__pCuPt",
        leftSwatchButton: "colorInputWrapper_leftSwatchButton__2i9aK",
        colorSwatch: "colorInputWrapper_colorSwatch__Ijvyq",
        leftIcon: "colorInputWrapper_leftIcon__Xj0aW",
        pickerButton: "colorInputWrapper_pickerButton__U9Wlw",
        panel: "colorInputWrapper_panel__MRo6m",
        svArea: "colorInputWrapper_svArea___zVit",
        svWhiteOverlay: "colorInputWrapper_svWhiteOverlay__BKAkR",
        svBlackOverlay: "colorInputWrapper_svBlackOverlay__XIwtz",
        svCursor: "colorInputWrapper_svCursor___MSvJ",
        hueSliderWrapper: "colorInputWrapper_hueSliderWrapper__ycaHU",
        hueSlider: "colorInputWrapper_hueSlider__bQeHE"
      }
    }
  }
]);