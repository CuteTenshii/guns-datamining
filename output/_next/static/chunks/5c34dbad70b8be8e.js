(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 52202, e => {
  "use strict";
  var t = e.i(48277),
    a = e.i(16506),
    o = e.i(17435);

  function r({
    href: e,
    asTag: r,
    locale: n,
    children: s,
    ...i
  }) {
    let l = n || (0, o.useLang)();
    if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) return r ? (0, t.jsx)("a", {
      href: e,
      ...i,
      children: s
    }) : (0, t.jsx)(a.default, {
      href: e,
      ...i,
      children: s
    });
    let c = "en" == l ? `${e.startsWith("/")?"":"/"}${e}` : `/${l}${e.startsWith("/")?"":"/"}${e}`;
    return r ? (0, t.jsx)("a", {
      href: c,
      ...i,
      children: s
    }) : (0, t.jsx)(a.default, {
      href: c,
      ...i,
      children: s
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
  var t = e.i(48277),
    a = e.i(30668),
    o = e.i(89638);
  let r = (0, a.createContext)(null),
    n = (0, a.createContext)(null),
    s = (...e) => e.filter(Boolean).join(" "),
    i = () => {
      let e = (0, a.useContext)(r);
      if (!e) throw Error("Accordion components must be used within <Accordion>");
      return e
    },
    l = () => {
      let e = (0, a.useContext)(n);
      if (!e) throw Error("Accordion.Item subcomponents must be used within <Accordion.Item>");
      return e
    },
    c = (e, t) => t ? Array.isArray(e) ? e : "string" == typeof e ? [e] : [] : Array.isArray(e) ? e[0] ?? null : "string" == typeof e ? e : e ?? null,
    d = Object.assign(({
      children: e,
      value: n,
      defaultValue: i,
      multiple: l = !1,
      onChange: d,
      className: u = "",
      ...h
    }) => {
      let m = void 0 !== n,
        p = m ? c(n, l) : null,
        [g, f] = (0, a.useState)(() => c(i, l)),
        y = m ? p : g,
        _ = (0, a.useCallback)(e => l ? Array.isArray(y) && y.includes(e) : y === e, [y, l]),
        v = (0, a.useCallback)(e => {
          let t = ((e, t, a) => {
            if (a) {
              let a = Array.isArray(e) ? e : [];
              return a.includes(t) ? a.filter(e => e !== t) : [...a, t]
            }
            return e === t ? null : t
          })(y, e, l);
          m || f(t), d?.(t)
        }, [y, m, l, d]),
        x = (0, a.useMemo)(() => ({
          multiple: l,
          currentValue: y,
          toggleItem: v,
          isItemActive: _
        }), [l, y, v, _]);
      return (0, t.jsx)(r.Provider, {
        value: x,
        children: (0, t.jsx)("div", {
          className: s(o.default.accordion, u),
          ...h,
          children: e
        })
      })
    }, {
      Item: ({
        value: e,
        children: r,
        className: l = "",
        ...c
      }) => {
        let d = i(),
          u = (0, a.useId)(),
          h = (0, a.useRef)(`${u}-control`),
          m = (0, a.useRef)(`${u}-panel`),
          p = d.isItemActive(e),
          g = (0, a.useMemo)(() => ({
            value: e,
            controlIdRef: h,
            panelIdRef: m
          }), [e]);
        return (0, t.jsx)(n.Provider, {
          value: g,
          children: (0, t.jsx)("div", {
            ...c,
            className: s(o.default.item, l),
            "data-active": p || void 0,
            children: r
          })
        })
      },
      Control: (0, a.forwardRef)(function({
        children: e,
        className: a = "",
        onClick: r,
        disabled: n,
        id: c,
        ...d
      }, u) {
        let h = i(),
          m = l(),
          p = c ?? m.controlIdRef.current;
        m.controlIdRef.current = p;
        let g = h.isItemActive(m.value);
        return (0, t.jsx)("button", {
          type: "button",
          ...d,
          id: p,
          ref: u,
          className: s(o.default.control, a),
          "data-active": g || void 0,
          disabled: n,
          onClick: e => {
            r?.(e), e.defaultPrevented || n || h.toggleItem(m.value)
          },
          children: e
        })
      }),
      Panel: (0, a.forwardRef)(function({
        children: e,
        className: r = "",
        id: n,
        ...c
      }, d) {
        let u = i(),
          h = l(),
          m = n ?? h.panelIdRef.current;
        h.panelIdRef.current = m;
        let p = u.isItemActive(h.value),
          g = (0, a.useRef)(null),
          [f, y] = (0, a.useState)(0),
          [_, v] = (0, a.useState)(!1);
        (0, a.useEffect)(() => {
          let e = g.current;
          if (!e) return;
          let t = window,
            a = () => {
              y(e.scrollHeight), v(!0)
            };
          if (a(), void 0 !== t.ResizeObserver) {
            let o = new t.ResizeObserver(a);
            return o.observe(e), () => o.disconnect()
          }
          return t.addEventListener("resize", a), () => t.removeEventListener("resize", a)
        }, []);
        let x = p ? _ && f > 0 ? `${f}px` : void 0 : "0px";
        return (0, t.jsx)("div", {
          ...c,
          id: m,
          ref: d,
          className: s(o.default.panel, r),
          "data-active": p || void 0,
          children: (0, t.jsx)("div", {
            ref: g,
            className: o.default.content,
            style: {
              overflow: "hidden",
              maxHeight: x,
              opacity: +!!p,
              transition: _ ? "max-height 220ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms ease" : void 0
            },
            children: (0, t.jsx)("div", {
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
  var t = e.i(48277),
    a = e.i(38371),
    o = e.i(23614),
    r = e.i(33544),
    n = e.i(16506),
    s = e.i(30668),
    i = e.i(82724),
    l = e.i(65383),
    c = e.i(52202),
    d = e.i(17435);

  function u({
    formattedUsers: e
  }) {
    let u = (0, d.useT)(),
      h = new Date().getFullYear(),
      [m, p] = (0, s.useState)(""),
      [g, f] = (0, s.useState)("up"),
      y = [{
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
      }].map(e => (0, t.jsxs)(i.Accordion.Item, {
        value: e.question,
        children: [(0, t.jsx)(i.Accordion.Control, {
          children: e.question
        }), (0, t.jsx)(i.Accordion.Panel, {
          children: e.answer
        })]
      }, e.question));
    (0, s.useEffect)(() => {
      (async () => {
        let e = await fetch("/api/statusLogs?excludeLogs=true", {
          cache: "no-store"
        });
        f((await e.json()).currentStatus)
      })()
    }, []);
    let _ = {
      up: (0, t.jsx)("span", {
        className: a.default.statusUp,
        children: r.default.statusDot
      }),
      down: (0, t.jsx)("span", {
        className: a.default.statusDown,
        children: r.default.statusDot
      }),
      partial: (0, t.jsx)("span", {
        className: a.default.statusPartial,
        children: r.default.statusDot
      })
    };
    return (0, t.jsxs)("div", {
      children: [(0, t.jsxs)("div", {
        className: a.default.faq,
        children: [(0, t.jsx)("h1", {
          className: a.default.faqText,
          children: u("common.footer.faq.title")
        }), (0, t.jsx)(i.Accordion, {
          children: y
        })]
      }), (0, t.jsxs)("div", {
        className: a.default.footerWrapper,
        children: [(0, t.jsx)("div", {
          className: a.default.gunsBannerWrapper,
          children: (0, t.jsx)("div", {
            className: a.default.gunsBanner,
            children: (0, t.jsxs)("div", {
              className: a.default.gunsBannerDescription,
              children: [(0, t.jsx)("h1", {
                children: u("common.footer.banner.title")
              }), (0, t.jsx)("h3", {
                children: u("common.footer.banner.description", {
                  users: e
                })
              }), (0, t.jsxs)("div", {
                className: a.default.gunsBannerButtons,
                children: [(0, t.jsx)("div", {
                  className: o.default.inputContainerWrapper,
                  children: (0, t.jsxs)("div", {
                    className: `${o.default.inputWrapperDiv} ${o.default.inputWrapperURL}`,
                    children: [(0, t.jsx)("span", {
                      className: `${o.default.inputWrapperSpan}`,
                      style: {
                        position: "absolute"
                      },
                      children: (0, t.jsx)("h1", {
                        children: "guns.lol/"
                      })
                    }), (0, t.jsx)("input", {
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
                }), (0, t.jsx)(c.default, {
                  href: `/register?claim=${m}&ref=guns_footer_banner`,
                  className: `${o.default.claimNow}`,
                  children: u("common.footer.banner.claim_now_text")
                })]
              })]
            })
          })
        }), (0, t.jsxs)("div", {
          className: a.default.footerContainer,
          children: [(0, t.jsxs)("div", {
            className: a.default.footer,
            children: [(0, t.jsxs)("div", {
              className: a.default.footerLeft,
              children: [(0, t.jsxs)("div", {
                className: a.default.serviceWrapper,
                children: [(0, t.jsxs)("div", {
                  className: a.default.logoWrapper,
                  children: [(0, t.jsxs)("div", {
                    className: a.default.logoFooter,
                    children: [(0, t.jsx)("img", {
                      src: "https://assets.guns.lol/guns_logo_no_background_cropped.png",
                      alt: ""
                    }), (0, t.jsxs)("h1", {
                      children: ["guns", (0, t.jsx)("span", {
                        children: "."
                      }), "lol"]
                    })]
                  }), (0, t.jsx)(n.default, {
                    href: "https://status.guns.lol",
                    target: "_blank",
                    children: (0, t.jsxs)("span", {
                      className: a.default.systemStatus,
                      children: [_[g], " ", u("common.footer.banner.system_status_text")]
                    })
                  })]
                }), (0, t.jsx)("span", {
                  children: u("common.footer.footer_description")
                })]
              }), (0, t.jsx)("div", {
                className: a.default.languageSelectionFooter,
                children: (0, t.jsx)(l.default, {})
              })]
            }), (0, t.jsxs)("div", {
              className: a.default.footerRight,
              children: [(0, t.jsxs)("div", {
                className: a.default.categorySeperator,
                children: [(0, t.jsxs)("div", {
                  className: a.default.linkCategory,
                  children: [(0, t.jsx)("h1", {
                    children: u("common.footer.footer_categories.general")
                  }), (0, t.jsxs)("div", {
                    className: a.default.links,
                    children: [(0, t.jsx)(c.default, {
                      href: "/login",
                      children: u("common.footer.footer_categories_links.login")
                    }), (0, t.jsx)(c.default, {
                      href: "/register?ref=footer",
                      children: u("common.footer.footer_categories_links.sign_up")
                    }), (0, t.jsx)(c.default, {
                      href: "/pricing",
                      children: u("common.footer.footer_categories_links.pricing")
                    }), (0, t.jsx)(c.default, {
                      href: "/recovery",
                      children: u("common.footer.footer_categories_links.recover_account")
                    }), (0, t.jsx)(c.default, {
                      href: "/leaderboard",
                      children: u("common.footer.footer_categories_links.leaderboard")
                    }), (0, t.jsx)(n.default, {
                      href: "https://status.guns.lol",
                      target: "_blank",
                      children: u("common.footer.footer_categories_links.website_status")
                    })]
                  })]
                }), (0, t.jsxs)("div", {
                  className: a.default.linkCategory,
                  children: [(0, t.jsx)("h1", {
                    children: u("common.footer.footer_categories.resources")
                  }), (0, t.jsxs)("div", {
                    className: a.default.links,
                    children: [(0, t.jsx)(n.default, {
                      href: "https://help.guns.lol",
                      target: "_blank",
                      children: u("common.footer.footer_categories_links.help_center")
                    }), (0, t.jsx)(n.default, {
                      href: "https://help.guns.lol/changelog",
                      target: "_blank",
                      children: u("common.footer.footer_categories_links.changelog")
                    }), (0, t.jsx)(n.default, {
                      href: "/account/redeem",
                      children: u("common.footer.footer_categories_links.redeem_code")
                    }), (0, t.jsx)(n.default, {
                      href: "https://salad.com/store/rewards/773aded6-552a-46f0-acc9-99324ca32efe",
                      target: "_blank",
                      children: u("common.footer.footer_categories_links.salad_product")
                    }), (0, t.jsx)(n.default, {
                      href: "https://hone.gg/a/guns",
                      target: "_blank",
                      children: u("common.footer.footer_categories_links.hone_product")
                    })]
                  })]
                })]
              }), (0, t.jsxs)("div", {
                className: a.default.categorySeperator,
                children: [(0, t.jsxs)("div", {
                  className: a.default.linkCategory,
                  children: [(0, t.jsx)("h1", {
                    children: u("common.footer.footer_categories.contact")
                  }), (0, t.jsxs)("div", {
                    className: a.default.links,
                    children: [(0, t.jsx)(n.default, {
                      href: "https://discord.gg/guns",
                      target: "_blank",
                      children: u("common.footer.footer_categories_links.discord_server")
                    }), (0, t.jsx)(n.default, {
                      href: "mailto:support@guns.lol",
                      children: u("common.footer.footer_categories_links.support_email")
                    }), (0, t.jsx)(n.default, {
                      href: "mailto:business@guns.lol",
                      children: u("common.footer.footer_categories_links.business_email")
                    }), (0, t.jsx)(n.default, {
                      href: "mailto:legal@guns.lol",
                      children: u("common.footer.footer_categories_links.legal_email")
                    })]
                  })]
                }), (0, t.jsxs)("div", {
                  className: a.default.linkCategory,
                  children: [(0, t.jsx)("h1", {
                    children: u("common.footer.footer_categories.legal")
                  }), (0, t.jsxs)("div", {
                    className: a.default.links,
                    children: [(0, t.jsx)(c.default, {
                      href: "/terms",
                      children: u("common.footer.footer_categories_links.terms_of_service")
                    }), (0, t.jsx)(c.default, {
                      href: "/privacy",
                      children: u("common.footer.footer_categories_links.privacy_policy")
                    }), (0, t.jsx)(c.default, {
                      href: "/terms/copyright",
                      children: u("common.footer.footer_categories_links.copyright_policy")
                    })]
                  })]
                })]
              })]
            })]
          }), (0, t.jsxs)("div", {
            className: a.default.footerBottomWrapper,
            children: [(0, t.jsx)("div", {
              className: a.default.footerDivider
            }), (0, t.jsxs)("div", {
              className: a.default.footerBottom,
              children: [(0, t.jsx)("span", {
                className: a.default.footerCopyright,
                children: u("common.footer.footer_copyright_text", {
                  year: h
                })
              }), (0, t.jsxs)("div", {
                className: a.default.footerSocials,
                children: [(0, t.jsx)(n.default, {
                  href: "https://discord.gg/guns",
                  target: "_blank",
                  children: r.default.discord
                }), (0, t.jsx)(n.default, {
                  href: "https://tiktok.com/@guns.lol",
                  target: "_blank",
                  children: r.default.tiktok
                }), (0, t.jsx)(n.default, {
                  href: "https://x.com/gunsdotlol",
                  target: "_blank",
                  children: r.default.x
                }), (0, t.jsx)(n.default, {
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
    signUp: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M20 12H4m0 0l6-6m-6 6l6 6"
      })
    }),
    hamburger: (0, t.jsxs)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "40",
      height: "40",
      viewBox: "0 0 24 24",
      children: [(0, t.jsx)("path", {
        d: "M3,6H21",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round"
      }), (0, t.jsx)("path", {
        d: "M3,12H21",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round"
      }), (0, t.jsx)("path", {
        d: "M3,18H21",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round"
      })]
    }),
    profileViews: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
      })
    }),
    users: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M14 19.5c0-2 1.1-3.8 2.7-4.7c-1.3-.5-2.9-.8-4.7-.8c-4.4 0-8 1.8-8 4v2h10zm5.5-3.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5M16 8c0 2.2-1.8 4-4 4s-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4"
      })
    }),
    fileUploads: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M15 1H4c-1.1 0-2 .9-2 2v13c0 .55.45 1 1 1s1-.45 1-1V4c0-.55.45-1 1-1h10c.55 0 1-.45 1-1s-.45-1-1-1m.59 4.59l4.83 4.83c.37.37.58.88.58 1.41V21c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h6.17c.53 0 1.04.21 1.42.59M15 12h4.5L14 6.5V11c0 .55.45 1 1 1"
      })
    }),
    subscribers: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 512 512",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M121.72 32a4 4 0 0 0-3.72 5.56l2.3 5.43l40.7 94.9a4 4 0 0 0 6.88.82L243 38.4a4 4 0 0 0-3.2-6.4Zm298.21 26.06l-41.28 96.37a4 4 0 0 0 3.68 5.57h101a4 4 0 0 0 3.4-6.11L427 57.53a4 4 0 0 0-7.07.53M85 57.57l-59.71 96.32a4 4 0 0 0 3.4 6.11h101a4 4 0 0 0 3.67-5.58L92 58.1a4 4 0 0 0-7-.53M393.27 32H267.82a1.94 1.94 0 0 0-1.56 3.11l79.92 106.46a1.94 1.94 0 0 0 3.34-.4L391.6 43l3.4-8.34a1.92 1.92 0 0 0-1.7-2.66ZM239 448l-89.43-253.49A3.78 3.78 0 0 0 146 192H25.7a3.72 3.72 0 0 0-2.95 6l216 279.81a5.06 5.06 0 0 0 6.39 1.37a5 5 0 0 0 2.39-6.08Zm247.3-256H366a3.75 3.75 0 0 0-3.54 2.51l-98.2 278.16a5.21 5.21 0 0 0 2.42 6.31a5.22 5.22 0 0 0 6.61-1.39L489.25 198a3.72 3.72 0 0 0-2.95-6M259.2 78.93l56 74.67a4 4 0 0 1-3.2 6.4H200a4 4 0 0 1-3.2-6.4l56-74.67a4 4 0 0 1 6.4 0m-7 310.31l-67.7-191.91a4 4 0 0 1 3.77-5.33h135.46a4 4 0 0 1 3.77 5.33l-67.73 191.91a4 4 0 0 1-7.54 0Z"
      })
    }),
    popoverArrow: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "6 8.59 12 7.41",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z"
      })
    }),
    badge: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 512 512",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M121.72 32a4 4 0 0 0-3.72 5.56l2.3 5.43l40.7 94.9a4 4 0 0 0 6.88.82L243 38.4a4 4 0 0 0-3.2-6.4Zm298.21 26.06l-41.28 96.37a4 4 0 0 0 3.68 5.57h101a4 4 0 0 0 3.4-6.11L427 57.53a4 4 0 0 0-7.07.53M85 57.57l-59.71 96.32a4 4 0 0 0 3.4 6.11h101a4 4 0 0 0 3.67-5.58L92 58.1a4 4 0 0 0-7-.53M393.27 32H267.82a1.94 1.94 0 0 0-1.56 3.11l79.92 106.46a1.94 1.94 0 0 0 3.34-.4L391.6 43l3.4-8.34a1.92 1.92 0 0 0-1.7-2.66ZM239 448l-89.43-253.49A3.78 3.78 0 0 0 146 192H25.7a3.72 3.72 0 0 0-2.95 6l216 279.81a5.06 5.06 0 0 0 6.39 1.37a5 5 0 0 0 2.39-6.08Zm247.3-256H366a3.75 3.75 0 0 0-3.54 2.51l-98.2 278.16a5.21 5.21 0 0 0 2.42 6.31a5.22 5.22 0 0 0 6.61-1.39L489.25 198a3.72 3.72 0 0 0-2.95-6M259.2 78.93l56 74.67a4 4 0 0 1-3.2 6.4H200a4 4 0 0 1-3.2-6.4l56-74.67a4 4 0 0 1 6.4 0m-7 310.31l-67.7-191.91a4 4 0 0 1 3.77-5.33h135.46a4 4 0 0 1 3.77 5.33l-67.73 191.91a4 4 0 0 1-7.54 0Z"
      })
    }),
    fonts: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M16.08 6.63c-.07-.1-.15-.19-.23-.27h-.01a2.85 2.85 0 0 0-1.11-.69l-1.38-.45c-.1-.04-.2-.11-.26-.2a.5.5 0 0 1-.1-.31a.5.5 0 0 1 .1-.31c.06-.09.15-.16.26-.2l1.38-.45c.42-.14.79-.38 1.1-.69c.29-.3.52-.67.67-1.07v-.03l.45-1.38c.04-.1.11-.2.2-.26a.5.5 0 0 1 .31-.1c.11 0 .22.04.31.1c.09.06.16.15.2.26l.45 1.38c.14.42.38.8.69 1.11c.31.32.69.55 1.11.69l1.38.45h.03c.1.04.19.11.26.2c.07.09.1.2.1.31a.5.5 0 0 1-.1.31c-.06.09-.15.16-.26.2l-1.38.45c-.42.14-.8.38-1.11.69c-.32.31-.55.69-.69 1.11l-.46 1.38v.03c-.04.09-.11.17-.19.23a.5.5 0 0 1-.31.1a.5.5 0 0 1-.31-.1a.524.524 0 0 1-.2-.26l-.45-1.38c-.1-.31-.25-.6-.45-.85Zm7.7 3.8l-.77-.24c-.24-.08-.45-.21-.62-.38c-.17-.18-.3-.39-.38-.62l-.25-.76a.327.327 0 0 0-.11-.15a.272.272 0 0 0-.34 0c-.05.04-.09.09-.11.15l-.25.76c-.07.23-.2.44-.37.61c-.17.17-.38.3-.61.38l-.77.25c-.06.02-.11.06-.15.11a.272.272 0 0 0 0 .34c.04.05.09.09.15.11l.77.25c.23.07.45.21.62.38c.17.17.3.39.38.62l.25.76c.02.06.06.11.11.15a.272.272 0 0 0 .34 0c.05-.04.09-.09.11-.15l.25-.76c.08-.24.21-.45.38-.62c.18-.17.39-.3.62-.38l.77-.25c.06-.02.11-.06.15-.11c.04-.05.05-.11.05-.17c0-.06-.01-.12-.05-.17c-.04-.05-.106-.08-.17-.11Zm-4.24 2.28l.26.8c.05.14.12.25.2.37v6.08c0 1.24-1.01 2.25-2.25 2.25H6.25C5.01 22.21 4 21.2 4 19.96V4.46c0-1.24 1.01-2.25 2.25-2.25h8.26c-.07.04-.15.08-.22.11l-1.42.46c-.4.15-.75.4-.99.75a2 2 0 0 0-.38 1.18c0 .43.13.84.37 1.18c.078.112.178.202.275.289l.045.041H7.75c-.41 0-.75.34-.75.75s.34.75.75.75h7.24l.035.058a.96.96 0 0 1 .085.162l.46 1.41c.14.4.4.74.75.99c.35.24.76.37 1.18.37c0 .37.11.73.33 1.04c.22.31.52.53.91.67l.8.29Zm-11.79 5h8.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-8.5c-.41 0-.75.34-.75.75s.34.75.75.75Zm0-5h8.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-8.5c-.41 0-.75.34-.75.75s.34.75.75.75Z"
      })
    }),
    alias: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15q.4 0 .775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21H3ZM17.6 7.8L19 6.4L17.6 5l-1.4 1.4l1.4 1.4Z"
      })
    }),
    layouts: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsxs)("g", {
        fill: "none",
        children: [(0, t.jsx)("path", {
          d: "M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"
        }), (0, t.jsx)("path", {
          fill: "currentColor",
          d: "M9 10v11H5a2 2 0 0 1-1.995-1.85L3 19v-9h6Zm12 0v9a2 2 0 0 1-1.85 1.995L19 21h-8V10h10Zm-2-7a2 2 0 0 1 2 2v3H3V5a2 2 0 0 1 2-2h14Z"
        })]
      })
    }),
    effects: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 512 512",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M208 512a24.84 24.84 0 0 1-23.34-16l-39.84-103.6a16.06 16.06 0 0 0-9.19-9.19L32 343.34a25 25 0 0 1 0-46.68l103.6-39.84a16.06 16.06 0 0 0 9.19-9.19L184.66 144a25 25 0 0 1 46.68 0l39.84 103.6a16.06 16.06 0 0 0 9.19 9.19l103 39.63a25.49 25.49 0 0 1 16.63 24.1a24.82 24.82 0 0 1-16 22.82l-103.6 39.84a16.06 16.06 0 0 0-9.19 9.19L231.34 496A24.84 24.84 0 0 1 208 512Zm66.85-254.84ZM88 176a14.67 14.67 0 0 1-13.69-9.4l-16.86-43.84a7.28 7.28 0 0 0-4.21-4.21L9.4 101.69a14.67 14.67 0 0 1 0-27.38l43.84-16.86a7.31 7.31 0 0 0 4.21-4.21L74.16 9.79A15 15 0 0 1 86.23.11a14.67 14.67 0 0 1 15.46 9.29l16.86 43.84a7.31 7.31 0 0 0 4.21 4.21l43.84 16.86a14.67 14.67 0 0 1 0 27.38l-43.84 16.86a7.28 7.28 0 0 0-4.21 4.21l-16.86 43.84A14.67 14.67 0 0 1 88 176Zm312 80a16 16 0 0 1-14.93-10.26l-22.84-59.37a8 8 0 0 0-4.6-4.6l-59.37-22.84a16 16 0 0 1 0-29.86l59.37-22.84a8 8 0 0 0 4.6-4.6l22.67-58.95a16.45 16.45 0 0 1 13.17-10.57a16 16 0 0 1 16.86 10.15l22.84 59.37a8 8 0 0 0 4.6 4.6l59.37 22.84a16 16 0 0 1 0 29.86l-59.37 22.84a8 8 0 0 0-4.6 4.6l-22.84 59.37A16 16 0 0 1 400 256Z"
      })
    }),
    typewriterEffect: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M5 13v2h11v-2H5m0-4v2h14V9H5Z"
      })
    }),
    camera: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 16 16",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "m10.878.282l.348 1.071a2.205 2.205 0 0 0 1.398 1.397l1.072.348l.021.006a.423.423 0 0 1 0 .798l-1.071.348a2.208 2.208 0 0 0-1.399 1.397l-.348 1.07a.423.423 0 0 1-.798 0l-.348-1.07a2.204 2.204 0 0 0-1.399-1.403l-1.072-.348a.423.423 0 0 1 0-.798l1.072-.348a2.208 2.208 0 0 0 1.377-1.397l.348-1.07a.423.423 0 0 1 .799 0Zm4.905 7.931l-.765-.248a1.577 1.577 0 0 1-1-.999l-.248-.764a.302.302 0 0 0-.57 0l-.25.764a1.576 1.576 0 0 1-.983.999l-.765.248a.303.303 0 0 0 0 .57l.765.249a1.578 1.578 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.576 1.576 0 0 1 .999-.999l.765-.248a.303.303 0 0 0 0-.57l-.015-.004ZM13.502 12a1.328 1.328 0 0 1-.746-.23c-.22-.16-.38-.371-.48-.621l-.26-.802a.519.519 0 0 0-.14-.22a.635.635 0 0 0-.22-.14l-.748-.246A3.001 3.001 0 0 1 5 9a3 3 0 0 1 3.846-2.88l-.053-.16c-.09-.23-.18-.36-.29-.47a1.311 1.311 0 0 0-.471-.291l-1.061-.35c-.3-.1-.54-.291-.71-.532a1.431 1.431 0 0 1-.208-1.207a1.5 1.5 0 0 0-.777.72L4.691 5H4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-.079a1.45 1.45 0 0 1-.498.079ZM10 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"
      })
    }),
    more: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"
      })
    })
  };

  function m({
    data: e
  }) {
    let o = !!e?.session?.userId,
      [r, i] = (0, s.useState)(!1),
      [c, u] = (0, s.useState)(!1),
      m = (0, s.useRef)(null),
      p = (0, s.useRef)(null),
      g = (0, d.useT)(),
      f = (0, d.useLocaleHref)(),
      y = (0, s.useMemo)(() => [{
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
      _ = o ? [{
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
      v = o ? a.default.desktopNav : a.default.desktopNavExpanded,
      x = e => (0, t.jsx)(n.default, {
        href: e.href,
        target: e.external ? "_blank" : void 0,
        rel: e.external ? "noreferrer" : void 0,
        className: e.highlighted ? a.default.highlightedLink : void 0,
        children: e.label
      }, e.label);
    (0, s.useEffect)(() => {
      let e = () => {
        if (!m.current || !p.current) return;
        let e = m.current.getBoundingClientRect(),
          t = p.current.getBoundingClientRect();
        0 === t.width ? u(!0) : u(t.left - e.right < 24)
      };
      e(), window.addEventListener("resize", e);
      let t = null;
      return "undefined" != typeof ResizeObserver && (t = new ResizeObserver(e), m.current && t.observe(m.current), p.current && t.observe(p.current)), () => {
        window.removeEventListener("resize", e), t?.disconnect()
      }
    }, [o]);
    let w = (0, s.useRef)(c),
      j = [a.default.header, r ? a.default.active : "", c ? a.default.forceMobileNav : ""].filter(Boolean).join(" ");
    return (0, s.useEffect)(() => {
      w.current && !c && i(!1), w.current = c
    }, [c]), (0, t.jsx)("header", {
      className: `${a.default.headerWrapper} ${r?a.default.headerWrapperActive:""}`,
      children: (0, t.jsxs)("div", {
        className: j,
        children: [(0, t.jsx)("div", {
          className: a.default.blurBackground
        }), (0, t.jsx)(n.default, {
          href: "/",
          className: a.default.leftSideHeader,
          ref: m,
          children: (0, t.jsxs)("div", {
            className: a.default.logo,
            children: [(0, t.jsx)("img", {
              src: "https://assets.guns.lol/guns_logo_no_background_cropped.png",
              alt: "guns.lol logo"
            }), (0, t.jsxs)("h1", {
              children: ["guns", (0, t.jsx)("span", {
                children: "."
              }), "lol"]
            })]
          })
        }), (0, t.jsxs)("nav", {
          className: v,
          ref: p,
          children: [y.map(x), _.map(x)]
        }), (0, t.jsx)("span", {
          className: a.default.mobileMenuButton,
          onClick: () => i(e => !e),
          children: h.hamburger
        }), (0, t.jsxs)("div", {
          className: `${a.default.mobileNavigation} ${r?a.default.mobileNavigationOpen:""}`,
          children: [(0, t.jsx)("div", {
            className: a.default.mobileNavGroup,
            children: y.map(x)
          }), (0, t.jsxs)("div", {
            className: a.default.mobileNavGroup,
            children: [(0, t.jsx)("div", {
              className: a.default.mobileNavLanguage,
              children: (0, t.jsx)(l.default, {})
            }), _.map(x)]
          })]
        })]
      })
    })
  }

  function p({
    children: e,
    data: a,
    statsData: o
  }) {
    let r = (1e4 * Math.round(o.users / 1e4)).toLocaleString("en-US");
    return (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(m, {
        data: a
      }), e, (0, t.jsx)(u, {
        formattedUsers: r
      })]
    })
  }
  e.s(["default", 0, h], 42795), e.s(["default", () => p], 19754)
}, 76976, e => {
  "use strict";
  var t = e.i(48277),
    a = e.i(50250),
    o = e.i(19754),
    r = e.i(16506),
    n = e.i(17435);

  function s({
    data: e
  }) {
    let s = (0, n.useLang)(),
      i = (0, n.useT)(),
      l = e?.statsData,
      c = e?.tokenData,
      d = {
        "Changes To Terms": (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "guns.lol may update these Terms at any time. Changes take effect when posted to the Service or otherwise communicated to you. By continuing to access or use the Service after a change takes effect, you accept the updated Terms. Review the Terms periodically to stay informed."
          }), (0, t.jsx)("p", {
            children: "If a change materially impacts a paid offering (e.g., pricing, renewal terms, or material feature removal), we will make a reasonable effort to provide advance notice through the Service or to the email associated with your account. If you do not agree to the updated Terms, you must stop using the Service and, if applicable, cancel your paid plan before the next renewal."
          })]
        }),
        "Use of the Service": (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "You are granted access to guns.lol strictly for lawful use, and only in accordance with these Terms and all applicable laws. Any use of the Service in a manner that could damage, disable, overburden, or impair the platform, or that interferes with another user's ability to use and enjoy it, is strictly prohibited."
          }), (0, t.jsx)("p", {
            children: "When creating an account, you must not choose or use a username that is unlawful, misleading, infringing, or offensive. We reserve the right to reclaim, remove, or suspend usernames or accounts that violate these rules or create confusion with official guns.lol properties."
          }), (0, t.jsx)("p", {
            children: "You are solely responsible for your conduct and any content or links you post through the Service. By using guns.lol, you agree not to engage in any activity that could compromise the security, integrity, or reputation of the Service. In particular, you agree not to:"
          }), (0, t.jsxs)("ul", {
            children: [(0, t.jsx)("li", {
              children: "Bypass, disable, or interfere with any security, rate limit, or access-control mechanism, or attempt to probe or test system vulnerabilities."
            }), (0, t.jsx)("li", {
              children: "Impersonate any person, entity, brand, or representative of guns.lol, or falsely suggest affiliation, endorsement, or sponsorship."
            }), (0, t.jsx)("li", {
              children: "Access or attempt to access another user's account, private data, or non-public areas of the Service without authorization."
            }), (0, t.jsx)("li", {
              children: "Deploy, authorize, or benefit from automated scripts, bots, crawlers, or similar tools that interact with the Service without prior written permission."
            }), (0, t.jsx)("li", {
              children: "Upload, distribute, or host malicious code, viruses, exploits, or other harmful or unlawful content intended to disrupt, harm, or compromise data or systems."
            }), (0, t.jsx)("li", {
              children: "Post or link to sexually explicit material, content that sexualizes minors, promotes exploitation, depicts extreme violence, or otherwise violates applicable law or community standards."
            })]
          }), (0, t.jsx)("p", {
            children: "We reserve the right to suspend, restrict, remove, or terminate any account, page, or content at our discretion if we believe it violates these Terms, poses security or legal risks, or harms the Service or its users. Enforcement actions may occur with or without prior notice."
          }), (0, t.jsx)("p", {
            children: "By maintaining an account, you consent to receive essential service and administrative emails, such as password resets and important account notifications. Optional promotional or marketing messages may also be sent to you if permitted by law, and you may unsubscribe from those communications at any time."
          })]
        }),
        "Image Hosting": (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "The image hosting feature is intended for personal and social use such as avatars and light social content. It is not a general-purpose CDN, origin server, or backend for applications, bots, tools, services, or automated systems, whether public or private. Do not bulk-ingest files, mass hotlink at scale, or otherwise use image hosting in a way that imposes disproportionate load."
          }), (0, t.jsx)("p", {
            children: "We may throttle, transform, optimize, or remove files that degrade performance or violate these Terms. Misuse may lead to limits, suspension, or termination of your account or specific features."
          })]
        }),
        Security: (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "We take reasonable organizational and technical measures to help protect the Service and user data. No method of transmission or storage is completely secure, and we cannot guarantee absolute security."
          }), (0, t.jsxs)("p", {
            children: ["You are responsible for safeguarding your account credentials. Notify us promptly at", " ", (0, t.jsx)(r.default, {
              href: "mailto:support@guns.lol",
              children: "support@guns.lol"
            }), " if you detect or suspect unauthorized access or unusual activity in your account."]
          })]
        }),
        "User-Posted Content and Licensing Rights": (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "You are solely responsible for the legality, reliability, and appropriateness of any content you post, upload, or link to through the Service, including text, images, and other materials. You represent and warrant that you own or have obtained all rights necessary to post the content and to grant the license below, and that your content does not violate law or third-party rights (including intellectual property, privacy, or publicity rights)."
          }), (0, t.jsx)("p", {
            children: "You grant guns.lol a non-exclusive, transferable, sublicensable, royalty-free, worldwide license to host, store, reproduce, modify, adapt, publish, translate, distribute, publicly display, and create derivative works from your content as reasonably necessary to operate, maintain, promote, and improve the Service. To the extent permitted by law, you waive any moral or similar rights you may have in that content with respect to our use under this license."
          }), (0, t.jsx)("p", {
            children: "This license ends when you delete the content from the Service, except where: (a) others have shared or re-posted it and not deleted it; or (b) we retain copies as required for legal, regulatory, security, or audit purposes, dispute resolution, or to enforce these Terms."
          }), (0, t.jsx)("p", {
            children: "You retain ownership of your content. You agree to defend and indemnify guns.lol and its affiliates against claims or damages arising from or related to your content or your violation of these Terms or law."
          }), (0, t.jsx)("p", {
            children: "If we provide images, icons, video, graphics, or other assets for use with guns.lol, you may use them only on your guns.lol page and only in line with any written guidelines or third-party terms applicable to those assets."
          })]
        }),
        "Prohibited Content and Activities": (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "To preserve the safety, legality, and reliability of guns.lol, certain behaviors and content are strictly prohibited. The following examples are illustrative and not exhaustive. Any use of the Service that, in our judgment, threatens user safety, system stability, or compliance obligations may result in immediate enforcement action."
          }), (0, t.jsxs)("ul", {
            children: [(0, t.jsx)("li", {
              children: "Publishing, transmitting, or linking to content that violates local, national, or international laws, including material that facilitates or encourages unlawful conduct."
            }), (0, t.jsx)("li", {
              children: "Infringing upon the intellectual property, privacy, or publicity rights of others, or distributing content without appropriate authorization or ownership."
            }), (0, t.jsx)("li", {
              children: "Uploading or sharing defamatory, obscene, pornographic, harassing, exploitative, hateful, or otherwise objectionable material, including any sexualization of minors or non-consensual imagery."
            }), (0, t.jsx)("li", {
              children: "Engaging in deceptive, misleading, or fraudulent practices, including impersonation, phishing, scams, spam, or attempts to collect information without consent."
            }), (0, t.jsx)("li", {
              children: "Deploying or promoting malware, exploits, denial-of-service activity, automated scraping, or other acts intended to disrupt or overload the Service or its infrastructure."
            }), (0, t.jsx)("li", {
              children: "Encouraging or glorifying violence, terrorism, discrimination, or self-harm, or using the Service to coordinate or promote such activity."
            })]
          }), (0, t.jsx)("p", {
            children: "We may remove or restrict access to any content, feature, or account at our discretion if we determine that it violates these Terms, applicable law, or our operational or safety standards. Where legally required or appropriate, we may also report such activity to law enforcement or cooperate with lawful investigations."
          })]
        }),
        "Third-Party Accounts": (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)("p", {
            children: "You may choose to link third-party accounts (for example, social or messaging platforms) to your profile. If you do, you authorize guns.lol to access and store information the third-party provider makes available to us under its permissions and your settings. Your use of a third-party service is governed by that provider's terms and policies, and guns.lol is not responsible for third-party acts or omissions."
          })
        }),
        "Third-Party Websites and Content": (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "The Service may display or link to third-party websites, services, or content. WE DO NOT CONTROL, ENDORSE, OR ASSUME ANY RESPONSIBILITY FOR THIRD-PARTY CONTENT, POLICIES, OR PRACTICES. USE OF THIRD-PARTY RESOURCES IS AT YOUR SOLE RISK."
          }), (0, t.jsx)("p", {
            children: "Users may include third-party links in their bios, provided doing so is lawful and does not imply association, approval, or endorsement by guns.lol where none exists. We may remove links or content that we deem inappropriate, unlawful, or in violation of these Terms."
          })]
        }),
        "Account Limitations and Usage": (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "Each person may create only one account. Attempts to create multiple accounts for the same individual may result in removal or consolidation of additional accounts without notice. Accounts are for individual use only; do not share your credentials or sell access."
          }), (0, t.jsx)("p", {
            children: "If we detect suspicious patterns such as coordinated abuse, reseller behavior, or evasion of prior enforcement, we may take action on all related accounts and associated payment methods."
          })]
        }),
        "Software and Applications": (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "By downloading, installing, or using any official guns.lol application (including desktop, mobile, or other distributed versions), you acknowledge and agree that such use is governed by these Terms of Service and all related policies. You are granted a limited, non-exclusive, non-transferable, revocable license to install and use the software solely for lawful access to guns.lol services. Any modification, reverse-engineering, decompilation, redistribution, or creation of derivative works based on the software is strictly prohibited. The software may automatically download and install updates, patches, or improvements, and may transmit limited technical data, such as version details, system information, or crash diagnostics, to maintain performance, stability, and security, as described in our Privacy Policy."
          }), (0, t.jsx)("p", {
            children: "Certain components may be governed by third-party or open-source licenses, which you agree to comply with where applicable. The software is provided “as is” and “as available,” without any warranties, express or implied. guns.lol shall not be liable for any damages, loss of data, or other harm arising from installation, updates, or use of the software."
          })]
        }),
        "Pricing and Additional Charges": (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "Prices are shown before applicable taxes, handling fees, and other charges. These are calculated at checkout and the final total will include all applicable amounts, which may vary by location and item. We may change prices at any time; changes do not affect charges that have already been paid except in the case of an error."
          }), (0, t.jsx)("h4", {
            children: "Custom Badges"
          }), (0, t.jsxs)("ul", {
            children: [(0, t.jsx)("li", {
              children: "Badges must be original and must not replicate or closely imitate official guns.lol badges or system marks."
            }), (0, t.jsx)("li", {
              children: "Badges must comply with these Terms, including content and IP rules."
            }), (0, t.jsx)("li", {
              children: "We may review, restrict, or remove badges that violate these conditions, with or without notice."
            }), (0, t.jsx)("li", {
              children: "Abuse of the badge system may result in restrictions or loss of customization features."
            })]
          })]
        }),
        "Purchases and Billing": (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Service. You agree to promptly update account and payment information, including your email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed."
          }), (0, t.jsx)("p", {
            children: "You agree to pay all charges at the prices then in effect for your purchases and any applicable processing or shipping fees (if any), and you authorize us to charge your chosen payment provider for such amounts when you place your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment."
          }), (0, t.jsx)("p", {
            children: "Orders and limits: we may refuse any order and may limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed under the same account, the same payment method, and/or orders using the same billing or shipping address. We may limit or prohibit orders that, in our judgment, appear to be placed by dealers, resellers, or distributors."
          })]
        }),
        "Subscriptions and Renewal": (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "Some offerings are sold as recurring subscriptions. Unless otherwise stated at purchase, subscriptions renew automatically at the end of each billing period and your payment method will be charged the then-current price plus applicable taxes and fees. You can cancel a subscription in your account settings or via the platform where you purchased it. Cancellation stops future renewals; it does not automatically entitle you to a refund for the current or prior periods unless required by law or stated otherwise."
          }), (0, t.jsx)("p", {
            children: "If we are unable to process payment for a subscription, we may suspend or downgrade your access until payment is successfully made. We may change subscription pricing or features; if we make material changes, we will aim to notify you in advance where practicable."
          })]
        }),
        "No Refund Policy": (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "All payments made to guns.lol are final and non-refundable, except where a refund is required by applicable law. We do not provide refunds for change of mind, unused services, or partial use."
          }), (0, t.jsxs)("p", {
            children: ["If a payment was processed incorrectly due to an error on our side, we may, at our sole discretion, issue a refund or account credit. To request a review, contact ", (0, t.jsx)(r.default, {
              href: "mailto:support@guns.lol",
              children: "support@guns.lol"
            }), " with relevant details."]
          }), (0, t.jsx)("p", {
            children: "Initiating a chargeback or payment dispute for a valid and properly processed charge is considered a violation of our Terms of Service. In such cases, we reserve the right to suspend, restrict, or terminate your account and revoke access to purchased services until the dispute is resolved."
          })]
        }),
        Privacy: (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsxs)("p", {
            children: ["Your use of the Service is subject to our", " ", (0, t.jsx)(r.default, {
              className: a.default.inlineLink,
              href: "/privacy",
              target: "_blank",
              children: "Privacy Policy"
            }), ", which explains what we collect, how we use it, and your choices. By using the Service, you consent to our data practices described there."]
          }), (0, t.jsx)("p", {
            children: "Upon verified account deletion, we permanently delete all personal account data and user-generated content from active systems. This process is irreversible. Limited system logs and backup copies may temporarily persist for a short period for security, integrity, or legal compliance purposes, after which they are automatically purged. We do not retain deleted user data for any business, analytical, or operational use once deletion is complete."
          })]
        }),
        "Intellectual Property": (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "The Service and all materials on it (excluding your content) are protected by copyright and other intellectual property laws. Except as expressly permitted by these Terms or applicable law, you may not copy, modify, distribute, sell, lease, reverse engineer (except to the limited extent permitted by law), or create derivative works of any part of the Service without our prior written permission."
          }), (0, t.jsx)("p", {
            children: "These Terms do not transfer any rights to you except for the limited rights necessary to access and use the Service as permitted herein. All rights not expressly granted are reserved by guns.lol and its licensors."
          })]
        }),
        "Law Enforcement Requests": (0, t.jsx)(t.Fragment, {
          children: (0, t.jsxs)("p", {
            children: ["guns.lol complies with valid legal process as required by applicable law. Law enforcement or rights holders seeking information or action should submit requests in writing to", " ", (0, t.jsx)(r.default, {
              href: "mailto:legal@guns.lol",
              children: "legal@guns.lol"
            }), "."]
          })
        }),
        "Limitation of Liability": (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, GUNS.LOL AND ITS AFFILIATES, OFFICERS, EMPLOYEES, LICENSORS, AND SERVICE PROVIDERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES."
          }), (0, t.jsx)("p", {
            children: "IN NO EVENT WILL GUNS.LOL'S TOTAL LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICE EXCEED THE GREATER OF: (A) THE AMOUNT YOU PAID TO GUNS.LOL, IF ANY, DURING THE TWELVE (12) MONTHS PRIOR TO THE EVENT GIVING RISE TO THE CLAIM; OR (B) ONE HUNDRED (100) EUROS."
          }), (0, t.jsx)("p", {
            children: "SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS ON CERTAIN DAMAGES OR IMPLIED WARRANTIES. IF SUCH LAWS APPLY TO YOU, THE ABOVE LIMITATIONS WILL APPLY TO THE MAXIMUM EXTENT PERMITTED BY LAW."
          })]
        }),
        Indemnity: (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "You agree to indemnify, defend, and hold harmless guns.lol, its owners, affiliates, officers, employees, contractors, licensors, and service providers from and against any claims, losses, damages, liabilities, costs, or expenses (including reasonable attorneys' and experts' fees) arising from or relating to your content, your use or misuse of the Service, your violation of these Terms, or your infringement of any rights of another person or entity."
          }), (0, t.jsx)("p", {
            children: "We reserve the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which case you agree to cooperate fully with such defense."
          })]
        }),
        "Disclaimer of Warranties": (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "THE SERVICE IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITHOUT WARRANTIES OF ANY KIND. TO THE FULLEST EXTENT PERMITTED BY LAW, GUNS.LOL DISCLAIMS ALL EXPRESS, IMPLIED, AND STATUTORY WARRANTIES, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, ACCURACY, NON-INFRINGEMENT, AND QUIET ENJOYMENT."
          }), (0, t.jsx)("p", {
            children: "WE DO NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, OR THAT ANY DEFECTS WILL BE CORRECTED. YOU USE THE SERVICE AT YOUR OWN RISK."
          })]
        }),
        "Term and Termination": (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "These Terms remain in effect from the time you first access the Service until terminated by either party. You may stop using the Service at any time. We may suspend, restrict, or terminate your account, access, or content for any reason permitted by these Terms, including violations, misuse, fraud, non-payment, operational requirements, or compliance with applicable law."
          }), (0, t.jsx)("p", {
            children: "Upon termination, all rights granted to you under these Terms will immediately cease. Sections that by their nature should survive termination including ownership provisions, payment obligations, disclaimers, indemnities, limitations of liability, and governing terms will remain in effect."
          })]
        }),
        "User Data": (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "You are solely responsible for maintaining backups of your content and any data associated with your account. While we take reasonable measures to safeguard stored information, we do not guarantee that data will not be lost, corrupted, or become inaccessible."
          }), (0, t.jsx)("p", {
            children: "We may process, retain, and use limited user data in accordance with our Privacy Policy and applicable law, including for security, fraud prevention, operational maintenance, analytics, and legal compliance. We are not liable for the loss, deletion, or corruption of any user data stored or transmitted through the Service."
          })]
        })
      };
    return (0, t.jsx)(t.Fragment, {
      children: (0, t.jsx)(o.default, {
        data: c,
        statsData: l,
        children: (0, t.jsx)("div", {
          className: a.default.termsOfServiceWrapper,
          children: (0, t.jsxs)("div", {
            className: a.default.termsOfService,
            children: ["en" !== s && (0, t.jsx)("div", {
              className: a.default.notification,
              children: (0, t.jsx)("h1", {
                children: i("common.legal.notification_text")
              })
            }), (0, t.jsxs)("div", {
              className: a.default.description,
              children: [(0, t.jsx)("h1", {
                children: "Terms of Service"
              }), (0, t.jsx)("h3", {
                children: "guns.lol is an online profile platform that lets you bring links and images together on a single, shareable page. Anything you publish may be visible to the public depending on your settings, so only post content you have the right to share."
              }), (0, t.jsxs)("h3", {
                children: ["By accessing or using guns.lol (the “Service”), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service (“Terms”) and all applicable laws and regulations. Your continued use constitutes acceptance of any future modifications or updates to these Terms.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), "All content, materials, and intellectual property made available through guns.lol are protected by copyright and other applicable intellectual property laws. Unauthorized use, reproduction, or distribution may result in account suspension or termination."]
              })]
            }), (0, t.jsxs)("div", {
              className: a.default.terms,
              children: [Object.entries(d).map(([e, o]) => (0, t.jsxs)("div", {
                className: a.default.term,
                id: e.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
                children: [(0, t.jsx)("h1", {
                  children: e
                }), (0, t.jsx)("div", {
                  className: a.default.termsValue,
                  children: o
                })]
              }, e)), (0, t.jsxs)("div", {
                className: a.default.term,
                children: [(0, t.jsx)("h1", {
                  children: "Contact"
                }), (0, t.jsxs)("div", {
                  className: a.default.termsValue,
                  children: [(0, t.jsxs)("p", {
                    children: ["Questions or concerns? Contact ", (0, t.jsx)(r.default, {
                      href: "mailto:support@guns.lol",
                      children: "support@guns.lol"
                    }), ". Law enforcement and legal requests: ", (0, t.jsx)(r.default, {
                      href: "mailto:legal@guns.lol",
                      children: "legal@guns.lol"
                    }), "."]
                  }), (0, t.jsx)("span", {
                    className: a.default.lastUpdate,
                    children: "Last update: 02/01/2026"
                  })]
                })]
              })]
            })]
          })
        })
      })
    })
  }
  e.s(["default", () => s])
}]);