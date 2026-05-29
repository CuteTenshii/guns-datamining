(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 52202, e => {
  "use strict";
  var a = e.i(48277),
    t = e.i(16506),
    l = e.i(17435);

  function r({
    href: e,
    asTag: r,
    locale: d,
    children: s,
    ...o
  }) {
    let i = d || (0, l.useLang)();
    if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) return r ? (0, a.jsx)("a", {
      href: e,
      ...o,
      children: s
    }) : (0, a.jsx)(t.default, {
      href: e,
      ...o,
      children: s
    });
    let n = "en" == i ? `${e.startsWith("/")?"":"/"}${e}` : `/${i}${e.startsWith("/")?"":"/"}${e}`;
    return r ? (0, a.jsx)("a", {
      href: n,
      ...o,
      children: s
    }) : (0, a.jsx)(t.default, {
      href: n,
      ...o,
      children: s
    })
  }
  e.s(["default", () => r])
}, 47502, e => {
  e.v({
    avatar: "leaderboardPage-module__YgkLtG__avatar",
    avatarFallback: "leaderboardPage-module__YgkLtG__avatarFallback",
    container: "leaderboardPage-module__YgkLtG__container",
    displayLine: "leaderboardPage-module__YgkLtG__displayLine",
    displayName: "leaderboardPage-module__YgkLtG__displayName",
    emptyState: "leaderboardPage-module__YgkLtG__emptyState",
    hero: "leaderboardPage-module__YgkLtG__hero",
    leaderboardPage: "leaderboardPage-module__YgkLtG__leaderboardPage",
    listHeader: "leaderboardPage-module__YgkLtG__listHeader",
    listWrapper: "leaderboardPage-module__YgkLtG__listWrapper",
    nameBlock: "leaderboardPage-module__YgkLtG__nameBlock",
    premiumBadge: "leaderboardPage-module__YgkLtG__premiumBadge",
    premiumIcon: "leaderboardPage-module__YgkLtG__premiumIcon",
    profile: "leaderboardPage-module__YgkLtG__profile",
    rank: "leaderboardPage-module__YgkLtG__rank",
    rankTop: "leaderboardPage-module__YgkLtG__rankTop",
    row: "leaderboardPage-module__YgkLtG__row",
    rowLink: "leaderboardPage-module__YgkLtG__rowLink",
    rowTop1: "leaderboardPage-module__YgkLtG__rowTop1",
    rowTop2: "leaderboardPage-module__YgkLtG__rowTop2",
    rowTop3: "leaderboardPage-module__YgkLtG__rowTop3",
    subtitle: "leaderboardPage-module__YgkLtG__subtitle",
    tabActive: "leaderboardPage-module__YgkLtG__tabActive",
    tabButton: "leaderboardPage-module__YgkLtG__tabButton",
    tabs: "leaderboardPage-module__YgkLtG__tabs",
    title: "leaderboardPage-module__YgkLtG__title",
    username: "leaderboardPage-module__YgkLtG__username",
    views: "leaderboardPage-module__YgkLtG__views"
  })
}, 64503, e => {
  "use strict";
  var a = e.i(48277),
    t = e.i(30668),
    l = e.i(19754),
    r = e.i(47502),
    d = e.i(30035),
    s = e.i(16506),
    o = e.i(17435);

  function i({
    data: e
  }) {
    let i = e?.tokenData,
      n = e?.statsData,
      [_, u] = (0, t.useState)("all"),
      [m, c] = (0, t.useState)(null),
      [b, g] = (0, t.useState)(!0),
      [h, p] = (0, t.useState)(null),
      f = (0, o.useT)();
    (0, t.useEffect)(() => {
      let e = !0;
      return (async () => {
        try {
          g(!0);
          let a = await fetch("/api/leaderboard/views", {
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              }
            }),
            t = await a.json();
          if (!e) return;
          !a.ok || t?.error ? p(t?.error) : (c(t), p(null))
        } catch (a) {
          if (!e) return;
          p(a?.message)
        } finally {
          e && g(!1)
        }
      })(), () => {
        e = !1
      }
    }, []);
    let k = m?.allTime || [],
      j = m?.month || [],
      x = (0, t.useMemo)(() => "all" === _ ? k : j, [_, k, j]),
      v = f("all" === _ ? "leaderboard.hero.description_alltime" : "leaderboard.hero.description_thismonth");
    return (0, a.jsx)(l.default, {
      data: i,
      statsData: n,
      children: (0, a.jsx)("div", {
        className: r.default.leaderboardPage,
        children: (0, a.jsxs)("div", {
          className: r.default.container,
          children: [(0, a.jsxs)("div", {
            className: r.default.hero,
            children: [(0, a.jsx)("h1", {
              className: r.default.title,
              children: f("leaderboard.hero.title")
            }), (0, a.jsx)("p", {
              className: r.default.subtitle,
              children: v
            }), (0, a.jsxs)("div", {
              className: r.default.tabs,
              children: [(0, a.jsx)("button", {
                className: `${r.default.tabButton} ${"all"===_?r.default.tabActive:""}`,
                onClick: () => u("all"),
                type: "button",
                children: f("leaderboard.hero.tab_alltime")
              }), (0, a.jsx)("button", {
                className: `${r.default.tabButton} ${"month"===_?r.default.tabActive:""}`,
                onClick: () => u("month"),
                type: "button",
                children: f("leaderboard.hero.tab_thismonth")
              })]
            })]
          }), (0, a.jsxs)("div", {
            className: r.default.listWrapper,
            children: [(0, a.jsxs)("div", {
              className: r.default.listHeader,
              children: [(0, a.jsx)("span", {
                children: "#"
              }), (0, a.jsx)("span", {
                children: f("leaderboard.table.profile_row_title")
              }), (0, a.jsx)("span", {
                style: {
                  textAlign: "right"
                },
                children: f("leaderboard.table.views_row_title")
              })]
            }), b ? (0, a.jsx)("div", {
              className: r.default.emptyState,
              children: f("leaderboard.table.leaderboard_loading_text")
            }) : h ? (0, a.jsx)("div", {
              className: r.default.emptyState,
              children: h
            }) : 0 === x.length ? (0, a.jsx)("div", {
              className: r.default.emptyState,
              children: f("leaderboard.table.no_data_text")
            }) : (0, a.jsx)(a.Fragment, {
              children: x.map((e, t) => {
                let l = t < 3 ? r.default.rankTop : "",
                  o = 0 === t ? r.default.rowTop1 : 1 === t ? r.default.rowTop2 : 2 === t ? r.default.rowTop3 : "",
                  i = e.displayName || e.username || "Unknown",
                  n = e.username || "unknown",
                  _ = "number" == typeof e.views ? e.views.toLocaleString("en-US") : "0",
                  u = i.slice(0, 1),
                  m = !!e.premium;
                return (0, a.jsx)(s.default, {
                  href: `/${n}`,
                  className: r.default.rowLink,
                  target: "_blank",
                  prefetch: !1,
                  children: (0, a.jsxs)("div", {
                    className: `${r.default.row} ${o}`,
                    children: [(0, a.jsx)("span", {
                      className: `${r.default.rank} ${l}`,
                      children: t + 1
                    }), (0, a.jsxs)("div", {
                      className: r.default.profile,
                      children: [e.avatar ? (0, a.jsx)("img", {
                        className: r.default.avatar,
                        src: e.avatar,
                        alt: ""
                      }) : (0, a.jsx)("div", {
                        className: r.default.avatarFallback,
                        children: u
                      }), (0, a.jsxs)("div", {
                        className: r.default.nameBlock,
                        children: [(0, a.jsxs)("div", {
                          className: r.default.displayLine,
                          children: [(0, a.jsx)("h1", {
                            className: r.default.displayName,
                            children: i
                          }), m && (0, a.jsx)("span", {
                            className: r.default.premiumBadge,
                            children: (0, a.jsx)("span", {
                              className: r.default.premiumIcon,
                              children: d.default.premium
                            })
                          })]
                        }), (0, a.jsxs)("span", {
                          className: r.default.username,
                          children: ["@", n]
                        })]
                      })]
                    }), (0, a.jsx)("span", {
                      className: r.default.views,
                      children: _
                    })]
                  }, `${n}-${t}`)
                }, `${n}-${t}`)
              })
            })]
          })]
        })
      })
    })
  }
  e.s(["default", () => i])
}]);