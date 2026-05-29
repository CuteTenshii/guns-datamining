(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 52202, e => {
  "use strict";
  var t = e.i(48277),
    a = e.i(16506),
    r = e.i(17435);

  function n({
    href: e,
    asTag: n,
    locale: s,
    children: i,
    ...l
  }) {
    let o = s || (0, r.useLang)();
    if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) return n ? (0, t.jsx)("a", {
      href: e,
      ...l,
      children: i
    }) : (0, t.jsx)(a.default, {
      href: e,
      ...l,
      children: i
    });
    let c = "en" == o ? `${e.startsWith("/")?"":"/"}${e}` : `/${o}${e.startsWith("/")?"":"/"}${e}`;
    return n ? (0, t.jsx)("a", {
      href: c,
      ...l,
      children: i
    }) : (0, t.jsx)(a.default, {
      href: c,
      ...l,
      children: i
    })
  }
  e.s(["default", () => n])
}, 32872, e => {
  "use strict";
  var t = e.i(48277),
    a = e.i(30668),
    r = e.i(50250),
    n = e.i(33544);

  function s({
    featureName: e,
    onChangeFunction: s,
    value: i,
    placeholder: l,
    icon: o,
    prefix: c,
    prefixLength: u,
    viewPassword: d,
    onKeyPress: h,
    isImageUrl: p,
    type: m = "text",
    ...f
  }) {
    let [_, g] = (0, a.useState)(!!d);
    return (0, a.useEffect)(() => {
      g(!!d)
    }, [d]), (0, t.jsxs)("div", {
      className: r.default.inputContainerWrapper,
      "data-dashboard-feature-label": "string" == typeof e ? e : void 0,
      children: [e && (0, t.jsx)("h1", {
        className: r.default.featureName,
        children: e
      }), (0, t.jsxs)("div", {
        className: `${r.default.inputWrapperDiv} ${c&&r.default.inputWrapperURL}`,
        children: [(0, t.jsxs)("span", {
          className: r.default.inputWrapperSpan,
          style: {
            position: c ? "absolute" : "static"
          },
          children: [p ? (0, t.jsx)("img", {
            src: o,
            alt: "icon",
            className: r.default.inputWrapperIconImage
          }) : o, c && (0, t.jsx)("h1", {
            children: c
          })]
        }), d && (0, t.jsx)("p", {
          onClick: () => {
            g(!_)
          },
          children: _ ? n.default.hidePassword : n.default.views
        }), (0, t.jsx)("input", {
          autoCorrect: "false",
          type: d ? _ ? "password" : "text" : m,
          onKeyDown: h,
          value: i,
          style: {
            paddingLeft: c ? u : "",
            paddingRight: d ? 47 : ""
          },
          placeholder: l,
          className: r.default.inputWrapperInput,
          onChange: s,
          ...f
        })]
      })]
    })
  }
  e.s(["default", () => s])
}, 19168, e => {
  e.v({
    body: "modalWrapper-module__XCOtVG__body",
    closeButton: "modalWrapper-module__XCOtVG__closeButton",
    header: "modalWrapper-module__XCOtVG__header",
    modal: "modalWrapper-module__XCOtVG__modal",
    "modal-scale-in": "modalWrapper-module__XCOtVG__modal-scale-in",
    "modal-scale-out": "modalWrapper-module__XCOtVG__modal-scale-out",
    overlay: "modalWrapper-module__XCOtVG__overlay",
    "overlay-fade-in": "modalWrapper-module__XCOtVG__overlay-fade-in",
    "overlay-fade-out": "modalWrapper-module__XCOtVG__overlay-fade-out",
    title: "modalWrapper-module__XCOtVG__title"
  })
}, 74654, e => {
  "use strict";
  var t = e.i(48277),
    a = e.i(30668),
    r = e.i(69941),
    n = e.i(19168);

  function s({
    opened: e,
    onClose: s,
    onOverlayClose: i,
    onCloseButtonClick: l,
    onEscapeClose: o,
    title: c,
    centered: u = !0,
    size: d = "auto",
    closeOnOverlayClick: h = !0,
    withCloseButton: p = !0,
    centerTitle: m = !1,
    className: f,
    bodyClassName: _,
    children: g
  }) {
    let [x, v] = (0, a.useState)(e), [w, y] = (0, a.useState)(!1), [b, E] = (0, a.useState)(null), j = (0, a.useRef)(null), C = (0, a.useRef)(null), k = (0, a.useRef)(null), q = (0, a.useRef)(!1), S = e => {
      if (!e) return !1;
      let t = window.getComputedStyle(e).overflowY;
      return e.scrollHeight > e.clientHeight + 1 && ("auto" === t || "scroll" === t)
    }, N = e => {
      let t = C.current;
      if (!t || !e) return null;
      let a = e;
      for (; a && t.contains(a);) {
        if (S(a)) return a;
        a = a.parentElement
      }
      return null
    }, B = (e, t) => t < 0 ? e.scrollTop > 0 : !(t > 0) || e.scrollTop + e.clientHeight < e.scrollHeight;
    if ((0, a.useEffect)(() => {
        if (e) {
          v(!0), y(!1);
          return
        }
        return y(!0), j.current = setTimeout(() => {
          v(!1), y(!1)
        }, 180), () => {
          j.current && (clearTimeout(j.current), j.current = null)
        }
      }, [e]), (0, a.useEffect)(() => {
        if ("undefined" == typeof document) return;
        let e = document.createElement("div");
        return document.body.appendChild(e), E(e), () => {
          document.body.removeChild(e), E(null)
        }
      }, []), (0, a.useEffect)(() => {
        if (!x) return;
        let e = e => {
            "Escape" === e.key ? o ? o() : s() : ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(e.key) && !C.current?.contains(e.target) && e.preventDefault()
          },
          t = e => {
            let t = C.current;
            if (!t) return void e.preventDefault();
            let a = e.target;
            if (!(a && t.contains(a))) return void e.preventDefault();
            if (e instanceof WheelEvent) {
              let t = N(a);
              t && B(t, e.deltaY) || e.preventDefault();
              return
            }
            if (e instanceof TouchEvent) {
              let t = e.touches[0]?.clientY ?? null,
                r = k.current;
              k.current = t;
              let n = N(a);
              n && B(n, null !== r && null !== t ? r - t : 0) || e.preventDefault()
            }
          },
          a = {
            passive: !1
          };
        return window.addEventListener("keydown", e, {
          passive: !1
        }), window.addEventListener("wheel", t, a), window.addEventListener("touchmove", t, a), () => {
          window.removeEventListener("keydown", e), window.removeEventListener("wheel", t, a), window.removeEventListener("touchmove", t, a)
        }
      }, [B, N, s, o, x]), (0, a.useEffect)(() => {
        if (!x) return;
        let e = e => {
          if (!C.current?.contains(e.target)) {
            k.current = null;
            return
          }
          k.current = e.touches[0]?.clientY ?? null
        };
        return window.addEventListener("touchstart", e, {
          passive: !0
        }), () => window.removeEventListener("touchstart", e)
      }, [x]), !x || !b) return null;
    let R = "number" == typeof d ? `${d}px` : d,
      O = {};
    R && "auto" !== R ? O.maxWidth = R : (O.width = "fit-content", O.maxWidth = "clamp(100%, 100%, 850px)", O.boxSizing = "border-box");
    let Z = w ? "closing" : "open",
      T = (0, t.jsx)("div", {
        className: n.default.overlay,
        "data-centered": u,
        "data-state": Z,
        onMouseDown: e => {
          q.current = e.target === e.currentTarget
        },
        onClick: e => {
          let t = e.target === e.currentTarget,
            a = h && t && q.current;
          q.current = !1, a && (i ? i() : s())
        },
        children: (0, t.jsxs)("div", {
          className: `${n.default.modal} ${f??""}`,
          "data-state": Z,
          style: O,
          ref: C,
          onClick: e => e.stopPropagation(),
          children: [(c || p) && (0, t.jsxs)("div", {
            className: n.default.header,
            children: [c && (0, t.jsx)("h2", {
              className: n.default.title,
              style: m ? {
                textAlign: "center",
                width: "100%"
              } : {},
              children: c
            }), p && (0, t.jsx)("button", {
              type: "button",
              className: n.default.closeButton,
              onClick: l ?? s,
              children: (0, t.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                viewBox: "7.43 7.45 9.15 9.15",
                children: (0, t.jsx)("path", {
                  fill: "currentColor",
                  d: "m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"
                })
              })
            })]
          }), (0, t.jsx)("div", {
            className: `${n.default.body} ${_??""}`,
            children: g
          })]
        })
      });
    return (0, r.createPortal)(T, b)
  }
  e.s(["default", () => s])
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
    a = e.i(52202),
    r = e.i(29066);

  function n({
    title: e,
    subtitle: n,
    headerAction: s,
    children: i,
    footer: l,
    legal: o
  }) {
    return (0, t.jsx)("div", {
      className: r.default.page,
      children: (0, t.jsxs)("div", {
        className: r.default.panel,
        children: [s && (0, t.jsx)("div", {
          className: r.default.panelHeaderAction,
          children: s
        }), (0, t.jsxs)("div", {
          className: r.default.brand,
          children: [(0, t.jsx)(a.default, {
            href: "/",
            className: r.default.brandLink,
            children: (0, t.jsx)("img", {
              src: "https://assets.guns.lol/guns_logo_no_background_cropped.png",
              alt: "guns.lol",
              className: r.default.brandLogo
            })
          }), (0, t.jsxs)("div", {
            className: r.default.brandText,
            children: [(0, t.jsx)("h1", {
              className: r.default.title,
              children: e
            }), n && (0, t.jsx)("p", {
              className: r.default.subtitle,
              children: n
            })]
          })]
        }), (0, t.jsx)("div", {
          className: r.default.body,
          children: i
        }), l && (0, t.jsx)("div", {
          className: r.default.footer,
          children: l
        }), o && (0, t.jsx)("div", {
          className: r.default.legal,
          children: o
        })]
      })
    })
  }
  e.s(["default", () => n])
}, 96836, e => {
  "use strict";
  var t = e.i(48277);
  let a = {
    mfaToken: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6zm9 15q-2.075 0-3.537-1.463T13 18q0-2.075 1.463-3.537T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23m1.65-2.65l.7-.7l-1.85-1.85V15h-1v3.2zM12.25 22H6q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v1.3q-.5-.175-1-.238T18 11q-2.925 0-4.962 2.038T11 18q0 1.075.338 2.088T12.25 22"
      })
    }),
    discord: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"
      })
    }),
    google: (0, t.jsxs)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 256 262",
      children: [(0, t.jsx)("path", {
        fill: "#4285F4",
        d: "M255.68 133.53c0-10.03-.9-19.66-2.57-28.9H130.55v54.68h70.03c-3.02 16.27-12.17 30.06-25.94 39.29v32.66h41.93c24.54-22.6 38.71-55.94 38.71-97.73"
      }), (0, t.jsx)("path", {
        fill: "#34A853",
        d: "M130.55 261.1c35.1 0 64.56-11.63 86.08-31.48l-41.93-32.66c-11.63 7.8-26.51 12.4-44.15 12.4c-33.92 0-62.64-22.9-72.9-53.68H14.3v33.66c21.4 42.52 65.42 71.76 116.25 71.76"
      }), (0, t.jsx)("path", {
        fill: "#FBBC05",
        d: "M57.65 155.68c-2.61-7.8-4.1-16.12-4.1-24.68s1.49-16.88 4.1-24.68V72.66H14.3C5.18 90.84 0 110.2 0 131s5.18 40.16 14.3 58.34z"
      }), (0, t.jsx)("path", {
        fill: "#EA4335",
        d: "M130.55 52.64c19.08 0 36.2 6.56 49.66 19.43l37.25-37.25C195.05 13.97 165.58 0 130.55 0C79.72 0 35.7 29.24 14.3 72.66l43.35 33.66c10.26-30.78 38.98-53.68 72.9-53.68"
      })]
    }),
    email: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M13.425 11.9q.275.2.575.2t.575-.2L21 7.425V5l-7 4.85L7 5v2.425zM3 21q-.825 0-1.412-.587T1 19V7.5q0-.425.288-.712T2 6.5q.425 0 .713.288T3 7.5V19h15.5q.425 0 .713.288T19.5 20q0 .425-.288.713T18.5 21zm4-4q-.825 0-1.412-.587T5 15V5q0-.825.588-1.412T7 3h14q.825 0 1.413.588T23 5v10q0 .825-.587 1.413T21 17z"
      })
    }),
    password: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 256 256",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M160 16a80.07 80.07 0 0 0-76.09 104.78l-57.57 57.56A8 8 0 0 0 24 184v40a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 5.66-2.34l9.56-9.57A80 80 0 1 0 160 16m20 76a16 16 0 1 1 16-16a16 16 0 0 1-16 16"
      })
    }),
    loading: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsxs)("g", {
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "2",
        children: [(0, t.jsx)("path", {
          strokeDasharray: "60",
          strokeDashoffset: "60",
          strokeOpacity: ".3",
          d: "M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z",
          children: (0, t.jsx)("animate", {
            fill: "freeze",
            attributeName: "stroke-dashoffset",
            dur: "1.3s",
            values: "60;0"
          })
        }), (0, t.jsxs)("path", {
          strokeDasharray: "15",
          strokeDashoffset: "15",
          d: "M12 3C16.9706 3 21 7.02944 21 12",
          children: [(0, t.jsx)("animate", {
            fill: "freeze",
            attributeName: "stroke-dashoffset",
            dur: "0.3s",
            values: "15;0"
          }), (0, t.jsx)("animateTransform", {
            attributeName: "transform",
            dur: "1.5s",
            repeatCount: "indefinite",
            type: "rotate",
            values: "0 12 12;360 12 12"
          })]
        })]
      })
    }),
    newLocation: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M12 2c3.31 0 6 2.66 6 5.95C18 12.41 12 19 12 19S6 12.41 6 7.95C6 4.66 8.69 2 12 2m0 4a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m8 13c0 2.21-3.58 4-8 4s-8-1.79-8-4c0-1.29 1.22-2.44 3.11-3.17l.64.91C6.67 17.19 6 17.81 6 18.5c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5c0-.69-.67-1.31-1.75-1.76l.64-.91C18.78 16.56 20 17.71 20 19"
      })
    }),
    mfaRecoveryCode: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M16.75 8c0-1.478-.33-2.901-1.107-3.975c-.8-1.107-2.03-1.775-3.643-1.775s-2.842.668-3.643 1.775C7.58 5.099 7.25 6.522 7.25 8v1.25h-.58c-.535 0-.98 0-1.345.03c-.38.031-.736.098-1.073.27a2.75 2.75 0 0 0-1.202 1.202c-.172.337-.24.694-.27 1.074c-.03.364-.03.81-.03 1.344v4.66c0 .535 0 .98.03 1.345c.03.38.098.737.27 1.074a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.239 1.073.27c.365.03.81.03 1.345.03h10.66c.535 0 .98 0 1.345-.03c.38-.031.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.202c.172-.337.24-.694.27-1.074c.03-.364.03-.81.03-1.344V13.17c0-.534 0-.98-.03-1.344c-.03-.38-.098-.737-.27-1.074a2.75 2.75 0 0 0-1.2-1.202c-.338-.172-.694-.239-1.074-.27c-.365-.03-.81-.03-1.345-.03h-.58zm-8 0c0-1.283.29-2.36.822-3.096c.51-.703 1.28-1.154 2.428-1.154s1.919.45 2.428 1.154c.532.736.822 1.813.822 3.096v1.25h-6.5zm4 7.25v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 1.5 0M16 14.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75m-7.25.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 1.5 0"
      })
    })
  };
  e.s(["default", 0, a])
}, 12427, e => {
  e.v({
    checkboxBox: "checkboxWrapper-module__CSKjgq__checkboxBox",
    checkboxContent: "checkboxWrapper-module__CSKjgq__checkboxContent",
    checkboxWrapper: "checkboxWrapper-module__CSKjgq__checkboxWrapper",
    checkmark: "checkboxWrapper-module__CSKjgq__checkmark",
    description: "checkboxWrapper-module__CSKjgq__description",
    label: "checkboxWrapper-module__CSKjgq__label"
  })
}, 77064, e => {
  "use strict";
  var t = e.i(48277),
    a = e.i(30668),
    r = e.i(12427);

  function n({
    checked: e,
    onChange: n,
    label: s,
    description: i,
    disabled: l = !1,
    name: o,
    id: c,
    className: u
  }) {
    let d = (0, a.useId)(),
      h = c ?? d,
      p = (0, t.jsx)("svg", {
        viewBox: "0 0 10 7",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, t.jsx)("path", {
          d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        })
      });
    return (0, t.jsxs)("label", {
      className: `${r.default.checkboxWrapper} ${u??""}`,
      "data-disabled": l,
      "data-checked": e,
      htmlFor: h,
      children: [(0, t.jsx)("input", {
        type: "checkbox",
        id: h,
        name: o,
        checked: e,
        onChange: n,
        disabled: l
      }), (0, t.jsx)("span", {
        className: r.default.checkboxBox,
        children: (0, t.jsx)("span", {
          className: r.default.checkmark,
          children: p
        })
      }), (s || i) && (0, t.jsxs)("span", {
        className: r.default.checkboxContent,
        children: [s && (0, t.jsx)("span", {
          className: r.default.label,
          children: s
        }), i && (0, t.jsx)("span", {
          className: r.default.description,
          children: i
        })]
      })]
    })
  }
  e.s(["default", () => n])
}, 25036, e => {
  e.v({
    buttonText: "authSocialButtons-module__w6Pl8G__buttonText",
    compact: "authSocialButtons-module__w6Pl8G__compact",
    icon: "authSocialButtons-module__w6Pl8G__icon",
    lastUsedBadge: "authSocialButtons-module__w6Pl8G__lastUsedBadge",
    socialButton: "authSocialButtons-module__w6Pl8G__socialButton",
    socialButtons: "authSocialButtons-module__w6Pl8G__socialButtons"
  })
}, 6289, 10043, e => {
  "use strict";

  function t(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function a(e, t) {
    return (a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }
  var r = e.i(30668),
    n = Object.defineProperty,
    s = Object.defineProperties,
    i = Object.getOwnPropertyDescriptors,
    l = Object.getOwnPropertySymbols,
    o = Object.prototype.hasOwnProperty,
    c = Object.prototype.propertyIsEnumerable,
    u = (e, t, a) => t in e ? n(e, t, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: a
    }) : e[t] = a,
    d = (e, t) => {
      for (var a in t || (t = {})) o.call(t, a) && u(e, a, t[a]);
      if (l)
        for (var a of l(t)) c.call(t, a) && u(e, a, t[a]);
      return e
    },
    h = (e, t, a) => (u(e, "symbol" != typeof t ? t + "" : t, a), a),
    p = (e, t, a) => new Promise((r, n) => {
      var s = e => {
          try {
            l(a.next(e))
          } catch (e) {
            n(e)
          }
        },
        i = e => {
          try {
            l(a.throw(e))
          } catch (e) {
            n(e)
          }
        },
        l = e => e.done ? r(e.value) : Promise.resolve(e.value).then(s, i);
      l((a = a.apply(e, t)).next())
    }),
    m = "hCaptchaOnLoad",
    f = "script-error",
    _ = "@hCaptcha/loader";

  function g(e) {
    let t = e && e.ownerDocument || document,
      a = t.defaultView || t.parentWindow || window;
    return {
      document: t,
      window: a
    }
  }

  function x(e) {
    return e || document.head
  }
  var v = class e {
      constructor(e) {
        h(this, "_parent"), h(this, "breadcrumbs", []), h(this, "context", {}), h(this, "extra", {}), h(this, "tags", {}), h(this, "request"), h(this, "user"), this._parent = e
      }
      get parent() {
        return this._parent
      }
      child() {
        return new e(this)
      }
      setRequest(e) {
        return this.request = e, this
      }
      removeRequest() {
        return this.request = void 0, this
      }
      addBreadcrumb(e) {
        return typeof e.timestamp > "u" && (e.timestamp = new Date().toISOString()), this.breadcrumbs.push(e), this
      }
      setExtra(e, t) {
        return this.extra[e] = t, this
      }
      removeExtra(e) {
        return delete this.extra[e], this
      }
      setContext(e, t) {
        return typeof t.type > "u" && (t.type = e), this.context[e] = t, this
      }
      removeContext(e) {
        return delete this.context[e], this
      }
      setTags(e) {
        return this.tags = d(d({}, this.tags), e), this
      }
      setTag(e, t) {
        return this.tags[e] = t, this
      }
      removeTag(e) {
        return delete this.tags[e], this
      }
      setUser(e) {
        return this.user = e, this
      }
      removeUser() {
        return this.user = void 0, this
      }
      toBody() {
        let e = [],
          t = this;
        for (; t;) e.push(t), t = t.parent;
        return e.reverse().reduce((e, t) => {
          var a;
          return e.breadcrumbs = [...null != (a = e.breadcrumbs) ? a : [], ...t.breadcrumbs], e.extra = d(d({}, e.extra), t.extra), e.contexts = d(d({}, e.contexts), t.context), e.tags = d(d({}, e.tags), t.tags), t.user && (e.user = t.user), t.request && (e.request = t.request), e
        }, {
          breadcrumbs: [],
          extra: {},
          contexts: {},
          tags: {},
          request: void 0,
          user: void 0
        })
      }
      clear() {
        this.breadcrumbs = [], this.context = {}, this.tags = {}, this.user = void 0
      }
    },
    w = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,
    y = "An unknown error occurred";

  function b(e) {
    return (e + 256).toString(16).substring(1)
  }
  var E, j = [
      [/^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, "chrome"],
      [/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, "winjs"],
      [/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i, "gecko"]
    ],
    C = (E = class {
      constructor(e) {
        var t, a, r, n, s;
        h(this, "apiURL"), h(this, "dsn"), h(this, "environment"), h(this, "release"), h(this, "sampleRate"), h(this, "debug"), h(this, "_scope"), h(this, "shouldBuffer", !1), h(this, "bufferlimit", 20), h(this, "buffer", []), this.environment = e.environment, this.release = e.release, this.sampleRate = null != (t = e.sampleRate) ? t : 1, this.debug = null != (a = e.debug) && a, this._scope = null != (r = e.scope) ? r : new v, this.apiURL = function(e) {
          let t = w.exec(e),
            a = t ? t.slice(1) : [];
          if (6 !== a.length) throw Error("Invalid DSN");
          let r = a[5].split("/"),
            n = r.slice(0, -1).join("/");
          return a[0] + "://" + a[3] + (a[4] ? ":" + a[4] : "") + (n ? "/" + n : "") + "/api/" + r.pop() + "/envelope/?sentry_version=7&sentry_key=" + a[1] + (a[2] ? "&sentry_secret=" + a[2] : "")
        }(e.dsn), this.dsn = e.dsn, this.shouldBuffer = null != (n = e.buffer) && n, this.bufferlimit = null != (s = e.bufferLimit) ? s : 20
      }
      static init(e) {
        E._instance || (E._instance = new E(e))
      }
      static get instance() {
        if (!E._instance) throw Error("Sentry has not been initialized");
        return E._instance
      }
      log(...e) {
        this.debug && console.log(...e)
      }
      get scope() {
        return this._scope
      }
      static get scope() {
        return E.instance.scope
      }
      withScope(e) {
        e(this._scope.child())
      }
      static withScope(e) {
        E.instance.withScope(e)
      }
      captureException(e, t) {
        this.captureEvent({
          type: "exception",
          level: "error",
          error: function(e) {
            if (e instanceof Error) return e;
            if ("string" == typeof e) return Error(e);
            if ("object" == typeof e && null !== e && !Array.isArray(e)) {
              let {
                message: t
              } = e, a = ((e, t) => {
                var a = {};
                for (var r in e) o.call(e, r) && 0 > t.indexOf(r) && (a[r] = e[r]);
                if (null != e && l)
                  for (var r of l(e)) 0 > t.indexOf(r) && c.call(e, r) && (a[r] = e[r]);
                return a
              })(e, ["message"]);
              return Object.assign(Error("string" == typeof t ? t : y), a)
            }
            return Object.assign(Error(y), {
              cause: e
            })
          }(e),
          scope: null != t ? t : this._scope
        })
      }
      static captureException(e, t) {
        E.instance.captureException(e, t)
      }
      captureMessage(e, t = "info", a) {
        this.captureEvent({
          type: "message",
          level: t,
          message: e,
          scope: null != a ? a : this._scope
        })
      }
      static captureMessage(e, t = "info", a) {
        E.instance.captureMessage(e, t, a)
      }
      captureEvent(e) {
        if (Math.random() >= this.sampleRate) return void this.log("Dropped event due to sample rate");
        if (this.shouldBuffer) {
          if (this.buffer.length >= this.bufferlimit) return;
          this.buffer.push(e)
        } else this.sendEvent(e)
      }
      sendEvent(e, t = 5e3) {
        return p(this, null, function*() {
          try {
            this.log("Sending sentry event", e);
            let a = function(e, t, a) {
                var r, n, s;
                let i, l = d({
                  event_id: ((i = function(e) {
                    for (let t = 0; t < e.length; t++) e[t] = Math.floor(256 * Math.random());
                    return e
                  }(Array(16)))[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, b(i[0]) + b(i[1]) + b(i[2]) + b(i[3]) + "-" + b(i[4]) + b(i[5]) + "-" + b(i[6]) + b(i[7]) + "-" + b(i[8]) + b(i[9]) + "-" + b(i[10]) + b(i[11]) + b(i[12]) + b(i[13]) + b(i[14]) + b(i[15])).replaceAll("-", ""),
                  platform: "javascript",
                  sdk: {
                    name: "@hcaptcha/sentry",
                    version: "0.0.4"
                  },
                  environment: t,
                  release: a,
                  timestamp: Date.now() / 1e3
                }, e.scope.toBody());
                if ("exception" === e.type) {
                  let t;
                  l.message = null != (n = null == (r = e.error) ? void 0 : r.message) ? n : "Unknown error", l.fingerprint = [l.message];
                  let a = [],
                    i = e.error;
                  for (let e = 0; e < 5 && i && (a.push((t = function(e) {
                      var t, a, r, n;
                      if (!e.stack) return null;
                      let s = [],
                        i = null != (r = null == (a = (t = e.stack).split) ? void 0 : a.call(t, `
`)) ? r : [];
                      for (let t = 0; t < i.length; ++t) {
                        let a = null,
                          r = null,
                          l = null;
                        for (let [e, a] of j)
                          if (r = e.exec(i[t])) {
                            l = a;
                            break
                          } if (!(!r || !l)) {
                          if ("chrome" === l) a = {
                            filename: null != (n = r[2]) && n.startsWith("address at ") ? r[2].substring(11) : r[2],
                            function: r[1] || "?",
                            lineno: r[3] ? +r[3] : null,
                            colno: r[4] ? +r[4] : null
                          };
                          else if ("winjs" === l) a = {
                            filename: r[2],
                            function: r[1] || "?",
                            lineno: +r[3],
                            colno: r[4] ? +r[4] : null
                          };
                          else {
                            if ("gecko" !== l) continue;
                            0 === t && !r[5] && void 0 !== e.columnNumber && s.length > 0 && (s[0].column = e.columnNumber + 1), a = {
                              filename: r[3],
                              function: r[1] || "?",
                              lineno: r[4] ? +r[4] : null,
                              colno: r[5] ? +r[5] : null
                            }
                          }!a.function && a.lineno && (a.function = "?"), s.push(a)
                        }
                      }
                      return s.length ? s.reverse() : null
                    }(s = i), {
                      type: s.name,
                      value: s.message,
                      stacktrace: {
                        frames: null != t ? t : []
                      }
                    })), !(!i.cause || !(i.cause instanceof Error))); e++) i = i.cause;
                  l.exception = {
                    values: a.reverse()
                  }
                }
                return "message" === e.type && (l.message = e.message, l.level = e.level), l
              }(e, this.environment, this.release),
              r = {
                event_id: a.event_id,
                dsn: this.dsn
              },
              n = JSON.stringify(r) + `
` + JSON.stringify({
                type: "event"
              }) + `
` + JSON.stringify(a),
              l = yield function(e, t, a) {
                return p(this, null, function*() {
                  var r, n;
                  try {
                    if ("u" > typeof fetch && "u" > typeof AbortSignal) {
                      let r, n, l;
                      if (a) {
                        let e = new AbortController;
                        r = e.signal, setTimeout(() => e.abort(), a)
                      }
                      let o = yield fetch(e, (n = d({}, t), l = {
                        signal: r
                      }, s(n, i(l)))), c = yield o.text();
                      return {
                        status: o.status,
                        body: c
                      }
                    }
                    return yield new Promise((r, n) => {
                      var s, i;
                      let l = new XMLHttpRequest;
                      if (l.open(null != (s = null == t ? void 0 : t.method) ? s : "GET", e), l.onload = () => r({
                          status: l.status,
                          body: l.responseText
                        }), l.onerror = () => n(Error("XHR Network Error")), null == t ? void 0 : t.headers)
                        for (let [e, a] of Object.entries(t.headers)) l.setRequestHeader(e, a);
                      if (a) {
                        let e = setTimeout(() => {
                          l.abort(), n(Error("Request timed out"))
                        }, a);
                        l.onloadend = () => {
                          clearTimeout(e)
                        }
                      }
                      l.send(null == (i = null == t ? void 0 : t.body) ? void 0 : i.toString())
                    })
                  } catch (e) {
                    return {
                      status: 0,
                      body: null != (n = null == (r = null == e ? void 0 : e.toString) ? void 0 : r.call(e)) ? n : "Unknown error"
                    }
                  }
                })
              }(this.apiURL, {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-sentry-envelope"
                },
                body: n
              }, t);
            this.log("Sentry response", l.status), 200 !== l.status && (console.log(l.body), console.error("Failed to send event to Sentry", l))
          } catch (e) {
            console.error("Failed to send event", e)
          }
        })
      }
      flush(e = 5e3) {
        return p(this, null, function*() {
          try {
            this.log("Flushing sentry events", this.buffer.length);
            let t = this.buffer.splice(0, this.buffer.length).map(t => this.sendEvent(t, e));
            yield Promise.all(t), this.log("Flushed all events")
          } catch (e) {
            console.error("Failed to flush events", e)
          }
        })
      }
      static flush(e = 5e3) {
        return E.instance.flush(e)
      }
      static reset() {
        E._instance = void 0
      }
    }, h(E, "_instance"), E);

  function k(e = null) {
    return {
      addBreadcrumb: t => {
        e && e.addBreadcrumb(t)
      },
      captureRequest: t => {
        e && e.setRequest(t)
      },
      captureException: t => {
        e && C.captureException(t, e)
      }
    }
  }
  var q = [];

  function S(e) {
    var t = e && e.ownerDocument || document,
      a = t.defaultView || t.parentWindow || window;
    return {
      document: t,
      window: a
    }
  }

  function N(e) {
    return e || document.head
  }
  var B = function(e) {
    function n(a) {
      var n;
      return (n = e.call(this, a) || this)._hcaptcha = void 0, n.renderCaptcha = n.renderCaptcha.bind(t(n)), n.resetCaptcha = n.resetCaptcha.bind(t(n)), n.removeCaptcha = n.removeCaptcha.bind(t(n)), n.isReady = n.isReady.bind(t(n)), n._onReady = null, n.loadCaptcha = n.loadCaptcha.bind(t(n)), n.handleOnLoad = n.handleOnLoad.bind(t(n)), n.handleSubmit = n.handleSubmit.bind(t(n)), n.handleExpire = n.handleExpire.bind(t(n)), n.handleError = n.handleError.bind(t(n)), n.handleOpen = n.handleOpen.bind(t(n)), n.handleClose = n.handleClose.bind(t(n)), n.handleChallengeExpired = n.handleChallengeExpired.bind(t(n)), n.ref = r.createRef(), n.apiScriptRequested = !1, n.sentryHub = null, n.captchaId = "", n._pendingExecute = null, n.state = {
        isApiReady: !1,
        isRemoved: !1,
        elementId: a.id
      }, n
    }
    n.prototype = Object.create(e.prototype), n.prototype.constructor = n, a(n, e);
    var l = n.prototype;
    return l.componentDidMount = function() {
      var e = this,
        t = S(N(this.props.scriptLocation));
      (this._hcaptcha = t.window.hcaptcha || void 0, void 0 !== this._hcaptcha) ? this.setState({
        isApiReady: !0
      }, function() {
        e.renderCaptcha()
      }): this.loadCaptcha()
    }, l.componentWillUnmount = function() {
      var e = this._hcaptcha,
        t = this.captchaId;
      this._cancelPendingExecute("react-component-unmounted"), this.isReady() && (e.reset(t), e.remove(t))
    }, l.shouldComponentUpdate = function(e, t) {
      return this.state.isApiReady === t.isApiReady && this.state.isRemoved === t.isRemoved
    }, l.componentDidUpdate = function(e) {
      var t = this;
      ["sitekey", "size", "theme", "tabindex", "languageOverride", "endpoint"].every(function(a) {
        return e[a] === t.props[a]
      }) || this.removeCaptcha(function() {
        t.renderCaptcha()
      })
    }, l.loadCaptcha = function() {
      if (!this.apiScriptRequested) {
        var e = this.props,
          t = e.apihost,
          a = e.assethost,
          r = e.endpoint,
          n = e.host,
          l = e.imghost,
          o = e.languageOverride,
          c = e.reCaptchaCompat,
          u = e.reportapi,
          h = e.sentry,
          v = e.custom,
          w = e.loadAsync,
          y = e.scriptLocation,
          b = e.scriptSource,
          E = e.secureApi,
          j = e.cleanup,
          S = e.userJourneys;
        (function() {
          return p(this, arguments, function*(e = {}) {
            let t = function(e = !0) {
              var t, a, r, n, l, o, c;
              let u, h, p, m, f;
              if (!e) return k();
              C.init({
                dsn: "https://d233059272824702afc8c43834c4912d@sentry.hcaptcha.com/6",
                release: "2.2.0",
                environment: "production"
              });
              let g = C.scope;
              return g.setTag("source", _), g.setTag("url", document.URL), g.setContext("os", {
                UA: navigator.userAgent
              }), g.setContext("browser", d({}, (-1 !== (u = navigator.userAgent).indexOf("Firefox") ? (h = "Firefox", p = null == (a = u.match(/Firefox\/([\d.]+)/)) ? void 0 : a[1]) : -1 !== u.indexOf("Edg") ? (h = "Microsoft Edge", p = null == (r = u.match(/Edg\/([\d.]+)/)) ? void 0 : r[1]) : -1 !== u.indexOf("Chrome") && -1 !== u.indexOf("Safari") ? (h = "Chrome", p = null == (n = u.match(/Chrome\/([\d.]+)/)) ? void 0 : n[1]) : -1 !== u.indexOf("Safari") && -1 === u.indexOf("Chrome") ? (h = "Safari", p = null == (l = u.match(/Version\/([\d.]+)/)) ? void 0 : l[1]) : -1 !== u.indexOf("Opera") || -1 !== u.indexOf("OPR") ? (h = "Opera", p = null == (o = u.match(/(Opera|OPR)\/([\d.]+)/)) ? void 0 : o[2]) : -1 !== u.indexOf("MSIE") || -1 !== u.indexOf("Trident") ? (h = "Internet Explorer", p = null == (c = u.match(/(MSIE |rv:)([\d.]+)/)) ? void 0 : c[2]) : (h = "Unknown", p = "Unknown"), {
                name: h,
                version: p
              }))), g.setContext("device", s(d({}, {
                model: f = -1 !== (m = navigator.userAgent).indexOf("Win") ? "Windows" : -1 !== m.indexOf("Mac") ? "Mac" : -1 !== m.indexOf("Linux") ? "Linux" : -1 !== m.indexOf("Android") ? "Android" : -1 !== m.indexOf("like Mac") || -1 !== m.indexOf("iPhone") || -1 !== m.indexOf("iPad") ? "iOS" : "Unknown",
                family: f,
                device: /Mobile|iPhone|iPod|Android/i.test(m) ? "Mobile" : /Tablet|iPad/i.test(m) ? "Tablet" : "Desktop"
              }), i({
                screen_width_pixels: screen.width,
                screen_height_pixels: screen.height,
                language: navigator.language,
                orientation: (null == (t = screen.orientation) ? void 0 : t.type) || "Unknown",
                processor_count: navigator.hardwareConcurrency,
                platform: navigator.platform
              }))), k(g)
            }(e.sentry);
            return yield function e(t, a, r = 0) {
              return p(this, null, function*() {
                let n = r < 2 ? "Retry loading hCaptcha Api" : "Exceeded maximum retries";
                try {
                  return yield function(e = {
                    cleanup: !1
                  }, t) {
                    try {
                      t.addBreadcrumb({
                        category: _,
                        message: "hCaptcha loader params",
                        data: e
                      });
                      let a = x(e.scriptLocation),
                        r = g(a),
                        n = q.find(({
                          scope: e
                        }) => e === r.window);
                      if (n) return t.addBreadcrumb({
                        category: _,
                        message: "hCaptcha already loaded"
                      }), n.promise;
                      let s = new Promise((a, s) => p(this, null, function*() {
                        try {
                          var i;
                          r.window[m] = () => {
                            t.addBreadcrumb({
                              category: _,
                              message: "hCaptcha script called onload function"
                            }), a(r.window.hcaptcha)
                          };
                          let s = (i = {
                            custom: e.custom,
                            render: e.render,
                            sentry: e.sentry,
                            assethost: e.assethost,
                            imghost: e.imghost,
                            reportapi: e.reportapi,
                            endpoint: e.endpoint,
                            host: e.host,
                            recaptchacompat: e.recaptchacompat,
                            hl: e.hl,
                            uj: e.uj
                          }, Object.entries(i).filter(([, e]) => e || !1 === e).map(([e, t]) => `${encodeURIComponent(e)}=${encodeURIComponent(String(t))}`).join("&"));
                          yield function({
                            scriptLocation: e,
                            query: t,
                            loadAsync: a = !0,
                            crossOrigin: r = "anonymous",
                            apihost: n = "https://js.hcaptcha.com",
                            cleanup: s = !1,
                            secureApi: i = !1,
                            scriptSource: l = ""
                          } = {}, o) {
                            let c = x(e),
                              u = g(c);
                            return new Promise((e, d) => {
                              let h = u.document.createElement("script");
                              h.id = "hCaptcha-script", l ? h.src = `${l}?onload=${m}` : i ? h.src = `${n}/1/secure-api.js?onload=${m}` : h.src = `${n}/1/api.js?onload=${m}`, h.crossOrigin = r, h.async = a;
                              let p = (e, t) => {
                                try {
                                  !i && s && c.removeChild(h), t(e)
                                } catch (e) {
                                  d(e)
                                }
                              };
                              h.onload = t => p(t, e), h.onerror = e => {
                                o && o(h.src), p(e, d)
                              }, h.src += "" !== t ? `&${t}` : "", c.appendChild(h)
                            })
                          }(d({
                            query: s
                          }, e), e => {
                            t.captureRequest({
                              url: e,
                              method: "GET"
                            })
                          }), t.addBreadcrumb({
                            category: _,
                            message: "hCaptcha loaded",
                            data: n
                          })
                        } catch (a) {
                          t.addBreadcrumb({
                            category: _,
                            message: "hCaptcha failed to load"
                          });
                          let e = q.findIndex(e => e.scope === r.window); - 1 !== e && q.splice(e, 1), s(Error(f))
                        }
                      }));
                      return q.push({
                        promise: s,
                        scope: r.window
                      }), s
                    } catch (e) {
                      return t.captureException(e), Promise.reject(Error(f))
                    }
                  }(t, a)
                } catch (s) {
                  return a.addBreadcrumb({
                    category: _,
                    message: n
                  }), r >= 2 ? (a.captureException(s), Promise.reject(s)) : e(t, a, r += 1)
                }
              })
            }(e, t)
          })
        })({
          render: "explicit",
          apihost: t,
          assethost: a,
          endpoint: r,
          hl: o,
          host: n,
          imghost: l,
          recaptchacompat: !1 === c ? "off" : null,
          reportapi: u,
          sentry: h,
          custom: v,
          loadAsync: w,
          scriptLocation: y,
          scriptSource: b,
          secureApi: E,
          cleanup: void 0 === j || j,
          uj: void 0 !== S && S
        }).then(this.handleOnLoad, this.handleError).catch(this.handleError), this.apiScriptRequested = !0
      }
    }, l.renderCaptcha = function(e) {
      var t = this,
        a = this.props.onReady,
        r = this.state.isApiReady,
        n = this.captchaId;
      if (r && !n) {
        var s = Object.assign({
            "open-callback": this.handleOpen,
            "close-callback": this.handleClose,
            "error-callback": this.handleError,
            "chalexpired-callback": this.handleChallengeExpired,
            "expired-callback": this.handleExpire,
            callback: this.handleSubmit
          }, this.props, {
            hl: this.props.hl || this.props.languageOverride,
            languageOverride: void 0
          }),
          i = this._hcaptcha.render(this.ref.current, s);
        this.captchaId = i, this.setState({
          isRemoved: !1
        }, function() {
          e && e(), a && a(), t._onReady && t._onReady(i)
        })
      }
    }, l.resetCaptcha = function() {
      var e = this._hcaptcha,
        t = this.captchaId;
      this.isReady() && (e.reset(t), this._cancelPendingExecute("hcaptcha-reset"))
    }, l.removeCaptcha = function(e) {
      var t = this,
        a = this._hcaptcha,
        r = this.captchaId;
      this._cancelPendingExecute("hcaptcha-removed"), this.isReady() && this.setState({
        isRemoved: !0
      }, function() {
        t.captchaId = "", a.remove(r), e && e()
      })
    }, l.handleOnLoad = function() {
      var e = this;
      this.setState({
        isApiReady: !0
      }, function() {
        var t = S(N(e.props.scriptLocation));
        e._hcaptcha = t.window.hcaptcha, e.renderCaptcha(function() {
          var t = e.props.onLoad;
          t && t()
        })
      })
    }, l.handleSubmit = function(e) {
      var t = this.props.onVerify,
        a = this.state.isRemoved,
        r = this._hcaptcha,
        n = this.captchaId;
      if (void 0 !== r && !a) {
        var s = r.getResponse(n),
          i = r.getRespKey(n);
        t && t(s, i)
      }
    }, l.handleExpire = function() {
      var e = this.props.onExpire,
        t = this._hcaptcha,
        a = this.captchaId;
      this.isReady() && (t.reset(a), e && e())
    }, l.handleError = function(e) {
      var t = this.props.onError,
        a = this._hcaptcha,
        r = this.captchaId;
      this.isReady() && a.reset(r), t && t(e)
    }, l.isReady = function() {
      var e = this.state,
        t = e.isApiReady,
        a = e.isRemoved;
      return t && !a
    }, l._cancelPendingExecute = function(e) {
      if (this._pendingExecute) {
        var t = this._pendingExecute;
        this._pendingExecute = null;
        var a = Error(e);
        t.reject(a)
      }
    }, l.handleOpen = function() {
      this.isReady() && this.props.onOpen && this.props.onOpen()
    }, l.handleClose = function() {
      this.isReady() && this.props.onClose && this.props.onClose()
    }, l.handleChallengeExpired = function() {
      this.isReady() && this.props.onChalExpired && this.props.onChalExpired()
    }, l.execute = function(e) {
      var t = this;
      void 0 === e && (e = null), e = "object" == typeof e ? e : null;
      try {
        var a = this._hcaptcha,
          r = this.captchaId;
        if (e && e.async && this._pendingExecute && this._cancelPendingExecute("hcaptcha-execute-replaced"), !this.isReady())
          if (e && e.async) return new Promise(function(r, n) {
            t._pendingExecute = {
              resolve: r,
              reject: n
            }, t._onReady = function(s) {
              if (t._pendingExecute) try {
                var i = a.execute(s, e);
                i && "function" == typeof i.then ? i.then(function(e) {
                  t._pendingExecute = null, r(e)
                }).catch(function(e) {
                  t._pendingExecute = null, n(e)
                }) : (t._pendingExecute = null, n(Error("hcaptcha-execute-no-promise")))
              } catch (e) {
                t._pendingExecute = null, n(e)
              }
            }
          });
          else return this._onReady = function(t) {
            a.execute(t, e)
          }, null;
        var n = a.execute(r, e);
        if (e && e.async && n && "function" == typeof n.then) return new Promise(function(e, a) {
          t._pendingExecute = {
            resolve: e,
            reject: a
          }, n.then(function(a) {
            t._pendingExecute = null, e(a)
          }).catch(function(e) {
            t._pendingExecute = null, a(e)
          })
        });
        return n
      } catch (t) {
        if (e && e.async) return Promise.reject(t);
        return null
      }
    }, l.close = function() {
      var e = this._hcaptcha,
        t = this.captchaId;
      if (this._cancelPendingExecute("hcaptcha-closed"), this.isReady()) return e.close(t)
    }, l.setData = function(e) {
      var t = this._hcaptcha,
        a = this.captchaId;
      this.isReady() && (e && "object" != typeof e && (e = null), t.setData(a, e))
    }, l.getResponse = function() {
      return this._hcaptcha.getResponse(this.captchaId)
    }, l.getRespKey = function() {
      return this._hcaptcha.getRespKey(this.captchaId)
    }, l.render = function() {
      var e = this.state.elementId;
      return r.createElement("div", {
        ref: this.ref,
        id: e
      })
    }, n
  }(r.Component);
  e.s(["default", 0, B], 6289);
  var R = e.i(39057),
    O = e.i(48277),
    Z = e.i(25036),
    T = e.i(96836),
    L = e.i(17435);
  let P = R.default.env.NEXT_PUBLIC_API_URL || "https://guns.lol",
    I = "guns_last_social_provider",
    $ = "guns_last_social_used_at";

  function A({
    returnUri: e,
    setError: t,
    actionLabel: a = "continue",
    usernameHint: n = "",
    refParameter: s = ""
  }) {
    let i = (0, L.useT)(),
      [l, o] = (0, r.useState)(null),
      [c, u] = (0, r.useState)(null),
      [d, h] = (0, r.useState)(""),
      p = {
        google: {
          continue: i("auth.social.continue_with_google"),
          signup: i("auth.social.signup_with_google"),
          icon: T.default.google
        }
      };
    (0, r.useEffect)(() => {
      let e = window.localStorage.getItem(I),
        t = Number(window.localStorage.getItem($) || "0");
      "google" === e && t > 0 && (u("google"), h(i("auth.social.last_used")))
    }, []);
    let m = async a => {
      try {
        o(a), t?.("");
        {
          let e = Date.now();
          window.localStorage.setItem(I, a), window.localStorage.setItem($, String(e))
        }
        let r = new URLSearchParams({
            returnUri: e
          }),
          i = n.toLowerCase().replace(/[^a-z0-9._]/g, "").slice(0, 16);
        i && r.set("usernameHint", i), s && r.set("ref", s);
        let l = await fetch(`${P}/api/auth/oauth/${a}/url?${r.toString()}`);
        if (!l.ok) throw Error("Could not start sign-in");
        let c = await l.json();
        if (!c?.url) throw Error("Missing redirect url");
        window.location.href = c.url
      } catch {
        o(null), t?.(i("auth.social.error_start"))
      }
    };
    return (0, O.jsx)("div", {
      className: Z.default.socialButtons,
      children: ["google"].map(e => {
        let t = p[e],
          r = l === e;
        return (0, O.jsxs)("button", {
          type: "button",
          className: Z.default.socialButton,
          onClick: () => m(e),
          disabled: null !== l,
          children: [t.icon, (0, O.jsx)("span", {
            className: Z.default.buttonText,
            children: r ? i("auth.social.redirecting") : t[a]
          }), "continue" === a && c === e && d && (0, O.jsx)("span", {
            className: Z.default.lastUsedBadge,
            children: d
          })]
        }, e)
      })
    })
  }
  e.s(["default", () => A], 10043)
}, 94664, e => {
  "use strict";
  var t = e.i(39057),
    a = e.i(48277),
    r = e.i(30668),
    n = e.i(29066),
    s = e.i(6289),
    i = e.i(96086),
    l = e.i(52202),
    o = e.i(17435),
    c = e.i(74654),
    u = e.i(77064),
    d = e.i(32872),
    h = e.i(10043),
    p = e.i(87909),
    m = e.i(33544),
    f = e.i(96836);
  let _ = ["gmail.com", "googlemail.com", "icloud.com", "me.com", "mac.com", "outlook.com", "hotmail.com", "live.com", "msn.com", "yahoo.com", "yahoo.co.uk", "yahoo.de", "yahoo.fr", "proton.me", "protonmail.com", "pm.me", "tutanota.com", "tuta.io", "posteo.de", "riseup.net", "mailbox.org", "gmx.de", "gmx.net", "web.de", "t-online.de", "freenet.de", "arcor.de", "vodafone.de", "online.de", "bluewin.ch", "orange.fr", "wanadoo.fr", "laposte.net", "libero.it", "aol.com", "mail.com", "inbox.com", "zoho.com", "fastmail.com", "yandex.com", "yandex.ru"];

  function g(e) {
    return e.toLowerCase().replace(/[^a-z0-9._]/g, "").replace(/\.{2,}/g, ".").slice(0, 16)
  }

  function x() {
    let e = (0, o.useT)(),
      x = (0, i.useRouter)(),
      v = (0, r.useRef)(null),
      w = (0, i.useSearchParams)(),
      y = w.get("claim") || "",
      b = w.get("ref") || "",
      E = w.get("returnUri"),
      [j, C] = (0, r.useState)(1),
      [k, q] = (0, r.useState)(!1),
      [S, N] = (0, r.useState)(!1),
      [B, R] = (0, r.useState)(!1),
      [O, Z] = (0, r.useState)(""),
      [T, L] = (0, r.useState)(null),
      [P, I] = (0, r.useState)(""),
      [$, A] = (0, r.useState)(g(y)),
      [W, M] = (0, r.useState)("idle"),
      [U, D] = (0, r.useState)(""),
      [V, z] = (0, r.useState)(!1),
      [H, G] = (0, r.useState)(!1),
      F = (0, r.useRef)(null),
      K = "https://guns.lol",
      X = E && E.startsWith("/") ? `${K}${E}` : `${K}/account`;
    (0, r.useEffect)(() => {
      let e = g($);
      e !== $ && A(e)
    }, [$]), (0, r.useEffect)(() => {
      if (!O || !O.includes("@")) return void L(null);
      let e = function(e) {
        let t = e.split("@");
        if (2 !== t.length) return null;
        let [a, r] = t;
        if (!a || !r) return null;
        let n = null;
        for (let e of _) {
          let t = function(e, t) {
            if (e === t) return 0;
            let a = e.length,
              r = t.length;
            if (!a) return r;
            if (!r) return a;
            let n = Array.from({
              length: a + 1
            }, () => Array(r + 1).fill(0));
            for (let e = 0; e <= a; e++) n[e][0] = e;
            for (let e = 0; e <= r; e++) n[0][e] = e;
            for (let s = 1; s <= a; s++)
              for (let a = 1; a <= r; a++) {
                let r = +(e[s - 1] !== t[a - 1]);
                n[s][a] = Math.min(n[s - 1][a] + 1, n[s][a - 1] + 1, n[s - 1][a - 1] + r)
              }
            return n[a][r]
          }(r, e);
          t <= 2 && (!n || t < n.dist) && (n = {
            candidate: `${a}@${e}`,
            dist: t
          })
        }
        return n?.candidate ?? null
      }(O);
      L(e && e !== O ? e : null)
    }, [O]);
    let J = (0, r.useMemo)(() => {
        let e;
        return e = 0, P.length >= 8 && e++, /[A-Z]/.test(P) && e++, /[a-z]/.test(P) && e++, /[0-9]/.test(P) && e++, /[^A-Za-z0-9]/.test(P) && e++, Math.min(e, 5)
      }, [P]),
      Y = async (a, r) => {
        let n = r?.silent === !0,
          s = g(a);
        if (!s || s.length > 16 || !/^[a-z0-9_.]+$/.test(s)) return M("invalid"), n || D(e("auth.register.error_invalid_username")), !1;
        if (F.current?.username === s) {
          let t = F.current;
          return M(t.available ? "available" : "taken"), n || t.available || D(t.error || e("auth.register.error_invalid_username")), !n && t.available && D(""), t.available
        }
        try {
          M("checking");
          let a = t.default.env.NEXT_PUBLIC_API_URL || "https://guns.lol",
            r = await fetch(`${a}/api/auth/username/${encodeURIComponent(s)}/availability`);
          if (!r.ok) throw Error("Username check failed");
          let i = await r.json(),
            l = i?.available === !0,
            o = "string" == typeof i?.error ? i.error : e("auth.register.error_invalid_username"),
            c = l ? "available" : o.toLowerCase().includes("taken") || o.toLowerCase().includes("not available") ? "taken" : "invalid";
          return F.current = {
            username: s,
            available: l,
            error: o
          }, M(c), n || D(l ? "" : o), l
        } catch {
          return M("idle"), n || D(e("auth.register.error_invalid_username")), !1
        }
      };
    (0, r.useEffect)(() => {
      if (1 !== j) return;
      let e = g($);
      if (e !== $) return void A(e);
      if (F.current = null, !e) return void M("idle");
      let t = window.setTimeout(() => {
        Y(e, {
          silent: !0
        })
      }, 260);
      return () => window.clearTimeout(t)
    }, [j, $]);
    let Q = async () => {
      D(""), await Y($) && C(2)
    }, ee = () => {
      (D(""), /^(?!.{255,})([a-zA-Z0-9_+.'-]{1,64})@([a-zA-Z0-9.-]{1,190})\.[a-zA-Z]{2,24}$/.test(O)) ? C(3): D(e("auth.register.error_invalid_email"))
    }, et = async () => {
      try {
        q(!0);
        let t = new URLSearchParams({
            returnUri: X
          }),
          a = g($);
        a && t.set("usernameHint", a), b && t.set("ref", b);
        let r = await fetch(`https://guns.lol/api/auth/discord/url?${t.toString()}`);
        if (!r.ok) {
          D(e("auth.register.error_discord_start")), q(!1);
          return
        }
        let n = await r.json();
        if (!n?.url) {
          D(e("auth.register.error_discord_start")), q(!1);
          return
        }
        window.location.href = n.url
      } catch {
        D(e("auth.register.error_discord_start")), q(!1)
      }
    }, ea = async () => {
      if (D(""), !B) return D(e("auth.register.error_accept_tos"));
      if (!$) return D(e("auth.register.error_invalid_username"));
      if (await Y($)) {
        if (P.length < 8) return D(e("auth.register.error_password_length", {
          length: 8
        }));
        if (J < 2) return D(e("auth.register.error_weak_password"));
        N(!0)
      }
    }, er = async e => {
      try {
        z(!0), D(""), N(!1);
        let a = {
            email: O.trim(),
            password: P,
            username: g($),
            captcha: e,
            ref: b,
            emailMarketingOptIn: H
          },
          r = t.default.env.NEXT_PUBLIC_API_URL || "https://guns.lol",
          n = await fetch(`${r}/api/auth/register`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(a)
          }),
          s = await n.json();
        if (n.ok) {
          let e = btoa(a.email);
          x.push(`/sent?e=${e}&token=${s.resendToken}`)
        } else D(s?.error)
      } finally {
        z(!1)
      }
    }, en = e => {
      if ("Enter" === e.key) {
        if (e.preventDefault(), 1 === j) return void Q();
        if (2 === j) return void ee();
        ea()
      }
    };
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(c.default, {
        opened: S,
        centered: !0,
        withCloseButton: !1,
        onClose: () => N(!1),
        title: e("auth.register.verify_captcha"),
        centerTitle: !0,
        children: (0, a.jsx)("div", {
          className: n.default.captchaWrapper,
          children: (0, a.jsx)(s.default, {
            sitekey: "227fe119-8d9e-490c-a0f0-5d9f8a41174d",
            onVerify: e => er(e),
            theme: "dark",
            ref: v
          })
        })
      }), (0, a.jsx)(p.default, {
        title: 3 === j ? e("auth.register.panel_title_step2") : e("auth.register.panel_title_step1"),
        subtitle: 3 === j ? e("auth.register.panel_subtitle_step2") : e("auth.register.panel_subtitle_step1"),
        footer: 3 !== j ? (0, a.jsx)(a.Fragment, {
          children: e("auth.register.login_text", {
            login: (0, a.jsx)(l.default, {
              href: "/login",
              className: n.default.inlineLink,
              children: e("auth.register.login_text_link")
            })
          })
        }) : null,
        children: 1 === j ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsxs)("div", {
            className: `${n.default.section} ${n.default.usernameSection}`,
            children: [(0, a.jsx)(d.default, {
              featureName: e("auth.register.username_input_text"),
              autoComplete: "username",
              value: $,
              onChangeFunction: e => {
                D(""), M("idle"), A(e.target.value)
              },
              onKeyPress: en,
              placeholder: e("auth.register.username_placeholder"),
              icon: m.default.user,
              prefix: "guns.lol/",
              prefixLength: 102
            }), "checking" === W && (0, a.jsxs)("p", {
              className: n.default.usernameStatus,
              children: [(0, a.jsx)("span", {
                className: n.default.usernameStatusIcon,
                children: m.default.loading
              }), (0, a.jsx)("span", {
                children: e("auth.login.verifying_request")
              })]
            }), "available" === W && $ && (0, a.jsxs)("p", {
              className: `${n.default.usernameStatus} ${n.default.usernameStatusSuccess}`,
              children: [(0, a.jsx)("span", {
                className: n.default.usernameStatusIcon,
                children: m.default.success
              }), (0, a.jsx)("span", {
                children: e("auth.register.username_available")
              })]
            }), "taken" === W && (0, a.jsxs)("p", {
              className: `${n.default.usernameStatus} ${n.default.usernameStatusError}`,
              children: [(0, a.jsx)("span", {
                className: n.default.usernameStatusIcon,
                children: m.default.removeUser
              }), (0, a.jsx)("span", {
                children: e("auth.register.username_taken")
              })]
            }), "invalid" === W && (0, a.jsxs)("p", {
              className: `${n.default.usernameStatus} ${n.default.usernameStatusError}`,
              children: [(0, a.jsx)("span", {
                className: n.default.usernameStatusIcon,
                children: m.default.error
              }), (0, a.jsx)("span", {
                children: e("auth.register.error_invalid_username")
              })]
            })]
          }), "" !== U && (0, a.jsx)("div", {
            className: n.default.errorBanner,
            children: U
          }), (0, a.jsx)("div", {
            className: n.default.actions,
            children: (0, a.jsx)("button", {
              type: "button",
              className: n.default.primaryButton,
              onClick: () => void Q(),
              disabled: V || "checking" === W || !$,
              children: e("auth.register.continue_button")
            })
          })]
        }) : 2 === j ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsxs)("button", {
            type: "button",
            className: n.default.stepBackButton,
            onClick: () => C(1),
            disabled: V,
            children: [(0, a.jsx)("span", {
              className: n.default.stepBackIcon,
              children: m.default.backButton
            }), (0, a.jsx)("span", {
              children: e("auth.register.back_to_email")
            })]
          }), (0, a.jsx)("button", {
            type: "button",
            className: `${n.default.summaryCard} ${n.default.summaryCardButton}`,
            onClick: () => C(1),
            disabled: V,
            children: (0, a.jsxs)("div", {
              className: n.default.summaryGrid,
              children: [(0, a.jsxs)("div", {
                className: n.default.summaryHeader,
                children: [(0, a.jsx)("div", {
                  className: n.default.summaryLabelPlain,
                  children: e("auth.register.username_input_text")
                }), (0, a.jsxs)("span", {
                  className: n.default.summaryEditAction,
                  children: [m.default.assetName, (0, a.jsx)("span", {
                    children: e("auth.register.edit")
                  })]
                })]
              }), (0, a.jsx)("div", {
                children: (0, a.jsxs)("div", {
                  className: n.default.summaryValue,
                  children: ["guns.lol/", $]
                })
              })]
            })
          }), (0, a.jsxs)("div", {
            className: `${n.default.section} ${n.default.emailSection}`,
            children: [(0, a.jsx)(d.default, {
              featureName: e("auth.register.email_input_text"),
              autoComplete: "email",
              value: O,
              onChangeFunction: e => Z(e.target.value.trim()),
              onKeyPress: en,
              placeholder: e("auth.register.email_placeholder"),
              icon: m.default.email
            }), T && (0, a.jsx)("p", {
              className: n.default.helperText,
              children: e("auth.register.did_you_mean", {
                suggestion: (0, a.jsx)("button", {
                  type: "button",
                  className: n.default.helperAction,
                  onClick: () => Z(T),
                  children: T
                })
              })
            })]
          }), "" !== U && (0, a.jsx)("div", {
            className: n.default.errorBanner,
            children: U
          }), (0, a.jsx)("div", {
            className: n.default.actions,
            children: (0, a.jsx)("button", {
              type: "button",
              className: n.default.primaryButton,
              onClick: ee,
              disabled: V,
              children: e("auth.register.continue_button")
            })
          }), (0, a.jsx)("div", {
            className: n.default.divider,
            children: e("auth.register.or")
          }), (0, a.jsx)(h.default, {
            returnUri: X,
            setError: D,
            actionLabel: "signup",
            usernameHint: $,
            refParameter: b
          }), (0, a.jsxs)("button", {
            type: "button",
            className: n.default.socialButton,
            onClick: et,
            disabled: k,
            children: [f.default.discord, (0, a.jsx)("span", {
              children: k ? e("auth.register.discord_redirecting") : e("auth.register.signup_with_discord")
            })]
          })]
        }) : (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsxs)("button", {
            type: "button",
            className: n.default.stepBackButton,
            onClick: () => C(2),
            disabled: V,
            children: [(0, a.jsx)("span", {
              className: n.default.stepBackIcon,
              children: m.default.backButton
            }), (0, a.jsx)("span", {
              children: e("auth.register.back_to_email")
            })]
          }), (0, a.jsx)("button", {
            type: "button",
            className: `${n.default.summaryCard} ${n.default.summaryCardButton}`,
            onClick: () => C(2),
            disabled: V,
            children: (0, a.jsxs)("div", {
              className: n.default.summaryGrid,
              children: [(0, a.jsxs)("div", {
                className: n.default.summaryHeader,
                children: [(0, a.jsx)("div", {
                  className: n.default.summaryLabelPlain,
                  children: e("auth.register.email_address_label")
                }), (0, a.jsxs)("span", {
                  className: n.default.summaryEditAction,
                  children: [m.default.assetName, (0, a.jsx)("span", {
                    children: e("auth.register.edit")
                  })]
                })]
              }), (0, a.jsx)("div", {
                children: (0, a.jsx)("div", {
                  className: n.default.summaryValue,
                  children: O
                })
              })]
            })
          }), (0, a.jsxs)("div", {
            className: n.default.section,
            children: [(0, a.jsx)(d.default, {
              featureName: e("auth.register.password_input_text"),
              autoComplete: "new-password",
              value: P,
              onChangeFunction: e => I(e.target.value),
              onKeyPress: en,
              placeholder: e("auth.register.password_placeholder"),
              icon: m.default.password,
              viewPassword: !0
            }), P && (0, a.jsxs)("div", {
              className: n.default.pwMeter,
              children: [
                [1, 2, 3, 4, 5].map(e => (0, a.jsx)("span", {
                  className: `${n.default.pwBar} ${J>=e?n.default.pwOn:""}`
                }, e)), (0, a.jsx)("span", {
                  className: n.default.pwLabel,
                  children: e(`auth.register.password_score.${J}`)
                })
              ]
            }), (0, a.jsx)(d.default, {
              featureName: e("auth.register.username_input_text"),
              autoComplete: "username",
              value: $,
              onChangeFunction: e => {
                F.current = null, A(e.target.value)
              },
              onKeyPress: en,
              placeholder: e("auth.register.username_placeholder"),
              icon: m.default.user,
              prefix: "guns.lol/",
              prefixLength: 102
            })]
          }), (0, a.jsxs)("div", {
            className: n.default.agreementList,
            children: [(0, a.jsxs)("div", {
              className: n.default.agreement,
              children: [(0, a.jsx)(u.default, {
                checked: B,
                onChange: e => R(e.currentTarget.checked)
              }), (0, a.jsx)("h1", {
                children: e("auth.register.i_agree_to", {
                  tos: (0, a.jsx)(l.default, {
                    href: "/terms",
                    target: "_blank",
                    children: "ToS"
                  }),
                  pp: (0, a.jsx)(l.default, {
                    href: "/privacy",
                    target: "_blank",
                    children: "Privacy Policy"
                  })
                })
              })]
            }), (0, a.jsxs)("div", {
              className: n.default.agreement,
              children: [(0, a.jsx)(u.default, {
                checked: H,
                onChange: e => G(e.currentTarget.checked)
              }), (0, a.jsx)("h1", {
                children: e("auth.register.email_marketing_opt_in")
              })]
            })]
          }), "" !== U && (0, a.jsx)("div", {
            className: n.default.errorBanner,
            children: U
          }), (0, a.jsx)("div", {
            className: n.default.actions,
            children: (0, a.jsx)("button", {
              type: "button",
              className: `${n.default.primaryButton} ${n.default.registerButton}`,
              onClick: () => void ea(),
              disabled: V,
              children: V ? e("auth.register.submit_creating") : e("auth.register.submit_create")
            })
          })]
        })
      })]
    })
  }
  e.s(["default", () => x])
}]);