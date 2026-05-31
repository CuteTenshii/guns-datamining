(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6053], {
    1825: () => {},
    5684: e => {
      e.exports = {
        overflowText: "overflowText_overflowText__BvWn9",
        overflowTextContent: "overflowText_overflowTextContent__6gjLY",
        isScrollable: "overflowText_isScrollable__zQkJA",
        overflowTextPan: "overflowText_overflowTextPan__sN9l5"
      }
    },
    13653: e => {
      e.exports = {
        userInformation: "userLayout3_userInformation__XY6Cv",
        avatar: "userLayout3_avatar___QBfi",
        username: "userLayout3_username__aL5xu",
        description: "userLayout3_description__m_svC",
        usernameCursor: "userLayout3_usernameCursor__OsNOm",
        userDescription: "userLayout3_userDescription__cZijh",
        badgeContainerWrapper: "userLayout3_badgeContainerWrapper__68aF4",
        socialWrapper: "userLayout3_socialWrapper__RUQsH",
        buttonWrapper: "userLayout3_buttonWrapper__RpJZm",
        userButtons: "userLayout3_userButtons__LDNnk",
        button: "userLayout3_button__xtBkk",
        buttonShowUrl: "userLayout3_buttonShowUrl__nbq1Z",
        buttonInformationWrapper: "userLayout3_buttonInformationWrapper__YjJT_",
        buttonIcon: "userLayout3_buttonIcon__mzHwy",
        buttonIconWrapper: "userLayout3_buttonIconWrapper__1xEU8",
        audioPlayerWrapper: "userLayout3_audioPlayerWrapper__Uy9Z3"
      }
    },
    16053: (e, t, r) => {
      "use strict";
      r.d(t, {
        default: () => tO,
        pX: () => tU,
        ZI: () => tF,
        E2: () => tD,
        CO: () => tR,
        dz: () => tW
      });
      var o = r(95155),
        s = r(12115),
        a = r(79153),
        i = r.n(a);
      let n = ({
          backgroundUrl: e,
          shuffleAudios: t,
          audio: r,
          videoTagRef: a,
          audioTagRef: n,
          audioData: l,
          setAudioData: c
        }) => {
          let [d, u] = (0, s.useState)(!1), [m, p] = (0, s.useState)(null), f = (0, s.useRef)(null), h = "string" == typeof r, g = h ? "" !== r : r.length > 0;
          return (0, s.useEffect)(() => {
            p(window.innerWidth > 768 ? "auto" : "metadata")
          }, []), (0, s.useEffect)(() => {
            (function(e) {
              for (let t of [".mp4", ".mov", ".avi", ".m4v", ".webm", ".mkv"])
                if (e.endsWith(t)) return {
                  video: !0
                };
              return {
                video: !1
              }
            })(e).video ? u(!0) : "" !== e && (u(!1), f.current && (f.current.style.backgroundImage = `url(${e})`))
          }, [e, f]), (0, s.useEffect)(() => {
            d && a?.current && (g ? (a.current.defaultMuted = !0, a.current.muted = !0) : a.current.defaultMuted = !1)
          }, [d, g, a]), (0, s.useEffect)(() => {
            if (h || 0 !== r.length)
              if (h) c({
                url: r,
                title: "Audio #1",
                cover: "",
                id: 0
              });
              else if (1 === r.length) c({
              url: r[0].url,
              title: r[0].title,
              cover: r[0].cover ?? "",
              id: r[0].id
            });
            else if (t) {
              let e = r[Math.floor(Math.random() * r.length)];
              c({
                url: e.url,
                title: e.title,
                cover: e.cover ?? "",
                id: e.id
              })
            } else {
              let e = !h && g && r.find(e => !0 === e.selected);
              c({
                url: e ? e.url : r[0].url,
                title: e ? e.title : r[0].title,
                cover: e ? e.cover ?? "" : r[0].cover ?? "",
                id: e ? e.id : r[0].id
              })
            }
          }, [r, t, h, g]), (0, o.jsxs)(o.Fragment, {
            children: [d && "" !== e ? (0, o.jsx)("video", {
              src: e,
              playsInline: !0,
              loop: !0,
              disablePictureInPicture: !0,
              controls: !1,
              preload: m || "metadata",
              muted: g,
              className: i().backgroundVideo,
              ref: a
            }) : (0, o.jsx)("div", {
              className: i().backgroundImage,
              style: {
                backgroundImage: `url(${e})`
              },
              ref: f
            }), g && "" !== l.url && (0, o.jsx)("audio", {
              src: l.url,
              loop: !0,
              ref: n
            })]
          })
        },
        l = "data-user-page-enter-transition";

      function c({
        videoTagRef: e,
        audioTagRef: t,
        clickToEnterText: r,
        userFont: a,
        userContainerRef: n,
        animationClass: c,
        setAudioPlayer: d,
        audioContainerRef: u,
        discordWidgetRef: m
      }) {
        let p = (0, s.useRef)(null),
          f = (0, s.useRef)(!1),
          h = (0, s.useRef)({}),
          g = (0, s.useRef)({}),
          x = (0, s.useRef)(null),
          v = (0, s.useRef)(null),
          y = (0, s.useRef)(null),
          _ = (0, s.useRef)(null),
          b = () => {
            _.current && (document.body.style.overflow = _.current.body, document.documentElement.style.overflow = _.current.html, _.current = null)
          },
          j = e => {
            e.current.timeoutId && (window.clearTimeout(e.current.timeoutId), e.current.timeoutId = void 0), e.current.detachListeners && (e.current.detachListeners?.(), e.current.detachListeners = void 0)
          },
          w = e => {
            d({
              playing: !e.paused,
              duration: e.duration || 0,
              currentTime: e.currentTime || 0,
              ref: e
            })
          };
        (0, s.useEffect)(() => (document.documentElement.setAttribute(l, "active"), _.current = {
          body: document.body.style.overflow,
          html: document.documentElement.style.overflow
        }, document.body.style.overflow = "hidden", document.documentElement.style.overflow = "hidden", () => {
          null !== y.current && (window.clearTimeout(y.current), y.current = null), document.documentElement.removeAttribute(l), b(), j(h), j(g), t.current && x.current && t.current.removeEventListener("timeupdate", x.current)
        }), [t]);
        let S = e => {
          if (e) {
            if (e === i().fadeUp || e === i().scaleFade) {
              n.current?.classList.add(e), u.current?.classList.add(e), m?.current?.classList.add(e);
              return
            }
            e === i().unfold && document.querySelectorAll(`.${i().unfoldStart}`).forEach((e, t) => {
              setTimeout(() => {
                e.classList.add(i().unfold)
              }, 300 * t)
            })
          }
        };
        (0, s.useEffect)(() => {
          f.current && c && c !== v.current && (S(c), v.current = c)
        }, [c]);
        let C = (e, t = !1, r) => {
          let o = t ? g : h;
          j(o);
          let s = 0,
            a = e => {
              if (t && e instanceof HTMLAudioElement) {
                let t;
                w(e), x.current && e.removeEventListener("timeupdate", x.current), x.current = t = () => w(e), e.addEventListener("timeupdate", t)
              }
            },
            i = e => {
              e.volume = .25;
              let t = e.play();
              t && "function" == typeof t.then ? t.then(() => a(e)).catch(e => {
                e?.name === "NotAllowedError" ? console.warn("Autoplay blocked for media element.", e) : n()
              }) : a(e)
            },
            n = (e = !1) => {
              s >= 40 || (s += 1, j(o), o.current.timeoutId = window.setTimeout(() => {
                o.current.timeoutId = void 0, l(e)
              }, 350))
            },
            l = (t = !1) => {
              let r = e.current;
              if (!r || !r.src) return void n(t);
              if (t) return void i(r);
              if (r.readyState >= 2) i(r);
              else {
                let e;
                e = () => {
                  j(o), i(r)
                }, r.addEventListener("loadeddata", e, {
                  once: !0
                }), r.addEventListener("canplay", e, {
                  once: !0
                }), o.current.detachListeners = () => {
                  r.removeEventListener("loadeddata", e), r.removeEventListener("canplay", e)
                }, s < 40 && n(t)
              }
            };
          l(r?.eager ?? !1)
        };
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsx)("div", {
            className: i().clickToEnterOverlay,
            onClick: () => {
              f.current || (p.current && (p.current.classList.add(i().hide), p.current.style.pointerEvents = "none", document.documentElement.removeAttribute(l), b(), y.current = window.setTimeout(() => {
                p.current && (p.current.style.display = "none"), y.current = null
              }, 650)), S(c), v.current = c, f.current = !0), C(e, !1, {
                eager: !0
              }), C(t, !0, {
                eager: !0
              })
            },
            ref: p,
            children: (0, o.jsx)("div", {
              className: i().clickToEnterText,
              style: a.clickToEnter,
              children: r
            })
          })
        })
      }
      let d = {
          clickToEnter: {
            fontWeight: 700,
            fontSize: "30px"
          },
          username: {
            fontWeight: 600,
            fontSize: "36px"
          },
          description: {
            fontWeight: 570,
            fontSize: "17px"
          },
          joinDate: {
            fontWeight: 400,
            fontSize: "13px"
          },
          profileViewsCount: {
            fontWeight: 550,
            fontSize: "14px"
          },
          discordUsername: {
            fontWeight: 550,
            fontSize: "18.5px"
          },
          discordStatus: {
            fontWeight: 400,
            fontSize: "13.5px"
          },
          serverName: {
            fontWeight: 450,
            fontSize: "18px"
          },
          memberCount: {
            fontWeight: 450,
            fontSize: "12.5px"
          },
          joinButton: {
            fontWeight: 450,
            fontSize: "12px"
          },
          joinButtonLarge: {
            fontWeight: 450,
            fontSize: "16px"
          },
          buttonText: {
            fontWeight: 450,
            fontSize: "17px"
          },
          buttonUrl: {
            fontWeight: 400,
            fontSize: "14px"
          },
          customUrlHeading: {
            fontWeight: 450,
            fontSize: "18px"
          },
          customUrlLink: {
            fontWeight: 400,
            fontSize: "15px"
          },
          customUrlButtons: {
            fontWeight: 450,
            fontSize: "16px"
          },
          secondTabWidgetHeading: {
            fontWeight: 450,
            fontSize: "18px"
          },
          secondTabWidgetDescription: {
            fontWeight: 450,
            fontSize: "12px"
          },
          secondTabWidgetButton: {
            fontWeight: 450,
            fontSize: "11.5px"
          },
          audioPlayerTitle: {
            fontWeight: 500,
            fontSize: "17px"
          },
          audioPlayerControls: {
            fontWeight: 400,
            fontSize: "16.5px"
          },
          locationMarker: {
            fontWeight: 450,
            fontSize: "15px"
          }
        },
        u = new Set(["satoshi", "firacode", "poppins", "array", "drippy", "minecraft", "outfit", "chillax", "velocity", "technor", "jetbrains_mono", "silkscreen", "parkinsans"]),
        m = {
          satoshi: {
            username: {
              fontWeight: 600,
              fontSize: "39.5px"
            },
            description: {
              fontWeight: 570,
              fontSize: "19px"
            }
          },
          firacode: {
            clickToEnter: {
              fontWeight: 700,
              fontSize: "29px"
            },
            username: {
              fontWeight: 550,
              fontSize: "34px"
            },
            description: {
              fontWeight: 570,
              fontSize: "15.5px"
            },
            audioPlayerTitle: {
              fontWeight: 500,
              fontSize: "16px"
            },
            audioPlayerControls: {
              fontWeight: 400,
              fontSize: "15px"
            }
          },
          array: {
            clickToEnter: {
              fontWeight: 500,
              fontSize: "34px"
            },
            username: {
              fontWeight: 400,
              fontSize: "36.5px"
            }
          },
          drippy: {
            clickToEnter: {
              fontWeight: 200,
              fontSize: "31px"
            },
            username: {
              fontWeight: 400,
              fontSize: "33.5px"
            }
          },
          velocity: {
            clickToEnter: {
              fontWeight: 600,
              fontSize: "23px"
            },
            username: {
              fontWeight: 600,
              fontSize: "29px"
            },
            description: {
              fontWeight: 400,
              fontSize: "13.5px"
            },
            discordUsername: {
              fontWeight: 600,
              fontSize: "16px"
            },
            discordStatus: {
              fontWeight: 400,
              fontSize: "10px"
            },
            audioPlayerTitle: {
              fontWeight: 500,
              fontSize: "13px",
              marginTop: "6px"
            },
            audioPlayerControls: {
              fontWeight: 400,
              fontSize: "11px"
            },
            profileViewsCount: {
              fontWeight: 550,
              fontSize: "10px"
            },
            locationMarker: {
              fontWeight: 450,
              fontSize: "11px"
            },
            memberCount: {
              fontWeight: 450,
              fontSize: "9.5px"
            },
            serverName: {
              fontWeight: 450,
              fontSize: "16px"
            },
            joinDate: {
              fontWeight: 400,
              fontSize: "10px"
            },
            secondTabWidgetDescription: {
              fontWeight: 450,
              fontSize: "9px"
            },
            secondTabWidgetButton: {
              fontWeight: 450,
              fontSize: "10px"
            },
            customUrlHeading: {
              fontWeight: 450,
              fontSize: "15px"
            },
            customUrlLink: {
              fontWeight: 400,
              fontSize: "12px"
            },
            customUrlButtons: {
              fontWeight: 450,
              fontSize: "13px"
            }
          },
          jetbrains_mono: {
            audioPlayerControls: {
              fontWeight: 400,
              fontSize: "14px"
            },
            username: {
              fontWeight: 600,
              fontSize: "34.5px"
            },
            description: {
              fontWeight: 570,
              fontSize: "16px"
            },
            audioPlayerTitle: {
              fontWeight: 500,
              fontSize: "16px"
            },
            discordStatus: {
              fontWeight: 300,
              fontSize: "13px"
            }
          },
          minecraft: {
            username: {
              fontWeight: 500,
              fontSize: "30px"
            },
            description: {
              fontWeight: 400,
              fontSize: "15px"
            },
            locationMarker: {
              fontWeight: 450,
              fontSize: "14px"
            },
            discordUsername: {
              fontWeight: 600,
              fontSize: "15px"
            },
            discordStatus: {
              fontWeight: 300,
              fontSize: "11.5px"
            },
            profileViewsCount: {
              fontWeight: 550,
              fontSize: "12.5px"
            },
            clickToEnter: {
              fontWeight: 500,
              fontSize: "30px"
            }
          }
        },
        p = {
          1: .7,
          2: 1,
          3: 1.5
        },
        f = e => {
          let {
            font: t,
            fontSize: r
          } = e, o = !u.has(t) && r ? p[r] : 1;
          return Object.keys(d).reduce((e, r) => {
            let s = d[r],
              a = m[t]?.[r] ?? s;
            return e[r] = {
              ...a,
              fontSize: `${parseFloat(a.fontSize)*o}px`
            }, e
          }, {})
        };
      var h = r(65596),
        g = r(59964),
        x = r(86275),
        v = r(29370),
        y = r(6926),
        _ = r(97650);
      r(96173);
      let b = `
precision highp float;
varying vec2 vUv;
void main() {
  vUv = uv;
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  gl_Position = projectionMatrix * viewPosition;
}
`,
        j = `
precision highp float;
uniform vec2 resolution;
uniform float time;
uniform float waveSpeed;
uniform float waveFrequency;
uniform float waveAmplitude;
uniform vec3 waveColor;
uniform vec2 mousePos;
uniform int enableMouseInteraction;
uniform float mouseRadius;

vec4 mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec2 fade(vec2 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }

float cnoise(vec2 P) {
  vec4 Pi = floor(P.xyxy) + vec4(0.0,0.0,1.0,1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0,0.0,1.0,1.0);
  Pi = mod289(Pi);
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;
  vec4 i = permute(permute(ix) + iy);
  vec4 gx = fract(i * (1.0/41.0)) * 2.0 - 1.0;
  vec4 gy = abs(gx) - 0.5;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;
  vec2 g00 = vec2(gx.x, gy.x);
  vec2 g10 = vec2(gx.y, gy.y);
  vec2 g01 = vec2(gx.z, gy.z);
  vec2 g11 = vec2(gx.w, gy.w);
  vec4 norm = taylorInvSqrt(vec4(dot(g00,g00), dot(g01,g01), dot(g10,g10), dot(g11,g11)));
  g00 *= norm.x; g01 *= norm.y; g10 *= norm.z; g11 *= norm.w;
  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));
  vec2 fade_xy = fade(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  return 2.3 * mix(n_x.x, n_x.y, fade_xy.y);
}

const int OCTAVES = 4;
float fbm(vec2 p) {
  float value = 0.0;
  float amp = 1.0;
  float freq = waveFrequency;
  for (int i = 0; i < OCTAVES; i++) {
    value += amp * abs(cnoise(p));
    p *= freq;
    amp *= waveAmplitude;
  }
  return value;
}

float pattern(vec2 p) {
  vec2 p2 = p - time * waveSpeed;
  return fbm(p + fbm(p2)); 
}

void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  uv -= 0.5;
  uv.x *= resolution.x / resolution.y;
  float f = pattern(uv);
  if (enableMouseInteraction == 1) {
    vec2 mouseNDC = (mousePos / resolution - 0.5) * vec2(1.0, -1.0);
    mouseNDC.x *= resolution.x / resolution.y;
    float dist = length(uv - mouseNDC);
    float effect = 1.0 - smoothstep(0.0, mouseRadius, dist);
    f -= 0.5 * effect;
  }
  vec3 col = mix(vec3(0.0), waveColor, f);
  gl_FragColor = vec4(col, 1.0);
}
`,
        w = `
precision highp float;
uniform float colorNum;
uniform float pixelSize;
const float bayerMatrix8x8[64] = float[64](
  0.0/64.0, 48.0/64.0, 12.0/64.0, 60.0/64.0,  3.0/64.0, 51.0/64.0, 15.0/64.0, 63.0/64.0,
  32.0/64.0,16.0/64.0, 44.0/64.0, 28.0/64.0, 35.0/64.0,19.0/64.0, 47.0/64.0, 31.0/64.0,
  8.0/64.0, 56.0/64.0,  4.0/64.0, 52.0/64.0, 11.0/64.0,59.0/64.0,  7.0/64.0, 55.0/64.0,
  40.0/64.0,24.0/64.0, 36.0/64.0, 20.0/64.0, 43.0/64.0,27.0/64.0, 39.0/64.0, 23.0/64.0,
  2.0/64.0, 50.0/64.0, 14.0/64.0, 62.0/64.0,  1.0/64.0,49.0/64.0, 13.0/64.0, 61.0/64.0,
  34.0/64.0,18.0/64.0, 46.0/64.0, 30.0/64.0, 33.0/64.0,17.0/64.0, 45.0/64.0, 29.0/64.0,
  10.0/64.0,58.0/64.0,  6.0/64.0, 54.0/64.0,  9.0/64.0,57.0/64.0,  5.0/64.0, 53.0/64.0,
  42.0/64.0,26.0/64.0, 38.0/64.0, 22.0/64.0, 41.0/64.0,25.0/64.0, 37.0/64.0, 21.0/64.0
);

vec3 dither(vec2 uv, vec3 color) {
  vec2 scaledCoord = floor(uv * resolution / pixelSize);
  int x = int(mod(scaledCoord.x, 8.0));
  int y = int(mod(scaledCoord.y, 8.0));
  float threshold = bayerMatrix8x8[y * 8 + x] - 0.25;
  float step = 1.0 / (colorNum - 1.0);
  color += threshold * step;
  float bias = 0.2;
  color = clamp(color - bias, 0.0, 1.0);
  return floor(color * (colorNum - 1.0) + 0.5) / (colorNum - 1.0);
}

void mainImage(in vec4 inputColor, in vec2 uv, out vec4 outputColor) {
  vec2 normalizedPixelSize = pixelSize / resolution;
  vec2 uvPixel = normalizedPixelSize * floor(uv / normalizedPixelSize);
  vec4 color = texture2D(inputBuffer, uvPixel);
  color.rgb = dither(uv, color.rgb);
  outputColor = color;
}
`;
      class S extends y.Mj {
        constructor() {
          const e = new Map([
            ["colorNum", new _.nc$(4)],
            ["pixelSize", new _.nc$(2)]
          ]);
          super("RetroEffect", w, {
            uniforms: e
          }), this.uniforms = e
        }
        set colorNum(e) {
          this.uniforms.get("colorNum").value = e
        }
        get colorNum() {
          return this.uniforms.get("colorNum").value
        }
        set pixelSize(e) {
          this.uniforms.get("pixelSize").value = e
        }
        get pixelSize() {
          return this.uniforms.get("pixelSize").value
        }
      }
      let C = (0, s.forwardRef)((e, t) => {
        let {
          colorNum: r,
          pixelSize: s
        } = e, a = (0, v.AR)(S);
        return (0, o.jsx)(a, {
          ref: t,
          colorNum: r,
          pixelSize: s
        })
      });

      function N({
        waveSpeed: e,
        waveFrequency: t,
        waveAmplitude: r,
        waveColor: a,
        colorNum: i,
        pixelSize: n,
        disableAnimation: l,
        enableMouseInteraction: c,
        mouseRadius: d
      }) {
        let u = (0, s.useRef)(null),
          m = (0, s.useRef)(new _.I9Y),
          {
            viewport: p,
            size: f,
            gl: h
          } = (0, g.C)(),
          x = (0, s.useRef)({
            time: new _.nc$(0),
            resolution: new _.nc$(new _.I9Y(0, 0)),
            waveSpeed: new _.nc$(e),
            waveFrequency: new _.nc$(t),
            waveAmplitude: new _.nc$(r),
            waveColor: new _.nc$(new _.Q1f(...a)),
            mousePos: new _.nc$(new _.I9Y(0, 0)),
            enableMouseInteraction: new _.nc$(+!!c),
            mouseRadius: new _.nc$(d)
          });
        (0, s.useEffect)(() => {
          let e = h.getPixelRatio(),
            t = Math.floor(f.width * e),
            r = Math.floor(f.height * e),
            o = x.current.resolution.value;
          (o.x !== t || o.y !== r) && o.set(t, r)
        }, [f, h]);
        let y = (0, s.useRef)([...a]);
        return (0, g.D)(({
          clock: o
        }) => {
          let s = x.current;
          l || (s.time.value = o.getElapsedTime()), s.waveSpeed.value !== e && (s.waveSpeed.value = e), s.waveFrequency.value !== t && (s.waveFrequency.value = t), s.waveAmplitude.value !== r && (s.waveAmplitude.value = r), y.current.every((e, t) => e === a[t]) || (s.waveColor.value.set(...a), y.current = [...a]), s.enableMouseInteraction.value = +!!c, s.mouseRadius.value = d, c && s.mousePos.value.copy(m.current)
        }), (0, s.useEffect)(() => {
          if (!c) return;
          let e = e => {
            var t, r;
            let o, s;
            t = e.clientX, r = e.clientY, o = h.domElement.getBoundingClientRect(), s = h.getPixelRatio(), m.current.set((t - o.left) * s, (r - o.top) * s)
          };
          return window.addEventListener("pointermove", e, {
            passive: !0
          }), () => {
            window.removeEventListener("pointermove", e)
          }
        }, [c, h]), (0, o.jsxs)(o.Fragment, {
          children: [(0, o.jsxs)("mesh", {
            ref: u,
            scale: [p.width, p.height, 1],
            children: [(0, o.jsx)("planeGeometry", {
              args: [1, 1]
            }), (0, o.jsx)("shaderMaterial", {
              vertexShader: b,
              fragmentShader: j,
              uniforms: x.current
            })]
          }), (0, o.jsx)(v.s0, {
            children: (0, o.jsx)(C, {
              colorNum: i,
              pixelSize: n
            })
          }), (0, o.jsxs)("mesh", {
            onPointerMove: e => {
              if (!c) return;
              let t = h.domElement.getBoundingClientRect(),
                r = h.getPixelRatio();
              m.current.set((e.clientX - t.left) * r, (e.clientY - t.top) * r)
            },
            position: [0, 0, .01],
            scale: [p.width, p.height, 1],
            visible: !1,
            children: [(0, o.jsx)("planeGeometry", {
              args: [1, 1]
            }), (0, o.jsx)("meshBasicMaterial", {
              transparent: !0,
              opacity: 0
            })]
          })]
        })
      }

      function k({
        waveSpeed: e = .05,
        waveFrequency: t = 3,
        waveAmplitude: r = .3,
        waveColor: s = [.5, .5, .5],
        colorNum: a = 4,
        pixelSize: i = 2,
        disableAnimation: n = !1,
        enableMouseInteraction: l = !0,
        mouseRadius: c = 1
      }) {
        return (0, o.jsx)(x.Hl, {
          className: "dither-container",
          camera: {
            position: [0, 0, 6]
          },
          dpr: 1,
          gl: {
            antialias: !0,
            preserveDrawingBuffer: !0
          },
          children: (0, o.jsx)(N, {
            waveSpeed: e,
            waveFrequency: t,
            waveAmplitude: r,
            waveColor: s,
            colorNum: a,
            pixelSize: i,
            disableAnimation: n,
            enableMouseInteraction: l,
            mouseRadius: c
          })
        })
      }
      C.displayName = "RetroEffect";
      var P = r(22634),
        L = r(373),
        A = r(16748),
        T = r(41519),
        $ = r(10204);
      r(42789);
      let E = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,
        z = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {              \
  int index = 0;                                            \
  for (int i = 0; i < 2; i++) {                               \
     ColorStop currentColor = colors[i];                    \
     bool isInBetween = currentColor.position <= factor;    \
     index = int(mix(float(index), float(i), float(isInBetween))); \
  }                                                         \
  ColorStop currentColor = colors[index];                   \
  ColorStop nextColor = colors[index + 1];                  \
  float range = nextColor.position - currentColor.position; \
  float lerpFactor = (factor - currentColor.position) / range; \
  finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);
  
  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);
  
  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;
  
  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
  
  vec3 auroraColor = intensity * rampColor;
  
  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;

      function I(e) {
        let {
          colorStops: t = ["#5227FF", "#7cff67", "#5227FF"],
          amplitude: r = 1,
          blend: a = .5
        } = e, i = (0, s.useRef)(e);
        i.current = e;
        let n = (0, s.useRef)(null);
        return (0, s.useEffect)(() => {
          let e, o = n.current;
          if (!o) return;
          let s = new P.A({
              alpha: !0,
              premultipliedAlpha: !0,
              antialias: !0
            }),
            l = s.gl;

          function c() {
            if (!o) return;
            let t = o.offsetWidth,
              r = o.offsetHeight;
            s.setSize(t, r), e && (e.uniforms.uResolution.value = [t, r])
          }
          l.clearColor(0, 0, 0, 0), l.enable(l.BLEND), l.blendFunc(l.ONE, l.ONE_MINUS_SRC_ALPHA), l.canvas.style.backgroundColor = "transparent", window.addEventListener("resize", c);
          let d = new L.l(l);
          d.attributes.uv && delete d.attributes.uv;
          let u = t.map(e => {
            let t = new A.Q(e);
            return [t.r, t.g, t.b]
          });
          e = new T.B(l, {
            vertex: E,
            fragment: z,
            uniforms: {
              uTime: {
                value: 0
              },
              uAmplitude: {
                value: r
              },
              uColorStops: {
                value: u
              },
              uResolution: {
                value: [o.offsetWidth, o.offsetHeight]
              },
              uBlend: {
                value: a
              }
            }
          });
          let m = new $.e(l, {
            geometry: d,
            program: e
          });
          o.appendChild(l.canvas);
          let p = 0,
            f = r => {
              p = requestAnimationFrame(f);
              let {
                time: o = .01 * r,
                speed: n = 1
              } = i.current;
              if (e) {
                e.uniforms.uTime.value = o * n * .1, e.uniforms.uAmplitude.value = i.current.amplitude ?? 1, e.uniforms.uBlend.value = i.current.blend ?? a;
                let r = i.current.colorStops ?? t;
                e.uniforms.uColorStops.value = r.map(e => {
                  let t = new A.Q(e);
                  return [t.r, t.g, t.b]
                }), s.render({
                  scene: m
                })
              }
            };
          return p = requestAnimationFrame(f), c(), () => {
            cancelAnimationFrame(p), window.removeEventListener("resize", c), o && l.canvas.parentNode === o && o.removeChild(l.canvas), l.getExtension("WEBGL_lose_context")?.loseContext()
          }
        }, [r]), (0, o.jsx)("div", {
          ref: n,
          className: "aurora-container"
        })
      }
      r(1825);
      let B = `#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,
        M = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uCustomColor;
uniform float uUseCustomColor;
uniform float uSpeed;
uniform float uDirection;
uniform float uScale;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseInteractive;
out vec4 fragColor;

void mainImage(out vec4 o, vec2 C) {
  vec2 center = iResolution.xy * 0.5;
  C = (C - center) / uScale + center;
  
  vec2 mouseOffset = (uMouse - center) * 0.0002;
  C += mouseOffset * length(C - center) * step(0.5, uMouseInteractive);
  
  float i, d, z, T = iTime * uSpeed * uDirection;
  vec3 O, p, S;

  for (vec2 r = iResolution.xy, Q; ++i < 60.; O += o.w/d*o.xyz) {
    p = z*normalize(vec3(C-.5*r,r.y)); 
    p.z -= 4.; 
    S = p;
    d = p.y-T;
    
    p.x += .4*(1.+p.y)*sin(d + p.x*0.1)*cos(.34*d + p.x*0.05); 
    Q = p.xz *= mat2(cos(p.y+vec4(0,11,33,0)-T)); 
    z+= d = abs(sqrt(length(Q*Q)) - .25*(5.+S.y))/3.+8e-4; 
    o = 1.+sin(S.y+p.z*.5+S.z-length(S-p)+vec4(2,1,0,8));
  }
  
  o.xyz = tanh(O/1e4);
}

bool finite1(float x){ return !(isnan(x) || isinf(x)); }
vec3 sanitize(vec3 c){
  return vec3(
    finite1(c.r) ? c.r : 0.0,
    finite1(c.g) ? c.g : 0.0,
    finite1(c.b) ? c.b : 0.0
  );
}

void main() {
  vec4 o = vec4(0.0);
  mainImage(o, gl_FragCoord.xy);
  vec3 rgb = sanitize(o.rgb);
  
  float intensity = (rgb.r + rgb.g + rgb.b) / 3.0;
  vec3 customColor = intensity * uCustomColor;
  vec3 finalColor = mix(rgb, customColor, step(0.5, uUseCustomColor));
  
  float alpha = length(rgb) * uOpacity;
  fragColor = vec4(finalColor, alpha);
}`,
        W = ({
          color: e = "#ffffff",
          speed: t = 1,
          direction: r = "forward",
          scale: a = 1,
          opacity: i = 1,
          mouseInteractive: n = !0
        }) => {
          let l = (0, s.useRef)(null),
            c = (0, s.useRef)({
              x: 0,
              y: 0
            });
          return (0, s.useEffect)(() => {
            let o;
            if (!l.current) return;
            let s = l.current,
              d = () => {
                for (; s.firstChild;) s.removeChild(s.firstChild)
              },
              u = +!!e,
              m = e ? (o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? [parseInt(o[1], 16) / 255, parseInt(o[2], 16) / 255, parseInt(o[3], 16) / 255] : [1, .5, .2] : [1, 1, 1],
              p = "reverse" === r ? -1 : 1,
              f = new P.A({
                webgl: 2,
                alpha: !0,
                antialias: !1,
                dpr: Math.min(window.devicePixelRatio || 1, 2)
              }),
              h = f.gl,
              g = h.canvas;
            g.style.display = "block", g.style.width = "100%", g.style.height = "100%", d(), s.appendChild(g);
            let x = new L.l(h),
              v = new T.B(h, {
                vertex: B,
                fragment: M,
                uniforms: {
                  iTime: {
                    value: 0
                  },
                  iResolution: {
                    value: new Float32Array([1, 1])
                  },
                  uCustomColor: {
                    value: new Float32Array(m)
                  },
                  uUseCustomColor: {
                    value: u
                  },
                  uSpeed: {
                    value: .4 * t
                  },
                  uDirection: {
                    value: p
                  },
                  uScale: {
                    value: a
                  },
                  uOpacity: {
                    value: i
                  },
                  uMouse: {
                    value: new Float32Array([0, 0])
                  },
                  uMouseInteractive: {
                    value: +!!n
                  }
                }
              }),
              y = new $.e(h, {
                geometry: x,
                program: v
              }),
              _ = e => {
                if (!n) return;
                let t = l.current.getBoundingClientRect();
                c.current.x = e.clientX - t.left, c.current.y = e.clientY - t.top;
                let r = v.uniforms.uMouse.value;
                r[0] = c.current.x, r[1] = c.current.y
              };
            n && l.current.addEventListener("mousemove", _);
            let b = () => {
                let e = l.current.getBoundingClientRect(),
                  t = Math.max(1, Math.floor(e.width)),
                  r = Math.max(1, Math.floor(e.height));
                f.setSize(t, r);
                let o = v.uniforms.iResolution.value;
                o[0] = h.drawingBufferWidth, o[1] = h.drawingBufferHeight
              },
              j = new ResizeObserver(b);
            j.observe(l.current), b();
            let w = 0,
              S = performance.now(),
              C = e => {
                let t = (e - S) * .001;
                if ("pingpong" === r) {
                  let e = Math.sin(.5 * t) * p;
                  v.uniforms.uDirection.value = e
                }
                v.uniforms.iTime.value = t, f.render({
                  scene: y
                }), w = requestAnimationFrame(C)
              };
            return w = requestAnimationFrame(C), () => {
              cancelAnimationFrame(w), j.disconnect(), n && s.removeEventListener("mousemove", _), d()
            }
          }, [e, t, r, a, i, n]), (0, o.jsx)("div", {
            ref: l,
            className: "plasma-container"
          })
        };
      var D = r(29625);
      let F = `
precision highp float;
precision highp int;
attribute vec3 position;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

attribute vec4 mouse;
attribute vec2 aFront;
attribute float random;

uniform vec2 resolution;
uniform float pixelRatio;
uniform float timestamp;

uniform float size;
uniform float minSize;
uniform float speed;
uniform float far;
uniform float spread;
uniform float maxSpread;
uniform float maxZ;
uniform float maxDiff;
uniform float diffPow;

varying float vProgress;
varying float vRandom;
varying float vDiff;
varying float vSpreadLength;
varying float vPositionZ;

float cubicOut(float t) {
  float f = t - 1.0;
  return f * f * f + 1.0;
}

const float PI = 3.1415926;
const float PI2 = PI * 2.;

void main () {
  float progress = clamp((timestamp - mouse.z) * speed, 0., 1.);
  progress *= step(0., mouse.x);

  float startX = mouse.x - resolution.x / 2.;
  float startY = mouse.y - resolution.y / 2.;
  vec3 startPosition = vec3(startX, startY, random);

  float diff = clamp(mouse.w / maxDiff, 0., 1.);
  diff = pow(diff, diffPow);

  vec3 cPosition = position * 2. - 1.;

  float radian = cPosition.x * PI2 - PI;
  vec2 xySpread = vec2(cos(radian), sin(radian)) * spread * mix(1., maxSpread, diff) * cPosition.y;

  vec3 endPosition = startPosition;
  endPosition.xy += xySpread;
  endPosition.xy -= aFront * far * random;
  endPosition.z += cPosition.z * maxZ * (pixelRatio > 1. ? 1.2 : 1.);

  float positionProgress = cubicOut(progress * random);
  vec3 currentPosition = mix(startPosition, endPosition, positionProgress);

  vProgress = progress;
  vRandom = random;
  vDiff = diff;
  vSpreadLength = cPosition.y;
  vPositionZ = position.z;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(currentPosition, 1.);
  gl_PointSize = max(currentPosition.z * size * diff * pixelRatio, minSize * (pixelRatio > 1. ? 1.3 : 1.));
}
`,
        R = `
precision highp float;
precision highp int;

uniform float fadeSpeed;
uniform float shortRangeFadeSpeed;
uniform float minFlashingSpeed;
uniform float blur;
uniform vec3 color;

varying float vProgress;
varying float vRandom;
varying float vDiff;
varying float vSpreadLength;
varying float vPositionZ;

highp float random(vec2 co)
{
    highp float a = 12.9898;
    highp float b = 78.233;
    highp float c = 43758.5453;
    highp float dt= dot(co.xy ,vec2(a,b));
    highp float sn= mod(dt,3.14);
    return fract(sin(sn) * c);
}

float quadraticIn(float t) {
  return t * t;
}

#ifndef HALF_PI
#define HALF_PI 1.5707963267948966
#endif

float sineOut(float t) {
  return sin(t * HALF_PI);
}

void main(){
  vec2 p = gl_PointCoord * 2. - 1.;
  float len = length(p);

  float cRandom = random(vec2(vProgress * mix(minFlashingSpeed, 1., vRandom)));
  cRandom = mix(0.3, 2., cRandom);

  float cBlur = blur * mix(1., 0.3, vPositionZ);
  float shape = smoothstep(1. - cBlur, 1. + cBlur, (1. - cBlur) / len);
  shape *= mix(0.5, 1., vRandom);

  if (shape == 0.) discard;

  float darkness = mix(0.1, 1., vPositionZ);

  float alphaProgress = vProgress * fadeSpeed * mix(2.5, 1., pow(vDiff, 0.6));
  alphaProgress *= mix(shortRangeFadeSpeed, 1., sineOut(vSpreadLength) * quadraticIn(vDiff));
  float alpha = 1. - min(alphaProgress, 1.);
  alpha *= cRandom * vDiff;

  gl_FragColor = vec4(color * darkness * cRandom, shape * alpha);
}
`;

      function U({
        className: e = "",
        starColor: t = "#aa8558",
        size: r = .05,
        minSize: a = 1,
        speed: i = .002,
        fadeSpeed: n = 1.1,
        shortRangeFadeSpeed: l = 1.3,
        minFlashingSpeed: c = .1,
        spread: d = 7,
        maxSpread: u = 5,
        maxZ: m = 100,
        blur: p = 1,
        far: f = 10,
        maxDiff: h = 100,
        diffPow: g = .24
      }) {
        let x = (0, s.useRef)(null),
          v = (0, s.useRef)(null);
        return (0, s.useEffect)(() => {
          if (!x.current || !v.current) return;
          let e = x.current.clientWidth || window.innerWidth,
            o = x.current.clientHeight || window.innerHeight;
          if (!e || !o) return;
          let s = 0,
            y = !0,
            b = Math.min(window.devicePixelRatio || 1, 2),
            j = {
              clientWidth: e,
              clientHeight: o,
              clientHalfWidth: e / 2,
              clientHalfHeight: o / 2,
              resolution: new _.I9Y(e, o),
              pixelRatio: b,
              mouseI: 0,
              oldPosition: null,
              timestamp: 0,
              rate: 1
            },
            w = 180 / Math.PI * Math.atan(o / 2 / 5e3) * 2,
            S = new D.WebGLRenderer({
              canvas: v.current,
              antialias: 1 === b,
              alpha: !0
            });
          S.setPixelRatio(j.pixelRatio), S.setClearColor(0, 0), S.setSize(e, o);
          let C = new _.ubm(w, e / o, .1, 1e4);
          C.position.set(0, 0, 5e3), C.updateProjectionMatrix();
          let N = new _.Z58,
            k = {
              resolution: {
                value: j.resolution
              },
              pixelRatio: {
                value: j.pixelRatio
              },
              timestamp: {
                value: 0
              },
              color: {
                value: new _.Q1f(t)
              },
              size: {
                value: r
              },
              minSize: {
                value: a
              },
              speed: {
                value: i
              },
              fadeSpeed: {
                value: n
              },
              shortRangeFadeSpeed: {
                value: l
              },
              minFlashingSpeed: {
                value: c
              },
              spread: {
                value: d
              },
              maxSpread: {
                value: u
              },
              maxZ: {
                value: m
              },
              blur: {
                value: p
              },
              far: {
                value: f
              },
              maxDiff: {
                value: h
              },
              diffPow: {
                value: g
              }
            },
            P = new _.LoY,
            L = new Float32Array(96e4),
            A = new Float32Array(128e4),
            T = new Float32Array(64e4),
            $ = new Float32Array(32e4);
          for (let e = 0; e < 32e4; e++) L[3 * e] = Math.random(), L[3 * e + 1] = Math.random(), L[3 * e + 2] = Math.random(), A[4 * e] = -1, A[4 * e + 1] = -1, $[e] = Math.random();
          P.setAttribute("position", new _.THS(L, 3)), P.setAttribute("mouse", new _.THS(A, 4)), P.setAttribute("aFront", new _.THS(T, 2)), P.setAttribute("random", new _.THS($, 1));
          let E = new _.D$Q({
              uniforms: k,
              vertexShader: F,
              fragmentShader: R,
              transparent: !0,
              depthTest: !1,
              blending: _.EZo
            }),
            z = new _.ONl(P, E);
          z.frustumCulled = !1, N.add(z);
          let I = (e, t) => {
              let r = e * j.rate + j.clientHalfWidth,
                o = j.clientHeight - (t * j.rate + j.clientHalfHeight),
                s = new _.I9Y(r, o),
                a = j.oldPosition ? s.clone().sub(j.oldPosition) : new _.I9Y,
                i = a.length(),
                n = i > 0 ? a.clone().normalize() : new _.I9Y,
                l = P.attributes.mouse,
                c = P.attributes.aFront,
                d = l.array,
                u = c.array;
              for (let e = 0; e < 800; e++) {
                let t = (j.mouseI + e) % 32e4,
                  r = 4 * t,
                  o = 2 * t,
                  l = j.oldPosition ? j.oldPosition.clone().add(a.clone().multiplyScalar(e / 800)) : s;
                d[r] = l.x, d[r + 1] = l.y, d[r + 2] = j.timestamp, d[r + 3] = i, u[o] = n.x, u[o + 1] = n.y
              }
              j.oldPosition = s, l.needsUpdate = !0, c.needsUpdate = !0, j.mouseI = (j.mouseI + 800) % 32e4
            },
            B = e => {
              I(e.clientX - j.clientHalfWidth, e.clientY - j.clientHalfHeight)
            },
            M = e => {
              e.touches[0] && I(e.touches[0].clientX - j.clientHalfWidth, e.touches[0].clientY - j.clientHalfHeight)
            },
            W = () => {
              if (!x.current) return;
              let t = x.current.clientWidth || window.innerWidth,
                r = x.current.clientHeight || window.innerHeight;
              t && r && (j.rate = 1 / (r / o) * Math.min(t / e, 1), j.clientWidth = t, j.clientHeight = r, j.clientHalfWidth = t / 2, j.clientHalfHeight = r / 2, j.resolution.set(t, r), C.aspect = t / r, C.updateProjectionMatrix(), S.setSize(t, r))
            },
            U = new IntersectionObserver(([e]) => {
              y = e.isIntersecting
            }, {
              threshold: 0
            });
          U.observe(x.current);
          let O = performance.now(),
            H = e => {
              y && (j.timestamp = e - O, k.timestamp.value = j.timestamp, S.render(N, C)), s = requestAnimationFrame(H)
            };
          return window.addEventListener("pointermove", B), window.addEventListener("touchmove", M, {
            passive: !0
          }), window.addEventListener("resize", W), s = requestAnimationFrame(H), () => {
            U.disconnect(), cancelAnimationFrame(s), window.removeEventListener("pointermove", B), window.removeEventListener("touchmove", M), window.removeEventListener("resize", W), N.remove(z), P.dispose(), E.dispose(), S.dispose()
          }
        }, [t, r, a, i, n, l, c, d, u, m, p, f, h, g]), (0, o.jsx)("div", {
          ref: x,
          className: e,
          style: {
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            overflow: "hidden",
            zIndex: 0x7fffffff
          },
          children: (0, o.jsx)("canvas", {
            ref: v,
            style: {
              display: "block",
              width: "100%",
              height: "100%"
            }
          })
        })
      }
      let O = `#version 300 es
in vec4 position;
void main() {
  gl_Position = position;
}
`,
        H = `#version 300 es
precision highp float;
out vec4 fragColor;
void main() {
  fragColor = vec4(1.0);
}
`,
        G = `attribute vec4 position;
void main() {
  gl_Position = position;
}`,
        V = `precision mediump float;
void main() {
  gl_FragColor = vec4(1.0);
}`,
        q = {
          aurora: !1,
          plasma: !1,
          dither: !1
        },
        Y = (e, t, r) => {
          try {
            let o = e.createShader(e.VERTEX_SHADER),
              s = e.createShader(e.FRAGMENT_SHADER);
            if (!o || !s) return !1;
            e.shaderSource(o, t), e.shaderSource(s, r), e.compileShader(o), e.compileShader(s);
            let a = e.getShaderParameter(o, e.COMPILE_STATUS),
              i = e.getShaderParameter(s, e.COMPILE_STATUS);
            if (!a || !i) return e.deleteShader(o), e.deleteShader(s), !1;
            let n = e.createProgram();
            if (!n) return e.deleteShader(o), e.deleteShader(s), !1;
            e.attachShader(n, o), e.attachShader(n, s), e.linkProgram(n);
            let l = e.getProgramParameter(n, e.LINK_STATUS);
            return e.deleteShader(o), e.deleteShader(s), e.deleteProgram(n), !!l
          } catch {
            return !1
          }
        };

      function Z({
        backgroundEffects: e,
        backgroundEffectsColor: t,
        cursorEffects: r,
        cursorEffectsColor: a,
        textColor: n,
        backgroundColor: l,
        cursorUrl: c
      }) {
        let d = /^#[0-9a-f]{6}$/i.test(t ?? "") ? t : n,
          u = (e => {
            let t, {
              r,
              g: o,
              b: s
            } = {
              r: (t = parseInt(e.replace("#", ""), 16)) >> 16 & 255,
              g: t >> 8 & 255,
              b: 255 & t
            };
            return [r / 255, o / 255, s / 255]
          })(d),
          [m, p] = (0, s.useState)(q),
          [f, g] = (0, s.useState)(!1),
          [x, v] = (0, s.useState)(!1);
        (0, s.useEffect)(() => {
          let e, t, r, o, s, a = !1,
            i = (t = !!((e = document.createElement("canvas").getContext("webgl2", {
              failIfMajorPerformanceCaveat: !0
            })) && Y(e, O, H)), e?.getExtension("WEBGL_lose_context")?.loseContext(), o = (r = document.createElement("canvas")).getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || r.getContext("experimental-webgl"), s = t || !!(o && Y(o, G, V)), o?.getExtension("WEBGL_lose_context")?.loseContext(), {
              aurora: t,
              plasma: t,
              dither: s
            });
          return a || p(i), () => {
            a = !0
          }
        }, []), (0, s.useEffect)(() => {
          window.cursoreffects && g(!0), window.gunsLolOneko && v(!0)
        }, []), (0, s.useEffect)(() => {
          "cat" === r && x && window.gunsLolOneko?.setColor(a)
        }, [x, r, a]);
        let y = (0, s.useCallback)(() => {
          let e = window.cursoreffects;
          e && r && "shooting_star" !== r && ({
            bubbles: () => new e.bubbleCursor({
              color: [a]
            }),
            dot: () => new e.followingDotCursor({
              color: [a]
            }),
            snowflakes: () => new e.snowflakeCursor({
              color: [a]
            }),
            particles: () => new e.fairyDustCursor({
              colors: [a]
            }),
            ghost: () => new e.trailingCursor({
              particles: 15,
              rate: .6,
              baseImageSrc: c
            })
          })[r]?.()
        }, [r, a, c]);
        (0, s.useEffect)(() => {
          f && y()
        }, [f, y]);
        let _ = "dither" === e && m.dither,
          b = "aurora" === e && m.aurora,
          j = "plasma" === e && m.plasma,
          w = "shooting_star" !== r;
        return (0, o.jsxs)(o.Fragment, {
          children: ["snowflakes" === e ? (0, o.jsx)(o.Fragment, {
            children: (0, o.jsxs)("div", {
              className: i().snowflakes,
              style: {
                color: d
              },
              children: [(0, o.jsx)("div", {
                className: i().snowflake,
                children: (0, o.jsx)("div", {
                  className: i().inner,
                  children: "❅"
                })
              }), (0, o.jsx)("div", {
                className: i().snowflake,
                children: (0, o.jsx)("div", {
                  className: i().inner,
                  children: "❅"
                })
              }), (0, o.jsx)("div", {
                className: i().snowflake,
                children: (0, o.jsx)("div", {
                  className: i().inner,
                  children: "❅"
                })
              }), (0, o.jsx)("div", {
                className: i().snowflake,
                children: (0, o.jsx)("div", {
                  className: i().inner,
                  children: "❅"
                })
              }), (0, o.jsx)("div", {
                className: i().snowflake,
                children: (0, o.jsx)("div", {
                  className: i().inner,
                  children: "❅"
                })
              }), (0, o.jsx)("div", {
                className: i().snowflake,
                children: (0, o.jsx)("div", {
                  className: i().inner,
                  children: "❅"
                })
              }), (0, o.jsx)("div", {
                className: i().snowflake,
                children: (0, o.jsx)("div", {
                  className: i().inner,
                  children: "❅"
                })
              }), (0, o.jsx)("div", {
                className: i().snowflake,
                children: (0, o.jsx)("div", {
                  className: i().inner,
                  children: "❅"
                })
              }), (0, o.jsx)("div", {
                className: i().snowflake,
                children: (0, o.jsx)("div", {
                  className: i().inner,
                  children: "❅"
                })
              }), (0, o.jsx)("div", {
                className: i().snowflake,
                children: (0, o.jsx)("div", {
                  className: i().inner,
                  children: "❅"
                })
              }), (0, o.jsx)("div", {
                className: i().snowflake,
                children: (0, o.jsx)("div", {
                  className: i().inner,
                  children: "❅"
                })
              }), (0, o.jsx)("div", {
                className: i().snowflake,
                children: (0, o.jsx)("div", {
                  className: i().inner,
                  children: "❅"
                })
              })]
            })
          }) : "rain" === e ? (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(h.default, {
              strategy: "beforeInteractive",
              src: "https://assets.guns.lol/guns_storm.js",
              id: "_gunsstorm"
            }), (0, o.jsx)(h.default, {
              strategy: "beforeInteractive",
              id: "_gunsstormcode",
              children: `
                                snowStorm.snowColor = '${d}';
                                snowStorm.flakesMaxActive = 80;
                                snowStorm.useTwinkleEffect = true;
                                snowStorm.autoStart = true;
                                snowStorm.freezeOnBlur = false;
                                snowStorm.excludeMobile = false;
                            `
            })]
          }) : "blurred" === e ? (0, o.jsx)("div", {
            className: i().blurredBackground
          }) : "tv" === e ? (0, o.jsx)("div", {
            className: i().oldTV
          }) : "night" === e ? (0, o.jsx)("div", {
            className: i().nightTime
          }) : _ ? (0, o.jsx)(k, {
            waveColor: u,
            disableAnimation: !1,
            enableMouseInteraction: !0,
            mouseRadius: .22,
            colorNum: 5,
            waveAmplitude: .3,
            waveFrequency: 2,
            waveSpeed: .06
          }) : b ? (0, o.jsx)(I, {
            colorStops: [d, d, d],
            blend: .5,
            amplitude: .5,
            speed: .6
          }) : j && (0, o.jsx)(W, {
            color: d,
            speed: .5,
            direction: "forward",
            scale: 1.1,
            opacity: .9,
            mouseInteractive: !1
          }), w && (0, o.jsx)(h.default, {
            strategy: "afterInteractive",
            src: "https://assets.guns.lol/cursor-effects.js",
            id: "_cursor",
            onLoad: () => g(!0)
          }), "cat" === r && (0, o.jsx)(h.default, {
            strategy: "afterInteractive",
            src: "/oneko-colorable.js",
            id: "_ccat",
            "data-color": a,
            onLoad: () => v(!0)
          }), "shooting_star" === r && (0, o.jsx)(U, {
            starColor: a
          }), "" !== c && (0, o.jsx)("style", {
            children: `
                    * {
                      cursor: url(${c}) 16 16, auto !important;
                    }
                    `
          }), (0, o.jsx)("style", {
            children: `
                ::-moz-selection {
                    background: ${n};
                    color: ${l};
                }
                ::selection {
                    background: ${n};
                    color: ${l};
                }
                `
          })]
        })
      }
      var X = r(98542),
        J = r(82413),
        Q = r(62799),
        K = r.n(Q),
        ee = r(41609),
        et = r.n(ee),
        er = r(15041),
        eo = r(61778);
      let es = ({
        config: e,
        premiumConfig: t,
        className: r,
        carousel: a = !1,
        trackClassName: n,
        groupClassName: l
      }) => {
        let c = e.user_badges,
          d = e.custom_badges,
          u = (0, s.useRef)(null),
          m = (0, s.useRef)(null),
          [p, f] = (0, s.useState)(!1),
          [h, g] = (0, s.useState)(!1),
          x = c.length > 0 && c[0] && "string" == typeof c[0],
          v = d.length > 0 && "string" == typeof d[0][0],
          y = {
            staff: "Staff",
            premium: "Premium",
            verified: "Verified",
            donor: "Donor",
            og: "OG",
            server_booster: "Server Booster",
            winner: "Winner",
            second: "Second",
            third: "Third",
            imagehost_access: "Image Host",
            bughunter: "Bug Hunter",
            christmas_2024: "Christmas 2024",
            christmas_2025: "Christmas 2025",
            domain_legend: "Domain Legend",
            easter_2025: "Easter 2025",
            easter_2026: "Easter 2026",
            helper: "Community Helper",
            gifter: "Gifter",
            the_million: "The Million",
            hone: "Hone.gg"
          },
          _ = {
            staff: "staff",
            premium: "premium",
            verified: "verified",
            donor: "donor",
            og: "og",
            server_booster: "serverBooster",
            winner: "winner",
            second: "second",
            third: "third",
            imagehost_access: "imagehost",
            bughunter: "bugHunter",
            christmas_2024: "christmas2024",
            christmas_2025: "christmas2025",
            domain_legend: "domainLegend",
            easter_2025: "easter2025",
            easter_2026: "easter2026",
            helper: "helper",
            gifter: "gifter",
            the_million: "theMillion",
            hone: "hone"
          },
          b = {
            Staff: "staff",
            Premium: "premium",
            Verified: "verified",
            Donor: "donor",
            OG: "og",
            "Server Booster": "serverBooster",
            Winner: "winner",
            Second: "second",
            Third: "third",
            "Image Host": "imageHost",
            "Bug Hunter": "bugHunter",
            "Christmas 2024": "christmas2024",
            "Christmas 2025": "christmas2025",
            "Domain Legend": "domainLegend",
            "Easter 2025": "easter2025",
            "Easter 2026": "easter2026",
            "Community Helper": "helper",
            Gifter: "gifter",
            "The Million": "theMillion",
            "Hone.gg": "hone"
          },
          j = e => e ? y[e] ?? (e ? e.split("_").filter(Boolean).map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" ") : "Badge") : "Badge",
          w = e => {
            if (!e) return null;
            let t = y[e];
            if (!t) return null;
            let r = b[t];
            return r ? i()[r] ?? null : null
          };
        (0, s.useEffect)(() => {
          if (!a) {
            f(!1), g(!1);
            return
          }
          let e = u.current,
            t = m.current;
          if (!e || !t) return;
          let r = 0,
            o = !0,
            s = e.parentElement ?? e,
            i = () => {
              cancelAnimationFrame(r), r = requestAnimationFrame(() => {
                if (!o) return;
                let r = [e.clientWidth, s.clientWidth, window.innerWidth].filter(e => e > 0),
                  a = r.length > 0 ? Math.min(...r) : 0,
                  i = t.scrollWidth - a > 1;
                f(i), i || g(!1)
              })
            };
          i();
          let n = "undefined" != typeof ResizeObserver ? new ResizeObserver(i) : null;
          return n?.observe(s), n?.observe(e), n?.observe(t), window.addEventListener("resize", i), document.fonts?.ready.then(i), () => {
            o = !1, cancelAnimationFrame(r), n?.disconnect(), window.removeEventListener("resize", i)
          }
        }, [a, c, d, t.badge_color, t.monochrome_badges, e.badge_glow]), (0, s.useEffect)(() => {
          if (!h) return;
          let e = e => {
            let t = u.current;
            t && t.contains(e.target) || g(!1)
          };
          return document.addEventListener("click", e), () => {
            document.removeEventListener("click", e)
          }
        }, [h]);
        let S = () => {
            a && p && g(!0)
          },
          C = (0, o.jsxs)(o.Fragment, {
            children: [x ? c.map(r => {
              let s = j(r),
                a = w(r),
                n = er.A[_[r]];
              return (0, o.jsx)(eo.A, {
                content: s,
                pageTooltipStyles: !0,
                children: (0, o.jsxs)("div", {
                  className: i().badgeContainerFlex,
                  children: [t.monochrome_badges && a && (0, o.jsx)("style", {
                    children: `
                    .${a} {
                        color: ${t.badge_color}!important;
                        filter: drop-shadow(${t.badge_color} 0 0 2.5px)!important;
                    }
                    `
                  }), !e.badge_glow && a && (0, o.jsx)("style", {
                    children: `
                    .${a} {
                        filter: none!important;
                    }
                    `
                  }), n]
                })
              }, r)
            }) : c.map(r => {
              if (!r.enabled) return null;
              let s = r.name,
                a = j(s),
                n = w(s),
                l = er.A[_[s]];
              return (0, o.jsx)(eo.A, {
                content: a,
                pageTooltipStyles: !0,
                children: (0, o.jsxs)("div", {
                  className: i().badgeContainerFlex,
                  children: [t.monochrome_badges && n && (0, o.jsx)("style", {
                    children: `
                    .${n} {
                        color: ${t.badge_color}!important;
                        filter: drop-shadow(${t.badge_color} 0 0 2.5px)!important;
                    }
                    `
                  }), !e.badge_glow && n && (0, o.jsx)("style", {
                    children: `
                    .${n} {
                        filter: none!important;
                    }
                    `
                  }), l]
                })
              }, s)
            }), 0 !== d.length && (0, o.jsx)(o.Fragment, {
              children: v ? d.map((e, t) => (0, o.jsx)(eo.A, {
                content: e[0],
                pageTooltipStyles: !0,
                children: (0, o.jsx)("div", {
                  className: i().badgeContainerFlex,
                  children: (0, o.jsx)("img", {
                    src: e[1],
                    alt: "Custom Badge",
                    className: i().customBadge,
                    draggable: !1
                  })
                })
              }, t)) : d.map((e, t) => e.enabled && (0, o.jsx)(eo.A, {
                content: e.name,
                pageTooltipStyles: !0,
                children: (0, o.jsx)("div", {
                  className: i().badgeContainerFlex,
                  children: (0, o.jsx)("img", {
                    src: e.icon,
                    alt: "Custom Badge",
                    className: i().customBadge,
                    draggable: !1
                  })
                })
              }, t))
            })]
          });
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsx)("div", {
            ref: u,
            className: `${i().badgeContainer}${r?` ${r}`:""}`,
            "data-carousel-active": p ? "true" : void 0,
            "data-carousel-paused": p && h ? "true" : void 0,
            onMouseDown: S,
            onTouchEnd: () => {
              window.setTimeout(S, 0)
            },
            children: a ? (0, o.jsxs)("div", {
              className: n,
              children: [(0, o.jsx)("div", {
                ref: m,
                className: l,
                children: C
              }), p && (0, o.jsx)("div", {
                className: l,
                "aria-hidden": "true",
                children: C
              })]
            }) : C
          })
        })
      };
      var ea = r(52131),
        ei = r(98500),
        en = r.n(ei),
        el = r(28485),
        ec = r(37206),
        ed = r(38256),
        eu = r(99387),
        em = r(57776);
      let ep = (0, ec.default)(() => r.e(1045).then(r.bind(r, 31045)), {
          loadableGenerated: {
            webpack: () => [31045]
          },
          ssr: !1
        }),
        ef = ({
          copied: e,
          copy: t,
          content: r,
          children: s
        }) => (0, o.jsx)(eo.A, {
          content: e ? "Copied" : r,
          pageTooltipStyles: !0,
          children: (0, o.jsx)("span", {
            onClick: t,
            style: {
              display: "flex"
            },
            children: s
          })
        });

      function eh({
        socials: e,
        isMonochrome: t,
        iconColor: r,
        socialGlow: a,
        font: n,
        fontSize: l,
        username: c,
        ...d
      }) {
        let u = (0, ed.kj)(),
          m = ["eth", "ltc", "bitcoin", "monero", "solana", "xrp", "playstation"],
          [p, h] = (0, s.useState)(!1),
          [g, x] = (0, s.useState)({
            url: "",
            id: ""
          }),
          [v, y] = (0, s.useState)({
            url: "",
            id: ""
          }),
          [_, b] = (0, s.useState)(""),
          j = f({
            font: n,
            fontSize: l
          }),
          [w, S] = (0, s.useState)([]),
          C = u("custom_url" === _ ? "userpage.socials.modal.custom_url.title" : "userpage.socials.modal.onlyfans.title"),
          N = e.filter(e => !0 !== e.hidden);
        return (0, o.jsxs)(o.Fragment, {
          children: [(0, o.jsx)(em.A, {
            opened: p,
            onClose: () => h(!1),
            title: C,
            size: "470px",
            centered: !0,
            className: i().warningModal,
            children: "custom_url" === _ ? (0, o.jsxs)("div", {
              className: i().customUrlWarning,
              children: [(0, o.jsx)("h1", {
                style: j.customUrlHeading,
                children: u("userpage.socials.modal.custom_url.heading")
              }), (0, o.jsx)("span", {
                style: j.customUrlLink,
                children: g.url.replace("https://", "")
              }), (0, o.jsxs)("div", {
                className: i().modalButtons,
                children: [(0, o.jsx)(en(), {
                  prefetch: !1,
                  href: g.url,
                  target: "_blank",
                  onClick: e => {
                    h(!1), tR(c, g.id, "click", w.includes(g.id)), S([...w, g.id])
                  },
                  style: j.customUrlButtons,
                  children: u("userpage.socials.modal.actions.visit")
                }), (0, o.jsx)("button", {
                  onClick: () => h(!1),
                  style: j.customUrlButtons,
                  children: u("userpage.socials.modal.actions.cancel")
                })]
              })]
            }) : "onlyfans" === _ && (0, o.jsxs)("div", {
              className: i().customUrlWarning,
              children: [(0, o.jsx)("h1", {
                style: j.customUrlHeading,
                children: u("userpage.socials.modal.onlyfans.heading")
              }), (0, o.jsx)("span", {
                style: {
                  ...j.customUrlLink,
                  wordBreak: "break-word"
                },
                children: u("userpage.socials.modal.onlyfans.description")
              }), (0, o.jsxs)("div", {
                className: i().modalButtons,
                children: [(0, o.jsx)(en(), {
                  prefetch: !1,
                  href: v.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  onClick: () => {
                    h(!1), tR(c, v.id, "click", w.includes(v.id)), S([...w, v.id])
                  },
                  style: j.customUrlButtons,
                  children: u("userpage.socials.modal.actions.continue")
                }), (0, o.jsx)("button", {
                  onClick: () => h(!1),
                  style: j.customUrlButtons,
                  children: u("userpage.socials.modal.actions.cancel")
                })]
              })]
            })
          }), (0, o.jsx)("div", {
            className: i().userSocials,
            ...d,
            children: N.map((e, s) => {
              let n, l, d, u, p, f;
              return (0, o.jsxs)("div", {
                className: `${i().userSocial} ${i()[e.social]}`,
                children: [t ? t && (0, o.jsx)("style", {
                  children: `
                                    .${i()[e.social]} svg {
                                        color: ${r}!important;
                                        ${!1!==a?`filter: drop-shadow(${r} 1px 0 7px)!important;`:"filter: none!important"}
                                    }`
                }) : (0, o.jsx)("style", {
                  children: `
                                .${i()[e.social]} svg {
                                    ${!a&&"filter: none!important"}
                            }
                            `
                }), m.includes(e.social) ? (n = w.includes(e.id), (0, o.jsx)(eu.A, {
                  value: e.value,
                  children: ({
                    copied: r,
                    copy: s
                  }) => (0, o.jsx)(ef, {
                    copied: r,
                    copy: s,
                    content: "Copy Address",
                    children: (0, o.jsx)("span", {
                      onClick: t => {
                        tR(c, e.id, "click", n), S([...w, e.id])
                      },
                      style: {
                        display: "flex"
                      },
                      children: "monero" === e.social && t ? ea.A.moneroMonochrome : ea.A[e.social]
                    })
                  })
                })) : (l = ea.A[e.social.replace("custom_url", "customUrl")], d = e.mode ?? "link", u = el.V$[e.social], p = w.includes(e.id), f = (e => {
                  if ("custom_url" !== e.social || !1 === a || !e.icon) return;
                  let t = e.glow_color && "" !== e.glow_color.trim() ? e.glow_color : "#a3a3a3";
                  return {
                    filter: `drop-shadow(${t} 1px 0 7px)`
                  }
                })(e), (0, o.jsx)(o.Fragment, {
                  children: "link" === d ? "email" === e.social ? (0, o.jsx)(ep, {
                    encoded: e.value,
                    onClick: t => {
                      tR(c, e.id, "click", p), S([...w, e.id])
                    },
                    children: l
                  }) : (0, o.jsx)(en(), {
                    href: e.value,
                    target: "_blank",
                    onClick: t => ((e, t) => {
                      let {
                        social: r,
                        value: o,
                        id: s
                      } = t, a = w.includes(s);
                      if ("custom_url" === r || "onlyfans" === r) b(r), e.preventDefault(), h(!0), "custom_url" === r ? x({
                        url: o,
                        id: s
                      }) : y({
                        url: o,
                        id: s
                      });
                      else tR(c, s, "click", a), S(e => [...e, s])
                    })(t, e),
                    prefetch: !1,
                    children: "monero" === e.social && t ? ea.A.moneroMonochrome : "custom_url" === e.social && e.icon ? (0, o.jsx)("img", {
                      className: i().customIcon,
                      src: e.icon,
                      alt: "",
                      style: f
                    }) : l
                  }) : "text" === d && (0, o.jsx)(eu.A, {
                    value: "email" === e.social ? atob(e.value) : e.value,
                    children: ({
                      copied: r,
                      copy: s
                    }) => (0, o.jsx)(ef, {
                      copied: r,
                      copy: s,
                      content: `Copy ${u}`,
                      children: (0, o.jsx)("span", {
                        onClick: t => {
                          tR(c, e.id, "click", p), S([...w, e.id])
                        },
                        style: {
                          display: "flex"
                        },
                        children: "monero" === e.social && t ? ea.A.moneroMonochrome : "custom_url" === e.social && e.icon ? (0, o.jsx)("img", {
                          className: i().customIcon,
                          src: e.icon,
                          alt: "",
                          style: f
                        }) : l
                      })
                    })
                  })
                }))]
              }, s)
            })
          })]
        })
      }
      var eg = r(74564),
        ex = r(50703);

      function ev(e) {
        let t = e?.identity,
          r = t?.username || e?.username || t?.displayName || t?.globalName || null;
        return {
          avatar: t?.avatar || e?.avatar || null,
          avatarDecoration: t?.avatarDecoration || e?.avatarDecoration || null,
          username: t?.username || e?.username || null,
          globalName: t?.globalName || null,
          displayName: r,
          primaryGuild: t?.primaryGuild || e?.primaryGuild || null
        }
      }

      function ey(e) {
        if ("string" == typeof e) return e.trim();
        if ("number" == typeof e) return String(e);
        if (e && "object" == typeof e && "number" == typeof e.low && "number" == typeof e.high) {
          let t = BigInt(e.low >>> 0);
          return String((BigInt(e.high >>> 0) << BigInt(32)) + t)
        }
        return ""
      }

      function e_({
        presenceInformation: e,
        font: t,
        fontSize: r,
        description: a,
        discordUserBadges: n,
        discordData: l,
        discordPresenceSettings: c,
        loading: d
      }) {
        let u = {
            0: "Playing",
            1: "Streaming",
            2: "Listening to",
            3: "Watching",
            5: "Competing"
          },
          m = e.activities || [],
          [p, h] = (0, s.useState)(0),
          [g, x] = (0, s.useState)(null),
          [v, y] = (0, s.useState)(!1),
          _ = m[p] || m[0],
          b = f({
            font: t,
            fontSize: r
          }),
          j = _?.name === "Spotify",
          w = {
            display: _?.emoji?.startsWith("https://") && _?.type === 4 && !j && "flex",
            alignItems: _?.emoji?.startsWith("https://") && _?.type === 4 && !j && "flex-end"
          },
          S = ev(e),
          C = e.primaryGuild?.hasGuildTag ? e.primaryGuild : S.primaryGuild || {
            hasGuildTag: !1
          },
          N = S.avatar,
          k = S.displayName,
          P = e.status || "unknown",
          L = "unknown" === P ? "offline" : P,
          A = "not_in_guild" === e.unavailableReason;
        (0, s.useEffect)(() => {
          h(e => e >= m.length ? 0 : e), x(null), y(!1)
        }, [m.length]), (0, s.useEffect)(() => {
          if (m.length <= 1) return;
          let e = window.setInterval(() => {
            h(e => {
              let t = (e + 1) % m.length;
              return x(m[e] || m[0]), y(!0), t
            })
          }, 15e3);
          return () => window.clearInterval(e)
        }, [m.length, p]), (0, s.useEffect)(() => {
          if (!v) return;
          let e = window.setTimeout(() => {
            x(null), y(!1)
          }, 360);
          return () => window.clearTimeout(e)
        }, [v, p]);
        let T = e => {
            if (!e) return null;
            let t = "Spotify" === e.name,
              r = "string" == typeof e.emoji ? e.emoji : "";
            return t ? (0, o.jsxs)(o.Fragment, {
              children: [(0, o.jsxs)(ex.A, {
                children: [(0, o.jsx)("span", {
                  className: i().highlight,
                  children: u[e.type]
                }), " ", e.details]
              }), e.state && (0, o.jsx)(ex.A, {
                children: `by ${e.state.replace(/;/g,",")}`
              })]
            }) : 4 === e.type ? (0, o.jsxs)(ex.A, {
              contentClassName: r.startsWith("https://") ? i().discordEmojiText : void 0,
              children: [r.startsWith("https://") ? (0, o.jsx)("img", {
                src: r,
                alt: "Discord Emoji",
                className: i().discordEmoji
              }) : r && (0, o.jsx)("span", {
                className: i().defaultEmoji,
                children: r
              }), (0, o.jsx)("span", {
                children: e.state
              })]
            }) : (0, o.jsxs)(o.Fragment, {
              children: [(0, o.jsxs)(ex.A, {
                children: [(0, o.jsx)("span", {
                  className: i().highlight,
                  children: u[e.type]
                }), " ", e.name]
              }), (0, o.jsx)(ex.A, {
                children: e.details ? e.details : e.state
              })]
            })
          },
          $ = e => {
            if (!e || 4 === e.type || !e.image || "{}" === JSON.stringify(e.image)) return null;
            let t = "Spotify" === e.name ? `Listening to ${e.details}${e.state?` by ${e.state.replace(/;/g,",")}`:""}` : `${u[e.type]} ${e.name}`;
            return (0, o.jsx)(eo.A, {
              content: t,
              pageTooltipStyles: !0,
              children: (0, o.jsx)("img", {
                src: e.image,
                alt: ""
              })
            })
          };
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsx)("div", {
            className: i().discordPresenceContainer,
            style: {
              marginTop: "20px"
            },
            children: e.success && !A && _ && !d ? (0, o.jsxs)("div", {
              className: i().discordUserInformation,
              children: [(0, o.jsx)("div", {
                className: i().discordAvatar,
                children: (0, o.jsxs)("div", {
                  className: i().discordStatus,
                  children: [N && (0, o.jsx)("img", {
                    src: N,
                    alt: "Discord Avatar"
                  }), (0, o.jsx)("img", {
                    src: `https://assets.guns.lol/${L}.png`,
                    className: i().discordStatusIcon,
                    alt: ""
                  })]
                })
              }), (0, o.jsxs)("div", {
                className: i().discordActivity,
                children: [(0, o.jsxs)("div", {
                  className: i().discordUser,
                  children: [(0, o.jsxs)("div", {
                    className: i().discordUserDiv,
                    children: [k && (0, o.jsx)("span", {
                      style: b.discordUsername,
                      children: k
                    }), c.show_guild_tag && C?.hasGuildTag && (0, o.jsxs)("div", {
                      className: i().guildTag,
                      children: [(0, o.jsx)("img", {
                        src: C?.iconUrl,
                        alt: "Guild Tag Icon"
                      }), " ", (0, o.jsx)("span", {
                        children: C?.tag
                      })]
                    }), c.show_badges && (0, o.jsx)("div", {
                      className: i().discordUserBadges,
                      children: n.map((e, t) => (0, o.jsx)(eo.A, {
                        content: e,
                        pageTooltipStyles: !0,
                        children: (0, o.jsx)("div", {
                          className: i().discordBadge,
                          children: (0, o.jsx)("img", {
                            src: tU[e],
                            alt: "Discord Badge"
                          })
                        }, t)
                      }, t))
                    })]
                  }), (0, o.jsxs)("div", {
                    className: i().discordActivityTextStack,
                    children: [g && v && (0, o.jsx)("h3", {
                      className: `${i().discordActivityTextLayer} ${i().discordActivityExit}`,
                      style: b.discordStatus,
                      children: T(g)
                    }), (0, o.jsx)("h3", {
                      className: `${i().discordActivityTextLayer} ${v?i().discordActivityEnter:""}`,
                      style: b.discordStatus,
                      children: T(_)
                    }, `activity-text-${p}`)]
                  })]
                }), (0, o.jsx)("div", {
                  className: i().activityImage,
                  children: (0, o.jsxs)("div", {
                    className: i().discordActivityImageStack,
                    children: [g && v && (0, o.jsx)("span", {
                      className: `${i().discordActivityImageLayer} ${i().discordActivityExit}`,
                      children: $(g)
                    }), (0, o.jsx)("span", {
                      className: `${i().discordActivityImageLayer} ${v?i().discordActivityEnter:""}`,
                      children: $(_)
                    }, `activity-image-${p}`)]
                  })
                })]
              })]
            }) : !e.success || A || _ || d ? d ? (0, o.jsx)("div", {
              className: i().discordLoading,
              children: (0, o.jsxs)("h1", {
                children: [X.A.discord, " Loading Discord Presence..."]
              })
            }) : (0, o.jsxs)("div", {
              className: i().discordNotConnected,
              children: [(0, o.jsxs)("h1", {
                style: b.discordUsername,
                children: [X.A.userNotFound, " User Not found"]
              }), l || A ? (0, o.jsxs)("h3", {
                style: b.discordStatus,
                children: ["Join ", (0, o.jsx)(en(), {
                  href: "https://discord.gg/guns",
                  target: "_blank",
                  children: "discord.gg/guns"
                }), " to display your status"]
              }) : (0, o.jsxs)("h3", {
                style: b.discordStatus,
                children: ["Please ", (0, o.jsx)(en(), {
                  href: "https://guns.lol/account",
                  target: "_blank",
                  children: "connect"
                }), " your Discord account"]
              })]
            }) : (0, o.jsxs)("div", {
              className: i().discordUserInformation,
              children: [(0, o.jsx)("div", {
                className: i().discordAvatar,
                children: (0, o.jsxs)("div", {
                  className: i().discordStatus,
                  children: [N && (0, o.jsx)("img", {
                    src: N,
                    alt: "Discord Avatar"
                  }), (0, o.jsx)("img", {
                    src: `https://assets.guns.lol/${L}.png`,
                    className: i().discordStatusIcon,
                    alt: ""
                  })]
                })
              }), (0, o.jsxs)("div", {
                className: i().discordActivity,
                children: [(0, o.jsxs)("div", {
                  className: i().discordUser,
                  children: [(0, o.jsxs)("div", {
                    className: i().discordUserDiv,
                    children: [k && (0, o.jsx)("span", {
                      style: b.discordUsername,
                      children: k
                    }), c.show_guild_tag && C?.hasGuildTag && (0, o.jsxs)("div", {
                      className: i().guildTag,
                      children: [(0, o.jsx)("img", {
                        src: C?.iconUrl,
                        alt: "Guild Tag Icon"
                      }), " ", (0, o.jsx)("span", {
                        children: C?.tag
                      })]
                    }), c.show_badges && (0, o.jsx)("div", {
                      className: i().discordUserBadges,
                      children: n.map((e, t) => (0, o.jsx)(eo.A, {
                        content: e,
                        pageTooltipStyles: !0,
                        children: (0, o.jsx)("div", {
                          className: i().discordBadge,
                          children: (0, o.jsx)("img", {
                            src: tU[e],
                            alt: "Discord Badge"
                          })
                        }, t)
                      }, t))
                    })]
                  }), (0, o.jsx)("h3", {
                    style: {
                      ...b.discordStatus,
                      ...w
                    },
                    children: "offline" === P || "unknown" === P ? (0, o.jsxs)(ex.A, {
                      contentClassName: i().offlineText,
                      children: ["last seen ", e.lastSeen ? (0, eg.m)(new Date(1e3 * e.lastSeen)).replace("about ", "") + " ago" : "unknown"]
                    }) : (0, o.jsx)(ex.A, {
                      children: c.idle_text || "currently doing nothing"
                    })
                  })]
                }), (0, o.jsx)("div", {
                  className: i().activityImage
                })]
              })]
            })
          })
        })
      }

      function eb({
        challengeData: e
      }) {
        let t = e[2],
          r = e[3],
          s = e[1],
          a = e[0],
          i = `
        const workerScript = \`        
            import init, { GunsSolver } from 'https://assets.guns.lol/wasm/gpp_gunslol.js';
            self.onmessage = async function (event) {               
                const { _2xa, _org_ts, _n, d, o09 } = event.data;
                await init();
                const _get_s = new GunsSolver(o09, parseInt(d), _org_ts, _n, _2xa);
                const ts = Math.floor(Date.now() / 1000);
                const _tsoff = ts - Number(_org_ts);
                const tsp = ts - _tsoff;
                const _res = await _get_s.solve_pow();
                if (_res && _res._oo && _res.seal) {
                    self.postMessage({ _n, o09, _res, _2xa, tsp });
                }
            };
        \`;

        const blob = new Blob([workerScript], { type: "application/javascript" });
        const worker = new Worker(URL.createObjectURL(blob), { type: "module" });

        const _gs_sets = {
            _n: '${t}',
            _tsp: null,
            _p: '',
            _seal: '',
            __ps: '',
            o09: '${s}',
            _2xa: '${r}',
            __s: '3',
            _org_ts: "${a}",
        };

        worker.postMessage({
            _n: _gs_sets._n,
            d: 5,
            _2xa: _gs_sets._2xa,
            o09: _gs_sets.o09,
            _org_ts: _gs_sets._org_ts
        });

        worker.onmessage = async function (event) {
            const { _res, o09, tsp, _n, _2xa } = event.data;
            if (_res !== undefined) {
                await getResult(_res);
            }
        };
    `.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|[^:])\/\/.*$/gm, "$1").split("\n").map(e => e.trim()).filter(Boolean).join("").replace(/\s+/g, " ");
        return (0, o.jsx)(h.default, {
          strategy: "beforeInteractive",
          id: "_gpp_2pkvinebmmlb",
          children: i
        })
      }

      function ej(e, t) {
        return e.slice(0, t) + "0123456789abcdef" [16 * Math.random() | 0] + e.slice(t)
      }

      function ew({
        challengeData: e,
        username: t,
        premiumConfig: r,
        views: a,
        containerBorderRadius: n,
        hideCounter: l,
        isUnfold: c,
        animationStartClass: d,
        isTemplatePreview: u,
        inline: m = !1
      }) {
        let p = e[2],
          g = e[3],
          x = e[1],
          v = e[0],
          [y, _] = (0, s.useState)(!1),
          [b, j] = (0, s.useState)(""),
          [w, S] = (0, s.useState)({
            _oo: "",
            seal: ""
          }),
          C = f({
            font: r.font,
            fontSize: r.font_size
          }),
          N = !!n && n > 25 && .12 * n,
          k = !0 === r.suppress_views_tracking;
        async function P(e) {
          j(e)
        }
        async function L(e) {
          ! function(e, t, r) {
            var o;
            let s, a, [i, n] = Object.entries(r)[1],
              [l, c] = (a = 16 + ((o = e) + ((s = t || "0").charCodeAt(s.length - 1) || 48)) % 24, [o % 10, a]);
            r[i] = ej(ej(n, l), c)
          }(v, p, e), S(e), _(!0)
        }
        return (0, s.useEffect)(() => {
          Object.assign(window, {
            getToken: P,
            getResult: L
          });
          let e = setInterval(() => {
            y && "" !== b && !u && (fetch("https://guns.lol/api/analytics/record", {
              cache: "no-store",
              body: JSON.stringify({
                _t: b,
                _gpp_ch: [g, v, x, p, w.seal, w._oo],
                username: decodeURIComponent(t),
                deviceType: tF(),
                event: "view",
                linkId: null,
                referrer: document.referrer
              }),
              method: "POST"
            }), clearInterval(e))
          }, 200)
        }, [y, b, w]), (0, o.jsxs)(o.Fragment, {
          children: [!k && (0, o.jsx)(eb, {
            challengeData: e
          }), !k && (0, o.jsx)(h.default, {
            strategy: "afterInteractive",
            src: "https://challenges.cloudflare.com/turnstile/v0/api.js",
            id: "_turnstile"
          }), !k && (0, o.jsx)("div", {
            className: "cf-turnstile",
            style: {
              display: "none"
            },
            "data-sitekey": "0x4AAAAAAAgU7T2niLQD-TLm",
            "data-callback": "getToken"
          }), !r.hide_views && !l && (0, o.jsx)("div", {
            className: `${i().profileViews} ${m?i().profileViewsInline:""} ${c&&d}`,
            style: m ? void 0 : {
              bottom: N ? 12 + N : 12,
              left: N ? 15 + N : 15
            },
            children: (0, o.jsx)(eo.A, {
              content: "Profile Views",
              pageTooltipStyles: !0,
              children: (0, o.jsxs)("span", {
                style: C.profileViewsCount,
                children: [X.A.profileViews, " ", a.toLocaleString("en-US")]
              })
            })
          })]
        })
      }
      var eS = r(61861);

      function eC({
        userData: e,
        config: t,
        premiumConfig: r,
        presenceInformation: s,
        animationStartClass: a,
        isTemplatePreview: n,
        discordLoading: l
      }) {
        let c = f({
            font: r.font,
            fontSize: r.font_size
          }),
          d = ev(s),
          u = d.avatar || "",
          m = t.use_discord_avatar && u ? u : t.avatar,
          p = "" !== t.display_name ? t.display_name : e.username,
          h = t.user_badges,
          g = e.discord?.user_badges ? h.includes("server_booster") || h.find(e => "server_booster" === e.name) ? [...e.discord.user_badges, "Server Booster"] : e.discord.user_badges : [],
          x = d.avatarDecoration || "",
          v = t.custom_badges,
          y = h.length > 0 && h[0] && "string" == typeof h[0],
          _ = v.length > 0 && "string" == typeof v[0][0],
          b = h.length > 0 && y || !y && h.some(e => !0 === e.enabled),
          j = v.length > 0 && _ || !_ && v.some(e => !0 === e.enabled),
          w = a === i().unfoldStart,
          S = r.typewriter_speed ?? 5,
          C = r.typewriter_delete_speed ?? 7,
          N = !!(t.discord_avatar_decoration && x),
          k = t.username_effects,
          P = t.text_color,
          L = r.links_position ?? "center",
          A = !!("" !== t.avatar || t.use_discord_avatar && u),
          T = t.discord_presence_settings || {
            show_badges: !0,
            show_guild_tag: !0,
            idle_text: ""
          };
        return (0, o.jsxs)(o.Fragment, {
          children: [(0, o.jsxs)("div", {
            className: K().userInformation,
            children: ["" !== r.banner && (0, o.jsx)("img", {
              src: r.banner,
              alt: "",
              className: K().banner
            }), A ? (0, o.jsxs)("div", {
              className: i().avatarWrapper,
              children: [N && (0, o.jsx)("img", {
                src: x,
                alt: "",
                className: i().avatarDecorationLayout1,
                style: {
                  top: "" !== r.banner ? "21%" : "-7%"
                }
              }), (0, o.jsx)("img", {
                src: m,
                alt: "",
                className: `${K().avatar} ${""!==r.banner&&K().adjustBanner}`
              })]
            }) : (0, o.jsx)("div", {
              style: {
                marginTop: "" !== r.banner ? "135px" : ""
              }
            }), (0, o.jsxs)("div", {
              className: `${K().userDescription} ${w&&a}`,
              children: [(0, o.jsx)(eo.A, {
                content: `UID ${e.uid.toLocaleString("en-US")}`,
                offset: 0,
                pageTooltipStyles: !0,
                children: "typewriter" === t.username_effects ? (0, o.jsxs)(o.Fragment, {
                  children: [(0, o.jsx)("style", {
                    children: `
                                        .username-typewriter .Typewriter {
                                            font-size: ${c.username.fontSize};
                                            font-weight: ${c.username.fontWeight};
                                        }
                                    `
                  }), (0, o.jsx)("div", {
                    className: "username-typewriter",
                    children: (0, o.jsx)(et(), {
                      options: {
                        strings: [p],
                        autoStart: !0,
                        loop: !0,
                        wrapperClassName: K().userDescriptionUsername,
                        cursorClassName: K().usernameCursor,
                        pauseFor: 1e3,
                        stringSplitter: tW
                      }
                    })
                  })]
                }) : "fuzzy" === k || "shuffle" === k ? (0, o.jsx)(eS.A, {
                  username: p,
                  usernameEffect: k,
                  fontSize: c.username.fontSize,
                  textColor: P,
                  marginBottom: "7px"
                }) : (0, o.jsx)("h1", {
                  className: `${K().userDescriptionUsername} ${"rgb"===t.username_effects&&i().rainbowName}`,
                  style: c.username,
                  children: p
                })
              }), !(!b && !j) && (0, o.jsx)("div", {
                className: K().badgeContainerWrapper,
                children: (0, o.jsx)(es, {
                  config: t,
                  premiumConfig: r
                })
              }), ("" !== t.description || 0 !== r.typewriter.length) && (0, o.jsx)("h3", {
                className: K().userDescriptionText,
                style: c.description,
                children: r.typewriter_enabled && 0 !== r.typewriter.length ? (0, o.jsx)(et(), {
                  options: {
                    strings: r.typewriter,
                    autoStart: !0,
                    loop: !0,
                    delay: 600 / S,
                    deleteSpeed: 600 / C,
                    pauseFor: 900,
                    stringSplitter: tW
                  }
                }) : t.description
              }), t.location && (0, o.jsx)(eo.A, {
                content: "Location",
                pageTooltipStyles: !0,
                offset: -10,
                children: (0, o.jsxs)("span", {
                  className: i().locationMarker,
                  style: c.locationMarker,
                  children: [X.A.locationMarker, " ", t.location]
                })
              })]
            }), "enabled" === t.presence && (0, o.jsx)("div", {
              className: `${i().discordPresenceWrapper} ${w&&a}`,
              children: (0, o.jsx)(e_, {
                loading: l,
                presenceInformation: s,
                font: r.font,
                description: t.description,
                discordUserBadges: g,
                discordData: e.discord,
                fontSize: r.font_size,
                discordPresenceSettings: T
              })
            }), t.socials.length > 0 && (0, o.jsx)("div", {
              className: `${K().socialsWrapper} ${w&&a}`,
              style: {
                width: "100%"
              },
              children: (0, o.jsx)(eh, {
                socials: t.socials,
                isMonochrome: t.monochrome,
                font: r.font,
                socialGlow: t.social_glow,
                iconColor: t.icon_color,
                username: e.username,
                fontSize: r.font_size,
                style: {
                  justifyContent: "left" === L ? "flex-start" : "right" === L ? "flex-end" : "center"
                }
              })
            })]
          }), (0, o.jsx)(ew, {
            challengeData: e._gpp_ch,
            username: e.username,
            premiumConfig: r,
            views: t.page_views,
            containerBorderRadius: r.border_radius,
            isUnfold: w,
            animationStartClass: a,
            isTemplatePreview: n
          })]
        })
      }
      var eN = r(50786),
        ek = r.n(eN);
      let eP = ({
        spotifyUrl: e
      }) => {
        let t = (e => {
          let t = e.match(/\/(?:intl-[a-zA-Z]+\/)?([a-zA-Z]+)\/([a-zA-Z0-9]+)/);
          if (t && 3 === t.length) {
            let [e, r] = [t[1], t[2]];
            return {
              type: e,
              code: r
            }
          }
          return null
        })(e);
        if (t) {
          let {
            type: e,
            code: r
          } = t;
          return (0, o.jsx)("iframe", {
            src: `https://open.spotify.com/embed/${e}/${r}`,
            height: 80,
            width: "100%",
            frameBorder: "0",
            style: {
              borderRadius: "15px"
            },
            allow: "encrypted-media"
          })
        }
        return (0, o.jsx)("p", {
          children: "Invalid Spotify URL"
        })
      };

      function eL({
        date: e,
        tz: t,
        faceStyle: r
      }) {
        let {
          h: s,
          m: a,
          s: i
        } = (() => {
          try {
            let r = new Intl.DateTimeFormat("en-US", {
                timeZone: t,
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: !1
              }).formatToParts(e),
              o = e => parseInt(r.find(t => t.type === e)?.value ?? "0");
            return {
              h: o("hour") % 24,
              m: o("minute"),
              s: o("second")
            }
          } catch {
            return {
              h: 0,
              m: 0,
              s: 0
            }
          }
        })(), n = "dark" === r, l = n ? "#f0f0f0" : "#111111", c = n ? "#f04040" : "#cc2020", d = n ? "#555555" : "#999999", u = n ? "#2e2e2e" : "#cccccc", m = e => Number(e.toFixed(4)), p = (e, t) => {
          let r = Math.PI / 180 * (e - 90);
          return {
            x: m(35 + t * Math.cos(r)),
            y: m(35 + t * Math.sin(r))
          }
        };
        return (0, o.jsxs)("svg", {
          width: "70",
          height: "70",
          viewBox: "0 0 70 70",
          style: {
            flexShrink: 0
          },
          children: [(0, o.jsx)("circle", {
            cx: "35",
            cy: "35",
            r: "33",
            fill: n ? "#141414" : "#f0f0f0",
            stroke: n ? "#303030" : "#c0c0c0",
            strokeWidth: "1.5"
          }), [...Array(60)].map((e, t) => {
            let r = t / 60 * 360,
              s = t % 5 == 0,
              a = p(r, 30),
              i = p(r, s ? 23 : 27);
            return (0, o.jsx)("line", {
              x1: i.x,
              y1: i.y,
              x2: a.x,
              y2: a.y,
              stroke: s ? d : u,
              strokeWidth: s ? 2 : 1,
              strokeLinecap: "round"
            }, t)
          }), (0, o.jsxs)("g", {
            className: ek().clockHand,
            style: {
              transform: `rotate(${s%12/12*360+a/60*30}deg)`,
              transition: "transform 0.4s ease"
            },
            children: [(0, o.jsx)("line", {
              x1: "35",
              y1: "35",
              x2: "35",
              y2: "16",
              stroke: l,
              strokeWidth: "3.5",
              strokeLinecap: "round"
            }), (0, o.jsx)("line", {
              x1: "35",
              y1: "35",
              x2: "35",
              y2: "41",
              stroke: l,
              strokeWidth: "3.5",
              strokeLinecap: "round"
            })]
          }), (0, o.jsxs)("g", {
            className: ek().clockHand,
            style: {
              transform: `rotate(${a/60*360+i/60*6}deg)`,
              transition: "transform 0.3s ease"
            },
            children: [(0, o.jsx)("line", {
              x1: "35",
              y1: "35",
              x2: "35",
              y2: "9",
              stroke: l,
              strokeWidth: "2.2",
              strokeLinecap: "round"
            }), (0, o.jsx)("line", {
              x1: "35",
              y1: "35",
              x2: "35",
              y2: "42",
              stroke: l,
              strokeWidth: "2.2",
              strokeLinecap: "round"
            })]
          }), (0, o.jsxs)("g", {
            className: ek().clockHand,
            style: {
              transform: `rotate(${i/60*360}deg)`,
              transition: 0 === i ? "none" : "transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)"
            },
            children: [(0, o.jsx)("line", {
              x1: "35",
              y1: "35",
              x2: "35",
              y2: "7",
              stroke: c,
              strokeWidth: "1.3",
              strokeLinecap: "round"
            }), (0, o.jsx)("line", {
              x1: "35",
              y1: "35",
              x2: "35",
              y2: "44",
              stroke: c,
              strokeWidth: "1.3",
              strokeLinecap: "round"
            })]
          }), (0, o.jsx)("circle", {
            cx: "35",
            cy: "35",
            r: "3",
            fill: c
          }), (0, o.jsx)("circle", {
            cx: "35",
            cy: "35",
            r: "1.5",
            fill: l
          })]
        })
      }

      function eA({
        config: e,
        premiumConfig: t
      }) {
        var r, a, i;
        let n, l, c, d, u, m, p = f({
            font: t.font,
            fontSize: t.font_size
          }),
          [h, g] = (0, s.useState)({}),
          [x, v] = (0, s.useState)({}),
          [y, _] = (0, s.useState)({}),
          [b, j] = (0, s.useState)({}),
          [w, S] = (0, s.useState)({}),
          [C, N] = (0, s.useState)({}),
          [k, P] = (0, s.useState)(!0),
          [L, A] = (0, s.useState)(null),
          [T, $] = (0, s.useState)(null),
          E = (0, s.useRef)(null),
          z = Object.keys(t.second_tab)[0],
          I = !!t.second_tab_enabled && "enabled" !== e.presence,
          B = async () => {
            try {
              let e = `https://discord.com/api/v9/invites/${O(t.second_tab.discord)}?with_counts=true`,
                r = await fetch(e);
              if (!r.ok) {
                g({
                  error: !0,
                  approximate_member_count: "0",
                  approximate_presence_count: "0",
                  guild: {
                    name: 404 === r.status ? "Not Found" : "Unknown Error"
                  },
                  isVerified: !1,
                  isPartnered: !1
                }), P(!1);
                return
              }
              let o = await r.json(),
                s = o.guild.features.includes("VERIFIED"),
                a = o.guild.features.includes("PARTNERED");
              g({
                ...o,
                isVerified: s,
                isPartnered: a
              })
            } catch (e) {
              g({
                error: !0,
                approximate_member_count: "0",
                approximate_presence_count: "0",
                guild: {
                  name: "Unknown Error"
                },
                isVerified: !1,
                isPartnered: !1
              })
            } finally {
              P(!1)
            }
          }, M = async () => {
            let e = H(t.second_tab.github),
              r = await fetch(`https://api.github.com/users/${e}`);
            if (!r.ok) {
              v({
                error: !0
              }), P(!1);
              return
            }
            let o = await r.json();
            v({
              avatarUrl: o.avatar_url,
              username: o.login,
              followers: o.followers,
              repositories: o.public_repos,
              error: !1
            }), P(!1)
          }, W = async () => {
            let e = G(t.second_tab.telegram),
              r = await fetch("https://guns.lol/api/service/telegram", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  chatId: e
                })
              }),
              o = await r.json();
            if (!r.ok) {
              _({
                error: !0
              }), P(!1);
              return
            }
            _({
              avatar: o.avatar,
              name: o.name,
              members: o.members,
              error: !1
            }), P(!1)
          }, D = async () => {
            let e = V(t.second_tab.youtube),
              r = await fetch("https://guns.lol/api/service/youtube", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  channelId: e
                })
              }),
              o = await r.json();
            if (!r.ok) {
              S({
                error: !0
              }), P(!1);
              return
            }
            S({
              avatar: o.avatar,
              handle: o.handle,
              subscribers: o.subscribers,
              channelId: o.channelId,
              error: !1
            }), P(!1)
          }, F = async () => {
            let e = U(t.second_tab.roblox),
              r = await fetch("https://guns.lol/api/service/roblox", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  userId: e
                })
              }),
              o = await r.json();
            if (!r.ok) {
              j({
                error: !0
              }), P(!1);
              return
            }
            j({
              username: o.username,
              avatarUrl: o.avatar,
              friends: o.friends,
              followers: o.followers,
              error: !1
            }), P(!1)
          }, R = async () => {
            let e = q(t.second_tab.lastfm),
              r = await fetch("https://guns.lol/api/service/lastfm", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  username: e
                })
              });
            if (!r.ok) {
              N({
                error: !0
              }), P(!1);
              return
            }
            let o = await r.json();
            N({
              avatarUrl: o.avatar,
              username: o.username,
              artistCount: o.artist_count,
              playcount: o.playcount,
              error: !1
            }), P(!1)
          }, U = e => {
            let t = e.match(/(?:roblox\.com\/users\/)([a-zA-Z0-9-]+)/);
            return t ? t[1] : ""
          }, O = e => {
            let t = e.match(/(?:discord\.gg\/|discord\.com\/invite\/|discordapp\.com\/invite\/)([a-zA-Z0-9-]+)/);
            return t ? t[1] : ""
          }, H = e => {
            let t = e.match(/(?:github\.com\/)([a-zA-Z0-9-]+)/);
            return t ? t[1] : ""
          }, G = e => {
            let t = e.match(/(?:t\.me\/)([a-zA-Z0-9-]+)/);
            return t ? t[1] : ""
          }, V = e => {
            let t = e.match(/(?:youtube\.com\/(?:channel\/|user\/|c\/|@))([^/?]+)/);
            return t ? t[1] : ""
          }, q = e => {
            let t = e.match(/(?:last\.fm\/user\/)([a-zA-Z0-9_-]+)/);
            return t ? t[1] : ""
          }, Y = (e, t) => {
            let r = new Date(t.toLocaleString("en-US", {
              timeZone: "UTC"
            })).getTime();
            return Math.round((new Date(t.toLocaleString("en-US", {
              timeZone: e
            })).getTime() - r) / 6e4)
          };
        (0, s.useEffect)(() => {
          t.second_tab.discord && B(), t.second_tab.github && M(), t.second_tab.telegram && W(), t.second_tab.roblox && F(), t.second_tab.youtube && D(), t.second_tab.lastfm && R()
        }, [t.second_tab.discord, t.second_tab.github, t.second_tab.telegram, t.second_tab.roblox, t.second_tab.youtube, t.second_tab.lastfm]), (0, s.useEffect)(() => {
          if (t.second_tab.timezone) {
            try {
              let e = t.second_tab.timezone,
                r = Intl.DateTimeFormat().resolvedOptions().timeZone,
                o = new Date;
              A(o);
              let s = Y(e, o),
                a = Y(r, o),
                i = o.toLocaleTimeString("en-US", {
                  timeZone: r,
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: !1
                });
              $({
                diffMinutes: s - a,
                visitorTime: i
              })
            } catch {}
            return E.current = setInterval(() => A(new Date), 1e3), () => {
              E.current && clearInterval(E.current)
            }
          }
        }, [t.second_tab.timezone]);
        let Z = {
          discord: X.A.discord,
          spotify: X.A.spotify,
          github: X.A.github,
          telegram: X.A.telegram,
          roblox: X.A.roblox,
          youtube: X.A.youtube,
          lastfm: X.A.lastfm,
          timezone: (0, o.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: (0, o.jsx)("path", {
              d: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8m.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67Z"
            })
          })
        };
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsx)("div", {
            className: ek().secondTab,
            children: !k || t.second_tab.spotify || t.second_tab.timezone ? t.second_tab.discord ? (0, o.jsxs)("div", {
              className: ek().discordServer,
              children: [(0, o.jsxs)("div", {
                className: ek().discordInformationWrapper,
                children: [(0, o.jsx)("div", {
                  className: ek().guildIcon,
                  children: h?.guild?.icon ? (0, o.jsx)("img", {
                    src: `https://cdn.discordapp.com/icons/${h.guild.id}/${h.guild.icon}.png`,
                    alt: ""
                  }) : (0, o.jsx)("div", {
                    className: ek().missingIcon,
                    children: (0, o.jsx)("h1", {
                      children: h.error ? "!" : h.guild?.name.charAt(0)
                    })
                  })
                }), (0, o.jsxs)("div", {
                  className: ek().guildInformation,
                  children: [(0, o.jsxs)("h1", {
                    style: p.serverName,
                    children: [h.guild?.name, " ", h.isVerified ? X.A.verifiedGuild : h.isPartnered ? X.A.partneredGuild : ""]
                  }), (0, o.jsxs)("h3", {
                    style: p.memberCount,
                    children: [(0, o.jsxs)("span", {
                      children: [X.A.status, " ", h.approximate_presence_count?.toLocaleString("en-US"), " Online"]
                    }), (0, o.jsxs)("span", {
                      children: [X.A.status, " ", h.approximate_member_count?.toLocaleString("en-US"), " Members"]
                    })]
                  }), !I && (0, o.jsx)(en(), {
                    href: `https://discord.gg/${!h.error?O(t.second_tab.discord):""}`,
                    target: "_blank",
                    style: p.joinButton,
                    children: "Join"
                  })]
                })]
              }), I ? (0, o.jsx)(en(), {
                href: `https://discord.gg/${!h.error?O(t.second_tab.discord):""}`,
                className: ek().joinButtonLarge,
                target: "_blank",
                style: p.joinButtonLarge,
                children: "Join"
              }) : (0, o.jsx)("div", {
                className: ek().widgetPlaceholder
              }), (0, o.jsxs)("span", {
                className: ek().platform,
                children: [X.A.discord, " Discord"]
              })]
            }) : t.second_tab.spotify ? (0, o.jsx)(eP, {
              spotifyUrl: t.second_tab.spotify
            }) : t.second_tab.github ? (0, o.jsxs)("div", {
              className: ek().githubWidget,
              children: [(0, o.jsxs)("div", {
                className: ek().githubInformationWrapper,
                children: [(0, o.jsx)("div", {
                  className: ek().githubIcon,
                  children: x.error ? (0, o.jsx)("h1", {
                    className: ek().missingIcon,
                    children: "!"
                  }) : (0, o.jsx)("img", {
                    src: x.avatarUrl,
                    alt: "GitHub Avatar"
                  })
                }), (0, o.jsxs)("div", {
                  className: ek().githubInformation,
                  children: [x.error ? (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("h1", {
                      style: p.secondTabWidgetHeading,
                      children: "Unknown"
                    }), (0, o.jsx)("h3", {
                      style: p.secondTabWidgetDescription,
                      children: (0, o.jsx)("span", {
                        children: "User not found."
                      })
                    })]
                  }) : (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("h1", {
                      style: p.secondTabWidgetHeading,
                      children: x.username
                    }), (0, o.jsxs)("h3", {
                      style: p.secondTabWidgetDescription,
                      children: [(0, o.jsxs)("span", {
                        children: [X.A.followers, " ", x.followers?.toLocaleString("en-US"), " Followers"]
                      }), (0, o.jsxs)("span", {
                        children: [X.A.repositories, " ", x.repositories?.toLocaleString("en-US"), " Repos"]
                      })]
                    })]
                  }), (0, o.jsx)(en(), {
                    href: `https://github.com/${x.username}`,
                    target: "_blank",
                    style: p.secondTabWidgetButton,
                    children: "View Profile"
                  })]
                })]
              }), (0, o.jsxs)("span", {
                className: ek().platform,
                children: [X.A.github, " GitHub"]
              })]
            }) : t.second_tab.roblox ? (0, o.jsxs)("div", {
              className: ek().robloxWidget,
              children: [(0, o.jsxs)("div", {
                className: ek().robloxInformationWrapper,
                children: [(0, o.jsx)("div", {
                  className: ek().robloxIcon,
                  children: b.error ? (0, o.jsx)("h1", {
                    className: ek().missingIcon,
                    children: "!"
                  }) : (0, o.jsx)("img", {
                    src: b.avatarUrl,
                    alt: "Roblox Avatar"
                  })
                }), (0, o.jsxs)("div", {
                  className: ek().robloxInformation,
                  children: [b.error ? (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("h1", {
                      style: p.secondTabWidgetHeading,
                      children: "Unknown"
                    }), (0, o.jsx)("h3", {
                      style: p.secondTabWidgetDescription,
                      children: (0, o.jsx)("span", {
                        children: "Could not fetch Roblox profile."
                      })
                    })]
                  }) : (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("h1", {
                      style: p.secondTabWidgetHeading,
                      children: b.username
                    }), (0, o.jsxs)("h3", {
                      style: p.secondTabWidgetDescription,
                      children: [(0, o.jsxs)("span", {
                        children: [X.A.friends, " ", b.friends?.toLocaleString("en-US"), " Friends"]
                      }), (0, o.jsxs)("span", {
                        children: [X.A.followers, " ", b.followers?.toLocaleString("en-US"), " Followers"]
                      })]
                    })]
                  }), (0, o.jsx)(en(), {
                    href: `https://roblox.com/users/${U(t.second_tab.roblox)}/profile`,
                    target: "_blank",
                    style: p.secondTabWidgetButton,
                    children: "View Profile"
                  })]
                })]
              }), (0, o.jsxs)("span", {
                className: ek().platform,
                children: [X.A.roblox, " Roblox"]
              })]
            }) : t.second_tab.telegram ? (0, o.jsxs)("div", {
              className: ek().telegramWidget,
              children: [(0, o.jsxs)("div", {
                className: ek().telegramInformationWrapper,
                children: [(0, o.jsx)("div", {
                  className: ek().telegramIcon,
                  children: y.error ? (0, o.jsx)("h1", {
                    className: ek().missingIcon,
                    children: "!"
                  }) : y.avatar ? (0, o.jsx)("img", {
                    src: y.avatar,
                    alt: "Telegram Avatar"
                  }) : (0, o.jsx)("h1", {
                    className: ek().missingIcon,
                    children: y.name && y.name[0]
                  })
                }), (0, o.jsxs)("div", {
                  className: ek().telegramInformation,
                  children: [y.error ? (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("h1", {
                      style: p.secondTabWidgetHeading,
                      children: "Unknown"
                    }), (0, o.jsx)("h3", {
                      style: p.secondTabWidgetDescription,
                      children: (0, o.jsx)("span", {
                        children: "Channel not found."
                      })
                    })]
                  }) : (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("h1", {
                      style: p.secondTabWidgetHeading,
                      children: y.name
                    }), (0, o.jsx)("h3", {
                      style: p.secondTabWidgetDescription,
                      children: (0, o.jsxs)("span", {
                        children: [X.A.followers, " ", y.members?.toLocaleString("en-US"), " Subscribers"]
                      })
                    })]
                  }), (0, o.jsx)(en(), {
                    href: `https://t.me/${G(t.second_tab.telegram)}`,
                    target: "_blank",
                    style: p.secondTabWidgetButton,
                    children: "Join"
                  })]
                })]
              }), (0, o.jsxs)("span", {
                className: ek().platform,
                children: [X.A.telegram, " Telegram"]
              })]
            }) : t.second_tab.youtube ? (0, o.jsxs)("div", {
              className: ek().youtubeWidget,
              children: [(0, o.jsxs)("div", {
                className: ek().youtubeInformationWrapper,
                children: [(0, o.jsx)("div", {
                  className: ek().youtubeIcon,
                  children: w.error ? (0, o.jsx)("h1", {
                    className: ek().missingIcon,
                    children: "!"
                  }) : (0, o.jsx)("img", {
                    src: w.avatar,
                    alt: "YouTube Avatar"
                  })
                }), (0, o.jsxs)("div", {
                  className: ek().youtubeInformation,
                  children: [w.error ? (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("h1", {
                      style: p.secondTabWidgetHeading,
                      children: "Unknown"
                    }), (0, o.jsx)("h3", {
                      style: p.secondTabWidgetDescription,
                      children: (0, o.jsx)("span", {
                        children: "Channel not found."
                      })
                    })]
                  }) : (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("h1", {
                      style: p.secondTabWidgetHeading,
                      children: w.handle
                    }), (0, o.jsx)("h3", {
                      style: p.secondTabWidgetDescription,
                      children: (0, o.jsxs)("span", {
                        children: [X.A.followers, " ", (r = w.subscribers) >= 1e6 ? (r / 1e6).toFixed(1) + "M" : r >= 1e3 ? (r / 1e3).toFixed(1) + "K" : r, " Subscribers"]
                      })
                    })]
                  }), (0, o.jsx)(en(), {
                    href: `https://youtube.com/channel/${w.channelId}`,
                    target: "_blank",
                    style: p.secondTabWidgetButton,
                    children: "View Channel"
                  })]
                })]
              }), (0, o.jsxs)("span", {
                className: ek().platform,
                children: [X.A.youtube, " YouTube"]
              })]
            }) : t.second_tab.lastfm ? (0, o.jsxs)("div", {
              className: ek().lastFMWidget,
              children: [(0, o.jsxs)("div", {
                className: ek().lastFMInformationWrapper,
                children: [(0, o.jsx)("div", {
                  className: ek().lastFMIcon,
                  children: C.error ? (0, o.jsx)("h1", {
                    className: ek().missingIcon,
                    children: "!"
                  }) : (0, o.jsx)("img", {
                    src: C.avatarUrl,
                    alt: "Last.fm Avatar"
                  })
                }), (0, o.jsxs)("div", {
                  className: ek().lastFMInformation,
                  children: [C.error ? (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("h1", {
                      style: p.secondTabWidgetHeading,
                      children: "Unknown"
                    }), (0, o.jsx)("h3", {
                      style: p.secondTabWidgetDescription,
                      children: (0, o.jsx)("span", {
                        children: "User not found."
                      })
                    })]
                  }) : (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("h1", {
                      style: p.secondTabWidgetHeading,
                      children: C.username
                    }), (0, o.jsxs)("h3", {
                      style: p.secondTabWidgetDescription,
                      children: [(0, o.jsxs)("span", {
                        children: [X.A.playCount, " ", Number(C.playcount)?.toLocaleString("en-US"), " Scrobbles"]
                      }), (0, o.jsxs)("span", {
                        children: [X.A.artistCount, " ", Number(C.artistCount)?.toLocaleString("en-US"), " Artists"]
                      })]
                    })]
                  }), (0, o.jsx)(en(), {
                    href: `https://last.fm/user/${q(t.second_tab.lastfm)}`,
                    target: "_blank",
                    style: p.secondTabWidgetButton,
                    children: "View Profile"
                  })]
                })]
              }), (0, o.jsxs)("span", {
                className: ek().platform,
                children: [X.A.lastfm, " Last.fm"]
              })]
            }) : t.second_tab.timezone && (0, o.jsxs)("div", {
              className: ek().timezoneWidget,
              children: [!t.clock_hidden && (0, o.jsx)(eo.A, {
                content: t.second_tab.timezone.replace(/_/g, " "),
                placement: "top",
                pageTooltipStyles: !0,
                children: (0, o.jsx)("div", {
                  className: ek().timezoneClockWrapper,
                  children: (0, o.jsx)(eL, {
                    date: L ?? new Date(0),
                    tz: t.second_tab.timezone,
                    faceStyle: t.clock_face_style ?? "dark"
                  })
                })
              }), (0, o.jsxs)("div", {
                className: ek().timezoneInfo,
                children: [(0, o.jsx)("h1", {
                  className: ek().timezoneDigital,
                  style: p.secondTabWidgetHeading,
                  children: (() => {
                    let e;
                    if (!L) return "--:--:--";
                    let r = "12h" === t.clock_time_format,
                      s = (e = t.second_tab.timezone, L.toLocaleTimeString("en-US", {
                        timeZone: e,
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: r
                      }));
                    if (!r) return s;
                    let a = s.match(/^([\d:]+)\s*(AM|PM)$/i);
                    return a ? (0, o.jsxs)(o.Fragment, {
                      children: [a[1], (0, o.jsx)("span", {
                        className: ek().timezoneAmPm,
                        children: a[2]
                      })]
                    }) : s
                  })()
                }), (0, o.jsxs)("h3", {
                  className: ek().timezoneMeta,
                  children: [(0, o.jsx)("span", {
                    children: L ? (n = t.second_tab.timezone, L.toLocaleDateString("en-US", {
                      timeZone: n,
                      weekday: "short",
                      month: "short",
                      day: "numeric"
                    })) : "---"
                  }), (0, o.jsx)("span", {
                    className: ek().timezoneSeparator,
                    children: "\xb7"
                  }), (0, o.jsx)("span", {
                    children: L ? (a = t.second_tab.timezone, l = new Intl.DateTimeFormat("en-US", {
                      timeZone: a,
                      timeZoneName: "short"
                    }).formatToParts(L), l.find(e => "timeZoneName" === e.type)?.value ?? a) : "--"
                  })]
                }), null !== T && (0, o.jsx)("div", {
                  className: ek().timezoneVisitor,
                  children: 0 === T.diffMinutes ? (0, o.jsx)("span", {
                    children: "Same timezone as you"
                  }) : (0, o.jsxs)("span", {
                    children: ["Your time: ", T.visitorTime, " (", (c = Math.abs(i = T.diffMinutes), d = i >= 0 ? "+" : "-", u = Math.floor(c / 60), 0 == (m = c % 60) ? `${d}${u}h` : 0 === u ? `${d}${m}m` : `${d}${u}h ${m}m`), ")"]
                  })
                })]
              }), (0, o.jsxs)("span", {
                className: ek().platform,
                children: [Z.timezone, " Timezone"]
              })]
            }) : (0, o.jsxs)("h1", {
              className: ek().loadingText,
              children: [Z[z], " Loading Widget..."]
            })
          })
        })
      }

      function eT({
        userData: e,
        config: t,
        premiumConfig: r,
        presenceInformation: s,
        animationStartClass: a,
        isTemplatePreview: n,
        discordLoading: l
      }) {
        let c = f({
            font: r.font,
            fontSize: r.font_size
          }),
          d = ev(s),
          u = d.avatarDecoration || "",
          m = d.avatar || "",
          p = t.use_discord_avatar && m ? m : t.avatar,
          h = e.account_created,
          g = r.join_date ?? "relative",
          x = r.second_tab_enabled && "enabled" !== t.presence ? {
            display: "inherit!important"
          } : {},
          v = "" !== t.display_name ? t.display_name : e.username,
          y = e.discord?.user_badges ? t.user_badges.includes("server_booster") || t.user_badges.find(e => "server_booster" === e.name) ? [...e.discord.user_badges, "Server Booster"] : e.discord.user_badges : [],
          _ = `
                    .${ek().widgetContainerWrapper} { 
                        margin-top: 27px;
                    } 
                    `,
          b = t.user_badges,
          j = t.custom_badges,
          w = b.length > 0 && b[0] && "string" == typeof b[0],
          S = j.length > 0 && "string" == typeof j[0][0],
          C = b.length > 0 && w || !w && b.some(e => !0 === e.enabled),
          N = j.length > 0 && S || !S && j.some(e => !0 === e.enabled),
          k = r.typewriter_speed ?? 5,
          P = r.typewriter_delete_speed ?? 7,
          L = t.location,
          A = a === i().unfoldStart,
          T = !!(t.discord_avatar_decoration && u),
          $ = r.border_radius > 35 && .15 * r.border_radius,
          E = t.username_effects,
          z = t.text_color,
          I = r.links_position ?? "center",
          B = !!("" !== t.avatar || t.use_discord_avatar && m),
          M = Object.keys(r.second_tab).length,
          W = r.second_tab_enabled,
          D = t.discord_presence_settings || {
            show_badges: !0,
            show_guild_tag: !0,
            idle_text: ""
          };
        return (0, o.jsxs)(o.Fragment, {
          children: [(0, o.jsxs)("div", {
            className: `${ek().userProfile} ${A&&a}`,
            children: [B ? (0, o.jsxs)("div", {
              className: i().avatarWrapper,
              children: [T && (0, o.jsx)("img", {
                src: u,
                alt: "",
                className: i().avatarDecorationLayout2
              }), (0, o.jsx)("img", {
                src: p,
                alt: "",
                className: ek().avatar
              })]
            }) : (0, o.jsx)("span", {
              className: ek().userProfileSvg,
              children: X.A.userAvatar
            }), (0, o.jsxs)("div", {
              className: ek().userDescription,
              children: [(0, o.jsxs)("div", {
                className: ek().usernameWrapper,
                children: [(0, o.jsx)(eo.A, {
                  content: `UID ${e.uid.toLocaleString("en-US")}`,
                  offset: 0,
                  pageTooltipStyles: !0,
                  children: "typewriter" === t.username_effects ? (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("style", {
                      children: `
                                        .username-typewriter .Typewriter {
                                            font-size: ${c.username.fontSize};
                                            font-weight: ${c.username.fontWeight};
                                            line-height: 41px;
                                        }
                                    `
                    }), (0, o.jsx)("div", {
                      className: `username-typewriter ${ek().usernameTypewriter}`,
                      children: (0, o.jsx)(et(), {
                        options: {
                          strings: [v],
                          autoStart: !0,
                          loop: !0,
                          wrapperClassName: ek().usernameStyles,
                          cursorClassName: ek().usernameCursor,
                          pauseFor: 1e3,
                          stringSplitter: tW
                        }
                      })
                    })]
                  }) : "fuzzy" === E || "shuffle" === E ? (0, o.jsx)(eS.A, {
                    username: v,
                    usernameEffect: E,
                    fontSize: c.username.fontSize,
                    textColor: z
                  }) : (0, o.jsx)("h1", {
                    style: {
                      ...c.username,
                      lineHeight: "41px"
                    },
                    className: `${"rgb"===t.username_effects&&i().rainbowName}`,
                    children: v
                  })
                }), !(!C && !N) && (0, o.jsx)(es, {
                  config: t,
                  premiumConfig: r
                })]
              }), ("" !== t.description || 0 !== r.typewriter.length) && (0, o.jsx)("h3", {
                className: ek().userDescriptionText,
                style: c.description,
                children: r.typewriter_enabled && 0 !== r.typewriter.length ? (0, o.jsx)(et(), {
                  options: {
                    strings: r.typewriter,
                    autoStart: !0,
                    loop: !0,
                    delay: 600 / k,
                    deleteSpeed: 600 / P,
                    pauseFor: 900,
                    stringSplitter: tW
                  }
                }) : t.description
              }), "none" !== g && (0, o.jsxs)("h2", {
                style: c.joinDate,
                children: ["Joined ", function(e) {
                  let t = new Date(1e3 * h);
                  switch (e) {
                    case "none":
                    default:
                      return "";
                    case "relative":
                      return (0, eg.m)(t, {
                        addSuffix: !0
                      });
                    case "absolute":
                      return new Date(1e3 * h).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      });
                    case "short":
                      return t.toLocaleDateString("en-US");
                    case "long":
                      return t.toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      });
                    case "month_year":
                      return t.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long"
                      });
                    case "year_only":
                      return `in ${t.getFullYear().toString()}`;
                    case "compact":
                      return `on ${t.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"2-digit"}).replace(/(\d{2})$/,"'$1")}`
                  }
                }(g)]
              })]
            })]
          }), r.second_tab_enabled && "enabled" === t.presence ? (0, o.jsx)("style", {
            children: `
                    .${i().discordPresenceContainer} {
                        max-width: initial;
                    }
                    .${i().highlight} {
                        display: none;
                    }
                    .${i().discordActivity} {
                        justify-content: space-between;
                        width: 100%;
                    }
                    @media (max-width: 720px) {
                        .${i().discordUser} {
                            max-width: 100%
                        }
                        .${i().highlight} {
                            display: inline;
                        }
                        ${r.second_tab_enabled&&"enabled"!==t.presence?_:""}

                        .${ek().secondTab} {
                            margin-top: 0px!important;
                        }
                    }
                    @media (max-width: 430px) {
                        .${i().userContainer} {
                            width: 100%!important;
                        }
                        .${i().audioPlayer} {
                            width: 100%!important;
                        }
                    }
                    `
          }) : (0, o.jsx)("style", {
            children: `
                    .${i().discordPresenceContainer} {
                        max-width: initial;
                    }
                    .${i().discordActivity} {
                        justify-content: space-between;
                        width: 100%;
                    }
                    @media (max-width: 720px) {
                        ${"enabled"!==t.presence&&_}
                    }
                    `
          }), (0, o.jsx)("div", {
            className: `${ek().widgetContainerWrapper} ${A&&a}`,
            style: x,
            children: (0, o.jsxs)("div", {
              className: ek().widgetContainer,
              style: x,
              children: ["enabled" === t.presence && (0, o.jsx)("div", {
                className: ek().widgetContainerFlex,
                children: (0, o.jsx)(e_, {
                  loading: l,
                  presenceInformation: s,
                  font: r.font,
                  description: t.description,
                  discordData: e.discord,
                  discordUserBadges: W && M >= 1 ? [] : y,
                  fontSize: r.font_size,
                  discordPresenceSettings: D
                })
              }), r.second_tab_enabled && Object.keys(r.second_tab).length > 0 && (0, o.jsx)("div", {
                className: ek().widgetContainerFlex,
                style: x,
                children: (0, o.jsx)(eA, {
                  config: t,
                  premiumConfig: r
                })
              })]
            })
          }), t.socials.length > 0 && (0, o.jsx)("div", {
            className: `${ek().socialsWrapper} ${A&&a}`,
            style: {
              marginBottom: L ? "35px" : "20px"
            },
            children: (0, o.jsx)(eh, {
              socials: t.socials,
              isMonochrome: t.monochrome,
              font: r.font,
              socialGlow: t.social_glow,
              iconColor: t.icon_color,
              username: e.username,
              fontSize: r.font_size,
              style: {
                justifyContent: "left" === I ? "flex-start" : "right" === I ? "flex-end" : "center"
              }
            })
          }), (0, o.jsxs)("div", {
            className: `${ek().bottomLeftWrapper} ${i().bottomLeftWrapperGlobal} ${L&&i().bottomLeftWrapperLocation} ${A&&a}`,
            style: {
              bottom: $ ? 12 + $ : 13,
              left: $ ? 15 + $ : 18
            },
            children: [(0, o.jsx)(ew, {
              challengeData: e._gpp_ch,
              username: e.username,
              premiumConfig: r,
              views: t.page_views,
              containerBorderRadius: null,
              isUnfold: "" === L && A,
              animationStartClass: a,
              isTemplatePreview: n
            }), L && (0, o.jsxs)(o.Fragment, {
              children: [!r.hide_views && (0, o.jsx)("div", {
                className: ek().bottomLeftDivider
              }), (0, o.jsx)(eo.A, {
                content: "Location",
                pageTooltipStyles: !0,
                children: (0, o.jsxs)("span", {
                  className: i().locationMarker,
                  style: c.locationMarker,
                  children: [X.A.locationMarker, " ", L]
                })
              })]
            })]
          })]
        })
      }
      var e$ = r(13653),
        eE = r.n(e$),
        ez = r(54834);

      function eI({
        buttons: e,
        showUrl: t,
        font: r,
        fontSize: s,
        textAlign: a
      }) {
        let i = f({
          font: r,
          fontSize: s
        });
        return (0, o.jsx)("div", {
          className: eE().userButtons,
          children: e.map((e, r) => (0, o.jsx)("div", {
            className: eE().button,
            style: {
              height: t ? 65 : ""
            },
            children: (0, o.jsxs)(en(), {
              href: e.button_url,
              target: "_blank",
              children: ["" !== e.button_icon && (0, o.jsx)("div", {
                className: eE().buttonIconWrapper,
                children: (0, o.jsx)("img", {
                  src: e.button_icon,
                  className: eE().buttonIcon,
                  alt: ""
                })
              }), (0, o.jsxs)("div", {
                className: eE().buttonInformationWrapper,
                style: {
                  marginLeft: "" != e.button_icon && "left" === a ? 60 : ""
                },
                children: [(0, o.jsx)("h1", {
                  style: i.buttonText,
                  children: e.button_title
                }), t && (0, o.jsxs)("span", {
                  className: eE().buttonShowUrl,
                  style: i.buttonUrl,
                  children: [ez.A.link, " ", e.button_url]
                })]
              })]
            })
          }, r))
        })
      }
      var eB = r(55442);
      let eM = [0, 8, 17, 29, 44, 62, 84, 110, 140, 174],
        eW = (e, t) => {
          let r = Number.parseFloat(e);
          return Number.isFinite(r) ? r : t
        };

      function eD({
        effect: e = "shimmer"
      }) {
        let t = (0, s.useRef)(null),
          r = (0, s.useRef)(null);
        return ((0, s.useEffect)(() => {
          if ("shimmer" !== e) return;
          let o = t.current,
            s = o?.parentElement;
          if (!o || !s || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
          let a = 0,
            i = !1,
            n = 0,
            l = 0,
            c = !0,
            d = !document.hidden,
            u = () => {
              let e, t, o, a, i, n, l, c, d;
              e = window.getComputedStyle(s), t = s.clientWidth, o = s.clientHeight, a = eW(e.getPropertyValue("--profileBorderWidth"), 2), i = eW(e.getPropertyValue("--containerRadius"), 25), n = Math.max(0, t - a), l = Math.max(0, o - a), c = Math.min(Math.max(0, i - a / 2), n / 2, l / 2), d = 2 * (n + l - 4 * c) + 2 * Math.PI * c, r.current = {
                width: t,
                height: o,
                radius: c,
                borderWidth: a,
                perimeter: d
              }
            },
            m = e => {
              if (!i) return;
              let t = r.current;
              if (t && t.perimeter > 0) {
                let r = n > 0 ? e - n : 0;
                n = e, l += r / 1e3 * 210, eM.forEach((e, r) => {
                  let s = ((e, t) => {
                    let {
                      width: r,
                      height: o,
                      radius: s,
                      borderWidth: a,
                      perimeter: i
                    } = e, n = a / 2, l = r - n, c = o - n, d = Math.max(0, l - n - 2 * s), u = Math.max(0, c - n - 2 * s), m = (t % i + i) % i;
                    if (m <= d) return {
                      x: n + s + m,
                      y: n
                    };
                    let p = Math.PI * s / 2;
                    if ((m -= d) <= p && s > 0) {
                      let e = -Math.PI / 2 + m / s;
                      return {
                        x: l - s + Math.cos(e) * s,
                        y: n + s + Math.sin(e) * s
                      }
                    }
                    if ((m -= p) <= u) return {
                      x: l,
                      y: n + s + m
                    };
                    if ((m -= u) <= p && s > 0) {
                      let e = m / s;
                      return {
                        x: l - s + Math.cos(e) * s,
                        y: c - s + Math.sin(e) * s
                      }
                    }
                    if ((m -= p) <= d) return {
                      x: l - s - m,
                      y: c
                    };
                    if ((m -= d) <= p && s > 0) {
                      let e = Math.PI / 2 + m / s;
                      return {
                        x: n + s + Math.cos(e) * s,
                        y: c - s + Math.sin(e) * s
                      }
                    }
                    if ((m -= p) <= u) return {
                      x: n,
                      y: c - s - m
                    };
                    m -= u;
                    let f = Math.PI + (s > 0 ? m / s : 0);
                    return {
                      x: n + s + Math.cos(f) * s,
                      y: n + s + Math.sin(f) * s
                    }
                  })(t, l - e);
                  o.style.setProperty(`--profile-shimmer-x-${r}`, `${s.x}px`), o.style.setProperty(`--profile-shimmer-y-${r}`, `${s.y}px`)
                })
              }
              a = requestAnimationFrame(m)
            },
            p = () => {
              i = !1, n = 0, a && (cancelAnimationFrame(a), a = 0)
            },
            f = () => {
              !i && c && d && (i = !0, a = requestAnimationFrame(m))
            },
            h = () => {
              (d = !document.hidden) ? f(): p()
            };
          u();
          let g = new ResizeObserver(u);
          g.observe(s), document.addEventListener("visibilitychange", h);
          let x = null;
          return "undefined" != typeof IntersectionObserver && (x = new IntersectionObserver(([e]) => {
            (c = !!e?.isIntersecting) ? f(): p()
          }, {
            threshold: .01
          })).observe(s), f(), () => {
            p(), g.disconnect(), x?.disconnect(), document.removeEventListener("visibilitychange", h)
          }
        }, [e]), "pulse" === e) ? (0, o.jsx)("div", {
          ref: t,
          className: `${i().profileBorderLayer} ${i().profilePulseBorderLayer}`
        }) : (0, o.jsx)("div", {
          ref: t,
          className: `${i().profileBorderLayer} ${i().profileShimmerBorderLayer}`
        })
      }

      function eF({
        animationStartClass: e,
        audioPlayer: t,
        setAudioData: r,
        audioData: a,
        setAudioPlayer: n,
        audioContainerRef: l,
        currentFont: c,
        audioList: d,
        setVolume: u,
        fontSize: m,
        profileBorderClass: p = "",
        profileBorderEffect: h = "shimmer",
        revealContent: g = !1,
        revealOrder: x = 1,
        lyricsConfig: v = null
      }) {
        let y = e => {
            if (isNaN(e) || e === 1 / 0) return "--:--";
            let t = Math.floor(e / 60),
              r = Math.floor(e % 60);
            return isNaN(t) || isNaN(r) ? "--:--" : `${t}:${r<10?`0${r}`:r}`
          },
          _ = f({
            font: c,
            fontSize: m
          }),
          b = y(t.currentTime),
          j = y(t.duration),
          w = Number.isFinite(t.duration) && t.duration > 0 ? Math.min(Math.max(t.currentTime / t.duration * 100, 0), 100) : 0,
          S = (0, s.useRef)(!1),
          [C, N] = (0, s.useState)(Number(t.currentTime || 0)),
          k = g ? "" : e,
          P = (e, t, r) => g ? {
            "data-reveal-part": e,
            style: {
              ...r,
              "--portfolioRevealOrder": x + t
            }
          } : r ? {
            style: r
          } : {},
          L = (0, s.useRef)({
            activePointerId: null,
            wasPlaying: !1,
            barRect: null,
            lastClientX: null
          }),
          A = v?.lyrics_track_map && "object" == typeof v.lyrics_track_map ? v.lyrics_track_map : {},
          T = String(a?.id ?? ""),
          $ = Object.values(A).find(e => e?.track_url === a?.url),
          E = A[T] || A.__single__ || $ || null,
          z = (0, s.useMemo)(() => (0, eB.O5)(String(E?.synced_lyrics || "")), [E?.synced_lyrics]),
          I = (0, s.useMemo)(() => (0, eB.L$)(z, C + .045), [z, C]),
          B = I >= 0 ? z[I] : null,
          M = (0, s.useMemo)(() => (0, eB.r$)(B?.words, C + .045), [B?.words, C]),
          W = I >= 0 ? I : 0,
          D = g && v?.show_lyrics === !0;
        (0, s.useEffect)(() => {
          let e = t.ref;
          if (!D || !e || !t.playing) return void N(Number(t.currentTime || e?.currentTime || 0));
          let r = 0,
            o = -1,
            s = () => {
              let t = Number(e.currentTime || 0);
              Math.abs(t - o) >= .018 && (o = t, N(t)), r = requestAnimationFrame(s)
            };
          return s(), () => cancelAnimationFrame(r)
        }, [t.currentTime, t.playing, t.ref, D]);
        let F = e => {
            if (!e || "object" != typeof e) return !1;
            let t = A[String(e.id ?? "")],
              r = Object.values(A).find(t => t?.track_url === e?.url),
              o = t || A.__single__ || r;
            return "string" == typeof o?.synced_lyrics && o.synced_lyrics.trim().length > 0
          },
          R = e => {
            if (!Array.isArray(d) || 0 === d.length) return null;
            let t = d.length,
              r = d.findIndex(e => e.id === a.id),
              o = r >= 0 ? r : d.findIndex(e => e.url === a.url),
              s = o >= 0 ? o : 0;
            for (let r = 1; r < t; r++) {
              let o = d[(s + e * r + t) % t];
              if (F(o)) return o
            }
            return null
          },
          U = e => {
            let r = t.ref,
              o = r?.duration || t.duration;
            if (!r || !Number.isFinite(o) || o <= 0) return;
            let s = Math.min(Math.max(e, 0), o);
            r.currentTime = s, n(e => ({
              ...e,
              currentTime: s,
              duration: o,
              ref: r
            }))
          },
          O = e => {
            let r = L.current.barRect,
              o = t.ref?.duration || t.duration;
            if (!r || !Number.isFinite(o) || o <= 0) return;
            let s = r.width > 0 ? (e - r.left) / r.width : 0;
            L.current.lastClientX = e, U(s * o)
          },
          H = (e, r = !0) => {
            let o = t.ref,
              s = L.current.activePointerId === e.pointerId && L.current.wasPlaying;
            L.current.activePointerId === e.pointerId && (e.preventDefault(), O(r ? e.clientX : L.current.lastClientX ?? e.clientX)), e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId), L.current = {
              activePointerId: null,
              wasPlaying: !1,
              barRect: null,
              lastClientX: null
            }, o && s && G(o).then(e => {
              e && n(e => ({
                ...e,
                playing: !0,
                ref: o
              }))
            })
          },
          G = e => {
            let t = e.play();
            return t && "function" == typeof t.then ? t.then(() => !0).catch(t => (n(e => ({
              ...e,
              playing: !1
            })), t?.name === "NotSupportedError" ? console.warn("Audio playback failed: unsupported source/codec.", {
              src: e.currentSrc || e.src,
              error: t
            }) : console.warn("Audio playback failed.", t), !1)) : Promise.resolve(!0)
          },
          V = () => {
            if (!t.ref || !Array.isArray(d) || 0 === d.length) return;
            let e = d.findIndex(e => e.id === a.id);
            if (1 === d.length) {
              t.ref.currentTime = 0;
              return
            }
            if (D) {
              let e = R(-1);
              if (!e) return;
              Y(e);
              return
            }
            Y(0 === e ? d[d.length - 1] : d[e - 1])
          },
          q = () => {
            if (!t.ref || !Array.isArray(d) || 0 === d.length) return;
            let e = d.findIndex(e => e.id === a.id);
            if (1 === d.length) {
              t.ref.currentTime = 0;
              return
            }
            if (D) {
              let e = R(1);
              if (!e) return;
              Y(e);
              return
            }
            Y(e === d.length - 1 ? d[0] : d[e + 1])
          },
          Y = e => {
            let o = t.ref;
            if (!o) return;
            let s = () => {
                n(e => ({
                  ...e,
                  currentTime: o.currentTime,
                  duration: o.duration,
                  ref: o
                }))
              },
              a = () => {
                G(o).then(e => {
                  e && (n(e => ({
                    ...e,
                    playing: !0,
                    ref: o
                  })), u({
                    muted: !1,
                    volume: 100
                  }), o.addEventListener("timeupdate", s))
                }), o.removeEventListener("canplaythrough", a)
              };
            o.pause(), o.removeEventListener("timeupdate", s), o.removeEventListener("canplaythrough", a), o.src.includes(e.url) || (o.src = e.url), o.currentTime = 0, o.volume = .25, o.loop = !0, r({
              ...e,
              url: e.url,
              title: e.title,
              cover: e.cover,
              id: e.id
            }), n(e => ({
              ...e,
              playing: !1,
              currentTime: 0,
              duration: 0,
              ref: o
            })), o.readyState >= 3 ? a() : o.addEventListener("canplaythrough", a)
          },
          Z = e => {
            S.current || (S.current = !0, e(), setTimeout(() => {
              S.current = !1
            }, 250))
          };
        return (0, o.jsxs)("div", {
          className: `${i().audioPlayer} ${k} ${p}`,
          ref: l,
          children: [p && !D && (0, o.jsx)(eD, {
            effect: h
          }), D && (0, o.jsxs)("div", {
            className: i().audioLyricsBackdropLayer,
            children: [a.cover && (0, o.jsx)("div", {
              className: i().audioLyricsCoverBackdrop,
              style: {
                backgroundImage: `url("${a.cover}")`
              }
            }), (0, o.jsx)("span", {
              className: i().audioLyricsBlobPrimary
            }), (0, o.jsx)("span", {
              className: i().audioLyricsBlobSecondary
            })]
          }), (0, o.jsxs)("div", {
            className: i().audioPlayerInner,
            children: [a.cover && "" !== a.cover ? (0, o.jsx)("img", {
              src: a.cover,
              ...P("audio-cover", 0, {
                borderRadius: "calc(var(--containerRadius) - 10px)"
              }),
              alt: "",
              className: i().audioCover
            }) : (0, o.jsx)("span", {
              className: i().audioIcon,
              ...P("audio-icon", 0, {
                borderRadius: "calc(var(--containerRadius) - 10px)"
              }),
              children: ez.A.audioIcon
            }), (0, o.jsxs)("div", {
              className: `${i().audioContainer}`,
              ...P("audio-controls", 1),
              children: [(0, o.jsx)("h1", {
                className: i().audioTitle,
                style: _.audioPlayerTitle,
                children: a.title
              }), (0, o.jsxs)("div", {
                className: i().audioControls,
                children: [(0, o.jsxs)("div", {
                  className: i().audioProgressBarWrapper,
                  children: [(0, o.jsx)("span", {
                    style: _.audioPlayerControls,
                    children: b
                  }), (0, o.jsx)("div", {
                    className: i().audioProgressBar,
                    tabIndex: 0,
                    "aria-valuemin": 0,
                    "aria-valuemax": Math.round(t.duration || 0),
                    "aria-valuenow": Math.round(t.currentTime || 0),
                    onPointerDown: e => {
                      let r = t.ref;
                      if (!r) return;
                      e.preventDefault();
                      let o = e.currentTarget.getBoundingClientRect();
                      L.current = {
                        activePointerId: e.pointerId,
                        wasPlaying: !r.paused,
                        barRect: {
                          left: o.left,
                          width: o.width
                        },
                        lastClientX: e.clientX
                      }, r.paused || (r.pause(), n(e => ({
                        ...e,
                        playing: !1,
                        ref: r
                      }))), e.currentTarget.setPointerCapture(e.pointerId), O(e.clientX)
                    },
                    onPointerMove: e => {
                      1 === e.buttons && L.current.activePointerId === e.pointerId && (e.preventDefault(), O(e.clientX))
                    },
                    onPointerUp: e => H(e),
                    onPointerCancel: e => H(e, !1),
                    onLostPointerCapture: e => H(e, !1),
                    onKeyDown: e => {
                      let r = t.ref?.duration || t.duration;
                      Number.isFinite(r) && !(r <= 0) && ("ArrowLeft" === e.key || "ArrowDown" === e.key ? (e.preventDefault(), U(t.currentTime - 5)) : "ArrowRight" === e.key || "ArrowUp" === e.key ? (e.preventDefault(), U(t.currentTime + 5)) : "Home" === e.key ? (e.preventDefault(), U(0)) : "End" === e.key && (e.preventDefault(), U(r)))
                    },
                    children: (0, o.jsxs)("div", {
                      className: i().audioProgressTrack,
                      children: [(0, o.jsx)("div", {
                        className: i().audioProgress
                      }), (0, o.jsx)("div", {
                        className: i().audioProgressPlaying,
                        style: {
                          width: w + "%"
                        }
                      }), (0, o.jsx)("div", {
                        className: i().audioProgressThumb,
                        style: {
                          left: w + "%"
                        }
                      })]
                    })
                  }), (0, o.jsx)("span", {
                    style: _.audioPlayerControls,
                    children: j
                  })]
                }), (0, o.jsxs)("div", {
                  className: i().controlButtons,
                  children: [(0, o.jsx)("span", {
                    className: i().sideControlButton,
                    onClick: () => Z(V),
                    children: ez.A.skipBackward
                  }), (0, o.jsx)("span", {
                    className: i().mainControlButton,
                    onClick: () => {
                      let e = t.ref;
                      e && (t.playing ? (e.pause(), n(e => ({
                        ...e,
                        playing: !1
                      }))) : G(e).then(e => {
                        e && n(e => ({
                          ...e,
                          playing: !0
                        }))
                      }))
                    },
                    children: t.playing ? ez.A.pause : ez.A.play
                  }), (0, o.jsx)("span", {
                    className: i().sideControlButton,
                    onClick: () => Z(q),
                    children: ez.A.skipForward
                  })]
                })]
              })]
            })]
          }), D && (0, o.jsx)("div", {
            className: i().audioLyricsShell,
            ...P("audio-lyrics", 2),
            children: z.length > 0 ? (0, o.jsx)("div", {
              className: i().audioLyricsViewport,
              children: z.map((e, t) => {
                let r = t - W,
                  s = Math.abs(r);
                if (s > 8) return null;
                let a = t === I,
                  n = I >= 0 && t < I,
                  l = {
                    "--lyrics-line-offset": String(r)
                  };
                return (0, o.jsx)("p", {
                  "data-lyrics-line": t,
                  style: l,
                  className: `${i().audioLyricsLine} ${a?i().audioLyricsLineActive:""} ${s<=1?i().audioLyricsLineNear:""} ${s>4?i().audioLyricsLineFaded:""} ${n?i().audioLyricsLinePast:""}`,
                  children: e.words && e.words.length > 0 ? (0, o.jsx)("span", {
                    className: `${i().audioLyricsLineText} ${i().audioLyricsLineTextEnhanced}`,
                    children: e.words.map((e, t) => {
                      var r;
                      let s, n = a && t === M,
                        l = a && M >= 0 && t < M,
                        c = (s = String((r = e.text) || "").match(/^(\W*)(.*?)([\s.,!?;:)"'\]]*)$/), {
                          prefix: s?.[1] || "",
                          body: s?.[2] || r,
                          suffix: s?.[3] || ""
                        });
                      return (0, o.jsxs)("span", {
                        className: `${i().audioLyricsWord} ${n?i().audioLyricsWordActive:""} ${l?i().audioLyricsWordPast:""} ${a&&!l&&!n?i().audioLyricsWordUpcoming:""}`,
                        children: [c.prefix, (0, o.jsx)("span", {
                          className: i().audioLyricsWordBody,
                          children: c.body
                        }), c.suffix]
                      }, `${e.timeMs}-${t}-${e.text}`)
                    })
                  }) : (0, o.jsx)("span", {
                    className: i().audioLyricsLineText,
                    children: e.text
                  })
                }, `${e.timeMs}-${t}`)
              })
            }) : (0, o.jsx)("p", {
              className: i().audioLyricsEmpty,
              children: "No synced lyrics applied for this track yet."
            })
          })]
        })
      }

      function eR({
        userData: e,
        config: t,
        premiumConfig: r,
        presenceInformation: s,
        animationStartClass: a,
        setAudioData: n,
        audioData: l,
        audioPlayer: c,
        setAudioPlayer: d,
        audioContainerRef: u,
        setVolume: m,
        profileBorderClass: p = "",
        profileBorderEffect: h
      }) {
        let g = f({
            font: r.font,
            fontSize: r.font_size
          }),
          x = ev(s),
          v = x.avatar || "",
          y = t.use_discord_avatar && v ? v : t.avatar,
          _ = "" !== t.display_name ? t.display_name : e.username,
          b = x.avatarDecoration || "",
          j = t.user_badges,
          w = t.custom_badges,
          S = j.length > 0 && j[0] && "string" == typeof j[0],
          C = w.length > 0 && "string" == typeof w[0][0],
          N = j.length > 0 && S || !S && j.some(e => !0 === e.enabled),
          k = w.length > 0 && C || !C && w.some(e => !0 === e.enabled),
          P = r.typewriter_speed ?? 5,
          L = r.typewriter_delete_speed ?? 7,
          A = !!(t.discord_avatar_decoration && b),
          T = a === i().unfoldStart,
          $ = t.username_effects,
          E = t.text_color,
          z = !!("" !== t.avatar || t.use_discord_avatar && v);
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsxs)("div", {
            className: eE().userInformation,
            children: [z && (0, o.jsxs)("div", {
              className: i().avatarWrapper,
              children: [A && (0, o.jsx)("img", {
                src: b,
                alt: "",
                className: i().avatarDecorationLayout3
              }), (0, o.jsx)("img", {
                src: y,
                alt: "",
                className: eE().avatar
              })]
            }), (0, o.jsxs)("div", {
              className: `${eE().userDescription} ${T&&a}`,
              children: [(0, o.jsx)(eo.A, {
                content: `UID ${e.uid.toLocaleString("en-US")}`,
                offset: 0,
                pageTooltipStyles: !0,
                children: "typewriter" === t.username_effects ? (0, o.jsxs)(o.Fragment, {
                  children: [(0, o.jsx)("style", {
                    children: `
                                        .username-typewriter .Typewriter {
                                            font-size: ${g.username.fontSize};
                                            font-weight: ${g.username.fontWeight};
                                        }
                                    `
                  }), (0, o.jsx)("div", {
                    className: "username-typewriter",
                    children: (0, o.jsx)(et(), {
                      options: {
                        strings: [_],
                        autoStart: !0,
                        loop: !0,
                        wrapperClassName: eE().username,
                        cursorClassName: eE().usernameCursor,
                        pauseFor: 1e3,
                        stringSplitter: tW
                      }
                    })
                  })]
                }) : "fuzzy" === $ || "shuffle" === $ ? (0, o.jsx)(eS.A, {
                  username: _,
                  usernameEffect: $,
                  fontSize: g.username.fontSize,
                  textColor: E,
                  marginBottom: "7px"
                }) : (0, o.jsx)("h1", {
                  className: `${eE().username} ${"rgb"===t.username_effects&&i().rainbowName}`,
                  style: g.username,
                  children: _
                })
              }), !(!N && !k) && (0, o.jsx)("div", {
                className: eE().badgeContainerWrapper,
                children: (0, o.jsx)(es, {
                  config: t,
                  premiumConfig: r
                })
              }), ("" !== t.description || 0 !== r.typewriter.length) && (0, o.jsx)("h3", {
                className: eE().description,
                style: g.description,
                children: r.typewriter_enabled && 0 !== r.typewriter.length ? (0, o.jsx)(et(), {
                  options: {
                    strings: r.typewriter,
                    autoStart: !0,
                    loop: !0,
                    delay: 600 / P,
                    deleteSpeed: 600 / L,
                    pauseFor: 900,
                    stringSplitter: tW
                  }
                }) : t.description
              }), t.location && (0, o.jsx)(eo.A, {
                content: "Location",
                pageTooltipStyles: !0,
                children: (0, o.jsxs)("span", {
                  className: i().locationMarker,
                  style: g.locationMarker,
                  children: [X.A.locationMarker, " ", t.location]
                })
              })]
            }), t.socials.length > 0 && (0, o.jsx)("div", {
              className: `${eE().socialWrapper} ${T&&a}`,
              children: (0, o.jsx)(eh, {
                socials: t.socials,
                isMonochrome: t.monochrome,
                font: r.font,
                socialGlow: t.social_glow,
                iconColor: t.icon_color,
                username: e.username,
                fontSize: r.font_size
              })
            }), t.audio_player && "" !== l.url && (0, o.jsx)("div", {
              className: eE().audioPlayerWrapper,
              children: (0, o.jsx)(eF, {
                animationStartClass: a,
                audioPlayer: c,
                setAudioData: n,
                audioData: l,
                setAudioPlayer: d,
                audioContainerRef: u,
                currentFont: r.font,
                audioList: t.audio,
                setVolume: m,
                fontSize: r.font_size,
                profileBorderClass: p,
                profileBorderEffect: h
              })
            }), r.buttons.length > 0 && (0, o.jsx)("div", {
              className: `${eE().buttonWrapper} ${T&&a}`,
              children: (0, o.jsx)(eI, {
                buttons: r.buttons,
                showUrl: r.show_url,
                font: r.font,
                textAlign: r.text_align,
                fontSize: r.font_size
              })
            })]
          })
        })
      }
      var eU = r(29883),
        eO = r.n(eU),
        eH = r(98241),
        eG = r.n(eH),
        eV = r(81934);

      function eq({
        username: e,
        sessionData: t
      }) {
        let r = (0, ed.kj)(),
          a = t?.session ?? null,
          i = a?.username,
          n = `https://guns.lol/${i?.endsWith(".")?i+"/":i}`,
          [l, c] = (0, s.useState)(!1),
          d = async () => {
            n && (await navigator.clipboard.writeText(n), c(!0), setTimeout(() => c(!1), 1e3))
          };
        return (0, o.jsx)("div", {
          className: eG().containerWrapper,
          children: (0, o.jsxs)("div", {
            className: eG().claimPageWrapper,
            children: [(0, o.jsxs)("div", {
              className: `${eG().container} ${eG().card}`,
              children: [(0, o.jsx)("div", {
                className: eG().headIcon,
                children: ez.A.error
              }), (0, o.jsx)("h1", {
                className: eG().headline,
                children: r("userpage.claim_user_page.title")
              }), (0, o.jsx)("h3", {
                className: eG().subheadline,
                children: r("userpage.claim_user_page.description")
              }), (0, o.jsxs)("div", {
                className: eG().actionRow,
                children: [(0, o.jsx)(eV.A, {
                  href: "/",
                  className: `${eG().button} ${eG().buttonSecondary}`,
                  children: r("userpage.claim_user_page.home_button")
                }), (0, o.jsx)(eV.A, {
                  href: `/register?claim=${e}&ref=claim_user_page`,
                  className: `${eG().button} ${eG().buttonPrimary}`,
                  children: r("userpage.claim_user_page.claim_button")
                })]
              })]
            }), i && (0, o.jsxs)("div", {
              className: eG().loggedInContainer,
              children: [(0, o.jsxs)("div", {
                className: eG().loggedLeft,
                children: [ez.A.user, (0, o.jsx)("span", {
                  children: r("userpage.claim_user_page.logged_in_as", {
                    username: (0, o.jsxs)("b", {
                      children: ["@", i]
                    })
                  })
                })]
              }), (0, o.jsxs)("div", {
                className: eG().loggedActions,
                children: [(0, o.jsxs)("a", {
                  href: `/${i}`,
                  className: `${eG().button} ${eG().buttonSecondary}`,
                  children: [ez.A.link, " ", r("userpage.claim_user_page.open_button")]
                }), (0, o.jsxs)("button", {
                  onClick: d,
                  className: `${eG().button} ${eG().buttonSecondary}`,
                  children: [ez.A.copy, r(l ? "userpage.claim_user_page.copied_text" : "userpage.claim_user_page.copy_text")]
                }), (0, o.jsxs)("a", {
                  href: "https://help.guns.lol/getting-started/share-profile#how-to-copy-your-gunslol-url--qr-code",
                  target: "_blank",
                  className: `${eG().button} ${eG().buttonSecondary}`,
                  children: [ez.A.helpCenter, " ", r("userpage.claim_user_page.help_button")]
                })]
              })]
            })]
          })
        })
      }

      function eY() {
        let e = (0, ed.kj)();
        return (0, o.jsx)("div", {
          className: eG().containerWrapper,
          children: (0, o.jsxs)("div", {
            className: eG().container,
            children: [ez.A.error, (0, o.jsx)("h1", {
              children: e("userpage.username_error.title")
            }), (0, o.jsx)("h3", {
              children: e("userpage.username_error.description")
            }), (0, o.jsxs)("div", {
              className: eG().containerButtons,
              children: [(0, o.jsx)(eV.A, {
                href: "/",
                children: e("userpage.username_error.home_button")
              }), (0, o.jsx)(en(), {
                href: "https://help.guns.lol/general/contact-us",
                target: "_blank",
                children: e("userpage.username_error.contact_button")
              })]
            })]
          })
        })
      }

      function eZ({
        reason: e
      }) {
        let t = (0, ed.kj)();
        return (0, o.jsx)("div", {
          className: eG().containerWrapper,
          children: (0, o.jsxs)("div", {
            className: eG().container,
            children: [ez.A.error, (0, o.jsx)("h1", {
              children: t("userpage.username_ban.title", {
                guns: (0, o.jsx)(eV.A, {
                  href: "/",
                  style: {
                    textDecoration: "none",
                    color: "#b252cc"
                  },
                  children: "guns.lol"
                })
              })
            }), (0, o.jsx)("h3", {
              children: t("userpage.username_ban.reason", {
                reason: e
              })
            }), (0, o.jsxs)("div", {
              className: eG().containerButtons,
              children: [(0, o.jsx)(eV.A, {
                href: "/",
                children: t("userpage.username_ban.home_button")
              }), (0, o.jsx)(en(), {
                href: "https://help.guns.lol/general/contact-us",
                target: "_blank",
                children: t("userpage.username_ban.contact_button")
              })]
            })]
          })
        })
      }

      function eX() {
        let e = (0, ed.kj)();
        return (0, o.jsx)("div", {
          className: eG().containerWrapper,
          children: (0, o.jsxs)("div", {
            className: eG().container,
            children: [ez.A.error, (0, o.jsx)("h1", {
              children: e("userpage.username_unverified.title")
            }), (0, o.jsx)("h3", {
              children: e("userpage.username_unverified.description")
            }), (0, o.jsxs)("div", {
              className: eG().containerButtons,
              children: [(0, o.jsx)(eV.A, {
                href: "/",
                children: e("userpage.username_unverified.home_button")
              }), (0, o.jsx)(en(), {
                href: "https://help.guns.lol/general/contact-us",
                target: "_blank",
                children: e("userpage.username_unverified.contact_button")
              })]
            })]
          })
        })
      }

      function eJ() {
        let e = (0, ed.kj)();
        return (0, o.jsx)("div", {
          className: eG().containerWrapper,
          children: (0, o.jsxs)("div", {
            className: eG().container,
            children: [ez.A.error, (0, o.jsx)("h1", {
              children: e("userpage.username_pending_deletion.title")
            }), (0, o.jsx)("h3", {
              children: e("userpage.username_pending_deletion.description")
            }), (0, o.jsxs)("div", {
              className: `${eG().containerButtons} ${eG().inactiveAccountButtons}`,
              children: [(0, o.jsx)(eV.A, {
                href: "/",
                children: e("userpage.username_pending_deletion.home_button")
              }), (0, o.jsx)(en(), {
                href: "https://help.guns.lol/general/contact-us",
                target: "_blank",
                children: e("userpage.username_pending_deletion.contact_button")
              })]
            })]
          })
        })
      }
      var eQ = r(73321),
        eK = r(31668),
        e0 = r(21924),
        e1 = r(64944),
        e2 = r.n(e1);

      function e4({
        userData: e,
        config: t,
        premiumConfig: r,
        presenceInformation: a,
        animationStartClass: n,
        isTemplatePreview: l
      }) {
        let [c, d] = (0, s.useState)(0);
        (0, s.useEffect)(() => {
          let e = () => {
            d(window.innerWidth)
          };
          return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, []);
        let u = ev(a),
          m = u.avatar || "",
          p = t.use_discord_avatar && m ? m : t.avatar,
          h = u.avatarDecoration || "",
          g = !!(t.discord_avatar_decoration && h),
          x = f({
            font: r.font,
            fontSize: r.font_size
          }),
          v = t.user_badges,
          y = t.custom_badges,
          _ = v.length > 0 && v[0] && "string" == typeof v[0],
          b = y.length > 0 && "string" == typeof y[0][0],
          j = v.length > 0 && _ || !_ && v.some(e => !0 === e.enabled),
          w = y.length > 0 && b || !b && y.some(e => !0 === e.enabled),
          S = r.typewriter_speed ?? 5,
          C = r.typewriter_delete_speed ?? 7,
          N = n === i().unfoldStart,
          k = "" !== t.display_name ? t.display_name : e.username,
          P = t.location,
          L = r.border_radius > 35 && .15 * r.border_radius,
          A = !!("" !== t.avatar || t.use_discord_avatar && m),
          T = void 0 !== r.avatar_radius ? r.avatar_radius : 35,
          $ = t.username_effects,
          E = t.text_color,
          z = r.links_position ?? "center",
          I = "" !== P || !1 === r.hide_views;
        return (0, o.jsxs)(o.Fragment, {
          children: [(0, o.jsxs)("div", {
            className: e2().userInformation,
            style: {
              marginTop: A ? -70 : 0,
              marginBottom: 25 * (c <= 520 && 0 === t.socials.length)
            },
            children: [A && (0, o.jsxs)("div", {
              className: `${i().avatarWrapper} ${e2().avatarWrapper}`,
              children: [g && (0, o.jsx)("img", {
                src: h,
                alt: "",
                className: i().avatarDecorationLayout4
              }), (0, o.jsx)("img", {
                src: p,
                alt: "",
                className: e2().avatar,
                style: {
                  borderRadius: `${T}px`
                }
              })]
            }), (0, o.jsxs)("div", {
              className: `${e2().userDescription} ${N&&n}`,
              children: [(0, o.jsxs)("div", {
                className: e2().usernameWrapper,
                children: [(0, o.jsx)(eo.A, {
                  content: `UID ${e.uid.toLocaleString("en-US")}`,
                  offset: 0,
                  pageTooltipStyles: !0,
                  children: "typewriter" === t.username_effects ? (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("style", {
                      children: `
                                            .username-typewriter .Typewriter {
                                                font-size: ${x.username.fontSize};
                                                font-weight: ${x.username.fontWeight};
                                            }
                                        `
                    }), (0, o.jsx)("div", {
                      className: "username-typewriter",
                      children: (0, o.jsx)(et(), {
                        options: {
                          strings: [k],
                          autoStart: !0,
                          loop: !0,
                          wrapperClassName: e2().userDescriptionUsername,
                          cursorClassName: e2().usernameCursor,
                          pauseFor: 1e3,
                          stringSplitter: tW
                        }
                      })
                    })]
                  }) : "fuzzy" === $ || "shuffle" === $ ? (0, o.jsx)(eS.A, {
                    username: k,
                    usernameEffect: $,
                    fontSize: x.username.fontSize,
                    textColor: E
                  }) : (0, o.jsx)("h1", {
                    className: `${e2().userDescriptionUsername} ${"rgb"===t.username_effects&&i().rainbowName}`,
                    style: x.username,
                    children: k
                  })
                }), !(!j && !w) && (0, o.jsx)(es, {
                  config: t,
                  premiumConfig: r
                })]
              }), ("" !== t.description || 0 !== r.typewriter.length) && (0, o.jsx)("h3", {
                className: e2().userDescriptionText,
                style: x.description,
                children: r.typewriter_enabled && 0 !== r.typewriter.length ? (0, o.jsx)(et(), {
                  options: {
                    strings: r.typewriter,
                    autoStart: !0,
                    loop: !0,
                    delay: 600 / S,
                    deleteSpeed: 600 / C,
                    pauseFor: 900,
                    stringSplitter: tW
                  }
                }) : t.description
              })]
            })]
          }), (0, o.jsxs)("div", {
            className: `${e2().topRightWrapper} ${i().topRightWrapperGlobal} ${P&&i().topRightWrapperLocation} ${N&&n}`,
            style: c > 520 ? {
              top: L ? 15 + L : 13,
              right: L ? 18 + L : 18
            } : {
              bottom: L ? 12 + L : 13,
              left: L ? 15 + L : 18,
              top: "inherit",
              right: "inherit"
            },
            children: [(0, o.jsx)(ew, {
              challengeData: e._gpp_ch,
              username: e.username,
              premiumConfig: r,
              views: t.page_views,
              containerBorderRadius: null,
              isUnfold: "" === P && N,
              animationStartClass: n,
              isTemplatePreview: l
            }), P && (0, o.jsxs)(o.Fragment, {
              children: [!r.hide_views && (0, o.jsx)("div", {
                className: e2().topRightDivider
              }), (0, o.jsx)(eo.A, {
                content: "Location",
                pageTooltipStyles: !0,
                children: (0, o.jsxs)("span", {
                  className: i().locationMarker,
                  style: x.locationMarker,
                  children: [X.A.locationMarker, " ", P]
                })
              })]
            })]
          }), I && (0, o.jsx)("style", {
            children: `
                    @media (max-width: 520px) {
                        .${e2().socialsWrapper} {
                        margin-bottom: 40px;
                        }
                    }
                    `
          }), t.socials.length > 0 && (0, o.jsx)("div", {
            className: `${e2().socialsWrapper} ${N&&n}`,
            children: (0, o.jsx)(eh, {
              socials: t.socials,
              isMonochrome: t.monochrome,
              font: r.font,
              socialGlow: t.social_glow,
              iconColor: t.icon_color,
              username: e.username,
              fontSize: r.font_size,
              style: {
                justifyContent: "left" === z ? "flex-start" : "right" === z ? "flex-end" : "center"
              }
            })
          })]
        })
      }
      var e5 = r(33727),
        e3 = r(18310),
        e6 = r(27212),
        e8 = r.n(e6),
        e9 = r(77599),
        e7 = r(17440);
      let te = {
          transitionSpeed: 700,
          perspective: 1e3,
          tiltMaxAngleX: 10,
          tiltMaxAngleY: 10
        },
        tt = "portfolio:scroll-more",
        tr = "data-user-page-enter-transition",
        to = new Set(["r2.guns.lol", "pub-154e894c099540f58a9780bd0f621198.r2.dev"]),
        ts = new Set(["youtube", "spotify", "discord", "telegram", "roblox", "github", "lastfm", "timezone"]),
        ta = new Set(["hero", "about", "projects", "custom", "audio", "skills"]),
        ti = [{
          id: "portfolio-top-hero",
          type: "hero",
          visible: !0,
          settings: {
            hero_style: "classic",
            show_avatar: !0,
            show_buttons: !0
          }
        }],
        tn = (e, t) => {
          if (!e || "object" != typeof e) return !1;
          let r = e.lyrics_track_map && "object" == typeof e.lyrics_track_map && !Array.isArray(e.lyrics_track_map) ? e.lyrics_track_map : {},
            o = r[String(t?.id || "")],
            s = Object.values(r).find(e => e?.track_url && t?.url && String(e.track_url) === String(t.url)),
            a = o || s;
          return "string" == typeof a?.synced_lyrics && a.synced_lyrics.trim().length > 0
        };

      function tl({
        userData: e,
        config: t,
        premiumConfig: r,
        presenceInformation: a,
        animationStartClass: i,
        isTemplatePreview: n,
        discordLoading: l,
        discordBadges: c,
        profileBorderClass: d,
        profileBorderEffect: u,
        profileBorderEffectEnabled: m,
        audioPlayer: p,
        setAudioData: f,
        audioData: h,
        setAudioPlayer: g,
        audioContainerRef: x,
        setVolume: v
      }) {
        let y = ((e = [], t) => {
            let r = (Array.isArray(e) && e.length > 0 ? e : ti).filter(e => ta.has(e?.type)),
              o = r.findIndex(e => e?.type === "hero"),
              s = 0 === o ? r : [o > 0 ? r[o] : ti[0], ...r.filter((e, t) => e?.type !== "hero" || t === o)],
              a = !!t?.url;
            return s.filter((e, r) => !!e && !1 !== e.visible && ("audio" === e.type ? a && tn(e.settings, t) : 0 === r ? "hero" === e.type : "hero" !== e.type))
          })(r.portfolio_modules, h),
          _ = (0, s.useRef)(null),
          b = (0, s.useRef)(-1),
          j = (0, s.useRef)(!0),
          [w, S] = (0, s.useState)(0),
          [C, N] = (0, s.useState)(y.length > 1),
          k = t.discord_presence_settings || {
            show_badges: !0,
            show_guild_tag: !0,
            idle_text: ""
          },
          P = {
            "--portfolioSectionGapScaled": "110px",
            "--portfolioModuleMaxWidth": "72rem",
            "--portfolioModuleAudioWidth": "64rem",
            "--portfolioModuleGap18": "18px",
            "--portfolioModuleGap10": "10px",
            "--portfolioModuleGap8": "8px",
            "--portfolioModuleGap7": "7px",
            "--portfolioModuleGap6": "6px",
            "--portfolioModuleGap5": "5px",
            "--portfolioModuleHeadingFont": "36px",
            "--portfolioModuleBodyFont": "16px",
            "--portfolioModuleProjectTitleFont": "34px",
            "--portfolioModuleProjectVisitFont": "18px",
            "--portfolioModuleTagFont": "12px",
            "--portfolioModuleSkillFont": "14px",
            "--portfolioModuleTextCardPadding": "28px",
            "--portfolioModuleProjectPadding": "30px",
            "--portfolioModuleProjectHeight": "300px",
            "--portfolioModuleProjectHeroHeight": "560px",
            "--portfolioModuleTagInset": "12px",
            "--portfolioModuleTagInsetDouble": "24px",
            "--portfolioModuleTagPaddingY": "4px",
            "--portfolioModuleProjectTagDot": "8px",
            "--portfolioModuleProjectTagIcon": "12px",
            "--portfolioModuleSkillIcon": "15px",
            "--portfolioModuleSkillPaddingX": "14px",
            "--portfolioModuleCustomH1": "28px",
            "--portfolioModuleCustomH2": "23px",
            "--portfolioModuleCustomH3": "19px"
          };
        (0, s.useEffect)(() => {
          let e = window.history.scrollRestoration;
          window.history.scrollRestoration = "manual";
          let t = () => window.scrollTo({
            top: 0,
            behavior: "auto"
          });
          t();
          let r = window.requestAnimationFrame(t);
          return window.addEventListener("pageshow", t), () => {
            window.cancelAnimationFrame(r), window.removeEventListener("pageshow", t), window.history.scrollRestoration = e
          }
        }, []);
        let L = (s, y, _ = !1, b = !1) => {
          let j = (0, o.jsx)(tc, {
            module: s,
            index: y,
            userData: e,
            config: t,
            premiumConfig: r,
            presenceInformation: a,
            animationStartClass: i,
            isTemplatePreview: n,
            discordLoading: l,
            discordBadges: c,
            discordPresenceSettings: k,
            profileBorderClass: d,
            profileBorderEffect: u,
            profileBorderEffectEnabled: m,
            audioPlayer: p,
            setAudioData: f,
            audioData: h,
            setAudioPlayer: g,
            audioContainerRef: x,
            setVolume: v,
            showScrollIndicator: _,
            scrollIndicatorVisible: b
          });
          return (0, o.jsx)(tm, {
            index: y,
            animation: r.animation,
            animationStartClass: i,
            children: j
          }, s.id)
        };
        return (0, s.useEffect)(() => {
          if (!_.current) return;
          let e = Array.from(_.current.querySelectorAll(`.${e8().portfolioReveal}`));
          if (e.length <= 1) return;
          let t = window.matchMedia?.("(pointer: coarse)").matches === !0,
            r = null,
            o = null,
            s = !1,
            a = 0,
            i = null,
            n = () => "active" === document.documentElement.getAttribute(tr),
            l = (t = window.scrollY + .5 * (window.innerHeight || 0)) => {
              let r = 0,
                o = 1 / 0;
              for (let s = 0; s < e.length; s++) {
                let a = Math.abs(e[s].offsetTop + .5 * e[s].offsetHeight - t);
                a < o && (o = a, r = s)
              }
              return r
            },
            c = () => {
              var t, r;
              let o = Math.max(window.innerHeight || 1, 1),
                s = Math.max(document.documentElement.scrollHeight - o, 1);
              t = Math.min(Math.max(window.scrollY / s, 0), 1), .003 > Math.abs(b.current - t) || (b.current = t, S(t));
              let a = Math.min((e[1]?.offsetTop ?? 1 / 0) - Math.max(12, .04 * o), Math.max(24, .16 * o));
              r = window.scrollY < a, j.current !== r && (j.current = r, N(r))
            },
            d = e => {
              if (!e) return !0;
              let t = Math.max(window.innerHeight || 1, 1);
              return e.offsetHeight <= 1.03 * t
            },
            u = t => {
              let r = Math.max(0, Math.min(e.length - 1, t)),
                a = e[r].offsetTop,
                i = window.scrollY,
                n = a - i;
              if (2 > Math.abs(n)) return;
              o && (o.stop(), o = null), s = !0;
              let l = Math.min(2.1, Math.max(1.1, 1.1 + .18 * Math.min(Math.abs(n) / Math.max(window.innerHeight || 1, 1), 2.4)));
              o = (0, e5.i)(i, a, {
                duration: l,
                ease: [.16, 1, .3, 1],
                onUpdate: e => {
                  window.scrollTo({
                    top: e,
                    behavior: "auto"
                  }), c()
                },
                onComplete: () => {
                  s = !1, o = null, c()
                }
              })
            },
            m = () => {
              n() || (c(), null !== r && window.clearTimeout(r), r = window.setTimeout(() => {
                if (s) return;
                let t = l();
                if (!d(e[t])) return;
                let r = e[t]?.offsetTop ?? window.scrollY;
                Math.abs(window.scrollY - r) <= Math.max(20, Math.round(.03 * (window.innerHeight || 0))) || u(t)
              }, 150))
            },
            p = t => {
              if (n()) {
                t.preventDefault(), a = 0;
                return
              }
              if (7 > Math.abs(t.deltaY) || (a += t.deltaY, null !== i && window.clearTimeout(i), i = window.setTimeout(() => {
                  a = 0
                }, 150), 72 > Math.abs(a))) return;
              let r = l();
              if (!d(e[r])) {
                a = 0;
                return
              }
              let c = a > 0 ? 1 : -1;
              a = 0, t.preventDefault(), o && (o.stop(), o = null, s = !1), u(r + c)
            },
            f = () => {
              c(), s || u(l())
            },
            h = e => {
              u("number" == typeof e.detail?.targetIndex ? e.detail.targetIndex : 1)
            };
          return (c(), t) ? (window.addEventListener("scroll", c, {
            passive: !0
          }), window.addEventListener("resize", c), () => {
            window.removeEventListener("scroll", c), window.removeEventListener("resize", c)
          }) : (window.addEventListener("scroll", m, {
            passive: !0
          }), window.addEventListener("wheel", p, {
            passive: !1
          }), window.addEventListener("resize", f), window.addEventListener(tt, h), () => {
            window.removeEventListener("scroll", m), window.removeEventListener("wheel", p), window.removeEventListener("resize", f), window.removeEventListener(tt, h), null !== r && (window.clearTimeout(r), r = null), null !== i && (window.clearTimeout(i), i = null), o && (o.stop(), o = null)
          })
        }, [y.length]), (0, o.jsxs)("div", {
          ref: _,
          className: e8().portfolioPage,
          "data-compact-top-audio": "false",
          style: P,
          children: [(0, o.jsx)(tC, {
            mode: "dots",
            sectionCount: y.length,
            progress: w
          }), y[0] && L(y[0], 0, y.length > 1, C), y.length > 1 && (0, o.jsx)("div", {
            className: e8().portfolioSections,
            children: y.slice(1).map((e, t) => (0, o.jsx)(s.Fragment, {
              children: L(e, t + 1)
            }, e.id))
          })]
        })
      }

      function tc({
        module: e,
        index: t,
        userData: r,
        config: s,
        premiumConfig: a,
        presenceInformation: i,
        animationStartClass: n,
        isTemplatePreview: l,
        discordLoading: c,
        discordBadges: d,
        discordPresenceSettings: u,
        profileBorderClass: m,
        profileBorderEffect: p,
        profileBorderEffectEnabled: f,
        audioPlayer: h,
        setAudioData: g,
        audioData: x,
        setAudioPlayer: v,
        audioContainerRef: y,
        setVolume: _,
        showScrollIndicator: b,
        scrollIndicatorVisible: j
      }) {
        if ("hero" === e.type) return (0, o.jsx)(tx, {
          module: e,
          userData: r,
          config: s,
          premiumConfig: a,
          presenceInformation: i,
          isTemplatePreview: l,
          showScrollIndicator: b,
          scrollIndicatorVisible: j
        });
        let w = `${e8().portfolioSection} ${0===t?e8().portfolioTopSection:""}`;
        return "about" === e.type ? (0, o.jsx)("div", {
          className: w,
          children: (0, o.jsx)(tv, {
            module: e,
            config: s,
            premiumConfig: a,
            presenceInformation: i,
            userData: r,
            discordBadges: d,
            discordPresenceSettings: u,
            discordLoading: c,
            profileBorderClass: m,
            profileBorderEffect: p,
            profileBorderEffectEnabled: f
          })
        }) : "projects" === e.type ? (0, o.jsx)("div", {
          className: w,
          children: (0, o.jsx)(tj, {
            module: e,
            config: s,
            profileBorderClass: m,
            profileBorderEffect: p,
            profileBorderEffectEnabled: f
          })
        }) : "skills" === e.type ? (0, o.jsx)("div", {
          className: w,
          children: (0, o.jsx)(ty, {
            module: e,
            config: s,
            profileBorderClass: m,
            profileBorderEffect: p,
            profileBorderEffectEnabled: f
          })
        }) : "audio" === e.type ? x.url && tn(e.settings, x) ? (0, o.jsx)("div", {
          className: e8().audioModule,
          children: (0, o.jsx)(eF, {
            animationStartClass: "",
            audioPlayer: h,
            setAudioData: g,
            audioData: x,
            setAudioPlayer: v,
            audioContainerRef: y,
            currentFont: a.font,
            audioList: s.audio,
            setVolume: _,
            fontSize: a.font_size,
            profileBorderClass: m,
            profileBorderEffect: p,
            revealContent: !0,
            revealOrder: 1,
            lyricsConfig: e.settings
          })
        }) : null : (0, o.jsx)("div", {
          className: w,
          children: (0, o.jsx)(tw, {
            module: e,
            animation: a.animation,
            profileBorderClass: m,
            profileBorderEffect: p,
            profileBorderEffectEnabled: f
          })
        })
      }

      function td({
        as: e = "div",
        className: t,
        profileBorderClass: r,
        profileBorderEffect: s,
        profileBorderEffectEnabled: a,
        children: i,
        style: n,
        ...l
      }) {
        return (0, o.jsxs)(e, {
          className: `${t} ${r}`,
          style: {
            ...n,
            position: a ? "relative" : n?.position
          },
          ...l,
          children: [a && s && (0, o.jsx)(eD, {
            effect: s
          }), i]
        })
      }
      let tu = e => ({
        "--portfolioRevealOrder": e
      });

      function tm({
        children: e,
        index: t,
        animation: r,
        animationStartClass: a
      }) {
        let i = (0, s.useRef)(null),
          n = (0, s.useRef)([]),
          l = (0, s.useRef)(null),
          c = (0, s.useRef)(!1),
          d = (0, e3.I)(),
          u = "unfold" === r || "pop" === r || "fade" === r ? r : "fade",
          m = !!a?.includes("unfoldStart"),
          p = !!a?.includes("scaleFadeStart"),
          f = m ? .12 : p ? .08 : .06,
          h = m ? .04 : p ? .03 : .02;
        return (0, s.useEffect)(() => {
          let e = i.current;
          if (!e) return;
          let r = () => "active" === document.documentElement.getAttribute(tr),
            o = () => Array.from(e.querySelectorAll("[data-reveal-part]"));
          if (0 === o().length) {
            e.dataset.revealActive = "true", e.dataset.revealDone = "true";
            return
          }
          let s = () => {
              null !== l.current && (window.clearTimeout(l.current), l.current = null), n.current.forEach(e => e.stop()), n.current = []
            },
            a = () => {
              for (let t of (s(), e.dataset.revealActive = "false", e.dataset.revealDone = "false", o())) t.style.opacity = "0.001", t.style.pointerEvents = "none", t.style.transformOrigin = "unfold" === u ? "center top" : "", t.style.transform = "pop" === u ? "scale(0.78)" : "unfold" === u ? "translateY(-80px)" : "translateY(34px)"
            },
            m = () => {
              for (let t of (s(), e.dataset.revealActive = "true", e.dataset.revealDone = "true", o())) t.style.opacity = "1", t.style.pointerEvents = "", t.style.transform = "none", t.style.transformOrigin = "";
              c.current = !0
            };
          if (d) {
            if (!r()) return m(), () => s();
            let e = new MutationObserver(() => {
              r() || (m(), e.disconnect())
            });
            return e.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: [tr]
            }), () => {
              e.disconnect(), s()
            }
          }
          a(), c.current = !1;
          let p = e => {
              let t = Number.parseFloat(window.getComputedStyle(e).getPropertyValue("--portfolioRevealOrder"));
              return Number.isFinite(t) ? Math.max(1, t) : 1
            },
            g = () => "pop" === u ? {
              keyframes: {
                opacity: [.001, 1, 1],
                transform: ["scale(0.78)", "scale(1.045)", "scale(1)"]
              },
              options: {
                duration: .64,
                ease: [.18, 1.15, .34, 1],
                times: [0, .64, 1]
              }
            } : "unfold" === u ? {
              keyframes: {
                opacity: [.001, 1],
                transform: ["translateY(-80px)", "translateY(0)"]
              },
              options: {
                duration: .84,
                ease: [.2, .72, .12, 1]
              }
            } : {
              keyframes: {
                opacity: [0, 1],
                transform: ["translateY(34px)", "translateY(0)"]
              },
              options: {
                duration: .76,
                ease: [.2, .7, .2, 1]
              }
            },
            x = (d, m, x) => {
              let v = window.innerHeight || 1,
                y = Math.abs(x.top + .5 * x.height - .5 * v);
              !r() && (m && (d >= .42 || y <= .19 * v) && (() => {
                if (c.current) return;
                s(), e.dataset.revealActive = "true", e.dataset.revealDone = "false";
                let {
                  keyframes: r,
                  options: a
                } = g(), d = 0, m = a.duration;
                for (let e of o()) {
                  e.style.pointerEvents = "none", e.style.transformOrigin = "unfold" === u ? "center top" : "";
                  let o = f + Math.min(t, 4) * h + ("unfold" === u ? .092 : "pop" === u ? .048 : .052) * (p(e) - 1);
                  d = Math.max(d, o), m = Math.max(m, a.duration), n.current.push((0, e5.i)(e, r, {
                    ...a,
                    delay: o
                  }))
                }
                l.current = window.setTimeout(() => {
                  if (i.current && c.current) {
                    for (let t of (e.dataset.revealDone = "true", o())) t.style.pointerEvents = "", t.style.transformOrigin = "";
                    l.current = null
                  }
                }, (d + m) * 1e3 + 40), c.current = !0
              })(), d < .08 && y > .62 * v && c.current && (c.current = !1, a()))
            },
            v = e => {
              if (!c.current || r() || !e.isConnected || "true" === e.getAttribute("data-reveal-late-animated")) return;
              e.setAttribute("data-reveal-late-animated", "true");
              let {
                keyframes: t,
                options: o
              } = g(), s = Math.min(.2, .03 + ("unfold" === u ? .092 : "pop" === u ? .048 : .052) * Math.max(0, p(e) - 1));
              e.style.opacity = "0.001", e.style.pointerEvents = "none", e.style.transformOrigin = "unfold" === u ? "center top" : "", e.style.transform = "pop" === u ? "scale(0.78)" : "unfold" === u ? "translateY(-80px)" : "translateY(34px)", n.current.push((0, e5.i)(e, t, {
                ...o,
                delay: s
              })), window.setTimeout(() => {
                e.isConnected && (e.style.pointerEvents = "", e.style.transformOrigin = "", e.style.opacity = "1", e.style.transform = "none")
              }, (s + o.duration) * 1e3 + 40)
            },
            y = new IntersectionObserver(e => {
              let t = e[0];
              t && x(t.intersectionRatio, t.isIntersecting, t.boundingClientRect)
            }, {
              threshold: [0, .08, .18, .42, .7]
            }),
            _ = new MutationObserver(e => {
              for (let t of e) "childList" === t.type && 0 !== t.addedNodes.length && t.addedNodes.forEach(e => {
                e instanceof HTMLElement && (e.matches("[data-reveal-part]") && v(e), e.querySelectorAll?.("[data-reveal-part]").forEach(e => {
                  e instanceof HTMLElement && v(e)
                }))
              })
            }),
            b = new MutationObserver(() => {
              let t, o, s, a;
              r() || (t = e.getBoundingClientRect(), o = window.innerHeight || 1, s = Math.max(t.top, 0), a = Math.max(0, Math.min(t.bottom, o) - s), x(t.height > 0 ? Math.min(1, a / t.height) : 0, a > 0, t))
            });
          return b.observe(document.documentElement, {
            attributes: !0,
            attributeFilter: [tr]
          }), y.observe(e), _.observe(e, {
            childList: !0,
            subtree: !0
          }), () => {
            y.disconnect(), _.disconnect(), b.disconnect(), s()
          }
        }, [f, t, d, u, h]), (0, o.jsx)("div", {
          ref: i,
          className: e8().portfolioReveal,
          "data-animation": u,
          "data-reveal-active": "false",
          "data-reveal-done": "false",
          children: e
        })
      }

      function tp({
        name: e,
        isMonochrome: t,
        revealOrder: r,
        revealPart: s = "skill-pill"
      }) {
        let a = (0, e9.RU)(e),
          i = (0, e7.h)(a ?? e),
          n = null;
        if (i) {
          let e = t ? "currentColor" : `#${i.hex}`;
          n = (0, o.jsx)("svg", {
            className: e8().skillPillIcon,
            role: "img",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            style: {
              fill: e
            },
            children: (0, o.jsx)("path", {
              d: i.path
            })
          })
        } else a && (n = (0, o.jsx)("span", {
          className: e8().skillPillDot,
          style: {
            background: t ? "currentColor" : a.color
          }
        }));
        return (0, o.jsxs)("span", {
          className: e8().skillPill,
          "data-reveal-part": s,
          style: "number" == typeof r ? tu(r) : void 0,
          children: [n, e]
        })
      }
      let tf = {
          frontend: "Frontend",
          backend: "Backend",
          tools: "Tools",
          design: "Design",
          platforms: "Platforms"
        },
        th = {
          frontend: ["javascript", "typescript", "react", "nextjs", "vue", "nuxt", "svelte", "angular", "solid", "remix", "astro", "qwik", "htmx", "tailwind", "css", "sass", "shadcn", "framer-motion", "three"],
          backend: ["python", "go", "java", "kotlin", "rust", "csharp", "cpp", "c", "ruby", "php", "elixir", "haskell", "scala", "lua", "nodejs", "express", "fastapi", "django", "flask", "rails", "laravel", "nestjs", "hono", "bun", "deno", "spring", "actix", "gin", "postgresql", "mysql", "mongodb", "redis", "sqlite", "supabase", "firebase", "planetscale", "turso", "cassandra", "clickhouse", "graphql", "grpc", "trpc", "prisma", "drizzle", "kafka", "rabbitmq", "nginx"],
          tools: ["git", "github-actions", "docker", "kubernetes", "terraform", "linux", "neovim", "pytorch", "tensorflow", "langchain", "openai", "pandas", "numpy", "wasm"],
          design: ["figma", "blender", "unity", "unreal"],
          platforms: ["aws", "gcp", "azure", "vercel", "cloudflare", "flutter", "react-native", "tauri", "electron"]
        };

      function tg({
        tag: e,
        isMonochrome: t
      }) {
        let r = (0, e9.RU)(e),
          s = (0, e7.h)(r ?? e),
          a = t ? "currentColor" : s ? `#${s.hex}` : r?.color ?? "currentColor";
        return s ? (0, o.jsx)("svg", {
          className: e8().projectTagIcon,
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          style: {
            fill: a
          },
          children: (0, o.jsx)("path", {
            d: s.path
          })
        }) : (0, o.jsx)("span", {
          className: e8().projectTagDot,
          style: {
            background: a
          }
        })
      }

      function tx({
        module: e,
        userData: t,
        config: r,
        premiumConfig: s,
        presenceInformation: a,
        isTemplatePreview: n,
        showScrollIndicator: l,
        scrollIndicatorVisible: c
      }) {
        let d = e.settings || {},
          u = "centered" === d.hero_style ? "centered" : "classic",
          m = f({
            font: s.font,
            fontSize: s.font_size
          }),
          p = "" !== r.display_name ? r.display_name : t.username,
          h = ev(a),
          g = h.avatar || "",
          x = h.avatarDecoration || "",
          v = r.use_discord_avatar && g ? g : r.avatar,
          y = !!(r.discord_avatar_decoration && x),
          _ = !1 !== d.show_avatar && v,
          b = !1 !== d.show_buttons && r.socials.length > 0,
          j = "" !== r.description || 0 !== s.typewriter.length,
          w = !!r.location,
          S = !0 !== s.hide_views,
          C = S || w,
          N = "number" == typeof t.uid ? `UID ${t.uid.toLocaleString("en-US")}` : "UID unavailable",
          k = r.user_badges,
          P = r.custom_badges,
          L = k.length > 0 && k[0] && "string" == typeof k[0],
          A = P.length > 0 && "string" == typeof P[0][0],
          T = k.length > 0 && L || !L && k.some(e => !0 === e.enabled),
          $ = P.length > 0 && A || !A && P.some(e => !0 === e.enabled),
          E = T || $,
          z = s.typewriter_speed ?? 5,
          I = s.typewriter_delete_speed ?? 7,
          B = "unfold" === s.animation || "pop" === s.animation || "fade" === s.animation ? s.animation : "fade",
          M = {
            ...m.username,
            fontSize: m.username.fontSize,
            fontWeight: 700
          },
          W = window.matchMedia?.("(pointer: coarse)").matches,
          D = r.username_effects,
          F = "rgb" === D || "rainbow" === D,
          R = !!D && !F && !["none", "typewriter", "fuzzy", "shuffle"].includes(D),
          U = e8().heroTitlePanel,
          O = (0, o.jsxs)("div", {
            className: `${e8().heroStage} ${!_?e8().heroStageSolo:""}`,
            children: [_ && (0, o.jsx)("div", {
              className: e8().heroIdentity,
              "data-reveal-part": "hero-identity",
              style: tu(2),
              children: (0, o.jsxs)("div", {
                className: i().avatarWrapper,
                children: [y && (0, o.jsx)("img", {
                  src: x,
                  alt: "",
                  className: i().avatarDecorationLayout4
                }), (0, o.jsx)("div", {
                  className: e8().heroAvatarFrame,
                  "data-reveal-part": "hero-avatar",
                  style: tu(2),
                  children: (0, o.jsx)("img", {
                    src: v,
                    alt: `${p} avatar`,
                    className: e8().heroAvatar
                  })
                })]
              })
            }), (0, o.jsxs)("div", {
              className: e8().heroContent,
              children: [(0, o.jsx)("div", {
                className: U,
                "data-reveal-part": "hero-title",
                style: tu(2),
                children: (0, o.jsxs)("div", {
                  className: e8().heroTitleStack,
                  children: [(0, o.jsxs)("div", {
                    className: e8().heroTitleRow,
                    children: [(0, o.jsx)(eo.A, {
                      content: N,
                      offset: 0,
                      pageTooltipStyles: !0,
                      children: "typewriter" === D ? (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("style", {
                          children: `.hero-tw-${u} .Typewriter { font-size: ${M.fontSize}; font-weight: ${M.fontWeight??700}; font-family: ${M.fontFamily??"inherit"}; color: var(--textColor); text-shadow: var(--colorUsernameGlow); }`
                        }), (0, o.jsx)("div", {
                          className: `hero-tw-${u}`,
                          children: (0, o.jsx)(et(), {
                            options: {
                              strings: [p],
                              autoStart: !0,
                              loop: !0,
                              pauseFor: 1e3
                            }
                          })
                        })]
                      }) : "fuzzy" === D || "shuffle" === D ? (0, o.jsx)(eS.A, {
                        username: p,
                        usernameEffect: D,
                        fontSize: M.fontSize,
                        textColor: r.text_color
                      }) : (0, o.jsx)("h1", {
                        className: F ? i().rainbowName : R ? e8().heroTitleEffects : void 0,
                        style: M,
                        children: p
                      })
                    }), E && "classic" === u && (0, o.jsx)("div", {
                      className: e8().heroBadgeContainerInline,
                      children: (0, o.jsx)(es, {
                        config: r,
                        premiumConfig: s,
                        className: e8().heroBadgeRail,
                        carousel: !0,
                        trackClassName: e8().heroBadgeTrack,
                        groupClassName: e8().heroBadgeGroup
                      })
                    })]
                  }), E && "centered" === u && (0, o.jsx)("div", {
                    className: e8().heroBadgeContainerCentered,
                    children: (0, o.jsx)(es, {
                      config: r,
                      premiumConfig: s,
                      className: e8().heroBadgeRail,
                      carousel: !0,
                      trackClassName: e8().heroBadgeTrack,
                      groupClassName: e8().heroBadgeGroup
                    })
                  })]
                })
              }), j && (0, o.jsx)("div", {
                className: e8().heroDescription,
                style: {
                  ...m.description,
                  ...tu(3)
                },
                "data-reveal-part": "hero-description",
                children: s.typewriter_enabled && 0 !== s.typewriter.length ? (0, o.jsx)(et(), {
                  options: {
                    strings: s.typewriter,
                    autoStart: !0,
                    loop: !0,
                    delay: 600 / z,
                    deleteSpeed: 600 / I,
                    pauseFor: 900
                  }
                }) : r.description
              }), b && (0, o.jsx)("div", {
                className: e8().heroActions,
                "data-reveal-part": "hero-actions",
                style: tu(4),
                children: (0, o.jsx)(eh, {
                  socials: r.socials,
                  isMonochrome: r.monochrome,
                  font: s.font,
                  socialGlow: r.social_glow,
                  iconColor: r.icon_color,
                  username: t.username,
                  fontSize: s.font_size,
                  style: {
                    justifyContent: "classic" === u ? "left" : "center",
                    alignItems: "classic" === u ? "flex-start" : "center",
                    marginTop: "classic" === u ? "0" : "30px",
                    width: "classic" === u ? "fit-content" : "100%",
                    maxWidth: "100%"
                  }
                })
              })]
            })]
          });
        return (0, o.jsxs)("div", {
          className: `${e8().heroModule} ${e8().portfolioTopSection}`,
          "data-animation": B,
          "data-hero-style": u,
          children: [s.parallax_animation && !W ? (0, o.jsx)(eK.A, {
            ...te,
            tiltEnable: !0,
            style: {
              width: "100%",
              position: "relative"
            },
            children: O
          }) : O, C && (0, o.jsxs)("div", {
            className: e8().heroBottomMeta,
            children: [S && (0, o.jsx)("div", {
              className: e8().heroBottomMetaItem,
              children: (0, o.jsx)(ew, {
                challengeData: t._gpp_ch,
                username: t.username,
                premiumConfig: s,
                views: r.page_views,
                containerBorderRadius: null,
                isUnfold: !1,
                animationStartClass: "",
                isTemplatePreview: n,
                inline: !0
              })
            }), S && w && (0, o.jsx)("span", {
              className: e8().heroBottomMetaSep,
              children: "|"
            }), w && (0, o.jsx)(eo.A, {
              content: "Location",
              pageTooltipStyles: !0,
              children: (0, o.jsxs)("span", {
                className: e8().heroBottomMetaItem,
                children: [X.A.locationMarker, " ", r.location]
              })
            })]
          }), l && (0, o.jsx)(tS, {
            visible: c
          })]
        })
      }

      function tv({
        module: e,
        config: t,
        premiumConfig: r,
        presenceInformation: s,
        userData: a,
        discordBadges: n,
        discordPresenceSettings: l,
        discordLoading: c,
        profileBorderClass: d,
        profileBorderEffect: u,
        profileBorderEffectEnabled: m
      }) {
        let p = e.settings || {},
          f = (Array.isArray(p.cards) ? p.cards.slice(0, 2) : []).filter(e => {
            if (e?.type === "discord_presence") return "enabled" === t.presence;
            if (e?.type !== "second_tab") return !1;
            let r = tb(e.second_tab_config);
            return r.second_tab_enabled && Object.keys(r.second_tab).length > 0
          }),
          h = Array.isArray(p.tags) ? p.tags.filter(e => "string" == typeof e && e.trim()) : [],
          g = "string" == typeof p.secondary_description ? p.secondary_description : "";
        return (0, o.jsxs)(o.Fragment, {
          children: [(0, o.jsxs)("div", {
            className: e8().sectionHeading,
            "data-align": "left",
            "data-reveal-part": "about-root",
            style: tu(1),
            children: [p.title && (0, o.jsx)("h1", {
              children: p.title
            }), p.description && (0, o.jsx)("p", {
              children: p.description
            })]
          }), g && (0, o.jsx)(tL, {
            children: (0, o.jsx)(td, {
              className: e8().textCard,
              profileBorderClass: d,
              profileBorderEffect: u,
              profileBorderEffectEnabled: m,
              "data-reveal-part": "about-secondary",
              style: tu(2),
              children: (0, o.jsx)("div", {
                className: e8().customContent,
                "data-align": "left",
                "data-link-style": "underline",
                "data-collapsed": "false",
                children: tT(g)
              })
            })
          }), f.length > 0 && (0, o.jsx)("div", {
            className: e8().aboutCards,
            "data-count": f.length,
            children: f.map((e, p) => (0, o.jsx)(td, {
              className: e8().aboutCard,
              profileBorderClass: d,
              profileBorderEffect: u,
              profileBorderEffectEnabled: m,
              children: (0, o.jsx)("div", {
                className: e8().aboutCardContent,
                "data-reveal-part": "about-card-content",
                style: tu(4 + p),
                children: "second_tab" === e.type ? (0, o.jsx)(t_, {
                  card: e,
                  config: t,
                  premiumConfig: r
                }) : (0, o.jsxs)(o.Fragment, {
                  children: [(0, o.jsx)("style", {
                    children: `
                                            .${i().discordActivity} {
                                                width: 100%;
                                                justify-content: space-between;
                                            }`
                  }), (0, o.jsx)(e_, {
                    loading: c,
                    presenceInformation: s,
                    font: r.font,
                    description: t.description,
                    discordUserBadges: n,
                    discordData: a.discord,
                    fontSize: r.font_size,
                    discordPresenceSettings: l
                  })]
                })
              })
            }, p))
          }), h.length > 0 && (0, o.jsx)("div", {
            className: e8().skillsGrid,
            "data-reveal-part": "about-tags",
            style: tu(3),
            children: h.map((e, r) => (0, o.jsx)(tp, {
              name: e,
              isMonochrome: t.monochrome,
              revealOrder: 4 + r,
              revealPart: "about-tag-item"
            }, e))
          })]
        })
      }

      function ty({
        module: e,
        config: t,
        profileBorderClass: r,
        profileBorderEffect: s,
        profileBorderEffectEnabled: a
      }) {
        let i = e.settings || {},
          n = Array.isArray(i.skills) ? i.skills.filter(e => "string" == typeof e && e.trim()) : [];
        if (!i.title && 0 === n.length) return null;
        let l = Object.keys(tf).map(e => ({
          category: e,
          label: tf[e] || e,
          skills: n.filter(t => {
            let r, o;
            return r = (0, e9.RU)(t), o = r?.id || t.toLowerCase(), (Object.keys(th).find(e => th[e].includes(o)) || "tools") === e
          })
        })).filter(e => e.skills.length > 0);
        return (0, o.jsxs)(o.Fragment, {
          children: [(0, o.jsx)("div", {
            "data-reveal-part": "skills-root",
            style: tu(1),
            children: (i.title || i.description) && (0, o.jsxs)("div", {
              className: e8().sectionHeading,
              "data-reveal-part": "skills-heading",
              style: tu(1),
              children: [i.title && (0, o.jsx)("h1", {
                children: i.title
              }), i.description && (0, o.jsx)("p", {
                children: i.description
              })]
            })
          }), n.length > 0 && (0, o.jsx)(td, {
            className: e8().textCard,
            profileBorderClass: r,
            profileBorderEffect: s,
            profileBorderEffectEnabled: a,
            "data-reveal-part": "skills-card",
            style: tu(2),
            children: (0, o.jsx)("div", {
              className: e8().skillsCategoryGrid,
              "data-reveal-part": "skills-grid",
              style: tu(3),
              children: l.map((e, r) => (0, o.jsxs)("div", {
                className: e8().skillCategoryGroup,
                "data-reveal-part": "skills-group",
                style: tu(4 + r),
                children: [(0, o.jsx)("h2", {
                  children: e.label
                }), (0, o.jsx)("div", {
                  className: e8().skillsGrid,
                  "data-layout": "pills",
                  children: e.skills.map((e, r) => (0, o.jsx)(tp, {
                    name: e,
                    isMonochrome: t.monochrome,
                    revealOrder: 6 + r,
                    revealPart: "skills-pill-item"
                  }, e))
                })]
              }, e.category))
            })
          })]
        })
      }

      function t_({
        card: e,
        config: t,
        premiumConfig: r
      }) {
        let s = tb(e.second_tab_config);
        return s.second_tab_enabled && 0 !== Object.keys(s.second_tab).length ? (0, o.jsx)(eA, {
          config: t,
          premiumConfig: {
            ...r,
            second_tab_enabled: !0,
            second_tab: s.second_tab,
            clock_face_style: s.clock_face_style,
            clock_hidden: s.clock_hidden,
            clock_time_format: s.clock_time_format
          }
        }) : null
      }

      function tb(e) {
        let t = e?.second_tab && "object" == typeof e.second_tab ? e.second_tab : {},
          r = Object.keys(t).find(e => ts.has(e)),
          o = r && "string" == typeof t[r] ? t[r].trim() : "",
          s = r && o && function(e, t) {
            if (!ts.has(e)) return !1;
            if ("timezone" === e) try {
              return Intl.DateTimeFormat(void 0, {
                timeZone: t
              }), !0
            } catch {
              return !1
            }
            return ({
              youtube: /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/,
              spotify: /^(?:https?:\/\/)?(?:open\.spotify\.com\/)(?:intl-[a-zA-Z]+\/)?(album|track|playlist|show|episode)[\/:].+/,
              discord: /^(?:https?:\/\/)?(?:www\.)?(?:discord\.gg|discord\.com\/invite)\/[a-zA-Z0-9-]+$/,
              telegram: /^(https?:\/\/)?(www\.)?t\.me\/.+$/,
              roblox: /^(https?:\/\/)?(www\.)?roblox\.com\/users\/\d+\/profile$/,
              github: /^(https?:\/\/)?(www\.)?github\.com\/.+$/,
              lastfm: /^(https?:\/\/)?(www\.)?last\.fm\/user\/[a-zA-Z0-9_-]+$/
            })[e]?.test(t) ?? !1
          }(r, o) ? {
            [r]: o
          } : {};
        return {
          second_tab_enabled: e?.second_tab_enabled !== !1,
          second_tab: s,
          clock_face_style: e?.clock_face_style === "light" ? "light" : "dark",
          clock_hidden: e?.clock_hidden === !0,
          clock_time_format: e?.clock_time_format === "12h" ? "12h" : "24h"
        }
      }

      function tj({
        module: e,
        config: t,
        profileBorderClass: r,
        profileBorderEffect: s,
        profileBorderEffectEnabled: a
      }) {
        let i = e.settings || {},
          n = (Array.isArray(i.projects) ? i.projects : []).filter(e => e.name).slice(0, 4);
        return 0 === n.length ? null : (0, o.jsxs)(o.Fragment, {
          children: [(0, o.jsx)("div", {
            className: e8().sectionHeading,
            "data-reveal-part": "projects-root",
            style: tu(1),
            children: (0, o.jsx)("h1", {
              children: i.title || "Featured projects"
            })
          }), (0, o.jsx)("div", {
            className: e8().projectGrid,
            "data-count": n.length,
            "data-reveal-part": "projects-grid",
            style: tu(2),
            children: n.map((e, i) => {
              let n = tN(e.link),
                l = function(e) {
                  let t = tN(e);
                  if (!t) return "";
                  try {
                    let e = new URL(t);
                    return to.has(e.host) ? e.href : ""
                  } catch {
                    return ""
                  }
                }(e.image),
                c = !!n,
                d = (0, o.jsxs)(o.Fragment, {
                  children: [l && (0, o.jsx)("div", {
                    className: e8().projectImage,
                    style: {
                      backgroundImage: `url("${l}")`
                    }
                  }), (0, o.jsx)("div", {
                    className: e8().projectScrim
                  }), Array.isArray(e.tags) && e.tags.length > 0 && (0, o.jsx)("div", {
                    className: e8().projectTags,
                    children: e.tags.slice(0, 4).map(e => (0, o.jsxs)("span", {
                      className: e8().projectTagPill,
                      children: [(0, o.jsx)(tg, {
                        tag: e,
                        isMonochrome: t.monochrome
                      }), e]
                    }, e))
                  }), (0, o.jsxs)("div", {
                    className: e8().projectContent,
                    children: [(0, o.jsx)("h2", {
                      children: e.name
                    }), e.description && (0, o.jsx)("p", {
                      children: e.description
                    })]
                  }), c && (0, o.jsx)("div", {
                    className: e8().projectVisit,
                    children: "Visit"
                  })]
                });
              return (0, o.jsx)(tL, {
                children: (0, o.jsx)(td, {
                  as: c ? "a" : "div",
                  className: e8().projectCard,
                  href: n || void 0,
                  target: c ? "_blank" : void 0,
                  rel: c ? "noreferrer noopener" : void 0,
                  "data-project-index": i,
                  "data-tag-position": "top_left",
                  "data-text-align": "bottom_left",
                  "data-hover": "visit_overlay",
                  "data-reveal-part": "project-card-item",
                  profileBorderClass: r,
                  profileBorderEffect: s,
                  profileBorderEffectEnabled: a,
                  style: tu(3 + i),
                  children: d
                })
              }, i)
            })
          })]
        })
      }

      function tw({
        module: e,
        animation: t,
        profileBorderClass: r,
        profileBorderEffect: a,
        profileBorderEffectEnabled: i
      }) {
        let n = e.settings || {},
          [l, c] = (0, s.useState)(!1),
          [d, u] = (0, s.useState)(!1),
          [m, p] = (0, s.useState)(!1),
          [f, h] = (0, s.useState)(0),
          [g, x] = (0, s.useState)(0),
          v = (0, s.useRef)(null),
          y = (0, s.useRef)(null),
          _ = "string" == typeof n.content ? n.content : "",
          b = ["center", "right"].includes(n.text_alignment) ? n.text_alignment : "left",
          j = "unfold" === t || "pop" === t || "fade" === t ? t : "fade";
        if ((0, s.useEffect)(() => {
            if (!v.current) {
              p(!1), h(0), x(0);
              return
            }
            let e = v.current,
              t = () => {
                let t = window.getComputedStyle(e),
                  r = 9 * (parseFloat(t.lineHeight) || 20) + 8 * (parseFloat(t.rowGap || t.gap) || 0),
                  o = e.scrollHeight;
                h(r), x(o), p(o > r + 4)
              };
            t();
            let r = new ResizeObserver(t);
            return r.observe(e), window.addEventListener("resize", t), () => {
              r.disconnect(), window.removeEventListener("resize", t)
            }
          }, [_, b]), (0, s.useEffect)(() => () => {
            null !== y.current && (window.clearTimeout(y.current), y.current = null)
          }, []), !n.title && !_) return null;
        let w = Math.max(g, f + 1),
          S = m ? l ? w : f : void 0;
        return (0, o.jsxs)(o.Fragment, {
          children: [n.title && (0, o.jsx)("div", {
            className: e8().sectionHeading,
            "data-reveal-part": "custom-root",
            style: tu(1),
            children: n.title && (0, o.jsx)("h1", {
              children: n.title
            })
          }), _ && (0, o.jsx)(tL, {
            children: (0, o.jsxs)(td, {
              className: e8().textCard,
              profileBorderClass: r,
              profileBorderEffect: a,
              profileBorderEffectEnabled: i,
              "data-reveal-part": "custom-body",
              style: tu(2),
              children: [(0, o.jsx)("div", {
                ref: v,
                className: e8().customContent,
                "data-align": b,
                "data-link-style": "pill",
                "data-collapsible": m ? "true" : "false",
                "data-collapsed": m && !l ? "true" : "false",
                "data-interaction-animation": j,
                "data-toggle-active": d ? "true" : "false",
                style: {
                  "--customCollapsedMaxHeight": `${f}px`,
                  "--customExpandedMaxHeight": `${w}px`,
                  ..."number" == typeof S ? {
                    "--customContentMaxHeight": `${S}px`
                  } : {}
                },
                children: tT(_)
              }), m && (0, o.jsx)("button", {
                type: "button",
                className: e8().readMoreButton,
                onClick: () => {
                  c(e => !e), u(!1), window.requestAnimationFrame(() => {
                    u(!0), null !== y.current && window.clearTimeout(y.current), y.current = window.setTimeout(() => {
                      u(!1), y.current = null
                    }, "unfold" === j ? 700 : "pop" === j ? 520 : 560)
                  })
                },
                "data-reveal-part": "custom-read-more",
                "data-animation": j,
                "data-toggle-active": d ? "true" : "false",
                style: tu(3),
                children: l ? "Show less" : "Read more"
              })]
            })
          })]
        })
      }

      function tS({
        visible: e
      }) {
        return (0, o.jsxs)("button", {
          type: "button",
          className: e8().scrollIndicator,
          "data-visible": e ? "true" : "false",
          onClick: e => {
            e.preventDefault(), window.dispatchEvent(new CustomEvent(tt, {
              detail: {
                targetIndex: 1
              }
            }))
          },
          "data-reveal-part": "scroll-indicator",
          style: tu(6),
          children: [(0, o.jsx)("strong", {
            children: "Scroll for more"
          }), X.A.arrowDown]
        })
      }

      function tC({
        mode: e,
        sectionCount: t,
        progress: r
      }) {
        if ("none" === e || t <= 1) return null;
        if ("dots" === e) {
          let e = Math.min(t - 1, Math.round(r * (t - 1)));
          return (0, o.jsx)("div", {
            className: e8().scrollProgressDots,
            children: Array.from({
              length: t
            }).map((t, r) => (0, o.jsx)("span", {
              "data-active": r === e ? "true" : "false"
            }, r))
          })
        }
        return (0, o.jsx)("div", {
          className: e8().scrollProgressBar,
          children: (0, o.jsx)("span", {
            style: {
              transform: `scaleX(${r})`
            }
          })
        })
      }

      function tN(e) {
        if ("string" != typeof e || !e.trim()) return "";
        try {
          let t = new URL(e.trim());
          return "http:" === t.protocol || "https:" === t.protocol ? t.href : ""
        } catch {
          return ""
        }
      }

      function tk(e) {
        if ("string" != typeof e || !e.trim()) return "";
        try {
          let t = new URL(e.trim());
          return "http:" === t.protocol || "https:" === t.protocol || "mailto:" === t.protocol ? t.href : ""
        } catch {
          return ""
        }
      }

      function tP({
        url: e,
        type: t = "link",
        onClose: r
      }) {
        let s = "email" === t,
          a = s ? e.replace(/^mailto:/i, "") : e;
        return (0, o.jsx)(em.A, {
          opened: !0,
          title: s ? "Open email app" : "Leaving guns.lol",
          onClose: r,
          centered: !0,
          size: "380px",
          children: (0, o.jsxs)("div", {
            className: i().customUrlWarning,
            children: [(0, o.jsx)("h1", {
              children: s ? "Email address" : "External link"
            }), (0, o.jsx)("span", {
              children: a
            }), (0, o.jsxs)("div", {
              className: i().modalButtons,
              children: [(0, o.jsx)("button", {
                type: "button",
                onClick: r,
                children: "Cancel"
              }), (0, o.jsx)("a", {
                href: e,
                target: s ? void 0 : "_blank",
                rel: s ? void 0 : "noreferrer noopener",
                onClick: r,
                children: s ? "Email" : "Visit"
              })]
            })]
          })
        })
      }

      function tL({
        children: e
      }) {
        let [t, r] = (0, s.useState)(null);
        return (0, o.jsxs)("div", {
          onClick: e => {
            let t = e.target.closest("a[href]");
            if (!t) return;
            let o = tk(t.getAttribute("href") || "");
            if (!o) {
              e.preventDefault(), e.stopPropagation();
              return
            }
            if (o.startsWith("mailto:")) {
              e.preventDefault(), e.stopPropagation(), r({
                url: o,
                type: "email"
              });
              return
            }
            let s = tN(o);
            s && (e.preventDefault(), e.stopPropagation(), r({
              url: s,
              type: "link"
            }))
          },
          style: {
            display: "contents"
          },
          children: [e, t && (0, o.jsx)(tP, {
            url: t.url,
            type: t.type,
            onClose: () => r(null)
          })]
        })
      }

      function tA(e) {
        let t, r = [],
          s = /(\[([^\]]+)\]\(([^\s<>")]+)\)|\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`|(https?:\/\/[^\s<>"]+)|(mailto:[^\s<>"]+)|([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}))/gi,
          a = 0;
        for (; null !== (t = s.exec(e));) {
          if (t.index > a && r.push(e.slice(a, t.index)), void 0 !== t[2] && void 0 !== t[3]) {
            let e = tk(t[3]),
              s = e.startsWith("http://") || e.startsWith("https://");
            r.push((0, o.jsx)("a", {
              href: e,
              target: s ? "_blank" : void 0,
              rel: s ? "noreferrer noopener" : void 0,
              children: t[2]
            }, t.index))
          } else if (void 0 !== t[4]) r.push((0, o.jsx)("strong", {
            children: t[4]
          }, t.index));
          else if (void 0 !== t[5]) r.push((0, o.jsx)("em", {
            children: t[5]
          }, t.index));
          else if (void 0 !== t[6]) r.push((0, o.jsx)("code", {
            children: t[6]
          }, t.index));
          else if (void 0 !== t[7]) r.push((0, o.jsx)("a", {
            href: tN(t[7]),
            target: "_blank",
            rel: "noreferrer noopener",
            children: t[7]
          }, t.index));
          else if (void 0 !== t[8]) {
            let e = tk(t[8]);
            r.push((0, o.jsx)("a", {
              href: e,
              children: e.replace(/^mailto:/i, "")
            }, t.index))
          } else if (void 0 !== t[9]) {
            let e = t[9],
              s = tk(`mailto:${e}`);
            r.push((0, o.jsx)("a", {
              href: s,
              children: e
            }, t.index))
          }
          a = t.index + t[0].length
        }
        return a < e.length && r.push(e.slice(a)), r.length > 0 ? r : [e]
      }

      function tT(e) {
        let t = e.split("\n"),
          r = [],
          s = [],
          a = e => {
            0 !== s.length && (r.push((0, o.jsx)("ul", {
              children: s.map((e, t) => (0, o.jsx)("li", {
                children: tA(e)
              }, t))
            }, e)), s = [])
          };
        return t.forEach((e, t) => {
          e.startsWith("- ") || e.startsWith("• ") ? s.push(e.slice(2)) : (a(`list-${t}`), e.startsWith("### ")) ? r.push((0, o.jsx)("h3", {
            children: tA(e.slice(4))
          }, t)) : e.startsWith("## ") ? r.push((0, o.jsx)("h2", {
            children: tA(e.slice(3))
          }, t)) : e.startsWith("# ") ? r.push((0, o.jsx)("h1", {
            children: tA(e.slice(2))
          }, t)) : e.startsWith("> ") ? r.push((0, o.jsx)("blockquote", {
            children: tA(e.slice(2))
          }, t)) : "" === e.trim() ? r.push((0, o.jsx)("br", {}, t)) : r.push((0, o.jsx)("p", {
            children: tA(e)
          }, t))
        }), a("list-end"), r
      }

      function t$({
        presenceInformation: e,
        font: t,
        fontSize: r,
        discordUserBadges: a,
        discordData: i,
        discordPresenceSettings: n,
        animationStartClass: l,
        discordWidgetRef: c,
        loading: d,
        profileBorderClass: u = "",
        profileBorderEffect: m = "shimmer"
      }) {
        let p = {
            0: "Playing",
            1: "Streaming",
            2: "Listening to",
            3: "Watching",
            5: "Competing"
          },
          h = e.activities || [],
          [g, x] = (0, s.useState)(0),
          [v, y] = (0, s.useState)(null),
          [_, b] = (0, s.useState)(!1),
          j = h[g] || h[0],
          w = f({
            font: t,
            fontSize: r
          }),
          S = j?.name === "Spotify",
          C = {
            display: j?.emoji?.startsWith("https://") && j?.type === 4 && !S && "flex",
            alignItems: j?.emoji?.startsWith("https://") && j?.type === 4 && !S && "flex-end"
          },
          N = ev(e),
          k = e.primaryGuild?.hasGuildTag ? e.primaryGuild : N.primaryGuild || {
            hasGuildTag: !1
          },
          P = N.avatar,
          L = N.displayName,
          A = e.status || "unknown",
          T = "unknown" === A ? "offline" : A,
          $ = "not_in_guild" === e.unavailableReason;
        (0, s.useEffect)(() => {
          x(e => e >= h.length ? 0 : e), y(null), b(!1)
        }, [h.length]), (0, s.useEffect)(() => {
          if (h.length <= 1) return;
          let e = window.setInterval(() => {
            x(e => {
              let t = (e + 1) % h.length;
              return y(h[e] || h[0]), b(!0), t
            })
          }, 15e3);
          return () => window.clearInterval(e)
        }, [h.length, g]), (0, s.useEffect)(() => {
          if (!_) return;
          let e = window.setTimeout(() => {
            y(null), b(!1)
          }, 360);
          return () => window.clearTimeout(e)
        }, [_, g]);
        let E = e => {
            if (!e) return null;
            let t = "Spotify" === e.name,
              r = "string" == typeof e.emoji ? e.emoji : "";
            return t ? (0, o.jsxs)(o.Fragment, {
              children: [(0, o.jsxs)(ex.A, {
                children: [(0, o.jsx)("span", {
                  className: e2().highlight,
                  children: p[e.type]
                }), " ", e.details]
              }), e.state && (0, o.jsx)(ex.A, {
                children: `by ${e.state.replace(/;/g,",")}`
              })]
            }) : 4 === e.type ? (0, o.jsxs)(ex.A, {
              contentClassName: r.startsWith("https://") ? e2().discordEmojiText : void 0,
              children: [r.startsWith("https://") ? (0, o.jsx)("img", {
                src: r,
                alt: "Discord Emoji",
                className: e2().discordEmoji
              }) : r && (0, o.jsx)("span", {
                className: e2().defaultEmoji,
                children: r
              }), (0, o.jsx)("span", {
                children: e.state
              })]
            }) : (0, o.jsxs)(o.Fragment, {
              children: [(0, o.jsxs)(ex.A, {
                children: [(0, o.jsx)("span", {
                  className: e2().highlight,
                  children: p[e.type]
                }), " ", e.name]
              }), (0, o.jsx)(ex.A, {
                children: e.details ? e.details : e.state
              })]
            })
          },
          z = e => {
            if (!e || 4 === e.type || !e.image || "{}" === JSON.stringify(e.image)) return null;
            let t = "Spotify" === e.name ? `Listening to ${e.details}${e.state?` by ${e.state.replace(/;/g,",")}`:""}` : `${p[e.type]} ${e.name}`;
            return (0, o.jsx)(eo.A, {
              content: t,
              pageTooltipStyles: !0,
              children: (0, o.jsx)("img", {
                src: e.image,
                alt: ""
              })
            })
          };
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsxs)("div", {
            className: `${e2().discordPresenceWidget} ${l} ${u}`,
            ref: c,
            children: [u && (0, o.jsx)(eD, {
              effect: m
            }), e.success && !$ && j && !d ? (0, o.jsxs)("div", {
              className: e2().discordUserInformation,
              children: [(0, o.jsx)("div", {
                className: e2().discordAvatar,
                children: (0, o.jsxs)("div", {
                  className: e2().discordStatus,
                  children: [P && (0, o.jsx)("img", {
                    src: P,
                    alt: "Discord Avatar"
                  }), (0, o.jsx)("img", {
                    src: `https://assets.guns.lol/${T}.png`,
                    className: e2().discordStatusIcon,
                    alt: ""
                  })]
                })
              }), (0, o.jsxs)("div", {
                className: e2().discordActivity,
                children: [(0, o.jsxs)("div", {
                  className: e2().discordUser,
                  children: [(0, o.jsxs)("div", {
                    className: e2().discordUserDiv,
                    children: [L && (0, o.jsx)("span", {
                      style: w.discordUsername,
                      children: L
                    }), n.show_guild_tag && k?.hasGuildTag && (0, o.jsxs)("div", {
                      className: e2().guildTag,
                      children: [(0, o.jsx)("img", {
                        src: k?.iconUrl,
                        alt: "Guild Tag Icon"
                      }), " ", (0, o.jsx)("span", {
                        children: k?.tag
                      })]
                    }), n.show_badges && (0, o.jsx)("div", {
                      className: e2().discordUserBadges,
                      children: a.map((e, t) => (0, o.jsx)(eo.A, {
                        content: e,
                        pageTooltipStyles: !0,
                        children: (0, o.jsx)("div", {
                          className: e2().discordBadge,
                          children: (0, o.jsx)("img", {
                            src: tU[e],
                            alt: "Discord Badge"
                          })
                        }, t)
                      }, t))
                    })]
                  }), (0, o.jsxs)("div", {
                    className: e2().discordActivityTextStack,
                    children: [v && _ && (0, o.jsx)("h3", {
                      className: `${e2().discordActivityTextLayer} ${e2().discordActivityExit}`,
                      style: w.discordStatus,
                      children: E(v)
                    }), (0, o.jsx)("h3", {
                      className: `${e2().discordActivityTextLayer} ${_?e2().discordActivityEnter:""}`,
                      style: w.discordStatus,
                      children: E(j)
                    }, `activity-text-${g}`)]
                  })]
                }), (0, o.jsx)("div", {
                  className: e2().activityImage,
                  children: (0, o.jsxs)("div", {
                    className: e2().discordActivityImageStack,
                    children: [v && _ && (0, o.jsx)("span", {
                      className: `${e2().discordActivityImageLayer} ${e2().discordActivityExit}`,
                      children: z(v)
                    }), (0, o.jsx)("span", {
                      className: `${e2().discordActivityImageLayer} ${_?e2().discordActivityEnter:""}`,
                      children: z(j)
                    }, `activity-image-${g}`)]
                  })
                })]
              })]
            }) : !e.success || $ || j || d ? d ? (0, o.jsx)("div", {
              className: e2().discordLoading,
              children: (0, o.jsxs)("h1", {
                children: [X.A.discord, " Loading Discord Presence..."]
              })
            }) : (0, o.jsxs)("div", {
              className: e2().discordNotConnected,
              children: [(0, o.jsxs)("h1", {
                style: w.discordUsername,
                children: [X.A.userNotFound, " User Not found"]
              }), i || $ ? (0, o.jsxs)("h3", {
                style: w.discordStatus,
                children: ["Join ", (0, o.jsx)(en(), {
                  href: "https://discord.gg/guns",
                  target: "_blank",
                  children: "discord.gg/guns"
                }), " to display your Discord presence"]
              }) : (0, o.jsxs)("h3", {
                style: w.discordStatus,
                children: ["Please ", (0, o.jsx)(en(), {
                  href: "https://guns.lol/account",
                  target: "_blank",
                  children: "connect"
                }), " your Discord account to display Discord presence"]
              })]
            }) : (0, o.jsxs)("div", {
              className: e2().discordUserInformation,
              children: [(0, o.jsx)("div", {
                className: e2().discordAvatar,
                children: (0, o.jsxs)("div", {
                  className: e2().discordStatus,
                  children: [P && (0, o.jsx)("img", {
                    src: P,
                    alt: "Discord Avatar"
                  }), (0, o.jsx)("img", {
                    src: `https://assets.guns.lol/${T}.png`,
                    className: e2().discordStatusIcon,
                    alt: ""
                  })]
                })
              }), (0, o.jsxs)("div", {
                className: e2().discordActivity,
                children: [(0, o.jsxs)("div", {
                  className: e2().discordUser,
                  children: [(0, o.jsxs)("div", {
                    className: e2().discordUserDiv,
                    children: [L && (0, o.jsx)("span", {
                      style: w.discordUsername,
                      children: L
                    }), n.show_guild_tag && k?.hasGuildTag && (0, o.jsxs)("div", {
                      className: e2().guildTag,
                      children: [(0, o.jsx)("img", {
                        src: k?.iconUrl,
                        alt: "Guild Tag Icon"
                      }), " ", (0, o.jsx)("span", {
                        children: k?.tag
                      })]
                    }), n.show_badges && (0, o.jsx)("div", {
                      className: e2().discordUserBadges,
                      children: a.map((e, t) => (0, o.jsx)(eo.A, {
                        content: e,
                        pageTooltipStyles: !0,
                        children: (0, o.jsx)("div", {
                          className: e2().discordBadge,
                          children: (0, o.jsx)("img", {
                            src: tU[e],
                            alt: "Discord Badge"
                          })
                        }, t)
                      }, t))
                    })]
                  }), (0, o.jsx)("h3", {
                    style: {
                      ...w.discordStatus,
                      ...C
                    },
                    children: "offline" === A || "unknown" === A ? (0, o.jsxs)(ex.A, {
                      contentClassName: e2().offlineText,
                      children: ["last seen ", e.lastSeen ? (0, eg.m)(new Date(1e3 * e.lastSeen)).replace("about ", "") + " ago" : "unknown"]
                    }) : (0, o.jsx)(ex.A, {
                      children: n.idle_text || "currently doing nothing"
                    })
                  })]
                }), (0, o.jsx)("div", {
                  className: e2().activityImage
                })]
              })]
            })]
          })
        })
      }

      function tE() {
        let e = (0, ed.kj)(),
          t = "guns_promo_seen_v1",
          [r, a] = (0, s.useState)(!1),
          [n, l] = (0, s.useState)(!1),
          [c, d] = (0, s.useState)(!1),
          u = (0, s.useRef)(null),
          m = (0, s.useRef)(null);
        (0, s.useEffect)(() => {
          let e = () => d(window.innerWidth <= 540);
          return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, []);
        let p = () => {
          try {
            localStorage.setItem(t, JSON.stringify({
              ts: Date.now()
            }))
          } catch {}
        };
        (0, s.useEffect)(() => {
          if (!(() => {
              try {
                let e = localStorage.getItem(t);
                if (!e) return !1;
                let {
                  ts: r
                } = JSON.parse(e);
                return Date.now() - r < 6912e5
              } catch {
                return !1
              }
            })()) return u.current = window.setTimeout(() => {
            a(!0), m.current = window.setTimeout(() => f(), 15e3)
          }, 2500), () => {
            u.current && clearTimeout(u.current), m.current && clearTimeout(m.current)
          }
        }, []);
        let f = () => {
          n || (l(!0), p(), setTimeout(() => {
            a(!1), l(!1)
          }, 300))
        };
        return r || n ? (0, o.jsxs)(o.Fragment, {
          children: [(0, o.jsx)("div", {
            className: `${i().promoOverlay} ${n?i().fadeOut:""}`
          }), (0, o.jsxs)("div", {
            className: `${i().promoBubble} ${n?i().bubbleOut:""}`,
            children: [(0, o.jsx)("img", {
              src: "https://assets.guns.lol/guns_logo_no_background_cropped.png",
              className: i().promoLogo
            }), (0, o.jsxs)("a", {
              href: "https://guns.lol/register?ref=promo_bubble",
              target: "_blank",
              onClick: p,
              className: i().promoLink,
              children: [(0, o.jsx)("span", {
                className: i().promoTitle,
                children: e("userpage.promo_bubble.title")
              }), (0, o.jsx)("span", {
                className: i().promoSub,
                children: e(c ? "userpage.promo_bubble.cta.mobile" : "userpage.promo_bubble.cta.desktop")
              })]
            }), (0, o.jsx)("button", {
              className: i().promoClose,
              onClick: f,
              children: "✕"
            })]
          })]
        }) : null
      }
      var tz = r(45941);

      function tI({
        templateInfo: e,
        templateAuthorName: t,
        templateData: r,
        textColor: s
      }) {
        let a = (0, ed.kj)(),
          n = a("userpage.template_preview.login_to_preview");
        return (0, o.jsxs)("div", {
          className: i().templatePreviewContainer,
          style: {
            backgroundColor: "var(--templatePreviewContainerBackground)"
          },
          children: [(0, o.jsx)("style", {
            children: `
                    @media (max-width: 600px) {
                        .${i().volumeButton} {
                            display: none;
                        }
                    }
                `
          }), r.error ? (0, o.jsx)("span", {
            className: i().templatePreviewMessage,
            style: {
              color: s
            },
            children: r.error.toLowerCase().includes("unauthorized") ? n : r.error
          }) : e ? (0, o.jsxs)(o.Fragment, {
            children: [e.image && (0, o.jsx)("img", {
              className: i().templatePreviewImage,
              src: e.image,
              alt: "Preview",
              loading: "lazy"
            }), (0, o.jsxs)("div", {
              className: i().templatePreviewDetails,
              children: [(0, o.jsx)("span", {
                className: i().templatePreviewLabel,
                children: a("userpage.template_preview.template_preview")
              }), (0, o.jsx)("span", {
                className: i().templatePreviewName,
                children: e.name
              }), t && (0, o.jsx)("span", {
                className: i().templatePreviewAuthor,
                children: a("userpage.template_preview.template_author", {
                  author: t
                })
              })]
            }), (0, o.jsx)("a", {
              className: i().templatePreviewLink,
              href: `/templates/${r.isUnlisted?"u/":""}${r.templateId}`,
              target: "_blank",
              rel: "noreferrer",
              children: a("userpage.template_preview.show_template")
            })]
          }) : (0, o.jsx)("span", {
            className: i().templatePreviewMessage,
            style: {
              color: s
            },
            children: a("userpage.template_preview.loading_template")
          })]
        })
      }
      var tB = r(51047),
        tM = r.n(tB);
      let tW = e => new(eO())().splitGraphemes(e),
        tD = (e, t) => {
          let r = parseInt(e = e.replace(/^#/, ""), 16),
            o = Math.max(0, Math.min(1, t));
          return `rgba(${r>>16&255}, ${r>>8&255}, ${255&r}, ${o})`
        };

      function tF() {
        let e = navigator.userAgent.toLowerCase();
        return /mobile|iphone|ipod|android.*mobile/.test(e) ? "mobile" : /ipad|tablet|android(?!.*mobile)/.test(e) ? "tablet" : "desktop"
      }
      async function tR(e, t, r, o) {
        if (o) return;
        let s = await fetch("https://guns.lol/api/analytics/record", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              username: e,
              event: r,
              linkId: t,
              referrer: document.referrer,
              deviceType: tF()
            })
          }),
          a = await s.json();
        a.error && console.error("Error recording analytics:", a.error)
      }
      let tU = {
        "Discord Staff": "https://cdn.discordapp.com/badge-icons/5e74e9b61934fc1f67c65515d1f7e60d.png",
        "Partnered Server Owner": "https://cdn.discordapp.com/badge-icons/3f9748e53446a137a052f3454e2de41e.png",
        "Moderator Programs Alumni": "https://cdn.discordapp.com/badge-icons/fee1624003e2fee35cb398e125dc479b.png",
        "HypeSquad Events Member": "https://cdn.discordapp.com/badge-icons/bf01d1073931f921909045f3a39fd264.png",
        "HypeSquad Bravery": "https://cdn.discordapp.com/badge-icons/8a88d63823d8a71cd5e390baa45efa02.png",
        "HypeSquad Brilliance": "https://cdn.discordapp.com/badge-icons/011940fd013da3f7fb926e4a1cd2e618.png",
        "HypeSquad Balance": "https://cdn.discordapp.com/badge-icons/3aa41de486fa12454c3761e8e223442e.png",
        "Bug Hunter Level 1": "https://cdn.discordapp.com/badge-icons/2717692c7dca7289b35297368a940dd0.png",
        "Bug Hunter Level 2": "https://cdn.discordapp.com/badge-icons/848f79194d4be5ff5f81505cbd0ce1e6.png",
        "Active Developer": "https://cdn.discordapp.com/badge-icons/6bdc42827a38498929a4920da12695d9.png",
        "Early Verified Bot Developer": "https://cdn.discordapp.com/badge-icons/6df5892e0f35b051f8b61eace34f4967.png",
        "Early Nitro Supporter": "https://cdn.discordapp.com/badge-icons/7060786766c9c840eb3019e725d2b358.png",
        "Early Supporter": "https://cdn.discordapp.com/badge-icons/7060786766c9c840eb3019e725d2b358.png",
        "Discord Nitro": "https://cdn.discordapp.com/badge-icons/2ba85e8026a8614b640c2837bcdfe21b.png",
        "Server Booster": "https://cdn.discordapp.com/badge-icons/72bed924410c304dbe3d00a6e593ff59.png"
      };

      function tO({
        data: e
      }) {
        let t = (0, eQ.useRouter)(),
          r = (0, eQ.useSearchParams)(),
          [a, l] = (0, s.useState)({
            templatePreview: !1,
            templateId: "",
            error: null,
            isUnlisted: !1,
            templateInfo: null
          }),
          [d, u] = (0, s.useState)({}),
          [m, p] = (0, s.useState)(!1),
          h = !!(e?.deletion?.scheduledForDeletion && !e?.deletion?.banDeletion),
          g = decodeURIComponent((0, eQ.useParams)().username),
          [x, v] = (0, s.useState)(!1),
          [y, _] = (0, s.useState)({
            volume: 100,
            muted: !1
          }),
          b = e.config?.premium?.metadata?.favicon;
        e.alias && e.redirect && (0, eQ.redirect)(e.redirect);
        let [j, w] = (0, s.useState)(e.config ?? tz.hR), [S, C] = (0, s.useState)(j.premium), [N, k] = (0, s.useState)({
          playing: !1,
          currentTime: 0,
          duration: 0,
          ref: null
        }), [P, L] = (0, s.useState)({
          url: "",
          title: "",
          cover: "",
          id: ""
        }), A = (0, s.useRef)(null), T = (0, s.useRef)(null), $ = (0, s.useRef)(null), E = (0, s.useRef)(null), z = (0, s.useRef)(null), I = f({
          font: S.font,
          fontSize: S.font_size
        }), B = j.user_badges, M = e.discord?.user_badges ? B.includes("server_booster") || B.find(e => "server_booster" === e.name) ? [...e.discord.user_badges, "Server Booster"] : e.discord.user_badges : [], W = j.discord_presence_settings || {
          show_badges: !0,
          show_guild_tag: !0,
          idle_text: ""
        }, D = e.discord ? {
          id: ey(e.discord.id),
          username: e.discord.username,
          user_badges: e.discord.user_badges || []
        } : null, F = j.text_color, R = S.border_opacity ?? .3, U = tD(S.border_color, R), O = S.border_style ?? "static", H = "dashed" === O ? "dashed" : "solid", G = `${S.border_width}px ${H} ${U}`, V = `2px solid ${tD(S.border_color,R)}`, q = ["shimmer", "pulse"].includes(O) ? O : null, Y = S.border_enabled && !!q, Q = Y ? i().shimmerProfileBorder : "", K = ev(d), ee = j.use_discord_avatar && e.discord ? K.avatar : j.avatar, et = "simplistic" === S.layout ? {
          justifyContent: "initial"
        } : "sleek" === S.layout && ee ? {
          paddingTop: "100px"
        } : {}, er = "portfolio" === S.layout ? S.portfolio_border_radius ?? S.border_radius : S.border_radius, eo = {
          "--presenceUsernameColor": F,
          "--presenceStatusColor": tD(F, .7),
          "--presenceContainerBackground": j.swap_colors ? tD(j.color, .2) : tD(F, .07),
          "--presenceContainerBorder": j.swap_colors ? `2px solid ${tD(j.color,.1)}` : `2px solid ${tD(F,.05)}`,
          "--discordServerMembers": tD(F, .6),
          "--secondTabBackground": j.swap_colors ? tD(j.color, .2) : tD(F, .07),
          "--secondTabBorder": j.swap_colors ? `2px solid ${tD(j.color,.1)}` : `2px solid ${tD(F,.05)}`,
          "--discordMissingIcon": tD(F, .25),
          "--modernLayoutSeperator": tD(F, .12),
          "--modernLayoutSeperatorBorder": tD(F, .12),
          "--discordAvatarBorder": `2px solid ${tD(j.color,.15)}`,
          "--badgeContainerBackground": j.swap_colors ? tD(j.color, .2) : tD(F, .08),
          "--badgeContainerBorder": `2px solid ${tD(j.swap_colors?j.color:F,.04)}`,
          "--userBadge": {
            default: "20.5px",
            modern: "18px",
            simplistic: "20.5px",
            sleek: "20px",
            portfolio: "20px"
          } [S.layout],
          "--textColor": F,
          "--textColorDarker": tD(F, .5),
          "--iconColor": j.icon_color,
          "--backgroundColor": j.bg_color,
          "--joinStatus": tD(F, .65),
          "--audioPlayerBar": tD(F, .35),
          "--avatarBorder": S.border_enabled ? V : `2px solid ${tD(j.color,.4)}`,
          "--containerColor": tD(j.color, j.opacity),
          "--containerBlur": `${j.blur}px`,
          "--containerGradient": j.profile_gradient && `linear-gradient(25deg, ${tD(j.gradient_1,j.opacity)}, ${tD(j.gradient_2,j.opacity)})`,
          "--containerBackgroundImage": j.profile_gradient && `linear-gradient(25deg, ${tD(j.gradient_1,j.opacity)}, ${tD(j.gradient_2,j.opacity)})`,
          "--containerBorder": S.border_enabled && (Y ? "none" : G),
          "--containerBackgroundClip": "border-box",
          "--containerBackgroundOrigin": "border-box",
          "--profileBorderWidth": `${S.border_width}px`,
          "--profileBorderColor": U,
          "--containerRadius": `${er}px`,
          "--containerWidth": {
            default: "40rem",
            modern: "44rem",
            simplistic: "35.5rem",
            sleek: "40rem",
            portfolio: "64rem"
          } [S.layout],
          "--containerPadding": {
            default: "35px 15px",
            modern: "26px",
            simplistic: "35px 15px",
            sleek: "25px",
            portfolio: "26px"
          } [S.layout],
          "--volumeBackgroundcolor": tD(j.color, 0 !== j.opacity ? j.opacity : .2),
          "--volumeBorder": `2px solid ${tD(j.color,0!==j.opacity?j.opacity-.1*j.opacity:.05)}`,
          "--colorUsernameGlow": j.username_glow && `0px 0px 16.5px ${F}`,
          "--usernameEffects": (() => {
            let e = j.username_effects;
            if (!(!e || ["rgb", "rainbow", "none", "typewriter", "fuzzy", "shuffle"].includes(e))) return `url(https://assets.guns.lol/${e.startsWith("sparkle_")?e:`sparkle_${e}`}.gif)`
          })(),
          "--buttonBackground": tD(F, .22),
          "--buttonBorder": `2px solid ${tD(F,.12)}`,
          "--buttonRadius": `${S.button_border_radius}px`,
          "--buttonAlign": S.text_align,
          "--buttonBackgroundHover": tD(F, .32),
          "--buttonBorderHover": `2px solid ${tD(F,.25)}`,
          "--buttonUrlColor": tD(F, .65),
          "--buttonShadow": S.button_shadow && `${tD(F,.22)} 0px 0px 15px`,
          "--profileViewsContainerBorder": `2px solid ${U}`,
          "--templatePreviewContainerBackground": tD(j.color, .4),
          "--platformTextColor": tD(F, .4),
          "--secondTabWidgetDescription": tD(F, .6),
          "--audioIconBackground": tD(F, .2),
          "--progessBarFull": tD(F, .3),
          "--progessBarPlaying": F,
          "--controlButtonsOther": tD(F, .5),
          "--controlButtonPlaying": F,
          "--controlTextColor": tD(F, .7),
          "--modernLayoutBottomLeftDivider": tD(F, .14),
          "--sleekLayoutTopRightDivider": tD(F, .14)
        }, es = e.premium ? "unfold" === S.animation ? i().unfoldStart : "fade" === S.animation ? i().fadeUpStart : "pop" === S.animation ? i().scaleFadeStart : i().fadeUpStart : i().fadeUpStart, ea = e.premium ? "unfold" === S.animation ? i().unfold : "fade" === S.animation ? i().fadeUp : "pop" === S.animation ? i().scaleFade : i().fadeUp : i().fadeUp, ei = {
          modern: `${i().userContainer} ${es} ${Q}`,
          default: `${i().userContainer} ${es} ${Q}`,
          simplistic: `${i().userContainerLayout3} ${es}`,
          sleek: `${i().userContainerLayout4} ${es} ${Q}`,
          portfolio: `${i().userContainer} ${es} ${Q}`
        }, en = a.templateInfo, el = en?.user_information?.username;
        (0, s.useEffect)(() => {
          var t;
          let r, o;
          e.success && !e.ban && j.animated_title && (t = "" !== j.display_name ? j.display_name : e.username, r = 0, o = !0, setInterval(() => {
            r === t.length && (o = !1), 0 === r && (o = !0);
            let e = 0 === (r = o ? r + 1 : r - 1) ? "" : t.slice(0, r);
            document.title = "@" + e
          }, 380)), ed || ep(j.url) || (ea === i().fadeUp ? setTimeout(function() {
            $.current && $.current.classList.add(i().fadeUp), E.current && E.current?.classList.add(i().fadeUp), z.current && z.current?.classList.add(i().fadeUp)
          }, 350) : ea === i().unfold ? document.querySelectorAll(`.${i().unfoldStart}`).forEach((e, t) => {
            setTimeout(() => {
              e.classList.add(i().unfold)
            }, 300 * t)
          }) : ea === i().scaleFade && setTimeout(function() {
            $.current && $.current.classList.add(i().scaleFade), E.current && E.current?.classList.add(i().scaleFade), z.current && z.current?.classList.add(i().scaleFade)
          }, 350))
        }, [r, j]), (0, s.useEffect)(() => {
          let e = navigator.userAgent.toLowerCase();
          v(/iphone|ipod|android.*mobile|windows phone|blackberry|bb10/.test(e) || /ipad|tablet|android(?!.*mobile)/.test(e) || navigator.maxTouchPoints > 1 && /macintosh/.test(e))
        }, []);
        let ec = "string" == typeof j.audio,
          [ed, eu] = (0, s.useState)(ec ? "" !== j.audio : j.audio.length > 0),
          em = () => {
            let e = !y.muted,
              t = N.ref;
            0 === y.volume && y.muted ? (_({
              ...y,
              muted: !1,
              volume: 100
            }), t && (t.muted = !1, t.volume = .25), !ed && A.current && (A.current.muted = !1, A.current.volume = .25)) : (_({
              ...y,
              muted: e
            }), t && (t.muted = e, e || (t.volume = y.volume / 100 * .25)), !ed && A.current && (A.current.muted = e, e || (A.current.volume = y.volume / 100 * .25)))
          },
          ep = e => {
            for (let t of [".mp4", ".mov", ".avi", ".m4v", ".webm", ".mkv"])
              if (e.endsWith(t)) return !0;
            return !1
          };
        return (0, s.useEffect)(() => {
          let o = r.get("templatePreview"),
            s = r.get("unlisted") || "false",
            a = r.get("templateId");
          o && !a || !o && a ? t.push(`/${g}`) : "true" === o && a ? (async () => {
            try {
              let t = await fetch(`https://guns.lol/api/users/templatePreview/${a}?unlisted=${s}`, {
                  method: "POST"
                }),
                r = await t.json(),
                o = r.error ? null : {
                  id: r.id,
                  name: r.name,
                  image: r.image,
                  premium_only: r.premium_only,
                  favorites: r.favorites,
                  times_used: r.times_used,
                  timestamp: r.timestamp,
                  tags: r.tags,
                  user_information: r.user_information
                };
              if (l({
                  templatePreview: !0,
                  templateId: String(a),
                  error: r.error ?? null,
                  isUnlisted: "true" === s,
                  templateInfo: o
                }), r.error) return;
              let i = r.config || {},
                n = r.premium || {};
              w(e => ({
                ...e,
                ...i
              })), e.premium && Object.keys(n).length > 0 && C(e => ({
                ...e,
                ...n
              }));
              let c = i?.audio;
              "string" == typeof c ? eu("" !== c) : Array.isArray(c) && eu(c.length > 0)
            } catch (e) {
              console.error("Error fetching template preview:", e), l({
                templatePreview: !0,
                templateId: a || "",
                error: "Unable to load template preview.",
                isUnlisted: "true" === s,
                templateInfo: null
              })
            }
          })() : l(e => e.templatePreview ? {
            templatePreview: !1,
            templateId: "",
            error: null,
            isUnlisted: !1,
            templateInfo: null
          } : e)
        }, [r, t, g, e.premium]), (0, s.useEffect)(() => {
          let t = async t => {
            let r = ey(e.discord.id);
            if (!r) return void p(!1);
            let o = await fetch("https://guns.lol/api/service/discord", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  type: t,
                  discordId: r,
                  fallbackIdentity: D
                })
              }),
              s = await o.json();
            o.ok ? u(s) : console.error(`Error fetching Discord ${t}:`, s.error), p(!1)
          };
          e.discord && "enabled" === j.presence && !e.ban && e.verified ? (p(!0), t("presence")) : e.discord && j.use_discord_avatar && !e.ban && e.verified && t("avatar")
        }, [e.discord?.id, j.presence, j.use_discord_avatar, e.ban, e.verified]), (0, o.jsxs)(o.Fragment, {
          children: [(0, o.jsx)("style", {
            children: `
                html {
                   direction: ltr;    
                }
                `
          }), b && "" !== b && (0, o.jsx)("link", {
            rel: "icon",
            href: b,
            sizes: "any"
          }), e.success && !e.ban && e.verified && !h ? (0, o.jsxs)(o.Fragment, {
            children: [!e.premium && !a.templatePreview && (0, o.jsx)(tE, {}), (0, o.jsx)(n, {
              backgroundUrl: j.url,
              audio: j.audio,
              shuffleAudios: j.shuffle_audios,
              videoTagRef: A,
              audioTagRef: T,
              audioData: P,
              setAudioData: L
            }), (ed || ep(j.url)) && (0, o.jsx)(c, {
              videoTagRef: A,
              audioTagRef: T,
              clickToEnterText: "" === S.page_enter_text ? "click to enter..." : S.page_enter_text,
              userFont: I,
              userContainerRef: $,
              animationClass: ea,
              setAudioPlayer: k,
              audioContainerRef: E,
              discordWidgetRef: z
            }), (0, o.jsx)(Z, {
              backgroundEffects: j.background_effects,
              backgroundEffectsColor: j.background_effects_color,
              cursorEffects: S.cursor_effects,
              cursorEffectsColor: S.effects_color,
              textColor: F,
              backgroundColor: j.bg_color,
              cursorUrl: j.custom_cursor
            }), (0, o.jsx)(J.A, {
              font: S.font,
              letterSpacing: S.font_letter_spacing
            }), (0, o.jsx)("div", {
              className: i().backgroundColor,
              style: {
                backgroundColor: j.bg_color
              }
            }), (0, o.jsxs)("div", {
              style: eo,
              children: [j.volume_control && (ep(j.url) || ed) && !x && (0, o.jsxs)("div", {
                className: i().volumeButton,
                style: {
                  zIndex: "portfolio" === S.layout ? "2" : "1"
                },
                children: [y.muted ? (0, o.jsx)("span", {
                  onClick: em,
                  children: X.A.muted
                }) : (0, o.jsx)("span", {
                  onClick: em,
                  children: X.A.unmuted
                }), (0, o.jsxs)("div", {
                  className: i().volumeSlider,
                  children: [(0, o.jsx)("style", {
                    children: `
                                        .${tM().tooltip} {
                                            display: none!important;
                                        }
                                        .${tM().track} {
                                                background: var(--textColorDarker);
                                            }
                                        .${tM().progress} {
                                            background-color: var(--textColor)
                                        }
                                        .${tM().thumb} {
                                            display: none!important;
                                        }
                                        .${tM().sliderShell} {
                                            padding: 0!important;
                                            --touch-target-height: 0px!important;
                                        }
                                        `
                  }), (0, o.jsx)(e0.A, {
                    value: y.muted ? 0 : Math.round(y.volume),
                    onChangeFunction: e => {
                      let t = 0 === e,
                        r = N.ref;
                      _({
                        volume: e,
                        muted: t
                      }), r && (r.volume = e / 100 * .25, r.muted = t), !ed && A.current && (A.current.volume = e / 100 * .25, A.current.muted = t)
                    },
                    step: 1,
                    max: 100,
                    min: 0
                  })]
                })]
              }), (0, o.jsx)(eS.A, {
                username: e.username
              }), a.templatePreview && (0, o.jsx)(tI, {
                templateInfo: a.templateInfo,
                templateAuthorName: el || "Unknown",
                templateData: a,
                textColor: S.text_color
              }), (0, o.jsx)("div", {
                className: i().mainContainer,
                children: "portfolio" === S.layout ? (0, o.jsxs)(o.Fragment, {
                  children: [(0, o.jsx)(tl, {
                    userData: e,
                    config: j,
                    premiumConfig: S,
                    presenceInformation: d,
                    animationStartClass: es,
                    isTemplatePreview: a.templatePreview,
                    discordLoading: m,
                    discordBadges: M,
                    profileBorderClass: Q,
                    profileBorderEffect: q,
                    profileBorderEffectEnabled: Y,
                    audioPlayer: N,
                    setAudioData: L,
                    audioData: P,
                    setAudioPlayer: k,
                    audioContainerRef: E,
                    setVolume: _
                  }), (0, o.jsx)("style", {
                    children: `
                                            body, html {
                                                scrollbar-width: none;
                                                -ms-overflow-style: none;
                                            }

                                            body::-webkit-scrollbar,
                                            html::-webkit-scrollbar {
                                                display: none;
                                            }
                                        `
                  })]
                }) : (0, o.jsxs)("div", {
                  className: i().userContainerWrapper,
                  style: et,
                  children: ["simplistic" === S.layout && (0, o.jsx)("div", {
                    className: i().profileViewsContainer,
                    children: (0, o.jsx)(ew, {
                      challengeData: e._gpp_ch,
                      username: e.username,
                      premiumConfig: S,
                      views: j.page_views,
                      containerBorderRadius: S.border_radius,
                      isUnfold: es === i().unfoldStart,
                      animationStartClass: es,
                      isTemplatePreview: a.templatePreview
                    })
                  }), S.parallax_animation ? (0, o.jsxs)(eK.A, {
                    ...{
                      tiltEnable: !x,
                      transitionSpeed: 700,
                      perspective: 1e3,
                      tiltMaxAngleX: 10,
                      tiltMaxAngleY: 10
                    },
                    style: {
                      position: "relative",
                      width: "100%",
                      alignItems: "center",
                      maxWidth: "var(--containerWidth)",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: "15px",
                      zIndex: 1
                    },
                    children: [(0, o.jsxs)("div", {
                      className: ei[S.layout],
                      style: {
                        position: Y ? "relative" : "initial"
                      },
                      ref: $,
                      children: [Y && q && (0, o.jsx)(eD, {
                        effect: q
                      }), "default" === S.layout ? (0, o.jsx)(eC, {
                        userData: e,
                        config: j,
                        premiumConfig: S,
                        presenceInformation: d,
                        animationStartClass: es,
                        isTemplatePreview: a.templatePreview,
                        discordLoading: m
                      }) : "modern" === S.layout ? (0, o.jsx)(eT, {
                        userData: e,
                        config: j,
                        premiumConfig: S,
                        presenceInformation: d,
                        animationStartClass: es,
                        isTemplatePreview: a.templatePreview,
                        discordLoading: m
                      }) : "simplistic" === S.layout ? (0, o.jsx)(eR, {
                        userData: e,
                        config: j,
                        premiumConfig: S,
                        presenceInformation: d,
                        animationStartClass: es,
                        setAudioData: L,
                        audioData: P,
                        audioPlayer: N,
                        setAudioPlayer: k,
                        audioContainerRef: E,
                        setVolume: _,
                        profileBorderClass: Q,
                        profileBorderEffect: q
                      }) : (0, o.jsx)(e4, {
                        userData: e,
                        config: j,
                        premiumConfig: S,
                        presenceInformation: d,
                        animationStartClass: es,
                        isTemplatePreview: a.templatePreview
                      })]
                    }), "enabled" === j.presence && "sleek" === S.layout && (0, o.jsx)(t$, {
                      loading: m,
                      presenceInformation: d,
                      font: S.font,
                      discordUserBadges: M,
                      discordData: e.discord,
                      fontSize: S.font_size,
                      animationStartClass: es,
                      discordWidgetRef: z,
                      discordPresenceSettings: W,
                      profileBorderClass: Q,
                      profileBorderEffect: q
                    }), j.audio_player && "" !== P.url && "simplistic" !== S.layout && (0, o.jsx)(eF, {
                      animationStartClass: es,
                      audioPlayer: N,
                      setAudioData: L,
                      audioData: P,
                      setAudioPlayer: k,
                      audioContainerRef: E,
                      currentFont: S.font,
                      audioList: j.audio,
                      setVolume: _,
                      fontSize: S.font_size,
                      profileBorderClass: Q,
                      profileBorderEffect: q
                    })]
                  }) : (0, o.jsxs)("div", {
                    className: i().usernameContainerFlex,
                    style: {
                      position: "relative",
                      zIndex: 1
                    },
                    children: [(0, o.jsxs)("div", {
                      className: ei[S.layout],
                      ref: $,
                      children: [Y && q && (0, o.jsx)(eD, {
                        effect: q
                      }), "default" === S.layout ? (0, o.jsx)(eC, {
                        userData: e,
                        config: j,
                        premiumConfig: S,
                        presenceInformation: d,
                        animationStartClass: es,
                        isTemplatePreview: a.templatePreview,
                        discordLoading: m
                      }) : "modern" === S.layout ? (0, o.jsx)(eT, {
                        userData: e,
                        config: j,
                        premiumConfig: S,
                        presenceInformation: d,
                        animationStartClass: es,
                        isTemplatePreview: a.templatePreview,
                        discordLoading: m
                      }) : "simplistic" === S.layout ? (0, o.jsx)(eR, {
                        userData: e,
                        config: j,
                        premiumConfig: S,
                        presenceInformation: d,
                        animationStartClass: es,
                        setAudioData: L,
                        audioData: P,
                        audioPlayer: N,
                        setAudioPlayer: k,
                        audioContainerRef: E,
                        setVolume: _,
                        profileBorderClass: Q,
                        profileBorderEffect: q
                      }) : (0, o.jsx)(e4, {
                        userData: e,
                        config: j,
                        premiumConfig: S,
                        presenceInformation: d,
                        animationStartClass: es,
                        isTemplatePreview: a.templatePreview
                      })]
                    }), "enabled" === j.presence && "sleek" === S.layout && (0, o.jsx)(t$, {
                      loading: m,
                      presenceInformation: d,
                      font: S.font,
                      discordUserBadges: M,
                      discordData: e.discord,
                      fontSize: S.font_size,
                      animationStartClass: es,
                      discordWidgetRef: z,
                      discordPresenceSettings: W,
                      profileBorderClass: Q,
                      profileBorderEffect: q
                    }), j.audio_player && "" !== P.url && "simplistic" !== S.layout && (0, o.jsx)(eF, {
                      animationStartClass: es,
                      audioPlayer: N,
                      setAudioData: L,
                      audioData: P,
                      setAudioPlayer: k,
                      audioContainerRef: E,
                      currentFont: S.font,
                      audioList: j.audio,
                      setVolume: _,
                      fontSize: S.font_size,
                      profileBorderClass: Q,
                      profileBorderEffect: q
                    })]
                  })]
                })
              })]
            })]
          }) : e.error?.toLowerCase() === "user not found" ? (0, o.jsx)(eq, {
            username: g,
            sessionData: e.session
          }) : h ? (0, o.jsx)(eJ, {}) : e.error ? (0, o.jsx)(eY, {}) : !0 === e.ban ? (0, o.jsx)(eZ, {
            reason: e.ban_reason
          }) : !e.verified && (0, o.jsx)(eX, {})]
        })
      }
    },
    27212: e => {
      e.exports = {
        portfolioPage: "userPortfolioLayout_portfolioPage__fEj6G",
        portfolioSections: "userPortfolioLayout_portfolioSections__LiyrU",
        portfolioReveal: "userPortfolioLayout_portfolioReveal__QOdD5",
        portfolioIntroStack: "userPortfolioLayout_portfolioIntroStack__LJotx",
        portfolioTopSection: "userPortfolioLayout_portfolioTopSection__JBYdI",
        heroModule: "userPortfolioLayout_heroModule__6s_La",
        portfolioSection: "userPortfolioLayout_portfolioSection__Dj55G",
        heroStage: "userPortfolioLayout_heroStage__gLhgu",
        heroStageSolo: "userPortfolioLayout_heroStageSolo__XXDpj",
        heroIdentity: "userPortfolioLayout_heroIdentity__fK3hj",
        heroAvatarFrame: "userPortfolioLayout_heroAvatarFrame__5QFcb",
        heroAvatar: "userPortfolioLayout_heroAvatar__YWQCR",
        heroTitlePanel: "userPortfolioLayout_heroTitlePanel__5kFEo",
        heroDescription: "userPortfolioLayout_heroDescription__YZUtU",
        heroContent: "userPortfolioLayout_heroContent__g0PA1",
        heroTitleStack: "userPortfolioLayout_heroTitleStack__ELzKh",
        heroTitleRow: "userPortfolioLayout_heroTitleRow__s0rEV",
        heroBadgeContainerInline: "userPortfolioLayout_heroBadgeContainerInline__txCnM",
        heroBadgeRail: "userPortfolioLayout_heroBadgeRail__vrvRW",
        heroBadgeTrack: "userPortfolioLayout_heroBadgeTrack__wNpVX",
        heroBadgeGroup: "userPortfolioLayout_heroBadgeGroup__6yrd_",
        heroBadgeRailLoop: "userPortfolioLayout_heroBadgeRailLoop__tAKxK",
        heroBadgeContainerCentered: "userPortfolioLayout_heroBadgeContainerCentered__AoY3n",
        heroActions: "userPortfolioLayout_heroActions__wdm3Q",
        heroBottomMeta: "userPortfolioLayout_heroBottomMeta__irvco",
        heroBottomMetaSep: "userPortfolioLayout_heroBottomMetaSep__HHFcL",
        heroBottomMetaItem: "userPortfolioLayout_heroBottomMetaItem__k0r_r",
        heroTitleEffects: "userPortfolioLayout_heroTitleEffects__HXw2P",
        audioModule: "userPortfolioLayout_audioModule__8YjAu",
        sectionHeading: "userPortfolioLayout_sectionHeading__labPJ",
        textCard: "userPortfolioLayout_textCard__3z1zP",
        aboutCard: "userPortfolioLayout_aboutCard__zg5mT",
        aboutCards: "userPortfolioLayout_aboutCards__P8iAU",
        aboutCardContent: "userPortfolioLayout_aboutCardContent__ZPr4I",
        projectGrid: "userPortfolioLayout_projectGrid__mlvP7",
        projectCard: "userPortfolioLayout_projectCard__h8O_m",
        projectImage: "userPortfolioLayout_projectImage__7YCI5",
        projectScrim: "userPortfolioLayout_projectScrim__Wqc4M",
        projectTags: "userPortfolioLayout_projectTags__uJn45",
        projectTagPill: "userPortfolioLayout_projectTagPill__omq2q",
        projectTagDot: "userPortfolioLayout_projectTagDot__Y4ylZ",
        projectTagIcon: "userPortfolioLayout_projectTagIcon__mne5w",
        projectContent: "userPortfolioLayout_projectContent__pEgio",
        projectVisit: "userPortfolioLayout_projectVisit__Io1zI",
        skillsGrid: "userPortfolioLayout_skillsGrid__Ka3LW",
        skillPill: "userPortfolioLayout_skillPill__e9LP_",
        skillsCategoryGrid: "userPortfolioLayout_skillsCategoryGrid__ESWLr",
        skillCategoryGroup: "userPortfolioLayout_skillCategoryGroup__7DqVP",
        skillPillDot: "userPortfolioLayout_skillPillDot__Yjqfo",
        skillPillIcon: "userPortfolioLayout_skillPillIcon__MBrOu",
        customContent: "userPortfolioLayout_customContent__eUZBw",
        readMoreButton: "userPortfolioLayout_readMoreButton__l9E60",
        customReadMoreFadePulse: "userPortfolioLayout_customReadMoreFadePulse__bZ7y7",
        customReadMorePopPulse: "userPortfolioLayout_customReadMorePopPulse__63ZuF",
        customReadMoreUnfoldPulse: "userPortfolioLayout_customReadMoreUnfoldPulse__kQX2m",
        scrollProgressBar: "userPortfolioLayout_scrollProgressBar__fbgfM",
        scrollProgressDots: "userPortfolioLayout_scrollProgressDots__xuvRG",
        customEmbed: "userPortfolioLayout_customEmbed__j70j7",
        scrollIndicator: "userPortfolioLayout_scrollIndicator__YXxS3",
        portfolioScrollCue: "userPortfolioLayout_portfolioScrollCue__WE0oj"
      }
    },
    28485: (e, t, r) => {
      "use strict";
      r.d(t, {
        Fb: () => n,
        Uy: () => i,
        V$: () => o,
        vp: () => a
      });
      let o = {
          snapchat: "Snapchat",
          gitlab: "GitLab",
          patreon: "Patreon",
          youtube: "YouTube",
          discord: "Discord",
          instagram: "Instagram",
          tiktok: "TikTok",
          x: "X",
          telegram: "Telegram",
          soundcloud: "SoundCloud",
          buymeacoffee: "Buy Me a Coffee",
          "ko-fi": "Ko-fi",
          onlyfans: "OnlyFans",
          paypal: "PayPal",
          github: "GitHub",
          roblox: "Roblox",
          cashapp: "CashApp",
          twitch: "Twitch",
          namemc: "NameMC",
          linkedin: "LinkedIn",
          reddit: "Reddit",
          steam: "Steam",
          kick: "Kick",
          pinterest: "Pinterest",
          lastfm: "LastFM",
          facebook: "Facebook",
          payhip: "Payhip",
          spotify: "Spotify",
          bitcoin: "Bitcoin",
          eth: "Ethereum",
          monero: "Monero",
          ltc: "Litecoin",
          litecoin: "Litecoin",
          solana: "Solana",
          xrp: "XRP",
          customUrl: "Custom URL",
          ethereum: "Ethereum",
          custom_url: "Custom URL",
          email: "Email",
          threads: "Threads",
          vk: "VK",
          signal: "Signal",
          applemusic: "Apple Music",
          venmo: "Venmo",
          playstation: "PlayStation",
          xbox: "Xbox",
          tellonym: "Tellonym",
          bluesky: "Bluesky"
        },
        s = {
          playstation: {
            key: "dashboard.links.placeholders.playstation",
            fallback: "PlayStation Username"
          }
        };

      function a(e, t) {
        let r = s[e];
        if (!r) return "...";
        let o = t(r.key),
          a = "string" == typeof o ? o : r.fallback;
        return a === r.key ? r.fallback : a
      }
      let i = {
          snapchat: "snapchat.com/add/",
          gitlab: "gitlab.com/",
          patreon: "patreon.com/",
          youtube: "youtube.com/",
          onlyfans: "onlyfans.com/",
          discord: "discord.com/",
          instagram: "instagram.com/",
          tiktok: "tiktok.com/",
          x: "x.com/",
          buymeacoffee: "buymeacoffee.com/",
          "ko-fi": "ko-fi.com/",
          telegram: "t.me/",
          soundcloud: "soundcloud.com/",
          paypal: "paypal.me/",
          github: "github.com/",
          namemc: "namemc.com/",
          roblox: "roblox.com/",
          cashapp: "cash.app/$",
          twitch: "twitch.tv/",
          linkedin: "linkedin.com/",
          reddit: "reddit.com/",
          steam: "steamcommunity.com/id/",
          kick: "kick.com/",
          pinterest: "pinterest.com/",
          lastfm: "last.fm/user/",
          facebook: "facebook.com/",
          payhip: "payhip.com/",
          spotify: "open.spotify.com/",
          bitcoin: "",
          eth: "",
          ltc: "",
          monero: "",
          solana: "",
          email: "",
          xrp: "",
          custom_url: "https://",
          threads: "threads.com/@",
          vk: "vk.com/",
          signal: "signal.me/#eu/",
          applemusic: "music.apple.com/",
          venmo: "venmo.com/",
          playstation: "",
          xbox: "xbox.com/play/user/",
          tellonym: "tellonym.me/",
          bluesky: "bsky.app/profile/"
        },
        n = {
          snapchat: 178,
          gitlab: 120,
          patreon: 136,
          youtube: 138,
          discord: 134,
          instagram: 151,
          onlyfans: 139,
          tiktok: 120,
          x: 87,
          telegram: 77,
          soundcloud: 163,
          paypal: 120,
          github: 126,
          roblox: 125,
          cashapp: 121,
          buymeacoffee: 182,
          "ko-fi": 112,
          twitch: 105,
          linkedin: 136,
          namemc: 141,
          reddit: 122,
          steam: 222,
          kick: 108,
          pinterest: 143,
          lastfm: 127,
          facebook: 147,
          payhip: 130,
          spotify: 168,
          bitcoin: 0,
          eth: 0,
          ltc: 0,
          solana: 0,
          xrp: 0,
          email: 0,
          monero: 0,
          custom_url: 90,
          threads: 150,
          vk: 96,
          signal: 148,
          applemusic: 166,
          venmo: 128,
          playstation: 0,
          xbox: 184,
          tellonym: 132,
          bluesky: 159
        }
    },
    42789: () => {},
    50703: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => n
      });
      var o = r(95155),
        s = r(12115),
        a = r(5684),
        i = r.n(a);

      function n({
        as: e = "span",
        className: t,
        contentClassName: r,
        children: a,
        style: n,
        title: l
      }) {
        let c = (0, s.useRef)(null),
          d = (0, s.useRef)(null),
          [u, m] = (0, s.useState)(0);
        (0, s.useEffect)(() => {
          let e = c.current,
            t = d.current;
          if (!e || !t) return;
          let r = 0,
            o = !0,
            s = () => {
              cancelAnimationFrame(r), r = requestAnimationFrame(() => {
                if (!o) return;
                let r = Math.ceil(t.scrollWidth - e.clientWidth);
                m(r > 1 ? r : 0)
              })
            };
          s();
          let a = "undefined" != typeof ResizeObserver ? new ResizeObserver(s) : null;
          return a?.observe(e), a?.observe(t), window.addEventListener("resize", s), document.fonts?.ready.then(s), () => {
            o = !1, cancelAnimationFrame(r), a?.disconnect(), window.removeEventListener("resize", s)
          }
        }, [a, n]);
        let p = u > 0 ? {
          "--overflow-text-distance": `-${u}px`,
          "--overflow-text-duration": `${Math.min(Math.max(u/24+4.5,5.5),12)}s`
        } : void 0;
        return (0, o.jsx)(e, {
          ref: c,
          className: `${i().overflowText}${t?` ${t}`:""}`,
          style: n,
          title: l,
          children: (0, o.jsx)("span", {
            ref: d,
            className: `${i().overflowTextContent}${u>0?` ${i().isScrollable}`:""}${r?` ${r}`:""}`,
            style: p,
            children: a
          })
        })
      }
    },
    61861: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => u
      });
      var o = r(95155),
        s = r(12115);
      let a = ({
        children: e,
        fontSize: t = "clamp(2rem, 8vw, 8rem)",
        fontWeight: r = 500,
        fontFamily: a = "inherit",
        color: i = "#fff",
        enableHover: n = !0,
        baseIntensity: l = .18,
        hoverIntensity: c = .5,
        marginBottom: d = "0px"
      }) => {
        let u = (0, s.useRef)(null);
        return (0, s.useEffect)(() => {
          let o, m = !1,
            p = u.current;
          if (p) return (async () => {
            let u;
            if (document.fonts?.ready && await document.fonts.ready, m) return;
            let f = p.getContext("2d");
            if (!f) return;
            let h = "inherit" === a ? window.getComputedStyle(p).fontFamily || "sans-serif" : a,
              g = "number" == typeof t ? `${t}px` : t;
            if ("number" == typeof t) u = t;
            else {
              let e = document.createElement("span");
              e.style.fontSize = t, document.body.appendChild(e), u = parseFloat(window.getComputedStyle(e).fontSize), document.body.removeChild(e)
            }
            let x = s.Children.toArray(e).join(""),
              v = document.createElement("canvas"),
              y = v.getContext("2d");
            if (!y) return;
            y.font = `${r} ${g} ${h}`, y.textBaseline = "alphabetic";
            let _ = y.measureText(x),
              b = _.actualBoundingBoxLeft ?? 0,
              j = _.actualBoundingBoxRight ?? _.width,
              w = _.actualBoundingBoxAscent ?? u,
              S = _.actualBoundingBoxDescent ?? .2 * u,
              C = Math.ceil(b + j),
              N = Math.ceil(w + S),
              k = C + 10;
            v.width = k, v.height = N;
            y.font = `${r} ${g} ${h}`, y.textBaseline = "alphabetic", y.fillStyle = i, y.fillText(x, 5 - b, w), p.width = k + 0, p.height = N + 0, p.style.marginLeft = "-5px", p.style.marginBottom = d, f.translate(0, 0);
            let P = 5,
              L = 5 + C,
              A = 0 + N,
              T = !1,
              $ = () => {
                if (m) return;
                f.clearRect(-30, -30, k + 60, N + 60);
                let e = T ? c : l;
                for (let t = 0; t < N; t++) {
                  let r = Math.floor(e * (Math.random() - .5) * 30);
                  f.drawImage(v, 0, t, k, 1, r, t, k, 1)
                }
                o = window.requestAnimationFrame($)
              };
            $();
            let E = (e, t) => e >= P && e <= L && t >= 0 && t <= A,
              z = e => {
                if (!n) return;
                let t = p.getBoundingClientRect();
                T = E(e.clientX - t.left, e.clientY - t.top)
              },
              I = () => {
                T = !1
              },
              B = e => {
                if (!n) return;
                e.preventDefault();
                let t = p.getBoundingClientRect(),
                  r = e.touches[0];
                T = E(r.clientX - t.left, r.clientY - t.top)
              },
              M = () => {
                T = !1
              };
            n && (p.addEventListener("mousemove", z), p.addEventListener("mouseleave", I), p.addEventListener("touchmove", B, {
              passive: !1
            }), p.addEventListener("touchend", M)), p.cleanupFuzzyText = () => {
              window.cancelAnimationFrame(o), n && (p.removeEventListener("mousemove", z), p.removeEventListener("mouseleave", I), p.removeEventListener("touchmove", B), p.removeEventListener("touchend", M))
            }
          })(), () => {
            m = !0, window.cancelAnimationFrame(o), p && p.cleanupFuzzyText && p.cleanupFuzzyText()
          }
        }, [e, t, r, a, i, n, l, c]), (0, o.jsx)("canvas", {
          ref: u
        })
      };
      var i = r(45911),
        n = r(63018),
        l = r(68014),
        c = r(98638);
      r(78881), i.os.registerPlugin(n.u, l.A, c.L);
      let d = ({
        text: e,
        className: t = "",
        style: r = {},
        shuffleDirection: o = "right",
        duration: a = .35,
        maxDelay: d = 0,
        ease: u = "power3.out",
        threshold: m = .1,
        rootMargin: p = "-100px",
        tag: f = "p",
        textAlign: h = "center",
        onShuffleComplete: g,
        shuffleTimes: x = 1,
        animationMode: v = "evenodd",
        loop: y = !1,
        loopDelay: _ = 0,
        stagger: b = .03,
        scrambleCharset: j = "",
        colorFrom: w,
        colorTo: S,
        triggerOnce: C = !0,
        respectReducedMotion: N = !0,
        triggerOnHover: k = !0
      }) => {
        let P = (0, s.useRef)(null),
          [L, A] = (0, s.useState)(!1),
          [T, $] = (0, s.useState)(!1),
          E = (0, s.useRef)(null),
          z = (0, s.useRef)([]),
          I = (0, s.useRef)(null),
          B = (0, s.useRef)(!1),
          M = (0, s.useRef)(null);
        (0, s.useEffect)(() => {
          "fonts" in document ? "loaded" === document.fonts.status ? A(!0) : document.fonts.ready.then(() => A(!0)) : A(!0)
        }, []), (0, c.L)(() => {
          if (!P.current || !e || !L) return;
          if (N && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return void g?.();
          let t = P.current,
            r = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(p || ""),
            s = r ? parseFloat(r[1]) : 0,
            c = r && r[2] || "px",
            f = 0 === s ? "" : s < 0 ? `-=${Math.abs(s)}${c}` : `+=${s}${c}`,
            h = `top ${(1-m)*100}%${f}`,
            A = () => {
              M.current && P.current && (P.current.removeEventListener("mouseenter", M.current), M.current = null)
            },
            T = () => {
              I.current && (I.current.kill(), I.current = null), z.current.length && (z.current.forEach(e => {
                let t = e.firstElementChild,
                  r = t?.querySelector('[data-orig="1"]');
                r && e.parentNode && e.parentNode.replaceChild(r, e)
              }), z.current = []);
              try {
                E.current?.revert()
              } catch {}
              E.current = null, B.current = !1
            },
            W = () => {
              T(), E.current = new l.A(t, {
                type: "chars",
                charsClass: "shuffle-char",
                wordsClass: "shuffle-word",
                linesClass: "shuffle-line",
                smartWrap: !0,
                reduceWhiteSpace: !1
              });
              let e = E.current.chars || [];
              z.current = [];
              let r = Math.max(1, Math.floor(x)),
                s = e => e.charAt(Math.floor(Math.random() * e.length)) || "";
              e.forEach(e => {
                let t = e.parentElement;
                if (!t) return;
                var a = e.getBoundingClientRect().width;
                if (!(a += Math.floor((parseFloat(getComputedStyle(e).fontSize) - 20) / 2))) return;
                let n = document.createElement("span");
                Object.assign(n.style, {
                  display: "inline-block",
                  overflow: "hidden",
                  width: a + "px",
                  verticalAlign: "baseline"
                });
                let l = document.createElement("span");
                Object.assign(l.style, {
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  willChange: "transform"
                }), t.insertBefore(n, e), n.appendChild(l);
                let c = e.cloneNode(!0);
                Object.assign(c.style, {
                  display: "inline-block",
                  width: a + "px",
                  textAlign: "center"
                }), e.setAttribute("data-orig", "1"), Object.assign(e.style, {
                  display: "inline-block",
                  width: a + "px",
                  textAlign: "center"
                }), l.appendChild(c);
                for (let t = 0; t < r; t++) {
                  let t = e.cloneNode(!0);
                  j && (t.textContent = s(j)), Object.assign(t.style, {
                    display: "inline-block",
                    width: a + "px",
                    textAlign: "center"
                  }), l.appendChild(t)
                }
                l.appendChild(e);
                let d = r + 1,
                  u = 0,
                  m = -d * a;
                if ("right" === o) {
                  let e = l.firstElementChild,
                    t = l.lastElementChild;
                  t && l.insertBefore(t, l.firstChild), e && l.appendChild(e), u = -d * a, m = 0
                }
                i.os.set(l, {
                  x: u,
                  force3D: !0
                }), w && (l.style.color = w), l.setAttribute("data-final-x", String(m)), l.setAttribute("data-start-x", String(u)), z.current.push(n)
              })
            },
            D = () => {
              j && z.current.forEach(e => {
                let t = e.firstElementChild;
                if (!t) return;
                let r = Array.from(t.children);
                for (let e = 1; e < r.length - 1; e++) r[e].textContent = j.charAt(Math.floor(Math.random() * j.length))
              })
            },
            F = () => {
              let e = z.current.map(e => e.firstElementChild);
              if (!e.length) return;
              B.current = !0;
              let t = i.os.timeline({
                  smoothChildTiming: !0,
                  repeat: y ? -1 : 0,
                  repeatDelay: y ? _ : 0,
                  onRepeat: () => {
                    j && D(), i.os.set(e, {
                      x: (e, t) => parseFloat(t.getAttribute("data-start-x") || "0")
                    }), g?.()
                  },
                  onComplete: () => {
                    B.current = !1, y || (z.current.forEach(e => {
                      let t = e.firstElementChild;
                      if (!t) return;
                      let r = t.querySelector('[data-orig="1"]');
                      r && (t.replaceChildren(r), t.style.transform = "none", t.style.willChange = "auto")
                    }), S && i.os.set(e, {
                      color: S
                    }), g?.(), R())
                  }
                }),
                r = (e, r) => {
                  t.to(e, {
                    x: (e, t) => parseFloat(t.getAttribute("data-final-x") || "0"),
                    duration: a,
                    ease: u,
                    force3D: !0,
                    stagger: "evenodd" === v ? b : 0
                  }, r), w && S && t.to(e, {
                    color: S,
                    duration: a,
                    ease: u
                  }, r)
                };
              if ("evenodd" === v) {
                let t = e.filter((e, t) => t % 2 == 1),
                  o = e.filter((e, t) => t % 2 == 0),
                  s = a + Math.max(0, t.length - 1) * b,
                  i = t.length ? .7 * s : 0;
                t.length && r(t, 0), o.length && r(o, i)
              } else e.forEach(e => {
                let r = Math.random() * d;
                t.to(e, {
                  x: parseFloat(e.getAttribute("data-final-x") || "0"),
                  duration: a,
                  ease: u,
                  force3D: !0
                }, r), w && S && t.fromTo(e, {
                  color: w
                }, {
                  color: S,
                  duration: a,
                  ease: u
                }, r)
              });
              I.current = t
            },
            R = () => {
              if (!k || !P.current) return;
              A();
              let e = () => {
                B.current || (W(), j && D(), F())
              };
              M.current = e, P.current.addEventListener("mouseenter", e)
            },
            U = n.u.create({
              trigger: t,
              start: h,
              once: C,
              onEnter: () => {
                W(), j && D(), F(), R(), $(!0)
              }
            });
          return () => {
            U.kill(), A(), T(), $(!1)
          }
        }, {
          dependencies: [e, a, d, u, m, p, L, o, x, v, y, _, b, j, w, S, C, N, k],
          scope: P
        });
        let W = {
            textAlign: h,
            ...r
          },
          D = `shuffle-parent ${T?"is-ready":""} ${t}`;
        return s.createElement(f || "p", {
          ref: P,
          className: D,
          style: W
        }, e)
      };

      function u({
        username: e,
        usernameEffect: t,
        textColor: r,
        fontSize: s,
        marginBottom: i
      }) {
        return (0, o.jsx)(o.Fragment, {
          children: "fuzzy" === t ? (0, o.jsx)(a, {
            baseIntensity: .15,
            enableHover: !1,
            color: r,
            fontSize: s || "25px",
            marginBottom: i,
            children: e
          }) : "shuffle" === t && (0, o.jsx)(d, {
            style: {
              color: r || "var(--textColor)",
              fontSize: s || "25px",
              textTransform: "none",
              margin: 0,
              marginBottom: i || 0
            },
            tag: "p",
            text: e,
            shuffleDirection: "right",
            duration: .35,
            animationMode: "evenodd",
            shuffleTimes: 1,
            ease: "power3.out",
            stagger: .03,
            threshold: .1,
            triggerOnce: !0,
            triggerOnHover: !1,
            respectReducedMotion: !1,
            onShuffleComplete: void 0,
            colorFrom: void 0,
            colorTo: void 0,
            loop: !0
          })
        })
      }
    },
    62799: e => {
      e.exports = {
        userInformation: "userLayout1_userInformation__GMpFu",
        avatar: "userLayout1_avatar__qnP1r",
        userDescription: "userLayout1_userDescription__ZjN4w",
        userDescriptionUsername: "userLayout1_userDescriptionUsername__ynCxB",
        userDescriptionText: "userLayout1_userDescriptionText__grrjO",
        usernameCursor: "userLayout1_usernameCursor__Iwq_D",
        badgeContainerWrapper: "userLayout1_badgeContainerWrapper__MV2I1",
        banner: "userLayout1_banner__gDnXO",
        adjustBanner: "userLayout1_adjustBanner__ZkAJ8",
        socialsWrapper: "userLayout1_socialsWrapper__9yWdO"
      }
    },
    64944: e => {
      e.exports = {
        userInformation: "userLayout4_userInformation__jLiFz",
        usernameWrapper: "userLayout4_usernameWrapper__oQeKy",
        avatar: "userLayout4_avatar__zJ0K1",
        userDescriptionUsername: "userLayout4_userDescriptionUsername__2Dozf",
        userDescriptionText: "userLayout4_userDescriptionText__iEEap",
        usernameCursor: "userLayout4_usernameCursor__fvSqj",
        userDescription: "userLayout4_userDescription__EzbhR",
        topRightWrapper: "userLayout4_topRightWrapper__Tluww",
        topRightDivider: "userLayout4_topRightDivider__PFEua",
        socialsWrapper: "userLayout4_socialsWrapper__vdg_N",
        discordPresenceWidget: "userLayout4_discordPresenceWidget__2Gmku",
        discordAvatar: "userLayout4_discordAvatar__xmyv3",
        discordStatus: "userLayout4_discordStatus__RlUNo",
        discordStatusIcon: "userLayout4_discordStatusIcon__uJ_7V",
        discordUserInformation: "userLayout4_discordUserInformation__u2dc6",
        discordActivity: "userLayout4_discordActivity__GXUZH",
        discordActivityTextStack: "userLayout4_discordActivityTextStack__xCJT1",
        discordActivityImageStack: "userLayout4_discordActivityImageStack__wgg6K",
        discordActivityTextLayer: "userLayout4_discordActivityTextLayer__Omyey",
        discordActivityImageLayer: "userLayout4_discordActivityImageLayer__ww0Bx",
        discordActivityEnter: "userLayout4_discordActivityEnter__50dEy",
        discordActivityFadeIn: "userLayout4_discordActivityFadeIn__aqgpj",
        discordActivityExit: "userLayout4_discordActivityExit__zQsBy",
        discordActivityFadeOut: "userLayout4_discordActivityFadeOut__or0wo",
        discordUser: "userLayout4_discordUser__lJQt1",
        discordUserDiv: "userLayout4_discordUserDiv__ZOqcn",
        discordUserBadges: "userLayout4_discordUserBadges__JCVZU",
        highlight: "userLayout4_highlight__VoQ7w",
        activityImage: "userLayout4_activityImage__kst04",
        discordBadge: "userLayout4_discordBadge__FKeSw",
        userProfileSvg: "userLayout4_userProfileSvg__S5Q8a",
        discordNotConnected: "userLayout4_discordNotConnected__q0TyD",
        offlineText: "userLayout4_offlineText__TvoP2",
        avatarWrapper: "userLayout4_avatarWrapper__2_G3s",
        discordEmoji: "userLayout4_discordEmoji__AnKAu",
        discordEmojiText: "userLayout4_discordEmojiText__j4ZEp",
        defaultEmoji: "userLayout4_defaultEmoji__pN158",
        discordLoading: "userLayout4_discordLoading__mCw5b",
        guildTag: "userLayout4_guildTag__PygER"
      }
    },
    78881: () => {},
    82413: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => a,
        k: () => s
      });
      var o = r(12115);
      let s = {
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

      function a({
        font: e,
        letterSpacing: t
      }) {
        let r = {
          1: "-0.5px",
          2: null,
          3: "1.5px"
        };
        return (0, o.useEffect)(() => {
          let o = document.head;
          if ("object" == typeof e) {
            let s = e.url;
            new FontFace("USERFONT", `url(${s})`).load().then(e => {
              document.fonts.add(e), document.body.style.fontFamily = "USERFONT, sans-serif";
              let s = document.createElement("style");
              s.innerHTML = `
                    button, input, select, textarea, span, a {
                        font-family: USERFONT, sans-serif;
                        font-size-adjust: initial;

                    }
                `, o.appendChild(s);
              let a = t ? r[t] : null;
              a && (document.body.style.letterSpacing = a)
            }).catch(e => {
              console.error("Failed to load font:", e)
            })
          } else {
            let t = document.createElement("link");
            switch (t.rel = "stylesheet", t.dataset.font = e, e) {
              case "firacode":
                t.href = "https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap";
                break;
              case "poppins":
                t.href = "https://fonts.googleapis.com/css2?family=Poppins&display=swap";
                break;
              case "array":
                t.href = "https://api.fontshare.com/v2/css?f[]=array@400&display=swap";
                break;
              case "drippy":
                t.href = "https://fonts.cdnfonts.com/css/were-beast-2";
                break;
              case "minecraft":
                t.href = "https://fonts.cdnfonts.com/css/minecraftia";
                break;
              case "outfit":
                t.href = "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap";
                break;
              case "chillax":
                t.href = "https://api.fontshare.com/v2/css?f[]=chillax@500&display=swap";
                break;
              case "velocity":
                t.href = "https://api.fontshare.com/v2/css?f[]=panchang@500&display=swap";
                break;
              case "technor":
                t.href = "https://api.fontshare.com/v2/css?f[]=technor@400&display=swap";
                break;
              case "jetbrains_mono":
                t.href = "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital@0;1&display=swap";
                break;
              case "silkscreen":
                t.href = "https://fonts.googleapis.com/css2?family=Silkscreen&display=swap";
                break;
              case "parkinsans":
                t.href = "https://fonts.googleapis.com/css2?family=Parkinsans:wght@500&display=swap";
                break;
              default:
                t.href = ""
            }
            t.href && o.appendChild(t);
            let r = document.createElement("style");
            return r.dataset.font = e, r.innerHTML = `
                body, * {
                    font-family: ${s[e]||"sans-serif"} !important;
                }
            `, o.appendChild(r), () => {
              t.parentNode && o.removeChild(t), r.parentNode && o.removeChild(r)
            }
          }
        }, [e]), null
      }
    },
    96173: () => {}
  }
]);