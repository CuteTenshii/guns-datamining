(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8974], {
    9393: (e, s, i) => {
      Promise.resolve().then(i.bind(i, 76436))
    },
    61836: (e, s, i) => {
      "use strict";
      i.d(s, {
        $g: () => d,
        KH: () => r,
        YL: () => c,
        Yi: () => n,
        dd: () => l,
        gP: () => m,
        o3: () => o,
        q9: () => a,
        wH: () => t
      });
      let a = {
          free: 0,
          premium: 7.99,
          premiumGift: 7.19,
          imagehost: 4.99,
          verified: 14.99,
          customBadge: 8.99,
          badgeCredit: 2.99,
          aliasCredit: 4.99,
          donationMinimum: 1,
          donorBadgeMinimum: 10
        },
        n = [{
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
        r = 5,
        c = 200;

      function t(e) {
        return !Number.isInteger(e) || e < r || e > c ? null : (100 * Math.ceil((e <= 10 ? 100 * e - 1 : e <= 25 ? 999 + Math.round(1e3 / 15 * (e - 10)) : e <= 50 ? 1999 + (e - 25) * 60 : 3499 + (e - 50) * 50) / 100) - 1) / 100
      }
      let l = 15;

      function d(e) {
        return `${e.toFixed(2).replace(/\.00$/,"").replace(".",",")}€`
      }

      function m(e) {
        let s = a.badgeCredit * e ** .85,
          i = a.badgeCredit * e;
        return {
          totalPrice: Number(s.toFixed(2)),
          discountPercent: Number(((1 - s / i) * 100).toFixed(0))
        }
      }

      function o(e) {
        let s = a.customBadge * e ** .95,
          i = a.customBadge * e;
        return {
          totalPrice: Number(s.toFixed(2)),
          rawPrice: Number(i.toFixed(2)),
          discountPercent: Number(((1 - s / i) * 100).toFixed(0))
        }
      }
      a.premium, a.imagehost, a.verified, a.customBadge, a.aliasCredit
    },
    76436: (e, s, i) => {
      "use strict";
      i.d(s, {
        default: () => j
      });
      var a = i(95155),
        n = i(59791),
        r = i.n(n),
        c = i(81382),
        t = i(87974),
        l = i(12115),
        d = i(60884);
      let m = ({
        children: e,
        amount: s
      }) => (0, a.jsx)(d.P.div, {
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
      var o = i(86278),
        p = i.n(o),
        h = i(34023),
        u = i(81934),
        x = i(86891),
        g = i(61836);

      function j({
        data: e
      }) {
        let s = e.statsData,
          i = e.tokenData,
          n = (0, x.kj)(),
          [d, o] = (0, l.useState)(""),
          [j, f] = (0, l.useState)(null),
          _ = (1e4 * Math.round(s.users / 1e4)).toLocaleString("en-US"),
          N = (1e5 * Math.round(s.views / 1e5)).toLocaleString("en-US"),
          v = (1e4 * Math.round(s.uploads / 1e4)).toLocaleString("en-US"),
          b = (100 * Math.round(s.premium / 100)).toLocaleString("en-US"),
          k = j && j < 768 ? .3 : .6;
        return (0, l.useEffect)(() => {
          document.querySelectorAll(`.${r().elementAnimation}`).forEach((e, s) => {
            setTimeout(() => {
              e.classList.add(r().expandAnimation)
            }, 350 + 300 * s)
          }), f(window.innerWidth)
        }, []), (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)(c.default, {
            data: i,
            statsData: s,
            children: [(0, a.jsx)("div", {
              className: r().landingPage,
              children: (0, a.jsxs)("div", {
                className: r().heroWrapper,
                children: [(0, a.jsx)("img", {
                  className: r().gunsGradient,
                  draggable: !1,
                  src: "https://assets.guns.lol/gradient_background.png",
                  alt: ""
                }), (0, a.jsxs)("div", {
                  className: `${r().heroContentWrapper} ${r().elementAnimation}`,
                  children: [(0, a.jsxs)("div", {
                    className: r().heroContent,
                    children: [(0, a.jsx)("h1", {
                      children: n("landing.hero.title")
                    }), (0, a.jsx)("p", {
                      children: n("landing.hero.description")
                    })]
                  }), (0, a.jsxs)("div", {
                    className: r().heroButtons,
                    children: [(0, a.jsx)(u.A, {
                      href: "/register?ref=landing_page_hero",
                      className: `${r().registerButton}`,
                      children: n("landing.hero.sign_up")
                    }), (0, a.jsx)(u.A, {
                      href: "/pricing",
                      className: `${r().pricingButton}`,
                      children: n("landing.hero.view_pricing")
                    })]
                  })]
                }), (0, a.jsxs)("div", {
                  className: `${r().heroShowcase} ${r().elementAnimation}`,
                  children: [(0, a.jsx)("img", {
                    src: "https://assets.guns.lol/dashboard.png",
                    alt: ""
                  }), (0, a.jsx)("img", {
                    src: "https://assets.guns.lol/profile_showcase.png",
                    alt: ""
                  })]
                })]
              })
            }), (0, a.jsx)(m, {
              amount: k,
              children: (0, a.jsxs)("div", {
                className: `${r().statisticsShowcase} ${r().elementAnimation}`,
                children: [(0, a.jsxs)("div", {
                  className: r().statisticsDescription,
                  children: [(0, a.jsx)("h1", {
                    children: n("landing.stats.title", {
                      users: (0, a.jsx)("span", {
                        children: _
                      })
                    })
                  }), (0, a.jsx)("h3", {
                    children: n("landing.stats.description")
                  }), (0, a.jsxs)("div", {
                    className: r().statisticBoxWrapper,
                    children: [(0, a.jsxs)("div", {
                      className: r().statisticBox,
                      children: [(0, a.jsxs)("div", {
                        className: r().boxWrapper,
                        children: [(0, a.jsxs)("h1", {
                          children: [N, "+"]
                        }), (0, a.jsx)("span", {
                          children: n("landing.stats.profile_views")
                        })]
                      }), t.A.profileViews]
                    }), (0, a.jsxs)("div", {
                      className: r().statisticBox,
                      children: [(0, a.jsxs)("div", {
                        className: r().boxWrapper,
                        children: [(0, a.jsxs)("h1", {
                          children: [_, "+"]
                        }), (0, a.jsx)("span", {
                          children: n("landing.stats.users")
                        })]
                      }), t.A.users]
                    }), (0, a.jsxs)("div", {
                      className: r().statisticBox,
                      children: [(0, a.jsxs)("div", {
                        className: r().boxWrapper,
                        children: [(0, a.jsxs)("h1", {
                          children: [v, "+"]
                        }), (0, a.jsx)("span", {
                          children: n("landing.stats.file_uploads")
                        })]
                      }), t.A.fileUploads]
                    }), (0, a.jsxs)("div", {
                      className: r().statisticBox,
                      children: [(0, a.jsxs)("div", {
                        className: r().boxWrapper,
                        children: [(0, a.jsxs)("h1", {
                          children: [b, "+"]
                        }), (0, a.jsx)("span", {
                          children: n("landing.stats.subscribers")
                        })]
                      }), t.A.subscribers]
                    })]
                  })]
                }), (0, a.jsxs)("div", {
                  className: r().claimProfileWrapper,
                  children: [(0, a.jsx)("h1", {
                    className: r().claimProfileText,
                    children: n("landing.stats.claim_profile_text")
                  }), (0, a.jsxs)("div", {
                    className: r().claimProfileBox,
                    children: [(0, a.jsx)("div", {
                      className: r().inputContainerWrapper,
                      children: (0, a.jsxs)("div", {
                        className: `${r().inputWrapperDiv} ${r().inputWrapperURL}`,
                        children: [(0, a.jsx)("span", {
                          className: r().inputWrapperSpan,
                          children: (0, a.jsx)("h1", {
                            children: "guns.lol/"
                          })
                        }), (0, a.jsx)("input", {
                          autoCorrect: "off",
                          value: d,
                          onInput: e => {
                            o(e.target.value)
                          },
                          type: "text",
                          placeholder: n("landing.stats.claim_input_placeholder"),
                          className: `${r().inputWrapperInput}`
                        })]
                      })
                    }), (0, a.jsx)(u.A, {
                      href: `/register?claim=${d}&ref=landing_page`,
                      className: `${r().claimNow}`,
                      children: n("landing.stats.claim_now_text")
                    })]
                  })]
                })]
              })
            }), (0, a.jsx)(m, {
              amount: k,
              children: (0, a.jsxs)("div", {
                className: r().premiumShowcase,
                children: [(0, a.jsx)("h1", {
                  className: r().premiumHeadingText,
                  children: n("landing.pricing.title", {
                    subscribers: (0, a.jsxs)("span", {
                      children: [b, "+"]
                    })
                  })
                }), (0, a.jsxs)("div", {
                  className: p().plans,
                  children: [(0, a.jsxs)("div", {
                    className: p().freePlan,
                    children: [(0, a.jsx)("h1", {
                      className: p().freePlanText,
                      children: n("common.pricing.free_plan.name")
                    }), (0, a.jsx)("div", {
                      className: p().price,
                      children: (0, a.jsxs)("h1", {
                        children: [(0, g.$g)(g.q9.free), (0, a.jsxs)("span", {
                          children: ["/", n("common.pricing.lifetime_text")]
                        })]
                      })
                    }), (0, a.jsx)("h3", {
                      children: n("common.pricing.free_plan.description")
                    }), (0, a.jsxs)("div", {
                      className: p().features,
                      children: [(0, a.jsxs)("span", {
                        children: [h.A.checkmark, " ", n("common.pricing.free_plan.features.basic_customization")]
                      }), (0, a.jsxs)("span", {
                        children: [h.A.checkmark, " ", n("common.pricing.free_plan.features.profile_analytics")]
                      }), (0, a.jsxs)("span", {
                        children: [h.A.checkmark, " ", n("common.pricing.free_plan.features.basic_effects")]
                      }), (0, a.jsxs)("span", {
                        children: [h.A.checkmark, " ", n("common.pricing.free_plan.features.add_your_socials")]
                      })]
                    }), (0, a.jsx)(u.A, {
                      className: p().purchaseButton,
                      href: "/register?ref=landing_page_pricing",
                      children: n("common.pricing.free_plan.button")
                    })]
                  }), (0, a.jsxs)("div", {
                    className: p().premium,
                    children: [(0, a.jsxs)("h1", {
                      className: p().premiumText,
                      children: [h.A.premium, " ", n("common.pricing.premium_plan.name")]
                    }), (0, a.jsxs)("div", {
                      className: p().price,
                      children: [(0, a.jsxs)("h1", {
                        children: [(0, g.$g)(g.q9.premium), (0, a.jsxs)("span", {
                          children: ["/", n("common.pricing.lifetime_text")]
                        })]
                      }), (0, a.jsx)("span", {
                        className: p().lifetimeText,
                        children: n("common.pricing.lifetime_text_description")
                      })]
                    }), (0, a.jsx)("h3", {
                      children: n("common.pricing.premium_plan.description")
                    }), (0, a.jsxs)("div", {
                      className: p().features,
                      children: [(0, a.jsxs)("span", {
                        children: [h.A.checkmark, " ", n("common.pricing.premium_plan.features.exclusive_badge")]
                      }), (0, a.jsxs)("span", {
                        children: [h.A.checkmark, " ", n("common.pricing.premium_plan.features.profile_layouts")]
                      }), (0, a.jsxs)("span", {
                        children: [h.A.checkmark, " ", n("common.pricing.premium_plan.features.custom_fonts")]
                      }), (0, a.jsxs)("span", {
                        children: [h.A.checkmark, " ", n("common.pricing.premium_plan.features.typewriter_animation")]
                      }), (0, a.jsxs)("span", {
                        children: [h.A.checkmark, " ", n("common.pricing.premium_plan.features.special_profile_effects")]
                      }), (0, a.jsxs)("span", {
                        children: [h.A.checkmark, " ", n("common.pricing.premium_plan.features.advanced_customization")]
                      }), (0, a.jsxs)("span", {
                        children: [h.A.checkmark, " ", n("common.pricing.premium_plan.features.metadata_seo_customization")]
                      })]
                    }), (0, a.jsx)(u.A, {
                      className: p().purchaseButton,
                      href: "/pricing",
                      style: {
                        marginTop: "60px"
                      },
                      children: n("landing.pricing.premium_plan_button")
                    }), (0, a.jsx)("div", {
                      className: p().mostPopularWrapper,
                      children: (0, a.jsx)("span", {
                        className: p().mostPopular,
                        children: n("common.pricing.most_popular")
                      })
                    })]
                  })]
                })]
              })
            })]
          })
        })
      }
    }
  },
  e => {
    e.O(0, [8604, 1899, 9255, 4236, 4801, 6609, 4293, 5810, 5686, 884, 6891, 5886, 9182, 8481, 3434, 1378, 1382, 8756, 8441, 3794, 7358], () => e(e.s = 9393)), _N_E = e.O()
  }
]);