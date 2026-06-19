"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3184], {
    3184: (e, t, o) => {
      o.r(t), o.d(t, {
        default: () => e8
      });
      var a = o(95155),
        s = o(12115),
        r = o(39449),
        i = o(60884),
        l = o(43477),
        n = o.n(l),
        d = o(30184),
        c = o(21924),
        u = o(12555),
        m = o(37897),
        p = o(66609),
        h = o(60141),
        b = o(74564),
        _ = o(38256),
        g = o(57776),
        y = o(57157),
        f = o(38414),
        x = o(20248),
        j = o(47296),
        v = o(14311),
        k = o(28872),
        N = o(15875),
        C = o(69756),
        w = o(65663);
      let A = ({
        isBorderEnabled: e,
        setIsBorderEnabled: t,
        borderColor: o,
        setBorderColor: r,
        borderRadius: i,
        setBorderRadius: l,
        borderWidth: A,
        setBorderWidth: S,
        borderStyle: B,
        setBorderStyle: T,
        borderOpacity: L,
        setBorderOpacity: R,
        joinDate: F,
        setJoinDate: M,
        linksPosition: D,
        setLinksPosition: $,
        secondTab: O,
        secondTabEnabled: z,
        clockFaceStyle: I,
        clockHidden: E,
        clockTimeFormat: P,
        userJoinDate: U
      }) => {
        let H = (0, _.kj)(),
          W = (0, _.useLang)(),
          V = [{
            value: 20,
            label: H("dashboard.premium.layout.modern_settings.border_radius.marks.twenty")
          }, {
            value: 50,
            label: H("dashboard.premium.layout.modern_settings.border_radius.marks.fifty")
          }, {
            value: 80,
            label: H("dashboard.premium.layout.modern_settings.border_radius.marks.eighty")
          }],
          J = [{
            value: 2,
            label: H("dashboard.premium.layout.modern_settings.border_width.marks.two")
          }, {
            value: 5,
            label: H("dashboard.premium.layout.modern_settings.border_width.marks.five")
          }, {
            value: 8,
            label: H("dashboard.premium.layout.modern_settings.border_width.marks.eight")
          }],
          G = [{
            value: "center",
            label: H("dashboard.premium.layout.links_alignment.center")
          }, {
            value: "left",
            label: H("dashboard.premium.layout.links_alignment.left")
          }, {
            value: "right",
            label: H("dashboard.premium.layout.links_alignment.right")
          }],
          K = [{
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
          q = [{
            name: "YouTube",
            icon: u.A.youtube,
            placeholder: H("dashboard.premium.layout.modern_settings.second_tab.placeholders.youtube")
          }, {
            name: "Spotify",
            icon: u.A.spotify,
            placeholder: H("dashboard.premium.layout.modern_settings.second_tab.placeholders.spotify")
          }, {
            name: "Discord",
            icon: u.A.discord,
            placeholder: H("dashboard.premium.layout.modern_settings.second_tab.placeholders.discord")
          }, {
            name: "Telegram",
            icon: u.A.telegram,
            placeholder: H("dashboard.premium.layout.modern_settings.second_tab.placeholders.telegram")
          }, {
            name: "Roblox",
            icon: u.A.roblox,
            placeholder: H("dashboard.premium.layout.modern_settings.second_tab.placeholders.roblox")
          }, {
            name: "GitHub",
            icon: u.A.github,
            placeholder: H("dashboard.premium.layout.modern_settings.second_tab.placeholders.github")
          }, {
            name: "LastFM",
            icon: u.A.lastfm,
            placeholder: H("dashboard.premium.layout.modern_settings.second_tab.placeholders.lastfm")
          }, {
            name: "Timezone",
            icon: u.A.timezone,
            placeholder: H("dashboard.premium.layout.modern_settings.second_tab.timezone.select_placeholder")
          }],
          Z = {
            en: f.c,
            es: x.es,
            pt: j.F,
            fr: v.fr,
            de: k.de,
            tr: N.tr,
            ru: C.ru,
            ar: w.ar
          },
          Y = e ? n().buttonEnabled : n().buttonDisabled,
          Q = async () => {
            (await fetch("https://guns.lol/api/dashboard/premium/secondTab", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                second_tab_enabled: !X
              })
            })).ok ? (ee(!X), p.oR.success(H("dashboard.premium.layout.modern_settings.second_tab.toggle_success", {
              state: X ? H("dashboard.premium.layout.modern_settings.second_tab.states.disabled") : H("dashboard.premium.layout.modern_settings.second_tab.states.enabled")
            }))) : p.oR.error(H("dashboard.premium.layout.modern_settings.second_tab.toggle_error"))
          }, [X, ee] = (0, s.useState)(z), [et, eo] = (0, s.useState)(!1), [ea, es] = (0, s.useState)(Object.keys(O)[0]), [er, ei] = (0, s.useState)(O[ea]), [el, en] = (0, s.useState)("timezone" === Object.keys(O)[0] && O[Object.keys(O)[0]] || ""), [ed, ec] = (0, s.useState)(!1), [eu, em] = (0, s.useState)(I ?? "dark"), [ep, eh] = (0, s.useState)(E ?? !1), [eb, e_] = (0, s.useState)(P ?? "24h"), eg = "undefined" != typeof Intl && "supportedValuesOf" in Intl ? Intl.supportedValuesOf("timeZone") : ["America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles", "America/Sao_Paulo", "Europe/London", "Europe/Paris", "Europe/Berlin", "Europe/Moscow", "Asia/Dubai", "Asia/Kolkata", "Asia/Tokyo", "Asia/Shanghai", "Australia/Sydney", "Pacific/Auckland", "Africa/Cairo", "Africa/Lagos"], ey = el.replace(/_/g, " ").toLowerCase(), ef = eg.filter(e => e.replace(/_/g, " ").toLowerCase().includes(ey)).slice(0, 80).map(e => ({
            value: e,
            label: e.replace(/_/g, " ")
          })), ex = q.find(e => e.name.toLowerCase() === ea)?.placeholder, ej = q.find(e => e.name.toLowerCase() === ea)?.icon, ev = X ? n().buttonEnabled : n().buttonDisabled, ek = async () => {
            let e = await fetch("https://guns.lol/api/dashboard/premium/secondTab", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  second_tab: {
                    second_tab_option: ea,
                    second_tab_value: "timezone" === ea ? er || el.replace(/ /g, "_") : er
                  },
                  ..."timezone" === ea && {
                    clock_face_style: eu,
                    clock_hidden: ep,
                    clock_time_format: eb
                  }
                })
              }),
              t = await e.json();
            e.ok ? p.oR.success(H("dashboard.premium.layout.modern_settings.second_tab.save_success")) : p.oR.error(t.error)
          }, eN = new Date(1e3 * U), eC = [{
            value: "none",
            label: H("dashboard.premium.layout.modern_settings.join_date.none")
          }, {
            value: "relative",
            label: H("dashboard.premium.layout.modern_settings.join_date.relative", {
              value: (0, b.m)(eN, {
                addSuffix: !0,
                locale: Z[W]
              })
            })
          }, {
            value: "absolute",
            label: H("dashboard.premium.layout.modern_settings.join_date.absolute", {
              value: new Date(1e3 * U).toLocaleDateString(W, {
                year: "numeric",
                month: "long",
                day: "numeric"
              })
            })
          }, {
            value: "short",
            label: H("dashboard.premium.layout.modern_settings.join_date.short", {
              value: eN.toLocaleDateString(W)
            })
          }, {
            value: "long",
            label: H("dashboard.premium.layout.modern_settings.join_date.long", {
              value: eN.toLocaleDateString(W, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
              })
            })
          }, {
            value: "month_year",
            label: H("dashboard.premium.layout.modern_settings.join_date.month_year", {
              value: eN.toLocaleDateString(W, {
                year: "numeric",
                month: "long"
              })
            })
          }, {
            value: "year_only",
            label: H("dashboard.premium.layout.modern_settings.join_date.year_only", {
              value: eN.getFullYear()
            })
          }, {
            value: "compact",
            label: H("dashboard.premium.layout.modern_settings.join_date.compact", {
              value: eN.toLocaleDateString(W, {
                day: "numeric",
                month: "short",
                year: "2-digit"
              }).replace(/(\d{2})$/, "'$1")
            })
          }];
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsxs)(g.A, {
            opened: et,
            onClose: () => eo(!1),
            title: H("dashboard.premium.layout.modern_settings.second_tab.modal_title"),
            centered: !0,
            size: "550px",
            children: [(0, a.jsx)("span", {
              className: ev,
              onClick: Q,
              children: X ? H("dashboard.premium.layout.modern_settings.second_tab.disable_button") : H("dashboard.premium.layout.modern_settings.second_tab.enable_button")
            }), X && (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)("div", {
                className: n().secondTabOptions,
                children: q.map((e, t) => (0, a.jsxs)("div", {
                  className: `${n().secondTabOption} ${ea===e.name.toLowerCase()?n().selected:""}`,
                  onClick: () => (e => {
                    if (ea !== e) {
                      if (e === Object.keys(O)[0]) {
                        es(e), ei(O[e]), en("timezone" === e ? (O[e] || "").replace(/_/g, " ") : ""), ec(!1);
                        return
                      }
                      es(e), ei(""), en(""), ec(!1)
                    }
                  })(e.name.toLowerCase()),
                  children: [e.icon, (0, a.jsx)("h1", {
                    children: e.name
                  })]
                }, t))
              }), (0, a.jsxs)("div", {
                className: n().secondTab,
                children: ["timezone" === ea ? (0, a.jsxs)("div", {
                  className: n().timezonePickerContainer,
                  children: [(0, a.jsxs)("div", {
                    className: n().timezoneInputRow,
                    children: [(0, a.jsxs)("div", {
                      className: n().timezoneComboboxWrapper,
                      children: [(0, a.jsx)("input", {
                        type: "text",
                        className: n().timezoneComboboxInput,
                        placeholder: H("dashboard.premium.layout.modern_settings.second_tab.timezone.search_placeholder"),
                        value: el,
                        onChange: e => {
                          en(e.target.value), ei(""), ec(!0)
                        },
                        onFocus: () => ec(!0),
                        onBlur: () => setTimeout(() => ec(!1), 150)
                      }), ed && ef.length > 0 && (0, a.jsx)("div", {
                        className: n().timezoneDropdown,
                        children: (0, a.jsx)("ul", {
                          className: n().timezoneDropdownList,
                          children: ef.map(e => (0, a.jsx)("li", {
                            className: `${n().timezoneDropdownItem} ${e.value===er?n().timezoneDropdownSelected:""}`,
                            onMouseDown: e => e.preventDefault(),
                            onClick: () => {
                              ei(e.value), en(e.label), ec(!1)
                            },
                            children: e.label
                          }, e.value))
                        })
                      })]
                    }), (0, a.jsxs)("button", {
                      className: n().useMyTimezoneBtn,
                      type: "button",
                      onClick: () => {
                        try {
                          let e = Intl.DateTimeFormat().resolvedOptions().timeZone;
                          ei(e), en(e.replace(/_/g, " ")), ec(!1)
                        } catch {}
                      },
                      children: [u.A.timezone, " ", H("dashboard.premium.layout.modern_settings.second_tab.timezone.use_my_timezone")]
                    })]
                  }), (0, a.jsxs)("div", {
                    className: n().clockSettingsGroup,
                    children: [(0, a.jsxs)("div", {
                      className: n().clockSettingRow,
                      children: [(0, a.jsx)("div", {
                        className: n().clockSettingLabel,
                        children: (0, a.jsx)("span", {
                          children: H("dashboard.premium.layout.modern_settings.second_tab.timezone.clock_face")
                        })
                      }), (0, a.jsxs)("div", {
                        className: n().segmentControl,
                        children: [(0, a.jsx)("button", {
                          type: "button",
                          className: `${n().segmentBtn} ${"dark"===eu?n().segmentActive:""}`,
                          onClick: () => em("dark"),
                          children: H("dashboard.premium.layout.modern_settings.second_tab.timezone.clock_dark")
                        }), (0, a.jsx)("button", {
                          type: "button",
                          className: `${n().segmentBtn} ${"light"===eu?n().segmentActive:""}`,
                          onClick: () => em("light"),
                          children: H("dashboard.premium.layout.modern_settings.second_tab.timezone.clock_light")
                        })]
                      })]
                    }), (0, a.jsx)("div", {
                      className: n().clockSettingDivider
                    }), (0, a.jsxs)("div", {
                      className: n().clockSettingRow,
                      children: [(0, a.jsx)("div", {
                        className: n().clockSettingLabel,
                        children: (0, a.jsx)("span", {
                          children: H("dashboard.premium.layout.modern_settings.second_tab.timezone.clock_visibility")
                        })
                      }), (0, a.jsxs)("div", {
                        className: n().segmentControl,
                        children: [(0, a.jsx)("button", {
                          type: "button",
                          className: `${n().segmentBtn} ${!ep?n().segmentActive:""}`,
                          onClick: () => eh(!1),
                          children: H("dashboard.premium.layout.modern_settings.second_tab.timezone.clock_show")
                        }), (0, a.jsx)("button", {
                          type: "button",
                          className: `${n().segmentBtn} ${ep?n().segmentActive:""}`,
                          onClick: () => eh(!0),
                          children: H("dashboard.premium.layout.modern_settings.second_tab.timezone.clock_hide")
                        })]
                      })]
                    }), (0, a.jsx)("div", {
                      className: n().clockSettingDivider
                    }), (0, a.jsxs)("div", {
                      className: n().clockSettingRow,
                      children: [(0, a.jsx)("div", {
                        className: n().clockSettingLabel,
                        children: (0, a.jsx)("span", {
                          children: H("dashboard.premium.layout.modern_settings.second_tab.timezone.time_format")
                        })
                      }), (0, a.jsxs)("div", {
                        className: n().segmentControl,
                        children: [(0, a.jsx)("button", {
                          type: "button",
                          className: `${n().segmentBtn} ${"24h"===eb?n().segmentActive:""}`,
                          onClick: () => e_("24h"),
                          children: H("dashboard.premium.layout.modern_settings.second_tab.timezone.time_format_24h")
                        }), (0, a.jsx)("button", {
                          type: "button",
                          className: `${n().segmentBtn} ${"12h"===eb?n().segmentActive:""}`,
                          onClick: () => e_("12h"),
                          children: H("dashboard.premium.layout.modern_settings.second_tab.timezone.time_format_12h")
                        })]
                      })]
                    })]
                  })]
                }) : (0, a.jsx)(m.A, {
                  featureName: H("dashboard.premium.layout.modern_settings.second_tab.input_label"),
                  placeholder: ex,
                  icon: ej,
                  value: er,
                  onChangeFunction: e => {
                    ei(e.target.value)
                  }
                }), (0, a.jsx)("span", {
                  className: n().saveSecondTabButton,
                  onClick: ek,
                  children: H("dashboard.premium.layout.modern_settings.second_tab.save_button")
                })]
              })]
            })]
          }), (0, a.jsxs)("div", {
            className: `${n().generalComponentContainer} ${n().modernLayoutComponentLeft} `,
            children: [(0, a.jsxs)("div", {
              className: n().generalComponentLeft,
              children: [(0, a.jsx)("div", {
                className: n().featureRow,
                children: (0, a.jsxs)("span", {
                  className: n().secondTabButton,
                  onClick: () => eo(!0),
                  children: [u.A.secondTab, " ", H("dashboard.premium.layout.modern_settings.second_tab.manage_button")]
                })
              }), (0, a.jsxs)("div", {
                className: n().featureRow,
                style: {
                  flexDirection: "column",
                  gap: "10px"
                },
                children: [(0, a.jsx)("span", {
                  className: Y,
                  onClick: () => t(!e),
                  children: e ? H("dashboard.premium.layout.modern_settings.border.disable_button") : H("dashboard.premium.layout.modern_settings.border.enable_button")
                }), e && (0, a.jsxs)("div", {
                  className: n().borderDiv,
                  children: [(0, a.jsxs)("div", {
                    className: n().borderControlsRow,
                    children: [(0, a.jsx)(d.A, {
                      featureName: H("dashboard.premium.layout.modern_settings.border.color_label"),
                      onChangeFunction: r,
                      value: o
                    }), (0, a.jsx)(h.A, {
                      featureName: H("dashboard.premium.layout.border_style.label"),
                      data: K,
                      value: B ?? "static",
                      onChangeFunction: T,
                      icon: u.A.layout
                    })]
                  }), (0, a.jsxs)("div", {
                    className: n().borderControlsRow,
                    children: [(0, a.jsx)(c.A, {
                      featureName: H("dashboard.premium.layout.modern_settings.border.width_label"),
                      onChangeFunction: S,
                      value: A,
                      min: 1,
                      max: 10,
                      step: 1,
                      label: e => `${e} px`,
                      marks: J
                    }), (0, a.jsx)(c.A, {
                      featureName: H("dashboard.premium.layout.border_opacity.label"),
                      onChangeFunction: R,
                      value: L,
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
              className: n().generalComponentLeft,
              children: (0, a.jsxs)("div", {
                className: n().layoutControlsStack,
                children: [(0, a.jsx)(c.A, {
                  featureName: H("dashboard.premium.layout.modern_settings.border_radius.label"),
                  onChangeFunction: l,
                  value: i,
                  min: 0,
                  max: 100,
                  step: 1,
                  label: e => `${e} px`,
                  marks: V
                }), (0, a.jsxs)("div", {
                  className: n().layoutDropdownRow,
                  children: [(0, a.jsx)(h.A, {
                    featureName: H("dashboard.premium.layout.modern_settings.join_date.label"),
                    data: eC,
                    value: F,
                    onChangeFunction: M,
                    icon: u.A.joinDate,
                    placeholder: H("dashboard.premium.layout.modern_settings.join_date.placeholder")
                  }), (0, a.jsx)(y.A, {
                    featureName: H("dashboard.premium.layout.links_alignment.label"),
                    helpDescription: H("dashboard.premium.layout.links_alignment.description"),
                    element: (0, a.jsx)(h.A, {
                      value: D,
                      onChangeFunction: $,
                      icon: u.A.layout,
                      data: G
                    })
                  })]
                })]
              })
            })]
          })]
        })
      };
      var S = o(31887),
        B = o.n(S);
      async function T(e, t) {
        let o = new FormData;
        o.append("banner", e);
        let a = await fetch("/api/dashboard/premium/upload/banner", {
            body: o,
            method: "POST"
          }),
          s = await a.json();
        return a.ok ? (p.oR.success(t("dashboard.premium.layout.default_settings.banner.upload_success")), s.url) : (p.oR.error(s.error), console.error("Failed to upload file:", a.statusText), null)
      }
      async function L() {
        try {
          let e = await fetch("https://guns.lol/api/dashboard/premium/remove/banner", {
            method: "POST"
          });
          if (e.ok) return p.oR.success("Successfully removed banner."), "success";
          return p.oR.error("Failed to remove banner."), console.error("Failed to remove file:", e.statusText), null
        } catch (e) {
          return p.oR.error("Failed to remove banner."), console.error("Error removing file:", e), null
        }
      }
      var R = o(39818),
        F = o(12521);
      let M = ({
        isBorderEnabled: e,
        setIsBorderEnabled: t,
        borderColor: o,
        setBorderColor: r,
        borderRadius: i,
        setBorderRadius: l,
        borderWidth: m,
        setBorderWidth: p,
        borderStyle: b,
        setBorderStyle: g,
        borderOpacity: f,
        setBorderOpacity: x,
        setBanner: j,
        banner: v,
        linksPosition: k,
        setLinksPosition: N
      }) => {
        let C = (0, _.kj)(),
          w = [{
            value: 20,
            label: C("dashboard.premium.layout.default_settings.border_radius.marks.twenty")
          }, {
            value: 50,
            label: C("dashboard.premium.layout.default_settings.border_radius.marks.fifty")
          }, {
            value: 80,
            label: C("dashboard.premium.layout.default_settings.border_radius.marks.eighty")
          }],
          A = [{
            value: 2,
            label: C("dashboard.premium.layout.default_settings.border_width.marks.two")
          }, {
            value: 5,
            label: C("dashboard.premium.layout.default_settings.border_width.marks.five")
          }, {
            value: 8,
            label: C("dashboard.premium.layout.default_settings.border_width.marks.eight")
          }],
          S = [{
            value: "center",
            label: C("dashboard.premium.layout.links_alignment.center")
          }, {
            value: "left",
            label: C("dashboard.premium.layout.links_alignment.left")
          }, {
            value: "right",
            label: C("dashboard.premium.layout.links_alignment.right")
          }],
          M = [{
            value: "static",
            label: C("dashboard.premium.layout.border_style.static")
          }, {
            value: "dashed",
            label: C("dashboard.premium.layout.border_style.dashed")
          }, {
            value: "shimmer",
            label: C("dashboard.premium.layout.border_style.shimmer")
          }, {
            value: "pulse",
            label: C("dashboard.premium.layout.border_style.pulse")
          }],
          D = e ? n().buttonEnabled : n().buttonDisabled,
          [$, O] = (0, s.useState)(!1),
          z = async e => {
            O(!0);
            let t = e.target.files?.[0];
            if (e.target.disabled = !0, t) {
              if (!(0, R.vH)(t, "banner")) {
                e.target.value = "", e.target.disabled = !1, O(!1);
                return
              }
              let o = await T(t, C);
              e.target.disabled = !1, O(!1), o ? j(o) : (e.target.value = "", e.target.disabled = !1, O(!1))
            }
          };
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            className: `${n().generalComponentContainer} ${n().modernLayoutComponentLeft}`,
            children: [(0, a.jsx)("div", {
              className: n().generalComponentLeft,
              style: {
                gap: "35px"
              },
              children: (0, a.jsxs)("div", {
                className: n().featureRow,
                style: {
                  flexDirection: "column",
                  gap: "10px"
                },
                children: [(0, a.jsx)("span", {
                  className: D,
                  onClick: () => t(!e),
                  children: e ? C("dashboard.premium.layout.default_settings.border.disable_button") : C("dashboard.premium.layout.default_settings.border.enable_button")
                }), e && (0, a.jsxs)("div", {
                  className: n().borderDiv,
                  children: [(0, a.jsxs)("div", {
                    className: n().borderControlsRow,
                    children: [(0, a.jsx)(d.A, {
                      featureName: C("dashboard.premium.layout.default_settings.border.color_label"),
                      onChangeFunction: r,
                      value: o
                    }), (0, a.jsx)(h.A, {
                      featureName: C("dashboard.premium.layout.border_style.label"),
                      data: M,
                      value: b ?? "static",
                      onChangeFunction: g,
                      icon: u.A.layout
                    })]
                  }), (0, a.jsxs)("div", {
                    className: n().borderControlsRow,
                    children: [(0, a.jsx)(c.A, {
                      featureName: C("dashboard.premium.layout.default_settings.border.width_label"),
                      onChangeFunction: p,
                      value: m,
                      min: 1,
                      max: 10,
                      step: 1,
                      label: e => `${e}px`,
                      marks: A
                    }), (0, a.jsx)(c.A, {
                      featureName: C("dashboard.premium.layout.border_opacity.label"),
                      onChangeFunction: x,
                      value: f,
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
                  className: B().uploadCardWrapper,
                  style: {
                    marginTop: 10,
                    padding: 3,
                    width: "100%"
                  },
                  children: [(0, a.jsx)("span", {
                    children: C("dashboard.premium.layout.default_settings.banner.label")
                  }), (0, a.jsx)("div", {
                    className: B().uploadCard,
                    children: "" === v ? (0, a.jsxs)(a.Fragment, {
                      children: [$ ? (0, a.jsxs)("div", {
                        className: B().uploaderMessage,
                        children: [(0, a.jsx)("span", {
                          children: u.A.loading
                        }), (0, a.jsx)("h1", {
                          children: C("dashboard.premium.layout.default_settings.banner.uploading")
                        })]
                      }) : (0, a.jsxs)("div", {
                        className: B().uploadCardText,
                        children: [u.A.image, (0, a.jsx)("h1", {
                          children: C("dashboard.premium.layout.default_settings.banner.upload_prompt")
                        })]
                      }), (0, a.jsx)("input", {
                        type: "file",
                        accept: F.vJ.banner.map(e => e).join(", "),
                        onChange: e => {
                          z(e)
                        }
                      })]
                    }) : (0, a.jsxs)(a.Fragment, {
                      children: [(0, a.jsxs)("div", {
                        className: B().fileBadge,
                        children: [(0, a.jsx)("span", {
                          children: ("." + v.substring(v.lastIndexOf(".") + 1)).toUpperCase()
                        }), (0, a.jsx)("span", {
                          onClick: function() {
                            null !== L() && j("")
                          },
                          children: u.A.deleteFile
                        })]
                      }), (0, a.jsx)("img", {
                        src: v,
                        alt: "Banner",
                        className: B().uploadCardImage
                      })]
                    })
                  })]
                })]
              })
            }), (0, a.jsx)("div", {
              className: n().generalComponentLeft,
              children: (0, a.jsxs)("div", {
                className: n().featureRow,
                style: {
                  marginBottom: 35
                },
                children: [(0, a.jsx)(c.A, {
                  featureName: C("dashboard.premium.layout.default_settings.border_radius.label"),
                  onChangeFunction: l,
                  value: i,
                  min: 0,
                  max: 100,
                  step: 1,
                  label: e => `${e}px`,
                  marks: w
                }), (0, a.jsx)(y.A, {
                  featureName: C("dashboard.premium.layout.links_alignment.label"),
                  helpDescription: C("dashboard.premium.layout.links_alignment.description"),
                  element: (0, a.jsx)(h.A, {
                    value: k,
                    onChangeFunction: N,
                    icon: u.A.layout,
                    data: S
                  })
                })]
              })
            })]
          })
        })
      };
      var D = o(81469);
      async function $(e, t, o, a, s) {
        try {
          let r = new FormData;
          a(!0), r.append("button_title", e), r.append("button_url", t.startsWith("https://") ? t : `https://${t}`), o && r.append("icon", o);
          let i = await fetch("https://guns.lol/api/dashboard/premium/buttons/add", {
              method: "POST",
              body: r
            }),
            l = await i.json();
          if (200 === i.status) return p.oR.success(s("dashboard.premium.layout.simplistic_settings.button_modal.add_button_success")), {
            success: !0,
            buttons: l.buttons
          };
          p.oR.error(l.error)
        } catch (e) {
          p.oR.error(s("common.unsaved_changes.unknown_error")), console.error(e.message)
        } finally {
          a(!1)
        }
      }
      async function O(e, t, o, a, s, r, i) {
        try {
          let i = new FormData;
          r(!0), i.append("button_title", e), i.append("button_url", t.startsWith("https://") ? t : `https://${t}`), i.append("id", a), o && i.append("icon", o);
          let l = await fetch("https://guns.lol/api/dashboard/premium/buttons/edit", {
              method: "POST",
              body: i
            }),
            n = await l.json();
          if (!l.ok) return p.oR.error(n.error), console.error(n.error), null;
          return s(n.buttons), !0
        } catch (e) {
          p.oR.error(i("common.unsaved_changes.unknown_error")), console.error("Error updating buttons:", e.message)
        } finally {
          r(!1)
        }
      }
      async function z(e, t, o) {
        try {
          let o = await fetch("https://guns.lol/api/dashboard/premium/buttons/delete", {
              method: "POST",
              body: JSON.stringify({
                id: e
              })
            }),
            a = await o.json();
          if (!o.ok) return p.oR.error(a.error), console.error(a.error), null;
          return t(a.buttons), !0
        } catch (e) {
          return p.oR.error(o("common.unsaved_changes.unknown_error")), console.error(e.message), null
        }
      }
      var I = o(45941);

      function E({
        buttonTitle: e,
        buttonUrl: t,
        buttonIcon: o,
        buttonID: r,
        modalClose: i,
        setButtons: l
      }) {
        let d = (0, _.kj)(),
          [c, h] = (0, s.useState)(e),
          [b, g] = (0, s.useState)(t),
          [y, f] = (0, s.useState)(o),
          [x, j] = (0, s.useState)(""),
          [v, k] = (0, s.useState)(!1),
          N = b.replace("https://", ""),
          C = async e => {
            await O(c, b, x || y, r, l, k, d) && (p.oR.success(d("dashboard.premium.layout.simplistic_settings.button_modal.edit_success")), i())
          }, w = async e => {
            var t;
            let o;
            e.target.disabled = !0;
            let a = e.target.files?.[0];
            if (!a) return;
            let s = I.nB.icon,
              r = A(a.name).toLowerCase();
            if (!s.includes(r)) {
              p.oR.error(d("dashboard.premium.layout.simplistic_settings.button_modal.invalid_file")), e.target.disabled = !1, e.target.value = "";
              return
            }
            j(a), t = a, (o = new FileReader).onload = function(e) {
              f(e.target.result)
            }, o.readAsDataURL(t)
          };

        function A(e) {
          return "." + e.substring(e.lastIndexOf(".") + 1)
        }
        return (0, a.jsxs)("div", {
          className: n().modalButtonGap,
          children: [(0, a.jsx)(m.A, {
            icon: u.A.title,
            featureName: d("dashboard.premium.layout.simplistic_settings.button_modal.title_label"),
            onChangeFunction: e => {
              h(e.target.value)
            },
            value: c,
            placeholder: d("dashboard.premium.layout.simplistic_settings.button_modal.title_placeholder")
          }), (0, a.jsx)(m.A, {
            prefix: "https://",
            prefixLength: 89,
            icon: u.A.url,
            featureName: d("dashboard.premium.layout.simplistic_settings.button_modal.url_label"),
            onChangeFunction: e => {
              g(e.target.value)
            },
            value: N,
            placeholder: "..."
          }), (0, a.jsxs)("div", {
            className: n().iconUploadWrapper,
            children: [(0, a.jsx)("h1", {
              className: n().uploaderHeadingText,
              children: d("dashboard.premium.layout.simplistic_settings.button_modal.icon_label")
            }), (0, a.jsx)("div", {
              className: n().iconUpload,
              children: "" === y ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsxs)("div", {
                  className: n().uploadCardText,
                  children: [u.A.image, (0, a.jsx)("h1", {
                    children: d("dashboard.premium.layout.simplistic_settings.button_modal.icon_upload_prompt")
                  })]
                }), (0, a.jsx)("input", {
                  type: "file",
                  accept: F.vJ.icon.map(e => e).join(", "),
                  onChange: e => {
                    w(e)
                  }
                })]
              }) : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsxs)("div", {
                  className: n().fileBadge,
                  children: [(0, a.jsx)("span", {
                    children: A(x && x.name ? x.name : y).toUpperCase()
                  }), (0, a.jsx)("span", {
                    onClick: function() {
                      f(""), j("")
                    },
                    children: u.A.deleteFile
                  })]
                }), (0, a.jsx)("img", {
                  src: y,
                  alt: "Icon",
                  className: n().uploadCardImage
                })]
              })
            })]
          }), (0, a.jsxs)("span", {
            className: n().addButtonSpan,
            onClick: C,
            children: [v ? u.A.loading : u.A.editButton, " ", d("dashboard.premium.layout.simplistic_settings.button_modal.edit_button_cta")]
          })]
        })
      }

      function P({
        buttonTitle: e,
        buttonUrl: t,
        setButtonTitle: o,
        setButtonUrl: r,
        setButtons: i,
        modalClose: l
      }) {
        let d = (0, _.kj)(),
          [c, h] = (0, s.useState)(),
          [b, g] = (0, s.useState)(!1),
          [y, f] = (0, s.useState)(""),
          x = async () => {
            let a = await $(e, t, c, g, d);
            a && a.success && (i(a.buttons), o(""), r(""), l())
          }, j = async e => {
            var t;
            let o;
            e.target.disabled = !0;
            let a = e.target.files?.[0];
            if (!a) return;
            let s = I.nB.icon,
              r = v(a.name).toLowerCase();
            if (!s.includes(r)) {
              p.oR.error(d("dashboard.premium.layout.simplistic_settings.button_modal.invalid_file")), e.target.disabled = !1, e.target.value = "";
              return
            }
            h(a), t = a, (o = new FileReader).onload = function(e) {
              f(e.target.result)
            }, o.readAsDataURL(t)
          };

        function v(e) {
          return "." + e.substring(e.lastIndexOf(".") + 1)
        }
        return (0, a.jsxs)("div", {
          className: n().modalButtonGap,
          children: [(0, a.jsx)(m.A, {
            icon: u.A.title,
            featureName: d("dashboard.premium.layout.simplistic_settings.button_modal.title_label"),
            onChangeFunction: e => {
              o(e.target.value)
            },
            value: e,
            placeholder: d("dashboard.premium.layout.simplistic_settings.button_modal.title_placeholder")
          }), (0, a.jsx)(m.A, {
            prefix: "https://",
            prefixLength: 89,
            icon: u.A.url,
            featureName: d("dashboard.premium.layout.simplistic_settings.button_modal.url_label"),
            onChangeFunction: e => {
              r(e.target.value)
            },
            value: t,
            placeholder: "..."
          }), (0, a.jsxs)("div", {
            className: n().iconUploadWrapper,
            children: [(0, a.jsx)("h1", {
              className: n().uploaderHeadingText,
              children: d("dashboard.premium.layout.simplistic_settings.button_modal.icon_label")
            }), (0, a.jsx)("div", {
              className: n().iconUpload,
              children: "" === y ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsxs)("div", {
                  className: n().uploadCardText,
                  children: [u.A.image, (0, a.jsx)("h1", {
                    children: d("dashboard.premium.layout.simplistic_settings.button_modal.icon_upload_prompt")
                  })]
                }), (0, a.jsx)("input", {
                  type: "file",
                  accept: F.vJ.icon.map(e => e).join(", "),
                  onChange: e => {
                    j(e)
                  }
                })]
              }) : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsxs)("div", {
                  className: n().fileBadge,
                  children: [(0, a.jsx)("span", {
                    children: v(c.name).toUpperCase()
                  }), (0, a.jsx)("span", {
                    onClick: function() {
                      f(""), h("")
                    },
                    children: u.A.deleteFile
                  })]
                }), (0, a.jsx)("img", {
                  src: y,
                  alt: "Icon",
                  className: n().uploadCardImage
                })]
              })
            })]
          }), (0, a.jsxs)("span", {
            className: n().addButtonSpan,
            onClick: x,
            children: [b ? u.A.loading : u.A.addButton, " ", d("dashboard.premium.layout.simplistic_settings.button_modal.add_button_cta")]
          })]
        })
      }
      var U = o(44923),
        H = o(87256),
        W = o(39768);

      function V({
        buttons: e,
        setButtons: t,
        openModal: o,
        setCurrentModal: r
      }) {
        let i = (0, _.kj)(),
          [l, d] = (0, s.useState)(e),
          [c, u] = (0, s.useState)(null),
          [m, h] = (0, s.useState)(!1);
        (0, s.useEffect)(() => {
          h(!0)
        }, []), (0, s.useEffect)(() => {
          d(e)
        }, [e]);
        let b = (0, U.FR)((0, U.MS)(U.AN, {
            activationConstraint: {
              distance: 10
            }
          })),
          g = async e => {
            u(null);
            let {
              active: o,
              over: a
            } = e;
            if (!a || o.id === a.id) return;
            let s = l.findIndex(e => e.id === o.id),
              r = l.findIndex(e => e.id === a.id);
            if (r === s) return;
            let n = (0, H.VE)(l, s, r),
              c = n.map(e => ({
                id: e.id
              })); - 1 !== s && -1 !== r && (d(n), t(n)), (await fetch("https://guns.lol/api/dashboard/premium/buttons/order", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                newOrder: c
              })
            })).ok || p.oR.error(i("dashboard.premium.layout.simplistic_settings.button_list.order_error"))
          };
        return m ? (0, a.jsxs)(U.Mp, {
          sensors: b,
          collisionDetection: U.fp,
          onDragStart: e => {
            let {
              active: t
            } = e, o = l.find(e => e.id === t.id);
            o && u(o)
          },
          onDragEnd: g,
          children: [(0, a.jsx)(H.gB, {
            items: l.map(e => e.id),
            strategy: H.vl,
            children: (0, a.jsx)("div", {
              className: n().buttons,
              children: l.map(e => (0, a.jsx)(J, {
                item: e,
                setButtons: t,
                openModal: o,
                setCurrentModal: r
              }, e.id))
            })
          }), (0, a.jsx)(U.Hd, {
            children: c && (0, a.jsx)(J, {
              item: c,
              setButtons: t,
              openModal: o,
              setCurrentModal: r,
              isOverlay: !0
            })
          })]
        }) : null
      }

      function J({
        item: e,
        setButtons: t,
        openModal: o,
        setCurrentModal: s,
        isOverlay: r = !1
      }) {
        let i = (0, _.kj)(),
          {
            attributes: l,
            listeners: d,
            setNodeRef: c,
            transform: p,
            transition: h,
            isDragging: b
          } = (0, H.gl)({
            id: e.id,
            animateLayoutChanges: () => !1
          }),
          g = {
            transform: W.Ks.Transform.toString(p),
            transition: h,
            opacity: +!b
          };
        return (0, a.jsxs)("div", {
          ref: c,
          style: g,
          className: n().buttonContainer,
          children: [(0, a.jsx)("div", {
            className: n().dragHandleContainer,
            ...l,
            ...d,
            children: u.A.dragHandle
          }), (0, a.jsx)("div", {
            className: n().buttonWrapper,
            children: (0, a.jsx)("div", {
              className: n().buttonPreview,
              children: (0, a.jsxs)("div", {
                className: n().buttonGap,
                children: [(0, a.jsxs)("div", {
                  className: n().buttonDiv,
                  children: [(0, a.jsx)("span", {
                    className: n().editButton,
                    onClick: () => {
                      o(), s({
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
                    className: n().deleteButton,
                    onClick: () => z(e.id, t, i),
                    children: u.A.deleteButton
                  })]
                }), (0, a.jsx)(m.A, {
                  icon: u.A.title,
                  featureName: i("dashboard.premium.layout.simplistic_settings.button_modal.title_label"),
                  readOnly: !0,
                  value: e.button_title
                }), (0, a.jsx)(m.A, {
                  prefix: "https://",
                  prefixLength: 89,
                  icon: u.A.url,
                  readOnly: !0,
                  featureName: i("dashboard.premium.layout.simplistic_settings.button_modal.url_label"),
                  value: e.button_url.replace("https://", "")
                }), "" !== e.button_icon && (0, a.jsx)("div", {
                  className: n().iconUpload,
                  children: (0, a.jsx)("img", {
                    src: e.button_icon,
                    alt: "Icon",
                    className: n().uploadCardImage
                  })
                })]
              })
            })
          })]
        })
      }
      let G = ({
        buttonBorderRadius: e,
        setButtonBorderRadius: t,
        buttonShadow: o,
        setButtonShadow: r,
        textAlign: i,
        setTextAlign: l,
        showUrl: d,
        setShowUrl: m,
        buttons: p,
        setButtons: b
      }) => {
        let y = (0, _.kj)(),
          [f, x] = (0, s.useState)(!1),
          [j, v] = (0, s.useState)(""),
          [k, N] = (0, s.useState)(""),
          [C, w] = (0, s.useState)({
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
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(g.A, {
            opened: f,
            onClose: () => x(!1),
            centered: !0,
            title: A,
            size: "435px",
            children: "add" === C.category ? (0, a.jsx)(P, {
              buttonTitle: j,
              buttonUrl: k,
              setButtonTitle: v,
              setButtonUrl: N,
              setButtons: b,
              modalClose: () => x(!1)
            }) : "edit" === C.category && (0, a.jsx)(E, {
              buttonTitle: C.buttonTitle,
              buttonUrl: C.buttonUrl,
              buttonIcon: C.buttonIcon,
              buttonID: C.id,
              modalClose: () => x(!1),
              setButtons: b
            })
          }), (0, a.jsxs)("div", {
            className: n().simplisticLayout,
            children: [(0, a.jsxs)("div", {
              className: n().buttonEditor,
              children: [(0, a.jsxs)("div", {
                className: n().buttonEditorHeading,
                children: [(0, a.jsx)("h1", {
                  children: y("dashboard.premium.layout.simplistic_settings.button_editor.title")
                }), (0, a.jsxs)("span", {
                  onClick: () => {
                    x(!0), w({
                      modify: !1,
                      category: "add",
                      buttonTitle: "",
                      buttonUrl: "",
                      buttonIcon: "",
                      id: ""
                    })
                  },
                  children: [u.A.addButton, " ", y("dashboard.premium.layout.simplistic_settings.button_editor.add_button")]
                })]
              }), (0, a.jsx)(V, {
                buttons: p,
                setButtons: b,
                openModal: () => x(!0),
                setCurrentModal: w
              })]
            }), (0, a.jsxs)("div", {
              className: n().settings,
              children: [(0, a.jsx)("div", {
                className: n().buttonSettingsHeading,
                children: (0, a.jsx)("h1", {
                  children: y("dashboard.premium.layout.simplistic_settings.settings_title")
                })
              }), (0, a.jsxs)("div", {
                className: n().settingsContainer,
                children: [(0, a.jsx)(h.A, {
                  featureName: y("dashboard.premium.layout.simplistic_settings.text_align.label"),
                  value: i,
                  onChangeFunction: e => {
                    l(e)
                  },
                  icon: u.A.title,
                  data: B
                }), (0, a.jsx)(D.A, {
                  featureName: y("dashboard.premium.layout.simplistic_settings.show_url"),
                  checked: d,
                  onChangeFunction: e => m(e.currentTarget.checked)
                }), (0, a.jsx)(D.A, {
                  featureName: y("dashboard.premium.layout.simplistic_settings.button_shadow"),
                  checked: o,
                  onChangeFunction: e => r(e.currentTarget.checked)
                }), (0, a.jsx)(c.A, {
                  featureName: y("dashboard.premium.layout.simplistic_settings.button_radius.label"),
                  value: e,
                  label: e => `${e}px`,
                  onChangeFunction: e => {
                    t(e)
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
      var K = o(9992),
        q = o(54834);
      async function Z(e, t, o, a, s, r, i = {}) {
        try {
          t(q.A.loading);
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
          i.includePortfolioModules && (l.portfolio_modules = e.portfolio_modules ?? []);
          let n = await fetch("https://guns.lol/api/dashboard/premium/layout", {
              method: "POST",
              body: JSON.stringify(l)
            }),
            d = await n.json();
          if (n.ok) {
            p.oR.success(s("common.unsaved_changes.settings_saved"));
            let t = {
              ...e,
              ...Array.isArray(d?.portfolio_modules) ? {
                portfolio_modules: d.portfolio_modules
              } : {}
            };
            setTimeout(() => {
              r && r(t), a(t), o(!1)
            }, 500)
          } else p.oR.error(d.error)
        } catch (e) {
          p.oR.error(s("common.unsaved_changes.unknown_error")), console.error(e.message)
        } finally {
          setTimeout(() => {
            t(s("common.unsaved_changes.save_button"))
          }, 500)
        }
      }
      let Y = ({
        isBorderEnabled: e,
        setIsBorderEnabled: t,
        borderColor: o,
        setBorderColor: s,
        borderRadius: r,
        setBorderRadius: i,
        avatarRadius: l,
        setAvatarRadius: m,
        borderWidth: p,
        setBorderWidth: b,
        borderStyle: g,
        setBorderStyle: f,
        borderOpacity: x,
        setBorderOpacity: j,
        linksPosition: v,
        setLinksPosition: k
      }) => {
        let N = (0, _.kj)(),
          C = [{
            value: 20,
            label: N("dashboard.premium.layout.sleek_settings.border_radius.marks.twenty")
          }, {
            value: 50,
            label: N("dashboard.premium.layout.sleek_settings.border_radius.marks.fifty")
          }, {
            value: 80,
            label: N("dashboard.premium.layout.sleek_settings.border_radius.marks.eighty")
          }],
          w = [{
            value: 0,
            label: N("dashboard.premium.layout.sleek_settings.avatar_radius.marks.zero")
          }, {
            value: 20,
            label: N("dashboard.premium.layout.sleek_settings.avatar_radius.marks.twenty")
          }, {
            value: 50,
            label: N("dashboard.premium.layout.sleek_settings.avatar_radius.marks.fifty")
          }, {
            value: 80,
            label: N("dashboard.premium.layout.sleek_settings.avatar_radius.marks.eighty")
          }],
          A = [{
            value: 2,
            label: N("dashboard.premium.layout.sleek_settings.border_width.marks.two")
          }, {
            value: 5,
            label: N("dashboard.premium.layout.sleek_settings.border_width.marks.five")
          }, {
            value: 8,
            label: N("dashboard.premium.layout.sleek_settings.border_width.marks.eight")
          }],
          S = [{
            value: "center",
            label: N("dashboard.premium.layout.links_alignment.center")
          }, {
            value: "left",
            label: N("dashboard.premium.layout.links_alignment.left")
          }, {
            value: "right",
            label: N("dashboard.premium.layout.links_alignment.right")
          }],
          B = [{
            value: "static",
            label: N("dashboard.premium.layout.border_style.static")
          }, {
            value: "dashed",
            label: N("dashboard.premium.layout.border_style.dashed")
          }, {
            value: "shimmer",
            label: N("dashboard.premium.layout.border_style.shimmer")
          }, {
            value: "pulse",
            label: N("dashboard.premium.layout.border_style.pulse")
          }],
          T = e ? n().buttonEnabled : n().buttonDisabled;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            className: `${n().generalComponentContainer} ${n().modernLayoutComponentLeft}`,
            children: [(0, a.jsx)("div", {
              className: n().generalComponentLeft,
              style: {
                gap: "35px"
              },
              children: (0, a.jsxs)("div", {
                className: n().featureRow,
                style: {
                  flexDirection: "column",
                  gap: "10px"
                },
                children: [(0, a.jsx)("span", {
                  className: T,
                  onClick: () => t(!e),
                  children: N(e ? "dashboard.premium.layout.sleek_settings.border.disable_button" : "dashboard.premium.layout.sleek_settings.border.enable_button")
                }), e && (0, a.jsxs)("div", {
                  className: n().borderDiv,
                  children: [(0, a.jsxs)("div", {
                    className: n().borderControlsRow,
                    children: [(0, a.jsx)(d.A, {
                      featureName: N("dashboard.premium.layout.sleek_settings.border.color_label"),
                      onChangeFunction: s,
                      value: o
                    }), (0, a.jsx)(h.A, {
                      featureName: N("dashboard.premium.layout.border_style.label"),
                      data: B,
                      value: g ?? "static",
                      onChangeFunction: f,
                      icon: u.A.layout
                    })]
                  }), (0, a.jsxs)("div", {
                    className: n().borderControlsRow,
                    children: [(0, a.jsx)(c.A, {
                      featureName: N("dashboard.premium.layout.sleek_settings.border.width_label"),
                      onChangeFunction: b,
                      value: p,
                      min: 1,
                      max: 10,
                      step: 1,
                      label: e => `${e}px`,
                      marks: A
                    }), (0, a.jsx)(c.A, {
                      featureName: N("dashboard.premium.layout.border_opacity.label"),
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
              className: n().generalComponentLeft,
              children: (0, a.jsxs)("div", {
                className: n().featureRow,
                style: {
                  marginBottom: 35
                },
                children: [(0, a.jsx)(c.A, {
                  featureName: N("dashboard.premium.layout.sleek_settings.border_radius.label"),
                  onChangeFunction: i,
                  value: r,
                  min: 0,
                  max: 100,
                  step: 1,
                  label: e => `${e}px`,
                  marks: C
                }), (0, a.jsx)(c.A, {
                  featureName: N("dashboard.premium.layout.sleek_settings.avatar_radius.label"),
                  onChangeFunction: m,
                  value: l,
                  min: 0,
                  max: 100,
                  step: 1,
                  label: e => `${e}px`,
                  marks: w
                }), (0, a.jsx)(y.A, {
                  featureName: N("dashboard.premium.layout.links_alignment.label"),
                  helpDescription: N("dashboard.premium.layout.links_alignment.description"),
                  element: (0, a.jsx)(h.A, {
                    value: v,
                    onChangeFunction: k,
                    icon: u.A.layout,
                    data: S
                  })
                })]
              })
            })]
          })
        })
      };
      var Q = o(47650),
        X = o(77599),
        ee = o(17440),
        et = o(58295);
      let eo = {
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
      var ea = o(52131),
        es = o(55442);
      let er = ["hero"],
        ei = ["about", "projects", "skills", "custom", "audio"],
        el = ["hero", "about", "projects", "custom", "audio", "skills"],
        en = {
          hero: "dashboard.premium.layout.portfolio_settings.modules.hero.label",
          about: "dashboard.premium.layout.portfolio_settings.modules.about.label",
          projects: "dashboard.premium.layout.portfolio_settings.modules.projects.label",
          custom: "dashboard.premium.layout.portfolio_settings.modules.custom.label",
          audio: "dashboard.premium.layout.portfolio_settings.modules.audio.label",
          skills: "dashboard.premium.layout.portfolio_settings.modules.skills.label"
        },
        ed = {
          hero: "dashboard.premium.layout.portfolio_settings.modules.hero.description",
          about: "dashboard.premium.layout.portfolio_settings.modules.about.description",
          projects: "dashboard.premium.layout.portfolio_settings.modules.projects.description",
          custom: "dashboard.premium.layout.portfolio_settings.modules.custom.description",
          audio: "dashboard.premium.layout.portfolio_settings.modules.audio.description",
          skills: "dashboard.premium.layout.portfolio_settings.modules.skills.description"
        },
        ec = new Set(["youtube", "spotify", "discord", "telegram", "roblox", "github", "lastfm", "timezone"]),
        eu = e => "audio" === e || "skills" === e ? 1 : 2,
        em = () => `portfolio-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,
        ep = "undefined" != typeof Intl && "supportedValuesOf" in Intl ? Intl.supportedValuesOf("timeZone") : ["America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles", "America/Sao_Paulo", "Europe/London", "Europe/Paris", "Europe/Berlin", "Europe/Moscow", "Asia/Dubai", "Asia/Kolkata", "Asia/Tokyo", "Asia/Shanghai", "Australia/Sydney", "Pacific/Auckland", "Africa/Cairo", "Africa/Lagos"],
        eh = (e, t) => e(en[t]),
        eb = (e, t) => e(ed[t]),
        e_ = (e, t) => e(0 === t ? "dashboard.premium.layout.portfolio_settings.about.cards.left" : 1 === t ? "dashboard.premium.layout.portfolio_settings.about.cards.right" : "dashboard.premium.layout.portfolio_settings.about.cards.portfolio"),
        eg = (e, t) => "hero" === e ? {
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
        ey = (e = [], t) => {
          let o = [{
              id: "portfolio-top-hero",
              type: "hero",
              visible: !0,
              settings: eg("hero", t)
            }],
            a = Array.isArray(e) && e.length > 0 ? e.filter(e => el.includes(e?.type)) : o,
            s = a.findIndex(e => e?.type === "hero"),
            r = 0 === s ? a : [s > 0 ? a[s] : o[0], ...a.filter((e, t) => e?.type !== "hero" && t !== s)],
            i = new Set,
            l = {},
            n = r.reduce((e, o, a) => {
              let s, r = el.includes(o.type) ? o.type : "about",
                n = 0 !== a || er.includes(r) ? r : "hero",
                d = o.id || em(),
                c = (l[n] || 0) + 1;
              return i.has(d) || e.length > 0 && er.includes(n) || c > eu(n) ? e : (i.add(d), l[n] = c, e.push({
                id: d,
                type: n,
                visible: !1 !== o.visible,
                settings: (s = {
                  ...eg(n, t),
                  ...o.settings || {}
                }, "hero" === n && (s.hero_style = "centered" === s.hero_style ? "centered" : "classic"), s)
              }), e)
            }, []);
          return 0 === n.length && (n = o), er.includes(n[0].type) || (n[0] = {
            id: n[0].id,
            type: "hero",
            visible: !0,
            settings: eg("hero", t)
          }), n = n.filter((e, t) => 0 === t || !er.includes(e.type))
        };

      function ef(e) {
        let t = (0, _.kj)(),
          {
            modules: o,
            setModules: r
          } = e,
          [i, l] = (0, s.useState)(ey(o, t)),
          [d, c] = (0, s.useState)(null),
          [m, p] = (0, s.useState)(!1),
          [h, b] = (0, s.useState)(null),
          y = (0, U.FR)((0, U.MS)(U.AN, {
            activationConstraint: {
              distance: 10
            }
          }));
        (0, s.useEffect)(() => {
          l(ey(o, t))
        }, [o, t]);
        let f = e => (l(e), r(e), e),
          x = i[0],
          j = i.slice(1),
          v = (0, s.useMemo)(() => i.reduce((e, t) => (e[t.type] = (e[t.type] || 0) + 1, e), {}), [i]),
          k = (e, t) => f(i.map(o => o.id === e ? t(o) : o)),
          N = (e, t) => k(e, e => ({
            ...e,
            settings: {
              ...e.settings,
              ...t
            }
          })),
          C = e => {
            f(i.filter((t, o) => 0 === o || t.id !== e)), h === e && b(null)
          };
        return (0, a.jsxs)("div", {
          className: n().portfolioSettings,
          children: [(0, a.jsx)(g.A, {
            opened: m,
            onClose: () => p(!1),
            title: t("dashboard.premium.layout.portfolio_settings.add_module.title"),
            centered: !0,
            size: "650px",
            children: (0, a.jsx)("div", {
              className: n().portfolioAddModuleGrid,
              children: ei.map(e => {
                let o = v[e] || 0,
                  s = eu(e),
                  r = o >= s;
                return (0, a.jsxs)("button", {
                  type: "button",
                  className: n().portfolioAddModuleOption,
                  disabled: r,
                  onClick: () => (e => {
                    if ((v[e] || 0) >= eu(e)) return;
                    let o = {
                      id: em(),
                      type: e,
                      visible: !0,
                      settings: eg(e, t)
                    };
                    f([...i, o]), b("audio" === e ? null : o.id), p(!1)
                  })(e),
                  children: [(0, a.jsx)("span", {
                    className: n().portfolioAddModuleIcon,
                    children: eo[e]
                  }), (0, a.jsxs)("div", {
                    className: n().portfolioAddModuleText,
                    children: [(0, a.jsx)("h2", {
                      children: eh(t, e)
                    }), (0, a.jsx)("p", {
                      children: r ? t("dashboard.premium.layout.portfolio_settings.add_module.limit_reached", {
                        limit: s
                      }) : eb(t, e)
                    })]
                  }), !r && (0, a.jsx)("span", {
                    className: n().portfolioAddModuleArrow,
                    children: "+"
                  })]
                }, e)
              })
            })
          }), (0, a.jsx)(ex, {
            ...e,
            module: x,
            updateSettings: N
          }), (0, a.jsxs)("div", {
            className: n().portfolioModulesSettings,
            children: [(0, a.jsxs)("div", {
              className: n().portfolioManagerHeader,
              children: [(0, a.jsxs)("div", {
                children: [(0, a.jsx)("h1", {
                  children: t("dashboard.premium.layout.portfolio_settings.manager.title")
                }), (0, a.jsx)("h3", {
                  children: t("dashboard.premium.layout.portfolio_settings.manager.description")
                })]
              }), (0, a.jsx)("div", {
                className: n().portfolioManagerActions,
                children: (0, a.jsxs)("button", {
                  type: "button",
                  className: n().portfolioInlineButton,
                  onClick: () => p(!0),
                  children: [u.A.addTag, " ", t("dashboard.premium.layout.portfolio_settings.add_module.button")]
                })
              })]
            }), (0, a.jsxs)(U.Mp, {
              sensors: y,
              collisionDetection: U.fp,
              onDragStart: e => {
                let t = j.find(t => t.id === e.active.id);
                t && c(t)
              },
              onDragEnd: e => {
                c(null);
                let {
                  active: t,
                  over: o
                } = e;
                if (!o || t.id === o.id) return;
                let a = j.findIndex(e => e.id === t.id),
                  s = j.findIndex(e => e.id === o.id);
                a < 0 || s < 0 || f([x, ...(0, H.be)(j, a, s)])
              },
              children: [(0, a.jsx)(H.gB, {
                items: j.map(e => e.id),
                strategy: H._G,
                children: (0, a.jsx)("div", {
                  className: n().portfolioModuleList,
                  children: j.map(t => (0, a.jsx)(ek, {
                    module: t,
                    updateModule: k,
                    updateSettings: N,
                    removeModule: C,
                    activeItemId: d?.id ?? null,
                    isExpanded: h === t.id,
                    setExpandedModuleId: b,
                    onSave: e.onSave,
                    saveButtonText: e.saveButtonText,
                    isMonochromeIcons: !0 === e.isMonochromeIcons,
                    audioList: e.audioList
                  }, t.id))
                })
              }), (0, a.jsx)(U.Hd, {
                children: d && (0, a.jsx)(ej, {
                  module: d,
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
            updateSettings: s
          } = e;
        return (0, a.jsxs)("div", {
          className: n().portfolioTopSettings,
          children: [(0, a.jsx)("div", {
            className: n().portfolioTopSettingsHeader,
            children: (0, a.jsxs)("div", {
              children: [(0, a.jsx)("h1", {
                children: t("dashboard.premium.layout.portfolio_settings.modules.hero.label")
              }), (0, a.jsx)("h3", {
                children: t("dashboard.premium.layout.portfolio_settings.hero.description")
              })]
            })
          }), (0, a.jsx)(eT, {
            module: o,
            updateSettings: s,
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
          className: `${n().portfolioModuleItem} ${t?n().portfolioModuleOverlay:""}`,
          children: [(0, a.jsx)("div", {
            className: n().portfolioDragHandleStrip,
            children: u.A.dragHandle
          }), (0, a.jsx)("div", {
            className: n().portfolioModuleContent,
            children: (0, a.jsx)("div", {
              className: n().portfolioModuleHeader,
              children: (0, a.jsxs)("div", {
                className: n().portfolioModuleTitle,
                children: [(0, a.jsx)("span", {
                  className: n().portfolioModuleTypeIcon,
                  children: eo[e.type]
                }), (0, a.jsxs)("div", {
                  children: [(0, a.jsx)("h1", {
                    children: eh(o, e.type)
                  }), (0, a.jsx)("h3", {
                    children: eb(o, e.type)
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
          className: n().saveSecondTabButton,
          role: "button",
          tabIndex: 0,
          onClick: () => e(),
          onKeyDown: t => {
            ("Enter" === t.key || " " === t.key) && (t.preventDefault(), e())
          },
          children: t || o("common.unsaved_changes.save_button")
        }) : null
      }

      function ek({
        module: e,
        updateModule: t,
        updateSettings: o,
        removeModule: s,
        activeItemId: r,
        isExpanded: i,
        setExpandedModuleId: l,
        onSave: d,
        saveButtonText: c,
        isMonochromeIcons: m,
        audioList: p
      }) {
        let h = (0, _.kj)(),
          {
            listeners: b,
            setNodeRef: g,
            transform: y,
            transition: f,
            isDragging: x
          } = (0, H.gl)({
            id: e.id,
            animateLayoutChanges: () => !1
          }),
          j = eb(h, e.type),
          v = {
            transform: W.Ks.Transform.toString(y),
            transition: f,
            opacity: +!x
          };
        return (0, a.jsxs)("div", {
          ref: g,
          style: v,
          className: `${n().portfolioModuleItem} ${r&&r!==e.id?n().portfolioModuleItemCollapsed:""}`,
          children: [(0, a.jsx)("div", {
            className: n().portfolioDragHandleStrip,
            onClick: e => e.stopPropagation(),
            ...b,
            children: u.A.dragHandle
          }), (0, a.jsxs)("div", {
            className: n().portfolioModuleContent,
            children: [(0, a.jsxs)("div", {
              className: `${n().portfolioModuleHeader} `,
              role: "button",
              tabIndex: 0,
              onClick: () => {
                l(i ? null : e.id)
              },
              onKeyDown: t => {
                ("Enter" === t.key || " " === t.key) && (t.preventDefault(), l(i ? null : e.id))
              },
              children: [(0, a.jsxs)("div", {
                className: n().portfolioModuleTitle,
                children: [(0, a.jsx)("span", {
                  className: n().portfolioModuleTypeIcon,
                  children: eo[e.type]
                }), (0, a.jsxs)("div", {
                  children: [(0, a.jsx)("h1", {
                    children: eh(h, e.type)
                  }), (0, a.jsx)("h3", {
                    children: j
                  })]
                })]
              }), (0, a.jsxs)("div", {
                className: n().portfolioModuleActions,
                onClick: e => e.stopPropagation(),
                children: [(0, a.jsx)("button", {
                  type: "button",
                  onClick: () => t(e.id, e => ({
                    ...e,
                    visible: !e.visible
                  })),
                  children: e.visible ? ea.A.eye : ea.A.eyeOff
                }), (0, a.jsx)("button", {
                  type: "button",
                  onClick: () => l(i ? null : e.id),
                  children: i ? u.A.moveUp : u.A.moveDown
                }), (0, a.jsx)("button", {
                  type: "button",
                  onClick: () => s(e.id),
                  children: u.A.deleteButton
                })]
              })]
            }), i && (0, a.jsx)(ew, {
              module: e,
              updateSettings: o,
              onSave: d,
              saveButtonText: c,
              isMonochromeIcons: m,
              audioList: p
            })]
          })]
        })
      }

      function eN(e, t, o) {
        return (a, s = "", r = "text") => {
          let i = e.current,
            l = t();
          if (!i) return void o(`${l}${l?"\n":""}${a}${r}${s}`);
          let n = i.selectionStart ?? l.length,
            d = i.selectionEnd ?? l.length,
            c = l.slice(n, d) || r;
          o(`${l.slice(0,n)}${a}${c}${s}${l.slice(d)}`), requestAnimationFrame(() => {
            i.focus(), i.setSelectionRange(n + a.length, n + a.length + c.length)
          })
        }
      }

      function eC({
        insert: e,
        onOptions: t
      }) {
        let o = (0, _.kj)();
        return (0, a.jsxs)("div", {
          className: n().portfolioMarkdownToolbar,
          role: "toolbar",
          children: [(0, a.jsxs)("div", {
            className: n().portfolioToolbarGroup,
            children: [(0, a.jsx)("button", {
              type: "button",
              title: o("dashboard.premium.layout.portfolio_settings.markdown.bold"),
              className: n().portfolioToolbarBtn,
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
              className: n().portfolioToolbarBtn,
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
              className: n().portfolioToolbarBtn,
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
              className: n().portfolioToolbarDivider
            }), (0, a.jsx)("button", {
              type: "button",
              title: o("dashboard.premium.layout.portfolio_settings.markdown.bulleted_list"),
              className: n().portfolioToolbarBtn,
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
              className: n().portfolioToolbarBtn,
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
              className: n().portfolioToolbarBtn,
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
              className: n().portfolioToolbarBtn,
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
            className: n().portfolioToolbarOptionsBtn,
            onClick: t,
            children: [u.A.layout, " ", o("dashboard.premium.layout.portfolio_settings.markdown.options")]
          })]
        })
      }

      function ew({
        module: e,
        updateSettings: t,
        onSave: o,
        saveButtonText: r,
        isMonochromeIcons: i,
        audioList: l
      }) {
        let d = (0, _.kj)(),
          c = e.settings || {},
          p = (0, s.useRef)(null);
        if ("about" === e.type) return (0, a.jsx)(eR, {
          module: e,
          settings: c,
          updateSettings: t,
          onSave: o,
          saveButtonText: r,
          isMonochromeIcons: i
        });
        if ("projects" === e.type) return (0, a.jsx)(eI, {
          module: e,
          settings: c,
          updateSettings: t,
          onSave: o,
          saveButtonText: r,
          isMonochromeIcons: i
        });
        if ("skills" === e.type) return (0, a.jsx)(eF, {
          module: e,
          settings: c,
          updateSettings: t,
          onSave: o,
          saveButtonText: r,
          isMonochromeIcons: i
        });
        if ("audio" === e.type) return (0, a.jsx)(eA, {
          module: e,
          settings: c,
          updateSettings: t,
          audioList: l
        });
        let b = eN(p, () => c.content || "", o => t(e.id, {
          content: o
        }));
        return (0, a.jsxs)("div", {
          className: n().portfolioFieldStack,
          children: [(0, a.jsx)(m.A, {
            featureName: d("dashboard.premium.layout.portfolio_settings.fields.title"),
            value: c.title || "",
            onChangeFunction: o => t(e.id, {
              title: o.target.value
            }),
            icon: u.A.layout
          }), (0, a.jsx)(h.A, {
            featureName: d("dashboard.premium.layout.portfolio_settings.fields.text_alignment"),
            data: [{
              value: "left",
              label: d("dashboard.premium.layout.portfolio_settings.options.text_alignment.left")
            }, {
              value: "center",
              label: d("dashboard.premium.layout.portfolio_settings.options.text_alignment.center")
            }, {
              value: "right",
              label: d("dashboard.premium.layout.portfolio_settings.options.text_alignment.right")
            }],
            value: c.text_alignment || "left",
            onChangeFunction: o => t(e.id, {
              text_alignment: o
            }),
            icon: u.A.layout
          }), (0, a.jsxs)("div", {
            className: n().portfolioEditorBox,
            children: [(0, a.jsx)(eC, {
              insert: b
            }), (0, a.jsx)("textarea", {
              ref: p,
              className: n().portfolioEditorTextarea,
              value: c.content || "",
              placeholder: d("dashboard.premium.layout.portfolio_settings.custom_text.placeholder"),
              onChange: o => t(e.id, {
                content: o.target.value
              })
            })]
          })]
        })
      }

      function eA({
        module: e,
        settings: t,
        updateSettings: o,
        audioList: r
      }) {
        let i = (0, _.kj)(),
          l = (0, s.useMemo)(() => {
            var e;
            return (e = r) ? "string" == typeof e ? e ? [{
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
          }, [r]),
          d = (0, s.useMemo)(() => t?.lyrics_track_map && "object" == typeof t.lyrics_track_map ? t.lyrics_track_map : {}, [t?.lyrics_track_map]),
          [c, b] = (0, s.useState)(l[0]?.id || ""),
          [y, f] = (0, s.useState)(""),
          [x, j] = (0, s.useState)(""),
          [v, k] = (0, s.useState)(!1),
          [N, C] = (0, s.useState)([]),
          [w, A] = (0, s.useState)(""),
          [S, T] = (0, s.useState)(!1),
          L = (0, s.useRef)(null),
          R = (0, s.useMemo)(() => l.find(e => e.id === c) || l[0] || null, [l, c]),
          F = R ? d[R.id] : null;
        (0, s.useEffect)(() => {
          !c && l[0]?.id && b(l[0].id)
        }, [l, c]), (0, s.useEffect)(() => {
          f(""), j(""), C([]), A(""), T(!1)
        }, [R?.id]), (0, s.useEffect)(() => {
          let t = d && "object" == typeof d ? d : {},
            a = Object.entries(t);
          if (0 === a.length) return;
          let s = new Set(l.map(e => String(e.id))),
            r = {};
          for (let [e, t] of a) {
            if (!t || "object" != typeof t) continue;
            let o = String(t.track_id || e || ""),
              a = "";
            if (s.has(e) ? a = e : s.has(o) && (a = o), !a || r[a]) continue;
            let i = {
              ...t
            };
            delete i.track_url, delete i.duration, r[a] = {
              ...i,
              track_id: a
            }
          }
          let i = Object.keys(t).sort(),
            n = Object.keys(r).sort(),
            c = i.length !== n.length || i.some((e, t) => e !== n[t]),
            u = !c && n.some(e => JSON.stringify(t[e]) !== JSON.stringify(r[e]));
          (c || u) && o(e.id, {
            lyrics_track_map: r
          })
        }, [d, l, e.id, o]);
        let M = (t, a, s) => {
            let r = {
              ...d
            };
            a ? r[t] = a : delete r[t];
            let i = Object.values(r).some(e => "string" == typeof e?.synced_lyrics && e.synced_lyrics.trim().length > 0);
            o(e.id, {
              lyrics_track_map: r,
              show_lyrics: "boolean" == typeof s ? s : i
            })
          },
          D = async () => {
            if (!R) return;
            let e = y.trim(),
              t = x.trim();
            if (!e) return void p.oR.error(i("dashboard.premium.layout.portfolio_settings.lyrics_editor.errors.track_required"));
            k(!0), C([]), A(""), T(!0);
            try {
              let o = await fetch("https://guns.lol/api/dashboard/premium/lyrics/search", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    track_name: e,
                    artist_name: t,
                    duration: R.duration && R.duration > 0 ? R.duration : void 0
                  })
                }),
                a = [];
              if (o.ok) {
                let e = await o.json();
                a = Array.isArray(e?.results) ? e.results : []
              }
              if (0 === a.length) return void A(i("dashboard.premium.layout.portfolio_settings.lyrics_editor.messages.no_results"));
              C(a.slice(0, 8))
            } catch (e) {
              console.error(e), p.oR.error(i("dashboard.premium.layout.portfolio_settings.lyrics_editor.errors.fetch_failed"))
            } finally {
              k(!1)
            }
          }, $ = async e => {
            let t = e.target.files?.[0];
            if (e.target.value = "", !R || !t) return;
            let o = String(t.name || "").toLowerCase();
            if (!o.endsWith(".lrc") && !o.endsWith(".elrc")) return void p.oR.error(i("dashboard.premium.layout.portfolio_settings.lyrics_editor.errors.lrc_required"));
            if (t.size > 358400) return void p.oR.error(i("dashboard.premium.layout.portfolio_settings.lyrics_editor.errors.lrc_too_large"));
            try {
              let e = await t.text(),
                o = (0, es.h6)(e);
              if (!o) return void p.oR.error(i("dashboard.premium.layout.portfolio_settings.lyrics_editor.errors.no_timed_lines"));
              M(R.id, {
                track_id: R.id,
                track_title: R.title,
                track_name: y.trim() || R.title,
                artist_name: x.trim(),
                album_name: "",
                synced_lyrics: o.syncedLyrics,
                plain_lyrics: o.plainLyrics
              }, !0), C([]), A(""), p.oR.success(i(1 === o.lineCount ? "dashboard.premium.layout.portfolio_settings.lyrics_editor.messages.import_success_one" : "dashboard.premium.layout.portfolio_settings.lyrics_editor.messages.import_success_other", {
                count: o.lineCount
              }))
            } catch (e) {
              console.error(e), p.oR.error(i("dashboard.premium.layout.portfolio_settings.lyrics_editor.errors.lrc_read_failed"))
            }
          };
        return (0, a.jsxs)("div", {
          className: n().portfolioFieldStack,
          children: [(0, a.jsx)(g.A, {
            opened: S,
            onClose: () => T(!1),
            title: i("dashboard.premium.layout.portfolio_settings.lyrics_editor.modal.title"),
            centered: !0,
            size: "560px",
            children: (0, a.jsx)("div", {
              className: n().portfolioFieldStack,
              children: v ? (0, a.jsxs)("div", {
                className: B().uploaderMessage,
                children: [(0, a.jsx)("span", {
                  children: u.A.loading
                }), (0, a.jsx)("h1", {
                  children: i("dashboard.premium.layout.portfolio_settings.lyrics_editor.modal.searching")
                })]
              }) : N.length > 0 ? (0, a.jsx)("div", {
                className: n().portfolioLyricsResults,
                children: N.map(e => {
                  let t = String(e.trackName || e.name || "").trim(),
                    o = String(e.artistName || "").trim(),
                    s = `${e.id||"result"}-${t}-${o}`;
                  return (0, a.jsxs)("button", {
                    type: "button",
                    className: n().portfolioLyricsResult,
                    onClick: () => {
                      if (!R) return void p.oR.error(i("dashboard.premium.layout.portfolio_settings.lyrics_editor.errors.select_track_first"));
                      let a = String(e.syncedLyrics || "").trim();
                      a ? (M(R.id, {
                        track_id: R.id,
                        track_title: R.title,
                        track_name: t || y.trim() || R.title,
                        artist_name: o || x.trim(),
                        album_name: String(e.albumName || "").trim(),
                        synced_lyrics: a,
                        plain_lyrics: String(e.plainLyrics || "")
                      }, !0), C([]), A(""), T(!1), p.oR.success(i("dashboard.premium.layout.portfolio_settings.lyrics_editor.messages.applied"))) : p.oR.error(i("dashboard.premium.layout.portfolio_settings.lyrics_editor.errors.result_missing_synced"))
                    },
                    children: [(0, a.jsxs)("div", {
                      className: n().portfolioLyricsResultMeta,
                      children: [(0, a.jsx)("h2", {
                        children: t || R?.title || i("dashboard.premium.layout.portfolio_settings.lyrics_editor.modal.selected_track")
                      }), (0, a.jsx)("p", {
                        children: [o, e.albumName].filter(Boolean).join(" • ") || i("dashboard.premium.layout.portfolio_settings.lyrics_editor.modal.result_fallback")
                      })]
                    }), (0, a.jsx)("span", {
                      children: i("dashboard.premium.layout.portfolio_settings.lyrics_editor.actions.apply")
                    })]
                  }, s)
                })
              }) : (0, a.jsx)("p", {
                className: n().portfolioAudioLyricsHint,
                children: w || i("dashboard.premium.layout.portfolio_settings.lyrics_editor.messages.search_prompt")
              })
            })
          }), 0 === l.length ? (0, a.jsx)("div", {
            className: n().portfolioAudioLyricsEmpty,
            children: i("dashboard.premium.layout.portfolio_settings.lyrics_editor.messages.empty_state")
          }) : (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(h.A, {
              featureName: i("dashboard.premium.layout.portfolio_settings.lyrics_editor.fields.audio_track"),
              value: R?.id || "",
              data: l.map((e, t) => ({
                value: e.id,
                label: e.title || i("dashboard.premium.layout.portfolio_settings.lyrics_editor.fields.audio_track_fallback", {
                  number: t + 1
                })
              })),
              onChangeFunction: e => b(String(e || "")),
              icon: eo.audio
            }), F?.synced_lyrics ? (0, a.jsx)("div", {
              className: n().portfolioAudioLyricsActions,
              children: (0, a.jsxs)("button", {
                type: "button",
                className: n().portfolioInlineButton,
                onClick: () => {
                  M(R.id, null)
                },
                children: [u.A.deleteButton, " ", i("dashboard.premium.layout.portfolio_settings.lyrics_editor.actions.remove_lyrics")]
              })
            }) : (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(m.A, {
                featureName: i("dashboard.premium.layout.portfolio_settings.lyrics_editor.fields.track_name"),
                placeholder: i("dashboard.premium.layout.portfolio_settings.lyrics_editor.fields.track_name_placeholder"),
                value: y,
                onChangeFunction: e => f(e.target.value),
                icon: eo.audio
              }), (0, a.jsx)(m.A, {
                featureName: i("dashboard.premium.layout.portfolio_settings.lyrics_editor.fields.artist_optional"),
                placeholder: i("dashboard.premium.layout.portfolio_settings.lyrics_editor.fields.artist_placeholder"),
                value: x,
                onChangeFunction: e => j(e.target.value),
                icon: u.A.artist
              }), (0, a.jsxs)("div", {
                className: n().portfolioAudioLyricsActions,
                children: [(0, a.jsxs)("button", {
                  type: "button",
                  className: n().portfolioInlineButton,
                  disabled: v,
                  onClick: D,
                  children: [v ? u.A.loading : eo.audio, v ? i("dashboard.premium.layout.portfolio_settings.lyrics_editor.actions.searching") : i("dashboard.premium.layout.portfolio_settings.lyrics_editor.actions.search")]
                }), (0, a.jsxs)("button", {
                  type: "button",
                  className: n().portfolioInlineButton,
                  onClick: () => L.current?.click(),
                  children: [u.A.upload || u.A.addTag || eo.audio, " ", i("dashboard.premium.layout.portfolio_settings.lyrics_editor.actions.import_lrc")]
                })]
              }), (0, a.jsx)("input", {
                ref: L,
                type: "file",
                accept: ".lrc,.elrc,text/plain",
                onChange: $,
                style: {
                  display: "none"
                }
              })]
            })]
          })]
        })
      }
      let eS = [{
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

      function eB({
        value: e,
        onChange: t
      }) {
        let o = (0, _.kj)();
        return (0, a.jsx)("div", {
          className: n().heroStylePicker,
          children: eS.map(s => (0, a.jsxs)("button", {
            type: "button",
            className: `${n().heroStyleOption} ${e===s.value?n().heroStyleOptionSelected:""}`,
            onClick: () => t(s.value),
            children: [(0, a.jsx)("span", {
              className: n().heroStylePreview,
              children: s.svg
            }), (0, a.jsx)("span", {
              className: n().heroStyleLabel,
              children: o(s.labelKey)
            })]
          }, s.value))
        })
      }

      function eT({
        module: e,
        updateSettings: t,
        isBorderEnabled: o,
        setIsBorderEnabled: s,
        borderColor: r,
        setBorderColor: i,
        borderWidth: l,
        setBorderWidth: m,
        borderStyle: p,
        setBorderStyle: b,
        borderOpacity: g,
        setBorderOpacity: y,
        portfolioBorderRadius: f,
        setPortfolioBorderRadius: x
      }) {
        let j = (0, _.kj)(),
          v = e.settings || {},
          k = [{
            value: 20,
            label: j("dashboard.premium.layout.default_settings.border_radius.marks.twenty")
          }, {
            value: 50,
            label: j("dashboard.premium.layout.default_settings.border_radius.marks.fifty")
          }, {
            value: 80,
            label: j("dashboard.premium.layout.default_settings.border_radius.marks.eighty")
          }],
          N = [{
            value: 2,
            label: j("dashboard.premium.layout.default_settings.border_width.marks.two")
          }, {
            value: 5,
            label: j("dashboard.premium.layout.default_settings.border_width.marks.five")
          }, {
            value: 8,
            label: j("dashboard.premium.layout.default_settings.border_width.marks.eight")
          }],
          C = [{
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
          className: n().portfolioFieldStack,
          children: [(0, a.jsxs)("div", {
            className: n().heroStyleSection,
            children: [(0, a.jsx)("span", {
              className: n().portfolioFieldLabel,
              children: j("dashboard.premium.layout.portfolio_settings.hero.style.label")
            }), (0, a.jsx)(eB, {
              value: v.hero_style || "classic",
              onChange: o => t(e.id, {
                hero_style: o
              })
            })]
          }), (0, a.jsxs)("div", {
            className: n().heroToggleSection,
            children: [(0, a.jsx)("h1", {
              className: n().heroToggleLabel,
              children: j("dashboard.premium.layout.portfolio_settings.hero.elements_label")
            }), (0, a.jsxs)("div", {
              className: n().heroElementsPanel,
              children: [(0, a.jsxs)("div", {
                className: n().heroRadiusBlock,
                children: [(0, a.jsxs)("div", {
                  className: n().borderToggleRow,
                  children: [(0, a.jsx)("span", {
                    className: n().heroVisibilityRowLabel,
                    children: j(o ? "dashboard.premium.layout.default_settings.border.disable_button" : "dashboard.premium.layout.default_settings.border.enable_button")
                  }), (0, a.jsx)("div", {
                    className: n().heroVisibilitySwitchCell,
                    children: (0, a.jsx)(D.A, {
                      checked: o,
                      onChange: e => s(e.target.checked)
                    })
                  })]
                }), o && (0, a.jsxs)("div", {
                  className: n().borderDiv,
                  children: [(0, a.jsxs)("div", {
                    className: n().borderControlsRow,
                    children: [(0, a.jsx)(d.A, {
                      featureName: j("dashboard.premium.layout.default_settings.border.color_label"),
                      onChangeFunction: i,
                      value: r
                    }), (0, a.jsx)(h.A, {
                      featureName: j("dashboard.premium.layout.border_style.label"),
                      data: C,
                      value: p ?? "static",
                      onChangeFunction: b,
                      icon: u.A.layout
                    })]
                  }), (0, a.jsxs)("div", {
                    className: n().borderControlsRow,
                    children: [(0, a.jsx)(c.A, {
                      featureName: j("dashboard.premium.layout.default_settings.border.width_label"),
                      onChangeFunction: m,
                      value: l,
                      min: 1,
                      max: 10,
                      step: 1,
                      label: e => `${e}px`,
                      marks: N
                    }), (0, a.jsx)(c.A, {
                      featureName: j("dashboard.premium.layout.border_opacity.label"),
                      onChangeFunction: y,
                      value: g,
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
                className: n().heroRadiusBlock,
                children: [(0, a.jsx)("div", {
                  className: n().heroRadiusHeader,
                  children: (0, a.jsx)("span", {
                    className: n().heroVisibilityRowLabel,
                    children: j("dashboard.premium.layout.portfolio_settings.hero.border_radius_label")
                  })
                }), (0, a.jsx)("div", {
                  className: n().heroRadiusSliderWrap,
                  children: (0, a.jsx)(c.A, {
                    onChangeFunction: x,
                    value: f,
                    min: 0,
                    max: 100,
                    step: 1,
                    label: e => `${e}px`,
                    marks: k,
                    className: n().heroRadiusSliderCard
                  })
                })]
              }), (0, a.jsx)("div", {
                className: n().heroVisibilityList,
                children: w.map(([o, s]) => (0, a.jsxs)("div", {
                  className: n().heroVisibilityRow,
                  children: [(0, a.jsx)("span", {
                    className: n().heroVisibilityRowLabel,
                    children: s
                  }), (0, a.jsx)("div", {
                    className: n().heroVisibilitySwitchCell,
                    children: (0, a.jsx)(D.A, {
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

      function eL({
        opened: e,
        onClose: t,
        card: o,
        cardLabel: r,
        hasOtherDiscordPresence: i,
        onCardUpdate: l,
        onSave: d
      }) {
        let c = (0, _.kj)(),
          h = [{
            value: "discord_presence",
            name: "Discord Presence",
            icon: u.A.discord,
            placeholder: void 0
          }, {
            value: "youtube",
            name: "YouTube",
            icon: u.A.youtube,
            placeholder: c("dashboard.premium.layout.modern_settings.second_tab.placeholders.youtube")
          }, {
            value: "spotify",
            name: "Spotify",
            icon: u.A.spotify,
            placeholder: c("dashboard.premium.layout.modern_settings.second_tab.placeholders.spotify")
          }, {
            value: "discord",
            name: "Discord",
            icon: u.A.discord,
            placeholder: c("dashboard.premium.layout.modern_settings.second_tab.placeholders.discord")
          }, {
            value: "telegram",
            name: "Telegram",
            icon: u.A.telegram,
            placeholder: c("dashboard.premium.layout.modern_settings.second_tab.placeholders.telegram")
          }, {
            value: "roblox",
            name: "Roblox",
            icon: u.A.roblox,
            placeholder: c("dashboard.premium.layout.modern_settings.second_tab.placeholders.roblox")
          }, {
            value: "github",
            name: "GitHub",
            icon: u.A.github,
            placeholder: c("dashboard.premium.layout.modern_settings.second_tab.placeholders.github")
          }, {
            value: "lastfm",
            name: "LastFM",
            icon: u.A.lastfm,
            placeholder: c("dashboard.premium.layout.modern_settings.second_tab.placeholders.lastfm")
          }, {
            value: "timezone",
            name: "Timezone",
            icon: u.A.timezone,
            placeholder: void 0
          }],
          b = eD(o),
          [y, f] = (0, s.useState)("empty" !== b),
          [x, j] = (0, s.useState)("empty" !== b ? b : "youtube"),
          [v, k] = (0, s.useState)(e$(o)),
          [N, C] = (0, s.useState)(o.second_tab_config?.clock_face_style ?? "dark"),
          [w, A] = (0, s.useState)(o.second_tab_config?.clock_hidden ?? !1),
          [S, B] = (0, s.useState)(o.second_tab_config?.clock_time_format ?? "24h"),
          [T, L] = (0, s.useState)("timezone" === b ? e$(o).replace(/_/g, " ") : ""),
          [R, F] = (0, s.useState)(!1);
        (0, s.useEffect)(() => {
          if (!e) return;
          let t = eD(o),
            a = e$(o);
          f(!0), j("empty" !== t ? t : "youtube"), k(a), L("timezone" === t ? a.replace(/_/g, " ") : ""), F(!1), C(o.second_tab_config?.clock_face_style ?? "dark"), A(o.second_tab_config?.clock_hidden ?? !1), B(o.second_tab_config?.clock_time_format ?? "24h")
        }, [e]);
        let M = T.replace(/_/g, " ").toLowerCase(),
          D = ep.filter(e => e.replace(/_/g, " ").toLowerCase().includes(M)).slice(0, 80).map(e => ({
            value: e,
            label: e.replace(/_/g, " ")
          })),
          $ = h.find(e => e.value === x),
          O = h[0],
          z = h.slice(1);
        return (0, a.jsxs)(g.A, {
          opened: e,
          onClose: t,
          title: r,
          centered: !0,
          size: "550px",
          children: [(0, a.jsx)("span", {
            className: y ? n().buttonEnabled : n().buttonDisabled,
            onClick: y ? () => {
              l({
                type: "empty"
              }), p.oR.success(`${r} disabled`), t()
            } : () => f(!0),
            children: y ? c("dashboard.premium.layout.portfolio_settings.about.cards.disable", {
              label: r
            }) : c("dashboard.premium.layout.portfolio_settings.about.cards.enable", {
              label: r
            })
          }), y && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsxs)("div", {
              className: n().cardOptionsWrapper,
              children: [(0, a.jsxs)("div", {
                className: `${n().secondTabOption} ${n().cardOptionDiscordPresence} ${"discord_presence"===x?n().selected:""} ${i?n().secondTabOptionDisabled:""}`,
                onClick: () => {
                  i || ("discord_presence" !== x && (k(""), L("")), j("discord_presence"))
                },
                children: [O.icon, (0, a.jsx)("h1", {
                  children: O.name
                })]
              }), (0, a.jsx)("div", {
                className: n().secondTabOptions,
                children: z.map(e => (0, a.jsxs)("div", {
                  className: `${n().secondTabOption} ${x===e.value?n().selected:""}`,
                  onClick: () => {
                    e.value !== x && (k(""), L("")), j(e.value)
                  },
                  children: [e.icon, (0, a.jsx)("h1", {
                    children: e.name
                  })]
                }, e.value))
              })]
            }), (0, a.jsxs)("div", {
              className: n().secondTab,
              children: ["timezone" === x ? (0, a.jsxs)("div", {
                className: n().timezonePickerContainer,
                children: [(0, a.jsxs)("div", {
                  className: n().timezoneInputRow,
                  children: [(0, a.jsxs)("div", {
                    className: n().timezoneComboboxWrapper,
                    children: [(0, a.jsx)("input", {
                      type: "text",
                      className: n().timezoneComboboxInput,
                      placeholder: c("dashboard.premium.layout.modern_settings.second_tab.timezone.search_placeholder"),
                      value: T,
                      onChange: e => {
                        L(e.target.value), k(""), F(!0)
                      },
                      onFocus: () => F(!0),
                      onBlur: () => setTimeout(() => F(!1), 150)
                    }), R && D.length > 0 && (0, a.jsx)("div", {
                      className: n().timezoneDropdown,
                      children: (0, a.jsx)("ul", {
                        className: n().timezoneDropdownList,
                        children: D.map(e => (0, a.jsx)("li", {
                          className: `${n().timezoneDropdownItem} ${e.value===v?n().timezoneDropdownSelected:""}`,
                          onMouseDown: e => e.preventDefault(),
                          onClick: () => {
                            k(e.value), L(e.label), F(!1)
                          },
                          children: e.label
                        }, e.value))
                      })
                    })]
                  }), (0, a.jsxs)("button", {
                    className: n().useMyTimezoneBtn,
                    type: "button",
                    onClick: () => {
                      try {
                        let e = Intl.DateTimeFormat().resolvedOptions().timeZone;
                        k(e), L(e.replace(/_/g, " ")), F(!1)
                      } catch {}
                    },
                    children: [u.A.timezone, " ", c("dashboard.premium.layout.modern_settings.second_tab.timezone.use_my_timezone")]
                  })]
                }), (0, a.jsxs)("div", {
                  className: n().clockSettingsGroup,
                  children: [(0, a.jsxs)("div", {
                    className: n().clockSettingRow,
                    children: [(0, a.jsx)("div", {
                      className: n().clockSettingLabel,
                      children: (0, a.jsx)("span", {
                        children: c("dashboard.premium.layout.modern_settings.second_tab.timezone.clock_face")
                      })
                    }), (0, a.jsxs)("div", {
                      className: n().segmentControl,
                      children: [(0, a.jsx)("button", {
                        type: "button",
                        className: `${n().segmentBtn} ${"dark"===N?n().segmentActive:""}`,
                        onClick: () => C("dark"),
                        children: c("dashboard.premium.layout.modern_settings.second_tab.timezone.clock_dark")
                      }), (0, a.jsx)("button", {
                        type: "button",
                        className: `${n().segmentBtn} ${"light"===N?n().segmentActive:""}`,
                        onClick: () => C("light"),
                        children: c("dashboard.premium.layout.modern_settings.second_tab.timezone.clock_light")
                      })]
                    })]
                  }), (0, a.jsx)("div", {
                    className: n().clockSettingDivider
                  }), (0, a.jsxs)("div", {
                    className: n().clockSettingRow,
                    children: [(0, a.jsx)("div", {
                      className: n().clockSettingLabel,
                      children: (0, a.jsx)("span", {
                        children: c("dashboard.premium.layout.modern_settings.second_tab.timezone.clock_visibility")
                      })
                    }), (0, a.jsxs)("div", {
                      className: n().segmentControl,
                      children: [(0, a.jsx)("button", {
                        type: "button",
                        className: `${n().segmentBtn} ${!w?n().segmentActive:""}`,
                        onClick: () => A(!1),
                        children: c("dashboard.premium.layout.modern_settings.second_tab.timezone.clock_show")
                      }), (0, a.jsx)("button", {
                        type: "button",
                        className: `${n().segmentBtn} ${w?n().segmentActive:""}`,
                        onClick: () => A(!0),
                        children: c("dashboard.premium.layout.modern_settings.second_tab.timezone.clock_hide")
                      })]
                    })]
                  }), (0, a.jsx)("div", {
                    className: n().clockSettingDivider
                  }), (0, a.jsxs)("div", {
                    className: n().clockSettingRow,
                    children: [(0, a.jsx)("div", {
                      className: n().clockSettingLabel,
                      children: (0, a.jsx)("span", {
                        children: c("dashboard.premium.layout.modern_settings.second_tab.timezone.time_format")
                      })
                    }), (0, a.jsxs)("div", {
                      className: n().segmentControl,
                      children: [(0, a.jsx)("button", {
                        type: "button",
                        className: `${n().segmentBtn} ${"24h"===S?n().segmentActive:""}`,
                        onClick: () => B("24h"),
                        children: c("dashboard.premium.layout.modern_settings.second_tab.timezone.time_format_24h")
                      }), (0, a.jsx)("button", {
                        type: "button",
                        className: `${n().segmentBtn} ${"12h"===S?n().segmentActive:""}`,
                        onClick: () => B("12h"),
                        children: c("dashboard.premium.layout.modern_settings.second_tab.timezone.time_format_12h")
                      })]
                    })]
                  })]
                })]
              }) : "discord_presence" !== x ? (0, a.jsx)(m.A, {
                featureName: r,
                placeholder: $?.placeholder,
                icon: $?.icon,
                value: v,
                onChangeFunction: e => k(e.target.value)
              }) : null, (0, a.jsx)("span", {
                className: n().saveSecondTabButton,
                onClick: () => {
                  if (y && "discord_presence" !== x) {
                    let e = eO(x, v, T);
                    if (! function(e, t) {
                        if (!ec.has(e) || !t) return !1;
                        if ("timezone" === e) try {
                          return Intl.DateTimeFormat(void 0, {
                            timeZone: t
                          }), !0
                        } catch {
                          return !1
                        }
                        return ({
                          youtube: /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/,
                          spotify: /^(?:https?:\/\/)?(?:open\.spotify\.com\/)(?:intl-[a-zA-Z]+\/)?(album|track|playlist|show|episode)[\/:].+/,
                          discord: /^(?:https?:\/\/)?(?:www\.)?(?:discord\.gg|discord\.com\/invite)\/[a-zA-Z0-9-]+$/,
                          telegram: /^(https?:\/\/)?(www\.)?t\.me\/.+$/,
                          roblox: /^(https?:\/\/)?(www\.)?roblox\.com\/users\/\d+\/profile$/,
                          github: /^(https?:\/\/)?(www\.)?github\.com\/.+$/,
                          lastfm: /^(https?:\/\/)?(www\.)?last\.fm\/user\/[a-zA-Z0-9_-]+$/
                        })[e]?.test(t) ?? !1
                      }(x, e)) return void p.oR.error(`Invalid ${$?.name||"widget"} format.`)
                  }
                  let e = l((() => {
                    if (!y) return {
                      type: "empty"
                    };
                    if ("discord_presence" === x) return {
                      type: "discord_presence"
                    };
                    let e = eO(x, v, T);
                    return {
                      type: "second_tab",
                      second_tab_config: ez({
                        second_tab_enabled: !0,
                        second_tab: {
                          [x]: e
                        },
                        clock_face_style: N,
                        clock_hidden: w,
                        clock_time_format: S
                      })
                    }
                  })());
                  p.oR.success(c("dashboard.premium.layout.portfolio_settings.about.second_tab_save_success")), d?.({
                    portfolio_modules: e
                  }), t()
                },
                children: c("dashboard.premium.layout.modern_settings.second_tab.save_button")
              })]
            })]
          })]
        })
      }

      function eR({
        module: e,
        settings: t,
        updateSettings: o,
        onSave: r,
        saveButtonText: i,
        isMonochromeIcons: l
      }) {
        let d = (0, _.kj)(),
          [c, h] = (0, s.useState)(null),
          [b, g] = (0, s.useState)(""),
          y = (0, s.useRef)(null),
          f = function(e) {
            let t = Array.isArray(e) ? e.slice(0, 2) : [];
            for (; t.length < 2;) t.push({
              type: "empty"
            });
            return t.map(e => ({
              type: e?.type === "discord_presence" ? "discord_presence" : e?.type === "second_tab" ? "second_tab" : "empty",
              ...e?.type === "second_tab" ? {
                second_tab_config: ez(e.second_tab_config)
              } : {}
            }))
          }(t.cards),
          x = eY(t.tags),
          j = t => {
            let a = eZ(t ?? b);
            if (a) {
              if (x.length >= 24) return void p.oR.error(d("dashboard.premium.layout.portfolio_settings.skills.max_tags_error"));
              if (x.some(e => e.toLowerCase() === a.toLowerCase())) return void p.oR.error(d("dashboard.premium.layout.portfolio_settings.skills.duplicate_tag_error"));
              o(e.id, {
                tags: [...x, a]
              }), g("")
            }
          };
        return (0, a.jsxs)("div", {
          className: n().portfolioFieldStack,
          children: [null !== c && (0, a.jsx)(eL, {
            opened: null !== c,
            onClose: () => h(null),
            card: f[c],
            cardLabel: e_(d, c),
            hasOtherDiscordPresence: f.some((e, t) => t !== c && "discord_presence" === e.type),
            onCardUpdate: t => {
              let a;
              return (a = [...f])[c] = t, o(e.id, {
                cards: a
              })
            },
            onSave: r
          }), (0, a.jsx)(m.A, {
            featureName: d("dashboard.premium.layout.portfolio_settings.fields.section_title"),
            value: t.title || "",
            onChangeFunction: t => o(e.id, {
              title: t.target.value
            }),
            icon: u.A.layout
          }), (0, a.jsx)(et.A, {
            featureName: d("dashboard.premium.layout.portfolio_settings.about.subtitle_label"),
            value: t.description || "",
            onChangeFunction: t => o(e.id, {
              description: t.target.value
            })
          }), (0, a.jsxs)("div", {
            className: n().portfolioAboutBioSection,
            children: [(0, a.jsx)("span", {
              className: n().portfolioFieldLabel,
              children: d("dashboard.premium.layout.portfolio_settings.about.bio_label")
            }), (0, a.jsxs)("div", {
              className: n().portfolioEditorBox,
              children: [(0, a.jsx)(eC, {
                insert: eN(y, () => t.secondary_description || "", t => o(e.id, {
                  secondary_description: t
                }))
              }), (0, a.jsx)("textarea", {
                ref: y,
                className: n().portfolioEditorTextarea,
                value: t.secondary_description || "",
                placeholder: d("dashboard.premium.layout.portfolio_settings.about.bio_placeholder"),
                onChange: t => o(e.id, {
                  secondary_description: t.target.value
                })
              })]
            })]
          }), (0, a.jsxs)("div", {
            className: n().portfolioSkillsSection,
            children: [(0, a.jsx)("span", {
              className: n().portfolioFieldLabel,
              children: d("dashboard.premium.layout.portfolio_settings.about.skill_tags")
            }), x.length > 0 && (0, a.jsx)("div", {
              className: n().portfolioTagList,
              children: x.map(t => (0, a.jsxs)("div", {
                className: n().portfolioProjectTag,
                children: [(0, a.jsx)(eK, {
                  skill: t,
                  isMonochrome: l
                }), (0, a.jsx)("span", {
                  className: n().portfolioSkillTagLabel,
                  children: t
                }), (0, a.jsx)("button", {
                  type: "button",
                  onClick: () => o(e.id, {
                    tags: x.filter(e => e !== t)
                  }),
                  children: u.A.removeTag
                })]
              }, t))
            }), (0, a.jsxs)("div", {
              className: n().portfolioTagInputRow,
              children: [(0, a.jsx)(eq, {
                value: b,
                onChange: g,
                onCommit: e => j(e),
                placeholder: d("dashboard.premium.layout.portfolio_settings.about.skill_placeholder"),
                disabled: x.length >= 24,
                isMonochrome: l
              }), (0, a.jsx)("button", {
                type: "button",
                className: n().portfolioTagAddButton,
                disabled: x.length >= 24 || !eZ(b),
                onClick: () => j(),
                children: u.A.addTag
              })]
            })]
          }), f.map((e, t) => {
            let o = eD(e),
              s = {
                discord_presence: u.A.discord,
                youtube: u.A.youtube,
                spotify: u.A.spotify,
                discord: u.A.discord,
                telegram: u.A.telegram,
                roblox: u.A.roblox,
                github: u.A.github,
                lastfm: u.A.lastfm,
                timezone: u.A.timezone
              };
            return (0, a.jsxs)("div", {
              className: n().portfolioCardTriggerRow,
              children: [(0, a.jsxs)("div", {
                className: n().portfolioCardTriggerInfo,
                children: [(0, a.jsx)("span", {
                  className: n().portfolioCardTriggerLabel,
                  children: e_(d, t)
                }), (0, a.jsxs)("span", {
                  className: `${n().portfolioCardTriggerCurrent} ${"empty"===o?n().portfolioCardTriggerDisabled:""}`,
                  children: ["empty" !== o && (0, a.jsx)("span", {
                    children: s[o]
                  }), "empty" !== o ? ({
                    discord_presence: "Discord Presence",
                    youtube: "YouTube",
                    spotify: "Spotify",
                    discord: "Discord",
                    telegram: "Telegram",
                    roblox: "Roblox",
                    github: "GitHub",
                    lastfm: "LastFM",
                    timezone: "Timezone"
                  })[o] : "Disabled"]
                })]
              }), (0, a.jsx)("button", {
                type: "button",
                className: n().portfolioInlineButton,
                onClick: () => h(t),
                children: "empty" === o ? d("dashboard.premium.layout.portfolio_settings.about.enable_button") : d("dashboard.premium.layout.portfolio_settings.about.configure_button")
              })]
            }, t)
          })]
        })
      }

      function eF({
        module: e,
        settings: t,
        updateSettings: o,
        onSave: r,
        saveButtonText: i,
        isMonochromeIcons: l
      }) {
        let d = (0, _.kj)(),
          [c, h] = (0, s.useState)(""),
          b = eY(t.skills),
          g = (0, U.FR)((0, U.MS)(U.AN, {
            activationConstraint: {
              distance: 6
            }
          })),
          y = t => {
            let a = eZ(t ?? c);
            if (a) {
              if (b.length >= 24) return void p.oR.error(d("dashboard.premium.layout.portfolio_settings.skills.max_skills_error"));
              if (b.some(e => e.toLowerCase() === a.toLowerCase())) return void p.oR.error(d("dashboard.premium.layout.portfolio_settings.skills.duplicate_skill_error"));
              o(e.id, {
                skills: [...b, a]
              }), h("")
            }
          };
        return (0, a.jsxs)("div", {
          className: n().portfolioFieldStack,
          children: [(0, a.jsx)(m.A, {
            featureName: d("dashboard.premium.layout.portfolio_settings.fields.section_title"),
            value: t.title || "",
            onChangeFunction: t => o(e.id, {
              title: t.target.value
            }),
            icon: u.A.layout
          }), (0, a.jsx)(et.A, {
            featureName: d("dashboard.premium.layout.portfolio_settings.fields.description"),
            value: t.description || "",
            placeholder: d("dashboard.premium.layout.portfolio_settings.skills.description_placeholder"),
            onChangeFunction: t => o(e.id, {
              description: t.target.value
            })
          }), (0, a.jsxs)("div", {
            className: n().portfolioSkillsSection,
            children: [(0, a.jsxs)("span", {
              className: n().portfolioFieldLabel,
              children: [d("dashboard.premium.layout.portfolio_settings.skills.label"), " ", (0, a.jsxs)("span", {
                className: n().portfolioFieldCount,
                children: [b.length, "/24"]
              })]
            }), b.length > 0 && (0, a.jsx)(U.Mp, {
              sensors: g,
              collisionDetection: U.fp,
              onDragEnd: t => {
                let {
                  active: a,
                  over: s
                } = t;
                if (!s || a.id === s.id) return;
                let r = b.findIndex(e => e === a.id),
                  i = b.findIndex(e => e === s.id);
                r < 0 || i < 0 || o(e.id, {
                  skills: (0, H.be)(b, r, i)
                })
              },
              children: (0, a.jsx)(H.gB, {
                items: b,
                strategy: H.m$,
                children: (0, a.jsx)("div", {
                  className: n().portfolioTagList,
                  children: b.map(t => (0, a.jsx)(eM, {
                    tag: t,
                    onRemove: () => o(e.id, {
                      skills: b.filter(e => e !== t)
                    }),
                    isMonochrome: l
                  }, t))
                })
              })
            }), (0, a.jsxs)("div", {
              className: n().portfolioTagInputRow,
              children: [(0, a.jsx)(eq, {
                value: c,
                onChange: h,
                onCommit: e => y(e),
                placeholder: d("dashboard.premium.layout.portfolio_settings.skills.placeholder"),
                disabled: b.length >= 24,
                isMonochrome: l
              }), (0, a.jsx)("button", {
                type: "button",
                className: n().portfolioTagAddButton,
                disabled: b.length >= 24 || !eZ(c),
                onClick: () => y(),
                children: u.A.addTag
              })]
            })]
          })]
        })
      }

      function eM({
        tag: e,
        onRemove: t,
        isMonochrome: o
      }) {
        let {
          listeners: s,
          setNodeRef: r,
          transform: i,
          transition: l,
          isDragging: d
        } = (0, H.gl)({
          id: e
        }), c = {
          transform: W.Ks.Transform.toString(i),
          transition: l,
          opacity: d ? .45 : 1
        };
        return (0, a.jsxs)("div", {
          ref: r,
          style: c,
          className: n().portfolioProjectTag,
          children: [(0, a.jsx)("span", {
            className: n().portfolioProjectTagHandle,
            ...s,
            children: u.A.dragHandle
          }), (0, a.jsx)(eK, {
            skill: e,
            isMonochrome: o
          }), (0, a.jsx)("span", {
            className: n().portfolioSkillTagLabel,
            children: e
          }), (0, a.jsx)("button", {
            type: "button",
            onClick: t,
            children: u.A.removeTag
          })]
        })
      }

      function eD(e) {
        if ("empty" === e.type) return "empty";
        if ("discord_presence" === e.type) return "discord_presence";
        let t = e.second_tab_config?.second_tab;
        return (t && "object" == typeof t ? Object.keys(t)[0] : null) || "youtube"
      }

      function e$(e) {
        if ("second_tab" !== e.type) return "";
        let t = e.second_tab_config?.second_tab;
        if (!t || "object" != typeof t) return "";
        let o = Object.keys(t)[0];
        return o && t[o] || ""
      }

      function eO(e, t, o) {
        return "timezone" === e ? (t || o.replace(/ /g, "_")).trim() : t.trim()
      }

      function ez(e) {
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

      function eI({
        module: e,
        settings: t,
        updateSettings: o,
        onSave: r,
        saveButtonText: i,
        isMonochromeIcons: l
      }) {
        var d;
        let c = (0, _.kj)(),
          p = (Array.isArray(d = t.projects) ? d : []).slice(0, 4).map((e, t) => ({
            id: e.id || `project-${t}`,
            name: e.name || "",
            description: e.description || "",
            image: e.image || "",
            link: e.link || "",
            tags: eG(e.tags)
          })),
          [h, b] = (0, s.useState)(null),
          [g, y] = (0, s.useState)(null),
          f = (0, U.FR)((0, U.MS)(U.AN, {
            activationConstraint: {
              distance: 8
            }
          })),
          x = t => {
            o(e.id, {
              projects: t
            })
          },
          j = p.find(e => e.id === g) ?? null,
          v = p.findIndex(e => e.id === g);
        return (0, a.jsxs)("div", {
          className: n().portfolioFieldStack,
          children: [j && (0, a.jsx)(eU, {
            opened: !!g,
            onClose: () => y(null),
            moduleId: e.id,
            project: j,
            projects: p,
            index: v,
            updateSettings: o,
            isMonochromeIcons: l,
            onSave: r,
            saveButtonText: i
          }), (0, a.jsx)(m.A, {
            featureName: c("dashboard.premium.layout.portfolio_settings.fields.section_title"),
            value: t.title || "",
            onChangeFunction: t => o(e.id, {
              title: t.target.value
            }),
            icon: u.A.layout
          }), (0, a.jsxs)("button", {
            type: "button",
            className: n().portfolioInlineButton,
            disabled: p.length >= 4,
            onClick: () => {
              if (p.length >= 4) return;
              let e = {
                id: em(),
                name: "",
                description: "",
                image: "",
                link: "",
                tags: []
              };
              x([...p, e]), y(e.id)
            },
            children: [u.A.addTag, " ", c("dashboard.premium.layout.portfolio_settings.projects.add_button"), " ", p.length > 0 && (0, a.jsxs)("span", {
              className: n().portfolioInlineCount,
              children: [p.length, "/4"]
            })]
          }), (0, a.jsxs)(U.Mp, {
            sensors: f,
            collisionDetection: U.fp,
            onDragStart: e => {
              let t = p.find(t => t.id === e.active.id);
              t && b(t)
            },
            onDragEnd: e => {
              b(null);
              let {
                active: t,
                over: o
              } = e;
              if (!o || t.id === o.id) return;
              let a = p.findIndex(e => e.id === t.id),
                s = p.findIndex(e => e.id === o.id);
              a < 0 || s < 0 || x((0, H.be)(p, a, s))
            },
            children: [(0, a.jsx)(H.gB, {
              items: p.map(e => e.id),
              strategy: H._G,
              children: (0, a.jsx)("div", {
                className: n().portfolioProjectList,
                children: p.map((e, t) => (0, a.jsx)(eP, {
                  project: e,
                  index: t,
                  onEdit: () => y(e.id),
                  onDelete: () => x(p.filter((e, o) => o !== t))
                }, e.id))
              })
            }), (0, a.jsx)(U.Hd, {
              children: h && (0, a.jsx)(eE, {
                project: h,
                index: p.findIndex(e => e.id === h.id),
                isOverlay: !0
              })
            })]
          })]
        })
      }

      function eE({
        project: e,
        index: t,
        isOverlay: o = !1
      }) {
        let s = (0, _.kj)();
        return (0, a.jsxs)("div", {
          className: `${n().portfolioProjectEditor} ${o?n().portfolioModuleOverlay:""}`,
          children: [(0, a.jsx)("div", {
            className: n().portfolioProjectDragStrip,
            children: u.A.dragHandle
          }), (0, a.jsx)("div", {
            className: n().portfolioProjectContent,
            children: (0, a.jsx)("div", {
              className: n().portfolioProjectHeader,
              children: (0, a.jsx)("div", {
                className: n().portfolioModuleTitle,
                children: (0, a.jsxs)("div", {
                  children: [(0, a.jsx)("h1", {
                    children: e.name || s("dashboard.premium.layout.portfolio_settings.projects.fallback_title", {
                      number: t + 1
                    })
                  }), (0, a.jsx)("h3", {
                    children: e.link || s("dashboard.premium.layout.portfolio_settings.projects.card_label")
                  })]
                })
              })
            })
          })]
        })
      }

      function eP({
        project: e,
        index: t,
        onEdit: o,
        onDelete: s
      }) {
        let r = (0, _.kj)(),
          {
            listeners: i,
            setNodeRef: l,
            transform: d,
            transition: c,
            isDragging: m
          } = (0, H.gl)({
            id: e.id,
            animateLayoutChanges: () => !1
          }),
          p = {
            transform: W.Ks.Transform.toString(d),
            transition: c,
            opacity: +!m
          };
        return (0, a.jsxs)("div", {
          ref: l,
          style: p,
          className: n().portfolioProjectEditor,
          children: [(0, a.jsx)("div", {
            className: n().portfolioProjectDragStrip,
            onClick: e => e.stopPropagation(),
            ...i,
            children: u.A.dragHandle
          }), (0, a.jsx)("div", {
            className: n().portfolioProjectContent,
            children: (0, a.jsxs)("div", {
              className: n().portfolioProjectHeader,
              role: "button",
              tabIndex: 0,
              onClick: o,
              onKeyDown: e => {
                ("Enter" === e.key || " " === e.key) && (e.preventDefault(), o())
              },
              children: [(0, a.jsx)("div", {
                className: n().portfolioModuleTitle,
                children: (0, a.jsxs)("div", {
                  children: [(0, a.jsx)("h1", {
                    children: e.name || r("dashboard.premium.layout.portfolio_settings.projects.fallback_title", {
                      number: t + 1
                    })
                  }), (0, a.jsx)("h3", {
                    children: e.description || e.link || r("dashboard.premium.layout.portfolio_settings.projects.tap_to_configure")
                  })]
                })
              }), (0, a.jsxs)("div", {
                className: n().portfolioModuleActions,
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
                  onClick: s,
                  children: u.A.deleteButton
                })]
              })]
            })
          })]
        })
      }

      function eU({
        opened: e,
        onClose: t,
        moduleId: o,
        project: r,
        projects: i,
        index: l,
        updateSettings: d,
        isMonochromeIcons: c,
        onSave: h,
        saveButtonText: b
      }) {
        let y = (0, _.kj)(),
          [f, x] = (0, s.useState)(!1),
          [j, v] = (0, s.useState)(""),
          [k, N] = (0, s.useState)(null),
          [C, w] = (0, s.useState)(""),
          [A, S] = (0, s.useState)(!1),
          B = (0, U.FR)((0, U.MS)(U.AN, {
            activationConstraint: {
              distance: 6
            }
          })),
          T = eG(r.tags),
          L = C || (A ? "" : r.image || "");
        (0, s.useEffect)(() => () => {
          C && URL.revokeObjectURL(C)
        }, [C]);
        let F = e => {
            eV(o, d, i, l, {
              tags: eG(e)
            })
          },
          M = e => {
            let t = eJ(e ?? j);
            if (t) {
              if (T.length >= 4) return void p.oR.error(y("dashboard.premium.layout.portfolio_settings.projects.max_tags_error"));
              if (T.some(e => e.toLowerCase() === t.toLowerCase())) return void p.oR.error(y("dashboard.premium.layout.portfolio_settings.projects.duplicate_tag_error"));
              F([...T, t]), v("")
            }
          },
          D = async () => {
            if (f) return;
            let e = A ? "" : r.image || "",
              t = null;
            if (k) {
              x(!0);
              try {
                t = {
                  data_url: await new Promise((e, t) => {
                    let o = new FileReader;
                    o.onload = () => {
                      "string" == typeof o.result ? e(o.result) : t(Error("Failed to read file."))
                    }, o.onerror = () => t(Error("Failed to read file.")), o.readAsDataURL(k)
                  }),
                  file_name: k.name || "portfolio-project-cover"
                }
              } catch {
                p.oR.error(y("dashboard.premium.layout.portfolio_settings.projects.upload_error"));
                return
              } finally {
                x(!1)
              }
            }
            let a = null,
              s = [...i],
              n = {
                ...s[l]
              };
            n.image = e, t ? n.image_upload = t : delete n.image_upload, s[l] = n, a = d(o, {
              projects: s
            }), C && URL.revokeObjectURL(C), w(""), N(null), S(!1), h?.({
              portfolio_modules: a
            })
          }, $ = r.name || y("dashboard.premium.layout.portfolio_settings.projects.fallback_title", {
            number: l + 1
          });
        return (0, a.jsx)(g.A, {
          opened: e,
          onClose: () => {
            C && URL.revokeObjectURL(C), w(""), N(null), S(!1), t()
          },
          title: $,
          centered: !0,
          size: "540px",
          children: (0, a.jsxs)("div", {
            className: n().portfolioFieldStack,
            children: [(0, a.jsx)(m.A, {
              featureName: y("dashboard.premium.layout.portfolio_settings.projects.name_label"),
              placeholder: y("dashboard.premium.layout.portfolio_settings.projects.name_placeholder"),
              value: r.name || "",
              onChangeFunction: e => eV(o, d, i, l, {
                name: e.target.value
              }),
              icon: u.A.layout
            }), (0, a.jsx)(et.A, {
              featureName: y("dashboard.premium.layout.portfolio_settings.fields.description"),
              placeholder: y("dashboard.premium.layout.portfolio_settings.projects.description_placeholder"),
              value: r.description || "",
              onChangeFunction: e => eV(o, d, i, l, {
                description: e.target.value
              })
            }), (0, a.jsx)(eW, {
              image: L,
              previewFileName: k?.name || "",
              loading: f,
              onFileChange: e => {
                let t = e.target.files?.[0];
                if (t) {
                  if (!(0, R.vH)(t, "cover")) {
                    e.target.value = "";
                    return
                  }
                  C && URL.revokeObjectURL(C), N(t), w(URL.createObjectURL(t)), S(!1), e.target.value = ""
                }
              },
              onClear: () => {
                C && URL.revokeObjectURL(C), w(""), N(null), S(!0)
              }
            }), (0, a.jsx)(m.A, {
              featureName: y("dashboard.premium.layout.portfolio_settings.projects.link_label"),
              value: r.link || "",
              placeholder: y("dashboard.premium.layout.portfolio_settings.projects.link_placeholder"),
              onChangeFunction: e => eV(o, d, i, l, {
                link: e.target.value
              }),
              icon: u.A.url
            }), (0, a.jsxs)("div", {
              className: n().portfolioTagEditor,
              children: [(0, a.jsxs)("div", {
                className: n().portfolioTagInputRow,
                children: [(0, a.jsx)(eq, {
                  value: j,
                  placeholder: y("dashboard.premium.layout.portfolio_settings.projects.tag_placeholder"),
                  onChange: v,
                  onCommit: e => M(e),
                  disabled: T.length >= 4,
                  isMonochrome: c,
                  showFeatureName: !0
                }), (0, a.jsx)("button", {
                  type: "button",
                  className: n().portfolioTagAddButton,
                  disabled: T.length >= 4 || !eJ(j),
                  onClick: () => M(),
                  children: u.A.addTag
                })]
              }), T.length > 0 && (0, a.jsx)(U.Mp, {
                sensors: B,
                collisionDetection: U.fp,
                onDragEnd: e => {
                  let {
                    active: t,
                    over: o
                  } = e;
                  if (!o || t.id === o.id) return;
                  let a = T.findIndex(e => e === t.id),
                    s = T.findIndex(e => e === o.id);
                  a < 0 || s < 0 || F((0, H.be)(T, a, s))
                },
                children: (0, a.jsx)(H.gB, {
                  items: T,
                  strategy: H.m$,
                  children: (0, a.jsx)("div", {
                    className: n().portfolioTagList,
                    style: {
                      marginTop: 0
                    },
                    children: T.map(e => (0, a.jsx)(eH, {
                      tag: e,
                      onRemove: () => F(T.filter(t => t !== e)),
                      isMonochrome: c
                    }, e))
                  })
                })
              })]
            }), (0, a.jsx)(ev, {
              onSave: D,
              saveButtonText: b
            })]
          })
        })
      }

      function eH({
        tag: e,
        onRemove: t,
        isMonochrome: o
      }) {
        let {
          listeners: s,
          setNodeRef: r,
          transform: i,
          transition: l,
          isDragging: d
        } = (0, H.gl)({
          id: e
        }), c = {
          transform: W.Ks.Transform.toString(i),
          transition: l,
          opacity: d ? .45 : 1
        };
        return (0, a.jsxs)("div", {
          ref: r,
          style: c,
          className: n().portfolioProjectTag,
          children: [(0, a.jsx)("span", {
            className: n().portfolioProjectTagHandle,
            ...s,
            children: u.A.dragHandle
          }), (0, a.jsx)(eK, {
            skill: e,
            isMonochrome: o
          }), (0, a.jsx)("span", {
            className: n().portfolioSkillTagLabel,
            children: e
          }), (0, a.jsx)("button", {
            type: "button",
            onClick: t,
            children: u.A.removeTag
          })]
        })
      }

      function eW({
        image: e,
        previewFileName: t,
        loading: o,
        onFileChange: s,
        onClear: r
      }) {
        let i = (0, _.kj)();
        return (0, a.jsxs)("div", {
          className: B().uploadCardWrapper,
          style: {
            padding: 0,
            width: "100%"
          },
          children: [(0, a.jsx)("h1", {
            className: n().portfolioProjectUploadCardTitle,
            children: i("dashboard.premium.layout.portfolio_settings.projects.cover_image")
          }), (0, a.jsx)("div", {
            className: `${B().uploadCard} ${n().portfolioProjectUploadCard}`,
            children: e ? (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsxs)("div", {
                className: B().fileBadge,
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
                className: B().uploadCardImage
              })]
            }) : (0, a.jsxs)(a.Fragment, {
              children: [o ? (0, a.jsxs)("div", {
                className: B().uploaderMessage,
                children: [(0, a.jsx)("span", {
                  children: u.A.loading
                }), (0, a.jsx)("h1", {
                  children: i("dashboard.premium.layout.portfolio_settings.projects.uploading")
                })]
              }) : (0, a.jsxs)("div", {
                className: B().uploadCardText,
                children: [u.A.image, (0, a.jsx)("h1", {
                  children: i("dashboard.premium.layout.portfolio_settings.projects.upload_prompt")
                })]
              }), (0, a.jsx)("input", {
                type: "file",
                accept: F.vJ.cover.join(", "),
                onChange: s,
                disabled: o
              })]
            })
          })]
        })
      }

      function eV(e, t, o, a, s) {
        let r = [...o];
        return r[a] = {
          ...r[a],
          ...s
        }, t(e, {
          projects: r
        })
      }

      function eJ(e) {
        return "string" == typeof e ? e.replace(/,/g, " ").replace(/\s+/g, " ").trim().slice(0, 28) : ""
      }

      function eG(e) {
        return (Array.isArray(e) ? e : "string" == typeof e ? e.split(",") : []).reduce((e, t) => {
          let o = eJ(t);
          return o && !e.some(e => e.toLowerCase() === o.toLowerCase()) && e.length < 4 && e.push(o), e
        }, [])
      }

      function eK({
        skill: e,
        isMonochrome: t
      }) {
        let o = (0, ee.h)(e),
          s = "string" == typeof e ? (0, X.RU)(e) : e,
          r = t ? "currentColor" : o ? `#${o.hex}` : s?.color ?? "currentColor";
        return o ? (0, a.jsx)("svg", {
          className: n().skillAutocompleteIcon,
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          style: {
            fill: r
          },
          children: (0, a.jsx)("path", {
            d: o.path
          })
        }) : (0, a.jsx)("span", {
          className: n().skillAutocompleteDot,
          style: {
            background: r
          }
        })
      }

      function eq({
        value: e,
        onChange: t,
        onCommit: o,
        placeholder: r,
        disabled: i,
        isMonochrome: l,
        showFeatureName: d
      }) {
        let c = (0, _.kj)(),
          [p, h] = (0, s.useState)(!1),
          [b, g] = (0, s.useState)(0),
          [y, f] = (0, s.useState)(null),
          x = (0, s.useRef)(null),
          j = (0, s.useMemo)(() => (0, X.Nl)(e, 7), [e]);
        (0, s.useEffect)(() => {
          g(0)
        }, [e]), (0, s.useEffect)(() => {
          let e = e => {
            x.current && !x.current.contains(e.target) && h(!1)
          };
          return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
        }, []), (0, s.useEffect)(() => {
          if (!p || !x.current) return void f(null);
          let e = () => {
            if (!x.current) return;
            let e = x.current.getBoundingClientRect(),
              t = Math.min(44 * j.length + 2, 280);
            window.innerHeight - e.bottom < t + 8 && e.top > t + 8 ? f({
              bottom: window.innerHeight - e.top + 5,
              left: e.left,
              width: e.width
            }) : f({
              top: e.bottom + 5,
              left: e.left,
              width: e.width
            })
          };
          e();
          let t = () => h(!1);
          return window.addEventListener("scroll", t, !0), window.addEventListener("resize", e), () => {
            window.removeEventListener("scroll", t, !0), window.removeEventListener("resize", e)
          }
        }, [p, j.length]);
        let v = e => {
          o(e), h(!1)
        };
        return (0, a.jsxs)("div", {
          ref: x,
          className: n().skillAutocompleteWrap,
          children: [(0, a.jsx)(m.A, {
            featureName: d ? c("dashboard.premium.layout.portfolio_settings.skills.label") : "",
            value: e,
            placeholder: r,
            disabled: i,
            onChangeFunction: e => {
              t(e.target.value), h(!0)
            },
            onKeyDown: t => {
              if (!p || 0 === j.length) {
                ("Enter" === t.key || "," === t.key) && e.trim() && (t.preventDefault(), v(e.trim()));
                return
              }
              "ArrowDown" === t.key ? (t.preventDefault(), g(e => Math.min(e + 1, j.length - 1))) : "ArrowUp" === t.key ? (t.preventDefault(), g(e => Math.max(e - 1, 0))) : "Enter" === t.key || "," === t.key ? (t.preventDefault(), v(j[b].name)) : "Escape" === t.key && h(!1)
            },
            onFocus: () => {
              e.trim() && h(!0)
            },
            icon: u.A.addTag
          }), p && j.length > 0 && y && "undefined" != typeof document && (0, Q.createPortal)((0, a.jsx)("div", {
            className: n().skillAutocompleteDropdown,
            style: {
              position: "fixed",
              top: y.top,
              bottom: y.bottom,
              left: y.left,
              width: y.width,
              zIndex: 0x3b9ac9ff
            },
            children: j.map((e, t) => (0, a.jsxs)("button", {
              type: "button",
              className: `${n().skillAutocompleteSuggestion} ${t===b?n().skillAutocompleteSuggestionActive:""}`,
              onMouseDown: t => {
                t.preventDefault(), v(e.name)
              },
              onMouseEnter: () => g(t),
              children: [(0, a.jsx)(eK, {
                skill: e,
                isMonochrome: l
              }), (0, a.jsx)("span", {
                children: e.name
              })]
            }, e.id))
          }), document.body)]
        })
      }

      function eZ(e) {
        return "string" == typeof e ? e.replace(/,/g, " ").replace(/\s+/g, " ").trim().slice(0, 32) : ""
      }

      function eY(e) {
        return (Array.isArray(e) ? e : []).reduce((e, t) => {
          let o = eZ(t);
          return o && !e.some(e => e.toLowerCase() === o.toLowerCase()) && e.length < 24 && e.push(o), e
        }, [])
      }
      var eQ = o(98241),
        eX = o.n(eQ);
      let e0 = e => Array.isArray(e) ? e.map(e0) : e && "object" == typeof e ? Object.keys(e).sort().reduce((t, o) => (t[o] = e0(e[o]), t), {}) : e,
        e1 = e => JSON.stringify(e0(e)),
        e2 = {
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
        e4 = e => Array.isArray(e) ? e.map(e => e && "object" == typeof e ? {
          ...e,
          visible: !1 !== e.visible,
          settings: ((e, t) => {
            let o = t && "object" == typeof t ? {
                ...t
              } : {},
              a = e2[e] || {};
            if (Object.keys(a).forEach(e => {
                void 0 !== o[e] && e1(o[e]) === e1(a[e]) && delete o[e]
              }), "audio" === e) {
              let e = Object.entries(o.lyrics_track_map && "object" == typeof o.lyrics_track_map && !Array.isArray(o.lyrics_track_map) ? o.lyrics_track_map : {}).reduce((e, [t, o]) => (o && "object" == typeof o && ("string" == typeof o.synced_lyrics ? o.synced_lyrics.trim() : "") && (e[t] = o), e), {});
              Object.keys(e).length > 0 ? o.lyrics_track_map = e : delete o.lyrics_track_map, !0 !== o.show_lyrics && delete o.show_lyrics
            }
            return Object.keys(o).forEach(e => {
              void 0 === o[e] && delete o[e]
            }), o
          })(e.type, e.settings)
        } : e) : [],
        e5 = e => e && "object" == typeof e ? {
          ...e,
          portfolio_modules: e4(e.portfolio_modules)
        } : e,
        e8 = ({
          data: e
        }) => {
          let t = (0, _.kj)(),
            o = e.config,
            l = o.premium,
            d = l.layout,
            c = e.account_created,
            [u, m] = (0, s.useState)({
              layout: d,
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
            [h, b] = (0, s.useState)(l.banner),
            [g, y] = (0, s.useState)(l.buttons),
            [f, x] = (0, s.useState)(u),
            [j, v] = (0, s.useState)(!1),
            k = t("common.unsaved_changes.save_button"),
            [N, C] = (0, s.useState)(k);
          (0, s.useEffect)(() => {
            v(e1(e5(f)) !== e1(e5(u)))
          }, [f, u]);
          let w = e => t => {
              x(o => ({
                ...o,
                [e]: t
              }))
            },
            S = (e = {}) => {
              let o = Object.keys(e).length > 0 ? {
                  ...f,
                  ...e
                } : f,
                a = e1(e4(o.portfolio_modules)) !== e1(e4(u.portfolio_modules)),
                s = "portfolio" === o.layout && (Object.prototype.hasOwnProperty.call(e, "portfolio_modules") || a);
              Z(o, C, v, m, t, x, {
                includePortfolioModules: s
              })
            };
          return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(p.l$, {
              richColors: !0,
              position: "top-center",
              theme: "dark",
              className: eX().toasterStyles,
              icons: {
                success: q.A.successToast
              },
              visibleToasts: 2
            }), (0, a.jsx)(r.N, {
              children: j && (0, a.jsx)("div", {
                className: eX().unsavedChangesWrapper,
                children: (0, a.jsxs)(i.P.div, {
                  className: eX().unsavedChangesBar,
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
                    className: eX().compactText,
                    children: t("common.unsaved_changes.compact")
                  }), (0, a.jsxs)("div", {
                    className: eX().unsavedChangesButtons,
                    children: [(0, a.jsx)("span", {
                      className: eX().resetButton,
                      onClick: () => {
                        x(u), v(!1)
                      },
                      children: t("common.unsaved_changes.reset")
                    }), (0, a.jsx)("span", {
                      className: eX().saveButton,
                      onClick: () => S(),
                      children: N
                    })]
                  })]
                })
              })
            }), (0, a.jsx)("div", {
              className: n().featureGap,
              children: "modern" === d ? (0, a.jsx)(K.A, {
                featureName: t("dashboard.premium.layout.modern"),
                children: (0, a.jsx)(A, {
                  isBorderEnabled: f.border_enabled,
                  setIsBorderEnabled: w("border_enabled"),
                  borderColor: f.border_color,
                  setBorderColor: w("border_color"),
                  borderRadius: f.border_radius,
                  setBorderRadius: w("border_radius"),
                  borderWidth: f.border_width,
                  setBorderWidth: w("border_width"),
                  borderStyle: f.border_style,
                  setBorderStyle: w("border_style"),
                  borderOpacity: f.border_opacity,
                  setBorderOpacity: w("border_opacity"),
                  joinDate: f.join_date,
                  setJoinDate: w("join_date"),
                  linksPosition: f.links_position,
                  setLinksPosition: w("links_position"),
                  secondTab: l.second_tab,
                  secondTabEnabled: l.second_tab_enabled,
                  clockFaceStyle: l.clock_face_style ?? "dark",
                  clockHidden: l.clock_hidden ?? !1,
                  clockTimeFormat: l.clock_time_format ?? "24h",
                  userJoinDate: c
                })
              }) : "default" === d ? (0, a.jsx)(K.A, {
                featureName: t("dashboard.premium.layout.default"),
                children: (0, a.jsx)(M, {
                  isBorderEnabled: f.border_enabled,
                  setIsBorderEnabled: w("border_enabled"),
                  borderColor: f.border_color,
                  setBorderColor: w("border_color"),
                  borderRadius: f.border_radius,
                  setBorderRadius: w("border_radius"),
                  borderWidth: f.border_width,
                  setBorderWidth: w("border_width"),
                  borderStyle: f.border_style,
                  setBorderStyle: w("border_style"),
                  borderOpacity: f.border_opacity,
                  setBorderOpacity: w("border_opacity"),
                  setBanner: b,
                  banner: h,
                  linksPosition: f.links_position,
                  setLinksPosition: w("links_position")
                })
              }) : "simplistic" === d ? (0, a.jsx)(K.A, {
                featureName: t("dashboard.premium.layout.simplistic"),
                transparent: !0,
                children: (0, a.jsx)(G, {
                  buttonBorderRadius: f.button_border_radius,
                  setButtonBorderRadius: w("button_border_radius"),
                  buttonShadow: f.button_shadow,
                  setButtonShadow: w("button_shadow"),
                  textAlign: f.text_align,
                  setTextAlign: w("text_align"),
                  showUrl: f.show_url,
                  setShowUrl: w("show_url"),
                  buttons: g,
                  setButtons: y
                })
              }) : "sleek" === d ? (0, a.jsx)(K.A, {
                featureName: t("dashboard.premium.layout.sleek"),
                children: (0, a.jsx)(Y, {
                  isBorderEnabled: f.border_enabled,
                  setIsBorderEnabled: w("border_enabled"),
                  borderColor: f.border_color,
                  setBorderColor: w("border_color"),
                  borderRadius: f.border_radius,
                  setBorderRadius: w("border_radius"),
                  borderWidth: f.border_width,
                  setBorderWidth: w("border_width"),
                  borderStyle: f.border_style,
                  setBorderStyle: w("border_style"),
                  borderOpacity: f.border_opacity,
                  setBorderOpacity: w("border_opacity"),
                  avatarRadius: f.avatar_radius,
                  setAvatarRadius: w("avatar_radius"),
                  linksPosition: f.links_position,
                  setLinksPosition: w("links_position")
                })
              }) : "portfolio" === d && (0, a.jsx)(K.A, {
                featureName: t("dashboard.premium.layout.portfolio"),
                children: (0, a.jsx)(ef, {
                  modules: f.portfolio_modules,
                  setModules: w("portfolio_modules"),
                  isBorderEnabled: f.border_enabled,
                  setIsBorderEnabled: w("border_enabled"),
                  borderColor: f.border_color,
                  setBorderColor: w("border_color"),
                  borderWidth: f.border_width,
                  setBorderWidth: w("border_width"),
                  borderStyle: f.border_style,
                  setBorderStyle: w("border_style"),
                  borderOpacity: f.border_opacity,
                  setBorderOpacity: w("border_opacity"),
                  portfolioBorderRadius: f.portfolio_border_radius,
                  setPortfolioBorderRadius: w("portfolio_border_radius"),
                  onSave: S,
                  saveButtonText: N,
                  isMonochromeIcons: !0 === o.monochrome,
                  audioList: o.audio
                })
              })
            })]
          })
        }
    }
  }
]);