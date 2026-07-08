(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4520], {
    28356: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = {
        cancelIdleCallback: function() {
          return s
        },
        requestIdleCallback: function() {
          return a
        }
      };
      for (var r in n) Object.defineProperty(t, r, {
        enumerable: !0,
        get: n[r]
      });
      let a = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
          let t = Date.now();
          return self.setTimeout(function() {
            e({
              didTimeout: !1,
              timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - t))
              }
            })
          }, 1)
        },
        s = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
          return clearTimeout(e)
        };
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    42593: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = {
        default: function() {
          return x
        },
        handleClientScriptLoad: function() {
          return p
        },
        initScriptLoader: function() {
          return _
        }
      };
      for (var a in r) Object.defineProperty(t, a, {
        enumerable: !0,
        get: r[a]
      });
      let s = n(73623),
        i = n(66388),
        o = n(95155),
        l = s._(n(47650)),
        c = i._(n(12115)),
        u = n(75368),
        d = n(3584),
        h = n(28356),
        f = new Map,
        g = new Set,
        m = e => {
          let {
            src: t,
            id: n,
            onLoad: r = () => {},
            onReady: a = null,
            dangerouslySetInnerHTML: s,
            children: i = "",
            strategy: o = "afterInteractive",
            onError: c,
            stylesheets: u
          } = e, h = n || t;
          if (h && g.has(h)) return;
          if (f.has(t)) {
            g.add(h), f.get(t).then(r, c);
            return
          }
          let m = () => {
              a && a(), g.add(h)
            },
            p = document.createElement("script"),
            _ = new Promise((e, t) => {
              p.addEventListener("load", function(t) {
                e(), r && r.call(this, t), m()
              }), p.addEventListener("error", function(e) {
                t(e)
              })
            }).catch(function(e) {
              c && c(e)
            });
          s ? (p.innerHTML = s.__html || "", m()) : i ? (p.textContent = "string" == typeof i ? i : Array.isArray(i) ? i.join("") : "", m()) : t && (p.src = t, f.set(t, _)), (0, d.setAttributesFromProps)(p, e), "worker" === o && p.setAttribute("type", "text/partytown"), p.setAttribute("data-nscript", o), u && (e => {
            if (l.default.preinit) return e.forEach(e => {
              l.default.preinit(e, {
                as: "style"
              })
            });
            {
              let t = document.head;
              e.forEach(e => {
                let n = document.createElement("link");
                n.type = "text/css", n.rel = "stylesheet", n.href = e, t.appendChild(n)
              })
            }
          })(u), document.body.appendChild(p)
        };

      function p(e) {
        let {
          strategy: t = "afterInteractive"
        } = e;
        "lazyOnload" === t ? window.addEventListener("load", () => {
          (0, h.requestIdleCallback)(() => m(e))
        }) : m(e)
      }

      function _(e) {
        e.forEach(p), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
          let t = e.id || e.getAttribute("src");
          g.add(t)
        })
      }

      function y(e) {
        let {
          id: t,
          src: n = "",
          onLoad: r = () => {},
          onReady: a = null,
          strategy: s = "afterInteractive",
          onError: i,
          stylesheets: d,
          ...f
        } = e, {
          updateScripts: p,
          scripts: _,
          getIsSsr: y,
          appDir: x,
          nonce: w
        } = (0, c.useContext)(u.HeadManagerContext);
        w = f.nonce || w;
        let j = (0, c.useRef)(!1);
        (0, c.useEffect)(() => {
          let e = t || n;
          j.current || (a && e && g.has(e) && a(), j.current = !0)
        }, [a, t, n]);
        let v = (0, c.useRef)(!1);
        if ((0, c.useEffect)(() => {
            if (!v.current) {
              if ("afterInteractive" === s) m(e);
              else "lazyOnload" === s && ("complete" === document.readyState ? (0, h.requestIdleCallback)(() => m(e)) : window.addEventListener("load", () => {
                (0, h.requestIdleCallback)(() => m(e))
              }));
              v.current = !0
            }
          }, [e, s]), ("beforeInteractive" === s || "worker" === s) && (p ? (_[s] = (_[s] || []).concat([{
            id: t,
            src: n,
            onLoad: r,
            onReady: a,
            onError: i,
            ...f,
            nonce: w
          }]), p(_)) : y && y() ? g.add(t || n) : y && !y() && m({
            ...e,
            nonce: w
          })), x) {
          if (d && d.forEach(e => {
              l.default.preinit(e, {
                as: "style"
              })
            }), "beforeInteractive" === s)
            if (!n) return f.dangerouslySetInnerHTML && (f.children = f.dangerouslySetInnerHTML.__html, delete f.dangerouslySetInnerHTML), (0, o.jsx)("script", {
              nonce: w,
              dangerouslySetInnerHTML: {
                __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([0,{...f,id:t}])})`
              }
            });
            else return l.default.preload(n, f.integrity ? {
              as: "script",
              integrity: f.integrity,
              nonce: w,
              crossOrigin: f.crossOrigin
            } : {
              as: "script",
              nonce: w,
              crossOrigin: f.crossOrigin
            }), (0, o.jsx)("script", {
              nonce: w,
              dangerouslySetInnerHTML: {
                __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([n,{...f,id:t}])})`
              }
            });
          "afterInteractive" === s && n && l.default.preload(n, f.integrity ? {
            as: "script",
            integrity: f.integrity,
            nonce: w,
            crossOrigin: f.crossOrigin
          } : {
            as: "script",
            nonce: w,
            crossOrigin: f.crossOrigin
          })
        }
        return null
      }
      Object.defineProperty(y, "__nextScript", {
        value: !0
      });
      let x = y;
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    45619: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 65639))
    },
    65596: (e, t, n) => {
      "use strict";
      n.d(t, {
        default: () => a.a
      });
      var r = n(42593),
        a = n.n(r)
    },
    65639: (e, t, n) => {
      "use strict";
      n.d(t, {
        default: () => L
      });
      var r = n(95155),
        a = n(12115),
        s = n(65596),
        i = n(75810),
        o = n(73321),
        l = n(14079);
      let c = n(87358).env.NEXT_PUBLIC_API_URL || "https://guns.lol";
      async function u(e, t, n, r, a, s, i, o) {
        try {
          s(l.A.loading), a("");
          let o = JSON.stringify({
              email: e,
              password: t,
              token: n,
              captchaProvider: r
            }),
            u = await fetch(c + "/api/auth/login", {
              method: "POST",
              body: o
            }),
            d = await u.json();
          if (u.ok) {
            if (d.newLocation) return i(d.resendToken), "newLocation";
            if (d.mfa) return "mfa";
            return 200
          }
          a(d.error)
        } catch (e) {
          return console.error(e.message), !1
        } finally {
          s(o("auth.login.login_text"))
        }
      }
      async function d(e, t, n, r, a, s, i) {
        try {
          s(l.A.loading), a("");
          let i = JSON.stringify({
              email: e,
              password: t,
              newLocationOTP: n,
              trustDevice: r
            }),
            o = await fetch(c + "/api/auth/login", {
              method: "POST",
              body: i
            }),
            u = await o.json();
          if (o.ok)
            if (u.mfa) return "mfa";
            else return 200;
          a(u.error)
        } catch (e) {
          return console.error(e.message), !1
        } finally {
          s(i("auth.login.submit_text"))
        }
      }
      async function h(e, t, n, r, a, s, i, o, u) {
        try {
          o(l.A.loading), i("");
          let u = JSON.stringify({
              email: e,
              password: t,
              mfaToken: n,
              trustDevice: a,
              newLocationOTP: r,
              useRecoveryCodes: s
            }),
            d = await fetch(c + "/api/auth/login", {
              method: "POST",
              body: u
            }),
            h = await d.json();
          if (d.ok) return 200;
          i(h.error)
        } catch (e) {
          return console.error(e.message), !1
        } finally {
          o(u("auth.login.submit_text"))
        }
      }
      var f = n(81934),
        g = n(38256),
        m = n(57776),
        p = n(37897),
        _ = n(6768),
        y = n(77570),
        x = n(18943),
        w = n.n(x),
        j = n(54834);
      let v = "guns_last_social_provider",
        b = "guns_last_social_used_at";

      function k({
        setNewLocation: e,
        setMfa: t,
        email: n,
        setEmail: c,
        password: d,
        setPassword: h,
        error: x,
        setError: k,
        text: S,
        setText: N,
        setResendToken: C
      }) {
        let A = (0, g.kj)(),
          I = (0, o.useSearchParams)(),
          L = I.get("returnUri"),
          O = I.get("oauthError"),
          T = "https://guns.lol",
          E = ((e, t) => {
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
          })(L, T),
          P = `${T}${E}`,
          [M, R] = (0, a.useState)(!1),
          [B, U] = (0, a.useState)("turnstile"),
          [$, q] = (0, a.useState)(!1),
          [D, F] = (0, a.useState)(!1),
          [W, H] = (0, a.useState)(""),
          J = (0, a.useRef)(null);
        async function K(e) {
          X(e)
        }
        async function z(e) {
          ["100", "110500", "200500", "300", "600"].some(t => e.startsWith(t)) ? U("hcaptcha") : (k(A("auth.login.invalid_captcha", {
            code: e
          })), R(!1))
        }
        let X = async r => {
          R(!1);
          let a = await u(n, d, r, B, k, N, C, A);
          "newLocation" === a ? (k(""), e(!0)) : "mfa" === a ? (k(""), t(!0)) : a && 200 === a && (location.href = P)
        }, Z = async () => {
          try {
            F(!0);
            {
              let e = Date.now();
              window.localStorage.setItem(v, "discord"), window.localStorage.setItem(b, String(e))
            }
            let e = new URLSearchParams({
                returnUri: P
              }),
              t = await fetch(`https://guns.lol/api/auth/discord/url?${e.toString()}`);
            if (!t.ok) {
              k(A("auth.login.unknown_error")), F(!1);
              return
            }
            let n = await t.json();
            if (!n?.url) {
              k(A("auth.login.unknown_error")), F(!1);
              return
            }
            window.location.href = n.url
          } catch {
            k(A("auth.login.unknown_error")), F(!1)
          }
        };
        (0, a.useEffect)(() => {
          Object.assign(window, {
            getToken: K,
            handleError: z
          })
        }, []), (0, a.useEffect)(() => {
          O && k(O)
        }, [O, k]), (0, a.useEffect)(() => {
          let e = window.localStorage.getItem(v),
            t = Number(window.localStorage.getItem(b) || "0");
          "discord" === e && t > 0 && H(A("auth.login.last_used"))
        }, []), (0, a.useEffect)(() => {
          q(n.includes("@"))
        }, [n]);
        let V = () => {
            (k(""), "" === n || "" === d) ? k(A("auth.login.missing_fields_error")): /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n) ? (R(!0), setTimeout(() => {
              "turnstile" in window && window.turnstile.render(".cf-turnstile", {
                sitekey: "0x4AAAAAAAiZlunD1XPEsBtZ",
                "error-callback": z,
                callback: K
              })
            }, 100)) : k(A("auth.login.invalid_email_address"))
          },
          G = e => {
            "Enter" === e.key && (e.preventDefault(), V())
          };
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.default, {
            strategy: "afterInteractive",
            src: "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",
            id: "_turnstilelogin"
          }), (0, r.jsx)(m.A, {
            opened: M,
            centerTitle: !0,
            centered: !0,
            withCloseButton: !1,
            onClose: () => R(!1),
            title: A("auth.login.verifying_request"),
            children: (0, r.jsx)("div", {
              style: {
                padding: 6,
                display: "flex",
                justifyContent: "center"
              },
              children: "turnstile" === B ? (0, r.jsx)("div", {
                className: "cf-turnstile"
              }) : (0, r.jsx)(i.A, {
                sitekey: "07967ca6-9d90-4236-8880-69ca1edc6bee",
                onVerify: e => K(e),
                theme: "dark",
                ref: J
              })
            })
          }), (0, r.jsxs)(y.A, {
            title: A("auth.login.login_account_text"),
            subtitle: A("auth.login.login_subtitle"),
            footer: (0, r.jsxs)("div", {
              className: w().footerContainer,
              children: [(0, r.jsxs)("span", {
                children: [A("auth.login.lost_access_text"), " ", (0, r.jsx)(f.A, {
                  href: "/recovery",
                  className: w().inlineLink,
                  children: A("auth.login.recover_account_link")
                })]
              }), (0, r.jsx)("span", {
                children: A("auth.login.signup_text", {
                  signup: (0, r.jsx)(f.A, {
                    href: "/register?ref=login",
                    className: w().inlineLink,
                    children: A("auth.login.signup_text_link")
                  })
                })
              })]
            }),
            children: ["" !== x && (0, r.jsx)("div", {
              className: w().errorBanner,
              children: x
            }), (0, r.jsx)("div", {
              className: w().section,
              children: (0, r.jsxs)("div", {
                className: w().credentialsStack,
                children: [(0, r.jsx)(p.A, {
                  featureName: A("auth.login.email_input_text"),
                  autoComplete: "email",
                  value: n,
                  onChangeFunction: e => c(e.target.value.trim()),
                  onKeyPress: G,
                  placeholder: A("auth.login.email_placeholder"),
                  icon: j.A.email
                }), (0, r.jsx)("div", {
                  className: `${w().passwordReveal} ${$?w().passwordRevealOpen:""}`,
                  children: (0, r.jsx)(p.A, {
                    featureName: A("auth.login.password_input_text"),
                    autoComplete: "current-password",
                    value: d,
                    onChangeFunction: e => h(e.target.value),
                    onKeyPress: G,
                    placeholder: A("auth.login.password_placeholder"),
                    icon: j.A.password,
                    viewPassword: !0
                  })
                })]
              })
            }), (0, r.jsx)("div", {
              className: w().actions,
              children: (0, r.jsx)("button", {
                type: "button",
                className: w().primaryButton,
                onClick: V,
                children: S === A("auth.login.login_text") ? A("auth.login.login_button") : S
              })
            }), (0, r.jsx)("div", {
              className: w().divider,
              children: A("auth.login.or")
            }), (0, r.jsx)(_.A, {
              returnUri: P,
              setError: k,
              actionLabel: "continue"
            }), (0, r.jsxs)("button", {
              type: "button",
              className: w().socialButton,
              onClick: Z,
              disabled: D,
              children: [l.A.discord, (0, r.jsx)("span", {
                children: D ? A("auth.login.discord_redirecting") : A("auth.login.continue_with_discord")
              }), W && (0, r.jsx)("span", {
                className: w().socialLastUsedBadge,
                children: W
              })]
            })]
          })]
        })
      }

      function S({
        email: e,
        password: t,
        error: n,
        setError: s,
        mfaText: i,
        setMfaText: c,
        mfaCode: u,
        setMfaCode: d,
        newLocationCode: f,
        trustDevice: m,
        setMfa: _
      }) {
        let x = (0, g.kj)(),
          j = (0, o.useSearchParams)().get("returnUri"),
          v = "https://guns.lol",
          b = ((e, t) => {
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
          })(j, v),
          k = `${v}${b}`,
          [S, N] = (0, a.useState)(!1),
          [C, A] = (0, a.useState)(""),
          I = e => {
            "Enter" === e.key && (e.preventDefault(), L())
          },
          L = async () => {
            200 === await h(e, t, S ? C : u, f, m, S, s, c, x) && (location.href = k)
          };
        return (0, r.jsxs)(y.A, {
          title: S ? x("auth.login.recovery_codes_title") : x("auth.login.mfa_title"),
          subtitle: S ? x("auth.login.recovery_codes_description") : x("auth.login.mfa_description"),
          footer: (0, r.jsx)("button", {
            type: "button",
            className: w().footerButton,
            onClick: () => {
              N(!S), s(""), d(""), A("")
            },
            children: S ? x("auth.login.use_mfa_code") : x("auth.login.use_recovery_codes")
          }),
          children: [(0, r.jsxs)("div", {
            className: w().section,
            children: [S ? (0, r.jsx)(p.A, {
              onKeyPress: I,
              featureName: x("auth.login.recovery_code_text"),
              onChangeFunction: e => {
                A(e.target.value.trim())
              },
              value: C,
              placeholder: x("auth.login.recovery_code_text"),
              icon: l.A.mfaRecoveryCode
            }) : (0, r.jsx)(p.A, {
              onKeyPress: I,
              featureName: x("auth.login.mfa_text"),
              onChangeFunction: e => {
                d(e.target.value.trim())
              },
              value: u,
              placeholder: x("auth.login.mfa_text"),
              icon: l.A.mfaToken
            }), "" !== n && (0, r.jsx)("div", {
              className: w().errorBanner,
              children: n
            })]
          }), (0, r.jsx)("div", {
            className: w().actions,
            children: (0, r.jsx)("button", {
              type: "button",
              className: w().primaryButton,
              onClick: L,
              children: i
            })
          })]
        })
      }
      var N = n(66609),
        C = n(98241),
        A = n.n(C);

      function I({
        email: e,
        password: t,
        error: n,
        setError: s,
        newLocationText: i,
        setNewLocationText: c,
        setMfa: u,
        setNewLocation: h,
        newLocationCode: f,
        setNewLocationCode: _,
        resendToken: x,
        setTrustDevice: v
      }) {
        let b = (0, g.kj)(),
          k = (0, o.useSearchParams)().get("returnUri"),
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
          })(k, S),
          I = `${S}${C}`,
          [L, O] = (0, a.useState)(!1),
          [T, E] = (0, a.useState)(!1),
          P = async n => {
            let r = await d(e, t, f, n, s, c, b);
            "mfa" === r ? (O(!0), setTimeout(function() {
              u(!0), s(""), O(!1), h(!1)
            }, 1e3)) : 200 === r && (location.href = I)
          }, M = async () => {
            let e = await fetch("https://guns.lol/api/auth/resend", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  type: "otp",
                  token: x
                })
              }),
              t = await e.json();
            200 === e.status ? N.oR.success(b("auth.login.email_sent")) : N.oR.error(t.error)
          };
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(m.A, {
            opened: T,
            onClose: () => E(!1),
            title: b("auth.login.quick_login"),
            centered: !0,
            size: "auto",
            children: (0, r.jsxs)("div", {
              className: w().modalStack,
              children: [(0, r.jsxs)("div", {
                className: w().modalTextBlock,
                children: [(0, r.jsx)("h1", {
                  className: w().modalTitle,
                  children: b("auth.login.trust_browser_title")
                }), (0, r.jsx)("p", {
                  className: w().modalDescription,
                  children: b("auth.login.trust_browser_description")
                })]
              }), (0, r.jsxs)("div", {
                className: w().actions,
                children: [(0, r.jsx)("button", {
                  type: "button",
                  className: w().primaryButton,
                  onClick: () => {
                    E(!1), P(!0), v(!0)
                  },
                  children: b("auth.login.trust_browser_accept")
                }), (0, r.jsx)("button", {
                  type: "button",
                  className: w().secondaryButton,
                  onClick: () => {
                    E(!1), P(!1), v(!1)
                  },
                  children: b("auth.login.trust_browser_decline")
                })]
              })]
            })
          }), (0, r.jsx)(N.l$, {
            richColors: !0,
            position: "top-center",
            theme: "dark",
            className: A().toasterStyles,
            icons: {
              success: j.A.successToast
            },
            visibleToasts: 2
          }), (0, r.jsx)(y.A, {
            title: b("auth.login.new_location_title"),
            subtitle: b("auth.login.new_location_description"),
            footer: (0, r.jsx)("button", {
              type: "button",
              className: w().footerButton,
              onClick: M,
              children: b("auth.login.resend_email")
            }),
            children: L ? (0, r.jsxs)("div", {
              className: w().centeredStack,
              children: [(0, r.jsx)("div", {
                className: w().loadingIcon,
                children: l.A.loading
              }), (0, r.jsx)("p", {
                className: w().loadingMessage,
                children: b("auth.login.verifying_request")
              })]
            }) : (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsxs)("div", {
                className: w().section,
                children: [(0, r.jsx)(p.A, {
                  featureName: b("auth.login.otp_text"),
                  onKeyPress: e => {
                    "Enter" === e.key && (e.preventDefault(), E(!0))
                  },
                  onChangeFunction: e => {
                    _(e.target.value.trim())
                  },
                  value: f,
                  placeholder: b("auth.login.otp"),
                  icon: l.A.newLocation
                }), "" !== n && (0, r.jsx)("div", {
                  className: w().errorBanner,
                  children: n
                })]
              }), (0, r.jsx)("div", {
                className: w().actions,
                children: (0, r.jsx)("button", {
                  type: "button",
                  className: w().primaryButton,
                  onClick: () => E(!0),
                  children: i
                })
              })]
            })
          })]
        })
      }

      function L() {
        let e = (0, g.kj)(),
          [t, n] = (0, a.useState)(!1),
          [s, i] = (0, a.useState)(!1),
          [o, l] = (0, a.useState)(""),
          [c, u] = (0, a.useState)(""),
          [d, h] = (0, a.useState)(""),
          [f, m] = (0, a.useState)(e("auth.login.login_text")),
          [p, _] = (0, a.useState)(e("auth.login.submit_text")),
          [y, x] = (0, a.useState)(e("auth.login.submit_text")),
          [w, j] = (0, a.useState)(""),
          [v, b] = (0, a.useState)(""),
          [N, C] = (0, a.useState)(""),
          [A, L] = (0, a.useState)(!1);
        return (0, r.jsx)(r.Fragment, {
          children: s ? (0, r.jsx)(I, {
            email: o,
            password: c,
            error: d,
            setError: h,
            newLocationText: y,
            setNewLocationText: x,
            setMfa: n,
            setNewLocation: i,
            newLocationCode: v,
            setNewLocationCode: b,
            resendToken: N,
            setTrustDevice: L
          }) : t ? (0, r.jsx)(S, {
            email: o,
            password: c,
            error: d,
            setError: h,
            mfaText: p,
            setMfaText: _,
            mfaCode: w,
            setMfaCode: j,
            newLocationCode: v,
            trustDevice: A,
            setMfa: n
          }) : (0, r.jsx)(k, {
            setMfa: n,
            email: o,
            setEmail: l,
            password: c,
            setPassword: u,
            error: d,
            setError: h,
            text: f,
            setText: m,
            setNewLocation: i,
            setResendToken: C
          })
        })
      }
    }
  },
  e => {
    e.O(0, [4103, 1406, 6609, 9014, 8256, 5886, 2552, 8441, 3794, 7358], () => e(e.s = 45619)), _N_E = e.O()
  }
]);