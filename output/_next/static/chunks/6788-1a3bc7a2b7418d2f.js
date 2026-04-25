(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6788], {
    5585: e => {
      e.exports = {
        overlay: "GUNS__2a-ec424462-e2d1ad6f-42d31c98",
        modal: "GUNS__c9-9f956df0-2aa75d71-7434650d",
        "overlay-fade-in": "GUNS__28-fac3e645-eb45c253-1613aaec",
        "overlay-fade-out": "GUNS__08-a43818b0-b02ed44f-26fc9b5d",
        "modal-scale-in": "GUNS__f8-f3bfe6a6-ed71fab1-6cb58cec",
        "modal-scale-out": "GUNS__d9-8be0fc70-7c7db8fc-95d242f5",
        header: "GUNS__c6-de21a81f-58192bf7-b172e0ea",
        title: "GUNS__2a-e1e76140-19cae230-28ef5727",
        closeButton: "GUNS__8f-a6cb3991-90ec747f-4d7f9d93",
        body: "GUNS__28-d82a957e-1d95260e-e1b07846"
      }
    },
    13699: (e, a, t) => {
      "use strict";
      t.d(a, {
        j: () => c,
        v: () => s
      });
      let r = "pricingPage",
        n = "upgradePremiumPopup",
        o = "dashboardUpgradeModal",
        i = "badgePage",
        s = {
          pricing: r,
          popup: n,
          modal: o,
          badges: i,
          aliasManager: "accountAliasManager"
        },
        c = {
          pricing: `${r}Gift`,
          popup: `${n}Gift`,
          modal: `${o}Gift`,
          badges: `${i}Gift`
        }
    },
    24579: e => {
      e.exports = {
        wrapper: "GUNS__ba-7f5364ea-c3a36c5d-b0f3d011",
        tooltip: "GUNS__ca-42ad2aff-c7e7db33-534468e1"
      }
    },
    37897: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var r = t(95155),
        n = t(12115),
        o = t(98241),
        i = t.n(o),
        s = t(54834);

      function c({
        featureName: e,
        onChangeFunction: a,
        value: t,
        placeholder: o,
        icon: c,
        prefix: d,
        prefixLength: l,
        viewPassword: f,
        onKeyPress: u,
        isImageUrl: m,
        ..._
      }) {
        let p = (0, n.useRef)(null),
          [b, h] = (0, n.useState)(f);
        return (0, n.useEffect)(() => {
          p.current && (p.current.type = b ? "password" : "text")
        }, [b]), (0, r.jsxs)("div", {
          className: i().inputContainerWrapper,
          children: [(0, r.jsx)("h1", {
            className: i().featureName,
            children: e
          }), (0, r.jsxs)("div", {
            className: `${i().inputWrapperDiv} ${d&&i().inputWrapperURL}`,
            children: [(0, r.jsxs)("span", {
              className: i().inputWrapperSpan,
              style: {
                position: d ? "absolute" : "static"
              },
              children: [m ? (0, r.jsx)("img", {
                src: c,
                alt: "icon",
                className: i().inputWrapperIconImage
              }) : c, d && (0, r.jsx)("h1", {
                children: d
              })]
            }), f && (0, r.jsx)("p", {
              onClick: () => {
                h(!b)
              },
              children: b ? s.A.hidePassword : s.A.views
            }), (0, r.jsx)("input", {
              autoCorrect: "false",
              type: b ? "password" : "text",
              onKeyDown: u,
              value: t,
              style: {
                paddingLeft: d ? l : "",
                paddingRight: f ? 47 : ""
              },
              placeholder: o,
              className: i().inputWrapperInput,
              onChange: a,
              ..._,
              ref: p
            })]
          })]
        })
      }
    },
    41458: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => G
      });
      var r = t(95155),
        n = t(54834),
        o = t(98241),
        i = t.n(o),
        s = t(37897),
        c = t(12115),
        d = t(58295),
        l = t(66609),
        f = t(98500),
        u = t.n(f),
        m = t(50686),
        _ = t(91801),
        p = t.n(_),
        b = t(97478),
        h = t(3434),
        g = t(96351);

      function N({
        continueFunction: e,
        customBadgeData: a,
        setCustomBadgeData: t
      }) {
        let n = (0, g.kj)();

        function o(e) {
          let a = 7.99 * e ** .95,
            t = 7.99 * e,
            r = (1 - a / t) * 100;
          return {
            totalPrice: parseFloat(a.toFixed(2)),
            rawPrice: parseFloat(t.toFixed(2)),
            discountPercent: parseFloat(r.toFixed(0))
          }
        }
        let i = a.amount > 1 ? (0, r.jsxs)(r.Fragment, {
          children: [o(a.amount).totalPrice, "€ ", (0, r.jsxs)("s", {
            children: [o(a.amount).rawPrice, "€"]
          })]
        }) : (0, r.jsxs)(r.Fragment, {
          children: [o(a.amount).totalPrice, "€"]
        });
        return (0, r.jsxs)("div", {
          className: p().CustomBadgePurchaseModal,
          children: [(0, r.jsx)(b.A, {
            featureName: n("modals.custom_badge.title_gift"),
            value: a.amount,
            min: 1,
            max: 500,
            onChange: e => t({
              ...a,
              amount: e
            }),
            icon: h.A.shoppingBag
          }), (0, r.jsxs)("div", {
            className: p().CustomBadgePurchaseModalDiscount,
            children: [(0, r.jsx)("h1", {
              children: n("modals.custom_badge.information_text_gift")
            }), (0, r.jsx)("h3", {
              children: n("modals.custom_badge.description_gift", {
                percentage: o(a.amount).discountPercent,
                amount: a.amount
              })
            })]
          }), (0, r.jsx)("span", {
            className: p().CustomBadgePurchaseModalButton,
            onClick: r => {
              t({
                ...a,
                totalPrice: o(a.amount).totalPrice
              }), e(r)
            },
            children: n("modals.custom_badge.purchase_text", {
              price: i
            })
          })]
        })
      }
      var S = t(61778),
        v = t(57776);

      function G({
        defaultSelection: e,
        redirectLogin: a,
        showGiftContainer: t,
        purchaseSource: o = "unknown"
      }) {
        let f = (0, g.kj)(),
          _ = (0, g.VJ)(),
          p = {
            imagehost: f("modals.gift.gift_imagehost"),
            premiumLifetime: f("modals.gift.gift_premium"),
            verified: f("modals.gift.gift_verified_badge"),
            custombadge: f("modals.gift.gift_custom_badge")
          },
          [b, h] = (0, c.useState)(!1),
          [G, U] = (0, c.useState)(""),
          [x, w] = (0, c.useState)(""),
          [y, j] = (0, c.useState)({
            displayName: "",
            username: "",
            avatar: "",
            found: !1
          }),
          [C, k] = (0, c.useState)(e),
          [B, T] = (0, c.useState)(!1),
          [M, P] = (0, c.useState)(!1),
          [A, L] = (0, c.useState)({
            amount: 1,
            totalPrice: 0
          }),
          E = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 12q-1.65 0-2.825-1.175T7 8t1.175-2.825T11 4t2.825 1.175T15 8t-1.175 2.825T11 12m11.1 11.5l-3.2-3.2q-.525.3-1.125.5T16.5 21q-1.875 0-3.187-1.312T12 16.5t1.313-3.187T16.5 12t3.188 1.313T21 16.5q0 .675-.2 1.275t-.5 1.125l3.2 3.2zM16.5 19q1.05 0 1.775-.725T19 16.5t-.725-1.775T16.5 14t-1.775.725T14 16.5t.725 1.775T16.5 19m-5.475-6q-1.05 1.55-1.05 3.5t1.05 3.5H3v-2.775q0-.85.425-1.575t1.175-1.1q1.275-.65 2.875-1.1t3.55-.45"></path></svg>',
          $ = async (e, a = !1) => {
            if (!G) return void l.oR.error(f("modals.gift.error_gift_username"));
            if (!C) return void l.oR.error(f("modals.gift.error_gift_product"));
            let t = await D(e, !1);
            (y.found || t) && (a ? P(!0) : T(!0))
          }, D = async (e, a = !0) => {
            try {
              e.target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeDasharray="15" strokeDashoffset="15" strokeLinecap="round" strokeWidth="2" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"></animate><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></svg>';
              let t = await fetch("https://guns.lol/api/gift/user", {
                  method: "POST",
                  body: JSON.stringify({
                    username: G
                  })
                }),
                r = await t.json();
              if (!t.ok) return e.target.innerHTML = a ? E : f("modals.gift.continue_button"), l.oR.error(r.error), null;
              {
                let t = {
                  displayName: r.display_name,
                  username: G,
                  avatar: r.avatar,
                  found: !0
                };
                return j(t), e.target.innerHTML = a ? E : f("modals.gift.continue_button"), t
              }
            } finally {
              e.target.innerHTML = a ? E : f("modals.gift.continue_button")
            }
          }, W = B || M ? M && !B ? (0, r.jsx)(N, {
            continueFunction: $,
            customBadgeData: A,
            setCustomBadgeData: L
          }) : (0, r.jsx)(m.A, {
            type: C,
            gift: !0,
            giftMessage: x,
            username: G,
            customBadgeData: "custombadge" === C ? A : void 0,
            purchaseSource: o
          }) : (0, r.jsxs)("div", {
            children: [(0, r.jsxs)("h1", {
              className: i().giftBanner,
              children: [n.A.gift, (0, r.jsxs)("div", {
                className: i().giftBannerContent,
                children: [" ", f("modals.gift.gift_badge_text", {
                  exclusive: (0, r.jsx)("span", {
                    children: "exclusive"
                  })
                })]
              })]
            }), (0, r.jsxs)("div", {
              className: i().giftModal,
              children: [(0, r.jsx)("img", {
                className: i().giftImage,
                src: "https://assets.guns.lol/present_asset.png"
              }), (0, r.jsxs)("div", {
                className: i().giftInformation,
                children: [(0, r.jsx)("div", {
                  className: i().usernameSearch,
                  children: y.found ? (0, r.jsxs)("div", {
                    className: i().user,
                    children: [(0, r.jsx)("img", {
                      src: y.avatar,
                      alt: ""
                    }), (0, r.jsxs)("div", {
                      className: i().userDescription,
                      children: [(0, r.jsx)("h1", {
                        children: "" !== y.displayName ? y.displayName : y.username
                      }), (0, r.jsxs)(u(), {
                        href: `/${y.username}`,
                        target: "_blank",
                        children: ["guns.lol/", y.username]
                      })]
                    }), (0, r.jsxs)("span", {
                      className: i().removeUser,
                      onClick: () => {
                        j({
                          displayName: "",
                          username: "",
                          avatar: "",
                          found: !1
                        }), U("")
                      },
                      children: [n.A.removeUser, " ", f("modals.gift.change_user")]
                    })]
                  }) : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(s.A, {
                      featureName: f("modals.gift.gift_inputs.send_to"),
                      onChangeFunction: e => {
                        U(e.target.value)
                      },
                      value: G,
                      placeholder: "Username",
                      icon: n.A.user
                    }), (0, r.jsx)("span", {
                      className: i().searchButton,
                      onClick: D,
                      children: n.A.usernameSearch
                    })]
                  })
                }), (0, r.jsx)(d.A, {
                  featureName: f("modals.gift.gift_inputs.gift_message"),
                  placeholder: f("modals.gift.gift_inputs.gift_message_placeholder"),
                  onChangeFunction: e => {
                    w(e.target.value)
                  },
                  value: x
                }), (0, r.jsxs)("div", {
                  className: i().yourGift,
                  children: [(0, r.jsx)("h1", {
                    className: i().yourGiftText,
                    children: f("modals.gift.your_gift")
                  }), (0, r.jsxs)("div", {
                    className: i().giftTypes,
                    children: [(0, r.jsxs)("div", {
                      className: `${i().giftContainer} ${"verified"===C&&i().selectedGift}`,
                      onClick: () => k("verified"),
                      children: [(0, r.jsxs)("div", {
                        className: i().giftDescription,
                        children: [(0, r.jsxs)("h1", {
                          children: ["guns.lol ", f("common.pricing.verified.name")]
                        }), (0, r.jsx)("h3", {
                          children: f("modals.gift.gift_verified_badge")
                        })]
                      }), (0, r.jsx)("span", {
                        className: i().priceText,
                        children: (0, r.jsx)("strong", {
                          children: "14,99€"
                        })
                      })]
                    }), (0, r.jsxs)("div", {
                      className: `${i().giftContainer} ${"custombadge"===C&&i().selectedGift}`,
                      onClick: () => k("custombadge"),
                      children: [(0, r.jsxs)("div", {
                        className: i().giftDescription,
                        children: [(0, r.jsxs)("h1", {
                          children: ["guns.lol ", f("common.pricing.custom_badge.name")]
                        }), (0, r.jsx)("h3", {
                          children: f("modals.gift.gift_custom_badge")
                        })]
                      }), (0, r.jsx)("span", {
                        className: i().priceText,
                        children: (0, r.jsx)("strong", {
                          children: "8,99€"
                        })
                      })]
                    }), (0, r.jsxs)("div", {
                      className: `${i().giftContainer} ${"premiumLifetime"===C&&i().selectedGift}`,
                      onClick: () => k("premiumLifetime"),
                      children: [(0, r.jsxs)("div", {
                        className: i().giftDescription,
                        children: [(0, r.jsxs)("h1", {
                          children: ["guns.lol ", f("common.pricing.premium_plan.name"), " ", (0, r.jsx)("span", {
                            className: i().saveText,
                            children: f("modals.gift.save_premium")
                          })]
                        }), (0, r.jsx)("h3", {
                          children: f("modals.gift.gift_premium")
                        })]
                      }), (0, r.jsx)("span", {
                        className: i().priceText,
                        children: (0, r.jsx)("strong", {
                          children: "7,19€"
                        })
                      })]
                    }), (0, r.jsxs)("div", {
                      className: `${i().giftContainer} ${"imagehost"===C&&i().selectedGift}`,
                      onClick: () => k("imagehost"),
                      children: [(0, r.jsxs)("div", {
                        className: i().giftDescription,
                        children: [(0, r.jsxs)("h1", {
                          children: ["guns.lol ", f("common.pricing.imagehost_plan.name")]
                        }), (0, r.jsx)("h3", {
                          children: f("modals.gift.gift_imagehost")
                        })]
                      }), (0, r.jsx)("span", {
                        className: i().priceText,
                        children: (0, r.jsx)("strong", {
                          children: "4,99€"
                        })
                      })]
                    })]
                  })]
                }), (0, r.jsx)("div", {
                  className: i().buttonWrapper,
                  children: (0, r.jsx)("span", {
                    className: i().continueButton,
                    onClick: e => $(e, "custombadge" === C),
                    children: f("modals.gift.continue_button")
                  })
                })]
              })]
            })]
          });
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(v.A, {
            opened: b,
            onClose: () => {
              h(!1), setTimeout(() => {
                T(!1), P(!1), L({
                  amount: 1,
                  totalPrice: 0
                })
              }, 500)
            },
            title: p[C],
            centered: !0,
            size: "auto",
            children: W
          }), t ? W : (0, r.jsx)(S.A, {
            content: p[e],
            offset: 15,
            children: (0, r.jsx)("span", {
              className: i().giftButton,
              onClick: () => {
                a ? location.href = _("/login?returnUri=/pricing") : (h(!0), k(e))
              },
              children: n.A.gift
            })
          })]
        })
      }
    },
    50686: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => _
      });
      var r = t(95155),
        n = t(91801),
        o = t.n(n),
        i = t(3434);
      async function s(e, a, t, r, n, o = "unknown", i = "en") {
        let c = await fetch("https://guns.lol/api/billing/createCheckout", {
            method: "POST",
            body: JSON.stringify({
              type: e,
              donation_amount: a,
              credits: t,
              badge_data: r,
              alias_credits: n,
              metadata: {
                purchase_source: o,
                current_url: window.location.pathname,
                referrer: document.referrer,
                locale: i
              }
            })
          }),
          d = await c.json();
        return c.ok ? (window.location.href = d.session, d.session) : {
          error: !0,
          message: d.error
        }
      }
      var c = t(66609),
        d = t(12115);
      async function l(e, a, t, r, n = "unknown", o = "en") {
        let i = await fetch("https://guns.lol/api/billing/giftCheckout", {
            method: "POST",
            body: JSON.stringify({
              type: e,
              username: a,
              gift_message: t,
              badge_data: r,
              metadata: {
                purchase_source: n,
                current_url: window.location.pathname,
                referrer: document.referrer,
                locale: o
              }
            })
          }),
          s = await i.json();
        return i.ok ? (window.location.href = s.session, s.session) : {
          error: !0,
          message: s.error
        }
      }
      async function f(e, a, t, r, n = "unknown") {
        let o = await fetch("https://guns.lol/api/billing/giftCryptoCheckout", {
            method: "POST",
            body: JSON.stringify({
              type: e,
              username: a,
              gift_message: t,
              badge_data: r,
              metadata: {
                purchase_source: n,
                current_url: window.location.pathname,
                referrer: document.referrer
              }
            })
          }),
          i = await o.json();
        return o.ok ? (window.location.href = i.session, i.session) : {
          error: !0,
          message: i.error
        }
      }
      async function u(e, a, t, r, n, o = "unknown") {
        let i = await fetch("https://guns.lol/api/billing/createCryptoCheckout", {
            method: "POST",
            body: JSON.stringify({
              type: e,
              donation_amount: a,
              credits: t,
              badge_data: r,
              alias_credits: n,
              metadata: {
                purchase_source: o,
                current_url: window.location.pathname,
                referrer: document.referrer
              }
            })
          }),
          s = await i.json();
        return i.ok ? (window.location.href = s.session, s.session) : {
          error: !0,
          message: s.error
        }
      }
      var m = t(96351);

      function _({
        type: e,
        donationAmount: a,
        gift: t,
        giftMessage: n,
        username: _,
        creditsData: p,
        customBadgeData: b,
        aliasCreditsData: h,
        purchaseSource: g = "unknown"
      }) {
        let N = (0, m.kj)(),
          S = (0, m.useLang)(),
          [v, G] = (0, d.useState)(""),
          [U, x] = (0, d.useState)(!1),
          w = e.toLowerCase(),
          y = {
            premiumlifetime: {
              name: `${N("common.pricing.premium_plan.name")} ${N("common.pricing.lifetime_text")}`,
              price: t ? "7,19€" : "7,99€"
            },
            imagehost: {
              name: N("common.pricing.imagehost_plan.name"),
              price: "4,99€"
            },
            donation: {
              name: N("common.pricing.donation.name"),
              price: a + "€"
            },
            verified: {
              name: N("common.pricing.verified.name"),
              price: "14,99€"
            },
            credits: {
              name: `${p?.amount}x ${N("common.pricing.custom_badge_credits.name")}`,
              price: p?.totalPrice + "€"
            },
            custombadge: {
              name: `${b?.amount}x ${N("common.pricing.custom_badge.name")}`,
              price: b?.totalPrice + "€"
            },
            aliascredits: {
              name: `${h?.amount}x Alias Credits`,
              price: h?.totalPrice + "€"
            }
          } [w],
          j = async r => {
            if (x(!1), !v) return void x(!0);
            if (t && !_) return void c.oR.error(N("modals.payment_methods.unknown_error"));
            let o = r.currentTarget,
              i = N("modals.payment_methods.purchase");
            o.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeDasharray="15" strokeDashoffset="15" strokeLinecap="round" strokeWidth="2" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"></animate><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></svg>', o.style.pointerEvents = "none";
            let d = null;
            try {
              let r = !!(t && _);
              "card" === v ? d = r ? await l(e, _, n ?? "", b, g, S) : await s(e, a, p, b, h, g, S) : "crypto" === v && (d = r ? await f(e, _, n ?? "", b, g) : await u(e, a, p, b, h, g))
            } catch (e) {
              c.oR.error(N("modals.payment_methods.unknown_error"))
            }
            d && d.error && (c.oR.error(d.message ?? N("modals.payment_methods.unknown_error")), o.style.pointerEvents = "auto", o.innerHTML = i)
          }, C = e => {
            e === v ? G("") : G(e)
          };
        return (0, r.jsxs)("div", {
          className: o().paymentMethods,
          children: [(0, r.jsxs)("div", {
            className: o().product,
            children: [i.A.cart, (0, r.jsxs)("div", {
              className: o().productInformation,
              children: [(0, r.jsxs)("h1", {
                children: [y.name, " ", t && N("modals.payment_methods.gift")]
              }), (0, r.jsx)("h3", {
                children: N("modals.payment_methods.one_time_payment_text", {
                  price: y.price
                })
              })]
            })]
          }), (0, r.jsxs)("div", {
            className: `${o().creditCard} ${"card"===v&&o().selectedMethod} `,
            onClick: () => C("card"),
            children: [(0, r.jsx)("h1", {
              children: N("modals.payment_methods.payment_method_card")
            }), " ", i.A.card, " ", i.A.paypal, " ", i.A.cashapp, " ", i.A.applepay, " ", i.A.googlepay]
          }), (0, r.jsxs)("div", {
            className: `${o().crypto} ${"crypto"===v&&o().selectedMethod} `,
            onClick: () => C("crypto"),
            children: [(0, r.jsx)("h1", {
              children: N("modals.payment_methods.payment_method_crypto")
            }), " ", i.A.bitcoin, i.A.litecoin, "  ", i.A.usdt, " ", i.A.monero, " ", i.A.eth, " ", (0, r.jsx)("span", {
              children: N("modals.payment_methods.more_crypto_text")
            })]
          }), U && (0, r.jsx)("span", {
            className: o().error,
            children: N("modals.payment_methods.error_select_payment_method")
          }), (0, r.jsx)("span", {
            className: o().paymentMethodButton,
            style: {
              marginTop: U ? "0px" : "10px"
            },
            onClick: j,
            children: N("modals.payment_methods.purchase")
          })]
        })
      }
    },
    57776: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var r = t(95155),
        n = t(12115),
        o = t(47650),
        i = t(5585),
        s = t.n(i);

      function c({
        opened: e,
        onClose: a,
        onOverlayClose: t,
        onCloseButtonClick: i,
        onEscapeClose: c,
        title: d,
        centered: l = !0,
        size: f = "auto",
        closeOnOverlayClick: u = !0,
        withCloseButton: m = !0,
        centerTitle: _ = !1,
        className: p,
        bodyClassName: b,
        children: h
      }) {
        let [g, N] = (0, n.useState)(e), [S, v] = (0, n.useState)(!1), [G, U] = (0, n.useState)(null), x = (0, n.useRef)(null), w = (0, n.useRef)(null), y = (0, n.useRef)(null), j = (0, n.useRef)(!1), C = e => {
          if (!e) return !1;
          let a = window.getComputedStyle(e).overflowY;
          return e.scrollHeight > e.clientHeight + 1 && ("auto" === a || "scroll" === a)
        }, k = e => {
          let a = w.current;
          if (!a || !e) return null;
          let t = e;
          for (; t && a.contains(t);) {
            if (C(t)) return t;
            t = t.parentElement
          }
          return null
        }, B = (e, a) => a < 0 ? e.scrollTop > 0 : !(a > 0) || e.scrollTop + e.clientHeight < e.scrollHeight;
        if ((0, n.useEffect)(() => {
            if (e) {
              N(!0), v(!1);
              return
            }
            return v(!0), x.current = setTimeout(() => {
              N(!1), v(!1)
            }, 180), () => {
              x.current && (clearTimeout(x.current), x.current = null)
            }
          }, [e]), (0, n.useEffect)(() => {
            if ("undefined" == typeof document) return;
            let e = document.createElement("div");
            return document.body.appendChild(e), U(e), () => {
              document.body.removeChild(e), U(null)
            }
          }, []), (0, n.useEffect)(() => {
            if (!g) return;
            let e = e => {
                "Escape" === e.key ? c ? c() : a() : ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(e.key) && !w.current?.contains(e.target) && e.preventDefault()
              },
              t = e => {
                let a = w.current;
                if (!a) return void e.preventDefault();
                let t = e.target;
                if (!(t && a.contains(t))) return void e.preventDefault();
                if (e instanceof WheelEvent) {
                  let a = k(t);
                  a && B(a, e.deltaY) || e.preventDefault();
                  return
                }
                if (e instanceof TouchEvent) {
                  let a = e.touches[0]?.clientY ?? null,
                    r = y.current;
                  y.current = a;
                  let n = k(t);
                  n && B(n, null !== r && null !== a ? r - a : 0) || e.preventDefault()
                }
              },
              r = {
                passive: !1
              };
            return window.addEventListener("keydown", e, {
              passive: !1
            }), window.addEventListener("wheel", t, r), window.addEventListener("touchmove", t, r), () => {
              window.removeEventListener("keydown", e), window.removeEventListener("wheel", t, r), window.removeEventListener("touchmove", t, r)
            }
          }, [B, k, a, c, g]), (0, n.useEffect)(() => {
            if (!g) return;
            let e = e => {
              if (!w.current?.contains(e.target)) {
                y.current = null;
                return
              }
              y.current = e.touches[0]?.clientY ?? null
            };
            return window.addEventListener("touchstart", e, {
              passive: !0
            }), () => window.removeEventListener("touchstart", e)
          }, [g]), !g || !G) return null;
        let T = "number" == typeof f ? `${f}px` : f,
          M = {};
        T && "auto" !== T ? M.maxWidth = T : (M.width = "fit-content", M.maxWidth = "clamp(100%, 100%, 850px)", M.boxSizing = "border-box");
        let P = S ? "closing" : "open",
          A = (0, r.jsx)("div", {
            className: s().overlay,
            "data-centered": l,
            "data-state": P,
            onMouseDown: e => {
              j.current = e.target === e.currentTarget
            },
            onClick: e => {
              let r = e.target === e.currentTarget,
                n = u && r && j.current;
              j.current = !1, n && (t ? t() : a())
            },
            children: (0, r.jsxs)("div", {
              className: `${s().modal} ${p??""}`,
              "data-state": P,
              style: M,
              ref: w,
              onClick: e => e.stopPropagation(),
              children: [(d || m) && (0, r.jsxs)("div", {
                className: s().header,
                children: [d && (0, r.jsx)("h2", {
                  className: s().title,
                  style: _ ? {
                    textAlign: "center",
                    width: "100%"
                  } : {},
                  children: d
                }), m && (0, r.jsx)("button", {
                  type: "button",
                  className: s().closeButton,
                  onClick: i ?? a,
                  children: (0, r.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1em",
                    height: "1em",
                    viewBox: "7.43 7.45 9.15 9.15",
                    children: (0, r.jsx)("path", {
                      fill: "currentColor",
                      d: "m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"
                    })
                  })
                })]
              }), (0, r.jsx)("div", {
                className: `${s().body} ${b??""}`,
                children: h
              })]
            })
          });
        return (0, o.createPortal)(A, G)
      }
    },
    61778: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var r = t(95155),
        n = t(47650),
        o = t(12115),
        i = t(24579),
        s = t.n(i);
      let c = "undefined" != typeof navigator && /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      function d({
        content: e,
        children: a,
        placement: t = "top",
        delay: i = 110,
        offset: d = 10,
        maxWidth: l = 260,
        className: f,
        tooltipClassName: u,
        hideTooltip: m = !1,
        pageTooltipStyles: _ = !1
      }) {
        let [p, b] = (0, o.useState)(!1), [h, g] = (0, o.useState)(!1), [N, S] = (0, o.useState)({
          top: 0,
          left: 0
        }), [v, G] = (0, o.useState)(!1), U = (0, o.useRef)(null), x = (0, o.useRef)(null), w = (0, o.useRef)(null), y = _ ? 25 + 30 * !!c : i;
        (0, o.useEffect)(() => {
          G(!0)
        }, []);
        let j = (0, o.useCallback)(() => {
            U.current && (clearTimeout(U.current), U.current = null)
          }, []),
          C = (0, o.useCallback)(e => {
            if (m) return;
            let a = e?.immediate ?? !1;
            (j(), a || y <= 0) ? b(!0): U.current = setTimeout(() => b(!0), y)
          }, [j, y, m]),
          k = (0, o.useCallback)(e => {
            j(), e?.immediate, b(!1)
          }, [j]);
        (0, o.useEffect)(() => () => {
          j()
        }, [j]), (0, o.useEffect)(() => {
          m && k({
            immediate: !0
          })
        }, [m, k]);
        let B = (e, a, t) => Math.min(Math.max(e, a), t),
          T = (0, o.useCallback)(() => {
            let e = x.current,
              a = w.current;
            if (!e || !a) return;
            let r = e.getBoundingClientRect(),
              n = a.getBoundingClientRect(),
              o = 0,
              i = 0;
            switch (t) {
              case "bottom":
                o = r.bottom + d, i = r.left + r.width / 2 - n.width / 2;
                break;
              case "left":
                o = r.top + r.height / 2 - n.height / 2, i = r.left - n.width - d;
                break;
              case "right":
                o = r.top + r.height / 2 - n.height / 2, i = r.right + d;
                break;
              default:
                o = r.top - n.height - d, i = r.left + r.width / 2 - n.width / 2
            }
            let s = window.innerWidth - n.width - 8,
              c = window.innerHeight - n.height - 8,
              l = n.width >= window.innerWidth ? 8 : B(i, 8, Math.max(8, s));
            S({
              top: n.height >= window.innerHeight ? 8 : B(o, 8, Math.max(8, c)),
              left: l
            })
          }, [d, t]);
        (0, o.useLayoutEffect)(() => {
          if (!p) return;
          T();
          let e = () => T();
          return window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
            window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0)
          }
        }, [T, p]);
        let M = (0, o.useCallback)(e => {
          e.stopPropagation(), g(!0), p ? k({
            immediate: !0
          }) : C({
            immediate: !0
          })
        }, [k, C, p]);
        (0, o.useEffect)(() => {
          if (!p || !h) return;
          let e = e => {
            x.current && (x.current.contains(e.target) || k({
              immediate: !0
            }))
          };
          return document.addEventListener("touchstart", e, {
            passive: !0
          }), () => {
            document.removeEventListener("touchstart", e)
          }
        }, [m, k, h, p]);
        let P = {
            "--tooltip-max-width": "number" == typeof l ? `${l}px` : l,
            top: `${N.top}px`,
            left: `${N.left}px`
          },
          A = (0, r.jsx)("span", {
            ref: w,
            className: `${s().tooltip} ${u??""}`,
            style: {
              ...P,
              borderColor: _ ? "#1a1a1a33" : "var(--tooltip-border-color)",
              backgroundColor: _ ? "#14141463" : "var(--tooltip-background-color)"
            },
            "data-visible": p,
            "data-placement": t,
            "aria-hidden": !p,
            role: "tooltip",
            children: e
          });
        return (0, r.jsxs)("span", {
          ref: x,
          className: `${s().wrapper} ${f??""}`,
          onMouseEnter: () => C(),
          onMouseLeave: () => k(),
          onFocusCapture: () => C(),
          onBlurCapture: () => k({
            immediate: !0
          }),
          onTouchStart: M,
          children: [a, v ? (0, n.createPortal)(A, document.body) : A]
        })
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
        menuCloseButton: "GUNS__71-38bb9deb-0f51a8cc-23535a63",
        menuCardButtons: "GUNS__59-37776ade-3b11f6ea-31dd64a4",
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
        creditCard: "GUNS__9b-9fdcc18a-fa12dc45-87cf6812",
        crypto: "GUNS__2c-6b47a8cf-5f7c4065-a666f83c",
        selectedMethod: "GUNS__0e-5295c890-b06ff73e-beb54108",
        paymentMethodButton: "GUNS__62-5c01fba5-5414bd53-1411908a",
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
        giveawayList: "GUNS__98-d8f2f94e-9e7d7516-b3b0cb80"
      }
    }
  }
]);