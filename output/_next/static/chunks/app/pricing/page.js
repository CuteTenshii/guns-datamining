(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6907], {
    47461: (e, i, s) => {
      "use strict";
      s.d(i, {
        default: () => k
      });
      var r = s(95155),
        c = s(86278),
        n = s.n(c),
        a = s(81382),
        m = s(12115),
        t = s(34023),
        l = s(66609),
        o = s(41458),
        p = s(50686),
        d = s(98241),
        u = s.n(d),
        h = s(54834),
        x = s(79157),
        g = s(13699),
        j = s(81934),
        f = s(86891),
        _ = s(13782),
        v = s(61836);

      function k({
        data: e
      }) {
        let [i, s] = (0, m.useState)(!1), [c, d] = (0, m.useState)(null), [k, N] = (0, m.useState)(null), b = (0, m.useRef)(null), A = (0, m.useRef)(null), y = (0, m.useRef)(null), P = e.statsData, w = e.tokenData, $ = (0, m.useRef)(null), B = !!w.session && !!w.session.userId, [C, S] = (0, m.useState)(""), D = (0, f.kj)(), F = async e => {
          S(e), s(!0)
        }, T = () => {
          A.current && (clearTimeout(A.current), A.current = null)
        }, M = () => {
          y.current = null, T(), null === c && N(null)
        }, L = e => {
          T(), d(i => i === e ? null : e), N(null), y.current = null
        }, q = [{
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
          name: D(`pricing.pricing_table_features.${e}.name`),
          description: D(`pricing.pricing_table_features.${e}.description`),
          premium: i
        })), E = c ?? k;
        return (0, m.useEffect)(() => {
          let e = window.location.hash;
          if (!e) return;
          let i = e.replace("#", "").toLowerCase();
          ("imagehost" === i || "verified" === i || "custombadge" === i || "other" === i) && $.current && $.current.scrollIntoView({
            behavior: "smooth",
            block: "center"
          })
        }, []), (0, m.useEffect)(() => () => {
          T()
        }, []), (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(_.A, {
            opened: i,
            onClose: () => s(!1),
            title: D("common.pricing.payment_methods"),
            centered: !0,
            children: "custombadge" === C ? (0, r.jsx)(x.A, {
              purchaseSource: g.v.pricing
            }) : (0, r.jsx)(p.A, {
              type: C,
              purchaseSource: g.v.pricing
            })
          }), (0, r.jsx)(l.l$, {
            richColors: !0,
            position: "top-center",
            theme: "dark",
            className: u().toasterStyles,
            icons: {
              success: h.A.successToast
            },
            visibleToasts: 2
          }), (0, r.jsxs)(a.default, {
            data: w,
            statsData: P,
            children: [(0, r.jsx)("div", {
              className: n().pricingPage,
              children: (0, r.jsxs)("div", {
                className: n().pricingHero,
                children: [(0, r.jsx)("div", {
                  className: n().heroDescription,
                  children: (0, r.jsxs)("div", {
                    className: n().heroDescriptionInner,
                    children: [(0, r.jsx)("h1", {
                      children: D("pricing.hero.title")
                    }), (0, r.jsx)("h3", {
                      children: D("pricing.hero.description")
                    })]
                  })
                }), (0, r.jsxs)("div", {
                  className: n().plansWrapper,
                  children: [(0, r.jsxs)("div", {
                    className: n().plans,
                    children: [(0, r.jsxs)("div", {
                      className: n().freePlan,
                      children: [(0, r.jsx)("h1", {
                        className: n().freePlanText,
                        children: D("common.pricing.free_plan.name")
                      }), (0, r.jsx)("div", {
                        className: n().price,
                        children: (0, r.jsxs)("h1", {
                          children: [(0, v.$g)(v.q9.free), (0, r.jsxs)("span", {
                            children: ["/", D("common.pricing.lifetime_text")]
                          })]
                        })
                      }), (0, r.jsx)("h3", {
                        children: D("common.pricing.free_plan.description")
                      }), (0, r.jsxs)("div", {
                        className: n().features,
                        children: [(0, r.jsxs)("span", {
                          children: [t.A.checkmark, " ", D("common.pricing.free_plan.features.basic_customization")]
                        }), (0, r.jsxs)("span", {
                          children: [t.A.checkmark, " ", D("common.pricing.free_plan.features.profile_analytics")]
                        }), (0, r.jsxs)("span", {
                          children: [t.A.checkmark, " ", D("common.pricing.free_plan.features.basic_effects")]
                        }), (0, r.jsxs)("span", {
                          children: [t.A.checkmark, " ", D("common.pricing.free_plan.features.add_your_socials")]
                        })]
                      }), (0, r.jsx)(j.A, {
                        className: n().purchaseButton,
                        href: "/register?ref=pricing_page",
                        children: D("common.pricing.free_plan.button")
                      })]
                    }), (0, r.jsxs)("div", {
                      className: n().premium,
                      children: [(0, r.jsxs)("h1", {
                        className: n().premiumText,
                        children: [t.A.premium, " ", D("common.pricing.premium_plan.name")]
                      }), (0, r.jsxs)("div", {
                        className: n().price,
                        children: [(0, r.jsxs)("h1", {
                          children: [(0, v.$g)(v.q9.premium), (0, r.jsxs)("span", {
                            children: ["/", D("common.pricing.lifetime_text")]
                          })]
                        }), (0, r.jsx)("span", {
                          className: n().lifetimeText,
                          children: D("common.pricing.lifetime_text_description")
                        })]
                      }), (0, r.jsx)("h3", {
                        children: D("common.pricing.premium_plan.description")
                      }), (0, r.jsxs)("div", {
                        className: n().features,
                        children: [(0, r.jsxs)("span", {
                          children: [t.A.checkmark, " ", D("common.pricing.premium_plan.features.exclusive_badge")]
                        }), (0, r.jsxs)("span", {
                          children: [t.A.checkmark, " ", D("common.pricing.premium_plan.features.profile_layouts")]
                        }), (0, r.jsxs)("span", {
                          children: [t.A.checkmark, " ", D("common.pricing.premium_plan.features.custom_fonts")]
                        }), (0, r.jsxs)("span", {
                          children: [t.A.checkmark, " ", D("common.pricing.premium_plan.features.typewriter_animation")]
                        }), (0, r.jsxs)("span", {
                          children: [t.A.checkmark, " ", D("common.pricing.premium_plan.features.special_profile_effects")]
                        }), (0, r.jsxs)("span", {
                          children: [t.A.checkmark, " ", D("common.pricing.premium_plan.features.advanced_customization")]
                        }), (0, r.jsxs)("span", {
                          children: [t.A.checkmark, " ", D("common.pricing.premium_plan.features.metadata_seo_customization")]
                        })]
                      }), (0, r.jsxs)("div", {
                        className: n().planButtons,
                        children: [B ? (0, r.jsx)("span", {
                          className: n().purchaseButton,
                          onClick: () => F("premiumLifetime"),
                          children: D("common.pricing.premium_plan.button")
                        }) : (0, r.jsx)(j.A, {
                          className: n().purchaseButton,
                          href: "/login?returnUri=/pricing",
                          children: D("common.pricing.premium_plan.button")
                        }), (0, r.jsx)(o.A, {
                          defaultSelection: "premiumLifetime",
                          redirectLogin: !B,
                          purchaseSource: g.j.pricing
                        })]
                      }), (0, r.jsx)("div", {
                        className: n().mostPopularWrapper,
                        children: (0, r.jsx)("span", {
                          className: n().mostPopular,
                          children: D("common.pricing.most_popular")
                        })
                      })]
                    })]
                  }), (0, r.jsxs)("span", {
                    onClick: () => {
                      b.current && b.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                      })
                    },
                    children: [D("pricing.explore_features"), " ", t.A.arrowPlansDown]
                  })]
                })]
              })
            }), (0, r.jsxs)("div", {
              className: n().allFeatures,
              ref: b,
              style: {
                paddingTop: "170px"
              },
              children: [(0, r.jsxs)("div", {
                className: n().allFeaturesDescription,
                children: [(0, r.jsx)("h1", {
                  children: D("pricing.pricing_table_title")
                }), (0, r.jsx)("h3", {
                  children: D("pricing.pricing_table_description")
                })]
              }), (0, r.jsx)("div", {
                className: n().tableWrapper,
                children: (0, r.jsxs)("div", {
                  className: n().matrixShell,
                  children: [(0, r.jsxs)("div", {
                    className: n().matrixHeader,
                    children: [(0, r.jsxs)("div", {
                      className: `${n().matrixPlanCard} ${n().matrixPlanCardPremium}`,
                      children: [(0, r.jsx)("h1", {
                        children: D("common.pricing.premium_plan.name")
                      }), (0, r.jsxs)("h1", {
                        children: [(0, v.$g)(v.q9.premium), (0, r.jsxs)("span", {
                          children: ["/", D("common.pricing.lifetime_text")]
                        })]
                      }), B ? (0, r.jsx)("span", {
                        onClick: () => F("premiumLifetime"),
                        children: D("common.pricing.premium_plan.button")
                      }) : (0, r.jsx)(j.A, {
                        href: "/login?returnUri=/pricing",
                        children: D("common.pricing.premium_plan.button")
                      })]
                    }), (0, r.jsxs)("div", {
                      className: `${n().matrixPlanCard} ${n().matrixPlanCardFree}`,
                      children: [(0, r.jsx)("h1", {
                        children: D("common.pricing.free_plan.name")
                      }), (0, r.jsxs)("h1", {
                        children: [(0, v.$g)(v.q9.free), (0, r.jsxs)("span", {
                          children: ["/", D("common.pricing.lifetime_text")]
                        })]
                      }), (0, r.jsx)(j.A, {
                        href: "/register?ref=pricing_page_table",
                        children: D("common.pricing.free_plan.button")
                      })]
                    })]
                  }), (0, r.jsx)("div", {
                    className: n().featuresMatrix,
                    children: q.map((e, i) => (0, r.jsxs)("div", {
                      className: `${n().matrixRow} ${E===i?n().matrixRowExpanded:""}`,
                      onMouseEnter: () => {
                        window.matchMedia("(hover: hover) and (pointer: fine)").matches && null === c && (y.current = i, T(), A.current = setTimeout(() => {
                          y.current === i && null === c && N(i)
                        }, 250))
                      },
                      onMouseLeave: M,
                      onClick: () => L(i),
                      role: "button",
                      tabIndex: 0,
                      onKeyDown: e => {
                        ("Enter" === e.key || " " === e.key) && (e.preventDefault(), L(i))
                      },
                      children: [(0, r.jsxs)("div", {
                        className: n().matrixFeatureContent,
                        children: [(0, r.jsxs)("div", {
                          className: n().matrixFeatureTitle,
                          children: [(0, r.jsx)("span", {
                            className: `${n().matrixFeatureArrow} ${E===i?n().matrixFeatureArrowOpen:""}`,
                            children: t.A.arrowDown
                          }), (0, r.jsx)("h1", {
                            children: e.name
                          })]
                        }), (0, r.jsx)("div", {
                          className: `${n().matrixFeatureDescription} ${E===i?n().matrixFeatureDescriptionOpen:""}`,
                          children: (0, r.jsx)("p", {
                            children: e.description
                          })
                        })]
                      }), (0, r.jsx)("div", {
                        className: `${n().matrixAvailability} ${n().matrixAvailabilityPremium}`,
                        children: t.A.check
                      }), (0, r.jsx)("div", {
                        className: n().matrixAvailability,
                        children: e.premium ? t.A.cross : t.A.check
                      }), (0, r.jsxs)("div", {
                        className: n().matrixMobileAvailability,
                        children: [(0, r.jsxs)("div", {
                          className: n().matrixMobilePlan,
                          children: [(0, r.jsx)("span", {
                            children: D("common.pricing.premium_plan.name")
                          }), (0, r.jsx)("div", {
                            className: `${n().matrixAvailability} ${n().matrixAvailabilityPremium}`,
                            children: t.A.check
                          })]
                        }), (0, r.jsxs)("div", {
                          className: n().matrixMobilePlan,
                          children: [(0, r.jsx)("span", {
                            children: D("common.pricing.free_plan.name")
                          }), (0, r.jsx)("div", {
                            className: n().matrixAvailability,
                            children: e.premium ? t.A.cross : t.A.check
                          })]
                        })]
                      })]
                    }, i))
                  })]
                })
              })]
            }), (0, r.jsxs)("div", {
              className: n().otherProducts,
              ref: $,
              children: [(0, r.jsx)("div", {
                className: n().otherProductsDescription,
                children: (0, r.jsx)("h1", {
                  children: D("pricing.other_products")
                })
              }), (0, r.jsxs)("div", {
                className: n().products,
                children: [(0, r.jsxs)("div", {
                  className: n().pricingProduct,
                  children: [(0, r.jsxs)("div", {
                    children: [(0, r.jsxs)("h1", {
                      children: [t.A.customBadge, " ", D("common.pricing.custom_badge.name")]
                    }), (0, r.jsxs)("div", {
                      className: n().price,
                      children: [(0, r.jsxs)("h1", {
                        children: [(0, v.$g)(v.q9.customBadge), (0, r.jsxs)("span", {
                          children: ["/", D("common.pricing.lifetime_text")]
                        })]
                      }), (0, r.jsx)("span", {
                        className: n().lifetimeText,
                        children: D("common.pricing.lifetime_text_description")
                      })]
                    }), (0, r.jsx)("h3", {
                      children: D("common.pricing.custom_badge.description")
                    }), (0, r.jsxs)("div", {
                      className: n().features,
                      children: [(0, r.jsxs)("span", {
                        children: [t.A.checkmark, " ", D("common.pricing.custom_badge.features.custom")]
                      }), (0, r.jsxs)("span", {
                        children: [t.A.checkmark, " ", D("common.pricing.custom_badge.features.exclusive_appearance")]
                      }), (0, r.jsxs)("span", {
                        children: [t.A.checkmark, " ", D("common.pricing.custom_badge.features.editable_anytime")]
                      })]
                    })]
                  }), (0, r.jsxs)("div", {
                    className: n().productButtons,
                    children: [B ? (0, r.jsx)("span", {
                      className: n().purchaseButton,
                      onClick: () => F("custombadge"),
                      children: D("common.pricing.custom_badge.button")
                    }) : (0, r.jsx)(j.A, {
                      className: n().purchaseButton,
                      href: "/login?returnUri=/pricing",
                      children: D("common.pricing.custom_badge.button")
                    }), (0, r.jsx)(o.A, {
                      defaultSelection: "custombadge",
                      redirectLogin: !B,
                      purchaseSource: g.j.pricing
                    })]
                  }), (0, r.jsx)("div", {
                    className: n().mostPopularWrapper,
                    children: (0, r.jsx)("span", {
                      className: n().mostPopular,
                      children: D("common.pricing.custom_badge.new")
                    })
                  })]
                }), (0, r.jsxs)("div", {
                  className: n().pricingProduct,
                  children: [(0, r.jsxs)("div", {
                    children: [(0, r.jsxs)("h1", {
                      children: [t.A.imagehost, " ", D("common.pricing.imagehost_plan.name")]
                    }), (0, r.jsxs)("div", {
                      className: n().price,
                      children: [(0, r.jsxs)("h1", {
                        children: [(0, v.$g)(v.q9.imagehost), (0, r.jsxs)("span", {
                          children: ["/", D("common.pricing.lifetime_text")]
                        })]
                      }), (0, r.jsx)("span", {
                        className: n().lifetimeText,
                        children: D("common.pricing.lifetime_text_description")
                      })]
                    }), (0, r.jsx)("h3", {
                      children: D("common.pricing.imagehost_plan.description")
                    }), (0, r.jsxs)("div", {
                      className: n().features,
                      children: [(0, r.jsxs)("span", {
                        children: [t.A.checkmark, " ", D("common.pricing.imagehost_plan.features.custom_domain")]
                      }), (0, r.jsxs)("span", {
                        children: [t.A.checkmark, " ", D("common.pricing.imagehost_plan.features.public_domains")]
                      }), (0, r.jsxs)("span", {
                        children: [t.A.checkmark, " ", D("common.pricing.imagehost_plan.features.exclusive_badge")]
                      }), (0, r.jsxs)("span", {
                        children: [t.A.checkmark, " ", D("common.pricing.imagehost_plan.features.fast_secure_uploads")]
                      }), (0, r.jsxs)("span", {
                        children: [t.A.checkmark, " ", D("common.pricing.imagehost_plan.features.advanced_image_gallery")]
                      }), (0, r.jsxs)("span", {
                        children: [t.A.checkmark, " ", D("common.pricing.imagehost_plan.features.paste_bin")]
                      })]
                    })]
                  }), (0, r.jsxs)("div", {
                    className: n().productButtons,
                    children: [B ? (0, r.jsx)("span", {
                      className: n().purchaseButton,
                      onClick: () => F("imagehost"),
                      children: D("common.pricing.imagehost_plan.button")
                    }) : (0, r.jsx)(j.A, {
                      className: n().purchaseButton,
                      href: "/login?returnUri=/pricing",
                      children: D("common.pricing.imagehost_plan.button")
                    }), (0, r.jsx)(o.A, {
                      defaultSelection: "imagehost",
                      redirectLogin: !B,
                      purchaseSource: g.j.pricing
                    })]
                  })]
                }), (0, r.jsxs)("div", {
                  className: n().pricingProduct,
                  children: [(0, r.jsxs)("div", {
                    children: [(0, r.jsxs)("h1", {
                      children: [t.A.verified, " ", D("common.pricing.verified.name")]
                    }), (0, r.jsxs)("div", {
                      className: n().price,
                      children: [(0, r.jsxs)("h1", {
                        children: [(0, v.$g)(v.q9.verified), (0, r.jsxs)("span", {
                          children: ["/", D("common.pricing.lifetime_text")]
                        })]
                      }), (0, r.jsx)("span", {
                        className: n().lifetimeText,
                        children: D("common.pricing.lifetime_text_description")
                      })]
                    }), (0, r.jsx)("h3", {
                      children: D("common.pricing.verified.description")
                    }), (0, r.jsxs)("div", {
                      className: n().features,
                      children: [(0, r.jsxs)("span", {
                        children: [t.A.checkmark, " ", D("common.pricing.verified.features.exclusive_verified_badge")]
                      }), (0, r.jsxs)("span", {
                        children: [t.A.checkmark, " ", D("common.pricing.verified.features.special_role")]
                      }), (0, r.jsxs)("span", {
                        children: [t.A.checkmark, " ", D("common.pricing.verified.features.trust_credibility")]
                      })]
                    })]
                  }), (0, r.jsxs)("div", {
                    className: n().productButtons,
                    children: [B ? (0, r.jsx)("span", {
                      className: n().purchaseButton,
                      onClick: () => F("verified"),
                      children: D("common.pricing.verified.button")
                    }) : (0, r.jsx)(j.A, {
                      className: n().purchaseButton,
                      href: "/login?returnUri=/pricing",
                      children: D("common.pricing.verified.button")
                    }), (0, r.jsx)(o.A, {
                      defaultSelection: "verified",
                      redirectLogin: !B,
                      purchaseSource: g.j.pricing
                    })]
                  })]
                })]
              })]
            })]
          })]
        })
      }
    },
    79157: (e, i, s) => {
      "use strict";
      s.d(i, {
        A: () => d
      });
      var r = s(95155),
        c = s(12115),
        n = s(91801),
        a = s.n(n),
        m = s(97478),
        t = s(3434),
        l = s(50686),
        o = s(86891),
        p = s(61836);

      function d({
        purchaseSource: e = "unknown"
      }) {
        let i = (0, o.kj)(),
          [s, n] = (0, c.useState)(1),
          [d, u] = (0, c.useState)(!1),
          h = async e => {
            u(!0)
          }, x = s > 1 ? (0, r.jsxs)(r.Fragment, {
            children: [(0, p.o3)(s).totalPrice, "€ ", (0, r.jsxs)("s", {
              children: [(0, p.o3)(s).rawPrice, "€"]
            })]
          }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, p.o3)(s).totalPrice, "€"]
          });
        return (0, r.jsx)(r.Fragment, {
          children: d ? (0, r.jsx)(l.A, {
            type: "customBadge",
            customBadgeData: {
              amount: s,
              totalPrice: (0, p.o3)(s).totalPrice
            },
            purchaseSource: e
          }) : (0, r.jsxs)("div", {
            className: a().CustomBadgePurchaseModal,
            children: [(0, r.jsx)(m.A, {
              featureName: i("modals.custom_badge.title"),
              max: 500,
              value: s,
              min: 1,
              onChange: n,
              icon: t.A.shoppingBag
            }), (0, r.jsxs)("div", {
              className: a().CustomBadgePurchaseModalDiscount,
              children: [(0, r.jsx)("h1", {
                children: i("modals.custom_badge.information_text")
              }), (0, r.jsx)("h3", {
                children: i("modals.custom_badge.description", {
                  percentage: (0, p.o3)(s).discountPercent,
                  quantity: s
                })
              })]
            }), (0, r.jsx)("span", {
              className: a().CustomBadgePurchaseModalButton,
              onClick: h,
              children: i("modals.custom_badge.purchase_text", {
                price: x
              })
            })]
          })
        })
      }
    },
    95331: (e, i, s) => {
      Promise.resolve().then(s.bind(s, 47461))
    }
  },
  e => {
    e.O(0, [4801, 8604, 1899, 9255, 4236, 6870, 6609, 4293, 5810, 6891, 5886, 9182, 8481, 3434, 1378, 6788, 1382, 8756, 8441, 3794, 7358], () => e(e.s = 95331)), _N_E = e.O()
  }
]);