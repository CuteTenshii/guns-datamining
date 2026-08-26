(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1298], {
    37206: (e, a, o) => {
      "use strict";
      o.d(a, {
        default: () => s.a
      });
      var n = o(75707),
        s = o.n(n)
    },
    67503: (e, a, o) => {
      "use strict";
      o.d(a, {
        A: () => i
      });
      var n = o(95155);
      o(12115);
      var s = o(37206),
        t = o(86891);
      let c = (0, s.default)(() => Promise.all([o.e(7776), o.e(3817)]).then(o.bind(o, 33817)), {
          loadableGenerated: {
            webpack: () => [33817]
          },
          ssr: !1
        }),
        i = ({
          data: e
        }) => {
          let a = (0, t.kj)(),
            o = function(e) {
              let a = {
                mobile: 0,
                desktop: 0,
                tablet: 0,
                unknown: 0
              };
              for (let o of e) {
                let e = o._id;
                a.hasOwnProperty(e) ? a[e] = o.count : a.unknown += o.count
              }
              return a
            }(e),
            s = [a("dashboard.account.analytics.devices.desktop"), a("dashboard.account.analytics.devices.mobile"), a("dashboard.account.analytics.devices.tablet")],
            i = [o.desktop, o.mobile, o.tablet],
            r = i.join("-"),
            l = {
              chart: {
                id: `device-chart-${r}`,
                type: "donut",
                foreColor: "#575757",
                fontFamily: "Satoshi, sans-serif"
              },
              labels: s,
              colors: ["#74477F", "#8C5B98", "#A470B2"],
              legend: {
                position: "bottom",
                fontSize: "14.5px",
                fontWeight: 500
              },
              dataLabels: {
                enabled: !1
              },
              plotOptions: {
                pie: {
                  expandOnClick: !1,
                  donut: {
                    size: "60%",
                    labels: {
                      show: !0,
                      name: {
                        show: !0,
                        fontSize: "14px",
                        offsetY: -10
                      },
                      value: {
                        show: !0,
                        fontSize: "14px",
                        fontWeight: 550,
                        offsetY: 10,
                        color: "#808080",
                        formatter: e => `${e} ${a("dashboard.account.analytics.devices.visitors_label")}`
                      },
                      total: {
                        show: !0,
                        label: a("dashboard.account.analytics.devices.total_label"),
                        fontSize: "21px",
                        fontWeight: 550,
                        color: "#999999",
                        formatter: e => {
                          let o = e.globals.seriesTotals.reduce((e, a) => e + a, 0);
                          return `${o} ${a("dashboard.account.analytics.devices.visitors_label")}`
                        }
                      }
                    }
                  }
                }
              },
              tooltip: {
                y: {
                  formatter: e => `${e} ${a("dashboard.account.analytics.devices.visitors_label")}`
                }
              }
            };
          return (0, n.jsx)(c, {
            options: l,
            series: i,
            type: "donut",
            width: "100%"
          }, r)
        }
    },
    68635: (e, a, o) => {
      "use strict";
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), Object.defineProperty(a, "default", {
        enumerable: !0,
        get: function() {
          return r
        }
      });
      let n = o(95155),
        s = o(12115),
        t = o(41112);

      function c(e) {
        return {
          default: e && "default" in e ? e.default : e
        }
      }
      o(21957);
      let i = {
          loader: () => Promise.resolve(c(() => null)),
          loading: null,
          ssr: !0
        },
        r = function(e) {
          let a = {
              ...i,
              ...e
            },
            o = (0, s.lazy)(() => a.loader().then(c)),
            r = a.loading;

          function l(e) {
            let c = r ? (0, n.jsx)(r, {
                isLoading: !0,
                pastDelay: !0,
                error: null
              }) : null,
              i = !a.ssr || !!a.loading,
              l = i ? s.Suspense : s.Fragment,
              d = a.ssr ? (0, n.jsxs)(n.Fragment, {
                children: [null, (0, n.jsx)(o, {
                  ...e
                })]
              }) : (0, n.jsx)(t.BailoutToCSR, {
                reason: "next/dynamic",
                children: (0, n.jsx)(o, {
                  ...e
                })
              });
            return (0, n.jsx)(l, {
              ...i ? {
                fallback: c
              } : {},
              children: d
            })
          }
          return l.displayName = "LoadableComponent", l
        }
    },
    70048: (e, a, o) => {
      Promise.resolve().then(o.bind(o, 92392)), Promise.resolve().then(o.bind(o, 69783)), Promise.resolve().then(o.bind(o, 13770)), Promise.resolve().then(o.bind(o, 41112)), Promise.resolve().then(o.bind(o, 21957))
    },
    75707: (e, a, o) => {
      "use strict";
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), Object.defineProperty(a, "default", {
        enumerable: !0,
        get: function() {
          return s
        }
      });
      let n = o(73623)._(o(68635));

      function s(e, a) {
        let o = {};
        "function" == typeof e && (o.loader = e);
        let s = {
          ...o,
          ...a
        };
        return (0, n.default)({
          ...s,
          modules: s.loadableGenerated?.modules
        })
      }("function" == typeof a.default || "object" == typeof a.default && null !== a.default) && void 0 === a.default.__esModule && (Object.defineProperty(a.default, "__esModule", {
        value: !0
      }), Object.assign(a.default, a), e.exports = a.default)
    },
    92392: (e, a, o) => {
      "use strict";
      o.r(a), o.d(a, {
        default: () => N
      });
      var n = o(95155),
        s = o(12115),
        t = o(50163),
        c = o.n(t),
        i = o(66609),
        r = o(7109),
        l = o(37206),
        d = o(14079),
        h = o(91912),
        u = o(15648),
        m = o(92731),
        p = o(86891),
        g = o(13782),
        v = o(40428);
      let b = ({
        userDetails: e,
        fullWidth: a,
        currentUsername: o,
        setCurrentUsername: t,
        displayName: l,
        setDisplayName: b,
        nameCooldown: j
      }) => {
        let x = (0, p.kj)(),
          [_, f] = (0, s.useState)(!!e.discord),
          [w, y] = (0, s.useState)(!!(e.google || e.google_only_account)),
          [C, N] = (0, s.useState)(!0),
          [k, S] = (0, s.useState)(!1),
          [A, R] = (0, s.useState)(""),
          [$, I] = (0, s.useState)("discord"),
          [P, D] = (0, s.useState)(!1),
          [O, T] = (0, s.useState)(!1),
          [B, M] = (0, s.useState)("36rem"),
          U = e.alias_manager,
          W = "usernameChange" === A ? x("dashboard.account.manage.modals.change_username") : "aliasManager" === A ? x("dashboard.account.manage.modals.manage_aliases") : "displayNameChange" === A ? x("dashboard.account.manage.modals.change_display_name") : "socialDetails" === A ? x("dashboard.account.settings.social_details.modal_title", {
            provider: "google" === $ ? x("dashboard.account.settings.social_details.provider_name_google") : x("dashboard.account.settings.social_details.provider_name_discord")
          }) : "discordConnect" === A && x("dashboard.account.discord_modal.title"),
          z = e?.google?.email || x("dashboard.account.settings.social_details.not_available"),
          F = e?.discord?.username || x("dashboard.account.settings.social_details.not_available"),
          L = e?.discord?.id || x("dashboard.account.settings.social_details.not_available"),
          E = async () => {
            let e = window.open("", "newwindow", "width=380, height=675");
            try {
              let o = new URLSearchParams({
                  action: "connect",
                  joinServer: String(C)
                }),
                n = await fetch(`https://guns.lol/api/discord/url?${o.toString()}`);
              if (!n.ok) {
                let a = await n.json().catch(() => ({}));
                e && e.close(), i.oR.error(a.error || x("dashboard.account.manage.toasts.unknown_error"));
                return
              }
              let s = await n.json(),
                t = `https://discord.com/api/oauth2/authorize?client_id=1140632236509642882&response_type=code&state=${encodeURIComponent(s.state)}&redirect_uri=${encodeURIComponent("https://guns.lol/api/discord/callback")}&scope=identify${C?"+guilds.join":""}+role_connections.write`;
              if (e) {
                e.location.href = t;
                var a = setInterval(function() {
                  e.closed && (location.reload(), clearInterval(a))
                }, 200)
              } else window.open(t, "_self")
            } catch {
              e && e.close(), i.oR.error(x("dashboard.account.manage.toasts.unknown_error"))
            }
          }, G = async () => {
            let e = window.open("", "googleoauthwindow", "width=460, height=720");
            try {
              let a = await fetch("https://guns.lol/api/account/oauth/google/url"),
                o = await a.json().catch(() => ({}));
              if (!a.ok || !o.url) {
                e && e.close(), i.oR.error(o.error || x("dashboard.account.manage.toasts.unknown_error"));
                return
              }
              if (e) {
                e.location.href = o.url;
                let a = setInterval(() => {
                  if (e.closed) {
                    location.reload(), clearInterval(a);
                    return
                  }
                  try {
                    let o = new URL(e.location.href),
                      n = o.origin === window.location.origin,
                      s = "/account" === o.pathname || o.pathname.startsWith("/account/"),
                      t = "/login" === o.pathname && o.searchParams.has("oauthError");
                    n && (s || t) && (e.close(), clearInterval(a), location.reload())
                  } catch {}
                }, 200)
              } else window.open(o.url, "_self")
            } catch {
              e && e.close(), i.oR.error(x("dashboard.account.manage.toasts.unknown_error"))
            }
          }, q = e => {
            I(e), R("socialDetails"), S(!0)
          };
        async function J() {
          try {
            D(!0);
            let e = await fetch("https://guns.lol/api/discord/remove", {
                method: "POST"
              }),
              a = await e.json().catch(() => ({}));
            if (e.ok) return i.oR.success(x("dashboard.account.manage.toasts.disconnected")), f(!1), !0;
            return i.oR.error(a.error || x("dashboard.account.manage.toasts.disconnect_failed")), !1
          } catch (e) {
            return i.oR.error(x("dashboard.account.manage.toasts.unknown_error")), console.error(e.message), !1
          } finally {
            D(!1)
          }
        }
        async function Y() {
          try {
            T(!0);
            let e = await fetch("https://guns.lol/api/account/oauth/google/remove", {
                method: "POST"
              }),
              a = await e.json().catch(() => ({}));
            if (e.ok) return i.oR.success(a.message || "Successfully disconnected Google."), y(!1), !0;
            return i.oR.error(a.error || x("dashboard.account.manage.toasts.unknown_error")), !1
          } catch (e) {
            return i.oR.error(x("dashboard.account.manage.toasts.unknown_error")), console.error(e.message), !1
          } finally {
            T(!1)
          }
        }
        let Q = async () => {
          ("google" === $ ? await Y() : await J()) && S(!1)
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsxs)(g.A, {
            opened: k,
            onClose: () => {
              S(!1)
            },
            title: W,
            centered: !0,
            size: "aliasManager" === A ? B : "25rem",
            children: ["usernameChange" === A ? (0, n.jsx)(u.A, {
              currentUsername: o,
              setCurrentUsername: t,
              cooldown: j,
              setIsModalOpened: S
            }) : "aliasManager" === A ? (0, n.jsx)(h.A, {
              setIsModalOpened: S,
              onRequestModalSize: M,
              aliasManagerData: U
            }) : "displayNameChange" === A ? (0, n.jsx)(m.A, {
              displayName: l,
              setDisplayName: b,
              setIsModalOpened: S
            }) : "discordConnect" === A && (0, n.jsxs)("div", {
              className: c().discordConnectionWrapper,
              children: [(0, n.jsxs)("button", {
                onClick: E,
                children: [r.A.connectDiscord, " ", x("dashboard.account.discord_modal.connect_button")]
              }), (0, n.jsxs)("div", {
                className: c().optionalServerJoin,
                children: [(0, n.jsx)(v.A, {
                  checked: C,
                  onChange: e => N(e.currentTarget.checked)
                }), (0, n.jsx)("h1", {
                  children: x("dashboard.account.discord_modal.join_server_label")
                })]
              })]
            }), "socialDetails" === A && (0, n.jsxs)("div", {
              className: c().oauthConnectionWrapper,
              children: [(0, n.jsxs)("div", {
                className: c().oauthConnectionInfo,
                children: [(0, n.jsx)("span", {
                  className: c().oauthProviderIcon,
                  children: "google" === $ ? d.A.google : d.A.discord
                }), (0, n.jsxs)("div", {
                  className: c().oauthConnectionCopy,
                  children: [(0, n.jsx)("h1", {
                    children: "google" === $ ? x("dashboard.account.settings.social_details.provider_google") : x("dashboard.account.settings.social_details.provider_discord")
                  }), "google" === $ ? (0, n.jsxs)("h3", {
                    children: [x("dashboard.account.settings.social_details.email"), ": ", z]
                  }) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("h3", {
                      children: [x("dashboard.account.settings.social_details.username"), ": ", F]
                    }), (0, n.jsxs)("h3", {
                      children: [x("dashboard.account.settings.social_details.id"), ": ", L]
                    })]
                  })]
                })]
              }), (0, n.jsxs)("div", {
                className: c().oauthConnectionActions,
                children: [(0, n.jsxs)("button", {
                  type: "button",
                  onClick: Q,
                  className: `${c().oauthConnectionButton} ${c().oauthDisconnectButton}`,
                  disabled: O || P,
                  children: [O || P ? r.A.loading : null, "google" === $ ? x("dashboard.account.settings.actions.google.disconnect") : x("dashboard.account.settings.actions.discord.unlink")]
                }), (0, n.jsx)("button", {
                  type: "button",
                  onClick: () => S(!1),
                  className: c().oauthConnectionButton,
                  children: x("dashboard.account.settings.social_details.close")
                })]
              })]
            })]
          }), (0, n.jsxs)("div", {
            className: `${c().manageInformation} ${a?c().fullWidth:c().extraStyles}`,
            children: [(0, n.jsxs)("div", {
              className: c().manageWrapper,
              children: [(0, n.jsx)("h1", {
                children: x("dashboard.account.manage.title")
              }), (0, n.jsx)("h3", {
                children: x("dashboard.account.manage.description")
              }), (0, n.jsxs)("div", {
                className: c().manageLinks,
                children: [(0, n.jsxs)("span", {
                  onClick: () => {
                    R("usernameChange"), S(!0)
                  },
                  children: [r.A.changeUsername, " ", x("dashboard.account.manage.links.change_username")]
                }), (0, n.jsxs)("span", {
                  onClick: () => {
                    R("displayNameChange"), S(!0)
                  },
                  children: [r.A.displayName, " ", x("dashboard.account.manage.links.change_display_name")]
                }), (0, n.jsxs)("span", {
                  onClick: () => {
                    M("36rem"), R("aliasManager"), S(!0)
                  },
                  children: [r.A.changeAlias, " ", x("dashboard.account.manage.links.manage_aliases")]
                }), (0, n.jsxs)("a", {
                  href: "/account/settings",
                  children: [r.A.accountSettings, " ", x("dashboard.account.manage.links.account_settings")]
                })]
              })]
            }), (0, n.jsxs)("div", {
              className: c().manageWrapper,
              children: [(0, n.jsx)("h1", {
                children: x("dashboard.account.manage.connections.title")
              }), (0, n.jsx)("h3", {
                children: x("dashboard.account.manage.connections.description")
              }), (0, n.jsxs)("div", {
                className: c().manageConnections,
                children: [_ ? (0, n.jsxs)("div", {
                  className: c().manageConnectionRow,
                  children: [(0, n.jsxs)("div", {
                    className: c().manageConnectionProvider,
                    children: [r.A.connectDiscord, " ", x("dashboard.account.manage.connections.discord_connected")]
                  }), (0, n.jsx)("button", {
                    type: "button",
                    onClick: () => q("discord"),
                    className: c().manageConnectionIconButton,
                    children: r.A.accountSettings
                  })]
                }) : (0, n.jsxs)("button", {
                  type: "button",
                  onClick: () => {
                    R("discordConnect"), S(!0)
                  },
                  className: c().manageConnectionConnectButton,
                  children: [r.A.connectDiscord, x("dashboard.account.discord_modal.connect_button")]
                }), w ? (0, n.jsxs)("div", {
                  className: c().manageConnectionRow,
                  children: [(0, n.jsxs)("div", {
                    className: c().manageConnectionProvider,
                    children: [d.A.google, " ", x("dashboard.account.settings.modals.google_linked")]
                  }), (0, n.jsx)("button", {
                    type: "button",
                    onClick: () => q("google"),
                    className: c().manageConnectionIconButton,
                    children: r.A.accountSettings
                  })]
                }) : (0, n.jsxs)("button", {
                  type: "button",
                  onClick: G,
                  className: c().manageConnectionConnectButton,
                  children: [d.A.google, x("dashboard.account.manage.connections.connect_google")]
                })]
              })]
            })]
          })]
        })
      };
      var j = o(67503),
        x = o(98241),
        _ = o.n(x),
        f = o(54834),
        w = o(26684),
        y = o(13510);
      let C = (0, l.default)(() => Promise.all([o.e(7776), o.e(995)]).then(o.bind(o, 60995)), {
          loadableGenerated: {
            webpack: () => [60995]
          },
          ssr: !1
        }),
        N = ({
          data: e
        }) => {
          let a = (0, p.kj)(),
            o = e.config,
            t = e.config.premium,
            [l, d] = (0, s.useState)(e.username),
            [h, u] = (0, s.useState)(o.display_name),
            [m, x] = (0, s.useState)(null),
            [N, k] = (0, s.useState)(""),
            [S, A] = (0, s.useState)(!1),
            R = {
              discord: a("dashboard.account.discord_modal.title"),
              share: a("dashboard.account.share_modal.title"),
              tiktokShare: a("dashboard.account.tiktok_share_modal.title"),
              discordShare: a("dashboard.account.discord_share_modal.title"),
              instagramShare: a("dashboard.account.instagram_share_modal.title")
            },
            [$, I] = (0, s.useState)(!0),
            P = e.top_percentage,
            D = e.premium ? 14 : 7,
            O = m?.views[0]?.total || 0,
            T = e.name_cooldown,
            B = m?.maxRetention ?? D,
            M = e.username,
            U = `https://guns.lol/${M.endsWith(".")?M+"/":M}`,
            W = encodeURIComponent(`Check out my profile on guns.lol ${U}`),
            z = y.e,
            F = (0, s.useRef)(null),
            L = e.aliases?.length,
            E = e.premium ? 5 : 1,
            G = [{
              name: a("dashboard.account.profile_completion.tasks.upload_avatar"),
              condition: "" !== o.avatar,
              icon: r.A.avatar,
              link: "/customize",
              function: null
            }, {
              name: a("dashboard.account.profile_completion.tasks.add_description"),
              condition: "" !== o.description || e.premium && t.typewriter.length > 0,
              icon: r.A.description,
              link: "/customize",
              function: null
            }, {
              name: a("dashboard.account.profile_completion.tasks.link_discord"),
              condition: void 0 !== e.discord,
              icon: r.A.discord,
              link: null,
              function: () => Q("discord")
            }, {
              name: a("dashboard.account.profile_completion.tasks.add_socials"),
              condition: o.socials.length > 0,
              icon: r.A.socials,
              link: "/links",
              function: null
            }, {
              name: a("dashboard.account.profile_completion.tasks.get_profile_views"),
              condition: o.page_views >= 10,
              icon: r.A.views,
              link: null,
              function: () => Q("share")
            }],
            q = G.filter(e => !0 === e.condition).length / G.length * 100,
            J = 100 === q;
          (0, s.useEffect)(() => {
            (async () => {
              let e = await fetch("/api/analytics/getData", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    timeRange: D
                  })
                }),
                a = await e.json();
              a.error ? console.error(a.error) : x(a)
            })()
          }, []);
          let Y = async () => {
            let e = window.open("", "newwindow", "width=380, height=675");
            try {
              let o = new URLSearchParams({
                  action: "connect",
                  joinServer: String($)
                }),
                n = await fetch(`https://guns.lol/api/discord/url?${o.toString()}`);
              if (!n.ok) {
                let a = await n.json().catch(() => ({}));
                e && e.close(), i.oR.error(a.error || "Failed to start Discord connection.");
                return
              }
              let s = await n.json(),
                t = `https://discord.com/api/oauth2/authorize?client_id=1140632236509642882&response_type=code&state=${encodeURIComponent(s.state)}&redirect_uri=${encodeURIComponent("https://guns.lol/api/discord/callback")}&scope=identify${$?"+guilds.join":""}+role_connections.write`;
              if (e) {
                e.location.href = t;
                var a = setInterval(function() {
                  e.closed && (location.reload(), clearInterval(a))
                }, 200)
              } else window.open(t, "_self")
            } catch {
              e && e.close(), i.oR.error("Failed to start Discord connection.")
            }
          }, Q = e => {
            k(e), A(!0)
          };
          return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(g.A, {
              opened: S,
              onClose: () => A(!1),
              title: R[N],
              centered: !0,
              size: w.B.includes(N) ? "32rem" : "28rem",
              children: "discord" === N ? (0, n.jsxs)("div", {
                className: c().discordConnectionWrapper,
                children: [(0, n.jsxs)("button", {
                  onClick: Y,
                  children: [r.A.connectDiscord, " ", a("dashboard.account.discord_modal.connect_button")]
                }), (0, n.jsxs)("div", {
                  className: c().optionalServerJoin,
                  children: [(0, n.jsx)(v.A, {
                    checked: $,
                    onChange: e => I(e.currentTarget.checked)
                  }), (0, n.jsx)("h1", {
                    children: a("dashboard.account.discord_modal.join_server_label")
                  })]
                })]
              }) : (0, n.jsx)(w.A, {
                currentModal: N,
                username: M,
                profileUrl: U,
                encodedShareText: W,
                userId: String(e._id),
                qrCodeImage: z,
                qrCodeRef: F,
                downloadQr: e => {
                  F.current && F.current.getInstance().download({
                    name: `guns.lol_qrcode_${M}`,
                    extension: e
                  })
                },
                setCurrentModal: k
              })
            }), (0, n.jsx)(i.l$, {
              richColors: !0,
              position: "top-center",
              theme: "dark",
              className: _().toasterStyles,
              icons: {
                success: f.A.successToast
              },
              visibleToasts: 2
            }), (0, n.jsxs)("div", {
              className: c().containerGap,
              children: [(0, n.jsxs)("div", {
                className: c().accountCardsWrapper,
                children: [(0, n.jsx)("h1", {
                  className: c().accountOverview,
                  children: a("dashboard.account.overview.title")
                }), (0, n.jsxs)("div", {
                  className: c().analyticsCards,
                  children: [(0, n.jsxs)("div", {
                    className: c().analyticsCard,
                    children: [(0, n.jsxs)("div", {
                      className: c().cardTop,
                      children: [(0, n.jsx)("h1", {
                        children: a("dashboard.account.overview.username.label")
                      }), r.A.username]
                    }), (0, n.jsxs)("div", {
                      className: c().cardBottom,
                      children: [(0, n.jsx)("h1", {
                        children: l
                      }), (0, n.jsx)("h3", {
                        children: "now" !== T ? (0, n.jsx)("span", {
                          children: a("dashboard.account.overview.username.change_available_in", {
                            time: T
                          })
                        }) : (0, n.jsx)("span", {
                          children: a("dashboard.account.overview.username.change_available_now")
                        })
                      })]
                    })]
                  }), (0, n.jsxs)("div", {
                    className: c().analyticsCard,
                    children: [(0, n.jsxs)("div", {
                      className: c().cardTop,
                      children: [(0, n.jsx)("h1", {
                        children: a("dashboard.account.overview.alias.label")
                      }), r.A.alias]
                    }), (0, n.jsxs)("div", {
                      className: c().cardBottom,
                      children: [(0, n.jsx)("h1", {
                        children: a("dashboard.account.overview.alias.used", {
                          count: L
                        })
                      }), (0, n.jsx)("h3", {
                        children: (0, n.jsx)("span", {
                          children: a("dashboard.account.overview.alias.slots_remaining", {
                            count: E - L
                          })
                        })
                      })]
                    })]
                  }), (0, n.jsxs)("div", {
                    className: c().analyticsCard,
                    children: [(0, n.jsxs)("div", {
                      className: c().cardTop,
                      children: [(0, n.jsx)("h1", {
                        children: a("dashboard.account.overview.uid.label")
                      }), r.A.uid]
                    }), (0, n.jsxs)("div", {
                      className: c().cardBottom,
                      children: [(0, n.jsx)("h1", {
                        children: e.uid.toLocaleString("en-US")
                      }), (0, n.jsx)("h3", {
                        children: a(P >= 50 ? "dashboard.account.overview.uid.joined_after" : "dashboard.account.overview.uid.among_first", {
                          percentage: P
                        })
                      })]
                    })]
                  }), (0, n.jsxs)("div", {
                    className: c().analyticsCard,
                    children: [(0, n.jsxs)("div", {
                      className: c().cardTop,
                      children: [(0, n.jsx)("h1", {
                        children: a("dashboard.account.overview.views.label")
                      }), r.A.views]
                    }), (0, n.jsxs)("div", {
                      className: c().cardBottom,
                      children: [(0, n.jsx)("h1", {
                        children: o.page_views.toLocaleString("en-US")
                      }), (0, n.jsx)("h3", {
                        children: a("dashboard.account.overview.views.change", {
                          count: O?.toLocaleString("en-US") ?? "0",
                          days: D
                        })
                      })]
                    })]
                  })]
                })]
              }), (0, n.jsxs)("div", {
                className: c().accountManage,
                children: [(0, n.jsx)("h1", {
                  className: c().accountManageText,
                  children: a("dashboard.account.statistics.title")
                }), (0, n.jsxs)("div", {
                  className: c().accountManageWrapper,
                  children: [(0, n.jsxs)("div", {
                    className: c().profileCompletionSection,
                    children: [(0, n.jsxs)("div", {
                      className: c().profileCompletionStats,
                      children: [(0, n.jsx)("div", {
                        className: c().profileCompletionText,
                        children: (0, n.jsx)("h1", {
                          children: a("dashboard.account.profile_completion.title")
                        })
                      }), (0, n.jsxs)("div", {
                        className: c().profileCompletionBarWrapper,
                        children: [(0, n.jsx)("div", {
                          className: c().profileCompletionBar,
                          children: 0 !== q && (0, n.jsx)("div", {
                            className: c().completionBar,
                            style: {
                              width: `${q}%`
                            }
                          })
                        }), (0, n.jsx)("span", {
                          children: a("dashboard.account.profile_completion.percentage", {
                            percent: q
                          })
                        })]
                      }), (0, n.jsx)("div", {
                        className: `${c().profileNotCompleted} ${J?c().completedIcon:c().notCompletedIcon}`,
                        children: J ? (0, n.jsxs)(n.Fragment, {
                          children: [(0, n.jsxs)("h1", {
                            children: [r.A.check, " ", a("dashboard.account.profile_completion.complete.title")]
                          }), (0, n.jsx)("h3", {
                            children: a("dashboard.account.profile_completion.complete.description")
                          })]
                        }) : (0, n.jsxs)(n.Fragment, {
                          children: [(0, n.jsxs)("h1", {
                            children: [r.A.warning, " ", a("dashboard.account.profile_completion.incomplete.title")]
                          }), (0, n.jsx)("h3", {
                            children: a("dashboard.account.profile_completion.incomplete.description")
                          })]
                        })
                      })]
                    }), (0, n.jsx)("div", {
                      className: c().profileCompletions,
                      children: G.map((e, a) => (0, n.jsxs)("div", {
                        className: `${c().completion} ${e.condition?c().completionIconCompleted:c().completionIconNotCompleted}`,
                        children: [(0, n.jsxs)("div", {
                          className: c().completionLeft,
                          children: [e.condition ? r.A.check : e.icon, (0, n.jsx)("h1", {
                            children: e.name
                          })]
                        }), !e.condition && (e.link ? (0, n.jsx)("a", {
                          href: e.link,
                          children: r.A.arrowRightCompletion
                        }) : e.function && (0, n.jsx)("span", {
                          onClick: e.function,
                          children: r.A.arrowRightCompletion
                        }))]
                      }, a))
                    })]
                  }), (0, n.jsx)(b, {
                    userDetails: e,
                    fullWidth: !1,
                    currentUsername: l,
                    setCurrentUsername: d,
                    nameCooldown: e.name_cooldown,
                    displayName: h,
                    setDisplayName: u
                  })]
                })]
              }), (0, n.jsxs)("div", {
                className: c().accountAnalyticsPreview,
                children: [(0, n.jsxs)("h1", {
                  className: c().accountAnalyticsPreviewText,
                  children: [a("dashboard.account.analytics.title"), " ", (0, n.jsx)("a", {
                    href: "/account/analytics",
                    children: a("dashboard.account.analytics.view_more")
                  })]
                }), (0, n.jsxs)("div", {
                  className: c().accountAnalyticsPreviewWrapper,
                  children: [(0, n.jsxs)("div", {
                    className: c().viewsChart,
                    children: [(0, n.jsx)("h1", {
                      children: a("dashboard.account.analytics.views_range", {
                        days: (0, n.jsx)("span", {
                          children: a("dashboard.account.analytics.days_value", {
                            count: B
                          })
                        })
                      })
                    }), m && (0, n.jsx)(C, {
                      pageViewsData: m.viewsPerDay
                    })]
                  }), (0, n.jsxs)("div", {
                    className: c().pieChartDevicesAccount,
                    children: [(0, n.jsx)("h1", {
                      className: c().pieChartText,
                      children: a("dashboard.account.analytics.devices_range", {
                        days: (0, n.jsx)("span", {
                          children: a("dashboard.account.analytics.days_value", {
                            count: B
                          })
                        })
                      })
                    }), (0, n.jsx)("div", {
                      className: c().visitorDevicesContainer,
                      children: m && m?.devices.length !== 0 ? (0, n.jsx)(j.A, {
                        data: m.devices
                      }) : (0, n.jsxs)("div", {
                        className: c().noAnalyticData,
                        children: [(0, n.jsx)("h1", {
                          children: a("dashboard.account.analytics.no_device_data.title")
                        }), (0, n.jsx)("h3", {
                          children: a("dashboard.account.analytics.no_device_data.description")
                        })]
                      })
                    })]
                  })]
                })]
              })]
            })]
          })
        }
    }
  },
  e => {
    e.O(0, [8392, 379, 6870, 7958, 1899, 4236, 6609, 4293, 5810, 6746, 6891, 5886, 9182, 8481, 3434, 1378, 6788, 5395, 2840, 7109, 3925, 8441, 3794, 7358], () => e(e.s = 70048)), _N_E = e.O()
  }
]);