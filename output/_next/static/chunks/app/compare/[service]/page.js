(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6886], {
    9641: (s, e, i) => {
      Promise.resolve().then(i.bind(i, 66851))
    },
    66851: (s, e, i) => {
      "use strict";
      i.d(e, {
        default: () => h
      });
      var a = i(95155),
        n = i(61836),
        r = i(81934),
        c = i(86891),
        l = i(4963),
        o = i(60204),
        t = i(98073),
        d = i(61850),
        m = i(48796),
        p = i.n(m);

      function h({
        data: s,
        service: e
      }) {
        let i = (0, c.kj)(),
          m = (0, c.VJ)(),
          h = (0, t.PD)((s, e) => i(s, e)),
          j = (0, t.i0)(e, h);
        if (!j) return null;
        let x = `/compare/${j.slug}`,
          u = `https://guns.lol${m(x)}`,
          g = i(`metadata.comparisons.services.${j.slug}.description`),
          N = [{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: i("comparisons.detail.structured_data_headline", {
              name: j.name
            }),
            description: g,
            dateModified: "2026-08-10",
            datePublished: "2026-08-10",
            mainEntityOfPage: u,
            author: {
              "@type": "Organization",
              name: "guns.lol",
              url: "https://guns.lol"
            },
            publisher: {
              "@type": "Organization",
              name: "guns.lol",
              logo: {
                "@type": "ImageObject",
                url: "https://assets.guns.lol/guns_logo_no_background_cropped.png"
              }
            }
          }, {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [{
              "@type": "ListItem",
              position: 1,
              name: i("comparisons.detail.breadcrumbs.home"),
              item: `https://guns.lol${m("/")}`
            }, {
              "@type": "ListItem",
              position: 2,
              name: i("comparisons.detail.breadcrumbs.comparisons"),
              item: `https://guns.lol${m("/compare")}`
            }, {
              "@type": "ListItem",
              position: 3,
              name: i("comparisons.hub.structured_data_item_name", {
                name: j.name
              }),
              item: u
            }]
          }];
        return (0, a.jsx)(l.A, {
          data: s,
          children: (0, a.jsxs)("div", {
            className: p().page,
            children: [(0, a.jsx)("script", {
              type: "application/ld+json",
              dangerouslySetInnerHTML: {
                __html: JSON.stringify(N)
              }
            }), (0, a.jsx)("div", {
              className: p().ambient,
              children: (0, a.jsx)("img", {
                className: p().ambientImage,
                src: "https://assets.guns.lol/gradient_background.png",
                alt: "",
                draggable: !1
              })
            }), (0, a.jsxs)("div", {
              className: `${p().pageLayer} ${p().detailContent}`,
              children: [(0, a.jsxs)("div", {
                className: p().detailHero,
                children: [(0, a.jsxs)("div", {
                  className: p().heroMatchup,
                  children: [(0, a.jsx)(o.b, {}), (0, a.jsx)("span", {
                    className: p().heroVs,
                    children: i("comparisons.vs")
                  }), (0, a.jsx)(o.M, {
                    comparison: j
                  })]
                }), (0, a.jsx)("h1", {
                  children: j.headline
                }), (0, a.jsx)("p", {
                  children: j.summary
                }), (0, a.jsxs)("div", {
                  className: p().heroActions,
                  children: [(0, a.jsxs)(r.A, {
                    className: p().primaryButton,
                    href: `/register?ref=compare_${j.slug}`,
                    children: [i("comparisons.detail.hero.create_profile"), " ", (0, a.jsx)("span", {
                      children: "→"
                    })]
                  }), (0, a.jsx)("a", {
                    className: p().secondaryButton,
                    href: "#comparison-table",
                    children: i("comparisons.detail.hero.compare_features")
                  })]
                })]
              }), (0, a.jsxs)("div", {
                className: p().snapshot,
                children: [(0, a.jsxs)("div", {
                  className: p().snapshotIntro,
                  children: [(0, a.jsx)("h2", {
                    children: i("comparisons.detail.pricing.title")
                  }), (0, a.jsx)("p", {
                    children: i("comparisons.detail.pricing.description")
                  })]
                }), (0, a.jsxs)("div", {
                  className: `${p().priceSnapshot} ${p().gunsSnapshot}`,
                  children: [(0, a.jsx)("div", {
                    className: p().priceCardHeader,
                    children: (0, a.jsx)(o.b, {
                      compact: !0
                    })
                  }), (0, a.jsx)("span", {
                    className: p().snapshotPrice,
                    children: (0, n.$g)(n.q9.premium)
                  }), (0, a.jsx)("span", {
                    children: i("comparisons.detail.pricing.one_time_payment")
                  }), (0, a.jsx)("span", {
                    className: p().priceNote,
                    children: i("comparisons.detail.pricing.free_profile")
                  })]
                }), (0, a.jsx)("span", {
                  className: p().snapshotVs,
                  children: i("comparisons.vs")
                }), (0, a.jsxs)("div", {
                  className: p().priceSnapshot,
                  style: {
                    "--competitor-accent": j.accent
                  },
                  children: [(0, a.jsx)("div", {
                    className: p().priceCardHeader,
                    children: (0, a.jsx)(o.M, {
                      comparison: j,
                      compact: !0
                    })
                  }), (0, a.jsx)("span", {
                    className: p().snapshotPrice,
                    children: j.competitorPrice
                  }), (0, a.jsx)("span", {
                    children: i("comparisons.detail.pricing.paid_plans")
                  }), (0, a.jsx)("span", {
                    className: p().priceNote,
                    children: j.competitorPriceNote
                  })]
                })]
              }), (0, a.jsxs)("div", {
                className: p().tableSection,
                id: "comparison-table",
                children: [(0, a.jsxs)("div", {
                  className: p().sectionHeading,
                  children: [(0, a.jsx)("h2", {
                    children: i("comparisons.detail.table.title")
                  }), (0, a.jsx)("p", {
                    children: i("comparisons.detail.table.description", {
                      name: j.name
                    })
                  })]
                }), (0, a.jsx)("div", {
                  className: p().tableWrap,
                  children: (0, a.jsxs)("table", {
                    className: p().comparisonTable,
                    children: [(0, a.jsx)("thead", {
                      children: (0, a.jsxs)("tr", {
                        children: [(0, a.jsx)("th", {
                          children: i("comparisons.detail.table.category")
                        }), (0, a.jsx)("th", {
                          children: (0, a.jsx)(o.b, {
                            compact: !0
                          })
                        }), (0, a.jsx)("th", {
                          children: (0, a.jsx)(o.M, {
                            comparison: j,
                            compact: !0
                          })
                        })]
                      })
                    }), (0, a.jsx)("tbody", {
                      children: j.rows.map(s => (0, a.jsxs)("tr", {
                        children: [(0, a.jsx)("th", {
                          scope: "row",
                          children: s.label
                        }), (0, a.jsxs)("td", {
                          children: [(0, a.jsx)("span", {
                            className: p().tableCheck,
                            children: "✓"
                          }), s.guns]
                        }), (0, a.jsxs)("td", {
                          children: [(0, a.jsx)("span", {
                            className: p().tableDot,
                            style: {
                              background: j.accent
                            }
                          }), s.competitor]
                        })]
                      }, s.label))
                    })]
                  })
                }), j.rows.some(s => s.note) && (0, a.jsx)("div", {
                  className: p().tableNotes,
                  children: j.rows.filter(s => s.note).map(s => (0, a.jsxs)("p", {
                    children: [(0, a.jsxs)("span", {
                      className: p().tableNoteLabel,
                      children: [s.label, ":"]
                    }), " ", s.note]
                  }, s.label))
                })]
              }), (0, a.jsxs)("div", {
                className: p().reasonsSection,
                children: [(0, a.jsxs)("div", {
                  className: p().reasonsLead,
                  children: [(0, a.jsx)("h2", {
                    children: i("comparisons.detail.reasons.title")
                  }), (0, a.jsx)("p", {
                    children: i("comparisons.detail.reasons.description")
                  }), (0, a.jsxs)(r.A, {
                    href: `/register?ref=compare_${j.slug}_reasons`,
                    children: [i("comparisons.detail.reasons.action"), " ", (0, a.jsx)("span", {
                      children: "→"
                    })]
                  })]
                }), (0, a.jsx)("div", {
                  className: p().reasonList,
                  children: j.gunsReasons.map(s => (0, a.jsxs)("div", {
                    className: p().reasonItem,
                    children: [(0, a.jsx)("span", {
                      children: "✓"
                    }), (0, a.jsxs)("div", {
                      children: [(0, a.jsx)("h3", {
                        children: s.title
                      }), (0, a.jsx)("p", {
                        children: s.description
                      })]
                    })]
                  }, s.title))
                })]
              }), (0, a.jsxs)("div", {
                className: p().decisionSection,
                children: [(0, a.jsxs)("div", {
                  className: p().sectionHeading,
                  children: [(0, a.jsx)("h2", {
                    children: i("comparisons.detail.decision.title")
                  }), (0, a.jsx)("p", {
                    children: i("comparisons.detail.decision.description")
                  })]
                }), (0, a.jsxs)("div", {
                  className: p().decisionGrid,
                  children: [(0, a.jsxs)("div", {
                    className: p().decisionCard,
                    children: [(0, a.jsx)(o.b, {
                      compact: !0
                    }), (0, a.jsx)("h3", {
                      children: i("comparisons.detail.decision.guns_title")
                    }), (0, a.jsx)("div", {
                      className: p().decisionList,
                      children: j.chooseGunsWhen.map(s => (0, a.jsx)("div", {
                        className: p().decisionItem,
                        children: s
                      }, s))
                    }), (0, a.jsxs)(r.A, {
                      href: "/register?ref=comparison_decision",
                      children: [i("comparisons.detail.decision.create_profile"), " ", (0, a.jsx)("span", {
                        children: "→"
                      })]
                    })]
                  }), (0, a.jsxs)("div", {
                    className: p().decisionCard,
                    style: {
                      "--competitor-accent": j.accent
                    },
                    children: [(0, a.jsx)(o.M, {
                      comparison: j,
                      compact: !0
                    }), (0, a.jsx)("h3", {
                      children: i("comparisons.detail.decision.competitor_title", {
                        name: j.name
                      })
                    }), (0, a.jsx)("div", {
                      className: p().decisionList,
                      children: j.chooseCompetitorWhen.map(s => (0, a.jsx)("div", {
                        className: p().decisionItem,
                        children: s
                      }, s))
                    }), (0, a.jsxs)("a", {
                      href: j.sources[0].url,
                      target: "_blank",
                      rel: "noreferrer nofollow",
                      children: [i("comparisons.detail.decision.visit_official_site"), " ", (0, a.jsx)("span", {
                        children: "↗"
                      })]
                    })]
                  })]
                })]
              }), (0, a.jsxs)("div", {
                className: p().moreComparisons,
                children: [(0, a.jsx)("h2", {
                  children: i("comparisons.detail.more.title")
                }), (0, a.jsx)("div", {
                  children: h.filter(({
                    slug: s
                  }) => s !== j.slug).map(s => (0, a.jsxs)(r.A, {
                    href: `/compare/${s.slug}`,
                    children: [(0, a.jsx)("span", {
                      children: i("comparisons.detail.more.item_prefix")
                    }), s.name, (0, a.jsx)("span", {
                      className: p().moreArrow,
                      children: "→"
                    })]
                  }, s.slug))
                })]
              }), (0, a.jsxs)("div", {
                className: p().comparisonMeta,
                children: [(0, a.jsxs)("div", {
                  className: p().sourceLinks,
                  children: [(0, a.jsx)("span", {
                    children: i("comparisons.detail.sources")
                  }), j.sources.map(s => (0, a.jsxs)("a", {
                    href: s.url,
                    target: "_blank",
                    rel: "noreferrer nofollow",
                    children: [s.label, " ↗"]
                  }, s.url))]
                }), (0, a.jsx)(d.A, {
                  comparisons: h
                })]
              })]
            })]
          })
        })
      }
    }
  },
  s => {
    s.O(0, [8604, 1899, 9255, 4236, 1407, 6609, 4293, 5810, 6891, 5886, 9182, 8481, 3434, 1378, 1382, 2817, 8441, 3794, 7358], () => s(s.s = 9641)), _N_E = s.O()
  }
]);