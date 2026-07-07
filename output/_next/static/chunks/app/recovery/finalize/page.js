(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9415], {
    10939: (e, a, c) => {
      Promise.resolve().then(c.bind(c, 17891))
    },
    17891: (e, a, c) => {
      "use strict";
      c.d(a, {
        default: () => b
      });
      var t = c(95155),
        d = c(12115),
        n = c(73321),
        i = c(77570),
        r = c(81934),
        s = c(38256),
        f = c(18943),
        l = c.n(f),
        _ = c(49982),
        o = c.n(_);

      function b() {
        let e = (0, s.kj)(),
          a = (0, n.useRouter)(),
          c = (0, n.useSearchParams)(),
          f = c.get("attempt") || "",
          _ = c.get("token") || "",
          [b, u] = (0, d.useState)(!1),
          [N, S] = (0, d.useState)(""),
          [h, m] = (0, d.useState)(!1),
          [G, U] = (0, d.useState)(""),
          [p, y] = (0, d.useState)(!1),
          v = (0, d.useMemo)(() => !!(f && _), [f, _]);
        (0, d.useEffect)(() => {
          (async () => {
            if (v) try {
              y(!0);
              let e = await fetch("/api/recovery/attempt", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    attemptId: f
                  })
                }),
                a = await e.json();
              if (!e.ok) return;
              U(a.flow?.recoveryType || "")
            } catch {} finally {
              y(!1)
            }
          })()
        }, [f, v]);
        let g = async () => {
          if (v && !b && !h) try {
            u(!0), S("");
            let a = await fetch("/api/recovery/finalize", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  attemptId: f,
                  token: _
                })
              }),
              c = await a.json();
            if (!a.ok) {
              let a = c.error || e("auth.recovery.finalize.errors.unable_finalize");
              if (a.toLowerCase().includes("new email is required")) return void S(e("auth.recovery.finalize.errors.missing_new_email"));
              S(a);
              return
            }
            m(!0)
          } catch {
            S(e("auth.recovery.finalize.errors.unable_finalize"))
          } finally {
            u(!1)
          }
        };
        return v ? h ? (0, t.jsx)(i.A, {
          title: e("auth.recovery.finalize.done_title"),
          subtitle: e("auth.recovery.finalize.done_subtitle"),
          children: (0, t.jsx)("div", {
            className: l().actions,
            children: (0, t.jsx)("button", {
              className: l().primaryButton,
              type: "button",
              onClick: () => a.push("/login"),
              children: e("auth.recovery.finalize.go_to_login")
            })
          })
        }) : (0, t.jsx)(i.A, {
          title: e("auth.recovery.finalize.title"),
          subtitle: e("auth.recovery.finalize.subtitle"),
          children: (0, t.jsxs)("div", {
            className: o().startContainer,
            children: [(0, t.jsxs)("div", {
              className: o().finalizeChangesPanel,
              children: [(0, t.jsx)("h3", {
                className: o().finalizeChangesTitle,
                children: e("auth.recovery.finalize.changes_title")
              }), p ? (0, t.jsx)("p", {
                className: o().finalizeChangesLoading,
                children: e("auth.recovery.finalize.loading_changes")
              }) : (0, t.jsx)("ul", {
                className: o().finalizeChangesList,
                children: ("lost_email_access" === G ? [{
                  id: "new-email",
                  content: e("auth.recovery.finalize.planned.new_email")
                }] : "lost_2fa_device" === G || "lost_recovery_codes" === G ? [{
                  id: "disable-2fa",
                  content: e("auth.recovery.finalize.planned.disable_2fa")
                }] : "lost_email_and_2fa" === G ? [{
                  id: "disable-2fa",
                  content: e("auth.recovery.finalize.planned.disable_2fa")
                }, {
                  id: "new-email",
                  content: e("auth.recovery.finalize.planned.new_email")
                }] : "forgot_email" === G ? [{
                  id: "new-email",
                  content: e("auth.recovery.finalize.planned.new_email")
                }] : "compromised_account" === G ? [{
                  id: "password-reset",
                  content: (0, t.jsxs)(t.Fragment, {
                    children: [e("auth.recovery.finalize.planned.password_reset_prefix"), " ", " ", (0, t.jsx)(r.A, {
                      href: "/reset",
                      className: o().inlineActionLink,
                      children: "/reset"
                    }), "."]
                  })
                }, {
                  id: "new-email",
                  content: e("auth.recovery.finalize.planned.new_email")
                }, {
                  id: "logout-devices",
                  content: e("auth.recovery.finalize.planned.logout_devices")
                }, {
                  id: "disconnect-social",
                  content: e("auth.recovery.finalize.planned.disconnect_social")
                }, {
                  id: "disable-2fa",
                  content: e("auth.recovery.finalize.planned.disable_2fa_if_enabled")
                }] : [{
                  id: "default",
                  content: e("auth.recovery.finalize.planned.default")
                }]).map(e => (0, t.jsxs)("li", {
                  className: o().finalizeChangesItem,
                  children: [(0, t.jsx)("span", {
                    className: o().finalizeChangesDot,
                    children: "•"
                  }), (0, t.jsx)("span", {
                    children: e.content
                  })]
                }, e.id))
              })]
            }), N && (0, t.jsx)("div", {
              className: l().errorBanner,
              children: N
            }), (0, t.jsxs)("div", {
              className: l().actions,
              children: [(0, t.jsx)("button", {
                className: l().secondaryButton,
                type: "button",
                onClick: () => a.push("/login"),
                disabled: b,
                children: e("auth.recovery.finalize.cancel")
              }), (0, t.jsx)("button", {
                className: l().primaryButton,
                type: "button",
                onClick: g,
                disabled: b || p,
                children: b ? e("auth.recovery.finalize.finalizing") : e("auth.recovery.finalize.confirm")
              })]
            })]
          })
        }) : (0, t.jsxs)(i.A, {
          title: e("auth.recovery.finalize.title"),
          subtitle: e("auth.recovery.finalize.subtitle_invalid"),
          children: [(0, t.jsx)("div", {
            className: l().errorBanner,
            children: e("auth.recovery.finalize.errors.missing_info")
          }), (0, t.jsx)("div", {
            className: l().actions,
            children: (0, t.jsx)("button", {
              className: l().primaryButton,
              type: "button",
              onClick: () => a.push("/recovery"),
              children: e("auth.recovery.finalize.back_to_recovery")
            })
          })]
        })
      }
    },
    18943: e => {
      e.exports = {
        page: "GUNS__46-85dd92a2-f2354121-569442c3",
        panel: "GUNS__7b-a367b144-ef9b1f6d-e8949708",
        panelHeaderAction: "GUNS__f3-4ad71b9f-2dac4266-0398c8d4",
        brand: "GUNS__c3-0509edcf-2b9ff916-f83c6df9",
        brandLink: "GUNS__3c-c4bb5e38-d1897d45-fde07dac",
        brandLogo: "GUNS__5c-ad0583a9-794a70e9-ece4e7a7",
        title: "GUNS__00-7f909a44-f8066d24-d9f24204",
        subtitle: "GUNS__54-c6de9bab-e78ba7fe-aceedc06",
        brandText: "GUNS__d4-d66c56ff-06ff9469-1291adca",
        body: "GUNS__0c-256622b4-d9ab2c31-9607b2f5",
        section: "GUNS__4e-bbba0bbb-47ed6541-61af55e9",
        credentialsStack: "GUNS__c9-e0ad0ea0-4819e34d-15ea86aa",
        emailSection: "GUNS__f8-1a70b4d3-f8ea8fab-0d3089cf",
        field: "GUNS__2b-8130d4b6-1af76d1e-5c67477d",
        fieldLabel: "GUNS__97-8184030f-a0be19bb-358f6a39",
        fieldShell: "GUNS__c5-5957cdf8-37311b9b-8d90f3f8",
        fieldInput: "GUNS__41-3784a145-ff7d1e0b-75f09ae3",
        fieldPrefix: "GUNS__90-a6491d0f-1643e71d-dbaf468e",
        fieldInputWithPrefix: "GUNS__fd-588f5ac1-50574dca-ebe0da3f",
        fieldRight: "GUNS__2e-5b411be9-27d87dee-82941852",
        passwordToggle: "GUNS__5a-47f1bd63-9b6e5205-2fa1ab63",
        passwordReveal: "GUNS__23-642a4d40-40fa70cf-c0a02fb9",
        passwordRevealOpen: "GUNS__c7-17500567-6217f716-7a97ee3b",
        passwordHint: "GUNS__45-266474b7-5a8780b5-04eefd97",
        pwMeter: "GUNS__0c-b21132d1-f45c588b-fe59563f",
        pwBar: "GUNS__6c-948d139c-06d7f063-4f5ed67b",
        pwOn: "GUNS__51-961e427c-0c27b812-a783c55d",
        pwLabel: "GUNS__40-f0a8ca94-bfe90b3e-1047e1a1",
        helperText: "GUNS__69-98aee67d-d0acdc30-c06af962",
        usernameStatus: "GUNS__f6-5b427ee7-5a76537b-e6dea46d",
        usernameStatusIcon: "GUNS__e4-55475029-d829da22-7186cb26",
        usernameStatusSuccess: "GUNS__2f-e1ae8fbb-f9d2da11-90916ae4",
        usernameStatusError: "GUNS__d9-12c8a415-6370ab3d-c61e57e3",
        helperAction: "GUNS__01-8bdf03da-e20dff75-b7c96152",
        captchaWrapper: "GUNS__5a-a82dc899-d180ac69-24f39e38",
        actions: "GUNS__dc-7f2135d9-1eea7e1b-b51c7e91",
        registerButton: "GUNS__c8-96145e08-8d7f6703-0b6bf39f",
        primaryButton: "GUNS__10-6a2580d7-b98eee00-f385b67c",
        secondaryButton: "GUNS__f6-66a2fa30-ce94b151-5bb7e563",
        ghostButton: "GUNS__5a-d4078f9d-9f841810-20db6dc0",
        divider: "GUNS__b4-a2cbd7fc-66a2cd35-0960df23",
        inlineLink: "GUNS__e6-75cdf462-19e99fde-0268b026",
        footer: "GUNS__e4-6071c658-d2b0f2b7-e53e57b5",
        legal: "GUNS__c6-87364632-9e6c7623-b96c1e71",
        errorBanner: "GUNS__2a-a7973ff3-7cbcb4d2-9e607fec",
        agreementList: "GUNS__f7-b2506e9d-5ad54acc-a17de706",
        agreement: "GUNS__7d-04109ec2-3718b181-c07a8ae6",
        metaRow: "GUNS__1f-c77455b9-ac469be4-f87f6d43",
        metaRowWrap: "GUNS__00-d88c62d6-92f5f060-d1d481d8",
        subtleText: "GUNS__3e-c2d572cb-58743bcb-2df8e4f5",
        centeredStack: "GUNS__a3-76a9fc98-97b5d80d-7d593425",
        loadingIcon: "GUNS__43-90338eb0-a185e4f3-c6708f91",
        loadingMessage: "GUNS__b1-4991f7f7-2c10a839-835b671f",
        footerButton: "GUNS__b0-1fa9e72c-ce09a97a-c9f5113e",
        modalStack: "GUNS__99-379e6dbe-fe588d17-fcdd703a",
        modalTextBlock: "GUNS__cd-07a99d77-549a643f-db49651b",
        modalTitle: "GUNS__95-f530aba2-c320b062-f2c552e7",
        modalDescription: "GUNS__42-a9143a80-c38e682b-0566da5c",
        socialButton: "GUNS__22-72e4f54d-28217121-a57c7370",
        socialLastUsedBadge: "GUNS__6e-c2d7ec2d-4a2d732f-27005715",
        summaryCard: "GUNS__2a-3577845c-bdff22dd-b868672c",
        summaryCardButton: "GUNS__94-7a8c75e6-69c9c8cc-768bc580",
        stepBackButton: "GUNS__25-bb6b5ef1-4b5586a0-05b41ca6",
        stepBackIcon: "GUNS__6c-ab3996a5-b61a3a52-527ec341",
        summaryGrid: "GUNS__ff-703b7764-0486dad4-79567f96",
        providerRow: "GUNS__5d-a3873266-0472efe3-a0476bef",
        summaryInfoBlock: "GUNS__b9-face83f1-28428d73-63bc927a",
        summaryHeader: "GUNS__0e-bccaf896-7e4328c8-1ca95153",
        summaryLabel: "GUNS__b7-30d67775-73d1fcb8-87ee4cef",
        summaryLabelPlain: "GUNS__15-a8b85626-4d5a9bd5-8cdc23a3",
        summaryValue: "GUNS__ee-9bf8d738-891283cc-75aea248",
        summaryEditAction: "GUNS__e4-ee6e9ce7-a80ed033-13a5116f",
        providerIconWrap: "GUNS__e9-eef25a6c-2cd3dce0-2e89e559",
        providerMeta: "GUNS__da-188f5854-e797e0f5-2687bdfc",
        providerEyebrow: "GUNS__55-ca973a89-e22aa71f-92108d22",
        providerName: "GUNS__1a-2f6ae9b2-810babcb-1fcbf09f",
        usernameSection: "GUNS__8b-5ebd3e81-e7fd2212-221f8255",
        footerContainer: "GUNS__f5-85f750c2-b172755c-dfcf1f52"
      }
    },
    49982: e => {
      e.exports = {
        recoveryCards: "GUNS__5e-0d557c88-14dbf77c-7c8b9b18",
        recoveryCard: "GUNS__9e-8c8ed7a0-91daed06-042363f1",
        cardIcon: "GUNS__fa-870888a3-41ced431-69976c61",
        startContainer: "GUNS__5b-761a0f57-0a72a245-a5e5862d",
        helper: "GUNS__5f-c11e9e70-ea9f1f93-c52fcac0",
        startForm: "GUNS__b3-5cfe527f-09a26f8a-f0ec6c79",
        checklist: "GUNS__45-5784a138-6fe270ee-e343f6b4",
        checklistItem: "GUNS__46-63ee2a12-ff58e5db-11bce2b8",
        checkStatus: "GUNS__49-1a6948fa-d82bdf5c-8402712f",
        checkStatusPass: "GUNS__9e-2c55b8fb-1dc10264-aa77dc4f",
        evidenceGrid: "GUNS__4b-cd81bbff-2989e18b-5b9e71f9",
        messageBox: "GUNS__f5-0d50b4ab-01b24d47-e574ae4f",
        wizardActions: "GUNS__b1-0f468169-94496de0-7c6ff945",
        resultContainer: "GUNS__01-e71f52ef-fbee82c6-1d2aeef2",
        resultTitle: "GUNS__3d-08fdbffa-110c55c5-8fbe9390",
        resultBody: "GUNS__3d-0ba865cd-642c9fd3-12030801",
        resultMeta: "GUNS__29-1973ca05-a4da642b-543c63ee",
        resultActions: "GUNS__b7-3b22f219-221eddcb-8f7ee495",
        contactSupportButton: "GUNS__c7-bc3b8b45-b7d9da39-153ca154",
        oauthButton: "GUNS__db-c1663c2f-5f435fa0-95665a7c",
        oauthInformation: "GUNS__b9-0f02e1f1-aed2f6d3-ac115989",
        recoveryHelper: "GUNS__9b-69a82901-05de711d-a828b6fc",
        finalizeChangesPanel: "GUNS__0b-f161207f-83247a2c-b8b11e9e",
        finalizeChangesTitle: "GUNS__c1-05cea06d-d9937a86-20e7bd9b",
        finalizeChangesLoading: "GUNS__29-fa41f9c4-1d789709-0230cd43",
        finalizeChangesList: "GUNS__57-7eb3557c-7df3f6b1-dd8aa5a1",
        finalizeChangesItem: "GUNS__2e-1a67a3d9-3c6f81c2-ede6f7ef",
        finalizeChangesDot: "GUNS__93-5ee561b7-7dc20d7c-9af3a106",
        inlineActionLink: "GUNS__d4-0f2b7dc1-d271521b-9c261c3b"
      }
    },
    73321: (e, a, c) => {
      "use strict";
      var t = c(74645);
      c.o(t, "redirect") && c.d(a, {
        redirect: function() {
          return t.redirect
        }
      }), c.o(t, "useParams") && c.d(a, {
        useParams: function() {
          return t.useParams
        }
      }), c.o(t, "usePathname") && c.d(a, {
        usePathname: function() {
          return t.usePathname
        }
      }), c.o(t, "useRouter") && c.d(a, {
        useRouter: function() {
          return t.useRouter
        }
      }), c.o(t, "useSearchParams") && c.d(a, {
        useSearchParams: function() {
          return t.useSearchParams
        }
      })
    },
    77570: (e, a, c) => {
      "use strict";
      c.d(a, {
        A: () => r
      });
      var t = c(95155),
        d = c(81934),
        n = c(18943),
        i = c.n(n);

      function r({
        title: e,
        subtitle: a,
        headerAction: c,
        children: n,
        footer: r,
        legal: s
      }) {
        return (0, t.jsx)("div", {
          className: i().page,
          children: (0, t.jsxs)("div", {
            className: i().panel,
            children: [c && (0, t.jsx)("div", {
              className: i().panelHeaderAction,
              children: c
            }), (0, t.jsxs)("div", {
              className: i().brand,
              children: [(0, t.jsx)(d.A, {
                href: "/",
                className: i().brandLink,
                children: (0, t.jsx)("img", {
                  src: "https://assets.guns.lol/guns_logo_no_background_cropped.png",
                  alt: "guns.lol",
                  className: i().brandLogo
                })
              }), (0, t.jsxs)("div", {
                className: i().brandText,
                children: [(0, t.jsx)("h1", {
                  className: i().title,
                  children: e
                }), a && (0, t.jsx)("p", {
                  className: i().subtitle,
                  children: a
                })]
              })]
            }), (0, t.jsx)("div", {
              className: i().body,
              children: n
            }), r && (0, t.jsx)("div", {
              className: i().footer,
              children: r
            }), s && (0, t.jsx)("div", {
              className: i().legal,
              children: s
            })]
          })
        })
      }
    },
    81934: (e, a, c) => {
      "use strict";
      c.d(a, {
        A: () => n
      });
      var t = c(95155),
        d = c(38256);

      function n({
        href: e,
        asTag: a,
        locale: c,
        children: n,
        ...i
      }) {
        let r = c || (0, d.useLang)();
        if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) return (0, t.jsx)("a", {
          href: e,
          ...i,
          children: n
        });
        let s = "en" == r ? `${e.startsWith("/")?"":"/"}${e}` : `/${r}${e.startsWith("/")?"":"/"}${e}`;
        return (0, t.jsx)("a", {
          href: s,
          ...i,
          children: n
        })
      }
    }
  },
  e => {
    e.O(0, [1406, 8256, 8441, 3794, 7358], () => e(e.s = 10939)), _N_E = e.O()
  }
]);