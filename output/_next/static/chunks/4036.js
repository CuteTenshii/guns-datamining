(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4036], {
    4036: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, {
        default: () => A
      });
      var a = s(95155),
        r = s(12115),
        i = s(98500),
        n = s.n(i),
        o = s(39449),
        d = s(60884),
        l = s(56891),
        c = s.n(l),
        h = s(86297),
        u = s(98241),
        m = s.n(u),
        p = s(54834),
        g = s(66609),
        b = s(97478),
        f = s(81469),
        x = s(81576),
        _ = s(41063),
        v = s.n(_),
        j = s(30184),
        y = s(37897),
        N = s(58295),
        w = s(38256);

      function C({
        embedConfig: e,
        domain: t,
        username: s,
        totalUploads: i
      }) {
        let n = (0, w.kj)(),
          o = (0, w.useLang)(),
          [d, l] = (0, r.useState)({
            title: e.title,
            author: e.author,
            authorUrl: e.author_url,
            description: e.description,
            color: e.color
          }),
          [c, u] = (0, r.useState)(e.color),
          [m, p] = (0, r.useState)(e.timestamp),
          b = (0, r.useMemo)(() => n("dashboard.imagehost.settings.embed.editor.examples.file_name"), [n]),
          x = (0, r.useMemo)(() => n("dashboard.imagehost.settings.embed.editor.examples.file_size"), [n]),
          _ = (0, r.useMemo)(() => n("dashboard.imagehost.settings.embed.editor.preview.username"), [n]),
          C = (0, r.useMemo)(() => n("dashboard.imagehost.settings.embed.editor.preview.timestamp"), [n]),
          k = (0, r.useCallback)(e => {
            let t = new Date(Date.now()).toLocaleString(o || "en", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: !1
            });
            return e.replace(/{file_name}/g, b).replace(/{file_size}/g, x).replace(/{username}/g, s).replace(/{upload_date}/g, t).replace(/{total_uploads}/g, i.toString())
          }, [o, b, x, s, i]),
          E = e => {
            let {
              name: t,
              value: s
            } = e.target;
            l({
              ...d,
              [t]: s
            })
          },
          I = {
            borderColor: d.color
          },
          A = async e => {
            let t = JSON.stringify({
                title: d.title,
                author: d.author,
                author_url: d.authorUrl,
                description: d.description,
                timestamp: m,
                color: c
              }),
              s = await fetch("https://guns.lol/api/dashboard/imagehost/embed", {
                method: "POST",
                body: t
              }),
              a = await s.json();
            s.ok ? g.oR.success(n("dashboard.imagehost.settings.embed.editor.messages.save_success")) : g.oR.error(n("dashboard.imagehost.settings.embed.editor.messages.save_failed", {
              error: a.error || ""
            }))
          };
        return (0, a.jsxs)("div", {
          className: v().embedEditor,
          children: [(0, a.jsxs)("div", {
            className: v().editor,
            children: [(0, a.jsx)("div", {
              className: v().embedInput,
              children: (0, a.jsx)(y.A, {
                name: "title",
                featureName: n("dashboard.imagehost.settings.embed.editor.fields.title"),
                value: d.title,
                onChange: E,
                placeholder: n("dashboard.imagehost.settings.embed.editor.fields.title"),
                icon: h.A.embedTitle
              })
            }), (0, a.jsx)("div", {
              className: v().embedInput,
              children: (0, a.jsx)(y.A, {
                name: "author",
                featureName: n("dashboard.imagehost.settings.embed.editor.fields.author"),
                value: d.author,
                onChange: E,
                placeholder: n("dashboard.imagehost.settings.embed.editor.fields.author"),
                icon: h.A.embedAuthor
              })
            }), (0, a.jsx)("div", {
              className: v().embedInput,
              children: (0, a.jsx)(y.A, {
                name: "authorUrl",
                featureName: n("dashboard.imagehost.settings.embed.editor.fields.author_url"),
                value: d.authorUrl,
                onChange: E,
                placeholder: n("dashboard.imagehost.settings.embed.editor.fields.author_url"),
                icon: h.A.embedAuthorUrl
              })
            }), (0, a.jsx)("div", {
              className: v().embedInput,
              children: (0, a.jsx)(N.A, {
                rows: 3,
                name: "description",
                featureName: n("dashboard.imagehost.settings.embed.editor.fields.description"),
                value: d.description,
                onChange: E,
                placeholder: n("dashboard.imagehost.settings.embed.editor.fields.description")
              })
            }), (0, a.jsx)("div", {
              className: v().embedInput,
              children: (0, a.jsx)(f.A, {
                featureName: n("dashboard.imagehost.settings.embed.editor.fields.timestamp"),
                onChangeFunction: e => {
                  p(e.target.checked)
                },
                defaultChecked: m
              })
            }), (0, a.jsx)("div", {
              className: v().embedInput,
              children: (0, a.jsx)(j.A, {
                featureName: n("dashboard.imagehost.settings.embed.editor.fields.color"),
                value: c,
                onChangeFunction: u
              })
            }), (0, a.jsx)("div", {
              className: v().saveEmbedButtonContainer,
              children: (0, a.jsx)("span", {
                onClick: A,
                children: n("dashboard.imagehost.settings.embed.editor.save_button")
              })
            })]
          }), (0, a.jsxs)("div", {
            className: v().wrapper,
            children: [(0, a.jsxs)("div", {
              className: v().messageInfo,
              children: [(0, a.jsx)("img", {
                className: v().avatar,
                src: "https://cdn.discordapp.com/embed/avatars/0.png",
                alt: "User Avatar"
              }), (0, a.jsxs)("div", {
                className: v().userInfo,
                children: [(0, a.jsxs)("div", {
                  children: [(0, a.jsx)("span", {
                    className: v().username,
                    children: _
                  }), (0, a.jsx)("span", {
                    className: v().timestamp,
                    children: C
                  })]
                }), (0, a.jsx)("span", {
                  className: v().link,
                  children: n("dashboard.imagehost.settings.embed.editor.preview.link", {
                    domain: t,
                    filename: b
                  })
                })]
              })]
            }), (0, a.jsx)("div", {
              className: v().preview,
              style: {
                borderLeft: `3px solid ${c}`
              },
              children: (0, a.jsxs)("div", {
                className: v().discordEmbed,
                style: I,
                children: [(0, a.jsx)("div", {
                  className: v().embedAuthor,
                  children: "" !== d.authorUrl ? (0, a.jsx)("h2", {
                    children: k(d.author)
                  }) : (0, a.jsx)("h1", {
                    children: k(d.author)
                  })
                }), (0, a.jsx)("div", {
                  className: v().embedTitle,
                  children: (0, a.jsx)("h1", {
                    children: k(d.title)
                  })
                }), (0, a.jsx)("div", {
                  className: v().embedDescription,
                  children: k(d.description)
                }), (0, a.jsx)("div", {
                  className: v().embedImage,
                  children: (0, a.jsx)("img", {
                    src: "https://assets.guns.lol/guns_logo_no_background_cropped.png",
                    alt: "Logo"
                  })
                }), m && (0, a.jsx)("div", {
                  className: v().embedTimestamp,
                  children: (0, a.jsx)("h1", {
                    children: C
                  })
                })]
              })
            })]
          })]
        })
      }
      var k = s(57776);
      let E = "https://guns.lol",
        I = e => E ? `${E}${e}` : e,
        A = ({
          data: e
        }) => {
          let t = (0, w.kj)(),
            [s, i] = (0, r.useState)(!1),
            [l, u] = (0, r.useState)(""),
            [_, v] = (0, r.useState)(!1),
            [j, y] = (0, r.useState)(!1),
            [N, E] = (0, r.useState)(!1),
            [A, S] = (0, r.useState)(""),
            [W, L] = (0, r.useState)(!1),
            [M, R] = (0, r.useState)("i.guns.lol"),
            [T, B] = (0, r.useState)({
              title: "",
              author: "",
              author_url: "",
              description: "",
              color: "#2b2d31",
              timestamp: !0
            }),
            [$, P] = (0, r.useState)(!1),
            [U, K] = (0, r.useState)(null),
            [D, z] = (0, r.useState)(!1),
            O = t("dashboard.imagehost.settings.save_button"),
            [F, H] = (0, r.useState)(O),
            [Q, V] = (0, r.useState)(0),
            X = (0, r.useMemo)(() => A ? W ? A : `${A.slice(0,5)}************` : t("dashboard.imagehost.settings.upload_key.loading"), [A, W, t]),
            Z = (0, r.useCallback)(async e => {
              if (e) try {
                await navigator.clipboard.writeText(e), g.oR.success(t("dashboard.imagehost.settings.copy_success"))
              } catch (e) {
                g.oR.error(t("dashboard.imagehost.settings.copy_failed"))
              }
            }, [t]),
            G = (0, r.useCallback)(async (e = !0) => {
              let t = await fetch("/api/dashboard/imagehost/data?latestConfig=true", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                s = await t.json();
              if (t.ok) {
                let t = s.config || {},
                  a = t.embed || {},
                  r = t.domain || "i.guns.lol",
                  i = {
                    filenameLength: "number" == typeof t.filename_length ? t.filename_length : 7,
                    anonymousUploads: !!t.anonymous,
                    hideExtension: !!t.hide_extension,
                    showEmbed: !!t.show_embed
                  };
                V(s.totalUploads || 0), u(i.filenameLength), v(i.anonymousUploads), y(i.hideExtension), E(i.showEmbed), S(t.secret_key || ""), R(r), B({
                  title: a.title || "",
                  author: a.author || "",
                  author_url: a.author_url || "",
                  description: a.description || "",
                  color: a.color || "#2b2d31",
                  timestamp: "boolean" != typeof a.timestamp || a.timestamp
                }), K(i), z(!1), e && H(O)
              } else g.oR.error(s.error)
            }, [O]);
          (0, r.useEffect)(() => {
            H(O)
          }, [O]), (0, r.useEffect)(() => {
            G()
          }, [G]), (0, r.useEffect)(() => {
            if (!U) return void z(!1);
            let e = !1;
            "number" != typeof l || Number.isNaN(l) ? e = !0 : l !== U.filenameLength && (e = !0), (_ !== U.anonymousUploads || j !== U.hideExtension || N !== U.showEmbed) && (e = !0), z(e)
          }, [l, _, j, N, U]);
          let J = (0, r.useCallback)(() => {
              U && (u(U.filenameLength), v(U.anonymousUploads), y(U.hideExtension), E(U.showEmbed), z(!1), H(O))
            }, [U, O]),
            Y = (0, r.useMemo)(() => "number" != typeof l || Number.isNaN(l) ? null : {
              filenameLength: l,
              anonymousUploads: _,
              hideExtension: j,
              showEmbed: N
            }, [l, _, j, N]),
            q = (0, r.useCallback)(async () => {
              if (!Y) return void g.oR.error(t("dashboard.imagehost.settings.errors.invalid_length"));
              if (Y.filenameLength < 5 || Y.filenameLength > 50) return void g.oR.error(t("dashboard.imagehost.settings.errors.length_range"));
              H(t("dashboard.imagehost.settings.save_button_saving"));
              let e = await fetch(I("/api/dashboard/imagehost"), {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    anonymous_uploads: Y.anonymousUploads,
                    filename_length: Y.filenameLength,
                    hide_extension: Y.hideExtension,
                    show_embed: Y.showEmbed
                  })
                }),
                s = await e.json();
              e.ok ? (g.oR.success(t("dashboard.imagehost.settings.save_success")), K(Y), z(!1), H(t("dashboard.imagehost.settings.save_button_saved")), setTimeout(() => H(O), 2e3)) : g.oR.error(s.error), H(O)
            }, [Y, O, t]),
            ee = (0, r.useCallback)(async () => {
              i(!0);
              let e = await fetch(I("/api/dashboard/imagehost/regenerate"), {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                s = await e.json();
              e.ok ? (S(s.secretKey || ""), L(!1), g.oR.success(t("dashboard.imagehost.settings.regenerate_success"))) : g.oR.error(s.error), i(!1)
            }, [t]);
          return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(g.l$, {
              richColors: !0,
              position: "top-center",
              theme: "dark",
              className: m().toasterStyles,
              icons: {
                success: p.A.successToast
              },
              visibleToasts: 2
            }), (0, a.jsx)(o.N, {
              children: D && (0, a.jsx)("div", {
                className: m().unsavedChangesWrapper,
                children: (0, a.jsxs)(d.P.div, {
                  className: m().unsavedChangesBar,
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
                    className: m().compactText,
                    children: t("common.unsaved_changes.compact")
                  }), (0, a.jsxs)("div", {
                    className: m().unsavedChangesButtons,
                    children: [(0, a.jsx)("span", {
                      className: m().resetButton,
                      onClick: J,
                      children: t("common.unsaved_changes.reset")
                    }), (0, a.jsx)("span", {
                      className: m().saveButton,
                      onClick: q,
                      children: F
                    })]
                  })]
                })
              })
            }), (0, a.jsxs)(k.A, {
              opened: $,
              onClose: () => P(!1),
              title: t("dashboard.imagehost.settings.embed.modal_title"),
              centered: !0,
              size: "650px",
              children: [(0, a.jsxs)(x.Ay, {
                width: "auto",
                position: "top",
                children: [(0, a.jsx)(x.Ay.Target, {
                  children: (0, a.jsxs)("div", {
                    className: c().variableText,
                    children: [h.A.lightBulb, t("dashboard.imagehost.settings.embed.tip", {
                      here: (0, a.jsx)("strong", {
                        style: {
                          color: "#fafafa"
                        },
                        children: t("dashboard.imagehost.settings.embed.tip_here")
                      })
                    })]
                  })
                }), (0, a.jsx)(x.Ay.Dropdown, {
                  children: (0, a.jsxs)("div", {
                    className: c().variableList,
                    children: [(0, a.jsxs)("h1", {
                      children: [(0, a.jsx)("p", {
                        children: "{file_name}"
                      }), " - ", t("dashboard.imagehost.settings.embed.variables.file_name")]
                    }), (0, a.jsxs)("h1", {
                      children: [(0, a.jsx)("p", {
                        children: "{file_size}"
                      }), " - ", t("dashboard.imagehost.settings.embed.variables.file_size")]
                    }), (0, a.jsxs)("h1", {
                      children: [(0, a.jsx)("p", {
                        children: "{upload_date}"
                      }), " - ", t("dashboard.imagehost.settings.embed.variables.upload_date")]
                    }), (0, a.jsxs)("h1", {
                      children: [(0, a.jsx)("p", {
                        children: "{username}"
                      }), " - ", t("dashboard.imagehost.settings.embed.variables.username")]
                    }), (0, a.jsxs)("h1", {
                      children: [(0, a.jsx)("p", {
                        children: "{total_uploads}"
                      }), " - ", t("dashboard.imagehost.settings.embed.variables.total_uploads")]
                    })]
                  })
                })]
              }), (0, a.jsx)(C, {
                embedConfig: T,
                domain: M,
                username: e.username,
                totalUploads: Q
              })]
            }), (0, a.jsxs)("div", {
              className: c().settingsWrapper,
              children: [(0, a.jsxs)("div", {
                className: c().settingsHeader,
                children: [(0, a.jsxs)("h1", {
                  children: [h.A.configuration, " ", t("dashboard.imagehost.settings.header.title")]
                }), (0, a.jsx)("h3", {
                  children: t("dashboard.imagehost.settings.header.description")
                })]
              }), (0, a.jsxs)("div", {
                className: c().settingsGrid,
                children: [(0, a.jsxs)("div", {
                  className: c().settingsCard,
                  children: [(0, a.jsxs)("div", {
                    className: c().settingsCardTop,
                    children: [(0, a.jsxs)("h2", {
                      children: [h.A.configuration, " ", t("dashboard.imagehost.settings.general.title")]
                    }), (0, a.jsx)("p", {
                      children: t("dashboard.imagehost.settings.general.subtitle")
                    })]
                  }), (0, a.jsx)(b.A, {
                    id: "filename-length",
                    featureName: t("dashboard.imagehost.settings.general.filename_length"),
                    value: l,
                    placeholder: 7,
                    onChangeFunction: e => {
                      "number" == typeof e ? u(e) : "" === e && u("")
                    },
                    min: 6,
                    max: 30,
                    icon: h.A.fileName
                  }), (0, a.jsxs)("div", {
                    className: c().configureEmbedWrapper,
                    children: [(0, a.jsx)("h1", {
                      children: t("dashboard.imagehost.settings.embed.section_title")
                    }), (0, a.jsxs)("span", {
                      className: c().configureEmbed,
                      onClick: () => P(!0),
                      children: [h.A.openEditor, " ", t("dashboard.imagehost.settings.embed.configure_button")]
                    })]
                  }), (0, a.jsxs)("div", {
                    className: c().switchGroup,
                    children: [(0, a.jsx)(f.A, {
                      id: "anonymous-uploads",
                      featureName: t("dashboard.imagehost.settings.general.anonymous_uploads"),
                      onChangeFunction: e => v(e.currentTarget.checked),
                      defaultChecked: _,
                      checked: _
                    }), (0, a.jsx)(f.A, {
                      id: "hide-file-extension",
                      featureName: t("dashboard.imagehost.settings.general.hide_extension"),
                      onChangeFunction: e => y(e.currentTarget.checked),
                      defaultChecked: j,
                      checked: j
                    }), (0, a.jsx)(f.A, {
                      id: "show-discord-embed",
                      featureName: t("dashboard.imagehost.settings.general.show_embed"),
                      onChangeFunction: e => E(e.currentTarget.checked),
                      defaultChecked: N,
                      checked: N
                    })]
                  })]
                }), (0, a.jsxs)("div", {
                  className: c().settingsCard,
                  children: [(0, a.jsxs)("div", {
                    className: c().settingsCardTop,
                    children: [(0, a.jsxs)("h2", {
                      children: [h.A.imagehostDomains, " ", t("dashboard.imagehost.settings.domain.title")]
                    }), (0, a.jsx)("p", {
                      children: t("dashboard.imagehost.settings.domain.subtitle")
                    })]
                  }), (0, a.jsxs)("div", {
                    className: c().domainRow,
                    children: [(0, a.jsxs)("div", {
                      className: c().domainPillContainer,
                      children: [(0, a.jsx)("h1", {
                        children: t("dashboard.imagehost.settings.domain.current_label")
                      }), (0, a.jsxs)("span", {
                        className: c().domainPill,
                        children: [h.A.link, " https://", M]
                      })]
                    }), (0, a.jsxs)(n(), {
                      href: "/imagehost/domains",
                      className: c().settingsLinkButton,
                      children: [h.A.link, " ", t("dashboard.imagehost.settings.domain.manage_button")]
                    })]
                  }), (0, a.jsx)("p", {
                    className: c().settingHelp,
                    children: t("dashboard.imagehost.settings.domain.help")
                  })]
                }), (0, a.jsxs)("div", {
                  className: c().settingsCard,
                  children: [(0, a.jsxs)("div", {
                    className: c().settingsCardTop,
                    children: [(0, a.jsxs)("h2", {
                      children: [h.A.uploadKey, " ", t("dashboard.imagehost.settings.upload_key.title")]
                    }), (0, a.jsx)("p", {
                      children: t("dashboard.imagehost.settings.upload_key.subtitle")
                    })]
                  }), (0, a.jsxs)("div", {
                    className: c().setupKeyBlock,
                    children: [(0, a.jsxs)("div", {
                      className: c().setupKeyLabel,
                      children: [h.A.key, " ", t("dashboard.imagehost.settings.upload_key.secret_label")]
                    }), (0, a.jsxs)("div", {
                      className: c().setupKeyRow,
                      children: [(0, a.jsx)("span", {
                        className: c().setupKeyValue,
                        children: X
                      }), (0, a.jsxs)("div", {
                        className: c().setupKeyActions,
                        children: [(0, a.jsxs)("span", {
                          className: c().uploadKeyButton,
                          onClick: () => L(e => !e),
                          children: [W ? p.A.hidePassword : p.A.password, " ", W ? t("dashboard.imagehost.settings.upload_key.hide") : t("dashboard.imagehost.settings.upload_key.reveal")]
                        }), (0, a.jsxs)("span", {
                          className: c().uploadKeyButton,
                          onClick: () => Z(A),
                          children: [p.A.copy, " ", t("dashboard.imagehost.settings.upload_key.copy")]
                        })]
                      })]
                    }), (0, a.jsxs)("span", {
                      className: c().regenerateButton,
                      onClick: ee,
                      children: [s ? h.A.loading : h.A.regenerateKey, (0, a.jsx)("span", {
                        children: s ? t("dashboard.imagehost.settings.upload_key.generating") : t("dashboard.imagehost.settings.upload_key.regenerate")
                      })]
                    }), (0, a.jsx)("div", {
                      className: c().uploadKeyNote,
                      children: t("dashboard.imagehost.settings.upload_key.note")
                    })]
                  })]
                })]
              })]
            })]
          })
        }
    },
    30184: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => f
      });
      var a = s(95155),
        r = s(12115),
        i = s(47650),
        n = s(29722),
        o = s(98241),
        d = s.n(o),
        l = s(65095),
        c = s.n(l);
      let h = "#1c1c1c",
        u = (e, t, s) => Math.min(Math.max(e, t), s),
        m = e => {
          if (!e) return "";
          let t = e.trim(),
            s = t.replace(/^#/, "").replace(/[^0-9a-f]/gi, "").slice(0, 6).toLowerCase();
          return s ? `#${s}` : t.startsWith("#") ? "#" : ""
        },
        p = e => {
          if (/^#[0-9a-f]{6}$/i.test(e)) return e.toLowerCase();
          if (/^#[0-9a-f]{3}$/i.test(e)) return `#${e.slice(1).split("").map(e=>`${e}${e}`).join("")}`.toLowerCase();
          return null
        },
        g = e => {
          let t, s, a, r, i, n, o, {
            r: d,
            g: l,
            b: c
          } = {
            r: (t = parseInt(e.replace("#", ""), 16)) >> 16 & 255,
            g: t >> 8 & 255,
            b: 255 & t
          };
          return n = (i = Math.max(s = d / 255, a = l / 255, r = c / 255)) - Math.min(s, a, r), o = 0, 0 !== n && (o = (i === s ? (a - r) / n % 6 : i === a ? (r - s) / n + 2 : (s - a) / n + 4) * 60) < 0 && (o += 360), {
            h: o,
            s: 0 === i ? 0 : n / i,
            v: i
          }
        },
        b = (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "19",
          height: "19",
          viewBox: "0 0 24 24",
          children: (0, a.jsx)("path", {
            fill: "currentColor",
            d: "M19.5 3.56a2.26 2.26 0 0 0-3.18 0l-2.05 2.05l-.48-.48a.75.75 0 0 0-1.06 0l-1 1a.75.75 0 0 0 0 1.06l.48.48l-6.8 6.8a2.5 2.5 0 0 0-.66 1.15l-.54 2.06a1 1 0 0 0 1.21 1.21l2.06-.54a2.5 2.5 0 0 0 1.15-.66l6.8-6.8l.48.48a.75.75 0 0 0 1.06 0l1-1a.75.75 0 0 0 0-1.06l-.48-.48l2.05-2.05a2.26 2.26 0 0 0 0-3.18Z"
          })
        });

      function f({
        featureName: e,
        onChangeFunction: t,
        value: s,
        placeholder: o = "#000000",
        icon: l,
        className: f,
        disabled: x,
        style: _,
        ...v
      }) {
        let j = (0, r.useRef)(null),
          y = (0, r.useRef)(null),
          N = (0, r.useRef)(null),
          [w, C] = (0, r.useState)(!1),
          [k, E] = (0, r.useState)(() => g(h)),
          [I, A] = (0, r.useState)(h),
          [S, W] = (0, r.useState)(!1),
          [L, M] = (0, r.useState)(!1),
          [R, T] = (0, r.useState)({
            left: 0,
            top: 0,
            width: 220
          }),
          [B, $] = (0, r.useState)(!1),
          P = m("string" == typeof s ? s : ""),
          U = (0, r.useMemo)(() => P ? p(P) : null, [P]),
          K = U ?? I;
        (0, r.useEffect)(() => {
          U && A(U)
        }, [U]), (0, r.useEffect)(() => {
          E(g(K))
        }, [K]), (0, r.useEffect)(() => {
          $(!0)
        }, []);
        let D = (0, r.useCallback)(() => {
          if (!j.current) return;
          let e = j.current.getBoundingClientRect(),
            t = Math.min(270, e.width),
            s = N.current?.offsetHeight ?? 260,
            a = e.bottom + 10;
          if (a + s > window.innerHeight - 12) {
            let t = e.top - 10 - s;
            t >= 12 && (a = t)
          }
          let r = window.innerWidth - t - 12;
          T({
            left: u(e.left, 12, Math.max(12, r)),
            top: a,
            width: t
          })
        }, []);
        (0, r.useLayoutEffect)(() => {
          if (!w) return;
          let e = () => {
            D()
          };
          return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
            window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0)
          }
        }, [w, D]), (0, r.useEffect)(() => {
          if (!w) return;
          let e = e => {
              let t = e.target,
                s = j.current,
                a = N.current;
              s && s.contains(t) || a && a.contains(t) || C(!1)
            },
            t = e => {
              "Escape" === e.key && C(!1)
            };
          return document.addEventListener("mousedown", e), document.addEventListener("keydown", t), () => {
            document.removeEventListener("mousedown", e), document.removeEventListener("keydown", t)
          }
        }, [w]);
        let z = (0, r.useCallback)(e => {
            E(e);
            let s = (e => {
              let t, {
                r: s,
                g: a,
                b: r
              } = (({
                h: e,
                s: t,
                v: s
              }) => {
                let a = s * t,
                  r = a * (1 - Math.abs(e / 60 % 2 - 1)),
                  i = s - a,
                  n = 0,
                  o = 0,
                  d = 0;
                e < 60 ? (n = a, o = r) : e < 120 ? (n = r, o = a) : e < 180 ? (o = a, d = r) : e < 240 ? (o = r, d = a) : e < 300 ? (n = r, d = a) : (n = a, d = r);
                let l = Math.round((n + i) * 255);
                return {
                  r: l,
                  g: Math.round((o + i) * 255),
                  b: Math.round((d + i) * 255)
                }
              })({
                ...e,
                h: (e.h % 360 + 360) % 360,
                s: u(e.s, 0, 1),
                v: u(e.v, 0, 1)
              });
              return t = e => e.toString(16).padStart(2, "0"), `#${t(s)}${t(a)}${t(r)}`
            })(e);
            A(s), t?.(s)
          }, [t]),
          O = (0, r.useCallback)(e => {
            let s = m(e.target.value);
            t?.(s)
          }, [t]),
          F = (0, r.useCallback)((e, t) => {
            if (!y.current) return;
            let s = y.current.getBoundingClientRect(),
              a = u((e - s.left) / s.width, 0, 1),
              r = u((t - s.top) / s.height, 0, 1);
            z({
              h: k.h,
              s: a,
              v: 1 - r
            })
          }, [k.h, z]),
          H = (0, r.useCallback)(e => {
            if (x) return;
            e.preventDefault();
            let t = e.pointerId;
            F(e.clientX, e.clientY);
            let s = e => {
                e.pointerId === t && F(e.clientX, e.clientY)
              },
              a = e => {
                e.pointerId === t && (document.removeEventListener("pointermove", s), document.removeEventListener("pointerup", a))
              };
            document.addEventListener("pointermove", s), document.addEventListener("pointerup", a)
          }, [x, F]),
          Q = (0, r.useCallback)(e => {
            z({
              ...k,
              h: Number(e.target.value)
            })
          }, [k, z]),
          V = (0, r.useCallback)(() => {
            x || C(e => (e || D(), !0))
          }, [x, D]),
          X = (0, r.useCallback)(() => {
            x || C(e => {
              let t = !e;
              return t && D(), t
            })
          }, [x, D]),
          Z = (0, r.useCallback)(async () => {
            if (!x && S && void 0 !== window.EyeDropper && !L) try {
              M(!0);
              let e = new window.EyeDropper,
                t = await e.open(),
                s = p(t.sRGBHex);
              s && z(g(s))
            } catch (e) {} finally {
              M(!1)
            }
          }, [x, L, S, z]);
        (0, r.useEffect)(() => {
          W(void 0 !== window.EyeDropper)
        }, []);
        let G = (0, n.A)(d().inputWrapperInput, c().textInput, l && c().textInputWithIcon, f),
          J = "undefined" != typeof document ? document.body : null,
          Y = !!(w && B && J),
          q = Y ? {
            position: "fixed",
            left: `${R.left}px`,
            top: `${R.top}px`,
            width: `${R.width}px`
          } : void 0,
          ee = "string" == typeof e ? e : void 0,
          et = (0, a.jsxs)("div", {
            ref: N,
            className: c().panel,
            style: q,
            children: [(0, a.jsxs)("div", {
              ref: y,
              className: c().svArea,
              style: {
                backgroundColor: `hsl(${k.h}, 100%, 50%)`
              },
              onPointerDown: H,
              children: [(0, a.jsx)("div", {
                className: c().svWhiteOverlay
              }), (0, a.jsx)("div", {
                className: c().svBlackOverlay
              }), (0, a.jsx)("div", {
                className: c().svCursor,
                style: {
                  left: `${100*k.s}%`,
                  top: `${(1-k.v)*100}%`
                }
              })]
            }), (0, a.jsx)("div", {
              className: c().hueSliderWrapper,
              children: (0, a.jsx)("input", {
                type: "range",
                min: 0,
                max: 360,
                step: 1,
                value: k.h,
                onChange: Q,
                className: c().hueSlider,
                disabled: x
              })
            })]
          });
        return (0, a.jsxs)("div", {
          className: d().inputContainerWrapper,
          "data-dashboard-feature-label": ee,
          children: [(0, a.jsx)("h1", {
            className: d().featureName,
            children: e
          }), (0, a.jsxs)("div", {
            className: (0, n.A)(d().inputWrapperDiv, c().wrapper),
            ref: j,
            children: [(0, a.jsx)("button", {
              type: "button",
              className: c().leftSwatchButton,
              onClick: X,
              style: {
                cursor: x ? "not-allowed" : "pointer"
              },
              disabled: x,
              children: (0, a.jsx)("span", {
                className: c().colorSwatch,
                style: {
                  backgroundColor: K
                }
              })
            }), l && (0, a.jsx)("span", {
              className: c().leftIcon,
              children: l
            }), (0, a.jsx)("input", {
              type: "text",
              autoComplete: "off",
              spellCheck: !1,
              inputMode: "text",
              maxLength: 7,
              className: G,
              placeholder: o,
              value: P,
              onChange: O,
              onFocus: V,
              onClick: V,
              disabled: x,
              style: _,
              ...v
            }), (0, a.jsx)("button", {
              type: "button",
              className: c().pickerButton,
              onClick: S ? Z : X,
              disabled: x || S && L,
              children: b
            }), w && (Y && J ? (0, i.createPortal)(et, J) : et)]
          })]
        })
      }
    },
    39449: (e, t, s) => {
      "use strict";
      s.d(t, {
        N: () => f
      });
      var a = s(95155),
        r = s(12115),
        i = s(39551),
        n = s(28819),
        o = s(15131),
        d = s(24866);
      class l extends r.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            e.height = t.offsetHeight || 0, e.width = t.offsetWidth || 0, e.top = t.offsetTop, e.left = t.offsetLeft
          }
          return null
        }
        componentDidUpdate() {}
        render() {
          return this.props.children
        }
      }

      function c({
        children: e,
        isPresent: t
      }) {
        let s = (0, r.useId)(),
          i = (0, r.useRef)(null),
          n = (0, r.useRef)({
            width: 0,
            height: 0,
            top: 0,
            left: 0
          }),
          {
            nonce: o
          } = (0, r.useContext)(d.Q);
        return (0, r.useInsertionEffect)(() => {
          let {
            width: e,
            height: a,
            top: r,
            left: d
          } = n.current;
          if (t || !i.current || !e || !a) return;
          i.current.dataset.motionPopId = s;
          let l = document.createElement("style");
          return o && (l.nonce = o), document.head.appendChild(l), l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${a}px !important;
            top: ${r}px !important;
            left: ${d}px !important;
          }
        `), () => {
            document.head.removeChild(l)
          }
        }, [t]), (0, a.jsx)(l, {
          isPresent: t,
          childRef: i,
          sizeRef: n,
          children: r.cloneElement(e, {
            ref: i
          })
        })
      }
      let h = ({
        children: e,
        initial: t,
        isPresent: s,
        onExitComplete: i,
        custom: d,
        presenceAffectsLayout: l,
        mode: h
      }) => {
        let m = (0, n.M)(u),
          p = (0, r.useId)(),
          g = (0, r.useCallback)(e => {
            for (let t of (m.set(e, !0), m.values()))
              if (!t) return;
            i && i()
          }, [m, i]),
          b = (0, r.useMemo)(() => ({
            id: p,
            initial: t,
            isPresent: s,
            custom: d,
            onExitComplete: g,
            register: e => (m.set(e, !1), () => m.delete(e))
          }), l ? [Math.random(), g] : [s, g]);
        return (0, r.useMemo)(() => {
          m.forEach((e, t) => m.set(t, !1))
        }, [s]), r.useEffect(() => {
          s || m.size || !i || i()
        }, [s]), "popLayout" === h && (e = (0, a.jsx)(c, {
          isPresent: s,
          children: e
        })), (0, a.jsx)(o.t.Provider, {
          value: b,
          children: e
        })
      };

      function u() {
        return new Map
      }
      var m = s(79196);
      let p = e => e.key || "";

      function g(e) {
        let t = [];
        return r.Children.forEach(e, e => {
          (0, r.isValidElement)(e) && t.push(e)
        }), t
      }
      var b = s(4524);
      let f = ({
        children: e,
        custom: t,
        initial: s = !0,
        onExitComplete: o,
        presenceAffectsLayout: d = !0,
        mode: l = "sync",
        propagate: c = !1
      }) => {
        let [u, f] = (0, m.xQ)(c), x = (0, r.useMemo)(() => g(e), [e]), _ = c && !u ? [] : x.map(p), v = (0, r.useRef)(!0), j = (0, r.useRef)(x), y = (0, n.M)(() => new Map), [N, w] = (0, r.useState)(x), [C, k] = (0, r.useState)(x);
        (0, b.E)(() => {
          v.current = !1, j.current = x;
          for (let e = 0; e < C.length; e++) {
            let t = p(C[e]);
            _.includes(t) ? y.delete(t) : !0 !== y.get(t) && y.set(t, !1)
          }
        }, [C, _.length, _.join("-")]);
        let E = [];
        if (x !== N) {
          let e = [...x];
          for (let t = 0; t < C.length; t++) {
            let s = C[t],
              a = p(s);
            _.includes(a) || (e.splice(t, 0, s), E.push(s))
          }
          "wait" === l && E.length && (e = E), k(g(e)), w(x);
          return
        }
        let {
          forceRender: I
        } = (0, r.useContext)(i.L);
        return (0, a.jsx)(a.Fragment, {
          children: C.map(e => {
            let r = p(e),
              i = (!c || !!u) && (x === C || _.includes(r));
            return (0, a.jsx)(h, {
              isPresent: i,
              initial: (!v.current || !!s) && void 0,
              custom: i ? void 0 : t,
              presenceAffectsLayout: d,
              mode: l,
              onExitComplete: i ? void 0 : () => {
                if (!y.has(r)) return;
                y.set(r, !0);
                let e = !0;
                y.forEach(t => {
                  t || (e = !1)
                }), e && (null == I || I(), k(j.current), c && (null == f || f()), o && o())
              },
              children: e
            }, r)
          })
        })
      }
    },
    41063: e => {
      e.exports = {
        embedEditor: "embedEditor_embedEditor___rN_r",
        editor: "embedEditor_editor__LuV5Y",
        preview: "embedEditor_preview__ZdAjh",
        messageAuthor: "embedEditor_messageAuthor__gu37x",
        messageInfo: "embedEditor_messageInfo__9ZxNw",
        wrapper: "embedEditor_wrapper__NZaM9",
        avatar: "embedEditor_avatar__Lmfl3",
        link: "embedEditor_link__kxtm_",
        username: "embedEditor_username__QNtCu",
        timestamp: "embedEditor_timestamp__gpv4z",
        discordEmbed: "embedEditor_discordEmbed__H4fGs",
        embedTitle: "embedEditor_embedTitle__OKhEa",
        embedDescription: "embedEditor_embedDescription__njL9n",
        embedAuthor: "embedEditor_embedAuthor__I1PJR",
        embedImage: "embedEditor_embedImage__9d38x",
        embedInput: "embedEditor_embedInput__sCB2r",
        saveEmbedButtonContainer: "embedEditor_saveEmbedButtonContainer__bKT0Q",
        embedTimestamp: "embedEditor_embedTimestamp__6q4YZ"
      }
    },
    65095: e => {
      e.exports = {
        wrapper: "colorInputWrapper_wrapper__HMrVe",
        textInput: "colorInputWrapper_textInput__lIQe9",
        textInputWithIcon: "colorInputWrapper_textInputWithIcon__pCuPt",
        leftSwatchButton: "colorInputWrapper_leftSwatchButton__2i9aK",
        colorSwatch: "colorInputWrapper_colorSwatch__Ijvyq",
        leftIcon: "colorInputWrapper_leftIcon__Xj0aW",
        pickerButton: "colorInputWrapper_pickerButton__U9Wlw",
        panel: "colorInputWrapper_panel__MRo6m",
        svArea: "colorInputWrapper_svArea___zVit",
        svWhiteOverlay: "colorInputWrapper_svWhiteOverlay__BKAkR",
        svBlackOverlay: "colorInputWrapper_svBlackOverlay__XIwtz",
        svCursor: "colorInputWrapper_svCursor___MSvJ",
        hueSliderWrapper: "colorInputWrapper_hueSliderWrapper__ycaHU",
        hueSlider: "colorInputWrapper_hueSlider__bQeHE"
      }
    },
    73728: e => {
      e.exports = {
        switch: "switchWrapper_switch__mTK4q",
        input: "switchWrapper_input__wPAP0",
        track: "switchWrapper_track__6KFya",
        thumb: "switchWrapper_thumb__HeiXF"
      }
    },
    81469: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => u
      });
      var a = s(95155),
        r = s(29722),
        i = s(12115),
        n = s(98241),
        o = s.n(n),
        d = s(73728),
        l = s.n(d),
        c = s(38256);
      let h = ["ar", "he", "fa", "ur"];

      function u({
        featureName: e,
        onChangeFunction: t,
        className: s,
        id: n,
        onChange: d,
        defaultChecked: u,
        disabled: m,
        ...p
      }) {
        let g = (0, c.useLang)(),
          b = (0, i.useId)(),
          f = h.includes(g) ? "rtl" : "ltr",
          x = "string" == typeof e ? e : void 0;
        return (0, a.jsxs)("div", {
          className: o().inputContainerWrapper,
          "data-dashboard-feature-label": x,
          children: [e && (0, a.jsx)("h1", {
            className: o().featureName,
            children: e
          }), (0, a.jsx)("div", {
            className: o().inputWrapperDiv,
            style: {
              direction: f
            },
            children: (0, a.jsxs)("label", {
              className: (0, r.A)(l().switch, s),
              "data-disabled": m,
              "data-direction": f,
              children: [(0, a.jsx)("input", {
                ...p,
                id: n ?? b,
                type: "checkbox",
                className: l().input,
                defaultChecked: u,
                disabled: m,
                onChange: e => {
                  d?.(e), t?.(e)
                }
              }), (0, a.jsx)("span", {
                className: l().track,
                children: (0, a.jsx)("span", {
                  className: l().thumb
                })
              })]
            })
          })]
        })
      }
    }
  }
]);