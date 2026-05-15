(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4520], {
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
        body: "GUNS__28-d82a957e-1d95260e-e1b07846"
      }
    },
    9569: e => {
      e.exports = {
        loginContainerWrapper: "GUNS__41-32c5fd17-7b63db9d-b2c59f85",
        loginContainer: "GUNS__39-f567f698-18aac150-f743e836",
        logoContainer: "GUNS__5a-8dc64bb9-53d2ba59-0982206c",
        mfaDescription: "GUNS__b0-c2f4099d-f13f7211-cd4ce327",
        loginOptions: "GUNS__ed-d0576b20-c78a73f3-433b549b",
        discordLogin: "GUNS__57-1fb41c15-232f11f3-3848e09e",
        loginSeperator: "GUNS__a0-c5e933fd-fd209927-abd2c8d1",
        emailLogin: "GUNS__f7-f1b544e4-229167a3-5a2967b2",
        forgotPassword: "GUNS__c3-7c17df44-81d22a1a-2ee8fa60",
        loginButton: "GUNS__4a-b7cabea7-a770a1e8-dce6ecb2",
        mfaButton: "GUNS__0a-36d7e724-72e92576-a8cf2ff2",
        newLocationButton: "GUNS__b9-1d8fc9a4-cbdb1adf-c11a6951",
        loginButtonContainer: "GUNS__ce-7e6d8859-2d1c5182-a1f52c51",
        errorContainer: "GUNS__e1-4af99b13-3c372805-e0381906",
        mfaGap: "GUNS__d2-8897fbf9-9a4a2edb-e7155505",
        captchaWrapper: "GUNS__5f-315332a7-a8fdb8d9-02935a8d",
        loginContainerLoading: "GUNS__9a-59128d48-133300f2-447e5ef3",
        resendEmail: "GUNS__5e-a719a114-cec4e3a7-d776619a",
        trustDeviceContainer: "GUNS__9b-1cb17c82-48bb1c40-9c4ba2eb",
        trustDeviceText: "GUNS__0f-41ff1305-327f20ab-9c1bb526",
        trustDeviceButtons: "GUNS__24-3383480c-404ebeff-7614ed6f",
        mfaSmalText: "GUNS__8d-526cbd20-7f923cf3-580b448e"
      }
    },
    28356: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = {
        cancelIdleCallback: function() {
          return s
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
        s = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
          return clearTimeout(e)
        };
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    37897: (e, t, n) => {
      "use strict";
      n.d(t, {
        A: () => l
      });
      var r = n(95155),
        a = n(12115),
        s = n(98241),
        i = n.n(s),
        o = n(54834);

      function l({
        featureName: e,
        onChangeFunction: t,
        value: n,
        placeholder: s,
        icon: l,
        prefix: c,
        prefixLength: u,
        viewPassword: d,
        onKeyPress: h,
        isImageUrl: f,
        ...p
      }) {
        let m = (0, a.useRef)(null),
          [g, x] = (0, a.useState)(d);
        return (0, a.useEffect)(() => {
          m.current && (m.current.type = g ? "password" : "text")
        }, [g]), (0, r.jsxs)("div", {
          className: i().inputContainerWrapper,
          children: [(0, r.jsx)("h1", {
            className: i().featureName,
            children: e
          }), (0, r.jsxs)("div", {
            className: `${i().inputWrapperDiv} ${c&&i().inputWrapperURL}`,
            children: [(0, r.jsxs)("span", {
              className: i().inputWrapperSpan,
              style: {
                position: c ? "absolute" : "static"
              },
              children: [f ? (0, r.jsx)("img", {
                src: l,
                alt: "icon",
                className: i().inputWrapperIconImage
              }) : l, c && (0, r.jsx)("h1", {
                children: c
              })]
            }), d && (0, r.jsx)("p", {
              onClick: () => {
                x(!g)
              },
              children: g ? o.A.hidePassword : o.A.views
            }), (0, r.jsx)("input", {
              autoCorrect: "false",
              type: g ? "password" : "text",
              onKeyDown: h,
              value: n,
              style: {
                paddingLeft: c ? u : "",
                paddingRight: d ? 47 : ""
              },
              placeholder: s,
              className: i().inputWrapperInput,
              onChange: t,
              ...p,
              ref: m
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
          return v
        },
        handleClientScriptLoad: function() {
          return g
        },
        initScriptLoader: function() {
          return x
        }
      };
      for (var a in r) Object.defineProperty(t, a, {
        enumerable: !0,
        get: r[a]
      });
      let s = n(73623),
        i = n(66388),
        o = n(95155),
        l = s._(n(47650)),
        c = i._(n(12115)),
        u = n(75368),
        d = n(3584),
        h = n(28356),
        f = new Map,
        p = new Set,
        m = e => {
          let {
            src: t,
            id: n,
            onLoad: r = () => {},
            onReady: a = null,
            dangerouslySetInnerHTML: s,
            children: i = "",
            strategy: o = "afterInteractive",
            onError: c,
            stylesheets: u
          } = e, h = n || t;
          if (h && p.has(h)) return;
          if (f.has(t)) {
            p.add(h), f.get(t).then(r, c);
            return
          }
          let m = () => {
              a && a(), p.add(h)
            },
            g = document.createElement("script"),
            x = new Promise((e, t) => {
              g.addEventListener("load", function(t) {
                e(), r && r.call(this, t), m()
              }), g.addEventListener("error", function(e) {
                t(e)
              })
            }).catch(function(e) {
              c && c(e)
            });
          s ? (g.innerHTML = s.__html || "", m()) : i ? (g.textContent = "string" == typeof i ? i : Array.isArray(i) ? i.join("") : "", m()) : t && (g.src = t, f.set(t, x)), (0, d.setAttributesFromProps)(g, e), "worker" === o && g.setAttribute("type", "text/partytown"), g.setAttribute("data-nscript", o), u && (e => {
            if (l.default.preinit) return e.forEach(e => {
              l.default.preinit(e, {
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
          })(u), document.body.appendChild(g)
        };

      function g(e) {
        let {
          strategy: t = "afterInteractive"
        } = e;
        "lazyOnload" === t ? window.addEventListener("load", () => {
          (0, h.requestIdleCallback)(() => m(e))
        }) : m(e)
      }

      function x(e) {
        e.forEach(g), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
          let t = e.id || e.getAttribute("src");
          p.add(t)
        })
      }

      function _(e) {
        let {
          id: t,
          src: n = "",
          onLoad: r = () => {},
          onReady: a = null,
          strategy: s = "afterInteractive",
          onError: i,
          stylesheets: d,
          ...f
        } = e, {
          updateScripts: g,
          scripts: x,
          getIsSsr: _,
          appDir: v,
          nonce: w
        } = (0, c.useContext)(u.HeadManagerContext);
        w = f.nonce || w;
        let j = (0, c.useRef)(!1);
        (0, c.useEffect)(() => {
          let e = t || n;
          j.current || (a && e && p.has(e) && a(), j.current = !0)
        }, [a, t, n]);
        let y = (0, c.useRef)(!1);
        if ((0, c.useEffect)(() => {
            if (!y.current) {
              if ("afterInteractive" === s) m(e);
              else "lazyOnload" === s && ("complete" === document.readyState ? (0, h.requestIdleCallback)(() => m(e)) : window.addEventListener("load", () => {
                (0, h.requestIdleCallback)(() => m(e))
              }));
              y.current = !0
            }
          }, [e, s]), ("beforeInteractive" === s || "worker" === s) && (g ? (x[s] = (x[s] || []).concat([{
            id: t,
            src: n,
            onLoad: r,
            onReady: a,
            onError: i,
            ...f,
            nonce: w
          }]), g(x)) : _ && _() ? p.add(t || n) : _ && !_() && m({
            ...e,
            nonce: w
          })), v) {
          if (d && d.forEach(e => {
              l.default.preinit(e, {
                as: "style"
              })
            }), "beforeInteractive" === s)
            if (!n) return f.dangerouslySetInnerHTML && (f.children = f.dangerouslySetInnerHTML.__html, delete f.dangerouslySetInnerHTML), (0, o.jsx)("script", {
              nonce: w,
              dangerouslySetInnerHTML: {
                __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([0,{...f,id:t}])})`
              }
            });
            else return l.default.preload(n, f.integrity ? {
              as: "script",
              integrity: f.integrity,
              nonce: w,
              crossOrigin: f.crossOrigin
            } : {
              as: "script",
              nonce: w,
              crossOrigin: f.crossOrigin
            }), (0, o.jsx)("script", {
              nonce: w,
              dangerouslySetInnerHTML: {
                __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([n,{...f,id:t}])})`
              }
            });
          "afterInteractive" === s && n && l.default.preload(n, f.integrity ? {
            as: "script",
            integrity: f.integrity,
            nonce: w,
            crossOrigin: f.crossOrigin
          } : {
            as: "script",
            nonce: w,
            crossOrigin: f.crossOrigin
          })
        }
        return null
      }
      Object.defineProperty(_, "__nextScript", {
        value: !0
      });
      let v = _;
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    45619: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 91652))
    },
    57776: (e, t, n) => {
      "use strict";
      n.d(t, {
        A: () => l
      });
      var r = n(95155),
        a = n(12115),
        s = n(47650),
        i = n(5585),
        o = n.n(i);

      function l({
        opened: e,
        onClose: t,
        onOverlayClose: n,
        onCloseButtonClick: i,
        onEscapeClose: l,
        title: c,
        centered: u = !0,
        size: d = "auto",
        closeOnOverlayClick: h = !0,
        withCloseButton: f = !0,
        centerTitle: p = !1,
        className: m,
        bodyClassName: g,
        children: x
      }) {
        let [_, v] = (0, a.useState)(e), [w, j] = (0, a.useState)(!1), [y, b] = (0, a.useState)(null), N = (0, a.useRef)(null), C = (0, a.useRef)(null), S = (0, a.useRef)(null), k = (0, a.useRef)(!1), T = e => {
          if (!e) return !1;
          let t = window.getComputedStyle(e).overflowY;
          return e.scrollHeight > e.clientHeight + 1 && ("auto" === t || "scroll" === t)
        }, L = e => {
          let t = C.current;
          if (!t || !e) return null;
          let n = e;
          for (; n && t.contains(n);) {
            if (T(n)) return n;
            n = n.parentElement
          }
          return null
        }, U = (e, t) => t < 0 ? e.scrollTop > 0 : !(t > 0) || e.scrollTop + e.clientHeight < e.scrollHeight;
        if ((0, a.useEffect)(() => {
            if (e) {
              v(!0), j(!1);
              return
            }
            return j(!0), N.current = setTimeout(() => {
              v(!1), j(!1)
            }, 180), () => {
              N.current && (clearTimeout(N.current), N.current = null)
            }
          }, [e]), (0, a.useEffect)(() => {
            if ("undefined" == typeof document) return;
            let e = document.createElement("div");
            return document.body.appendChild(e), b(e), () => {
              document.body.removeChild(e), b(null)
            }
          }, []), (0, a.useEffect)(() => {
            if (!_) return;
            let e = e => {
                "Escape" === e.key ? l ? l() : t() : ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(e.key) && !C.current?.contains(e.target) && e.preventDefault()
              },
              n = e => {
                let t = C.current;
                if (!t) return void e.preventDefault();
                let n = e.target;
                if (!(n && t.contains(n))) return void e.preventDefault();
                if (e instanceof WheelEvent) {
                  let t = L(n);
                  t && U(t, e.deltaY) || e.preventDefault();
                  return
                }
                if (e instanceof TouchEvent) {
                  let t = e.touches[0]?.clientY ?? null,
                    r = S.current;
                  S.current = t;
                  let a = L(n);
                  a && U(a, null !== r && null !== t ? r - t : 0) || e.preventDefault()
                }
              },
              r = {
                passive: !1
              };
            return window.addEventListener("keydown", e, {
              passive: !1
            }), window.addEventListener("wheel", n, r), window.addEventListener("touchmove", n, r), () => {
              window.removeEventListener("keydown", e), window.removeEventListener("wheel", n, r), window.removeEventListener("touchmove", n, r)
            }
          }, [U, L, t, l, _]), (0, a.useEffect)(() => {
            if (!_) return;
            let e = e => {
              if (!C.current?.contains(e.target)) {
                S.current = null;
                return
              }
              S.current = e.touches[0]?.clientY ?? null
            };
            return window.addEventListener("touchstart", e, {
              passive: !0
            }), () => window.removeEventListener("touchstart", e)
          }, [_]), !_ || !y) return null;
        let E = "number" == typeof d ? `${d}px` : d,
          q = {};
        E && "auto" !== E ? q.maxWidth = E : (q.width = "fit-content", q.maxWidth = "clamp(100%, 100%, 850px)", q.boxSizing = "border-box");
        let A = w ? "closing" : "open",
          G = (0, r.jsx)("div", {
            className: o().overlay,
            "data-centered": u,
            "data-state": A,
            onMouseDown: e => {
              k.current = e.target === e.currentTarget
            },
            onClick: e => {
              let r = e.target === e.currentTarget,
                a = h && r && k.current;
              k.current = !1, a && (n ? n() : t())
            },
            children: (0, r.jsxs)("div", {
              className: `${o().modal} ${m??""}`,
              "data-state": A,
              style: q,
              ref: C,
              onClick: e => e.stopPropagation(),
              children: [(c || f) && (0, r.jsxs)("div", {
                className: o().header,
                children: [c && (0, r.jsx)("h2", {
                  className: o().title,
                  style: p ? {
                    textAlign: "center",
                    width: "100%"
                  } : {},
                  children: c
                }), f && (0, r.jsx)("button", {
                  type: "button",
                  className: o().closeButton,
                  onClick: i ?? t,
                  children: (0, r.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1em",
                    height: "1em",
                    viewBox: "7.43 7.45 9.15 9.15",
                    children: (0, r.jsx)("path", {
                      fill: "currentColor",
                      d: "m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"
                    })
                  })
                })]
              }), (0, r.jsx)("div", {
                className: `${o().body} ${g??""}`,
                children: x
              })]
            })
          });
        return (0, s.createPortal)(G, y)
      }
    },
    65596: (e, t, n) => {
      "use strict";
      n.d(t, {
        default: () => a.a
      });
      var r = n(42593),
        a = n.n(r)
    },
    81934: (e, t, n) => {
      "use strict";
      n.d(t, {
        A: () => o
      });
      var r = n(95155),
        a = n(98500),
        s = n.n(a),
        i = n(96351);

      function o({
        href: e,
        asTag: t,
        locale: n,
        children: a,
        ...o
      }) {
        let l = n || (0, i.useLang)();
        if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) return t ? (0, r.jsx)("a", {
          href: e,
          ...o,
          children: a
        }) : (0, r.jsx)(s(), {
          href: e,
          ...o,
          children: a
        });
        let c = "en" == l ? `${e.startsWith("/")?"":"/"}${e}` : `/${l}${e.startsWith("/")?"":"/"}${e}`;
        return t ? (0, r.jsx)("a", {
          href: c,
          ...o,
          children: a
        }) : (0, r.jsx)(s(), {
          href: c,
          ...o,
          children: a
        })
      }
    },
    91652: (e, t, n) => {
      "use strict";
      n.d(t, {
        default: () => C
      });
      var r = n(95155),
        a = n(12115),
        s = n(9569),
        i = n.n(s);
      let o = {
        mfaToken: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            d: "M9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6zm9 15q-2.075 0-3.537-1.463T13 18q0-2.075 1.463-3.537T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23m1.65-2.65l.7-.7l-1.85-1.85V15h-1v3.2zM12.25 22H6q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v1.3q-.5-.175-1-.238T18 11q-2.925 0-4.962 2.038T11 18q0 1.075.338 2.088T12.25 22"
          })
        }),
        discord: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            d: "M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"
          })
        }),
        email: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            d: "M13.425 11.9q.275.2.575.2t.575-.2L21 7.425V5l-7 4.85L7 5v2.425zM3 21q-.825 0-1.412-.587T1 19V7.5q0-.425.288-.712T2 6.5q.425 0 .713.288T3 7.5V19h15.5q.425 0 .713.288T19.5 20q0 .425-.288.713T18.5 21zm4-4q-.825 0-1.412-.587T5 15V5q0-.825.588-1.412T7 3h14q.825 0 1.413.588T23 5v10q0 .825-.587 1.413T21 17z"
          })
        }),
        password: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 256 256",
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            d: "M160 16a80.07 80.07 0 0 0-76.09 104.78l-57.57 57.56A8 8 0 0 0 24 184v40a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 5.66-2.34l9.56-9.57A80 80 0 1 0 160 16m20 76a16 16 0 1 1 16-16a16 16 0 0 1-16 16"
          })
        }),
        loading: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, r.jsxs)("g", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeWidth: "2",
            children: [(0, r.jsx)("path", {
              strokeDasharray: "60",
              strokeDashoffset: "60",
              strokeOpacity: ".3",
              d: "M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z",
              children: (0, r.jsx)("animate", {
                fill: "freeze",
                attributeName: "stroke-dashoffset",
                dur: "1.3s",
                values: "60;0"
              })
            }), (0, r.jsxs)("path", {
              strokeDasharray: "15",
              strokeDashoffset: "15",
              d: "M12 3C16.9706 3 21 7.02944 21 12",
              children: [(0, r.jsx)("animate", {
                fill: "freeze",
                attributeName: "stroke-dashoffset",
                dur: "0.3s",
                values: "15;0"
              }), (0, r.jsx)("animateTransform", {
                attributeName: "transform",
                dur: "1.5s",
                repeatCount: "indefinite",
                type: "rotate",
                values: "0 12 12;360 12 12"
              })]
            })]
          })
        }),
        newLocation: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            d: "M12 2c3.31 0 6 2.66 6 5.95C18 12.41 12 19 12 19S6 12.41 6 7.95C6 4.66 8.69 2 12 2m0 4a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m8 13c0 2.21-3.58 4-8 4s-8-1.79-8-4c0-1.29 1.22-2.44 3.11-3.17l.64.91C6.67 17.19 6 17.81 6 18.5c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5c0-.69-.67-1.31-1.75-1.76l.64-.91C18.78 16.56 20 17.71 20 19"
          })
        }),
        mfaRecoveryCode: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            d: "M16.75 8c0-1.478-.33-2.901-1.107-3.975c-.8-1.107-2.03-1.775-3.643-1.775s-2.842.668-3.643 1.775C7.58 5.099 7.25 6.522 7.25 8v1.25h-.58c-.535 0-.98 0-1.345.03c-.38.031-.736.098-1.073.27a2.75 2.75 0 0 0-1.202 1.202c-.172.337-.24.694-.27 1.074c-.03.364-.03.81-.03 1.344v4.66c0 .535 0 .98.03 1.345c.03.38.098.737.27 1.074a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.239 1.073.27c.365.03.81.03 1.345.03h10.66c.535 0 .98 0 1.345-.03c.38-.031.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.202c.172-.337.24-.694.27-1.074c.03-.364.03-.81.03-1.344V13.17c0-.534 0-.98-.03-1.344c-.03-.38-.098-.737-.27-1.074a2.75 2.75 0 0 0-1.2-1.202c-.338-.172-.694-.239-1.074-.27c-.365-.03-.81-.03-1.345-.03h-.58zm-8 0c0-1.283.29-2.36.822-3.096c.51-.703 1.28-1.154 2.428-1.154s1.919.45 2.428 1.154c.532.736.822 1.813.822 3.096v1.25h-6.5zm4 7.25v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 1.5 0M16 14.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75m-7.25.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 1.5 0"
          })
        })
      };
      var l = n(37897);
      async function c(e, t, n, r, a, s, i, l) {
        try {
          s(o.loading), a("");
          let l = JSON.stringify({
              email: e,
              password: t,
              token: n,
              captchaProvider: r
            }),
            c = await fetch("https://guns.lol/api/auth/login", {
              method: "POST",
              body: l
            }),
            u = await c.json();
          if (c.ok) {
            if (u.newLocation) return i(u.resendToken), "newLocation";
            if (u.mfa) return "mfa";
            return 200
          }
          a(u.error)
        } catch (e) {
          return console.error(e.message), !1
        } finally {
          s(l("auth.login.login_text"))
        }
      }
      async function u(e, t, n, r, a, s, i) {
        try {
          s(o.loading), a("");
          let i = JSON.stringify({
              email: e,
              password: t,
              newLocationOTP: n,
              trustDevice: r
            }),
            l = await fetch("https://guns.lol/api/auth/login", {
              method: "POST",
              body: i
            }),
            c = await l.json();
          if (l.ok)
            if (c.mfa) return "mfa";
            else return 200;
          a(c.error)
        } catch (e) {
          return console.error(e.message), !1
        } finally {
          s(i("auth.login.submit_text"))
        }
      }
      async function d(e, t, n, r, a, s, i, l, c) {
        try {
          l(o.loading), i("");
          let c = JSON.stringify({
              email: e,
              password: t,
              mfaToken: n,
              trustDevice: a,
              newLocationOTP: r,
              useRecoveryCodes: s
            }),
            u = await fetch("https://guns.lol/api/auth/login", {
              method: "POST",
              body: c
            }),
            d = await u.json();
          if (u.ok) return 200;
          i(d.error)
        } catch (e) {
          return console.error(e.message), !1
        } finally {
          l(c("auth.login.submit_text"))
        }
      }
      var h = n(73321),
        f = n(65596),
        p = n(41272),
        m = n(81934),
        g = n(96351),
        x = n(57776);

      function _({
        setNewLocation: e,
        setMfa: t,
        email: n,
        setEmail: s,
        password: u,
        setPassword: d,
        error: _,
        setError: v,
        text: w,
        setText: j,
        setResendToken: y
      }) {
        let b = (0, g.kj)(),
          N = (0, h.useSearchParams)().get("returnUri"),
          C = "https://guns.lol",
          S = ((e, t) => {
            if (!e) return "/account";
            let n = e;
            try {
              n = decodeURIComponent(e)
            } catch {
              n = e
            }
            if (!(n = n.trim()).startsWith("/") || n.startsWith("//") || n.startsWith("/\\") || n.includes("\\")) return "/account";
            try {
              let e = new URL(n, t);
              if (e.origin !== t) return "/account";
              return e.pathname + e.search + e.hash
            } catch {
              return "/account"
            }
          })(N, C),
          k = `${C}${S}`,
          [T, L] = (0, a.useState)(!1),
          [U, E] = (0, a.useState)("turnstile"),
          q = (0, a.useRef)(null);
        async function A(e) {
          P(e)
        }
        async function G(e) {
          ["100", "110500", "200500", "300", "600"].some(t => e.startsWith(t)) ? E("hcaptcha") : (v(b("auth.login.invalid_captcha", {
            code: e
          })), L(!1))
        }
        let O = e => {
            "Enter" === e.key && (e.preventDefault(), M())
          },
          P = async r => {
            L(!1);
            let a = await c(n, u, r, U, v, j, y, b);
            "newLocation" === a ? (v(""), e(!0)) : "mfa" === a ? (v(""), t(!0)) : a && 200 === a && (location.href = k)
          }, D = async () => {
            try {
              let e = new URLSearchParams({
                  returnUri: k
                }),
                t = await fetch(`https://guns.lol/api/auth/discord/url?${e.toString()}`);
              if (!t.ok) return void v(b("auth.login.unknown_error"));
              let n = await t.json(),
                r = `https://discord.com/api/oauth2/authorize?client_id=1140632236509642882&response_type=code&state=${encodeURIComponent(n.state)}&redirect_uri=${encodeURIComponent("https://guns.lol/api/auth/login")}&scope=identify`;
              window.open(r, "_self")
            } catch {
              v(b("auth.login.unknown_error"))
            }
          };
        (0, a.useEffect)(() => {
          Object.assign(window, {
            getToken: A,
            handleError: G
          })
        }, []);
        let M = () => {
          L(!0), setTimeout(() => {
            "turnstile" in window && window.turnstile.render(".cf-turnstile", {
              sitekey: "0x4AAAAAAAiZlunD1XPEsBtZ",
              "error-callback": G,
              callback: A
            })
          }, 100)
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(f.default, {
            strategy: "afterInteractive",
            src: "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",
            id: "_turnstilelogin"
          }), (0, r.jsx)(x.A, {
            opened: T,
            centerTitle: !0,
            centered: !0,
            withCloseButton: !1,
            onClose: () => L(!1),
            title: b("auth.login.verifying_request"),
            children: (0, r.jsx)("div", {
              className: i().captchaWrapper,
              children: "turnstile" === U ? (0, r.jsx)("div", {
                className: "cf-turnstile"
              }) : (0, r.jsx)(p.A, {
                sitekey: "07967ca6-9d90-4236-8880-69ca1edc6bee",
                onVerify: e => A(e),
                theme: "dark",
                ref: q
              })
            })
          }), (0, r.jsx)("div", {
            className: i().loginContainerWrapper,
            children: (0, r.jsxs)("div", {
              className: i().loginContainer,
              children: [(0, r.jsxs)("div", {
                className: i().logoContainer,
                children: [(0, r.jsx)(m.A, {
                  href: "/",
                  className: "flex",
                  children: (0, r.jsx)("img", {
                    src: "https://assets.guns.lol/guns_logo_no_background_cropped.png",
                    alt: ""
                  })
                }), (0, r.jsx)("h1", {
                  children: b("auth.login.login_account_text")
                })]
              }), (0, r.jsxs)("div", {
                className: i().loginOptions,
                children: [(0, r.jsxs)("span", {
                  className: i().discordLogin,
                  onClick: D,
                  children: [o.discord, " ", b("auth.login.discord")]
                }), (0, r.jsx)("div", {
                  className: i().loginSeperator,
                  children: (0, r.jsx)("span", {
                    children: b("auth.login.email_option")
                  })
                }), (0, r.jsxs)("div", {
                  className: i().emailLogin,
                  children: [(0, r.jsx)(l.A, {
                    featureName: b("auth.login.email_input_text"),
                    value: n,
                    onKeyPress: O,
                    onChangeFunction: e => {
                      s(e.target.value.trim())
                    },
                    placeholder: b("auth.login.email_input_text"),
                    icon: o.email
                  }), (0, r.jsxs)("div", {
                    className: i().forgotPassword,
                    children: [(0, r.jsx)(l.A, {
                      featureName: b("auth.login.password_input_text"),
                      value: u,
                      onChangeFunction: e => {
                        d(e.target.value)
                      },
                      placeholder: b("auth.login.password_input_text"),
                      icon: o.password,
                      onKeyPress: O,
                      viewPassword: !0
                    }), (0, r.jsx)(m.A, {
                      href: "/reset",
                      children: b("auth.login.forgot_password")
                    })]
                  }), "" !== _ && (0, r.jsx)("div", {
                    className: i().errorContainer,
                    children: (0, r.jsx)("span", {
                      children: _
                    })
                  }), (0, r.jsxs)("div", {
                    className: i().loginButtonContainer,
                    children: [(0, r.jsx)("span", {
                      className: i().loginButton,
                      onClick: () => {
                        (v(""), "" === n || "" === u) ? v(b("auth.login.missing_fields_error")): /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n) ? M() : v(b("auth.login.invalid_email_address"))
                      },
                      children: w
                    }), (0, r.jsx)("span", {
                      children: b("auth.login.signup_text", {
                        signup: (0, r.jsx)(m.A, {
                          href: "/register?ref=login",
                          children: b("auth.login.signup_text_link")
                        })
                      })
                    })]
                  })]
                })]
              })]
            })
          })]
        })
      }

      function v({
        email: e,
        password: t,
        error: n,
        setError: s,
        mfaText: c,
        setMfaText: u,
        mfaCode: f,
        setMfaCode: p,
        newLocationCode: x,
        trustDevice: _
      }) {
        let v = (0, g.kj)(),
          w = (0, h.useSearchParams)().get("returnUri"),
          j = "https://guns.lol",
          y = ((e, t) => {
            if (!e) return "/account";
            let n = e;
            try {
              n = decodeURIComponent(e)
            } catch {
              n = e
            }
            if (!(n = n.trim()).startsWith("/") || n.startsWith("//") || n.startsWith("/\\") || n.includes("\\")) return "/account";
            try {
              let e = new URL(n, t);
              if (e.origin !== t) return "/account";
              return e.pathname + e.search + e.hash
            } catch {
              return "/account"
            }
          })(w, j),
          b = `${j}${y}`,
          [N, C] = (0, a.useState)(!1),
          [S, k] = (0, a.useState)(""),
          T = e => {
            "Enter" === e.key && (e.preventDefault(), U())
          },
          L = e => {
            C(e), s(""), p(""), k("")
          },
          U = async () => {
            200 === await d(e, t, N ? S : f, x, _, N, s, u, v) && (location.href = b)
          };
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            className: i().loginContainerWrapper,
            children: (0, r.jsxs)("div", {
              className: i().loginContainer,
              children: [(0, r.jsxs)("div", {
                className: i().logoContainer,
                children: [(0, r.jsx)(m.A, {
                  href: "/",
                  className: "flex",
                  children: (0, r.jsx)("img", {
                    src: "https://assets.guns.lol/guns_logo_no_background_cropped.png",
                    alt: ""
                  })
                }), (0, r.jsx)("div", {
                  className: i().mfaDescription,
                  children: N ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("h1", {
                      children: v("auth.login.recovery_codes_title")
                    }), (0, r.jsx)("h3", {
                      children: v("auth.login.recovery_codes_description")
                    })]
                  }) : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("h1", {
                      children: v("auth.login.mfa_title")
                    }), (0, r.jsx)("h3", {
                      children: v("auth.login.mfa_description")
                    })]
                  })
                })]
              }), (0, r.jsxs)("div", {
                className: i().mfaGap,
                children: [N ? (0, r.jsx)(l.A, {
                  onKeyPress: T,
                  featureName: v("auth.login.recovery_code_text"),
                  onChangeFunction: e => {
                    k(e.target.value.trim())
                  },
                  value: S,
                  placeholder: v("auth.login.recovery_code_text"),
                  icon: o.mfaRecoveryCode
                }) : (0, r.jsx)(l.A, {
                  onKeyPress: T,
                  featureName: v("auth.login.mfa_text"),
                  onChangeFunction: e => {
                    p(e.target.value.trim())
                  },
                  value: f,
                  placeholder: v("auth.login.mfa_text"),
                  icon: o.mfaToken
                }), "" !== n && (0, r.jsx)("div", {
                  className: i().errorContainer,
                  children: (0, r.jsx)("span", {
                    children: n
                  })
                }), (0, r.jsx)("span", {
                  onClick: U,
                  className: i().mfaButton,
                  children: c
                }), N ? (0, r.jsx)("span", {
                  className: i().mfaSmalText,
                  onClick: () => L(!1),
                  children: v("auth.login.use_mfa_code")
                }) : (0, r.jsx)("span", {
                  className: i().mfaSmalText,
                  onClick: () => L(!0),
                  children: v("auth.login.use_recovery_codes")
                })]
              })]
            })
          })
        })
      }
      var w = n(66609),
        j = n(98241),
        y = n.n(j),
        b = n(54834);

      function N({
        email: e,
        password: t,
        error: n,
        setError: s,
        newLocationText: c,
        setNewLocationText: d,
        setMfa: f,
        setNewLocation: p,
        newLocationCode: _,
        setNewLocationCode: v,
        resendToken: j,
        setTrustDevice: N
      }) {
        let C = (0, g.kj)(),
          S = (0, h.useSearchParams)().get("returnUri"),
          k = "https://guns.lol",
          T = ((e, t) => {
            if (!e) return "/account";
            let n = e;
            try {
              n = decodeURIComponent(e)
            } catch {
              n = e
            }
            if (!(n = n.trim()).startsWith("/") || n.startsWith("//") || n.startsWith("/\\") || n.includes("\\")) return "/account";
            try {
              let e = new URL(n, t);
              if (e.origin !== t) return "/account";
              return e.pathname + e.search + e.hash
            } catch {
              return "/account"
            }
          })(S, k),
          L = `${k}${T}`,
          [U, E] = (0, a.useState)(!1),
          [q, A] = (0, a.useState)(!1),
          G = async n => {
            let r = await u(e, t, _, n, s, d, C);
            "mfa" === r ? (E(!0), setTimeout(function() {
              f(!0), s(""), E(!1), p(!1)
            }, 1e3)) : 200 === r && (location.href = L)
          }, O = async () => {
            let e = await fetch("https://guns.lol/api/auth/resend", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  type: "otp",
                  token: j
                })
              }),
              t = await e.json();
            200 === e.status ? w.oR.success(C("auth.login.email_sent")) : w.oR.error(t.error)
          };
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(x.A, {
            opened: q,
            onClose: () => A(!1),
            title: C("auth.login.quick_login"),
            centered: !0,
            size: "auto",
            children: (0, r.jsxs)("div", {
              className: i().trustDeviceContainer,
              children: [(0, r.jsxs)("div", {
                className: i().trustDeviceText,
                children: [(0, r.jsx)("h1", {
                  children: C("auth.login.trust_browser_title")
                }), (0, r.jsx)("h3", {
                  children: C("auth.login.trust_browser_description")
                })]
              }), (0, r.jsxs)("span", {
                className: i().trustDeviceButtons,
                children: [(0, r.jsx)("span", {
                  className: i().trustDeviceButton,
                  onClick: () => {
                    A(!1), G(!0), N(!0)
                  },
                  children: C("auth.login.trust_browser_accept")
                }), (0, r.jsx)("span", {
                  className: i().trustDeviceButton,
                  onClick: () => {
                    A(!1), G(!1), N(!1)
                  },
                  children: C("auth.login.trust_browser_decline")
                })]
              })]
            })
          }), (0, r.jsx)(w.l$, {
            richColors: !0,
            position: "top-center",
            theme: "dark",
            className: y().toasterStyles,
            icons: {
              success: b.A.successToast
            },
            visibleToasts: 2
          }), (0, r.jsx)("div", {
            className: i().loginContainerWrapper,
            children: (0, r.jsx)("div", {
              className: i().loginContainer,
              children: U ? (0, r.jsx)("div", {
                className: i().loginContainerLoading,
                children: o.loading
              }) : (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsxs)("div", {
                  className: i().logoContainer,
                  children: [(0, r.jsx)(m.A, {
                    href: "/",
                    className: "flex",
                    children: (0, r.jsx)("img", {
                      src: "https://assets.guns.lol/guns_logo_no_background_cropped.png",
                      alt: ""
                    })
                  }), (0, r.jsxs)("div", {
                    className: i().mfaDescription,
                    children: [(0, r.jsx)("h1", {
                      children: C("auth.login.new_location_title")
                    }), (0, r.jsx)("h3", {
                      children: C("auth.login.new_location_description")
                    })]
                  })]
                }), (0, r.jsxs)("div", {
                  className: i().mfaGap,
                  children: [(0, r.jsx)(l.A, {
                    featureName: C("auth.login.otp_text"),
                    onKeyPress: e => {
                      "Enter" === e.key && (e.preventDefault(), A(!0))
                    },
                    onChangeFunction: e => {
                      v(e.target.value.trim())
                    },
                    value: _,
                    placeholder: C("auth.login.otp"),
                    icon: o.newLocation
                  }), "" !== n && (0, r.jsx)("div", {
                    className: i().errorContainer,
                    children: (0, r.jsx)("span", {
                      children: n
                    })
                  }), (0, r.jsx)("span", {
                    onClick: () => A(!0),
                    className: i().newLocationButton,
                    children: c
                  }), (0, r.jsx)("span", {
                    className: i().resendEmail,
                    onClick: O,
                    children: C("auth.login.resend_email")
                  })]
                })]
              })
            })
          })]
        })
      }

      function C() {
        let e = (0, g.kj)(),
          [t, n] = (0, a.useState)(!1),
          [s, i] = (0, a.useState)(!1),
          [o, l] = (0, a.useState)(""),
          [c, u] = (0, a.useState)(""),
          [d, h] = (0, a.useState)(""),
          [f, p] = (0, a.useState)(e("auth.login.login_text")),
          [m, x] = (0, a.useState)(e("auth.login.submit_text")),
          [w, j] = (0, a.useState)(e("auth.login.submit_text")),
          [y, b] = (0, a.useState)(""),
          [C, S] = (0, a.useState)(""),
          [k, T] = (0, a.useState)(""),
          [L, U] = (0, a.useState)(!1);
        return (0, r.jsx)(r.Fragment, {
          children: s ? (0, r.jsx)(N, {
            email: o,
            password: c,
            error: d,
            setError: h,
            newLocationText: w,
            setNewLocationText: j,
            setMfa: n,
            setNewLocation: i,
            newLocationCode: C,
            setNewLocationCode: S,
            resendToken: k,
            setTrustDevice: U
          }) : t ? (0, r.jsx)(v, {
            email: o,
            password: c,
            error: d,
            setError: h,
            mfaText: m,
            setMfaText: x,
            mfaCode: y,
            setMfaCode: b,
            newLocationCode: C,
            trustDevice: L
          }) : (0, r.jsx)(_, {
            setMfa: n,
            email: o,
            setEmail: l,
            password: c,
            setPassword: u,
            error: d,
            setError: h,
            text: f,
            setText: p,
            setNewLocation: i,
            setResendToken: T
          })
        })
      }
    }
  },
  e => {
    e.O(0, [1806, 1268, 8500, 6609, 9056, 3200, 8441, 3794, 7358], () => e(e.s = 45619)), _N_E = e.O()
  }
]);