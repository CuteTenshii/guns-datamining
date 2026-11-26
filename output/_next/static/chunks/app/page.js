(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8974], {
    9393: (e, s, i) => {
      Promise.resolve().then(i.bind(i, 76436))
    },
    24795: (e, s, i) => {
      "use strict";
      i.d(s, {
        A: () => t
      });
      var r = i(95155),
        n = i(61836),
        a = i(98028);

      function t({
        product: e
      }) {
        let s = (0, a.u)(),
          i = n.EJ[e],
          t = s ? n.q9[e] : i;
        return (0, r.jsxs)(r.Fragment, {
          children: [t < i && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("s", {
              children: (0, n.$g)(i)
            }), " "]
          }), (0, n.$g)(t)]
        })
      }
    },
    41029: (e, s, i) => {
      "use strict";
      i.d(s, {
        B: () => r,
        p: () => n
      });
      let r = {
        badge: "black_week_2026",
        startsAt: Date.parse("2026-11-25T00:00:00+01:00"),
        endsAt: 1796252399e3,
        discountPercent: 15,
        giftDiscountPercent: 10
      };

      function n(e = Date.now()) {
        return e >= r.startsAt && e < r.endsAt
      }
    },
    61836: (e, s, i) => {
      "use strict";
      i.d(s, {
        $g: () => p,
        EJ: () => n,
        KH: () => c,
        YL: () => l,
        Yi: () => t,
        dd: () => m,
        gP: () => u,
        it: () => o,
        o3: () => h,
        q9: () => a,
        wH: () => d
      });
      var r = i(41029);
      let n = {
          free: 0,
          premium: 7.99,
          premiumGift: 7.19,
          imagehost: 4.99,
          imagehostGift: 4.99,
          verified: 14.99,
          verifiedGift: 14.99,
          customBadge: 8.99,
          customBadgeGift: 8.99,
          badgeCredit: 2.99,
          aliasCredit: 4.99,
          donationMinimum: 1,
          donorBadgeMinimum: 10
        },
        a = {
          free: n.free,
          get premium() {
            return (0, r.p)() ? 6.79 : n.premium
          },
          get premiumGift() {
            return (0, r.p)() ? 6.49 : n.premiumGift
          },
          get imagehost() {
            return (0, r.p)() ? 4.25 : n.imagehost
          },
          get imagehostGift() {
            return (0, r.p)() ? 4.49 : n.imagehostGift
          },
          get verified() {
            return (0, r.p)() ? 12.75 : n.verified
          },
          get verifiedGift() {
            return (0, r.p)() ? 13.49 : n.verifiedGift
          },
          get customBadge() {
            return (0, r.p)() ? 7.65 : n.customBadge
          },
          get customBadgeGift() {
            return (0, r.p)() ? 8.09 : n.customBadgeGift
          },
          get badgeCredit() {
            return (0, r.p)() ? 2.55 : n.badgeCredit
          },
          get aliasCredit() {
            return (0, r.p)() ? 4.25 : n.aliasCredit
          },
          donationMinimum: n.donationMinimum,
          donorBadgeMinimum: n.donorBadgeMinimum
        },
        t = [{
          gb: 5,
          price: 4.99
        }, {
          gb: 10,
          price: 9.99,
          recommended: !0
        }, {
          gb: 25,
          price: 19.99
        }, {
          gb: 50,
          price: 34.99
        }],
        c = 5,
        l = 200;

      function d(e) {
        return !Number.isInteger(e) || e < c || e > l ? null : (100 * Math.ceil((e <= 10 ? 100 * e - 1 : e <= 25 ? 999 + Math.round(1e3 / 15 * (e - 10)) : e <= 50 ? 1999 + (e - 25) * 60 : 3499 + (e - 50) * 50) / 100) - 1) / 100
      }
      let m = 15,
        o = {
          get premiumlifetime() {
            return a.premium
          },
          get imagehost() {
            return a.imagehost
          },
          get verified() {
            return a.verified
          },
          get custombadge() {
            return a.customBadge
          },
          get aliascredits() {
            return a.aliasCredit
          }
        };

      function p(e) {
        return `${e.toFixed(2).replace(/\.00$/,"").replace(".",",")}€`
      }

      function u(e) {
        let s = a.badgeCredit * e ** .85,
          i = n.badgeCredit * e;
        return {
          totalPrice: Number(s.toFixed(2)),
          discountPercent: Number(((1 - s / i) * 100).toFixed(0))
        }
      }

      function h(e, s = !1) {
        let i = (s && (0, r.p)() ? .9 * n.customBadgeGift : a.customBadge) * e ** .95,
          t = n.customBadge * e;
        return {
          totalPrice: Number(i.toFixed(2)),
          rawPrice: Number(t.toFixed(2)),
          discountPercent: Number(((1 - i / t) * 100).toFixed(0))
        }
      }
    },
    76436: (e, s, i) => {
      "use strict";
      i.d(s, {
        default: () => _
      });
      var r = i(95155),
        n = i(79939),
        a = i(24795),
        t = i(59791),
        c = i.n(t),
        l = i(81382),
        d = i(87974),
        m = i(12115),
        o = i(60884);
      let p = ({
        children: e,
        amount: s
      }) => (0, r.jsx)(o.P.div, {
        initial: {
          opacity: 0,
          y: -80,
          scale: .8
        },
        whileInView: {
          opacity: 1,
          y: 0,
          scale: 1
        },
        viewport: {
          once: !0,
          amount: s
        },
        transition: {
          duration: .3,
          type: "spring",
          stiffness: 80,
          damping: 12,
          mass: 1
        },
        children: e
      });
      var u = i(86278),
        h = i.n(u),
        g = i(34023),
        x = i(81934),
        f = i(86891),
        j = i(61836);

      function _({
        data: e
      }) {
        let s = e.statsData,
          i = e.tokenData,
          t = (0, f.kj)(),
          [o, u] = (0, m.useState)(""),
          [_, v] = (0, m.useState)(null),
          N = (1e4 * Math.round(s.users / 1e4)).toLocaleString("en-US"),
          b = (1e5 * Math.round(s.views / 1e5)).toLocaleString("en-US"),
          A = (1e4 * Math.round(s.uploads / 1e4)).toLocaleString("en-US"),
          k = (100 * Math.round(s.premium / 100)).toLocaleString("en-US"),
          w = _ && _ < 768 ? .3 : .6;
        return (0, m.useEffect)(() => {
          document.querySelectorAll(`.${c().elementAnimation}`).forEach((e, s) => {
            setTimeout(() => {
              e.classList.add(c().expandAnimation)
            }, 350 + 300 * s)
          }), v(window.innerWidth)
        }, []), (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)(l.default, {
            data: i,
            statsData: s,
            children: [(0, r.jsx)("div", {
              className: c().landingPage,
              children: (0, r.jsxs)("div", {
                className: c().heroWrapper,
                children: [(0, r.jsx)("img", {
                  className: c().gunsGradient,
                  draggable: !1,
                  src: "https://assets.guns.lol/gradient_background.png",
                  alt: ""
                }), (0, r.jsxs)("div", {
                  className: `${c().heroContentWrapper} ${c().elementAnimation}`,
                  children: [(0, r.jsxs)("div", {
                    className: c().heroContent,
                    children: [(0, r.jsx)(n.A, {}), (0, r.jsx)("h1", {
                      children: t("landing.hero.title")
                    }), (0, r.jsx)("p", {
                      children: t("landing.hero.description")
                    })]
                  }), (0, r.jsxs)("div", {
                    className: c().heroButtons,
                    children: [(0, r.jsx)(x.A, {
                      href: "/register?ref=landing_page_hero",
                      className: `${c().registerButton}`,
                      children: t("landing.hero.sign_up")
                    }), (0, r.jsx)(x.A, {
                      href: "/pricing",
                      className: `${c().pricingButton}`,
                      children: t("landing.hero.view_pricing")
                    })]
                  })]
                }), (0, r.jsxs)("div", {
                  className: `${c().heroShowcase} ${c().elementAnimation}`,
                  children: [(0, r.jsx)("img", {
                    src: "https://assets.guns.lol/dashboard.png",
                    alt: ""
                  }), (0, r.jsx)("img", {
                    src: "https://assets.guns.lol/profile_showcase.png",
                    alt: ""
                  })]
                })]
              })
            }), (0, r.jsx)(p, {
              amount: w,
              children: (0, r.jsxs)("div", {
                className: `${c().statisticsShowcase} ${c().elementAnimation}`,
                children: [(0, r.jsxs)("div", {
                  className: c().statisticsDescription,
                  children: [(0, r.jsx)("h1", {
                    children: t("landing.stats.title", {
                      users: (0, r.jsx)("span", {
                        children: N
                      })
                    })
                  }), (0, r.jsx)("h3", {
                    children: t("landing.stats.description")
                  }), (0, r.jsxs)("div", {
                    className: c().statisticBoxWrapper,
                    children: [(0, r.jsxs)("div", {
                      className: c().statisticBox,
                      children: [(0, r.jsxs)("div", {
                        className: c().boxWrapper,
                        children: [(0, r.jsxs)("h1", {
                          children: [b, "+"]
                        }), (0, r.jsx)("span", {
                          children: t("landing.stats.profile_views")
                        })]
                      }), d.A.profileViews]
                    }), (0, r.jsxs)("div", {
                      className: c().statisticBox,
                      children: [(0, r.jsxs)("div", {
                        className: c().boxWrapper,
                        children: [(0, r.jsxs)("h1", {
                          children: [N, "+"]
                        }), (0, r.jsx)("span", {
                          children: t("landing.stats.users")
                        })]
                      }), d.A.users]
                    }), (0, r.jsxs)("div", {
                      className: c().statisticBox,
                      children: [(0, r.jsxs)("div", {
                        className: c().boxWrapper,
                        children: [(0, r.jsxs)("h1", {
                          children: [A, "+"]
                        }), (0, r.jsx)("span", {
                          children: t("landing.stats.file_uploads")
                        })]
                      }), d.A.fileUploads]
                    }), (0, r.jsxs)("div", {
                      className: c().statisticBox,
                      children: [(0, r.jsxs)("div", {
                        className: c().boxWrapper,
                        children: [(0, r.jsxs)("h1", {
                          children: [k, "+"]
                        }), (0, r.jsx)("span", {
                          children: t("landing.stats.subscribers")
                        })]
                      }), d.A.subscribers]
                    })]
                  })]
                }), (0, r.jsxs)("div", {
                  className: c().claimProfileWrapper,
                  children: [(0, r.jsx)("h1", {
                    className: c().claimProfileText,
                    children: t("landing.stats.claim_profile_text")
                  }), (0, r.jsxs)("div", {
                    className: c().claimProfileBox,
                    children: [(0, r.jsx)("div", {
                      className: c().inputContainerWrapper,
                      children: (0, r.jsxs)("div", {
                        className: `${c().inputWrapperDiv} ${c().inputWrapperURL}`,
                        children: [(0, r.jsx)("span", {
                          className: c().inputWrapperSpan,
                          children: (0, r.jsx)("h1", {
                            children: "guns.lol/"
                          })
                        }), (0, r.jsx)("input", {
                          autoCorrect: "off",
                          value: o,
                          onInput: e => {
                            u(e.target.value)
                          },
                          type: "text",
                          placeholder: t("landing.stats.claim_input_placeholder"),
                          className: `${c().inputWrapperInput}`
                        })]
                      })
                    }), (0, r.jsx)(x.A, {
                      href: `/register?claim=${o}&ref=landing_page`,
                      className: `${c().claimNow}`,
                      children: t("landing.stats.claim_now_text")
                    })]
                  })]
                })]
              })
            }), (0, r.jsx)(p, {
              amount: w,
              children: (0, r.jsxs)("div", {
                className: c().premiumShowcase,
                children: [(0, r.jsx)("h1", {
                  className: c().premiumHeadingText,
                  children: t("landing.pricing.title", {
                    subscribers: (0, r.jsxs)("span", {
                      children: [k, "+"]
                    })
                  })
                }), (0, r.jsxs)("div", {
                  className: h().plans,
                  children: [(0, r.jsxs)("div", {
                    className: h().freePlan,
                    children: [(0, r.jsx)("h1", {
                      className: h().freePlanText,
                      children: t("common.pricing.free_plan.name")
                    }), (0, r.jsx)("div", {
                      className: h().price,
                      children: (0, r.jsxs)("h1", {
                        children: [(0, j.$g)(j.q9.free), (0, r.jsxs)("span", {
                          children: ["/", t("common.pricing.lifetime_text")]
                        })]
                      })
                    }), (0, r.jsx)("h3", {
                      children: t("common.pricing.free_plan.description")
                    }), (0, r.jsxs)("div", {
                      className: h().features,
                      children: [(0, r.jsxs)("span", {
                        children: [g.A.checkmark, " ", t("common.pricing.free_plan.features.basic_customization")]
                      }), (0, r.jsxs)("span", {
                        children: [g.A.checkmark, " ", t("common.pricing.free_plan.features.profile_analytics")]
                      }), (0, r.jsxs)("span", {
                        children: [g.A.checkmark, " ", t("common.pricing.free_plan.features.basic_effects")]
                      }), (0, r.jsxs)("span", {
                        children: [g.A.checkmark, " ", t("common.pricing.free_plan.features.add_your_socials")]
                      })]
                    }), (0, r.jsx)(x.A, {
                      className: h().purchaseButton,
                      href: "/register?ref=landing_page_pricing",
                      children: t("common.pricing.free_plan.button")
                    })]
                  }), (0, r.jsxs)("div", {
                    className: h().premium,
                    children: [(0, r.jsxs)("h1", {
                      className: h().premiumText,
                      children: [g.A.premium, " ", t("common.pricing.premium_plan.name")]
                    }), (0, r.jsxs)("div", {
                      className: h().price,
                      children: [(0, r.jsxs)("h1", {
                        children: [(0, r.jsx)(a.A, {
                          product: "premium"
                        }), (0, r.jsxs)("span", {
                          children: ["/", t("common.pricing.lifetime_text")]
                        })]
                      }), (0, r.jsx)("span", {
                        className: h().lifetimeText,
                        children: t("common.pricing.lifetime_text_description")
                      })]
                    }), (0, r.jsx)("h3", {
                      children: t("common.pricing.premium_plan.description")
                    }), (0, r.jsxs)("div", {
                      className: h().features,
                      children: [(0, r.jsxs)("span", {
                        children: [g.A.checkmark, " ", t("common.pricing.premium_plan.features.exclusive_badge")]
                      }), (0, r.jsxs)("span", {
                        children: [g.A.checkmark, " ", t("common.pricing.premium_plan.features.profile_layouts")]
                      }), (0, r.jsxs)("span", {
                        children: [g.A.checkmark, " ", t("common.pricing.premium_plan.features.custom_fonts")]
                      }), (0, r.jsxs)("span", {
                        children: [g.A.checkmark, " ", t("common.pricing.premium_plan.features.typewriter_animation")]
                      }), (0, r.jsxs)("span", {
                        children: [g.A.checkmark, " ", t("common.pricing.premium_plan.features.special_profile_effects")]
                      }), (0, r.jsxs)("span", {
                        children: [g.A.checkmark, " ", t("common.pricing.premium_plan.features.advanced_customization")]
                      }), (0, r.jsxs)("span", {
                        children: [g.A.checkmark, " ", t("common.pricing.premium_plan.features.metadata_seo_customization")]
                      })]
                    }), (0, r.jsx)(x.A, {
                      className: h().purchaseButton,
                      href: "/pricing",
                      style: {
                        marginTop: "60px"
                      },
                      children: t("landing.pricing.premium_plan_button")
                    }), (0, r.jsx)("div", {
                      className: h().mostPopularWrapper,
                      children: (0, r.jsx)("span", {
                        className: h().mostPopular,
                        children: t("common.pricing.most_popular")
                      })
                    })]
                  })]
                })]
              })
            })]
          })
        })
      }
    },
    98028: (e, s, i) => {
      "use strict";
      i.d(s, {
        u: () => a
      });
      var r = i(12115),
        n = i(41029);

      function a() {
        let [e, s] = (0, r.useState)(!1);
        return (0, r.useEffect)(() => {
          let e = () => s((0, n.p)());
          e();
          let i = window.setInterval(e, 1e3);
          return () => window.clearInterval(i)
        }, []), e
      }
    }
  },
  e => {
    e.O(0, [8604, 5311, 379, 4236, 6609, 4293, 5810, 5686, 884, 6891, 5886, 9182, 8481, 3434, 1378, 5041, 1382, 1531, 8441, 3794, 7358], () => e(e.s = 9393)), _N_E = e.O()
  }
]);