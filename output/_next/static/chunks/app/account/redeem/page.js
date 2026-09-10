(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8191], {
    37897: (e, a, r) => {
      "use strict";
      r.d(a, {
        A: () => c
      });
      var s = r(95155),
        t = r(12115),
        n = r(98241),
        o = r.n(n),
        i = r(54834);

      function c({
        featureName: e,
        onChangeFunction: a,
        value: r,
        placeholder: n,
        icon: c,
        prefix: d,
        prefixLength: u,
        viewPassword: l,
        onKeyPress: p,
        isImageUrl: m,
        iconInside: h,
        type: f = "text",
        ..._
      }) {
        let [g, b] = (0, t.useState)(!!l), {
          onInput: x,
          onChange: N,
          maxLength: v,
          ...j
        } = _, C = v ?? (l || "password" === f ? 72 : void 0);
        return (0, t.useEffect)(() => {
          b(!!l)
        }, [l]), (0, s.jsxs)("div", {
          className: o().inputContainerWrapper,
          "data-dashboard-feature-label": "string" == typeof e ? e : void 0,
          children: [e && (0, s.jsx)("h1", {
            className: o().featureName,
            children: e
          }), (0, s.jsxs)("div", {
            className: `${o().inputWrapperDiv} ${d&&o().inputWrapperURL} ${h&&o().inputWrapperIconInside}`,
            children: [(0, s.jsxs)("span", {
              className: o().inputWrapperSpan,
              style: {
                position: d || h ? "absolute" : "static"
              },
              children: [m ? (0, s.jsx)("img", {
                src: c,
                alt: "icon",
                className: o().inputWrapperIconImage
              }) : c, d && (0, s.jsx)("h1", {
                children: d
              })]
            }), l && (0, s.jsx)("p", {
              onClick: () => {
                b(!g)
              },
              children: g ? i.A.hidePassword : i.A.views
            }), (0, s.jsx)("input", {
              autoCorrect: "off",
              type: l ? g ? "password" : "text" : f,
              onKeyDown: p,
              value: r,
              style: {
                paddingLeft: d ? u : "",
                paddingRight: l ? 47 : ""
              },
              placeholder: n,
              className: o().inputWrapperInput,
              onInput: e => {
                x?.(e), N?.(e), a?.(e)
              },
              maxLength: C,
              ...j
            })]
          })]
        })
      }
    },
    55182: e => {
      e.exports = {
        redeemPageWrapper: "GUNS__82-9944aebb-faa1cf7f-8cb3a1c6",
        redeemContainer: "GUNS__d2-2581368c-a25bf1b5-712980df",
        redeemContainerDescription: "GUNS__c7-01c6ede4-66bc0dda-30beb52f",
        redeemButton: "GUNS__7b-d02e1a0c-1385f502-c3c73fbe",
        errorContainer: "GUNS__79-e226d4aa-80307cc0-532539d5",
        productSelection: "GUNS__d1-14d4d0b2-802260b9-ca7f3f9c",
        selection: "GUNS__22-f7da488e-181024d1-14bd605e",
        selected: "GUNS__5e-924bf5c8-139fae8e-041b93a4"
      }
    },
    73321: (e, a, r) => {
      "use strict";
      var s = r(74645);
      r.o(s, "redirect") && r.d(a, {
        redirect: function() {
          return s.redirect
        }
      }), r.o(s, "useParams") && r.d(a, {
        useParams: function() {
          return s.useParams
        }
      }), r.o(s, "usePathname") && r.d(a, {
        usePathname: function() {
          return s.usePathname
        }
      }), r.o(s, "useRouter") && r.d(a, {
        useRouter: function() {
          return s.useRouter
        }
      }), r.o(s, "useSearchParams") && r.d(a, {
        useSearchParams: function() {
          return s.useSearchParams
        }
      })
    },
    85259: (e, a, r) => {
      "use strict";
      r.d(a, {
        default: () => h
      });
      var s = r(95155),
        t = r(12115),
        n = r(55182),
        o = r.n(n),
        i = r(98241),
        c = r.n(i),
        d = r(54834),
        u = r(66609),
        l = r(37897),
        p = r(86891),
        m = r(73321);

      function h() {
        let e = (0, p.kj)(),
          a = e("dashboard.account.redeem.redeem_button"),
          [r, n] = (0, t.useState)(""),
          [i, h] = (0, t.useState)(""),
          f = (0, m.useSearchParams)().get("select") || "guns_premium",
          [_, g] = (0, t.useState)(f),
          b = async e => {
            let a = await fetch("https://guns.lol/api/account/redeem", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  code: e,
                  product: _
                })
              }),
              r = await a.json();
            if (r.error) return void h(r.error);
            if ("guns_premium" === _) {
              location.href = `/billing/success?type=${btoa("premium")}&redeemed=true`;
              return
            }
            if ("hone_promo" === _) {
              location.href = `/billing/success?type=${btoa("hone_promo")}&redeemed=true`;
              return
            }
          }, x = async s => {
            s.target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0"></animate></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"></animate><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></g></svg>', h("");
            try {
              let a = ("guns_premium" === _ ? /^GUNS-[a-zA-Z0-9]{6}-PREMIUM-[a-zA-Z0-9]{6}$/ : /^GUNS-[a-zA-Z0-9]{6}-HONE-[a-zA-Z0-9]{6}$/).test(r);
              if ("" === r || !a) return void h(e("dashboard.account.redeem.invalid_code"));
              await b(r)
            } finally {
              s.target.innerHTML = a
            }
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(u.l$, {
            richColors: !0,
            position: "top-center",
            theme: "dark",
            className: c().toasterStyles,
            icons: {
              success: d.A.successToast
            },
            visibleToasts: 2
          }), (0, s.jsx)("div", {
            className: o().redeemPageWrapper,
            children: (0, s.jsxs)("div", {
              className: o().redeemContainer,
              children: [(0, s.jsxs)("div", {
                className: o().redeemContainerDescription,
                children: [(0, s.jsxs)("h1", {
                  children: [d.A.key, " ", e("dashboard.account.redeem.title")]
                }), (0, s.jsx)("h3", {
                  children: e("dashboard.account.redeem.description")
                })]
              }), (0, s.jsxs)("div", {
                className: o().productSelection,
                children: [(0, s.jsxs)("div", {
                  className: `${o().selection} ${"guns_premium"===_?o().selected:""}`,
                  onClick: () => g("guns_premium"),
                  children: [(0, s.jsx)("img", {
                    src: "https://assets.guns.lol/guns_logo_no_background_cropped.png",
                    alt: ""
                  }), (0, s.jsx)("h1", {
                    children: e("dashboard.account.redeem.premium_product")
                  })]
                }), (0, s.jsxs)("div", {
                  className: `${o().selection} ${"hone_promo"===_?o().selected:""}`,
                  onClick: () => g("hone_promo"),
                  children: [(0, s.jsx)("img", {
                    src: "https://assets.guns.lol/hone_x_guns/Hone%20Icon%20White%404x.png",
                    alt: ""
                  }), (0, s.jsx)("h1", {
                    children: e("dashboard.account.redeem.hone_product")
                  })]
                })]
              }), (0, s.jsx)(l.A, {
                value: r,
                onChangeFunction: e => {
                  n(e.target.value)
                },
                icon: d.A.key,
                placeholder: "guns_premium" === _ ? e("dashboard.account.redeem.code_placeholder") : e("dashboard.account.redeem.hone_code_placeholder")
              }), "" !== i && (0, s.jsx)("div", {
                className: o().errorContainer,
                children: (0, s.jsx)("span", {
                  children: i
                })
              }), (0, s.jsx)("span", {
                className: o().redeemButton,
                onClick: x,
                children: a
              })]
            })
          })]
        })
      }
    },
    85607: (e, a, r) => {
      Promise.resolve().then(r.bind(r, 85259))
    }
  },
  e => {
    e.O(0, [7689, 379, 6609, 6891, 5886, 8441, 3794, 7358], () => e(e.s = 85607)), _N_E = e.O()
  }
]);