(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6788], {
    5585: e => {
      e.exports = {
        overlay: "modalWrapper_overlay__YYEDi",
        modal: "modalWrapper_modal__M1y6L",
        "overlay-fade-in": "modalWrapper_overlay-fade-in__xCPl5",
        "overlay-fade-out": "modalWrapper_overlay-fade-out__MSx7M",
        "modal-scale-in": "modalWrapper_modal-scale-in__Ld0gl",
        "modal-scale-out": "modalWrapper_modal-scale-out__IUp7n",
        header: "modalWrapper_header__cjFZs",
        title: "modalWrapper_title__RzvAM",
        closeButton: "modalWrapper_closeButton__Z8MLT",
        body: "modalWrapper_body__AsTAG"
      }
    },
    13699: (e, a, t) => {
      "use strict";
      t.d(a, {
        j: () => i,
        v: () => d
      });
      let o = "pricingPage",
        r = "upgradePremiumPopup",
        s = "dashboardUpgradeModal",
        n = "badgePage",
        d = {
          pricing: o,
          popup: r,
          modal: s,
          badges: n,
          aliasManager: "accountAliasManager"
        },
        i = {
          pricing: `${o}Gift`,
          popup: `${r}Gift`,
          modal: `${s}Gift`,
          badges: `${n}Gift`
        }
    },
    24579: e => {
      e.exports = {
        wrapper: "tooltipWrapper_wrapper__XIQY2",
        tooltip: "tooltipWrapper_tooltip__vVc01"
      }
    },
    37897: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var o = t(95155),
        r = t(12115),
        s = t(98241),
        n = t.n(s),
        d = t(54834);

      function i({
        featureName: e,
        onChangeFunction: a,
        value: t,
        placeholder: s,
        icon: i,
        prefix: u,
        prefixLength: l,
        viewPassword: c,
        onKeyPress: _,
        isImageUrl: h,
        type: m = "text",
        ...p
      }) {
        let [g, f] = (0, r.useState)(!!c);
        return (0, r.useEffect)(() => {
          f(!!c)
        }, [c]), (0, o.jsxs)("div", {
          className: n().inputContainerWrapper,
          "data-dashboard-feature-label": "string" == typeof e ? e : void 0,
          children: [e && (0, o.jsx)("h1", {
            className: n().featureName,
            children: e
          }), (0, o.jsxs)("div", {
            className: `${n().inputWrapperDiv} ${u&&n().inputWrapperURL}`,
            children: [(0, o.jsxs)("span", {
              className: n().inputWrapperSpan,
              style: {
                position: u ? "absolute" : "static"
              },
              children: [h ? (0, o.jsx)("img", {
                src: i,
                alt: "icon",
                className: n().inputWrapperIconImage
              }) : i, u && (0, o.jsx)("h1", {
                children: u
              })]
            }), c && (0, o.jsx)("p", {
              onClick: () => {
                f(!g)
              },
              children: g ? d.A.hidePassword : d.A.views
            }), (0, o.jsx)("input", {
              autoCorrect: "false",
              type: c ? g ? "password" : "text" : m,
              onKeyDown: _,
              value: t,
              style: {
                paddingLeft: u ? l : "",
                paddingRight: c ? 47 : ""
              },
              placeholder: s,
              className: n().inputWrapperInput,
              onChange: a,
              ...p
            })]
          })]
        })
      }
    },
    41458: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => w
      });
      var o = t(95155),
        r = t(54834),
        s = t(98241),
        n = t.n(s),
        d = t(37897),
        i = t(12115),
        u = t(58295),
        l = t(66609),
        c = t(98500),
        _ = t.n(c),
        h = t(50686),
        m = t(91801),
        p = t.n(m),
        g = t(97478),
        f = t(3434),
        y = t(38256);

      function b({
        continueFunction: e,
        customBadgeData: a,
        setCustomBadgeData: t
      }) {
        let r = (0, y.kj)();

        function s(e) {
          let a = 7.99 * e ** .95,
            t = 7.99 * e,
            o = (1 - a / t) * 100;
          return {
            totalPrice: parseFloat(a.toFixed(2)),
            rawPrice: parseFloat(t.toFixed(2)),
            discountPercent: parseFloat(o.toFixed(0))
          }
        }
        let n = a.amount > 1 ? (0, o.jsxs)(o.Fragment, {
          children: [s(a.amount).totalPrice, "€ ", (0, o.jsxs)("s", {
            children: [s(a.amount).rawPrice, "€"]
          })]
        }) : (0, o.jsxs)(o.Fragment, {
          children: [s(a.amount).totalPrice, "€"]
        });
        return (0, o.jsxs)("div", {
          className: p().CustomBadgePurchaseModal,
          children: [(0, o.jsx)(g.A, {
            featureName: r("modals.custom_badge.title_gift"),
            value: a.amount,
            min: 1,
            max: 500,
            onChange: e => t({
              ...a,
              amount: e
            }),
            icon: f.A.shoppingBag
          }), (0, o.jsxs)("div", {
            className: p().CustomBadgePurchaseModalDiscount,
            children: [(0, o.jsx)("h1", {
              children: r("modals.custom_badge.information_text_gift")
            }), (0, o.jsx)("h3", {
              children: r("modals.custom_badge.description_gift", {
                percentage: s(a.amount).discountPercent,
                amount: a.amount
              })
            })]
          }), (0, o.jsx)("span", {
            className: p().CustomBadgePurchaseModalButton,
            onClick: o => {
              t({
                ...a,
                totalPrice: s(a.amount).totalPrice
              }), e(o)
            },
            children: r("modals.custom_badge.purchase_text", {
              price: n
            })
          })]
        })
      }
      var L = t(61778),
        v = t(57776);

      function w({
        defaultSelection: e,
        redirectLogin: a,
        showGiftContainer: t,
        purchaseSource: s = "unknown"
      }) {
        let c = (0, y.kj)(),
          m = (0, y.VJ)(),
          p = {
            imagehost: c("modals.gift.gift_imagehost"),
            premiumLifetime: c("modals.gift.gift_premium"),
            verified: c("modals.gift.gift_verified_badge"),
            custombadge: c("modals.gift.gift_custom_badge")
          },
          [g, f] = (0, i.useState)(!1),
          [w, x] = (0, i.useState)(""),
          [C, B] = (0, i.useState)(""),
          [j, S] = (0, i.useState)({
            displayName: "",
            username: "",
            avatar: "",
            found: !1
          }),
          [N, T] = (0, i.useState)(e),
          [M, k] = (0, i.useState)(!1),
          [A, P] = (0, i.useState)(!1),
          [D, W] = (0, i.useState)({
            amount: 1,
            totalPrice: 0
          }),
          E = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 12q-1.65 0-2.825-1.175T7 8t1.175-2.825T11 4t2.825 1.175T15 8t-1.175 2.825T11 12m11.1 11.5l-3.2-3.2q-.525.3-1.125.5T16.5 21q-1.875 0-3.187-1.312T12 16.5t1.313-3.187T16.5 12t3.188 1.313T21 16.5q0 .675-.2 1.275t-.5 1.125l3.2 3.2zM16.5 19q1.05 0 1.775-.725T19 16.5t-.725-1.775T16.5 14t-1.775.725T14 16.5t.725 1.775T16.5 19m-5.475-6q-1.05 1.55-1.05 3.5t1.05 3.5H3v-2.775q0-.85.425-1.575t1.175-1.1q1.275-.65 2.875-1.1t3.55-.45"></path></svg>',
          I = async (e, a = !1) => {
            if (!w) return void l.oR.error(c("modals.gift.error_gift_username"));
            if (!N) return void l.oR.error(c("modals.gift.error_gift_product"));
            let t = await R(e, !1);
            (j.found || t) && (a ? P(!0) : k(!0))
          }, R = async (e, a = !0) => {
            try {
              e.target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeDasharray="15" strokeDashoffset="15" strokeLinecap="round" strokeWidth="2" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"></animate><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></svg>';
              let t = await fetch("https://guns.lol/api/gift/user", {
                  method: "POST",
                  body: JSON.stringify({
                    username: w
                  })
                }),
                o = await t.json();
              if (!t.ok) return e.target.innerHTML = a ? E : c("modals.gift.continue_button"), l.oR.error(o.error), null;
              {
                let t = {
                  displayName: o.display_name,
                  username: w,
                  avatar: o.avatar,
                  found: !0
                };
                return S(t), e.target.innerHTML = a ? E : c("modals.gift.continue_button"), t
              }
            } finally {
              e.target.innerHTML = a ? E : c("modals.gift.continue_button")
            }
          }, $ = M || A ? A && !M ? (0, o.jsx)(b, {
            continueFunction: I,
            customBadgeData: D,
            setCustomBadgeData: W
          }) : (0, o.jsx)(h.A, {
            type: N,
            gift: !0,
            giftMessage: C,
            username: w,
            customBadgeData: "custombadge" === N ? D : void 0,
            purchaseSource: s
          }) : (0, o.jsxs)("div", {
            children: [(0, o.jsxs)("h1", {
              className: n().giftBanner,
              children: [r.A.gift, (0, o.jsxs)("div", {
                className: n().giftBannerContent,
                children: [" ", c("modals.gift.gift_badge_text", {
                  exclusive: (0, o.jsx)("span", {
                    children: "exclusive"
                  })
                })]
              })]
            }), (0, o.jsxs)("div", {
              className: n().giftModal,
              children: [(0, o.jsx)("img", {
                className: n().giftImage,
                src: "https://assets.guns.lol/present_asset.png"
              }), (0, o.jsxs)("div", {
                className: n().giftInformation,
                children: [(0, o.jsx)("div", {
                  className: n().usernameSearch,
                  children: j.found ? (0, o.jsxs)("div", {
                    className: n().user,
                    children: [(0, o.jsx)("img", {
                      src: j.avatar,
                      alt: ""
                    }), (0, o.jsxs)("div", {
                      className: n().userDescription,
                      children: [(0, o.jsx)("h1", {
                        children: "" !== j.displayName ? j.displayName : j.username
                      }), (0, o.jsxs)(_(), {
                        href: `/${j.username}`,
                        target: "_blank",
                        children: ["guns.lol/", j.username]
                      })]
                    }), (0, o.jsxs)("span", {
                      className: n().removeUser,
                      onClick: () => {
                        S({
                          displayName: "",
                          username: "",
                          avatar: "",
                          found: !1
                        }), x("")
                      },
                      children: [r.A.removeUser, " ", c("modals.gift.change_user")]
                    })]
                  }) : (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(d.A, {
                      featureName: c("modals.gift.gift_inputs.send_to"),
                      onChangeFunction: e => {
                        x(e.target.value)
                      },
                      value: w,
                      placeholder: "Username",
                      icon: r.A.user
                    }), (0, o.jsx)("span", {
                      className: n().searchButton,
                      onClick: R,
                      children: r.A.usernameSearch
                    })]
                  })
                }), (0, o.jsx)(u.A, {
                  featureName: c("modals.gift.gift_inputs.gift_message"),
                  placeholder: c("modals.gift.gift_inputs.gift_message_placeholder"),
                  onChangeFunction: e => {
                    B(e.target.value)
                  },
                  value: C
                }), (0, o.jsxs)("div", {
                  className: n().yourGift,
                  children: [(0, o.jsx)("h1", {
                    className: n().yourGiftText,
                    children: c("modals.gift.your_gift")
                  }), (0, o.jsxs)("div", {
                    className: n().giftTypes,
                    children: [(0, o.jsxs)("div", {
                      className: `${n().giftContainer} ${"verified"===N&&n().selectedGift}`,
                      onClick: () => T("verified"),
                      children: [(0, o.jsxs)("div", {
                        className: n().giftDescription,
                        children: [(0, o.jsxs)("h1", {
                          children: ["guns.lol ", c("common.pricing.verified.name")]
                        }), (0, o.jsx)("h3", {
                          children: c("modals.gift.gift_verified_badge")
                        })]
                      }), (0, o.jsx)("span", {
                        className: n().priceText,
                        children: (0, o.jsx)("strong", {
                          children: "14,99€"
                        })
                      })]
                    }), (0, o.jsxs)("div", {
                      className: `${n().giftContainer} ${"custombadge"===N&&n().selectedGift}`,
                      onClick: () => T("custombadge"),
                      children: [(0, o.jsxs)("div", {
                        className: n().giftDescription,
                        children: [(0, o.jsxs)("h1", {
                          children: ["guns.lol ", c("common.pricing.custom_badge.name")]
                        }), (0, o.jsx)("h3", {
                          children: c("modals.gift.gift_custom_badge")
                        })]
                      }), (0, o.jsx)("span", {
                        className: n().priceText,
                        children: (0, o.jsx)("strong", {
                          children: "8,99€"
                        })
                      })]
                    }), (0, o.jsxs)("div", {
                      className: `${n().giftContainer} ${"premiumLifetime"===N&&n().selectedGift}`,
                      onClick: () => T("premiumLifetime"),
                      children: [(0, o.jsxs)("div", {
                        className: n().giftDescription,
                        children: [(0, o.jsxs)("h1", {
                          children: ["guns.lol ", c("common.pricing.premium_plan.name"), " ", (0, o.jsx)("span", {
                            className: n().saveText,
                            children: c("modals.gift.save_premium")
                          })]
                        }), (0, o.jsx)("h3", {
                          children: c("modals.gift.gift_premium")
                        })]
                      }), (0, o.jsx)("span", {
                        className: n().priceText,
                        children: (0, o.jsx)("strong", {
                          children: "7,19€"
                        })
                      })]
                    }), (0, o.jsxs)("div", {
                      className: `${n().giftContainer} ${"imagehost"===N&&n().selectedGift}`,
                      onClick: () => T("imagehost"),
                      children: [(0, o.jsxs)("div", {
                        className: n().giftDescription,
                        children: [(0, o.jsxs)("h1", {
                          children: ["guns.lol ", c("common.pricing.imagehost_plan.name")]
                        }), (0, o.jsx)("h3", {
                          children: c("modals.gift.gift_imagehost")
                        })]
                      }), (0, o.jsx)("span", {
                        className: n().priceText,
                        children: (0, o.jsx)("strong", {
                          children: "4,99€"
                        })
                      })]
                    })]
                  })]
                }), (0, o.jsx)("div", {
                  className: n().buttonWrapper,
                  children: (0, o.jsx)("span", {
                    className: n().continueButton,
                    onClick: e => I(e, "custombadge" === N),
                    children: c("modals.gift.continue_button")
                  })
                })]
              })]
            })]
          });
        return (0, o.jsxs)(o.Fragment, {
          children: [(0, o.jsx)(v.A, {
            opened: g,
            onClose: () => {
              f(!1), setTimeout(() => {
                k(!1), P(!1), W({
                  amount: 1,
                  totalPrice: 0
                })
              }, 500)
            },
            title: p[N],
            centered: !0,
            size: "auto",
            children: $
          }), t ? $ : (0, o.jsx)(L.A, {
            content: p[e],
            offset: 15,
            children: (0, o.jsx)("span", {
              className: n().giftButton,
              onClick: () => {
                a ? location.href = m("/login?returnUri=/pricing") : (f(!0), T(e))
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
        A: () => m
      });
      var o = t(95155),
        r = t(91801),
        s = t.n(r),
        n = t(3434);
      async function d(e, a, t, o, r, s = "unknown", n = "en") {
        let i = await fetch("https://guns.lol/api/billing/createCheckout", {
            method: "POST",
            body: JSON.stringify({
              type: e,
              donation_amount: a,
              credits: t,
              badge_data: o,
              alias_credits: r,
              metadata: {
                purchase_source: s,
                current_url: window.location.pathname,
                referrer: document.referrer,
                locale: n
              }
            })
          }),
          u = await i.json();
        return i.ok ? (window.location.href = u.session, u.session) : {
          error: !0,
          message: u.error
        }
      }
      var i = t(66609),
        u = t(12115);
      async function l(e, a, t, o, r = "unknown", s = "en") {
        let n = await fetch("https://guns.lol/api/billing/giftCheckout", {
            method: "POST",
            body: JSON.stringify({
              type: e,
              username: a,
              gift_message: t,
              badge_data: o,
              metadata: {
                purchase_source: r,
                current_url: window.location.pathname,
                referrer: document.referrer,
                locale: s
              }
            })
          }),
          d = await n.json();
        return n.ok ? (window.location.href = d.session, d.session) : {
          error: !0,
          message: d.error
        }
      }
      async function c(e, a, t, o, r = "unknown") {
        let s = await fetch("https://guns.lol/api/billing/giftCryptoCheckout", {
            method: "POST",
            body: JSON.stringify({
              type: e,
              username: a,
              gift_message: t,
              badge_data: o,
              metadata: {
                purchase_source: r,
                current_url: window.location.pathname,
                referrer: document.referrer
              }
            })
          }),
          n = await s.json();
        return s.ok ? (window.location.href = n.session, n.session) : {
          error: !0,
          message: n.error
        }
      }
      async function _(e, a, t, o, r, s = "unknown") {
        let n = await fetch("https://guns.lol/api/billing/createCryptoCheckout", {
            method: "POST",
            body: JSON.stringify({
              type: e,
              donation_amount: a,
              credits: t,
              badge_data: o,
              alias_credits: r,
              metadata: {
                purchase_source: s,
                current_url: window.location.pathname,
                referrer: document.referrer
              }
            })
          }),
          d = await n.json();
        return n.ok ? (window.location.href = d.session, d.session) : {
          error: !0,
          message: d.error
        }
      }
      var h = t(38256);

      function m({
        type: e,
        donationAmount: a,
        gift: t,
        giftMessage: r,
        username: m,
        creditsData: p,
        customBadgeData: g,
        aliasCreditsData: f,
        purchaseSource: y = "unknown"
      }) {
        let b = (0, h.kj)(),
          L = (0, h.useLang)(),
          [v, w] = (0, u.useState)(""),
          [x, C] = (0, u.useState)(!1),
          B = e.toLowerCase(),
          j = {
            premiumlifetime: {
              name: `${b("common.pricing.premium_plan.name")} ${b("common.pricing.lifetime_text")}`,
              price: t ? "7,19€" : "7,99€"
            },
            imagehost: {
              name: b("common.pricing.imagehost_plan.name"),
              price: "4,99€"
            },
            donation: {
              name: b("common.pricing.donation.name"),
              price: a + "€"
            },
            verified: {
              name: b("common.pricing.verified.name"),
              price: "14,99€"
            },
            credits: {
              name: `${p?.amount}x ${b("common.pricing.custom_badge_credits.name")}`,
              price: p?.totalPrice + "€"
            },
            custombadge: {
              name: `${g?.amount}x ${b("common.pricing.custom_badge.name")}`,
              price: g?.totalPrice + "€"
            },
            aliascredits: {
              name: `${f?.amount}x Alias Credits`,
              price: f?.totalPrice + "€"
            }
          } [B],
          S = async o => {
            if (C(!1), !v) return void C(!0);
            if (t && !m) return void i.oR.error(b("modals.payment_methods.unknown_error"));
            let s = o.currentTarget,
              n = b("modals.payment_methods.purchase");
            s.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeDasharray="15" strokeDashoffset="15" strokeLinecap="round" strokeWidth="2" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"></animate><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></svg>', s.style.pointerEvents = "none";
            let u = null;
            try {
              let o = !!(t && m);
              "card" === v ? u = o ? await l(e, m, r ?? "", g, y, L) : await d(e, a, p, g, f, y, L) : "crypto" === v && (u = o ? await c(e, m, r ?? "", g, y) : await _(e, a, p, g, f, y))
            } catch (e) {
              i.oR.error(b("modals.payment_methods.unknown_error"))
            }
            u && u.error && (i.oR.error(u.message ?? b("modals.payment_methods.unknown_error")), s.style.pointerEvents = "auto", s.innerHTML = n)
          }, N = e => {
            e === v ? w("") : w(e)
          };
        return (0, o.jsxs)("div", {
          className: s().paymentMethods,
          children: [(0, o.jsxs)("div", {
            className: s().product,
            children: [n.A.cart, (0, o.jsxs)("div", {
              className: s().productInformation,
              children: [(0, o.jsxs)("h1", {
                children: [j.name, " ", t && b("modals.payment_methods.gift")]
              }), (0, o.jsx)("h3", {
                children: b("modals.payment_methods.one_time_payment_text", {
                  price: j.price
                })
              })]
            })]
          }), (0, o.jsxs)("div", {
            className: `${s().creditCard} ${"card"===v&&s().selectedMethod} `,
            onClick: () => N("card"),
            children: [(0, o.jsx)("h1", {
              children: b("modals.payment_methods.payment_method_card")
            }), " ", n.A.card, " ", n.A.paypal, " ", n.A.cashapp, " ", n.A.applepay, " ", n.A.googlepay]
          }), (0, o.jsxs)("div", {
            className: `${s().crypto} ${"crypto"===v&&s().selectedMethod} `,
            onClick: () => N("crypto"),
            children: [(0, o.jsx)("h1", {
              children: b("modals.payment_methods.payment_method_crypto")
            }), " ", n.A.bitcoin, n.A.litecoin, "  ", n.A.usdt, " ", n.A.monero, " ", n.A.eth, " ", (0, o.jsx)("span", {
              children: b("modals.payment_methods.more_crypto_text")
            })]
          }), x && (0, o.jsx)("span", {
            className: s().error,
            children: b("modals.payment_methods.error_select_payment_method")
          }), (0, o.jsx)("span", {
            className: s().paymentMethodButton,
            style: {
              marginTop: x ? "0px" : "10px"
            },
            onClick: S,
            children: b("modals.payment_methods.purchase")
          })]
        })
      }
    },
    57776: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var o = t(95155),
        r = t(12115),
        s = t(47650),
        n = t(5585),
        d = t.n(n);

      function i({
        opened: e,
        onClose: a,
        onOverlayClose: t,
        onCloseButtonClick: n,
        onEscapeClose: i,
        title: u,
        centered: l = !0,
        size: c = "auto",
        closeOnOverlayClick: _ = !0,
        withCloseButton: h = !0,
        centerTitle: m = !1,
        className: p,
        bodyClassName: g,
        children: f
      }) {
        let [y, b] = (0, r.useState)(e), [L, v] = (0, r.useState)(!1), [w, x] = (0, r.useState)(null), C = (0, r.useRef)(null), B = (0, r.useRef)(null), j = (0, r.useRef)(null), S = (0, r.useRef)(!1), N = e => {
          if (!e) return !1;
          let a = window.getComputedStyle(e).overflowY;
          return e.scrollHeight > e.clientHeight + 1 && ("auto" === a || "scroll" === a)
        }, T = e => {
          let a = B.current;
          if (!a || !e) return null;
          let t = e;
          for (; t && a.contains(t);) {
            if (N(t)) return t;
            t = t.parentElement
          }
          return null
        }, M = (e, a) => a < 0 ? e.scrollTop > 0 : !(a > 0) || e.scrollTop + e.clientHeight < e.scrollHeight;
        if ((0, r.useEffect)(() => {
            if (e) {
              b(!0), v(!1);
              return
            }
            return v(!0), C.current = setTimeout(() => {
              b(!1), v(!1)
            }, 180), () => {
              C.current && (clearTimeout(C.current), C.current = null)
            }
          }, [e]), (0, r.useEffect)(() => {
            if ("undefined" == typeof document) return;
            let e = document.createElement("div");
            return document.body.appendChild(e), x(e), () => {
              document.body.removeChild(e), x(null)
            }
          }, []), (0, r.useEffect)(() => {
            if (!y) return;
            let e = e => {
                "Escape" === e.key ? i ? i() : a() : ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(e.key) && !B.current?.contains(e.target) && e.preventDefault()
              },
              t = e => {
                let a = B.current;
                if (!a) return void e.preventDefault();
                let t = e.target;
                if (!(t && a.contains(t))) return void e.preventDefault();
                if (e instanceof WheelEvent) {
                  let a = T(t);
                  a && M(a, e.deltaY) || e.preventDefault();
                  return
                }
                if (e instanceof TouchEvent) {
                  let a = e.touches[0]?.clientY ?? null,
                    o = j.current;
                  j.current = a;
                  let r = T(t);
                  r && M(r, null !== o && null !== a ? o - a : 0) || e.preventDefault()
                }
              },
              o = {
                passive: !1
              };
            return window.addEventListener("keydown", e, {
              passive: !1
            }), window.addEventListener("wheel", t, o), window.addEventListener("touchmove", t, o), () => {
              window.removeEventListener("keydown", e), window.removeEventListener("wheel", t, o), window.removeEventListener("touchmove", t, o)
            }
          }, [M, T, a, i, y]), (0, r.useEffect)(() => {
            if (!y) return;
            let e = e => {
              if (!B.current?.contains(e.target)) {
                j.current = null;
                return
              }
              j.current = e.touches[0]?.clientY ?? null
            };
            return window.addEventListener("touchstart", e, {
              passive: !0
            }), () => window.removeEventListener("touchstart", e)
          }, [y]), !y || !w) return null;
        let k = "number" == typeof c ? `${c}px` : c,
          A = {};
        k && "auto" !== k ? A.maxWidth = k : (A.width = "fit-content", A.maxWidth = "clamp(100%, 100%, 850px)", A.boxSizing = "border-box");
        let P = L ? "closing" : "open",
          D = (0, o.jsx)("div", {
            className: d().overlay,
            "data-centered": l,
            "data-state": P,
            onMouseDown: e => {
              S.current = e.target === e.currentTarget
            },
            onClick: e => {
              let o = e.target === e.currentTarget,
                r = _ && o && S.current;
              S.current = !1, r && (t ? t() : a())
            },
            children: (0, o.jsxs)("div", {
              className: `${d().modal} ${p??""}`,
              "data-state": P,
              style: A,
              ref: B,
              onClick: e => e.stopPropagation(),
              children: [(u || h) && (0, o.jsxs)("div", {
                className: d().header,
                children: [u && (0, o.jsx)("h2", {
                  className: d().title,
                  style: m ? {
                    textAlign: "center",
                    width: "100%"
                  } : {},
                  children: u
                }), h && (0, o.jsx)("button", {
                  type: "button",
                  className: d().closeButton,
                  onClick: n ?? a,
                  children: (0, o.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1em",
                    height: "1em",
                    viewBox: "7.43 7.45 9.15 9.15",
                    children: (0, o.jsx)("path", {
                      fill: "currentColor",
                      d: "m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"
                    })
                  })
                })]
              }), (0, o.jsx)("div", {
                className: `${d().body} ${g??""}`,
                children: f
              })]
            })
          });
        return (0, s.createPortal)(D, w)
      }
    },
    61778: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => u
      });
      var o = t(95155),
        r = t(47650),
        s = t(12115),
        n = t(24579),
        d = t.n(n);
      let i = "undefined" != typeof navigator && /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      function u({
        content: e,
        children: a,
        placement: t = "top",
        delay: n = 110,
        offset: u = 10,
        maxWidth: l = 260,
        className: c,
        tooltipClassName: _,
        hideTooltip: h = !1,
        pageTooltipStyles: m = !1
      }) {
        let [p, g] = (0, s.useState)(!1), [f, y] = (0, s.useState)(!1), [b, L] = (0, s.useState)({
          top: 0,
          left: 0
        }), [v, w] = (0, s.useState)(!1), x = (0, s.useRef)(null), C = (0, s.useRef)(null), B = (0, s.useRef)(null), j = m ? 25 + 30 * !!i : n;
        (0, s.useEffect)(() => {
          w(!0)
        }, []);
        let S = (0, s.useCallback)(() => {
            x.current && (clearTimeout(x.current), x.current = null)
          }, []),
          N = (0, s.useCallback)(() => "undefined" != typeof document && "active" === document.documentElement.getAttribute("data-user-page-enter-transition"), []),
          T = (0, s.useCallback)(e => {
            if (h || N()) return;
            let a = e?.immediate ?? !1;
            (S(), a || j <= 0) ? g(!0): x.current = setTimeout(() => g(!0), j)
          }, [S, j, h, N]),
          M = (0, s.useCallback)(e => {
            S(), e?.immediate, g(!1)
          }, [S]);
        (0, s.useEffect)(() => () => {
          S()
        }, [S]), (0, s.useEffect)(() => {
          h && M({
            immediate: !0
          })
        }, [h, M]);
        let k = (e, a, t) => Math.min(Math.max(e, a), t),
          A = (0, s.useCallback)(() => {
            let e = C.current,
              a = B.current;
            if (!e || !a) return;
            let o = e.getBoundingClientRect(),
              r = a.getBoundingClientRect(),
              s = 0,
              n = 0;
            switch (t) {
              case "bottom":
                s = o.bottom + u, n = o.left + o.width / 2 - r.width / 2;
                break;
              case "left":
                s = o.top + o.height / 2 - r.height / 2, n = o.left - r.width - u;
                break;
              case "right":
                s = o.top + o.height / 2 - r.height / 2, n = o.right + u;
                break;
              default:
                s = o.top - r.height - u, n = o.left + o.width / 2 - r.width / 2
            }
            let d = window.innerWidth - r.width - 8,
              i = window.innerHeight - r.height - 8,
              l = r.width >= window.innerWidth ? 8 : k(n, 8, Math.max(8, d));
            L({
              top: r.height >= window.innerHeight ? 8 : k(s, 8, Math.max(8, i)),
              left: l
            })
          }, [u, t]);
        (0, s.useLayoutEffect)(() => {
          if (!p) return;
          A();
          let e = () => A();
          return window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
            window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0)
          }
        }, [A, p]);
        let P = (0, s.useCallback)(e => {
          N() || (e.stopPropagation(), y(!0), p ? M({
            immediate: !0
          }) : T({
            immediate: !0
          }))
        }, [M, N, T, p]);
        (0, s.useEffect)(() => {
          if (!p || !f) return;
          let e = e => {
            C.current && (C.current.contains(e.target) || M({
              immediate: !0
            }))
          };
          return document.addEventListener("touchstart", e, {
            passive: !0
          }), () => {
            document.removeEventListener("touchstart", e)
          }
        }, [h, M, f, p]);
        let D = {
            "--tooltip-max-width": "number" == typeof l ? `${l}px` : l,
            top: `${b.top}px`,
            left: `${b.left}px`
          },
          W = (0, o.jsx)("span", {
            ref: B,
            className: `${d().tooltip} ${_??""}`,
            style: {
              ...D,
              borderColor: m ? "#1a1a1a33" : "var(--tooltip-border-color)",
              backgroundColor: m ? "#14141463" : "var(--tooltip-background-color)"
            },
            "data-visible": p,
            "data-placement": t,
            children: e
          });
        return (0, o.jsxs)("span", {
          ref: C,
          className: `${d().wrapper} ${c??""}`,
          onMouseEnter: () => T(),
          onMouseLeave: () => M(),
          onFocusCapture: () => T(),
          onBlurCapture: () => M({
            immediate: !0
          }),
          onTouchStart: P,
          children: [a, v ? (0, r.createPortal)(W, document.body) : W]
        })
      }
    },
    91801: e => {
      e.exports = {
        dashboardLayout: "dashboardLayout_dashboardLayout__g4AVU",
        layoutWrapper: "dashboardLayout_layoutWrapper__tQ3A7",
        menu: "dashboardLayout_menu__q6wlL",
        mainContent: "dashboardLayout_mainContent__TfrZj",
        userCard: "dashboardLayout_userCard__pXLCi",
        userInformation: "dashboardLayout_userInformation__p0IVn",
        menuNavigation: "dashboardLayout_menuNavigation__ZYglX",
        navigation: "dashboardLayout_navigation__b8yFL",
        dashboardDropdownNavigation: "dashboardLayout_dashboardDropdownNavigation__qTBZd",
        imagehostButton: "dashboardLayout_imagehostButton__2dd7C",
        premiumButton: "dashboardLayout_premiumButton___eWcN",
        current: "dashboardLayout_current__kgxGn",
        menuCard: "dashboardLayout_menuCard__hvfac",
        otherIcon: "dashboardLayout_otherIcon__KB6jx",
        menuCardInformation: "dashboardLayout_menuCardInformation__e0EmF",
        menuCardDescription: "dashboardLayout_menuCardDescription__RZQt8",
        quickLinks: "dashboardLayout_quickLinks___Ft8O",
        discordLink: "dashboardLayout_discordLink__tQY7O",
        myPage: "dashboardLayout_myPage__OirQR",
        bottomWrapper: "dashboardLayout_bottomWrapper__lnzyr",
        dashboardLayoutMobile: "dashboardLayout_dashboardLayoutMobile__fP9rR",
        subscriptionExpires: "dashboardLayout_subscriptionExpires__IyefQ",
        show: "dashboardLayout_show___PbL1",
        mobileHeaderControls: "dashboardLayout_mobileHeaderControls__Ywzfz",
        mobileHeaderIconButton: "dashboardLayout_mobileHeaderIconButton__W50YP",
        mobileDiscordButton: "dashboardLayout_mobileDiscordButton__40_Kc",
        dashboardSearchMobileButton: "dashboardLayout_dashboardSearchMobileButton__vy8Tb",
        menuCloseButton: "dashboardLayout_menuCloseButton__f7DAN",
        menuCardButtons: "dashboardLayout_menuCardButtons__haoVb",
        menuCardHome: "dashboardLayout_menuCardHome__gDMXd",
        menuCardLeaderboard: "dashboardLayout_menuCardLeaderboard__mfK87",
        menuCardDiscord: "dashboardLayout_menuCardDiscord__q_DWA",
        menuCardLogout: "dashboardLayout_menuCardLogout__orovc",
        popoverTextWrapper: "dashboardLayout_popoverTextWrapper__Apj1d",
        "custom-mt": "dashboardLayout_custom-mt__BomMA",
        dashboardDropdownNavigationSelected: "dashboardLayout_dashboardDropdownNavigationSelected__cSkDN",
        accountTabWrapper: "dashboardLayout_accountTabWrapper__mZoa7",
        premiumTabWrapper: "dashboardLayout_premiumTabWrapper__7TR1X",
        imagehostTabWrapper: "dashboardLayout_imagehostTabWrapper__kpd6e",
        price: "dashboardLayout_price__52A4J",
        lifetimeText: "dashboardLayout_lifetimeText__I30xV",
        features: "dashboardLayout_features__7CtGQ",
        purchaseButton: "dashboardLayout_purchaseButton__T5jUm",
        imagehostModal: "dashboardLayout_imagehostModal__iwlXj",
        premiumModal: "dashboardLayout_premiumModal__pZWzz",
        imagehostText: "dashboardLayout_imagehostText__3ojM_",
        premiumText: "dashboardLayout_premiumText__YkS8w",
        learnMore: "dashboardLayout_learnMore__Ozxpg",
        premiumModalWrapper: "dashboardLayout_premiumModalWrapper__r3Y_Q",
        subscriptionType: "dashboardLayout_subscriptionType__mTZEw",
        selected: "dashboardLayout_selected__Inkfl",
        giftImage: "dashboardLayout_giftImage__niCdo",
        giveawayImage: "dashboardLayout_giveawayImage__ftnEQ",
        giftNotification: "dashboardLayout_giftNotification__1tSxu",
        giveawayNotification: "dashboardLayout_giveawayNotification__BxRMJ",
        giftDescription: "dashboardLayout_giftDescription__9jF_g",
        giveawayDescription: "dashboardLayout_giveawayDescription__DgRYm",
        giftButtons: "dashboardLayout_giftButtons__mpGoK",
        giveawayButtons: "dashboardLayout_giveawayButtons__65Wkp",
        giftMessageBox: "dashboardLayout_giftMessageBox__sij9j",
        planButtons: "dashboardLayout_planButtons__pXnUI",
        warningNotification: "dashboardLayout_warningNotification__Fw4DS",
        warningDescription: "dashboardLayout_warningDescription__6dg82",
        acceptButton: "dashboardLayout_acceptButton__Z1U6q",
        warningMessage: "dashboardLayout_warningMessage__bwLpX",
        donation: "dashboardLayout_donation__x6TNa",
        donateMoreText: "dashboardLayout_donateMoreText__HTlzi",
        alreadyDonatedText: "dashboardLayout_alreadyDonatedText__jFRpw",
        donationAmount: "dashboardLayout_donationAmount__a70T5",
        payButton: "dashboardLayout_payButton__zwfAC",
        paymentMethods: "dashboardLayout_paymentMethods__TZTDK",
        creditCard: "dashboardLayout_creditCard__XOQti",
        crypto: "dashboardLayout_crypto__634_4",
        selectedMethod: "dashboardLayout_selectedMethod__ujgBQ",
        paymentMethodButton: "dashboardLayout_paymentMethodButton__R5_2k",
        error: "dashboardLayout_error__ZTjEW",
        product: "dashboardLayout_product__n9gtA",
        productInformation: "dashboardLayout_productInformation__66b9l",
        shareButton: "dashboardLayout_shareButton__QVHsm",
        share: "dashboardLayout_share__t2Gzr",
        copyButtonWrapper: "dashboardLayout_copyButtonWrapper__27QZ1",
        copyButton: "dashboardLayout_copyButton__V9uPV",
        shareWrapper: "dashboardLayout_shareWrapper__kvRMN",
        shareOptions: "dashboardLayout_shareOptions__Ysv2t",
        shareOption: "dashboardLayout_shareOption__WBH_Y",
        getProfileViews: "dashboardLayout_getProfileViews__3c_ww",
        shareDescription: "dashboardLayout_shareDescription__hWgQ5",
        shareQRCodeDescription: "dashboardLayout_shareQRCodeDescription__4CALo",
        qrCode: "dashboardLayout_qrCode__VHGEX",
        download: "dashboardLayout_download__Lippd",
        contactOptionButtons: "dashboardLayout_contactOptionButtons__1Y3sM",
        supportContainer: "dashboardLayout_supportContainer__rj92s",
        loadingSkeleton: "dashboardLayout_loadingSkeleton__Br_Nk",
        loadingAnimation: "dashboardLayout_loadingAnimation__jaxcI",
        qrCodeContainer: "dashboardLayout_qrCodeContainer__eMjNi",
        discordAvatarContainer: "dashboardLayout_discordAvatarContainer__iblHM",
        loadingSkeletonAvatar: "dashboardLayout_loadingSkeletonAvatar__fQWqD",
        dashboardLogo: "dashboardLayout_dashboardLogo__S_94f",
        promoModal: "dashboardLayout_promoModal__V17DT",
        promoHeader: "dashboardLayout_promoHeader__m0YzF",
        promoActions: "dashboardLayout_promoActions__TwlDG",
        promoUpgrade: "dashboardLayout_promoUpgrade__VWJ1Y",
        promoDecline: "dashboardLayout_promoDecline__Cq56S",
        promoFeatures: "dashboardLayout_promoFeatures__zCQ6b",
        promoFeaturesWrapper: "dashboardLayout_promoFeaturesWrapper__7BxGC",
        promoFeaturesList: "dashboardLayout_promoFeaturesList__8fW3h",
        notificationPaginationControls: "dashboardLayout_notificationPaginationControls__tNNjj",
        deletionScheduledModal: "dashboardLayout_deletionScheduledModal__7FKJl",
        deletionScheduledMeta: "dashboardLayout_deletionScheduledMeta__C3pT6",
        deletionScheduledHint: "dashboardLayout_deletionScheduledHint__ALBnF",
        deletionScheduledError: "dashboardLayout_deletionScheduledError__urEDs",
        deletionScheduledActions: "dashboardLayout_deletionScheduledActions__uxC67",
        reactivateButton: "dashboardLayout_reactivateButton__l4_L6",
        logoutButton: "dashboardLayout_logoutButton__K5bwA",
        CustomBadgePurchaseModal: "dashboardLayout_CustomBadgePurchaseModal__1gw1J",
        CustomBadgePurchaseModalButton: "dashboardLayout_CustomBadgePurchaseModalButton__r_uNt",
        iconUpload: "dashboardLayout_iconUpload__ORcFl",
        uploadCardText: "dashboardLayout_uploadCardText__28BX1",
        uploaderMessage: "dashboardLayout_uploaderMessage__POLIw",
        uploadCardImage: "dashboardLayout_uploadCardImage__ky47y",
        uploaderHeadingText: "dashboardLayout_uploaderHeadingText__HJ_Yj",
        iconUploadWrapper: "dashboardLayout_iconUploadWrapper__un6tB",
        fileBadge: "dashboardLayout_fileBadge__HYft4",
        customBadgePreviewContainerWrapper: "dashboardLayout_customBadgePreviewContainerWrapper__dEj6m",
        customBadgePreviewContainer: "dashboardLayout_customBadgePreviewContainer__onYZv",
        customBadgePreview: "dashboardLayout_customBadgePreview__wbGv9",
        customBadgePreviewText: "dashboardLayout_customBadgePreviewText__bldis",
        customBadgePreviewDiv: "dashboardLayout_customBadgePreviewDiv__RSthh",
        customBadgeIconText: "dashboardLayout_customBadgeIconText__w_290",
        customBadgeNotificationHeader: "dashboardLayout_customBadgeNotificationHeader__Xt53y",
        customBadgeNotificationContainer: "dashboardLayout_customBadgeNotificationContainer__0jAx2",
        createCustomBadgeButton: "dashboardLayout_createCustomBadgeButton__6jlzE",
        customBadgeGuidelinesContainer: "dashboardLayout_customBadgeGuidelinesContainer__CdQm7",
        customBadgeConfirmationContainer: "dashboardLayout_customBadgeConfirmationContainer__RJhwE",
        customBadgeConfirmationText: "dashboardLayout_customBadgeConfirmationText__2y4BT",
        customBadgeConfirmationActions: "dashboardLayout_customBadgeConfirmationActions__zk8zn",
        CustomBadgePurchaseModalDiscount: "dashboardLayout_CustomBadgePurchaseModalDiscount__MERd2",
        trustpilotNotification: "dashboardLayout_trustpilotNotification__uuyNA",
        trustpilotButtons: "dashboardLayout_trustpilotButtons__3EaNw",
        giveawayItem: "dashboardLayout_giveawayItem__cFgMA",
        giveawayList: "dashboardLayout_giveawayList__MRIIq",
        dashboardSearchButtonContainer: "dashboardLayout_dashboardSearchButtonContainer__d9JY_",
        dashboardSearchButton: "dashboardLayout_dashboardSearchButton__rA1AM",
        featureSearchInputWrapper: "dashboardLayout_featureSearchInputWrapper___l2_p",
        featureSearchResult: "dashboardLayout_featureSearchResult__SavYd",
        dashboardSearchIcon: "dashboardLayout_dashboardSearchIcon__uUCES",
        dashboardSearchText: "dashboardLayout_dashboardSearchText__umu1e",
        featureSearchModal: "dashboardLayout_featureSearchModal__zDIQl",
        featureSearchModalBody: "dashboardLayout_featureSearchModalBody__In6Vb",
        featureSearch: "dashboardLayout_featureSearch__rEze_",
        featureSearchInputShell: "dashboardLayout_featureSearchInputShell__cSaJG",
        featureSearchClearButton: "dashboardLayout_featureSearchClearButton__gYBgr",
        featureSearchMeta: "dashboardLayout_featureSearchMeta__g1MwM",
        featureSearchResults: "dashboardLayout_featureSearchResults__RaSPq",
        featureSearchGroup: "dashboardLayout_featureSearchGroup__VG3Ug",
        featureSearchGroupTitle: "dashboardLayout_featureSearchGroupTitle__ZcG1T",
        featureSearchGroupItems: "dashboardLayout_featureSearchGroupItems__a4tA0",
        featureSearchResultActive: "dashboardLayout_featureSearchResultActive__L_kRB",
        featureSearchResultIcon: "dashboardLayout_featureSearchResultIcon__PjF9f",
        featureSearchResultText: "dashboardLayout_featureSearchResultText__Y8juF",
        featureSearchResultHint: "dashboardLayout_featureSearchResultHint__9iGZO",
        featureSearchResultLocked: "dashboardLayout_featureSearchResultLocked__DaSYA",
        featureSearchEmpty: "dashboardLayout_featureSearchEmpty__LO6YS",
        "dashboard-feature-search-highlight-ring": "dashboardLayout_dashboard-feature-search-highlight-ring__7Y7tc",
        "dashboard-feature-search-highlight-reduced": "dashboardLayout_dashboard-feature-search-highlight-reduced__upsxy"
      }
    }
  }
]);