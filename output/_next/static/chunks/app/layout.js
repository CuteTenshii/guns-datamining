(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7177], {
    7754: (e, t, n) => {
      "use strict";
      n.d(t, {
        default: () => s
      });
      var r = n(12115);

      function s() {
        return (0, r.useEffect)(() => {
          fetch("/api/ping", {
            method: "POST"
          })
        }, []), null
      }
    },
    9171: (e, t, n) => {
      "use strict";
      n.d(t, {
        default: () => f
      });
      var r = n(95155),
        s = n(12115),
        a = n(73321),
        i = n(72674),
        o = n.n(i),
        l = n(94345),
        u = n(38256);
      let d = {
        en: "English",
        es: "Espa\xf1ol",
        pt: "Portugu\xeas",
        fr: "Fran\xe7ais",
        de: "Deutsch",
        tr: "T\xfcrk\xe7e",
        ru: "Русский",
        ar: "العربية"
      };

      function c(e) {
        return e ? d[e] ?? e.toUpperCase() : ""
      }

      function f({
        activeLocale: e,
        preferredLocale: t,
        originalPath: n,
        originalSearch: i
      }) {
        let d = (0, u.kj)(),
          f = (0, u.KX)(),
          [m, p] = (0, s.useState)(!1),
          h = (0, a.usePathname)(),
          g = (0, a.useSearchParams)(),
          y = (0, s.useMemo)(() => {
            var e;
            return (e = h ?? n ?? "/") && "" !== e ? e.startsWith("/") ? e : `/${e}` : "/"
          }, [h, n]),
          b = (0, s.useMemo)(() => {
            let e = (0, l.KM)(y, f);
            return "" === e ? "/" : e
          }, [y, f]),
          w = (0, s.useMemo)(() => {
            let e = g?.toString?.() ?? "";
            return e && e.length > 0 ? `?${e}` : i ?? ""
          }, [g, i]),
          _ = (0, s.useMemo)(() => t && f.includes(t) ? t : "en", [t, f]),
          v = (0, s.useMemo)(() => c(t), [t]),
          x = (0, s.useMemo)(() => c(e), [e]),
          k = (0, s.useMemo)(() => t && "en" !== t ? `/${t}${"/"===b?"":b}` : b, [t, b]),
          S = (0, s.useMemo)(() => d("common.language_notice.title", {
            preferred: v
          }, _), [_, v, d]),
          j = (0, s.useMemo)(() => d("common.language_notice.description", {
            current: x,
            preferred: v
          }, _), [_, x, v, d]),
          I = (0, s.useMemo)(() => d("common.language_notice.switch_button", {
            preferred: v
          }, _), [_, v, d]),
          P = (0, s.useMemo)(() => d("common.language_notice.use_current_button", {
            current: x
          }, _), [_, x, d]),
          C = (0, s.useMemo)(() => d("common.language_notice.dismiss_button", {
            current: x
          }, _), [_, x, d]),
          E = (0, s.useMemo)(() => `${k}${w}`, [k, w]),
          M = (0, s.useMemo)(() => `${y}${w}`, [y, w]);
        return t && t !== e && !m ? (0, r.jsxs)(r.Fragment, {
          children: [
            ["ar", "he", "fa", "ur"].includes(_) ? (0, r.jsx)("style", {
              children: `
                    .${o().wrapper} {
                        direction: rtl;
                    }
                    `
            }) : (0, r.jsx)("style", {
              children: `
                    .${o().wrapper} {
                        direction: ltr;
                    }
                    `
            }), "ru" === t ? (0, r.jsx)("style", {
              children: `
                    .${o().wrapper} * {
                        font-family: 'Onest', sans-serif !important;
                    }
                    `
            }) : (0, r.jsx)("style", {
              children: `
                        .${o().wrapper} * {
                            font-family: 'Satoshi', sans-serif !important;
                        }
                        `
            }), (0, r.jsxs)("div", {
              className: o().wrapper,
              children: [(0, r.jsx)("div", {
                className: o().title,
                children: S
              }), (0, r.jsx)("div", {
                className: o().description,
                children: j
              }), (0, r.jsxs)("div", {
                className: o().actions,
                children: [(0, r.jsx)("button", {
                  type: "button",
                  className: o().switchButton,
                  onClick: () => {
                    t && (0, l.xS)(t, {
                      redirect: E
                    })
                  },
                  children: I
                }), (0, r.jsx)("button", {
                  type: "button",
                  className: o().useCurrentButton,
                  onClick: () => {
                    e && (0, l.xS)(e, {
                      redirect: M
                    })
                  },
                  children: P
                }), (0, r.jsx)("button", {
                  type: "button",
                  className: o().dismissButton,
                  onClick: () => p(!0),
                  children: C
                })]
              })]
            })
          ]
        }) : null
      }
    },
    28356: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = {
        cancelIdleCallback: function() {
          return a
        },
        requestIdleCallback: function() {
          return s
        }
      };
      for (var r in n) Object.defineProperty(t, r, {
        enumerable: !0,
        get: n[r]
      });
      let s = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
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
        a = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
          return clearTimeout(e)
        };
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    32864: (e, t, n) => {
      "use strict";
      n.d(t, {
        default: () => a
      });
      var r = n(12115),
        s = n(50768);
      let a = ({
        children: e
      }) => ((0, r.useEffect)(() => {
        (0, s.R)()
      }, []), e)
    },
    42593: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = {
        default: function() {
          return w
        },
        handleClientScriptLoad: function() {
          return g
        },
        initScriptLoader: function() {
          return y
        }
      };
      for (var s in r) Object.defineProperty(t, s, {
        enumerable: !0,
        get: r[s]
      });
      let a = n(73623),
        i = n(66388),
        o = n(95155),
        l = a._(n(47650)),
        u = i._(n(12115)),
        d = n(75368),
        c = n(3584),
        f = n(28356),
        m = new Map,
        p = new Set,
        h = e => {
          let {
            src: t,
            id: n,
            onLoad: r = () => {},
            onReady: s = null,
            dangerouslySetInnerHTML: a,
            children: i = "",
            strategy: o = "afterInteractive",
            onError: u,
            stylesheets: d
          } = e, f = n || t;
          if (f && p.has(f)) return;
          if (m.has(t)) {
            p.add(f), m.get(t).then(r, u);
            return
          }
          let h = () => {
              s && s(), p.add(f)
            },
            g = document.createElement("script"),
            y = new Promise((e, t) => {
              g.addEventListener("load", function(t) {
                e(), r && r.call(this, t), h()
              }), g.addEventListener("error", function(e) {
                t(e)
              })
            }).catch(function(e) {
              u && u(e)
            });
          a ? (g.innerHTML = a.__html || "", h()) : i ? (g.textContent = "string" == typeof i ? i : Array.isArray(i) ? i.join("") : "", h()) : t && (g.src = t, m.set(t, y)), (0, c.setAttributesFromProps)(g, e), "worker" === o && g.setAttribute("type", "text/partytown"), g.setAttribute("data-nscript", o), d && (e => {
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
          })(d), document.body.appendChild(g)
        };

      function g(e) {
        let {
          strategy: t = "afterInteractive"
        } = e;
        "lazyOnload" === t ? window.addEventListener("load", () => {
          (0, f.requestIdleCallback)(() => h(e))
        }) : h(e)
      }

      function y(e) {
        e.forEach(g), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
          let t = e.id || e.getAttribute("src");
          p.add(t)
        })
      }

      function b(e) {
        let {
          id: t,
          src: n = "",
          onLoad: r = () => {},
          onReady: s = null,
          strategy: a = "afterInteractive",
          onError: i,
          stylesheets: c,
          ...m
        } = e, {
          updateScripts: g,
          scripts: y,
          getIsSsr: b,
          appDir: w,
          nonce: _
        } = (0, u.useContext)(d.HeadManagerContext);
        _ = m.nonce || _;
        let v = (0, u.useRef)(!1);
        (0, u.useEffect)(() => {
          let e = t || n;
          v.current || (s && e && p.has(e) && s(), v.current = !0)
        }, [s, t, n]);
        let x = (0, u.useRef)(!1);
        if ((0, u.useEffect)(() => {
            if (!x.current) {
              if ("afterInteractive" === a) h(e);
              else "lazyOnload" === a && ("complete" === document.readyState ? (0, f.requestIdleCallback)(() => h(e)) : window.addEventListener("load", () => {
                (0, f.requestIdleCallback)(() => h(e))
              }));
              x.current = !0
            }
          }, [e, a]), ("beforeInteractive" === a || "worker" === a) && (g ? (y[a] = (y[a] || []).concat([{
            id: t,
            src: n,
            onLoad: r,
            onReady: s,
            onError: i,
            ...m,
            nonce: _
          }]), g(y)) : b && b() ? p.add(t || n) : b && !b() && h({
            ...e,
            nonce: _
          })), w) {
          if (c && c.forEach(e => {
              l.default.preinit(e, {
                as: "style"
              })
            }), "beforeInteractive" === a)
            if (!n) return m.dangerouslySetInnerHTML && (m.children = m.dangerouslySetInnerHTML.__html, delete m.dangerouslySetInnerHTML), (0, o.jsx)("script", {
              nonce: _,
              dangerouslySetInnerHTML: {
                __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([0,{...m,id:t}])})`
              }
            });
            else return l.default.preload(n, m.integrity ? {
              as: "script",
              integrity: m.integrity,
              nonce: _,
              crossOrigin: m.crossOrigin
            } : {
              as: "script",
              nonce: _,
              crossOrigin: m.crossOrigin
            }), (0, o.jsx)("script", {
              nonce: _,
              dangerouslySetInnerHTML: {
                __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([n,{...m,id:t}])})`
              }
            });
          "afterInteractive" === a && n && l.default.preload(n, m.integrity ? {
            as: "script",
            integrity: m.integrity,
            nonce: _,
            crossOrigin: m.crossOrigin
          } : {
            as: "script",
            nonce: _,
            crossOrigin: m.crossOrigin
          })
        }
        return null
      }
      Object.defineProperty(b, "__nextScript", {
        value: !0
      });
      let w = b;
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    50768: (e, t, n) => {
      "use strict";
      n.d(t, {
        R: () => m,
        s: () => p
      });
      let r = !1,
        s = [/loading chunk/i, /chunkloaderror/i, /chunk loading failed/i],
        a = ["chrome-extension:", "moz-extension:", "safari-extension:"],
        i = [/turnstile/i],
        o = e => !!e && a.some(t => e.startsWith(t)),
        l = e => !!e && a.some(t => e.includes(t)),
        u = e => !!e && s.some(t => t.test(e)),
        d = e => !!e && e.toLowerCase().includes("extension context invalidated"),
        c = e => {
          if (!e) return !1;
          let t = e.toLowerCase();
          return i.every(e => e.test(t))
        },
        f = e => {
          if (!e) return !1;
          let t = e.toLowerCase();
          return !!(t.includes("cannot read property 'document' of null") || t.includes("cannot read properties of null (reading 'document'") || t.includes("null is not an object") && t.includes("contentwindow.document") || t.includes("cannot prefetch") && t.includes("cannot be converted to a url") || t.includes("window.webkit.messagehandlers") || t.includes("failed to execute 'removechild' on 'node'") || t.includes("getresult is not defined"))
        },
        m = () => {
          r || (r = !0, window.addEventListener("error", e => {
            let t, n;
            if (t = e.error, n = e.filename ?? null, (e => {
                let t = e.target;
                if (!t || !("tagName" in t)) return !1;
                let n = t.tagName;
                return "SCRIPT" === n || "LINK" === n
              })(e) || u(e.message) || u(t?.message) || u(t?.name) || "Script error." === e.message && !n || o(n) || l(t?.stack) || d(e.message) || d(t?.message) || c(e.message) || c(t?.message) || f(e.message) || f(t?.message) || 0) return;
            let r = e.error;
            p({
              message: e.message ?? r?.message ?? "Unknown window error",
              name: r?.name ?? "Error",
              stack: r?.stack ?? null,
              severity: "error",
              componentStack: null,
              route: window.location.pathname,
              metadata: {
                filename: e.filename,
                lineno: e.lineno,
                colno: e.colno
              },
              tags: ["window_error"]
            })
          }), window.addEventListener("unhandledrejection", e => {
            let t = e.reason;
            if ((e => {
                if (!e) return !1;
                if (e instanceof Error) return !!(u(e.message) || u(e.name) || l(e.stack) || d(e.message) || o(e.stack ?? "") || c(e.message) || f(e.message));
                if ("string" == typeof e) return u(e) || d(e) || c(e) || f(e);
                if ("object" == typeof e && "message" in e) {
                  let t = e.message;
                  if ("string" == typeof t) return u(t) || d(t) || c(t) || f(t)
                }
                return !1
              })(t)) return;
            let n = t instanceof Error ? t : Error("string" == typeof t ? t : JSON.stringify(t, null, 2));
            p({
              message: n.message,
              name: n.name,
              stack: n.stack ?? null,
              severity: "error",
              route: window.location.pathname,
              metadata: {
                source: "unhandledrejection"
              },
              tags: ["unhandled_rejection"]
            })
          }))
        },
        p = async e => {
          let t, n = h(e);
          try {
            if (t = await fetch("/api/telemetry/errors", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(n),
                keepalive: !0
              }), 401 === t.status && (t = await fetch("/api/telemetry/errorsP", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(n),
                keepalive: !0
              })), !t.ok) return {
              eventId: null,
              errorId: null
            };
            let e = await t.json().catch(() => null);
            if (e && (e.eventId || e.errorId)) {
              let t = "string" == typeof e.eventId ? e.eventId : null,
                r = "string" == typeof e.errorId ? e.errorId : null;
              {
                let e = window;
                t && (e.__gunsLastTelemetryEventId = t), r && (e.__gunsLastTelemetryErrorId = r), window.dispatchEvent(new CustomEvent("guns:telemetry-event", {
                  detail: {
                    eventId: t,
                    errorId: r
                  }
                }))
              }
              return console.error(`[telemetry] error=${r??"none"} event=${t??"none"} route=${n.route}`), {
                eventId: t,
                errorId: r
              }
            }
          } catch (e) {
            console.warn("[telemetry] Failed to report error", e)
          }
          return {
            eventId: null,
            errorId: null
          }
        }, h = e => {
          let t = g(),
            n = e.route ?? window.location.pathname,
            r = b(n ?? "/"),
            s = y("undefined" != typeof navigator ? navigator.userAgent ?? null : null),
            a = e.viewport ?? {
              width: window.innerWidth,
              height: window.innerHeight
            },
            i = {
              ...e.metadata ?? {},
              ...s ? {
                environment: s
              } : {},
              rawRoute: n,
              normalizedRoute: r
            };
          return {
            ...e,
            href: t,
            route: r,
            viewport: a,
            metadata: i
          }
        }, g = () => {
          try {
            let {
              pathname: e
            } = window.location;
            return e || "/"
          } catch {
            return null
          }
        }, y = e => {
          if (!e) return null;
          let t = e.toLowerCase(),
            n = "unknown",
            r = "unknown",
            s = "desktop";
          return /edg\//.test(t) ? n = "edge" : /chrome\//.test(t) ? n = "chrome" : /safari\//.test(t) && !/chrome\//.test(t) ? n = "safari" : /firefox\//.test(t) ? n = "firefox" : /msie|trident/.test(t) && (n = "ie"), /windows nt/.test(t) ? r = "windows" : /mac os x/.test(t) ? r = "macos" : /android/.test(t) ? r = "android" : /iphone|ipad|ipod/.test(t) ? r = "ios" : /linux/.test(t) && (r = "linux"), /bot|crawler|spider|crawling/.test(t) ? s = "bot" : /ipad/.test(t) ? s = "tablet" : /iphone|android.+mobile/.test(t) && (s = "mobile"), {
            browser: n,
            os: r,
            device: s
          }
        }, b = e => {
          if (!e) return "/";
          let [t] = e.split(/[?#]/, 1), n = t.split("/").map(e => e ? /^[0-9]+$/.test(e) && e.length >= 3 ? ":int" : /^[0-9a-f]{16,}$/i.test(e) ? ":hex" : /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e) ? ":uuid" : /^[0-9a-z_-]{12,}$/i.test(e) ? ":id" : /^\d{4}-\d{2}-\d{2}$/.test(e) ? ":date" : e : e).join("/");
          return n.startsWith("/") ? n : `/${n}`
        }
    },
    53223: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 38256)), Promise.resolve().then(n.bind(n, 9171)), Promise.resolve().then(n.bind(n, 7754)), Promise.resolve().then(n.bind(n, 32864)), Promise.resolve().then(n.t.bind(n, 70063, 23)), Promise.resolve().then(n.t.bind(n, 42593, 23))
    },
    70063: () => {},
    72674: e => {
      e.exports = {
        wrapper: "GUNS__9d-bbd9800a-24fb22e9-0aa96b14",
        title: "GUNS__e1-5167b4be-583367eb-28cf4318",
        description: "GUNS__30-187b7e77-f8ea37de-b8af3d38",
        actions: "GUNS__dc-0d65eb0f-32241080-f6e7600e",
        switchButton: "GUNS__07-6c21bcb1-3055e714-d57cb0e2",
        useCurrentButton: "GUNS__2a-cb6fab95-d74c7e02-3f390d7b",
        dismissButton: "GUNS__10-5a62d54e-f98a37f7-2f702e1d"
      }
    },
    73321: (e, t, n) => {
      "use strict";
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
  },
  e => {
    e.O(0, [7020, 8256, 8441, 3794, 7358], () => e(e.s = 53223)), _N_E = e.O()
  }
]);