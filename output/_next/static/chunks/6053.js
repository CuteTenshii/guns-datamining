(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6053], {
    1825: () => {},
    5684: e => {
      e.exports = {
        overflowText: "GUNS__0a-c73bda7f-ec73c2af-ec6abbe5",
        overflowTextContent: "GUNS__29-07f9604e-f4d8e0d9-ad473a5c",
        isScrollable: "GUNS__79-2afeb800-bb50c375-1f18c0a2",
        overflowTextPan: "GUNS__ca-92bb5fe1-ffe7fbdf-6ec087a4"
      }
    },
    13653: e => {
      e.exports = {
        userInformation: "GUNS__4c-f83e5e59-7471bf67-d7f39f9d",
        avatar: "GUNS__c6-ccd69eb9-1fdb9f72-38d34a26",
        username: "GUNS__46-8dde1872-21d811f6-4ec068e0",
        description: "GUNS__01-1dcc02ba-bbac8429-5cb40070",
        usernameCursor: "GUNS__e2-7f9218e9-512f52cb-b367062d",
        userDescription: "GUNS__ea-07d5a8d7-9bdf85db-86abf8e2",
        badgeContainerWrapper: "GUNS__d1-b9ee22f6-dbb58761-ceb30f78",
        socialWrapper: "GUNS__ad-87a65d93-fdeac2cd-f86a15e2",
        buttonWrapper: "GUNS__23-17a14775-7842addf-3fbc1ced",
        userButtons: "GUNS__15-8feb2272-739a2e45-4a61177a",
        button: "GUNS__83-57f3e152-2ef0d410-943c253d",
        buttonShowUrl: "GUNS__3c-b9c665dc-304204fd-0af0a9ac",
        buttonInformationWrapper: "GUNS__4b-3a3640a8-fab6bba7-99f5da35",
        buttonIcon: "GUNS__b5-09cb1743-d6738b24-50389eba",
        buttonIconWrapper: "GUNS__e5-ef4cb1e7-14659fb6-b9b1cf63",
        audioPlayerWrapper: "GUNS__93-c8bc3ba6-dcd93e08-cabc5177"
      }
    },
    16053: (e, t, r) => {
      "use strict";
      r.d(t, {
        default: () => tR,
        pX: () => tW,
        ZI: () => tL,
        E2: () => tM,
        CO: () => tD,
        dz: () => tI
      });
      var a = r(95155),
        s = r(12115),
        o = r(79153),
        i = r.n(o);
      let n = ({
          backgroundUrl: e,
          shuffleAudios: t,
          audio: r,
          videoTagRef: o,
          audioTagRef: n,
          audioData: l,
          setAudioData: c
        }) => {
          let [d, u] = (0, s.useState)(!1), [m, f] = (0, s.useState)(null), p = (0, s.useRef)(null), h = "string" == typeof r, g = h ? "" !== r : r.length > 0;
          return (0, s.useEffect)(() => {
            f(window.innerWidth > 768 ? "auto" : "metadata")
          }, []), (0, s.useEffect)(() => {
            (function(e) {
              for (let t of [".mp4", ".mov", ".avi", ".m4v", ".webm", ".mkv"])
                if (e.endsWith(t)) return {
                  video: !0
                };
              return {
                video: !1
              }
            })(e).video ? u(!0) : "" !== e && (u(!1), p.current && (p.current.style.backgroundImage = `url(${e})`))
          }, [e, p]), (0, s.useEffect)(() => {
            d && o?.current && (g ? (o.current.defaultMuted = !0, o.current.muted = !0) : o.current.defaultMuted = !1)
          }, [d, g, o]), (0, s.useEffect)(() => {
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
          }, [r, t, h, g]), (0, a.jsxs)(a.Fragment, {
            children: [d && "" !== e ? (0, a.jsx)("video", {
              src: e,
              playsInline: !0,
              loop: !0,
              disablePictureInPicture: !0,
              controls: !1,
              preload: m || "metadata",
              muted: g,
              className: i().backgroundVideo,
              ref: o
            }) : (0, a.jsx)("div", {
              className: i().backgroundImage,
              style: {
                backgroundImage: `url(${e})`
              },
              ref: p
            }), g && "" !== l.url && (0, a.jsx)("audio", {
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
        userFont: o,
        userContainerRef: n,
        animationClass: c,
        setAudioPlayer: d,
        audioContainerRef: u,
        discordWidgetRef: m
      }) {
        let f = (0, s.useRef)(null),
          p = (0, s.useRef)(!1),
          h = (0, s.useRef)({}),
          g = (0, s.useRef)({}),
          x = (0, s.useRef)(null),
          v = (0, s.useRef)(null),
          y = (0, s.useRef)(null),
          b = e => {
            e.current.timeoutId && (window.clearTimeout(e.current.timeoutId), e.current.timeoutId = void 0), e.current.detachListeners && (e.current.detachListeners?.(), e.current.detachListeners = void 0)
          },
          j = e => {
            d({
              playing: !e.paused,
              duration: e.duration || 0,
              currentTime: e.currentTime || 0,
              ref: e
            })
          };
        (0, s.useEffect)(() => (document.documentElement.setAttribute(l, "active"), () => {
          null !== y.current && (window.clearTimeout(y.current), y.current = null), document.documentElement.removeAttribute(l), b(h), b(g), t.current && x.current && t.current.removeEventListener("timeupdate", x.current)
        }), [t]);
        let _ = e => {
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
          p.current && c && c !== v.current && (_(c), v.current = c)
        }, [c]);
        let w = (e, t = !1, r) => {
          let a = t ? g : h;
          b(a);
          let s = 0,
            o = e => {
              if (t && e instanceof HTMLAudioElement) {
                let t;
                j(e), x.current && e.removeEventListener("timeupdate", x.current), x.current = t = () => j(e), e.addEventListener("timeupdate", t)
              }
            },
            i = e => {
              e.volume = .25;
              let t = e.play();
              t && "function" == typeof t.then ? t.then(() => o(e)).catch(e => {
                e?.name === "NotAllowedError" ? console.warn("Autoplay blocked for media element.", e) : n()
              }) : o(e)
            },
            n = (e = !1) => {
              s >= 40 || (s += 1, b(a), a.current.timeoutId = window.setTimeout(() => {
                a.current.timeoutId = void 0, l(e)
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
                  b(a), i(r)
                }, r.addEventListener("loadeddata", e, {
                  once: !0
                }), r.addEventListener("canplay", e, {
                  once: !0
                }), a.current.detachListeners = () => {
                  r.removeEventListener("loadeddata", e), r.removeEventListener("canplay", e)
                }, s < 40 && n(t)
              }
            };
          l(r?.eager ?? !1)
        };
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)("div", {
            className: i().clickToEnterOverlay,
            onClick: () => {
              p.current || (f.current && (f.current.classList.add(i().hide), f.current.style.pointerEvents = "none", document.documentElement.removeAttribute(l), y.current = window.setTimeout(() => {
                f.current && (f.current.style.display = "none"), y.current = null
              }, 650)), _(c), v.current = c, p.current = !0), w(e, !1, {
                eager: !0
              }), w(t, !0, {
                eager: !0
              })
            },
            ref: f,
            children: (0, a.jsx)("div", {
              className: i().clickToEnterText,
              style: o.clickToEnter,
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
        f = {
          1: .7,
          2: 1,
          3: 1.5
        },
        p = e => {
          let {
            font: t,
            fontSize: r
          } = e, a = !u.has(t) && r ? f[r] : 1;
          return Object.keys(d).reduce((e, r) => {
            let s = d[r],
              o = m[t]?.[r] ?? s;
            return e[r] = {
              ...o,
              fontSize: `${parseFloat(o.fontSize)*a}px`
            }, e
          }, {})
        };
      var h = r(65596),
        g = r(59964),
        x = r(86275),
        v = r(29370),
        y = r(6926),
        b = r(97650);
      r(96173);
      let j = `
precision highp float;
varying vec2 vUv;
void main() {
  vUv = uv;
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  gl_Position = projectionMatrix * viewPosition;
}
`,
        _ = `
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
            ["colorNum", new b.nc$(4)],
            ["pixelSize", new b.nc$(2)]
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
      let N = (0, s.forwardRef)((e, t) => {
        let {
          colorNum: r,
          pixelSize: s
        } = e, o = (0, v.AR)(S);
        return (0, a.jsx)(o, {
          ref: t,
          colorNum: r,
          pixelSize: s
        })
      });

      function C({
        waveSpeed: e,
        waveFrequency: t,
        waveAmplitude: r,
        waveColor: o,
        colorNum: i,
        pixelSize: n,
        disableAnimation: l,
        enableMouseInteraction: c,
        mouseRadius: d
      }) {
        let u = (0, s.useRef)(null),
          m = (0, s.useRef)(new b.I9Y),
          {
            viewport: f,
            size: p,
            gl: h
          } = (0, g.C)(),
          x = (0, s.useRef)({
            time: new b.nc$(0),
            resolution: new b.nc$(new b.I9Y(0, 0)),
            waveSpeed: new b.nc$(e),
            waveFrequency: new b.nc$(t),
            waveAmplitude: new b.nc$(r),
            waveColor: new b.nc$(new b.Q1f(...o)),
            mousePos: new b.nc$(new b.I9Y(0, 0)),
            enableMouseInteraction: new b.nc$(+!!c),
            mouseRadius: new b.nc$(d)
          });
        (0, s.useEffect)(() => {
          let e = h.getPixelRatio(),
            t = Math.floor(p.width * e),
            r = Math.floor(p.height * e),
            a = x.current.resolution.value;
          (a.x !== t || a.y !== r) && a.set(t, r)
        }, [p, h]);
        let y = (0, s.useRef)([...o]);
        return (0, g.D)(({
          clock: a
        }) => {
          let s = x.current;
          l || (s.time.value = a.getElapsedTime()), s.waveSpeed.value !== e && (s.waveSpeed.value = e), s.waveFrequency.value !== t && (s.waveFrequency.value = t), s.waveAmplitude.value !== r && (s.waveAmplitude.value = r), y.current.every((e, t) => e === o[t]) || (s.waveColor.value.set(...o), y.current = [...o]), s.enableMouseInteraction.value = +!!c, s.mouseRadius.value = d, c && s.mousePos.value.copy(m.current)
        }), (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsxs)("mesh", {
            ref: u,
            scale: [f.width, f.height, 1],
            children: [(0, a.jsx)("planeGeometry", {
              args: [1, 1]
            }), (0, a.jsx)("shaderMaterial", {
              vertexShader: j,
              fragmentShader: _,
              uniforms: x.current
            })]
          }), (0, a.jsx)(v.s0, {
            children: (0, a.jsx)(N, {
              colorNum: i,
              pixelSize: n
            })
          }), (0, a.jsxs)("mesh", {
            onPointerMove: e => {
              if (!c) return;
              let t = h.domElement.getBoundingClientRect(),
                r = h.getPixelRatio();
              m.current.set((e.clientX - t.left) * r, (e.clientY - t.top) * r)
            },
            position: [0, 0, .01],
            scale: [f.width, f.height, 1],
            visible: !1,
            children: [(0, a.jsx)("planeGeometry", {
              args: [1, 1]
            }), (0, a.jsx)("meshBasicMaterial", {
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
        colorNum: o = 4,
        pixelSize: i = 2,
        disableAnimation: n = !1,
        enableMouseInteraction: l = !0,
        mouseRadius: c = 1
      }) {
        return (0, a.jsx)(x.Hl, {
          className: "dither-container",
          camera: {
            position: [0, 0, 6]
          },
          dpr: 1,
          gl: {
            antialias: !0,
            preserveDrawingBuffer: !0
          },
          children: (0, a.jsx)(C, {
            waveSpeed: e,
            waveFrequency: t,
            waveAmplitude: r,
            waveColor: s,
            colorNum: o,
            pixelSize: i,
            disableAnimation: n,
            enableMouseInteraction: l,
            mouseRadius: c
          })
        })
      }
      N.displayName = "RetroEffect";
      var A = r(22634),
        F = r(373),
        $ = r(16748),
        T = r(41519),
        P = r(10204);
      r(42789);
      let U = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,
        E = `#version 300 es
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

      function z(e) {
        let {
          colorStops: t = ["#5227FF", "#7cff67", "#5227FF"],
          amplitude: r = 1,
          blend: o = .5
        } = e, i = (0, s.useRef)(e);
        i.current = e;
        let n = (0, s.useRef)(null);
        return (0, s.useEffect)(() => {
          let e, a = n.current;
          if (!a) return;
          let s = new A.A({
              alpha: !0,
              premultipliedAlpha: !0,
              antialias: !0
            }),
            l = s.gl;

          function c() {
            if (!a) return;
            let t = a.offsetWidth,
              r = a.offsetHeight;
            s.setSize(t, r), e && (e.uniforms.uResolution.value = [t, r])
          }
          l.clearColor(0, 0, 0, 0), l.enable(l.BLEND), l.blendFunc(l.ONE, l.ONE_MINUS_SRC_ALPHA), l.canvas.style.backgroundColor = "transparent", window.addEventListener("resize", c);
          let d = new F.l(l);
          d.attributes.uv && delete d.attributes.uv;
          let u = t.map(e => {
            let t = new $.Q(e);
            return [t.r, t.g, t.b]
          });
          e = new T.B(l, {
            vertex: U,
            fragment: E,
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
                value: [a.offsetWidth, a.offsetHeight]
              },
              uBlend: {
                value: o
              }
            }
          });
          let m = new P.e(l, {
            geometry: d,
            program: e
          });
          a.appendChild(l.canvas);
          let f = 0,
            p = r => {
              f = requestAnimationFrame(p);
              let {
                time: a = .01 * r,
                speed: n = 1
              } = i.current;
              if (e) {
                e.uniforms.uTime.value = a * n * .1, e.uniforms.uAmplitude.value = i.current.amplitude ?? 1, e.uniforms.uBlend.value = i.current.blend ?? o;
                let r = i.current.colorStops ?? t;
                e.uniforms.uColorStops.value = r.map(e => {
                  let t = new $.Q(e);
                  return [t.r, t.g, t.b]
                }), s.render({
                  scene: m
                })
              }
            };
          return f = requestAnimationFrame(p), c(), () => {
            cancelAnimationFrame(f), window.removeEventListener("resize", c), a && l.canvas.parentNode === a && a.removeChild(l.canvas), l.getExtension("WEBGL_lose_context")?.loseContext()
          }
        }, [r]), (0, a.jsx)("div", {
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
        I = `#version 300 es
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
        M = ({
          color: e = "#ffffff",
          speed: t = 1,
          direction: r = "forward",
          scale: o = 1,
          opacity: i = 1,
          mouseInteractive: n = !0
        }) => {
          let l = (0, s.useRef)(null),
            c = (0, s.useRef)({
              x: 0,
              y: 0
            });
          return (0, s.useEffect)(() => {
            let a;
            if (!l.current) return;
            let s = l.current,
              d = () => {
                for (; s.firstChild;) s.removeChild(s.firstChild)
              },
              u = +!!e,
              m = e ? (a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? [parseInt(a[1], 16) / 255, parseInt(a[2], 16) / 255, parseInt(a[3], 16) / 255] : [1, .5, .2] : [1, 1, 1],
              f = "reverse" === r ? -1 : 1,
              p = new A.A({
                webgl: 2,
                alpha: !0,
                antialias: !1,
                dpr: Math.min(window.devicePixelRatio || 1, 2)
              }),
              h = p.gl,
              g = h.canvas;
            g.style.display = "block", g.style.width = "100%", g.style.height = "100%", d(), s.appendChild(g);
            let x = new F.l(h),
              v = new T.B(h, {
                vertex: B,
                fragment: I,
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
                    value: f
                  },
                  uScale: {
                    value: o
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
              y = new P.e(h, {
                geometry: x,
                program: v
              }),
              b = e => {
                if (!n) return;
                let t = l.current.getBoundingClientRect();
                c.current.x = e.clientX - t.left, c.current.y = e.clientY - t.top;
                let r = v.uniforms.uMouse.value;
                r[0] = c.current.x, r[1] = c.current.y
              };
            n && l.current.addEventListener("mousemove", b);
            let j = () => {
                let e = l.current.getBoundingClientRect(),
                  t = Math.max(1, Math.floor(e.width)),
                  r = Math.max(1, Math.floor(e.height));
                p.setSize(t, r);
                let a = v.uniforms.iResolution.value;
                a[0] = h.drawingBufferWidth, a[1] = h.drawingBufferHeight
              },
              _ = new ResizeObserver(j);
            _.observe(l.current), j();
            let w = 0,
              S = performance.now(),
              N = e => {
                let t = (e - S) * .001;
                if ("pingpong" === r) {
                  let e = Math.sin(.5 * t) * f;
                  v.uniforms.uDirection.value = e
                }
                v.uniforms.iTime.value = t, p.render({
                  scene: y
                }), w = requestAnimationFrame(N)
              };
            return w = requestAnimationFrame(N), () => {
              cancelAnimationFrame(w), _.disconnect(), n && s.removeEventListener("mousemove", b), d()
            }
          }, [e, t, r, o, i, n]), (0, a.jsx)("div", {
            ref: l,
            className: "plasma-container"
          })
        };
      var L = r(29625);
      let D = `
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
        W = `
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

      function R({
        className: e = "",
        starColor: t = "#aa8558",
        size: r = .05,
        minSize: o = 1,
        speed: i = .002,
        fadeSpeed: n = 1.1,
        shortRangeFadeSpeed: l = 1.3,
        minFlashingSpeed: c = .1,
        spread: d = 7,
        maxSpread: u = 5,
        maxZ: m = 100,
        blur: f = 1,
        far: p = 10,
        maxDiff: h = 100,
        diffPow: g = .24
      }) {
        let x = (0, s.useRef)(null),
          v = (0, s.useRef)(null);
        return (0, s.useEffect)(() => {
          if (!x.current || !v.current) return;
          let e = x.current.clientWidth || window.innerWidth,
            a = x.current.clientHeight || window.innerHeight;
          if (!e || !a) return;
          let s = 0,
            y = !0,
            j = Math.min(window.devicePixelRatio || 1, 2),
            _ = {
              clientWidth: e,
              clientHeight: a,
              clientHalfWidth: e / 2,
              clientHalfHeight: a / 2,
              resolution: new b.I9Y(e, a),
              pixelRatio: j,
              mouseI: 0,
              oldPosition: null,
              timestamp: 0,
              rate: 1
            },
            w = 180 / Math.PI * Math.atan(a / 2 / 5e3) * 2,
            S = new L.WebGLRenderer({
              canvas: v.current,
              antialias: 1 === j,
              alpha: !0
            });
          S.setPixelRatio(_.pixelRatio), S.setClearColor(0, 0), S.setSize(e, a);
          let N = new b.ubm(w, e / a, .1, 1e4);
          N.position.set(0, 0, 5e3), N.updateProjectionMatrix();
          let C = new b.Z58,
            k = {
              resolution: {
                value: _.resolution
              },
              pixelRatio: {
                value: _.pixelRatio
              },
              timestamp: {
                value: 0
              },
              color: {
                value: new b.Q1f(t)
              },
              size: {
                value: r
              },
              minSize: {
                value: o
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
                value: f
              },
              far: {
                value: p
              },
              maxDiff: {
                value: h
              },
              diffPow: {
                value: g
              }
            },
            A = new b.LoY,
            F = new Float32Array(96e4),
            $ = new Float32Array(128e4),
            T = new Float32Array(64e4),
            P = new Float32Array(32e4);
          for (let e = 0; e < 32e4; e++) F[3 * e] = Math.random(), F[3 * e + 1] = Math.random(), F[3 * e + 2] = Math.random(), $[4 * e] = -1, $[4 * e + 1] = -1, P[e] = Math.random();
          A.setAttribute("position", new b.THS(F, 3)), A.setAttribute("mouse", new b.THS($, 4)), A.setAttribute("aFront", new b.THS(T, 2)), A.setAttribute("random", new b.THS(P, 1));
          let U = new b.D$Q({
              uniforms: k,
              vertexShader: D,
              fragmentShader: W,
              transparent: !0,
              depthTest: !1,
              blending: b.EZo
            }),
            E = new b.ONl(A, U);
          E.frustumCulled = !1, C.add(E);
          let z = (e, t) => {
              let r = e * _.rate + _.clientHalfWidth,
                a = _.clientHeight - (t * _.rate + _.clientHalfHeight),
                s = new b.I9Y(r, a),
                o = _.oldPosition ? s.clone().sub(_.oldPosition) : new b.I9Y,
                i = o.length(),
                n = i > 0 ? o.clone().normalize() : new b.I9Y,
                l = A.attributes.mouse,
                c = A.attributes.aFront,
                d = l.array,
                u = c.array;
              for (let e = 0; e < 800; e++) {
                let t = (_.mouseI + e) % 32e4,
                  r = 4 * t,
                  a = 2 * t,
                  l = _.oldPosition ? _.oldPosition.clone().add(o.clone().multiplyScalar(e / 800)) : s;
                d[r] = l.x, d[r + 1] = l.y, d[r + 2] = _.timestamp, d[r + 3] = i, u[a] = n.x, u[a + 1] = n.y
              }
              _.oldPosition = s, l.needsUpdate = !0, c.needsUpdate = !0, _.mouseI = (_.mouseI + 800) % 32e4
            },
            B = e => {
              z(e.clientX - _.clientHalfWidth, e.clientY - _.clientHalfHeight)
            },
            I = e => {
              e.touches[0] && z(e.touches[0].clientX - _.clientHalfWidth, e.touches[0].clientY - _.clientHalfHeight)
            },
            M = () => {
              if (!x.current) return;
              let t = x.current.clientWidth || window.innerWidth,
                r = x.current.clientHeight || window.innerHeight;
              t && r && (_.rate = 1 / (r / a) * Math.min(t / e, 1), _.clientWidth = t, _.clientHeight = r, _.clientHalfWidth = t / 2, _.clientHalfHeight = r / 2, _.resolution.set(t, r), N.aspect = t / r, N.updateProjectionMatrix(), S.setSize(t, r))
            },
            R = new IntersectionObserver(([e]) => {
              y = e.isIntersecting
            }, {
              threshold: 0
            });
          R.observe(x.current);
          let G = performance.now(),
            H = e => {
              y && (_.timestamp = e - G, k.timestamp.value = _.timestamp, S.render(C, N)), s = requestAnimationFrame(H)
            };
          return window.addEventListener("pointermove", B), window.addEventListener("touchmove", I, {
            passive: !0
          }), window.addEventListener("resize", M), s = requestAnimationFrame(H), () => {
            R.disconnect(), cancelAnimationFrame(s), window.removeEventListener("pointermove", B), window.removeEventListener("touchmove", I), window.removeEventListener("resize", M), C.remove(E), A.dispose(), U.dispose(), S.dispose()
          }
        }, [t, r, o, i, n, l, c, d, u, m, f, p, h, g]), (0, a.jsx)("div", {
          ref: x,
          className: e,
          style: {
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            overflow: "hidden",
            zIndex: 0x7fffffff
          },
          children: (0, a.jsx)("canvas", {
            ref: v,
            style: {
              display: "block",
              width: "100%",
              height: "100%"
            }
          })
        })
      }
      let G = `#version 300 es
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
        O = `attribute vec4 position;
void main() {
  gl_Position = position;
}`,
        q = `precision mediump float;
void main() {
  gl_FragColor = vec4(1.0);
}`,
        V = {
          aurora: !1,
          plasma: !1,
          dither: !1
        },
        Y = (e, t, r) => {
          try {
            let a = e.createShader(e.VERTEX_SHADER),
              s = e.createShader(e.FRAGMENT_SHADER);
            if (!a || !s) return !1;
            e.shaderSource(a, t), e.shaderSource(s, r), e.compileShader(a), e.compileShader(s);
            let o = e.getShaderParameter(a, e.COMPILE_STATUS),
              i = e.getShaderParameter(s, e.COMPILE_STATUS);
            if (!o || !i) return e.deleteShader(a), e.deleteShader(s), !1;
            let n = e.createProgram();
            if (!n) return e.deleteShader(a), e.deleteShader(s), !1;
            e.attachShader(n, a), e.attachShader(n, s), e.linkProgram(n);
            let l = e.getProgramParameter(n, e.LINK_STATUS);
            return e.deleteShader(a), e.deleteShader(s), e.deleteProgram(n), !!l
          } catch {
            return !1
          }
        };

      function Z({
        backgroundEffects: e,
        backgroundEffectsColor: t,
        cursorEffects: r,
        cursorEffectsColor: o,
        textColor: n,
        backgroundColor: l,
        cursorUrl: c
      }) {
        let d = /^#[0-9a-f]{6}$/i.test(t ?? "") ? t : n,
          u = (e => {
            let t, {
              r,
              g: a,
              b: s
            } = {
              r: (t = parseInt(e.replace("#", ""), 16)) >> 16 & 255,
              g: t >> 8 & 255,
              b: 255 & t
            };
            return [r / 255, a / 255, s / 255]
          })(d),
          [m, f] = (0, s.useState)(V),
          [p, g] = (0, s.useState)(!1),
          [x, v] = (0, s.useState)(!1);
        (0, s.useEffect)(() => {
          let e, t, r, a, s, o = !1,
            i = (t = !!((e = document.createElement("canvas").getContext("webgl2", {
              failIfMajorPerformanceCaveat: !0
            })) && Y(e, G, H)), e?.getExtension("WEBGL_lose_context")?.loseContext(), a = (r = document.createElement("canvas")).getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || r.getContext("experimental-webgl"), s = t || !!(a && Y(a, O, q)), a?.getExtension("WEBGL_lose_context")?.loseContext(), {
              aurora: t,
              plasma: t,
              dither: s
            });
          return o || f(i), () => {
            o = !0
          }
        }, []), (0, s.useEffect)(() => {
          window.cursoreffects && g(!0), window.gunsLolOneko && v(!0)
        }, []), (0, s.useEffect)(() => {
          "cat" === r && x && window.gunsLolOneko?.setColor(o)
        }, [x, r, o]);
        let y = (0, s.useCallback)(() => {
          let e = window.cursoreffects;
          e && r && "shooting_star" !== r && ({
            bubbles: () => new e.bubbleCursor({
              color: [o]
            }),
            dot: () => new e.followingDotCursor({
              color: [o]
            }),
            snowflakes: () => new e.snowflakeCursor({
              color: [o]
            }),
            particles: () => new e.fairyDustCursor({
              colors: [o]
            }),
            ghost: () => new e.trailingCursor({
              particles: 15,
              rate: .6,
              baseImageSrc: c
            })
          })[r]?.()
        }, [r, o, c]);
        (0, s.useEffect)(() => {
          p && y()
        }, [p, y]);
        let b = "dither" === e && m.dither,
          j = "aurora" === e && m.aurora,
          _ = "plasma" === e && m.plasma,
          w = "shooting_star" !== r;
        return (0, a.jsxs)(a.Fragment, {
          children: ["snowflakes" === e ? (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)("div", {
              className: i().snowflakes,
              style: {
                color: d
              },
              children: [(0, a.jsx)("div", {
                className: i().snowflake,
                children: (0, a.jsx)("div", {
                  className: i().inner,
                  children: "❅"
                })
              }), (0, a.jsx)("div", {
                className: i().snowflake,
                children: (0, a.jsx)("div", {
                  className: i().inner,
                  children: "❅"
                })
              }), (0, a.jsx)("div", {
                className: i().snowflake,
                children: (0, a.jsx)("div", {
                  className: i().inner,
                  children: "❅"
                })
              }), (0, a.jsx)("div", {
                className: i().snowflake,
                children: (0, a.jsx)("div", {
                  className: i().inner,
                  children: "❅"
                })
              }), (0, a.jsx)("div", {
                className: i().snowflake,
                children: (0, a.jsx)("div", {
                  className: i().inner,
                  children: "❅"
                })
              }), (0, a.jsx)("div", {
                className: i().snowflake,
                children: (0, a.jsx)("div", {
                  className: i().inner,
                  children: "❅"
                })
              }), (0, a.jsx)("div", {
                className: i().snowflake,
                children: (0, a.jsx)("div", {
                  className: i().inner,
                  children: "❅"
                })
              }), (0, a.jsx)("div", {
                className: i().snowflake,
                children: (0, a.jsx)("div", {
                  className: i().inner,
                  children: "❅"
                })
              }), (0, a.jsx)("div", {
                className: i().snowflake,
                children: (0, a.jsx)("div", {
                  className: i().inner,
                  children: "❅"
                })
              }), (0, a.jsx)("div", {
                className: i().snowflake,
                children: (0, a.jsx)("div", {
                  className: i().inner,
                  children: "❅"
                })
              }), (0, a.jsx)("div", {
                className: i().snowflake,
                children: (0, a.jsx)("div", {
                  className: i().inner,
                  children: "❅"
                })
              }), (0, a.jsx)("div", {
                className: i().snowflake,
                children: (0, a.jsx)("div", {
                  className: i().inner,
                  children: "❅"
                })
              })]
            })
          }) : "rain" === e ? (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(h.default, {
              strategy: "beforeInteractive",
              src: "https://assets.guns.lol/guns_storm.js",
              id: "_gunsstorm"
            }), (0, a.jsx)(h.default, {
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
          }) : "blurred" === e ? (0, a.jsx)("div", {
            className: i().blurredBackground
          }) : "tv" === e ? (0, a.jsx)("div", {
            className: i().oldTV
          }) : "night" === e ? (0, a.jsx)("div", {
            className: i().nightTime
          }) : b ? (0, a.jsx)(k, {
            waveColor: u,
            disableAnimation: !1,
            enableMouseInteraction: !0,
            mouseRadius: .22,
            colorNum: 5,
            waveAmplitude: .3,
            waveFrequency: 2,
            waveSpeed: .06
          }) : j ? (0, a.jsx)(z, {
            colorStops: [d, d, d],
            blend: .5,
            amplitude: .5,
            speed: .6
          }) : _ && (0, a.jsx)(M, {
            color: d,
            speed: .5,
            direction: "forward",
            scale: 1.1,
            opacity: .9,
            mouseInteractive: !1
          }), w && (0, a.jsx)(h.default, {
            strategy: "afterInteractive",
            src: "https://assets.guns.lol/cursor-effects.js",
            id: "_cursor",
            onLoad: () => g(!0)
          }), "cat" === r && (0, a.jsx)(h.default, {
            strategy: "afterInteractive",
            src: "/oneko-colorable.js",
            id: "_ccat",
            "data-color": o,
            onLoad: () => v(!0)
          }), "shooting_star" === r && (0, a.jsx)(R, {
            starColor: o
          }), "" !== c && (0, a.jsx)("style", {
            children: `
                    * {
                      cursor: url(${c}) 16 16, auto !important;
                    }
                    `
          }), (0, a.jsx)("style", {
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
        ea = r(61778);
      let es = ({
        config: e,
        premiumConfig: t
      }) => {
        let r = e.user_badges,
          s = e.custom_badges,
          o = r.length > 0 && r[0] && "string" == typeof r[0],
          n = s.length > 0 && "string" == typeof s[0][0],
          l = {
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
          c = {
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
          d = {
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
          u = e => e ? l[e] ?? (e ? e.split("_").filter(Boolean).map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" ") : "Badge") : "Badge",
          m = e => {
            if (!e) return null;
            let t = l[e];
            if (!t) return null;
            let r = d[t];
            return r ? i()[r] ?? null : null
          };
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            className: i().badgeContainer,
            children: [o ? r.map(r => {
              let s = u(r),
                o = m(r),
                n = er.A[c[r]];
              return (0, a.jsx)(ea.A, {
                content: s,
                pageTooltipStyles: !0,
                children: (0, a.jsxs)("div", {
                  className: i().badgeContainerFlex,
                  children: [t.monochrome_badges && o && (0, a.jsx)("style", {
                    children: `
                    .${o} {
                        color: ${t.badge_color}!important;
                        filter: drop-shadow(${t.badge_color} 0 0 2.5px)!important;
                    }
                    `
                  }), !e.badge_glow && o && (0, a.jsx)("style", {
                    children: `
                    .${o} {
                        filter: none!important;
                    }
                    `
                  }), n]
                })
              }, r)
            }) : r.map(r => {
              if (!r.enabled) return null;
              let s = r.name,
                o = u(s),
                n = m(s),
                l = er.A[c[s]];
              return (0, a.jsx)(ea.A, {
                content: o,
                pageTooltipStyles: !0,
                children: (0, a.jsxs)("div", {
                  className: i().badgeContainerFlex,
                  children: [t.monochrome_badges && n && (0, a.jsx)("style", {
                    children: `
                    .${n} {
                        color: ${t.badge_color}!important;
                        filter: drop-shadow(${t.badge_color} 0 0 2.5px)!important;
                    }
                    `
                  }), !e.badge_glow && n && (0, a.jsx)("style", {
                    children: `
                    .${n} {
                        filter: none!important;
                    }
                    `
                  }), l]
                })
              }, s)
            }), 0 !== s.length && (0, a.jsx)(a.Fragment, {
              children: n ? s.map((e, t) => (0, a.jsx)(ea.A, {
                content: e[0],
                pageTooltipStyles: !0,
                children: (0, a.jsx)("div", {
                  className: i().badgeContainerFlex,
                  children: (0, a.jsx)("img", {
                    src: e[1],
                    alt: "Custom Badge",
                    className: i().customBadge,
                    draggable: !1
                  })
                })
              }, t)) : s.map((e, t) => e.enabled && (0, a.jsx)(ea.A, {
                content: e.name,
                pageTooltipStyles: !0,
                children: (0, a.jsx)("div", {
                  className: i().badgeContainerFlex,
                  children: (0, a.jsx)("img", {
                    src: e.icon,
                    alt: "Custom Badge",
                    className: i().customBadge,
                    draggable: !1
                  })
                })
              }, t))
            })]
          })
        })
      };
      var eo = r(52131),
        ei = r(98500),
        en = r.n(ei),
        el = r(28485),
        ec = r(37206),
        ed = r(96351),
        eu = r(99387),
        em = r(57776);
      let ef = (0, ec.default)(() => r.e(1045).then(r.bind(r, 31045)), {
          loadableGenerated: {
            webpack: () => [31045]
          },
          ssr: !1
        }),
        ep = ({
          copied: e,
          copy: t,
          content: r,
          children: s
        }) => (0, a.jsx)(ea.A, {
          content: e ? "Copied" : r,
          pageTooltipStyles: !0,
          children: (0, a.jsx)("span", {
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
        socialGlow: o,
        font: n,
        fontSize: l,
        username: c,
        ...d
      }) {
        let u = (0, ed.kj)(),
          m = ["eth", "ltc", "bitcoin", "monero", "solana", "xrp", "playstation"],
          [f, h] = (0, s.useState)(!1),
          [g, x] = (0, s.useState)({
            url: "",
            id: ""
          }),
          [v, y] = (0, s.useState)({
            url: "",
            id: ""
          }),
          [b, j] = (0, s.useState)(""),
          _ = p({
            font: n,
            fontSize: l
          }),
          [w, S] = (0, s.useState)([]),
          N = u("custom_url" === b ? "userpage.socials.modal.custom_url.title" : "userpage.socials.modal.onlyfans.title"),
          C = e.filter(e => !0 !== e.hidden);
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(em.A, {
            opened: f,
            onClose: () => h(!1),
            title: N,
            size: "470px",
            centered: !0,
            className: i().warningModal,
            children: "custom_url" === b ? (0, a.jsxs)("div", {
              className: i().customUrlWarning,
              children: [(0, a.jsx)("h1", {
                style: _.customUrlHeading,
                children: u("userpage.socials.modal.custom_url.heading")
              }), (0, a.jsx)("span", {
                style: _.customUrlLink,
                children: g.url.replace("https://", "")
              }), (0, a.jsxs)("div", {
                className: i().modalButtons,
                children: [(0, a.jsx)(en(), {
                  prefetch: !1,
                  href: g.url,
                  target: "_blank",
                  onClick: e => {
                    h(!1), tD(c, g.id, "click", w.includes(g.id)), S([...w, g.id])
                  },
                  style: _.customUrlButtons,
                  children: u("userpage.socials.modal.actions.visit")
                }), (0, a.jsx)("button", {
                  onClick: () => h(!1),
                  style: _.customUrlButtons,
                  children: u("userpage.socials.modal.actions.cancel")
                })]
              })]
            }) : "onlyfans" === b && (0, a.jsxs)("div", {
              className: i().customUrlWarning,
              children: [(0, a.jsx)("h1", {
                style: _.customUrlHeading,
                children: u("userpage.socials.modal.onlyfans.heading")
              }), (0, a.jsx)("span", {
                style: {
                  ..._.customUrlLink,
                  wordBreak: "break-word"
                },
                children: u("userpage.socials.modal.onlyfans.description")
              }), (0, a.jsxs)("div", {
                className: i().modalButtons,
                children: [(0, a.jsx)(en(), {
                  prefetch: !1,
                  href: v.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  onClick: () => {
                    h(!1), tD(c, v.id, "click", w.includes(v.id)), S([...w, v.id])
                  },
                  style: _.customUrlButtons,
                  children: u("userpage.socials.modal.actions.continue")
                }), (0, a.jsx)("button", {
                  onClick: () => h(!1),
                  style: _.customUrlButtons,
                  children: u("userpage.socials.modal.actions.cancel")
                })]
              })]
            })
          }), (0, a.jsx)("div", {
            className: i().userSocials,
            ...d,
            children: C.map((e, s) => {
              let n, l, d, u, f, p;
              return (0, a.jsxs)("div", {
                className: `${i().userSocial} ${i()[e.social]}`,
                children: [t ? t && (0, a.jsx)("style", {
                  children: `
                                    .${i()[e.social]} svg {
                                        color: ${r}!important;
                                        ${!1!==o?`filter: drop-shadow(${r} 1px 0 7px)!important;`:"filter: none!important"}
                                    }`
                }) : (0, a.jsx)("style", {
                  children: `
                                .${i()[e.social]} svg {
                                    ${!o&&"filter: none!important"}
                            }
                            `
                }), m.includes(e.social) ? (n = w.includes(e.id), (0, a.jsx)(eu.A, {
                  value: e.value,
                  children: ({
                    copied: r,
                    copy: s
                  }) => (0, a.jsx)(ep, {
                    copied: r,
                    copy: s,
                    content: "Copy Address",
                    children: (0, a.jsx)("span", {
                      onClick: t => {
                        tD(c, e.id, "click", n), S([...w, e.id])
                      },
                      style: {
                        display: "flex"
                      },
                      children: "monero" === e.social && t ? eo.A.moneroMonochrome : eo.A[e.social]
                    })
                  })
                })) : (l = eo.A[e.social.replace("custom_url", "customUrl")], d = e.mode ?? "link", u = el.V$[e.social], f = w.includes(e.id), p = (e => {
                  if ("custom_url" !== e.social || !1 === o || !e.icon) return;
                  let t = e.glow_color && "" !== e.glow_color.trim() ? e.glow_color : "#a3a3a3";
                  return {
                    filter: `drop-shadow(${t} 1px 0 7px)`
                  }
                })(e), (0, a.jsx)(a.Fragment, {
                  children: "link" === d ? "email" === e.social ? (0, a.jsx)(ef, {
                    encoded: e.value,
                    onClick: t => {
                      tD(c, e.id, "click", f), S([...w, e.id])
                    },
                    children: l
                  }) : (0, a.jsx)(en(), {
                    href: e.value,
                    target: "_blank",
                    onClick: t => ((e, t) => {
                      let {
                        social: r,
                        value: a,
                        id: s
                      } = t, o = w.includes(s);
                      if ("custom_url" === r || "onlyfans" === r) j(r), e.preventDefault(), h(!0), "custom_url" === r ? x({
                        url: a,
                        id: s
                      }) : y({
                        url: a,
                        id: s
                      });
                      else tD(c, s, "click", o), S(e => [...e, s])
                    })(t, e),
                    prefetch: !1,
                    children: "monero" === e.social && t ? eo.A.moneroMonochrome : "custom_url" === e.social && e.icon ? (0, a.jsx)("img", {
                      className: i().customIcon,
                      src: e.icon,
                      alt: "",
                      style: p
                    }) : l
                  }) : "text" === d && (0, a.jsx)(eu.A, {
                    value: "email" === e.social ? atob(e.value) : e.value,
                    children: ({
                      copied: r,
                      copy: s
                    }) => (0, a.jsx)(ep, {
                      copied: r,
                      copy: s,
                      content: `Copy ${u}`,
                      children: (0, a.jsx)("span", {
                        onClick: t => {
                          tD(c, e.id, "click", f), S([...w, e.id])
                        },
                        style: {
                          display: "flex"
                        },
                        children: "monero" === e.social && t ? eo.A.moneroMonochrome : "custom_url" === e.social && e.icon ? (0, a.jsx)("img", {
                          className: i().customIcon,
                          src: e.icon,
                          alt: "",
                          style: p
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

      function eb({
        presenceInformation: e,
        font: t,
        fontSize: r,
        description: o,
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
          [f, h] = (0, s.useState)(0),
          [g, x] = (0, s.useState)(null),
          [v, y] = (0, s.useState)(!1),
          b = m[f] || m[0],
          j = p({
            font: t,
            fontSize: r
          }),
          _ = b?.name === "Spotify",
          w = {
            display: b?.emoji?.startsWith("https://") && b?.type === 4 && !_ && "flex",
            alignItems: b?.emoji?.startsWith("https://") && b?.type === 4 && !_ && "flex-end"
          },
          S = ev(e),
          N = e.primaryGuild?.hasGuildTag ? e.primaryGuild : S.primaryGuild || {
            hasGuildTag: !1
          },
          C = S.avatar,
          k = S.displayName,
          A = e.status || "unknown",
          F = "unknown" === A ? "offline" : A;
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
        }, [m.length, f]), (0, s.useEffect)(() => {
          if (!v) return;
          let e = window.setTimeout(() => {
            x(null), y(!1)
          }, 360);
          return () => window.clearTimeout(e)
        }, [v, f]);
        let $ = e => {
            if (!e) return null;
            let t = "Spotify" === e.name,
              r = "string" == typeof e.emoji ? e.emoji : "";
            return t ? (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsxs)(ex.A, {
                children: [(0, a.jsx)("span", {
                  className: i().highlight,
                  children: u[e.type]
                }), " ", e.details]
              }), e.state && (0, a.jsx)(ex.A, {
                children: `by ${e.state.replace(/;/g,",")}`
              })]
            }) : 4 === e.type ? (0, a.jsxs)(ex.A, {
              contentClassName: r.startsWith("https://") ? i().discordEmojiText : void 0,
              children: [r.startsWith("https://") ? (0, a.jsx)("img", {
                src: r,
                alt: "Discord Emoji",
                className: i().discordEmoji
              }) : r && (0, a.jsx)("span", {
                className: i().defaultEmoji,
                children: r
              }), (0, a.jsx)("span", {
                children: e.state
              })]
            }) : (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsxs)(ex.A, {
                children: [(0, a.jsx)("span", {
                  className: i().highlight,
                  children: u[e.type]
                }), " ", e.name]
              }), (0, a.jsx)(ex.A, {
                children: e.details ? e.details : e.state
              })]
            })
          },
          T = e => {
            if (!e || 4 === e.type || !e.image || "{}" === JSON.stringify(e.image)) return null;
            let t = "Spotify" === e.name ? `Listening to ${e.details}${e.state?` by ${e.state.replace(/;/g,",")}`:""}` : `${u[e.type]} ${e.name}`;
            return (0, a.jsx)(ea.A, {
              content: t,
              pageTooltipStyles: !0,
              children: (0, a.jsx)("img", {
                src: e.image,
                alt: ""
              })
            })
          };
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)("div", {
            className: i().discordPresenceContainer,
            style: {
              marginTop: "20px"
            },
            children: e.success && b && !d ? (0, a.jsxs)("div", {
              className: i().discordUserInformation,
              children: [(0, a.jsx)("div", {
                className: i().discordAvatar,
                children: (0, a.jsxs)("div", {
                  className: i().discordStatus,
                  children: [C && (0, a.jsx)("img", {
                    src: C,
                    alt: "Discord Avatar"
                  }), (0, a.jsx)("img", {
                    src: `https://assets.guns.lol/${F}.png`,
                    className: i().discordStatusIcon,
                    alt: ""
                  })]
                })
              }), (0, a.jsxs)("div", {
                className: i().discordActivity,
                children: [(0, a.jsxs)("div", {
                  className: i().discordUser,
                  children: [(0, a.jsxs)("div", {
                    className: i().discordUserDiv,
                    children: [k && (0, a.jsx)("span", {
                      style: j.discordUsername,
                      children: k
                    }), c.show_guild_tag && N?.hasGuildTag && (0, a.jsxs)("div", {
                      className: i().guildTag,
                      children: [(0, a.jsx)("img", {
                        src: N?.iconUrl,
                        alt: "Guild Tag Icon"
                      }), " ", (0, a.jsx)("span", {
                        children: N?.tag
                      })]
                    }), c.show_badges && (0, a.jsx)("div", {
                      className: i().discordUserBadges,
                      children: n.map((e, t) => (0, a.jsx)(ea.A, {
                        content: e,
                        pageTooltipStyles: !0,
                        children: (0, a.jsx)("div", {
                          className: i().discordBadge,
                          children: (0, a.jsx)("img", {
                            src: tW[e],
                            alt: "Discord Badge"
                          })
                        }, t)
                      }, t))
                    })]
                  }), (0, a.jsxs)("div", {
                    className: i().discordActivityTextStack,
                    children: [g && v && (0, a.jsx)("h3", {
                      className: `${i().discordActivityTextLayer} ${i().discordActivityExit}`,
                      style: j.discordStatus,
                      children: $(g)
                    }), (0, a.jsx)("h3", {
                      className: `${i().discordActivityTextLayer} ${v?i().discordActivityEnter:""}`,
                      style: j.discordStatus,
                      children: $(b)
                    }, `activity-text-${f}`)]
                  })]
                }), (0, a.jsx)("div", {
                  className: i().activityImage,
                  children: (0, a.jsxs)("div", {
                    className: i().discordActivityImageStack,
                    children: [g && v && (0, a.jsx)("span", {
                      className: `${i().discordActivityImageLayer} ${i().discordActivityExit}`,
                      children: T(g)
                    }), (0, a.jsx)("span", {
                      className: `${i().discordActivityImageLayer} ${v?i().discordActivityEnter:""}`,
                      children: T(b)
                    }, `activity-image-${f}`)]
                  })
                })]
              })]
            }) : !e.success || b || d ? d ? (0, a.jsx)("div", {
              className: i().discordLoading,
              children: (0, a.jsxs)("h1", {
                children: [X.A.discord, " Loading Discord Presence..."]
              })
            }) : (0, a.jsxs)("div", {
              className: i().discordNotConnected,
              children: [(0, a.jsxs)("h1", {
                style: j.discordUsername,
                children: [X.A.userNotFound, " User Not found"]
              }), l ? (0, a.jsxs)("h3", {
                style: j.discordStatus,
                children: ["Join ", (0, a.jsx)(en(), {
                  href: "https://discord.gg/guns",
                  target: "_blank",
                  children: "discord.gg/guns"
                }), " to display your status"]
              }) : (0, a.jsxs)("h3", {
                style: j.discordStatus,
                children: ["Please ", (0, a.jsx)(en(), {
                  href: "https://guns.lol/account",
                  target: "_blank",
                  children: "connect"
                }), " your Discord account"]
              })]
            }) : (0, a.jsxs)("div", {
              className: i().discordUserInformation,
              children: [(0, a.jsx)("div", {
                className: i().discordAvatar,
                children: (0, a.jsxs)("div", {
                  className: i().discordStatus,
                  children: [C && (0, a.jsx)("img", {
                    src: C,
                    alt: "Discord Avatar"
                  }), (0, a.jsx)("img", {
                    src: `https://assets.guns.lol/${F}.png`,
                    className: i().discordStatusIcon,
                    alt: ""
                  })]
                })
              }), (0, a.jsxs)("div", {
                className: i().discordActivity,
                children: [(0, a.jsxs)("div", {
                  className: i().discordUser,
                  children: [(0, a.jsxs)("div", {
                    className: i().discordUserDiv,
                    children: [k && (0, a.jsx)("span", {
                      style: j.discordUsername,
                      children: k
                    }), c.show_guild_tag && N?.hasGuildTag && (0, a.jsxs)("div", {
                      className: i().guildTag,
                      children: [(0, a.jsx)("img", {
                        src: N?.iconUrl,
                        alt: "Guild Tag Icon"
                      }), " ", (0, a.jsx)("span", {
                        children: N?.tag
                      })]
                    }), c.show_badges && (0, a.jsx)("div", {
                      className: i().discordUserBadges,
                      children: n.map((e, t) => (0, a.jsx)(ea.A, {
                        content: e,
                        pageTooltipStyles: !0,
                        children: (0, a.jsx)("div", {
                          className: i().discordBadge,
                          children: (0, a.jsx)("img", {
                            src: tW[e],
                            alt: "Discord Badge"
                          })
                        }, t)
                      }, t))
                    })]
                  }), (0, a.jsx)("h3", {
                    style: {
                      ...j.discordStatus,
                      ...w
                    },
                    children: "offline" === A || "unknown" === A ? (0, a.jsxs)(ex.A, {
                      contentClassName: i().offlineText,
                      children: ["last seen ", e.lastSeen ? (0, eg.m)(new Date(1e3 * e.lastSeen)).replace("about ", "") + " ago" : "unknown"]
                    }) : (0, a.jsx)(ex.A, {
                      children: c.idle_text || "currently doing nothing"
                    })
                  })]
                }), (0, a.jsx)("div", {
                  className: i().activityImage
                })]
              })]
            })
          })
        })
      }

      function ej({
        challengeData: e
      }) {
        let t = e[2],
          r = e[3],
          s = e[1],
          o = e[0],
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
            _org_ts: "${o}",
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
        return (0, a.jsx)(h.default, {
          strategy: "beforeInteractive",
          id: "_gpp_2pkvinebmmlb",
          children: i
        })
      }

      function e_(e, t) {
        return e.slice(0, t) + "0123456789abcdef" [16 * Math.random() | 0] + e.slice(t)
      }

      function ew({
        challengeData: e,
        username: t,
        premiumConfig: r,
        views: o,
        containerBorderRadius: n,
        hideCounter: l,
        isUnfold: c,
        animationStartClass: d,
        isTemplatePreview: u,
        inline: m = !1
      }) {
        let f = e[2],
          g = e[3],
          x = e[1],
          v = e[0],
          [y, b] = (0, s.useState)(!1),
          [j, _] = (0, s.useState)(""),
          [w, S] = (0, s.useState)({
            _oo: "",
            seal: ""
          }),
          N = p({
            font: r.font,
            fontSize: r.font_size
          }),
          C = !!n && n > 25 && .12 * n,
          k = !0 === r.suppress_views_tracking;
        async function A(e) {
          _(e)
        }
        async function F(e) {
          ! function(e, t, r) {
            var a;
            let s, o, [i, n] = Object.entries(r)[1],
              [l, c] = (o = 16 + ((a = e) + ((s = t || "0").charCodeAt(s.length - 1) || 48)) % 24, [a % 10, o]);
            r[i] = e_(e_(n, l), c)
          }(v, f, e), S(e), b(!0)
        }
        return (0, s.useEffect)(() => {
          Object.assign(window, {
            getToken: A,
            getResult: F
          });
          let e = setInterval(() => {
            y && "" !== j && !u && (fetch("https://guns.lol/api/analytics/record", {
              cache: "no-store",
              body: JSON.stringify({
                _t: j,
                _gpp_ch: [g, v, x, f, w.seal, w._oo],
                username: decodeURIComponent(t),
                deviceType: tL(),
                event: "view",
                linkId: null,
                referrer: document.referrer
              }),
              method: "POST"
            }), clearInterval(e))
          }, 200)
        }, [y, j, w]), (0, a.jsxs)(a.Fragment, {
          children: [!k && (0, a.jsx)(ej, {
            challengeData: e
          }), !k && (0, a.jsx)(h.default, {
            strategy: "afterInteractive",
            src: "https://challenges.cloudflare.com/turnstile/v0/api.js",
            id: "_turnstile"
          }), !k && (0, a.jsx)("div", {
            className: "cf-turnstile",
            style: {
              display: "none"
            },
            "data-sitekey": "0x4AAAAAAAgU7T2niLQD-TLm",
            "data-callback": "getToken"
          }), !r.hide_views && !l && (0, a.jsx)("div", {
            className: `${i().profileViews} ${m?i().profileViewsInline:""} ${c&&d}`,
            style: m ? void 0 : {
              bottom: C ? 12 + C : 12,
              left: C ? 15 + C : 15
            },
            children: (0, a.jsx)(ea.A, {
              content: "Profile Views",
              pageTooltipStyles: !0,
              children: (0, a.jsxs)("span", {
                style: N.profileViewsCount,
                children: [X.A.profileViews, " ", o.toLocaleString("en-US")]
              })
            })
          })]
        })
      }
      var eS = r(61861);

      function eN({
        userData: e,
        config: t,
        premiumConfig: r,
        presenceInformation: s,
        animationStartClass: o,
        isTemplatePreview: n,
        discordLoading: l
      }) {
        let c = p({
            font: r.font,
            fontSize: r.font_size
          }),
          d = ev(s),
          u = d.avatar || "",
          m = t.use_discord_avatar && u ? u : t.avatar,
          f = "" !== t.display_name ? t.display_name : e.username,
          h = t.user_badges,
          g = e.discord?.user_badges ? h.includes("server_booster") || h.find(e => "server_booster" === e.name) ? [...e.discord.user_badges, "Server Booster"] : e.discord.user_badges : [],
          x = d.avatarDecoration || "",
          v = t.custom_badges,
          y = h.length > 0 && h[0] && "string" == typeof h[0],
          b = v.length > 0 && "string" == typeof v[0][0],
          j = h.length > 0 && y || !y && h.some(e => !0 === e.enabled),
          _ = v.length > 0 && b || !b && v.some(e => !0 === e.enabled),
          w = o === i().unfoldStart,
          S = r.typewriter_speed ?? 5,
          N = r.typewriter_delete_speed ?? 7,
          C = !!(t.discord_avatar_decoration && x),
          k = t.username_effects,
          A = t.text_color,
          F = r.links_position ?? "center",
          $ = !!("" !== t.avatar || t.use_discord_avatar && u),
          T = t.discord_presence_settings || {
            show_badges: !0,
            show_guild_tag: !0,
            idle_text: ""
          };
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsxs)("div", {
            className: K().userInformation,
            children: ["" !== r.banner && (0, a.jsx)("img", {
              src: r.banner,
              alt: "",
              className: K().banner
            }), $ ? (0, a.jsxs)("div", {
              className: i().avatarWrapper,
              children: [C && (0, a.jsx)("img", {
                src: x,
                alt: "",
                className: i().avatarDecorationLayout1,
                style: {
                  top: "" !== r.banner ? "21%" : "-7%"
                }
              }), (0, a.jsx)("img", {
                src: m,
                alt: "",
                className: `${K().avatar} ${""!==r.banner&&K().adjustBanner}`
              })]
            }) : (0, a.jsx)("div", {
              style: {
                marginTop: "" !== r.banner ? "135px" : ""
              }
            }), (0, a.jsxs)("div", {
              className: `${K().userDescription} ${w&&o}`,
              children: [(0, a.jsx)(ea.A, {
                content: `UID ${e.uid.toLocaleString("en-US")}`,
                offset: 0,
                pageTooltipStyles: !0,
                children: "typewriter" === t.username_effects ? (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)("style", {
                    children: `
                                        .username-typewriter .Typewriter {
                                            font-size: ${c.username.fontSize};
                                            font-weight: ${c.username.fontWeight};
                                        }
                                    `
                  }), (0, a.jsx)("div", {
                    className: "username-typewriter",
                    children: (0, a.jsx)(et(), {
                      options: {
                        strings: [f],
                        autoStart: !0,
                        loop: !0,
                        wrapperClassName: K().userDescriptionUsername,
                        cursorClassName: K().usernameCursor,
                        pauseFor: 1e3,
                        stringSplitter: tI
                      }
                    })
                  })]
                }) : "fuzzy" === k || "shuffle" === k ? (0, a.jsx)(eS.A, {
                  username: f,
                  usernameEffect: k,
                  fontSize: c.username.fontSize,
                  textColor: A,
                  marginBottom: "7px"
                }) : (0, a.jsx)("h1", {
                  className: `${K().userDescriptionUsername} ${"rgb"===t.username_effects&&i().rainbowName}`,
                  style: c.username,
                  children: f
                })
              }), !(!j && !_) && (0, a.jsx)("div", {
                className: K().badgeContainerWrapper,
                children: (0, a.jsx)(es, {
                  config: t,
                  premiumConfig: r
                })
              }), ("" !== t.description || 0 !== r.typewriter.length) && (0, a.jsx)("h3", {
                className: K().userDescriptionText,
                style: c.description,
                children: r.typewriter_enabled && 0 !== r.typewriter.length ? (0, a.jsx)(et(), {
                  options: {
                    strings: r.typewriter,
                    autoStart: !0,
                    loop: !0,
                    delay: 600 / S,
                    deleteSpeed: 600 / N,
                    pauseFor: 900,
                    stringSplitter: tI
                  }
                }) : t.description
              }), t.location && (0, a.jsx)(ea.A, {
                content: "Location",
                pageTooltipStyles: !0,
                offset: -10,
                children: (0, a.jsxs)("span", {
                  className: i().locationMarker,
                  style: c.locationMarker,
                  children: [X.A.locationMarker, " ", t.location]
                })
              })]
            }), "enabled" === t.presence && (0, a.jsx)("div", {
              className: `${i().discordPresenceWrapper} ${w&&o}`,
              children: (0, a.jsx)(eb, {
                loading: l,
                presenceInformation: s,
                font: r.font,
                description: t.description,
                discordUserBadges: g,
                discordData: e.discord,
                fontSize: r.font_size,
                discordPresenceSettings: T
              })
            }), t.socials.length > 0 && (0, a.jsx)("div", {
              className: `${K().socialsWrapper} ${w&&o}`,
              style: {
                width: "100%"
              },
              children: (0, a.jsx)(eh, {
                socials: t.socials,
                isMonochrome: t.monochrome,
                font: r.font,
                socialGlow: t.social_glow,
                iconColor: t.icon_color,
                username: e.username,
                fontSize: r.font_size,
                style: {
                  justifyContent: "left" === F ? "flex-start" : "right" === F ? "flex-end" : "center"
                }
              })
            })]
          }), (0, a.jsx)(ew, {
            challengeData: e._gpp_ch,
            username: e.username,
            premiumConfig: r,
            views: t.page_views,
            containerBorderRadius: r.border_radius,
            isUnfold: w,
            animationStartClass: o,
            isTemplatePreview: n
          })]
        })
      }
      var eC = r(50786),
        ek = r.n(eC);
      let eA = ({
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
          return (0, a.jsx)("iframe", {
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
        return (0, a.jsx)("p", {
          children: "Invalid Spotify URL"
        })
      };

      function eF({
        date: e,
        tz: t,
        faceStyle: r
      }) {
        let {
          h: s,
          m: o,
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
              a = e => parseInt(r.find(t => t.type === e)?.value ?? "0");
            return {
              h: a("hour") % 24,
              m: a("minute"),
              s: a("second")
            }
          } catch {
            return {
              h: 0,
              m: 0,
              s: 0
            }
          }
        })(), n = "dark" === r, l = n ? "#f0f0f0" : "#111111", c = n ? "#f04040" : "#cc2020", d = n ? "#555555" : "#999999", u = n ? "#2e2e2e" : "#cccccc", m = e => Number(e.toFixed(4)), f = (e, t) => {
          let r = Math.PI / 180 * (e - 90);
          return {
            x: m(35 + t * Math.cos(r)),
            y: m(35 + t * Math.sin(r))
          }
        };
        return (0, a.jsxs)("svg", {
          width: "70",
          height: "70",
          viewBox: "0 0 70 70",
          style: {
            flexShrink: 0
          },
          children: [(0, a.jsx)("circle", {
            cx: "35",
            cy: "35",
            r: "33",
            fill: n ? "#141414" : "#f0f0f0",
            stroke: n ? "#303030" : "#c0c0c0",
            strokeWidth: "1.5"
          }), [...Array(60)].map((e, t) => {
            let r = t / 60 * 360,
              s = t % 5 == 0,
              o = f(r, 30),
              i = f(r, s ? 23 : 27);
            return (0, a.jsx)("line", {
              x1: i.x,
              y1: i.y,
              x2: o.x,
              y2: o.y,
              stroke: s ? d : u,
              strokeWidth: s ? 2 : 1,
              strokeLinecap: "round"
            }, t)
          }), (0, a.jsxs)("g", {
            className: ek().clockHand,
            style: {
              transform: `rotate(${s%12/12*360+o/60*30}deg)`,
              transition: "transform 0.4s ease"
            },
            children: [(0, a.jsx)("line", {
              x1: "35",
              y1: "35",
              x2: "35",
              y2: "16",
              stroke: l,
              strokeWidth: "3.5",
              strokeLinecap: "round"
            }), (0, a.jsx)("line", {
              x1: "35",
              y1: "35",
              x2: "35",
              y2: "41",
              stroke: l,
              strokeWidth: "3.5",
              strokeLinecap: "round"
            })]
          }), (0, a.jsxs)("g", {
            className: ek().clockHand,
            style: {
              transform: `rotate(${o/60*360+i/60*6}deg)`,
              transition: "transform 0.3s ease"
            },
            children: [(0, a.jsx)("line", {
              x1: "35",
              y1: "35",
              x2: "35",
              y2: "9",
              stroke: l,
              strokeWidth: "2.2",
              strokeLinecap: "round"
            }), (0, a.jsx)("line", {
              x1: "35",
              y1: "35",
              x2: "35",
              y2: "42",
              stroke: l,
              strokeWidth: "2.2",
              strokeLinecap: "round"
            })]
          }), (0, a.jsxs)("g", {
            className: ek().clockHand,
            style: {
              transform: `rotate(${i/60*360}deg)`,
              transition: 0 === i ? "none" : "transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)"
            },
            children: [(0, a.jsx)("line", {
              x1: "35",
              y1: "35",
              x2: "35",
              y2: "7",
              stroke: c,
              strokeWidth: "1.3",
              strokeLinecap: "round"
            }), (0, a.jsx)("line", {
              x1: "35",
              y1: "35",
              x2: "35",
              y2: "44",
              stroke: c,
              strokeWidth: "1.3",
              strokeLinecap: "round"
            })]
          }), (0, a.jsx)("circle", {
            cx: "35",
            cy: "35",
            r: "3",
            fill: c
          }), (0, a.jsx)("circle", {
            cx: "35",
            cy: "35",
            r: "1.5",
            fill: l
          })]
        })
      }

      function e$({
        config: e,
        premiumConfig: t
      }) {
        var r, o, i;
        let n, l, c, d, u, m, f = p({
            font: t.font,
            fontSize: t.font_size
          }),
          [h, g] = (0, s.useState)({}),
          [x, v] = (0, s.useState)({}),
          [y, b] = (0, s.useState)({}),
          [j, _] = (0, s.useState)({}),
          [w, S] = (0, s.useState)({}),
          [N, C] = (0, s.useState)({}),
          [k, A] = (0, s.useState)(!0),
          [F, $] = (0, s.useState)(null),
          [T, P] = (0, s.useState)(null),
          U = (0, s.useRef)(null),
          E = Object.keys(t.second_tab)[0],
          z = !!t.second_tab_enabled && "enabled" !== e.presence,
          B = async () => {
            try {
              let e = `https://discord.com/api/v9/invites/${G(t.second_tab.discord)}?with_counts=true`,
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
                }), A(!1);
                return
              }
              let a = await r.json(),
                s = a.guild.features.includes("VERIFIED"),
                o = a.guild.features.includes("PARTNERED");
              g({
                ...a,
                isVerified: s,
                isPartnered: o
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
              A(!1)
            }
          }, I = async () => {
            let e = H(t.second_tab.github),
              r = await fetch(`https://api.github.com/users/${e}`);
            if (!r.ok) {
              v({
                error: !0
              }), A(!1);
              return
            }
            let a = await r.json();
            v({
              avatarUrl: a.avatar_url,
              username: a.login,
              followers: a.followers,
              repositories: a.public_repos,
              error: !1
            }), A(!1)
          }, M = async () => {
            let e = O(t.second_tab.telegram),
              r = await fetch("https://guns.lol/api/service/telegram", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  chatId: e
                })
              }),
              a = await r.json();
            if (!r.ok) {
              b({
                error: !0
              }), A(!1);
              return
            }
            b({
              avatar: a.avatar,
              name: a.name,
              members: a.members,
              error: !1
            }), A(!1)
          }, L = async () => {
            let e = q(t.second_tab.youtube),
              r = await fetch("https://guns.lol/api/service/youtube", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  channelId: e
                })
              }),
              a = await r.json();
            if (!r.ok) {
              S({
                error: !0
              }), A(!1);
              return
            }
            S({
              avatar: a.avatar,
              handle: a.handle,
              subscribers: a.subscribers,
              channelId: a.channelId,
              error: !1
            }), A(!1)
          }, D = async () => {
            let e = R(t.second_tab.roblox),
              r = await fetch("https://guns.lol/api/service/roblox", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  userId: e
                })
              }),
              a = await r.json();
            if (!r.ok) {
              _({
                error: !0
              }), A(!1);
              return
            }
            _({
              username: a.username,
              avatarUrl: a.avatar,
              friends: a.friends,
              followers: a.followers,
              error: !1
            }), A(!1)
          }, W = async () => {
            let e = V(t.second_tab.lastfm),
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
              C({
                error: !0
              }), A(!1);
              return
            }
            let a = await r.json();
            C({
              avatarUrl: a.avatar,
              username: a.username,
              artistCount: a.artist_count,
              playcount: a.playcount,
              error: !1
            }), A(!1)
          }, R = e => {
            let t = e.match(/(?:roblox\.com\/users\/)([a-zA-Z0-9-]+)/);
            return t ? t[1] : ""
          }, G = e => {
            let t = e.match(/(?:discord\.gg\/|discord\.com\/invite\/|discordapp\.com\/invite\/)([a-zA-Z0-9-]+)/);
            return t ? t[1] : ""
          }, H = e => {
            let t = e.match(/(?:github\.com\/)([a-zA-Z0-9-]+)/);
            return t ? t[1] : ""
          }, O = e => {
            let t = e.match(/(?:t\.me\/)([a-zA-Z0-9-]+)/);
            return t ? t[1] : ""
          }, q = e => {
            let t = e.match(/(?:youtube\.com\/(?:channel\/|user\/|c\/|@))([^/?]+)/);
            return t ? t[1] : ""
          }, V = e => {
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
          t.second_tab.discord && B(), t.second_tab.github && I(), t.second_tab.telegram && M(), t.second_tab.roblox && D(), t.second_tab.youtube && L(), t.second_tab.lastfm && W()
        }, [t.second_tab.discord, t.second_tab.github, t.second_tab.telegram, t.second_tab.roblox, t.second_tab.youtube, t.second_tab.lastfm]), (0, s.useEffect)(() => {
          if (t.second_tab.timezone) {
            try {
              let e = t.second_tab.timezone,
                r = Intl.DateTimeFormat().resolvedOptions().timeZone,
                a = new Date;
              $(a);
              let s = Y(e, a),
                o = Y(r, a),
                i = a.toLocaleTimeString("en-US", {
                  timeZone: r,
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: !1
                });
              P({
                diffMinutes: s - o,
                visitorTime: i
              })
            } catch {}
            return U.current = setInterval(() => $(new Date), 1e3), () => {
              U.current && clearInterval(U.current)
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
          timezone: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: (0, a.jsx)("path", {
              d: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8m.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67Z"
            })
          })
        };
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)("div", {
            className: ek().secondTab,
            children: !k || t.second_tab.spotify || t.second_tab.timezone ? t.second_tab.discord ? (0, a.jsxs)("div", {
              className: ek().discordServer,
              children: [(0, a.jsxs)("div", {
                className: ek().discordInformationWrapper,
                children: [(0, a.jsx)("div", {
                  className: ek().guildIcon,
                  children: h?.guild?.icon ? (0, a.jsx)("img", {
                    src: `https://cdn.discordapp.com/icons/${h.guild.id}/${h.guild.icon}.png`,
                    alt: ""
                  }) : (0, a.jsx)("div", {
                    className: ek().missingIcon,
                    children: (0, a.jsx)("h1", {
                      children: h.error ? "!" : h.guild?.name.charAt(0)
                    })
                  })
                }), (0, a.jsxs)("div", {
                  className: ek().guildInformation,
                  children: [(0, a.jsxs)("h1", {
                    style: f.serverName,
                    children: [h.guild?.name, " ", h.isVerified ? X.A.verifiedGuild : h.isPartnered ? X.A.partneredGuild : ""]
                  }), (0, a.jsxs)("h3", {
                    style: f.memberCount,
                    children: [(0, a.jsxs)("span", {
                      children: [X.A.status, " ", h.approximate_presence_count?.toLocaleString("en-US"), " Online"]
                    }), (0, a.jsxs)("span", {
                      children: [X.A.status, " ", h.approximate_member_count?.toLocaleString("en-US"), " Members"]
                    })]
                  }), !z && (0, a.jsx)(en(), {
                    href: `https://discord.gg/${!h.error?G(t.second_tab.discord):""}`,
                    target: "_blank",
                    style: f.joinButton,
                    children: "Join"
                  })]
                })]
              }), z ? (0, a.jsx)(en(), {
                href: `https://discord.gg/${!h.error?G(t.second_tab.discord):""}`,
                className: ek().joinButtonLarge,
                target: "_blank",
                style: f.joinButtonLarge,
                children: "Join"
              }) : (0, a.jsx)("div", {
                className: ek().widgetPlaceholder
              }), (0, a.jsxs)("span", {
                className: ek().platform,
                children: [X.A.discord, " Discord"]
              })]
            }) : t.second_tab.spotify ? (0, a.jsx)(eA, {
              spotifyUrl: t.second_tab.spotify
            }) : t.second_tab.github ? (0, a.jsxs)("div", {
              className: ek().githubWidget,
              children: [(0, a.jsxs)("div", {
                className: ek().githubInformationWrapper,
                children: [(0, a.jsx)("div", {
                  className: ek().githubIcon,
                  children: x.error ? (0, a.jsx)("h1", {
                    className: ek().missingIcon,
                    children: "!"
                  }) : (0, a.jsx)("img", {
                    src: x.avatarUrl,
                    alt: "GitHub Avatar"
                  })
                }), (0, a.jsxs)("div", {
                  className: ek().githubInformation,
                  children: [x.error ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("h1", {
                      style: f.secondTabWidgetHeading,
                      children: "Unknown"
                    }), (0, a.jsx)("h3", {
                      style: f.secondTabWidgetDescription,
                      children: (0, a.jsx)("span", {
                        children: "User not found."
                      })
                    })]
                  }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("h1", {
                      style: f.secondTabWidgetHeading,
                      children: x.username
                    }), (0, a.jsxs)("h3", {
                      style: f.secondTabWidgetDescription,
                      children: [(0, a.jsxs)("span", {
                        children: [X.A.followers, " ", x.followers?.toLocaleString("en-US"), " Followers"]
                      }), (0, a.jsxs)("span", {
                        children: [X.A.repositories, " ", x.repositories?.toLocaleString("en-US"), " Repos"]
                      })]
                    })]
                  }), (0, a.jsx)(en(), {
                    href: `https://github.com/${x.username}`,
                    target: "_blank",
                    style: f.secondTabWidgetButton,
                    children: "View Profile"
                  })]
                })]
              }), (0, a.jsxs)("span", {
                className: ek().platform,
                children: [X.A.github, " GitHub"]
              })]
            }) : t.second_tab.roblox ? (0, a.jsxs)("div", {
              className: ek().robloxWidget,
              children: [(0, a.jsxs)("div", {
                className: ek().robloxInformationWrapper,
                children: [(0, a.jsx)("div", {
                  className: ek().robloxIcon,
                  children: j.error ? (0, a.jsx)("h1", {
                    className: ek().missingIcon,
                    children: "!"
                  }) : (0, a.jsx)("img", {
                    src: j.avatarUrl,
                    alt: "Roblox Avatar"
                  })
                }), (0, a.jsxs)("div", {
                  className: ek().robloxInformation,
                  children: [j.error ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("h1", {
                      style: f.secondTabWidgetHeading,
                      children: "Unknown"
                    }), (0, a.jsx)("h3", {
                      style: f.secondTabWidgetDescription,
                      children: (0, a.jsx)("span", {
                        children: "Could not fetch Roblox profile."
                      })
                    })]
                  }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("h1", {
                      style: f.secondTabWidgetHeading,
                      children: j.username
                    }), (0, a.jsxs)("h3", {
                      style: f.secondTabWidgetDescription,
                      children: [(0, a.jsxs)("span", {
                        children: [X.A.friends, " ", j.friends?.toLocaleString("en-US"), " Friends"]
                      }), (0, a.jsxs)("span", {
                        children: [X.A.followers, " ", j.followers?.toLocaleString("en-US"), " Followers"]
                      })]
                    })]
                  }), (0, a.jsx)(en(), {
                    href: `https://roblox.com/users/${R(t.second_tab.roblox)}/profile`,
                    target: "_blank",
                    style: f.secondTabWidgetButton,
                    children: "View Profile"
                  })]
                })]
              }), (0, a.jsxs)("span", {
                className: ek().platform,
                children: [X.A.roblox, " Roblox"]
              })]
            }) : t.second_tab.telegram ? (0, a.jsxs)("div", {
              className: ek().telegramWidget,
              children: [(0, a.jsxs)("div", {
                className: ek().telegramInformationWrapper,
                children: [(0, a.jsx)("div", {
                  className: ek().telegramIcon,
                  children: y.error ? (0, a.jsx)("h1", {
                    className: ek().missingIcon,
                    children: "!"
                  }) : y.avatar ? (0, a.jsx)("img", {
                    src: y.avatar,
                    alt: "Telegram Avatar"
                  }) : (0, a.jsx)("h1", {
                    className: ek().missingIcon,
                    children: y.name && y.name[0]
                  })
                }), (0, a.jsxs)("div", {
                  className: ek().telegramInformation,
                  children: [y.error ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("h1", {
                      style: f.secondTabWidgetHeading,
                      children: "Unknown"
                    }), (0, a.jsx)("h3", {
                      style: f.secondTabWidgetDescription,
                      children: (0, a.jsx)("span", {
                        children: "Channel not found."
                      })
                    })]
                  }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("h1", {
                      style: f.secondTabWidgetHeading,
                      children: y.name
                    }), (0, a.jsx)("h3", {
                      style: f.secondTabWidgetDescription,
                      children: (0, a.jsxs)("span", {
                        children: [X.A.followers, " ", y.members?.toLocaleString("en-US"), " Subscribers"]
                      })
                    })]
                  }), (0, a.jsx)(en(), {
                    href: `https://t.me/${O(t.second_tab.telegram)}`,
                    target: "_blank",
                    style: f.secondTabWidgetButton,
                    children: "Join"
                  })]
                })]
              }), (0, a.jsxs)("span", {
                className: ek().platform,
                children: [X.A.telegram, " Telegram"]
              })]
            }) : t.second_tab.youtube ? (0, a.jsxs)("div", {
              className: ek().youtubeWidget,
              children: [(0, a.jsxs)("div", {
                className: ek().youtubeInformationWrapper,
                children: [(0, a.jsx)("div", {
                  className: ek().youtubeIcon,
                  children: w.error ? (0, a.jsx)("h1", {
                    className: ek().missingIcon,
                    children: "!"
                  }) : (0, a.jsx)("img", {
                    src: w.avatar,
                    alt: "YouTube Avatar"
                  })
                }), (0, a.jsxs)("div", {
                  className: ek().youtubeInformation,
                  children: [w.error ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("h1", {
                      style: f.secondTabWidgetHeading,
                      children: "Unknown"
                    }), (0, a.jsx)("h3", {
                      style: f.secondTabWidgetDescription,
                      children: (0, a.jsx)("span", {
                        children: "Channel not found."
                      })
                    })]
                  }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("h1", {
                      style: f.secondTabWidgetHeading,
                      children: w.handle
                    }), (0, a.jsx)("h3", {
                      style: f.secondTabWidgetDescription,
                      children: (0, a.jsxs)("span", {
                        children: [X.A.followers, " ", (r = w.subscribers) >= 1e6 ? (r / 1e6).toFixed(1) + "M" : r >= 1e3 ? (r / 1e3).toFixed(1) + "K" : r, " Subscribers"]
                      })
                    })]
                  }), (0, a.jsx)(en(), {
                    href: `https://youtube.com/channel/${w.channelId}`,
                    target: "_blank",
                    style: f.secondTabWidgetButton,
                    children: "View Channel"
                  })]
                })]
              }), (0, a.jsxs)("span", {
                className: ek().platform,
                children: [X.A.youtube, " YouTube"]
              })]
            }) : t.second_tab.lastfm ? (0, a.jsxs)("div", {
              className: ek().lastFMWidget,
              children: [(0, a.jsxs)("div", {
                className: ek().lastFMInformationWrapper,
                children: [(0, a.jsx)("div", {
                  className: ek().lastFMIcon,
                  children: N.error ? (0, a.jsx)("h1", {
                    className: ek().missingIcon,
                    children: "!"
                  }) : (0, a.jsx)("img", {
                    src: N.avatarUrl,
                    alt: "Last.fm Avatar"
                  })
                }), (0, a.jsxs)("div", {
                  className: ek().lastFMInformation,
                  children: [N.error ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("h1", {
                      style: f.secondTabWidgetHeading,
                      children: "Unknown"
                    }), (0, a.jsx)("h3", {
                      style: f.secondTabWidgetDescription,
                      children: (0, a.jsx)("span", {
                        children: "User not found."
                      })
                    })]
                  }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("h1", {
                      style: f.secondTabWidgetHeading,
                      children: N.username
                    }), (0, a.jsxs)("h3", {
                      style: f.secondTabWidgetDescription,
                      children: [(0, a.jsxs)("span", {
                        children: [X.A.playCount, " ", Number(N.playcount)?.toLocaleString("en-US"), " Scrobbles"]
                      }), (0, a.jsxs)("span", {
                        children: [X.A.artistCount, " ", Number(N.artistCount)?.toLocaleString("en-US"), " Artists"]
                      })]
                    })]
                  }), (0, a.jsx)(en(), {
                    href: `https://last.fm/user/${V(t.second_tab.lastfm)}`,
                    target: "_blank",
                    style: f.secondTabWidgetButton,
                    children: "View Profile"
                  })]
                })]
              }), (0, a.jsxs)("span", {
                className: ek().platform,
                children: [X.A.lastfm, " Last.fm"]
              })]
            }) : t.second_tab.timezone && (0, a.jsxs)("div", {
              className: ek().timezoneWidget,
              children: [!t.clock_hidden && (0, a.jsx)(ea.A, {
                content: t.second_tab.timezone.replace(/_/g, " "),
                placement: "top",
                pageTooltipStyles: !0,
                children: (0, a.jsx)("div", {
                  className: ek().timezoneClockWrapper,
                  children: (0, a.jsx)(eF, {
                    date: F ?? new Date(0),
                    tz: t.second_tab.timezone,
                    faceStyle: t.clock_face_style ?? "dark"
                  })
                })
              }), (0, a.jsxs)("div", {
                className: ek().timezoneInfo,
                children: [(0, a.jsx)("h1", {
                  className: ek().timezoneDigital,
                  style: f.secondTabWidgetHeading,
                  children: (() => {
                    let e;
                    if (!F) return "--:--:--";
                    let r = "12h" === t.clock_time_format,
                      s = (e = t.second_tab.timezone, F.toLocaleTimeString("en-US", {
                        timeZone: e,
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: r
                      }));
                    if (!r) return s;
                    let o = s.match(/^([\d:]+)\s*(AM|PM)$/i);
                    return o ? (0, a.jsxs)(a.Fragment, {
                      children: [o[1], (0, a.jsx)("span", {
                        className: ek().timezoneAmPm,
                        children: o[2]
                      })]
                    }) : s
                  })()
                }), (0, a.jsxs)("h3", {
                  className: ek().timezoneMeta,
                  children: [(0, a.jsx)("span", {
                    children: F ? (n = t.second_tab.timezone, F.toLocaleDateString("en-US", {
                      timeZone: n,
                      weekday: "short",
                      month: "short",
                      day: "numeric"
                    })) : "---"
                  }), (0, a.jsx)("span", {
                    className: ek().timezoneSeparator,
                    children: "\xb7"
                  }), (0, a.jsx)("span", {
                    children: F ? (o = t.second_tab.timezone, l = new Intl.DateTimeFormat("en-US", {
                      timeZone: o,
                      timeZoneName: "short"
                    }).formatToParts(F), l.find(e => "timeZoneName" === e.type)?.value ?? o) : "--"
                  })]
                }), null !== T && (0, a.jsx)("div", {
                  className: ek().timezoneVisitor,
                  children: 0 === T.diffMinutes ? (0, a.jsx)("span", {
                    children: "Same timezone as you"
                  }) : (0, a.jsxs)("span", {
                    children: ["Your time: ", T.visitorTime, " (", (c = Math.abs(i = T.diffMinutes), d = i >= 0 ? "+" : "-", u = Math.floor(c / 60), 0 == (m = c % 60) ? `${d}${u}h` : 0 === u ? `${d}${m}m` : `${d}${u}h ${m}m`), ")"]
                  })
                })]
              }), (0, a.jsxs)("span", {
                className: ek().platform,
                children: [Z.timezone, " Timezone"]
              })]
            }) : (0, a.jsxs)("h1", {
              className: ek().loadingText,
              children: [Z[E], " Loading Widget..."]
            })
          })
        })
      }

      function eT({
        userData: e,
        config: t,
        premiumConfig: r,
        presenceInformation: s,
        animationStartClass: o,
        isTemplatePreview: n,
        discordLoading: l
      }) {
        let c = p({
            font: r.font,
            fontSize: r.font_size
          }),
          d = ev(s),
          u = d.avatarDecoration || "",
          m = d.avatar || "",
          f = t.use_discord_avatar && m ? m : t.avatar,
          h = e.account_created,
          g = r.join_date ?? "relative",
          x = r.second_tab_enabled && "enabled" !== t.presence ? {
            display: "inherit!important"
          } : {},
          v = "" !== t.display_name ? t.display_name : e.username,
          y = e.discord?.user_badges ? t.user_badges.includes("server_booster") || t.user_badges.find(e => "server_booster" === e.name) ? [...e.discord.user_badges, "Server Booster"] : e.discord.user_badges : [],
          b = `
                    .${ek().widgetContainerWrapper} { 
                        margin-top: 27px;
                    } 
                    `,
          j = t.user_badges,
          _ = t.custom_badges,
          w = j.length > 0 && j[0] && "string" == typeof j[0],
          S = _.length > 0 && "string" == typeof _[0][0],
          N = j.length > 0 && w || !w && j.some(e => !0 === e.enabled),
          C = _.length > 0 && S || !S && _.some(e => !0 === e.enabled),
          k = r.typewriter_speed ?? 5,
          A = r.typewriter_delete_speed ?? 7,
          F = t.location,
          $ = o === i().unfoldStart,
          T = !!(t.discord_avatar_decoration && u),
          P = r.border_radius > 35 && .15 * r.border_radius,
          U = t.username_effects,
          E = t.text_color,
          z = r.links_position ?? "center",
          B = !!("" !== t.avatar || t.use_discord_avatar && m),
          I = Object.keys(r.second_tab).length,
          M = r.second_tab_enabled,
          L = t.discord_presence_settings || {
            show_badges: !0,
            show_guild_tag: !0,
            idle_text: ""
          };
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsxs)("div", {
            className: `${ek().userProfile} ${$&&o}`,
            children: [B ? (0, a.jsxs)("div", {
              className: i().avatarWrapper,
              children: [T && (0, a.jsx)("img", {
                src: u,
                alt: "",
                className: i().avatarDecorationLayout2
              }), (0, a.jsx)("img", {
                src: f,
                alt: "",
                className: ek().avatar
              })]
            }) : (0, a.jsx)("span", {
              className: ek().userProfileSvg,
              children: X.A.userAvatar
            }), (0, a.jsxs)("div", {
              className: ek().userDescription,
              children: [(0, a.jsxs)("div", {
                className: ek().usernameWrapper,
                children: [(0, a.jsx)(ea.A, {
                  content: `UID ${e.uid.toLocaleString("en-US")}`,
                  offset: 0,
                  pageTooltipStyles: !0,
                  children: "typewriter" === t.username_effects ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("style", {
                      children: `
                                        .username-typewriter .Typewriter {
                                            font-size: ${c.username.fontSize};
                                            font-weight: ${c.username.fontWeight};
                                            line-height: 41px;
                                        }
                                    `
                    }), (0, a.jsx)("div", {
                      className: `username-typewriter ${ek().usernameTypewriter}`,
                      children: (0, a.jsx)(et(), {
                        options: {
                          strings: [v],
                          autoStart: !0,
                          loop: !0,
                          wrapperClassName: ek().usernameStyles,
                          cursorClassName: ek().usernameCursor,
                          pauseFor: 1e3,
                          stringSplitter: tI
                        }
                      })
                    })]
                  }) : "fuzzy" === U || "shuffle" === U ? (0, a.jsx)(eS.A, {
                    username: v,
                    usernameEffect: U,
                    fontSize: c.username.fontSize,
                    textColor: E
                  }) : (0, a.jsx)("h1", {
                    style: {
                      ...c.username,
                      lineHeight: "41px"
                    },
                    className: `${"rgb"===t.username_effects&&i().rainbowName}`,
                    children: v
                  })
                }), !(!N && !C) && (0, a.jsx)(es, {
                  config: t,
                  premiumConfig: r
                })]
              }), ("" !== t.description || 0 !== r.typewriter.length) && (0, a.jsx)("h3", {
                className: ek().userDescriptionText,
                style: c.description,
                children: r.typewriter_enabled && 0 !== r.typewriter.length ? (0, a.jsx)(et(), {
                  options: {
                    strings: r.typewriter,
                    autoStart: !0,
                    loop: !0,
                    delay: 600 / k,
                    deleteSpeed: 600 / A,
                    pauseFor: 900,
                    stringSplitter: tI
                  }
                }) : t.description
              }), "none" !== g && (0, a.jsxs)("h2", {
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
          }), r.second_tab_enabled && "enabled" === t.presence ? (0, a.jsx)("style", {
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
                        ${r.second_tab_enabled&&"enabled"!==t.presence?b:""}

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
          }) : (0, a.jsx)("style", {
            children: `
                    .${i().discordPresenceContainer} {
                        max-width: initial;
                    }
                    .${i().discordActivity} {
                        justify-content: space-between;
                        width: 100%;
                    }
                    @media (max-width: 720px) {
                        ${"enabled"!==t.presence&&b}
                    }
                    `
          }), (0, a.jsx)("div", {
            className: `${ek().widgetContainerWrapper} ${$&&o}`,
            style: x,
            children: (0, a.jsxs)("div", {
              className: ek().widgetContainer,
              style: x,
              children: ["enabled" === t.presence && (0, a.jsx)("div", {
                className: ek().widgetContainerFlex,
                children: (0, a.jsx)(eb, {
                  loading: l,
                  presenceInformation: s,
                  font: r.font,
                  description: t.description,
                  discordData: e.discord,
                  discordUserBadges: M && I >= 1 ? [] : y,
                  fontSize: r.font_size,
                  discordPresenceSettings: L
                })
              }), r.second_tab_enabled && Object.keys(r.second_tab).length > 0 && (0, a.jsx)("div", {
                className: ek().widgetContainerFlex,
                style: x,
                children: (0, a.jsx)(e$, {
                  config: t,
                  premiumConfig: r
                })
              })]
            })
          }), t.socials.length > 0 && (0, a.jsx)("div", {
            className: `${ek().socialsWrapper} ${$&&o}`,
            style: {
              marginBottom: F ? "35px" : "20px"
            },
            children: (0, a.jsx)(eh, {
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
          }), (0, a.jsxs)("div", {
            className: `${ek().bottomLeftWrapper} ${i().bottomLeftWrapperGlobal} ${F&&i().bottomLeftWrapperLocation} ${$&&o}`,
            style: {
              bottom: P ? 12 + P : 13,
              left: P ? 15 + P : 18
            },
            children: [(0, a.jsx)(ew, {
              challengeData: e._gpp_ch,
              username: e.username,
              premiumConfig: r,
              views: t.page_views,
              containerBorderRadius: null,
              isUnfold: "" === F && $,
              animationStartClass: o,
              isTemplatePreview: n
            }), F && (0, a.jsxs)(a.Fragment, {
              children: [!r.hide_views && (0, a.jsx)("div", {
                className: ek().bottomLeftDivider
              }), (0, a.jsx)(ea.A, {
                content: "Location",
                pageTooltipStyles: !0,
                children: (0, a.jsxs)("span", {
                  className: i().locationMarker,
                  style: c.locationMarker,
                  children: [X.A.locationMarker, " ", F]
                })
              })]
            })]
          })]
        })
      }
      var eP = r(13653),
        eU = r.n(eP),
        eE = r(54834);

      function ez({
        buttons: e,
        showUrl: t,
        font: r,
        fontSize: s,
        textAlign: o
      }) {
        let i = p({
          font: r,
          fontSize: s
        });
        return (0, a.jsx)("div", {
          className: eU().userButtons,
          children: e.map((e, r) => (0, a.jsx)("div", {
            className: eU().button,
            style: {
              height: t ? 65 : ""
            },
            children: (0, a.jsxs)(en(), {
              href: e.button_url,
              target: "_blank",
              children: ["" !== e.button_icon && (0, a.jsx)("div", {
                className: eU().buttonIconWrapper,
                children: (0, a.jsx)("img", {
                  src: e.button_icon,
                  className: eU().buttonIcon,
                  alt: ""
                })
              }), (0, a.jsxs)("div", {
                className: eU().buttonInformationWrapper,
                style: {
                  marginLeft: "" != e.button_icon && "left" === o ? 60 : ""
                },
                children: [(0, a.jsx)("h1", {
                  style: i.buttonText,
                  children: e.button_title
                }), t && (0, a.jsxs)("span", {
                  className: eU().buttonShowUrl,
                  style: i.buttonUrl,
                  children: [eE.A.link, " ", e.button_url]
                })]
              })]
            })
          }, r))
        })
      }
      let eB = [0, 8, 17, 29, 44, 62, 84, 110, 140, 174],
        eI = (e, t) => {
          let r = Number.parseFloat(e);
          return Number.isFinite(r) ? r : t
        };

      function eM({
        effect: e = "shimmer"
      }) {
        let t = (0, s.useRef)(null),
          r = (0, s.useRef)(null);
        return ((0, s.useEffect)(() => {
          if ("shimmer" !== e) return;
          let a = t.current,
            s = a?.parentElement;
          if (!a || !s || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
          let o = 0,
            i = !1,
            n = 0,
            l = 0,
            c = !0,
            d = !document.hidden,
            u = () => {
              let e, t, a, o, i, n, l, c, d;
              e = window.getComputedStyle(s), t = s.clientWidth, a = s.clientHeight, o = eI(e.getPropertyValue("--profileBorderWidth"), 2), i = eI(e.getPropertyValue("--containerRadius"), 25), n = Math.max(0, t - o), l = Math.max(0, a - o), c = Math.min(Math.max(0, i - o / 2), n / 2, l / 2), d = 2 * (n + l - 4 * c) + 2 * Math.PI * c, r.current = {
                width: t,
                height: a,
                radius: c,
                borderWidth: o,
                perimeter: d
              }
            },
            m = e => {
              if (!i) return;
              let t = r.current;
              if (t && t.perimeter > 0) {
                let r = n > 0 ? e - n : 0;
                n = e, l += r / 1e3 * 210, eB.forEach((e, r) => {
                  let s = ((e, t) => {
                    let {
                      width: r,
                      height: a,
                      radius: s,
                      borderWidth: o,
                      perimeter: i
                    } = e, n = o / 2, l = r - n, c = a - n, d = Math.max(0, l - n - 2 * s), u = Math.max(0, c - n - 2 * s), m = (t % i + i) % i;
                    if (m <= d) return {
                      x: n + s + m,
                      y: n
                    };
                    let f = Math.PI * s / 2;
                    if ((m -= d) <= f && s > 0) {
                      let e = -Math.PI / 2 + m / s;
                      return {
                        x: l - s + Math.cos(e) * s,
                        y: n + s + Math.sin(e) * s
                      }
                    }
                    if ((m -= f) <= u) return {
                      x: l,
                      y: n + s + m
                    };
                    if ((m -= u) <= f && s > 0) {
                      let e = m / s;
                      return {
                        x: l - s + Math.cos(e) * s,
                        y: c - s + Math.sin(e) * s
                      }
                    }
                    if ((m -= f) <= d) return {
                      x: l - s - m,
                      y: c
                    };
                    if ((m -= d) <= f && s > 0) {
                      let e = Math.PI / 2 + m / s;
                      return {
                        x: n + s + Math.cos(e) * s,
                        y: c - s + Math.sin(e) * s
                      }
                    }
                    if ((m -= f) <= u) return {
                      x: n,
                      y: c - s - m
                    };
                    m -= u;
                    let p = Math.PI + (s > 0 ? m / s : 0);
                    return {
                      x: n + s + Math.cos(p) * s,
                      y: n + s + Math.sin(p) * s
                    }
                  })(t, l - e);
                  a.style.setProperty(`--profile-shimmer-x-${r}`, `${s.x}px`), a.style.setProperty(`--profile-shimmer-y-${r}`, `${s.y}px`)
                })
              }
              o = requestAnimationFrame(m)
            },
            f = () => {
              i = !1, n = 0, o && (cancelAnimationFrame(o), o = 0)
            },
            p = () => {
              !i && c && d && (i = !0, o = requestAnimationFrame(m))
            },
            h = () => {
              (d = !document.hidden) ? p(): f()
            };
          u();
          let g = new ResizeObserver(u);
          g.observe(s), document.addEventListener("visibilitychange", h);
          let x = null;
          return "undefined" != typeof IntersectionObserver && (x = new IntersectionObserver(([e]) => {
            (c = !!e?.isIntersecting) ? p(): f()
          }, {
            threshold: .01
          })).observe(s), p(), () => {
            f(), g.disconnect(), x?.disconnect(), document.removeEventListener("visibilitychange", h)
          }
        }, [e]), "pulse" === e) ? (0, a.jsx)("div", {
          ref: t,
          className: `${i().profileBorderLayer} ${i().profilePulseBorderLayer}`
        }) : (0, a.jsx)("div", {
          ref: t,
          className: `${i().profileBorderLayer} ${i().profileShimmerBorderLayer}`
        })
      }
      let eL = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;

      function eD({
        animationStartClass: e,
        audioPlayer: t,
        setAudioData: r,
        audioData: o,
        setAudioPlayer: n,
        audioContainerRef: l,
        currentFont: c,
        audioList: d,
        setVolume: u,
        fontSize: m,
        profileBorderClass: f = "",
        profileBorderEffect: h = "shimmer",
        profileBorderEffectEnabled: g = !!(f && h),
        revealContent: x = !1,
        revealOrder: v = 1,
        lyricsConfig: y = null
      }) {
        let b = e => {
            if (isNaN(e) || e === 1 / 0) return "--:--";
            let t = Math.floor(e / 60),
              r = Math.floor(e % 60);
            return isNaN(t) || isNaN(r) ? "--:--" : `${t}:${r<10?`0${r}`:r}`
          },
          j = p({
            font: c,
            fontSize: m
          }),
          _ = b(t.currentTime),
          w = b(t.duration),
          S = Number.isFinite(t.duration) && t.duration > 0 ? Math.min(Math.max(t.currentTime / t.duration * 100, 0), 100) : 0,
          N = (0, s.useRef)(!1),
          C = x ? "" : e,
          k = (e, t, r) => x ? {
            "data-reveal-part": e,
            style: {
              ...r,
              "--portfolioRevealOrder": v + t
            }
          } : r ? {
            style: r
          } : {},
          A = (0, s.useRef)({
            activePointerId: null,
            wasPlaying: !1,
            barRect: null,
            lastClientX: null
          }),
          F = y?.lyrics_track_map && "object" == typeof y.lyrics_track_map ? y.lyrics_track_map : {},
          $ = String(o?.id ?? ""),
          T = Object.values(F).find(e => e?.track_url === o?.url),
          P = F[$] || F.__single__ || T || null,
          U = (0, s.useMemo)(() => (function(e) {
            if (!e) return [];
            let t = e.split("\n"),
              r = [];
            for (let e of t) {
              let t = e.trim();
              if (!t) continue;
              let a = Array.from(t.matchAll(eL));
              if (0 === a.length) continue;
              let s = t.replace(eL, "").trim();
              for (let e of a) {
                let t = Number(e[1] || 0),
                  a = Number(e[2] || 0),
                  o = Number(((e[3] || "0") + "00").slice(0, 3));
                if (!Number.isFinite(t) || !Number.isFinite(a) || !Number.isFinite(o)) continue;
                let i = (60 * t + a) * 1e3 + o;
                r.push({
                  timeMs: i,
                  text: s || "..."
                })
              }
            }
            return r.sort((e, t) => e.timeMs - t.timeMs)
          })(String(P?.synced_lyrics || "")), [P?.synced_lyrics]),
          E = (0, s.useMemo)(() => (function(e, t) {
            if (0 === e.length || !Number.isFinite(t) || t < 0) return -1;
            let r = 1e3 * t,
              a = -1;
            for (let t = 0; t < e.length; t++)
              if (e[t].timeMs <= r) a = t;
              else break;
            return a
          })(U, t.currentTime), [U, t.currentTime]),
          z = E >= 0 ? E : 0,
          B = x && y?.show_lyrics === !0,
          I = g && !!h,
          M = e => {
            if (!e || "object" != typeof e) return !1;
            let t = F[String(e.id ?? "")],
              r = Object.values(F).find(t => t?.track_url === e?.url),
              a = t || F.__single__ || r;
            return "string" == typeof a?.synced_lyrics && a.synced_lyrics.trim().length > 0
          },
          L = e => {
            if (!Array.isArray(d) || 0 === d.length) return null;
            let t = d.length,
              r = d.findIndex(e => e.id === o.id),
              a = r >= 0 ? r : d.findIndex(e => e.url === o.url),
              s = a >= 0 ? a : 0;
            for (let r = 1; r < t; r++) {
              let a = d[(s + e * r + t) % t];
              if (M(a)) return a
            }
            return null
          },
          D = e => {
            let r = t.ref,
              a = r?.duration || t.duration;
            if (!r || !Number.isFinite(a) || a <= 0) return;
            let s = Math.min(Math.max(e, 0), a);
            r.currentTime = s, n(e => ({
              ...e,
              currentTime: s,
              duration: a,
              ref: r
            }))
          },
          W = e => {
            let r = A.current.barRect,
              a = t.ref?.duration || t.duration;
            if (!r || !Number.isFinite(a) || a <= 0) return;
            let s = r.width > 0 ? (e - r.left) / r.width : 0;
            A.current.lastClientX = e, D(s * a)
          },
          R = (e, r = !0) => {
            let a = t.ref,
              s = A.current.activePointerId === e.pointerId && A.current.wasPlaying;
            A.current.activePointerId === e.pointerId && (e.preventDefault(), W(r ? e.clientX : A.current.lastClientX ?? e.clientX)), e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId), A.current = {
              activePointerId: null,
              wasPlaying: !1,
              barRect: null,
              lastClientX: null
            }, a && s && G(a).then(e => {
              e && n(e => ({
                ...e,
                playing: !0,
                ref: a
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
          H = () => {
            if (!t.ref || !Array.isArray(d) || 0 === d.length) return;
            let e = d.findIndex(e => e.id === o.id);
            if (1 === d.length) {
              t.ref.currentTime = 0;
              return
            }
            if (B) {
              let e = L(-1);
              if (!e) return;
              q(e);
              return
            }
            q(0 === e ? d[d.length - 1] : d[e - 1])
          },
          O = () => {
            if (!t.ref || !Array.isArray(d) || 0 === d.length) return;
            let e = d.findIndex(e => e.id === o.id);
            if (1 === d.length) {
              t.ref.currentTime = 0;
              return
            }
            if (B) {
              let e = L(1);
              if (!e) return;
              q(e);
              return
            }
            q(e === d.length - 1 ? d[0] : d[e + 1])
          },
          q = e => {
            let a = t.ref;
            if (!a) return;
            let s = () => {
                n(e => ({
                  ...e,
                  currentTime: a.currentTime,
                  duration: a.duration,
                  ref: a
                }))
              },
              o = () => {
                G(a).then(e => {
                  e && (n(e => ({
                    ...e,
                    playing: !0,
                    ref: a
                  })), u({
                    muted: !1,
                    volume: 100
                  }), a.addEventListener("timeupdate", s))
                }), a.removeEventListener("canplaythrough", o)
              };
            a.pause(), a.removeEventListener("timeupdate", s), a.removeEventListener("canplaythrough", o), a.src.includes(e.url) || (a.src = e.url), a.currentTime = 0, a.volume = .25, a.loop = !0, r({
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
              ref: a
            })), a.readyState >= 3 ? o() : a.addEventListener("canplaythrough", o)
          },
          V = e => {
            N.current || (N.current = !0, e(), setTimeout(() => {
              N.current = !1
            }, 250))
          };
        return (0, a.jsxs)("div", {
          className: `${i().audioPlayer} ${C} ${f}`,
          ref: l,
          children: [f && !B && (0, a.jsx)(eM, {
            effect: h
          }), B && (0, a.jsxs)("div", {
            className: i().audioLyricsBackdropLayer,
            children: [o.cover && (0, a.jsx)("div", {
              className: i().audioLyricsCoverBackdrop,
              style: {
                backgroundImage: `url("${o.cover}")`
              }
            }), (0, a.jsx)("span", {
              className: i().audioLyricsBlobPrimary
            }), (0, a.jsx)("span", {
              className: i().audioLyricsBlobSecondary
            })]
          }), (0, a.jsxs)("div", {
            className: i().audioPlayerInner,
            children: [o.cover && "" !== o.cover ? (0, a.jsx)("img", {
              src: o.cover,
              ...k("audio-cover", 0, {
                borderRadius: "calc(var(--containerRadius) - 10px)"
              }),
              alt: "",
              className: i().audioCover
            }) : (0, a.jsx)("span", {
              className: i().audioIcon,
              ...k("audio-icon", 0, {
                borderRadius: "calc(var(--containerRadius) - 10px)"
              }),
              children: eE.A.audioIcon
            }), (0, a.jsxs)("div", {
              className: `${i().audioContainer}`,
              ...k("audio-controls", 1),
              children: [(0, a.jsx)("h1", {
                className: i().audioTitle,
                style: j.audioPlayerTitle,
                children: o.title
              }), (0, a.jsxs)("div", {
                className: i().audioControls,
                children: [(0, a.jsxs)("div", {
                  className: i().audioProgressBarWrapper,
                  children: [(0, a.jsx)("span", {
                    style: j.audioPlayerControls,
                    children: _
                  }), (0, a.jsx)("div", {
                    className: i().audioProgressBar,
                    tabIndex: 0,
                    "aria-valuemin": 0,
                    "aria-valuemax": Math.round(t.duration || 0),
                    "aria-valuenow": Math.round(t.currentTime || 0),
                    onPointerDown: e => {
                      let r = t.ref;
                      if (!r) return;
                      e.preventDefault();
                      let a = e.currentTarget.getBoundingClientRect();
                      A.current = {
                        activePointerId: e.pointerId,
                        wasPlaying: !r.paused,
                        barRect: {
                          left: a.left,
                          width: a.width
                        },
                        lastClientX: e.clientX
                      }, r.paused || (r.pause(), n(e => ({
                        ...e,
                        playing: !1,
                        ref: r
                      }))), e.currentTarget.setPointerCapture(e.pointerId), W(e.clientX)
                    },
                    onPointerMove: e => {
                      1 === e.buttons && A.current.activePointerId === e.pointerId && (e.preventDefault(), W(e.clientX))
                    },
                    onPointerUp: e => R(e),
                    onPointerCancel: e => R(e, !1),
                    onLostPointerCapture: e => R(e, !1),
                    onKeyDown: e => {
                      let r = t.ref?.duration || t.duration;
                      Number.isFinite(r) && !(r <= 0) && ("ArrowLeft" === e.key || "ArrowDown" === e.key ? (e.preventDefault(), D(t.currentTime - 5)) : "ArrowRight" === e.key || "ArrowUp" === e.key ? (e.preventDefault(), D(t.currentTime + 5)) : "Home" === e.key ? (e.preventDefault(), D(0)) : "End" === e.key && (e.preventDefault(), D(r)))
                    },
                    children: (0, a.jsxs)("div", {
                      className: i().audioProgressTrack,
                      children: [(0, a.jsx)("div", {
                        className: i().audioProgress
                      }), (0, a.jsx)("div", {
                        className: i().audioProgressPlaying,
                        style: {
                          width: S + "%"
                        }
                      }), (0, a.jsx)("div", {
                        className: i().audioProgressThumb,
                        style: {
                          left: S + "%"
                        }
                      })]
                    })
                  }), (0, a.jsx)("span", {
                    style: j.audioPlayerControls,
                    children: w
                  })]
                }), (0, a.jsxs)("div", {
                  className: i().controlButtons,
                  children: [(0, a.jsx)("span", {
                    className: i().sideControlButton,
                    onClick: () => V(H),
                    children: eE.A.skipBackward
                  }), (0, a.jsx)("span", {
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
                    children: t.playing ? eE.A.pause : eE.A.play
                  }), (0, a.jsx)("span", {
                    className: i().sideControlButton,
                    onClick: () => V(O),
                    children: eE.A.skipForward
                  })]
                })]
              })]
            })]
          }), B && (0, a.jsxs)("div", {
            className: `${i().audioLyricsShell} ${I?f:""}`,
            ...k("audio-lyrics", 2),
            children: [I && (0, a.jsx)(eM, {
              effect: h
            }), U.length > 0 ? (0, a.jsx)("div", {
              className: i().audioLyricsViewport,
              children: U.map((e, t) => {
                let r = t - z,
                  s = Math.abs(r);
                if (s > 8) return null;
                let o = t === E,
                  n = E >= 0 && t < E,
                  l = {
                    "--lyrics-line-offset": String(r)
                  };
                return (0, a.jsx)("p", {
                  "data-lyrics-line": t,
                  style: l,
                  className: `${i().audioLyricsLine} ${o?i().audioLyricsLineActive:""} ${s<=1?i().audioLyricsLineNear:""} ${s>4?i().audioLyricsLineFaded:""} ${n?i().audioLyricsLinePast:""}`,
                  children: (0, a.jsx)("span", {
                    className: i().audioLyricsLineText,
                    children: e.text
                  })
                }, `${e.timeMs}-${t}`)
              })
            }) : (0, a.jsx)("p", {
              className: i().audioLyricsEmpty,
              children: "No synced lyrics applied for this track yet."
            })]
          })]
        })
      }

      function eW({
        userData: e,
        config: t,
        premiumConfig: r,
        presenceInformation: s,
        animationStartClass: o,
        setAudioData: n,
        audioData: l,
        audioPlayer: c,
        setAudioPlayer: d,
        audioContainerRef: u,
        setVolume: m,
        profileBorderClass: f = "",
        profileBorderEffect: h
      }) {
        let g = p({
            font: r.font,
            fontSize: r.font_size
          }),
          x = ev(s),
          v = x.avatar || "",
          y = t.use_discord_avatar && v ? v : t.avatar,
          b = "" !== t.display_name ? t.display_name : e.username,
          j = x.avatarDecoration || "",
          _ = t.user_badges,
          w = t.custom_badges,
          S = _.length > 0 && _[0] && "string" == typeof _[0],
          N = w.length > 0 && "string" == typeof w[0][0],
          C = _.length > 0 && S || !S && _.some(e => !0 === e.enabled),
          k = w.length > 0 && N || !N && w.some(e => !0 === e.enabled),
          A = r.typewriter_speed ?? 5,
          F = r.typewriter_delete_speed ?? 7,
          $ = !!(t.discord_avatar_decoration && j),
          T = o === i().unfoldStart,
          P = t.username_effects,
          U = t.text_color,
          E = !!("" !== t.avatar || t.use_discord_avatar && v);
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            className: eU().userInformation,
            children: [E && (0, a.jsxs)("div", {
              className: i().avatarWrapper,
              children: [$ && (0, a.jsx)("img", {
                src: j,
                alt: "",
                className: i().avatarDecorationLayout3
              }), (0, a.jsx)("img", {
                src: y,
                alt: "",
                className: eU().avatar
              })]
            }), (0, a.jsxs)("div", {
              className: `${eU().userDescription} ${T&&o}`,
              children: [(0, a.jsx)(ea.A, {
                content: `UID ${e.uid.toLocaleString("en-US")}`,
                offset: 0,
                pageTooltipStyles: !0,
                children: "typewriter" === t.username_effects ? (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)("style", {
                    children: `
                                        .username-typewriter .Typewriter {
                                            font-size: ${g.username.fontSize};
                                            font-weight: ${g.username.fontWeight};
                                        }
                                    `
                  }), (0, a.jsx)("div", {
                    className: "username-typewriter",
                    children: (0, a.jsx)(et(), {
                      options: {
                        strings: [b],
                        autoStart: !0,
                        loop: !0,
                        wrapperClassName: eU().username,
                        cursorClassName: eU().usernameCursor,
                        pauseFor: 1e3,
                        stringSplitter: tI
                      }
                    })
                  })]
                }) : "fuzzy" === P || "shuffle" === P ? (0, a.jsx)(eS.A, {
                  username: b,
                  usernameEffect: P,
                  fontSize: g.username.fontSize,
                  textColor: U,
                  marginBottom: "7px"
                }) : (0, a.jsx)("h1", {
                  className: `${eU().username} ${"rgb"===t.username_effects&&i().rainbowName}`,
                  style: g.username,
                  children: b
                })
              }), !(!C && !k) && (0, a.jsx)("div", {
                className: eU().badgeContainerWrapper,
                children: (0, a.jsx)(es, {
                  config: t,
                  premiumConfig: r
                })
              }), ("" !== t.description || 0 !== r.typewriter.length) && (0, a.jsx)("h3", {
                className: eU().description,
                style: g.description,
                children: r.typewriter_enabled && 0 !== r.typewriter.length ? (0, a.jsx)(et(), {
                  options: {
                    strings: r.typewriter,
                    autoStart: !0,
                    loop: !0,
                    delay: 600 / A,
                    deleteSpeed: 600 / F,
                    pauseFor: 900,
                    stringSplitter: tI
                  }
                }) : t.description
              }), t.location && (0, a.jsx)(ea.A, {
                content: "Location",
                pageTooltipStyles: !0,
                children: (0, a.jsxs)("span", {
                  className: i().locationMarker,
                  style: g.locationMarker,
                  children: [X.A.locationMarker, " ", t.location]
                })
              })]
            }), t.socials.length > 0 && (0, a.jsx)("div", {
              className: `${eU().socialWrapper} ${T&&o}`,
              children: (0, a.jsx)(eh, {
                socials: t.socials,
                isMonochrome: t.monochrome,
                font: r.font,
                socialGlow: t.social_glow,
                iconColor: t.icon_color,
                username: e.username,
                fontSize: r.font_size
              })
            }), t.audio_player && "" !== l.url && (0, a.jsx)("div", {
              className: eU().audioPlayerWrapper,
              children: (0, a.jsx)(eD, {
                animationStartClass: o,
                audioPlayer: c,
                setAudioData: n,
                audioData: l,
                setAudioPlayer: d,
                audioContainerRef: u,
                currentFont: r.font,
                audioList: t.audio,
                setVolume: m,
                fontSize: r.font_size,
                profileBorderClass: f,
                profileBorderEffect: h
              })
            }), r.buttons.length > 0 && (0, a.jsx)("div", {
              className: `${eU().buttonWrapper} ${T&&o}`,
              children: (0, a.jsx)(ez, {
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
      var eR = r(29883),
        eG = r.n(eR),
        eH = r(98241),
        eO = r.n(eH),
        eq = r(81934);

      function eV({
        username: e,
        sessionData: t
      }) {
        let r = (0, ed.kj)(),
          o = t?.session ?? null,
          i = o?.username,
          n = `https://guns.lol/${i?.endsWith(".")?i+"/":i}`,
          [l, c] = (0, s.useState)(!1),
          d = async () => {
            n && (await navigator.clipboard.writeText(n), c(!0), setTimeout(() => c(!1), 1e3))
          };
        return (0, a.jsx)("div", {
          className: eO().containerWrapper,
          children: (0, a.jsxs)("div", {
            className: eO().claimPageWrapper,
            children: [(0, a.jsxs)("div", {
              className: `${eO().container} ${eO().card}`,
              children: [(0, a.jsx)("div", {
                className: eO().headIcon,
                children: eE.A.error
              }), (0, a.jsx)("h1", {
                className: eO().headline,
                children: r("userpage.claim_user_page.title")
              }), (0, a.jsx)("h3", {
                className: eO().subheadline,
                children: r("userpage.claim_user_page.description")
              }), (0, a.jsxs)("div", {
                className: eO().actionRow,
                children: [(0, a.jsx)(eq.A, {
                  href: "/",
                  className: `${eO().button} ${eO().buttonSecondary}`,
                  children: r("userpage.claim_user_page.home_button")
                }), (0, a.jsx)(eq.A, {
                  href: `/register?claim=${e}&ref=claim_user_page`,
                  className: `${eO().button} ${eO().buttonPrimary}`,
                  children: r("userpage.claim_user_page.claim_button")
                })]
              })]
            }), i && (0, a.jsxs)("div", {
              className: eO().loggedInContainer,
              children: [(0, a.jsxs)("div", {
                className: eO().loggedLeft,
                children: [eE.A.user, (0, a.jsx)("span", {
                  children: r("userpage.claim_user_page.logged_in_as", {
                    username: (0, a.jsxs)("b", {
                      children: ["@", i]
                    })
                  })
                })]
              }), (0, a.jsxs)("div", {
                className: eO().loggedActions,
                children: [(0, a.jsxs)("a", {
                  href: `/${i}`,
                  className: `${eO().button} ${eO().buttonSecondary}`,
                  children: [eE.A.link, " ", r("userpage.claim_user_page.open_button")]
                }), (0, a.jsxs)("button", {
                  onClick: d,
                  className: `${eO().button} ${eO().buttonSecondary}`,
                  children: [eE.A.copy, r(l ? "userpage.claim_user_page.copied_text" : "userpage.claim_user_page.copy_text")]
                }), (0, a.jsxs)("a", {
                  href: "https://help.guns.lol/getting-started/share-profile#how-to-copy-your-gunslol-url--qr-code",
                  target: "_blank",
                  className: `${eO().button} ${eO().buttonSecondary}`,
                  children: [eE.A.helpCenter, " ", r("userpage.claim_user_page.help_button")]
                })]
              })]
            })]
          })
        })
      }

      function eY() {
        let e = (0, ed.kj)();
        return (0, a.jsx)("div", {
          className: eO().containerWrapper,
          children: (0, a.jsxs)("div", {
            className: eO().container,
            children: [eE.A.error, (0, a.jsx)("h1", {
              children: e("userpage.username_error.title")
            }), (0, a.jsx)("h3", {
              children: e("userpage.username_error.description")
            }), (0, a.jsxs)("div", {
              className: eO().containerButtons,
              children: [(0, a.jsx)(eq.A, {
                href: "/",
                children: e("userpage.username_error.home_button")
              }), (0, a.jsx)(en(), {
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
        return (0, a.jsx)("div", {
          className: eO().containerWrapper,
          children: (0, a.jsxs)("div", {
            className: eO().container,
            children: [eE.A.error, (0, a.jsx)("h1", {
              children: t("userpage.username_ban.title", {
                guns: (0, a.jsx)(eq.A, {
                  href: "/",
                  style: {
                    textDecoration: "none",
                    color: "#b252cc"
                  },
                  children: "guns.lol"
                })
              })
            }), (0, a.jsx)("h3", {
              children: t("userpage.username_ban.reason", {
                reason: e
              })
            }), (0, a.jsxs)("div", {
              className: eO().containerButtons,
              children: [(0, a.jsx)(eq.A, {
                href: "/",
                children: t("userpage.username_ban.home_button")
              }), (0, a.jsx)(en(), {
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
        return (0, a.jsx)("div", {
          className: eO().containerWrapper,
          children: (0, a.jsxs)("div", {
            className: eO().container,
            children: [eE.A.error, (0, a.jsx)("h1", {
              children: e("userpage.username_unverified.title")
            }), (0, a.jsx)("h3", {
              children: e("userpage.username_unverified.description")
            }), (0, a.jsxs)("div", {
              className: eO().containerButtons,
              children: [(0, a.jsx)(eq.A, {
                href: "/",
                children: e("userpage.username_unverified.home_button")
              }), (0, a.jsx)(en(), {
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
        return (0, a.jsx)("div", {
          className: eO().containerWrapper,
          children: (0, a.jsxs)("div", {
            className: eO().container,
            children: [eE.A.error, (0, a.jsx)("h1", {
              children: e("userpage.username_pending_deletion.title")
            }), (0, a.jsx)("h3", {
              children: e("userpage.username_pending_deletion.description")
            }), (0, a.jsxs)("div", {
              className: `${eO().containerButtons} ${eO().inactiveAccountButtons}`,
              children: [(0, a.jsx)(eq.A, {
                href: "/",
                children: e("userpage.username_pending_deletion.home_button")
              }), (0, a.jsx)(en(), {
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

      function e5({
        userData: e,
        config: t,
        premiumConfig: r,
        presenceInformation: o,
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
        let u = ev(o),
          m = u.avatar || "",
          f = t.use_discord_avatar && m ? m : t.avatar,
          h = u.avatarDecoration || "",
          g = !!(t.discord_avatar_decoration && h),
          x = p({
            font: r.font,
            fontSize: r.font_size
          }),
          v = t.user_badges,
          y = t.custom_badges,
          b = v.length > 0 && v[0] && "string" == typeof v[0],
          j = y.length > 0 && "string" == typeof y[0][0],
          _ = v.length > 0 && b || !b && v.some(e => !0 === e.enabled),
          w = y.length > 0 && j || !j && y.some(e => !0 === e.enabled),
          S = r.typewriter_speed ?? 5,
          N = r.typewriter_delete_speed ?? 7,
          C = n === i().unfoldStart,
          k = "" !== t.display_name ? t.display_name : e.username,
          A = t.location,
          F = r.border_radius > 35 && .15 * r.border_radius,
          $ = !!("" !== t.avatar || t.use_discord_avatar && m),
          T = void 0 !== r.avatar_radius ? r.avatar_radius : 35,
          P = t.username_effects,
          U = t.text_color,
          E = r.links_position ?? "center",
          z = "" !== A || !1 === r.hide_views;
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsxs)("div", {
            className: e2().userInformation,
            style: {
              marginTop: $ ? -70 : 0,
              marginBottom: 25 * (c <= 520 && 0 === t.socials.length)
            },
            children: [$ && (0, a.jsxs)("div", {
              className: `${i().avatarWrapper} ${e2().avatarWrapper}`,
              children: [g && (0, a.jsx)("img", {
                src: h,
                alt: "",
                className: i().avatarDecorationLayout4
              }), (0, a.jsx)("img", {
                src: f,
                alt: "",
                className: e2().avatar,
                style: {
                  borderRadius: `${T}px`
                }
              })]
            }), (0, a.jsxs)("div", {
              className: `${e2().userDescription} ${C&&n}`,
              children: [(0, a.jsxs)("div", {
                className: e2().usernameWrapper,
                children: [(0, a.jsx)(ea.A, {
                  content: `UID ${e.uid.toLocaleString("en-US")}`,
                  offset: 0,
                  pageTooltipStyles: !0,
                  children: "typewriter" === t.username_effects ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("style", {
                      children: `
                                            .username-typewriter .Typewriter {
                                                font-size: ${x.username.fontSize};
                                                font-weight: ${x.username.fontWeight};
                                            }
                                        `
                    }), (0, a.jsx)("div", {
                      className: "username-typewriter",
                      children: (0, a.jsx)(et(), {
                        options: {
                          strings: [k],
                          autoStart: !0,
                          loop: !0,
                          wrapperClassName: e2().userDescriptionUsername,
                          cursorClassName: e2().usernameCursor,
                          pauseFor: 1e3,
                          stringSplitter: tI
                        }
                      })
                    })]
                  }) : "fuzzy" === P || "shuffle" === P ? (0, a.jsx)(eS.A, {
                    username: k,
                    usernameEffect: P,
                    fontSize: x.username.fontSize,
                    textColor: U
                  }) : (0, a.jsx)("h1", {
                    className: `${e2().userDescriptionUsername} ${"rgb"===t.username_effects&&i().rainbowName}`,
                    style: x.username,
                    children: k
                  })
                }), !(!_ && !w) && (0, a.jsx)(es, {
                  config: t,
                  premiumConfig: r
                })]
              }), ("" !== t.description || 0 !== r.typewriter.length) && (0, a.jsx)("h3", {
                className: e2().userDescriptionText,
                style: x.description,
                children: r.typewriter_enabled && 0 !== r.typewriter.length ? (0, a.jsx)(et(), {
                  options: {
                    strings: r.typewriter,
                    autoStart: !0,
                    loop: !0,
                    delay: 600 / S,
                    deleteSpeed: 600 / N,
                    pauseFor: 900,
                    stringSplitter: tI
                  }
                }) : t.description
              })]
            })]
          }), (0, a.jsxs)("div", {
            className: `${e2().topRightWrapper} ${i().topRightWrapperGlobal} ${A&&i().topRightWrapperLocation} ${C&&n}`,
            style: c > 520 ? {
              top: F ? 15 + F : 13,
              right: F ? 18 + F : 18
            } : {
              bottom: F ? 12 + F : 13,
              left: F ? 15 + F : 18,
              top: "inherit",
              right: "inherit"
            },
            children: [(0, a.jsx)(ew, {
              challengeData: e._gpp_ch,
              username: e.username,
              premiumConfig: r,
              views: t.page_views,
              containerBorderRadius: null,
              isUnfold: "" === A && C,
              animationStartClass: n,
              isTemplatePreview: l
            }), A && (0, a.jsxs)(a.Fragment, {
              children: [!r.hide_views && (0, a.jsx)("div", {
                className: e2().topRightDivider
              }), (0, a.jsx)(ea.A, {
                content: "Location",
                pageTooltipStyles: !0,
                children: (0, a.jsxs)("span", {
                  className: i().locationMarker,
                  style: x.locationMarker,
                  children: [X.A.locationMarker, " ", A]
                })
              })]
            })]
          }), z && (0, a.jsx)("style", {
            children: `
                    @media (max-width: 520px) {
                        .${e2().socialsWrapper} {
                        margin-bottom: 40px;
                        }
                    }
                    `
          }), t.socials.length > 0 && (0, a.jsx)("div", {
            className: `${e2().socialsWrapper} ${C&&n}`,
            children: (0, a.jsx)(eh, {
              socials: t.socials,
              isMonochrome: t.monochrome,
              font: r.font,
              socialGlow: t.social_glow,
              iconColor: t.icon_color,
              username: e.username,
              fontSize: r.font_size,
              style: {
                justifyContent: "left" === E ? "flex-start" : "right" === E ? "flex-end" : "center"
              }
            })
          })]
        })
      }
      var e4 = r(33727),
        e3 = r(18310),
        e6 = r(27212),
        e8 = r.n(e6),
        e7 = r(77599),
        e9 = r(17440);
      let te = {
          transitionSpeed: 700,
          perspective: 1e3,
          tiltMaxAngleX: 10,
          tiltMaxAngleY: 10
        },
        tt = "portfolio:scroll-more",
        tr = "data-user-page-enter-transition",
        ta = new Set(["r2.guns.lol", "pub-154e894c099540f58a9780bd0f621198.r2.dev"]),
        ts = new Set(["youtube", "spotify", "discord", "telegram", "roblox", "github", "lastfm", "timezone"]),
        to = new Set(["hero", "about", "projects", "custom", "audio", "skills"]),
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
            a = r[String(t?.id || "")],
            s = Object.values(r).find(e => e?.track_url && t?.url && String(e.track_url) === String(t.url)),
            o = a || s;
          return "string" == typeof o?.synced_lyrics && o.synced_lyrics.trim().length > 0
        };

      function tl({
        userData: e,
        config: t,
        premiumConfig: r,
        presenceInformation: o,
        animationStartClass: i,
        isTemplatePreview: n,
        discordLoading: l,
        discordBadges: c,
        profileBorderClass: d,
        profileBorderEffect: u,
        profileBorderEffectEnabled: m,
        audioPlayer: f,
        setAudioData: p,
        audioData: h,
        setAudioPlayer: g,
        audioContainerRef: x,
        setVolume: v
      }) {
        let y = ((e = [], t) => {
            let r = (Array.isArray(e) && e.length > 0 ? e : ti).filter(e => to.has(e?.type)),
              a = !!t?.url;
            return r.filter((e, r) => !!e && !1 !== e.visible && ("audio" === e.type ? a && tn(e.settings, t) : 0 === r ? "hero" === e.type : "hero" !== e.type))
          })(r.portfolio_modules, h),
          b = (0, s.useRef)(null),
          j = (0, s.useRef)(-1),
          [_, w] = (0, s.useState)(0),
          S = t.discord_presence_settings || {
            show_badges: !0,
            show_guild_tag: !0,
            idle_text: ""
          },
          N = {
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
        let C = (s, y, b = !1) => {
          let j = (0, a.jsx)(tc, {
            module: s,
            index: y,
            userData: e,
            config: t,
            premiumConfig: r,
            presenceInformation: o,
            animationStartClass: i,
            isTemplatePreview: n,
            discordLoading: l,
            discordBadges: c,
            discordPresenceSettings: S,
            profileBorderClass: d,
            profileBorderEffect: u,
            profileBorderEffectEnabled: m,
            audioPlayer: f,
            setAudioData: p,
            audioData: h,
            setAudioPlayer: g,
            audioContainerRef: x,
            setVolume: v,
            showScrollIndicator: b
          });
          return (0, a.jsx)(tm, {
            index: y,
            animation: r.animation,
            animationStartClass: i,
            children: j
          }, s.id)
        };
        return (0, s.useEffect)(() => {
          if (!b.current) return;
          let e = Array.from(b.current.querySelectorAll(`.${e8().portfolioReveal}`));
          if (e.length <= 1) return;
          let t = document.documentElement,
            r = t.style.scrollSnapType;
          t.style.scrollSnapType = "y proximity";
          let a = null,
            s = null,
            o = !1,
            i = 0,
            n = null,
            l = () => {
              var e;
              let t = Math.max(window.innerHeight || 1, 1),
                r = Math.max(document.documentElement.scrollHeight - t, 1);
              e = Math.min(Math.max(window.scrollY / r, 0), 1), .003 > Math.abs(j.current - e) || (j.current = e, w(e))
            },
            c = (t = window.scrollY + .5 * (window.innerHeight || 0)) => {
              let r = 0,
                a = 1 / 0;
              for (let s = 0; s < e.length; s++) {
                let o = Math.abs(e[s].offsetTop + .5 * e[s].offsetHeight - t);
                o < a && (a = o, r = s)
              }
              return r
            },
            d = t => {
              let r = Math.max(0, Math.min(e.length - 1, t)),
                a = e[r].offsetTop,
                i = window.scrollY,
                n = a - i;
              if (2 > Math.abs(n)) return;
              s && (s.stop(), s = null), o = !0;
              let c = Math.min(2.1, Math.max(1.1, 1.1 + .18 * Math.min(Math.abs(n) / Math.max(window.innerHeight || 1, 1), 2.4)));
              s = (0, e4.i)(i, a, {
                duration: c,
                ease: [.16, 1, .3, 1],
                onUpdate: e => {
                  window.scrollTo({
                    top: e,
                    behavior: "auto"
                  }), l()
                },
                onComplete: () => {
                  o = !1, s = null, l()
                }
              })
            },
            u = () => {
              l(), null !== a && window.clearTimeout(a), a = window.setTimeout(() => {
                if (o) return;
                let t = c(),
                  r = e[t]?.offsetTop ?? window.scrollY;
                Math.abs(window.scrollY - r) <= Math.max(20, Math.round(.03 * (window.innerHeight || 0))) || d(t)
              }, 150)
            },
            m = e => {
              if (7 > Math.abs(e.deltaY) || (i += e.deltaY, null !== n && window.clearTimeout(n), n = window.setTimeout(() => {
                  i = 0
                }, 150), 72 > Math.abs(i))) return;
              let t = i > 0 ? 1 : -1,
                r = c() + t;
              i = 0, e.preventDefault(), s && (s.stop(), s = null, o = !1), d(r)
            },
            f = () => {
              l(), o || d(c())
            },
            p = e => {
              d("number" == typeof e.detail?.targetIndex ? e.detail.targetIndex : 1)
            };
          return l(), window.addEventListener("scroll", u, {
            passive: !0
          }), window.addEventListener("wheel", m, {
            passive: !1
          }), window.addEventListener("resize", f), window.addEventListener(tt, p), () => {
            window.removeEventListener("scroll", u), window.removeEventListener("wheel", m), window.removeEventListener("resize", f), window.removeEventListener(tt, p), t.style.scrollSnapType = r, null !== a && (window.clearTimeout(a), a = null), null !== n && (window.clearTimeout(n), n = null), s && (s.stop(), s = null)
          }
        }, [y.length]), (0, a.jsxs)("div", {
          ref: b,
          className: e8().portfolioPage,
          "data-compact-top-audio": "false",
          style: N,
          children: [(0, a.jsx)(tN, {
            mode: "dots",
            sectionCount: y.length,
            progress: _
          }), y[0] && C(y[0], 0, y.length > 1), y.length > 1 && (0, a.jsx)("div", {
            className: e8().portfolioSections,
            children: y.slice(1).map((e, t) => (0, a.jsx)(s.Fragment, {
              children: C(e, t + 1)
            }, e.id))
          })]
        })
      }

      function tc({
        module: e,
        index: t,
        userData: r,
        config: s,
        premiumConfig: o,
        presenceInformation: i,
        animationStartClass: n,
        isTemplatePreview: l,
        discordLoading: c,
        discordBadges: d,
        discordPresenceSettings: u,
        profileBorderClass: m,
        profileBorderEffect: f,
        profileBorderEffectEnabled: p,
        audioPlayer: h,
        setAudioData: g,
        audioData: x,
        setAudioPlayer: v,
        audioContainerRef: y,
        setVolume: b,
        showScrollIndicator: j
      }) {
        if ("hero" === e.type) return (0, a.jsx)(tx, {
          module: e,
          userData: r,
          config: s,
          premiumConfig: o,
          presenceInformation: i,
          isTemplatePreview: l,
          showScrollIndicator: j
        });
        let _ = `${e8().portfolioSection} ${0===t?e8().portfolioTopSection:""}`;
        return "about" === e.type ? (0, a.jsx)("div", {
          className: _,
          children: (0, a.jsx)(tv, {
            module: e,
            config: s,
            premiumConfig: o,
            presenceInformation: i,
            userData: r,
            discordBadges: d,
            discordPresenceSettings: u,
            discordLoading: c,
            profileBorderClass: m,
            profileBorderEffect: f,
            profileBorderEffectEnabled: p
          })
        }) : "projects" === e.type ? (0, a.jsx)("div", {
          className: _,
          children: (0, a.jsx)(t_, {
            module: e,
            config: s,
            profileBorderClass: m,
            profileBorderEffect: f,
            profileBorderEffectEnabled: p
          })
        }) : "skills" === e.type ? (0, a.jsx)("div", {
          className: _,
          children: (0, a.jsx)(ty, {
            module: e,
            config: s,
            profileBorderClass: m,
            profileBorderEffect: f,
            profileBorderEffectEnabled: p
          })
        }) : "audio" === e.type ? x.url && tn(e.settings, x) ? (0, a.jsx)("div", {
          className: e8().audioModule,
          children: (0, a.jsx)(eD, {
            animationStartClass: "",
            audioPlayer: h,
            setAudioData: g,
            audioData: x,
            setAudioPlayer: v,
            audioContainerRef: y,
            currentFont: o.font,
            audioList: s.audio,
            setVolume: b,
            fontSize: o.font_size,
            profileBorderClass: m,
            profileBorderEffect: f,
            profileBorderEffectEnabled: p,
            revealContent: !0,
            revealOrder: 1,
            lyricsConfig: e.settings
          })
        }) : null : (0, a.jsx)("div", {
          className: _,
          children: (0, a.jsx)(tw, {
            module: e,
            animation: o.animation,
            profileBorderClass: m,
            profileBorderEffect: f,
            profileBorderEffectEnabled: p
          })
        })
      }

      function td({
        as: e = "div",
        className: t,
        profileBorderClass: r,
        profileBorderEffect: s,
        profileBorderEffectEnabled: o,
        children: i,
        style: n,
        ...l
      }) {
        return (0, a.jsxs)(e, {
          className: `${t} ${r}`,
          style: {
            ...n,
            position: o ? "relative" : n?.position
          },
          ...l,
          children: [o && s && (0, a.jsx)(eM, {
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
        animationStartClass: o
      }) {
        let i = (0, s.useRef)(null),
          n = (0, s.useRef)([]),
          l = (0, s.useRef)(null),
          c = (0, s.useRef)(!1),
          d = (0, e3.I)(),
          u = "unfold" === r || "pop" === r || "fade" === r ? r : "fade",
          m = !!o?.includes("unfoldStart"),
          f = !!o?.includes("scaleFadeStart"),
          p = m ? .12 : f ? .08 : .06,
          h = m ? .04 : f ? .03 : .02;
        return (0, s.useEffect)(() => {
          let e = i.current;
          if (!e) return;
          let r = () => "active" === document.documentElement.getAttribute(tr),
            a = Array.from(e.querySelectorAll("[data-reveal-part]"));
          if (0 === a.length) {
            e.dataset.revealActive = "true", e.dataset.revealDone = "true";
            return
          }
          let s = () => {
              null !== l.current && (window.clearTimeout(l.current), l.current = null), n.current.forEach(e => e.stop()), n.current = []
            },
            o = () => {
              for (let t of (s(), e.dataset.revealActive = "false", e.dataset.revealDone = "false", a)) t.style.opacity = "0.001", t.style.pointerEvents = "none", t.style.transformOrigin = "unfold" === u ? "center top" : "", t.style.transform = "pop" === u ? "scale(0.78)" : "unfold" === u ? "translateY(-80px)" : "translateY(34px)"
            },
            m = () => {
              for (let t of (s(), e.dataset.revealActive = "true", e.dataset.revealDone = "true", a)) t.style.opacity = "1", t.style.pointerEvents = "", t.style.transform = "none", t.style.transformOrigin = "";
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
          o(), c.current = !1;
          let f = e => {
              let t = Number.parseFloat(window.getComputedStyle(e).getPropertyValue("--portfolioRevealOrder"));
              return Number.isFinite(t) ? Math.max(1, t) : 1
            },
            g = (d, m, g) => {
              let x = window.innerHeight || 1,
                v = Math.abs(g.top + .5 * g.height - .5 * x);
              !r() && (m && (d >= .42 || v <= .19 * x) && (() => {
                if (c.current) return;
                s(), e.dataset.revealActive = "true", e.dataset.revealDone = "false";
                let {
                  keyframes: r,
                  options: o
                } = "pop" === u ? {
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
                }, d = 0, m = o.duration;
                for (let e of a) {
                  e.style.pointerEvents = "none", e.style.transformOrigin = "unfold" === u ? "center top" : "";
                  let a = p + Math.min(t, 4) * h + ("unfold" === u ? .092 : "pop" === u ? .048 : .052) * (f(e) - 1);
                  d = Math.max(d, a), m = Math.max(m, o.duration), n.current.push((0, e4.i)(e, r, {
                    ...o,
                    delay: a
                  }))
                }
                l.current = window.setTimeout(() => {
                  if (i.current && c.current) {
                    for (let t of (e.dataset.revealDone = "true", a)) t.style.pointerEvents = "", t.style.transformOrigin = "";
                    l.current = null
                  }
                }, (d + m) * 1e3 + 40), c.current = !0
              })(), d < .08 && v > .62 * x && c.current && (c.current = !1, o()))
            },
            x = new IntersectionObserver(e => {
              let t = e[0];
              t && g(t.intersectionRatio, t.isIntersecting, t.boundingClientRect)
            }, {
              threshold: [0, .08, .18, .42, .7]
            }),
            v = new MutationObserver(() => {
              let t, a, s, o;
              r() || (t = e.getBoundingClientRect(), a = window.innerHeight || 1, s = Math.max(t.top, 0), o = Math.max(0, Math.min(t.bottom, a) - s), g(t.height > 0 ? Math.min(1, o / t.height) : 0, o > 0, t))
            });
          return v.observe(document.documentElement, {
            attributes: !0,
            attributeFilter: [tr]
          }), x.observe(e), () => {
            x.disconnect(), v.disconnect(), s()
          }
        }, [p, t, d, u, h]), (0, a.jsx)("div", {
          ref: i,
          className: e8().portfolioReveal,
          "data-animation": u,
          "data-reveal-active": "false",
          "data-reveal-done": "false",
          children: e
        })
      }

      function tf({
        name: e,
        isMonochrome: t,
        revealOrder: r,
        revealPart: s = "skill-pill"
      }) {
        let o = (0, e7.RU)(e),
          i = (0, e9.h)(o ?? e),
          n = null;
        if (i) {
          let e = t ? "currentColor" : `#${i.hex}`;
          n = (0, a.jsx)("svg", {
            className: e8().skillPillIcon,
            role: "img",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            style: {
              fill: e
            },
            children: (0, a.jsx)("path", {
              d: i.path
            })
          })
        } else o && (n = (0, a.jsx)("span", {
          className: e8().skillPillDot,
          style: {
            background: t ? "currentColor" : o.color
          }
        }));
        return (0, a.jsxs)("span", {
          className: e8().skillPill,
          "data-reveal-part": s,
          style: "number" == typeof r ? tu(r) : void 0,
          children: [n, e]
        })
      }
      let tp = {
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
        let r = (0, e7.RU)(e),
          s = (0, e9.h)(r ?? e),
          o = t ? "currentColor" : s ? `#${s.hex}` : r?.color ?? "currentColor";
        return s ? (0, a.jsx)("svg", {
          className: e8().projectTagIcon,
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          style: {
            fill: o
          },
          children: (0, a.jsx)("path", {
            d: s.path
          })
        }) : (0, a.jsx)("span", {
          className: e8().projectTagDot,
          style: {
            background: o
          }
        })
      }

      function tx({
        module: e,
        userData: t,
        config: r,
        premiumConfig: s,
        presenceInformation: o,
        isTemplatePreview: n,
        showScrollIndicator: l
      }) {
        let c = e.settings || {},
          d = "centered" === c.hero_style ? "centered" : "classic",
          u = p({
            font: s.font,
            fontSize: s.font_size
          }),
          m = "" !== r.display_name ? r.display_name : t.username,
          f = ev(o),
          h = f.avatar || "",
          g = f.avatarDecoration || "",
          x = r.use_discord_avatar && h ? h : r.avatar,
          v = !!(r.discord_avatar_decoration && g),
          y = !1 !== c.show_avatar && x,
          b = !1 !== c.show_buttons && r.socials.length > 0,
          j = "" !== r.description || 0 !== s.typewriter.length,
          _ = !!r.location,
          w = !0 !== s.hide_views,
          S = w || _,
          N = "number" == typeof t.uid ? `UID ${t.uid.toLocaleString("en-US")}` : "UID unavailable",
          C = r.user_badges,
          k = r.custom_badges,
          A = C.length > 0 && C[0] && "string" == typeof C[0],
          F = k.length > 0 && "string" == typeof k[0][0],
          $ = C.length > 0 && A || !A && C.some(e => !0 === e.enabled),
          T = k.length > 0 && F || !F && k.some(e => !0 === e.enabled),
          P = $ || T,
          U = s.typewriter_speed ?? 5,
          E = s.typewriter_delete_speed ?? 7,
          z = "unfold" === s.animation || "pop" === s.animation || "fade" === s.animation ? s.animation : "fade",
          B = {
            ...u.username,
            fontSize: u.username.fontSize,
            fontWeight: 700
          },
          I = window.matchMedia?.("(pointer: coarse)").matches,
          M = r.username_effects,
          L = "rgb" === M || "rainbow" === M,
          D = !!M && !L && !["none", "typewriter", "fuzzy", "shuffle"].includes(M),
          W = e8().heroTitlePanel,
          R = (0, a.jsxs)("div", {
            className: `${e8().heroStage} ${!y?e8().heroStageSolo:""}`,
            children: [y && (0, a.jsx)("div", {
              className: e8().heroIdentity,
              "data-reveal-part": "hero-identity",
              style: tu(2),
              children: (0, a.jsxs)("div", {
                className: i().avatarWrapper,
                children: [v && (0, a.jsx)("img", {
                  src: g,
                  alt: "",
                  className: i().avatarDecorationLayout4
                }), (0, a.jsx)("div", {
                  className: e8().heroAvatarFrame,
                  "data-reveal-part": "hero-avatar",
                  style: tu(2),
                  children: (0, a.jsx)("img", {
                    src: x,
                    alt: `${m} avatar`,
                    className: e8().heroAvatar
                  })
                })]
              })
            }), (0, a.jsxs)("div", {
              className: e8().heroContent,
              children: [(0, a.jsx)("div", {
                className: W,
                "data-reveal-part": "hero-title",
                style: tu(2),
                children: (0, a.jsxs)("div", {
                  className: e8().heroTitleStack,
                  children: [(0, a.jsxs)("div", {
                    className: e8().heroTitleRow,
                    children: [(0, a.jsx)(ea.A, {
                      content: N,
                      offset: 0,
                      pageTooltipStyles: !0,
                      children: "typewriter" === M ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("style", {
                          children: `.hero-tw-${d} .Typewriter { font-size: ${B.fontSize}; font-weight: ${B.fontWeight??700}; font-family: ${B.fontFamily??"inherit"}; color: var(--textColor); text-shadow: var(--colorUsernameGlow); }`
                        }), (0, a.jsx)("div", {
                          className: `hero-tw-${d}`,
                          children: (0, a.jsx)(et(), {
                            options: {
                              strings: [m],
                              autoStart: !0,
                              loop: !0,
                              pauseFor: 1e3
                            }
                          })
                        })]
                      }) : "fuzzy" === M || "shuffle" === M ? (0, a.jsx)(eS.A, {
                        username: m,
                        usernameEffect: M,
                        fontSize: B.fontSize,
                        textColor: r.text_color
                      }) : (0, a.jsx)("h1", {
                        className: L ? i().rainbowName : D ? e8().heroTitleEffects : void 0,
                        style: B,
                        children: m
                      })
                    }), P && "classic" === d && (0, a.jsx)("div", {
                      className: e8().heroBadgeContainerInline,
                      children: (0, a.jsx)(es, {
                        config: r,
                        premiumConfig: s
                      })
                    })]
                  }), P && "centered" === d && (0, a.jsx)("div", {
                    className: e8().heroBadgeContainerCentered,
                    children: (0, a.jsx)(es, {
                      config: r,
                      premiumConfig: s
                    })
                  })]
                })
              }), j && (0, a.jsx)("div", {
                className: e8().heroDescription,
                style: {
                  ...u.description,
                  ...tu(3)
                },
                "data-reveal-part": "hero-description",
                children: s.typewriter_enabled && 0 !== s.typewriter.length ? (0, a.jsx)(et(), {
                  options: {
                    strings: s.typewriter,
                    autoStart: !0,
                    loop: !0,
                    delay: 600 / U,
                    deleteSpeed: 600 / E,
                    pauseFor: 900
                  }
                }) : r.description
              }), b && (0, a.jsx)("div", {
                className: e8().heroActions,
                "data-reveal-part": "hero-actions",
                style: tu(4),
                children: (0, a.jsx)(eh, {
                  socials: r.socials,
                  isMonochrome: r.monochrome,
                  font: s.font,
                  socialGlow: r.social_glow,
                  iconColor: r.icon_color,
                  username: t.username,
                  fontSize: s.font_size
                })
              })]
            })]
          });
        return (0, a.jsxs)("div", {
          className: `${e8().heroModule} ${e8().portfolioTopSection}`,
          "data-animation": z,
          "data-hero-style": d,
          children: [s.parallax_animation && !I ? (0, a.jsx)(eK.A, {
            ...te,
            tiltEnable: !0,
            style: {
              width: "100%",
              position: "relative"
            },
            children: R
          }) : R, S && (0, a.jsxs)("div", {
            className: e8().heroBottomMeta,
            children: [w && (0, a.jsx)("div", {
              className: e8().heroBottomMetaItem,
              children: (0, a.jsx)(ew, {
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
            }), w && _ && (0, a.jsx)("span", {
              className: e8().heroBottomMetaSep,
              children: "|"
            }), _ && (0, a.jsxs)("span", {
              className: e8().heroBottomMetaItem,
              title: r.location,
              children: [X.A.locationMarker, " ", r.location]
            })]
          }), l && (0, a.jsx)(tS, {})]
        })
      }

      function tv({
        module: e,
        config: t,
        premiumConfig: r,
        presenceInformation: s,
        userData: o,
        discordBadges: n,
        discordPresenceSettings: l,
        discordLoading: c,
        profileBorderClass: d,
        profileBorderEffect: u,
        profileBorderEffectEnabled: m
      }) {
        let f = e.settings || {},
          p = (Array.isArray(f.cards) ? f.cards.slice(0, 2) : []).filter(e => {
            if (e?.type === "discord_presence") return "enabled" === t.presence;
            if (e?.type !== "second_tab") return !1;
            let r = tj(e.second_tab_config);
            return r.second_tab_enabled && Object.keys(r.second_tab).length > 0
          }),
          h = Array.isArray(f.tags) ? f.tags.filter(e => "string" == typeof e && e.trim()) : [],
          g = "string" == typeof f.secondary_description ? f.secondary_description : "";
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsxs)("div", {
            className: e8().sectionHeading,
            "data-align": "left",
            "data-reveal-part": "about-root",
            style: tu(1),
            children: [f.title && (0, a.jsx)("h1", {
              children: f.title
            }), f.description && (0, a.jsx)("p", {
              children: f.description
            })]
          }), g && (0, a.jsx)(tA, {
            children: (0, a.jsx)(td, {
              className: e8().textCard,
              profileBorderClass: d,
              profileBorderEffect: u,
              profileBorderEffectEnabled: m,
              "data-reveal-part": "about-secondary",
              style: tu(2),
              children: (0, a.jsx)("div", {
                className: e8().customContent,
                "data-align": "left",
                "data-quote-mode": "false",
                "data-link-style": "underline",
                "data-collapsed": "false",
                children: t$(g)
              })
            })
          }), p.length > 0 && (0, a.jsx)("div", {
            className: e8().aboutCards,
            "data-count": p.length,
            children: p.map((e, f) => (0, a.jsx)(td, {
              className: e8().aboutCard,
              profileBorderClass: d,
              profileBorderEffect: u,
              profileBorderEffectEnabled: m,
              children: (0, a.jsx)("div", {
                className: e8().aboutCardContent,
                "data-reveal-part": "about-card-content",
                style: tu(4 + f),
                children: "second_tab" === e.type ? (0, a.jsx)(tb, {
                  card: e,
                  config: t,
                  premiumConfig: r
                }) : (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)("style", {
                    children: `
                                            .${i().discordActivity} {
                                                width: 100%;
                                                justify-content: space-between;
                                            }`
                  }), (0, a.jsx)(eb, {
                    loading: c,
                    presenceInformation: s,
                    font: r.font,
                    description: t.description,
                    discordUserBadges: n,
                    discordData: o.discord,
                    fontSize: r.font_size,
                    discordPresenceSettings: l
                  })]
                })
              })
            }, f))
          }), h.length > 0 && (0, a.jsx)("div", {
            className: e8().skillsGrid,
            "data-reveal-part": "about-tags",
            style: tu(3),
            children: h.map((e, r) => (0, a.jsx)(tf, {
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
        profileBorderEffectEnabled: o
      }) {
        let i = e.settings || {},
          n = Array.isArray(i.skills) ? i.skills.filter(e => "string" == typeof e && e.trim()) : [];
        if (!i.title && 0 === n.length) return null;
        let l = Object.keys(tp).map(e => ({
          category: e,
          label: tp[e] || e,
          skills: n.filter(t => {
            let r, a;
            return r = (0, e7.RU)(t), a = r?.id || t.toLowerCase(), (Object.keys(th).find(e => th[e].includes(a)) || "tools") === e
          })
        })).filter(e => e.skills.length > 0);
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("div", {
            "data-reveal-part": "skills-root",
            style: tu(1),
            children: (i.title || i.description) && (0, a.jsxs)("div", {
              className: e8().sectionHeading,
              "data-reveal-part": "skills-heading",
              style: tu(1),
              children: [i.title && (0, a.jsx)("h1", {
                children: i.title
              }), i.description && (0, a.jsx)("p", {
                children: i.description
              })]
            })
          }), n.length > 0 && (0, a.jsx)(td, {
            className: e8().textCard,
            profileBorderClass: r,
            profileBorderEffect: s,
            profileBorderEffectEnabled: o,
            "data-reveal-part": "skills-card",
            style: tu(2),
            children: (0, a.jsx)("div", {
              className: e8().skillsCategoryGrid,
              "data-reveal-part": "skills-grid",
              style: tu(3),
              children: l.map((e, r) => (0, a.jsxs)("div", {
                className: e8().skillCategoryGroup,
                "data-reveal-part": "skills-group",
                style: tu(4 + r),
                children: [(0, a.jsx)("h2", {
                  children: e.label
                }), (0, a.jsx)("div", {
                  className: e8().skillsGrid,
                  "data-layout": "pills",
                  children: e.skills.map((e, r) => (0, a.jsx)(tf, {
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

      function tb({
        card: e,
        config: t,
        premiumConfig: r
      }) {
        let s = tj(e.second_tab_config);
        return s.second_tab_enabled && 0 !== Object.keys(s.second_tab).length ? (0, a.jsx)(e$, {
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

      function tj(e) {
        let t = e?.second_tab && "object" == typeof e.second_tab ? e.second_tab : {},
          r = Object.keys(t).find(e => ts.has(e)),
          a = r && "string" == typeof t[r] ? t[r].trim() : "",
          s = r && a && function(e, t) {
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
          }(r, a) ? {
            [r]: a
          } : {};
        return {
          second_tab_enabled: e?.second_tab_enabled !== !1,
          second_tab: s,
          clock_face_style: e?.clock_face_style === "light" ? "light" : "dark",
          clock_hidden: e?.clock_hidden === !0,
          clock_time_format: e?.clock_time_format === "12h" ? "12h" : "24h"
        }
      }

      function t_({
        module: e,
        config: t,
        profileBorderClass: r,
        profileBorderEffect: s,
        profileBorderEffectEnabled: o
      }) {
        let i = e.settings || {},
          n = (Array.isArray(i.projects) ? i.projects : []).filter(e => e.name).slice(0, 4);
        return 0 === n.length ? null : (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("div", {
            className: e8().sectionHeading,
            "data-reveal-part": "projects-root",
            style: tu(1),
            children: (0, a.jsx)("h1", {
              children: i.title || "Featured projects"
            })
          }), (0, a.jsx)("div", {
            className: e8().projectGrid,
            "data-count": n.length,
            "data-reveal-part": "projects-grid",
            style: tu(2),
            children: n.map((e, i) => {
              let n = tC(e.link),
                l = function(e) {
                  let t = tC(e);
                  if (!t) return "";
                  try {
                    let e = new URL(t);
                    return ta.has(e.host) ? e.href : ""
                  } catch {
                    return ""
                  }
                }(e.image),
                c = !!n,
                d = (0, a.jsxs)(a.Fragment, {
                  children: [l && (0, a.jsx)("div", {
                    className: e8().projectImage,
                    style: {
                      backgroundImage: `url("${l}")`
                    }
                  }), (0, a.jsx)("div", {
                    className: e8().projectScrim
                  }), Array.isArray(e.tags) && e.tags.length > 0 && (0, a.jsx)("div", {
                    className: e8().projectTags,
                    children: e.tags.slice(0, 4).map(e => (0, a.jsxs)("span", {
                      className: e8().projectTagPill,
                      children: [(0, a.jsx)(tg, {
                        tag: e,
                        isMonochrome: t.monochrome
                      }), e]
                    }, e))
                  }), (0, a.jsxs)("div", {
                    className: e8().projectContent,
                    children: [(0, a.jsx)("h2", {
                      children: e.name
                    }), e.description && (0, a.jsx)("p", {
                      children: e.description
                    })]
                  }), c && (0, a.jsx)("div", {
                    className: e8().projectVisit,
                    children: "Visit"
                  })]
                });
              return (0, a.jsx)(tA, {
                children: (0, a.jsx)(td, {
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
                  profileBorderEffectEnabled: o,
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
        profileBorderEffect: o,
        profileBorderEffectEnabled: i
      }) {
        let n = e.settings || {},
          [l, c] = (0, s.useState)(!1),
          [d, u] = (0, s.useState)(!1),
          [m, f] = (0, s.useState)(!1),
          [p, h] = (0, s.useState)(0),
          [g, x] = (0, s.useState)(0),
          v = (0, s.useRef)(null),
          y = (0, s.useRef)(null),
          b = "string" == typeof n.content ? n.content : "",
          j = ["center", "right"].includes(n.text_alignment) ? n.text_alignment : "left",
          _ = "unfold" === t || "pop" === t || "fade" === t ? t : "fade";
        if ((0, s.useEffect)(() => {
            if (!v.current) {
              f(!1), h(0), x(0);
              return
            }
            let e = v.current,
              t = () => {
                let t = window.getComputedStyle(e),
                  r = 6 * (parseFloat(t.lineHeight) || 20) + 5 * (parseFloat(t.rowGap || t.gap) || 0),
                  a = e.scrollHeight;
                h(r), x(a), f(a > r + 4)
              };
            t();
            let r = new ResizeObserver(t);
            return r.observe(e), window.addEventListener("resize", t), () => {
              r.disconnect(), window.removeEventListener("resize", t)
            }
          }, [b, j]), (0, s.useEffect)(() => () => {
            null !== y.current && (window.clearTimeout(y.current), y.current = null)
          }, []), !n.title && !b) return null;
        let w = Math.max(g, p + 1),
          S = m ? l ? w : p : void 0;
        return (0, a.jsxs)(a.Fragment, {
          children: [n.title && (0, a.jsx)("div", {
            className: e8().sectionHeading,
            "data-reveal-part": "custom-root",
            style: tu(1),
            children: n.title && (0, a.jsx)("h1", {
              children: n.title
            })
          }), b && (0, a.jsx)(tA, {
            children: (0, a.jsxs)(td, {
              className: e8().textCard,
              profileBorderClass: r,
              profileBorderEffect: o,
              profileBorderEffectEnabled: i,
              "data-reveal-part": "custom-body",
              style: tu(2),
              children: [(0, a.jsx)("div", {
                ref: v,
                className: e8().customContent,
                "data-align": j,
                "data-quote-mode": "false",
                "data-link-style": "pill",
                "data-collapsible": m ? "true" : "false",
                "data-collapsed": m && !l ? "true" : "false",
                "data-interaction-animation": _,
                "data-toggle-active": d ? "true" : "false",
                style: {
                  "--customCollapsedMaxHeight": `${p}px`,
                  "--customExpandedMaxHeight": `${w}px`,
                  ..."number" == typeof S ? {
                    "--customContentMaxHeight": `${S}px`
                  } : {}
                },
                children: t$(b)
              }), m && (0, a.jsx)("button", {
                type: "button",
                className: e8().readMoreButton,
                onClick: () => {
                  c(e => !e), u(!1), window.requestAnimationFrame(() => {
                    u(!0), null !== y.current && window.clearTimeout(y.current), y.current = window.setTimeout(() => {
                      u(!1), y.current = null
                    }, "unfold" === _ ? 700 : "pop" === _ ? 520 : 560)
                  })
                },
                "data-reveal-part": "custom-read-more",
                "data-animation": _,
                "data-toggle-active": d ? "true" : "false",
                style: tu(3),
                children: l ? "Show less" : "Read more"
              })]
            })
          })]
        })
      }

      function tS() {
        return (0, a.jsxs)("button", {
          type: "button",
          className: e8().scrollIndicator,
          onClick: e => {
            e.preventDefault(), window.dispatchEvent(new CustomEvent(tt, {
              detail: {
                targetIndex: 1
              }
            }))
          },
          "data-reveal-part": "scroll-indicator",
          style: tu(6),
          children: [(0, a.jsx)("strong", {
            children: "Scroll for more"
          }), X.A.arrowDown]
        })
      }

      function tN({
        mode: e,
        sectionCount: t,
        progress: r
      }) {
        if ("none" === e || t <= 1) return null;
        if ("dots" === e) {
          let e = Math.min(t - 1, Math.round(r * (t - 1)));
          return (0, a.jsx)("div", {
            className: e8().scrollProgressDots,
            children: Array.from({
              length: t
            }).map((t, r) => (0, a.jsx)("span", {
              "data-active": r === e ? "true" : "false"
            }, r))
          })
        }
        return (0, a.jsx)("div", {
          className: e8().scrollProgressBar,
          children: (0, a.jsx)("span", {
            style: {
              transform: `scaleX(${r})`
            }
          })
        })
      }

      function tC(e) {
        if ("string" != typeof e || !e.trim()) return "";
        try {
          let t = new URL(e.trim());
          return "http:" === t.protocol || "https:" === t.protocol ? t.href : ""
        } catch {
          return ""
        }
      }

      function tk({
        url: e,
        onClose: t
      }) {
        return (0, a.jsx)(em.A, {
          opened: !0,
          title: "Leaving guns.lol",
          onClose: t,
          centered: !0,
          size: "380px",
          children: (0, a.jsxs)("div", {
            className: i().customUrlWarning,
            children: [(0, a.jsx)("h1", {
              children: "External link"
            }), (0, a.jsx)("span", {
              children: e
            }), (0, a.jsxs)("div", {
              className: i().modalButtons,
              children: [(0, a.jsx)("button", {
                type: "button",
                onClick: t,
                children: "Cancel"
              }), (0, a.jsx)("a", {
                href: e,
                target: "_blank",
                rel: "noreferrer noopener",
                onClick: t,
                children: "Visit"
              })]
            })]
          })
        })
      }

      function tA({
        children: e
      }) {
        let [t, r] = (0, s.useState)(null);
        return (0, a.jsxs)("div", {
          onClick: e => {
            let t = e.target.closest("a[href]");
            if (!t) return;
            let a = tC(t.getAttribute("href") || "");
            a && (e.preventDefault(), e.stopPropagation(), r(a))
          },
          style: {
            display: "contents"
          },
          children: [e, t && (0, a.jsx)(tk, {
            url: t,
            onClose: () => r(null)
          })]
        })
      }

      function tF(e) {
        let t, r = [],
          s = /(\[([^\]]+)\]\((https?:\/\/[^\s<>")]+)\)|\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`|(https?:\/\/[^\s<>"]+))/g,
          o = 0;
        for (; null !== (t = s.exec(e));) t.index > o && r.push(e.slice(o, t.index)), void 0 !== t[2] && void 0 !== t[3] ? r.push((0, a.jsx)("a", {
          href: tC(t[3]),
          target: "_blank",
          rel: "noreferrer noopener",
          children: t[2]
        }, t.index)) : void 0 !== t[4] ? r.push((0, a.jsx)("strong", {
          children: t[4]
        }, t.index)) : void 0 !== t[5] ? r.push((0, a.jsx)("em", {
          children: t[5]
        }, t.index)) : void 0 !== t[6] ? r.push((0, a.jsx)("code", {
          children: t[6]
        }, t.index)) : void 0 !== t[7] && r.push((0, a.jsx)("a", {
          href: tC(t[7]),
          target: "_blank",
          rel: "noreferrer noopener",
          children: t[7]
        }, t.index)), o = t.index + t[0].length;
        return o < e.length && r.push(e.slice(o)), r.length > 0 ? r : [e]
      }

      function t$(e) {
        let t = e.split("\n"),
          r = [],
          s = [],
          o = e => {
            0 !== s.length && (r.push((0, a.jsx)("ul", {
              children: s.map((e, t) => (0, a.jsx)("li", {
                children: tF(e)
              }, t))
            }, e)), s = [])
          };
        return t.forEach((e, t) => {
          e.startsWith("- ") || e.startsWith("• ") ? s.push(e.slice(2)) : (o(`list-${t}`), e.startsWith("### ")) ? r.push((0, a.jsx)("h3", {
            children: tF(e.slice(4))
          }, t)) : e.startsWith("## ") ? r.push((0, a.jsx)("h2", {
            children: tF(e.slice(3))
          }, t)) : e.startsWith("# ") ? r.push((0, a.jsx)("h1", {
            children: tF(e.slice(2))
          }, t)) : e.startsWith("> ") ? r.push((0, a.jsx)("blockquote", {
            children: tF(e.slice(2))
          }, t)) : "" === e.trim() ? r.push((0, a.jsx)("br", {}, t)) : r.push((0, a.jsx)("p", {
            children: tF(e)
          }, t))
        }), o("list-end"), r
      }

      function tT({
        presenceInformation: e,
        font: t,
        fontSize: r,
        discordUserBadges: o,
        discordData: i,
        discordPresenceSettings: n,
        animationStartClass: l,
        discordWidgetRef: c,
        loading: d,
        profileBorderClass: u = "",
        profileBorderEffect: m = "shimmer"
      }) {
        let f = {
            0: "Playing",
            1: "Streaming",
            2: "Listening to",
            3: "Watching",
            5: "Competing"
          },
          h = e.activities || [],
          [g, x] = (0, s.useState)(0),
          [v, y] = (0, s.useState)(null),
          [b, j] = (0, s.useState)(!1),
          _ = h[g] || h[0],
          w = p({
            font: t,
            fontSize: r
          }),
          S = _?.name === "Spotify",
          N = {
            display: _?.emoji?.startsWith("https://") && _?.type === 4 && !S && "flex",
            alignItems: _?.emoji?.startsWith("https://") && _?.type === 4 && !S && "flex-end"
          },
          C = ev(e),
          k = e.primaryGuild?.hasGuildTag ? e.primaryGuild : C.primaryGuild || {
            hasGuildTag: !1
          },
          A = C.avatar,
          F = C.displayName,
          $ = e.status || "unknown",
          T = "unknown" === $ ? "offline" : $;
        (0, s.useEffect)(() => {
          x(e => e >= h.length ? 0 : e), y(null), j(!1)
        }, [h.length]), (0, s.useEffect)(() => {
          if (h.length <= 1) return;
          let e = window.setInterval(() => {
            x(e => {
              let t = (e + 1) % h.length;
              return y(h[e] || h[0]), j(!0), t
            })
          }, 15e3);
          return () => window.clearInterval(e)
        }, [h.length, g]), (0, s.useEffect)(() => {
          if (!b) return;
          let e = window.setTimeout(() => {
            y(null), j(!1)
          }, 360);
          return () => window.clearTimeout(e)
        }, [b, g]);
        let P = e => {
            if (!e) return null;
            let t = "Spotify" === e.name,
              r = "string" == typeof e.emoji ? e.emoji : "";
            return t ? (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsxs)(ex.A, {
                children: [(0, a.jsx)("span", {
                  className: e2().highlight,
                  children: f[e.type]
                }), " ", e.details]
              }), e.state && (0, a.jsx)(ex.A, {
                children: `by ${e.state.replace(/;/g,",")}`
              })]
            }) : 4 === e.type ? (0, a.jsxs)(ex.A, {
              contentClassName: r.startsWith("https://") ? e2().discordEmojiText : void 0,
              children: [r.startsWith("https://") ? (0, a.jsx)("img", {
                src: r,
                alt: "Discord Emoji",
                className: e2().discordEmoji
              }) : r && (0, a.jsx)("span", {
                className: e2().defaultEmoji,
                children: r
              }), (0, a.jsx)("span", {
                children: e.state
              })]
            }) : (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsxs)(ex.A, {
                children: [(0, a.jsx)("span", {
                  className: e2().highlight,
                  children: f[e.type]
                }), " ", e.name]
              }), (0, a.jsx)(ex.A, {
                children: e.details ? e.details : e.state
              })]
            })
          },
          U = e => {
            if (!e || 4 === e.type || !e.image || "{}" === JSON.stringify(e.image)) return null;
            let t = "Spotify" === e.name ? `Listening to ${e.details}${e.state?` by ${e.state.replace(/;/g,",")}`:""}` : `${f[e.type]} ${e.name}`;
            return (0, a.jsx)(ea.A, {
              content: t,
              pageTooltipStyles: !0,
              children: (0, a.jsx)("img", {
                src: e.image,
                alt: ""
              })
            })
          };
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            className: `${e2().discordPresenceWidget} ${l} ${u}`,
            ref: c,
            children: [u && (0, a.jsx)(eM, {
              effect: m
            }), e.success && _ && !d ? (0, a.jsxs)("div", {
              className: e2().discordUserInformation,
              children: [(0, a.jsx)("div", {
                className: e2().discordAvatar,
                children: (0, a.jsxs)("div", {
                  className: e2().discordStatus,
                  children: [A && (0, a.jsx)("img", {
                    src: A,
                    alt: "Discord Avatar"
                  }), (0, a.jsx)("img", {
                    src: `https://assets.guns.lol/${T}.png`,
                    className: e2().discordStatusIcon,
                    alt: ""
                  })]
                })
              }), (0, a.jsxs)("div", {
                className: e2().discordActivity,
                children: [(0, a.jsxs)("div", {
                  className: e2().discordUser,
                  children: [(0, a.jsxs)("div", {
                    className: e2().discordUserDiv,
                    children: [F && (0, a.jsx)("span", {
                      style: w.discordUsername,
                      children: F
                    }), n.show_guild_tag && k?.hasGuildTag && (0, a.jsxs)("div", {
                      className: e2().guildTag,
                      children: [(0, a.jsx)("img", {
                        src: k?.iconUrl,
                        alt: "Guild Tag Icon"
                      }), " ", (0, a.jsx)("span", {
                        children: k?.tag
                      })]
                    }), n.show_badges && (0, a.jsx)("div", {
                      className: e2().discordUserBadges,
                      children: o.map((e, t) => (0, a.jsx)(ea.A, {
                        content: e,
                        pageTooltipStyles: !0,
                        children: (0, a.jsx)("div", {
                          className: e2().discordBadge,
                          children: (0, a.jsx)("img", {
                            src: tW[e],
                            alt: "Discord Badge"
                          })
                        }, t)
                      }, t))
                    })]
                  }), (0, a.jsxs)("div", {
                    className: e2().discordActivityTextStack,
                    children: [v && b && (0, a.jsx)("h3", {
                      className: `${e2().discordActivityTextLayer} ${e2().discordActivityExit}`,
                      style: w.discordStatus,
                      children: P(v)
                    }), (0, a.jsx)("h3", {
                      className: `${e2().discordActivityTextLayer} ${b?e2().discordActivityEnter:""}`,
                      style: w.discordStatus,
                      children: P(_)
                    }, `activity-text-${g}`)]
                  })]
                }), (0, a.jsx)("div", {
                  className: e2().activityImage,
                  children: (0, a.jsxs)("div", {
                    className: e2().discordActivityImageStack,
                    children: [v && b && (0, a.jsx)("span", {
                      className: `${e2().discordActivityImageLayer} ${e2().discordActivityExit}`,
                      children: U(v)
                    }), (0, a.jsx)("span", {
                      className: `${e2().discordActivityImageLayer} ${b?e2().discordActivityEnter:""}`,
                      children: U(_)
                    }, `activity-image-${g}`)]
                  })
                })]
              })]
            }) : !e.success || _ || d ? d ? (0, a.jsx)("div", {
              className: e2().discordLoading,
              children: (0, a.jsxs)("h1", {
                children: [X.A.discord, " Loading Discord Presence..."]
              })
            }) : (0, a.jsxs)("div", {
              className: e2().discordNotConnected,
              children: [(0, a.jsxs)("h1", {
                style: w.discordUsername,
                children: [X.A.userNotFound, " User Not found"]
              }), i ? (0, a.jsxs)("h3", {
                style: w.discordStatus,
                children: ["Join ", (0, a.jsx)(en(), {
                  href: "https://discord.gg/guns",
                  target: "_blank",
                  children: "discord.gg/guns"
                }), " to display your Discord presence"]
              }) : (0, a.jsxs)("h3", {
                style: w.discordStatus,
                children: ["Please ", (0, a.jsx)(en(), {
                  href: "https://guns.lol/account",
                  target: "_blank",
                  children: "connect"
                }), " your Discord account to display Discord presence"]
              })]
            }) : (0, a.jsxs)("div", {
              className: e2().discordUserInformation,
              children: [(0, a.jsx)("div", {
                className: e2().discordAvatar,
                children: (0, a.jsxs)("div", {
                  className: e2().discordStatus,
                  children: [A && (0, a.jsx)("img", {
                    src: A,
                    alt: "Discord Avatar"
                  }), (0, a.jsx)("img", {
                    src: `https://assets.guns.lol/${T}.png`,
                    className: e2().discordStatusIcon,
                    alt: ""
                  })]
                })
              }), (0, a.jsxs)("div", {
                className: e2().discordActivity,
                children: [(0, a.jsxs)("div", {
                  className: e2().discordUser,
                  children: [(0, a.jsxs)("div", {
                    className: e2().discordUserDiv,
                    children: [F && (0, a.jsx)("span", {
                      style: w.discordUsername,
                      children: F
                    }), n.show_guild_tag && k?.hasGuildTag && (0, a.jsxs)("div", {
                      className: e2().guildTag,
                      children: [(0, a.jsx)("img", {
                        src: k?.iconUrl,
                        alt: "Guild Tag Icon"
                      }), " ", (0, a.jsx)("span", {
                        children: k?.tag
                      })]
                    }), n.show_badges && (0, a.jsx)("div", {
                      className: e2().discordUserBadges,
                      children: o.map((e, t) => (0, a.jsx)(ea.A, {
                        content: e,
                        pageTooltipStyles: !0,
                        children: (0, a.jsx)("div", {
                          className: e2().discordBadge,
                          children: (0, a.jsx)("img", {
                            src: tW[e],
                            alt: "Discord Badge"
                          })
                        }, t)
                      }, t))
                    })]
                  }), (0, a.jsx)("h3", {
                    style: {
                      ...w.discordStatus,
                      ...N
                    },
                    children: "offline" === $ || "unknown" === $ ? (0, a.jsxs)(ex.A, {
                      contentClassName: e2().offlineText,
                      children: ["last seen ", e.lastSeen ? (0, eg.m)(new Date(1e3 * e.lastSeen)).replace("about ", "") + " ago" : "unknown"]
                    }) : (0, a.jsx)(ex.A, {
                      children: n.idle_text || "currently doing nothing"
                    })
                  })]
                }), (0, a.jsx)("div", {
                  className: e2().activityImage
                })]
              })]
            })]
          })
        })
      }

      function tP() {
        let e = (0, ed.kj)(),
          t = "guns_promo_seen_v1",
          [r, o] = (0, s.useState)(!1),
          [n, l] = (0, s.useState)(!1),
          [c, d] = (0, s.useState)(!1),
          u = (0, s.useRef)(null),
          m = (0, s.useRef)(null);
        (0, s.useEffect)(() => {
          let e = () => d(window.innerWidth <= 540);
          return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, []);
        let f = () => {
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
            o(!0), m.current = window.setTimeout(() => p(), 15e3)
          }, 2500), () => {
            u.current && clearTimeout(u.current), m.current && clearTimeout(m.current)
          }
        }, []);
        let p = () => {
          n || (l(!0), f(), setTimeout(() => {
            o(!1), l(!1)
          }, 300))
        };
        return r || n ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("div", {
            className: `${i().promoOverlay} ${n?i().fadeOut:""}`
          }), (0, a.jsxs)("div", {
            className: `${i().promoBubble} ${n?i().bubbleOut:""}`,
            children: [(0, a.jsx)("img", {
              src: "https://assets.guns.lol/guns_logo_no_background_cropped.png",
              className: i().promoLogo
            }), (0, a.jsxs)("a", {
              href: "https://guns.lol/register?ref=promo_bubble",
              target: "_blank",
              onClick: f,
              className: i().promoLink,
              children: [(0, a.jsx)("span", {
                className: i().promoTitle,
                children: e("userpage.promo_bubble.title")
              }), (0, a.jsx)("span", {
                className: i().promoSub,
                children: e(c ? "userpage.promo_bubble.cta.mobile" : "userpage.promo_bubble.cta.desktop")
              })]
            }), (0, a.jsx)("button", {
              className: i().promoClose,
              onClick: p,
              children: "✕"
            })]
          })]
        }) : null
      }
      var tU = r(45941);

      function tE({
        templateInfo: e,
        templateAuthorName: t,
        templateData: r,
        textColor: s
      }) {
        let o = (0, ed.kj)(),
          n = o("userpage.template_preview.login_to_preview");
        return (0, a.jsxs)("div", {
          className: i().templatePreviewContainer,
          style: {
            backgroundColor: "var(--templatePreviewContainerBackground)"
          },
          children: [(0, a.jsx)("style", {
            children: `
                    @media (max-width: 600px) {
                        .${i().volumeButton} {
                            display: none;
                        }
                    }
                `
          }), r.error ? (0, a.jsx)("span", {
            className: i().templatePreviewMessage,
            style: {
              color: s
            },
            children: r.error.toLowerCase().includes("unauthorized") ? n : r.error
          }) : e ? (0, a.jsxs)(a.Fragment, {
            children: [e.image && (0, a.jsx)("img", {
              className: i().templatePreviewImage,
              src: e.image,
              alt: "Preview",
              loading: "lazy"
            }), (0, a.jsxs)("div", {
              className: i().templatePreviewDetails,
              children: [(0, a.jsx)("span", {
                className: i().templatePreviewLabel,
                children: o("userpage.template_preview.template_preview")
              }), (0, a.jsx)("span", {
                className: i().templatePreviewName,
                children: e.name
              }), t && (0, a.jsx)("span", {
                className: i().templatePreviewAuthor,
                children: o("userpage.template_preview.template_author", {
                  author: t
                })
              })]
            }), (0, a.jsx)("a", {
              className: i().templatePreviewLink,
              href: `/templates/${r.isUnlisted?"u/":""}${r.templateId}`,
              target: "_blank",
              rel: "noreferrer",
              children: o("userpage.template_preview.show_template")
            })]
          }) : (0, a.jsx)("span", {
            className: i().templatePreviewMessage,
            style: {
              color: s
            },
            children: o("userpage.template_preview.loading_template")
          })]
        })
      }
      var tz = r(51047),
        tB = r.n(tz);
      let tI = e => new(eG())().splitGraphemes(e),
        tM = (e, t) => {
          let r = parseInt(e = e.replace(/^#/, ""), 16),
            a = Math.max(0, Math.min(1, t));
          return `rgba(${r>>16&255}, ${r>>8&255}, ${255&r}, ${a})`
        };

      function tL() {
        let e = navigator.userAgent.toLowerCase();
        return /mobile|iphone|ipod|android.*mobile/.test(e) ? "mobile" : /ipad|tablet|android(?!.*mobile)/.test(e) ? "tablet" : "desktop"
      }
      async function tD(e, t, r, a) {
        if (a) return;
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
              deviceType: tL()
            })
          }),
          o = await s.json();
        o.error && console.error("Error recording analytics:", o.error)
      }
      let tW = {
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

      function tR({
        data: e
      }) {
        let t = (0, eQ.useRouter)(),
          r = (0, eQ.useSearchParams)(),
          [o, l] = (0, s.useState)({
            templatePreview: !1,
            templateId: "",
            error: null,
            isUnlisted: !1,
            templateInfo: null
          }),
          [d, u] = (0, s.useState)({}),
          [m, f] = (0, s.useState)(!1),
          h = !!(e?.deletion?.scheduledForDeletion && !e?.deletion?.banDeletion),
          g = decodeURIComponent((0, eQ.useParams)().username),
          [x, v] = (0, s.useState)(!1),
          [y, b] = (0, s.useState)({
            volume: 100,
            muted: !1
          }),
          j = e.config?.premium?.metadata?.favicon;
        e.alias && e.redirect && (0, eQ.redirect)(e.redirect);
        let [_, w] = (0, s.useState)(e.config ?? tU.hR), [S, N] = (0, s.useState)(_.premium), [C, k] = (0, s.useState)({
          playing: !1,
          currentTime: 0,
          duration: 0,
          ref: null
        }), [A, F] = (0, s.useState)({
          url: "",
          title: "",
          cover: "",
          id: ""
        }), $ = (0, s.useRef)(null), T = (0, s.useRef)(null), P = (0, s.useRef)(null), U = (0, s.useRef)(null), E = (0, s.useRef)(null), z = p({
          font: S.font,
          fontSize: S.font_size
        }), B = _.user_badges, I = e.discord?.user_badges ? B.includes("server_booster") || B.find(e => "server_booster" === e.name) ? [...e.discord.user_badges, "Server Booster"] : e.discord.user_badges : [], M = _.discord_presence_settings || {
          show_badges: !0,
          show_guild_tag: !0,
          idle_text: ""
        }, L = e.discord ? {
          id: ey(e.discord.id),
          username: e.discord.username,
          user_badges: e.discord.user_badges || []
        } : null, D = _.text_color, W = S.border_opacity ?? .3, R = tM(S.border_color, W), G = S.border_style ?? "static", H = "dashed" === G ? "dashed" : "solid", O = `${S.border_width}px ${H} ${R}`, q = `2px solid ${tM(S.border_color,W)}`, V = ["shimmer", "pulse"].includes(G) ? G : null, Y = S.border_enabled && !!V, Q = Y ? i().shimmerProfileBorder : "", K = ev(d), ee = _.use_discord_avatar && e.discord ? K.avatar : _.avatar, et = "simplistic" === S.layout ? {
          justifyContent: "initial"
        } : "sleek" === S.layout && ee ? {
          paddingTop: "100px"
        } : {}, er = "portfolio" === S.layout ? S.portfolio_border_radius ?? S.border_radius : S.border_radius, ea = {
          "--presenceUsernameColor": D,
          "--presenceStatusColor": tM(D, .7),
          "--presenceContainerBackground": _.swap_colors ? tM(_.color, .2) : tM(D, .07),
          "--presenceContainerBorder": _.swap_colors ? `2px solid ${tM(_.color,.1)}` : `2px solid ${tM(D,.05)}`,
          "--discordServerMembers": tM(D, .6),
          "--secondTabBackground": _.swap_colors ? tM(_.color, .2) : tM(D, .07),
          "--secondTabBorder": _.swap_colors ? `2px solid ${tM(_.color,.1)}` : `2px solid ${tM(D,.05)}`,
          "--discordMissingIcon": tM(D, .25),
          "--modernLayoutSeperator": tM(D, .12),
          "--modernLayoutSeperatorBorder": tM(D, .12),
          "--discordAvatarBorder": `2px solid ${tM(_.color,.15)}`,
          "--badgeContainerBackground": _.swap_colors ? tM(_.color, .2) : tM(D, .08),
          "--badgeContainerBorder": `2px solid ${tM(_.swap_colors?_.color:D,.04)}`,
          "--userBadge": {
            default: "20.5px",
            modern: "18px",
            simplistic: "20.5px",
            sleek: "20px",
            portfolio: "20px"
          } [S.layout],
          "--textColor": D,
          "--textColorDarker": tM(D, .5),
          "--iconColor": _.icon_color,
          "--backgroundColor": _.bg_color,
          "--joinStatus": tM(D, .65),
          "--audioPlayerBar": tM(D, .35),
          "--avatarBorder": S.border_enabled ? q : `2px solid ${tM(_.color,.4)}`,
          "--containerColor": tM(_.color, _.opacity),
          "--containerBlur": `${_.blur}px`,
          "--containerGradient": _.profile_gradient && `linear-gradient(25deg, ${tM(_.gradient_1,_.opacity)}, ${tM(_.gradient_2,_.opacity)})`,
          "--containerBackgroundImage": _.profile_gradient && `linear-gradient(25deg, ${tM(_.gradient_1,_.opacity)}, ${tM(_.gradient_2,_.opacity)})`,
          "--containerBorder": S.border_enabled && (Y ? "none" : O),
          "--containerBackgroundClip": "border-box",
          "--containerBackgroundOrigin": "border-box",
          "--profileBorderWidth": `${S.border_width}px`,
          "--profileBorderColor": R,
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
          "--volumeBackgroundcolor": tM(_.color, 0 !== _.opacity ? _.opacity : .2),
          "--volumeBorder": `2px solid ${tM(_.color,0!==_.opacity?_.opacity-.1*_.opacity:.05)}`,
          "--colorUsernameGlow": _.username_glow && `0px 0px 16.5px ${D}`,
          "--usernameEffects": (() => {
            let e = _.username_effects;
            if (!(!e || ["rgb", "rainbow", "none", "typewriter", "fuzzy", "shuffle"].includes(e))) return `url(https://assets.guns.lol/${e.startsWith("sparkle_")?e:`sparkle_${e}`}.gif)`
          })(),
          "--buttonBackground": tM(D, .22),
          "--buttonBorder": `2px solid ${tM(D,.12)}`,
          "--buttonRadius": `${S.button_border_radius}px`,
          "--buttonAlign": S.text_align,
          "--buttonBackgroundHover": tM(D, .32),
          "--buttonBorderHover": `2px solid ${tM(D,.25)}`,
          "--buttonUrlColor": tM(D, .65),
          "--buttonShadow": S.button_shadow && `${tM(D,.22)} 0px 0px 15px`,
          "--profileViewsContainerBorder": `2px solid ${R}`,
          "--templatePreviewContainerBackground": tM(_.color, .4),
          "--platformTextColor": tM(D, .4),
          "--secondTabWidgetDescription": tM(D, .6),
          "--audioIconBackground": tM(D, .2),
          "--progessBarFull": tM(D, .3),
          "--progessBarPlaying": D,
          "--controlButtonsOther": tM(D, .5),
          "--controlButtonPlaying": D,
          "--controlTextColor": tM(D, .7),
          "--modernLayoutBottomLeftDivider": tM(D, .14),
          "--sleekLayoutTopRightDivider": tM(D, .14)
        }, es = e.premium ? "unfold" === S.animation ? i().unfoldStart : "fade" === S.animation ? i().fadeUpStart : "pop" === S.animation ? i().scaleFadeStart : i().fadeUpStart : i().fadeUpStart, eo = e.premium ? "unfold" === S.animation ? i().unfold : "fade" === S.animation ? i().fadeUp : "pop" === S.animation ? i().scaleFade : i().fadeUp : i().fadeUp, ei = {
          modern: `${i().userContainer} ${es} ${Q}`,
          default: `${i().userContainer} ${es} ${Q}`,
          simplistic: `${i().userContainerLayout3} ${es}`,
          sleek: `${i().userContainerLayout4} ${es} ${Q}`,
          portfolio: `${i().userContainer} ${es} ${Q}`
        }, en = o.templateInfo, el = en?.user_information?.username;
        (0, s.useEffect)(() => {
          var t;
          let r, a;
          e.success && !e.ban && _.animated_title && (t = "" !== _.display_name ? _.display_name : e.username, r = 0, a = !0, setInterval(() => {
            r === t.length && (a = !1), 0 === r && (a = !0);
            let e = 0 === (r = a ? r + 1 : r - 1) ? "" : t.slice(0, r);
            document.title = "@" + e
          }, 380)), ed || ef(_.url) || (eo === i().fadeUp ? setTimeout(function() {
            P.current && P.current.classList.add(i().fadeUp), U.current && U.current?.classList.add(i().fadeUp), E.current && E.current?.classList.add(i().fadeUp)
          }, 350) : eo === i().unfold ? document.querySelectorAll(`.${i().unfoldStart}`).forEach((e, t) => {
            setTimeout(() => {
              e.classList.add(i().unfold)
            }, 300 * t)
          }) : eo === i().scaleFade && setTimeout(function() {
            P.current && P.current.classList.add(i().scaleFade), U.current && U.current?.classList.add(i().scaleFade), E.current && E.current?.classList.add(i().scaleFade)
          }, 350))
        }, [r, _]), (0, s.useEffect)(() => {
          let e = navigator.userAgent.toLowerCase();
          v(/iphone|ipod|android.*mobile|windows phone|blackberry|bb10/.test(e) || /ipad|tablet|android(?!.*mobile)/.test(e) || navigator.maxTouchPoints > 1 && /macintosh/.test(e))
        }, []);
        let ec = "string" == typeof _.audio,
          [ed, eu] = (0, s.useState)(ec ? "" !== _.audio : _.audio.length > 0),
          em = () => {
            let e = !y.muted,
              t = C.ref;
            0 === y.volume && y.muted ? (b({
              ...y,
              muted: !1,
              volume: 100
            }), t && (t.muted = !1, t.volume = .25), !ed && $.current && ($.current.muted = !1, $.current.volume = .25)) : (b({
              ...y,
              muted: e
            }), t && (t.muted = e, e || (t.volume = y.volume / 100 * .25)), !ed && $.current && ($.current.muted = e, e || ($.current.volume = y.volume / 100 * .25)))
          },
          ef = e => {
            for (let t of [".mp4", ".mov", ".avi", ".m4v", ".webm", ".mkv"])
              if (e.endsWith(t)) return !0;
            return !1
          };
        return (0, s.useEffect)(() => {
          let a = r.get("templatePreview"),
            s = r.get("unlisted") || "false",
            o = r.get("templateId");
          a && !o || !a && o ? t.push(`/${g}`) : "true" === a && o ? (async () => {
            try {
              let t = await fetch(`https://guns.lol/api/users/templatePreview/${o}?unlisted=${s}`, {
                  method: "POST"
                }),
                r = await t.json(),
                a = r.error ? null : {
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
                  templateId: String(o),
                  error: r.error ?? null,
                  isUnlisted: "true" === s,
                  templateInfo: a
                }), r.error) return;
              let i = r.config || {},
                n = r.premium || {};
              w(e => ({
                ...e,
                ...i
              })), e.premium && Object.keys(n).length > 0 && N(e => ({
                ...e,
                ...n
              }));
              let c = i?.audio;
              "string" == typeof c ? eu("" !== c) : Array.isArray(c) && eu(c.length > 0)
            } catch (e) {
              console.error("Error fetching template preview:", e), l({
                templatePreview: !0,
                templateId: o || "",
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
            if (!r) return void f(!1);
            let a = await fetch("https://guns.lol/api/service/discord", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  type: t,
                  discordId: r,
                  fallbackIdentity: L
                })
              }),
              s = await a.json();
            a.ok ? u(s) : console.error(`Error fetching Discord ${t}:`, s.error), f(!1)
          };
          e.discord && "enabled" === _.presence && !e.ban && e.verified ? (f(!0), t("presence")) : e.discord && _.use_discord_avatar && !e.ban && e.verified && t("avatar")
        }, [e.discord?.id, _.presence, _.use_discord_avatar, e.ban, e.verified]), (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("style", {
            children: `
                html {
                   direction: ltr;    
                }
                `
          }), j && "" !== j && (0, a.jsx)("link", {
            rel: "icon",
            href: j,
            sizes: "any"
          }), e.success && !e.ban && e.verified && !h ? (0, a.jsxs)(a.Fragment, {
            children: [!e.premium && !o.templatePreview && (0, a.jsx)(tP, {}), (0, a.jsx)(n, {
              backgroundUrl: _.url,
              audio: _.audio,
              shuffleAudios: _.shuffle_audios,
              videoTagRef: $,
              audioTagRef: T,
              audioData: A,
              setAudioData: F
            }), (ed || ef(_.url)) && (0, a.jsx)(c, {
              videoTagRef: $,
              audioTagRef: T,
              clickToEnterText: "" === S.page_enter_text ? "click to enter..." : S.page_enter_text,
              userFont: z,
              userContainerRef: P,
              animationClass: eo,
              setAudioPlayer: k,
              audioContainerRef: U,
              discordWidgetRef: E
            }), (0, a.jsx)(Z, {
              backgroundEffects: _.background_effects,
              backgroundEffectsColor: _.background_effects_color,
              cursorEffects: S.cursor_effects,
              cursorEffectsColor: S.effects_color,
              textColor: D,
              backgroundColor: _.bg_color,
              cursorUrl: _.custom_cursor
            }), (0, a.jsx)(J.A, {
              font: S.font,
              letterSpacing: S.font_letter_spacing
            }), (0, a.jsx)("div", {
              className: i().backgroundColor,
              style: {
                backgroundColor: _.bg_color
              }
            }), (0, a.jsxs)("div", {
              style: ea,
              children: [_.volume_control && (ef(_.url) || ed) && !x && (0, a.jsxs)("div", {
                className: i().volumeButton,
                children: [y.muted ? (0, a.jsx)("span", {
                  onClick: em,
                  children: X.A.muted
                }) : (0, a.jsx)("span", {
                  onClick: em,
                  children: X.A.unmuted
                }), (0, a.jsxs)("div", {
                  className: i().volumeSlider,
                  children: [(0, a.jsx)("style", {
                    children: `
                                        .${tB().tooltip} {
                                            display: none!important;
                                        }
                                        .${tB().track} {
                                                background: var(--textColorDarker);
                                            }
                                        .${tB().progress} {
                                            background-color: var(--textColor)
                                        }
                                        .${tB().thumb} {
                                            display: none!important;
                                        }
                                        .${tB().sliderShell} {
                                            padding: 0!important;
                                            --touch-target-height: 0px!important;
                                        }
                                        `
                  }), (0, a.jsx)(e0.A, {
                    value: y.muted ? 0 : Math.round(y.volume),
                    onChangeFunction: e => {
                      let t = 0 === e,
                        r = C.ref;
                      b({
                        volume: e,
                        muted: t
                      }), r && (r.volume = e / 100 * .25, r.muted = t), !ed && $.current && ($.current.volume = e / 100 * .25, $.current.muted = t)
                    },
                    step: 1,
                    max: 100,
                    min: 0
                  })]
                })]
              }), (0, a.jsx)(eS.A, {
                username: e.username
              }), o.templatePreview && (0, a.jsx)(tE, {
                templateInfo: o.templateInfo,
                templateAuthorName: el || "Unknown",
                templateData: o,
                textColor: S.text_color
              }), (0, a.jsx)("div", {
                className: i().mainContainer,
                children: "portfolio" === S.layout ? (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)(tl, {
                    userData: e,
                    config: _,
                    premiumConfig: S,
                    presenceInformation: d,
                    animationStartClass: es,
                    isTemplatePreview: o.templatePreview,
                    discordLoading: m,
                    discordBadges: I,
                    profileBorderClass: Q,
                    profileBorderEffect: V,
                    profileBorderEffectEnabled: Y,
                    audioPlayer: C,
                    setAudioData: F,
                    audioData: A,
                    setAudioPlayer: k,
                    audioContainerRef: U,
                    setVolume: b
                  }), (0, a.jsx)("style", {
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
                }) : (0, a.jsxs)("div", {
                  className: i().userContainerWrapper,
                  style: et,
                  children: ["simplistic" === S.layout && (0, a.jsx)("div", {
                    className: i().profileViewsContainer,
                    children: (0, a.jsx)(ew, {
                      challengeData: e._gpp_ch,
                      username: e.username,
                      premiumConfig: S,
                      views: _.page_views,
                      containerBorderRadius: S.border_radius,
                      isUnfold: es === i().unfoldStart,
                      animationStartClass: es,
                      isTemplatePreview: o.templatePreview
                    })
                  }), S.parallax_animation ? (0, a.jsxs)(eK.A, {
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
                    children: [(0, a.jsxs)("div", {
                      className: ei[S.layout],
                      style: {
                        position: Y ? "relative" : "initial"
                      },
                      ref: P,
                      children: [Y && V && (0, a.jsx)(eM, {
                        effect: V
                      }), "default" === S.layout ? (0, a.jsx)(eN, {
                        userData: e,
                        config: _,
                        premiumConfig: S,
                        presenceInformation: d,
                        animationStartClass: es,
                        isTemplatePreview: o.templatePreview,
                        discordLoading: m
                      }) : "modern" === S.layout ? (0, a.jsx)(eT, {
                        userData: e,
                        config: _,
                        premiumConfig: S,
                        presenceInformation: d,
                        animationStartClass: es,
                        isTemplatePreview: o.templatePreview,
                        discordLoading: m
                      }) : "simplistic" === S.layout ? (0, a.jsx)(eW, {
                        userData: e,
                        config: _,
                        premiumConfig: S,
                        presenceInformation: d,
                        animationStartClass: es,
                        setAudioData: F,
                        audioData: A,
                        audioPlayer: C,
                        setAudioPlayer: k,
                        audioContainerRef: U,
                        setVolume: b,
                        profileBorderClass: Q,
                        profileBorderEffect: V
                      }) : (0, a.jsx)(e5, {
                        userData: e,
                        config: _,
                        premiumConfig: S,
                        presenceInformation: d,
                        animationStartClass: es,
                        isTemplatePreview: o.templatePreview
                      })]
                    }), "enabled" === _.presence && "sleek" === S.layout && (0, a.jsx)(tT, {
                      loading: m,
                      presenceInformation: d,
                      font: S.font,
                      discordUserBadges: I,
                      discordData: e.discord,
                      fontSize: S.font_size,
                      animationStartClass: es,
                      discordWidgetRef: E,
                      discordPresenceSettings: M,
                      profileBorderClass: Q,
                      profileBorderEffect: V
                    }), _.audio_player && "" !== A.url && "simplistic" !== S.layout && (0, a.jsx)(eD, {
                      animationStartClass: es,
                      audioPlayer: C,
                      setAudioData: F,
                      audioData: A,
                      setAudioPlayer: k,
                      audioContainerRef: U,
                      currentFont: S.font,
                      audioList: _.audio,
                      setVolume: b,
                      fontSize: S.font_size,
                      profileBorderClass: Q,
                      profileBorderEffect: V
                    })]
                  }) : (0, a.jsxs)("div", {
                    className: i().usernameContainerFlex,
                    style: {
                      position: "relative",
                      zIndex: 1
                    },
                    children: [(0, a.jsxs)("div", {
                      className: ei[S.layout],
                      ref: P,
                      children: [Y && V && (0, a.jsx)(eM, {
                        effect: V
                      }), "default" === S.layout ? (0, a.jsx)(eN, {
                        userData: e,
                        config: _,
                        premiumConfig: S,
                        presenceInformation: d,
                        animationStartClass: es,
                        isTemplatePreview: o.templatePreview,
                        discordLoading: m
                      }) : "modern" === S.layout ? (0, a.jsx)(eT, {
                        userData: e,
                        config: _,
                        premiumConfig: S,
                        presenceInformation: d,
                        animationStartClass: es,
                        isTemplatePreview: o.templatePreview,
                        discordLoading: m
                      }) : "simplistic" === S.layout ? (0, a.jsx)(eW, {
                        userData: e,
                        config: _,
                        premiumConfig: S,
                        presenceInformation: d,
                        animationStartClass: es,
                        setAudioData: F,
                        audioData: A,
                        audioPlayer: C,
                        setAudioPlayer: k,
                        audioContainerRef: U,
                        setVolume: b,
                        profileBorderClass: Q,
                        profileBorderEffect: V
                      }) : (0, a.jsx)(e5, {
                        userData: e,
                        config: _,
                        premiumConfig: S,
                        presenceInformation: d,
                        animationStartClass: es,
                        isTemplatePreview: o.templatePreview
                      })]
                    }), "enabled" === _.presence && "sleek" === S.layout && (0, a.jsx)(tT, {
                      loading: m,
                      presenceInformation: d,
                      font: S.font,
                      discordUserBadges: I,
                      discordData: e.discord,
                      fontSize: S.font_size,
                      animationStartClass: es,
                      discordWidgetRef: E,
                      discordPresenceSettings: M,
                      profileBorderClass: Q,
                      profileBorderEffect: V
                    }), _.audio_player && "" !== A.url && "simplistic" !== S.layout && (0, a.jsx)(eD, {
                      animationStartClass: es,
                      audioPlayer: C,
                      setAudioData: F,
                      audioData: A,
                      setAudioPlayer: k,
                      audioContainerRef: U,
                      currentFont: S.font,
                      audioList: _.audio,
                      setVolume: b,
                      fontSize: S.font_size,
                      profileBorderClass: Q,
                      profileBorderEffect: V
                    })]
                  })]
                })
              })]
            })]
          }) : e.error?.toLowerCase() === "user not found" ? (0, a.jsx)(eV, {
            username: g,
            sessionData: e.session
          }) : h ? (0, a.jsx)(eJ, {}) : e.error ? (0, a.jsx)(eY, {}) : !0 === e.ban ? (0, a.jsx)(eZ, {
            reason: e.ban_reason
          }) : !e.verified && (0, a.jsx)(eX, {})]
        })
      }
    },
    17440: (e, t, r) => {
      "use strict";
      r.d(t, {
        h: () => n
      });
      var a = r(71558),
        s = r(77599);
      let o = e => ({
          hex: e.hex,
          path: e.path
        }),
        i = {
          python: o(a.FRF),
          javascript: o(a.wAf),
          typescript: o(a.k8A),
          rust: o(a.XSi),
          go: o(a.LGf),
          java: o(a.cbE),
          kotlin: o(a.OOE),
          swift: o(a.CiU),
          csharp: o(a.$ae),
          cpp: o(a.ocb),
          c: o(a.yx7),
          ruby: o(a.hsX),
          php: o(a.zyD),
          elixir: o(a.kK$),
          haskell: o(a.hR5),
          scala: o(a.NMs),
          dart: o(a.SaL),
          lua: o(a.Bge),
          r: o(a.Fcj),
          julia: o(a.oYk),
          clojure: o(a.N9z),
          zig: o(a.PLb),
          react: o(a.usQ),
          nextjs: o(a.iaw),
          vue: o(a.psU),
          nuxt: o(a.yA),
          svelte: o(a.eLf),
          angular: o(a.HXh),
          solid: o(a.S29),
          remix: o(a.YkN),
          astro: o(a.uIm),
          qwik: o(a.H5N),
          htmx: o(a.kf7),
          nodejs: o(a.jCk),
          express: o(a.but),
          fastapi: o(a.HVU),
          django: o(a.EO7),
          flask: o(a.ovN),
          rails: o(a.Xrq),
          laravel: o(a.cqm),
          nestjs: o(a.Alo),
          hono: o(a.F7v),
          bun: o(a.qVm),
          deno: o(a.xiE),
          spring: o(a.ATT),
          actix: o(a.IOj),
          gin: o(a.HPo),
          postgresql: o(a.$Gx),
          mysql: o(a.FUg),
          mongodb: o(a.jHD),
          redis: o(a.Oic),
          sqlite: o(a.dm5),
          supabase: o(a.lvA),
          firebase: o(a.Ep6),
          planetscale: o(a.vKd),
          turso: o(a.IKK),
          cassandra: o(a.VLf),
          clickhouse: o(a.FO9),
          docker: o(a.bJP),
          kubernetes: o(a.Ze),
          gcp: o(a.vGL),
          vercel: o(a.gc9),
          cloudflare: o(a.abC),
          terraform: o(a.Bn8),
          "github-actions": o(a.DVO),
          linux: o(a.Z0w),
          tailwind: o(a.AN7),
          css: o(a.QBF),
          sass: o(a.$EC),
          shadcn: o(a.__M),
          "framer-motion": o(a.W4B),
          three: o(a.HVl),
          pytorch: o(a.glI),
          tensorflow: o(a.Md3),
          langchain: o(a.G9w),
          pandas: o(a.OUC),
          numpy: o(a.GUw),
          graphql: o(a.WhL),
          trpc: o(a._RX),
          prisma: o(a.fJ3),
          drizzle: o(a.nLA),
          git: o(a.HkF),
          figma: o(a.ZBL),
          blender: o(a.JL2),
          unity: o(a.CX9),
          unreal: o(a.ABy),
          flutter: o(a.PL5),
          "react-native": o(a.usQ),
          tauri: o(a.KGs),
          electron: o(a.zwX),
          wasm: o(a.bnX),
          kafka: o(a.l11),
          rabbitmq: o(a.Ztf),
          nginx: o(a.h$_),
          neovim: o(a.T84)
        };

      function n(e) {
        let t = "string" == typeof e ? (0, s.RU)(e) : e;
        return t ? i[t.id] : void 0
      }
    },
    27212: e => {
      e.exports = {
        portfolioPage: "GUNS__7b-ad72801c-d3bb8b46-0894ec4e",
        portfolioSections: "GUNS__9d-aa0d7193-ab3c9d09-69855837",
        portfolioReveal: "GUNS__a7-42c2b4ef-18d7dfdb-651f60fe",
        portfolioIntroStack: "GUNS__25-5e1f5fdb-ebea97ac-06673f53",
        portfolioTopSection: "GUNS__33-289b5a49-64aef540-cb964a41",
        heroModule: "GUNS__07-9f3b6c9b-13597119-0404b65e",
        portfolioSection: "GUNS__04-48c26bc6-e5a19dc2-c8288809",
        heroStage: "GUNS__18-7c2472f2-6a2c59bb-c9c39e70",
        heroStageSolo: "GUNS__35-08e74f4d-3c49b19d-e4ff0f76",
        heroIdentity: "GUNS__74-a07b26e4-6436fb8c-6bb9433f",
        heroAvatarFrame: "GUNS__60-f6e4b357-041933b3-bab21af8",
        heroAvatar: "GUNS__5f-efece4b5-517a4ed2-4257cacf",
        heroTitlePanel: "GUNS__2f-d8370fad-3038f469-2e916cdf",
        heroDescription: "GUNS__81-7438d2df-c0161f48-3f3200e7",
        heroContent: "GUNS__58-21193694-fe5d6591-fbd81464",
        heroTitleStack: "GUNS__05-5309d41d-2d976092-500695a1",
        heroTitleRow: "GUNS__d2-ba3d2def-d2760e65-3ed7811a",
        heroBadgeContainerInline: "GUNS__59-1f40d600-40dba878-90b11147",
        heroBadgeContainerCentered: "GUNS__fa-9eb5df22-bc7e6d38-f7b031fa",
        heroActions: "GUNS__20-140cbab4-d4407d14-80413a1e",
        heroBottomMeta: "GUNS__38-301bcaaf-9d61b88f-afdbaa22",
        heroBottomMetaSep: "GUNS__0d-72afd7f5-05c9e1d8-8763be9f",
        heroBottomMetaItem: "GUNS__08-25508449-9c4a029c-41f12d14",
        heroTitleEffects: "GUNS__f3-8b06883e-d025a27a-52567259",
        audioModule: "GUNS__ac-29722d55-c6a95eb5-6e836a0d",
        sectionHeading: "GUNS__d3-da886a08-d0f07b56-afbb72f4",
        textCard: "GUNS__16-94b8553d-38030f74-0403fc6e",
        aboutCard: "GUNS__78-fd8143c6-c7385e6f-9b42faf4",
        aboutCards: "GUNS__75-0fd8ed4e-7fc51b4b-480b0bed",
        aboutCardContent: "GUNS__42-fc4a8ecb-0134cd8f-16509107",
        projectGrid: "GUNS__8f-05ab8dd3-96722b99-ecfc33d7",
        projectCard: "GUNS__91-d071a5c5-39582cb6-db02233d",
        projectImage: "GUNS__12-ec678af2-524b7369-2844fe5a",
        projectScrim: "GUNS__f5-10340946-79523511-349521b9",
        projectTags: "GUNS__5b-448926bc-f360f850-e5ade1a0",
        projectTagPill: "GUNS__37-b100a3e7-104f9f4c-8e713728",
        projectTagDot: "GUNS__54-4ac3a9c6-961b54e0-8c9f57b6",
        projectTagIcon: "GUNS__46-b913928d-c62289b7-8de4dc58",
        projectContent: "GUNS__b4-e3665cbf-d58c7f96-ee1096c3",
        projectVisit: "GUNS__f6-cca90b98-a68f3cbd-f663cc91",
        skillsGrid: "GUNS__8c-afdd5c2e-0a88e335-5e9756c2",
        skillPill: "GUNS__08-f3542ffc-cbe67775-602210e2",
        skillsCategoryGrid: "GUNS__ba-42a2a088-86b094e5-c88d3ec3",
        skillCategoryGroup: "GUNS__38-99484680-1fac1fda-6f2cd29b",
        skillPillDot: "GUNS__3b-b89689a3-b4ad956c-d7edd925",
        skillPillIcon: "GUNS__55-8b362b41-7e82c10b-7570fbe6",
        customContent: "GUNS__70-7cf7bb9a-2028ce23-c344e5f1",
        readMoreButton: "GUNS__d4-ecbd9d49-57ea7dd5-76739d2f",
        customReadMoreFadePulse: "GUNS__64-fb8ec083-4f8b38de-c7ba21d4",
        customReadMorePopPulse: "GUNS__07-d9182382-837aa49c-20691fdd",
        customReadMoreUnfoldPulse: "GUNS__a5-d73ed353-df9f175f-34df95ea",
        scrollProgressBar: "GUNS__da-9401a1cf-19f81560-7e6e18b8",
        scrollProgressDots: "GUNS__91-10a31676-9447bfb7-f8a8c061",
        customEmbed: "GUNS__41-53148273-a1978857-81e3d5dd",
        scrollIndicator: "GUNS__1c-b0f698f7-d1505db6-7276de7d",
        portfolioScrollCue: "GUNS__c2-b14692e0-1b9b0b73-8aa64360"
      }
    },
    28485: (e, t, r) => {
      "use strict";
      r.d(t, {
        Fb: () => n,
        Uy: () => i,
        V$: () => a,
        vp: () => o
      });
      let a = {
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

      function o(e, t) {
        let r = s[e];
        if (!r) return "...";
        let a = t(r.key),
          o = "string" == typeof a ? a : r.fallback;
        return o === r.key ? r.fallback : o
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
      var a = r(95155),
        s = r(12115),
        o = r(5684),
        i = r.n(o);

      function n({
        as: e = "span",
        className: t,
        contentClassName: r,
        children: o,
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
            a = !0,
            s = () => {
              cancelAnimationFrame(r), r = requestAnimationFrame(() => {
                if (!a) return;
                let r = Math.ceil(t.scrollWidth - e.clientWidth);
                m(r > 1 ? r : 0)
              })
            };
          s();
          let o = "undefined" != typeof ResizeObserver ? new ResizeObserver(s) : null;
          return o?.observe(e), o?.observe(t), window.addEventListener("resize", s), document.fonts?.ready.then(s), () => {
            a = !1, cancelAnimationFrame(r), o?.disconnect(), window.removeEventListener("resize", s)
          }
        }, [o, n]);
        let f = u > 0 ? {
          "--overflow-text-distance": `-${u}px`,
          "--overflow-text-duration": `${Math.min(Math.max(u/24+4.5,5.5),12)}s`
        } : void 0;
        return (0, a.jsx)(e, {
          ref: c,
          className: `${i().overflowText}${t?` ${t}`:""}`,
          style: n,
          title: l,
          children: (0, a.jsx)("span", {
            ref: d,
            className: `${i().overflowTextContent}${u>0?` ${i().isScrollable}`:""}${r?` ${r}`:""}`,
            style: f,
            children: o
          })
        })
      }
    },
    61861: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => u
      });
      var a = r(95155),
        s = r(12115);
      let o = ({
        children: e,
        fontSize: t = "clamp(2rem, 8vw, 8rem)",
        fontWeight: r = 500,
        fontFamily: o = "inherit",
        color: i = "#fff",
        enableHover: n = !0,
        baseIntensity: l = .18,
        hoverIntensity: c = .5,
        marginBottom: d = "0px"
      }) => {
        let u = (0, s.useRef)(null);
        return (0, s.useEffect)(() => {
          let a, m = !1,
            f = u.current;
          if (f) return (async () => {
            let u;
            if (document.fonts?.ready && await document.fonts.ready, m) return;
            let p = f.getContext("2d");
            if (!p) return;
            let h = "inherit" === o ? window.getComputedStyle(f).fontFamily || "sans-serif" : o,
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
            let b = y.measureText(x),
              j = b.actualBoundingBoxLeft ?? 0,
              _ = b.actualBoundingBoxRight ?? b.width,
              w = b.actualBoundingBoxAscent ?? u,
              S = b.actualBoundingBoxDescent ?? .2 * u,
              N = Math.ceil(j + _),
              C = Math.ceil(w + S),
              k = N + 10;
            v.width = k, v.height = C;
            y.font = `${r} ${g} ${h}`, y.textBaseline = "alphabetic", y.fillStyle = i, y.fillText(x, 5 - j, w), f.width = k + 0, f.height = C + 0, f.style.marginLeft = "-5px", f.style.marginBottom = d, p.translate(0, 0);
            let A = 5,
              F = 5 + N,
              $ = 0 + C,
              T = !1,
              P = () => {
                if (m) return;
                p.clearRect(-30, -30, k + 60, C + 60);
                let e = T ? c : l;
                for (let t = 0; t < C; t++) {
                  let r = Math.floor(e * (Math.random() - .5) * 30);
                  p.drawImage(v, 0, t, k, 1, r, t, k, 1)
                }
                a = window.requestAnimationFrame(P)
              };
            P();
            let U = (e, t) => e >= A && e <= F && t >= 0 && t <= $,
              E = e => {
                if (!n) return;
                let t = f.getBoundingClientRect();
                T = U(e.clientX - t.left, e.clientY - t.top)
              },
              z = () => {
                T = !1
              },
              B = e => {
                if (!n) return;
                e.preventDefault();
                let t = f.getBoundingClientRect(),
                  r = e.touches[0];
                T = U(r.clientX - t.left, r.clientY - t.top)
              },
              I = () => {
                T = !1
              };
            n && (f.addEventListener("mousemove", E), f.addEventListener("mouseleave", z), f.addEventListener("touchmove", B, {
              passive: !1
            }), f.addEventListener("touchend", I)), f.cleanupFuzzyText = () => {
              window.cancelAnimationFrame(a), n && (f.removeEventListener("mousemove", E), f.removeEventListener("mouseleave", z), f.removeEventListener("touchmove", B), f.removeEventListener("touchend", I))
            }
          })(), () => {
            m = !0, window.cancelAnimationFrame(a), f && f.cleanupFuzzyText && f.cleanupFuzzyText()
          }
        }, [e, t, r, o, i, n, l, c]), (0, a.jsx)("canvas", {
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
        shuffleDirection: a = "right",
        duration: o = .35,
        maxDelay: d = 0,
        ease: u = "power3.out",
        threshold: m = .1,
        rootMargin: f = "-100px",
        tag: p = "p",
        textAlign: h = "center",
        onShuffleComplete: g,
        shuffleTimes: x = 1,
        animationMode: v = "evenodd",
        loop: y = !1,
        loopDelay: b = 0,
        stagger: j = .03,
        scrambleCharset: _ = "",
        colorFrom: w,
        colorTo: S,
        triggerOnce: N = !0,
        respectReducedMotion: C = !0,
        triggerOnHover: k = !0
      }) => {
        let A = (0, s.useRef)(null),
          [F, $] = (0, s.useState)(!1),
          [T, P] = (0, s.useState)(!1),
          U = (0, s.useRef)(null),
          E = (0, s.useRef)([]),
          z = (0, s.useRef)(null),
          B = (0, s.useRef)(!1),
          I = (0, s.useRef)(null);
        (0, s.useEffect)(() => {
          "fonts" in document ? "loaded" === document.fonts.status ? $(!0) : document.fonts.ready.then(() => $(!0)) : $(!0)
        }, []), (0, c.L)(() => {
          if (!A.current || !e || !F) return;
          if (C && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return void g?.();
          let t = A.current,
            r = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(f || ""),
            s = r ? parseFloat(r[1]) : 0,
            c = r && r[2] || "px",
            p = 0 === s ? "" : s < 0 ? `-=${Math.abs(s)}${c}` : `+=${s}${c}`,
            h = `top ${(1-m)*100}%${p}`,
            $ = () => {
              I.current && A.current && (A.current.removeEventListener("mouseenter", I.current), I.current = null)
            },
            T = () => {
              z.current && (z.current.kill(), z.current = null), E.current.length && (E.current.forEach(e => {
                let t = e.firstElementChild,
                  r = t?.querySelector('[data-orig="1"]');
                r && e.parentNode && e.parentNode.replaceChild(r, e)
              }), E.current = []);
              try {
                U.current?.revert()
              } catch {}
              U.current = null, B.current = !1
            },
            M = () => {
              T(), U.current = new l.A(t, {
                type: "chars",
                charsClass: "shuffle-char",
                wordsClass: "shuffle-word",
                linesClass: "shuffle-line",
                smartWrap: !0,
                reduceWhiteSpace: !1
              });
              let e = U.current.chars || [];
              E.current = [];
              let r = Math.max(1, Math.floor(x)),
                s = e => e.charAt(Math.floor(Math.random() * e.length)) || "";
              e.forEach(e => {
                let t = e.parentElement;
                if (!t) return;
                var o = e.getBoundingClientRect().width;
                if (!(o += Math.floor((parseFloat(getComputedStyle(e).fontSize) - 20) / 2))) return;
                let n = document.createElement("span");
                Object.assign(n.style, {
                  display: "inline-block",
                  overflow: "hidden",
                  width: o + "px",
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
                  width: o + "px",
                  textAlign: "center"
                }), e.setAttribute("data-orig", "1"), Object.assign(e.style, {
                  display: "inline-block",
                  width: o + "px",
                  textAlign: "center"
                }), l.appendChild(c);
                for (let t = 0; t < r; t++) {
                  let t = e.cloneNode(!0);
                  _ && (t.textContent = s(_)), Object.assign(t.style, {
                    display: "inline-block",
                    width: o + "px",
                    textAlign: "center"
                  }), l.appendChild(t)
                }
                l.appendChild(e);
                let d = r + 1,
                  u = 0,
                  m = -d * o;
                if ("right" === a) {
                  let e = l.firstElementChild,
                    t = l.lastElementChild;
                  t && l.insertBefore(t, l.firstChild), e && l.appendChild(e), u = -d * o, m = 0
                }
                i.os.set(l, {
                  x: u,
                  force3D: !0
                }), w && (l.style.color = w), l.setAttribute("data-final-x", String(m)), l.setAttribute("data-start-x", String(u)), E.current.push(n)
              })
            },
            L = () => {
              _ && E.current.forEach(e => {
                let t = e.firstElementChild;
                if (!t) return;
                let r = Array.from(t.children);
                for (let e = 1; e < r.length - 1; e++) r[e].textContent = _.charAt(Math.floor(Math.random() * _.length))
              })
            },
            D = () => {
              let e = E.current.map(e => e.firstElementChild);
              if (!e.length) return;
              B.current = !0;
              let t = i.os.timeline({
                  smoothChildTiming: !0,
                  repeat: y ? -1 : 0,
                  repeatDelay: y ? b : 0,
                  onRepeat: () => {
                    _ && L(), i.os.set(e, {
                      x: (e, t) => parseFloat(t.getAttribute("data-start-x") || "0")
                    }), g?.()
                  },
                  onComplete: () => {
                    B.current = !1, y || (E.current.forEach(e => {
                      let t = e.firstElementChild;
                      if (!t) return;
                      let r = t.querySelector('[data-orig="1"]');
                      r && (t.replaceChildren(r), t.style.transform = "none", t.style.willChange = "auto")
                    }), S && i.os.set(e, {
                      color: S
                    }), g?.(), W())
                  }
                }),
                r = (e, r) => {
                  t.to(e, {
                    x: (e, t) => parseFloat(t.getAttribute("data-final-x") || "0"),
                    duration: o,
                    ease: u,
                    force3D: !0,
                    stagger: "evenodd" === v ? j : 0
                  }, r), w && S && t.to(e, {
                    color: S,
                    duration: o,
                    ease: u
                  }, r)
                };
              if ("evenodd" === v) {
                let t = e.filter((e, t) => t % 2 == 1),
                  a = e.filter((e, t) => t % 2 == 0),
                  s = o + Math.max(0, t.length - 1) * j,
                  i = t.length ? .7 * s : 0;
                t.length && r(t, 0), a.length && r(a, i)
              } else e.forEach(e => {
                let r = Math.random() * d;
                t.to(e, {
                  x: parseFloat(e.getAttribute("data-final-x") || "0"),
                  duration: o,
                  ease: u,
                  force3D: !0
                }, r), w && S && t.fromTo(e, {
                  color: w
                }, {
                  color: S,
                  duration: o,
                  ease: u
                }, r)
              });
              z.current = t
            },
            W = () => {
              if (!k || !A.current) return;
              $();
              let e = () => {
                B.current || (M(), _ && L(), D())
              };
              I.current = e, A.current.addEventListener("mouseenter", e)
            },
            R = n.u.create({
              trigger: t,
              start: h,
              once: N,
              onEnter: () => {
                M(), _ && L(), D(), W(), P(!0)
              }
            });
          return () => {
            R.kill(), $(), T(), P(!1)
          }
        }, {
          dependencies: [e, o, d, u, m, f, F, a, x, v, y, b, j, _, w, S, N, C, k],
          scope: A
        });
        let M = {
            textAlign: h,
            ...r
          },
          L = `shuffle-parent ${T?"is-ready":""} ${t}`;
        return s.createElement(p || "p", {
          ref: A,
          className: L,
          style: M
        }, e)
      };

      function u({
        username: e,
        usernameEffect: t,
        textColor: r,
        fontSize: s,
        marginBottom: i
      }) {
        return (0, a.jsx)(a.Fragment, {
          children: "fuzzy" === t ? (0, a.jsx)(o, {
            baseIntensity: .15,
            enableHover: !1,
            color: r,
            fontSize: s || "25px",
            marginBottom: i,
            children: e
          }) : "shuffle" === t && (0, a.jsx)(d, {
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
        userInformation: "GUNS__57-c12fccd9-3488c534-0a01443d",
        avatar: "GUNS__bc-b037f226-4c8a0b03-ded38864",
        userDescription: "GUNS__de-fbf4b626-483ff799-fceaf9a2",
        userDescriptionUsername: "GUNS__23-fe6fb6eb-31ca6bbc-d0ffa62c",
        userDescriptionText: "GUNS__75-c400ab93-21112063-78dac97f",
        usernameCursor: "GUNS__cb-2a5fa4af-ea9d31e0-31de7bdb",
        badgeContainerWrapper: "GUNS__9e-35c1a1d5-dab8c907-5fd2e2c7",
        banner: "GUNS__06-91018b04-486e3614-b4c4b411",
        adjustBanner: "GUNS__ca-c821543d-0fad07ea-9d85efa6",
        socialsWrapper: "GUNS__56-acb6b997-e8798c63-db22b3f0"
      }
    },
    64944: e => {
      e.exports = {
        userInformation: "GUNS__9f-8396021a-805886d8-29713a45",
        usernameWrapper: "GUNS__fb-92724b84-219a1efd-fe77ee7b",
        avatar: "GUNS__e7-34b45806-7f2941c7-b256a4be",
        userDescriptionUsername: "GUNS__25-dc8a4805-a493a34f-16defd34",
        userDescriptionText: "GUNS__92-49ba7775-3b35063a-5d503469",
        usernameCursor: "GUNS__80-66bef5fd-6a5a1482-54b0562a",
        userDescription: "GUNS__b5-72772e19-c0ab7504-37751a09",
        topRightWrapper: "GUNS__4a-b11da200-4cb18dbe-e52bd320",
        topRightDivider: "GUNS__07-850e85b3-5cfd863f-515e963a",
        socialsWrapper: "GUNS__25-9d1373ac-48e52581-75d99041",
        discordPresenceWidget: "GUNS__94-1fcf4741-8dc5da1c-b3f8ab72",
        discordAvatar: "GUNS__46-4a45097c-22cdcf41-e024ee2c",
        discordStatus: "GUNS__c8-ce842370-f39f8270-2da933c4",
        discordStatusIcon: "GUNS__d9-b4689849-01634695-4b0c054c",
        discordUserInformation: "GUNS__cd-cf93f8cd-b09266a4-fe8101f5",
        discordActivity: "GUNS__37-f1bf1b57-60b612b1-98e1c04d",
        discordActivityTextStack: "GUNS__04-5663d44d-86332b62-4ce54114",
        discordActivityImageStack: "GUNS__4b-382b24a5-4c55d9a0-76ac830f",
        discordActivityTextLayer: "GUNS__98-8530d546-b82dfa1f-4ac8a83d",
        discordActivityImageLayer: "GUNS__23-b2151148-efc8b271-610fc899",
        discordActivityEnter: "GUNS__b0-772e24b8-97592c3c-d4551616",
        discordActivityFadeIn: "GUNS__1f-eb2f7ff5-85fca052-433d0125",
        discordActivityExit: "GUNS__32-0b460efa-045ffbdf-81b551ce",
        discordActivityFadeOut: "GUNS__b6-4caf3747-d296f8e9-f815834b",
        discordUser: "GUNS__0a-e5be9e53-1f0c9778-15d0563c",
        discordUserDiv: "GUNS__ff-9ae899fc-e7630063-e0b53e71",
        discordUserBadges: "GUNS__c3-36ba504d-566e2ed0-758325f3",
        highlight: "GUNS__4c-fdf70afd-2b937c2f-6594e0bf",
        activityImage: "GUNS__67-ad447732-bb674b0e-2683cbff",
        discordBadge: "GUNS__81-1e2e5216-5ab27b56-00059841",
        userProfileSvg: "GUNS__2b-66aed959-29bb8af5-4ea2aea4",
        discordNotConnected: "GUNS__93-82695686-a7535ef2-5c7a5988",
        offlineText: "GUNS__32-2a8f753e-851d693c-c2015a17",
        avatarWrapper: "GUNS__da-c5ffcf81-64e21380-8ed3ddea",
        discordEmoji: "GUNS__83-175054bf-b777e890-2e1b9fa1",
        discordEmojiText: "GUNS__25-6099c86c-663e5cd3-13255d70",
        defaultEmoji: "GUNS__e0-85659874-88ba1b9a-6ac6fe75",
        discordLoading: "GUNS__70-7338906a-a9a0932c-ed4f152b",
        guildTag: "GUNS__6b-803f0b11-5d4ab606-7374015f"
      }
    },
    77599: (e, t, r) => {
      "use strict";
      r.d(t, {
        Nl: () => o,
        RU: () => s
      });
      let a = [{
        id: "python",
        name: "Python",
        color: "#3776AB",
        aliases: ["py", "python3"]
      }, {
        id: "javascript",
        name: "JavaScript",
        color: "#F7DF1E",
        aliases: ["js", "es6", "es2015"]
      }, {
        id: "typescript",
        name: "TypeScript",
        color: "#3178C6",
        aliases: ["ts"]
      }, {
        id: "rust",
        name: "Rust",
        color: "#CE422B",
        aliases: ["rs"]
      }, {
        id: "go",
        name: "Go",
        color: "#00ADD8",
        aliases: ["golang"]
      }, {
        id: "java",
        name: "Java",
        color: "#ED8B00"
      }, {
        id: "kotlin",
        name: "Kotlin",
        color: "#7F52FF",
        aliases: ["kt"]
      }, {
        id: "swift",
        name: "Swift",
        color: "#FA7343"
      }, {
        id: "csharp",
        name: "C#",
        color: "#239120",
        aliases: ["cs", "dotnet", "c#"]
      }, {
        id: "cpp",
        name: "C++",
        color: "#00599C",
        aliases: ["c++", "cplusplus"]
      }, {
        id: "c",
        name: "C",
        color: "#A8B9CC"
      }, {
        id: "ruby",
        name: "Ruby",
        color: "#CC342D",
        aliases: ["rb"]
      }, {
        id: "php",
        name: "PHP",
        color: "#777BB4"
      }, {
        id: "elixir",
        name: "Elixir",
        color: "#6E4A7E",
        aliases: ["ex"]
      }, {
        id: "haskell",
        name: "Haskell",
        color: "#5D4F85",
        aliases: ["hs"]
      }, {
        id: "scala",
        name: "Scala",
        color: "#DC322F"
      }, {
        id: "dart",
        name: "Dart",
        color: "#0175C2"
      }, {
        id: "lua",
        name: "Lua",
        color: "#2C2D72"
      }, {
        id: "r",
        name: "R",
        color: "#276DC3"
      }, {
        id: "julia",
        name: "Julia",
        color: "#9558B2"
      }, {
        id: "clojure",
        name: "Clojure",
        color: "#5881D8"
      }, {
        id: "zig",
        name: "Zig",
        color: "#F7A41D"
      }, {
        id: "react",
        name: "React",
        color: "#61DAFB",
        aliases: ["reactjs", "react.js"]
      }, {
        id: "nextjs",
        name: "Next.js",
        color: "#FFFFFF",
        aliases: ["next", "nextjs"]
      }, {
        id: "vue",
        name: "Vue.js",
        color: "#4FC08D",
        aliases: ["vuejs", "vue3"]
      }, {
        id: "nuxt",
        name: "Nuxt.js",
        color: "#00C58E",
        aliases: ["nuxtjs"]
      }, {
        id: "svelte",
        name: "Svelte",
        color: "#FF3E00"
      }, {
        id: "angular",
        name: "Angular",
        color: "#DD0031"
      }, {
        id: "solid",
        name: "SolidJS",
        color: "#2C4F7C",
        aliases: ["solid.js", "solidjs"]
      }, {
        id: "remix",
        name: "Remix",
        color: "#FFFFFF"
      }, {
        id: "astro",
        name: "Astro",
        color: "#FF5D01"
      }, {
        id: "qwik",
        name: "Qwik",
        color: "#18B6F6"
      }, {
        id: "htmx",
        name: "htmx",
        color: "#3465A4"
      }, {
        id: "nodejs",
        name: "Node.js",
        color: "#5FA04E",
        aliases: ["node", "nodejs"]
      }, {
        id: "express",
        name: "Express",
        color: "#FFFFFF",
        aliases: ["expressjs"]
      }, {
        id: "fastapi",
        name: "FastAPI",
        color: "#009688"
      }, {
        id: "django",
        name: "Django",
        color: "#092E20"
      }, {
        id: "flask",
        name: "Flask",
        color: "#FFFFFF"
      }, {
        id: "rails",
        name: "Rails",
        color: "#CC0000",
        aliases: ["ruby on rails", "ror"]
      }, {
        id: "laravel",
        name: "Laravel",
        color: "#FF2D20"
      }, {
        id: "nestjs",
        name: "NestJS",
        color: "#E0234E",
        aliases: ["nest"]
      }, {
        id: "hono",
        name: "Hono",
        color: "#E36002"
      }, {
        id: "bun",
        name: "Bun",
        color: "#FBF0DF"
      }, {
        id: "deno",
        name: "Deno",
        color: "#FFFFFF"
      }, {
        id: "spring",
        name: "Spring",
        color: "#6DB33F",
        aliases: ["spring boot"]
      }, {
        id: "actix",
        name: "Actix",
        color: "#CE422B"
      }, {
        id: "gin",
        name: "Gin",
        color: "#00ADD8"
      }, {
        id: "postgresql",
        name: "PostgreSQL",
        color: "#4169E1",
        aliases: ["postgres", "pg"]
      }, {
        id: "mysql",
        name: "MySQL",
        color: "#4479A1"
      }, {
        id: "mongodb",
        name: "MongoDB",
        color: "#47A248",
        aliases: ["mongo"]
      }, {
        id: "redis",
        name: "Redis",
        color: "#FF4438"
      }, {
        id: "sqlite",
        name: "SQLite",
        color: "#003B57"
      }, {
        id: "supabase",
        name: "Supabase",
        color: "#3ECF8E"
      }, {
        id: "firebase",
        name: "Firebase",
        color: "#FFCA28"
      }, {
        id: "planetscale",
        name: "PlanetScale",
        color: "#FFFFFF"
      }, {
        id: "turso",
        name: "Turso",
        color: "#4FF8D2"
      }, {
        id: "cassandra",
        name: "Cassandra",
        color: "#1287B1"
      }, {
        id: "clickhouse",
        name: "ClickHouse",
        color: "#FFCC02"
      }, {
        id: "docker",
        name: "Docker",
        color: "#2496ED"
      }, {
        id: "kubernetes",
        name: "Kubernetes",
        color: "#326CE5",
        aliases: ["k8s"]
      }, {
        id: "aws",
        name: "AWS",
        color: "#FF9900",
        aliases: ["amazon web services"]
      }, {
        id: "gcp",
        name: "GCP",
        color: "#4285F4",
        aliases: ["google cloud"]
      }, {
        id: "azure",
        name: "Azure",
        color: "#0078D4"
      }, {
        id: "vercel",
        name: "Vercel",
        color: "#FFFFFF"
      }, {
        id: "cloudflare",
        name: "Cloudflare",
        color: "#F38020"
      }, {
        id: "terraform",
        name: "Terraform",
        color: "#844FBA"
      }, {
        id: "github-actions",
        name: "GitHub Actions",
        color: "#2088FF",
        aliases: ["gha", "github actions"]
      }, {
        id: "linux",
        name: "Linux",
        color: "#FCC624"
      }, {
        id: "tailwind",
        name: "Tailwind CSS",
        color: "#38BDF8",
        aliases: ["tailwindcss", "tailwind css"]
      }, {
        id: "css",
        name: "CSS",
        color: "#1572B6"
      }, {
        id: "sass",
        name: "Sass",
        color: "#CC6699",
        aliases: ["scss"]
      }, {
        id: "shadcn",
        name: "shadcn/ui",
        color: "#FFFFFF",
        aliases: ["shadcn", "shadcn ui"]
      }, {
        id: "framer-motion",
        name: "Framer Motion",
        color: "#0055FF",
        aliases: ["framer"]
      }, {
        id: "three",
        name: "Three.js",
        color: "#FFFFFF",
        aliases: ["threejs", "three.js", "webgl"]
      }, {
        id: "pytorch",
        name: "PyTorch",
        color: "#EE4C2C"
      }, {
        id: "tensorflow",
        name: "TensorFlow",
        color: "#FF6F00",
        aliases: ["tf"]
      }, {
        id: "langchain",
        name: "LangChain",
        color: "#1C3C3C"
      }, {
        id: "openai",
        name: "OpenAI",
        color: "#FFFFFF"
      }, {
        id: "pandas",
        name: "Pandas",
        color: "#150458"
      }, {
        id: "numpy",
        name: "NumPy",
        color: "#4DABCF"
      }, {
        id: "graphql",
        name: "GraphQL",
        color: "#E10098"
      }, {
        id: "grpc",
        name: "gRPC",
        color: "#244C5A"
      }, {
        id: "trpc",
        name: "tRPC",
        color: "#2596BE"
      }, {
        id: "prisma",
        name: "Prisma",
        color: "#5A67D8"
      }, {
        id: "drizzle",
        name: "Drizzle ORM",
        color: "#C5F74F",
        aliases: ["drizzle"]
      }, {
        id: "git",
        name: "Git",
        color: "#F05032"
      }, {
        id: "figma",
        name: "Figma",
        color: "#F24E1E"
      }, {
        id: "blender",
        name: "Blender",
        color: "#F5792A"
      }, {
        id: "unity",
        name: "Unity",
        color: "#FFFFFF"
      }, {
        id: "unreal",
        name: "Unreal Engine",
        color: "#313131",
        aliases: ["ue5", "unreal engine"]
      }, {
        id: "flutter",
        name: "Flutter",
        color: "#02569B"
      }, {
        id: "react-native",
        name: "React Native",
        color: "#61DAFB",
        aliases: ["rn", "react native"]
      }, {
        id: "tauri",
        name: "Tauri",
        color: "#24C8DB"
      }, {
        id: "electron",
        name: "Electron",
        color: "#47848F"
      }, {
        id: "wasm",
        name: "WebAssembly",
        color: "#654FF0",
        aliases: ["webassembly"]
      }, {
        id: "kafka",
        name: "Kafka",
        color: "#231F20"
      }, {
        id: "rabbitmq",
        name: "RabbitMQ",
        color: "#FF6600"
      }, {
        id: "nginx",
        name: "Nginx",
        color: "#009639"
      }, {
        id: "neovim",
        name: "Neovim",
        color: "#57A143",
        aliases: ["nvim", "vim"]
      }];

      function s(e) {
        let t = e.trim().toLowerCase();
        return a.find(e => e.name.toLowerCase() === t || e.id === t || e.aliases?.some(e => e.toLowerCase() === t))
      }

      function o(e, t = 8) {
        if (!e.trim()) return [];
        let r = e.trim().toLowerCase(),
          s = a.map(e => e.name.toLowerCase() === r || e.id === r ? {
            s: e,
            score: 3
          } : e.name.toLowerCase().startsWith(r) || e.id.startsWith(r) ? {
            s: e,
            score: 2
          } : e.aliases?.some(e => e.toLowerCase().startsWith(r)) ? {
            s: e,
            score: 1.5
          } : e.name.toLowerCase().includes(r) || e.aliases?.some(e => e.toLowerCase().includes(r)) ? {
            s: e,
            score: 1
          } : {
            s: e,
            score: 0
          }).filter(e => e.score > 0);
        return s.sort((e, t) => t.score - e.score), s.slice(0, t).map(e => e.s)
      }
    },
    78881: () => {},
    82413: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => o,
        k: () => s
      });
      var a = r(12115);
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

      function o({
        font: e,
        letterSpacing: t
      }) {
        let r = {
          1: "-0.5px",
          2: null,
          3: "1.5px"
        };
        return (0, a.useEffect)(() => {
          let a = document.head;
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
                `, a.appendChild(s);
              let o = t ? r[t] : null;
              o && (document.body.style.letterSpacing = o)
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
            t.href && a.appendChild(t);
            let r = document.createElement("style");
            return r.dataset.font = e, r.innerHTML = `
                body, * {
                    font-family: ${s[e]||"sans-serif"} !important;
                }
            `, a.appendChild(r), () => {
              t.parentNode && a.removeChild(t), r.parentNode && a.removeChild(r)
            }
          }
        }, [e]), null
      }
    },
    96173: () => {}
  }
]);