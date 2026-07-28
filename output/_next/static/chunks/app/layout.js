(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7177], {
    7754: (e, t, n) => {
      "use strict";
      n.d(t, {
        default: () => i
      });
      var r = n(12115);

      function i() {
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
        i = n(12115),
        o = n(73321),
        a = n(72674),
        s = n.n(a),
        l = n(94345),
        c = n(38256);
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

      function u(e) {
        return e ? d[e] ?? e.toUpperCase() : ""
      }

      function f({
        activeLocale: e,
        preferredLocale: t,
        originalPath: n,
        originalSearch: a
      }) {
        let d = (0, c.kj)(),
          f = (0, c.KX)(),
          [m, p] = (0, i.useState)(!1),
          h = (0, o.usePathname)(),
          g = (0, o.useSearchParams)(),
          w = (0, i.useMemo)(() => {
            var e;
            return (e = h ?? n ?? "/") && "" !== e ? e.startsWith("/") ? e : `/${e}` : "/"
          }, [h, n]),
          b = (0, i.useMemo)(() => {
            let e = (0, l.KM)(w, f);
            return "" === e ? "/" : e
          }, [w, f]),
          y = (0, i.useMemo)(() => {
            let e = g?.toString?.() ?? "";
            return e && e.length > 0 ? `?${e}` : a ?? ""
          }, [g, a]),
          _ = (0, i.useMemo)(() => t && f.includes(t) ? t : "en", [t, f]),
          v = (0, i.useMemo)(() => u(t), [t]),
          k = (0, i.useMemo)(() => u(e), [e]),
          x = (0, i.useMemo)(() => t && "en" !== t ? `/${t}${"/"===b?"":b}` : b, [t, b]),
          j = (0, i.useMemo)(() => d("common.language_notice.title", {
            preferred: v
          }, _), [_, v, d]),
          S = (0, i.useMemo)(() => d("common.language_notice.description", {
            current: k,
            preferred: v
          }, _), [_, k, v, d]),
          I = (0, i.useMemo)(() => d("common.language_notice.switch_button", {
            preferred: v
          }, _), [_, v, d]),
          E = (0, i.useMemo)(() => d("common.language_notice.use_current_button", {
            current: k
          }, _), [_, k, d]),
          C = (0, i.useMemo)(() => d("common.language_notice.dismiss_button", {
            current: k
          }, _), [_, k, d]),
          O = (0, i.useMemo)(() => `${x}${y}`, [x, y]),
          P = (0, i.useMemo)(() => `${w}${y}`, [w, y]);
        return t && t !== e && !m ? (0, r.jsxs)(r.Fragment, {
          children: [
            ["ar", "he", "fa", "ur"].includes(_) ? (0, r.jsx)("style", {
              children: `
                    .${s().wrapper} {
                        direction: rtl;
                    }
                    `
            }) : (0, r.jsx)("style", {
              children: `
                    .${s().wrapper} {
                        direction: ltr;
                    }
                    `
            }), "ru" === t ? (0, r.jsx)("style", {
              children: `
                    .${s().wrapper} * {
                        font-family: 'Onest', sans-serif !important;
                    }
                    `
            }) : (0, r.jsx)("style", {
              children: `
                        .${s().wrapper} * {
                            font-family: 'Satoshi', sans-serif !important;
                        }
                        `
            }), (0, r.jsxs)("div", {
              className: s().wrapper,
              children: [(0, r.jsx)("div", {
                className: s().title,
                children: j
              }), (0, r.jsx)("div", {
                className: s().description,
                children: S
              }), (0, r.jsxs)("div", {
                className: s().actions,
                children: [(0, r.jsx)("button", {
                  type: "button",
                  className: s().switchButton,
                  onClick: () => {
                    t && (0, l.xS)(t, {
                      redirect: O
                    })
                  },
                  children: I
                }), (0, r.jsx)("button", {
                  type: "button",
                  className: s().useCurrentButton,
                  onClick: () => {
                    e && (0, l.xS)(e, {
                      redirect: P
                    })
                  },
                  children: E
                }), (0, r.jsx)("button", {
                  type: "button",
                  className: s().dismissButton,
                  onClick: () => p(!0),
                  children: C
                })]
              })]
            })
          ]
        }) : null
      }
    },
    16201: (e, t, n) => {
      "use strict";
      n.d(t, {
        R: () => _,
        s: () => v
      });
      let r = new Set(["window_error", "unhandled_rejection", "global_error_boundary"]),
        i = new Set(["aborted", "connection closed", "the operation was aborted", "the user aborted a request", "request aborted"]),
        o = new Set(["failed to fetch", "load failed", "a network error occurred", "networkerror when attempting to fetch resource"]),
        a = ["chrome-extension:", "moz-extension:", "safari-extension:"],
        s = [/\/_next\/static\//i, /webpack-internal:\/\//i, /https?:\/\/(?:www\.)?guns\.lol\/_next\//i, /https?:\/\/(?:www\.)?guns\.lol\/app\//i],
        l = [/loading chunk/i, /chunkloaderror/i, /chunk loading failed/i, /failed to fetch dynamically imported module/i, /importing a module script failed/i],
        c = [/extension context invalidated/i, /window\.__firefox__\.reader/i, /contentwindow is null/i, /contentwindow\.document/i, /can't access property ["']document["'],\s*[a-z]\.contentwindow is null/i, /cannot read propert(?:y|ies) of null \(reading ['"]document['"]\)/i, /cannot read property ['"]document['"] of null/i, /cannot prefetch.*cannot be converted to a url/i, /window\.webkit\.messagehandlers/i, /failed to execute ['"]removechild['"] on ['"]node['"]/i, /null is not an object \(evaluating ['"][^'"]*\.parentnode\.removechild['"]\)/i, /(?:getresult|xbrowser|swbrowser) is not defined/i, /can't find variable:\s*getresult/i, /a0_0x[0-9a-f]+ is not defined/i, /internal json-rpc error/i, /"code"\s*:\s*-32603/i, /the play\(\) request was interrupted/i, /error creating webgl context/i],
        d = [/intl\.segmenter is not a constructor/i, /undefined is not a constructor \(evaluating ['"]new intl\.segmenter/i, /cannot read propert(?:y|ies) of undefined \(reading ['"]response['"]\)/i, /undefined is not an object \(evaluating ['"][^'"]*\.request\.response['"]\)/i, /can't access property ["']response["'],\s*[^\s]+\.request is undefined/i, /can't find variable:\s*filereader/i, /worker is not a constructor/i, /null is not an object \(evaluating ['"]localstorage\.getitem/i, /permission denied to access property ["'](?:correspondinguseelement|nodetype|__reactfiber\$)/i, /blocked a frame with origin .* from accessing a cross-origin frame/i, /(?:cannot read propert(?:y|ies) of null|null is not an object).*getboundingclientrect/i, /(?:cannot read propert(?:y|ies) of null|null is not an object).*appendchild/i, /failed to execute ['"]insertbefore['"] on ['"]node['"].*not a child of this node/i, /node\.removechild: the node to be removed is not a child of this node/i, /(?:cannot read propert(?:y|ies) of null|null is not an object).*removechild/i, /can't access property ["']removechild["'],\s*[^\s]+\.parentnode is null/i, /uniformlocations(?:\.foreach)?/i, /elm\.events\.push is not a function/i],
        u = [/the string did not match the expected pattern/i, /json\.parse: unexpected character/i],
        f = [/execute_auto_fill/i, /needinjectcss/i, /_getownpropertydescriptor/i, /<anonymous>:\d+:\d+/i],
        m = [/^uri error\.?$/i, /json parse error:\s*unexpected eof/i, /input buffer contains unsupported image format/i, /input image exceeds pixel limit/i, /expected positive integer for (?:width|height) but received 0 of type number/i, /vipsjpeg:\s*(?:premature end|invalid sos parameters)/i, /pngload_buffer:\s*libspng read error/i, /heif: error while loading plugin: support for this compression format has not been built in/i, /^source:\s*bad seek to /im],
        p = [/^ffmpeg version /i, ...m],
        h = e => (e ?? "").trim().replace(/^uncaught\s+/i, "").replace(/^(?:error|typeerror|referenceerror|syntaxerror|networkerror|aborterror):\s*/i, "").replace(/\.+$/, "").toLowerCase(),
        g = (...e) => e.filter(e => !!e).join("\n"),
        w = (e, t) => e.some(e => e.test(t)),
        b = !1,
        y = new Set(["SCRIPT", "LINK", "IMG", "IFRAME", "VIDEO", "AUDIO", "SOURCE"]),
        _ = () => {
          b || (b = !0, window.addEventListener("error", e => {
            let t;
            if ((t = e.target) && "tagName" in t && y.has(t.tagName.toUpperCase())) return;
            let n = e.error;
            v({
              message: e.message || n?.message || "Unknown window error",
              name: n?.name ?? "Error",
              stack: n?.stack ?? null,
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
            if (!t || t && "object" == typeof t && "isTrusted" in t && !("message" in t) && !("stack" in t)) return;
            let n = (e => {
              if (e instanceof Error) return {
                message: e.message,
                name: e.name,
                stack: e.stack ?? null
              };
              if ("string" == typeof e) return {
                message: e,
                name: "Error",
                stack: null
              };
              if ("object" == typeof e && "message" in e) {
                let t = e.message,
                  n = e.name,
                  r = e.stack;
                if ("string" == typeof t) return {
                  message: t,
                  name: "string" == typeof n ? n : "Error",
                  stack: "string" == typeof r ? r : null
                }
              }
              try {
                return {
                  message: JSON.stringify(e, null, 2) ?? String(e),
                  name: "Error",
                  stack: null
                }
              } catch {
                return {
                  message: String(e),
                  name: "Error",
                  stack: null
                }
              }
            })(t);
            n.message && "{}" !== n.message && v({
              message: n.message,
              name: n.name,
              stack: n.stack,
              severity: "error",
              route: window.location.pathname,
              metadata: {
                source: "unhandledrejection"
              },
              tags: ["unhandled_rejection"]
            })
          }))
        },
        v = async e => {
          let t, n, b = k(e);
          if (n = "string" == typeof b.metadata?.filename ? b.metadata.filename : null, (e => {
              var t;
              let n, b, y, _, v, k, x, j, S, I, E = h(e.message);
              if (i.has(E) || e.name?.toLowerCase() === "aborterror") return !0;
              return "frontend" === e.source ? (b = (t = e).message ?? "", y = t.name ?? "", _ = t.tags ?? [], v = g(b, y, t.stack, t.componentStack, t.filename), k = w(s, g(t.stack, t.filename)), x = _.some(e => r.has(e)), !!(w(l, v) || (n = g(t.stack, t.filename).toLowerCase(), a.some(e => n.includes(e)) || w(c, v) || w(d, v)) || x && (o.has(h(b)) || w(u, b) || !k && w(f, v)) || _.includes("window_error") && ("script error" === h(b) && !t.filename || !k)) || !!_.includes("unhandled_rejection") && (!t.stack || !k)) : (j = e.tags ?? [], I = g(S = e.message ?? "", e.name, e.stack), j.includes("asset_compression") ? w(p, I) : j.includes("unhandled_route_error") && w(m, S))
            })({
              source: "frontend",
              message: b.message,
              name: b.name,
              stack: b.stack,
              componentStack: b.componentStack,
              filename: n,
              tags: b.tags
            })) return {
            eventId: null,
            errorId: null
          };
          try {
            if (t = await fetch("/api/telemetry/errors", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(b),
                keepalive: !0
              }), 401 === t.status && (t = await fetch("/api/telemetry/errorsP", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(b),
                keepalive: !0
              })), !t.ok) return {
              eventId: null,
              errorId: null
            };
            let e = await t.json().catch(() => null);
            if (e && (e.eventId || e.errorId)) {
              let t = "string" == typeof e.eventId ? e.eventId : null,
                n = "string" == typeof e.errorId ? e.errorId : null;
              {
                let e = window;
                t && (e.__gunsLastTelemetryEventId = t), n && (e.__gunsLastTelemetryErrorId = n), window.dispatchEvent(new CustomEvent("guns:telemetry-event", {
                  detail: {
                    eventId: t,
                    errorId: n
                  }
                }))
              }
              return console.error(`[telemetry] error=${n??"none"} event=${t??"none"} route=${b.route}`), {
                eventId: t,
                errorId: n
              }
            }
          } catch (e) {
            console.warn("[telemetry] Failed to report error", e)
          }
          return {
            eventId: null,
            errorId: null
          }
        }, k = e => {
          let t = x(),
            n = e.route ?? window.location.pathname,
            r = S(n ?? "/"),
            i = j("undefined" != typeof navigator ? navigator.userAgent ?? null : null),
            o = e.viewport ?? {
              width: window.innerWidth,
              height: window.innerHeight
            },
            a = {
              ...e.metadata ?? {},
              ...i ? {
                environment: i
              } : {},
              rawRoute: n,
              normalizedRoute: r
            };
          return {
            ...e,
            href: t,
            route: r,
            viewport: o,
            metadata: a
          }
        }, x = () => {
          try {
            let {
              pathname: e
            } = window.location;
            return e || "/"
          } catch {
            return null
          }
        }, j = e => {
          if (!e) return null;
          let t = e.toLowerCase(),
            n = "unknown",
            r = "unknown",
            i = "desktop";
          return /edg\//.test(t) ? n = "edge" : /chrome\//.test(t) ? n = "chrome" : /safari\//.test(t) && !/chrome\//.test(t) ? n = "safari" : /firefox\//.test(t) ? n = "firefox" : /msie|trident/.test(t) && (n = "ie"), /windows nt/.test(t) ? r = "windows" : /mac os x/.test(t) ? r = "macos" : /android/.test(t) ? r = "android" : /iphone|ipad|ipod/.test(t) ? r = "ios" : /linux/.test(t) && (r = "linux"), /bot|crawler|spider|crawling/.test(t) ? i = "bot" : /ipad/.test(t) ? i = "tablet" : /iphone|android.+mobile/.test(t) && (i = "mobile"), {
            browser: n,
            os: r,
            device: i
          }
        }, S = e => {
          if (!e) return "/";
          let [t] = e.split(/[?#]/, 1), n = t.split("/").map(e => e ? /^[0-9]+$/.test(e) && e.length >= 3 ? ":int" : /^[0-9a-f]{16,}$/i.test(e) ? ":hex" : /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e) ? ":uuid" : /^[0-9a-z_-]{12,}$/i.test(e) ? ":id" : /^\d{4}-\d{2}-\d{2}$/.test(e) ? ":date" : e : e).join("/");
          return n.startsWith("/") ? n : `/${n}`
        }
    },
    28356: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = {
        cancelIdleCallback: function() {
          return o
        },
        requestIdleCallback: function() {
          return i
        }
      };
      for (var r in n) Object.defineProperty(t, r, {
        enumerable: !0,
        get: n[r]
      });
      let i = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
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
        o = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
          return clearTimeout(e)
        };
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    32864: (e, t, n) => {
      "use strict";
      n.d(t, {
        default: () => o
      });
      var r = n(12115),
        i = n(16201);
      let o = ({
        children: e
      }) => ((0, r.useEffect)(() => {
        (0, i.R)()
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
          return w
        }
      };
      for (var i in r) Object.defineProperty(t, i, {
        enumerable: !0,
        get: r[i]
      });
      let o = n(73623),
        a = n(66388),
        s = n(95155),
        l = o._(n(47650)),
        c = a._(n(12115)),
        d = n(75368),
        u = n(3584),
        f = n(28356),
        m = new Map,
        p = new Set,
        h = e => {
          let {
            src: t,
            id: n,
            onLoad: r = () => {},
            onReady: i = null,
            dangerouslySetInnerHTML: o,
            children: a = "",
            strategy: s = "afterInteractive",
            onError: c,
            stylesheets: d
          } = e, f = n || t;
          if (f && p.has(f)) return;
          if (m.has(t)) {
            p.add(f), m.get(t).then(r, c);
            return
          }
          let h = () => {
              i && i(), p.add(f)
            },
            g = document.createElement("script"),
            w = new Promise((e, t) => {
              g.addEventListener("load", function(t) {
                e(), r && r.call(this, t), h()
              }), g.addEventListener("error", function(e) {
                t(e)
              })
            }).catch(function(e) {
              c && c(e)
            });
          o ? (g.innerHTML = o.__html || "", h()) : a ? (g.textContent = "string" == typeof a ? a : Array.isArray(a) ? a.join("") : "", h()) : t && (g.src = t, m.set(t, w)), (0, u.setAttributesFromProps)(g, e), "worker" === s && g.setAttribute("type", "text/partytown"), g.setAttribute("data-nscript", s), d && (e => {
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

      function w(e) {
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
          onReady: i = null,
          strategy: o = "afterInteractive",
          onError: a,
          stylesheets: u,
          ...m
        } = e, {
          updateScripts: g,
          scripts: w,
          getIsSsr: b,
          appDir: y,
          nonce: _
        } = (0, c.useContext)(d.HeadManagerContext);
        _ = m.nonce || _;
        let v = (0, c.useRef)(!1);
        (0, c.useEffect)(() => {
          let e = t || n;
          v.current || (i && e && p.has(e) && i(), v.current = !0)
        }, [i, t, n]);
        let k = (0, c.useRef)(!1);
        if ((0, c.useEffect)(() => {
            if (!k.current) {
              if ("afterInteractive" === o) h(e);
              else "lazyOnload" === o && ("complete" === document.readyState ? (0, f.requestIdleCallback)(() => h(e)) : window.addEventListener("load", () => {
                (0, f.requestIdleCallback)(() => h(e))
              }));
              k.current = !0
            }
          }, [e, o]), ("beforeInteractive" === o || "worker" === o) && (g ? (w[o] = (w[o] || []).concat([{
            id: t,
            src: n,
            onLoad: r,
            onReady: i,
            onError: a,
            ...m,
            nonce: _
          }]), g(w)) : b && b() ? p.add(t || n) : b && !b() && h({
            ...e,
            nonce: _
          })), y) {
          if (u && u.forEach(e => {
              l.default.preinit(e, {
                as: "style"
              })
            }), "beforeInteractive" === o)
            if (!n) return m.dangerouslySetInnerHTML && (m.children = m.dangerouslySetInnerHTML.__html, delete m.dangerouslySetInnerHTML), (0, s.jsx)("script", {
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
            }), (0, s.jsx)("script", {
              nonce: _,
              dangerouslySetInnerHTML: {
                __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([n,{...m,id:t}])})`
              }
            });
          "afterInteractive" === o && n && l.default.preload(n, m.integrity ? {
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
      let y = b;
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
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