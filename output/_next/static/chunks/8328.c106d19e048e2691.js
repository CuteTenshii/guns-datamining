(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8328], {
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
    19376: (e, t, n) => {
      "use strict";
      n.d(t, {
        A: () => d
      });
      var l = n(95155),
        a = n(12115),
        r = n(29722),
        s = n(71537),
        i = n.n(s);
      let u = (e, t, n) => Math.min(Math.max(e, t), n),
        c = (e, t) => e > t ? [] : Array.from({
          length: t - e + 1
        }, (t, n) => e + n);

      function d({
        value: e,
        onChange: t,
        total: n,
        className: s,
        siblings: d = 1,
        disabled: o = !1,
        prevIcon: f = (0, l.jsx)("span", {
          children: "‹"
        }),
        nextIcon: p = (0, l.jsx)("span", {
          children: "›"
        })
      }) {
        let b = u(e, 1, Math.max(1, n)),
          h = (0, a.useMemo)(() => (function(e, t, n) {
            let l = Math.max(0, n);
            if (t <= 2 * l + 5) return c(1, t);
            let a = Math.max(e - l, 2),
              r = Math.min(e + l, t - 1),
              s = a > 2,
              i = r < t - 1,
              u = [1];
            if (!s && !i) return u.push(...c(2, t - 1), t), u;
            if (!s && i) {
              let e = Math.min(t - 1, 3 + 2 * l);
              return u.push(...c(2, e)), u.push("end-ellipsis", t), u
            }
            if (s && !i) {
              let e = Math.max(2, t - (3 + 2 * l) + 1);
              return u.push("start-ellipsis", ...c(e, t - 1), t), u
            }
            return u.push("start-ellipsis", ...c(a, r), "end-ellipsis", t), u
          })(b, Math.max(1, n), d), [b, n, d]);
        if (n <= 1) return null;
        let m = e => {
          if (o || e === b) return;
          let l = u(e, 1, n);
          l !== b && t(l)
        };
        return (0, l.jsxs)("nav", {
          className: (0, r.A)(i().pagination, s),
          children: [(0, l.jsx)("button", {
            type: "button",
            className: (0, r.A)(i().pageButton, i().arrowButton),
            onClick: () => m(b - 1),
            disabled: 1 === b || o,
            children: f
          }), h.map((e, t) => {
            if ("number" == typeof e) {
              let t = e === b;
              return (0, l.jsx)("button", {
                type: "button",
                className: (0, r.A)(i().pageButton, {
                  [i().active]: t
                }),
                onClick: () => m(e),
                children: e
              }, `page-${e}`)
            }
            return (0, l.jsx)("span", {
              className: i().ellipsis,
              children: "…"
            }, `${e}-${t}`)
          }), (0, l.jsx)("button", {
            type: "button",
            className: (0, r.A)(i().pageButton, i().arrowButton),
            onClick: () => m(b + 1),
            disabled: b === n || o,
            children: p
          })]
        })
      }
    },
    29483: (e, t, n) => {
      "use strict";
      n.d(t, {
        A: () => s
      });
      var l = n(12115);
      let a = {
          leading: !1,
          trailing: !0
        },
        r = e => {
          e.current && (clearTimeout(e.current), e.current = null)
        };

      function s(e, t = 600, n = a) {
        let {
          leading: i = !1,
          trailing: u = !0,
          maxWait: c
        } = n, [d, o] = (0, l.useState)(e), f = (0, l.useRef)(null), p = (0, l.useRef)(null), b = (0, l.useRef)(!1), h = (0, l.useCallback)(() => {
          r(f), r(p), b.current = !1
        }, []), m = (0, l.useCallback)(() => {
          r(f), r(p), b.current = !1, o(e)
        }, [e]);
        return (0, l.useEffect)(() => (i && !b.current && (o(e), b.current = !0), r(f), u && (f.current = setTimeout(() => {
          o(e), b.current = !1
        }, t)), "number" == typeof c && (r(p), p.current = setTimeout(() => {
          o(e), b.current = !1, r(f)
        }, c)), () => {
          r(f), r(p)
        }), [e, t, i, u, c]), [d, {
          cancel: h,
          flush: m,
          setValue: o
        }]
      }
    },
    60141: (e, t, n) => {
      "use strict";
      n.d(t, {
        A: () => c
      });
      var l = n(95155),
        a = n(29722),
        r = n(12115),
        s = n(47650),
        i = n(7092),
        u = n.n(i);

      function c({
        featureName: e,
        icon: t,
        placeholder: n,
        data: i,
        value: c,
        defaultValue: d = null,
        onChangeFunction: o,
        dropdownMaxHeight: f = 240,
        dropdownClassName: p,
        className: b,
        disabled: h,
        name: m,
        required: v,
        id: _,
        onFocus: N,
        onBlur: g,
        onKeyDown: x,
        ...S
      }) {
        let w = (0, r.useMemo)(() => Array.isArray(i) ? i.map(e => "string" == typeof e ? {
            value: e,
            label: e
          } : e?.value === void 0 || e?.value === null ? null : {
            value: e.value,
            label: e.label ?? e.value,
            disabled: e.disabled ?? !1
          }).filter(e => !!e) : [], [i]),
          y = void 0 !== c,
          [j, E] = (0, r.useState)(d ?? null),
          [k, U] = (0, r.useState)(!1),
          [G, A] = (0, r.useState)(!1),
          [M, C] = (0, r.useState)(-1),
          L = (0, r.useRef)(null),
          B = (0, r.useRef)(null),
          T = (0, r.useRef)(null),
          $ = (0, r.useRef)(null),
          [D, R] = (0, r.useState)(null),
          [I, H] = (0, r.useState)(!1),
          z = (0, r.useId)(),
          W = _ ?? z,
          q = `${W}-dropdown`,
          F = (0, r.useCallback)(() => {
            let e = B.current;
            if (!e) return;
            let t = e.getBoundingClientRect();
            R({
              left: t.left,
              top: t.bottom + 9,
              width: t.width
            })
          }, []);
        (0, r.useEffect)(() => {
          y || E(d ?? null)
        }, [d, y]), (0, r.useEffect)(() => {
          H(!0)
        }, []);
        let K = y ? c ?? null : j,
          P = null == K ? "" : String(K),
          V = w.find(e => e.value === K) ?? null,
          J = !!V || null != K && "" != `${K}`;
        (0, r.useEffect)(() => {
          k ? C(V && !V.disabled ? w.findIndex(e => e.value === V.value) : w.findIndex(e => !e.disabled)) : C(-1)
        }, [k, w, V]), (0, r.useEffect)(() => {
          if (k) return F(), window.addEventListener("resize", F), window.addEventListener("scroll", F, !0), () => {
            window.removeEventListener("resize", F), window.removeEventListener("scroll", F, !0)
          }
        }, [k, F]), (0, r.useEffect)(() => {
          if (!k) return;
          let e = e => {
            let t = e.target,
              n = L.current?.contains(t),
              l = $.current?.contains(t);
            n || l || U(!1)
          };
          return document.addEventListener("mousedown", e), document.addEventListener("touchstart", e), () => {
            document.removeEventListener("mousedown", e), document.removeEventListener("touchstart", e)
          }
        }, [k]), (0, r.useEffect)(() => {
          if (!k || M < 0) return;
          let e = T.current,
            t = e?.children[M];
          if (e && t) {
            let n = t.offsetTop,
              l = n + t.offsetHeight,
              a = e.scrollTop,
              r = a + e.clientHeight;
            n < a ? e.scrollTop = n : l > r && (e.scrollTop = l - e.clientHeight)
          }
        }, [M, k]);
        let O = e => {
            let t = w[e];
            if (t && !t.disabled) {
              var n;
              n = t.value, y || E(n), o?.(n), U(!1)
            }
          },
          Q = e => {
            if (!w.length || !w.some(e => !e.disabled)) return;
            let t = M;
            for (let n = 0; n < w.length; n += 1)
              if (t = (t + e + w.length) % w.length, !w[t].disabled) {
                C(t);
                break
              }
          },
          X = V?.label ?? (J ? String(K ?? "") : n),
          Y = (0, l.jsx)("div", {
            ref: $,
            className: (0, a.A)(u().dropdown, p),
            "data-open": k,
            id: q,
            style: {
              position: "fixed",
              width: D?.width,
              left: D?.left,
              top: D?.top
            },
            children: w.length > 0 ? (0, l.jsx)("ul", {
              ref: T,
              className: u().optionList,
              style: {
                maxHeight: f
              },
              children: w.map((e, t) => {
                let n = `${q}-option-${t}`,
                  a = t === M,
                  r = e.value === K;
                return (0, l.jsx)("li", {
                  id: n,
                  "data-highlighted": a,
                  "data-selected": r,
                  "data-disabled": e.disabled,
                  className: u().option,
                  onMouseDown: e => e.preventDefault(),
                  onMouseEnter: () => {
                    e.disabled || C(t)
                  },
                  onClick: () => O(t),
                  children: (0, l.jsx)("span", {
                    children: e.label
                  })
                }, `${e.value}-${t}`)
              })
            }) : (0, l.jsx)("div", {
              className: u().emptyState,
              children: "No options available"
            })
          }),
          Z = I && "undefined" != typeof document ? (0, s.createPortal)(Y, document.body) : null;
        return (0, l.jsxs)("div", {
          className: u().container,
          ref: L,
          children: [e && (0, l.jsx)("div", {
            className: u().label,
            children: e
          }), m && (0, l.jsx)("input", {
            type: "hidden",
            name: m,
            value: P,
            required: v
          }), (0, l.jsxs)("div", {
            className: (0, a.A)(u().shell, b),
            "data-open": k,
            "data-focused": G,
            "data-disabled": h,
            ref: B,
            children: [t && (0, l.jsx)("span", {
              className: u().iconSlot,
              children: t
            }), (0, l.jsx)("button", {
              ...S,
              id: W,
              type: "button",
              className: (0, a.A)(u().trigger, t ? u().triggerWithIcon : void 0),
              onFocus: e => {
                A(!0), N?.(e)
              },
              onBlur: e => {
                let t = e.relatedTarget;
                t && L.current?.contains(t) || (A(!1), U(!1)), g?.(e)
              },
              onClick: () => {
                h || U(e => {
                  let t = !e;
                  return !e && t && F(), t
                })
              },
              onKeyDown: e => {
                h || ("ArrowDown" === e.key ? (e.preventDefault(), k ? Q(1) : (F(), U(!0))) : "ArrowUp" === e.key ? (e.preventDefault(), k ? Q(-1) : (F(), U(!0))) : "Enter" === e.key || " " === e.key ? (e.preventDefault(), k ? M >= 0 && O(M) : (F(), U(!0))) : "Escape" === e.key ? k && (e.preventDefault(), U(!1)) : "Tab" === e.key && U(!1)), x?.(e)
              },
              disabled: h,
              children: (0, l.jsx)("span", {
                className: (0, a.A)(u().value, !J && u().placeholder),
                children: X || n || "Select an option"
              })
            }), (0, l.jsxs)("span", {
              className: u().chevrons,
              children: [(0, l.jsx)("span", {
                children: "▲"
              }), (0, l.jsx)("span", {
                children: "▼"
              })]
            })]
          }), Z]
        })
      }
    },
    71537: e => {
      e.exports = {
        pagination: "GUNS__6a-82551f81-9c04c9f2-03cac168",
        pageButton: "GUNS__61-66336a70-45373836-34ed0e54",
        arrowButton: "GUNS__a6-f698710b-95be9b1b-a37b6b67",
        active: "GUNS__d0-676f0525-915ed755-33cde83a",
        ellipsis: "GUNS__9f-3a9a28c6-7f7161a3-b4d7b6d8"
      }
    }
  }
]);