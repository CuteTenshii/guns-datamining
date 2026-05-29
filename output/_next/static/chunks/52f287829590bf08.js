(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 52202, e => {
  "use strict";
  var a = e.i(48277),
    t = e.i(16506),
    o = e.i(17435);

  function r({
    href: e,
    asTag: r,
    locale: n,
    children: l,
    ...s
  }) {
    let i = n || (0, o.useLang)();
    if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) return r ? (0, a.jsx)("a", {
      href: e,
      ...s,
      children: l
    }) : (0, a.jsx)(t.default, {
      href: e,
      ...s,
      children: l
    });
    let c = "en" == i ? `${e.startsWith("/")?"":"/"}${e}` : `/${i}${e.startsWith("/")?"":"/"}${e}`;
    return r ? (0, a.jsx)("a", {
      href: c,
      ...s,
      children: l
    }) : (0, a.jsx)(t.default, {
      href: c,
      ...s,
      children: l
    })
  }
  e.s(["default", () => r])
}, 89638, e => {
  e.v({
    accordion: "accordion-module__VRQKPG__accordion",
    content: "accordion-module__VRQKPG__content",
    contentInner: "accordion-module__VRQKPG__contentInner",
    control: "accordion-module__VRQKPG__control",
    item: "accordion-module__VRQKPG__item",
    panel: "accordion-module__VRQKPG__panel"
  })
}, 82724, e => {
  "use strict";
  var a = e.i(48277),
    t = e.i(30668),
    o = e.i(89638);
  let r = (0, t.createContext)(null),
    n = (0, t.createContext)(null),
    l = (...e) => e.filter(Boolean).join(" "),
    s = () => {
      let e = (0, t.useContext)(r);
      if (!e) throw Error("Accordion components must be used within <Accordion>");
      return e
    },
    i = () => {
      let e = (0, t.useContext)(n);
      if (!e) throw Error("Accordion.Item subcomponents must be used within <Accordion.Item>");
      return e
    },
    c = (e, a) => a ? Array.isArray(e) ? e : "string" == typeof e ? [e] : [] : Array.isArray(e) ? e[0] ?? null : "string" == typeof e ? e : e ?? null,
    d = Object.assign(({
      children: e,
      value: n,
      defaultValue: s,
      multiple: i = !1,
      onChange: d,
      className: u = "",
      ...h
    }) => {
      let m = void 0 !== n,
        p = m ? c(n, i) : null,
        [g, f] = (0, t.useState)(() => c(s, i)),
        _ = m ? p : g,
        x = (0, t.useCallback)(e => i ? Array.isArray(_) && _.includes(e) : _ === e, [_, i]),
        v = (0, t.useCallback)(e => {
          let a = ((e, a, t) => {
            if (t) {
              let t = Array.isArray(e) ? e : [];
              return t.includes(a) ? t.filter(e => e !== a) : [...t, a]
            }
            return e === a ? null : a
          })(_, e, i);
          m || f(a), d?.(a)
        }, [_, m, i, d]),
        j = (0, t.useMemo)(() => ({
          multiple: i,
          currentValue: _,
          toggleItem: v,
          isItemActive: x
        }), [i, _, v, x]);
      return (0, a.jsx)(r.Provider, {
        value: j,
        children: (0, a.jsx)("div", {
          className: l(o.default.accordion, u),
          ...h,
          children: e
        })
      })
    }, {
      Item: ({
        value: e,
        children: r,
        className: i = "",
        ...c
      }) => {
        let d = s(),
          u = (0, t.useId)(),
          h = (0, t.useRef)(`${u}-control`),
          m = (0, t.useRef)(`${u}-panel`),
          p = d.isItemActive(e),
          g = (0, t.useMemo)(() => ({
            value: e,
            controlIdRef: h,
            panelIdRef: m
          }), [e]);
        return (0, a.jsx)(n.Provider, {
          value: g,
          children: (0, a.jsx)("div", {
            ...c,
            className: l(o.default.item, i),
            "data-active": p || void 0,
            children: r
          })
        })
      },
      Control: (0, t.forwardRef)(function({
        children: e,
        className: t = "",
        onClick: r,
        disabled: n,
        id: c,
        ...d
      }, u) {
        let h = s(),
          m = i(),
          p = c ?? m.controlIdRef.current;
        m.controlIdRef.current = p;
        let g = h.isItemActive(m.value);
        return (0, a.jsx)("button", {
          type: "button",
          ...d,
          id: p,
          ref: u,
          className: l(o.default.control, t),
          "data-active": g || void 0,
          disabled: n,
          onClick: e => {
            r?.(e), e.defaultPrevented || n || h.toggleItem(m.value)
          },
          children: e
        })
      }),
      Panel: (0, t.forwardRef)(function({
        children: e,
        className: r = "",
        id: n,
        ...c
      }, d) {
        let u = s(),
          h = i(),
          m = n ?? h.panelIdRef.current;
        h.panelIdRef.current = m;
        let p = u.isItemActive(h.value),
          g = (0, t.useRef)(null),
          [f, _] = (0, t.useState)(0),
          [x, v] = (0, t.useState)(!1);
        (0, t.useEffect)(() => {
          let e = g.current;
          if (!e) return;
          let a = window,
            t = () => {
              _(e.scrollHeight), v(!0)
            };
          if (t(), void 0 !== a.ResizeObserver) {
            let o = new a.ResizeObserver(t);
            return o.observe(e), () => o.disconnect()
          }
          return a.addEventListener("resize", t), () => a.removeEventListener("resize", t)
        }, []);
        let j = p ? x && f > 0 ? `${f}px` : void 0 : "0px";
        return (0, a.jsx)("div", {
          ...c,
          id: m,
          ref: d,
          className: l(o.default.panel, r),
          "data-active": p || void 0,
          children: (0, a.jsx)("div", {
            ref: g,
            className: o.default.content,
            style: {
              overflow: "hidden",
              maxHeight: j,
              opacity: +!!p,
              transition: x ? "max-height 220ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms ease" : void 0
            },
            children: (0, a.jsx)("div", {
              className: o.default.contentInner,
              children: e
            })
          })
        })
      })
    });
  e.s(["Accordion", 0, d])
}, 38371, e => {
  e.v({
    active: "pageLayoutComponents-module__nrIyIa__active",
    blurBackground: "pageLayoutComponents-module__nrIyIa__blurBackground",
    categorySeperator: "pageLayoutComponents-module__nrIyIa__categorySeperator",
    desktopNav: "pageLayoutComponents-module__nrIyIa__desktopNav",
    desktopNavExpanded: "pageLayoutComponents-module__nrIyIa__desktopNavExpanded",
    faq: "pageLayoutComponents-module__nrIyIa__faq",
    faqText: "pageLayoutComponents-module__nrIyIa__faqText",
    footer: "pageLayoutComponents-module__nrIyIa__footer",
    footerBottom: "pageLayoutComponents-module__nrIyIa__footerBottom",
    footerBottomWrapper: "pageLayoutComponents-module__nrIyIa__footerBottomWrapper",
    footerContainer: "pageLayoutComponents-module__nrIyIa__footerContainer",
    footerCopyright: "pageLayoutComponents-module__nrIyIa__footerCopyright",
    footerDivider: "pageLayoutComponents-module__nrIyIa__footerDivider",
    footerLeft: "pageLayoutComponents-module__nrIyIa__footerLeft",
    footerRight: "pageLayoutComponents-module__nrIyIa__footerRight",
    footerSocials: "pageLayoutComponents-module__nrIyIa__footerSocials",
    footerWrapper: "pageLayoutComponents-module__nrIyIa__footerWrapper",
    forceMobileNav: "pageLayoutComponents-module__nrIyIa__forceMobileNav",
    gunsBanner: "pageLayoutComponents-module__nrIyIa__gunsBanner",
    gunsBannerButtons: "pageLayoutComponents-module__nrIyIa__gunsBannerButtons",
    gunsBannerDescription: "pageLayoutComponents-module__nrIyIa__gunsBannerDescription",
    gunsBannerWrapper: "pageLayoutComponents-module__nrIyIa__gunsBannerWrapper",
    header: "pageLayoutComponents-module__nrIyIa__header",
    headerWrapper: "pageLayoutComponents-module__nrIyIa__headerWrapper",
    headerWrapperActive: "pageLayoutComponents-module__nrIyIa__headerWrapperActive",
    highlightedLink: "pageLayoutComponents-module__nrIyIa__highlightedLink",
    languageSelectionFooter: "pageLayoutComponents-module__nrIyIa__languageSelectionFooter",
    leftSideHeader: "pageLayoutComponents-module__nrIyIa__leftSideHeader",
    linkCategory: "pageLayoutComponents-module__nrIyIa__linkCategory",
    links: "pageLayoutComponents-module__nrIyIa__links",
    logo: "pageLayoutComponents-module__nrIyIa__logo",
    logoFooter: "pageLayoutComponents-module__nrIyIa__logoFooter",
    logoWrapper: "pageLayoutComponents-module__nrIyIa__logoWrapper",
    mobileMenuButton: "pageLayoutComponents-module__nrIyIa__mobileMenuButton",
    mobileNavGroup: "pageLayoutComponents-module__nrIyIa__mobileNavGroup",
    mobileNavLanguage: "pageLayoutComponents-module__nrIyIa__mobileNavLanguage",
    mobileNavigation: "pageLayoutComponents-module__nrIyIa__mobileNavigation",
    mobileNavigationOpen: "pageLayoutComponents-module__nrIyIa__mobileNavigationOpen",
    serviceWrapper: "pageLayoutComponents-module__nrIyIa__serviceWrapper",
    statusDown: "pageLayoutComponents-module__nrIyIa__statusDown",
    statusPartial: "pageLayoutComponents-module__nrIyIa__statusPartial",
    statusUp: "pageLayoutComponents-module__nrIyIa__statusUp",
    systemStatus: "pageLayoutComponents-module__nrIyIa__systemStatus"
  })
}, 23614, e => {
  e.v({
    boxWrapper: "landingPage-module__c9uchG__boxWrapper",
    claimNow: "landingPage-module__c9uchG__claimNow",
    claimProfileBox: "landingPage-module__c9uchG__claimProfileBox",
    claimProfileText: "landingPage-module__c9uchG__claimProfileText",
    claimProfileWrapper: "landingPage-module__c9uchG__claimProfileWrapper",
    elementAnimation: "landingPage-module__c9uchG__elementAnimation",
    expandAnimation: "landingPage-module__c9uchG__expandAnimation",
    gunsGradient: "landingPage-module__c9uchG__gunsGradient",
    heroButtons: "landingPage-module__c9uchG__heroButtons",
    heroContent: "landingPage-module__c9uchG__heroContent",
    heroContentWrapper: "landingPage-module__c9uchG__heroContentWrapper",
    heroShowcase: "landingPage-module__c9uchG__heroShowcase",
    heroWrapper: "landingPage-module__c9uchG__heroWrapper",
    inputContainerWrapper: "landingPage-module__c9uchG__inputContainerWrapper",
    inputWrapperDiv: "landingPage-module__c9uchG__inputWrapperDiv",
    inputWrapperInput: "landingPage-module__c9uchG__inputWrapperInput",
    inputWrapperSpan: "landingPage-module__c9uchG__inputWrapperSpan",
    landingPage: "landingPage-module__c9uchG__landingPage",
    lifetimeText: "landingPage-module__c9uchG__lifetimeText",
    premiumHeadingText: "landingPage-module__c9uchG__premiumHeadingText",
    premiumShowcase: "landingPage-module__c9uchG__premiumShowcase",
    pricingButton: "landingPage-module__c9uchG__pricingButton",
    registerButton: "landingPage-module__c9uchG__registerButton",
    statisticBox: "landingPage-module__c9uchG__statisticBox",
    statisticBoxWrapper: "landingPage-module__c9uchG__statisticBoxWrapper",
    statisticsDescription: "landingPage-module__c9uchG__statisticsDescription",
    statisticsShowcase: "landingPage-module__c9uchG__statisticsShowcase",
    userDescription: "landingPage-module__c9uchG__userDescription",
    userMarquee: "landingPage-module__c9uchG__userMarquee",
    userMarqueeWrapper: "landingPage-module__c9uchG__userMarqueeWrapper",
    userProfile: "landingPage-module__c9uchG__userProfile"
  })
}, 19754, 42795, e => {
  "use strict";
  var a = e.i(48277),
    t = e.i(38371),
    o = e.i(23614),
    r = e.i(33544),
    n = e.i(16506),
    l = e.i(30668),
    s = e.i(82724),
    i = e.i(65383),
    c = e.i(52202),
    d = e.i(17435);

  function u({
    formattedUsers: e
  }) {
    let u = (0, d.useT)(),
      h = new Date().getFullYear(),
      [m, p] = (0, l.useState)(""),
      [g, f] = (0, l.useState)("up"),
      _ = [{
        question: u("common.footer.faq.question_1"),
        answer: u("common.footer.faq.answer_1")
      }, {
        question: u("common.footer.faq.question_2"),
        answer: u("common.footer.faq.answer_2")
      }, {
        question: u("common.footer.faq.question_3"),
        answer: u("common.footer.faq.answer_3")
      }, {
        question: u("common.footer.faq.question_4"),
        answer: u("common.footer.faq.answer_4")
      }, {
        question: u("common.footer.faq.question_5"),
        answer: u("common.footer.faq.answer_5", {
          users: e
        })
      }, {
        question: u("common.footer.faq.question_6"),
        answer: u("common.footer.faq.answer_6")
      }].map(e => (0, a.jsxs)(s.Accordion.Item, {
        value: e.question,
        children: [(0, a.jsx)(s.Accordion.Control, {
          children: e.question
        }), (0, a.jsx)(s.Accordion.Panel, {
          children: e.answer
        })]
      }, e.question));
    (0, l.useEffect)(() => {
      (async () => {
        let e = await fetch("/api/statusLogs?excludeLogs=true", {
          cache: "no-store"
        });
        f((await e.json()).currentStatus)
      })()
    }, []);
    let x = {
      up: (0, a.jsx)("span", {
        className: t.default.statusUp,
        children: r.default.statusDot
      }),
      down: (0, a.jsx)("span", {
        className: t.default.statusDown,
        children: r.default.statusDot
      }),
      partial: (0, a.jsx)("span", {
        className: t.default.statusPartial,
        children: r.default.statusDot
      })
    };
    return (0, a.jsxs)("div", {
      children: [(0, a.jsxs)("div", {
        className: t.default.faq,
        children: [(0, a.jsx)("h1", {
          className: t.default.faqText,
          children: u("common.footer.faq.title")
        }), (0, a.jsx)(s.Accordion, {
          children: _
        })]
      }), (0, a.jsxs)("div", {
        className: t.default.footerWrapper,
        children: [(0, a.jsx)("div", {
          className: t.default.gunsBannerWrapper,
          children: (0, a.jsx)("div", {
            className: t.default.gunsBanner,
            children: (0, a.jsxs)("div", {
              className: t.default.gunsBannerDescription,
              children: [(0, a.jsx)("h1", {
                children: u("common.footer.banner.title")
              }), (0, a.jsx)("h3", {
                children: u("common.footer.banner.description", {
                  users: e
                })
              }), (0, a.jsxs)("div", {
                className: t.default.gunsBannerButtons,
                children: [(0, a.jsx)("div", {
                  className: o.default.inputContainerWrapper,
                  children: (0, a.jsxs)("div", {
                    className: `${o.default.inputWrapperDiv} ${o.default.inputWrapperURL}`,
                    children: [(0, a.jsx)("span", {
                      className: `${o.default.inputWrapperSpan}`,
                      style: {
                        position: "absolute"
                      },
                      children: (0, a.jsx)("h1", {
                        children: "guns.lol/"
                      })
                    }), (0, a.jsx)("input", {
                      autoCorrect: "false",
                      value: m,
                      onChange: e => {
                        p(e.target.value)
                      },
                      type: "text",
                      placeholder: u("common.footer.banner.claim_input_placeholder"),
                      className: o.default.inputWrapperInput
                    })]
                  })
                }), (0, a.jsx)(c.default, {
                  href: `/register?claim=${m}&ref=guns_footer_banner`,
                  className: `${o.default.claimNow}`,
                  children: u("common.footer.banner.claim_now_text")
                })]
              })]
            })
          })
        }), (0, a.jsxs)("div", {
          className: t.default.footerContainer,
          children: [(0, a.jsxs)("div", {
            className: t.default.footer,
            children: [(0, a.jsxs)("div", {
              className: t.default.footerLeft,
              children: [(0, a.jsxs)("div", {
                className: t.default.serviceWrapper,
                children: [(0, a.jsxs)("div", {
                  className: t.default.logoWrapper,
                  children: [(0, a.jsxs)("div", {
                    className: t.default.logoFooter,
                    children: [(0, a.jsx)("img", {
                      src: "https://assets.guns.lol/guns_logo_no_background_cropped.png",
                      alt: ""
                    }), (0, a.jsxs)("h1", {
                      children: ["guns", (0, a.jsx)("span", {
                        children: "."
                      }), "lol"]
                    })]
                  }), (0, a.jsx)(n.default, {
                    href: "https://status.guns.lol",
                    target: "_blank",
                    children: (0, a.jsxs)("span", {
                      className: t.default.systemStatus,
                      children: [x[g], " ", u("common.footer.banner.system_status_text")]
                    })
                  })]
                }), (0, a.jsx)("span", {
                  children: u("common.footer.footer_description")
                })]
              }), (0, a.jsx)("div", {
                className: t.default.languageSelectionFooter,
                children: (0, a.jsx)(i.default, {})
              })]
            }), (0, a.jsxs)("div", {
              className: t.default.footerRight,
              children: [(0, a.jsxs)("div", {
                className: t.default.categorySeperator,
                children: [(0, a.jsxs)("div", {
                  className: t.default.linkCategory,
                  children: [(0, a.jsx)("h1", {
                    children: u("common.footer.footer_categories.general")
                  }), (0, a.jsxs)("div", {
                    className: t.default.links,
                    children: [(0, a.jsx)(c.default, {
                      href: "/login",
                      children: u("common.footer.footer_categories_links.login")
                    }), (0, a.jsx)(c.default, {
                      href: "/register?ref=footer",
                      children: u("common.footer.footer_categories_links.sign_up")
                    }), (0, a.jsx)(c.default, {
                      href: "/pricing",
                      children: u("common.footer.footer_categories_links.pricing")
                    }), (0, a.jsx)(c.default, {
                      href: "/recovery",
                      children: u("common.footer.footer_categories_links.recover_account")
                    }), (0, a.jsx)(c.default, {
                      href: "/leaderboard",
                      children: u("common.footer.footer_categories_links.leaderboard")
                    }), (0, a.jsx)(n.default, {
                      href: "https://status.guns.lol",
                      target: "_blank",
                      children: u("common.footer.footer_categories_links.website_status")
                    })]
                  })]
                }), (0, a.jsxs)("div", {
                  className: t.default.linkCategory,
                  children: [(0, a.jsx)("h1", {
                    children: u("common.footer.footer_categories.resources")
                  }), (0, a.jsxs)("div", {
                    className: t.default.links,
                    children: [(0, a.jsx)(n.default, {
                      href: "https://help.guns.lol",
                      target: "_blank",
                      children: u("common.footer.footer_categories_links.help_center")
                    }), (0, a.jsx)(n.default, {
                      href: "https://help.guns.lol/changelog",
                      target: "_blank",
                      children: u("common.footer.footer_categories_links.changelog")
                    }), (0, a.jsx)(n.default, {
                      href: "/account/redeem",
                      children: u("common.footer.footer_categories_links.redeem_code")
                    }), (0, a.jsx)(n.default, {
                      href: "https://salad.com/store/rewards/773aded6-552a-46f0-acc9-99324ca32efe",
                      target: "_blank",
                      children: u("common.footer.footer_categories_links.salad_product")
                    }), (0, a.jsx)(n.default, {
                      href: "https://hone.gg/a/guns",
                      target: "_blank",
                      children: u("common.footer.footer_categories_links.hone_product")
                    })]
                  })]
                })]
              }), (0, a.jsxs)("div", {
                className: t.default.categorySeperator,
                children: [(0, a.jsxs)("div", {
                  className: t.default.linkCategory,
                  children: [(0, a.jsx)("h1", {
                    children: u("common.footer.footer_categories.contact")
                  }), (0, a.jsxs)("div", {
                    className: t.default.links,
                    children: [(0, a.jsx)(n.default, {
                      href: "https://discord.gg/guns",
                      target: "_blank",
                      children: u("common.footer.footer_categories_links.discord_server")
                    }), (0, a.jsx)(n.default, {
                      href: "mailto:support@guns.lol",
                      children: u("common.footer.footer_categories_links.support_email")
                    }), (0, a.jsx)(n.default, {
                      href: "mailto:business@guns.lol",
                      children: u("common.footer.footer_categories_links.business_email")
                    }), (0, a.jsx)(n.default, {
                      href: "mailto:legal@guns.lol",
                      children: u("common.footer.footer_categories_links.legal_email")
                    })]
                  })]
                }), (0, a.jsxs)("div", {
                  className: t.default.linkCategory,
                  children: [(0, a.jsx)("h1", {
                    children: u("common.footer.footer_categories.legal")
                  }), (0, a.jsxs)("div", {
                    className: t.default.links,
                    children: [(0, a.jsx)(c.default, {
                      href: "/terms",
                      children: u("common.footer.footer_categories_links.terms_of_service")
                    }), (0, a.jsx)(c.default, {
                      href: "/privacy",
                      children: u("common.footer.footer_categories_links.privacy_policy")
                    }), (0, a.jsx)(c.default, {
                      href: "/terms/copyright",
                      children: u("common.footer.footer_categories_links.copyright_policy")
                    })]
                  })]
                })]
              })]
            })]
          }), (0, a.jsxs)("div", {
            className: t.default.footerBottomWrapper,
            children: [(0, a.jsx)("div", {
              className: t.default.footerDivider
            }), (0, a.jsxs)("div", {
              className: t.default.footerBottom,
              children: [(0, a.jsx)("span", {
                className: t.default.footerCopyright,
                children: u("common.footer.footer_copyright_text", {
                  year: h
                })
              }), (0, a.jsxs)("div", {
                className: t.default.footerSocials,
                children: [(0, a.jsx)(n.default, {
                  href: "https://discord.gg/guns",
                  target: "_blank",
                  children: r.default.discord
                }), (0, a.jsx)(n.default, {
                  href: "https://tiktok.com/@guns.lol",
                  target: "_blank",
                  children: r.default.tiktok
                }), (0, a.jsx)(n.default, {
                  href: "https://x.com/gunsdotlol",
                  target: "_blank",
                  children: r.default.x
                }), (0, a.jsx)(n.default, {
                  href: "https://t.me/gunsbio",
                  target: "_blank",
                  children: r.default.telegram
                })]
              })]
            })]
          })]
        })]
      })]
    })
  }
  let h = {
    signUp: (0, a.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, a.jsx)("path", {
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M20 12H4m0 0l6-6m-6 6l6 6"
      })
    }),
    hamburger: (0, a.jsxs)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "40",
      height: "40",
      viewBox: "0 0 24 24",
      children: [(0, a.jsx)("path", {
        d: "M3,6H21",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round"
      }), (0, a.jsx)("path", {
        d: "M3,12H21",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round"
      }), (0, a.jsx)("path", {
        d: "M3,18H21",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round"
      })]
    }),
    profileViews: (0, a.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, a.jsx)("path", {
        fill: "currentColor",
        d: "M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
      })
    }),
    users: (0, a.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, a.jsx)("path", {
        fill: "currentColor",
        d: "M14 19.5c0-2 1.1-3.8 2.7-4.7c-1.3-.5-2.9-.8-4.7-.8c-4.4 0-8 1.8-8 4v2h10zm5.5-3.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5M16 8c0 2.2-1.8 4-4 4s-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4"
      })
    }),
    fileUploads: (0, a.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, a.jsx)("path", {
        fill: "currentColor",
        d: "M15 1H4c-1.1 0-2 .9-2 2v13c0 .55.45 1 1 1s1-.45 1-1V4c0-.55.45-1 1-1h10c.55 0 1-.45 1-1s-.45-1-1-1m.59 4.59l4.83 4.83c.37.37.58.88.58 1.41V21c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h6.17c.53 0 1.04.21 1.42.59M15 12h4.5L14 6.5V11c0 .55.45 1 1 1"
      })
    }),
    subscribers: (0, a.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 512 512",
      children: (0, a.jsx)("path", {
        fill: "currentColor",
        d: "M121.72 32a4 4 0 0 0-3.72 5.56l2.3 5.43l40.7 94.9a4 4 0 0 0 6.88.82L243 38.4a4 4 0 0 0-3.2-6.4Zm298.21 26.06l-41.28 96.37a4 4 0 0 0 3.68 5.57h101a4 4 0 0 0 3.4-6.11L427 57.53a4 4 0 0 0-7.07.53M85 57.57l-59.71 96.32a4 4 0 0 0 3.4 6.11h101a4 4 0 0 0 3.67-5.58L92 58.1a4 4 0 0 0-7-.53M393.27 32H267.82a1.94 1.94 0 0 0-1.56 3.11l79.92 106.46a1.94 1.94 0 0 0 3.34-.4L391.6 43l3.4-8.34a1.92 1.92 0 0 0-1.7-2.66ZM239 448l-89.43-253.49A3.78 3.78 0 0 0 146 192H25.7a3.72 3.72 0 0 0-2.95 6l216 279.81a5.06 5.06 0 0 0 6.39 1.37a5 5 0 0 0 2.39-6.08Zm247.3-256H366a3.75 3.75 0 0 0-3.54 2.51l-98.2 278.16a5.21 5.21 0 0 0 2.42 6.31a5.22 5.22 0 0 0 6.61-1.39L489.25 198a3.72 3.72 0 0 0-2.95-6M259.2 78.93l56 74.67a4 4 0 0 1-3.2 6.4H200a4 4 0 0 1-3.2-6.4l56-74.67a4 4 0 0 1 6.4 0m-7 310.31l-67.7-191.91a4 4 0 0 1 3.77-5.33h135.46a4 4 0 0 1 3.77 5.33l-67.73 191.91a4 4 0 0 1-7.54 0Z"
      })
    }),
    popoverArrow: (0, a.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "6 8.59 12 7.41",
      children: (0, a.jsx)("path", {
        fill: "currentColor",
        d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z"
      })
    }),
    badge: (0, a.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 512 512",
      children: (0, a.jsx)("path", {
        fill: "currentColor",
        d: "M121.72 32a4 4 0 0 0-3.72 5.56l2.3 5.43l40.7 94.9a4 4 0 0 0 6.88.82L243 38.4a4 4 0 0 0-3.2-6.4Zm298.21 26.06l-41.28 96.37a4 4 0 0 0 3.68 5.57h101a4 4 0 0 0 3.4-6.11L427 57.53a4 4 0 0 0-7.07.53M85 57.57l-59.71 96.32a4 4 0 0 0 3.4 6.11h101a4 4 0 0 0 3.67-5.58L92 58.1a4 4 0 0 0-7-.53M393.27 32H267.82a1.94 1.94 0 0 0-1.56 3.11l79.92 106.46a1.94 1.94 0 0 0 3.34-.4L391.6 43l3.4-8.34a1.92 1.92 0 0 0-1.7-2.66ZM239 448l-89.43-253.49A3.78 3.78 0 0 0 146 192H25.7a3.72 3.72 0 0 0-2.95 6l216 279.81a5.06 5.06 0 0 0 6.39 1.37a5 5 0 0 0 2.39-6.08Zm247.3-256H366a3.75 3.75 0 0 0-3.54 2.51l-98.2 278.16a5.21 5.21 0 0 0 2.42 6.31a5.22 5.22 0 0 0 6.61-1.39L489.25 198a3.72 3.72 0 0 0-2.95-6M259.2 78.93l56 74.67a4 4 0 0 1-3.2 6.4H200a4 4 0 0 1-3.2-6.4l56-74.67a4 4 0 0 1 6.4 0m-7 310.31l-67.7-191.91a4 4 0 0 1 3.77-5.33h135.46a4 4 0 0 1 3.77 5.33l-67.73 191.91a4 4 0 0 1-7.54 0Z"
      })
    }),
    fonts: (0, a.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, a.jsx)("path", {
        fill: "currentColor",
        d: "M16.08 6.63c-.07-.1-.15-.19-.23-.27h-.01a2.85 2.85 0 0 0-1.11-.69l-1.38-.45c-.1-.04-.2-.11-.26-.2a.5.5 0 0 1-.1-.31a.5.5 0 0 1 .1-.31c.06-.09.15-.16.26-.2l1.38-.45c.42-.14.79-.38 1.1-.69c.29-.3.52-.67.67-1.07v-.03l.45-1.38c.04-.1.11-.2.2-.26a.5.5 0 0 1 .31-.1c.11 0 .22.04.31.1c.09.06.16.15.2.26l.45 1.38c.14.42.38.8.69 1.11c.31.32.69.55 1.11.69l1.38.45h.03c.1.04.19.11.26.2c.07.09.1.2.1.31a.5.5 0 0 1-.1.31c-.06.09-.15.16-.26.2l-1.38.45c-.42.14-.8.38-1.11.69c-.32.31-.55.69-.69 1.11l-.46 1.38v.03c-.04.09-.11.17-.19.23a.5.5 0 0 1-.31.1a.5.5 0 0 1-.31-.1a.524.524 0 0 1-.2-.26l-.45-1.38c-.1-.31-.25-.6-.45-.85Zm7.7 3.8l-.77-.24c-.24-.08-.45-.21-.62-.38c-.17-.18-.3-.39-.38-.62l-.25-.76a.327.327 0 0 0-.11-.15a.272.272 0 0 0-.34 0c-.05.04-.09.09-.11.15l-.25.76c-.07.23-.2.44-.37.61c-.17.17-.38.3-.61.38l-.77.25c-.06.02-.11.06-.15.11a.272.272 0 0 0 0 .34c.04.05.09.09.15.11l.77.25c.23.07.45.21.62.38c.17.17.3.39.38.62l.25.76c.02.06.06.11.11.15a.272.272 0 0 0 .34 0c.05-.04.09-.09.11-.15l.25-.76c.08-.24.21-.45.38-.62c.18-.17.39-.3.62-.38l.77-.25c.06-.02.11-.06.15-.11c.04-.05.05-.11.05-.17c0-.06-.01-.12-.05-.17c-.04-.05-.106-.08-.17-.11Zm-4.24 2.28l.26.8c.05.14.12.25.2.37v6.08c0 1.24-1.01 2.25-2.25 2.25H6.25C5.01 22.21 4 21.2 4 19.96V4.46c0-1.24 1.01-2.25 2.25-2.25h8.26c-.07.04-.15.08-.22.11l-1.42.46c-.4.15-.75.4-.99.75a2 2 0 0 0-.38 1.18c0 .43.13.84.37 1.18c.078.112.178.202.275.289l.045.041H7.75c-.41 0-.75.34-.75.75s.34.75.75.75h7.24l.035.058a.96.96 0 0 1 .085.162l.46 1.41c.14.4.4.74.75.99c.35.24.76.37 1.18.37c0 .37.11.73.33 1.04c.22.31.52.53.91.67l.8.29Zm-11.79 5h8.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-8.5c-.41 0-.75.34-.75.75s.34.75.75.75Zm0-5h8.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-8.5c-.41 0-.75.34-.75.75s.34.75.75.75Z"
      })
    }),
    alias: (0, a.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, a.jsx)("path", {
        fill: "currentColor",
        d: "M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15q.4 0 .775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21H3ZM17.6 7.8L19 6.4L17.6 5l-1.4 1.4l1.4 1.4Z"
      })
    }),
    layouts: (0, a.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, a.jsxs)("g", {
        fill: "none",
        children: [(0, a.jsx)("path", {
          d: "M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"
        }), (0, a.jsx)("path", {
          fill: "currentColor",
          d: "M9 10v11H5a2 2 0 0 1-1.995-1.85L3 19v-9h6Zm12 0v9a2 2 0 0 1-1.85 1.995L19 21h-8V10h10Zm-2-7a2 2 0 0 1 2 2v3H3V5a2 2 0 0 1 2-2h14Z"
        })]
      })
    }),
    effects: (0, a.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 512 512",
      children: (0, a.jsx)("path", {
        fill: "currentColor",
        d: "M208 512a24.84 24.84 0 0 1-23.34-16l-39.84-103.6a16.06 16.06 0 0 0-9.19-9.19L32 343.34a25 25 0 0 1 0-46.68l103.6-39.84a16.06 16.06 0 0 0 9.19-9.19L184.66 144a25 25 0 0 1 46.68 0l39.84 103.6a16.06 16.06 0 0 0 9.19 9.19l103 39.63a25.49 25.49 0 0 1 16.63 24.1a24.82 24.82 0 0 1-16 22.82l-103.6 39.84a16.06 16.06 0 0 0-9.19 9.19L231.34 496A24.84 24.84 0 0 1 208 512Zm66.85-254.84ZM88 176a14.67 14.67 0 0 1-13.69-9.4l-16.86-43.84a7.28 7.28 0 0 0-4.21-4.21L9.4 101.69a14.67 14.67 0 0 1 0-27.38l43.84-16.86a7.31 7.31 0 0 0 4.21-4.21L74.16 9.79A15 15 0 0 1 86.23.11a14.67 14.67 0 0 1 15.46 9.29l16.86 43.84a7.31 7.31 0 0 0 4.21 4.21l43.84 16.86a14.67 14.67 0 0 1 0 27.38l-43.84 16.86a7.28 7.28 0 0 0-4.21 4.21l-16.86 43.84A14.67 14.67 0 0 1 88 176Zm312 80a16 16 0 0 1-14.93-10.26l-22.84-59.37a8 8 0 0 0-4.6-4.6l-59.37-22.84a16 16 0 0 1 0-29.86l59.37-22.84a8 8 0 0 0 4.6-4.6l22.67-58.95a16.45 16.45 0 0 1 13.17-10.57a16 16 0 0 1 16.86 10.15l22.84 59.37a8 8 0 0 0 4.6 4.6l59.37 22.84a16 16 0 0 1 0 29.86l-59.37 22.84a8 8 0 0 0-4.6 4.6l-22.84 59.37A16 16 0 0 1 400 256Z"
      })
    }),
    typewriterEffect: (0, a.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, a.jsx)("path", {
        fill: "currentColor",
        d: "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M5 13v2h11v-2H5m0-4v2h14V9H5Z"
      })
    }),
    camera: (0, a.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 16 16",
      children: (0, a.jsx)("path", {
        fill: "currentColor",
        d: "m10.878.282l.348 1.071a2.205 2.205 0 0 0 1.398 1.397l1.072.348l.021.006a.423.423 0 0 1 0 .798l-1.071.348a2.208 2.208 0 0 0-1.399 1.397l-.348 1.07a.423.423 0 0 1-.798 0l-.348-1.07a2.204 2.204 0 0 0-1.399-1.403l-1.072-.348a.423.423 0 0 1 0-.798l1.072-.348a2.208 2.208 0 0 0 1.377-1.397l.348-1.07a.423.423 0 0 1 .799 0Zm4.905 7.931l-.765-.248a1.577 1.577 0 0 1-1-.999l-.248-.764a.302.302 0 0 0-.57 0l-.25.764a1.576 1.576 0 0 1-.983.999l-.765.248a.303.303 0 0 0 0 .57l.765.249a1.578 1.578 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.576 1.576 0 0 1 .999-.999l.765-.248a.303.303 0 0 0 0-.57l-.015-.004ZM13.502 12a1.328 1.328 0 0 1-.746-.23c-.22-.16-.38-.371-.48-.621l-.26-.802a.519.519 0 0 0-.14-.22a.635.635 0 0 0-.22-.14l-.748-.246A3.001 3.001 0 0 1 5 9a3 3 0 0 1 3.846-2.88l-.053-.16c-.09-.23-.18-.36-.29-.47a1.311 1.311 0 0 0-.471-.291l-1.061-.35c-.3-.1-.54-.291-.71-.532a1.431 1.431 0 0 1-.208-1.207a1.5 1.5 0 0 0-.777.72L4.691 5H4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-.079a1.45 1.45 0 0 1-.498.079ZM10 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"
      })
    }),
    more: (0, a.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, a.jsx)("path", {
        fill: "currentColor",
        d: "M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"
      })
    })
  };

  function m({
    data: e
  }) {
    let o = !!e?.session?.userId,
      [r, s] = (0, l.useState)(!1),
      [c, u] = (0, l.useState)(!1),
      m = (0, l.useRef)(null),
      p = (0, l.useRef)(null),
      g = (0, d.useT)(),
      f = (0, d.useLocaleHref)(),
      _ = (0, l.useMemo)(() => [{
        label: g("common.header.navigation.help_center"),
        href: "https://help.guns.lol",
        external: !0
      }, {
        label: g("common.header.navigation.discord"),
        href: "https://discord.gg/guns",
        external: !0
      }, {
        label: g("common.header.navigation.leaderboard"),
        href: "/leaderboard"
      }, {
        label: g("common.header.navigation.pricing"),
        href: f("/pricing")
      }], []),
      x = o ? [{
        label: g("common.header.navigation.dashboard"),
        href: "/account",
        highlighted: !0
      }] : [{
        label: g("common.header.navigation.login"),
        href: f("/login")
      }, {
        label: g("common.header.navigation.sign_up"),
        href: f("/register?ref=header"),
        highlighted: !0
      }],
      v = o ? t.default.desktopNav : t.default.desktopNavExpanded,
      j = e => (0, a.jsx)(n.default, {
        href: e.href,
        target: e.external ? "_blank" : void 0,
        rel: e.external ? "noreferrer" : void 0,
        className: e.highlighted ? t.default.highlightedLink : void 0,
        children: e.label
      }, e.label);
    (0, l.useEffect)(() => {
      let e = () => {
        if (!m.current || !p.current) return;
        let e = m.current.getBoundingClientRect(),
          a = p.current.getBoundingClientRect();
        0 === a.width ? u(!0) : u(a.left - e.right < 24)
      };
      e(), window.addEventListener("resize", e);
      let a = null;
      return "undefined" != typeof ResizeObserver && (a = new ResizeObserver(e), m.current && a.observe(m.current), p.current && a.observe(p.current)), () => {
        window.removeEventListener("resize", e), a?.disconnect()
      }
    }, [o]);
    let y = (0, l.useRef)(c),
      w = [t.default.header, r ? t.default.active : "", c ? t.default.forceMobileNav : ""].filter(Boolean).join(" ");
    return (0, l.useEffect)(() => {
      y.current && !c && s(!1), y.current = c
    }, [c]), (0, a.jsx)("header", {
      className: `${t.default.headerWrapper} ${r?t.default.headerWrapperActive:""}`,
      children: (0, a.jsxs)("div", {
        className: w,
        children: [(0, a.jsx)("div", {
          className: t.default.blurBackground
        }), (0, a.jsx)(n.default, {
          href: "/",
          className: t.default.leftSideHeader,
          ref: m,
          children: (0, a.jsxs)("div", {
            className: t.default.logo,
            children: [(0, a.jsx)("img", {
              src: "https://assets.guns.lol/guns_logo_no_background_cropped.png",
              alt: "guns.lol logo"
            }), (0, a.jsxs)("h1", {
              children: ["guns", (0, a.jsx)("span", {
                children: "."
              }), "lol"]
            })]
          })
        }), (0, a.jsxs)("nav", {
          className: v,
          ref: p,
          children: [_.map(j), x.map(j)]
        }), (0, a.jsx)("span", {
          className: t.default.mobileMenuButton,
          onClick: () => s(e => !e),
          children: h.hamburger
        }), (0, a.jsxs)("div", {
          className: `${t.default.mobileNavigation} ${r?t.default.mobileNavigationOpen:""}`,
          children: [(0, a.jsx)("div", {
            className: t.default.mobileNavGroup,
            children: _.map(j)
          }), (0, a.jsxs)("div", {
            className: t.default.mobileNavGroup,
            children: [(0, a.jsx)("div", {
              className: t.default.mobileNavLanguage,
              children: (0, a.jsx)(i.default, {})
            }), x.map(j)]
          })]
        })]
      })
    })
  }

  function p({
    children: e,
    data: t,
    statsData: o
  }) {
    let r = (1e4 * Math.round(o.users / 1e4)).toLocaleString("en-US");
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(m, {
        data: t
      }), e, (0, a.jsx)(u, {
        formattedUsers: r
      })]
    })
  }
  e.s(["default", 0, h], 42795), e.s(["default", () => p], 19754)
}, 2076, e => {
  "use strict";
  var a = e.i(48277),
    t = e.i(50250),
    o = e.i(19754),
    r = e.i(16506),
    n = e.i(17435);

  function l({
    data: e
  }) {
    let l = (0, n.useLang)(),
      s = (0, n.useT)(),
      i = e.statsData,
      c = e.tokenData,
      d = {
        Overview: (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("p", {
            children: "guns.lol respects intellectual property rights and expects users to do the same. This policy describes how to submit copyright notices, how we handle counter-notifications, and how we address repeat infringement. We follow the requirements of the Digital Millennium Copyright Act (DMCA) and comparable laws where applicable."
          }), (0, a.jsx)("p", {
            children: "Nothing in this policy constitutes legal advice. If you are unsure whether material is infringing or whether your use is permitted (for example, fair use or a license), you should seek legal counsel before filing."
          })]
        }),
        "Copyright Contact": (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsxs)("p", {
            children: ["Our designated point of contact for copyright matters is: ", (0, a.jsx)(r.default, {
              href: "mailto:legal@guns.lol",
              children: "legal@guns.lol"
            })]
          }), (0, a.jsx)("p", {
            children: "We accept notices and counter-notices by email only. Notices that do not substantially comply with the requirements below may be delayed or rejected."
          })]
        }),
        "DMCA Takedown Notice": (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("p", {
            children: "If you believe content on guns.lol infringes your copyright, send a written notice to our designated agent that includes all of the following:"
          }), (0, a.jsxs)("ul", {
            children: [(0, a.jsx)("li", {
              children: "A clear identification of the copyrighted work claimed to be infringed. If multiple works are involved, provide a representative list."
            }), (0, a.jsx)("li", {
              children: "The exact URL(s) on guns.lol containing the material you claim is infringing, sufficient for us to locate it."
            }), (0, a.jsx)("li", {
              children: "Your full name and reliable contact information, including an email address for follow-up."
            }), (0, a.jsx)("li", {
              children: "A statement that you have a good-faith belief the use is not authorized by the copyright owner, its agent, or the law."
            }), (0, a.jsx)("li", {
              children: "A statement that the information in the notice is accurate and, under penalty of perjury, that you are the copyright owner or authorized to act on the owner's behalf."
            }), (0, a.jsx)("li", {
              children: "Your physical or electronic signature."
            })]
          }), (0, a.jsxs)("p", {
            children: ["Send to: ", (0, a.jsx)(r.default, {
              href: "mailto:legal@guns.lol",
              children: "legal@guns.lol"
            }), ". By submitting a notice, you agree we may forward its contents (including your contact details) to the user who posted the material, and to publish or share redacted versions for transparency or legal compliance."]
          }), (0, a.jsx)("p", {
            children: "Upon receiving a valid notice, we generally disable or remove the reported material and notify the user. We may also suspend related functionality while a claim is reviewed."
          })]
        }),
        "Counter-Notification": (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("p", {
            children: "If your content was removed due to a DMCA notice and you believe the removal was a mistake or misidentification, you may send a counter-notification to our designated agent that includes all of the following:"
          }), (0, a.jsxs)("ul", {
            children: [(0, a.jsx)("li", {
              children: "Identification of the material that was removed and the location (URL) where it appeared before removal."
            }), (0, a.jsx)("li", {
              children: "Your full name and reliable contact information, including an email address for follow-up."
            }), (0, a.jsx)("li", {
              children: "A statement, under penalty of perjury, that you have a good-faith belief the content was removed or disabled as a result of mistake or misidentification."
            }), (0, a.jsx)("li", {
              children: "Your consent to the jurisdiction of the appropriate courts for your address, and your acceptance of service of process from the person who provided the original notice or that person's agent."
            }), (0, a.jsx)("li", {
              children: "Your physical or electronic signature."
            })]
          }), (0, a.jsxs)("p", {
            children: ["Send to: ", (0, a.jsx)(r.default, {
              href: "mailto:legal@guns.lol",
              children: "legal@guns.lol"
            }), ". If we receive a valid counter-notification, we will forward it to the original claimant. Unless the claimant informs us that they have filed an action seeking a court order, we may restore the material within a reasonable time."]
          })]
        }),
        "Restoration, Escalation, and Preservation": (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)("p", {
            children: "We restore material in accordance with applicable law after a valid counter-notification, unless the claimant initiates court action. We may retain removed material temporarily to comply with legal obligations, preserve evidence, or process the dispute. We may also limit account functionality while a dispute is pending."
          })
        }),
        "Repeat Infringer Policy": (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)("p", {
            children: "Accounts with repeated or egregious copyright violations may be suspended or terminated. We consider factors such as the number and validity of notices, failure to respond, and prior enforcement history. We may also remove linked content, disable features, or apply other measures to deter abuse."
          })
        }),
        "Abuse of Process": (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)("p", {
            children: "We may reject notices or counter-notices that are incomplete, abusive, automated, deceptive, or intended to suppress lawful speech. We reserve the right to limit or block submissions from senders who repeatedly file defective or bad-faith claims."
          })
        })
      };
    return (0, a.jsx)(a.Fragment, {
      children: (0, a.jsx)(o.default, {
        data: c,
        statsData: i,
        children: (0, a.jsx)("div", {
          className: t.default.termsOfServiceWrapper,
          children: (0, a.jsxs)("div", {
            className: t.default.termsOfService,
            children: ["en" !== l && (0, a.jsx)("div", {
              className: t.default.notification,
              children: (0, a.jsx)("h1", {
                children: s("common.legal.notification_text")
              })
            }), (0, a.jsxs)("div", {
              className: t.default.description,
              children: [(0, a.jsx)("h1", {
                children: "Copyright Policy and DMCA Compliance"
              }), (0, a.jsx)("h3", {
                children: "guns.lol responds to valid copyright complaints and counter-notifications under the DMCA and comparable laws. We remove or disable access to allegedly infringing material, notify the affected user, and, where appropriate, restore content after a valid counter-notification unless legal action is filed."
              })]
            }), (0, a.jsx)("div", {
              className: t.default.terms,
              children: Object.entries(d).map(([e, o]) => (0, a.jsxs)("div", {
                className: t.default.term,
                children: [(0, a.jsx)("h1", {
                  children: e
                }), (0, a.jsx)("div", {
                  className: t.default.termsValue,
                  children: o
                })]
              }, e))
            }), (0, a.jsxs)("div", {
              className: t.default.legalDescription,
              children: [(0, a.jsxs)("h3", {
                children: ["Questions or submissions:", " ", (0, a.jsx)(r.default, {
                  href: "mailto:legal@guns.lol",
                  children: "legal@guns.lol"
                }), ". For general support:", " ", (0, a.jsx)(r.default, {
                  href: "mailto:support@guns.lol",
                  children: "support@guns.lol"
                }), "."]
              }), (0, a.jsx)("span", {
                className: t.default.lastUpdate,
                children: "Last update: 10/25/2025"
              })]
            })]
          })
        })
      })
    })
  }
  e.s(["default", () => l])
}]);