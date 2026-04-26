"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1574], {
    61574: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => _
      });
      var l = s(95155),
        t = s(12115),
        o = s(56891),
        r = s.n(o),
        i = s(86297),
        d = s(98500),
        n = s.n(d),
        c = s(66609),
        h = s(98241),
        m = s.n(h),
        g = s(54834),
        f = s(60141),
        u = s(37897),
        p = s(61778),
        y = s(19376),
        b = s(96351),
        x = s(57776),
        j = s(29483);
      let v = "https://guns.lol",
        _ = ({
          data: e
        }) => {
          let a = (0, b.kj)(),
            [s, o] = (0, t.useState)(0),
            [d, h] = (0, t.useState)("i.guns.lol"),
            [_, N] = (0, t.useState)([]),
            [S, C] = (0, t.useState)(!0),
            [k, F] = (0, t.useState)(0),
            [A, O] = (0, t.useState)(1),
            [w, R] = (0, t.useState)(""),
            [$, I] = (0, t.useState)("date_desc"),
            [T, E] = (0, t.useState)([]),
            [B, M] = (0, t.useState)("ROOT"),
            [P, J] = (0, t.useState)(""),
            L = (0, t.useRef)(null),
            [z, D] = (0, t.useState)({}),
            [W, G] = (0, t.useState)(!1),
            [K, U] = (0, t.useState)({
              fileName: "",
              fileId: ""
            }),
            [q, H] = (0, t.useState)({
              folderName: "",
              folderId: ""
            }),
            [Q, V] = (0, t.useState)(!1),
            [X, Y] = (0, t.useState)(!1),
            [Z] = (0, j.A)(w, 600),
            [ee, ea] = (0, t.useState)(""),
            es = (0, t.useMemo)(() => ({
              deleteFile: a("dashboard.imagehost.gallery.modals.delete_file_title"),
              createFolder: a("dashboard.imagehost.gallery.modals.create_folder_title"),
              deleteFolder: a("dashboard.imagehost.gallery.modals.delete_folder_title")
            }), [a]),
            el = (0, t.useMemo)(() => [{
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
            et = (0, t.useCallback)(e => /\.(mp4|mov|avi|m4v|webm|mkv)$/i.test(e), []),
            eo = async () => {
              let e = await fetch("/api/dashboard/imagehost/data?latestDomain=true", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                a = await e.json();
              e.ok ? (o(a.totalFiles || 0), h(a.config?.domain || "i.guns.lol")) : c.oR.error(a.error)
            };
          (0, t.useEffect)(() => {
            eo()
          }, []);
          let er = (0, t.useCallback)(async e => {
              C(!0);
              let a = await fetch(`${v}/api/dashboard/imagehost/files`, {
                  method: "POST",
                  body: JSON.stringify({
                    page: e,
                    sort: $,
                    search: w || void 0,
                    folder: B || void 0
                  })
                }),
                s = await a.json();
              if (!a.ok) return C(!1), c.oR.error(s.error);
              N(s.files || []), F("number" == typeof s.total ? s.total : 0), C(!1)
            }, [B, w, $]),
            ei = (0, t.useCallback)(async () => {
              let e = await fetch(`${v}/api/dashboard/imagehost/folders`, {
                  method: "POST"
                }),
                a = await e.json();
              if (!e.ok) return c.oR.error(a.error);
              E(a.folders || [])
            }, []),
            ed = async e => {
              if (X) return;
              Y(!0);
              let s = await fetch(`${v}/api/dashboard/imagehost/deleteFile`, {
                  method: "POST",
                  body: JSON.stringify({
                    fileId: e
                  })
                }),
                l = await s.json();
              if (!s.ok) return Y(!1), c.oR.error(l.error);
              c.oR.success(a("dashboard.imagehost.gallery.notifications.file_deleted")), er(A), ei(), Y(!1), G(!1)
            }, en = async e => {
              let a = Object.entries(z).filter(([, e]) => e).map(([e]) => e);
              if (!a.length) return;
              let s = await fetch(`${v}/api/dashboard/imagehost/folders/moveFiles`, {
                  method: "POST",
                  body: JSON.stringify({
                    fileIds: a,
                    folderId: e
                  })
                }),
                l = await s.json();
              if (!s.ok) return c.oR.error(l.error);
              c.oR.success(l.message), er(A), D({}), ei()
            }, ec = async () => {
              let e = P.trim();
              if (!e) return c.oR.error(a("dashboard.imagehost.gallery.notifications.folder_empty_name"));
              if (Q) return;
              V(!0);
              let s = await fetch(`${v}/api/dashboard/imagehost/folders/create`, {
                  method: "POST",
                  body: JSON.stringify({
                    name: e
                  })
                }),
                l = await s.json();
              if (!s.ok) {
                c.oR.error(l.error), V(!1);
                return
              }
              J(""), ei(), c.oR.success(a("dashboard.imagehost.gallery.notifications.folder_created")), V(!1), G(!1)
            }, eh = async e => {
              let s = await fetch(`${v}/api/dashboard/imagehost/folders/delete`, {
                  method: "POST",
                  body: JSON.stringify({
                    folderId: e
                  })
                }),
                l = await s.json();
              s.ok ? (D({}), c.oR.success(a("dashboard.imagehost.gallery.notifications.folder_deleted")), ei(), B === e && M("ROOT"), G(!1)) : c.oR.error(l.error)
            }, em = (0, t.useMemo)(() => Math.max(1, Math.ceil((k || 0) / 12)), [k]);
          return (0, t.useEffect)(() => {
            ei()
          }, [ei]), (0, t.useEffect)(() => {
            er(A)
          }, [A, Z, B, $, er]), (0, t.useEffect)(() => {
            O(1)
          }, [B, $]), (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(c.l$, {
              richColors: !0,
              position: "top-center",
              theme: "dark",
              className: m().toasterStyles,
              icons: {
                success: g.A.successToast
              },
              visibleToasts: 2
            }), (0, l.jsx)(x.A, {
              opened: W,
              onClose: () => G(!1),
              size: "createFolder" === ee ? "400px" : "auto",
              title: es[ee] || "",
              centered: !0,
              children: "deleteFile" === ee ? (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("h3", {
                  className: r().confirmationMessage,
                  children: a("dashboard.imagehost.gallery.modals.delete_file_message", {
                    name: K.fileName
                  })
                }), (0, l.jsxs)("div", {
                  className: r().confirmationContainer,
                  children: [(0, l.jsx)("span", {
                    onClick: () => ed(K.fileId),
                    style: {
                      pointerEvents: X ? "none" : "auto",
                      opacity: X ? .6 : 1
                    },
                    children: X ? i.A.loading : a("dashboard.imagehost.gallery.modals.confirm_yes")
                  }), (0, l.jsx)("span", {
                    onClick: () => G(!1),
                    children: a("dashboard.imagehost.gallery.modals.confirm_no")
                  })]
                })]
              }) : "createFolder" === ee ? (0, l.jsxs)("div", {
                className: r().createFolderContainer,
                children: [(0, l.jsx)(u.A, {
                  maxLength: 35,
                  icon: i.A.folder,
                  id: "createFolderInput",
                  placeholder: a("dashboard.imagehost.gallery.modals.folder_name_placeholder"),
                  featureName: a("dashboard.imagehost.gallery.modals.create_folder_label"),
                  value: P,
                  onChange: e => J(e.target.value)
                }), (0, l.jsxs)("span", {
                  className: r().createFolderButtonModal,
                  onClick: ec,
                  children: [Q ? i.A.loading : i.A.addSign, " ", !Q && a("dashboard.imagehost.gallery.modals.create_folder_button")]
                })]
              }) : "deleteFolder" === ee && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("h3", {
                  className: r().confirmationMessage,
                  children: a("dashboard.imagehost.gallery.modals.delete_folder_message", {
                    name: q.folderName,
                    br: (0, l.jsx)("br", {})
                  })
                }), (0, l.jsxs)("div", {
                  className: r().confirmationContainer,
                  children: [(0, l.jsx)("span", {
                    onClick: () => eh(q.folderId),
                    style: {
                      pointerEvents: X ? "none" : "auto",
                      opacity: X ? .6 : 1
                    },
                    children: X ? i.A.loading : a("dashboard.imagehost.gallery.modals.confirm_yes")
                  }), (0, l.jsx)("span", {
                    onClick: () => G(!1),
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
                  children: [T.map(e => (0, l.jsxs)("div", {
                    className: `${r().folderItem} ${B===e.id?r().activeSoft:""}`,
                    onClick: () => M(e.id),
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
                        a.stopPropagation(), H({
                          folderName: e.name,
                          folderId: e.id
                        }), ea("deleteFolder"), G(!0)
                      },
                      children: i.A.deleteFolder
                    })]
                  }, e.id)), T.length > 0 && (0, l.jsx)(p.A, {
                    content: a("dashboard.imagehost.gallery.folders.create_tooltip"),
                    offset: 0,
                    children: (0, l.jsx)("span", {
                      ref: L,
                      className: r().createFolderButton,
                      onClick: () => {
                        ea("createFolder"), G(!0)
                      },
                      style: {
                        pointerEvents: Q ? "none" : "auto",
                        opacity: Q ? .6 : 1
                      },
                      children: Q ? i.A.loading : i.A.addSign
                    })
                  }), !T.length && (0, l.jsx)("div", {
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
                          paddingRight: "" !== w ? "40px" : "15px"
                        },
                        value: w,
                        maxLength: 40,
                        onKeyPress: e => {
                          "Enter" === e.key && (O(1), er(1))
                        },
                        onChange: e => R(e.target.value),
                        placeholder: a("dashboard.imagehost.gallery.search.placeholder")
                      }), "" !== w && (0, l.jsx)("span", {
                        className: r().removeSearchButton,
                        onClick: () => {
                          R(""), O(1), er(1)
                        },
                        children: i.A.removeSearch
                      })]
                    }), (0, l.jsx)("span", {
                      className: r().searchButton,
                      children: i.A.search
                    })]
                  }), (0, l.jsxs)("div", {
                    className: r().fileControls,
                    children: [(0, l.jsx)(f.A, {
                      id: "moveFolderSelect",
                      icon: i.A.folder,
                      placeholder: Object.values(z).filter(e => e).length > 0 ? a("dashboard.imagehost.gallery.select.move_with_count", {
                        count: Object.values(z).filter(e => e).length
                      }) : a("dashboard.imagehost.gallery.select.move_placeholder"),
                      value: null,
                      onChangeFunction: e => en(e),
                      data: T.filter(e => e.id !== B).length > 0 ? T.filter(e => e.id !== B).map(e => ({
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
                    }), (0, l.jsx)(f.A, {
                      id: "sortFilesSelect",
                      icon: i.A.sortBy,
                      placeholder: a("dashboard.imagehost.gallery.select.sort_placeholder"),
                      value: $,
                      onChangeFunction: e => I(e),
                      data: el,
                      className: r().sortSelect
                    })]
                  })]
                }), (0, l.jsxs)("div", {
                  className: r().imageContainer,
                  children: [_.map((e, s) => {
                    let t;
                    return (0, l.jsxs)("div", {
                      className: `${r().imageCard} ${z[e.file_id]?r().imageCardSelected:""}`,
                      children: [(0, l.jsx)("div", {
                        className: r().image,
                        children: (0, l.jsx)(n(), {
                          href: `https://${d}/${e.key}`,
                          target: "_blank",
                          children: et(e.url) ? (0, l.jsx)("video", {
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
                              !z[s = e.file_id] && Object.values(z).filter(e => e).length >= 50 ? c.oR.error(a("dashboard.imagehost.gallery.notifications.selection_limit")) : D(e => ({
                                ...e,
                                [s]: !e[s]
                              }))
                            },
                            children: z[e.file_id] ? i.A.folderSelected : i.A.moveFile
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
                              let s = `https://${d}/${e}`;
                              navigator.clipboard.writeText(s), c.oR.success(a("dashboard.imagehost.gallery.notifications.link_copied"))
                            } catch {
                              c.oR.error(a("dashboard.imagehost.gallery.notifications.invalid_url"))
                            }
                          })(e.key),
                          children: i.A.link
                        }), (0, l.jsx)("span", {
                          onClick: () => {
                            U({
                              fileId: e.file_id,
                              fileName: e.file_name
                            }), ea("deleteFile"), G(!0)
                          },
                          children: i.A.deleteImage
                        }), (0, l.jsx)("span", {
                          children: (t = e.file_size) < 1024 ? `${t}B` : t < 1048576 ? `${(t/1024).toFixed(1)}kB` : t < 0x40000000 ? `${(t/1048576).toFixed(1)}MB` : `${(t/0x40000000).toFixed(1)}GB`
                        })]
                      })]
                    }, s)
                  }), S && (0, l.jsx)("h1", {
                    className: r().loadingDiv,
                    children: i.A.loading
                  }), !S && 0 === _.length && (0, l.jsx)("h1", {
                    className: r().resultsNotFound,
                    children: a("dashboard.imagehost.gallery.files.results_empty")
                  })]
                }), !S && _.length > 0 && em > 1 && (0, l.jsx)("div", {
                  className: r().paginationWrapper,
                  children: (0, l.jsx)(y.A, {
                    value: A,
                    onChange: O,
                    total: em
                  })
                })]
              })]
            })]
          })
        }
    }
  }
]);