(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2552], {
    2805: e => {
      e.exports = {
        socialButtons: "GUNS__32-620ea355-a1cc4a11-0c360b6c",
        compact: "GUNS__ec-11371991-35223594-ec326ace",
        socialButton: "GUNS__98-edf3a2ac-0afd67ed-866e7ec6",
        icon: "GUNS__4e-f5d84cc9-7f32510b-16cf00a0",
        buttonText: "GUNS__f2-79752ffe-3875da3c-c7bacfca",
        lastUsedBadge: "GUNS__6e-53bbcc89-272f7dd5-293a1953"
      }
    },
    5585: e => {
      e.exports = {
        overlay: "GUNS__2a-ec424462-e2d1ad6f-42d31c98",
        modal: "GUNS__c9-9f956df0-2aa75d71-7434650d",
        "overlay-fade-in": "GUNS__28-fac3e645-eb45c253-1613aaec",
        "overlay-fade-out": "GUNS__08-a43818b0-b02ed44f-26fc9b5d",
        "modal-scale-in": "GUNS__f8-f3bfe6a6-ed71fab1-6cb58cec",
        "modal-scale-out": "GUNS__d9-8be0fc70-7c7db8fc-95d242f5",
        header: "GUNS__c6-de21a81f-58192bf7-b172e0ea",
        title: "GUNS__2a-e1e76140-19cae230-28ef5727",
        closeButton: "GUNS__8f-a6cb3991-90ec747f-4d7f9d93",
        body: "GUNS__28-d82a957e-1d95260e-e1b07846"
      }
    },
    6768: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => u
      });
      var c = t(95155),
        r = t(12115),
        s = t(2805),
        d = t.n(s),
        n = t(14079),
        l = t(96351);
      let o = t(87358).env.NEXT_PUBLIC_API_URL || "https://guns.lol",
        i = "guns_last_social_provider",
        f = "guns_last_social_used_at";

      function u({
        returnUri: e,
        setError: a,
        actionLabel: t = "continue",
        usernameHint: s = "",
        refParameter: u = ""
      }) {
        let _ = (0, l.kj)(),
          [h, b] = (0, r.useState)(null),
          [m, p] = (0, r.useState)(null),
          [N, g] = (0, r.useState)(""),
          w = {
            google: {
              continue: _("auth.social.continue_with_google"),
              signup: _("auth.social.signup_with_google"),
              icon: n.A.google
            }
          };
        (0, r.useEffect)(() => {
          let e = window.localStorage.getItem(i),
            a = Number(window.localStorage.getItem(f) || "0");
          "google" === e && a > 0 && (p("google"), g(_("auth.social.last_used")))
        }, []);
        let S = async t => {
          try {
            b(t), a?.("");
            {
              let e = Date.now();
              window.localStorage.setItem(i, t), window.localStorage.setItem(f, String(e))
            }
            let c = new URLSearchParams({
                returnUri: e
              }),
              r = s.toLowerCase().replace(/[^a-z0-9._]/g, "").slice(0, 16);
            r && c.set("usernameHint", r), u && c.set("ref", u);
            let d = await fetch(`${o}/api/auth/oauth/${t}/url?${c.toString()}`);
            if (!d.ok) throw Error("Could not start sign-in");
            let n = await d.json();
            if (!n?.url) throw Error("Missing redirect url");
            window.location.href = n.url
          } catch {
            b(null), a?.(_("auth.social.error_start"))
          }
        };
        return (0, c.jsx)("div", {
          className: d().socialButtons,
          children: ["google"].map(e => {
            let a = w[e],
              r = h === e;
            return (0, c.jsxs)("button", {
              type: "button",
              className: d().socialButton,
              onClick: () => S(e),
              disabled: null !== h,
              children: [a.icon, (0, c.jsx)("span", {
                className: d().buttonText,
                children: r ? _("auth.social.redirecting") : a[t]
              }), "continue" === t && m === e && N && (0, c.jsx)("span", {
                className: d().lastUsedBadge,
                children: N
              })]
            }, e)
          })
        })
      }
    },
    14079: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var c = t(95155);
      t(12115);
      let r = {
        mfaToken: (0, c.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, c.jsx)("path", {
            fill: "currentColor",
            d: "M9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6zm9 15q-2.075 0-3.537-1.463T13 18q0-2.075 1.463-3.537T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23m1.65-2.65l.7-.7l-1.85-1.85V15h-1v3.2zM12.25 22H6q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v1.3q-.5-.175-1-.238T18 11q-2.925 0-4.962 2.038T11 18q0 1.075.338 2.088T12.25 22"
          })
        }),
        discord: (0, c.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, c.jsx)("path", {
            fill: "currentColor",
            d: "M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"
          })
        }),
        google: (0, c.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 256 262",
          children: [(0, c.jsx)("path", {
            fill: "#4285F4",
            d: "M255.68 133.53c0-10.03-.9-19.66-2.57-28.9H130.55v54.68h70.03c-3.02 16.27-12.17 30.06-25.94 39.29v32.66h41.93c24.54-22.6 38.71-55.94 38.71-97.73"
          }), (0, c.jsx)("path", {
            fill: "#34A853",
            d: "M130.55 261.1c35.1 0 64.56-11.63 86.08-31.48l-41.93-32.66c-11.63 7.8-26.51 12.4-44.15 12.4c-33.92 0-62.64-22.9-72.9-53.68H14.3v33.66c21.4 42.52 65.42 71.76 116.25 71.76"
          }), (0, c.jsx)("path", {
            fill: "#FBBC05",
            d: "M57.65 155.68c-2.61-7.8-4.1-16.12-4.1-24.68s1.49-16.88 4.1-24.68V72.66H14.3C5.18 90.84 0 110.2 0 131s5.18 40.16 14.3 58.34z"
          }), (0, c.jsx)("path", {
            fill: "#EA4335",
            d: "M130.55 52.64c19.08 0 36.2 6.56 49.66 19.43l37.25-37.25C195.05 13.97 165.58 0 130.55 0C79.72 0 35.7 29.24 14.3 72.66l43.35 33.66c10.26-30.78 38.98-53.68 72.9-53.68"
          })]
        }),
        email: (0, c.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, c.jsx)("path", {
            fill: "currentColor",
            d: "M13.425 11.9q.275.2.575.2t.575-.2L21 7.425V5l-7 4.85L7 5v2.425zM3 21q-.825 0-1.412-.587T1 19V7.5q0-.425.288-.712T2 6.5q.425 0 .713.288T3 7.5V19h15.5q.425 0 .713.288T19.5 20q0 .425-.288.713T18.5 21zm4-4q-.825 0-1.412-.587T5 15V5q0-.825.588-1.412T7 3h14q.825 0 1.413.588T23 5v10q0 .825-.587 1.413T21 17z"
          })
        }),
        password: (0, c.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 256 256",
          children: (0, c.jsx)("path", {
            fill: "currentColor",
            d: "M160 16a80.07 80.07 0 0 0-76.09 104.78l-57.57 57.56A8 8 0 0 0 24 184v40a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 5.66-2.34l9.56-9.57A80 80 0 1 0 160 16m20 76a16 16 0 1 1 16-16a16 16 0 0 1-16 16"
          })
        }),
        loading: (0, c.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, c.jsxs)("g", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeWidth: "2",
            children: [(0, c.jsx)("path", {
              strokeDasharray: "60",
              strokeDashoffset: "60",
              strokeOpacity: ".3",
              d: "M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z",
              children: (0, c.jsx)("animate", {
                fill: "freeze",
                attributeName: "stroke-dashoffset",
                dur: "1.3s",
                values: "60;0"
              })
            }), (0, c.jsxs)("path", {
              strokeDasharray: "15",
              strokeDashoffset: "15",
              d: "M12 3C16.9706 3 21 7.02944 21 12",
              children: [(0, c.jsx)("animate", {
                fill: "freeze",
                attributeName: "stroke-dashoffset",
                dur: "0.3s",
                values: "15;0"
              }), (0, c.jsx)("animateTransform", {
                attributeName: "transform",
                dur: "1.5s",
                repeatCount: "indefinite",
                type: "rotate",
                values: "0 12 12;360 12 12"
              })]
            })]
          })
        }),
        newLocation: (0, c.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, c.jsx)("path", {
            fill: "currentColor",
            d: "M12 2c3.31 0 6 2.66 6 5.95C18 12.41 12 19 12 19S6 12.41 6 7.95C6 4.66 8.69 2 12 2m0 4a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m8 13c0 2.21-3.58 4-8 4s-8-1.79-8-4c0-1.29 1.22-2.44 3.11-3.17l.64.91C6.67 17.19 6 17.81 6 18.5c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5c0-.69-.67-1.31-1.75-1.76l.64-.91C18.78 16.56 20 17.71 20 19"
          })
        }),
        mfaRecoveryCode: (0, c.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, c.jsx)("path", {
            fill: "currentColor",
            d: "M16.75 8c0-1.478-.33-2.901-1.107-3.975c-.8-1.107-2.03-1.775-3.643-1.775s-2.842.668-3.643 1.775C7.58 5.099 7.25 6.522 7.25 8v1.25h-.58c-.535 0-.98 0-1.345.03c-.38.031-.736.098-1.073.27a2.75 2.75 0 0 0-1.202 1.202c-.172.337-.24.694-.27 1.074c-.03.364-.03.81-.03 1.344v4.66c0 .535 0 .98.03 1.345c.03.38.098.737.27 1.074a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.239 1.073.27c.365.03.81.03 1.345.03h10.66c.535 0 .98 0 1.345-.03c.38-.031.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.202c.172-.337.24-.694.27-1.074c.03-.364.03-.81.03-1.344V13.17c0-.534 0-.98-.03-1.344c-.03-.38-.098-.737-.27-1.074a2.75 2.75 0 0 0-1.2-1.202c-.338-.172-.694-.239-1.074-.27c-.365-.03-.81-.03-1.345-.03h-.58zm-8 0c0-1.283.29-2.36.822-3.096c.51-.703 1.28-1.154 2.428-1.154s1.919.45 2.428 1.154c.532.736.822 1.813.822 3.096v1.25h-6.5zm4 7.25v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 1.5 0M16 14.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75m-7.25.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 1.5 0"
          })
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
    37897: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var c = t(95155),
        r = t(12115),
        s = t(98241),
        d = t.n(s),
        n = t(54834);

      function l({
        featureName: e,
        onChangeFunction: a,
        value: t,
        placeholder: s,
        icon: l,
        prefix: o,
        prefixLength: i,
        viewPassword: f,
        onKeyPress: u,
        isImageUrl: _,
        type: h = "text",
        ...b
      }) {
        let [m, p] = (0, r.useState)(!!f);
        return (0, r.useEffect)(() => {
          p(!!f)
        }, [f]), (0, c.jsxs)("div", {
          className: d().inputContainerWrapper,
          "data-dashboard-feature-label": "string" == typeof e ? e : void 0,
          children: [e && (0, c.jsx)("h1", {
            className: d().featureName,
            children: e
          }), (0, c.jsxs)("div", {
            className: `${d().inputWrapperDiv} ${o&&d().inputWrapperURL}`,
            children: [(0, c.jsxs)("span", {
              className: d().inputWrapperSpan,
              style: {
                position: o ? "absolute" : "static"
              },
              children: [_ ? (0, c.jsx)("img", {
                src: l,
                alt: "icon",
                className: d().inputWrapperIconImage
              }) : l, o && (0, c.jsx)("h1", {
                children: o
              })]
            }), f && (0, c.jsx)("p", {
              onClick: () => {
                p(!m)
              },
              children: m ? n.A.hidePassword : n.A.views
            }), (0, c.jsx)("input", {
              autoCorrect: "false",
              type: f ? m ? "password" : "text" : h,
              onKeyDown: u,
              value: t,
              style: {
                paddingLeft: o ? i : "",
                paddingRight: f ? 47 : ""
              },
              placeholder: s,
              className: d().inputWrapperInput,
              onChange: a,
              ...b
            })]
          })]
        })
      }
    },
    57776: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var c = t(95155),
        r = t(12115),
        s = t(47650),
        d = t(5585),
        n = t.n(d);

      function l({
        opened: e,
        onClose: a,
        onOverlayClose: t,
        onCloseButtonClick: d,
        onEscapeClose: l,
        title: o,
        centered: i = !0,
        size: f = "auto",
        closeOnOverlayClick: u = !0,
        withCloseButton: _ = !0,
        centerTitle: h = !1,
        className: b,
        bodyClassName: m,
        children: p
      }) {
        let [N, g] = (0, r.useState)(e), [w, S] = (0, r.useState)(!1), [v, U] = (0, r.useState)(null), x = (0, r.useRef)(null), G = (0, r.useRef)(null), j = (0, r.useRef)(null), y = (0, r.useRef)(!1), C = e => {
          if (!e) return !1;
          let a = window.getComputedStyle(e).overflowY;
          return e.scrollHeight > e.clientHeight + 1 && ("auto" === a || "scroll" === a)
        }, T = e => {
          let a = G.current;
          if (!a || !e) return null;
          let t = e;
          for (; t && a.contains(t);) {
            if (C(t)) return t;
            t = t.parentElement
          }
          return null
        }, k = (e, a) => a < 0 ? e.scrollTop > 0 : !(a > 0) || e.scrollTop + e.clientHeight < e.scrollHeight;
        if ((0, r.useEffect)(() => {
            if (e) {
              g(!0), S(!1);
              return
            }
            return S(!0), x.current = setTimeout(() => {
              g(!1), S(!1)
            }, 180), () => {
              x.current && (clearTimeout(x.current), x.current = null)
            }
          }, [e]), (0, r.useEffect)(() => {
            if ("undefined" == typeof document) return;
            let e = document.createElement("div");
            return document.body.appendChild(e), U(e), () => {
              document.body.removeChild(e), U(null)
            }
          }, []), (0, r.useEffect)(() => {
            if (!N) return;
            let e = e => {
                "Escape" === e.key ? l ? l() : a() : ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(e.key) && !G.current?.contains(e.target) && e.preventDefault()
              },
              t = e => {
                let a = G.current;
                if (!a) return void e.preventDefault();
                let t = e.target;
                if (!(t && a.contains(t))) return void e.preventDefault();
                if (e instanceof WheelEvent) {
                  let a = T(t);
                  a && k(a, e.deltaY) || e.preventDefault();
                  return
                }
                if (e instanceof TouchEvent) {
                  let a = e.touches[0]?.clientY ?? null,
                    c = j.current;
                  j.current = a;
                  let r = T(t);
                  r && k(r, null !== c && null !== a ? c - a : 0) || e.preventDefault()
                }
              },
              c = {
                passive: !1
              };
            return window.addEventListener("keydown", e, {
              passive: !1
            }), window.addEventListener("wheel", t, c), window.addEventListener("touchmove", t, c), () => {
              window.removeEventListener("keydown", e), window.removeEventListener("wheel", t, c), window.removeEventListener("touchmove", t, c)
            }
          }, [k, T, a, l, N]), (0, r.useEffect)(() => {
            if (!N) return;
            let e = e => {
              if (!G.current?.contains(e.target)) {
                j.current = null;
                return
              }
              j.current = e.touches[0]?.clientY ?? null
            };
            return window.addEventListener("touchstart", e, {
              passive: !0
            }), () => window.removeEventListener("touchstart", e)
          }, [N]), !N || !v) return null;
        let B = "number" == typeof f ? `${f}px` : f,
          L = {};
        B && "auto" !== B ? L.maxWidth = B : (L.width = "fit-content", L.maxWidth = "clamp(100%, 100%, 850px)", L.boxSizing = "border-box");
        let q = w ? "closing" : "open",
          E = (0, c.jsx)("div", {
            className: n().overlay,
            "data-centered": i,
            "data-state": q,
            onMouseDown: e => {
              y.current = e.target === e.currentTarget
            },
            onClick: e => {
              let c = e.target === e.currentTarget,
                r = u && c && y.current;
              y.current = !1, r && (t ? t() : a())
            },
            children: (0, c.jsxs)("div", {
              className: `${n().modal} ${b??""}`,
              "data-state": q,
              style: L,
              ref: G,
              onClick: e => e.stopPropagation(),
              children: [(o || _) && (0, c.jsxs)("div", {
                className: n().header,
                children: [o && (0, c.jsx)("h2", {
                  className: n().title,
                  style: h ? {
                    textAlign: "center",
                    width: "100%"
                  } : {},
                  children: o
                }), _ && (0, c.jsx)("button", {
                  type: "button",
                  className: n().closeButton,
                  onClick: d ?? a,
                  children: (0, c.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1em",
                    height: "1em",
                    viewBox: "7.43 7.45 9.15 9.15",
                    children: (0, c.jsx)("path", {
                      fill: "currentColor",
                      d: "m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"
                    })
                  })
                })]
              }), (0, c.jsx)("div", {
                className: `${n().body} ${m??""}`,
                children: p
              })]
            })
          });
        return (0, s.createPortal)(E, v)
      }
    },
    77570: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var c = t(95155),
        r = t(81934),
        s = t(18943),
        d = t.n(s);

      function n({
        title: e,
        subtitle: a,
        headerAction: t,
        children: s,
        footer: n,
        legal: l
      }) {
        return (0, c.jsx)("div", {
          className: d().page,
          children: (0, c.jsxs)("div", {
            className: d().panel,
            children: [t && (0, c.jsx)("div", {
              className: d().panelHeaderAction,
              children: t
            }), (0, c.jsxs)("div", {
              className: d().brand,
              children: [(0, c.jsx)(r.A, {
                href: "/",
                className: d().brandLink,
                children: (0, c.jsx)("img", {
                  src: "https://assets.guns.lol/guns_logo_no_background_cropped.png",
                  alt: "guns.lol",
                  className: d().brandLogo
                })
              }), (0, c.jsxs)("div", {
                className: d().brandText,
                children: [(0, c.jsx)("h1", {
                  className: d().title,
                  children: e
                }), a && (0, c.jsx)("p", {
                  className: d().subtitle,
                  children: a
                })]
              })]
            }), (0, c.jsx)("div", {
              className: d().body,
              children: s
            }), n && (0, c.jsx)("div", {
              className: d().footer,
              children: n
            }), l && (0, c.jsx)("div", {
              className: d().legal,
              children: l
            })]
          })
        })
      }
    },
    81934: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var c = t(95155),
        r = t(98500),
        s = t.n(r),
        d = t(96351);

      function n({
        href: e,
        asTag: a,
        locale: t,
        children: r,
        ...n
      }) {
        let l = t || (0, d.useLang)();
        if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) return a ? (0, c.jsx)("a", {
          href: e,
          ...n,
          children: r
        }) : (0, c.jsx)(s(), {
          href: e,
          ...n,
          children: r
        });
        let o = "en" == l ? `${e.startsWith("/")?"":"/"}${e}` : `/${l}${e.startsWith("/")?"":"/"}${e}`;
        return a ? (0, c.jsx)("a", {
          href: o,
          ...n,
          children: r
        }) : (0, c.jsx)(s(), {
          href: o,
          ...n,
          children: r
        })
      }
    }
  }
]);