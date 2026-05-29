(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 52202, e => {
  "use strict";
  var t = e.i(48277),
    r = e.i(16506),
    a = e.i(17435);

  function _({
    href: e,
    asTag: _,
    locale: i,
    children: o,
    ...u
  }) {
    let l = i || (0, a.useLang)();
    if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) return _ ? (0, t.jsx)("a", {
      href: e,
      ...u,
      children: o
    }) : (0, t.jsx)(r.default, {
      href: e,
      ...u,
      children: o
    });
    let n = "en" == l ? `${e.startsWith("/")?"":"/"}${e}` : `/${l}${e.startsWith("/")?"":"/"}${e}`;
    return _ ? (0, t.jsx)("a", {
      href: n,
      ...u,
      children: o
    }) : (0, t.jsx)(r.default, {
      href: n,
      ...u,
      children: o
    })
  }
  e.s(["default", () => _])
}, 32872, e => {
  "use strict";
  var t = e.i(48277),
    r = e.i(30668),
    a = e.i(50250),
    _ = e.i(33544);

  function i({
    featureName: e,
    onChangeFunction: i,
    value: o,
    placeholder: u,
    icon: l,
    prefix: n,
    prefixLength: s,
    viewPassword: d,
    onKeyPress: c,
    isImageUrl: m,
    type: p = "text",
    ...h
  }) {
    let [x, w] = (0, r.useState)(!!d);
    return (0, r.useEffect)(() => {
      w(!!d)
    }, [d]), (0, t.jsxs)("div", {
      className: a.default.inputContainerWrapper,
      "data-dashboard-feature-label": "string" == typeof e ? e : void 0,
      children: [e && (0, t.jsx)("h1", {
        className: a.default.featureName,
        children: e
      }), (0, t.jsxs)("div", {
        className: `${a.default.inputWrapperDiv} ${n&&a.default.inputWrapperURL}`,
        children: [(0, t.jsxs)("span", {
          className: a.default.inputWrapperSpan,
          style: {
            position: n ? "absolute" : "static"
          },
          children: [m ? (0, t.jsx)("img", {
            src: l,
            alt: "icon",
            className: a.default.inputWrapperIconImage
          }) : l, n && (0, t.jsx)("h1", {
            children: n
          })]
        }), d && (0, t.jsx)("p", {
          onClick: () => {
            w(!x)
          },
          children: x ? _.default.hidePassword : _.default.views
        }), (0, t.jsx)("input", {
          autoCorrect: "false",
          type: d ? x ? "password" : "text" : p,
          onKeyDown: c,
          value: o,
          style: {
            paddingLeft: n ? s : "",
            paddingRight: d ? 47 : ""
          },
          placeholder: u,
          className: a.default.inputWrapperInput,
          onChange: i,
          ...h
        })]
      })]
    })
  }
  e.s(["default", () => i])
}, 29066, e => {
  e.v({
    actions: "authExperience-module__Zt0w7q__actions",
    agreement: "authExperience-module__Zt0w7q__agreement",
    agreementList: "authExperience-module__Zt0w7q__agreementList",
    body: "authExperience-module__Zt0w7q__body",
    brand: "authExperience-module__Zt0w7q__brand",
    brandLink: "authExperience-module__Zt0w7q__brandLink",
    brandLogo: "authExperience-module__Zt0w7q__brandLogo",
    brandText: "authExperience-module__Zt0w7q__brandText",
    captchaWrapper: "authExperience-module__Zt0w7q__captchaWrapper",
    centeredStack: "authExperience-module__Zt0w7q__centeredStack",
    credentialsStack: "authExperience-module__Zt0w7q__credentialsStack",
    divider: "authExperience-module__Zt0w7q__divider",
    emailSection: "authExperience-module__Zt0w7q__emailSection",
    errorBanner: "authExperience-module__Zt0w7q__errorBanner",
    field: "authExperience-module__Zt0w7q__field",
    fieldInput: "authExperience-module__Zt0w7q__fieldInput",
    fieldInputWithPrefix: "authExperience-module__Zt0w7q__fieldInputWithPrefix",
    fieldLabel: "authExperience-module__Zt0w7q__fieldLabel",
    fieldPrefix: "authExperience-module__Zt0w7q__fieldPrefix",
    fieldRight: "authExperience-module__Zt0w7q__fieldRight",
    fieldShell: "authExperience-module__Zt0w7q__fieldShell",
    footer: "authExperience-module__Zt0w7q__footer",
    footerButton: "authExperience-module__Zt0w7q__footerButton",
    footerContainer: "authExperience-module__Zt0w7q__footerContainer",
    ghostButton: "authExperience-module__Zt0w7q__ghostButton",
    helperAction: "authExperience-module__Zt0w7q__helperAction",
    helperText: "authExperience-module__Zt0w7q__helperText",
    inlineLink: "authExperience-module__Zt0w7q__inlineLink",
    legal: "authExperience-module__Zt0w7q__legal",
    loadingIcon: "authExperience-module__Zt0w7q__loadingIcon",
    loadingMessage: "authExperience-module__Zt0w7q__loadingMessage",
    metaRow: "authExperience-module__Zt0w7q__metaRow",
    metaRowWrap: "authExperience-module__Zt0w7q__metaRowWrap",
    modalDescription: "authExperience-module__Zt0w7q__modalDescription",
    modalStack: "authExperience-module__Zt0w7q__modalStack",
    modalTextBlock: "authExperience-module__Zt0w7q__modalTextBlock",
    modalTitle: "authExperience-module__Zt0w7q__modalTitle",
    page: "authExperience-module__Zt0w7q__page",
    panel: "authExperience-module__Zt0w7q__panel",
    panelHeaderAction: "authExperience-module__Zt0w7q__panelHeaderAction",
    passwordHint: "authExperience-module__Zt0w7q__passwordHint",
    passwordReveal: "authExperience-module__Zt0w7q__passwordReveal",
    passwordRevealOpen: "authExperience-module__Zt0w7q__passwordRevealOpen",
    passwordToggle: "authExperience-module__Zt0w7q__passwordToggle",
    primaryButton: "authExperience-module__Zt0w7q__primaryButton",
    providerEyebrow: "authExperience-module__Zt0w7q__providerEyebrow",
    providerIconWrap: "authExperience-module__Zt0w7q__providerIconWrap",
    providerMeta: "authExperience-module__Zt0w7q__providerMeta",
    providerName: "authExperience-module__Zt0w7q__providerName",
    providerRow: "authExperience-module__Zt0w7q__providerRow",
    pwBar: "authExperience-module__Zt0w7q__pwBar",
    pwLabel: "authExperience-module__Zt0w7q__pwLabel",
    pwMeter: "authExperience-module__Zt0w7q__pwMeter",
    pwOn: "authExperience-module__Zt0w7q__pwOn",
    registerButton: "authExperience-module__Zt0w7q__registerButton",
    secondaryButton: "authExperience-module__Zt0w7q__secondaryButton",
    section: "authExperience-module__Zt0w7q__section",
    socialButton: "authExperience-module__Zt0w7q__socialButton",
    socialLastUsedBadge: "authExperience-module__Zt0w7q__socialLastUsedBadge",
    stepBackButton: "authExperience-module__Zt0w7q__stepBackButton",
    stepBackIcon: "authExperience-module__Zt0w7q__stepBackIcon",
    subtitle: "authExperience-module__Zt0w7q__subtitle",
    subtleText: "authExperience-module__Zt0w7q__subtleText",
    summaryCard: "authExperience-module__Zt0w7q__summaryCard",
    summaryCardButton: "authExperience-module__Zt0w7q__summaryCardButton",
    summaryEditAction: "authExperience-module__Zt0w7q__summaryEditAction",
    summaryGrid: "authExperience-module__Zt0w7q__summaryGrid",
    summaryHeader: "authExperience-module__Zt0w7q__summaryHeader",
    summaryInfoBlock: "authExperience-module__Zt0w7q__summaryInfoBlock",
    summaryLabel: "authExperience-module__Zt0w7q__summaryLabel",
    summaryLabelPlain: "authExperience-module__Zt0w7q__summaryLabelPlain",
    summaryValue: "authExperience-module__Zt0w7q__summaryValue",
    title: "authExperience-module__Zt0w7q__title",
    usernameSection: "authExperience-module__Zt0w7q__usernameSection",
    usernameStatus: "authExperience-module__Zt0w7q__usernameStatus",
    usernameStatusError: "authExperience-module__Zt0w7q__usernameStatusError",
    usernameStatusIcon: "authExperience-module__Zt0w7q__usernameStatusIcon",
    usernameStatusSuccess: "authExperience-module__Zt0w7q__usernameStatusSuccess"
  })
}, 87909, e => {
  "use strict";
  var t = e.i(48277),
    r = e.i(52202),
    a = e.i(29066);

  function _({
    title: e,
    subtitle: _,
    headerAction: i,
    children: o,
    footer: u,
    legal: l
  }) {
    return (0, t.jsx)("div", {
      className: a.default.page,
      children: (0, t.jsxs)("div", {
        className: a.default.panel,
        children: [i && (0, t.jsx)("div", {
          className: a.default.panelHeaderAction,
          children: i
        }), (0, t.jsxs)("div", {
          className: a.default.brand,
          children: [(0, t.jsx)(r.default, {
            href: "/",
            className: a.default.brandLink,
            children: (0, t.jsx)("img", {
              src: "https://assets.guns.lol/guns_logo_no_background_cropped.png",
              alt: "guns.lol",
              className: a.default.brandLogo
            })
          }), (0, t.jsxs)("div", {
            className: a.default.brandText,
            children: [(0, t.jsx)("h1", {
              className: a.default.title,
              children: e
            }), _ && (0, t.jsx)("p", {
              className: a.default.subtitle,
              children: _
            })]
          })]
        }), (0, t.jsx)("div", {
          className: a.default.body,
          children: o
        }), u && (0, t.jsx)("div", {
          className: a.default.footer,
          children: u
        }), l && (0, t.jsx)("div", {
          className: a.default.legal,
          children: l
        })]
      })
    })
  }
  e.s(["default", () => _])
}, 17467, e => {
  e.v({
    cardIcon: "recovery-module__0x6wWq__cardIcon",
    checkStatus: "recovery-module__0x6wWq__checkStatus",
    checkStatusPass: "recovery-module__0x6wWq__checkStatusPass",
    checklist: "recovery-module__0x6wWq__checklist",
    checklistItem: "recovery-module__0x6wWq__checklistItem",
    contactSupportButton: "recovery-module__0x6wWq__contactSupportButton",
    evidenceGrid: "recovery-module__0x6wWq__evidenceGrid",
    finalizeChangesDot: "recovery-module__0x6wWq__finalizeChangesDot",
    finalizeChangesItem: "recovery-module__0x6wWq__finalizeChangesItem",
    finalizeChangesList: "recovery-module__0x6wWq__finalizeChangesList",
    finalizeChangesLoading: "recovery-module__0x6wWq__finalizeChangesLoading",
    finalizeChangesPanel: "recovery-module__0x6wWq__finalizeChangesPanel",
    finalizeChangesTitle: "recovery-module__0x6wWq__finalizeChangesTitle",
    helper: "recovery-module__0x6wWq__helper",
    inlineActionLink: "recovery-module__0x6wWq__inlineActionLink",
    messageBox: "recovery-module__0x6wWq__messageBox",
    oauthButton: "recovery-module__0x6wWq__oauthButton",
    oauthInformation: "recovery-module__0x6wWq__oauthInformation",
    recoveryCard: "recovery-module__0x6wWq__recoveryCard",
    recoveryCards: "recovery-module__0x6wWq__recoveryCards",
    recoveryHelper: "recovery-module__0x6wWq__recoveryHelper",
    resultActions: "recovery-module__0x6wWq__resultActions",
    resultBody: "recovery-module__0x6wWq__resultBody",
    resultContainer: "recovery-module__0x6wWq__resultContainer",
    resultMeta: "recovery-module__0x6wWq__resultMeta",
    resultTitle: "recovery-module__0x6wWq__resultTitle",
    startContainer: "recovery-module__0x6wWq__startContainer",
    startForm: "recovery-module__0x6wWq__startForm",
    wizardActions: "recovery-module__0x6wWq__wizardActions"
  })
}, 47815, e => {
  "use strict";
  var t = e.i(48277),
    r = e.i(30668),
    a = e.i(96086),
    _ = e.i(87909),
    i = e.i(32872),
    o = e.i(17435),
    u = e.i(33544),
    l = e.i(29066),
    n = e.i(17467);

  function s() {
    let e = (0, o.useT)(),
      s = (0, a.useRouter)(),
      d = (0, a.useSearchParams)().get("type") || "lost_2fa_device",
      [c, m] = (0, r.useState)(""),
      [p, h] = (0, r.useState)(!1),
      [x, w] = (0, r.useState)(""),
      [f, q] = (0, r.useState)(""),
      v = async t => {
        if (t.preventDefault(), !c.trim()) return void w(e("auth.recovery.start.errors.identifier_required"));
        try {
          h(!0), w(""), q("");
          let t = await fetch("/api/recovery/start", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                recoveryType: d,
                identifier: c.trim()
              })
            }),
            r = await t.json();
          if (!t.ok) return void w(r.error || e("auth.recovery.start.errors.unable_start"));
          if (!r.attemptId) return void q(r.message);
          let a = `/recovery/start/evidence?attempt=${encodeURIComponent(r.attemptId)}`;
          s.push(a)
        } catch {
          w(e("auth.recovery.start.errors.unable_start"))
        } finally {
          h(!1)
        }
      };
    return (0, t.jsx)(_.default, {
      title: e("auth.recovery.start.title"),
      subtitle: e("auth.recovery.start.subtitle"),
      children: (0, t.jsxs)("form", {
        onSubmit: v,
        children: [(0, t.jsx)(i.default, {
          featureName: e("auth.recovery.start.identifier_label"),
          value: c,
          onChangeFunction: e => m(e.target.value),
          placeholder: e("auth.recovery.start.identifier_placeholder"),
          icon: u.default.user
        }), (0, t.jsx)("div", {
          className: n.default.recoveryHelper,
          children: (0, t.jsx)("h1", {
            children: e("auth.recovery.start.helper")
          })
        }), x && (0, t.jsx)("div", {
          className: l.default.errorBanner,
          style: {
            marginTop: "15px"
          },
          children: x
        }), f && (0, t.jsx)("p", {
          className: l.default.helperText,
          children: f
        }), (0, t.jsx)("div", {
          className: l.default.actions,
          style: {
            marginTop: 10
          },
          children: (0, t.jsx)("button", {
            className: l.default.primaryButton,
            type: "submit",
            disabled: p,
            children: p ? e("auth.recovery.start.starting") : e("auth.recovery.start.continue")
          })
        })]
      })
    })
  }
  e.s(["default", () => s])
}]);