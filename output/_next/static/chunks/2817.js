(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2817], {
    4963: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => c
      });
      var a = r(95155),
        n = r(81382);

      function c({
        data: e,
        children: t
      }) {
        return (0, a.jsx)(n.default, {
          data: e.tokenData,
          statsData: e.statsData,
          children: t
        })
      }
    },
    28356: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = {
        cancelIdleCallback: function() {
          return c
        },
        requestIdleCallback: function() {
          return n
        }
      };
      for (var a in r) Object.defineProperty(t, a, {
        enumerable: !0,
        get: r[a]
      });
      let n = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
          let t = Date.now();
          return self.setTimeout(function() {
            e({
              didTimeout: !1,
              timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - t))
              }
            })
          }, 1)
        },
        c = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
          return clearTimeout(e)
        };
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    29722: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => a
      });
      let a = function() {
        for (var e, t, r = 0, a = "", n = arguments.length; r < n; r++)(e = arguments[r]) && (t = function e(t) {
          var r, a, n = "";
          if ("string" == typeof t || "number" == typeof t) n += t;
          else if ("object" == typeof t)
            if (Array.isArray(t)) {
              var c = t.length;
              for (r = 0; r < c; r++) t[r] && (a = e(t[r])) && (n && (n += " "), n += a)
            } else
              for (a in t) t[a] && (n && (n += " "), n += a);
          return n
        }(e)) && (a && (a += " "), a += t);
        return a
      }
    },
    41029: (e, t, r) => {
      "use strict";
      r.d(t, {
        B: () => a,
        p: () => n
      });
      let a = {
        badge: "black_week_2026",
        startsAt: Date.parse("2026-11-25T00:00:00+01:00"),
        endsAt: 1796252399e3,
        discountPercent: 15,
        giftDiscountPercent: 10
      };

      function n(e = Date.now()) {
        return e >= a.startsAt && e < a.endsAt
      }
    },
    42593: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var a = {
        default: function() {
          return S
        },
        handleClientScriptLoad: function() {
          return m
        },
        initScriptLoader: function() {
          return g
        }
      };
      for (var n in a) Object.defineProperty(t, n, {
        enumerable: !0,
        get: a[n]
      });
      let c = r(73623),
        i = r(66388),
        o = r(95155),
        s = c._(r(47650)),
        d = i._(r(12115)),
        u = r(75368),
        l = r(3584),
        f = r(28356),
        p = new Map,
        _ = new Set,
        b = e => {
          let {
            src: t,
            id: r,
            onLoad: a = () => {},
            onReady: n = null,
            dangerouslySetInnerHTML: c,
            children: i = "",
            strategy: o = "afterInteractive",
            onError: d,
            stylesheets: u
          } = e, f = r || t;
          if (f && _.has(f)) return;
          if (p.has(t)) {
            _.add(f), p.get(t).then(a, d);
            return
          }
          let b = () => {
              n && n(), _.add(f)
            },
            m = document.createElement("script"),
            g = new Promise((e, t) => {
              m.addEventListener("load", function(t) {
                e(), a && a.call(this, t), b()
              }), m.addEventListener("error", function(e) {
                t(e)
              })
            }).catch(function(e) {
              d && d(e)
            });
          c ? (m.innerHTML = c.__html || "", b()) : i ? (m.textContent = "string" == typeof i ? i : Array.isArray(i) ? i.join("") : "", b()) : t && (m.src = t, p.set(t, g)), (0, l.setAttributesFromProps)(m, e), "worker" === o && m.setAttribute("type", "text/partytown"), m.setAttribute("data-nscript", o), u && (e => {
            if (s.default.preinit) return e.forEach(e => {
              s.default.preinit(e, {
                as: "style"
              })
            });
            {
              let t = document.head;
              e.forEach(e => {
                let r = document.createElement("link");
                r.type = "text/css", r.rel = "stylesheet", r.href = e, t.appendChild(r)
              })
            }
          })(u), document.body.appendChild(m)
        };

      function m(e) {
        let {
          strategy: t = "afterInteractive"
        } = e;
        "lazyOnload" === t ? window.addEventListener("load", () => {
          (0, f.requestIdleCallback)(() => b(e))
        }) : b(e)
      }

      function g(e) {
        e.forEach(m), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
          let t = e.id || e.getAttribute("src");
          _.add(t)
        })
      }

      function h(e) {
        let {
          id: t,
          src: r = "",
          onLoad: a = () => {},
          onReady: n = null,
          strategy: c = "afterInteractive",
          onError: i,
          stylesheets: l,
          ...p
        } = e, {
          updateScripts: m,
          scripts: g,
          getIsSsr: h,
          appDir: S,
          nonce: G
        } = (0, d.useContext)(u.HeadManagerContext);
        G = p.nonce || G;
        let N = (0, d.useRef)(!1);
        (0, d.useEffect)(() => {
          let e = t || r;
          N.current || (n && e && _.has(e) && n(), N.current = !0)
        }, [n, t, r]);
        let y = (0, d.useRef)(!1);
        if ((0, d.useEffect)(() => {
            if (!y.current) {
              if ("afterInteractive" === c) b(e);
              else "lazyOnload" === c && ("complete" === document.readyState ? (0, f.requestIdleCallback)(() => b(e)) : window.addEventListener("load", () => {
                (0, f.requestIdleCallback)(() => b(e))
              }));
              y.current = !0
            }
          }, [e, c]), ("beforeInteractive" === c || "worker" === c) && (m ? (g[c] = (g[c] || []).concat([{
            id: t,
            src: r,
            onLoad: a,
            onReady: n,
            onError: i,
            ...p,
            nonce: G
          }]), m(g)) : h && h() ? _.add(t || r) : h && !h() && b({
            ...e,
            nonce: G
          })), S) {
          if (l && l.forEach(e => {
              s.default.preinit(e, {
                as: "style"
              })
            }), "beforeInteractive" === c)
            if (!r) return p.dangerouslySetInnerHTML && (p.children = p.dangerouslySetInnerHTML.__html, delete p.dangerouslySetInnerHTML), (0, o.jsx)("script", {
              nonce: G,
              dangerouslySetInnerHTML: {
                __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([0,{...p,id:t}])})`
              }
            });
            else return s.default.preload(r, p.integrity ? {
              as: "script",
              integrity: p.integrity,
              nonce: G,
              crossOrigin: p.crossOrigin
            } : {
              as: "script",
              nonce: G,
              crossOrigin: p.crossOrigin
            }), (0, o.jsx)("script", {
              nonce: G,
              dangerouslySetInnerHTML: {
                __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([r,{...p,id:t}])})`
              }
            });
          "afterInteractive" === c && r && s.default.preload(r, p.integrity ? {
            as: "script",
            integrity: p.integrity,
            nonce: G,
            crossOrigin: p.crossOrigin
          } : {
            as: "script",
            nonce: G,
            crossOrigin: p.crossOrigin
          })
        }
        return null
      }
      Object.defineProperty(h, "__nextScript", {
        value: !0
      });
      let S = h;
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    48796: e => {
      e.exports = {
        page: "GUNS__4f-a2b0b579-10aa20d1-d110852e",
        ambient: "GUNS__ef-ecb60a1a-b3d32d98-35b7ddaf",
        ambientImage: "GUNS__39-7140e702-e0fb4270-70554d4c",
        pageLayer: "GUNS__9a-87771ced-dd318e43-618be627",
        hubHero: "GUNS__57-a52c9199-cec21402-87f51cdd",
        detailHero: "GUNS__81-474b95c7-291289ed-a4e6f370",
        accentText: "GUNS__7e-66d07c19-f7b86f0e-49483c21",
        heroActions: "GUNS__a3-62c759d6-65f598dc-5e72c6eb",
        primaryButton: "GUNS__d3-5dcfdc1c-fb492e65-f36dfaa4",
        secondaryButton: "GUNS__46-890a2dea-b67e4b7b-1b050314",
        comparisonGridSection: "GUNS__5c-a3c47fdd-94b3dc7e-87f0a33f",
        sectionHeading: "GUNS__01-0858f915-05c8e518-2650e3c7",
        snapshot: "GUNS__b2-fe1114ff-d7be4c3f-edd24ff7",
        comparisonCards: "GUNS__75-794c5f22-8675f1ed-c8ee16e5",
        comparisonCard: "GUNS__f7-87c1d6ed-6a6631a1-7bb7a844",
        cardProducts: "GUNS__c5-c7c02334-7059d0e4-03e2933e",
        cardVs: "GUNS__41-43b1a220-8b454b40-0ddc4b76",
        heroVs: "GUNS__4b-ee29eb96-039c3a76-75eb3308",
        cardPriceRow: "GUNS__db-382cc1c1-deea9e0d-0b12bec4",
        priceLabel: "GUNS__9e-e96fb18d-11e3e4e2-22138722",
        priceSuffix: "GUNS__c4-eec22915-ebf3ae65-9fbabe17",
        cardAction: "GUNS__49-239c3e4c-1a53faa6-3424ae40",
        trademarkDisclaimer: "GUNS__2e-632a9ca7-c6c1e8f4-e7c2594e",
        productLogo: "GUNS__99-08b94ba1-f60edca5-416a254e",
        competitorMark: "GUNS__cb-c6b36efd-a237815b-0678edf0",
        productLogoCompact: "GUNS__91-14e9cfa8-c27f2adf-7346db46",
        brandDot: "GUNS__fb-458be684-3e389c79-0d74059a",
        detailContent: "GUNS__4f-7edffef4-eec05d42-5c4e0286",
        tableSection: "GUNS__91-3e2fe02a-129c2505-cfcb2c68",
        reasonsSection: "GUNS__d9-6bcd9975-565ef118-f08654e7",
        decisionSection: "GUNS__fb-a47a680e-f4e6c04c-20fd046d",
        moreComparisons: "GUNS__e5-754d0acb-78610dae-4ad1b994",
        sourceLinks: "GUNS__81-975fca85-05e621e6-5b4ae4bf",
        heroMatchup: "GUNS__67-d5f298af-f3c17cd8-a63212ed",
        snapshotIntro: "GUNS__e7-4a203e6d-f9f81d16-733bd556",
        priceSnapshot: "GUNS__f9-b453fdd2-26de2400-23c57d9a",
        priceCardHeader: "GUNS__cd-5644f33b-73694123-572d6b9c",
        snapshotVs: "GUNS__be-423e7789-4fe341d9-508f1e06",
        gunsSnapshot: "GUNS__1a-b60117ac-c2248482-5557a1eb",
        snapshotPrice: "GUNS__39-5cbaae70-b09f806d-b629cbde",
        priceNote: "GUNS__68-d9c460ca-1017d968-0483a092",
        reasonsLead: "GUNS__e6-fd039d2b-319bc21a-29d26630",
        tableWrap: "GUNS__7d-468b4bc3-8fa3e425-d528dd66",
        comparisonTable: "GUNS__24-c5e1fc0a-ea4a49fa-686586c8",
        tableCheck: "GUNS__d3-a9eee7bb-5bafe843-5f0c4dad",
        tableDot: "GUNS__89-b9973d1a-492f742f-616ed3c7",
        tableNotes: "GUNS__6c-be0c3288-a43a64d3-a169a4c7",
        tableNoteLabel: "GUNS__d1-febf547f-95bcc7e1-db027497",
        reasonList: "GUNS__50-5f2cfb4f-f0075d74-26630d50",
        reasonItem: "GUNS__ab-72487638-cb399402-4455f851",
        decisionGrid: "GUNS__90-60442c9b-be94860d-59425490",
        decisionCard: "GUNS__6f-f71f1076-0a39c548-4ee84e62",
        decisionList: "GUNS__92-b8290391-ee6231d1-38c235a0",
        decisionItem: "GUNS__3c-6d795cc3-c1cfd194-cb17f5c6",
        comparisonMeta: "GUNS__72-7edce4e6-3dbee355-aea2bae3",
        moreArrow: "GUNS__89-be089141-8cdda26d-f2f4229c"
      }
    },
    60204: (e, t, r) => {
      "use strict";
      r.d(t, {
        M: () => o,
        b: () => i
      });
      var a = r(95155),
        n = r(48796),
        c = r.n(n);

      function i({
        compact: e = !1
      }) {
        return (0, a.jsxs)("span", {
          className: `${c().productLogo} ${e?c().productLogoCompact:""}`,
          children: [(0, a.jsx)("img", {
            src: "https://assets.guns.lol/guns_logo_no_background_cropped.png",
            alt: ""
          }), (0, a.jsxs)("span", {
            children: ["guns", (0, a.jsx)("span", {
              className: c().brandDot,
              children: "."
            }), "lol"]
          })]
        })
      }

      function o({
        comparison: e,
        compact: t = !1
      }) {
        return (0, a.jsxs)("span", {
          className: `${c().productLogo} ${t?c().productLogoCompact:""}`,
          children: [(0, a.jsx)("span", {
            className: c().competitorMark,
            style: {
              "--competitor-accent": e.accent
            },
            children: (0, a.jsx)("img", {
              src: e.iconUrl,
              alt: ""
            })
          }), (0, a.jsx)("span", {
            children: e.name
          })]
        })
      }
    },
    61836: (e, t, r) => {
      "use strict";
      r.d(t, {
        $g: () => f,
        EJ: () => n,
        KH: () => o,
        YL: () => s,
        Yi: () => i,
        dd: () => u,
        gP: () => p,
        it: () => l,
        o3: () => _,
        q9: () => c,
        wH: () => d
      });
      var a = r(41029);
      let n = {
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
        c = {
          free: n.free,
          get premium() {
            return (0, a.p)() ? 6.79 : n.premium
          },
          get premiumGift() {
            return (0, a.p)() ? 6.49 : n.premiumGift
          },
          get imagehost() {
            return (0, a.p)() ? 4.25 : n.imagehost
          },
          get imagehostGift() {
            return (0, a.p)() ? 4.49 : n.imagehostGift
          },
          get verified() {
            return (0, a.p)() ? 12.75 : n.verified
          },
          get verifiedGift() {
            return (0, a.p)() ? 13.49 : n.verifiedGift
          },
          get customBadge() {
            return (0, a.p)() ? 7.65 : n.customBadge
          },
          get customBadgeGift() {
            return (0, a.p)() ? 8.09 : n.customBadgeGift
          },
          get badgeCredit() {
            return (0, a.p)() ? 2.55 : n.badgeCredit
          },
          get aliasCredit() {
            return (0, a.p)() ? 4.25 : n.aliasCredit
          },
          donationMinimum: n.donationMinimum,
          donorBadgeMinimum: n.donorBadgeMinimum
        },
        i = [{
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

      function d(e) {
        return !Number.isInteger(e) || e < o || e > s ? null : (100 * Math.ceil((e <= 10 ? 100 * e - 1 : e <= 25 ? 999 + Math.round(1e3 / 15 * (e - 10)) : e <= 50 ? 1999 + (e - 25) * 60 : 3499 + (e - 50) * 50) / 100) - 1) / 100
      }
      let u = 15,
        l = {
          get premiumlifetime() {
            return c.premium
          },
          get imagehost() {
            return c.imagehost
          },
          get verified() {
            return c.verified
          },
          get custombadge() {
            return c.customBadge
          },
          get aliascredits() {
            return c.aliasCredit
          }
        };

      function f(e) {
        return `${e.toFixed(2).replace(/\.00$/,"").replace(".",",")}€`
      }

      function p(e) {
        let t = c.badgeCredit * e ** .85,
          r = n.badgeCredit * e;
        return {
          totalPrice: Number(t.toFixed(2)),
          discountPercent: Number(((1 - t / r) * 100).toFixed(0))
        }
      }

      function _(e, t = !1) {
        let r = (t && (0, a.p)() ? .9 * n.customBadgeGift : c.customBadge) * e ** .95,
          i = n.customBadge * e;
        return {
          totalPrice: Number(r.toFixed(2)),
          rawPrice: Number(i.toFixed(2)),
          discountPercent: Number(((1 - r / i) * 100).toFixed(0))
        }
      }
    },
    61850: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => o
      });
      var a = r(95155),
        n = r(86891),
        c = r(48796),
        i = r.n(c);

      function o({
        comparisons: e
      }) {
        let t = (0, n.kj)(),
          r = e.map(({
            name: e
          }) => e).join(", ");
        return (0, a.jsx)("div", {
          className: i().trademarkDisclaimer,
          children: t("comparisons.disclaimer", {
            names: r,
            reviewedDate: t("comparisons.verified_date")
          })
        })
      }
    },
    65596: (e, t, r) => {
      "use strict";
      r.d(t, {
        default: () => n.a
      });
      var a = r(42593),
        n = r.n(a)
    },
    98073: (e, t, r) => {
      "use strict";
      r.d(t, {
        PD: () => i,
        i0: () => o
      });
      var a = r(61836);
      let n = [{
        slug: "linktree",
        name: "Linktree",
        iconUrl: "https://assets.guns.lol/comparisons/linktree.png",
        accent: "#43e660",
        rowCount: 7,
        reasonCount: 4,
        chooseCompetitorCount: 3,
        chooseGunsCount: 3,
        sources: [{
          key: "pricing",
          url: "https://linktr.ee/s/pricing"
        }, {
          key: "paid_features",
          url: "https://linktr.ee/help/en/articles/5434140-an-overview-of-paid-features-available-on-linktree"
        }, {
          key: "metadata_help",
          url: "https://linktr.ee/help/en/articles/5434180-how-can-i-change-my-metadata"
        }, {
          key: "guns_pricing",
          url: "https://guns.lol/pricing"
        }]
      }, {
        slug: "beacons",
        name: "Beacons",
        iconUrl: "https://assets.guns.lol/comparisons/beaconsai.jpeg",
        accent: "#ff5a1f",
        rowCount: 7,
        reasonCount: 3,
        chooseCompetitorCount: 3,
        chooseGunsCount: 3,
        sources: [{
          key: "pricing",
          url: "https://beacons.ai/i/pricing"
        }, {
          key: "plan_guide",
          url: "https://help.beacons.ai/en/articles/4695681"
        }, {
          key: "guns_pricing",
          url: "https://guns.lol/pricing"
        }]
      }, {
        slug: "carrd",
        name: "Carrd",
        iconUrl: "https://assets.guns.lol/comparisons/carrd.png",
        accent: "#7486ff",
        rowCount: 7,
        reasonCount: 3,
        chooseCompetitorCount: 3,
        chooseGunsCount: 3,
        sources: [{
          key: "pro_plans",
          url: "https://carrd.co/docs/pro/plans"
        }, {
          key: "meta_tags",
          url: "https://carrd.co/docs/sites/setting-up-meta-tags"
        }, {
          key: "guns_pricing",
          url: "https://guns.lol/pricing"
        }]
      }];

      function c(e) {
        return Array.from({
          length: e
        }, (e, t) => t)
      }

      function i(e) {
        let t = e("comparisons.premium_once", {
          price: (0, a.$g)(a.q9.premium)
        });
        return n.map(r => {
          let a = (a, n = {}) => e(`comparisons.services.${r.slug}.${a}`, {
            gunsPremium: t,
            ...n
          });
          return {
            slug: r.slug,
            name: r.name,
            iconUrl: r.iconUrl,
            accent: r.accent,
            shortDescription: a("short_description"),
            headline: a("headline"),
            summary: a("summary"),
            competitorPrice: a("competitor_price"),
            competitorPriceNote: a("competitor_price_note"),
            rows: c(r.rowCount).map(e => ({
              label: a(`rows.${e}.label`),
              guns: a(`rows.${e}.guns`),
              competitor: a(`rows.${e}.competitor`)
            })),
            gunsReasons: c(r.reasonCount).map(e => ({
              title: a(`guns_reasons.${e}.title`),
              description: a(`guns_reasons.${e}.description`)
            })),
            chooseCompetitorWhen: c(r.chooseCompetitorCount).map(e => a(`choose_competitor_when.${e}`)),
            chooseGunsWhen: c(r.chooseGunsCount).map(e => a(`choose_guns_when.${e}`)),
            sources: r.sources.map(e => ({
              label: a(`sources.${e.key}`),
              url: e.url
            }))
          }
        })
      }

      function o(e, t) {
        return t.find(t => t.slug === e)
      }
      n.map(({
        slug: e,
        name: t
      }) => ({
        slug: e,
        name: t
      })).map(({
        slug: e
      }) => e)
    }
  }
]);