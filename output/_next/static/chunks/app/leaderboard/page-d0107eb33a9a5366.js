(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1410], {
    25997: (a, e, l) => {
      "use strict";
      l.d(e, {
        default: () => m
      });
      var t = l(95155),
        s = l(12115),
        r = l(81382),
        d = l(86623),
        i = l.n(d),
        c = l(34023),
        n = l(98500),
        o = l.n(n),
        h = l(96351);

      function m({
        data: a
      }) {
        let e = a?.tokenData,
          l = a?.statsData,
          [d, n] = (0, s.useState)("all"),
          [m, w] = (0, s.useState)(null),
          [b, p] = (0, s.useState)(!0),
          [_, x] = (0, s.useState)(null),
          f = (0, h.kj)();
        (0, s.useEffect)(() => {
          let a = !0;
          return (async () => {
            try {
              p(!0);
              let e = await fetch("/api/leaderboard/views", {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                l = await e.json();
              if (!a) return;
              !e.ok || l?.error ? x(l?.error) : (w(l), x(null))
            } catch (e) {
              if (!a) return;
              x(e?.message)
            } finally {
              a && p(!1)
            }
          })(), () => {
            a = !1
          }
        }, []);
        let v = m?.allTime || [],
          N = m?.month || [],
          u = (0, s.useMemo)(() => "all" === d ? v : N, [d, v, N]),
          g = f("all" === d ? "leaderboard.hero.description_alltime" : "leaderboard.hero.description_thismonth");
        return (0, t.jsx)(r.A, {
          data: e,
          statsData: l,
          children: (0, t.jsx)("div", {
            className: i().leaderboardPage,
            children: (0, t.jsxs)("div", {
              className: i().container,
              children: [(0, t.jsxs)("div", {
                className: i().hero,
                children: [(0, t.jsx)("h1", {
                  className: i().title,
                  children: f("leaderboard.hero.title")
                }), (0, t.jsx)("p", {
                  className: i().subtitle,
                  children: g
                }), (0, t.jsxs)("div", {
                  className: i().tabs,
                  children: [(0, t.jsx)("button", {
                    className: `${i().tabButton} ${"all"===d?i().tabActive:""}`,
                    onClick: () => n("all"),
                    type: "button",
                    children: f("leaderboard.hero.tab_alltime")
                  }), (0, t.jsx)("button", {
                    className: `${i().tabButton} ${"month"===d?i().tabActive:""}`,
                    onClick: () => n("month"),
                    type: "button",
                    children: f("leaderboard.hero.tab_thismonth")
                  })]
                })]
              }), (0, t.jsxs)("div", {
                className: i().listWrapper,
                children: [(0, t.jsxs)("div", {
                  className: i().listHeader,
                  children: [(0, t.jsx)("span", {
                    children: "#"
                  }), (0, t.jsx)("span", {
                    children: f("leaderboard.table.profile_row_title")
                  }), (0, t.jsx)("span", {
                    style: {
                      textAlign: "right"
                    },
                    children: f("leaderboard.table.views_row_title")
                  })]
                }), b ? (0, t.jsx)("div", {
                  className: i().emptyState,
                  children: f("leaderboard.table.leaderboard_loading_text")
                }) : _ ? (0, t.jsx)("div", {
                  className: i().emptyState,
                  children: _
                }) : 0 === u.length ? (0, t.jsx)("div", {
                  className: i().emptyState,
                  children: f("leaderboard.table.no_data_text")
                }) : u.map((a, e) => {
                  let l = e < 3 ? i().rankTop : "",
                    s = 0 === e ? i().rowTop1 : 1 === e ? i().rowTop2 : 2 === e ? i().rowTop3 : "",
                    r = a.displayName || a.username || "Unknown",
                    d = a.username || "unknown",
                    n = "number" == typeof a.views ? a.views.toLocaleString("en-US") : "0",
                    h = r ? r.slice(0, 1) : "?",
                    m = !!a.premium;
                  return (0, t.jsx)(o(), {
                    href: `/${d}`,
                    className: i().rowLink,
                    target: "_blank",
                    prefetch: !1,
                    children: (0, t.jsxs)("div", {
                      className: `${i().row} ${s}`,
                      children: [(0, t.jsx)("span", {
                        className: `${i().rank} ${l}`,
                        children: e + 1
                      }), (0, t.jsxs)("div", {
                        className: i().profile,
                        children: [a.avatar ? (0, t.jsx)("img", {
                          className: i().avatar,
                          src: a.avatar,
                          alt: ""
                        }) : (0, t.jsx)("div", {
                          className: i().avatarFallback,
                          children: h
                        }), (0, t.jsxs)("div", {
                          className: i().nameBlock,
                          children: [(0, t.jsxs)("div", {
                            className: i().displayLine,
                            children: [(0, t.jsx)("h1", {
                              className: i().displayName,
                              children: r
                            }), m && (0, t.jsx)("span", {
                              className: i().premiumBadge,
                              children: (0, t.jsx)("span", {
                                className: i().premiumIcon,
                                children: c.A.premium
                              })
                            })]
                          }), (0, t.jsxs)("span", {
                            className: i().username,
                            children: ["@", d]
                          })]
                        })]
                      }), (0, t.jsx)("span", {
                        className: i().views,
                        children: n
                      })]
                    }, `${d}-${e}`)
                  }, `${d}-${e}`)
                })]
              })]
            })
          })
        })
      }
    },
    34023: (a, e, l) => {
      "use strict";
      l.d(e, {
        A: () => s
      });
      var t = l(95155);
      l(12115);
      let s = {
        cross: (0, t.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          style: {
            color: "rgb(194, 60, 60)"
          },
          width: "1em",
          height: "1em",
          viewBox: "0 0 15 15",
          children: (0, t.jsx)("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5z",
            clipRule: "evenodd"
          })
        }),
        check: (0, t.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          style: {
            color: "rgb(64, 184, 64)"
          },
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, t.jsx)("path", {
            fill: "currentColor",
            d: "M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
          })
        }),
        arrowDown: (0, t.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, t.jsx)("path", {
            fill: "currentColor",
            d: "M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"
          })
        }),
        arrowUp: (0, t.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, t.jsx)("path", {
            fill: "currentColor",
            d: "m12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"
          })
        }),
        checkmark: (0, t.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "6.43 7.43 11.15 8.57",
          children: (0, t.jsx)("path", {
            fill: "currentColor",
            d: "m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275z"
          })
        }),
        premium: (0, t.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 512 512",
          children: (0, t.jsx)("path", {
            fill: "currentColor",
            d: "M121.72 32a4 4 0 0 0-3.72 5.56l2.3 5.43l40.7 94.9a4 4 0 0 0 6.88.82L243 38.4a4 4 0 0 0-3.2-6.4Zm298.21 26.06l-41.28 96.37a4 4 0 0 0 3.68 5.57h101a4 4 0 0 0 3.4-6.11L427 57.53a4 4 0 0 0-7.07.53M85 57.57l-59.71 96.32a4 4 0 0 0 3.4 6.11h101a4 4 0 0 0 3.67-5.58L92 58.1a4 4 0 0 0-7-.53M393.27 32H267.82a1.94 1.94 0 0 0-1.56 3.11l79.92 106.46a1.94 1.94 0 0 0 3.34-.4L391.6 43l3.4-8.34a1.92 1.92 0 0 0-1.7-2.66ZM239 448l-89.43-253.49A3.78 3.78 0 0 0 146 192H25.7a3.72 3.72 0 0 0-2.95 6l216 279.81a5.06 5.06 0 0 0 6.39 1.37a5 5 0 0 0 2.39-6.08Zm247.3-256H366a3.75 3.75 0 0 0-3.54 2.51l-98.2 278.16a5.21 5.21 0 0 0 2.42 6.31a5.22 5.22 0 0 0 6.61-1.39L489.25 198a3.72 3.72 0 0 0-2.95-6M259.2 78.93l56 74.67a4 4 0 0 1-3.2 6.4H200a4 4 0 0 1-3.2-6.4l56-74.67a4 4 0 0 1 6.4 0m-7 310.31l-67.7-191.91a4 4 0 0 1 3.77-5.33h135.46a4 4 0 0 1 3.77 5.33l-67.73 191.91a4 4 0 0 1-7.54 0Z"
          })
        }),
        imagehost: (0, t.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 16 16",
          children: (0, t.jsx)("path", {
            fill: "currentColor",
            d: "m10.878.282l.348 1.071a2.205 2.205 0 0 0 1.398 1.397l1.072.348l.021.006a.423.423 0 0 1 0 .798l-1.071.348a2.208 2.208 0 0 0-1.399 1.397l-.348 1.07a.423.423 0 0 1-.798 0l-.348-1.07a2.204 2.204 0 0 0-1.399-1.403l-1.072-.348a.423.423 0 0 1 0-.798l1.072-.348a2.208 2.208 0 0 0 1.377-1.397l.348-1.07a.423.423 0 0 1 .799 0m4.905 7.931l-.765-.248a1.577 1.577 0 0 1-1-.999l-.248-.764a.302.302 0 0 0-.57 0l-.25.764a1.576 1.576 0 0 1-.983.999l-.765.248a.303.303 0 0 0 0 .57l.765.249a1.578 1.578 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.576 1.576 0 0 1 .999-.999l.765-.248a.303.303 0 0 0 0-.57zM13.502 12a1.328 1.328 0 0 1-.746-.23c-.22-.16-.38-.371-.48-.621l-.26-.802a.519.519 0 0 0-.14-.22a.635.635 0 0 0-.22-.14l-.748-.246A3.001 3.001 0 0 1 5 9a3 3 0 0 1 3.846-2.88l-.053-.16c-.09-.23-.18-.36-.29-.47a1.311 1.311 0 0 0-.471-.291l-1.061-.35c-.3-.1-.54-.291-.71-.532a1.431 1.431 0 0 1-.208-1.207a1.5 1.5 0 0 0-.777.72L4.691 5H4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-.079a1.45 1.45 0 0 1-.498.079M10 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
          })
        }),
        arrowPlansDown: (0, t.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, t.jsx)("path", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "1.5",
            d: "M12 4v16m0 0l6-6m-6 6l-6-6"
          })
        }),
        verified: (0, t.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "1 1.5 22 21",
          children: (0, t.jsx)("path", {
            fill: "currentColor",
            d: "m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45l-3.4 1.45Zm2.35-6.95L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12l3.55 3.55Z"
          })
        }),
        customBadge: (0, t.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 512 512",
          children: (0, t.jsx)("path", {
            fill: "currentColor",
            d: "M208 512a24.84 24.84 0 0 1-23.34-16l-39.84-103.6a16.06 16.06 0 0 0-9.19-9.19L32 343.34a25 25 0 0 1 0-46.68l103.6-39.84a16.06 16.06 0 0 0 9.19-9.19L184.66 144a25 25 0 0 1 46.68 0l39.84 103.6a16.06 16.06 0 0 0 9.19 9.19l103 39.63a25.49 25.49 0 0 1 16.63 24.1a24.82 24.82 0 0 1-16 22.82l-103.6 39.84a16.06 16.06 0 0 0-9.19 9.19L231.34 496A24.84 24.84 0 0 1 208 512M88 176a14.67 14.67 0 0 1-13.69-9.4l-16.86-43.84a7.28 7.28 0 0 0-4.21-4.21L9.4 101.69a14.67 14.67 0 0 1 0-27.38l43.84-16.86a7.3 7.3 0 0 0 4.21-4.21L74.16 9.79A15 15 0 0 1 86.23.11a14.67 14.67 0 0 1 15.46 9.29l16.86 43.84a7.3 7.3 0 0 0 4.21 4.21l43.84 16.86a14.67 14.67 0 0 1 0 27.38l-43.84 16.86a7.28 7.28 0 0 0-4.21 4.21l-16.86 43.84A14.67 14.67 0 0 1 88 176m312 80a16 16 0 0 1-14.93-10.26l-22.84-59.37a8 8 0 0 0-4.6-4.6l-59.37-22.84a16 16 0 0 1 0-29.86l59.37-22.84a8 8 0 0 0 4.6-4.6l22.67-58.95a16.45 16.45 0 0 1 13.17-10.57a16 16 0 0 1 16.86 10.15l22.84 59.37a8 8 0 0 0 4.6 4.6l59.37 22.84a16 16 0 0 1 0 29.86l-59.37 22.84a8 8 0 0 0-4.6 4.6l-22.84 59.37A16 16 0 0 1 400 256"
          })
        })
      }
    },
    41143: (a, e, l) => {
      Promise.resolve().then(l.bind(l, 25997))
    },
    86623: a => {
      a.exports = {
        leaderboardPage: "GUNS__89-92329f75-e22c6b44-ae361b60",
        container: "GUNS__29-c69bcec5-dd3777f5-fadc73f9",
        hero: "GUNS__d0-33bece04-100471f1-292c5ada",
        title: "GUNS__f2-8ff5b950-f28a41e9-4aab8640",
        subtitle: "GUNS__11-daf52b5b-ec3d3bd3-d4e8550a",
        tabs: "GUNS__ba-10948c67-f0130605-2217a813",
        tabButton: "GUNS__7a-1ac219f5-05d7d373-ff12aa3f",
        tabActive: "GUNS__46-f09d45f5-05422adf-5781c86b",
        listWrapper: "GUNS__59-3788c6f9-54387370-4a598430",
        listHeader: "GUNS__41-a25a3b83-7f0fa81c-b10fa8fe",
        row: "GUNS__96-e79a59c0-61d2e5e2-ce529f1e",
        rowTop1: "GUNS__f4-5a151f20-800e6739-55337ab5",
        rowTop2: "GUNS__01-3e249e4b-080e35db-034e32a9",
        rowTop3: "GUNS__74-e5b9ad41-a00af439-c8446bdb",
        rank: "GUNS__74-22fa163d-5f575c0c-a23bbfda",
        rankTop: "GUNS__ba-6d1a42da-d16bfac4-4f6d6491",
        profile: "GUNS__ad-e1602013-467193e6-eeca6439",
        displayLine: "GUNS__36-f3387c45-5ea6023b-a8ca680b",
        avatar: "GUNS__13-23c64016-73384205-a760501b",
        avatarFallback: "GUNS__c5-be408a64-dbcce6cc-1b687499",
        nameBlock: "GUNS__c0-b5208dcd-45ca6212-b8d01b1e",
        displayName: "GUNS__14-b62c480a-1d809d1c-1761568c",
        rowLink: "GUNS__f7-5f559db3-38d86272-b89d8d1c",
        premiumBadge: "GUNS__ea-ab62e5f1-ed3a4ff5-b5c8656e",
        premiumIcon: "GUNS__2c-6ca87cbe-71d499a7-0601d81b",
        username: "GUNS__1d-2eff9324-327adce7-93e3cab2",
        views: "GUNS__51-bde5339d-d41d031d-8b2567df",
        emptyState: "GUNS__58-6aa77a72-3c50608e-84085678"
      }
    }
  },
  a => {
    a.O(0, [9404, 1268, 6992, 8500, 3200, 226, 1382, 8441, 3794, 7358], () => a(a.s = 41143)), _N_E = a.O()
  }
]);