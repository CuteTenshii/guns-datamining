(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9282], {
    5684: e => {
      e.exports = {
        overflowText: "GUNS__0a-c73bda7f-ec73c2af-ec6abbe5",
        overflowTextContent: "GUNS__29-07f9604e-f4d8e0d9-ad473a5c",
        isScrollable: "GUNS__79-2afeb800-bb50c375-1f18c0a2",
        overflowTextPan: "GUNS__ca-92bb5fe1-ffe7fbdf-6ec087a4"
      }
    },
    17153: (e, s, a) => {
      "use strict";
      a.r(s), a.d(s, {
        default: () => H
      });
      var t = a(95155),
        o = a(12115),
        n = a(50163),
        c = a.n(n),
        r = a(66609),
        i = a(7109),
        d = a(37897),
        l = a(81469);

      function u({
        category: e,
        children: s
      }) {
        return (0, t.jsxs)("div", {
          className: c().accountSettingsTab,
          children: [(0, t.jsx)("h1", {
            className: c().accountCategoryText,
            children: e
          }), (0, t.jsx)("div", {
            className: c().tabGap,
            children: s
          })]
        })
      }
      var h = a(29722),
        p = a(30305),
        g = a.n(p);
      let m = e => null;
      m.displayName = "StepperStep";
      let b = e => null;
      b.displayName = "StepperCompleted";
      let f = () => (0, t.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          width: "20",
          height: "20",
          children: (0, t.jsx)("path", {
            fill: "currentColor",
            d: "m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
          })
        }),
        _ = ({
          active: e,
          children: s,
          className: a
        }) => {
          let n = o.Children.toArray(s),
            c = n.filter(e => e.type && "StepperStep" === e.type.displayName),
            r = n.find(e => e.type && "StepperCompleted" === e.type.displayName),
            i = c.length,
            d = Math.max(0, Math.min(e, i)),
            l = i > 0 && d === i,
            u = 0 === i ? -1 : l ? i - 1 : Math.min(d, Math.max(0, i - 1)),
            p = 0 === i || l ? r?.props.children : c[u]?.props.children;
          return (0, t.jsxs)("div", {
            className: (0, h.A)(g().stepper, a),
            children: [(0, t.jsx)("ol", {
              className: g().steps,
              children: c.map((e, s) => {
                let a = d > s ? "complete" : d === s ? "current" : "upcoming",
                  {
                    label: o,
                    description: n,
                    icon: c
                  } = e.props,
                  r = "complete" === a ? (0, t.jsx)(f, {}) : c ?? (0, t.jsx)("span", {
                    children: s + 1
                  });
                return (0, t.jsxs)("li", {
                  className: g().step,
                  "data-status": a,
                  "aria-current": "current" === a ? "step" : void 0,
                  children: [(0, t.jsx)("div", {
                    className: g().indicator,
                    "data-status": a,
                    children: (0, t.jsx)("span", {
                      className: g().indicatorInner,
                      children: r
                    })
                  }), (0, t.jsxs)("div", {
                    className: g().meta,
                    children: [(0, t.jsx)("span", {
                      className: g().label,
                      children: o
                    }), n && (0, t.jsx)("span", {
                      className: g().description,
                      children: n
                    })]
                  })]
                }, `step-${s}`)
              })
            }), (0, t.jsx)("div", {
              className: g().panel,
              children: p
            })]
          })
        };
      _.Step = m, _.Completed = b;
      var x = a(86891);

      function j({
        mfaEnabled: e
      }) {
        let s = (0, x.kj)(),
          [a, n] = (0, o.useState)(""),
          [l, u] = (0, o.useState)(""),
          [h, p] = (0, o.useState)(""),
          [g, m] = (0, o.useState)(0),
          [b, f] = (0, o.useState)(""),
          [j, v] = (0, o.useState)(!1);
        async function y(t) {
          try {
            let o = JSON.stringify({
                password: a
              }),
              n = JSON.stringify({
                email: l,
                emailReenter: h,
                password: a
              }),
              c = JSON.stringify({
                email: l,
                emailReenter: h,
                password: a,
                mfaVerify: b,
                useRecoveryCodes: j
              }),
              i = await fetch("https://guns.lol/api/account/email", {
                method: "POST",
                body: t ? e ? c : n : o
              }),
              d = await i.json();
            i.ok ? (r.oR.success(s("dashboard.account.settings.change_email.toasts.password_verified")), m(e => e < 3 ? e + 1 : e)) : r.oR.error(d.error)
          } catch (e) {
            r.oR.error(s("dashboard.account.settings.toasts.unknown_error")), console.error(e.message)
          }
        }
        let w = e => {
            f(e.target.value)
          },
          N = e => {
            v(e), f("")
          };
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsxs)(_, {
            active: g,
            children: [(0, t.jsx)(_.Step, {
              label: s("dashboard.account.settings.change_email.step1.label"),
              description: s("dashboard.account.settings.change_email.step1.description"),
              icon: i.A.password,
              children: (0, t.jsxs)("div", {
                className: c().verifyPassword,
                children: [(0, t.jsx)(d.A, {
                  featureName: s("dashboard.account.settings.change_email.step1.input_label"),
                  placeholder: s("dashboard.account.settings.change_email.step1.input_placeholder"),
                  onChangeFunction: e => {
                    n(e.target.value)
                  },
                  viewPassword: !0,
                  value: a,
                  icon: i.A.password
                }), (0, t.jsx)("span", {
                  className: c().submitButtonUpdate,
                  onClick: () => y(!1),
                  children: s("dashboard.account.settings.change_email.step1.submit")
                })]
              })
            }), (0, t.jsx)(_.Step, {
              label: s("dashboard.account.settings.change_email.step2.label"),
              description: e ? s("dashboard.account.settings.change_email.step2.description_mfa") : s("dashboard.account.settings.change_email.step2.description"),
              icon: i.A.email,
              children: (0, t.jsxs)("div", {
                className: c().changeEmail,
                children: [(0, t.jsxs)("div", {
                  className: c().changeEmailGap,
                  children: [(0, t.jsx)(d.A, {
                    featureName: s("dashboard.account.settings.change_email.step2.new_email_label"),
                    placeholder: s("dashboard.account.settings.change_email.step2.new_email_placeholder"),
                    onChangeFunction: e => {
                      u(e.target.value)
                    },
                    value: l,
                    icon: i.A.email
                  }), (0, t.jsx)(d.A, {
                    featureName: s("dashboard.account.settings.change_email.step2.reenter_email_label"),
                    placeholder: s("dashboard.account.settings.change_email.step2.reenter_email_placeholder"),
                    onChangeFunction: e => {
                      p(e.target.value)
                    },
                    value: h,
                    icon: i.A.email
                  }), e && (0, t.jsxs)("div", {
                    className: c().mfaVerification,
                    children: [j ? (0, t.jsx)(d.A, {
                      featureName: s("dashboard.account.settings.change_email.mfa.recovery_label"),
                      placeholder: s("dashboard.account.settings.change_email.mfa.recovery_placeholder"),
                      onChangeFunction: w,
                      type: "text",
                      value: b,
                      icon: i.A.mfaRecoveryCode
                    }) : (0, t.jsx)(d.A, {
                      featureName: s("dashboard.account.settings.change_email.mfa.code_label"),
                      placeholder: s("dashboard.account.settings.change_email.mfa.code_placeholder"),
                      onChangeFunction: w,
                      type: "text",
                      value: b,
                      icon: i.A.mfaToken
                    }), j ? (0, t.jsx)("span", {
                      onClick: () => N(!1),
                      className: c().mfaVerificationText,
                      children: s("dashboard.account.settings.change_email.mfa.use_2fa")
                    }) : (0, t.jsx)("span", {
                      onClick: () => N(!0),
                      className: c().mfaVerificationText,
                      children: s("dashboard.account.settings.change_email.mfa.use_recovery")
                    })]
                  })]
                }), (0, t.jsx)("span", {
                  className: c().submitButtonUpdate,
                  onClick: () => y(!0),
                  children: s("dashboard.account.settings.change_email.step2.submit")
                })]
              })
            }), (0, t.jsx)(_.Completed, {
              children: s("dashboard.account.settings.change_email.completed")
            })]
          })
        })
      }

      function v({
        mfaEnabled: e,
        hasPassword: s = !0,
        onPasswordUpdated: a
      }) {
        let n = (0, x.kj)(),
          [l, u] = (0, o.useState)(""),
          [h, p] = (0, o.useState)(""),
          [g, m] = (0, o.useState)(""),
          [b, f] = (0, o.useState)(0),
          [j, v] = (0, o.useState)(""),
          [y, w] = (0, o.useState)(!1),
          N = s ? 2 : 1;
        async function C(t) {
          try {
            let o = {
              newPassword: h,
              newPasswordReenter: g
            };
            s && (o.password = l), e && (o.mfaVerify = j, o.useRecoveryCodes = y);
            let c = await fetch("https://guns.lol/api/account/password", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(t ? o : {
                  password: l
                })
              }),
              i = await c.json();
            if (c.ok) {
              if (t) {
                if (r.oR.success(s ? n("dashboard.account.settings.change_password.toasts.changed") : "Password login enabled."), a?.(), s) {
                  window.location.href = i.switched ? "/account" : "/login";
                  return
                }
              } else r.oR.success(n("dashboard.account.settings.change_password.toasts.verified"));
              f(e => e < N ? e + 1 : e)
            } else r.oR.error(i.error)
          } catch (e) {
            r.oR.error(n("dashboard.account.settings.toasts.unknown_error")), console.error(e.message)
          }
        }
        let k = e => {
            v(e.target.value)
          },
          S = e => {
            w(e), v("")
          };
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsxs)(_, {
            active: b,
            children: [s && (0, t.jsx)(_.Step, {
              label: n("dashboard.account.settings.change_password.step1.label"),
              description: n("dashboard.account.settings.change_password.step1.description"),
              icon: i.A.password,
              children: (0, t.jsxs)("div", {
                className: c().verifyPassword,
                children: [(0, t.jsx)(d.A, {
                  featureName: n("dashboard.account.settings.change_password.step1.input_label"),
                  placeholder: n("dashboard.account.settings.change_password.step1.input_placeholder"),
                  onChangeFunction: e => {
                    u(e.target.value)
                  },
                  viewPassword: !0,
                  value: l,
                  icon: i.A.password
                }), (0, t.jsx)("span", {
                  className: c().submitButtonUpdate,
                  onClick: () => C(!1),
                  children: n("dashboard.account.settings.change_password.step1.submit")
                })]
              })
            }), (0, t.jsx)(_.Step, {
              label: s ? n("dashboard.account.settings.change_password.step2.label") : n("dashboard.account.settings.change_password.step2.label_add"),
              description: s ? e ? n("dashboard.account.settings.change_password.step2.description_mfa") : n("dashboard.account.settings.change_password.step2.description") : e ? "Create a password for email login and confirm it with your 2FA code." : n("dashboard.account.settings.change_password.step2.description_add"),
              icon: i.A.sparkles,
              children: (0, t.jsxs)("div", {
                className: c().changeEmail,
                children: [(0, t.jsxs)("div", {
                  className: c().changeEmailGap,
                  children: [(0, t.jsx)(d.A, {
                    viewPassword: !0,
                    featureName: n("dashboard.account.settings.change_password.step2.new_password_label"),
                    placeholder: n("dashboard.account.settings.change_password.step2.new_password_placeholder"),
                    onChangeFunction: e => {
                      p(e.target.value)
                    },
                    value: h,
                    icon: i.A.password
                  }), (0, t.jsx)(d.A, {
                    type: "password",
                    featureName: n("dashboard.account.settings.change_password.step2.reenter_password_label"),
                    placeholder: n("dashboard.account.settings.change_password.step2.reenter_password_placeholder"),
                    onChangeFunction: e => {
                      m(e.target.value)
                    },
                    value: g,
                    icon: i.A.password
                  }), e && (0, t.jsxs)("div", {
                    className: c().mfaVerification,
                    children: [y ? (0, t.jsx)(d.A, {
                      featureName: n("dashboard.account.settings.change_password.mfa.recovery_label"),
                      placeholder: n("dashboard.account.settings.change_password.mfa.recovery_placeholder"),
                      onChangeFunction: k,
                      type: "text",
                      value: j,
                      icon: i.A.mfaRecoveryCode
                    }) : (0, t.jsx)(d.A, {
                      featureName: n("dashboard.account.settings.change_password.mfa.code_label"),
                      placeholder: n("dashboard.account.settings.change_password.mfa.code_placeholder"),
                      onChangeFunction: k,
                      type: "text",
                      value: j,
                      icon: i.A.mfaToken
                    }), y ? (0, t.jsx)("span", {
                      onClick: () => S(!1),
                      className: c().mfaVerificationText,
                      children: n("dashboard.account.settings.change_password.mfa.use_2fa")
                    }) : (0, t.jsx)("span", {
                      onClick: () => S(!0),
                      className: c().mfaVerificationText,
                      children: n("dashboard.account.settings.change_password.mfa.use_recovery")
                    })]
                  })]
                }), (0, t.jsx)("span", {
                  className: c().submitButtonUpdate,
                  onClick: () => C(!0),
                  children: s ? n("dashboard.account.settings.change_password.step2.submit") : "Add password"
                })]
              })
            }), (0, t.jsx)(_.Completed, {
              children: s ? n("dashboard.account.settings.change_password.completed") : "Password login is now enabled for your account."
            })]
          })
        })
      }
      var y = a(63212),
        w = a(99387);

      function N({
        setMfa: e
      }) {
        let s = (0, x.kj)(),
          [a, n] = (0, o.useState)(""),
          [l, u] = (0, o.useState)(""),
          [h, p] = (0, o.useState)(""),
          [g, m] = (0, o.useState)(""),
          [b, f] = (0, o.useState)(!1),
          [j, v] = (0, o.useState)(0),
          [N, C] = (0, o.useState)([]),
          k = (0, o.useRef)(null),
          S = () => v(e => e < 3 ? e + 1 : e);
        async function A(t) {
          try {
            let o = JSON.stringify({
                password: a
              }),
              n = JSON.stringify({
                password: a,
                mfaVerify: l,
                mfaToken: g
              }),
              c = await fetch("https://guns.lol/api/account/security/mfa", {
                method: "POST",
                body: t ? n : o
              }),
              i = await c.json();
            c.ok ? (t ? (r.oR.success(s("dashboard.account.settings.enable_mfa.toasts.enabled")), e(!0), C(i.recovery_codes)) : (m(i.secret_key), p(i.qr_code_url), r.oR.success(s("dashboard.account.settings.enable_mfa.toasts.verified"))), S()) : r.oR.error(i.error)
          } catch (e) {
            r.oR.error(s("dashboard.account.settings.toasts.unknown_error")), console.error(e.message)
          }
        }
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsxs)(_, {
            active: j,
            children: [(0, t.jsx)(_.Step, {
              label: s("dashboard.account.settings.enable_mfa.steps.verify.label"),
              description: s("dashboard.account.settings.enable_mfa.steps.verify.description"),
              icon: i.A.password,
              children: (0, t.jsxs)("div", {
                className: c().verifyPassword,
                children: [(0, t.jsx)(d.A, {
                  featureName: s("dashboard.account.settings.enable_mfa.steps.verify.input_label"),
                  placeholder: s("dashboard.account.settings.enable_mfa.steps.verify.input_placeholder"),
                  onChangeFunction: e => {
                    n(e.target.value)
                  },
                  viewPassword: !0,
                  value: a,
                  icon: i.A.password
                }), (0, t.jsx)("span", {
                  className: c().submitButtonUpdate,
                  onClick: () => A(!1),
                  children: s("dashboard.account.settings.enable_mfa.steps.verify.submit")
                })]
              })
            }), (0, t.jsx)(_.Step, {
              label: s("dashboard.account.settings.enable_mfa.steps.setup.label"),
              description: s("dashboard.account.settings.enable_mfa.steps.setup.description"),
              icon: i.A.sparkles,
              children: (0, t.jsxs)("div", {
                className: c().mfa,
                children: [(0, t.jsx)("div", {
                  className: c().mfaInfo,
                  children: (0, t.jsx)("h3", {
                    children: s("dashboard.account.settings.enable_mfa.steps.setup.instructions", {
                      google: (0, t.jsx)("span", {
                        children: "Google Authenticator"
                      }),
                      authy: (0, t.jsx)("span", {
                        children: "Authy"
                      })
                    })
                  })
                }), (0, t.jsxs)("div", {
                  className: c().qrCode,
                  children: [(0, t.jsx)(y.g, {
                    data: h,
                    type: "svg",
                    height: 220,
                    width: 220,
                    backgroundOptions: {
                      color: "#00000000"
                    },
                    dotsOptions: {
                      color: "#fafafa",
                      type: "rounded"
                    },
                    cornersDotOptions: {
                      color: "#fafafa",
                      type: "dot"
                    },
                    cornersSquareOptions: {
                      color: "#734484",
                      type: "extra-rounded"
                    },
                    ref: k
                  }), (0, t.jsx)("span", {
                    onClick: () => {
                      b ? f(!1) : f(!0)
                    },
                    children: s("dashboard.account.settings.enable_mfa.steps.setup.qr_not_working")
                  })]
                }), b && (0, t.jsxs)("div", {
                  className: c().secretKey,
                  children: [(0, t.jsx)("h1", {
                    children: s("dashboard.account.settings.enable_mfa.steps.setup.manual_key_title")
                  }), (0, t.jsx)("h3", {
                    children: g
                  })]
                }), (0, t.jsx)(d.A, {
                  featureName: s("dashboard.account.settings.enable_mfa.steps.setup.code_label"),
                  placeholder: s("dashboard.account.settings.enable_mfa.steps.setup.code_placeholder"),
                  onChangeFunction: e => {
                    u(e.target.value)
                  },
                  value: l,
                  icon: i.A.mfaToken
                }), (0, t.jsx)("span", {
                  className: c().submitButtonUpdate,
                  onClick: () => A(!0),
                  children: s("dashboard.account.settings.enable_mfa.steps.setup.submit")
                })]
              })
            }), (0, t.jsx)(_.Step, {
              label: s("dashboard.account.settings.enable_mfa.steps.recovery.label"),
              description: s("dashboard.account.settings.enable_mfa.steps.recovery.description"),
              icon: i.A.lock,
              children: (0, t.jsxs)("div", {
                className: c().recoveryCodes,
                children: [(0, t.jsxs)("div", {
                  className: c().recoveryCodesInfo,
                  children: [(0, t.jsx)("h1", {
                    children: s("dashboard.account.settings.enable_mfa.steps.recovery.title")
                  }), (0, t.jsx)("h3", {
                    children: s("dashboard.account.settings.enable_mfa.steps.recovery.instructions")
                  })]
                }), (0, t.jsx)("div", {
                  className: c().recoveryCodesContainer,
                  children: N.length > 0 ? N.map((e, s) => (0, t.jsxs)("span", {
                    children: [e, (0, t.jsx)(w.A, {
                      value: e,
                      timeout: 1e3,
                      children: ({
                        copied: e,
                        copy: s
                      }) => (0, t.jsx)("div", {
                        onClick: s,
                        children: e ? i.A.check : i.A.copy
                      })
                    })]
                  }, s)) : (0, t.jsx)("span", {
                    children: s("dashboard.account.settings.enable_mfa.steps.recovery.error")
                  })
                }), (0, t.jsxs)("div", {
                  className: c().recoveryCodeButtonContainer,
                  children: [(0, t.jsx)("span", {
                    className: c().finishButton,
                    onClick: S,
                    children: s("dashboard.account.settings.enable_mfa.steps.recovery.finish")
                  }), (0, t.jsxs)("span", {
                    onClick: () => {
                      let e = new Blob([N.join("\n")], {
                          type: "text/plain"
                        }),
                        s = URL.createObjectURL(e),
                        a = document.createElement("a");
                      a.href = s, a.download = "recovery_codes_gunslol.txt", document.body.appendChild(a), a.click(), document.body.removeChild(a)
                    },
                    className: c().downloadRecoveryCodes,
                    children: [s("dashboard.account.settings.enable_mfa.steps.recovery.download_button"), " ", (0, t.jsxs)("div", {
                      children: [".TXT ", i.A.download]
                    })]
                  })]
                })]
              })
            }), (0, t.jsx)(_.Completed, {
              children: s("dashboard.account.settings.enable_mfa.completed")
            })]
          })
        })
      }

      function C({
        setMfa: e
      }) {
        let s = (0, x.kj)(),
          [a, n] = (0, o.useState)(""),
          [l, u] = (0, o.useState)(0),
          [h, p] = (0, o.useState)(""),
          [g, m] = (0, o.useState)(!1),
          b = e => {
            p(e.target.value)
          };
        async function f() {
          try {
            let e = JSON.stringify({
                password: a,
                mfa: !1
              }),
              t = await fetch("https://guns.lol/api/account/security/mfa", {
                method: "POST",
                body: e
              }),
              o = await t.json();
            t.ok ? (r.oR.success(s("dashboard.account.settings.disable_mfa.toasts.verified")), u(1)) : r.oR.error(o.error)
          } catch (e) {
            r.oR.error(s("dashboard.account.settings.toasts.unknown_error")), console.error(e.message)
          }
        }
        async function j() {
          let t = await fetch("https://guns.lol/api/account/security/mfa", {
              method: "POST",
              body: JSON.stringify({
                password: a,
                mfaVerify: h,
                mfa: !1,
                useRecoveryCodes: g
              })
            }),
            o = await t.json();
          t.ok ? (e(!1), r.oR.success(s("dashboard.account.settings.disable_mfa.toasts.disabled")), u(3)) : r.oR.error(o.error)
        }
        let v = e => {
          m(e), p("")
        };
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsxs)(_, {
            active: l,
            children: [(0, t.jsx)(_.Step, {
              label: s("dashboard.account.settings.disable_mfa.step1.label"),
              description: s("dashboard.account.settings.disable_mfa.step1.description"),
              icon: i.A.password,
              children: (0, t.jsxs)("div", {
                className: c().verifyPassword,
                children: [(0, t.jsx)(d.A, {
                  featureName: s("dashboard.account.settings.disable_mfa.step1.input_label"),
                  placeholder: s("dashboard.account.settings.disable_mfa.step1.input_placeholder"),
                  viewPassword: !0,
                  onChangeFunction: e => {
                    n(e.target.value)
                  },
                  value: a,
                  icon: i.A.password
                }), (0, t.jsx)("span", {
                  className: c().submitButtonUpdate,
                  onClick: f,
                  children: s("dashboard.account.settings.disable_mfa.step1.submit")
                })]
              })
            }), (0, t.jsx)(_.Step, {
              label: s("dashboard.account.settings.disable_mfa.step2.label"),
              description: s("dashboard.account.settings.disable_mfa.step2.description"),
              icon: i.A.password,
              children: (0, t.jsxs)("div", {
                className: c().verifyPassword,
                children: [g ? (0, t.jsx)(d.A, {
                  featureName: s("dashboard.account.settings.disable_mfa.step2.recovery_label"),
                  placeholder: s("dashboard.account.settings.disable_mfa.step2.recovery_placeholder"),
                  onChangeFunction: b,
                  type: "text",
                  value: h,
                  icon: i.A.mfaRecoveryCode
                }) : (0, t.jsx)(d.A, {
                  featureName: s("dashboard.account.settings.disable_mfa.step2.code_label"),
                  placeholder: s("dashboard.account.settings.disable_mfa.step2.code_placeholder"),
                  onChangeFunction: b,
                  type: "text",
                  value: h,
                  icon: i.A.mfaToken
                }), (0, t.jsxs)("div", {
                  className: c().submitButtonWrapper,
                  children: [(0, t.jsx)("span", {
                    className: c().submitButtonUpdate,
                    onClick: j,
                    children: s("dashboard.account.settings.disable_mfa.step2.submit")
                  }), g ? (0, t.jsx)("span", {
                    onClick: () => v(!1),
                    children: s("dashboard.account.settings.disable_mfa.step2.use_2fa")
                  }) : (0, t.jsx)("span", {
                    onClick: () => v(!0),
                    children: s("dashboard.account.settings.disable_mfa.step2.use_recovery")
                  })]
                })]
              })
            }), (0, t.jsx)(_.Completed, {
              children: s("dashboard.account.settings.disable_mfa.completed")
            })]
          })
        })
      }
      var k = a(15648),
        S = a(91912),
        A = a(92731),
        R = a(98241),
        T = a.n(R),
        U = a(54834),
        P = a(14079);

      function O({
        setIsModalOpened: e
      }) {
        let s = (0, x.kj)(),
          [a, n] = (0, o.useState)(0),
          [l, u] = (0, o.useState)(""),
          [h, p] = (0, o.useState)(""),
          [g, m] = (0, o.useState)([]),
          [b, f] = (0, o.useState)(!1),
          j = e => {
            p(e.target.value)
          },
          v = async e => {
            let a = e ? JSON.stringify({
                password: l,
                mfaToken: h,
                useRecoveryCodes: b
              }) : JSON.stringify({
                password: l
              }),
              t = await fetch("https://guns.lol/api/account/security/mfa/regenerateRecoveryCodes", {
                method: "POST",
                body: a
              }),
              o = await t.json();
            t.ok ? (e ? (r.oR.success(s("dashboard.account.settings.regenerate_codes.toasts.regenerated")), m(o.recovery_codes)) : r.oR.success(s("dashboard.account.settings.regenerate_codes.toasts.verified")), n(e => e < 3 ? e + 1 : e)) : r.oR.error(o.error)
          }, y = e => {
            f(e), p("")
          };
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsxs)(_, {
            active: a,
            children: [(0, t.jsx)(_.Step, {
              label: s("dashboard.account.settings.regenerate_codes.step1.label"),
              description: s("dashboard.account.settings.regenerate_codes.step1.description"),
              icon: i.A.password,
              children: (0, t.jsxs)("div", {
                className: c().verifyPassword,
                children: [(0, t.jsx)(d.A, {
                  featureName: s("dashboard.account.settings.regenerate_codes.step1.input_label"),
                  placeholder: s("dashboard.account.settings.regenerate_codes.step1.input_placeholder"),
                  onChangeFunction: e => {
                    u(e.target.value)
                  },
                  viewPassword: !0,
                  value: l,
                  icon: i.A.password
                }), (0, t.jsx)("span", {
                  className: c().submitButtonUpdate,
                  onClick: () => v(!1),
                  children: s("dashboard.account.settings.regenerate_codes.step1.submit")
                })]
              })
            }), (0, t.jsx)(_.Step, {
              label: s("dashboard.account.settings.regenerate_codes.step2.label"),
              description: s("dashboard.account.settings.regenerate_codes.step2.description"),
              icon: i.A.sparkles,
              children: (0, t.jsxs)("div", {
                className: c().verifyPassword,
                children: [b ? (0, t.jsx)(d.A, {
                  featureName: s("dashboard.account.settings.regenerate_codes.step2.recovery_label"),
                  placeholder: s("dashboard.account.settings.regenerate_codes.step2.recovery_placeholder"),
                  onChangeFunction: j,
                  type: "text",
                  value: h,
                  icon: i.A.mfaRecoveryCode
                }) : (0, t.jsx)(d.A, {
                  featureName: s("dashboard.account.settings.regenerate_codes.step2.code_label"),
                  placeholder: s("dashboard.account.settings.regenerate_codes.step2.code_placeholder"),
                  onChangeFunction: j,
                  type: "text",
                  value: h,
                  icon: i.A.mfaToken
                }), (0, t.jsxs)("div", {
                  className: c().submitButtonWrapper,
                  children: [(0, t.jsx)("span", {
                    className: c().submitButtonUpdate,
                    onClick: () => v(!0),
                    children: s("dashboard.account.settings.regenerate_codes.step2.submit")
                  }), b ? (0, t.jsx)("span", {
                    onClick: () => y(!1),
                    children: s("dashboard.account.settings.regenerate_codes.step2.use_2fa")
                  }) : (0, t.jsx)("span", {
                    onClick: () => y(!0),
                    children: s("dashboard.account.settings.regenerate_codes.step2.use_recovery")
                  })]
                })]
              })
            }), (0, t.jsx)(_.Completed, {
              children: (0, t.jsxs)("div", {
                className: c().recoveryCodes,
                children: [(0, t.jsxs)("div", {
                  className: c().recoveryCodesInfo,
                  children: [(0, t.jsx)("h1", {
                    children: s("dashboard.account.settings.regenerate_codes.completed.title")
                  }), (0, t.jsx)("h3", {
                    children: s("dashboard.account.settings.regenerate_codes.completed.description")
                  })]
                }), (0, t.jsx)("div", {
                  className: c().recoveryCodesContainer,
                  children: g.length > 0 ? g.map((e, s) => (0, t.jsxs)("span", {
                    children: [e, (0, t.jsx)(w.A, {
                      value: e,
                      timeout: 1e3,
                      children: ({
                        copied: e,
                        copy: s
                      }) => (0, t.jsx)("div", {
                        onClick: s,
                        children: e ? i.A.check : i.A.copy
                      })
                    })]
                  }, s)) : (0, t.jsx)("span", {
                    children: s("dashboard.account.settings.regenerate_codes.completed.error")
                  })
                }), (0, t.jsxs)("div", {
                  className: c().recoveryCodeButtonContainer,
                  children: [(0, t.jsx)("span", {
                    className: c().finishButton,
                    onClick: () => e(!1),
                    children: s("dashboard.account.settings.regenerate_codes.completed.close_button")
                  }), (0, t.jsxs)("span", {
                    onClick: () => {
                      let e = new Blob([g.join("\n")], {
                          type: "text/plain"
                        }),
                        s = URL.createObjectURL(e),
                        a = document.createElement("a");
                      a.href = s, a.download = "recovery_codes_gunslol.txt", document.body.appendChild(a), a.click(), document.body.removeChild(a)
                    },
                    className: c().downloadRecoveryCodes,
                    children: [s("dashboard.account.settings.regenerate_codes.completed.download_button"), " ", (0, t.jsxs)("div", {
                      children: [".TXT ", i.A.download]
                    })]
                  })]
                })]
              })
            })]
          })
        })
      }

      function $({
        mfaEnabled: e
      }) {
        let s = (0, x.kj)(),
          a = String(s("dashboard.account.settings.delete_account.step3.confirmation_value")),
          [n, l] = (0, o.useState)(0),
          [u, h] = (0, o.useState)(""),
          [p, g] = (0, o.useState)(""),
          [m, b] = (0, o.useState)(null),
          [f, j] = (0, o.useState)(""),
          [v, y] = (0, o.useState)(!1),
          [w, N] = (0, o.useState)(""),
          [C, k] = (0, o.useState)(""),
          S = () => l(e => e < 3 ? e + 1 : e),
          A = async () => {
            try {
              let e = await fetch("https://guns.lol/api/account/deletion", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    stage: "password",
                    password: u
                  })
                }),
                a = await e.json();
              if (!e.ok) return r.oR.error(a.error);
              if ("mfa" !== a.verificationMethod && "email_otp" !== a.verificationMethod) return r.oR.error(s("dashboard.account.settings.delete_account.toasts.otp_send_failed"));
              b(a.verificationMethod), "email_otp" === a.verificationMethod ? r.oR.success(s("dashboard.account.settings.delete_account.toasts.otp_sent")) : r.oR.success(s("dashboard.account.settings.delete_account.toasts.password_verified")), S()
            } catch (e) {
              r.oR.error(s("dashboard.account.settings.delete_account.toasts.otp_send_failed")), console.error(e.message)
            }
          }, R = async () => {
            if (!p.trim()) return r.oR.error(s("dashboard.account.settings.delete_account.toasts.verification_required"));
            try {
              let e = {
                stage: "verify",
                password: u
              };
              if ("mfa" === m) e.mfaVerify = p, e.useRecoveryCodes = v;
              else {
                if ("email_otp" !== m) return r.oR.error(s("dashboard.account.settings.delete_account.toasts.verification_required"));
                e.emailOtp = p
              }
              let a = await fetch("https://guns.lol/api/account/deletion", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(e)
                }),
                t = await a.json();
              if (!a.ok) return r.oR.error(t.error);
              if ("string" != typeof t.verificationToken || !t.verificationToken) return r.oR.error(s("dashboard.account.settings.delete_account.toasts.verification_required"));
              j(t.verificationToken), r.oR.success(s("dashboard.account.settings.delete_account.toasts.identity_verified")), S()
            } catch (e) {
              r.oR.error(s("dashboard.account.settings.delete_account.toasts.otp_send_failed")), console.error(e.message)
            }
          }, T = async () => {
            try {
              let e = await fetch("https://guns.lol/api/account/deletion/resend", {
                  method: "POST"
                }),
                a = await e.json();
              if (!e.ok) return r.oR.error(a.error);
              r.oR.success(s("dashboard.account.settings.delete_account.toasts.otp_resent"))
            } catch (e) {
              r.oR.error(s("dashboard.account.settings.delete_account.toasts.otp_send_failed")), console.error(e.message)
            }
          }, U = async () => {
            if (w.trim().toUpperCase() !== a.toUpperCase()) return r.oR.error(s("dashboard.account.settings.delete_account.toasts.confirmation_invalid", {
              value: a
            }));
            if (!C.trim()) return r.oR.error(s("dashboard.account.settings.delete_account.toasts.reason_required"));
            if (!f) return r.oR.error(s("dashboard.account.settings.delete_account.toasts.verification_required"));
            try {
              let e = {
                  stage: "confirm",
                  verificationToken: f,
                  confirmationText: w,
                  reason: C.trim()
                },
                a = await fetch("https://guns.lol/api/account/deletion", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(e)
                }),
                t = await a.json();
              if (!a.ok) return r.oR.error(t.error);
              r.oR.success(s("dashboard.account.settings.delete_account.toasts.scheduled")), S(), setTimeout(() => {
                window.location.href = t.switched ? "/account" : "/login"
              }, 900)
            } catch (e) {
              r.oR.error(s("dashboard.account.settings.delete_account.toasts.otp_send_failed")), console.error(e.message)
            }
          };
        return (0, t.jsxs)(_, {
          active: n,
          children: [(0, t.jsx)(_.Step, {
            label: s("dashboard.account.settings.delete_account.step1.label"),
            description: s("dashboard.account.settings.delete_account.step1.description"),
            icon: i.A.password,
            children: (0, t.jsxs)("div", {
              className: c().verifyPassword,
              children: [(0, t.jsx)(d.A, {
                featureName: s("dashboard.account.settings.delete_account.step1.input_label"),
                placeholder: s("dashboard.account.settings.delete_account.step1.input_placeholder"),
                onChangeFunction: e => h(e.target.value),
                viewPassword: !0,
                value: u,
                icon: i.A.password
              }), (0, t.jsx)("span", {
                className: c().submitButtonUpdate,
                onClick: A,
                children: s("dashboard.account.settings.delete_account.step1.submit")
              })]
            })
          }), (0, t.jsx)(_.Step, {
            label: s("dashboard.account.settings.delete_account.step2.label"),
            description: "mfa" === m || null === m && e ? s("dashboard.account.settings.delete_account.step2.description_mfa") : s("dashboard.account.settings.delete_account.step2.description_email"),
            icon: i.A.lock,
            children: (0, t.jsxs)("div", {
              className: c().changeEmailGap,
              children: ["mfa" === m || null === m && e ? (0, t.jsxs)(t.Fragment, {
                children: [v ? (0, t.jsx)(d.A, {
                  featureName: s("dashboard.account.settings.delete_account.step2.recovery_label"),
                  placeholder: s("dashboard.account.settings.delete_account.step2.recovery_placeholder"),
                  onChangeFunction: e => g(e.target.value),
                  type: "text",
                  value: p,
                  icon: i.A.mfaRecoveryCode
                }) : (0, t.jsx)(d.A, {
                  featureName: s("dashboard.account.settings.delete_account.step2.code_label"),
                  placeholder: s("dashboard.account.settings.delete_account.step2.code_placeholder"),
                  onChangeFunction: e => g(e.target.value),
                  type: "text",
                  value: p,
                  icon: i.A.mfaToken
                }), (0, t.jsx)("span", {
                  className: c().mfaVerificationText,
                  onClick: () => y(!v),
                  children: v ? s("dashboard.account.settings.delete_account.step2.use_2fa") : s("dashboard.account.settings.delete_account.step2.use_recovery")
                })]
              }) : (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(d.A, {
                  featureName: s("dashboard.account.settings.delete_account.step2.otp_label"),
                  placeholder: s("dashboard.account.settings.delete_account.step2.otp_placeholder"),
                  onChangeFunction: e => g(e.target.value),
                  type: "text",
                  value: p,
                  icon: i.A.email
                }), (0, t.jsx)("span", {
                  className: c().mfaVerificationText,
                  onClick: T,
                  children: s("dashboard.account.settings.delete_account.step2.resend_otp")
                })]
              }), (0, t.jsx)("span", {
                className: c().submitButtonUpdate,
                onClick: R,
                children: s("dashboard.account.settings.delete_account.step2.submit")
              })]
            })
          }), (0, t.jsx)(_.Step, {
            label: s("dashboard.account.settings.delete_account.step3.label"),
            description: s("dashboard.account.settings.delete_account.step3.description"),
            icon: i.A.warning,
            children: (0, t.jsxs)("div", {
              className: c().changeEmailGap,
              children: [(0, t.jsxs)("div", {
                className: c().deleteAccountWarning,
                children: [(0, t.jsx)("h1", {
                  children: s("dashboard.account.settings.delete_account.step3.warning_title")
                }), (0, t.jsx)("h3", {
                  children: s("dashboard.account.settings.delete_account.step3.warning_body")
                })]
              }), (0, t.jsx)(d.A, {
                featureName: s("dashboard.account.settings.delete_account.step3.reason_label"),
                placeholder: s("dashboard.account.settings.delete_account.step3.reason_placeholder"),
                onChangeFunction: e => k(e.target.value),
                type: "text",
                value: C,
                icon: i.A.description
              }), (0, t.jsx)(d.A, {
                featureName: s("dashboard.account.settings.delete_account.step3.input_label", {
                  value: a
                }),
                placeholder: s("dashboard.account.settings.delete_account.step3.input_placeholder", {
                  value: a
                }),
                onChangeFunction: e => N(e.target.value),
                type: "text",
                value: w,
                icon: i.A.warning
              }), (0, t.jsxs)("span", {
                className: `${c().submitButtonUpdate} ${c().deleteAccountSubmit}`,
                onClick: U,
                children: [i.A.deleteButton, s("dashboard.account.settings.delete_account.step3.submit")]
              })]
            })
          }), (0, t.jsx)(_.Completed, {
            children: s("dashboard.account.settings.delete_account.completed")
          })]
        })
      }
      var B = a(13782),
        F = a(50703);
      let G = e => {
          if (!e) return "Unknown";
          let s = Math.max(0, Math.floor((Date.now() - 1e3 * e) / 1e3));
          if (s < 60) return "Just now";
          let a = [{
            label: "year",
            seconds: 31536e3
          }, {
            label: "month",
            seconds: 2592e3
          }, {
            label: "day",
            seconds: 86400
          }, {
            label: "hour",
            seconds: 3600
          }, {
            label: "minute",
            seconds: 60
          }].find(e => s >= e.seconds);
          if (!a) return "Just now";
          let t = Math.floor(s / a.seconds);
          return `${t} ${a.label}${1===t?"":"s"} ago`
        },
        I = e => `https://cdn.simpleicons.org/${e}/FFFFFF`,
        L = e => {
          let s = e.toLowerCase(),
            a = s.includes("chrome") ? "googlechrome" : s.includes("safari") ? "safari" : s.includes("firefox") ? "firefoxbrowser" : s.includes("edge") ? "microsoftedge" : s.includes("opera") ? "opera" : "";
          return a ? (0, t.jsx)("img", {
            src: I(a),
            alt: ""
          }) : null
        },
        M = ({
          session: e,
          unknownLabel: s
        }) => {
          let a, o = (a = e.countryCode?.trim().toLowerCase()) && /^[a-z]{2}$/.test(a) ? `https://flagcdn.com/w320/${a}.png` : null,
            n = e.country?.trim() || e.countryCode?.trim() || s;
          return (0, t.jsxs)("span", {
            className: c().sessionLocationLabel,
            children: [o && (0, t.jsx)("img", {
              src: o,
              draggable: !1,
              loading: "lazy",
              alt: "",
              className: c().sessionLocationFlag
            }), (0, t.jsx)(F.A, {
              className: c().sessionLocationScroller,
              contentClassName: c().sessionLocationText,
              title: n,
              children: n
            })]
          })
        };

      function D() {
        let e = (0, x.kj)(),
          [s, a] = (0, o.useState)([]),
          [n, d] = (0, o.useState)(!0),
          [l, u] = (0, o.useState)(null),
          [h, p] = (0, o.useState)(!1),
          [g, m] = (0, o.useState)(null),
          b = (0, o.useMemo)(() => s.filter(e => !e.current), [s]),
          f = (0, o.useMemo)(() => [...b].sort((e, s) => (s.lastSeen || 0) - (e.lastSeen || 0))[0] || null, [b]),
          _ = 1 === s.length ? e("dashboard.account.manage.sessions.toolbar_count_single") : e("dashboard.account.manage.sessions.toolbar_count_multiple", {
            count: s.length
          }),
          j = f ? e("dashboard.account.manage.sessions.other_active", {
            time: f.lastSeen ? G(f.lastSeen) : "unknown"
          }) : e("dashboard.account.manage.sessions.no_other_devices"),
          v = async () => {
            try {
              d(!0);
              let s = await fetch("https://guns.lol/api/account/sessions"),
                t = await s.json().catch(() => ({}));
              if (!s.ok) return void r.oR.error(t.error || e("dashboard.account.manage.sessions.toasts.load_failed"));
              a(t.sessions || [])
            } catch {
              r.oR.error(e("dashboard.account.manage.sessions.toasts.load_failed"))
            } finally {
              d(!1)
            }
          };
        (0, o.useEffect)(() => {
          v()
        }, []);
        let y = async s => {
          if (!l && !h) try {
            u(s.id);
            let t = await fetch("https://guns.lol/api/account/sessions/revoke", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  sessionId: s.id
                })
              }),
              o = await t.json().catch(() => ({}));
            if (!t.ok) return void r.oR.error(o.error || e("dashboard.account.manage.sessions.toasts.invalidate_failed"));
            if (r.oR.success(e("dashboard.account.manage.sessions.toasts.invalidated")), o.current) {
              window.location.href = o.switched ? "/account" : "/login";
              return
            }
            a(e => e.filter(e => e.id !== s.id))
          } catch {
            r.oR.error(e("dashboard.account.manage.sessions.toasts.invalidate_failed"))
          } finally {
            u(null)
          }
        }, w = async () => {
          if (!l && !h && 0 !== b.length) try {
            p(!0);
            let s = await fetch("https://guns.lol/api/account/sessions/revokeOthers", {
                method: "POST"
              }),
              t = await s.json().catch(() => ({}));
            if (!s.ok) return void r.oR.error(t.error || e("dashboard.account.manage.sessions.toasts.invalidate_failed"));
            r.oR.success(e("dashboard.account.manage.sessions.toasts.others_invalidated", {
              count: t.revoked || 0
            })), a(e => e.filter(e => e.current))
          } catch {
            r.oR.error(e("dashboard.account.manage.sessions.toasts.invalidate_failed"))
          } finally {
            p(!1)
          }
        }, N = g?.type === "others" ? e("dashboard.account.manage.sessions.confirm.others_title") : e("dashboard.account.manage.sessions.confirm.title"), C = g?.type === "others" ? e("dashboard.account.manage.sessions.confirm.others_description") : e("dashboard.account.manage.sessions.confirm.description");
        return n ? (0, t.jsx)("div", {
          className: c().sessionManagementLoading,
          children: i.A.loading
        }) : (0, t.jsxs)("div", {
          className: c().sessionManagement,
          children: [(0, t.jsx)(B.A, {
            opened: !!g,
            onClose: () => m(null),
            title: N,
            centered: !0,
            size: "29rem",
            children: (0, t.jsxs)("div", {
              className: c().sessionConfirm,
              children: [(0, t.jsxs)("div", {
                className: c().sessionConfirmNotice,
                children: [(0, t.jsx)("span", {
                  children: i.A.warning
                }), (0, t.jsxs)("div", {
                  children: [(0, t.jsx)("h1", {
                    children: C
                  }), (0, t.jsx)("h3", {
                    children: e("dashboard.account.manage.sessions.confirm.security_note")
                  })]
                })]
              }), (0, t.jsxs)("div", {
                className: c().sessionConfirmActions,
                children: [(0, t.jsx)("button", {
                  type: "button",
                  onClick: () => m(null),
                  className: c().sessionConfirmCancel,
                  children: e("dashboard.account.manage.sessions.confirm.cancel")
                }), (0, t.jsxs)("button", {
                  type: "button",
                  onClick: () => {
                    !g || ((m(null), "others" === g.type) ? w() : g.session && y(g.session))
                  },
                  className: c().sessionConfirmInvalidate,
                  children: [i.A.deleteButton, e("dashboard.account.manage.sessions.confirm.confirm")]
                })]
              })]
            })
          }), (0, t.jsxs)("div", {
            className: c().sessionToolbar,
            children: [(0, t.jsxs)("div", {
              className: c().sessionToolbarInfo,
              children: [(0, t.jsx)("span", {
                className: c().sessionToolbarIcon,
                children: i.A.sessions
              }), (0, t.jsx)("span", {
                className: c().sessionToolbarCount,
                children: _
              }), (0, t.jsx)("span", {
                className: c().sessionToolbarActivity,
                children: j
              })]
            }), (0, t.jsxs)("button", {
              type: "button",
              onClick: () => m({
                type: "others"
              }),
              className: c().sessionManagementBulkButton,
              disabled: 0 === b.length || h,
              children: [h ? i.A.loading : i.A.security, e("dashboard.account.manage.sessions.invalidate_others")]
            })]
          }), (0, t.jsx)("div", {
            className: c().sessionList,
            children: 0 === s.length ? (0, t.jsxs)("div", {
              className: c().sessionEmpty,
              children: [(0, t.jsx)("h1", {
                children: e("dashboard.account.manage.sessions.empty.title")
              }), (0, t.jsx)("h3", {
                children: e("dashboard.account.manage.sessions.empty.description")
              })]
            }) : s.map(s => {
              var a;
              let o;
              return (0, t.jsxs)("div", {
                className: `${c().sessionItem} ${s.current?c().sessionItemCurrent:""}`,
                children: [(0, t.jsxs)("div", {
                  className: c().sessionItemTop,
                  children: [(0, t.jsxs)("div", {
                    className: c().sessionDevice,
                    children: [(0, t.jsxs)("span", {
                      className: c().sessionDeviceIcon,
                      children: [(0, t.jsx)("span", {
                        className: c().sessionOsIcon,
                        children: (o = s.os.toLowerCase()).includes("windows") ? (0, t.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "1em",
                          height: "1em",
                          viewBox: "0 0 24 24",
                          children: (0, t.jsx)("path", {
                            fill: "currentColor",
                            d: "M3 5.1 10.7 4v7.3H3zm8.7-1.25L21 2.5v8.8h-9.3zM3 12.7h7.7V20L3 18.9zm8.7 0H21v8.8l-9.3-1.35z"
                          })
                        }) : o.includes("mac") || o.includes("ios") ? (0, t.jsx)("img", {
                          src: I("apple"),
                          alt: ""
                        }) : o.includes("android") ? (0, t.jsx)("img", {
                          src: I("android"),
                          alt: ""
                        }) : o.includes("linux") ? (0, t.jsx)("img", {
                          src: I("linux"),
                          alt: ""
                        }) : i.A.sessions
                      }), L(s.browser) && (0, t.jsx)("span", {
                        className: c().sessionBrowserIcon,
                        children: L(s.browser)
                      })]
                    }), (0, t.jsxs)("div", {
                      children: [(0, t.jsxs)("h1", {
                        children: [s.browser, " on ", s.os]
                      }), (0, t.jsx)("h3", {
                        children: (0, t.jsx)(M, {
                          session: s,
                          unknownLabel: e("dashboard.account.manage.sessions.unknown")
                        })
                      })]
                    })]
                  }), s.current && (0, t.jsx)("span", {
                    className: c().sessionCurrentBadge,
                    children: e("dashboard.account.manage.sessions.current_badge")
                  })]
                }), (0, t.jsxs)("div", {
                  className: c().sessionMetaGrid,
                  children: [s.loginMethod && (0, t.jsxs)("div", {
                    children: [(0, t.jsx)("span", {
                      children: e("dashboard.account.manage.sessions.fields.login_method")
                    }), (0, t.jsx)("h3", {
                      children: s.loginMethod.charAt(0).toUpperCase() + s.loginMethod.slice(1)
                    })]
                  }), (0, t.jsxs)("div", {
                    children: [(0, t.jsx)("span", {
                      children: e("dashboard.account.manage.sessions.fields.device")
                    }), (0, t.jsx)("h3", {
                      children: s.device
                    })]
                  }), (0, t.jsxs)("div", {
                    children: [(0, t.jsx)("span", {
                      children: e("dashboard.account.manage.sessions.fields.last_seen")
                    }), (0, t.jsx)("h3", {
                      children: G(s.lastSeen)
                    })]
                  }), (0, t.jsxs)("div", {
                    children: [(0, t.jsx)("span", {
                      children: e("dashboard.account.manage.sessions.fields.created")
                    }), (0, t.jsx)("h3", {
                      children: (a = s.createdAt) ? new Intl.DateTimeFormat(void 0, {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                      }).format(new Date(1e3 * a)) : "Unknown"
                    })]
                  })]
                }), (0, t.jsxs)("button", {
                  type: "button",
                  onClick: () => m({
                    type: "single",
                    session: s
                  }),
                  className: `${c().sessionInvalidateButton} ${s.current?c().sessionInvalidateCurrentButton:""}`,
                  disabled: l === s.id || h,
                  children: [l === s.id ? i.A.loading : i.A.deleteButton, s.current ? e("dashboard.account.manage.sessions.invalidate_current") : e("dashboard.account.manage.sessions.invalidate")]
                })]
              }, s.id)
            })
          })]
        })
      }
      var W = a(40428),
        E = a(66493),
        q = a(57157),
        J = a(31624),
        z = a.n(J);

      function V() {
        let e = (0, x.kj)(),
          [s, a] = (0, o.useState)([]),
          [n, c] = (0, o.useState)(!0),
          [i, d] = (0, o.useState)(null),
          [l, u] = (0, o.useState)(null),
          h = {
            premiumlifetime: `${e("common.pricing.premium_plan.name")} ${e("common.pricing.lifetime_text")}`,
            imagehost: e("common.pricing.imagehost_plan.name"),
            verified: e("common.pricing.verified.name_badge"),
            custombadge: e("common.pricing.custom_badge.name")
          };
        (0, o.useEffect)(() => {
          fetch("https://guns.lol/api/gift/links").then(async e => ({
            ok: e.ok,
            data: await e.json()
          })).then(({
            ok: e,
            data: s
          }) => {
            if (!e) throw Error(s.error);
            a(s.links || [])
          }).catch(() => r.oR.error(e("dashboard.account.gift_links.toasts.load_error"))).finally(() => c(!1))
        }, []);
        let p = async s => {
          try {
            await navigator.clipboard.writeText(s), r.oR.success(e("dashboard.account.gift_links.toasts.copy_success"))
          } catch {
            r.oR.error(e("dashboard.account.gift_links.toasts.copy_error"))
          }
        }, g = async () => {
          if (!l) return;
          let s = l.id;
          d(s);
          try {
            let t = await fetch(`https://guns.lol/api/gift/links/${s}/regenerate`, {
                method: "POST"
              }),
              o = await t.json().catch(() => ({}));
            if (!t.ok) throw Error(o.error);
            a(e => e.map(e => e.id === s ? o.link : e)), u(null);
            try {
              await navigator.clipboard.writeText(o.link.url), r.oR.success(e("dashboard.account.gift_links.toasts.regenerate_success"))
            } catch {
              r.oR.success(e("dashboard.account.gift_links.toasts.regenerate_success_no_copy"))
            }
          } catch (s) {
            r.oR.error(s.message || e("dashboard.account.gift_links.toasts.regenerate_error"))
          } finally {
            d(null)
          }
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)(B.A, {
            opened: !!l,
            onClose: () => !i && u(null),
            title: e("dashboard.account.gift_links.regenerate_modal_title"),
            centered: !0,
            size: "420px",
            closeOnOverlayClick: !i,
            children: (0, t.jsxs)("div", {
              className: z().regenerateConfirmation,
              children: [(0, t.jsx)("div", {
                className: z().regenerateConfirmationIcon,
                children: U.A.refresh
              }), (0, t.jsx)("p", {
                children: e("dashboard.account.gift_links.regenerate_modal_description", {
                  product: l ? h[l.product] || l.product : ""
                })
              }), (0, t.jsxs)("div", {
                className: z().regenerateConfirmationActions,
                children: [(0, t.jsx)("button", {
                  type: "button",
                  onClick: () => u(null),
                  disabled: !!i,
                  children: e("dashboard.account.gift_links.regenerate_modal_cancel")
                }), (0, t.jsxs)("button", {
                  type: "button",
                  onClick: g,
                  disabled: !!i,
                  children: [i ? U.A.loading : U.A.refresh, e(i ? "dashboard.account.gift_links.regenerating" : "dashboard.account.gift_links.regenerate_modal_confirm")]
                })]
              })]
            })
          }), (0, t.jsxs)("div", {
            className: z().giftLinksSettings,
            children: [(0, t.jsxs)("div", {
              className: z().giftLinksSettingsHeader,
              children: [(0, t.jsx)("p", {
                children: e("dashboard.account.gift_links.description")
              }), (0, t.jsx)("a", {
                href: "/pricing",
                children: e("dashboard.account.gift_links.buy_gift")
              })]
            }), n ? (0, t.jsx)("div", {
              className: z().compactEmptyState,
              children: e("dashboard.account.gift_links.loading")
            }) : 0 === s.length ? (0, t.jsxs)("div", {
              className: z().compactEmptyState,
              children: [(0, t.jsx)("span", {
                children: U.A.gift
              }), (0, t.jsxs)("div", {
                children: [(0, t.jsx)("h2", {
                  children: e("dashboard.account.gift_links.empty_title")
                }), (0, t.jsx)("p", {
                  children: e("dashboard.account.gift_links.empty_description")
                })]
              })]
            }) : (0, t.jsx)("div", {
              className: z().compactLinkList,
              children: s.map(s => (0, t.jsxs)("div", {
                className: z().compactLinkCard,
                children: [(0, t.jsx)("div", {
                  className: z().compactLinkTop,
                  children: (0, t.jsxs)("div", {
                    className: z().compactProductInfo,
                    children: [(0, t.jsx)("div", {
                      className: z().compactProductIcon,
                      children: U.A.gift
                    }), (0, t.jsx)("div", {
                      className: z().compactProductTitle,
                      children: (0, t.jsxs)("h2", {
                        children: [s.badgeQuantity && "custombadge" === s.product ? `${s.badgeQuantity}x ` : "", h[s.product] || s.product]
                      })
                    })]
                  })
                }), (0, t.jsxs)("div", {
                  className: z().compactLinkControls,
                  children: [(0, t.jsxs)("span", {
                    className: z().compactLinkValue,
                    children: [(0, t.jsx)("span", {
                      children: U.A.link
                    }), (0, t.jsx)("span", {
                      children: s.url.replace(/^https?:\/\//, "")
                    })]
                  }), (0, t.jsxs)("div", {
                    className: z().compactLinkActions,
                    children: [(0, t.jsx)("button", {
                      type: "button",
                      onClick: () => p(s.url),
                      title: e("dashboard.account.gift_links.copy"),
                      children: U.A.copy
                    }), (0, t.jsx)("button", {
                      type: "button",
                      onClick: () => u(s),
                      title: e("dashboard.account.gift_links.regenerate"),
                      children: U.A.refresh
                    })]
                  })]
                })]
              }, s.id))
            })]
          })]
        })
      }
      let H = ({
        data: e
      }) => {
        let s = (0, x.kj)(),
          a = e.config,
          [n, h] = (0, o.useState)(e.mfa),
          [p, g] = (0, o.useState)(e.discord_login),
          [m, b] = (0, o.useState)(e.google_login || !0),
          [f, _] = (0, o.useState)(e.email_marketing?.optedIn === !0),
          [y, w] = (0, o.useState)(!!e.discord),
          R = !!(e.google || e.google_only_account),
          [F, G] = (0, o.useState)("boolean" == typeof e?.has_password ? e.has_password : "boolean" != typeof e?.google_only_account || !e.google_only_account),
          [I, L] = (0, o.useState)(""),
          [M, J] = (0, o.useState)(!0),
          [z, H] = (0, o.useState)(!1),
          [Q, X] = (0, o.useState)("this feature"),
          [K, Y] = (0, o.useState)("34rem"),
          [Z, ee] = (0, o.useState)(e.username),
          [es, ea] = (0, o.useState)(a.display_name),
          [et, eo] = (0, o.useState)(R),
          [en, ec] = (0, o.useState)(i.A.removeConnect),
          [er, ei] = (0, o.useState)("google"),
          ed = e.name_cooldown,
          el = !F,
          eu = "deleteAccount" === I ? "680px" : "sessionManagement" === I ? "46rem" : "aliasManager" === I ? K : "mfaEnable" !== I && "regenerateRecoveryCodes" !== I ? "460px" : "auto",
          eh = {
            emailChange: s("dashboard.account.settings.modals.change_email"),
            passwordChange: F ? s("dashboard.account.settings.modals.change_password") : s("dashboard.account.settings.modals.add_password"),
            passwordAddedSuccess: s("dashboard.account.settings.toasts.password_added"),
            mfaEnable: s("dashboard.account.settings.modals.enable_2fa"),
            mfaDisable: s("dashboard.account.settings.modals.disable_2fa"),
            discordConnect: s("dashboard.account.discord_modal.title"),
            googleConnect: s("dashboard.account.settings.modals.google_connect"),
            googleDisconnect: s("dashboard.account.settings.modals.google_disconnect"),
            googleConnectSuccess: s("dashboard.account.settings.modals.google_connected"),
            socialDetails: s("dashboard.account.settings.social_details.modal_title", {
              provider: "google" === er ? s("dashboard.account.settings.social_details.provider_name_google") : s("dashboard.account.settings.social_details.provider_name_discord")
            }),
            passwordRequiredNotice: s("dashboard.account.settings.modals.password_required"),
            usernameChange: s("dashboard.account.settings.modals.change_username"),
            aliasManager: s("dashboard.account.settings.modals.manage_aliases"),
            displayNameChange: s("dashboard.account.settings.modals.change_display_name"),
            regenerateRecoveryCodes: s("dashboard.account.settings.modals.regenerate_codes"),
            sessionManagement: s("dashboard.account.manage.modals.session_management"),
            deleteAccount: s("dashboard.account.settings.modals.delete_account")
          } [I] || "",
          ep = (e, s) => {
            let a = window.open("", "oauthwindow", "width=460,height=720");
            if (a) {
              a.location.href = e;
              let t = setInterval(() => {
                if (a.closed) {
                  clearInterval(t), s?.();
                  return
                }
                try {
                  let e = new URL(a.location.href),
                    o = e.origin === window.location.origin,
                    n = "/account" === e.pathname || e.pathname.startsWith("/account/"),
                    c = "/login" === e.pathname && e.searchParams.has("oauthError");
                  o && (n || c) && (a.close(), clearInterval(t), s?.())
                } catch {}
              }, 200);
              return
            }
            window.open(e, "_self")
          },
          eg = async () => {
            try {
              let e = new URLSearchParams({
                  action: "connect",
                  joinServer: String(M)
                }),
                a = await fetch(`https://guns.lol/api/discord/url?${e.toString()}`);
              if (!a.ok) {
                let e = await a.json().catch(() => ({}));
                r.oR.error(e.error || s("dashboard.account.settings.toasts.unknown_error"));
                return
              }
              let t = await a.json(),
                o = `https://discord.com/api/oauth2/authorize?client_id=1140632236509642882&response_type=code&state=${encodeURIComponent(t.state)}&redirect_uri=${encodeURIComponent("https://guns.lol/api/discord/callback")}&scope=identify${M?"+guilds.join":""}+role_connections.write`;
              ep(o, () => location.reload())
            } catch {
              r.oR.error(s("dashboard.account.settings.toasts.unknown_error"))
            }
          }, em = async () => {
            try {
              let e = await fetch("https://guns.lol/api/account/oauth/google/url"),
                a = await e.json().catch(() => ({}));
              if (!e.ok || !a.url) return void r.oR.error(a.error || s("dashboard.account.settings.toasts.google_link_error"));
              ep(a.url, () => {
                location.reload()
              })
            } catch {
              r.oR.error(s("dashboard.account.settings.toasts.unknown_error"))
            }
          }, eb = e => {
            ei(e), L("socialDetails"), H(!0)
          }, ef = e?.google?.email || s("dashboard.account.settings.social_details.not_available"), e_ = e?.discord?.username || s("dashboard.account.settings.social_details.not_available"), ex = e?.discord?.id || s("dashboard.account.settings.social_details.not_available"), ej = async () => {
            try {
              ec(i.A.loading);
              let e = await fetch("https://guns.lol/api/account/oauth/google/remove", {
                  method: "POST"
                }),
                a = await e.json().catch(() => ({}));
              e.ok ? (eo(!1), "boolean" == typeof a.hasPassword && G(!!a.hasPassword), b(!1), H(!1), r.oR.success(a.message || s("dashboard.account.settings.toasts.google_unlinked"))) : r.oR.error(a.error || s("dashboard.account.settings.toasts.google_unlink_error"))
            } catch {
              r.oR.error(s("dashboard.account.settings.toasts.unknown_error"))
            } finally {
              ec(i.A.removeConnect)
            }
          };
        async function ev(e) {
          try {
            let a = !!e.target.checked,
              t = await fetch("https://guns.lol/api/account/security", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  discordLogin: a
                })
              }),
              o = await t.json().catch(() => ({}));
            t.ok ? (r.oR.success(s("dashboard.account.settings.toasts.saved")), g(a)) : r.oR.error(o.error || s("dashboard.account.settings.toasts.unknown_error"))
          } catch (e) {
            r.oR.error(s("dashboard.account.settings.toasts.unknown_error")), console.error(e.message)
          }
        }
        async function ey(e) {
          try {
            let a = !!e.target.checked,
              t = await fetch("https://guns.lol/api/account/security", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  googleLogin: a
                })
              }),
              o = await t.json().catch(() => ({}));
            t.ok ? (r.oR.success(s("dashboard.account.settings.toasts.saved")), b(a)) : r.oR.error(o.error || s("dashboard.account.settings.toasts.unknown_error"))
          } catch (e) {
            r.oR.error(s("dashboard.account.settings.toasts.unknown_error")), console.error(e.message)
          }
        }
        async function ew(e) {
          let a = !!e.currentTarget.checked;
          _(a);
          try {
            let e = await fetch("https://guns.lol/api/account/marketing", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                emailMarketingOptIn: a,
                emailMarketingSource: "settings"
              })
            });
            if (e.ok) r.oR.success(s("dashboard.account.settings.toasts.saved"));
            else {
              let a = await e.json().catch(() => ({}));
              _(f), r.oR.error(a.error || s("dashboard.account.settings.toasts.unknown_error"))
            }
          } catch (e) {
            _(f), r.oR.error(s("dashboard.account.settings.toasts.unknown_error")), console.error(e.message)
          }
        }
        async function eN() {
          try {
            let e = await fetch("https://guns.lol/api/discord/remove", {
                method: "POST"
              }),
              a = await e.json();
            e.ok ? (r.oR.success(s("dashboard.account.settings.toasts.discord_disconnected")), w(!1)) : r.oR.error(a.error || s("dashboard.account.settings.toasts.discord_disconnect_failed"))
          } catch (e) {
            r.oR.error(s("dashboard.account.settings.toasts.unknown_error")), console.error(e.message)
          }
        }
        async function eC() {
          try {
            let e = await fetch("https://guns.lol/api/discord/roles", {
                method: "POST"
              }),
              a = await e.json();
            e.ok ? r.oR.success(s("dashboard.account.settings.toasts.claim_roles_success")) : 401 == e.status && "Relink discord" == a.error ? ek() : r.oR.error(a.error)
          } catch (e) {
            r.oR.error(s("dashboard.account.settings.toasts.unknown_error")), console.error(e.message)
          }
        }
        let ek = async () => {
          try {
            let e = new URLSearchParams({
                action: "relink",
                joinServer: "true"
              }),
              a = await fetch(`https://guns.lol/api/discord/url?${e.toString()}`);
            if (!a.ok) {
              let e = await a.json().catch(() => ({}));
              r.oR.error(e.error || s("dashboard.account.settings.toasts.unknown_error"));
              return
            }
            let t = await a.json(),
              o = `https://discord.com/api/oauth2/authorize?client_id=1140632236509642882&response_type=code&state=${encodeURIComponent(t.state)}&redirect_uri=${encodeURIComponent("https://guns.lol/api/discord/callback")}&scope=identify+guilds.join+role_connections.write`;
            ep(o, () => {
              eC()
            })
          } catch {
            r.oR.error(s("dashboard.account.settings.toasts.unknown_error"))
          }
        }, eS = async () => {
          if (!F) {
            X("regenerate recovery codes"), L("passwordRequiredNotice"), H(!0);
            return
          }
          L("regenerateRecoveryCodes"), H(!0)
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)(B.A, {
            opened: z,
            onClose: () => {
              H(!1)
            },
            title: eh,
            centered: !0,
            size: eu,
            children: "emailChange" === I ? (0, t.jsx)(j, {
              mfaEnabled: n
            }) : "passwordChange" === I ? (0, t.jsx)(v, {
              mfaEnabled: n,
              hasPassword: F,
              onPasswordUpdated: () => {
                if (!F) {
                  G(!0), L("passwordAddedSuccess"), H(!0);
                  return
                }
                G(!0)
              }
            }) : "passwordAddedSuccess" === I ? (0, t.jsxs)("div", {
              className: c().oauthConnectionWrapper,
              children: [(0, t.jsxs)("div", {
                className: c().oauthConnectionInfo,
                children: [(0, t.jsx)("span", {
                  className: c().oauthProviderIcon,
                  children: i.A.password
                }), (0, t.jsxs)("div", {
                  className: c().oauthConnectionCopy,
                  children: [(0, t.jsx)("h1", {
                    children: s("dashboard.account.settings.password_flow.added_title")
                  }), (0, t.jsx)("h3", {
                    children: s("dashboard.account.settings.password_flow.added_description")
                  })]
                })]
              }), (0, t.jsx)("button", {
                onClick: () => H(!1),
                className: c().oauthConnectionButton,
                children: s("dashboard.account.settings.password_flow.added_continue")
              })]
            }) : "mfaEnable" === I ? (0, t.jsx)(N, {
              setMfa: h
            }) : "mfaDisable" === I ? (0, t.jsx)(C, {
              setMfa: h
            }) : "discordConnect" === I ? (0, t.jsxs)("div", {
              className: c().discordConnectionWrapper,
              children: [(0, t.jsxs)("button", {
                onClick: eg,
                children: [i.A.connectDiscord, " ", s("dashboard.account.discord_modal.connect_button")]
              }), (0, t.jsxs)("div", {
                className: c().optionalServerJoin,
                children: [(0, t.jsx)(W.A, {
                  checked: M,
                  onChange: e => J(e.currentTarget.checked)
                }), (0, t.jsx)("h1", {
                  children: s("dashboard.account.discord_modal.join_server_label")
                })]
              })]
            }) : "googleConnect" === I ? (0, t.jsxs)("div", {
              className: c().oauthConnectionWrapper,
              children: [(0, t.jsxs)("div", {
                className: c().oauthConnectionInfo,
                children: [(0, t.jsx)("span", {
                  className: c().oauthProviderIcon,
                  children: P.A.google
                }), (0, t.jsxs)("div", {
                  className: c().oauthConnectionCopy,
                  children: [(0, t.jsx)("h1", {
                    children: s("dashboard.account.settings.google.connect_title")
                  }), (0, t.jsx)("h3", {
                    children: s("dashboard.account.settings.google.connect_description")
                  })]
                })]
              }), (0, t.jsxs)("button", {
                onClick: em,
                className: c().oauthConnectionButton,
                children: [P.A.google, " ", s("dashboard.account.settings.google.connect_button")]
              })]
            }) : "googleDisconnect" === I ? (0, t.jsxs)("div", {
              className: c().oauthConnectionWrapper,
              children: [(0, t.jsxs)("div", {
                className: c().oauthConnectionInfo,
                children: [(0, t.jsx)("span", {
                  className: c().oauthProviderIcon,
                  children: P.A.google
                }), (0, t.jsxs)("div", {
                  className: c().oauthConnectionCopy,
                  children: [(0, t.jsx)("h1", {
                    children: s("dashboard.account.settings.google.disconnect_title")
                  }), (0, t.jsx)("h3", {
                    children: s("dashboard.account.settings.google.disconnect_description")
                  })]
                })]
              }), (0, t.jsxs)("button", {
                type: "button",
                onClick: ej,
                className: `${c().oauthConnectionButton} ${c().oauthDisconnectButton}`,
                children: [en, " ", s("dashboard.account.settings.google.disconnect_button")]
              })]
            }) : "googleConnectSuccess" === I ? (0, t.jsxs)("div", {
              className: c().oauthConnectionWrapper,
              children: [(0, t.jsxs)("div", {
                className: c().oauthConnectionInfo,
                children: [(0, t.jsx)("span", {
                  className: c().oauthProviderIcon,
                  children: P.A.google
                }), (0, t.jsxs)("div", {
                  className: c().oauthConnectionCopy,
                  children: [(0, t.jsx)("h1", {
                    children: s("dashboard.account.settings.google.success_title")
                  }), (0, t.jsx)("h3", {
                    children: s("dashboard.account.settings.google.success_description")
                  })]
                })]
              }), (0, t.jsx)("button", {
                onClick: () => H(!1),
                className: c().oauthConnectionButton,
                children: s("dashboard.account.settings.google.continue_button")
              })]
            }) : "socialDetails" === I ? (0, t.jsxs)("div", {
              className: c().oauthConnectionWrapper,
              children: [(0, t.jsxs)("div", {
                className: c().oauthConnectionInfo,
                children: [(0, t.jsx)("span", {
                  className: c().oauthProviderIcon,
                  children: "google" === er ? P.A.google : P.A.discord
                }), (0, t.jsxs)("div", {
                  className: c().oauthConnectionCopy,
                  children: [(0, t.jsx)("h1", {
                    children: "google" === er ? s("dashboard.account.settings.social_details.provider_google") : s("dashboard.account.settings.social_details.provider_discord")
                  }), "google" === er ? (0, t.jsxs)("h3", {
                    children: [s("dashboard.account.settings.social_details.email"), ": ", ef]
                  }) : (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)("h3", {
                      children: [s("dashboard.account.settings.social_details.username"), ": ", e_]
                    }), (0, t.jsxs)("h3", {
                      children: [s("dashboard.account.settings.social_details.id"), ": ", ex]
                    })]
                  })]
                })]
              }), (0, t.jsx)("button", {
                type: "button",
                onClick: () => H(!1),
                className: c().oauthConnectionButton,
                children: s("dashboard.account.settings.social_details.close")
              })]
            }) : "passwordRequiredNotice" === I ? (0, t.jsxs)("div", {
              className: c().oauthConnectionWrapper,
              children: [(0, t.jsxs)("div", {
                className: c().oauthConnectionInfo,
                children: [(0, t.jsx)("span", {
                  className: c().oauthProviderIcon,
                  children: i.A.password
                }), (0, t.jsxs)("div", {
                  className: c().oauthConnectionCopy,
                  children: [(0, t.jsx)("h1", {
                    children: s("dashboard.account.settings.password_flow.required_title")
                  }), (0, t.jsx)("h3", {
                    children: s("dashboard.account.settings.password_flow.required_description", {
                      action: Q
                    })
                  })]
                })]
              }), (0, t.jsxs)("div", {
                className: c().oauthConnectionActions,
                children: [(0, t.jsxs)("button", {
                  type: "button",
                  onClick: () => {
                    L("passwordChange"), H(!0)
                  },
                  className: c().oauthConnectionButton,
                  children: [i.A.password, " ", s("dashboard.account.settings.password_flow.required_button_add")]
                }), (0, t.jsx)("button", {
                  type: "button",
                  onClick: () => H(!1),
                  className: `${c().oauthConnectionButton} ${c().oauthDisconnectButton}`,
                  children: s("dashboard.account.settings.password_flow.required_button_cancel")
                })]
              })]
            }) : "usernameChange" === I ? (0, t.jsx)(k.A, {
              currentUsername: Z,
              setCurrentUsername: ee,
              cooldown: ed,
              setIsModalOpened: H
            }) : "aliasManager" === I ? (0, t.jsx)(S.A, {
              setIsModalOpened: H,
              onRequestModalSize: Y,
              aliasManagerData: e.alias_manager
            }) : "displayNameChange" === I ? (0, t.jsx)(A.A, {
              displayName: es,
              setDisplayName: ea,
              setIsModalOpened: H
            }) : "regenerateRecoveryCodes" === I ? (0, t.jsx)(O, {
              setIsModalOpened: H
            }) : "sessionManagement" === I ? (0, t.jsx)(D, {}) : "deleteAccount" === I ? (0, t.jsx)($, {
              mfaEnabled: n
            }) : null
          }), (0, t.jsx)(r.l$, {
            richColors: !0,
            position: "top-center",
            theme: "dark",
            className: T().toasterStyles,
            icons: {
              success: U.A.successToast
            },
            visibleToasts: 2
          }), (0, t.jsxs)("div", {
            className: c().accountSettings,
            children: [(0, t.jsx)("h1", {
              className: c().accountSettingsText,
              children: s("dashboard.account.settings.title")
            }), (0, t.jsxs)("div", {
              className: c().accountInformation,
              children: [(0, t.jsx)(u, {
                category: s("dashboard.account.settings.sections.general"),
                children: (0, t.jsxs)("div", {
                  className: c().informationWrapper,
                  children: [(0, t.jsx)(d.A, {
                    featureName: s("dashboard.account.settings.fields.username"),
                    value: Z,
                    readOnly: !0,
                    icon: i.A.username,
                    onClick: () => {
                      L("usernameChange"), H(!0)
                    }
                  }), (0, t.jsx)(d.A, {
                    featureName: s("dashboard.account.settings.fields.display_name"),
                    placeholder: s("dashboard.account.settings.fields.display_name_placeholder"),
                    value: es,
                    readOnly: !0,
                    icon: i.A.displayName,
                    onClick: () => {
                      L("displayNameChange"), H(!0)
                    }
                  }), (0, t.jsx)("div", {
                    className: c().aliasWrapper,
                    children: (0, t.jsx)(q.A, {
                      featureName: s("dashboard.account.settings.fields.alias.title"),
                      element: (0, t.jsxs)("span", {
                        className: c().manageAliasesButton,
                        onClick: () => {
                          L("aliasManager"), H(!0)
                        },
                        children: [i.A.alias, " ", s("dashboard.account.settings.fields.alias.manage_button")]
                      }),
                      helpDescription: s("dashboard.account.settings.fields.alias.help_description")
                    })
                  }), (0, t.jsx)(d.A, {
                    featureName: s("dashboard.account.settings.fields.email"),
                    value: e.email,
                    readOnly: !0,
                    icon: i.A.email,
                    viewPassword: !0
                  })]
                })
              }), (0, t.jsx)(u, {
                category: s("dashboard.account.settings.sections.language"),
                children: (0, t.jsx)("div", {
                  className: c().informationWrapper,
                  children: (0, t.jsxs)("div", {
                    className: c().languageSelectionWrapper,
                    children: [(0, t.jsx)("h1", {
                      children: s("dashboard.account.settings.language.description")
                    }), (0, t.jsx)(E.A, {})]
                  })
                })
              }), (0, t.jsx)(u, {
                category: s("dashboard.account.settings.sections.discord"),
                children: (0, t.jsx)("div", {
                  className: c().informationWrapper,
                  children: (0, t.jsx)("div", {
                    className: c().accountActions,
                    children: (0, t.jsxs)("div", {
                      className: c().passwordChangeWrapper,
                      children: [(0, t.jsx)("h1", {
                        children: s("dashboard.account.settings.discord.claim_description")
                      }), (0, t.jsx)("span", {
                        onClick: eC,
                        children: s("dashboard.account.settings.discord.claim_button")
                      })]
                    })
                  })
                })
              }), (0, t.jsxs)(u, {
                category: s("dashboard.account.settings.sections.security"),
                children: [(0, t.jsxs)("div", {
                  className: `${c().informationWrapper} ${c().flexRow}`,
                  children: [(0, t.jsxs)("div", {
                    className: c().securityDescription,
                    children: [(0, t.jsx)("h1", {
                      children: s("dashboard.account.settings.security.mfa.title")
                    }), (0, t.jsx)("h3", {
                      children: s("dashboard.account.settings.security.mfa.description")
                    })]
                  }), (0, t.jsx)(l.A, {
                    checked: n,
                    onChangeFunction: e => {
                      if (!F) {
                        X("manage 2FA settings"), L("passwordRequiredNotice"), H(!0);
                        return
                      }
                      e.target.checked ? (L("mfaEnable"), H(!0)) : e.target.checked || (L("mfaDisable"), H(!0))
                    }
                  })]
                }), (0, t.jsxs)("div", {
                  className: `${c().informationWrapper} ${c().flexRow} ${c().sessionSettingsRow}`,
                  children: [(0, t.jsxs)("div", {
                    className: c().securityDescription,
                    children: [(0, t.jsx)("h1", {
                      children: s("dashboard.account.manage.sessions.title")
                    }), (0, t.jsx)("h3", {
                      children: s("dashboard.account.manage.sessions.description")
                    })]
                  }), (0, t.jsxs)("button", {
                    type: "button",
                    onClick: () => {
                      L("sessionManagement"), H(!0)
                    },
                    className: c().sessionSettingsButton,
                    children: [i.A.sessions, s("dashboard.account.manage.links.session_management")]
                  })]
                })]
              }), (0, t.jsxs)(u, {
                category: s("dashboard.account.settings.sections.connections"),
                children: [(0, t.jsxs)("div", {
                  className: `${c().informationWrapper} ${c().flexRow}`,
                  children: [(0, t.jsxs)("div", {
                    className: c().securityDescription,
                    children: [(0, t.jsx)("h1", {
                      children: s("dashboard.account.settings.google.login_title")
                    }), (0, t.jsx)("h3", {
                      children: s("dashboard.account.settings.google.login_description")
                    })]
                  }), et ? (0, t.jsx)(l.A, {
                    checked: m,
                    onChangeFunction: ey
                  }) : (0, t.jsx)(l.A, {
                    checked: !1,
                    onChangeFunction: () => {
                      L("googleConnect"), H(!0)
                    }
                  })]
                }), (0, t.jsxs)("div", {
                  className: `${c().informationWrapper} ${c().flexRow}`,
                  children: [(0, t.jsxs)("div", {
                    className: c().securityDescription,
                    children: [(0, t.jsx)("h1", {
                      children: s("dashboard.account.settings.security.discord_login.title")
                    }), (0, t.jsx)("h3", {
                      children: s("dashboard.account.settings.security.discord_login.description")
                    })]
                  }), y ? (0, t.jsx)(l.A, {
                    checked: p,
                    onChangeFunction: ev
                  }) : (0, t.jsx)(l.A, {
                    checked: !1,
                    onChangeFunction: () => {
                      L("discordConnect"), H(!0)
                    }
                  })]
                }), (0, t.jsxs)("div", {
                  className: c().accountSocialActions,
                  children: [(0, t.jsx)("h1", {
                    children: s("dashboard.account.settings.actions.social_description")
                  }), (0, t.jsxs)("div", {
                    className: c().accountSocialRow,
                    children: [(0, t.jsxs)("div", {
                      className: c().accountSocialProvider,
                      children: [P.A.google, " Google"]
                    }), (0, t.jsxs)("div", {
                      className: c().accountSocialButtons,
                      children: [et && (0, t.jsx)("button", {
                        type: "button",
                        onClick: () => eb("google"),
                        className: c().accountSocialButton,
                        children: i.A.socialAccount
                      }), (0, t.jsx)("button", {
                        type: "button",
                        onClick: () => {
                          L(et ? "googleDisconnect" : "googleConnect"), H(!0)
                        },
                        className: `${c().accountSocialButton} ${et?c().accountSocialDanger:""}`,
                        children: et ? s("dashboard.account.settings.actions.google.disconnect") : s("dashboard.account.settings.actions.google.connect")
                      })]
                    })]
                  }), (0, t.jsxs)("div", {
                    className: c().accountSocialRow,
                    children: [(0, t.jsxs)("div", {
                      className: c().accountSocialProvider,
                      children: [P.A.discord, " Discord"]
                    }), (0, t.jsxs)("div", {
                      className: c().accountSocialButtons,
                      children: [y && (0, t.jsx)("button", {
                        type: "button",
                        onClick: () => eb("discord"),
                        className: c().accountSocialButton,
                        children: i.A.socialAccount
                      }), (0, t.jsx)("button", {
                        type: "button",
                        onClick: y ? eN : () => {
                          L("discordConnect"), H(!0)
                        },
                        className: `${c().accountSocialButton} ${y?c().accountSocialDanger:""}`,
                        children: y ? s("dashboard.account.settings.actions.discord.unlink") : s("dashboard.account.settings.actions.discord.connect")
                      })]
                    })]
                  })]
                })]
              }), (0, t.jsx)(u, {
                category: s("dashboard.account.gift_links.title"),
                children: (0, t.jsx)("div", {
                  id: "gift-links",
                  className: c().informationWrapper,
                  children: (0, t.jsx)(V, {})
                })
              }), (0, t.jsx)(u, {
                category: s("dashboard.account.settings.sections.marketing"),
                children: (0, t.jsxs)("div", {
                  className: `${c().informationWrapper} ${c().flexRow}`,
                  children: [(0, t.jsxs)("div", {
                    className: c().securityDescription,
                    children: [(0, t.jsx)("h1", {
                      children: s("dashboard.account.settings.marketing.email_marketing.title")
                    }), (0, t.jsx)("h3", {
                      children: s("dashboard.account.settings.marketing.email_marketing.description")
                    })]
                  }), (0, t.jsx)(l.A, {
                    checked: f,
                    onChangeFunction: ew
                  })]
                })
              }), (0, t.jsx)(u, {
                category: s("dashboard.account.settings.sections.actions"),
                children: (0, t.jsx)("div", {
                  className: c().informationWrapper,
                  children: (0, t.jsxs)("div", {
                    className: c().accountActions,
                    children: [(0, t.jsxs)("div", {
                      className: c().recoveryCodesWrapper,
                      children: [(0, t.jsx)("h1", {
                        children: s("dashboard.account.settings.actions.recovery.description")
                      }), (0, t.jsxs)("span", {
                        onClick: eS,
                        className: c().recoveryCodesButton,
                        children: [s("dashboard.account.settings.actions.recovery.button"), " ", e.mfa && (0, t.jsx)("div", {
                          className: `${c().recoveryCodesBadge} ${e.recoveryCodesLength<=1&&c().recoveryCodesWarning}`,
                          children: s("dashboard.account.settings.actions.recovery.codes_left", {
                            count: e.recoveryCodesLength
                          })
                        })]
                      })]
                    }), (0, t.jsx)("span", {
                      onClick: () => {
                        if (!F) {
                          X("change your email"), L("passwordRequiredNotice"), H(!0);
                          return
                        }
                        L("emailChange"), H(!0)
                      },
                      children: s("dashboard.account.settings.actions.change_email")
                    }), (0, t.jsxs)("div", {
                      className: c().passwordChangeWrapper,
                      children: [(0, t.jsx)("h1", {
                        children: F ? s("dashboard.account.settings.actions.password.description") : s("dashboard.account.settings.actions.password.description_add")
                      }), (0, t.jsx)("span", {
                        onClick: () => {
                          L("passwordChange"), H(!0)
                        },
                        children: el ? s("dashboard.account.settings.actions.password.button_add") : s("dashboard.account.settings.actions.password.button")
                      })]
                    }), (0, t.jsxs)("a", {
                      href: "/logout",
                      className: c().logoutButton,
                      children: [i.A.logout, " ", s("dashboard.account.settings.actions.logout")]
                    }), (0, t.jsx)("div", {
                      className: c().passwordChangeWrapper,
                      children: (0, t.jsxs)("span", {
                        className: c().deleteAccountButton,
                        onClick: () => {
                          if (!F) {
                            X("delete your account"), L("passwordRequiredNotice"), H(!0);
                            return
                          }
                          L("deleteAccount"), H(!0)
                        },
                        children: [i.A.deleteButton, s("dashboard.account.settings.actions.delete_account.button")]
                      })
                    })]
                  })
                })
              })]
            })]
          })]
        })
      }
    },
    30305: e => {
      e.exports = {
        stepper: "GUNS__2d-0a74e7e2-86df1f2a-8b61c626",
        steps: "GUNS__5f-59a31c3d-9fac272c-3044b317",
        step: "GUNS__85-cd9ff4ca-d8d4db1e-185d96a9",
        indicator: "GUNS__3d-a6a4fadc-8d4b2434-1311e5d4",
        indicatorInner: "GUNS__a8-5afb6c59-fa09e008-ba148453",
        meta: "GUNS__42-ea291bc2-59e73120-3c974111",
        label: "GUNS__37-0a8b178d-bb87ab33-dda919b6",
        description: "GUNS__d9-f4ff9439-cb42dc61-f4903849",
        panel: "GUNS__f7-47b23c91-e376342c-e42a97af"
      }
    },
    31624: e => {
      e.exports = {
        redeemPage: "GUNS__a8-f7242d1a-081bdcfd-bc61cc0d",
        redeemCard: "GUNS__71-8ce59140-e1706b20-e5252b42",
        giftProductPanel: "GUNS__f8-98400fca-c170f175-3c4321f9",
        giftEmblem: "GUNS__be-b213808a-e90540de-3f75ea25",
        productSummary: "GUNS__c8-28590569-cc674652-d1dc682b",
        giftMessage: "GUNS__84-c6e66c99-f36272ca-4248bbb0",
        claimPanel: "GUNS__a2-9521af54-6de43c18-6e5b51c1",
        claimState: "GUNS__dc-0f6d246b-5d401e23-94f1bc6b",
        giftDetails: "GUNS__45-206e92ae-6b75fe38-ac525840",
        primaryAction: "GUNS__ea-76a96675-9bd61a9a-04482893",
        buttonSpinner: "GUNS__4e-a2f13eec-e16ca968-b2c805f1",
        giftLinksSettings: "GUNS__34-336c730b-fd5f4ce7-1a5be58c",
        giftLinksSettingsHeader: "GUNS__c8-de0f1215-82343577-101a15a1",
        compactLinkList: "GUNS__12-c6ff35b4-d8e9ce86-c54fc94e",
        compactLinkCard: "GUNS__5b-c50ede60-ba0171ac-394d66cf",
        compactLinkTop: "GUNS__ac-64776d22-5b3b2b78-51fe6da7",
        compactProductInfo: "GUNS__2b-8ec5ed35-89def76a-a81c5690",
        compactProductIcon: "GUNS__fc-a04d0077-bbac7dbe-7e74f296",
        compactProductTitle: "GUNS__20-63131e9c-42b4beb4-587bcb25",
        compactEmptyState: "GUNS__c4-82995eef-379f20f3-b6660278",
        compactLinkControls: "GUNS__a3-79166ad3-83cb2e0d-78df290e",
        compactLinkValue: "GUNS__ae-e34ee8b1-415d7651-6b565c55",
        compactLinkActions: "GUNS__77-56168c89-a47a7bb4-c55f02b1",
        regenerateConfirmation: "GUNS__be-26904414-6c2a2c4c-9f2c0971",
        regenerateConfirmationIcon: "GUNS__4b-4521c18b-078abae6-66b3eb0e",
        regenerateConfirmationActions: "GUNS__7d-c15e70a9-e984b96e-c6d10396",
        usernameHighlight: "GUNS__2d-8486c6d7-fd39d602-e08902e6"
      }
    },
    50703: (e, s, a) => {
      "use strict";
      a.d(s, {
        A: () => r
      });
      var t = a(95155),
        o = a(12115),
        n = a(5684),
        c = a.n(n);

      function r({
        as: e = "span",
        className: s,
        contentClassName: a,
        children: n,
        style: r,
        title: i
      }) {
        let d = (0, o.useRef)(null),
          l = (0, o.useRef)(null),
          [u, h] = (0, o.useState)(0);
        (0, o.useEffect)(() => {
          let e = d.current,
            s = l.current;
          if (!e || !s) return;
          let a = 0,
            t = !0,
            o = () => {
              cancelAnimationFrame(a), a = requestAnimationFrame(() => {
                if (!t) return;
                let a = Math.ceil(s.scrollWidth - e.clientWidth);
                h(a > 1 ? a : 0)
              })
            };
          o();
          let n = "undefined" != typeof ResizeObserver ? new ResizeObserver(o) : null;
          return n?.observe(e), n?.observe(s), window.addEventListener("resize", o), document.fonts?.ready.then(o), () => {
            t = !1, cancelAnimationFrame(a), n?.disconnect(), window.removeEventListener("resize", o)
          }
        }, [n, r]);
        let p = u > 0 ? {
          "--overflow-text-distance": `-${u}px`,
          "--overflow-text-duration": `${.9*Math.min(Math.max(u/24+4.5,5.5),12)}s`
        } : void 0;
        return (0, t.jsx)(e, {
          ref: d,
          className: `${c().overflowText}${s?` ${s}`:""}`,
          style: r,
          title: i,
          children: (0, t.jsx)("span", {
            ref: l,
            className: `${c().overflowTextContent}${u>0?` ${c().isScrollable}`:""}${a?` ${a}`:""}`,
            style: p,
            children: n
          })
        })
      }
    },
    57157: (e, s, a) => {
      "use strict";
      a.d(s, {
        A: () => i
      });
      var t = a(95155),
        o = a(98241),
        n = a.n(o),
        c = a(54834),
        r = a(81576);

      function i({
        featureName: e,
        helpDescription: s,
        element: a,
        id: o
      }) {
        return (0, t.jsxs)("div", {
          className: n().featureName,
          "data-dashboard-feature-label": "string" == typeof e ? e : void 0,
          children: [(0, t.jsxs)("h1", {
            className: n().featureNameText,
            style: {
              marginBottom: "6px"
            },
            children: [e, (0, t.jsxs)(r.Ay, {
              width: "370px",
              position: "top",
              id: o,
              children: [(0, t.jsx)(r.Ay.Target, {
                children: c.A.help
              }), (0, t.jsx)(r.Ay.Dropdown, {
                children: (0, t.jsx)("div", {
                  className: n().helpDescription,
                  children: s.split("\n").map((e, s) => (0, t.jsxs)("span", {
                    children: [e, (0, t.jsx)("br", {})]
                  }, s))
                })
              })]
            })]
          }), a]
        })
      }
    },
    69283: (e, s, a) => {
      Promise.resolve().then(a.bind(a, 17153)), Promise.resolve().then(a.bind(a, 69783)), Promise.resolve().then(a.bind(a, 13770)), Promise.resolve().then(a.bind(a, 41112)), Promise.resolve().then(a.bind(a, 21957))
    },
    73728: e => {
      e.exports = {
        switch: "GUNS__37-bebc3157-36356f81-31aa98a5",
        input: "GUNS__07-6848431b-ec698247-987f2132",
        track: "GUNS__c1-89bc1537-00272519-3133d28f",
        thumb: "GUNS__13-b5e3f9d4-24f5d8e3-cfe09b0b"
      }
    },
    81469: (e, s, a) => {
      "use strict";
      a.d(s, {
        A: () => h
      });
      var t = a(95155),
        o = a(29722),
        n = a(12115),
        c = a(98241),
        r = a.n(c),
        i = a(73728),
        d = a.n(i),
        l = a(86891);
      let u = ["ar", "he", "fa", "ur"];

      function h({
        featureName: e,
        onChangeFunction: s,
        className: a,
        id: c,
        onChange: i,
        defaultChecked: h,
        disabled: p,
        ...g
      }) {
        let m = (0, l.useLang)(),
          b = (0, n.useId)(),
          f = u.includes(m) ? "rtl" : "ltr",
          _ = "string" == typeof e ? e : void 0;
        return (0, t.jsxs)("div", {
          className: r().inputContainerWrapper,
          "data-dashboard-feature-label": _,
          children: [e && (0, t.jsx)("h1", {
            className: r().featureName,
            children: e
          }), (0, t.jsx)("div", {
            className: r().inputWrapperDiv,
            style: {
              direction: f
            },
            children: (0, t.jsxs)("label", {
              className: (0, o.A)(d().switch, a),
              "data-disabled": p,
              "data-direction": f,
              children: [(0, t.jsx)("input", {
                ...g,
                id: c ?? b,
                type: "checkbox",
                className: d().input,
                defaultChecked: h,
                disabled: p,
                onChange: e => {
                  i?.(e), s?.(e)
                }
              }), (0, t.jsx)("span", {
                className: d().track,
                children: (0, t.jsx)("span", {
                  className: d().thumb
                })
              })]
            })
          })]
        })
      }
    }
  },
  e => {
    e.O(0, [8392, 379, 6870, 1899, 7958, 4236, 6609, 4293, 5810, 6746, 6891, 5886, 9182, 8481, 3434, 1378, 6788, 5395, 2840, 7109, 3925, 8441, 3794, 7358], () => e(e.s = 69283)), _N_E = e.O()
  }
]);