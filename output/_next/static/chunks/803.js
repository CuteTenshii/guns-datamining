(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [803], {
    30803: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => y
      });
      var d = t(95155),
        o = t(12115),
        c = t(43477),
        r = t.n(c),
        i = t(12555),
        f = t(37897),
        n = t(58295),
        _ = t(31887),
        b = t.n(_),
        s = t(66609);
      async function l(e) {
        return new Promise((a, t) => {
          let d = new Image,
            o = new FileReader;
          o.onload = e => {
            d.src = e.target.result
          }, d.onload = () => {
            let t = d.width,
              o = d.height;
            if (t > 45 || o > 45) {
              let t = document.createElement("canvas"),
                o = t.getContext("2d");
              t.width = 32, t.height = 32, o.drawImage(d, 0, 0, 32, 32), t.toBlob(t => {
                a(new File([t], e.name, {
                  type: e.type
                }))
              }, e.type)
            } else a(e)
          }, d.onerror = e => t(e), o.onerror = e => t(e), o.readAsDataURL(e)
        })
      }
      async function p(e, a) {
        if (!(!(e.size / 1e6 > 10) || (s.oR.error("Could not upload file. Max file size is 10MB"), 0))) return null;
        "favicon" === a && (e = await l(e));
        let t = new FormData;
        t.append(a, e);
        let d = await fetch(`/api/dashboard/premium/upload/metadata/${a}`, {
            body: t,
            method: "POST"
          }),
          o = await d.json();
        return d.ok ? (s.oR.success(`Successfully uploaded ${a}.`), o.url) : (s.oR.error(o.error), console.error("Failed to upload file:", d.statusText), null)
      }
      async function S(e) {
        try {
          let a = await fetch(`https://guns.lol/api/dashboard/premium/remove/metadata/${e}`, {
            method: "POST"
          });
          if (a.ok) return s.oR.success(`Successfully removed ${e}.`), "success";
          return s.oR.error(`Failed to remove ${e}.`), console.error("Failed to remove file:", a.statusText), null
        } catch (a) {
          return s.oR.error(`Failed to remove ${e}.`), console.error("Error removing file:", a), null
        }
      }
      var u = t(54834);
      async function N(e, a, t, d, o) {
        try {
          a(u.A.loading);
          let c = await fetch("https://guns.lol/api/dashboard/premium/metadata", {
              method: "POST",
              body: JSON.stringify({
                title: e.title,
                description: e.description,
                information_overlay: e.informationOverlay
              })
            }),
            r = await c.json();
          c.ok ? (s.oR.success(o("dashboard.premium.metadata.update_success")), setTimeout(() => {
            d(e), t(!1)
          }, 500)) : s.oR.error(r.error)
        } catch (e) {
          s.oR.error(o("common.unsaved_changes.unknown_error")), console.error(e.message)
        } finally {
          setTimeout(() => {
            a(o("common.unsaved_changes.save_button"))
          }, 500)
        }
      }
      var U = t(81469),
        G = t(57157),
        m = t(98241),
        g = t.n(m),
        h = t(39449),
        v = t(60884),
        C = t(45941),
        x = t(86891);
      let y = ({
        data: e
      }) => {
        let a = (0, x.kj)(),
          t = e.config.premium,
          c = t?.metadata,
          _ = e.premium && t.typewriter.length > 0 && t.typewriter_enabled ? t.typewriter[0] : e.config.description,
          l = "" !== e.config.display_name ? e.config.display_name : e.username,
          [m, y] = (0, o.useState)(!1),
          [w, j] = (0, o.useState)(!1),
          [T, A] = (0, o.useState)(c?.image ?? ""),
          [B, k] = (0, o.useState)(c?.favicon ?? ""),
          M = a("dashboard.premium.metadata.default_description"),
          R = "" !== _ ? _ : M,
          [E, F] = (0, o.useState)({
            title: c?.title ?? "@" + l,
            description: c?.description ?? R,
            informationOverlay: c?.information_overlay ?? !1
          }),
          [I, P] = (0, o.useState)(E),
          [L, W] = (0, o.useState)(!1),
          D = a("common.unsaved_changes.save_button"),
          [O, H] = (0, o.useState)(D);
        (0, o.useEffect)(() => {
          W(JSON.stringify(I) !== JSON.stringify(E))
        }, [I, E]);
        let z = e => a => {
            P(t => ({
              ...t,
              [e]: a
            }))
          },
          $ = async (e, t) => {
            "favicon" === t ? y(!0) : j(!0);
            try {
              let d = e.target.files?.[0];
              if (e.target.disabled = !0, !d) return;
              let o = "image" === t ? [".gif", ".png", ".jpeg", ".jpg"] : C.nB.metadata,
                c = J(d.name).toLowerCase();
              if (!o.includes(c)) {
                s.oR.error(a("dashboard.premium.metadata.invalid_file")), e.target.disabled = !1, e.target.value = "";
                return
              }
              let r = await p(d, t);
              e.target.disabled = !1, r ? "favicon" === t ? k(r) : A(r) : (e.target.value = "", e.target.disabled = !1)
            } finally {
              "favicon" === t ? y(!1) : j(!1)
            }
          }, V = e => {
            null !== S(e) && ("favicon" === e ? k("") : A(""))
          }, J = e => "." + e.substring(e.lastIndexOf(".") + 1), Q = "" !== T ? (0, d.jsx)(U.A, {
            checked: I.informationOverlay,
            onChangeFunction: e => z("informationOverlay")(e.currentTarget.checked)
          }) : (0, d.jsx)("div", {
            className: r().userInformationOverlayText,
            children: (0, d.jsxs)("h1", {
              children: [i.A.image, " ", a("dashboard.premium.metadata.info_overlay.missing_image")]
            })
          });
        return (0, d.jsxs)(d.Fragment, {
          children: [(0, d.jsx)(s.l$, {
            richColors: !0,
            position: "top-center",
            theme: "dark",
            className: g().toasterStyles,
            icons: {
              success: u.A.successToast
            },
            visibleToasts: 2
          }), (0, d.jsx)(h.N, {
            children: L && (0, d.jsx)("div", {
              className: g().unsavedChangesWrapper,
              children: (0, d.jsxs)(v.P.div, {
                className: g().unsavedChangesBar,
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
                children: [(0, d.jsx)("h1", {
                  children: a("common.unsaved_changes.title")
                }), (0, d.jsx)("h1", {
                  className: g().compactText,
                  children: a("common.unsaved_changes.compact")
                }), (0, d.jsxs)("div", {
                  className: g().unsavedChangesButtons,
                  children: [(0, d.jsx)("span", {
                    className: g().resetButton,
                    onClick: () => {
                      P(E), W(!1)
                    },
                    children: a("common.unsaved_changes.reset")
                  }), (0, d.jsx)("span", {
                    className: g().saveButton,
                    onClick: () => {
                      N(I, H, W, F, a)
                    },
                    children: O
                  })]
                })]
              })
            })
          }), (0, d.jsx)("div", {
            className: r().metadataContainerWrapper,
            children: (0, d.jsxs)("div", {
              className: r().metadataContainer,
              children: [(0, d.jsxs)("div", {
                className: r().metadataContainerDescription,
                children: [(0, d.jsxs)("h1", {
                  children: [i.A.metadata, " ", a("dashboard.premium.metadata.section.title")]
                }), (0, d.jsx)("h3", {
                  children: a("dashboard.premium.metadata.section.description")
                })]
              }), (0, d.jsxs)("div", {
                className: r().metadataCustomizationWrapper,
                children: [(0, d.jsxs)("div", {
                  className: r().metadataCustomization,
                  children: [(0, d.jsx)(f.A, {
                    featureName: a("dashboard.premium.metadata.fields.title.label"),
                    icon: i.A.title,
                    placeholder: a("dashboard.premium.metadata.fields.title.placeholder", {
                      handle: `@${l}`
                    }),
                    value: I.title,
                    onChangeFunction: e => {
                      z("title")(e.target.value)
                    },
                    maxLength: 50
                  }), (0, d.jsx)(n.A, {
                    featureName: a("dashboard.premium.metadata.fields.description.label"),
                    placeholder: "" !== _ ? _ : M,
                    value: I.description,
                    onChangeFunction: e => {
                      z("description")(e.target.value)
                    },
                    maxLength: 150
                  }), (0, d.jsxs)("div", {
                    className: r().imageWrapper,
                    children: [(0, d.jsxs)("div", {
                      className: b().uploadCardWrapper,
                      style: {
                        padding: 3,
                        width: "100%"
                      },
                      children: [(0, d.jsx)("h1", {
                        className: r().websiteImageText,
                        children: a("dashboard.premium.metadata.image.title")
                      }), (0, d.jsx)("div", {
                        className: b().uploadCard,
                        children: "" === T ? w ? (0, d.jsxs)("div", {
                          className: b().uploaderMessage,
                          children: [(0, d.jsx)("span", {
                            children: i.A.loading
                          }), (0, d.jsx)("h1", {
                            children: a("dashboard.premium.metadata.image.uploading")
                          })]
                        }) : (0, d.jsxs)(d.Fragment, {
                          children: [(0, d.jsxs)("div", {
                            className: b().uploadCardText,
                            children: [i.A.image, (0, d.jsx)("h1", {
                              children: a("dashboard.premium.metadata.image.upload_prompt")
                            })]
                          }), (0, d.jsx)("input", {
                            className: r().fileInputStyle,
                            type: "file",
                            accept: ".png, .jpeg, .jpg, .gif",
                            onChange: e => $(e, "image")
                          })]
                        }) : (0, d.jsxs)(d.Fragment, {
                          children: [(0, d.jsxs)("div", {
                            className: b().fileBadge,
                            children: [(0, d.jsx)("span", {
                              children: J(T).toUpperCase()
                            }), (0, d.jsx)("span", {
                              onClick: () => V("image"),
                              children: i.A.deleteFile
                            })]
                          }), (0, d.jsx)("img", {
                            src: T,
                            alt: "Image",
                            className: b().uploadCardImage
                          })]
                        })
                      })]
                    }), (0, d.jsxs)("div", {
                      className: b().uploadCardWrapper,
                      style: {
                        padding: 3,
                        width: "100%"
                      },
                      children: [(0, d.jsx)("h1", {
                        className: r().websiteImageText,
                        children: a("dashboard.premium.metadata.favicon.title")
                      }), (0, d.jsx)("div", {
                        className: b().uploadCard,
                        children: "" === B ? m ? (0, d.jsxs)("div", {
                          className: b().uploaderMessage,
                          children: [(0, d.jsx)("span", {
                            children: i.A.loading
                          }), (0, d.jsx)("h1", {
                            children: a("dashboard.premium.metadata.favicon.uploading")
                          })]
                        }) : (0, d.jsxs)(d.Fragment, {
                          children: [(0, d.jsxs)("div", {
                            className: b().uploadCardText,
                            children: [i.A.image, (0, d.jsx)("h1", {
                              children: a("dashboard.premium.metadata.favicon.upload_prompt")
                            })]
                          }), (0, d.jsx)("input", {
                            className: r().fileInputStyle,
                            type: "file",
                            accept: ".png, .jpeg, .jpg, .ico",
                            onChange: e => $(e, "favicon")
                          })]
                        }) : (0, d.jsxs)(d.Fragment, {
                          children: [(0, d.jsxs)("div", {
                            className: b().fileBadge,
                            children: [(0, d.jsx)("span", {
                              children: J(B).toUpperCase()
                            }), (0, d.jsx)("span", {
                              onClick: () => V("favicon"),
                              children: i.A.deleteFile
                            })]
                          }), (0, d.jsx)("img", {
                            src: B,
                            alt: "Favicon",
                            className: b().uploadCardImage
                          })]
                        })
                      })]
                    })]
                  }), (0, d.jsx)("div", {
                    className: r().switchWrapper,
                    children: (0, d.jsx)(G.A, {
                      featureName: a("dashboard.premium.metadata.info_overlay.label"),
                      helpDescription: a("dashboard.premium.metadata.info_overlay.description"),
                      element: Q
                    })
                  })]
                }), (0, d.jsxs)("div", {
                  className: r().metadataPreview,
                  children: [(0, d.jsx)("h1", {
                    className: r().metadataPreviewText,
                    children: a("dashboard.premium.metadata.preview.title")
                  }), (0, d.jsx)("span", {
                    className: r().metadataNotification,
                    children: a("dashboard.premium.metadata.preview.notice")
                  }), (0, d.jsxs)("div", {
                    className: r().preview,
                    children: [(0, d.jsxs)("div", {
                      className: r().previewDescription,
                      children: [(0, d.jsx)("h1", {
                        children: a("dashboard.premium.metadata.preview.title_format", {
                          title: "" !== I.title ? I.title : `@${l}`
                        })
                      }), (0, d.jsx)("span", {
                        children: "" !== I.description ? I.description : R
                      })]
                    }), T ? I.informationOverlay ? (0, d.jsx)("img", {
                      src: `https://og.guns.lol/api/og?username=${e.username}&background=${T}`,
                      alt: ""
                    }) : (0, d.jsx)("img", {
                      src: T,
                      alt: ""
                    }) : (0, d.jsx)("img", {
                      src: `https://og.guns.lol/api/og?username=${e.username}`,
                      alt: ""
                    })]
                  })]
                })]
              })]
            })
          })]
        })
      }
    },
    31887: e => {
      e.exports = {
        uploadCardWrapper: "GUNS__78-b9db2395-e999a0a0-201d4aa3",
        uploadCard: "GUNS__ff-9901d788-c95dcffe-fe863c5c",
        uploadCardText: "GUNS__94-2218c5f6-b05d1ac2-16f9d47f",
        featureContainerSpan: "GUNS__56-02ad2192-57b9a714-e8269bf5",
        uploadCardImage: "GUNS__ab-10afa642-b9972fef-28a18010",
        fileBadge: "GUNS__b9-5c7ea78c-91625765-16a0f9e6",
        audioPlaying: "GUNS__a7-dc193273-1388d40c-7993c1bb",
        uploaderMessage: "GUNS__13-54dd360c-58493b80-7dcfd4c2",
        featureGap: "GUNS__5c-70334c7d-c4d6d87e-fea893f3",
        generalComponentRight: "GUNS__6b-850887ac-56317e05-1ce5efed",
        generalComponentLeft: "GUNS__cb-d2a408af-2c7de1ee-ace681e2",
        otherComponent: "GUNS__54-d0c36670-3fce8ea5-b9e39f6b",
        generalComponentContainer: "GUNS__b2-05d0e083-46fa21ae-13553283",
        sliderDiv: "GUNS__77-e3a9df1f-cc21fb9f-98ccb3af",
        featureRow: "GUNS__e7-30583c2a-35ba5761-8c9a2b59",
        gradientButtonDisabled: "GUNS__95-d1787b8e-e0736f98-60aeaa8e",
        gradientButtonEnabled: "GUNS__91-3fd49e2b-cffcf2cf-b15e9bb1",
        otherComponentWrapper: "GUNS__2c-ac92991e-8dc5807d-6080a581",
        premiumAd: "GUNS__e2-998b3ddd-1c3b8384-21d9fe8c",
        description: "GUNS__1d-04a18444-ded8b911-719ca707",
        descriptionWrapper: "GUNS__de-4dd9b461-5233d28b-6671745a",
        descriptionText: "GUNS__30-e319d536-b6df15e4-2a1d7e3b",
        usernameEffectsButton: "GUNS__f2-7221abdd-bc6adfef-13518631",
        usernameEffectsText: "GUNS__ff-e8072cb0-ab18ba1a-e16abd39",
        usernameEffectsWrapper: "GUNS__c9-bfd13da0-5d7075d4-d7783a8d",
        usernameEffectsModalBody: "GUNS__95-0e7b3761-d35b8724-88023ca9",
        usernameEffectsModalContent: "GUNS__5a-ec34bbf8-12942231-96adc5fb",
        usernameEffectsModalFooter: "GUNS__36-3a0b80e6-b1cc8686-0d7972c8",
        usernameEffects: "GUNS__e1-3c6e9427-fdcdfa23-315581e4",
        usernameEffectsSelection: "GUNS__83-34e383c4-9ec61eda-c2166b4a",
        usernameEffect: "GUNS__6f-e338cd68-b8a831a2-707f1185",
        userBackground: "GUNS__1b-a406d6d9-09098974-fa701f72",
        usernameEffectsPreview: "GUNS__0d-8e65c78d-38c264d9-1c9094cb",
        usernameEffectSelected: "GUNS__5d-7d172db9-b5f3d0fa-ea56fc8b",
        usernameEffectPreviewTitle: "GUNS__70-514f1f26-31de8fd9-7fe32d54",
        selectedEffect: "GUNS__be-47dc343d-71803c93-10fe152e",
        usernameEffectsPreviewInnerWrapper: "GUNS__c6-a334ff05-74b39924-f7d662c0",
        saveButtonUsernameEffects: "GUNS__8a-5dce6898-30600ca8-5fc8bfc5",
        usernameEffectsButtons: "GUNS__e4-d5600f65-1c2daa31-532e7a92",
        premiumOnly: "GUNS__2c-d216b41f-f6ae9671-d65f25fa",
        premiumTextGradient: "GUNS__45-20371e10-c33df5fd-8382801e",
        usernameEffectsButtonsMobile: "GUNS__eb-2974526d-bcd697df-3637e16e",
        rainbowName: "GUNS__40-ef129a61-3f6dd938-a53a57fc",
        rainbowAnimation: "GUNS__f9-2567f84c-2a4ec79f-1dd67555",
        noUsernameEffect: "GUNS__61-5d9e53dd-df17dccc-a2ae0e82",
        audioManager: "GUNS__82-2060732d-3d5eba93-808c0c15",
        audioManagerBottomWrapper: "GUNS__c8-f348dbe0-a9fbaa30-05997679",
        addAudioButton: "GUNS__13-f50d2abf-247a256d-e92b4702",
        noAudios: "GUNS__87-0b436e52-21a20a44-ee9a8e2e",
        audioInput: "GUNS__75-0f828c81-f95f6d9c-e047dd55",
        addAudio: "GUNS__d6-75e259d9-625adb4b-4043156d",
        addAudioWrapper: "GUNS__ad-48fc1f8f-f811be47-e8658309",
        audioContainer: "GUNS__ac-c23fa93b-263de919-49f1cd68",
        audioDescription: "GUNS__95-914ff56d-46575c58-bc767286",
        buttonDiv: "GUNS__23-673ca874-e6737c50-94f4b051",
        audios: "GUNS__ef-cc9b0310-b7334299-4a87ea94",
        editButton: "GUNS__96-7eaefbdc-5d1cfa2f-6ccbb392",
        deleteButton: "GUNS__2e-559d778e-462b5f2a-f361cb26",
        audiosWrapper: "GUNS__63-00ac4d64-af8286ba-02d5aeda",
        audioAmount: "GUNS__ae-d3e72c10-0711931c-7a045502",
        activeAudio: "GUNS__f7-958deb9e-00cd1a23-f89bf2c7",
        audioManagerDescription: "GUNS__99-17603627-b78f78f8-b58b1b4d",
        shuffleSongs: "GUNS__79-523a508d-15a8b3dc-978d6a62",
        shuffleSongsDescription: "GUNS__4d-e5101e9b-3af9bc94-b5525692",
        audioContainerWrapper: "GUNS__0d-80943a29-f12eea2e-bc71828e",
        audioPlayer: "GUNS__1f-5420ad77-2f552473-d84ba07f",
        audioPlayerDescription: "GUNS__9e-dd2826da-0c1d0558-636784e8",
        audioManagerSettings: "GUNS__69-42fd3e9c-db3280c7-c932e68e",
        audioUploadCardWrapper: "GUNS__80-a08259eb-84c72b21-27e9492f",
        audioCover: "GUNS__4d-26ec9e41-095f5932-45b7a255",
        glowSettings: "GUNS__d4-94ed6e31-f0762014-575da6dc",
        glowSettingsInner: "GUNS__5b-bc0e78a7-34d1a115-4e74d662",
        glowSetting: "GUNS__df-598036df-66e81bb2-50ac36ba",
        glowSettingEnabled: "GUNS__d3-36b7b7ea-e509628d-53e7c140",
        unsavedChangesWrapper: "GUNS__ff-42097a0b-a7866a1f-f69fee32",
        unsavedChangesBar: "GUNS__9b-37b85aeb-2826d13a-3aec7653",
        unsavedChangesButtons: "GUNS__19-8fed3817-56cd3ee3-4021370c",
        avatarCropperModal: "GUNS__f2-a74f4ff7-df77df3e-a3660b12",
        avatarCropperStage: "GUNS__4f-744742ac-d3af0698-69324ee6",
        avatarCropperImage: "GUNS__a1-1f5ad2ee-fc579d78-6799222b",
        avatarCropperGrid: "GUNS__8d-92ba729d-ccdd8272-55b95f5a",
        avatarCropperMask: "GUNS__fb-4bd3a547-085dc552-07c96151",
        avatarCropperBottom: "GUNS__ed-003d3da7-f54e36be-331eb751",
        avatarCropperModalBody: "GUNS__fc-f3c9e8e4-4c92e337-aa4a808e",
        avatarCropperHint: "GUNS__53-8e667406-c8ac4ae7-93ea8dd3",
        avatarCropperHintDesktop: "GUNS__0c-1b2eac35-81221dda-5c38ec9f",
        avatarCropperHintMobile: "GUNS__39-3253d6ab-5ec8b33e-282d4d05",
        avatarCropperSliderGroup: "GUNS__b7-1b323e38-2baae0d0-6bba990f",
        avatarCropperSliderLabel: "GUNS__99-daad1c6f-66420603-3d216fca",
        avatarCropperSliderMeta: "GUNS__c3-b5d6f531-dd9bbcde-5b980600",
        avatarCropperInlineReset: "GUNS__54-a94fbe86-3264a227-fab873bb",
        avatarCropperActions: "GUNS__b1-7b1ad7bf-2d2ce580-2c01cf52",
        avatarCropperSecondaryButton: "GUNS__ae-5649c567-28b4fce4-bed14fe8",
        avatarCropperPrimaryButton: "GUNS__70-7eddbe33-4eb66fea-6217cd6d",
        avatarCropperRotationSlider: "GUNS__28-f18162cc-aba4f872-00ae8eb7",
        avatarCropperZoomSlider: "GUNS__77-b500e5ba-1ca6a830-9dea4897"
      }
    },
    39449: (e, a, t) => {
      "use strict";
      t.d(a, {
        N: () => N
      });
      var d = t(95155),
        o = t(12115),
        c = t(39551),
        r = t(28819),
        i = t(15131),
        f = t(24866);
      class n extends o.Component {
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

      function _({
        children: e,
        isPresent: a
      }) {
        let t = (0, o.useId)(),
          c = (0, o.useRef)(null),
          r = (0, o.useRef)({
            width: 0,
            height: 0,
            top: 0,
            left: 0
          }),
          {
            nonce: i
          } = (0, o.useContext)(f.Q);
        return (0, o.useInsertionEffect)(() => {
          let {
            width: e,
            height: d,
            top: o,
            left: f
          } = r.current;
          if (a || !c.current || !e || !d) return;
          c.current.dataset.motionPopId = t;
          let n = document.createElement("style");
          return i && (n.nonce = i), document.head.appendChild(n), n.sheet && n.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${d}px !important;
            top: ${o}px !important;
            left: ${f}px !important;
          }
        `), () => {
            document.head.removeChild(n)
          }
        }, [a]), (0, d.jsx)(n, {
          isPresent: a,
          childRef: c,
          sizeRef: r,
          children: o.cloneElement(e, {
            ref: c
          })
        })
      }
      let b = ({
        children: e,
        initial: a,
        isPresent: t,
        onExitComplete: c,
        custom: f,
        presenceAffectsLayout: n,
        mode: b
      }) => {
        let l = (0, r.M)(s),
          p = (0, o.useId)(),
          S = (0, o.useCallback)(e => {
            for (let a of (l.set(e, !0), l.values()))
              if (!a) return;
            c && c()
          }, [l, c]),
          u = (0, o.useMemo)(() => ({
            id: p,
            initial: a,
            isPresent: t,
            custom: f,
            onExitComplete: S,
            register: e => (l.set(e, !1), () => l.delete(e))
          }), n ? [Math.random(), S] : [t, S]);
        return (0, o.useMemo)(() => {
          l.forEach((e, a) => l.set(a, !1))
        }, [t]), o.useEffect(() => {
          t || l.size || !c || c()
        }, [t]), "popLayout" === b && (e = (0, d.jsx)(_, {
          isPresent: t,
          children: e
        })), (0, d.jsx)(i.t.Provider, {
          value: u,
          children: e
        })
      };

      function s() {
        return new Map
      }
      var l = t(79196);
      let p = e => e.key || "";

      function S(e) {
        let a = [];
        return o.Children.forEach(e, e => {
          (0, o.isValidElement)(e) && a.push(e)
        }), a
      }
      var u = t(4524);
      let N = ({
        children: e,
        custom: a,
        initial: t = !0,
        onExitComplete: i,
        presenceAffectsLayout: f = !0,
        mode: n = "sync",
        propagate: _ = !1
      }) => {
        let [s, N] = (0, l.xQ)(_), U = (0, o.useMemo)(() => S(e), [e]), G = _ && !s ? [] : U.map(p), m = (0, o.useRef)(!0), g = (0, o.useRef)(U), h = (0, r.M)(() => new Map), [v, C] = (0, o.useState)(U), [x, y] = (0, o.useState)(U);
        (0, u.E)(() => {
          m.current = !1, g.current = U;
          for (let e = 0; e < x.length; e++) {
            let a = p(x[e]);
            G.includes(a) ? h.delete(a) : !0 !== h.get(a) && h.set(a, !1)
          }
        }, [x, G.length, G.join("-")]);
        let w = [];
        if (U !== v) {
          let e = [...U];
          for (let a = 0; a < x.length; a++) {
            let t = x[a],
              d = p(t);
            G.includes(d) || (e.splice(a, 0, t), w.push(t))
          }
          "wait" === n && w.length && (e = w), y(S(e)), C(U);
          return
        }
        let {
          forceRender: j
        } = (0, o.useContext)(c.L);
        return (0, d.jsx)(d.Fragment, {
          children: x.map(e => {
            let o = p(e),
              c = (!_ || !!s) && (U === x || G.includes(o));
            return (0, d.jsx)(b, {
              isPresent: c,
              initial: (!m.current || !!t) && void 0,
              custom: c ? void 0 : a,
              presenceAffectsLayout: f,
              mode: n,
              onExitComplete: c ? void 0 : () => {
                if (!h.has(o)) return;
                h.set(o, !0);
                let e = !0;
                h.forEach(a => {
                  a || (e = !1)
                }), e && (null == j || j(), y(g.current), _ && (null == N || N()), i && i())
              },
              children: e
            }, o)
          })
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