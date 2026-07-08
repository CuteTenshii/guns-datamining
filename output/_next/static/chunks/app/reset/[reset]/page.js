(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6390], {
    33237: (e, s, t) => {
      Promise.resolve().then(t.bind(t, 79488))
    },
    37897: (e, s, t) => {
      "use strict";
      t.d(s, {
        A: () => o
      });
      var r = t(95155),
        a = t(12115),
        n = t(98241),
        i = t.n(n),
        c = t(54834);

      function o({
        featureName: e,
        onChangeFunction: s,
        value: t,
        placeholder: n,
        icon: o,
        prefix: d,
        prefixLength: u,
        viewPassword: l,
        onKeyPress: h,
        isImageUrl: p,
        type: m = "text",
        ..._
      }) {
        let [f, x] = (0, a.useState)(!!l), {
          onInput: j,
          onChange: v,
          maxLength: w,
          ...N
        } = _, g = w ?? (l || "password" === m ? 72 : void 0);
        return (0, a.useEffect)(() => {
          x(!!l)
        }, [l]), (0, r.jsxs)("div", {
          className: i().inputContainerWrapper,
          "data-dashboard-feature-label": "string" == typeof e ? e : void 0,
          children: [e && (0, r.jsx)("h1", {
            className: i().featureName,
            children: e
          }), (0, r.jsxs)("div", {
            className: `${i().inputWrapperDiv} ${d&&i().inputWrapperURL}`,
            children: [(0, r.jsxs)("span", {
              className: i().inputWrapperSpan,
              style: {
                position: d ? "absolute" : "static"
              },
              children: [p ? (0, r.jsx)("img", {
                src: o,
                alt: "icon",
                className: i().inputWrapperIconImage
              }) : o, d && (0, r.jsx)("h1", {
                children: d
              })]
            }), l && (0, r.jsx)("p", {
              onClick: () => {
                x(!f)
              },
              children: f ? c.A.hidePassword : c.A.views
            }), (0, r.jsx)("input", {
              autoCorrect: "off",
              type: l ? f ? "password" : "text" : m,
              onKeyDown: h,
              value: t,
              style: {
                paddingLeft: d ? u : "",
                paddingRight: l ? 47 : ""
              },
              placeholder: n,
              className: i().inputWrapperInput,
              onInput: e => {
                j?.(e), v?.(e), s?.(e)
              },
              maxLength: g,
              ...N
            })]
          })]
        })
      }
    },
    41804: e => {
      e.exports = {
        containerWrapper: "GUNS__7d-a387b0d0-ec1769a0-bb642590",
        container: "GUNS__dc-f67e46db-fd5a2a6e-abd7d0d9",
        passwordGap: "GUNS__c6-a74ffb16-b3ec7790-97176c27",
        containerButtons: "GUNS__68-39de63c3-e71175e6-30d1f88a",
        submitButton: "GUNS__45-09662aac-e027c7cd-9f159553"
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
        default: () => _
      });
      var r = t(95155),
        a = t(12115),
        n = t(98241),
        i = t.n(n),
        c = t(41804),
        o = t.n(c),
        d = t(37897),
        u = t(54834),
        l = t(73321),
        h = t(38256);

      function p() {
        let e = (0, h.kj)(),
          s = (0, h.VJ)(),
          t = (0, l.useRouter)(),
          [n, c] = (0, a.useState)(""),
          [p, m] = (0, a.useState)(""),
          [_, f] = (0, a.useState)(""),
          x = e("auth.reset.change_password"),
          [j, v] = (0, a.useState)(x),
          w = (0, l.useParams)().reset,
          N = async () => {
            try {
              v(u.A.loading), f("");
              let e = JSON.stringify({
                  token: w,
                  password: n,
                  passwordReenter: p
                }),
                r = await fetch("https://guns.lol/api/reset/password", {
                  method: "POST",
                  body: e
                }),
                a = await r.json();
              r.ok ? t.push(s("/password/success")) : (f(a.error), v(x))
            } catch (e) {
              return console.error(e.message), !1
            } finally {
              v(x)
            }
          };
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            className: o().containerWrapper,
            children: (0, r.jsxs)("div", {
              className: o().container,
              children: [(0, r.jsx)("h1", {
                children: e("auth.reset.reset_password_title")
              }), (0, r.jsx)("h3", {
                children: e("auth.reset.reset_password_description")
              }), (0, r.jsxs)("div", {
                className: o().passwordGap,
                children: [(0, r.jsx)(d.A, {
                  featureName: e("auth.reset.reset_inputs.new_password"),
                  placeholder: e("auth.reset.reset_inputs.new_password"),
                  icon: u.A.password,
                  value: n,
                  onChangeFunction: e => {
                    c(e.target.value)
                  },
                  viewPassword: !0
                }), (0, r.jsx)(d.A, {
                  type: "password",
                  featureName: e("auth.reset.reset_inputs.confirm_password"),
                  placeholder: e("auth.reset.reset_inputs.confirm_password"),
                  icon: u.A.password,
                  value: p,
                  onChangeFunction: e => {
                    m(e.target.value)
                  }
                })]
              }), (0, r.jsxs)("div", {
                className: o().containerButtons,
                children: ["" !== _ && (0, r.jsx)("div", {
                  className: i().errorContainer,
                  children: (0, r.jsx)("span", {
                    children: _
                  })
                }), (0, r.jsx)("span", {
                  className: o().submitButton,
                  onClick: N,
                  children: j
                })]
              })]
            })
          })
        })
      }
      var m = t(81934);

      function _({
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
                children: [u.A.error, (0, r.jsx)("h1", {
                  children: s("auth.reset.invalid_reset_link_title")
                }), (0, r.jsx)("h3", {
                  children: s("auth.reset.invalid_reset_link_description")
                }), (0, r.jsxs)("div", {
                  className: i().containerButtons,
                  children: [(0, r.jsx)(m.A, {
                    href: "/",
                    children: s("auth.reset.reset_link_buttons.home")
                  }), (0, r.jsx)("a", {
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
        A: () => n
      });
      var r = t(95155),
        a = t(38256);

      function n({
        href: e,
        asTag: s,
        locale: t,
        children: n,
        ...i
      }) {
        let c = t || (0, a.useLang)();
        if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) return (0, r.jsx)("a", {
          href: e,
          ...i,
          children: n
        });
        let o = "en" == c ? `${e.startsWith("/")?"":"/"}${e}` : `/${c}${e.startsWith("/")?"":"/"}${e}`;
        return (0, r.jsx)("a", {
          href: o,
          ...i,
          children: n
        })
      }
    }
  },
  e => {
    e.O(0, [8121, 5439, 8256, 5886, 8441, 3794, 7358], () => e(e.s = 33237)), _N_E = e.O()
  }
]);