(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8974], {
    6730: (e, s, i) => {
      "use strict";
      i.d(s, {
        default: () => N
      });
      var n = i(95155),
        a = i(59791),
        r = i.n(a),
        t = i(81382),
        c = i(87974),
        l = i(12115),
        d = i(60884);
      let m = ({
        children: e,
        amount: s
      }) => (0, n.jsx)(d.P.div, {
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
        g = i(61836),
        j = i(45827),
        f = i.n(j);

      function _() {
        let e = (0, l.useRef)(null),
          [s, a] = (0, l.useState)(!1),
          r = (0, x.kj)();
        return (0, l.useEffect)(() => {
          let n;
          if (!e.current || s) return;
          let a = e.current,
            r = window.matchMedia("(prefers-reduced-motion: reduce)"),
            t = !1,
            c = () => {
              document.hidden || r.matches ? n?.pause() : n?.resume()
            };
          return i.e(9254).then(i.bind(i, 59254)).then(({
            BatManager: e
          }) => {
            t || ((n = new e(a)).makeBats(window.innerWidth < 600 ? 3 : 5), c())
          }), r.addEventListener("change", c), document.addEventListener("visibilitychange", c), () => {
            t = !0, r.removeEventListener("change", c), document.removeEventListener("visibilitychange", c), n?.destroy()
          }
        }, [s]), (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)("div", {
            className: f().bats,
            ref: e
          }), (0, n.jsx)("button", {
            type: "button",
            className: f().batControl,
            onClick: () => a(e => !e),
            children: r(s ? "common.halloween.resume_bats" : "common.halloween.pause_bats")
          })]
        })
      }

      function N({
        data: e
      }) {
        let s = e.statsData,
          i = e.tokenData,
          a = (0, x.kj)(),
          [d, o] = (0, l.useState)(""),
          [j, f] = (0, l.useState)(null),
          N = (1e4 * Math.round(s.users / 1e4)).toLocaleString("en-US"),
          v = (1e5 * Math.round(s.views / 1e5)).toLocaleString("en-US"),
          b = (1e4 * Math.round(s.uploads / 1e4)).toLocaleString("en-US"),
          k = (100 * Math.round(s.premium / 100)).toLocaleString("en-US"),
          w = j && j < 768 ? .3 : .6;
        return (0, l.useEffect)(() => {
          document.querySelectorAll(`.${r().elementAnimation}`).forEach((e, s) => {
            setTimeout(() => {
              e.classList.add(r().expandAnimation)
            }, 350 + 300 * s)
          }), f(window.innerWidth)
        }, []), (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(_, {}), (0, n.jsxs)(t.default, {
            data: i,
            statsData: s,
            children: [(0, n.jsx)("div", {
              className: r().landingPage,
              children: (0, n.jsxs)("div", {
                className: r().heroWrapper,
                children: [(0, n.jsx)("img", {
                  className: r().gunsGradient,
                  draggable: !1,
                  src: "https://assets.guns.lol/gradient_background.png",
                  alt: ""
                }), (0, n.jsxs)("div", {
                  className: `${r().heroContentWrapper} ${r().elementAnimation}`,
                  children: [(0, n.jsxs)("div", {
                    className: r().heroContent,
                    children: [(0, n.jsx)("h1", {
                      children: a("landing.hero.title")
                    }), (0, n.jsx)("p", {
                      children: a("landing.hero.description")
                    })]
                  }), (0, n.jsxs)("div", {
                    className: r().heroButtons,
                    children: [(0, n.jsx)(u.A, {
                      href: "/register?ref=landing_page_hero",
                      className: `${r().registerButton}`,
                      children: a("landing.hero.sign_up")
                    }), (0, n.jsx)(u.A, {
                      href: "/pricing",
                      className: `${r().pricingButton}`,
                      children: a("landing.hero.view_pricing")
                    })]
                  })]
                }), (0, n.jsxs)("div", {
                  className: `${r().heroShowcase} ${r().elementAnimation}`,
                  children: [(0, n.jsx)("img", {
                    src: "https://assets.guns.lol/dashboard.png",
                    alt: ""
                  }), (0, n.jsx)("img", {
                    src: "https://assets.guns.lol/profile_showcase.png",
                    alt: ""
                  })]
                })]
              })
            }), (0, n.jsx)(m, {
              amount: w,
              children: (0, n.jsxs)("div", {
                className: `${r().statisticsShowcase} ${r().elementAnimation}`,
                children: [(0, n.jsxs)("div", {
                  className: r().statisticsDescription,
                  children: [(0, n.jsx)("h1", {
                    children: a("landing.stats.title", {
                      users: (0, n.jsx)("span", {
                        children: N
                      })
                    })
                  }), (0, n.jsx)("h3", {
                    children: a("landing.stats.description")
                  }), (0, n.jsxs)("div", {
                    className: r().statisticBoxWrapper,
                    children: [(0, n.jsxs)("div", {
                      className: r().statisticBox,
                      children: [(0, n.jsxs)("div", {
                        className: r().boxWrapper,
                        children: [(0, n.jsxs)("h1", {
                          children: [v, "+"]
                        }), (0, n.jsx)("span", {
                          children: a("landing.stats.profile_views")
                        })]
                      }), c.A.profileViews]
                    }), (0, n.jsxs)("div", {
                      className: r().statisticBox,
                      children: [(0, n.jsxs)("div", {
                        className: r().boxWrapper,
                        children: [(0, n.jsxs)("h1", {
                          children: [N, "+"]
                        }), (0, n.jsx)("span", {
                          children: a("landing.stats.users")
                        })]
                      }), c.A.users]
                    }), (0, n.jsxs)("div", {
                      className: r().statisticBox,
                      children: [(0, n.jsxs)("div", {
                        className: r().boxWrapper,
                        children: [(0, n.jsxs)("h1", {
                          children: [b, "+"]
                        }), (0, n.jsx)("span", {
                          children: a("landing.stats.file_uploads")
                        })]
                      }), c.A.fileUploads]
                    }), (0, n.jsxs)("div", {
                      className: r().statisticBox,
                      children: [(0, n.jsxs)("div", {
                        className: r().boxWrapper,
                        children: [(0, n.jsxs)("h1", {
                          children: [k, "+"]
                        }), (0, n.jsx)("span", {
                          children: a("landing.stats.subscribers")
                        })]
                      }), c.A.subscribers]
                    })]
                  })]
                }), (0, n.jsxs)("div", {
                  className: r().claimProfileWrapper,
                  children: [(0, n.jsx)("h1", {
                    className: r().claimProfileText,
                    children: a("landing.stats.claim_profile_text")
                  }), (0, n.jsxs)("div", {
                    className: r().claimProfileBox,
                    children: [(0, n.jsx)("div", {
                      className: r().inputContainerWrapper,
                      children: (0, n.jsxs)("div", {
                        className: `${r().inputWrapperDiv} ${r().inputWrapperURL}`,
                        children: [(0, n.jsx)("span", {
                          className: r().inputWrapperSpan,
                          children: (0, n.jsx)("h1", {
                            children: "guns.lol/"
                          })
                        }), (0, n.jsx)("input", {
                          autoCorrect: "off",
                          value: d,
                          onInput: e => {
                            o(e.target.value)
                          },
                          type: "text",
                          placeholder: a("landing.stats.claim_input_placeholder"),
                          className: `${r().inputWrapperInput}`
                        })]
                      })
                    }), (0, n.jsx)(u.A, {
                      href: `/register?claim=${d}&ref=landing_page`,
                      className: `${r().claimNow}`,
                      children: a("landing.stats.claim_now_text")
                    })]
                  })]
                })]
              })
            }), (0, n.jsx)(m, {
              amount: w,
              children: (0, n.jsxs)("div", {
                className: r().premiumShowcase,
                children: [(0, n.jsx)("h1", {
                  className: r().premiumHeadingText,
                  children: a("landing.pricing.title", {
                    subscribers: (0, n.jsxs)("span", {
                      children: [k, "+"]
                    })
                  })
                }), (0, n.jsxs)("div", {
                  className: p().plans,
                  children: [(0, n.jsxs)("div", {
                    className: p().freePlan,
                    children: [(0, n.jsx)("h1", {
                      className: p().freePlanText,
                      children: a("common.pricing.free_plan.name")
                    }), (0, n.jsx)("div", {
                      className: p().price,
                      children: (0, n.jsxs)("h1", {
                        children: [(0, g.$g)(g.q9.free), (0, n.jsxs)("span", {
                          children: ["/", a("common.pricing.lifetime_text")]
                        })]
                      })
                    }), (0, n.jsx)("h3", {
                      children: a("common.pricing.free_plan.description")
                    }), (0, n.jsxs)("div", {
                      className: p().features,
                      children: [(0, n.jsxs)("span", {
                        children: [h.A.checkmark, " ", a("common.pricing.free_plan.features.basic_customization")]
                      }), (0, n.jsxs)("span", {
                        children: [h.A.checkmark, " ", a("common.pricing.free_plan.features.profile_analytics")]
                      }), (0, n.jsxs)("span", {
                        children: [h.A.checkmark, " ", a("common.pricing.free_plan.features.basic_effects")]
                      }), (0, n.jsxs)("span", {
                        children: [h.A.checkmark, " ", a("common.pricing.free_plan.features.add_your_socials")]
                      })]
                    }), (0, n.jsx)(u.A, {
                      className: p().purchaseButton,
                      href: "/register?ref=landing_page_pricing",
                      children: a("common.pricing.free_plan.button")
                    })]
                  }), (0, n.jsxs)("div", {
                    className: p().premium,
                    children: [(0, n.jsxs)("h1", {
                      className: p().premiumText,
                      children: [h.A.premium, " ", a("common.pricing.premium_plan.name")]
                    }), (0, n.jsxs)("div", {
                      className: p().price,
                      children: [(0, n.jsxs)("h1", {
                        children: [(0, g.$g)(g.q9.premium), (0, n.jsxs)("span", {
                          children: ["/", a("common.pricing.lifetime_text")]
                        })]
                      }), (0, n.jsx)("span", {
                        className: p().lifetimeText,
                        children: a("common.pricing.lifetime_text_description")
                      })]
                    }), (0, n.jsx)("h3", {
                      children: a("common.pricing.premium_plan.description")
                    }), (0, n.jsxs)("div", {
                      className: p().features,
                      children: [(0, n.jsxs)("span", {
                        children: [h.A.checkmark, " ", a("common.pricing.premium_plan.features.exclusive_badge")]
                      }), (0, n.jsxs)("span", {
                        children: [h.A.checkmark, " ", a("common.pricing.premium_plan.features.profile_layouts")]
                      }), (0, n.jsxs)("span", {
                        children: [h.A.checkmark, " ", a("common.pricing.premium_plan.features.custom_fonts")]
                      }), (0, n.jsxs)("span", {
                        children: [h.A.checkmark, " ", a("common.pricing.premium_plan.features.typewriter_animation")]
                      }), (0, n.jsxs)("span", {
                        children: [h.A.checkmark, " ", a("common.pricing.premium_plan.features.special_profile_effects")]
                      }), (0, n.jsxs)("span", {
                        children: [h.A.checkmark, " ", a("common.pricing.premium_plan.features.advanced_customization")]
                      }), (0, n.jsxs)("span", {
                        children: [h.A.checkmark, " ", a("common.pricing.premium_plan.features.metadata_seo_customization")]
                      })]
                    }), (0, n.jsx)(u.A, {
                      className: p().purchaseButton,
                      href: "/pricing",
                      style: {
                        marginTop: "60px"
                      },
                      children: a("landing.pricing.premium_plan_button")
                    }), (0, n.jsx)("div", {
                      className: p().mostPopularWrapper,
                      children: (0, n.jsx)("span", {
                        className: p().mostPopular,
                        children: a("common.pricing.most_popular")
                      })
                    })]
                  })]
                })]
              })
            })]
          })]
        })
      }
    },
    9393: (e, s, i) => {
      Promise.resolve().then(i.bind(i, 6730))
    },
    45827: e => {
      e.exports = {
        bats: "GUNS__25-6223a480-d26fee40-5e2e7253",
        batControl: "GUNS__78-bb23469f-15106458-6a73ce26"
      }
    },
    61836: (e, s, i) => {
      "use strict";
      i.d(s, {
        $g: () => d,
        KH: () => r,
        YL: () => t,
        Yi: () => a,
        dd: () => l,
        gP: () => m,
        o3: () => o,
        q9: () => n,
        wH: () => c
      });
      let n = {
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
        a = [{
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
        t = 200;

      function c(e) {
        return !Number.isInteger(e) || e < r || e > t ? null : (100 * Math.ceil((e <= 10 ? 100 * e - 1 : e <= 25 ? 999 + Math.round(1e3 / 15 * (e - 10)) : e <= 50 ? 1999 + (e - 25) * 60 : 3499 + (e - 50) * 50) / 100) - 1) / 100
      }
      let l = 15;

      function d(e) {
        return `${e.toFixed(2).replace(/\.00$/,"").replace(".",",")}€`
      }

      function m(e) {
        let s = n.badgeCredit * e ** .85,
          i = n.badgeCredit * e;
        return {
          totalPrice: Number(s.toFixed(2)),
          discountPercent: Number(((1 - s / i) * 100).toFixed(0))
        }
      }

      function o(e) {
        let s = n.customBadge * e ** .95,
          i = n.customBadge * e;
        return {
          totalPrice: Number(s.toFixed(2)),
          rawPrice: Number(i.toFixed(2)),
          discountPercent: Number(((1 - s / i) * 100).toFixed(0))
        }
      }
      n.premium, n.imagehost, n.verified, n.customBadge, n.aliasCredit
    }
  },
  e => {
    e.O(0, [8604, 1899, 379, 4236, 7496, 6609, 4293, 5810, 5686, 884, 6891, 5886, 9182, 8481, 3434, 1378, 1382, 8756, 8441, 3794, 7358], () => e(e.s = 9393)), _N_E = e.O()
  }
]);