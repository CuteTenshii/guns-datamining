(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4998], {
    22834: (e, s, a) => {
      "use strict";
      a.d(s, {
        n: () => p
      });
      var t = a(95155),
        n = a(12115),
        o = a(67361),
        r = a.n(o);
      let i = (0, n.createContext)(null),
        d = (0, n.createContext)(null),
        l = (...e) => e.filter(Boolean).join(" "),
        c = () => {
          let e = (0, n.useContext)(i);
          if (!e) throw Error("Accordion components must be used within <Accordion>");
          return e
        },
        h = () => {
          let e = (0, n.useContext)(d);
          if (!e) throw Error("Accordion.Item subcomponents must be used within <Accordion.Item>");
          return e
        },
        u = (e, s) => s ? Array.isArray(e) ? e : "string" == typeof e ? [e] : [] : Array.isArray(e) ? e[0] ?? null : "string" == typeof e ? e : e ?? null,
        p = Object.assign(({
          children: e,
          value: s,
          defaultValue: a,
          multiple: o = !1,
          onChange: d,
          className: c = "",
          ...h
        }) => {
          let p = void 0 !== s,
            m = p ? u(s, o) : null,
            [x, g] = (0, n.useState)(() => u(a, o)),
            b = p ? m : x,
            j = (0, n.useCallback)(e => o ? Array.isArray(b) && b.includes(e) : b === e, [b, o]),
            w = (0, n.useCallback)(e => {
              let s = ((e, s, a) => {
                if (a) {
                  let a = Array.isArray(e) ? e : [];
                  return a.includes(s) ? a.filter(e => e !== s) : [...a, s]
                }
                return e === s ? null : s
              })(b, e, o);
              p || g(s), d?.(s)
            }, [b, p, o, d]),
            f = (0, n.useMemo)(() => ({
              multiple: o,
              currentValue: b,
              toggleItem: w,
              isItemActive: j
            }), [o, b, w, j]);
          return (0, t.jsx)(i.Provider, {
            value: f,
            children: (0, t.jsx)("div", {
              className: l(r().accordion, c),
              ...h,
              children: e
            })
          })
        }, {
          Item: ({
            value: e,
            children: s,
            className: a = "",
            ...o
          }) => {
            let i = c(),
              h = (0, n.useId)(),
              u = (0, n.useRef)(`${h}-control`),
              p = (0, n.useRef)(`${h}-panel`),
              m = i.isItemActive(e),
              x = (0, n.useMemo)(() => ({
                value: e,
                controlIdRef: u,
                panelIdRef: p
              }), [e]);
            return (0, t.jsx)(d.Provider, {
              value: x,
              children: (0, t.jsx)("div", {
                ...o,
                className: l(r().item, a),
                "data-active": m || void 0,
                children: s
              })
            })
          },
          Control: (0, n.forwardRef)(function({
            children: e,
            className: s = "",
            onClick: a,
            disabled: n,
            id: o,
            ...i
          }, d) {
            let u = c(),
              p = h(),
              m = o ?? p.controlIdRef.current;
            p.controlIdRef.current = m;
            let x = u.isItemActive(p.value);
            return (0, t.jsx)("button", {
              type: "button",
              ...i,
              id: m,
              ref: d,
              className: l(r().control, s),
              "data-active": x || void 0,
              disabled: n,
              onClick: e => {
                a?.(e), e.defaultPrevented || n || u.toggleItem(p.value)
              },
              children: e
            })
          }),
          Panel: (0, n.forwardRef)(function({
            children: e,
            className: s = "",
            id: a,
            ...o
          }, i) {
            let d = c(),
              u = h(),
              p = a ?? u.panelIdRef.current;
            u.panelIdRef.current = p;
            let m = d.isItemActive(u.value),
              x = (0, n.useRef)(null),
              [g, b] = (0, n.useState)(0),
              [j, w] = (0, n.useState)(!1);
            (0, n.useEffect)(() => {
              let e = x.current;
              if (!e) return;
              let s = window,
                a = () => {
                  b(e.scrollHeight), w(!0)
                };
              if (a(), void 0 !== s.ResizeObserver) {
                let t = new s.ResizeObserver(a);
                return t.observe(e), () => t.disconnect()
              }
              return s.addEventListener("resize", a), () => s.removeEventListener("resize", a)
            }, []);
            let f = m ? j && g > 0 ? `${g}px` : void 0 : "0px";
            return (0, t.jsx)("div", {
              ...o,
              id: p,
              ref: i,
              className: l(r().panel, s),
              "data-active": m || void 0,
              children: (0, t.jsx)("div", {
                ref: x,
                className: r().content,
                style: {
                  overflow: "hidden",
                  maxHeight: f,
                  opacity: +!!m,
                  transition: j ? "max-height 220ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms ease" : void 0
                },
                children: (0, t.jsx)("div", {
                  className: r().contentInner,
                  children: e
                })
              })
            })
          })
        })
    },
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
    72617: (e, s, a) => {
      "use strict";
      a.r(s), a.d(s, {
        default: () => w
      });
      var t = a(95155),
        n = a(12115),
        o = a(56891),
        r = a.n(o),
        i = a(86297),
        d = a(98241),
        l = a.n(d),
        c = a(54834),
        h = a(66609),
        u = a(98500),
        p = a.n(u),
        m = a(22834),
        x = a(96351);
      let g = "https://help.guns.lol/how-to-guides/image-host",
        b = {
          windows: "Windows",
          macos: "macOS",
          linux: "Linux",
          ios: "iOS",
          android: "Android"
        };

      function j() {
        if ("undefined" == typeof navigator) return "windows";
        let e = navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test(e) ? "ios" : /android/.test(e) ? "android" : /windows|win32|win64/.test(e) ? "windows" : /mac os x|macintosh/.test(e) ? "macos" : /linux|x11/.test(e) ? "linux" : "windows"
      }

      function w({
        data: e
      }) {
        let s = (0, x.kj)(),
          [a, o] = (0, n.useState)(j()),
          [d, u] = (0, n.useState)(!1),
          [w, f] = (0, n.useState)({
            windows: "",
            macos: "",
            linux: ""
          }),
          [v, k] = (0, n.useState)(null),
          _ = v?.config?.secret_key || "",
          N = _ ? _.slice(0, 5) + "************" : "",
          y = (0, n.useMemo)(() => ({
            windows: s("dashboard.imagehost.setup.platform_names.windows"),
            macos: s("dashboard.imagehost.setup.platform_names.macos"),
            linux: s("dashboard.imagehost.setup.platform_names.linux"),
            ios: s("dashboard.imagehost.setup.platform_names.ios"),
            android: s("dashboard.imagehost.setup.platform_names.android")
          }), [s]),
          A = (0, n.useMemo)(() => ({
            windows: `${g}#windows-desktop-app`,
            macos: `${g}#macos-desktop-app`,
            linux: `${g}#linux-deb`,
            ios: `${g}#ios-shortcut`,
            android: `${g}#android-xshare`
          }), []),
          R = s("dashboard.imagehost.setup.shared.optional_hotkey"),
          S = s("dashboard.imagehost.setup.shared.use_app"),
          C = s("dashboard.imagehost.setup.common.app_name"),
          I = s("dashboard.imagehost.setup.common.xshare_name"),
          B = s("dashboard.imagehost.setup.common.xshare_config"),
          L = s("dashboard.imagehost.setup.common.ios_shortcut_name"),
          $ = async e => {
            try {
              await navigator.clipboard.writeText(e), h.oR.success(s("dashboard.imagehost.setup.copy_success"))
            } catch {
              h.oR.error(s("dashboard.imagehost.setup.copy_failed"))
            }
          }, U = ({
            n: e,
            children: s
          }) => (0, t.jsxs)("div", {
            className: r().setupStepRow,
            children: [(0, t.jsx)("div", {
              className: r().setupStepIndex,
              children: e
            }), (0, t.jsx)("div", {
              className: r().setupStepText,
              children: s
            })]
          }), T = async () => {
            let e = await fetch("/api/dashboard/imagehost/data", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                }
              }),
              s = await e.json();
            e.ok ? k(s) : h.oR.error(s.error)
          }, O = async () => {
            let e = await fetch("/api/dashboard/imagehost/appDownloadUrls", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                }
              }),
              s = await e.json();
            if (!e.ok) return h.oR.error(s.error), null;
            f(s)
          };
        return (0, n.useEffect)(() => {
          T(), O()
        }, []), (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)(h.l$, {
            richColors: !0,
            position: "top-center",
            theme: "dark",
            className: l().toasterStyles,
            icons: {
              success: c.A.successToast
            },
            visibleToasts: 2
          }), (0, t.jsx)("div", {
            className: r().setupWrapper,
            children: (0, t.jsxs)("div", {
              className: r().setupCard,
              children: [(0, t.jsx)("div", {
                className: r().setupTabs,
                children: Object.keys(b).map(e => (0, t.jsxs)("button", {
                  onClick: () => o(e),
                  className: `${r().setupTab} ${a===e?r().setupTabActive:""}`,
                  children: [y[e], e === j() && (0, t.jsx)("span", {
                    className: r().setupAutoBadge,
                    children: s("dashboard.imagehost.setup.tabs.detected")
                  })]
                }, e))
              }), (0, t.jsxs)("div", {
                className: r().setupKeyBlock,
                children: [(0, t.jsxs)("div", {
                  className: r().setupKeyLabel,
                  children: [i.A.key, " ", s("dashboard.imagehost.setup.upload_key.label")]
                }), (0, t.jsxs)("div", {
                  className: r().setupKeyRow,
                  children: [(0, t.jsx)("span", {
                    className: r().setupKeyValue,
                    children: d ? _ : N
                  }), (0, t.jsxs)("div", {
                    className: r().setupKeyActions,
                    children: [(0, t.jsxs)("span", {
                      className: r().uploadKeyButton,
                      onClick: () => u(e => !e),
                      children: [d ? c.A.hidePassword : c.A.password, " ", d ? s("dashboard.imagehost.setup.upload_key.hide") : s("dashboard.imagehost.setup.upload_key.reveal")]
                    }), (0, t.jsxs)("span", {
                      className: r().uploadKeyButton,
                      onClick: () => $(_),
                      children: [c.A.copy, " ", s("dashboard.imagehost.setup.upload_key.copy")]
                    })]
                  })]
                }), (0, t.jsx)("div", {
                  className: r().uploadKeyNote,
                  children: s("dashboard.imagehost.setup.upload_key.note")
                })]
              }), (0, t.jsxs)("div", {
                className: r().setupSteps,
                children: [(0, t.jsx)("div", {
                  className: r().setupStepsHeader,
                  children: (0, t.jsx)("h2", {
                    children: s("dashboard.imagehost.setup.steps_header", {
                      platform: y[a]
                    })
                  })
                }), (0, t.jsx)("div", {
                  className: r().setupStepsBody,
                  children: (0, t.jsx)(() => {
                    switch (a) {
                      case "windows":
                        return (0, t.jsxs)(t.Fragment, {
                          children: [(0, t.jsx)(U, {
                            n: 1,
                            children: s("dashboard.imagehost.setup.windows.step1", {
                              link: (0, t.jsxs)(p(), {
                                href: w?.windows,
                                download: !0,
                                children: [i.A.externalLink, " ", C]
                              })
                            })
                          }), (0, t.jsx)(U, {
                            n: 2,
                            children: s("dashboard.imagehost.setup.windows.step2")
                          }), (0, t.jsx)(U, {
                            n: 3,
                            children: R
                          }), (0, t.jsx)(U, {
                            n: 4,
                            children: S
                          }), (0, t.jsxs)("div", {
                            className: r().setupButtonWrapper,
                            children: [(0, t.jsx)("div", {
                              className: r().accordionWrapper,
                              children: (0, t.jsx)(m.n, {
                                children: (0, t.jsxs)(m.n.Item, {
                                  value: "windows-warning",
                                  id: "windows-warning",
                                  className: r().setupAccordionItem,
                                  children: [(0, t.jsx)(m.n.Control, {
                                    id: "windows-warning-control",
                                    className: r().setupAccordionControl,
                                    children: s("dashboard.imagehost.setup.windows.warning.title")
                                  }), (0, t.jsxs)(m.n.Panel, {
                                    children: [s("dashboard.imagehost.setup.windows.warning.body"), (0, t.jsx)("br", {}), s("dashboard.imagehost.setup.windows.warning.hint")]
                                  })]
                                }, "windows-warning")
                              })
                            }), (0, t.jsxs)("a", {
                              href: A.windows,
                              target: "_blank",
                              rel: "noreferrer",
                              className: r().openDocsButton,
                              children: [i.A.link, " ", s("dashboard.imagehost.setup.buttons.open_guide", {
                                platform: y.windows
                              })]
                            })]
                          })]
                        });
                      case "macos":
                        return (0, t.jsxs)(t.Fragment, {
                          children: [(0, t.jsx)(U, {
                            n: 1,
                            children: s("dashboard.imagehost.setup.macos.step1", {
                              link: (0, t.jsxs)(p(), {
                                href: w?.macos,
                                download: !0,
                                children: [i.A.externalLink, " ", C]
                              })
                            })
                          }), (0, t.jsx)(U, {
                            n: 2,
                            children: s("dashboard.imagehost.setup.macos.step2", {
                              dmg: (0, t.jsx)("strong", {
                                children: ".dmg"
                              }),
                              folder: (0, t.jsx)("strong", {
                                children: s("dashboard.imagehost.setup.macos.applications_label")
                              })
                            })
                          }), (0, t.jsx)(U, {
                            n: 3,
                            children: s("dashboard.imagehost.setup.macos.step3")
                          }), (0, t.jsxs)("div", {
                            className: r().warningText,
                            children: [(0, t.jsx)("span", {
                              children: s("dashboard.imagehost.setup.macos.warning.title")
                            }), s("dashboard.imagehost.setup.macos.warning.step1"), (0, t.jsx)("br", {}), s("dashboard.imagehost.setup.macos.warning.step2", {
                              command: (0, t.jsx)("code", {
                                children: 'sudo xattr -rd com.apple.quarantine "/Applications/guns.lol Image Host.app"'
                              })
                            })]
                          }), (0, t.jsx)(U, {
                            n: 4,
                            children: R
                          }), (0, t.jsx)(U, {
                            n: 5,
                            children: S
                          }), (0, t.jsx)("div", {
                            className: r().setupButtonWrapper,
                            children: (0, t.jsxs)("a", {
                              href: A.macos,
                              target: "_blank",
                              rel: "noreferrer",
                              className: r().openDocsButton,
                              children: [i.A.link, " ", s("dashboard.imagehost.setup.buttons.open_guide", {
                                platform: y.macos
                              })]
                            })
                          })]
                        });
                      case "linux":
                        return (0, t.jsxs)(t.Fragment, {
                          children: [(0, t.jsx)(U, {
                            n: 1,
                            children: s("dashboard.imagehost.setup.linux.step1", {
                              link: (0, t.jsxs)(p(), {
                                href: w?.linux,
                                download: !0,
                                children: [i.A.externalLink, " ", C]
                              })
                            })
                          }), (0, t.jsx)(U, {
                            n: 2,
                            children: s("dashboard.imagehost.setup.linux.step2")
                          }), (0, t.jsx)(U, {
                            n: 3,
                            children: R
                          }), (0, t.jsx)(U, {
                            n: 4,
                            children: S
                          }), (0, t.jsx)("div", {
                            className: r().setupButtonWrapper,
                            children: (0, t.jsxs)("a", {
                              href: A.linux,
                              target: "_blank",
                              rel: "noreferrer",
                              className: r().openDocsButton,
                              children: [i.A.link, " ", s("dashboard.imagehost.setup.buttons.open_guide", {
                                platform: y.linux
                              })]
                            })
                          })]
                        });
                      case "android":
                        return (0, t.jsxs)(t.Fragment, {
                          children: [(0, t.jsx)(U, {
                            n: 1,
                            children: s("dashboard.imagehost.setup.android.step1", {
                              link: (0, t.jsxs)(p(), {
                                href: "https://github.com/tsdko/xshare/releases/latest",
                                target: "_blank",
                                children: [i.A.externalLink, " ", I]
                              })
                            })
                          }), (0, t.jsx)(U, {
                            n: 2,
                            children: s("dashboard.imagehost.setup.android.step2", {
                              config: (0, t.jsxs)("a", {
                                onClick: () => {
                                  let e, s, a;
                                  return e = new Blob([JSON.stringify({
                                    Version: "13.1.0",
                                    Name: "guns.lol - Image Host",
                                    DestinationType: "ImageUploader, FileUploader",
                                    RequestMethod: "POST",
                                    RequestURL: "https://guns.lol/api/imagehost/upload",
                                    Body: "MultipartFormData",
                                    Arguments: {
                                      key: _
                                    },
                                    FileFormName: "file",
                                    URL: "$json:link$",
                                    DeletionURL: "$json:deletion_url$",
                                    ErrorMessage: "$json:error$",
                                    Data: ""
                                  }, null, 2)], {
                                    type: "application/json"
                                  }), s = window.URL.createObjectURL(e), void((a = document.createElement("a")).href = s, a.download = "guns.lol_config.sxcu", a.click(), window.URL.revokeObjectURL(s))
                                },
                                children: [i.A.externalLink, " ", B]
                              })
                            })
                          }), (0, t.jsx)(U, {
                            n: 3,
                            children: s("dashboard.imagehost.setup.android.step3")
                          }), (0, t.jsx)(U, {
                            n: 4,
                            children: s("dashboard.imagehost.setup.android.step4")
                          }), (0, t.jsx)(U, {
                            n: 5,
                            children: s("dashboard.imagehost.setup.android.step5")
                          }), (0, t.jsx)(U, {
                            n: 6,
                            children: s("dashboard.imagehost.setup.android.step6")
                          }), (0, t.jsx)("div", {
                            className: r().setupButtonWrapper,
                            children: (0, t.jsxs)("a", {
                              href: A.android,
                              target: "_blank",
                              rel: "noreferrer",
                              className: r().openDocsButton,
                              children: [i.A.link, " ", s("dashboard.imagehost.setup.buttons.open_guide", {
                                platform: y.android
                              })]
                            })
                          })]
                        });
                      case "ios":
                        return (0, t.jsxs)(t.Fragment, {
                          children: [(0, t.jsx)(U, {
                            n: 1,
                            children: s("dashboard.imagehost.setup.ios.step1", {
                              shortcut: (0, t.jsxs)(p(), {
                                href: "https://www.icloud.com/shortcuts/f38438b968cc4e068e06558e31c16a68",
                                target: "_blank",
                                children: [i.A.externalLink, " ", s("dashboard.imagehost.setup.common.ios_shortcut_label")]
                              }),
                              name: L
                            })
                          }), (0, t.jsx)(U, {
                            n: 2,
                            children: s("dashboard.imagehost.setup.ios.step2", {
                              name: L
                            })
                          }), (0, t.jsx)(U, {
                            n: 3,
                            children: s("dashboard.imagehost.setup.ios.step3")
                          }), (0, t.jsx)(U, {
                            n: 4,
                            children: s("dashboard.imagehost.setup.ios.step4")
                          }), (0, t.jsx)(U, {
                            n: 5,
                            children: s("dashboard.imagehost.setup.ios.step5")
                          }), (0, t.jsx)("div", {
                            className: r().setupButtonWrapper,
                            children: (0, t.jsxs)("a", {
                              href: A.ios,
                              target: "_blank",
                              rel: "noreferrer",
                              className: r().openDocsButton,
                              children: [i.A.link, " ", s("dashboard.imagehost.setup.buttons.open_guide", {
                                platform: y.ios
                              })]
                            })
                          })]
                        })
                    }
                  }, {})
                })]
              })]
            })
          })]
        })
      }
    }
  }
]);