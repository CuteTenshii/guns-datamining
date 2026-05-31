(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2783], {
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
    23937: (e, r, t) => {
      Promise.resolve().then(t.bind(t, 96789))
    },
    37897: (e, r, t) => {
      "use strict";
      t.d(r, {
        A: () => c
      });
      var a = t(95155),
        n = t(12115),
        i = t(98241),
        _ = t.n(i),
        s = t(54834);

      function c({
        featureName: e,
        onChangeFunction: r,
        value: t,
        placeholder: i,
        icon: c,
        prefix: o,
        prefixLength: u,
        viewPassword: l,
        onKeyPress: p,
        isImageUrl: h,
        type: d = "text",
        ...m
      }) {
        let [x, v] = (0, n.useState)(!!l);
        return (0, n.useEffect)(() => {
          v(!!l)
        }, [l]), (0, a.jsxs)("div", {
          className: _().inputContainerWrapper,
          "data-dashboard-feature-label": "string" == typeof e ? e : void 0,
          children: [e && (0, a.jsx)("h1", {
            className: _().featureName,
            children: e
          }), (0, a.jsxs)("div", {
            className: `${_().inputWrapperDiv} ${o&&_().inputWrapperURL}`,
            children: [(0, a.jsxs)("span", {
              className: _().inputWrapperSpan,
              style: {
                position: o ? "absolute" : "static"
              },
              children: [h ? (0, a.jsx)("img", {
                src: c,
                alt: "icon",
                className: _().inputWrapperIconImage
              }) : c, o && (0, a.jsx)("h1", {
                children: o
              })]
            }), l && (0, a.jsx)("p", {
              onClick: () => {
                v(!x)
              },
              children: x ? s.A.hidePassword : s.A.views
            }), (0, a.jsx)("input", {
              autoCorrect: "false",
              type: l ? x ? "password" : "text" : d,
              onKeyDown: p,
              value: t,
              style: {
                paddingLeft: o ? u : "",
                paddingRight: l ? 47 : ""
              },
              placeholder: i,
              className: _().inputWrapperInput,
              onChange: r,
              ...m
            })]
          })]
        })
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
    73321: (e, r, t) => {
      "use strict";
      var a = t(74645);
      t.o(a, "redirect") && t.d(r, {
        redirect: function() {
          return a.redirect
        }
      }), t.o(a, "useParams") && t.d(r, {
        useParams: function() {
          return a.useParams
        }
      }), t.o(a, "usePathname") && t.d(r, {
        usePathname: function() {
          return a.usePathname
        }
      }), t.o(a, "useRouter") && t.d(r, {
        useRouter: function() {
          return a.useRouter
        }
      }), t.o(a, "useSearchParams") && t.d(r, {
        useSearchParams: function() {
          return a.useSearchParams
        }
      })
    },
    77570: (e, r, t) => {
      "use strict";
      t.d(r, {
        A: () => s
      });
      var a = t(95155),
        n = t(81934),
        i = t(18943),
        _ = t.n(i);

      function s({
        title: e,
        subtitle: r,
        headerAction: t,
        children: i,
        footer: s,
        legal: c
      }) {
        return (0, a.jsx)("div", {
          className: _().page,
          children: (0, a.jsxs)("div", {
            className: _().panel,
            children: [t && (0, a.jsx)("div", {
              className: _().panelHeaderAction,
              children: t
            }), (0, a.jsxs)("div", {
              className: _().brand,
              children: [(0, a.jsx)(n.A, {
                href: "/",
                className: _().brandLink,
                children: (0, a.jsx)("img", {
                  src: "https://assets.guns.lol/guns_logo_no_background_cropped.png",
                  alt: "guns.lol",
                  className: _().brandLogo
                })
              }), (0, a.jsxs)("div", {
                className: _().brandText,
                children: [(0, a.jsx)("h1", {
                  className: _().title,
                  children: e
                }), r && (0, a.jsx)("p", {
                  className: _().subtitle,
                  children: r
                })]
              })]
            }), (0, a.jsx)("div", {
              className: _().body,
              children: i
            }), s && (0, a.jsx)("div", {
              className: _().footer,
              children: s
            }), c && (0, a.jsx)("div", {
              className: _().legal,
              children: c
            })]
          })
        })
      }
    },
    81934: (e, r, t) => {
      "use strict";
      t.d(r, {
        A: () => s
      });
      var a = t(95155),
        n = t(98500),
        i = t.n(n),
        _ = t(38256);

      function s({
        href: e,
        asTag: r,
        locale: t,
        children: n,
        ...s
      }) {
        let c = t || (0, _.useLang)();
        if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) return r ? (0, a.jsx)("a", {
          href: e,
          ...s,
          children: n
        }) : (0, a.jsx)(i(), {
          href: e,
          ...s,
          children: n
        });
        let o = "en" == c ? `${e.startsWith("/")?"":"/"}${e}` : `/${c}${e.startsWith("/")?"":"/"}${e}`;
        return r ? (0, a.jsx)("a", {
          href: o,
          ...s,
          children: n
        }) : (0, a.jsx)(i(), {
          href: o,
          ...s,
          children: n
        })
      }
    },
    96789: (e, r, t) => {
      "use strict";
      t.d(r, {
        default: () => d
      });
      var a = t(95155),
        n = t(12115),
        i = t(73321),
        _ = t(77570),
        s = t(37897),
        c = t(38256),
        o = t(54834),
        u = t(18943),
        l = t.n(u),
        p = t(49982),
        h = t.n(p);

      function d() {
        let e = (0, c.kj)(),
          r = (0, i.useRouter)(),
          t = (0, i.useSearchParams)().get("type") || "lost_2fa_device",
          [u, p] = (0, n.useState)(""),
          [d, m] = (0, n.useState)(!1),
          [x, v] = (0, n.useState)(""),
          [y, E] = (0, n.useState)(""),
          f = async a => {
            if (a.preventDefault(), !u.trim()) return void v(e("auth.recovery.start.errors.identifier_required"));
            try {
              m(!0), v(""), E("");
              let a = await fetch("/api/recovery/start", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    recoveryType: t,
                    identifier: u.trim()
                  })
                }),
                n = await a.json();
              if (!a.ok) return void v(n.error || e("auth.recovery.start.errors.unable_start"));
              if (!n.attemptId) return void E(n.message);
              let i = `/recovery/start/evidence?attempt=${encodeURIComponent(n.attemptId)}`;
              r.push(i)
            } catch {
              v(e("auth.recovery.start.errors.unable_start"))
            } finally {
              m(!1)
            }
          };
        return (0, a.jsx)(_.A, {
          title: e("auth.recovery.start.title"),
          subtitle: e("auth.recovery.start.subtitle"),
          children: (0, a.jsxs)("form", {
            onSubmit: f,
            children: [(0, a.jsx)(s.A, {
              featureName: e("auth.recovery.start.identifier_label"),
              value: u,
              onChangeFunction: e => p(e.target.value),
              placeholder: e("auth.recovery.start.identifier_placeholder"),
              icon: o.A.user
            }), (0, a.jsx)("div", {
              className: h().recoveryHelper,
              children: (0, a.jsx)("h1", {
                children: e("auth.recovery.start.helper")
              })
            }), x && (0, a.jsx)("div", {
              className: l().errorBanner,
              style: {
                marginTop: "15px"
              },
              children: x
            }), y && (0, a.jsx)("p", {
              className: l().helperText,
              children: y
            }), (0, a.jsx)("div", {
              className: l().actions,
              style: {
                marginTop: 10
              },
              children: (0, a.jsx)("button", {
                className: l().primaryButton,
                type: "submit",
                disabled: d,
                children: d ? e("auth.recovery.start.starting") : e("auth.recovery.start.continue")
              })
            })]
          })
        })
      }
    }
  },
  e => {
    e.O(0, [1406, 4103, 8500, 8256, 5886, 8441, 3794, 7358], () => e(e.s = 23937)), _N_E = e.O()
  }
]);