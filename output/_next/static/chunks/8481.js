"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8481], {
    18481: (e, t, n) => {
      n.d(t, {
        A: () => L
      });
      var a = n(95155),
        s = n(12115),
        r = n(65596),
        o = n(75810),
        i = n(73321),
        l = n(14079);
      let c = n(87358).env.NEXT_PUBLIC_API_URL || "https://guns.lol";
      async function u(e, t, n, a, s, r, o, i, d = !1) {
        try {
          r(l.A.loading), s("");
          let i = JSON.stringify({
              email: e,
              password: t,
              token: n,
              captchaProvider: a,
              accountAddition: d
            }),
            u = await fetch(c + "/api/auth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: i
            }),
            h = await u.json();
          if (u.ok) {
            if (h.newLocation) return o(h.resendToken), "newLocation";
            if (h.mfa) return "mfa";
            return 200
          }
          s(h.error)
        } catch (e) {
          return console.error(e.message), !1
        } finally {
          r(i("auth.login.login_text"))
        }
      }
      async function d(e, t, n, a, s, r, o, i = !1) {
        try {
          r(l.A.loading), s("");
          let o = JSON.stringify({
              email: e,
              password: t,
              newLocationOTP: n,
              trustDevice: a,
              accountAddition: i
            }),
            u = await fetch(c + "/api/auth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: o
            }),
            d = await u.json();
          if (u.ok)
            if (d.mfa) return "mfa";
            else return 200;
          s(d.error)
        } catch (e) {
          return console.error(e.message), !1
        } finally {
          r(o("auth.login.submit_text"))
        }
      }
      async function h(e, t, n, a, s, r, o, i, u, d = !1) {
        try {
          i(l.A.loading), o("");
          let u = JSON.stringify({
              email: e,
              password: t,
              mfaToken: n,
              trustDevice: s,
              newLocationOTP: a,
              useRecoveryCodes: r,
              accountAddition: d
            }),
            h = await fetch(c + "/api/auth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: u
            }),
            g = await h.json();
          if (h.ok) return 200;
          o(g.error)
        } catch (e) {
          return console.error(e.message), !1
        } finally {
          i(u("auth.login.submit_text"))
        }
      }
      var g = n(81934),
        m = n(86891),
        f = n(13782),
        p = n(37897),
        x = n(6768),
        _ = n(77570),
        y = n(18943),
        j = n.n(y),
        w = n(54834);
      let v = "guns_last_social_provider",
        N = "guns_last_social_used_at";

      function k({
        setNewLocation: e,
        setMfa: t,
        email: n,
        setEmail: c,
        password: d,
        setPassword: h,
        error: y,
        setError: k,
        text: b,
        setText: S,
        setResendToken: C,
        embedded: A = !1,
        returnPath: T,
        onSuccess: L
      }) {
        let E = (0, m.kj)(),
          P = (0, i.useSearchParams)(),
          B = T ?? P.get("returnUri"),
          R = P.get("oauthError"),
          U = "https://guns.lol",
          I = ((e, t) => {
            if (!e) return "/account";
            let n = e;
            try {
              n = decodeURIComponent(e)
            } catch {
              n = e
            }
            if (!(n = n.trim()).startsWith("/") || n.startsWith("//") || n.startsWith("/\\") || n.includes("\\")) return "/account";
            try {
              let e = new URL(n, t);
              if (e.origin !== t) return "/account";
              return e.pathname + e.search + e.hash
            } catch {
              return "/account"
            }
          })(B, U),
          $ = `${U}${I}`,
          [O, W] = (0, s.useState)(!1),
          [D, F] = (0, s.useState)("turnstile"),
          [M, K] = (0, s.useState)(!1),
          [J, q] = (0, s.useState)(!1),
          [X, Z] = (0, s.useState)(""),
          z = (0, s.useRef)(null);
        async function V(e) {
          Q(e)
        }
        async function G(e) {
          ["100", "110500", "200500", "300", "600"].some(t => e.startsWith(t)) ? F("hcaptcha") : (k(E("auth.login.invalid_captcha", {
            code: e
          })), W(!1))
        }
        let H = (0, s.useRef)({
          getToken: V,
          handleError: G
        });
        H.current = {
          getToken: V,
          handleError: G
        };
        let Q = async a => {
          W(!1);
          let s = await u(n, d, a, D, k, S, C, E, A);
          "newLocation" === s ? (k(""), e(!0)) : "mfa" === s ? (k(""), t(!0)) : s && 200 === s && (L ? L() : location.href = $)
        }, Y = async () => {
          try {
            q(!0);
            {
              let e = Date.now();
              window.localStorage.setItem(v, "discord"), window.localStorage.setItem(N, String(e))
            }
            let e = new URLSearchParams({
              returnUri: $
            });
            A && e.set("accountAddition", "true");
            let t = await fetch(`https://guns.lol/api/auth/discord/url?${e.toString()}`);
            if (!t.ok) {
              k(E("auth.login.unknown_error")), q(!1);
              return
            }
            let n = await t.json();
            if (!n?.url) {
              k(E("auth.login.unknown_error")), q(!1);
              return
            }
            window.location.href = n.url
          } catch {
            k(E("auth.login.unknown_error")), q(!1)
          }
        };
        (0, s.useEffect)(() => {
          Object.assign(window, {
            getToken: e => H.current.getToken(e),
            handleError: e => H.current.handleError(e)
          })
        }, []), (0, s.useEffect)(() => {
          R && k(R)
        }, [R, k]), (0, s.useEffect)(() => {
          let e = window.localStorage.getItem(v),
            t = Number(window.localStorage.getItem(N) || "0");
          "discord" === e && t > 0 && Z(E("auth.login.last_used"))
        }, []), (0, s.useEffect)(() => {
          K(n.includes("@"))
        }, [n]);
        let ee = () => {
            (k(""), "" === n || "" === d) ? k(E("auth.login.missing_fields_error")): /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n) ? (W(!0), setTimeout(() => {
              "turnstile" in window && window.turnstile.render(".cf-turnstile", {
                sitekey: "0x4AAAAAAAiZlunD1XPEsBtZ",
                "error-callback": G,
                callback: V
              })
            }, 100)) : k(E("auth.login.invalid_email_address"))
          },
          et = e => {
            "Enter" === e.key && (e.preventDefault(), ee())
          };
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(r.default, {
            strategy: "afterInteractive",
            src: "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",
            id: "_turnstilelogin"
          }), (0, a.jsx)(f.A, {
            opened: O,
            centerTitle: !0,
            centered: !0,
            withCloseButton: !1,
            onClose: () => W(!1),
            title: E("auth.login.verifying_request"),
            children: (0, a.jsx)("div", {
              style: {
                padding: 6,
                display: "flex",
                justifyContent: "center"
              },
              children: "turnstile" === D ? (0, a.jsx)("div", {
                className: "cf-turnstile"
              }) : (0, a.jsx)(o.A, {
                sitekey: "07967ca6-9d90-4236-8880-69ca1edc6bee",
                onVerify: e => V(e),
                theme: "dark",
                ref: z
              })
            })
          }), (0, a.jsxs)(_.A, {
            embedded: A,
            title: E("auth.login.login_account_text"),
            subtitle: E("auth.login.login_subtitle"),
            footer: A ? void 0 : (0, a.jsxs)("div", {
              className: j().footerContainer,
              children: [(0, a.jsxs)("span", {
                children: [E("auth.login.lost_access_text"), " ", (0, a.jsx)(g.A, {
                  href: "/recovery",
                  className: j().inlineLink,
                  children: E("auth.login.recover_account_link")
                })]
              }), (0, a.jsx)("span", {
                children: E("auth.login.signup_text", {
                  signup: (0, a.jsx)(g.A, {
                    href: "/register?ref=login",
                    className: j().inlineLink,
                    children: E("auth.login.signup_text_link")
                  })
                })
              })]
            }),
            children: ["" !== y && (0, a.jsx)("div", {
              className: j().errorBanner,
              children: y
            }), (0, a.jsx)("div", {
              className: j().section,
              children: (0, a.jsxs)("div", {
                className: j().credentialsStack,
                children: [(0, a.jsx)(p.A, {
                  featureName: E("auth.login.email_input_text"),
                  autoComplete: "email",
                  value: n,
                  onChangeFunction: e => c(e.target.value.trim()),
                  onKeyPress: et,
                  placeholder: E("auth.login.email_placeholder"),
                  icon: w.A.email
                }), (0, a.jsx)("div", {
                  className: `${j().passwordReveal} ${M?j().passwordRevealOpen:""}`,
                  children: (0, a.jsx)(p.A, {
                    featureName: E("auth.login.password_input_text"),
                    autoComplete: "current-password",
                    value: d,
                    onChangeFunction: e => h(e.target.value),
                    onKeyPress: et,
                    placeholder: E("auth.login.password_placeholder"),
                    icon: w.A.password,
                    viewPassword: !0
                  })
                })]
              })
            }), (0, a.jsx)("div", {
              className: j().actions,
              children: (0, a.jsx)("button", {
                type: "button",
                className: j().primaryButton,
                onClick: ee,
                children: b === E("auth.login.login_text") ? E("auth.login.login_button") : b
              })
            }), (0, a.jsx)("div", {
              className: j().divider,
              children: E("auth.login.or")
            }), (0, a.jsx)(x.A, {
              returnUri: $,
              setError: k,
              actionLabel: "continue",
              accountAddition: A
            }), (0, a.jsxs)("button", {
              type: "button",
              className: j().socialButton,
              onClick: Y,
              disabled: J,
              children: [l.A.discord, (0, a.jsx)("span", {
                children: J ? E("auth.login.discord_redirecting") : E("auth.login.continue_with_discord")
              }), X && (0, a.jsx)("span", {
                className: j().socialLastUsedBadge,
                children: X
              })]
            })]
          })]
        })
      }

      function b({
        email: e,
        password: t,
        error: n,
        setError: r,
        mfaText: o,
        setMfaText: c,
        mfaCode: u,
        setMfaCode: d,
        newLocationCode: g,
        trustDevice: f,
        setMfa: x,
        embedded: y = !1,
        returnPath: w,
        onSuccess: v
      }) {
        let N = (0, m.kj)(),
          k = (0, i.useSearchParams)(),
          b = w ?? k.get("returnUri"),
          S = "https://guns.lol",
          C = ((e, t) => {
            if (!e) return "/account";
            let n = e;
            try {
              n = decodeURIComponent(e)
            } catch {
              n = e
            }
            if (!(n = n.trim()).startsWith("/") || n.startsWith("//") || n.startsWith("/\\") || n.includes("\\")) return "/account";
            try {
              let e = new URL(n, t);
              if (e.origin !== t) return "/account";
              return e.pathname + e.search + e.hash
            } catch {
              return "/account"
            }
          })(b, S),
          A = `${S}${C}`,
          [T, L] = (0, s.useState)(!1),
          [E, P] = (0, s.useState)(""),
          B = e => {
            "Enter" === e.key && (e.preventDefault(), R())
          },
          R = async () => {
            200 === await h(e, t, T ? E : u, g, f, T, r, c, N, y) && (v ? v() : location.href = A)
          };
        return (0, a.jsxs)(_.A, {
          embedded: y,
          title: T ? N("auth.login.recovery_codes_title") : N("auth.login.mfa_title"),
          subtitle: T ? N("auth.login.recovery_codes_description") : N("auth.login.mfa_description"),
          footer: (0, a.jsx)("button", {
            type: "button",
            className: j().footerButton,
            onClick: () => {
              L(!T), r(""), d(""), P("")
            },
            children: T ? N("auth.login.use_mfa_code") : N("auth.login.use_recovery_codes")
          }),
          children: [(0, a.jsxs)("div", {
            className: j().section,
            children: [T ? (0, a.jsx)(p.A, {
              onKeyPress: B,
              featureName: N("auth.login.recovery_code_text"),
              onChangeFunction: e => {
                P(e.target.value.trim())
              },
              value: E,
              placeholder: N("auth.login.recovery_code_text"),
              icon: l.A.mfaRecoveryCode
            }) : (0, a.jsx)(p.A, {
              onKeyPress: B,
              featureName: N("auth.login.mfa_text"),
              onChangeFunction: e => {
                d(e.target.value.trim())
              },
              value: u,
              placeholder: N("auth.login.mfa_text"),
              icon: l.A.mfaToken
            }), "" !== n && (0, a.jsx)("div", {
              className: j().errorBanner,
              children: n
            })]
          }), (0, a.jsx)("div", {
            className: j().actions,
            children: (0, a.jsx)("button", {
              type: "button",
              className: j().primaryButton,
              onClick: R,
              children: o
            })
          })]
        })
      }
      var S = n(66609),
        C = n(98241),
        A = n.n(C);

      function T({
        email: e,
        password: t,
        error: n,
        setError: r,
        newLocationText: o,
        setNewLocationText: c,
        setMfa: u,
        setNewLocation: h,
        newLocationCode: g,
        setNewLocationCode: x,
        resendToken: y,
        setTrustDevice: v,
        embedded: N = !1,
        returnPath: k,
        onSuccess: b
      }) {
        let C = (0, m.kj)(),
          T = (0, i.useSearchParams)(),
          L = k ?? T.get("returnUri"),
          E = "https://guns.lol",
          P = ((e, t) => {
            if (!e) return "/account";
            let n = e;
            try {
              n = decodeURIComponent(e)
            } catch {
              n = e
            }
            if (!(n = n.trim()).startsWith("/") || n.startsWith("//") || n.startsWith("/\\") || n.includes("\\")) return "/account";
            try {
              let e = new URL(n, t);
              if (e.origin !== t) return "/account";
              return e.pathname + e.search + e.hash
            } catch {
              return "/account"
            }
          })(L, E),
          B = `${E}${P}`,
          [R, U] = (0, s.useState)(!1),
          [I, $] = (0, s.useState)(!1),
          O = async n => {
            let a = await d(e, t, g, n, r, c, C, N);
            "mfa" === a ? (U(!0), setTimeout(function() {
              u(!0), r(""), U(!1), h(!1)
            }, 1e3)) : 200 === a && (b ? b() : location.href = B)
          }, W = async () => {
            let e = await fetch("https://guns.lol/api/auth/resend", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  type: "otp",
                  token: y
                })
              }),
              t = await e.json();
            200 === e.status ? S.oR.success(C("auth.login.email_sent")) : S.oR.error(t.error)
          };
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(f.A, {
            opened: I,
            onClose: () => $(!1),
            title: C("auth.login.quick_login"),
            centered: !0,
            size: "auto",
            children: (0, a.jsxs)("div", {
              className: j().modalStack,
              children: [(0, a.jsxs)("div", {
                className: j().modalTextBlock,
                children: [(0, a.jsx)("h1", {
                  className: j().modalTitle,
                  children: C("auth.login.trust_browser_title")
                }), (0, a.jsx)("p", {
                  className: j().modalDescription,
                  children: C("auth.login.trust_browser_description")
                })]
              }), (0, a.jsxs)("div", {
                className: j().actions,
                children: [(0, a.jsx)("button", {
                  type: "button",
                  className: j().primaryButton,
                  onClick: () => {
                    $(!1), O(!0), v(!0)
                  },
                  children: C("auth.login.trust_browser_accept")
                }), (0, a.jsx)("button", {
                  type: "button",
                  className: j().secondaryButton,
                  onClick: () => {
                    $(!1), O(!1), v(!1)
                  },
                  children: C("auth.login.trust_browser_decline")
                })]
              })]
            })
          }), (0, a.jsx)(S.l$, {
            richColors: !0,
            position: "top-center",
            theme: "dark",
            className: A().toasterStyles,
            icons: {
              success: w.A.successToast
            },
            visibleToasts: 2
          }), (0, a.jsx)(_.A, {
            embedded: N,
            title: C("auth.login.new_location_title"),
            subtitle: C("auth.login.new_location_description"),
            footer: (0, a.jsx)("button", {
              type: "button",
              className: j().footerButton,
              onClick: W,
              children: C("auth.login.resend_email")
            }),
            children: R ? (0, a.jsxs)("div", {
              className: j().centeredStack,
              children: [(0, a.jsx)("div", {
                className: j().loadingIcon,
                children: l.A.loading
              }), (0, a.jsx)("p", {
                className: j().loadingMessage,
                children: C("auth.login.verifying_request")
              })]
            }) : (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsxs)("div", {
                className: j().section,
                children: [(0, a.jsx)(p.A, {
                  featureName: C("auth.login.otp_text"),
                  onKeyPress: e => {
                    "Enter" === e.key && (e.preventDefault(), $(!0))
                  },
                  onChangeFunction: e => {
                    x(e.target.value.trim())
                  },
                  value: g,
                  placeholder: C("auth.login.otp"),
                  icon: l.A.newLocation
                }), "" !== n && (0, a.jsx)("div", {
                  className: j().errorBanner,
                  children: n
                })]
              }), (0, a.jsx)("div", {
                className: j().actions,
                children: (0, a.jsx)("button", {
                  type: "button",
                  className: j().primaryButton,
                  onClick: () => $(!0),
                  children: o
                })
              })]
            })
          })]
        })
      }

      function L({
        embedded: e = !1,
        returnPath: t,
        onSuccess: n
      }) {
        let r = (0, m.kj)(),
          [o, i] = (0, s.useState)(!1),
          [l, c] = (0, s.useState)(!1),
          [u, d] = (0, s.useState)(""),
          [h, g] = (0, s.useState)(""),
          [f, p] = (0, s.useState)(""),
          [x, _] = (0, s.useState)(r("auth.login.login_text")),
          [y, j] = (0, s.useState)(r("auth.login.submit_text")),
          [w, v] = (0, s.useState)(r("auth.login.submit_text")),
          [N, S] = (0, s.useState)(""),
          [C, A] = (0, s.useState)(""),
          [L, E] = (0, s.useState)(""),
          [P, B] = (0, s.useState)(!1),
          R = {
            embedded: e,
            returnPath: t,
            onSuccess: n
          };
        return l ? (0, a.jsx)(T, {
          ...R,
          email: u,
          password: h,
          error: f,
          setError: p,
          newLocationText: w,
          setNewLocationText: v,
          setMfa: i,
          setNewLocation: c,
          newLocationCode: C,
          setNewLocationCode: A,
          resendToken: L,
          setTrustDevice: B
        }) : o ? (0, a.jsx)(b, {
          ...R,
          email: u,
          password: h,
          error: f,
          setError: p,
          mfaText: y,
          setMfaText: j,
          mfaCode: N,
          setMfaCode: S,
          newLocationCode: C,
          trustDevice: P,
          setMfa: i
        }) : (0, a.jsx)(k, {
          ...R,
          setMfa: i,
          email: u,
          setEmail: d,
          password: h,
          setPassword: g,
          error: f,
          setError: p,
          text: x,
          setText: _,
          setNewLocation: c,
          setResendToken: E
        })
      }
    }
  }
]);