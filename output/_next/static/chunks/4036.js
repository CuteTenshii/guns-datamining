(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4036], {
    4036: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => w
      });
      var s = t(95155),
        d = t(12115),
        i = t(39449),
        n = t(60884),
        o = t(56891),
        r = t.n(o),
        l = t(86297),
        c = t(98241),
        b = t.n(c),
        h = t(54834),
        f = t(66609),
        _ = t(97478),
        m = t(81469),
        u = t(81576),
        p = t(41063),
        g = t.n(p),
        N = t(30184),
        S = t(37897),
        U = t(58295),
        G = t(86891);

      function x({
        embedConfig: e,
        domain: a,
        username: t,
        totalUploads: i
      }) {
        let n = (0, G.kj)(),
          o = (0, G.useLang)(),
          [r, c] = (0, d.useState)({
            title: e.title,
            author: e.author,
            authorUrl: e.author_url,
            description: e.description,
            color: e.color
          }),
          [b, h] = (0, d.useState)(e.color),
          [_, u] = (0, d.useState)(e.timestamp),
          p = (0, d.useMemo)(() => n("dashboard.imagehost.settings.embed.editor.examples.file_name"), [n]),
          x = (0, d.useMemo)(() => n("dashboard.imagehost.settings.embed.editor.examples.file_size"), [n]),
          v = (0, d.useMemo)(() => n("dashboard.imagehost.settings.embed.editor.preview.username"), [n]),
          j = (0, d.useMemo)(() => n("dashboard.imagehost.settings.embed.editor.preview.timestamp"), [n]),
          C = (0, d.useCallback)(e => {
            let a = new Date(Date.now()).toLocaleString(o || "en", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: !1
            });
            return e.replace(/{file_name}/g, p).replace(/{file_size}/g, x).replace(/{username}/g, t).replace(/{upload_date}/g, a).replace(/{total_uploads}/g, i.toString())
          }, [o, p, x, t, i]),
          y = e => {
            let {
              name: a,
              value: t
            } = e.target;
            c({
              ...r,
              [a]: t
            })
          },
          w = {
            borderColor: r.color
          },
          k = async e => {
            let a = JSON.stringify({
                title: r.title,
                author: r.author,
                author_url: r.authorUrl,
                description: r.description,
                timestamp: _,
                color: b
              }),
              t = await fetch("https://guns.lol/api/dashboard/imagehost/embed", {
                method: "POST",
                body: a
              }),
              s = await t.json();
            t.ok ? f.oR.success(n("dashboard.imagehost.settings.embed.editor.messages.save_success")) : f.oR.error(n("dashboard.imagehost.settings.embed.editor.messages.save_failed", {
              error: s.error || ""
            }))
          };
        return (0, s.jsxs)("div", {
          className: g().embedEditor,
          children: [(0, s.jsxs)("div", {
            className: g().editor,
            children: [(0, s.jsx)("div", {
              className: g().embedInput,
              children: (0, s.jsx)(S.A, {
                name: "title",
                featureName: n("dashboard.imagehost.settings.embed.editor.fields.title"),
                value: r.title,
                onChange: y,
                placeholder: n("dashboard.imagehost.settings.embed.editor.fields.title"),
                icon: l.A.embedTitle
              })
            }), (0, s.jsx)("div", {
              className: g().embedInput,
              children: (0, s.jsx)(S.A, {
                name: "author",
                featureName: n("dashboard.imagehost.settings.embed.editor.fields.author"),
                value: r.author,
                onChange: y,
                placeholder: n("dashboard.imagehost.settings.embed.editor.fields.author"),
                icon: l.A.embedAuthor
              })
            }), (0, s.jsx)("div", {
              className: g().embedInput,
              children: (0, s.jsx)(S.A, {
                name: "authorUrl",
                featureName: n("dashboard.imagehost.settings.embed.editor.fields.author_url"),
                value: r.authorUrl,
                onChange: y,
                placeholder: n("dashboard.imagehost.settings.embed.editor.fields.author_url"),
                icon: l.A.embedAuthorUrl
              })
            }), (0, s.jsx)("div", {
              className: g().embedInput,
              children: (0, s.jsx)(U.A, {
                rows: 3,
                name: "description",
                featureName: n("dashboard.imagehost.settings.embed.editor.fields.description"),
                value: r.description,
                onChange: y,
                placeholder: n("dashboard.imagehost.settings.embed.editor.fields.description")
              })
            }), (0, s.jsx)("div", {
              className: g().embedInput,
              children: (0, s.jsx)(m.A, {
                featureName: n("dashboard.imagehost.settings.embed.editor.fields.timestamp"),
                onChangeFunction: e => {
                  u(e.target.checked)
                },
                defaultChecked: _
              })
            }), (0, s.jsx)("div", {
              className: g().embedInput,
              children: (0, s.jsx)(N.A, {
                featureName: n("dashboard.imagehost.settings.embed.editor.fields.color"),
                value: b,
                onChangeFunction: h
              })
            }), (0, s.jsx)("div", {
              className: g().saveEmbedButtonContainer,
              children: (0, s.jsx)("span", {
                onClick: k,
                children: n("dashboard.imagehost.settings.embed.editor.save_button")
              })
            })]
          }), (0, s.jsxs)("div", {
            className: g().wrapper,
            children: [(0, s.jsxs)("div", {
              className: g().messageInfo,
              children: [(0, s.jsx)("img", {
                className: g().avatar,
                src: "https://cdn.discordapp.com/embed/avatars/0.png",
                alt: "User Avatar"
              }), (0, s.jsxs)("div", {
                className: g().userInfo,
                children: [(0, s.jsxs)("div", {
                  children: [(0, s.jsx)("span", {
                    className: g().username,
                    children: v
                  }), (0, s.jsx)("span", {
                    className: g().timestamp,
                    children: j
                  })]
                }), (0, s.jsx)("span", {
                  className: g().link,
                  children: n("dashboard.imagehost.settings.embed.editor.preview.link", {
                    domain: a,
                    filename: p
                  })
                })]
              })]
            }), (0, s.jsx)("div", {
              className: g().preview,
              style: {
                borderLeft: `3px solid ${b}`
              },
              children: (0, s.jsxs)("div", {
                className: g().discordEmbed,
                style: w,
                children: [(0, s.jsx)("div", {
                  className: g().embedAuthor,
                  children: "" !== r.authorUrl ? (0, s.jsx)("h2", {
                    children: C(r.author)
                  }) : (0, s.jsx)("h1", {
                    children: C(r.author)
                  })
                }), (0, s.jsx)("div", {
                  className: g().embedTitle,
                  children: (0, s.jsx)("h1", {
                    children: C(r.title)
                  })
                }), (0, s.jsx)("div", {
                  className: g().embedDescription,
                  children: C(r.description)
                }), (0, s.jsx)("div", {
                  className: g().embedImage,
                  children: (0, s.jsx)("img", {
                    src: "https://assets.guns.lol/guns_logo_no_background_cropped.png",
                    alt: "Logo"
                  })
                }), _ && (0, s.jsx)("div", {
                  className: g().embedTimestamp,
                  children: (0, s.jsx)("h1", {
                    children: j
                  })
                })]
              })
            })]
          })]
        })
      }
      var v = t(13782),
        j = t(7109);
      let C = "https://guns.lol",
        y = e => C ? `${C}${e}` : e,
        w = ({
          data: e
        }) => {
          let a = (0, G.kj)(),
            t = a("dashboard.imagehost.settings.delete_all.confirmation_phrase"),
            [o, c] = (0, d.useState)(!1),
            [p, g] = (0, d.useState)(""),
            [N, U] = (0, d.useState)(!1),
            [C, w] = (0, d.useState)(!1),
            [k, A] = (0, d.useState)(!1),
            [L, B] = (0, d.useState)(""),
            [E, T] = (0, d.useState)(!1),
            [I, R] = (0, d.useState)("i.guns.lol"),
            [M, F] = (0, d.useState)({
              title: "",
              author: "",
              author_url: "",
              description: "",
              color: "#2b2d31",
              timestamp: !0
            }),
            [W, P] = (0, d.useState)(!1),
            [D, $] = (0, d.useState)(!1),
            [K, O] = (0, d.useState)(""),
            [H, z] = (0, d.useState)(""),
            [J, V] = (0, d.useState)(""),
            [q, Q] = (0, d.useState)(!1),
            [X, Y] = (0, d.useState)(null),
            [Z, ee] = (0, d.useState)(!1),
            ea = a("dashboard.imagehost.settings.save_button"),
            [et, es] = (0, d.useState)(ea),
            [ed, ei] = (0, d.useState)(0),
            [en, eo] = (0, d.useState)(0),
            [er, el] = (0, d.useState)(null),
            ec = !!e.mfa,
            eb = !!e.has_password,
            eh = (0, d.useMemo)(() => L ? E ? L : `${L.slice(0,5)}************` : a("dashboard.imagehost.settings.upload_key.loading"), [L, E, a]),
            ef = (0, d.useCallback)(async e => {
              if (e) try {
                await navigator.clipboard.writeText(e), f.oR.success(a("dashboard.imagehost.settings.copy_success"))
              } catch (e) {
                f.oR.error(a("dashboard.imagehost.settings.copy_failed"))
              }
            }, [a]),
            e_ = (0, d.useCallback)(async (e = !0) => {
              let a = await fetch("/api/dashboard/imagehost/data?latestConfig=true", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                t = await a.json();
              if (a.ok) {
                let a = t.config || {},
                  s = a.embed || {},
                  d = a.domain || "i.guns.lol",
                  i = {
                    filenameLength: "number" == typeof a.filename_length ? a.filename_length : 7,
                    anonymousUploads: !!a.anonymous,
                    hideExtension: !!a.hide_extension,
                    showEmbed: !!a.show_embed
                  };
                ei(t.totalUploads || 0), eo(t.totalFiles || 0), el(t.deletionJob || null), g(i.filenameLength), U(i.anonymousUploads), w(i.hideExtension), A(i.showEmbed), B(a.secret_key || ""), R(d), F({
                  title: s.title || "",
                  author: s.author || "",
                  author_url: s.author_url || "",
                  description: s.description || "",
                  color: s.color || "#2b2d31",
                  timestamp: "boolean" != typeof s.timestamp || s.timestamp
                }), Y(i), ee(!1), e && es(ea)
              } else f.oR.error(t.error)
            }, [ea]);
          (0, d.useEffect)(() => {
            es(ea)
          }, [ea]), (0, d.useEffect)(() => {
            e_()
          }, [e_]), (0, d.useEffect)(() => {
            if (!er) return;
            let e = !1,
              t = async () => {
                try {
                  let t = await fetch(y("/api/dashboard/imagehost/deleteAll/status"), {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json"
                      }
                    }),
                    s = await t.json();
                  if (!t.ok || e) return;
                  if (!s.deletionJob) {
                    el(null), eo(0), f.oR.success(a("dashboard.imagehost.settings.delete_all.completed"));
                    return
                  }
                  el(s.deletionJob)
                } catch {}
              }, s = window.setInterval(t, 2e3);
            return () => {
              e = !0, window.clearInterval(s)
            }
          }, [er, a]), (0, d.useEffect)(() => {
            if (!X) return void ee(!1);
            let e = !1;
            "number" != typeof p || Number.isNaN(p) ? e = !0 : p !== X.filenameLength && (e = !0), (N !== X.anonymousUploads || C !== X.hideExtension || k !== X.showEmbed) && (e = !0), ee(e)
          }, [p, N, C, k, X]);
          let em = (0, d.useCallback)(() => {
              X && (g(X.filenameLength), U(X.anonymousUploads), w(X.hideExtension), A(X.showEmbed), ee(!1), es(ea))
            }, [X, ea]),
            eu = (0, d.useMemo)(() => "number" != typeof p || Number.isNaN(p) ? null : {
              filenameLength: p,
              anonymousUploads: N,
              hideExtension: C,
              showEmbed: k
            }, [p, N, C, k]),
            ep = (0, d.useCallback)(async () => {
              if (!eu) return void f.oR.error(a("dashboard.imagehost.settings.errors.invalid_length"));
              if (eu.filenameLength < 5 || eu.filenameLength > 50) return void f.oR.error(a("dashboard.imagehost.settings.errors.length_range"));
              es(a("dashboard.imagehost.settings.save_button_saving"));
              let e = await fetch(y("/api/dashboard/imagehost"), {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    anonymous_uploads: eu.anonymousUploads,
                    filename_length: eu.filenameLength,
                    hide_extension: eu.hideExtension,
                    show_embed: eu.showEmbed
                  })
                }),
                t = await e.json();
              e.ok ? (f.oR.success(a("dashboard.imagehost.settings.save_success")), Y(eu), ee(!1), es(a("dashboard.imagehost.settings.save_button_saved")), setTimeout(() => es(ea), 2e3)) : f.oR.error(t.error), es(ea)
            }, [eu, ea, a]),
            eg = (0, d.useCallback)(async () => {
              c(!0);
              let e = await fetch(y("/api/dashboard/imagehost/regenerate"), {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                t = await e.json();
              e.ok ? (B(t.secretKey || ""), T(!1), f.oR.success(a("dashboard.imagehost.settings.regenerate_success"))) : f.oR.error(t.error), c(!1)
            }, [a]),
            eN = (0, d.useCallback)(() => {
              q || ($(!1), O(""), z(""), V(""))
            }, [q]),
            eS = (0, d.useCallback)(async () => {
              if (!K || J !== t || ec && !H.trim()) return void f.oR.error(a("dashboard.imagehost.settings.delete_all.errors.complete_verification"));
              Q(!0);
              try {
                let e = await fetch(y("/api/dashboard/imagehost/deleteAll"), {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                      password: K,
                      mfaCode: ec ? H.trim() : void 0,
                      confirmation: J
                    })
                  }),
                  t = await e.json();
                if (!e.ok) return void f.oR.error(t.error || a("dashboard.imagehost.settings.delete_all.errors.failed"));
                t.deletionJob ? (el(t.deletionJob), f.oR.success(a("dashboard.imagehost.settings.delete_all.started"))) : (el(null), eo(0), f.oR.success(a("dashboard.imagehost.settings.delete_all.completed"))), $(!1), O(""), z(""), V("")
              } catch {
                f.oR.error(a("dashboard.imagehost.settings.delete_all.errors.failed"))
              } finally {
                Q(!1)
              }
            }, [t, J, H, K, ec, a]);
          return (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(f.l$, {
              richColors: !0,
              position: "top-center",
              theme: "dark",
              className: b().toasterStyles,
              icons: {
                success: h.A.successToast
              },
              visibleToasts: 2
            }), (0, s.jsx)(i.N, {
              children: Z && (0, s.jsx)("div", {
                className: b().unsavedChangesWrapper,
                children: (0, s.jsxs)(n.P.div, {
                  className: b().unsavedChangesBar,
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
                    className: b().compactText,
                    children: a("common.unsaved_changes.compact")
                  }), (0, s.jsxs)("div", {
                    className: b().unsavedChangesButtons,
                    children: [(0, s.jsx)("span", {
                      className: b().resetButton,
                      onClick: em,
                      children: a("common.unsaved_changes.reset")
                    }), (0, s.jsx)("span", {
                      className: b().saveButton,
                      onClick: ep,
                      children: et
                    })]
                  })]
                })
              })
            }), (0, s.jsxs)(v.A, {
              opened: W,
              onClose: () => P(!1),
              title: a("dashboard.imagehost.settings.embed.modal_title"),
              centered: !0,
              size: "650px",
              children: [(0, s.jsxs)(u.Ay, {
                width: "auto",
                position: "top",
                children: [(0, s.jsx)(u.Ay.Target, {
                  children: (0, s.jsxs)("div", {
                    className: r().variableText,
                    children: [l.A.lightBulb, a("dashboard.imagehost.settings.embed.tip", {
                      here: (0, s.jsx)("strong", {
                        style: {
                          color: "#fafafa"
                        },
                        children: a("dashboard.imagehost.settings.embed.tip_here")
                      })
                    })]
                  })
                }), (0, s.jsx)(u.Ay.Dropdown, {
                  children: (0, s.jsxs)("div", {
                    className: r().variableList,
                    children: [(0, s.jsxs)("h1", {
                      children: [(0, s.jsx)("p", {
                        children: "{file_name}"
                      }), " - ", a("dashboard.imagehost.settings.embed.variables.file_name")]
                    }), (0, s.jsxs)("h1", {
                      children: [(0, s.jsx)("p", {
                        children: "{file_size}"
                      }), " - ", a("dashboard.imagehost.settings.embed.variables.file_size")]
                    }), (0, s.jsxs)("h1", {
                      children: [(0, s.jsx)("p", {
                        children: "{upload_date}"
                      }), " - ", a("dashboard.imagehost.settings.embed.variables.upload_date")]
                    }), (0, s.jsxs)("h1", {
                      children: [(0, s.jsx)("p", {
                        children: "{username}"
                      }), " - ", a("dashboard.imagehost.settings.embed.variables.username")]
                    }), (0, s.jsxs)("h1", {
                      children: [(0, s.jsx)("p", {
                        children: "{total_uploads}"
                      }), " - ", a("dashboard.imagehost.settings.embed.variables.total_uploads")]
                    })]
                  })
                })]
              }), (0, s.jsx)(x, {
                embedConfig: M,
                domain: I,
                username: e.username,
                totalUploads: ed
              })]
            }), (0, s.jsx)(v.A, {
              opened: D,
              onClose: eN,
              closeOnOverlayClick: !q,
              withCloseButton: !q,
              title: a("dashboard.imagehost.settings.delete_all.modal_title"),
              centered: !0,
              size: "520px",
              children: (0, s.jsxs)("div", {
                className: r().deleteAllModal,
                children: [(0, s.jsxs)("div", {
                  className: r().deleteAllWarning,
                  children: [j.A.warning, (0, s.jsxs)("div", {
                    children: [(0, s.jsx)("h3", {
                      children: a("dashboard.imagehost.settings.delete_all.warning_title")
                    }), (0, s.jsx)("p", {
                      children: a("dashboard.imagehost.settings.delete_all.warning_body", {
                        count: en.toLocaleString()
                      })
                    })]
                  })]
                }), eb ? (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)(S.A, {
                    featureName: a("dashboard.imagehost.settings.delete_all.password_label"),
                    placeholder: a("dashboard.imagehost.settings.delete_all.password_placeholder"),
                    onChangeFunction: e => O(e.target.value),
                    viewPassword: !0,
                    value: K,
                    icon: j.A.password,
                    autoComplete: "current-password",
                    disabled: q
                  }), ec && (0, s.jsx)(S.A, {
                    featureName: a("dashboard.imagehost.settings.delete_all.mfa_label"),
                    placeholder: a("dashboard.imagehost.settings.delete_all.mfa_placeholder"),
                    onChangeFunction: e => z(e.target.value),
                    value: H,
                    icon: j.A.mfaToken,
                    inputMode: "numeric",
                    autoComplete: "one-time-code",
                    maxLength: 6,
                    disabled: q
                  }), (0, s.jsx)(S.A, {
                    featureName: a("dashboard.imagehost.settings.delete_all.confirmation_label"),
                    placeholder: t,
                    onChangeFunction: e => V(e.target.value),
                    value: J,
                    icon: j.A.warning,
                    autoComplete: "off",
                    disabled: q
                  }), (0, s.jsxs)("button", {
                    type: "button",
                    className: r().deleteAllConfirmButton,
                    onClick: eS,
                    disabled: q || !K || J !== t || ec && !H.trim(),
                    children: [q ? l.A.loading : l.A.wipeFiles, q ? a("dashboard.imagehost.settings.delete_all.deleting") : a("dashboard.imagehost.settings.delete_all.confirm_button")]
                  })]
                }) : (0, s.jsxs)("div", {
                  className: r().deleteAllPasswordNotice,
                  children: [a("dashboard.imagehost.settings.delete_all.password_required"), (0, s.jsx)("a", {
                    href: "/account/settings",
                    children: a("dashboard.imagehost.settings.delete_all.set_password")
                  })]
                })]
              })
            }), (0, s.jsxs)("div", {
              className: r().settingsWrapper,
              children: [(0, s.jsxs)("div", {
                className: r().settingsHeader,
                children: [(0, s.jsxs)("h1", {
                  children: [l.A.configuration, " ", a("dashboard.imagehost.settings.header.title")]
                }), (0, s.jsx)("h3", {
                  children: a("dashboard.imagehost.settings.header.description")
                })]
              }), (0, s.jsxs)("div", {
                className: r().settingsGrid,
                children: [(0, s.jsxs)("div", {
                  className: r().settingsCard,
                  children: [(0, s.jsxs)("div", {
                    className: r().settingsCardTop,
                    children: [(0, s.jsxs)("h2", {
                      children: [l.A.configuration, " ", a("dashboard.imagehost.settings.general.title")]
                    }), (0, s.jsx)("p", {
                      children: a("dashboard.imagehost.settings.general.subtitle")
                    })]
                  }), (0, s.jsx)(_.A, {
                    id: "filename-length",
                    featureName: a("dashboard.imagehost.settings.general.filename_length"),
                    value: p,
                    placeholder: 7,
                    onChangeFunction: e => {
                      "number" == typeof e ? g(e) : "" === e && g("")
                    },
                    min: 6,
                    max: 30,
                    icon: l.A.fileName
                  }), (0, s.jsxs)("div", {
                    className: r().configureEmbedWrapper,
                    children: [(0, s.jsx)("h1", {
                      children: a("dashboard.imagehost.settings.embed.section_title")
                    }), (0, s.jsxs)("span", {
                      className: r().configureEmbed,
                      onClick: () => P(!0),
                      children: [l.A.openEditor, " ", a("dashboard.imagehost.settings.embed.configure_button")]
                    })]
                  }), (0, s.jsxs)("div", {
                    className: r().switchGroup,
                    children: [(0, s.jsx)(m.A, {
                      id: "anonymous-uploads",
                      featureName: a("dashboard.imagehost.settings.general.anonymous_uploads"),
                      onChangeFunction: e => U(e.currentTarget.checked),
                      defaultChecked: N,
                      checked: N
                    }), (0, s.jsx)(m.A, {
                      id: "hide-file-extension",
                      featureName: a("dashboard.imagehost.settings.general.hide_extension"),
                      onChangeFunction: e => w(e.currentTarget.checked),
                      defaultChecked: C,
                      checked: C
                    }), (0, s.jsx)(m.A, {
                      id: "show-discord-embed",
                      featureName: a("dashboard.imagehost.settings.general.show_embed"),
                      onChangeFunction: e => A(e.currentTarget.checked),
                      defaultChecked: k,
                      checked: k
                    })]
                  })]
                }), (0, s.jsxs)("div", {
                  className: r().settingsCard,
                  children: [(0, s.jsxs)("div", {
                    className: r().settingsCardTop,
                    children: [(0, s.jsxs)("h2", {
                      children: [l.A.imagehostDomains, " ", a("dashboard.imagehost.settings.domain.title")]
                    }), (0, s.jsx)("p", {
                      children: a("dashboard.imagehost.settings.domain.subtitle")
                    })]
                  }), (0, s.jsxs)("div", {
                    className: r().domainRow,
                    children: [(0, s.jsxs)("div", {
                      className: r().domainPillContainer,
                      children: [(0, s.jsx)("h1", {
                        children: a("dashboard.imagehost.settings.domain.current_label")
                      }), (0, s.jsxs)("span", {
                        className: r().domainPill,
                        children: [l.A.link, " https://", I]
                      })]
                    }), (0, s.jsxs)("a", {
                      href: "/imagehost/domains",
                      className: r().settingsLinkButton,
                      children: [l.A.link, " ", a("dashboard.imagehost.settings.domain.manage_button")]
                    })]
                  }), (0, s.jsx)("p", {
                    className: r().settingHelp,
                    children: a("dashboard.imagehost.settings.domain.help")
                  })]
                }), (0, s.jsxs)("div", {
                  className: r().settingsCard,
                  children: [(0, s.jsxs)("div", {
                    className: r().settingsCardTop,
                    children: [(0, s.jsxs)("h2", {
                      children: [l.A.uploadKey, " ", a("dashboard.imagehost.settings.upload_key.title")]
                    }), (0, s.jsx)("p", {
                      children: a("dashboard.imagehost.settings.upload_key.subtitle")
                    })]
                  }), (0, s.jsxs)("div", {
                    className: r().setupKeyBlock,
                    children: [(0, s.jsxs)("div", {
                      className: r().setupKeyLabel,
                      children: [l.A.key, " ", a("dashboard.imagehost.settings.upload_key.secret_label")]
                    }), (0, s.jsxs)("div", {
                      className: r().setupKeyRow,
                      children: [(0, s.jsx)("span", {
                        className: r().setupKeyValue,
                        children: eh
                      }), (0, s.jsxs)("div", {
                        className: r().setupKeyActions,
                        children: [(0, s.jsxs)("span", {
                          className: r().uploadKeyButton,
                          onClick: () => T(e => !e),
                          children: [E ? h.A.hidePassword : h.A.password, " ", E ? a("dashboard.imagehost.settings.upload_key.hide") : a("dashboard.imagehost.settings.upload_key.reveal")]
                        }), (0, s.jsxs)("span", {
                          className: r().uploadKeyButton,
                          onClick: () => ef(L),
                          children: [h.A.copy, " ", a("dashboard.imagehost.settings.upload_key.copy")]
                        })]
                      })]
                    }), (0, s.jsxs)("span", {
                      className: r().regenerateButton,
                      onClick: eg,
                      children: [o ? l.A.loading : l.A.regenerateKey, (0, s.jsx)("span", {
                        children: o ? a("dashboard.imagehost.settings.upload_key.generating") : a("dashboard.imagehost.settings.upload_key.regenerate")
                      })]
                    }), (0, s.jsx)("div", {
                      className: r().uploadKeyNote,
                      children: a("dashboard.imagehost.settings.upload_key.note")
                    })]
                  })]
                }), (0, s.jsxs)("div", {
                  className: `${r().settingsCard} ${r().dangerSettingsCard}`,
                  children: [(0, s.jsxs)("div", {
                    className: r().settingsCardTop,
                    children: [(0, s.jsxs)("h2", {
                      children: [l.A.wipeFiles, " ", a("dashboard.imagehost.settings.delete_all.title")]
                    }), (0, s.jsx)("p", {
                      children: a("dashboard.imagehost.settings.delete_all.subtitle")
                    })]
                  }), (0, s.jsxs)("div", {
                    className: r().deleteAllSummary,
                    children: [(0, s.jsx)("span", {
                      children: a(er ? "dashboard.imagehost.settings.delete_all.files_remaining" : "dashboard.imagehost.settings.delete_all.file_count", {
                        count: (er && er.totalFiles > 0 ? Math.max(0, er.totalFiles - er.deletedFiles) : en).toLocaleString()
                      })
                    }), er && (0, s.jsxs)("div", {
                      className: r().deleteAllProgress,
                      children: [(0, s.jsxs)("div", {
                        className: r().deleteAllProgressLabel,
                        children: [(0, s.jsx)("span", {
                          children: "queued" === er.status ? a("dashboard.imagehost.settings.delete_all.status_queued") : a("dashboard.imagehost.settings.delete_all.status_processing")
                        }), (0, s.jsxs)("span", {
                          children: [er.deletedFiles.toLocaleString(), "/", er.totalFiles.toLocaleString()]
                        })]
                      }), (0, s.jsx)("div", {
                        className: r().deleteAllProgressTrack,
                        children: (0, s.jsx)("span", {
                          style: {
                            width: `${er.totalFiles>0?Math.min(100,er.deletedFiles/er.totalFiles*100):0}%`
                          }
                        })
                      })]
                    }), (0, s.jsxs)("button", {
                      type: "button",
                      className: r().deleteAllOpenButton,
                      onClick: () => $(!0),
                      disabled: 0 === en || !!er,
                      children: [er ? l.A.loading : l.A.wipeFiles, er ? a("dashboard.imagehost.settings.delete_all.deleting") : 0 === en ? a("dashboard.imagehost.settings.delete_all.no_files") : a("dashboard.imagehost.settings.delete_all.open_button")]
                    })]
                  })]
                })]
              })]
            })]
          })
        }
    },
    30184: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => u
      });
      var s = t(95155),
        d = t(12115),
        i = t(47650),
        n = t(29722),
        o = t(98241),
        r = t.n(o),
        l = t(65095),
        c = t.n(l);
      let b = "#1c1c1c",
        h = (e, a, t) => Math.min(Math.max(e, a), t),
        f = e => {
          if (!e) return "";
          let a = e.trim(),
            t = a.replace(/^#/, "").replace(/[^0-9a-f]/gi, "").slice(0, 6).toLowerCase();
          return t ? `#${t}` : a.startsWith("#") ? "#" : ""
        },
        _ = e => {
          let a, t, s, d, i, n, o, {
            r,
            g: l,
            b: c
          } = {
            r: (a = parseInt(e.replace("#", ""), 16)) >> 16 & 255,
            g: a >> 8 & 255,
            b: 255 & a
          };
          return n = (i = Math.max(t = r / 255, s = l / 255, d = c / 255)) - Math.min(t, s, d), o = 0, 0 !== n && (o = (i === t ? (s - d) / n % 6 : i === s ? (d - t) / n + 2 : (t - s) / n + 4) * 60) < 0 && (o += 360), {
            h: o,
            s: 0 === i ? 0 : n / i,
            v: i
          }
        },
        m = (0, s.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "19",
          height: "19",
          viewBox: "0 0 24 24",
          children: (0, s.jsx)("path", {
            fill: "currentColor",
            d: "M19.5 3.56a2.26 2.26 0 0 0-3.18 0l-2.05 2.05l-.48-.48a.75.75 0 0 0-1.06 0l-1 1a.75.75 0 0 0 0 1.06l.48.48l-6.8 6.8a2.5 2.5 0 0 0-.66 1.15l-.54 2.06a1 1 0 0 0 1.21 1.21l2.06-.54a2.5 2.5 0 0 0 1.15-.66l6.8-6.8l.48.48a.75.75 0 0 0 1.06 0l1-1a.75.75 0 0 0 0-1.06l-.48-.48l2.05-2.05a2.26 2.26 0 0 0 0-3.18Z"
          })
        });

      function u({
        featureName: e,
        onChangeFunction: a,
        value: t,
        placeholder: o = "#000000",
        icon: l,
        className: u,
        disabled: p,
        style: g,
        ...N
      }) {
        let S = (0, d.useRef)(null),
          U = (0, d.useRef)(null),
          G = (0, d.useRef)(null),
          [x, v] = (0, d.useState)(!1),
          [j, C] = (0, d.useState)(() => _(b)),
          [y, w] = (0, d.useState)(b),
          [k, A] = (0, d.useState)({
            left: 0,
            top: 0,
            width: 220
          }),
          [L, B] = (0, d.useState)(!1),
          E = f("string" == typeof t ? t : ""),
          T = (0, d.useMemo)(() => E ? (e => {
            if (/^#[0-9a-f]{6}$/i.test(e)) return e.toLowerCase();
            if (/^#[0-9a-f]{3}$/i.test(e)) return `#${e.slice(1).split("").map(e=>`${e}${e}`).join("")}`.toLowerCase();
            return null
          })(E) : null, [E]),
          I = T ?? y;
        (0, d.useEffect)(() => {
          T && w(T)
        }, [T]), (0, d.useEffect)(() => {
          C(_(I))
        }, [I]), (0, d.useEffect)(() => {
          B(!0)
        }, []);
        let R = (0, d.useCallback)(() => {
          if (!S.current) return;
          let e = S.current.getBoundingClientRect(),
            a = Math.min(270, e.width),
            t = G.current?.offsetHeight ?? 260,
            s = e.bottom + 10;
          if (s + t > window.innerHeight - 12) {
            let a = e.top - 10 - t;
            a >= 12 && (s = a)
          }
          let d = window.innerWidth - a - 12;
          A({
            left: h(e.left, 12, Math.max(12, d)),
            top: s,
            width: a
          })
        }, []);
        (0, d.useLayoutEffect)(() => {
          if (!x) return;
          let e = () => {
            R()
          };
          return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
            window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0)
          }
        }, [x, R]), (0, d.useEffect)(() => {
          if (!x) return;
          let e = e => {
              let a = e.target,
                t = S.current,
                s = G.current;
              t && t.contains(a) || s && s.contains(a) || v(!1)
            },
            a = e => {
              "Escape" === e.key && v(!1)
            };
          return document.addEventListener("mousedown", e), document.addEventListener("keydown", a), () => {
            document.removeEventListener("mousedown", e), document.removeEventListener("keydown", a)
          }
        }, [x]);
        let M = (0, d.useCallback)(e => {
            C(e);
            let t = (e => {
              let a, {
                r: t,
                g: s,
                b: d
              } = (({
                h: e,
                s: a,
                v: t
              }) => {
                let s = t * a,
                  d = s * (1 - Math.abs(e / 60 % 2 - 1)),
                  i = t - s,
                  n = 0,
                  o = 0,
                  r = 0;
                e < 60 ? (n = s, o = d) : e < 120 ? (n = d, o = s) : e < 180 ? (o = s, r = d) : e < 240 ? (o = d, r = s) : e < 300 ? (n = d, r = s) : (n = s, r = d);
                let l = Math.round((n + i) * 255);
                return {
                  r: l,
                  g: Math.round((o + i) * 255),
                  b: Math.round((r + i) * 255)
                }
              })({
                ...e,
                h: (e.h % 360 + 360) % 360,
                s: h(e.s, 0, 1),
                v: h(e.v, 0, 1)
              });
              return a = e => e.toString(16).padStart(2, "0"), `#${a(t)}${a(s)}${a(d)}`
            })(e);
            w(t), a?.(t)
          }, [a]),
          F = (0, d.useCallback)(e => {
            let t = f(e.target.value);
            a?.(t)
          }, [a]),
          W = (0, d.useCallback)((e, a) => {
            if (!U.current) return;
            let t = U.current.getBoundingClientRect(),
              s = h((e - t.left) / t.width, 0, 1),
              d = h((a - t.top) / t.height, 0, 1);
            M({
              h: j.h,
              s: s,
              v: 1 - d
            })
          }, [j.h, M]),
          P = (0, d.useCallback)(e => {
            if (p) return;
            e.preventDefault();
            let a = e.pointerId;
            W(e.clientX, e.clientY);
            let t = e => {
                e.pointerId === a && W(e.clientX, e.clientY)
              },
              s = e => {
                e.pointerId === a && (document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", s))
              };
            document.addEventListener("pointermove", t), document.addEventListener("pointerup", s)
          }, [p, W]),
          D = (0, d.useCallback)(e => {
            M({
              ...j,
              h: Number(e.target.value)
            })
          }, [j, M]),
          $ = (0, d.useCallback)(() => {
            p || v(e => (e || R(), !0))
          }, [p, R]),
          K = (0, d.useCallback)(() => {
            p || v(e => {
              let a = !e;
              return a && R(), a
            })
          }, [p, R]),
          O = (0, n.A)(r().inputWrapperInput, c().textInput, l && c().textInputWithIcon, u),
          H = "undefined" != typeof document ? document.body : null,
          z = !!(x && L && H),
          J = z ? {
            position: "fixed",
            left: `${k.left}px`,
            top: `${k.top}px`,
            width: `${k.width}px`
          } : void 0,
          V = "string" == typeof e ? e : void 0,
          q = (0, s.jsxs)("div", {
            ref: G,
            className: c().panel,
            style: J,
            "data-vaul-no-drag": !0,
            children: [(0, s.jsxs)("div", {
              ref: U,
              className: c().svArea,
              style: {
                backgroundColor: `hsl(${j.h}, 100%, 50%)`
              },
              onPointerDown: P,
              children: [(0, s.jsx)("div", {
                className: c().svWhiteOverlay
              }), (0, s.jsx)("div", {
                className: c().svBlackOverlay
              }), (0, s.jsx)("div", {
                className: c().svCursor,
                style: {
                  left: `${100*j.s}%`,
                  top: `${(1-j.v)*100}%`
                }
              })]
            }), (0, s.jsx)("div", {
              className: c().hueSliderWrapper,
              children: (0, s.jsx)("input", {
                type: "range",
                min: 0,
                max: 360,
                step: 1,
                value: j.h,
                onChange: D,
                className: c().hueSlider,
                disabled: p
              })
            })]
          });
        return (0, s.jsxs)("div", {
          className: r().inputContainerWrapper,
          "data-dashboard-feature-label": V,
          children: [(0, s.jsx)("h1", {
            className: r().featureName,
            children: e
          }), (0, s.jsxs)("div", {
            className: (0, n.A)(r().inputWrapperDiv, c().wrapper),
            ref: S,
            children: [(0, s.jsx)("button", {
              type: "button",
              className: c().leftSwatchButton,
              onClick: K,
              style: {
                cursor: p ? "not-allowed" : "pointer"
              },
              disabled: p,
              children: (0, s.jsx)("span", {
                className: c().colorSwatch,
                style: {
                  backgroundColor: I
                }
              })
            }), l && (0, s.jsx)("span", {
              className: c().leftIcon,
              children: l
            }), (0, s.jsx)("input", {
              type: "text",
              autoComplete: "off",
              spellCheck: !1,
              inputMode: "text",
              maxLength: 7,
              className: O,
              placeholder: o,
              value: E,
              onChange: F,
              onFocus: $,
              onClick: $,
              disabled: p,
              style: g,
              ...N
            }), (0, s.jsx)("button", {
              type: "button",
              className: c().pickerButton,
              onClick: K,
              disabled: p,
              children: m
            }), x && (z && H ? (0, i.createPortal)(q, H) : q)]
          })]
        })
      }
    },
    39449: (e, a, t) => {
      "use strict";
      t.d(a, {
        N: () => p
      });
      var s = t(95155),
        d = t(12115),
        i = t(39551),
        n = t(28819),
        o = t(15131),
        r = t(24866);
      class l extends d.Component {
        getSnapshotBeforeUpdate(e) {
          let a = this.props.childRef.current;
          if (a && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            e.height = a.offsetHeight || 0, e.width = a.offsetWidth || 0, e.top = a.offsetTop, e.left = a.offsetLeft
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
        isPresent: a
      }) {
        let t = (0, d.useId)(),
          i = (0, d.useRef)(null),
          n = (0, d.useRef)({
            width: 0,
            height: 0,
            top: 0,
            left: 0
          }),
          {
            nonce: o
          } = (0, d.useContext)(r.Q);
        return (0, d.useInsertionEffect)(() => {
          let {
            width: e,
            height: s,
            top: d,
            left: r
          } = n.current;
          if (a || !i.current || !e || !s) return;
          i.current.dataset.motionPopId = t;
          let l = document.createElement("style");
          return o && (l.nonce = o), document.head.appendChild(l), l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${s}px !important;
            top: ${d}px !important;
            left: ${r}px !important;
          }
        `), () => {
            document.head.removeChild(l)
          }
        }, [a]), (0, s.jsx)(l, {
          isPresent: a,
          childRef: i,
          sizeRef: n,
          children: d.cloneElement(e, {
            ref: i
          })
        })
      }
      let b = ({
        children: e,
        initial: a,
        isPresent: t,
        onExitComplete: i,
        custom: r,
        presenceAffectsLayout: l,
        mode: b
      }) => {
        let f = (0, n.M)(h),
          _ = (0, d.useId)(),
          m = (0, d.useCallback)(e => {
            for (let a of (f.set(e, !0), f.values()))
              if (!a) return;
            i && i()
          }, [f, i]),
          u = (0, d.useMemo)(() => ({
            id: _,
            initial: a,
            isPresent: t,
            custom: r,
            onExitComplete: m,
            register: e => (f.set(e, !1), () => f.delete(e))
          }), l ? [Math.random(), m] : [t, m]);
        return (0, d.useMemo)(() => {
          f.forEach((e, a) => f.set(a, !1))
        }, [t]), d.useEffect(() => {
          t || f.size || !i || i()
        }, [t]), "popLayout" === b && (e = (0, s.jsx)(c, {
          isPresent: t,
          children: e
        })), (0, s.jsx)(o.t.Provider, {
          value: u,
          children: e
        })
      };

      function h() {
        return new Map
      }
      var f = t(79196);
      let _ = e => e.key || "";

      function m(e) {
        let a = [];
        return d.Children.forEach(e, e => {
          (0, d.isValidElement)(e) && a.push(e)
        }), a
      }
      var u = t(4524);
      let p = ({
        children: e,
        custom: a,
        initial: t = !0,
        onExitComplete: o,
        presenceAffectsLayout: r = !0,
        mode: l = "sync",
        propagate: c = !1
      }) => {
        let [h, p] = (0, f.xQ)(c), g = (0, d.useMemo)(() => m(e), [e]), N = c && !h ? [] : g.map(_), S = (0, d.useRef)(!0), U = (0, d.useRef)(g), G = (0, n.M)(() => new Map), [x, v] = (0, d.useState)(g), [j, C] = (0, d.useState)(g);
        (0, u.E)(() => {
          S.current = !1, U.current = g;
          for (let e = 0; e < j.length; e++) {
            let a = _(j[e]);
            N.includes(a) ? G.delete(a) : !0 !== G.get(a) && G.set(a, !1)
          }
        }, [j, N.length, N.join("-")]);
        let y = [];
        if (g !== x) {
          let e = [...g];
          for (let a = 0; a < j.length; a++) {
            let t = j[a],
              s = _(t);
            N.includes(s) || (e.splice(a, 0, t), y.push(t))
          }
          "wait" === l && y.length && (e = y), C(m(e)), v(g);
          return
        }
        let {
          forceRender: w
        } = (0, d.useContext)(i.L);
        return (0, s.jsx)(s.Fragment, {
          children: j.map(e => {
            let d = _(e),
              i = (!c || !!h) && (g === j || N.includes(d));
            return (0, s.jsx)(b, {
              isPresent: i,
              initial: (!S.current || !!t) && void 0,
              custom: i ? void 0 : a,
              presenceAffectsLayout: r,
              mode: l,
              onExitComplete: i ? void 0 : () => {
                if (!G.has(d)) return;
                G.set(d, !0);
                let e = !0;
                G.forEach(a => {
                  a || (e = !1)
                }), e && (null == w || w(), C(U.current), c && (null == p || p()), o && o())
              },
              children: e
            }, d)
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
    56891: e => {
      e.exports = {
        imagehostContainer: "GUNS__16-ffbeffeb-25cb95ae-14022343",
        imagehostCards: "GUNS__28-48c01132-c71bc95e-c24b6bfa",
        imagehostCard: "GUNS__29-d52d2531-1642c0e3-4e281de7",
        cardTop: "GUNS__27-c4253c00-060945bd-de7ca3bb",
        cardBottom: "GUNS__fc-2cce561e-125fac0d-c425669b",
        storageMeta: "GUNS__a2-54504517-c5a56822-a9c649e0",
        buyStorageButton: "GUNS__e2-6e7f236b-2fbe3f1d-c9b2c2e8",
        perksActivated: "GUNS__23-84f979f0-6d3e3947-7751edf5",
        perksDisabled: "GUNS__e5-6795e004-1c9b8877-a78c25af",
        dailyUploadsChartWrapper: "GUNS__48-ec69a7d2-7a5f5707-9801c156",
        imagehostCardsWrapper: "GUNS__9c-680b0279-f3b91169-be462484",
        imagehostTitle: "GUNS__c1-66d1db1d-b10c75a0-4478e250",
        imagehostLinksWrapper: "GUNS__85-0b4efc0b-7fe07641-0697d16b",
        imagehostLinksTitle: "GUNS__0c-d794b46e-bc3820c4-90eca180",
        imagehostChartsWrapper: "GUNS__7a-f41b4e6d-cd9d78b1-06b6ba4b",
        imagehostLinks: "GUNS__6e-e7d66b52-a1b6cc54-453529d9",
        fileUploadContainer: "GUNS__5e-8534a2b2-e14f8168-14f00acd",
        imagehostUsageWrapper: "GUNS__ea-34b1d217-950a9873-aac8df96",
        imagehostUsageTitle: "GUNS__40-8f97e4a8-c5ce4d01-e229f344",
        fileUploadBox: "GUNS__9d-48f31064-956b0061-baf9cccf",
        fileUploadTitle: "GUNS__59-9ab4706b-3fdf301c-21c8ee3d",
        imageGalleryContainer: "GUNS__d1-d3bcec01-c0cae11b-bc839ddb",
        searchContainer: "GUNS__83-ed169847-a3694b8a-9d9bb3b1",
        imageContainer: "GUNS__46-c6079ee7-d117f4b7-2e965b6d",
        imageCard: "GUNS__3e-8eb6d584-61922899-2b05afd5",
        imageInformation: "GUNS__c8-fa7feeff-0362e632-c436651b",
        imageControls: "GUNS__8a-d87fc472-8c724161-4919fda6",
        paginationWrapper: "GUNS__38-fbf03b6a-aa089e81-68f6d8df",
        confirmationMessage: "GUNS__13-4afb2781-6ee9e06e-98270375",
        confirmationContainer: "GUNS__d0-652b700c-2922fa99-2efe75bc",
        resultsNotFound: "GUNS__2f-fad8bf04-e6ed2ea7-613060fe",
        galleryShellFull: "GUNS__1d-5cc4a088-0e9fa6ec-6f729ed6",
        folderSidebar: "GUNS__2e-68617b8e-b11ab23f-0c78a438",
        folderAll: "GUNS__d3-7839bb44-07b52241-6d769fe4",
        activeSoft: "GUNS__3b-a03a5973-bf19a751-52dc59f5",
        folderList: "GUNS__0c-40303f0c-4062fab6-262a435d",
        folderItem: "GUNS__2b-d1540424-545c5750-1fae04d2",
        folderItemLeft: "GUNS__45-f1db6661-4397d48b-a437cb53",
        folderName: "GUNS__37-38ca9f07-aec1ee3b-dfb8c39e",
        folderCount: "GUNS__e2-e6c53812-600069ae-8b6db869",
        createFolderButton: "GUNS__50-7c81678e-fd9d96c9-973b681a",
        filesSection: "GUNS__6c-ea04c9ee-9e3388c1-b95d0829",
        searchInput: "GUNS__aa-c9d98c04-58551773-8b5dbfb7",
        searchInputWrapper: "GUNS__33-beac96d9-fbc28b65-06a7ff46",
        searchButton: "GUNS__6a-0aa3330c-66d39113-d529fe69",
        searchInputContainer: "GUNS__d2-6fcdc71f-b96a0e1c-df034e36",
        removeSearchButton: "GUNS__d5-6cfc6d05-88a92d90-7c086120",
        fileControls: "GUNS__6e-7888cafd-b8f0b2e6-cc1405b4",
        noFolders: "GUNS__6b-d55aaf33-48e2d33a-7a325354",
        loadingDiv: "GUNS__cb-e91ba871-85c08542-3fcd45f8",
        createFolderContainer: "GUNS__d3-b7cfbc37-ef0e33bc-a7012860",
        createFolderButtonModal: "GUNS__f3-24d8b089-b6521944-90a3154d",
        folderDeleteIcon: "GUNS__db-f930c680-150cd7a2-d798074b",
        folderText: "GUNS__43-de7a044c-9ae5c465-1bef654b",
        imageFileName: "GUNS__a6-3fbb5f10-ad141746-686b60f9",
        imageCardSelected: "GUNS__6a-b8bb94e2-d99cc95a-e22d25a2",
        dailyUploadsChartHeader: "GUNS__d3-15ae5345-a8ddebc4-a6b6ed6b",
        uploadResultContainer: "GUNS__91-5b221749-54623001-e7c7dd13",
        uploadPreview: "GUNS__df-f7707572-e6e43e5d-7d1dee30",
        uploadFileInfo: "GUNS__c7-aa6aece2-6bea4677-a4edfde0",
        uploadActions: "GUNS__bf-2e13da44-f4cebc4e-20d8a850",
        uploadButton: "GUNS__db-f9288156-f8fc46ed-5e48d618",
        primary: "GUNS__72-1c636269-daf55e55-7cc35c5e",
        domainsHeader: "GUNS__31-aa571824-a7433f23-88ec89d3",
        domainsTitleContainer: "GUNS__82-50ce70d1-6548d248-44012864",
        domainsControls: "GUNS__8a-394b5386-a7ed89fe-fc866ff4",
        domainsBody: "GUNS__f8-0bbdb21a-16e79782-964f2b16",
        addDomainContainer: "GUNS__1b-6c5eeab9-dab79946-adf37072",
        myDomainsContainer: "GUNS__22-44c90848-83646d56-58cfd2ae",
        domainsLeftTitle: "GUNS__9c-cdde4f99-00dcfdc9-6686e619",
        domainsLeftSub: "GUNS__e5-0db77955-29ae44cf-0f780e93",
        domainsFormBlock: "GUNS__4d-0fd2296b-354b0b85-d67bc9bc",
        addDomainButton: "GUNS__55-36b3075d-5aa473f3-832461ee",
        domainsListContainer: "GUNS__ac-6fed741d-fbf46a22-14049b49",
        domainsListHeader: "GUNS__29-084dac0f-1df0a5b4-b8970d47",
        domainsList: "GUNS__26-f596d1cd-5321d491-c7aea1c1",
        domainsLoading: "GUNS__9e-991e0d0a-360b2b63-bda26b93",
        domainsEmpty: "GUNS__92-79528039-fc3577fe-da9179ef",
        dnsModalBody: "GUNS__95-46209808-047e4024-c84a8a54",
        dnsRecordsList: "GUNS__e5-2bd7bcd9-1b4dbc93-1c781928",
        dnsRecordRow: "GUNS__ec-521dc9b0-ad0ec630-cb6747ac",
        dnsRowTop: "GUNS__2b-7df6944b-e12507c6-fd7a20ad",
        dnsType: "GUNS__c7-bc3442ed-67ca4cd1-1a36fbc7",
        dnsInline: "GUNS__5f-b1acc6f9-23a2f776-223fdf33",
        dnsField: "GUNS__dd-c69e27dc-d4df074e-1cc89727",
        dnsLabel: "GUNS__3c-017d73c0-c97e2231-00412af9",
        domainsCopyBtn: "GUNS__19-d4771870-6f87bbaa-9289efe4",
        dnsModalHeader: "GUNS__4d-264a5f52-8626aefe-0de6a2e5",
        dnsHeaderLeft: "GUNS__f9-aac0963c-a4fc016a-bd7084c6",
        dnsTitle: "GUNS__e4-87415beb-ef4ff3d2-6a91f287",
        dnsHostLine: "GUNS__76-4ad607ff-3463ded1-50e3a8bc",
        dnsQuickNote: "GUNS__07-bc4edfb6-1b89095f-ec975a97",
        dnsActionRow: "GUNS__dc-af13ceef-77a484be-eee52db7",
        dnsNotice: "GUNS__d8-3dae1599-44302ba6-e5131611",
        dnsNote: "GUNS__ca-192a42bc-eda5b6b8-df2464f2",
        pendingDomainsAlert: "GUNS__aa-6c892b92-a984e6a0-849f2d8c",
        domainCard: "GUNS__3e-da6154ef-d2ae5eb7-34048656",
        domainCardLeft: "GUNS__ef-7e704f4d-acbd4440-2fcb7ec9",
        domainCardRight: "GUNS__4d-52ddcb15-c417c715-49d13530",
        domainUsage: "GUNS__10-ebce90e9-b41519a9-f5c5a0c6",
        domainStatus: "GUNS__49-38bb50da-1721e385-70e1846e",
        domainName: "GUNS__90-3dc79be8-22b831b9-54f0a45b",
        domainNameList: "GUNS__71-82e6ef3a-0899dde1-ce3a7fe5",
        domainCardTop: "GUNS__3d-9c424178-a2c685c9-49ef5496",
        domainInfo: "GUNS__95-6248da79-7c03056f-163abb3c",
        active: "GUNS__e4-95b8d3ce-60ef7d3d-da11ac11",
        pending: "GUNS__a1-d9553a92-b19b4ed9-7d6a70b5",
        domainDnsSetupButton: "GUNS__db-c9653034-c02dab05-3b75d4cb",
        dnsValue: "GUNS__66-fec2d5fc-ac1e1953-4da71480",
        dnsDescription: "GUNS__f2-9c369d5c-c05f5228-ab3387b5",
        checkDomainButton: "GUNS__2b-bb9a020f-e5dcb37e-83b2bf51",
        dnsValueWrapper: "GUNS__1c-d9e859d8-68d9899d-cdd4ee97",
        domainTags: "GUNS__cc-0755baa1-ebf931f2-7453fbbf",
        domainCardList: "GUNS__6f-91a47d36-5e77d3ee-fe76098e",
        domainCardListLeft: "GUNS__aa-6da3d07d-5911b872-e2f83272",
        applyDomainButton: "GUNS__63-a41b9f87-6969c7d8-fc12a2f1",
        domainCardActions: "GUNS__42-cb06e560-f798675e-428aaccf",
        domainDeleteButton: "GUNS__3f-387a8cfb-90b88637-cbdda1de",
        domainActions: "GUNS__fb-28a5445c-01afcb10-ca33979a",
        deleteDomainButtons: "GUNS__c5-a2d99597-3bc4062f-17875b58",
        confirmDeleteButton: "GUNS__5b-57af99f7-45ef7a92-9c851a8d",
        cancelDeleteButton: "GUNS__94-118e5e2d-f72ffc37-acf0c4ac",
        domainCardHeader: "GUNS__89-db0a5f59-df598991-ab5ec53c",
        domainManagementContainer: "GUNS__b7-ffaa96c2-381556e2-e8ad83aa",
        usageCountBadge: "GUNS__03-a0328023-8f4c2879-a712fec5",
        dnsOnlyCf: "GUNS__5b-ff754ec5-e4292f24-1650fd53",
        applied: "GUNS__76-183b36b8-31239c28-13b4cf23",
        visibilityBadge: "GUNS__56-fd90f8cd-995905ec-b18dfe57",
        domainTagsWrapper: "GUNS__cd-c2ee483d-33c412c2-b66b8954",
        addDomainInfo: "GUNS__75-00eb0d38-eba1f0db-25105797",
        setupWrapper: "GUNS__6a-a133c5ad-116c99be-a5676aa2",
        setupCard: "GUNS__4c-6c3aeeea-8caa425a-b44cfe6d",
        setupDetected: "GUNS__18-9f1bc9e9-857a5f50-4d181497",
        setupTabs: "GUNS__cd-e3bf9272-aba5dd45-b44e724b",
        setupTab: "GUNS__74-cc5a342f-7ebb48ae-b05b7dfc",
        setupTabActive: "GUNS__5a-a42a9619-d74e2dcf-5eff1903",
        setupAutoBadge: "GUNS__8b-bbdbad9f-afb5cde4-03ab93a9",
        setupKeyBlock: "GUNS__cd-b52b6975-7f986448-e01cbe0a",
        setupKeyLabel: "GUNS__57-beb6c4a8-7a32fc5b-c4080ea7",
        setupKeyRow: "GUNS__c0-b8529b1f-06bde11d-d311af54",
        setupKeyValue: "GUNS__f4-5086f632-c2008df9-eb84432a",
        setupKeyActions: "GUNS__dc-bcc04e9c-48fbe083-80f6900e",
        setupSteps: "GUNS__12-29fc9a65-baadd7bc-6769fe5c",
        setupStepsHeader: "GUNS__f1-03489406-feb1b13f-e6780b64",
        setupStepsBody: "GUNS__8b-3e7161aa-842520b3-101758cc",
        setupStepRow: "GUNS__bd-3018228a-1b792e2c-95d58cc5",
        setupStepIndex: "GUNS__f3-6f1bf887-a6c47571-b0550bd7",
        setupStepText: "GUNS__e9-b3e86229-6c8fe1f8-7f675b17",
        setupCodeBox: "GUNS__f9-2e1f47d1-367706ea-a7136db9",
        uploadKeyNote: "GUNS__04-1db65f4a-e35d569a-68a41a83",
        uploadKeyButton: "GUNS__63-f03dfb28-43b07fc2-c621fa9a",
        openDocsButton: "GUNS__a4-7282f1f1-089c1391-2b0a658a",
        setupButtonWrapper: "GUNS__7b-c227547a-40fa0881-3224cb35",
        appleLink: "GUNS__e3-1070239e-44f9bb37-42f91e0d",
        settingsWrapper: "GUNS__62-ac84b2b4-d5f25cd0-2837894b",
        settingsHeader: "GUNS__67-50987d0b-565b7ada-7bd74aaa",
        settingsLoader: "GUNS__9f-39cfa879-433c7eb4-214a87ba",
        settingsGrid: "GUNS__02-f4eb3362-eea3e061-d7fa379a",
        settingsCard: "GUNS__1c-65f3f249-0304192d-de513548",
        settingsCardTop: "GUNS__f8-d1c7cba5-061263fc-1960e239",
        dangerSettingsCard: "GUNS__1f-7355fd72-4b9fe689-9e6b558f",
        deleteAllSummary: "GUNS__ff-917cb290-7662aeac-ce301e9b",
        deleteAllProgress: "GUNS__54-ae607418-cd098ad7-61b3ccc1",
        deleteAllProgressLabel: "GUNS__e6-1071dd07-19742fdd-a5695195",
        deleteAllProgressTrack: "GUNS__cd-d5da291c-78a7454b-4dbe364b",
        deleteAllOpenButton: "GUNS__b1-f730f867-a3f2b932-cf7f5928",
        deleteAllConfirmButton: "GUNS__2d-fb3c1218-02f33cd2-58e499ec",
        deleteAllModal: "GUNS__9b-2fa93789-202d5b6a-b38e882c",
        deleteAllWarning: "GUNS__c5-1e5da590-5399c1fe-db8c8383",
        deleteAllPasswordNotice: "GUNS__5e-f096af63-cc0f6ce5-5fa31e73",
        settingHelp: "GUNS__06-4b392795-fc615631-b38118df",
        switchGroup: "GUNS__19-9a9fc2b2-00992980-fa86d98c",
        domainRow: "GUNS__8d-524da5e5-f0e750ae-7866332c",
        domainPill: "GUNS__9e-9d305cab-52e30e3d-e203cb55",
        settingsLinkButton: "GUNS__41-6367eed2-cd7c123c-c3c5d508",
        regenerateButton: "GUNS__a5-e8e92e64-a1c81f84-3d29cbcd",
        settingsActions: "GUNS__b6-23001478-8e871751-06cc0e8f",
        configureEmbed: "GUNS__55-34a7057d-71170852-97fdcc15",
        configureEmbedWrapper: "GUNS__55-5f773b9d-3a903852-2d815dd4",
        domainPillContainer: "GUNS__0b-3894aeb4-4b400703-a6901089",
        variableList: "GUNS__92-1853df2a-c5323e71-7700de02",
        visibilityButtonContainer: "GUNS__74-67aaba76-f9e36277-5cc108bb",
        domainVisibilityHeader: "GUNS__0b-ba3d6736-ce582cf1-162c5fad",
        domainVisibilityBanner: "GUNS__29-e111fbf5-d960d9ae-5d74027c",
        warningText: "GUNS__92-99da8a31-6efc5f1a-62dc11bf",
        closeErrorModalButton: "GUNS__18-e5b86ebf-a08f9907-c9c8f513",
        errorModalBanner: "GUNS__b5-c7b49bf7-d553156f-fc24a430",
        errorModalBannerText: "GUNS__ec-9528fe7b-b2d59f36-b9624bb0",
        variableText: "GUNS__ed-4480885a-f2516ddf-08c2ce03",
        setupAccordionItem: "GUNS__40-b3bf8c49-f7392e6c-2835f3c7",
        setupAccordionControl: "GUNS__60-f023903c-e3a9ab6b-3c26b796",
        moveSelect: "GUNS__03-e042ce7a-25c4d602-b84f8a63",
        sortSelect: "GUNS__8e-9038e083-084dfb49-5e1d7966"
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
    81469: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => h
      });
      var s = t(95155),
        d = t(29722),
        i = t(12115),
        n = t(98241),
        o = t.n(n),
        r = t(73728),
        l = t.n(r),
        c = t(86891);
      let b = ["ar", "he", "fa", "ur"];

      function h({
        featureName: e,
        onChangeFunction: a,
        className: t,
        id: n,
        onChange: r,
        defaultChecked: h,
        disabled: f,
        ..._
      }) {
        let m = (0, c.useLang)(),
          u = (0, i.useId)(),
          p = b.includes(m) ? "rtl" : "ltr",
          g = "string" == typeof e ? e : void 0;
        return (0, s.jsxs)("div", {
          className: o().inputContainerWrapper,
          "data-dashboard-feature-label": g,
          children: [e && (0, s.jsx)("h1", {
            className: o().featureName,
            children: e
          }), (0, s.jsx)("div", {
            className: o().inputWrapperDiv,
            style: {
              direction: p
            },
            children: (0, s.jsxs)("label", {
              className: (0, d.A)(l().switch, t),
              "data-disabled": f,
              "data-direction": p,
              children: [(0, s.jsx)("input", {
                ..._,
                id: n ?? u,
                type: "checkbox",
                className: l().input,
                defaultChecked: h,
                disabled: f,
                onChange: e => {
                  r?.(e), a?.(e)
                }
              }), (0, s.jsx)("span", {
                className: l().track,
                children: (0, s.jsx)("span", {
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