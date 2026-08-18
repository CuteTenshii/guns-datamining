(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3184], {
    3184: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, {
        default: () => e4
      });
      var a = o(95155),
        r = o(12115),
        i = o(39449),
        s = o(60884),
        l = o(43477),
        d = o.n(l),
        n = o(30184),
        c = o(21924),
        u = o(12555),
        m = o(66609),
        p = o(60141),
        b = o(74564),
        _ = o(86891),
        f = o(57157),
        h = o(38414),
        g = o(20248),
        y = o(47296),
        x = o(14311),
        j = o(28872),
        v = o(15875),
        N = o(69756),
        S = o(65663),
        k = o(42005),
        w = o(85737);
      let C = ({
        isBorderEnabled: e,
        setIsBorderEnabled: t,
        borderColor: o,
        setBorderColor: i,
        borderRadius: s,
        setBorderRadius: l,
        borderWidth: C,
        setBorderWidth: U,
        borderStyle: G,
        setBorderStyle: A,
        borderOpacity: T,
        setBorderOpacity: B,
        joinDate: L,
        setJoinDate: R,
        linksPosition: F,
        setLinksPosition: M,
        secondTab: D,
        secondTabEnabled: I,
        clockFaceStyle: O,
        clockHidden: E,
        clockTimeFormat: P,
        userJoinDate: $
      }) => {
        let H = (0, _.kj)(),
          W = (0, _.useLang)(),
          z = [{
            value: 20,
            label: H("dashboard.premium.layout.modern_settings.border_radius.marks.twenty")
          }, {
            value: 50,
            label: H("dashboard.premium.layout.modern_settings.border_radius.marks.fifty")
          }, {
            value: 80,
            label: H("dashboard.premium.layout.modern_settings.border_radius.marks.eighty")
          }],
          V = [{
            value: 2,
            label: H("dashboard.premium.layout.modern_settings.border_width.marks.two")
          }, {
            value: 5,
            label: H("dashboard.premium.layout.modern_settings.border_width.marks.five")
          }, {
            value: 8,
            label: H("dashboard.premium.layout.modern_settings.border_width.marks.eight")
          }],
          J = [{
            value: "center",
            label: H("dashboard.premium.layout.links_alignment.center")
          }, {
            value: "left",
            label: H("dashboard.premium.layout.links_alignment.left")
          }, {
            value: "right",
            label: H("dashboard.premium.layout.links_alignment.right")
          }],
          q = [{
            value: "static",
            label: H("dashboard.premium.layout.border_style.static")
          }, {
            value: "dashed",
            label: H("dashboard.premium.layout.border_style.dashed")
          }, {
            value: "shimmer",
            label: H("dashboard.premium.layout.border_style.shimmer")
          }, {
            value: "pulse",
            label: H("dashboard.premium.layout.border_style.pulse")
          }],
          K = {
            en: h.c,
            es: g.es,
            pt: y.F,
            fr: x.fr,
            de: j.de,
            tr: v.tr,
            ru: N.ru,
            ar: S.ar
          },
          Y = e ? d().buttonEnabled : d().buttonDisabled,
          [Q, X] = (0, r.useState)(!1),
          [Z, ee] = (0, r.useState)(I),
          et = (0, w.oO)({
            second_tab_enabled: !0,
            second_tab: D,
            clock_face_style: O,
            clock_hidden: E,
            clock_time_format: P
          }) ?? {
            ...w.jW,
            type: "youtube"
          },
          eo = async e => (await fetch("https://guns.lol/api/dashboard/premium/secondTab", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              second_tab_enabled: e
            })
          })).ok ? (ee(e), m.oR.success(H("dashboard.premium.layout.modern_settings.second_tab.toggle_success", {
            state: e ? H("dashboard.premium.layout.modern_settings.second_tab.states.enabled") : H("dashboard.premium.layout.modern_settings.second_tab.states.disabled")
          })), !0) : (m.oR.error(H("dashboard.premium.layout.modern_settings.second_tab.toggle_error")), !1), ea = async ({
            widget: e
          }) => {
            let t = await fetch("https://guns.lol/api/dashboard/premium/secondTab", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  second_tab: {
                    second_tab_option: e.type,
                    second_tab_value: e.value
                  },
                  ..."timezone" === e.type && {
                    clock_face_style: e.clock_face_style,
                    clock_hidden: e.clock_hidden,
                    clock_time_format: e.clock_time_format
                  }
                })
              }),
              o = await t.json();
            return t.ok ? (m.oR.success(H("dashboard.premium.layout.modern_settings.second_tab.save_success")), !0) : (m.oR.error(o.error), !1)
          }, er = new Date(1e3 * $), ei = [{
            value: "none",
            label: H("dashboard.premium.layout.modern_settings.join_date.none")
          }, {
            value: "relative",
            label: H("dashboard.premium.layout.modern_settings.join_date.relative", {
              value: (0, b.m)(er, {
                addSuffix: !0,
                locale: K[W]
              })
            })
          }, {
            value: "absolute",
            label: H("dashboard.premium.layout.modern_settings.join_date.absolute", {
              value: new Date(1e3 * $).toLocaleDateString(W, {
                year: "numeric",
                month: "long",
                day: "numeric"
              })
            })
          }, {
            value: "short",
            label: H("dashboard.premium.layout.modern_settings.join_date.short", {
              value: er.toLocaleDateString(W)
            })
          }, {
            value: "long",
            label: H("dashboard.premium.layout.modern_settings.join_date.long", {
              value: er.toLocaleDateString(W, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
              })
            })
          }, {
            value: "month_year",
            label: H("dashboard.premium.layout.modern_settings.join_date.month_year", {
              value: er.toLocaleDateString(W, {
                year: "numeric",
                month: "long"
              })
            })
          }, {
            value: "year_only",
            label: H("dashboard.premium.layout.modern_settings.join_date.year_only", {
              value: er.getFullYear()
            })
          }, {
            value: "compact",
            label: H("dashboard.premium.layout.modern_settings.join_date.compact", {
              value: er.toLocaleDateString(W, {
                day: "numeric",
                month: "short",
                year: "2-digit"
              }).replace(/(\d{2})$/, "'$1")
            })
          }];
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(k.A, {
            opened: Q,
            onOpenedChange: X,
            showTrigger: !1,
            title: H("dashboard.premium.layout.modern_settings.second_tab.modal_title"),
            applyLabel: H("dashboard.premium.layout.modern_settings.second_tab.save_button"),
            enabled: Z,
            widget: et,
            discordPresenceSettings: w.iz,
            isPremium: !0,
            discordConnected: !0,
            hiddenTypes: ["discord_presence"],
            showDiscordSettings: !1,
            showPremiumIndicators: !1,
            closeOnApply: !1,
            resetOnOpen: !1,
            hideApplyWhenDisabled: !0,
            onEnabledChange: eo,
            onApply: ea
          }), (0, a.jsxs)("div", {
            className: `${d().generalComponentContainer} ${d().modernLayoutComponentLeft} `,
            children: [(0, a.jsxs)("div", {
              className: d().generalComponentLeft,
              children: [(0, a.jsx)("div", {
                className: d().featureRow,
                children: (0, a.jsxs)("span", {
                  className: d().secondTabButton,
                  onClick: () => X(!0),
                  children: [u.A.secondTab, " ", H("dashboard.premium.layout.modern_settings.second_tab.manage_button")]
                })
              }), (0, a.jsxs)("div", {
                className: d().featureRow,
                style: {
                  flexDirection: "column",
                  gap: "10px"
                },
                children: [(0, a.jsx)("span", {
                  className: Y,
                  onClick: () => t(!e),
                  children: e ? H("dashboard.premium.layout.modern_settings.border.disable_button") : H("dashboard.premium.layout.modern_settings.border.enable_button")
                }), e && (0, a.jsxs)("div", {
                  className: d().borderDiv,
                  children: [(0, a.jsxs)("div", {
                    className: d().borderControlsRow,
                    children: [(0, a.jsx)(n.A, {
                      featureName: H("dashboard.premium.layout.modern_settings.border.color_label"),
                      onChangeFunction: i,
                      value: o
                    }), (0, a.jsx)(p.A, {
                      featureName: H("dashboard.premium.layout.border_style.label"),
                      data: q,
                      value: G ?? "static",
                      onChangeFunction: A,
                      icon: u.A.layout
                    })]
                  }), (0, a.jsxs)("div", {
                    className: d().borderControlsRow,
                    children: [(0, a.jsx)(c.A, {
                      featureName: H("dashboard.premium.layout.modern_settings.border.width_label"),
                      onChangeFunction: U,
                      value: C,
                      min: 1,
                      max: 10,
                      step: 1,
                      label: e => `${e} px`,
                      marks: V
                    }), (0, a.jsx)(c.A, {
                      featureName: H("dashboard.premium.layout.border_opacity.label"),
                      onChangeFunction: B,
                      value: T,
                      min: 0,
                      max: 1,
                      step: .01,
                      label: e => `${Math.floor(100*e)}%`,
                      marks: [{
                        value: .2,
                        label: "20%"
                      }, {
                        value: .5,
                        label: "50%"
                      }, {
                        value: .8,
                        label: "80%"
                      }]
                    })]
                  })]
                })]
              })]
            }), (0, a.jsx)("div", {
              className: d().generalComponentLeft,
              children: (0, a.jsxs)("div", {
                className: d().layoutControlsStack,
                children: [(0, a.jsx)(c.A, {
                  featureName: H("dashboard.premium.layout.modern_settings.border_radius.label"),
                  onChangeFunction: l,
                  value: s,
                  min: 0,
                  max: 100,
                  step: 1,
                  label: e => `${e} px`,
                  marks: z
                }), (0, a.jsxs)("div", {
                  className: d().layoutDropdownRow,
                  children: [(0, a.jsx)(p.A, {
                    featureName: H("dashboard.premium.layout.modern_settings.join_date.label"),
                    data: ei,
                    value: L,
                    onChangeFunction: R,
                    icon: u.A.joinDate,
                    placeholder: H("dashboard.premium.layout.modern_settings.join_date.placeholder")
                  }), (0, a.jsx)(f.A, {
                    featureName: H("dashboard.premium.layout.links_alignment.label"),
                    helpDescription: H("dashboard.premium.layout.links_alignment.description"),
                    element: (0, a.jsx)(p.A, {
                      value: F,
                      onChangeFunction: M,
                      icon: u.A.layout,
                      data: J
                    })
                  })]
                })]
              })
            })]
          })]
        })
      };
      var U = o(31887),
        G = o.n(U);
      async function A(e, t) {
        let o = new FormData;
        o.append("banner", e);
        let a = await fetch("/api/dashboard/premium/upload/banner", {
            body: o,
            method: "POST"
          }),
          r = await a.json();
        return a.ok ? (m.oR.success(t("dashboard.premium.layout.default_settings.banner.upload_success")), r.url) : (m.oR.error(r.error), console.error("Failed to upload file:", a.statusText), null)
      }
      async function T() {
        try {
          let e = await fetch("https://guns.lol/api/dashboard/premium/remove/banner", {
            method: "POST"
          });
          if (e.ok) return m.oR.success("Successfully removed banner."), "success";
          return m.oR.error("Failed to remove banner."), console.error("Failed to remove file:", e.statusText), null
        } catch (e) {
          return m.oR.error("Failed to remove banner."), console.error("Error removing file:", e), null
        }
      }
      var B = o(39818),
        L = o(12521);
      let R = ({
        isBorderEnabled: e,
        setIsBorderEnabled: t,
        borderColor: o,
        setBorderColor: i,
        borderRadius: s,
        setBorderRadius: l,
        borderWidth: m,
        setBorderWidth: b,
        borderStyle: h,
        setBorderStyle: g,
        borderOpacity: y,
        setBorderOpacity: x,
        setBanner: j,
        banner: v,
        linksPosition: N,
        setLinksPosition: S
      }) => {
        let k = (0, _.kj)(),
          w = [{
            value: 20,
            label: k("dashboard.premium.layout.default_settings.border_radius.marks.twenty")
          }, {
            value: 50,
            label: k("dashboard.premium.layout.default_settings.border_radius.marks.fifty")
          }, {
            value: 80,
            label: k("dashboard.premium.layout.default_settings.border_radius.marks.eighty")
          }],
          C = [{
            value: 2,
            label: k("dashboard.premium.layout.default_settings.border_width.marks.two")
          }, {
            value: 5,
            label: k("dashboard.premium.layout.default_settings.border_width.marks.five")
          }, {
            value: 8,
            label: k("dashboard.premium.layout.default_settings.border_width.marks.eight")
          }],
          U = [{
            value: "center",
            label: k("dashboard.premium.layout.links_alignment.center")
          }, {
            value: "left",
            label: k("dashboard.premium.layout.links_alignment.left")
          }, {
            value: "right",
            label: k("dashboard.premium.layout.links_alignment.right")
          }],
          R = [{
            value: "static",
            label: k("dashboard.premium.layout.border_style.static")
          }, {
            value: "dashed",
            label: k("dashboard.premium.layout.border_style.dashed")
          }, {
            value: "shimmer",
            label: k("dashboard.premium.layout.border_style.shimmer")
          }, {
            value: "pulse",
            label: k("dashboard.premium.layout.border_style.pulse")
          }],
          F = e ? d().buttonEnabled : d().buttonDisabled,
          [M, D] = (0, r.useState)(!1),
          I = async e => {
            D(!0);
            let t = e.target.files?.[0];
            if (e.target.disabled = !0, t) {
              if (!(0, B.vH)(t, "banner")) {
                e.target.value = "", e.target.disabled = !1, D(!1);
                return
              }
              let o = await A(t, k);
              e.target.disabled = !1, D(!1), o ? j(o) : (e.target.value = "", e.target.disabled = !1, D(!1))
            }
          };
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            className: `${d().generalComponentContainer} ${d().modernLayoutComponentLeft}`,
            children: [(0, a.jsx)("div", {
              className: d().generalComponentLeft,
              style: {
                gap: "35px"
              },
              children: (0, a.jsxs)("div", {
                className: d().featureRow,
                style: {
                  flexDirection: "column",
                  gap: "10px"
                },
                children: [(0, a.jsx)("span", {
                  className: F,
                  onClick: () => t(!e),
                  children: e ? k("dashboard.premium.layout.default_settings.border.disable_button") : k("dashboard.premium.layout.default_settings.border.enable_button")
                }), e && (0, a.jsxs)("div", {
                  className: d().borderDiv,
                  children: [(0, a.jsxs)("div", {
                    className: d().borderControlsRow,
                    children: [(0, a.jsx)(n.A, {
                      featureName: k("dashboard.premium.layout.default_settings.border.color_label"),
                      onChangeFunction: i,
                      value: o
                    }), (0, a.jsx)(p.A, {
                      featureName: k("dashboard.premium.layout.border_style.label"),
                      data: R,
                      value: h ?? "static",
                      onChangeFunction: g,
                      icon: u.A.layout
                    })]
                  }), (0, a.jsxs)("div", {
                    className: d().borderControlsRow,
                    children: [(0, a.jsx)(c.A, {
                      featureName: k("dashboard.premium.layout.default_settings.border.width_label"),
                      onChangeFunction: b,
                      value: m,
                      min: 1,
                      max: 10,
                      step: 1,
                      label: e => `${e}px`,
                      marks: C
                    }), (0, a.jsx)(c.A, {
                      featureName: k("dashboard.premium.layout.border_opacity.label"),
                      onChangeFunction: x,
                      value: y,
                      min: 0,
                      max: 1,
                      step: .01,
                      label: e => `${Math.floor(100*e)}%`,
                      marks: [{
                        value: .2,
                        label: "20%"
                      }, {
                        value: .5,
                        label: "50%"
                      }, {
                        value: .8,
                        label: "80%"
                      }]
                    })]
                  })]
                }), (0, a.jsxs)("div", {
                  className: G().uploadCardWrapper,
                  style: {
                    marginTop: 10,
                    padding: 3,
                    width: "100%"
                  },
                  children: [(0, a.jsx)("span", {
                    children: k("dashboard.premium.layout.default_settings.banner.label")
                  }), (0, a.jsx)("div", {
                    className: G().uploadCard,
                    children: "" === v ? (0, a.jsxs)(a.Fragment, {
                      children: [M ? (0, a.jsxs)("div", {
                        className: G().uploaderMessage,
                        children: [(0, a.jsx)("span", {
                          children: u.A.loading
                        }), (0, a.jsx)("h1", {
                          children: k("dashboard.premium.layout.default_settings.banner.uploading")
                        })]
                      }) : (0, a.jsxs)("div", {
                        className: G().uploadCardText,
                        children: [u.A.image, (0, a.jsx)("h1", {
                          children: k("dashboard.premium.layout.default_settings.banner.upload_prompt")
                        })]
                      }), (0, a.jsx)("input", {
                        type: "file",
                        accept: L.vJ.banner.map(e => e).join(", "),
                        onChange: e => {
                          I(e)
                        }
                      })]
                    }) : (0, a.jsxs)(a.Fragment, {
                      children: [(0, a.jsxs)("div", {
                        className: G().fileBadge,
                        children: [(0, a.jsx)("span", {
                          children: ("." + v.substring(v.lastIndexOf(".") + 1)).toUpperCase()
                        }), (0, a.jsx)("span", {
                          onClick: function() {
                            null !== T() && j("")
                          },
                          children: u.A.deleteFile
                        })]
                      }), (0, a.jsx)("img", {
                        src: v,
                        alt: "Banner",
                        className: G().uploadCardImage
                      })]
                    })
                  })]
                })]
              })
            }), (0, a.jsx)("div", {
              className: d().generalComponentLeft,
              children: (0, a.jsxs)("div", {
                className: d().featureRow,
                style: {
                  marginBottom: 35
                },
                children: [(0, a.jsx)(c.A, {
                  featureName: k("dashboard.premium.layout.default_settings.border_radius.label"),
                  onChangeFunction: l,
                  value: s,
                  min: 0,
                  max: 100,
                  step: 1,
                  label: e => `${e}px`,
                  marks: w
                }), (0, a.jsx)(f.A, {
                  featureName: k("dashboard.premium.layout.links_alignment.label"),
                  helpDescription: k("dashboard.premium.layout.links_alignment.description"),
                  element: (0, a.jsx)(p.A, {
                    value: N,
                    onChangeFunction: S,
                    icon: u.A.layout,
                    data: U
                  })
                })]
              })
            })]
          })
        })
      };
      var F = o(81469),
        M = o(37897);
      async function D(e, t, o, a, r) {
        try {
          let i = new FormData;
          a(!0), i.append("button_title", e), i.append("button_url", t.startsWith("https://") ? t : `https://${t}`), o && i.append("icon", o);
          let s = await fetch("https://guns.lol/api/dashboard/premium/buttons/add", {
              method: "POST",
              body: i
            }),
            l = await s.json();
          if (200 === s.status) return m.oR.success(r("dashboard.premium.layout.simplistic_settings.button_modal.add_button_success")), {
            success: !0,
            buttons: l.buttons
          };
          m.oR.error(l.error)
        } catch (e) {
          m.oR.error(r("common.unsaved_changes.unknown_error")), console.error(e.message)
        } finally {
          a(!1)
        }
      }
      async function I(e, t, o, a, r, i, s) {
        try {
          let s = new FormData;
          i(!0), s.append("button_title", e), s.append("button_url", t.startsWith("https://") ? t : `https://${t}`), s.append("id", a), o && s.append("icon", o);
          let l = await fetch("https://guns.lol/api/dashboard/premium/buttons/edit", {
              method: "POST",
              body: s
            }),
            d = await l.json();
          if (!l.ok) return m.oR.error(d.error), console.error(d.error), null;
          return r(d.buttons), !0
        } catch (e) {
          m.oR.error(s("common.unsaved_changes.unknown_error")), console.error("Error updating buttons:", e.message)
        } finally {
          i(!1)
        }
      }
      async function O(e, t, o) {
        try {
          let o = await fetch("https://guns.lol/api/dashboard/premium/buttons/delete", {
              method: "POST",
              body: JSON.stringify({
                id: e
              })
            }),
            a = await o.json();
          if (!o.ok) return m.oR.error(a.error), console.error(a.error), null;
          return t(a.buttons), !0
        } catch (e) {
          return m.oR.error(o("common.unsaved_changes.unknown_error")), console.error(e.message), null
        }
      }
      var E = o(45941);

      function P({
        buttonTitle: e,
        buttonUrl: t,
        buttonIcon: o,
        buttonID: i,
        modalClose: s,
        setButtons: l
      }) {
        let n = (0, _.kj)(),
          [c, p] = (0, r.useState)(e),
          [b, f] = (0, r.useState)(t),
          [h, g] = (0, r.useState)(o),
          [y, x] = (0, r.useState)(""),
          [j, v] = (0, r.useState)(!1),
          N = b.replace("https://", ""),
          S = async e => {
            await I(c, b, y || h, i, l, v, n) && (m.oR.success(n("dashboard.premium.layout.simplistic_settings.button_modal.edit_success")), s())
          }, k = async e => {
            var t;
            let o;
            e.target.disabled = !0;
            let a = e.target.files?.[0];
            if (!a) return;
            let r = E.nB.icon,
              i = w(a.name).toLowerCase();
            if (!r.includes(i)) {
              m.oR.error(n("dashboard.premium.layout.simplistic_settings.button_modal.invalid_file")), e.target.disabled = !1, e.target.value = "";
              return
            }
            x(a), t = a, (o = new FileReader).onload = function(e) {
              g(e.target.result)
            }, o.readAsDataURL(t)
          };

        function w(e) {
          return "." + e.substring(e.lastIndexOf(".") + 1)
        }
        return (0, a.jsxs)("div", {
          className: d().modalButtonGap,
          children: [(0, a.jsx)(M.A, {
            icon: u.A.title,
            featureName: n("dashboard.premium.layout.simplistic_settings.button_modal.title_label"),
            onChangeFunction: e => {
              p(e.target.value)
            },
            value: c,
            placeholder: n("dashboard.premium.layout.simplistic_settings.button_modal.title_placeholder")
          }), (0, a.jsx)(M.A, {
            prefix: "https://",
            prefixLength: 89,
            icon: u.A.url,
            featureName: n("dashboard.premium.layout.simplistic_settings.button_modal.url_label"),
            onChangeFunction: e => {
              f(e.target.value)
            },
            value: N,
            placeholder: "..."
          }), (0, a.jsxs)("div", {
            className: d().iconUploadWrapper,
            children: [(0, a.jsx)("h1", {
              className: d().uploaderHeadingText,
              children: n("dashboard.premium.layout.simplistic_settings.button_modal.icon_label")
            }), (0, a.jsx)("div", {
              className: d().iconUpload,
              children: "" === h ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsxs)("div", {
                  className: d().uploadCardText,
                  children: [u.A.image, (0, a.jsx)("h1", {
                    children: n("dashboard.premium.layout.simplistic_settings.button_modal.icon_upload_prompt")
                  })]
                }), (0, a.jsx)("input", {
                  type: "file",
                  accept: L.vJ.icon.map(e => e).join(", "),
                  onChange: e => {
                    k(e)
                  }
                })]
              }) : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsxs)("div", {
                  className: d().fileBadge,
                  children: [(0, a.jsx)("span", {
                    children: w(y && y.name ? y.name : h).toUpperCase()
                  }), (0, a.jsx)("span", {
                    onClick: function() {
                      g(""), x("")
                    },
                    children: u.A.deleteFile
                  })]
                }), (0, a.jsx)("img", {
                  src: h,
                  alt: "Icon",
                  className: d().uploadCardImage
                })]
              })
            })]
          }), (0, a.jsxs)("span", {
            className: d().addButtonSpan,
            onClick: S,
            children: [j ? u.A.loading : u.A.editButton, " ", n("dashboard.premium.layout.simplistic_settings.button_modal.edit_button_cta")]
          })]
        })
      }

      function $({
        buttonTitle: e,
        buttonUrl: t,
        setButtonTitle: o,
        setButtonUrl: i,
        setButtons: s,
        modalClose: l
      }) {
        let n = (0, _.kj)(),
          [c, p] = (0, r.useState)(),
          [b, f] = (0, r.useState)(!1),
          [h, g] = (0, r.useState)(""),
          y = async () => {
            let a = await D(e, t, c, f, n);
            a && a.success && (s(a.buttons), o(""), i(""), l())
          }, x = async e => {
            var t;
            let o;
            e.target.disabled = !0;
            let a = e.target.files?.[0];
            if (!a) return;
            let r = E.nB.icon,
              i = j(a.name).toLowerCase();
            if (!r.includes(i)) {
              m.oR.error(n("dashboard.premium.layout.simplistic_settings.button_modal.invalid_file")), e.target.disabled = !1, e.target.value = "";
              return
            }
            p(a), t = a, (o = new FileReader).onload = function(e) {
              g(e.target.result)
            }, o.readAsDataURL(t)
          };

        function j(e) {
          return "." + e.substring(e.lastIndexOf(".") + 1)
        }
        return (0, a.jsxs)("div", {
          className: d().modalButtonGap,
          children: [(0, a.jsx)(M.A, {
            icon: u.A.title,
            featureName: n("dashboard.premium.layout.simplistic_settings.button_modal.title_label"),
            onChangeFunction: e => {
              o(e.target.value)
            },
            value: e,
            placeholder: n("dashboard.premium.layout.simplistic_settings.button_modal.title_placeholder")
          }), (0, a.jsx)(M.A, {
            prefix: "https://",
            prefixLength: 89,
            icon: u.A.url,
            featureName: n("dashboard.premium.layout.simplistic_settings.button_modal.url_label"),
            onChangeFunction: e => {
              i(e.target.value)
            },
            value: t,
            placeholder: "..."
          }), (0, a.jsxs)("div", {
            className: d().iconUploadWrapper,
            children: [(0, a.jsx)("h1", {
              className: d().uploaderHeadingText,
              children: n("dashboard.premium.layout.simplistic_settings.button_modal.icon_label")
            }), (0, a.jsx)("div", {
              className: d().iconUpload,
              children: "" === h ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsxs)("div", {
                  className: d().uploadCardText,
                  children: [u.A.image, (0, a.jsx)("h1", {
                    children: n("dashboard.premium.layout.simplistic_settings.button_modal.icon_upload_prompt")
                  })]
                }), (0, a.jsx)("input", {
                  type: "file",
                  accept: L.vJ.icon.map(e => e).join(", "),
                  onChange: e => {
                    x(e)
                  }
                })]
              }) : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsxs)("div", {
                  className: d().fileBadge,
                  children: [(0, a.jsx)("span", {
                    children: j(c.name).toUpperCase()
                  }), (0, a.jsx)("span", {
                    onClick: function() {
                      g(""), p("")
                    },
                    children: u.A.deleteFile
                  })]
                }), (0, a.jsx)("img", {
                  src: h,
                  alt: "Icon",
                  className: d().uploadCardImage
                })]
              })
            })]
          }), (0, a.jsxs)("span", {
            className: d().addButtonSpan,
            onClick: y,
            children: [b ? u.A.loading : u.A.addButton, " ", n("dashboard.premium.layout.simplistic_settings.button_modal.add_button_cta")]
          })]
        })
      }
      var H = o(44923),
        W = o(87256),
        z = o(39768);

      function V({
        buttons: e,
        setButtons: t,
        openModal: o,
        setCurrentModal: i
      }) {
        let s = (0, _.kj)(),
          [l, n] = (0, r.useState)(e),
          [c, u] = (0, r.useState)(null),
          [p, b] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
          b(!0)
        }, []), (0, r.useEffect)(() => {
          n(e)
        }, [e]);
        let f = (0, H.FR)((0, H.MS)(H.AN, {
            activationConstraint: {
              distance: 10
            }
          })),
          h = async e => {
            u(null);
            let {
              active: o,
              over: a
            } = e;
            if (!a || o.id === a.id) return;
            let r = l.findIndex(e => e.id === o.id),
              i = l.findIndex(e => e.id === a.id);
            if (-1 === r || -1 === i || i === r) return;
            let d = (0, W.VE)(l, r, i),
              c = d.map(e => ({
                id: e.id
              }));
            n(d), t(d), (await fetch("https://guns.lol/api/dashboard/premium/buttons/order", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                newOrder: c
              })
            })).ok || m.oR.error(s("dashboard.premium.layout.simplistic_settings.button_list.order_error"))
          };
        return p ? (0, a.jsxs)(H.Mp, {
          sensors: f,
          collisionDetection: H.fp,
          onDragStart: e => {
            let {
              active: t
            } = e, o = l.find(e => e.id === t.id);
            o && u(o)
          },
          onDragEnd: h,
          children: [(0, a.jsx)(W.gB, {
            items: l.map(e => e.id),
            strategy: W.vl,
            children: (0, a.jsx)("div", {
              className: d().buttons,
              "data-vaul-no-drag": !0,
              children: l.map(e => (0, a.jsx)(J, {
                item: e,
                setButtons: t,
                openModal: o,
                setCurrentModal: i
              }, e.id))
            })
          }), (0, a.jsx)(H.Hd, {
            children: c && (0, a.jsx)(J, {
              item: c,
              setButtons: t,
              openModal: o,
              setCurrentModal: i,
              isOverlay: !0
            })
          })]
        }) : null
      }

      function J({
        item: e,
        setButtons: t,
        openModal: o,
        setCurrentModal: r,
        isOverlay: i = !1
      }) {
        let s = (0, _.kj)(),
          {
            attributes: l,
            listeners: n,
            setNodeRef: c,
            transform: m,
            transition: p,
            isDragging: b
          } = (0, W.gl)({
            id: e.id,
            animateLayoutChanges: () => !1
          }),
          f = {
            transform: z.Ks.Transform.toString(m),
            transition: p,
            opacity: +!b
          };
        return (0, a.jsxs)("div", {
          ref: c,
          style: f,
          className: d().buttonContainer,
          children: [(0, a.jsx)("div", {
            className: d().dragHandleContainer,
            ...l,
            ...n,
            children: u.A.dragHandle
          }), (0, a.jsx)("div", {
            className: d().buttonWrapper,
            children: (0, a.jsx)("div", {
              className: d().buttonPreview,
              children: (0, a.jsxs)("div", {
                className: d().buttonGap,
                children: [(0, a.jsxs)("div", {
                  className: d().buttonDiv,
                  children: [(0, a.jsx)("span", {
                    className: d().editButton,
                    onClick: () => {
                      o(), r({
                        modify: !0,
                        buttonTitle: e.button_title,
                        buttonUrl: e.button_url,
                        buttonIcon: e.button_icon,
                        id: e.id,
                        category: "edit"
                      })
                    },
                    children: u.A.editButton
                  }), (0, a.jsx)("span", {
                    className: d().deleteButton,
                    onClick: () => O(e.id, t, s),
                    children: u.A.deleteButton
                  })]
                }), (0, a.jsx)(M.A, {
                  icon: u.A.title,
                  featureName: s("dashboard.premium.layout.simplistic_settings.button_modal.title_label"),
                  readOnly: !0,
                  value: e.button_title
                }), (0, a.jsx)(M.A, {
                  prefix: "https://",
                  prefixLength: 89,
                  icon: u.A.url,
                  readOnly: !0,
                  featureName: s("dashboard.premium.layout.simplistic_settings.button_modal.url_label"),
                  value: e.button_url.replace("https://", "")
                }), "" !== e.button_icon && (0, a.jsx)("div", {
                  className: d().iconUpload,
                  children: (0, a.jsx)("img", {
                    src: e.button_icon,
                    alt: "Icon",
                    className: d().uploadCardImage
                  })
                })]
              })
            })
          })]
        })
      }
      var q = o(13782);
      let K = ({
        buttonBorderRadius: e,
        setButtonBorderRadius: t,
        buttonShadow: o,
        setButtonShadow: i,
        textAlign: s,
        setTextAlign: l,
        showUrl: n,
        setShowUrl: m,
        buttons: b,
        setButtons: f
      }) => {
        let h = (0, _.kj)(),
          [g, y] = (0, r.useState)(!1),
          [x, j] = (0, r.useState)(""),
          [v, N] = (0, r.useState)(""),
          [S, k] = (0, r.useState)({
            modify: !1,
            buttonTitle: "",
            buttonUrl: "",
            buttonIcon: "",
            id: "",
            category: ""
          }),
          w = "add" === S.category ? h("dashboard.premium.layout.simplistic_settings.button_modal.add_title") : "edit" == S.category ? h("dashboard.premium.layout.simplistic_settings.button_modal.edit_title") : "",
          C = [{
            value: 10,
            label: h("dashboard.premium.layout.simplistic_settings.button_radius.marks.ten")
          }, {
            value: 20,
            label: h("dashboard.premium.layout.simplistic_settings.button_radius.marks.twenty")
          }, {
            value: 30,
            label: h("dashboard.premium.layout.simplistic_settings.button_radius.marks.thirty")
          }],
          U = [{
            value: "center",
            label: h("dashboard.premium.layout.simplistic_settings.text_align.center")
          }, {
            value: "right",
            label: h("dashboard.premium.layout.simplistic_settings.text_align.right")
          }, {
            value: "left",
            label: h("dashboard.premium.layout.simplistic_settings.text_align.left")
          }];
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(q.A, {
            opened: g,
            onClose: () => y(!1),
            centered: !0,
            title: w,
            size: "435px",
            children: "add" === S.category ? (0, a.jsx)($, {
              buttonTitle: x,
              buttonUrl: v,
              setButtonTitle: j,
              setButtonUrl: N,
              setButtons: f,
              modalClose: () => y(!1)
            }) : "edit" === S.category && (0, a.jsx)(P, {
              buttonTitle: S.buttonTitle,
              buttonUrl: S.buttonUrl,
              buttonIcon: S.buttonIcon,
              buttonID: S.id,
              modalClose: () => y(!1),
              setButtons: f
            })
          }), (0, a.jsxs)("div", {
            className: d().simplisticLayout,
            children: [(0, a.jsxs)("div", {
              className: d().buttonEditor,
              children: [(0, a.jsxs)("div", {
                className: d().buttonEditorHeading,
                children: [(0, a.jsx)("h1", {
                  children: h("dashboard.premium.layout.simplistic_settings.button_editor.title")
                }), (0, a.jsxs)("span", {
                  onClick: () => {
                    y(!0), k({
                      modify: !1,
                      category: "add",
                      buttonTitle: "",
                      buttonUrl: "",
                      buttonIcon: "",
                      id: ""
                    })
                  },
                  children: [u.A.addButton, " ", h("dashboard.premium.layout.simplistic_settings.button_editor.add_button")]
                })]
              }), (0, a.jsx)(V, {
                buttons: b,
                setButtons: f,
                openModal: () => y(!0),
                setCurrentModal: k
              })]
            }), (0, a.jsxs)("div", {
              className: d().settings,
              children: [(0, a.jsx)("div", {
                className: d().buttonSettingsHeading,
                children: (0, a.jsx)("h1", {
                  children: h("dashboard.premium.layout.simplistic_settings.settings_title")
                })
              }), (0, a.jsxs)("div", {
                className: d().settingsContainer,
                children: [(0, a.jsx)(p.A, {
                  featureName: h("dashboard.premium.layout.simplistic_settings.text_align.label"),
                  value: s,
                  onChangeFunction: e => {
                    l(e)
                  },
                  icon: u.A.title,
                  data: U
                }), (0, a.jsx)(F.A, {
                  featureName: h("dashboard.premium.layout.simplistic_settings.show_url"),
                  checked: n,
                  onChangeFunction: e => m(e.currentTarget.checked)
                }), (0, a.jsx)(F.A, {
                  featureName: h("dashboard.premium.layout.simplistic_settings.button_shadow"),
                  checked: o,
                  onChangeFunction: e => i(e.currentTarget.checked)
                }), (0, a.jsx)(c.A, {
                  featureName: h("dashboard.premium.layout.simplistic_settings.button_radius.label"),
                  value: e,
                  label: e => `${e}px`,
                  onChangeFunction: e => {
                    t(e)
                  },
                  min: 0,
                  max: 30,
                  marks: C
                })]
              })]
            })]
          })]
        })
      };
      var Y = o(9992),
        Q = o(54834);
      async function X(e, t, o, a, r, i, s = {}) {
        try {
          t(Q.A.loading);
          let l = {
            layout: e.layout,
            border_color: e.border_color,
            border_radius: e.border_radius,
            border_width: e.border_width,
            border_enabled: e.border_enabled,
            border_style: e.border_style ?? "static",
            border_opacity: e.border_opacity ?? .3,
            text_align: e.text_align,
            button_border_radius: e.button_border_radius,
            show_url: e.show_url,
            button_shadow: e.button_shadow,
            join_date: e.join_date ?? "relative",
            avatar_radius: e.avatar_radius ?? 35,
            links_position: e.links_position ?? "center",
            portfolio_border_radius: e.portfolio_border_radius ?? e.border_radius ?? 20
          };
          s.includePortfolioModules && (l.portfolio_modules = e.portfolio_modules ?? []);
          let d = new FormData;
          d.append("payload", JSON.stringify(l)), e.project_image instanceof File && (d.append("image", e.project_image), d.append("project_id", e.project_id));
          let n = await fetch("https://guns.lol/api/dashboard/premium/layout", {
              method: "POST",
              body: d
            }),
            c = await n.json();
          if (!n.ok) return m.oR.error(c.error), !1;
          {
            m.oR.success(r("common.unsaved_changes.settings_saved"));
            let {
              project_image: t,
              project_id: s,
              ...l
            } = e, d = {
              ...l,
              ...Array.isArray(c?.portfolio_modules) ? {
                portfolio_modules: c.portfolio_modules
              } : {}
            };
            return i && i(d), a(d), o(!1), !0
          }
        } catch (e) {
          return m.oR.error(r("common.unsaved_changes.unknown_error")), console.error(e.message), !1
        } finally {
          setTimeout(() => {
            t(r("common.unsaved_changes.save_button"))
          }, 500)
        }
      }
      let Z = ({
        isBorderEnabled: e,
        setIsBorderEnabled: t,
        borderColor: o,
        setBorderColor: r,
        borderRadius: i,
        setBorderRadius: s,
        avatarRadius: l,
        setAvatarRadius: m,
        borderWidth: b,
        setBorderWidth: h,
        borderStyle: g,
        setBorderStyle: y,
        borderOpacity: x,
        setBorderOpacity: j,
        linksPosition: v,
        setLinksPosition: N
      }) => {
        let S = (0, _.kj)(),
          k = [{
            value: 20,
            label: S("dashboard.premium.layout.sleek_settings.border_radius.marks.twenty")
          }, {
            value: 50,
            label: S("dashboard.premium.layout.sleek_settings.border_radius.marks.fifty")
          }, {
            value: 80,
            label: S("dashboard.premium.layout.sleek_settings.border_radius.marks.eighty")
          }],
          w = [{
            value: 0,
            label: S("dashboard.premium.layout.sleek_settings.avatar_radius.marks.zero")
          }, {
            value: 20,
            label: S("dashboard.premium.layout.sleek_settings.avatar_radius.marks.twenty")
          }, {
            value: 50,
            label: S("dashboard.premium.layout.sleek_settings.avatar_radius.marks.fifty")
          }, {
            value: 80,
            label: S("dashboard.premium.layout.sleek_settings.avatar_radius.marks.eighty")
          }],
          C = [{
            value: 2,
            label: S("dashboard.premium.layout.sleek_settings.border_width.marks.two")
          }, {
            value: 5,
            label: S("dashboard.premium.layout.sleek_settings.border_width.marks.five")
          }, {
            value: 8,
            label: S("dashboard.premium.layout.sleek_settings.border_width.marks.eight")
          }],
          U = [{
            value: "center",
            label: S("dashboard.premium.layout.links_alignment.center")
          }, {
            value: "left",
            label: S("dashboard.premium.layout.links_alignment.left")
          }, {
            value: "right",
            label: S("dashboard.premium.layout.links_alignment.right")
          }],
          G = [{
            value: "static",
            label: S("dashboard.premium.layout.border_style.static")
          }, {
            value: "dashed",
            label: S("dashboard.premium.layout.border_style.dashed")
          }, {
            value: "shimmer",
            label: S("dashboard.premium.layout.border_style.shimmer")
          }, {
            value: "pulse",
            label: S("dashboard.premium.layout.border_style.pulse")
          }],
          A = e ? d().buttonEnabled : d().buttonDisabled;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            className: `${d().generalComponentContainer} ${d().modernLayoutComponentLeft}`,
            children: [(0, a.jsx)("div", {
              className: d().generalComponentLeft,
              style: {
                gap: "35px"
              },
              children: (0, a.jsxs)("div", {
                className: d().featureRow,
                style: {
                  flexDirection: "column",
                  gap: "10px"
                },
                children: [(0, a.jsx)("span", {
                  className: A,
                  onClick: () => t(!e),
                  children: S(e ? "dashboard.premium.layout.sleek_settings.border.disable_button" : "dashboard.premium.layout.sleek_settings.border.enable_button")
                }), e && (0, a.jsxs)("div", {
                  className: d().borderDiv,
                  children: [(0, a.jsxs)("div", {
                    className: d().borderControlsRow,
                    children: [(0, a.jsx)(n.A, {
                      featureName: S("dashboard.premium.layout.sleek_settings.border.color_label"),
                      onChangeFunction: r,
                      value: o
                    }), (0, a.jsx)(p.A, {
                      featureName: S("dashboard.premium.layout.border_style.label"),
                      data: G,
                      value: g ?? "static",
                      onChangeFunction: y,
                      icon: u.A.layout
                    })]
                  }), (0, a.jsxs)("div", {
                    className: d().borderControlsRow,
                    children: [(0, a.jsx)(c.A, {
                      featureName: S("dashboard.premium.layout.sleek_settings.border.width_label"),
                      onChangeFunction: h,
                      value: b,
                      min: 1,
                      max: 10,
                      step: 1,
                      label: e => `${e}px`,
                      marks: C
                    }), (0, a.jsx)(c.A, {
                      featureName: S("dashboard.premium.layout.border_opacity.label"),
                      onChangeFunction: j,
                      value: x,
                      min: 0,
                      max: 1,
                      step: .01,
                      label: e => `${Math.floor(100*e)}%`,
                      marks: [{
                        value: .2,
                        label: "20%"
                      }, {
                        value: .5,
                        label: "50%"
                      }, {
                        value: .8,
                        label: "80%"
                      }]
                    })]
                  })]
                })]
              })
            }), (0, a.jsx)("div", {
              className: d().generalComponentLeft,
              children: (0, a.jsxs)("div", {
                className: d().featureRow,
                style: {
                  marginBottom: 35
                },
                children: [(0, a.jsx)(c.A, {
                  featureName: S("dashboard.premium.layout.sleek_settings.border_radius.label"),
                  onChangeFunction: s,
                  value: i,
                  min: 0,
                  max: 100,
                  step: 1,
                  label: e => `${e}px`,
                  marks: k
                }), (0, a.jsx)(c.A, {
                  featureName: S("dashboard.premium.layout.sleek_settings.avatar_radius.label"),
                  onChangeFunction: m,
                  value: l,
                  min: 0,
                  max: 100,
                  step: 1,
                  label: e => `${e}px`,
                  marks: w
                }), (0, a.jsx)(f.A, {
                  featureName: S("dashboard.premium.layout.links_alignment.label"),
                  helpDescription: S("dashboard.premium.layout.links_alignment.description"),
                  element: (0, a.jsx)(p.A, {
                    value: v,
                    onChangeFunction: N,
                    icon: u.A.layout,
                    data: U
                  })
                })]
              })
            })]
          })
        })
      };
      var ee = o(47650),
        et = o(77599),
        eo = o(17440),
        ea = o(58295);
      let er = {
        hero: (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "currentColor",
            d: "m19.002 10.5l-1.062-2.44L15.5 7l2.44-1.062L19.002 3.5l1.064 2.438L22.502 7l-2.438 1.062zM19.002 20.5l-1.062-2.44L15.5 17l2.44-1.062l1.062-2.438l1.064 2.438L22.502 17l-2.438 1.062zM8.502 17L6.39 12.11L1.502 10l4.888-2.11L8.502 3l2.11 4.89L15.502 10l-4.89 2.11z"
          })
        }),
        about: (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "currentColor",
            d: "M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"
          })
        }),
        projects: u.A.image,
        custom: u.A.typewriterDescripion,
        audio: (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "currentColor",
            d: "M12 3v10.55A4 4 0 1 0 14 17V7h4V3z"
          })
        }),
        skills: (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "currentColor",
            d: "m8 18l-6-6l6-6l1.425 1.425L4.85 12L9.4 16.575zm8 0l-1.425-1.425L19.15 12L14.6 7.425L16 6l6 6z"
          })
        })
      };
      var ei = o(52131),
        es = o(55442);
      let el = ["hero"],
        ed = ["about", "projects", "skills", "custom", "audio"],
        en = ["hero", "about", "projects", "custom", "audio", "skills"],
        ec = {
          hero: "dashboard.premium.layout.portfolio_settings.modules.hero.label",
          about: "dashboard.premium.layout.portfolio_settings.modules.about.label",
          projects: "dashboard.premium.layout.portfolio_settings.modules.projects.label",
          custom: "dashboard.premium.layout.portfolio_settings.modules.custom.label",
          audio: "dashboard.premium.layout.portfolio_settings.modules.audio.label",
          skills: "dashboard.premium.layout.portfolio_settings.modules.skills.label"
        },
        eu = {
          hero: "dashboard.premium.layout.portfolio_settings.modules.hero.description",
          about: "dashboard.premium.layout.portfolio_settings.modules.about.description",
          projects: "dashboard.premium.layout.portfolio_settings.modules.projects.description",
          custom: "dashboard.premium.layout.portfolio_settings.modules.custom.description",
          audio: "dashboard.premium.layout.portfolio_settings.modules.audio.description",
          skills: "dashboard.premium.layout.portfolio_settings.modules.skills.description"
        },
        em = e => "audio" === e || "skills" === e ? 1 : 2,
        ep = () => `portfolio-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,
        eb = (e, t) => e(ec[t]),
        e_ = (e, t) => e(eu[t]),
        ef = (e, t) => e(0 === t ? "dashboard.premium.layout.portfolio_settings.about.cards.left" : 1 === t ? "dashboard.premium.layout.portfolio_settings.about.cards.right" : "dashboard.premium.layout.portfolio_settings.about.cards.portfolio"),
        eh = (e, t) => "hero" === e ? {
          show_avatar: !0,
          show_buttons: !0,
          hero_style: "classic"
        } : "about" === e ? {
          title: t ? t("dashboard.premium.layout.portfolio_settings.defaults.about_title") : "About me",
          description: "",
          secondary_description: "",
          tags: [],
          cards: [{
            type: "empty"
          }, {
            type: "empty"
          }]
        } : "projects" === e ? {
          title: t ? t("dashboard.premium.layout.portfolio_settings.defaults.projects_title") : "Featured projects",
          projects: []
        } : "skills" === e ? {
          title: t ? t("dashboard.premium.layout.portfolio_settings.defaults.skills_title") : "Skills & Stack",
          description: "",
          skills: [],
          skill_categories: ["frontend", "backend", "tools", "design", "platforms"]
        } : "audio" === e ? {
          show_lyrics: !1,
          lyrics_track_map: {}
        } : {
          title: t ? t("dashboard.premium.layout.portfolio_settings.defaults.custom_title") : "Custom section",
          content: "",
          text_alignment: "left"
        },
        eg = (e = [], t) => {
          let o = [{
              id: "portfolio-top-hero",
              type: "hero",
              visible: !0,
              settings: eh("hero", t)
            }],
            a = Array.isArray(e) && e.length > 0 ? e.filter(e => en.includes(e?.type)) : o,
            r = a.findIndex(e => e?.type === "hero"),
            i = 0 === r ? a : [r > 0 ? a[r] : o[0], ...a.filter((e, t) => e?.type !== "hero" && t !== r)],
            s = new Set,
            l = {},
            d = i.reduce((e, o, a) => {
              let r, i = en.includes(o.type) ? o.type : "about",
                d = 0 !== a || el.includes(i) ? i : "hero",
                n = o.id || ep(),
                c = (l[d] || 0) + 1;
              return s.has(n) || e.length > 0 && el.includes(d) || c > em(d) ? e : (s.add(n), l[d] = c, e.push({
                id: n,
                type: d,
                visible: !1 !== o.visible,
                settings: (r = {
                  ...eh(d, t),
                  ...o.settings || {}
                }, "hero" === d && (r.hero_style = "centered" === r.hero_style ? "centered" : "classic"), r)
              }), e)
            }, []);
          return 0 === d.length && (d = o), el.includes(d[0].type) || (d[0] = {
            id: d[0].id,
            type: "hero",
            visible: !0,
            settings: eh("hero", t)
          }), d = d.filter((e, t) => 0 === t || !el.includes(e.type))
        };

      function ey(e) {
        let t = (0, _.kj)(),
          {
            modules: o,
            setModules: i
          } = e,
          [s, l] = (0, r.useState)(eg(o, t)),
          [n, c] = (0, r.useState)(null),
          [m, p] = (0, r.useState)(!1),
          [b, f] = (0, r.useState)(null),
          h = (0, H.FR)((0, H.MS)(H.AN, {
            activationConstraint: {
              distance: 10
            }
          }));
        (0, r.useEffect)(() => {
          l(eg(o, t))
        }, [o, t]);
        let g = e => (l(e), i(e), e),
          y = s[0],
          x = s.slice(1),
          j = (0, r.useMemo)(() => s.reduce((e, t) => (e[t.type] = (e[t.type] || 0) + 1, e), {}), [s]),
          v = (e, t) => g(s.map(o => o.id === e ? t(o) : o)),
          N = (e, t) => v(e, e => ({
            ...e,
            settings: {
              ...e.settings,
              ...t
            }
          })),
          S = e => {
            g(s.filter((t, o) => 0 === o || t.id !== e)), b === e && f(null)
          };
        return (0, a.jsxs)("div", {
          className: d().portfolioSettings,
          children: [(0, a.jsx)(q.A, {
            opened: m,
            onClose: () => p(!1),
            title: t("dashboard.premium.layout.portfolio_settings.add_module.title"),
            centered: !0,
            size: "650px",
            children: (0, a.jsx)("div", {
              className: d().portfolioAddModuleGrid,
              children: ed.map(e => {
                let o = j[e] || 0,
                  r = em(e),
                  i = o >= r;
                return (0, a.jsxs)("button", {
                  type: "button",
                  className: d().portfolioAddModuleOption,
                  disabled: i,
                  onClick: () => (e => {
                    if ((j[e] || 0) >= em(e)) return;
                    let o = {
                      id: ep(),
                      type: e,
                      visible: !0,
                      settings: eh(e, t)
                    };
                    g([...s, o]), f("audio" === e ? null : o.id), p(!1)
                  })(e),
                  children: [(0, a.jsx)("span", {
                    className: d().portfolioAddModuleIcon,
                    children: er[e]
                  }), (0, a.jsxs)("div", {
                    className: d().portfolioAddModuleText,
                    children: [(0, a.jsx)("h2", {
                      children: eb(t, e)
                    }), (0, a.jsx)("p", {
                      children: i ? t("dashboard.premium.layout.portfolio_settings.add_module.limit_reached", {
                        limit: r
                      }) : e_(t, e)
                    })]
                  }), !i && (0, a.jsx)("span", {
                    className: d().portfolioAddModuleArrow,
                    children: "+"
                  })]
                }, e)
              })
            })
          }), (0, a.jsx)(ex, {
            ...e,
            module: y,
            updateSettings: N
          }), (0, a.jsxs)("div", {
            className: d().portfolioModulesSettings,
            children: [(0, a.jsxs)("div", {
              className: d().portfolioManagerHeader,
              children: [(0, a.jsxs)("div", {
                children: [(0, a.jsx)("h1", {
                  children: t("dashboard.premium.layout.portfolio_settings.manager.title")
                }), (0, a.jsx)("h3", {
                  children: t("dashboard.premium.layout.portfolio_settings.manager.description")
                })]
              }), (0, a.jsx)("div", {
                className: d().portfolioManagerActions,
                children: (0, a.jsxs)("button", {
                  type: "button",
                  className: d().portfolioInlineButton,
                  onClick: () => p(!0),
                  children: [u.A.addTag, " ", t("dashboard.premium.layout.portfolio_settings.add_module.button")]
                })
              })]
            }), (0, a.jsxs)(H.Mp, {
              sensors: h,
              collisionDetection: H.fp,
              onDragStart: e => {
                let t = x.find(t => t.id === e.active.id);
                t && c(t)
              },
              onDragEnd: e => {
                c(null);
                let {
                  active: t,
                  over: o
                } = e;
                if (!o || t.id === o.id) return;
                let a = x.findIndex(e => e.id === t.id),
                  r = x.findIndex(e => e.id === o.id);
                a < 0 || r < 0 || g([y, ...(0, W.be)(x, a, r)])
              },
              children: [(0, a.jsx)(W.gB, {
                items: x.map(e => e.id),
                strategy: W._G,
                children: (0, a.jsx)("div", {
                  className: d().portfolioModuleList,
                  children: x.map(t => (0, a.jsx)(eN, {
                    module: t,
                    updateModule: v,
                    updateSettings: N,
                    removeModule: S,
                    activeItemId: n?.id ?? null,
                    isExpanded: b === t.id,
                    setExpandedModuleId: f,
                    onSave: e.onSave,
                    saveButtonText: e.saveButtonText,
                    isMonochromeIcons: !0 === e.isMonochromeIcons,
                    audioList: e.audioList
                  }, t.id))
                })
              }), (0, a.jsx)(H.Hd, {
                children: n && (0, a.jsx)(ej, {
                  module: n,
                  isOverlay: !0
                })
              })]
            })]
          })]
        })
      }

      function ex(e) {
        let t = (0, _.kj)(),
          {
            module: o,
            updateSettings: r
          } = e;
        return (0, a.jsxs)("div", {
          className: d().portfolioTopSettings,
          children: [(0, a.jsx)("div", {
            className: d().portfolioTopSettingsHeader,
            children: (0, a.jsxs)("div", {
              children: [(0, a.jsx)("h1", {
                children: t("dashboard.premium.layout.portfolio_settings.modules.hero.label")
              }), (0, a.jsx)("h3", {
                children: t("dashboard.premium.layout.portfolio_settings.hero.description")
              })]
            })
          }), (0, a.jsx)(eA, {
            module: o,
            updateSettings: r,
            isBorderEnabled: e.isBorderEnabled,
            setIsBorderEnabled: e.setIsBorderEnabled,
            borderColor: e.borderColor,
            setBorderColor: e.setBorderColor,
            borderWidth: e.borderWidth,
            setBorderWidth: e.setBorderWidth,
            borderStyle: e.borderStyle,
            setBorderStyle: e.setBorderStyle,
            borderOpacity: e.borderOpacity,
            setBorderOpacity: e.setBorderOpacity,
            portfolioBorderRadius: e.portfolioBorderRadius,
            setPortfolioBorderRadius: e.setPortfolioBorderRadius
          })]
        })
      }

      function ej({
        module: e,
        isOverlay: t = !1
      }) {
        let o = (0, _.kj)();
        return (0, a.jsxs)("div", {
          className: `${d().portfolioModuleItem} ${t?d().portfolioModuleOverlay:""}`,
          children: [(0, a.jsx)("div", {
            className: d().portfolioDragHandleStrip,
            children: u.A.dragHandle
          }), (0, a.jsx)("div", {
            className: d().portfolioModuleContent,
            children: (0, a.jsx)("div", {
              className: d().portfolioModuleHeader,
              children: (0, a.jsxs)("div", {
                className: d().portfolioModuleTitle,
                children: [(0, a.jsx)("span", {
                  className: d().portfolioModuleTypeIcon,
                  children: er[e.type]
                }), (0, a.jsxs)("div", {
                  children: [(0, a.jsx)("h1", {
                    children: eb(o, e.type)
                  }), (0, a.jsx)("h3", {
                    children: e_(o, e.type)
                  })]
                })]
              })
            })
          })]
        })
      }

      function ev({
        onSave: e,
        saveButtonText: t
      }) {
        let o = (0, _.kj)();
        return e ? (0, a.jsx)("span", {
          className: d().saveSecondTabButton,
          role: "button",
          tabIndex: 0,
          onClick: () => e(),
          onKeyDown: t => {
            ("Enter" === t.key || " " === t.key) && (t.preventDefault(), e())
          },
          children: t || o("common.unsaved_changes.save_button")
        }) : null
      }

      function eN({
        module: e,
        updateModule: t,
        updateSettings: o,
        removeModule: r,
        activeItemId: i,
        isExpanded: s,
        setExpandedModuleId: l,
        onSave: n,
        saveButtonText: c,
        isMonochromeIcons: m,
        audioList: p
      }) {
        let b = (0, _.kj)(),
          {
            listeners: f,
            setNodeRef: h,
            transform: g,
            transition: y,
            isDragging: x
          } = (0, W.gl)({
            id: e.id,
            animateLayoutChanges: () => !1
          }),
          j = e_(b, e.type),
          v = {
            transform: z.Ks.Transform.toString(g),
            transition: y,
            opacity: +!x
          };
        return (0, a.jsxs)("div", {
          ref: h,
          style: v,
          className: `${d().portfolioModuleItem} ${i&&i!==e.id?d().portfolioModuleItemCollapsed:""}`,
          children: [(0, a.jsx)("div", {
            className: d().portfolioDragHandleStrip,
            onClick: e => e.stopPropagation(),
            ...f,
            children: u.A.dragHandle
          }), (0, a.jsxs)("div", {
            className: d().portfolioModuleContent,
            children: [(0, a.jsxs)("div", {
              className: `${d().portfolioModuleHeader} `,
              role: "button",
              tabIndex: 0,
              onClick: () => {
                l(s ? null : e.id)
              },
              onKeyDown: t => {
                ("Enter" === t.key || " " === t.key) && (t.preventDefault(), l(s ? null : e.id))
              },
              children: [(0, a.jsxs)("div", {
                className: d().portfolioModuleTitle,
                children: [(0, a.jsx)("span", {
                  className: d().portfolioModuleTypeIcon,
                  children: er[e.type]
                }), (0, a.jsxs)("div", {
                  children: [(0, a.jsx)("h1", {
                    children: eb(b, e.type)
                  }), (0, a.jsx)("h3", {
                    children: j
                  })]
                })]
              }), (0, a.jsxs)("div", {
                className: d().portfolioModuleActions,
                onClick: e => e.stopPropagation(),
                children: [(0, a.jsx)("button", {
                  type: "button",
                  onClick: () => t(e.id, e => ({
                    ...e,
                    visible: !e.visible
                  })),
                  children: e.visible ? ei.A.eye : ei.A.eyeOff
                }), (0, a.jsx)("button", {
                  type: "button",
                  onClick: () => l(s ? null : e.id),
                  children: s ? u.A.moveUp : u.A.moveDown
                }), (0, a.jsx)("button", {
                  type: "button",
                  onClick: () => r(e.id),
                  children: u.A.deleteButton
                })]
              })]
            }), s && (0, a.jsx)(ew, {
              module: e,
              updateSettings: o,
              onSave: n,
              saveButtonText: c,
              isMonochromeIcons: m,
              audioList: p
            })]
          })]
        })
      }

      function eS(e, t, o) {
        return (a, r = "", i = "text") => {
          let s = e.current,
            l = t();
          if (!s) return void o(`${l}${l?"\n":""}${a}${i}${r}`);
          let d = s.selectionStart ?? l.length,
            n = s.selectionEnd ?? l.length,
            c = l.slice(d, n) || i;
          o(`${l.slice(0,d)}${a}${c}${r}${l.slice(n)}`), requestAnimationFrame(() => {
            s.focus(), s.setSelectionRange(d + a.length, d + a.length + c.length)
          })
        }
      }

      function ek({
        insert: e,
        onOptions: t
      }) {
        let o = (0, _.kj)();
        return (0, a.jsxs)("div", {
          className: d().portfolioMarkdownToolbar,
          role: "toolbar",
          children: [(0, a.jsxs)("div", {
            className: d().portfolioToolbarGroup,
            children: [(0, a.jsx)("button", {
              type: "button",
              title: o("dashboard.premium.layout.portfolio_settings.markdown.bold"),
              className: d().portfolioToolbarBtn,
              onClick: () => e("**", "**", o("dashboard.premium.layout.portfolio_settings.markdown.placeholders.bold_text")),
              children: (0, a.jsx)("svg", {
                viewBox: "0 0 24 24",
                width: "14",
                height: "14",
                fill: "currentColor",
                children: (0, a.jsx)("path", {
                  d: "M6 4h8a4 4 0 0 1 0 8H6zm0 8h9a4 4 0 0 1 0 8H6z"
                })
              })
            }), (0, a.jsx)("button", {
              type: "button",
              title: o("dashboard.premium.layout.portfolio_settings.markdown.italic"),
              className: d().portfolioToolbarBtn,
              onClick: () => e("*", "*", o("dashboard.premium.layout.portfolio_settings.markdown.placeholders.italic_text")),
              children: (0, a.jsxs)("svg", {
                viewBox: "0 0 24 24",
                width: "14",
                height: "14",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2.2",
                strokeLinecap: "round",
                children: [(0, a.jsx)("line", {
                  x1: "19",
                  y1: "4",
                  x2: "10",
                  y2: "4"
                }), (0, a.jsx)("line", {
                  x1: "14",
                  y1: "20",
                  x2: "5",
                  y2: "20"
                }), (0, a.jsx)("line", {
                  x1: "15",
                  y1: "4",
                  x2: "9",
                  y2: "20"
                })]
              })
            }), (0, a.jsx)("button", {
              type: "button",
              title: o("dashboard.premium.layout.portfolio_settings.markdown.heading"),
              className: d().portfolioToolbarBtn,
              onClick: () => e("## ", "", o("dashboard.premium.layout.portfolio_settings.markdown.placeholders.heading")),
              children: (0, a.jsx)("svg", {
                viewBox: "0 0 24 24",
                width: "14",
                height: "14",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2.2",
                strokeLinecap: "round",
                children: (0, a.jsx)("path", {
                  d: "M4 6v12M20 6v12M4 12h16"
                })
              })
            }), (0, a.jsx)("div", {
              className: d().portfolioToolbarDivider
            }), (0, a.jsx)("button", {
              type: "button",
              title: o("dashboard.premium.layout.portfolio_settings.markdown.bulleted_list"),
              className: d().portfolioToolbarBtn,
              onClick: () => e("- ", "", o("dashboard.premium.layout.portfolio_settings.markdown.placeholders.list_item")),
              children: (0, a.jsxs)("svg", {
                viewBox: "0 0 24 24",
                width: "14",
                height: "14",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                children: [(0, a.jsx)("line", {
                  x1: "9",
                  y1: "6",
                  x2: "20",
                  y2: "6"
                }), (0, a.jsx)("line", {
                  x1: "9",
                  y1: "12",
                  x2: "20",
                  y2: "12"
                }), (0, a.jsx)("line", {
                  x1: "9",
                  y1: "18",
                  x2: "20",
                  y2: "18"
                }), (0, a.jsx)("circle", {
                  cx: "4",
                  cy: "6",
                  r: "1.5",
                  fill: "currentColor",
                  stroke: "none"
                }), (0, a.jsx)("circle", {
                  cx: "4",
                  cy: "12",
                  r: "1.5",
                  fill: "currentColor",
                  stroke: "none"
                }), (0, a.jsx)("circle", {
                  cx: "4",
                  cy: "18",
                  r: "1.5",
                  fill: "currentColor",
                  stroke: "none"
                })]
              })
            }), (0, a.jsx)("button", {
              type: "button",
              title: o("dashboard.premium.layout.portfolio_settings.markdown.inline_code"),
              className: d().portfolioToolbarBtn,
              onClick: () => e("`", "`", o("dashboard.premium.layout.portfolio_settings.markdown.placeholders.code")),
              children: (0, a.jsxs)("svg", {
                viewBox: "0 0 24 24",
                width: "14",
                height: "14",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2.2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [(0, a.jsx)("polyline", {
                  points: "16 18 22 12 16 6"
                }), (0, a.jsx)("polyline", {
                  points: "8 6 2 12 8 18"
                })]
              })
            }), (0, a.jsx)("button", {
              type: "button",
              title: o("dashboard.premium.layout.portfolio_settings.markdown.link"),
              className: d().portfolioToolbarBtn,
              onClick: () => e("[", "](https://)", o("dashboard.premium.layout.portfolio_settings.markdown.placeholders.link_text")),
              children: (0, a.jsxs)("svg", {
                viewBox: "0 0 24 24",
                width: "14",
                height: "14",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [(0, a.jsx)("path", {
                  d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                }), (0, a.jsx)("path", {
                  d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                })]
              })
            }), (0, a.jsx)("button", {
              type: "button",
              title: o("dashboard.premium.layout.portfolio_settings.markdown.blockquote"),
              className: d().portfolioToolbarBtn,
              onClick: () => e("> ", "", o("dashboard.premium.layout.portfolio_settings.markdown.placeholders.quote")),
              children: (0, a.jsx)("svg", {
                viewBox: "0 0 24 24",
                width: "14",
                height: "14",
                fill: "currentColor",
                children: (0, a.jsx)("path", {
                  d: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                })
              })
            })]
          }), t && (0, a.jsxs)("button", {
            type: "button",
            className: d().portfolioToolbarOptionsBtn,
            onClick: t,
            children: [u.A.layout, " ", o("dashboard.premium.layout.portfolio_settings.markdown.options")]
          })]
        })
      }

      function ew({
        module: e,
        updateSettings: t,
        onSave: o,
        saveButtonText: i,
        isMonochromeIcons: s,
        audioList: l
      }) {
        let n = (0, _.kj)(),
          c = e.settings || {},
          m = (0, r.useRef)(null);
        if ("about" === e.type) return (0, a.jsx)(eB, {
          module: e,
          settings: c,
          updateSettings: t,
          onSave: o,
          saveButtonText: i,
          isMonochromeIcons: s
        });
        if ("projects" === e.type) return (0, a.jsx)(eD, {
          module: e,
          settings: c,
          updateSettings: t,
          onSave: o,
          saveButtonText: i,
          isMonochromeIcons: s
        });
        if ("skills" === e.type) return (0, a.jsx)(eL, {
          module: e,
          settings: c,
          updateSettings: t,
          onSave: o,
          saveButtonText: i,
          isMonochromeIcons: s
        });
        if ("audio" === e.type) return (0, a.jsx)(eC, {
          module: e,
          settings: c,
          updateSettings: t,
          audioList: l
        });
        let b = eS(m, () => c.content || "", o => t(e.id, {
          content: o
        }));
        return (0, a.jsxs)("div", {
          className: d().portfolioFieldStack,
          children: [(0, a.jsx)(M.A, {
            featureName: n("dashboard.premium.layout.portfolio_settings.fields.title"),
            value: c.title || "",
            onChangeFunction: o => t(e.id, {
              title: o.target.value
            }),
            icon: u.A.layout
          }), (0, a.jsx)(p.A, {
            featureName: n("dashboard.premium.layout.portfolio_settings.fields.text_alignment"),
            data: [{
              value: "left",
              label: n("dashboard.premium.layout.portfolio_settings.options.text_alignment.left")
            }, {
              value: "center",
              label: n("dashboard.premium.layout.portfolio_settings.options.text_alignment.center")
            }, {
              value: "right",
              label: n("dashboard.premium.layout.portfolio_settings.options.text_alignment.right")
            }],
            value: c.text_alignment || "left",
            onChangeFunction: o => t(e.id, {
              text_alignment: o
            }),
            icon: u.A.layout
          }), (0, a.jsxs)("div", {
            className: d().portfolioEditorBox,
            children: [(0, a.jsx)(ek, {
              insert: b
            }), (0, a.jsx)("textarea", {
              ref: m,
              className: d().portfolioEditorTextarea,
              value: c.content || "",
              placeholder: n("dashboard.premium.layout.portfolio_settings.custom_text.placeholder"),
              onChange: o => t(e.id, {
                content: o.target.value
              })
            })]
          })]
        })
      }

      function eC({
        module: e,
        settings: t,
        updateSettings: o,
        audioList: i
      }) {
        let s = (0, _.kj)(),
          l = (0, r.useMemo)(() => {
            var e;
            return (e = i) ? "string" == typeof e ? e ? [{
              id: "__single__",
              title: "",
              url: e
            }] : [] : Array.isArray(e) ? e.filter(e => e?.url).map((e, t) => {
              let o = "string" == typeof e.duration ? function(e) {
                if (!e) return;
                let t = e.split(":").map(e => Number(e));
                if (!t.some(e => Number.isNaN(e))) {
                  if (2 === t.length) return 60 * t[0] + t[1];
                  if (3 === t.length) return 3600 * t[0] + 60 * t[1] + t[2]
                }
              }(e.duration) : void 0;
              return {
                id: String(e.id || `audio-${t}`),
                title: String(e.title || ""),
                url: String(e.url || ""),
                duration: o
              }
            }) : [] : []
          }, [i]),
          n = (0, r.useMemo)(() => t?.lyrics_track_map && "object" == typeof t.lyrics_track_map ? t.lyrics_track_map : {}, [t?.lyrics_track_map]),
          [c, b] = (0, r.useState)(l[0]?.id || ""),
          [f, h] = (0, r.useState)(""),
          [g, y] = (0, r.useState)(""),
          [x, j] = (0, r.useState)(!1),
          [v, N] = (0, r.useState)([]),
          [S, k] = (0, r.useState)(""),
          [w, C] = (0, r.useState)(!1),
          U = (0, r.useRef)(null),
          A = (0, r.useMemo)(() => l.find(e => e.id === c) || l[0] || null, [l, c]),
          T = A ? n[A.id] : null;
        (0, r.useEffect)(() => {
          !c && l[0]?.id && b(l[0].id)
        }, [l, c]), (0, r.useEffect)(() => {
          h(""), y(""), N([]), k(""), C(!1)
        }, [A?.id]), (0, r.useEffect)(() => {
          let t = n && "object" == typeof n ? n : {},
            a = Object.entries(t);
          if (0 === a.length) return;
          let r = new Set(l.map(e => String(e.id))),
            i = {};
          for (let [e, t] of a) {
            if (!t || "object" != typeof t) continue;
            let o = String(t.track_id || e || ""),
              a = "";
            if (r.has(e) ? a = e : r.has(o) && (a = o), !a || i[a]) continue;
            let s = {
              ...t
            };
            delete s.track_url, delete s.duration, i[a] = {
              ...s,
              track_id: a
            }
          }
          let s = Object.keys(t).sort(),
            d = Object.keys(i).sort(),
            c = s.length !== d.length || s.some((e, t) => e !== d[t]),
            u = !c && d.some(e => JSON.stringify(t[e]) !== JSON.stringify(i[e]));
          (c || u) && o(e.id, {
            lyrics_track_map: i
          })
        }, [n, l, e.id, o]);
        let B = (t, a, r) => {
            let i = {
              ...n
            };
            a ? i[t] = a : delete i[t];
            let s = Object.values(i).some(e => "string" == typeof e?.synced_lyrics && e.synced_lyrics.trim().length > 0);
            o(e.id, {
              lyrics_track_map: i,
              show_lyrics: "boolean" == typeof r ? r : s
            })
          },
          L = async () => {
            if (!A) return;
            let e = f.trim(),
              t = g.trim();
            if (!e) return void m.oR.error(s("dashboard.premium.layout.portfolio_settings.lyrics_editor.errors.track_required"));
            j(!0), N([]), k(""), C(!0);
            try {
              let o = await fetch("https://guns.lol/api/dashboard/premium/lyrics/search", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    track_name: e,
                    artist_name: t,
                    duration: A.duration && A.duration > 0 ? A.duration : void 0
                  })
                }),
                a = [];
              if (o.ok) {
                let e = await o.json();
                a = Array.isArray(e?.results) ? e.results : []
              }
              if (0 === a.length) return void k(s("dashboard.premium.layout.portfolio_settings.lyrics_editor.messages.no_results"));
              N(a.slice(0, 8))
            } catch (e) {
              console.error(e), m.oR.error(s("dashboard.premium.layout.portfolio_settings.lyrics_editor.errors.fetch_failed"))
            } finally {
              j(!1)
            }
          }, R = async e => {
            let t = e.target.files?.[0];
            if (e.target.value = "", !A || !t) return;
            let o = String(t.name || "").toLowerCase();
            if (!o.endsWith(".lrc") && !o.endsWith(".elrc")) return void m.oR.error(s("dashboard.premium.layout.portfolio_settings.lyrics_editor.errors.lrc_required"));
            if (t.size > 358400) return void m.oR.error(s("dashboard.premium.layout.portfolio_settings.lyrics_editor.errors.lrc_too_large"));
            try {
              let e = await t.text(),
                o = (0, es.h6)(e);
              if (!o) return void m.oR.error(s("dashboard.premium.layout.portfolio_settings.lyrics_editor.errors.no_timed_lines"));
              B(A.id, {
                track_id: A.id,
                track_title: A.title,
                track_name: f.trim() || A.title,
                artist_name: g.trim(),
                album_name: "",
                synced_lyrics: o.syncedLyrics,
                plain_lyrics: o.plainLyrics
              }, !0), N([]), k(""), m.oR.success(s(1 === o.lineCount ? "dashboard.premium.layout.portfolio_settings.lyrics_editor.messages.import_success_one" : "dashboard.premium.layout.portfolio_settings.lyrics_editor.messages.import_success_other", {
                count: o.lineCount
              }))
            } catch (e) {
              console.error(e), m.oR.error(s("dashboard.premium.layout.portfolio_settings.lyrics_editor.errors.lrc_read_failed"))
            }
          };
        return (0, a.jsxs)("div", {
          className: d().portfolioFieldStack,
          children: [(0, a.jsx)(q.A, {
            opened: w,
            onClose: () => C(!1),
            title: s("dashboard.premium.layout.portfolio_settings.lyrics_editor.modal.title"),
            centered: !0,
            size: "560px",
            children: (0, a.jsx)("div", {
              className: d().portfolioFieldStack,
              children: x ? (0, a.jsxs)("div", {
                className: G().uploaderMessage,
                children: [(0, a.jsx)("span", {
                  children: u.A.loading
                }), (0, a.jsx)("h1", {
                  children: s("dashboard.premium.layout.portfolio_settings.lyrics_editor.modal.searching")
                })]
              }) : v.length > 0 ? (0, a.jsx)("div", {
                className: d().portfolioLyricsResults,
                children: v.map(e => {
                  let t = String(e.trackName || e.name || "").trim(),
                    o = String(e.artistName || "").trim(),
                    r = `${e.id||"result"}-${t}-${o}`;
                  return (0, a.jsxs)("button", {
                    type: "button",
                    className: d().portfolioLyricsResult,
                    onClick: () => {
                      if (!A) return void m.oR.error(s("dashboard.premium.layout.portfolio_settings.lyrics_editor.errors.select_track_first"));
                      let a = String(e.syncedLyrics || "").trim();
                      a ? (B(A.id, {
                        track_id: A.id,
                        track_title: A.title,
                        track_name: t || f.trim() || A.title,
                        artist_name: o || g.trim(),
                        album_name: String(e.albumName || "").trim(),
                        synced_lyrics: a,
                        plain_lyrics: String(e.plainLyrics || "")
                      }, !0), N([]), k(""), C(!1), m.oR.success(s("dashboard.premium.layout.portfolio_settings.lyrics_editor.messages.applied"))) : m.oR.error(s("dashboard.premium.layout.portfolio_settings.lyrics_editor.errors.result_missing_synced"))
                    },
                    children: [(0, a.jsxs)("div", {
                      className: d().portfolioLyricsResultMeta,
                      children: [(0, a.jsx)("h2", {
                        children: t || A?.title || s("dashboard.premium.layout.portfolio_settings.lyrics_editor.modal.selected_track")
                      }), (0, a.jsx)("p", {
                        children: [o, e.albumName].filter(Boolean).join(" • ") || s("dashboard.premium.layout.portfolio_settings.lyrics_editor.modal.result_fallback")
                      })]
                    }), (0, a.jsx)("span", {
                      children: s("dashboard.premium.layout.portfolio_settings.lyrics_editor.actions.apply")
                    })]
                  }, r)
                })
              }) : (0, a.jsx)("p", {
                className: d().portfolioAudioLyricsHint,
                children: S || s("dashboard.premium.layout.portfolio_settings.lyrics_editor.messages.search_prompt")
              })
            })
          }), 0 === l.length ? (0, a.jsx)("div", {
            className: d().portfolioAudioLyricsEmpty,
            children: s("dashboard.premium.layout.portfolio_settings.lyrics_editor.messages.empty_state")
          }) : (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(p.A, {
              featureName: s("dashboard.premium.layout.portfolio_settings.lyrics_editor.fields.audio_track"),
              value: A?.id || "",
              data: l.map((e, t) => ({
                value: e.id,
                label: e.title || s("dashboard.premium.layout.portfolio_settings.lyrics_editor.fields.audio_track_fallback", {
                  number: t + 1
                })
              })),
              onChangeFunction: e => b(String(e || "")),
              icon: er.audio
            }), T?.synced_lyrics ? (0, a.jsx)("div", {
              className: d().portfolioAudioLyricsActions,
              children: (0, a.jsxs)("button", {
                type: "button",
                className: d().portfolioInlineButton,
                onClick: () => {
                  B(A.id, null)
                },
                children: [u.A.deleteButton, " ", s("dashboard.premium.layout.portfolio_settings.lyrics_editor.actions.remove_lyrics")]
              })
            }) : (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(M.A, {
                featureName: s("dashboard.premium.layout.portfolio_settings.lyrics_editor.fields.track_name"),
                placeholder: s("dashboard.premium.layout.portfolio_settings.lyrics_editor.fields.track_name_placeholder"),
                value: f,
                onChangeFunction: e => h(e.target.value),
                icon: er.audio
              }), (0, a.jsx)(M.A, {
                featureName: s("dashboard.premium.layout.portfolio_settings.lyrics_editor.fields.artist_optional"),
                placeholder: s("dashboard.premium.layout.portfolio_settings.lyrics_editor.fields.artist_placeholder"),
                value: g,
                onChangeFunction: e => y(e.target.value),
                icon: u.A.artist
              }), (0, a.jsxs)("div", {
                className: d().portfolioAudioLyricsActions,
                children: [(0, a.jsxs)("button", {
                  type: "button",
                  className: d().portfolioInlineButton,
                  disabled: x,
                  onClick: L,
                  children: [x ? u.A.loading : er.audio, x ? s("dashboard.premium.layout.portfolio_settings.lyrics_editor.actions.searching") : s("dashboard.premium.layout.portfolio_settings.lyrics_editor.actions.search")]
                }), (0, a.jsxs)("button", {
                  type: "button",
                  className: d().portfolioInlineButton,
                  onClick: () => U.current?.click(),
                  children: [u.A.upload || u.A.addTag || er.audio, " ", s("dashboard.premium.layout.portfolio_settings.lyrics_editor.actions.import_lrc")]
                })]
              }), (0, a.jsx)("input", {
                ref: U,
                type: "file",
                accept: ".lrc,.elrc,text/plain",
                onChange: R,
                style: {
                  display: "none"
                }
              })]
            })]
          })]
        })
      }
      let eU = [{
        value: "classic",
        labelKey: "dashboard.premium.layout.portfolio_settings.hero.style.classic",
        svg: (0, a.jsxs)("svg", {
          viewBox: "0 0 54 38",
          fill: "none",
          children: [(0, a.jsx)("circle", {
            cx: "14",
            cy: "19",
            r: "8",
            fill: "currentColor",
            fillOpacity: "0.35"
          }), (0, a.jsx)("rect", {
            x: "27",
            y: "12",
            width: "20",
            height: "3",
            rx: "1.5",
            fill: "currentColor",
            fillOpacity: "0.6"
          }), (0, a.jsx)("rect", {
            x: "27",
            y: "18",
            width: "16",
            height: "2.5",
            rx: "1.25",
            fill: "currentColor",
            fillOpacity: "0.3"
          }), (0, a.jsx)("rect", {
            x: "27",
            y: "23",
            width: "12",
            height: "2",
            rx: "1",
            fill: "currentColor",
            fillOpacity: "0.2"
          }), (0, a.jsx)("rect", {
            x: "27",
            y: "28",
            width: "9",
            height: "2",
            rx: "1",
            fill: "currentColor",
            fillOpacity: "0.15"
          })]
        })
      }, {
        value: "centered",
        labelKey: "dashboard.premium.layout.portfolio_settings.hero.style.centered",
        svg: (0, a.jsxs)("svg", {
          viewBox: "0 0 54 38",
          fill: "none",
          children: [(0, a.jsx)("circle", {
            cx: "27",
            cy: "11",
            r: "7",
            fill: "currentColor",
            fillOpacity: "0.35"
          }), (0, a.jsx)("rect", {
            x: "12",
            y: "22",
            width: "30",
            height: "3",
            rx: "1.5",
            fill: "currentColor",
            fillOpacity: "0.6"
          }), (0, a.jsx)("rect", {
            x: "16",
            y: "28",
            width: "22",
            height: "2.5",
            rx: "1.25",
            fill: "currentColor",
            fillOpacity: "0.3"
          }), (0, a.jsx)("rect", {
            x: "20",
            y: "33",
            width: "14",
            height: "2",
            rx: "1",
            fill: "currentColor",
            fillOpacity: "0.2"
          })]
        })
      }];

      function eG({
        value: e,
        onChange: t
      }) {
        let o = (0, _.kj)();
        return (0, a.jsx)("div", {
          className: d().heroStylePicker,
          children: eU.map(r => (0, a.jsxs)("button", {
            type: "button",
            className: `${d().heroStyleOption} ${e===r.value?d().heroStyleOptionSelected:""}`,
            onClick: () => t(r.value),
            children: [(0, a.jsx)("span", {
              className: d().heroStylePreview,
              children: r.svg
            }), (0, a.jsx)("span", {
              className: d().heroStyleLabel,
              children: o(r.labelKey)
            })]
          }, r.value))
        })
      }

      function eA({
        module: e,
        updateSettings: t,
        isBorderEnabled: o,
        setIsBorderEnabled: r,
        borderColor: i,
        setBorderColor: s,
        borderWidth: l,
        setBorderWidth: m,
        borderStyle: b,
        setBorderStyle: f,
        borderOpacity: h,
        setBorderOpacity: g,
        portfolioBorderRadius: y,
        setPortfolioBorderRadius: x
      }) {
        let j = (0, _.kj)(),
          v = e.settings || {},
          N = [{
            value: 20,
            label: j("dashboard.premium.layout.default_settings.border_radius.marks.twenty")
          }, {
            value: 50,
            label: j("dashboard.premium.layout.default_settings.border_radius.marks.fifty")
          }, {
            value: 80,
            label: j("dashboard.premium.layout.default_settings.border_radius.marks.eighty")
          }],
          S = [{
            value: 2,
            label: j("dashboard.premium.layout.default_settings.border_width.marks.two")
          }, {
            value: 5,
            label: j("dashboard.premium.layout.default_settings.border_width.marks.five")
          }, {
            value: 8,
            label: j("dashboard.premium.layout.default_settings.border_width.marks.eight")
          }],
          k = [{
            value: "static",
            label: j("dashboard.premium.layout.border_style.static")
          }, {
            value: "dashed",
            label: j("dashboard.premium.layout.border_style.dashed")
          }, {
            value: "shimmer",
            label: j("dashboard.premium.layout.border_style.shimmer")
          }, {
            value: "pulse",
            label: j("dashboard.premium.layout.border_style.pulse")
          }],
          w = [
            ["show_avatar", j("dashboard.premium.layout.portfolio_settings.hero.toggles.profile_picture")],
            ["show_buttons", j("dashboard.premium.layout.portfolio_settings.hero.toggles.socials")]
          ];
        return (0, a.jsxs)("div", {
          className: d().portfolioFieldStack,
          children: [(0, a.jsxs)("div", {
            className: d().heroStyleSection,
            children: [(0, a.jsx)("span", {
              className: d().portfolioFieldLabel,
              children: j("dashboard.premium.layout.portfolio_settings.hero.style.label")
            }), (0, a.jsx)(eG, {
              value: v.hero_style || "classic",
              onChange: o => t(e.id, {
                hero_style: o
              })
            })]
          }), (0, a.jsxs)("div", {
            className: d().heroToggleSection,
            children: [(0, a.jsx)("h1", {
              className: d().heroToggleLabel,
              children: j("dashboard.premium.layout.portfolio_settings.hero.elements_label")
            }), (0, a.jsxs)("div", {
              className: d().heroElementsPanel,
              children: [(0, a.jsxs)("div", {
                className: d().heroRadiusBlock,
                children: [(0, a.jsxs)("div", {
                  className: d().borderToggleRow,
                  children: [(0, a.jsx)("span", {
                    className: d().heroVisibilityRowLabel,
                    children: j(o ? "dashboard.premium.layout.default_settings.border.disable_button" : "dashboard.premium.layout.default_settings.border.enable_button")
                  }), (0, a.jsx)("div", {
                    className: d().heroVisibilitySwitchCell,
                    children: (0, a.jsx)(F.A, {
                      checked: o,
                      onChange: e => r(e.target.checked)
                    })
                  })]
                }), o && (0, a.jsxs)("div", {
                  className: d().borderDiv,
                  children: [(0, a.jsxs)("div", {
                    className: d().borderControlsRow,
                    children: [(0, a.jsx)(n.A, {
                      featureName: j("dashboard.premium.layout.default_settings.border.color_label"),
                      onChangeFunction: s,
                      value: i
                    }), (0, a.jsx)(p.A, {
                      featureName: j("dashboard.premium.layout.border_style.label"),
                      data: k,
                      value: b ?? "static",
                      onChangeFunction: f,
                      icon: u.A.layout
                    })]
                  }), (0, a.jsxs)("div", {
                    className: d().borderControlsRow,
                    children: [(0, a.jsx)(c.A, {
                      featureName: j("dashboard.premium.layout.default_settings.border.width_label"),
                      onChangeFunction: m,
                      value: l,
                      min: 1,
                      max: 10,
                      step: 1,
                      label: e => `${e}px`,
                      marks: S
                    }), (0, a.jsx)(c.A, {
                      featureName: j("dashboard.premium.layout.border_opacity.label"),
                      onChangeFunction: g,
                      value: h,
                      min: 0,
                      max: 1,
                      step: .01,
                      label: e => `${Math.floor(100*e)}%`,
                      marks: [{
                        value: .2,
                        label: "20%"
                      }, {
                        value: .5,
                        label: "50%"
                      }, {
                        value: .8,
                        label: "80%"
                      }]
                    })]
                  })]
                })]
              }), (0, a.jsxs)("div", {
                className: d().heroRadiusBlock,
                children: [(0, a.jsx)("div", {
                  className: d().heroRadiusHeader,
                  children: (0, a.jsx)("span", {
                    className: d().heroVisibilityRowLabel,
                    children: j("dashboard.premium.layout.portfolio_settings.hero.border_radius_label")
                  })
                }), (0, a.jsx)("div", {
                  className: d().heroRadiusSliderWrap,
                  children: (0, a.jsx)(c.A, {
                    onChangeFunction: x,
                    value: y,
                    min: 0,
                    max: 100,
                    step: 1,
                    label: e => `${e}px`,
                    marks: N,
                    className: d().heroRadiusSliderCard
                  })
                })]
              }), (0, a.jsx)("div", {
                className: d().heroVisibilityList,
                children: w.map(([o, r]) => (0, a.jsxs)("div", {
                  className: d().heroVisibilityRow,
                  children: [(0, a.jsx)("span", {
                    className: d().heroVisibilityRowLabel,
                    children: r
                  }), (0, a.jsx)("div", {
                    className: d().heroVisibilitySwitchCell,
                    children: (0, a.jsx)(F.A, {
                      checked: !1 !== v[o],
                      onChange: a => t(e.id, {
                        [o]: a.target.checked
                      })
                    })
                  })]
                }, o))
              })]
            })]
          })]
        })
      }

      function eT({
        opened: e,
        onClose: t,
        card: o,
        cardLabel: r,
        hasOtherDiscordPresence: i,
        onCardUpdate: s,
        onSave: l
      }) {
        let d = (0, _.kj)(),
          n = eF(o),
          c = (0, w.Pp)({
            type: "empty" === n ? "youtube" : n,
            value: function(e) {
              if ("second_tab" !== e.type) return "";
              let t = e.second_tab_config?.second_tab;
              if (!t || "object" != typeof t) return "";
              let o = Object.keys(t)[0];
              return o && t[o] || ""
            }(o),
            clock_face_style: o.second_tab_config?.clock_face_style,
            clock_hidden: o.second_tab_config?.clock_hidden,
            clock_time_format: o.second_tab_config?.clock_time_format
          });
        return (0, a.jsx)(k.A, {
          opened: e,
          onOpenedChange: e => {
            e || t()
          },
          showTrigger: !1,
          title: r,
          applyLabel: d("dashboard.premium.layout.modern_settings.second_tab.save_button"),
          enabled: "empty" !== n,
          widget: c,
          discordPresenceSettings: w.iz,
          isPremium: !0,
          discordConnected: !0,
          disabledTypes: i ? ["discord_presence"] : [],
          showDiscordSettings: !1,
          showPremiumIndicators: !1,
          onApply: ({
            enabled: e,
            widget: t
          }) => {
            let o = s(e ? "discord_presence" === t.type ? {
              type: "discord_presence"
            } : {
              type: "second_tab",
              second_tab_config: eM({
                second_tab_enabled: !0,
                second_tab: {
                  [t.type]: t.value
                },
                clock_face_style: t.clock_face_style,
                clock_hidden: t.clock_hidden,
                clock_time_format: t.clock_time_format
              })
            } : {
              type: "empty"
            });
            return m.oR.success(d("dashboard.premium.layout.portfolio_settings.about.second_tab_save_success")), l?.({
              portfolio_modules: o
            }), !0
          }
        })
      }

      function eB({
        module: e,
        settings: t,
        updateSettings: o,
        onSave: i,
        saveButtonText: s,
        isMonochromeIcons: l
      }) {
        let n = (0, _.kj)(),
          [c, p] = (0, r.useState)(null),
          [b, f] = (0, r.useState)(!1),
          [h, g] = (0, r.useState)(""),
          y = (0, r.useRef)(null),
          x = function(e) {
            let t = Array.isArray(e) ? e.slice(0, 2) : [];
            for (; t.length < 2;) t.push({
              type: "empty"
            });
            return t.map(e => ({
              type: e?.type === "discord_presence" ? "discord_presence" : e?.type === "second_tab" ? "second_tab" : "empty",
              ...e?.type === "second_tab" ? {
                second_tab_config: eM(e.second_tab_config)
              } : {}
            }))
          }(t.cards),
          j = eK(t.tags),
          v = t => {
            let a = eq(t ?? h);
            if (a) {
              if (j.length >= 24) return void m.oR.error(n("dashboard.premium.layout.portfolio_settings.skills.max_tags_error"));
              if (j.some(e => e.toLowerCase() === a.toLowerCase())) return void m.oR.error(n("dashboard.premium.layout.portfolio_settings.skills.duplicate_tag_error"));
              o(e.id, {
                tags: [...j, a]
              }), g("")
            }
          };
        return (0, a.jsxs)("div", {
          className: d().portfolioFieldStack,
          children: [null !== c && (0, a.jsx)(eT, {
            opened: b,
            onClose: () => f(!1),
            card: x[c],
            cardLabel: ef(n, c),
            hasOtherDiscordPresence: x.some((e, t) => t !== c && "discord_presence" === e.type),
            onCardUpdate: t => {
              let a;
              return (a = [...x])[c] = t, o(e.id, {
                cards: a
              })
            },
            onSave: i
          }), (0, a.jsx)(M.A, {
            featureName: n("dashboard.premium.layout.portfolio_settings.fields.section_title"),
            value: t.title || "",
            onChangeFunction: t => o(e.id, {
              title: t.target.value
            }),
            icon: u.A.layout
          }), (0, a.jsx)(ea.A, {
            featureName: n("dashboard.premium.layout.portfolio_settings.about.subtitle_label"),
            value: t.description || "",
            onChangeFunction: t => o(e.id, {
              description: t.target.value
            })
          }), (0, a.jsxs)("div", {
            className: d().portfolioAboutBioSection,
            children: [(0, a.jsx)("span", {
              className: d().portfolioFieldLabel,
              children: n("dashboard.premium.layout.portfolio_settings.about.bio_label")
            }), (0, a.jsxs)("div", {
              className: d().portfolioEditorBox,
              children: [(0, a.jsx)(ek, {
                insert: eS(y, () => t.secondary_description || "", t => o(e.id, {
                  secondary_description: t
                }))
              }), (0, a.jsx)("textarea", {
                ref: y,
                className: d().portfolioEditorTextarea,
                value: t.secondary_description || "",
                placeholder: n("dashboard.premium.layout.portfolio_settings.about.bio_placeholder"),
                onChange: t => o(e.id, {
                  secondary_description: t.target.value
                })
              })]
            })]
          }), (0, a.jsxs)("div", {
            className: d().portfolioSkillsSection,
            children: [(0, a.jsx)("span", {
              className: d().portfolioFieldLabel,
              children: n("dashboard.premium.layout.portfolio_settings.about.skill_tags")
            }), j.length > 0 && (0, a.jsx)("div", {
              className: d().portfolioTagList,
              children: j.map(t => (0, a.jsxs)("div", {
                className: d().portfolioProjectTag,
                children: [(0, a.jsx)(eV, {
                  skill: t,
                  isMonochrome: l
                }), (0, a.jsx)("span", {
                  className: d().portfolioSkillTagLabel,
                  children: t
                }), (0, a.jsx)("button", {
                  type: "button",
                  onClick: () => o(e.id, {
                    tags: j.filter(e => e !== t)
                  }),
                  children: u.A.removeTag
                })]
              }, t))
            }), (0, a.jsxs)("div", {
              className: d().portfolioTagInputRow,
              children: [(0, a.jsx)(eJ, {
                value: h,
                onChange: g,
                onCommit: e => v(e),
                placeholder: n("dashboard.premium.layout.portfolio_settings.about.skill_placeholder"),
                disabled: j.length >= 24,
                isMonochrome: l
              }), (0, a.jsx)("button", {
                type: "button",
                className: d().portfolioTagAddButton,
                disabled: j.length >= 24 || !eq(h),
                onClick: () => v(),
                children: u.A.addTag
              })]
            })]
          }), x.map((e, t) => {
            let o = eF(e),
              r = {
                discord_presence: "Discord Presence",
                youtube: "YouTube",
                spotify: "Spotify",
                discord: "Discord",
                telegram: "Telegram",
                roblox: "Roblox",
                github: "GitHub",
                lastfm: "LastFM",
                timezone: "Timezone",
                weather: n("dashboard.customize.general.profile_widget.options.weather")
              },
              i = {
                discord_presence: u.A.discord,
                youtube: u.A.youtube,
                spotify: u.A.spotify,
                discord: u.A.discord,
                telegram: u.A.telegram,
                roblox: u.A.roblox,
                github: u.A.github,
                lastfm: u.A.lastfm,
                timezone: u.A.timezone,
                weather: u.A.weather
              };
            return (0, a.jsxs)("div", {
              className: d().portfolioCardTriggerRow,
              children: [(0, a.jsxs)("div", {
                className: d().portfolioCardTriggerInfo,
                children: [(0, a.jsx)("span", {
                  className: d().portfolioCardTriggerLabel,
                  children: ef(n, t)
                }), (0, a.jsxs)("span", {
                  className: `${d().portfolioCardTriggerCurrent} ${"empty"===o?d().portfolioCardTriggerDisabled:""}`,
                  children: ["empty" !== o && (0, a.jsx)("span", {
                    children: i[o]
                  }), "empty" !== o ? r[o] : "Disabled"]
                })]
              }), (0, a.jsx)("button", {
                type: "button",
                className: d().portfolioInlineButton,
                onClick: () => {
                  p(t), f(!0)
                },
                children: "empty" === o ? n("dashboard.premium.layout.portfolio_settings.about.enable_button") : n("dashboard.premium.layout.portfolio_settings.about.configure_button")
              })]
            }, t)
          })]
        })
      }

      function eL({
        module: e,
        settings: t,
        updateSettings: o,
        onSave: i,
        saveButtonText: s,
        isMonochromeIcons: l
      }) {
        let n = (0, _.kj)(),
          [c, p] = (0, r.useState)(""),
          b = eK(t.skills),
          f = (0, H.FR)((0, H.MS)(H.AN, {
            activationConstraint: {
              distance: 6
            }
          })),
          h = t => {
            let a = eq(t ?? c);
            if (a) {
              if (b.length >= 24) return void m.oR.error(n("dashboard.premium.layout.portfolio_settings.skills.max_skills_error"));
              if (b.some(e => e.toLowerCase() === a.toLowerCase())) return void m.oR.error(n("dashboard.premium.layout.portfolio_settings.skills.duplicate_skill_error"));
              o(e.id, {
                skills: [...b, a]
              }), p("")
            }
          };
        return (0, a.jsxs)("div", {
          className: d().portfolioFieldStack,
          children: [(0, a.jsx)(M.A, {
            featureName: n("dashboard.premium.layout.portfolio_settings.fields.section_title"),
            value: t.title || "",
            onChangeFunction: t => o(e.id, {
              title: t.target.value
            }),
            icon: u.A.layout
          }), (0, a.jsx)(ea.A, {
            featureName: n("dashboard.premium.layout.portfolio_settings.fields.description"),
            value: t.description || "",
            placeholder: n("dashboard.premium.layout.portfolio_settings.skills.description_placeholder"),
            onChangeFunction: t => o(e.id, {
              description: t.target.value
            })
          }), (0, a.jsxs)("div", {
            className: d().portfolioSkillsSection,
            children: [(0, a.jsxs)("span", {
              className: d().portfolioFieldLabel,
              children: [n("dashboard.premium.layout.portfolio_settings.skills.label"), " ", (0, a.jsxs)("span", {
                className: d().portfolioFieldCount,
                children: [b.length, "/24"]
              })]
            }), b.length > 0 && (0, a.jsx)(H.Mp, {
              sensors: f,
              collisionDetection: H.fp,
              onDragEnd: t => {
                let {
                  active: a,
                  over: r
                } = t;
                if (!r || a.id === r.id) return;
                let i = b.findIndex(e => e === a.id),
                  s = b.findIndex(e => e === r.id);
                i < 0 || s < 0 || o(e.id, {
                  skills: (0, W.be)(b, i, s)
                })
              },
              children: (0, a.jsx)(W.gB, {
                items: b,
                strategy: W.m$,
                children: (0, a.jsx)("div", {
                  className: d().portfolioTagList,
                  children: b.map(t => (0, a.jsx)(eR, {
                    tag: t,
                    onRemove: () => o(e.id, {
                      skills: b.filter(e => e !== t)
                    }),
                    isMonochrome: l
                  }, t))
                })
              })
            }), (0, a.jsxs)("div", {
              className: d().portfolioTagInputRow,
              children: [(0, a.jsx)(eJ, {
                value: c,
                onChange: p,
                onCommit: e => h(e),
                placeholder: n("dashboard.premium.layout.portfolio_settings.skills.placeholder"),
                disabled: b.length >= 24,
                isMonochrome: l
              }), (0, a.jsx)("button", {
                type: "button",
                className: d().portfolioTagAddButton,
                disabled: b.length >= 24 || !eq(c),
                onClick: () => h(),
                children: u.A.addTag
              })]
            })]
          })]
        })
      }

      function eR({
        tag: e,
        onRemove: t,
        isMonochrome: o
      }) {
        let {
          listeners: r,
          setNodeRef: i,
          transform: s,
          transition: l,
          isDragging: n
        } = (0, W.gl)({
          id: e
        }), c = {
          transform: z.Ks.Transform.toString(s),
          transition: l,
          opacity: n ? .45 : 1
        };
        return (0, a.jsxs)("div", {
          ref: i,
          style: c,
          className: d().portfolioProjectTag,
          children: [(0, a.jsx)("span", {
            className: d().portfolioProjectTagHandle,
            ...r,
            children: u.A.dragHandle
          }), (0, a.jsx)(eV, {
            skill: e,
            isMonochrome: o
          }), (0, a.jsx)("span", {
            className: d().portfolioSkillTagLabel,
            children: e
          }), (0, a.jsx)("button", {
            type: "button",
            onClick: t,
            children: u.A.removeTag
          })]
        })
      }

      function eF(e) {
        if ("empty" === e.type) return "empty";
        if ("discord_presence" === e.type) return "discord_presence";
        let t = e.second_tab_config?.second_tab;
        return (t && "object" == typeof t ? Object.keys(t)[0] : null) || "youtube"
      }

      function eM(e) {
        let t = e?.second_tab && "object" == typeof e.second_tab ? e.second_tab : {},
          o = Object.keys(t)[0];
        return {
          second_tab_enabled: e?.second_tab_enabled !== !1,
          second_tab: o ? {
            [o]: t[o] || ""
          } : {},
          clock_face_style: e?.clock_face_style === "light" ? "light" : "dark",
          clock_hidden: e?.clock_hidden === !0,
          clock_time_format: e?.clock_time_format === "12h" ? "12h" : "24h"
        }
      }

      function eD({
        module: e,
        settings: t,
        updateSettings: o,
        onSave: i,
        saveButtonText: s,
        isMonochromeIcons: l
      }) {
        var n;
        let c = (0, _.kj)(),
          m = (Array.isArray(n = t.projects) ? n : []).slice(0, 4).map((e, t) => ({
            id: e.id || `project-${t}`,
            name: e.name || "",
            description: e.description || "",
            image: e.image || "",
            link: e.link || "",
            tags: ez(e.tags)
          })),
          [p, b] = (0, r.useState)(null),
          [f, h] = (0, r.useState)(null),
          [g, y] = (0, r.useState)(!1),
          x = (0, H.FR)((0, H.MS)(H.AN, {
            activationConstraint: {
              distance: 8
            }
          })),
          j = t => {
            o(e.id, {
              projects: t
            })
          },
          v = m.find(e => e.id === f) ?? null,
          N = m.findIndex(e => e.id === f);
        return (0, a.jsxs)("div", {
          className: d().portfolioFieldStack,
          children: [v && (0, a.jsx)(eE, {
            opened: g,
            onClose: () => y(!1),
            moduleId: e.id,
            project: v,
            projects: m,
            index: N,
            updateSettings: o,
            isMonochromeIcons: l,
            onSave: i,
            saveButtonText: s
          }), (0, a.jsx)(M.A, {
            featureName: c("dashboard.premium.layout.portfolio_settings.fields.section_title"),
            value: t.title || "",
            onChangeFunction: t => o(e.id, {
              title: t.target.value
            }),
            icon: u.A.layout
          }), (0, a.jsxs)("button", {
            type: "button",
            className: d().portfolioInlineButton,
            disabled: m.length >= 4,
            onClick: () => {
              if (m.length >= 4) return;
              let e = {
                id: ep(),
                name: "",
                description: "",
                image: "",
                link: "",
                tags: []
              };
              j([...m, e]), h(e.id), y(!0)
            },
            children: [u.A.addTag, " ", c("dashboard.premium.layout.portfolio_settings.projects.add_button"), " ", m.length > 0 && (0, a.jsxs)("span", {
              className: d().portfolioInlineCount,
              children: [m.length, "/4"]
            })]
          }), (0, a.jsxs)(H.Mp, {
            sensors: x,
            collisionDetection: H.fp,
            onDragStart: e => {
              let t = m.find(t => t.id === e.active.id);
              t && b(t)
            },
            onDragEnd: e => {
              b(null);
              let {
                active: t,
                over: o
              } = e;
              if (!o || t.id === o.id) return;
              let a = m.findIndex(e => e.id === t.id),
                r = m.findIndex(e => e.id === o.id);
              a < 0 || r < 0 || j((0, W.be)(m, a, r))
            },
            children: [(0, a.jsx)(W.gB, {
              items: m.map(e => e.id),
              strategy: W._G,
              children: (0, a.jsx)("div", {
                className: d().portfolioProjectList,
                children: m.map((e, t) => (0, a.jsx)(eO, {
                  project: e,
                  index: t,
                  onEdit: () => {
                    h(e.id), y(!0)
                  },
                  onDelete: () => j(m.filter((e, o) => o !== t))
                }, e.id))
              })
            }), (0, a.jsx)(H.Hd, {
              children: p && (0, a.jsx)(eI, {
                project: p,
                index: m.findIndex(e => e.id === p.id),
                isOverlay: !0
              })
            })]
          })]
        })
      }

      function eI({
        project: e,
        index: t,
        isOverlay: o = !1
      }) {
        let r = (0, _.kj)();
        return (0, a.jsxs)("div", {
          className: `${d().portfolioProjectEditor} ${o?d().portfolioModuleOverlay:""}`,
          children: [(0, a.jsx)("div", {
            className: d().portfolioProjectDragStrip,
            children: u.A.dragHandle
          }), (0, a.jsx)("div", {
            className: d().portfolioProjectContent,
            children: (0, a.jsx)("div", {
              className: d().portfolioProjectHeader,
              children: (0, a.jsx)("div", {
                className: d().portfolioModuleTitle,
                children: (0, a.jsxs)("div", {
                  children: [(0, a.jsx)("h1", {
                    children: e.name || r("dashboard.premium.layout.portfolio_settings.projects.fallback_title", {
                      number: t + 1
                    })
                  }), (0, a.jsx)("h3", {
                    children: e.link || r("dashboard.premium.layout.portfolio_settings.projects.card_label")
                  })]
                })
              })
            })
          })]
        })
      }

      function eO({
        project: e,
        index: t,
        onEdit: o,
        onDelete: r
      }) {
        let i = (0, _.kj)(),
          {
            listeners: s,
            setNodeRef: l,
            transform: n,
            transition: c,
            isDragging: m
          } = (0, W.gl)({
            id: e.id,
            animateLayoutChanges: () => !1
          }),
          p = {
            transform: z.Ks.Transform.toString(n),
            transition: c,
            opacity: +!m
          };
        return (0, a.jsxs)("div", {
          ref: l,
          style: p,
          className: d().portfolioProjectEditor,
          children: [(0, a.jsx)("div", {
            className: d().portfolioProjectDragStrip,
            onClick: e => e.stopPropagation(),
            ...s,
            children: u.A.dragHandle
          }), (0, a.jsx)("div", {
            className: d().portfolioProjectContent,
            children: (0, a.jsxs)("div", {
              className: d().portfolioProjectHeader,
              role: "button",
              tabIndex: 0,
              onClick: o,
              onKeyDown: e => {
                ("Enter" === e.key || " " === e.key) && (e.preventDefault(), o())
              },
              children: [(0, a.jsx)("div", {
                className: d().portfolioModuleTitle,
                children: (0, a.jsxs)("div", {
                  children: [(0, a.jsx)("h1", {
                    children: e.name || i("dashboard.premium.layout.portfolio_settings.projects.fallback_title", {
                      number: t + 1
                    })
                  }), (0, a.jsx)("h3", {
                    children: e.description || e.link || i("dashboard.premium.layout.portfolio_settings.projects.tap_to_configure")
                  })]
                })
              }), (0, a.jsxs)("div", {
                className: d().portfolioModuleActions,
                onClick: e => e.stopPropagation(),
                children: [(0, a.jsx)("button", {
                  type: "button",
                  onClick: o,
                  children: (0, a.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    width: "16",
                    height: "16",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0, a.jsx)("path", {
                      d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                    }), (0, a.jsx)("path", {
                      d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                    })]
                  })
                }), (0, a.jsx)("button", {
                  type: "button",
                  onClick: r,
                  children: u.A.deleteButton
                })]
              })]
            })
          })]
        })
      }

      function eE({
        opened: e,
        onClose: t,
        moduleId: o,
        project: i,
        projects: s,
        index: l,
        updateSettings: n,
        isMonochromeIcons: c,
        onSave: p,
        saveButtonText: b
      }) {
        let f = (0, _.kj)(),
          [h, g] = (0, r.useState)(""),
          [y, x] = (0, r.useState)(null),
          [j, v] = (0, r.useState)(""),
          [N, S] = (0, r.useState)(!1),
          k = (0, H.FR)((0, H.MS)(H.AN, {
            activationConstraint: {
              distance: 6
            }
          })),
          w = ez(i.tags),
          C = j || (N ? "" : i.image || "");
        (0, r.useEffect)(() => () => {
          j && URL.revokeObjectURL(j)
        }, [j]);
        let U = e => {
            eH(o, n, s, l, {
              tags: ez(e)
            })
          },
          G = e => {
            let t = eW(e ?? h);
            if (t) {
              if (w.length >= 4) return void m.oR.error(f("dashboard.premium.layout.portfolio_settings.projects.max_tags_error"));
              if (w.some(e => e.toLowerCase() === t.toLowerCase())) return void m.oR.error(f("dashboard.premium.layout.portfolio_settings.projects.duplicate_tag_error"));
              U([...w, t]), g("")
            }
          },
          A = async () => {
            let e = N ? "" : i.image || "",
              t = null,
              a = [...s],
              r = {
                ...a[l]
              };
            r.image = e, a[l] = r, t = n(o, {
              projects: a
            });
            let d = await p?.({
              portfolio_modules: t,
              project_image: y,
              project_id: i.id
            });
            return !1 !== d && (j && URL.revokeObjectURL(j), v(""), x(null), S(!1)), !1 !== d
          }, T = i.name || f("dashboard.premium.layout.portfolio_settings.projects.fallback_title", {
            number: l + 1
          });
        return (0, a.jsx)(q.A, {
          opened: e,
          onClose: () => {
            j && URL.revokeObjectURL(j), v(""), x(null), S(!1), t()
          },
          title: T,
          centered: !0,
          size: "540px",
          children: (0, a.jsxs)("div", {
            className: d().portfolioFieldStack,
            children: [(0, a.jsx)(M.A, {
              featureName: f("dashboard.premium.layout.portfolio_settings.projects.name_label"),
              placeholder: f("dashboard.premium.layout.portfolio_settings.projects.name_placeholder"),
              value: i.name || "",
              onChangeFunction: e => eH(o, n, s, l, {
                name: e.target.value
              }),
              icon: u.A.layout
            }), (0, a.jsx)(ea.A, {
              featureName: f("dashboard.premium.layout.portfolio_settings.fields.description"),
              placeholder: f("dashboard.premium.layout.portfolio_settings.projects.description_placeholder"),
              value: i.description || "",
              onChangeFunction: e => eH(o, n, s, l, {
                description: e.target.value
              })
            }), (0, a.jsx)(e$, {
              image: C,
              previewFileName: y?.name || "",
              onFileChange: e => {
                let t = e.target.files?.[0];
                if (t) {
                  if (!(0, B.vH)(t, "cover")) {
                    e.target.value = "";
                    return
                  }
                  j && URL.revokeObjectURL(j), x(t), v(URL.createObjectURL(t)), S(!1), e.target.value = ""
                }
              },
              onClear: () => {
                j && URL.revokeObjectURL(j), v(""), x(null), S(!0)
              }
            }), (0, a.jsx)(M.A, {
              featureName: f("dashboard.premium.layout.portfolio_settings.projects.link_label"),
              value: i.link || "",
              placeholder: f("dashboard.premium.layout.portfolio_settings.projects.link_placeholder"),
              onChangeFunction: e => eH(o, n, s, l, {
                link: e.target.value
              }),
              icon: u.A.url
            }), (0, a.jsxs)("div", {
              className: d().portfolioTagEditor,
              children: [(0, a.jsxs)("div", {
                className: d().portfolioTagInputRow,
                children: [(0, a.jsx)(eJ, {
                  value: h,
                  placeholder: f("dashboard.premium.layout.portfolio_settings.projects.tag_placeholder"),
                  onChange: g,
                  onCommit: e => G(e),
                  disabled: w.length >= 4,
                  isMonochrome: c,
                  showFeatureName: !0
                }), (0, a.jsx)("button", {
                  type: "button",
                  className: d().portfolioTagAddButton,
                  disabled: w.length >= 4 || !eW(h),
                  onClick: () => G(),
                  children: u.A.addTag
                })]
              }), w.length > 0 && (0, a.jsx)(H.Mp, {
                sensors: k,
                collisionDetection: H.fp,
                onDragEnd: e => {
                  let {
                    active: t,
                    over: o
                  } = e;
                  if (!o || t.id === o.id) return;
                  let a = w.findIndex(e => e === t.id),
                    r = w.findIndex(e => e === o.id);
                  a < 0 || r < 0 || U((0, W.be)(w, a, r))
                },
                children: (0, a.jsx)(W.gB, {
                  items: w,
                  strategy: W.m$,
                  children: (0, a.jsx)("div", {
                    className: d().portfolioTagList,
                    style: {
                      marginTop: 0
                    },
                    children: w.map(e => (0, a.jsx)(eP, {
                      tag: e,
                      onRemove: () => U(w.filter(t => t !== e)),
                      isMonochrome: c
                    }, e))
                  })
                })
              })]
            }), (0, a.jsx)(ev, {
              onSave: A,
              saveButtonText: b
            })]
          })
        })
      }

      function eP({
        tag: e,
        onRemove: t,
        isMonochrome: o
      }) {
        let {
          listeners: r,
          setNodeRef: i,
          transform: s,
          transition: l,
          isDragging: n
        } = (0, W.gl)({
          id: e
        }), c = {
          transform: z.Ks.Transform.toString(s),
          transition: l,
          opacity: n ? .45 : 1
        };
        return (0, a.jsxs)("div", {
          ref: i,
          style: c,
          className: d().portfolioProjectTag,
          children: [(0, a.jsx)("span", {
            className: d().portfolioProjectTagHandle,
            ...r,
            children: u.A.dragHandle
          }), (0, a.jsx)(eV, {
            skill: e,
            isMonochrome: o
          }), (0, a.jsx)("span", {
            className: d().portfolioSkillTagLabel,
            children: e
          }), (0, a.jsx)("button", {
            type: "button",
            onClick: t,
            children: u.A.removeTag
          })]
        })
      }

      function e$({
        image: e,
        previewFileName: t,
        onFileChange: o,
        onClear: r
      }) {
        let i = (0, _.kj)();
        return (0, a.jsxs)("div", {
          className: G().uploadCardWrapper,
          style: {
            padding: 0,
            width: "100%"
          },
          children: [(0, a.jsx)("h1", {
            className: d().portfolioProjectUploadCardTitle,
            children: i("dashboard.premium.layout.portfolio_settings.projects.cover_image")
          }), (0, a.jsx)("div", {
            className: `${G().uploadCard} ${d().portfolioProjectUploadCard}`,
            children: e ? (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsxs)("div", {
                className: G().fileBadge,
                children: [(0, a.jsx)("span", {
                  children: ((e, t = "") => {
                    let o = t || e || "",
                      a = o.lastIndexOf(".");
                    if (a >= 0 && a < o.length - 1) return `.${o.slice(a+1)}`;
                    try {
                      let t = new URL(e).pathname || "",
                        o = t.lastIndexOf(".");
                      if (o >= 0 && o < t.length - 1) return `.${t.slice(o+1)}`
                    } catch {}
                    return ".IMG"
                  })(e, t).toUpperCase()
                }), (0, a.jsx)("span", {
                  onClick: r,
                  children: u.A.deleteFile
                })]
              }), (0, a.jsx)("img", {
                src: e,
                alt: i("dashboard.premium.layout.portfolio_settings.projects.image_alt"),
                className: G().uploadCardImage
              })]
            }) : (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsxs)("div", {
                className: G().uploadCardText,
                children: [u.A.image, (0, a.jsx)("h1", {
                  children: i("dashboard.premium.layout.portfolio_settings.projects.upload_prompt")
                })]
              }), (0, a.jsx)("input", {
                type: "file",
                accept: L.vJ.cover.join(", "),
                onChange: o
              })]
            })
          })]
        })
      }

      function eH(e, t, o, a, r) {
        let i = [...o];
        return i[a] = {
          ...i[a],
          ...r
        }, t(e, {
          projects: i
        })
      }

      function eW(e) {
        return "string" == typeof e ? e.replace(/,/g, " ").replace(/\s+/g, " ").trim().slice(0, 28) : ""
      }

      function ez(e) {
        return (Array.isArray(e) ? e : "string" == typeof e ? e.split(",") : []).reduce((e, t) => {
          let o = eW(t);
          return o && !e.some(e => e.toLowerCase() === o.toLowerCase()) && e.length < 4 && e.push(o), e
        }, [])
      }

      function eV({
        skill: e,
        isMonochrome: t
      }) {
        let o = (0, eo.h)(e),
          r = "string" == typeof e ? (0, et.RU)(e) : e,
          i = t ? "currentColor" : o ? `#${o.hex}` : r?.color ?? "currentColor";
        return o ? (0, a.jsx)("svg", {
          className: d().skillAutocompleteIcon,
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          style: {
            fill: i
          },
          children: (0, a.jsx)("path", {
            d: o.path
          })
        }) : (0, a.jsx)("span", {
          className: d().skillAutocompleteDot,
          style: {
            background: i
          }
        })
      }

      function eJ({
        value: e,
        onChange: t,
        onCommit: o,
        placeholder: i,
        disabled: s,
        isMonochrome: l,
        showFeatureName: n
      }) {
        let c = (0, _.kj)(),
          [m, p] = (0, r.useState)(!1),
          [b, f] = (0, r.useState)(0),
          [h, g] = (0, r.useState)(null),
          y = (0, r.useRef)(null),
          x = (0, r.useMemo)(() => (0, et.Nl)(e, 7), [e]);
        (0, r.useEffect)(() => {
          f(0)
        }, [e]), (0, r.useEffect)(() => {
          let e = e => {
            y.current && !y.current.contains(e.target) && p(!1)
          };
          return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
        }, []), (0, r.useEffect)(() => {
          if (!m || !y.current) return void g(null);
          let e = () => {
            if (!y.current) return;
            let e = y.current.getBoundingClientRect(),
              t = Math.min(44 * x.length + 2, 280);
            window.innerHeight - e.bottom < t + 8 && e.top > t + 8 ? g({
              bottom: window.innerHeight - e.top + 5,
              left: e.left,
              width: e.width
            }) : g({
              top: e.bottom + 5,
              left: e.left,
              width: e.width
            })
          };
          e();
          let t = () => p(!1);
          return window.addEventListener("scroll", t, !0), window.addEventListener("resize", e), () => {
            window.removeEventListener("scroll", t, !0), window.removeEventListener("resize", e)
          }
        }, [m, x.length]);
        let j = e => {
          o(e), p(!1)
        };
        return (0, a.jsxs)("div", {
          ref: y,
          className: d().skillAutocompleteWrap,
          children: [(0, a.jsx)(M.A, {
            featureName: n ? c("dashboard.premium.layout.portfolio_settings.skills.label") : "",
            value: e,
            placeholder: i,
            disabled: s,
            onChangeFunction: e => {
              t(e.target.value), p(!0)
            },
            onKeyDown: t => {
              if (!m || 0 === x.length) {
                ("Enter" === t.key || "," === t.key) && e.trim() && (t.preventDefault(), j(e.trim()));
                return
              }
              "ArrowDown" === t.key ? (t.preventDefault(), f(e => Math.min(e + 1, x.length - 1))) : "ArrowUp" === t.key ? (t.preventDefault(), f(e => Math.max(e - 1, 0))) : "Enter" === t.key || "," === t.key ? (t.preventDefault(), j(x[b].name)) : "Escape" === t.key && p(!1)
            },
            onFocus: () => {
              e.trim() && p(!0)
            },
            icon: u.A.addTag
          }), m && x.length > 0 && h && "undefined" != typeof document && (0, ee.createPortal)((0, a.jsx)("div", {
            className: d().skillAutocompleteDropdown,
            style: {
              position: "fixed",
              top: h.top,
              bottom: h.bottom,
              left: h.left,
              width: h.width,
              zIndex: 0x3b9ac9ff
            },
            children: x.map((e, t) => (0, a.jsxs)("button", {
              type: "button",
              className: `${d().skillAutocompleteSuggestion} ${t===b?d().skillAutocompleteSuggestionActive:""}`,
              onMouseDown: t => {
                t.preventDefault(), j(e.name)
              },
              onMouseEnter: () => f(t),
              children: [(0, a.jsx)(eV, {
                skill: e,
                isMonochrome: l
              }), (0, a.jsx)("span", {
                children: e.name
              })]
            }, e.id))
          }), document.body)]
        })
      }

      function eq(e) {
        return "string" == typeof e ? e.replace(/,/g, " ").replace(/\s+/g, " ").trim().slice(0, 32) : ""
      }

      function eK(e) {
        return (Array.isArray(e) ? e : []).reduce((e, t) => {
          let o = eq(t);
          return o && !e.some(e => e.toLowerCase() === o.toLowerCase()) && e.length < 24 && e.push(o), e
        }, [])
      }
      var eY = o(98241),
        eQ = o.n(eY);
      let eX = e => Array.isArray(e) ? e.map(eX) : e && "object" == typeof e ? Object.keys(e).sort().reduce((t, o) => (t[o] = eX(e[o]), t), {}) : e,
        eZ = e => JSON.stringify(eX(e)),
        e0 = {
          hero: {
            hero_style: "classic",
            show_avatar: !0,
            show_buttons: !0
          },
          about: {},
          projects: {},
          custom: {
            text_alignment: "left"
          },
          skills: {
            skill_categories: ["frontend", "backend", "tools", "design", "platforms"]
          },
          audio: {
            show_lyrics: !1,
            lyrics_track_map: {}
          }
        },
        e1 = e => Array.isArray(e) ? e.map(e => e && "object" == typeof e ? {
          ...e,
          visible: !1 !== e.visible,
          settings: ((e, t) => {
            let o = t && "object" == typeof t ? {
                ...t
              } : {},
              a = e0[e] || {};
            if (Object.keys(a).forEach(e => {
                void 0 !== o[e] && eZ(o[e]) === eZ(a[e]) && delete o[e]
              }), "audio" === e) {
              let e = Object.entries(o.lyrics_track_map && "object" == typeof o.lyrics_track_map && !Array.isArray(o.lyrics_track_map) ? o.lyrics_track_map : {}).reduce((e, [t, o]) => (o && "object" == typeof o && ("string" == typeof o.synced_lyrics ? o.synced_lyrics.trim() : "") && (e[t] = o), e), {});
              Object.keys(e).length > 0 ? o.lyrics_track_map = e : delete o.lyrics_track_map, !0 !== o.show_lyrics && delete o.show_lyrics
            }
            return Object.keys(o).forEach(e => {
              void 0 === o[e] && delete o[e]
            }), o
          })(e.type, e.settings)
        } : e) : [],
        e2 = e => e && "object" == typeof e ? {
          ...e,
          portfolio_modules: e1(e.portfolio_modules)
        } : e,
        e4 = ({
          data: e
        }) => {
          let t = (0, _.kj)(),
            o = e.config,
            l = o.premium,
            n = l.layout,
            c = e.account_created,
            [u, p] = (0, r.useState)({
              layout: n,
              border_enabled: l.border_enabled,
              border_color: l.border_color,
              border_radius: l.border_radius,
              border_width: l.border_width,
              border_style: l.border_style ?? "static",
              border_opacity: l.border_opacity ?? .3,
              button_border_radius: l.button_border_radius,
              button_shadow: l.button_shadow,
              text_align: l.text_align,
              show_url: l.show_url,
              join_date: l.join_date ?? "relative",
              avatar_radius: l.avatar_radius ?? 35,
              links_position: l.links_position ?? "center",
              portfolio_border_radius: l.portfolio_border_radius ?? l.border_radius ?? 20,
              portfolio_modules: l.portfolio_modules ?? []
            }),
            [b, f] = (0, r.useState)(l.banner),
            [h, g] = (0, r.useState)(l.buttons),
            [y, x] = (0, r.useState)(u),
            [j, v] = (0, r.useState)(!1),
            N = t("common.unsaved_changes.save_button"),
            [S, k] = (0, r.useState)(N);
          (0, r.useEffect)(() => {
            v(eZ(e2(y)) !== eZ(e2(u)))
          }, [y, u]);
          let w = e => t => {
              x(o => ({
                ...o,
                [e]: t
              }))
            },
            U = (e = {}) => {
              let o = Object.keys(e).length > 0 ? {
                  ...y,
                  ...e
                } : y,
                a = eZ(e1(o.portfolio_modules)) !== eZ(e1(u.portfolio_modules)),
                r = "portfolio" === o.layout && (Object.prototype.hasOwnProperty.call(e, "portfolio_modules") || a);
              return X(o, k, v, p, t, x, {
                includePortfolioModules: r
              })
            };
          return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(m.l$, {
              richColors: !0,
              position: "top-center",
              theme: "dark",
              className: eQ().toasterStyles,
              icons: {
                success: Q.A.successToast
              },
              visibleToasts: 2
            }), (0, a.jsx)(i.N, {
              children: j && (0, a.jsx)("div", {
                className: eQ().unsavedChangesWrapper,
                children: (0, a.jsxs)(s.P.div, {
                  className: eQ().unsavedChangesBar,
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
                  children: [(0, a.jsx)("h1", {
                    children: t("common.unsaved_changes.title")
                  }), (0, a.jsx)("h1", {
                    className: eQ().compactText,
                    children: t("common.unsaved_changes.compact")
                  }), (0, a.jsxs)("div", {
                    className: eQ().unsavedChangesButtons,
                    children: [(0, a.jsx)("span", {
                      className: eQ().resetButton,
                      onClick: () => {
                        x(u), v(!1)
                      },
                      children: t("common.unsaved_changes.reset")
                    }), (0, a.jsx)("span", {
                      className: eQ().saveButton,
                      onClick: () => U(),
                      children: S
                    })]
                  })]
                })
              })
            }), (0, a.jsx)("div", {
              className: d().featureGap,
              children: "modern" === n ? (0, a.jsx)(Y.A, {
                featureName: t("dashboard.premium.layout.modern"),
                children: (0, a.jsx)(C, {
                  isBorderEnabled: y.border_enabled,
                  setIsBorderEnabled: w("border_enabled"),
                  borderColor: y.border_color,
                  setBorderColor: w("border_color"),
                  borderRadius: y.border_radius,
                  setBorderRadius: w("border_radius"),
                  borderWidth: y.border_width,
                  setBorderWidth: w("border_width"),
                  borderStyle: y.border_style,
                  setBorderStyle: w("border_style"),
                  borderOpacity: y.border_opacity,
                  setBorderOpacity: w("border_opacity"),
                  joinDate: y.join_date,
                  setJoinDate: w("join_date"),
                  linksPosition: y.links_position,
                  setLinksPosition: w("links_position"),
                  secondTab: l.second_tab,
                  secondTabEnabled: l.second_tab_enabled,
                  clockFaceStyle: l.clock_face_style ?? "dark",
                  clockHidden: l.clock_hidden ?? !1,
                  clockTimeFormat: l.clock_time_format ?? "24h",
                  userJoinDate: c
                })
              }) : "default" === n ? (0, a.jsx)(Y.A, {
                featureName: t("dashboard.premium.layout.default"),
                children: (0, a.jsx)(R, {
                  isBorderEnabled: y.border_enabled,
                  setIsBorderEnabled: w("border_enabled"),
                  borderColor: y.border_color,
                  setBorderColor: w("border_color"),
                  borderRadius: y.border_radius,
                  setBorderRadius: w("border_radius"),
                  borderWidth: y.border_width,
                  setBorderWidth: w("border_width"),
                  borderStyle: y.border_style,
                  setBorderStyle: w("border_style"),
                  borderOpacity: y.border_opacity,
                  setBorderOpacity: w("border_opacity"),
                  setBanner: f,
                  banner: b,
                  linksPosition: y.links_position,
                  setLinksPosition: w("links_position")
                })
              }) : "simplistic" === n ? (0, a.jsx)(Y.A, {
                featureName: t("dashboard.premium.layout.simplistic"),
                transparent: !0,
                children: (0, a.jsx)(K, {
                  buttonBorderRadius: y.button_border_radius,
                  setButtonBorderRadius: w("button_border_radius"),
                  buttonShadow: y.button_shadow,
                  setButtonShadow: w("button_shadow"),
                  textAlign: y.text_align,
                  setTextAlign: w("text_align"),
                  showUrl: y.show_url,
                  setShowUrl: w("show_url"),
                  buttons: h,
                  setButtons: g
                })
              }) : "sleek" === n ? (0, a.jsx)(Y.A, {
                featureName: t("dashboard.premium.layout.sleek"),
                children: (0, a.jsx)(Z, {
                  isBorderEnabled: y.border_enabled,
                  setIsBorderEnabled: w("border_enabled"),
                  borderColor: y.border_color,
                  setBorderColor: w("border_color"),
                  borderRadius: y.border_radius,
                  setBorderRadius: w("border_radius"),
                  borderWidth: y.border_width,
                  setBorderWidth: w("border_width"),
                  borderStyle: y.border_style,
                  setBorderStyle: w("border_style"),
                  borderOpacity: y.border_opacity,
                  setBorderOpacity: w("border_opacity"),
                  avatarRadius: y.avatar_radius,
                  setAvatarRadius: w("avatar_radius"),
                  linksPosition: y.links_position,
                  setLinksPosition: w("links_position")
                })
              }) : "portfolio" === n && (0, a.jsx)(Y.A, {
                featureName: t("dashboard.premium.layout.portfolio"),
                children: (0, a.jsx)(ey, {
                  modules: y.portfolio_modules,
                  setModules: w("portfolio_modules"),
                  isBorderEnabled: y.border_enabled,
                  setIsBorderEnabled: w("border_enabled"),
                  borderColor: y.border_color,
                  setBorderColor: w("border_color"),
                  borderWidth: y.border_width,
                  setBorderWidth: w("border_width"),
                  borderStyle: y.border_style,
                  setBorderStyle: w("border_style"),
                  borderOpacity: y.border_opacity,
                  setBorderOpacity: w("border_opacity"),
                  portfolioBorderRadius: y.portfolio_border_radius,
                  setPortfolioBorderRadius: w("portfolio_border_radius"),
                  onSave: U,
                  saveButtonText: S,
                  isMonochromeIcons: !0 === o.monochrome,
                  audioList: o.audio
                })
              })
            })]
          })
        }
    },
    43477: e => {
      e.exports = {
        featureGap: "GUNS__f8-36442cf1-633c2941-ec04ba9a",
        generalComponentRight: "GUNS__1b-e42e8b85-e3e6f07f-16a5a52f",
        generalComponentLeft: "GUNS__3c-ca930601-a3ebba23-5a80c79a",
        settingsComponent: "GUNS__46-ddf97968-5a7e1046-15b9dda6",
        generalComponentContainer: "GUNS__09-774382c3-57b805e5-a212ece6",
        featureRow: "GUNS__f1-cc829fe6-2903c1a9-1f5bda1a",
        layoutControlsStack: "GUNS__d2-33e4d226-0d4a3774-0d73b7db",
        layoutDropdownRow: "GUNS__35-05a9e401-46cba892-49f8732e",
        premiumNavigation: "GUNS__15-fe4c36c7-d299ccbe-a5871c14",
        active: "GUNS__21-b1fbab52-1a408719-b0e8e664",
        buttonDisabled: "GUNS__8e-8d7c8209-0a1df6e7-188a8711",
        buttonEnabled: "GUNS__94-d3720c82-616d1568-92e52560",
        borderDiv: "GUNS__e7-7271713a-7347acf8-3359dc68",
        borderControlsRow: "GUNS__4a-e4f66c0a-4a85a784-209d8397",
        modernLayoutComponentLeft: "GUNS__d0-2a0d29db-82efff2b-4c913a14",
        typewriter: "GUNS__b0-3bab2bb3-08b4eda8-fb7778ed",
        typewriterWrapper: "GUNS__0c-ad22cffd-36d192bc-94db58de",
        tagsInputWrapper: "GUNS__e8-c53670da-214ecab2-89996df0",
        tagsWrapper: "GUNS__5c-62fae5b6-708c76a2-4daecd14",
        manageTypewriter: "GUNS__3c-c70f1c03-1a97d0e8-d1972d0f",
        addTag: "GUNS__2d-12aa9f70-8a131f54-d78e4aa9",
        tags: "GUNS__ec-3f195a31-efc145ec-f29a68f5",
        typewriterTagContainer: "GUNS__a7-b0fd6e25-2ec90e52-bae1efa1",
        typewriterDragHandle: "GUNS__8a-3070c3a3-ef3624e3-3092a359",
        tag: "GUNS__9a-55842480-5e7019c0-83b2a7cc",
        tagName: "GUNS__2c-2e936af4-4760a69b-13403bc8",
        tagActions: "GUNS__bd-18d0ce71-d5017d82-43da4d6e",
        tagActionButton: "GUNS__e2-92c34b7b-d0bc8a48-c4ea3afd",
        editTagButton: "GUNS__36-8d103e34-37692816-d3a9759b",
        removeTag: "GUNS__c2-ebcecdd9-6e3a1cd4-c5450ba5",
        tagEditInput: "GUNS__b4-e9ba675e-32274d8b-3e099940",
        saveTypewriter: "GUNS__ae-2105fdaa-af22acd0-03ad0a6f",
        typewriterDisabled: "GUNS__29-34541698-1465b056-66ae4b52",
        typewriterEnabled: "GUNS__65-80aa4e1e-688f529e-93784047",
        myTexts: "GUNS__df-93202286-9ae95b22-b1779d46",
        simplisticLayout: "GUNS__b6-e634499e-96563531-72caf5b8",
        buttonEditor: "GUNS__2d-ef4c70a2-ec572fd1-eb7578c8",
        settings: "GUNS__5d-da6f4b52-e536ad3b-80cd696a",
        buttonEditorHeading: "GUNS__2b-89f9e32d-2774aae0-be8fa22a",
        modalButtonGap: "GUNS__ee-426d4f33-33a320ae-9bb22d53",
        addButtonSpan: "GUNS__54-8c4df733-0d9e0da0-916b06d1",
        buttons: "GUNS__57-b71f4526-c11efaf7-6e14893e",
        buttonCount: "GUNS__4d-b80acf1c-ae8aeeec-da0cb186",
        buttonPreview: "GUNS__1c-d473fe1c-f912b066-f8475241",
        buttonGap: "GUNS__6b-9a71ac33-e0d33dc7-a61319c4",
        buttonDiv: "GUNS__35-cef5c06a-ccdd2745-43b5891b",
        editButton: "GUNS__b1-320ffd38-5dc0ad2d-1e7dbce7",
        deleteButton: "GUNS__6c-bc6e0ebe-2649bc26-fd08fffc",
        buttonSettingsHeading: "GUNS__59-72757c60-100621cd-f9ada352",
        settingsContainer: "GUNS__58-875e08fb-4c7c400f-ae75eed1",
        iconUpload: "GUNS__25-f5b44b53-68dd5154-a771d950",
        uploadCardText: "GUNS__28-e6a5a33b-d0952925-dab442a2",
        uploaderMessage: "GUNS__f1-e8125eef-6a9b3ab9-f84f5631",
        uploadCardImage: "GUNS__2d-527bc255-4f6ecd1f-f3f221e3",
        uploaderHeadingText: "GUNS__9f-5c742e4f-11388048-43664f36",
        iconUploadWrapper: "GUNS__c2-f7c22fa1-7e117704-35d60f2d",
        fileBadge: "GUNS__ba-517d2b5b-0764671b-90a8a941",
        buttonContainer: "GUNS__1a-9d241dd4-3c510374-93d32ba2",
        dragHandleContainer: "GUNS__ad-97b3f0a6-6cce40d1-b9431d86",
        buttonWrapper: "GUNS__86-0daaa4e5-14c0619c-0ba352df",
        metadataContainer: "GUNS__2f-b20e2ac2-9970bec2-9cc32e9e",
        metadataContainerDescription: "GUNS__a4-97807326-5ce4d36b-68ed0698",
        metadataCustomization: "GUNS__35-196854c0-20e52158-6eae1eef",
        fileInputStyle: "GUNS__3b-07b6cc1a-9ea27eaa-5c7777f7",
        websiteImageText: "GUNS__2c-d5b0d51b-77495517-2567c8a8",
        metadataPreviewText: "GUNS__27-97c49254-307e2bab-5bde0c15",
        metadataContainerWrapper: "GUNS__f6-761bf2dc-f01326c5-f29c6554",
        metadataCustomizationWrapper: "GUNS__ed-1ebbfe8d-132c7f27-cbec805e",
        metadataPreview: "GUNS__20-65697431-30c9fcd3-d7364230",
        preview: "GUNS__9a-21a5b0c6-badf1315-bede8fae",
        previewDescription: "GUNS__ee-fc2d3cd5-784eef4e-5b8a7f11",
        imageWrapper: "GUNS__aa-717a96ca-0568395b-6274fb74",
        switchWrapper: "GUNS__f4-c9479b52-50960148-69435efc",
        userInformationOverlayText: "GUNS__f6-245b7806-3e86476e-ad0b4940",
        metadataNotification: "GUNS__47-0d4c1f1b-c12cd480-89b11fd2",
        typewriterSettings: "GUNS__f9-8f27866a-40211da5-71d26ad3",
        saveChangesTypewriter: "GUNS__13-48292c3c-0536a1ad-23626923",
        secondTabButton: "GUNS__45-970326e9-310e23a4-7c2ac44a",
        secondTab: "GUNS__ea-dc7bfc5a-f962aca5-1cd835c5",
        timezonePickerContainer: "GUNS__f4-46701168-421e5b47-fe6c36dc",
        timezoneComboboxWrapper: "GUNS__3d-8642eb77-64179168-017bf3d4",
        timezoneInputRow: "GUNS__3a-38ed0aa4-3e7b48f9-d5462bf1",
        useMyTimezoneBtn: "GUNS__53-024c063d-763b7dd4-638b2d7e",
        timezoneComboboxInput: "GUNS__be-9a074913-7d283fe5-0056b78d",
        timezoneDropdown: "GUNS__0e-76d7bfd1-1560ebde-941299f3",
        timezoneDropdownList: "GUNS__2a-3014a14d-c6989419-1a7b14e4",
        timezoneDropdownItem: "GUNS__29-18f0d9ab-453be0b7-131701b1",
        timezoneDropdownSelected: "GUNS__fe-46787262-af7763c3-3c9f8a0f",
        clockSettingsGroup: "GUNS__6d-f732c894-a1042cf8-759aef47",
        clockSettingRow: "GUNS__75-562bd308-9b994cb1-6a1aa05d",
        clockSettingDivider: "GUNS__a6-67920666-cf49df73-da3af0b5",
        clockSettingLabel: "GUNS__c3-c9bec9ee-04f31365-67de180b",
        segmentControl: "GUNS__68-41590ace-620cccfd-f02177b7",
        segmentBtn: "GUNS__cf-3eb1c422-a7156257-7e0dbd1e",
        segmentActive: "GUNS__10-0db2fefa-7033a6d0-40467c94",
        saveSecondTabButton: "GUNS__62-86e73021-8bac76f7-7934e4ec",
        manageFontsButton: "GUNS__41-2375a732-de76e36e-8842a617",
        manageFontsText: "GUNS__c4-fdfc16be-45249bb4-6b5b64e3",
        manageFontsWrapper: "GUNS__80-4574b40a-aeebe2bb-66ad33c7",
        defaultFontsWrapper: "GUNS__5c-a65f1f93-9f73f49b-d0e71293",
        defaultFontsContainer: "GUNS__72-5dd7f6c2-e47c70fa-385fab0d",
        defaultFontItem: "GUNS__01-00d59559-180f2080-3fb758e0",
        customFontWrapper: "GUNS__db-45e6c70a-8e19063b-d3ff2152",
        customFontDescription: "GUNS__fa-2bcb6b02-b43c2b05-9a1ac96a",
        uploadFontButton: "GUNS__a4-0c01ba70-d3977662-1443aa16",
        uploadFontWrapper: "GUNS__d7-acf76142-f6afa85c-fd0b39f6",
        textFontWrapper: "GUNS__f2-22983594-4ece2925-6a690b23",
        fontModalBody: "GUNS__23-17547bb0-2249f290-fd70a731",
        fontModalContent: "GUNS__8e-5bee41d7-ce7ca8a8-4c86fc01",
        fontModalFooter: "GUNS__0a-d6bb9f3e-bce186f6-08124622",
        saveChangesFonts: "GUNS__7d-3800c993-bcc0dfea-a2715b86",
        activeFont: "GUNS__6a-7427545b-ce17725c-e9997dcf",
        customFont: "GUNS__72-05a0bbd7-651c27ec-4a87f549",
        customFontText: "GUNS__4b-313a1a10-b503faa4-49e15745",
        customFontWeight: "GUNS__0d-f0658696-8b3f1b88-1ad8dcef",
        customFontStyle: "GUNS__99-4732b2a1-fbc881b3-1c9d7fb0",
        customFontRemove: "GUNS__55-e1c0e24f-4a6d4868-450f132c",
        customFontInfo: "GUNS__3d-11ac5bbc-0fe776f7-77ffbcb7",
        customFontSettings: "GUNS__21-bed85db7-c887db9a-46925714",
        fontSettingsAccordionItem: "GUNS__85-5fdf516c-499e308d-9eac0fde",
        fontSettingsAccordionControl: "GUNS__ed-ebe91991-f0bdd217-41e42093",
        portfolioSettings: "GUNS__0b-2614049f-eeb34d12-16b515ed",
        portfolioTopSettings: "GUNS__f7-b2b19421-26a218ac-8be7cc70",
        portfolioTopSettingsHeader: "GUNS__be-501e217e-c4e58cf6-d3e900c5",
        portfolioManagerHeader: "GUNS__44-54281092-934f314c-af9992be",
        portfolioAddModuleText: "GUNS__b2-ef49c73d-f5488164-ec184f25",
        portfolioModuleTypeIcon: "GUNS__39-b92041b4-6727abbe-f583d58d",
        portfo: "GUNS__3c-b4140428-7bfeb457-e5ee12b1",
        portfolioProfileSettings: "GUNS__85-9196990f-041014ba-c31e2370",
        portfolioManagerActions: "GUNS__d4-2411ad29-1f2b65ea-293bc752",
        portfolioAddModuleGrid: "GUNS__18-73d55763-69cdb1e1-2682f99f",
        portfolioAddModuleOption: "GUNS__47-55ed1814-39b21c40-4116ba1a",
        portfolioAddModuleIcon: "GUNS__0e-f863f464-b3608f44-d15b7901",
        portfolioAddModuleArrow: "GUNS__aa-88092d10-654235cd-fa86b5fa",
        portfolioAddBar: "GUNS__e0-fe715b44-427153db-342632a0",
        portfolioInlineButton: "GUNS__2c-8cf08d3a-30e819ec-c029599b",
        portfolioModulesSettings: "GUNS__f6-7c76db4f-91182902-5a1f26ef",
        portfolioModuleList: "GUNS__e5-577ab770-e8c9091d-2a8cabc8",
        portfolioModuleItem: "GUNS__a5-f70aab84-4856a834-49f3c257",
        portfolioDragHandleStrip: "GUNS__94-74be09d4-2b1591d2-d6bb71b6",
        portfolioModuleContent: "GUNS__0b-fb06fbc0-ef75fff2-7b5b68cc",
        portfolioModuleItemCollapsed: "GUNS__f6-46a46230-687d66f3-2683465b",
        portfolioModuleHeader: "GUNS__79-a22ae690-a363d580-79ce4609",
        portfolioModuleOverlay: "GUNS__f2-b22a72df-59013771-1cbacdf7",
        portfolioModuleHeaderStatic: "GUNS__72-3de2a615-e1cc14f5-a2a0e191",
        portfolioModuleTitle: "GUNS__44-ea19810a-929aab78-8dffc540",
        portfolioModuleBadge: "GUNS__22-072196eb-22e572a7-69bf2207",
        portfolioStaticHandle: "GUNS__cf-9265094b-cdbee3f7-2e914e46",
        portfolioDragHandle: "GUNS__fa-2fad65d3-28a31aac-84b557ed",
        portfolioModuleActions: "GUNS__cc-6d2cf62f-0d70e89c-dd7304e8",
        portfolioProjectHeader: "GUNS__7d-0c49e62f-d0f009ef-2065ceb9",
        portfolioFieldGrid: "GUNS__0a-01a3f636-433a1237-63068cad",
        portfolioFieldStack: "GUNS__49-dd13d930-3ab8d643-8138bd2e",
        portfolioAudioLyricsToggleRow: "GUNS__88-883321a8-a454e938-4776a00f",
        portfolioAudioLyricsToggleText: "GUNS__ac-71dbef1c-5210aaa7-65990341",
        portfolioAudioLyricsToggleButton: "GUNS__ff-603fde7c-ca2545bf-b527d4dd",
        portfolioAudioLyricsHint: "GUNS__27-da0dd2cd-e3358268-e5a83857",
        portfolioAudioLyricsEmpty: "GUNS__d6-e7d30880-8bd27483-827653ae",
        portfolioAudioLyricsActions: "GUNS__8c-323b0594-58f43803-95b03a6b",
        portfolioLyricsResults: "GUNS__2b-f5eac303-688eb3ac-5cfd8d31",
        portfolioLyricsResult: "GUNS__31-d1987987-2f36b16f-6a357a4f",
        portfolioLyricsResultMeta: "GUNS__9e-b798c47f-7d2753df-bfcbaf1b",
        portfolioSectionSpacing: "GUNS__39-068c0434-6f067424-fc401571",
        portfolioField: "GUNS__0c-2a700250-85dd8bae-6828085f",
        portfolioToggleGrid: "GUNS__25-3833707c-ef1ad721-b499230b",
        portfolioProjectEditor: "GUNS__5b-b9db9754-4828862e-cc2a6d47",
        portfolioProjectDragStrip: "GUNS__0a-de035a93-f2d43ff3-ce632717",
        portfolioProjectContent: "GUNS__bb-c71c0fd4-69e8904b-ea08ffa8",
        portfolioProjectList: "GUNS__35-effa120a-ae7e91d2-4247deb7",
        portfolioTagEditor: "GUNS__30-82576f90-84af91bc-b6d27c91",
        portfolioTagList: "GUNS__fa-790bd726-8d477646-c8c65122",
        portfolioProjectTag: "GUNS__49-a28ffbf0-4becd051-4001ccd6",
        portfolioProjectTagHandle: "GUNS__b3-ace43105-106b73cf-ea89fb5e",
        portfolioSkillTagLabel: "GUNS__8e-f09a6dca-42530a27-09ac7b10",
        skillAutocompleteDot: "GUNS__76-ab3c7f15-9d920898-de1239b8",
        skillAutocompleteIcon: "GUNS__56-2b4976fb-64cfb06e-8ec6fe0b",
        portfolioTagInputRow: "GUNS__16-20a82b65-e782cac3-b953ae3e",
        portfolioTagAddButton: "GUNS__33-530c1151-a00110b4-449cb027",
        portfolioInfoPanel: "GUNS__19-8f719604-a848cc64-b95f089c",
        portfolioCardTypeRow: "GUNS__7b-c2ab3911-468645f0-b7b24a37",
        portfolioCardSection: "GUNS__61-5b6af104-7782ae0b-84edd77b",
        portfolioCardTriggerRow: "GUNS__d0-d4d82cc1-fe9af84a-cc05cf4d",
        portfolioCardTriggerInfo: "GUNS__cf-96bc1599-2363c76f-6bb2deea",
        portfolioCardTriggerLabel: "GUNS__cb-4682f2d0-0ee72ab0-07300db3",
        portfolioCardTriggerCurrent: "GUNS__26-fd44d589-34ecc619-be50e500",
        portfolioCardTriggerDisabled: "GUNS__b7-bf93f6a3-daca25e4-0d361efa",
        portfolioSkillsSection: "GUNS__60-e1bb9d1a-586576ac-645c85f8",
        portfolioFieldLabel: "GUNS__f3-7390b765-537f5c14-4169ac65",
        portfolioFieldCount: "GUNS__39-7dd0630e-cfabf8d5-94ddfa8d",
        portfolioSkillsHint: "GUNS__cb-34a02d00-392a6ad6-7c1811fc",
        portfolioMarkdownHint: "GUNS__f9-795141e8-49da5eed-2bcf0bdc",
        portfolioEditorBox: "GUNS__fc-2c4ec393-690afe72-3e770541",
        portfolioMarkdownToolbar: "GUNS__a0-0f40a338-390e97fa-edc9e5f2",
        portfolioToolbarGroup: "GUNS__f2-b633ac2e-21e459e4-2c1b038e",
        portfolioToolbarBtn: "GUNS__50-6cd03cc6-a73ae7a4-7c8456d1",
        portfolioToolbarDivider: "GUNS__d0-8ddb18fb-1b2503bd-ee65b681",
        portfolioToolbarOptionsBtn: "GUNS__c4-7854ffb2-5177880b-d7f702bd",
        portfolioEditorTextarea: "GUNS__7c-60ffaf21-cd71e92b-d32b9f41",
        portfolioInlineCount: "GUNS__fc-5e27bf19-3fa7266a-dd1e2109",
        portfolioStickyAddGrid: "GUNS__21-cc44114c-1c3bd477-88ed50e5",
        portfolioStickyItem: "GUNS__fb-0afea1e1-0b783241-b4db8312",
        portfolioProjectUploadCard: "GUNS__b3-d1e4ad55-e27c1283-7a043dcf",
        skillAutocompleteWrap: "GUNS__01-6fcf4915-d43ac062-e10c1a83",
        skillAutocompleteDropdown: "GUNS__20-17b08fbb-8785485a-c23c8c01",
        skillAutocompleteSuggestion: "GUNS__2b-24f50a7d-e93cbb77-b3f8811d",
        skillAutocompleteSuggestionActive: "GUNS__d1-6234c912-f5764ee7-0ccd3e62",
        heroStyleSection: "GUNS__a4-19c13f2a-81e4675b-70112bef",
        heroStylePicker: "GUNS__65-a933dff8-31be525f-e9101ac6",
        heroStyleOption: "GUNS__2c-145a72a4-67f1eae1-1e906523",
        heroStyleOptionSelected: "GUNS__f7-e362790e-691dcec6-b66acd13",
        heroStylePreview: "GUNS__e5-7cac7ef3-4c8ec908-25d688f8",
        heroStyleLabel: "GUNS__fb-878232ac-96623141-98654451",
        heroToggleSection: "GUNS__5f-8fd23ce5-2bad508c-28703145",
        heroToggleLabel: "GUNS__90-25f6b44c-12daf1b1-e16e612a",
        heroElementsPanel: "GUNS__70-63b502e7-58a8b271-20e8eb93",
        heroRadiusBlock: "GUNS__c6-1b3827be-287abcb5-cbb51542",
        borderToggleRow: "GUNS__b7-bb8988c8-eac91e31-da3f75d9",
        heroRadiusHeader: "GUNS__94-a8edbc9d-35b61b3e-c8a5268c",
        heroRadiusInlineValue: "GUNS__26-1401fbf3-29d657a9-95bf7ce9",
        heroRadiusSliderWrap: "GUNS__97-3805bfe2-6ba76d44-17c6271a",
        heroRadiusSliderCard: "GUNS__09-293a8c14-c9498e8c-c24d04c5",
        heroVisibilityList: "GUNS__b3-8dd70fa5-458fe46c-3c1dd480",
        heroVisibilityRow: "GUNS__94-961684e8-ab30572e-8ea6e755",
        heroVisibilityRowLabel: "GUNS__c0-32e9984d-8b41a169-852ab9fd",
        heroVisibilitySwitchCell: "GUNS__cc-b53edda7-f033de14-2b57e824",
        portfolioProjectUploadCardTitle: "GUNS__7f-66145514-96d08f7f-29c49f2e",
        clickSoundList: "GUNS__e6-b02f5400-15dd0f2c-ccc67f33",
        clickSoundOption: "GUNS__0b-57566a92-50b0250a-50869873",
        clickSoundOptionActive: "GUNS__cc-5111c397-3c373c25-4ffa41c9",
        clickSoundOptionLabel: "GUNS__eb-2c82f17d-bf1dd9e0-8b43c6b6",
        clickSoundPreviewButton: "GUNS__67-b463e7d6-de8b0a06-8f7b9bf1",
        clickSoundUploadButton: "GUNS__86-438fe01b-f9afb55e-b6c14215",
        clickSoundUpload: "GUNS__f4-a1ca6bcd-d478b262-c11b1b66",
        clickSoundUploadDetails: "GUNS__5d-174b81ba-972b983a-6604c1a4",
        clickSoundRemoveButton: "GUNS__bd-fe6c4678-4590b00f-a49a124a",
        clickSoundSaveButton: "GUNS__96-e505c220-ac056d7a-e2856de0",
        portfolioAboutBioSection: "GUNS__21-58649629-def4532f-e9972ab4"
      }
    }
  }
]);