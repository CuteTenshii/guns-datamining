(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2454], {
    27233: (e, r, t) => {
      "use strict";
      t.d(r, {
        default: () => v
      });
      var a = t(95155),
        s = t(12115),
        n = t(18943),
        i = t.n(n),
        l = t(75810),
        c = t(73321),
        o = t(81934),
        u = t(38256),
        d = t(57776),
        h = t(40428),
        m = t(37897),
        p = t(6768),
        x = t(77570),
        g = t(54834),
        _ = t(14079),
        j = t(87358);
      let f = ["gmail.com", "googlemail.com", "icloud.com", "me.com", "mac.com", "outlook.com", "hotmail.com", "live.com", "msn.com", "yahoo.com", "yahoo.co.uk", "yahoo.de", "yahoo.fr", "proton.me", "protonmail.com", "pm.me", "tutanota.com", "tuta.io", "posteo.de", "riseup.net", "mailbox.org", "gmx.de", "gmx.net", "web.de", "t-online.de", "freenet.de", "arcor.de", "vodafone.de", "online.de", "bluewin.ch", "orange.fr", "wanadoo.fr", "laposte.net", "libero.it", "aol.com", "mail.com", "inbox.com", "zoho.com", "fastmail.com", "yandex.com", "yandex.ru"];

      function b(e) {
        return e.toLowerCase().replace(/[^a-z0-9._]/g, "").replace(/\.{2,}/g, ".").slice(0, 16)
      }

      function v() {
        let e = (0, u.kj)(),
          r = (0, c.useRouter)(),
          t = (0, s.useRef)(null),
          n = (0, c.useSearchParams)(),
          v = n.get("claim") || "",
          k = n.get("ref") || "",
          N = n.get("returnUri"),
          [y, w] = (0, s.useState)(1),
          [A, C] = (0, s.useState)(!1),
          [$, S] = (0, s.useState)(!1),
          [B, P] = (0, s.useState)(!1),
          [L, E] = (0, s.useState)(""),
          [I, W] = (0, s.useState)(null),
          [T, U] = (0, s.useState)(""),
          [z, F] = (0, s.useState)(b(v)),
          [R, O] = (0, s.useState)("idle"),
          [M, Z] = (0, s.useState)(""),
          [H, K] = (0, s.useState)(!1),
          [V, X] = (0, s.useState)(!1),
          G = (0, s.useRef)(null),
          J = "https://guns.lol",
          q = N && N.startsWith("/") ? `${J}${N}` : `${J}/account`;
        (0, s.useEffect)(() => {
          let e = b(z);
          e !== z && F(e)
        }, [z]), (0, s.useEffect)(() => {
          if (!L || !L.includes("@")) return void W(null);
          let e = function(e) {
            let r = e.split("@");
            if (2 !== r.length) return null;
            let [t, a] = r;
            if (!t || !a) return null;
            let s = null;
            for (let e of f) {
              let r = function(e, r) {
                if (e === r) return 0;
                let t = e.length,
                  a = r.length;
                if (!t) return a;
                if (!a) return t;
                let s = Array.from({
                  length: t + 1
                }, () => Array(a + 1).fill(0));
                for (let e = 0; e <= t; e++) s[e][0] = e;
                for (let e = 0; e <= a; e++) s[0][e] = e;
                for (let n = 1; n <= t; n++)
                  for (let t = 1; t <= a; t++) {
                    let a = +(e[n - 1] !== r[t - 1]);
                    s[n][t] = Math.min(s[n - 1][t] + 1, s[n][t - 1] + 1, s[n - 1][t - 1] + a)
                  }
                return s[t][a]
              }(a, e);
              r <= 2 && (!s || r < s.dist) && (s = {
                candidate: `${t}@${e}`,
                dist: r
              })
            }
            return s?.candidate ?? null
          }(L);
          W(e && e !== L ? e : null)
        }, [L]);
        let D = (0, s.useMemo)(() => {
            let e;
            return e = 0, T.length >= 8 && e++, /[A-Z]/.test(T) && e++, /[a-z]/.test(T) && e++, /[0-9]/.test(T) && e++, /[^A-Za-z0-9]/.test(T) && e++, Math.min(e, 5)
          }, [T]),
          Q = async (r, t) => {
            let a = t?.silent === !0,
              s = b(r);
            if (!s || s.length > 16 || !/^[a-z0-9_.]+$/.test(s)) return O("invalid"), a || Z(e("auth.register.error_invalid_username")), !1;
            if (G.current?.username === s) {
              let r = G.current;
              return O(r.available ? "available" : "taken"), a || r.available || Z(r.error || e("auth.register.error_invalid_username")), !a && r.available && Z(""), r.available
            }
            try {
              O("checking");
              let r = j.env.NEXT_PUBLIC_API_URL || "https://guns.lol",
                t = await fetch(`${r}/api/auth/username/${encodeURIComponent(s)}/availability`);
              if (!t.ok) throw Error("Username check failed");
              let n = await t.json(),
                i = n?.available === !0,
                l = "string" == typeof n?.error ? n.error : e("auth.register.error_invalid_username"),
                c = i ? "available" : l.toLowerCase().includes("taken") || l.toLowerCase().includes("not available") ? "taken" : "invalid";
              return G.current = {
                username: s,
                available: i,
                error: l
              }, O(c), a || Z(i ? "" : l), i
            } catch {
              return O("idle"), a || Z(e("auth.register.error_invalid_username")), !1
            }
          };
        (0, s.useEffect)(() => {
          if (1 !== y) return;
          let e = b(z);
          if (e !== z) return void F(e);
          if (G.current = null, !e) return void O("idle");
          let r = window.setTimeout(() => {
            Q(e, {
              silent: !0
            })
          }, 260);
          return () => window.clearTimeout(r)
        }, [y, z]);
        let Y = async () => {
          Z(""), await Q(z) && w(2)
        }, ee = () => {
          (Z(""), /^(?!.{255,})([a-zA-Z0-9_+.'-]{1,64})@([a-zA-Z0-9.-]{1,190})\.[a-zA-Z]{2,24}$/.test(L)) ? w(3): Z(e("auth.register.error_invalid_email"))
        }, er = async () => {
          try {
            C(!0);
            let r = new URLSearchParams({
                returnUri: q
              }),
              t = b(z);
            t && r.set("usernameHint", t), k && r.set("ref", k);
            let a = await fetch(`https://guns.lol/api/auth/discord/url?${r.toString()}`);
            if (!a.ok) {
              Z(e("auth.register.error_discord_start")), C(!1);
              return
            }
            let s = await a.json();
            if (!s?.url) {
              Z(e("auth.register.error_discord_start")), C(!1);
              return
            }
            window.location.href = s.url
          } catch {
            Z(e("auth.register.error_discord_start")), C(!1)
          }
        }, et = async () => {
          if (Z(""), !B) return Z(e("auth.register.error_accept_tos"));
          if (!z) return Z(e("auth.register.error_invalid_username"));
          if (await Q(z)) {
            if (T.length < 8) return Z(e("auth.register.error_password_length", {
              length: 8
            }));
            if (D < 2) return Z(e("auth.register.error_weak_password"));
            S(!0)
          }
        }, ea = async e => {
          try {
            K(!0), Z(""), S(!1);
            let t = {
                email: L.trim(),
                password: T,
                username: b(z),
                captcha: e,
                ref: k,
                emailMarketingOptIn: V
              },
              a = j.env.NEXT_PUBLIC_API_URL || "https://guns.lol",
              s = await fetch(`${a}/api/auth/register`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(t)
              }),
              n = await s.json();
            if (s.ok) {
              let e = btoa(t.email);
              r.push(`/sent?e=${e}&token=${n.resendToken}`)
            } else Z(n?.error)
          } finally {
            K(!1)
          }
        }, es = e => {
          if ("Enter" === e.key) {
            if (e.preventDefault(), 1 === y) return void Y();
            if (2 === y) return void ee();
            et()
          }
        };
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(d.A, {
            opened: $,
            centered: !0,
            withCloseButton: !1,
            onClose: () => S(!1),
            title: e("auth.register.verify_captcha"),
            centerTitle: !0,
            children: (0, a.jsx)("div", {
              className: i().captchaWrapper,
              children: (0, a.jsx)(l.A, {
                sitekey: "227fe119-8d9e-490c-a0f0-5d9f8a41174d",
                onVerify: e => ea(e),
                theme: "dark",
                ref: t
              })
            })
          }), (0, a.jsx)(x.A, {
            title: 3 === y ? e("auth.register.panel_title_step2") : e("auth.register.panel_title_step1"),
            subtitle: 3 === y ? e("auth.register.panel_subtitle_step2") : e("auth.register.panel_subtitle_step1"),
            footer: 3 !== y ? (0, a.jsx)(a.Fragment, {
              children: e("auth.register.login_text", {
                login: (0, a.jsx)(o.A, {
                  href: "/login",
                  className: i().inlineLink,
                  children: e("auth.register.login_text_link")
                })
              })
            }) : null,
            children: 1 === y ? (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsxs)("div", {
                className: `${i().section} ${i().usernameSection}`,
                children: [(0, a.jsx)(m.A, {
                  featureName: e("auth.register.username_input_text"),
                  autoComplete: "username",
                  value: z,
                  onChangeFunction: e => {
                    Z(""), O("idle"), F(e.target.value)
                  },
                  onKeyPress: es,
                  placeholder: e("auth.register.username_placeholder"),
                  icon: g.A.user,
                  prefix: "guns.lol/",
                  prefixLength: 102
                }), "checking" === R && (0, a.jsxs)("p", {
                  className: i().usernameStatus,
                  children: [(0, a.jsx)("span", {
                    className: i().usernameStatusIcon,
                    children: g.A.loading
                  }), (0, a.jsx)("span", {
                    children: e("auth.login.verifying_request")
                  })]
                }), "available" === R && z && (0, a.jsxs)("p", {
                  className: `${i().usernameStatus} ${i().usernameStatusSuccess}`,
                  children: [(0, a.jsx)("span", {
                    className: i().usernameStatusIcon,
                    children: g.A.success
                  }), (0, a.jsx)("span", {
                    children: e("auth.register.username_available")
                  })]
                }), "taken" === R && (0, a.jsxs)("p", {
                  className: `${i().usernameStatus} ${i().usernameStatusError}`,
                  children: [(0, a.jsx)("span", {
                    className: i().usernameStatusIcon,
                    children: g.A.removeUser
                  }), (0, a.jsx)("span", {
                    children: e("auth.register.username_taken")
                  })]
                }), "invalid" === R && (0, a.jsxs)("p", {
                  className: `${i().usernameStatus} ${i().usernameStatusError}`,
                  children: [(0, a.jsx)("span", {
                    className: i().usernameStatusIcon,
                    children: g.A.error
                  }), (0, a.jsx)("span", {
                    children: e("auth.register.error_invalid_username")
                  })]
                })]
              }), "" !== M && (0, a.jsx)("div", {
                className: i().errorBanner,
                children: M
              }), (0, a.jsx)("div", {
                className: i().actions,
                children: (0, a.jsx)("button", {
                  type: "button",
                  className: i().primaryButton,
                  onClick: () => void Y(),
                  disabled: H || "checking" === R || !z,
                  children: e("auth.register.continue_button")
                })
              })]
            }) : 2 === y ? (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsxs)("button", {
                type: "button",
                className: i().stepBackButton,
                onClick: () => w(1),
                disabled: H,
                children: [(0, a.jsx)("span", {
                  className: i().stepBackIcon,
                  children: g.A.backButton
                }), (0, a.jsx)("span", {
                  children: e("auth.register.back_to_email")
                })]
              }), (0, a.jsx)("button", {
                type: "button",
                className: `${i().summaryCard} ${i().summaryCardButton}`,
                onClick: () => w(1),
                disabled: H,
                children: (0, a.jsxs)("div", {
                  className: i().summaryGrid,
                  children: [(0, a.jsxs)("div", {
                    className: i().summaryHeader,
                    children: [(0, a.jsx)("div", {
                      className: i().summaryLabelPlain,
                      children: e("auth.register.username_input_text")
                    }), (0, a.jsxs)("span", {
                      className: i().summaryEditAction,
                      children: [g.A.assetName, (0, a.jsx)("span", {
                        children: e("auth.register.edit")
                      })]
                    })]
                  }), (0, a.jsx)("div", {
                    children: (0, a.jsxs)("div", {
                      className: i().summaryValue,
                      children: ["guns.lol/", z]
                    })
                  })]
                })
              }), (0, a.jsxs)("div", {
                className: `${i().section} ${i().emailSection}`,
                children: [(0, a.jsx)(m.A, {
                  featureName: e("auth.register.email_input_text"),
                  autoComplete: "email",
                  value: L,
                  onChangeFunction: e => E(e.target.value.trim()),
                  onKeyPress: es,
                  placeholder: e("auth.register.email_placeholder"),
                  icon: g.A.email
                }), I && (0, a.jsx)("p", {
                  className: i().helperText,
                  children: e("auth.register.did_you_mean", {
                    suggestion: (0, a.jsx)("button", {
                      type: "button",
                      className: i().helperAction,
                      onClick: () => E(I),
                      children: I
                    })
                  })
                })]
              }), "" !== M && (0, a.jsx)("div", {
                className: i().errorBanner,
                children: M
              }), (0, a.jsx)("div", {
                className: i().actions,
                children: (0, a.jsx)("button", {
                  type: "button",
                  className: i().primaryButton,
                  onClick: ee,
                  disabled: H,
                  children: e("auth.register.continue_button")
                })
              }), (0, a.jsx)("div", {
                className: i().divider,
                children: e("auth.register.or")
              }), (0, a.jsx)(p.A, {
                returnUri: q,
                setError: Z,
                actionLabel: "signup",
                usernameHint: z,
                refParameter: k
              }), (0, a.jsxs)("button", {
                type: "button",
                className: i().socialButton,
                onClick: er,
                disabled: A,
                children: [_.A.discord, (0, a.jsx)("span", {
                  children: A ? e("auth.register.discord_redirecting") : e("auth.register.signup_with_discord")
                })]
              })]
            }) : (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsxs)("button", {
                type: "button",
                className: i().stepBackButton,
                onClick: () => w(2),
                disabled: H,
                children: [(0, a.jsx)("span", {
                  className: i().stepBackIcon,
                  children: g.A.backButton
                }), (0, a.jsx)("span", {
                  children: e("auth.register.back_to_email")
                })]
              }), (0, a.jsx)("button", {
                type: "button",
                className: `${i().summaryCard} ${i().summaryCardButton}`,
                onClick: () => w(2),
                disabled: H,
                children: (0, a.jsxs)("div", {
                  className: i().summaryGrid,
                  children: [(0, a.jsxs)("div", {
                    className: i().summaryHeader,
                    children: [(0, a.jsx)("div", {
                      className: i().summaryLabelPlain,
                      children: e("auth.register.email_address_label")
                    }), (0, a.jsxs)("span", {
                      className: i().summaryEditAction,
                      children: [g.A.assetName, (0, a.jsx)("span", {
                        children: e("auth.register.edit")
                      })]
                    })]
                  }), (0, a.jsx)("div", {
                    children: (0, a.jsx)("div", {
                      className: i().summaryValue,
                      children: L
                    })
                  })]
                })
              }), (0, a.jsxs)("div", {
                className: i().section,
                children: [(0, a.jsx)(m.A, {
                  featureName: e("auth.register.password_input_text"),
                  autoComplete: "new-password",
                  value: T,
                  onChangeFunction: e => U(e.target.value),
                  onKeyPress: es,
                  placeholder: e("auth.register.password_placeholder"),
                  icon: g.A.password,
                  viewPassword: !0
                }), T && (0, a.jsxs)("div", {
                  className: i().pwMeter,
                  children: [
                    [1, 2, 3, 4, 5].map(e => (0, a.jsx)("span", {
                      className: `${i().pwBar} ${D>=e?i().pwOn:""}`
                    }, e)), (0, a.jsx)("span", {
                      className: i().pwLabel,
                      children: e(`auth.register.password_score.${D}`)
                    })
                  ]
                }), (0, a.jsx)(m.A, {
                  featureName: e("auth.register.username_input_text"),
                  autoComplete: "username",
                  value: z,
                  onChangeFunction: e => {
                    G.current = null, F(e.target.value)
                  },
                  onKeyPress: es,
                  placeholder: e("auth.register.username_placeholder"),
                  icon: g.A.user,
                  prefix: "guns.lol/",
                  prefixLength: 102
                })]
              }), (0, a.jsxs)("div", {
                className: i().agreementList,
                children: [(0, a.jsxs)("div", {
                  className: i().agreement,
                  children: [(0, a.jsx)(h.A, {
                    checked: B,
                    onChange: e => P(e.currentTarget.checked)
                  }), (0, a.jsx)("h1", {
                    children: e("auth.register.i_agree_to", {
                      tos: (0, a.jsx)(o.A, {
                        href: "/terms",
                        target: "_blank",
                        children: "ToS"
                      }),
                      pp: (0, a.jsx)(o.A, {
                        href: "/privacy",
                        target: "_blank",
                        children: "Privacy Policy"
                      })
                    })
                  })]
                }), (0, a.jsxs)("div", {
                  className: i().agreement,
                  children: [(0, a.jsx)(h.A, {
                    checked: V,
                    onChange: e => X(e.currentTarget.checked)
                  }), (0, a.jsx)("h1", {
                    children: e("auth.register.email_marketing_opt_in")
                  })]
                })]
              }), "" !== M && (0, a.jsx)("div", {
                className: i().errorBanner,
                children: M
              }), (0, a.jsx)("div", {
                className: i().actions,
                children: (0, a.jsx)("button", {
                  type: "button",
                  className: `${i().primaryButton} ${i().registerButton}`,
                  onClick: () => void et(),
                  disabled: H,
                  children: H ? e("auth.register.submit_creating") : e("auth.register.submit_create")
                })
              })]
            })
          })]
        })
      }
    },
    40428: (e, r, t) => {
      "use strict";
      t.d(r, {
        A: () => l
      });
      var a = t(95155),
        s = t(12115),
        n = t(59931),
        i = t.n(n);

      function l({
        checked: e,
        onChange: r,
        label: t,
        description: n,
        disabled: l = !1,
        name: c,
        id: o,
        className: u
      }) {
        let d = (0, s.useId)(),
          h = o ?? d,
          m = (0, a.jsx)("svg", {
            viewBox: "0 0 10 7",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, a.jsx)("path", {
              d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          });
        return (0, a.jsxs)("label", {
          className: `${i().checkboxWrapper} ${u??""}`,
          "data-disabled": l,
          "data-checked": e,
          htmlFor: h,
          children: [(0, a.jsx)("input", {
            type: "checkbox",
            id: h,
            name: c,
            checked: e,
            onChange: r,
            disabled: l
          }), (0, a.jsx)("span", {
            className: i().checkboxBox,
            children: (0, a.jsx)("span", {
              className: i().checkmark,
              children: m
            })
          }), (t || n) && (0, a.jsxs)("span", {
            className: i().checkboxContent,
            children: [t && (0, a.jsx)("span", {
              className: i().label,
              children: t
            }), n && (0, a.jsx)("span", {
              className: i().description,
              children: n
            })]
          })]
        })
      }
    },
    59931: e => {
      e.exports = {
        checkboxWrapper: "checkboxWrapper_checkboxWrapper__9OUSt",
        checkboxBox: "checkboxWrapper_checkboxBox__LRzEf",
        checkmark: "checkboxWrapper_checkmark__JWvoQ",
        checkboxContent: "checkboxWrapper_checkboxContent__XMPvb",
        label: "checkboxWrapper_label__W2Pzt",
        description: "checkboxWrapper_description__1OY4I"
      }
    },
    85075: (e, r, t) => {
      Promise.resolve().then(t.bind(t, 27233))
    }
  },
  e => {
    e.O(0, [1406, 8121, 8500, 9014, 8256, 5886, 2552, 8441, 3794, 7358], () => e(e.s = 85075)), _N_E = e.O()
  }
]);