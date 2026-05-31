(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [803], {
    30803: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => S
      });
      var r = t(95155),
        s = t(12115),
        i = t(43477),
        o = t.n(i),
        n = t(12555),
        d = t(37897),
        c = t(58295),
        u = t(31887),
        l = t.n(u),
        m = t(66609);
      async function p(e) {
        return new Promise((a, t) => {
          let r = new Image,
            s = new FileReader;
          s.onload = e => {
            r.src = e.target.result
          }, r.onload = () => {
            let t = r.width,
              s = r.height;
            if (t > 45 || s > 45) {
              let t = document.createElement("canvas"),
                s = t.getContext("2d");
              t.width = 32, t.height = 32, s.drawImage(r, 0, 0, 32, 32), t.toBlob(t => {
                a(new File([t], e.name, {
                  type: e.type
                }))
              }, e.type)
            } else a(e)
          }, r.onerror = e => t(e), s.onerror = e => t(e), s.readAsDataURL(e)
        })
      }
      async function _(e, a) {
        if (!(!(e.size / 1e6 > 10) || (m.oR.error("Could not upload file. Max file size is 10MB"), 0))) return null;
        "favicon" === a && (e = await p(e));
        let t = new FormData;
        t.append(a, e);
        let r = await fetch(`/api/dashboard/premium/upload/metadata/${a}`, {
            body: t,
            method: "POST"
          }),
          s = await r.json();
        return r.ok ? (m.oR.success(`Successfully uploaded ${a}.`), s.url) : (m.oR.error(s.error), console.error("Failed to upload file:", r.statusText), null)
      }
      async function f(e) {
        try {
          let a = await fetch(`https://guns.lol/api/dashboard/premium/remove/metadata/${e}`, {
            method: "POST"
          });
          if (a.ok) return m.oR.success(`Successfully removed ${e}.`), "success";
          return m.oR.error(`Failed to remove ${e}.`), console.error("Failed to remove file:", a.statusText), null
        } catch (a) {
          return m.oR.error(`Failed to remove ${e}.`), console.error("Error removing file:", a), null
        }
      }
      var h = t(54834);
      async function g(e, a, t, r, s) {
        try {
          a(h.A.loading);
          let i = await fetch("https://guns.lol/api/dashboard/premium/metadata", {
              method: "POST",
              body: JSON.stringify({
                title: e.title,
                description: e.description,
                information_overlay: e.informationOverlay
              })
            }),
            o = await i.json();
          i.ok ? (m.oR.success(s("dashboard.premium.metadata.update_success")), setTimeout(() => {
            r(e), t(!1)
          }, 500)) : m.oR.error(o.error)
        } catch (e) {
          m.oR.error(s("common.unsaved_changes.unknown_error")), console.error(e.message)
        } finally {
          setTimeout(() => {
            a(s("common.unsaved_changes.save_button"))
          }, 500)
        }
      }
      var b = t(81469),
        v = t(57157),
        T = t(98241),
        C = t.n(T),
        z = t(39449),
        x = t(60884),
        j = t(45941),
        y = t(38256);
      let S = ({
        data: e
      }) => {
        let a = (0, y.kj)(),
          t = e.config.premium,
          i = t?.metadata,
          u = e.premium && t.typewriter.length > 0 && t.typewriter_enabled ? t.typewriter[0] : e.config.description,
          p = "" !== e.config.display_name ? e.config.display_name : e.username,
          [T, S] = (0, s.useState)(!1),
          [w, E] = (0, s.useState)(!1),
          [B, N] = (0, s.useState)(i?.image ?? ""),
          [P, M] = (0, s.useState)(i?.favicon ?? ""),
          W = a("dashboard.premium.metadata.default_description"),
          A = "" !== u ? u : W,
          [R, I] = (0, s.useState)({
            title: i?.title ?? "@" + p,
            description: i?.description ?? A,
            informationOverlay: i?.information_overlay ?? !1
          }),
          [k, D] = (0, s.useState)(R),
          [F, O] = (0, s.useState)(!1),
          L = a("common.unsaved_changes.save_button"),
          [U, H] = (0, s.useState)(L);
        (0, s.useEffect)(() => {
          O(JSON.stringify(k) !== JSON.stringify(R))
        }, [k, R]);
        let $ = e => a => {
            D(t => ({
              ...t,
              [e]: a
            }))
          },
          G = async (e, t) => {
            "favicon" === t ? S(!0) : E(!0);
            try {
              let r = e.target.files?.[0];
              if (e.target.disabled = !0, !r) return;
              let s = "image" === t ? [".gif", ".png", ".jpeg", ".jpg"] : j.nB.metadata,
                i = Y(r.name).toLowerCase();
              if (!s.includes(i)) {
                m.oR.error(a("dashboard.premium.metadata.invalid_file")), e.target.disabled = !1, e.target.value = "";
                return
              }
              let o = await _(r, t);
              e.target.disabled = !1, o ? "favicon" === t ? M(o) : N(o) : (e.target.value = "", e.target.disabled = !1)
            } finally {
              "favicon" === t ? S(!1) : E(!1)
            }
          }, V = e => {
            null !== f(e) && ("favicon" === e ? M("") : N(""))
          }, Y = e => "." + e.substring(e.lastIndexOf(".") + 1), q = "" !== B ? (0, r.jsx)(b.A, {
            checked: k.informationOverlay,
            onChangeFunction: e => $("informationOverlay")(e.currentTarget.checked)
          }) : (0, r.jsx)("div", {
            className: o().userInformationOverlayText,
            children: (0, r.jsxs)("h1", {
              children: [n.A.image, " ", a("dashboard.premium.metadata.info_overlay.missing_image")]
            })
          });
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(m.l$, {
            richColors: !0,
            position: "top-center",
            theme: "dark",
            className: C().toasterStyles,
            icons: {
              success: h.A.successToast
            },
            visibleToasts: 2
          }), (0, r.jsx)(z.N, {
            children: F && (0, r.jsx)("div", {
              className: C().unsavedChangesWrapper,
              children: (0, r.jsxs)(x.P.div, {
                className: C().unsavedChangesBar,
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
                  className: C().compactText,
                  children: a("common.unsaved_changes.compact")
                }), (0, r.jsxs)("div", {
                  className: C().unsavedChangesButtons,
                  children: [(0, r.jsx)("span", {
                    className: C().resetButton,
                    onClick: () => {
                      D(R), O(!1)
                    },
                    children: a("common.unsaved_changes.reset")
                  }), (0, r.jsx)("span", {
                    className: C().saveButton,
                    onClick: () => {
                      g(k, H, O, I, a)
                    },
                    children: U
                  })]
                })]
              })
            })
          }), (0, r.jsx)("div", {
            className: o().metadataContainerWrapper,
            children: (0, r.jsxs)("div", {
              className: o().metadataContainer,
              children: [(0, r.jsxs)("div", {
                className: o().metadataContainerDescription,
                children: [(0, r.jsxs)("h1", {
                  children: [n.A.metadata, " ", a("dashboard.premium.metadata.section.title")]
                }), (0, r.jsx)("h3", {
                  children: a("dashboard.premium.metadata.section.description")
                })]
              }), (0, r.jsxs)("div", {
                className: o().metadataCustomizationWrapper,
                children: [(0, r.jsxs)("div", {
                  className: o().metadataCustomization,
                  children: [(0, r.jsx)(d.A, {
                    featureName: a("dashboard.premium.metadata.fields.title.label"),
                    icon: n.A.title,
                    placeholder: a("dashboard.premium.metadata.fields.title.placeholder", {
                      handle: `@${p}`
                    }),
                    value: k.title,
                    onChangeFunction: e => {
                      $("title")(e.target.value)
                    },
                    maxLength: 50
                  }), (0, r.jsx)(c.A, {
                    featureName: a("dashboard.premium.metadata.fields.description.label"),
                    placeholder: "" !== u ? u : W,
                    value: k.description,
                    onChangeFunction: e => {
                      $("description")(e.target.value)
                    },
                    maxLength: 150
                  }), (0, r.jsxs)("div", {
                    className: o().imageWrapper,
                    children: [(0, r.jsxs)("div", {
                      className: l().uploadCardWrapper,
                      style: {
                        padding: 3,
                        width: "100%"
                      },
                      children: [(0, r.jsx)("h1", {
                        className: o().websiteImageText,
                        children: a("dashboard.premium.metadata.image.title")
                      }), (0, r.jsx)("div", {
                        className: l().uploadCard,
                        children: "" === B ? w ? (0, r.jsxs)("div", {
                          className: l().uploaderMessage,
                          children: [(0, r.jsx)("span", {
                            children: n.A.loading
                          }), (0, r.jsx)("h1", {
                            children: a("dashboard.premium.metadata.image.uploading")
                          })]
                        }) : (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsxs)("div", {
                            className: l().uploadCardText,
                            children: [n.A.image, (0, r.jsx)("h1", {
                              children: a("dashboard.premium.metadata.image.upload_prompt")
                            })]
                          }), (0, r.jsx)("input", {
                            className: o().fileInputStyle,
                            type: "file",
                            accept: ".png, .jpeg, .jpg, .gif",
                            onChange: e => G(e, "image")
                          })]
                        }) : (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsxs)("div", {
                            className: l().fileBadge,
                            children: [(0, r.jsx)("span", {
                              children: Y(B).toUpperCase()
                            }), (0, r.jsx)("span", {
                              onClick: () => V("image"),
                              children: n.A.deleteFile
                            })]
                          }), (0, r.jsx)("img", {
                            src: B,
                            alt: "Image",
                            className: l().uploadCardImage
                          })]
                        })
                      })]
                    }), (0, r.jsxs)("div", {
                      className: l().uploadCardWrapper,
                      style: {
                        padding: 3,
                        width: "100%"
                      },
                      children: [(0, r.jsx)("h1", {
                        className: o().websiteImageText,
                        children: a("dashboard.premium.metadata.favicon.title")
                      }), (0, r.jsx)("div", {
                        className: l().uploadCard,
                        children: "" === P ? T ? (0, r.jsxs)("div", {
                          className: l().uploaderMessage,
                          children: [(0, r.jsx)("span", {
                            children: n.A.loading
                          }), (0, r.jsx)("h1", {
                            children: a("dashboard.premium.metadata.favicon.uploading")
                          })]
                        }) : (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsxs)("div", {
                            className: l().uploadCardText,
                            children: [n.A.image, (0, r.jsx)("h1", {
                              children: a("dashboard.premium.metadata.favicon.upload_prompt")
                            })]
                          }), (0, r.jsx)("input", {
                            className: o().fileInputStyle,
                            type: "file",
                            accept: ".png, .jpeg, .jpg, .ico",
                            onChange: e => G(e, "favicon")
                          })]
                        }) : (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsxs)("div", {
                            className: l().fileBadge,
                            children: [(0, r.jsx)("span", {
                              children: Y(P).toUpperCase()
                            }), (0, r.jsx)("span", {
                              onClick: () => V("favicon"),
                              children: n.A.deleteFile
                            })]
                          }), (0, r.jsx)("img", {
                            src: P,
                            alt: "Favicon",
                            className: l().uploadCardImage
                          })]
                        })
                      })]
                    })]
                  }), (0, r.jsx)("div", {
                    className: o().switchWrapper,
                    children: (0, r.jsx)(v.A, {
                      featureName: a("dashboard.premium.metadata.info_overlay.label"),
                      helpDescription: a("dashboard.premium.metadata.info_overlay.description"),
                      element: q
                    })
                  })]
                }), (0, r.jsxs)("div", {
                  className: o().metadataPreview,
                  children: [(0, r.jsx)("h1", {
                    className: o().metadataPreviewText,
                    children: a("dashboard.premium.metadata.preview.title")
                  }), (0, r.jsx)("span", {
                    className: o().metadataNotification,
                    children: a("dashboard.premium.metadata.preview.notice")
                  }), (0, r.jsxs)("div", {
                    className: o().preview,
                    children: [(0, r.jsxs)("div", {
                      className: o().previewDescription,
                      children: [(0, r.jsx)("h1", {
                        children: a("dashboard.premium.metadata.preview.title_format", {
                          title: "" !== k.title ? k.title : `@${p}`
                        })
                      }), (0, r.jsx)("span", {
                        children: "" !== k.description ? k.description : A
                      })]
                    }), B ? k.informationOverlay ? (0, r.jsx)("img", {
                      src: `https://og.guns.lol/api/og?username=${e.username}&background=${B}`,
                      alt: ""
                    }) : (0, r.jsx)("img", {
                      src: B,
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
        uploadCardWrapper: "customizeTab_uploadCardWrapper__NjzQ_",
        uploadCard: "customizeTab_uploadCard__iGa_h",
        uploadCardText: "customizeTab_uploadCardText__pxh1_",
        featureContainerSpan: "customizeTab_featureContainerSpan__lBVPQ",
        uploadCardImage: "customizeTab_uploadCardImage__4VFCa",
        fileBadge: "customizeTab_fileBadge__OHzzo",
        audioPlaying: "customizeTab_audioPlaying__D51EJ",
        uploaderMessage: "customizeTab_uploaderMessage__fcBRY",
        featureGap: "customizeTab_featureGap__ZcdL2",
        generalComponentRight: "customizeTab_generalComponentRight__mZ7Ss",
        generalComponentLeft: "customizeTab_generalComponentLeft__prGNi",
        otherComponent: "customizeTab_otherComponent__hInaL",
        generalComponentContainer: "customizeTab_generalComponentContainer__YLMjd",
        sliderDiv: "customizeTab_sliderDiv__ewWcg",
        featureRow: "customizeTab_featureRow__MH40h",
        gradientButtonDisabled: "customizeTab_gradientButtonDisabled__ReVll",
        gradientButtonEnabled: "customizeTab_gradientButtonEnabled__nTy_T",
        otherComponentWrapper: "customizeTab_otherComponentWrapper__BGjok",
        premiumAd: "customizeTab_premiumAd__frnuz",
        discordPresence: "customizeTab_discordPresence__E_qVe",
        description: "customizeTab_description__OkOR5",
        discordPresenceWrapper: "customizeTab_discordPresenceWrapper___gCQ6",
        descriptionWrapper: "customizeTab_descriptionWrapper__9FGY3",
        discordPresenceConnect: "customizeTab_discordPresenceConnect__quUfE",
        descriptionText: "customizeTab_descriptionText__HlPUa",
        usernameEffectsButton: "customizeTab_usernameEffectsButton__ijnhF",
        usernameEffectsText: "customizeTab_usernameEffectsText__6UvYw",
        usernameEffectsWrapper: "customizeTab_usernameEffectsWrapper__6gIdI",
        usernameEffectsModalBody: "customizeTab_usernameEffectsModalBody__t2iSd",
        usernameEffectsModalContent: "customizeTab_usernameEffectsModalContent__Lyiiv",
        usernameEffectsModalFooter: "customizeTab_usernameEffectsModalFooter___m4zk",
        usernameEffects: "customizeTab_usernameEffects__31nNg",
        usernameEffectsSelection: "customizeTab_usernameEffectsSelection__u6Y5H",
        usernameEffect: "customizeTab_usernameEffect__4zTCb",
        userBackground: "customizeTab_userBackground__hCXpa",
        usernameEffectsPreview: "customizeTab_usernameEffectsPreview__Xt3Ol",
        usernameEffectSelected: "customizeTab_usernameEffectSelected__B0taN",
        usernameEffectPreviewTitle: "customizeTab_usernameEffectPreviewTitle__VXMGC",
        selectedEffect: "customizeTab_selectedEffect__ljmuD",
        usernameEffectsPreviewInnerWrapper: "customizeTab_usernameEffectsPreviewInnerWrapper__ksWpp",
        saveButtonUsernameEffects: "customizeTab_saveButtonUsernameEffects__UHGfu",
        usernameEffectsButtons: "customizeTab_usernameEffectsButtons__O2kY3",
        premiumOnly: "customizeTab_premiumOnly__p0LCM",
        premiumTextGradient: "customizeTab_premiumTextGradient__xPCWM",
        usernameEffectsButtonsMobile: "customizeTab_usernameEffectsButtonsMobile__grBcx",
        rainbowName: "customizeTab_rainbowName___x3ul",
        rainbowAnimation: "customizeTab_rainbowAnimation__1RvHA",
        noUsernameEffect: "customizeTab_noUsernameEffect__7dXYJ",
        audioManager: "customizeTab_audioManager__jetrM",
        audioManagerBottomWrapper: "customizeTab_audioManagerBottomWrapper__8x7yE",
        addAudioButton: "customizeTab_addAudioButton__RVX_I",
        noAudios: "customizeTab_noAudios__ww7vy",
        audioInput: "customizeTab_audioInput__3V3WP",
        addAudio: "customizeTab_addAudio__Tha9m",
        addAudioWrapper: "customizeTab_addAudioWrapper__4Javj",
        audioContainer: "customizeTab_audioContainer__qqPmL",
        audioDescription: "customizeTab_audioDescription__yehzK",
        buttonDiv: "customizeTab_buttonDiv__lRyjY",
        audios: "customizeTab_audios___tTe3",
        editButton: "customizeTab_editButton__pm0iQ",
        deleteButton: "customizeTab_deleteButton__mY2U1",
        audiosWrapper: "customizeTab_audiosWrapper__ORu1_",
        audioAmount: "customizeTab_audioAmount__eh3Q5",
        activeAudio: "customizeTab_activeAudio__MMmKJ",
        audioManagerDescription: "customizeTab_audioManagerDescription__pkp7u",
        shuffleSongs: "customizeTab_shuffleSongs__ajcRm",
        shuffleSongsDescription: "customizeTab_shuffleSongsDescription__56qxu",
        audioContainerWrapper: "customizeTab_audioContainerWrapper__4TZNt",
        audioPlayer: "customizeTab_audioPlayer__VqTza",
        audioPlayerDescription: "customizeTab_audioPlayerDescription__efgRg",
        audioManagerSettings: "customizeTab_audioManagerSettings__dAboX",
        audioUploadCardWrapper: "customizeTab_audioUploadCardWrapper__rsWIA",
        audioCover: "customizeTab_audioCover__IaUjp",
        glowSettings: "customizeTab_glowSettings__2HlC2",
        glowSettingsInner: "customizeTab_glowSettingsInner__NYmTd",
        glowSetting: "customizeTab_glowSetting__EuUPa",
        glowSettingEnabled: "customizeTab_glowSettingEnabled__4ibLi",
        unsavedChangesWrapper: "customizeTab_unsavedChangesWrapper__hssE_",
        unsavedChangesBar: "customizeTab_unsavedChangesBar__voa9M",
        unsavedChangesButtons: "customizeTab_unsavedChangesButtons___uDBb",
        discordPresenceSelectWrapper: "customizeTab_discordPresenceSelectWrapper__gVHz0",
        discordPresenceSettings: "customizeTab_discordPresenceSettings__eP7DM",
        discordPresenceSettingsContainer: "customizeTab_discordPresenceSettingsContainer__2BH7O",
        discordPresenceSettingsSwitchWrapperContainer: "customizeTab_discordPresenceSettingsSwitchWrapperContainer__iyRA9",
        saveDiscordPresenceSettingsButton: "customizeTab_saveDiscordPresenceSettingsButton__v7S3b",
        discordPresenceSettingsDisabled: "customizeTab_discordPresenceSettingsDisabled___2jbk",
        avatarCropperModal: "customizeTab_avatarCropperModal__XVA9D",
        avatarCropperStage: "customizeTab_avatarCropperStage__vUsv9",
        avatarCropperImage: "customizeTab_avatarCropperImage__m8Rck",
        avatarCropperGrid: "customizeTab_avatarCropperGrid__2C5q3",
        avatarCropperMask: "customizeTab_avatarCropperMask__m8HI_",
        avatarCropperBottom: "customizeTab_avatarCropperBottom__1LXxP",
        avatarCropperModalBody: "customizeTab_avatarCropperModalBody__5ovtp",
        avatarCropperHint: "customizeTab_avatarCropperHint__brko2",
        avatarCropperHintDesktop: "customizeTab_avatarCropperHintDesktop__Ep39L",
        avatarCropperHintMobile: "customizeTab_avatarCropperHintMobile__j1Tea",
        avatarCropperSliderGroup: "customizeTab_avatarCropperSliderGroup__1i5xI",
        avatarCropperSliderLabel: "customizeTab_avatarCropperSliderLabel__8GbpZ",
        avatarCropperSliderMeta: "customizeTab_avatarCropperSliderMeta__e6ZDu",
        avatarCropperInlineReset: "customizeTab_avatarCropperInlineReset__VwQiI",
        avatarCropperActions: "customizeTab_avatarCropperActions__nbTtn",
        avatarCropperSecondaryButton: "customizeTab_avatarCropperSecondaryButton__PxCU_",
        avatarCropperPrimaryButton: "customizeTab_avatarCropperPrimaryButton__b_3u1",
        avatarCropperRotationSlider: "customizeTab_avatarCropperRotationSlider__J_6cZ",
        avatarCropperZoomSlider: "customizeTab_avatarCropperZoomSlider__V_zqH"
      }
    },
    39449: (e, a, t) => {
      "use strict";
      t.d(a, {
        N: () => g
      });
      var r = t(95155),
        s = t(12115),
        i = t(39551),
        o = t(28819),
        n = t(15131),
        d = t(24866);
      class c extends s.Component {
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

      function u({
        children: e,
        isPresent: a
      }) {
        let t = (0, s.useId)(),
          i = (0, s.useRef)(null),
          o = (0, s.useRef)({
            width: 0,
            height: 0,
            top: 0,
            left: 0
          }),
          {
            nonce: n
          } = (0, s.useContext)(d.Q);
        return (0, s.useInsertionEffect)(() => {
          let {
            width: e,
            height: r,
            top: s,
            left: d
          } = o.current;
          if (a || !i.current || !e || !r) return;
          i.current.dataset.motionPopId = t;
          let c = document.createElement("style");
          return n && (c.nonce = n), document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${s}px !important;
            left: ${d}px !important;
          }
        `), () => {
            document.head.removeChild(c)
          }
        }, [a]), (0, r.jsx)(c, {
          isPresent: a,
          childRef: i,
          sizeRef: o,
          children: s.cloneElement(e, {
            ref: i
          })
        })
      }
      let l = ({
        children: e,
        initial: a,
        isPresent: t,
        onExitComplete: i,
        custom: d,
        presenceAffectsLayout: c,
        mode: l
      }) => {
        let p = (0, o.M)(m),
          _ = (0, s.useId)(),
          f = (0, s.useCallback)(e => {
            for (let a of (p.set(e, !0), p.values()))
              if (!a) return;
            i && i()
          }, [p, i]),
          h = (0, s.useMemo)(() => ({
            id: _,
            initial: a,
            isPresent: t,
            custom: d,
            onExitComplete: f,
            register: e => (p.set(e, !1), () => p.delete(e))
          }), c ? [Math.random(), f] : [t, f]);
        return (0, s.useMemo)(() => {
          p.forEach((e, a) => p.set(a, !1))
        }, [t]), s.useEffect(() => {
          t || p.size || !i || i()
        }, [t]), "popLayout" === l && (e = (0, r.jsx)(u, {
          isPresent: t,
          children: e
        })), (0, r.jsx)(n.t.Provider, {
          value: h,
          children: e
        })
      };

      function m() {
        return new Map
      }
      var p = t(79196);
      let _ = e => e.key || "";

      function f(e) {
        let a = [];
        return s.Children.forEach(e, e => {
          (0, s.isValidElement)(e) && a.push(e)
        }), a
      }
      var h = t(4524);
      let g = ({
        children: e,
        custom: a,
        initial: t = !0,
        onExitComplete: n,
        presenceAffectsLayout: d = !0,
        mode: c = "sync",
        propagate: u = !1
      }) => {
        let [m, g] = (0, p.xQ)(u), b = (0, s.useMemo)(() => f(e), [e]), v = u && !m ? [] : b.map(_), T = (0, s.useRef)(!0), C = (0, s.useRef)(b), z = (0, o.M)(() => new Map), [x, j] = (0, s.useState)(b), [y, S] = (0, s.useState)(b);
        (0, h.E)(() => {
          T.current = !1, C.current = b;
          for (let e = 0; e < y.length; e++) {
            let a = _(y[e]);
            v.includes(a) ? z.delete(a) : !0 !== z.get(a) && z.set(a, !1)
          }
        }, [y, v.length, v.join("-")]);
        let w = [];
        if (b !== x) {
          let e = [...b];
          for (let a = 0; a < y.length; a++) {
            let t = y[a],
              r = _(t);
            v.includes(r) || (e.splice(a, 0, t), w.push(t))
          }
          "wait" === c && w.length && (e = w), S(f(e)), j(b);
          return
        }
        let {
          forceRender: E
        } = (0, s.useContext)(i.L);
        return (0, r.jsx)(r.Fragment, {
          children: y.map(e => {
            let s = _(e),
              i = (!u || !!m) && (b === y || v.includes(s));
            return (0, r.jsx)(l, {
              isPresent: i,
              initial: (!T.current || !!t) && void 0,
              custom: i ? void 0 : a,
              presenceAffectsLayout: d,
              mode: c,
              onExitComplete: i ? void 0 : () => {
                if (!z.has(s)) return;
                z.set(s, !0);
                let e = !0;
                z.forEach(a => {
                  a || (e = !1)
                }), e && (null == E || E(), S(C.current), u && (null == g || g()), n && n())
              },
              children: e
            }, s)
          })
        })
      }
    }
  }
]);