"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2337], {
    29483: (e, a, s) => {
      s.d(a, {
        A: () => l
      });
      var t = s(12115);
      let r = {
          leading: !1,
          trailing: !0
        },
        i = e => {
          e.current && (clearTimeout(e.current), e.current = null)
        };

      function l(e, a = 600, s = r) {
        let {
          leading: o = !1,
          trailing: d = !0,
          maxWait: n
        } = s, [c, h] = (0, t.useState)(e), p = (0, t.useRef)(null), u = (0, t.useRef)(null), b = (0, t.useRef)(!1), m = (0, t.useCallback)(() => {
          i(p), i(u), b.current = !1
        }, []), g = (0, t.useCallback)(() => {
          i(p), i(u), b.current = !1, h(e)
        }, [e]);
        return (0, t.useEffect)(() => (o && !b.current && (h(e), b.current = !0), i(p), d && (p.current = setTimeout(() => {
          h(e), b.current = !1
        }, a)), "number" == typeof n && (i(u), u.current = setTimeout(() => {
          h(e), b.current = !1, i(p)
        }, n)), () => {
          i(p), i(u)
        }), [e, a, o, d, n]), [c, {
          cancel: m,
          flush: g,
          setValue: h
        }]
      }
    },
    52337: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => v
      });
      var t = s(95155),
        r = s(12115),
        i = s(63212),
        l = s(66609),
        o = s(13510),
        d = s(99387),
        n = s(37897),
        c = s(13782),
        h = s(60141),
        p = s(29483),
        u = s(54834),
        b = s(86297),
        m = s(86891),
        g = s(98241),
        y = s.n(g),
        x = s(14697),
        j = s.n(x);

      function v() {
        let e = (0, m.kj)(),
          [a, s] = (0, r.useState)([]),
          [g, x] = (0, r.useState)(1),
          [v, f] = (0, r.useState)(1),
          [w, N] = (0, r.useState)(0),
          [_, A] = (0, r.useState)(""),
          [k] = (0, p.A)(_, 400),
          [S, C] = (0, r.useState)("all"),
          [I, L] = (0, r.useState)("updated_desc"),
          [M, R] = (0, r.useState)(!0),
          [T, O] = (0, r.useState)(!1),
          [E, D] = (0, r.useState)(""),
          [F, P] = (0, r.useState)(null),
          [B, $] = (0, r.useState)(() => Date.now()),
          q = (0, r.useRef)(null),
          G = (0, r.useRef)(0),
          V = (0, r.useCallback)(async (a, s = {}) => {
            let t = await fetch(`https://guns.lol${a}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(s)
              }),
              r = await t.json().catch(() => ({}));
            if (!t.ok) throw Error(r.error || e("dashboard.imagehost.pastes.common.request_failed"));
            return r
          }, [e]),
          z = (0, r.useCallback)(async () => {
            let e = ++G.current;
            R(!0);
            try {
              let a = await V("/api/dashboard/imagehost/pastes", {
                page: g,
                search: k || void 0,
                filter: S,
                sort: I
              });
              if (e !== G.current) return;
              let t = a.totalPages || 1;
              if (g > t) return void x(t);
              s(a.pastes || []), N(a.total || 0), f(t)
            } catch (a) {
              e === G.current && l.oR.error(a.message)
            } finally {
              e === G.current && R(!1)
            }
          }, [k, S, g, V, I]);
        (0, r.useEffect)(() => {
          z()
        }, [z]), (0, r.useEffect)(() => {
          let e = window.setInterval(() => $(Date.now()), 6e4);
          return () => window.clearInterval(e)
        }, []);
        let H = async () => {
          if (F && !T) {
            O(!0);
            try {
              await V("/api/dashboard/imagehost/pastes/delete", {
                pasteId: F.pasteId
              }), l.oR.success(e("dashboard.imagehost.pastes.library.delete.success")), D(""), P(null), await z()
            } catch (e) {
              l.oR.error(e.message)
            } finally {
              O(!1)
            }
          }
        }, J = e => {
          q.current?.getInstance().download({
            name: `guns-paste-${F?.slug}`,
            extension: e
          })
        }, Q = (e, a) => {
          P(a), D(e)
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)(l.l$, {
            richColors: !0,
            position: "top-center",
            theme: "dark",
            className: y().toasterStyles,
            icons: {
              success: u.A.successToast
            },
            visibleToasts: 2
          }), (0, t.jsxs)(c.A, {
            opened: !!E,
            onClose: () => !T && D(""),
            title: e("delete" === E ? "dashboard.imagehost.pastes.library.delete.title" : "dashboard.imagehost.pastes.library.share.title"),
            centered: !0,
            size: "share" === E ? "440px" : "400px",
            children: ["delete" === E && F && (0, t.jsxs)("div", {
              className: j().deleteModal,
              children: [(0, t.jsx)("p", {
                children: e("dashboard.imagehost.pastes.library.delete.confirmation", {
                  title: (0, t.jsx)("strong", {
                    children: F.title
                  })
                })
              }), (0, t.jsxs)("div", {
                className: j().deleteModalActions,
                children: [(0, t.jsx)("button", {
                  type: "button",
                  className: j().secondaryButton,
                  onClick: () => D(""),
                  children: e("dashboard.imagehost.pastes.library.delete.cancel")
                }), (0, t.jsx)("button", {
                  type: "button",
                  className: j().deleteButton,
                  disabled: T,
                  onClick: H,
                  children: e(T ? "dashboard.imagehost.pastes.library.delete.deleting" : "dashboard.imagehost.pastes.library.delete.button")
                })]
              })]
            }), "share" === E && F && (0, t.jsxs)("div", {
              className: j().shareModal,
              children: [(0, t.jsxs)("div", {
                className: j().shareLink,
                children: [(0, t.jsx)("span", {
                  children: F.url
                }), (0, t.jsx)(d.A, {
                  value: F.url,
                  children: ({
                    copied: a,
                    copy: s
                  }) => (0, t.jsx)("button", {
                    type: "button",
                    onClick: s,
                    children: e(a ? "dashboard.imagehost.pastes.library.share.copied" : "dashboard.imagehost.pastes.library.share.copy")
                  })
                })]
              }), (0, t.jsx)("div", {
                className: j().shareQrCode,
                children: (0, t.jsx)(i.g, {
                  data: F.url,
                  image: o.e,
                  imageOptions: {
                    margin: 10,
                    crossOrigin: "anonymous"
                  },
                  type: "svg",
                  height: 235,
                  width: 235,
                  backgroundOptions: {
                    color: "#00000000"
                  },
                  dotsOptions: {
                    color: "#fafafa",
                    type: "rounded"
                  },
                  cornersDotOptions: {
                    color: "#fafafa",
                    type: "dot"
                  },
                  cornersSquareOptions: {
                    color: "#734484",
                    type: "extra-rounded"
                  },
                  ref: q
                })
              }), (0, t.jsxs)("div", {
                className: j().shareActions,
                children: [(0, t.jsxs)("a", {
                  href: F.url,
                  target: "_blank",
                  rel: "noreferrer",
                  children: [b.A.externalLink, " ", e("dashboard.imagehost.pastes.library.share.open")]
                }), (0, t.jsxs)("button", {
                  type: "button",
                  onClick: () => J("png"),
                  children: [(0, t.jsx)("span", {
                    children: e("dashboard.imagehost.pastes.library.share.download_png")
                  }), (0, t.jsxs)("span", {
                    className: j().downloadFormat,
                    children: [".PNG ", b.A.download]
                  })]
                }), (0, t.jsxs)("button", {
                  type: "button",
                  onClick: () => J("svg"),
                  children: [(0, t.jsx)("span", {
                    children: e("dashboard.imagehost.pastes.library.share.download_svg")
                  }), (0, t.jsxs)("span", {
                    className: j().downloadFormat,
                    children: [".SVG ", b.A.download]
                  })]
                })]
              })]
            })]
          }), (0, t.jsxs)("div", {
            className: j().library,
            children: [(0, t.jsxs)("div", {
              className: j().pageHeader,
              children: [(0, t.jsxs)("div", {
                children: [(0, t.jsxs)("h1", {
                  children: [b.A.fileName, " ", e("dashboard.imagehost.pastes.library.title")]
                }), (0, t.jsx)("h3", {
                  children: e("dashboard.imagehost.pastes.library.description")
                })]
              }), (0, t.jsxs)("a", {
                className: j().primaryButton,
                href: "/imagehost/pastes/editor",
                children: [b.A.addSign, " ", e("dashboard.imagehost.pastes.library.new_paste")]
              })]
            }), (0, t.jsxs)("div", {
              className: j().libraryPanel,
              children: [(0, t.jsxs)("div", {
                className: j().libraryTop,
                children: [(0, t.jsxs)("div", {
                  children: [(0, t.jsx)("h2", {
                    children: e("dashboard.imagehost.pastes.library.your_pastes")
                  }), (0, t.jsx)("p", {
                    children: e(1 === w ? "dashboard.imagehost.pastes.library.paste_count_one" : "dashboard.imagehost.pastes.library.paste_count_many", {
                      count: w.toLocaleString()
                    })
                  })]
                }), (0, t.jsxs)("div", {
                  className: j().filters,
                  children: [(0, t.jsx)(n.A, {
                    icon: b.A.search,
                    iconInside: !0,
                    value: _,
                    onChangeFunction: e => {
                      A(e.target.value), x(1)
                    },
                    placeholder: e("dashboard.imagehost.pastes.library.search_placeholder"),
                    maxLength: 100
                  }), (0, t.jsx)(h.A, {
                    value: S,
                    onChangeFunction: e => {
                      C(e), x(1)
                    },
                    icon: b.A.visibility,
                    data: [{
                      value: "all",
                      label: e("dashboard.imagehost.pastes.library.filters.all")
                    }, {
                      value: "protected",
                      label: e("dashboard.imagehost.pastes.library.filters.protected")
                    }, {
                      value: "unprotected",
                      label: e("dashboard.imagehost.pastes.library.filters.unprotected")
                    }, {
                      value: "markdown",
                      label: e("dashboard.imagehost.pastes.library.filters.markdown")
                    }, {
                      value: "expiring",
                      label: e("dashboard.imagehost.pastes.library.filters.expiring")
                    }]
                  }), (0, t.jsx)(h.A, {
                    value: I,
                    onChangeFunction: e => {
                      L(e), x(1)
                    },
                    icon: b.A.sortBy,
                    data: [{
                      value: "updated_desc",
                      label: e("dashboard.imagehost.pastes.library.sort.recently_updated")
                    }, {
                      value: "updated_asc",
                      label: e("dashboard.imagehost.pastes.library.sort.oldest_updated")
                    }, {
                      value: "views_desc",
                      label: e("dashboard.imagehost.pastes.library.sort.most_viewed")
                    }, {
                      value: "title_asc",
                      label: e("dashboard.imagehost.pastes.library.sort.title_asc")
                    }]
                  })]
                })]
              }), (0, t.jsxs)("div", {
                className: j().pasteList,
                children: [M && (0, t.jsx)("div", {
                  className: j().loadingState,
                  children: b.A.loading
                }), !M && 0 === a.length && (0, t.jsxs)("div", {
                  className: j().emptyState,
                  children: [b.A.fileName, (0, t.jsx)("h2", {
                    children: e(_ || "all" !== S ? "dashboard.imagehost.pastes.library.empty.matching_title" : "dashboard.imagehost.pastes.library.empty.title")
                  }), (0, t.jsx)("p", {
                    children: e(_ || "all" !== S ? "dashboard.imagehost.pastes.library.empty.matching_description" : "dashboard.imagehost.pastes.library.empty.description")
                  })]
                }), !M && a.map(a => {
                  var s;
                  let r, i, l, o;
                  return (0, t.jsxs)("div", {
                    className: j().pasteRow,
                    children: [(0, t.jsx)("div", {
                      className: j().pasteIdentity,
                      children: (0, t.jsxs)("div", {
                        className: j().pasteMain,
                        children: [(0, t.jsxs)("div", {
                          className: j().pasteTitleLine,
                          children: [(0, t.jsx)("h2", {
                            children: a.title
                          }), a.passwordProtected && (0, t.jsx)("span", {
                            title: e("dashboard.imagehost.pastes.common.password_protected"),
                            children: u.A.password
                          })]
                        }), (0, t.jsxs)("a", {
                          className: j().pasteUrl,
                          href: a.url,
                          target: "_blank",
                          rel: "noreferrer",
                          children: [a.domain, "/", a.slug]
                        }), (0, t.jsxs)("div", {
                          className: j().pasteMeta,
                          children: [(0, t.jsxs)("span", {
                            children: [u.A.views, " ", e("dashboard.imagehost.pastes.library.meta.views", {
                              count: a.views.toLocaleString()
                            })]
                          }), (0, t.jsx)("span", {
                            children: e("dashboard.imagehost.pastes.library.meta.updated", {
                              date: new Date(1e3 * a.updatedAt).toLocaleDateString()
                            })
                          }), (0, t.jsx)("span", {
                            children: a.expiresAt ? e("dashboard.imagehost.pastes.library.meta.expires_in", {
                              time: (s = a.expiresAt, i = Math.floor((r = Math.max(1, Math.ceil((1e3 * s - B) / 6e4))) / 1440), l = Math.floor(r % 1440 / 60), o = r % 60, [i && e("dashboard.imagehost.pastes.common.duration.days_short", {
                                count: i
                              }), l && e("dashboard.imagehost.pastes.common.duration.hours_short", {
                                count: l
                              }), o && e("dashboard.imagehost.pastes.common.duration.minutes_short", {
                                count: o
                              })].filter(Boolean).join(" "))
                            }) : e("dashboard.imagehost.pastes.library.meta.no_expiration")
                          })]
                        })]
                      })
                    }), (0, t.jsxs)("div", {
                      className: j().rowActions,
                      children: [(0, t.jsx)("a", {
                        className: j().rowEdit,
                        title: e("dashboard.imagehost.pastes.library.actions.edit"),
                        href: `/imagehost/pastes/editor?id=${a.pasteId}`,
                        children: b.A.editPaste
                      }), (0, t.jsx)(d.A, {
                        value: a.url,
                        children: ({
                          copied: a,
                          copy: s
                        }) => (0, t.jsx)("button", {
                          type: "button",
                          title: e("dashboard.imagehost.pastes.library.actions.copy_link"),
                          onClick: s,
                          children: a ? u.A.success : u.A.copy
                        })
                      }), (0, t.jsx)("button", {
                        type: "button",
                        title: e("dashboard.imagehost.pastes.library.actions.share"),
                        onClick: () => Q("share", a),
                        children: b.A.link
                      }), (0, t.jsx)("a", {
                        title: e("dashboard.imagehost.pastes.library.actions.open"),
                        href: a.url,
                        target: "_blank",
                        rel: "noreferrer",
                        children: b.A.externalLink
                      }), (0, t.jsx)("button", {
                        type: "button",
                        className: j().rowDelete,
                        title: e("dashboard.imagehost.pastes.library.actions.delete"),
                        onClick: () => Q("delete", a),
                        children: b.A.deleteImage
                      })]
                    })]
                  }, a.pasteId)
                })]
              }), v > 1 && (0, t.jsxs)("div", {
                className: j().pagination,
                children: [(0, t.jsx)("button", {
                  type: "button",
                  disabled: 1 === g,
                  onClick: () => x(e => e - 1),
                  children: e("dashboard.imagehost.pastes.library.pagination.previous")
                }), (0, t.jsx)("span", {
                  children: e("dashboard.imagehost.pastes.library.pagination.page", {
                    page: g,
                    total: v
                  })
                }), (0, t.jsx)("button", {
                  type: "button",
                  disabled: g === v,
                  onClick: () => x(e => e + 1),
                  children: e("dashboard.imagehost.pastes.library.pagination.next")
                })]
              })]
            })]
          })]
        })
      }
    }
  }
]);