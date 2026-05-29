(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 23080, r => {
  r.v({
    buttonRow: "errorPage-module__PRaICW__buttonRow",
    card: "errorPage-module__PRaICW__card",
    errorInformationCard: "errorPage-module__PRaICW__errorInformationCard",
    errorInformationContainer: "errorPage-module__PRaICW__errorInformationContainer",
    errorInformationLabel: "errorPage-module__PRaICW__errorInformationLabel",
    errorInformationList: "errorPage-module__PRaICW__errorInformationList",
    errorInformationValue: "errorPage-module__PRaICW__errorInformationValue",
    subtitle: "errorPage-module__PRaICW__subtitle"
  })
}, 73621, r => {
  "use strict";
  var e = r.i(48277),
    a = r.i(30668),
    o = r.i(16506),
    t = r.i(50250),
    n = r.i(23080),
    l = r.i(33544),
    s = r.i(16394),
    d = r.i(17435);

  function i({
    error: r
  }) {
    let i = (0, d.useT)(),
      [u, c] = (0, a.useState)(null),
      [m, f] = (0, a.useState)(null),
      _ = (0, a.useRef)(!1);
    return (0, a.useEffect)(() => {
      _.current || (_.current = !0, (0, s.reportClientError)({
        message: r?.message ?? "Global error boundary triggered",
        name: r?.name ?? "GlobalErrorBoundary",
        stack: r?.stack ?? null,
        severity: "error",
        route: window.location.pathname,
        metadata: {
          source: "global-error-boundary"
        },
        tags: ["global_error_boundary"]
      }).then(({
        eventId: r,
        errorId: e
      }) => {
        r && c(r), e && f(e)
      }))
    }, [r]), (0, e.jsxs)("div", {
      className: t.default.containerWrapper,
      children: [(0, e.jsxs)("div", {
        className: `${t.default.container} ${n.default.card}`,
        children: [(0, e.jsx)("div", {
          className: t.default.headIcon,
          children: l.default.error
        }), (0, e.jsx)("h1", {
          className: t.default.headline,
          children: i("errors.frontend.global_error.title")
        }), (0, e.jsx)("h3", {
          className: `${t.default.subheadline} ${n.default.subtitle}`,
          children: i("errors.frontend.global_error.message")
        }), (0, e.jsxs)("div", {
          className: n.default.buttonRow,
          children: [(0, e.jsx)("button", {
            type: "button",
            onClick: () => window.location.reload(),
            className: `${t.default.button} ${t.default.buttonPrimary}`,
            children: i("errors.frontend.global_error.reload_page")
          }), (0, e.jsx)(o.default, {
            href: "https://status.guns.lol",
            target: "_blank",
            className: `${t.default.button} ${t.default.buttonSecondary}`,
            children: i("errors.frontend.global_error.check_status")
          })]
        })]
      }), m && u && (0, e.jsx)("div", {
        className: n.default.errorInformationContainer,
        children: (0, e.jsxs)("div", {
          className: n.default.errorInformationList,
          children: [(0, e.jsxs)("div", {
            className: n.default.errorInformationCard,
            children: [(0, e.jsx)("span", {
              className: n.default.errorInformationLabel,
              children: "Error ID"
            }), (0, e.jsx)("span", {
              className: n.default.errorInformationValue,
              children: m
            })]
          }), (0, e.jsxs)("div", {
            className: n.default.errorInformationCard,
            children: [(0, e.jsx)("span", {
              className: n.default.errorInformationLabel,
              children: "Event ID"
            }), (0, e.jsx)("span", {
              className: n.default.errorInformationValue,
              children: u
            })]
          })]
        })
      })]
    })
  }
  r.s(["default", () => i])
}]);