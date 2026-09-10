(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2627], {
    5214: (e, a, s) => {
      "use strict";
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), Object.defineProperty(a, "workAsyncStorage", {
        enumerable: !0,
        get: function() {
          return t.workAsyncStorageInstance
        }
      });
      let t = s(17828)
    },
    17828: (e, a, s) => {
      "use strict";
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), Object.defineProperty(a, "workAsyncStorageInstance", {
        enumerable: !0,
        get: function() {
          return t
        }
      });
      let t = (0, s(64054).createAsyncLocalStorage)()
    },
    21957: (e, a, s) => {
      "use strict";

      function t({
        moduleIds: e
      }) {
        return null
      }
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), Object.defineProperty(a, "PreloadChunks", {
        enumerable: !0,
        get: function() {
          return t
        }
      }), s(95155), s(47650), s(5214), s(2451)
    },
    25272: (e, a, s) => {
      "use strict";
      let t;
      s.r(a), s.d(a, {
        default: () => z
      });
      var n = s(95155),
        d = s(12115),
        o = s(50163),
        i = s.n(o),
        r = s(66609),
        c = s(7109),
        l = s(15041),
        u = s(33029),
        m = s(58455),
        h = s(81469),
        b = s(98241),
        g = s.n(b),
        p = s(30184),
        x = s(91801),
        f = s.n(x),
        j = s(3434),
        v = s(97478),
        _ = s(50686),
        N = s(13699),
        y = s(86891),
        C = s(61836);

      function B({
        isDonor: e
      }) {
        let a = (0, y.kj)(),
          [s, t] = (0, d.useState)(0),
          [o, i] = (0, d.useState)(!1),
          r = async () => {
            s < C.q9.donationMinimum || i(!0)
          };
        return (0, n.jsx)(n.Fragment, {
          children: o ? (0, n.jsx)(_.A, {
            type: "donation",
            donationAmount: s,
            purchaseSource: N.v.badges
          }) : (0, n.jsxs)("div", {
            className: f().donation,
            children: [(0, n.jsx)("h3", {
              children: a("dashboard.account.badges.donation_modal.description")
            }), (0, n.jsxs)("div", {
              className: f().donationAmount,
              children: [(0, n.jsx)(v.A, {
                featureName: a("dashboard.account.badges.donation_modal.amount_label"),
                onChangeFunction: e => {
                  t(e)
                },
                min: C.q9.donationMinimum,
                max: 1e4,
                step: .01,
                value: s,
                placeholder: C.q9.donorBadgeMinimum,
                icon: j.A.donation
              }), s < C.q9.donorBadgeMinimum && !e ? (0, n.jsx)("h3", {
                className: f().donateMoreText,
                children: a("dashboard.account.badges.donation_modal.badge_requirement", {
                  amount: (C.q9.donorBadgeMinimum - s).toFixed(2)
                })
              }) : e && (0, n.jsx)("h3", {
                className: f().alreadyDonatedText,
                children: a("dashboard.account.badges.donation_modal.already_donor")
              })]
            }), (0, n.jsx)("button", {
              className: f().payButton,
              onClick: r,
              children: a("dashboard.account.badges.donation_modal.pay_button")
            })]
          })
        })
      }
      var w = s(57157),
        S = s(44923),
        A = s(87256),
        k = s(39768);

      function P({
        badges: e,
        setBadges: a,
        badgeIcons: s,
        iconNameMapper: t,
        badgeNameMapper: o,
        handleBadgeToggle: c
      }) {
        let l = (0, y.kj)(),
          [u, m] = (0, d.useState)(e),
          [h, b] = (0, d.useState)(null),
          [g, p] = (0, d.useState)(!1);
        (0, d.useEffect)(() => {
          p(!0)
        }, []), (0, d.useEffect)(() => {
          m(e)
        }, [e]);
        let x = (0, S.FR)((0, S.MS)(S.AN, {
            activationConstraint: {
              distance: 10
            }
          })),
          f = async e => {
            b(null);
            let {
              active: s,
              over: t
            } = e;
            if (!t || s.id === t.id) return;
            let n = u.findIndex(e => e.name === s.id),
              d = u.findIndex(e => e.name === t.id);
            if (-1 === n || -1 === d || d === n) return;
            let o = (0, A.VE)(u, n, d),
              i = o.map(e => e.isString ? e.name : {
                name: e.name
              });
            m(o), a(o), (await fetch("https://guns.lol/api/account/badges/order", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                newOrder: i,
                type: "userBadge"
              })
            })).ok || r.oR.error(l("dashboard.account.errors.badge_order"))
          };
        return g ? (0, n.jsxs)(S.Mp, {
          sensors: x,
          collisionDetection: S.fp,
          onDragStart: e => {
            let {
              active: a
            } = e, s = u.find(e => e.name === a.id);
            s && b(s)
          },
          onDragEnd: f,
          children: [(0, n.jsx)(A.gB, {
            items: u.map(e => e.name),
            strategy: A.vl,
            children: (0, n.jsx)("div", {
              className: i().userBadgesContainer,
              "data-vaul-no-drag": !0,
              children: u.map((e, d) => (0, n.jsx)(E, {
                item: e,
                setBadges: a,
                badgeIcons: s,
                iconNameMapper: t,
                badgeNameMapper: o,
                handleBadgeToggle: c
              }, d))
            })
          }), (0, n.jsx)(S.Hd, {
            children: h && (0, n.jsx)(E, {
              item: h,
              setBadges: a,
              badgeIcons: s,
              iconNameMapper: t,
              badgeNameMapper: o,
              handleBadgeToggle: c,
              isOverlay: !0
            })
          })]
        }) : null
      }

      function E({
        item: e,
        badgeIcons: a,
        iconNameMapper: s,
        badgeNameMapper: t,
        handleBadgeToggle: d,
        isOverlay: o = !1
      }) {
        let {
          attributes: r,
          listeners: l,
          setNodeRef: u,
          transform: m,
          transition: b,
          isDragging: g
        } = (0, A.gl)({
          id: e.name,
          animateLayoutChanges: () => !1
        }), p = {
          transform: k.Ks.Transform.toString(m),
          transition: b,
          opacity: +!g
        };
        return (0, n.jsxs)("div", {
          ref: u,
          style: p,
          className: i().myBadge,
          children: [(0, n.jsx)("div", {
            className: i().dragHandleContainer,
            ...r,
            ...l,
            children: c.A.dragHandle
          }), (0, n.jsxs)("div", {
            className: i().myBadgeSwitchWrapper,
            children: [(0, n.jsxs)("div", {
              className: i().myBadgeWrapper,
              children: [(0, n.jsx)("div", {
                className: i().badgeIcon,
                children: a[s[e.name]]
              }), (0, n.jsx)("h1", {
                children: t[e.name]
              })]
            }), (0, n.jsx)(h.A, {
              featureName: "",
              onChangeFunction: a => d(a, e.name),
              checked: e.enabled
            })]
          })]
        })
      }

      function T({
        customBadges: e,
        setCustomBadges: a,
        handleCustomBadgeEdit: s,
        handleCustomBadgeToggle: t,
        isPremium: o
      }) {
        let c = (0, y.kj)(),
          [l, u] = (0, d.useState)(e),
          [m, h] = (0, d.useState)(null),
          [b, g] = (0, d.useState)(!1);
        (0, d.useEffect)(() => {
          g(!0)
        }, []), (0, d.useEffect)(() => {
          u(e)
        }, [e]);
        let p = (0, S.FR)((0, S.MS)(S.AN, {
            activationConstraint: {
              distance: 10
            }
          })),
          x = async e => {
            h(null);
            let {
              active: s,
              over: t
            } = e;
            if (!t || s.id === t.id) return;
            let n = l.findIndex(e => e.id === s.id),
              d = l.findIndex(e => e.id === t.id);
            if (-1 === n || -1 === d || d === n) return;
            let o = (0, A.VE)(l, n, d),
              i = o.map(e => e.isString ? [e.name, e.icon] : {
                id: e.id
              });
            u(o), a(o), (await fetch("https://guns.lol/api/account/badges/order", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                newOrder: i,
                type: "customBadge"
              })
            })).ok || r.oR.error(c("dashboard.account.errors.badge_order"))
          };
        return b ? (0, n.jsxs)(S.Mp, {
          sensors: p,
          collisionDetection: S.fp,
          onDragStart: e => {
            let {
              active: a
            } = e, s = l.find(e => e.id === a.id);
            s && h(s)
          },
          onDragEnd: x,
          children: [(0, n.jsx)(A.gB, {
            items: l.map(e => e.id),
            strategy: A.vl,
            children: (0, n.jsx)("div", {
              className: i().userBadgesContainer,
              "data-vaul-no-drag": !0,
              children: l.map(e => (0, n.jsx)(M, {
                item: e,
                setCustomBadges: a,
                handleCustomBadgeToggle: t,
                handleCustomBadgeEdit: s,
                isPremium: o
              }, e.id))
            })
          }), (0, n.jsx)(S.Hd, {
            children: m && (0, n.jsx)(M, {
              item: m,
              setCustomBadges: a,
              handleCustomBadgeToggle: t,
              handleCustomBadgeEdit: s,
              isOverlay: !0,
              isPremium: o
            })
          })]
        }) : null
      }

      function M({
        item: e,
        setCustomBadges: a,
        handleCustomBadgeEdit: s,
        handleCustomBadgeToggle: t,
        isPremium: d,
        isOverlay: o = !1
      }) {
        let {
          attributes: r,
          listeners: l,
          setNodeRef: u,
          transform: m,
          transition: b,
          isDragging: g
        } = (0, A.gl)({
          id: e.id,
          animateLayoutChanges: () => !1
        }), p = {
          transform: k.Ks.Transform.toString(m),
          transition: b,
          opacity: +!g
        };
        return (0, n.jsxs)("div", {
          ref: u,
          style: p,
          className: i().myBadge,
          children: [d && (0, n.jsx)("div", {
            className: i().dragHandleContainer,
            ...r,
            ...l,
            style: {
              height: "69px"
            },
            children: c.A.dragHandle
          }), (0, n.jsxs)("div", {
            className: i().myBadgeSwitchWrapper,
            style: {
              height: "69px"
            },
            children: [(0, n.jsxs)("div", {
              className: i().myBadgeWrapper,
              children: [(0, n.jsx)("div", {
                className: i().badgeIcon,
                children: (0, n.jsx)("img", {
                  src: e.icon,
                  alt: "Custom Badge Icon"
                })
              }), (0, n.jsx)("h1", {
                children: e.name
              })]
            }), (0, n.jsxs)("div", {
              className: i().customBadgeActionsWrapper,
              children: [d && (0, n.jsx)(h.A, {
                featureName: "",
                onChangeFunction: a => t(a, e.isString ? e.name : e.id),
                checked: e.enabled
              }), (0, n.jsx)("span", {
                className: i().customBadgeSettings,
                onClick: () => s({
                  ...e,
                  originalName: e.name
                }),
                children: c.A.editBadge
              })]
            })]
          })]
        })
      }
      let R = "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto),
        O = new Uint8Array(16),
        $ = [];
      for (let e = 0; e < 256; ++e) $.push((e + 256).toString(16).slice(1));
      let I = function(e, a, s) {
        if (R && !a && !e) return R();
        let n = (e = e || {}).random ?? e.rng?.() ?? function() {
          if (!t) {
            if ("undefined" == typeof crypto || !crypto.getRandomValues) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            t = crypto.getRandomValues.bind(crypto)
          }
          return t(O)
        }();
        if (n.length < 16) throw Error("Random bytes length must be >= 16");
        if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, a) {
          if ((s = s || 0) < 0 || s + 16 > a.length) throw RangeError(`UUID byte range ${s}:${s+15} is out of buffer bounds`);
          for (let e = 0; e < 16; ++e) a[s + e] = n[e];
          return a
        }
        return function(e, a = 0) {
          return ($[e[a + 0]] + $[e[a + 1]] + $[e[a + 2]] + $[e[a + 3]] + "-" + $[e[a + 4]] + $[e[a + 5]] + "-" + $[e[a + 6]] + $[e[a + 7]] + "-" + $[e[a + 8]] + $[e[a + 9]] + "-" + $[e[a + 10]] + $[e[a + 11]] + $[e[a + 12]] + $[e[a + 13]] + $[e[a + 14]] + $[e[a + 15]]).toLowerCase()
        }(n)
      };
      var L = s(54834),
        D = s(41458);

      function U() {
        let e = (0, y.kj)(),
          [a, s] = (0, d.useState)(1),
          [t, o] = (0, d.useState)(!1),
          [r, l] = (0, d.useState)(!1),
          u = async e => {
            l(!0)
          };
        return (0, n.jsx)(n.Fragment, {
          children: r ? (0, n.jsx)(_.A, {
            type: "credits",
            creditsData: {
              amount: a,
              totalPrice: (0, C.gP)(a).totalPrice
            },
            purchaseSource: N.v.badges
          }) : (0, n.jsxs)("div", {
            className: i().creditsContainer,
            children: [(0, n.jsxs)("div", {
              className: i().creditsDescription,
              children: [(0, n.jsx)("h1", {
                children: e("dashboard.account.badges.custom.credits_modal.title")
              }), (0, n.jsx)("h3", {
                children: e("dashboard.account.badges.custom.credits_modal.subtitle")
              })]
            }), (0, n.jsxs)("div", {
              className: i().creditsOptions,
              children: [(0, n.jsx)("h1", {
                className: i().creditsTitle,
                children: e("dashboard.account.badges.custom.credits_modal.question")
              }), (0, n.jsxs)("div", {
                className: i().preselectedAmounts,
                children: [
                  [1, 3, 5].map(d => {
                    let r = (0, C.gP)(d).totalPrice,
                      c = (0, C.gP)(d).discountPercent;
                    return (0, n.jsxs)("div", {
                      className: `${i().preselectedAmount} ${a===d&&!t&&i().active}`,
                      onClick: () => {
                        o(!1), s(d)
                      },
                      children: [(0, n.jsx)("span", {
                        className: i().amountText,
                        children: e("dashboard.account.badges.custom.credits_modal.credit_label", {
                          amount: d,
                          creditsForm: 1 === d ? e("dashboard.account.badges.custom.credits_modal.credit_single") : e("dashboard.account.badges.custom.credits_modal.credit_multiple")
                        })
                      }), (0, n.jsxs)("div", {
                        className: i().creditsPriceWrapper,
                        children: [(0, n.jsx)("span", {
                          className: i().priceDiscount,
                          style: {
                            opacity: +(c > 0)
                          },
                          children: e("dashboard.account.badges.custom.credits_modal.discount", {
                            percent: c
                          })
                        }), (0, n.jsxs)("span", {
                          className: i().priceText,
                          children: [r, "€"]
                        })]
                      })]
                    }, d)
                  }), (0, n.jsxs)("span", {
                    className: `${i().customCreditsAmountButton} ${t&&i().active}`,
                    onClick: () => {
                      o(!0), s(1)
                    },
                    children: [c.A.customAmount, " ", e("dashboard.account.badges.custom.credits_modal.custom_amount_button")]
                  })
                ]
              }), t && (0, n.jsxs)("div", {
                className: i().customCreditsAmount,
                children: [(0, n.jsxs)("h1", {
                  children: [e("dashboard.account.badges.custom.credits_modal.custom_amount_label"), " ", (0, n.jsx)("span", {
                    style: {
                      opacity: +((0, C.gP)(a).discountPercent > 0)
                    },
                    children: e("dashboard.account.badges.custom.credits_modal.discount", {
                      percent: (0, C.gP)(a).discountPercent
                    })
                  })]
                }), (0, n.jsx)(v.A, {
                  value: a,
                  onChange: s,
                  icon: c.A.shoppingBag,
                  min: 1,
                  max: 500
                })]
              }), (0, n.jsx)("span", {
                className: i().purchaseCreditsButton,
                onClick: u,
                children: e("dashboard.account.badges.custom.credits_modal.purchase_button", {
                  price: (0, C.gP)(a).totalPrice
                })
              })]
            })]
          })
        })
      }
      var F = s(37897),
        W = s(98542),
        G = s(79157),
        H = s(45941),
        q = s(13782),
        J = s(12521);
      let z = ({
        data: e
      }) => {
        var a;
        let s, t = (0, y.kj)(),
          o = e.config,
          [b, x] = (0, d.useState)(""),
          [f, j] = (0, d.useState)(!1),
          [v, S] = (0, d.useState)(!0),
          A = (0, d.useRef)(null),
          [k, E] = (0, d.useState)(null),
          M = t("dashboard.account.badges.settings.save_button"),
          [R, O] = (0, d.useState)(M),
          [$, z] = (0, d.useState)(e.config.user_badges),
          [V, X] = (0, d.useState)(e.config.custom_badges),
          [K, Y] = (0, d.useState)({
            originalName: "",
            name: "",
            icon: "",
            id: ""
          }),
          Q = {
            premium: t("dashboard.account.badges.modals.premium"),
            imagehost: t("dashboard.account.badges.modals.imagehost"),
            bugReport: t("dashboard.account.badges.modals.bug_report"),
            verified: t("dashboard.account.badges.modals.verified"),
            donation: t("dashboard.account.badges.modals.donation"),
            verifiedPaymentMethods: t("dashboard.account.badges.modals.payment_methods"),
            gift: t("dashboard.account.badges.modals.gift"),
            buyCredits: t("dashboard.account.badges.modals.buy_credits"),
            customBadgeEdit: t("dashboard.account.badges.modals.custom_badge_edit"),
            customBadgeEditNotice: t("dashboard.account.badges.modals.custom_badge_edit_notice"),
            customBadgePreview: t("dashboard.account.badges.modals.custom_badge_preview"),
            customBadgePurchase: t("dashboard.account.badges.modals.custom_badge_purchase"),
            hone: t("dashboard.account.badges.modals.hone_badge")
          } [b] || "",
          Z = e.premium,
          ee = e.imagehost_access;
        (0, d.useEffect)(() => {
          O(M)
        }, [M]);
        let ea = (s = {}, (a = ["server_booster", "verified", "donor", "helper", "domain_legend", "hone"]).forEach(e => {
            s[e] = !1
          }), 0 === $.length || ("string" == typeof $[0] ? a.forEach(e => {
            $.includes(e) && (s[e] = !0)
          }) : a.forEach(e => {
            $.find(a => a.name === e) && (s[e] = !0)
          })), s),
          es = ea.server_booster,
          et = ea.verified,
          en = ea.donor,
          ed = ea.helper,
          eo = ea.domain_legend,
          ei = ea.hone,
          er = o.premium,
          [ec, el] = (0, d.useState)(er.monochrome_badges),
          [eu, em] = (0, d.useState)(er.badge_color),
          [eh, eb] = (0, d.useState)(e.badge_credits ?? 1),
          eg = [{
            name: t("dashboard.account.badges.list.staff.name"),
            description: t("dashboard.account.badges.list.staff.description"),
            icon: l.A.staff
          }, {
            name: t("dashboard.account.badges.list.helper.name"),
            description: t("dashboard.account.badges.list.helper.description"),
            icon: l.A.helper,
            button: {
              text: t("dashboard.account.badges.list.helper.button.text"),
              action: "https://discord.gg/guns",
              isEnabled: !ed,
              disabledText: t("dashboard.account.badges.list.helper.button.disabled")
            }
          }, {
            name: t("dashboard.account.badges.list.premium.name"),
            description: t("dashboard.account.badges.list.premium.description"),
            icon: l.A.premium,
            button: {
              text: t("dashboard.account.badges.list.premium.button.text"),
              action: function() {
                x("premium"), j(!0)
              },
              isEnabled: !Z,
              disabledText: t("dashboard.account.badges.list.premium.button.disabled")
            }
          }, {
            name: t("dashboard.account.badges.list.verified.name"),
            description: t("dashboard.account.badges.list.verified.description"),
            icon: l.A.verified,
            button: {
              text: t("dashboard.account.badges.list.verified.button.text"),
              action: function() {
                x("verified"), j(!0)
              },
              isEnabled: !et,
              disabledText: t("dashboard.account.badges.list.verified.button.disabled")
            }
          }, {
            name: t("dashboard.account.badges.list.donor.name"),
            description: t("dashboard.account.badges.list.donor.description", {
              price: (0, C.$g)(C.q9.donorBadgeMinimum)
            }),
            icon: l.A.donor,
            button: {
              text: t("dashboard.account.badges.list.donor.button.text"),
              action: function() {
                x("donation"), j(!0)
              },
              isEnabled: !0,
              disabledText: t("dashboard.account.badges.list.donor.button.disabled")
            }
          }, {
            name: t("dashboard.account.badges.list.gifter.name"),
            description: t("dashboard.account.badges.list.gifter.description"),
            icon: l.A.gifter,
            button: {
              text: t("dashboard.account.badges.list.gifter.button.text"),
              action: function() {
                x("gift"), j(!0)
              },
              isEnabled: !0
            }
          }, {
            name: t("dashboard.account.badges.list.image_host.name"),
            description: t("dashboard.account.badges.list.image_host.description"),
            icon: l.A.imagehost,
            button: {
              text: t("dashboard.account.badges.list.image_host.button.text"),
              action: function() {
                x("imagehost"), j(!0)
              },
              isEnabled: !ee,
              disabledText: t("dashboard.account.badges.list.image_host.button.disabled")
            }
          }, {
            name: t("dashboard.account.badges.list.domain_legend.name"),
            description: t("dashboard.account.badges.list.domain_legend.description"),
            icon: l.A.domainLegend,
            button: {
              text: t("dashboard.account.badges.list.domain_legend.button.text"),
              action: "/imagehost/domains",
              isEnabled: !eo,
              disabledText: t("dashboard.account.badges.list.domain_legend.button.disabled")
            }
          }, {
            name: t("dashboard.account.badges.list.og.name"),
            description: t("dashboard.account.badges.list.og.description"),
            icon: l.A.og
          }, {
            name: t("dashboard.account.badges.list.server_booster.name"),
            description: t("dashboard.account.badges.list.server_booster.description"),
            icon: l.A.serverBooster,
            button: {
              text: t("dashboard.account.badges.list.server_booster.button.text"),
              action: "https://discord.gg/guns",
              isEnabled: !es,
              disabledText: t("dashboard.account.badges.list.server_booster.button.disabled")
            }
          }, {
            name: t("dashboard.account.badges.list.hone.name"),
            description: t("dashboard.account.badges.list.hone.description"),
            icon: l.A.hone,
            button: {
              text: t("dashboard.account.badges.list.hone.button.text"),
              action: function() {
                x("hone"), j(!0)
              },
              isEnabled: !ei,
              disabledText: t("dashboard.account.badges.list.hone.button.disabled")
            }
          }, {
            name: t("dashboard.account.badges.list.bug_hunter.name"),
            description: t("dashboard.account.badges.list.bug_hunter.description"),
            icon: l.A.bugHunter,
            button: {
              text: t("dashboard.account.badges.list.bug_hunter.button.text"),
              action: function() {
                x("bugReport"), j(!0)
              },
              isEnabled: !0,
              disabledText: t("dashboard.account.badges.list.bug_hunter.button.disabled")
            }
          }, {
            name: t("dashboard.account.badges.list.summer_2026.name"),
            description: t("dashboard.account.badges.list.summer_2026.description"),
            icon: l.A.summer2026
          }, {
            name: t("dashboard.account.badges.list.easter_2026.name"),
            description: t("dashboard.account.badges.list.easter_2026.description"),
            icon: l.A.easter2026
          }, {
            name: t("dashboard.account.badges.list.christmas_2025.name"),
            description: t("dashboard.account.badges.list.christmas_2025.description"),
            icon: l.A.christmas2025
          }, {
            name: t("dashboard.account.badges.list.easter_2025.name"),
            description: t("dashboard.account.badges.list.easter_2025.description"),
            icon: l.A.easter2025
          }, {
            name: t("dashboard.account.badges.list.christmas_2024.name"),
            description: t("dashboard.account.badges.list.christmas_2024.description"),
            icon: l.A.christmas2024
          }, {
            name: t("dashboard.account.badges.list.the_million.name"),
            description: t("dashboard.account.badges.list.the_million.description"),
            icon: l.A.theMillion
          }, {
            name: t("dashboard.account.badges.list.winner.name"),
            description: t("dashboard.account.badges.list.winner.description"),
            icon: l.A.winner
          }, {
            name: t("dashboard.account.badges.list.second.name"),
            description: t("dashboard.account.badges.list.second.description"),
            icon: l.A.second
          }, {
            name: t("dashboard.account.badges.list.third.name"),
            description: t("dashboard.account.badges.list.third.description"),
            icon: l.A.third
          }];
        (0, d.useEffect)(() => {
          if ("undefined" == typeof ResizeObserver) return;
          let e = A.current;
          if (!e) return;
          let a = () => {
              E(e.scrollHeight)
            },
            s = new ResizeObserver(a);
          return s.observe(e), a(), () => {
            s.disconnect()
          }
        }, []), (0, d.useEffect)(() => {
          v && A.current && E(A.current.scrollHeight)
        }, [v]);
        let ep = async () => {
          x("verifiedPaymentMethods")
        }, ex = {
          staff: t("dashboard.account.badges.list.staff.name"),
          premium: t("dashboard.account.badges.list.premium.name"),
          verified: t("dashboard.account.badges.list.verified.name"),
          donor: t("dashboard.account.badges.list.donor.name"),
          og: t("dashboard.account.badges.list.og.name"),
          server_booster: t("dashboard.account.badges.list.server_booster.name"),
          winner: t("dashboard.account.badges.list.winner.name"),
          second: t("dashboard.account.badges.list.second.name"),
          third: t("dashboard.account.badges.list.third.name"),
          imagehost_access: t("dashboard.account.badges.list.image_host.name"),
          bughunter: t("dashboard.account.badges.list.bug_hunter.name"),
          christmas_2024: t("dashboard.account.badges.list.christmas_2024.name"),
          christmas_2025: t("dashboard.account.badges.list.christmas_2025.name"),
          domain_legend: t("dashboard.account.badges.list.domain_legend.name"),
          summer_2026: t("dashboard.account.badges.list.summer_2026.name"),
          easter_2025: t("dashboard.account.badges.list.easter_2025.name"),
          easter_2026: "Easter 2026",
          helper: t("dashboard.account.badges.list.helper.name"),
          gifter: t("dashboard.account.badges.list.gifter.name"),
          the_million: t("dashboard.account.badges.list.the_million.name"),
          hone: t("dashboard.account.badges.list.hone.name")
        }, ef = async (e, a) => {
          let s = e.target.checked,
            t = await fetch("https://guns.lol/api/account/badges", {
              method: "POST",
              body: JSON.stringify({
                badge: a,
                enabled: s
              })
            }),
            n = await t.json();
          t.ok ? (r.oR.success(n.message), z(n.badges)) : r.oR.error(n.error)
        }, ej = async () => {
          O(W.A.loading);
          let e = await fetch("https://guns.lol/api/account/badges/settings", {
              method: "POST",
              body: JSON.stringify({
                monochrome_badges: ec,
                badge_color: eu
              })
            }),
            a = await e.json();
          e.ok ? (r.oR.success(a.message), setTimeout(() => {
            O(M)
          }, 500)) : (r.oR.error(a.error), setTimeout(() => {
            O(M)
          }, 500))
        }, ev = v ? null !== k ? {
          maxHeight: `${k}px`
        } : {} : {
          maxHeight: "0px"
        };
        (0, d.useEffect)(() => {
          0 !== $.length && "string" == typeof $[0] && z($.map(e => ({
            name: e,
            enabled: !0,
            isString: !0
          }))), 0 !== V.length && "string" == typeof V[0][0] && X(V.map(e => ({
            name: e[0],
            icon: e[1],
            enabled: !0,
            id: I(),
            isString: !0
          })))
        }, [V]);
        let e_ = () => {
            x("buyCredits"), j(!0)
          },
          [eN, ey] = (0, d.useState)(null),
          [eC, eB] = (0, d.useState)(""),
          [ew, eS] = (0, d.useState)(null),
          [eA, ek] = (0, d.useState)(""),
          eP = async (e, a = !1) => {
            e.target.disabled = !0;
            let s = e.target.files?.[0];
            if (!s) return;
            let n = H.nB.badge,
              d = eM(s.name).toLowerCase();
            if (!n.includes(d)) {
              r.oR.error(t("dashboard.account.badges.errors.invalid_file")), e.target.disabled = !1, e.target.value = "";
              return
            }
            a ? (eS(s), eT(s, !0)) : (ey(s), eT(s))
          };

        function eE(e = !1) {
          e ? (ek(""), eS("")) : (eB(""), ey(""))
        }

        function eT(e, a = !1) {
          let s = new FileReader;
          s.onload = function(e) {
            let s = e.target.result;
            a ? ek(s) : eB(s)
          }, s.readAsDataURL(e)
        }

        function eM(e) {
          return "." + e.substring(e.lastIndexOf(".") + 1)
        }
        let eR = async e => {
          Y(e), eB(e.icon), x("customBadgeEdit"), j(!0)
        }, eO = async e => {
          e.target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeDasharray="15" strokeDashoffset="15" strokeLinecap="round" strokeWidth="2" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"></animate><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></svg>';
          try {
            if (eh <= 0) {
              r.oR.error(t("dashboard.account.badges.errors.no_credits")), j(!1);
              return
            }
            let e = new FormData;
            e.append("originalName", K.originalName), e.append("name", K.name), e.append("icon", eN || K.icon), e.append("id", K.id);
            let a = await fetch("https://guns.lol/api/account/customBadges/edit", {
                method: "POST",
                body: e
              }),
              s = await a.json();
            a.ok ? (r.oR.success(s.message), X(s.badges), Y({
              name: "",
              icon: "",
              id: "",
              originalName: ""
            }), eB(""), ey(null), eb(s.badge_credits), j(!1)) : r.oR.error(s.error)
          } finally {
            e.target.innerHTML = t("dashboard.account.badges.custom.notice.confirm")
          }
        }, e$ = async (e, a) => {
          let s = e.target.checked,
            t = await fetch("https://guns.lol/api/account/customBadges", {
              method: "POST",
              body: JSON.stringify({
                badge: a,
                enabled: s
              })
            }),
            n = await t.json();
          t.ok ? (r.oR.success(n.message), X(n.badges)) : r.oR.error(n.error)
        }, eI = () => {
          x("customBadgePurchase"), j(!0)
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(q.A, {
            opened: f,
            onClose: () => j(!1),
            title: Q,
            centered: !0,
            size: "customBadgeEdit" === b || "customBadgePreview" === b ? "450px" : "auto",
            children: "premium" === b ? (0, n.jsx)(u.A, {}) : "imagehost" === b ? (0, n.jsx)(m.A, {}) : "donation" === b ? (0, n.jsx)(B, {
              isDonor: en
            }) : "verified" === b ? (0, n.jsxs)("div", {
              className: i().verified,
              children: [(0, n.jsx)("h3", {
                children: t("dashboard.account.badges.verified.description", {
                  strong: (0, n.jsx)("strong", {
                    children: (0, C.$g)(C.q9.verified)
                  })
                })
              }), (0, n.jsxs)("div", {
                className: i().buyVerifiedOptions,
                children: [(0, n.jsxs)("button", {
                  onClick: ep,
                  children: [c.A.purchase, " ", t("dashboard.account.badges.verified.purchase_button")]
                }), (0, n.jsxs)("a", {
                  href: "https://discord.gg/guns",
                  target: "_blank",
                  children: [c.A.apply, " ", t("dashboard.account.badges.verified.apply_button")]
                })]
              })]
            }) : "bugReport" === b ? (0, n.jsxs)("div", {
              className: i().bugReport,
              children: [(0, n.jsx)("h3", {
                children: t("dashboard.account.badges.bug_report.description")
              }), (0, n.jsxs)("div", {
                className: i().bugReportButtons,
                children: [(0, n.jsxs)("a", {
                  href: "https://discord.gg/guns",
                  target: "_blank",
                  children: [c.A.discord, " ", t("dashboard.account.badges.bug_report.discord_button")]
                }), (0, n.jsxs)("a", {
                  href: "mailto:support@guns.lol",
                  target: "_blank",
                  children: [c.A.email, " ", t("dashboard.account.badges.bug_report.email_button")]
                })]
              })]
            }) : "verifiedPaymentMethods" === b ? (0, n.jsx)(_.A, {
              type: "verified",
              purchaseSource: N.v.badges
            }) : "gift" === b ? (0, n.jsx)(D.A, {
              defaultSelection: "premiumLifetime",
              redirectLogin: !1,
              showGiftContainer: !0,
              purchaseSource: N.j.badges
            }) : "buyCredits" === b ? (0, n.jsx)(U, {}) : "customBadgeEdit" === b ? (0, n.jsx)("div", {
              className: i().customBadgeEditContainer,
              children: eh > 0 ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(F.A, {
                  featureName: t("dashboard.account.badges.custom.edit.name_label"),
                  onChangeFunction: e => Y({
                    ...K,
                    name: e.target.value
                  }),
                  placeholder: t("dashboard.account.badges.custom.edit.name_placeholder"),
                  value: K.name,
                  icon: c.A.badgeName
                }), (0, n.jsxs)("div", {
                  className: i().iconUploadWrapper,
                  children: [(0, n.jsx)("h1", {
                    className: i().uploaderHeadingText,
                    children: t("dashboard.account.badges.custom.edit.icon_label")
                  }), (0, n.jsx)("div", {
                    className: i().iconUpload,
                    children: "" === eC ? (0, n.jsxs)(n.Fragment, {
                      children: [(0, n.jsxs)("div", {
                        className: i().uploadCardText,
                        children: [c.A.image, (0, n.jsx)("h1", {
                          children: t("dashboard.account.badges.custom.edit.upload_prompt")
                        })]
                      }), (0, n.jsx)("input", {
                        type: "file",
                        accept: J.vJ.badge.map(e => e).join(", "),
                        onChange: e => {
                          eP(e)
                        }
                      })]
                    }) : (0, n.jsxs)(n.Fragment, {
                      children: [(0, n.jsxs)("div", {
                        className: i().fileBadge,
                        children: [(0, n.jsx)("span", {
                          children: eM(eN && eN.name ? eN.name : eC).toUpperCase()
                        }), (0, n.jsx)("span", {
                          onClick: () => eE(!1),
                          children: c.A.deleteFile
                        })]
                      }), (0, n.jsx)("img", {
                        src: eC,
                        alt: "Badge",
                        className: i().uploadCardImage
                      })]
                    })
                  })]
                }), (0, n.jsxs)("div", {
                  className: i().customBadgePreviewContainerWrapper,
                  children: [(0, n.jsx)("h1", {
                    className: i().customBadgePreviewText,
                    children: t("dashboard.account.badges.custom.preview.title")
                  }), (0, n.jsx)("div", {
                    className: i().customBadgePreviewDiv,
                    children: "" !== eC ? (0, n.jsxs)(n.Fragment, {
                      children: [(0, n.jsx)("h1", {
                        children: t("dashboard.account.badges.custom.preview.username")
                      }), (0, n.jsxs)("div", {
                        className: i().customBadgePreviewContainer,
                        children: [(0, n.jsx)("div", {
                          className: i().customBadgePreview,
                          children: l.A.premium
                        }), (0, n.jsx)("div", {
                          className: i().customBadgePreview,
                          children: l.A.imagehost
                        }), (0, n.jsx)("div", {
                          className: i().customBadgePreview,
                          children: l.A.donor
                        }), (0, n.jsx)("div", {
                          className: i().customBadgePreview,
                          children: (0, n.jsx)("img", {
                            src: eC,
                            alt: "Badge",
                            draggable: !1
                          })
                        })]
                      })]
                    }) : (0, n.jsx)("h1", {
                      className: i().customBadgeIconText,
                      children: t("dashboard.account.badges.custom.preview.no_icon")
                    })
                  })]
                }), (0, n.jsxs)("div", {
                  className: i().editCustomBadgeButtonWrapper,
                  children: [(0, n.jsxs)("div", {
                    className: i().editCustomBadgeButtonContainer,
                    children: [(0, n.jsx)("span", {
                      className: i().editCustomBadgeButton,
                      onClick: () => {
                        eh <= 0 ? r.oR.error(t("dashboard.account.badges.errors.no_credits")) : ("" !== eC || eN) && "" !== K.name ? (x("customBadgeEditNotice"), j(!0)) : r.oR.error(t("dashboard.account.badges.errors.fill_fields"))
                      },
                      children: t("dashboard.account.badges.custom.edit.save_button")
                    }), (0, n.jsx)("span", {
                      className: i().editCustomBadgeButtonCancel,
                      onClick: () => j(!1),
                      children: t("dashboard.account.badges.actions.cancel")
                    })]
                  }), (0, n.jsx)("span", {
                    className: i().creditChargeNotice,
                    children: t("dashboard.account.badges.custom.edit.credit_notice", {
                      count: eh
                    })
                  })]
                })]
              }) : (0, n.jsxs)("div", {
                className: i().noCreditsNotice,
                children: [(0, n.jsxs)("div", {
                  className: i().noCreditsNoticeText,
                  children: [(0, n.jsx)("h1", {
                    children: t("dashboard.account.badges.custom.no_credits.title")
                  }), (0, n.jsx)("h3", {
                    children: t("dashboard.account.badges.custom.no_credits.description")
                  })]
                }), (0, n.jsx)("span", {
                  className: i().buyCredits,
                  onClick: e_,
                  children: t("dashboard.account.badges.custom.no_credits.button")
                })]
              })
            }) : "customBadgeEditNotice" === b ? (0, n.jsxs)("div", {
              className: i().customBadgeEditNoticeContainer,
              children: [(0, n.jsxs)("div", {
                className: i().customBadgeEditNoticeText,
                children: [(0, n.jsx)("h1", {
                  children: t("dashboard.account.badges.custom.notice.title")
                }), (0, n.jsx)("h3", {
                  children: t("dashboard.account.badges.custom.notice.description")
                })]
              }), (0, n.jsxs)("div", {
                className: i().customBadgeGuidelinesContainer,
                children: [(0, n.jsx)("h1", {
                  children: t("dashboard.account.badges.custom.notice.guidelines.title")
                }), (0, n.jsxs)("ul", {
                  className: i().customBadgeGuidelines,
                  children: [(0, n.jsx)("li", {
                    children: t("dashboard.account.badges.custom.notice.guidelines.unique")
                  }), (0, n.jsx)("li", {
                    children: t("dashboard.account.badges.custom.notice.guidelines.tos")
                  }), (0, n.jsx)("li", {
                    children: t("dashboard.account.badges.custom.notice.guidelines.removal")
                  })]
                })]
              }), (0, n.jsxs)("div", {
                className: i().customBadgeEditNoticeActions,
                children: [(0, n.jsx)("span", {
                  className: i().customBadgeEditNoticeConfirm,
                  onClick: eO,
                  children: t("dashboard.account.badges.custom.notice.confirm")
                }), (0, n.jsx)("span", {
                  className: i().customBadgeEditNoticeCancel,
                  onClick: () => j(!1),
                  children: t("dashboard.account.badges.actions.cancel")
                })]
              })]
            }) : "customBadgePreview" === b ? (0, n.jsxs)("div", {
              className: i().customBadgePreviewModal,
              children: [(0, n.jsxs)("div", {
                className: i().iconUploadWrapper,
                children: [(0, n.jsx)("h1", {
                  className: i().uploaderHeadingText,
                  children: t("dashboard.account.badges.custom.edit.icon_label")
                }), (0, n.jsx)("div", {
                  className: i().iconUpload,
                  children: "" === eA ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                      className: i().uploadCardText,
                      children: [c.A.image, (0, n.jsx)("h1", {
                        children: t("dashboard.account.badges.custom.edit.upload_prompt")
                      })]
                    }), (0, n.jsx)("input", {
                      type: "file",
                      accept: J.vJ.badge.map(e => e).join(", "),
                      onChange: e => {
                        eP(e, !0)
                      }
                    })]
                  }) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                      className: i().fileBadge,
                      children: [(0, n.jsx)("span", {
                        children: eM(ew && ew.name ? ew.name : eA).toUpperCase()
                      }), (0, n.jsx)("span", {
                        onClick: () => eE(!0),
                        children: c.A.deleteFile
                      })]
                    }), (0, n.jsx)("img", {
                      src: eA,
                      alt: "Badge",
                      className: i().uploadCardImage
                    })]
                  })
                })]
              }), (0, n.jsxs)("div", {
                children: [(0, n.jsx)("h1", {
                  className: i().customBadgePreviewText,
                  children: t("dashboard.account.badges.custom.preview.title")
                }), (0, n.jsx)("div", {
                  className: i().customBadgePreviewDiv,
                  children: "" !== eA ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("h1", {
                      children: t("dashboard.account.badges.custom.preview.username")
                    }), (0, n.jsxs)("div", {
                      className: i().customBadgePreviewContainer,
                      children: [(0, n.jsx)("div", {
                        className: i().customBadgePreview,
                        children: l.A.premium
                      }), (0, n.jsx)("div", {
                        className: i().customBadgePreview,
                        children: l.A.imagehost
                      }), (0, n.jsx)("div", {
                        className: i().customBadgePreview,
                        children: l.A.donor
                      }), (0, n.jsx)("div", {
                        className: i().customBadgePreview,
                        children: (0, n.jsx)("img", {
                          src: eA,
                          alt: "Badge",
                          draggable: !1
                        })
                      })]
                    })]
                  }) : (0, n.jsx)("h1", {
                    className: i().customBadgeIconText,
                    children: t("dashboard.account.badges.custom.preview.no_icon")
                  })
                })]
              }), (0, n.jsx)("span", {
                className: i().customBadgePreviewModalButton,
                onClick: eI,
                children: t("dashboard.account.badges.custom.preview.purchase_button")
              })]
            }) : "customBadgePurchase" === b ? (0, n.jsx)(G.A, {
              purchaseSource: N.v.badges
            }) : "hone" === b && (0, n.jsxs)("div", {
              className: i().honeModal,
              children: [(0, n.jsx)("h1", {
                children: t("dashboard.account.badges.hone_badge.title")
              }), (0, n.jsx)("h3", {
                children: t("dashboard.account.badges.hone_badge.description")
              }), (0, n.jsxs)("div", {
                className: i().honeQuickActions,
                children: [(0, n.jsxs)("a", {
                  href: "https://hone.gg/a/guns",
                  target: "_blank",
                  rel: "noreferrer",
                  className: i().honePrimary,
                  children: [(0, n.jsx)("img", {
                    src: "https://assets.guns.lol/hone_x_guns/Hone%20Icon%20Full%20Dark%404x.png",
                    alt: ""
                  }), " ", t("dashboard.account.badges.hone_badge.download_button")]
                }), (0, n.jsxs)("a", {
                  href: "/account/redeem?select=hone_promo",
                  className: i().honeGhost,
                  target: "_blank",
                  children: [L.A.key, " ", t("dashboard.account.badges.hone_badge.redeem_button")]
                })]
              }), (0, n.jsx)("div", {
                className: i().honeSteps,
                children: Array.from({
                  length: 5
                }, (e, a) => {
                  let s = a + 1;
                  return (0, n.jsxs)("div", {
                    className: i().honeStep,
                    children: [(0, n.jsx)("span", {
                      className: i().honeStepBadge,
                      children: s
                    }), (0, n.jsxs)("div", {
                      children: [(0, n.jsx)("h3", {
                        children: t(`dashboard.account.badges.hone_badge.steps.${s}.title`)
                      }), (0, n.jsx)("p", {
                        children: t(`dashboard.account.badges.hone_badge.steps.${s}.description`, {
                          link: (0, n.jsx)("a", {
                            href: "/account/redeem?select=hone_promo",
                            target: "_blank",
                            children: "guns.lol/account/redeem"
                          })
                        })
                      })]
                    })]
                  }, s)
                })
              }), (0, n.jsx)("span", {
                className: i().honePartner,
                children: t("dashboard.account.badges.hone_badge.partner_notice")
              })]
            })
          }), (0, n.jsx)(r.l$, {
            richColors: !0,
            position: "top-center",
            theme: "dark",
            className: g().toasterStyles,
            icons: {
              success: L.A.successToast
            },
            visibleToasts: 2
          }), (0, n.jsxs)("div", {
            className: i().containerGap,
            children: [(0, n.jsxs)("div", {
              className: `${i().allBadgesContainer} ${!v?i().allBadgesCollapsed:""}`,
              children: [(0, n.jsxs)("div", {
                className: i().badgeContainerHeading,
                children: [(0, n.jsx)("h1", {
                  className: i().badgeText,
                  children: t("dashboard.account.badges.sections.all_badges.title")
                }), (0, n.jsx)("span", {
                  onClick: () => {
                    S(!v)
                  },
                  className: `${i().badgeToggle} ${v?i().rotateArrow:""}`,
                  children: c.A.arrowUp
                })]
              }), (0, n.jsx)("div", {
                className: `${i().badgeCollapseWrapper} ${v?i().badgeCollapseOpen:i().badgeCollapseClosed}`,
                style: ev,
                children: (0, n.jsx)("div", {
                  ref: A,
                  className: i().badgeContainer,
                  children: eg.map((e, a) => (0, n.jsxs)("div", {
                    className: i().badge,
                    children: [(0, n.jsxs)("div", {
                      className: i().badgeWrapper,
                      children: [(0, n.jsx)("div", {
                        className: i().badgeIcon,
                        children: e.icon
                      }), (0, n.jsxs)("div", {
                        className: i().badgeTextContainer,
                        children: [(0, n.jsx)("h1", {
                          children: e.name
                        }), (0, n.jsx)("h3", {
                          children: e.description
                        })]
                      })]
                    }), e.button && "function" == typeof e.button.action && e.button.isEnabled ? (0, n.jsx)("button", {
                      className: i().badgeButton,
                      onClick: e.button.action,
                      children: e.button.text
                    }) : "string" == typeof e.button?.action && e.button?.isEnabled ? (0, n.jsx)("a", {
                      className: i().badgeButton,
                      href: e.button.action,
                      target: "_blank",
                      children: e.button.text
                    }) : e.button && void 0 !== e.button.isEnabled && (0, n.jsx)("button", {
                      className: i().badgeButtonDisabled,
                      disabled: !0,
                      children: e.button.disabledText
                    })]
                  }, a))
                })
              })]
            }), (0, n.jsxs)("div", {
              className: i().customBadgesContainer,
              children: [(0, n.jsxs)("h1", {
                children: [t("dashboard.account.badges.custom.section.title"), " ", (0, n.jsxs)("span", {
                  children: [c.A.sparkles, " ", t("dashboard.account.badges.custom.section.tag_new")]
                })]
              }), (0, n.jsx)("h3", {
                children: t("dashboard.account.badges.custom.section.description")
              }), (0, n.jsxs)("div", {
                className: i().customBadgesContainerButtons,
                children: [(0, n.jsx)("span", {
                  className: i().customBadgesContainerButton,
                  onClick: eI,
                  children: t("dashboard.account.badges.custom.section.buttons.purchase")
                }), (0, n.jsx)("span", {
                  className: i().customBadgesContainerPreviewButton,
                  onClick: () => {
                    x("customBadgePreview"), j(!0)
                  },
                  children: t("dashboard.account.badges.custom.section.buttons.preview")
                })]
              })]
            }), (0 !== $.length || 0 !== V.length) && Z ? (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsxs)("div", {
                className: i().badgeSettings,
                children: [(0, n.jsx)("h1", {
                  className: i().badgeSettingsText,
                  children: t("dashboard.account.badges.settings.title")
                }), (0, n.jsx)("div", {
                  className: g().featureContainer,
                  style: {
                    marginTop: 0
                  },
                  children: (0, n.jsx)("div", {
                    className: i().generalComponentContainer,
                    children: (0, n.jsx)("div", {
                      className: i().generalComponentLeft,
                      children: (0, n.jsxs)("div", {
                        className: i().featureRow,
                        children: [(0, n.jsx)(w.A, {
                          featureName: t("dashboard.account.badges.settings.monochrome.label"),
                          helpDescription: t("dashboard.account.badges.settings.monochrome.description"),
                          element: (0, n.jsx)(h.A, {
                            onChangeFunction: e => el(e.currentTarget.checked),
                            defaultChecked: ec
                          })
                        }), (0, n.jsx)(p.A, {
                          featureName: t("dashboard.account.badges.settings.badge_color"),
                          onChangeFunction: em,
                          value: eu
                        })]
                      })
                    })
                  })
                }), (0, n.jsx)("span", {
                  className: i().badgeSaveButton,
                  onClick: ej,
                  children: R
                })]
              }), 0 !== $.length && (0, n.jsxs)("div", {
                className: i().myBadgesContainer,
                children: [(0, n.jsx)("h1", {
                  className: i().myBadgesText,
                  children: t("dashboard.account.badges.sections.my_badges.title")
                }), (0, n.jsx)("style", {
                  children: `
                                .${i().myBadgesContainer} .${g().inputContainerWrapper} {
                                    width: fit-content;
                                }
                                `
                }), (0, n.jsx)(P, {
                  badges: $,
                  setBadges: z,
                  badgeIcons: l.A,
                  iconNameMapper: {
                    staff: "staff",
                    premium: "premium",
                    verified: "verified",
                    donor: "donor",
                    og: "og",
                    server_booster: "serverBooster",
                    winner: "winner",
                    second: "second",
                    third: "third",
                    imagehost_access: "imagehost",
                    bughunter: "bugHunter",
                    christmas_2024: "christmas2024",
                    christmas_2025: "christmas2025",
                    domain_legend: "domainLegend",
                    summer_2026: "summer2026",
                    easter_2025: "easter2025",
                    easter_2026: "easter2026",
                    helper: "helper",
                    gifter: "gifter",
                    the_million: "theMillion",
                    hone: "hone"
                  },
                  badgeNameMapper: ex,
                  handleBadgeToggle: ef
                })]
              })]
            }) : !Z && (0, n.jsxs)("div", {
              className: i().upgradePremium,
              children: [(0, n.jsxs)("div", {
                className: i().upgradePremiumDescription,
                children: [(0, n.jsxs)("h1", {
                  children: [c.A.premium, " ", t("dashboard.account.badges.upgrade.title")]
                }), (0, n.jsx)("h3", {
                  children: t("dashboard.account.badges.upgrade.description")
                })]
              }), (0, n.jsx)("button", {
                onClick: () => {
                  x("premium"), j(!0)
                },
                children: t("dashboard.account.badges.upgrade.button")
              })]
            }), 0 !== V.length && (0, n.jsxs)("div", {
              className: i().myBadgesContainer,
              children: [(0, n.jsxs)("h1", {
                className: i().myBadgesText,
                children: [t("dashboard.account.badges.custom.list.title"), (0, n.jsxs)("div", {
                  className: i().badgeCreditsContainer,
                  children: [(0, n.jsx)("span", {
                    className: `${i().badgeCredits} ${0===eh&&i().red}`,
                    children: t("dashboard.account.badges.custom.list.credits_left", {
                      count: eh
                    })
                  }), (0, n.jsxs)("span", {
                    className: i().buyBadgeCredits,
                    onClick: e_,
                    children: [c.A.shoppingBag, " ", t("dashboard.account.badges.custom.list.buy_button")]
                  })]
                })]
              }), (0, n.jsx)("style", {
                children: `
                                            .${i().myBadgesContainer} .${g().inputContainerWrapper} {
                                                width: fit-content;
                                            }
                                        `
              }), (0, n.jsx)(T, {
                customBadges: V,
                setCustomBadges: X,
                handleCustomBadgeToggle: e$,
                handleCustomBadgeEdit: eR,
                isPremium: e.premium
              })]
            })]
          })]
        })
      }
    },
    27524: (e, a, s) => {
      Promise.resolve().then(s.bind(s, 25272)), Promise.resolve().then(s.bind(s, 69783)), Promise.resolve().then(s.bind(s, 13770)), Promise.resolve().then(s.bind(s, 41112)), Promise.resolve().then(s.bind(s, 21957))
    },
    30184: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => p
      });
      var t = s(95155),
        n = s(12115),
        d = s(47650),
        o = s(29722),
        i = s(98241),
        r = s.n(i),
        c = s(65095),
        l = s.n(c);
      let u = "#1c1c1c",
        m = (e, a, s) => Math.min(Math.max(e, a), s),
        h = e => {
          if (!e) return "";
          let a = e.trim(),
            s = a.replace(/^#/, "").replace(/[^0-9a-f]/gi, "").slice(0, 6).toLowerCase();
          return s ? `#${s}` : a.startsWith("#") ? "#" : ""
        },
        b = e => {
          let a, s, t, n, d, o, i, {
            r,
            g: c,
            b: l
          } = {
            r: (a = parseInt(e.replace("#", ""), 16)) >> 16 & 255,
            g: a >> 8 & 255,
            b: 255 & a
          };
          return o = (d = Math.max(s = r / 255, t = c / 255, n = l / 255)) - Math.min(s, t, n), i = 0, 0 !== o && (i = (d === s ? (t - n) / o % 6 : d === t ? (n - s) / o + 2 : (s - t) / o + 4) * 60) < 0 && (i += 360), {
            h: i,
            s: 0 === d ? 0 : o / d,
            v: d
          }
        },
        g = (0, t.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "19",
          height: "19",
          viewBox: "0 0 24 24",
          children: (0, t.jsx)("path", {
            fill: "currentColor",
            d: "M19.5 3.56a2.26 2.26 0 0 0-3.18 0l-2.05 2.05l-.48-.48a.75.75 0 0 0-1.06 0l-1 1a.75.75 0 0 0 0 1.06l.48.48l-6.8 6.8a2.5 2.5 0 0 0-.66 1.15l-.54 2.06a1 1 0 0 0 1.21 1.21l2.06-.54a2.5 2.5 0 0 0 1.15-.66l6.8-6.8l.48.48a.75.75 0 0 0 1.06 0l1-1a.75.75 0 0 0 0-1.06l-.48-.48l2.05-2.05a2.26 2.26 0 0 0 0-3.18Z"
          })
        });

      function p({
        featureName: e,
        onChangeFunction: a,
        value: s,
        placeholder: i = "#000000",
        icon: c,
        className: p,
        disabled: x,
        style: f,
        ...j
      }) {
        let v = (0, n.useRef)(null),
          _ = (0, n.useRef)(null),
          N = (0, n.useRef)(null),
          [y, C] = (0, n.useState)(!1),
          [B, w] = (0, n.useState)(() => b(u)),
          [S, A] = (0, n.useState)(u),
          [k, P] = (0, n.useState)({
            left: 0,
            top: 0,
            width: 220
          }),
          [E, T] = (0, n.useState)(!1),
          M = h("string" == typeof s ? s : ""),
          R = (0, n.useMemo)(() => M ? (e => {
            if (/^#[0-9a-f]{6}$/i.test(e)) return e.toLowerCase();
            if (/^#[0-9a-f]{3}$/i.test(e)) return `#${e.slice(1).split("").map(e=>`${e}${e}`).join("")}`.toLowerCase();
            return null
          })(M) : null, [M]),
          O = R ?? S;
        (0, n.useEffect)(() => {
          R && A(R)
        }, [R]), (0, n.useEffect)(() => {
          w(b(O))
        }, [O]), (0, n.useEffect)(() => {
          T(!0)
        }, []);
        let $ = (0, n.useCallback)(() => {
          if (!v.current) return;
          let e = v.current.getBoundingClientRect(),
            a = Math.min(270, e.width),
            s = N.current?.offsetHeight ?? 260,
            t = e.bottom + 10;
          if (t + s > window.innerHeight - 12) {
            let a = e.top - 10 - s;
            a >= 12 && (t = a)
          }
          let n = window.innerWidth - a - 12;
          P({
            left: m(e.left, 12, Math.max(12, n)),
            top: t,
            width: a
          })
        }, []);
        (0, n.useLayoutEffect)(() => {
          if (!y) return;
          let e = () => {
            $()
          };
          return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
            window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0)
          }
        }, [y, $]), (0, n.useEffect)(() => {
          if (!y) return;
          let e = e => {
              let a = e.target,
                s = v.current,
                t = N.current;
              s && s.contains(a) || t && t.contains(a) || C(!1)
            },
            a = e => {
              "Escape" === e.key && C(!1)
            };
          return document.addEventListener("mousedown", e), document.addEventListener("keydown", a), () => {
            document.removeEventListener("mousedown", e), document.removeEventListener("keydown", a)
          }
        }, [y]);
        let I = (0, n.useCallback)(e => {
            w(e);
            let s = (e => {
              let a, {
                r: s,
                g: t,
                b: n
              } = (({
                h: e,
                s: a,
                v: s
              }) => {
                let t = s * a,
                  n = t * (1 - Math.abs(e / 60 % 2 - 1)),
                  d = s - t,
                  o = 0,
                  i = 0,
                  r = 0;
                e < 60 ? (o = t, i = n) : e < 120 ? (o = n, i = t) : e < 180 ? (i = t, r = n) : e < 240 ? (i = n, r = t) : e < 300 ? (o = n, r = t) : (o = t, r = n);
                let c = Math.round((o + d) * 255);
                return {
                  r: c,
                  g: Math.round((i + d) * 255),
                  b: Math.round((r + d) * 255)
                }
              })({
                ...e,
                h: (e.h % 360 + 360) % 360,
                s: m(e.s, 0, 1),
                v: m(e.v, 0, 1)
              });
              return a = e => e.toString(16).padStart(2, "0"), `#${a(s)}${a(t)}${a(n)}`
            })(e);
            A(s), a?.(s)
          }, [a]),
          L = (0, n.useCallback)(e => {
            let s = h(e.target.value);
            a?.(s)
          }, [a]),
          D = (0, n.useCallback)((e, a) => {
            if (!_.current) return;
            let s = _.current.getBoundingClientRect(),
              t = m((e - s.left) / s.width, 0, 1),
              n = m((a - s.top) / s.height, 0, 1);
            I({
              h: B.h,
              s: t,
              v: 1 - n
            })
          }, [B.h, I]),
          U = (0, n.useCallback)(e => {
            if (x) return;
            e.preventDefault();
            let a = e.pointerId;
            D(e.clientX, e.clientY);
            let s = e => {
                e.pointerId === a && D(e.clientX, e.clientY)
              },
              t = e => {
                e.pointerId === a && (document.removeEventListener("pointermove", s), document.removeEventListener("pointerup", t))
              };
            document.addEventListener("pointermove", s), document.addEventListener("pointerup", t)
          }, [x, D]),
          F = (0, n.useCallback)(e => {
            I({
              ...B,
              h: Number(e.target.value)
            })
          }, [B, I]),
          W = (0, n.useCallback)(() => {
            x || C(e => (e || $(), !0))
          }, [x, $]),
          G = (0, n.useCallback)(() => {
            x || C(e => {
              let a = !e;
              return a && $(), a
            })
          }, [x, $]),
          H = (0, o.A)(r().inputWrapperInput, l().textInput, c && l().textInputWithIcon, p),
          q = "undefined" != typeof document ? document.body : null,
          J = !!(y && E && q),
          z = J ? {
            position: "fixed",
            left: `${k.left}px`,
            top: `${k.top}px`,
            width: `${k.width}px`
          } : void 0,
          V = "string" == typeof e ? e : void 0,
          X = (0, t.jsxs)("div", {
            ref: N,
            className: l().panel,
            style: z,
            "data-vaul-no-drag": !0,
            children: [(0, t.jsxs)("div", {
              ref: _,
              className: l().svArea,
              style: {
                backgroundColor: `hsl(${B.h}, 100%, 50%)`
              },
              onPointerDown: U,
              children: [(0, t.jsx)("div", {
                className: l().svWhiteOverlay
              }), (0, t.jsx)("div", {
                className: l().svBlackOverlay
              }), (0, t.jsx)("div", {
                className: l().svCursor,
                style: {
                  left: `${100*B.s}%`,
                  top: `${(1-B.v)*100}%`
                }
              })]
            }), (0, t.jsx)("div", {
              className: l().hueSliderWrapper,
              children: (0, t.jsx)("input", {
                type: "range",
                min: 0,
                max: 360,
                step: 1,
                value: B.h,
                onChange: F,
                className: l().hueSlider,
                disabled: x
              })
            })]
          });
        return (0, t.jsxs)("div", {
          className: r().inputContainerWrapper,
          "data-dashboard-feature-label": V,
          children: [(0, t.jsx)("h1", {
            className: r().featureName,
            children: e
          }), (0, t.jsxs)("div", {
            className: (0, o.A)(r().inputWrapperDiv, l().wrapper),
            ref: v,
            children: [(0, t.jsx)("button", {
              type: "button",
              className: l().leftSwatchButton,
              onClick: G,
              style: {
                cursor: x ? "not-allowed" : "pointer"
              },
              disabled: x,
              children: (0, t.jsx)("span", {
                className: l().colorSwatch,
                style: {
                  backgroundColor: O
                }
              })
            }), c && (0, t.jsx)("span", {
              className: l().leftIcon,
              children: c
            }), (0, t.jsx)("input", {
              type: "text",
              autoComplete: "off",
              spellCheck: !1,
              inputMode: "text",
              maxLength: 7,
              className: H,
              placeholder: i,
              value: M,
              onChange: L,
              onFocus: W,
              onClick: W,
              disabled: x,
              style: f,
              ...j
            }), (0, t.jsx)("button", {
              type: "button",
              className: l().pickerButton,
              onClick: G,
              disabled: x,
              children: g
            }), y && (J && q ? (0, d.createPortal)(X, q) : X)]
          })]
        })
      }
    },
    41112: (e, a, s) => {
      "use strict";

      function t({
        reason: e,
        children: a
      }) {
        return a
      }
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), Object.defineProperty(a, "BailoutToCSR", {
        enumerable: !0,
        get: function() {
          return t
        }
      }), s(1980)
    },
    57157: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => r
      });
      var t = s(95155),
        n = s(98241),
        d = s.n(n),
        o = s(54834),
        i = s(81576);

      function r({
        featureName: e,
        helpDescription: a,
        element: s,
        id: n
      }) {
        return (0, t.jsxs)("div", {
          className: d().featureName,
          "data-dashboard-feature-label": "string" == typeof e ? e : void 0,
          children: [(0, t.jsxs)("h1", {
            className: d().featureNameText,
            style: {
              marginBottom: "6px"
            },
            children: [e, (0, t.jsxs)(i.Ay, {
              width: "370px",
              position: "top",
              id: n,
              children: [(0, t.jsx)(i.Ay.Target, {
                children: o.A.help
              }), (0, t.jsx)(i.Ay.Dropdown, {
                children: (0, t.jsx)("div", {
                  className: d().helpDescription,
                  children: a.split("\n").map((e, a) => (0, t.jsxs)("span", {
                    children: [e, (0, t.jsx)("br", {})]
                  }, a))
                })
              })]
            })]
          }), s]
        })
      }
    },
    64054: (e, a) => {
      "use strict";
      Object.defineProperty(a, "__esModule", {
        value: !0
      });
      var s = {
        bindSnapshot: function() {
          return r
        },
        createAsyncLocalStorage: function() {
          return i
        },
        createSnapshot: function() {
          return c
        }
      };
      for (var t in s) Object.defineProperty(a, t, {
        enumerable: !0,
        get: s[t]
      });
      let n = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
        value: "E504",
        enumerable: !1,
        configurable: !0
      });
      class d {
        disable() {
          throw n
        }
        getStore() {}
        run() {
          throw n
        }
        exit() {
          throw n
        }
        enterWith() {
          throw n
        }
        static bind(e) {
          return e
        }
      }
      let o = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;

      function i() {
        return o ? new o : new d
      }

      function r(e) {
        return o ? o.bind(e) : d.bind(e)
      }

      function c() {
        return o ? o.snapshot() : function(e, ...a) {
          return e(...a)
        }
      }
    },
    65095: e => {
      e.exports = {
        wrapper: "GUNS__e1-f8f642a4-f6d47d23-fb654296",
        textInput: "GUNS__ab-a5d3bdab-cc778255-657e2cc4",
        textInputWithIcon: "GUNS__fc-40c58644-d0c31024-70c7140e",
        leftSwatchButton: "GUNS__3a-b829acea-47c748b8-50a13f3f",
        colorSwatch: "GUNS__2e-1339255d-a7d84b7f-0ea67142",
        leftIcon: "GUNS__aa-902256d4-5487d5f8-b9613ef0",
        pickerButton: "GUNS__92-4f4687b2-1e664613-974c4960",
        panel: "GUNS__38-a51c3e41-62cbb5a1-ccccab8b",
        svArea: "GUNS__2c-a7bb8984-7029b34c-14a9174a",
        svWhiteOverlay: "GUNS__b2-febba06e-61337463-5b9fb42c",
        svBlackOverlay: "GUNS__6b-ae93a09c-8aab347b-8e4436a2",
        svCursor: "GUNS__d1-b875ba75-f1517f91-aeffde62",
        hueSliderWrapper: "GUNS__f2-1b8470e4-71cc8038-7031f1f6",
        hueSlider: "GUNS__6c-f4fedfd4-da5b3cbc-6c77e2c2"
      }
    },
    73728: e => {
      e.exports = {
        switch: "GUNS__37-bebc3157-36356f81-31aa98a5",
        input: "GUNS__07-6848431b-ec698247-987f2132",
        track: "GUNS__c1-89bc1537-00272519-3133d28f",
        thumb: "GUNS__13-b5e3f9d4-24f5d8e3-cfe09b0b"
      }
    },
    79157: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => m
      });
      var t = s(95155),
        n = s(12115),
        d = s(91801),
        o = s.n(d),
        i = s(97478),
        r = s(3434),
        c = s(50686),
        l = s(86891),
        u = s(61836);

      function m({
        purchaseSource: e = "unknown"
      }) {
        let a = (0, l.kj)(),
          [s, d] = (0, n.useState)(1),
          [m, h] = (0, n.useState)(!1),
          b = async e => {
            h(!0)
          }, g = s > 1 ? (0, t.jsxs)(t.Fragment, {
            children: [(0, u.o3)(s).totalPrice, "€ ", (0, t.jsxs)("s", {
              children: [(0, u.o3)(s).rawPrice, "€"]
            })]
          }) : (0, t.jsxs)(t.Fragment, {
            children: [(0, u.o3)(s).totalPrice, "€"]
          });
        return (0, t.jsx)(t.Fragment, {
          children: m ? (0, t.jsx)(c.A, {
            type: "customBadge",
            customBadgeData: {
              amount: s,
              totalPrice: (0, u.o3)(s).totalPrice
            },
            purchaseSource: e
          }) : (0, t.jsxs)("div", {
            className: o().CustomBadgePurchaseModal,
            children: [(0, t.jsx)(i.A, {
              featureName: a("modals.custom_badge.title"),
              max: 500,
              value: s,
              min: 1,
              onChange: d,
              icon: r.A.shoppingBag
            }), (0, t.jsxs)("div", {
              className: o().CustomBadgePurchaseModalDiscount,
              children: [(0, t.jsx)("h1", {
                children: a("modals.custom_badge.information_text")
              }), (0, t.jsx)("h3", {
                children: a("modals.custom_badge.description", {
                  percentage: (0, u.o3)(s).discountPercent,
                  quantity: s
                })
              })]
            }), (0, t.jsx)("span", {
              className: o().CustomBadgePurchaseModalButton,
              onClick: b,
              children: a("modals.custom_badge.purchase_text", {
                price: g
              })
            })]
          })
        })
      }
    },
    81469: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => m
      });
      var t = s(95155),
        n = s(29722),
        d = s(12115),
        o = s(98241),
        i = s.n(o),
        r = s(73728),
        c = s.n(r),
        l = s(86891);
      let u = ["ar", "he", "fa", "ur"];

      function m({
        featureName: e,
        onChangeFunction: a,
        className: s,
        id: o,
        onChange: r,
        defaultChecked: m,
        disabled: h,
        ...b
      }) {
        let g = (0, l.useLang)(),
          p = (0, d.useId)(),
          x = u.includes(g) ? "rtl" : "ltr",
          f = "string" == typeof e ? e : void 0;
        return (0, t.jsxs)("div", {
          className: i().inputContainerWrapper,
          "data-dashboard-feature-label": f,
          children: [e && (0, t.jsx)("h1", {
            className: i().featureName,
            children: e
          }), (0, t.jsx)("div", {
            className: i().inputWrapperDiv,
            style: {
              direction: x
            },
            children: (0, t.jsxs)("label", {
              className: (0, n.A)(c().switch, s),
              "data-disabled": h,
              "data-direction": x,
              children: [(0, t.jsx)("input", {
                ...b,
                id: o ?? p,
                type: "checkbox",
                className: c().input,
                defaultChecked: m,
                disabled: h,
                onChange: e => {
                  r?.(e), a?.(e)
                }
              }), (0, t.jsx)("span", {
                className: c().track,
                children: (0, t.jsx)("span", {
                  className: c().thumb
                })
              })]
            })
          })]
        })
      }
    }
  },
  e => {
    e.O(0, [8392, 7958, 6870, 379, 1899, 4236, 6609, 4293, 5810, 6746, 7256, 6891, 5886, 9182, 8481, 3434, 1378, 6788, 5395, 2840, 7109, 8542, 8441, 3794, 7358], () => e(e.s = 27524)), _N_E = e.O()
  }
]);