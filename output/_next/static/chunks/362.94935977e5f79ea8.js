"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [362], {
    60362: (a, e, s) => {
      s.r(e), s.d(e, {
        default: () => x
      });
      var i = s(95155),
        d = s(12115),
        r = s(56891),
        o = s.n(r),
        t = s(86297),
        l = s(66609),
        h = s(98241),
        n = s.n(h),
        c = s(54834),
        m = s(37206),
        g = s(96351),
        p = s(57776),
        u = s(12521);
      let j = (0, m.default)(() => Promise.all([s.e(7776), s.e(6986)]).then(s.bind(s, 36986)), {
        loadableGenerated: {
          webpack: () => [36986]
        },
        ssr: !1
      });

      function x({
        data: a
      }) {
        let e = (0, g.kj)(),
          s = a.config,
          [r, h] = (0, d.useState)({
            totalUploads: 0,
            uploadsToday: 0,
            leaderboardRank: 0,
            storageUsedFormatted: "0MB",
            storageUsed: 0,
            storageLimit: 0,
            storageLeftFormatted: "0MB",
            config: {
              domain: ""
            }
          }),
          m = r.totalUploads || 0,
          x = r.leaderboardRank || "N/A",
          v = r.storageUsedFormatted || "0MB",
          b = r.storageUsed || 0,
          N = r.storageLimit || 0,
          f = r.storageLeftFormatted || "0MB",
          k = N ? Math.min(b / N * 100, 100).toFixed(0) : 0,
          y = r.config?.domain,
          [w, _] = (0, d.useState)(!1),
          [C, U] = (0, d.useState)([]),
          [A, T] = (0, d.useState)(!1),
          [B, S] = (0, d.useState)({}),
          F = async () => {
            let a = await fetch("/api/dashboard/imagehost/data?latestDomain=true", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                }
              }),
              e = await a.json();
            a.ok ? h(e) : l.oR.error(e.error)
          }, R = async () => {
            let a = await fetch("/api/dashboard/imagehost/dailyUploads", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                }
              }),
              e = await a.json();
            a.ok ? U(e.dailyUploads) : l.oR.error(e.error)
          };
        (0, d.useEffect)(() => {
          F(), R()
        }, []);
        let L = async a => {
          let s = a.target.files?.[0];
          if (!s) return;
          if (w) return void l.oR.error(e("dashboard.imagehost.upload.in_progress"));
          _(!0), a.target.disabled = !0;
          let i = new FormData;
          i.append("file", s);
          let d = await fetch("/api/dashboard/imagehost/upload", {
              method: "POST",
              body: i
            }),
            r = await d.json();
          d.ok ? (S(r), T(!0), l.oR.success(e("dashboard.imagehost.upload.success"))) : l.oR.error(r.error), _(!1), a.target.value = "", a.target.disabled = !1
        }, $ = /^(mp4|mov|avi|m4v|webm|mkv)$/i.test(B?.extension || "");
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(p.A, {
            opened: A,
            onClose: () => T(!1),
            title: e("dashboard.imagehost.modal.title"),
            centered: !0,
            size: "450px",
            children: (0, i.jsxs)("div", {
              className: o().uploadResultContainer,
              children: [(0, i.jsxs)("div", {
                className: o().uploadPreview,
                children: [$ ? (0, i.jsx)("video", {
                  src: B?.url,
                  controls: !0
                }) : (0, i.jsx)("img", {
                  src: B?.url,
                  alt: B?.file_name
                }), (0, i.jsxs)("div", {
                  className: o().uploadFileInfo,
                  children: [(0, i.jsx)("h1", {
                    children: B?.file_name
                  }), (0, i.jsxs)("h3", {
                    children: [new Date(1e3 * B?.upload_date).toLocaleString("en-US", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit"
                    }), " •", " ", ((B?.file_size ?? 0) / 1048576).toFixed(2), " MB"]
                  })]
                })]
              }), (0, i.jsxs)("div", {
                className: o().uploadActions,
                children: [(0, i.jsxs)("a", {
                  href: `https://${y}/${B?.key}`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: `${o().uploadButton} ${o().primary}`,
                  children: [t.A.open, " ", e("dashboard.imagehost.modal.open_url")]
                }), (0, i.jsxs)("span", {
                  className: o().uploadButton,
                  onClick: () => {
                    navigator.clipboard.writeText(`https://${y}/${B?.key}`), l.oR.success(e("dashboard.imagehost.modal.copy_success"))
                  },
                  children: [t.A.link, " ", e("dashboard.imagehost.modal.copy_link")]
                }), (0, i.jsxs)("a", {
                  href: "/imagehost/gallery",
                  className: o().uploadButton,
                  children: [t.A.imageGallery, " ", e("dashboard.imagehost.modal.gallery")]
                })]
              })]
            })
          }), (0, i.jsx)(l.l$, {
            richColors: !0,
            position: "top-center",
            theme: "dark",
            className: n().toasterStyles,
            icons: {
              success: c.A.successToast
            },
            visibleToasts: 2
          }), (0, i.jsxs)("div", {
            className: o().imagehostContainer,
            children: [(0, i.jsxs)("div", {
              className: o().imagehostCardsWrapper,
              children: [(0, i.jsx)("h1", {
                className: o().imagehostTitle,
                children: e("dashboard.imagehost.overview.title")
              }), (0, i.jsxs)("div", {
                className: o().imagehostCards,
                children: [(0, i.jsxs)("div", {
                  className: o().imagehostCard,
                  children: [(0, i.jsxs)("div", {
                    className: o().cardTop,
                    children: [(0, i.jsx)("h1", {
                      children: e("dashboard.imagehost.overview.cards.total_uploads")
                    }), t.A.totalUploads]
                  }), (0, i.jsxs)("div", {
                    className: o().cardBottom,
                    children: [(0, i.jsx)("h1", {
                      children: m
                    }), (0, i.jsx)("h3", {
                      children: e("dashboard.imagehost.overview.cards.rank", {
                        rank: x
                      })
                    })]
                  })]
                }), (0, i.jsxs)("div", {
                  className: o().imagehostCard,
                  children: [(0, i.jsxs)("div", {
                    className: o().cardTop,
                    children: [(0, i.jsx)("h1", {
                      children: e("dashboard.imagehost.overview.cards.domain_title")
                    }), t.A.link]
                  }), (0, i.jsxs)("div", {
                    className: o().cardBottom,
                    children: [(0, i.jsx)("h1", {
                      children: y
                    }), (0, i.jsx)("h3", {
                      children: e("dashboard.imagehost.overview.cards.domain_description")
                    })]
                  })]
                }), (0, i.jsxs)("div", {
                  className: o().imagehostCard,
                  children: [(0, i.jsxs)("div", {
                    className: o().cardTop,
                    children: [(0, i.jsx)("h1", {
                      children: e("dashboard.imagehost.overview.cards.storage_title")
                    }), t.A.storageUsed]
                  }), (0, i.jsxs)("div", {
                    className: o().cardBottom,
                    children: [(0, i.jsxs)("h1", {
                      children: [v, " (", k, "%)"]
                    }), (0, i.jsx)("h3", {
                      children: e("dashboard.imagehost.overview.cards.storage_left", {
                        amount: f
                      })
                    })]
                  })]
                }), (0, i.jsxs)("div", {
                  className: o().imagehostCard,
                  children: [(0, i.jsxs)("div", {
                    className: o().cardTop,
                    children: [(0, i.jsx)("h1", {
                      children: e("dashboard.imagehost.overview.cards.premium_title")
                    }), t.A.premiumPerks]
                  }), (0, i.jsxs)("div", {
                    className: o().cardBottom,
                    children: [(0, i.jsx)("h1", {
                      style: {
                        display: "flex"
                      },
                      children: s.premium ? (0, i.jsx)("span", {
                        className: o().perksActivated,
                        children: e("dashboard.imagehost.overview.cards.premium_active")
                      }) : (0, i.jsx)("span", {
                        className: o().perksDisabled,
                        children: e("dashboard.imagehost.overview.cards.premium_inactive")
                      })
                    }), (0, i.jsx)("h3", {
                      children: s.premium ? e("dashboard.imagehost.overview.cards.premium_description_active") : e("dashboard.imagehost.overview.cards.premium_description_inactive")
                    })]
                  })]
                })]
              })]
            }), (0, i.jsxs)("div", {
              className: o().imagehostUsageWrapper,
              children: [(0, i.jsx)("h1", {
                className: o().imagehostUsageTitle,
                children: e("dashboard.imagehost.usage.title")
              }), (0, i.jsxs)("div", {
                className: o().imagehostChartsWrapper,
                children: [(0, i.jsxs)("div", {
                  className: o().imagehostLinksWrapper,
                  children: [(0, i.jsx)("h1", {
                    className: o().imagehostLinksTitle,
                    children: e("dashboard.imagehost.usage.manage.title")
                  }), (0, i.jsx)("h3", {
                    children: e("dashboard.imagehost.usage.manage.description")
                  }), (0, i.jsxs)("div", {
                    className: o().imagehostLinks,
                    children: [(0, i.jsxs)("a", {
                      href: "/imagehost/gallery",
                      children: [t.A.imageGallery, " ", e("dashboard.imagehost.usage.manage.links.gallery")]
                    }), (0, i.jsxs)("a", {
                      href: "/imagehost/domains",
                      children: [t.A.link, " ", e("dashboard.imagehost.usage.manage.links.domains")]
                    }), (0, i.jsxs)("a", {
                      href: "/imagehost/setup",
                      children: [t.A.setupIcon, " ", e("dashboard.imagehost.usage.manage.links.setup")]
                    }), (0, i.jsxs)("a", {
                      href: "/imagehost/settings",
                      children: [t.A.settings, " ", e("dashboard.imagehost.usage.manage.links.settings")]
                    }), (0, i.jsxs)("div", {
                      className: o().fileUploadBox,
                      children: [(0, i.jsx)("h1", {
                        className: o().fileUploadTitle,
                        children: e("dashboard.imagehost.upload.title")
                      }), (0, i.jsxs)("div", {
                        className: o().fileUploadContainer,
                        children: [(0, i.jsx)("input", {
                          type: "file",
                          className: o().fileUploadInput,
                          accept: u.vJ.imagehostUpload.map(a => a).join(", "),
                          onChange: L
                        }), w ? (0, i.jsxs)("h1", {
                          children: [t.A.loading, " ", e("dashboard.imagehost.upload.loading")]
                        }) : (0, i.jsxs)("h1", {
                          children: [t.A.image, " ", e("dashboard.imagehost.upload.prompt")]
                        })]
                      })]
                    })]
                  })]
                }), (0, i.jsxs)("div", {
                  className: o().dailyUploadsChartWrapper,
                  children: [(0, i.jsxs)("div", {
                    className: o().dailyUploadsChartHeader,
                    children: [(0, i.jsxs)("h1", {
                      children: [e("dashboard.imagehost.usage.chart.title"), " ", (0, i.jsx)("span", {
                        children: e("dashboard.imagehost.usage.chart.range")
                      })]
                    }), (0, i.jsx)("h3", {
                      children: e("dashboard.imagehost.usage.chart.subtitle")
                    })]
                  }), (0, i.jsx)(j, {
                    dailyData: C
                  })]
                })]
              })]
            })]
          })]
        })
      }
    }
  }
]);