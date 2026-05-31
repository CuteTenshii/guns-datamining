(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2552], {
    2805: e => {
      e.exports = {
        socialButtons: "authSocialButtons_socialButtons__IMxvB",
        compact: "authSocialButtons_compact__lH7Z0",
        socialButton: "authSocialButtons_socialButton__ehef5",
        icon: "authSocialButtons_icon__WZ8Ky",
        buttonText: "authSocialButtons_buttonText__EggMW",
        lastUsedBadge: "authSocialButtons_lastUsedBadge__XapKy"
      }
    },
    5585: e => {
      e.exports = {
        overlay: "modalWrapper_overlay__YYEDi",
        modal: "modalWrapper_modal__M1y6L",
        "overlay-fade-in": "modalWrapper_overlay-fade-in__xCPl5",
        "overlay-fade-out": "modalWrapper_overlay-fade-out__MSx7M",
        "modal-scale-in": "modalWrapper_modal-scale-in__Ld0gl",
        "modal-scale-out": "modalWrapper_modal-scale-out__IUp7n",
        header: "modalWrapper_header__cjFZs",
        title: "modalWrapper_title__RzvAM",
        closeButton: "modalWrapper_closeButton__Z8MLT",
        body: "modalWrapper_body__AsTAG"
      }
    },
    6768: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => d
      });
      var r = a(95155),
        n = a(12115),
        i = a(2805),
        s = a.n(i),
        o = a(14079),
        l = a(38256);
      let c = a(87358).env.NEXT_PUBLIC_API_URL || "https://guns.lol",
        u = "guns_last_social_provider",
        _ = "guns_last_social_used_at";

      function d({
        returnUri: e,
        setError: t,
        actionLabel: a = "continue",
        usernameHint: i = "",
        refParameter: d = ""
      }) {
        let h = (0, l.kj)(),
          [p, m] = (0, n.useState)(null),
          [x, g] = (0, n.useState)(null),
          [w, v] = (0, n.useState)(""),
          f = {
            google: {
              continue: h("auth.social.continue_with_google"),
              signup: h("auth.social.signup_with_google"),
              icon: o.A.google
            }
          };
        (0, n.useEffect)(() => {
          let e = window.localStorage.getItem(u),
            t = Number(window.localStorage.getItem(_) || "0");
          "google" === e && t > 0 && (g("google"), v(h("auth.social.last_used")))
        }, []);
        let E = async a => {
          try {
            m(a), t?.("");
            {
              let e = Date.now();
              window.localStorage.setItem(u, a), window.localStorage.setItem(_, String(e))
            }
            let r = new URLSearchParams({
                returnUri: e
              }),
              n = i.toLowerCase().replace(/[^a-z0-9._]/g, "").slice(0, 16);
            n && r.set("usernameHint", n), d && r.set("ref", d);
            let s = await fetch(`${c}/api/auth/oauth/${a}/url?${r.toString()}`);
            if (!s.ok) throw Error("Could not start sign-in");
            let o = await s.json();
            if (!o?.url) throw Error("Missing redirect url");
            window.location.href = o.url
          } catch {
            m(null), t?.(h("auth.social.error_start"))
          }
        };
        return (0, r.jsx)("div", {
          className: s().socialButtons,
          children: ["google"].map(e => {
            let t = f[e],
              n = p === e;
            return (0, r.jsxs)("button", {
              type: "button",
              className: s().socialButton,
              onClick: () => E(e),
              disabled: null !== p,
              children: [t.icon, (0, r.jsx)("span", {
                className: s().buttonText,
                children: n ? h("auth.social.redirecting") : t[a]
              }), "continue" === a && x === e && w && (0, r.jsx)("span", {
                className: s().lastUsedBadge,
                children: w
              })]
            }, e)
          })
        })
      }
    },
    14079: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => n
      });
      var r = a(95155);
      a(12115);
      let n = {
        mfaToken: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            d: "M9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6zm9 15q-2.075 0-3.537-1.463T13 18q0-2.075 1.463-3.537T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23m1.65-2.65l.7-.7l-1.85-1.85V15h-1v3.2zM12.25 22H6q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v1.3q-.5-.175-1-.238T18 11q-2.925 0-4.962 2.038T11 18q0 1.075.338 2.088T12.25 22"
          })
        }),
        discord: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            d: "M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"
          })
        }),
        google: (0, r.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 256 262",
          children: [(0, r.jsx)("path", {
            fill: "#4285F4",
            d: "M255.68 133.53c0-10.03-.9-19.66-2.57-28.9H130.55v54.68h70.03c-3.02 16.27-12.17 30.06-25.94 39.29v32.66h41.93c24.54-22.6 38.71-55.94 38.71-97.73"
          }), (0, r.jsx)("path", {
            fill: "#34A853",
            d: "M130.55 261.1c35.1 0 64.56-11.63 86.08-31.48l-41.93-32.66c-11.63 7.8-26.51 12.4-44.15 12.4c-33.92 0-62.64-22.9-72.9-53.68H14.3v33.66c21.4 42.52 65.42 71.76 116.25 71.76"
          }), (0, r.jsx)("path", {
            fill: "#FBBC05",
            d: "M57.65 155.68c-2.61-7.8-4.1-16.12-4.1-24.68s1.49-16.88 4.1-24.68V72.66H14.3C5.18 90.84 0 110.2 0 131s5.18 40.16 14.3 58.34z"
          }), (0, r.jsx)("path", {
            fill: "#EA4335",
            d: "M130.55 52.64c19.08 0 36.2 6.56 49.66 19.43l37.25-37.25C195.05 13.97 165.58 0 130.55 0C79.72 0 35.7 29.24 14.3 72.66l43.35 33.66c10.26-30.78 38.98-53.68 72.9-53.68"
          })]
        }),
        email: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            d: "M13.425 11.9q.275.2.575.2t.575-.2L21 7.425V5l-7 4.85L7 5v2.425zM3 21q-.825 0-1.412-.587T1 19V7.5q0-.425.288-.712T2 6.5q.425 0 .713.288T3 7.5V19h15.5q.425 0 .713.288T19.5 20q0 .425-.288.713T18.5 21zm4-4q-.825 0-1.412-.587T5 15V5q0-.825.588-1.412T7 3h14q.825 0 1.413.588T23 5v10q0 .825-.587 1.413T21 17z"
          })
        }),
        password: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 256 256",
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            d: "M160 16a80.07 80.07 0 0 0-76.09 104.78l-57.57 57.56A8 8 0 0 0 24 184v40a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 5.66-2.34l9.56-9.57A80 80 0 1 0 160 16m20 76a16 16 0 1 1 16-16a16 16 0 0 1-16 16"
          })
        }),
        loading: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, r.jsxs)("g", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeWidth: "2",
            children: [(0, r.jsx)("path", {
              strokeDasharray: "60",
              strokeDashoffset: "60",
              strokeOpacity: ".3",
              d: "M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z",
              children: (0, r.jsx)("animate", {
                fill: "freeze",
                attributeName: "stroke-dashoffset",
                dur: "1.3s",
                values: "60;0"
              })
            }), (0, r.jsxs)("path", {
              strokeDasharray: "15",
              strokeDashoffset: "15",
              d: "M12 3C16.9706 3 21 7.02944 21 12",
              children: [(0, r.jsx)("animate", {
                fill: "freeze",
                attributeName: "stroke-dashoffset",
                dur: "0.3s",
                values: "15;0"
              }), (0, r.jsx)("animateTransform", {
                attributeName: "transform",
                dur: "1.5s",
                repeatCount: "indefinite",
                type: "rotate",
                values: "0 12 12;360 12 12"
              })]
            })]
          })
        }),
        newLocation: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            d: "M12 2c3.31 0 6 2.66 6 5.95C18 12.41 12 19 12 19S6 12.41 6 7.95C6 4.66 8.69 2 12 2m0 4a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m8 13c0 2.21-3.58 4-8 4s-8-1.79-8-4c0-1.29 1.22-2.44 3.11-3.17l.64.91C6.67 17.19 6 17.81 6 18.5c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5c0-.69-.67-1.31-1.75-1.76l.64-.91C18.78 16.56 20 17.71 20 19"
          })
        }),
        mfaRecoveryCode: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            d: "M16.75 8c0-1.478-.33-2.901-1.107-3.975c-.8-1.107-2.03-1.775-3.643-1.775s-2.842.668-3.643 1.775C7.58 5.099 7.25 6.522 7.25 8v1.25h-.58c-.535 0-.98 0-1.345.03c-.38.031-.736.098-1.073.27a2.75 2.75 0 0 0-1.202 1.202c-.172.337-.24.694-.27 1.074c-.03.364-.03.81-.03 1.344v4.66c0 .535 0 .98.03 1.345c.03.38.098.737.27 1.074a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.239 1.073.27c.365.03.81.03 1.345.03h10.66c.535 0 .98 0 1.345-.03c.38-.031.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.202c.172-.337.24-.694.27-1.074c.03-.364.03-.81.03-1.344V13.17c0-.534 0-.98-.03-1.344c-.03-.38-.098-.737-.27-1.074a2.75 2.75 0 0 0-1.2-1.202c-.338-.172-.694-.239-1.074-.27c-.365-.03-.81-.03-1.345-.03h-.58zm-8 0c0-1.283.29-2.36.822-3.096c.51-.703 1.28-1.154 2.428-1.154s1.919.45 2.428 1.154c.532.736.822 1.813.822 3.096v1.25h-6.5zm4 7.25v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 1.5 0M16 14.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75m-7.25.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 1.5 0"
          })
        })
      }
    },
    18943: e => {
      e.exports = {
        page: "authExperience_page__uyui4",
        panel: "authExperience_panel__o274H",
        panelHeaderAction: "authExperience_panelHeaderAction__AFIh3",
        brand: "authExperience_brand__JvheW",
        brandLink: "authExperience_brandLink__iGZej",
        brandLogo: "authExperience_brandLogo__xAwjQ",
        title: "authExperience_title__ZY_r9",
        subtitle: "authExperience_subtitle__BVEpo",
        brandText: "authExperience_brandText__nwJnq",
        body: "authExperience_body__RRr0f",
        section: "authExperience_section__H3G0_",
        credentialsStack: "authExperience_credentialsStack__o2Ozo",
        emailSection: "authExperience_emailSection__kM6az",
        field: "authExperience_field__5TnSj",
        fieldLabel: "authExperience_fieldLabel__z__YD",
        fieldShell: "authExperience_fieldShell__m79Fh",
        fieldInput: "authExperience_fieldInput__RKFOq",
        fieldPrefix: "authExperience_fieldPrefix__fFxyT",
        fieldInputWithPrefix: "authExperience_fieldInputWithPrefix__xlr9G",
        fieldRight: "authExperience_fieldRight__Imjjb",
        passwordToggle: "authExperience_passwordToggle__NQiO8",
        passwordReveal: "authExperience_passwordReveal__aUlDL",
        passwordRevealOpen: "authExperience_passwordRevealOpen__adnex",
        passwordHint: "authExperience_passwordHint___ySzN",
        pwMeter: "authExperience_pwMeter__o9PMU",
        pwBar: "authExperience_pwBar__7AoWu",
        pwOn: "authExperience_pwOn__CQOiB",
        pwLabel: "authExperience_pwLabel__6Zd2E",
        helperText: "authExperience_helperText__jqcdy",
        usernameStatus: "authExperience_usernameStatus__CoJI7",
        usernameStatusIcon: "authExperience_usernameStatusIcon__LEMW5",
        usernameStatusSuccess: "authExperience_usernameStatusSuccess__Q4eqP",
        usernameStatusError: "authExperience_usernameStatusError__6P3HN",
        helperAction: "authExperience_helperAction__o0EoI",
        captchaWrapper: "authExperience_captchaWrapper__9WWV4",
        actions: "authExperience_actions__J9EJe",
        registerButton: "authExperience_registerButton__cL2Wy",
        primaryButton: "authExperience_primaryButton__HxWUI",
        secondaryButton: "authExperience_secondaryButton__XqYqL",
        ghostButton: "authExperience_ghostButton__mOPog",
        divider: "authExperience_divider__mHjuk",
        inlineLink: "authExperience_inlineLink__8LmMO",
        footer: "authExperience_footer__ykUvF",
        legal: "authExperience_legal__olSjY",
        errorBanner: "authExperience_errorBanner__KaM3h",
        agreementList: "authExperience_agreementList__E4rE5",
        agreement: "authExperience_agreement__pQTXH",
        metaRow: "authExperience_metaRow__ujdFv",
        metaRowWrap: "authExperience_metaRowWrap__1njxK",
        subtleText: "authExperience_subtleText__0w1EA",
        centeredStack: "authExperience_centeredStack__ZeaiD",
        loadingIcon: "authExperience_loadingIcon__1VK1t",
        loadingMessage: "authExperience_loadingMessage__5_cL9",
        footerButton: "authExperience_footerButton__OFOio",
        modalStack: "authExperience_modalStack__9d_Yz",
        modalTextBlock: "authExperience_modalTextBlock__okOJJ",
        modalTitle: "authExperience_modalTitle__jBSk5",
        modalDescription: "authExperience_modalDescription__aLThV",
        socialButton: "authExperience_socialButton__87Zsh",
        socialLastUsedBadge: "authExperience_socialLastUsedBadge__a0Z_i",
        summaryCard: "authExperience_summaryCard__1zA4D",
        summaryCardButton: "authExperience_summaryCardButton__SEdaN",
        stepBackButton: "authExperience_stepBackButton__421gK",
        stepBackIcon: "authExperience_stepBackIcon__60Ilt",
        summaryGrid: "authExperience_summaryGrid__rGWr6",
        providerRow: "authExperience_providerRow__JnQMz",
        summaryInfoBlock: "authExperience_summaryInfoBlock__Vh3bw",
        summaryHeader: "authExperience_summaryHeader__oPydf",
        summaryLabel: "authExperience_summaryLabel__YJFdO",
        summaryLabelPlain: "authExperience_summaryLabelPlain__PTLHH",
        summaryValue: "authExperience_summaryValue__Sd8pV",
        summaryEditAction: "authExperience_summaryEditAction__Wtvit",
        providerIconWrap: "authExperience_providerIconWrap__FmJDk",
        providerMeta: "authExperience_providerMeta__M0_Nf",
        providerEyebrow: "authExperience_providerEyebrow__DXppH",
        providerName: "authExperience_providerName__I0VSw",
        usernameSection: "authExperience_usernameSection__GJi1X",
        footerContainer: "authExperience_footerContainer__yskgJ"
      }
    },
    37897: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => l
      });
      var r = a(95155),
        n = a(12115),
        i = a(98241),
        s = a.n(i),
        o = a(54834);

      function l({
        featureName: e,
        onChangeFunction: t,
        value: a,
        placeholder: i,
        icon: l,
        prefix: c,
        prefixLength: u,
        viewPassword: _,
        onKeyPress: d,
        isImageUrl: h,
        type: p = "text",
        ...m
      }) {
        let [x, g] = (0, n.useState)(!!_);
        return (0, n.useEffect)(() => {
          g(!!_)
        }, [_]), (0, r.jsxs)("div", {
          className: s().inputContainerWrapper,
          "data-dashboard-feature-label": "string" == typeof e ? e : void 0,
          children: [e && (0, r.jsx)("h1", {
            className: s().featureName,
            children: e
          }), (0, r.jsxs)("div", {
            className: `${s().inputWrapperDiv} ${c&&s().inputWrapperURL}`,
            children: [(0, r.jsxs)("span", {
              className: s().inputWrapperSpan,
              style: {
                position: c ? "absolute" : "static"
              },
              children: [h ? (0, r.jsx)("img", {
                src: l,
                alt: "icon",
                className: s().inputWrapperIconImage
              }) : l, c && (0, r.jsx)("h1", {
                children: c
              })]
            }), _ && (0, r.jsx)("p", {
              onClick: () => {
                g(!x)
              },
              children: x ? o.A.hidePassword : o.A.views
            }), (0, r.jsx)("input", {
              autoCorrect: "false",
              type: _ ? x ? "password" : "text" : p,
              onKeyDown: d,
              value: a,
              style: {
                paddingLeft: c ? u : "",
                paddingRight: _ ? 47 : ""
              },
              placeholder: i,
              className: s().inputWrapperInput,
              onChange: t,
              ...m
            })]
          })]
        })
      }
    },
    57776: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => l
      });
      var r = a(95155),
        n = a(12115),
        i = a(47650),
        s = a(5585),
        o = a.n(s);

      function l({
        opened: e,
        onClose: t,
        onOverlayClose: a,
        onCloseButtonClick: s,
        onEscapeClose: l,
        title: c,
        centered: u = !0,
        size: _ = "auto",
        closeOnOverlayClick: d = !0,
        withCloseButton: h = !0,
        centerTitle: p = !1,
        className: m,
        bodyClassName: x,
        children: g
      }) {
        let [w, v] = (0, n.useState)(e), [f, E] = (0, n.useState)(!1), [j, y] = (0, n.useState)(null), B = (0, n.useRef)(null), b = (0, n.useRef)(null), T = (0, n.useRef)(null), S = (0, n.useRef)(!1), k = e => {
          if (!e) return !1;
          let t = window.getComputedStyle(e).overflowY;
          return e.scrollHeight > e.clientHeight + 1 && ("auto" === t || "scroll" === t)
        }, L = e => {
          let t = b.current;
          if (!t || !e) return null;
          let a = e;
          for (; a && t.contains(a);) {
            if (k(a)) return a;
            a = a.parentElement
          }
          return null
        }, C = (e, t) => t < 0 ? e.scrollTop > 0 : !(t > 0) || e.scrollTop + e.clientHeight < e.scrollHeight;
        if ((0, n.useEffect)(() => {
            if (e) {
              v(!0), E(!1);
              return
            }
            return E(!0), B.current = setTimeout(() => {
              v(!1), E(!1)
            }, 180), () => {
              B.current && (clearTimeout(B.current), B.current = null)
            }
          }, [e]), (0, n.useEffect)(() => {
            if ("undefined" == typeof document) return;
            let e = document.createElement("div");
            return document.body.appendChild(e), y(e), () => {
              document.body.removeChild(e), y(null)
            }
          }, []), (0, n.useEffect)(() => {
            if (!w) return;
            let e = e => {
                "Escape" === e.key ? l ? l() : t() : ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(e.key) && !b.current?.contains(e.target) && e.preventDefault()
              },
              a = e => {
                let t = b.current;
                if (!t) return void e.preventDefault();
                let a = e.target;
                if (!(a && t.contains(a))) return void e.preventDefault();
                if (e instanceof WheelEvent) {
                  let t = L(a);
                  t && C(t, e.deltaY) || e.preventDefault();
                  return
                }
                if (e instanceof TouchEvent) {
                  let t = e.touches[0]?.clientY ?? null,
                    r = T.current;
                  T.current = t;
                  let n = L(a);
                  n && C(n, null !== r && null !== t ? r - t : 0) || e.preventDefault()
                }
              },
              r = {
                passive: !1
              };
            return window.addEventListener("keydown", e, {
              passive: !1
            }), window.addEventListener("wheel", a, r), window.addEventListener("touchmove", a, r), () => {
              window.removeEventListener("keydown", e), window.removeEventListener("wheel", a, r), window.removeEventListener("touchmove", a, r)
            }
          }, [C, L, t, l, w]), (0, n.useEffect)(() => {
            if (!w) return;
            let e = e => {
              if (!b.current?.contains(e.target)) {
                T.current = null;
                return
              }
              T.current = e.touches[0]?.clientY ?? null
            };
            return window.addEventListener("touchstart", e, {
              passive: !0
            }), () => window.removeEventListener("touchstart", e)
          }, [w]), !w || !j) return null;
        let W = "number" == typeof _ ? `${_}px` : _,
          N = {};
        W && "auto" !== W ? N.maxWidth = W : (N.width = "fit-content", N.maxWidth = "clamp(100%, 100%, 850px)", N.boxSizing = "border-box");
        let M = f ? "closing" : "open",
          q = (0, r.jsx)("div", {
            className: o().overlay,
            "data-centered": u,
            "data-state": M,
            onMouseDown: e => {
              S.current = e.target === e.currentTarget
            },
            onClick: e => {
              let r = e.target === e.currentTarget,
                n = d && r && S.current;
              S.current = !1, n && (a ? a() : t())
            },
            children: (0, r.jsxs)("div", {
              className: `${o().modal} ${m??""}`,
              "data-state": M,
              style: N,
              ref: b,
              onClick: e => e.stopPropagation(),
              children: [(c || h) && (0, r.jsxs)("div", {
                className: o().header,
                children: [c && (0, r.jsx)("h2", {
                  className: o().title,
                  style: p ? {
                    textAlign: "center",
                    width: "100%"
                  } : {},
                  children: c
                }), h && (0, r.jsx)("button", {
                  type: "button",
                  className: o().closeButton,
                  onClick: s ?? t,
                  children: (0, r.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1em",
                    height: "1em",
                    viewBox: "7.43 7.45 9.15 9.15",
                    children: (0, r.jsx)("path", {
                      fill: "currentColor",
                      d: "m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"
                    })
                  })
                })]
              }), (0, r.jsx)("div", {
                className: `${o().body} ${x??""}`,
                children: g
              })]
            })
          });
        return (0, i.createPortal)(q, j)
      }
    },
    77570: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => o
      });
      var r = a(95155),
        n = a(81934),
        i = a(18943),
        s = a.n(i);

      function o({
        title: e,
        subtitle: t,
        headerAction: a,
        children: i,
        footer: o,
        legal: l
      }) {
        return (0, r.jsx)("div", {
          className: s().page,
          children: (0, r.jsxs)("div", {
            className: s().panel,
            children: [a && (0, r.jsx)("div", {
              className: s().panelHeaderAction,
              children: a
            }), (0, r.jsxs)("div", {
              className: s().brand,
              children: [(0, r.jsx)(n.A, {
                href: "/",
                className: s().brandLink,
                children: (0, r.jsx)("img", {
                  src: "https://assets.guns.lol/guns_logo_no_background_cropped.png",
                  alt: "guns.lol",
                  className: s().brandLogo
                })
              }), (0, r.jsxs)("div", {
                className: s().brandText,
                children: [(0, r.jsx)("h1", {
                  className: s().title,
                  children: e
                }), t && (0, r.jsx)("p", {
                  className: s().subtitle,
                  children: t
                })]
              })]
            }), (0, r.jsx)("div", {
              className: s().body,
              children: i
            }), o && (0, r.jsx)("div", {
              className: s().footer,
              children: o
            }), l && (0, r.jsx)("div", {
              className: s().legal,
              children: l
            })]
          })
        })
      }
    },
    81934: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => o
      });
      var r = a(95155),
        n = a(98500),
        i = a.n(n),
        s = a(38256);

      function o({
        href: e,
        asTag: t,
        locale: a,
        children: n,
        ...o
      }) {
        let l = a || (0, s.useLang)();
        if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) return t ? (0, r.jsx)("a", {
          href: e,
          ...o,
          children: n
        }) : (0, r.jsx)(i(), {
          href: e,
          ...o,
          children: n
        });
        let c = "en" == l ? `${e.startsWith("/")?"":"/"}${e}` : `/${l}${e.startsWith("/")?"":"/"}${e}`;
        return t ? (0, r.jsx)("a", {
          href: c,
          ...o,
          children: n
        }) : (0, r.jsx)(i(), {
          href: c,
          ...o,
          children: n
        })
      }
    }
  }
]);