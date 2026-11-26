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
        default: () => X
      });
      var n = s(95155),
        d = s(98028),
        o = s(24795),
        i = s(12115),
        r = s(50163),
        c = s.n(r),
        l = s(66609),
        u = s(7109),
        m = s(15041),
        h = s(33029),
        b = s(58455),
        g = s(81469),
        p = s(98241),
        x = s.n(p),
        f = s(30184),
        j = s(91801),
        v = s.n(j),
        _ = s(3434),
        N = s(97478),
        y = s(50686),
        C = s(13699),
        B = s(86891),
        w = s(61836);

      function k({
        isDonor: e
      }) {
        let a = (0, B.kj)(),
          [s, t] = (0, i.useState)(0),
          [d, o] = (0, i.useState)(!1),
          r = async () => {
            s < w.q9.donationMinimum || o(!0)
          };
        return (0, n.jsx)(n.Fragment, {
          children: d ? (0, n.jsx)(y.A, {
            type: "donation",
            donationAmount: s,
            purchaseSource: C.v.badges
          }) : (0, n.jsxs)("div", {
            className: v().donation,
            children: [(0, n.jsx)("h3", {
              children: a("dashboard.account.badges.donation_modal.description")
            }), (0, n.jsxs)("div", {
              className: v().donationAmount,
              children: [(0, n.jsx)(N.A, {
                featureName: a("dashboard.account.badges.donation_modal.amount_label"),
                onChangeFunction: e => {
                  t(e)
                },
                min: w.q9.donationMinimum,
                max: 1e4,
                step: .01,
                value: s,
                placeholder: w.q9.donorBadgeMinimum,
                icon: _.A.donation
              }), s < w.q9.donorBadgeMinimum && !e ? (0, n.jsx)("h3", {
                className: v().donateMoreText,
                children: a("dashboard.account.badges.donation_modal.badge_requirement", {
                  amount: (w.q9.donorBadgeMinimum - s).toFixed(2)
                })
              }) : e && (0, n.jsx)("h3", {
                className: v().alreadyDonatedText,
                children: a("dashboard.account.badges.donation_modal.already_donor")
              })]
            }), (0, n.jsx)("button", {
              className: v().payButton,
              onClick: r,
              children: a("dashboard.account.badges.donation_modal.pay_button")
            })]
          })
        })
      }
      var S = s(57157),
        A = s(44923),
        P = s(87256),
        E = s(39768);

      function T({
        badges: e,
        setBadges: a,
        badgeIcons: s,
        iconNameMapper: t,
        badgeNameMapper: d,
        handleBadgeToggle: o
      }) {
        let r = (0, B.kj)(),
          [u, m] = (0, i.useState)(e),
          [h, b] = (0, i.useState)(null),
          [g, p] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
          p(!0)
        }, []), (0, i.useEffect)(() => {
          m(e)
        }, [e]);
        let x = (0, A.FR)((0, A.MS)(A.AN, {
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
            let o = (0, P.VE)(u, n, d),
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
            })).ok || l.oR.error(r("dashboard.account.errors.badge_order"))
          };
        return g ? (0, n.jsxs)(A.Mp, {
          sensors: x,
          collisionDetection: A.fp,
          onDragStart: e => {
            let {
              active: a
            } = e, s = u.find(e => e.name === a.id);
            s && b(s)
          },
          onDragEnd: f,
          children: [(0, n.jsx)(P.gB, {
            items: u.map(e => e.name),
            strategy: P.vl,
            children: (0, n.jsx)("div", {
              className: c().userBadgesContainer,
              "data-vaul-no-drag": !0,
              children: u.map((e, i) => (0, n.jsx)(M, {
                item: e,
                setBadges: a,
                badgeIcons: s,
                iconNameMapper: t,
                badgeNameMapper: d,
                handleBadgeToggle: o
              }, i))
            })
          }), (0, n.jsx)(A.Hd, {
            children: h && (0, n.jsx)(M, {
              item: h,
              setBadges: a,
              badgeIcons: s,
              iconNameMapper: t,
              badgeNameMapper: d,
              handleBadgeToggle: o,
              isOverlay: !0
            })
          })]
        }) : null
      }

      function M({
        item: e,
        badgeIcons: a,
        iconNameMapper: s,
        badgeNameMapper: t,
        handleBadgeToggle: d,
        isOverlay: o = !1
      }) {
        let {
          attributes: i,
          listeners: r,
          setNodeRef: l,
          transform: m,
          transition: h,
          isDragging: b
        } = (0, P.gl)({
          id: e.name,
          animateLayoutChanges: () => !1
        }), p = {
          transform: E.Ks.Transform.toString(m),
          transition: h,
          opacity: +!b
        };
        return (0, n.jsxs)("div", {
          ref: l,
          style: p,
          className: c().myBadge,
          children: [(0, n.jsx)("div", {
            className: c().dragHandleContainer,
            ...i,
            ...r,
            children: u.A.dragHandle
          }), (0, n.jsxs)("div", {
            className: c().myBadgeSwitchWrapper,
            children: [(0, n.jsxs)("div", {
              className: c().myBadgeWrapper,
              children: [(0, n.jsx)("div", {
                className: c().badgeIcon,
                children: a[s[e.name]]
              }), (0, n.jsx)("h1", {
                children: t[e.name]
              })]
            }), (0, n.jsx)(g.A, {
              featureName: "",
              onChangeFunction: a => d(a, e.name),
              checked: e.enabled
            })]
          })]
        })
      }

      function R({
        customBadges: e,
        setCustomBadges: a,
        handleCustomBadgeEdit: s,
        handleCustomBadgeToggle: t,
        isPremium: d
      }) {
        let o = (0, B.kj)(),
          [r, u] = (0, i.useState)(e),
          [m, h] = (0, i.useState)(null),
          [b, g] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
          g(!0)
        }, []), (0, i.useEffect)(() => {
          u(e)
        }, [e]);
        let p = (0, A.FR)((0, A.MS)(A.AN, {
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
            let n = r.findIndex(e => e.id === s.id),
              d = r.findIndex(e => e.id === t.id);
            if (-1 === n || -1 === d || d === n) return;
            let i = (0, P.VE)(r, n, d),
              c = i.map(e => e.isString ? [e.name, e.icon] : {
                id: e.id
              });
            u(i), a(i), (await fetch("https://guns.lol/api/account/badges/order", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                newOrder: c,
                type: "customBadge"
              })
            })).ok || l.oR.error(o("dashboard.account.errors.badge_order"))
          };
        return b ? (0, n.jsxs)(A.Mp, {
          sensors: p,
          collisionDetection: A.fp,
          onDragStart: e => {
            let {
              active: a
            } = e, s = r.find(e => e.id === a.id);
            s && h(s)
          },
          onDragEnd: x,
          children: [(0, n.jsx)(P.gB, {
            items: r.map(e => e.id),
            strategy: P.vl,
            children: (0, n.jsx)("div", {
              className: c().userBadgesContainer,
              "data-vaul-no-drag": !0,
              children: r.map(e => (0, n.jsx)(O, {
                item: e,
                setCustomBadges: a,
                handleCustomBadgeToggle: t,
                handleCustomBadgeEdit: s,
                isPremium: d
              }, e.id))
            })
          }), (0, n.jsx)(A.Hd, {
            children: m && (0, n.jsx)(O, {
              item: m,
              setCustomBadges: a,
              handleCustomBadgeToggle: t,
              handleCustomBadgeEdit: s,
              isOverlay: !0,
              isPremium: d
            })
          })]
        }) : null
      }

      function O({
        item: e,
        setCustomBadges: a,
        handleCustomBadgeEdit: s,
        handleCustomBadgeToggle: t,
        isPremium: d,
        isOverlay: o = !1
      }) {
        let {
          attributes: i,
          listeners: r,
          setNodeRef: l,
          transform: m,
          transition: h,
          isDragging: b
        } = (0, P.gl)({
          id: e.id,
          animateLayoutChanges: () => !1
        }), p = {
          transform: E.Ks.Transform.toString(m),
          transition: h,
          opacity: +!b
        };
        return (0, n.jsxs)("div", {
          ref: l,
          style: p,
          className: c().myBadge,
          children: [d && (0, n.jsx)("div", {
            className: c().dragHandleContainer,
            ...i,
            ...r,
            style: {
              height: "69px"
            },
            children: u.A.dragHandle
          }), (0, n.jsxs)("div", {
            className: c().myBadgeSwitchWrapper,
            style: {
              height: "69px"
            },
            children: [(0, n.jsxs)("div", {
              className: c().myBadgeWrapper,
              children: [(0, n.jsx)("div", {
                className: c().badgeIcon,
                children: (0, n.jsx)("img", {
                  src: e.icon,
                  alt: "Custom Badge Icon"
                })
              }), (0, n.jsx)("h1", {
                children: e.name
              })]
            }), (0, n.jsxs)("div", {
              className: c().customBadgeActionsWrapper,
              children: [d && (0, n.jsx)(g.A, {
                featureName: "",
                onChangeFunction: a => t(a, e.isString ? e.name : e.id),
                checked: e.enabled
              }), (0, n.jsx)("span", {
                className: c().customBadgeSettings,
                onClick: () => s({
                  ...e,
                  originalName: e.name
                }),
                children: u.A.editBadge
              })]
            })]
          })]
        })
      }
      let $ = "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto),
        I = new Uint8Array(16),
        L = [];
      for (let e = 0; e < 256; ++e) L.push((e + 256).toString(16).slice(1));
      let D = function(e, a, s) {
        if ($ && !a && !e) return $();
        let n = (e = e || {}).random ?? e.rng?.() ?? function() {
          if (!t) {
            if ("undefined" == typeof crypto || !crypto.getRandomValues) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            t = crypto.getRandomValues.bind(crypto)
          }
          return t(I)
        }();
        if (n.length < 16) throw Error("Random bytes length must be >= 16");
        if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, a) {
          if ((s = s || 0) < 0 || s + 16 > a.length) throw RangeError(`UUID byte range ${s}:${s+15} is out of buffer bounds`);
          for (let e = 0; e < 16; ++e) a[s + e] = n[e];
          return a
        }
        return function(e, a = 0) {
          return (L[e[a + 0]] + L[e[a + 1]] + L[e[a + 2]] + L[e[a + 3]] + "-" + L[e[a + 4]] + L[e[a + 5]] + "-" + L[e[a + 6]] + L[e[a + 7]] + "-" + L[e[a + 8]] + L[e[a + 9]] + "-" + L[e[a + 10]] + L[e[a + 11]] + L[e[a + 12]] + L[e[a + 13]] + L[e[a + 14]] + L[e[a + 15]]).toLowerCase()
        }(n)
      };
      var U = s(54834),
        W = s(41458);

      function F() {
        let e = (0, B.kj)();
        (0, d.u)();
        let [a, s] = (0, i.useState)(1), [t, o] = (0, i.useState)(!1), [r, l] = (0, i.useState)(!1), m = async e => {
          l(!0)
        };
        return (0, n.jsx)(n.Fragment, {
          children: r ? (0, n.jsx)(y.A, {
            type: "credits",
            creditsData: {
              amount: a,
              totalPrice: (0, w.gP)(a).totalPrice
            },
            purchaseSource: C.v.badges
          }) : (0, n.jsxs)("div", {
            className: c().creditsContainer,
            children: [(0, n.jsxs)("div", {
              className: c().creditsDescription,
              children: [(0, n.jsx)("h1", {
                children: e("dashboard.account.badges.custom.credits_modal.title")
              }), (0, n.jsx)("h3", {
                children: e("dashboard.account.badges.custom.credits_modal.subtitle")
              })]
            }), (0, n.jsxs)("div", {
              className: c().creditsOptions,
              children: [(0, n.jsx)("h1", {
                className: c().creditsTitle,
                children: e("dashboard.account.badges.custom.credits_modal.question")
              }), (0, n.jsxs)("div", {
                className: c().preselectedAmounts,
                children: [
                  [1, 3, 5].map(d => {
                    let i = (0, w.gP)(d).totalPrice,
                      r = (0, w.gP)(d).discountPercent;
                    return (0, n.jsxs)("div", {
                      className: `${c().preselectedAmount} ${a===d&&!t&&c().active}`,
                      onClick: () => {
                        o(!1), s(d)
                      },
                      children: [(0, n.jsx)("span", {
                        className: c().amountText,
                        children: e("dashboard.account.badges.custom.credits_modal.credit_label", {
                          amount: d,
                          creditsForm: 1 === d ? e("dashboard.account.badges.custom.credits_modal.credit_single") : e("dashboard.account.badges.custom.credits_modal.credit_multiple")
                        })
                      }), (0, n.jsxs)("div", {
                        className: c().creditsPriceWrapper,
                        children: [(0, n.jsx)("span", {
                          className: c().priceDiscount,
                          style: {
                            opacity: +(r > 0)
                          },
                          children: e("dashboard.account.badges.custom.credits_modal.discount", {
                            percent: r
                          })
                        }), (0, n.jsxs)("span", {
                          className: c().priceText,
                          children: [i, "€"]
                        })]
                      })]
                    }, d)
                  }), (0, n.jsxs)("span", {
                    className: `${c().customCreditsAmountButton} ${t&&c().active}`,
                    onClick: () => {
                      o(!0), s(1)
                    },
                    children: [u.A.customAmount, " ", e("dashboard.account.badges.custom.credits_modal.custom_amount_button")]
                  })
                ]
              }), t && (0, n.jsxs)("div", {
                className: c().customCreditsAmount,
                children: [(0, n.jsxs)("h1", {
                  children: [e("dashboard.account.badges.custom.credits_modal.custom_amount_label"), " ", (0, n.jsx)("span", {
                    style: {
                      opacity: +((0, w.gP)(a).discountPercent > 0)
                    },
                    children: e("dashboard.account.badges.custom.credits_modal.discount", {
                      percent: (0, w.gP)(a).discountPercent
                    })
                  })]
                }), (0, n.jsx)(N.A, {
                  value: a,
                  onChange: s,
                  icon: u.A.shoppingBag,
                  min: 1,
                  max: 500
                })]
              }), (0, n.jsx)("span", {
                className: c().purchaseCreditsButton,
                onClick: m,
                children: e("dashboard.account.badges.custom.credits_modal.purchase_button", {
                  price: (0, w.gP)(a).totalPrice
                })
              })]
            })]
          })
        })
      }
      var G = s(37897),
        H = s(98542),
        q = s(79157),
        J = s(45941),
        z = s(13782),
        V = s(12521);
      let X = ({
        data: e
      }) => {
        var a;
        let s, t = (0, B.kj)(),
          r = e.config,
          [p, j] = (0, i.useState)(""),
          [v, _] = (0, i.useState)(!1),
          [N, A] = (0, i.useState)(!0),
          P = (0, i.useRef)(null),
          [E, M] = (0, i.useState)(null),
          O = t("dashboard.account.badges.settings.save_button"),
          [$, I] = (0, i.useState)(O),
          [L, X] = (0, i.useState)(e.config.user_badges),
          [K, Y] = (0, i.useState)(e.config.custom_badges),
          [Q, Z] = (0, i.useState)({
            originalName: "",
            name: "",
            icon: "",
            id: ""
          }),
          ee = {
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
          } [p] || "",
          ea = e.premium,
          es = e.imagehost_access;
        (0, i.useEffect)(() => {
          I(O)
        }, [O]);
        let et = (s = {}, (a = ["server_booster", "verified", "donor", "helper", "domain_legend", "hone", "black_week_2026"]).forEach(e => {
            s[e] = !1
          }), 0 === L.length || ("string" == typeof L[0] ? a.forEach(e => {
            L.includes(e) && (s[e] = !0)
          }) : a.forEach(e => {
            L.find(a => a.name === e) && (s[e] = !0)
          })), s),
          en = et.server_booster,
          ed = et.verified,
          eo = et.donor,
          ei = et.helper,
          er = et.domain_legend,
          ec = et.hone,
          el = (0, d.u)(),
          eu = r.premium,
          [em, eh] = (0, i.useState)(eu.monochrome_badges),
          [eb, eg] = (0, i.useState)(eu.badge_color),
          [ep, ex] = (0, i.useState)(e.badge_credits ?? 1),
          ef = [{
            name: t("dashboard.account.badges.list.staff.name"),
            description: t("dashboard.account.badges.list.staff.description"),
            icon: m.A.staff
          }, {
            name: t("dashboard.account.badges.list.helper.name"),
            description: t("dashboard.account.badges.list.helper.description"),
            icon: m.A.helper,
            button: {
              text: t("dashboard.account.badges.list.helper.button.text"),
              action: "https://discord.gg/guns",
              isEnabled: !ei,
              disabledText: t("dashboard.account.badges.list.helper.button.disabled")
            }
          }, {
            name: t("dashboard.account.badges.list.premium.name"),
            description: t("dashboard.account.badges.list.premium.description"),
            icon: m.A.premium,
            button: {
              text: t("dashboard.account.badges.list.premium.button.text"),
              action: function() {
                j("premium"), _(!0)
              },
              isEnabled: !ea,
              disabledText: t("dashboard.account.badges.list.premium.button.disabled")
            }
          }, {
            name: t("dashboard.account.badges.list.verified.name"),
            description: t("dashboard.account.badges.list.verified.description"),
            icon: m.A.verified,
            button: {
              text: t("dashboard.account.badges.list.verified.button.text"),
              action: function() {
                j("verified"), _(!0)
              },
              isEnabled: !ed,
              disabledText: t("dashboard.account.badges.list.verified.button.disabled")
            }
          }, {
            name: t("dashboard.account.badges.list.donor.name"),
            description: t("dashboard.account.badges.list.donor.description", {
              price: (0, w.$g)(w.q9.donorBadgeMinimum)
            }),
            icon: m.A.donor,
            button: {
              text: t("dashboard.account.badges.list.donor.button.text"),
              action: function() {
                j("donation"), _(!0)
              },
              isEnabled: !0,
              disabledText: t("dashboard.account.badges.list.donor.button.disabled")
            }
          }, {
            name: t("dashboard.account.badges.list.gifter.name"),
            description: t("dashboard.account.badges.list.gifter.description"),
            icon: m.A.gifter,
            button: {
              text: t("dashboard.account.badges.list.gifter.button.text"),
              action: function() {
                j("gift"), _(!0)
              },
              isEnabled: !0
            }
          }, {
            name: t("dashboard.account.badges.list.image_host.name"),
            description: t("dashboard.account.badges.list.image_host.description"),
            icon: m.A.imagehost,
            button: {
              text: t("dashboard.account.badges.list.image_host.button.text"),
              action: function() {
                j("imagehost"), _(!0)
              },
              isEnabled: !es,
              disabledText: t("dashboard.account.badges.list.image_host.button.disabled")
            }
          }, {
            name: t("dashboard.account.badges.list.domain_legend.name"),
            description: t("dashboard.account.badges.list.domain_legend.description"),
            icon: m.A.domainLegend,
            button: {
              text: t("dashboard.account.badges.list.domain_legend.button.text"),
              action: "/imagehost/domains",
              isEnabled: !er,
              disabledText: t("dashboard.account.badges.list.domain_legend.button.disabled")
            }
          }, {
            name: t("dashboard.account.badges.list.og.name"),
            description: t("dashboard.account.badges.list.og.description"),
            icon: m.A.og
          }, {
            name: t("dashboard.account.badges.list.server_booster.name"),
            description: t("dashboard.account.badges.list.server_booster.description"),
            icon: m.A.serverBooster,
            button: {
              text: t("dashboard.account.badges.list.server_booster.button.text"),
              action: "https://discord.gg/guns",
              isEnabled: !en,
              disabledText: t("dashboard.account.badges.list.server_booster.button.disabled")
            }
          }, {
            name: t("dashboard.account.badges.list.hone.name"),
            description: t("dashboard.account.badges.list.hone.description"),
            icon: m.A.hone,
            button: {
              text: t("dashboard.account.badges.list.hone.button.text"),
              action: function() {
                j("hone"), _(!0)
              },
              isEnabled: !ec,
              disabledText: t("dashboard.account.badges.list.hone.button.disabled")
            }
          }, {
            name: t("dashboard.account.badges.list.bug_hunter.name"),
            description: t("dashboard.account.badges.list.bug_hunter.description"),
            icon: m.A.bugHunter,
            button: {
              text: t("dashboard.account.badges.list.bug_hunter.button.text"),
              action: function() {
                j("bugReport"), _(!0)
              },
              isEnabled: !0,
              disabledText: t("dashboard.account.badges.list.bug_hunter.button.disabled")
            }
          }, {
            name: t("dashboard.account.badges.list.black_week_2026.name"),
            description: t(el ? "dashboard.account.badges.list.black_week_2026.description" : "dashboard.account.badges.list.black_week_2026.description_expired"),
            icon: m.A.blackWeek2026,
            ...el ? {
              button: {
                text: t("dashboard.account.badges.list.black_week_2026.button.text"),
                action: "https://guns.lol/pricing",
                isEnabled: !et.black_week_2026,
                disabledText: t("dashboard.account.badges.list.black_week_2026.button.disabled")
              }
            } : {}
          }, {
            name: t("dashboard.account.badges.list.summer_2026.name"),
            description: t("dashboard.account.badges.list.summer_2026.description"),
            icon: m.A.summer2026
          }, {
            name: t("dashboard.account.badges.list.easter_2026.name"),
            description: t("dashboard.account.badges.list.easter_2026.description"),
            icon: m.A.easter2026
          }, {
            name: t("dashboard.account.badges.list.christmas_2025.name"),
            description: t("dashboard.account.badges.list.christmas_2025.description"),
            icon: m.A.christmas2025
          }, {
            name: t("dashboard.account.badges.list.easter_2025.name"),
            description: t("dashboard.account.badges.list.easter_2025.description"),
            icon: m.A.easter2025
          }, {
            name: t("dashboard.account.badges.list.christmas_2024.name"),
            description: t("dashboard.account.badges.list.christmas_2024.description"),
            icon: m.A.christmas2024
          }, {
            name: t("dashboard.account.badges.list.the_million.name"),
            description: t("dashboard.account.badges.list.the_million.description"),
            icon: m.A.theMillion
          }, {
            name: t("dashboard.account.badges.list.winner.name"),
            description: t("dashboard.account.badges.list.winner.description"),
            icon: m.A.winner
          }, {
            name: t("dashboard.account.badges.list.second.name"),
            description: t("dashboard.account.badges.list.second.description"),
            icon: m.A.second
          }, {
            name: t("dashboard.account.badges.list.third.name"),
            description: t("dashboard.account.badges.list.third.description"),
            icon: m.A.third
          }];
        (0, i.useEffect)(() => {
          if ("undefined" == typeof ResizeObserver) return;
          let e = P.current;
          if (!e) return;
          let a = () => {
              M(e.scrollHeight)
            },
            s = new ResizeObserver(a);
          return s.observe(e), a(), () => {
            s.disconnect()
          }
        }, []), (0, i.useEffect)(() => {
          N && P.current && M(P.current.scrollHeight)
        }, [N]);
        let ej = async () => {
          j("verifiedPaymentMethods")
        }, ev = {
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
          black_week_2026: t("dashboard.account.badges.list.black_week_2026.name"),
          summer_2026: t("dashboard.account.badges.list.summer_2026.name"),
          easter_2025: t("dashboard.account.badges.list.easter_2025.name"),
          easter_2026: "Easter 2026",
          helper: t("dashboard.account.badges.list.helper.name"),
          gifter: t("dashboard.account.badges.list.gifter.name"),
          the_million: t("dashboard.account.badges.list.the_million.name"),
          hone: t("dashboard.account.badges.list.hone.name")
        }, e_ = async (e, a) => {
          let s = e.target.checked,
            t = await fetch("https://guns.lol/api/account/badges", {
              method: "POST",
              body: JSON.stringify({
                badge: a,
                enabled: s
              })
            }),
            n = await t.json();
          t.ok ? (l.oR.success(n.message), X(n.badges)) : l.oR.error(n.error)
        }, eN = async () => {
          I(H.A.loading);
          let e = await fetch("https://guns.lol/api/account/badges/settings", {
              method: "POST",
              body: JSON.stringify({
                monochrome_badges: em,
                badge_color: eb
              })
            }),
            a = await e.json();
          e.ok ? (l.oR.success(a.message), setTimeout(() => {
            I(O)
          }, 500)) : (l.oR.error(a.error), setTimeout(() => {
            I(O)
          }, 500))
        }, ey = N ? null !== E ? {
          maxHeight: `${E}px`
        } : {} : {
          maxHeight: "0px"
        };
        (0, i.useEffect)(() => {
          0 !== L.length && "string" == typeof L[0] && X(L.map(e => ({
            name: e,
            enabled: !0,
            isString: !0
          }))), 0 !== K.length && "string" == typeof K[0][0] && Y(K.map(e => ({
            name: e[0],
            icon: e[1],
            enabled: !0,
            id: D(),
            isString: !0
          })))
        }, [K]);
        let eC = () => {
            j("buyCredits"), _(!0)
          },
          [eB, ew] = (0, i.useState)(null),
          [ek, eS] = (0, i.useState)(""),
          [eA, eP] = (0, i.useState)(null),
          [eE, eT] = (0, i.useState)(""),
          eM = async (e, a = !1) => {
            e.target.disabled = !0;
            let s = e.target.files?.[0];
            if (!s) return;
            let n = J.nB.badge,
              d = e$(s.name).toLowerCase();
            if (!n.includes(d)) {
              l.oR.error(t("dashboard.account.badges.errors.invalid_file")), e.target.disabled = !1, e.target.value = "";
              return
            }
            a ? (eP(s), eO(s, !0)) : (ew(s), eO(s))
          };

        function eR(e = !1) {
          e ? (eT(""), eP("")) : (eS(""), ew(""))
        }

        function eO(e, a = !1) {
          let s = new FileReader;
          s.onload = function(e) {
            let s = e.target.result;
            a ? eT(s) : eS(s)
          }, s.readAsDataURL(e)
        }

        function e$(e) {
          return "." + e.substring(e.lastIndexOf(".") + 1)
        }
        let eI = async e => {
          Z(e), eS(e.icon), j("customBadgeEdit"), _(!0)
        }, eL = async e => {
          e.target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeDasharray="15" strokeDashoffset="15" strokeLinecap="round" strokeWidth="2" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"></animate><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></svg>';
          try {
            if (ep <= 0) {
              l.oR.error(t("dashboard.account.badges.errors.no_credits")), _(!1);
              return
            }
            let e = new FormData;
            e.append("originalName", Q.originalName), e.append("name", Q.name), e.append("icon", eB || Q.icon), e.append("id", Q.id);
            let a = await fetch("https://guns.lol/api/account/customBadges/edit", {
                method: "POST",
                body: e
              }),
              s = await a.json();
            a.ok ? (l.oR.success(s.message), Y(s.badges), Z({
              name: "",
              icon: "",
              id: "",
              originalName: ""
            }), eS(""), ew(null), ex(s.badge_credits), _(!1)) : l.oR.error(s.error)
          } finally {
            e.target.innerHTML = t("dashboard.account.badges.custom.notice.confirm")
          }
        }, eD = async (e, a) => {
          let s = e.target.checked,
            t = await fetch("https://guns.lol/api/account/customBadges", {
              method: "POST",
              body: JSON.stringify({
                badge: a,
                enabled: s
              })
            }),
            n = await t.json();
          t.ok ? (l.oR.success(n.message), Y(n.badges)) : l.oR.error(n.error)
        }, eU = () => {
          j("customBadgePurchase"), _(!0)
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(z.A, {
            opened: v,
            onClose: () => _(!1),
            title: ee,
            centered: !0,
            size: "customBadgeEdit" === p || "customBadgePreview" === p ? "450px" : "auto",
            children: "premium" === p ? (0, n.jsx)(h.A, {}) : "imagehost" === p ? (0, n.jsx)(b.A, {}) : "donation" === p ? (0, n.jsx)(k, {
              isDonor: eo
            }) : "verified" === p ? (0, n.jsxs)("div", {
              className: c().verified,
              children: [(0, n.jsx)("h3", {
                children: t("dashboard.account.badges.verified.description", {
                  strong: (0, n.jsx)("strong", {
                    children: (0, n.jsx)(o.A, {
                      product: "verified"
                    })
                  })
                })
              }), (0, n.jsxs)("div", {
                className: c().buyVerifiedOptions,
                children: [(0, n.jsxs)("button", {
                  onClick: ej,
                  children: [u.A.purchase, " ", t("dashboard.account.badges.verified.purchase_button")]
                }), (0, n.jsxs)("a", {
                  href: "https://discord.gg/guns",
                  target: "_blank",
                  children: [u.A.apply, " ", t("dashboard.account.badges.verified.apply_button")]
                })]
              })]
            }) : "bugReport" === p ? (0, n.jsxs)("div", {
              className: c().bugReport,
              children: [(0, n.jsx)("h3", {
                children: t("dashboard.account.badges.bug_report.description")
              }), (0, n.jsxs)("div", {
                className: c().bugReportButtons,
                children: [(0, n.jsxs)("a", {
                  href: "https://discord.gg/guns",
                  target: "_blank",
                  children: [u.A.discord, " ", t("dashboard.account.badges.bug_report.discord_button")]
                }), (0, n.jsxs)("a", {
                  href: "mailto:support@guns.lol",
                  target: "_blank",
                  children: [u.A.email, " ", t("dashboard.account.badges.bug_report.email_button")]
                })]
              })]
            }) : "verifiedPaymentMethods" === p ? (0, n.jsx)(y.A, {
              type: "verified",
              purchaseSource: C.v.badges
            }) : "gift" === p ? (0, n.jsx)(W.A, {
              defaultSelection: "premiumLifetime",
              redirectLogin: !1,
              showGiftContainer: !0,
              purchaseSource: C.j.badges
            }) : "buyCredits" === p ? (0, n.jsx)(F, {}) : "customBadgeEdit" === p ? (0, n.jsx)("div", {
              className: c().customBadgeEditContainer,
              children: ep > 0 ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(G.A, {
                  featureName: t("dashboard.account.badges.custom.edit.name_label"),
                  onChangeFunction: e => Z({
                    ...Q,
                    name: e.target.value
                  }),
                  placeholder: t("dashboard.account.badges.custom.edit.name_placeholder"),
                  value: Q.name,
                  icon: u.A.badgeName
                }), (0, n.jsxs)("div", {
                  className: c().iconUploadWrapper,
                  children: [(0, n.jsx)("h1", {
                    className: c().uploaderHeadingText,
                    children: t("dashboard.account.badges.custom.edit.icon_label")
                  }), (0, n.jsx)("div", {
                    className: c().iconUpload,
                    children: "" === ek ? (0, n.jsxs)(n.Fragment, {
                      children: [(0, n.jsxs)("div", {
                        className: c().uploadCardText,
                        children: [u.A.image, (0, n.jsx)("h1", {
                          children: t("dashboard.account.badges.custom.edit.upload_prompt")
                        })]
                      }), (0, n.jsx)("input", {
                        type: "file",
                        accept: V.vJ.badge.map(e => e).join(", "),
                        onChange: e => {
                          eM(e)
                        }
                      })]
                    }) : (0, n.jsxs)(n.Fragment, {
                      children: [(0, n.jsxs)("div", {
                        className: c().fileBadge,
                        children: [(0, n.jsx)("span", {
                          children: e$(eB && eB.name ? eB.name : ek).toUpperCase()
                        }), (0, n.jsx)("span", {
                          onClick: () => eR(!1),
                          children: u.A.deleteFile
                        })]
                      }), (0, n.jsx)("img", {
                        src: ek,
                        alt: "Badge",
                        className: c().uploadCardImage
                      })]
                    })
                  })]
                }), (0, n.jsxs)("div", {
                  className: c().customBadgePreviewContainerWrapper,
                  children: [(0, n.jsx)("h1", {
                    className: c().customBadgePreviewText,
                    children: t("dashboard.account.badges.custom.preview.title")
                  }), (0, n.jsx)("div", {
                    className: c().customBadgePreviewDiv,
                    children: "" !== ek ? (0, n.jsxs)(n.Fragment, {
                      children: [(0, n.jsx)("h1", {
                        children: t("dashboard.account.badges.custom.preview.username")
                      }), (0, n.jsxs)("div", {
                        className: c().customBadgePreviewContainer,
                        children: [(0, n.jsx)("div", {
                          className: c().customBadgePreview,
                          children: m.A.premium
                        }), (0, n.jsx)("div", {
                          className: c().customBadgePreview,
                          children: m.A.imagehost
                        }), (0, n.jsx)("div", {
                          className: c().customBadgePreview,
                          children: m.A.donor
                        }), (0, n.jsx)("div", {
                          className: c().customBadgePreview,
                          children: (0, n.jsx)("img", {
                            src: ek,
                            alt: "Badge",
                            draggable: !1
                          })
                        })]
                      })]
                    }) : (0, n.jsx)("h1", {
                      className: c().customBadgeIconText,
                      children: t("dashboard.account.badges.custom.preview.no_icon")
                    })
                  })]
                }), (0, n.jsxs)("div", {
                  className: c().editCustomBadgeButtonWrapper,
                  children: [(0, n.jsxs)("div", {
                    className: c().editCustomBadgeButtonContainer,
                    children: [(0, n.jsx)("span", {
                      className: c().editCustomBadgeButton,
                      onClick: () => {
                        ep <= 0 ? l.oR.error(t("dashboard.account.badges.errors.no_credits")) : ("" !== ek || eB) && "" !== Q.name ? (j("customBadgeEditNotice"), _(!0)) : l.oR.error(t("dashboard.account.badges.errors.fill_fields"))
                      },
                      children: t("dashboard.account.badges.custom.edit.save_button")
                    }), (0, n.jsx)("span", {
                      className: c().editCustomBadgeButtonCancel,
                      onClick: () => _(!1),
                      children: t("dashboard.account.badges.actions.cancel")
                    })]
                  }), (0, n.jsx)("span", {
                    className: c().creditChargeNotice,
                    children: t("dashboard.account.badges.custom.edit.credit_notice", {
                      count: ep
                    })
                  })]
                })]
              }) : (0, n.jsxs)("div", {
                className: c().noCreditsNotice,
                children: [(0, n.jsxs)("div", {
                  className: c().noCreditsNoticeText,
                  children: [(0, n.jsx)("h1", {
                    children: t("dashboard.account.badges.custom.no_credits.title")
                  }), (0, n.jsx)("h3", {
                    children: t("dashboard.account.badges.custom.no_credits.description")
                  })]
                }), (0, n.jsx)("span", {
                  className: c().buyCredits,
                  onClick: eC,
                  children: t("dashboard.account.badges.custom.no_credits.button")
                })]
              })
            }) : "customBadgeEditNotice" === p ? (0, n.jsxs)("div", {
              className: c().customBadgeEditNoticeContainer,
              children: [(0, n.jsxs)("div", {
                className: c().customBadgeEditNoticeText,
                children: [(0, n.jsx)("h1", {
                  children: t("dashboard.account.badges.custom.notice.title")
                }), (0, n.jsx)("h3", {
                  children: t("dashboard.account.badges.custom.notice.description")
                })]
              }), (0, n.jsxs)("div", {
                className: c().customBadgeGuidelinesContainer,
                children: [(0, n.jsx)("h1", {
                  children: t("dashboard.account.badges.custom.notice.guidelines.title")
                }), (0, n.jsxs)("ul", {
                  className: c().customBadgeGuidelines,
                  children: [(0, n.jsx)("li", {
                    children: t("dashboard.account.badges.custom.notice.guidelines.unique")
                  }), (0, n.jsx)("li", {
                    children: t("dashboard.account.badges.custom.notice.guidelines.tos")
                  }), (0, n.jsx)("li", {
                    children: t("dashboard.account.badges.custom.notice.guidelines.removal")
                  })]
                })]
              }), (0, n.jsxs)("div", {
                className: c().customBadgeEditNoticeActions,
                children: [(0, n.jsx)("span", {
                  className: c().customBadgeEditNoticeConfirm,
                  onClick: eL,
                  children: t("dashboard.account.badges.custom.notice.confirm")
                }), (0, n.jsx)("span", {
                  className: c().customBadgeEditNoticeCancel,
                  onClick: () => _(!1),
                  children: t("dashboard.account.badges.actions.cancel")
                })]
              })]
            }) : "customBadgePreview" === p ? (0, n.jsxs)("div", {
              className: c().customBadgePreviewModal,
              children: [(0, n.jsxs)("div", {
                className: c().iconUploadWrapper,
                children: [(0, n.jsx)("h1", {
                  className: c().uploaderHeadingText,
                  children: t("dashboard.account.badges.custom.edit.icon_label")
                }), (0, n.jsx)("div", {
                  className: c().iconUpload,
                  children: "" === eE ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                      className: c().uploadCardText,
                      children: [u.A.image, (0, n.jsx)("h1", {
                        children: t("dashboard.account.badges.custom.edit.upload_prompt")
                      })]
                    }), (0, n.jsx)("input", {
                      type: "file",
                      accept: V.vJ.badge.map(e => e).join(", "),
                      onChange: e => {
                        eM(e, !0)
                      }
                    })]
                  }) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                      className: c().fileBadge,
                      children: [(0, n.jsx)("span", {
                        children: e$(eA && eA.name ? eA.name : eE).toUpperCase()
                      }), (0, n.jsx)("span", {
                        onClick: () => eR(!0),
                        children: u.A.deleteFile
                      })]
                    }), (0, n.jsx)("img", {
                      src: eE,
                      alt: "Badge",
                      className: c().uploadCardImage
                    })]
                  })
                })]
              }), (0, n.jsxs)("div", {
                children: [(0, n.jsx)("h1", {
                  className: c().customBadgePreviewText,
                  children: t("dashboard.account.badges.custom.preview.title")
                }), (0, n.jsx)("div", {
                  className: c().customBadgePreviewDiv,
                  children: "" !== eE ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("h1", {
                      children: t("dashboard.account.badges.custom.preview.username")
                    }), (0, n.jsxs)("div", {
                      className: c().customBadgePreviewContainer,
                      children: [(0, n.jsx)("div", {
                        className: c().customBadgePreview,
                        children: m.A.premium
                      }), (0, n.jsx)("div", {
                        className: c().customBadgePreview,
                        children: m.A.imagehost
                      }), (0, n.jsx)("div", {
                        className: c().customBadgePreview,
                        children: m.A.donor
                      }), (0, n.jsx)("div", {
                        className: c().customBadgePreview,
                        children: (0, n.jsx)("img", {
                          src: eE,
                          alt: "Badge",
                          draggable: !1
                        })
                      })]
                    })]
                  }) : (0, n.jsx)("h1", {
                    className: c().customBadgeIconText,
                    children: t("dashboard.account.badges.custom.preview.no_icon")
                  })
                })]
              }), (0, n.jsx)("span", {
                className: c().customBadgePreviewModalButton,
                onClick: eU,
                children: t("dashboard.account.badges.custom.preview.purchase_button")
              })]
            }) : "customBadgePurchase" === p ? (0, n.jsx)(q.A, {
              purchaseSource: C.v.badges
            }) : "hone" === p && (0, n.jsxs)("div", {
              className: c().honeModal,
              children: [(0, n.jsx)("h1", {
                children: t("dashboard.account.badges.hone_badge.title")
              }), (0, n.jsx)("h3", {
                children: t("dashboard.account.badges.hone_badge.description")
              }), (0, n.jsxs)("div", {
                className: c().honeQuickActions,
                children: [(0, n.jsxs)("a", {
                  href: "https://hone.gg/a/guns",
                  target: "_blank",
                  rel: "noreferrer",
                  className: c().honePrimary,
                  children: [(0, n.jsx)("img", {
                    src: "https://assets.guns.lol/hone_x_guns/Hone%20Icon%20Full%20Dark%404x.png",
                    alt: ""
                  }), " ", t("dashboard.account.badges.hone_badge.download_button")]
                }), (0, n.jsxs)("a", {
                  href: "/account/redeem?select=hone_promo",
                  className: c().honeGhost,
                  target: "_blank",
                  children: [U.A.key, " ", t("dashboard.account.badges.hone_badge.redeem_button")]
                })]
              }), (0, n.jsx)("div", {
                className: c().honeSteps,
                children: Array.from({
                  length: 5
                }, (e, a) => {
                  let s = a + 1;
                  return (0, n.jsxs)("div", {
                    className: c().honeStep,
                    children: [(0, n.jsx)("span", {
                      className: c().honeStepBadge,
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
                className: c().honePartner,
                children: t("dashboard.account.badges.hone_badge.partner_notice")
              })]
            })
          }), (0, n.jsx)(l.l$, {
            richColors: !0,
            position: "top-center",
            theme: "dark",
            className: x().toasterStyles,
            icons: {
              success: U.A.successToast
            },
            visibleToasts: 2
          }), (0, n.jsxs)("div", {
            className: c().containerGap,
            children: [(0, n.jsxs)("div", {
              className: `${c().allBadgesContainer} ${!N?c().allBadgesCollapsed:""}`,
              children: [(0, n.jsxs)("div", {
                className: c().badgeContainerHeading,
                children: [(0, n.jsx)("h1", {
                  className: c().badgeText,
                  children: t("dashboard.account.badges.sections.all_badges.title")
                }), (0, n.jsx)("span", {
                  onClick: () => {
                    A(!N)
                  },
                  className: `${c().badgeToggle} ${N?c().rotateArrow:""}`,
                  children: u.A.arrowUp
                })]
              }), (0, n.jsx)("div", {
                className: `${c().badgeCollapseWrapper} ${N?c().badgeCollapseOpen:c().badgeCollapseClosed}`,
                style: ey,
                children: (0, n.jsx)("div", {
                  ref: P,
                  className: c().badgeContainer,
                  children: ef.map((e, a) => (0, n.jsxs)("div", {
                    className: c().badge,
                    children: [(0, n.jsxs)("div", {
                      className: c().badgeWrapper,
                      children: [(0, n.jsx)("div", {
                        className: c().badgeIcon,
                        children: e.icon
                      }), (0, n.jsxs)("div", {
                        className: c().badgeTextContainer,
                        children: [(0, n.jsx)("h1", {
                          children: e.name
                        }), (0, n.jsx)("h3", {
                          children: e.description
                        })]
                      })]
                    }), e.button && "function" == typeof e.button.action && e.button.isEnabled ? (0, n.jsx)("button", {
                      className: c().badgeButton,
                      onClick: e.button.action,
                      children: e.button.text
                    }) : "string" == typeof e.button?.action && e.button?.isEnabled ? (0, n.jsx)("a", {
                      className: c().badgeButton,
                      href: e.button.action,
                      target: "_blank",
                      children: e.button.text
                    }) : e.button && void 0 !== e.button.isEnabled && (0, n.jsx)("button", {
                      className: c().badgeButtonDisabled,
                      disabled: !0,
                      children: e.button.disabledText
                    })]
                  }, a))
                })
              })]
            }), (0, n.jsxs)("div", {
              className: c().customBadgesContainer,
              children: [(0, n.jsxs)("h1", {
                children: [t("dashboard.account.badges.custom.section.title"), " ", (0, n.jsxs)("span", {
                  children: [u.A.sparkles, " ", t("dashboard.account.badges.custom.section.tag_new")]
                })]
              }), (0, n.jsx)("h3", {
                children: t("dashboard.account.badges.custom.section.description")
              }), (0, n.jsxs)("div", {
                className: c().customBadgesContainerButtons,
                children: [(0, n.jsx)("span", {
                  className: c().customBadgesContainerButton,
                  onClick: eU,
                  children: t("dashboard.account.badges.custom.section.buttons.purchase")
                }), (0, n.jsx)("span", {
                  className: c().customBadgesContainerPreviewButton,
                  onClick: () => {
                    j("customBadgePreview"), _(!0)
                  },
                  children: t("dashboard.account.badges.custom.section.buttons.preview")
                })]
              })]
            }), (0 !== L.length || 0 !== K.length) && ea ? (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsxs)("div", {
                className: c().badgeSettings,
                children: [(0, n.jsx)("h1", {
                  className: c().badgeSettingsText,
                  children: t("dashboard.account.badges.settings.title")
                }), (0, n.jsx)("div", {
                  className: x().featureContainer,
                  style: {
                    marginTop: 0
                  },
                  children: (0, n.jsx)("div", {
                    className: c().generalComponentContainer,
                    children: (0, n.jsx)("div", {
                      className: c().generalComponentLeft,
                      children: (0, n.jsxs)("div", {
                        className: c().featureRow,
                        children: [(0, n.jsx)(S.A, {
                          featureName: t("dashboard.account.badges.settings.monochrome.label"),
                          helpDescription: t("dashboard.account.badges.settings.monochrome.description"),
                          element: (0, n.jsx)(g.A, {
                            onChangeFunction: e => eh(e.currentTarget.checked),
                            defaultChecked: em
                          })
                        }), (0, n.jsx)(f.A, {
                          featureName: t("dashboard.account.badges.settings.badge_color"),
                          onChangeFunction: eg,
                          value: eb
                        })]
                      })
                    })
                  })
                }), (0, n.jsx)("span", {
                  className: c().badgeSaveButton,
                  onClick: eN,
                  children: $
                })]
              }), 0 !== L.length && (0, n.jsxs)("div", {
                className: c().myBadgesContainer,
                children: [(0, n.jsx)("h1", {
                  className: c().myBadgesText,
                  children: t("dashboard.account.badges.sections.my_badges.title")
                }), (0, n.jsx)("style", {
                  children: `
                                .${c().myBadgesContainer} .${x().inputContainerWrapper} {
                                    width: fit-content;
                                }
                                `
                }), (0, n.jsx)(T, {
                  badges: L,
                  setBadges: X,
                  badgeIcons: m.A,
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
                    black_week_2026: "blackWeek2026",
                    summer_2026: "summer2026",
                    easter_2025: "easter2025",
                    easter_2026: "easter2026",
                    helper: "helper",
                    gifter: "gifter",
                    the_million: "theMillion",
                    hone: "hone"
                  },
                  badgeNameMapper: ev,
                  handleBadgeToggle: e_
                })]
              })]
            }) : !ea && (0, n.jsxs)("div", {
              className: c().upgradePremium,
              children: [(0, n.jsxs)("div", {
                className: c().upgradePremiumDescription,
                children: [(0, n.jsxs)("h1", {
                  children: [u.A.premium, " ", t("dashboard.account.badges.upgrade.title")]
                }), (0, n.jsx)("h3", {
                  children: t("dashboard.account.badges.upgrade.description")
                })]
              }), (0, n.jsx)("button", {
                onClick: () => {
                  j("premium"), _(!0)
                },
                children: t("dashboard.account.badges.upgrade.button")
              })]
            }), 0 !== K.length && (0, n.jsxs)("div", {
              className: c().myBadgesContainer,
              children: [(0, n.jsxs)("h1", {
                className: c().myBadgesText,
                children: [t("dashboard.account.badges.custom.list.title"), (0, n.jsxs)("div", {
                  className: c().badgeCreditsContainer,
                  children: [(0, n.jsx)("span", {
                    className: `${c().badgeCredits} ${0===ep&&c().red}`,
                    children: t("dashboard.account.badges.custom.list.credits_left", {
                      count: ep
                    })
                  }), (0, n.jsxs)("span", {
                    className: c().buyBadgeCredits,
                    onClick: eC,
                    children: [u.A.shoppingBag, " ", t("dashboard.account.badges.custom.list.buy_button")]
                  })]
                })]
              }), (0, n.jsx)("style", {
                children: `
                                            .${c().myBadgesContainer} .${x().inputContainerWrapper} {
                                                width: fit-content;
                                            }
                                        `
              }), (0, n.jsx)(R, {
                customBadges: K,
                setCustomBadges: Y,
                handleCustomBadgeToggle: eD,
                handleCustomBadgeEdit: eI,
                isPremium: e.premium
              })]
            })]
          })]
        })
      }
    },
    27524: (e, a, s) => {
      Promise.resolve().then(s.bind(s, 25272)), Promise.resolve().then(s.bind(s, 69783)), Promise.resolve().then(s.bind(s, 11152)), Promise.resolve().then(s.bind(s, 41112)), Promise.resolve().then(s.bind(s, 21957))
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
          [k, S] = (0, n.useState)(u),
          [A, P] = (0, n.useState)({
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
          O = R ?? k;
        (0, n.useEffect)(() => {
          R && S(R)
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
            S(s), a?.(s)
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
          W = (0, n.useCallback)(e => {
            I({
              ...B,
              h: Number(e.target.value)
            })
          }, [B, I]),
          F = (0, n.useCallback)(() => {
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
            left: `${A.left}px`,
            top: `${A.top}px`,
            width: `${A.width}px`
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
                onChange: W,
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
              onFocus: F,
              onClick: F,
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
        A: () => h
      });
      var t = s(95155),
        n = s(98028),
        d = s(12115),
        o = s(91801),
        i = s.n(o),
        r = s(97478),
        c = s(3434),
        l = s(50686),
        u = s(86891),
        m = s(61836);

      function h({
        purchaseSource: e = "unknown"
      }) {
        let a = (0, u.kj)();
        (0, n.u)();
        let [s, o] = (0, d.useState)(1), [h, b] = (0, d.useState)(!1), g = async e => {
          b(!0)
        }, p = s > 1 ? (0, t.jsxs)(t.Fragment, {
          children: [(0, m.o3)(s).totalPrice, "€ ", (0, t.jsxs)("s", {
            children: [(0, m.o3)(s).rawPrice, "€"]
          })]
        }) : (0, t.jsxs)(t.Fragment, {
          children: [(0, m.o3)(s).totalPrice, "€"]
        });
        return (0, t.jsx)(t.Fragment, {
          children: h ? (0, t.jsx)(l.A, {
            type: "customBadge",
            customBadgeData: {
              amount: s,
              totalPrice: (0, m.o3)(s).totalPrice
            },
            purchaseSource: e
          }) : (0, t.jsxs)("div", {
            className: i().CustomBadgePurchaseModal,
            children: [(0, t.jsx)(r.A, {
              featureName: a("modals.custom_badge.title"),
              max: 500,
              value: s,
              min: 1,
              onChange: o,
              icon: c.A.shoppingBag
            }), (0, t.jsxs)("div", {
              className: i().CustomBadgePurchaseModalDiscount,
              children: [(0, t.jsx)("h1", {
                children: a("modals.custom_badge.information_text")
              }), (0, t.jsx)("h3", {
                children: a("modals.custom_badge.description", {
                  percentage: (0, m.o3)(s).discountPercent,
                  quantity: s
                })
              })]
            }), (0, t.jsx)("span", {
              className: i().CustomBadgePurchaseModalButton,
              onClick: g,
              children: a("modals.custom_badge.purchase_text", {
                price: p
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
    e.O(0, [8392, 8604, 1850, 379, 3785, 4236, 6609, 4293, 5810, 6746, 7256, 6891, 5886, 9182, 8481, 3434, 1378, 5041, 6788, 8246, 7109, 8542, 8441, 3794, 7358], () => e(e.s = 27524)), _N_E = e.O()
  }
]);