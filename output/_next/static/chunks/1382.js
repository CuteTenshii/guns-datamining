(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1382], {
    22834: (e, o, a) => {
      "use strict";
      a.d(o, {
        n: () => m
      });
      var t = a(95155),
        r = a(12115),
        n = a(67361),
        s = a.n(n);
      let l = (0, r.createContext)(null),
        i = (0, r.createContext)(null),
        c = (...e) => e.filter(Boolean).join(" "),
        d = () => {
          let e = (0, r.useContext)(l);
          if (!e) throw Error("Accordion components must be used within <Accordion>");
          return e
        },
        g = () => {
          let e = (0, r.useContext)(i);
          if (!e) throw Error("Accordion.Item subcomponents must be used within <Accordion.Item>");
          return e
        },
        h = (e, o) => o ? Array.isArray(e) ? e : "string" == typeof e ? [e] : [] : Array.isArray(e) ? e[0] ?? null : "string" == typeof e ? e : e ?? null,
        m = Object.assign(({
          children: e,
          value: o,
          defaultValue: a,
          multiple: n = !1,
          onChange: i,
          className: d = "",
          ...g
        }) => {
          let m = void 0 !== o,
            p = m ? h(o, n) : null,
            [_, u] = (0, r.useState)(() => h(a, n)),
            f = m ? p : _,
            x = (0, r.useCallback)(e => n ? Array.isArray(f) && f.includes(e) : f === e, [f, n]),
            v = (0, r.useCallback)(e => {
              let o = ((e, o, a) => {
                if (a) {
                  let a = Array.isArray(e) ? e : [];
                  return a.includes(o) ? a.filter(e => e !== o) : [...a, o]
                }
                return e === o ? null : o
              })(f, e, n);
              m || u(o), i?.(o)
            }, [f, m, n, i]),
            j = (0, r.useMemo)(() => ({
              multiple: n,
              currentValue: f,
              toggleItem: v,
              isItemActive: x
            }), [n, f, v, x]);
          return (0, t.jsx)(l.Provider, {
            value: j,
            children: (0, t.jsx)("div", {
              className: c(s().accordion, d),
              ...g,
              children: e
            })
          })
        }, {
          Item: ({
            value: e,
            children: o,
            className: a = "",
            ...n
          }) => {
            let l = d(),
              g = (0, r.useId)(),
              h = (0, r.useRef)(`${g}-control`),
              m = (0, r.useRef)(`${g}-panel`),
              p = l.isItemActive(e),
              _ = (0, r.useMemo)(() => ({
                value: e,
                controlIdRef: h,
                panelIdRef: m
              }), [e]);
            return (0, t.jsx)(i.Provider, {
              value: _,
              children: (0, t.jsx)("div", {
                ...n,
                className: c(s().item, a),
                "data-active": p || void 0,
                children: o
              })
            })
          },
          Control: (0, r.forwardRef)(function({
            children: e,
            className: o = "",
            onClick: a,
            disabled: r,
            id: n,
            ...l
          }, i) {
            let h = d(),
              m = g(),
              p = n ?? m.controlIdRef.current;
            m.controlIdRef.current = p;
            let _ = h.isItemActive(m.value);
            return (0, t.jsx)("button", {
              type: "button",
              ...l,
              id: p,
              ref: i,
              className: c(s().control, o),
              "data-active": _ || void 0,
              disabled: r,
              onClick: e => {
                a?.(e), e.defaultPrevented || r || h.toggleItem(m.value)
              },
              children: e
            })
          }),
          Panel: (0, r.forwardRef)(function({
            children: e,
            className: o = "",
            id: a,
            ...n
          }, l) {
            let i = d(),
              h = g(),
              m = a ?? h.panelIdRef.current;
            h.panelIdRef.current = m;
            let p = i.isItemActive(h.value),
              _ = (0, r.useRef)(null),
              [u, f] = (0, r.useState)(0),
              [x, v] = (0, r.useState)(!1);
            (0, r.useEffect)(() => {
              let e = _.current;
              if (!e) return;
              let o = window,
                a = () => {
                  f(e.scrollHeight), v(!0)
                };
              if (a(), void 0 !== o.ResizeObserver) {
                let t = new o.ResizeObserver(a);
                return t.observe(e), () => t.disconnect()
              }
              return o.addEventListener("resize", a), () => o.removeEventListener("resize", a)
            }, []);
            let j = p ? x && u > 0 ? `${u}px` : void 0 : "0px";
            return (0, t.jsx)("div", {
              ...n,
              id: m,
              ref: l,
              className: c(s().panel, o),
              "data-active": p || void 0,
              children: (0, t.jsx)("div", {
                ref: _,
                className: s().content,
                style: {
                  overflow: "hidden",
                  maxHeight: j,
                  opacity: +!!p,
                  transition: x ? "max-height 220ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms ease" : void 0
                },
                children: (0, t.jsx)("div", {
                  className: s().contentInner,
                  children: e
                })
              })
            })
          })
        })
    },
    59791: e => {
      e.exports = {
        landingPage: "landingPage_landingPage__bg2l6",
        heroContent: "landingPage_heroContent__bMbQp",
        heroButtons: "landingPage_heroButtons__RjWmN",
        heroWrapper: "landingPage_heroWrapper__unxy2",
        registerButton: "landingPage_registerButton__DEeTm",
        pricingButton: "landingPage_pricingButton__7d0tA",
        claimNow: "landingPage_claimNow__sCAwZ",
        inputWrapperDiv: "landingPage_inputWrapperDiv__gYRU2",
        inputWrapperSpan: "landingPage_inputWrapperSpan__fPb3C",
        inputWrapperInput: "landingPage_inputWrapperInput__dPAKy",
        inputContainerWrapper: "landingPage_inputContainerWrapper__uz1Pw",
        expandAnimation: "landingPage_expandAnimation__AHRmj",
        elementAnimation: "landingPage_elementAnimation__ZWrRR",
        gunsGradient: "landingPage_gunsGradient__ciQdS",
        heroShowcase: "landingPage_heroShowcase__tvd02",
        heroContentWrapper: "landingPage_heroContentWrapper__QJIV_",
        statisticsShowcase: "landingPage_statisticsShowcase__N7jpz",
        statisticsDescription: "landingPage_statisticsDescription__9AIOq",
        userMarqueeWrapper: "landingPage_userMarqueeWrapper__epP7I",
        userMarquee: "landingPage_userMarquee__uC2vt",
        userProfile: "landingPage_userProfile__quSIz",
        userDescription: "landingPage_userDescription__WtKKd",
        statisticBoxWrapper: "landingPage_statisticBoxWrapper__0CxBG",
        statisticBox: "landingPage_statisticBox__K0UHU",
        boxWrapper: "landingPage_boxWrapper__XdEPT",
        premiumShowcase: "landingPage_premiumShowcase__X8D4A",
        premiumHeadingText: "landingPage_premiumHeadingText__9aGfe",
        lifetimeText: "landingPage_lifetimeText__lYrml",
        claimProfileWrapper: "landingPage_claimProfileWrapper__g_Fbe",
        claimProfileText: "landingPage_claimProfileText__Q2_7m",
        claimProfileBox: "landingPage_claimProfileBox__yAW9m"
      }
    },
    66348: e => {
      e.exports = {
        headerWrapper: "pageLayoutComponents_headerWrapper__PEl5_",
        header: "pageLayoutComponents_header__fG_oc",
        leftSideHeader: "pageLayoutComponents_leftSideHeader__2XrWi",
        logo: "pageLayoutComponents_logo__EjkW_",
        desktopNav: "pageLayoutComponents_desktopNav__bupx5",
        desktopNavExpanded: "pageLayoutComponents_desktopNavExpanded__fSHjS",
        highlightedLink: "pageLayoutComponents_highlightedLink__KRSlq",
        mobileMenuButton: "pageLayoutComponents_mobileMenuButton__isPqj",
        forceMobileNav: "pageLayoutComponents_forceMobileNav__KqaIE",
        footerWrapper: "pageLayoutComponents_footerWrapper__D48Wh",
        footer: "pageLayoutComponents_footer__QaXMw",
        footerLeft: "pageLayoutComponents_footerLeft__qC_6L",
        serviceWrapper: "pageLayoutComponents_serviceWrapper__yIm4X",
        logoWrapper: "pageLayoutComponents_logoWrapper__4c3tI",
        logoFooter: "pageLayoutComponents_logoFooter__kEHja",
        footerRight: "pageLayoutComponents_footerRight__6X2Yr",
        linkCategory: "pageLayoutComponents_linkCategory__0ZpNI",
        links: "pageLayoutComponents_links__oVOSE",
        active: "pageLayoutComponents_active__azh89",
        mobileNavigation: "pageLayoutComponents_mobileNavigation__MVxK2",
        mobileNavigationOpen: "pageLayoutComponents_mobileNavigationOpen__4Igcc",
        mobileNavGroup: "pageLayoutComponents_mobileNavGroup__eCTCr",
        mobileNavLanguage: "pageLayoutComponents_mobileNavLanguage__6765i",
        blurBackground: "pageLayoutComponents_blurBackground__IPc1g",
        gunsBanner: "pageLayoutComponents_gunsBanner__yNZ2x",
        gunsBannerDescription: "pageLayoutComponents_gunsBannerDescription__9WjRU",
        gunsBannerButtons: "pageLayoutComponents_gunsBannerButtons__icKl7",
        gunsBannerWrapper: "pageLayoutComponents_gunsBannerWrapper__1Ukav",
        faq: "pageLayoutComponents_faq__rxsWU",
        faqText: "pageLayoutComponents_faqText__U8r2d",
        headerWrapperActive: "pageLayoutComponents_headerWrapperActive__ZjZrr",
        categorySeperator: "pageLayoutComponents_categorySeperator__Fzy2v",
        footerSocials: "pageLayoutComponents_footerSocials__KgUSW",
        statusUp: "pageLayoutComponents_statusUp__ZWKB5",
        statusPartial: "pageLayoutComponents_statusPartial__Hw8Q2",
        statusDown: "pageLayoutComponents_statusDown__dj1L7",
        systemStatus: "pageLayoutComponents_systemStatus__wgSea",
        footerContainer: "pageLayoutComponents_footerContainer__Rv8a3",
        footerBottom: "pageLayoutComponents_footerBottom__2hLZW",
        footerBottomWrapper: "pageLayoutComponents_footerBottomWrapper__omqYa",
        footerDivider: "pageLayoutComponents_footerDivider__yo5_9",
        footerCopyright: "pageLayoutComponents_footerCopyright__rgLlT",
        languageSelectionFooter: "pageLayoutComponents_languageSelectionFooter___K3ym"
      }
    },
    67361: e => {
      e.exports = {
        accordion: "accordion_accordion__N17UW",
        item: "accordion_item__39egf",
        control: "accordion_control__fcaOt",
        panel: "accordion_panel__ewbOR",
        content: "accordion_content__3mhM7",
        contentInner: "accordion_contentInner__8XOty"
      }
    },
    81382: (e, o, a) => {
      "use strict";
      a.d(o, {
        A: () => v
      });
      var t = a(95155),
        r = a(66348),
        n = a.n(r),
        s = a(59791),
        l = a.n(s),
        i = a(54834),
        c = a(98500),
        d = a.n(c),
        g = a(12115),
        h = a(22834),
        m = a(66493),
        p = a(81934),
        _ = a(38256);

      function u({
        formattedUsers: e
      }) {
        let o = (0, _.kj)(),
          a = new Date().getFullYear(),
          [r, s] = (0, g.useState)(""),
          [c, u] = (0, g.useState)("up"),
          f = [{
            question: o("common.footer.faq.question_1"),
            answer: o("common.footer.faq.answer_1")
          }, {
            question: o("common.footer.faq.question_2"),
            answer: o("common.footer.faq.answer_2")
          }, {
            question: o("common.footer.faq.question_3"),
            answer: o("common.footer.faq.answer_3")
          }, {
            question: o("common.footer.faq.question_4"),
            answer: o("common.footer.faq.answer_4")
          }, {
            question: o("common.footer.faq.question_5"),
            answer: o("common.footer.faq.answer_5", {
              users: e
            })
          }, {
            question: o("common.footer.faq.question_6"),
            answer: o("common.footer.faq.answer_6")
          }].map(e => (0, t.jsxs)(h.n.Item, {
            value: e.question,
            children: [(0, t.jsx)(h.n.Control, {
              children: e.question
            }), (0, t.jsx)(h.n.Panel, {
              children: e.answer
            })]
          }, e.question));
        (0, g.useEffect)(() => {
          (async () => {
            let e = await fetch("/api/statusLogs?excludeLogs=true", {
              cache: "no-store"
            });
            u((await e.json()).currentStatus)
          })()
        }, []);
        let x = {
          up: (0, t.jsx)("span", {
            className: n().statusUp,
            children: i.A.statusDot
          }),
          down: (0, t.jsx)("span", {
            className: n().statusDown,
            children: i.A.statusDot
          }),
          partial: (0, t.jsx)("span", {
            className: n().statusPartial,
            children: i.A.statusDot
          })
        };
        return (0, t.jsxs)("div", {
          children: [(0, t.jsxs)("div", {
            className: n().faq,
            children: [(0, t.jsx)("h1", {
              className: n().faqText,
              children: o("common.footer.faq.title")
            }), (0, t.jsx)(h.n, {
              children: f
            })]
          }), (0, t.jsxs)("div", {
            className: n().footerWrapper,
            children: [(0, t.jsx)("div", {
              className: n().gunsBannerWrapper,
              children: (0, t.jsx)("div", {
                className: n().gunsBanner,
                children: (0, t.jsxs)("div", {
                  className: n().gunsBannerDescription,
                  children: [(0, t.jsx)("h1", {
                    children: o("common.footer.banner.title")
                  }), (0, t.jsx)("h3", {
                    children: o("common.footer.banner.description", {
                      users: e
                    })
                  }), (0, t.jsxs)("div", {
                    className: n().gunsBannerButtons,
                    children: [(0, t.jsx)("div", {
                      className: l().inputContainerWrapper,
                      children: (0, t.jsxs)("div", {
                        className: `${l().inputWrapperDiv} ${l().inputWrapperURL}`,
                        children: [(0, t.jsx)("span", {
                          className: `${l().inputWrapperSpan}`,
                          style: {
                            position: "absolute"
                          },
                          children: (0, t.jsx)("h1", {
                            children: "guns.lol/"
                          })
                        }), (0, t.jsx)("input", {
                          autoCorrect: "false",
                          value: r,
                          onChange: e => {
                            s(e.target.value)
                          },
                          type: "text",
                          placeholder: o("common.footer.banner.claim_input_placeholder"),
                          className: l().inputWrapperInput
                        })]
                      })
                    }), (0, t.jsx)(p.A, {
                      href: `/register?claim=${r}&ref=guns_footer_banner`,
                      className: `${l().claimNow}`,
                      children: o("common.footer.banner.claim_now_text")
                    })]
                  })]
                })
              })
            }), (0, t.jsxs)("div", {
              className: n().footerContainer,
              children: [(0, t.jsxs)("div", {
                className: n().footer,
                children: [(0, t.jsxs)("div", {
                  className: n().footerLeft,
                  children: [(0, t.jsxs)("div", {
                    className: n().serviceWrapper,
                    children: [(0, t.jsxs)("div", {
                      className: n().logoWrapper,
                      children: [(0, t.jsxs)("div", {
                        className: n().logoFooter,
                        children: [(0, t.jsx)("img", {
                          src: "https://assets.guns.lol/guns_logo_no_background_cropped.png",
                          alt: ""
                        }), (0, t.jsxs)("h1", {
                          children: ["guns", (0, t.jsx)("span", {
                            children: "."
                          }), "lol"]
                        })]
                      }), (0, t.jsx)(d(), {
                        href: "https://status.guns.lol",
                        target: "_blank",
                        children: (0, t.jsxs)("span", {
                          className: n().systemStatus,
                          children: [x[c], " ", o("common.footer.banner.system_status_text")]
                        })
                      })]
                    }), (0, t.jsx)("span", {
                      children: o("common.footer.footer_description")
                    })]
                  }), (0, t.jsx)("div", {
                    className: n().languageSelectionFooter,
                    children: (0, t.jsx)(m.A, {})
                  })]
                }), (0, t.jsxs)("div", {
                  className: n().footerRight,
                  children: [(0, t.jsxs)("div", {
                    className: n().categorySeperator,
                    children: [(0, t.jsxs)("div", {
                      className: n().linkCategory,
                      children: [(0, t.jsx)("h1", {
                        children: o("common.footer.footer_categories.general")
                      }), (0, t.jsxs)("div", {
                        className: n().links,
                        children: [(0, t.jsx)(p.A, {
                          href: "/login",
                          children: o("common.footer.footer_categories_links.login")
                        }), (0, t.jsx)(p.A, {
                          href: "/register?ref=footer",
                          children: o("common.footer.footer_categories_links.sign_up")
                        }), (0, t.jsx)(p.A, {
                          href: "/pricing",
                          children: o("common.footer.footer_categories_links.pricing")
                        }), (0, t.jsx)(p.A, {
                          href: "/recovery",
                          children: o("common.footer.footer_categories_links.recover_account")
                        }), (0, t.jsx)(p.A, {
                          href: "/leaderboard",
                          children: o("common.footer.footer_categories_links.leaderboard")
                        }), (0, t.jsx)(d(), {
                          href: "https://status.guns.lol",
                          target: "_blank",
                          children: o("common.footer.footer_categories_links.website_status")
                        })]
                      })]
                    }), (0, t.jsxs)("div", {
                      className: n().linkCategory,
                      children: [(0, t.jsx)("h1", {
                        children: o("common.footer.footer_categories.resources")
                      }), (0, t.jsxs)("div", {
                        className: n().links,
                        children: [(0, t.jsx)(d(), {
                          href: "https://help.guns.lol",
                          target: "_blank",
                          children: o("common.footer.footer_categories_links.help_center")
                        }), (0, t.jsx)(d(), {
                          href: "https://help.guns.lol/changelog",
                          target: "_blank",
                          children: o("common.footer.footer_categories_links.changelog")
                        }), (0, t.jsx)(d(), {
                          href: "/account/redeem",
                          children: o("common.footer.footer_categories_links.redeem_code")
                        }), (0, t.jsx)(d(), {
                          href: "https://salad.com/store/rewards/773aded6-552a-46f0-acc9-99324ca32efe",
                          target: "_blank",
                          children: o("common.footer.footer_categories_links.salad_product")
                        }), (0, t.jsx)(d(), {
                          href: "https://hone.gg/a/guns",
                          target: "_blank",
                          children: o("common.footer.footer_categories_links.hone_product")
                        })]
                      })]
                    })]
                  }), (0, t.jsxs)("div", {
                    className: n().categorySeperator,
                    children: [(0, t.jsxs)("div", {
                      className: n().linkCategory,
                      children: [(0, t.jsx)("h1", {
                        children: o("common.footer.footer_categories.contact")
                      }), (0, t.jsxs)("div", {
                        className: n().links,
                        children: [(0, t.jsx)(d(), {
                          href: "https://discord.gg/guns",
                          target: "_blank",
                          children: o("common.footer.footer_categories_links.discord_server")
                        }), (0, t.jsx)(d(), {
                          href: "mailto:support@guns.lol",
                          children: o("common.footer.footer_categories_links.support_email")
                        }), (0, t.jsx)(d(), {
                          href: "mailto:business@guns.lol",
                          children: o("common.footer.footer_categories_links.business_email")
                        }), (0, t.jsx)(d(), {
                          href: "mailto:legal@guns.lol",
                          children: o("common.footer.footer_categories_links.legal_email")
                        })]
                      })]
                    }), (0, t.jsxs)("div", {
                      className: n().linkCategory,
                      children: [(0, t.jsx)("h1", {
                        children: o("common.footer.footer_categories.legal")
                      }), (0, t.jsxs)("div", {
                        className: n().links,
                        children: [(0, t.jsx)(p.A, {
                          href: "/terms",
                          children: o("common.footer.footer_categories_links.terms_of_service")
                        }), (0, t.jsx)(p.A, {
                          href: "/privacy",
                          children: o("common.footer.footer_categories_links.privacy_policy")
                        }), (0, t.jsx)(p.A, {
                          href: "/terms/copyright",
                          children: o("common.footer.footer_categories_links.copyright_policy")
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, t.jsxs)("div", {
                className: n().footerBottomWrapper,
                children: [(0, t.jsx)("div", {
                  className: n().footerDivider
                }), (0, t.jsxs)("div", {
                  className: n().footerBottom,
                  children: [(0, t.jsx)("span", {
                    className: n().footerCopyright,
                    children: o("common.footer.footer_copyright_text", {
                      year: a
                    })
                  }), (0, t.jsxs)("div", {
                    className: n().footerSocials,
                    children: [(0, t.jsx)(d(), {
                      href: "https://discord.gg/guns",
                      target: "_blank",
                      children: i.A.discord
                    }), (0, t.jsx)(d(), {
                      href: "https://tiktok.com/@guns.lol",
                      target: "_blank",
                      children: i.A.tiktok
                    }), (0, t.jsx)(d(), {
                      href: "https://x.com/gunsdotlol",
                      target: "_blank",
                      children: i.A.x
                    }), (0, t.jsx)(d(), {
                      href: "https://t.me/gunsbio",
                      target: "_blank",
                      children: i.A.telegram
                    })]
                  })]
                })]
              })]
            })]
          })]
        })
      }
      var f = a(87974);

      function x({
        data: e
      }) {
        let o = !!e?.session?.userId,
          [a, r] = (0, g.useState)(!1),
          [s, l] = (0, g.useState)(!1),
          i = (0, g.useRef)(null),
          c = (0, g.useRef)(null),
          h = (0, _.kj)(),
          p = (0, _.VJ)(),
          u = (0, g.useMemo)(() => [{
            label: h("common.header.navigation.help_center"),
            href: "https://help.guns.lol",
            external: !0
          }, {
            label: h("common.header.navigation.discord"),
            href: "https://discord.gg/guns",
            external: !0
          }, {
            label: h("common.header.navigation.leaderboard"),
            href: "/leaderboard"
          }, {
            label: h("common.header.navigation.pricing"),
            href: p("/pricing")
          }], []),
          x = o ? [{
            label: h("common.header.navigation.dashboard"),
            href: "/account",
            highlighted: !0
          }] : [{
            label: h("common.header.navigation.login"),
            href: p("/login")
          }, {
            label: h("common.header.navigation.sign_up"),
            href: p("/register?ref=header"),
            highlighted: !0
          }],
          v = o ? n().desktopNav : n().desktopNavExpanded,
          j = e => (0, t.jsx)(d(), {
            href: e.href,
            target: e.external ? "_blank" : void 0,
            rel: e.external ? "noreferrer" : void 0,
            className: e.highlighted ? n().highlightedLink : void 0,
            children: e.label
          }, e.label);
        (0, g.useEffect)(() => {
          let e = () => {
            if (!i.current || !c.current) return;
            let e = i.current.getBoundingClientRect(),
              o = c.current.getBoundingClientRect();
            0 === o.width ? l(!0) : l(o.left - e.right < 24)
          };
          e(), window.addEventListener("resize", e);
          let o = null;
          return "undefined" != typeof ResizeObserver && (o = new ResizeObserver(e), i.current && o.observe(i.current), c.current && o.observe(c.current)), () => {
            window.removeEventListener("resize", e), o?.disconnect()
          }
        }, [o]);
        let w = (0, g.useRef)(s),
          C = [n().header, a ? n().active : "", s ? n().forceMobileNav : ""].filter(Boolean).join(" ");
        return (0, g.useEffect)(() => {
          w.current && !s && r(!1), w.current = s
        }, [s]), (0, t.jsx)("header", {
          className: `${n().headerWrapper} ${a?n().headerWrapperActive:""}`,
          children: (0, t.jsxs)("div", {
            className: C,
            children: [(0, t.jsx)("div", {
              className: n().blurBackground
            }), (0, t.jsx)(d(), {
              href: "/",
              className: n().leftSideHeader,
              ref: i,
              children: (0, t.jsxs)("div", {
                className: n().logo,
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
              ref: c,
              children: [u.map(j), x.map(j)]
            }), (0, t.jsx)("span", {
              className: n().mobileMenuButton,
              onClick: () => r(e => !e),
              children: f.A.hamburger
            }), (0, t.jsxs)("div", {
              className: `${n().mobileNavigation} ${a?n().mobileNavigationOpen:""}`,
              children: [(0, t.jsx)("div", {
                className: n().mobileNavGroup,
                children: u.map(j)
              }), (0, t.jsxs)("div", {
                className: n().mobileNavGroup,
                children: [(0, t.jsx)("div", {
                  className: n().mobileNavLanguage,
                  children: (0, t.jsx)(m.A, {})
                }), x.map(j)]
              })]
            })]
          })
        })
      }

      function v({
        children: e,
        data: o,
        statsData: a
      }) {
        let r = (1e4 * Math.round(a.users / 1e4)).toLocaleString("en-US");
        return (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)(x, {
            data: o
          }), e, (0, t.jsx)(u, {
            formattedUsers: r
          })]
        })
      }
    },
    87974: (e, o, a) => {
      "use strict";
      a.d(o, {
        A: () => r
      });
      var t = a(95155);
      a(12115);
      let r = {
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
      }
    }
  }
]);