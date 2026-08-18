(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7886], {
    40428: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => n
      });
      var r = s(95155),
        t = s(12115),
        o = s(59931),
        i = s.n(o);

      function n({
        checked: e,
        onChange: a,
        label: s,
        description: o,
        disabled: n = !1,
        name: l,
        id: c,
        className: d
      }) {
        let u = (0, t.useId)(),
          m = c ?? u,
          h = (0, r.jsx)("svg", {
            viewBox: "0 0 10 7",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
              d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          });
        return (0, r.jsxs)("label", {
          className: `${i().checkboxWrapper} ${d??""}`,
          "data-disabled": n,
          "data-checked": e,
          htmlFor: m,
          children: [(0, r.jsx)("input", {
            type: "checkbox",
            id: m,
            name: l,
            checked: e,
            onChange: a,
            disabled: n
          }), (0, r.jsx)("span", {
            className: i().checkboxBox,
            children: (0, r.jsx)("span", {
              className: i().checkmark,
              children: h
            })
          }), (s || o) && (0, r.jsxs)("span", {
            className: i().checkboxContent,
            children: [s && (0, r.jsx)("span", {
              className: i().label,
              children: s
            }), o && (0, r.jsx)("span", {
              className: i().description,
              children: o
            })]
          })]
        })
      }
    },
    57886: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        default: () => H
      });
      var r = s(95155),
        t = s(12115),
        o = s(31887),
        i = s.n(o),
        n = s(98241),
        l = s.n(n),
        c = s(66609),
        d = s(99353),
        u = s(39818);
      let m = ({
        assetURL: e,
        fileType: a,
        setAsset: s
      }) => (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: i().fileBadge,
          children: [(0, r.jsx)("span", {
            children: ("." + e.substring(e.lastIndexOf(".") + 1)).toUpperCase()
          }), (0, r.jsx)("span", {
            onClick: function() {
              null !== (0, u._Y)(a) && s("")
            },
            children: d.A.deleteFile
          })]
        }), [".mp4", ".mov", ".avi", ".m4v", ".webm", ".mkv"].find(a => e.endsWith(a)) ? (0, r.jsx)("video", {
          src: e,
          className: i().uploadCardImage
        }) : (0, r.jsx)("img", {
          src: e,
          alt: "File",
          className: i().uploadCardImage
        })]
      });
      var h = s(86891);
      let p = ({
        label: e,
        value: a,
        accept: s,
        isLoading: t,
        onFileChange: o,
        fileType: n,
        setAsset: l
      }) => {
        let c = (0, h.kj)();
        return (0, r.jsxs)("div", {
          className: i().uploadCardWrapper,
          children: [(0, r.jsx)("span", {
            children: e
          }), (0, r.jsx)("div", {
            className: i().uploadCard,
            children: "" === a ? (0, r.jsxs)(r.Fragment, {
              children: [t ? (0, r.jsxs)("div", {
                className: i().uploaderMessage,
                children: [(0, r.jsx)("span", {
                  children: d.A.loading
                }), (0, r.jsx)("h1", {
                  children: c("dashboard.customize.assets.uploading")
                })]
              }) : (0, r.jsxs)("div", {
                className: i().uploadCardText,
                children: [d.A.image, (0, r.jsx)("h1", {
                  children: c("dashboard.customize.assets.upload_prompt")
                })]
              }), (0, r.jsx)("input", {
                type: "file",
                accept: s,
                onChange: o
              })]
            }) : (0, r.jsx)(m, {
              assetURL: a,
              fileType: n,
              setAsset: l
            })
          })]
        })
      };
      var g = s(37897),
        f = s(45941);
      let b = function({
        url: e
      }) {
        let [a, s] = (0, t.useState)("--:--");
        return (0, t.useEffect)(() => {
          let a = document.createElement("audio");
          a.src = e, a.addEventListener("loadedmetadata", () => {
            let e = Math.floor(a.duration),
              r = Math.floor(e / 60),
              t = e % 60;
            s(`${r}:${t<10?"0":""}${t}`)
          })
        }, [e]), (0, r.jsx)("h3", {
          children: a
        })
      };
      var x = s(61778),
        v = s(81934),
        j = s(13782),
        _ = s(40428),
        N = s(12521),
        y = s(21924);
      let k = ({
        data: e
      }) => {
        let a = (0, h.kj)(),
          s = e.config,
          [o, n] = (0, t.useState)({
            isLoading: !1,
            assetType: ""
          }),
          l = {
            isLoading: !1,
            assetType: ""
          },
          [m, k] = (0, t.useState)("" !== s.url ? s.url : ""),
          [z, C] = (0, t.useState)("" !== s.avatar ? s.avatar : ""),
          [w, A] = (0, t.useState)("" !== s.custom_cursor ? s.custom_cursor : ""),
          [S, E] = (0, t.useState)(!1),
          [M, T] = (0, t.useState)(e.config.shuffle_audios ?? !1),
          [R, F] = (0, t.useState)(e.config.audio_player ?? !1),
          [B, I] = (0, t.useState)(""),
          [$, L] = (0, t.useState)(s.audio),
          [P, D] = (0, t.useState)(""),
          [U, W] = (0, t.useState)({
            id: "",
            currentTitle: ""
          }),
          [O, G] = (0, t.useState)(),
          H = (0, t.useRef)(null),
          Y = e.premium ? 4 : 2,
          J = "string" == typeof $ && "" !== $,
          X = (0, t.useMemo)(() => J ? 1 : Array.isArray($) ? $.length : 0, [$, J]),
          Z = "audioManager" === B ? a("dashboard.customize.audio.modal.manager") : "addAudio" === B ? a("dashboard.customize.audio.modal.add") : "editAudioDetails" === B ? a("dashboard.customize.audio.modal.edit") : "",
          [q, K] = (0, t.useState)(""),
          [Q, V] = (0, t.useState)(null),
          [ee, ea] = (0, t.useState)(""),
          [es, er] = (0, t.useState)(null),
          [et, eo] = (0, t.useState)(!1),
          [ei, en] = (0, t.useState)(!1),
          [el, ec] = (0, t.useState)(null),
          [ed, eu] = (0, t.useState)(!1),
          [em, eh] = (0, t.useState)(1),
          [ep, eg] = (0, t.useState)(0),
          [ef, eb] = (0, t.useState)({
            x: 0,
            y: 0
          }),
          [ex, ev] = (0, t.useState)(!1),
          ej = (0, t.useRef)(null),
          e_ = (0, t.useRef)({}),
          eN = (0, t.useRef)({
            mode: "none",
            panPointerId: -1,
            startX: 0,
            startY: 0,
            startOffset: {
              x: 0,
              y: 0
            },
            pinchDistance: 0,
            pinchAngle: 0,
            pinchCenter: {
              x: 0,
              y: 0
            },
            pinchStartZoom: 1,
            pinchStartRotation: 0,
            pinchStartOffset: {
              x: 0,
              y: 0
            }
          }),
          ey = async e => {
            let s = e.target.files?.[0];
            if (!s) return;
            let r = f.nB.audio,
              t = ek(s.name).toLowerCase();
            if (!r.includes(t)) {
              c.oR.error(a("dashboard.customize.audio.errors.invalid_file")), e.target.value = "";
              return
            }
            G(s)
          };

        function ek(e) {
          return "." + e.substring(e.lastIndexOf(".") + 1)
        }
        let ez = (e, a, s) => Math.min(s, Math.max(a, e)),
          eC = e => {
            let a = e;
            for (; a > 180;) a -= 360;
            for (; a < -180;) a += 360;
            return a
          },
          ew = (e, a) => Math.hypot(e.x - a.x, e.y - a.y),
          eA = (e, a) => 180 * Math.atan2(a.y - e.y, a.x - e.x) / Math.PI,
          eS = (e, a) => ({
            x: (e.x + a.x) / 2,
            y: (e.y + a.y) / 2
          }),
          eE = (0, t.useCallback)((e, a, s, r) => {
            if (!s) return {
              x: 0,
              y: 0
            };
            let t = Math.max(340 / s.naturalWidth, 340 / s.naturalHeight) * a,
              o = s.naturalWidth * t,
              i = s.naturalHeight * t,
              n = Math.abs(r) * Math.PI / 180,
              l = Math.abs(Math.cos(n)),
              c = Math.abs(Math.sin(n)),
              d = Math.max(0, (o * l + i * c - 340) / 2),
              u = Math.max(0, (o * c + i * l - 340) / 2);
            return {
              x: Math.min(d, Math.max(-d, e.x)),
              y: Math.min(u, Math.max(-u, e.y))
            }
          }, []),
          eM = (0, t.useCallback)(() => {
            eh(1), eg(0), eb({
              x: 0,
              y: 0
            }), ev(!1), e_.current = {}, eN.current.mode = "none"
          }, []),
          eT = (0, t.useCallback)(() => {
            eu(!1), ec(e => (e && URL.revokeObjectURL(e.objectUrl), null)), eM()
          }, [eM]),
          eR = async e => {
            let s = URL.createObjectURL(e);
            try {
              let a = await new Promise((e, a) => {
                let r = new Image;
                r.onload = () => e({
                  width: r.naturalWidth,
                  height: r.naturalHeight
                }), r.onerror = () => a(Error()), r.src = s
              });
              if (!a.width || !a.height) throw Error("Invalid image.");
              ec({
                objectUrl: s,
                fileName: e.name,
                naturalWidth: a.width,
                naturalHeight: a.height
              }), eM(), eu(!0)
            } catch {
              URL.revokeObjectURL(s), c.oR.error(a("dashboard.customize.assets.avatar_editor.errors.open"))
            }
          }, eF = async e => {
            n({
              isLoading: !0,
              assetType: "avatar"
            });
            try {
              let s = await (0, u.iN)("avatar", e, a);
              s && C(s)
            } finally {
              n(l)
            }
          }, eB = async e => {
            let a = e.target.files?.[0];
            e.target.value = "", !a || (".gif" === ek(a.name).toLowerCase() ? await eF(a) : (0, u.vH)(a, "avatar") && await eR(a))
          }, eI = () => {
            let e = Object.values(e_.current);
            e.length < 2 || (eN.current = {
              mode: "pinch",
              panPointerId: -1,
              startX: 0,
              startY: 0,
              startOffset: ef,
              pinchDistance: ew(e[0], e[1]),
              pinchAngle: eA(e[0], e[1]),
              pinchCenter: eS(e[0], e[1]),
              pinchStartZoom: em,
              pinchStartRotation: ep,
              pinchStartOffset: ef
            })
          }, e$ = e => {
            e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId), delete e_.current[e.pointerId];
            let a = Object.values(e_.current);
            if (a.length >= 2) return void eI();
            if (1 === a.length) {
              eN.current = {
                mode: "pan",
                panPointerId: Number(Object.keys(e_.current)[0]),
                startX: a[0].x,
                startY: a[0].y,
                startOffset: ef,
                pinchDistance: 0,
                pinchAngle: 0,
                pinchCenter: {
                  x: 0,
                  y: 0
                },
                pinchStartZoom: em,
                pinchStartRotation: ep,
                pinchStartOffset: ef
              };
              return
            }
            eN.current.mode = "none", eN.current.panPointerId = -1
          }, eL = async () => {
            if (el && !ex) {
              ev(!0), n({
                isLoading: !0,
                assetType: "avatar"
              });
              try {
                let e, s = await (e = el.objectUrl, new Promise((a, s) => {
                    let r = new Image;
                    r.onload = () => a(r), r.onerror = () => s(Error()), r.src = e
                  })),
                  r = document.createElement("canvas"),
                  t = r.getContext("2d");
                if (!t) return void c.oR.error(a("dashboard.customize.assets.avatar_editor.errors.edit"));
                let o = Math.max(340 / el.naturalWidth, 340 / el.naturalHeight),
                  i = Math.floor(340 / (o * em)),
                  n = Math.min(512, Math.max(128, i)),
                  l = o * em,
                  d = n / 340,
                  m = el.naturalWidth * l * d,
                  h = el.naturalHeight * l * d,
                  p = ep * Math.PI / 180;
                r.width = n, r.height = n, t.imageSmoothingEnabled = !0, t.imageSmoothingQuality = "high", t.clearRect(0, 0, n, n), t.save(), t.translate(n / 2 + ef.x * d, n / 2 + ef.y * d), t.rotate(p), t.drawImage(s, -m / 2, -h / 2, m, h), t.restore();
                let g = await new Promise(e => {
                  r.toBlob(e, "image/png", .95)
                });
                if (!g) return void c.oR.error(a("dashboard.customize.assets.avatar_editor.errors.process"));
                let f = el.fileName.replace(/\.[^/.]+$/, ""),
                  b = new File([g], `${f}-avatar.png`, {
                    type: "image/png"
                  }),
                  x = await (0, u.iN)("avatar", b, a);
                x && (C(x), eT())
              } catch {
                c.oR.error(a("dashboard.customize.assets.avatar_editor.errors.process"))
              } finally {
                n(l), ev(!1)
              }
            }
          };
        (0, t.useEffect)(() => {
          el && eb(e => eE(e, em, el, ep))
        }, [el, em, ep, eE]), (0, t.useEffect)(() => () => {
          el && URL.revokeObjectURL(el.objectUrl)
        }, [el]);
        let eP = (0, t.useMemo)(() => {
            if (!el) return null;
            let e = Math.max(340 / el.naturalWidth, 340 / el.naturalHeight) * em;
            return {
              widthRatio: el.naturalWidth * e / 340,
              heightRatio: el.naturalHeight * e / 340
            }
          }, [el, em]),
          eD = (0, t.useMemo)(() => .001 > Math.abs(em - 1), [em]),
          eU = (0, t.useMemo)(() => .1 > Math.abs(ep), [ep]),
          eW = async () => {
            if (!et) {
              if (!O) return void c.oR.error(a("dashboard.customize.audio.errors.select_file"));
              eo(!0);
              try {
                await (0, u.C9)(P, O, es, L) && (I("audioManager"), G(void 0), D(""), ea(""), er(null))
              } finally {
                eo(!1)
              }
            }
          }, eO = async (e, a) => {
            await (0, u.qc)(e, a, T)
          }, eG = async () => {
            if (!ei) {
              en(!0);
              try {
                await (0, u.l4)(U.id, U.currentTitle, Q ?? q, L) && (I("audioManager"), W({
                  id: "",
                  currentTitle: ""
                }), K(""), V(null))
              } finally {
                en(!1)
              }
            }
          }, eH = async e => {
            let a = e.currentTarget.checked;
            await (0, u.F_)(a, T)
          }, eY = async e => {
            let a = e.currentTarget.checked;
            await (0, u.I9)(a, F)
          }, eJ = async (e, a, s, r) => {
            let t = e.target;
            M || r || ["svg", "path", "span"].includes(t.nodeName.toLowerCase()) && "" === t.id || await (0, u.h3)(a, s)
          }, eX = async (e, s) => {
            let r = e.target.files?.[0];
            if (!r) {
              e.target.value = "";
              return
            }
            n({
              isLoading: !0,
              assetType: s
            }), e.target.disabled = !0;
            try {
              let t = await (0, u.iN)(s, r, a);
              t ? ("background" === s && k(t), "avatar" === s && C(t), "cursor" === s && A(t)) : e.target.value = ""
            } finally {
              e.target.disabled = !1, n(l)
            }
          }, eZ = (0, t.useMemo)(() => ({
            url: m,
            avatar: z,
            custom_cursor: w
          }), [m, z, w]), eq = async e => {
            let s, r = e.target.files?.[0];
            if (!r) return;
            let t = f.nB.cover,
              o = ek(r.name).toLowerCase();
            if (!t.includes(o)) {
              c.oR.error(a("dashboard.customize.audio.errors.invalid_file")), e.target.value = "";
              return
            }
            V(r), (s = new FileReader).onload = function(e) {
              K(e.target.result)
            }, s.readAsDataURL(r)
          }, eK = async e => {
            let s, r = e.target.files?.[0];
            if (!r) return;
            let t = f.nB.cover,
              o = ek(r.name).toLowerCase();
            if (!t.includes(o)) {
              c.oR.error(a("dashboard.customize.audio.errors.invalid_file")), e.target.value = "";
              return
            }
            er(r), (s = new FileReader).onload = function(e) {
              ea(e.target.result)
            }, s.readAsDataURL(r)
          };
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(j.A, {
            opened: S,
            onClose: () => E(!1),
            title: Z,
            size: "550px",
            centered: !0,
            children: "audioManager" === B ? (0, r.jsxs)("div", {
              className: i().audioManager,
              children: [(J || Array.isArray($) && 0 !== $.length) && (0, r.jsx)("h3", {
                className: i().audioManagerDescription,
                children: a("dashboard.customize.audio.manager.description")
              }), ("string" == typeof $ && "" !== $ || Array.isArray($) && 0 !== $.length) && !e.premium && (0, r.jsx)("div", {
                className: i().premiumAd,
                style: {
                  width: "100%",
                  padding: "10px",
                  boxSizing: "border-box"
                },
                children: (0, r.jsx)("span", {
                  style: {
                    fontSize: "17px"
                  },
                  children: a("dashboard.customize.audio.manager.premium_cta", {
                    premium: (0, r.jsx)("span", {
                      style: {
                        fontSize: "17px"
                      },
                      children: (0, r.jsxs)(v.A, {
                        href: "/pricing",
                        target: "_blank",
                        children: [d.A.premium, " ", a("dashboard.customize.premium_label")]
                      })
                    })
                  })
                })
              }), (0, r.jsxs)("div", {
                className: i().audiosWrapper,
                children: [!J && Array.isArray($) && 0 === $.length || !J && !Array.isArray($) || "string" == typeof $ && "" === $ ? (0, r.jsx)("h1", {
                  className: i().noAudios,
                  children: a("dashboard.customize.audio.manager.empty")
                }) : (0, r.jsx)("h1", {
                  className: i().audioAmount,
                  children: a("dashboard.customize.audio.manager.count", {
                    current: X,
                    total: Y
                  })
                }), (0, r.jsx)("div", {
                  className: i().audios,
                  children: !J && Array.isArray($) && 0 === $.length || "string" == typeof $ && "" === $ ? null : J ? (0, r.jsxs)("div", {
                    className: i().audioContainer,
                    children: [(0, r.jsxs)("div", {
                      className: i().audioContainerWrapper,
                      children: [d.A.audio, (0, r.jsxs)("div", {
                        className: i().audioDescription,
                        children: [(0, r.jsx)("h1", {
                          children: a("dashboard.customize.audio.single_title")
                        }), (0, r.jsx)(b, {
                          url: $
                        })]
                      })]
                    }), (0, r.jsxs)("div", {
                      className: i().buttonDiv,
                      children: [(0, r.jsx)("span", {
                        className: i().activeAudio,
                        children: a("dashboard.customize.audio.badges.active")
                      }), (0, r.jsx)("span", {
                        className: i().deleteButton,
                        onClick: () => eO("", L),
                        children: d.A.deleteButton
                      })]
                    })]
                  }) : Array.isArray($) && $.map((e, s) => (0, r.jsx)(t.Fragment, {
                    children: (0, r.jsx)(x.A, {
                      content: a("dashboard.customize.audio.tooltip"),
                      hideTooltip: !!e.selected,
                      children: (0, r.jsxs)("div", {
                        className: i().audioContainer,
                        onClick: a => eJ(a, e.id, L, !!e.selected),
                        children: [(0, r.jsxs)("div", {
                          className: i().audioContainerWrapper,
                          children: [e.cover && "" !== e.cover ? (0, r.jsx)("img", {
                            className: i().audioCover,
                            src: e.cover,
                            alt: "Cover"
                          }) : d.A.audio, (0, r.jsxs)("div", {
                            className: i().audioDescription,
                            children: [(0, r.jsx)("h1", {
                              children: e.title
                            }), (0, r.jsx)(b, {
                              url: e.url
                            })]
                          })]
                        }), (0, r.jsxs)("div", {
                          className: i().buttonDiv,
                          children: [e.selected && !M && (0, r.jsx)("span", {
                            className: i().activeAudio,
                            children: a("dashboard.customize.audio.badges.active")
                          }), (0, r.jsx)("span", {
                            className: i().editButton,
                            onClick: () => {
                              I("editAudioDetails"), W({
                                id: e.id,
                                currentTitle: e.title
                              }), K(e.cover ?? "")
                            },
                            children: d.A.editButton
                          }), (0, r.jsx)("span", {
                            className: i().deleteButton,
                            onClick: () => eO(e.id, L),
                            children: d.A.deleteButton
                          })]
                        })]
                      })
                    })
                  }, s))
                })]
              }), (0, r.jsxs)("div", {
                className: i().audioManagerBottomWrapper,
                children: [("string" == typeof $ && "" !== $ || Array.isArray($) && 0 !== $.length) && (0, r.jsxs)("div", {
                  className: i().audioManagerSettings,
                  children: [(0, r.jsxs)("div", {
                    className: i().shuffleSongs,
                    children: [(0, r.jsxs)("div", {
                      className: i().shuffleSongsDescription,
                      children: [(0, r.jsx)("h1", {
                        children: a("dashboard.customize.audio.manager.shuffle.title")
                      }), (0, r.jsx)("h3", {
                        children: a("dashboard.customize.audio.manager.shuffle.description")
                      })]
                    }), (0, r.jsx)(_.A, {
                      checked: M,
                      onChange: eH
                    })]
                  }), (0, r.jsxs)("div", {
                    className: i().audioPlayer,
                    children: [(0, r.jsxs)("div", {
                      className: i().audioPlayerDescription,
                      children: [(0, r.jsx)("h1", {
                        children: a("dashboard.customize.audio.manager.player.title")
                      }), (0, r.jsx)("h3", {
                        children: a("dashboard.customize.audio.manager.player.description")
                      })]
                    }), (0, r.jsx)(_.A, {
                      checked: R,
                      onChange: eY
                    })]
                  })]
                }), (0, r.jsxs)("span", {
                  onClick: () => {
                    I("addAudio")
                  },
                  className: i().addAudioButton,
                  children: [d.A.audio, " ", a("dashboard.customize.audio.manager.add_button")]
                })]
              })]
            }) : "addAudio" === B ? (0, r.jsxs)("div", {
              className: i().addAudioWrapper,
              children: [(0, r.jsxs)("div", {
                className: i().addAudio,
                children: [(0, r.jsxs)("div", {
                  className: i().audioUploadCardWrapper,
                  children: [(0, r.jsxs)("div", {
                    className: i().uploadCard,
                    style: {
                      height: "110px"
                    },
                    children: [(0, r.jsx)("div", {
                      className: i().uploadCardText,
                      children: O ? (0, r.jsxs)(r.Fragment, {
                        children: [d.A.audio, (0, r.jsxs)("div", {
                          className: i().fileBadge,
                          children: [(0, r.jsx)("span", {
                            children: ek(O.name).toUpperCase()
                          }), (0, r.jsx)("span", {
                            onClick: function() {
                              G(void 0), H.current && (H.current.value = "")
                            },
                            children: d.A.deleteFile
                          })]
                        })]
                      }) : (0, r.jsxs)(r.Fragment, {
                        children: [d.A.audio, (0, r.jsx)("h1", {
                          children: a("dashboard.customize.audio.add.upload_audio")
                        })]
                      })
                    }), (0, r.jsx)("input", {
                      disabled: !!O,
                      className: i().audioInput,
                      type: "file",
                      accept: N.vJ.audio.map(e => e).join(", "),
                      onChange: ey,
                      ref: H
                    })]
                  }), (0, r.jsx)("div", {
                    className: i().uploadCard,
                    style: {
                      height: "110px"
                    },
                    children: (0, r.jsx)("div", {
                      className: i().uploadCardText,
                      children: "" === ee ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)("div", {
                          className: i().uploadCardText,
                          children: [d.A.image, (0, r.jsx)("h1", {
                            children: a("dashboard.customize.audio.add.upload_cover")
                          })]
                        }), (0, r.jsx)("input", {
                          className: i().audioInput,
                          style: {
                            top: 0,
                            left: 0
                          },
                          type: "file",
                          accept: N.vJ.cover.map(e => e).join(", "),
                          onChange: e => {
                            eK(e)
                          }
                        })]
                      }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)("div", {
                          className: i().fileBadge,
                          children: [(0, r.jsx)("span", {
                            children: ek(es ? es.name : ee).toUpperCase()
                          }), (0, r.jsx)("span", {
                            onClick: function() {
                              er(null), ea("")
                            },
                            children: d.A.deleteFile
                          })]
                        }), (0, r.jsx)("img", {
                          src: ee,
                          alt: "Cover",
                          className: i().uploadCardImage,
                          style: {
                            top: 0,
                            left: 0
                          }
                        })]
                      })
                    })
                  })]
                }), (0, r.jsx)(g.A, {
                  featureName: a("dashboard.customize.audio.add.title_label"),
                  onChangeFunction: e => {
                    D(e.target.value)
                  },
                  value: P,
                  placeholder: a("dashboard.customize.audio.add.title_placeholder"),
                  icon: d.A.audio,
                  maxLength: 30
                })]
              }), (0, r.jsxs)("span", {
                className: i().addAudioButton,
                style: {
                  width: "fit-content",
                  padding: "7px 15px",
                  backgroundColor: "#151515",
                  height: "42px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8
                },
                onClick: eW,
                children: [et ? d.A.loading : null, et ? a("dashboard.customize.audio.add.loading") : a("dashboard.customize.audio.add.button")]
              })]
            }) : "editAudioDetails" === B && (0, r.jsxs)("div", {
              className: i().addAudioWrapper,
              children: [(0, r.jsxs)("div", {
                className: i().addAudio,
                children: [(0, r.jsx)("div", {
                  className: i().uploadCard,
                  style: {
                    height: "110px"
                  },
                  children: (0, r.jsx)("div", {
                    className: i().uploadCardText,
                    children: "" === q ? (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsxs)("div", {
                        className: i().uploadCardText,
                        children: [d.A.image, (0, r.jsx)("h1", {
                          children: a("dashboard.customize.audio.add.upload_cover")
                        })]
                      }), (0, r.jsx)("input", {
                        className: i().audioInput,
                        style: {
                          top: 0,
                          left: 0
                        },
                        type: "file",
                        accept: N.vJ.cover.map(e => e).join(", "),
                        onChange: e => {
                          eq(e)
                        }
                      })]
                    }) : (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsxs)("div", {
                        className: i().fileBadge,
                        children: [(0, r.jsx)("span", {
                          children: ek(Q ? Q.name : q).toUpperCase()
                        }), (0, r.jsx)("span", {
                          onClick: function() {
                            K(""), V(null)
                          },
                          children: d.A.deleteFile
                        })]
                      }), (0, r.jsx)("img", {
                        src: q,
                        alt: "Cover",
                        className: i().uploadCardImage,
                        style: {
                          top: 0,
                          left: 0
                        }
                      })]
                    })
                  })
                }), (0, r.jsx)(g.A, {
                  featureName: a("dashboard.customize.audio.edit.title_label"),
                  onChangeFunction: e => {
                    W({
                      id: U.id,
                      currentTitle: e.target.value
                    })
                  },
                  value: U.currentTitle,
                  placeholder: a("dashboard.customize.audio.add.title_placeholder"),
                  icon: d.A.audio,
                  maxLength: 30
                })]
              }), (0, r.jsxs)("span", {
                className: i().addAudioButton,
                style: {
                  width: "fit-content",
                  padding: "7px 15px",
                  backgroundColor: "#151515",
                  height: "42px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8
                },
                onClick: eG,
                children: [ei ? d.A.loading : null, ei ? a("dashboard.customize.audio.edit.loading") : a("dashboard.customize.audio.edit.button")]
              })]
            })
          }), (0, r.jsx)(j.A, {
            opened: ed,
            onClose: eT,
            title: a("dashboard.customize.assets.avatar_editor.title"),
            size: "min(680px, 96vw)",
            centered: !0,
            bodyClassName: i().avatarCropperModalBody,
            children: (0, r.jsxs)("div", {
              className: i().avatarCropperModal,
              children: [(0, r.jsxs)("div", {
                ref: ej,
                className: i().avatarCropperStage,
                "data-vaul-no-drag": !0,
                onPointerDown: e => {
                  el && ((e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId), e_.current[e.pointerId] = {
                    x: e.clientX,
                    y: e.clientY
                  }, Object.values(e_.current).length >= 2) ? eI() : eN.current = {
                    mode: "pan",
                    panPointerId: e.pointerId,
                    startX: e.clientX,
                    startY: e.clientY,
                    startOffset: ef,
                    pinchDistance: 0,
                    pinchAngle: 0,
                    pinchCenter: {
                      x: 0,
                      y: 0
                    },
                    pinchStartZoom: em,
                    pinchStartRotation: ep,
                    pinchStartOffset: ef
                  })
                },
                onPointerMove: e => {
                  if (!el || !(e.pointerId in e_.current)) return;
                  e_.current[e.pointerId] = {
                    x: e.clientX,
                    y: e.clientY
                  };
                  let a = Object.values(e_.current),
                    s = eN.current;
                  if (a.length >= 2) {
                    "pinch" !== s.mode && eI();
                    let r = eN.current,
                      t = ew(a[0], a[1]),
                      o = eA(a[0], a[1]),
                      i = eS(a[0], a[1]),
                      n = r.pinchDistance > 0 ? t / r.pinchDistance : 1,
                      l = ez(r.pinchStartZoom * n, 1, 4),
                      c = eC(r.pinchStartRotation + eC(o - r.pinchAngle)),
                      d = 340 / (e.currentTarget.clientWidth > 0 ? e.currentTarget.clientWidth : 340),
                      u = eE({
                        x: r.pinchStartOffset.x + (i.x - r.pinchCenter.x) * d,
                        y: r.pinchStartOffset.y + (i.y - r.pinchCenter.y) * d
                      }, l, el, c);
                    eh(l), eg(c), eb(u);
                    return
                  }
                  "pan" !== s.mode || s.panPointerId !== e.pointerId || eb(eE({
                    x: s.startOffset.x + (e.clientX - s.startX) * (340 / (e.currentTarget.clientWidth > 0 ? e.currentTarget.clientWidth : 340)),
                    y: s.startOffset.y + (e.clientY - s.startY) * (340 / (e.currentTarget.clientWidth > 0 ? e.currentTarget.clientWidth : 340))
                  }, em, el, ep))
                },
                onPointerUp: e$,
                onPointerCancel: e$,
                onLostPointerCapture: e$,
                onWheel: e => {
                  if (!el) return;
                  if (e.preventDefault(), e.shiftKey) {
                    let a = eC(ep + (e.deltaY < 0 ? 2 : -2));
                    eg(a), eb(e => eE(e, em, el, a));
                    return
                  }
                  let a = ez(em + (e.deltaY < 0 ? .09 : -.09), 1, 4);
                  eh(a), eb(e => eE(e, a, el, ep))
                },
                children: [el && eP && (0, r.jsx)("img", {
                  src: el.objectUrl,
                  alt: a("dashboard.customize.assets.avatar_editor.alt_preview"),
                  className: i().avatarCropperImage,
                  style: {
                    width: `${100*eP.widthRatio}%`,
                    height: `${100*eP.heightRatio}%`,
                    left: `calc(50% + ${ef.x/340*100}%)`,
                    top: `calc(50% + ${ef.y/340*100}%)`,
                    transform: `translate(-50%, -50%) rotate(${ep}deg)`
                  },
                  draggable: !1
                }), (0, r.jsx)("div", {
                  className: i().avatarCropperGrid
                }), (0, r.jsx)("div", {
                  className: i().avatarCropperMask
                })]
              }), (0, r.jsxs)("p", {
                className: i().avatarCropperHint,
                children: [(0, r.jsx)("span", {
                  className: i().avatarCropperHintDesktop,
                  children: a("dashboard.customize.assets.avatar_editor.hints.desktop")
                }), (0, r.jsx)("span", {
                  className: i().avatarCropperHintMobile,
                  children: a("dashboard.customize.assets.avatar_editor.hints.mobile")
                })]
              }), (0, r.jsxs)("div", {
                className: i().avatarCropperBottom,
                children: [(0, r.jsxs)("div", {
                  className: i().avatarCropperSliderGroup,
                  children: [(0, r.jsxs)("div", {
                    className: i().avatarCropperSliderLabel,
                    children: [(0, r.jsx)("span", {
                      children: a("dashboard.customize.assets.avatar_editor.controls.zoom")
                    }), (0, r.jsxs)("div", {
                      className: i().avatarCropperSliderMeta,
                      children: [(0, r.jsx)("button", {
                        type: "button",
                        className: i().avatarCropperInlineReset,
                        onClick: () => {
                          eh(1), eb(e => eE(e, 1, el, ep))
                        },
                        disabled: eD,
                        children: a("dashboard.customize.assets.avatar_editor.controls.reset")
                      }), (0, r.jsxs)("strong", {
                        children: [em.toFixed(2), "x"]
                      })]
                    })]
                  }), (0, r.jsx)("div", {
                    className: i().avatarCropperZoomSlider,
                    children: (0, r.jsx)(y.A, {
                      min: 1,
                      max: 4,
                      step: .01,
                      value: em,
                      onChange: e => {
                        let a = Number(e.currentTarget.value);
                        eh(a), eb(e => eE(e, a, el, ep))
                      }
                    })
                  })]
                }), (0, r.jsxs)("div", {
                  className: i().avatarCropperSliderGroup,
                  children: [(0, r.jsxs)("div", {
                    className: i().avatarCropperSliderLabel,
                    children: [(0, r.jsx)("span", {
                      children: a("dashboard.customize.assets.avatar_editor.controls.rotation")
                    }), (0, r.jsxs)("div", {
                      className: i().avatarCropperSliderMeta,
                      children: [(0, r.jsx)("button", {
                        type: "button",
                        className: i().avatarCropperInlineReset,
                        onClick: () => {
                          eg(0), eb(e => eE(e, em, el, 0))
                        },
                        disabled: eU,
                        children: a("dashboard.customize.assets.avatar_editor.controls.reset")
                      }), (0, r.jsxs)("strong", {
                        children: [Math.round(ep), " ", a("dashboard.customize.assets.avatar_editor.controls.rotation_unit")]
                      })]
                    })]
                  }), (0, r.jsx)("div", {
                    className: i().avatarCropperRotationSlider,
                    children: (0, r.jsx)(y.A, {
                      min: -180,
                      max: 180,
                      step: 1,
                      value: ep,
                      onChange: e => {
                        let a = eC(Number(e.currentTarget.value));
                        eg(a), eb(e => eE(e, em, el, a))
                      }
                    })
                  })]
                }), (0, r.jsxs)("div", {
                  className: i().avatarCropperActions,
                  children: [(0, r.jsx)("button", {
                    type: "button",
                    className: i().avatarCropperSecondaryButton,
                    onClick: eT,
                    children: a("dashboard.customize.assets.avatar_editor.actions.cancel")
                  }), (0, r.jsxs)("button", {
                    type: "button",
                    className: i().avatarCropperPrimaryButton,
                    onClick: eL,
                    children: [ex ? d.A.loading : null, ex ? a("dashboard.customize.assets.avatar_editor.actions.saving") : a("dashboard.customize.assets.avatar_editor.actions.apply")]
                  })]
                })]
              })]
            })
          }), (0, r.jsx)(p, {
            label: a("dashboard.customize.assets.background"),
            value: eZ.url,
            accept: N.vJ.background.map(e => e).join(", "),
            isLoading: o.isLoading && "background" === o.assetType,
            onFileChange: e => eX(e, "background"),
            fileType: "background",
            setAsset: k
          }), (0, r.jsxs)("div", {
            className: i().uploadCardWrapper,
            children: [(0, r.jsx)("span", {
              children: a("dashboard.customize.assets.audio")
            }), (0, r.jsx)("div", {
              className: i().uploadCard,
              onClick: () => {
                I("audioManager"), E(!0)
              },
              children: (0, r.jsxs)("div", {
                className: i().uploadCardText,
                children: [d.A.audioManager, (0, r.jsx)("h1", {
                  children: a("dashboard.customize.assets.audio_open_manager")
                })]
              })
            })]
          }), (0, r.jsx)(p, {
            label: a("dashboard.customize.assets.avatar"),
            value: eZ.avatar,
            accept: N.vJ.avatar.map(e => e).join(", "),
            isLoading: o.isLoading && "avatar" === o.assetType,
            onFileChange: eB,
            fileType: "avatar",
            setAsset: C
          }), (0, r.jsx)(p, {
            label: a("dashboard.customize.assets.cursor"),
            value: eZ.custom_cursor,
            accept: N.vJ.cursor.map(e => e).join(", "),
            isLoading: o.isLoading && "cursor" === o.assetType,
            onFileChange: e => eX(e, "cursor"),
            fileType: "cursor",
            setAsset: A
          })]
        })
      };
      var z = s(60141);
      async function C(e, a) {
        try {
          let s = await fetch("https://guns.lol/api/dashboard/customize/usernameEffects", {
              method: "POST",
              body: JSON.stringify({
                username_effects: e
              })
            }),
            r = await s.json();
          s.ok ? (c.oR.success("Successfully saved username effects."), a()) : c.oR.error(r.error)
        } catch (e) {
          console.error(e.message)
        }
      }
      var w = s(41609),
        A = s.n(w),
        S = s(70660),
        E = s(57157),
        M = s(61861),
        T = s(42005),
        R = s(85737);
      let F = ({
        description: e,
        setDescription: a,
        discordPresence: s,
        setDiscordPresence: o,
        profileWidget: n,
        setProfileWidget: l,
        discordPresenceSettings: c,
        setDiscordPresenceSettings: u,
        backgroundEffects: m,
        setBackgroundEffects: p,
        opacity: f,
        setOpacity: b,
        usernameEffects: x,
        blur: _,
        setBlur: N,
        usernameGlow: k,
        setUsernameGlow: w,
        badgeGlow: F,
        setBadgeGlow: B,
        socialGlow: I,
        setSocialGlow: $,
        userData: L,
        locationMarker: P,
        setLocation: D
      }) => {
        let U = (0, h.kj)(),
          [W, O] = (0, t.useState)(""),
          G = {
            usernameEffects: U("dashboard.customize.general.username_effects.modal_title")
          },
          [H, Y] = (0, t.useState)(!1),
          [J, X] = (0, t.useState)(""),
          Z = "" !== L.config.display_name ? L.config.display_name : L.username,
          q = L.premium,
          K = L.config.opacity ?? 1,
          Q = L.config.profile_gradient ? {
            backgroundColor: (0, S.E2)(L.config.color, K),
            backgroundImage: `linear-gradient(25deg, ${(0,S.E2)(L.config.gradient_1,K)}, ${(0,S.E2)(L.config.gradient_2,K)})`,
            color: L.config.text_color
          } : {
            backgroundColor: (0, S.E2)(L.config.color, K),
            color: L.config.text_color
          },
          V = [{
            value: "none",
            label: U("dashboard.customize.general.background_effects.none")
          }, {
            value: "dither",
            label: U("dashboard.customize.general.background_effects.dither", {
              premium: q ? "" : U("dashboard.customize.general.premium_only")
            }),
            disabled: !q
          }, {
            value: "plasma",
            label: U("dashboard.customize.general.background_effects.plasma", {
              premium: q ? "" : U("dashboard.customize.general.premium_only")
            }),
            disabled: !q
          }, {
            value: "aurora",
            label: U("dashboard.customize.general.background_effects.aurora")
          }, {
            value: "snowflakes",
            label: U("dashboard.customize.general.background_effects.snowflakes")
          }, {
            value: "rain",
            label: U("dashboard.customize.general.background_effects.rain")
          }, {
            value: "blurred",
            label: U("dashboard.customize.general.background_effects.blurred")
          }, {
            value: "night",
            label: U("dashboard.customize.general.background_effects.night")
          }, {
            value: "tv",
            label: U("dashboard.customize.general.background_effects.tv")
          }],
          ee = (0, t.useMemo)(() => [{
            value: .2,
            label: U("dashboard.customize.general.sliders.opacity.marks.twenty")
          }, {
            value: .5,
            label: U("dashboard.customize.general.sliders.opacity.marks.fifty")
          }, {
            value: .8,
            label: U("dashboard.customize.general.sliders.opacity.marks.eighty")
          }], [U]),
          ea = (0, t.useMemo)(() => [{
            value: 20,
            label: U("dashboard.customize.general.sliders.blur.marks.twenty")
          }, {
            value: 50,
            label: U("dashboard.customize.general.sliders.blur.marks.fifty")
          }, {
            value: 80,
            label: U("dashboard.customize.general.sliders.blur.marks.eighty")
          }], [U]),
          es = {
            none: "none",
            rgb: "rainbow",
            rainbow: "rainbow",
            black: "sparkle_black",
            blue: "sparkle_blue",
            green: "sparkle_green",
            pink: "sparkle_pink",
            red: "sparkle_red",
            white: "sparkle_white",
            yellow: "sparkle_yellow",
            sparkle_black: "sparkle_black",
            sparkle_blue: "sparkle_blue",
            sparkle_green: "sparkle_green",
            sparkle_pink: "sparkle_pink",
            sparkle_red: "sparkle_red",
            sparkle_white: "sparkle_white",
            sparkle_yellow: "sparkle_yellow",
            typewriter: "typewriter",
            fuzzy: "fuzzy",
            shuffle: "shuffle"
          },
          er = (0, t.useMemo)(() => [{
            urlName: "typewriter",
            image: !1,
            name: U("dashboard.customize.general.username_effects.list.typewriter"),
            premium: !0
          }, {
            urlName: "rainbow",
            image: !1,
            name: U("dashboard.customize.general.username_effects.list.rainbow"),
            premium: !1
          }, {
            urlName: "fuzzy",
            image: !1,
            name: U("dashboard.customize.general.username_effects.list.fuzzy"),
            premium: !1
          }, {
            urlName: "shuffle",
            image: !1,
            name: U("dashboard.customize.general.username_effects.list.shuffle"),
            premium: !1
          }, {
            urlName: "sparkle_black",
            image: !0,
            name: U("dashboard.customize.general.username_effects.list.sparkle_black"),
            premium: !1
          }, {
            urlName: "sparkle_blue",
            image: !0,
            name: U("dashboard.customize.general.username_effects.list.sparkle_blue"),
            premium: !1
          }, {
            urlName: "sparkle_green",
            image: !0,
            name: U("dashboard.customize.general.username_effects.list.sparkle_green"),
            premium: !1
          }, {
            urlName: "sparkle_pink",
            image: !0,
            name: U("dashboard.customize.general.username_effects.list.sparkle_pink"),
            premium: !1
          }, {
            urlName: "sparkle_red",
            image: !0,
            name: U("dashboard.customize.general.username_effects.list.sparkle_red"),
            premium: !1
          }, {
            urlName: "sparkle_white",
            image: !0,
            name: U("dashboard.customize.general.username_effects.list.sparkle_white"),
            premium: !1
          }, {
            urlName: "sparkle_yellow",
            image: !0,
            name: U("dashboard.customize.general.username_effects.list.sparkle_yellow"),
            premium: !1
          }], [U]),
          et = (0, t.useMemo)(() => ({
            rainbow: U("dashboard.customize.general.username_effects.samples.rainbow"),
            typewriter: U("dashboard.customize.general.username_effects.samples.typewriter"),
            fuzzy: U("dashboard.customize.general.username_effects.samples.fuzzy"),
            shuffle: U("dashboard.customize.general.username_effects.samples.shuffle")
          }), [U]);
        (0, t.useEffect)(() => {
          if ("" !== x) {
            let e = es[x],
              a = er.find(a => a.urlName === e),
              s = !!a && a.premium;
            X({
              urlName: e,
              name: a?.name,
              premium: s,
              image: a?.image
            })
          }
        }, [x, er]);
        let eo = (e, a, s, r) => {
            X({
              urlName: e,
              name: a,
              premium: s,
              image: r
            })
          },
          ei = () => {
            C(J.urlName, () => Y(!1))
          },
          en = e => {
            "username" === e ? w(!k) : "socials" === e ? $(!I) : "badges" === e && B(!F)
          };
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(j.A, {
            opened: H,
            onClose: () => Y(!1),
            centered: !0,
            size: "auto",
            title: G[W],
            bodyClassName: "usernameEffects" === W ? i().usernameEffectsModalBody : void 0,
            children: "usernameEffects" === W && (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsxs)("div", {
                className: i().usernameEffectsModalContent,
                children: [(0, r.jsxs)("div", {
                  className: i().usernameEffects,
                  children: [(0, r.jsxs)("div", {
                    className: i().usernameEffectsSelection,
                    children: [(0, r.jsx)("div", {
                      className: `${i().usernameEffect} ${"none"===J.urlName&&i().selectedEffect}`,
                      onClick: () => eo("none", U("dashboard.customize.general.username_effects.none"), !1, !1),
                      children: (0, r.jsxs)("div", {
                        className: i().noUsernameEffect,
                        children: [d.A.none, (0, r.jsx)("span", {
                          children: U("dashboard.customize.general.username_effects.none")
                        })]
                      })
                    }), er.map((e, a) => (0, r.jsxs)("div", {
                      className: `${i().usernameEffect} ${J.urlName===e.urlName&&i().selectedEffect}`,
                      onClick: () => eo(e.urlName, e.name, e.premium, e.image),
                      children: [e.premium && (0, r.jsx)("div", {
                        className: i().premiumOnly,
                        children: L.premium ? d.A.premium : d.A.lock
                      }), e.image ? (0, r.jsx)("img", {
                        src: `https://assets.guns.lol/${e.urlName}.gif`,
                        alt: "Username effect preview"
                      }) : "rainbow" === e.urlName ? (0, r.jsx)("h1", {
                        className: i().rainbowName,
                        children: et.rainbow
                      }) : "typewriter" === e.urlName ? (0, r.jsx)(A(), {
                        options: {
                          strings: et.typewriter,
                          autoStart: !0,
                          loop: !0,
                          pauseFor: 1e3,
                          stringSplitter: S.dz
                        }
                      }) : "fuzzy" === e.urlName ? (0, r.jsx)(M.A, {
                        username: et.fuzzy,
                        usernameEffect: "fuzzy",
                        textColor: "#fafafa",
                        fontSize: "22px"
                      }) : "shuffle" === e.urlName && (0, r.jsx)(M.A, {
                        username: et.shuffle,
                        usernameEffect: "shuffle",
                        textColor: "#fafafa",
                        fontSize: "22px"
                      })]
                    }, a))]
                  }), (0, r.jsx)("div", {
                    className: i().usernameEffectsPreview,
                    children: (0, r.jsxs)("div", {
                      className: i().usernameEffectsPreviewInnerWrapper,
                      children: [(0, r.jsx)("div", {
                        className: i().userBackground,
                        style: Q,
                        children: J.image ? (0, r.jsx)("h1", {
                          className: i().usernameEffectPreviewTitle,
                          style: {
                            backgroundImage: "" !== J ? `url(https://assets.guns.lol/${J.urlName}.gif)` : ""
                          },
                          children: Z
                        }) : "rainbow" === J.urlName ? (0, r.jsx)("h1", {
                          className: i().rainbowName,
                          children: Z
                        }) : "typewriter" === J.urlName ? (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)("style", {
                            children: `.${i().userBackground} .Typewriter {
                                                        font-size: 22px;
                                                        margin: 21px 0;
                                                    }
                                                    `
                          }), (0, r.jsx)(A(), {
                            options: {
                              strings: Z,
                              autoStart: !0,
                              loop: !0,
                              stringSplitter: S.dz
                            }
                          })]
                        }) : "fuzzy" === J.urlName ? (0, r.jsx)(M.A, {
                          username: Z,
                          usernameEffect: "fuzzy",
                          textColor: L.config.text_color,
                          fontSize: "23px"
                        }) : "shuffle" === J.urlName ? (0, r.jsx)(M.A, {
                          username: Z,
                          usernameEffect: "shuffle",
                          textColor: L.config.text_color,
                          fontSize: "24px"
                        }) : (0, r.jsx)("h1", {
                          children: Z
                        })
                      }), "none" === J.urlName ? (0, r.jsxs)("div", {
                        className: i().usernameEffectSelected,
                        children: [(0, r.jsx)("h1", {
                          children: U("dashboard.customize.general.username_effects.preview.no_effect_title")
                        }), (0, r.jsx)("span", {
                          children: U("dashboard.customize.general.username_effects.preview.no_effect_description")
                        })]
                      }) : "" !== J && (0, r.jsxs)("div", {
                        className: i().usernameEffectSelected,
                        children: [(0, r.jsx)("h1", {
                          children: J.name
                        }), (0, r.jsx)("span", {
                          children: U("dashboard.customize.general.username_effects.preview.description", {
                            type: J.premium ? (0, r.jsx)("span", {
                              className: i().premiumTextGradient,
                              children: U("dashboard.customize.general.username_effects.preview.premium_label")
                            }) : U("dashboard.customize.general.username_effects.preview.free_label")
                          })
                        })]
                      })]
                    })
                  })]
                }), (0, r.jsxs)("div", {
                  className: i().usernameEffectsButtonsMobile,
                  children: [(0, r.jsx)("span", {
                    className: i().saveButtonUsernameEffects,
                    onClick: () => Y(!1),
                    children: U("dashboard.customize.general.username_effects.preview.buttons.cancel")
                  }), J.premium && !L.premium ? (0, r.jsx)(v.A, {
                    href: "/pricing",
                    target: "_blank",
                    children: U("dashboard.customize.general.username_effects.preview.buttons.buy")
                  }) : (0, r.jsx)("span", {
                    className: i().saveButtonUsernameEffects,
                    onClick: ei,
                    children: U("dashboard.customize.general.username_effects.preview.buttons.save")
                  })]
                })]
              }), (0, r.jsx)("div", {
                className: i().usernameEffectsModalFooter,
                children: (0, r.jsxs)("div", {
                  className: i().usernameEffectsButtons,
                  children: [(0, r.jsx)("span", {
                    className: i().saveButtonUsernameEffects,
                    onClick: () => Y(!1),
                    children: U("dashboard.customize.general.username_effects.preview.buttons.cancel")
                  }), J.premium && !L.premium ? (0, r.jsx)(v.A, {
                    href: "/pricing",
                    target: "_blank",
                    children: U("dashboard.customize.general.username_effects.preview.buttons.buy")
                  }) : (0, r.jsx)("span", {
                    className: i().saveButtonUsernameEffects,
                    onClick: ei,
                    children: U("dashboard.customize.general.username_effects.preview.buttons.save")
                  })]
                })
              })]
            })
          }), (0, r.jsxs)("div", {
            className: i().generalComponentContainer,
            children: [(0, r.jsxs)("div", {
              className: i().generalComponentLeft,
              children: [(0, r.jsxs)("div", {
                className: i().featureRow,
                children: [L.config.premium.typewriter_enabled && 0 === L.config.premium.typewriter.length || !L.config.premium.typewriter_enabled ? (0, r.jsx)(g.A, {
                  featureName: U("dashboard.customize.general.description.label"),
                  value: e,
                  onChangeFunction: e => {
                    a(e.target.value)
                  },
                  placeholder: U("dashboard.customize.general.description.placeholder"),
                  icon: d.A.description
                }) : (0, r.jsxs)("div", {
                  className: i().descriptionWrapper,
                  children: [(0, r.jsx)("h1", {
                    className: i().description,
                    children: U("dashboard.customize.general.description.label")
                  }), (0, r.jsx)("div", {
                    className: i().descriptionText,
                    children: (0, r.jsx)("h1", {
                      children: U("dashboard.customize.general.description.typewriter_enabled", {
                        link: (0, r.jsx)("a", {
                          href: "/premium",
                          target: "_blank",
                          children: U("dashboard.customize.premium_label")
                        })
                      })
                    })
                  })]
                }), (0, r.jsx)(T.A, {
                  enabled: "enabled" === s,
                  widget: n || R.jW,
                  discordPresenceSettings: {
                    ...R.iz,
                    ...c
                  },
                  isPremium: !!L.premium,
                  discordConnected: !!L.discord,
                  onApply: e => {
                    o(e.enabled ? "enabled" : "disabled"), l(e.widget), u(e.discordPresenceSettings)
                  }
                })]
              }), (0, r.jsxs)("div", {
                className: i().featureRow,
                children: [(0, r.jsx)(z.A, {
                  data: V,
                  featureName: U("dashboard.customize.general.background_effects_field"),
                  value: m,
                  onChangeFunction: p,
                  placeholder: U("dashboard.customize.general.select_placeholder"),
                  icon: d.A.backgroundEffects
                }), (0, r.jsxs)("div", {
                  className: i().usernameEffectsWrapper,
                  children: [(0, r.jsx)("h1", {
                    className: i().usernameEffectsText,
                    children: U("dashboard.customize.general.username_effects.section_title")
                  }), (0, r.jsxs)("span", {
                    className: i().usernameEffectsButton,
                    onClick: () => {
                      O("usernameEffects"), Y(!0)
                    },
                    children: [d.A.backgroundEffects, " ", U("dashboard.customize.general.username_effects.button_label")]
                  })]
                })]
              })]
            }), (0, r.jsxs)("div", {
              className: i().generalComponentRight,
              children: [(0, r.jsxs)("div", {
                className: `${i().featureRow} ${i().sliderDiv}`,
                children: [(0, r.jsx)(E.A, {
                  featureName: U("dashboard.customize.general.sliders.opacity.title"),
                  helpDescription: U("dashboard.customize.general.sliders.opacity.description"),
                  element: (0, r.jsx)(y.A, {
                    value: f,
                    onChangeFunction: b,
                    step: .01,
                    max: 1,
                    min: 0,
                    label: e => `${Math.floor(100*e)}%`,
                    marks: ee
                  })
                }), (0, r.jsx)(E.A, {
                  featureName: U("dashboard.customize.general.sliders.blur.title"),
                  helpDescription: U("dashboard.customize.general.sliders.blur.description"),
                  element: (0, r.jsx)(y.A, {
                    value: _,
                    onChangeFunction: N,
                    step: 1,
                    max: 100,
                    min: 0,
                    label: e => `${e}px`,
                    marks: ea
                  })
                })]
              }), (0, r.jsxs)("div", {
                className: i().featureRow,
                children: [(0, r.jsx)(g.A, {
                  featureName: U("dashboard.customize.general.location.label"),
                  value: P,
                  onChangeFunction: e => {
                    D(e.target.value)
                  },
                  placeholder: U("dashboard.customize.general.location.placeholder"),
                  icon: d.A.locationMarker
                }), (0, r.jsx)(E.A, {
                  featureName: U("dashboard.customize.general.glow.title"),
                  helpDescription: U("dashboard.customize.general.glow.description"),
                  element: (0, r.jsx)("div", {
                    className: i().glowSettings,
                    children: (0, r.jsxs)("div", {
                      className: i().glowSettingsInner,
                      children: [(0, r.jsxs)("div", {
                        className: `${i().glowSetting} ${k&&i().glowSettingEnabled}`,
                        onClick: () => en("username"),
                        children: [d.A.glow, " ", U("dashboard.customize.general.glow.username")]
                      }), (0, r.jsxs)("div", {
                        className: `${i().glowSetting} ${I&&i().glowSettingEnabled}`,
                        onClick: () => en("socials"),
                        children: [d.A.glow, " ", U("dashboard.customize.general.glow.socials")]
                      }), (0, r.jsxs)("div", {
                        className: `${i().glowSetting} ${F&&i().glowSettingEnabled}`,
                        onClick: () => en("badges"),
                        children: [d.A.glow, " ", U("dashboard.customize.general.glow.badges")]
                      })]
                    })
                  })
                })]
              })]
            })]
          })]
        })
      };
      var B = s(9992),
        I = s(30184);
      let $ = new Set(["dither", "plasma", "aurora", "snowflakes", "rain", "blurred", "night", "tv"]),
        L = ({
          accentColor: e,
          setAccentColor: a,
          textColor: s,
          setTextColor: t,
          backgroundColor: o,
          setBackgroundColor: n,
          gradientPrimary: l,
          setGradientPrimary: c,
          gradientSecondary: d,
          setGradientSecondary: u,
          isGradientEnabled: m,
          setGradientEnabled: p,
          setIconColor: g,
          iconColor: f,
          backgroundEffects: b,
          backgroundEffectsColor: x,
          setBackgroundEffectsColor: v
        }) => {
          let j = (0, h.kj)(),
            _ = $.has(b);
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)("div", {
              className: i().generalComponentContainer,
              children: [(0, r.jsxs)("div", {
                className: i().generalComponentLeft,
                children: [(0, r.jsxs)("div", {
                  className: i().featureRow,
                  children: [(0, r.jsx)(I.A, {
                    featureName: j("dashboard.customize.color.fields.accent"),
                    onChangeFunction: a,
                    value: e,
                    placeholder: j("dashboard.customize.color.placeholder")
                  }), (0, r.jsx)(I.A, {
                    featureName: j("dashboard.customize.color.fields.text"),
                    onChangeFunction: t,
                    value: s,
                    placeholder: j("dashboard.customize.color.placeholder")
                  })]
                }), (0, r.jsxs)("div", {
                  className: i().featureRow,
                  children: [(0, r.jsx)(I.A, {
                    featureName: j("dashboard.customize.color.fields.background"),
                    onChangeFunction: n,
                    value: o,
                    placeholder: j("dashboard.customize.color.placeholder")
                  }), (0, r.jsx)(I.A, {
                    featureName: j("dashboard.customize.color.fields.icon"),
                    onChangeFunction: g,
                    value: f,
                    placeholder: j("dashboard.customize.color.placeholder")
                  })]
                }), _ && (0, r.jsx)("div", {
                  className: i().featureRow,
                  children: (0, r.jsx)(I.A, {
                    featureName: j("dashboard.customize.color.fields.background_effect"),
                    onChangeFunction: v,
                    value: x,
                    placeholder: j("dashboard.customize.color.placeholder")
                  })
                })]
              }), (0, r.jsxs)("div", {
                className: i().generalComponentRight,
                children: [(0, r.jsx)("span", {
                  className: m ? i().gradientButtonEnabled : i().gradientButtonDisabled,
                  onClick: function() {
                    m ? p(!1) : p(!0)
                  },
                  children: j(m ? "dashboard.customize.color.gradient.disable_button" : "dashboard.customize.color.gradient.enable_button")
                }), m && (0, r.jsxs)("div", {
                  className: i().featureRow,
                  children: [(0, r.jsx)(I.A, {
                    featureName: j("dashboard.customize.color.gradient.primary"),
                    onChangeFunction: c,
                    value: l,
                    placeholder: j("dashboard.customize.color.placeholder")
                  }), (0, r.jsx)(I.A, {
                    featureName: j("dashboard.customize.color.gradient.secondary"),
                    onChangeFunction: u,
                    value: d,
                    placeholder: j("dashboard.customize.color.placeholder")
                  })]
                })]
              })]
            })
          })
        };
      var P = s(81469);
      let D = ({
        discordAvatar: e,
        setDiscordAvatar: a,
        monochromeIcons: s,
        setMonochromeIcons: t,
        animatedTitle: o,
        setAnimatedTitle: n,
        volumeControl: l,
        setVolumeControl: c,
        swapColors: d,
        setSwapColors: u,
        discordAvatarDecoration: m,
        setDiscordAvatarDecoration: p
      }) => {
        let g = (0, h.kj)();
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            className: i().generalComponentContainer,
            children: (0, r.jsxs)("div", {
              className: `${i().generalComponentLeft} ${i().otherComponent} ${i().otherComponentWrapper}`,
              children: [(0, r.jsxs)("div", {
                className: `${i().featureRow} ${i().otherComponent}`,
                children: [(0, r.jsx)(E.A, {
                  featureName: g("dashboard.customize.other.monochrome_icons.label"),
                  helpDescription: g("dashboard.customize.other.monochrome_icons.description"),
                  element: (0, r.jsx)(P.A, {
                    checked: s,
                    onChangeFunction: e => t(e.currentTarget.checked)
                  })
                }), (0, r.jsx)(P.A, {
                  featureName: g("dashboard.customize.other.animated_title"),
                  checked: o,
                  onChangeFunction: e => n(e.currentTarget.checked)
                }), (0, r.jsx)(E.A, {
                  featureName: g("dashboard.customize.other.swap_box_colors.label"),
                  helpDescription: g("dashboard.customize.other.swap_box_colors.description"),
                  element: (0, r.jsx)(P.A, {
                    checked: d,
                    onChangeFunction: e => u(e.currentTarget.checked)
                  })
                })]
              }), (0, r.jsxs)("div", {
                className: `${i().featureRow} ${i().otherComponent}`,
                children: [(0, r.jsx)(P.A, {
                  featureName: g("dashboard.customize.other.volume_control"),
                  checked: l,
                  onChangeFunction: e => c(e.currentTarget.checked)
                }), (0, r.jsx)(P.A, {
                  featureName: g("dashboard.customize.other.use_discord_avatar"),
                  checked: e,
                  onChangeFunction: e => a(e.currentTarget.checked)
                }), (0, r.jsx)(P.A, {
                  featureName: g("dashboard.customize.other.discord_avatar_decoration"),
                  checked: m,
                  onChangeFunction: e => p(e.currentTarget.checked)
                })]
              })]
            })
          })
        })
      };
      var U = s(54834);
      async function W(e, a, s, r, t) {
        try {
          a(U.A.loading);
          let o = /^#[0-9a-fA-F]{6}$/.test(e.background_effects_color ?? ""),
            i = await fetch("https://guns.lol/api/dashboard/customize", {
              method: "POST",
              body: JSON.stringify({
                color: e.color,
                text_color: e.text_color,
                bg_color: e.bg_color,
                icon_color: e.icon_color,
                gradient_1: e.gradient_1,
                gradient_2: e.gradient_2,
                profile_gradient: e.profile_gradient,
                description: e.description,
                presence: e.presence,
                profile_widget: e.profile_widget ?? {
                  type: "discord_presence",
                  value: "",
                  clock_face_style: "dark",
                  clock_hidden: !1,
                  clock_time_format: "24h"
                },
                discord_presence_settings: e.discord_presence_settings ?? {
                  show_badges: !0,
                  show_guild_tag: !0,
                  idle_text: ""
                },
                background_effects: e.background_effects,
                background_effects_color: o ? e.background_effects_color : e.text_color,
                opacity: e.opacity,
                blur: e.blur,
                username_glow: e.username_glow,
                social_glow: e.social_glow ?? !0,
                badge_glow: e.badge_glow,
                use_discord_avatar: e.use_discord_avatar,
                monochrome: e.monochrome,
                animated_title: e.animated_title,
                volume_control: e.volume_control,
                swap_colors: e.swap_colors,
                location: e.location ?? "",
                discord_avatar_decoration: e.discord_avatar_decoration ?? !0
              })
            }),
            n = await i.json();
          i.ok ? (c.oR.success(t("common.unsaved_changes.settings_saved")), setTimeout(() => {
            r(e), s(!1)
          }, 500)) : c.oR.error(n.error)
        } catch (e) {
          console.error(e.message)
        } finally {
          setTimeout(() => {
            a(t("common.unsaved_changes.save_button"))
          }, 500)
        }
      }
      var O = s(39449),
        G = s(60884);
      let H = ({
        data: e
      }) => {
        let a = (0, h.kj)(),
          s = a("common.unsaved_changes.save_button"),
          [o, n] = (0, t.useState)({
            ...e.config
          }),
          [u, m] = (0, t.useState)(o),
          [p, g] = (0, t.useState)(!1),
          [f, b] = (0, t.useState)(s);
        (0, t.useEffect)(() => {
          g(JSON.stringify(u) !== JSON.stringify(o))
        }, [u, o]);
        let x = e => a => {
          m(s => ({
            ...s,
            [e]: a
          }))
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(c.l$, {
            richColors: !0,
            position: "top-center",
            theme: "dark",
            className: l().toasterStyles,
            icons: {
              success: U.A.successToast
            },
            visibleToasts: 2
          }), (0, r.jsx)(O.N, {
            children: p && (0, r.jsx)("div", {
              className: l().unsavedChangesWrapper,
              children: (0, r.jsxs)(G.P.div, {
                className: l().unsavedChangesBar,
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
                children: [(0, r.jsx)("h1", {
                  children: a("common.unsaved_changes.title")
                }), (0, r.jsx)("h1", {
                  className: l().compactText,
                  children: a("common.unsaved_changes.compact")
                }), (0, r.jsxs)("div", {
                  className: l().unsavedChangesButtons,
                  children: [(0, r.jsx)("span", {
                    className: l().resetButton,
                    onClick: () => {
                      m({
                        ...o
                      }), g(!1)
                    },
                    children: a("common.unsaved_changes.reset")
                  }), (0, r.jsx)("span", {
                    className: l().saveButton,
                    onClick: () => W(u, b, g, n, a),
                    children: f
                  })]
                })]
              })
            })
          }), (0, r.jsxs)("div", {
            className: i().featureGap,
            children: [(0, r.jsx)(B.A, {
              featureName: a("dashboard.customize.sections.assets"),
              children: (0, r.jsx)(k, {
                data: e
              })
            }), !e.premium && (0, r.jsx)(v.A, {
              href: "/pricing",
              style: {
                textDecoration: "none"
              },
              target: "_blank",
              children: (0, r.jsx)("div", {
                className: i().premiumAd,
                children: (0, r.jsx)("span", {
                  children: a("dashboard.customize.premium_cta", {
                    premium: (0, r.jsxs)("span", {
                      children: [d.A.premium, " ", a("dashboard.customize.premium_label")]
                    })
                  })
                })
              })
            }), (0, r.jsx)(B.A, {
              featureName: a("dashboard.customize.sections.general"),
              children: (0, r.jsx)(F, {
                description: u.description,
                setDescription: x("description"),
                discordPresence: u.presence,
                setDiscordPresence: x("presence"),
                profileWidget: u.profile_widget,
                setProfileWidget: x("profile_widget"),
                discordPresenceSettings: u.discord_presence_settings,
                setDiscordPresenceSettings: x("discord_presence_settings"),
                backgroundEffects: u.background_effects,
                setBackgroundEffects: x("background_effects"),
                opacity: u.opacity,
                setOpacity: x("opacity"),
                usernameEffects: u.username_effects,
                blur: u.blur,
                setBlur: x("blur"),
                usernameGlow: u.username_glow,
                setUsernameGlow: x("username_glow"),
                socialGlow: u.social_glow,
                setSocialGlow: x("social_glow"),
                badgeGlow: u.badge_glow,
                setBadgeGlow: x("badge_glow"),
                userData: e,
                locationMarker: u.location,
                setLocation: x("location")
              })
            }), (0, r.jsx)(B.A, {
              featureName: a("dashboard.customize.sections.color"),
              children: (0, r.jsx)(L, {
                accentColor: u.color,
                setAccentColor: x("color"),
                textColor: u.text_color,
                setTextColor: x("text_color"),
                backgroundColor: u.bg_color,
                setBackgroundColor: x("bg_color"),
                gradientPrimary: u.gradient_1,
                setGradientPrimary: x("gradient_1"),
                gradientSecondary: u.gradient_2,
                setGradientSecondary: x("gradient_2"),
                isGradientEnabled: u.profile_gradient,
                setGradientEnabled: x("profile_gradient"),
                setIconColor: x("icon_color"),
                iconColor: u.icon_color,
                backgroundEffects: u.background_effects,
                backgroundEffectsColor: u.background_effects_color || u.text_color,
                setBackgroundEffectsColor: x("background_effects_color")
              })
            }), (0, r.jsx)(B.A, {
              featureName: a("dashboard.customize.sections.other"),
              children: (0, r.jsx)(D, {
                discordAvatar: u.use_discord_avatar,
                setDiscordAvatar: x("use_discord_avatar"),
                monochromeIcons: u.monochrome,
                setMonochromeIcons: x("monochrome"),
                animatedTitle: u.animated_title,
                setAnimatedTitle: x("animated_title"),
                volumeControl: u.volume_control,
                setVolumeControl: x("volume_control"),
                swapColors: u.swap_colors,
                setSwapColors: x("swap_colors"),
                discordAvatarDecoration: u.discord_avatar_decoration,
                setDiscordAvatarDecoration: x("discord_avatar_decoration")
              })
            })]
          })]
        })
      }
    },
    59931: e => {
      e.exports = {
        checkboxWrapper: "GUNS__53-fb7620db-5edbb5d3-d5838081",
        checkboxBox: "GUNS__e5-546bd132-f2783efa-b167c221",
        checkmark: "GUNS__37-9c3ca347-1dfc372f-b86cd6fc",
        checkboxContent: "GUNS__ab-99239a2d-372d534a-01c82082",
        label: "GUNS__41-9e476fd0-97f08255-c536c341",
        description: "GUNS__09-9ac6549b-7658a140-3ba7fea8"
      }
    }
  }
]);