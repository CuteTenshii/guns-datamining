"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7504], {
    7504: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => b
      });
      var s = t(95155),
        r = t(73321),
        l = t(12115),
        i = t(66609),
        n = t(39866),
        d = t.n(n),
        m = t(91801),
        o = t.n(m),
        p = t(74364),
        c = t(45687),
        u = t(67421),
        h = t(98241),
        v = t.n(h),
        j = t(54834),
        x = t(61778),
        f = t(96351),
        _ = t(57776);
      let b = ({
        data: e
      }) => {
        var a;
        let t, n, m = (0, f.kj)(),
          h = (0, r.useRouter)(),
          b = e.userData,
          [A, g] = (0, l.useState)(!1),
          [N, y] = (0, l.useState)(e.userData.favorite_templates || []),
          [w, S] = (0, l.useState)({
            name: "",
            id: "",
            premiumOnly: !1,
            isUnlisted: !1,
            templatePreview: "",
            templateAuthor: {
              username: "",
              avatar: ""
            }
          }),
          [T, $] = (0, l.useState)(null),
          k = e.template?.is_unlisted;
        (0, l.useEffect)(() => {
          $(Math.floor(Date.now() / 1e3))
        }, []);
        let C = e.template;
        (0, l.useEffect)(() => {
          C?.error !== void 0 && h.replace("/templates")
        }, [C, h]);
        let O = async e => {
          let a = await fetch("https://guns.lol/api/dashboard/templates/favorite", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                templateId: e
              })
            }),
            t = await a.json();
          a.ok ? (i.oR.success(t.message), y(t.favorite_templates), "favorite" === t.type ? C.favorites += 1 : C.favorites -= 1) : i.oR.error(t.error)
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)("style", {
            children: `
                .${o().mainContent} {
                    box-sizing: border-box;
                }
            `
          }), (0, s.jsx)(i.l$, {
            richColors: !0,
            position: "top-center",
            theme: "dark",
            className: v().toasterStyles,
            icons: {
              success: j.A.successToast
            },
            visibleToasts: 2
          }), (0, s.jsx)(_.A, {
            opened: A,
            onClose: () => g(!1),
            size: w.premiumOnly && !b.premium ? "auto" : "500px",
            title: w.premiumOnly && !b.premium ? m("dashboard.templates.shared.modal.apply.premium_only_title") : m("dashboard.templates.shared.modal.apply.title"),
            centered: !0,
            children: (0, s.jsx)(u.A, {
              selectedTemplate: w,
              userDetails: b,
              closeModal: () => g(!1)
            })
          }), C?.error === void 0 && (0, s.jsxs)("div", {
            className: d().templateViewContainerWrapper,
            children: [(0, s.jsx)("div", {
              className: d().templateViewContainer,
              children: (0, s.jsx)("div", {
                className: d().templateContainer,
                children: (0, s.jsxs)("div", {
                  className: d().templateWrapper,
                  children: [(0, s.jsx)("img", {
                    className: d().templatePreview,
                    src: C.image,
                    draggable: "false"
                  }), (0, s.jsxs)("div", {
                    className: d().templateOverlay,
                    children: [C.premium_only && (0, s.jsx)(x.A, {
                      content: m("dashboard.templates.shared.tooltips.premium_only_badge"),
                      children: (0, s.jsxs)("span", {
                        className: d().premiumOnly,
                        children: [p.A.premium, " ", m("dashboard.templates.shared.badges.premium")]
                      })
                    }), C.is_unlisted && (0, s.jsx)(x.A, {
                      content: m("dashboard.templates.uploads.tooltips.unlisted"),
                      children: (0, s.jsxs)("span", {
                        className: d().unlistedTemplate,
                        children: [p.A.unlisted, " ", m("dashboard.templates.uploads.badges.unlisted")]
                      })
                    }), C.is_private && (0, s.jsx)(x.A, {
                      content: m("dashboard.templates.uploads.tooltips.private"),
                      children: (0, s.jsxs)("span", {
                        className: d().privateTemplate,
                        children: [p.A.private, " ", m("dashboard.templates.uploads.badges.private")]
                      })
                    }), !C.is_unlisted && !C.is_private && (0, s.jsx)(x.A, {
                      content: N.includes(C.id) ? m("dashboard.templates.shared.tooltips.unfavorite") : m("dashboard.templates.shared.tooltips.favorite"),
                      children: (0, s.jsx)("span", {
                        onClick: () => O(C.id),
                        className: d().favoriteTemplate,
                        children: N.includes(C.id) ? p.A.favoritedTemplate : p.A.favoriteTemplate
                      })
                    })]
                  }), (0, s.jsxs)("div", {
                    className: d().template,
                    children: [(0, s.jsxs)("div", {
                      className: d().templateInformation,
                      children: [(0, s.jsxs)("div", {
                        className: d().templateAuthor,
                        children: ["" !== C.user_information.avatar ? (0, s.jsx)("img", {
                          src: C.user_information.avatar,
                          alt: "User Avatar"
                        }) : p.A.defaultAvatar, (0, s.jsxs)("div", {
                          className: d().templateAuthorDescription,
                          children: [(0, s.jsx)("h1", {
                            children: C.name
                          }), (0, s.jsx)("a", {
                            href: `/${C.user_information.username}`,
                            target: "_blank",
                            children: (0, s.jsxs)("h3", {
                              children: ["@", C.user_information.username]
                            })
                          })]
                        })]
                      }), (0, s.jsxs)("div", {
                        className: d().templateSearchInformation,
                        children: [(0, s.jsxs)("div", {
                          className: d().templateStatistics,
                          children: [(0, s.jsxs)("div", {
                            className: d().templateStat,
                            children: [p.A.uses, " ", m("dashboard.templates.shared.stats.uses", {
                              count: C.times_used.toLocaleString("en-US")
                            })]
                          }), (0, s.jsx)("div", {
                            className: d().templateStat,
                            dangerouslySetInnerHTML: {
                              __html: (a = C, t = Math.floor(Date.now() / 1e3), n = Math.floor(a.timestamp), a.times_used > 100 ? `${(0,c.qV)(p.A.trendingTemplate)} ${m("dashboard.templates.shared.status.trending")}` : t - n < 259200 ? `${(0,c.qV)(p.A.newTemplate)} ${m("dashboard.templates.shared.status.new")}` : a.premium_only ? `${(0,c.qV)(p.A.premium)} ${m("dashboard.templates.shared.status.premium")}` : `${(0,c.qV)(p.A.free)} ${m("dashboard.templates.shared.status.free")}`)
                            }
                          }), (0, s.jsxs)("div", {
                            className: d().templateStat,
                            children: [p.A.favorite, " ", C.favorites.toLocaleString("en-US")]
                          })]
                        }), (0, s.jsx)("div", {
                          className: d().templateTags,
                          children: C.tags.map((e, a) => (0, s.jsx)("span", {
                            children: e
                          }, a))
                        })]
                      })]
                    }), (0, s.jsxs)("div", {
                      className: d().templateButtonWrapper,
                      children: [(0, s.jsx)("span", {
                        className: d().useTemplateButton,
                        onClick: () => {
                          var e, a, t, s, r;
                          return e = k ? C.unlisted_template_id : C.id, a = C.name, t = C.premium_only, s = C.image, r = C.user_information.username, void(S({
                            name: a,
                            id: e,
                            premiumOnly: t,
                            templatePreview: s,
                            templateAuthor: {
                              username: r,
                              avatar: C.user_information.avatar
                            },
                            isUnlisted: C.is_unlisted
                          }), g(!0))
                        },
                        children: "Use Template"
                      }), (0, s.jsx)(x.A, {
                        content: m("dashboard.templates.shared.tooltips.preview"),
                        children: (0, s.jsx)("a", {
                          target: "_blank",
                          href: `/${b.username}?templatePreview=true&templateId=${k?C.unlisted_template_id:C.id}&t=${T}${k?"&unlisted=true":""}`,
                          children: p.A.previewEye
                        })
                      })]
                    })]
                  })]
                }, C.id)
              })
            }), (0, s.jsxs)("a", {
              className: d().goBackButton,
              href: "/templates",
              children: [p.A.goBack, " ", m("dashboard.templates.view.go_back")]
            })]
          })]
        })
      }
    }
  }
]);