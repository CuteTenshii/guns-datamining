(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [803], {
    30803: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => C
      });
      var r = t(95155),
        d = t(12115),
        s = t(43477),
        i = t.n(s),
        n = t(12555),
        c = t(37897),
        o = t(58295),
        l = t(31887),
        f = t.n(l),
        p = t(66609);
      async function u(e) {
        return new Promise((a, t) => {
          let r = new Image,
            d = new FileReader;
          d.onload = e => {
            r.src = e.target.result
          }, r.onload = () => {
            let t = r.width,
              d = r.height;
            if (t > 45 || d > 45) {
              let t = document.createElement("canvas"),
                d = t.getContext("2d");
              t.width = 32, t.height = 32, d.drawImage(r, 0, 0, 32, 32), t.toBlob(t => {
                a(new File([t], e.name, {
                  type: e.type
                }))
              }, e.type)
            } else a(e)
          }, r.onerror = e => t(e), d.onerror = e => t(e), d.readAsDataURL(e)
        })
      }
      async function m(e, a) {
        if (!(!(e.size / 1e6 > 10) || (p.oR.error("Could not upload file. Max file size is 10MB"), 0))) return null;
        "favicon" === a && (e = await u(e));
        let t = new FormData;
        t.append(a, e);
        let r = await fetch(`/api/dashboard/premium/upload/metadata/${a}`, {
            body: t,
            method: "POST"
          }),
          d = await r.json();
        return r.ok ? (p.oR.success(`Successfully uploaded ${a}.`), d.url) : (p.oR.error(d.error), console.error("Failed to upload file:", r.statusText), null)
      }
      async function _(e) {
        try {
          let a = await fetch(`https://guns.lol/api/dashboard/premium/remove/metadata/${e}`, {
            method: "POST"
          });
          if (a.ok) return p.oR.success(`Successfully removed ${e}.`), "success";
          return p.oR.error(`Failed to remove ${e}.`), console.error("Failed to remove file:", a.statusText), null
        } catch (a) {
          return p.oR.error(`Failed to remove ${e}.`), console.error("Error removing file:", a), null
        }
      }
      var b = t(54834);
      async function h(e, a, t, r, d) {
        try {
          a(b.A.loading);
          let s = await fetch("https://guns.lol/api/dashboard/premium/metadata", {
              method: "POST",
              body: JSON.stringify({
                title: e.title,
                description: e.description,
                information_overlay: e.informationOverlay
              })
            }),
            i = await s.json();
          s.ok ? (p.oR.success(d("dashboard.premium.metadata.update_success")), setTimeout(() => {
            r(e), t(!1)
          }, 500)) : p.oR.error(i.error)
        } catch (e) {
          p.oR.error(d("common.unsaved_changes.unknown_error")), console.error(e.message)
        } finally {
          setTimeout(() => {
            a(d("common.unsaved_changes.save_button"))
          }, 500)
        }
      }
      var N = t(81469),
        g = t(57157),
        S = t(98241),
        v = t.n(S),
        x = t(39449),
        U = t(77561),
        G = t(45941),
        j = t(96351);
      let C = ({
        data: e
      }) => {
        let a = (0, j.kj)(),
          t = e.config.premium,
          s = t?.metadata,
          l = e.premium && t.typewriter.length > 0 && t.typewriter_enabled ? t.typewriter[0] : e.config.description,
          u = "" !== e.config.display_name ? e.config.display_name : e.username,
          [S, C] = (0, d.useState)(!1),
          [y, w] = (0, d.useState)(!1),
          [E, A] = (0, d.useState)(s?.image ?? ""),
          [B, P] = (0, d.useState)(s?.favicon ?? ""),
          k = a("dashboard.premium.metadata.default_description"),
          M = "" !== l ? l : k,
          [R, T] = (0, d.useState)({
            title: s?.title ?? "@" + u,
            description: s?.description ?? M,
            informationOverlay: s?.information_overlay ?? !1
          }),
          [W, I] = (0, d.useState)(R),
          [F, D] = (0, d.useState)(!1),
          $ = a("common.unsaved_changes.save_button"),
          [O, L] = (0, d.useState)($);
        (0, d.useEffect)(() => {
          D(JSON.stringify(W) !== JSON.stringify(R))
        }, [W, R]);
        let z = e => a => {
            I(t => ({
              ...t,
              [e]: a
            }))
          },
          H = async (e, t) => {
            "favicon" === t ? C(!0) : w(!0);
            try {
              let r = e.target.files?.[0];
              if (e.target.disabled = !0, !r) return;
              let d = "image" === t ? [".gif", ".png", ".jpeg", ".jpg"] : G.nB.metadata,
                s = Q(r.name).toLowerCase();
              if (!d.includes(s)) {
                p.oR.error(a("dashboard.premium.metadata.invalid_file")), e.target.disabled = !1, e.target.value = "";
                return
              }
              let i = await m(r, t);
              e.target.disabled = !1, i ? "favicon" === t ? P(i) : A(i) : (e.target.value = "", e.target.disabled = !1)
            } finally {
              "favicon" === t ? C(!1) : w(!1)
            }
          }, J = e => {
            null !== _(e) && ("favicon" === e ? P("") : A(""))
          }, Q = e => "." + e.substring(e.lastIndexOf(".") + 1), V = "" !== E ? (0, r.jsx)(N.A, {
            checked: W.informationOverlay,
            onChangeFunction: e => z("informationOverlay")(e.currentTarget.checked)
          }) : (0, r.jsx)("div", {
            className: i().userInformationOverlayText,
            children: (0, r.jsxs)("h1", {
              children: [n.A.image, " ", a("dashboard.premium.metadata.info_overlay.missing_image")]
            })
          });
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(p.l$, {
            richColors: !0,
            position: "top-center",
            theme: "dark",
            className: v().toasterStyles,
            icons: {
              success: b.A.successToast
            },
            visibleToasts: 2
          }), (0, r.jsx)(x.N, {
            children: F && (0, r.jsx)("div", {
              className: v().unsavedChangesWrapper,
              children: (0, r.jsxs)(U.P.div, {
                className: v().unsavedChangesBar,
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
                  className: v().compactText,
                  children: a("common.unsaved_changes.compact")
                }), (0, r.jsxs)("div", {
                  className: v().unsavedChangesButtons,
                  children: [(0, r.jsx)("span", {
                    className: v().resetButton,
                    onClick: () => {
                      I(R), D(!1)
                    },
                    children: a("common.unsaved_changes.reset")
                  }), (0, r.jsx)("span", {
                    className: v().saveButton,
                    onClick: () => {
                      h(W, L, D, T, a)
                    },
                    children: O
                  })]
                })]
              })
            })
          }), (0, r.jsx)("div", {
            className: i().metadataContainerWrapper,
            children: (0, r.jsxs)("div", {
              className: i().metadataContainer,
              children: [(0, r.jsxs)("div", {
                className: i().metadataContainerDescription,
                children: [(0, r.jsxs)("h1", {
                  children: [n.A.metadata, " ", a("dashboard.premium.metadata.section.title")]
                }), (0, r.jsx)("h3", {
                  children: a("dashboard.premium.metadata.section.description")
                })]
              }), (0, r.jsxs)("div", {
                className: i().metadataCustomizationWrapper,
                children: [(0, r.jsxs)("div", {
                  className: i().metadataCustomization,
                  children: [(0, r.jsx)(c.A, {
                    featureName: a("dashboard.premium.metadata.fields.title.label"),
                    icon: n.A.title,
                    placeholder: a("dashboard.premium.metadata.fields.title.placeholder", {
                      handle: `@${u}`
                    }),
                    value: W.title,
                    onChangeFunction: e => {
                      z("title")(e.target.value)
                    },
                    maxLength: 50
                  }), (0, r.jsx)(o.A, {
                    featureName: a("dashboard.premium.metadata.fields.description.label"),
                    placeholder: "" !== l ? l : k,
                    value: W.description,
                    onChangeFunction: e => {
                      z("description")(e.target.value)
                    },
                    maxLength: 150
                  }), (0, r.jsxs)("div", {
                    className: i().imageWrapper,
                    children: [(0, r.jsxs)("div", {
                      className: f().uploadCardWrapper,
                      style: {
                        padding: 3,
                        width: "100%"
                      },
                      children: [(0, r.jsx)("h1", {
                        className: i().websiteImageText,
                        children: a("dashboard.premium.metadata.image.title")
                      }), (0, r.jsx)("div", {
                        className: f().uploadCard,
                        children: "" === E ? y ? (0, r.jsxs)("div", {
                          className: f().uploaderMessage,
                          children: [(0, r.jsx)("span", {
                            children: n.A.loading
                          }), (0, r.jsx)("h1", {
                            children: a("dashboard.premium.metadata.image.uploading")
                          })]
                        }) : (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsxs)("div", {
                            className: f().uploadCardText,
                            children: [n.A.image, (0, r.jsx)("h1", {
                              children: a("dashboard.premium.metadata.image.upload_prompt")
                            })]
                          }), (0, r.jsx)("input", {
                            className: i().fileInputStyle,
                            type: "file",
                            accept: ".png, .jpeg, .jpg, .gif",
                            onChange: e => H(e, "image")
                          })]
                        }) : (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsxs)("div", {
                            className: f().fileBadge,
                            children: [(0, r.jsx)("span", {
                              children: Q(E).toUpperCase()
                            }), (0, r.jsx)("span", {
                              onClick: () => J("image"),
                              children: n.A.deleteFile
                            })]
                          }), (0, r.jsx)("img", {
                            src: E,
                            alt: "Image",
                            className: f().uploadCardImage
                          })]
                        })
                      })]
                    }), (0, r.jsxs)("div", {
                      className: f().uploadCardWrapper,
                      style: {
                        padding: 3,
                        width: "100%"
                      },
                      children: [(0, r.jsx)("h1", {
                        className: i().websiteImageText,
                        children: a("dashboard.premium.metadata.favicon.title")
                      }), (0, r.jsx)("div", {
                        className: f().uploadCard,
                        children: "" === B ? S ? (0, r.jsxs)("div", {
                          className: f().uploaderMessage,
                          children: [(0, r.jsx)("span", {
                            children: n.A.loading
                          }), (0, r.jsx)("h1", {
                            children: a("dashboard.premium.metadata.favicon.uploading")
                          })]
                        }) : (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsxs)("div", {
                            className: f().uploadCardText,
                            children: [n.A.image, (0, r.jsx)("h1", {
                              children: a("dashboard.premium.metadata.favicon.upload_prompt")
                            })]
                          }), (0, r.jsx)("input", {
                            className: i().fileInputStyle,
                            type: "file",
                            accept: ".png, .jpeg, .jpg, .ico",
                            onChange: e => H(e, "favicon")
                          })]
                        }) : (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsxs)("div", {
                            className: f().fileBadge,
                            children: [(0, r.jsx)("span", {
                              children: Q(B).toUpperCase()
                            }), (0, r.jsx)("span", {
                              onClick: () => J("favicon"),
                              children: n.A.deleteFile
                            })]
                          }), (0, r.jsx)("img", {
                            src: B,
                            alt: "Favicon",
                            className: f().uploadCardImage
                          })]
                        })
                      })]
                    })]
                  }), (0, r.jsx)("div", {
                    className: i().switchWrapper,
                    children: (0, r.jsx)(g.A, {
                      featureName: a("dashboard.premium.metadata.info_overlay.label"),
                      helpDescription: a("dashboard.premium.metadata.info_overlay.description"),
                      element: V
                    })
                  })]
                }), (0, r.jsxs)("div", {
                  className: i().metadataPreview,
                  children: [(0, r.jsx)("h1", {
                    className: i().metadataPreviewText,
                    children: a("dashboard.premium.metadata.preview.title")
                  }), (0, r.jsx)("span", {
                    className: i().metadataNotification,
                    children: a("dashboard.premium.metadata.preview.notice")
                  }), (0, r.jsxs)("div", {
                    className: i().preview,
                    children: [(0, r.jsxs)("div", {
                      className: i().previewDescription,
                      children: [(0, r.jsx)("h1", {
                        children: a("dashboard.premium.metadata.preview.title_format", {
                          title: "" !== W.title ? W.title : `@${u}`
                        })
                      }), (0, r.jsx)("span", {
                        children: "" !== W.description ? W.description : M
                      })]
                    }), E ? W.informationOverlay ? (0, r.jsx)("img", {
                      src: `https://og.guns.lol/api/og?username=${e.username}&background=${E}`,
                      alt: ""
                    }) : (0, r.jsx)("img", {
                      src: E,
                      alt: ""
                    }) : (0, r.jsx)("img", {
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
        discordPresence: "GUNS__27-f4f04853-d29471d2-7529b92a",
        description: "GUNS__1d-04a18444-ded8b911-719ca707",
        discordPresenceWrapper: "GUNS__6c-d6cca5f9-97dae699-debd9451",
        descriptionWrapper: "GUNS__de-4dd9b461-5233d28b-6671745a",
        discordPresenceConnect: "GUNS__8e-30ee97b4-4909c413-a65ac464",
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
        discordPresenceSelectWrapper: "GUNS__b3-8ad5e462-8326065f-efda7a7a",
        discordPresenceSettings: "GUNS__ef-001fddd4-d9bd3e1a-78044514",
        discordPresenceSettingsContainer: "GUNS__3e-df8c8265-6a1d7faa-d1a6a41c",
        discordPresenceSettingsSwitchWrapperContainer: "GUNS__c6-cce87869-e9aca86f-843cad86",
        saveDiscordPresenceSettingsButton: "GUNS__84-914b4607-67b5c29a-0755b8a7",
        discordPresenceSettingsDisabled: "GUNS__e0-18d4e26f-e0026206-e4ae06f7",
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
        N: () => h
      });
      var r = t(95155),
        d = t(12115),
        s = t(39551),
        i = t(28819),
        n = t(15131),
        c = t(24866);
      class o extends d.Component {
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

      function l({
        children: e,
        isPresent: a
      }) {
        let t = (0, d.useId)(),
          s = (0, d.useRef)(null),
          i = (0, d.useRef)({
            width: 0,
            height: 0,
            top: 0,
            left: 0
          }),
          {
            nonce: n
          } = (0, d.useContext)(c.Q);
        return (0, d.useInsertionEffect)(() => {
          let {
            width: e,
            height: r,
            top: d,
            left: c
          } = i.current;
          if (a || !s.current || !e || !r) return;
          s.current.dataset.motionPopId = t;
          let o = document.createElement("style");
          return n && (o.nonce = n), document.head.appendChild(o), o.sheet && o.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${d}px !important;
            left: ${c}px !important;
          }
        `), () => {
            document.head.removeChild(o)
          }
        }, [a]), (0, r.jsx)(o, {
          isPresent: a,
          childRef: s,
          sizeRef: i,
          children: d.cloneElement(e, {
            ref: s
          })
        })
      }
      let f = ({
        children: e,
        initial: a,
        isPresent: t,
        onExitComplete: s,
        custom: c,
        presenceAffectsLayout: o,
        mode: f
      }) => {
        let u = (0, i.M)(p),
          m = (0, d.useId)(),
          _ = (0, d.useCallback)(e => {
            for (let a of (u.set(e, !0), u.values()))
              if (!a) return;
            s && s()
          }, [u, s]),
          b = (0, d.useMemo)(() => ({
            id: m,
            initial: a,
            isPresent: t,
            custom: c,
            onExitComplete: _,
            register: e => (u.set(e, !1), () => u.delete(e))
          }), o ? [Math.random(), _] : [t, _]);
        return (0, d.useMemo)(() => {
          u.forEach((e, a) => u.set(a, !1))
        }, [t]), d.useEffect(() => {
          t || u.size || !s || s()
        }, [t]), "popLayout" === f && (e = (0, r.jsx)(l, {
          isPresent: t,
          children: e
        })), (0, r.jsx)(n.t.Provider, {
          value: b,
          children: e
        })
      };

      function p() {
        return new Map
      }
      var u = t(79196);
      let m = e => e.key || "";

      function _(e) {
        let a = [];
        return d.Children.forEach(e, e => {
          (0, d.isValidElement)(e) && a.push(e)
        }), a
      }
      var b = t(4524);
      let h = ({
        children: e,
        custom: a,
        initial: t = !0,
        onExitComplete: n,
        presenceAffectsLayout: c = !0,
        mode: o = "sync",
        propagate: l = !1
      }) => {
        let [p, h] = (0, u.xQ)(l), N = (0, d.useMemo)(() => _(e), [e]), g = l && !p ? [] : N.map(m), S = (0, d.useRef)(!0), v = (0, d.useRef)(N), x = (0, i.M)(() => new Map), [U, G] = (0, d.useState)(N), [j, C] = (0, d.useState)(N);
        (0, b.E)(() => {
          S.current = !1, v.current = N;
          for (let e = 0; e < j.length; e++) {
            let a = m(j[e]);
            g.includes(a) ? x.delete(a) : !0 !== x.get(a) && x.set(a, !1)
          }
        }, [j, g.length, g.join("-")]);
        let y = [];
        if (N !== U) {
          let e = [...N];
          for (let a = 0; a < j.length; a++) {
            let t = j[a],
              r = m(t);
            g.includes(r) || (e.splice(a, 0, t), y.push(t))
          }
          "wait" === o && y.length && (e = y), C(_(e)), G(N);
          return
        }
        let {
          forceRender: w
        } = (0, d.useContext)(s.L);
        return (0, r.jsx)(r.Fragment, {
          children: j.map(e => {
            let d = m(e),
              s = (!l || !!p) && (N === j || g.includes(d));
            return (0, r.jsx)(f, {
              isPresent: s,
              initial: (!S.current || !!t) && void 0,
              custom: s ? void 0 : a,
              presenceAffectsLayout: c,
              mode: o,
              onExitComplete: s ? void 0 : () => {
                if (!x.has(d)) return;
                x.set(d, !0);
                let e = !0;
                x.forEach(a => {
                  a || (e = !1)
                }), e && (null == w || w(), C(v.current), l && (null == h || h()), n && n())
              },
              children: e
            }, d)
          })
        })
      }
    },
    57157: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var r = t(95155),
        d = t(98241),
        s = t.n(d),
        i = t(54834),
        n = t(81576);

      function c({
        featureName: e,
        helpDescription: a,
        element: t,
        id: d
      }) {
        return (0, r.jsxs)("div", {
          className: s().featureName,
          children: [(0, r.jsxs)("h1", {
            className: s().featureNameText,
            style: {
              marginBottom: "6px"
            },
            children: [e, (0, r.jsxs)(n.Ay, {
              width: "370px",
              position: "top",
              id: d,
              children: [(0, r.jsx)(n.Ay.Target, {
                children: i.A.help
              }), (0, r.jsx)(n.Ay.Dropdown, {
                children: (0, r.jsx)("div", {
                  className: s().helpDescription,
                  children: a.split("\n").map((e, a) => (0, r.jsxs)("span", {
                    children: [e, (0, r.jsx)("br", {})]
                  }, a))
                })
              })]
            })]
          }), t]
        })
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
        A: () => p
      });
      var r = t(95155),
        d = t(29722),
        s = t(12115),
        i = t(98241),
        n = t.n(i),
        c = t(73728),
        o = t.n(c),
        l = t(96351);
      let f = ["ar", "he", "fa", "ur"];

      function p({
        featureName: e,
        onChangeFunction: a,
        className: t,
        id: i,
        onChange: c,
        defaultChecked: p,
        disabled: u,
        ...m
      }) {
        let _ = (0, l.useLang)(),
          b = (0, s.useId)(),
          h = f.includes(_) ? "rtl" : "ltr";
        return (0, r.jsxs)("div", {
          className: n().inputContainerWrapper,
          children: [e && (0, r.jsx)("h1", {
            className: n().featureName,
            children: e
          }), (0, r.jsx)("div", {
            className: n().inputWrapperDiv,
            style: {
              direction: h
            },
            children: (0, r.jsxs)("label", {
              className: (0, d.A)(o().switch, t),
              "data-disabled": u,
              "data-direction": h,
              children: [(0, r.jsx)("input", {
                ...m,
                id: i ?? b,
                type: "checkbox",
                className: o().input,
                defaultChecked: p,
                disabled: u,
                onChange: e => {
                  c?.(e), a?.(e)
                }
              }), (0, r.jsx)("span", {
                className: o().track,
                "aria-hidden": "true",
                children: (0, r.jsx)("span", {
                  className: o().thumb
                })
              })]
            })
          })]
        })
      }
    }
  }
]);