(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4036], {
    4036: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, {
        default: () => U
      });
      var a = t(95155),
        i = t(12115),
        n = t(98500),
        r = t.n(n),
        d = t(39449),
        o = t(77561),
        l = t(56891),
        c = t.n(l),
        h = t(86297),
        u = t(98241),
        m = t.n(u),
        p = t(54834),
        g = t(66609),
        b = t(97478),
        f = t(81469),
        x = t(81576),
        v = t(41063),
        _ = t.n(v),
        j = t(30184),
        N = t(37897),
        y = t(58295),
        w = t(96351);

      function C({
        embedConfig: e,
        domain: s,
        username: t,
        totalUploads: n
      }) {
        let r = (0, w.kj)(),
          d = (0, w.useLang)(),
          [o, l] = (0, i.useState)({
            title: e.title,
            author: e.author,
            authorUrl: e.author_url,
            description: e.description,
            color: e.color
          }),
          [c, u] = (0, i.useState)(e.color),
          [m, p] = (0, i.useState)(e.timestamp),
          b = (0, i.useMemo)(() => r("dashboard.imagehost.settings.embed.editor.examples.file_name"), [r]),
          x = (0, i.useMemo)(() => r("dashboard.imagehost.settings.embed.editor.examples.file_size"), [r]),
          v = (0, i.useMemo)(() => r("dashboard.imagehost.settings.embed.editor.preview.username"), [r]),
          C = (0, i.useMemo)(() => r("dashboard.imagehost.settings.embed.editor.preview.timestamp"), [r]),
          k = (0, i.useCallback)(e => {
            let s = new Date(Date.now()).toLocaleString(d || "en", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: !1
            });
            return e.replace(/{file_name}/g, b).replace(/{file_size}/g, x).replace(/{username}/g, t).replace(/{upload_date}/g, s).replace(/{total_uploads}/g, n.toString())
          }, [d, b, x, t, n]),
          S = e => {
            let {
              name: s,
              value: t
            } = e.target;
            l({
              ...o,
              [s]: t
            })
          },
          E = {
            borderColor: o.color
          },
          U = async e => {
            let s = JSON.stringify({
                title: o.title,
                author: o.author,
                author_url: o.authorUrl,
                description: o.description,
                timestamp: m,
                color: c
              }),
              t = await fetch("https://guns.lol/api/dashboard/imagehost/embed", {
                method: "POST",
                body: s
              }),
              a = await t.json();
            t.ok ? g.oR.success(r("dashboard.imagehost.settings.embed.editor.messages.save_success")) : g.oR.error(r("dashboard.imagehost.settings.embed.editor.messages.save_failed", {
              error: a.error || ""
            }))
          };
        return (0, a.jsxs)("div", {
          className: _().embedEditor,
          children: [(0, a.jsxs)("div", {
            className: _().editor,
            children: [(0, a.jsx)("div", {
              className: _().embedInput,
              children: (0, a.jsx)(N.A, {
                name: "title",
                featureName: r("dashboard.imagehost.settings.embed.editor.fields.title"),
                value: o.title,
                onChange: S,
                placeholder: r("dashboard.imagehost.settings.embed.editor.fields.title"),
                icon: h.A.embedTitle
              })
            }), (0, a.jsx)("div", {
              className: _().embedInput,
              children: (0, a.jsx)(N.A, {
                name: "author",
                featureName: r("dashboard.imagehost.settings.embed.editor.fields.author"),
                value: o.author,
                onChange: S,
                placeholder: r("dashboard.imagehost.settings.embed.editor.fields.author"),
                icon: h.A.embedAuthor
              })
            }), (0, a.jsx)("div", {
              className: _().embedInput,
              children: (0, a.jsx)(N.A, {
                name: "authorUrl",
                featureName: r("dashboard.imagehost.settings.embed.editor.fields.author_url"),
                value: o.authorUrl,
                onChange: S,
                placeholder: r("dashboard.imagehost.settings.embed.editor.fields.author_url"),
                icon: h.A.embedAuthorUrl
              })
            }), (0, a.jsx)("div", {
              className: _().embedInput,
              children: (0, a.jsx)(y.A, {
                rows: 3,
                name: "description",
                featureName: r("dashboard.imagehost.settings.embed.editor.fields.description"),
                value: o.description,
                onChange: S,
                placeholder: r("dashboard.imagehost.settings.embed.editor.fields.description")
              })
            }), (0, a.jsx)("div", {
              className: _().embedInput,
              children: (0, a.jsx)(f.A, {
                featureName: r("dashboard.imagehost.settings.embed.editor.fields.timestamp"),
                onChangeFunction: e => {
                  p(e.target.checked)
                },
                defaultChecked: m
              })
            }), (0, a.jsx)("div", {
              className: _().embedInput,
              children: (0, a.jsx)(j.A, {
                featureName: r("dashboard.imagehost.settings.embed.editor.fields.color"),
                value: c,
                onChangeFunction: u
              })
            }), (0, a.jsx)("div", {
              className: _().saveEmbedButtonContainer,
              children: (0, a.jsx)("span", {
                onClick: U,
                children: r("dashboard.imagehost.settings.embed.editor.save_button")
              })
            })]
          }), (0, a.jsxs)("div", {
            className: _().wrapper,
            children: [(0, a.jsxs)("div", {
              className: _().messageInfo,
              children: [(0, a.jsx)("img", {
                className: _().avatar,
                src: "https://cdn.discordapp.com/embed/avatars/0.png",
                alt: "User Avatar"
              }), (0, a.jsxs)("div", {
                className: _().userInfo,
                children: [(0, a.jsxs)("div", {
                  children: [(0, a.jsx)("span", {
                    className: _().username,
                    children: v
                  }), (0, a.jsx)("span", {
                    className: _().timestamp,
                    children: C
                  })]
                }), (0, a.jsx)("span", {
                  className: _().link,
                  children: r("dashboard.imagehost.settings.embed.editor.preview.link", {
                    domain: s,
                    filename: b
                  })
                })]
              })]
            }), (0, a.jsx)("div", {
              className: _().preview,
              style: {
                borderLeft: `3px solid ${c}`
              },
              children: (0, a.jsxs)("div", {
                className: _().discordEmbed,
                style: E,
                children: [(0, a.jsx)("div", {
                  className: _().embedAuthor,
                  children: "" !== o.authorUrl ? (0, a.jsx)("h2", {
                    children: k(o.author)
                  }) : (0, a.jsx)("h1", {
                    children: k(o.author)
                  })
                }), (0, a.jsx)("div", {
                  className: _().embedTitle,
                  children: (0, a.jsx)("h1", {
                    children: k(o.title)
                  })
                }), (0, a.jsx)("div", {
                  className: _().embedDescription,
                  children: k(o.description)
                }), (0, a.jsx)("div", {
                  className: _().embedImage,
                  children: (0, a.jsx)("img", {
                    src: "https://assets.guns.lol/guns_logo_no_background_cropped.png",
                    alt: "Logo"
                  })
                }), m && (0, a.jsx)("div", {
                  className: _().embedTimestamp,
                  children: (0, a.jsx)("h1", {
                    children: C
                  })
                })]
              })
            })]
          })]
        })
      }
      var k = t(57776);
      let S = "https://guns.lol",
        E = e => S ? `${S}${e}` : e,
        U = ({
          data: e
        }) => {
          let s = (0, w.kj)(),
            [t, n] = (0, i.useState)(!1),
            [l, u] = (0, i.useState)(""),
            [v, _] = (0, i.useState)(!1),
            [j, N] = (0, i.useState)(!1),
            [y, S] = (0, i.useState)(!1),
            [U, A] = (0, i.useState)(""),
            [G, L] = (0, i.useState)(!1),
            [I, R] = (0, i.useState)("i.guns.lol"),
            [M, T] = (0, i.useState)({
              title: "",
              author: "",
              author_url: "",
              description: "",
              color: "#2b2d31",
              timestamp: !0
            }),
            [$, B] = (0, i.useState)(!1),
            [P, W] = (0, i.useState)(null),
            [D, K] = (0, i.useState)(!1),
            z = s("dashboard.imagehost.settings.save_button"),
            [O, F] = (0, i.useState)(z),
            [H, J] = (0, i.useState)(0),
            Q = (0, i.useMemo)(() => U ? G ? U : `${U.slice(0,5)}************` : s("dashboard.imagehost.settings.upload_key.loading"), [U, G, s]),
            V = (0, i.useCallback)(async e => {
              if (e) try {
                await navigator.clipboard.writeText(e), g.oR.success(s("dashboard.imagehost.settings.copy_success"))
              } catch (e) {
                g.oR.error(s("dashboard.imagehost.settings.copy_failed"))
              }
            }, [s]),
            X = (0, i.useCallback)(async (e = !0) => {
              let s = await fetch("/api/dashboard/imagehost/data?latestConfig=true", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                t = await s.json();
              if (s.ok) {
                let s = t.config || {},
                  a = s.embed || {},
                  i = s.domain || "i.guns.lol",
                  n = {
                    filenameLength: "number" == typeof s.filename_length ? s.filename_length : 7,
                    anonymousUploads: !!s.anonymous,
                    hideExtension: !!s.hide_extension,
                    showEmbed: !!s.show_embed
                  };
                J(t.totalUploads || 0), u(n.filenameLength), _(n.anonymousUploads), N(n.hideExtension), S(n.showEmbed), A(s.secret_key || ""), R(i), T({
                  title: a.title || "",
                  author: a.author || "",
                  author_url: a.author_url || "",
                  description: a.description || "",
                  color: a.color || "#2b2d31",
                  timestamp: "boolean" != typeof a.timestamp || a.timestamp
                }), W(n), K(!1), e && F(z)
              } else g.oR.error(t.error)
            }, [z]);
          (0, i.useEffect)(() => {
            F(z)
          }, [z]), (0, i.useEffect)(() => {
            X()
          }, [X]), (0, i.useEffect)(() => {
            if (!P) return void K(!1);
            let e = !1;
            "number" != typeof l || Number.isNaN(l) ? e = !0 : l !== P.filenameLength && (e = !0), (v !== P.anonymousUploads || j !== P.hideExtension || y !== P.showEmbed) && (e = !0), K(e)
          }, [l, v, j, y, P]);
          let Y = (0, i.useCallback)(() => {
              P && (u(P.filenameLength), _(P.anonymousUploads), N(P.hideExtension), S(P.showEmbed), K(!1), F(z))
            }, [P, z]),
            Z = (0, i.useMemo)(() => "number" != typeof l || Number.isNaN(l) ? null : {
              filenameLength: l,
              anonymousUploads: v,
              hideExtension: j,
              showEmbed: y
            }, [l, v, j, y]),
            q = (0, i.useCallback)(async () => {
              if (!Z) return void g.oR.error(s("dashboard.imagehost.settings.errors.invalid_length"));
              if (Z.filenameLength < 5 || Z.filenameLength > 50) return void g.oR.error(s("dashboard.imagehost.settings.errors.length_range"));
              F(s("dashboard.imagehost.settings.save_button_saving"));
              let e = await fetch(E("/api/dashboard/imagehost"), {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    anonymous_uploads: Z.anonymousUploads,
                    filename_length: Z.filenameLength,
                    hide_extension: Z.hideExtension,
                    show_embed: Z.showEmbed
                  })
                }),
                t = await e.json();
              e.ok ? (g.oR.success(s("dashboard.imagehost.settings.save_success")), W(Z), K(!1), F(s("dashboard.imagehost.settings.save_button_saved")), setTimeout(() => F(z), 2e3)) : g.oR.error(t.error), F(z)
            }, [Z, z, s]),
            ee = (0, i.useCallback)(async () => {
              n(!0);
              let e = await fetch(E("/api/dashboard/imagehost/regenerate"), {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                t = await e.json();
              e.ok ? (A(t.secretKey || ""), L(!1), g.oR.success(s("dashboard.imagehost.settings.regenerate_success"))) : g.oR.error(t.error), n(!1)
            }, [s]);
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
            }), (0, a.jsx)(d.N, {
              children: D && (0, a.jsx)("div", {
                className: m().unsavedChangesWrapper,
                children: (0, a.jsxs)(o.P.div, {
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
                    children: s("common.unsaved_changes.title")
                  }), (0, a.jsx)("h1", {
                    className: m().compactText,
                    children: s("common.unsaved_changes.compact")
                  }), (0, a.jsxs)("div", {
                    className: m().unsavedChangesButtons,
                    children: [(0, a.jsx)("span", {
                      className: m().resetButton,
                      onClick: Y,
                      children: s("common.unsaved_changes.reset")
                    }), (0, a.jsx)("span", {
                      className: m().saveButton,
                      onClick: q,
                      children: O
                    })]
                  })]
                })
              })
            }), (0, a.jsxs)(k.A, {
              opened: $,
              onClose: () => B(!1),
              title: s("dashboard.imagehost.settings.embed.modal_title"),
              centered: !0,
              size: "650px",
              children: [(0, a.jsxs)(x.Ay, {
                width: "auto",
                position: "top",
                children: [(0, a.jsx)(x.Ay.Target, {
                  children: (0, a.jsxs)("div", {
                    className: c().variableText,
                    children: [h.A.lightBulb, s("dashboard.imagehost.settings.embed.tip", {
                      here: (0, a.jsx)("strong", {
                        style: {
                          color: "#fafafa"
                        },
                        children: s("dashboard.imagehost.settings.embed.tip_here")
                      })
                    })]
                  })
                }), (0, a.jsx)(x.Ay.Dropdown, {
                  children: (0, a.jsxs)("div", {
                    className: c().variableList,
                    children: [(0, a.jsxs)("h1", {
                      children: [(0, a.jsx)("p", {
                        children: "{file_name}"
                      }), " - ", s("dashboard.imagehost.settings.embed.variables.file_name")]
                    }), (0, a.jsxs)("h1", {
                      children: [(0, a.jsx)("p", {
                        children: "{file_size}"
                      }), " - ", s("dashboard.imagehost.settings.embed.variables.file_size")]
                    }), (0, a.jsxs)("h1", {
                      children: [(0, a.jsx)("p", {
                        children: "{upload_date}"
                      }), " - ", s("dashboard.imagehost.settings.embed.variables.upload_date")]
                    }), (0, a.jsxs)("h1", {
                      children: [(0, a.jsx)("p", {
                        children: "{username}"
                      }), " - ", s("dashboard.imagehost.settings.embed.variables.username")]
                    }), (0, a.jsxs)("h1", {
                      children: [(0, a.jsx)("p", {
                        children: "{total_uploads}"
                      }), " - ", s("dashboard.imagehost.settings.embed.variables.total_uploads")]
                    })]
                  })
                })]
              }), (0, a.jsx)(C, {
                embedConfig: M,
                domain: I,
                username: e.username,
                totalUploads: H
              })]
            }), (0, a.jsxs)("div", {
              className: c().settingsWrapper,
              children: [(0, a.jsxs)("div", {
                className: c().settingsHeader,
                children: [(0, a.jsxs)("h1", {
                  children: [h.A.configuration, " ", s("dashboard.imagehost.settings.header.title")]
                }), (0, a.jsx)("h3", {
                  children: s("dashboard.imagehost.settings.header.description")
                })]
              }), (0, a.jsxs)("div", {
                className: c().settingsGrid,
                children: [(0, a.jsxs)("div", {
                  className: c().settingsCard,
                  children: [(0, a.jsxs)("div", {
                    className: c().settingsCardTop,
                    children: [(0, a.jsxs)("h2", {
                      children: [h.A.configuration, " ", s("dashboard.imagehost.settings.general.title")]
                    }), (0, a.jsx)("p", {
                      children: s("dashboard.imagehost.settings.general.subtitle")
                    })]
                  }), (0, a.jsx)(b.A, {
                    id: "filename-length",
                    featureName: s("dashboard.imagehost.settings.general.filename_length"),
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
                      children: s("dashboard.imagehost.settings.embed.section_title")
                    }), (0, a.jsxs)("span", {
                      className: c().configureEmbed,
                      onClick: () => B(!0),
                      children: [h.A.openEditor, " ", s("dashboard.imagehost.settings.embed.configure_button")]
                    })]
                  }), (0, a.jsxs)("div", {
                    className: c().switchGroup,
                    children: [(0, a.jsx)(f.A, {
                      id: "anonymous-uploads",
                      featureName: s("dashboard.imagehost.settings.general.anonymous_uploads"),
                      onChangeFunction: e => _(e.currentTarget.checked),
                      defaultChecked: v,
                      checked: v
                    }), (0, a.jsx)(f.A, {
                      id: "hide-file-extension",
                      featureName: s("dashboard.imagehost.settings.general.hide_extension"),
                      onChangeFunction: e => N(e.currentTarget.checked),
                      defaultChecked: j,
                      checked: j
                    }), (0, a.jsx)(f.A, {
                      id: "show-discord-embed",
                      featureName: s("dashboard.imagehost.settings.general.show_embed"),
                      onChangeFunction: e => S(e.currentTarget.checked),
                      defaultChecked: y,
                      checked: y
                    })]
                  })]
                }), (0, a.jsxs)("div", {
                  className: c().settingsCard,
                  children: [(0, a.jsxs)("div", {
                    className: c().settingsCardTop,
                    children: [(0, a.jsxs)("h2", {
                      children: [h.A.imagehostDomains, " ", s("dashboard.imagehost.settings.domain.title")]
                    }), (0, a.jsx)("p", {
                      children: s("dashboard.imagehost.settings.domain.subtitle")
                    })]
                  }), (0, a.jsxs)("div", {
                    className: c().domainRow,
                    children: [(0, a.jsxs)("div", {
                      className: c().domainPillContainer,
                      children: [(0, a.jsx)("h1", {
                        children: s("dashboard.imagehost.settings.domain.current_label")
                      }), (0, a.jsxs)("span", {
                        className: c().domainPill,
                        children: [h.A.link, " https://", I]
                      })]
                    }), (0, a.jsxs)(r(), {
                      href: "/imagehost/domains",
                      className: c().settingsLinkButton,
                      children: [h.A.link, " ", s("dashboard.imagehost.settings.domain.manage_button")]
                    })]
                  }), (0, a.jsx)("p", {
                    className: c().settingHelp,
                    children: s("dashboard.imagehost.settings.domain.help")
                  })]
                }), (0, a.jsxs)("div", {
                  className: c().settingsCard,
                  children: [(0, a.jsxs)("div", {
                    className: c().settingsCardTop,
                    children: [(0, a.jsxs)("h2", {
                      children: [h.A.uploadKey, " ", s("dashboard.imagehost.settings.upload_key.title")]
                    }), (0, a.jsx)("p", {
                      children: s("dashboard.imagehost.settings.upload_key.subtitle")
                    })]
                  }), (0, a.jsxs)("div", {
                    className: c().setupKeyBlock,
                    children: [(0, a.jsxs)("div", {
                      className: c().setupKeyLabel,
                      children: [h.A.key, " ", s("dashboard.imagehost.settings.upload_key.secret_label")]
                    }), (0, a.jsxs)("div", {
                      className: c().setupKeyRow,
                      children: [(0, a.jsx)("span", {
                        className: c().setupKeyValue,
                        children: Q
                      }), (0, a.jsxs)("div", {
                        className: c().setupKeyActions,
                        children: [(0, a.jsxs)("span", {
                          className: c().uploadKeyButton,
                          onClick: () => L(e => !e),
                          children: [G ? p.A.hidePassword : p.A.password, " ", G ? s("dashboard.imagehost.settings.upload_key.hide") : s("dashboard.imagehost.settings.upload_key.reveal")]
                        }), (0, a.jsxs)("span", {
                          className: c().uploadKeyButton,
                          onClick: () => V(U),
                          children: [p.A.copy, " ", s("dashboard.imagehost.settings.upload_key.copy")]
                        })]
                      })]
                    }), (0, a.jsxs)("span", {
                      className: c().regenerateButton,
                      onClick: ee,
                      children: [t ? h.A.loading : h.A.regenerateKey, (0, a.jsx)("span", {
                        children: t ? s("dashboard.imagehost.settings.upload_key.generating") : s("dashboard.imagehost.settings.upload_key.regenerate")
                      })]
                    }), (0, a.jsx)("div", {
                      className: c().uploadKeyNote,
                      children: s("dashboard.imagehost.settings.upload_key.note")
                    })]
                  })]
                })]
              })]
            })]
          })
        }
    },
    30184: (e, s, t) => {
      "use strict";
      t.d(s, {
        A: () => f
      });
      var a = t(95155),
        i = t(12115),
        n = t(47650),
        r = t(29722),
        d = t(98241),
        o = t.n(d),
        l = t(65095),
        c = t.n(l);
      let h = "#1c1c1c",
        u = (e, s, t) => Math.min(Math.max(e, s), t),
        m = e => {
          if (!e) return "";
          let s = e.trim(),
            t = s.replace(/^#/, "").replace(/[^0-9a-f]/gi, "").slice(0, 6).toLowerCase();
          return t ? `#${t}` : s.startsWith("#") ? "#" : ""
        },
        p = e => {
          if (/^#[0-9a-f]{6}$/i.test(e)) return e.toLowerCase();
          if (/^#[0-9a-f]{3}$/i.test(e)) return `#${e.slice(1).split("").map(e=>`${e}${e}`).join("")}`.toLowerCase();
          return null
        },
        g = e => {
          let s, t, a, i, n, r, d, {
            r: o,
            g: l,
            b: c
          } = {
            r: (s = parseInt(e.replace("#", ""), 16)) >> 16 & 255,
            g: s >> 8 & 255,
            b: 255 & s
          };
          return r = (n = Math.max(t = o / 255, a = l / 255, i = c / 255)) - Math.min(t, a, i), d = 0, 0 !== r && (d = (n === t ? (a - i) / r % 6 : n === a ? (i - t) / r + 2 : (t - a) / r + 4) * 60) < 0 && (d += 360), {
            h: d,
            s: 0 === n ? 0 : r / n,
            v: n
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
        onChangeFunction: s,
        value: t,
        placeholder: d = "#000000",
        icon: l,
        className: f,
        disabled: x,
        style: v,
        ..._
      }) {
        let j = (0, i.useRef)(null),
          N = (0, i.useRef)(null),
          y = (0, i.useRef)(null),
          [w, C] = (0, i.useState)(!1),
          [k, S] = (0, i.useState)(() => g(h)),
          [E, U] = (0, i.useState)(h),
          [A, G] = (0, i.useState)(!1),
          [L, I] = (0, i.useState)(!1),
          [R, M] = (0, i.useState)({
            left: 0,
            top: 0,
            width: 220
          }),
          [T, $] = (0, i.useState)(!1),
          B = m("string" == typeof t ? t : ""),
          P = (0, i.useMemo)(() => B ? p(B) : null, [B]),
          W = P ?? E;
        (0, i.useEffect)(() => {
          P && U(P)
        }, [P]), (0, i.useEffect)(() => {
          S(g(W))
        }, [W]), (0, i.useEffect)(() => {
          $(!0)
        }, []);
        let D = (0, i.useCallback)(() => {
          if (!j.current) return;
          let e = j.current.getBoundingClientRect(),
            s = Math.min(270, e.width),
            t = y.current?.offsetHeight ?? 260,
            a = e.bottom + 10;
          if (a + t > window.innerHeight - 12) {
            let s = e.top - 10 - t;
            s >= 12 && (a = s)
          }
          let i = window.innerWidth - s - 12;
          M({
            left: u(e.left, 12, Math.max(12, i)),
            top: a,
            width: s
          })
        }, []);
        (0, i.useLayoutEffect)(() => {
          if (!w) return;
          let e = () => {
            D()
          };
          return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
            window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0)
          }
        }, [w, D]), (0, i.useEffect)(() => {
          if (!w) return;
          let e = e => {
              let s = e.target,
                t = j.current,
                a = y.current;
              t && t.contains(s) || a && a.contains(s) || C(!1)
            },
            s = e => {
              "Escape" === e.key && C(!1)
            };
          return document.addEventListener("mousedown", e), document.addEventListener("keydown", s), () => {
            document.removeEventListener("mousedown", e), document.removeEventListener("keydown", s)
          }
        }, [w]);
        let K = (0, i.useCallback)(e => {
            S(e);
            let t = (e => {
              let s, {
                r: t,
                g: a,
                b: i
              } = (({
                h: e,
                s,
                v: t
              }) => {
                let a = t * s,
                  i = a * (1 - Math.abs(e / 60 % 2 - 1)),
                  n = t - a,
                  r = 0,
                  d = 0,
                  o = 0;
                e < 60 ? (r = a, d = i) : e < 120 ? (r = i, d = a) : e < 180 ? (d = a, o = i) : e < 240 ? (d = i, o = a) : e < 300 ? (r = i, o = a) : (r = a, o = i);
                let l = Math.round((r + n) * 255);
                return {
                  r: l,
                  g: Math.round((d + n) * 255),
                  b: Math.round((o + n) * 255)
                }
              })({
                ...e,
                h: (e.h % 360 + 360) % 360,
                s: u(e.s, 0, 1),
                v: u(e.v, 0, 1)
              });
              return s = e => e.toString(16).padStart(2, "0"), `#${s(t)}${s(a)}${s(i)}`
            })(e);
            U(t), s?.(t)
          }, [s]),
          z = (0, i.useCallback)(e => {
            let t = m(e.target.value);
            s?.(t)
          }, [s]),
          O = (0, i.useCallback)((e, s) => {
            if (!N.current) return;
            let t = N.current.getBoundingClientRect(),
              a = u((e - t.left) / t.width, 0, 1),
              i = u((s - t.top) / t.height, 0, 1);
            K({
              h: k.h,
              s: a,
              v: 1 - i
            })
          }, [k.h, K]),
          F = (0, i.useCallback)(e => {
            if (x) return;
            e.preventDefault();
            let s = e.pointerId;
            O(e.clientX, e.clientY);
            let t = e => {
                e.pointerId === s && O(e.clientX, e.clientY)
              },
              a = e => {
                e.pointerId === s && (document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", a))
              };
            document.addEventListener("pointermove", t), document.addEventListener("pointerup", a)
          }, [x, O]),
          H = (0, i.useCallback)(e => {
            K({
              ...k,
              h: Number(e.target.value)
            })
          }, [k, K]),
          J = (0, i.useCallback)(() => {
            x || C(e => (e || D(), !0))
          }, [x, D]),
          Q = (0, i.useCallback)(() => {
            x || C(e => {
              let s = !e;
              return s && D(), s
            })
          }, [x, D]),
          V = (0, i.useCallback)(async () => {
            if (!x && A && void 0 !== window.EyeDropper && !L) try {
              I(!0);
              let e = new window.EyeDropper,
                s = await e.open(),
                t = p(s.sRGBHex);
              t && K(g(t))
            } catch (e) {} finally {
              I(!1)
            }
          }, [x, L, A, K]);
        (0, i.useEffect)(() => {
          G(void 0 !== window.EyeDropper)
        }, []);
        let X = (0, r.A)(o().inputWrapperInput, c().textInput, l && c().textInputWithIcon, f),
          Y = "undefined" != typeof document ? document.body : null,
          Z = !!(w && T && Y),
          q = Z ? {
            position: "fixed",
            left: `${R.left}px`,
            top: `${R.top}px`,
            width: `${R.width}px`
          } : void 0,
          ee = (0, a.jsxs)("div", {
            ref: y,
            className: c().panel,
            style: q,
            children: [(0, a.jsxs)("div", {
              ref: N,
              className: c().svArea,
              style: {
                backgroundColor: `hsl(${k.h}, 100%, 50%)`
              },
              onPointerDown: F,
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
                onChange: H,
                className: c().hueSlider,
                disabled: x
              })
            })]
          });
        return (0, a.jsxs)("div", {
          className: o().inputContainerWrapper,
          children: [(0, a.jsx)("h1", {
            className: o().featureName,
            children: e
          }), (0, a.jsxs)("div", {
            className: (0, r.A)(o().inputWrapperDiv, c().wrapper),
            ref: j,
            children: [(0, a.jsx)("button", {
              type: "button",
              className: c().leftSwatchButton,
              onClick: Q,
              style: {
                cursor: x ? "not-allowed" : "pointer"
              },
              disabled: x,
              children: (0, a.jsx)("span", {
                className: c().colorSwatch,
                style: {
                  backgroundColor: W
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
              className: X,
              placeholder: d,
              value: B,
              onChange: z,
              onFocus: J,
              onClick: J,
              disabled: x,
              style: v,
              ..._
            }), (0, a.jsx)("button", {
              type: "button",
              className: c().pickerButton,
              onClick: A ? V : Q,
              disabled: x || A && L,
              children: b
            }), w && (Z && Y ? (0, n.createPortal)(ee, Y) : ee)]
          })]
        })
      }
    },
    39449: (e, s, t) => {
      "use strict";
      t.d(s, {
        N: () => f
      });
      var a = t(95155),
        i = t(12115),
        n = t(39551),
        r = t(28819),
        d = t(15131),
        o = t(24866);
      class l extends i.Component {
        getSnapshotBeforeUpdate(e) {
          let s = this.props.childRef.current;
          if (s && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            e.height = s.offsetHeight || 0, e.width = s.offsetWidth || 0, e.top = s.offsetTop, e.left = s.offsetLeft
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
        isPresent: s
      }) {
        let t = (0, i.useId)(),
          n = (0, i.useRef)(null),
          r = (0, i.useRef)({
            width: 0,
            height: 0,
            top: 0,
            left: 0
          }),
          {
            nonce: d
          } = (0, i.useContext)(o.Q);
        return (0, i.useInsertionEffect)(() => {
          let {
            width: e,
            height: a,
            top: i,
            left: o
          } = r.current;
          if (s || !n.current || !e || !a) return;
          n.current.dataset.motionPopId = t;
          let l = document.createElement("style");
          return d && (l.nonce = d), document.head.appendChild(l), l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${a}px !important;
            top: ${i}px !important;
            left: ${o}px !important;
          }
        `), () => {
            document.head.removeChild(l)
          }
        }, [s]), (0, a.jsx)(l, {
          isPresent: s,
          childRef: n,
          sizeRef: r,
          children: i.cloneElement(e, {
            ref: n
          })
        })
      }
      let h = ({
        children: e,
        initial: s,
        isPresent: t,
        onExitComplete: n,
        custom: o,
        presenceAffectsLayout: l,
        mode: h
      }) => {
        let m = (0, r.M)(u),
          p = (0, i.useId)(),
          g = (0, i.useCallback)(e => {
            for (let s of (m.set(e, !0), m.values()))
              if (!s) return;
            n && n()
          }, [m, n]),
          b = (0, i.useMemo)(() => ({
            id: p,
            initial: s,
            isPresent: t,
            custom: o,
            onExitComplete: g,
            register: e => (m.set(e, !1), () => m.delete(e))
          }), l ? [Math.random(), g] : [t, g]);
        return (0, i.useMemo)(() => {
          m.forEach((e, s) => m.set(s, !1))
        }, [t]), i.useEffect(() => {
          t || m.size || !n || n()
        }, [t]), "popLayout" === h && (e = (0, a.jsx)(c, {
          isPresent: t,
          children: e
        })), (0, a.jsx)(d.t.Provider, {
          value: b,
          children: e
        })
      };

      function u() {
        return new Map
      }
      var m = t(79196);
      let p = e => e.key || "";

      function g(e) {
        let s = [];
        return i.Children.forEach(e, e => {
          (0, i.isValidElement)(e) && s.push(e)
        }), s
      }
      var b = t(4524);
      let f = ({
        children: e,
        custom: s,
        initial: t = !0,
        onExitComplete: d,
        presenceAffectsLayout: o = !0,
        mode: l = "sync",
        propagate: c = !1
      }) => {
        let [u, f] = (0, m.xQ)(c), x = (0, i.useMemo)(() => g(e), [e]), v = c && !u ? [] : x.map(p), _ = (0, i.useRef)(!0), j = (0, i.useRef)(x), N = (0, r.M)(() => new Map), [y, w] = (0, i.useState)(x), [C, k] = (0, i.useState)(x);
        (0, b.E)(() => {
          _.current = !1, j.current = x;
          for (let e = 0; e < C.length; e++) {
            let s = p(C[e]);
            v.includes(s) ? N.delete(s) : !0 !== N.get(s) && N.set(s, !1)
          }
        }, [C, v.length, v.join("-")]);
        let S = [];
        if (x !== y) {
          let e = [...x];
          for (let s = 0; s < C.length; s++) {
            let t = C[s],
              a = p(t);
            v.includes(a) || (e.splice(s, 0, t), S.push(t))
          }
          "wait" === l && S.length && (e = S), k(g(e)), w(x);
          return
        }
        let {
          forceRender: E
        } = (0, i.useContext)(n.L);
        return (0, a.jsx)(a.Fragment, {
          children: C.map(e => {
            let i = p(e),
              n = (!c || !!u) && (x === C || v.includes(i));
            return (0, a.jsx)(h, {
              isPresent: n,
              initial: (!_.current || !!t) && void 0,
              custom: n ? void 0 : s,
              presenceAffectsLayout: o,
              mode: l,
              onExitComplete: n ? void 0 : () => {
                if (!N.has(i)) return;
                N.set(i, !0);
                let e = !0;
                N.forEach(s => {
                  s || (e = !1)
                }), e && (null == E || E(), k(j.current), c && (null == f || f()), d && d())
              },
              children: e
            }, i)
          })
        })
      }
    },
    41063: e => {
      e.exports = {
        embedEditor: "GUNS__76-8c872849-b6119087-98c0c69f",
        editor: "GUNS__6a-4f0f94fc-ebe29704-3d07492e",
        preview: "GUNS__75-27cefc19-92f97681-73c90dcf",
        messageAuthor: "GUNS__a9-2a5ee88e-f95b97dc-ebdbef31",
        messageInfo: "GUNS__fb-695c8524-3a622084-d19b1950",
        wrapper: "GUNS__a5-394e11b7-ae2d1514-e4fd7b13",
        avatar: "GUNS__88-ba89e835-289a2af0-84526c03",
        link: "GUNS__ae-78472ac1-455b646f-80ab4289",
        username: "GUNS__a0-48a530d5-bb11aa40-c4b4ca63",
        timestamp: "GUNS__9e-6fae48ac-449ff1df-899e9e87",
        discordEmbed: "GUNS__43-ac22265a-520052c8-e0407332",
        embedTitle: "GUNS__bd-65579014-ef7cd323-97e13e03",
        embedDescription: "GUNS__23-520448c8-b3eb6927-de64d109",
        embedAuthor: "GUNS__72-1221a698-335f036e-26096b3b",
        embedImage: "GUNS__a9-83e101aa-04cfd709-a7d260b1",
        embedInput: "GUNS__ca-c01ce70d-d9d0f27f-d0f8c46d",
        saveEmbedButtonContainer: "GUNS__f7-6a7df2a6-35e83156-de9ef99b",
        embedTimestamp: "GUNS__8d-d1ca48b0-44c40745-e94c8226"
      }
    },
    65095: e => {
      e.exports = {
        wrapper: "GUNS__e1-f8f642a4-f6d47d23-fb654296",
        textInput: "GUNS__ab-a5d3bdab-cc778255-657e2cc4",
        textInputWithIcon: "GUNS__fc-40c58644-d0c31024-70c7140e",
        leftSwatchButton: "GUNS__3a-b829acea-47c748b8-50a13f3f",
        colorSwatch: "GUNS__2e-1339255d-a7d84b7f-0ea67142",
        leftIcon: "GUNS__aa-902256d4-5487d5f8-b9613ef0",
        pickerButton: "GUNS__92-4f4687b2-1e664613-974c4960",
        panel: "GUNS__38-a51c3e41-62cbb5a1-ccccab8b",
        svArea: "GUNS__2c-a7bb8984-7029b34c-14a9174a",
        svWhiteOverlay: "GUNS__b2-febba06e-61337463-5b9fb42c",
        svBlackOverlay: "GUNS__6b-ae93a09c-8aab347b-8e4436a2",
        svCursor: "GUNS__d1-b875ba75-f1517f91-aeffde62",
        hueSliderWrapper: "GUNS__f2-1b8470e4-71cc8038-7031f1f6",
        hueSlider: "GUNS__6c-f4fedfd4-da5b3cbc-6c77e2c2"
      }
    },
    73728: e => {
      e.exports = {
        switch: "GUNS__37-bebc3157-36356f81-31aa98a5",
        input: "GUNS__07-6848431b-ec698247-987f2132",
        track: "GUNS__c1-89bc1537-00272519-3133d28f",
        thumb: "GUNS__13-b5e3f9d4-24f5d8e3-cfe09b0b"
      }
    },
    81469: (e, s, t) => {
      "use strict";
      t.d(s, {
        A: () => u
      });
      var a = t(95155),
        i = t(29722),
        n = t(12115),
        r = t(98241),
        d = t.n(r),
        o = t(73728),
        l = t.n(o),
        c = t(96351);
      let h = ["ar", "he", "fa", "ur"];

      function u({
        featureName: e,
        onChangeFunction: s,
        className: t,
        id: r,
        onChange: o,
        defaultChecked: u,
        disabled: m,
        ...p
      }) {
        let g = (0, c.useLang)(),
          b = (0, n.useId)(),
          f = h.includes(g) ? "rtl" : "ltr";
        return (0, a.jsxs)("div", {
          className: d().inputContainerWrapper,
          children: [e && (0, a.jsx)("h1", {
            className: d().featureName,
            children: e
          }), (0, a.jsx)("div", {
            className: d().inputWrapperDiv,
            style: {
              direction: f
            },
            children: (0, a.jsxs)("label", {
              className: (0, i.A)(l().switch, t),
              "data-disabled": m,
              "data-direction": f,
              children: [(0, a.jsx)("input", {
                ...p,
                id: r ?? b,
                type: "checkbox",
                className: l().input,
                defaultChecked: u,
                disabled: m,
                onChange: e => {
                  o?.(e), s?.(e)
                }
              }), (0, a.jsx)("span", {
                className: l().track,
                "aria-hidden": "true",
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