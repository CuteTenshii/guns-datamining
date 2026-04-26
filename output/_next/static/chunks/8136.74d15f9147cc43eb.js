(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8136], {
    7092: e => {
      e.exports = {
        container: "GUNS__a3-24c433d6-378c65c5-2a8e726a",
        label: "GUNS__4f-eeffaf02-c3f457dc-e1ef8e24",
        shell: "GUNS__3b-14d46023-9e79b44b-159c4ff0",
        iconSlot: "GUNS__d3-c21cfd38-430b0eff-b94dc041",
        trigger: "GUNS__5d-ca15789f-fd0ac2bd-19e39093",
        triggerWithIcon: "GUNS__65-05a6d251-5f226ec3-05f5c4ce",
        value: "GUNS__07-9e3274c0-c9b7af62-a0bf4c90",
        placeholder: "GUNS__48-aee4e72d-4ec1dc72-c8ce0788",
        chevrons: "GUNS__bf-591b5384-98753a6b-866fb128",
        dropdown: "GUNS__07-c3fa643a-8fe967b1-59b4fc78",
        optionList: "GUNS__38-ea4b0fb7-4d271638-45d22497",
        option: "GUNS__58-75b6f7ee-8f90fb52-c8d87b43",
        emptyState: "GUNS__a1-5fe1652b-2b03f8ad-cf811adc"
      }
    },
    29483: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var s = t(12115);
      let r = {
          leading: !1,
          trailing: !0
        },
        l = e => {
          e.current && (clearTimeout(e.current), e.current = null)
        };

      function i(e, a = 600, t = r) {
        let {
          leading: n = !1,
          trailing: d = !0,
          maxWait: o
        } = t, [m, p] = (0, s.useState)(e), c = (0, s.useRef)(null), h = (0, s.useRef)(null), u = (0, s.useRef)(!1), v = (0, s.useCallback)(() => {
          l(c), l(h), u.current = !1
        }, []), g = (0, s.useCallback)(() => {
          l(c), l(h), u.current = !1, p(e)
        }, [e]);
        return (0, s.useEffect)(() => (n && !u.current && (p(e), u.current = !0), l(c), d && (c.current = setTimeout(() => {
          p(e), u.current = !1
        }, a)), "number" == typeof o && (l(h), h.current = setTimeout(() => {
          p(e), u.current = !1, l(c)
        }, o)), () => {
          l(c), l(h)
        }), [e, a, n, d, o]), [m, {
          cancel: v,
          flush: g,
          setValue: p
        }]
      }
    },
    57157: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(95155),
        r = t(98241),
        l = t.n(r),
        i = t(54834),
        n = t(81576);

      function d({
        featureName: e,
        helpDescription: a,
        element: t,
        id: r
      }) {
        return (0, s.jsxs)("div", {
          className: l().featureName,
          children: [(0, s.jsxs)("h1", {
            className: l().featureNameText,
            style: {
              marginBottom: "6px"
            },
            children: [e, (0, s.jsxs)(n.Ay, {
              width: "370px",
              position: "top",
              id: r,
              children: [(0, s.jsx)(n.Ay.Target, {
                children: i.A.help
              }), (0, s.jsx)(n.Ay.Dropdown, {
                children: (0, s.jsx)("div", {
                  className: l().helpDescription,
                  children: a.split("\n").map((e, a) => (0, s.jsxs)("span", {
                    children: [e, (0, s.jsx)("br", {})]
                  }, a))
                })
              })]
            })]
          }), t]
        })
      }
    },
    60141: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(95155),
        r = t(29722),
        l = t(12115),
        i = t(47650),
        n = t(7092),
        d = t.n(n);

      function o({
        featureName: e,
        icon: a,
        placeholder: t,
        data: n,
        value: o,
        defaultValue: m = null,
        onChangeFunction: p,
        dropdownMaxHeight: c = 240,
        dropdownClassName: h,
        className: u,
        disabled: v,
        name: g,
        required: f,
        id: b,
        onFocus: x,
        onBlur: j,
        onKeyDown: y,
        ..._
      }) {
        let N = (0, l.useMemo)(() => Array.isArray(n) ? n.map(e => "string" == typeof e ? {
            value: e,
            label: e
          } : e?.value === void 0 || e?.value === null ? null : {
            value: e.value,
            label: e.label ?? e.value,
            disabled: e.disabled ?? !1
          }).filter(e => !!e) : [], [n]),
          A = void 0 !== o,
          [T, w] = (0, l.useState)(m ?? null),
          [S, C] = (0, l.useState)(!1),
          [k, $] = (0, l.useState)(!1),
          [R, O] = (0, l.useState)(-1),
          q = (0, l.useRef)(null),
          I = (0, l.useRef)(null),
          F = (0, l.useRef)(null),
          L = (0, l.useRef)(null),
          [B, M] = (0, l.useState)(null),
          [D, E] = (0, l.useState)(!1),
          U = (0, l.useId)(),
          W = b ?? U,
          P = `${W}-dropdown`,
          V = (0, l.useCallback)(() => {
            let e = I.current;
            if (!e) return;
            let a = e.getBoundingClientRect();
            M({
              left: a.left,
              top: a.bottom + 9,
              width: a.width
            })
          }, []);
        (0, l.useEffect)(() => {
          A || w(m ?? null)
        }, [m, A]), (0, l.useEffect)(() => {
          E(!0)
        }, []);
        let z = A ? o ?? null : T,
          H = null == z ? "" : String(z),
          G = N.find(e => e.value === z) ?? null,
          J = !!G || null != z && "" != `${z}`;
        (0, l.useEffect)(() => {
          S ? O(G && !G.disabled ? N.findIndex(e => e.value === G.value) : N.findIndex(e => !e.disabled)) : O(-1)
        }, [S, N, G]), (0, l.useEffect)(() => {
          if (S) return V(), window.addEventListener("resize", V), window.addEventListener("scroll", V, !0), () => {
            window.removeEventListener("resize", V), window.removeEventListener("scroll", V, !0)
          }
        }, [S, V]), (0, l.useEffect)(() => {
          if (!S) return;
          let e = e => {
            let a = e.target,
              t = q.current?.contains(a),
              s = L.current?.contains(a);
            t || s || C(!1)
          };
          return document.addEventListener("mousedown", e), document.addEventListener("touchstart", e), () => {
            document.removeEventListener("mousedown", e), document.removeEventListener("touchstart", e)
          }
        }, [S]), (0, l.useEffect)(() => {
          if (!S || R < 0) return;
          let e = F.current,
            a = e?.children[R];
          if (e && a) {
            let t = a.offsetTop,
              s = t + a.offsetHeight,
              r = e.scrollTop,
              l = r + e.clientHeight;
            t < r ? e.scrollTop = t : s > l && (e.scrollTop = s - e.clientHeight)
          }
        }, [R, S]);
        let Z = e => {
            let a = N[e];
            if (a && !a.disabled) {
              var t;
              t = a.value, A || w(t), p?.(t), C(!1)
            }
          },
          K = e => {
            if (!N.length || !N.some(e => !e.disabled)) return;
            let a = R;
            for (let t = 0; t < N.length; t += 1)
              if (a = (a + e + N.length) % N.length, !N[a].disabled) {
                O(a);
                break
              }
          },
          Q = G?.label ?? (J ? String(z ?? "") : t),
          X = (0, s.jsx)("div", {
            ref: L,
            className: (0, r.A)(d().dropdown, h),
            "data-open": S,
            id: P,
            style: {
              position: "fixed",
              width: B?.width,
              left: B?.left,
              top: B?.top
            },
            children: N.length > 0 ? (0, s.jsx)("ul", {
              ref: F,
              className: d().optionList,
              style: {
                maxHeight: c
              },
              children: N.map((e, a) => {
                let t = `${P}-option-${a}`,
                  r = a === R,
                  l = e.value === z;
                return (0, s.jsx)("li", {
                  id: t,
                  "data-highlighted": r,
                  "data-selected": l,
                  "data-disabled": e.disabled,
                  className: d().option,
                  onMouseDown: e => e.preventDefault(),
                  onMouseEnter: () => {
                    e.disabled || O(a)
                  },
                  onClick: () => Z(a),
                  children: (0, s.jsx)("span", {
                    children: e.label
                  })
                }, `${e.value}-${a}`)
              })
            }) : (0, s.jsx)("div", {
              className: d().emptyState,
              children: "No options available"
            })
          }),
          Y = D && "undefined" != typeof document ? (0, i.createPortal)(X, document.body) : null;
        return (0, s.jsxs)("div", {
          className: d().container,
          ref: q,
          children: [e && (0, s.jsx)("div", {
            className: d().label,
            children: e
          }), g && (0, s.jsx)("input", {
            type: "hidden",
            name: g,
            value: H,
            required: f
          }), (0, s.jsxs)("div", {
            className: (0, r.A)(d().shell, u),
            "data-open": S,
            "data-focused": k,
            "data-disabled": v,
            ref: I,
            children: [a && (0, s.jsx)("span", {
              className: d().iconSlot,
              children: a
            }), (0, s.jsx)("button", {
              ..._,
              id: W,
              type: "button",
              className: (0, r.A)(d().trigger, a ? d().triggerWithIcon : void 0),
              onFocus: e => {
                $(!0), x?.(e)
              },
              onBlur: e => {
                let a = e.relatedTarget;
                a && q.current?.contains(a) || ($(!1), C(!1)), j?.(e)
              },
              onClick: () => {
                v || C(e => {
                  let a = !e;
                  return !e && a && V(), a
                })
              },
              onKeyDown: e => {
                v || ("ArrowDown" === e.key ? (e.preventDefault(), S ? K(1) : (V(), C(!0))) : "ArrowUp" === e.key ? (e.preventDefault(), S ? K(-1) : (V(), C(!0))) : "Enter" === e.key || " " === e.key ? (e.preventDefault(), S ? R >= 0 && Z(R) : (V(), C(!0))) : "Escape" === e.key ? S && (e.preventDefault(), C(!1)) : "Tab" === e.key && C(!1)), y?.(e)
              },
              disabled: v,
              children: (0, s.jsx)("span", {
                className: (0, r.A)(d().value, !J && d().placeholder),
                children: Q || t || "Select an option"
              })
            }), (0, s.jsxs)("span", {
              className: d().chevrons,
              children: [(0, s.jsx)("span", {
                children: "▲"
              }), (0, s.jsx)("span", {
                children: "▼"
              })]
            })]
          }), Y]
        })
      }
    },
    78136: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => $
      });
      var s = t(95155),
        r = t(12115),
        l = t(39866),
        i = t.n(l),
        n = t(98241),
        d = t.n(n),
        o = t(54834),
        m = t(74364),
        p = t(60141),
        c = t(66609),
        h = t(45687),
        u = t(67421),
        v = t(37897),
        g = t(98500),
        f = t.n(g),
        b = t(61778),
        x = t(96351),
        j = t(57776),
        y = t(99387),
        _ = t(29483);

      function N({
        userDetails: e
      }) {
        let a = (0, x.kj)(),
          [t, l] = (0, r.useState)(""),
          [n, d] = (0, r.useState)("trending"),
          [o, g] = (0, r.useState)(null),
          [N, A] = (0, r.useState)(1),
          [T, w] = (0, r.useState)(!0),
          [S, C] = (0, r.useState)({
            search: "",
            sort: "",
            templateAuthor: ""
          }),
          [k, $] = (0, r.useState)(!1),
          [R, O] = (0, r.useState)(!1),
          [q, I] = (0, r.useState)(""),
          [F, L] = (0, r.useState)(""),
          [B, M] = (0, r.useState)(null),
          D = e.username,
          E = new Date().getTime(),
          [U, W] = (0, r.useState)(e.favorite_templates || []),
          [P, V] = (0, r.useState)(!0),
          z = {
            name: "",
            id: "",
            premiumOnly: !1,
            templatePreview: "",
            templateAuthor: {
              username: "",
              avatar: ""
            }
          },
          [H, G] = (0, r.useState)(z),
          [J] = (0, _.A)(t, 600);
        (0, r.useEffect)(() => {
          k && J !== S.search && Q(void 0, J)
        }, [k, J, S.search]);
        let Z = (0, r.useMemo)(() => "applyTemplate" === q ? H.premiumOnly && !e.premium ? a("dashboard.templates.shared.modal.apply.premium_only_title") : a("dashboard.templates.shared.modal.apply.title") : "authorFilter" === q ? a("dashboard.templates.library.modal.author_filter.title") : a("dashboard.templates.shared.modal.apply.title"), [q, H.premiumOnly, e.premium, a]),
          K = (0, r.useMemo)(() => [{
            label: a("dashboard.templates.library.sort.options.newest"),
            value: "newest"
          }, {
            label: a("dashboard.templates.library.sort.options.trending"),
            value: "trending"
          }, {
            label: a("dashboard.templates.library.sort.options.oldest"),
            value: "oldest"
          }, {
            label: a("dashboard.templates.library.sort.options.free"),
            value: "free"
          }, {
            label: a("dashboard.templates.library.sort.options.premium"),
            value: "premium"
          }], [a]),
          Q = async (e, a) => {
            let s = "string" == typeof e ? e : n,
              r = "string" == typeof a ? a : t;
            if (r === S.search && s === S.sort && (B?.username || "") === S.templateAuthor) return;
            w(!0), A(1);
            let l = await fetch("https://guns.lol/api/dashboard/templates/library", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  page: 1,
                  sort: s,
                  search: r,
                  templateAuthor: B?.username
                })
              }),
              i = await l.json();
            l.ok ? (V(!(i.templates.length < 10)), g(i.templates)) : c.oR.error(i.error), setTimeout(() => {
              w(!1)
            }, 500), C({
              search: r,
              sort: s,
              templateAuthor: B?.username || ""
            })
          }, X = async e => {
            e.target.style.pointerEvents = "none", e.target.innerHTML = (0, h.qV)(m.A.loading);
            try {
              let e = await fetch("https://guns.lol/api/dashboard/templates/library?type=scroll_loading", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    page: N + 1,
                    sort: n,
                    search: t,
                    templateAuthor: B?.username
                  })
                }),
                a = await e.json();
              e.ok ? (g(e => [...e, ...a.templates]), V(a.hasMore), A(e => e + 1)) : c.oR.error(a.error)
            } finally {
              e.target.style.pointerEvents = "auto", e.target.innerHTML = `${(0,h.qV)(m.A.loadMore)} ${a("dashboard.templates.shared.actions.load_more")}`
            }
          };
        (0, r.useEffect)(() => {
          k || e();
          async function e() {
            let e = await fetch("https://guns.lol/api/dashboard/templates/library", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  page: 1,
                  sort: n,
                  search: t
                })
              }),
              a = await e.json();
            e.ok ? (V(!(a.templates.length < 10)), g(a.templates)) : c.oR.error(a.error), w(!1), $(!0)
          }
        }, [n, t, o]);
        let Y = async e => {
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
          a.ok ? (c.oR.success(t.message), W(t.favorite_templates), "favorite" === t.type ? o?.filter(a => {
            a.id === e && (a.favorites += 1)
          }) : o?.filter(a => {
            a.id === e && a.favorites > 0 && (a.favorites -= 1)
          })) : c.oR.error(t.error)
        }, ee = async () => {
          if ("" === F) return void c.oR.error(a("dashboard.templates.library.modal.author_filter.errors.username_required"));
          let e = await fetch("https://guns.lol/api/dashboard/templates/templateAuthor", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                username: F
              })
            }),
            t = await e.json();
          e.ok ? M({
            username: t.username,
            avatar: t.avatar,
            displayName: t.display_name
          }) : c.oR.error(t.error)
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(j.A, {
            opened: R,
            onClose: () => O(!1),
            size: H.premiumOnly && !e.premium ? "auto" : "500px",
            title: Z,
            centered: !0,
            children: "applyTemplate" === q ? (0, s.jsx)(u.A, {
              selectedTemplate: H,
              userDetails: e,
              closeModal: () => O(!1)
            }) : "authorFilter" === q && (0, s.jsx)("div", {
              className: i().authorFilterContainer,
              children: B ? (0, s.jsxs)("div", {
                className: i().templateAuthorFilterInformationContainer,
                children: [(0, s.jsxs)("div", {
                  className: i().templateAuthorFilterInformation,
                  children: [(0, s.jsx)("img", {
                    src: B.avatar,
                    alt: "Avatar"
                  }), (0, s.jsxs)("div", {
                    className: i().templateAuthorFilterInformationText,
                    children: [(0, s.jsx)("h1", {
                      children: B.displayName || B.username
                    }), (0, s.jsx)(f(), {
                      href: `/${B.username}`,
                      target: "_blank",
                      children: a("dashboard.templates.library.modal.author_filter.profile_link", {
                        username: B.username
                      })
                    })]
                  })]
                }), (0, s.jsxs)("div", {
                  className: i().authorFilterContainerButtonContainer,
                  children: [(0, s.jsx)("span", {
                    onClick: () => {
                      Q(), O(!1)
                    },
                    className: i().authorFilterContainerButton,
                    children: a("dashboard.templates.library.modal.author_filter.search_templates_button")
                  }), (0, s.jsx)("span", {
                    onClick: () => {
                      L(""), M(null)
                    },
                    className: i().authorFilterContainerButtonClose,
                    children: a("dashboard.templates.library.modal.author_filter.remove_button")
                  })]
                })]
              }) : (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(v.A, {
                  featureName: a("dashboard.templates.library.modal.author_filter.input_label"),
                  icon: m.A.defaultAvatar,
                  placeholder: a("dashboard.templates.library.modal.author_filter.input_placeholder"),
                  value: F,
                  onChangeFunction: e => {
                    L(e.target.value)
                  }
                }), (0, s.jsxs)("div", {
                  className: i().authorFilterContainerButtonContainer,
                  children: [(0, s.jsx)("span", {
                    onClick: ee,
                    className: i().authorFilterContainerButton,
                    children: a("dashboard.templates.library.modal.author_filter.search_button")
                  }), (0, s.jsx)("span", {
                    onClick: () => O(!1),
                    className: i().authorFilterContainerButtonClose,
                    children: a("dashboard.templates.actions.close")
                  })]
                })]
              })
            })
          }), (0, s.jsxs)("div", {
            className: i().searchBar,
            children: [(0, s.jsxs)("div", {
              className: i().searchInputWrapper,
              children: [(0, s.jsxs)("div", {
                className: i().searchInputContainer,
                children: [(0, s.jsx)("input", {
                  type: "text",
                  className: i().searchInput,
                  style: {
                    paddingRight: "" !== t ? "40px" : "15px"
                  },
                  value: t,
                  maxLength: 40,
                  onKeyPress: e => {
                    "Enter" === e.key && (e.preventDefault(), Q())
                  },
                  onChange: e => {
                    l(e.target.value)
                  },
                  placeholder: a("dashboard.templates.library.search.placeholder")
                }), "" !== t && (0, s.jsx)("span", {
                  className: i().removeSearchButton,
                  onClick: () => {
                    l("")
                  },
                  children: m.A.removeSearch
                })]
              }), (0, s.jsx)(b.A, {
                content: a("dashboard.templates.library.search.button"),
                children: (0, s.jsx)("span", {
                  className: i().searchButton,
                  onClick: Q,
                  children: m.A.search
                })
              })]
            }), (0, s.jsxs)("div", {
              className: i().filterWrapper,
              children: [(0, s.jsx)(p.A, {
                onChangeFunction: e => {
                  d(e), Q(e)
                },
                value: n,
                data: K,
                icon: m.A.sortBy,
                placeholder: a("dashboard.templates.library.sort.placeholder"),
                className: i().filterSelectInput
              }), (0, s.jsx)("span", {
                className: i().userFilter,
                onClick: () => {
                  G(z), I("authorFilter"), O(!0)
                },
                children: F ? m.A.userFilterActive : m.A.userFilter
              })]
            })]
          }), (0, s.jsx)("div", {
            className: i().templateLibrary,
            children: T ? (0, s.jsx)("div", {
              className: i().loadingContainer,
              children: m.A.loading
            }) : (0, s.jsx)(s.Fragment, {
              children: o && 0 !== o.length ? o.map(e => {
                var t;
                let r, l;
                return (0, s.jsxs)("div", {
                  className: `${i().templateWrapper} ${1===o.length&&i().singleTemplateWidth}`,
                  children: [(0, s.jsx)("img", {
                    className: i().templatePreview,
                    src: e.image,
                    alt: "Template preview",
                    draggable: "false"
                  }), (0, s.jsxs)("div", {
                    className: i().templateOverlay,
                    children: [e.premium_only && (0, s.jsx)(b.A, {
                      content: a("dashboard.templates.shared.tooltips.premium_only_badge"),
                      children: (0, s.jsxs)("span", {
                        className: i().premiumOnly,
                        children: [m.A.premium, " ", a("dashboard.templates.shared.badges.premium")]
                      })
                    }), (0, s.jsx)(b.A, {
                      content: U.includes(e.id) ? a("dashboard.templates.shared.tooltips.unfavorite") : a("dashboard.templates.shared.tooltips.favorite"),
                      children: (0, s.jsx)("span", {
                        onClick: () => Y(e.id),
                        className: i().favoriteTemplate,
                        children: U.includes(e.id) ? m.A.favoritedTemplate : m.A.favoriteTemplate
                      })
                    })]
                  }), (0, s.jsxs)("div", {
                    className: i().template,
                    children: [(0, s.jsxs)("div", {
                      className: i().templateInformation,
                      children: [(0, s.jsxs)("div", {
                        className: i().templateAuthor,
                        children: ["" !== e.user_information.avatar ? (0, s.jsx)("img", {
                          src: e.user_information.avatar,
                          alt: "Avatar"
                        }) : m.A.defaultAvatar, (0, s.jsxs)("div", {
                          className: i().templateAuthorDescription,
                          children: [(0, s.jsx)("h1", {
                            children: e.name
                          }), (0, s.jsx)("a", {
                            href: `/${e.user_information.username}`,
                            target: "_blank",
                            children: (0, s.jsxs)("h3", {
                              children: ["@", e.user_information.username]
                            })
                          })]
                        })]
                      }), (0, s.jsxs)("div", {
                        className: i().templateSearchInformation,
                        children: [(0, s.jsxs)("div", {
                          className: i().templateStatistics,
                          children: [(0, s.jsxs)("div", {
                            className: i().templateStat,
                            children: [m.A.uses, " ", a("dashboard.templates.shared.stats.uses", {
                              count: e.times_used.toLocaleString("en-US")
                            })]
                          }), (0, s.jsx)("div", {
                            className: i().templateStat,
                            dangerouslySetInnerHTML: {
                              __html: (t = e, r = Math.floor(Date.now() / 1e3), l = Math.floor(t.timestamp), t.times_used > 100 ? `${(0,h.qV)(m.A.trendingTemplate)} ${a("dashboard.templates.shared.status.trending")}` : r - l < 259200 ? `${(0,h.qV)(m.A.newTemplate)} ${a("dashboard.templates.shared.status.new")}` : t.premium_only ? `${(0,h.qV)(m.A.premium)} ${a("dashboard.templates.shared.status.premium")}` : `${(0,h.qV)(m.A.free)} ${a("dashboard.templates.shared.status.free")}`)
                            }
                          }), (0, s.jsxs)("div", {
                            className: i().templateStat,
                            children: [m.A.favorite, " ", e.favorites.toLocaleString("en-US")]
                          })]
                        }), (0, s.jsx)("div", {
                          className: i().templateTags,
                          children: e.tags.map((e, a) => (0, s.jsx)("span", {
                            children: e
                          }, a))
                        })]
                      })]
                    }), (0, s.jsxs)("div", {
                      className: i().templateButtonWrapper,
                      children: [(0, s.jsx)("span", {
                        className: i().useTemplateButton,
                        onClick: () => {
                          var a, t, s, r, l, i;
                          return a = e.id, t = e.name, s = e.premium_only, r = e.image, l = e.user_information.username, i = e.user_information.avatar, void(I("applyTemplate"), G({
                            name: t,
                            id: a,
                            premiumOnly: s,
                            templatePreview: r,
                            templateAuthor: {
                              username: l,
                              avatar: i
                            }
                          }), O(!0))
                        },
                        children: a("dashboard.templates.shared.actions.use_template")
                      }), (0, s.jsx)(y.A, {
                        value: `https://guns.lol/templates/${e.id}`,
                        children: ({
                          copied: e,
                          copy: t
                        }) => (0, s.jsx)(b.A, {
                          content: e ? a("dashboard.templates.shared.tooltips.copy_success") : a("dashboard.templates.shared.tooltips.copy"),
                          children: (0, s.jsx)("span", {
                            onClick: t,
                            children: m.A.shareTemplate
                          })
                        })
                      }), (0, s.jsx)(b.A, {
                        content: a("dashboard.templates.shared.tooltips.preview"),
                        children: (0, s.jsx)("a", {
                          target: "_blank",
                          href: `/${D}?templatePreview=true&templateId=${e.id}&t=${E}`,
                          children: m.A.previewEye
                        })
                      })]
                    })]
                  })]
                }, e.id)
              }) : o && 0 === o.length && (0, s.jsxs)("div", {
                className: i().noTemplates,
                children: [m.A.warning, (0, s.jsx)("h1", {
                  children: a("dashboard.templates.library.empty.title")
                }), (0, s.jsx)("h3", {
                  children: a("dashboard.templates.library.empty.subtitle")
                })]
              })
            })
          }), !T && (0, s.jsx)("div", {
            className: i().loadMoreContainer,
            children: P && (0, s.jsxs)("span", {
              className: i().loadMore,
              onClick: X,
              children: [m.A.loadMore, " ", a("dashboard.templates.shared.actions.load_more")]
            })
          })]
        })
      }
      var A = t(57157),
        T = t(45941),
        w = t(12521);

      function S({
        userDetails: e
      }) {
        let a = (0, x.kj)(),
          t = (0, x.useLang)(),
          l = (0, r.useMemo)(() => new Intl.NumberFormat(t || "en"), [t]),
          [n, d] = (0, r.useState)([]),
          o = e.config.avatar,
          p = e.premium ? 20 : 10,
          [g, f] = (0, r.useState)(!1),
          [_, N] = (0, r.useState)({
            name: "",
            id: "",
            type: "",
            is_private: !1,
            is_unlisted: !1,
            tags: [],
            image: "",
            file: null,
            unlisted_template_id: ""
          }),
          [S, C] = (0, r.useState)(_.is_private ? "private" : _.is_unlisted ? "unlisted" : "public"),
          [k, $] = (0, r.useState)(!0),
          [R, O] = (0, r.useState)(""),
          [q, I] = (0, r.useState)({
            name: "",
            id: "",
            premiumOnly: !1,
            templatePreview: "",
            templateAuthor: {
              username: "",
              avatar: ""
            }
          });
        (0, r.useEffect)(() => {
          (async () => {
            let e = await fetch("https://guns.lol/api/dashboard/templates/uploads", {
                method: "POST"
              }),
              a = await e.json();
            e.ok ? d(a.templates) : c.oR.error(a.error), $(!1)
          })()
        }, []);
        let F = async e => {
          e.target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0"></animate></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"></animate><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></g></svg>', e.target.style.pointerEvents = "none";
          try {
            let e = await fetch("https://guns.lol/api/dashboard/templates/delete", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  templateId: _.id
                })
              }),
              a = await e.json();
            e.ok ? (d(n.filter(e => e.id !== _.id)), c.oR.success(a.message), f(!1)) : c.oR.error(a.error)
          } finally {
            e.target.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5q0-.425.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.587 1.413T17 21zm3-4q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8q-.425 0-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8q-.425 0-.712.288T13 9v7q0 .425.288.713T14 17"></path></svg> ${a("dashboard.templates.uploads.actions.delete")}`, e.target.style.pointerEvents = "auto"
          }
        }, L = {
          delete: a("dashboard.templates.uploads.modals.delete.title"),
          visibility: a("dashboard.templates.uploads.modals.visibility.title"),
          edit: a("dashboard.templates.uploads.modals.edit.title")
        }, B = async e => {
          var t;
          let s;
          e.target.disabled = !0;
          let r = e.target.files?.[0];
          if (!r) return e.target.disabled = !1, e.target.value = "", c.oR.error(a("dashboard.templates.uploads.errors.preview_required"));
          let l = T.nB.templateImage,
            i = T.o2.templateImage,
            n = M(r.name);
          return l.includes(n) ? r.size > 1e6 * i ? (e.target.disabled = !1, e.target.value = "", c.oR.error(a("dashboard.templates.uploads.errors.file_too_large", {
            size: i
          }))) : void(N(e => ({
            ...e,
            file: r
          })), t = r, (s = new FileReader).onload = function(e) {
            let a = e.target.result;
            N(e => ({
              ...e,
              image: a
            }))
          }, s.readAsDataURL(t)) : (e.target.disabled = !1, e.target.value = "", c.oR.error(a("dashboard.templates.uploads.errors.invalid_file_type")))
        };

        function M(e) {
          return "." + e.substring(e.lastIndexOf(".") + 1)
        }
        let D = async () => {
          if ("" === _.name.trim()) return c.oR.error(a("dashboard.templates.uploads.errors.name_required"));
          if (_.name.length > 30) return c.oR.error(a("dashboard.templates.uploads.errors.name_too_long"));
          if (0 === _.tags.length) return c.oR.error(a("dashboard.templates.uploads.errors.tags_required"));
          if ("" === _.image) return c.oR.error(a("dashboard.templates.uploads.errors.preview_required"));
          if (_.tags.length > 10) return c.oR.error(a("dashboard.templates.uploads.errors.max_tags"));
          let e = new FormData;
          e.append("templateId", _.id), e.append("name", _.name), e.append("tags", JSON.stringify(_.tags)), _.file && e.append("image", _.file);
          let t = await fetch("https://guns.lol/api/dashboard/templates/edit", {
              method: "POST",
              body: e
            }),
            s = await t.json(),
            r = s.template;
          t.ok ? (d(n.map(e => e.id === _.id ? {
            ...e,
            name: r.name,
            image: r.image,
            tags: r.tags
          } : e)), c.oR.success(a("dashboard.templates.uploads.success.updated")), f(!1), N({
            name: "",
            id: "",
            type: "",
            is_private: !1,
            is_unlisted: !1,
            tags: [],
            image: "",
            file: null,
            unlisted_template_id: ""
          })) : c.oR.error(s.error)
        }, E = () => {
          if ("" === R) return c.oR.error(a("dashboard.templates.uploads.errors.tag_required"));
          if (R.length > 15) return c.oR.error(a("dashboard.templates.uploads.errors.tag_too_long"));
          if (R.length < 3) return c.oR.error(a("dashboard.templates.uploads.errors.tag_too_short"));
          if (_.tags.length >= 10) return c.oR.error(a("dashboard.templates.uploads.errors.max_tags"));
          if (_.tags.includes(R)) return c.oR.error(a("dashboard.templates.uploads.errors.tag_exists"));
          if (!/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(R)) return c.oR.error(a("dashboard.templates.uploads.errors.tag_invalid_chars"));
          let e = R.replace(/\s+/g, "");
          N(a => ({
            ...a,
            tags: [...a.tags, e]
          })), O("")
        }, U = async () => {
          let e = await fetch("https://guns.lol/api/dashboard/templates/visibility", {
              method: "POST",
              body: JSON.stringify({
                templateId: _.id,
                visibility: S
              })
            }),
            a = await e.json(),
            t = a.unlistedId || "";
          e.ok ? (d(n.map(e => e.id === _.id ? {
            ...e,
            is_private: "private" === S,
            is_unlisted: "unlisted" === S,
            unlisted_template_id: t
          } : e)), N(e => ({
            ...e,
            unlisted_template_id: t
          })), c.oR.success(a.message), "unlisted" !== S && (f(!1), N({
            name: "",
            id: "",
            type: "",
            is_private: !1,
            is_unlisted: !1,
            tags: [],
            image: "",
            file: null,
            unlisted_template_id: ""
          }))) : c.oR.error(a.error)
        }, W = {
          public: a("dashboard.templates.uploads.visibility.public"),
          private: a("dashboard.templates.uploads.visibility.private"),
          unlisted: a("dashboard.templates.uploads.visibility.unlisted")
        };
        return (0, s.jsxs)(s.Fragment, {
          children: ["use" === _.type ? (0, s.jsx)(j.A, {
            opened: g,
            onClose: () => f(!1),
            size: q.premiumOnly && !e.premium ? "auto" : "500px",
            title: q.premiumOnly && !e.premium ? a("dashboard.templates.shared.modal.apply.premium_only_title") : a("dashboard.templates.shared.modal.apply.title"),
            centered: !0,
            children: (0, s.jsx)(u.A, {
              selectedTemplate: q,
              userDetails: e,
              closeModal: () => f(!1)
            })
          }) : (0, s.jsx)(j.A, {
            opened: g,
            onClose: () => {
              f(!1), N({
                name: "",
                id: "",
                type: "",
                is_private: !1,
                is_unlisted: !1,
                tags: [],
                image: "",
                file: null,
                unlisted_template_id: ""
              })
            },
            title: L[_.type],
            centered: !0,
            size: "450px",
            children: "visibility" === _.type ? (0, s.jsxs)("div", {
              className: i().visibilityContainer,
              children: [(0, s.jsx)("h3", {
                className: i().visibilityDescription,
                children: a("dashboard.templates.uploads.visibility.description")
              }), (0, s.jsx)("div", {
                className: i().visibilityCurrentValueWrapper,
                children: (0, s.jsx)(A.A, {
                  featureName: a("dashboard.templates.uploads.visibility.label"),
                  helpDescription: a("dashboard.templates.uploads.visibility.help"),
                  element: (0, s.jsxs)("span", {
                    className: i().visibilityCurrentValue,
                    onClick: () => {
                      "public" === S ? C("private") : "private" === S ? C("unlisted") : C("public")
                    },
                    children: [m.A.templateVisibility, " ", W[S]]
                  })
                })
              }), "unlisted" === S && _.unlisted_template_id && (0, s.jsxs)("div", {
                className: i().unlistedLinkContainer,
                children: [(0, s.jsx)("h1", {
                  className: i().unlistedLinkText,
                  children: a("dashboard.templates.shared.links.unlisted.label")
                }), (0, s.jsxs)("div", {
                  className: i().unlistedLinkBox,
                  children: [(0, s.jsx)("span", {
                    className: i().unlistedLink,
                    children: `guns.lol/templates/u/${_.unlisted_template_id}`
                  }), (0, s.jsx)(y.A, {
                    value: `https://guns.lol/templates/u/${_.unlisted_template_id}`,
                    children: ({
                      copied: e,
                      copy: a
                    }) => (0, s.jsx)("span", {
                      className: i().copyButton,
                      onClick: a,
                      children: e ? m.A.copiedValue : m.A.copy
                    })
                  })]
                })]
              }), (0, s.jsx)("span", {
                className: i().visibilityButton,
                onClick: U,
                children: a("dashboard.templates.uploads.actions.change_visibility")
              })]
            }) : "delete" === _.type ? (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)("h3", {
                className: i().confirmationMessage,
                children: a("dashboard.templates.uploads.modals.delete.confirmation", {
                  name: _.name
                })
              }), (0, s.jsxs)("div", {
                className: i().confirmationContainer,
                children: [(0, s.jsxs)("span", {
                  onClick: e => F(e),
                  children: [m.A.deleteButton, " ", a("dashboard.templates.uploads.actions.delete")]
                }), (0, s.jsx)("span", {
                  onClick: () => f(!1),
                  children: a("dashboard.templates.uploads.actions.cancel")
                })]
              })]
            }) : "edit" === _.type && (0, s.jsxs)("div", {
              className: i().createTemplateContainerWrapper,
              children: [(0, s.jsx)("h3", {
                className: i().createTemplateText,
                children: a("dashboard.templates.uploads.edit.description")
              }), (0, s.jsxs)("div", {
                className: i().createTemplateContainer,
                children: [(0, s.jsxs)("div", {
                  className: i().previewUploadWrapper,
                  children: [(0, s.jsx)("h1", {
                    className: i().previewHeadingText,
                    children: a("dashboard.templates.uploads.edit.preview_title")
                  }), (0, s.jsx)("div", {
                    className: i().previewUpload,
                    children: "" === _.image ? (0, s.jsxs)(s.Fragment, {
                      children: [(0, s.jsxs)("div", {
                        className: i().uploadCardText,
                        children: [m.A.image, (0, s.jsx)("h1", {
                          children: a("dashboard.templates.uploads.edit.preview_cta")
                        })]
                      }), (0, s.jsx)("input", {
                        type: "file",
                        accept: w.vJ.templateImage.map(e => e).join(", "),
                        onChange: e => {
                          B(e)
                        }
                      })]
                    }) : (0, s.jsxs)(s.Fragment, {
                      children: [(0, s.jsxs)("div", {
                        className: i().fileBadge,
                        children: [(0, s.jsx)("span", {
                          children: M(_.file?.name || _.image).toUpperCase()
                        }), (0, s.jsx)("span", {
                          onClick: function() {
                            N(e => ({
                              ...e,
                              image: "",
                              file: null
                            }))
                          },
                          children: m.A.deleteFile
                        })]
                      }), (0, s.jsx)("img", {
                        src: _.image,
                        alt: "File",
                        className: i().uploadCardImage
                      })]
                    })
                  })]
                }), (0, s.jsx)(v.A, {
                  featureName: a("dashboard.templates.uploads.edit.name_label"),
                  icon: m.A.templateName,
                  placeholder: a("dashboard.templates.uploads.edit.name_placeholder"),
                  value: _.name,
                  onChangeFunction: e => {
                    N(a => ({
                      ...a,
                      name: e.target.value
                    }))
                  },
                  maxLength: 30
                }), (0, s.jsxs)("div", {
                  className: i().templateTagsContainerWrapper,
                  children: [(0, s.jsx)("h1", {
                    className: i().templateTagsText,
                    children: a("dashboard.templates.uploads.edit.tags_title")
                  }), (0, s.jsxs)("div", {
                    className: i().templateTagsContainer,
                    children: [(0, s.jsxs)("div", {
                      className: i().templateInputWrapper,
                      children: [(0, s.jsx)(v.A, {
                        icon: m.A.tags,
                        placeholder: a("dashboard.templates.uploads.edit.tags_placeholder"),
                        value: R,
                        onChangeFunction: e => {
                          O(e.target.value)
                        },
                        onKeyPress: e => {
                          "Enter" === e.key && (e.preventDefault(), E())
                        },
                        maxLength: 15
                      }), (0, s.jsx)("span", {
                        className: i().addTag,
                        onClick: E,
                        children: m.A.addSign
                      })]
                    }), _.tags.length > 0 && (0, s.jsx)("div", {
                      className: i().templateTagsList,
                      children: _.tags.map((e, a) => (0, s.jsxs)("div", {
                        className: i().tag,
                        children: [(0, s.jsx)("span", {
                          className: i().tagName,
                          children: e
                        }), (0, s.jsx)("span", {
                          onClick: () => {
                            let e;
                            return e = _.tags.filter((e, t) => t !== a), void N(a => ({
                              ...a,
                              tags: e
                            }))
                          },
                          className: i().removeTag,
                          children: m.A.removeTag
                        })]
                      }, a))
                    })]
                  })]
                }), (0, s.jsxs)("span", {
                  className: i().createTemplateButton,
                  onClick: D,
                  children: [m.A.editTemplate, " ", a("dashboard.templates.uploads.edit.save_button")]
                })]
              })]
            })
          }), (0, s.jsx)("div", {
            className: i().uploadedTemplatesWrapper,
            children: k ? (0, s.jsx)("div", {
              className: i().loadingContainer,
              children: m.A.loading
            }) : (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsxs)("h1", {
                className: i().uploadedTemplatesHeader,
                children: [a("dashboard.templates.uploads.header"), " ", (0, s.jsxs)("span", {
                  children: ["(", n.length, "/", p, ")"]
                })]
              }), (0, s.jsx)("div", {
                className: i().uploadedTemplates,
                children: 0 !== n.length && n.map(t => {
                  var r;
                  let d, p;
                  return (0, s.jsxs)("div", {
                    className: `${i().templateWrapper} ${1===n.length&&i().singleTemplateWidth}`,
                    children: [(0, s.jsx)("img", {
                      className: i().templatePreview,
                      src: t.image,
                      alt: "",
                      draggable: "false"
                    }), (t.premium_only || t.is_private || t.is_unlisted) && (0, s.jsxs)("div", {
                      className: i().templateOverlay,
                      children: [t.premium_only && (0, s.jsx)(b.A, {
                        content: a("dashboard.templates.shared.tooltips.premium_only_badge"),
                        children: (0, s.jsxs)("span", {
                          className: i().premiumOnly,
                          children: [m.A.premium, " ", a("dashboard.templates.shared.badges.premium")]
                        })
                      }), t.is_unlisted ? (0, s.jsx)(b.A, {
                        content: a("dashboard.templates.uploads.tooltips.unlisted"),
                        children: (0, s.jsxs)("span", {
                          className: i().unlistedTemplate,
                          children: [m.A.unlisted, " ", a("dashboard.templates.uploads.badges.unlisted")]
                        })
                      }) : t.is_private && (0, s.jsx)(b.A, {
                        content: a("dashboard.templates.uploads.tooltips.private"),
                        children: (0, s.jsxs)("span", {
                          className: i().privateTemplate,
                          children: [m.A.private, " ", a("dashboard.templates.uploads.badges.private")]
                        })
                      })]
                    }), (0, s.jsxs)("div", {
                      className: i().template,
                      children: [(0, s.jsxs)("div", {
                        className: i().templateInformation,
                        children: [(0, s.jsxs)("div", {
                          className: i().templateAuthor,
                          children: ["" !== o ? (0, s.jsx)("img", {
                            src: o,
                            alt: ""
                          }) : m.A.defaultAvatar, (0, s.jsxs)("div", {
                            className: i().templateAuthorDescription,
                            children: [(0, s.jsx)("h1", {
                              children: t.name
                            }), (0, s.jsx)("a", {
                              href: `/${e.username}`,
                              target: "_blank",
                              children: (0, s.jsxs)("h3", {
                                children: ["@", e.username]
                              })
                            })]
                          })]
                        }), (0, s.jsxs)("div", {
                          className: i().templateSearchInformation,
                          children: [(0, s.jsxs)("div", {
                            className: i().templateStatistics,
                            children: [(0, s.jsxs)("div", {
                              className: i().templateStat,
                              children: [m.A.uses, " ", a("dashboard.templates.shared.stats.uses", {
                                count: l.format(t.times_used)
                              })]
                            }), (0, s.jsx)("div", {
                              className: i().templateStat,
                              dangerouslySetInnerHTML: {
                                __html: (r = t, d = Math.floor(Date.now() / 1e3), p = Math.floor(r.timestamp), r.times_used > 100 ? `${(0,h.qV)(m.A.trendingTemplate)} ${a("dashboard.templates.shared.status.trending")}` : d - p < 259200 ? `${(0,h.qV)(m.A.newTemplate)} ${a("dashboard.templates.shared.status.new")}` : r.premium_only ? `${(0,h.qV)(m.A.premium)} ${a("dashboard.templates.shared.status.premium")}` : `${(0,h.qV)(m.A.free)} ${a("dashboard.templates.shared.status.free")}`)
                              }
                            }), (0, s.jsxs)("div", {
                              className: i().templateStat,
                              children: [m.A.favorite, " ", l.format(t.favorites)]
                            })]
                          }), (0, s.jsx)("div", {
                            className: i().templateTags,
                            children: t.tags.map((e, a) => (0, s.jsx)("span", {
                              children: e
                            }, a))
                          })]
                        })]
                      }), (0, s.jsxs)("div", {
                        className: i().templateButtonWrapper,
                        children: [(0, s.jsx)("span", {
                          className: i().useTemplateButton,
                          onClick: () => {
                            var a, s, r, l, i;
                            return a = t.id, s = t.name, r = t.premium_only, l = t.image, i = e.username, void(N({
                              name: s,
                              id: a,
                              type: "use",
                              is_private: !1,
                              is_unlisted: !1,
                              tags: [],
                              image: "",
                              file: null,
                              unlisted_template_id: ""
                            }), I({
                              name: s,
                              id: a,
                              premiumOnly: r,
                              templatePreview: l,
                              templateAuthor: {
                                username: i,
                                avatar: o
                              }
                            }), f(!0))
                          },
                          children: a("dashboard.templates.shared.actions.use_template")
                        }), (0, s.jsx)(y.A, {
                          value: `https://guns.lol/templates/${t.is_unlisted?"u/"+t.unlisted_template_id:t.id}`,
                          children: t.is_unlisted ? ({
                            copied: e,
                            copy: t
                          }) => (0, s.jsx)(b.A, {
                            content: e ? a("dashboard.templates.shared.tooltips.copy_success") : a("dashboard.templates.uploads.tooltips.copy_unique"),
                            children: (0, s.jsx)("span", {
                              onClick: t,
                              children: m.A.shareTemplate
                            })
                          }) : ({
                            copied: e,
                            copy: t
                          }) => (0, s.jsx)(b.A, {
                            content: e ? a("dashboard.templates.shared.tooltips.copy_success") : a("dashboard.templates.shared.tooltips.copy"),
                            children: (0, s.jsx)("span", {
                              onClick: t,
                              children: m.A.shareTemplate
                            })
                          })
                        }), (0, s.jsx)("span", {
                          onClick: () => {
                            var e, a;
                            return e = t.id, a = t.name, void(N({
                              name: a,
                              id: e,
                              is_private: !1,
                              is_unlisted: !1,
                              image: t.image,
                              tags: t.tags,
                              type: "edit",
                              file: null,
                              unlisted_template_id: ""
                            }), f(!0))
                          },
                          className: i().editTemplate,
                          children: m.A.editTemplate
                        }), (0, s.jsx)("span", {
                          onClick: () => {
                            var e, a, s, r;
                            return e = t.id, a = t.name, s = t.is_private, void(N({
                              name: a,
                              id: e,
                              type: "visibility",
                              is_private: s,
                              is_unlisted: r = t.is_unlisted,
                              tags: [],
                              image: "",
                              file: null,
                              unlisted_template_id: t.unlisted_template_id
                            }), C(s ? "private" : r ? "unlisted" : "public"), f(!0))
                          },
                          className: i().templateVisibility,
                          children: t.is_private ? m.A.public : m.A.private
                        }), (0, s.jsx)("span", {
                          onClick: () => {
                            var e;
                            return e = t.id, void(N({
                              name: t.name,
                              id: e,
                              type: "delete",
                              is_private: !1,
                              is_unlisted: !1,
                              tags: [],
                              image: "",
                              file: null,
                              unlisted_template_id: ""
                            }), f(!0))
                          },
                          className: i().deleteTemplate,
                          children: m.A.deleteButton
                        })]
                      })]
                    })]
                  }, t.id)
                })
              })]
            })
          })]
        })
      }

      function C({
        userDetails: e
      }) {
        let a = (0, x.kj)(),
          t = (0, x.useLang)(),
          l = (0, r.useMemo)(() => new Intl.NumberFormat(t || "en"), [t]),
          [n, d] = (0, r.useState)(!1),
          [o, p] = (0, r.useState)(!0),
          [v, g] = (0, r.useState)([]),
          [f, _] = (0, r.useState)({
            name: "",
            id: "",
            premiumOnly: !1,
            templatePreview: "",
            templateAuthor: {
              username: "",
              avatar: ""
            }
          }),
          N = e.username,
          A = new Date().getTime();
        (0, r.useEffect)(() => {
          (async () => {
            let e = await fetch("https://guns.lol/api/dashboard/templates/favorites", {
                method: "POST"
              }),
              a = await e.json();
            e.ok ? g(a.templates) : c.oR.error(a.error), p(!1)
          })()
        }, []);
        let T = async e => {
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
          a.ok ? (c.oR.success(t.message), "unfavorite" === t.type && g(v.filter(a => a.id !== e))) : c.oR.error(t.error)
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(j.A, {
            opened: n,
            onClose: () => d(!1),
            size: f.premiumOnly && !e.premium ? "auto" : "500px",
            title: f.premiumOnly && !e.premium ? a("dashboard.templates.shared.modal.apply.premium_only_title") : a("dashboard.templates.shared.modal.apply.title"),
            centered: !0,
            children: (0, s.jsx)(u.A, {
              selectedTemplate: f,
              userDetails: e,
              closeModal: () => d(!1)
            })
          }), (0, s.jsx)("div", {
            className: i().uploadedTemplatesWrapper,
            children: o ? (0, s.jsx)("div", {
              className: i().loadingContainer,
              children: m.A.loading
            }) : (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsxs)("h1", {
                className: i().uploadedTemplatesHeader,
                children: [a("dashboard.templates.favorite.header"), " ", (0, s.jsxs)("span", {
                  children: ["(", v.length, "/15)"]
                })]
              }), (0, s.jsx)("div", {
                className: i().uploadedTemplates,
                children: 0 !== v.length && v.map(e => {
                  var t;
                  let r, n;
                  return (0, s.jsxs)("div", {
                    className: `${i().templateWrapper} ${1===v.length&&i().singleTemplateWidth}`,
                    children: [(0, s.jsx)("img", {
                      className: i().templatePreview,
                      src: e.image,
                      draggable: "false"
                    }), (0, s.jsxs)("div", {
                      className: i().templateOverlay,
                      children: [e.premium_only && (0, s.jsx)(b.A, {
                        content: a("dashboard.templates.shared.tooltips.premium_only_badge"),
                        children: (0, s.jsxs)("span", {
                          className: i().premiumOnly,
                          children: [m.A.premium, " ", a("dashboard.templates.shared.badges.premium")]
                        })
                      }), (0, s.jsx)(b.A, {
                        content: a("dashboard.templates.shared.tooltips.unfavorite"),
                        children: (0, s.jsx)("span", {
                          onClick: () => T(e.id),
                          className: i().favoriteTemplate,
                          children: m.A.favoritedTemplate
                        })
                      })]
                    }), (0, s.jsxs)("div", {
                      className: i().template,
                      children: [(0, s.jsxs)("div", {
                        className: i().templateInformation,
                        children: [(0, s.jsxs)("div", {
                          className: i().templateAuthor,
                          children: ["" !== e.user_information.avatar ? (0, s.jsx)("img", {
                            src: e.user_information.avatar,
                            alt: "User Avatar"
                          }) : m.A.defaultAvatar, (0, s.jsxs)("div", {
                            className: i().templateAuthorDescription,
                            children: [(0, s.jsx)("h1", {
                              children: e.name
                            }), (0, s.jsx)("a", {
                              href: `/${e.user_information.username}`,
                              target: "_blank",
                              children: (0, s.jsxs)("h3", {
                                children: ["@", e.user_information.username]
                              })
                            })]
                          })]
                        }), (0, s.jsxs)("div", {
                          className: i().templateSearchInformation,
                          children: [(0, s.jsxs)("div", {
                            className: i().templateStatistics,
                            children: [(0, s.jsxs)("div", {
                              className: i().templateStat,
                              children: [m.A.uses, " ", a("dashboard.templates.shared.stats.uses", {
                                count: l.format(e.times_used)
                              })]
                            }), (0, s.jsx)("div", {
                              className: i().templateStat,
                              dangerouslySetInnerHTML: {
                                __html: (t = e, r = Math.floor(Date.now() / 1e3), n = Math.floor(t.timestamp), t.times_used > 100 ? `${(0,h.qV)(m.A.trendingTemplate)} ${a("dashboard.templates.shared.status.trending")}` : r - n < 259200 ? `${(0,h.qV)(m.A.newTemplate)} ${a("dashboard.templates.shared.status.new")}` : t.premium_only ? `${(0,h.qV)(m.A.premium)} ${a("dashboard.templates.shared.status.premium")}` : `${(0,h.qV)(m.A.free)} ${a("dashboard.templates.shared.status.free")}`)
                              }
                            }), (0, s.jsxs)("div", {
                              className: i().templateStat,
                              children: [m.A.favorite, " ", l.format(e.favorites)]
                            })]
                          }), (0, s.jsx)("div", {
                            className: i().templateTags,
                            children: e.tags.map((e, a) => (0, s.jsx)("span", {
                              children: e
                            }, a))
                          })]
                        })]
                      }), (0, s.jsxs)("div", {
                        className: i().templateButtonWrapper,
                        children: [(0, s.jsx)("span", {
                          className: i().useTemplateButton,
                          onClick: () => {
                            var a, t, s, r;
                            return a = e.id, t = e.name, s = e.premium_only, r = e.image, void(_({
                              name: t,
                              id: a,
                              premiumOnly: s,
                              templatePreview: r,
                              templateAuthor: {
                                username: e.user_information.username,
                                avatar: e.user_information.avatar
                              }
                            }), d(!0))
                          },
                          children: a("dashboard.templates.shared.actions.use_template")
                        }), (0, s.jsx)(y.A, {
                          value: `https://guns.lol/templates/${e.id}`,
                          children: ({
                            copied: e,
                            copy: t
                          }) => (0, s.jsx)(b.A, {
                            content: e ? a("dashboard.templates.shared.tooltips.copy_success") : a("dashboard.templates.shared.tooltips.copy"),
                            children: (0, s.jsx)("span", {
                              onClick: t,
                              children: m.A.shareTemplate
                            })
                          })
                        }), (0, s.jsx)(b.A, {
                          content: a("dashboard.templates.shared.tooltips.preview"),
                          children: (0, s.jsx)("a", {
                            target: "_blank",
                            href: `/${N}?templatePreview=true&templateId=${e.id}&t=${A}`,
                            children: m.A.previewEye
                          })
                        })]
                      })]
                    })]
                  }, e.id)
                })
              })]
            })
          })]
        })
      }

      function k({
        userDetails: e
      }) {
        let a = (0, x.kj)(),
          [t, l] = (0, r.useState)(!1),
          [n, d] = (0, r.useState)(!0),
          [o, p] = (0, r.useState)([]),
          [v, g] = (0, r.useState)({
            name: "",
            id: "",
            premiumOnly: !1,
            templatePreview: "",
            templateAuthor: {
              username: "",
              avatar: ""
            }
          }),
          f = e.username,
          _ = new Date().getTime(),
          [N, A] = (0, r.useState)(e.favorite_templates || []);
        (0, r.useEffect)(() => {
          (async () => {
            let e = await fetch("https://guns.lol/api/dashboard/templates/lastUsed", {
                method: "POST"
              }),
              a = await e.json();
            e.ok ? p(a.templates) : c.oR.error(a.error), d(!1)
          })()
        }, []);
        let T = async e => {
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
          a.ok ? (c.oR.success(t.message), A(t.favorite_templates), "favorite" === t.type ? o?.filter(a => {
            a.id === e && (a.favorites += 1)
          }) : o?.filter(a => {
            a.id === e && a.favorites > 0 && (a.favorites -= 1)
          })) : c.oR.error(t.error)
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(j.A, {
            opened: t,
            onClose: () => l(!1),
            size: v.premiumOnly && !e.premium ? "auto" : "500px",
            title: v.premiumOnly && !e.premium ? a("dashboard.templates.shared.modal.apply.premium_only_title") : a("dashboard.templates.shared.modal.apply.title"),
            centered: !0,
            children: (0, s.jsx)(u.A, {
              selectedTemplate: v,
              userDetails: e,
              closeModal: () => l(!1)
            })
          }), (0, s.jsx)("div", {
            className: i().uploadedTemplatesWrapper,
            children: n ? (0, s.jsx)("div", {
              className: i().loadingContainer,
              children: m.A.loading
            }) : (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsxs)("h1", {
                className: i().uploadedTemplatesHeader,
                children: [a("dashboard.templates.last_used.header"), " ", (0, s.jsxs)("span", {
                  children: ["(", o.length, "/10)"]
                })]
              }), (0, s.jsx)("div", {
                className: i().uploadedTemplates,
                children: 0 !== o.length && o.map(e => {
                  var t;
                  let r, n;
                  return (0, s.jsxs)("div", {
                    className: `${i().templateWrapper} ${1===o.length&&i().singleTemplateWidth}`,
                    children: [(0, s.jsx)("img", {
                      className: i().templatePreview,
                      src: e.image,
                      draggable: "false"
                    }), (0, s.jsxs)("div", {
                      className: i().templateOverlay,
                      children: [e.premium_only && (0, s.jsx)(b.A, {
                        content: a("dashboard.templates.shared.tooltips.premium_only_badge"),
                        children: (0, s.jsxs)("span", {
                          className: i().premiumOnly,
                          children: [m.A.premium, " ", a("dashboard.templates.shared.badges.premium")]
                        })
                      }), (0, s.jsx)(b.A, {
                        content: N.includes(e.id) ? a("dashboard.templates.shared.tooltips.unfavorite") : a("dashboard.templates.shared.tooltips.favorite"),
                        children: (0, s.jsx)("span", {
                          onClick: () => T(e.id),
                          className: i().favoriteTemplate,
                          children: N.includes(e.id) ? m.A.favoritedTemplate : m.A.favoriteTemplate
                        })
                      })]
                    }), (0, s.jsxs)("div", {
                      className: i().template,
                      children: [(0, s.jsxs)("div", {
                        className: i().templateInformation,
                        children: [(0, s.jsxs)("div", {
                          className: i().templateAuthor,
                          children: ["" !== e.user_information.avatar ? (0, s.jsx)("img", {
                            src: e.user_information.avatar,
                            alt: "User Avatar"
                          }) : m.A.defaultAvatar, (0, s.jsxs)("div", {
                            className: i().templateAuthorDescription,
                            children: [(0, s.jsx)("h1", {
                              children: e.name
                            }), (0, s.jsx)("a", {
                              href: `/${e.user_information.username}`,
                              target: "_blank",
                              children: (0, s.jsxs)("h3", {
                                children: ["@", e.user_information.username]
                              })
                            })]
                          })]
                        }), (0, s.jsxs)("div", {
                          className: i().templateSearchInformation,
                          children: [(0, s.jsxs)("div", {
                            className: i().templateStatistics,
                            children: [(0, s.jsxs)("div", {
                              className: i().templateStat,
                              children: [m.A.uses, " ", a("dashboard.templates.shared.stats.uses", {
                                count: e.times_used.toLocaleString("en-US")
                              })]
                            }), (0, s.jsx)("div", {
                              className: i().templateStat,
                              dangerouslySetInnerHTML: {
                                __html: (t = e, r = Math.floor(Date.now() / 1e3), n = Math.floor(t.timestamp), t.times_used > 100 ? `${(0,h.qV)(m.A.trendingTemplate)} ${a("dashboard.templates.shared.status.trending")}` : r - n < 259200 ? `${(0,h.qV)(m.A.newTemplate)} ${a("dashboard.templates.shared.status.new")}` : t.premium_only ? `${(0,h.qV)(m.A.premium)} ${a("dashboard.templates.shared.status.premium")}` : `${(0,h.qV)(m.A.free)} ${a("dashboard.templates.shared.status.free")}`)
                              }
                            }), (0, s.jsxs)("div", {
                              className: i().templateStat,
                              children: [m.A.favorite, " ", e.favorites.toLocaleString("en-US")]
                            })]
                          }), (0, s.jsx)("div", {
                            className: i().templateTags,
                            children: e.tags.map((e, a) => (0, s.jsx)("span", {
                              children: e
                            }, a))
                          })]
                        })]
                      }), (0, s.jsxs)("div", {
                        className: i().templateButtonWrapper,
                        children: [(0, s.jsx)("span", {
                          className: i().useTemplateButton,
                          onClick: () => {
                            var a, t, s, r;
                            return a = e.id, t = e.name, s = e.premium_only, r = e.image, void(g({
                              name: t,
                              id: a,
                              premiumOnly: s,
                              templatePreview: r,
                              templateAuthor: {
                                username: e.user_information.username,
                                avatar: e.user_information.avatar
                              }
                            }), l(!0))
                          },
                          children: a("dashboard.templates.shared.actions.use_template")
                        }), (0, s.jsx)(y.A, {
                          value: `https://guns.lol/templates/${e.id}`,
                          children: ({
                            copied: e,
                            copy: t
                          }) => (0, s.jsx)(b.A, {
                            content: e ? a("dashboard.templates.shared.tooltips.copy_success") : a("dashboard.templates.shared.tooltips.copy"),
                            children: (0, s.jsx)("span", {
                              onClick: t,
                              children: m.A.shareTemplate
                            })
                          })
                        }), (0, s.jsx)(b.A, {
                          content: a("dashboard.templates.shared.tooltips.preview"),
                          children: (0, s.jsx)("a", {
                            target: "_blank",
                            href: `/${f}?templatePreview=true&templateId=${e.id}&t=${_}`,
                            children: m.A.previewEye
                          })
                        })]
                      })]
                    })]
                  }, e.id)
                })
              })]
            })
          })]
        })
      }
      let $ = ({
        data: e
      }) => {
        let a = (0, x.kj)(),
          t = e.config,
          l = (0, r.useRef)([]),
          [n, h] = (0, r.useState)(0),
          [u, g] = (0, r.useState)(0),
          [f, b] = (0, r.useState)(0),
          [_, $] = (0, r.useState)(0),
          [R, O] = (0, r.useState)(!1),
          q = e.account_created + 604800 < Math.floor(Date.now() / 1e3),
          [I, F] = (0, r.useState)(),
          [L, B] = (0, r.useState)(""),
          [M, D] = (0, r.useState)(""),
          [E, U] = (0, r.useState)(""),
          [W, P] = (0, r.useState)([]),
          [V, z] = (0, r.useState)("public"),
          [H, G] = (0, r.useState)(""),
          [J, Z] = (0, r.useState)(""),
          K = (t.premium !== T.$h || "string" != typeof t.audio && t.audio.length > 2 || "typewriter" === t.username_effects) && e.premium,
          [Q, X] = (0, r.useState)(K),
          Y = async e => {
            var t;
            let s;
            e.target.disabled = !0;
            let r = e.target.files?.[0];
            if (!r) return e.target.disabled = !1, e.target.value = "", c.oR.error(a("dashboard.templates.errors.preview_required"));
            let l = T.o2.templateImage,
              i = T.nB.templateImage,
              n = ee(r.name);
            return i.includes(n) ? r.size > 1024 * l * 1024 ? (e.target.disabled = !1, e.target.value = "", c.oR.error(a("dashboard.templates.errors.file_too_large", {
              size: l
            }))) : void(F(r), t = r, (s = new FileReader).onload = function(e) {
              B(e.target.result)
            }, s.readAsDataURL(t)) : (e.target.disabled = !1, e.target.value = "", c.oR.error(a("dashboard.templates.errors.invalid_file_type")))
          };

        function ee(e) {
          return "." + e.substring(e.lastIndexOf(".") + 1)
        }(0, r.useEffect)(() => {
          let e;
          null !== n && (e = l.current[n], $(e?.offsetTop ?? 0), b(e?.offsetLeft ?? 0), g(e?.clientWidth ? e?.clientWidth - 24 : 0))
        }, [n]);
        let ea = [{
            label: a("dashboard.navigation.routes.templates.template_library"),
            value: "library"
          }, {
            label: a("dashboard.navigation.routes.templates.favorite_templates"),
            value: "favorite"
          }, {
            label: a("dashboard.navigation.routes.templates.last_used_templates"),
            value: "lastUsed"
          }, {
            label: a("dashboard.navigation.routes.templates.my_uploads"),
            value: "uploads"
          }],
          et = {
            0: "library",
            1: "favorite",
            2: "lastUsed",
            3: "uploads"
          },
          es = () => "" === E ? c.oR.error(a("dashboard.templates.errors.tag_required")) : E.length > 15 ? c.oR.error(a("dashboard.templates.errors.tag_too_long")) : E.length < 3 ? c.oR.error(a("dashboard.templates.errors.tag_too_short")) : W.length >= 10 ? c.oR.error(a("dashboard.templates.errors.max_tags")) : W.includes(E) ? c.oR.error(a("dashboard.templates.errors.tag_exists")) : /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(E) ? void(P([...W, E.replace(/\s+/g, "")]), U("")) : c.oR.error(a("dashboard.templates.errors.tag_invalid_chars")),
          er = async e => {
            e.target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0"></animate></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"></animate><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></g></svg>', e.target.style.pointerEvents = "none";
            try {
              if ("" === M) return c.oR.error(a("dashboard.templates.errors.name_required"));
              if (M.length > 30) return c.oR.error(a("dashboard.templates.errors.name_too_long"));
              if (0 === W.length) return c.oR.error(a("dashboard.templates.errors.tags_required"));
              if (W.length > 10) return c.oR.error(a("dashboard.templates.errors.max_tags"));
              if (!I) return c.oR.error(a("dashboard.templates.errors.preview_required"));
              if (!/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ]*$/.test(M)) return c.oR.error(a("dashboard.templates.errors.name_invalid_chars"));
              let e = new FormData;
              e.append("name", M), e.append("tags", JSON.stringify(W)), e.append("image", I), e.append("premium_only", Q.toString()), e.append("visibility", V);
              let t = await fetch("https://guns.lol/api/dashboard/templates/create", {
                  method: "POST",
                  body: e
                }),
                s = await t.json(),
                r = s.isUnlisted;
              if (t.ok) {
                if (r) {
                  Z(s.unlistedTemplateId), G("unlistedTemplate"), c.oR.success(s.message);
                  return
                }
                c.oR.success(s.message), O(!1), el(), location.reload()
              } else c.oR.error(s.error)
            } finally {
              e.target.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></path></svg> ${ed}`, setTimeout(() => {
                e.target.style.pointerEvents = "all"
              }, 1e3)
            }
          }, el = () => {
            D(""), U(""), P([]), B(""), F(""), X(K), z("public")
          };
        (0, r.useEffect)(() => {
          let e = window.location.hash;
          if (!e) return;
          let a = e.replace("#", "");
          "favorite" === a ? h(1) : "lastUsed" === a ? h(2) : "uploads" === a && h(3)
        }, []);
        let ei = (0, r.useMemo)(() => [{
            value: "public",
            label: a("dashboard.templates.visibility.options.public")
          }, {
            value: "private",
            label: a("dashboard.templates.visibility.options.private")
          }, {
            value: "unlisted",
            label: a("dashboard.templates.visibility.options.unlisted")
          }], [a]),
          en = a("dashboard.templates.visibility.help"),
          ed = a("dashboard.templates.actions.create"),
          eo = a("dashboard.templates.actions.close"),
          em = (0, r.useMemo)(() => ({
            createTemplate: a("dashboard.templates.modal.create.title"),
            unlistedTemplate: a("dashboard.templates.modal.unlisted.title")
          }), [a]);
        return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(c.l$, {
            richColors: !0,
            position: "top-center",
            theme: "dark",
            className: d().toasterStyles,
            icons: {
              success: o.A.successToast
            },
            visibleToasts: 2
          }), (0, s.jsx)(j.A, {
            opened: R,
            onClose: () => O(!1),
            title: em[H],
            centered: !0,
            size: "500px",
            children: "createTemplate" === H ? (0, s.jsx)(s.Fragment, {
              children: q ? (0, s.jsxs)("div", {
                className: i().createTemplateContainerWrapper,
                children: [(0, s.jsxs)("h3", {
                  className: i().createTemplateText,
                  children: [a("dashboard.templates.modal.create.description_line1"), (0, s.jsx)("br", {}), a("dashboard.templates.modal.create.description_line2")]
                }), (0, s.jsxs)("div", {
                  className: i().createTemplateContainer,
                  children: [(0, s.jsxs)("div", {
                    className: i().previewUploadWrapper,
                    children: [(0, s.jsx)("h1", {
                      className: i().previewHeadingText,
                      children: a("dashboard.templates.form.preview.title")
                    }), (0, s.jsx)("div", {
                      className: i().previewUpload,
                      children: "" === L ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)("div", {
                          className: i().uploadCardText,
                          children: [m.A.image, (0, s.jsx)("h1", {
                            children: a("dashboard.templates.form.preview.cta")
                          })]
                        }), (0, s.jsx)("input", {
                          type: "file",
                          accept: w.vJ.templateImage.map(e => e).join(", "),
                          onChange: e => {
                            Y(e)
                          }
                        })]
                      }) : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)("div", {
                          className: i().fileBadge,
                          children: [(0, s.jsx)("span", {
                            children: ee(I.name).toUpperCase()
                          }), (0, s.jsx)("span", {
                            onClick: function() {
                              B(""), F("")
                            },
                            children: m.A.deleteFile
                          })]
                        }), (0, s.jsx)("img", {
                          src: L,
                          alt: "Preview",
                          className: i().uploadCardImage
                        })]
                      })
                    })]
                  }), (0, s.jsx)(v.A, {
                    featureName: a("dashboard.templates.form.name_label"),
                    icon: m.A.templateName,
                    placeholder: a("dashboard.templates.form.name_placeholder"),
                    value: M,
                    onChangeFunction: e => {
                      D(e.target.value)
                    },
                    maxLength: 30
                  }), (0, s.jsxs)("div", {
                    className: i().templateTagsContainerWrapper,
                    children: [(0, s.jsx)("h1", {
                      className: i().templateTagsText,
                      children: a("dashboard.templates.form.tags.title")
                    }), (0, s.jsxs)("div", {
                      className: i().templateTagsContainer,
                      children: [(0, s.jsxs)("div", {
                        className: i().templateInputWrapper,
                        children: [(0, s.jsx)(v.A, {
                          icon: m.A.tags,
                          placeholder: a("dashboard.templates.form.tags.placeholder"),
                          value: E,
                          onChangeFunction: e => {
                            U(e.target.value)
                          },
                          onKeyPress: e => {
                            "Enter" === e.key && (e.preventDefault(), es())
                          },
                          maxLength: 15
                        }), (0, s.jsx)("span", {
                          className: i().addTag,
                          onClick: es,
                          children: m.A.addSign
                        })]
                      }), W.length > 0 && (0, s.jsx)("div", {
                        className: i().templateTagsList,
                        children: W.map((e, a) => (0, s.jsxs)("div", {
                          className: i().tag,
                          children: [(0, s.jsx)("span", {
                            className: i().tagName,
                            children: e
                          }), (0, s.jsx)("span", {
                            onClick: () => {
                              P(W.filter((e, t) => t !== a))
                            },
                            className: i().removeTag,
                            children: m.A.removeTag
                          })]
                        }, a))
                      })]
                    })]
                  }), (0, s.jsx)(A.A, {
                    featureName: a("dashboard.templates.visibility.label"),
                    helpDescription: en,
                    element: (0, s.jsx)(p.A, {
                      value: V,
                      data: ei,
                      onChangeFunction: e => {
                        z(e)
                      },
                      icon: m.A.templateVisibility
                    })
                  }), Q && (0, s.jsxs)("div", {
                    className: i().premiumOnlyTemplateWrapper,
                    children: [(0, s.jsxs)("div", {
                      className: i().premiumOnlyTemplate,
                      children: [(0, s.jsxs)("h1", {
                        children: [m.A.warning, " ", a("dashboard.templates.premium_notice.title")]
                      }), (0, s.jsx)("span", {
                        className: i().premiumOnlyText,
                        children: a("dashboard.templates.premium_notice.description")
                      })]
                    }), (0, s.jsxs)("span", {
                      className: i().removePremiumSettings,
                      onClick: () => {
                        X(!1)
                      },
                      children: [m.A.premiumOnlyWarningButton, " ", a("dashboard.templates.premium_notice.remove_cta")]
                    })]
                  }), (0, s.jsxs)("span", {
                    className: i().createTemplateButton,
                    onClick: er,
                    children: [m.A.addSign, " ", ed]
                  })]
                })]
              }) : (0, s.jsxs)("div", {
                className: i().requiredAge,
                children: [(0, s.jsxs)("h1", {
                  children: [m.A.warning, " ", a("dashboard.templates.modal.create.age_requirement.title")]
                }), (0, s.jsx)("h3", {
                  children: a("dashboard.templates.modal.create.age_requirement.description")
                })]
              })
            }) : "unlistedTemplate" === H && (0, s.jsxs)("div", {
              className: i().unlistedTemplateContainer,
              children: [(0, s.jsx)("h3", {
                className: i().unlistedTemplateText,
                children: a("dashboard.templates.modal.unlisted.description")
              }), (0, s.jsxs)("div", {
                className: i().unlistedLinkContainer,
                children: [(0, s.jsx)("h1", {
                  className: i().unlistedLinkText,
                  children: a("dashboard.templates.modal.unlisted.link_label")
                }), (0, s.jsxs)("div", {
                  className: i().unlistedLinkBox,
                  children: [(0, s.jsx)("span", {
                    className: i().unlistedLink,
                    children: `guns.lol/templates/u/${J}`
                  }), (0, s.jsx)(y.A, {
                    value: `https://guns.lol/templates/u/${J}`,
                    children: ({
                      copied: e,
                      copy: a
                    }) => (0, s.jsx)("span", {
                      className: i().copyButton,
                      onClick: a,
                      children: e ? m.A.copiedValue : m.A.copy
                    })
                  })]
                })]
              }), (0, s.jsx)("span", {
                className: i().unlistedTemplateButton,
                onClick: () => {
                  O(!1), el(), G(""), Z("")
                },
                children: eo
              })]
            })
          }), (0, s.jsx)("style", {
            children: `
            .${i().searchBar} .${d().inputContainerWrapper} {
                width: 270px;
                min-width: 270px;
            }
            .${i().searchBar} .${d().featureName}, .${i().templateTagsContainer} .${d().featureName} {
                display: none;
            }
                
            @media (max-width: 900px) {
                .${i().searchBar} .${d().inputContainerWrapper} {
                    width: 100%;
                    box-sizing: border-box;
                    margin-right: -5px;
                }
            }
            `
          }), (0, s.jsx)("div", {
            className: i().templateInformationWrapper,
            children: (0, s.jsxs)("div", {
              className: i().templateInformationDescription,
              children: [(0, s.jsxs)("h1", {
                children: [m.A.templates, " ", a("dashboard.templates.header.title")]
              }), (0, s.jsx)("h3", {
                children: a("dashboard.templates.header.subtitle")
              })]
            })
          }), (0, s.jsxs)("div", {
            className: i().templateTabsWrapper,
            children: [(0, s.jsxs)("div", {
              className: i().templateTabs,
              children: [0 !== u && (0, s.jsx)("span", {
                className: i().tabUnderlineContainer,
                style: {
                  left: f,
                  width: u,
                  top: _,
                  bottom: "inherit"
                },
                children: (0, s.jsx)("span", {
                  className: i().tabUnderline
                })
              }), ea.map((e, a) => {
                let t = n === a;
                return 0 !== a ? (0, s.jsx)("a", {
                  href: `#${et[a]}`,
                  children: (0, s.jsx)("span", {
                    ref: e => l.current[a] = e,
                    onClick: () => h(a),
                    className: `${!t&&i().unselected}`,
                    children: e.label
                  })
                }, a) : (0, s.jsx)("span", {
                  ref: e => l.current[a] = e,
                  onClick: () => {
                    h(a), history.pushState(null, document.title, " ")
                  },
                  className: `${!t&&i().unselected}`,
                  children: e.label
                }, a)
              })]
            }), (0, s.jsxs)("span", {
              className: i().createTemplateButton,
              onClick: () => {
                G("createTemplate"), O(!0)
              },
              children: [m.A.addSign, " ", ed]
            })]
          }), "library" === et[n] ? (0, s.jsx)(N, {
            userDetails: e
          }) : "favorite" === et[n] ? (0, s.jsx)(C, {
            userDetails: e
          }) : "lastUsed" === et[n] ? (0, s.jsx)(k, {
            userDetails: e
          }) : "uploads" === et[n] && (0, s.jsx)(S, {
            userDetails: e
          })]
        })
      }
    }
  }
]);