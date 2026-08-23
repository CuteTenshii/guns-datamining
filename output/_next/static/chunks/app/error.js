(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8039], {
    16201: (e, r, t) => {
      "use strict";
      t.d(r, {
        R: () => y,
        s: () => v
      });
      let n = new Set(["window_error", "unhandled_rejection", "global_error_boundary"]),
        o = new Set(["aborted", "connection closed", "the operation was aborted", "the user aborted a request", "request aborted"]),
        a = new Set(["failed to fetch", "load failed", "a network error occurred", "networkerror when attempting to fetch resource"]),
        i = ["chrome-extension:", "moz-extension:", "safari-extension:"],
        s = [/\/_next\/static\//i, /webpack-internal:\/\//i, /https?:\/\/(?:www\.)?guns\.lol\/_next\//i, /https?:\/\/(?:www\.)?guns\.lol\/app\//i],
        l = [/loading chunk/i, /chunkloaderror/i, /chunk loading failed/i, /failed to fetch dynamically imported module/i, /importing a module script failed/i],
        d = [/extension context invalidated/i, /window\.__firefox__\.reader/i, /contentwindow is null/i, /contentwindow\.document/i, /can't access property ["']document["'],\s*[a-z]\.contentwindow is null/i, /cannot read propert(?:y|ies) of null \(reading ['"]document['"]\)/i, /cannot read property ['"]document['"] of null/i, /cannot prefetch.*cannot be converted to a url/i, /window\.webkit\.messagehandlers/i, /failed to execute ['"]removechild['"] on ['"]node['"]/i, /null is not an object \(evaluating ['"][^'"]*\.parentnode\.removechild['"]\)/i, /(?:getresult|xbrowser|swbrowser) is not defined/i, /can't find variable:\s*getresult/i, /a0_0x[0-9a-f]+ is not defined/i, /internal json-rpc error/i, /"code"\s*:\s*-32603/i, /the play\(\) request was interrupted/i, /error creating webgl context/i],
        c = [/intl\.segmenter is not a constructor/i, /undefined is not a constructor \(evaluating ['"]new intl\.segmenter/i, /cannot read propert(?:y|ies) of undefined \(reading ['"]response['"]\)/i, /undefined is not an object \(evaluating ['"][^'"]*\.request\.response['"]\)/i, /can't access property ["']response["'],\s*[^\s]+\.request is undefined/i, /can't find variable:\s*filereader/i, /worker is not a constructor/i, /null is not an object \(evaluating ['"]localstorage\.getitem/i, /permission denied to access property ["'](?:correspondinguseelement|nodetype|__reactfiber\$)/i, /blocked a frame with origin .* from accessing a cross-origin frame/i, /(?:cannot read propert(?:y|ies) of null|null is not an object).*getboundingclientrect/i, /(?:cannot read propert(?:y|ies) of null|null is not an object).*appendchild/i, /failed to execute ['"]insertbefore['"] on ['"]node['"].*not a child of this node/i, /node\.removechild: the node to be removed is not a child of this node/i, /(?:cannot read propert(?:y|ies) of null|null is not an object).*removechild/i, /can't access property ["']removechild["'],\s*[^\s]+\.parentnode is null/i, /uniformlocations(?:\.foreach)?/i, /elm\.events\.push is not a function/i],
        u = [/the string did not match the expected pattern/i, /json\.parse: unexpected character/i],
        m = [/execute_auto_fill/i, /needinjectcss/i, /_getownpropertydescriptor/i, /<anonymous>:\d+:\d+/i],
        f = [/^uri error\.?$/i, /json parse error:\s*unexpected eof/i, /input buffer contains unsupported image format/i, /input image exceeds pixel limit/i, /expected positive integer for (?:width|height) but received 0 of type number/i, /vipsjpeg:\s*(?:premature end|invalid sos parameters)/i, /pngload_buffer:\s*libspng read error/i, /heif: error while loading plugin: support for this compression format has not been built in/i, /^source:\s*bad seek to /im],
        p = [/^ffmpeg version /i, ...f],
        g = e => (e ?? "").trim().replace(/^uncaught\s+/i, "").replace(/^(?:error|typeerror|referenceerror|syntaxerror|networkerror|aborterror):\s*/i, "").replace(/\.+$/, "").toLowerCase(),
        h = (...e) => e.filter(e => !!e).join("\n"),
        w = (e, r) => e.some(e => e.test(r)),
        b = !1,
        _ = new Set(["SCRIPT", "LINK", "IMG", "IFRAME", "VIDEO", "AUDIO", "SOURCE"]),
        y = () => {
          b || (b = !0, window.addEventListener("error", e => {
            let r;
            if ((r = e.target) && "tagName" in r && _.has(r.tagName.toUpperCase())) return;
            let t = e.error;
            v({
              message: e.message || t?.message || "Unknown window error",
              name: t?.name ?? "Error",
              stack: t?.stack ?? null,
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
            let r = e.reason;
            if (!r || r && "object" == typeof r && "isTrusted" in r && !("message" in r) && !("stack" in r)) return;
            let t = (e => {
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
                let r = e.message,
                  t = e.name,
                  n = e.stack;
                if ("string" == typeof r) return {
                  message: r,
                  name: "string" == typeof t ? t : "Error",
                  stack: "string" == typeof n ? n : null
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
            })(r);
            t.message && "{}" !== t.message && v({
              message: t.message,
              name: t.name,
              stack: t.stack,
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
          let r, t, b = k(e);
          if (t = "string" == typeof b.metadata?.filename ? b.metadata.filename : null, (e => {
              var r;
              let t, b, _, y, v, k, x, j, I, N, S = g(e.message);
              if (o.has(S) || e.name?.toLowerCase() === "aborterror") return !0;
              return "frontend" === e.source ? (b = (r = e).message ?? "", _ = r.name ?? "", y = r.tags ?? [], v = h(b, _, r.stack, r.componentStack, r.filename), k = w(s, h(r.stack, r.filename)), x = y.some(e => n.has(e)), !!(w(l, v) || (t = h(r.stack, r.filename).toLowerCase(), i.some(e => t.includes(e)) || w(d, v) || w(c, v)) || x && (a.has(g(b)) || w(u, b) || !k && w(m, v)) || y.includes("window_error") && ("script error" === g(b) && !r.filename || !k)) || !!y.includes("unhandled_rejection") && (!r.stack || !k)) : (j = e.tags ?? [], N = h(I = e.message ?? "", e.name, e.stack), j.includes("asset_compression") ? w(p, N) : j.includes("unhandled_route_error") && w(f, I))
            })({
              source: "frontend",
              message: b.message,
              name: b.name,
              stack: b.stack,
              componentStack: b.componentStack,
              filename: t,
              tags: b.tags
            })) return {
            eventId: null,
            errorId: null
          };
          try {
            if (r = await fetch("/api/telemetry/errors", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(b),
                keepalive: !0
              }), 401 === r.status && (r = await fetch("/api/telemetry/errorsP", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(b),
                keepalive: !0
              })), !r.ok) return {
              eventId: null,
              errorId: null
            };
            let e = await r.json().catch(() => null);
            if (e && (e.eventId || e.errorId)) {
              let r = "string" == typeof e.eventId ? e.eventId : null,
                t = "string" == typeof e.errorId ? e.errorId : null;
              {
                let e = window;
                r && (e.__gunsLastTelemetryEventId = r), t && (e.__gunsLastTelemetryErrorId = t), window.dispatchEvent(new CustomEvent("guns:telemetry-event", {
                  detail: {
                    eventId: r,
                    errorId: t
                  }
                }))
              }
              return console.error(`[telemetry] error=${t??"none"} event=${r??"none"} route=${b.route}`), {
                eventId: r,
                errorId: t
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
          let r = x(),
            t = e.route ?? window.location.pathname,
            n = I(t ?? "/"),
            o = j("undefined" != typeof navigator ? navigator.userAgent ?? null : null),
            a = e.viewport ?? {
              width: window.innerWidth,
              height: window.innerHeight
            },
            i = {
              ...e.metadata ?? {},
              ...o ? {
                environment: o
              } : {},
              rawRoute: t,
              normalizedRoute: n
            };
          return {
            ...e,
            href: r,
            route: n,
            viewport: a,
            metadata: i
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
          let r = e.toLowerCase(),
            t = "unknown",
            n = "unknown",
            o = "desktop";
          return /edg\//.test(r) ? t = "edge" : /chrome\//.test(r) ? t = "chrome" : /safari\//.test(r) && !/chrome\//.test(r) ? t = "safari" : /firefox\//.test(r) ? t = "firefox" : /msie|trident/.test(r) && (t = "ie"), /windows nt/.test(r) ? n = "windows" : /mac os x/.test(r) ? n = "macos" : /android/.test(r) ? n = "android" : /iphone|ipad|ipod/.test(r) ? n = "ios" : /linux/.test(r) && (n = "linux"), /bot|crawler|spider|crawling/.test(r) ? o = "bot" : /ipad/.test(r) ? o = "tablet" : /iphone|android.+mobile/.test(r) && (o = "mobile"), {
            browser: t,
            os: n,
            device: o
          }
        }, I = e => {
          if (!e) return "/";
          let [r] = e.split(/[?#]/, 1), t = r.split("/").map(e => e ? /^[0-9]+$/.test(e) && e.length >= 3 ? ":int" : /^[0-9a-f]{16,}$/i.test(e) ? ":hex" : /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e) ? ":uuid" : /^[0-9a-z_-]{12,}$/i.test(e) ? ":id" : /^\d{4}-\d{2}-\d{2}$/.test(e) ? ":date" : e : e).join("/");
          return t.startsWith("/") ? t : `/${t}`
        }
    },
    48219: (e, r, t) => {
      Promise.resolve().then(t.bind(t, 87460))
    },
    70063: () => {},
    87460: (e, r, t) => {
      "use strict";
      t.r(r), t.d(r, {
        default: () => m
      });
      var n = t(95155),
        o = t(12115);
      t(70063);
      var a = t(98241),
        i = t.n(a),
        s = t(98410),
        l = t.n(s),
        d = t(54834),
        c = t(16201),
        u = t(86891);

      function m({
        error: e
      }) {
        let r = (0, u.kj)(),
          [t, a] = (0, o.useState)(null),
          [s, m] = (0, o.useState)(null),
          f = (0, o.useRef)(!1);
        return (0, o.useEffect)(() => {
          f.current || (f.current = !0, (0, c.s)({
            message: e?.message ?? "Global error boundary triggered",
            name: e?.name ?? "GlobalErrorBoundary",
            stack: e?.stack ?? null,
            severity: "error",
            route: window.location.pathname,
            metadata: {
              source: "global-error-boundary",
              digest: e?.digest ?? null
            },
            tags: ["global_error_boundary"]
          }).then(({
            eventId: e,
            errorId: r
          }) => {
            e && a(e), r && m(r)
          }))
        }, [e]), (0, n.jsxs)("div", {
          className: i().containerWrapper,
          children: [(0, n.jsxs)("div", {
            className: `${i().container} ${l().card}`,
            children: [(0, n.jsx)("div", {
              className: i().headIcon,
              children: d.A.error
            }), (0, n.jsx)("h1", {
              className: i().headline,
              children: r("errors.frontend.global_error.title")
            }), (0, n.jsx)("h3", {
              className: `${i().subheadline} ${l().subtitle}`,
              children: r("errors.frontend.global_error.message")
            }), (0, n.jsxs)("div", {
              className: l().buttonRow,
              children: [(0, n.jsx)("button", {
                type: "button",
                onClick: () => window.location.reload(),
                className: `${i().button} ${i().buttonPrimary}`,
                children: r("errors.frontend.global_error.reload_page")
              }), (0, n.jsx)("a", {
                href: "https://status.guns.lol",
                target: "_blank",
                className: `${i().button} ${i().buttonSecondary}`,
                children: r("errors.frontend.global_error.check_status")
              })]
            })]
          }), s && t && (0, n.jsx)("div", {
            className: l().errorInformationContainer,
            children: (0, n.jsxs)("div", {
              className: l().errorInformationList,
              children: [(0, n.jsxs)("div", {
                className: l().errorInformationCard,
                children: [(0, n.jsx)("span", {
                  className: l().errorInformationLabel,
                  children: "Error ID"
                }), (0, n.jsx)("span", {
                  className: l().errorInformationValue,
                  children: s
                })]
              }), (0, n.jsxs)("div", {
                className: l().errorInformationCard,
                children: [(0, n.jsx)("span", {
                  className: l().errorInformationLabel,
                  children: "Event ID"
                }), (0, n.jsx)("span", {
                  className: l().errorInformationValue,
                  children: t
                })]
              })]
            })
          })]
        })
      }
    },
    98410: e => {
      e.exports = {
        card: "GUNS__3a-53cd6657-24bee4fb-db885458",
        subtitle: "GUNS__70-263da991-087cbdc6-4de83355",
        buttonRow: "GUNS__d6-149930b2-c76c2c44-6f0ac1ea",
        errorInformationContainer: "GUNS__08-3d3f5ac7-c4f56b2c-aa02d2d1",
        errorInformationList: "GUNS__d6-69a9174f-8d3960e2-83536abd",
        errorInformationCard: "GUNS__7c-fd1dd9d4-eff2f4c3-09775a46",
        errorInformationLabel: "GUNS__5a-2cb9440a-5b85ad6a-35c46142",
        errorInformationValue: "GUNS__c9-a3cbd3c0-b4f93143-b17f8747"
      }
    }
  },
  e => {
    e.O(0, [7020, 9255, 6773, 6891, 5886, 8441, 3794, 7358], () => e(e.s = 48219)), _N_E = e.O()
  }
]);