(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 52202, t => {
  "use strict";
  var e = t.i(48277),
    i = t.i(16506),
    a = t.i(17435);

  function r({
    href: t,
    asTag: r,
    locale: s,
    children: n,
    ...l
  }) {
    let c = s || (0, a.useLang)();
    if (t.startsWith("http://") || t.startsWith("https://") || t.startsWith("mailto:") || t.startsWith("tel:")) return r ? (0, e.jsx)("a", {
      href: t,
      ...l,
      children: n
    }) : (0, e.jsx)(i.default, {
      href: t,
      ...l,
      children: n
    });
    let d = "en" == c ? `${t.startsWith("/")?"":"/"}${t}` : `/${c}${t.startsWith("/")?"":"/"}${t}`;
    return r ? (0, e.jsx)("a", {
      href: d,
      ...l,
      children: n
    }) : (0, e.jsx)(i.default, {
      href: d,
      ...l,
      children: n
    })
  }
  t.s(["default", () => r])
}, 66468, t => {
  "use strict";
  var e = t.i(48277),
    i = t.i(30668),
    a = t.i(50250),
    r = t.i(33544),
    s = t.i(96086),
    n = t.i(52202),
    l = t.i(16506),
    c = t.i(17435);

  function d() {
    let t = (0, c.useT)(),
      d = t("auth.verification.verify_button"),
      [o, h] = (0, i.useState)(!1),
      u = (0, s.useParams)().verify,
      [f, v] = (0, i.useState)(!0),
      [m, x] = (0, i.useState)(0),
      j = async t => {
        try {
          t.target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeDasharray="15" strokeDashoffset="15" strokeLinecap="round" strokeWidth="2" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"></animate><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></svg>';
          let e = await fetch("https://guns.lol/api/auth/verify", {
            method: "POST",
            body: JSON.stringify({
              token: u
            })
          });
          e.ok ? h(!0) : (x(e.status), console.error("Verification error:", m), h(!1))
        } finally {
          v(!1), setTimeout(function() {
            t.target.innerHTML = d
          }, 600)
        }
      };
    return (0, e.jsx)(e.Fragment, {
      children: (0, e.jsx)("div", {
        className: a.default.inv,
        children: f ? (0, e.jsx)("div", {
          className: a.default.containerWrapper,
          children: (0, e.jsxs)("div", {
            className: a.default.container,
            children: [r.default.email, (0, e.jsx)("h1", {
              children: t("auth.verification.initial_title")
            }), (0, e.jsx)("h3", {
              children: t("auth.verification.initial_description")
            }), (0, e.jsx)("div", {
              className: a.default.containerButtons,
              children: (0, e.jsx)("span", {
                onClick: j,
                children: d
              })
            })]
          })
        }) : o ? (0, e.jsx)("div", {
          className: a.default.containerWrapper,
          children: (0, e.jsxs)("div", {
            className: a.default.container,
            children: [r.default.error, (0, e.jsx)("h1", {
              children: t("auth.verification.success_title")
            }), (0, e.jsx)("h3", {
              children: t("auth.verification.success_description")
            }), (0, e.jsxs)("div", {
              className: a.default.containerButtons,
              children: [(0, e.jsx)(l.default, {
                href: "/account",
                children: t("auth.verification.success_customize_button")
              }), (0, e.jsx)(l.default, {
                href: "https://discord.gg/guns",
                target: "_blank",
                children: t("auth.verification.discord_button")
              })]
            })]
          })
        }) : 400 !== m && 0 !== m ? (0, e.jsx)("div", {
          className: a.default.containerWrapper,
          children: (0, e.jsxs)("div", {
            className: a.default.container,
            children: [r.default.error, (0, e.jsx)("h1", {
              children: t("auth.verification.unknown_error_title")
            }), (0, e.jsx)("h3", {
              children: t("auth.verification.unknown_error_description")
            }), (0, e.jsxs)("div", {
              className: a.default.containerButtons,
              children: [(0, e.jsx)(n.default, {
                href: "/",
                children: t("auth.verification.home_button")
              }), (0, e.jsx)(l.default, {
                href: "https://discord.gg/guns",
                target: "_blank",
                children: t("auth.verification.discord_button")
              })]
            })]
          })
        }) : 400 == m && (0, e.jsx)("div", {
          className: a.default.containerWrapper,
          children: (0, e.jsxs)("div", {
            className: a.default.container,
            children: [r.default.error, (0, e.jsx)("h1", {
              children: t("auth.verification.invalid_link_title")
            }), (0, e.jsx)("h3", {
              children: t("auth.verification.invalid_link_description")
            }), (0, e.jsxs)("div", {
              className: a.default.containerButtons,
              children: [(0, e.jsx)(n.default, {
                href: "/",
                children: t("auth.verification.home_button")
              }), (0, e.jsx)(l.default, {
                href: "https://discord.gg/guns",
                target: "_blank",
                children: t("auth.verification.discord_button")
              })]
            })]
          })
        })
      })
    })
  }
  t.s(["default", () => d])
}]);