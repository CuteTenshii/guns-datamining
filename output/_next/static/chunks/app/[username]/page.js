(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1911], {
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
        body: "GUNS__28-d82a957e-1d95260e-e1b07846",
        drawer: "GUNS__1e-a2cb22f3-a6b37ef1-2fe16456",
        drawerHandleRow: "GUNS__60-2921f6d3-fbed4139-e99dd41a",
        drawerHandle: "GUNS__90-f4bdf061-c1f315b9-62244f64",
        visuallyHidden: "GUNS__9f-457904b5-64ff6868-ee8e9a39"
      }
    },
    12521: (e, t, a) => {
      "use strict";
      a.d(t, {
        dO: () => o,
        vJ: () => n
      });
      let i = ["cursor", "background", "avatar", "cover", "icon", "audio", "clickSound", "banner", "metadata", "font", "templateImage", "badge", "imagehostUpload"],
        r = {
          cursor: {
            exts: ["png", "jpg", "jpeg", "webp", "gif", "cur"],
            mimes: ["image/webp", "image/gif", "image/png", "image/jpeg", "image/jpg"],
            maxMB: 5
          },
          background: {
            exts: ["webp", "gif", "mp4", "m4v", "webm", "png", "jpg", "jpeg", "mov", "m4v", "mkv"],
            mimes: ["image/webp", "image/gif", "video/mp4", "video/x-m4v", "video/webm", "image/png", "image/jpeg", "image/jpg", "video/quicktime", "video/x-matroska", "video/m4v", "video/mkv"],
            maxMB: 100
          },
          avatar: {
            exts: ["gif", "webp", "png", "jpg", "jpeg"],
            mimes: ["image/gif", "image/webp", "image/png", "image/jpeg", "image/jpg"],
            maxMB: 5
          },
          cover: {
            exts: ["gif", "webp", "png", "jpg", "jpeg"],
            mimes: ["image/gif", "image/webp", "image/png", "image/jpeg", "image/jpg"],
            maxMB: 10
          },
          icon: {
            exts: ["gif", "webp", "png", "jpg", "jpeg"],
            mimes: ["image/gif", "image/webp", "image/png", "image/jpeg", "image/jpg"],
            maxMB: 10
          },
          audio: {
            exts: ["mp3", "aac", "m4a"],
            mimes: ["audio/mpeg", "audio/mp3", "audio/aac", "audio/x-aac", "audio/vnd.dlna.adts", "audio/adts", "audio/mp4", "audio/mp4a-latm", "audio/x-m4a", "audio/m4a"],
            maxMB: 10
          },
          clickSound: {
            exts: ["mp3", "aac", "m4a", "ogg", "opus", "wav"],
            mimes: ["audio/mpeg", "audio/mp3", "audio/aac", "audio/x-aac", "audio/vnd.dlna.adts", "audio/adts", "audio/mp4", "audio/mp4a-latm", "audio/x-m4a", "audio/m4a", "audio/ogg", "audio/ogg; codecs=opus", "audio/opus", "application/ogg", "audio/wav", "audio/wave", "audio/x-wav"],
            maxMB: 1
          },
          banner: {
            exts: ["gif", "webp", "png", "jpg", "jpeg"],
            mimes: ["image/gif", "image/webp", "image/png", "image/jpeg", "image/jpg"],
            maxMB: 10
          },
          metadata: {
            exts: ["gif", "ico", "png", "jpeg", "jpg"],
            mimes: ["image/gif", "image/vnd.microsoft.icon", "image/png", "image/jpeg", "image/jpg", "image/x-icon"],
            maxMB: 10
          },
          font: {
            exts: ["woff", "ttf", "otf"],
            mimes: ["font/woff", "font/ttf", "font/otf"],
            maxMB: 5
          },
          templateImage: {
            exts: ["png", "jpg", "jpeg", "gif"],
            mimes: ["image/gif", "image/png", "image/jpeg", "image/jpg"],
            maxMB: 10
          },
          badge: {
            exts: ["png", "jpg", "jpeg", "gif", "webp"],
            mimes: ["image/png", "image/jpeg", "image/jpg", "image/gif", "image/webp"],
            maxMB: 10
          },
          imagehostUpload: {
            exts: ["jpeg", "png", "gif", "webp", "mp4", "m4v", "jpg", "mov", "webm"],
            mimes: ["image/jpeg", "image/png", "image/gif", "image/webp", "video/mp4", "video/m4v", "video/x-m4v", "video/quicktime", "video/webm"]
          }
        },
        n = Object.fromEntries(i.map(e => [e, r[e].exts.map(e => e.startsWith(".") ? e : `.${e}`)]));
      Object.fromEntries(i.map(e => [e, [...r[e].exts]])), Object.fromEntries(i.map(e => [e, [...r[e].mimes]]));
      let o = Object.fromEntries(i.filter(e => "imagehostUpload" !== e).map(e => [e, r[e].maxMB]))
    },
    13782: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => p
      });
      var i = a(95155),
        r = a(12115),
        n = a(47650),
        o = a(5677),
        s = a(5585),
        l = a.n(s);
      let d = "(max-width: 768px)",
        c = e => {
          if ("function" != typeof window.matchMedia) return () => void 0;
          let t = window.matchMedia(d);
          return "function" == typeof t.addEventListener ? (t.addEventListener("change", e), () => t.removeEventListener("change", e)) : (t.addListener(e), () => t.removeListener(e))
        },
        u = () => "function" == typeof window.matchMedia && window.matchMedia(d).matches,
        m = () => !1,
        f = (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "7.43 7.45 9.15 9.15",
          children: (0, i.jsx)("path", {
            fill: "currentColor",
            d: "m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"
          })
        });

      function p({
        opened: e,
        onClose: t,
        onOverlayClose: a,
        onCloseButtonClick: s,
        onEscapeClose: d,
        title: p,
        centered: g = !0,
        size: b = "auto",
        closeOnOverlayClick: h = !0,
        withCloseButton: v = !0,
        centerTitle: _ = !1,
        className: w,
        bodyClassName: x,
        mobileVariant: y = "drawer",
        children: j
      }) {
        let [N, k] = (0, r.useState)(e), [S, E] = (0, r.useState)(!1), [M, C] = (0, r.useState)(null), U = (0, r.useRef)(null), $ = (0, r.useRef)(null), G = (0, r.useRef)(null), L = (0, r.useRef)(null), B = (0, r.useRef)(!1), D = (0, r.useSyncExternalStore)(c, u, m) && "drawer" === y, T = e => {
          if (!e) return !1;
          let t = window.getComputedStyle(e).overflowY;
          return e.scrollHeight > e.clientHeight + 1 && ("auto" === t || "scroll" === t)
        }, P = e => {
          let t = $.current;
          if (!t || !e) return null;
          let a = e;
          for (; a && t.contains(a);) {
            if (T(a)) return a;
            a = a.parentElement
          }
          return null
        }, R = (e, t) => t < 0 ? e.scrollTop > 0 : !(t > 0) || e.scrollTop + e.clientHeight < e.scrollHeight, H = (0, r.useCallback)(e => {
          "overlay" === e ? (a ?? t)() : "escape" === e ? (d ?? t)() : "button" === e ? (s ?? t)() : t()
        }, [t, s, d, a]);
        (0, r.useEffect)(() => {
          if (e) {
            k(!0), E(!1);
            return
          }
          return E(!0), U.current = setTimeout(() => {
            k(!1), E(!1)
          }, D ? 320 : 250), () => {
            U.current && (clearTimeout(U.current), U.current = null)
          }
        }, [D, e]), (0, r.useEffect)(() => {
          if ("undefined" == typeof document) return;
          let e = document.createElement("div");
          return document.body.appendChild(e), C(e), () => {
            document.body.removeChild(e), C(null)
          }
        }, []), (0, r.useEffect)(() => {
          if (!N) return;
          let e = e => {
              if ("Escape" === e.key) {
                if (D) return;
                H("escape");
                return
              } ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(e.key) && !$.current?.contains(e.target) && e.preventDefault()
            },
            t = e => {
              let t = $.current;
              if (!t) return void e.preventDefault();
              let a = e.target;
              if (!(a && t.contains(a))) return void e.preventDefault();
              if (!D) {
                if (e instanceof WheelEvent) {
                  let t = P(a);
                  t && R(t, e.deltaY) || e.preventDefault();
                  return
                }
                if (e instanceof TouchEvent) {
                  let t = e.touches[0]?.clientY ?? null,
                    i = L.current;
                  L.current = t;
                  let r = P(a);
                  r && R(r, null !== i && null !== t ? i - t : 0) || e.preventDefault()
                }
              }
            },
            a = {
              passive: !1
            };
          return window.addEventListener("keydown", e, {
            passive: !1
          }), window.addEventListener("wheel", t, a), window.addEventListener("touchmove", t, a), () => {
            window.removeEventListener("keydown", e), window.removeEventListener("wheel", t, a), window.removeEventListener("touchmove", t, a)
          }
        }, [D, R, P, N, H]), (0, r.useEffect)(() => {
          if (!N) return;
          let e = e => {
            if (!$.current?.contains(e.target)) {
              L.current = null;
              return
            }
            L.current = e.touches[0]?.clientY ?? null
          };
          return window.addEventListener("touchstart", e, {
            passive: !0
          }), () => window.removeEventListener("touchstart", e)
        }, [N]), (0, r.useEffect)(() => {
          if (!D || !e || "undefined" == typeof document) return;
          let t = document.body,
            a = () => {
              "none" === t.style.pointerEvents && t.style.removeProperty("pointer-events")
            };
          a();
          let i = new MutationObserver(a);
          return i.observe(t, {
            attributes: !0,
            attributeFilter: ["style"]
          }), () => {
            i.disconnect(), a()
          }
        }, [D, e]);
        let O = S ? "closing" : "open",
          W = _ ? {
            textAlign: "center",
            width: "100%"
          } : {},
          A = p || v ? (0, i.jsxs)("div", {
            className: l().header,
            children: [p && (0, i.jsx)("h2", {
              className: l().title,
              style: W,
              children: p
            }), v && (0, i.jsx)("button", {
              type: "button",
              className: l().closeButton,
              onClick: D ? () => H("button") : s ?? t,
              children: f
            })]
          }) : null,
          I = (0, r.useCallback)((e, t) => {
            let a = Math.max(0, Math.min(1, t)),
              i = G.current;
            i && (i.style.transition = "none", i.style.opacity = `${1-a}`)
          }, []),
          q = (0, r.useCallback)((e, t) => {
            let a = G.current;
            a && (a.style.transition = `opacity ${t?.5:.3}s cubic-bezier(0.32, 0.72, 0, 1)`, a.style.opacity = t ? "1" : "0")
          }, []);
        if (D) return (0, i.jsx)(o._s.Root, {
          open: e,
          onOpenChange: e => {
            e || H("drag")
          },
          modal: !1,
          noBodyStyles: !0,
          repositionInputs: !1,
          onDrag: I,
          onRelease: q,
          children: (0, i.jsxs)(o._s.Portal, {
            children: [(0, i.jsx)("div", {
              ref: G,
              className: l().overlay,
              "data-variant": "drawer",
              "data-state": e ? "open" : "closing",
              onClick: () => {
                h && H("overlay")
              }
            }), (0, i.jsxs)(o._s.Content, {
              ref: $,
              className: `${l().drawer} ${w??""}`,
              onClick: e => e.stopPropagation(),
              onEscapeKeyDown: e => {
                e.preventDefault(), H("escape")
              },
              onInteractOutside: e => e.preventDefault(),
              children: [(0, i.jsx)("div", {
                className: l().drawerHandleRow,
                children: (0, i.jsx)(o._s.Handle, {
                  className: l().drawerHandle
                })
              }), !p && (0, i.jsx)(o._s.Title, {
                className: l().visuallyHidden,
                children: "Dialog"
              }), (p || v) && (0, i.jsxs)("div", {
                className: l().header,
                children: [p && (0, i.jsx)(o._s.Title, {
                  asChild: !0,
                  children: (0, i.jsx)("h2", {
                    className: l().title,
                    style: W,
                    children: p
                  })
                }), v && (0, i.jsx)("button", {
                  type: "button",
                  className: l().closeButton,
                  onClick: () => H("button"),
                  children: f
                })]
              }), (0, i.jsx)("div", {
                className: `${l().body} ${x??""}`,
                children: j
              })]
            })]
          })
        });
        if (!N || !M) return null;
        let z = "number" == typeof b ? `${b}px` : b,
          F = {};
        z && "auto" !== z ? F.maxWidth = z : (F.width = "fit-content", F.maxWidth = "clamp(100%, 100%, 850px)", F.boxSizing = "border-box");
        let Y = (0, i.jsx)("div", {
          className: l().overlay,
          "data-centered": g,
          "data-state": O,
          onMouseDown: e => {
            B.current = e.target === e.currentTarget
          },
          onClick: e => {
            let t = e.target === e.currentTarget,
              a = h && t && B.current;
            B.current = !1, a && H("overlay")
          },
          children: (0, i.jsxs)("div", {
            className: `${l().modal} ${w??""}`,
            "data-state": O,
            style: F,
            ref: $,
            onClick: e => e.stopPropagation(),
            children: [A, (0, i.jsx)("div", {
              className: `${l().body} ${x??""}`,
              children: j
            })]
          })
        });
        return (0, n.createPortal)(Y, M)
      }
    },
    21924: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => u
      });
      var i = a(95155),
        r = a(29722),
        n = a(12115),
        o = a(98241),
        s = a.n(o),
        l = a(51047),
        d = a.n(l);
      let c = (e, t) => {
        if ("number" == typeof e && Number.isFinite(e)) return e;
        if ("string" == typeof e) {
          let t = Number(e);
          if (!Number.isNaN(t)) return t
        }
        return t
      };

      function u({
        featureName: e,
        marks: t,
        value: a,
        defaultValue: o,
        onChangeFunction: l,
        label: u,
        className: m,
        min: f,
        max: p,
        step: g,
        disabled: b,
        onChange: h,
        onFocus: v,
        onBlur: _,
        onPointerDown: w,
        onPointerUp: x,
        onPointerCancel: y,
        ...j
      }) {
        let N = c(f, 0),
          k = c(p, 100),
          S = c(g, 1) || 1,
          E = a ?? o ?? N,
          M = void 0 !== a,
          [C, U] = (0, n.useState)(E),
          [$, G] = (0, n.useState)(!1),
          [L, B] = (0, n.useState)(!1);
        (0, n.useEffect)(() => {
          M || U(o ?? N)
        }, [o, M, N]);
        let D = M ? a ?? N : C,
          T = Math.min(k, Math.max(N, D)),
          P = Math.max(k - N, Number.EPSILON),
          R = (T - N) / P * 100;
        (0, n.useEffect)(() => {
          M || U(e => Math.min(k, Math.max(N, e)))
        }, [M, N, k]);
        let H = (0, n.useMemo)(() => t?.length ? t.map(e => ({
            ...e,
            normalizedValue: Math.min(k, Math.max(N, e.value)),
            position: Math.min(100, Math.max(0, (Math.min(k, Math.max(N, e.value)) - N) / P * 100))
          })) : [], [t, N, k, P]),
          O = (0, n.useMemo)(() => {
            if (!u) return `${T}`;
            let e = "function" == typeof u ? u(T) : u;
            return null == e || !1 === e ? `${T}` : e
          }, [u, T]),
          W = !b && ($ || L),
          A = "string" == typeof e ? e : void 0;
        return (0, i.jsxs)("div", {
          className: s().inputContainerWrapper,
          "data-dashboard-feature-label": A,
          children: [e && (0, i.jsx)("h1", {
            className: s().featureName,
            style: {
              marginLeft: 0
            },
            children: e
          }), (0, i.jsx)("div", {
            className: (0, r.A)(s().inputWrapperDiv, d().wrapper, m),
            "data-vaul-no-drag": !0,
            children: (0, i.jsx)("div", {
              className: d().sliderContent,
              children: (0, i.jsxs)("div", {
                className: d().sliderShell,
                onMouseEnter: () => G(!0),
                onMouseLeave: () => {
                  L || G(!1)
                },
                children: [(0, i.jsxs)("div", {
                  className: d().track,
                  children: [(0, i.jsx)("div", {
                    className: d().progress,
                    style: {
                      width: `${R}%`
                    }
                  }), (0, i.jsx)("div", {
                    className: d().thumb,
                    style: {
                      left: `calc(${R}% - (var(--thumb-size) / 2))`
                    },
                    "data-visible": W,
                    children: (0, i.jsx)("span", {
                      className: d().tooltip,
                      "data-visible": W,
                      children: O
                    })
                  })]
                }), (0, i.jsx)("input", {
                  ...j,
                  type: "range",
                  min: N,
                  max: k,
                  step: S,
                  value: T,
                  disabled: b,
                  className: d().range,
                  onChange: e => {
                    let t = Number(e.target.value);
                    Number.isNaN(t) || (M || U(t), l?.(t), h?.(e))
                  },
                  onFocus: e => {
                    G(!0), v?.(e)
                  },
                  onBlur: e => {
                    G(!1), _?.(e)
                  },
                  onPointerDown: e => {
                    B(!0), w?.(e)
                  },
                  onPointerUp: e => {
                    B(!1), x?.(e)
                  },
                  onPointerCancel: e => {
                    B(!1), y?.(e)
                  },
                  "aria-valuemin": N,
                  "aria-valuemax": k,
                  "aria-valuenow": T
                }), H.length > 0 && (0, i.jsx)("div", {
                  className: d().marks,
                  children: H.map((e, t) => (0, i.jsxs)("div", {
                    className: d().mark,
                    style: {
                      left: `${e.position}%`
                    },
                    children: [(0, i.jsx)("span", {
                      className: d().markDot,
                      "data-active": e.normalizedValue <= T
                    }), e.label && (0, i.jsx)("span", {
                      className: d().markLabel,
                      children: e.label
                    })]
                  }, `${e.value}-${t}`))
                })]
              })
            })
          })]
        })
      }
    },
    24579: e => {
      e.exports = {
        wrapper: "GUNS__ba-7f5364ea-c3a36c5d-b0f3d011",
        tooltip: "GUNS__ca-42ad2aff-c7e7db33-534468e1"
      }
    },
    44419: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 70660))
    },
    45941: (e, t, a) => {
      "use strict";
      a.d(t, {
        nB: () => s,
        $h: () => o,
        hR: () => n,
        o2: () => l
      });
      var i = a(12521);
      let r = JSON.parse('{"n":{"socials":[],"user_badges":[],"custom_badges":[],"color":"#1b1b1b","text_color":"#ffffff","icon_color":"#ffffff","bg_color":"#080808","gradient_1":"#881c9c","gradient_2":"#0d0d0d","profile_gradient":false,"use_discord_avatar":false,"volume_control":false,"badge_glow":true,"social_glow":true,"username_glow":true,"swap_colors":false,"monochrome":true,"animated_title":false,"shuffle_audios":false,"audio_player":false,"location":"","discord_avatar_decoration":true,"page_views":0,"blur":10,"opacity":0.5,"url":"","audio":[],"avatar":"","custom_cursor":"","description":"","presence":"","profile_widget":{"type":"discord_presence","value":"","clock_face_style":"dark","clock_hidden":false,"clock_time_format":"24h"},"discord_presence_settings":{"show_badges":true,"show_guild_tag":true,"idle_text":""},"display_name":"","background_effects":"","background_effects_color":"#ffffff","username_effects":"","premium":{"effects_color":"#ffffff","badge_color":"#ffffff","border_color":"#ffffff","typewriter_enabled":false,"typewriter_speed":5,"typewriter_delete_speed":7,"typewriter":[],"hide_views":false,"border_enabled":false,"border_style":"static","border_opacity":0.3,"second_tab_enabled":false,"monochrome_badges":false,"animation":"fade","parallax_animation":false,"join_date":"relative","border_width":2,"border_radius":20,"avatar_radius":35,"links_position":"center","portfolio_border_radius":20,"second_tab":{},"cursor_effects":"","font":"satoshi","page_enter_text":"","page_enter_subtitle":"","page_enter_icon":"","click_sound":"none","click_sound_custom_url":"","layout":"default","portfolio_modules":[{"id":"portfolio-top-hero","type":"hero","visible":true,"settings":{"hero_style":"classic","show_avatar":true,"show_buttons":true}},{"id":"portfolio-about","type":"about","visible":true,"settings":{"title":"About me","description":"","secondary_description":"","cards":[]}}],"banner":"","buttons":[],"show_url":false,"text_align":"center","button_shadow":false,"button_border_radius":12,"metadata":{"title":"","description":"","image":"","favicon":"","information_overlay":false}}}}'),
        n = r.n,
        o = r.n.premium,
        s = i.vJ,
        l = i.dO
    },
    51047: e => {
      e.exports = {
        wrapper: "GUNS__ec-a9da6dd8-132e02a7-cd16b658",
        sliderContent: "GUNS__96-8304f174-bd54cefb-75d6707a",
        sliderShell: "GUNS__44-193d757e-48269873-02bed72a",
        track: "GUNS__72-5ce6f53d-1413285c-aa6090ba",
        progress: "GUNS__57-039aee70-e5a62261-c63c93e9",
        thumb: "GUNS__20-345a5613-0b52cc9b-60d52f5a",
        range: "GUNS__f2-0dba9ea2-5811641b-e8f7ca3d",
        marks: "GUNS__bb-eca8726a-511bfcaa-1f3a0f0b",
        mark: "GUNS__7d-7a14a53e-dda05dd7-53bba004",
        markDot: "GUNS__d3-1976450f-9b2b2cdf-a9709b05",
        markLabel: "GUNS__b7-e71a8b02-36dda168-51e16392",
        valueLabel: "GUNS__cd-2203985c-bbac1cbe-0445495c",
        tooltip: "GUNS__0d-d338da93-6652d4fb-5730347d"
      }
    },
    61778: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => d
      });
      var i = a(95155),
        r = a(47650),
        n = a(12115),
        o = a(24579),
        s = a.n(o);
      let l = "undefined" != typeof navigator && /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      function d({
        content: e,
        children: t,
        placement: a = "top",
        delay: o = 110,
        offset: d = 10,
        maxWidth: c = 260,
        className: u,
        tooltipClassName: m,
        hideTooltip: f = !1,
        pageTooltipStyles: p = !1
      }) {
        let [g, b] = (0, n.useState)(!1), [h, v] = (0, n.useState)(!1), [_, w] = (0, n.useState)({
          top: 0,
          left: 0
        }), [x, y] = (0, n.useState)(!1), j = (0, n.useRef)(null), N = (0, n.useRef)(null), k = (0, n.useRef)(null), S = p ? 25 + 30 * !!l : o;
        (0, n.useEffect)(() => {
          y(!0)
        }, []);
        let E = (0, n.useCallback)(() => {
            j.current && (clearTimeout(j.current), j.current = null)
          }, []),
          M = (0, n.useCallback)(() => "undefined" != typeof document && "active" === document.documentElement.getAttribute("data-user-page-enter-transition"), []),
          C = (0, n.useCallback)(e => {
            if (f || M()) return;
            let t = e?.immediate ?? !1;
            (E(), t || S <= 0) ? b(!0): j.current = setTimeout(() => b(!0), S)
          }, [E, S, f, M]),
          U = (0, n.useCallback)(e => {
            E(), e?.immediate, b(!1)
          }, [E]);
        (0, n.useEffect)(() => () => {
          E()
        }, [E]), (0, n.useEffect)(() => {
          f && U({
            immediate: !0
          })
        }, [f, U]);
        let $ = (e, t, a) => Math.min(Math.max(e, t), a),
          G = (0, n.useCallback)(() => {
            let e = N.current,
              t = k.current;
            if (!e || !t) return;
            let i = e.getBoundingClientRect(),
              r = t.getBoundingClientRect(),
              n = 0,
              o = 0;
            switch (a) {
              case "bottom":
                n = i.bottom + d, o = i.left + i.width / 2 - r.width / 2;
                break;
              case "left":
                n = i.top + i.height / 2 - r.height / 2, o = i.left - r.width - d;
                break;
              case "right":
                n = i.top + i.height / 2 - r.height / 2, o = i.right + d;
                break;
              default:
                n = i.top - r.height - d, o = i.left + i.width / 2 - r.width / 2
            }
            let s = window.innerWidth - r.width - 8,
              l = window.innerHeight - r.height - 8,
              c = r.width >= window.innerWidth ? 8 : $(o, 8, Math.max(8, s));
            w({
              top: r.height >= window.innerHeight ? 8 : $(n, 8, Math.max(8, l)),
              left: c
            })
          }, [d, a]);
        (0, n.useLayoutEffect)(() => {
          if (!g) return;
          G();
          let e = () => G();
          return window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
            window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0)
          }
        }, [G, g]);
        let L = (0, n.useCallback)(e => {
          M() || (e.stopPropagation(), v(!0), g ? U({
            immediate: !0
          }) : C({
            immediate: !0
          }))
        }, [U, M, C, g]);
        (0, n.useEffect)(() => {
          if (!g || !h) return;
          let e = e => {
            N.current && (N.current.contains(e.target) || U({
              immediate: !0
            }))
          };
          return document.addEventListener("touchstart", e, {
            passive: !0
          }), () => {
            document.removeEventListener("touchstart", e)
          }
        }, [f, U, h, g]);
        let B = {
            "--tooltip-max-width": "number" == typeof c ? `${c}px` : c,
            top: `${_.top}px`,
            left: `${_.left}px`
          },
          D = (0, i.jsx)("span", {
            ref: k,
            className: `${s().tooltip} ${m??""}`,
            style: {
              ...B,
              borderColor: p ? "#1a1a1a33" : "var(--tooltip-border-color)",
              backgroundColor: p ? "#14141463" : "var(--tooltip-background-color)"
            },
            "data-visible": g,
            "data-placement": a,
            children: e
          });
        return (0, i.jsxs)("span", {
          ref: N,
          className: `${s().wrapper} ${u??""}`,
          onMouseEnter: () => C(),
          onMouseLeave: () => U(),
          onFocusCapture: () => C(),
          onBlurCapture: () => U({
            immediate: !0
          }),
          onTouchStart: L,
          children: [t, x ? (0, r.createPortal)(D, document.body) : D]
        })
      }
    },
    81934: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => n
      });
      var i = a(95155),
        r = a(86891);

      function n({
        href: e,
        asTag: t,
        locale: a,
        children: n,
        ...o
      }) {
        let s = a || (0, r.useLang)();
        if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) return (0, i.jsx)("a", {
          href: e,
          ...o,
          children: n
        });
        let l = "en" == s ? `${e.startsWith("/")?"":"/"}${e}` : `/${s}${e.startsWith("/")?"":"/"}${e}`;
        return (0, i.jsx)("a", {
          href: l,
          ...o,
          children: n
        })
      }
    },
    99387: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => n
      });
      var i = a(95155),
        r = a(12115);

      function n({
        value: e,
        timeout: t = 2e3,
        children: a,
        spanClassName: n,
        opts: o
      }) {
        let [s, l] = (0, r.useState)(!1), d = (0, r.useRef)(null);
        (0, r.useEffect)(() => () => {
          d.current && clearTimeout(d.current)
        }, []);
        let c = (0, r.useMemo)(() => "undefined" != typeof navigator && !!navigator.clipboard, [!0]),
          u = (0, r.useCallback)(async () => {
            if ("undefined" == typeof document) return !1;
            try {
              let t = document.createElement("textarea");
              t.value = e, t.style.position = "fixed", t.style.opacity = "0", document.body.appendChild(t), t.focus(), t.select();
              let a = document.execCommand("copy");
              return document.body.removeChild(t), a
            } catch {
              return !1
            }
          }, [e]),
          m = (0, r.useCallback)(async () => {
            if (c && window.isSecureContext && navigator.clipboard) try {
              return await navigator.clipboard.writeText(e), !0
            } catch {}
            return await u()
          }, [u, !0, c, e]),
          f = (0, r.useCallback)(async () => {
            await m() && (l(!0), d.current && clearTimeout(d.current), d.current = setTimeout(() => l(!1), t))
          }, [m, t]),
          p = (0, i.jsx)("span", {
            onClick: () => {
              f()
            },
            className: n,
            tabIndex: 0,
            onKeyDown: e => {
              ("Enter" === e.key || " " === e.key) && (e.preventDefault(), f())
            },
            children: s ? o?.copiedIcon ?? o?.copiedText ?? "Copied" : o?.copyIcon ?? o?.copyText ?? "Copy"
          });
        return "function" == typeof a ? (0, i.jsx)(i.Fragment, {
          children: a({
            copied: s,
            copy: f,
            isSupported: c
          })
        }) : p
      }
    }
  },
  e => {
    e.O(0, [8604, 7274, 3785, 2520, 379, 8986, 8463, 1831, 4664, 9367, 8413, 6413, 5592, 4293, 5686, 4564, 2483, 7740, 6891, 5886, 5041, 2131, 7605, 8542, 660, 8441, 3794, 7358], () => e(e.s = 44419)), _N_E = e.O()
  }
]);