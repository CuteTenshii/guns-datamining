(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 52202, e => {
  "use strict";
  var t = e.i(48277),
    o = e.i(16506),
    a = e.i(17435);

  function r({
    href: e,
    asTag: r,
    locale: n,
    children: s,
    ...i
  }) {
    let l = n || (0, a.useLang)();
    if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) return r ? (0, t.jsx)("a", {
      href: e,
      ...i,
      children: s
    }) : (0, t.jsx)(o.default, {
      href: e,
      ...i,
      children: s
    });
    let c = "en" == l ? `${e.startsWith("/")?"":"/"}${e}` : `/${l}${e.startsWith("/")?"":"/"}${e}`;
    return r ? (0, t.jsx)("a", {
      href: c,
      ...i,
      children: s
    }) : (0, t.jsx)(o.default, {
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
    o = e.i(30668),
    a = e.i(89638);
  let r = (0, o.createContext)(null),
    n = (0, o.createContext)(null),
    s = (...e) => e.filter(Boolean).join(" "),
    i = () => {
      let e = (0, o.useContext)(r);
      if (!e) throw Error("Accordion components must be used within <Accordion>");
      return e
    },
    l = () => {
      let e = (0, o.useContext)(n);
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
        [g, f] = (0, o.useState)(() => c(i, l)),
        _ = m ? p : g,
        y = (0, o.useCallback)(e => l ? Array.isArray(_) && _.includes(e) : _ === e, [_, l]),
        v = (0, o.useCallback)(e => {
          let t = ((e, t, o) => {
            if (o) {
              let o = Array.isArray(e) ? e : [];
              return o.includes(t) ? o.filter(e => e !== t) : [...o, t]
            }
            return e === t ? null : t
          })(_, e, l);
          m || f(t), d?.(t)
        }, [_, m, l, d]),
        x = (0, o.useMemo)(() => ({
          multiple: l,
          currentValue: _,
          toggleItem: v,
          isItemActive: y
        }), [l, _, v, y]);
      return (0, t.jsx)(r.Provider, {
        value: x,
        children: (0, t.jsx)("div", {
          className: s(a.default.accordion, u),
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
          u = (0, o.useId)(),
          h = (0, o.useRef)(`${u}-control`),
          m = (0, o.useRef)(`${u}-panel`),
          p = d.isItemActive(e),
          g = (0, o.useMemo)(() => ({
            value: e,
            controlIdRef: h,
            panelIdRef: m
          }), [e]);
        return (0, t.jsx)(n.Provider, {
          value: g,
          children: (0, t.jsx)("div", {
            ...c,
            className: s(a.default.item, l),
            "data-active": p || void 0,
            children: r
          })
        })
      },
      Control: (0, o.forwardRef)(function({
        children: e,
        className: o = "",
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
          className: s(a.default.control, o),
          "data-active": g || void 0,
          disabled: n,
          onClick: e => {
            r?.(e), e.defaultPrevented || n || h.toggleItem(m.value)
          },
          children: e
        })
      }),
      Panel: (0, o.forwardRef)(function({
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
          g = (0, o.useRef)(null),
          [f, _] = (0, o.useState)(0),
          [y, v] = (0, o.useState)(!1);
        (0, o.useEffect)(() => {
          let e = g.current;
          if (!e) return;
          let t = window,
            o = () => {
              _(e.scrollHeight), v(!0)
            };
          if (o(), void 0 !== t.ResizeObserver) {
            let a = new t.ResizeObserver(o);
            return a.observe(e), () => a.disconnect()
          }
          return t.addEventListener("resize", o), () => t.removeEventListener("resize", o)
        }, []);
        let x = p ? y && f > 0 ? `${f}px` : void 0 : "0px";
        return (0, t.jsx)("div", {
          ...c,
          id: m,
          ref: d,
          className: s(a.default.panel, r),
          "data-active": p || void 0,
          children: (0, t.jsx)("div", {
            ref: g,
            className: a.default.content,
            style: {
              overflow: "hidden",
              maxHeight: x,
              opacity: +!!p,
              transition: y ? "max-height 220ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms ease" : void 0
            },
            children: (0, t.jsx)("div", {
              className: a.default.contentInner,
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
    o = e.i(38371),
    a = e.i(23614),
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
    let y = {
      up: (0, t.jsx)("span", {
        className: o.default.statusUp,
        children: r.default.statusDot
      }),
      down: (0, t.jsx)("span", {
        className: o.default.statusDown,
        children: r.default.statusDot
      }),
      partial: (0, t.jsx)("span", {
        className: o.default.statusPartial,
        children: r.default.statusDot
      })
    };
    return (0, t.jsxs)("div", {
      children: [(0, t.jsxs)("div", {
        className: o.default.faq,
        children: [(0, t.jsx)("h1", {
          className: o.default.faqText,
          children: u("common.footer.faq.title")
        }), (0, t.jsx)(i.Accordion, {
          children: _
        })]
      }), (0, t.jsxs)("div", {
        className: o.default.footerWrapper,
        children: [(0, t.jsx)("div", {
          className: o.default.gunsBannerWrapper,
          children: (0, t.jsx)("div", {
            className: o.default.gunsBanner,
            children: (0, t.jsxs)("div", {
              className: o.default.gunsBannerDescription,
              children: [(0, t.jsx)("h1", {
                children: u("common.footer.banner.title")
              }), (0, t.jsx)("h3", {
                children: u("common.footer.banner.description", {
                  users: e
                })
              }), (0, t.jsxs)("div", {
                className: o.default.gunsBannerButtons,
                children: [(0, t.jsx)("div", {
                  className: a.default.inputContainerWrapper,
                  children: (0, t.jsxs)("div", {
                    className: `${a.default.inputWrapperDiv} ${a.default.inputWrapperURL}`,
                    children: [(0, t.jsx)("span", {
                      className: `${a.default.inputWrapperSpan}`,
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
                      className: a.default.inputWrapperInput
                    })]
                  })
                }), (0, t.jsx)(c.default, {
                  href: `/register?claim=${m}&ref=guns_footer_banner`,
                  className: `${a.default.claimNow}`,
                  children: u("common.footer.banner.claim_now_text")
                })]
              })]
            })
          })
        }), (0, t.jsxs)("div", {
          className: o.default.footerContainer,
          children: [(0, t.jsxs)("div", {
            className: o.default.footer,
            children: [(0, t.jsxs)("div", {
              className: o.default.footerLeft,
              children: [(0, t.jsxs)("div", {
                className: o.default.serviceWrapper,
                children: [(0, t.jsxs)("div", {
                  className: o.default.logoWrapper,
                  children: [(0, t.jsxs)("div", {
                    className: o.default.logoFooter,
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
                      className: o.default.systemStatus,
                      children: [y[g], " ", u("common.footer.banner.system_status_text")]
                    })
                  })]
                }), (0, t.jsx)("span", {
                  children: u("common.footer.footer_description")
                })]
              }), (0, t.jsx)("div", {
                className: o.default.languageSelectionFooter,
                children: (0, t.jsx)(l.default, {})
              })]
            }), (0, t.jsxs)("div", {
              className: o.default.footerRight,
              children: [(0, t.jsxs)("div", {
                className: o.default.categorySeperator,
                children: [(0, t.jsxs)("div", {
                  className: o.default.linkCategory,
                  children: [(0, t.jsx)("h1", {
                    children: u("common.footer.footer_categories.general")
                  }), (0, t.jsxs)("div", {
                    className: o.default.links,
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
                  className: o.default.linkCategory,
                  children: [(0, t.jsx)("h1", {
                    children: u("common.footer.footer_categories.resources")
                  }), (0, t.jsxs)("div", {
                    className: o.default.links,
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
                className: o.default.categorySeperator,
                children: [(0, t.jsxs)("div", {
                  className: o.default.linkCategory,
                  children: [(0, t.jsx)("h1", {
                    children: u("common.footer.footer_categories.contact")
                  }), (0, t.jsxs)("div", {
                    className: o.default.links,
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
                  className: o.default.linkCategory,
                  children: [(0, t.jsx)("h1", {
                    children: u("common.footer.footer_categories.legal")
                  }), (0, t.jsxs)("div", {
                    className: o.default.links,
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
            className: o.default.footerBottomWrapper,
            children: [(0, t.jsx)("div", {
              className: o.default.footerDivider
            }), (0, t.jsxs)("div", {
              className: o.default.footerBottom,
              children: [(0, t.jsx)("span", {
                className: o.default.footerCopyright,
                children: u("common.footer.footer_copyright_text", {
                  year: h
                })
              }), (0, t.jsxs)("div", {
                className: o.default.footerSocials,
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
    let a = !!e?.session?.userId,
      [r, i] = (0, s.useState)(!1),
      [c, u] = (0, s.useState)(!1),
      m = (0, s.useRef)(null),
      p = (0, s.useRef)(null),
      g = (0, d.useT)(),
      f = (0, d.useLocaleHref)(),
      _ = (0, s.useMemo)(() => [{
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
      y = a ? [{
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
      v = a ? o.default.desktopNav : o.default.desktopNavExpanded,
      x = e => (0, t.jsx)(n.default, {
        href: e.href,
        target: e.external ? "_blank" : void 0,
        rel: e.external ? "noreferrer" : void 0,
        className: e.highlighted ? o.default.highlightedLink : void 0,
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
    }, [a]);
    let w = (0, s.useRef)(c),
      j = [o.default.header, r ? o.default.active : "", c ? o.default.forceMobileNav : ""].filter(Boolean).join(" ");
    return (0, s.useEffect)(() => {
      w.current && !c && i(!1), w.current = c
    }, [c]), (0, t.jsx)("header", {
      className: `${o.default.headerWrapper} ${r?o.default.headerWrapperActive:""}`,
      children: (0, t.jsxs)("div", {
        className: j,
        children: [(0, t.jsx)("div", {
          className: o.default.blurBackground
        }), (0, t.jsx)(n.default, {
          href: "/",
          className: o.default.leftSideHeader,
          ref: m,
          children: (0, t.jsxs)("div", {
            className: o.default.logo,
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
          children: [_.map(x), y.map(x)]
        }), (0, t.jsx)("span", {
          className: o.default.mobileMenuButton,
          onClick: () => i(e => !e),
          children: h.hamburger
        }), (0, t.jsxs)("div", {
          className: `${o.default.mobileNavigation} ${r?o.default.mobileNavigationOpen:""}`,
          children: [(0, t.jsx)("div", {
            className: o.default.mobileNavGroup,
            children: _.map(x)
          }), (0, t.jsxs)("div", {
            className: o.default.mobileNavGroup,
            children: [(0, t.jsx)("div", {
              className: o.default.mobileNavLanguage,
              children: (0, t.jsx)(l.default, {})
            }), y.map(x)]
          })]
        })]
      })
    })
  }

  function p({
    children: e,
    data: o,
    statsData: a
  }) {
    let r = (1e4 * Math.round(a.users / 1e4)).toLocaleString("en-US");
    return (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(m, {
        data: o
      }), e, (0, t.jsx)(u, {
        formattedUsers: r
      })]
    })
  }
  e.s(["default", 0, h], 42795), e.s(["default", () => p], 19754)
}, 65289, e => {
  "use strict";
  var t = e.i(48277),
    o = e.i(50250),
    a = e.i(19754),
    r = e.i(17435),
    n = e.i(16506);

  function s({
    data: e
  }) {
    let s = (0, r.useT)(),
      i = (0, r.useLang)(),
      l = e.statsData,
      c = e.tokenData,
      d = {
        "Changes To Privacy Policy": (0, t.jsx)("p", {
          children: "guns.lol may update this Privacy Policy from time to time. Changes take effect when posted on the Service or otherwise communicated to you. Your continued use of the Service after the effective date constitutes acceptance of the updated Policy, so please review it periodically."
        }),
        "Information We Collect": (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "We collect only the information needed to operate guns.lol securely and reliably. When you create or manage an account, we receive the details you provide, along with security signals captured at the time of account actions to help prevent abuse. Passwords are stored using industry-standard hashing. We may also record the network address used at signup or login for fraud prevention and account safety. When you update your account email, we may retain previous email addresses for a limited period for account integrity, fraud prevention, or legal compliance purposes. These are not used for communication and are permanently deleted once no longer necessary."
          }), (0, t.jsx)("p", {
            children: "When you are signed in, we maintain a server-side session so you can stay authenticated across requests. That session record contains a session identifier tied to your account and limited context such as the device or browser type, an approximate country derived from your network address, and the network address itself. This information is used to provide secure sign-in, detect unusual activity, and help you manage active sessions."
          }), (0, t.jsx)("p", {
            children: "We run lightweight, cookie-free analytics to understand how public profile pages perform and to attribute clicks on links inside those pages. When a visitor views a page or clicks a link, we log a minimal event that associates the action with the page owner, notes the referring site where available, captures an approximate country, identifies the general device type, and records the time of the event. We do not use cookies for analytics and we do not attempt to identify individual visitors beyond the signals described here."
          }), (0, t.jsx)("p", {
            children: "Website diagnostics and error logging: when the site encounters an error or other unusual behavior, we record a small diagnostic event. This may include the user's account ID if signed in, a session identifier, the network address, and the browser or device type. This information helps us detect and fix problems, improve site stability, and protect against abuse. We do not use these logs for advertising, analytics, or behavioral tracking."
          }), (0, t.jsx)("p", {
            children: "If you upload to the image host, we store information necessary to deliver and manage the file: the uploading account, descriptive and technical details about the file (such as name shown, size, and type) and when it was uploaded. We also record limited upload metadata such as the uploader's network address, browser, and device information."
          }), (0, t.jsx)("p", {
            children: "If you contact us or receive service emails, we process your communications and related metadata so we can respond, provide support, and keep you informed about important changes to your account or to the Service."
          })]
        }),
        Cookies: (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "guns.lol does not use cookies for analytics. We may use strictly necessary cookies or similar technologies to keep you signed in, protect your account, prevent abuse, and enable core functionality. These cookies are essential to the functioning of the Service and cannot be turned off in our systems."
          }), (0, t.jsxs)("p", {
            children: ["Our infrastructure is served and protected by Cloudflare, which may set its own cookies or use other identifiers for essential purposes such as load balancing, network routing, security, and DDoS protection. These Cloudflare cookies are technically necessary to maintain availability and protect against malicious traffic. You can review Cloudflare's cookie and privacy practices at", " ", (0, t.jsx)("a", {
              href: "https://www.cloudflare.com/privacypolicy/",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "https://www.cloudflare.com/privacypolicy/"
            }), "."]
          }), (0, t.jsx)("p", {
            children: "You can control non-essential cookies in your browser settings, but disabling essential cookies or Cloudflare security cookies may affect access or performance of the Service."
          })]
        }),
        "How We Use Your Information": (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)("p", {
            children: "We use the information described above to operate and improve guns.lol; authenticate users and maintain secure sessions; display public profiles and links; measure page views and link performance without cookies; detect and debug website errors; monitor service health and reliability; prevent fraud, spam, and abuse; provide support; process purchases and subscriptions; comply with legal obligations; and enforce our Terms of Service. Diagnostic and telemetry data are used only to maintain and improve performance and security."
          })
        }),
        "Marketing and Communications": (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "If you choose to receive updates from us, we may send you occasional emails about new features, product updates, promotions, or other information related to guns.lol. We only send marketing communications where permitted by law or where you have given explicit consent."
          }), (0, t.jsxs)("p", {
            children: ["You can opt out of marketing emails at any time by clicking the unsubscribe link included in every message or by contacting ", (0, t.jsx)(n.default, {
              href: "mailto:support@guns.lol",
              children: "support@guns.lol"
            }), ". Opting out will not affect essential service communications, such as transactional or account-related emails."]
          }), (0, t.jsx)("p", {
            children: "We use reputable email service providers to deliver communications and track limited engagement metrics (such as open rates or link clicks) to understand effectiveness and prevent abuse. This data is processed in accordance with this Privacy Policy and applicable law."
          })]
        }),
        "Legal Bases": (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)("p", {
            children: "Where required by law, we process personal data on the following bases: to perform a contract with you (providing the Service and paid features); for our legitimate interests (security, abuse prevention, service analytics without cookies, product improvement); with your consent where requested; and to comply with legal obligations and lawful requests."
          })
        }),
        "Data Retention and Deletion": (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "We keep personal data only as long as needed for the purposes described in this Policy or as required by law. Analytics events are stored with an automatic lifetime and are removed when they expire. Session records end when they expire or are revoked. Image-hosting records remain while files are active or until their configured lifetime ends."
          }), (0, t.jsx)("p", {
            children: "When you request account deletion and the request is verified, we permanently delete your personal account data and user-generated content from active systems. This process is irreversible. Limited system logs and backup copies may temporarily persist for security, integrity, or legal compliance, after which they are automatically purged. We do not retain deleted user data for business, analytical, or operational use once deletion is complete."
          })]
        }),
        "Disclosure of Your Information": (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "We do not sell personal data. We share information with service providers who process it for us to deliver the Service for example, cloud hosting, content delivery and security, payment processing and billing, email delivery, and anti-abuse tooling. These providers are bound by confidentiality and use limitations."
          }), (0, t.jsx)("p", {
            children: "We may disclose information if required by law or legal process; to protect the rights, safety, or integrity of users, the public, or the Service; or in connection with a corporate transaction involving the Service, in which case the successor will be bound by terms no less protective than those stated here."
          })]
        }),
        "Third-Party Links and Services": (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "guns.lol may contain links to third-party websites, services, or profiles that are not operated or controlled by us. When you follow a link or interact with content from another platform, any personal information you provide is subject to that third party's own privacy policy, terms, and data practices not ours. We do not monitor, endorse, or assume responsibility for how these external services collect, use, or protect your information."
          }), (0, t.jsx)("p", {
            children: "This includes links or embeds that users choose to display on their guns.lol pages, as well as integrations or external platforms you connect to your account. We recommend reviewing the privacy policies of any third-party websites or services before interacting with them or submitting personal data."
          })]
        }),
        "Payments and Billing": (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "All purchases and paid upgrades on guns.lol are processed securely through Lemon Squeezy, our authorized payment and merchant-of-record partner. Lemon Squeezy handles all billing, payment processing, and tax compliance on our behalf. This means your payment details such as card information, billing address, and transaction data are collected and stored by Lemon Squeezy in accordance with their own privacy and security policies."
          }), (0, t.jsx)("p", {
            children: "guns.lol does not receive or store full payment card details. We only retain limited transaction records necessary for verifying your purchase, activating your account features, preventing fraud, and providing support. All sensitive payment information is transmitted directly between you and Lemon Squeezy over an encrypted connection."
          }), (0, t.jsxs)("p", {
            children: ["For more information on how Lemon Squeezy processes your personal and payment data, please review their Privacy Policy at ", (0, t.jsx)("a", {
              href: "https://www.lemonsqueezy.com/privacy",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "https://www.lemonsqueezy.com/privacy"
            }), "."]
          })]
        }),
        "International Transfers": (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)("p", {
            children: "Our infrastructure and service providers may operate in multiple countries. Where required, we implement safeguards for cross-border transfers and apply technical and organizational measures designed to protect your information regardless of where it is processed."
          })
        }),
        Security: (0, t.jsx)(t.Fragment, {
          children: (0, t.jsxs)("p", {
            children: ["We use administrative, technical, and physical safeguards designed to protect personal data, including encrypted transport, access controls, and routine monitoring. No method of transmission or storage is entirely secure, and we cannot guarantee absolute security. If you suspect unauthorized access to your account, contact", " ", (0, t.jsx)(n.default, {
              href: "mailto:support@guns.lol",
              children: "support@guns.lol"
            }), " immediately."]
          })
        }),
        "Data Protection Rights": (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("p", {
            children: "Depending on your location, you may be entitled to certain rights under data protection laws such as the General Data Protection Regulation (GDPR), the United Kingdom's Data Protection Act, or comparable privacy laws in other jurisdictions. guns.lol recognizes these principles globally and allows all users, where applicable, to exercise similar rights regarding their personal data. You have the right to know whether we hold information about you, to request a copy of that data, and to obtain it in a commonly used digital format. If any of the information we hold about you is inaccurate or incomplete, you may request that it be corrected or updated."
          }), (0, t.jsx)("p", {
            children: "You may also request that your data be deleted entirely from our systems. Once your identity has been verified and your request confirmed, we will permanently remove your personal information and user-generated content from active systems, except where limited retention is required to comply with legal obligations, prevent fraud, resolve disputes, or maintain service integrity. If you believe we are processing your information unlawfully or beyond the scope of your consent, you may request that we restrict or suspend certain types of processing, or object entirely where the processing is based on legitimate interest."
          }), (0, t.jsx)("p", {
            children: "Where our use of your information relies on your consent, you may withdraw that consent at any time without affecting the legality of any processing carried out before withdrawal. guns.lol does not engage in automated decision-making or profiling that would have a significant legal or personal effect on you. If you are unsatisfied with how we handle your data, you have the right to file a complaint with your local data protection authority. However, we encourage you to contact us first so we can attempt to resolve the matter directly and transparently."
          }), (0, t.jsxs)("p", {
            children: ["To access, edit, correct, or delete your personal information, you can use your account settings or contact", " ", (0, t.jsx)(n.default, {
              href: "mailto:support@guns.lol",
              children: "support@guns.lol"
            }), ". If you cannot access your account, contact support and we can process a manual deletion request. We will respond to all verified data requests within the time limits required by applicable law and may ask for reasonable proof of identity before taking action to protect your account and data."]
          })]
        }),
        "Children's Information": (0, t.jsx)(t.Fragment, {
          children: (0, t.jsxs)("p", {
            children: ["The Service is not intended for children under 13, or the minimum age required in your jurisdiction if higher. We do not knowingly collect personal information from children below the applicable age. If you believe a child has provided personal information to us, contact", " ", (0, t.jsx)(n.default, {
              href: "mailto:support@guns.lol",
              children: "support@guns.lol"
            }), " and we will take appropriate action."]
          })
        })
      };
    return (0, t.jsx)(t.Fragment, {
      children: (0, t.jsx)(a.default, {
        data: c,
        statsData: l,
        children: (0, t.jsx)("div", {
          className: o.default.privacyPolicyWrapper,
          children: (0, t.jsxs)("div", {
            className: o.default.privacyPolicy,
            children: ["en" !== i && (0, t.jsx)("div", {
              className: o.default.notification,
              children: (0, t.jsx)("h1", {
                children: s("common.legal.notification_text")
              })
            }), (0, t.jsxs)("div", {
              className: o.default.description,
              children: [(0, t.jsx)("h1", {
                children: "Privacy Policy"
              }), (0, t.jsx)("h3", {
                children: "This Policy explains what we collect, why we collect it, and how we handle it when you create profiles, share links, and host images on guns.lol. We keep analytics lightweight and do not use cookies for analytics. By using the Service, you consent to the practices described here."
              })]
            }), (0, t.jsx)("div", {
              className: o.default.terms,
              children: Object.entries(d).map(([e, a]) => (0, t.jsxs)("div", {
                className: o.default.term,
                children: [(0, t.jsx)("h1", {
                  children: e
                }), (0, t.jsx)("div", {
                  className: o.default.termsValue,
                  children: a
                })]
              }, e))
            }), (0, t.jsxs)("div", {
              className: o.default.legalDescription,
              children: [(0, t.jsxs)("h3", {
                children: ["Any questions or concerns? Please reach out to ", (0, t.jsx)(n.default, {
                  href: "mailto:support@guns.lol",
                  children: "support@guns.lol"
                }), "."]
              }), (0, t.jsx)("span", {
                className: o.default.lastUpdate,
                children: "Last update: 11/09/2025"
              })]
            })]
          })
        })
      })
    })
  }
  e.s(["default", () => s])
}]);