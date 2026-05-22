(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3014], {
    7092: e => {
      e.exports = {
        container: "GUNS__a3-24c433d6-378c65c5-2a8e726a",
        label: "GUNS__4f-eeffaf02-c3f457dc-e1ef8e24",
        shell: "GUNS__3b-14d46023-9e79b44b-159c4ff0",
        iconSlot: "GUNS__d3-c21cfd38-430b0eff-b94dc041",
        trigger: "GUNS__5d-ca15789f-fd0ac2bd-19e39093",
        triggerWithIcon: "GUNS__65-05a6d251-5f226ec3-05f5c4ce",
        value: "GUNS__07-9e3274c0-c9b7af62-a0bf4c90",
        placeholder: "GUNS__48-aee4e72d-4ec1dc72-c8ce0788",
        chevrons: "GUNS__bf-591b5384-98753a6b-866fb128",
        dropdown: "GUNS__07-c3fa643a-8fe967b1-59b4fc78",
        optionList: "GUNS__38-ea4b0fb7-4d271638-45d22497",
        option: "GUNS__58-75b6f7ee-8f90fb52-c8d87b43",
        emptyState: "GUNS__a1-5fe1652b-2b03f8ad-cf811adc"
      }
    },
    9992: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => s
      });
      var n = a(95155),
        l = a(98241),
        r = a.n(l);

      function s({
        children: e,
        featureName: t,
        transparent: a
      }) {
        return (0, n.jsxs)("div", {
          className: r().featureContainerWrapper,
          "data-dashboard-feature-label": "string" == typeof t ? t : void 0,
          children: [(0, n.jsx)("span", {
            className: `${r().featureContainerSpan}`,
            children: t
          }), (0, n.jsx)("div", {
            className: r().featureContainer,
            style: {
              backgroundColor: a && "transparent",
              padding: a && 0
            },
            children: e
          })]
        })
      }
    },
    21924: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => u
      });
      var n = a(95155),
        l = a(29722),
        r = a(12115),
        s = a(98241),
        i = a.n(s),
        d = a(51047),
        c = a.n(d);
      let o = (e, t) => {
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
        defaultValue: s,
        onChangeFunction: d,
        label: u,
        className: f,
        min: p,
        max: b,
        step: h,
        disabled: m,
        onChange: v,
        onFocus: N,
        onBlur: _,
        onPointerDown: x,
        onPointerUp: S,
        onPointerCancel: w,
        ...g
      }) {
        let y = o(p, 0),
          j = o(b, 100),
          k = o(h, 1) || 1,
          E = a ?? s ?? y,
          C = void 0 !== a,
          [U, G] = (0, r.useState)(E),
          [L, M] = (0, r.useState)(!1),
          [$, I] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
          C || G(s ?? y)
        }, [s, C, y]);
        let D = C ? a ?? y : U,
          A = Math.min(j, Math.max(y, D)),
          W = Math.max(j - y, Number.EPSILON),
          B = (A - y) / W * 100;
        (0, r.useEffect)(() => {
          C || G(e => Math.min(j, Math.max(y, e)))
        }, [C, y, j]);
        let R = (0, r.useMemo)(() => t?.length ? t.map(e => ({
            ...e,
            normalizedValue: Math.min(j, Math.max(y, e.value)),
            position: Math.min(100, Math.max(0, (Math.min(j, Math.max(y, e.value)) - y) / W * 100))
          })) : [], [t, y, j, W]),
          z = (0, r.useMemo)(() => {
            if (!u) return `${A}`;
            let e = "function" == typeof u ? u(A) : u;
            return null == e || !1 === e ? `${A}` : e
          }, [u, A]),
          H = !m && (L || $),
          P = "string" == typeof e ? e : void 0;
        return (0, n.jsxs)("div", {
          className: i().inputContainerWrapper,
          "data-dashboard-feature-label": P,
          children: [e && (0, n.jsx)("h1", {
            className: i().featureName,
            style: {
              marginLeft: 0
            },
            children: e
          }), (0, n.jsx)("div", {
            className: (0, l.A)(i().inputWrapperDiv, c().wrapper, f),
            children: (0, n.jsx)("div", {
              className: c().sliderContent,
              children: (0, n.jsxs)("div", {
                className: c().sliderShell,
                onMouseEnter: () => M(!0),
                onMouseLeave: () => {
                  $ || M(!1)
                },
                children: [(0, n.jsxs)("div", {
                  className: c().track,
                  children: [(0, n.jsx)("div", {
                    className: c().progress,
                    style: {
                      width: `${B}%`
                    }
                  }), (0, n.jsx)("div", {
                    className: c().thumb,
                    style: {
                      left: `calc(${B}% - (var(--thumb-size) / 2))`
                    },
                    "data-visible": H,
                    children: (0, n.jsx)("span", {
                      className: c().tooltip,
                      "data-visible": H,
                      children: z
                    })
                  })]
                }), (0, n.jsx)("input", {
                  ...g,
                  type: "range",
                  min: y,
                  max: j,
                  step: k,
                  value: A,
                  disabled: m,
                  className: c().range,
                  onChange: e => {
                    let t = Number(e.target.value);
                    Number.isNaN(t) || (C || G(t), d?.(t), v?.(e))
                  },
                  onFocus: e => {
                    M(!0), N?.(e)
                  },
                  onBlur: e => {
                    M(!1), _?.(e)
                  },
                  onPointerDown: e => {
                    I(!0), x?.(e)
                  },
                  onPointerUp: e => {
                    I(!1), S?.(e)
                  },
                  onPointerCancel: e => {
                    I(!1), w?.(e)
                  },
                  "aria-valuemin": y,
                  "aria-valuemax": j,
                  "aria-valuenow": A
                }), R.length > 0 && (0, n.jsx)("div", {
                  className: c().marks,
                  children: R.map((e, t) => (0, n.jsxs)("div", {
                    className: c().mark,
                    style: {
                      left: `${e.position}%`
                    },
                    children: [(0, n.jsx)("span", {
                      className: c().markDot,
                      "data-active": e.normalizedValue <= A
                    }), e.label && (0, n.jsx)("span", {
                      className: c().markLabel,
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
    30184: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => v
      });
      var n = a(95155),
        l = a(12115),
        r = a(47650),
        s = a(29722),
        i = a(98241),
        d = a.n(i),
        c = a(65095),
        o = a.n(c);
      let u = "#1c1c1c",
        f = (e, t, a) => Math.min(Math.max(e, t), a),
        p = e => {
          if (!e) return "";
          let t = e.trim(),
            a = t.replace(/^#/, "").replace(/[^0-9a-f]/gi, "").slice(0, 6).toLowerCase();
          return a ? `#${a}` : t.startsWith("#") ? "#" : ""
        },
        b = e => {
          if (/^#[0-9a-f]{6}$/i.test(e)) return e.toLowerCase();
          if (/^#[0-9a-f]{3}$/i.test(e)) return `#${e.slice(1).split("").map(e=>`${e}${e}`).join("")}`.toLowerCase();
          return null
        },
        h = e => {
          let t, a, n, l, r, s, i, {
            r: d,
            g: c,
            b: o
          } = {
            r: (t = parseInt(e.replace("#", ""), 16)) >> 16 & 255,
            g: t >> 8 & 255,
            b: 255 & t
          };
          return s = (r = Math.max(a = d / 255, n = c / 255, l = o / 255)) - Math.min(a, n, l), i = 0, 0 !== s && (i = (r === a ? (n - l) / s % 6 : r === n ? (l - a) / s + 2 : (a - n) / s + 4) * 60) < 0 && (i += 360), {
            h: i,
            s: 0 === r ? 0 : s / r,
            v: r
          }
        },
        m = (0, n.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "19",
          height: "19",
          viewBox: "0 0 24 24",
          children: (0, n.jsx)("path", {
            fill: "currentColor",
            d: "M19.5 3.56a2.26 2.26 0 0 0-3.18 0l-2.05 2.05l-.48-.48a.75.75 0 0 0-1.06 0l-1 1a.75.75 0 0 0 0 1.06l.48.48l-6.8 6.8a2.5 2.5 0 0 0-.66 1.15l-.54 2.06a1 1 0 0 0 1.21 1.21l2.06-.54a2.5 2.5 0 0 0 1.15-.66l6.8-6.8l.48.48a.75.75 0 0 0 1.06 0l1-1a.75.75 0 0 0 0-1.06l-.48-.48l2.05-2.05a2.26 2.26 0 0 0 0-3.18Z"
          })
        });

      function v({
        featureName: e,
        onChangeFunction: t,
        value: a,
        placeholder: i = "#000000",
        icon: c,
        className: v,
        disabled: N,
        style: _,
        ...x
      }) {
        let S = (0, l.useRef)(null),
          w = (0, l.useRef)(null),
          g = (0, l.useRef)(null),
          [y, j] = (0, l.useState)(!1),
          [k, E] = (0, l.useState)(() => h(u)),
          [C, U] = (0, l.useState)(u),
          [G, L] = (0, l.useState)(!1),
          [M, $] = (0, l.useState)(!1),
          [I, D] = (0, l.useState)({
            left: 0,
            top: 0,
            width: 220
          }),
          [A, W] = (0, l.useState)(!1),
          B = p("string" == typeof a ? a : ""),
          R = (0, l.useMemo)(() => B ? b(B) : null, [B]),
          z = R ?? C;
        (0, l.useEffect)(() => {
          R && U(R)
        }, [R]), (0, l.useEffect)(() => {
          E(h(z))
        }, [z]), (0, l.useEffect)(() => {
          W(!0)
        }, []);
        let H = (0, l.useCallback)(() => {
          if (!S.current) return;
          let e = S.current.getBoundingClientRect(),
            t = Math.min(270, e.width),
            a = g.current?.offsetHeight ?? 260,
            n = e.bottom + 10;
          if (n + a > window.innerHeight - 12) {
            let t = e.top - 10 - a;
            t >= 12 && (n = t)
          }
          let l = window.innerWidth - t - 12;
          D({
            left: f(e.left, 12, Math.max(12, l)),
            top: n,
            width: t
          })
        }, []);
        (0, l.useLayoutEffect)(() => {
          if (!y) return;
          let e = () => {
            H()
          };
          return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
            window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0)
          }
        }, [y, H]), (0, l.useEffect)(() => {
          if (!y) return;
          let e = e => {
              let t = e.target,
                a = S.current,
                n = g.current;
              a && a.contains(t) || n && n.contains(t) || j(!1)
            },
            t = e => {
              "Escape" === e.key && j(!1)
            };
          return document.addEventListener("mousedown", e), document.addEventListener("keydown", t), () => {
            document.removeEventListener("mousedown", e), document.removeEventListener("keydown", t)
          }
        }, [y]);
        let P = (0, l.useCallback)(e => {
            E(e);
            let a = (e => {
              let t, {
                r: a,
                g: n,
                b: l
              } = (({
                h: e,
                s: t,
                v: a
              }) => {
                let n = a * t,
                  l = n * (1 - Math.abs(e / 60 % 2 - 1)),
                  r = a - n,
                  s = 0,
                  i = 0,
                  d = 0;
                e < 60 ? (s = n, i = l) : e < 120 ? (s = l, i = n) : e < 180 ? (i = n, d = l) : e < 240 ? (i = l, d = n) : e < 300 ? (s = l, d = n) : (s = n, d = l);
                let c = Math.round((s + r) * 255);
                return {
                  r: c,
                  g: Math.round((i + r) * 255),
                  b: Math.round((d + r) * 255)
                }
              })({
                ...e,
                h: (e.h % 360 + 360) % 360,
                s: f(e.s, 0, 1),
                v: f(e.v, 0, 1)
              });
              return t = e => e.toString(16).padStart(2, "0"), `#${t(a)}${t(n)}${t(l)}`
            })(e);
            U(a), t?.(a)
          }, [t]),
          T = (0, l.useCallback)(e => {
            let a = p(e.target.value);
            t?.(a)
          }, [t]),
          O = (0, l.useCallback)((e, t) => {
            if (!w.current) return;
            let a = w.current.getBoundingClientRect(),
              n = f((e - a.left) / a.width, 0, 1),
              l = f((t - a.top) / a.height, 0, 1);
            P({
              h: k.h,
              s: n,
              v: 1 - l
            })
          }, [k.h, P]),
          F = (0, l.useCallback)(e => {
            if (N) return;
            e.preventDefault();
            let t = e.pointerId;
            O(e.clientX, e.clientY);
            let a = e => {
                e.pointerId === t && O(e.clientX, e.clientY)
              },
              n = e => {
                e.pointerId === t && (document.removeEventListener("pointermove", a), document.removeEventListener("pointerup", n))
              };
            document.addEventListener("pointermove", a), document.addEventListener("pointerup", n)
          }, [N, O]),
          V = (0, l.useCallback)(e => {
            P({
              ...k,
              h: Number(e.target.value)
            })
          }, [k, P]),
          X = (0, l.useCallback)(() => {
            N || j(e => (e || H(), !0))
          }, [N, H]),
          Y = (0, l.useCallback)(() => {
            N || j(e => {
              let t = !e;
              return t && H(), t
            })
          }, [N, H]),
          q = (0, l.useCallback)(async () => {
            if (!N && G && void 0 !== window.EyeDropper && !M) try {
              $(!0);
              let e = new window.EyeDropper,
                t = await e.open(),
                a = b(t.sRGBHex);
              a && P(h(a))
            } catch (e) {} finally {
              $(!1)
            }
          }, [N, M, G, P]);
        (0, l.useEffect)(() => {
          L(void 0 !== window.EyeDropper)
        }, []);
        let K = (0, s.A)(d().inputWrapperInput, o().textInput, c && o().textInputWithIcon, v),
          Z = "undefined" != typeof document ? document.body : null,
          J = !!(y && A && Z),
          Q = J ? {
            position: "fixed",
            left: `${I.left}px`,
            top: `${I.top}px`,
            width: `${I.width}px`
          } : void 0,
          ee = "string" == typeof e ? e : void 0,
          et = (0, n.jsxs)("div", {
            ref: g,
            className: o().panel,
            style: Q,
            children: [(0, n.jsxs)("div", {
              ref: w,
              className: o().svArea,
              style: {
                backgroundColor: `hsl(${k.h}, 100%, 50%)`
              },
              onPointerDown: F,
              children: [(0, n.jsx)("div", {
                className: o().svWhiteOverlay
              }), (0, n.jsx)("div", {
                className: o().svBlackOverlay
              }), (0, n.jsx)("div", {
                className: o().svCursor,
                style: {
                  left: `${100*k.s}%`,
                  top: `${(1-k.v)*100}%`
                }
              })]
            }), (0, n.jsx)("div", {
              className: o().hueSliderWrapper,
              children: (0, n.jsx)("input", {
                type: "range",
                min: 0,
                max: 360,
                step: 1,
                value: k.h,
                onChange: V,
                className: o().hueSlider,
                disabled: N
              })
            })]
          });
        return (0, n.jsxs)("div", {
          className: d().inputContainerWrapper,
          "data-dashboard-feature-label": ee,
          children: [(0, n.jsx)("h1", {
            className: d().featureName,
            children: e
          }), (0, n.jsxs)("div", {
            className: (0, s.A)(d().inputWrapperDiv, o().wrapper),
            ref: S,
            children: [(0, n.jsx)("button", {
              type: "button",
              className: o().leftSwatchButton,
              onClick: Y,
              style: {
                cursor: N ? "not-allowed" : "pointer"
              },
              disabled: N,
              children: (0, n.jsx)("span", {
                className: o().colorSwatch,
                style: {
                  backgroundColor: z
                }
              })
            }), c && (0, n.jsx)("span", {
              className: o().leftIcon,
              children: c
            }), (0, n.jsx)("input", {
              type: "text",
              autoComplete: "off",
              spellCheck: !1,
              inputMode: "text",
              maxLength: 7,
              className: K,
              placeholder: i,
              value: B,
              onChange: T,
              onFocus: X,
              onClick: X,
              disabled: N,
              style: _,
              ...x
            }), (0, n.jsx)("button", {
              type: "button",
              className: o().pickerButton,
              onClick: G ? q : Y,
              disabled: N || G && M,
              children: m
            }), y && (J && Z ? (0, r.createPortal)(et, Z) : et)]
          })]
        })
      }
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
    60141: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => c
      });
      var n = a(95155),
        l = a(29722),
        r = a(12115),
        s = a(47650),
        i = a(7092),
        d = a.n(i);

      function c({
        featureName: e,
        icon: t,
        placeholder: a,
        data: i,
        value: c,
        defaultValue: o = null,
        onChangeFunction: u,
        dropdownMaxHeight: f = 240,
        dropdownClassName: p,
        className: b,
        disabled: h,
        name: m,
        required: v,
        id: N,
        onFocus: _,
        onBlur: x,
        onKeyDown: S,
        ...w
      }) {
        let g = (0, r.useMemo)(() => Array.isArray(i) ? i.map(e => "string" == typeof e ? {
            value: e,
            label: e
          } : e?.value === void 0 || e?.value === null ? null : {
            value: e.value,
            label: e.label ?? e.value,
            disabled: e.disabled ?? !1
          }).filter(e => !!e) : [], [i]),
          y = void 0 !== c,
          [j, k] = (0, r.useState)(o ?? null),
          [E, C] = (0, r.useState)(!1),
          [U, G] = (0, r.useState)(!1),
          [L, M] = (0, r.useState)(-1),
          $ = (0, r.useRef)(null),
          I = (0, r.useRef)(null),
          D = (0, r.useRef)(null),
          A = (0, r.useRef)(null),
          [W, B] = (0, r.useState)(null),
          [R, z] = (0, r.useState)(!1),
          H = (0, r.useId)(),
          P = N ?? H,
          T = `${P}-dropdown`,
          O = (0, r.useCallback)(() => {
            let e = I.current;
            if (!e) return;
            let t = e.getBoundingClientRect();
            B({
              left: t.left,
              top: t.bottom + 9,
              width: t.width
            })
          }, []);
        (0, r.useEffect)(() => {
          y || k(o ?? null)
        }, [o, y]), (0, r.useEffect)(() => {
          z(!0)
        }, []);
        let F = y ? c ?? null : j,
          V = null == F ? "" : String(F),
          X = g.find(e => e.value === F) ?? null,
          Y = !!X || null != F && "" != `${F}`;
        (0, r.useEffect)(() => {
          E ? M(X && !X.disabled ? g.findIndex(e => e.value === X.value) : g.findIndex(e => !e.disabled)) : M(-1)
        }, [E, g, X]), (0, r.useEffect)(() => {
          if (E) return O(), window.addEventListener("resize", O), window.addEventListener("scroll", O, !0), () => {
            window.removeEventListener("resize", O), window.removeEventListener("scroll", O, !0)
          }
        }, [E, O]), (0, r.useEffect)(() => {
          if (!E) return;
          let e = e => {
            let t = e.target,
              a = $.current?.contains(t),
              n = A.current?.contains(t);
            a || n || C(!1)
          };
          return document.addEventListener("mousedown", e), document.addEventListener("touchstart", e), () => {
            document.removeEventListener("mousedown", e), document.removeEventListener("touchstart", e)
          }
        }, [E]), (0, r.useEffect)(() => {
          if (!E || L < 0) return;
          let e = D.current,
            t = e?.children[L];
          if (e && t) {
            let a = t.offsetTop,
              n = a + t.offsetHeight,
              l = e.scrollTop,
              r = l + e.clientHeight;
            a < l ? e.scrollTop = a : n > r && (e.scrollTop = n - e.clientHeight)
          }
        }, [L, E]);
        let q = e => {
            let t = g[e];
            if (t && !t.disabled) {
              var a;
              a = t.value, y || k(a), u?.(a), C(!1)
            }
          },
          K = e => {
            if (!g.length || !g.some(e => !e.disabled)) return;
            let t = L;
            for (let a = 0; a < g.length; a += 1)
              if (t = (t + e + g.length) % g.length, !g[t].disabled) {
                M(t);
                break
              }
          },
          Z = X?.label ?? (Y ? String(F ?? "") : a),
          J = (0, n.jsx)("div", {
            ref: A,
            className: (0, l.A)(d().dropdown, p),
            "data-open": E,
            id: T,
            style: {
              position: "fixed",
              width: W?.width,
              left: W?.left,
              top: W?.top
            },
            children: g.length > 0 ? (0, n.jsx)("ul", {
              ref: D,
              className: d().optionList,
              style: {
                maxHeight: f
              },
              children: g.map((e, t) => {
                let a = `${T}-option-${t}`,
                  l = t === L,
                  r = e.value === F;
                return (0, n.jsx)("li", {
                  id: a,
                  "data-highlighted": l,
                  "data-selected": r,
                  "data-disabled": e.disabled,
                  className: d().option,
                  onMouseDown: e => e.preventDefault(),
                  onMouseEnter: () => {
                    e.disabled || M(t)
                  },
                  onClick: () => q(t),
                  children: (0, n.jsx)("span", {
                    children: e.label
                  })
                }, `${e.value}-${t}`)
              })
            }) : (0, n.jsx)("div", {
              className: d().emptyState,
              children: "No options available"
            })
          }),
          Q = R && "undefined" != typeof document ? (0, s.createPortal)(J, document.body) : null,
          ee = "string" == typeof e ? e : void 0;
        return (0, n.jsxs)("div", {
          className: d().container,
          ref: $,
          "data-dashboard-feature-label": ee,
          children: [e && (0, n.jsx)("div", {
            className: d().label,
            children: e
          }), m && (0, n.jsx)("input", {
            type: "hidden",
            name: m,
            value: V,
            required: v
          }), (0, n.jsxs)("div", {
            className: (0, l.A)(d().shell, b),
            "data-open": E,
            "data-focused": U,
            "data-disabled": h,
            ref: I,
            children: [t && (0, n.jsx)("span", {
              className: d().iconSlot,
              children: t
            }), (0, n.jsx)("button", {
              ...w,
              id: P,
              type: "button",
              className: (0, l.A)(d().trigger, t ? d().triggerWithIcon : void 0),
              onFocus: e => {
                G(!0), _?.(e)
              },
              onBlur: e => {
                let t = e.relatedTarget;
                t && $.current?.contains(t) || (G(!1), C(!1)), x?.(e)
              },
              onClick: () => {
                h || C(e => {
                  let t = !e;
                  return !e && t && O(), t
                })
              },
              onKeyDown: e => {
                h || ("ArrowDown" === e.key ? (e.preventDefault(), E ? K(1) : (O(), C(!0))) : "ArrowUp" === e.key ? (e.preventDefault(), E ? K(-1) : (O(), C(!0))) : "Enter" === e.key || " " === e.key ? (e.preventDefault(), E ? L >= 0 && q(L) : (O(), C(!0))) : "Escape" === e.key ? E && (e.preventDefault(), C(!1)) : "Tab" === e.key && C(!1)), S?.(e)
              },
              disabled: h,
              children: (0, n.jsx)("span", {
                className: (0, l.A)(d().value, !Y && d().placeholder),
                children: Z || a || "Select an option"
              })
            }), (0, n.jsxs)("span", {
              className: d().chevrons,
              children: [(0, n.jsx)("span", {
                children: "▲"
              }), (0, n.jsx)("span", {
                children: "▼"
              })]
            })]
          }), Q]
        })
      }
    },
    65095: e => {
      e.exports = {
        wrapper: "GUNS__e1-f8f642a4-f6d47d23-fb654296",
        textInput: "GUNS__ab-a5d3bdab-cc778255-657e2cc4",
        textInputWithIcon: "GUNS__fc-40c58644-d0c31024-70c7140e",
        leftSwatchButton: "GUNS__3a-b829acea-47c748b8-50a13f3f",
        colorSwatch: "GUNS__2e-1339255d-a7d84b7f-0ea67142",
        leftIcon: "GUNS__aa-902256d4-5487d5f8-b9613ef0",
        pickerButton: "GUNS__92-4f4687b2-1e664613-974c4960",
        panel: "GUNS__38-a51c3e41-62cbb5a1-ccccab8b",
        svArea: "GUNS__2c-a7bb8984-7029b34c-14a9174a",
        svWhiteOverlay: "GUNS__b2-febba06e-61337463-5b9fb42c",
        svBlackOverlay: "GUNS__6b-ae93a09c-8aab347b-8e4436a2",
        svCursor: "GUNS__d1-b875ba75-f1517f91-aeffde62",
        hueSliderWrapper: "GUNS__f2-1b8470e4-71cc8038-7031f1f6",
        hueSlider: "GUNS__6c-f4fedfd4-da5b3cbc-6c77e2c2"
      }
    }
  }
]);