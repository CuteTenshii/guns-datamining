(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2212], {
    55993: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 85421))
    },
    73321: (e, t, r) => {
      "use strict";
      var i = r(74645);
      r.o(i, "redirect") && r.d(t, {
        redirect: function() {
          return i.redirect
        }
      }), r.o(i, "useParams") && r.d(t, {
        useParams: function() {
          return i.useParams
        }
      }), r.o(i, "usePathname") && r.d(t, {
        usePathname: function() {
          return i.usePathname
        }
      }), r.o(i, "useRouter") && r.d(t, {
        useRouter: function() {
          return i.useRouter
        }
      }), r.o(i, "useSearchParams") && r.d(t, {
        useSearchParams: function() {
          return i.useSearchParams
        }
      })
    },
    81934: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => a
      });
      var i = r(95155),
        s = r(38256);

      function a({
        href: e,
        asTag: t,
        locale: r,
        children: a,
        ...n
      }) {
        let c = r || (0, s.useLang)();
        if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) return (0, i.jsx)("a", {
          href: e,
          ...n,
          children: a
        });
        let o = "en" == c ? `${e.startsWith("/")?"":"/"}${e}` : `/${c}${e.startsWith("/")?"":"/"}${e}`;
        return (0, i.jsx)("a", {
          href: o,
          ...n,
          children: a
        })
      }
    },
    85421: (e, t, r) => {
      "use strict";
      r.d(t, {
        default: () => d
      });
      var i = r(95155),
        s = r(12115),
        a = r(98241),
        n = r.n(a),
        c = r(54834),
        o = r(73321),
        h = r(81934),
        u = r(38256);

      function d() {
        let e = (0, u.kj)(),
          t = e("auth.verification.verify_button"),
          [r, a] = (0, s.useState)(!1),
          d = (0, o.useParams)().verify,
          [l, f] = (0, s.useState)(!0),
          [m, v] = (0, s.useState)(0),
          x = async e => {
            try {
              e.target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeDasharray="15" strokeDashoffset="15" strokeLinecap="round" strokeWidth="2" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"></animate><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></svg>';
              let t = await fetch("https://guns.lol/api/auth/verify", {
                method: "POST",
                body: JSON.stringify({
                  token: d
                })
              });
              t.ok ? a(!0) : (v(t.status), console.error("Verification error:", m), a(!1))
            } finally {
              f(!1), setTimeout(function() {
                e.target.innerHTML = t
              }, 600)
            }
          };
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("div", {
            className: n().inv,
            children: l ? (0, i.jsx)("div", {
              className: n().containerWrapper,
              children: (0, i.jsxs)("div", {
                className: n().container,
                children: [c.A.email, (0, i.jsx)("h1", {
                  children: e("auth.verification.initial_title")
                }), (0, i.jsx)("h3", {
                  children: e("auth.verification.initial_description")
                }), (0, i.jsx)("div", {
                  className: n().containerButtons,
                  children: (0, i.jsx)("span", {
                    onClick: x,
                    children: t
                  })
                })]
              })
            }) : r ? (0, i.jsx)("div", {
              className: n().containerWrapper,
              children: (0, i.jsxs)("div", {
                className: n().container,
                children: [c.A.error, (0, i.jsx)("h1", {
                  children: e("auth.verification.success_title")
                }), (0, i.jsx)("h3", {
                  children: e("auth.verification.success_description")
                }), (0, i.jsxs)("div", {
                  className: n().containerButtons,
                  children: [(0, i.jsx)("a", {
                    href: "/account",
                    children: e("auth.verification.success_customize_button")
                  }), (0, i.jsx)("a", {
                    href: "https://discord.gg/guns",
                    target: "_blank",
                    children: e("auth.verification.discord_button")
                  })]
                })]
              })
            }) : 400 !== m && 0 !== m ? (0, i.jsx)("div", {
              className: n().containerWrapper,
              children: (0, i.jsxs)("div", {
                className: n().container,
                children: [c.A.error, (0, i.jsx)("h1", {
                  children: e("auth.verification.unknown_error_title")
                }), (0, i.jsx)("h3", {
                  children: e("auth.verification.unknown_error_description")
                }), (0, i.jsxs)("div", {
                  className: n().containerButtons,
                  children: [(0, i.jsx)(h.A, {
                    href: "/",
                    children: e("auth.verification.home_button")
                  }), (0, i.jsx)("a", {
                    href: "https://discord.gg/guns",
                    target: "_blank",
                    children: e("auth.verification.discord_button")
                  })]
                })]
              })
            }) : 400 == m && (0, i.jsx)("div", {
              className: n().containerWrapper,
              children: (0, i.jsxs)("div", {
                className: n().container,
                children: [c.A.error, (0, i.jsx)("h1", {
                  children: e("auth.verification.invalid_link_title")
                }), (0, i.jsx)("h3", {
                  children: e("auth.verification.invalid_link_description")
                }), (0, i.jsxs)("div", {
                  className: n().containerButtons,
                  children: [(0, i.jsx)(h.A, {
                    href: "/",
                    children: e("auth.verification.home_button")
                  }), (0, i.jsx)("a", {
                    href: "https://discord.gg/guns",
                    target: "_blank",
                    children: e("auth.verification.discord_button")
                  })]
                })]
              })
            })
          })
        })
      }
    }
  },
  e => {
    e.O(0, [8121, 8256, 5886, 8441, 3794, 7358], () => e(e.s = 55993)), _N_E = e.O()
  }
]);