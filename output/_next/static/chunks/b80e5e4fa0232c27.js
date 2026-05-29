(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 89638, e => {
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
    o = e.i(30668),
    t = e.i(89638);
  let l = (0, o.createContext)(null),
    r = (0, o.createContext)(null),
    n = (...e) => e.filter(Boolean).join(" "),
    s = () => {
      let e = (0, o.useContext)(l);
      if (!e) throw Error("Accordion components must be used within <Accordion>");
      return e
    },
    i = () => {
      let e = (0, o.useContext)(r);
      if (!e) throw Error("Accordion.Item subcomponents must be used within <Accordion.Item>");
      return e
    },
    c = (e, a) => a ? Array.isArray(e) ? e : "string" == typeof e ? [e] : [] : Array.isArray(e) ? e[0] ?? null : "string" == typeof e ? e : e ?? null,
    d = Object.assign(({
      children: e,
      value: r,
      defaultValue: s,
      multiple: i = !1,
      onChange: d,
      className: u = "",
      ...m
    }) => {
      let h = void 0 !== r,
        g = h ? c(r, i) : null,
        [_, p] = (0, o.useState)(() => c(s, i)),
        f = h ? g : _,
        x = (0, o.useCallback)(e => i ? Array.isArray(f) && f.includes(e) : f === e, [f, i]),
        v = (0, o.useCallback)(e => {
          let a = ((e, a, o) => {
            if (o) {
              let o = Array.isArray(e) ? e : [];
              return o.includes(a) ? o.filter(e => e !== a) : [...o, a]
            }
            return e === a ? null : a
          })(f, e, i);
          h || p(a), d?.(a)
        }, [f, h, i, d]),
        w = (0, o.useMemo)(() => ({
          multiple: i,
          currentValue: f,
          toggleItem: v,
          isItemActive: x
        }), [i, f, v, x]);
      return (0, a.jsx)(l.Provider, {
        value: w,
        children: (0, a.jsx)("div", {
          className: n(t.default.accordion, u),
          ...m,
          children: e
        })
      })
    }, {
      Item: ({
        value: e,
        children: l,
        className: i = "",
        ...c
      }) => {
        let d = s(),
          u = (0, o.useId)(),
          m = (0, o.useRef)(`${u}-control`),
          h = (0, o.useRef)(`${u}-panel`),
          g = d.isItemActive(e),
          _ = (0, o.useMemo)(() => ({
            value: e,
            controlIdRef: m,
            panelIdRef: h
          }), [e]);
        return (0, a.jsx)(r.Provider, {
          value: _,
          children: (0, a.jsx)("div", {
            ...c,
            className: n(t.default.item, i),
            "data-active": g || void 0,
            children: l
          })
        })
      },
      Control: (0, o.forwardRef)(function({
        children: e,
        className: o = "",
        onClick: l,
        disabled: r,
        id: c,
        ...d
      }, u) {
        let m = s(),
          h = i(),
          g = c ?? h.controlIdRef.current;
        h.controlIdRef.current = g;
        let _ = m.isItemActive(h.value);
        return (0, a.jsx)("button", {
          type: "button",
          ...d,
          id: g,
          ref: u,
          className: n(t.default.control, o),
          "data-active": _ || void 0,
          disabled: r,
          onClick: e => {
            l?.(e), e.defaultPrevented || r || m.toggleItem(h.value)
          },
          children: e
        })
      }),
      Panel: (0, o.forwardRef)(function({
        children: e,
        className: l = "",
        id: r,
        ...c
      }, d) {
        let u = s(),
          m = i(),
          h = r ?? m.panelIdRef.current;
        m.panelIdRef.current = h;
        let g = u.isItemActive(m.value),
          _ = (0, o.useRef)(null),
          [p, f] = (0, o.useState)(0),
          [x, v] = (0, o.useState)(!1);
        (0, o.useEffect)(() => {
          let e = _.current;
          if (!e) return;
          let a = window,
            o = () => {
              f(e.scrollHeight), v(!0)
            };
          if (o(), void 0 !== a.ResizeObserver) {
            let t = new a.ResizeObserver(o);
            return t.observe(e), () => t.disconnect()
          }
          return a.addEventListener("resize", o), () => a.removeEventListener("resize", o)
        }, []);
        let w = g ? x && p > 0 ? `${p}px` : void 0 : "0px";
        return (0, a.jsx)("div", {
          ...c,
          id: h,
          ref: d,
          className: n(t.default.panel, l),
          "data-active": g || void 0,
          children: (0, a.jsx)("div", {
            ref: _,
            className: t.default.content,
            style: {
              overflow: "hidden",
              maxHeight: w,
              opacity: +!!g,
              transition: x ? "max-height 220ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms ease" : void 0
            },
            children: (0, a.jsx)("div", {
              className: t.default.contentInner,
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
    o = e.i(38371),
    t = e.i(23614),
    l = e.i(33544),
    r = e.i(16506),
    n = e.i(30668),
    s = e.i(82724),
    i = e.i(65383),
    c = e.i(52202),
    d = e.i(17435);

  function u({
    formattedUsers: e
  }) {
    let u = (0, d.useT)(),
      m = new Date().getFullYear(),
      [h, g] = (0, n.useState)(""),
      [_, p] = (0, n.useState)("up"),
      f = [{
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
    (0, n.useEffect)(() => {
      (async () => {
        let e = await fetch("/api/statusLogs?excludeLogs=true", {
          cache: "no-store"
        });
        p((await e.json()).currentStatus)
      })()
    }, []);
    let x = {
      up: (0, a.jsx)("span", {
        className: o.default.statusUp,
        children: l.default.statusDot
      }),
      down: (0, a.jsx)("span", {
        className: o.default.statusDown,
        children: l.default.statusDot
      }),
      partial: (0, a.jsx)("span", {
        className: o.default.statusPartial,
        children: l.default.statusDot
      })
    };
    return (0, a.jsxs)("div", {
      children: [(0, a.jsxs)("div", {
        className: o.default.faq,
        children: [(0, a.jsx)("h1", {
          className: o.default.faqText,
          children: u("common.footer.faq.title")
        }), (0, a.jsx)(s.Accordion, {
          children: f
        })]
      }), (0, a.jsxs)("div", {
        className: o.default.footerWrapper,
        children: [(0, a.jsx)("div", {
          className: o.default.gunsBannerWrapper,
          children: (0, a.jsx)("div", {
            className: o.default.gunsBanner,
            children: (0, a.jsxs)("div", {
              className: o.default.gunsBannerDescription,
              children: [(0, a.jsx)("h1", {
                children: u("common.footer.banner.title")
              }), (0, a.jsx)("h3", {
                children: u("common.footer.banner.description", {
                  users: e
                })
              }), (0, a.jsxs)("div", {
                className: o.default.gunsBannerButtons,
                children: [(0, a.jsx)("div", {
                  className: t.default.inputContainerWrapper,
                  children: (0, a.jsxs)("div", {
                    className: `${t.default.inputWrapperDiv} ${t.default.inputWrapperURL}`,
                    children: [(0, a.jsx)("span", {
                      className: `${t.default.inputWrapperSpan}`,
                      style: {
                        position: "absolute"
                      },
                      children: (0, a.jsx)("h1", {
                        children: "guns.lol/"
                      })
                    }), (0, a.jsx)("input", {
                      autoCorrect: "false",
                      value: h,
                      onChange: e => {
                        g(e.target.value)
                      },
                      type: "text",
                      placeholder: u("common.footer.banner.claim_input_placeholder"),
                      className: t.default.inputWrapperInput
                    })]
                  })
                }), (0, a.jsx)(c.default, {
                  href: `/register?claim=${h}&ref=guns_footer_banner`,
                  className: `${t.default.claimNow}`,
                  children: u("common.footer.banner.claim_now_text")
                })]
              })]
            })
          })
        }), (0, a.jsxs)("div", {
          className: o.default.footerContainer,
          children: [(0, a.jsxs)("div", {
            className: o.default.footer,
            children: [(0, a.jsxs)("div", {
              className: o.default.footerLeft,
              children: [(0, a.jsxs)("div", {
                className: o.default.serviceWrapper,
                children: [(0, a.jsxs)("div", {
                  className: o.default.logoWrapper,
                  children: [(0, a.jsxs)("div", {
                    className: o.default.logoFooter,
                    children: [(0, a.jsx)("img", {
                      src: "https://assets.guns.lol/guns_logo_no_background_cropped.png",
                      alt: ""
                    }), (0, a.jsxs)("h1", {
                      children: ["guns", (0, a.jsx)("span", {
                        children: "."
                      }), "lol"]
                    })]
                  }), (0, a.jsx)(r.default, {
                    href: "https://status.guns.lol",
                    target: "_blank",
                    children: (0, a.jsxs)("span", {
                      className: o.default.systemStatus,
                      children: [x[_], " ", u("common.footer.banner.system_status_text")]
                    })
                  })]
                }), (0, a.jsx)("span", {
                  children: u("common.footer.footer_description")
                })]
              }), (0, a.jsx)("div", {
                className: o.default.languageSelectionFooter,
                children: (0, a.jsx)(i.default, {})
              })]
            }), (0, a.jsxs)("div", {
              className: o.default.footerRight,
              children: [(0, a.jsxs)("div", {
                className: o.default.categorySeperator,
                children: [(0, a.jsxs)("div", {
                  className: o.default.linkCategory,
                  children: [(0, a.jsx)("h1", {
                    children: u("common.footer.footer_categories.general")
                  }), (0, a.jsxs)("div", {
                    className: o.default.links,
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
                    }), (0, a.jsx)(r.default, {
                      href: "https://status.guns.lol",
                      target: "_blank",
                      children: u("common.footer.footer_categories_links.website_status")
                    })]
                  })]
                }), (0, a.jsxs)("div", {
                  className: o.default.linkCategory,
                  children: [(0, a.jsx)("h1", {
                    children: u("common.footer.footer_categories.resources")
                  }), (0, a.jsxs)("div", {
                    className: o.default.links,
                    children: [(0, a.jsx)(r.default, {
                      href: "https://help.guns.lol",
                      target: "_blank",
                      children: u("common.footer.footer_categories_links.help_center")
                    }), (0, a.jsx)(r.default, {
                      href: "https://help.guns.lol/changelog",
                      target: "_blank",
                      children: u("common.footer.footer_categories_links.changelog")
                    }), (0, a.jsx)(r.default, {
                      href: "/account/redeem",
                      children: u("common.footer.footer_categories_links.redeem_code")
                    }), (0, a.jsx)(r.default, {
                      href: "https://salad.com/store/rewards/773aded6-552a-46f0-acc9-99324ca32efe",
                      target: "_blank",
                      children: u("common.footer.footer_categories_links.salad_product")
                    }), (0, a.jsx)(r.default, {
                      href: "https://hone.gg/a/guns",
                      target: "_blank",
                      children: u("common.footer.footer_categories_links.hone_product")
                    })]
                  })]
                })]
              }), (0, a.jsxs)("div", {
                className: o.default.categorySeperator,
                children: [(0, a.jsxs)("div", {
                  className: o.default.linkCategory,
                  children: [(0, a.jsx)("h1", {
                    children: u("common.footer.footer_categories.contact")
                  }), (0, a.jsxs)("div", {
                    className: o.default.links,
                    children: [(0, a.jsx)(r.default, {
                      href: "https://discord.gg/guns",
                      target: "_blank",
                      children: u("common.footer.footer_categories_links.discord_server")
                    }), (0, a.jsx)(r.default, {
                      href: "mailto:support@guns.lol",
                      children: u("common.footer.footer_categories_links.support_email")
                    }), (0, a.jsx)(r.default, {
                      href: "mailto:business@guns.lol",
                      children: u("common.footer.footer_categories_links.business_email")
                    }), (0, a.jsx)(r.default, {
                      href: "mailto:legal@guns.lol",
                      children: u("common.footer.footer_categories_links.legal_email")
                    })]
                  })]
                }), (0, a.jsxs)("div", {
                  className: o.default.linkCategory,
                  children: [(0, a.jsx)("h1", {
                    children: u("common.footer.footer_categories.legal")
                  }), (0, a.jsxs)("div", {
                    className: o.default.links,
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
            className: o.default.footerBottomWrapper,
            children: [(0, a.jsx)("div", {
              className: o.default.footerDivider
            }), (0, a.jsxs)("div", {
              className: o.default.footerBottom,
              children: [(0, a.jsx)("span", {
                className: o.default.footerCopyright,
                children: u("common.footer.footer_copyright_text", {
                  year: m
                })
              }), (0, a.jsxs)("div", {
                className: o.default.footerSocials,
                children: [(0, a.jsx)(r.default, {
                  href: "https://discord.gg/guns",
                  target: "_blank",
                  children: l.default.discord
                }), (0, a.jsx)(r.default, {
                  href: "https://tiktok.com/@guns.lol",
                  target: "_blank",
                  children: l.default.tiktok
                }), (0, a.jsx)(r.default, {
                  href: "https://x.com/gunsdotlol",
                  target: "_blank",
                  children: l.default.x
                }), (0, a.jsx)(r.default, {
                  href: "https://t.me/gunsbio",
                  target: "_blank",
                  children: l.default.telegram
                })]
              })]
            })]
          })]
        })]
      })]
    })
  }
  let m = {
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

  function h({
    data: e
  }) {
    let t = !!e?.session?.userId,
      [l, s] = (0, n.useState)(!1),
      [c, u] = (0, n.useState)(!1),
      h = (0, n.useRef)(null),
      g = (0, n.useRef)(null),
      _ = (0, d.useT)(),
      p = (0, d.useLocaleHref)(),
      f = (0, n.useMemo)(() => [{
        label: _("common.header.navigation.help_center"),
        href: "https://help.guns.lol",
        external: !0
      }, {
        label: _("common.header.navigation.discord"),
        href: "https://discord.gg/guns",
        external: !0
      }, {
        label: _("common.header.navigation.leaderboard"),
        href: "/leaderboard"
      }, {
        label: _("common.header.navigation.pricing"),
        href: p("/pricing")
      }], []),
      x = t ? [{
        label: _("common.header.navigation.dashboard"),
        href: "/account",
        highlighted: !0
      }] : [{
        label: _("common.header.navigation.login"),
        href: p("/login")
      }, {
        label: _("common.header.navigation.sign_up"),
        href: p("/register?ref=header"),
        highlighted: !0
      }],
      v = t ? o.default.desktopNav : o.default.desktopNavExpanded,
      w = e => (0, a.jsx)(r.default, {
        href: e.href,
        target: e.external ? "_blank" : void 0,
        rel: e.external ? "noreferrer" : void 0,
        className: e.highlighted ? o.default.highlightedLink : void 0,
        children: e.label
      }, e.label);
    (0, n.useEffect)(() => {
      let e = () => {
        if (!h.current || !g.current) return;
        let e = h.current.getBoundingClientRect(),
          a = g.current.getBoundingClientRect();
        0 === a.width ? u(!0) : u(a.left - e.right < 24)
      };
      e(), window.addEventListener("resize", e);
      let a = null;
      return "undefined" != typeof ResizeObserver && (a = new ResizeObserver(e), h.current && a.observe(h.current), g.current && a.observe(g.current)), () => {
        window.removeEventListener("resize", e), a?.disconnect()
      }
    }, [t]);
    let j = (0, n.useRef)(c),
      y = [o.default.header, l ? o.default.active : "", c ? o.default.forceMobileNav : ""].filter(Boolean).join(" ");
    return (0, n.useEffect)(() => {
      j.current && !c && s(!1), j.current = c
    }, [c]), (0, a.jsx)("header", {
      className: `${o.default.headerWrapper} ${l?o.default.headerWrapperActive:""}`,
      children: (0, a.jsxs)("div", {
        className: y,
        children: [(0, a.jsx)("div", {
          className: o.default.blurBackground
        }), (0, a.jsx)(r.default, {
          href: "/",
          className: o.default.leftSideHeader,
          ref: h,
          children: (0, a.jsxs)("div", {
            className: o.default.logo,
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
          ref: g,
          children: [f.map(w), x.map(w)]
        }), (0, a.jsx)("span", {
          className: o.default.mobileMenuButton,
          onClick: () => s(e => !e),
          children: m.hamburger
        }), (0, a.jsxs)("div", {
          className: `${o.default.mobileNavigation} ${l?o.default.mobileNavigationOpen:""}`,
          children: [(0, a.jsx)("div", {
            className: o.default.mobileNavGroup,
            children: f.map(w)
          }), (0, a.jsxs)("div", {
            className: o.default.mobileNavGroup,
            children: [(0, a.jsx)("div", {
              className: o.default.mobileNavLanguage,
              children: (0, a.jsx)(i.default, {})
            }), x.map(w)]
          })]
        })]
      })
    })
  }

  function g({
    children: e,
    data: o,
    statsData: t
  }) {
    let l = (1e4 * Math.round(t.users / 1e4)).toLocaleString("en-US");
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(h, {
        data: o
      }), e, (0, a.jsx)(u, {
        formattedUsers: l
      })]
    })
  }
  e.s(["default", 0, m], 42795), e.s(["default", () => g], 19754)
}, 30035, e => {
  "use strict";
  var a = e.i(48277);
  let o = {
    cross: (0, a.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        color: "rgb(194, 60, 60)"
      },
      width: "1em",
      height: "1em",
      viewBox: "0 0 15 15",
      children: (0, a.jsx)("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5z",
        clipRule: "evenodd"
      })
    }),
    check: (0, a.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        color: "rgb(64, 184, 64)"
      },
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, a.jsx)("path", {
        fill: "currentColor",
        d: "M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
      })
    }),
    arrowDown: (0, a.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, a.jsx)("path", {
        fill: "currentColor",
        d: "M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"
      })
    }),
    arrowUp: (0, a.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, a.jsx)("path", {
        fill: "currentColor",
        d: "m12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"
      })
    }),
    checkmark: (0, a.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "6.43 7.43 11.15 8.57",
      children: (0, a.jsx)("path", {
        fill: "currentColor",
        d: "m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275z"
      })
    }),
    premium: (0, a.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 512 512",
      children: (0, a.jsx)("path", {
        fill: "currentColor",
        d: "M121.72 32a4 4 0 0 0-3.72 5.56l2.3 5.43l40.7 94.9a4 4 0 0 0 6.88.82L243 38.4a4 4 0 0 0-3.2-6.4Zm298.21 26.06l-41.28 96.37a4 4 0 0 0 3.68 5.57h101a4 4 0 0 0 3.4-6.11L427 57.53a4 4 0 0 0-7.07.53M85 57.57l-59.71 96.32a4 4 0 0 0 3.4 6.11h101a4 4 0 0 0 3.67-5.58L92 58.1a4 4 0 0 0-7-.53M393.27 32H267.82a1.94 1.94 0 0 0-1.56 3.11l79.92 106.46a1.94 1.94 0 0 0 3.34-.4L391.6 43l3.4-8.34a1.92 1.92 0 0 0-1.7-2.66ZM239 448l-89.43-253.49A3.78 3.78 0 0 0 146 192H25.7a3.72 3.72 0 0 0-2.95 6l216 279.81a5.06 5.06 0 0 0 6.39 1.37a5 5 0 0 0 2.39-6.08Zm247.3-256H366a3.75 3.75 0 0 0-3.54 2.51l-98.2 278.16a5.21 5.21 0 0 0 2.42 6.31a5.22 5.22 0 0 0 6.61-1.39L489.25 198a3.72 3.72 0 0 0-2.95-6M259.2 78.93l56 74.67a4 4 0 0 1-3.2 6.4H200a4 4 0 0 1-3.2-6.4l56-74.67a4 4 0 0 1 6.4 0m-7 310.31l-67.7-191.91a4 4 0 0 1 3.77-5.33h135.46a4 4 0 0 1 3.77 5.33l-67.73 191.91a4 4 0 0 1-7.54 0Z"
      })
    }),
    imagehost: (0, a.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 16 16",
      children: (0, a.jsx)("path", {
        fill: "currentColor",
        d: "m10.878.282l.348 1.071a2.205 2.205 0 0 0 1.398 1.397l1.072.348l.021.006a.423.423 0 0 1 0 .798l-1.071.348a2.208 2.208 0 0 0-1.399 1.397l-.348 1.07a.423.423 0 0 1-.798 0l-.348-1.07a2.204 2.204 0 0 0-1.399-1.403l-1.072-.348a.423.423 0 0 1 0-.798l1.072-.348a2.208 2.208 0 0 0 1.377-1.397l.348-1.07a.423.423 0 0 1 .799 0m4.905 7.931l-.765-.248a1.577 1.577 0 0 1-1-.999l-.248-.764a.302.302 0 0 0-.57 0l-.25.764a1.576 1.576 0 0 1-.983.999l-.765.248a.303.303 0 0 0 0 .57l.765.249a1.578 1.578 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.576 1.576 0 0 1 .999-.999l.765-.248a.303.303 0 0 0 0-.57zM13.502 12a1.328 1.328 0 0 1-.746-.23c-.22-.16-.38-.371-.48-.621l-.26-.802a.519.519 0 0 0-.14-.22a.635.635 0 0 0-.22-.14l-.748-.246A3.001 3.001 0 0 1 5 9a3 3 0 0 1 3.846-2.88l-.053-.16c-.09-.23-.18-.36-.29-.47a1.311 1.311 0 0 0-.471-.291l-1.061-.35c-.3-.1-.54-.291-.71-.532a1.431 1.431 0 0 1-.208-1.207a1.5 1.5 0 0 0-.777.72L4.691 5H4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-.079a1.45 1.45 0 0 1-.498.079M10 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
      })
    }),
    arrowPlansDown: (0, a.jsx)("svg", {
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
        d: "M12 4v16m0 0l6-6m-6 6l-6-6"
      })
    }),
    verified: (0, a.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "1 1.5 22 21",
      children: (0, a.jsx)("path", {
        fill: "currentColor",
        d: "m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45l-3.4 1.45Zm2.35-6.95L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12l3.55 3.55Z"
      })
    }),
    customBadge: (0, a.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 512 512",
      children: (0, a.jsx)("path", {
        fill: "currentColor",
        d: "M208 512a24.84 24.84 0 0 1-23.34-16l-39.84-103.6a16.06 16.06 0 0 0-9.19-9.19L32 343.34a25 25 0 0 1 0-46.68l103.6-39.84a16.06 16.06 0 0 0 9.19-9.19L184.66 144a25 25 0 0 1 46.68 0l39.84 103.6a16.06 16.06 0 0 0 9.19 9.19l103 39.63a25.49 25.49 0 0 1 16.63 24.1a24.82 24.82 0 0 1-16 22.82l-103.6 39.84a16.06 16.06 0 0 0-9.19 9.19L231.34 496A24.84 24.84 0 0 1 208 512M88 176a14.67 14.67 0 0 1-13.69-9.4l-16.86-43.84a7.28 7.28 0 0 0-4.21-4.21L9.4 101.69a14.67 14.67 0 0 1 0-27.38l43.84-16.86a7.3 7.3 0 0 0 4.21-4.21L74.16 9.79A15 15 0 0 1 86.23.11a14.67 14.67 0 0 1 15.46 9.29l16.86 43.84a7.3 7.3 0 0 0 4.21 4.21l43.84 16.86a14.67 14.67 0 0 1 0 27.38l-43.84 16.86a7.28 7.28 0 0 0-4.21 4.21l-16.86 43.84A14.67 14.67 0 0 1 88 176m312 80a16 16 0 0 1-14.93-10.26l-22.84-59.37a8 8 0 0 0-4.6-4.6l-59.37-22.84a16 16 0 0 1 0-29.86l59.37-22.84a8 8 0 0 0 4.6-4.6l22.67-58.95a16.45 16.45 0 0 1 13.17-10.57a16 16 0 0 1 16.86 10.15l22.84 59.37a8 8 0 0 0 4.6 4.6l59.37 22.84a16 16 0 0 1 0 29.86l-59.37 22.84a8 8 0 0 0-4.6 4.6l-22.84 59.37A16 16 0 0 1 400 256"
      })
    })
  };
  e.s(["default", 0, o])
}]);