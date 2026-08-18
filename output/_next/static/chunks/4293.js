"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4293], {
    5677: (e, t, n) => {
      let r;
      n.d(t, {
        _s: () => nN
      });
      var o, a, i, u, l, c, s, d, f = n(12115),
        p = n.t(f, 2),
        m = Object.defineProperty,
        v = (e, t) => m(e, "name", {
          value: t,
          configurable: !0
        }),
        h = !!("undefined" != typeof window && window.document && window.document.createElement);

      function g(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return v(function(r) {
          if (e?.(r), !1 === n || !r || !r.defaultPrevented) return t?.(r)
        }, "handleEvent")
      }

      function w(e) {
        if (!h) throw Error("Cannot access document outside of the DOM");
        return e?.ownerDocument ?? document
      }

      function y(e) {
        return "IFRAME" === e.tagName
      }
      v(g, "composeEventHandlers"), v(function(e) {
        if (!h) throw Error("Cannot access window outside of the DOM");
        return e?.ownerDocument?.defaultView ?? window
      }, "getOwnerWindow"), v(w, "getOwnerDocument"), v(function e(t, n = !1) {
        let {
          activeElement: r
        } = w(t);
        if (!r?.nodeName) return null;
        if (y(r) && r.contentDocument) return e(r.contentDocument.body, n);
        if (n) {
          let e = r.getAttribute("aria-activedescendant");
          if (e) {
            let t = w(r).getElementById(e);
            if (t) return t
          }
        }
        return r
      }, "getActiveElement"), v(y, "isFrame");
      var b = Object.defineProperty,
        E = (e, t) => b(e, "name", {
          value: t,
          configurable: !0
        });

      function C(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function R(...e) {
        return t => {
          let n = !1,
            r = e.map(e => {
              let r = C(e, t);
              return n || "function" != typeof r || (n = !0), r
            });
          if (n) return () => {
            for (let t = 0; t < r.length; t++) {
              let n = r[t];
              "function" == typeof n ? n() : C(e[t], null)
            }
          }
        }
      }

      function x(...e) {
        return f.useCallback(R(...e), e)
      }
      E(C, "setRef"), E(R, "composeRefs"), E(x, "useComposedRefs");
      var S = n(95155),
        P = Object.defineProperty,
        D = (e, t) => P(e, "name", {
          value: t,
          configurable: !0
        });

      function O(e, t = []) {
        let n = [];

        function r(t, r) {
          let o = f.createContext(r);
          o.displayName = t + "Context";
          let a = n.length;
          n = [...n, r];
          let i = D(t => {
            let {
              scope: n,
              children: r,
              ...i
            } = t, u = n?.[e]?.[a] || o, l = f.useMemo(() => i, Object.values(i));
            return (0, S.jsx)(u.Provider, {
              value: l,
              children: r
            })
          }, "Provider");

          function u(n, i, l = {}) {
            let {
              optional: c = !1
            } = l, s = i?.[e]?.[a] || o, d = f.useContext(s);
            if (d) return d;
            if (void 0 !== r) return r;
            if (!c) throw Error(`\`${n}\` must be used within \`${t}\``)
          }
          return i.displayName = t + "Provider", D(u, "useContext"), [i, u]
        }
        D(r, "createContext");
        let o = D(() => {
          let t = n.map(e => f.createContext(e));
          return D(function(n) {
            let r = n?.[e] || t;
            return f.useMemo(() => ({
              [`__scope${e}`]: {
                ...n,
                [e]: r
              }
            }), [n, r])
          }, "useScope")
        }, "createScope");
        return o.scopeName = e, [r, T(o, ...t)]
      }

      function T(...e) {
        let t = e[0];
        if (1 === e.length) return t;
        let n = D(() => {
          let n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return D(function(e) {
            let r = n.reduce((t, {
              useScope: n,
              scopeName: r
            }) => {
              let o = n(e)[`__scope${r}`];
              return {
                ...t,
                ...o
              }
            }, {});
            return f.useMemo(() => ({
              [`__scope${t.scopeName}`]: r
            }), [r])
          }, "useComposedScopes")
        }, "createScope");
        return n.scopeName = t.scopeName, n
      }
      D(function(e, t) {
        let n = f.createContext(t);
        n.displayName = e + "Context";
        let r = D(e => {
          let {
            children: t,
            ...r
          } = e, o = f.useMemo(() => r, Object.values(r));
          return (0, S.jsx)(n.Provider, {
            value: o,
            children: t
          })
        }, "Provider");

        function o(r, a = {}) {
          let {
            optional: i = !1
          } = a, u = f.useContext(n);
          if (u) return u;
          if (void 0 !== t) return t;
          if (!i) throw Error(`\`${r}\` must be used within \`${e}\``)
        }
        return r.displayName = e + "Provider", D(o, "useContext"), [r, o]
      }, "createContext"), D(O, "createContextScope"), D(T, "composeContextScopes");
      var M = globalThis?.document ? f.useLayoutEffect : () => {},
        N = Object.defineProperty,
        k = p[" useId ".trim().toString()] || (() => void 0),
        L = 0;

      function A(e) {
        let [t, n] = f.useState(k());
        return M(() => {
          e || n(e => e ?? String(L++))
        }, [e]), e || (t ? `radix-${t}` : "")
      }
      N(A, "name", {
        value: "useId",
        configurable: !0
      });
      var F = Object.defineProperty,
        j = p[" useEffectEvent ".trim().toString()],
        I = p[" useInsertionEffect ".trim().toString()];

      function $(e) {
        if ("function" == typeof j) return j(e);
        let t = f.useRef(() => {
          throw Error("Cannot call an event handler while rendering.")
        });
        return "function" == typeof I ? I(() => {
          t.current = e
        }) : M(() => {
          t.current = e
        }), f.useMemo(() => (...e) => t.current?.(...e), [])
      }
      F($, "name", {
        value: "useEffectEvent",
        configurable: !0
      });
      var W = Object.defineProperty,
        _ = (e, t) => W(e, "name", {
          value: t,
          configurable: !0
        }),
        B = p[" useInsertionEffect ".trim().toString()] || M;

      function H({
        prop: e,
        defaultProp: t,
        onChange: n = _(() => {}, "onChange"),
        caller: r
      }) {
        let [o, a, i] = z({
          defaultProp: t,
          onChange: n
        }), u = void 0 !== e, l = u ? e : o;
        return [l, f.useCallback(t => {
          if (u) {
            let n = U(t) ? t(e) : t;
            n !== e && i.current?.(n)
          } else a(t)
        }, [u, e, a, i])]
      }

      function z({
        defaultProp: e,
        onChange: t
      }) {
        let [n, r] = f.useState(e), o = f.useRef(n), a = f.useRef(t);
        return B(() => {
          a.current = t
        }, [t]), f.useEffect(() => {
          o.current !== n && (a.current?.(n), o.current = n)
        }, [n, o]), [n, r, a]
      }

      function U(e) {
        return "function" == typeof e
      }
      _(H, "useControllableState"), _(z, "useUncontrolledState"), _(U, "isFunction");
      var Y = Symbol("RADIX:SYNC_STATE");
      _(function(e, t, n, r) {
        let {
          prop: o,
          defaultProp: a,
          onChange: i,
          caller: u
        } = t, l = void 0 !== o, c = $(i), s = [{
          ...n,
          state: a
        }];
        r && s.push(r);
        let [d, p] = f.useReducer((t, n) => {
          if (n.type === Y) return {
            ...t,
            state: n.state
          };
          let r = e(t, n);
          return l && !Object.is(r.state, t.state) && c(r.state), r
        }, ...s), m = d.state, v = f.useRef(m);
        f.useEffect(() => {
          v.current !== m && (v.current = m, l || c(m))
        }, [m, v, l]);
        let h = f.useMemo(() => void 0 !== o ? {
          ...d,
          state: o
        } : d, [d, o]);
        return f.useEffect(() => {
          l && !Object.is(o, d.state) && p({
            type: Y,
            state: o
          })
        }, [o, d.state, l]), [h, p]
      }, "useControllableStateReducer");
      var V = n(47650),
        q = Object.defineProperty,
        X = (e, t) => q(e, "name", {
          value: t,
          configurable: !0
        });

      function K(e) {
        let t = f.forwardRef((t, n) => {
          let {
            children: r,
            ...o
          } = t, a = null, i = !1, u = [];
          en(r) && "function" == typeof ei && (r = ei(r._payload)), f.Children.forEach(r, e => {
            if (ee(e)) {
              i = !0;
              let t = "child" in e.props ? e.props.child : e.props.children;
              en(t) && "function" == typeof ei && (t = ei(t._payload)), a = G(e, t), u.push(a?.props?.children)
            } else u.push(e)
          }), a ? a = f.cloneElement(a, void 0, u) : !i && 1 === f.Children.count(r) && f.isValidElement(r) && (a = r);
          let l = a ? Q(a) : void 0,
            c = x(n, l);
          if (!a) {
            if (r || 0 === r) throw Error(i ? ea(e) : eo(e));
            return r
          }
          let s = J(o, a.props ?? {});
          return a.type !== f.Fragment && (s.ref = n ? c : l), f.cloneElement(a, s)
        });
        return t.displayName = `${e}.Slot`, t
      }
      X(K, "createSlot");
      var Z = Symbol.for("radix.slottable");
      X(function(e) {
        let t = X(e => "child" in e ? e.children(e.child) : e.children, "Slottable");
        return t.displayName = `${e}.Slottable`, t.__radixId = Z, t
      }, "createSlottable");
      var G = X((e, t) => {
        if ("child" in e.props) {
          let t = e.props.child;
          return f.isValidElement(t) ? f.cloneElement(t, void 0, e.props.children(t.props.children)) : null
        }
        return f.isValidElement(t) ? t : null
      }, "getSlottableElementFromSlottable");

      function J(e, t) {
        let n = {
          ...t
        };
        for (let r in t) {
          let o = e[r],
            a = t[r];
          /^on[A-Z]/.test(r) ? o && a ? n[r] = (...e) => {
            let t = a(...e);
            return o(...e), t
          } : o && (n[r] = o) : "style" === r ? n[r] = {
            ...o,
            ...a
          } : "className" === r && (n[r] = [o, a].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...n
        }
      }

      function Q(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
          n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (n = (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) && "isReactWarning" in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
      }

      function ee(e) {
        return f.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === Z
      }
      X(J, "mergeProps"), X(Q, "getElementRef"), X(ee, "isSlottable");
      var et = Symbol.for("react.lazy");

      function en(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === et && "_payload" in e && er(e._payload)
      }

      function er(e) {
        return "object" == typeof e && null !== e && "then" in e
      }
      X(en, "isLazyComponent"), X(er, "isPromiseLike");
      var eo = X(e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"),
        ea = X(e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"),
        ei = p[" use ".trim().toString()],
        eu = Object.defineProperty,
        el = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          let n = K(`Primitive.${t}`),
            r = f.forwardRef((e, r) => {
              let {
                asChild: o,
                ...a
              } = e;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, S.jsx)(o ? n : t, {
                ...a,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {});

      function ec(e, t) {
        e && V.flushSync(() => e.dispatchEvent(t))
      }

      function es(e) {
        let t = f.useRef(e);
        return f.useEffect(() => {
          t.current = e
        }), f.useMemo(() => (...e) => t.current?.(...e), [])
      }
      eu(ec, "name", {
        value: "dispatchDiscreteCustomEvent",
        configurable: !0
      }), (0, Object.defineProperty)(es, "name", {
        value: "useCallbackRef",
        configurable: !0
      });
      var ed = Object.defineProperty,
        ef = (e, t) => ed(e, "name", {
          value: t,
          configurable: !0
        }),
        ep = "dismissableLayer.update",
        em = f.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set,
          dismissableSurfaces: new Set
        }),
        ev = f.forwardRef(ef(function(e, t) {
          let {
            disableOutsidePointerEvents: n = !1,
            deferPointerDownOutside: r = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: a,
            onFocusOutside: i,
            onInteractOutside: u,
            onDismiss: l,
            ...c
          } = e, d = f.useContext(em), [p, m] = f.useState(null), v = p?.ownerDocument ?? globalThis?.document, [, h] = f.useState({}), w = x(t, m), y = Array.from(d.layers), [b] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), E = b ? y.indexOf(b) : -1, C = p ? y.indexOf(p) : -1, R = d.layersWithOutsidePointerEventsDisabled.size > 0, P = C >= E, D = f.useRef(!1), O = ew(e => {
            a?.(e), u?.(e), e.defaultPrevented || l?.()
          }, {
            ownerDocument: v,
            deferPointerDownOutside: r,
            isDeferredPointerDownOutsideRef: D,
            dismissableSurfaces: d.dismissableSurfaces,
            shouldHandlePointerDownOutside: f.useCallback(e => {
              if (!(e instanceof Node)) return !1;
              let t = [...d.branches].some(t => t.contains(e));
              return P && !t
            }, [d.branches, P])
          }), T = ey(e => {
            if (r && D.current) return;
            let t = e.target;
            ![...d.branches].some(e => e.contains(t)) && (i?.(e), u?.(e), e.defaultPrevented || l?.())
          }, v), M = !!p && C === y.length - 1, N = es(e => {
            "Escape" === e.key && (o?.(e), !e.defaultPrevented && l && (e.preventDefault(), l()))
          });
          return f.useEffect(() => {
            if (M) return v.addEventListener("keydown", N, {
              capture: !0
            }), () => v.removeEventListener("keydown", N, {
              capture: !0
            })
          }, [v, M, N]), f.useEffect(() => {
            if (p) return n && (0 === d.layersWithOutsidePointerEventsDisabled.size && (s = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(p)), d.layers.add(p), eb(), () => {
              n && (d.layersWithOutsidePointerEventsDisabled.delete(p), 0 === d.layersWithOutsidePointerEventsDisabled.size && (v.body.style.pointerEvents = s))
            }
          }, [p, v, n, d]), f.useEffect(() => () => {
            p && (d.layers.delete(p), d.layersWithOutsidePointerEventsDisabled.delete(p), eb())
          }, [p, d]), f.useEffect(() => {
            let e = ef(() => h({}), "handleUpdate");
            return document.addEventListener(ep, e), () => document.removeEventListener(ep, e)
          }, []), (0, S.jsx)(el.div, {
            ...c,
            ref: w,
            style: {
              pointerEvents: R ? P ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: g(e.onFocusCapture, T.onFocusCapture),
            onBlurCapture: g(e.onBlurCapture, T.onBlurCapture),
            onPointerDownCapture: g(e.onPointerDownCapture, O.onPointerDownCapture)
          })
        }, "DismissableLayer"));

      function eh() {
        let e = f.useContext(em),
          [t, n] = f.useState(null);
        return f.useEffect(() => {
          if (t) return e.dismissableSurfaces.add(t), () => {
            e.dismissableSurfaces.delete(t)
          }
        }, [t, e.dismissableSurfaces]), n
      }
      ef(eh, "useDismissableLayerSurface");
      var eg = ef(() => !0, "IS_TRUE");

      function ew(e, t) {
        let {
          ownerDocument: n = globalThis?.document,
          deferPointerDownOutside: r = !1,
          isDeferredPointerDownOutsideRef: o,
          dismissableSurfaces: a,
          shouldHandlePointerDownOutside: i = eg
        } = t, u = es(e), l = f.useRef(!1), c = f.useRef(!1), s = f.useRef(new Map), d = f.useRef(() => {});
        return f.useEffect(() => {
          function e() {
            c.current = !1, o.current = !1, s.current.clear()
          }

          function t() {
            return Array.from(s.current.values()).some(Boolean)
          }

          function f(e) {
            if (!c.current) return;
            let t = e.target;
            t instanceof Node && [...a].some(e => e.contains(t)) || s.current.set(e.type, !0), "click" === e.type && window.setTimeout(() => {
              c.current && d.current()
            }, 0)
          }

          function p(e) {
            c.current && s.current.set(e.type, !1)
          }
          ef(e, "resetOutsideInteraction"), ef(t, "isOutsideInteractionIntercepted"), ef(f, "handleInteractionCapture"), ef(p, "handleInteractionBubble");
          let m = ef(a => {
              if (a.target && !l.current) {
                let f = function() {
                  n.removeEventListener("click", d.current);
                  let r = t();
                  e(), r || eE("dismissableLayer.pointerDownOutside", u, p, {
                    discrete: !0
                  })
                };
                if (ef(f, "handleAndDispatchPointerDownOutsideEvent"), !i(a.target)) {
                  n.removeEventListener("click", d.current), e(), l.current = !1;
                  return
                }
                let p = {
                  originalEvent: a
                };
                c.current = !0, o.current = r && 0 === a.button, s.current.clear(), r && 0 === a.button ? (n.removeEventListener("click", d.current), d.current = f, n.addEventListener("click", d.current, {
                  once: !0
                })) : f()
              } else n.removeEventListener("click", d.current), e();
              l.current = !1
            }, "handlePointerDown"),
            v = ["pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"];
          for (let e of v) n.addEventListener(e, f, !0), n.addEventListener(e, p);
          let h = window.setTimeout(() => {
            n.addEventListener("pointerdown", m)
          }, 0);
          return () => {
            for (let e of (window.clearTimeout(h), n.removeEventListener("pointerdown", m), n.removeEventListener("click", d.current), v)) n.removeEventListener(e, f, !0), n.removeEventListener(e, p)
          }
        }, [n, u, r, o, a, i]), {
          onPointerDownCapture: ef(() => l.current = !0, "onPointerDownCapture")
        }
      }

      function ey(e, t = globalThis?.document) {
        let n = es(e),
          r = f.useRef(!1);
        return f.useEffect(() => {
          let e = ef(e => {
            e.target && !r.current && eE("dismissableLayer.focusOutside", n, {
              originalEvent: e
            }, {
              discrete: !1
            })
          }, "handleFocus");
          return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
        }, [t, n]), {
          onFocusCapture: ef(() => r.current = !0, "onFocusCapture"),
          onBlurCapture: ef(() => r.current = !1, "onBlurCapture")
        }
      }

      function eb() {
        let e = new CustomEvent(ep);
        document.dispatchEvent(e)
      }

      function eE(e, t, n, {
        discrete: r
      }) {
        let o = n.originalEvent.target,
          a = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), r ? ec(o, a) : o.dispatchEvent(a)
      }
      ef(ew, "usePointerDownOutside"), ef(ey, "useFocusOutside"), ef(eb, "dispatchUpdate"), ef(eE, "handleAndDispatchCustomEvent");
      var eC = Object.defineProperty,
        eR = (e, t) => eC(e, "name", {
          value: t,
          configurable: !0
        }),
        ex = "focusScope.autoFocusOnMount",
        eS = "focusScope.autoFocusOnUnmount",
        eP = {
          bubbles: !1,
          cancelable: !0
        },
        eD = f.forwardRef(eR(function(e, t) {
          let {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            ...i
          } = e, [u, l] = f.useState(null), c = es(o), s = es(a), d = f.useRef(null), p = x(t, l), m = f.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          f.useEffect(() => {
            if (r) {
              let e = function(e) {
                  if (m.paused || !u) return;
                  let t = e.target;
                  u.contains(t) ? d.current = t : eA(d.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (m.paused || !u) return;
                  let t = e.relatedTarget;
                  null !== t && (u.contains(t) || eA(d.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (let t of e) t.removedNodes.length > 0 && eA(u)
                };
              eR(e, "handleFocusIn"), eR(t, "handleFocusOut"), eR(n, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              let r = new MutationObserver(n);
              return u && r.observe(u, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
              }
            }
          }, [r, u, m.paused]), f.useEffect(() => {
            if (u) {
              eF.add(m);
              let e = document.activeElement;
              if (!u.contains(e)) {
                let t = new CustomEvent(ex, eP);
                u.addEventListener(ex, c), u.dispatchEvent(t), t.defaultPrevented || (eO(e$(eM(u)), {
                  select: !0
                }), document.activeElement === e && eA(u))
              }
              return () => {
                u.removeEventListener(ex, c), setTimeout(() => {
                  let t = new CustomEvent(eS, eP);
                  u.addEventListener(eS, s), u.dispatchEvent(t), t.defaultPrevented || eA(e ?? document.body, {
                    select: !0
                  }), u.removeEventListener(eS, s), eF.remove(m)
                }, 0)
              }
            }
          }, [u, c, s, m]);
          let v = f.useCallback(e => {
            if (!n && !r || m.paused) return;
            let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              let t = e.currentTarget,
                [r, a] = eT(t);
              r && a ? e.shiftKey || o !== a ? e.shiftKey && o === r && (e.preventDefault(), n && eA(a, {
                select: !0
              })) : (e.preventDefault(), n && eA(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [n, r, m.paused]);
          return (0, S.jsx)(el.div, {
            tabIndex: -1,
            ...i,
            ref: p,
            onKeyDown: v
          })
        }, "FocusScope"));

      function eO(e, {
        select: t = !1
      } = {}) {
        let n = document.activeElement;
        for (let r of e)
          if (eA(r, {
              select: t
            }), document.activeElement !== n) return
      }

      function eT(e) {
        let t = eM(e);
        return [eN(t, e), eN(t.reverse(), e)]
      }

      function eM(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: eR(e => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }, "acceptNode")
          });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
      }

      function eN(e, t) {
        let n = "function" == typeof t.checkVisibility && t.checkVisibility({
          checkVisibilityCSS: !0
        });
        for (let r of e)
          if (!(n ? !r.checkVisibility({
              checkVisibilityCSS: !0
            }) : ek(r, {
              upTo: t
            }))) return r
      }

      function ek(e, {
        upTo: t
      }) {
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        for (; e && (void 0 === t || e !== t);) {
          if ("none" === getComputedStyle(e).display) return !0;
          e = e.parentElement
        }
        return !1
      }

      function eL(e) {
        return e instanceof HTMLInputElement && "select" in e
      }

      function eA(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          let n = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== n && eL(e) && t && e.select()
        }
      }
      eR(eO, "focusFirst"), eR(eT, "getTabbableEdges"), eR(eM, "getTabbableCandidates"), eR(eN, "findVisible"), eR(ek, "isHidden"), eR(eL, "isSelectableInput"), eR(eA, "focus");
      var eF = ej();

      function ej() {
        let e = [];
        return {
          add(t) {
            let n = e[0];
            t !== n && n?.pause(), (e = eI(e, t)).unshift(t)
          },
          remove(t) {
            e = eI(e, t), e[0]?.resume()
          }
        }
      }

      function eI(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }

      function e$(e) {
        return e.filter(e => "A" !== e.tagName)
      }
      eR(ej, "createFocusScopesStack"), eR(eI, "arrayRemove"), eR(e$, "removeLinks");
      var eW = Object.defineProperty,
        e_ = f.forwardRef(eW(function(e, t) {
          let {
            container: n,
            ...r
          } = e, [o, a] = f.useState(!1);
          M(() => a(!0), []);
          let i = n || o && globalThis?.document?.body;
          return i ? V.createPortal((0, S.jsx)(el.div, {
            ...r,
            ref: t
          }), i) : null
        }, "name", {
          value: "Portal",
          configurable: !0
        })),
        eB = Object.defineProperty,
        eH = (e, t) => eB(e, "name", {
          value: t,
          configurable: !0
        });

      function ez(e, t) {
        return f.useReducer((e, n) => t[e][n] ?? e, e)
      }
      eH(ez, "useStateMachine");
      var eU = eH(e => {
        let {
          present: t,
          children: n
        } = e, r = eY(t), o = "function" == typeof n ? n({
          present: r.isPresent
        }) : f.Children.only(n), a = eq(r.ref, eK(o));
        return "function" == typeof n || r.isPresent ? f.cloneElement(o, {
          ref: a
        }) : null
      }, "Presence");

      function eY(e) {
        let [t, n] = f.useState(), r = f.useRef(null), o = f.useRef(e), a = f.useRef("none"), i = f.useRef(void 0), [u, l] = ez(e ? "mounted" : "unmounted", {
          mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
          },
          unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
          },
          unmounted: {
            MOUNT: "mounted"
          }
        });
        return f.useEffect(() => {
          "mounted" === u ? (a.current = i.current ?? eX(r.current), i.current = void 0) : a.current = "none"
        }, [u]), M(() => {
          let t = r.current,
            n = o.current;
          if (n !== e) {
            let r = a.current,
              u = eX(t);
            e ? (i.current = u, l("MOUNT")) : "none" === u || t?.display === "none" ? l("UNMOUNT") : n && r !== u ? l("ANIMATION_OUT") : l("UNMOUNT"), o.current = e
          }
        }, [e, l]), M(() => {
          if (t) {
            let e, n = t.ownerDocument.defaultView ?? window,
              i = eH(a => {
                let i = eX(r.current).includes(CSS.escape(a.animationName));
                if (a.target === t && i && (l("ANIMATION_END"), !o.current)) {
                  let r = t.style.animationFillMode;
                  t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
                    "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r)
                  })
                }
              }, "handleAnimationEnd"),
              u = eH(e => {
                e.target === t && (a.current = eX(r.current))
              }, "handleAnimationStart");
            return t.addEventListener("animationstart", u), t.addEventListener("animationcancel", i), t.addEventListener("animationend", i), () => {
              n.clearTimeout(e), t.removeEventListener("animationstart", u), t.removeEventListener("animationcancel", i), t.removeEventListener("animationend", i)
            }
          }
          l("ANIMATION_END")
        }, [t, l]), {
          isPresent: ["mounted", "unmountSuspended"].includes(u),
          ref: f.useCallback(e => {
            if (e) {
              let t = getComputedStyle(e);
              r.current = t, i.current = eX(t)
            } else r.current = null;
            n(e)
          }, [])
        }
      }

      function eV(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function eq(...e) {
        let t = f.useRef(e);
        return t.current = e, f.useCallback(e => {
          let n = t.current,
            r = !1,
            o = n.map(t => {
              let n = eV(t, e);
              return r || "function" != typeof n || (r = !0), n
            });
          if (r) return () => {
            for (let e = 0; e < o.length; e++) {
              let t = o[e];
              "function" == typeof t ? t() : eV(n[e], null)
            }
          }
        }, [])
      }

      function eX(e) {
        return e?.animationName || "none"
      }

      function eK(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
          n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (n = (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) && "isReactWarning" in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
      }
      eH(eY, "usePresence"), eH(eV, "setRef"), eH(eq, "useStableComposedRefs"), eH(eX, "getAnimationName"), eH(eK, "getElementRef");
      var eZ = Object.defineProperty,
        eG = (e, t) => eZ(e, "name", {
          value: t,
          configurable: !0
        }),
        eJ = 0,
        eQ = null;

      function e0() {
        f.useEffect(() => {
          eQ || (eQ = {
            start: e1(),
            end: e1()
          });
          let {
            start: e,
            end: t
          } = eQ;
          return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), eJ++, () => {
            1 === eJ && (eQ?.start.remove(), eQ?.end.remove(), eQ = null), eJ = Math.max(0, eJ - 1)
          }
        }, [])
      }

      function e1() {
        let e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      eG(function(e) {
        return e0(), e.children
      }, "FocusGuards"), eG(e0, "useFocusGuards"), eG(e1, "createFocusGuard");
      var e3 = function() {
        return (e3 = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }).apply(this, arguments)
      };

      function e2(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) 0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
        return n
      }
      var e5 = ("function" == typeof SuppressedError && SuppressedError, "right-scroll-bar-position"),
        e4 = "width-before-scroll-bar";

      function e6(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e
      }
      var e7 = "undefined" != typeof window ? f.useLayoutEffect : f.useEffect,
        e8 = new WeakMap,
        e9 = (void 0 === o && (o = {}), (void 0 === a && (a = function(e) {
          return e
        }), i = [], u = !1, l = {
          read: function() {
            if (u) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return i.length ? i[i.length - 1] : null
          },
          useMedium: function(e) {
            var t = a(e, u);
            return i.push(t),
              function() {
                i = i.filter(function(e) {
                  return e !== t
                })
              }
          },
          assignSyncMedium: function(e) {
            for (u = !0; i.length;) {
              var t = i;
              i = [], t.forEach(e)
            }
            i = {
              push: function(t) {
                return e(t)
              },
              filter: function() {
                return i
              }
            }
          },
          assignMedium: function(e) {
            u = !0;
            var t = [];
            if (i.length) {
              var n = i;
              i = [], n.forEach(e), t = i
            }
            var r = function() {
                var n = t;
                t = [], n.forEach(e)
              },
              o = function() {
                return Promise.resolve().then(r)
              };
            o(), i = {
              push: function(e) {
                t.push(e), o()
              },
              filter: function(e) {
                return t = t.filter(e), i
              }
            }
          }
        }).options = e3({
          async: !0,
          ssr: !1
        }, o), l),
        te = function() {},
        tt = f.forwardRef(function(e, t) {
          var n, r, o, a, i = f.useRef(null),
            u = f.useState({
              onScrollCapture: te,
              onWheelCapture: te,
              onTouchMoveCapture: te
            }),
            l = u[0],
            c = u[1],
            s = e.forwardProps,
            d = e.children,
            p = e.className,
            m = e.removeScrollBar,
            v = e.enabled,
            h = e.shards,
            g = e.sideCar,
            w = e.noRelative,
            y = e.noIsolation,
            b = e.inert,
            E = e.allowPinchZoom,
            C = e.as,
            R = e.gapMode,
            x = e2(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            S = (n = [i, t], r = function(e) {
              return n.forEach(function(t) {
                return e6(t, e)
              })
            }, (o = (0, f.useState)(function() {
              return {
                value: null,
                callback: r,
                facade: {
                  get current() {
                    return o.value
                  },
                  set current(value) {
                    var e = o.value;
                    e !== value && (o.value = value, o.callback(value, e))
                  }
                }
              }
            })[0]).callback = r, a = o.facade, e7(function() {
              var e = e8.get(a);
              if (e) {
                var t = new Set(e),
                  r = new Set(n),
                  o = a.current;
                t.forEach(function(e) {
                  r.has(e) || e6(e, null)
                }), r.forEach(function(e) {
                  t.has(e) || e6(e, o)
                })
              }
              e8.set(a, n)
            }, [n]), a),
            P = e3(e3({}, x), l);
          return f.createElement(f.Fragment, null, v && f.createElement(g, {
            sideCar: e9,
            removeScrollBar: m,
            shards: h,
            noRelative: w,
            noIsolation: y,
            inert: b,
            setCallbacks: c,
            allowPinchZoom: !!E,
            lockRef: i,
            gapMode: R
          }), s ? f.cloneElement(f.Children.only(d), e3(e3({}, P), {
            ref: S
          })) : f.createElement(void 0 === C ? "div" : C, e3({}, P, {
            className: p,
            ref: S
          }), d))
        });
      tt.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, tt.classNames = {
        fullWidth: e4,
        zeroRight: e5
      };
      var tn = function(e) {
        var t = e.sideCar,
          n = e2(e, ["sideCar"]);
        if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return f.createElement(r, e3({}, n))
      };
      tn.isSideCarExport = !0;
      var tr = function() {
          var e = 0,
            t = null;
          return {
            add: function(r) {
              if (0 == e && (t = function() {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = d || n.nc;
                  return t && e.setAttribute("nonce", t), e
                }())) {
                var o, a;
                (o = t).styleSheet ? o.styleSheet.cssText = r : o.appendChild(document.createTextNode(r)), a = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(a)
              }
              e++
            },
            remove: function() {
              --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
          }
        },
        to = function() {
          var e = tr();
          return function(t, n) {
            f.useEffect(function() {
              return e.add(t),
                function() {
                  e.remove()
                }
            }, [t && n])
          }
        },
        ta = function() {
          var e = to();
          return function(t) {
            return e(t.styles, t.dynamic), null
          }
        },
        ti = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        tu = function(e) {
          return parseInt(e || "", 10) || 0
        },
        tl = function(e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [tu(n), tu(r), tu(o)]
        },
        tc = function(e) {
          if (void 0 === e && (e = "margin"), "undefined" == typeof window) return ti;
          var t = tl(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0])
          }
        },
        ts = ta(),
        td = "data-scroll-locked",
        tf = function(e, t, n, r) {
          var o = e.left,
            a = e.top,
            i = e.right,
            u = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(u, "px ").concat(r, ";\n  }\n  body[").concat(td, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(a, "px;\n    padding-right: ").concat(i, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(u, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(e5, " {\n    right: ").concat(u, "px ").concat(r, ";\n  }\n  \n  .").concat(e4, " {\n    margin-right: ").concat(u, "px ").concat(r, ";\n  }\n  \n  .").concat(e5, " .").concat(e5, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(e4, " .").concat(e4, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(td, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(u, "px;\n  }\n")
        },
        tp = function() {
          var e = parseInt(document.body.getAttribute(td) || "0", 10);
          return isFinite(e) ? e : 0
        },
        tm = function() {
          f.useEffect(function() {
            return document.body.setAttribute(td, (tp() + 1).toString()),
              function() {
                var e = tp() - 1;
                e <= 0 ? document.body.removeAttribute(td) : document.body.setAttribute(td, e.toString())
              }
          }, [])
        },
        tv = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          tm();
          var a = f.useMemo(function() {
            return tc(o)
          }, [o]);
          return f.createElement(ts, {
            styles: tf(a, !t, o, n ? "" : "!important")
          })
        },
        th = !1;
      if ("undefined" != typeof window) try {
        var tg = Object.defineProperty({}, "passive", {
          get: function() {
            return th = !0, !0
          }
        });
        window.addEventListener("test", tg, tg), window.removeEventListener("test", tg, tg)
      } catch (e) {
        th = !1
      }
      var tw = !!th && {
          passive: !1
        },
        ty = function(e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return "hidden" !== n[t] && (n.overflowY !== n.overflowX || "TEXTAREA" === e.tagName || "visible" !== n[t])
        },
        tb = function(e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), tE(e, r)) {
              var o = tC(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body);
          return !1
        },
        tE = function(e, t) {
          return "v" === e ? ty(t, "overflowY") : ty(t, "overflowX")
        },
        tC = function(e, t) {
          return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
        },
        tR = function(e, t, n, r, o) {
          var a, i = (a = window.getComputedStyle(t).direction, "h" === e && "rtl" === a ? -1 : 1),
            u = i * r,
            l = n.target,
            c = t.contains(l),
            s = !1,
            d = u > 0,
            f = 0,
            p = 0;
          do {
            if (!l) break;
            var m = tC(e, l),
              v = m[0],
              h = m[1] - m[2] - i * v;
            (v || h) && tE(e, l) && (f += h, p += v);
            var g = l.parentNode;
            l = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g
          } while (!c && l !== document.body || c && (t.contains(l) || t === l));
          return d && (o && 1 > Math.abs(f) || !o && u > f) ? s = !0 : !d && (o && 1 > Math.abs(p) || !o && -u > p) && (s = !0), s
        },
        tx = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        tS = function(e) {
          return [e.deltaX, e.deltaY]
        },
        tP = function(e) {
          return e && "current" in e ? e.current : e
        },
        tD = 0,
        tO = [];
      let tT = (c = function(e) {
        var t = f.useRef([]),
          n = f.useRef([0, 0]),
          r = f.useRef(),
          o = f.useState(tD++)[0],
          a = f.useState(ta)[0],
          i = f.useRef(e);
        f.useEffect(function() {
          i.current = e
        }, [e]), f.useEffect(function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var t = (function(e, t, n) {
              if (n || 2 == arguments.length)
                for (var r, o = 0, a = t.length; o < a; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
              return e.concat(r || Array.prototype.slice.call(t))
            })([e.lockRef.current], (e.shards || []).map(tP), !0).filter(Boolean);
            return t.forEach(function(e) {
                return e.classList.add("allow-interactivity-".concat(o))
              }),
              function() {
                document.body.classList.remove("block-interactivity-".concat(o)), t.forEach(function(e) {
                  return e.classList.remove("allow-interactivity-".concat(o))
                })
              }
          }
        }, [e.inert, e.lockRef.current, e.shards]);
        var u = f.useCallback(function(e, t) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !i.current.allowPinchZoom;
            var o, a = tx(e),
              u = n.current,
              l = "deltaX" in e ? e.deltaX : u[0] - a[0],
              c = "deltaY" in e ? e.deltaY : u[1] - a[1],
              s = e.target,
              d = Math.abs(l) > Math.abs(c) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === s.type) return !1;
            var f = window.getSelection(),
              p = f && f.anchorNode;
            if (p && (p === s || p.contains(s))) return !1;
            var m = tb(d, s);
            if (!m) return !0;
            if (m ? o = d : (o = "v" === d ? "h" : "v", m = tb(d, s)), !m) return !1;
            if (!r.current && "changedTouches" in e && (l || c) && (r.current = o), !o) return !0;
            var v = r.current || o;
            return tR(v, t, e, "h" === v ? l : c, !0)
          }, []),
          l = f.useCallback(function(e) {
            if (tO.length && tO[tO.length - 1] === a) {
              var n = "deltaY" in e ? tS(e) : tx(e),
                r = t.current.filter(function(t) {
                  var r;
                  return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (r = t.delta, r[0] === n[0] && r[1] === n[1])
                })[0];
              if (r && r.should) {
                e.cancelable && e.preventDefault();
                return
              }
              if (!r) {
                var o = (i.current.shards || []).map(tP).filter(Boolean).filter(function(t) {
                  return t.contains(e.target)
                });
                (o.length > 0 ? u(e, o[0]) : !i.current.noIsolation) && e.cancelable && e.preventDefault()
              }
            }
          }, []),
          c = f.useCallback(function(e, n, r, o) {
            var a = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: function(e) {
                for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
                return t
              }(r)
            };
            t.current.push(a), setTimeout(function() {
              t.current = t.current.filter(function(e) {
                return e !== a
              })
            }, 1)
          }, []),
          s = f.useCallback(function(e) {
            n.current = tx(e), r.current = void 0
          }, []),
          d = f.useCallback(function(t) {
            c(t.type, tS(t), t.target, u(t, e.lockRef.current))
          }, []),
          p = f.useCallback(function(t) {
            c(t.type, tx(t), t.target, u(t, e.lockRef.current))
          }, []);
        f.useEffect(function() {
          return tO.push(a), e.setCallbacks({
              onScrollCapture: d,
              onWheelCapture: d,
              onTouchMoveCapture: p
            }), document.addEventListener("wheel", l, tw), document.addEventListener("touchmove", l, tw), document.addEventListener("touchstart", s, tw),
            function() {
              tO = tO.filter(function(e) {
                return e !== a
              }), document.removeEventListener("wheel", l, tw), document.removeEventListener("touchmove", l, tw), document.removeEventListener("touchstart", s, tw)
            }
        }, []);
        var m = e.removeScrollBar,
          v = e.inert;
        return f.createElement(f.Fragment, null, v ? f.createElement(a, {
          styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
        }) : null, m ? f.createElement(tv, {
          noRelative: e.noRelative,
          gapMode: e.gapMode
        }) : null)
      }, e9.useMedium(c), tn);
      var tM = f.forwardRef(function(e, t) {
        return f.createElement(tt, e3({}, e, {
          ref: t,
          sideCar: tT
        }))
      });
      tM.classNames = tt.classNames;
      var tN = new WeakMap,
        tk = new WeakMap,
        tL = {},
        tA = 0,
        tF = function(e) {
          return e && (e.host || tF(e.parentNode))
        },
        tj = function(e, t, n, r) {
          var o = (Array.isArray(e) ? e : [e]).map(function(e) {
            if (t.contains(e)) return e;
            var n = tF(e);
            return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
          }).filter(function(e) {
            return !!e
          });
          tL[n] || (tL[n] = new WeakMap);
          var a = tL[n],
            i = [],
            u = new Set,
            l = new Set(o),
            c = function(e) {
              !e || u.has(e) || (u.add(e), c(e.parentNode))
            };
          o.forEach(c);
          var s = function(e) {
            !e || l.has(e) || Array.prototype.forEach.call(e.children, function(e) {
              if (u.has(e)) s(e);
              else try {
                var t = e.getAttribute(r),
                  o = null !== t && "false" !== t,
                  l = (tN.get(e) || 0) + 1,
                  c = (a.get(e) || 0) + 1;
                tN.set(e, l), a.set(e, c), i.push(e), 1 === l && o && tk.set(e, !0), 1 === c && e.setAttribute(n, "true"), o || e.setAttribute(r, "true")
              } catch (t) {
                console.error("aria-hidden: cannot operate on ", e, t)
              }
            })
          };
          return s(t), u.clear(), tA++,
            function() {
              i.forEach(function(e) {
                var t = tN.get(e) - 1,
                  o = a.get(e) - 1;
                tN.set(e, t), a.set(e, o), t || (tk.has(e) || e.removeAttribute(r), tk.delete(e)), o || e.removeAttribute(n)
              }), --tA || (tN = new WeakMap, tN = new WeakMap, tk = new WeakMap, tL = {})
            }
        },
        tI = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), tj(r, o, n, "aria-hidden")) : function() {
            return null
          }
        },
        t$ = Object.defineProperty,
        tW = (e, t) => t$(e, "name", {
          value: t,
          configurable: !0
        }),
        t_ = "Dialog",
        [tB, tH] = O(t_),
        [tz, tU] = tB(t_),
        tY = tW(e => {
          let {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: a,
            modal: i = !0
          } = e, u = f.useRef(null), l = f.useRef(null), [c, s] = H({
            prop: r,
            defaultProp: o ?? !1,
            onChange: a,
            caller: t_
          }), [d, p] = f.useState(0), [m, v] = f.useState(0);
          return (0, S.jsx)(tz, {
            scope: t,
            triggerRef: u,
            contentRef: l,
            contentId: A(),
            titleId: A(),
            descriptionId: A(),
            titlePresent: d > 0,
            descriptionPresent: m > 0,
            setTitleCount: p,
            setDescriptionCount: v,
            open: c,
            onOpenChange: s,
            onOpenToggle: f.useCallback(() => s(e => !e), [s]),
            modal: i,
            children: n
          })
        }, "Dialog"),
        tV = f.forwardRef(tW(function(e, t) {
          let {
            __scopeDialog: n,
            ...r
          } = e, o = tU("DialogTrigger", n), a = x(t, o.triggerRef);
          return (0, S.jsx)(el.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.open ? o.contentId : void 0,
            "data-state": t9(o.open),
            ...r,
            ref: a,
            onClick: g(e.onClick, o.onOpenToggle)
          })
        }, "DialogTrigger")),
        tq = "DialogPortal",
        [tX, tK] = tB(tq, {
          forceMount: void 0
        }),
        tZ = tW(e => {
          let {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: o
          } = e, a = tU(tq, t);
          return (0, S.jsx)(tX, {
            scope: t,
            forceMount: n,
            children: f.Children.map(r, e => (0, S.jsx)(eU, {
              present: n || a.open,
              children: (0, S.jsx)(e_, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        }, "DialogPortal"),
        tG = "DialogOverlay",
        tJ = f.forwardRef(tW(function(e, t) {
          let n = tK(tG, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            a = tU(tG, e.__scopeDialog);
          return a.modal ? (0, S.jsx)(eU, {
            present: r || a.open,
            children: (0, S.jsx)(t0, {
              ...o,
              ref: t
            })
          }) : null
        }, "DialogOverlay")),
        tQ = K("DialogOverlay.RemoveScroll"),
        t0 = f.forwardRef(tW(function(e, t) {
          let {
            __scopeDialog: n,
            ...r
          } = e, o = tU(tG, n), a = x(t, eh());
          return (0, S.jsx)(tM, {
            as: tQ,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, S.jsx)(el.div, {
              "data-state": t9(o.open),
              ...r,
              ref: a,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        }, "DialogOverlayImpl")),
        t1 = "DialogContent",
        t3 = f.forwardRef(tW(function(e, t) {
          let n = tK(t1, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            a = tU(t1, e.__scopeDialog);
          return (0, S.jsx)(eU, {
            present: r || a.open,
            children: a.modal ? (0, S.jsx)(t2, {
              ...o,
              ref: t
            }) : (0, S.jsx)(t5, {
              ...o,
              ref: t
            })
          })
        }, "DialogContent")),
        t2 = f.forwardRef(tW(function(e, t) {
          let n = tU(t1, e.__scopeDialog),
            r = f.useRef(null),
            o = x(t, n.contentRef, r);
          return f.useEffect(() => {
            let e = r.current;
            if (e) return tI(e)
          }, []), (0, S.jsx)(t4, {
            ...e,
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: n.open,
            onCloseAutoFocus: g(e.onCloseAutoFocus, e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            }),
            onPointerDownOutside: g(e.onPointerDownOutside, e => {
              let t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            }),
            onFocusOutside: g(e.onFocusOutside, e => e.preventDefault())
          })
        }, "DialogContentModal")),
        t5 = f.forwardRef(tW(function(e, t) {
          let n = tU(t1, e.__scopeDialog),
            r = f.useRef(!1),
            o = f.useRef(!1);
          return (0, S.jsx)(t4, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, o.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
              let a = t.target;
              n.triggerRef.current?.contains(a) && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
          })
        }, "DialogContentNonModal")),
        t4 = f.forwardRef(tW(function(e, t) {
          let {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: a,
            ...i
          } = e, u = tU(t1, n);
          return e0(), (0, S.jsx)(S.Fragment, {
            children: (0, S.jsx)(eD, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: o,
              onUnmountAutoFocus: a,
              children: (0, S.jsx)(ev, {
                role: "dialog",
                id: u.contentId,
                "aria-describedby": u.descriptionPresent ? u.descriptionId : void 0,
                "aria-labelledby": u.titlePresent ? u.titleId : void 0,
                "data-state": t9(u.open),
                ...i,
                ref: t,
                deferPointerDownOutside: !0,
                onDismiss: () => u.onOpenChange(!1)
              })
            })
          })
        }, "DialogContentImpl")),
        t6 = f.forwardRef(tW(function(e, t) {
          let {
            __scopeDialog: n,
            ...r
          } = e, o = tU("DialogTitle", n), {
            setTitleCount: a
          } = o;
          return M(() => (a(e => e + 1), () => a(e => e - 1)), [a]), (0, S.jsx)(el.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        }, "DialogTitle")),
        t7 = f.forwardRef(tW(function(e, t) {
          let {
            __scopeDialog: n,
            ...r
          } = e, o = tU("DialogDescription", n), {
            setDescriptionCount: a
          } = o;
          return M(() => (a(e => e + 1), () => a(e => e - 1)), [a]), (0, S.jsx)(el.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        }, "DialogDescription")),
        t8 = f.forwardRef(tW(function(e, t) {
          let {
            __scopeDialog: n,
            ...r
          } = e, o = tU("DialogClose", n);
          return (0, S.jsx)(el.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: g(e.onClick, () => o.onOpenChange(!1))
          })
        }, "DialogClose"));

      function t9(e) {
        return e ? "open" : "closed"
      }
      tW(t9, "getState");
      let ne = f.createContext({
          drawerRef: {
            current: null
          },
          overlayRef: {
            current: null
          },
          onPress: () => {},
          onRelease: () => {},
          onDrag: () => {},
          onNestedDrag: () => {},
          onNestedOpenChange: () => {},
          onNestedRelease: () => {},
          openProp: void 0,
          dismissible: !1,
          isOpen: !1,
          isDragging: !1,
          keyboardIsOpen: {
            current: !1
          },
          snapPointsOffset: null,
          snapPoints: null,
          handleOnly: !1,
          modal: !1,
          shouldFade: !1,
          activeSnapPoint: null,
          onOpenChange: () => {},
          setActiveSnapPoint: () => {},
          closeDrawer: () => {},
          direction: "bottom",
          shouldAnimate: {
            current: !0
          },
          shouldScaleBackground: !1,
          setBackgroundColorOnScale: !0,
          noBodyStyles: !1,
          container: null,
          autoFocus: !1
        }),
        nt = () => {
          let e = f.useContext(ne);
          if (!e) throw Error("useDrawerContext must be used within a Drawer.Root");
          return e
        };

      function nn() {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }

      function nr() {
        return no(/^iPhone/) || no(/^iPad/) || no(/^Mac/) && navigator.maxTouchPoints > 1
      }

      function no(e) {
        return "undefined" != typeof window && null != window.navigator ? e.test(window.navigator.platform) : void 0
      }! function(e) {
        if (!e || "undefined" == typeof document) return;
        let t = document.head || document.getElementsByTagName("head")[0],
          n = document.createElement("style");
        n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e))
      }("[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(\n[data-state=closed]\n){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}");
      let na = "undefined" != typeof window ? f.useLayoutEffect : f.useEffect;

      function ni(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      let nu = "undefined" != typeof document && window.visualViewport;

      function nl(e) {
        let t = window.getComputedStyle(e);
        return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY)
      }

      function nc(e) {
        for (nl(e) && (e = e.parentElement); e && !nl(e);) e = e.parentElement;
        return e || document.scrollingElement || document.documentElement
      }
      let ns = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]),
        nd = 0;

      function nf(e, t, n, r) {
        return e.addEventListener(t, n, r), () => {
          e.removeEventListener(t, n, r)
        }
      }

      function np(e) {
        let t = document.scrollingElement || document.documentElement;
        for (; e && e !== t;) {
          let t = nc(e);
          if (t !== document.documentElement && t !== document.body && t !== e) {
            let n = t.getBoundingClientRect().top,
              r = e.getBoundingClientRect().top;
            e.getBoundingClientRect().bottom > t.getBoundingClientRect().bottom + 24 && (t.scrollTop += r - n)
          }
          e = t.parentElement
        }
      }

      function nm(e) {
        return e instanceof HTMLInputElement && !ns.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable
      }

      function nv(...e) {
        return f.useCallback(function(...e) {
          return t => e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }(...e), e)
      }
      let nh = new WeakMap;

      function ng(e, t, n = !1) {
        if (!e || !(e instanceof HTMLElement)) return;
        let r = {};
        Object.entries(t).forEach(([t, n]) => {
          t.startsWith("--") ? e.style.setProperty(t, n) : (r[t] = e.style[t], e.style[t] = n)
        }), n || nh.set(e, r)
      }
      let nw = e => {
        switch (e) {
          case "top":
          case "bottom":
            return !0;
          case "left":
          case "right":
            return !1;
          default:
            return e
        }
      };

      function ny(e, t) {
        if (!e) return null;
        let n = window.getComputedStyle(e),
          r = n.transform || n.webkitTransform || n.mozTransform,
          o = r.match(/^matrix3d\((.+)\)$/);
        return o ? parseFloat(o[1].split(", ")[nw(t) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/)) ? parseFloat(o[1].split(", ")[nw(t) ? 5 : 4]) : null
      }

      function nb(e, t) {
        if (!e) return () => {};
        let n = e.style.cssText;
        return Object.assign(e.style, t), () => {
          e.style.cssText = n
        }
      }
      let nE = [.32, .72, 0, 1],
        nC = "vaul-dragging";

      function nR(e) {
        let t = f.useRef(e);
        return f.useEffect(() => {
          t.current = e
        }), f.useMemo(() => (...e) => null == t.current ? void 0 : t.current.call(t, ...e), [])
      }

      function nx({
        prop: e,
        defaultProp: t,
        onChange: n = () => {}
      }) {
        let [r, o] = function({
          defaultProp: e,
          onChange: t
        }) {
          let n = f.useState(e),
            [r] = n,
            o = f.useRef(r),
            a = nR(t);
          return f.useEffect(() => {
            o.current !== r && (a(r), o.current = r)
          }, [r, o, a]), n
        }({
          defaultProp: t,
          onChange: n
        }), a = void 0 !== e, i = a ? e : r, u = nR(n);
        return [i, f.useCallback(t => {
          if (a) {
            let n = "function" == typeof t ? t(e) : t;
            n !== e && u(n)
          } else o(t)
        }, [a, e, o, u])]
      }
      let nS = () => () => {},
        nP = null;

      function nD({
        open: e,
        onOpenChange: t,
        children: n,
        onDrag: o,
        onRelease: a,
        snapPoints: i,
        shouldScaleBackground: u = !1,
        setBackgroundColorOnScale: l = !0,
        closeThreshold: c = .25,
        scrollLockTimeout: s = 100,
        dismissible: d = !0,
        handleOnly: p = !1,
        fadeFromIndex: m = i && i.length - 1,
        activeSnapPoint: v,
        setActiveSnapPoint: h,
        fixed: g,
        modal: w = !0,
        onClose: y,
        nested: b,
        noBodyStyles: E = !1,
        direction: C = "bottom",
        defaultOpen: R = !1,
        disablePreventScroll: x = !0,
        snapToSequentialPoint: S = !1,
        preventScrollRestoration: P = !1,
        repositionInputs: D = !0,
        onAnimationEnd: O,
        container: T,
        autoFocus: M = !1
      }) {
        var N, k;
        let [L = !1, A] = nx({
          defaultProp: R,
          prop: e,
          onChange: e => {
            null == t || t(e), e || b || ed(), setTimeout(() => {
              null == O || O(e)
            }, 500), e && !w && "undefined" != typeof window && window.requestAnimationFrame(() => {
              document.body.style.pointerEvents = "auto"
            }), e || (document.body.style.pointerEvents = "auto")
          }
        }), [F, j] = f.useState(!1), [I, $] = f.useState(!1), [W, _] = f.useState(!1), B = f.useRef(null), H = f.useRef(null), z = f.useRef(null), U = f.useRef(null), Y = f.useRef(null), V = f.useRef(!1), q = f.useRef(null), X = f.useRef(0), K = f.useRef(!1), Z = f.useRef(!R), G = f.useRef(0), J = f.useRef(null), Q = f.useRef((null == (N = J.current) ? void 0 : N.getBoundingClientRect().height) || 0), ee = f.useRef((null == (k = J.current) ? void 0 : k.getBoundingClientRect().width) || 0), et = f.useRef(0), en = f.useCallback(e => {
          i && e === eu.length - 1 && (H.current = new Date)
        }, []), {
          activeSnapPoint: er,
          activeSnapPointIndex: eo,
          setActiveSnapPoint: ea,
          onRelease: ei,
          snapPointsOffset: eu,
          onDrag: el,
          shouldFade: ec,
          getPercentageDragged: es
        } = function({
          activeSnapPointProp: e,
          setActiveSnapPointProp: t,
          snapPoints: n,
          drawerRef: r,
          overlayRef: o,
          fadeFromIndex: a,
          onSnapPointChange: i,
          direction: u = "bottom",
          container: l,
          snapToSequentialPoint: c
        }) {
          let [s, d] = nx({
            prop: e,
            defaultProp: null == n ? void 0 : n[0],
            onChange: t
          }), [p, m] = f.useState("undefined" != typeof window ? {
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight
          } : void 0);
          f.useEffect(() => {
            function e() {
              m({
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
              })
            }
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }, []);
          let v = f.useMemo(() => s === (null == n ? void 0 : n[n.length - 1]) || null, [n, s]),
            h = f.useMemo(() => {
              var e;
              return null != (e = null == n ? void 0 : n.findIndex(e => e === s)) ? e : null
            }, [n, s]),
            g = n && n.length > 0 && (a || 0 === a) && !Number.isNaN(a) && n[a] === s || !n,
            w = f.useMemo(() => {
              var e;
              let t = l ? {
                width: l.getBoundingClientRect().width,
                height: l.getBoundingClientRect().height
              } : "undefined" != typeof window ? {
                width: window.innerWidth,
                height: window.innerHeight
              } : {
                width: 0,
                height: 0
              };
              return null != (e = null == n ? void 0 : n.map(e => {
                let n = "string" == typeof e,
                  r = 0;
                if (n && (r = parseInt(e, 10)), nw(u)) {
                  let o = n ? r : p ? e * t.height : 0;
                  return p ? "bottom" === u ? t.height - o : -t.height + o : o
                }
                let o = n ? r : p ? e * t.width : 0;
                return p ? "right" === u ? t.width - o : -t.width + o : o
              })) ? e : []
            }, [n, p, l]),
            y = f.useMemo(() => null !== h ? null == w ? void 0 : w[h] : null, [w, h]),
            b = f.useCallback(e => {
              var t;
              let l = null != (t = null == w ? void 0 : w.findIndex(t => t === e)) ? t : null;
              i(l), ng(r.current, {
                transition: `transform 0.5s cubic-bezier(${nE.join(",")})`,
                transform: nw(u) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)`
              }), w && l !== w.length - 1 && void 0 !== a && l !== a && l < a ? ng(o.current, {
                transition: `opacity 0.5s cubic-bezier(${nE.join(",")})`,
                opacity: "0"
              }) : ng(o.current, {
                transition: `opacity 0.5s cubic-bezier(${nE.join(",")})`,
                opacity: "1"
              }), d(null == n ? void 0 : n[Math.max(l, 0)])
            }, [r.current, n, w, a, o, d]);
          return f.useEffect(() => {
            if (s || e) {
              var t;
              let r = null != (t = null == n ? void 0 : n.findIndex(t => t === e || t === s)) ? t : -1;
              w && -1 !== r && "number" == typeof w[r] && b(w[r])
            }
          }, [s, e, n, w, b]), {
            isLastSnapPoint: v,
            activeSnapPoint: s,
            shouldFade: g,
            getPercentageDragged: function(e, t) {
              if (!n || "number" != typeof h || !w || void 0 === a) return null;
              let r = h === a - 1;
              if (h >= a && t) return 0;
              if (r && !t) return 1;
              if (!g && !r) return null;
              let o = r ? h + 1 : h - 1,
                i = e / Math.abs(r ? w[o] - w[o - 1] : w[o + 1] - w[o]);
              return r ? 1 - i : i
            },
            setActiveSnapPoint: d,
            activeSnapPointIndex: h,
            onRelease: function({
              draggedDistance: e,
              closeDrawer: t,
              velocity: r,
              dismissible: i
            }) {
              if (void 0 === a) return;
              let l = "bottom" === u || "right" === u ? (null != y ? y : 0) - e : (null != y ? y : 0) + e,
                s = h === a - 1,
                d = 0 === h,
                f = e > 0;
              if (s && ng(o.current, {
                  transition: `opacity 0.5s cubic-bezier(${nE.join(",")})`
                }), !c && r > 2 && !f) return void(i ? t() : b(w[0]));
              if (!c && r > 2 && f && w && n) return void b(w[n.length - 1]);
              let p = null == w ? void 0 : w.reduce((e, t) => "number" != typeof e || "number" != typeof t ? e : Math.abs(t - l) < Math.abs(e - l) ? t : e),
                m = nw(u) ? window.innerHeight : window.innerWidth;
              if (r > .4 && Math.abs(e) < .4 * m) {
                let e = f ? 1 : -1;
                return e > 0 && v && n ? void b(w[n.length - 1]) : void(d && e < 0 && i && t(), null === h || b(w[h + e]))
              }
              b(p)
            },
            onDrag: function({
              draggedDistance: e
            }) {
              if (null === y) return;
              let t = "bottom" === u || "right" === u ? y - e : y + e;
              ("bottom" === u || "right" === u) && t < w[w.length - 1] || ("top" === u || "left" === u) && t > w[w.length - 1] || ng(r.current, {
                transform: nw(u) ? `translate3d(0, ${t}px, 0)` : `translate3d(${t}px, 0, 0)`
              })
            },
            snapPointsOffset: w
          }
        }({
          snapPoints: i,
          activeSnapPointProp: v,
          setActiveSnapPointProp: h,
          drawerRef: J,
          fadeFromIndex: m,
          overlayRef: B,
          onSnapPointChange: en,
          direction: C,
          container: T,
          snapToSequentialPoint: S
        });
        ! function(e = {}) {
          let {
            isDisabled: t
          } = e;
          na(() => {
            if (!t) {
              var e, n, o;
              let t, a, i, u, l, c, s;
              return 1 == ++nd && nr() && (i = 0, u = window.pageXOffset, l = window.pageYOffset, c = ni((e = document.documentElement, n = "paddingRight", o = `${window.innerWidth-document.documentElement.clientWidth}px`, t = e.style[n], e.style[n] = o, () => {
                e.style[n] = t
              })), window.scrollTo(0, 0), s = ni(nf(document, "touchstart", e => {
                ((a = nc(e.target)) !== document.documentElement || a !== document.body) && (i = e.changedTouches[0].pageY)
              }, {
                passive: !1,
                capture: !0
              }), nf(document, "touchmove", e => {
                if (!a || a === document.documentElement || a === document.body) return void e.preventDefault();
                let t = e.changedTouches[0].pageY,
                  n = a.scrollTop,
                  r = a.scrollHeight - a.clientHeight;
                0 !== r && ((n <= 0 && t > i || n >= r && t < i) && e.preventDefault(), i = t)
              }, {
                passive: !1,
                capture: !0
              }), nf(document, "touchend", e => {
                let t = e.target;
                nm(t) && t !== document.activeElement && (e.preventDefault(), t.style.transform = "translateY(-2000px)", t.focus(), requestAnimationFrame(() => {
                  t.style.transform = ""
                }))
              }, {
                passive: !1,
                capture: !0
              }), nf(document, "focus", e => {
                let t = e.target;
                nm(t) && (t.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
                  t.style.transform = "", nu && (nu.height < window.innerHeight ? requestAnimationFrame(() => {
                    np(t)
                  }) : nu.addEventListener("resize", () => np(t), {
                    once: !0
                  }))
                }))
              }, !0), nf(window, "scroll", () => {
                window.scrollTo(0, 0)
              })), r = () => {
                c(), s(), window.scrollTo(u, l)
              }), () => {
                0 == --nd && (null == r || r())
              }
            }
          }, [t])
        }({
          isDisabled: !L || I || !w || W || !F || !D || !x
        });
        let {
          restorePositionSetting: ed
        } = function({
          isOpen: e,
          modal: t,
          nested: n,
          hasBeenOpened: r,
          preventScrollRestoration: o,
          noBodyStyles: a
        }) {
          let [i, u] = f.useState(() => "undefined" != typeof window ? window.location.href : ""), l = f.useRef(0), c = f.useCallback(() => {
            if (nn() && null === nP && e && !a) {
              nP = {
                position: document.body.style.position,
                top: document.body.style.top,
                left: document.body.style.left,
                height: document.body.style.height,
                right: "unset"
              };
              let {
                scrollX: e,
                innerHeight: t
              } = window;
              document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
                top: `${-l.current}px`,
                left: `${-e}px`,
                right: "0px",
                height: "auto"
              }), window.setTimeout(() => window.requestAnimationFrame(() => {
                let e = t - window.innerHeight;
                e && l.current >= t && (document.body.style.top = `${-(l.current+e)}px`)
              }), 300)
            }
          }, [e]), s = f.useCallback(() => {
            if (nn() && null !== nP && !a) {
              let e = -parseInt(document.body.style.top, 10),
                t = -parseInt(document.body.style.left, 10);
              Object.assign(document.body.style, nP), window.requestAnimationFrame(() => {
                o && i !== window.location.href ? u(window.location.href) : window.scrollTo(t, e)
              }), nP = null
            }
          }, [i]);
          return f.useEffect(() => {
            function e() {
              l.current = window.scrollY
            }
            return e(), window.addEventListener("scroll", e), () => {
              window.removeEventListener("scroll", e)
            }
          }, []), f.useEffect(() => {
            if (t) return () => {
              "undefined" == typeof document || document.querySelector("[data-vaul-drawer]") || s()
            }
          }, [t, s]), f.useEffect(() => {
            !n && r && (e ? (window.matchMedia("(display-mode: standalone)").matches || c(), t || window.setTimeout(() => {
              s()
            }, 500)) : s())
          }, [e, r, i, t, n, c, s]), {
            restorePositionSetting: s
          }
        }({
          isOpen: L,
          modal: w,
          nested: null != b && b,
          hasBeenOpened: F,
          preventScrollRestoration: P,
          noBodyStyles: E
        });

        function ef() {
          return (window.innerWidth - 26) / window.innerWidth
        }

        function ep(e, t) {
          var n;
          let r = e,
            o = null == (n = window.getSelection()) ? void 0 : n.toString(),
            a = J.current ? ny(J.current, C) : null,
            i = new Date;
          if ("SELECT" === r.tagName || r.hasAttribute("data-vaul-no-drag") || r.closest("[data-vaul-no-drag]")) return !1;
          if ("right" === C || "left" === C) return !0;
          if (H.current && i.getTime() - H.current.getTime() < 500) return !1;
          if (null !== a && ("bottom" === C ? a > 0 : a < 0)) return !0;
          if (o && o.length > 0) return !1;
          if (Y.current && i.getTime() - Y.current.getTime() < s && 0 === a || t) return Y.current = i, !1;
          for (; r;) {
            if (r.scrollHeight > r.clientHeight) {
              if (0 !== r.scrollTop) return Y.current = new Date, !1;
              if ("dialog" === r.getAttribute("role")) break
            }
            r = r.parentNode
          }
          return !0
        }

        function em(e) {
          I && J.current && (J.current.classList.remove(nC), V.current = !1, $(!1), U.current = new Date), null == y || y(), e || A(!1), setTimeout(() => {
            i && ea(i[0])
          }, 500)
        }

        function ev() {
          if (!J.current) return;
          let e = document.querySelector("[data-vaul-drawer-wrapper]"),
            t = ny(J.current, C);
          ng(J.current, {
            transform: "translate3d(0, 0, 0)",
            transition: `transform 0.5s cubic-bezier(${nE.join(",")})`
          }), ng(B.current, {
            transition: `opacity 0.5s cubic-bezier(${nE.join(",")})`,
            opacity: "1"
          }), u && t && t > 0 && L && ng(e, {
            borderRadius: "8px",
            overflow: "hidden",
            ...nw(C) ? {
              transform: `scale(${ef()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
              transformOrigin: "top"
            } : {
              transform: `scale(${ef()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
              transformOrigin: "left"
            },
            transitionProperty: "transform, border-radius",
            transitionDuration: "0.5s",
            transitionTimingFunction: `cubic-bezier(${nE.join(",")})`
          }, !0)
        }
        return f.useEffect(() => {
          window.requestAnimationFrame(() => {
            Z.current = !0
          })
        }, []), f.useEffect(() => {
          var e;

          function t() {
            if (J.current && D && (nm(document.activeElement) || K.current)) {
              var e;
              let t = (null == (e = window.visualViewport) ? void 0 : e.height) || 0,
                n = window.innerHeight,
                r = n - t,
                o = J.current.getBoundingClientRect().height || 0;
              et.current || (et.current = o);
              let a = J.current.getBoundingClientRect().top;
              if (Math.abs(G.current - r) > 60 && (K.current = !K.current), i && i.length > 0 && eu && eo && (r += eu[eo] || 0), G.current = r, o > t || K.current) {
                let e = J.current.getBoundingClientRect().height,
                  i = e;
                e > t && (i = t - (o > .8 * n ? a : 26)), g ? J.current.style.height = `${e-Math.max(r,0)}px` : J.current.style.height = `${Math.max(i,t-a)}px`
              } else {
                let e;
                e = navigator.userAgent, "undefined" != typeof window && (/Firefox/.test(e) && /Mobile/.test(e) || /FxiOS/.test(e)) || (J.current.style.height = `${et.current}px`)
              }
              i && i.length > 0 && !K.current ? J.current.style.bottom = "0px" : J.current.style.bottom = `${Math.max(r,0)}px`
            }
          }
          return null == (e = window.visualViewport) || e.addEventListener("resize", t), () => {
            var e;
            return null == (e = window.visualViewport) ? void 0 : e.removeEventListener("resize", t)
          }
        }, [eo, i, eu]), f.useEffect(() => (L && (ng(document.documentElement, {
          scrollBehavior: "auto"
        }), H.current = new Date), () => {
          ! function(e, t) {
            if (!e || !(e instanceof HTMLElement)) return;
            let n = nh.get(e);
            n && (e.style[t] = n[t])
          }(document.documentElement, "scrollBehavior")
        }), [L]), f.useEffect(() => {
          w || window.requestAnimationFrame(() => {
            document.body.style.pointerEvents = "auto"
          })
        }, [w]), f.createElement(tY, {
          defaultOpen: R,
          onOpenChange: e => {
            (d || e) && (e ? j(!0) : em(!0), A(e))
          },
          open: L
        }, f.createElement(ne.Provider, {
          value: {
            activeSnapPoint: er,
            snapPoints: i,
            setActiveSnapPoint: ea,
            drawerRef: J,
            overlayRef: B,
            onOpenChange: t,
            onPress: function(e) {
              var t, n;
              !d && !i || (!J.current || J.current.contains(e.target)) && (Q.current = (null == (t = J.current) ? void 0 : t.getBoundingClientRect().height) || 0, ee.current = (null == (n = J.current) ? void 0 : n.getBoundingClientRect().width) || 0, $(!0), z.current = new Date, nr() && window.addEventListener("touchend", () => V.current = !1, {
                once: !0
              }), e.target.setPointerCapture(e.pointerId), X.current = nw(C) ? e.pageY : e.pageX)
            },
            onRelease: function(e) {
              var t, n;
              if (!I || !J.current) return;
              J.current.classList.remove(nC), V.current = !1, $(!1), U.current = new Date;
              let r = ny(J.current, C);
              if (!e || !ep(e.target, !1) || !r || Number.isNaN(r) || null === z.current) return;
              let o = U.current.getTime() - z.current.getTime(),
                u = X.current - (nw(C) ? e.pageY : e.pageX),
                l = Math.abs(u) / o;
              if (l > .05 && (_(!0), setTimeout(() => {
                  _(!1)
                }, 200)), i) {
                ei({
                  draggedDistance: u * ("bottom" === C || "right" === C ? 1 : -1),
                  closeDrawer: em,
                  velocity: l,
                  dismissible: d
                }), null == a || a(e, !0);
                return
              }
              if ("bottom" === C || "right" === C ? u > 0 : u < 0) {
                ev(), null == a || a(e, !0);
                return
              }
              if (l > .4) {
                em(), null == a || a(e, !1);
                return
              }
              let s = Math.min(null != (t = J.current.getBoundingClientRect().height) ? t : 0, window.innerHeight),
                f = Math.min(null != (n = J.current.getBoundingClientRect().width) ? n : 0, window.innerWidth);
              if (Math.abs(r) >= ("left" === C || "right" === C ? f : s) * c) {
                em(), null == a || a(e, !1);
                return
              }
              null == a || a(e, !0), ev()
            },
            onDrag: function(e) {
              if (J.current && I) {
                let t = "bottom" === C || "right" === C ? 1 : -1,
                  n = (X.current - (nw(C) ? e.pageY : e.pageX)) * t,
                  r = n > 0,
                  a = i && !d && !r;
                if (a && 0 === eo) return;
                let l = Math.abs(n),
                  c = document.querySelector("[data-vaul-drawer-wrapper]"),
                  s = l / ("bottom" === C || "top" === C ? Q.current : ee.current),
                  f = es(l, r);
                if (null !== f && (s = f), a && s >= 1 || !V.current && !ep(e.target, r)) return;
                if (J.current.classList.add(nC), V.current = !0, ng(J.current, {
                    transition: "none"
                  }), ng(B.current, {
                    transition: "none"
                  }), i && el({
                    draggedDistance: n
                  }), r && !i) {
                  let e = Math.min(-(8 * (Math.log(n + 1) - 2) * 1), 0) * t;
                  ng(J.current, {
                    transform: nw(C) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)`
                  });
                  return
                }
                let p = 1 - s;
                if ((ec || m && eo === m - 1) && (null == o || o(e, s), ng(B.current, {
                    opacity: `${p}`,
                    transition: "none"
                  }, !0)), c && B.current && u) {
                  let e = Math.min(ef() + s * (1 - ef()), 1),
                    t = 8 - 8 * s,
                    n = Math.max(0, 14 - 14 * s);
                  ng(c, {
                    borderRadius: `${t}px`,
                    transform: nw(C) ? `scale(${e}) translate3d(0, ${n}px, 0)` : `scale(${e}) translate3d(${n}px, 0, 0)`,
                    transition: "none"
                  }, !0)
                }
                if (!i) {
                  let e = l * t;
                  ng(J.current, {
                    transform: nw(C) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)`
                  })
                }
              }
            },
            dismissible: d,
            shouldAnimate: Z,
            handleOnly: p,
            isOpen: L,
            isDragging: I,
            shouldFade: ec,
            closeDrawer: em,
            onNestedDrag: function(e, t) {
              if (t < 0) return;
              let n = (window.innerWidth - 16) / window.innerWidth,
                r = n + t * (1 - n),
                o = -16 + 16 * t;
              ng(J.current, {
                transform: nw(C) ? `scale(${r}) translate3d(0, ${o}px, 0)` : `scale(${r}) translate3d(${o}px, 0, 0)`,
                transition: "none"
              })
            },
            onNestedOpenChange: function(e) {
              let t = e ? (window.innerWidth - 16) / window.innerWidth : 1,
                n = e ? -16 : 0;
              q.current && window.clearTimeout(q.current), ng(J.current, {
                transition: `transform 0.5s cubic-bezier(${nE.join(",")})`,
                transform: nw(C) ? `scale(${t}) translate3d(0, ${n}px, 0)` : `scale(${t}) translate3d(${n}px, 0, 0)`
              }), !e && J.current && (q.current = setTimeout(() => {
                let e = ny(J.current, C);
                ng(J.current, {
                  transition: "none",
                  transform: nw(C) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)`
                })
              }, 500))
            },
            onNestedRelease: function(e, t) {
              let n = nw(C) ? window.innerHeight : window.innerWidth,
                r = t ? (n - 16) / n : 1,
                o = t ? -16 : 0;
              t && ng(J.current, {
                transition: `transform 0.5s cubic-bezier(${nE.join(",")})`,
                transform: nw(C) ? `scale(${r}) translate3d(0, ${o}px, 0)` : `scale(${r}) translate3d(${o}px, 0, 0)`
              })
            },
            keyboardIsOpen: K,
            modal: w,
            snapPointsOffset: eu,
            activeSnapPointIndex: eo,
            direction: C,
            shouldScaleBackground: u,
            setBackgroundColorOnScale: l,
            noBodyStyles: E,
            container: T,
            autoFocus: M
          }
        }, n))
      }
      let nO = f.forwardRef(function({
        ...e
      }, t) {
        let {
          overlayRef: n,
          snapPoints: r,
          onRelease: o,
          shouldFade: a,
          isOpen: i,
          modal: u,
          shouldAnimate: l
        } = nt(), c = nv(t, n), s = r && r.length > 0;
        if (!u) return null;
        let d = f.useCallback(e => o(e), [o]);
        return f.createElement(tJ, {
          onMouseUp: d,
          ref: c,
          "data-vaul-overlay": "",
          "data-vaul-snap-points": i && s ? "true" : "false",
          "data-vaul-snap-points-overlay": i && a ? "true" : "false",
          "data-vaul-animate": (null == l ? void 0 : l.current) ? "true" : "false",
          ...e
        })
      });
      nO.displayName = "Drawer.Overlay";
      let nT = f.forwardRef(function({
        onPointerDownOutside: e,
        style: t,
        onOpenAutoFocus: n,
        ...r
      }, o) {
        let {
          drawerRef: a,
          onPress: i,
          onRelease: u,
          onDrag: l,
          keyboardIsOpen: c,
          snapPointsOffset: s,
          activeSnapPointIndex: d,
          modal: p,
          isOpen: m,
          direction: v,
          snapPoints: h,
          container: g,
          handleOnly: w,
          shouldAnimate: y,
          autoFocus: b
        } = nt(), [E, C] = f.useState(!1), R = nv(o, a), x = f.useRef(null), S = f.useRef(null), P = f.useRef(!1), D = h && h.length > 0;

        function O(e) {
          x.current = null, P.current = !1, u(e)
        }
        return ! function() {
          let {
            direction: e,
            isOpen: t,
            shouldScaleBackground: n,
            setBackgroundColorOnScale: r,
            noBodyStyles: o
          } = nt(), a = f.useRef(null), i = (0, f.useMemo)(() => document.body.style.backgroundColor, []);

          function u() {
            return (window.innerWidth - 26) / window.innerWidth
          }
          f.useEffect(() => {
            if (t && n) {
              a.current && clearTimeout(a.current);
              let t = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
              if (!t) return;
              ! function(...e) {}(r && !o ? nb(document.body, {
                background: "black"
              }) : nS, nb(t, {
                transformOrigin: nw(e) ? "top" : "left",
                transitionProperty: "transform, border-radius",
                transitionDuration: "0.5s",
                transitionTimingFunction: `cubic-bezier(${nE.join(",")})`
              }));
              let n = nb(t, {
                borderRadius: "8px",
                overflow: "hidden",
                ...nw(e) ? {
                  transform: `scale(${u()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
                } : {
                  transform: `scale(${u()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
                }
              });
              return () => {
                n(), a.current = window.setTimeout(() => {
                  i ? document.body.style.background = i : document.body.style.removeProperty("background")
                }, 500)
              }
            }
          }, [t, n, i])
        }(), f.useEffect(() => {
          D && window.requestAnimationFrame(() => {
            C(!0)
          })
        }, []), f.createElement(t3, {
          "data-vaul-drawer-direction": v,
          "data-vaul-drawer": "",
          "data-vaul-delayed-snap-points": E ? "true" : "false",
          "data-vaul-snap-points": m && D ? "true" : "false",
          "data-vaul-custom-container": g ? "true" : "false",
          "data-vaul-animate": (null == y ? void 0 : y.current) ? "true" : "false",
          ...r,
          ref: R,
          style: s && s.length > 0 ? {
            "--snap-point-height": `${s[null!=d?d:0]}px`,
            ...t
          } : t,
          onPointerDown: e => {
            w || (null == r.onPointerDown || r.onPointerDown.call(r, e), x.current = {
              x: e.pageX,
              y: e.pageY
            }, i(e))
          },
          onOpenAutoFocus: e => {
            null == n || n(e), b || e.preventDefault()
          },
          onPointerDownOutside: t => {
            (null == e || e(t), !p || t.defaultPrevented) ? t.preventDefault(): c.current && (c.current = !1)
          },
          onFocusOutside: e => {
            if (!p) return void e.preventDefault()
          },
          onPointerMove: e => {
            if (S.current = e, w || (null == r.onPointerMove || r.onPointerMove.call(r, e), !x.current)) return;
            let t = e.pageY - x.current.y,
              n = e.pageX - x.current.x,
              o = "touch" === e.pointerType ? 10 : 2;
            ((e, t, n = 0) => {
              if (P.current) return !0;
              let r = Math.abs(e.y),
                o = Math.abs(e.x),
                a = o > r,
                i = ["bottom", "right"].includes(t) ? 1 : -1;
              if ("left" === t || "right" === t) {
                if (!(e.x * i < 0) && o >= 0 && o <= n) return a
              } else if (!(e.y * i < 0) && r >= 0 && r <= n) return !a;
              return P.current = !0, !0
            })({
              x: n,
              y: t
            }, v, o) ? l(e): (Math.abs(n) > o || Math.abs(t) > o) && (x.current = null)
          },
          onPointerUp: e => {
            null == r.onPointerUp || r.onPointerUp.call(r, e), x.current = null, P.current = !1, u(e)
          },
          onPointerOut: e => {
            null == r.onPointerOut || r.onPointerOut.call(r, e), O(S.current)
          },
          onContextMenu: e => {
            null == r.onContextMenu || r.onContextMenu.call(r, e), S.current && O(S.current)
          }
        })
      });
      nT.displayName = "Drawer.Content";
      let nM = f.forwardRef(function({
        preventCycle: e = !1,
        children: t,
        ...n
      }, r) {
        let {
          closeDrawer: o,
          isDragging: a,
          snapPoints: i,
          activeSnapPoint: u,
          setActiveSnapPoint: l,
          dismissible: c,
          handleOnly: s,
          isOpen: d,
          onPress: p,
          onDrag: m
        } = nt(), v = f.useRef(null), h = f.useRef(!1);

        function g() {
          v.current && window.clearTimeout(v.current), h.current = !1
        }
        return f.createElement("div", {
          onClick: function() {
            h.current ? g() : window.setTimeout(() => {
              ! function() {
                if (a || e || h.current) return g();
                if (g(), !i || 0 === i.length) {
                  c || o();
                  return
                }
                if (u === i[i.length - 1] && c) return o();
                let t = i.findIndex(e => e === u); - 1 === t || l(i[t + 1])
              }()
            }, 120)
          },
          onPointerCancel: g,
          onPointerDown: e => {
            s && p(e), v.current = window.setTimeout(() => {
              h.current = !0
            }, 250)
          },
          onPointerMove: e => {
            s && m(e)
          },
          ref: r,
          "data-vaul-drawer-visible": d ? "true" : "false",
          "data-vaul-handle": "",
          "aria-hidden": "true",
          ...n
        }, f.createElement("span", {
          "data-vaul-handle-hitarea": "",
          "aria-hidden": "true"
        }, t))
      });
      nM.displayName = "Drawer.Handle";
      let nN = {
        Root: nD,
        NestedRoot: function({
          onDrag: e,
          onOpenChange: t,
          open: n,
          ...r
        }) {
          let {
            onNestedDrag: o,
            onNestedOpenChange: a,
            onNestedRelease: i
          } = nt();
          if (!o) throw Error("Drawer.NestedRoot must be placed in another drawer");
          return f.createElement(nD, {
            nested: !0,
            open: n,
            onClose: () => {
              a(!1)
            },
            onDrag: (t, n) => {
              o(t, n), null == e || e(t, n)
            },
            onOpenChange: e => {
              e && a(e), null == t || t(e)
            },
            onRelease: i,
            ...r
          })
        },
        Content: nT,
        Overlay: nO,
        Trigger: tV,
        Portal: function(e) {
          let t = nt(),
            {
              container: n = t.container,
              ...r
            } = e;
          return f.createElement(tZ, {
            container: n,
            ...r
          })
        },
        Handle: nM,
        Close: t8,
        Title: t6,
        Description: t7
      }
    },
    73321: (e, t, n) => {
      var r = n(74645);
      n.o(r, "redirect") && n.d(t, {
        redirect: function() {
          return r.redirect
        }
      }), n.o(r, "useParams") && n.d(t, {
        useParams: function() {
          return r.useParams
        }
      }), n.o(r, "usePathname") && n.d(t, {
        usePathname: function() {
          return r.usePathname
        }
      }), n.o(r, "useRouter") && n.d(t, {
        useRouter: function() {
          return r.useRouter
        }
      }), n.o(r, "useSearchParams") && n.d(t, {
        useSearchParams: function() {
          return r.useSearchParams
        }
      })
    }
  }
]);