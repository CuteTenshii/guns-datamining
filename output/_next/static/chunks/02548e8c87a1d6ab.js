(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 469, e => {
  "use strict";

  function t(e) {
    return null !== e && "object" == typeof e && "function" == typeof e.start
  }
  e.s(["isAnimationControls", () => t])
}, 27566, e => {
  "use strict";
  let t = e => Array.isArray(e);
  e.s(["isKeyframesTarget", () => t])
}, 82381, e => {
  "use strict";

  function t(e) {
    return "string" == typeof e || Array.isArray(e)
  }
  e.s(["isVariantLabel", () => t])
}, 58237, 432, e => {
  "use strict";

  function t(e) {
    let t = [{}, {}];
    return null == e || e.values.forEach((e, i) => {
      t[0][i] = e.get(), t[1][i] = e.getVelocity()
    }), t
  }

  function i(e, i, s, r) {
    if ("function" == typeof i) {
      let [n, a] = t(r);
      i = i(void 0 !== s ? s : e.custom, n, a)
    }
    if ("string" == typeof i && (i = e.variants && e.variants[i]), "function" == typeof i) {
      let [n, a] = t(r);
      i = i(void 0 !== s ? s : e.custom, n, a)
    }
    return i
  }

  function s(e, t, s) {
    let r = e.getProps();
    return i(r, t, void 0 !== s ? s : r.custom, e)
  }
  e.s(["resolveVariantFromProps", () => i], 432), e.s(["resolveVariant", () => s], 58237)
}, 10288, e => {
  "use strict";
  let t = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    i = ["initial", ...t];
  e.s(["variantPriorityOrder", () => t, "variantProps", () => i])
}, 11889, 48027, 42896, 73714, 13890, 74040, 87514, 2975, 20448, 93248, 44758, 52360, 46138, 7989, 16202, 83782, 416, 69851, 71741, 68484, 90282, 87652, e => {
  "use strict";
  let t;
  e.i(39057);
  let i = e => e;

  function s(e) {
    let t;
    return () => (void 0 === t && (t = e()), t)
  }
  e.s(["noop", () => i], 48027), e.s(["invariant", () => i, "warning", () => i], 42896), e.s(["memo", () => s], 73714);
  let r = (e, t, i) => {
    let s = t - e;
    return 0 === s ? 1 : (i - e) / s
  };
  e.s(["progress", () => r], 13890);
  let n = e => 1e3 * e,
    a = e => e / 1e3;
  e.s(["millisecondsToSeconds", () => a, "secondsToMilliseconds", () => n], 74040), e.s([], 87514);
  let o = s(() => void 0 !== window.ScrollTimeline);
  class l {
    constructor(e) {
      this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean)
    }
    get finished() {
      return Promise.all(this.animations.map(e => "finished" in e ? e.finished : e))
    }
    getAll(e) {
      return this.animations[0][e]
    }
    setAll(e, t) {
      for (let i = 0; i < this.animations.length; i++) this.animations[i][e] = t
    }
    attachTimeline(e, t) {
      let i = this.animations.map(i => o() && i.attachTimeline ? i.attachTimeline(e) : "function" == typeof t ? t(i) : void 0);
      return () => {
        i.forEach((e, t) => {
          e && e(), this.animations[t].stop()
        })
      }
    }
    get time() {
      return this.getAll("time")
    }
    set time(e) {
      this.setAll("time", e)
    }
    get speed() {
      return this.getAll("speed")
    }
    set speed(e) {
      this.setAll("speed", e)
    }
    get startTime() {
      return this.getAll("startTime")
    }
    get duration() {
      let e = 0;
      for (let t = 0; t < this.animations.length; t++) e = Math.max(e, this.animations[t].duration);
      return e
    }
    runAll(e) {
      this.animations.forEach(t => t[e]())
    }
    flatten() {
      this.runAll("flatten")
    }
    play() {
      this.runAll("play")
    }
    pause() {
      this.runAll("pause")
    }
    cancel() {
      this.runAll("cancel")
    }
    complete() {
      this.runAll("complete")
    }
  }
  class u extends l {
    then(e, t) {
      return Promise.all(this.animations).then(e).catch(t)
    }
  }

  function h(e, t) {
    return e ? e[t] || e.default || e : void 0
  }

  function c(e) {
    let t = 0,
      i = e.next(t);
    for (; !i.done && t < 2e4;) t += 50, i = e.next(t);
    return t >= 2e4 ? 1 / 0 : t
  }

  function d(e, t = 100, i) {
    let s = i({
        ...e,
        keyframes: [0, t]
      }),
      r = Math.min(c(s), 2e4);
    return {
      type: "keyframes",
      ease: e => s.next(r * e).value / t,
      duration: a(r)
    }
  }

  function p(e) {
    return "function" == typeof e
  }

  function m(e, t) {
    e.timeline = t, e.onfinish = null
  }
  e.s(["GroupPlaybackControls", () => u], 2975), e.s(["getValueTransition", () => h], 20448), e.s(["calcGeneratorDuration", () => c, "maxGeneratorDuration", () => 2e4], 93248), e.s(["createGeneratorEasing", () => d], 44758), e.s(["isGenerator", () => p], 52360), e.s(["attachTimeline", () => m], 46138);
  let f = e => Array.isArray(e) && "number" == typeof e[0];
  e.s(["isBezierDefinition", () => f], 7989);
  let v, g = (t = s(() => {
    try {
      document.createElement("div").animate({
        opacity: 0
      }, {
        easing: "linear(0, 1)"
      })
    } catch (e) {
      return !1
    }
    return !0
  }), () => {
    var e;
    return null != (e = v) ? e : t()
  });
  e.s(["supportsLinearEasing", () => g], 16202);
  let y = (e, t, i = 10) => {
    let s = "",
      n = Math.max(Math.round(t / i), 2);
    for (let t = 0; t < n; t++) s += e(r(0, n - 1, t)) + ", ";
    return `linear(${s.substring(0,s.length-2)})`
  };

  function b(e) {
    return !!("function" == typeof e && g() || !e || "string" == typeof e && (e in V || g()) || f(e) || Array.isArray(e) && e.every(b))
  }
  e.s(["generateLinearEasing", () => y], 83782);
  let T = ([e, t, i, s]) => `cubic-bezier(${e}, ${t}, ${i}, ${s})`,
    V = {
      linear: "linear",
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
      circIn: T([0, .65, .55, 1]),
      circOut: T([.55, 0, 1, .45]),
      backIn: T([.31, .01, .66, -.59]),
      backOut: T([.33, 1.53, .69, .99])
    };
  e.s(["isWaapiSupportedEasing", () => b, "mapEasingToNativeEasing", () => function e(t, i) {
    if (t) return "function" == typeof t && g() ? y(t, i) : f(t) ? T(t) : Array.isArray(t) ? t.map(t => e(t, i) || V.easeOut) : V[t]
  }], 416);
  let w = {
    x: !1,
    y: !1
  };

  function S(e, t, i) {
    var s;
    if (e instanceof Element) return [e];
    if ("string" == typeof e) {
      let r = document;
      t && (r = t.current);
      let n = null != (s = null == i ? void 0 : i[e]) ? s : r.querySelectorAll(e);
      return n ? Array.from(n) : []
    }
    return Array.from(e)
  }

  function x(e, t) {
    let i = S(e),
      s = new AbortController;
    return [i, {
      passive: !0,
      ...t,
      signal: s.signal
    }, () => s.abort()]
  }

  function M(e) {
    return t => {
      "touch" === t.pointerType || w.x || w.y || e(t)
    }
  }

  function A(e, t, i = {}) {
    let [s, r, n] = x(e, i), a = M(e => {
      let {
        target: i
      } = e, s = t(e);
      if ("function" != typeof s || !i) return;
      let n = M(e => {
        s(e), i.removeEventListener("pointerleave", n)
      });
      i.addEventListener("pointerleave", n, r)
    });
    return s.forEach(e => {
      e.addEventListener("pointerenter", a, r)
    }), n
  }
  e.s(["resolveElements", () => S], 69851), e.s(["hover", () => A], 71741);
  let P = (e, t) => !!t && (e === t || P(e, t.parentElement)),
    k = e => "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary;
  e.s(["isPrimaryPointer", () => k], 68484);
  let C = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
    F = new WeakSet;

  function E(e) {
    return t => {
      "Enter" === t.key && e(t)
    }
  }

  function O(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t, {
      isPrimary: !0,
      bubbles: !0
    }))
  }

  function I(e) {
    return k(e) && !(w.x || w.y)
  }

  function D(e, t, i = {}) {
    let [s, r, n] = x(e, i), a = e => {
      let s = e.currentTarget;
      if (!I(e) || F.has(s)) return;
      F.add(s);
      let n = t(e),
        a = (e, t) => {
          window.removeEventListener("pointerup", o), window.removeEventListener("pointercancel", l), I(e) && F.has(s) && (F.delete(s), "function" == typeof n && n(e, {
            success: t
          }))
        },
        o = e => {
          a(e, i.useGlobalTarget || P(s, e.target))
        },
        l = e => {
          a(e, !1)
        };
      window.addEventListener("pointerup", o, r), window.addEventListener("pointercancel", l, r)
    };
    return s.forEach(e => {
      C.has(e.tagName) || -1 !== e.tabIndex || null !== e.getAttribute("tabindex") || (e.tabIndex = 0), (i.useGlobalTarget ? window : e).addEventListener("pointerdown", a, r), e.addEventListener("focus", e => ((e, t) => {
        let i = e.currentTarget;
        if (!i) return;
        let s = E(() => {
          if (F.has(i)) return;
          O(i, "down");
          let e = E(() => {
            O(i, "up")
          });
          i.addEventListener("keyup", e, t), i.addEventListener("blur", () => O(i, "cancel"), t)
        });
        i.addEventListener("keydown", s, t), i.addEventListener("blur", () => i.removeEventListener("keydown", s), t)
      })(e, r), r)
    }), n
  }

  function R(e) {
    if ("x" === e || "y" === e)
      if (w[e]) return null;
      else return w[e] = !0, () => {
        w[e] = !1
      };
    return w.x || w.y ? null : (w.x = w.y = !0, () => {
      w.x = w.y = !1
    })
  }
  e.s(["press", () => D], 90282), e.s(["setDragLock", () => R], 87652), e.s([], 11889)
}, 3099, 63667, e => {
  "use strict";
  let t = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    i = new Set(t);
  e.s(["transformPropOrder", () => t, "transformProps", () => i], 63667);
  let s = new Set(["width", "height", "top", "left", "right", "bottom", ...t]);
  e.s(["positionalKeys", () => s], 3099)
}, 7505, 49406, 47476, 4399, 97404, e => {
  "use strict";
  let t;
  var i = e.i(27566);
  let s = e => !!(e && "object" == typeof e && e.mix && e.toValue),
    r = e => (0, i.isKeyframesTarget)(e) ? e[e.length - 1] || 0 : e;
  e.s(["isCustomValue", () => s, "resolveFinalValueInKeyframes", () => r], 7505);
  let n = {
    skipAnimations: !1,
    useManualTiming: !1
  };
  e.s(["MotionGlobalConfig", () => n], 49406), e.i(87514);
  var a = e.i(48027);
  let o = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];

  function l(e, t) {
    let i = !1,
      s = !0,
      r = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
      },
      a = () => i = !0,
      l = o.reduce((e, t) => (e[t] = function(e) {
        let t = new Set,
          i = new Set,
          s = !1,
          r = !1,
          n = new WeakSet,
          a = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
          };

        function o(t) {
          n.has(t) && (l.schedule(t), e()), t(a)
        }
        let l = {
          schedule: (e, r = !1, a = !1) => {
            let o = a && s ? t : i;
            return r && n.add(e), o.has(e) || o.add(e), e
          },
          cancel: e => {
            i.delete(e), n.delete(e)
          },
          process: e => {
            if (a = e, s) {
              r = !0;
              return
            }
            s = !0, [t, i] = [i, t], t.forEach(o), t.clear(), s = !1, r && (r = !1, l.process(e))
          }
        };
        return l
      }(a), e), {}),
      {
        read: u,
        resolveKeyframes: h,
        update: c,
        preRender: d,
        render: p,
        postRender: m
      } = l,
      f = () => {
        let a = n.useManualTiming ? r.timestamp : performance.now();
        i = !1, r.delta = s ? 1e3 / 60 : Math.max(Math.min(a - r.timestamp, 40), 1), r.timestamp = a, r.isProcessing = !0, u.process(r), h.process(r), c.process(r), d.process(r), p.process(r), m.process(r), r.isProcessing = !1, i && t && (s = !1, e(f))
      };
    return {
      schedule: o.reduce((t, n) => {
        let a = l[n];
        return t[n] = (t, n = !1, o = !1) => (!i && (i = !0, s = !0, r.isProcessing || e(f)), a.schedule(t, n, o)), t
      }, {}),
      cancel: e => {
        for (let t = 0; t < o.length; t++) l[o[t]].cancel(e)
      },
      state: r,
      steps: l
    }
  }
  e.s(["createRenderBatcher", () => l], 47476);
  let {
    schedule: u,
    cancel: h,
    state: c,
    steps: d
  } = l("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : a.noop, !0);

  function p() {
    t = void 0
  }
  e.s(["cancelFrame", () => h, "frame", () => u, "frameData", () => c, "frameSteps", () => d], 4399);
  let m = {
    now: () => (void 0 === t && m.set(c.isProcessing || n.useManualTiming ? c.timestamp : performance.now()), t),
    set: e => {
      t = e, queueMicrotask(p)
    }
  };
  e.s(["time", () => m], 97404)
}, 97025, e => {
  "use strict";

  function t(e, t) {
    -1 === e.indexOf(t) && e.push(t)
  }

  function i(e, t) {
    let i = e.indexOf(t);
    i > -1 && e.splice(i, 1)
  }
  e.s(["addUniqueItem", () => t, "removeItem", () => i])
}, 71185, e => {
  "use strict";
  var t = e.i(97025);
  class i {
    constructor() {
      this.subscriptions = []
    }
    add(e) {
      return (0, t.addUniqueItem)(this.subscriptions, e), () => (0, t.removeItem)(this.subscriptions, e)
    }
    notify(e, t, i) {
      let s = this.subscriptions.length;
      if (s)
        if (1 === s) this.subscriptions[0](e, t, i);
        else
          for (let r = 0; r < s; r++) {
            let s = this.subscriptions[r];
            s && s(e, t, i)
          }
    }
    getSize() {
      return this.subscriptions.length
    }
    clear() {
      this.subscriptions.length = 0
    }
  }
  e.s(["SubscriptionManager", () => i])
}, 43532, e => {
  "use strict";

  function t(e, t) {
    return t ? 1e3 / t * e : 0
  }
  e.s(["velocityPerSecond", () => t])
}, 56127, e => {
  "use strict";
  let t;
  var i = e.i(97404),
    s = e.i(71185),
    r = e.i(43532),
    n = e.i(4399);
  class a {
    constructor(e, t = {}) {
      this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e, t = !0) => {
        let s = i.time.now();
        this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), t && this.events.renderRequest && this.events.renderRequest.notify(this.current)
      }, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner
    }
    setCurrent(e) {
      this.current = e, this.updatedAt = i.time.now(), null === this.canTrackVelocity && void 0 !== e && (this.canTrackVelocity = !isNaN(parseFloat(this.current)))
    }
    setPrevFrameValue(e = this.current) {
      this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
    }
    onChange(e) {
      return this.on("change", e)
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new s.SubscriptionManager);
      let i = this.events[e].add(t);
      return "change" === e ? () => {
        i(), n.frame.read(() => {
          this.events.change.getSize() || this.stop()
        })
      } : i
    }
    clearListeners() {
      for (let e in this.events) this.events[e].clear()
    }
    attach(e, t) {
      this.passiveEffect = e, this.stopPassiveEffect = t
    }
    set(e, t = !0) {
      t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
    }
    setWithVelocity(e, t, i) {
      this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - i
    }
    jump(e, t = !0) {
      this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
      return t && t.push(this), this.current
    }
    getPrevious() {
      return this.prev
    }
    getVelocity() {
      let e = i.time.now();
      if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30) return 0;
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
      return (0, r.velocityPerSecond)(parseFloat(this.current) - parseFloat(this.prevFrameValue), t)
    }
    start(e) {
      return this.stop(), new Promise(t => {
        this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify()
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
      })
    }
    stop() {
      this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
      return !!this.animation
    }
    clearAnimation() {
      delete this.animation
    }
    destroy() {
      this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
  }

  function o(e, t) {
    return new a(e, t)
  }
  e.s(["motionValue", () => o])
}, 78558, e => {
  "use strict";
  var t = e.i(7505),
    i = e.i(56127),
    s = e.i(58237);

  function r(e, r) {
    let {
      transitionEnd: n = {},
      transition: a = {},
      ...o
    } = (0, s.resolveVariant)(e, r) || {};
    for (let s in o = {
        ...o,
        ...n
      }) {
      let r = (0, t.resolveFinalValueInKeyframes)(o[s]);
      e.hasValue(s) ? e.getValue(s).set(r) : e.addValue(s, (0, i.motionValue)(r))
    }
  }
  e.s(["setTarget", () => r])
}, 5724, e => {
  "use strict";
  let t = e => !!(e && e.getVelocity);
  e.s(["isMotionValue", () => t])
}, 36540, 48425, 60076, 20614, 5541, 27894, 24069, 19846, 12926, 44114, 58138, e => {
  "use strict";
  var t = e.i(5724);

  function i(e, i) {
    let s = e.getValue("willChange");
    if ((0, t.isMotionValue)(s) && s.add) return s.add(i)
  }
  e.s(["addValueToWillChange", () => i], 36540);
  let s = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
  e.s(["camelToDash", () => s], 48425);
  let r = "data-" + s("framerAppearId");

  function n(e) {
    return e.props[r]
  }
  e.s(["optimizedAppearDataAttribute", () => r], 60076), e.s(["getOptimisedAppearId", () => n], 20614);
  let a = {
    current: !1
  };
  e.s(["instantAnimationState", () => a], 5541), e.i(87514);
  var o = e.i(48027);
  let l = (e, t, i) => (((1 - 3 * i + 3 * t) * e + (3 * i - 6 * t)) * e + 3 * t) * e;

  function u(e, t, i, s) {
    return e === t && i === s ? o.noop : r => 0 === r || 1 === r ? r : l(function(e, t, i, s, r) {
      let n, a, o = 0;
      do(n = l(a = t + (i - t) / 2, s, r) - e) > 0 ? i = a : t = a; while (Math.abs(n) > 1e-7 && ++o < 12) return a
    }(r, 0, 1, e, i), t, s)
  }
  e.s(["cubicBezier", () => u], 27894);
  let h = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    c = e => t => 1 - e(1 - t),
    d = u(.33, 1.53, .69, .99),
    p = c(d),
    m = h(p);
  e.s(["backIn", () => p, "backInOut", () => m, "backOut", () => d], 24069);
  let f = e => (e *= 2) < 1 ? .5 * p(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)));
  e.s(["anticipate", () => f], 19846);
  let v = e => 1 - Math.sin(Math.acos(e)),
    g = c(v),
    y = h(v);
  e.s(["circIn", () => v, "circInOut", () => y, "circOut", () => g], 12926);
  let b = e => /^0[^.\s]+$/u.test(e);

  function T(e) {
    return "number" == typeof e ? 0 === e : null === e || "none" === e || "0" === e || b(e)
  }
  e.s(["isZeroValueString", () => b], 44114), e.s(["isNone", () => T], 58138)
}, 21123, e => {
  "use strict";
  let t = (e, t, i) => i > t ? t : i < e ? e : i;
  e.s(["clamp", () => t])
}, 50609, 74776, 31779, 5997, 84179, 33954, 31934, 97045, 78923, 16419, 1172, 66322, 58136, 57268, 66594, 22535, 1479, e => {
  "use strict";
  var t = e.i(58138),
    i = e.i(3099),
    s = e.i(21123);
  let r = {
      test: e => "number" == typeof e,
      parse: parseFloat,
      transform: e => e
    },
    n = {
      ...r,
      transform: e => (0, s.clamp)(0, 1, e)
    },
    a = {
      ...r,
      default: 1
    },
    o = e => Math.round(1e5 * e) / 1e5,
    l = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
    u = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    h = (e, t) => i => !!("string" == typeof i && u.test(i) && i.startsWith(e) || t && null != i && Object.prototype.hasOwnProperty.call(i, t)),
    c = (e, t, i) => s => {
      if ("string" != typeof s) return s;
      let [r, n, a, o] = s.match(l);
      return {
        [e]: parseFloat(r),
        [t]: parseFloat(n),
        [i]: parseFloat(a),
        alpha: void 0 !== o ? parseFloat(o) : 1
      }
    },
    d = {
      ...r,
      transform: e => Math.round((0, s.clamp)(0, 255, e))
    },
    p = {
      test: h("rgb", "red"),
      parse: c("red", "green", "blue"),
      transform: ({
        red: e,
        green: t,
        blue: i,
        alpha: s = 1
      }) => "rgba(" + d.transform(e) + ", " + d.transform(t) + ", " + d.transform(i) + ", " + o(n.transform(s)) + ")"
    };
  e.s(["rgba", () => p], 74776);
  let m = {
    test: h("#"),
    parse: function(e) {
      let t = "",
        i = "",
        s = "",
        r = "";
      return e.length > 5 ? (t = e.substring(1, 3), i = e.substring(3, 5), s = e.substring(5, 7), r = e.substring(7, 9)) : (t = e.substring(1, 2), i = e.substring(2, 3), s = e.substring(3, 4), r = e.substring(4, 5), t += t, i += i, s += s, r += r), {
        red: parseInt(t, 16),
        green: parseInt(i, 16),
        blue: parseInt(s, 16),
        alpha: r ? parseInt(r, 16) / 255 : 1
      }
    },
    transform: p.transform
  };
  e.s(["hex", () => m], 31779);
  let f = e => ({
      test: t => "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
      parse: parseFloat,
      transform: t => `${t}${e}`
    }),
    v = f("deg"),
    g = f("%"),
    y = f("px"),
    b = f("vh"),
    T = f("vw"),
    V = {
      ...g,
      parse: e => g.parse(e) / 100,
      transform: e => g.transform(100 * e)
    };
  e.s(["degrees", () => v, "percent", () => g, "progressPercentage", () => V, "px", () => y, "vh", () => b, "vw", () => T], 5997);
  let w = {
    test: h("hsl", "hue"),
    parse: c("hue", "saturation", "lightness"),
    transform: ({
      hue: e,
      saturation: t,
      lightness: i,
      alpha: s = 1
    }) => "hsla(" + Math.round(e) + ", " + g.transform(o(t)) + ", " + g.transform(o(i)) + ", " + o(n.transform(s)) + ")"
  };
  e.s(["hsla", () => w], 84179);
  let S = {
    test: e => p.test(e) || m.test(e) || w.test(e),
    parse: e => p.test(e) ? p.parse(e) : w.test(e) ? w.parse(e) : m.parse(e),
    transform: e => "string" == typeof e ? e : e.hasOwnProperty("red") ? p.transform(e) : w.transform(e)
  };
  e.s(["color", () => S], 33954);
  let x = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
    M = "number",
    A = "color",
    P = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

  function k(e) {
    let t = e.toString(),
      i = [],
      s = {
        color: [],
        number: [],
        var: []
      },
      r = [],
      n = 0,
      a = t.replace(P, e => (S.test(e) ? (s.color.push(n), r.push(A), i.push(S.parse(e))) : e.startsWith("var(") ? (s.var.push(n), r.push("var"), i.push(e)) : (s.number.push(n), r.push(M), i.push(parseFloat(e))), ++n, "${}")).split("${}");
    return {
      values: i,
      split: a,
      indexes: s,
      types: r
    }
  }

  function C(e) {
    return k(e).values
  }

  function F(e) {
    let {
      split: t,
      types: i
    } = k(e), s = t.length;
    return e => {
      let r = "";
      for (let n = 0; n < s; n++)
        if (r += t[n], void 0 !== e[n]) {
          let t = i[n];
          t === M ? r += o(e[n]) : t === A ? r += S.transform(e[n]) : r += e[n]
        } return r
    }
  }
  let E = e => "number" == typeof e ? 0 : e,
    O = {
      test: function(e) {
        var t, i;
        return isNaN(e) && "string" == typeof e && ((null == (t = e.match(l)) ? void 0 : t.length) || 0) + ((null == (i = e.match(x)) ? void 0 : i.length) || 0) > 0
      },
      parse: C,
      createTransformer: F,
      getAnimatableNone: function(e) {
        let t = C(e);
        return F(e)(t.map(E))
      }
    };
  e.s(["analyseComplexValue", () => k, "complex", () => O], 31934);
  let I = new Set(["brightness", "contrast", "saturate", "opacity"]);

  function D(e) {
    let [t, i] = e.slice(0, -1).split("(");
    if ("drop-shadow" === t) return e;
    let [s] = i.match(l) || [];
    if (!s) return e;
    let r = i.replace(s, ""),
      n = +!!I.has(t);
    return s !== i && (n *= 100), t + "(" + n + r + ")"
  }
  let R = /\b([a-z-]*)\(.*?\)/gu,
    B = {
      ...O,
      getAnimatableNone: e => {
        let t = e.match(R);
        return t ? t.map(D).join(" ") : e
      }
    },
    N = {
      ...r,
      transform: Math.round
    },
    L = {
      borderWidth: y,
      borderTopWidth: y,
      borderRightWidth: y,
      borderBottomWidth: y,
      borderLeftWidth: y,
      borderRadius: y,
      radius: y,
      borderTopLeftRadius: y,
      borderTopRightRadius: y,
      borderBottomRightRadius: y,
      borderBottomLeftRadius: y,
      width: y,
      maxWidth: y,
      height: y,
      maxHeight: y,
      top: y,
      right: y,
      bottom: y,
      left: y,
      padding: y,
      paddingTop: y,
      paddingRight: y,
      paddingBottom: y,
      paddingLeft: y,
      margin: y,
      marginTop: y,
      marginRight: y,
      marginBottom: y,
      marginLeft: y,
      backgroundPositionX: y,
      backgroundPositionY: y,
      rotate: v,
      rotateX: v,
      rotateY: v,
      rotateZ: v,
      scale: a,
      scaleX: a,
      scaleY: a,
      scaleZ: a,
      skew: v,
      skewX: v,
      skewY: v,
      distance: y,
      translateX: y,
      translateY: y,
      translateZ: y,
      x: y,
      y: y,
      z: y,
      perspective: y,
      transformPerspective: y,
      opacity: n,
      originX: V,
      originY: V,
      originZ: y,
      zIndex: N,
      size: y,
      fillOpacity: n,
      strokeOpacity: n,
      numOctaves: N
    };
  e.s(["numberValueTypes", () => L], 97045);
  let K = {
      ...L,
      color: S,
      backgroundColor: S,
      outlineColor: S,
      fill: S,
      stroke: S,
      borderColor: S,
      borderTopColor: S,
      borderRightColor: S,
      borderBottomColor: S,
      borderLeftColor: S,
      filter: B,
      WebkitFilter: B
    },
    $ = e => K[e];

  function G(e, t) {
    let i = $(e);
    return i !== B && (i = O), i.getAnimatableNone ? i.getAnimatableNone(t) : void 0
  }
  e.s(["getDefaultValueType", () => $], 78923), e.s(["getAnimatableNone", () => G], 16419);
  let j = new Set(["auto", "none", "0"]);
  var W = e.i(63667);
  let U = e => e === r || e === y,
    z = (e, t) => parseFloat(e.split(", ")[t]),
    Y = (e, t) => (i, {
      transform: s
    }) => {
      if ("none" === s || !s) return 0;
      let r = s.match(/^matrix3d\((.+)\)$/u);
      if (r) return z(r[1], t);
      {
        let t = s.match(/^matrix\((.+)\)$/u);
        return t ? z(t[1], e) : 0
      }
    },
    q = new Set(["x", "y", "z"]),
    X = W.transformPropOrder.filter(e => !q.has(e)),
    H = {
      width: ({
        x: e
      }, {
        paddingLeft: t = "0",
        paddingRight: i = "0"
      }) => e.max - e.min - parseFloat(t) - parseFloat(i),
      height: ({
        y: e
      }, {
        paddingTop: t = "0",
        paddingBottom: i = "0"
      }) => e.max - e.min - parseFloat(t) - parseFloat(i),
      top: (e, {
        top: t
      }) => parseFloat(t),
      left: (e, {
        left: t
      }) => parseFloat(t),
      bottom: ({
        y: e
      }, {
        top: t
      }) => parseFloat(t) + (e.max - e.min),
      right: ({
        x: e
      }, {
        left: t
      }) => parseFloat(t) + (e.max - e.min),
      x: Y(4, 13),
      y: Y(5, 14)
    };
  H.translateX = H.x, H.translateY = H.y;
  var Z = e.i(4399);
  let _ = new Set,
    J = !1,
    Q = !1;

  function ee() {
    if (Q) {
      let e = Array.from(_).filter(e => e.needsMeasurement),
        t = new Set(e.map(e => e.element)),
        i = new Map;
      t.forEach(e => {
        let t, s = (t = [], X.forEach(i => {
          let s = e.getValue(i);
          void 0 !== s && (t.push([i, s.get()]), s.set(+!!i.startsWith("scale")))
        }), t);
        s.length && (i.set(e, s), e.render())
      }), e.forEach(e => e.measureInitialState()), t.forEach(e => {
        e.render();
        let t = i.get(e);
        t && t.forEach(([t, i]) => {
          var s;
          null == (s = e.getValue(t)) || s.set(i)
        })
      }), e.forEach(e => e.measureEndState()), e.forEach(e => {
        void 0 !== e.suspendedScrollY && window.scrollTo(0, e.suspendedScrollY)
      })
    }
    Q = !1, J = !1, _.forEach(e => e.complete()), _.clear()
  }

  function et() {
    _.forEach(e => {
      e.readKeyframes(), e.needsMeasurement && (Q = !0)
    })
  }

  function ei() {
    et(), ee()
  }
  class es {
    constructor(e, t, i, s, r, n = !1) {
      this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = i, this.motionValue = s, this.element = r, this.isAsync = n
    }
    scheduleResolve() {
      this.isScheduled = !0, this.isAsync ? (_.add(this), J || (J = !0, Z.frame.read(et), Z.frame.resolveKeyframes(ee))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
      let {
        unresolvedKeyframes: e,
        name: t,
        element: i,
        motionValue: s
      } = this;
      for (let r = 0; r < e.length; r++)
        if (null === e[r])
          if (0 === r) {
            let r = null == s ? void 0 : s.get(),
              n = e[e.length - 1];
            if (void 0 !== r) e[0] = r;
            else if (i && t) {
              let s = i.readValue(t, n);
              null != s && (e[0] = s)
            }
            void 0 === e[0] && (e[0] = n), s && void 0 === r && s.set(e[0])
          } else e[r] = e[r - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
      this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), _.delete(this)
    }
    cancel() {
      this.isComplete || (this.isScheduled = !1, _.delete(this))
    }
    resume() {
      this.isComplete || this.scheduleResolve()
    }
  }
  e.s(["KeyframeResolver", () => es, "flushKeyframeResolvers", () => ei], 1172), e.i(87514);
  var er = e.i(42896);
  let en = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
  e.s(["isNumericalString", () => en], 66322);
  let ea = e => t => "string" == typeof t && t.startsWith(e),
    eo = ea("--"),
    el = ea("var(--"),
    eu = e => !!el(e) && eh.test(e.split("/*")[0].trim()),
    eh = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
  e.s(["isCSSVariableName", () => eo, "isCSSVariableToken", () => eu], 58136);
  let ec = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
    ed = e => t => t.test(e);
  e.s(["testValueType", () => ed], 57268);
  let ep = [r, y, g, v, T, b, {
      test: e => "auto" === e,
      parse: e => e
    }],
    em = e => ep.find(ed(e));
  e.s(["dimensionValueTypes", () => ep, "findDimensionValueType", () => em], 66594);
  class ef extends es {
    constructor(e, t, i, s, r) {
      super(e, t, i, s, r, !0)
    }
    readKeyframes() {
      let {
        unresolvedKeyframes: e,
        element: t,
        name: s
      } = this;
      if (!t || !t.current) return;
      super.readKeyframes();
      for (let i = 0; i < e.length; i++) {
        let s = e[i];
        if ("string" == typeof s && eu(s = s.trim())) {
          let r = function e(t, i, s = 1) {
            (0, er.invariant)(s <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
            let [r, n] = function(e) {
              let t = ec.exec(e);
              if (!t) return [, ];
              let [, i, s, r] = t;
              return [`--${null!=i?i:s}`, r]
            }(t);
            if (!r) return;
            let a = window.getComputedStyle(i).getPropertyValue(r);
            if (a) {
              let e = a.trim();
              return en(e) ? parseFloat(e) : e
            }
            return eu(n) ? e(n, i, s + 1) : n
          }(s, t.current);
          void 0 !== r && (e[i] = r), i === e.length - 1 && (this.finalKeyframe = s)
        }
      }
      if (this.resolveNoneKeyframes(), !i.positionalKeys.has(s) || 2 !== e.length) return;
      let [r, n] = e, a = em(r), o = em(n);
      if (a !== o)
        if (U(a) && U(o))
          for (let t = 0; t < e.length; t++) {
            let i = e[t];
            "string" == typeof i && (e[t] = parseFloat(i))
          } else this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
      let {
        unresolvedKeyframes: e,
        name: i
      } = this, s = [];
      for (let i = 0; i < e.length; i++)(0, t.isNone)(e[i]) && s.push(i);
      s.length && function(e, t, i) {
        let s, r = 0;
        for (; r < e.length && !s;) {
          let t = e[r];
          "string" == typeof t && !j.has(t) && k(t).values.length && (s = e[r]), r++
        }
        if (s && i)
          for (let r of t) e[r] = G(i, s)
      }(e, s, i)
    }
    measureInitialState() {
      let {
        element: e,
        unresolvedKeyframes: t,
        name: i
      } = this;
      if (!e || !e.current) return;
      "height" === i && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = H[i](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
      let s = t[t.length - 1];
      void 0 !== s && e.getValue(i, s).jump(s, !1)
    }
    measureEndState() {
      var e;
      let {
        element: t,
        name: i,
        unresolvedKeyframes: s
      } = this;
      if (!t || !t.current) return;
      let r = t.getValue(i);
      r && r.jump(this.measuredOrigin, !1);
      let n = s.length - 1,
        a = s[n];
      s[n] = H[i](t.measureViewportBox(), window.getComputedStyle(t.current)), null !== a && void 0 === this.finalKeyframe && (this.finalKeyframe = a), (null == (e = this.removedTransforms) ? void 0 : e.length) && this.removedTransforms.forEach(([e, i]) => {
        t.getValue(e).set(i)
      }), this.resolveNoneKeyframes()
    }
  }
  e.s(["DOMKeyframesResolver", () => ef], 50609);
  var ev = e.i(97404),
    eg = e.i(5541);
  e.i(11889);
  var ey = e.i(52360);
  let eb = (e, t) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (O.test(e) || "0" === e) && !e.startsWith("url(")),
    eT = e => null !== e;

  function eV(e, {
    repeat: t,
    repeatType: i = "loop"
  }, s) {
    let r = e.filter(eT),
      n = t && "loop" !== i && t % 2 == 1 ? 0 : r.length - 1;
    return n && void 0 !== s ? s : r[n]
  }
  e.s(["getFinalKeyframe", () => eV], 22535);
  class ew {
    constructor({
      autoplay: e = !0,
      delay: t = 0,
      type: i = "keyframes",
      repeat: s = 0,
      repeatDelay: r = 0,
      repeatType: n = "loop",
      ...a
    }) {
      this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = ev.time.now(), this.options = {
        autoplay: e,
        delay: t,
        type: i,
        repeat: s,
        repeatDelay: r,
        repeatType: n,
        ...a
      }, this.updateFinishedPromise()
    }
    calcStartTime() {
      return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
    }
    get resolved() {
      return this._resolved || this.hasAttemptedResolve || ei(), this._resolved
    }
    onKeyframesResolved(e, t) {
      this.resolvedAt = ev.time.now(), this.hasAttemptedResolve = !0;
      let {
        name: i,
        type: s,
        velocity: r,
        delay: n,
        onComplete: a,
        onUpdate: o,
        isGenerator: l
      } = this.options;
      if (!l && ! function(e, t, i, s) {
          let r = e[0];
          if (null === r) return !1;
          if ("display" === t || "visibility" === t) return !0;
          let n = e[e.length - 1],
            a = eb(r, t),
            o = eb(n, t);
          return (0, er.warning)(a === o, `You are trying to animate ${t} from "${r}" to "${n}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${n} via the \`style\` property.`), !!a && !!o && (function(e) {
            let t = e[0];
            if (1 === e.length) return !0;
            for (let i = 0; i < e.length; i++)
              if (e[i] !== t) return !0
          }(e) || ("spring" === i || (0, ey.isGenerator)(i)) && s)
        }(e, i, s, r))
        if (eg.instantAnimationState.current || !n) {
          o && o(eV(e, this.options, t)), a && a(), this.resolveFinishedPromise();
          return
        } else this.options.duration = 0;
      let u = this.initPlayback(e, t);
      !1 !== u && (this._resolved = {
        keyframes: e,
        finalKeyframe: t,
        ...u
      }, this.onPostResolved())
    }
    onPostResolved() {}
    then(e, t) {
      return this.currentFinishedPromise.then(e, t)
    }
    flatten() {
      this.options.type = "keyframes", this.options.ease = "linear"
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise(e => {
        this.resolveFinishedPromise = e
      })
    }
  }
  e.s(["BaseAnimation", () => ew], 1479)
}, 43776, e => {
  "use strict";
  let t = (e, t, i) => e + (t - e) * i;
  e.s(["mixNumber", () => t])
}, 85528, 73030, e => {
  "use strict";
  var t = e.i(43776);
  e.i(87514);
  var i = e.i(42896);

  function s(e, t, i) {
    return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? e + (t - e) * 6 * i : i < .5 ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e
  }
  var r = e.i(31779),
    n = e.i(74776),
    a = e.i(84179);

  function o(e, t) {
    return i => i > 0 ? t : e
  }
  let l = (e, t, i) => {
      let s = e * e,
        r = i * (t * t - s) + s;
      return r < 0 ? 0 : Math.sqrt(r)
    },
    u = [r.hex, n.rgba, a.hsla];

  function h(e) {
    let t = u.find(t => t.test(e));
    if ((0, i.warning)(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t) return !1;
    let r = t.parse(e);
    return t === a.hsla && (r = function({
      hue: e,
      saturation: t,
      lightness: i,
      alpha: r
    }) {
      e /= 360, i /= 100;
      let n = 0,
        a = 0,
        o = 0;
      if (t /= 100) {
        let r = i < .5 ? i * (1 + t) : i + t - i * t,
          l = 2 * i - r;
        n = s(l, r, e + 1 / 3), a = s(l, r, e), o = s(l, r, e - 1 / 3)
      } else n = a = o = i;
      return {
        red: Math.round(255 * n),
        green: Math.round(255 * a),
        blue: Math.round(255 * o),
        alpha: r
      }
    }(r)), r
  }
  let c = (e, i) => {
      let s = h(e),
        r = h(i);
      if (!s || !r) return o(e, i);
      let a = {
        ...s
      };
      return e => (a.red = l(s.red, r.red, e), a.green = l(s.green, r.green, e), a.blue = l(s.blue, r.blue, e), a.alpha = (0, t.mixNumber)(s.alpha, r.alpha, e), n.rgba.transform(a))
    },
    d = (e, t) => i => t(e(i)),
    p = (...e) => e.reduce(d);
  e.s(["pipe", () => p], 73030);
  var m = e.i(33954),
    f = e.i(31934),
    v = e.i(58136);
  let g = new Set(["none", "hidden"]);

  function y(e, i) {
    return s => (0, t.mixNumber)(e, i, s)
  }

  function b(e) {
    return "number" == typeof e ? y : "string" == typeof e ? (0, v.isCSSVariableToken)(e) ? o : m.color.test(e) ? c : w : Array.isArray(e) ? T : "object" == typeof e ? m.color.test(e) ? c : V : o
  }

  function T(e, t) {
    let i = [...e],
      s = i.length,
      r = e.map((e, i) => b(e)(e, t[i]));
    return e => {
      for (let t = 0; t < s; t++) i[t] = r[t](e);
      return i
    }
  }

  function V(e, t) {
    let i = {
        ...e,
        ...t
      },
      s = {};
    for (let r in i) void 0 !== e[r] && void 0 !== t[r] && (s[r] = b(e[r])(e[r], t[r]));
    return e => {
      for (let t in s) i[t] = s[t](e);
      return i
    }
  }
  let w = (e, t) => {
    let s = f.complex.createTransformer(t),
      r = (0, f.analyseComplexValue)(e),
      n = (0, f.analyseComplexValue)(t);
    if (!(r.indexes.var.length === n.indexes.var.length && r.indexes.color.length === n.indexes.color.length && r.indexes.number.length >= n.indexes.number.length)) return (0, i.warning)(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), o(e, t);
    if (g.has(e) && !n.values.length || g.has(t) && !r.values.length) return g.has(e) ? i => i <= 0 ? e : t : i => i >= 1 ? t : e;
    return p(T(function(e, t) {
      var i;
      let s = [],
        r = {
          color: 0,
          var: 0,
          number: 0
        };
      for (let n = 0; n < t.values.length; n++) {
        let a = t.types[n],
          o = e.indexes[a][r[a]],
          l = null != (i = e.values[o]) ? i : 0;
        s[n] = l, r[a]++
      }
      return s
    }(r, n), n.values), s)
  };

  function S(e, i, s) {
    return "number" == typeof e && "number" == typeof i && "number" == typeof s ? (0, t.mixNumber)(e, i, s) : b(e)(e, i)
  }
  e.s(["mix", () => S], 85528)
}, 67947, 34766, e => {
  "use strict";
  e.i(11889);
  var t = e.i(93248),
    i = e.i(83782);
  e.i(87514);
  var s = e.i(74040),
    r = e.i(21123),
    n = e.i(43532);

  function a(e, t, i) {
    let s = Math.max(t - 5, 0);
    return (0, n.velocityPerSecond)(i - e(s), t - s)
  }
  e.s(["calcGeneratorVelocity", () => a], 34766);
  let o = .01,
    l = 2,
    u = .005,
    h = .5;
  var c = e.i(42896);

  function d(e, t) {
    return e * Math.sqrt(1 - t * t)
  }
  let p = ["duration", "bounce"],
    m = ["stiffness", "damping", "mass"];

  function f(e, t) {
    return t.some(t => void 0 !== e[t])
  }

  function v(e = .3, n = .3) {
    let g, y = "object" != typeof e ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: n
      } : e,
      {
        restSpeed: b,
        restDelta: T
      } = y,
      V = y.keyframes[0],
      w = y.keyframes[y.keyframes.length - 1],
      S = {
        done: !1,
        value: V
      },
      {
        stiffness: x,
        damping: M,
        mass: A,
        duration: P,
        velocity: k,
        isResolvedFromDuration: C
      } = function(e) {
        let t = {
          velocity: 0,
          stiffness: 100,
          damping: 10,
          mass: 1,
          isResolvedFromDuration: !1,
          ...e
        };
        if (!f(e, m) && f(e, p))
          if (e.visualDuration) {
            let i = 2 * Math.PI / (1.2 * e.visualDuration),
              s = i * i,
              n = 2 * (0, r.clamp)(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
            t = {
              ...t,
              mass: 1,
              stiffness: s,
              damping: n
            }
          } else {
            let i = function({
              duration: e = 800,
              bounce: t = .3,
              velocity: i = 0,
              mass: n = 1
            }) {
              let a, o;
              (0, c.warning)(e <= (0, s.secondsToMilliseconds)(10), "Spring duration must be 10 seconds or less");
              let l = 1 - t;
              l = (0, r.clamp)(.05, 1, l), e = (0, r.clamp)(.01, 10, (0, s.millisecondsToSeconds)(e)), l < 1 ? (a = t => {
                let s = t * l,
                  r = s * e;
                return .001 - (s - i) / d(t, l) * Math.exp(-r)
              }, o = t => {
                let s = t * l * e,
                  r = Math.pow(l, 2) * Math.pow(t, 2) * e,
                  n = Math.exp(-s),
                  o = d(Math.pow(t, 2), l);
                return (s * i + i - r) * n * (-a(t) + .001 > 0 ? -1 : 1) / o
              }) : (a = t => -.001 + Math.exp(-t * e) * ((t - i) * e + 1), o = t => e * e * (i - t) * Math.exp(-t * e));
              let u = function(e, t, i) {
                let s = i;
                for (let i = 1; i < 12; i++) s -= e(s) / t(s);
                return s
              }(a, o, 5 / e);
              if (e = (0, s.secondsToMilliseconds)(e), isNaN(u)) return {
                stiffness: 100,
                damping: 10,
                duration: e
              };
              {
                let t = Math.pow(u, 2) * n;
                return {
                  stiffness: t,
                  damping: 2 * l * Math.sqrt(n * t),
                  duration: e
                }
              }
            }(e);
            (t = {
              ...t,
              ...i,
              mass: 1
            }).isResolvedFromDuration = !0
          } return t
      }({
        ...y,
        velocity: -(0, s.millisecondsToSeconds)(y.velocity || 0)
      }),
      F = k || 0,
      E = M / (2 * Math.sqrt(x * A)),
      O = w - V,
      I = (0, s.millisecondsToSeconds)(Math.sqrt(x / A)),
      D = 5 > Math.abs(O);
    if (b || (b = D ? o : l), T || (T = D ? u : h), E < 1) {
      let e = d(I, E);
      g = t => w - Math.exp(-E * I * t) * ((F + E * I * O) / e * Math.sin(e * t) + O * Math.cos(e * t))
    } else if (1 === E) g = e => w - Math.exp(-I * e) * (O + (F + I * O) * e);
    else {
      let e = I * Math.sqrt(E * E - 1);
      g = t => {
        let i = Math.exp(-E * I * t),
          s = Math.min(e * t, 300);
        return w - i * ((F + E * I * O) * Math.sinh(s) + e * O * Math.cosh(s)) / e
      }
    }
    let R = {
      calculatedDuration: C && P || null,
      next: e => {
        let t = g(e);
        if (C) S.done = e >= P;
        else {
          let i = 0;
          E < 1 && (i = 0 === e ? (0, s.secondsToMilliseconds)(F) : a(g, e, t));
          let r = Math.abs(w - t) <= T;
          S.done = Math.abs(i) <= b && r
        }
        return S.value = S.done ? w : t, S
      },
      toString: () => {
        let e = Math.min((0, t.calcGeneratorDuration)(R), t.maxGeneratorDuration),
          s = (0, i.generateLinearEasing)(t => R.next(e * t).value, e, 30);
        return e + "ms " + s
      }
    };
    return R
  }
  e.s(["spring", () => v], 67947)
}, 76306, 43784, e => {
  "use strict";
  var t = e.i(67947),
    i = e.i(34766);

  function s({
    keyframes: e,
    velocity: s = 0,
    power: r = .8,
    timeConstant: n = 325,
    bounceDamping: a = 10,
    bounceStiffness: o = 500,
    modifyTarget: l,
    min: u,
    max: h,
    restDelta: c = .5,
    restSpeed: d
  }) {
    let p, m, f = e[0],
      v = {
        done: !1,
        value: f
      },
      g = r * s,
      y = f + g,
      b = void 0 === l ? y : l(y);
    b !== y && (g = b - f);
    let T = e => -g * Math.exp(-e / n),
      V = e => b + T(e),
      w = e => {
        let t = T(e),
          i = V(e);
        v.done = Math.abs(t) <= c, v.value = v.done ? b : i
      },
      S = e => {
        let s;
        if (s = v.value, void 0 !== u && s < u || void 0 !== h && s > h) {
          var r;
          p = e, m = (0, t.spring)({
            keyframes: [v.value, (r = v.value, void 0 === u ? h : void 0 === h || Math.abs(u - r) < Math.abs(h - r) ? u : h)],
            velocity: (0, i.calcGeneratorVelocity)(V, e, v.value),
            damping: a,
            stiffness: o,
            restDelta: c,
            restSpeed: d
          })
        }
      };
    return S(0), {
      calculatedDuration: null,
      next: e => {
        let t = !1;
        return (m || void 0 !== p || (t = !0, w(e), S(e)), void 0 !== p && e >= p) ? m.next(e - p) : (t || w(e), v)
      }
    }
  }
  e.s(["inertia", () => s], 76306);
  var r = e.i(27894);
  let n = (0, r.cubicBezier)(.42, 0, 1, 1),
    a = (0, r.cubicBezier)(0, 0, .58, 1),
    o = (0, r.cubicBezier)(.42, 0, .58, 1);
  e.s(["easeIn", () => n, "easeInOut", () => o, "easeOut", () => a], 43784)
}, 26487, e => {
  "use strict";
  let t = e => Array.isArray(e) && "number" != typeof e[0];
  e.s(["isEasingArray", () => t])
}, 3547, 8119, e => {
  "use strict";
  e.i(11889);
  var t = e.i(7989);
  e.i(87514);
  var i = e.i(42896),
    s = e.i(48027),
    r = e.i(19846),
    n = e.i(24069),
    a = e.i(12926),
    o = e.i(27894),
    l = e.i(43784);
  let u = {
      linear: s.noop,
      easeIn: l.easeIn,
      easeInOut: l.easeInOut,
      easeOut: l.easeOut,
      circIn: a.circIn,
      circInOut: a.circInOut,
      circOut: a.circOut,
      backIn: n.backIn,
      backInOut: n.backInOut,
      backOut: n.backOut,
      anticipate: r.anticipate
    },
    h = e => {
      if ((0, t.isBezierDefinition)(e)) {
        (0, i.invariant)(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
        let [t, s, r, n] = e;
        return (0, o.cubicBezier)(t, s, r, n)
      }
      return "string" == typeof e ? ((0, i.invariant)(void 0 !== u[e], `Invalid easing type '${e}'`), u[e]) : e
    };
  e.s(["easingDefinitionToFunction", () => h], 3547);
  var c = e.i(13890),
    d = e.i(21123),
    p = e.i(85528),
    m = e.i(73030);

  function f(e, t, {
    clamp: r = !0,
    ease: n,
    mixer: a
  } = {}) {
    let o = e.length;
    if ((0, i.invariant)(o === t.length, "Both input and output ranges must be the same length"), 1 === o) return () => t[0];
    if (2 === o && t[0] === t[1]) return () => t[1];
    let l = e[0] === e[1];
    e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
    let u = function(e, t, i) {
        let r = [],
          n = i || p.mix,
          a = e.length - 1;
        for (let i = 0; i < a; i++) {
          let a = n(e[i], e[i + 1]);
          if (t) {
            let e = Array.isArray(t) ? t[i] || s.noop : t;
            a = (0, m.pipe)(e, a)
          }
          r.push(a)
        }
        return r
      }(t, n, a),
      h = u.length,
      v = i => {
        if (l && i < e[0]) return t[0];
        let s = 0;
        if (h > 1)
          for (; s < e.length - 2 && !(i < e[s + 1]); s++);
        let r = (0, c.progress)(e[s], e[s + 1], i);
        return u[s](r)
      };
    return r ? t => v((0, d.clamp)(e[0], e[o - 1], t)) : v
  }
  e.s(["interpolate", () => f], 8119)
}, 83454, 12848, e => {
  "use strict";
  e.i(87514);
  var t = e.i(13890),
    i = e.i(43776);

  function s(e, s) {
    let r = e[e.length - 1];
    for (let n = 1; n <= s; n++) {
      let a = (0, t.progress)(0, s, n);
      e.push((0, i.mixNumber)(r, 1, a))
    }
  }

  function r(e) {
    let t = [0];
    return s(t, e.length - 1), t
  }
  e.s(["fillOffset", () => s], 12848), e.s(["defaultOffset", () => r], 83454)
}, 53120, 62043, e => {
  "use strict";
  e.i(11889);
  var t = e.i(20448),
    i = e.i(3099),
    s = e.i(78558),
    r = e.i(36540),
    n = e.i(20614),
    a = e.i(2975);
  e.i(87514);
  var o = e.i(74040),
    l = e.i(4399),
    u = e.i(49406),
    h = e.i(5541),
    c = e.i(16202),
    d = e.i(46138),
    p = e.i(52360),
    m = e.i(416),
    f = e.i(48027),
    v = e.i(19846),
    g = e.i(24069),
    y = e.i(12926),
    b = e.i(50609),
    T = e.i(1479);
  e.i(39057);
  var V = e.i(93248),
    w = e.i(1172),
    S = e.i(21123),
    x = e.i(85528),
    M = e.i(73030),
    A = e.i(76306),
    P = e.i(43784),
    k = e.i(26487),
    C = e.i(3547),
    F = e.i(8119),
    E = e.i(83454);

  function O({
    duration: e = 300,
    keyframes: t,
    times: i,
    ease: s = "easeInOut"
  }) {
    var r;
    let n = (0, k.isEasingArray)(s) ? s.map(C.easingDefinitionToFunction) : (0, C.easingDefinitionToFunction)(s),
      a = {
        done: !1,
        value: t[0]
      },
      o = (r = i && i.length === t.length ? i : (0, E.defaultOffset)(t), r.map(t => t * e)),
      l = (0, F.interpolate)(o, t, {
        ease: Array.isArray(n) ? n : t.map(() => n || P.easeInOut).splice(0, t.length - 1)
      });
    return {
      calculatedDuration: e,
      next: t => (a.value = l(t), a.done = t >= e, a)
    }
  }
  var I = e.i(67947),
    D = T,
    R = e.i(97404);
  let B = e => {
    let t = ({
      timestamp: t
    }) => e(t);
    return {
      start: () => l.frame.update(t, !0),
      stop: () => (0, l.cancelFrame)(t),
      now: () => l.frameData.isProcessing ? l.frameData.timestamp : R.time.now()
    }
  };
  var N = e.i(22535);
  let L = {
      decay: A.inertia,
      inertia: A.inertia,
      tween: O,
      keyframes: O,
      spring: I.spring
    },
    K = e => e / 100;
  class $ extends D.BaseAnimation {
    constructor(e) {
      super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
        if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
        this.teardown();
        let {
          onStop: e
        } = this.options;
        e && e()
      };
      const {
        name: t,
        motionValue: i,
        element: s,
        keyframes: r
      } = this.options, n = (null == s ? void 0 : s.KeyframeResolver) || w.KeyframeResolver, a = (e, t) => this.onKeyframesResolved(e, t);
      this.resolver = new n(r, a, t, i, s), this.resolver.scheduleResolve()
    }
    flatten() {
      super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(e) {
      let t, i, {
          type: s = "keyframes",
          repeat: r = 0,
          repeatDelay: n = 0,
          repeatType: a,
          velocity: o = 0
        } = this.options,
        l = (0, p.isGenerator)(s) ? s : L[s] || O;
      l !== O && "number" != typeof e[0] && (t = (0, M.pipe)(K, (0, x.mix)(e[0], e[1])), e = [0, 100]);
      let u = l({
        ...this.options,
        keyframes: e
      });
      "mirror" === a && (i = l({
        ...this.options,
        keyframes: [...e].reverse(),
        velocity: -o
      })), null === u.calculatedDuration && (u.calculatedDuration = (0, V.calcGeneratorDuration)(u));
      let {
        calculatedDuration: h
      } = u, c = h + n;
      return {
        generator: u,
        mirroredGenerator: i,
        mapPercentToKeyframes: t,
        calculatedDuration: h,
        resolvedDuration: c,
        totalDuration: c * (r + 1) - n
      }
    }
    onPostResolved() {
      let {
        autoplay: e = !0
      } = this.options;
      this.play(), "paused" !== this.pendingPlayState && e ? this.state = this.pendingPlayState : this.pause()
    }
    tick(e, t = !1) {
      let {
        resolved: i
      } = this;
      if (!i) {
        let {
          keyframes: e
        } = this.options;
        return {
          done: !0,
          value: e[e.length - 1]
        }
      }
      let {
        finalKeyframe: s,
        generator: r,
        mirroredGenerator: n,
        mapPercentToKeyframes: a,
        keyframes: o,
        calculatedDuration: l,
        totalDuration: u,
        resolvedDuration: h
      } = i;
      if (null === this.startTime) return r.next(0);
      let {
        delay: c,
        repeat: d,
        repeatType: p,
        repeatDelay: m,
        onUpdate: f
      } = this.options;
      this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - u / this.speed, this.startTime)), t ? this.currentTime = e : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
      let v = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
        g = this.speed >= 0 ? v < 0 : v > u;
      this.currentTime = Math.max(v, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = u);
      let y = this.currentTime,
        b = r;
      if (d) {
        let e = Math.min(this.currentTime, u) / h,
          t = Math.floor(e),
          i = e % 1;
        !i && e >= 1 && (i = 1), 1 === i && t--, (t = Math.min(t, d + 1)) % 2 && ("reverse" === p ? (i = 1 - i, m && (i -= m / h)) : "mirror" === p && (b = n)), y = (0, S.clamp)(0, 1, i) * h
      }
      let T = g ? {
        done: !1,
        value: o[0]
      } : b.next(y);
      a && (T.value = a(T.value));
      let {
        done: V
      } = T;
      g || null === l || (V = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
      let w = null === this.holdTime && ("finished" === this.state || "running" === this.state && V);
      return w && void 0 !== s && (T.value = (0, N.getFinalKeyframe)(o, this.options, s)), f && f(T.value), w && this.finish(), T
    }
    get duration() {
      let {
        resolved: e
      } = this;
      return e ? (0, o.millisecondsToSeconds)(e.calculatedDuration) : 0
    }
    get time() {
      return (0, o.millisecondsToSeconds)(this.currentTime)
    }
    set time(e) {
      e = (0, o.secondsToMilliseconds)(e), this.currentTime = e, null !== this.holdTime || 0 === this.speed ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
    }
    get speed() {
      return this.playbackSpeed
    }
    set speed(e) {
      let t = this.playbackSpeed !== e;
      this.playbackSpeed = e, t && (this.time = (0, o.millisecondsToSeconds)(this.currentTime))
    }
    play() {
      if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
        this.pendingPlayState = "running";
        return
      }
      if (this.isStopped) return;
      let {
        driver: e = B,
        onPlay: t,
        startTime: i
      } = this.options;
      this.driver || (this.driver = e(e => this.tick(e))), t && t();
      let s = this.driver.now();
      null !== this.holdTime ? this.startTime = s - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = s) : this.startTime = null != i ? i : this.calcStartTime(), "finished" === this.state && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
      var e;
      if (!this._resolved) {
        this.pendingPlayState = "paused";
        return
      }
      this.state = "paused", this.holdTime = null != (e = this.currentTime) ? e : 0
    }
    complete() {
      "running" !== this.state && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }
    finish() {
      this.teardown(), this.state = "finished";
      let {
        onComplete: e
      } = this.options;
      e && e()
    }
    cancel() {
      null !== this.cancelTime && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }
    teardown() {
      this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }
    stopDriver() {
      this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(e) {
      return this.startTime = 0, this.tick(e, !0)
    }
  }
  let G = new Set(["opacity", "clipPath", "filter", "transform"]),
    j = (0, e.i(73714).memo)(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    W = {
      anticipate: v.anticipate,
      backInOut: g.backInOut,
      circInOut: y.circInOut
    };
  class U extends T.BaseAnimation {
    constructor(e) {
      super(e);
      const {
        name: t,
        motionValue: i,
        element: s,
        keyframes: r
      } = this.options;
      this.resolver = new b.DOMKeyframesResolver(r, (e, t) => this.onKeyframesResolved(e, t), t, i, s), this.resolver.scheduleResolve()
    }
    initPlayback(e, t) {
      var i;
      let {
        duration: s = 300,
        times: r,
        ease: n,
        type: a,
        motionValue: o,
        name: l,
        startTime: u
      } = this.options;
      if (!o.owner || !o.owner.current) return !1;
      if ("string" == typeof n && (0, c.supportsLinearEasing)() && n in W && (n = W[n]), i = this.options, (0, p.isGenerator)(i.type) || "spring" === i.type || !(0, m.isWaapiSupportedEasing)(i.ease)) {
        let {
          onComplete: t,
          onUpdate: i,
          motionValue: o,
          element: l,
          ...u
        } = this.options, h = function(e, t) {
          let i = new $({
              ...t,
              keyframes: e,
              repeat: 0,
              delay: 0,
              isGenerator: !0
            }),
            s = {
              done: !1,
              value: e[0]
            },
            r = [],
            n = 0;
          for (; !s.done && n < 2e4;) r.push((s = i.sample(n)).value), n += 10;
          return {
            times: void 0,
            keyframes: r,
            duration: n - 10,
            ease: "linear"
          }
        }(e, u);
        1 === (e = h.keyframes).length && (e[1] = e[0]), s = h.duration, r = h.times, n = h.ease, a = "keyframes"
      }
      let h = function(e, t, i, {
        delay: s = 0,
        duration: r = 300,
        repeat: n = 0,
        repeatType: a = "loop",
        ease: o = "easeInOut",
        times: l
      } = {}) {
        let u = {
          [t]: i
        };
        l && (u.offset = l);
        let h = (0, m.mapEasingToNativeEasing)(o, r);
        return Array.isArray(h) && (u.easing = h), e.animate(u, {
          delay: s,
          duration: r,
          easing: Array.isArray(h) ? "linear" : h,
          fill: "both",
          iterations: n + 1,
          direction: "reverse" === a ? "alternate" : "normal"
        })
      }(o.owner.current, l, e, {
        ...this.options,
        duration: s,
        times: r,
        ease: n
      });
      return h.startTime = null != u ? u : this.calcStartTime(), this.pendingTimeline ? ((0, d.attachTimeline)(h, this.pendingTimeline), this.pendingTimeline = void 0) : h.onfinish = () => {
        let {
          onComplete: i
        } = this.options;
        o.set((0, N.getFinalKeyframe)(e, this.options, t)), i && i(), this.cancel(), this.resolveFinishedPromise()
      }, {
        animation: h,
        duration: s,
        times: r,
        type: a,
        ease: n,
        keyframes: e
      }
    }
    get duration() {
      let {
        resolved: e
      } = this;
      if (!e) return 0;
      let {
        duration: t
      } = e;
      return (0, o.millisecondsToSeconds)(t)
    }
    get time() {
      let {
        resolved: e
      } = this;
      if (!e) return 0;
      let {
        animation: t
      } = e;
      return (0, o.millisecondsToSeconds)(t.currentTime || 0)
    }
    set time(e) {
      let {
        resolved: t
      } = this;
      if (!t) return;
      let {
        animation: i
      } = t;
      i.currentTime = (0, o.secondsToMilliseconds)(e)
    }
    get speed() {
      let {
        resolved: e
      } = this;
      if (!e) return 1;
      let {
        animation: t
      } = e;
      return t.playbackRate
    }
    set speed(e) {
      let {
        resolved: t
      } = this;
      if (!t) return;
      let {
        animation: i
      } = t;
      i.playbackRate = e
    }
    get state() {
      let {
        resolved: e
      } = this;
      if (!e) return "idle";
      let {
        animation: t
      } = e;
      return t.playState
    }
    get startTime() {
      let {
        resolved: e
      } = this;
      if (!e) return null;
      let {
        animation: t
      } = e;
      return t.startTime
    }
    attachTimeline(e) {
      if (this._resolved) {
        let {
          resolved: t
        } = this;
        if (!t) return f.noop;
        let {
          animation: i
        } = t;
        (0, d.attachTimeline)(i, e)
      } else this.pendingTimeline = e;
      return f.noop
    }
    play() {
      if (this.isStopped) return;
      let {
        resolved: e
      } = this;
      if (!e) return;
      let {
        animation: t
      } = e;
      "finished" === t.playState && this.updateFinishedPromise(), t.play()
    }
    pause() {
      let {
        resolved: e
      } = this;
      if (!e) return;
      let {
        animation: t
      } = e;
      t.pause()
    }
    stop() {
      if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
      this.resolveFinishedPromise(), this.updateFinishedPromise();
      let {
        resolved: e
      } = this;
      if (!e) return;
      let {
        animation: t,
        keyframes: i,
        duration: s,
        type: r,
        ease: n,
        times: a
      } = e;
      if ("idle" === t.playState || "finished" === t.playState) return;
      if (this.time) {
        let {
          motionValue: e,
          onUpdate: t,
          onComplete: l,
          element: u,
          ...h
        } = this.options, c = new $({
          ...h,
          keyframes: i,
          duration: s,
          type: r,
          ease: n,
          times: a,
          isGenerator: !0
        }), d = (0, o.secondsToMilliseconds)(this.time);
        e.setWithVelocity(c.sample(d - 10).value, c.sample(d).value, 10)
      }
      let {
        onStop: l
      } = this.options;
      l && l(), this.cancel()
    }
    complete() {
      let {
        resolved: e
      } = this;
      e && e.animation.finish()
    }
    cancel() {
      let {
        resolved: e
      } = this;
      e && e.animation.cancel()
    }
    static supports(e) {
      let {
        motionValue: t,
        name: i,
        repeatDelay: s,
        repeatType: r,
        damping: n,
        type: a
      } = e;
      if (!t || !t.owner || !(t.owner.current instanceof HTMLElement)) return !1;
      let {
        onUpdate: o,
        transformTemplate: l
      } = t.owner.getProps();
      return j() && i && G.has(i) && !o && !l && !s && "mirror" !== r && 0 !== n && "inertia" !== a
    }
  }
  var z = e.i(63667);
  let Y = {
      type: "spring",
      stiffness: 500,
      damping: 25,
      restSpeed: 10
    },
    q = {
      type: "keyframes",
      duration: .8
    },
    X = {
      type: "keyframes",
      ease: [.25, .1, .35, 1],
      duration: .3
    },
    H = (e, i, s, r = {}, n, c) => d => {
      let p = (0, t.getValueTransition)(r, e) || {},
        m = p.delay || r.delay || 0,
        {
          elapsed: f = 0
        } = r;
      f -= (0, o.secondsToMilliseconds)(m);
      let v = {
        keyframes: Array.isArray(s) ? s : [null, s],
        ease: "easeOut",
        velocity: i.getVelocity(),
        ...p,
        delay: -f,
        onUpdate: e => {
          i.set(e), p.onUpdate && p.onUpdate(e)
        },
        onComplete: () => {
          d(), p.onComplete && p.onComplete()
        },
        name: e,
        motionValue: i,
        element: c ? void 0 : n
      };
      ! function({
        when: e,
        delay: t,
        delayChildren: i,
        staggerChildren: s,
        staggerDirection: r,
        repeat: n,
        repeatType: a,
        repeatDelay: o,
        from: l,
        elapsed: u,
        ...h
      }) {
        return !!Object.keys(h).length
      }(p) && (v = {
        ...v,
        ...((e, {
          keyframes: t
        }) => t.length > 2 ? q : z.transformProps.has(e) ? e.startsWith("scale") ? {
          type: "spring",
          stiffness: 550,
          damping: 0 === t[1] ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        } : Y : X)(e, v)
      }), v.duration && (v.duration = (0, o.secondsToMilliseconds)(v.duration)), v.repeatDelay && (v.repeatDelay = (0, o.secondsToMilliseconds)(v.repeatDelay)), void 0 !== v.from && (v.keyframes[0] = v.from);
      let g = !1;
      if (!1 !== v.type && (0 !== v.duration || v.repeatDelay) || (v.duration = 0, 0 === v.delay && (g = !0)), (h.instantAnimationState.current || u.MotionGlobalConfig.skipAnimations) && (g = !0, v.duration = 0, v.delay = 0), g && !c && void 0 !== i.get()) {
        let e = (0, N.getFinalKeyframe)(v.keyframes, p);
        if (void 0 !== e) return l.frame.update(() => {
          v.onUpdate(e), v.onComplete()
        }), new a.GroupPlaybackControls([])
      }
      return !c && U.supports(v) ? new U(v) : new $(v)
    };

  function Z(e, a, {
    delay: o = 0,
    transitionOverride: u,
    type: h
  } = {}) {
    var c;
    let {
      transition: d = e.getDefaultTransition(),
      transitionEnd: p,
      ...m
    } = a;
    u && (d = u);
    let f = [],
      v = h && e.animationState && e.animationState.getState()[h];
    for (let s in m) {
      let a = e.getValue(s, null != (c = e.latestValues[s]) ? c : null),
        u = m[s];
      if (void 0 === u || v && function({
          protectedKeys: e,
          needsAnimating: t
        }, i) {
          let s = e.hasOwnProperty(i) && !0 !== t[i];
          return t[i] = !1, s
        }(v, s)) continue;
      let h = {
          delay: o,
          ...(0, t.getValueTransition)(d || {}, s)
        },
        p = !1;
      if (window.MotionHandoffAnimation) {
        let t = (0, n.getOptimisedAppearId)(e);
        if (t) {
          let e = window.MotionHandoffAnimation(t, s, l.frame);
          null !== e && (h.startTime = e, p = !0)
        }
      }(0, r.addValueToWillChange)(e, s), a.start(H(s, a, u, e.shouldReduceMotion && i.positionalKeys.has(s) ? {
        type: !1
      } : h, e, p));
      let g = a.animation;
      g && f.push(g)
    }
    return p && Promise.all(f).then(() => {
      l.frame.update(() => {
        p && (0, s.setTarget)(e, p)
      })
    }), f
  }
  e.s(["animateMotionValue", () => H], 62043), e.s(["animateTarget", () => Z], 53120)
}, 19918, e => {
  "use strict";
  let t = () => ({
      translate: 0,
      scale: 1,
      origin: 0,
      originPoint: 0
    }),
    i = () => ({
      x: t(),
      y: t()
    }),
    s = () => ({
      min: 0,
      max: 0
    }),
    r = () => ({
      x: s(),
      y: s()
    });
  e.s(["createBox", () => r, "createDelta", () => i])
}, 66982, 56354, 90117, 1699, e => {
  "use strict";

  function t({
    top: e,
    left: t,
    right: i,
    bottom: s
  }) {
    return {
      x: {
        min: t,
        max: i
      },
      y: {
        min: e,
        max: s
      }
    }
  }

  function i({
    x: e,
    y: t
  }) {
    return {
      top: t.min,
      right: e.max,
      bottom: t.max,
      left: e.min
    }
  }

  function s(e, t) {
    if (!t) return e;
    let i = t({
        x: e.left,
        y: e.top
      }),
      s = t({
        x: e.right,
        y: e.bottom
      });
    return {
      top: i.y,
      left: i.x,
      bottom: s.y,
      right: s.x
    }
  }
  e.s(["convertBoundingBoxToBox", () => t, "convertBoxToBoundingBox", () => i, "transformBoxPoints", () => s], 56354);
  var r = e.i(43776);

  function n(e) {
    return void 0 === e || 1 === e
  }

  function a({
    scale: e,
    scaleX: t,
    scaleY: i
  }) {
    return !n(e) || !n(t) || !n(i)
  }

  function o(e) {
    return a(e) || l(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
  }

  function l(e) {
    var t, i;
    return (t = e.x) && "0%" !== t || (i = e.y) && "0%" !== i
  }

  function u(e, t, i) {
    return i + t * (e - i)
  }

  function h(e, t, i, s, r) {
    return void 0 !== r && (e = s + r * (e - s)), s + i * (e - s) + t
  }

  function c(e, t = 0, i = 1, s, r) {
    e.min = h(e.min, t, i, s, r), e.max = h(e.max, t, i, s, r)
  }

  function d(e, {
    x: t,
    y: i
  }) {
    c(e.x, t.translate, t.scale, t.originPoint), c(e.y, i.translate, i.scale, i.originPoint)
  }

  function p(e, t, i, s = !1) {
    let r, n, a = i.length;
    if (a) {
      t.x = t.y = 1;
      for (let l = 0; l < a; l++) {
        n = (r = i[l]).projectionDelta;
        let {
          visualElement: a
        } = r.options;
        (!a || !a.props.style || "contents" !== a.props.style.display) && (s && r.options.layoutScroll && r.scroll && r !== r.root && v(e, {
          x: -r.scroll.offset.x,
          y: -r.scroll.offset.y
        }), n && (t.x *= n.x.scale, t.y *= n.y.scale, d(e, n)), s && o(r.latestValues) && v(e, r.latestValues))
      }
      t.x < 1.0000000000001 && t.x > .999999999999 && (t.x = 1), t.y < 1.0000000000001 && t.y > .999999999999 && (t.y = 1)
    }
  }

  function m(e, t) {
    e.min = e.min + t, e.max = e.max + t
  }

  function f(e, t, i, s, n = .5) {
    let a = (0, r.mixNumber)(e.min, e.max, n);
    c(e, t, i, a, s)
  }

  function v(e, t) {
    f(e.x, t.x, t.scaleX, t.scale, t.originX), f(e.y, t.y, t.scaleY, t.scale, t.originY)
  }

  function g(e, i) {
    return t(s(e.getBoundingClientRect(), i))
  }

  function y(e, t, i) {
    let s = g(e, i),
      {
        scroll: r
      } = t;
    return r && (m(s.x, r.offset.x), m(s.y, r.offset.y)), s
  }
  e.s(["has2DTranslate", () => l, "hasScale", () => a, "hasTransform", () => o], 90117), e.s(["applyBoxDelta", () => d, "applyTreeDeltas", () => p, "scalePoint", () => u, "transformBox", () => v, "translateAxis", () => m], 1699), e.s(["measurePageBox", () => y, "measureViewportBox", () => g], 66982)
}, 24958, e => {
  "use strict";
  let t = {};

  function i(e) {
    Object.assign(t, e)
  }
  e.s(["addScaleCorrector", () => i, "scaleCorrectors", () => t])
}, 85246, e => {
  "use strict";
  var t = e.i(56127),
    i = e.i(5724),
    s = e.i(62043);

  function r(e, r, n) {
    let a = (0, i.isMotionValue)(e) ? e : (0, t.motionValue)(e);
    return a.start((0, s.animateMotionValue)("", a, r, n)), a.animation
  }
  e.s(["animateSingleValue", () => r])
}, 52427, e => {
  "use strict";

  function t(e) {
    return e instanceof SVGElement && "svg" !== e.tagName
  }
  e.s(["isSVGElement", () => t])
}, 62582, e => {
  "use strict";
  var t = e.i(469),
    i = e.i(82381),
    s = e.i(10288);

  function r(e) {
    return (0, t.isAnimationControls)(e.animate) || s.variantProps.some(t => (0, i.isVariantLabel)(e[t]))
  }

  function n(e) {
    return !!(r(e) || e.variants)
  }
  e.s(["isControllingVariants", () => r, "isVariantNode", () => n])
}, 33645, e => {
  "use strict";
  let t = "undefined" != typeof window;
  e.s(["isBrowser", () => t])
}, 53306, e => {
  "use strict";
  let t = {
      animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
      exit: ["exit"],
      drag: ["drag", "dragControls"],
      focus: ["whileFocus"],
      hover: ["whileHover", "onHoverStart", "onHoverEnd"],
      tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
      pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
      inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
      layout: ["layout", "layoutId"]
    },
    i = {};
  for (let e in t) i[e] = {
    isEnabled: i => t[e].some(e => !!i[e])
  };
  e.s(["featureDefinitions", () => i])
}, 95719, 39083, e => {
  "use strict";
  var t = e.i(58136);
  let i = (e, t) => t && "number" == typeof e ? t.transform(e) : e;
  var s = e.i(97045),
    r = e.i(63667);
  let n = {
      x: "translateX",
      y: "translateY",
      z: "translateZ",
      transformPerspective: "perspective"
    },
    a = r.transformPropOrder.length;

  function o(e, o, l) {
    let {
      style: u,
      vars: h,
      transformOrigin: c
    } = e, d = !1, p = !1;
    for (let e in o) {
      let n = o[e];
      if (r.transformProps.has(e)) {
        d = !0;
        continue
      }
      if ((0, t.isCSSVariableName)(e)) {
        h[e] = n;
        continue
      } {
        let t = i(n, s.numberValueTypes[e]);
        e.startsWith("origin") ? (p = !0, c[e] = t) : u[e] = t
      }
    }
    if (!o.transform && (d || l ? u.transform = function(e, t, o) {
        let l = "",
          u = !0;
        for (let h = 0; h < a; h++) {
          let a = r.transformPropOrder[h],
            c = e[a];
          if (void 0 === c) continue;
          let d = !0;
          if (!(d = "number" == typeof c ? c === +!!a.startsWith("scale") : 0 === parseFloat(c)) || o) {
            let e = i(c, s.numberValueTypes[a]);
            if (!d) {
              u = !1;
              let t = n[a] || a;
              l += `${t}(${e}) `
            }
            o && (t[a] = e)
          }
        }
        return l = l.trim(), o ? l = o(t, u ? "" : l) : u && (l = "none"), l
      }(o, e.transform, l) : u.transform && (u.transform = "none")), p) {
      let {
        originX: e = "50%",
        originY: t = "50%",
        originZ: i = 0
      } = c;
      u.transformOrigin = `${e} ${t} ${i}`
    }
  }
  e.s(["buildHTMLStyles", () => o], 39083);
  var l = e.i(5997);
  let u = {
      offset: "stroke-dashoffset",
      array: "stroke-dasharray"
    },
    h = {
      offset: "strokeDashoffset",
      array: "strokeDasharray"
    };

  function c(e, t, i) {
    return "string" == typeof e ? e : l.px.transform(t + i * e)
  }

  function d(e, {
    attrX: t,
    attrY: i,
    attrScale: s,
    originX: r,
    originY: n,
    pathLength: a,
    pathSpacing: d = 1,
    pathOffset: p = 0,
    ...m
  }, f, v) {
    let g, y;
    if (o(e, m, v), f) {
      e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
      return
    }
    e.attrs = e.style, e.style = {};
    let {
      attrs: b,
      style: T,
      dimensions: V
    } = e;
    b.transform && (V && (T.transform = b.transform), delete b.transform), V && (void 0 !== r || void 0 !== n || T.transform) && (g = c(void 0 !== r ? r : .5, V.x, V.width), y = c(void 0 !== n ? n : .5, V.y, V.height), T.transformOrigin = `${g} ${y}`), void 0 !== t && (b.x = t), void 0 !== i && (b.y = i), void 0 !== s && (b.scale = s), void 0 !== a && function(e, t, i = 1, s = 0, r = !0) {
      e.pathLength = 1;
      let n = r ? u : h;
      e[n.offset] = l.px.transform(-s);
      let a = l.px.transform(t),
        o = l.px.transform(i);
      e[n.array] = `${a} ${o}`
    }(b, a, d, p, !1)
  }
  e.s(["buildSVGAttrs", () => d], 95719)
}, 45750, 79516, e => {
  "use strict";
  let t = e => "string" == typeof e && "svg" === e.toLowerCase();

  function i(e, {
    style: t,
    vars: i
  }, s, r) {
    for (let n in Object.assign(e.style, t, r && r.getProjectionStyles(s)), i) e.style.setProperty(n, i[n])
  }
  e.s(["isSVGTag", () => t], 45750), e.s(["renderHTML", () => i], 79516)
}, 83404, e => {
  "use strict";
  let t = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
  e.s(["camelCaseAttributes", () => t])
}, 39810, e => {
  "use strict";
  var t = e.i(48425),
    i = e.i(79516),
    s = e.i(83404);

  function r(e, r, n, a) {
    for (let n in (0, i.renderHTML)(e, r, void 0, a), r.attrs) e.setAttribute(s.camelCaseAttributes.has(n) ? n : (0, t.camelToDash)(n), r.attrs[n])
  }
  e.s(["renderSVG", () => r])
}, 14741, 45692, 55145, e => {
  "use strict";
  var t = e.i(5724),
    i = e.i(63667),
    s = e.i(24958);

  function r(e, {
    layout: t,
    layoutId: r
  }) {
    return i.transformProps.has(e) || e.startsWith("origin") || (t || void 0 !== r) && (!!s.scaleCorrectors[e] || "opacity" === e)
  }

  function n(e, i, s) {
    var n;
    let {
      style: a
    } = e, o = {};
    for (let l in a)((0, t.isMotionValue)(a[l]) || i.style && (0, t.isMotionValue)(i.style[l]) || r(l, e) || (null == (n = null == s ? void 0 : s.getValue(l)) ? void 0 : n.liveStyle) !== void 0) && (o[l] = a[l]);
    return o
  }

  function a(e, s, r) {
    let a = n(e, s, r);
    for (let r in e)((0, t.isMotionValue)(e[r]) || (0, t.isMotionValue)(s[r])) && (a[-1 !== i.transformPropOrder.indexOf(r) ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r] = e[r]);
    return a
  }
  e.s(["isForcedMotionValue", () => r], 45692), e.s(["scrapeMotionValuesFromProps", () => n], 55145), e.s(["scrapeMotionValuesFromProps", () => a], 14741)
}, 96545, 21179, 67040, e => {
  "use strict";
  var t = e.i(33645);
  let i = {
      current: null
    },
    s = {
      current: !1
    };

  function r() {
    if (s.current = !0, t.isBrowser)
      if (window.matchMedia) {
        let e = window.matchMedia("(prefers-reduced-motion)"),
          t = () => i.current = e.matches;
        e.addListener(t), t()
      } else i.current = !1
  }
  e.s(["hasReducedMotionListener", () => s, "prefersReducedMotion", () => i], 21179), e.s(["initPrefersReducedMotion", () => r], 96545);
  var n = e.i(33954),
    a = e.i(31934),
    o = e.i(66594),
    l = e.i(57268);
  let u = [...o.dimensionValueTypes, n.color, a.complex],
    h = e => u.find((0, l.testValueType)(e));
  e.s(["findValueType", () => h], 67040)
}, 22004, e => {
  "use strict";
  let t = new WeakMap;
  e.s(["visualElementStore", () => t])
}, 44696, 63137, e => {
  "use strict";
  e.i(39057);
  var t = e.i(97404),
    i = e.i(53306),
    s = e.i(19918),
    r = e.i(66322),
    n = e.i(44114),
    a = e.i(96545),
    o = e.i(21179),
    l = e.i(71185),
    u = e.i(56127),
    h = e.i(31934),
    c = e.i(5724),
    d = e.i(16419),
    p = e.i(67040),
    m = e.i(63667),
    f = e.i(22004),
    v = e.i(62582),
    g = e.i(1172),
    y = e.i(432),
    b = e.i(4399);
  let T = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
  class V {
    scrapeMotionValuesFromProps(e, t, i) {
      return {}
    }
    constructor({
      parent: e,
      props: i,
      presenceContext: s,
      reducedMotionConfig: r,
      blockInitialAnimation: n,
      visualState: a
    }, o = {}) {
      this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = g.KeyframeResolver, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
      }, this.renderScheduledAt = 0, this.scheduleRender = () => {
        let e = t.time.now();
        this.renderScheduledAt < e && (this.renderScheduledAt = e, b.frame.render(this.render, !1, !0))
      };
      const {
        latestValues: l,
        renderState: u,
        onUpdate: h
      } = a;
      this.onUpdate = h, this.latestValues = l, this.baseTarget = {
        ...l
      }, this.initialValues = i.initial ? {
        ...l
      } : {}, this.renderState = u, this.parent = e, this.props = i, this.presenceContext = s, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.options = o, this.blockInitialAnimation = !!n, this.isControllingVariants = (0, v.isControllingVariants)(i), this.isVariantNode = (0, v.isVariantNode)(i), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
      const {
        willChange: d,
        ...p
      } = this.scrapeMotionValuesFromProps(i, {}, this);
      for (const e in p) {
        const t = p[e];
        void 0 !== l[e] && (0, c.isMotionValue)(t) && t.set(l[e], !1)
      }
    }
    mount(e) {
      this.current = e, f.visualElementStore.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), o.hasReducedMotionListener.current || (0, a.initPrefersReducedMotion)(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || o.prefersReducedMotion.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
      for (let e in f.visualElementStore.delete(this.current), this.projection && this.projection.unmount(), (0, b.cancelFrame)(this.notifyUpdate), (0, b.cancelFrame)(this.render), this.valueSubscriptions.forEach(e => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[e].clear();
      for (let e in this.features) {
        let t = this.features[e];
        t && (t.unmount(), t.isMounted = !1)
      }
      this.current = null
    }
    bindToMotionValue(e, t) {
      let i;
      this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
      let s = m.transformProps.has(e),
        r = t.on("change", t => {
          this.latestValues[e] = t, this.props.onUpdate && b.frame.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0)
        }),
        n = t.on("renderRequest", this.scheduleRender);
      window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
        r(), n(), i && i(), t.owner && t.stop()
      })
    }
    sortNodePosition(e) {
      return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
    }
    updateFeatures() {
      let e = "animation";
      for (e in i.featureDefinitions) {
        let t = i.featureDefinitions[e];
        if (!t) continue;
        let {
          isEnabled: s,
          Feature: r
        } = t;
        if (!this.features[e] && r && s(this.props) && (this.features[e] = new r(this)), this.features[e]) {
          let t = this.features[e];
          t.isMounted ? t.update() : (t.mount(), t.isMounted = !0)
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, s.createBox)()
    }
    getStaticValue(e) {
      return this.latestValues[e]
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t
    }
    update(e, t) {
      (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
      for (let t = 0; t < T.length; t++) {
        let i = T[t];
        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
        let s = e["on" + i];
        s && (this.propEventSubscriptions[i] = this.on(i, s))
      }
      this.prevMotionValues = function(e, t, i) {
        for (let s in t) {
          let r = t[s],
            n = i[s];
          if ((0, c.isMotionValue)(r)) e.addValue(s, r);
          else if ((0, c.isMotionValue)(n)) e.addValue(s, (0, u.motionValue)(r, {
            owner: e
          }));
          else if (n !== r)
            if (e.hasValue(s)) {
              let t = e.getValue(s);
              !0 === t.liveStyle ? t.jump(r) : t.hasAnimated || t.set(r)
            } else {
              let t = e.getStaticValue(s);
              e.addValue(s, (0, u.motionValue)(void 0 !== t ? t : r, {
                owner: e
              }))
            }
        }
        for (let s in i) void 0 === t[s] && e.removeValue(s);
        return t
      }(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this)
    }
    getProps() {
      return this.props
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
      return this.props.transition
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint
    }
    getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(e) {
      let t = this.getClosestVariantNode();
      if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e)
    }
    addValue(e, t) {
      let i = this.values.get(e);
      t !== i && (i && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get())
    }
    removeValue(e) {
      this.values.delete(e);
      let t = this.valueSubscriptions.get(e);
      t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
      return this.values.has(e)
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e]) return this.props.values[e];
      let i = this.values.get(e);
      return void 0 === i && void 0 !== t && (i = (0, u.motionValue)(null === t ? void 0 : t, {
        owner: this
      }), this.addValue(e, i)), i
    }
    readValue(e, t) {
      var i;
      let s = void 0 === this.latestValues[e] && this.current ? null != (i = this.getBaseTargetFromProps(this.props, e)) ? i : this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e];
      return null != s && ("string" == typeof s && ((0, r.isNumericalString)(s) || (0, n.isZeroValueString)(s)) ? s = parseFloat(s) : !(0, p.findValueType)(s) && h.complex.test(t) && (s = (0, d.getAnimatableNone)(e, t)), this.setBaseTarget(e, (0, c.isMotionValue)(s) ? s.get() : s)), (0, c.isMotionValue)(s) ? s.get() : s
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t
    }
    getBaseTarget(e) {
      var t;
      let i, {
        initial: s
      } = this.props;
      if ("string" == typeof s || "object" == typeof s) {
        let r = (0, y.resolveVariantFromProps)(this.props, s, null == (t = this.presenceContext) ? void 0 : t.custom);
        r && (i = r[e])
      }
      if (s && void 0 !== i) return i;
      let r = this.getBaseTargetFromProps(this.props, e);
      return void 0 === r || (0, c.isMotionValue)(r) ? void 0 !== this.initialValues[e] && void 0 === i ? void 0 : this.baseTarget[e] : r
    }
    on(e, t) {
      return this.events[e] || (this.events[e] = new l.SubscriptionManager), this.events[e].add(t)
    }
    notify(e, ...t) {
      this.events[e] && this.events[e].notify(...t)
    }
  }
  e.s(["VisualElement", () => V], 63137);
  var w = e.i(50609);
  class S extends V {
    constructor() {
      super(...arguments), this.KeyframeResolver = w.DOMKeyframesResolver
    }
    sortInstanceNodePosition(e, t) {
      return 2 & e.compareDocumentPosition(t) ? 1 : -1
    }
    getBaseTargetFromProps(e, t) {
      return e.style ? e.style[t] : void 0
    }
    removeValueFromRenderState(e, {
      vars: t,
      style: i
    }) {
      delete t[e], delete i[e]
    }
    handleChildMotionValue() {
      this.childSubscription && (this.childSubscription(), delete this.childSubscription);
      let {
        children: e
      } = this.props;
      (0, c.isMotionValue)(e) && (this.childSubscription = e.on("change", e => {
        this.current && (this.current.textContent = `${e}`)
      }))
    }
  }
  e.s(["DOMVisualElement", () => S], 44696)
}, 92046, e => {
  "use strict";
  var t = e.i(66982),
    i = e.i(44696),
    s = e.i(58136),
    r = e.i(78923),
    n = e.i(39083),
    a = e.i(63667),
    o = e.i(79516),
    l = e.i(55145);
  class u extends i.DOMVisualElement {
    constructor() {
      super(...arguments), this.type = "html", this.renderInstance = o.renderHTML
    }
    readValueFromInstance(e, t) {
      if (a.transformProps.has(t)) {
        let e = (0, r.getDefaultValueType)(t);
        return e && e.default || 0
      } {
        let i = window.getComputedStyle(e),
          r = ((0, s.isCSSVariableName)(t) ? i.getPropertyValue(t) : i[t]) || 0;
        return "string" == typeof r ? r.trim() : r
      }
    }
    measureInstanceViewportBox(e, {
      transformPagePoint: i
    }) {
      return (0, t.measureViewportBox)(e, i)
    }
    build(e, t, i) {
      (0, n.buildHTMLStyles)(e, t, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, t, i) {
      return (0, l.scrapeMotionValuesFromProps)(e, t, i)
    }
  }
  e.s(["HTMLVisualElement", () => u])
}, 30532, e => {
  "use strict";
  var t = e.i(19918),
    i = e.i(44696),
    s = e.i(48425),
    r = e.i(78923),
    n = e.i(63667),
    a = e.i(95719),
    o = e.i(83404),
    l = e.i(45750),
    u = e.i(39810),
    h = e.i(14741);
  class c extends i.DOMVisualElement {
    constructor() {
      super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = t.createBox
    }
    getBaseTargetFromProps(e, t) {
      return e[t]
    }
    readValueFromInstance(e, t) {
      if (n.transformProps.has(t)) {
        let e = (0, r.getDefaultValueType)(t);
        return e && e.default || 0
      }
      return t = o.camelCaseAttributes.has(t) ? t : (0, s.camelToDash)(t), e.getAttribute(t)
    }
    scrapeMotionValuesFromProps(e, t, i) {
      return (0, h.scrapeMotionValuesFromProps)(e, t, i)
    }
    build(e, t, i) {
      (0, a.buildSVGAttrs)(e, t, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(e, t, i, s) {
      (0, u.renderSVG)(e, t, i, s)
    }
    mount(e) {
      this.isSVGTag = (0, l.isSVGTag)(e.tagName), super.mount(e)
    }
  }
  e.s(["SVGVisualElement", () => c])
}]);