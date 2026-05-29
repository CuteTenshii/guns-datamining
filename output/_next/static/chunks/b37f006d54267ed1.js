(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 16766, e => {
  "use strict";
  var i = e.i(48277),
    a = e.i(30668),
    r = e.i(91850),
    l = e.i(60525),
    t = e.i(60445),
    s = e.i(33108),
    c = e.i(17435);

  function n({
    purchaseSource: e = "unknown"
  }) {
    let n = (0, c.useT)(),
      [u, o] = (0, a.useState)(1),
      [m, d] = (0, a.useState)(!1);

    function p(e) {
      let i = 8.99 * e ** .95,
        a = 8.99 * e,
        r = (1 - i / a) * 100;
      return {
        totalPrice: parseFloat(i.toFixed(2)),
        rawPrice: parseFloat(a.toFixed(2)),
        discountPercent: parseFloat(r.toFixed(0))
      }
    }
    let _ = async e => {
      d(!0)
    }, g = u > 1 ? (0, i.jsxs)(i.Fragment, {
      children: [p(u).totalPrice, "€ ", (0, i.jsxs)("s", {
        children: [p(u).rawPrice, "€"]
      })]
    }) : (0, i.jsxs)(i.Fragment, {
      children: [p(u).totalPrice, "€"]
    });
    return (0, i.jsx)(i.Fragment, {
      children: m ? (0, i.jsx)(s.default, {
        type: "customBadge",
        customBadgeData: {
          amount: u,
          totalPrice: p(u).totalPrice
        },
        purchaseSource: e
      }) : (0, i.jsxs)("div", {
        className: r.default.CustomBadgePurchaseModal,
        children: [(0, i.jsx)(l.default, {
          featureName: n("modals.custom_badge.title"),
          max: 500,
          value: u,
          min: 1,
          onChange: o,
          icon: t.default.shoppingBag
        }), (0, i.jsxs)("div", {
          className: r.default.CustomBadgePurchaseModalDiscount,
          children: [(0, i.jsx)("h1", {
            children: n("modals.custom_badge.information_text")
          }), (0, i.jsx)("h3", {
            children: n("modals.custom_badge.description", {
              percentage: p(u).discountPercent,
              quantity: u
            })
          })]
        }), (0, i.jsx)("span", {
          className: r.default.CustomBadgePurchaseModalButton,
          onClick: _,
          children: n("modals.custom_badge.purchase_text", {
            price: g
          })
        })]
      })
    })
  }
  e.s(["default", () => n])
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
}, 78169, e => {
  "use strict";
  var i = e.i(48277),
    a = e.i(4976),
    r = e.i(19754),
    l = e.i(30668),
    t = e.i(30035),
    s = e.i(54976),
    c = e.i(30332),
    n = e.i(33108),
    u = e.i(50250),
    o = e.i(33544),
    m = e.i(16766),
    d = e.i(662),
    p = e.i(52202),
    _ = e.i(17435),
    g = e.i(74654);

  function f({
    data: e
  }) {
    let [f, h] = (0, l.useState)(!1), [x, j] = (0, l.useState)(null), [P, v] = (0, l.useState)(null), b = (0, l.useRef)(null), k = (0, l.useRef)(null), E = (0, l.useRef)(null), N = e.statsData, q = e.tokenData, y = (0, l.useRef)(null), F = !!q.session && !!q.session.userId, [D, C] = (0, l.useState)(""), w = (0, _.useT)(), T = async e => {
      C(e), h(!0)
    }, B = () => {
      k.current && (clearTimeout(k.current), k.current = null)
    }, S = () => {
      E.current = null, B(), null === x && v(null)
    }, M = e => {
      B(), j(i => i === e ? null : e), v(null), E.current = null
    }, A = [{
      key: "profile_layouts",
      premium: !0
    }, {
      key: "exclusive_badge",
      premium: !0
    }, {
      key: "layout_customization",
      premium: !0
    }, {
      key: "text_fonts",
      premium: !0
    }, {
      key: "cursor_effects",
      premium: !0
    }, {
      key: "profile_widgets",
      premium: !0
    }, {
      key: "metadata_seo",
      premium: !0
    }, {
      key: "typewriter_description",
      premium: !0
    }, {
      key: "page_aliases",
      premium: !0
    }, {
      key: "exclusive_profile_preferences",
      premium: !0
    }, {
      key: "background_effects",
      premium: !1
    }, {
      key: "profile_analytics",
      premium: !1
    }, {
      key: "username_effects",
      premium: !1
    }, {
      key: "color_customization",
      premium: !1
    }, {
      key: "social_links",
      premium: !1
    }].map(({
      key: e,
      premium: i
    }) => ({
      name: w(`pricing.pricing_table_features.${e}.name`),
      description: w(`pricing.pricing_table_features.${e}.description`),
      premium: i
    })), R = x ?? P;
    return (0, l.useEffect)(() => {
      let e = window.location.hash;
      if (!e) return;
      let i = e.replace("#", "").toLowerCase();
      ("imagehost" === i || "verified" === i || "custombadge" === i || "other" === i) && y.current && y.current.scrollIntoView({
        behavior: "smooth",
        block: "center"
      })
    }, []), (0, l.useEffect)(() => () => {
      B()
    }, []), (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(g.default, {
        opened: f,
        onClose: () => h(!1),
        title: w("common.pricing.payment_methods"),
        centered: !0,
        children: "custombadge" === D ? (0, i.jsx)(m.default, {
          purchaseSource: d.purchaseSource.pricing
        }) : (0, i.jsx)(n.default, {
          type: D,
          purchaseSource: d.purchaseSource.pricing
        })
      }), (0, i.jsx)(s.Toaster, {
        richColors: !0,
        position: "top-center",
        theme: "dark",
        className: u.default.toasterStyles,
        icons: {
          success: o.default.successToast
        },
        visibleToasts: 2
      }), (0, i.jsxs)(r.default, {
        data: q,
        statsData: N,
        children: [(0, i.jsx)("div", {
          className: a.default.pricingPage,
          children: (0, i.jsxs)("div", {
            className: a.default.pricingHero,
            children: [(0, i.jsx)("div", {
              className: a.default.heroDescription,
              children: (0, i.jsxs)("div", {
                className: a.default.heroDescriptionInner,
                children: [(0, i.jsx)("h1", {
                  children: w("pricing.hero.title")
                }), (0, i.jsx)("h3", {
                  children: w("pricing.hero.description")
                })]
              })
            }), (0, i.jsxs)("div", {
              className: a.default.plansWrapper,
              children: [(0, i.jsxs)("div", {
                className: a.default.plans,
                children: [(0, i.jsxs)("div", {
                  className: a.default.freePlan,
                  children: [(0, i.jsx)("h1", {
                    className: a.default.freePlanText,
                    children: w("common.pricing.free_plan.name")
                  }), (0, i.jsx)("div", {
                    className: a.default.price,
                    children: (0, i.jsxs)("h1", {
                      children: ["0€", (0, i.jsxs)("span", {
                        children: ["/", w("common.pricing.lifetime_text")]
                      })]
                    })
                  }), (0, i.jsx)("h3", {
                    children: w("common.pricing.free_plan.description")
                  }), (0, i.jsxs)("div", {
                    className: a.default.features,
                    children: [(0, i.jsxs)("span", {
                      children: [t.default.checkmark, " ", w("common.pricing.free_plan.features.basic_customization")]
                    }), (0, i.jsxs)("span", {
                      children: [t.default.checkmark, " ", w("common.pricing.free_plan.features.profile_analytics")]
                    }), (0, i.jsxs)("span", {
                      children: [t.default.checkmark, " ", w("common.pricing.free_plan.features.basic_effects")]
                    }), (0, i.jsxs)("span", {
                      children: [t.default.checkmark, " ", w("common.pricing.free_plan.features.add_your_socials")]
                    })]
                  }), (0, i.jsx)(p.default, {
                    className: a.default.purchaseButton,
                    href: "/register?ref=pricing_page",
                    children: w("common.pricing.free_plan.button")
                  })]
                }), (0, i.jsxs)("div", {
                  className: a.default.premium,
                  children: [(0, i.jsxs)("h1", {
                    className: a.default.premiumText,
                    children: [t.default.premium, " ", w("common.pricing.premium_plan.name")]
                  }), (0, i.jsxs)("div", {
                    className: a.default.price,
                    children: [(0, i.jsxs)("h1", {
                      children: ["7,99€", (0, i.jsxs)("span", {
                        children: ["/", w("common.pricing.lifetime_text")]
                      })]
                    }), (0, i.jsx)("span", {
                      className: a.default.lifetimeText,
                      children: w("common.pricing.lifetime_text_description")
                    })]
                  }), (0, i.jsx)("h3", {
                    children: w("common.pricing.premium_plan.description")
                  }), (0, i.jsxs)("div", {
                    className: a.default.features,
                    children: [(0, i.jsxs)("span", {
                      children: [t.default.checkmark, " ", w("common.pricing.premium_plan.features.exclusive_badge")]
                    }), (0, i.jsxs)("span", {
                      children: [t.default.checkmark, " ", w("common.pricing.premium_plan.features.profile_layouts")]
                    }), (0, i.jsxs)("span", {
                      children: [t.default.checkmark, " ", w("common.pricing.premium_plan.features.custom_fonts")]
                    }), (0, i.jsxs)("span", {
                      children: [t.default.checkmark, " ", w("common.pricing.premium_plan.features.typewriter_animation")]
                    }), (0, i.jsxs)("span", {
                      children: [t.default.checkmark, " ", w("common.pricing.premium_plan.features.special_profile_effects")]
                    }), (0, i.jsxs)("span", {
                      children: [t.default.checkmark, " ", w("common.pricing.premium_plan.features.advanced_customization")]
                    }), (0, i.jsxs)("span", {
                      children: [t.default.checkmark, " ", w("common.pricing.premium_plan.features.metadata_seo_customization")]
                    })]
                  }), (0, i.jsxs)("div", {
                    className: a.default.planButtons,
                    children: [F ? (0, i.jsx)("span", {
                      className: a.default.purchaseButton,
                      onClick: () => T("premiumLifetime"),
                      children: w("common.pricing.premium_plan.button")
                    }) : (0, i.jsx)(p.default, {
                      className: a.default.purchaseButton,
                      href: "/login?returnUri=/pricing",
                      children: w("common.pricing.premium_plan.button")
                    }), (0, i.jsx)(c.default, {
                      defaultSelection: "premiumLifetime",
                      redirectLogin: !F,
                      purchaseSource: d.purchaseSourceGift.pricing
                    })]
                  }), (0, i.jsx)("div", {
                    className: a.default.mostPopularWrapper,
                    children: (0, i.jsx)("span", {
                      className: a.default.mostPopular,
                      children: w("common.pricing.most_popular")
                    })
                  })]
                })]
              }), (0, i.jsxs)("span", {
                onClick: () => {
                  b.current && b.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  })
                },
                children: [w("pricing.explore_features"), " ", t.default.arrowPlansDown]
              })]
            })]
          })
        }), (0, i.jsxs)("div", {
          className: a.default.allFeatures,
          ref: b,
          style: {
            paddingTop: "170px"
          },
          children: [(0, i.jsxs)("div", {
            className: a.default.allFeaturesDescription,
            children: [(0, i.jsx)("h1", {
              children: w("pricing.pricing_table_title")
            }), (0, i.jsx)("h3", {
              children: w("pricing.pricing_table_description")
            })]
          }), (0, i.jsx)("div", {
            className: a.default.tableWrapper,
            children: (0, i.jsxs)("div", {
              className: a.default.matrixShell,
              children: [(0, i.jsxs)("div", {
                className: a.default.matrixHeader,
                children: [(0, i.jsxs)("div", {
                  className: `${a.default.matrixPlanCard} ${a.default.matrixPlanCardPremium}`,
                  children: [(0, i.jsx)("h1", {
                    children: w("common.pricing.premium_plan.name")
                  }), (0, i.jsxs)("h1", {
                    children: ["7,99€", (0, i.jsxs)("span", {
                      children: ["/", w("common.pricing.lifetime_text")]
                    })]
                  }), F ? (0, i.jsx)("span", {
                    onClick: () => T("premiumLifetime"),
                    children: w("common.pricing.premium_plan.button")
                  }) : (0, i.jsx)(p.default, {
                    href: "/login?returnUri=/pricing",
                    children: w("common.pricing.premium_plan.button")
                  })]
                }), (0, i.jsxs)("div", {
                  className: `${a.default.matrixPlanCard} ${a.default.matrixPlanCardFree}`,
                  children: [(0, i.jsx)("h1", {
                    children: w("common.pricing.free_plan.name")
                  }), (0, i.jsxs)("h1", {
                    children: ["0€", (0, i.jsxs)("span", {
                      children: ["/", w("common.pricing.lifetime_text")]
                    })]
                  }), (0, i.jsx)(p.default, {
                    href: "/register?ref=pricing_page_table",
                    children: w("common.pricing.free_plan.button")
                  })]
                })]
              }), (0, i.jsx)("div", {
                className: a.default.featuresMatrix,
                children: A.map((e, r) => (0, i.jsxs)("div", {
                  className: `${a.default.matrixRow} ${R===r?a.default.matrixRowExpanded:""}`,
                  onMouseEnter: () => {
                    window.matchMedia("(hover: hover) and (pointer: fine)").matches && null === x && (E.current = r, B(), k.current = setTimeout(() => {
                      E.current === r && null === x && v(r)
                    }, 250))
                  },
                  onMouseLeave: S,
                  onClick: () => M(r),
                  role: "button",
                  tabIndex: 0,
                  onKeyDown: e => {
                    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), M(r))
                  },
                  children: [(0, i.jsxs)("div", {
                    className: a.default.matrixFeatureContent,
                    children: [(0, i.jsxs)("div", {
                      className: a.default.matrixFeatureTitle,
                      children: [(0, i.jsx)("span", {
                        className: `${a.default.matrixFeatureArrow} ${R===r?a.default.matrixFeatureArrowOpen:""}`,
                        children: t.default.arrowDown
                      }), (0, i.jsx)("h1", {
                        children: e.name
                      })]
                    }), (0, i.jsx)("div", {
                      className: `${a.default.matrixFeatureDescription} ${R===r?a.default.matrixFeatureDescriptionOpen:""}`,
                      children: (0, i.jsx)("p", {
                        children: e.description
                      })
                    })]
                  }), (0, i.jsx)("div", {
                    className: `${a.default.matrixAvailability} ${a.default.matrixAvailabilityPremium}`,
                    children: t.default.check
                  }), (0, i.jsx)("div", {
                    className: a.default.matrixAvailability,
                    children: e.premium ? t.default.cross : t.default.check
                  }), (0, i.jsxs)("div", {
                    className: a.default.matrixMobileAvailability,
                    children: [(0, i.jsxs)("div", {
                      className: a.default.matrixMobilePlan,
                      children: [(0, i.jsx)("span", {
                        children: w("common.pricing.premium_plan.name")
                      }), (0, i.jsx)("div", {
                        className: `${a.default.matrixAvailability} ${a.default.matrixAvailabilityPremium}`,
                        children: t.default.check
                      })]
                    }), (0, i.jsxs)("div", {
                      className: a.default.matrixMobilePlan,
                      children: [(0, i.jsx)("span", {
                        children: w("common.pricing.free_plan.name")
                      }), (0, i.jsx)("div", {
                        className: a.default.matrixAvailability,
                        children: e.premium ? t.default.cross : t.default.check
                      })]
                    })]
                  })]
                }, r))
              })]
            })
          })]
        }), (0, i.jsxs)("div", {
          className: a.default.otherProducts,
          ref: y,
          children: [(0, i.jsx)("div", {
            className: a.default.otherProductsDescription,
            children: (0, i.jsx)("h1", {
              children: w("pricing.other_products")
            })
          }), (0, i.jsxs)("div", {
            className: a.default.products,
            children: [(0, i.jsxs)("div", {
              className: a.default.pricingProduct,
              children: [(0, i.jsxs)("div", {
                children: [(0, i.jsxs)("h1", {
                  children: [t.default.customBadge, " ", w("common.pricing.custom_badge.name")]
                }), (0, i.jsxs)("div", {
                  className: a.default.price,
                  children: [(0, i.jsxs)("h1", {
                    children: ["8,99€", (0, i.jsxs)("span", {
                      children: ["/", w("common.pricing.lifetime_text")]
                    })]
                  }), (0, i.jsx)("span", {
                    className: a.default.lifetimeText,
                    children: w("common.pricing.lifetime_text_description")
                  })]
                }), (0, i.jsx)("h3", {
                  children: w("common.pricing.custom_badge.description")
                }), (0, i.jsxs)("div", {
                  className: a.default.features,
                  children: [(0, i.jsxs)("span", {
                    children: [t.default.checkmark, " ", w("common.pricing.custom_badge.features.custom")]
                  }), (0, i.jsxs)("span", {
                    children: [t.default.checkmark, " ", w("common.pricing.custom_badge.features.exclusive_appearance")]
                  }), (0, i.jsxs)("span", {
                    children: [t.default.checkmark, " ", w("common.pricing.custom_badge.features.editable_anytime")]
                  })]
                })]
              }), (0, i.jsxs)("div", {
                className: a.default.productButtons,
                children: [F ? (0, i.jsx)("span", {
                  className: a.default.purchaseButton,
                  onClick: () => T("custombadge"),
                  children: w("common.pricing.custom_badge.button")
                }) : (0, i.jsx)(p.default, {
                  className: a.default.purchaseButton,
                  href: "/login?returnUri=/pricing",
                  children: w("common.pricing.custom_badge.button")
                }), (0, i.jsx)(c.default, {
                  defaultSelection: "custombadge",
                  redirectLogin: !F,
                  purchaseSource: d.purchaseSourceGift.pricing
                })]
              }), (0, i.jsx)("div", {
                className: a.default.mostPopularWrapper,
                children: (0, i.jsx)("span", {
                  className: a.default.mostPopular,
                  children: w("common.pricing.custom_badge.new")
                })
              })]
            }), (0, i.jsxs)("div", {
              className: a.default.pricingProduct,
              children: [(0, i.jsxs)("div", {
                children: [(0, i.jsxs)("h1", {
                  children: [t.default.imagehost, " ", w("common.pricing.imagehost_plan.name")]
                }), (0, i.jsxs)("div", {
                  className: a.default.price,
                  children: [(0, i.jsxs)("h1", {
                    children: ["4,99€", (0, i.jsxs)("span", {
                      children: ["/", w("common.pricing.lifetime_text")]
                    })]
                  }), (0, i.jsx)("span", {
                    className: a.default.lifetimeText,
                    children: w("common.pricing.lifetime_text_description")
                  })]
                }), (0, i.jsx)("h3", {
                  children: w("common.pricing.imagehost_plan.description")
                }), (0, i.jsxs)("div", {
                  className: a.default.features,
                  children: [(0, i.jsxs)("span", {
                    children: [t.default.checkmark, " ", w("common.pricing.imagehost_plan.features.custom_domain")]
                  }), (0, i.jsxs)("span", {
                    children: [t.default.checkmark, " ", w("common.pricing.imagehost_plan.features.public_domains")]
                  }), (0, i.jsxs)("span", {
                    children: [t.default.checkmark, " ", w("common.pricing.imagehost_plan.features.exclusive_badge")]
                  }), (0, i.jsxs)("span", {
                    children: [t.default.checkmark, " ", w("common.pricing.imagehost_plan.features.fast_secure_uploads")]
                  }), (0, i.jsxs)("span", {
                    children: [t.default.checkmark, " ", w("common.pricing.imagehost_plan.features.advanced_image_gallery")]
                  })]
                })]
              }), (0, i.jsxs)("div", {
                className: a.default.productButtons,
                children: [F ? (0, i.jsx)("span", {
                  className: a.default.purchaseButton,
                  onClick: () => T("imagehost"),
                  children: w("common.pricing.imagehost_plan.button")
                }) : (0, i.jsx)(p.default, {
                  className: a.default.purchaseButton,
                  href: "/login?returnUri=/pricing",
                  children: w("common.pricing.imagehost_plan.button")
                }), (0, i.jsx)(c.default, {
                  defaultSelection: "imagehost",
                  redirectLogin: !F,
                  purchaseSource: d.purchaseSourceGift.pricing
                })]
              })]
            }), (0, i.jsxs)("div", {
              className: a.default.pricingProduct,
              children: [(0, i.jsxs)("div", {
                children: [(0, i.jsxs)("h1", {
                  children: [t.default.verified, " ", w("common.pricing.verified.name")]
                }), (0, i.jsxs)("div", {
                  className: a.default.price,
                  children: [(0, i.jsxs)("h1", {
                    children: ["14,99€", (0, i.jsxs)("span", {
                      children: ["/", w("common.pricing.lifetime_text")]
                    })]
                  }), (0, i.jsx)("span", {
                    className: a.default.lifetimeText,
                    children: w("common.pricing.lifetime_text_description")
                  })]
                }), (0, i.jsx)("h3", {
                  children: w("common.pricing.verified.description")
                }), (0, i.jsxs)("div", {
                  className: a.default.features,
                  children: [(0, i.jsxs)("span", {
                    children: [t.default.checkmark, " ", w("common.pricing.verified.features.exclusive_verified_badge")]
                  }), (0, i.jsxs)("span", {
                    children: [t.default.checkmark, " ", w("common.pricing.verified.features.special_role")]
                  }), (0, i.jsxs)("span", {
                    children: [t.default.checkmark, " ", w("common.pricing.verified.features.trust_credibility")]
                  })]
                })]
              }), (0, i.jsxs)("div", {
                className: a.default.productButtons,
                children: [F ? (0, i.jsx)("span", {
                  className: a.default.purchaseButton,
                  onClick: () => T("verified"),
                  children: w("common.pricing.verified.button")
                }) : (0, i.jsx)(p.default, {
                  className: a.default.purchaseButton,
                  href: "/login?returnUri=/pricing",
                  children: w("common.pricing.verified.button")
                }), (0, i.jsx)(c.default, {
                  defaultSelection: "verified",
                  redirectLogin: !F,
                  purchaseSource: d.purchaseSourceGift.pricing
                })]
              })]
            })]
          })]
        })]
      })]
    })
  }
  e.s(["default", () => f])
}]);