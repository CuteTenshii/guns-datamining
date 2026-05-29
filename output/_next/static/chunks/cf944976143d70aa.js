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
      return u
    },
    searchParamsToUrlQuery: function() {
      return o
    },
    urlQueryToSearchParams: function() {
      return l
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });

  function o(e) {
    let t = {};
    for (let [r, n] of e.entries()) {
      let e = t[r];
      void 0 === e ? t[r] = n : Array.isArray(e) ? e.push(n) : t[r] = [e, n]
    }
    return t
  }

  function i(e) {
    return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
  }

  function l(e) {
    let t = new URLSearchParams;
    for (let [r, n] of Object.entries(e))
      if (Array.isArray(n))
        for (let e of n) t.append(r, i(e));
      else t.set(r, i(n));
    return t
  }

  function u(e, ...t) {
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
      return l
    },
    formatWithValidation: function() {
      return c
    },
    urlObjectKeys: function() {
      return u
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  let o = e.r(61909)._(e.r(70077)),
    i = /https?|ftp|gopher|file/;

  function l(e) {
    let {
      auth: t,
      hostname: r
    } = e, n = e.protocol || "", a = e.pathname || "", l = e.hash || "", u = e.query || "", c = !1;
    t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? c = t + e.host : r && (c = t + (~r.indexOf(":") ? `[${r}]` : r), e.port && (c += ":" + e.port)), u && "object" == typeof u && (u = String(o.urlQueryToSearchParams(u)));
    let s = e.search || u && `?${u}` || "";
    return n && !n.endsWith(":") && (n += ":"), e.slashes || (!n || i.test(n)) && !1 !== c ? (c = "//" + (c || ""), a && "/" !== a[0] && (a = "/" + a)) : c || (c = ""), l && "#" !== l[0] && (l = "#" + l), s && "?" !== s[0] && (s = "?" + s), a = a.replace(/[?#]/g, encodeURIComponent), s = s.replace("#", "%23"), `${n}${c}${a}${s}${l}`
  }
  let u = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

  function c(e) {
    return l(e)
  }
}, 40067, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "useMergedRef", {
    enumerable: !0,
    get: function() {
      return a
    }
  });
  let n = e.r(30668);

  function a(e, t) {
    let r = (0, n.useRef)(null),
      a = (0, n.useRef)(null);
    return (0, n.useCallback)(n => {
      if (null === n) {
        let e = r.current;
        e && (r.current = null, e());
        let t = a.current;
        t && (a.current = null, t())
      } else e && (r.current = o(e, n)), t && (a.current = o(t, n))
    }, [e, t])
  }

  function o(e, t) {
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
      return y
    },
    MiddlewareNotFoundError: function() {
      return g
    },
    MissingStaticPage: function() {
      return v
    },
    NormalizeError: function() {
      return x
    },
    PageNotFoundError: function() {
      return w
    },
    SP: function() {
      return m
    },
    ST: function() {
      return h
    },
    WEB_VITALS: function() {
      return o
    },
    execOnce: function() {
      return i
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
      return u
    },
    isResSent: function() {
      return d
    },
    loadGetInitialProps: function() {
      return p
    },
    normalizeRepeatedSlashes: function() {
      return f
    },
    stringifyError: function() {
      return E
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  let o = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

  function i(e) {
    let t, r = !1;
    return (...n) => (r || (r = !0, t = e(...n)), t)
  }
  let l = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
    u = e => l.test(e);

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

  function f(e) {
    let t = e.split("?");
    return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
  }
  async function p(e, t) {
    let r = t.res || t.ctx && t.ctx.res;
    if (!e.getInitialProps) return t.ctx && t.Component ? {
      pageProps: await p(t.Component, t.ctx)
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
    h = m && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
  class y extends Error {}
  class x extends Error {}
  class w extends Error {
    constructor(e) {
      super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${e}`
    }
  }
  class v extends Error {
    constructor(e, t) {
      super(), this.message = `Failed to load static file for page: ${e} ${t}`
    }
  }
  class g extends Error {
    constructor() {
      super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
    }
  }

  function E(e) {
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
      return o
    }
  });
  let n = e.r(48911),
    a = e.r(37023);

  function o(e) {
    if (!(0, n.isAbsoluteUrl)(e)) return !0;
    try {
      let t = (0, n.getLocationOrigin)(),
        r = new URL(e, t);
      return r.origin === t && (0, a.hasBasePath)(r.pathname)
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
      return y
    },
    useLinkStatus: function() {
      return w
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  let o = e.r(61909),
    i = e.r(48277),
    l = o._(e.r(30668)),
    u = e.r(34485),
    c = e.r(45243),
    s = e.r(40067),
    _ = e.r(48911),
    d = e.r(39940);
  e.r(86051);
  let f = e.r(79111),
    p = e.r(23450),
    m = e.r(24994);

  function h(e) {
    return "string" == typeof e ? e : (0, u.formatUrl)(e)
  }

  function y(t) {
    var r;
    let n, a, o, [u, y] = (0, l.useOptimistic)(f.IDLE_LINK_STATUS),
      w = (0, l.useRef)(null),
      {
        href: v,
        as: g,
        children: E,
        prefetch: b = null,
        passHref: q,
        replace: Z,
        shallow: j,
        scroll: C,
        onClick: S,
        onMouseEnter: P,
        onTouchStart: z,
        legacyBehavior: k = !1,
        onNavigate: N,
        ref: B,
        unstable_dynamicOnHover: T,
        ...L
      } = t;
    n = E, k && ("string" == typeof n || "number" == typeof n) && (n = (0, i.jsx)("a", {
      children: n
    }));
    let O = l.default.useContext(c.AppRouterContext),
      W = !1 !== b,
      I = !1 !== b ? null === (r = b) || "auto" === r ? m.FetchStrategy.PPR : m.FetchStrategy.Full : m.FetchStrategy.PPR,
      {
        href: R,
        as: A
      } = l.default.useMemo(() => {
        let e = h(v);
        return {
          href: e,
          as: g ? h(g) : e
        }
      }, [v, g]);
    if (k) {
      if (n?.$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
        value: "E863",
        enumerable: !1,
        configurable: !0
      });
      a = l.default.Children.only(n)
    }
    let M = k ? a && "object" == typeof a && a.ref : B,
      $ = l.default.useCallback(e => (null !== O && (w.current = (0, f.mountLinkInstance)(e, R, O, I, W, y)), () => {
        w.current && ((0, f.unmountLinkForCurrentNavigation)(w.current), w.current = null), (0, f.unmountPrefetchableInstance)(e)
      }), [W, R, O, I, y]),
      U = {
        ref: (0, s.useMergedRef)($, M),
        onClick(t) {
          k || "function" != typeof S || S(t), k && a.props && "function" == typeof a.props.onClick && a.props.onClick(t), !O || t.defaultPrevented || function(t, r, n, a, o, i, u) {
            if ("undefined" != typeof window) {
              let c, {
                nodeName: s
              } = t.currentTarget;
              if ("A" === s.toUpperCase() && ((c = t.currentTarget.getAttribute("target")) && "_self" !== c || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
              if (!(0, p.isLocalURL)(r)) {
                o && (t.preventDefault(), location.replace(r));
                return
              }
              if (t.preventDefault(), u) {
                let e = !1;
                if (u({
                    preventDefault: () => {
                      e = !0
                    }
                  }), e) return
              }
              let {
                dispatchNavigateAction: _
              } = e.r(19998);
              l.default.startTransition(() => {
                _(n || r, o ? "replace" : "push", i ?? !0, a.current)
              })
            }
          }(t, R, A, w, Z, C, N)
        },
        onMouseEnter(e) {
          k || "function" != typeof P || P(e), k && a.props && "function" == typeof a.props.onMouseEnter && a.props.onMouseEnter(e), O && W && (0, f.onNavigationIntent)(e.currentTarget, !0 === T)
        },
        onTouchStart: function(e) {
          k || "function" != typeof z || z(e), k && a.props && "function" == typeof a.props.onTouchStart && a.props.onTouchStart(e), O && W && (0, f.onNavigationIntent)(e.currentTarget, !0 === T)
        }
      };
    return (0, _.isAbsoluteUrl)(A) ? U.href = A : k && !q && ("a" !== a.type || "href" in a.props) || (U.href = (0, d.addBasePath)(A)), o = k ? l.default.cloneElement(a, U) : (0, i.jsx)("a", {
      ...L,
      ...U,
      children: n
    }), (0, i.jsx)(x.Provider, {
      value: u,
      children: o
    })
  }
  e.r(15553);
  let x = (0, l.createContext)(f.IDLE_LINK_STATUS),
    w = () => (0, l.useContext)(x);
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default)
}, 52202, e => {
  "use strict";
  var t = e.i(48277),
    r = e.i(16506),
    n = e.i(17435);

  function a({
    href: e,
    asTag: a,
    locale: o,
    children: i,
    ...l
  }) {
    let u = o || (0, n.useLang)();
    if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) return a ? (0, t.jsx)("a", {
      href: e,
      ...l,
      children: i
    }) : (0, t.jsx)(r.default, {
      href: e,
      ...l,
      children: i
    });
    let c = "en" == u ? `${e.startsWith("/")?"":"/"}${e}` : `/${u}${e.startsWith("/")?"":"/"}${e}`;
    return a ? (0, t.jsx)("a", {
      href: c,
      ...l,
      children: i
    }) : (0, t.jsx)(r.default, {
      href: c,
      ...l,
      children: i
    })
  }
  e.s(["default", () => a])
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

  function a({
    title: e,
    subtitle: a,
    headerAction: o,
    children: i,
    footer: l,
    legal: u
  }) {
    return (0, t.jsx)("div", {
      className: n.default.page,
      children: (0, t.jsxs)("div", {
        className: n.default.panel,
        children: [o && (0, t.jsx)("div", {
          className: n.default.panelHeaderAction,
          children: o
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
            }), a && (0, t.jsx)("p", {
              className: n.default.subtitle,
              children: a
            })]
          })]
        }), (0, t.jsx)("div", {
          className: n.default.body,
          children: i
        }), l && (0, t.jsx)("div", {
          className: n.default.footer,
          children: l
        }), u && (0, t.jsx)("div", {
          className: n.default.legal,
          children: u
        })]
      })
    })
  }
  e.s(["default", () => a])
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
}, 584, e => {
  "use strict";
  var t = e.i(48277),
    r = e.i(30668),
    n = e.i(96086),
    a = e.i(87909),
    o = e.i(52202),
    i = e.i(17435),
    l = e.i(29066),
    u = e.i(17467);

  function c() {
    let e = (0, i.useT)(),
      c = (0, n.useRouter)(),
      s = (0, n.useSearchParams)(),
      _ = s.get("attempt") || "",
      d = s.get("token") || "",
      [f, p] = (0, r.useState)(!1),
      [m, h] = (0, r.useState)(""),
      [y, x] = (0, r.useState)(!1),
      [w, v] = (0, r.useState)(""),
      [g, E] = (0, r.useState)(!1),
      b = (0, r.useMemo)(() => !!(_ && d), [_, d]);
    (0, r.useEffect)(() => {
      (async () => {
        if (b) try {
          E(!0);
          let e = await fetch("/api/recovery/attempt", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                attemptId: _
              })
            }),
            t = await e.json();
          if (!e.ok) return;
          v(t.flow?.recoveryType || "")
        } catch {} finally {
          E(!1)
        }
      })()
    }, [_, b]);
    let q = async () => {
      if (b && !f && !y) try {
        p(!0), h("");
        let t = await fetch("/api/recovery/finalize", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              attemptId: _,
              token: d
            })
          }),
          r = await t.json();
        if (!t.ok) {
          let t = r.error || e("auth.recovery.finalize.errors.unable_finalize");
          if (t.toLowerCase().includes("new email is required")) return void h(e("auth.recovery.finalize.errors.missing_new_email"));
          h(t);
          return
        }
        x(!0)
      } catch {
        h(e("auth.recovery.finalize.errors.unable_finalize"))
      } finally {
        p(!1)
      }
    };
    return b ? y ? (0, t.jsx)(a.default, {
      title: e("auth.recovery.finalize.done_title"),
      subtitle: e("auth.recovery.finalize.done_subtitle"),
      children: (0, t.jsx)("div", {
        className: l.default.actions,
        children: (0, t.jsx)("button", {
          className: l.default.primaryButton,
          type: "button",
          onClick: () => c.push("/login"),
          children: e("auth.recovery.finalize.go_to_login")
        })
      })
    }) : (0, t.jsx)(a.default, {
      title: e("auth.recovery.finalize.title"),
      subtitle: e("auth.recovery.finalize.subtitle"),
      children: (0, t.jsxs)("div", {
        className: u.default.startContainer,
        children: [(0, t.jsxs)("div", {
          className: u.default.finalizeChangesPanel,
          children: [(0, t.jsx)("h3", {
            className: u.default.finalizeChangesTitle,
            children: e("auth.recovery.finalize.changes_title")
          }), g ? (0, t.jsx)("p", {
            className: u.default.finalizeChangesLoading,
            children: e("auth.recovery.finalize.loading_changes")
          }) : (0, t.jsx)("ul", {
            className: u.default.finalizeChangesList,
            children: ("lost_email_access" === w ? [{
              id: "new-email",
              content: e("auth.recovery.finalize.planned.new_email")
            }] : "lost_2fa_device" === w || "lost_recovery_codes" === w ? [{
              id: "disable-2fa",
              content: e("auth.recovery.finalize.planned.disable_2fa")
            }] : "lost_email_and_2fa" === w ? [{
              id: "disable-2fa",
              content: e("auth.recovery.finalize.planned.disable_2fa")
            }, {
              id: "new-email",
              content: e("auth.recovery.finalize.planned.new_email")
            }] : "forgot_email" === w ? [{
              id: "new-email",
              content: e("auth.recovery.finalize.planned.new_email")
            }] : "compromised_account" === w ? [{
              id: "password-reset",
              content: (0, t.jsxs)(t.Fragment, {
                children: [e("auth.recovery.finalize.planned.password_reset_prefix"), " ", " ", (0, t.jsx)(o.default, {
                  href: "/reset",
                  className: u.default.inlineActionLink,
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
              className: u.default.finalizeChangesItem,
              children: [(0, t.jsx)("span", {
                className: u.default.finalizeChangesDot,
                children: "•"
              }), (0, t.jsx)("span", {
                children: e.content
              })]
            }, e.id))
          })]
        }), m && (0, t.jsx)("div", {
          className: l.default.errorBanner,
          children: m
        }), (0, t.jsxs)("div", {
          className: l.default.actions,
          children: [(0, t.jsx)("button", {
            className: l.default.secondaryButton,
            type: "button",
            onClick: () => c.push("/login"),
            disabled: f,
            children: e("auth.recovery.finalize.cancel")
          }), (0, t.jsx)("button", {
            className: l.default.primaryButton,
            type: "button",
            onClick: q,
            disabled: f || g,
            children: f ? e("auth.recovery.finalize.finalizing") : e("auth.recovery.finalize.confirm")
          })]
        })]
      })
    }) : (0, t.jsxs)(a.default, {
      title: e("auth.recovery.finalize.title"),
      subtitle: e("auth.recovery.finalize.subtitle_invalid"),
      children: [(0, t.jsx)("div", {
        className: l.default.errorBanner,
        children: e("auth.recovery.finalize.errors.missing_info")
      }), (0, t.jsx)("div", {
        className: l.default.actions,
        children: (0, t.jsx)("button", {
          className: l.default.primaryButton,
          type: "button",
          onClick: () => c.push("/recovery"),
          children: e("auth.recovery.finalize.back_to_recovery")
        })
      })]
    })
  }
  e.s(["default", () => c])
}]);