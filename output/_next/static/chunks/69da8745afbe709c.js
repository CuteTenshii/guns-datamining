(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 15149, (e, t, a) => {
  t.exports = e.r(77878)
}, 83334, e => {
  e.v({
    isScrollable: "overflowText-module__CP37QG__isScrollable",
    overflowText: "overflowText-module__CP37QG__overflowText",
    overflowTextContent: "overflowText-module__CP37QG__overflowTextContent",
    overflowTextPan: "overflowText-module__CP37QG__overflowTextPan"
  })
}, 54169, e => {
  "use strict";
  var t = e.i(48277),
    a = e.i(30668),
    r = e.i(83334);

  function o({
    as: e = "span",
    className: o,
    contentClassName: n,
    children: i,
    style: s,
    title: l
  }) {
    let u = (0, a.useRef)(null),
      d = (0, a.useRef)(null),
      [m, h] = (0, a.useState)(0);
    (0, a.useEffect)(() => {
      let e = u.current,
        t = d.current;
      if (!e || !t) return;
      let a = 0,
        r = !0,
        o = () => {
          cancelAnimationFrame(a), a = requestAnimationFrame(() => {
            if (!r) return;
            let a = Math.ceil(t.scrollWidth - e.clientWidth);
            h(a > 1 ? a : 0)
          })
        };
      o();
      let n = "undefined" != typeof ResizeObserver ? new ResizeObserver(o) : null;
      return n?.observe(e), n?.observe(t), window.addEventListener("resize", o), document.fonts?.ready.then(o), () => {
        r = !1, cancelAnimationFrame(a), n?.disconnect(), window.removeEventListener("resize", o)
      }
    }, [i, s]);
    let c = m > 0 ? {
      "--overflow-text-distance": `-${m}px`,
      "--overflow-text-duration": `${Math.min(Math.max(m/24+4.5,5.5),12)}s`
    } : void 0;
    return (0, t.jsx)(e, {
      ref: u,
      className: `${r.default.overflowText}${o?` ${o}`:""}`,
      style: s,
      title: l,
      children: (0, t.jsx)("span", {
        ref: d,
        className: `${r.default.overflowTextContent}${m>0?` ${r.default.isScrollable}`:""}${n?` ${n}`:""}`,
        style: c,
        children: i
      })
    })
  }
  e.s(["default", () => o])
}, 63016, e => {
  "use strict";
  var t = e.i(30668);
  let a = {
    satoshi: "'Satoshi', sans-serif",
    firacode: "'Fira Code', monospace",
    poppins: "'Poppins', sans-serif",
    array: "'Array', sans-serif",
    drippy: "'Were-Beast', sans-serif",
    minecraft: "'Minecraftia', sans-serif",
    outfit: "'Outfit', sans-serif",
    chillax: "'Chillax', sans-serif",
    velocity: "'Panchang', sans-serif",
    technor: "'Technor', sans-serif",
    jetbrains_mono: "'JetBrains Mono', monospace",
    silkscreen: "'Silkscreen', serif",
    parkinsans: "'Parkinsans', serif"
  };

  function r({
    font: e,
    letterSpacing: r
  }) {
    let o = {
      1: "-0.5px",
      2: null,
      3: "1.5px"
    };
    return (0, t.useEffect)(() => {
      let t = document.head;
      if ("object" == typeof e) {
        let a = e.url;
        new FontFace("USERFONT", `url(${a})`).load().then(e => {
          document.fonts.add(e), document.body.style.fontFamily = "USERFONT, sans-serif";
          let a = document.createElement("style");
          a.innerHTML = `
                    button, input, select, textarea, span, a {
                        font-family: USERFONT, sans-serif;
                        font-size-adjust: initial;

                    }
                `, t.appendChild(a);
          let n = r ? o[r] : null;
          n && (document.body.style.letterSpacing = n)
        }).catch(e => {
          console.error("Failed to load font:", e)
        })
      } else {
        let r = document.createElement("link");
        switch (r.rel = "stylesheet", r.dataset.font = e, e) {
          case "firacode":
            r.href = "https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap";
            break;
          case "poppins":
            r.href = "https://fonts.googleapis.com/css2?family=Poppins&display=swap";
            break;
          case "array":
            r.href = "https://api.fontshare.com/v2/css?f[]=array@400&display=swap";
            break;
          case "drippy":
            r.href = "https://fonts.cdnfonts.com/css/were-beast-2";
            break;
          case "minecraft":
            r.href = "https://fonts.cdnfonts.com/css/minecraftia";
            break;
          case "outfit":
            r.href = "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap";
            break;
          case "chillax":
            r.href = "https://api.fontshare.com/v2/css?f[]=chillax@500&display=swap";
            break;
          case "velocity":
            r.href = "https://api.fontshare.com/v2/css?f[]=panchang@500&display=swap";
            break;
          case "technor":
            r.href = "https://api.fontshare.com/v2/css?f[]=technor@400&display=swap";
            break;
          case "jetbrains_mono":
            r.href = "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital@0;1&display=swap";
            break;
          case "silkscreen":
            r.href = "https://fonts.googleapis.com/css2?family=Silkscreen&display=swap";
            break;
          case "parkinsans":
            r.href = "https://fonts.googleapis.com/css2?family=Parkinsans:wght@500&display=swap";
            break;
          default:
            r.href = ""
        }
        r.href && t.appendChild(r);
        let o = document.createElement("style");
        return o.dataset.font = e, o.innerHTML = `
                body, * {
                    font-family: ${a[e]||"sans-serif"} !important;
                }
            `, t.appendChild(o), () => {
          r.parentNode && t.removeChild(r), o.parentNode && t.removeChild(o)
        }
      }
    }, [e]), null
  }
  e.s(["default", () => r, "fontStyleMapper", 0, a])
}, 30102, e => {
  e.v({
    avatar: "userLayout2-module__9EChwq__avatar",
    bottomLeftDivider: "userLayout2-module__9EChwq__bottomLeftDivider",
    bottomLeftWrapper: "userLayout2-module__9EChwq__bottomLeftWrapper",
    clockHand: "userLayout2-module__9EChwq__clockHand",
    discordInformationWrapper: "userLayout2-module__9EChwq__discordInformationWrapper",
    discordServer: "userLayout2-module__9EChwq__discordServer",
    githubIcon: "userLayout2-module__9EChwq__githubIcon",
    githubInformation: "userLayout2-module__9EChwq__githubInformation",
    githubInformationWrapper: "userLayout2-module__9EChwq__githubInformationWrapper",
    githubWidget: "userLayout2-module__9EChwq__githubWidget",
    guildIcon: "userLayout2-module__9EChwq__guildIcon",
    guildInformation: "userLayout2-module__9EChwq__guildInformation",
    joinButtonLarge: "userLayout2-module__9EChwq__joinButtonLarge",
    lastFMIcon: "userLayout2-module__9EChwq__lastFMIcon",
    lastFMInformation: "userLayout2-module__9EChwq__lastFMInformation",
    lastFMInformationWrapper: "userLayout2-module__9EChwq__lastFMInformationWrapper",
    lastFMWidget: "userLayout2-module__9EChwq__lastFMWidget",
    loadingText: "userLayout2-module__9EChwq__loadingText",
    missingIcon: "userLayout2-module__9EChwq__missingIcon",
    partneredGuild: "userLayout2-module__9EChwq__partneredGuild",
    platform: "userLayout2-module__9EChwq__platform",
    profileSeperator: "userLayout2-module__9EChwq__profileSeperator",
    robloxIcon: "userLayout2-module__9EChwq__robloxIcon",
    robloxInformation: "userLayout2-module__9EChwq__robloxInformation",
    robloxInformationWrapper: "userLayout2-module__9EChwq__robloxInformationWrapper",
    robloxWidget: "userLayout2-module__9EChwq__robloxWidget",
    secondTab: "userLayout2-module__9EChwq__secondTab",
    socialsWrapper: "userLayout2-module__9EChwq__socialsWrapper",
    telegramIcon: "userLayout2-module__9EChwq__telegramIcon",
    telegramInformation: "userLayout2-module__9EChwq__telegramInformation",
    telegramInformationWrapper: "userLayout2-module__9EChwq__telegramInformationWrapper",
    telegramWidget: "userLayout2-module__9EChwq__telegramWidget",
    timezoneAmPm: "userLayout2-module__9EChwq__timezoneAmPm",
    timezoneClockWrapper: "userLayout2-module__9EChwq__timezoneClockWrapper",
    timezoneDigital: "userLayout2-module__9EChwq__timezoneDigital",
    timezoneInfo: "userLayout2-module__9EChwq__timezoneInfo",
    timezoneMeta: "userLayout2-module__9EChwq__timezoneMeta",
    timezoneSeparator: "userLayout2-module__9EChwq__timezoneSeparator",
    timezoneVisitor: "userLayout2-module__9EChwq__timezoneVisitor",
    timezoneWidget: "userLayout2-module__9EChwq__timezoneWidget",
    userDescription: "userLayout2-module__9EChwq__userDescription",
    userProfile: "userLayout2-module__9EChwq__userProfile",
    userProfileSvg: "userLayout2-module__9EChwq__userProfileSvg",
    usernameCursor: "userLayout2-module__9EChwq__usernameCursor",
    usernameStyles: "userLayout2-module__9EChwq__usernameStyles",
    usernameTypewriter: "userLayout2-module__9EChwq__usernameTypewriter",
    usernameWrapper: "userLayout2-module__9EChwq__usernameWrapper",
    verifiedGuild: "userLayout2-module__9EChwq__verifiedGuild",
    widgetContainer: "userLayout2-module__9EChwq__widgetContainer",
    widgetContainerFlex: "userLayout2-module__9EChwq__widgetContainerFlex",
    widgetContainerWrapper: "userLayout2-module__9EChwq__widgetContainerWrapper",
    widgetPlaceholder: "userLayout2-module__9EChwq__widgetPlaceholder",
    youtubeIcon: "userLayout2-module__9EChwq__youtubeIcon",
    youtubeInformation: "userLayout2-module__9EChwq__youtubeInformation",
    youtubeInformationWrapper: "userLayout2-module__9EChwq__youtubeInformationWrapper",
    youtubeWidget: "userLayout2-module__9EChwq__youtubeWidget"
  })
}, 68580, e => {
  "use strict";
  var t = e.i(48277),
    a = e.i(30102);
  let r = {
    profileViews: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
      })
    }),
    userNotFound: (0, t.jsxs)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 48 48",
      children: [(0, t.jsx)("defs", {
        children: (0, t.jsx)("mask", {
          id: "ipTError0",
          children: (0, t.jsx)("path", {
            fill: "#555",
            fillRule: "evenodd",
            stroke: "#fff",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "4",
            d: "m6 11l5-5l13 13L37 6l5 5l-13 13l13 13l-5 5l-13-13l-13 13l-5-5l13-13z",
            clipRule: "evenodd"
          })
        })
      }), (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M0 0h48v48H0z",
        mask: "url(#ipTError0)"
      })]
    }),
    userAvatar: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "4 4 16 16",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12Zm-6 8q-.825 0-1.413-.588T4 18v-.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2v.8q0 .825-.588 1.413T18 20H6Z"
      })
    }),
    status: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 16 16",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M8 4a4 4 0 1 1 0 8a4 4 0 0 1 0-8"
      })
    }),
    muted: (0, t.jsxs)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 48 48",
      children: [(0, t.jsx)("defs", {
        children: (0, t.jsxs)("mask", {
          id: "ipTVolumeMute0",
          children: [(0, t.jsx)("mask", {
            id: "ipTVolumeMute1",
            width: "13",
            height: "13",
            x: "30",
            y: "18",
            maskUnits: "userSpaceOnUse",
            style: {
              maskType: "alpha"
            },
            children: (0, t.jsx)("path", {
              d: "M30 18h13v13H30z"
            })
          }), (0, t.jsxs)("g", {
            fill: "none",
            stroke: "#fff",
            strokeLinejoin: "round",
            strokeWidth: "4",
            children: [(0, t.jsx)("g", {
              strokeLinecap: "round",
              mask: "url(#ipTVolumeMute1)",
              children: (0, t.jsx)("path", {
                d: "m40.735 20.286l-8.486 8.485m.001-8.485l8.485 8.485"
              })
            }), (0, t.jsx)("path", {
              fill: "#555",
              d: "M24 6v36c-7 0-12.201-9.16-12.201-9.16H6a2 2 0 0 1-2-2V17.01a2 2 0 0 1 2-2h5.799S17 6 24 6Z"
            })]
          })]
        })
      }), (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M0 0h48v48H0z",
        mask: "url(#ipTVolumeMute0)"
      })]
    }),
    unmuted: (0, t.jsxs)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 48 48",
      children: [(0, t.jsx)("defs", {
        children: (0, t.jsx)("mask", {
          id: "ipTVolumeNotice0",
          children: (0, t.jsxs)("g", {
            fill: "none",
            stroke: "#fff",
            strokeWidth: "4",
            children: [(0, t.jsx)("path", {
              fill: "#555",
              strokeLinejoin: "round",
              d: "M24 6v36c-7 0-12.201-9.16-12.201-9.16H6a2 2 0 0 1-2-2V17.01a2 2 0 0 1 2-2h5.799S17 6 24 6Z"
            }), (0, t.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M32 15a11.91 11.91 0 0 1 1.684 1.859A12.07 12.07 0 0 1 36 24c0 2.654-.846 5.107-2.278 7.09A11.936 11.936 0 0 1 32 33"
            }), (0, t.jsx)("path", {
              strokeLinecap: "round",
              d: "M34.236 41.186C40.084 37.696 44 31.305 44 24c0-7.192-3.796-13.496-9.493-17.02"
            })]
          })
        })
      }), (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M0 0h48v48H0z",
        mask: "url(#ipTVolumeNotice0)"
      })]
    }),
    followers: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3s1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5S5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05c1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"
      })
    }),
    repositories: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M3.616 19.77q-.667 0-1.141-.475T2 18.154V7.077h1v11.077q0 .269.173.442t.443.173H19v1zm3-3q-.667 0-1.141-.475T5 15.154V4.616q0-.667.475-1.142T6.615 3h4.962l2 2h6.808q.666 0 1.14.475T22 6.615v8.539q0 .666-.475 1.14t-1.14.475z"
      })
    }),
    github: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "2 2 20 19.52",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
      })
    }),
    discord: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "1.5 4 21 16",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"
      })
    }),
    friends: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12.908 1.581a1 1 0 0 0-1.816 0l-2.87 6.22l-6.801.807a1 1 0 0 0-.562 1.727l5.03 4.65l-1.335 6.72a1 1 0 0 0 1.469 1.067L12 19.426l5.977 3.346a1 1 0 0 0 1.47-1.068l-1.335-6.718l5.029-4.651a1 1 0 0 0-.562-1.727L15.777 7.8z",
        clipRule: "evenodd"
      })
    }),
    roblox: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M18.926 23.998L0 18.892L5.075.002L24 5.108ZM15.348 10.09l-5.282-1.453l-1.414 5.273l5.282 1.453z"
      })
    }),
    telegram: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "2 2 20 20",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38"
      })
    }),
    youtube: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "2 5 20 14.07",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M9.935 14.628v-5.62l5.403 2.82zM21.8 8.035s-.195-1.379-.795-1.986c-.76-.796-1.613-.8-2.004-.847C16.203 5 12.004 5 12.004 5h-.008s-4.198 0-6.997.202c-.391.047-1.243.05-2.004.847c-.6.607-.795 1.986-.795 1.986S2 9.653 2 11.272v1.517c0 1.618.2 3.237.2 3.237s.195 1.378.795 1.985c.76.797 1.76.771 2.205.855c1.6.153 6.8.2 6.8.2s4.203-.006 7.001-.208c.391-.047 1.244-.05 2.004-.847c.6-.607.795-1.985.795-1.985s.2-1.619.2-3.237v-1.517c0-1.619-.2-3.237-.2-3.237"
      })
    }),
    lastfm: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "2 6 20 12",
      children: (0, t.jsx)("path", {
        d: "M18 17.93c-2.08-.01-3.19-1.03-3.96-2.84l-.22-.49l-1.9-4.37c-.63-1.54-2.2-2.59-3.96-2.59c-2.39 0-4.33 1.95-4.33 4.36s1.94 4.36 4.33 4.36c1.66 0 3.12-.95 3.84-2.36l.77 1.81A5.893 5.893 0 0 1 7.96 18C4.67 18 2 15.32 2 12c0-3.31 2.67-6 5.96-6c2.48 0 4.49 1.34 5.51 3.7c.07.19 1.07 2.54 1.95 4.54c.54 1.26 1 2.07 2.49 2.12c1.47.05 2.48-.86 2.48-1.99c0-1.11-.77-1.37-2.07-1.81c-2.32-.77-3.53-1.56-3.53-3.41c0-1.82 1.21-3.03 3.21-3.03c1.31 0 2.24.58 2.89 1.74l-1.27.64c-.48-.66-1.01-.93-1.68-.93c-.94 0-1.61.66-1.61 1.53c0 1.24 1.1 1.43 2.64 1.93c2.07.68 3.03 1.47 3.03 3.39c0 2.03-1.73 3.51-4 3.51z",
        fill: "currentColor"
      })
    }),
    playCount: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "m12.75 12.508l8.5-3.4v5.653a3.25 3.25 0 1 0 1.5 2.74V7.945c0-1.143 0-2.101-.08-2.865a8 8 0 0 0-.04-.315c-.078-.522-.214-1.008-.479-1.415a2.2 2.2 0 0 0-.62-.63l-.007-.005c-.708-.47-1.503-.437-2.322-.228c-.792.202-1.774.613-2.978 1.117l-2.094.876c-.565.236-1.043.437-1.418.644c-.4.22-.743.48-1.001.868s-.366.805-.415 1.259c-.046.426-.046.945-.046 1.557v7.952a3.25 3.25 0 1 0 1.5 2.74zM7.75 2a.75.75 0 0 0-1.5 0v5.76a3.25 3.25 0 1 0 1.5 2.74V5.005c.699.504 1.53.745 2.25.745a.75.75 0 0 0 0-1.5a2.44 2.44 0 0 1-1.488-.552c-.434-.357-.762-.9-.762-1.698"
      })
    }),
    artistCount: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "3 4 19 16",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M17.5 20q-1.05 0-1.775-.725T15 17.5t.725-1.775T17.5 15q.2 0 .45.038t.55.162V10H22v2h-2v5.5q0 1.05-.725 1.775T17.5 20M11 12q-1.65 0-2.825-1.175T7 8t1.175-2.825T11 4t2.825 1.175T15 8t-1.175 2.825T11 12m-8 8v-2.8q0-.875.438-1.575T4.6 14.55q1.55-.775 3.15-1.162T11 13q1.05 0 2.088.163t2.087.487q-1.65 1-2.05 2.863t.65 3.487z"
      })
    }),
    locationMarker: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "4 2 16 20",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"
      })
    }),
    verifiedGuild: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      className: a.default.verifiedGuild,
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "m23 12l-2.44-2.79l.34-3.69l-3.61-.82l-1.89-3.2L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5l.34 3.7L1 12l2.44 2.79l-.34 3.7l3.61.82L8.6 22.5l3.4-1.47l3.4 1.46l1.89-3.19l3.61-.82l-.34-3.69zm-12.91 4.72l-3.8-3.81l1.48-1.48l2.32 2.33l5.85-5.87l1.48 1.48z"
      })
    }),
    partneredGuild: (0, t.jsxs)("svg", {
      width: "16",
      height: "16",
      viewBox: "0 -0.05 16 15.25",
      "aria-hidden": "false",
      xmlns: "http://www.w3.org/2000/svg",
      className: a.default.partneredGuild,
      children: [(0, t.jsx)("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
      }), (0, t.jsxs)("g", {
        children: [(0, t.jsx)("path", {
          d: "M10.5906 6.39993L9.19223 7.29993C8.99246 7.39993 8.89258 7.39993 8.69281 7.29993C8.59293 7.19993 8.39317 7.09993 8.29328 6.99993C7.89375 6.89993 7.5941 6.99993 7.29445 7.19993L6.79504 7.49993L4.29797 9.19993C3.69867 9.49993 2.99949 9.39993 2.69984 8.79993C2.30031 8.29993 2.50008 7.59993 2.99949 7.19993L5.99598 5.19993C6.79504 4.69993 7.79387 4.49993 8.69281 4.69993C9.49188 4.89993 10.0912 5.29993 10.5906 5.89993C10.7904 6.09993 10.6905 6.29993 10.5906 6.39993Z"
        }), (0, t.jsx)("path", {
          d: "M13.4871 7.79985C13.4871 8.19985 13.2874 8.59985 12.9877 8.79985L9.89135 10.7999C9.29206 11.1999 8.69276 11.3999 7.99358 11.3999C7.69393 11.3999 7.49417 11.3999 7.19452 11.2999C6.39545 11.0999 5.79616 10.6999 5.29674 10.0999C5.19686 9.89985 5.29674 9.69985 5.39663 9.59985L6.79499 8.69985C6.89487 8.59985 7.09463 8.59985 7.19452 8.69985C7.39428 8.79985 7.59405 8.89985 7.69393 8.99985C8.09346 8.99985 8.39311 8.99985 8.69276 8.79985L9.39194 8.39985L11.3896 6.99985L11.6892 6.79985C12.1887 6.49985 12.9877 6.59985 13.2874 7.09985C13.4871 7.39985 13.4871 7.59985 13.4871 7.79985Z"
        })]
      })]
    }),
    arrowDown: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "1.5",
        d: "M12 4v16m0 0l6-6m-6 6l-6-6"
      })
    })
  };
  e.s(["default", 0, r])
}, 89798, e => {
  e.v({
    mark: "sliderWrapper-module__qKFoda__mark",
    markDot: "sliderWrapper-module__qKFoda__markDot",
    markLabel: "sliderWrapper-module__qKFoda__markLabel",
    marks: "sliderWrapper-module__qKFoda__marks",
    progress: "sliderWrapper-module__qKFoda__progress",
    range: "sliderWrapper-module__qKFoda__range",
    sliderContent: "sliderWrapper-module__qKFoda__sliderContent",
    sliderShell: "sliderWrapper-module__qKFoda__sliderShell",
    thumb: "sliderWrapper-module__qKFoda__thumb",
    tooltip: "sliderWrapper-module__qKFoda__tooltip",
    track: "sliderWrapper-module__qKFoda__track",
    valueLabel: "sliderWrapper-module__qKFoda__valueLabel",
    wrapper: "sliderWrapper-module__qKFoda__wrapper"
  })
}, 9573, e => {
  "use strict";
  var t = e.i(48277),
    a = e.i(99325),
    r = e.i(30668),
    o = e.i(50250),
    n = e.i(89798);
  let i = (e, t) => {
    if ("number" == typeof e && Number.isFinite(e)) return e;
    if ("string" == typeof e) {
      let t = Number(e);
      if (!Number.isNaN(t)) return t
    }
    return t
  };

  function s({
    featureName: e,
    marks: s,
    value: l,
    defaultValue: u,
    onChangeFunction: d,
    label: m,
    className: h,
    min: c,
    max: f,
    step: p,
    disabled: w,
    onChange: _,
    onFocus: g,
    onBlur: v,
    onPointerDown: y,
    onPointerUp: x,
    onPointerCancel: b,
    ...C
  }) {
    let M = i(c, 0),
      j = i(f, 100),
      q = i(p, 1) || 1,
      L = l ?? u ?? M,
      k = void 0 !== l,
      [W, T] = (0, r.useState)(L),
      [E, S] = (0, r.useState)(!1),
      [F, P] = (0, r.useState)(!1);
    (0, r.useEffect)(() => {
      k || T(u ?? M)
    }, [u, k, M]);
    let D = k ? l ?? M : W,
      N = Math.min(j, Math.max(M, D)),
      z = Math.max(j - M, Number.EPSILON),
      I = (N - M) / z * 100;
    (0, r.useEffect)(() => {
      k || T(e => Math.min(j, Math.max(M, e)))
    }, [k, M, j]);
    let B = (0, r.useMemo)(() => s?.length ? s.map(e => ({
        ...e,
        normalizedValue: Math.min(j, Math.max(M, e.value)),
        position: Math.min(100, Math.max(0, (Math.min(j, Math.max(M, e.value)) - M) / z * 100))
      })) : [], [s, M, j, z]),
      A = (0, r.useMemo)(() => {
        if (!m) return `${N}`;
        let e = "function" == typeof m ? m(N) : m;
        return null == e || !1 === e ? `${N}` : e
      }, [m, N]),
      V = !w && (E || F),
      H = "string" == typeof e ? e : void 0;
    return (0, t.jsxs)("div", {
      className: o.default.inputContainerWrapper,
      "data-dashboard-feature-label": H,
      children: [e && (0, t.jsx)("h1", {
        className: o.default.featureName,
        style: {
          marginLeft: 0
        },
        children: e
      }), (0, t.jsx)("div", {
        className: (0, a.default)(o.default.inputWrapperDiv, n.default.wrapper, h),
        children: (0, t.jsx)("div", {
          className: n.default.sliderContent,
          children: (0, t.jsxs)("div", {
            className: n.default.sliderShell,
            onMouseEnter: () => S(!0),
            onMouseLeave: () => {
              F || S(!1)
            },
            children: [(0, t.jsxs)("div", {
              className: n.default.track,
              children: [(0, t.jsx)("div", {
                className: n.default.progress,
                style: {
                  width: `${I}%`
                }
              }), (0, t.jsx)("div", {
                className: n.default.thumb,
                style: {
                  left: `calc(${I}% - (var(--thumb-size) / 2))`
                },
                "data-visible": V,
                children: (0, t.jsx)("span", {
                  className: n.default.tooltip,
                  "data-visible": V,
                  children: A
                })
              })]
            }), (0, t.jsx)("input", {
              ...C,
              type: "range",
              min: M,
              max: j,
              step: q,
              value: N,
              disabled: w,
              className: n.default.range,
              onChange: e => {
                let t = Number(e.target.value);
                Number.isNaN(t) || (k || T(t), d?.(t), _?.(e))
              },
              onFocus: e => {
                S(!0), g?.(e)
              },
              onBlur: e => {
                S(!1), v?.(e)
              },
              onPointerDown: e => {
                P(!0), y?.(e)
              },
              onPointerUp: e => {
                P(!1), x?.(e)
              },
              onPointerCancel: e => {
                P(!1), b?.(e)
              },
              "aria-valuemin": M,
              "aria-valuemax": j,
              "aria-valuenow": N
            }), B.length > 0 && (0, t.jsx)("div", {
              className: n.default.marks,
              children: B.map((e, a) => (0, t.jsxs)("div", {
                className: n.default.mark,
                style: {
                  left: `${e.position}%`
                },
                children: [(0, t.jsx)("span", {
                  className: n.default.markDot,
                  "data-active": e.normalizedValue <= N
                }), e.label && (0, t.jsx)("span", {
                  className: n.default.markLabel,
                  children: e.label
                })]
              }, `${e.value}-${a}`))
            })]
          })
        })
      })]
    })
  }
  e.s(["default", () => s])
}, 49959, 40391, 27844, 4419, 66971, 12638, 76793, 38865, e => {
  "use strict";

  function t(e) {
    let t = Object.prototype.toString.call(e);
    return e instanceof Date || "object" == typeof e && "[object Date]" === t ? new e.constructor(+e) : new Date("number" == typeof e || "[object Number]" === t || "string" == typeof e || "[object String]" === t ? e : NaN)
  }

  function a(e, a) {
    let r = t(e),
      o = t(a),
      n = r.getTime() - o.getTime();
    return n < 0 ? -1 : n > 0 ? 1 : n
  }
  e.s(["toDate", () => t], 40391);
  let r = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds"
    },
    xSeconds: {
      one: "1 second",
      other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes"
    },
    xMinutes: {
      one: "1 minute",
      other: "{{count}} minutes"
    },
    aboutXHours: {
      one: "about 1 hour",
      other: "about {{count}} hours"
    },
    xHours: {
      one: "1 hour",
      other: "{{count}} hours"
    },
    xDays: {
      one: "1 day",
      other: "{{count}} days"
    },
    aboutXWeeks: {
      one: "about 1 week",
      other: "about {{count}} weeks"
    },
    xWeeks: {
      one: "1 week",
      other: "{{count}} weeks"
    },
    aboutXMonths: {
      one: "about 1 month",
      other: "about {{count}} months"
    },
    xMonths: {
      one: "1 month",
      other: "{{count}} months"
    },
    aboutXYears: {
      one: "about 1 year",
      other: "about {{count}} years"
    },
    xYears: {
      one: "1 year",
      other: "{{count}} years"
    },
    overXYears: {
      one: "over 1 year",
      other: "over {{count}} years"
    },
    almostXYears: {
      one: "almost 1 year",
      other: "almost {{count}} years"
    }
  };

  function o(e) {
    return (t = {}) => {
      let a = t.width ? String(t.width) : e.defaultWidth;
      return e.formats[a] || e.formats[e.defaultWidth]
    }
  }
  e.s(["buildFormatLongFn", () => o], 27844);
  let n = {
      date: o({
        formats: {
          full: "EEEE, MMMM do, y",
          long: "MMMM do, y",
          medium: "MMM d, y",
          short: "MM/dd/yyyy"
        },
        defaultWidth: "full"
      }),
      time: o({
        formats: {
          full: "h:mm:ss a zzzz",
          long: "h:mm:ss a z",
          medium: "h:mm:ss a",
          short: "h:mm a"
        },
        defaultWidth: "full"
      }),
      dateTime: o({
        formats: {
          full: "{{date}} 'at' {{time}}",
          long: "{{date}} 'at' {{time}}",
          medium: "{{date}}, {{time}}",
          short: "{{date}}, {{time}}"
        },
        defaultWidth: "full"
      })
    },
    i = {
      lastWeek: "'last' eeee 'at' p",
      yesterday: "'yesterday at' p",
      today: "'today at' p",
      tomorrow: "'tomorrow at' p",
      nextWeek: "eeee 'at' p",
      other: "P"
    };

  function s(e) {
    return (t, a) => {
      let r;
      if ("formatting" === (a?.context ? String(a.context) : "standalone") && e.formattingValues) {
        let t = e.defaultFormattingWidth || e.defaultWidth,
          o = a?.width ? String(a.width) : t;
        r = e.formattingValues[o] || e.formattingValues[t]
      } else {
        let t = e.defaultWidth,
          o = a?.width ? String(a.width) : e.defaultWidth;
        r = e.values[o] || e.values[t]
      }
      return r[e.argumentCallback ? e.argumentCallback(t) : t]
    }
  }
  e.s(["buildLocalizeFn", () => s], 4419);
  let l = {
    ordinalNumber: (e, t) => {
      let a = Number(e),
        r = a % 100;
      if (r > 20 || r < 10) switch (r % 10) {
        case 1:
          return a + "st";
        case 2:
          return a + "nd";
        case 3:
          return a + "rd"
      }
      return a + "th"
    },
    era: s({
      values: {
        narrow: ["B", "A"],
        abbreviated: ["BC", "AD"],
        wide: ["Before Christ", "Anno Domini"]
      },
      defaultWidth: "wide"
    }),
    quarter: s({
      values: {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
        wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
      },
      defaultWidth: "wide",
      argumentCallback: e => e - 1
    }),
    month: s({
      values: {
        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      },
      defaultWidth: "wide"
    }),
    day: s({
      values: {
        narrow: ["S", "M", "T", "W", "T", "F", "S"],
        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      },
      defaultWidth: "wide"
    }),
    dayPeriod: s({
      values: {
        narrow: {
          am: "a",
          pm: "p",
          midnight: "mi",
          noon: "n",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night"
        },
        abbreviated: {
          am: "AM",
          pm: "PM",
          midnight: "midnight",
          noon: "noon",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night"
        },
        wide: {
          am: "a.m.",
          pm: "p.m.",
          midnight: "midnight",
          noon: "noon",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night"
        }
      },
      defaultWidth: "wide",
      formattingValues: {
        narrow: {
          am: "a",
          pm: "p",
          midnight: "mi",
          noon: "n",
          morning: "in the morning",
          afternoon: "in the afternoon",
          evening: "in the evening",
          night: "at night"
        },
        abbreviated: {
          am: "AM",
          pm: "PM",
          midnight: "midnight",
          noon: "noon",
          morning: "in the morning",
          afternoon: "in the afternoon",
          evening: "in the evening",
          night: "at night"
        },
        wide: {
          am: "a.m.",
          pm: "p.m.",
          midnight: "midnight",
          noon: "noon",
          morning: "in the morning",
          afternoon: "in the afternoon",
          evening: "in the evening",
          night: "at night"
        }
      },
      defaultFormattingWidth: "wide"
    })
  };

  function u(e) {
    return (t, a = {}) => {
      let r, o = a.width,
        n = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth],
        i = t.match(n);
      if (!i) return null;
      let s = i[0],
        l = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth],
        u = Array.isArray(l) ? function(e, t) {
          for (let a = 0; a < e.length; a++)
            if (t(e[a])) return a
        }(l, e => e.test(s)) : function(e, t) {
          for (let a in e)
            if (Object.prototype.hasOwnProperty.call(e, a) && t(e[a])) return a
        }(l, e => e.test(s));
      return r = e.valueCallback ? e.valueCallback(u) : u, {
        value: r = a.valueCallback ? a.valueCallback(r) : r,
        rest: t.slice(s.length)
      }
    }
  }

  function d(e) {
    return (t, a = {}) => {
      let r = t.match(e.matchPattern);
      if (!r) return null;
      let o = r[0],
        n = t.match(e.parsePattern);
      if (!n) return null;
      let i = e.valueCallback ? e.valueCallback(n[0]) : n[0];
      return {
        value: i = a.valueCallback ? a.valueCallback(i) : i,
        rest: t.slice(o.length)
      }
    }
  }
  e.s(["buildMatchFn", () => u], 66971), e.s(["buildMatchPatternFn", () => d], 12638);
  let m = {
    code: "en-US",
    formatDistance: (e, t, a) => {
      let o, n = r[e];
      if (o = "string" == typeof n ? n : 1 === t ? n.one : n.other.replace("{{count}}", t.toString()), a?.addSuffix)
        if (a.comparison && a.comparison > 0) return "in " + o;
        else return o + " ago";
      return o
    },
    formatLong: n,
    formatRelative: (e, t, a, r) => i[e],
    localize: l,
    match: {
      ordinalNumber: d({
        matchPattern: /^(\d+)(th|st|nd|rd)?/i,
        parsePattern: /\d+/i,
        valueCallback: e => parseInt(e, 10)
      }),
      era: u({
        matchPatterns: {
          narrow: /^(b|a)/i,
          abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
          wide: /^(before christ|before common era|anno domini|common era)/i
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          any: [/^b/i, /^(a|c)/i]
        },
        defaultParseWidth: "any"
      }),
      quarter: u({
        matchPatterns: {
          narrow: /^[1234]/i,
          abbreviated: /^q[1234]/i,
          wide: /^[1234](th|st|nd|rd)? quarter/i
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          any: [/1/i, /2/i, /3/i, /4/i]
        },
        defaultParseWidth: "any",
        valueCallback: e => e + 1
      }),
      month: u({
        matchPatterns: {
          narrow: /^[jfmasond]/i,
          abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
          wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
          any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
        },
        defaultParseWidth: "any"
      }),
      day: u({
        matchPatterns: {
          narrow: /^[smtwf]/i,
          short: /^(su|mo|tu|we|th|fr|sa)/i,
          abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
          wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
          any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
        },
        defaultParseWidth: "any"
      }),
      dayPeriod: u({
        matchPatterns: {
          narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
          any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
        },
        defaultMatchWidth: "any",
        parsePatterns: {
          any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i
          }
        },
        defaultParseWidth: "any"
      })
    },
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
    }
  };
  e.s(["enUS", 0, m], 76793);
  let h = {};

  function c() {
    return h
  }

  function f(e) {
    let a = t(e),
      r = new Date(Date.UTC(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds(), a.getMilliseconds()));
    return r.setUTCFullYear(a.getFullYear()), e - r
  }

  function p(e, r) {
    var o;
    return function(e, r, o) {
      var n, i, s;
      let l, u, d, c = o?.locale ?? h.locale ?? m,
        p = a(e, r);
      if (isNaN(p)) throw RangeError("Invalid time value");
      let w = Object.assign({}, o, {
        addSuffix: o?.addSuffix,
        comparison: p
      });
      p > 0 ? (l = t(r), u = t(e)) : (l = t(e), u = t(r));
      let _ = (n = u, i = l, (s = void 0, e => {
          let t = (s ? Math[s] : Math.trunc)(e);
          return 0 === t ? 0 : t
        })((t(n) - t(i)) / 1e3)),
        g = Math.round((_ - (f(u) - f(l)) / 1e3) / 60);
      if (g < 2)
        if (o?.includeSeconds)
          if (_ < 5) return c.formatDistance("lessThanXSeconds", 5, w);
          else if (_ < 10) return c.formatDistance("lessThanXSeconds", 10, w);
      else if (_ < 20) return c.formatDistance("lessThanXSeconds", 20, w);
      else if (_ < 40) return c.formatDistance("halfAMinute", 0, w);
      else if (_ < 60) return c.formatDistance("lessThanXMinutes", 1, w);
      else return c.formatDistance("xMinutes", 1, w);
      else if (0 === g) return c.formatDistance("lessThanXMinutes", 1, w);
      else return c.formatDistance("xMinutes", g, w);
      if (g < 45) return c.formatDistance("xMinutes", g, w);
      if (g < 90) return c.formatDistance("aboutXHours", 1, w);
      if (g < 1440) {
        let e = Math.round(g / 60);
        return c.formatDistance("aboutXHours", e, w)
      }
      if (g < 2520) return c.formatDistance("xDays", 1, w);
      else if (g < 43200) {
        let e = Math.round(g / 1440);
        return c.formatDistance("xDays", e, w)
      } else if (g < 86400) return d = Math.round(g / 43200), c.formatDistance("aboutXMonths", d, w);
      if ((d = function(e, r) {
          let o, n, i, s = t(e),
            l = t(r),
            u = a(s, l),
            d = Math.abs((n = t(s), i = t(l), 12 * (n.getFullYear() - i.getFullYear()) + (n.getMonth() - i.getMonth())));
          if (d < 1) o = 0;
          else {
            var m;
            let r, n, i, h;
            1 === s.getMonth() && s.getDate() > 27 && s.setDate(30), s.setMonth(s.getMonth() - u * d);
            let c = a(s, l) === -u;
            m = t(e), h = t(m), +((r = t(h)).setHours(23, 59, 59, 999), r) == +(i = (n = t(h)).getMonth(), n.setFullYear(n.getFullYear(), i + 1, 0), n.setHours(23, 59, 59, 999), n) && 1 === d && 1 === a(e, l) && (c = !1), o = u * (d - Number(c))
          }
          return 0 === o ? 0 : o
        }(u, l)) < 12) {
        let e = Math.round(g / 43200);
        return c.formatDistance("xMonths", e, w)
      } {
        let e = d % 12,
          t = Math.trunc(d / 12);
        return e < 3 ? c.formatDistance("aboutXYears", t, w) : e < 9 ? c.formatDistance("overXYears", t, w) : c.formatDistance("almostXYears", t + 1, w)
      }
    }(e, (o = Date.now(), e instanceof Date ? new e.constructor(o) : new Date(o)), r)
  }
  e.s(["getDefaultOptions", () => c], 38865), e.s(["formatDistanceToNow", () => p], 49959)
}, 7374, e => {
  e.v(t => Promise.all(["static/chunks/6b96aad8fd1175f2.js"].map(t => e.l(t))).then(() => t(33980)))
}]);