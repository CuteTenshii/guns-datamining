(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3925], {
    5214: (a, e, s) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), Object.defineProperty(e, "workAsyncStorage", {
        enumerable: !0,
        get: function() {
          return n.workAsyncStorageInstance
        }
      });
      let n = s(17828)
    },
    15648: (a, e, s) => {
      "use strict";
      s.d(e, {
        A: () => u
      });
      var n = s(95155),
        r = s(12115),
        t = s(50163),
        c = s.n(t),
        i = s(7109),
        o = s(66609),
        l = s(37897),
        d = s(86891);

      function u({
        currentUsername: a,
        setCurrentUsername: e,
        cooldown: s,
        setIsModalOpened: t
      }) {
        let u = (0, d.kj)(),
          [m, h] = (0, r.useState)(a);
        async function g() {
          try {
            let a = JSON.stringify({
                username: m
              }),
              s = await fetch("https://guns.lol/api/account/username", {
                method: "POST",
                body: a
              }),
              n = await s.json();
            s.ok ? (o.oR.success(u("dashboard.account.manage.change_username.success")), e(m), t()) : o.oR.error(n.error)
          } catch (a) {
            o.oR.error(u("dashboard.account.manage.change_username.unknown_error")), console.error(a.message)
          }
        }
        return (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(l.A, {
            featureName: u("dashboard.account.manage.change_username.field_label"),
            value: m,
            onChangeFunction: a => {
              h(a.target.value)
            },
            placeholder: u("dashboard.account.manage.change_username.field_placeholder"),
            icon: i.A.username
          }), (0, n.jsxs)("div", {
            className: c().changeDiv,
            children: [(0, n.jsx)("span", {
              className: c().cooldown,
              children: "now" === s ? u("dashboard.account.manage.change_username.cooldown_ready") : u("dashboard.account.manage.change_username.cooldown_wait", {
                time: s
              })
            }), (0, n.jsx)("span", {
              style: {
                marginTop: 0
              },
              onClick: g,
              children: u("dashboard.account.manage.change_username.submit")
            })]
          })]
        })
      }
    },
    17828: (a, e, s) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), Object.defineProperty(e, "workAsyncStorageInstance", {
        enumerable: !0,
        get: function() {
          return n
        }
      });
      let n = (0, s(64054).createAsyncLocalStorage)()
    },
    21957: (a, e, s) => {
      "use strict";

      function n({
        moduleIds: a
      }) {
        return null
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), Object.defineProperty(e, "PreloadChunks", {
        enumerable: !0,
        get: function() {
          return n
        }
      }), s(95155), s(47650), s(5214), s(2451)
    },
    40428: (a, e, s) => {
      "use strict";
      s.d(e, {
        A: () => i
      });
      var n = s(95155),
        r = s(12115),
        t = s(59931),
        c = s.n(t);

      function i({
        checked: a,
        onChange: e,
        label: s,
        description: t,
        disabled: i = !1,
        name: o,
        id: l,
        className: d
      }) {
        let u = (0, r.useId)(),
          m = l ?? u,
          h = (0, n.jsx)("svg", {
            viewBox: "0 0 10 7",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsx)("path", {
              d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          });
        return (0, n.jsxs)("label", {
          className: `${c().checkboxWrapper} ${d??""}`,
          "data-disabled": i,
          "data-checked": a,
          htmlFor: m,
          children: [(0, n.jsx)("input", {
            type: "checkbox",
            id: m,
            name: o,
            checked: a,
            onChange: e,
            disabled: i
          }), (0, n.jsx)("span", {
            className: c().checkboxBox,
            children: (0, n.jsx)("span", {
              className: c().checkmark,
              children: h
            })
          }), (s || t) && (0, n.jsxs)("span", {
            className: c().checkboxContent,
            children: [s && (0, n.jsx)("span", {
              className: c().label,
              children: s
            }), t && (0, n.jsx)("span", {
              className: c().description,
              children: t
            })]
          })]
        })
      }
    },
    41112: (a, e, s) => {
      "use strict";

      function n({
        reason: a,
        children: e
      }) {
        return e
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), Object.defineProperty(e, "BailoutToCSR", {
        enumerable: !0,
        get: function() {
          return n
        }
      }), s(1980)
    },
    59931: a => {
      a.exports = {
        checkboxWrapper: "GUNS__53-fb7620db-5edbb5d3-d5838081",
        checkboxBox: "GUNS__e5-546bd132-f2783efa-b167c221",
        checkmark: "GUNS__37-9c3ca347-1dfc372f-b86cd6fc",
        checkboxContent: "GUNS__ab-99239a2d-372d534a-01c82082",
        label: "GUNS__41-9e476fd0-97f08255-c536c341",
        description: "GUNS__09-9ac6549b-7658a140-3ba7fea8"
      }
    },
    64054: (a, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var s = {
        bindSnapshot: function() {
          return o
        },
        createAsyncLocalStorage: function() {
          return i
        },
        createSnapshot: function() {
          return l
        }
      };
      for (var n in s) Object.defineProperty(e, n, {
        enumerable: !0,
        get: s[n]
      });
      let r = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
        value: "E504",
        enumerable: !1,
        configurable: !0
      });
      class t {
        disable() {
          throw r
        }
        getStore() {}
        run() {
          throw r
        }
        exit() {
          throw r
        }
        enterWith() {
          throw r
        }
        static bind(a) {
          return a
        }
      }
      let c = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;

      function i() {
        return c ? new c : new t
      }

      function o(a) {
        return c ? c.bind(a) : t.bind(a)
      }

      function l() {
        return c ? c.snapshot() : function(a, ...e) {
          return a(...e)
        }
      }
    },
    91912: (a, e, s) => {
      "use strict";
      s.d(e, {
        A: () => p
      });
      var n = s(95155),
        r = s(12115),
        t = s(66609),
        c = s(50163),
        i = s.n(c),
        o = s(7109),
        l = s(37897),
        d = s(97478),
        u = s(50686),
        m = s(13699),
        h = s(81934),
        g = s(86891),
        _ = s(61836),
        b = s(98028);

      function p({
        onRequestModalSize: a,
        aliasManagerData: e
      }) {
        let s = (0, g.kj)();
        (0, b.u)();
        let [c, p] = (0, r.useState)(""), [f, x] = (0, r.useState)(e), [j, y] = (0, r.useState)(""), [v, N] = (0, r.useState)(!1), [w, k] = (0, r.useState)(!1), [S, A] = (0, r.useState)(1), [C, M] = (0, r.useState)(!1), [$, O] = (0, r.useState)(Math.floor(Date.now() / 1e3)), R = _.q9.aliasCredit, P = f?.purchasable_alias_credits_remaining || 0, T = parseFloat((S * R).toFixed(2)), B = (0, r.useMemo)(() => [1, 2, 3, 4, 5].filter(a => a <= P).slice(0, 3), [P]);
        (0, r.useEffect)(() => {
          P <= 0 ? A(1) : S > P && A(P)
        }, [P, S]), (0, r.useEffect)(() => {
          if (a) return a(w ? "430px" : "36rem"), () => a("36rem")
        }, [w, a]), (0, r.useEffect)(() => {
          let a = window.setInterval(() => {
            O(Math.floor(Date.now() / 1e3))
          }, 1e3);
          return () => window.clearInterval(a)
        }, []);
        let D = async a => {
          let e = await fetch("https://guns.lol/api/account/alias", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(a || {})
            }),
            s = await e.json();
          return {
            response: e,
            payload: s
          }
        }, E = async (a, e) => {
          let n = `${a}:${e||""}`;
          try {
            y(n);
            let {
              response: r,
              payload: c
            } = await D({
              action: a,
              alias: e
            });
            if (r.ok) return t.oR.success(c.message), x(c.data), !0;
            return t.oR.error(c.error || s("dashboard.account.manage.alias_manager.toasts.unknown_error")), !1
          } catch (a) {
            return t.oR.error(s("dashboard.account.manage.alias_manager.toasts.unknown_error")), console.error(a.message), !1
          } finally {
            y("")
          }
        }, L = async () => {
          let a = c.trim().toLowerCase();
          a ? await E("create", a) && p("") : t.oR.error(s("dashboard.account.manage.alias_manager.toasts.enter_alias"))
        };
        if (w) return (0, n.jsx)(u.A, {
          type: "aliascredits",
          aliasCreditsData: {
            amount: S,
            totalPrice: T
          },
          purchaseSource: m.v.aliasManager
        });
        if (v && f) return (0, n.jsxs)("div", {
          className: i().creditsContainer,
          children: [(0, n.jsxs)("div", {
            className: i().creditsDescription,
            children: [(0, n.jsx)("h1", {
              children: s("dashboard.account.manage.alias_manager.credits.title")
            }), (0, n.jsx)("h3", {
              children: s("dashboard.account.manage.alias_manager.credits.description")
            })]
          }), (0, n.jsxs)("div", {
            className: i().creditsOptions,
            children: [(0, n.jsx)("h1", {
              className: i().creditsTitle,
              children: s("dashboard.account.manage.alias_manager.credits.question")
            }), (0, n.jsxs)("div", {
              className: i().preselectedAmounts,
              children: [B.map(a => (0, n.jsxs)("div", {
                className: `${i().preselectedAmount} ${S===a&&!C?i().active:""}`,
                onClick: () => {
                  M(!1), A(a)
                },
                children: [(0, n.jsxs)("span", {
                  className: i().amountText,
                  children: [a, " ", 1 === a ? s("dashboard.account.manage.alias_manager.credits.credit_single") : s("dashboard.account.manage.alias_manager.credits.credit_multiple")]
                }), (0, n.jsxs)("span", {
                  className: i().priceText,
                  children: [(a * R).toFixed(2), "€"]
                })]
              }, a)), (0, n.jsxs)("span", {
                className: `${i().customCreditsAmountButton} ${C?i().active:""}`,
                onClick: () => M(!0),
                children: [o.A.customAmount, " ", s("dashboard.account.manage.alias_manager.credits.custom_amount")]
              })]
            }), C && (0, n.jsxs)("div", {
              className: i().customCreditsAmount,
              children: [(0, n.jsx)("h1", {
                children: s("dashboard.account.manage.alias_manager.credits.custom_amount_label")
              }), (0, n.jsx)(d.A, {
                value: S,
                onChange: A,
                icon: o.A.shoppingBag,
                min: 1,
                max: P
              })]
            }), (0, n.jsx)("span", {
              className: i().purchaseCreditsButton,
              onClick: () => k(!0),
              children: s("dashboard.account.manage.alias_manager.credits.purchase_button", {
                price: T.toFixed(2)
              })
            })]
          })]
        });
        if (!f) return null;
        let F = f.alias_entries,
          I = f.unlocked_slots_remaining <= 0,
          G = f.purchasable_alias_credits_remaining > 0;
        return (0, n.jsxs)("div", {
          className: i().aliasManagerContainer,
          children: [(0, n.jsxs)("div", {
            className: i().aliasManagerSummary,
            children: [(0, n.jsx)("h1", {
              children: s("dashboard.account.manage.alias_manager.summary.title")
            }), (0, n.jsx)("h3", {
              children: s("dashboard.account.manage.alias_manager.summary.description")
            }), !f.premium && (0, n.jsx)(h.A, {
              href: "/pricing",
              style: {
                textDecoration: "none"
              },
              target: "_blank",
              children: (0, n.jsx)("div", {
                className: i().premiumAd,
                children: (0, n.jsx)("span", {
                  children: s("dashboard.account.manage.alias_manager.summary.upgrade_cta", {
                    icon: (0, n.jsxs)("span", {
                      children: [o.A.premium, " Premium"]
                    })
                  })
                })
              })
            }), (0, n.jsxs)("div", {
              className: i().aliasManagerBadges,
              children: [(0, n.jsx)("span", {
                className: `${i().badgeCredits} ${f.unlocked_slots_remaining<=0&&i().red}`,
                children: s("dashboard.account.manage.alias_manager.summary.credits_available", {
                  count: f.unlocked_slots_remaining,
                  suffix: 1 === f.unlocked_slots_remaining ? "" : "s"
                })
              }), (0, n.jsx)("span", {
                className: i().badgeCredits,
                children: s("dashboard.account.manage.alias_manager.summary.slots_used", {
                  used: f.used_alias_slots,
                  maxSlots: f.plan_max_aliases
                })
              })]
            })]
          }), (0, n.jsx)("div", {
            className: i().aliasManagerList,
            children: 0 === F.length ? (0, n.jsx)("div", {
              className: i().aliasManagerEmpty,
              children: s("dashboard.account.manage.alias_manager.list.empty")
            }) : F.map(a => {
              let e = `remove:${a.alias}`,
                r = Number(a.cooldown_timestamp || 0) <= $,
                c = !r || "" !== j,
                l = (a => {
                  let e = Math.max(0, a - $);
                  if (e <= 0) return s("dashboard.account.manage.alias_manager.cooldown_ready");
                  let n = Math.floor(e / 86400),
                    r = Math.floor(e % 86400 / 3600),
                    t = Math.floor(e % 3600 / 60),
                    c = e % 60;
                  return n > 0 ? `${n}d ${r}h ${t}m` : r > 0 ? `${r}h ${t}m ${c}s` : t > 0 ? `${t}m ${c}s` : `${c}s`
                })(Number(a.cooldown_timestamp || 0)),
                d = `guns.lol/${a.alias}`,
                u = f.username ? `guns.lol/${f.username}` : String(s("dashboard.account.manage.alias_manager.list.fallback_target_username")),
                m = r ? String(s("dashboard.account.manage.alias_manager.list.remove_ready")) : String(s("dashboard.account.manage.alias_manager.list.remove_waiting", {
                  time: l
                }));
              return (0, n.jsxs)("div", {
                className: i().aliasManagerItem,
                children: [(0, n.jsxs)("div", {
                  className: i().aliasManagerItemLeft,
                  children: [(0, n.jsx)("div", {
                    className: i().aliasManagerItemLabel,
                    children: (0, n.jsx)("h1", {
                      children: a.alias
                    })
                  }), (0, n.jsxs)("h3", {
                    className: i().aliasManagerRoute,
                    children: [d, " ", o.A.arrowRight, " ", u]
                  })]
                }), (0, n.jsx)("div", {
                  className: i().aliasManagerItemActions,
                  children: (0, n.jsx)("span", {
                    className: `${i().aliasManagerAction} ${i().aliasManagerActionDanger} ${c?i().aliasManagerActionDisabled:""}`,
                    onClick: () => {
                      c ? t.oR.info(m) : E("remove", a.alias)
                    },
                    children: j === e ? o.A.loading : s("dashboard.account.manage.alias_manager.list.remove_button")
                  })
                })]
              }, a.alias)
            })
          }), (0, n.jsxs)("div", {
            className: i().aliasManagerCreate,
            children: [(0, n.jsx)(l.A, {
              featureName: s("dashboard.account.manage.alias_manager.create.feature_name"),
              value: c,
              onChangeFunction: a => p(a.target.value),
              placeholder: s("dashboard.account.manage.alias_manager.create.placeholder"),
              icon: o.A.alias,
              maxLength: 16
            }), (0, n.jsxs)("div", {
              className: i().aliasManagerButtons,
              children: [(0, n.jsx)("span", {
                className: `${i().aliasManagerButtonPrimary} ${I||j.startsWith("create:")?i().aliasManagerButtonDisabled:""}`,
                onClick: () => {
                  I || j || L()
                },
                children: j.startsWith("create:") ? o.A.loading : s("dashboard.account.manage.alias_manager.create.button")
              }), G && (0, n.jsxs)("span", {
                className: i().aliasManagerButtonSecondary,
                onClick: () => N(!0),
                children: [o.A.purchase, " ", s("dashboard.account.manage.alias_manager.create.buy_button")]
              })]
            })]
          })]
        })
      }
    },
    92731: (a, e, s) => {
      "use strict";
      s.d(e, {
        A: () => u
      });
      var n = s(95155),
        r = s(12115),
        t = s(50163),
        c = s.n(t),
        i = s(7109),
        o = s(66609),
        l = s(37897),
        d = s(86891);

      function u({
        displayName: a,
        setDisplayName: e,
        setIsModalOpened: s
      }) {
        let t = (0, d.kj)(),
          [u, m] = (0, r.useState)(a);
        async function h() {
          try {
            let a = JSON.stringify({
                displayName: u
              }),
              n = await fetch("https://guns.lol/api/account/displayName", {
                method: "POST",
                body: a
              }),
              r = await n.json();
            n.ok ? (o.oR.success(t("dashboard.account.manage.change_display_name.success")), e(u), s(!1)) : o.oR.error(r.error)
          } catch (a) {
            o.oR.error(t("dashboard.account.manage.change_display_name.unknown_error")), console.error(a.message)
          }
        }
        return (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(l.A, {
            featureName: t("dashboard.account.manage.change_display_name.field_label"),
            value: u,
            onChangeFunction: a => {
              m(a.target.value)
            },
            placeholder: t("dashboard.account.manage.change_display_name.field_placeholder"),
            icon: i.A.displayName
          }), (0, n.jsxs)("div", {
            className: c().changeDiv,
            children: [(0, n.jsx)("span", {
              style: {
                display: "none"
              }
            }), (0, n.jsx)("span", {
              style: {
                marginTop: 10
              },
              onClick: h,
              children: t("dashboard.account.manage.change_display_name.submit")
            })]
          })]
        })
      }
    }
  }
]);