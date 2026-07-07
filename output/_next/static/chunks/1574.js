"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1574], {
    61574: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => j
      });
      var l = s(95155),
        t = s(12115),
        o = s(56891),
        r = s.n(o),
        i = s(86297),
        d = s(66609),
        n = s(98241),
        c = s.n(n),
        h = s(54834),
        m = s(60141),
        g = s(37897),
        f = s(61778),
        u = s(19376),
        p = s(38256),
        y = s(57776),
        b = s(29483);
      let x = "https://guns.lol",
        j = ({
          data: e
        }) => {
          let a = (0, p.kj)(),
            [s, o] = (0, t.useState)(0),
            [n, j] = (0, t.useState)("i.guns.lol"),
            [v, _] = (0, t.useState)([]),
            [N, S] = (0, t.useState)(!0),
            [C, k] = (0, t.useState)(0),
            [F, A] = (0, t.useState)(1),
            [O, w] = (0, t.useState)(""),
            [R, $] = (0, t.useState)("date_desc"),
            [I, T] = (0, t.useState)([]),
            [E, B] = (0, t.useState)("ROOT"),
            [M, P] = (0, t.useState)(""),
            J = (0, t.useRef)(null),
            [L, z] = (0, t.useState)({}),
            [D, W] = (0, t.useState)(!1),
            [G, K] = (0, t.useState)({
              fileName: "",
              fileId: ""
            }),
            [U, q] = (0, t.useState)({
              folderName: "",
              folderId: ""
            }),
            [H, Q] = (0, t.useState)(!1),
            [V, X] = (0, t.useState)(!1),
            [Y] = (0, b.A)(O, 600),
            [Z, ee] = (0, t.useState)(""),
            ea = (0, t.useMemo)(() => ({
              deleteFile: a("dashboard.imagehost.gallery.modals.delete_file_title"),
              createFolder: a("dashboard.imagehost.gallery.modals.create_folder_title"),
              deleteFolder: a("dashboard.imagehost.gallery.modals.delete_folder_title")
            }), [a]),
            es = (0, t.useMemo)(() => [{
              value: "date_desc",
              label: a("dashboard.imagehost.gallery.sort.newest")
            }, {
              value: "date_asc",
              label: a("dashboard.imagehost.gallery.sort.oldest")
            }, {
              value: "size_desc",
              label: a("dashboard.imagehost.gallery.sort.largest")
            }, {
              value: "size_asc",
              label: a("dashboard.imagehost.gallery.sort.smallest")
            }, {
              value: "name_asc",
              label: a("dashboard.imagehost.gallery.sort.name_asc")
            }, {
              value: "name_desc",
              label: a("dashboard.imagehost.gallery.sort.name_desc")
            }], [a]),
            el = (0, t.useCallback)(e => /\.(mp4|mov|avi|m4v|webm|mkv)$/i.test(e), []),
            et = async () => {
              let e = await fetch("/api/dashboard/imagehost/data?latestDomain=true", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                a = await e.json();
              e.ok ? (o(a.totalFiles || 0), j(a.config?.domain || "i.guns.lol")) : d.oR.error(a.error)
            };
          (0, t.useEffect)(() => {
            et()
          }, []);
          let eo = (0, t.useCallback)(async e => {
              S(!0);
              let a = await fetch(`${x}/api/dashboard/imagehost/files`, {
                  method: "POST",
                  body: JSON.stringify({
                    page: e,
                    sort: R,
                    search: O || void 0,
                    folder: E || void 0
                  })
                }),
                s = await a.json();
              if (!a.ok) return S(!1), d.oR.error(s.error);
              _(s.files || []), k("number" == typeof s.total ? s.total : 0), S(!1)
            }, [E, O, R]),
            er = (0, t.useCallback)(async () => {
              let e = await fetch(`${x}/api/dashboard/imagehost/folders`, {
                  method: "POST"
                }),
                a = await e.json();
              if (!e.ok) return d.oR.error(a.error);
              T(a.folders || [])
            }, []),
            ei = async e => {
              if (V) return;
              X(!0);
              let s = await fetch(`${x}/api/dashboard/imagehost/deleteFile`, {
                  method: "POST",
                  body: JSON.stringify({
                    fileId: e
                  })
                }),
                l = await s.json();
              if (!s.ok) return X(!1), d.oR.error(l.error);
              d.oR.success(a("dashboard.imagehost.gallery.notifications.file_deleted")), eo(F), er(), X(!1), W(!1)
            }, ed = async e => {
              let a = Object.entries(L).filter(([, e]) => e).map(([e]) => e);
              if (!a.length) return;
              let s = await fetch(`${x}/api/dashboard/imagehost/folders/moveFiles`, {
                  method: "POST",
                  body: JSON.stringify({
                    fileIds: a,
                    folderId: e
                  })
                }),
                l = await s.json();
              if (!s.ok) return d.oR.error(l.error);
              d.oR.success(l.message), eo(F), z({}), er()
            }, en = async () => {
              let e = M.trim();
              if (!e) return d.oR.error(a("dashboard.imagehost.gallery.notifications.folder_empty_name"));
              if (H) return;
              Q(!0);
              let s = await fetch(`${x}/api/dashboard/imagehost/folders/create`, {
                  method: "POST",
                  body: JSON.stringify({
                    name: e
                  })
                }),
                l = await s.json();
              if (!s.ok) {
                d.oR.error(l.error), Q(!1);
                return
              }
              P(""), er(), d.oR.success(a("dashboard.imagehost.gallery.notifications.folder_created")), Q(!1), W(!1)
            }, ec = async e => {
              let s = await fetch(`${x}/api/dashboard/imagehost/folders/delete`, {
                  method: "POST",
                  body: JSON.stringify({
                    folderId: e
                  })
                }),
                l = await s.json();
              s.ok ? (z({}), d.oR.success(a("dashboard.imagehost.gallery.notifications.folder_deleted")), er(), E === e && B("ROOT"), W(!1)) : d.oR.error(l.error)
            }, eh = (0, t.useMemo)(() => Math.max(1, Math.ceil((C || 0) / 12)), [C]);
          return (0, t.useEffect)(() => {
            er()
          }, [er]), (0, t.useEffect)(() => {
            eo(F)
          }, [F, Y, E, R, eo]), (0, t.useEffect)(() => {
            A(1)
          }, [E, R]), (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(d.l$, {
              richColors: !0,
              position: "top-center",
              theme: "dark",
              className: c().toasterStyles,
              icons: {
                success: h.A.successToast
              },
              visibleToasts: 2
            }), (0, l.jsx)(y.A, {
              opened: D,
              onClose: () => W(!1),
              size: "createFolder" === Z ? "400px" : "auto",
              title: ea[Z] || "",
              centered: !0,
              children: "deleteFile" === Z ? (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("h3", {
                  className: r().confirmationMessage,
                  children: a("dashboard.imagehost.gallery.modals.delete_file_message", {
                    name: G.fileName
                  })
                }), (0, l.jsxs)("div", {
                  className: r().confirmationContainer,
                  children: [(0, l.jsx)("span", {
                    onClick: () => ei(G.fileId),
                    style: {
                      pointerEvents: V ? "none" : "auto",
                      opacity: V ? .6 : 1
                    },
                    children: V ? i.A.loading : a("dashboard.imagehost.gallery.modals.confirm_yes")
                  }), (0, l.jsx)("span", {
                    onClick: () => W(!1),
                    children: a("dashboard.imagehost.gallery.modals.confirm_no")
                  })]
                })]
              }) : "createFolder" === Z ? (0, l.jsxs)("div", {
                className: r().createFolderContainer,
                children: [(0, l.jsx)(g.A, {
                  maxLength: 35,
                  icon: i.A.folder,
                  id: "createFolderInput",
                  placeholder: a("dashboard.imagehost.gallery.modals.folder_name_placeholder"),
                  featureName: a("dashboard.imagehost.gallery.modals.create_folder_label"),
                  value: M,
                  onChange: e => P(e.target.value)
                }), (0, l.jsxs)("span", {
                  className: r().createFolderButtonModal,
                  onClick: en,
                  children: [H ? i.A.loading : i.A.addSign, " ", !H && a("dashboard.imagehost.gallery.modals.create_folder_button")]
                })]
              }) : "deleteFolder" === Z && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("h3", {
                  className: r().confirmationMessage,
                  children: a("dashboard.imagehost.gallery.modals.delete_folder_message", {
                    name: U.folderName,
                    br: (0, l.jsx)("br", {})
                  })
                }), (0, l.jsxs)("div", {
                  className: r().confirmationContainer,
                  children: [(0, l.jsx)("span", {
                    onClick: () => ec(U.folderId),
                    style: {
                      pointerEvents: V ? "none" : "auto",
                      opacity: V ? .6 : 1
                    },
                    children: V ? i.A.loading : a("dashboard.imagehost.gallery.modals.confirm_yes")
                  }), (0, l.jsx)("span", {
                    onClick: () => W(!1),
                    children: a("dashboard.imagehost.gallery.modals.confirm_no")
                  })]
                })]
              })
            }), (0, l.jsxs)("div", {
              className: r().galleryShellFull,
              children: [(0, l.jsx)("div", {
                className: r().folderSidebar,
                children: (0, l.jsxs)("div", {
                  className: r().folderList,
                  children: [I.map(e => (0, l.jsxs)("div", {
                    className: `${r().folderItem} ${E===e.id?r().activeSoft:""}`,
                    onClick: () => B(e.id),
                    children: [(0, l.jsxs)("div", {
                      className: r().folderItemLeft,
                      children: [i.A.folder, (0, l.jsxs)("div", {
                        className: r().folderText,
                        children: [(0, l.jsx)("span", {
                          className: r().folderName,
                          children: e.name
                        }), (0, l.jsx)("span", {
                          className: r().folderCount,
                          children: "number" == typeof e.count ? (0, l.jsxs)("span", {
                            className: r().folderCount,
                            children: ["(", e.count, ")"]
                          }) : "ROOT" === e.id ? (0, l.jsxs)("span", {
                            className: r().folderCount,
                            children: ["(", s, ")"]
                          }) : ""
                        })]
                      })]
                    }), "ROOT" !== e.id && (0, l.jsx)("span", {
                      className: r().folderDeleteIcon,
                      onClick: a => {
                        a.stopPropagation(), q({
                          folderName: e.name,
                          folderId: e.id
                        }), ee("deleteFolder"), W(!0)
                      },
                      children: i.A.deleteFolder
                    })]
                  }, e.id)), I.length > 0 && (0, l.jsx)(f.A, {
                    content: a("dashboard.imagehost.gallery.folders.create_tooltip"),
                    offset: 0,
                    children: (0, l.jsx)("span", {
                      ref: J,
                      className: r().createFolderButton,
                      onClick: () => {
                        ee("createFolder"), W(!0)
                      },
                      style: {
                        pointerEvents: H ? "none" : "auto",
                        opacity: H ? .6 : 1
                      },
                      children: H ? i.A.loading : i.A.addSign
                    })
                  }), !I.length && (0, l.jsx)("div", {
                    className: r().noFolders,
                    children: a("dashboard.imagehost.gallery.folders.empty")
                  })]
                })
              }), (0, l.jsxs)("div", {
                className: r().filesSection,
                children: [(0, l.jsxs)("div", {
                  className: r().searchContainer,
                  children: [(0, l.jsxs)("div", {
                    className: r().searchInputWrapper,
                    children: [(0, l.jsxs)("div", {
                      className: r().searchInputContainer,
                      children: [(0, l.jsx)("input", {
                        type: "text",
                        className: r().searchInput,
                        style: {
                          paddingRight: "" !== O ? "40px" : "15px"
                        },
                        value: O,
                        maxLength: 40,
                        onKeyPress: e => {
                          "Enter" === e.key && (A(1), eo(1))
                        },
                        onChange: e => w(e.target.value),
                        placeholder: a("dashboard.imagehost.gallery.search.placeholder")
                      }), "" !== O && (0, l.jsx)("span", {
                        className: r().removeSearchButton,
                        onClick: () => {
                          w(""), A(1), eo(1)
                        },
                        children: i.A.removeSearch
                      })]
                    }), (0, l.jsx)("span", {
                      className: r().searchButton,
                      children: i.A.search
                    })]
                  }), (0, l.jsxs)("div", {
                    className: r().fileControls,
                    children: [(0, l.jsx)(m.A, {
                      id: "moveFolderSelect",
                      icon: i.A.folder,
                      placeholder: Object.values(L).filter(e => e).length > 0 ? a("dashboard.imagehost.gallery.select.move_with_count", {
                        count: Object.values(L).filter(e => e).length
                      }) : a("dashboard.imagehost.gallery.select.move_placeholder"),
                      value: null,
                      onChangeFunction: e => ed(e),
                      data: I.filter(e => e.id !== E).length > 0 ? I.filter(e => e.id !== E).map(e => ({
                        value: e.id,
                        label: a("dashboard.imagehost.gallery.select.move_to", {
                          name: e.name
                        })
                      })) : [{
                        value: "none",
                        label: a("dashboard.imagehost.gallery.select.none_available"),
                        disabled: !0
                      }],
                      className: r().moveSelect
                    }), (0, l.jsx)(m.A, {
                      id: "sortFilesSelect",
                      icon: i.A.sortBy,
                      placeholder: a("dashboard.imagehost.gallery.select.sort_placeholder"),
                      value: R,
                      onChangeFunction: e => $(e),
                      data: es,
                      className: r().sortSelect
                    })]
                  })]
                }), (0, l.jsxs)("div", {
                  className: r().imageContainer,
                  children: [v.map((e, s) => {
                    let t;
                    return (0, l.jsxs)("div", {
                      className: `${r().imageCard} ${L[e.file_id]?r().imageCardSelected:""}`,
                      children: [(0, l.jsx)("div", {
                        className: r().image,
                        children: (0, l.jsx)("a", {
                          href: `https://${n}/${e.key}`,
                          target: "_blank",
                          children: el(e.url) ? (0, l.jsx)("video", {
                            src: e.url,
                            controls: !0
                          }) : (0, l.jsx)("img", {
                            src: e.url,
                            alt: e.file_name
                          })
                        })
                      }), (0, l.jsxs)("div", {
                        className: r().imageInformation,
                        children: [(0, l.jsxs)("div", {
                          className: r().imageFileName,
                          children: [(0, l.jsx)("h1", {
                            children: e.file_name
                          }), (0, l.jsx)("span", {
                            onClick: () => {
                              let s;
                              !L[s = e.file_id] && Object.values(L).filter(e => e).length >= 50 ? d.oR.error(a("dashboard.imagehost.gallery.notifications.selection_limit")) : z(e => ({
                                ...e,
                                [s]: !e[s]
                              }))
                            },
                            children: L[e.file_id] ? i.A.folderSelected : i.A.moveFile
                          })]
                        }), (0, l.jsx)("h2", {
                          children: new Date(1e3 * e.upload_date).toLocaleString("en-US", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit"
                          })
                        })]
                      }), (0, l.jsxs)("div", {
                        className: r().imageControls,
                        children: [(0, l.jsx)("span", {
                          onClick: () => (e => {
                            try {
                              let s = `https://${n}/${e}`;
                              navigator.clipboard.writeText(s), d.oR.success(a("dashboard.imagehost.gallery.notifications.link_copied"))
                            } catch {
                              d.oR.error(a("dashboard.imagehost.gallery.notifications.invalid_url"))
                            }
                          })(e.key),
                          children: i.A.link
                        }), (0, l.jsx)("span", {
                          onClick: () => {
                            K({
                              fileId: e.file_id,
                              fileName: e.file_name
                            }), ee("deleteFile"), W(!0)
                          },
                          children: i.A.deleteImage
                        }), (0, l.jsx)("span", {
                          children: (t = e.file_size) < 1024 ? `${t}B` : t < 1048576 ? `${(t/1024).toFixed(1)}kB` : t < 0x40000000 ? `${(t/1048576).toFixed(1)}MB` : `${(t/0x40000000).toFixed(1)}GB`
                        })]
                      })]
                    }, s)
                  }), N && (0, l.jsx)("h1", {
                    className: r().loadingDiv,
                    children: i.A.loading
                  }), !N && 0 === v.length && (0, l.jsx)("h1", {
                    className: r().resultsNotFound,
                    children: a("dashboard.imagehost.gallery.files.results_empty")
                  })]
                }), !N && v.length > 0 && eh > 1 && (0, l.jsx)("div", {
                  className: r().paginationWrapper,
                  children: (0, l.jsx)(u.A, {
                    value: F,
                    onChange: A,
                    total: eh
                  })
                })]
              })]
            })]
          })
        }
    }
  }
]);