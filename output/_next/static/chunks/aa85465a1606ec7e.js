(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 52202, e => {
  "use strict";
  var i = e.i(48277),
    a = e.i(16506),
    r = e.i(17435);

  function l({
    href: e,
    asTag: l,
    locale: t,
    children: s,
    ...n
  }) {
    let c = t || (0, r.useLang)();
    if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) return l ? (0, i.jsx)("a", {
      href: e,
      ...n,
      children: s
    }) : (0, i.jsx)(a.default, {
      href: e,
      ...n,
      children: s
    });
    let d = "en" == c ? `${e.startsWith("/")?"":"/"}${e}` : `/${c}${e.startsWith("/")?"":"/"}${e}`;
    return l ? (0, i.jsx)("a", {
      href: d,
      ...n,
      children: s
    }) : (0, i.jsx)(a.default, {
      href: d,
      ...n,
      children: s
    })
  }
  e.s(["default", () => l])
}, 4976, e => {
  e.v({
    allFeatures: "pricingPage-module__53E-lq__allFeatures",
    allFeaturesDescription: "pricingPage-module__53E-lq__allFeaturesDescription",
    bounceUpAndDown: "pricingPage-module__53E-lq__bounceUpAndDown",
    easterPromo: "pricingPage-module__53E-lq__easterPromo",
    feature: "pricingPage-module__53E-lq__feature",
    featureDescription: "pricingPage-module__53E-lq__featureDescription",
    featureDescriptionClosed: "pricingPage-module__53E-lq__featureDescriptionClosed",
    featureDescriptionOpen: "pricingPage-module__53E-lq__featureDescriptionOpen",
    featureDescriptionWrapper: "pricingPage-module__53E-lq__featureDescriptionWrapper",
    featureLeft: "pricingPage-module__53E-lq__featureLeft",
    featureLeftWrapper: "pricingPage-module__53E-lq__featureLeftWrapper",
    featureMobile: "pricingPage-module__53E-lq__featureMobile",
    featureRight: "pricingPage-module__53E-lq__featureRight",
    featureRightMobile: "pricingPage-module__53E-lq__featureRightMobile",
    features: "pricingPage-module__53E-lq__features",
    featuresMatrix: "pricingPage-module__53E-lq__featuresMatrix",
    featuresTable: "pricingPage-module__53E-lq__featuresTable",
    freeFeature: "pricingPage-module__53E-lq__freeFeature",
    freeFeatureChecked: "pricingPage-module__53E-lq__freeFeatureChecked",
    freeFeatureMobile: "pricingPage-module__53E-lq__freeFeatureMobile",
    freePlan: "pricingPage-module__53E-lq__freePlan",
    freePlanText: "pricingPage-module__53E-lq__freePlanText",
    heroDescription: "pricingPage-module__53E-lq__heroDescription",
    heroDescriptionInner: "pricingPage-module__53E-lq__heroDescriptionInner",
    imagehostProduct: "pricingPage-module__53E-lq__imagehostProduct",
    lifetimeText: "pricingPage-module__53E-lq__lifetimeText",
    matrixAvailability: "pricingPage-module__53E-lq__matrixAvailability",
    matrixAvailabilityPremium: "pricingPage-module__53E-lq__matrixAvailabilityPremium",
    matrixFeatureArrow: "pricingPage-module__53E-lq__matrixFeatureArrow",
    matrixFeatureArrowOpen: "pricingPage-module__53E-lq__matrixFeatureArrowOpen",
    matrixFeatureContent: "pricingPage-module__53E-lq__matrixFeatureContent",
    matrixFeatureDescription: "pricingPage-module__53E-lq__matrixFeatureDescription",
    matrixFeatureDescriptionOpen: "pricingPage-module__53E-lq__matrixFeatureDescriptionOpen",
    matrixFeatureTitle: "pricingPage-module__53E-lq__matrixFeatureTitle",
    matrixHeader: "pricingPage-module__53E-lq__matrixHeader",
    matrixMobileAvailability: "pricingPage-module__53E-lq__matrixMobileAvailability",
    matrixMobilePlan: "pricingPage-module__53E-lq__matrixMobilePlan",
    matrixPlanCard: "pricingPage-module__53E-lq__matrixPlanCard",
    matrixPlanCardFree: "pricingPage-module__53E-lq__matrixPlanCardFree",
    matrixPlanCardPremium: "pricingPage-module__53E-lq__matrixPlanCardPremium",
    matrixRow: "pricingPage-module__53E-lq__matrixRow",
    matrixRowExpanded: "pricingPage-module__53E-lq__matrixRowExpanded",
    matrixShell: "pricingPage-module__53E-lq__matrixShell",
    mostPopular: "pricingPage-module__53E-lq__mostPopular",
    mostPopularWrapper: "pricingPage-module__53E-lq__mostPopularWrapper",
    otherProducts: "pricingPage-module__53E-lq__otherProducts",
    otherProductsDescription: "pricingPage-module__53E-lq__otherProductsDescription",
    planButtons: "pricingPage-module__53E-lq__planButtons",
    plans: "pricingPage-module__53E-lq__plans",
    plansWrapper: "pricingPage-module__53E-lq__plansWrapper",
    premium: "pricingPage-module__53E-lq__premium",
    premiumFeature: "pricingPage-module__53E-lq__premiumFeature",
    premiumFeatureMobile: "pricingPage-module__53E-lq__premiumFeatureMobile",
    premiumText: "pricingPage-module__53E-lq__premiumText",
    price: "pricingPage-module__53E-lq__price",
    pricingHero: "pricingPage-module__53E-lq__pricingHero",
    pricingPage: "pricingPage-module__53E-lq__pricingPage",
    pricingProduct: "pricingPage-module__53E-lq__pricingProduct",
    productButtons: "pricingPage-module__53E-lq__productButtons",
    products: "pricingPage-module__53E-lq__products",
    purchaseButton: "pricingPage-module__53E-lq__purchaseButton",
    selected: "pricingPage-module__53E-lq__selected",
    subscriptionType: "pricingPage-module__53E-lq__subscriptionType",
    tablePlan: "pricingPage-module__53E-lq__tablePlan",
    tablePlanWrapper: "pricingPage-module__53E-lq__tablePlanWrapper",
    tableWrapper: "pricingPage-module__53E-lq__tableWrapper",
    verifiedProduct: "pricingPage-module__53E-lq__verifiedProduct"
  })
}, 84425, e => {
  "use strict";
  var i = e.i(48277),
    a = e.i(23614),
    r = e.i(19754),
    l = e.i(42795),
    t = e.i(30668),
    s = e.i(35691);
  let n = ({
    children: e,
    amount: a
  }) => (0, i.jsx)(s.motion.div, {
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
      amount: a
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
  var c = e.i(4976),
    d = e.i(30035),
    u = e.i(52202),
    o = e.i(17435);

  function p({
    data: e
  }) {
    let s = e.statsData,
      p = e.tokenData,
      _ = (0, o.useT)(),
      [m, g] = (0, t.useState)(""),
      [f, h] = (0, t.useState)(null),
      x = (1e4 * Math.round(s.users / 1e4)).toLocaleString("en-US"),
      P = (1e5 * Math.round(s.views / 1e5)).toLocaleString("en-US"),
      j = (1e4 * Math.round(s.uploads / 1e4)).toLocaleString("en-US"),
      E = (100 * Math.round(s.premium / 100)).toLocaleString("en-US"),
      q = f && f < 768 ? .3 : .6;
    return (0, t.useEffect)(() => {
      document.querySelectorAll(`.${a.default.elementAnimation}`).forEach((e, i) => {
        setTimeout(() => {
          e.classList.add(a.default.expandAnimation)
        }, 350 + 300 * i)
      }), h(window.innerWidth)
    }, []), (0, i.jsx)(i.Fragment, {
      children: (0, i.jsxs)(r.default, {
        data: p,
        statsData: s,
        children: [(0, i.jsx)("div", {
          className: a.default.landingPage,
          children: (0, i.jsxs)("div", {
            className: a.default.heroWrapper,
            children: [(0, i.jsx)("img", {
              className: a.default.gunsGradient,
              draggable: !1,
              src: "https://assets.guns.lol/gradient_background.png",
              alt: ""
            }), (0, i.jsxs)("div", {
              className: `${a.default.heroContentWrapper} ${a.default.elementAnimation}`,
              children: [(0, i.jsxs)("div", {
                className: a.default.heroContent,
                children: [(0, i.jsx)("h1", {
                  children: _("landing.hero.title")
                }), (0, i.jsx)("p", {
                  children: _("landing.hero.description")
                })]
              }), (0, i.jsxs)("div", {
                className: a.default.heroButtons,
                children: [(0, i.jsx)(u.default, {
                  href: "/register?ref=landing_page_hero",
                  className: `${a.default.registerButton}`,
                  children: _("landing.hero.sign_up")
                }), (0, i.jsx)(u.default, {
                  href: "/pricing",
                  className: `${a.default.pricingButton}`,
                  children: _("landing.hero.view_pricing")
                })]
              })]
            }), (0, i.jsxs)("div", {
              className: `${a.default.heroShowcase} ${a.default.elementAnimation}`,
              children: [(0, i.jsx)("img", {
                src: "https://assets.guns.lol/dashboard.png",
                alt: ""
              }), (0, i.jsx)("img", {
                src: "https://assets.guns.lol/profile_showcase.png",
                alt: ""
              })]
            })]
          })
        }), (0, i.jsx)(n, {
          amount: q,
          children: (0, i.jsxs)("div", {
            className: `${a.default.statisticsShowcase} ${a.default.elementAnimation}`,
            children: [(0, i.jsxs)("div", {
              className: a.default.statisticsDescription,
              children: [(0, i.jsx)("h1", {
                children: _("landing.stats.title", {
                  users: (0, i.jsx)("span", {
                    children: x
                  })
                })
              }), (0, i.jsx)("h3", {
                children: _("landing.stats.description")
              }), (0, i.jsxs)("div", {
                className: a.default.statisticBoxWrapper,
                children: [(0, i.jsxs)("div", {
                  className: a.default.statisticBox,
                  children: [(0, i.jsxs)("div", {
                    className: a.default.boxWrapper,
                    children: [(0, i.jsxs)("h1", {
                      children: [P, "+"]
                    }), (0, i.jsx)("span", {
                      children: _("landing.stats.profile_views")
                    })]
                  }), l.default.profileViews]
                }), (0, i.jsxs)("div", {
                  className: a.default.statisticBox,
                  children: [(0, i.jsxs)("div", {
                    className: a.default.boxWrapper,
                    children: [(0, i.jsxs)("h1", {
                      children: [x, "+"]
                    }), (0, i.jsx)("span", {
                      children: _("landing.stats.users")
                    })]
                  }), l.default.users]
                }), (0, i.jsxs)("div", {
                  className: a.default.statisticBox,
                  children: [(0, i.jsxs)("div", {
                    className: a.default.boxWrapper,
                    children: [(0, i.jsxs)("h1", {
                      children: [j, "+"]
                    }), (0, i.jsx)("span", {
                      children: _("landing.stats.file_uploads")
                    })]
                  }), l.default.fileUploads]
                }), (0, i.jsxs)("div", {
                  className: a.default.statisticBox,
                  children: [(0, i.jsxs)("div", {
                    className: a.default.boxWrapper,
                    children: [(0, i.jsxs)("h1", {
                      children: [E, "+"]
                    }), (0, i.jsx)("span", {
                      children: _("landing.stats.subscribers")
                    })]
                  }), l.default.subscribers]
                })]
              })]
            }), (0, i.jsxs)("div", {
              className: a.default.claimProfileWrapper,
              children: [(0, i.jsx)("h1", {
                className: a.default.claimProfileText,
                children: _("landing.stats.claim_profile_text")
              }), (0, i.jsxs)("div", {
                className: a.default.claimProfileBox,
                children: [(0, i.jsx)("div", {
                  className: a.default.inputContainerWrapper,
                  children: (0, i.jsxs)("div", {
                    className: `${a.default.inputWrapperDiv} ${a.default.inputWrapperURL}`,
                    children: [(0, i.jsx)("span", {
                      className: a.default.inputWrapperSpan,
                      children: (0, i.jsx)("h1", {
                        children: "guns.lol/"
                      })
                    }), (0, i.jsx)("input", {
                      autoCorrect: "false",
                      value: m,
                      onChange: e => {
                        g(e.target.value)
                      },
                      type: "text",
                      placeholder: _("landing.stats.claim_input_placeholder"),
                      className: `${a.default.inputWrapperInput}`
                    })]
                  })
                }), (0, i.jsx)(u.default, {
                  href: `/register?claim=${m}&ref=landing_page`,
                  className: `${a.default.claimNow}`,
                  children: _("landing.stats.claim_now_text")
                })]
              })]
            })]
          })
        }), (0, i.jsx)(n, {
          amount: q,
          children: (0, i.jsxs)("div", {
            className: a.default.premiumShowcase,
            children: [(0, i.jsx)("h1", {
              className: a.default.premiumHeadingText,
              children: _("landing.pricing.title", {
                subscribers: (0, i.jsxs)("span", {
                  children: [E, "+"]
                })
              })
            }), (0, i.jsxs)("div", {
              className: c.default.plans,
              children: [(0, i.jsxs)("div", {
                className: c.default.freePlan,
                children: [(0, i.jsx)("h1", {
                  className: c.default.freePlanText,
                  children: _("common.pricing.free_plan.name")
                }), (0, i.jsx)("div", {
                  className: c.default.price,
                  children: (0, i.jsxs)("h1", {
                    children: ["0€", (0, i.jsxs)("span", {
                      children: ["/", _("common.pricing.lifetime_text")]
                    })]
                  })
                }), (0, i.jsx)("h3", {
                  children: _("common.pricing.free_plan.description")
                }), (0, i.jsxs)("div", {
                  className: c.default.features,
                  children: [(0, i.jsxs)("span", {
                    children: [d.default.checkmark, " ", _("common.pricing.free_plan.features.basic_customization")]
                  }), (0, i.jsxs)("span", {
                    children: [d.default.checkmark, " ", _("common.pricing.free_plan.features.profile_analytics")]
                  }), (0, i.jsxs)("span", {
                    children: [d.default.checkmark, " ", _("common.pricing.free_plan.features.basic_effects")]
                  }), (0, i.jsxs)("span", {
                    children: [d.default.checkmark, " ", _("common.pricing.free_plan.features.add_your_socials")]
                  })]
                }), (0, i.jsx)(u.default, {
                  className: c.default.purchaseButton,
                  href: "/register?ref=landing_page_pricing",
                  children: _("common.pricing.free_plan.button")
                })]
              }), (0, i.jsxs)("div", {
                className: c.default.premium,
                children: [(0, i.jsxs)("h1", {
                  className: c.default.premiumText,
                  children: [d.default.premium, " ", _("common.pricing.premium_plan.name")]
                }), (0, i.jsxs)("div", {
                  className: c.default.price,
                  children: [(0, i.jsxs)("h1", {
                    children: ["7,99€", (0, i.jsxs)("span", {
                      children: ["/", _("common.pricing.lifetime_text")]
                    })]
                  }), (0, i.jsx)("span", {
                    className: c.default.lifetimeText,
                    children: _("common.pricing.lifetime_text_description")
                  })]
                }), (0, i.jsx)("h3", {
                  children: _("common.pricing.premium_plan.description")
                }), (0, i.jsxs)("div", {
                  className: c.default.features,
                  children: [(0, i.jsxs)("span", {
                    children: [d.default.checkmark, " ", _("common.pricing.premium_plan.features.exclusive_badge")]
                  }), (0, i.jsxs)("span", {
                    children: [d.default.checkmark, " ", _("common.pricing.premium_plan.features.profile_layouts")]
                  }), (0, i.jsxs)("span", {
                    children: [d.default.checkmark, " ", _("common.pricing.premium_plan.features.custom_fonts")]
                  }), (0, i.jsxs)("span", {
                    children: [d.default.checkmark, " ", _("common.pricing.premium_plan.features.typewriter_animation")]
                  }), (0, i.jsxs)("span", {
                    children: [d.default.checkmark, " ", _("common.pricing.premium_plan.features.special_profile_effects")]
                  }), (0, i.jsxs)("span", {
                    children: [d.default.checkmark, " ", _("common.pricing.premium_plan.features.advanced_customization")]
                  }), (0, i.jsxs)("span", {
                    children: [d.default.checkmark, " ", _("common.pricing.premium_plan.features.metadata_seo_customization")]
                  })]
                }), (0, i.jsx)(u.default, {
                  className: c.default.purchaseButton,
                  href: "/pricing",
                  style: {
                    marginTop: "60px"
                  },
                  children: _("landing.pricing.premium_plan_button")
                }), (0, i.jsx)("div", {
                  className: c.default.mostPopularWrapper,
                  children: (0, i.jsx)("span", {
                    className: c.default.mostPopular,
                    children: _("common.pricing.most_popular")
                  })
                })]
              })]
            })]
          })
        })]
      })
    })
  }
  e.s(["default", () => p], 84425)
}]);