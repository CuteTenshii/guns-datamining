(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8039], {
    48219: (e, r, t) => {
      Promise.resolve().then(t.bind(t, 87460))
    },
    50768: (e, r, t) => {
      "use strict";
      t.d(r, {
        R: () => f,
        s: () => g
      });
      let n = !1,
        o = [/loading chunk/i, /chunkloaderror/i, /chunk loading failed/i],
        a = ["chrome-extension:", "moz-extension:", "safari-extension:"],
        s = [/turnstile/i],
        i = e => !!e && a.some(r => e.startsWith(r)),
        l = e => !!e && a.some(r => e.includes(r)),
        d = e => !!e && o.some(r => r.test(e)),
        u = e => !!e && e.toLowerCase().includes("extension context invalidated"),
        c = e => {
          if (!e) return !1;
          let r = e.toLowerCase();
          return s.every(e => e.test(r))
        },
        m = e => {
          if (!e) return !1;
          let r = e.toLowerCase();
          return !!(r.includes("cannot read property 'document' of null") || r.includes("cannot read properties of null (reading 'document'") || r.includes("null is not an object") && r.includes("contentwindow.document") || r.includes("cannot prefetch") && r.includes("cannot be converted to a url") || r.includes("window.webkit.messagehandlers") || r.includes("failed to execute 'removechild' on 'node'") || r.includes("getresult is not defined"))
        },
        f = () => {
          n || (n = !0, window.addEventListener("error", e => {
            let r, t;
            if (r = e.error, t = e.filename ?? null, (e => {
                let r = e.target;
                if (!r || !("tagName" in r)) return !1;
                let t = r.tagName;
                return "SCRIPT" === t || "LINK" === t
              })(e) || d(e.message) || d(r?.message) || d(r?.name) || "Script error." === e.message && !t || i(t) || l(r?.stack) || u(e.message) || u(r?.message) || c(e.message) || c(r?.message) || m(e.message) || m(r?.message) || 0) return;
            let n = e.error;
            g({
              message: e.message ?? n?.message ?? "Unknown window error",
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
            let r = e.reason;
            if ((e => {
                if (!e) return !1;
                if (e instanceof Error) return !!(d(e.message) || d(e.name) || l(e.stack) || u(e.message) || i(e.stack ?? "") || c(e.message) || m(e.message));
                if ("string" == typeof e) return d(e) || u(e) || c(e) || m(e);
                if ("object" == typeof e && "message" in e) {
                  let r = e.message;
                  if ("string" == typeof r) return d(r) || u(r) || c(r) || m(r)
                }
                return !1
              })(r)) return;
            let t = r instanceof Error ? r : Error("string" == typeof r ? r : JSON.stringify(r, null, 2));
            g({
              message: t.message,
              name: t.name,
              stack: t.stack ?? null,
              severity: "error",
              route: window.location.pathname,
              metadata: {
                source: "unhandledrejection"
              },
              tags: ["unhandled_rejection"]
            })
          }))
        },
        g = async e => {
          let r, t = h(e);
          try {
            if (r = await fetch("/api/telemetry/errors", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(t),
                keepalive: !0
              }), 401 === r.status && (r = await fetch("/api/telemetry/errorsP", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(t),
                keepalive: !0
              })), !r.ok) return {
              eventId: null,
              errorId: null
            };
            let e = await r.json().catch(() => null);
            if (e && (e.eventId || e.errorId)) {
              let r = "string" == typeof e.eventId ? e.eventId : null,
                n = "string" == typeof e.errorId ? e.errorId : null;
              {
                let e = window;
                r && (e.__gunsLastTelemetryEventId = r), n && (e.__gunsLastTelemetryErrorId = n), window.dispatchEvent(new CustomEvent("guns:telemetry-event", {
                  detail: {
                    eventId: r,
                    errorId: n
                  }
                }))
              }
              return console.error(`[telemetry] error=${n??"none"} event=${r??"none"} route=${t.route}`), {
                eventId: r,
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
        }, h = e => {
          let r = w(),
            t = e.route ?? window.location.pathname,
            n = _(t ?? "/"),
            o = p("undefined" != typeof navigator ? navigator.userAgent ?? null : null),
            a = e.viewport ?? {
              width: window.innerWidth,
              height: window.innerHeight
            },
            s = {
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
            metadata: s
          }
        }, w = () => {
          try {
            let {
              pathname: e
            } = window.location;
            return e || "/"
          } catch {
            return null
          }
        }, p = e => {
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
        }, _ = e => {
          if (!e) return "/";
          let [r] = e.split(/[?#]/, 1), t = r.split("/").map(e => e ? /^[0-9]+$/.test(e) && e.length >= 3 ? ":int" : /^[0-9a-f]{16,}$/i.test(e) ? ":hex" : /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e) ? ":uuid" : /^[0-9a-z_-]{12,}$/i.test(e) ? ":id" : /^\d{4}-\d{2}-\d{2}$/.test(e) ? ":date" : e : e).join("/");
          return t.startsWith("/") ? t : `/${t}`
        }
    },
    70063: () => {},
    87460: (e, r, t) => {
      "use strict";
      t.r(r), t.d(r, {
        default: () => g
      });
      var n = t(95155),
        o = t(12115);
      t(70063);
      var a = t(98500),
        s = t.n(a),
        i = t(98241),
        l = t.n(i),
        d = t(98410),
        u = t.n(d),
        c = t(54834),
        m = t(50768),
        f = t(38256);

      function g({
        error: e
      }) {
        let r = (0, f.kj)(),
          [t, a] = (0, o.useState)(null),
          [i, d] = (0, o.useState)(null),
          g = (0, o.useRef)(!1);
        return (0, o.useEffect)(() => {
          g.current || (g.current = !0, (0, m.s)({
            message: e?.message ?? "Global error boundary triggered",
            name: e?.name ?? "GlobalErrorBoundary",
            stack: e?.stack ?? null,
            severity: "error",
            route: window.location.pathname,
            metadata: {
              source: "global-error-boundary"
            },
            tags: ["global_error_boundary"]
          }).then(({
            eventId: e,
            errorId: r
          }) => {
            e && a(e), r && d(r)
          }))
        }, [e]), (0, n.jsxs)("div", {
          className: l().containerWrapper,
          children: [(0, n.jsxs)("div", {
            className: `${l().container} ${u().card}`,
            children: [(0, n.jsx)("div", {
              className: l().headIcon,
              children: c.A.error
            }), (0, n.jsx)("h1", {
              className: l().headline,
              children: r("errors.frontend.global_error.title")
            }), (0, n.jsx)("h3", {
              className: `${l().subheadline} ${u().subtitle}`,
              children: r("errors.frontend.global_error.message")
            }), (0, n.jsxs)("div", {
              className: u().buttonRow,
              children: [(0, n.jsx)("button", {
                type: "button",
                onClick: () => window.location.reload(),
                className: `${l().button} ${l().buttonPrimary}`,
                children: r("errors.frontend.global_error.reload_page")
              }), (0, n.jsx)(s(), {
                href: "https://status.guns.lol",
                target: "_blank",
                className: `${l().button} ${l().buttonSecondary}`,
                children: r("errors.frontend.global_error.check_status")
              })]
            })]
          }), i && t && (0, n.jsx)("div", {
            className: u().errorInformationContainer,
            children: (0, n.jsxs)("div", {
              className: u().errorInformationList,
              children: [(0, n.jsxs)("div", {
                className: u().errorInformationCard,
                children: [(0, n.jsx)("span", {
                  className: u().errorInformationLabel,
                  children: "Error ID"
                }), (0, n.jsx)("span", {
                  className: u().errorInformationValue,
                  children: i
                })]
              }), (0, n.jsxs)("div", {
                className: u().errorInformationCard,
                children: [(0, n.jsx)("span", {
                  className: u().errorInformationLabel,
                  children: "Event ID"
                }), (0, n.jsx)("span", {
                  className: u().errorInformationValue,
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
        card: "errorPage_card__nVu91",
        subtitle: "errorPage_subtitle__OQBQU",
        buttonRow: "errorPage_buttonRow__uPGHd",
        errorInformationContainer: "errorPage_errorInformationContainer__Si_Lc",
        errorInformationList: "errorPage_errorInformationList__fABF_",
        errorInformationCard: "errorPage_errorInformationCard__FIGF5",
        errorInformationLabel: "errorPage_errorInformationLabel__4mw0h",
        errorInformationValue: "errorPage_errorInformationValue__zKkVW"
      }
    }
  },
  e => {
    e.O(0, [7020, 4103, 8500, 8256, 5886, 8441, 3794, 7358], () => e(e.s = 48219)), _N_E = e.O()
  }
]);