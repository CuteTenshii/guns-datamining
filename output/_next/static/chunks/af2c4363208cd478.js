(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 31342, (e, r, t) => {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "BailoutToCSR", {
    enumerable: !0,
    get: function() {
      return a
    }
  });
  let o = e.r(19551);

  function a({
    reason: e,
    children: r
  }) {
    if ("undefined" == typeof window) throw Object.defineProperty(new o.BailoutToCSRError(e), "__NEXT_ERROR_CODE", {
      value: "E394",
      enumerable: !1,
      configurable: !0
    });
    return r
  }
}, 65562, (e, r, t) => {
  "use strict";

  function o(e) {
    return e.split("/").map(e => encodeURIComponent(e)).join("/")
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "encodeURIPath", {
    enumerable: !0,
    get: function() {
      return o
    }
  })
}, 29106, (e, r, t) => {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "PreloadChunks", {
    enumerable: !0,
    get: function() {
      return i
    }
  });
  let o = e.r(48277),
    a = e.r(69941),
    l = e.r(26628),
    d = e.r(65562);

  function i({
    moduleIds: e
  }) {
    if ("undefined" != typeof window) return null;
    let r = l.workAsyncStorage.getStore();
    if (void 0 === r) return null;
    let t = [];
    if (r.reactLoadableManifest && e) {
      let o = r.reactLoadableManifest;
      for (let r of e) {
        if (!o[r]) continue;
        let e = o[r].files;
        t.push(...e)
      }
    }
    return 0 === t.length ? null : (0, o.jsx)(o.Fragment, {
      children: t.map(e => {
        let t = `${r.assetPrefix}/_next/${(0,d.encodeURIPath)(e)}`;
        return e.endsWith(".css") ? (0, o.jsx)("link", {
          precedence: "dynamic",
          href: t,
          rel: "stylesheet",
          as: "style",
          nonce: r.nonce
        }, e) : ((0, a.preload)(t, {
          as: "script",
          fetchPriority: "low",
          nonce: r.nonce
        }), null)
      })
    })
  }
}, 69656, (e, r, t) => {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "default", {
    enumerable: !0,
    get: function() {
      return u
    }
  });
  let o = e.r(48277),
    a = e.r(30668),
    l = e.r(31342),
    d = e.r(29106);

  function i(e) {
    return {
      default: e && "default" in e ? e.default : e
    }
  }
  let s = {
      loader: () => Promise.resolve(i(() => null)),
      loading: null,
      ssr: !0
    },
    u = function(e) {
      let r = {
          ...s,
          ...e
        },
        t = (0, a.lazy)(() => r.loader().then(i)),
        u = r.loading;

      function _(e) {
        let i = u ? (0, o.jsx)(u, {
            isLoading: !0,
            pastDelay: !0,
            error: null
          }) : null,
          s = !r.ssr || !!r.loading,
          _ = s ? a.Suspense : a.Fragment,
          n = r.ssr ? (0, o.jsxs)(o.Fragment, {
            children: ["undefined" == typeof window ? (0, o.jsx)(d.PreloadChunks, {
              moduleIds: r.modules
            }) : null, (0, o.jsx)(t, {
              ...e
            })]
          }) : (0, o.jsx)(l.BailoutToCSR, {
            reason: "next/dynamic",
            children: (0, o.jsx)(t, {
              ...e
            })
          });
        return (0, o.jsx)(_, {
          ...s ? {
            fallback: i
          } : {},
          children: n
        })
      }
      return _.displayName = "LoadableComponent", _
    }
}, 62870, (e, r, t) => {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "default", {
    enumerable: !0,
    get: function() {
      return a
    }
  });
  let o = e.r(35856)._(e.r(69656));

  function a(e, r) {
    let t = {};
    "function" == typeof e && (t.loader = e);
    let a = {
      ...t,
      ...r
    };
    return (0, o.default)({
      ...a,
      modules: a.loadableGenerated?.modules
    })
  }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), r.exports = t.default)
}, 86321, e => {
  "use strict";
  var r = e.i(48277),
    t = e.i(30668);

  function o({
    value: e,
    timeout: o = 2e3,
    children: a,
    spanClassName: l,
    opts: d
  }) {
    let [i, s] = (0, t.useState)(!1), u = (0, t.useRef)(null);
    (0, t.useEffect)(() => () => {
      u.current && clearTimeout(u.current)
    }, []);
    let _ = (0, t.useMemo)(() => "undefined" != typeof navigator && !!navigator.clipboard, [!0]),
      n = (0, t.useCallback)(async () => {
        if ("undefined" == typeof document) return !1;
        try {
          let r = document.createElement("textarea");
          r.value = e, r.style.position = "fixed", r.style.opacity = "0", document.body.appendChild(r), r.focus(), r.select();
          let t = document.execCommand("copy");
          return document.body.removeChild(r), t
        } catch {
          return !1
        }
      }, [e]),
      c = (0, t.useCallback)(async () => {
        if (_ && window.isSecureContext && navigator.clipboard) try {
          return await navigator.clipboard.writeText(e), !0
        } catch {}
        return await n()
      }, [n, !0, _, e]),
      m = (0, t.useCallback)(async () => {
        await c() && (s(!0), u.current && clearTimeout(u.current), u.current = setTimeout(() => s(!1), o))
      }, [c, o]),
      g = (0, r.jsx)("span", {
        onClick: () => {
          m()
        },
        className: l,
        tabIndex: 0,
        onKeyDown: e => {
          ("Enter" === e.key || " " === e.key) && (e.preventDefault(), m())
        },
        children: i ? d?.copiedIcon ?? d?.copiedText ?? "Copied" : d?.copyIcon ?? d?.copyText ?? "Copy"
      });
    return "function" == typeof a ? (0, r.jsx)(r.Fragment, {
      children: a({
        copied: i,
        copy: m,
        isSupported: _
      })
    }) : g
  }
  e.s(["default", () => o])
}, 60247, e => {
  "use strict";
  var r = e.i(16265),
    t = e.i(15451);
  let o = t.default.userConfig,
    a = t.default.userConfig.premium,
    l = r.frontendAllowedExtensions,
    d = r.maxFileSizeGlobal;
  e.s(["allowedExtensions", 0, l, "defaultPremiumConfig", 0, a, "defaultUserConfig", 0, o, "maxFileSize", 0, d])
}, 15451, e => {
  e.v({
    userConfig: {
      socials: [],
      user_badges: [],
      custom_badges: [],
      color: "#1b1b1b",
      text_color: "#ffffff",
      icon_color: "#ffffff",
      bg_color: "#080808",
      gradient_1: "#881c9c",
      gradient_2: "#0d0d0d",
      profile_gradient: !1,
      use_discord_avatar: !1,
      volume_control: !1,
      badge_glow: !0,
      social_glow: !0,
      username_glow: !0,
      swap_colors: !1,
      monochrome: !0,
      animated_title: !1,
      shuffle_audios: !1,
      audio_player: !1,
      location: "",
      discord_avatar_decoration: !0,
      page_views: 0,
      blur: 10,
      opacity: .5,
      url: "",
      audio: [],
      avatar: "",
      custom_cursor: "",
      description: "",
      presence: "",
      discord_presence_settings: {
        show_badges: !0,
        show_guild_tag: !0,
        idle_text: ""
      },
      display_name: "",
      background_effects: "",
      background_effects_color: "#000000",
      username_effects: "",
      premium: {
        effects_color: "#ffffff",
        badge_color: "#ffffff",
        border_color: "#ffffff",
        typewriter_enabled: !1,
        typewriter_speed: 5,
        typewriter_delete_speed: 7,
        typewriter: [],
        hide_views: !1,
        border_enabled: !1,
        border_style: "static",
        border_opacity: .3,
        second_tab_enabled: !1,
        monochrome_badges: !1,
        animation: "fade",
        parallax_animation: !1,
        join_date: "relative",
        border_width: 2,
        border_radius: 20,
        avatar_radius: 35,
        links_position: "center",
        portfolio_border_radius: 20,
        second_tab: {},
        cursor_effects: "",
        font: "satoshi",
        page_enter_text: "",
        layout: "default",
        portfolio_modules: [{
          id: "portfolio-top-hero",
          type: "hero",
          visible: !0,
          settings: {
            hero_style: "classic",
            show_avatar: !0,
            show_buttons: !0
          }
        }, {
          id: "portfolio-about",
          type: "about",
          visible: !0,
          settings: {
            title: "About me",
            description: "",
            secondary_description: "",
            cards: []
          }
        }, {
          id: "portfolio-projects",
          type: "projects",
          visible: !0,
          settings: {
            title: "Featured projects",
            projects: []
          }
        }],
        portfolio_audio_hidden: !1,
        banner: "",
        buttons: [],
        show_url: !1,
        text_align: "center",
        button_shadow: !1,
        button_border_radius: 12,
        metadata: {
          title: "",
          description: "",
          image: "",
          favicon: "",
          information_overlay: !1
        }
      }
    },
    imagehostConfig: {
      total_uploads: 0,
      storage_used: 0,
      folders: [],
      config: {
        hide_extension: !1,
        anonymous: !1,
        show_embed: !0,
        filename_length: 6,
        domain: "i.guns.lol",
        secret_key: "",
        embed: {
          title: "{file_name} - {file_size}",
          title_url: "",
          author: "",
          author_url: "",
          description: "",
          color: "#ffffff",
          timestamp: !1
        }
      }
    }
  })
}, 16265, e => {
  "use strict";
  let r = ["cursor", "background", "avatar", "cover", "icon", "audio", "banner", "metadata", "font", "templateImage", "badge", "imagehostUpload"],
    t = {
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
    o = Object.fromEntries(r.map(e => [e, t[e].exts.map(e => e.startsWith(".") ? e : `.${e}`)]));
  Object.fromEntries(r.map(e => [e, [...t[e].exts]])), Object.fromEntries(r.map(e => [e, [...t[e].mimes]]));
  let a = Object.fromEntries(r.filter(e => "imagehostUpload" !== e).map(e => [e, t[e].maxMB]));
  e.s(["frontendAllowedExtensions", 0, o, "maxFileSizeGlobal", 0, a])
}, 55927, e => {
  e.v({
    tooltip: "tooltipWrapper-module__pOyMVa__tooltip",
    wrapper: "tooltipWrapper-module__pOyMVa__wrapper"
  })
}, 30817, e => {
  "use strict";
  var r = e.i(48277),
    t = e.i(69941),
    o = e.i(30668),
    a = e.i(55927);
  let l = "undefined" != typeof navigator && /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  function d({
    content: e,
    children: d,
    placement: i = "top",
    delay: s = 110,
    offset: u = 10,
    maxWidth: _ = 260,
    className: n,
    tooltipClassName: c,
    hideTooltip: m = !1,
    pageTooltipStyles: g = !1
  }) {
    let [p, f] = (0, o.useState)(!1), [h, j] = (0, o.useState)(!1), [v, P] = (0, o.useState)({
      top: 0,
      left: 0
    }), [w, T] = (0, o.useState)(!1), y = (0, o.useRef)(null), Z = (0, o.useRef)(null), G = (0, o.useRef)(null), b = g ? 25 + 30 * !!l : s;
    (0, o.useEffect)(() => {
      T(!0)
    }, []);
    let x = (0, o.useCallback)(() => {
        y.current && (clearTimeout(y.current), y.current = null)
      }, []),
      L = (0, o.useCallback)(() => "undefined" != typeof document && "active" === document.documentElement.getAttribute("data-user-page-enter-transition"), []),
      C = (0, o.useCallback)(e => {
        if (m || L()) return;
        let r = e?.immediate ?? !1;
        (x(), r || b <= 0) ? f(!0): y.current = setTimeout(() => f(!0), b)
      }, [x, b, m, L]),
      B = (0, o.useCallback)(e => {
        x(), e?.immediate, f(!1)
      }, [x]);
    (0, o.useEffect)(() => () => {
      x()
    }, [x]), (0, o.useEffect)(() => {
      m && B({
        immediate: !0
      })
    }, [m, B]);
    let k = (e, r, t) => Math.min(Math.max(e, r), t),
      M = (0, o.useCallback)(() => {
        let e = Z.current,
          r = G.current;
        if (!e || !r) return;
        let t = e.getBoundingClientRect(),
          o = r.getBoundingClientRect(),
          a = 0,
          l = 0;
        switch (i) {
          case "bottom":
            a = t.bottom + u, l = t.left + t.width / 2 - o.width / 2;
            break;
          case "left":
            a = t.top + t.height / 2 - o.height / 2, l = t.left - o.width - u;
            break;
          case "right":
            a = t.top + t.height / 2 - o.height / 2, l = t.right + u;
            break;
          default:
            a = t.top - o.height - u, l = t.left + t.width / 2 - o.width / 2
        }
        let d = window.innerWidth - o.width - 8,
          s = window.innerHeight - o.height - 8,
          _ = o.width >= window.innerWidth ? 8 : k(l, 8, Math.max(8, d));
        P({
          top: o.height >= window.innerHeight ? 8 : k(a, 8, Math.max(8, s)),
          left: _
        })
      }, [u, i]);
    (0, o.useLayoutEffect)(() => {
      if (!p) return;
      M();
      let e = () => M();
      return window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
        window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0)
      }
    }, [M, p]);
    let E = (0, o.useCallback)(e => {
      L() || (e.stopPropagation(), j(!0), p ? B({
        immediate: !0
      }) : C({
        immediate: !0
      }))
    }, [B, L, C, p]);
    (0, o.useEffect)(() => {
      if (!p || !h) return;
      let e = e => {
        Z.current && (Z.current.contains(e.target) || B({
          immediate: !0
        }))
      };
      return document.addEventListener("touchstart", e, {
        passive: !0
      }), () => {
        document.removeEventListener("touchstart", e)
      }
    }, [m, B, h, p]);
    let A = {
        "--tooltip-max-width": "number" == typeof _ ? `${_}px` : _,
        top: `${v.top}px`,
        left: `${v.left}px`
      },
      S = (0, r.jsx)("span", {
        ref: G,
        className: `${a.default.tooltip} ${c??""}`,
        style: {
          ...A,
          borderColor: g ? "#1a1a1a33" : "var(--tooltip-border-color)",
          backgroundColor: g ? "#14141463" : "var(--tooltip-background-color)"
        },
        "data-visible": p,
        "data-placement": i,
        children: e
      });
    return (0, r.jsxs)("span", {
      ref: Z,
      className: `${a.default.wrapper} ${n??""}`,
      onMouseEnter: () => C(),
      onMouseLeave: () => B(),
      onFocusCapture: () => C(),
      onBlurCapture: () => B({
        immediate: !0
      }),
      onTouchStart: E,
      children: [d, w ? (0, t.createPortal)(S, document.body) : S]
    })
  }
  e.s(["default", () => d])
}, 52202, e => {
  "use strict";
  var r = e.i(48277),
    t = e.i(16506),
    o = e.i(17435);

  function a({
    href: e,
    asTag: a,
    locale: l,
    children: d,
    ...i
  }) {
    let s = l || (0, o.useLang)();
    if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) return a ? (0, r.jsx)("a", {
      href: e,
      ...i,
      children: d
    }) : (0, r.jsx)(t.default, {
      href: e,
      ...i,
      children: d
    });
    let u = "en" == s ? `${e.startsWith("/")?"":"/"}${e}` : `/${s}${e.startsWith("/")?"":"/"}${e}`;
    return a ? (0, r.jsx)("a", {
      href: u,
      ...i,
      children: d
    }) : (0, r.jsx)(t.default, {
      href: u,
      ...i,
      children: d
    })
  }
  e.s(["default", () => a])
}, 99325, e => {
  "use strict";
  e.s(["default", 0, function() {
    for (var e, r, t = 0, o = "", a = arguments.length; t < a; t++)(e = arguments[t]) && (r = function e(r) {
      var t, o, a = "";
      if ("string" == typeof r || "number" == typeof r) a += r;
      else if ("object" == typeof r)
        if (Array.isArray(r)) {
          var l = r.length;
          for (t = 0; t < l; t++) r[t] && (o = e(r[t])) && (a && (a += " "), a += o)
        } else
          for (o in r) r[o] && (a && (a += " "), a += o);
      return a
    }(e)) && (o && (o += " "), o += r);
    return o
  }])
}, 19168, e => {
  e.v({
    body: "modalWrapper-module__XCOtVG__body",
    closeButton: "modalWrapper-module__XCOtVG__closeButton",
    header: "modalWrapper-module__XCOtVG__header",
    modal: "modalWrapper-module__XCOtVG__modal",
    "modal-scale-in": "modalWrapper-module__XCOtVG__modal-scale-in",
    "modal-scale-out": "modalWrapper-module__XCOtVG__modal-scale-out",
    overlay: "modalWrapper-module__XCOtVG__overlay",
    "overlay-fade-in": "modalWrapper-module__XCOtVG__overlay-fade-in",
    "overlay-fade-out": "modalWrapper-module__XCOtVG__overlay-fade-out",
    title: "modalWrapper-module__XCOtVG__title"
  })
}, 74654, e => {
  "use strict";
  var r = e.i(48277),
    t = e.i(30668),
    o = e.i(69941),
    a = e.i(19168);

  function l({
    opened: e,
    onClose: l,
    onOverlayClose: d,
    onCloseButtonClick: i,
    onEscapeClose: s,
    title: u,
    centered: _ = !0,
    size: n = "auto",
    closeOnOverlayClick: c = !0,
    withCloseButton: m = !0,
    centerTitle: g = !1,
    className: p,
    bodyClassName: f,
    children: h
  }) {
    let [j, v] = (0, t.useState)(e), [P, w] = (0, t.useState)(!1), [T, y] = (0, t.useState)(null), Z = (0, t.useRef)(null), G = (0, t.useRef)(null), b = (0, t.useRef)(null), x = (0, t.useRef)(!1), L = e => {
      if (!e) return !1;
      let r = window.getComputedStyle(e).overflowY;
      return e.scrollHeight > e.clientHeight + 1 && ("auto" === r || "scroll" === r)
    }, C = e => {
      let r = G.current;
      if (!r || !e) return null;
      let t = e;
      for (; t && r.contains(t);) {
        if (L(t)) return t;
        t = t.parentElement
      }
      return null
    }, B = (e, r) => r < 0 ? e.scrollTop > 0 : !(r > 0) || e.scrollTop + e.clientHeight < e.scrollHeight;
    if ((0, t.useEffect)(() => {
        if (e) {
          v(!0), w(!1);
          return
        }
        return w(!0), Z.current = setTimeout(() => {
          v(!1), w(!1)
        }, 180), () => {
          Z.current && (clearTimeout(Z.current), Z.current = null)
        }
      }, [e]), (0, t.useEffect)(() => {
        if ("undefined" == typeof document) return;
        let e = document.createElement("div");
        return document.body.appendChild(e), y(e), () => {
          document.body.removeChild(e), y(null)
        }
      }, []), (0, t.useEffect)(() => {
        if (!j) return;
        let e = e => {
            "Escape" === e.key ? s ? s() : l() : ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(e.key) && !G.current?.contains(e.target) && e.preventDefault()
          },
          r = e => {
            let r = G.current;
            if (!r) return void e.preventDefault();
            let t = e.target;
            if (!(t && r.contains(t))) return void e.preventDefault();
            if (e instanceof WheelEvent) {
              let r = C(t);
              r && B(r, e.deltaY) || e.preventDefault();
              return
            }
            if (e instanceof TouchEvent) {
              let r = e.touches[0]?.clientY ?? null,
                o = b.current;
              b.current = r;
              let a = C(t);
              a && B(a, null !== o && null !== r ? o - r : 0) || e.preventDefault()
            }
          },
          t = {
            passive: !1
          };
        return window.addEventListener("keydown", e, {
          passive: !1
        }), window.addEventListener("wheel", r, t), window.addEventListener("touchmove", r, t), () => {
          window.removeEventListener("keydown", e), window.removeEventListener("wheel", r, t), window.removeEventListener("touchmove", r, t)
        }
      }, [B, C, l, s, j]), (0, t.useEffect)(() => {
        if (!j) return;
        let e = e => {
          if (!G.current?.contains(e.target)) {
            b.current = null;
            return
          }
          b.current = e.touches[0]?.clientY ?? null
        };
        return window.addEventListener("touchstart", e, {
          passive: !0
        }), () => window.removeEventListener("touchstart", e)
      }, [j]), !j || !T) return null;
    let k = "number" == typeof n ? `${n}px` : n,
      M = {};
    k && "auto" !== k ? M.maxWidth = k : (M.width = "fit-content", M.maxWidth = "clamp(100%, 100%, 850px)", M.boxSizing = "border-box");
    let E = P ? "closing" : "open",
      A = (0, r.jsx)("div", {
        className: a.default.overlay,
        "data-centered": _,
        "data-state": E,
        onMouseDown: e => {
          x.current = e.target === e.currentTarget
        },
        onClick: e => {
          let r = e.target === e.currentTarget,
            t = c && r && x.current;
          x.current = !1, t && (d ? d() : l())
        },
        children: (0, r.jsxs)("div", {
          className: `${a.default.modal} ${p??""}`,
          "data-state": E,
          style: M,
          ref: G,
          onClick: e => e.stopPropagation(),
          children: [(u || m) && (0, r.jsxs)("div", {
            className: a.default.header,
            children: [u && (0, r.jsx)("h2", {
              className: a.default.title,
              style: g ? {
                textAlign: "center",
                width: "100%"
              } : {},
              children: u
            }), m && (0, r.jsx)("button", {
              type: "button",
              className: a.default.closeButton,
              onClick: i ?? l,
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
            className: `${a.default.body} ${f??""}`,
            children: h
          })]
        })
      });
    return (0, o.createPortal)(A, T)
  }
  e.s(["default", () => l])
}, 71283, e => {
  e.v({
    activityImage: "userPage-module__-jTdZG__activityImage",
    applemusic: "userPage-module__-jTdZG__applemusic",
    audioContainer: "userPage-module__-jTdZG__audioContainer",
    audioControls: "userPage-module__-jTdZG__audioControls",
    audioCover: "userPage-module__-jTdZG__audioCover",
    audioIcon: "userPage-module__-jTdZG__audioIcon",
    audioLyricsBackdropLayer: "userPage-module__-jTdZG__audioLyricsBackdropLayer",
    audioLyricsBlobPrimary: "userPage-module__-jTdZG__audioLyricsBlobPrimary",
    audioLyricsBlobPrimaryDrift: "userPage-module__-jTdZG__audioLyricsBlobPrimaryDrift",
    audioLyricsBlobSecondary: "userPage-module__-jTdZG__audioLyricsBlobSecondary",
    audioLyricsBlobSecondaryDrift: "userPage-module__-jTdZG__audioLyricsBlobSecondaryDrift",
    audioLyricsCoverBackdrop: "userPage-module__-jTdZG__audioLyricsCoverBackdrop",
    audioLyricsEmpty: "userPage-module__-jTdZG__audioLyricsEmpty",
    audioLyricsLine: "userPage-module__-jTdZG__audioLyricsLine",
    audioLyricsLineActive: "userPage-module__-jTdZG__audioLyricsLineActive",
    audioLyricsLineFaded: "userPage-module__-jTdZG__audioLyricsLineFaded",
    audioLyricsLineNear: "userPage-module__-jTdZG__audioLyricsLineNear",
    audioLyricsLinePast: "userPage-module__-jTdZG__audioLyricsLinePast",
    audioLyricsLineText: "userPage-module__-jTdZG__audioLyricsLineText",
    audioLyricsLineTextEnhanced: "userPage-module__-jTdZG__audioLyricsLineTextEnhanced",
    audioLyricsShell: "userPage-module__-jTdZG__audioLyricsShell",
    audioLyricsViewport: "userPage-module__-jTdZG__audioLyricsViewport",
    audioLyricsWord: "userPage-module__-jTdZG__audioLyricsWord",
    audioLyricsWordActive: "userPage-module__-jTdZG__audioLyricsWordActive",
    audioLyricsWordBody: "userPage-module__-jTdZG__audioLyricsWordBody",
    audioLyricsWordPast: "userPage-module__-jTdZG__audioLyricsWordPast",
    audioLyricsWordUpcoming: "userPage-module__-jTdZG__audioLyricsWordUpcoming",
    audioPlayer: "userPage-module__-jTdZG__audioPlayer",
    audioPlayerInner: "userPage-module__-jTdZG__audioPlayerInner",
    audioProgress: "userPage-module__-jTdZG__audioProgress",
    audioProgressBar: "userPage-module__-jTdZG__audioProgressBar",
    audioProgressBarWrapper: "userPage-module__-jTdZG__audioProgressBarWrapper",
    audioProgressPlaying: "userPage-module__-jTdZG__audioProgressPlaying",
    audioProgressThumb: "userPage-module__-jTdZG__audioProgressThumb",
    audioProgressTrack: "userPage-module__-jTdZG__audioProgressTrack",
    audioTitle: "userPage-module__-jTdZG__audioTitle",
    avatarDecorationLayout1: "userPage-module__-jTdZG__avatarDecorationLayout1",
    avatarDecorationLayout2: "userPage-module__-jTdZG__avatarDecorationLayout2",
    avatarDecorationLayout3: "userPage-module__-jTdZG__avatarDecorationLayout3",
    avatarDecorationLayout4: "userPage-module__-jTdZG__avatarDecorationLayout4",
    avatarWrapper: "userPage-module__-jTdZG__avatarWrapper",
    backgroundColor: "userPage-module__-jTdZG__backgroundColor",
    backgroundImage: "userPage-module__-jTdZG__backgroundImage",
    backgroundVideo: "userPage-module__-jTdZG__backgroundVideo",
    badgeContainer: "userPage-module__-jTdZG__badgeContainer",
    badgeContainerFlex: "userPage-module__-jTdZG__badgeContainerFlex",
    bitcoin: "userPage-module__-jTdZG__bitcoin",
    bluesky: "userPage-module__-jTdZG__bluesky",
    blurredBackground: "userPage-module__-jTdZG__blurredBackground",
    bottomLeftWrapperGlobal: "userPage-module__-jTdZG__bottomLeftWrapperGlobal",
    bottomLeftWrapperLocation: "userPage-module__-jTdZG__bottomLeftWrapperLocation",
    bubbleAnimation: "userPage-module__-jTdZG__bubbleAnimation",
    bubbleExit: "userPage-module__-jTdZG__bubbleExit",
    bubbleOut: "userPage-module__-jTdZG__bubbleOut",
    bugHunter: "userPage-module__-jTdZG__bugHunter",
    buymeacoffee: "userPage-module__-jTdZG__buymeacoffee",
    cashapp: "userPage-module__-jTdZG__cashapp",
    christmas2024: "userPage-module__-jTdZG__christmas2024",
    christmas2025: "userPage-module__-jTdZG__christmas2025",
    clickToEnterOverlay: "userPage-module__-jTdZG__clickToEnterOverlay",
    clickToEnterText: "userPage-module__-jTdZG__clickToEnterText",
    controlButtons: "userPage-module__-jTdZG__controlButtons",
    customBadge: "userPage-module__-jTdZG__customBadge",
    customIcon: "userPage-module__-jTdZG__customIcon",
    customUrlWarning: "userPage-module__-jTdZG__customUrlWarning",
    custom_url: "userPage-module__-jTdZG__custom_url",
    defaultEmoji: "userPage-module__-jTdZG__defaultEmoji",
    discord: "userPage-module__-jTdZG__discord",
    discordActivity: "userPage-module__-jTdZG__discordActivity",
    discordActivityEnter: "userPage-module__-jTdZG__discordActivityEnter",
    discordActivityExit: "userPage-module__-jTdZG__discordActivityExit",
    discordActivityFadeIn: "userPage-module__-jTdZG__discordActivityFadeIn",
    discordActivityFadeOut: "userPage-module__-jTdZG__discordActivityFadeOut",
    discordActivityImageLayer: "userPage-module__-jTdZG__discordActivityImageLayer",
    discordActivityImageStack: "userPage-module__-jTdZG__discordActivityImageStack",
    discordActivityTextLayer: "userPage-module__-jTdZG__discordActivityTextLayer",
    discordActivityTextStack: "userPage-module__-jTdZG__discordActivityTextStack",
    discordAvatar: "userPage-module__-jTdZG__discordAvatar",
    discordBadge: "userPage-module__-jTdZG__discordBadge",
    discordEmoji: "userPage-module__-jTdZG__discordEmoji",
    discordEmojiText: "userPage-module__-jTdZG__discordEmojiText",
    discordLoading: "userPage-module__-jTdZG__discordLoading",
    discordNotConnected: "userPage-module__-jTdZG__discordNotConnected",
    discordPresenceContainer: "userPage-module__-jTdZG__discordPresenceContainer",
    discordPresenceWrapper: "userPage-module__-jTdZG__discordPresenceWrapper",
    discordStatus: "userPage-module__-jTdZG__discordStatus",
    discordStatusIcon: "userPage-module__-jTdZG__discordStatusIcon",
    discordUser: "userPage-module__-jTdZG__discordUser",
    discordUserBadges: "userPage-module__-jTdZG__discordUserBadges",
    discordUserDiv: "userPage-module__-jTdZG__discordUserDiv",
    discordUserInformation: "userPage-module__-jTdZG__discordUserInformation",
    domainLegend: "userPage-module__-jTdZG__domainLegend",
    donor: "userPage-module__-jTdZG__donor",
    easter2025: "userPage-module__-jTdZG__easter2025",
    easter2026: "userPage-module__-jTdZG__easter2026",
    email: "userPage-module__-jTdZG__email",
    eth: "userPage-module__-jTdZG__eth",
    facebook: "userPage-module__-jTdZG__facebook",
    fadeIn: "userPage-module__-jTdZG__fadeIn",
    fadeOut: "userPage-module__-jTdZG__fadeOut",
    fadeUp: "userPage-module__-jTdZG__fadeUp",
    fadeUpStart: "userPage-module__-jTdZG__fadeUpStart",
    gifter: "userPage-module__-jTdZG__gifter",
    github: "userPage-module__-jTdZG__github",
    gitlab: "userPage-module__-jTdZG__gitlab",
    guildTag: "userPage-module__-jTdZG__guildTag",
    helper: "userPage-module__-jTdZG__helper",
    hide: "userPage-module__-jTdZG__hide",
    highlight: "userPage-module__-jTdZG__highlight",
    hone: "userPage-module__-jTdZG__hone",
    imageHost: "userPage-module__-jTdZG__imageHost",
    inner: "userPage-module__-jTdZG__inner",
    instagram: "userPage-module__-jTdZG__instagram",
    kick: "userPage-module__-jTdZG__kick",
    "ko-fi": "userPage-module__-jTdZG__ko-fi",
    lastfm: "userPage-module__-jTdZG__lastfm",
    linkedin: "userPage-module__-jTdZG__linkedin",
    locationMarker: "userPage-module__-jTdZG__locationMarker",
    ltc: "userPage-module__-jTdZG__ltc",
    mainContainer: "userPage-module__-jTdZG__mainContainer",
    mainControlButton: "userPage-module__-jTdZG__mainControlButton",
    modalButtons: "userPage-module__-jTdZG__modalButtons",
    monero: "userPage-module__-jTdZG__monero",
    namemc: "userPage-module__-jTdZG__namemc",
    nightTime: "userPage-module__-jTdZG__nightTime",
    offlineText: "userPage-module__-jTdZG__offlineText",
    og: "userPage-module__-jTdZG__og",
    oldTV: "userPage-module__-jTdZG__oldTV",
    onlyfans: "userPage-module__-jTdZG__onlyfans",
    overlayExit: "userPage-module__-jTdZG__overlayExit",
    overlayRise: "userPage-module__-jTdZG__overlayRise",
    patreon: "userPage-module__-jTdZG__patreon",
    payhip: "userPage-module__-jTdZG__payhip",
    paypal: "userPage-module__-jTdZG__paypal",
    pinterest: "userPage-module__-jTdZG__pinterest",
    playstation: "userPage-module__-jTdZG__playstation",
    premium: "userPage-module__-jTdZG__premium",
    profileBorderLayer: "userPage-module__-jTdZG__profileBorderLayer",
    profilePulseBorder: "userPage-module__-jTdZG__profilePulseBorder",
    profilePulseBorderLayer: "userPage-module__-jTdZG__profilePulseBorderLayer",
    profileShimmerBorderLayer: "userPage-module__-jTdZG__profileShimmerBorderLayer",
    profileViews: "userPage-module__-jTdZG__profileViews",
    profileViewsContainer: "userPage-module__-jTdZG__profileViewsContainer",
    profileViewsInline: "userPage-module__-jTdZG__profileViewsInline",
    promoBubble: "userPage-module__-jTdZG__promoBubble",
    promoClose: "userPage-module__-jTdZG__promoClose",
    promoLink: "userPage-module__-jTdZG__promoLink",
    promoLogo: "userPage-module__-jTdZG__promoLogo",
    promoOverlay: "userPage-module__-jTdZG__promoOverlay",
    promoSub: "userPage-module__-jTdZG__promoSub",
    promoTitle: "userPage-module__-jTdZG__promoTitle",
    rainbowAnimation: "userPage-module__-jTdZG__rainbowAnimation",
    rainbowName: "userPage-module__-jTdZG__rainbowName",
    reddit: "userPage-module__-jTdZG__reddit",
    roblox: "userPage-module__-jTdZG__roblox",
    scaleFade: "userPage-module__-jTdZG__scaleFade",
    scaleFadeStart: "userPage-module__-jTdZG__scaleFadeStart",
    second: "userPage-module__-jTdZG__second",
    serverBooster: "userPage-module__-jTdZG__serverBooster",
    shimmerProfileBorder: "userPage-module__-jTdZG__shimmerProfileBorder",
    sideControlButton: "userPage-module__-jTdZG__sideControlButton",
    signal: "userPage-module__-jTdZG__signal",
    slideUp: "userPage-module__-jTdZG__slideUp",
    snapchat: "userPage-module__-jTdZG__snapchat",
    snowflake: "userPage-module__-jTdZG__snowflake",
    snowflakes: "userPage-module__-jTdZG__snowflakes",
    "snowflakes-fall": "userPage-module__-jTdZG__snowflakes-fall",
    "snowflakes-shake": "userPage-module__-jTdZG__snowflakes-shake",
    solana: "userPage-module__-jTdZG__solana",
    soundcloud: "userPage-module__-jTdZG__soundcloud",
    spotify: "userPage-module__-jTdZG__spotify",
    staff: "userPage-module__-jTdZG__staff",
    steam: "userPage-module__-jTdZG__steam",
    telegram: "userPage-module__-jTdZG__telegram",
    tellonym: "userPage-module__-jTdZG__tellonym",
    templatePreviewAuthor: "userPage-module__-jTdZG__templatePreviewAuthor",
    templatePreviewContainer: "userPage-module__-jTdZG__templatePreviewContainer",
    templatePreviewDetails: "userPage-module__-jTdZG__templatePreviewDetails",
    templatePreviewImage: "userPage-module__-jTdZG__templatePreviewImage",
    templatePreviewLabel: "userPage-module__-jTdZG__templatePreviewLabel",
    templatePreviewLink: "userPage-module__-jTdZG__templatePreviewLink",
    templatePreviewMessage: "userPage-module__-jTdZG__templatePreviewMessage",
    templatePreviewName: "userPage-module__-jTdZG__templatePreviewName",
    theMillion: "userPage-module__-jTdZG__theMillion",
    third: "userPage-module__-jTdZG__third",
    threads: "userPage-module__-jTdZG__threads",
    tiktok: "userPage-module__-jTdZG__tiktok",
    topRightWrapperGlobal: "userPage-module__-jTdZG__topRightWrapperGlobal",
    twitch: "userPage-module__-jTdZG__twitch",
    unfold: "userPage-module__-jTdZG__unfold",
    unfoldStart: "userPage-module__-jTdZG__unfoldStart",
    userContainer: "userPage-module__-jTdZG__userContainer",
    userContainerLayout3: "userPage-module__-jTdZG__userContainerLayout3",
    userContainerLayout4: "userPage-module__-jTdZG__userContainerLayout4",
    userContainerWrapper: "userPage-module__-jTdZG__userContainerWrapper",
    userSocial: "userPage-module__-jTdZG__userSocial",
    userSocials: "userPage-module__-jTdZG__userSocials",
    usernameContainerFlex: "userPage-module__-jTdZG__usernameContainerFlex",
    venmo: "userPage-module__-jTdZG__venmo",
    verified: "userPage-module__-jTdZG__verified",
    vk: "userPage-module__-jTdZG__vk",
    volumeButton: "userPage-module__-jTdZG__volumeButton",
    volumeSlider: "userPage-module__-jTdZG__volumeSlider",
    warningModal: "userPage-module__-jTdZG__warningModal",
    winner: "userPage-module__-jTdZG__winner",
    x: "userPage-module__-jTdZG__x",
    xbox: "userPage-module__-jTdZG__xbox",
    xrp: "userPage-module__-jTdZG__xrp",
    youtube: "userPage-module__-jTdZG__youtube",
    zoomInSpin: "userPage-module__-jTdZG__zoomInSpin"
  })
}, 13535, e => {
  "use strict";
  var r = e.i(48277),
    t = e.i(71283);
  let o = {
    staff: (0, r.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t.default.staff,
      width: "1em",
      height: "1em",
      viewBox: "2.3 2 19.39 20",
      children: (0, r.jsx)("path", {
        fill: "currentColor",
        d: "m16.06 13.09l5.63 5.59l-3.32 3.28l-5.59-5.59v-.92l2.36-2.36h.92m.91-2.53L16 9.6l-4.79 4.8v1.97L5.58 22L2.3 18.68l5.59-5.59h1.97l.78-.78L6.8 8.46H5.5L2.69 5.62L5.31 3l2.8 2.8v1.31L12 10.95l2.66-2.66l-.96-1.01L15 5.97h-2.66l-.65-.65L15 2l.66.66v2.66L16.97 4l3.28 3.28c1.09 1.1 1.09 2.89 0 3.98l-1.97-2.01l-1.31 1.31Z"
      })
    }),
    premium: (0, r.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t.default.premium,
      width: "1em",
      height: "1em",
      viewBox: "23 32 465 448",
      children: (0, r.jsx)("path", {
        fill: "currentColor",
        d: "M396.31 32H264l84.19 112.26L396.31 32zm-280.62 0l48.12 112.26L248 32H115.69zM256 74.67L192 160h128l-64-85.33zm166.95-23.61L376.26 160H488L422.95 51.06zm-333.9 0L23 160h112.74L89.05 51.06zM146.68 192H24l222.8 288h.53L146.68 192zm218.64 0L264.67 480h.53L488 192H365.32zm-35.93 0H182.61L256 400l73.39-208z"
      })
    }),
    verified: (0, r.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t.default.verified,
      width: "1em",
      height: "1em",
      viewBox: "1 1.5 22 21",
      children: (0, r.jsx)("path", {
        fill: "currentColor",
        d: "m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45l-3.4 1.45Zm2.35-6.95L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12l3.55 3.55Z"
      })
    }),
    donor: (0, r.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t.default.donor,
      width: "1em",
      height: "1em",
      viewBox: "2.01 2.01 19.98 19.98",
      children: (0, r.jsx)("path", {
        d: "M2.047 14.668a.994.994 0 0 0 .465.607l1.91 1.104v2.199a1 1 0 0 0 1 1h2.199l1.104 1.91a1.01 1.01 0 0 0 .866.5c.174 0 .347-.046.501-.135L12 20.75l1.91 1.104a1.001 1.001 0 0 0 1.366-.365l1.103-1.91h2.199a1 1 0 0 0 1-1V16.38l1.91-1.104a1 1 0 0 0 .365-1.367L20.75 12l1.104-1.908a1 1 0 0 0-.365-1.366l-1.91-1.104v-2.2a1 1 0 0 0-1-1H16.38l-1.103-1.909a1.008 1.008 0 0 0-.607-.466a.993.993 0 0 0-.759.1L12 3.25l-1.909-1.104a1 1 0 0 0-1.366.365l-1.104 1.91H5.422a1 1 0 0 0-1 1V7.62l-1.91 1.104a1.003 1.003 0 0 0-.365 1.368L3.251 12l-1.104 1.908a1.009 1.009 0 0 0-.1.76zM12 13c-3.48 0-4-1.879-4-3c0-1.287 1.029-2.583 3-2.915V6.012h2v1.109c1.734.41 2.4 1.853 2.4 2.879h-1l-1 .018C13.386 9.638 13.185 9 12 9c-1.299 0-2 .515-2 1c0 .374 0 1 2 1c3.48 0 4 1.879 4 3c0 1.287-1.029 2.583-3 2.915V18h-2v-1.08c-2.339-.367-3-2.003-3-2.92h2c.011.143.159 1 2 1c1.38 0 2-.585 2-1c0-.325 0-1-2-1z",
        fill: "currentColor"
      })
    }),
    og: (0, r.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t.default.og,
      width: "1em",
      height: "1em",
      viewBox: "4.39 2 15.22 20.97",
      children: (0, r.jsx)("path", {
        fill: "currentColor",
        d: "m12 8.5l2.116 5.088l5.492.44l-4.184 3.585l1.278 5.36L12 20.1l-4.702 2.872l1.278-5.36l-4.184-3.584l5.492-.44L12 8.5ZM8 2v9H6V2h2Zm10 0v9h-2V2h2Zm-5 0v5h-2V2h2Z"
      })
    }),
    serverBooster: (0, r.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t.default.serverBooster,
      width: "1em",
      height: "1em",
      viewBox: "4.99 3 14 18",
      children: (0, r.jsx)("path", {
        fill: "currentColor",
        d: "M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.58.58 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27Z"
      })
    }),
    winner: (0, r.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t.default.winner,
      width: "1em",
      height: "1em",
      viewBox: "2 2 20 20.75",
      children: (0, r.jsxs)("g", {
        fill: "currentColor",
        children: [(0, r.jsx)("path", {
          d: "M22 8.162v.073c0 .86 0 1.291-.207 1.643c-.207.352-.584.561-1.336.98l-.793.44c.546-1.848.729-3.834.796-5.532l.01-.221l.002-.052c.651.226 1.017.395 1.245.711c.283.393.283.915.283 1.958Zm-20 0v.073c0 .86 0 1.291.207 1.643c.207.352.584.561 1.336.98l.794.44c-.547-1.848-.73-3.834-.797-5.532l-.01-.221l-.001-.052c-.652.226-1.018.395-1.246.711C2 6.597 2 7.12 2 8.162Z"
        }), (0, r.jsx)("path", {
          fillRule: "evenodd",
          d: "M16.377 2.347A26.373 26.373 0 0 0 12 2c-1.783 0-3.253.157-4.377.347c-1.139.192-1.708.288-2.184.874c-.475.586-.45 1.219-.4 2.485c.173 4.348 1.111 9.78 6.211 10.26V19.5H9.82a1 1 0 0 0-.98.804l-.19.946H6a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5h-2.65l-.19-.946a1 1 0 0 0-.98-.804h-1.43v-3.534c5.1-.48 6.039-5.911 6.211-10.26c.05-1.266.076-1.9-.4-2.485c-.476-.586-1.045-.682-2.184-.874Zm-3.59 3.46a.75.75 0 0 1 .463.693v4a.75.75 0 0 1-1.5 0V8.31l-.22.22a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 .817-.163Z",
          clipRule: "evenodd"
        })]
      })
    }),
    second: (0, r.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t.default.second,
      width: "1em",
      height: "1em",
      viewBox: "5 2 14 20",
      children: (0, r.jsxs)("g", {
        fill: "currentColor",
        children: [(0, r.jsx)("path", {
          fillRule: "evenodd",
          d: "M12 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14Zm0-10c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532c-.088.283.164.577.667 1.165l.13.152c.143.167.215.25.247.354c.032.104.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135c.104 0 .202.045.399.135l.178.082c.691.319 1.037.477 1.267.303c.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438c.032-.103.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 6.34 12.284 6 12 6Z",
          clipRule: "evenodd"
        }), (0, r.jsx)("path", {
          d: "m7.093 15.941l-.379 1.382c-.628 2.292-.942 3.438-.523 4.065c.147.22.344.396.573.513c.652.332 1.66-.193 3.675-1.243c.67-.35 1.006-.524 1.362-.562a1.87 1.87 0 0 1 .398 0c.356.038.691.213 1.362.562c2.015 1.05 3.023 1.575 3.675 1.243c.229-.117.426-.293.573-.513c.42-.627.105-1.773-.523-4.065l-.379-1.382A8.461 8.461 0 0 1 12 17.5a8.46 8.46 0 0 1-4.907-1.559Z"
        })]
      })
    }),
    third: (0, r.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t.default.third,
      width: "1em",
      height: "1em",
      viewBox: "5 2 14 20",
      children: (0, r.jsxs)("g", {
        fill: "currentColor",
        children: [(0, r.jsx)("path", {
          fillRule: "evenodd",
          d: "M12 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14Zm0-10c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532c-.088.283.164.577.667 1.165l.13.152c.143.167.215.25.247.354c.032.104.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135c.104 0 .202.045.399.135l.178.082c.691.319 1.037.477 1.267.303c.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438c.032-.103.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 6.34 12.284 6 12 6Z",
          clipRule: "evenodd"
        }), (0, r.jsx)("path", {
          d: "m7.093 15.941l-.379 1.382c-.628 2.292-.942 3.438-.523 4.065c.147.22.344.396.573.513c.652.332 1.66-.193 3.675-1.243c.67-.35 1.006-.524 1.362-.562a1.87 1.87 0 0 1 .398 0c.356.038.691.213 1.362.562c2.015 1.05 3.023 1.575 3.675 1.243c.229-.117.426-.293.573-.513c.42-.627.105-1.773-.523-4.065l-.379-1.382A8.461 8.461 0 0 1 12 17.5a8.46 8.46 0 0 1-4.907-1.559Z"
        })]
      })
    }),
    imagehost: (0, r.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t.default.imageHost,
      width: "1em",
      height: "1em",
      viewBox: "2 2 20 20",
      children: (0, r.jsx)("path", {
        fill: "currentColor",
        d: "M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.329.452l-.595.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182l.328-.588Z"
      })
    }),
    bugHunter: (0, r.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t.default.bugHunter,
      width: "1em",
      height: "1em",
      viewBox: "4 3.41 16 17.59",
      children: (0, r.jsx)("path", {
        fill: "currentColor",
        d: "M19 8h-1.81a5.985 5.985 0 0 0-1.82-1.96l.93-.93a.996.996 0 1 0-1.41-1.41l-1.47 1.47C12.96 5.06 12.49 5 12 5s-.96.06-1.41.17L9.11 3.7A.996.996 0 1 0 7.7 5.11l.92.93C7.88 6.55 7.26 7.22 6.81 8H5c-.55 0-1 .45-1 1s.45 1 1 1h1.09c-.05.33-.09.66-.09 1v1H5c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .34.04.67.09 1H5c-.55 0-1 .45-1 1s.45 1 1 1h1.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H19c.55 0 1-.45 1-1s-.45-1-1-1h-1.09c.05-.33.09-.66.09-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1h-1v-1c0-.34-.04-.67-.09-1H19c.55 0 1-.45 1-1s-.45-1-1-1m-6 8h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1m0-4h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1"
      })
    }),
    christmas2024: (0, r.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t.default.christmas2024,
      width: "1em",
      height: "1em",
      viewBox: "0 0 14 14",
      children: (0, r.jsx)("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M6.98 0C8 0 8.986.32 9.804.907L8.046 3.632a1.615 1.615 0 0 0-2.217.081L2.845 2.511a.63.63 0 0 0-.094-.03A4.844 4.844 0 0 1 6.98 0M2.29 3.627a4.845 4.845 0 0 0-.156 1.22v1.076a1.615 1.615 0 0 0 3.231 0v-1.05L2.378 3.67a.629.629 0 0 1-.088-.043m6.306 1.458l2.134-3.31a4.846 4.846 0 0 1 1.097 3.071v1.27l-3.231 3.23v-4.26Zm0 6.03v1.27a1.616 1.616 0 0 0 3.23 0V7.884z",
        clipRule: "evenodd"
      })
    }),
    helper: (0, r.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t.default.helper,
      width: "1em",
      height: "1em",
      viewBox: "5 2 14 20",
      children: (0, r.jsx)("path", {
        fill: "currentColor",
        d: "M10 18q-.825 0-1.412-.587T8 16v-1.25q-1.425-.975-2.212-2.5T5 9q0-2.925 2.038-4.962T12 2t4.963 2.038T19 9q0 1.725-.788 3.238T16 14.75V16q0 .825-.587 1.413T14 18zm0 4q-.425 0-.712-.288T9 21v-1h6v1q0 .425-.288.713T14 22z"
      })
    }),
    easter2025: (0, r.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t.default.easter2025,
      width: "1em",
      height: "1em",
      viewBox: "4.5 2 15 19.99",
      children: (0, r.jsx)("path", {
        fill: "currentColor",
        d: "M6.89 6.36C8.23 3.91 10 2 12 2s3.77 1.91 5.11 4.36c-.85.21-1.61.71-2.11 1.41a3.71 3.71 0 0 0-5.2-.8c-.3.22-.58.49-.8.8c-.5-.7-1.26-1.2-2.11-1.41M15 18.06l-3-3l-3 3l-3-3l-1.27 1.27a7.504 7.504 0 0 0 9.11 5.43a7.53 7.53 0 0 0 5.43-5.43L18 15.06zm-6-2.12l3-3l3 3l3-3l1.5 1.5c-.13-2.31-.7-4.58-1.69-6.68c-1.16.1-2.06 1.07-2.06 2.24h-1.5A2.25 2.25 0 0 0 12 7.75A2.25 2.25 0 0 0 9.75 10h-1.5c0-1.17-.9-2.14-2.06-2.24c-.99 2.1-1.56 4.37-1.69 6.68l1.5-1.5z"
      })
    }),
    gifter: (0, r.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t.default.gifter,
      width: "1em",
      height: "1em",
      viewBox: "2 2 16 16",
      children: (0, r.jsxs)("g", {
        fill: "currentColor",
        children: [(0, r.jsx)("path", {
          fillRule: "evenodd",
          d: "M14 6a2.5 2.5 0 0 0-4-3a2.5 2.5 0 0 0-4 3H3.25C2.56 6 2 6.56 2 7.25v.5C2 8.44 2.56 9 3.25 9h6V6h1.5v3h6C17.44 9 18 8.44 18 7.75v-.5C18 6.56 17.44 6 16.75 6zm-1-1.5a1 1 0 0 1-1 1h-1v-1a1 1 0 1 1 2 0m-6 0a1 1 0 0 0 1 1h1v-1a1 1 0 0 0-2 0",
          clipRule: "evenodd"
        }), (0, r.jsx)("path", {
          d: "M9.25 10.5H3v4.75A2.75 2.75 0 0 0 5.75 18h3.5zm1.5 7.5v-7.5H17v4.75A2.75 2.75 0 0 1 14.25 18z"
        })]
      })
    }),
    theMillion: (0, r.jsxs)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t.default.theMillion,
      width: "1em",
      height: "1em",
      viewBox: "2.01 1 20.99 21",
      children: [(0, r.jsx)("path", {
        d: "M23 7a8.44 8.44 0 0 0-5 1.31c-.36-.41-.73-.82-1.12-1.21l-.29-.27l.14-.12a3.15 3.15 0 0 0 .9-3.49A3.9 3.9 0 0 0 14 1v2a2 2 0 0 1 1.76 1c.17.4 0 .84-.47 1.31l-.23.21a16.71 16.71 0 0 0-3.41-2.2c-2.53-1.14-3.83-.61-4.47 0a2.18 2.18 0 0 0-.46.68l-.18.53L5.1 8.87C6.24 11.71 9 16.76 15 18.94l5-1.66a1 1 0 0 0 .43-.31l.21-.18c1.43-1.44.51-4.21-1.41-6.9A6.63 6.63 0 0 1 23 9zm-3.79 8.37h-.06c-.69.37-3.55-.57-6.79-3.81c-.34-.34-.66-.67-.95-1c-.1-.11-.19-.23-.29-.35l-.53-.64l-.28-.39c-.14-.19-.28-.38-.4-.56s-.16-.26-.24-.39s-.22-.34-.31-.51s-.13-.24-.19-.37s-.17-.28-.23-.42s-.09-.23-.14-.34s-.11-.27-.15-.4S8.6 6 8.58 5.9s-.06-.24-.08-.34a2 2 0 0 1 0-.24a1.15 1.15 0 0 1 0-.26l.11-.31c.17-.18.91-.23 2.23.37a13.83 13.83 0 0 1 2.49 1.54A4.17 4.17 0 0 1 12 7v2a6.43 6.43 0 0 0 3-.94l.49.46c.44.43.83.86 1.19 1.27A5.31 5.31 0 0 0 16 13.2l2-.39a3.23 3.23 0 0 1 0-1.14c1.29 1.97 1.53 3.39 1.21 3.7z",
        fill: "currentColor"
      }), (0, r.jsx)("path", {
        d: "M4.4 11l-2.23 6.7A3.28 3.28 0 0 0 5.28 22a3.21 3.21 0 0 0 1-.17l6.52-2.17A18.7 18.7 0 0 1 4.4 11z",
        fill: "currentColor"
      })]
    }),
    domainLegend: (0, r.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t.default.domainLegend,
      width: "1em",
      height: "1em",
      viewBox: "2.18 2.38 19.77 19.77",
      children: (0, r.jsx)("path", {
        fill: "currentColor",
        d: "m2.45 10.575l4.2-4.2q.35-.35.825-.5t.975-.05l1.3.275Q8.4 7.7 7.625 9t-1.5 3.15zm5.125 2.275q.575-1.8 1.563-3.4t2.387-3q2.2-2.2 5.025-3.287t5.275-.663q.425 2.45-.65 5.275T17.9 12.8q-1.375 1.375-3 2.388t-3.425 1.587zm6.9-3q.575.575 1.413.575T17.3 9.85t.575-1.412t-.575-1.413t-1.412-.575t-1.413.575t-.575 1.413t.575 1.412m-.7 12.025l-1.6-3.675q1.85-.725 3.163-1.5t2.912-2.125l.25 1.3q.1.5-.05.988t-.5.837zM4.05 16.05q.875-.875 2.125-.888t2.125.863t.875 2.125t-.875 2.125q-.625.625-2.087 1.075t-4.038.8q.35-2.575.8-4.025T4.05 16.05"
      })
    }),
    hone: (0, r.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t.default.hone,
      width: "1em",
      height: "1em",
      viewBox: "2 3 20 17.35",
      children: (0, r.jsx)("path", {
        fill: "currentColor",
        d: "M12 16a3 3 0 0 1-3-3c0-1.12.61-2.1 1.5-2.61l9.71-5.62l-5.53 9.58c-.5.98-1.51 1.65-2.68 1.65m0-13c1.81 0 3.5.5 4.97 1.32l-2.1 1.21C14 5.19 13 5 12 5a8 8 0 0 0-8 8c0 2.21.89 4.21 2.34 5.65h.01c.39.39.39 1.02 0 1.41s-1.03.39-1.42.01A9.97 9.97 0 0 1 2 13A10 10 0 0 1 12 3m10 10c0 2.76-1.12 5.26-2.93 7.07c-.39.38-1.02.38-1.41-.01a.996.996 0 0 1 0-1.41A7.95 7.95 0 0 0 20 13c0-1-.19-2-.54-2.9L20.67 8C21.5 9.5 22 11.18 22 13"
      })
    }),
    christmas2025: (0, r.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t.default.christmas2025,
      width: "1em",
      height: "1em",
      viewBox: "2.7 2 18.61 20",
      children: (0, r.jsx)("path", {
        fill: "currentColor",
        d: "m20.79 13.95l-2.33.62l-2-1.13v-2.88l2-1.13l2.33.62l.52-1.93l-1.77-.47l.46-1.77l-1.93-.52l-.62 2.33l-2 1.13L13 7.38V5.12l1.71-1.71L13.29 2L12 3.29L10.71 2L9.29 3.41L11 5.12v2.26L8.5 8.82l-2-1.13l-.58-2.33L4 5.88l.47 1.77l-1.77.47l.52 1.93l2.33-.62l2 1.13v2.89l-2 1.13l-2.33-.62l-.52 1.93l1.77.47L4 18.12l1.93.52l.62-2.33l2-1.13L11 16.62v2.26l-1.71 1.71L10.71 22L12 20.71L13.29 22l1.41-1.41l-1.7-1.71v-2.26l2.5-1.45l2 1.13l.62 2.33l1.88-.51l-.47-1.77l1.77-.47zM9.5 10.56L12 9.11l2.5 1.45v2.88L12 14.89l-2.5-1.45z"
      })
    }),
    easter2026: (0, r.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: t.default.easter2026,
      width: "1em",
      height: "1em",
      viewBox: "5 2 14 19.5",
      children: (0, r.jsx)("path", {
        fill: "currentColor",
        d: "M16.84 14.5c-.26-.17-.62-.61-.79-.82C17.24 12 19 8.87 19 5c0-1.95-.74-3-2-3c-1.54 0-3.96 2.06-5 5.97C10.96 4.06 8.54 2 7 2C5.74 2 5 3.05 5 5c0 3.87 1.76 7 2.95 8.68c-.17.21-.53.65-.79.82c-.5.43-1.66 1.39-1.66 3c0 2.21 1.79 4 4 4c1.55 0 2.5-.56 2.5-.56s.95.56 2.5.56c2.21 0 4-1.79 4-4c0-1.61-1.16-2.57-1.66-3m-7.49-2.3C8.34 10.7 7 8.12 7 5c0-.5.06-.8.12-.97c.94.31 3.24 2.71 3.38 7.64c-.47.12-.84.3-1.15.53m1.15 4.55c-.28 0-.5-.34-.5-.75s.22-.75.5-.75s.5.34.5.75s-.22.75-.5.75M12 19.5c-.55 0-1-.72-1-1s.45-.5 1-.5s1 .22 1 .5s-.45 1-1 1m1.5-2.75c-.28 0-.5-.34-.5-.75s.22-.75.5-.75s.5.34.5.75s-.22.75-.5.75m0-5.08c.14-4.93 2.44-7.33 3.38-7.64c.06.17.12.47.12.97c0 3.12-1.34 5.7-2.35 7.2c-.31-.23-.68-.41-1.15-.53"
      })
    })
  };
  e.s(["default", 0, o])
}]);