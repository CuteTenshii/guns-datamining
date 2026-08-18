(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7174], {
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
    13782: (e, t, n) => {
      "use strict";
      n.d(t, {
        A: () => h
      });
      var r = n(95155),
        a = n(12115),
        l = n(47650),
        s = n(5677),
        i = n(5585),
        c = n.n(i);
      let o = "(max-width: 768px)",
        d = e => {
          if ("function" != typeof window.matchMedia) return () => void 0;
          let t = window.matchMedia(o);
          return "function" == typeof t.addEventListener ? (t.addEventListener("change", e), () => t.removeEventListener("change", e)) : (t.addListener(e), () => t.removeListener(e))
        },
        u = () => "function" == typeof window.matchMedia && window.matchMedia(o).matches,
        f = () => !1,
        p = (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "7.43 7.45 9.15 9.15",
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            d: "m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"
          })
        });

      function h({
        opened: e,
        onClose: t,
        onOverlayClose: n,
        onCloseButtonClick: i,
        onEscapeClose: o,
        title: h,
        centered: m = !0,
        size: v = "auto",
        closeOnOverlayClick: b = !0,
        withCloseButton: y = !0,
        centerTitle: _ = !1,
        className: w,
        bodyClassName: x,
        mobileVariant: g = "drawer",
        children: j
      }) {
        let [N, S] = (0, a.useState)(e), [E, C] = (0, a.useState)(!1), [k, L] = (0, a.useState)(null), I = (0, a.useRef)(null), O = (0, a.useRef)(null), A = (0, a.useRef)(null), M = (0, a.useRef)(null), T = (0, a.useRef)(!1), U = (0, a.useSyncExternalStore)(d, u, f) && "drawer" === g, G = e => {
          if (!e) return !1;
          let t = window.getComputedStyle(e).overflowY;
          return e.scrollHeight > e.clientHeight + 1 && ("auto" === t || "scroll" === t)
        }, H = e => {
          let t = O.current;
          if (!t || !e) return null;
          let n = e;
          for (; n && t.contains(n);) {
            if (G(n)) return n;
            n = n.parentElement
          }
          return null
        }, P = (e, t) => t < 0 ? e.scrollTop > 0 : !(t > 0) || e.scrollTop + e.clientHeight < e.scrollHeight, $ = (0, a.useCallback)(e => {
          "overlay" === e ? (n ?? t)() : "escape" === e ? (o ?? t)() : "button" === e ? (i ?? t)() : t()
        }, [t, i, o, n]);
        (0, a.useEffect)(() => {
          if (e) {
            S(!0), C(!1);
            return
          }
          return C(!0), I.current = setTimeout(() => {
            S(!1), C(!1)
          }, U ? 320 : 250), () => {
            I.current && (clearTimeout(I.current), I.current = null)
          }
        }, [U, e]), (0, a.useEffect)(() => {
          if ("undefined" == typeof document) return;
          let e = document.createElement("div");
          return document.body.appendChild(e), L(e), () => {
            document.body.removeChild(e), L(null)
          }
        }, []), (0, a.useEffect)(() => {
          if (!N) return;
          let e = e => {
              if ("Escape" === e.key) {
                if (U) return;
                $("escape");
                return
              } ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(e.key) && !O.current?.contains(e.target) && e.preventDefault()
            },
            t = e => {
              let t = O.current;
              if (!t) return void e.preventDefault();
              let n = e.target;
              if (!(n && t.contains(n))) return void e.preventDefault();
              if (!U) {
                if (e instanceof WheelEvent) {
                  let t = H(n);
                  t && P(t, e.deltaY) || e.preventDefault();
                  return
                }
                if (e instanceof TouchEvent) {
                  let t = e.touches[0]?.clientY ?? null,
                    r = M.current;
                  M.current = t;
                  let a = H(n);
                  a && P(a, null !== r && null !== t ? r - t : 0) || e.preventDefault()
                }
              }
            },
            n = {
              passive: !1
            };
          return window.addEventListener("keydown", e, {
            passive: !1
          }), window.addEventListener("wheel", t, n), window.addEventListener("touchmove", t, n), () => {
            window.removeEventListener("keydown", e), window.removeEventListener("wheel", t, n), window.removeEventListener("touchmove", t, n)
          }
        }, [U, P, H, N, $]), (0, a.useEffect)(() => {
          if (!N) return;
          let e = e => {
            if (!O.current?.contains(e.target)) {
              M.current = null;
              return
            }
            M.current = e.touches[0]?.clientY ?? null
          };
          return window.addEventListener("touchstart", e, {
            passive: !0
          }), () => window.removeEventListener("touchstart", e)
        }, [N]), (0, a.useEffect)(() => {
          if (!U || !e || "undefined" == typeof document) return;
          let t = document.body,
            n = () => {
              "none" === t.style.pointerEvents && t.style.removeProperty("pointer-events")
            };
          n();
          let r = new MutationObserver(n);
          return r.observe(t, {
            attributes: !0,
            attributeFilter: ["style"]
          }), () => {
            r.disconnect(), n()
          }
        }, [U, e]);
        let D = E ? "closing" : "open",
          R = _ ? {
            textAlign: "center",
            width: "100%"
          } : {},
          W = h || y ? (0, r.jsxs)("div", {
            className: c().header,
            children: [h && (0, r.jsx)("h2", {
              className: c().title,
              style: R,
              children: h
            }), y && (0, r.jsx)("button", {
              type: "button",
              className: c().closeButton,
              onClick: U ? () => $("button") : i ?? t,
              children: p
            })]
          }) : null,
          q = (0, a.useCallback)((e, t) => {
            let n = Math.max(0, Math.min(1, t)),
              r = A.current;
            r && (r.style.transition = "none", r.style.opacity = `${1-n}`)
          }, []),
          B = (0, a.useCallback)((e, t) => {
            let n = A.current;
            n && (n.style.transition = `opacity ${t?.5:.3}s cubic-bezier(0.32, 0.72, 0, 1)`, n.style.opacity = t ? "1" : "0")
          }, []);
        if (U) return (0, r.jsx)(s._s.Root, {
          open: e,
          onOpenChange: e => {
            e || $("drag")
          },
          modal: !1,
          noBodyStyles: !0,
          repositionInputs: !1,
          onDrag: q,
          onRelease: B,
          children: (0, r.jsxs)(s._s.Portal, {
            children: [(0, r.jsx)("div", {
              ref: A,
              className: c().overlay,
              "data-variant": "drawer",
              "data-state": e ? "open" : "closing",
              onClick: () => {
                b && $("overlay")
              }
            }), (0, r.jsxs)(s._s.Content, {
              ref: O,
              className: `${c().drawer} ${w??""}`,
              onEscapeKeyDown: e => {
                e.preventDefault(), $("escape")
              },
              onInteractOutside: e => e.preventDefault(),
              children: [(0, r.jsx)("div", {
                className: c().drawerHandleRow,
                children: (0, r.jsx)(s._s.Handle, {
                  className: c().drawerHandle
                })
              }), !h && (0, r.jsx)(s._s.Title, {
                className: c().visuallyHidden,
                children: "Dialog"
              }), (h || y) && (0, r.jsxs)("div", {
                className: c().header,
                children: [h && (0, r.jsx)(s._s.Title, {
                  asChild: !0,
                  children: (0, r.jsx)("h2", {
                    className: c().title,
                    style: R,
                    children: h
                  })
                }), y && (0, r.jsx)("button", {
                  type: "button",
                  className: c().closeButton,
                  onClick: () => $("button"),
                  children: p
                })]
              }), (0, r.jsx)("div", {
                className: `${c().body} ${x??""}`,
                children: j
              })]
            })]
          })
        });
        if (!N || !k) return null;
        let z = "number" == typeof v ? `${v}px` : v,
          Y = {};
        z && "auto" !== z ? Y.maxWidth = z : (Y.width = "fit-content", Y.maxWidth = "clamp(100%, 100%, 850px)", Y.boxSizing = "border-box");
        let F = (0, r.jsx)("div", {
          className: c().overlay,
          "data-centered": m,
          "data-state": D,
          onMouseDown: e => {
            T.current = e.target === e.currentTarget
          },
          onClick: e => {
            let t = e.target === e.currentTarget,
              n = b && t && T.current;
            T.current = !1, n && $("overlay")
          },
          children: (0, r.jsxs)("div", {
            className: `${c().modal} ${w??""}`,
            "data-state": D,
            style: Y,
            ref: O,
            onClick: e => e.stopPropagation(),
            children: [W, (0, r.jsx)("div", {
              className: `${c().body} ${x??""}`,
              children: j
            })]
          })
        });
        return (0, l.createPortal)(F, k)
      }
    },
    28356: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = {
        cancelIdleCallback: function() {
          return l
        },
        requestIdleCallback: function() {
          return a
        }
      };
      for (var r in n) Object.defineProperty(t, r, {
        enumerable: !0,
        get: n[r]
      });
      let a = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
          let t = Date.now();
          return self.setTimeout(function() {
            e({
              didTimeout: !1,
              timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - t))
              }
            })
          }, 1)
        },
        l = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
          return clearTimeout(e)
        };
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    36321: e => {
      e.exports = {
        containerWrapper: "GUNS__2d-fc4d7f33-97c9e6f2-2dbaa40b",
        container: "GUNS__af-d5284ea4-8478140e-84d3ba2d",
        emailGap: "GUNS__49-c99ec0a0-9fa2db3f-89ea2104",
        containerButtons: "GUNS__c6-ce568b28-6ae1dc8a-d08c7d46",
        submitButton: "GUNS__95-2322eb3d-769bc203-766b4197",
        captchaWrapper: "GUNS__15-788219d7-e3bdaaf7-4d183137"
      }
    },
    37897: (e, t, n) => {
      "use strict";
      n.d(t, {
        A: () => c
      });
      var r = n(95155),
        a = n(12115),
        l = n(98241),
        s = n.n(l),
        i = n(54834);

      function c({
        featureName: e,
        onChangeFunction: t,
        value: n,
        placeholder: l,
        icon: c,
        prefix: o,
        prefixLength: d,
        viewPassword: u,
        onKeyPress: f,
        isImageUrl: p,
        iconInside: h,
        type: m = "text",
        ...v
      }) {
        let [b, y] = (0, a.useState)(!!u), {
          onInput: _,
          onChange: w,
          maxLength: x,
          ...g
        } = v, j = x ?? (u || "password" === m ? 72 : void 0);
        return (0, a.useEffect)(() => {
          y(!!u)
        }, [u]), (0, r.jsxs)("div", {
          className: s().inputContainerWrapper,
          "data-dashboard-feature-label": "string" == typeof e ? e : void 0,
          children: [e && (0, r.jsx)("h1", {
            className: s().featureName,
            children: e
          }), (0, r.jsxs)("div", {
            className: `${s().inputWrapperDiv} ${o&&s().inputWrapperURL} ${h&&s().inputWrapperIconInside}`,
            children: [(0, r.jsxs)("span", {
              className: s().inputWrapperSpan,
              style: {
                position: o || h ? "absolute" : "static"
              },
              children: [p ? (0, r.jsx)("img", {
                src: c,
                alt: "icon",
                className: s().inputWrapperIconImage
              }) : c, o && (0, r.jsx)("h1", {
                children: o
              })]
            }), u && (0, r.jsx)("p", {
              onClick: () => {
                y(!b)
              },
              children: b ? i.A.hidePassword : i.A.views
            }), (0, r.jsx)("input", {
              autoCorrect: "off",
              type: u ? b ? "password" : "text" : m,
              onKeyDown: f,
              value: n,
              style: {
                paddingLeft: o ? d : "",
                paddingRight: u ? 47 : ""
              },
              placeholder: l,
              className: s().inputWrapperInput,
              onInput: e => {
                _?.(e), w?.(e), t?.(e)
              },
              maxLength: j,
              ...g
            })]
          })]
        })
      }
    },
    42593: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = {
        default: function() {
          return _
        },
        handleClientScriptLoad: function() {
          return v
        },
        initScriptLoader: function() {
          return b
        }
      };
      for (var a in r) Object.defineProperty(t, a, {
        enumerable: !0,
        get: r[a]
      });
      let l = n(73623),
        s = n(66388),
        i = n(95155),
        c = l._(n(47650)),
        o = s._(n(12115)),
        d = n(75368),
        u = n(3584),
        f = n(28356),
        p = new Map,
        h = new Set,
        m = e => {
          let {
            src: t,
            id: n,
            onLoad: r = () => {},
            onReady: a = null,
            dangerouslySetInnerHTML: l,
            children: s = "",
            strategy: i = "afterInteractive",
            onError: o,
            stylesheets: d
          } = e, f = n || t;
          if (f && h.has(f)) return;
          if (p.has(t)) {
            h.add(f), p.get(t).then(r, o);
            return
          }
          let m = () => {
              a && a(), h.add(f)
            },
            v = document.createElement("script"),
            b = new Promise((e, t) => {
              v.addEventListener("load", function(t) {
                e(), r && r.call(this, t), m()
              }), v.addEventListener("error", function(e) {
                t(e)
              })
            }).catch(function(e) {
              o && o(e)
            });
          l ? (v.innerHTML = l.__html || "", m()) : s ? (v.textContent = "string" == typeof s ? s : Array.isArray(s) ? s.join("") : "", m()) : t && (v.src = t, p.set(t, b)), (0, u.setAttributesFromProps)(v, e), "worker" === i && v.setAttribute("type", "text/partytown"), v.setAttribute("data-nscript", i), d && (e => {
            if (c.default.preinit) return e.forEach(e => {
              c.default.preinit(e, {
                as: "style"
              })
            });
            {
              let t = document.head;
              e.forEach(e => {
                let n = document.createElement("link");
                n.type = "text/css", n.rel = "stylesheet", n.href = e, t.appendChild(n)
              })
            }
          })(d), document.body.appendChild(v)
        };

      function v(e) {
        let {
          strategy: t = "afterInteractive"
        } = e;
        "lazyOnload" === t ? window.addEventListener("load", () => {
          (0, f.requestIdleCallback)(() => m(e))
        }) : m(e)
      }

      function b(e) {
        e.forEach(v), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
          let t = e.id || e.getAttribute("src");
          h.add(t)
        })
      }

      function y(e) {
        let {
          id: t,
          src: n = "",
          onLoad: r = () => {},
          onReady: a = null,
          strategy: l = "afterInteractive",
          onError: s,
          stylesheets: u,
          ...p
        } = e, {
          updateScripts: v,
          scripts: b,
          getIsSsr: y,
          appDir: _,
          nonce: w
        } = (0, o.useContext)(d.HeadManagerContext);
        w = p.nonce || w;
        let x = (0, o.useRef)(!1);
        (0, o.useEffect)(() => {
          let e = t || n;
          x.current || (a && e && h.has(e) && a(), x.current = !0)
        }, [a, t, n]);
        let g = (0, o.useRef)(!1);
        if ((0, o.useEffect)(() => {
            if (!g.current) {
              if ("afterInteractive" === l) m(e);
              else "lazyOnload" === l && ("complete" === document.readyState ? (0, f.requestIdleCallback)(() => m(e)) : window.addEventListener("load", () => {
                (0, f.requestIdleCallback)(() => m(e))
              }));
              g.current = !0
            }
          }, [e, l]), ("beforeInteractive" === l || "worker" === l) && (v ? (b[l] = (b[l] || []).concat([{
            id: t,
            src: n,
            onLoad: r,
            onReady: a,
            onError: s,
            ...p,
            nonce: w
          }]), v(b)) : y && y() ? h.add(t || n) : y && !y() && m({
            ...e,
            nonce: w
          })), _) {
          if (u && u.forEach(e => {
              c.default.preinit(e, {
                as: "style"
              })
            }), "beforeInteractive" === l)
            if (!n) return p.dangerouslySetInnerHTML && (p.children = p.dangerouslySetInnerHTML.__html, delete p.dangerouslySetInnerHTML), (0, i.jsx)("script", {
              nonce: w,
              dangerouslySetInnerHTML: {
                __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([0,{...p,id:t}])})`
              }
            });
            else return c.default.preload(n, p.integrity ? {
              as: "script",
              integrity: p.integrity,
              nonce: w,
              crossOrigin: p.crossOrigin
            } : {
              as: "script",
              nonce: w,
              crossOrigin: p.crossOrigin
            }), (0, i.jsx)("script", {
              nonce: w,
              dangerouslySetInnerHTML: {
                __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([n,{...p,id:t}])})`
              }
            });
          "afterInteractive" === l && n && c.default.preload(n, p.integrity ? {
            as: "script",
            integrity: p.integrity,
            nonce: w,
            crossOrigin: p.crossOrigin
          } : {
            as: "script",
            nonce: w,
            crossOrigin: p.crossOrigin
          })
        }
        return null
      }
      Object.defineProperty(y, "__nextScript", {
        value: !0
      });
      let _ = y;
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    63855: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 75245))
    },
    65596: (e, t, n) => {
      "use strict";
      n.d(t, {
        default: () => a.a
      });
      var r = n(42593),
        a = n.n(r)
    },
    75245: (e, t, n) => {
      "use strict";
      n.d(t, {
        default: () => m
      });
      var r = n(95155),
        a = n(12115),
        l = n(36321),
        s = n.n(l),
        i = n(98241),
        c = n.n(i),
        o = n(54834),
        d = n(37897),
        u = n(73321),
        f = n(65596),
        p = n(86891),
        h = n(13782);
      let m = function() {
        let e = (0, p.kj)(),
          t = (0, p.VJ)(),
          n = (0, u.useRouter)(),
          l = e("auth.reset.submit"),
          [i, m] = (0, a.useState)(""),
          [v, b] = (0, a.useState)(""),
          [y, _] = (0, a.useState)(l),
          [w, x] = (0, a.useState)(!1),
          g = async e => {
            try {
              _(o.A.loading), b("");
              let r = JSON.stringify({
                  email: i,
                  captcha: e
                }),
                a = await fetch("/api/reset/password/request", {
                  method: "POST",
                  body: r
                }),
                s = await a.json();
              a.ok ? n.push(t(`/sent?e=${btoa(i)}&d=pass&token=${s.resendToken}`)) : (b(s.error), _(l))
            } catch (e) {
              return console.error(e.message), !1
            } finally {
              _(l)
            }
          }, j = e => {
            x(!1), g(e)
          }, N = () => {
            b(e("auth.reset.error_captcha")), _(l)
          };
        return (0, a.useEffect)(() => {
          Object.assign(window, {
            getToken: j,
            handleError: N
          })
        }, []), (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(f.default, {
            strategy: "afterInteractive",
            src: "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",
            id: "_turnstilereset"
          }), (0, r.jsx)(h.A, {
            opened: w,
            centered: !0,
            withCloseButton: !1,
            onClose: () => x(!1),
            title: e("auth.reset.modal_title"),
            centerTitle: !0,
            children: (0, r.jsx)("div", {
              className: s().captchaWrapper,
              children: (0, r.jsx)("div", {
                className: "cf-turnstile"
              })
            })
          }), (0, r.jsx)("div", {
            className: s().containerWrapper,
            children: (0, r.jsxs)("div", {
              className: s().container,
              children: [(0, r.jsx)("h1", {
                children: e("auth.reset.title")
              }), (0, r.jsx)("h3", {
                children: e("auth.reset.description")
              }), (0, r.jsx)("div", {
                className: s().emailGap,
                children: (0, r.jsx)(d.A, {
                  featureName: e("auth.reset.email_label"),
                  value: i,
                  onChangeFunction: e => {
                    m(e.target.value)
                  },
                  icon: o.A.email,
                  placeholder: e("auth.reset.email_placeholder")
                })
              }), (0, r.jsxs)("div", {
                className: s().containerButtons,
                children: ["" !== v && (0, r.jsx)("div", {
                  className: c().errorContainer,
                  children: (0, r.jsx)("span", {
                    children: v
                  })
                }), (0, r.jsx)("span", {
                  className: s().submitButton,
                  onClick: () => {
                    i ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(i).toLowerCase()) ? (x(!0), setTimeout(() => {
                      "turnstile" in window && window.turnstile.render(".cf-turnstile", {
                        sitekey: "0x4AAAAAACA_HYxWrLW67aLT",
                        "error-callback": N,
                        callback: j
                      })
                    }, 100)) : b(e("auth.reset.error_invalid_email")) : b(e("auth.reset.error_missing_email"))
                  },
                  children: y
                })]
              })]
            })
          })]
        })
      }
    }
  },
  e => {
    e.O(0, [6794, 379, 4293, 6891, 5886, 8441, 3794, 7358], () => e(e.s = 63855)), _N_E = e.O()
  }
]);