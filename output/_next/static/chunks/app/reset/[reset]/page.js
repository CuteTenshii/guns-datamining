(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6390], {
    33237: (e, s, r) => {
      Promise.resolve().then(r.bind(r, 79488))
    },
    37897: (e, s, r) => {
      "use strict";
      r.d(s, {
        A: () => u
      });
      var t = r(95155),
        a = r(12115),
        n = r(98241),
        i = r.n(n),
        c = r(54834);

      function u({
        featureName: e,
        onChangeFunction: s,
        value: r,
        placeholder: n,
        icon: u,
        prefix: d,
        prefixLength: o,
        viewPassword: l,
        onKeyPress: h,
        isImageUrl: p,
        ...m
      }) {
        let _ = (0, a.useRef)(null),
          [f, j] = (0, a.useState)(l);
        return (0, a.useEffect)(() => {
          _.current && (_.current.type = f ? "password" : "text")
        }, [f]), (0, t.jsxs)("div", {
          className: i().inputContainerWrapper,
          children: [(0, t.jsx)("h1", {
            className: i().featureName,
            children: e
          }), (0, t.jsxs)("div", {
            className: `${i().inputWrapperDiv} ${d&&i().inputWrapperURL}`,
            children: [(0, t.jsxs)("span", {
              className: i().inputWrapperSpan,
              style: {
                position: d ? "absolute" : "static"
              },
              children: [p ? (0, t.jsx)("img", {
                src: u,
                alt: "icon",
                className: i().inputWrapperIconImage
              }) : u, d && (0, t.jsx)("h1", {
                children: d
              })]
            }), l && (0, t.jsx)("p", {
              onClick: () => {
                j(!f)
              },
              children: f ? c.A.hidePassword : c.A.views
            }), (0, t.jsx)("input", {
              autoCorrect: "false",
              type: f ? "password" : "text",
              onKeyDown: h,
              value: r,
              style: {
                paddingLeft: d ? o : "",
                paddingRight: l ? 47 : ""
              },
              placeholder: n,
              className: i().inputWrapperInput,
              onChange: s,
              ...m,
              ref: _
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
    73321: (e, s, r) => {
      "use strict";
      var t = r(74645);
      r.o(t, "redirect") && r.d(s, {
        redirect: function() {
          return t.redirect
        }
      }), r.o(t, "useParams") && r.d(s, {
        useParams: function() {
          return t.useParams
        }
      }), r.o(t, "usePathname") && r.d(s, {
        usePathname: function() {
          return t.usePathname
        }
      }), r.o(t, "useRouter") && r.d(s, {
        useRouter: function() {
          return t.useRouter
        }
      }), r.o(t, "useSearchParams") && r.d(s, {
        useSearchParams: function() {
          return t.useSearchParams
        }
      })
    },
    79488: (e, s, r) => {
      "use strict";
      r.d(s, {
        default: () => j
      });
      var t = r(95155),
        a = r(12115),
        n = r(98241),
        i = r.n(n),
        c = r(41804),
        u = r.n(c),
        d = r(37897),
        o = r(54834),
        l = r(73321),
        h = r(96351);

      function p() {
        let e = (0, h.kj)(),
          s = (0, h.VJ)(),
          r = (0, l.useRouter)(),
          [n, c] = (0, a.useState)(""),
          [p, m] = (0, a.useState)(""),
          [_, f] = (0, a.useState)(""),
          j = e("auth.reset.change_password"),
          [x, w] = (0, a.useState)(j),
          v = (0, l.useParams)().reset,
          N = async () => {
            try {
              w(o.A.loading), f("");
              let e = JSON.stringify({
                  token: v,
                  password: n,
                  passwordReenter: p
                }),
                t = await fetch("https://guns.lol/api/reset/password", {
                  method: "POST",
                  body: e
                }),
                a = await t.json();
              t.ok ? r.push(s("/password/success")) : (f(a.error), w(j))
            } catch (e) {
              return console.error(e.message), !1
            } finally {
              w(j)
            }
          };
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)("div", {
            className: u().containerWrapper,
            children: (0, t.jsxs)("div", {
              className: u().container,
              children: [(0, t.jsx)("h1", {
                children: e("auth.reset.reset_password_title")
              }), (0, t.jsx)("h3", {
                children: e("auth.reset.reset_password_description")
              }), (0, t.jsxs)("div", {
                className: u().passwordGap,
                children: [(0, t.jsx)(d.A, {
                  featureName: e("auth.reset.reset_inputs.new_password"),
                  placeholder: e("auth.reset.reset_inputs.new_password"),
                  icon: o.A.password,
                  value: n,
                  onChangeFunction: e => {
                    c(e.target.value)
                  },
                  viewPassword: !0
                }), (0, t.jsx)(d.A, {
                  type: "password",
                  featureName: e("auth.reset.reset_inputs.confirm_password"),
                  placeholder: e("auth.reset.reset_inputs.confirm_password"),
                  icon: o.A.password,
                  value: p,
                  onChangeFunction: e => {
                    m(e.target.value)
                  }
                })]
              }), (0, t.jsxs)("div", {
                className: u().containerButtons,
                children: ["" !== _ && (0, t.jsx)("div", {
                  className: i().errorContainer,
                  children: (0, t.jsx)("span", {
                    children: _
                  })
                }), (0, t.jsx)("span", {
                  className: u().submitButton,
                  onClick: N,
                  children: x
                })]
              })]
            })
          })
        })
      }
      var m = r(98500),
        _ = r.n(m),
        f = r(81934);

      function j({
        resetData: e
      }) {
        let s = (0, h.kj)(),
          r = e?.message === "Success";
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)("div", {
            children: r ? (0, t.jsx)(p, {}) : (0, t.jsx)("div", {
              className: i().containerWrapper,
              children: (0, t.jsxs)("div", {
                className: i().container,
                children: [o.A.error, (0, t.jsx)("h1", {
                  children: s("auth.reset.invalid_reset_link_title")
                }), (0, t.jsx)("h3", {
                  children: s("auth.reset.invalid_reset_link_description")
                }), (0, t.jsxs)("div", {
                  className: i().containerButtons,
                  children: [(0, t.jsx)(f.A, {
                    href: "/",
                    children: s("auth.reset.reset_link_buttons.home")
                  }), (0, t.jsx)(_(), {
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
    81934: (e, s, r) => {
      "use strict";
      r.d(s, {
        A: () => c
      });
      var t = r(95155),
        a = r(98500),
        n = r.n(a),
        i = r(96351);

      function c({
        href: e,
        asTag: s,
        locale: r,
        children: a,
        ...c
      }) {
        let u = r || (0, i.useLang)();
        if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) return s ? (0, t.jsx)("a", {
          href: e,
          ...c,
          children: a
        }) : (0, t.jsx)(n(), {
          href: e,
          ...c,
          children: a
        });
        let d = "en" == u ? `${e.startsWith("/")?"":"/"}${e}` : `/${u}${e.startsWith("/")?"":"/"}${e}`;
        return s ? (0, t.jsx)("a", {
          href: d,
          ...c,
          children: a
        }) : (0, t.jsx)(n(), {
          href: d,
          ...c,
          children: a
        })
      }
    }
  },
  e => {
    e.O(0, [6560, 5439, 8500, 3200, 8441, 3794, 7358], () => e(e.s = 33237)), _N_E = e.O()
  }
]);