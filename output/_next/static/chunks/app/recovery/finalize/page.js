(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9415], {
    10939: (e, a, r) => {
      Promise.resolve().then(r.bind(r, 17891))
    },
    17891: (e, a, r) => {
      "use strict";
      r.d(a, {
        default: () => h
      });
      var t = r(95155),
        n = r(12115),
        i = r(73321),
        s = r(77570),
        c = r(81934),
        _ = r(38256),
        o = r(18943),
        l = r.n(o),
        u = r(49982),
        d = r.n(u);

      function h() {
        let e = (0, _.kj)(),
          a = (0, i.useRouter)(),
          r = (0, i.useSearchParams)(),
          o = r.get("attempt") || "",
          u = r.get("token") || "",
          [h, p] = (0, n.useState)(!1),
          [m, x] = (0, n.useState)(""),
          [f, y] = (0, n.useState)(!1),
          [v, E] = (0, n.useState)(""),
          [g, b] = (0, n.useState)(!1),
          z = (0, n.useMemo)(() => !!(o && u), [o, u]);
        (0, n.useEffect)(() => {
          (async () => {
            if (z) try {
              b(!0);
              let e = await fetch("/api/recovery/attempt", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    attemptId: o
                  })
                }),
                a = await e.json();
              if (!e.ok) return;
              E(a.flow?.recoveryType || "")
            } catch {} finally {
              b(!1)
            }
          })()
        }, [o, z]);
        let j = async () => {
          if (z && !h && !f) try {
            p(!0), x("");
            let a = await fetch("/api/recovery/finalize", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  attemptId: o,
                  token: u
                })
              }),
              r = await a.json();
            if (!a.ok) {
              let a = r.error || e("auth.recovery.finalize.errors.unable_finalize");
              if (a.toLowerCase().includes("new email is required")) return void x(e("auth.recovery.finalize.errors.missing_new_email"));
              x(a);
              return
            }
            y(!0)
          } catch {
            x(e("auth.recovery.finalize.errors.unable_finalize"))
          } finally {
            p(!1)
          }
        };
        return z ? f ? (0, t.jsx)(s.A, {
          title: e("auth.recovery.finalize.done_title"),
          subtitle: e("auth.recovery.finalize.done_subtitle"),
          children: (0, t.jsx)("div", {
            className: l().actions,
            children: (0, t.jsx)("button", {
              className: l().primaryButton,
              type: "button",
              onClick: () => a.push("/login"),
              children: e("auth.recovery.finalize.go_to_login")
            })
          })
        }) : (0, t.jsx)(s.A, {
          title: e("auth.recovery.finalize.title"),
          subtitle: e("auth.recovery.finalize.subtitle"),
          children: (0, t.jsxs)("div", {
            className: d().startContainer,
            children: [(0, t.jsxs)("div", {
              className: d().finalizeChangesPanel,
              children: [(0, t.jsx)("h3", {
                className: d().finalizeChangesTitle,
                children: e("auth.recovery.finalize.changes_title")
              }), g ? (0, t.jsx)("p", {
                className: d().finalizeChangesLoading,
                children: e("auth.recovery.finalize.loading_changes")
              }) : (0, t.jsx)("ul", {
                className: d().finalizeChangesList,
                children: ("lost_email_access" === v ? [{
                  id: "new-email",
                  content: e("auth.recovery.finalize.planned.new_email")
                }] : "lost_2fa_device" === v || "lost_recovery_codes" === v ? [{
                  id: "disable-2fa",
                  content: e("auth.recovery.finalize.planned.disable_2fa")
                }] : "lost_email_and_2fa" === v ? [{
                  id: "disable-2fa",
                  content: e("auth.recovery.finalize.planned.disable_2fa")
                }, {
                  id: "new-email",
                  content: e("auth.recovery.finalize.planned.new_email")
                }] : "forgot_email" === v ? [{
                  id: "new-email",
                  content: e("auth.recovery.finalize.planned.new_email")
                }] : "compromised_account" === v ? [{
                  id: "password-reset",
                  content: (0, t.jsxs)(t.Fragment, {
                    children: [e("auth.recovery.finalize.planned.password_reset_prefix"), " ", " ", (0, t.jsx)(c.A, {
                      href: "/reset",
                      className: d().inlineActionLink,
                      children: "/reset"
                    }), "."]
                  })
                }, {
                  id: "new-email",
                  content: e("auth.recovery.finalize.planned.new_email")
                }, {
                  id: "logout-devices",
                  content: e("auth.recovery.finalize.planned.logout_devices")
                }, {
                  id: "disconnect-social",
                  content: e("auth.recovery.finalize.planned.disconnect_social")
                }, {
                  id: "disable-2fa",
                  content: e("auth.recovery.finalize.planned.disable_2fa_if_enabled")
                }] : [{
                  id: "default",
                  content: e("auth.recovery.finalize.planned.default")
                }]).map(e => (0, t.jsxs)("li", {
                  className: d().finalizeChangesItem,
                  children: [(0, t.jsx)("span", {
                    className: d().finalizeChangesDot,
                    children: "•"
                  }), (0, t.jsx)("span", {
                    children: e.content
                  })]
                }, e.id))
              })]
            }), m && (0, t.jsx)("div", {
              className: l().errorBanner,
              children: m
            }), (0, t.jsxs)("div", {
              className: l().actions,
              children: [(0, t.jsx)("button", {
                className: l().secondaryButton,
                type: "button",
                onClick: () => a.push("/login"),
                disabled: h,
                children: e("auth.recovery.finalize.cancel")
              }), (0, t.jsx)("button", {
                className: l().primaryButton,
                type: "button",
                onClick: j,
                disabled: h || g,
                children: h ? e("auth.recovery.finalize.finalizing") : e("auth.recovery.finalize.confirm")
              })]
            })]
          })
        }) : (0, t.jsxs)(s.A, {
          title: e("auth.recovery.finalize.title"),
          subtitle: e("auth.recovery.finalize.subtitle_invalid"),
          children: [(0, t.jsx)("div", {
            className: l().errorBanner,
            children: e("auth.recovery.finalize.errors.missing_info")
          }), (0, t.jsx)("div", {
            className: l().actions,
            children: (0, t.jsx)("button", {
              className: l().primaryButton,
              type: "button",
              onClick: () => a.push("/recovery"),
              children: e("auth.recovery.finalize.back_to_recovery")
            })
          })]
        })
      }
    },
    18943: e => {
      e.exports = {
        page: "authExperience_page__uyui4",
        panel: "authExperience_panel__o274H",
        panelHeaderAction: "authExperience_panelHeaderAction__AFIh3",
        brand: "authExperience_brand__JvheW",
        brandLink: "authExperience_brandLink__iGZej",
        brandLogo: "authExperience_brandLogo__xAwjQ",
        title: "authExperience_title__ZY_r9",
        subtitle: "authExperience_subtitle__BVEpo",
        brandText: "authExperience_brandText__nwJnq",
        body: "authExperience_body__RRr0f",
        section: "authExperience_section__H3G0_",
        credentialsStack: "authExperience_credentialsStack__o2Ozo",
        emailSection: "authExperience_emailSection__kM6az",
        field: "authExperience_field__5TnSj",
        fieldLabel: "authExperience_fieldLabel__z__YD",
        fieldShell: "authExperience_fieldShell__m79Fh",
        fieldInput: "authExperience_fieldInput__RKFOq",
        fieldPrefix: "authExperience_fieldPrefix__fFxyT",
        fieldInputWithPrefix: "authExperience_fieldInputWithPrefix__xlr9G",
        fieldRight: "authExperience_fieldRight__Imjjb",
        passwordToggle: "authExperience_passwordToggle__NQiO8",
        passwordReveal: "authExperience_passwordReveal__aUlDL",
        passwordRevealOpen: "authExperience_passwordRevealOpen__adnex",
        passwordHint: "authExperience_passwordHint___ySzN",
        pwMeter: "authExperience_pwMeter__o9PMU",
        pwBar: "authExperience_pwBar__7AoWu",
        pwOn: "authExperience_pwOn__CQOiB",
        pwLabel: "authExperience_pwLabel__6Zd2E",
        helperText: "authExperience_helperText__jqcdy",
        usernameStatus: "authExperience_usernameStatus__CoJI7",
        usernameStatusIcon: "authExperience_usernameStatusIcon__LEMW5",
        usernameStatusSuccess: "authExperience_usernameStatusSuccess__Q4eqP",
        usernameStatusError: "authExperience_usernameStatusError__6P3HN",
        helperAction: "authExperience_helperAction__o0EoI",
        captchaWrapper: "authExperience_captchaWrapper__9WWV4",
        actions: "authExperience_actions__J9EJe",
        registerButton: "authExperience_registerButton__cL2Wy",
        primaryButton: "authExperience_primaryButton__HxWUI",
        secondaryButton: "authExperience_secondaryButton__XqYqL",
        ghostButton: "authExperience_ghostButton__mOPog",
        divider: "authExperience_divider__mHjuk",
        inlineLink: "authExperience_inlineLink__8LmMO",
        footer: "authExperience_footer__ykUvF",
        legal: "authExperience_legal__olSjY",
        errorBanner: "authExperience_errorBanner__KaM3h",
        agreementList: "authExperience_agreementList__E4rE5",
        agreement: "authExperience_agreement__pQTXH",
        metaRow: "authExperience_metaRow__ujdFv",
        metaRowWrap: "authExperience_metaRowWrap__1njxK",
        subtleText: "authExperience_subtleText__0w1EA",
        centeredStack: "authExperience_centeredStack__ZeaiD",
        loadingIcon: "authExperience_loadingIcon__1VK1t",
        loadingMessage: "authExperience_loadingMessage__5_cL9",
        footerButton: "authExperience_footerButton__OFOio",
        modalStack: "authExperience_modalStack__9d_Yz",
        modalTextBlock: "authExperience_modalTextBlock__okOJJ",
        modalTitle: "authExperience_modalTitle__jBSk5",
        modalDescription: "authExperience_modalDescription__aLThV",
        socialButton: "authExperience_socialButton__87Zsh",
        socialLastUsedBadge: "authExperience_socialLastUsedBadge__a0Z_i",
        summaryCard: "authExperience_summaryCard__1zA4D",
        summaryCardButton: "authExperience_summaryCardButton__SEdaN",
        stepBackButton: "authExperience_stepBackButton__421gK",
        stepBackIcon: "authExperience_stepBackIcon__60Ilt",
        summaryGrid: "authExperience_summaryGrid__rGWr6",
        providerRow: "authExperience_providerRow__JnQMz",
        summaryInfoBlock: "authExperience_summaryInfoBlock__Vh3bw",
        summaryHeader: "authExperience_summaryHeader__oPydf",
        summaryLabel: "authExperience_summaryLabel__YJFdO",
        summaryLabelPlain: "authExperience_summaryLabelPlain__PTLHH",
        summaryValue: "authExperience_summaryValue__Sd8pV",
        summaryEditAction: "authExperience_summaryEditAction__Wtvit",
        providerIconWrap: "authExperience_providerIconWrap__FmJDk",
        providerMeta: "authExperience_providerMeta__M0_Nf",
        providerEyebrow: "authExperience_providerEyebrow__DXppH",
        providerName: "authExperience_providerName__I0VSw",
        usernameSection: "authExperience_usernameSection__GJi1X",
        footerContainer: "authExperience_footerContainer__yskgJ"
      }
    },
    49982: e => {
      e.exports = {
        recoveryCards: "recovery_recoveryCards__WJBd_",
        recoveryCard: "recovery_recoveryCard__qwc09",
        cardIcon: "recovery_cardIcon__zpL7s",
        startContainer: "recovery_startContainer__S93kn",
        helper: "recovery_helper__zv0UY",
        startForm: "recovery_startForm___iASD",
        checklist: "recovery_checklist__A9ii9",
        checklistItem: "recovery_checklistItem__KP5eB",
        checkStatus: "recovery_checkStatus__nhJJl",
        checkStatusPass: "recovery_checkStatusPass__q8_wm",
        evidenceGrid: "recovery_evidenceGrid__qePei",
        messageBox: "recovery_messageBox__N2T3Z",
        wizardActions: "recovery_wizardActions__NqboN",
        resultContainer: "recovery_resultContainer__LCSRD",
        resultTitle: "recovery_resultTitle__s_ZcD",
        resultBody: "recovery_resultBody__OaC_I",
        resultMeta: "recovery_resultMeta__hKi70",
        resultActions: "recovery_resultActions__bcXYa",
        contactSupportButton: "recovery_contactSupportButton__mdqDp",
        oauthButton: "recovery_oauthButton__2rnYe",
        oauthInformation: "recovery_oauthInformation__ecm5t",
        recoveryHelper: "recovery_recoveryHelper__utTRi",
        finalizeChangesPanel: "recovery_finalizeChangesPanel__LO2PA",
        finalizeChangesTitle: "recovery_finalizeChangesTitle__CC__G",
        finalizeChangesLoading: "recovery_finalizeChangesLoading__yTU9k",
        finalizeChangesList: "recovery_finalizeChangesList__SkodS",
        finalizeChangesItem: "recovery_finalizeChangesItem__iRN8f",
        finalizeChangesDot: "recovery_finalizeChangesDot__qCWv3",
        inlineActionLink: "recovery_inlineActionLink__r5YXG"
      }
    },
    73321: (e, a, r) => {
      "use strict";
      var t = r(74645);
      r.o(t, "redirect") && r.d(a, {
        redirect: function() {
          return t.redirect
        }
      }), r.o(t, "useParams") && r.d(a, {
        useParams: function() {
          return t.useParams
        }
      }), r.o(t, "usePathname") && r.d(a, {
        usePathname: function() {
          return t.usePathname
        }
      }), r.o(t, "useRouter") && r.d(a, {
        useRouter: function() {
          return t.useRouter
        }
      }), r.o(t, "useSearchParams") && r.d(a, {
        useSearchParams: function() {
          return t.useSearchParams
        }
      })
    },
    77570: (e, a, r) => {
      "use strict";
      r.d(a, {
        A: () => c
      });
      var t = r(95155),
        n = r(81934),
        i = r(18943),
        s = r.n(i);

      function c({
        title: e,
        subtitle: a,
        headerAction: r,
        children: i,
        footer: c,
        legal: _
      }) {
        return (0, t.jsx)("div", {
          className: s().page,
          children: (0, t.jsxs)("div", {
            className: s().panel,
            children: [r && (0, t.jsx)("div", {
              className: s().panelHeaderAction,
              children: r
            }), (0, t.jsxs)("div", {
              className: s().brand,
              children: [(0, t.jsx)(n.A, {
                href: "/",
                className: s().brandLink,
                children: (0, t.jsx)("img", {
                  src: "https://assets.guns.lol/guns_logo_no_background_cropped.png",
                  alt: "guns.lol",
                  className: s().brandLogo
                })
              }), (0, t.jsxs)("div", {
                className: s().brandText,
                children: [(0, t.jsx)("h1", {
                  className: s().title,
                  children: e
                }), a && (0, t.jsx)("p", {
                  className: s().subtitle,
                  children: a
                })]
              })]
            }), (0, t.jsx)("div", {
              className: s().body,
              children: i
            }), c && (0, t.jsx)("div", {
              className: s().footer,
              children: c
            }), _ && (0, t.jsx)("div", {
              className: s().legal,
              children: _
            })]
          })
        })
      }
    },
    81934: (e, a, r) => {
      "use strict";
      r.d(a, {
        A: () => c
      });
      var t = r(95155),
        n = r(98500),
        i = r.n(n),
        s = r(38256);

      function c({
        href: e,
        asTag: a,
        locale: r,
        children: n,
        ...c
      }) {
        let _ = r || (0, s.useLang)();
        if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) return a ? (0, t.jsx)("a", {
          href: e,
          ...c,
          children: n
        }) : (0, t.jsx)(i(), {
          href: e,
          ...c,
          children: n
        });
        let o = "en" == _ ? `${e.startsWith("/")?"":"/"}${e}` : `/${_}${e.startsWith("/")?"":"/"}${e}`;
        return a ? (0, t.jsx)("a", {
          href: o,
          ...c,
          children: n
        }) : (0, t.jsx)(i(), {
          href: o,
          ...c,
          children: n
        })
      }
    }
  },
  e => {
    e.O(0, [1406, 8500, 8256, 8441, 3794, 7358], () => e(e.s = 10939)), _N_E = e.O()
  }
]);