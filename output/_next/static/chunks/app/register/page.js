(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2454], {
    27233: (e, t, a) => {
      "use strict";
      a.d(t, {
        default: () => v
      });
      var r = a(95155),
        s = a(12115),
        n = a(18943),
        i = a.n(n),
        l = a(75810),
        c = a(73321),
        o = a(81934),
        u = a(38256),
        d = a(57776),
        h = a(40428),
        m = a(37897),
        p = a(6768),
        g = a(77570),
        x = a(54834),
        _ = a(14079),
        f = a(87358);
      let j = ["gmail.com", "googlemail.com", "icloud.com", "me.com", "mac.com", "outlook.com", "hotmail.com", "live.com", "msn.com", "yahoo.com", "yahoo.co.uk", "yahoo.de", "yahoo.fr", "proton.me", "protonmail.com", "pm.me", "tutanota.com", "tuta.io", "posteo.de", "riseup.net", "mailbox.org", "gmx.de", "gmx.net", "web.de", "t-online.de", "freenet.de", "arcor.de", "vodafone.de", "online.de", "bluewin.ch", "orange.fr", "wanadoo.fr", "laposte.net", "libero.it", "aol.com", "mail.com", "inbox.com", "zoho.com", "fastmail.com", "yandex.com", "yandex.ru"];

      function b(e) {
        return e.toLowerCase().replace(/[^a-z0-9._]/g, "").replace(/\.{2,}/g, ".").slice(0, 16)
      }

      function v() {
        let e = (0, u.kj)(),
          t = (0, c.useRouter)(),
          a = (0, s.useRef)(null),
          n = (0, c.useSearchParams)(),
          v = n.get("claim") || "",
          N = n.get("ref") || "",
          k = n.get("returnUri"),
          [y, w] = (0, s.useState)(1),
          [A, C] = (0, s.useState)(!1),
          [S, $] = (0, s.useState)(!1),
          [B, L] = (0, s.useState)(!1),
          [P, U] = (0, s.useState)(""),
          [E, I] = (0, s.useState)(null),
          [T, F] = (0, s.useState)(""),
          [z, R] = (0, s.useState)(b(v)),
          [G, M] = (0, s.useState)("idle"),
          [O, Z] = (0, s.useState)(""),
          [H, K] = (0, s.useState)(!1),
          [W, V] = (0, s.useState)(!1),
          X = (0, s.useRef)(null),
          q = "https://guns.lol",
          D = k && k.startsWith("/") ? `${q}${k}` : `${q}/account`;
        (0, s.useEffect)(() => {
          let e = b(z);
          e !== z && R(e)
        }, [z]), (0, s.useEffect)(() => {
          if (!P || !P.includes("@")) return void I(null);
          let e = function(e) {
            let t = e.split("@");
            if (2 !== t.length) return null;
            let [a, r] = t;
            if (!a || !r) return null;
            let s = null;
            for (let e of j) {
              let t = function(e, t) {
                if (e === t) return 0;
                let a = e.length,
                  r = t.length;
                if (!a) return r;
                if (!r) return a;
                let s = Array.from({
                  length: a + 1
                }, () => Array(r + 1).fill(0));
                for (let e = 0; e <= a; e++) s[e][0] = e;
                for (let e = 0; e <= r; e++) s[0][e] = e;
                for (let n = 1; n <= a; n++)
                  for (let a = 1; a <= r; a++) {
                    let r = +(e[n - 1] !== t[a - 1]);
                    s[n][a] = Math.min(s[n - 1][a] + 1, s[n][a - 1] + 1, s[n - 1][a - 1] + r)
                  }
                return s[a][r]
              }(r, e);
              t <= 2 && (!s || t < s.dist) && (s = {
                candidate: `${a}@${e}`,
                dist: t
              })
            }
            return s?.candidate ?? null
          }(P);
          I(e && e !== P ? e : null)
        }, [P]);
        let J = (0, s.useMemo)(() => {
            let e;
            return e = 0, T.length >= 8 && e++, /[A-Z]/.test(T) && e++, /[a-z]/.test(T) && e++, /[0-9]/.test(T) && e++, /[^A-Za-z0-9]/.test(T) && e++, Math.min(e, 5)
          }, [T]),
          Q = async (t, a) => {
            let r = a?.silent === !0,
              s = b(t);
            if (!s || s.length > 16 || !/^[a-z0-9_.]+$/.test(s)) return M("invalid"), r || Z(e("auth.register.error_invalid_username")), !1;
            if (X.current?.username === s) {
              let t = X.current;
              return M(t.available ? "available" : "taken"), r || t.available || Z(t.error || e("auth.register.error_invalid_username")), !r && t.available && Z(""), t.available
            }
            try {
              M("checking");
              let t = f.env.NEXT_PUBLIC_API_URL || "https://guns.lol",
                a = await fetch(`${t}/api/auth/username/${encodeURIComponent(s)}/availability`);
              if (!a.ok) throw Error("Username check failed");
              let n = await a.json(),
                i = n?.available === !0,
                l = "string" == typeof n?.error ? n.error : e("auth.register.error_invalid_username"),
                c = i ? "available" : l.toLowerCase().includes("taken") || l.toLowerCase().includes("not available") ? "taken" : "invalid";
              return X.current = {
                username: s,
                available: i,
                error: l
              }, M(c), r || Z(i ? "" : l), i
            } catch {
              return M("idle"), r || Z(e("auth.register.error_invalid_username")), !1
            }
          };
        (0, s.useEffect)(() => {
          if (1 !== y) return;
          let e = b(z);
          if (e !== z) return void R(e);
          if (X.current = null, !e) return void M("idle");
          let t = window.setTimeout(() => {
            Q(e, {
              silent: !0
            })
          }, 260);
          return () => window.clearTimeout(t)
        }, [y, z]);
        let Y = async () => {
          Z(""), await Q(z) && w(2)
        }, ee = () => {
          (Z(""), /^(?!.{255,})([a-zA-Z0-9_+.'-]{1,64})@([a-zA-Z0-9.-]{1,190})\.[a-zA-Z]{2,24}$/.test(P)) ? w(3): Z(e("auth.register.error_invalid_email"))
        }, et = async () => {
          try {
            C(!0);
            let t = new URLSearchParams({
                returnUri: D
              }),
              a = b(z);
            a && t.set("usernameHint", a), N && t.set("ref", N);
            let r = await fetch(`https://guns.lol/api/auth/discord/url?${t.toString()}`);
            if (!r.ok) {
              Z(e("auth.register.error_discord_start")), C(!1);
              return
            }
            let s = await r.json();
            if (!s?.url) {
              Z(e("auth.register.error_discord_start")), C(!1);
              return
            }
            window.location.href = s.url
          } catch {
            Z(e("auth.register.error_discord_start")), C(!1)
          }
        }, ea = async () => {
          if (Z(""), !B) return Z(e("auth.register.error_accept_tos"));
          if (!z) return Z(e("auth.register.error_invalid_username"));
          if (await Q(z)) {
            if (T.length < 8) return Z(e("auth.register.error_password_length", {
              length: 8
            }));
            if (J < 2) return Z(e("auth.register.error_weak_password"));
            $(!0)
          }
        }, er = async e => {
          try {
            K(!0), Z(""), $(!1);
            let a = {
                email: P.trim(),
                password: T,
                username: b(z),
                captcha: e,
                ref: N,
                emailMarketingOptIn: W
              },
              r = f.env.NEXT_PUBLIC_API_URL || "https://guns.lol",
              s = await fetch(`${r}/api/auth/register`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(a)
              }),
              n = await s.json();
            if (s.ok) {
              let e = btoa(a.email);
              t.push(`/sent?e=${e}&token=${n.resendToken}`)
            } else Z(n?.error)
          } finally {
            K(!1)
          }
        }, es = e => {
          if ("Enter" === e.key) {
            if (e.preventDefault(), 1 === y) return void Y();
            if (2 === y) return void ee();
            ea()
          }
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(d.A, {
            opened: S,
            centered: !0,
            withCloseButton: !1,
            onClose: () => $(!1),
            title: e("auth.register.verify_captcha"),
            centerTitle: !0,
            children: (0, r.jsx)("div", {
              className: i().captchaWrapper,
              children: (0, r.jsx)(l.A, {
                sitekey: "227fe119-8d9e-490c-a0f0-5d9f8a41174d",
                onVerify: e => er(e),
                theme: "dark",
                ref: a
              })
            })
          }), (0, r.jsx)(g.A, {
            title: 3 === y ? e("auth.register.panel_title_step2") : e("auth.register.panel_title_step1"),
            subtitle: 3 === y ? e("auth.register.panel_subtitle_step2") : e("auth.register.panel_subtitle_step1"),
            footer: 3 !== y ? (0, r.jsx)(r.Fragment, {
              children: e("auth.register.login_text", {
                login: (0, r.jsx)(o.A, {
                  href: "/login",
                  className: i().inlineLink,
                  children: e("auth.register.login_text_link")
                })
              })
            }) : null,
            children: 1 === y ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsxs)("div", {
                className: `${i().section} ${i().usernameSection}`,
                children: [(0, r.jsx)(m.A, {
                  featureName: e("auth.register.username_input_text"),
                  autoComplete: "username",
                  value: z,
                  onChangeFunction: e => {
                    Z(""), M("idle"), R(e.target.value)
                  },
                  onKeyPress: es,
                  placeholder: e("auth.register.username_placeholder"),
                  icon: x.A.user,
                  prefix: "guns.lol/",
                  prefixLength: 102
                }), "checking" === G && (0, r.jsxs)("p", {
                  className: i().usernameStatus,
                  children: [(0, r.jsx)("span", {
                    className: i().usernameStatusIcon,
                    children: x.A.loading
                  }), (0, r.jsx)("span", {
                    children: e("auth.login.verifying_request")
                  })]
                }), "available" === G && z && (0, r.jsxs)("p", {
                  className: `${i().usernameStatus} ${i().usernameStatusSuccess}`,
                  children: [(0, r.jsx)("span", {
                    className: i().usernameStatusIcon,
                    children: x.A.success
                  }), (0, r.jsx)("span", {
                    children: e("auth.register.username_available")
                  })]
                }), "taken" === G && (0, r.jsxs)("p", {
                  className: `${i().usernameStatus} ${i().usernameStatusError}`,
                  children: [(0, r.jsx)("span", {
                    className: i().usernameStatusIcon,
                    children: x.A.removeUser
                  }), (0, r.jsx)("span", {
                    children: e("auth.register.username_taken")
                  })]
                }), "invalid" === G && (0, r.jsxs)("p", {
                  className: `${i().usernameStatus} ${i().usernameStatusError}`,
                  children: [(0, r.jsx)("span", {
                    className: i().usernameStatusIcon,
                    children: x.A.error
                  }), (0, r.jsx)("span", {
                    children: e("auth.register.error_invalid_username")
                  })]
                })]
              }), "" !== O && (0, r.jsx)("div", {
                className: i().errorBanner,
                children: O
              }), (0, r.jsx)("div", {
                className: i().actions,
                children: (0, r.jsx)("button", {
                  type: "button",
                  className: i().primaryButton,
                  onClick: () => void Y(),
                  disabled: H || "checking" === G || !z,
                  children: e("auth.register.continue_button")
                })
              })]
            }) : 2 === y ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsxs)("button", {
                type: "button",
                className: i().stepBackButton,
                onClick: () => w(1),
                disabled: H,
                children: [(0, r.jsx)("span", {
                  className: i().stepBackIcon,
                  children: x.A.backButton
                }), (0, r.jsx)("span", {
                  children: e("auth.register.back_to_email")
                })]
              }), (0, r.jsx)("button", {
                type: "button",
                className: `${i().summaryCard} ${i().summaryCardButton}`,
                onClick: () => w(1),
                disabled: H,
                children: (0, r.jsxs)("div", {
                  className: i().summaryGrid,
                  children: [(0, r.jsxs)("div", {
                    className: i().summaryHeader,
                    children: [(0, r.jsx)("div", {
                      className: i().summaryLabelPlain,
                      children: e("auth.register.username_input_text")
                    }), (0, r.jsxs)("span", {
                      className: i().summaryEditAction,
                      children: [x.A.assetName, (0, r.jsx)("span", {
                        children: e("auth.register.edit")
                      })]
                    })]
                  }), (0, r.jsx)("div", {
                    children: (0, r.jsxs)("div", {
                      className: i().summaryValue,
                      children: ["guns.lol/", z]
                    })
                  })]
                })
              }), (0, r.jsxs)("div", {
                className: `${i().section} ${i().emailSection}`,
                children: [(0, r.jsx)(m.A, {
                  featureName: e("auth.register.email_input_text"),
                  autoComplete: "email",
                  value: P,
                  onChangeFunction: e => U(e.target.value.trim()),
                  onKeyPress: es,
                  placeholder: e("auth.register.email_placeholder"),
                  icon: x.A.email
                }), E && (0, r.jsx)("p", {
                  className: i().helperText,
                  children: e("auth.register.did_you_mean", {
                    suggestion: (0, r.jsx)("button", {
                      type: "button",
                      className: i().helperAction,
                      onClick: () => U(E),
                      children: E
                    })
                  })
                })]
              }), "" !== O && (0, r.jsx)("div", {
                className: i().errorBanner,
                children: O
              }), (0, r.jsx)("div", {
                className: i().actions,
                children: (0, r.jsx)("button", {
                  type: "button",
                  className: i().primaryButton,
                  onClick: ee,
                  disabled: H,
                  children: e("auth.register.continue_button")
                })
              }), (0, r.jsx)("div", {
                className: i().divider,
                children: e("auth.register.or")
              }), (0, r.jsx)(p.A, {
                returnUri: D,
                setError: Z,
                actionLabel: "signup",
                usernameHint: z,
                refParameter: N
              }), (0, r.jsxs)("button", {
                type: "button",
                className: i().socialButton,
                onClick: et,
                disabled: A,
                children: [_.A.discord, (0, r.jsx)("span", {
                  children: A ? e("auth.register.discord_redirecting") : e("auth.register.signup_with_discord")
                })]
              })]
            }) : (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsxs)("button", {
                type: "button",
                className: i().stepBackButton,
                onClick: () => w(2),
                disabled: H,
                children: [(0, r.jsx)("span", {
                  className: i().stepBackIcon,
                  children: x.A.backButton
                }), (0, r.jsx)("span", {
                  children: e("auth.register.back_to_email")
                })]
              }), (0, r.jsx)("button", {
                type: "button",
                className: `${i().summaryCard} ${i().summaryCardButton}`,
                onClick: () => w(2),
                disabled: H,
                children: (0, r.jsxs)("div", {
                  className: i().summaryGrid,
                  children: [(0, r.jsxs)("div", {
                    className: i().summaryHeader,
                    children: [(0, r.jsx)("div", {
                      className: i().summaryLabelPlain,
                      children: e("auth.register.email_address_label")
                    }), (0, r.jsxs)("span", {
                      className: i().summaryEditAction,
                      children: [x.A.assetName, (0, r.jsx)("span", {
                        children: e("auth.register.edit")
                      })]
                    })]
                  }), (0, r.jsx)("div", {
                    children: (0, r.jsx)("div", {
                      className: i().summaryValue,
                      children: P
                    })
                  })]
                })
              }), (0, r.jsxs)("div", {
                className: i().section,
                children: [(0, r.jsx)(m.A, {
                  featureName: e("auth.register.password_input_text"),
                  autoComplete: "new-password",
                  value: T,
                  onChangeFunction: e => F(e.target.value),
                  onKeyPress: es,
                  placeholder: e("auth.register.password_placeholder"),
                  icon: x.A.password,
                  viewPassword: !0
                }), T && (0, r.jsxs)("div", {
                  className: i().pwMeter,
                  children: [
                    [1, 2, 3, 4, 5].map(e => (0, r.jsx)("span", {
                      className: `${i().pwBar} ${J>=e?i().pwOn:""}`
                    }, e)), (0, r.jsx)("span", {
                      className: i().pwLabel,
                      children: e(`auth.register.password_score.${J}`)
                    })
                  ]
                }), (0, r.jsx)(m.A, {
                  featureName: e("auth.register.username_input_text"),
                  autoComplete: "username",
                  value: z,
                  onChangeFunction: e => {
                    X.current = null, R(e.target.value)
                  },
                  onKeyPress: es,
                  placeholder: e("auth.register.username_placeholder"),
                  icon: x.A.user,
                  prefix: "guns.lol/",
                  prefixLength: 102
                })]
              }), (0, r.jsxs)("div", {
                className: i().agreementList,
                children: [(0, r.jsxs)("div", {
                  className: i().agreement,
                  children: [(0, r.jsx)(h.A, {
                    checked: B,
                    onChange: e => L(e.currentTarget.checked)
                  }), (0, r.jsx)("h1", {
                    children: e("auth.register.i_agree_to", {
                      tos: (0, r.jsx)(o.A, {
                        href: "/terms",
                        target: "_blank",
                        children: "ToS"
                      }),
                      pp: (0, r.jsx)(o.A, {
                        href: "/privacy",
                        target: "_blank",
                        children: "Privacy Policy"
                      })
                    })
                  })]
                }), (0, r.jsxs)("div", {
                  className: i().agreement,
                  children: [(0, r.jsx)(h.A, {
                    checked: W,
                    onChange: e => V(e.currentTarget.checked)
                  }), (0, r.jsx)("h1", {
                    children: e("auth.register.email_marketing_opt_in")
                  })]
                })]
              }), "" !== O && (0, r.jsx)("div", {
                className: i().errorBanner,
                children: O
              }), (0, r.jsx)("div", {
                className: i().actions,
                children: (0, r.jsx)("button", {
                  type: "button",
                  className: `${i().primaryButton} ${i().registerButton}`,
                  onClick: () => void ea(),
                  disabled: H,
                  children: H ? e("auth.register.submit_creating") : e("auth.register.submit_create")
                })
              })]
            })
          })]
        })
      }
    },
    40428: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => l
      });
      var r = a(95155),
        s = a(12115),
        n = a(59931),
        i = a.n(n);

      function l({
        checked: e,
        onChange: t,
        label: a,
        description: n,
        disabled: l = !1,
        name: c,
        id: o,
        className: u
      }) {
        let d = (0, s.useId)(),
          h = o ?? d,
          m = (0, r.jsx)("svg", {
            viewBox: "0 0 10 7",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
              d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          });
        return (0, r.jsxs)("label", {
          className: `${i().checkboxWrapper} ${u??""}`,
          "data-disabled": l,
          "data-checked": e,
          htmlFor: h,
          children: [(0, r.jsx)("input", {
            type: "checkbox",
            id: h,
            name: c,
            checked: e,
            onChange: t,
            disabled: l
          }), (0, r.jsx)("span", {
            className: i().checkboxBox,
            children: (0, r.jsx)("span", {
              className: i().checkmark,
              children: m
            })
          }), (a || n) && (0, r.jsxs)("span", {
            className: i().checkboxContent,
            children: [a && (0, r.jsx)("span", {
              className: i().label,
              children: a
            }), n && (0, r.jsx)("span", {
              className: i().description,
              children: n
            })]
          })]
        })
      }
    },
    59931: e => {
      e.exports = {
        checkboxWrapper: "GUNS__53-fb7620db-5edbb5d3-d5838081",
        checkboxBox: "GUNS__e5-546bd132-f2783efa-b167c221",
        checkmark: "GUNS__37-9c3ca347-1dfc372f-b86cd6fc",
        checkboxContent: "GUNS__ab-99239a2d-372d534a-01c82082",
        label: "GUNS__41-9e476fd0-97f08255-c536c341",
        description: "GUNS__09-9ac6549b-7658a140-3ba7fea8"
      }
    },
    85075: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 27233))
    }
  },
  e => {
    e.O(0, [1406, 4103, 9014, 8256, 5886, 2552, 8441, 3794, 7358], () => e(e.s = 85075)), _N_E = e.O()
  }
]);