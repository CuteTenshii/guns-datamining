"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8416], {
    78416: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => ee
      });
      var s = t(95155),
        r = t(12115),
        o = t(39449),
        n = t(77561),
        l = t(43477),
        i = t.n(l),
        d = t(30184),
        u = t(21924),
        m = t(12555),
        c = t(37897),
        b = t(66609),
        h = t(60141),
        p = t(74564),
        _ = t(96351),
        g = t(57776),
        y = t(57157),
        x = t(38414),
        v = t(20248),
        j = t(47296),
        f = t(14311),
        k = t(28872),
        N = t(15875),
        C = t(69756),
        w = t(65663);
      let A = ({
        isBorderEnabled: e,
        setIsBorderEnabled: a,
        borderColor: t,
        setBorderColor: o,
        borderRadius: n,
        setBorderRadius: l,
        borderWidth: A,
        setBorderWidth: S,
        joinDate: B,
        setJoinDate: F,
        linksPosition: T,
        setLinksPosition: R,
        secondTab: D,
        secondTabEnabled: L,
        userJoinDate: O
      }) => {
        let E = (0, _.kj)(),
          I = (0, _.useLang)(),
          $ = [{
            value: 20,
            label: E("dashboard.premium.layout.modern_settings.border_radius.marks.twenty")
          }, {
            value: 50,
            label: E("dashboard.premium.layout.modern_settings.border_radius.marks.fifty")
          }, {
            value: 80,
            label: E("dashboard.premium.layout.modern_settings.border_radius.marks.eighty")
          }],
          U = [{
            value: 2,
            label: E("dashboard.premium.layout.modern_settings.border_width.marks.two")
          }, {
            value: 5,
            label: E("dashboard.premium.layout.modern_settings.border_width.marks.five")
          }, {
            value: 8,
            label: E("dashboard.premium.layout.modern_settings.border_width.marks.eight")
          }],
          P = [{
            value: "center",
            label: E("dashboard.premium.layout.links_alignment.center")
          }, {
            value: "left",
            label: E("dashboard.premium.layout.links_alignment.left")
          }, {
            value: "right",
            label: E("dashboard.premium.layout.links_alignment.right")
          }],
          W = [{
            name: "YouTube",
            icon: m.A.youtube,
            placeholder: E("dashboard.premium.layout.modern_settings.second_tab.placeholders.youtube")
          }, {
            name: "Spotify",
            icon: m.A.spotify,
            placeholder: E("dashboard.premium.layout.modern_settings.second_tab.placeholders.spotify")
          }, {
            name: "Discord",
            icon: m.A.discord,
            placeholder: E("dashboard.premium.layout.modern_settings.second_tab.placeholders.discord")
          }, {
            name: "Telegram",
            icon: m.A.telegram,
            placeholder: E("dashboard.premium.layout.modern_settings.second_tab.placeholders.telegram")
          }, {
            name: "Roblox",
            icon: m.A.roblox,
            placeholder: E("dashboard.premium.layout.modern_settings.second_tab.placeholders.roblox")
          }, {
            name: "GitHub",
            icon: m.A.github,
            placeholder: E("dashboard.premium.layout.modern_settings.second_tab.placeholders.github")
          }, {
            name: "LastFM",
            icon: m.A.lastfm,
            placeholder: E("dashboard.premium.layout.modern_settings.second_tab.placeholders.lastfm")
          }],
          J = {
            en: x.c,
            es: v.es,
            pt: j.F,
            fr: f.fr,
            de: k.de,
            tr: N.tr,
            ru: C.ru,
            ar: w.ar
          },
          M = e ? i().buttonEnabled : i().buttonDisabled,
          H = async () => {
            (await fetch("https://guns.lol/api/dashboard/premium/secondTab", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                second_tab_enabled: !G
              })
            })).ok ? (z(!G), b.oR.success(E("dashboard.premium.layout.modern_settings.second_tab.toggle_success", {
              state: G ? E("dashboard.premium.layout.modern_settings.second_tab.states.disabled") : E("dashboard.premium.layout.modern_settings.second_tab.states.enabled")
            }))) : b.oR.error(E("dashboard.premium.layout.modern_settings.second_tab.toggle_error"))
          }, [G, z] = (0, r.useState)(L), [Y, K] = (0, r.useState)(!1), [V, q] = (0, r.useState)(Object.keys(D)[0]), [Q, X] = (0, r.useState)(D[V]), Z = W.find(e => e.name.toLowerCase() === V)?.placeholder, ee = W.find(e => e.name.toLowerCase() === V)?.icon, ea = G ? i().buttonEnabled : i().buttonDisabled, et = async () => {
            let e = await fetch("https://guns.lol/api/dashboard/premium/secondTab", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  second_tab: {
                    second_tab_option: V,
                    second_tab_value: Q
                  }
                })
              }),
              a = await e.json();
            e.ok ? b.oR.success(E("dashboard.premium.layout.modern_settings.second_tab.save_success")) : b.oR.error(a.error)
          }, es = new Date(1e3 * O), er = [{
            value: "none",
            label: E("dashboard.premium.layout.modern_settings.join_date.none")
          }, {
            value: "relative",
            label: E("dashboard.premium.layout.modern_settings.join_date.relative", {
              value: (0, p.m)(es, {
                addSuffix: !0,
                locale: J[I]
              })
            })
          }, {
            value: "absolute",
            label: E("dashboard.premium.layout.modern_settings.join_date.absolute", {
              value: new Date(1e3 * O).toLocaleDateString(I, {
                year: "numeric",
                month: "long",
                day: "numeric"
              })
            })
          }, {
            value: "short",
            label: E("dashboard.premium.layout.modern_settings.join_date.short", {
              value: es.toLocaleDateString(I)
            })
          }, {
            value: "long",
            label: E("dashboard.premium.layout.modern_settings.join_date.long", {
              value: es.toLocaleDateString(I, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
              })
            })
          }, {
            value: "month_year",
            label: E("dashboard.premium.layout.modern_settings.join_date.month_year", {
              value: es.toLocaleDateString(I, {
                year: "numeric",
                month: "long"
              })
            })
          }, {
            value: "year_only",
            label: E("dashboard.premium.layout.modern_settings.join_date.year_only", {
              value: es.getFullYear()
            })
          }, {
            value: "compact",
            label: E("dashboard.premium.layout.modern_settings.join_date.compact", {
              value: es.toLocaleDateString(I, {
                day: "numeric",
                month: "short",
                year: "2-digit"
              }).replace(/(\d{2})$/, "'$1")
            })
          }];
        return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsxs)(g.A, {
            opened: Y,
            onClose: () => K(!1),
            title: E("dashboard.premium.layout.modern_settings.second_tab.modal_title"),
            centered: !0,
            size: "550px",
            children: [(0, s.jsx)("span", {
              className: ea,
              onClick: H,
              children: G ? E("dashboard.premium.layout.modern_settings.second_tab.disable_button") : E("dashboard.premium.layout.modern_settings.second_tab.enable_button")
            }), G && (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)("div", {
                className: i().secondTabOptions,
                children: W.map((e, a) => (0, s.jsxs)("div", {
                  className: `${i().secondTabOption} ${V===e.name.toLowerCase()?i().selected:""}`,
                  onClick: () => (e => {
                    if (V !== e) {
                      if (e === Object.keys(D)[0]) {
                        q(e), X(D[e]);
                        return
                      }
                      q(e), X("")
                    }
                  })(e.name.toLowerCase()),
                  children: [e.icon, (0, s.jsx)("h1", {
                    children: e.name
                  })]
                }, a))
              }), (0, s.jsxs)("div", {
                className: i().secondTab,
                children: [(0, s.jsx)(c.A, {
                  featureName: E("dashboard.premium.layout.modern_settings.second_tab.input_label"),
                  placeholder: Z,
                  icon: ee,
                  value: Q,
                  onChangeFunction: e => {
                    X(e.target.value)
                  }
                }), (0, s.jsx)("span", {
                  className: i().saveSecondTabButton,
                  onClick: et,
                  children: E("dashboard.premium.layout.modern_settings.second_tab.save_button")
                })]
              })]
            })]
          }), (0, s.jsxs)("div", {
            className: `${i().generalComponentContainer} ${i().modernLayoutComponentLeft} `,
            children: [(0, s.jsxs)("div", {
              className: i().generalComponentLeft,
              children: [(0, s.jsx)("div", {
                className: i().featureRow,
                children: (0, s.jsxs)("span", {
                  className: i().secondTabButton,
                  onClick: () => K(!0),
                  children: [m.A.secondTab, " ", E("dashboard.premium.layout.modern_settings.second_tab.manage_button")]
                })
              }), (0, s.jsxs)("div", {
                className: i().featureRow,
                style: {
                  flexDirection: "column",
                  gap: "10px"
                },
                children: [(0, s.jsx)("span", {
                  className: M,
                  onClick: () => a(!e),
                  children: e ? E("dashboard.premium.layout.modern_settings.border.disable_button") : E("dashboard.premium.layout.modern_settings.border.enable_button")
                }), e && (0, s.jsxs)("div", {
                  className: i().borderDiv,
                  children: [(0, s.jsx)(d.A, {
                    featureName: E("dashboard.premium.layout.modern_settings.border.color_label"),
                    onChangeFunction: o,
                    value: t
                  }), (0, s.jsx)(u.A, {
                    featureName: E("dashboard.premium.layout.modern_settings.border.width_label"),
                    onChangeFunction: S,
                    value: A,
                    min: 1,
                    max: 10,
                    step: 1,
                    label: e => `${e} px`,
                    marks: U
                  })]
                })]
              })]
            }), (0, s.jsx)("div", {
              className: i().generalComponentLeft,
              style: {
                marginBottom: "35px"
              },
              children: (0, s.jsxs)("div", {
                className: i().featureRow,
                children: [(0, s.jsx)(u.A, {
                  featureName: E("dashboard.premium.layout.modern_settings.border_radius.label"),
                  onChangeFunction: l,
                  value: n,
                  min: 0,
                  max: 100,
                  step: 1,
                  label: e => `${e} px`,
                  marks: $
                }), (0, s.jsx)(h.A, {
                  featureName: E("dashboard.premium.layout.modern_settings.join_date.label"),
                  data: er,
                  value: B,
                  onChangeFunction: F,
                  icon: m.A.joinDate,
                  placeholder: E("dashboard.premium.layout.modern_settings.join_date.placeholder")
                }), (0, s.jsx)(y.A, {
                  featureName: E("dashboard.premium.layout.links_alignment.label"),
                  helpDescription: E("dashboard.premium.layout.links_alignment.description"),
                  element: (0, s.jsx)(h.A, {
                    value: T,
                    onChangeFunction: R,
                    icon: m.A.layout,
                    data: P
                  })
                })]
              })
            })]
          })]
        })
      };
      var S = t(31887),
        B = t.n(S);
      async function F(e, a) {
        let t = new FormData;
        t.append("banner", e);
        let s = await fetch("/api/dashboard/premium/upload/banner", {
            body: t,
            method: "POST"
          }),
          r = await s.json();
        return s.ok ? (b.oR.success(a("dashboard.premium.layout.default_settings.banner.upload_success")), r.url) : (b.oR.error(r.error), console.error("Failed to upload file:", s.statusText), null)
      }
      async function T() {
        try {
          let e = await fetch("https://guns.lol/api/dashboard/premium/remove/banner", {
            method: "POST"
          });
          if (e.ok) return b.oR.success("Successfully removed banner."), "success";
          return b.oR.error("Failed to remove banner."), console.error("Failed to remove file:", e.statusText), null
        } catch (e) {
          return b.oR.error("Failed to remove banner."), console.error("Error removing file:", e), null
        }
      }
      var R = t(39818),
        D = t(12521);
      let L = ({
        isBorderEnabled: e,
        setIsBorderEnabled: a,
        borderColor: t,
        setBorderColor: o,
        borderRadius: n,
        setBorderRadius: l,
        borderWidth: c,
        setBorderWidth: b,
        setBanner: p,
        banner: g,
        linksPosition: x,
        setLinksPosition: v
      }) => {
        let j = (0, _.kj)(),
          f = [{
            value: 20,
            label: j("dashboard.premium.layout.default_settings.border_radius.marks.twenty")
          }, {
            value: 50,
            label: j("dashboard.premium.layout.default_settings.border_radius.marks.fifty")
          }, {
            value: 80,
            label: j("dashboard.premium.layout.default_settings.border_radius.marks.eighty")
          }],
          k = [{
            value: 2,
            label: j("dashboard.premium.layout.default_settings.border_width.marks.two")
          }, {
            value: 5,
            label: j("dashboard.premium.layout.default_settings.border_width.marks.five")
          }, {
            value: 8,
            label: j("dashboard.premium.layout.default_settings.border_width.marks.eight")
          }],
          N = [{
            value: "center",
            label: j("dashboard.premium.layout.links_alignment.center")
          }, {
            value: "left",
            label: j("dashboard.premium.layout.links_alignment.left")
          }, {
            value: "right",
            label: j("dashboard.premium.layout.links_alignment.right")
          }],
          C = e ? i().buttonEnabled : i().buttonDisabled,
          [w, A] = (0, r.useState)(!1),
          S = async e => {
            A(!0);
            let a = e.target.files?.[0];
            if (e.target.disabled = !0, a) {
              if (!(0, R.vH)(a, "banner")) {
                e.target.value = "", e.target.disabled = !1, A(!1);
                return
              }
              let t = await F(a, j);
              e.target.disabled = !1, A(!1), t ? p(t) : (e.target.value = "", e.target.disabled = !1, A(!1))
            }
          };
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsxs)("div", {
            className: `${i().generalComponentContainer} ${i().modernLayoutComponentLeft}`,
            children: [(0, s.jsx)("div", {
              className: i().generalComponentLeft,
              style: {
                gap: "35px"
              },
              children: (0, s.jsxs)("div", {
                className: i().featureRow,
                style: {
                  flexDirection: "column",
                  gap: "10px"
                },
                children: [(0, s.jsx)("span", {
                  className: C,
                  onClick: () => a(!e),
                  children: e ? j("dashboard.premium.layout.default_settings.border.disable_button") : j("dashboard.premium.layout.default_settings.border.enable_button")
                }), e && (0, s.jsxs)("div", {
                  className: i().borderDiv,
                  children: [(0, s.jsx)(d.A, {
                    featureName: j("dashboard.premium.layout.default_settings.border.color_label"),
                    onChangeFunction: o,
                    value: t
                  }), (0, s.jsx)(u.A, {
                    featureName: j("dashboard.premium.layout.default_settings.border.width_label"),
                    onChangeFunction: b,
                    value: c,
                    min: 1,
                    max: 10,
                    step: 1,
                    label: e => `${e}px`,
                    marks: k
                  })]
                }), (0, s.jsxs)("div", {
                  className: B().uploadCardWrapper,
                  style: {
                    marginTop: 10,
                    padding: 3,
                    width: "100%"
                  },
                  children: [(0, s.jsx)("span", {
                    children: j("dashboard.premium.layout.default_settings.banner.label")
                  }), (0, s.jsx)("div", {
                    className: B().uploadCard,
                    children: "" === g ? (0, s.jsxs)(s.Fragment, {
                      children: [w ? (0, s.jsxs)("div", {
                        className: B().uploaderMessage,
                        children: [(0, s.jsx)("span", {
                          children: m.A.loading
                        }), (0, s.jsx)("h1", {
                          children: j("dashboard.premium.layout.default_settings.banner.uploading")
                        })]
                      }) : (0, s.jsxs)("div", {
                        className: B().uploadCardText,
                        children: [m.A.image, (0, s.jsx)("h1", {
                          children: j("dashboard.premium.layout.default_settings.banner.upload_prompt")
                        })]
                      }), (0, s.jsx)("input", {
                        type: "file",
                        accept: D.vJ.banner.map(e => e).join(", "),
                        onChange: e => {
                          S(e)
                        }
                      })]
                    }) : (0, s.jsxs)(s.Fragment, {
                      children: [(0, s.jsxs)("div", {
                        className: B().fileBadge,
                        children: [(0, s.jsx)("span", {
                          children: ("." + g.substring(g.lastIndexOf(".") + 1)).toUpperCase()
                        }), (0, s.jsx)("span", {
                          onClick: function() {
                            null !== T() && p("")
                          },
                          children: m.A.deleteFile
                        })]
                      }), (0, s.jsx)("img", {
                        src: g,
                        alt: "Banner",
                        className: B().uploadCardImage
                      })]
                    })
                  })]
                })]
              })
            }), (0, s.jsx)("div", {
              className: i().generalComponentLeft,
              children: (0, s.jsxs)("div", {
                className: i().featureRow,
                style: {
                  marginBottom: 35
                },
                children: [(0, s.jsx)(u.A, {
                  featureName: j("dashboard.premium.layout.default_settings.border_radius.label"),
                  onChangeFunction: l,
                  value: n,
                  min: 0,
                  max: 100,
                  step: 1,
                  label: e => `${e}px`,
                  marks: f
                }), (0, s.jsx)(y.A, {
                  featureName: j("dashboard.premium.layout.links_alignment.label"),
                  helpDescription: j("dashboard.premium.layout.links_alignment.description"),
                  element: (0, s.jsx)(h.A, {
                    value: x,
                    onChangeFunction: v,
                    icon: m.A.layout,
                    data: N
                  })
                })]
              })
            })]
          })
        })
      };
      var O = t(81469);
      async function E(e, a, t, s, r) {
        try {
          let o = new FormData;
          s(!0), o.append("button_title", e), o.append("button_url", a.startsWith("https://") ? a : `https://${a}`), t && o.append("icon", t);
          let n = await fetch("https://guns.lol/api/dashboard/premium/buttons/add", {
              method: "POST",
              body: o
            }),
            l = await n.json();
          if (200 === n.status) return b.oR.success(r("dashboard.premium.layout.simplistic_settings.button_modal.add_button_success")), {
            success: !0,
            buttons: l.buttons
          };
          b.oR.error(l.error)
        } catch (e) {
          b.oR.error(r("common.unsaved_changes.unknown_error")), console.error(e.message)
        } finally {
          s(!1)
        }
      }
      async function I(e, a, t, s, r, o, n) {
        try {
          let n = new FormData;
          o(!0), n.append("button_title", e), n.append("button_url", a.startsWith("https://") ? a : `https://${a}`), n.append("id", s), t && n.append("icon", t);
          let l = await fetch("https://guns.lol/api/dashboard/premium/buttons/edit", {
              method: "POST",
              body: n
            }),
            i = await l.json();
          if (!l.ok) return b.oR.error(i.error), console.error(i.error), null;
          return r(i.buttons), !0
        } catch (e) {
          b.oR.error(n("common.unsaved_changes.unknown_error")), console.error("Error updating buttons:", e.message)
        } finally {
          o(!1)
        }
      }
      async function $(e, a, t) {
        try {
          let t = await fetch("https://guns.lol/api/dashboard/premium/buttons/delete", {
              method: "POST",
              body: JSON.stringify({
                id: e
              })
            }),
            s = await t.json();
          if (!t.ok) return b.oR.error(s.error), console.error(s.error), null;
          return a(s.buttons), !0
        } catch (e) {
          return b.oR.error(t("common.unsaved_changes.unknown_error")), console.error(e.message), null
        }
      }
      var U = t(45941);

      function P({
        buttonTitle: e,
        buttonUrl: a,
        buttonIcon: t,
        buttonID: o,
        modalClose: n,
        setButtons: l
      }) {
        let d = (0, _.kj)(),
          [u, h] = (0, r.useState)(e),
          [p, g] = (0, r.useState)(a),
          [y, x] = (0, r.useState)(t),
          [v, j] = (0, r.useState)(""),
          [f, k] = (0, r.useState)(!1),
          N = p.replace("https://", ""),
          C = async e => {
            await I(u, p, v || y, o, l, k, d) && (b.oR.success(d("dashboard.premium.layout.simplistic_settings.button_modal.edit_success")), n())
          }, w = async e => {
            var a;
            let t;
            e.target.disabled = !0;
            let s = e.target.files?.[0];
            if (!s) return;
            let r = U.nB.icon,
              o = A(s.name).toLowerCase();
            if (!r.includes(o)) {
              b.oR.error(d("dashboard.premium.layout.simplistic_settings.button_modal.invalid_file")), e.target.disabled = !1, e.target.value = "";
              return
            }
            j(s), a = s, (t = new FileReader).onload = function(e) {
              x(e.target.result)
            }, t.readAsDataURL(a)
          };

        function A(e) {
          return "." + e.substring(e.lastIndexOf(".") + 1)
        }
        return (0, s.jsxs)("div", {
          className: i().modalButtonGap,
          children: [(0, s.jsx)(c.A, {
            icon: m.A.title,
            featureName: d("dashboard.premium.layout.simplistic_settings.button_modal.title_label"),
            onChangeFunction: e => {
              h(e.target.value)
            },
            value: u,
            placeholder: d("dashboard.premium.layout.simplistic_settings.button_modal.title_placeholder")
          }), (0, s.jsx)(c.A, {
            prefix: "https://",
            prefixLength: 89,
            icon: m.A.url,
            featureName: d("dashboard.premium.layout.simplistic_settings.button_modal.url_label"),
            onChangeFunction: e => {
              g(e.target.value)
            },
            value: N,
            placeholder: "..."
          }), (0, s.jsxs)("div", {
            className: i().iconUploadWrapper,
            children: [(0, s.jsx)("h1", {
              className: i().uploaderHeadingText,
              children: d("dashboard.premium.layout.simplistic_settings.button_modal.icon_label")
            }), (0, s.jsx)("div", {
              className: i().iconUpload,
              children: "" === y ? (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsxs)("div", {
                  className: i().uploadCardText,
                  children: [m.A.image, (0, s.jsx)("h1", {
                    children: d("dashboard.premium.layout.simplistic_settings.button_modal.icon_upload_prompt")
                  })]
                }), (0, s.jsx)("input", {
                  type: "file",
                  accept: D.vJ.icon.map(e => e).join(", "),
                  onChange: e => {
                    w(e)
                  }
                })]
              }) : (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsxs)("div", {
                  className: i().fileBadge,
                  children: [(0, s.jsx)("span", {
                    children: A(v && v.name ? v.name : y).toUpperCase()
                  }), (0, s.jsx)("span", {
                    onClick: function() {
                      x(""), j("")
                    },
                    children: m.A.deleteFile
                  })]
                }), (0, s.jsx)("img", {
                  src: y,
                  alt: "Icon",
                  className: i().uploadCardImage
                })]
              })
            })]
          }), (0, s.jsxs)("span", {
            className: i().addButtonSpan,
            onClick: C,
            children: [f ? m.A.loading : m.A.editButton, " ", d("dashboard.premium.layout.simplistic_settings.button_modal.edit_button_cta")]
          })]
        })
      }

      function W({
        buttonTitle: e,
        buttonUrl: a,
        setButtonTitle: t,
        setButtonUrl: o,
        setButtons: n,
        modalClose: l
      }) {
        let d = (0, _.kj)(),
          [u, h] = (0, r.useState)(),
          [p, g] = (0, r.useState)(!1),
          [y, x] = (0, r.useState)(""),
          v = async () => {
            let s = await E(e, a, u, g, d);
            s && s.success && (n(s.buttons), t(""), o(""), l())
          }, j = async e => {
            var a;
            let t;
            e.target.disabled = !0;
            let s = e.target.files?.[0];
            if (!s) return;
            let r = U.nB.icon,
              o = f(s.name).toLowerCase();
            if (!r.includes(o)) {
              b.oR.error(d("dashboard.premium.layout.simplistic_settings.button_modal.invalid_file")), e.target.disabled = !1, e.target.value = "";
              return
            }
            h(s), a = s, (t = new FileReader).onload = function(e) {
              x(e.target.result)
            }, t.readAsDataURL(a)
          };

        function f(e) {
          return "." + e.substring(e.lastIndexOf(".") + 1)
        }
        return (0, s.jsxs)("div", {
          className: i().modalButtonGap,
          children: [(0, s.jsx)(c.A, {
            icon: m.A.title,
            featureName: d("dashboard.premium.layout.simplistic_settings.button_modal.title_label"),
            onChangeFunction: e => {
              t(e.target.value)
            },
            value: e,
            placeholder: d("dashboard.premium.layout.simplistic_settings.button_modal.title_placeholder")
          }), (0, s.jsx)(c.A, {
            prefix: "https://",
            prefixLength: 89,
            icon: m.A.url,
            featureName: d("dashboard.premium.layout.simplistic_settings.button_modal.url_label"),
            onChangeFunction: e => {
              o(e.target.value)
            },
            value: a,
            placeholder: "..."
          }), (0, s.jsxs)("div", {
            className: i().iconUploadWrapper,
            children: [(0, s.jsx)("h1", {
              className: i().uploaderHeadingText,
              children: d("dashboard.premium.layout.simplistic_settings.button_modal.icon_label")
            }), (0, s.jsx)("div", {
              className: i().iconUpload,
              children: "" === y ? (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsxs)("div", {
                  className: i().uploadCardText,
                  children: [m.A.image, (0, s.jsx)("h1", {
                    children: d("dashboard.premium.layout.simplistic_settings.button_modal.icon_upload_prompt")
                  })]
                }), (0, s.jsx)("input", {
                  type: "file",
                  accept: D.vJ.icon.map(e => e).join(", "),
                  onChange: e => {
                    j(e)
                  }
                })]
              }) : (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsxs)("div", {
                  className: i().fileBadge,
                  children: [(0, s.jsx)("span", {
                    children: f(u.name).toUpperCase()
                  }), (0, s.jsx)("span", {
                    onClick: function() {
                      x(""), h("")
                    },
                    children: m.A.deleteFile
                  })]
                }), (0, s.jsx)("img", {
                  src: y,
                  alt: "Icon",
                  className: i().uploadCardImage
                })]
              })
            })]
          }), (0, s.jsxs)("span", {
            className: i().addButtonSpan,
            onClick: v,
            children: [p ? m.A.loading : m.A.addButton, " ", d("dashboard.premium.layout.simplistic_settings.button_modal.add_button_cta")]
          })]
        })
      }
      var J = t(44923),
        M = t(87256),
        H = t(39768);

      function G({
        buttons: e,
        setButtons: a,
        openModal: t,
        setCurrentModal: o
      }) {
        let n = (0, _.kj)(),
          [l, d] = (0, r.useState)(e),
          [u, m] = (0, r.useState)(null),
          [c, h] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
          h(!0)
        }, []), (0, r.useEffect)(() => {
          d(e)
        }, [e]);
        let p = (0, J.FR)((0, J.MS)(J.AN, {
            activationConstraint: {
              distance: 10
            }
          })),
          g = async e => {
            m(null);
            let {
              active: t,
              over: s
            } = e;
            if (!s || t.id === s.id) return;
            let r = l.findIndex(e => e.id === t.id),
              o = l.findIndex(e => e.id === s.id);
            if (o === r) return;
            let i = (0, M.VE)(l, r, o),
              u = i.map(e => ({
                id: e.id
              })); - 1 !== r && -1 !== o && (d(i), a(i)), (await fetch("https://guns.lol/api/dashboard/premium/buttons/order", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                newOrder: u
              })
            })).ok || b.oR.error(n("dashboard.premium.layout.simplistic_settings.button_list.order_error"))
          };
        return c ? (0, s.jsxs)(J.Mp, {
          sensors: p,
          collisionDetection: J.fp,
          onDragStart: e => {
            let {
              active: a
            } = e, t = l.find(e => e.id === a.id);
            t && m(t)
          },
          onDragEnd: g,
          children: [(0, s.jsx)(M.gB, {
            items: l.map(e => e.id),
            strategy: M.vl,
            children: (0, s.jsx)("div", {
              className: i().buttons,
              children: l.map(e => (0, s.jsx)(z, {
                item: e,
                setButtons: a,
                openModal: t,
                setCurrentModal: o
              }, e.id))
            })
          }), (0, s.jsx)(J.Hd, {
            children: u && (0, s.jsx)(z, {
              item: u,
              setButtons: a,
              openModal: t,
              setCurrentModal: o,
              isOverlay: !0
            })
          })]
        }) : null
      }

      function z({
        item: e,
        setButtons: a,
        openModal: t,
        setCurrentModal: r,
        isOverlay: o = !1
      }) {
        let n = (0, _.kj)(),
          {
            attributes: l,
            listeners: d,
            setNodeRef: u,
            transform: b,
            transition: h,
            isDragging: p
          } = (0, M.gl)({
            id: e.id,
            animateLayoutChanges: () => !1
          }),
          g = {
            transform: H.Ks.Transform.toString(b),
            transition: h,
            opacity: +!p
          };
        return (0, s.jsxs)("div", {
          ref: u,
          style: g,
          className: i().buttonContainer,
          children: [(0, s.jsx)("div", {
            className: i().dragHandleContainer,
            ...l,
            ...d,
            children: m.A.dragHandle
          }), (0, s.jsx)("div", {
            className: i().buttonWrapper,
            children: (0, s.jsx)("div", {
              className: i().buttonPreview,
              children: (0, s.jsxs)("div", {
                className: i().buttonGap,
                children: [(0, s.jsxs)("div", {
                  className: i().buttonDiv,
                  children: [(0, s.jsx)("span", {
                    className: i().editButton,
                    onClick: () => {
                      t(), r({
                        modify: !0,
                        buttonTitle: e.button_title,
                        buttonUrl: e.button_url,
                        buttonIcon: e.button_icon,
                        id: e.id,
                        category: "edit"
                      })
                    },
                    children: m.A.editButton
                  }), (0, s.jsx)("span", {
                    className: i().deleteButton,
                    onClick: () => $(e.id, a, n),
                    children: m.A.deleteButton
                  })]
                }), (0, s.jsx)(c.A, {
                  icon: m.A.title,
                  featureName: n("dashboard.premium.layout.simplistic_settings.button_modal.title_label"),
                  readOnly: !0,
                  value: e.button_title
                }), (0, s.jsx)(c.A, {
                  prefix: "https://",
                  prefixLength: 89,
                  icon: m.A.url,
                  readOnly: !0,
                  featureName: n("dashboard.premium.layout.simplistic_settings.button_modal.url_label"),
                  value: e.button_url.replace("https://", "")
                }), "" !== e.button_icon && (0, s.jsx)("div", {
                  className: i().iconUpload,
                  children: (0, s.jsx)("img", {
                    src: e.button_icon,
                    alt: "Icon",
                    className: i().uploadCardImage
                  })
                })]
              })
            })
          })]
        })
      }
      let Y = ({
        buttonBorderRadius: e,
        setButtonBorderRadius: a,
        buttonShadow: t,
        setButtonShadow: o,
        textAlign: n,
        setTextAlign: l,
        showUrl: d,
        setShowUrl: c,
        buttons: b,
        setButtons: p
      }) => {
        let y = (0, _.kj)(),
          [x, v] = (0, r.useState)(!1),
          [j, f] = (0, r.useState)(""),
          [k, N] = (0, r.useState)(""),
          [C, w] = (0, r.useState)({
            modify: !1,
            buttonTitle: "",
            buttonUrl: "",
            buttonIcon: "",
            id: "",
            category: ""
          }),
          A = "add" === C.category ? y("dashboard.premium.layout.simplistic_settings.button_modal.add_title") : "edit" == C.category ? y("dashboard.premium.layout.simplistic_settings.button_modal.edit_title") : "",
          S = [{
            value: 10,
            label: y("dashboard.premium.layout.simplistic_settings.button_radius.marks.ten")
          }, {
            value: 20,
            label: y("dashboard.premium.layout.simplistic_settings.button_radius.marks.twenty")
          }, {
            value: 30,
            label: y("dashboard.premium.layout.simplistic_settings.button_radius.marks.thirty")
          }],
          B = [{
            value: "center",
            label: y("dashboard.premium.layout.simplistic_settings.text_align.center")
          }, {
            value: "right",
            label: y("dashboard.premium.layout.simplistic_settings.text_align.right")
          }, {
            value: "left",
            label: y("dashboard.premium.layout.simplistic_settings.text_align.left")
          }];
        return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(g.A, {
            opened: x,
            onClose: () => v(!1),
            centered: !0,
            title: A,
            size: "435px",
            children: "add" === C.category ? (0, s.jsx)(W, {
              buttonTitle: j,
              buttonUrl: k,
              setButtonTitle: f,
              setButtonUrl: N,
              setButtons: p,
              modalClose: () => v(!1)
            }) : "edit" === C.category && (0, s.jsx)(P, {
              buttonTitle: C.buttonTitle,
              buttonUrl: C.buttonUrl,
              buttonIcon: C.buttonIcon,
              buttonID: C.id,
              modalClose: () => v(!1),
              setButtons: p
            })
          }), (0, s.jsxs)("div", {
            className: i().simplisticLayout,
            children: [(0, s.jsxs)("div", {
              className: i().buttonEditor,
              children: [(0, s.jsxs)("div", {
                className: i().buttonEditorHeading,
                children: [(0, s.jsx)("h1", {
                  children: y("dashboard.premium.layout.simplistic_settings.button_editor.title")
                }), (0, s.jsxs)("span", {
                  onClick: () => {
                    v(!0), w({
                      modify: !1,
                      category: "add",
                      buttonTitle: "",
                      buttonUrl: "",
                      buttonIcon: "",
                      id: ""
                    })
                  },
                  children: [m.A.addButton, " ", y("dashboard.premium.layout.simplistic_settings.button_editor.add_button")]
                })]
              }), (0, s.jsx)(G, {
                buttons: b,
                setButtons: p,
                openModal: () => v(!0),
                setCurrentModal: w
              })]
            }), (0, s.jsxs)("div", {
              className: i().settings,
              children: [(0, s.jsx)("div", {
                className: i().buttonSettingsHeading,
                children: (0, s.jsx)("h1", {
                  children: y("dashboard.premium.layout.simplistic_settings.settings_title")
                })
              }), (0, s.jsxs)("div", {
                className: i().settingsContainer,
                children: [(0, s.jsx)(h.A, {
                  featureName: y("dashboard.premium.layout.simplistic_settings.text_align.label"),
                  value: n,
                  onChangeFunction: e => {
                    l(e)
                  },
                  icon: m.A.title,
                  data: B
                }), (0, s.jsx)(O.A, {
                  featureName: y("dashboard.premium.layout.simplistic_settings.show_url"),
                  checked: d,
                  onChangeFunction: e => c(e.currentTarget.checked)
                }), (0, s.jsx)(O.A, {
                  featureName: y("dashboard.premium.layout.simplistic_settings.button_shadow"),
                  checked: t,
                  onChangeFunction: e => o(e.currentTarget.checked)
                }), (0, s.jsx)(u.A, {
                  featureName: y("dashboard.premium.layout.simplistic_settings.button_radius.label"),
                  value: e,
                  label: e => `${e}px`,
                  onChangeFunction: e => {
                    a(e)
                  },
                  min: 0,
                  max: 30,
                  marks: S
                })]
              })]
            })]
          })]
        })
      };
      var K = t(9992),
        V = t(54834);
      async function q(e, a, t, s, r) {
        try {
          a(V.A.loading);
          let o = await fetch("https://guns.lol/api/dashboard/premium/layout", {
              method: "POST",
              body: JSON.stringify({
                layout: e.layout,
                border_color: e.border_color,
                border_radius: e.border_radius,
                border_width: e.border_width,
                border_enabled: e.border_enabled,
                text_align: e.text_align,
                button_border_radius: e.button_border_radius,
                show_url: e.show_url,
                button_shadow: e.button_shadow,
                join_date: e.join_date ?? "relative",
                avatar_radius: e.avatar_radius ?? 35,
                links_position: e.links_position ?? "center"
              })
            }),
            n = await o.json();
          o.ok ? (b.oR.success(r("common.unsaved_changes.settings_saved")), setTimeout(() => {
            s(e), t(!1)
          }, 500)) : b.oR.error(n.error)
        } catch (e) {
          b.oR.error(r("common.unsaved_changes.unknown_error")), console.error(e.message)
        } finally {
          setTimeout(() => {
            a(r("common.unsaved_changes.save_button"))
          }, 500)
        }
      }
      let Q = ({
        isBorderEnabled: e,
        setIsBorderEnabled: a,
        borderColor: t,
        setBorderColor: r,
        borderRadius: o,
        setBorderRadius: n,
        avatarRadius: l,
        setAvatarRadius: c,
        borderWidth: b,
        setBorderWidth: p,
        linksPosition: g,
        setLinksPosition: x
      }) => {
        let v = (0, _.kj)(),
          j = [{
            value: 20,
            label: v("dashboard.premium.layout.sleek_settings.border_radius.marks.twenty")
          }, {
            value: 50,
            label: v("dashboard.premium.layout.sleek_settings.border_radius.marks.fifty")
          }, {
            value: 80,
            label: v("dashboard.premium.layout.sleek_settings.border_radius.marks.eighty")
          }],
          f = [{
            value: 0,
            label: v("dashboard.premium.layout.sleek_settings.avatar_radius.marks.zero")
          }, {
            value: 20,
            label: v("dashboard.premium.layout.sleek_settings.avatar_radius.marks.twenty")
          }, {
            value: 50,
            label: v("dashboard.premium.layout.sleek_settings.avatar_radius.marks.fifty")
          }, {
            value: 80,
            label: v("dashboard.premium.layout.sleek_settings.avatar_radius.marks.eighty")
          }],
          k = [{
            value: 2,
            label: v("dashboard.premium.layout.sleek_settings.border_width.marks.two")
          }, {
            value: 5,
            label: v("dashboard.premium.layout.sleek_settings.border_width.marks.five")
          }, {
            value: 8,
            label: v("dashboard.premium.layout.sleek_settings.border_width.marks.eight")
          }],
          N = [{
            value: "center",
            label: v("dashboard.premium.layout.links_alignment.center")
          }, {
            value: "left",
            label: v("dashboard.premium.layout.links_alignment.left")
          }, {
            value: "right",
            label: v("dashboard.premium.layout.links_alignment.right")
          }],
          C = e ? i().buttonEnabled : i().buttonDisabled;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsxs)("div", {
            className: `${i().generalComponentContainer} ${i().modernLayoutComponentLeft}`,
            children: [(0, s.jsx)("div", {
              className: i().generalComponentLeft,
              style: {
                gap: "35px"
              },
              children: (0, s.jsxs)("div", {
                className: i().featureRow,
                style: {
                  flexDirection: "column",
                  gap: "10px"
                },
                children: [(0, s.jsx)("span", {
                  className: C,
                  onClick: () => a(!e),
                  children: v(e ? "dashboard.premium.layout.sleek_settings.border.disable_button" : "dashboard.premium.layout.sleek_settings.border.enable_button")
                }), e && (0, s.jsxs)("div", {
                  className: i().borderDiv,
                  children: [(0, s.jsx)(d.A, {
                    featureName: v("dashboard.premium.layout.sleek_settings.border.color_label"),
                    onChangeFunction: r,
                    value: t
                  }), (0, s.jsx)(u.A, {
                    featureName: v("dashboard.premium.layout.sleek_settings.border.width_label"),
                    onChangeFunction: p,
                    value: b,
                    min: 1,
                    max: 10,
                    step: 1,
                    label: e => `${e}px`,
                    marks: k
                  })]
                })]
              })
            }), (0, s.jsx)("div", {
              className: i().generalComponentLeft,
              children: (0, s.jsxs)("div", {
                className: i().featureRow,
                style: {
                  marginBottom: 35
                },
                children: [(0, s.jsx)(u.A, {
                  featureName: v("dashboard.premium.layout.sleek_settings.border_radius.label"),
                  onChangeFunction: n,
                  value: o,
                  min: 0,
                  max: 100,
                  step: 1,
                  label: e => `${e}px`,
                  marks: j
                }), (0, s.jsx)(u.A, {
                  featureName: v("dashboard.premium.layout.sleek_settings.avatar_radius.label"),
                  onChangeFunction: c,
                  value: l,
                  min: 0,
                  max: 100,
                  step: 1,
                  label: e => `${e}px`,
                  marks: f
                }), (0, s.jsx)(y.A, {
                  featureName: v("dashboard.premium.layout.links_alignment.label"),
                  helpDescription: v("dashboard.premium.layout.links_alignment.description"),
                  element: (0, s.jsx)(h.A, {
                    value: g,
                    onChangeFunction: x,
                    icon: m.A.layout,
                    data: N
                  })
                })]
              })
            })]
          })
        })
      };
      var X = t(98241),
        Z = t.n(X);
      let ee = ({
        data: e
      }) => {
        let a = (0, _.kj)(),
          t = e.config.premium,
          l = t.layout,
          d = e.account_created,
          [u, m] = (0, r.useState)({
            layout: l,
            border_enabled: t.border_enabled,
            border_color: t.border_color,
            border_radius: t.border_radius,
            border_width: t.border_width,
            button_border_radius: t.button_border_radius,
            button_shadow: t.button_shadow,
            text_align: t.text_align,
            show_url: t.show_url,
            join_date: t.join_date ?? "relative",
            avatar_radius: t.avatar_radius ?? 35,
            links_position: t.links_position ?? "center"
          }),
          [c, h] = (0, r.useState)(t.banner),
          [p, g] = (0, r.useState)(t.buttons),
          [y, x] = (0, r.useState)(u),
          [v, j] = (0, r.useState)(!1),
          f = a("common.unsaved_changes.save_button"),
          [k, N] = (0, r.useState)(f);
        (0, r.useEffect)(() => {
          j(JSON.stringify(y) !== JSON.stringify(u))
        }, [y, u]);
        let C = e => a => {
          x(t => ({
            ...t,
            [e]: a
          }))
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(b.l$, {
            richColors: !0,
            position: "top-center",
            theme: "dark",
            className: Z().toasterStyles,
            icons: {
              success: V.A.successToast
            },
            visibleToasts: 2
          }), (0, s.jsx)(o.N, {
            children: v && (0, s.jsx)("div", {
              className: Z().unsavedChangesWrapper,
              children: (0, s.jsxs)(n.P.div, {
                className: Z().unsavedChangesBar,
                initial: {
                  opacity: 0,
                  y: 40,
                  scale: .9
                },
                animate: {
                  opacity: 1,
                  y: 0,
                  scale: 1
                },
                exit: {
                  opacity: 0,
                  y: 40,
                  scale: .9
                },
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                },
                children: [(0, s.jsx)("h1", {
                  children: a("common.unsaved_changes.title")
                }), (0, s.jsx)("h1", {
                  className: Z().compactText,
                  children: a("common.unsaved_changes.compact")
                }), (0, s.jsxs)("div", {
                  className: Z().unsavedChangesButtons,
                  children: [(0, s.jsx)("span", {
                    className: Z().resetButton,
                    onClick: () => {
                      x(u), j(!1)
                    },
                    children: a("common.unsaved_changes.reset")
                  }), (0, s.jsx)("span", {
                    className: Z().saveButton,
                    onClick: () => {
                      q(y, N, j, m, a)
                    },
                    children: k
                  })]
                })]
              })
            })
          }), (0, s.jsx)("div", {
            className: i().featureGap,
            children: "modern" === l ? (0, s.jsx)(K.A, {
              featureName: a("dashboard.premium.layout.modern"),
              children: (0, s.jsx)(A, {
                isBorderEnabled: y.border_enabled,
                setIsBorderEnabled: C("border_enabled"),
                borderColor: y.border_color,
                setBorderColor: C("border_color"),
                borderRadius: y.border_radius,
                setBorderRadius: C("border_radius"),
                borderWidth: y.border_width,
                setBorderWidth: C("border_width"),
                joinDate: y.join_date,
                setJoinDate: C("join_date"),
                linksPosition: y.links_position,
                setLinksPosition: C("links_position"),
                secondTab: t.second_tab,
                secondTabEnabled: t.second_tab_enabled,
                userJoinDate: d
              })
            }) : "default" === l ? (0, s.jsx)(K.A, {
              featureName: a("dashboard.premium.layout.default"),
              children: (0, s.jsx)(L, {
                isBorderEnabled: y.border_enabled,
                setIsBorderEnabled: C("border_enabled"),
                borderColor: y.border_color,
                setBorderColor: C("border_color"),
                borderRadius: y.border_radius,
                setBorderRadius: C("border_radius"),
                borderWidth: y.border_width,
                setBorderWidth: C("border_width"),
                setBanner: h,
                banner: c,
                linksPosition: y.links_position,
                setLinksPosition: C("links_position")
              })
            }) : "simplistic" === l ? (0, s.jsx)(K.A, {
              featureName: a("dashboard.premium.layout.simplistic"),
              transparent: !0,
              children: (0, s.jsx)(Y, {
                buttonBorderRadius: y.button_border_radius,
                setButtonBorderRadius: C("button_border_radius"),
                buttonShadow: y.button_shadow,
                setButtonShadow: C("button_shadow"),
                textAlign: y.text_align,
                setTextAlign: C("text_align"),
                showUrl: y.show_url,
                setShowUrl: C("show_url"),
                buttons: p,
                setButtons: g
              })
            }) : "sleek" === l && (0, s.jsx)(K.A, {
              featureName: a("dashboard.premium.layout.sleek"),
              children: (0, s.jsx)(Q, {
                isBorderEnabled: y.border_enabled,
                setIsBorderEnabled: C("border_enabled"),
                borderColor: y.border_color,
                setBorderColor: C("border_color"),
                borderRadius: y.border_radius,
                setBorderRadius: C("border_radius"),
                borderWidth: y.border_width,
                setBorderWidth: C("border_width"),
                avatarRadius: y.avatar_radius,
                setAvatarRadius: C("avatar_radius"),
                linksPosition: y.links_position,
                setLinksPosition: C("links_position")
              })
            })
          })]
        })
      }
    }
  }
]);