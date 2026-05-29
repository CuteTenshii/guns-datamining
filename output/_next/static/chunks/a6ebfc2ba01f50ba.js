(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 52202, e => {
  "use strict";
  var t = e.i(48277),
    s = e.i(16506),
    a = e.i(17435);

  function r({
    href: e,
    asTag: r,
    locale: n,
    children: i,
    ...l
  }) {
    let d = n || (0, a.useLang)();
    if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) return r ? (0, t.jsx)("a", {
      href: e,
      ...l,
      children: i
    }) : (0, t.jsx)(s.default, {
      href: e,
      ...l,
      children: i
    });
    let o = "en" == d ? `${e.startsWith("/")?"":"/"}${e}` : `/${d}${e.startsWith("/")?"":"/"}${e}`;
    return r ? (0, t.jsx)("a", {
      href: o,
      ...l,
      children: i
    }) : (0, t.jsx)(s.default, {
      href: o,
      ...l,
      children: i
    })
  }
  e.s(["default", () => r])
}, 32872, e => {
  "use strict";
  var t = e.i(48277),
    s = e.i(30668),
    a = e.i(50250),
    r = e.i(33544);

  function n({
    featureName: e,
    onChangeFunction: n,
    value: i,
    placeholder: l,
    icon: d,
    prefix: o,
    prefixLength: u,
    viewPassword: c,
    onKeyPress: p,
    isImageUrl: h,
    type: f = "text",
    ...m
  }) {
    let [_, w] = (0, s.useState)(!!c);
    return (0, s.useEffect)(() => {
      w(!!c)
    }, [c]), (0, t.jsxs)("div", {
      className: a.default.inputContainerWrapper,
      "data-dashboard-feature-label": "string" == typeof e ? e : void 0,
      children: [e && (0, t.jsx)("h1", {
        className: a.default.featureName,
        children: e
      }), (0, t.jsxs)("div", {
        className: `${a.default.inputWrapperDiv} ${o&&a.default.inputWrapperURL}`,
        children: [(0, t.jsxs)("span", {
          className: a.default.inputWrapperSpan,
          style: {
            position: o ? "absolute" : "static"
          },
          children: [h ? (0, t.jsx)("img", {
            src: d,
            alt: "icon",
            className: a.default.inputWrapperIconImage
          }) : d, o && (0, t.jsx)("h1", {
            children: o
          })]
        }), c && (0, t.jsx)("p", {
          onClick: () => {
            w(!_)
          },
          children: _ ? r.default.hidePassword : r.default.views
        }), (0, t.jsx)("input", {
          autoCorrect: "false",
          type: c ? _ ? "password" : "text" : f,
          onKeyDown: p,
          value: i,
          style: {
            paddingLeft: o ? u : "",
            paddingRight: c ? 47 : ""
          },
          placeholder: l,
          className: a.default.inputWrapperInput,
          onChange: n,
          ...m
        })]
      })]
    })
  }
  e.s(["default", () => n])
}, 17649, e => {
  e.v({
    container: "resetPasswordComponent-module__ocwg3G__container",
    containerButtons: "resetPasswordComponent-module__ocwg3G__containerButtons",
    containerWrapper: "resetPasswordComponent-module__ocwg3G__containerWrapper",
    passwordGap: "resetPasswordComponent-module__ocwg3G__passwordGap",
    submitButton: "resetPasswordComponent-module__ocwg3G__submitButton"
  })
}, 57270, e => {
  "use strict";
  var t = e.i(48277),
    s = e.i(50250);
  e.i(39057);
  var a = e.i(17649),
    r = e.i(32872),
    n = e.i(33544),
    i = e.i(30668),
    l = e.i(96086),
    d = e.i(17435);

  function o() {
    let e = (0, d.useT)(),
      o = (0, d.useLocaleHref)(),
      u = (0, l.useRouter)(),
      [c, p] = (0, i.useState)(""),
      [h, f] = (0, i.useState)(""),
      [m, _] = (0, i.useState)(""),
      w = e("auth.reset.change_password"),
      [j, x] = (0, i.useState)(w),
      g = (0, l.useParams)().reset,
      v = async () => {
        try {
          x(n.default.loading), _("");
          let e = JSON.stringify({
              token: g,
              password: c,
              passwordReenter: h
            }),
            t = await fetch("https://guns.lol/api/reset/password", {
              method: "POST",
              body: e
            }),
            s = await t.json();
          t.ok ? u.push(o("/password/success")) : (_(s.error), x(w))
        } catch (e) {
          return console.error(e.message), !1
        } finally {
          x(w)
        }
      };
    return (0, t.jsx)(t.Fragment, {
      children: (0, t.jsx)("div", {
        className: a.default.containerWrapper,
        children: (0, t.jsxs)("div", {
          className: a.default.container,
          children: [(0, t.jsx)("h1", {
            children: e("auth.reset.reset_password_title")
          }), (0, t.jsx)("h3", {
            children: e("auth.reset.reset_password_description")
          }), (0, t.jsxs)("div", {
            className: a.default.passwordGap,
            children: [(0, t.jsx)(r.default, {
              featureName: e("auth.reset.reset_inputs.new_password"),
              placeholder: e("auth.reset.reset_inputs.new_password"),
              icon: n.default.password,
              value: c,
              onChangeFunction: e => {
                p(e.target.value)
              },
              viewPassword: !0
            }), (0, t.jsx)(r.default, {
              type: "password",
              featureName: e("auth.reset.reset_inputs.confirm_password"),
              placeholder: e("auth.reset.reset_inputs.confirm_password"),
              icon: n.default.password,
              value: h,
              onChangeFunction: e => {
                f(e.target.value)
              }
            })]
          }), (0, t.jsxs)("div", {
            className: a.default.containerButtons,
            children: ["" !== m && (0, t.jsx)("div", {
              className: s.default.errorContainer,
              children: (0, t.jsx)("span", {
                children: m
              })
            }), (0, t.jsx)("span", {
              className: a.default.submitButton,
              onClick: v,
              children: j
            })]
          })]
        })
      })
    })
  }
  var u = e.i(16506),
    c = e.i(52202);

  function p({
    resetData: e
  }) {
    let a = (0, d.useT)(),
      r = e?.message === "Success";
    return (0, t.jsx)(t.Fragment, {
      children: (0, t.jsx)("div", {
        children: r ? (0, t.jsx)(o, {}) : (0, t.jsx)("div", {
          className: s.default.containerWrapper,
          children: (0, t.jsxs)("div", {
            className: s.default.container,
            children: [n.default.error, (0, t.jsx)("h1", {
              children: a("auth.reset.invalid_reset_link_title")
            }), (0, t.jsx)("h3", {
              children: a("auth.reset.invalid_reset_link_description")
            }), (0, t.jsxs)("div", {
              className: s.default.containerButtons,
              children: [(0, t.jsx)(c.default, {
                href: "/",
                children: a("auth.reset.reset_link_buttons.home")
              }), (0, t.jsx)(u.default, {
                href: "https://discord.gg/guns",
                target: "_blank",
                children: a("auth.reset.reset_link_buttons.discord")
              })]
            })]
          })
        })
      })
    })
  }
  e.s(["default", () => p], 57270)
}]);