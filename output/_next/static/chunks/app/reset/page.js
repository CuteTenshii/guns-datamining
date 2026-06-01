(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7174], {
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
    28356: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = {
        cancelIdleCallback: function() {
          return s
        },
        requestIdleCallback: function() {
          return a
        }
      };
      for (var n in r) Object.defineProperty(t, n, {
        enumerable: !0,
        get: r[n]
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
    36321: e => {
      e.exports = {
        containerWrapper: "resetPassword_containerWrapper__aeL4w",
        container: "resetPassword_container__XGqBp",
        emailGap: "resetPassword_emailGap__IkVbR",
        containerButtons: "resetPassword_containerButtons__XkX_q",
        submitButton: "resetPassword_submitButton__5aVY2",
        captchaWrapper: "resetPassword_captchaWrapper__ab2iA"
      }
    },
    37897: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => o
      });
      var n = r(95155),
        a = r(12115),
        s = r(98241),
        l = r.n(s),
        i = r(54834);

      function o({
        featureName: e,
        onChangeFunction: t,
        value: r,
        placeholder: s,
        icon: o,
        prefix: u,
        prefixLength: c,
        viewPassword: d,
        onKeyPress: f,
        isImageUrl: p,
        type: h = "text",
        ...m
      }) {
        let [_, v] = (0, a.useState)(!!d);
        return (0, a.useEffect)(() => {
          v(!!d)
        }, [d]), (0, n.jsxs)("div", {
          className: l().inputContainerWrapper,
          "data-dashboard-feature-label": "string" == typeof e ? e : void 0,
          children: [e && (0, n.jsx)("h1", {
            className: l().featureName,
            children: e
          }), (0, n.jsxs)("div", {
            className: `${l().inputWrapperDiv} ${u&&l().inputWrapperURL}`,
            children: [(0, n.jsxs)("span", {
              className: l().inputWrapperSpan,
              style: {
                position: u ? "absolute" : "static"
              },
              children: [p ? (0, n.jsx)("img", {
                src: o,
                alt: "icon",
                className: l().inputWrapperIconImage
              }) : o, u && (0, n.jsx)("h1", {
                children: u
              })]
            }), d && (0, n.jsx)("p", {
              onClick: () => {
                v(!_)
              },
              children: _ ? i.A.hidePassword : i.A.views
            }), (0, n.jsx)("input", {
              autoCorrect: "false",
              type: d ? _ ? "password" : "text" : h,
              onKeyDown: f,
              value: r,
              style: {
                paddingLeft: u ? c : "",
                paddingRight: d ? 47 : ""
              },
              placeholder: s,
              className: l().inputWrapperInput,
              onChange: t,
              ...m
            })]
          })]
        })
      }
    },
    42593: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = {
        default: function() {
          return y
        },
        handleClientScriptLoad: function() {
          return _
        },
        initScriptLoader: function() {
          return v
        }
      };
      for (var a in n) Object.defineProperty(t, a, {
        enumerable: !0,
        get: n[a]
      });
      let s = r(73623),
        l = r(66388),
        i = r(95155),
        o = s._(r(47650)),
        u = l._(r(12115)),
        c = r(75368),
        d = r(3584),
        f = r(28356),
        p = new Map,
        h = new Set,
        m = e => {
          let {
            src: t,
            id: r,
            onLoad: n = () => {},
            onReady: a = null,
            dangerouslySetInnerHTML: s,
            children: l = "",
            strategy: i = "afterInteractive",
            onError: u,
            stylesheets: c
          } = e, f = r || t;
          if (f && h.has(f)) return;
          if (p.has(t)) {
            h.add(f), p.get(t).then(n, u);
            return
          }
          let m = () => {
              a && a(), h.add(f)
            },
            _ = document.createElement("script"),
            v = new Promise((e, t) => {
              _.addEventListener("load", function(t) {
                e(), n && n.call(this, t), m()
              }), _.addEventListener("error", function(e) {
                t(e)
              })
            }).catch(function(e) {
              u && u(e)
            });
          s ? (_.innerHTML = s.__html || "", m()) : l ? (_.textContent = "string" == typeof l ? l : Array.isArray(l) ? l.join("") : "", m()) : t && (_.src = t, p.set(t, v)), (0, d.setAttributesFromProps)(_, e), "worker" === i && _.setAttribute("type", "text/partytown"), _.setAttribute("data-nscript", i), c && (e => {
            if (o.default.preinit) return e.forEach(e => {
              o.default.preinit(e, {
                as: "style"
              })
            });
            {
              let t = document.head;
              e.forEach(e => {
                let r = document.createElement("link");
                r.type = "text/css", r.rel = "stylesheet", r.href = e, t.appendChild(r)
              })
            }
          })(c), document.body.appendChild(_)
        };

      function _(e) {
        let {
          strategy: t = "afterInteractive"
        } = e;
        "lazyOnload" === t ? window.addEventListener("load", () => {
          (0, f.requestIdleCallback)(() => m(e))
        }) : m(e)
      }

      function v(e) {
        e.forEach(_), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
          let t = e.id || e.getAttribute("src");
          h.add(t)
        })
      }

      function w(e) {
        let {
          id: t,
          src: r = "",
          onLoad: n = () => {},
          onReady: a = null,
          strategy: s = "afterInteractive",
          onError: l,
          stylesheets: d,
          ...p
        } = e, {
          updateScripts: _,
          scripts: v,
          getIsSsr: w,
          appDir: y,
          nonce: g
        } = (0, u.useContext)(c.HeadManagerContext);
        g = p.nonce || g;
        let x = (0, u.useRef)(!1);
        (0, u.useEffect)(() => {
          let e = t || r;
          x.current || (a && e && h.has(e) && a(), x.current = !0)
        }, [a, t, r]);
        let b = (0, u.useRef)(!1);
        if ((0, u.useEffect)(() => {
            if (!b.current) {
              if ("afterInteractive" === s) m(e);
              else "lazyOnload" === s && ("complete" === document.readyState ? (0, f.requestIdleCallback)(() => m(e)) : window.addEventListener("load", () => {
                (0, f.requestIdleCallback)(() => m(e))
              }));
              b.current = !0
            }
          }, [e, s]), ("beforeInteractive" === s || "worker" === s) && (_ ? (v[s] = (v[s] || []).concat([{
            id: t,
            src: r,
            onLoad: n,
            onReady: a,
            onError: l,
            ...p,
            nonce: g
          }]), _(v)) : w && w() ? h.add(t || r) : w && !w() && m({
            ...e,
            nonce: g
          })), y) {
          if (d && d.forEach(e => {
              o.default.preinit(e, {
                as: "style"
              })
            }), "beforeInteractive" === s)
            if (!r) return p.dangerouslySetInnerHTML && (p.children = p.dangerouslySetInnerHTML.__html, delete p.dangerouslySetInnerHTML), (0, i.jsx)("script", {
              nonce: g,
              dangerouslySetInnerHTML: {
                __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([0,{...p,id:t}])})`
              }
            });
            else return o.default.preload(r, p.integrity ? {
              as: "script",
              integrity: p.integrity,
              nonce: g,
              crossOrigin: p.crossOrigin
            } : {
              as: "script",
              nonce: g,
              crossOrigin: p.crossOrigin
            }), (0, i.jsx)("script", {
              nonce: g,
              dangerouslySetInnerHTML: {
                __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([r,{...p,id:t}])})`
              }
            });
          "afterInteractive" === s && r && o.default.preload(r, p.integrity ? {
            as: "script",
            integrity: p.integrity,
            nonce: g,
            crossOrigin: p.crossOrigin
          } : {
            as: "script",
            nonce: g,
            crossOrigin: p.crossOrigin
          })
        }
        return null
      }
      Object.defineProperty(w, "__nextScript", {
        value: !0
      });
      let y = w;
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    57776: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => o
      });
      var n = r(95155),
        a = r(12115),
        s = r(47650),
        l = r(5585),
        i = r.n(l);

      function o({
        opened: e,
        onClose: t,
        onOverlayClose: r,
        onCloseButtonClick: l,
        onEscapeClose: o,
        title: u,
        centered: c = !0,
        size: d = "auto",
        closeOnOverlayClick: f = !0,
        withCloseButton: p = !0,
        centerTitle: h = !1,
        className: m,
        bodyClassName: _,
        children: v
      }) {
        let [w, y] = (0, a.useState)(e), [g, x] = (0, a.useState)(!1), [b, j] = (0, a.useState)(null), E = (0, a.useRef)(null), C = (0, a.useRef)(null), k = (0, a.useRef)(null), P = (0, a.useRef)(!1), S = e => {
          if (!e) return !1;
          let t = window.getComputedStyle(e).overflowY;
          return e.scrollHeight > e.clientHeight + 1 && ("auto" === t || "scroll" === t)
        }, A = e => {
          let t = C.current;
          if (!t || !e) return null;
          let r = e;
          for (; r && t.contains(r);) {
            if (S(r)) return r;
            r = r.parentElement
          }
          return null
        }, L = (e, t) => t < 0 ? e.scrollTop > 0 : !(t > 0) || e.scrollTop + e.clientHeight < e.scrollHeight;
        if ((0, a.useEffect)(() => {
            if (e) {
              y(!0), x(!1);
              return
            }
            return x(!0), E.current = setTimeout(() => {
              y(!1), x(!1)
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
            if (!w) return;
            let e = e => {
                "Escape" === e.key ? o ? o() : t() : ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(e.key) && !C.current?.contains(e.target) && e.preventDefault()
              },
              r = e => {
                let t = C.current;
                if (!t) return void e.preventDefault();
                let r = e.target;
                if (!(r && t.contains(r))) return void e.preventDefault();
                if (e instanceof WheelEvent) {
                  let t = A(r);
                  t && L(t, e.deltaY) || e.preventDefault();
                  return
                }
                if (e instanceof TouchEvent) {
                  let t = e.touches[0]?.clientY ?? null,
                    n = k.current;
                  k.current = t;
                  let a = A(r);
                  a && L(a, null !== n && null !== t ? n - t : 0) || e.preventDefault()
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
          }, [L, A, t, o, w]), (0, a.useEffect)(() => {
            if (!w) return;
            let e = e => {
              if (!C.current?.contains(e.target)) {
                k.current = null;
                return
              }
              k.current = e.touches[0]?.clientY ?? null
            };
            return window.addEventListener("touchstart", e, {
              passive: !0
            }), () => window.removeEventListener("touchstart", e)
          }, [w]), !w || !b) return null;
        let I = "number" == typeof d ? `${d}px` : d,
          N = {};
        I && "auto" !== I ? N.maxWidth = I : (N.width = "fit-content", N.maxWidth = "clamp(100%, 100%, 850px)", N.boxSizing = "border-box");
        let W = g ? "closing" : "open",
          O = (0, n.jsx)("div", {
            className: i().overlay,
            "data-centered": c,
            "data-state": W,
            onMouseDown: e => {
              P.current = e.target === e.currentTarget
            },
            onClick: e => {
              let n = e.target === e.currentTarget,
                a = f && n && P.current;
              P.current = !1, a && (r ? r() : t())
            },
            children: (0, n.jsxs)("div", {
              className: `${i().modal} ${m??""}`,
              "data-state": W,
              style: N,
              ref: C,
              onClick: e => e.stopPropagation(),
              children: [(u || p) && (0, n.jsxs)("div", {
                className: i().header,
                children: [u && (0, n.jsx)("h2", {
                  className: i().title,
                  style: h ? {
                    textAlign: "center",
                    width: "100%"
                  } : {},
                  children: u
                }), p && (0, n.jsx)("button", {
                  type: "button",
                  className: i().closeButton,
                  onClick: l ?? t,
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
                className: `${i().body} ${_??""}`,
                children: v
              })]
            })
          });
        return (0, s.createPortal)(O, b)
      }
    },
    63855: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 75245))
    },
    65596: (e, t, r) => {
      "use strict";
      r.d(t, {
        default: () => a.a
      });
      var n = r(42593),
        a = r.n(n)
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
    75245: (e, t, r) => {
      "use strict";
      r.d(t, {
        default: () => m
      });
      var n = r(95155),
        a = r(12115),
        s = r(36321),
        l = r.n(s),
        i = r(98241),
        o = r.n(i),
        u = r(54834),
        c = r(37897),
        d = r(73321),
        f = r(65596),
        p = r(38256),
        h = r(57776);
      let m = function() {
        let e = (0, p.kj)(),
          t = (0, p.VJ)(),
          r = (0, d.useRouter)(),
          s = e("auth.reset.submit"),
          [i, m] = (0, a.useState)(""),
          [_, v] = (0, a.useState)(""),
          [w, y] = (0, a.useState)(s),
          [g, x] = (0, a.useState)(!1),
          b = async e => {
            try {
              y(u.A.loading), v("");
              let n = JSON.stringify({
                  email: i,
                  captcha: e
                }),
                a = await fetch("/api/reset/password/request", {
                  method: "POST",
                  body: n
                }),
                l = await a.json();
              a.ok ? r.push(t(`/sent?e=${btoa(i)}&d=pass&token=${l.resendToken}`)) : (v(l.error), y(s))
            } catch (e) {
              return console.error(e.message), !1
            } finally {
              y(s)
            }
          }, j = e => {
            x(!1), b(e)
          }, E = () => {
            v(e("auth.reset.error_captcha")), y(s)
          };
        return (0, a.useEffect)(() => {
          Object.assign(window, {
            getToken: j,
            handleError: E
          })
        }, []), (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(f.default, {
            strategy: "afterInteractive",
            src: "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",
            id: "_turnstilereset"
          }), (0, n.jsx)(h.A, {
            opened: g,
            centered: !0,
            withCloseButton: !1,
            onClose: () => x(!1),
            title: e("auth.reset.modal_title"),
            centerTitle: !0,
            children: (0, n.jsx)("div", {
              className: l().captchaWrapper,
              children: (0, n.jsx)("div", {
                className: "cf-turnstile"
              })
            })
          }), (0, n.jsx)("div", {
            className: l().containerWrapper,
            children: (0, n.jsxs)("div", {
              className: l().container,
              children: [(0, n.jsx)("h1", {
                children: e("auth.reset.title")
              }), (0, n.jsx)("h3", {
                children: e("auth.reset.description")
              }), (0, n.jsx)("div", {
                className: l().emailGap,
                children: (0, n.jsx)(c.A, {
                  featureName: e("auth.reset.email_label"),
                  value: i,
                  onChangeFunction: e => {
                    m(e.target.value)
                  },
                  icon: u.A.email,
                  placeholder: e("auth.reset.email_placeholder")
                })
              }), (0, n.jsxs)("div", {
                className: l().containerButtons,
                children: ["" !== _ && (0, n.jsx)("div", {
                  className: o().errorContainer,
                  children: (0, n.jsx)("span", {
                    children: _
                  })
                }), (0, n.jsx)("span", {
                  className: l().submitButton,
                  onClick: () => {
                    i ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(i).toLowerCase()) ? (x(!0), setTimeout(() => {
                      "turnstile" in window && window.turnstile.render(".cf-turnstile", {
                        sitekey: "0x4AAAAAACA_HYxWrLW67aLT",
                        "error-callback": E,
                        callback: j
                      })
                    }, 100)) : v(e("auth.reset.error_invalid_email")) : v(e("auth.reset.error_missing_email"))
                  },
                  children: w
                })]
              })]
            })
          })]
        })
      }
    }
  },
  e => {
    e.O(0, [6794, 8121, 8256, 5886, 8441, 3794, 7358], () => e(e.s = 63855)), _N_E = e.O()
  }
]);