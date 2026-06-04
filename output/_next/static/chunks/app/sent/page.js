(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5877], {
    30478: (e, s, t) => {
      "use strict";
      t.d(s, {
        default: () => m
      });
      var r = t(95155),
        a = t(12115),
        n = t(73321),
        i = t(98241),
        l = t.n(i);

      function o() {
        return (0, r.jsx)("div", {
          className: l().loadingPage,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24",
            children: (0, r.jsxs)("g", {
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: "2",
              children: [(0, r.jsx)("path", {
                strokeDasharray: "60",
                strokeDashoffset: "60",
                strokeOpacity: ".3",
                d: "M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z",
                children: (0, r.jsx)("animate", {
                  fill: "freeze",
                  attributeName: "stroke-dashoffset",
                  dur: "1.3s",
                  values: "60;0"
                })
              }), (0, r.jsxs)("path", {
                strokeDasharray: "15",
                strokeDashoffset: "15",
                d: "M12 3C16.9706 3 21 7.02944 21 12",
                children: [(0, r.jsx)("animate", {
                  fill: "freeze",
                  attributeName: "stroke-dashoffset",
                  dur: "0.3s",
                  values: "15;0"
                }), (0, r.jsx)("animateTransform", {
                  attributeName: "transform",
                  dur: "1.5s",
                  repeatCount: "indefinite",
                  type: "rotate",
                  values: "0 12 12;360 12 12"
                })]
              })]
            })
          })
        })
      }
      var c = t(66609),
        h = t(54834),
        u = t(81934),
        d = t(38256);

      function m() {
        let e = (0, d.kj)(),
          [s, t] = (0, a.useState)(""),
          i = (0, n.useSearchParams)(),
          m = i.get("e"),
          f = i.get("token"),
          _ = i.get("d");
        (0, a.useEffect)(() => {
          if (m) try {
            let e = atob(decodeURIComponent(m));
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) ? t(e) : t(null)
          } catch (e) {
            t(null), console.error("Error decoding email:", e)
          } else t(null)
        }, [m]);
        let p = async () => {
          let s = await fetch("https://guns.lol/api/auth/resend", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                type: _ ? "reset" : "register",
                token: f
              })
            }),
            t = await s.json();
          200 === s.status ? c.oR.success(e("auth.email_sent.resend_email_success")) : c.oR.error(t.error)
        };
        return (0, r.jsxs)(a.Suspense, {
          fallback: (0, r.jsx)(o, {}),
          children: [(0, r.jsx)(c.l$, {
            richColors: !0,
            position: "top-center",
            theme: "dark",
            className: l().toasterStyles,
            icons: {
              success: h.A.successToast
            },
            visibleToasts: 2
          }), (0, r.jsx)("div", {
            className: l().containerWrapper,
            children: (0, r.jsxs)("div", {
              className: l().container,
              children: [null !== s ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("h1", {
                  children: "pass" === _ ? e("auth.email_sent.email_sent_message", {
                    link_type: e("auth.email_sent.link_type_options.reset"),
                    email: (0, r.jsx)("strong", {
                      style: {
                        color: "#b252cc"
                      },
                      children: s
                    })
                  }) : e("auth.email_sent.email_sent_message", {
                    link_type: e("auth.email_sent.link_type_options.verification"),
                    email: (0, r.jsx)("strong", {
                      style: {
                        color: "#b252cc"
                      },
                      children: s
                    })
                  })
                }), (0, r.jsxs)("h3", {
                  children: [e("auth.email_sent.email_link_expiration", {
                    minutes: "pass" === _ ? 15 : 30
                  }), (0, r.jsx)("br", {}), e("auth.email_sent.email_tip")]
                })]
              }) : (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("h1", {
                  children: e("auth.email_sent.error_title")
                }), (0, r.jsxs)("h3", {
                  children: [e("auth.email_sent.error_invalid_email"), (0, r.jsx)("br", {})]
                })]
              }), (0, r.jsxs)("div", {
                className: l().containerButtons,
                children: [f && null !== s && (0, r.jsx)("span", {
                  onClick: p,
                  children: e("auth.email_sent.resend_email")
                }), (0, r.jsx)(u.A, {
                  href: "/",
                  children: e("auth.email_sent.back_to_home")
                })]
              })]
            })
          })]
        })
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
    81934: (e, s, t) => {
      "use strict";
      t.d(s, {
        A: () => l
      });
      var r = t(95155),
        a = t(98500),
        n = t.n(a),
        i = t(38256);

      function l({
        href: e,
        asTag: s,
        locale: t,
        children: a,
        ...l
      }) {
        let o = t || (0, i.useLang)();
        if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) return s ? (0, r.jsx)("a", {
          href: e,
          ...l,
          children: a
        }) : (0, r.jsx)(n(), {
          href: e,
          ...l,
          children: a
        });
        let c = "en" == o ? `${e.startsWith("/")?"":"/"}${e}` : `/${o}${e.startsWith("/")?"":"/"}${e}`;
        return s ? (0, r.jsx)("a", {
          href: c,
          ...l,
          children: a
        }) : (0, r.jsx)(n(), {
          href: c,
          ...l,
          children: a
        })
      }
    },
    98141: (e, s, t) => {
      Promise.resolve().then(t.bind(t, 30478))
    }
  },
  e => {
    e.O(0, [4103, 8500, 6609, 8256, 5886, 8441, 3794, 7358], () => e(e.s = 98141)), _N_E = e.O()
  }
]);