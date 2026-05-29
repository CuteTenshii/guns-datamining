(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 86051, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "warnOnce", {
    enumerable: !0,
    get: function() {
      return n
    }
  });
  let n = e => {}
}, 70077, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    assign: function() {
      return l
    },
    searchParamsToUrlQuery: function() {
      return a
    },
    urlQueryToSearchParams: function() {
      return i
    }
  };
  for (var o in n) Object.defineProperty(r, o, {
    enumerable: !0,
    get: n[o]
  });

  function a(e) {
    let t = {};
    for (let [r, n] of e.entries()) {
      let e = t[r];
      void 0 === e ? t[r] = n : Array.isArray(e) ? e.push(n) : t[r] = [e, n]
    }
    return t
  }

  function u(e) {
    return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
  }

  function i(e) {
    let t = new URLSearchParams;
    for (let [r, n] of Object.entries(e))
      if (Array.isArray(n))
        for (let e of n) t.append(r, u(e));
      else t.set(r, u(n));
    return t
  }

  function l(e, ...t) {
    for (let r of t) {
      for (let t of r.keys()) e.delete(t);
      for (let [t, n] of r.entries()) e.append(t, n)
    }
    return e
  }
}, 34485, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    formatUrl: function() {
      return i
    },
    formatWithValidation: function() {
      return c
    },
    urlObjectKeys: function() {
      return l
    }
  };
  for (var o in n) Object.defineProperty(r, o, {
    enumerable: !0,
    get: n[o]
  });
  let a = e.r(61909)._(e.r(70077)),
    u = /https?|ftp|gopher|file/;

  function i(e) {
    let {
      auth: t,
      hostname: r
    } = e, n = e.protocol || "", o = e.pathname || "", i = e.hash || "", l = e.query || "", c = !1;
    t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? c = t + e.host : r && (c = t + (~r.indexOf(":") ? `[${r}]` : r), e.port && (c += ":" + e.port)), l && "object" == typeof l && (l = String(a.urlQueryToSearchParams(l)));
    let s = e.search || l && `?${l}` || "";
    return n && !n.endsWith(":") && (n += ":"), e.slashes || (!n || u.test(n)) && !1 !== c ? (c = "//" + (c || ""), o && "/" !== o[0] && (o = "/" + o)) : c || (c = ""), i && "#" !== i[0] && (i = "#" + i), s && "?" !== s[0] && (s = "?" + s), o = o.replace(/[?#]/g, encodeURIComponent), s = s.replace("#", "%23"), `${n}${c}${o}${s}${i}`
  }
  let l = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

  function c(e) {
    return i(e)
  }
}, 40067, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "useMergedRef", {
    enumerable: !0,
    get: function() {
      return o
    }
  });
  let n = e.r(30668);

  function o(e, t) {
    let r = (0, n.useRef)(null),
      o = (0, n.useRef)(null);
    return (0, n.useCallback)(n => {
      if (null === n) {
        let e = r.current;
        e && (r.current = null, e());
        let t = o.current;
        t && (o.current = null, t())
      } else e && (r.current = a(e, n)), t && (o.current = a(t, n))
    }, [e, t])
  }

  function a(e, t) {
    if ("function" != typeof e) return e.current = t, () => {
      e.current = null
    };
    {
      let r = e(t);
      return "function" == typeof r ? r : () => e(null)
    }
  }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default)
}, 48911, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    DecodeError: function() {
      return w
    },
    MiddlewareNotFoundError: function() {
      return y
    },
    MissingStaticPage: function() {
      return g
    },
    NormalizeError: function() {
      return x
    },
    PageNotFoundError: function() {
      return v
    },
    SP: function() {
      return m
    },
    ST: function() {
      return f
    },
    WEB_VITALS: function() {
      return a
    },
    execOnce: function() {
      return u
    },
    getDisplayName: function() {
      return _
    },
    getLocationOrigin: function() {
      return c
    },
    getURL: function() {
      return s
    },
    isAbsoluteUrl: function() {
      return l
    },
    isResSent: function() {
      return d
    },
    loadGetInitialProps: function() {
      return h
    },
    normalizeRepeatedSlashes: function() {
      return p
    },
    stringifyError: function() {
      return q
    }
  };
  for (var o in n) Object.defineProperty(r, o, {
    enumerable: !0,
    get: n[o]
  });
  let a = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

  function u(e) {
    let t, r = !1;
    return (...n) => (r || (r = !0, t = e(...n)), t)
  }
  let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
    l = e => i.test(e);

  function c() {
    let {
      protocol: e,
      hostname: t,
      port: r
    } = window.location;
    return `${e}//${t}${r?":"+r:""}`
  }

  function s() {
    let {
      href: e
    } = window.location, t = c();
    return e.substring(t.length)
  }

  function _(e) {
    return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
  }

  function d(e) {
    return e.finished || e.headersSent
  }

  function p(e) {
    let t = e.split("?");
    return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
  }
  async function h(e, t) {
    let r = t.res || t.ctx && t.ctx.res;
    if (!e.getInitialProps) return t.ctx && t.Component ? {
      pageProps: await h(t.Component, t.ctx)
    } : {};
    let n = await e.getInitialProps(t);
    if (r && d(r)) return n;
    if (!n) throw Object.defineProperty(Error(`"${_(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`), "__NEXT_ERROR_CODE", {
      value: "E394",
      enumerable: !1,
      configurable: !0
    });
    return n
  }
  let m = "undefined" != typeof performance,
    f = m && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
  class w extends Error {}
  class x extends Error {}
  class v extends Error {
    constructor(e) {
      super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${e}`
    }
  }
  class g extends Error {
    constructor(e, t) {
      super(), this.message = `Failed to load static file for page: ${e} ${t}`
    }
  }
  class y extends Error {
    constructor() {
      super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
    }
  }

  function q(e) {
    return JSON.stringify({
      message: e.message,
      stack: e.stack
    })
  }
}, 23450, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "isLocalURL", {
    enumerable: !0,
    get: function() {
      return a
    }
  });
  let n = e.r(48911),
    o = e.r(37023);

  function a(e) {
    if (!(0, n.isAbsoluteUrl)(e)) return !0;
    try {
      let t = (0, n.getLocationOrigin)(),
        r = new URL(e, t);
      return r.origin === t && (0, o.hasBasePath)(r.pathname)
    } catch (e) {
      return !1
    }
  }
}, 15553, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "errorOnce", {
    enumerable: !0,
    get: function() {
      return n
    }
  });
  let n = e => {}
}, 16506, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    default: function() {
      return w
    },
    useLinkStatus: function() {
      return v
    }
  };
  for (var o in n) Object.defineProperty(r, o, {
    enumerable: !0,
    get: n[o]
  });
  let a = e.r(61909),
    u = e.r(48277),
    i = a._(e.r(30668)),
    l = e.r(34485),
    c = e.r(45243),
    s = e.r(40067),
    _ = e.r(48911),
    d = e.r(39940);
  e.r(86051);
  let p = e.r(79111),
    h = e.r(23450),
    m = e.r(24994);

  function f(e) {
    return "string" == typeof e ? e : (0, l.formatUrl)(e)
  }

  function w(t) {
    var r;
    let n, o, a, [l, w] = (0, i.useOptimistic)(p.IDLE_LINK_STATUS),
      v = (0, i.useRef)(null),
      {
        href: g,
        as: y,
        children: q,
        prefetch: E = null,
        passHref: b,
        replace: Z,
        shallow: T,
        scroll: j,
        onClick: C,
        onMouseEnter: S,
        onTouchStart: P,
        legacyBehavior: B = !1,
        onNavigate: L,
        ref: k,
        unstable_dynamicOnHover: W,
        ...O
      } = t;
    n = q, B && ("string" == typeof n || "number" == typeof n) && (n = (0, u.jsx)("a", {
      children: n
    }));
    let M = i.default.useContext(c.AppRouterContext),
      I = !1 !== E,
      N = !1 !== E ? null === (r = E) || "auto" === r ? m.FetchStrategy.PPR : m.FetchStrategy.Full : m.FetchStrategy.PPR,
      {
        href: R,
        as: A
      } = i.default.useMemo(() => {
        let e = f(g);
        return {
          href: e,
          as: y ? f(y) : e
        }
      }, [g, y]);
    if (B) {
      if (n?.$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
        value: "E863",
        enumerable: !1,
        configurable: !0
      });
      o = i.default.Children.only(n)
    }
    let z = B ? o && "object" == typeof o && o.ref : k,
      $ = i.default.useCallback(e => (null !== M && (v.current = (0, p.mountLinkInstance)(e, R, M, N, I, w)), () => {
        v.current && ((0, p.unmountLinkForCurrentNavigation)(v.current), v.current = null), (0, p.unmountPrefetchableInstance)(e)
      }), [I, R, M, N, w]),
      U = {
        ref: (0, s.useMergedRef)($, z),
        onClick(t) {
          B || "function" != typeof C || C(t), B && o.props && "function" == typeof o.props.onClick && o.props.onClick(t), !M || t.defaultPrevented || function(t, r, n, o, a, u, l) {
            if ("undefined" != typeof window) {
              let c, {
                nodeName: s
              } = t.currentTarget;
              if ("A" === s.toUpperCase() && ((c = t.currentTarget.getAttribute("target")) && "_self" !== c || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
              if (!(0, h.isLocalURL)(r)) {
                a && (t.preventDefault(), location.replace(r));
                return
              }
              if (t.preventDefault(), l) {
                let e = !1;
                if (l({
                    preventDefault: () => {
                      e = !0
                    }
                  }), e) return
              }
              let {
                dispatchNavigateAction: _
              } = e.r(19998);
              i.default.startTransition(() => {
                _(n || r, a ? "replace" : "push", u ?? !0, o.current)
              })
            }
          }(t, R, A, v, Z, j, L)
        },
        onMouseEnter(e) {
          B || "function" != typeof S || S(e), B && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e), M && I && (0, p.onNavigationIntent)(e.currentTarget, !0 === W)
        },
        onTouchStart: function(e) {
          B || "function" != typeof P || P(e), B && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e), M && I && (0, p.onNavigationIntent)(e.currentTarget, !0 === W)
        }
      };
    return (0, _.isAbsoluteUrl)(A) ? U.href = A : B && !b && ("a" !== o.type || "href" in o.props) || (U.href = (0, d.addBasePath)(A)), a = B ? i.default.cloneElement(o, U) : (0, u.jsx)("a", {
      ...O,
      ...U,
      children: n
    }), (0, u.jsx)(x.Provider, {
      value: l,
      children: a
    })
  }
  e.r(15553);
  let x = (0, i.createContext)(p.IDLE_LINK_STATUS),
    v = () => (0, i.useContext)(x);
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default)
}, 52202, e => {
  "use strict";
  var t = e.i(48277),
    r = e.i(16506),
    n = e.i(17435);

  function o({
    href: e,
    asTag: o,
    locale: a,
    children: u,
    ...i
  }) {
    let l = a || (0, n.useLang)();
    if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) return o ? (0, t.jsx)("a", {
      href: e,
      ...i,
      children: u
    }) : (0, t.jsx)(r.default, {
      href: e,
      ...i,
      children: u
    });
    let c = "en" == l ? `${e.startsWith("/")?"":"/"}${e}` : `/${l}${e.startsWith("/")?"":"/"}${e}`;
    return o ? (0, t.jsx)("a", {
      href: c,
      ...i,
      children: u
    }) : (0, t.jsx)(r.default, {
      href: c,
      ...i,
      children: u
    })
  }
  e.s(["default", () => o])
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
    n = e.i(29066);

  function o({
    title: e,
    subtitle: o,
    headerAction: a,
    children: u,
    footer: i,
    legal: l
  }) {
    return (0, t.jsx)("div", {
      className: n.default.page,
      children: (0, t.jsxs)("div", {
        className: n.default.panel,
        children: [a && (0, t.jsx)("div", {
          className: n.default.panelHeaderAction,
          children: a
        }), (0, t.jsxs)("div", {
          className: n.default.brand,
          children: [(0, t.jsx)(r.default, {
            href: "/",
            className: n.default.brandLink,
            children: (0, t.jsx)("img", {
              src: "https://assets.guns.lol/guns_logo_no_background_cropped.png",
              alt: "guns.lol",
              className: n.default.brandLogo
            })
          }), (0, t.jsxs)("div", {
            className: n.default.brandText,
            children: [(0, t.jsx)("h1", {
              className: n.default.title,
              children: e
            }), o && (0, t.jsx)("p", {
              className: n.default.subtitle,
              children: o
            })]
          })]
        }), (0, t.jsx)("div", {
          className: n.default.body,
          children: u
        }), i && (0, t.jsx)("div", {
          className: n.default.footer,
          children: i
        }), l && (0, t.jsx)("div", {
          className: n.default.legal,
          children: l
        })]
      })
    })
  }
  e.s(["default", () => o])
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
}, 33236, e => {
  "use strict";
  var t = e.i(48277),
    r = e.i(87909),
    n = e.i(52202),
    o = e.i(17435),
    a = e.i(17467);
  let u = [{
    id: "forgot_password",
    icon: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 256 256",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M160 16a80.07 80.07 0 0 0-76.09 104.78l-57.57 57.56A8 8 0 0 0 24 184v40a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 5.66-2.34l9.56-9.57A80 80 0 1 0 160 16m20 76a16 16 0 1 1 16-16a16 16 0 0 1-16 16"
      })
    })
  }, {
    id: "lost_email_access",
    icon: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M3 21q-.825 0-1.412-.587T1 19V6.5h2V19h16.5v2zm4-4q-.825 0-1.412-.587T5 15V5q0-.825.588-1.412T7 3h14q.825 0 1.413.588T23 5v10q0 .825-.587 1.413T21 17zm7-4.7l7-4.875V5l-7 4.85L7 5v2.425z"
      })
    })
  }, {
    id: "lost_2fa_device",
    icon: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm6-5q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6z"
      })
    })
  }, {
    id: "lost_recovery_codes",
    icon: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M16.75 8c0-1.478-.33-2.901-1.107-3.975c-.8-1.107-2.03-1.775-3.643-1.775s-2.842.668-3.643 1.775C7.58 5.099 7.25 6.522 7.25 8v1.25h-.58c-.535 0-.98 0-1.345.03c-.38.031-.736.098-1.073.27a2.75 2.75 0 0 0-1.202 1.202c-.172.337-.24.694-.27 1.074c-.03.364-.03.81-.03 1.344v4.66c0 .535 0 .98.03 1.345c.03.38.098.737.27 1.074a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.239 1.073.27c.365.03.81.03 1.345.03h10.66c.535 0 .98 0 1.345-.03c.38-.031.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.202c.172-.337.24-.694.27-1.074c.03-.364.03-.81.03-1.344V13.17c0-.534 0-.98-.03-1.344c-.03-.38-.098-.737-.27-1.074a2.75 2.75 0 0 0-1.2-1.202c-.338-.172-.694-.239-1.074-.27c-.365-.03-.81-.03-1.345-.03h-.58zm-8 0c0-1.283.29-2.36.822-3.096c.51-.703 1.28-1.154 2.428-1.154s1.919.45 2.428 1.154c.532.736.822 1.813.822 3.096v1.25h-6.5zm4 7.25v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 1.5 0M16 14.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75m-7.25.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 1.5 0"
      })
    })
  }, {
    id: "lost_email_and_2fa",
    icon: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4"
      })
    })
  }, {
    id: "forgot_email",
    icon: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M10.6 16q0-2.025.363-2.912T12.5 11.15q1.025-.9 1.563-1.562t.537-1.513q0-1.025-.687-1.7T12 5.7q-1.275 0-1.937.775T9.125 8.05L6.55 6.95q.525-1.6 1.925-2.775T12 3q2.625 0 4.038 1.463t1.412 3.512q0 1.25-.537 2.138t-1.688 2.012Q14 13.3 13.738 13.913T13.475 16zm1.4 6q-.825 0-1.412-.587T10 20t.588-1.412T12 18t1.413.588T14 20t-.587 1.413T12 22"
      })
    })
  }, {
    id: "compromised_account",
    icon: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsxs)("g", {
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        children: [(0, t.jsx)("path", {
          d: "M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6"
        }), (0, t.jsx)("path", {
          d: "M12 11v2a14 14 0 0 0 2.5 8M8 15a18 18 0 0 0 1.8 6m-4.9-2a22 22 0 0 1-.9-7v-1a8 8 0 0 1 12-6.95"
        })]
      })
    })
  }];

  function i() {
    let e = (0, o.useT)();
    return (0, t.jsx)(r.default, {
      title: e("auth.recovery.selector.title"),
      subtitle: e("auth.recovery.selector.subtitle"),
      children: (0, t.jsx)("div", {
        className: a.default.recoveryCards,
        children: u.map(r => {
          var o;
          return (0, t.jsxs)(n.default, {
            href: "forgot_password" === (o = r.id) ? "/reset" : `/recovery/start?type=${o}`,
            className: a.default.recoveryCard,
            children: [(0, t.jsx)("span", {
              className: a.default.cardIcon,
              children: r.icon
            }), (0, t.jsx)("h2", {
              children: e(`auth.recovery.selector.types.${r.id}`)
            })]
          }, r.id)
        })
      })
    })
  }
  e.s(["default", () => i])
}]);