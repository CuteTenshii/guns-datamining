(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6788], {
    13699: (e, a, t) => {
      "use strict";
      t.d(a, {
        j: () => s,
        v: () => o
      });
      let n = "pricingPage",
        i = "upgradePremiumPopup",
        r = "dashboardUpgradeModal",
        d = "badgePage",
        o = {
          pricing: n,
          popup: i,
          modal: r,
          badges: d,
          aliasManager: "accountAliasManager"
        },
        s = {
          pricing: `${n}Gift`,
          popup: `${i}Gift`,
          modal: `${r}Gift`,
          badges: `${d}Gift`
        }
    },
    24579: e => {
      e.exports = {
        wrapper: "GUNS__ba-7f5364ea-c3a36c5d-b0f3d011",
        tooltip: "GUNS__ca-42ad2aff-c7e7db33-534468e1"
      }
    },
    24795: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var n = t(95155),
        i = t(61836),
        r = t(98028);

      function d({
        product: e
      }) {
        let a = (0, r.u)(),
          t = i.EJ[e],
          d = a ? i.q9[e] : t;
        return (0, n.jsxs)(n.Fragment, {
          children: [d < t && (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("s", {
              children: (0, i.$g)(t)
            }), " "]
          }), (0, i.$g)(d)]
        })
      }
    },
    41029: (e, a, t) => {
      "use strict";
      t.d(a, {
        B: () => n,
        p: () => i
      });
      let n = {
        badge: "black_week_2026",
        startsAt: Date.parse("2026-11-25T00:00:00+01:00"),
        endsAt: 1796252399e3,
        discountPercent: 15,
        giftDiscountPercent: 10
      };

      function i(e = Date.now()) {
        return e >= n.startsAt && e < n.endsAt
      }
    },
    41458: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => U
      });
      var n = t(95155),
        i = t(24795),
        r = t(54834),
        d = t(98241),
        o = t.n(d),
        s = t(37897),
        c = t(12115),
        l = t(58295),
        u = t(66609),
        m = t(50686),
        f = t(98028),
        b = t(91801),
        _ = t.n(b),
        p = t(97478),
        h = t(3434),
        g = t(86891),
        N = t(61836);

      function S({
        continueFunction: e,
        customBadgeData: a,
        setCustomBadgeData: t
      }) {
        let i = (0, g.kj)();
        (0, f.u)();
        let r = a.amount > 1 ? (0, n.jsxs)(n.Fragment, {
          children: [(0, N.o3)(a.amount, !0).totalPrice, "€ ", (0, n.jsxs)("s", {
            children: [(0, N.o3)(a.amount, !0).rawPrice, "€"]
          })]
        }) : (0, n.jsxs)(n.Fragment, {
          children: [(0, N.o3)(a.amount, !0).totalPrice, "€"]
        });
        return (0, n.jsxs)("div", {
          className: _().CustomBadgePurchaseModal,
          children: [(0, n.jsx)(p.A, {
            featureName: i("modals.custom_badge.title_gift"),
            value: a.amount,
            min: 1,
            max: 500,
            onChange: e => t({
              ...a,
              amount: e
            }),
            icon: h.A.shoppingBag
          }), (0, n.jsxs)("div", {
            className: _().CustomBadgePurchaseModalDiscount,
            children: [(0, n.jsx)("h1", {
              children: i("modals.custom_badge.information_text_gift")
            }), (0, n.jsx)("h3", {
              children: i("modals.custom_badge.description_gift", {
                percentage: (0, N.o3)(a.amount, !0).discountPercent,
                amount: a.amount
              })
            })]
          }), (0, n.jsx)("span", {
            className: _().CustomBadgePurchaseModalButton,
            onClick: n => {
              t({
                ...a,
                totalPrice: (0, N.o3)(a.amount, !0).totalPrice
              }), e(n)
            },
            children: i("modals.custom_badge.purchase_text", {
              price: r
            })
          })]
        })
      }
      var G = t(61778),
        x = t(13782);

      function U({
        defaultSelection: e,
        redirectLogin: a,
        showGiftContainer: t,
        purchaseSource: d = "unknown"
      }) {
        let f = (0, g.kj)(),
          b = (0, g.VJ)(),
          _ = {
            imagehost: f("modals.gift.gift_imagehost"),
            premiumLifetime: f("modals.gift.gift_premium"),
            verified: f("modals.gift.gift_verified_badge"),
            custombadge: f("modals.gift.gift_custom_badge")
          },
          [p, h] = (0, c.useState)(!1),
          [N, U] = (0, c.useState)(""),
          [v, y] = (0, c.useState)(""),
          [j, w] = (0, c.useState)({
            displayName: "",
            username: "",
            avatar: "",
            found: !1
          }),
          [C, k] = (0, c.useState)("user"),
          [B, M] = (0, c.useState)(e),
          [A, T] = (0, c.useState)(!1),
          [$, P] = (0, c.useState)(!1),
          [D, L] = (0, c.useState)({
            amount: 1,
            totalPrice: 0
          }),
          O = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 12q-1.65 0-2.825-1.175T7 8t1.175-2.825T11 4t2.825 1.175T15 8t-1.175 2.825T11 12m11.1 11.5l-3.2-3.2q-.525.3-1.125.5T16.5 21q-1.875 0-3.187-1.312T12 16.5t1.313-3.187T16.5 12t3.188 1.313T21 16.5q0 .675-.2 1.275t-.5 1.125l3.2 3.2zM16.5 19q1.05 0 1.775-.725T19 16.5t-.725-1.775T16.5 14t-1.775.725T14 16.5t.725 1.775T16.5 19m-5.475-6q-1.05 1.55-1.05 3.5t1.05 3.5H3v-2.775q0-.85.425-1.575t1.175-1.1q1.275-.65 2.875-1.1t3.55-.45"></path></svg>',
          W = () => {
            w({
              displayName: "",
              username: "",
              avatar: "",
              found: !1
            }), U("")
          },
          I = async (e, a = !1) => {
            if ("user" === C && !N) return void u.oR.error(f("modals.gift.error_gift_username"));
            if (!B) return void u.oR.error(f("modals.gift.error_gift_product"));
            if ("user" === C) {
              let a = await F(e, !1);
              if (!j.found && !a) return
            }
            a ? P(!0) : T(!0)
          }, F = async (e, a = !0) => {
            try {
              e.target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeDasharray="15" strokeDashoffset="15" strokeLinecap="round" strokeWidth="2" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"></animate><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></svg>';
              let t = await fetch("https://guns.lol/api/gift/user", {
                  method: "POST",
                  body: JSON.stringify({
                    username: N
                  })
                }),
                n = await t.json();
              if (!t.ok) return e.target.innerHTML = a ? O : f("modals.gift.continue_button"), u.oR.error(n.error), null;
              {
                let t = {
                  displayName: n.display_name,
                  username: N,
                  avatar: n.avatar,
                  found: !0
                };
                return w(t), e.target.innerHTML = a ? O : f("modals.gift.continue_button"), t
              }
            } finally {
              e.target.innerHTML = a ? O : f("modals.gift.continue_button")
            }
          }, E = A || $ ? $ && !A ? (0, n.jsx)(S, {
            continueFunction: I,
            customBadgeData: D,
            setCustomBadgeData: L
          }) : (0, n.jsx)(m.A, {
            type: B,
            gift: !0,
            giftMessage: v,
            username: N,
            giftMode: C,
            customBadgeData: "custombadge" === B ? D : void 0,
            purchaseSource: d
          }) : (0, n.jsxs)("div", {
            children: [(0, n.jsxs)("h1", {
              className: o().giftBanner,
              children: [r.A.gift, (0, n.jsxs)("div", {
                className: o().giftBannerContent,
                children: [" ", f("modals.gift.gift_badge_text", {
                  exclusive: (0, n.jsx)("span", {
                    children: "exclusive"
                  })
                })]
              })]
            }), (0, n.jsxs)("div", {
              className: o().giftModal,
              children: [(0, n.jsx)("img", {
                className: o().giftImage,
                src: "https://assets.guns.lol/present_asset.png"
              }), (0, n.jsxs)("div", {
                className: o().giftInformation,
                children: [(0, n.jsxs)("div", {
                  className: o().giftDeliveryTabs,
                  role: "tablist",
                  children: [(0, n.jsx)("button", {
                    type: "button",
                    role: "tab",
                    className: "user" === C ? o().giftDeliveryTabActive : "",
                    onClick: () => k("user"),
                    children: f("modals.gift.tabs.user")
                  }), (0, n.jsx)("button", {
                    type: "button",
                    role: "tab",
                    className: "link" === C ? o().giftDeliveryTabActive : "",
                    onClick: () => {
                      k("link"), W()
                    },
                    children: f("modals.gift.tabs.link")
                  })]
                }), "user" === C ? (0, n.jsx)("div", {
                  className: o().usernameSearch,
                  children: j.found ? (0, n.jsxs)("div", {
                    className: o().user,
                    children: [(0, n.jsx)("img", {
                      src: j.avatar,
                      alt: ""
                    }), (0, n.jsxs)("div", {
                      className: o().userDescription,
                      children: [(0, n.jsx)("h1", {
                        children: "" !== j.displayName ? j.displayName : j.username
                      }), (0, n.jsxs)("a", {
                        href: `/${j.username}`,
                        target: "_blank",
                        children: ["guns.lol/", j.username]
                      })]
                    }), (0, n.jsxs)("span", {
                      className: o().removeUser,
                      onClick: W,
                      children: [r.A.removeUser, " ", f("modals.gift.change_user")]
                    })]
                  }) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(s.A, {
                      featureName: f("modals.gift.gift_inputs.send_to"),
                      onChangeFunction: e => {
                        U(e.target.value)
                      },
                      value: N,
                      placeholder: "Username",
                      icon: r.A.user
                    }), (0, n.jsx)("span", {
                      className: o().searchButton,
                      onClick: F,
                      children: r.A.usernameSearch
                    })]
                  })
                }) : (0, n.jsxs)("div", {
                  className: o().giftLinkNotice,
                  children: [(0, n.jsx)("span", {
                    children: r.A.link
                  }), (0, n.jsxs)("div", {
                    children: [(0, n.jsx)("h1", {
                      children: f("modals.gift.link.title")
                    }), (0, n.jsx)("p", {
                      children: f("modals.gift.link.description")
                    })]
                  })]
                }), (0, n.jsx)(l.A, {
                  featureName: f("modals.gift.gift_inputs.gift_message"),
                  placeholder: f("modals.gift.gift_inputs.gift_message_placeholder"),
                  onChangeFunction: e => {
                    y(e.target.value)
                  },
                  value: v
                }), (0, n.jsxs)("div", {
                  className: o().yourGift,
                  children: [(0, n.jsx)("h1", {
                    className: o().yourGiftText,
                    children: f("modals.gift.your_gift")
                  }), (0, n.jsxs)("div", {
                    className: o().giftTypes,
                    children: [(0, n.jsxs)("div", {
                      className: `${o().giftContainer} ${"verified"===B&&o().selectedGift}`,
                      onClick: () => M("verified"),
                      children: [(0, n.jsxs)("div", {
                        className: o().giftDescription,
                        children: [(0, n.jsxs)("h1", {
                          children: ["guns.lol ", f("common.pricing.verified.name")]
                        }), (0, n.jsx)("h3", {
                          children: f("modals.gift.gift_verified_badge")
                        })]
                      }), (0, n.jsx)("span", {
                        className: o().priceText,
                        children: (0, n.jsx)("strong", {
                          children: (0, n.jsx)(i.A, {
                            product: "verifiedGift"
                          })
                        })
                      })]
                    }), (0, n.jsxs)("div", {
                      className: `${o().giftContainer} ${"custombadge"===B&&o().selectedGift}`,
                      onClick: () => M("custombadge"),
                      children: [(0, n.jsxs)("div", {
                        className: o().giftDescription,
                        children: [(0, n.jsxs)("h1", {
                          children: ["guns.lol ", f("common.pricing.custom_badge.name")]
                        }), (0, n.jsx)("h3", {
                          children: f("modals.gift.gift_custom_badge")
                        })]
                      }), (0, n.jsx)("span", {
                        className: o().priceText,
                        children: (0, n.jsx)("strong", {
                          children: (0, n.jsx)(i.A, {
                            product: "customBadgeGift"
                          })
                        })
                      })]
                    }), (0, n.jsxs)("div", {
                      className: `${o().giftContainer} ${"premiumLifetime"===B&&o().selectedGift}`,
                      onClick: () => M("premiumLifetime"),
                      children: [(0, n.jsxs)("div", {
                        className: o().giftDescription,
                        children: [(0, n.jsxs)("h1", {
                          children: ["guns.lol ", f("common.pricing.premium_plan.name"), " ", (0, n.jsx)("span", {
                            className: o().saveText,
                            children: f("modals.gift.save_premium")
                          })]
                        }), (0, n.jsx)("h3", {
                          children: f("modals.gift.gift_premium")
                        })]
                      }), (0, n.jsx)("span", {
                        className: o().priceText,
                        children: (0, n.jsx)("strong", {
                          children: (0, n.jsx)(i.A, {
                            product: "premiumGift"
                          })
                        })
                      })]
                    }), (0, n.jsxs)("div", {
                      className: `${o().giftContainer} ${"imagehost"===B&&o().selectedGift}`,
                      onClick: () => M("imagehost"),
                      children: [(0, n.jsxs)("div", {
                        className: o().giftDescription,
                        children: [(0, n.jsxs)("h1", {
                          children: ["guns.lol ", f("common.pricing.imagehost_plan.name")]
                        }), (0, n.jsx)("h3", {
                          children: f("modals.gift.gift_imagehost")
                        })]
                      }), (0, n.jsx)("span", {
                        className: o().priceText,
                        children: (0, n.jsx)("strong", {
                          children: (0, n.jsx)(i.A, {
                            product: "imagehostGift"
                          })
                        })
                      })]
                    })]
                  })]
                }), (0, n.jsx)("div", {
                  className: o().buttonWrapper,
                  children: (0, n.jsx)("span", {
                    className: o().continueButton,
                    onClick: e => I(e, "custombadge" === B),
                    children: f("modals.gift.continue_button")
                  })
                })]
              })]
            })]
          });
        return (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(x.A, {
            opened: p,
            onClose: () => {
              h(!1), setTimeout(() => {
                T(!1), P(!1), L({
                  amount: 1,
                  totalPrice: 0
                }), k("user")
              }, 500)
            },
            title: _[B],
            centered: !0,
            size: "auto",
            children: E
          }), t ? E : (0, n.jsx)(G.A, {
            content: _[e],
            offset: 15,
            children: (0, n.jsx)("span", {
              className: o().giftButton,
              onClick: () => {
                a ? location.href = b("/login?returnUri=/pricing") : (h(!0), M(e))
              },
              children: r.A.gift
            })
          })]
        })
      }
    },
    50686: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => S
      });
      var n = t(95155),
        i = t(41029),
        r = t(98028),
        d = t(15041),
        o = t(91801),
        s = t.n(o),
        c = t(61836),
        l = t(3434);
      async function u(e, a, t, n, i, r = "unknown", d = "en", o = [], s) {
        let c = await fetch("https://guns.lol/api/billing/createCheckout", {
            method: "POST",
            body: JSON.stringify({
              type: e,
              donation_amount: a,
              credits: t,
              badge_data: n,
              alias_credits: i,
              storage: s,
              bundle_items: o,
              metadata: {
                purchase_source: r,
                current_url: window.location.pathname,
                referrer: document.referrer,
                locale: d
              }
            })
          }),
          l = await c.json();
        return c.ok ? (window.location.href = l.session, l.session) : {
          error: !0,
          message: l.error
        }
      }
      var m = t(66609),
        f = t(12115);
      async function b(e, a, t, n, i = "unknown", r = "en", d = "user") {
        let o = await fetch("https://guns.lol/api/billing/giftCheckout", {
            method: "POST",
            body: JSON.stringify({
              type: e,
              username: a,
              gift_mode: d,
              gift_message: t,
              badge_data: n,
              metadata: {
                purchase_source: i,
                current_url: window.location.pathname,
                referrer: document.referrer,
                locale: r
              }
            })
          }),
          s = await o.json();
        return o.ok ? (window.location.href = s.session, s.session) : {
          error: !0,
          message: s.error
        }
      }
      async function _(e, a, t, n, i = "unknown", r = "user") {
        let d = await fetch("https://guns.lol/api/billing/giftCryptoCheckout", {
            method: "POST",
            body: JSON.stringify({
              type: e,
              username: a,
              gift_mode: r,
              gift_message: t,
              badge_data: n,
              metadata: {
                purchase_source: i,
                current_url: window.location.pathname,
                referrer: document.referrer
              }
            })
          }),
          o = await d.json();
        return d.ok ? (window.location.href = o.session, o.session) : {
          error: !0,
          message: o.error
        }
      }
      async function p(e, a, t, n, i, r = "unknown", d = [], o) {
        let s = await fetch("https://guns.lol/api/billing/createCryptoCheckout", {
            method: "POST",
            body: JSON.stringify({
              type: e,
              donation_amount: a,
              credits: t,
              badge_data: n,
              alias_credits: i,
              storage: o,
              bundle_items: d,
              metadata: {
                purchase_source: r,
                current_url: window.location.pathname,
                referrer: document.referrer
              }
            })
          }),
          c = await s.json();
        return s.ok ? (window.location.href = c.session, c.session) : {
          error: !0,
          message: c.error
        }
      }
      var h = t(86891);
      let g = {
          premiumlifetime: ["verified", "imagehost", "custombadge", "aliascredits"],
          verified: ["premiumlifetime", "custombadge", "imagehost", "aliascredits"],
          imagehost: ["premiumlifetime", "verified", "custombadge", "aliascredits"],
          custombadge: ["premiumlifetime", "verified", "imagehost", "aliascredits"],
          aliascredits: ["premiumlifetime", "verified", "imagehost", "custombadge"]
        },
        N = ["premiumlifetime", "verified", "imagehost", "custombadge", "aliascredits"];

      function S({
        type: e,
        donationAmount: a,
        gift: t,
        giftMessage: o,
        username: S,
        giftMode: G = "user",
        creditsData: x,
        customBadgeData: U,
        aliasCreditsData: v,
        storageData: y,
        purchaseSource: j = "unknown"
      }) {
        let w = (0, h.kj)(),
          C = (0, r.u)(),
          k = (0, h.useLang)(),
          [B, M] = (0, f.useState)(""),
          [A, T] = (0, f.useState)(!1),
          [$, P] = (0, f.useState)(!1),
          [D, L] = (0, f.useState)(t || "storage" === e.toLowerCase() ? "payment" : "loading"),
          [O, W] = (0, f.useState)([]),
          [I, F] = (0, f.useState)([]),
          [E, R] = (0, f.useState)(!1),
          q = e.toLowerCase(),
          H = (0, f.useMemo)(() => O.map(e => ({
            ...e,
            price: c.it[e.id]
          })), [O, C]),
          J = {
            premiumlifetime: {
              name: `${w("common.pricing.premium_plan.name")} ${w("common.pricing.lifetime_text")}`,
              price: t ? c.q9.premiumGift : c.q9.premium
            },
            imagehost: {
              name: w("common.pricing.imagehost_plan.name"),
              price: t ? c.q9.imagehostGift : c.q9.imagehost
            },
            donation: {
              name: w("common.pricing.donation.name"),
              price: a ?? 0
            },
            verified: {
              name: w("common.pricing.verified.name"),
              price: t ? c.q9.verifiedGift : c.q9.verified
            },
            credits: {
              name: `${x?.amount}x ${w("common.pricing.custom_badge_credits.name")}`,
              price: x ? (0, c.gP)(x.amount).totalPrice : 0
            },
            custombadge: {
              name: `${U?.amount}x ${w("common.pricing.custom_badge.name")}`,
              price: U ? (0, c.o3)(U.amount, !!t).totalPrice : 0
            },
            aliascredits: {
              name: `${v?.amount}x ${w("modals.payment_methods.product_names.alias_credits")}`,
              price: v ? Math.round(v.amount * c.q9.aliasCredit * 100) / 100 : 0
            },
            storage: {
              name: `${y?.gb??0} GB ${w("modals.payment_methods.product_names.image_host_storage")}`,
              price: y ? (0, c.wH)(y.gb) ?? 0 : 0
            }
          } [q] ?? {
            name: e,
            price: 0
          },
          z = {
            premiumlifetime: {
              name: `${w("common.pricing.premium_plan.name")} ${w("common.pricing.lifetime_text")}`,
              description: w("modals.payment_methods.bundle.premium_description"),
              icon: l.A.premium
            },
            imagehost: {
              name: w("common.pricing.imagehost_plan.name"),
              description: w("modals.payment_methods.bundle.imagehost_description"),
              icon: l.A.imghost
            },
            verified: {
              name: w("common.pricing.verified.name"),
              description: w("modals.payment_methods.bundle.verified_description"),
              icon: l.A.badgeName
            },
            custombadge: {
              name: `1x ${w("common.pricing.custom_badge.name")}`,
              description: w("modals.payment_methods.bundle.custom_badge_description"),
              icon: l.A.badgeName
            },
            aliascredits: {
              name: `1x ${w("modals.payment_methods.product_names.alias_credit")}`,
              description: w("modals.payment_methods.bundle.alias_credit_description"),
              icon: l.A.links
            }
          };
        (0, f.useEffect)(() => {
          if (t || "storage" === q) {
            L("payment"), W([]), F([]), R(!1);
            return
          }
          let e = new AbortController;
          return L("loading"), W([]), F([]), R(!1), (async () => {
            try {
              let a = await fetch("https://guns.lol/api/billing/bundleOptions", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  type: q
                }),
                signal: e.signal
              });
              if (!a.ok) return void L("payment");
              let t = await a.json(),
                n = Array.isArray(t.products) ? t.products : [];
              W(n), L(n.length > 0 ? "offers" : "payment")
            } catch (e) {
              "AbortError" !== e.name && L("payment")
            }
          })(), () => e.abort()
        }, [t, q]);
        let K = (0, f.useMemo)(() => H.filter(e => I.includes(e.id)), [H, I]),
          V = (0, f.useMemo)(() => (g[q] ?? N).map(e => H.find(a => a.id === e)).find(e => !!e) ?? H[0], [H, q]),
          Y = (0, f.useMemo)(() => H.filter(e => e.id !== V?.id), [H, V]),
          Q = Math.round(100 * J.price),
          X = K.reduce((e, a) => e + Math.round(100 * a.price), 0),
          Z = Q + X,
          ee = I.length > 0 ? Q + Math.round(X * (1 - c.dd / 100)) : Z,
          ea = ee / 100,
          et = e => {
            let a = z[e.id],
              t = I.includes(e.id),
              i = Math.round(100 * e.price * (1 - c.dd / 100)) / 100;
            return (0, n.jsxs)("button", {
              type: "button",
              className: `${s().bundleOption} ${t?s().bundleOptionSelected:""}`,
              onClick: () => {
                var a;
                return a = e.id, void F(e => e.includes(a) ? e.filter(e => e !== a) : [...e, a])
              },
              children: [(0, n.jsx)("span", {
                className: s().bundleOptionIcon,
                children: a.icon
              }), (0, n.jsxs)("span", {
                className: s().bundleOptionCopy,
                children: [(0, n.jsx)("strong", {
                  children: a.name
                }), (0, n.jsx)("small", {
                  children: a.description
                })]
              }), (0, n.jsxs)("span", {
                className: s().bundleOptionPrice,
                children: [(0, n.jsx)("s", {
                  children: (0, c.$g)(e.price)
                }), (0, n.jsx)("strong", {
                  children: (0, c.$g)(i)
                })]
              }), (0, n.jsx)("span", {
                className: s().bundleOptionCheck,
                children: t ? l.A.checkmark : l.A.add
              })]
            }, e.id)
          },
          en = async () => {
            if (T(!1), !B) return void T(!0);
            if (t && "user" === G && !S) return void m.oR.error(w("modals.payment_methods.unknown_error"));
            P(!0);
            try {
              let n = !!(t && ("link" === G || S)),
                i = null;
              "card" === B ? i = n ? await b(e, S, o ?? "", U, j, k, G) : await u(e, a, x, U, v, j, k, I, y) : "crypto" === B && (i = n ? await _(e, S, o ?? "", U, j, G) : await p(e, a, x, U, v, j, I, y)), i && "object" == typeof i && i.error && (m.oR.error(i.message ?? w("modals.payment_methods.unknown_error")), P(!1))
            } catch {
              m.oR.error(w("modals.payment_methods.unknown_error")), P(!1)
            }
          }, ei = e => {
            T(!1), M(a => a === e ? "" : e)
          };
        return "loading" === D ? (0, n.jsxs)("div", {
          className: s().bundleLoading,
          children: [(0, n.jsx)("span", {
            className: s().paymentLoadingSpinner
          }), (0, n.jsx)("h2", {
            children: w("modals.payment_methods.bundle.loading")
          })]
        }) : "offers" === D ? (0, n.jsxs)("div", {
          className: s().bundleFlow,
          children: [(0, n.jsxs)("div", {
            className: s().bundleHeading,
            children: [(0, n.jsx)("h2", {
              children: w("modals.payment_methods.bundle.title")
            }), (0, n.jsx)("p", {
              children: w("modals.payment_methods.bundle.description", {
                percentage: (0, n.jsxs)("span", {
                  className: s().bundleDiscountText,
                  children: [c.dd, "%"]
                })
              })
            })]
          }), (0, n.jsxs)("div", {
            className: s().bundleRecommended,
            children: [(0, n.jsx)("div", {
              className: s().bundleRecommendedHeader,
              children: (0, n.jsx)("span", {
                children: w("modals.payment_methods.bundle.recommended")
              })
            }), V && et(V)]
          }), Y.length > 0 && !E && (0, n.jsxs)("button", {
            type: "button",
            className: s().bundleMoreButton,
            onClick: () => R(!0),
            children: [(0, n.jsx)("span", {
              children: "+"
            }), " ", w("modals.payment_methods.bundle.add_more_products")]
          }), E && Y.length > 0 && (0, n.jsx)("div", {
            className: s().bundleOptions,
            children: Y.map(et)
          }), (0, n.jsx)("button", {
            type: "button",
            className: `${s().paymentMethodButton} ${I.length>0?s().bundleContinueButton:s().bundleSkipButton}`,
            onClick: () => L("payment"),
            style: {
              marginTop: 0 === Y.length ? "20px" : "10px"
            },
            children: I.length > 0 ? (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("span", {
                children: w("modals.payment_methods.bundle.continue_with_bundle")
              }), (0, n.jsxs)("span", {
                className: s().bundleButtonPrice,
                children: [(0, n.jsxs)("small", {
                  children: ["-", c.dd, "%"]
                }), (0, n.jsx)("strong", {
                  children: (0, c.$g)(ea)
                })]
              })]
            }) : w("modals.payment_methods.bundle.continue_without")
          })]
        }) : (0, n.jsxs)("div", {
          className: s().paymentMethods,
          children: [C && ("donation" !== q || (a ?? 0) >= c.q9.donorBadgeMinimum) && (0, n.jsxs)("div", {
            className: s().blackWeekSale,
            children: [(0, n.jsxs)("div", {
              className: s().blackWeekSaleTitle,
              children: [d.A.blackWeek2026, " ", w("common.other.black_week_payment_modal_title")]
            }), (0, n.jsx)("div", {
              className: s().blackWeekSaleDescription,
              children: w("storage" === q || "donation" === q ? "common.other.black_week_badge_only_description" : "common.other.black_week_payment_modal_description", {
                percentage: (0, n.jsxs)("b", {
                  children: [t ? i.B.giftDiscountPercent : i.B.discountPercent, "%"]
                })
              })
            })]
          }), (0, n.jsxs)("div", {
            className: s().product,
            children: [l.A.cart, (0, n.jsxs)("div", {
              className: s().productInformation,
              children: [(0, n.jsxs)("h1", {
                children: [I.length > 0 ? w("modals.payment_methods.bundle.order_summary") : J.name, " ", t && w("modals.payment_methods.gift")]
              }), (0, n.jsx)("h3", {
                children: w("modals.payment_methods.one_time_payment_text", {
                  price: (0, c.$g)(ea)
                })
              })]
            })]
          }), I.length > 0 && (0, n.jsxs)("div", {
            className: s().bundleOrderSummary,
            children: [(0, n.jsxs)("div", {
              children: [(0, n.jsx)("span", {
                children: J.name
              }), (0, n.jsx)("strong", {
                children: (0, c.$g)(J.price)
              })]
            }), K.map(e => (0, n.jsxs)("div", {
              children: [(0, n.jsx)("span", {
                children: z[e.id].name
              }), (0, n.jsx)("strong", {
                children: (0, c.$g)(e.price)
              })]
            }, e.id)), (0, n.jsxs)("div", {
              className: s().bundleDiscountRow,
              children: [(0, n.jsx)("span", {
                children: w("modals.payment_methods.bundle.discount", {
                  percentage: c.dd
                })
              }), (0, n.jsxs)("strong", {
                children: ["-", (0, c.$g)((Z - ee) / 100)]
              })]
            }), (0, n.jsxs)("div", {
              className: s().bundleOrderTotal,
              children: [(0, n.jsx)("span", {
                children: w("modals.payment_methods.bundle.total")
              }), (0, n.jsx)("strong", {
                children: (0, c.$g)(ea)
              })]
            })]
          }), (0, n.jsxs)("div", {
            className: `${s().creditCard} ${"card"===B?s().selectedMethod:""}`,
            onClick: () => ei("card"),
            children: [(0, n.jsx)("h1", {
              children: w("modals.payment_methods.payment_method_card")
            }), " ", l.A.card, " ", l.A.paypal, " ", l.A.cashapp, " ", l.A.applepay, " ", l.A.googlepay, " ", (0, n.jsx)("span", {
              children: w("modals.payment_methods.more_payment_methods")
            })]
          }), (0, n.jsxs)("div", {
            className: `${s().crypto} ${"crypto"===B?s().selectedMethod:""}`,
            onClick: () => ei("crypto"),
            children: [(0, n.jsx)("h1", {
              children: w("modals.payment_methods.payment_method_crypto")
            }), " ", l.A.bitcoin, l.A.litecoin, " ", l.A.usdt, " ", l.A.monero, " ", l.A.eth, " ", (0, n.jsx)("span", {
              children: w("modals.payment_methods.more_payment_methods")
            })]
          }), A && (0, n.jsx)("span", {
            className: s().error,
            children: w("modals.payment_methods.error_select_payment_method")
          }), (0, n.jsxs)("div", {
            className: s().paymentActions,
            children: [!t && H.length > 0 && (0, n.jsx)("button", {
              type: "button",
              className: s().bundleBackButton,
              onClick: () => L("offers"),
              disabled: $,
              children: w("modals.payment_methods.bundle.back")
            }), (0, n.jsx)("button", {
              type: "button",
              className: s().paymentMethodButton,
              onClick: en,
              disabled: $,
              children: $ ? (0, n.jsx)("span", {
                className: s().paymentLoadingSpinner
              }) : w("modals.payment_methods.bundle.pay", {
                price: (0, c.$g)(ea)
              })
            })]
          })]
        })
      }
    },
    58295: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var n = t(95155),
        i = t(98241),
        r = t.n(i);

      function d({
        featureName: e,
        onChangeFunction: a,
        value: t,
        placeholder: i,
        textareaRef: d,
        ...o
      }) {
        let {
          onInput: s,
          onChange: c,
          ...l
        } = o;
        return (0, n.jsxs)("div", {
          className: r().inputContainerWrapper,
          "data-dashboard-feature-label": "string" == typeof e ? e : void 0,
          children: [e && (0, n.jsx)("h1", {
            className: r().featureName,
            children: e
          }), (0, n.jsx)("div", {
            className: r().inputWrapperDiv,
            children: (0, n.jsx)("textarea", {
              ref: d,
              style: {
                paddingLeft: "12px",
                transition: "border 0.25s",
                resize: "vertical"
              },
              spellCheck: !1,
              value: t,
              placeholder: i,
              className: r().inputWrapperInput,
              onInput: e => {
                s?.(e), c?.(e), a?.(e)
              },
              ...l
            })
          })]
        })
      }
    },
    61778: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var n = t(95155),
        i = t(47650),
        r = t(12115),
        d = t(24579),
        o = t.n(d);
      let s = "undefined" != typeof navigator && /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      function c({
        content: e,
        children: a,
        placement: t = "top",
        delay: d = 110,
        offset: c = 10,
        maxWidth: l = 260,
        className: u,
        tooltipClassName: m,
        hideTooltip: f = !1,
        pageTooltipStyles: b = !1
      }) {
        let [_, p] = (0, r.useState)(!1), [h, g] = (0, r.useState)(!1), [N, S] = (0, r.useState)({
          top: 0,
          left: 0
        }), [G, x] = (0, r.useState)(!1), U = (0, r.useRef)(null), v = (0, r.useRef)(null), y = (0, r.useRef)(null), j = b ? 25 + 30 * !!s : d;
        (0, r.useEffect)(() => {
          x(!0)
        }, []);
        let w = (0, r.useCallback)(() => {
            U.current && (clearTimeout(U.current), U.current = null)
          }, []),
          C = (0, r.useCallback)(() => "undefined" != typeof document && "active" === document.documentElement.getAttribute("data-user-page-enter-transition"), []),
          k = (0, r.useCallback)(e => {
            if (f || C()) return;
            let a = e?.immediate ?? !1;
            (w(), a || j <= 0) ? p(!0): U.current = setTimeout(() => p(!0), j)
          }, [w, j, f, C]),
          B = (0, r.useCallback)(e => {
            w(), e?.immediate, p(!1)
          }, [w]);
        (0, r.useEffect)(() => () => {
          w()
        }, [w]), (0, r.useEffect)(() => {
          f && B({
            immediate: !0
          })
        }, [f, B]);
        let M = (e, a, t) => Math.min(Math.max(e, a), t),
          A = (0, r.useCallback)(() => {
            let e = v.current,
              a = y.current;
            if (!e || !a) return;
            let n = e.getBoundingClientRect(),
              i = a.getBoundingClientRect(),
              r = 0,
              d = 0;
            switch (t) {
              case "bottom":
                r = n.bottom + c, d = n.left + n.width / 2 - i.width / 2;
                break;
              case "left":
                r = n.top + n.height / 2 - i.height / 2, d = n.left - i.width - c;
                break;
              case "right":
                r = n.top + n.height / 2 - i.height / 2, d = n.right + c;
                break;
              default:
                r = n.top - i.height - c, d = n.left + n.width / 2 - i.width / 2
            }
            let o = window.innerWidth - i.width - 8,
              s = window.innerHeight - i.height - 8,
              l = i.width >= window.innerWidth ? 8 : M(d, 8, Math.max(8, o));
            S({
              top: i.height >= window.innerHeight ? 8 : M(r, 8, Math.max(8, s)),
              left: l
            })
          }, [c, t]);
        (0, r.useLayoutEffect)(() => {
          if (!_) return;
          A();
          let e = () => A();
          return window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
            window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0)
          }
        }, [A, _]);
        let T = (0, r.useCallback)(e => {
          C() || (e.stopPropagation(), g(!0), _ ? B({
            immediate: !0
          }) : k({
            immediate: !0
          }))
        }, [B, C, k, _]);
        (0, r.useEffect)(() => {
          if (!_ || !h) return;
          let e = e => {
            v.current && (v.current.contains(e.target) || B({
              immediate: !0
            }))
          };
          return document.addEventListener("touchstart", e, {
            passive: !0
          }), () => {
            document.removeEventListener("touchstart", e)
          }
        }, [f, B, h, _]);
        let $ = {
            "--tooltip-max-width": "number" == typeof l ? `${l}px` : l,
            top: `${N.top}px`,
            left: `${N.left}px`
          },
          P = (0, n.jsx)("span", {
            ref: y,
            className: `${o().tooltip} ${m??""}`,
            style: {
              ...$,
              borderColor: b ? "#1a1a1a33" : "var(--tooltip-border-color)",
              backgroundColor: b ? "#14141463" : "var(--tooltip-background-color)"
            },
            "data-visible": _,
            "data-placement": t,
            children: e
          });
        return (0, n.jsxs)("span", {
          ref: v,
          className: `${o().wrapper} ${u??""}`,
          onMouseEnter: () => k(),
          onMouseLeave: () => B(),
          onFocusCapture: () => k(),
          onBlurCapture: () => B({
            immediate: !0
          }),
          onTouchStart: T,
          children: [a, G ? (0, i.createPortal)(P, document.body) : P]
        })
      }
    },
    61836: (e, a, t) => {
      "use strict";
      t.d(a, {
        $g: () => m,
        EJ: () => i,
        KH: () => o,
        YL: () => s,
        Yi: () => d,
        dd: () => l,
        gP: () => f,
        it: () => u,
        o3: () => b,
        q9: () => r,
        wH: () => c
      });
      var n = t(41029);
      let i = {
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
        r = {
          free: i.free,
          get premium() {
            return (0, n.p)() ? 6.79 : i.premium
          },
          get premiumGift() {
            return (0, n.p)() ? 6.49 : i.premiumGift
          },
          get imagehost() {
            return (0, n.p)() ? 4.25 : i.imagehost
          },
          get imagehostGift() {
            return (0, n.p)() ? 4.49 : i.imagehostGift
          },
          get verified() {
            return (0, n.p)() ? 12.75 : i.verified
          },
          get verifiedGift() {
            return (0, n.p)() ? 13.49 : i.verifiedGift
          },
          get customBadge() {
            return (0, n.p)() ? 7.65 : i.customBadge
          },
          get customBadgeGift() {
            return (0, n.p)() ? 8.09 : i.customBadgeGift
          },
          get badgeCredit() {
            return (0, n.p)() ? 2.55 : i.badgeCredit
          },
          get aliasCredit() {
            return (0, n.p)() ? 4.25 : i.aliasCredit
          },
          donationMinimum: i.donationMinimum,
          donorBadgeMinimum: i.donorBadgeMinimum
        },
        d = [{
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
        o = 5,
        s = 200;

      function c(e) {
        return !Number.isInteger(e) || e < o || e > s ? null : (100 * Math.ceil((e <= 10 ? 100 * e - 1 : e <= 25 ? 999 + Math.round(1e3 / 15 * (e - 10)) : e <= 50 ? 1999 + (e - 25) * 60 : 3499 + (e - 50) * 50) / 100) - 1) / 100
      }
      let l = 15,
        u = {
          get premiumlifetime() {
            return r.premium
          },
          get imagehost() {
            return r.imagehost
          },
          get verified() {
            return r.verified
          },
          get custombadge() {
            return r.customBadge
          },
          get aliascredits() {
            return r.aliasCredit
          }
        };

      function m(e) {
        return `${e.toFixed(2).replace(/\.00$/,"").replace(".",",")}€`
      }

      function f(e) {
        let a = r.badgeCredit * e ** .85,
          t = i.badgeCredit * e;
        return {
          totalPrice: Number(a.toFixed(2)),
          discountPercent: Number(((1 - a / t) * 100).toFixed(0))
        }
      }

      function b(e, a = !1) {
        let t = (a && (0, n.p)() ? .9 * i.customBadgeGift : r.customBadge) * e ** .95,
          d = i.customBadge * e;
        return {
          totalPrice: Number(t.toFixed(2)),
          rawPrice: Number(d.toFixed(2)),
          discountPercent: Number(((1 - t / d) * 100).toFixed(0))
        }
      }
    },
    79999: e => {
      e.exports = {
        container: "GUNS__4c-c51318d0-46d0ed4d-9b2e3887",
        label: "GUNS__55-bb991050-88b45b6a-9431fba7",
        inputShell: "GUNS__36-10c45de7-ccb332fc-2340524f",
        iconSlot: "GUNS__88-5efabde1-ad003188-1d2567eb",
        input: "GUNS__b9-3cd43098-f80d02a0-c2d9d1e4",
        inputWithIcon: "GUNS__c6-69527599-81ad2694-5dd3c53a",
        inputWithControls: "GUNS__40-1e810eb3-7a3be558-c15bccc4",
        controls: "GUNS__f4-e4e6f8a5-af409fd0-7c13817e",
        controlButton: "GUNS__09-9aa66952-f6ca361f-e5fbc0b1",
        errorText: "GUNS__3a-e07473ff-77af25ce-33318629"
      }
    },
    91801: e => {
      e.exports = {
        dashboardLayout: "GUNS__51-5e97977c-dcd05c1a-471e16b5",
        layoutWrapper: "GUNS__98-08cec51a-c427a0a5-e9a0a0c6",
        menu: "GUNS__26-3f2b7ced-a7e0034a-ba54a9cc",
        mainContent: "GUNS__5a-fa5081bf-12101bd5-380b9c8d",
        userCard: "GUNS__60-6feaf654-449e2654-570ba092",
        userInformation: "GUNS__f1-e655d68d-41f36435-17961ec5",
        menuNavigation: "GUNS__c2-2417d056-8ae0ce7f-fc89c885",
        navigation: "GUNS__ee-af1bfb69-f0992952-5d323035",
        dashboardDropdownNavigation: "GUNS__06-b4aabc8a-f53b61e4-2e1e3900",
        imagehostButton: "GUNS__6b-ffec2afd-76e0345f-5ca070c3",
        premiumButton: "GUNS__86-3cc40fa6-ccf7f0fb-a0c96c68",
        current: "GUNS__ae-dcee0c16-f8d27bcf-5ab1d4a6",
        menuCard: "GUNS__02-46a4ead2-87d758dc-6e0763db",
        otherIcon: "GUNS__a5-0c0f5a8f-a07301c1-3d4fd90c",
        menuCardInformation: "GUNS__84-904e9acb-fbb8e811-631d7071",
        menuCardDescription: "GUNS__12-4ccc35f5-8909e34f-36f714da",
        quickLinks: "GUNS__a3-75f06192-466259ad-4ec93eb5",
        discordLink: "GUNS__a4-9144dc3f-466af527-5799008f",
        myPage: "GUNS__bb-9b39d3a3-0034d37a-0f7a2103",
        bottomWrapper: "GUNS__a3-69c912aa-d414119d-669c907e",
        dashboardLayoutMobile: "GUNS__1e-ca42171e-6d3429c2-1ed6f94b",
        subscriptionExpires: "GUNS__81-7de563b3-b1ce29f0-40e0a8b7",
        show: "GUNS__e7-f4be5a5f-d6b1682b-41b593e5",
        mobileHeaderControls: "GUNS__c5-abf0b505-3da4bdbb-2ca18425",
        mobileHeaderIconButton: "GUNS__0c-ba26afab-17c48600-0e79612e",
        mobileDiscordButton: "GUNS__0d-c98a5d08-29270a17-41a8a301",
        dashboardSearchMobileButton: "GUNS__02-ae56a952-17bbe3b0-ebc37a90",
        menuCloseButton: "GUNS__71-38bb9deb-0f51a8cc-23535a63",
        menuCardButtons: "GUNS__59-37776ade-3b11f6ea-31dd64a4",
        menuCardAccounts: "GUNS__e5-d9a1b879-0a2da75f-c32a771e",
        menuCardHome: "GUNS__1e-b17e5f7c-4f7934e3-fb3c9925",
        menuCardLeaderboard: "GUNS__ad-c9780832-3427b764-f08bbb1e",
        menuCardDiscord: "GUNS__b7-45873a15-11cf1e6c-9f8ffd45",
        menuCardLogout: "GUNS__11-e4be8357-66ad62d4-38e4d774",
        popoverTextWrapper: "GUNS__72-9c8de668-87402503-a1cdb19c",
        "custom-mt": "GUNS__86-612f47e3-8a25858c-d1fc5767",
        dashboardDropdownNavigationSelected: "GUNS__63-9441beb0-6a297d4c-692c4ab0",
        accountTabWrapper: "GUNS__6f-75790db8-0e320355-5311e2de",
        premiumTabWrapper: "GUNS__9d-7db25479-fe645a6b-41a5771b",
        imagehostTabWrapper: "GUNS__f8-9a80f766-b7ad6e79-11dac0cc",
        price: "GUNS__8d-664e4e44-2b370ab7-fb9978a0",
        lifetimeText: "GUNS__a1-82643e80-c7cc8a52-41800c22",
        features: "GUNS__d8-26a669a3-c76077fb-d9f1319c",
        purchaseButton: "GUNS__ce-034b000d-c89ab32b-14f79585",
        imagehostModal: "GUNS__72-603a7938-0ead42cf-33a1a4c2",
        premiumModal: "GUNS__6a-0e90dfab-83250fce-9945c376",
        imagehostText: "GUNS__55-e02f9f46-8839bbc1-412cb99f",
        premiumText: "GUNS__23-966013f4-8b9d0779-2b742f81",
        learnMore: "GUNS__58-362abd44-4249d3e9-762df344",
        premiumModalWrapper: "GUNS__e2-cfc6c13a-3d96a67b-676da686",
        subscriptionType: "GUNS__bb-ced5a0a0-9f229eec-54268f46",
        selected: "GUNS__0e-ccca80b6-233f36ce-d3a0f64a",
        giftImage: "GUNS__31-227d50a0-5d76db4a-5bf5e27d",
        giveawayImage: "GUNS__64-29cf4e04-9e26a778-2541ff78",
        giftNotification: "GUNS__88-7a70d0c3-96ae0f22-b2016fe1",
        giveawayNotification: "GUNS__6a-6927beab-07b9c711-8202d94a",
        giftDescription: "GUNS__f0-b7043ab7-c1dcd037-e2e74e00",
        giveawayDescription: "GUNS__9e-64d7569f-a7af1fc0-f320a758",
        giftButtons: "GUNS__17-614a0f9d-13e9bb85-b80c50e1",
        giveawayButtons: "GUNS__97-f7dd1e7c-9247c3e9-3bb68cbc",
        giftMessageBox: "GUNS__3f-e9a35893-f69fd151-10a48809",
        planButtons: "GUNS__35-9450290c-5310ff0c-56b0869f",
        warningNotification: "GUNS__70-44e54f9a-25dac62b-2c29f76f",
        warningDescription: "GUNS__ee-17848e77-e707f91a-b931b494",
        acceptButton: "GUNS__dd-519e1c09-75372ba5-545e988d",
        warningMessage: "GUNS__1f-5e295967-b682bac9-ee5db57b",
        donation: "GUNS__33-35e74ae7-4c0445af-af50a607",
        donateMoreText: "GUNS__b3-7b9a31d9-e86b34d7-efe57900",
        alreadyDonatedText: "GUNS__7d-1101b9ac-d6e3dbd7-b71cd847",
        donationAmount: "GUNS__15-f75b3752-110b828b-af830821",
        payButton: "GUNS__6d-6428c52d-a20f4a8e-721203ef",
        paymentMethods: "GUNS__c1-645b2085-0cb3ff4a-e82ebd26",
        bundleFlow: "GUNS__bd-5e7ba278-5e84ab96-5350d5a4",
        bundleLoading: "GUNS__23-4a893c56-ce913404-3690912e",
        bundleHeading: "GUNS__66-754118ed-813dab65-155a50ac",
        bundleDiscountText: "GUNS__78-26c9c973-3352e372-091500c9",
        bundleOptions: "GUNS__cf-a51fcd86-86e4898a-185a8052",
        bundleRecommended: "GUNS__59-566c850c-c40685b9-bf82bf8e",
        bundleRecommendedHeader: "GUNS__f9-0fa40a62-7b40c613-6bb8bbee",
        bundleMoreButton: "GUNS__46-cac85619-89c830c8-6903d8ed",
        bundleOption: "GUNS__cb-272f8b62-59a95c2c-5cf267ae",
        bundleOptionSelected: "GUNS__21-8fd3e317-1bc17279-af3c1c81",
        bundleOptionIcon: "GUNS__aa-c0a487a1-1a31da48-bbf155ad",
        bundleOptionCopy: "GUNS__af-5af7528e-758ec939-4348d573",
        bundleOptionPrice: "GUNS__e9-e5609b9f-baa5b493-1dfc1c2c",
        bundleOptionCheck: "GUNS__d2-d68b6235-488dc2dd-99e5aeed",
        bundleOrderSummary: "GUNS__c5-28b63fc6-8525350c-1ca3cfe4",
        bundleDiscountRow: "GUNS__25-619dc342-67ade25a-d1ac392c",
        bundleOrderTotal: "GUNS__7f-d2711e06-de8d337b-6a75c701",
        paymentActions: "GUNS__f4-9355740a-0bae1a2d-70ff502e",
        paymentMethodButton: "GUNS__62-5c01fba5-5414bd53-1411908a",
        bundleBackButton: "GUNS__62-cf6a426f-c7642276-8033d945",
        paymentLoadingSpinner: "GUNS__25-94a80b11-b451691e-e16373fe",
        paymentSpinner: "GUNS__2c-1110707a-c769c118-56a02db7",
        creditCard: "GUNS__9b-9fdcc18a-fa12dc45-87cf6812",
        crypto: "GUNS__2c-6b47a8cf-5f7c4065-a666f83c",
        selectedMethod: "GUNS__0e-5295c890-b06ff73e-beb54108",
        bundleSkipButton: "GUNS__3c-7fd247f2-395bd85a-7536e1cd",
        bundleContinueButton: "GUNS__8b-80520a1f-6158cba0-41d7d6ea",
        bundleButtonPrice: "GUNS__0c-c9f889b5-ac46b8b5-8b75ab3b",
        error: "GUNS__c8-f583cbfb-27e917b8-85d26e80",
        product: "GUNS__ab-48bc7fba-91179071-570efc0b",
        productInformation: "GUNS__a1-9ff11ebb-42a06a5e-b17f5541",
        shareButton: "GUNS__6c-a651b5a0-f0622b26-a6bd9719",
        share: "GUNS__9f-4d66591c-7f31ec64-cad65fee",
        copyButtonWrapper: "GUNS__e6-3fa74280-37e049f7-3e6c6f40",
        copyButton: "GUNS__a2-7af30a33-d536e88d-ca38d2ad",
        shareWrapper: "GUNS__2c-0fea065f-7210ed12-448da39b",
        shareOptions: "GUNS__42-eea6111f-9b273c2d-c697931b",
        shareOption: "GUNS__9d-aa0ac205-9e189cfc-2cd52c97",
        getProfileViews: "GUNS__6f-b6306aee-5f35f1d9-f03fca04",
        shareDescription: "GUNS__f9-3cc6dc33-47f78170-f7909085",
        shareQRCodeDescription: "GUNS__dc-def043f8-e6aeee1a-e8fb4dc9",
        qrCode: "GUNS__57-94f53fd3-70f43d74-f0369082",
        download: "GUNS__62-ac63b7a4-05c59e76-89aa1d2b",
        contactOptionButtons: "GUNS__e3-a058183c-2bea2293-ef0120ed",
        supportContainer: "GUNS__ef-64754976-62480712-fe228bf9",
        loadingSkeleton: "GUNS__c2-3b524e56-6b325d8e-0591a52b",
        loadingAnimation: "GUNS__13-d4b97096-35eda4c9-4e55cda7",
        qrCodeContainer: "GUNS__a3-0b218486-9fb56e93-1786449f",
        discordAvatarContainer: "GUNS__39-900abffc-d64a132a-cf3ccaad",
        loadingSkeletonAvatar: "GUNS__22-d9b4ed8a-86ef4b6b-73eca167",
        dashboardLogo: "GUNS__f9-585d33d1-fcc575bb-2567f856",
        promoModal: "GUNS__ea-e06fe9ec-61341835-6921f855",
        promoHeader: "GUNS__e7-88c20b8c-56e8b9b6-e291f78a",
        promoActions: "GUNS__54-24b60974-6ab3e239-cecde2fd",
        promoUpgrade: "GUNS__69-84187a12-4d8c2949-52810a06",
        promoDecline: "GUNS__29-48339a84-a953a029-4ffb71ad",
        promoFeatures: "GUNS__6f-2a1449be-0dc9ef66-3f71162f",
        promoFeaturesWrapper: "GUNS__2f-1370f62d-704aff31-8292a05c",
        promoFeaturesList: "GUNS__61-80635b57-d3b5db26-9579aa18",
        notificationPaginationControls: "GUNS__51-77071c54-c440ae64-7392b0d0",
        deletionScheduledModal: "GUNS__46-88f2a835-998924b5-6cf5e7bc",
        deletionScheduledMeta: "GUNS__d8-42078d36-e8d9e18d-8acfa1ed",
        deletionScheduledHint: "GUNS__94-655aa824-ba56efff-3a52b5f7",
        deletionScheduledError: "GUNS__95-76ab0789-1af09c80-11829ea1",
        deletionScheduledActions: "GUNS__29-b88ab559-af327030-4ec330d5",
        reactivateButton: "GUNS__2a-100202e1-007335f9-98a1d1bb",
        logoutButton: "GUNS__cf-c734f261-9dca5b68-22fd6c14",
        CustomBadgePurchaseModal: "GUNS__80-d67eecfb-f61e7727-fa22adbe",
        CustomBadgePurchaseModalButton: "GUNS__34-51585321-1956a97a-b4f5c1dd",
        iconUpload: "GUNS__78-6c232253-20c7404f-44ae5080",
        uploadCardText: "GUNS__eb-8c70d6e9-376e7295-109c1f37",
        uploaderMessage: "GUNS__d5-24103975-23c0eb26-a453b1e5",
        uploadCardImage: "GUNS__0c-ee0776d3-ca772cb9-e2b2e6a5",
        uploaderHeadingText: "GUNS__fc-8eeeed6e-3512b8f1-6ca74eb0",
        iconUploadWrapper: "GUNS__92-e4136d98-ac77d5fc-d8078760",
        fileBadge: "GUNS__ad-957af5d3-afb914bf-41128767",
        customBadgePreviewContainerWrapper: "GUNS__20-40f80888-b6aab295-177f52a0",
        customBadgePreviewContainer: "GUNS__f0-c195f60d-7bff7bcb-8e523c35",
        customBadgePreview: "GUNS__d8-b76b30a7-16e09662-3c317586",
        customBadgePreviewText: "GUNS__8d-51cd66ad-5dcd5e39-4ea236dd",
        customBadgePreviewDiv: "GUNS__e1-31327180-f30eceb8-afb0737a",
        customBadgeIconText: "GUNS__9a-d83e90cf-4d5f7f9e-5b31f87d",
        customBadgeNotificationHeader: "GUNS__a3-1b8be32f-19cad450-f41fd603",
        customBadgeNotificationContainer: "GUNS__be-75934e64-b5b52df4-01b32619",
        createCustomBadgeButton: "GUNS__13-6957f83a-477eeb89-ef90f265",
        customBadgeGuidelinesContainer: "GUNS__fa-2aaea0c9-33864f6f-365ea629",
        customBadgeConfirmationContainer: "GUNS__91-df89e380-af1886d9-40036292",
        customBadgeConfirmationText: "GUNS__7b-89368c70-b8db32bd-d88e1e7e",
        customBadgeConfirmationActions: "GUNS__e5-f90b8b82-2e8c7289-5093fe3a",
        CustomBadgePurchaseModalDiscount: "GUNS__0b-136418f5-a5c1793a-a1c57463",
        trustpilotNotification: "GUNS__43-920b3847-7fa1bd7c-43afc47b",
        trustpilotButtons: "GUNS__af-321c9cab-e339e79e-e28afba2",
        giveawayItem: "GUNS__b5-263062f1-a27f7aa4-63146190",
        giveawayList: "GUNS__98-d8f2f94e-9e7d7516-b3b0cb80",
        dashboardSearchButtonContainer: "GUNS__56-807256ba-fa5621c4-62a14c2c",
        dashboardSearchButton: "GUNS__b2-1781a7bd-cd228fa8-b545e05f",
        featureSearchInputWrapper: "GUNS__a6-6aa06398-d5b465ea-585c20d9",
        featureSearchResult: "GUNS__3c-9376f2df-f5dd6a5f-adf90f75",
        dashboardSearchIcon: "GUNS__9e-00efc765-7e9e3fa9-ae816f92",
        dashboardSearchText: "GUNS__27-2782f11f-3d323a16-96166443",
        featureSearchModal: "GUNS__d0-c03b1f7d-3033bc99-a1efd58f",
        featureSearchModalBody: "GUNS__a9-6a10fa27-8c956fb0-cabbf821",
        featureSearch: "GUNS__9e-92294a49-e995bf00-3376c97f",
        featureSearchInputShell: "GUNS__a5-a7bac5fc-9cab3fb3-4f0c482b",
        featureSearchClearButton: "GUNS__fd-2312280c-1536b34f-e138255a",
        featureSearchMeta: "GUNS__19-a9850574-ea965e45-b05f282e",
        featureSearchResults: "GUNS__33-54155f5b-0e1ab449-a661a95a",
        featureSearchGroup: "GUNS__62-81ee0639-4c3fecb3-7d87b345",
        featureSearchGroupTitle: "GUNS__4c-3bd86133-133c03d3-6569a0f7",
        featureSearchGroupItems: "GUNS__fa-dad489f0-715098c0-f8dd8e86",
        featureSearchResultActive: "GUNS__3c-d3f60cb3-f07bac2f-801e570f",
        featureSearchResultIcon: "GUNS__1d-718568a6-b62d30dc-678605a9",
        featureSearchResultText: "GUNS__9a-46fbd998-b92ccf70-a34bd9fb",
        featureSearchResultHint: "GUNS__ed-e483fd6a-d0253001-abe29fc2",
        featureSearchResultLocked: "GUNS__47-92c92754-9035965e-dfa2e8d9",
        featureSearchEmpty: "GUNS__e6-439efccd-f45e41cc-8e4eb41d",
        "dashboard-feature-search-highlight-ring": "GUNS__36-4f537d43-7a5a8fae-f449c6b8",
        "dashboard-feature-search-highlight-reduced": "GUNS__d4-f530fdd8-0f3c880b-a393d6f9",
        blackWeekSale: "GUNS__b5-c85c7a0f-31bf20e1-2681a5a4",
        blackWeekSaleTitle: "GUNS__f7-3df2f334-4be00fb6-508e6b82",
        blackWeekSaleDescription: "GUNS__d7-ce32ae78-92abe1ac-43d8c486",
        blackWeekSaleNotification: "GUNS__d7-2653fac0-bee21c5b-3d9e8a4e",
        blackWeekBadge: "GUNS__16-3d47430d-d612bee0-60e091ad",
        blackWeekSaleButtons: "GUNS__89-e4f3d5c1-295f9024-6eb563d4"
      }
    },
    97478: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => u
      });
      var n = t(95155),
        i = t(29722),
        r = t(12115),
        d = t(79999),
        o = t.n(d);
      let s = (e, a, t) => {
          let n = e;
          return "number" == typeof a && (n = Math.max(n, a)), "number" == typeof t && (n = Math.min(n, t)), n
        },
        c = (e, a) => {
          if (!Number.isFinite(e) || "number" != typeof a) return e;
          let t = 10 ** a;
          return Math.round(e * t) / t
        },
        l = (e, a) => "" === e || null == e || "number" != typeof e || Number.isNaN(e) ? "" : "number" == typeof a ? e.toFixed(a) : `${e}`;

      function u({
        featureName: e,
        icon: a,
        value: t,
        placeholder: d,
        min: u,
        max: m,
        step: f = 1,
        precision: b,
        hideControls: _ = !1,
        className: p,
        inputClassName: h,
        onChangeFunction: g,
        onChange: N,
        onInput: S,
        onFocus: G,
        onBlur: x,
        onKeyDown: U,
        inputMode: v = "decimal",
        disabled: y,
        id: j,
        ...w
      }) {
        let C = "number" == typeof b ? b : (e => {
            if ("number" != typeof e || !Number.isFinite(e)) return;
            let a = e.toString().toLowerCase(),
              t = 0;
            if (a.includes("e-")) {
              let [e, n] = a.split("e-");
              t = (e.split(".")[1]?.length ?? 0) + Number(n)
            } else {
              let e = a.split(".")[1];
              t = e ? e.length : 0
            }
            return t > 0 ? t : void 0
          })(f),
          k = void 0 === d ? void 0 : String(d),
          B = (0, r.useId)(),
          M = j ?? B,
          A = (0, r.useRef)(null),
          [T, $] = (0, r.useState)(!1),
          [P, D] = (0, r.useState)(() => l(t ?? "", C));
        (0, r.useEffect)(() => {
          T || D(l(t ?? "", C))
        }, [t, C, T]);
        let L = (0, r.useCallback)(e => {
            g?.(e), N?.(e)
          }, [g, N]),
          O = e => {
            if (y) return;
            let a = "number" == typeof t && Number.isFinite(t) ? t : void 0,
              n = c(s("number" == typeof a ? a + e * f : 1 === e ? "number" == typeof u ? u : f : "number" == typeof m ? m : -f, u, m), C);
            D(l(n, C)), L(n), A.current?.focus()
          },
          W = !y && ("number" != typeof m || "number" != typeof t || t < m),
          I = !y && ("number" != typeof u || "number" != typeof t || t > u),
          F = "string" == typeof e ? e : void 0;
        return (0, n.jsxs)("div", {
          className: (0, i.A)(o().container, p),
          "data-dashboard-feature-label": F,
          children: [e && (0, n.jsx)("label", {
            htmlFor: M,
            className: o().label,
            children: e
          }), (0, n.jsxs)("div", {
            className: o().inputShell,
            "data-focused": T,
            "data-disabled": y,
            children: [a && (0, n.jsx)("span", {
              className: o().iconSlot,
              children: a
            }), (0, n.jsx)("input", {
              ref: A,
              id: M,
              type: "text",
              inputMode: v,
              autoComplete: "off",
              autoCorrect: "off",
              spellCheck: !1,
              className: (0, i.A)(o().input, a && o().inputWithIcon, !_ && o().inputWithControls, h),
              value: P,
              placeholder: k,
              min: u,
              max: m,
              step: f,
              onInput: e => {
                let a;
                S?.(e);
                let t = e.currentTarget.value;
                D(t);
                let n = t.replace(/,/g, ".");
                if ("" === (a = n.trim()) || "-" === a || "+" === a || "." === a || "-." === a || "+." === a) return void L(0);
                let i = Number(n);
                Number.isNaN(i) || L(c(s(i, u, m), C))
              },
              onFocus: e => {
                $(!0), G?.(e)
              },
              onBlur: e => {
                $(!1), D(l(t ?? "", C)), x?.(e)
              },
              onKeyDown: e => {
                "ArrowUp" === e.key ? (e.preventDefault(), O(1)) : "ArrowDown" === e.key && (e.preventDefault(), O(-1)), U?.(e)
              },
              disabled: y,
              ...w
            }), !_ && (0, n.jsxs)("div", {
              className: o().controls,
              children: [(0, n.jsx)("button", {
                type: "button",
                className: o().controlButton,
                onMouseDown: e => e.preventDefault(),
                onClick: () => O(1),
                disabled: !W,
                tabIndex: -1,
                children: "▲"
              }), (0, n.jsx)("button", {
                type: "button",
                className: o().controlButton,
                onMouseDown: e => e.preventDefault(),
                onClick: () => O(-1),
                disabled: !I,
                tabIndex: -1,
                children: "▼"
              })]
            })]
          })]
        })
      }
    },
    98028: (e, a, t) => {
      "use strict";
      t.d(a, {
        u: () => r
      });
      var n = t(12115),
        i = t(41029);

      function r() {
        let [e, a] = (0, n.useState)(!1);
        return (0, n.useEffect)(() => {
          let e = () => a((0, i.p)());
          e();
          let t = window.setInterval(e, 1e3);
          return () => window.clearInterval(t)
        }, []), e
      }
    }
  }
]);