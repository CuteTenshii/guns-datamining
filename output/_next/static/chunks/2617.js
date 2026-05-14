(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2617], {
    1022: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        default: () => B
      });
      var s = a(95155),
        r = a(12115),
        n = a(39449),
        i = a(77561),
        o = a(43477),
        l = a.n(o),
        d = a(66609),
        c = a(9992),
        p = a(60141),
        m = a(37897),
        u = a(30184),
        f = a(12555),
        h = a(82413),
        b = a(22834),
        g = a(57157),
        y = a(5354),
        v = a(21924),
        x = a(96351),
        _ = a(57776);
      let w = ({
        fontData: e,
        fontSizeData: t,
        letterSpacingData: a
      }) => {
        let n = (0, x.kj)(),
          [i, o] = (0, r.useState)(!1),
          [c, p] = (0, r.useState)(!1),
          [m, u] = (0, r.useState)(e),
          [w, j] = (0, r.useState)("string" == typeof e ? e : ""),
          [N, C] = (0, r.useState)(t ?? 2),
          [k, S] = (0, r.useState)(a ?? 2),
          [A, F] = (0, r.useState)(null),
          T = [{
            value: "satoshi",
            label: n("dashboard.premium.fonts.default_fonts.options.satoshi")
          }, {
            value: "firacode",
            label: n("dashboard.premium.fonts.default_fonts.options.firacode")
          }, {
            value: "poppins",
            label: n("dashboard.premium.fonts.default_fonts.options.poppins")
          }, {
            value: "jetbrains_mono",
            label: n("dashboard.premium.fonts.default_fonts.options.jetbrains_mono")
          }, {
            value: "array",
            label: n("dashboard.premium.fonts.default_fonts.options.array")
          }, {
            value: "velocity",
            label: n("dashboard.premium.fonts.default_fonts.options.velocity")
          }, {
            value: "outfit",
            label: n("dashboard.premium.fonts.default_fonts.options.outfit")
          }, {
            value: "silkscreen",
            label: n("dashboard.premium.fonts.default_fonts.options.silkscreen")
          }, {
            value: "technor",
            label: n("dashboard.premium.fonts.default_fonts.options.technor")
          }, {
            value: "parkinsans",
            label: n("dashboard.premium.fonts.default_fonts.options.parkinsans")
          }, {
            value: "chillax",
            label: n("dashboard.premium.fonts.default_fonts.options.chillax")
          }, {
            value: "drippy",
            label: n("dashboard.premium.fonts.default_fonts.options.drippy")
          }, {
            value: "minecraft",
            label: n("dashboard.premium.fonts.default_fonts.options.minecraft")
          }];
        (0, r.useEffect)(() => {
          let e = document.head,
            t = {
              firacode: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap",
              poppins: "https://fonts.googleapis.com/css2?family=Poppins&display=swap",
              array: "https://api.fontshare.com/v2/css?f[]=array@400&display=swap",
              drippy: "https://fonts.cdnfonts.com/css/were-beast-2",
              minecraft: "https://fonts.cdnfonts.com/css/minecraftia",
              outfit: "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap",
              chillax: "https://api.fontshare.com/v2/css?f[]=chillax@500&display=swap",
              velocity: "https://api.fontshare.com/v2/css?f[]=panchang@500&display=swap",
              technor: "https://api.fontshare.com/v2/css?f[]=technor@400&display=swap",
              jetbrains_mono: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital@0;1&display=swap",
              silkscreen: "https://fonts.googleapis.com/css2?family=Silkscreen&display=swap",
              parkinsans: "https://fonts.googleapis.com/css2?family=Parkinsans:wght@500&display=swap"
            };
          Array.from(e.querySelectorAll("link[data-font]")).forEach(t => e.removeChild(t)), Object.keys(t).forEach(a => {
            let s = document.createElement("link");
            s.rel = "stylesheet", s.dataset.font = a, s.href = t[a], e.appendChild(s)
          })
        }, []);
        let E = async e => {
          p(!0), e.target.disabled = !0;
          try {
            let t = e.target.files?.[0];
            if (!t) return;
            let a = t.name.split(".").pop()?.toLowerCase();
            if (!["ttf", "otf", "woff"].includes(a || "")) return void d.oR.error(n("dashboard.premium.fonts.errors.invalid_type"));
            if (t.size > 5242880) return void d.oR.error(n("dashboard.premium.fonts.errors.max_size"));
            let s = await R(t);
            if (!s) return void d.oR.error(n("dashboard.premium.fonts.errors.invalid_font"));
            let r = s.names.fullName?.en !== "false" ? s.names.fullName.en : n("dashboard.premium.fonts.custom_font_name"),
              i = new FormData;
            i.append("font", t), i.append("fontName", r), i.append("fontWeight", s.tables.os2.usWeightClass), i.append("fontStyle", s.names.fontSubfamily?.en || "Regular");
            let o = await fetch("https://guns.lol/api/dashboard/premium/upload/font", {
                method: "POST",
                body: i
              }),
              l = await o.json();
            o.ok ? (d.oR.success(n("dashboard.premium.fonts.upload_success")), u({
              name: r,
              weight: s.tables.os2.usWeightClass,
              style: s.names.fontSubfamily?.en || "Regular"
            }), j(""), await P(l.url)) : d.oR.error(l.error)
          } finally {
            e.target.disabled = !1, e.target.value = "", p(!1)
          }
        }, R = e => new Promise(t => {
          let a = new FileReader;
          a.onload = function() {
            let e = a.result;
            try {
              let a = y.qg(e);
              t(a)
            } catch (e) {
              t(null)
            }
          }, a.readAsArrayBuffer(e)
        }), I = async () => {
          let e = await fetch("https://guns.lol/api/dashboard/premium/remove/font", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              }
            }),
            t = await e.json();
          e.ok ? (F(null), u(""), j("satoshi"), d.oR.success(n("dashboard.premium.fonts.remove_success"))) : d.oR.error(t.error)
        }, P = async e => {
          let t = new FontFace("USERFONT", `url(${e})`);
          await t.load(), document.fonts.add(t), F(t.family)
        }, $ = async () => {
          let e = "" === w ? {
              letterSpacing: k,
              fontSize: N
            } : {
              font: w
            },
            t = "" === w,
            a = await fetch("https://guns.lol/api/dashboard/premium/font", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(e)
            }),
            s = await a.json();
          a.ok ? (d.oR.success(t ? n("dashboard.premium.fonts.save_success.settings") : n("dashboard.premium.fonts.save_success.default")), t || u(w)) : d.oR.error(s.error)
        }, O = [{
          value: 1,
          label: n("dashboard.premium.fonts.letter_spacing.marks.compact")
        }, {
          value: 2,
          label: n("dashboard.premium.fonts.letter_spacing.marks.normal")
        }, {
          value: 3,
          label: n("dashboard.premium.fonts.letter_spacing.marks.extended")
        }], D = [{
          value: 1,
          label: n("dashboard.premium.fonts.font_size.marks.small")
        }, {
          value: 2,
          label: n("dashboard.premium.fonts.font_size.marks.normal")
        }, {
          value: 3,
          label: n("dashboard.premium.fonts.font_size.marks.large")
        }];
        return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsxs)(_.A, {
            opened: i,
            onClose: () => o(!1),
            centered: !0,
            title: n("dashboard.premium.fonts.modal.title"),
            size: "550px",
            bodyClassName: l().fontModalBody,
            children: [(0, s.jsx)("div", {
              className: l().fontModalContent,
              children: (0, s.jsxs)("div", {
                className: l().textFontWrapper,
                children: [(0, s.jsxs)("div", {
                  className: l().customFontWrapper,
                  children: [(0, s.jsxs)("div", {
                    className: l().customFontDescription,
                    children: [(0, s.jsx)(g.A, {
                      featureName: n("dashboard.premium.fonts.custom_font.label"),
                      helpDescription: n("dashboard.premium.fonts.custom_font.description")
                    }), (0, s.jsx)("h3", {
                      children: n("dashboard.premium.fonts.custom_font.subtitle")
                    })]
                  }), "string" == typeof m ? (0, s.jsxs)("div", {
                    className: l().uploadFontWrapper,
                    children: [c ? (0, s.jsx)("span", {
                      className: l().uploadFontButton,
                      children: f.A.loading
                    }) : (0, s.jsxs)("span", {
                      className: l().uploadFontButton,
                      children: [f.A.upload, " ", n("dashboard.premium.fonts.upload_button")]
                    }), (0, s.jsx)("input", {
                      type: "file",
                      accept: ".ttf,.otf,.woff",
                      onChange: e => {
                        E(e)
                      }
                    })]
                  }) : (0, s.jsxs)("div", {
                    className: l().customFont,
                    children: [(0, s.jsx)("span", {
                      className: l().customFontText,
                      style: {
                        fontFamily: A || ""
                      },
                      children: m.name
                    }), (0, s.jsxs)("div", {
                      className: l().customFontInfo,
                      children: [(0, s.jsxs)("span", {
                        className: l().customFontWeight,
                        children: [f.A.fontWeight, " ", n("dashboard.premium.fonts.custom_font.weight_label", {
                          weight: m.weight
                        })]
                      }), (0, s.jsxs)("span", {
                        className: l().customFontStyle,
                        children: [f.A.fontStyle, " ", n("dashboard.premium.fonts.custom_font.style_label", {
                          style: m.style
                        })]
                      })]
                    }), (0, s.jsx)("div", {
                      className: l().customFontRemove,
                      onClick: I,
                      children: (0, s.jsx)("span", {
                        children: f.A.deleteButton
                      })
                    })]
                  }), "string" != typeof m && (0, s.jsx)(b.n, {
                    children: (0, s.jsxs)(b.n.Item, {
                      value: "customFontSettings",
                      className: l().fontSettingsAccordionItem,
                      children: [(0, s.jsx)(b.n.Control, {
                        className: l().fontSettingsAccordionControl,
                        children: n("dashboard.premium.fonts.custom_font.settings_title")
                      }), (0, s.jsx)(b.n.Panel, {
                        children: (0, s.jsxs)("div", {
                          className: l().customFontSettings,
                          children: [(0, s.jsx)(v.A, {
                            featureName: n("dashboard.premium.fonts.font_size.label"),
                            step: 1,
                            max: 3,
                            min: 1,
                            label: e => {},
                            marks: D,
                            value: N,
                            onChangeFunction: C
                          }), (0, s.jsx)(v.A, {
                            featureName: n("dashboard.premium.fonts.letter_spacing.label"),
                            step: 1,
                            max: 3,
                            min: 1,
                            label: e => {},
                            marks: O,
                            value: k,
                            onChangeFunction: S
                          })]
                        })
                      })]
                    }, "customFontSettings")
                  })]
                }), (0, s.jsxs)("div", {
                  className: l().defaultFontsWrapper,
                  children: [(0, s.jsx)("h1", {
                    children: n("dashboard.premium.fonts.default_fonts.title")
                  }), (0, s.jsx)("div", {
                    className: l().defaultFontsContainer,
                    children: T.map(e => (0, s.jsx)("div", {
                      className: `${l().defaultFontItem} ${w===e.value&&l().activeFont}`,
                      onClick: () => j(e.value),
                      children: (0, s.jsx)("span", {
                        style: {
                          fontFamily: `${h.k[e.value]}`
                        },
                        children: e.label
                      })
                    }, e.value))
                  })]
                })]
              })
            }), (0, s.jsx)("div", {
              className: l().fontModalFooter,
              children: (0, s.jsx)("span", {
                className: l().saveChangesFonts,
                onClick: $,
                children: n("dashboard.premium.fonts.save_button")
              })
            })]
          }), (0, s.jsxs)("div", {
            className: l().manageFontsWrapper,
            children: [(0, s.jsx)("h1", {
              className: l().manageFontsText,
              children: n("dashboard.premium.fonts.section_title")
            }), (0, s.jsxs)("span", {
              className: l().manageFontsButton,
              onClick: () => {
                "string" != typeof m && P(m.url), o(!0)
              },
              children: [f.A.font, " ", n("dashboard.premium.fonts.section_button")]
            })]
          })]
        })
      };
      w.displayName = "FontSelectionComponent";
      let j = ({
          cursorEffectsColor: e,
          setCursorEffectsColor: t,
          cursorEffects: a,
          setCursorEffects: r,
          font: n,
          pageEnterText: i,
          setPageEnterText: o,
          fontSize: d,
          letterSpacing: c
        }) => {
          let h = (0, x.kj)(),
            b = [{
              value: "none",
              label: h("dashboard.premium.special.cursor_effects.options.none")
            }, {
              value: "cat",
              label: h("dashboard.premium.special.cursor_effects.options.cat")
            }, {
              value: "snowflakes",
              label: h("dashboard.premium.special.cursor_effects.options.snowflakes")
            }, {
              value: "ghost",
              label: h("dashboard.premium.special.cursor_effects.options.ghost")
            }, {
              value: "dot",
              label: h("dashboard.premium.special.cursor_effects.options.dot")
            }, {
              value: "bubbles",
              label: h("dashboard.premium.special.cursor_effects.options.bubbles")
            }, {
              value: "particles",
              label: h("dashboard.premium.special.cursor_effects.options.particles")
            }];
          return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)("div", {
              className: l().generalComponentContainer,
              children: (0, s.jsxs)("div", {
                className: l().generalComponentLeft,
                children: [(0, s.jsxs)("div", {
                  className: l().featureRow,
                  children: [(0, s.jsx)(p.A, {
                    data: b,
                    featureName: h("dashboard.premium.special.cursor_effects.label"),
                    onChangeFunction: r,
                    value: a,
                    placeholder: h("dashboard.premium.profile.select_placeholder"),
                    icon: f.A.cursorEffects
                  }), (0, s.jsx)(u.A, {
                    featureName: h("dashboard.premium.special.cursor_effects_color"),
                    onChangeFunction: t,
                    value: e,
                    icon: f.A.cursorEffectsColor
                  })]
                }), (0, s.jsxs)("div", {
                  className: l().featureRow,
                  children: [(0, s.jsx)(w, {
                    fontData: n,
                    fontSizeData: d,
                    letterSpacingData: c
                  }), (0, s.jsx)(m.A, {
                    featureName: h("dashboard.premium.special.page_enter_text.label"),
                    onChangeFunction: function(e) {
                      o(e.target.value)
                    },
                    value: i,
                    placeholder: h("dashboard.premium.special.page_enter_text.placeholder"),
                    icon: f.A.pageEnterText
                  })]
                })]
              })
            })
          })
        },
        N = ({
          setLayout: e,
          layout: t,
          setAnimation: a,
          animation: r
        }) => {
          let n = (0, x.kj)(),
            i = [{
              value: "default",
              label: n("dashboard.premium.profile.layout.options.default")
            }, {
              value: "modern",
              label: n("dashboard.premium.profile.layout.options.modern")
            }, {
              value: "simplistic",
              label: n("dashboard.premium.profile.layout.options.simplistic")
            }, {
              value: "sleek",
              label: n("dashboard.premium.profile.layout.options.sleek")
            }],
            o = [{
              value: "fade",
              label: n("dashboard.premium.profile.animation.options.fade")
            }, {
              value: "unfold",
              label: n("dashboard.premium.profile.animation.options.unfold")
            }, {
              value: "pop",
              label: n("dashboard.premium.profile.animation.options.pop")
            }];
          return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)("div", {
              className: l().generalComponentContainer,
              children: (0, s.jsx)("div", {
                className: l().generalComponentLeft,
                children: (0, s.jsxs)("div", {
                  className: l().featureRow,
                  children: [(0, s.jsx)(p.A, {
                    featureName: n("dashboard.premium.profile.layout.label"),
                    onChangeFunction: e,
                    value: t,
                    placeholder: n("dashboard.premium.profile.select_placeholder"),
                    icon: f.A.layout,
                    data: i
                  }), (0, s.jsx)(p.A, {
                    featureName: n("dashboard.premium.profile.animation.label"),
                    onChangeFunction: a,
                    value: r,
                    placeholder: n("dashboard.premium.profile.select_placeholder"),
                    icon: f.A.animation,
                    data: o
                  })]
                })
              })
            })
          })
        };
      var C = a(81469),
        k = a(44923),
        S = a(87256),
        A = a(39768),
        F = a(47650);

      function T({
        item: e,
        isUpdating: t,
        isEditing: a,
        editingValue: r,
        onEditingValueChange: n,
        onEditKeyPress: i,
        onSaveEdit: o,
        onCancelEdit: d,
        onStartEdit: c,
        onRemove: p
      }) {
        let {
          attributes: m,
          listeners: u,
          setNodeRef: h,
          transform: b,
          transition: g,
          isDragging: y
        } = (0, S.gl)({
          id: e.id,
          animateLayoutChanges: () => !1
        }), v = {
          transform: A.Ks.Transform.toString(b),
          transition: g,
          opacity: +!y
        };
        return (0, s.jsxs)("div", {
          ref: h,
          style: v,
          className: l().typewriterTagContainer,
          children: [(0, s.jsx)("div", {
            className: l().typewriterDragHandle,
            ...!t && !a ? m : {},
            ...!t && !a ? u : {},
            children: f.A.dragHandle
          }), (0, s.jsx)("div", {
            className: l().tag,
            children: a ? (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)("input", {
                autoFocus: !0,
                type: "text",
                value: r,
                onChange: e => n(e.target.value),
                onKeyDown: i,
                maxLength: 100,
                className: l().tagEditInput
              }), (0, s.jsxs)("div", {
                className: l().tagActions,
                children: [(0, s.jsx)("button", {
                  type: "button",
                  className: l().tagActionButton,
                  onClick: o,
                  disabled: t,
                  children: f.A.confirm
                }), (0, s.jsx)("button", {
                  type: "button",
                  className: `${l().tagActionButton} ${l().removeTag}`,
                  onClick: d,
                  disabled: t,
                  children: f.A.removeTag
                })]
              })]
            }) : (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)("span", {
                className: l().tagName,
                children: e.text
              }), (0, s.jsxs)("div", {
                className: l().tagActions,
                children: [(0, s.jsx)("button", {
                  type: "button",
                  className: `${l().tagActionButton} ${l().editTagButton}`,
                  onClick: () => c(e.id),
                  disabled: t,
                  children: f.A.editButton
                }), (0, s.jsx)("button", {
                  type: "button",
                  className: `${l().tagActionButton} ${l().removeTag}`,
                  onClick: () => p(e.id),
                  disabled: t,
                  children: f.A.removeTag
                })]
              })]
            })
          })]
        })
      }
      let E = ({
        onTagsChange: e,
        tagsList: t
      }) => {
        let a = (0, x.kj)(),
          [n, i] = (0, r.useState)(""),
          [o, c] = (0, r.useState)([]),
          [p, u] = (0, r.useState)(null),
          [h, b] = (0, r.useState)(null),
          [g, y] = (0, r.useState)(""),
          [v, _] = (0, r.useState)(!1),
          [w, j] = (0, r.useState)(!1),
          N = {
            margin: 0 === o.length ? "7px 0 0px 0" : "20px 0 15px 0"
          };
        (0, r.useEffect)(() => {
          j(!0)
        }, []), (0, r.useEffect)(() => {
          c(t.map((e, t) => ({
            id: `tag-${t}-${e.length}`,
            text: e
          })))
        }, [t]);
        let C = (0, k.FR)((0, k.MS)(k.AN, {
            activationConstraint: {
              distance: 10
            }
          })),
          A = e => "" === e.trim() ? (d.oR.error(a("dashboard.premium.settings.typewriter.tags.errors.empty")), !1) : !(e.trim().length > 100) || (d.oR.error(a("dashboard.premium.settings.typewriter.tags.errors.max_length")), !1),
          E = async (t, a = !0) => {
            _(!0);
            try {
              if (!await e(t.map(e => e.text))) return !1;
              return a && c(t), !0
            } catch {
              return !1
            } finally {
              _(!1)
            }
          }, R = async () => {
            v || !A(n) || (o.length > 4 ? d.oR.error(a("dashboard.premium.settings.typewriter.tags.errors.max_count")) : await E([...o, {
              id: `tag-new-${Date.now()}`,
              text: n.trim()
            }]) && i(""))
          }, I = async e => {
            if (v) return;
            let t = o.filter(t => t.id !== e);
            await E(t) && h === e && (b(null), y(""))
          }, P = async e => {
            if (u(null), v) return;
            let {
              active: t,
              over: a
            } = e;
            if (!a || t.id === a.id) return;
            let s = o.findIndex(e => e.id === t.id),
              r = o.findIndex(e => e.id === a.id);
            if (r === s || -1 === s || -1 === r) return;
            let n = (0, S.be)(o, s, r);
            c(n), await E(n, !1) || c(o)
          }, $ = e => {
            if (v) return;
            let t = o.find(t => t.id === e);
            t && (b(e), y(t.text))
          }, O = () => {
            b(null), y("")
          }, D = async () => {
            if (!h || v || !A(g)) return;
            let e = g.trim(),
              t = o.findIndex(e => e.id === h);
            if (-1 === t) return;
            if (e === o[t].text) return void O();
            let a = [...o];
            a[t] = {
              ...a[t],
              text: e
            }, await E(a) && O()
          }, B = async e => {
            "Enter" === e.key && (e.preventDefault(), await R())
          }, z = async e => {
            if ("Enter" === e.key) {
              e.preventDefault(), await D();
              return
            }
            "Escape" === e.key && (e.preventDefault(), O())
          };
        return w ? (0, s.jsxs)("div", {
          className: l().tagsInputWrapper,
          children: [(0, s.jsxs)("div", {
            className: l().manageTypewriter,
            children: [(0, s.jsx)(m.A, {
              icon: f.A.typewriterDescripion,
              placeholder: a("dashboard.premium.settings.typewriter.tags.placeholder"),
              value: n,
              onChangeFunction: e => {
                i(e.target.value)
              },
              onKeyPress: B
            }), (0, s.jsx)("button", {
              type: "button",
              className: l().addTag,
              onClick: R,
              disabled: v,
              children: f.A.addTag
            })]
          }), (0, s.jsx)("div", {
            className: l().tagsWrapper,
            style: N,
            children: 0 !== o.length && (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)("h1", {
                className: l().myTexts,
                children: a("dashboard.premium.settings.typewriter.tags.title")
              }), (0, s.jsxs)(k.Mp, {
                sensors: C,
                collisionDetection: k.fp,
                onDragStart: e => {
                  let {
                    active: t
                  } = e, a = o.find(e => e.id === t.id);
                  a && u(a)
                },
                onDragCancel: () => {
                  u(null)
                },
                onDragEnd: P,
                autoScroll: !1,
                children: [(0, s.jsx)(S.gB, {
                  items: o.map(e => e.id),
                  strategy: S._G,
                  children: (0, s.jsx)("div", {
                    className: l().tags,
                    children: o.map(e => (0, s.jsx)(T, {
                      item: e,
                      isUpdating: v,
                      isEditing: h === e.id,
                      editingValue: g,
                      onEditingValueChange: y,
                      onEditKeyPress: z,
                      onSaveEdit: D,
                      onCancelEdit: O,
                      onStartEdit: $,
                      onRemove: I
                    }, e.id))
                  })
                }), w && (0, F.createPortal)((0, s.jsx)(k.Hd, {
                  zIndex: 0x7fffffff,
                  dropAnimation: null,
                  children: p ? (0, s.jsxs)("div", {
                    className: l().typewriterTagContainer,
                    children: [(0, s.jsx)("div", {
                      className: l().typewriterDragHandle,
                      children: f.A.dragHandle
                    }), (0, s.jsx)("div", {
                      className: l().tag,
                      children: (0, s.jsx)("span", {
                        className: l().tagName,
                        children: p.text
                      })
                    })]
                  }) : null
                }), document.body)]
              })]
            })
          })]
        }) : null
      };
      async function R(e, t, a, s, r) {
        try {
          let n = JSON.stringify({
              typewriter_enabled: a
            }),
            i = JSON.stringify({
              typewriter_list: s
            }),
            o = await fetch("https://guns.lol/api/dashboard/premium/typewriter", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: t ? n : i
            }),
            l = await o.json();
          if (o.ok) return t ? d.oR.success(r("dashboard.premium.settings.typewriter.typewriter_toggle_success", {
            action: r(a ? "dashboard.premium.settings.typewriter.enabled_label" : "dashboard.premium.settings.typewriter.disabled_label")
          })) : e && d.oR.success(r("dashboard.premium.settings.typewriter.text_updated")), !0;
          return d.oR.error(l.error), !1
        } catch (e) {
          return console.error(e.message), !1
        }
      }
      let I = ({
        hideViews: e,
        setHideViews: t,
        isTypewriterEnabled: a,
        setIsTypewriterEnabled: n,
        typewriterList: i,
        setParallaxAnimation: o,
        parallaxAnimation: c,
        setTypewriterSpeed: p,
        typewriterSpeed: m,
        typewriterDeleteSpeed: u,
        setTypewriterDeleteSpeed: h
      }) => {
        let b = (0, x.kj)(),
          [y, w] = (0, r.useState)(!1),
          [j, N] = (0, r.useState)(i),
          k = [{
            value: 3,
            label: b("dashboard.premium.settings.typewriter.speed_marks.slow")
          }, {
            value: 8,
            label: b("dashboard.premium.settings.typewriter.speed_marks.fast")
          }],
          S = async e => !!await R(!0, !1, !1, e, b) && (N(e), !0);
        async function A() {
          a ? await R(!1, !0, !1, [], b) && n(!1) : await R(!1, !0, !0, [], b) && n(!0)
        }
        let F = async () => {
          let e = await fetch("https://guns.lol/api/dashboard/premium/typewriterSpeed", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                typewriter_speed: m,
                typewriter_delete_speed: u
              })
            }),
            t = await e.json();
          e.ok ? d.oR.success(b("dashboard.premium.settings.typewriter.save_success")) : d.oR.error(t.error)
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsxs)(_.A, {
            opened: y,
            onClose: () => w(!1),
            centered: !0,
            title: b("dashboard.premium.settings.typewriter.modal_title"),
            size: "550px",
            children: [(0, s.jsxs)("div", {
              className: l().typewriterWrapper,
              children: [(0, s.jsx)("span", {
                className: a ? l().typewriterEnabled : l().typewriterDisabled,
                onClick: A,
                children: a ? b("dashboard.premium.settings.typewriter.disable_button") : b("dashboard.premium.settings.typewriter.enable_button")
              }), a && (0, s.jsx)(E, {
                onTagsChange: S,
                tagsList: j
              })]
            }), a && (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsxs)("div", {
                className: l().typewriterSettings,
                children: [(0, s.jsx)(v.A, {
                  featureName: b("dashboard.premium.settings.typewriter.speed_label"),
                  step: 1,
                  max: 10,
                  min: 1,
                  label: e => {},
                  marks: k,
                  value: m,
                  onChangeFunction: p
                }), (0, s.jsx)(v.A, {
                  featureName: b("dashboard.premium.settings.typewriter.delete_speed_label"),
                  step: 1,
                  max: 10,
                  min: 1,
                  label: e => {},
                  marks: k,
                  value: u,
                  onChangeFunction: h
                })]
              }), (0, s.jsx)("span", {
                className: l().saveChangesTypewriter,
                onClick: F,
                children: b("dashboard.premium.settings.typewriter.save_button")
              })]
            })]
          }), (0, s.jsx)("div", {
            className: l().generalComponentContainer,
            children: (0, s.jsxs)("div", {
              className: `${l().generalComponentLeft} ${l().settingsComponent}`,
              children: [(0, s.jsx)("div", {
                className: `${l().featureRow} ${l().settingsComponent}`,
                children: (0, s.jsxs)("div", {
                  className: l().typewriter,
                  children: [(0, s.jsx)("h1", {
                    children: b("dashboard.premium.settings.typewriter.section_title")
                  }), (0, s.jsxs)("span", {
                    onClick: () => w(!0),
                    children: [f.A.typewriterDescripion, " ", b("dashboard.premium.settings.typewriter.section_button")]
                  })]
                })
              }), (0, s.jsxs)("div", {
                className: `${l().featureRow} ${l().settingsComponent}`,
                children: [(0, s.jsx)(g.A, {
                  featureName: b("dashboard.premium.settings.parallax.label"),
                  helpDescription: b("dashboard.premium.settings.parallax.description"),
                  element: (0, s.jsx)(C.A, {
                    onChangeFunction: e => o(e.currentTarget.checked),
                    checked: c
                  })
                }), (0, s.jsx)(C.A, {
                  featureName: b("dashboard.premium.settings.hide_views"),
                  onChangeFunction: e => t(e.currentTarget.checked),
                  checked: e
                })]
              })]
            })
          })]
        })
      };
      var P = a(54834);
      async function $(e, t, a, s, r) {
        try {
          t(P.A.loading);
          let n = await fetch("https://guns.lol/api/dashboard/premium", {
              method: "POST",
              body: JSON.stringify({
                page_enter_text: e.page_enter_text,
                cursor_effects: e.cursor_effects,
                effects_color: e.effects_color,
                hide_views: e.hide_views,
                layout: e.layout,
                parallax_animation: e.parallax_animation ?? !1,
                animation: e.animation ?? "fade"
              })
            }),
            i = await n.json();
          n.ok ? (d.oR.success(r("common.unsaved_changes.settings_saved")), setTimeout(() => {
            s(e), a(!1)
          }, 500)) : d.oR.error(i.error)
        } catch (e) {
          console.error(e.message)
        } finally {
          setTimeout(() => {
            t(r("common.unsaved_changes.save_button"))
          }, 500)
        }
      }
      var O = a(98241),
        D = a.n(O);
      let B = ({
        data: e
      }) => {
        let t = (0, x.kj)(),
          [a, o] = (0, r.useState)({
            ...e.config.premium
          }),
          [p, m] = (0, r.useState)(a),
          [u, f] = (0, r.useState)(!1),
          h = t("common.unsaved_changes.save_button"),
          [b, g] = (0, r.useState)(h);
        (0, r.useEffect)(() => {
          let {
            typewriter_enabled: e,
            typewriter_speed: t,
            typewriter_delete_speed: s,
            ...r
          } = p, {
            typewriter_enabled: n,
            typewriter_speed: i,
            typewriter_delete_speed: o,
            ...l
          } = a;
          f(JSON.stringify(r) !== JSON.stringify(l))
        }, [p, a]);
        let y = e => t => {
          m(a => ({
            ...a,
            [e]: t
          }))
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(d.l$, {
            richColors: !0,
            position: "top-center",
            theme: "dark",
            className: D().toasterStyles,
            icons: {
              success: P.A.successToast
            },
            visibleToasts: 2
          }), (0, s.jsx)(n.N, {
            children: u && (0, s.jsx)("div", {
              className: D().unsavedChangesWrapper,
              children: (0, s.jsxs)(i.P.div, {
                className: D().unsavedChangesBar,
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
                  children: t("common.unsaved_changes.title")
                }), (0, s.jsx)("h1", {
                  className: D().compactText,
                  children: t("common.unsaved_changes.compact")
                }), (0, s.jsxs)("div", {
                  className: D().unsavedChangesButtons,
                  children: [(0, s.jsx)("span", {
                    className: D().resetButton,
                    onClick: () => {
                      m({
                        ...a
                      }), f(!1)
                    },
                    children: t("common.unsaved_changes.reset")
                  }), (0, s.jsx)("span", {
                    className: D().saveButton,
                    onClick: () => {
                      $(p, g, f, o, t)
                    },
                    children: b
                  })]
                })]
              })
            })
          }), (0, s.jsxs)("div", {
            className: l().featureGap,
            children: [(0, s.jsx)(c.A, {
              featureName: t("dashboard.premium.feature_names.profile"),
              className: l().purpleGlow,
              children: (0, s.jsx)(N, {
                layout: p.layout,
                setLayout: y("layout"),
                animation: p.animation,
                setAnimation: y("animation")
              })
            }), (0, s.jsx)(c.A, {
              featureName: t("dashboard.premium.feature_names.special"),
              children: (0, s.jsx)(j, {
                cursorEffectsColor: p.effects_color,
                setCursorEffectsColor: y("effects_color"),
                cursorEffects: p.cursor_effects,
                setCursorEffects: y("cursor_effects"),
                font: p.font,
                pageEnterText: p.page_enter_text,
                setPageEnterText: y("page_enter_text"),
                fontSize: p.font_size,
                letterSpacing: p.font_letter_spacing
              })
            }), (0, s.jsx)(c.A, {
              featureName: t("dashboard.premium.feature_names.settings"),
              children: (0, s.jsx)(I, {
                hideViews: p.hide_views,
                setHideViews: y("hide_views"),
                parallaxAnimation: p.parallax_animation,
                setParallaxAnimation: y("parallax_animation"),
                isTypewriterEnabled: p.typewriter_enabled,
                setIsTypewriterEnabled: y("typewriter_enabled"),
                typewriterList: p.typewriter,
                typewriterSpeed: p.typewriter_speed,
                setTypewriterSpeed: y("typewriter_speed"),
                typewriterDeleteSpeed: p.typewriter_delete_speed,
                setTypewriterDeleteSpeed: y("typewriter_delete_speed")
              })
            })]
          })]
        })
      }
    },
    22834: (e, t, a) => {
      "use strict";
      a.d(t, {
        n: () => u
      });
      var s = a(95155),
        r = a(12115),
        n = a(67361),
        i = a.n(n);
      let o = (0, r.createContext)(null),
        l = (0, r.createContext)(null),
        d = (...e) => e.filter(Boolean).join(" "),
        c = () => {
          let e = (0, r.useContext)(o);
          if (!e) throw Error("Accordion components must be used within <Accordion>");
          return e
        },
        p = () => {
          let e = (0, r.useContext)(l);
          if (!e) throw Error("Accordion.Item subcomponents must be used within <Accordion.Item>");
          return e
        },
        m = (e, t) => t ? Array.isArray(e) ? e : "string" == typeof e ? [e] : [] : Array.isArray(e) ? e[0] ?? null : "string" == typeof e ? e : e ?? null,
        u = Object.assign(({
          children: e,
          value: t,
          defaultValue: a,
          multiple: n = !1,
          onChange: l,
          className: c = "",
          ...p
        }) => {
          let u = void 0 !== t,
            f = u ? m(t, n) : null,
            [h, b] = (0, r.useState)(() => m(a, n)),
            g = u ? f : h,
            y = (0, r.useCallback)(e => n ? Array.isArray(g) && g.includes(e) : g === e, [g, n]),
            v = (0, r.useCallback)(e => {
              let t = ((e, t, a) => {
                if (a) {
                  let a = Array.isArray(e) ? e : [];
                  return a.includes(t) ? a.filter(e => e !== t) : [...a, t]
                }
                return e === t ? null : t
              })(g, e, n);
              u || b(t), l?.(t)
            }, [g, u, n, l]),
            x = (0, r.useMemo)(() => ({
              multiple: n,
              currentValue: g,
              toggleItem: v,
              isItemActive: y
            }), [n, g, v, y]);
          return (0, s.jsx)(o.Provider, {
            value: x,
            children: (0, s.jsx)("div", {
              className: d(i().accordion, c),
              ...p,
              children: e
            })
          })
        }, {
          Item: ({
            value: e,
            children: t,
            className: a = "",
            ...n
          }) => {
            let o = c(),
              p = (0, r.useId)(),
              m = (0, r.useRef)(`${p}-control`),
              u = (0, r.useRef)(`${p}-panel`),
              f = o.isItemActive(e),
              h = (0, r.useMemo)(() => ({
                value: e,
                controlIdRef: m,
                panelIdRef: u
              }), [e]);
            return (0, s.jsx)(l.Provider, {
              value: h,
              children: (0, s.jsx)("div", {
                ...n,
                className: d(i().item, a),
                "data-active": f || void 0,
                children: t
              })
            })
          },
          Control: (0, r.forwardRef)(function({
            children: e,
            className: t = "",
            onClick: a,
            disabled: r,
            id: n,
            ...o
          }, l) {
            let m = c(),
              u = p(),
              f = n ?? u.controlIdRef.current;
            u.controlIdRef.current = f;
            let h = m.isItemActive(u.value);
            return (0, s.jsx)("button", {
              type: "button",
              ...o,
              id: f,
              ref: l,
              className: d(i().control, t),
              "data-active": h || void 0,
              disabled: r,
              onClick: e => {
                a?.(e), e.defaultPrevented || r || m.toggleItem(u.value)
              },
              children: e
            })
          }),
          Panel: (0, r.forwardRef)(function({
            children: e,
            className: t = "",
            id: a,
            ...n
          }, o) {
            let l = c(),
              m = p(),
              u = a ?? m.panelIdRef.current;
            m.panelIdRef.current = u;
            let f = l.isItemActive(m.value),
              h = (0, r.useRef)(null),
              [b, g] = (0, r.useState)(0),
              [y, v] = (0, r.useState)(!1);
            (0, r.useEffect)(() => {
              let e = h.current;
              if (!e) return;
              let t = window,
                a = () => {
                  g(e.scrollHeight), v(!0)
                };
              if (a(), void 0 !== t.ResizeObserver) {
                let s = new t.ResizeObserver(a);
                return s.observe(e), () => s.disconnect()
              }
              return t.addEventListener("resize", a), () => t.removeEventListener("resize", a)
            }, []);
            let x = f ? y && b > 0 ? `${b}px` : void 0 : "0px";
            return (0, s.jsx)("div", {
              ...n,
              id: u,
              ref: o,
              className: d(i().panel, t),
              "data-active": f || void 0,
              children: (0, s.jsx)("div", {
                ref: h,
                className: i().content,
                style: {
                  overflow: "hidden",
                  maxHeight: x,
                  opacity: +!!f,
                  transition: y ? "max-height 220ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms ease" : void 0
                },
                children: (0, s.jsx)("div", {
                  className: i().contentInner,
                  children: e
                })
              })
            })
          })
        })
    },
    47256: () => {},
    67361: e => {
      e.exports = {
        accordion: "GUNS__12-be3077f3-a8f18deb-1bbe4bcd",
        item: "GUNS__ed-1f5db1b6-6e1c9e9a-9df02a11",
        control: "GUNS__27-485642c9-68e46e30-ba776f64",
        panel: "GUNS__84-639dc8cb-feb99d31-87968fa3",
        content: "GUNS__7f-f8ad7c54-d23abd9d-5b6e2871",
        contentInner: "GUNS__d9-e226e07f-f18301ba-9c54b47c"
      }
    },
    82413: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => n,
        k: () => r
      });
      var s = a(12115);
      let r = {
        satoshi: "'Satoshi', sans-serif",
        firacode: "'Fira Code', monospace",
        poppins: "'Poppins', sans-serif",
        array: "'Array', sans-serif",
        drippy: "'Were-Beast', sans-serif",
        minecraft: "'Minecraftia', sans-serif",
        outfit: "'Outfit', sans-serif",
        chillax: "'Chillax', sans-serif",
        velocity: "'Panchang', sans-serif",
        technor: "'Technor', sans-serif",
        jetbrains_mono: "'JetBrains Mono', monospace",
        silkscreen: "'Silkscreen', serif",
        parkinsans: "'Parkinsans', serif"
      };

      function n({
        font: e,
        letterSpacing: t
      }) {
        let a = {
          1: "-0.5px",
          2: null,
          3: "1.5px"
        };
        return (0, s.useEffect)(() => {
          let s = document.head;
          if ("object" == typeof e) {
            let r = e.url;
            new FontFace("USERFONT", `url(${r})`).load().then(e => {
              document.fonts.add(e), document.body.style.fontFamily = "USERFONT, sans-serif";
              let r = document.createElement("style");
              r.innerHTML = `
                    button, input, select, textarea, span, a {
                        font-family: USERFONT, sans-serif;
                        font-size-adjust: initial;

                    }
                `, s.appendChild(r);
              let n = t ? a[t] : null;
              n && (document.body.style.letterSpacing = n)
            }).catch(e => {
              console.error("Failed to load font:", e)
            })
          } else {
            let t = document.createElement("link");
            switch (t.rel = "stylesheet", t.dataset.font = e, e) {
              case "firacode":
                t.href = "https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap";
                break;
              case "poppins":
                t.href = "https://fonts.googleapis.com/css2?family=Poppins&display=swap";
                break;
              case "array":
                t.href = "https://api.fontshare.com/v2/css?f[]=array@400&display=swap";
                break;
              case "drippy":
                t.href = "https://fonts.cdnfonts.com/css/were-beast-2";
                break;
              case "minecraft":
                t.href = "https://fonts.cdnfonts.com/css/minecraftia";
                break;
              case "outfit":
                t.href = "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap";
                break;
              case "chillax":
                t.href = "https://api.fontshare.com/v2/css?f[]=chillax@500&display=swap";
                break;
              case "velocity":
                t.href = "https://api.fontshare.com/v2/css?f[]=panchang@500&display=swap";
                break;
              case "technor":
                t.href = "https://api.fontshare.com/v2/css?f[]=technor@400&display=swap";
                break;
              case "jetbrains_mono":
                t.href = "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital@0;1&display=swap";
                break;
              case "silkscreen":
                t.href = "https://fonts.googleapis.com/css2?family=Silkscreen&display=swap";
                break;
              case "parkinsans":
                t.href = "https://fonts.googleapis.com/css2?family=Parkinsans:wght@500&display=swap";
                break;
              default:
                t.href = ""
            }
            t.href && s.appendChild(t);
            let a = document.createElement("style");
            return a.dataset.font = e, a.innerHTML = `
                body, * {
                    font-family: ${r[e]||"sans-serif"} !important;
                }
            `, s.appendChild(a), () => {
              t.parentNode && s.removeChild(t), a.parentNode && s.removeChild(a)
            }
          }
        }, [e]), null
      }
    }
  }
]);