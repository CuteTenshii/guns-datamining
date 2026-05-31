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
        i = n(73321),
        o = n(72674),
        a = n.n(o),
        l = n(94345),
        u = n(38256);
      let c = {
        en: "English",
        es: "Espa\xf1ol",
        pt: "Portugu\xeas",
        fr: "Fran\xe7ais",
        de: "Deutsch",
        tr: "T\xfcrk\xe7e",
        ru: "Русский",
        ar: "العربية"
      };

      function d(e) {
        return e ? c[e] ?? e.toUpperCase() : ""
      }

      function f({
        activeLocale: e,
        preferredLocale: t,
        originalPath: n,
        originalSearch: o
      }) {
        let c = (0, u.kj)(),
          f = (0, u.KX)(),
          [m, p] = (0, s.useState)(!1),
          h = (0, i.usePathname)(),
          g = (0, i.useSearchParams)(),
          _ = (0, s.useMemo)(() => {
            var e;
            return (e = h ?? n ?? "/") && "" !== e ? e.startsWith("/") ? e : `/${e}` : "/"
          }, [h, n]),
          w = (0, s.useMemo)(() => {
            let e = (0, l.KM)(_, f);
            return "" === e ? "/" : e
          }, [_, f]),
          y = (0, s.useMemo)(() => {
            let e = g?.toString?.() ?? "";
            return e && e.length > 0 ? `?${e}` : o ?? ""
          }, [g, o]),
          v = (0, s.useMemo)(() => t && f.includes(t) ? t : "en", [t, f]),
          b = (0, s.useMemo)(() => d(t), [t]),
          x = (0, s.useMemo)(() => d(e), [e]),
          k = (0, s.useMemo)(() => t && "en" !== t ? `/${t}${"/"===w?"":w}` : w, [t, w]),
          P = (0, s.useMemo)(() => c("common.language_notice.title", {
            preferred: b
          }, v), [v, b, c]),
          I = (0, s.useMemo)(() => c("common.language_notice.description", {
            current: x,
            preferred: b
          }, v), [v, x, b, c]),
          j = (0, s.useMemo)(() => c("common.language_notice.switch_button", {
            preferred: b
          }, v), [v, b, c]),
          C = (0, s.useMemo)(() => c("common.language_notice.use_current_button", {
            current: x
          }, v), [v, x, c]),
          S = (0, s.useMemo)(() => c("common.language_notice.dismiss_button", {
            current: x
          }, v), [v, x, c]),
          E = (0, s.useMemo)(() => `${k}${y}`, [k, y]),
          O = (0, s.useMemo)(() => `${_}${y}`, [_, y]);
        return t && t !== e && !m ? (0, r.jsxs)(r.Fragment, {
          children: [
            ["ar", "he", "fa", "ur"].includes(v) ? (0, r.jsx)("style", {
              children: `
                    .${a().wrapper} {
                        direction: rtl;
                    }
                    `
            }) : (0, r.jsx)("style", {
              children: `
                    .${a().wrapper} {
                        direction: ltr;
                    }
                    `
            }), "ru" === t ? (0, r.jsx)("style", {
              children: `
                    .${a().wrapper} * {
                        font-family: 'Onest', sans-serif !important;
                    }
                    `
            }) : (0, r.jsx)("style", {
              children: `
                        .${a().wrapper} * {
                            font-family: 'Satoshi', sans-serif !important;
                        }
                        `
            }), (0, r.jsxs)("div", {
              className: a().wrapper,
              children: [(0, r.jsx)("div", {
                className: a().title,
                children: P
              }), (0, r.jsx)("div", {
                className: a().description,
                children: I
              }), (0, r.jsxs)("div", {
                className: a().actions,
                children: [(0, r.jsx)("button", {
                  type: "button",
                  className: a().switchButton,
                  onClick: () => {
                    t && (0, l.xS)(t, {
                      redirect: E
                    })
                  },
                  children: j
                }), (0, r.jsx)("button", {
                  type: "button",
                  className: a().useCurrentButton,
                  onClick: () => {
                    e && (0, l.xS)(e, {
                      redirect: O
                    })
                  },
                  children: C
                }), (0, r.jsx)("button", {
                  type: "button",
                  className: a().dismissButton,
                  onClick: () => p(!0),
                  children: S
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
          return i
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
        i = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
          return clearTimeout(e)
        };
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    32864: (e, t, n) => {
      "use strict";
      n.d(t, {
        default: () => i
      });
      var r = n(12115),
        s = n(50768);
      let i = ({
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
          return y
        },
        handleClientScriptLoad: function() {
          return g
        },
        initScriptLoader: function() {
          return _
        }
      };
      for (var s in r) Object.defineProperty(t, s, {
        enumerable: !0,
        get: r[s]
      });
      let i = n(73623),
        o = n(66388),
        a = n(95155),
        l = i._(n(47650)),
        u = o._(n(12115)),
        c = n(75368),
        d = n(3584),
        f = n(28356),
        m = new Map,
        p = new Set,
        h = e => {
          let {
            src: t,
            id: n,
            onLoad: r = () => {},
            onReady: s = null,
            dangerouslySetInnerHTML: i,
            children: o = "",
            strategy: a = "afterInteractive",
            onError: u,
            stylesheets: c
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
            _ = new Promise((e, t) => {
              g.addEventListener("load", function(t) {
                e(), r && r.call(this, t), h()
              }), g.addEventListener("error", function(e) {
                t(e)
              })
            }).catch(function(e) {
              u && u(e)
            });
          i ? (g.innerHTML = i.__html || "", h()) : o ? (g.textContent = "string" == typeof o ? o : Array.isArray(o) ? o.join("") : "", h()) : t && (g.src = t, m.set(t, _)), (0, d.setAttributesFromProps)(g, e), "worker" === a && g.setAttribute("type", "text/partytown"), g.setAttribute("data-nscript", a), c && (e => {
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
          })(c), document.body.appendChild(g)
        };

      function g(e) {
        let {
          strategy: t = "afterInteractive"
        } = e;
        "lazyOnload" === t ? window.addEventListener("load", () => {
          (0, f.requestIdleCallback)(() => h(e))
        }) : h(e)
      }

      function _(e) {
        e.forEach(g), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
          let t = e.id || e.getAttribute("src");
          p.add(t)
        })
      }

      function w(e) {
        let {
          id: t,
          src: n = "",
          onLoad: r = () => {},
          onReady: s = null,
          strategy: i = "afterInteractive",
          onError: o,
          stylesheets: d,
          ...m
        } = e, {
          updateScripts: g,
          scripts: _,
          getIsSsr: w,
          appDir: y,
          nonce: v
        } = (0, u.useContext)(c.HeadManagerContext);
        v = m.nonce || v;
        let b = (0, u.useRef)(!1);
        (0, u.useEffect)(() => {
          let e = t || n;
          b.current || (s && e && p.has(e) && s(), b.current = !0)
        }, [s, t, n]);
        let x = (0, u.useRef)(!1);
        if ((0, u.useEffect)(() => {
            if (!x.current) {
              if ("afterInteractive" === i) h(e);
              else "lazyOnload" === i && ("complete" === document.readyState ? (0, f.requestIdleCallback)(() => h(e)) : window.addEventListener("load", () => {
                (0, f.requestIdleCallback)(() => h(e))
              }));
              x.current = !0
            }
          }, [e, i]), ("beforeInteractive" === i || "worker" === i) && (g ? (_[i] = (_[i] || []).concat([{
            id: t,
            src: n,
            onLoad: r,
            onReady: s,
            onError: o,
            ...m,
            nonce: v
          }]), g(_)) : w && w() ? p.add(t || n) : w && !w() && h({
            ...e,
            nonce: v
          })), y) {
          if (d && d.forEach(e => {
              l.default.preinit(e, {
                as: "style"
              })
            }), "beforeInteractive" === i)
            if (!n) return m.dangerouslySetInnerHTML && (m.children = m.dangerouslySetInnerHTML.__html, delete m.dangerouslySetInnerHTML), (0, a.jsx)("script", {
              nonce: v,
              dangerouslySetInnerHTML: {
                __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([0,{...m,id:t}])})`
              }
            });
            else return l.default.preload(n, m.integrity ? {
              as: "script",
              integrity: m.integrity,
              nonce: v,
              crossOrigin: m.crossOrigin
            } : {
              as: "script",
              nonce: v,
              crossOrigin: m.crossOrigin
            }), (0, a.jsx)("script", {
              nonce: v,
              dangerouslySetInnerHTML: {
                __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([n,{...m,id:t}])})`
              }
            });
          "afterInteractive" === i && n && l.default.preload(n, m.integrity ? {
            as: "script",
            integrity: m.integrity,
            nonce: v,
            crossOrigin: m.crossOrigin
          } : {
            as: "script",
            nonce: v,
            crossOrigin: m.crossOrigin
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
    50768: (e, t, n) => {
      "use strict";
      n.d(t, {
        R: () => m,
        s: () => p
      });
      let r = !1,
        s = [/loading chunk/i, /chunkloaderror/i, /chunk loading failed/i],
        i = ["chrome-extension:", "moz-extension:", "safari-extension:"],
        o = [/turnstile/i],
        a = e => !!e && i.some(t => e.startsWith(t)),
        l = e => !!e && i.some(t => e.includes(t)),
        u = e => !!e && s.some(t => t.test(e)),
        c = e => !!e && e.toLowerCase().includes("extension context invalidated"),
        d = e => {
          if (!e) return !1;
          let t = e.toLowerCase();
          return o.every(e => e.test(t))
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
              })(e) || u(e.message) || u(t?.message) || u(t?.name) || "Script error." === e.message && !n || a(n) || l(t?.stack) || c(e.message) || c(t?.message) || d(e.message) || d(t?.message) || f(e.message) || f(t?.message) || 0) return;
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
                if (e instanceof Error) return !!(u(e.message) || u(e.name) || l(e.stack) || c(e.message) || a(e.stack ?? "") || d(e.message) || f(e.message));
                if ("string" == typeof e) return u(e) || c(e) || d(e) || f(e);
                if ("object" == typeof e && "message" in e) {
                  let t = e.message;
                  if ("string" == typeof t) return u(t) || c(t) || d(t) || f(t)
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
            r = w(n ?? "/"),
            s = _("undefined" != typeof navigator ? navigator.userAgent ?? null : null),
            i = e.viewport ?? {
              width: window.innerWidth,
              height: window.innerHeight
            },
            o = {
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
            viewport: i,
            metadata: o
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
        }, _ = e => {
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
        }, w = e => {
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
        wrapper: "localePreferenceNotice_wrapper__12vSs",
        title: "localePreferenceNotice_title__InKNY",
        description: "localePreferenceNotice_description__Iet5n",
        actions: "localePreferenceNotice_actions__g7Txw",
        switchButton: "localePreferenceNotice_switchButton__E5C46",
        useCurrentButton: "localePreferenceNotice_useCurrentButton__xxV_r",
        dismissButton: "localePreferenceNotice_dismissButton__1tWCO"
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