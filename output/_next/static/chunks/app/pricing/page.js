(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6907], {
    47461: (e, i, s) => {
      "use strict";
      s.d(i, {
        default: () => A
      });
      var r = s(95155),
        c = s(79939),
        n = s(24795),
        a = s(86278),
        t = s.n(a),
        m = s(81382),
        l = s(12115),
        o = s(34023),
        p = s(66609),
        d = s(41458),
        u = s(50686),
        h = s(98241),
        x = s.n(h),
        g = s(54834),
        j = s(79157),
        f = s(13699),
        _ = s(81934),
        v = s(86891),
        k = s(13782),
        N = s(61836);

      function A({
        data: e
      }) {
        let [i, s] = (0, l.useState)(!1), [a, h] = (0, l.useState)(null), [A, b] = (0, l.useState)(null), y = (0, l.useRef)(null), P = (0, l.useRef)(null), w = (0, l.useRef)(null), B = e.statsData, C = e.tokenData, S = (0, l.useRef)(null), $ = !!C.session && !!C.session.userId, [D, F] = (0, l.useState)(""), T = (0, v.kj)(), M = async e => {
          F(e), s(!0)
        }, L = () => {
          P.current && (clearTimeout(P.current), P.current = null)
        }, E = () => {
          w.current = null, L(), null === a && b(null)
        }, R = e => {
          L(), h(i => i === e ? null : e), b(null), w.current = null
        }, z = [{
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
          name: T(`pricing.pricing_table_features.${e}.name`),
          description: T(`pricing.pricing_table_features.${e}.description`),
          premium: i
        })), I = a ?? A;
        return (0, l.useEffect)(() => {
          let e = window.location.hash;
          if (!e) return;
          let i = e.replace("#", "").toLowerCase();
          ("imagehost" === i || "verified" === i || "custombadge" === i || "other" === i) && S.current && S.current.scrollIntoView({
            behavior: "smooth",
            block: "center"
          })
        }, []), (0, l.useEffect)(() => () => {
          L()
        }, []), (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(k.A, {
            opened: i,
            onClose: () => s(!1),
            title: T("common.pricing.payment_methods"),
            centered: !0,
            children: "custombadge" === D ? (0, r.jsx)(j.A, {
              purchaseSource: f.v.pricing
            }) : (0, r.jsx)(u.A, {
              type: D,
              purchaseSource: f.v.pricing
            })
          }), (0, r.jsx)(p.l$, {
            richColors: !0,
            position: "top-center",
            theme: "dark",
            className: x().toasterStyles,
            icons: {
              success: g.A.successToast
            },
            visibleToasts: 2
          }), (0, r.jsxs)(m.default, {
            data: C,
            statsData: B,
            children: [(0, r.jsx)("div", {
              className: t().pricingPage,
              children: (0, r.jsxs)("div", {
                className: t().pricingHero,
                children: [(0, r.jsx)("div", {
                  className: t().heroDescription,
                  children: (0, r.jsxs)("div", {
                    className: t().heroDescriptionInner,
                    children: [(0, r.jsx)(c.A, {}), (0, r.jsx)("h1", {
                      children: T("pricing.hero.title")
                    }), (0, r.jsx)("h3", {
                      children: T("pricing.hero.description")
                    })]
                  })
                }), (0, r.jsxs)("div", {
                  className: t().plansWrapper,
                  children: [(0, r.jsxs)("div", {
                    className: t().plans,
                    children: [(0, r.jsxs)("div", {
                      className: t().freePlan,
                      children: [(0, r.jsx)("h1", {
                        className: t().freePlanText,
                        children: T("common.pricing.free_plan.name")
                      }), (0, r.jsx)("div", {
                        className: t().price,
                        children: (0, r.jsxs)("h1", {
                          children: [(0, N.$g)(N.q9.free), (0, r.jsxs)("span", {
                            children: ["/", T("common.pricing.lifetime_text")]
                          })]
                        })
                      }), (0, r.jsx)("h3", {
                        children: T("common.pricing.free_plan.description")
                      }), (0, r.jsxs)("div", {
                        className: t().features,
                        children: [(0, r.jsxs)("span", {
                          children: [o.A.checkmark, " ", T("common.pricing.free_plan.features.basic_customization")]
                        }), (0, r.jsxs)("span", {
                          children: [o.A.checkmark, " ", T("common.pricing.free_plan.features.profile_analytics")]
                        }), (0, r.jsxs)("span", {
                          children: [o.A.checkmark, " ", T("common.pricing.free_plan.features.basic_effects")]
                        }), (0, r.jsxs)("span", {
                          children: [o.A.checkmark, " ", T("common.pricing.free_plan.features.add_your_socials")]
                        })]
                      }), (0, r.jsx)(_.A, {
                        className: t().purchaseButton,
                        href: "/register?ref=pricing_page",
                        children: T("common.pricing.free_plan.button")
                      })]
                    }), (0, r.jsxs)("div", {
                      className: t().premium,
                      children: [(0, r.jsxs)("h1", {
                        className: t().premiumText,
                        children: [o.A.premium, " ", T("common.pricing.premium_plan.name")]
                      }), (0, r.jsxs)("div", {
                        className: t().price,
                        children: [(0, r.jsxs)("h1", {
                          children: [(0, r.jsx)(n.A, {
                            product: "premium"
                          }), (0, r.jsxs)("span", {
                            children: ["/", T("common.pricing.lifetime_text")]
                          })]
                        }), (0, r.jsx)("span", {
                          className: t().lifetimeText,
                          children: T("common.pricing.lifetime_text_description")
                        })]
                      }), (0, r.jsx)("h3", {
                        children: T("common.pricing.premium_plan.description")
                      }), (0, r.jsxs)("div", {
                        className: t().features,
                        children: [(0, r.jsxs)("span", {
                          children: [o.A.checkmark, " ", T("common.pricing.premium_plan.features.exclusive_badge")]
                        }), (0, r.jsxs)("span", {
                          children: [o.A.checkmark, " ", T("common.pricing.premium_plan.features.profile_layouts")]
                        }), (0, r.jsxs)("span", {
                          children: [o.A.checkmark, " ", T("common.pricing.premium_plan.features.custom_fonts")]
                        }), (0, r.jsxs)("span", {
                          children: [o.A.checkmark, " ", T("common.pricing.premium_plan.features.typewriter_animation")]
                        }), (0, r.jsxs)("span", {
                          children: [o.A.checkmark, " ", T("common.pricing.premium_plan.features.special_profile_effects")]
                        }), (0, r.jsxs)("span", {
                          children: [o.A.checkmark, " ", T("common.pricing.premium_plan.features.advanced_customization")]
                        }), (0, r.jsxs)("span", {
                          children: [o.A.checkmark, " ", T("common.pricing.premium_plan.features.metadata_seo_customization")]
                        })]
                      }), (0, r.jsxs)("div", {
                        className: t().planButtons,
                        children: [$ ? (0, r.jsx)("span", {
                          className: t().purchaseButton,
                          onClick: () => M("premiumLifetime"),
                          children: T("common.pricing.premium_plan.button")
                        }) : (0, r.jsx)(_.A, {
                          className: t().purchaseButton,
                          href: "/login?returnUri=/pricing",
                          children: T("common.pricing.premium_plan.button")
                        }), (0, r.jsx)(d.A, {
                          defaultSelection: "premiumLifetime",
                          redirectLogin: !$,
                          purchaseSource: f.j.pricing
                        })]
                      }), (0, r.jsx)("div", {
                        className: t().mostPopularWrapper,
                        children: (0, r.jsx)("span", {
                          className: t().mostPopular,
                          children: T("common.pricing.most_popular")
                        })
                      })]
                    })]
                  }), (0, r.jsxs)("span", {
                    onClick: () => {
                      y.current && y.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                      })
                    },
                    children: [T("pricing.explore_features"), " ", o.A.arrowPlansDown]
                  })]
                })]
              })
            }), (0, r.jsxs)("div", {
              className: t().allFeatures,
              ref: y,
              style: {
                paddingTop: "170px"
              },
              children: [(0, r.jsxs)("div", {
                className: t().allFeaturesDescription,
                children: [(0, r.jsx)("h1", {
                  children: T("pricing.pricing_table_title")
                }), (0, r.jsx)("h3", {
                  children: T("pricing.pricing_table_description")
                })]
              }), (0, r.jsx)("div", {
                className: t().tableWrapper,
                children: (0, r.jsxs)("div", {
                  className: t().matrixShell,
                  children: [(0, r.jsxs)("div", {
                    className: t().matrixHeader,
                    children: [(0, r.jsxs)("div", {
                      className: `${t().matrixPlanCard} ${t().matrixPlanCardPremium}`,
                      children: [(0, r.jsx)("h1", {
                        children: T("common.pricing.premium_plan.name")
                      }), (0, r.jsxs)("h1", {
                        children: [(0, r.jsx)(n.A, {
                          product: "premium"
                        }), (0, r.jsxs)("span", {
                          children: ["/", T("common.pricing.lifetime_text")]
                        })]
                      }), $ ? (0, r.jsx)("span", {
                        onClick: () => M("premiumLifetime"),
                        children: T("common.pricing.premium_plan.button")
                      }) : (0, r.jsx)(_.A, {
                        href: "/login?returnUri=/pricing",
                        children: T("common.pricing.premium_plan.button")
                      })]
                    }), (0, r.jsxs)("div", {
                      className: `${t().matrixPlanCard} ${t().matrixPlanCardFree}`,
                      children: [(0, r.jsx)("h1", {
                        children: T("common.pricing.free_plan.name")
                      }), (0, r.jsxs)("h1", {
                        children: [(0, N.$g)(N.q9.free), (0, r.jsxs)("span", {
                          children: ["/", T("common.pricing.lifetime_text")]
                        })]
                      }), (0, r.jsx)(_.A, {
                        href: "/register?ref=pricing_page_table",
                        children: T("common.pricing.free_plan.button")
                      })]
                    })]
                  }), (0, r.jsx)("div", {
                    className: t().featuresMatrix,
                    children: z.map((e, i) => (0, r.jsxs)("div", {
                      className: `${t().matrixRow} ${I===i?t().matrixRowExpanded:""}`,
                      onMouseEnter: () => {
                        window.matchMedia("(hover: hover) and (pointer: fine)").matches && null === a && (w.current = i, L(), P.current = setTimeout(() => {
                          w.current === i && null === a && b(i)
                        }, 250))
                      },
                      onMouseLeave: E,
                      onClick: () => R(i),
                      role: "button",
                      tabIndex: 0,
                      onKeyDown: e => {
                        ("Enter" === e.key || " " === e.key) && (e.preventDefault(), R(i))
                      },
                      children: [(0, r.jsxs)("div", {
                        className: t().matrixFeatureContent,
                        children: [(0, r.jsxs)("div", {
                          className: t().matrixFeatureTitle,
                          children: [(0, r.jsx)("span", {
                            className: `${t().matrixFeatureArrow} ${I===i?t().matrixFeatureArrowOpen:""}`,
                            children: o.A.arrowDown
                          }), (0, r.jsx)("h1", {
                            children: e.name
                          })]
                        }), (0, r.jsx)("div", {
                          className: `${t().matrixFeatureDescription} ${I===i?t().matrixFeatureDescriptionOpen:""}`,
                          children: (0, r.jsx)("p", {
                            children: e.description
                          })
                        })]
                      }), (0, r.jsx)("div", {
                        className: `${t().matrixAvailability} ${t().matrixAvailabilityPremium}`,
                        children: o.A.check
                      }), (0, r.jsx)("div", {
                        className: t().matrixAvailability,
                        children: e.premium ? o.A.cross : o.A.check
                      }), (0, r.jsxs)("div", {
                        className: t().matrixMobileAvailability,
                        children: [(0, r.jsxs)("div", {
                          className: t().matrixMobilePlan,
                          children: [(0, r.jsx)("span", {
                            children: T("common.pricing.premium_plan.name")
                          }), (0, r.jsx)("div", {
                            className: `${t().matrixAvailability} ${t().matrixAvailabilityPremium}`,
                            children: o.A.check
                          })]
                        }), (0, r.jsxs)("div", {
                          className: t().matrixMobilePlan,
                          children: [(0, r.jsx)("span", {
                            children: T("common.pricing.free_plan.name")
                          }), (0, r.jsx)("div", {
                            className: t().matrixAvailability,
                            children: e.premium ? o.A.cross : o.A.check
                          })]
                        })]
                      })]
                    }, i))
                  })]
                })
              })]
            }), (0, r.jsxs)("div", {
              className: t().otherProducts,
              ref: S,
              children: [(0, r.jsx)("div", {
                className: t().otherProductsDescription,
                children: (0, r.jsx)("h1", {
                  children: T("pricing.other_products")
                })
              }), (0, r.jsxs)("div", {
                className: t().products,
                children: [(0, r.jsxs)("div", {
                  className: t().pricingProduct,
                  children: [(0, r.jsxs)("div", {
                    children: [(0, r.jsxs)("h1", {
                      children: [o.A.customBadge, " ", T("common.pricing.custom_badge.name")]
                    }), (0, r.jsxs)("div", {
                      className: t().price,
                      children: [(0, r.jsxs)("h1", {
                        children: [(0, r.jsx)(n.A, {
                          product: "customBadge"
                        }), (0, r.jsxs)("span", {
                          children: ["/", T("common.pricing.lifetime_text")]
                        })]
                      }), (0, r.jsx)("span", {
                        className: t().lifetimeText,
                        children: T("common.pricing.lifetime_text_description")
                      })]
                    }), (0, r.jsx)("h3", {
                      children: T("common.pricing.custom_badge.description")
                    }), (0, r.jsxs)("div", {
                      className: t().features,
                      children: [(0, r.jsxs)("span", {
                        children: [o.A.checkmark, " ", T("common.pricing.custom_badge.features.custom")]
                      }), (0, r.jsxs)("span", {
                        children: [o.A.checkmark, " ", T("common.pricing.custom_badge.features.exclusive_appearance")]
                      }), (0, r.jsxs)("span", {
                        children: [o.A.checkmark, " ", T("common.pricing.custom_badge.features.editable_anytime")]
                      })]
                    })]
                  }), (0, r.jsxs)("div", {
                    className: t().productButtons,
                    children: [$ ? (0, r.jsx)("span", {
                      className: t().purchaseButton,
                      onClick: () => M("custombadge"),
                      children: T("common.pricing.custom_badge.button")
                    }) : (0, r.jsx)(_.A, {
                      className: t().purchaseButton,
                      href: "/login?returnUri=/pricing",
                      children: T("common.pricing.custom_badge.button")
                    }), (0, r.jsx)(d.A, {
                      defaultSelection: "custombadge",
                      redirectLogin: !$,
                      purchaseSource: f.j.pricing
                    })]
                  }), (0, r.jsx)("div", {
                    className: t().mostPopularWrapper,
                    children: (0, r.jsx)("span", {
                      className: t().mostPopular,
                      children: T("common.pricing.custom_badge.new")
                    })
                  })]
                }), (0, r.jsxs)("div", {
                  className: t().pricingProduct,
                  children: [(0, r.jsxs)("div", {
                    children: [(0, r.jsxs)("h1", {
                      children: [o.A.imagehost, " ", T("common.pricing.imagehost_plan.name")]
                    }), (0, r.jsxs)("div", {
                      className: t().price,
                      children: [(0, r.jsxs)("h1", {
                        children: [(0, r.jsx)(n.A, {
                          product: "imagehost"
                        }), (0, r.jsxs)("span", {
                          children: ["/", T("common.pricing.lifetime_text")]
                        })]
                      }), (0, r.jsx)("span", {
                        className: t().lifetimeText,
                        children: T("common.pricing.lifetime_text_description")
                      })]
                    }), (0, r.jsx)("h3", {
                      children: T("common.pricing.imagehost_plan.description")
                    }), (0, r.jsxs)("div", {
                      className: t().features,
                      children: [(0, r.jsxs)("span", {
                        children: [o.A.checkmark, " ", T("common.pricing.imagehost_plan.features.custom_domain")]
                      }), (0, r.jsxs)("span", {
                        children: [o.A.checkmark, " ", T("common.pricing.imagehost_plan.features.public_domains")]
                      }), (0, r.jsxs)("span", {
                        children: [o.A.checkmark, " ", T("common.pricing.imagehost_plan.features.exclusive_badge")]
                      }), (0, r.jsxs)("span", {
                        children: [o.A.checkmark, " ", T("common.pricing.imagehost_plan.features.fast_secure_uploads")]
                      }), (0, r.jsxs)("span", {
                        children: [o.A.checkmark, " ", T("common.pricing.imagehost_plan.features.advanced_image_gallery")]
                      }), (0, r.jsxs)("span", {
                        children: [o.A.checkmark, " ", T("common.pricing.imagehost_plan.features.paste_bin")]
                      })]
                    })]
                  }), (0, r.jsxs)("div", {
                    className: t().productButtons,
                    children: [$ ? (0, r.jsx)("span", {
                      className: t().purchaseButton,
                      onClick: () => M("imagehost"),
                      children: T("common.pricing.imagehost_plan.button")
                    }) : (0, r.jsx)(_.A, {
                      className: t().purchaseButton,
                      href: "/login?returnUri=/pricing",
                      children: T("common.pricing.imagehost_plan.button")
                    }), (0, r.jsx)(d.A, {
                      defaultSelection: "imagehost",
                      redirectLogin: !$,
                      purchaseSource: f.j.pricing
                    })]
                  })]
                }), (0, r.jsxs)("div", {
                  className: t().pricingProduct,
                  children: [(0, r.jsxs)("div", {
                    children: [(0, r.jsxs)("h1", {
                      children: [o.A.verified, " ", T("common.pricing.verified.name")]
                    }), (0, r.jsxs)("div", {
                      className: t().price,
                      children: [(0, r.jsxs)("h1", {
                        children: [(0, r.jsx)(n.A, {
                          product: "verified"
                        }), (0, r.jsxs)("span", {
                          children: ["/", T("common.pricing.lifetime_text")]
                        })]
                      }), (0, r.jsx)("span", {
                        className: t().lifetimeText,
                        children: T("common.pricing.lifetime_text_description")
                      })]
                    }), (0, r.jsx)("h3", {
                      children: T("common.pricing.verified.description")
                    }), (0, r.jsxs)("div", {
                      className: t().features,
                      children: [(0, r.jsxs)("span", {
                        children: [o.A.checkmark, " ", T("common.pricing.verified.features.exclusive_verified_badge")]
                      }), (0, r.jsxs)("span", {
                        children: [o.A.checkmark, " ", T("common.pricing.verified.features.special_role")]
                      }), (0, r.jsxs)("span", {
                        children: [o.A.checkmark, " ", T("common.pricing.verified.features.trust_credibility")]
                      })]
                    })]
                  }), (0, r.jsxs)("div", {
                    className: t().productButtons,
                    children: [$ ? (0, r.jsx)("span", {
                      className: t().purchaseButton,
                      onClick: () => M("verified"),
                      children: T("common.pricing.verified.button")
                    }) : (0, r.jsx)(_.A, {
                      className: t().purchaseButton,
                      href: "/login?returnUri=/pricing",
                      children: T("common.pricing.verified.button")
                    }), (0, r.jsx)(d.A, {
                      defaultSelection: "verified",
                      redirectLogin: !$,
                      purchaseSource: f.j.pricing
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
        A: () => u
      });
      var r = s(95155),
        c = s(98028),
        n = s(12115),
        a = s(91801),
        t = s.n(a),
        m = s(97478),
        l = s(3434),
        o = s(50686),
        p = s(86891),
        d = s(61836);

      function u({
        purchaseSource: e = "unknown"
      }) {
        let i = (0, p.kj)();
        (0, c.u)();
        let [s, a] = (0, n.useState)(1), [u, h] = (0, n.useState)(!1), x = async e => {
          h(!0)
        }, g = s > 1 ? (0, r.jsxs)(r.Fragment, {
          children: [(0, d.o3)(s).totalPrice, "€ ", (0, r.jsxs)("s", {
            children: [(0, d.o3)(s).rawPrice, "€"]
          })]
        }) : (0, r.jsxs)(r.Fragment, {
          children: [(0, d.o3)(s).totalPrice, "€"]
        });
        return (0, r.jsx)(r.Fragment, {
          children: u ? (0, r.jsx)(o.A, {
            type: "customBadge",
            customBadgeData: {
              amount: s,
              totalPrice: (0, d.o3)(s).totalPrice
            },
            purchaseSource: e
          }) : (0, r.jsxs)("div", {
            className: t().CustomBadgePurchaseModal,
            children: [(0, r.jsx)(m.A, {
              featureName: i("modals.custom_badge.title"),
              max: 500,
              value: s,
              min: 1,
              onChange: a,
              icon: l.A.shoppingBag
            }), (0, r.jsxs)("div", {
              className: t().CustomBadgePurchaseModalDiscount,
              children: [(0, r.jsx)("h1", {
                children: i("modals.custom_badge.information_text")
              }), (0, r.jsx)("h3", {
                children: i("modals.custom_badge.description", {
                  percentage: (0, d.o3)(s).discountPercent,
                  quantity: s
                })
              })]
            }), (0, r.jsx)("span", {
              className: t().CustomBadgePurchaseModalButton,
              onClick: x,
              children: i("modals.custom_badge.purchase_text", {
                price: g
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
    e.O(0, [8604, 5311, 379, 4236, 1850, 6609, 4293, 5810, 6891, 5886, 9182, 8481, 3434, 1378, 5041, 6788, 1382, 1531, 8441, 3794, 7358], () => e(e.s = 95331)), _N_E = e.O()
  }
]);