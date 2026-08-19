(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6402], {
    909: (s, e, a) => {
      "use strict";
      a.d(e, {
        default: () => h
      });
      var c = a(95155),
        r = a(61836),
        i = a(81934),
        n = a(86891),
        o = a(4963),
        l = a(60204),
        t = a(98073),
        m = a(61850),
        p = a(48796),
        d = a.n(p);

      function h({
        data: s
      }) {
        let e = (0, n.kj)(),
          a = (0, n.VJ)(),
          p = (0, t.PD)((s, a) => e(s, a)),
          h = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: e("comparisons.hub.structured_data_name"),
            itemListElement: p.map((s, c) => ({
              "@type": "ListItem",
              position: c + 1,
              name: e("comparisons.hub.structured_data_item_name", {
                name: s.name
              }),
              url: `https://guns.lol${a(`/compare/${s.slug}`)}`
            }))
          };
        return (0, c.jsx)(o.A, {
          data: s,
          children: (0, c.jsxs)("div", {
            className: d().page,
            children: [(0, c.jsx)("script", {
              type: "application/ld+json",
              dangerouslySetInnerHTML: {
                __html: JSON.stringify(h)
              }
            }), (0, c.jsx)("div", {
              className: d().ambient,
              children: (0, c.jsx)("img", {
                className: d().ambientImage,
                src: "https://assets.guns.lol/gradient_background.png",
                alt: "",
                draggable: !1
              })
            }), (0, c.jsxs)("div", {
              className: d().hubHero,
              children: [(0, c.jsxs)("h1", {
                children: [e("comparisons.hub.hero.title"), (0, c.jsx)("br", {}), (0, c.jsx)("span", {
                  className: d().accentText,
                  children: e("comparisons.hub.hero.accent")
                })]
              }), (0, c.jsx)("p", {
                children: e("comparisons.hub.hero.description")
              }), (0, c.jsxs)("div", {
                className: d().heroActions,
                children: [(0, c.jsxs)(i.A, {
                  className: d().primaryButton,
                  href: "/compare/linktree",
                  children: [e("comparisons.hub.hero.compare_linktree"), " ", (0, c.jsx)("span", {
                    children: "→"
                  })]
                }), (0, c.jsx)(i.A, {
                  className: d().secondaryButton,
                  href: "/register?ref=comparison_hub",
                  children: e("comparisons.hub.hero.create_profile")
                })]
              })]
            }), (0, c.jsxs)("div", {
              className: `${d().comparisonGridSection} ${d().pageLayer}`,
              children: [(0, c.jsxs)("div", {
                className: d().sectionHeading,
                children: [(0, c.jsx)("h2", {
                  id: "compare-heading",
                  children: e("comparisons.hub.section.title")
                }), (0, c.jsx)("p", {
                  children: e("comparisons.hub.section.description")
                })]
              }), (0, c.jsx)("div", {
                className: d().comparisonCards,
                children: p.map(s => (0, c.jsxs)(i.A, {
                  href: `/compare/${s.slug}`,
                  className: d().comparisonCard,
                  children: [(0, c.jsxs)("div", {
                    className: d().cardProducts,
                    children: [(0, c.jsx)(l.b, {
                      compact: !0
                    }), (0, c.jsx)("span", {
                      className: d().cardVs,
                      children: e("comparisons.vs")
                    }), (0, c.jsx)(l.M, {
                      comparison: s,
                      compact: !0
                    })]
                  }), (0, c.jsx)("p", {
                    children: s.shortDescription
                  }), (0, c.jsxs)("div", {
                    className: d().cardPriceRow,
                    children: [(0, c.jsxs)("span", {
                      children: [(0, c.jsx)("span", {
                        className: d().priceLabel,
                        children: e("comparisons.hub.card.guns_price_label")
                      }), (0, r.$g)(r.q9.premium), " ", (0, c.jsx)("span", {
                        className: d().priceSuffix,
                        children: e("comparisons.hub.card.lifetime")
                      })]
                    }), (0, c.jsxs)("span", {
                      children: [(0, c.jsx)("span", {
                        className: d().priceLabel,
                        children: e("comparisons.hub.card.competitor_price_label", {
                          name: s.name
                        })
                      }), s.competitorPrice]
                    })]
                  }), (0, c.jsxs)("span", {
                    className: d().cardAction,
                    children: [e("comparisons.hub.card.action"), " ", (0, c.jsx)("span", {
                      children: "→"
                    })]
                  })]
                }, s.slug))
              })]
            }), (0, c.jsx)(m.A, {
              comparisons: p
            })]
          })
        })
      }
    },
    33035: (s, e, a) => {
      Promise.resolve().then(a.bind(a, 909))
    }
  },
  s => {
    s.O(0, [8604, 1899, 9255, 4236, 1407, 6609, 4293, 5810, 6891, 5886, 9182, 8481, 3434, 1378, 1382, 2817, 8441, 3794, 7358], () => s(s.s = 33035)), _N_E = s.O()
  }
]);