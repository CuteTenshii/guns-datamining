(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6390], {
    33237: (e, s, t) => {
      Promise.resolve().then(t.bind(t, 79488))
    },
    37897: (e, s, t) => {
      "use strict";
      t.d(s, {
        A: () => c
      });
      var r = t(95155),
        a = t(12115),
        n = t(98241),
        i = t.n(n),
        o = t(54834);

      function c({
        featureName: e,
        onChangeFunction: s,
        value: t,
        placeholder: n,
        icon: c,
        prefix: u,
        prefixLength: d,
        viewPassword: l,
        onKeyPress: h,
        isImageUrl: p,
        type: m = "text",
        ..._
      }) {
        let [j, x] = (0, a.useState)(!!l);
        return (0, a.useEffect)(() => {
          x(!!l)
        }, [l]), (0, r.jsxs)("div", {
          className: i().inputContainerWrapper,
          "data-dashboard-feature-label": "string" == typeof e ? e : void 0,
          children: [e && (0, r.jsx)("h1", {
            className: i().featureName,
            children: e
          }), (0, r.jsxs)("div", {
            className: `${i().inputWrapperDiv} ${u&&i().inputWrapperURL}`,
            children: [(0, r.jsxs)("span", {
              className: i().inputWrapperSpan,
              style: {
                position: u ? "absolute" : "static"
              },
              children: [p ? (0, r.jsx)("img", {
                src: c,
                alt: "icon",
                className: i().inputWrapperIconImage
              }) : c, u && (0, r.jsx)("h1", {
                children: u
              })]
            }), l && (0, r.jsx)("p", {
              onClick: () => {
                x(!j)
              },
              children: j ? o.A.hidePassword : o.A.views
            }), (0, r.jsx)("input", {
              autoCorrect: "false",
              type: l ? j ? "password" : "text" : m,
              onKeyDown: h,
              value: t,
              style: {
                paddingLeft: u ? d : "",
                paddingRight: l ? 47 : ""
              },
              placeholder: n,
              className: i().inputWrapperInput,
              onChange: s,
              ..._
            })]
          })]
        })
      }
    },
    41804: e => {
      e.exports = {
        containerWrapper: "resetPasswordComponent_containerWrapper__cYt6e",
        container: "resetPasswordComponent_container__PWplD",
        passwordGap: "resetPasswordComponent_passwordGap__9o5Ge",
        containerButtons: "resetPasswordComponent_containerButtons__8LJKP",
        submitButton: "resetPasswordComponent_submitButton__Ydzuq"
      }
    },
    73321: (e, s, t) => {
      "use strict";
      var r = t(74645);
      t.o(r, "redirect") && t.d(s, {
        redirect: function() {
          return r.redirect
        }
      }), t.o(r, "useParams") && t.d(s, {
        useParams: function() {
          return r.useParams
        }
      }), t.o(r, "usePathname") && t.d(s, {
        usePathname: function() {
          return r.usePathname
        }
      }), t.o(r, "useRouter") && t.d(s, {
        useRouter: function() {
          return r.useRouter
        }
      }), t.o(r, "useSearchParams") && t.d(s, {
        useSearchParams: function() {
          return r.useSearchParams
        }
      })
    },
    79488: (e, s, t) => {
      "use strict";
      t.d(s, {
        default: () => x
      });
      var r = t(95155),
        a = t(12115),
        n = t(98241),
        i = t.n(n),
        o = t(41804),
        c = t.n(o),
        u = t(37897),
        d = t(54834),
        l = t(73321),
        h = t(38256);

      function p() {
        let e = (0, h.kj)(),
          s = (0, h.VJ)(),
          t = (0, l.useRouter)(),
          [n, o] = (0, a.useState)(""),
          [p, m] = (0, a.useState)(""),
          [_, j] = (0, a.useState)(""),
          x = e("auth.reset.change_password"),
          [w, f] = (0, a.useState)(x),
          v = (0, l.useParams)().reset,
          g = async () => {
            try {
              f(d.A.loading), j("");
              let e = JSON.stringify({
                  token: v,
                  password: n,
                  passwordReenter: p
                }),
                r = await fetch("https://guns.lol/api/reset/password", {
                  method: "POST",
                  body: e
                }),
                a = await r.json();
              r.ok ? t.push(s("/password/success")) : (j(a.error), f(x))
            } catch (e) {
              return console.error(e.message), !1
            } finally {
              f(x)
            }
          };
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            className: c().containerWrapper,
            children: (0, r.jsxs)("div", {
              className: c().container,
              children: [(0, r.jsx)("h1", {
                children: e("auth.reset.reset_password_title")
              }), (0, r.jsx)("h3", {
                children: e("auth.reset.reset_password_description")
              }), (0, r.jsxs)("div", {
                className: c().passwordGap,
                children: [(0, r.jsx)(u.A, {
                  featureName: e("auth.reset.reset_inputs.new_password"),
                  placeholder: e("auth.reset.reset_inputs.new_password"),
                  icon: d.A.password,
                  value: n,
                  onChangeFunction: e => {
                    o(e.target.value)
                  },
                  viewPassword: !0
                }), (0, r.jsx)(u.A, {
                  type: "password",
                  featureName: e("auth.reset.reset_inputs.confirm_password"),
                  placeholder: e("auth.reset.reset_inputs.confirm_password"),
                  icon: d.A.password,
                  value: p,
                  onChangeFunction: e => {
                    m(e.target.value)
                  }
                })]
              }), (0, r.jsxs)("div", {
                className: c().containerButtons,
                children: ["" !== _ && (0, r.jsx)("div", {
                  className: i().errorContainer,
                  children: (0, r.jsx)("span", {
                    children: _
                  })
                }), (0, r.jsx)("span", {
                  className: c().submitButton,
                  onClick: g,
                  children: w
                })]
              })]
            })
          })
        })
      }
      var m = t(98500),
        _ = t.n(m),
        j = t(81934);

      function x({
        resetData: e
      }) {
        let s = (0, h.kj)(),
          t = e?.message === "Success";
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            children: t ? (0, r.jsx)(p, {}) : (0, r.jsx)("div", {
              className: i().containerWrapper,
              children: (0, r.jsxs)("div", {
                className: i().container,
                children: [d.A.error, (0, r.jsx)("h1", {
                  children: s("auth.reset.invalid_reset_link_title")
                }), (0, r.jsx)("h3", {
                  children: s("auth.reset.invalid_reset_link_description")
                }), (0, r.jsxs)("div", {
                  className: i().containerButtons,
                  children: [(0, r.jsx)(j.A, {
                    href: "/",
                    children: s("auth.reset.reset_link_buttons.home")
                  }), (0, r.jsx)(_(), {
                    href: "https://discord.gg/guns",
                    target: "_blank",
                    children: s("auth.reset.reset_link_buttons.discord")
                  })]
                })]
              })
            })
          })
        })
      }
    },
    81934: (e, s, t) => {
      "use strict";
      t.d(s, {
        A: () => o
      });
      var r = t(95155),
        a = t(98500),
        n = t.n(a),
        i = t(38256);

      function o({
        href: e,
        asTag: s,
        locale: t,
        children: a,
        ...o
      }) {
        let c = t || (0, i.useLang)();
        if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) return s ? (0, r.jsx)("a", {
          href: e,
          ...o,
          children: a
        }) : (0, r.jsx)(n(), {
          href: e,
          ...o,
          children: a
        });
        let u = "en" == c ? `${e.startsWith("/")?"":"/"}${e}` : `/${c}${e.startsWith("/")?"":"/"}${e}`;
        return s ? (0, r.jsx)("a", {
          href: u,
          ...o,
          children: a
        }) : (0, r.jsx)(n(), {
          href: u,
          ...o,
          children: a
        })
      }
    }
  },
  e => {
    e.O(0, [4103, 5439, 8500, 8256, 5886, 8441, 3794, 7358], () => e(e.s = 33237)), _N_E = e.O()
  }
]);