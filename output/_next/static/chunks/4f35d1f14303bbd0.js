(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 35691, 8812, 3363, 56298, 43533, 53899, 50772, t => {
  "use strict";
  t.i(39057);
  var e, i, s, o = t.i(469),
    r = t.i(27566);

  function n(t, e) {
    if (!Array.isArray(e)) return !1;
    let i = e.length;
    if (i !== t.length) return !1;
    for (let s = 0; s < i; s++)
      if (e[s] !== t[s]) return !1;
    return !0
  }
  var a = t.i(82381),
    l = t.i(58237),
    h = t.i(10288),
    u = t.i(53120);

  function c(t, e, i = {}) {
    var s;
    let o = (0, l.resolveVariant)(t, e, "exit" === i.type ? null == (s = t.presenceContext) ? void 0 : s.custom : void 0),
      {
        transition: r = t.getDefaultTransition() || {}
      } = o || {};
    i.transitionOverride && (r = i.transitionOverride);
    let n = o ? () => Promise.all((0, u.animateTarget)(t, o, i)) : () => Promise.resolve(),
      a = t.variantChildren && t.variantChildren.size ? (s = 0) => {
        let {
          delayChildren: o = 0,
          staggerChildren: n,
          staggerDirection: a
        } = r;
        return function(t, e, i = 0, s = 0, o = 1, r) {
          let n = [],
            a = (t.variantChildren.size - 1) * s,
            l = 1 === o ? (t = 0) => t * s : (t = 0) => a - t * s;
          return Array.from(t.variantChildren).sort(d).forEach((t, s) => {
            t.notify("AnimationStart", e), n.push(c(t, e, {
              ...r,
              delay: i + l(s)
            }).then(() => t.notify("AnimationComplete", e)))
          }), Promise.all(n)
        }(t, e, o + s, n, a, i)
      } : () => Promise.resolve(),
      {
        when: h
      } = r;
    if (!h) return Promise.all([n(), a(i.delay)]);
    {
      let [t, e] = "beforeChildren" === h ? [n, a] : [a, n];
      return t().then(() => e())
    }
  }

  function d(t, e) {
    return t.sortNodePosition(e)
  }
  let m = h.variantProps.length,
    p = [...h.variantPriorityOrder].reverse(),
    f = h.variantPriorityOrder.length;

  function v(t = !1) {
    return {
      isActive: t,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    }
  }

  function g() {
    return {
      animate: v(!0),
      whileInView: v(),
      whileHover: v(),
      whileTap: v(),
      whileDrag: v(),
      whileFocus: v(),
      exit: v()
    }
  }
  class y {
    constructor(t) {
      this.isMounted = !1, this.node = t
    }
    update() {}
  }
  let x = 0;
  t.i(87514);
  var P = t.i(48027),
    T = t.i(42896);
  t.i(11889);
  var D = t.i(87652),
    A = t.i(68484),
    S = t.i(74040);

  function w(t, e, i, s = {
    passive: !0
  }) {
    return t.addEventListener(e, i, s), () => t.removeEventListener(e, i)
  }

  function E(t) {
    return {
      point: {
        x: t.pageX,
        y: t.pageY
      }
    }
  }

  function C(t, e, i, s) {
    return w(t, e, t => (0, A.isPrimaryPointer)(t) && i(t, E(t)), s)
  }
  let b = (t, e) => Math.abs(t - e);
  var V = t.i(73030),
    R = t.i(4399);
  class B {
    constructor(t, e, {
      transformPagePoint: i,
      contextWindow: s,
      dragSnapToOrigin: o = !1
    } = {}) {
      if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
          var t, e;
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          let i = L(this.lastMoveEventInfo, this.history),
            s = null !== this.startEvent,
            o = (t = i.offset, e = {
              x: 0,
              y: 0
            }, Math.sqrt(b(t.x, e.x) ** 2 + b(t.y, e.y) ** 2) >= 3);
          if (!s && !o) return;
          let {
            point: r
          } = i, {
            timestamp: n
          } = R.frameData;
          this.history.push({
            ...r,
            timestamp: n
          });
          let {
            onStart: a,
            onMove: l
          } = this.handlers;
          s || (a && a(this.lastMoveEvent, i), this.startEvent = this.lastMoveEvent), l && l(this.lastMoveEvent, i)
        }, this.handlePointerMove = (t, e) => {
          this.lastMoveEvent = t, this.lastMoveEventInfo = M(e, this.transformPagePoint), R.frame.update(this.updatePoint, !0)
        }, this.handlePointerUp = (t, e) => {
          this.end();
          let {
            onEnd: i,
            onSessionEnd: s,
            resumeAnimation: o
          } = this.handlers;
          if (this.dragSnapToOrigin && o && o(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          let r = L("pointercancel" === t.type ? this.lastMoveEventInfo : M(e, this.transformPagePoint), this.history);
          this.startEvent && i && i(t, r), s && s(t, r)
        }, !(0, A.isPrimaryPointer)(t)) return;
      this.dragSnapToOrigin = o, this.handlers = e, this.transformPagePoint = i, this.contextWindow = s || window;
      const r = M(E(t), this.transformPagePoint),
        {
          point: n
        } = r,
        {
          timestamp: a
        } = R.frameData;
      this.history = [{
        ...n,
        timestamp: a
      }];
      const {
        onSessionStart: l
      } = e;
      l && l(t, L(r, this.history)), this.removeListeners = (0, V.pipe)(C(this.contextWindow, "pointermove", this.handlePointerMove), C(this.contextWindow, "pointerup", this.handlePointerUp), C(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
      this.handlers = t
    }
    end() {
      this.removeListeners && this.removeListeners(), (0, R.cancelFrame)(this.updatePoint)
    }
  }

  function M(t, e) {
    return e ? {
      point: e(t.point)
    } : t
  }

  function j(t, e) {
    return {
      x: t.x - e.x,
      y: t.y - e.y
    }
  }

  function L({
    point: t
  }, e) {
    return {
      point: t,
      delta: j(t, k(e)),
      offset: j(t, e[0]),
      velocity: function(t, e) {
        if (t.length < 2) return {
          x: 0,
          y: 0
        };
        let i = t.length - 1,
          s = null,
          o = k(t);
        for (; i >= 0 && (s = t[i], !(o.timestamp - s.timestamp > (0, S.secondsToMilliseconds)(.1)));) i--;
        if (!s) return {
          x: 0,
          y: 0
        };
        let r = (0, S.millisecondsToSeconds)(o.timestamp - s.timestamp);
        if (0 === r) return {
          x: 0,
          y: 0
        };
        let n = {
          x: (o.x - s.x) / r,
          y: (o.y - s.y) / r
        };
        return n.x === 1 / 0 && (n.x = 0), n.y === 1 / 0 && (n.y = 0), n
      }(e, .1)
    }
  }

  function k(t) {
    return t[t.length - 1]
  }

  function F(t) {
    return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
  }
  var U = t.i(13890),
    O = t.i(43776);

  function N(t) {
    return t.max - t.min
  }

  function I(t, e, i, s = .5) {
    t.origin = s, t.originPoint = (0, O.mixNumber)(e.min, e.max, t.origin), t.scale = N(i) / N(e), t.translate = (0, O.mixNumber)(i.min, i.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
  }

  function W(t, e, i, s) {
    I(t.x, e.x, i.x, s ? s.originX : void 0), I(t.y, e.y, i.y, s ? s.originY : void 0)
  }

  function $(t, e, i) {
    t.min = i.min + e.min, t.max = t.min + N(e)
  }

  function H(t, e, i) {
    t.min = e.min - i.min, t.max = t.min + N(e)
  }

  function z(t, e, i) {
    H(t.x, e.x, i.x), H(t.y, e.y, i.y)
  }
  var G = t.i(21123);

  function X(t, e, i) {
    return {
      min: void 0 !== e ? t.min + e : void 0,
      max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
    }
  }

  function Y(t, e) {
    let i = e.min - t.min,
      s = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([i, s] = [s, i]), {
      min: i,
      max: s
    }
  }

  function K(t, e, i) {
    return {
      min: _(t, e),
      max: _(t, i)
    }
  }

  function _(t, e) {
    return "number" == typeof t ? t : t[e] || 0
  }
  var q = t.i(19918);

  function Z(t) {
    return [t("x"), t("y")]
  }
  var J = t.i(66982),
    Q = t.i(56354),
    tt = t.i(5997),
    te = t.i(62043);
  let ti = ({
    current: t
  }) => t ? t.ownerDocument.defaultView : null;
  var ts = t.i(36540);
  let to = new WeakMap;
  class tr {
    constructor(t) {
      this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
        x: 0,
        y: 0
      }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = (0, q.createBox)(), this.visualElement = t
    }
    start(t, {
      snapToCursor: e = !1
    } = {}) {
      let {
        presenceContext: i
      } = this.visualElement;
      if (i && !1 === i.isPresent) return;
      let s = t => {
          let {
            dragSnapToOrigin: i
          } = this.getProps();
          i ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor(E(t).point)
        },
        o = (t, e) => {
          let {
            drag: i,
            dragPropagation: s,
            onDragStart: o
          } = this.getProps();
          if (i && !s && (this.openDragLock && this.openDragLock(), this.openDragLock = (0, D.setDragLock)(i), !this.openDragLock)) return;
          this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Z(t => {
            let e = this.getAxisMotionValue(t).get() || 0;
            if (tt.percent.test(e)) {
              let {
                projection: i
              } = this.visualElement;
              if (i && i.layout) {
                let s = i.layout.layoutBox[t];
                s && (e = N(s) * (parseFloat(e) / 100))
              }
            }
            this.originPoint[t] = e
          }), o && R.frame.postRender(() => o(t, e)), (0, ts.addValueToWillChange)(this.visualElement, "transform");
          let {
            animationState: r
          } = this.visualElement;
          r && r.setActive("whileDrag", !0)
        },
        r = (t, e) => {
          let {
            dragPropagation: i,
            dragDirectionLock: s,
            onDirectionLock: o,
            onDrag: r
          } = this.getProps();
          if (!i && !this.openDragLock) return;
          let {
            offset: n
          } = e;
          if (s && null === this.currentDirection) {
            this.currentDirection = function(t, e = 10) {
              let i = null;
              return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
            }(n), null !== this.currentDirection && o && o(this.currentDirection);
            return
          }
          this.updateAxis("x", e.point, n), this.updateAxis("y", e.point, n), this.visualElement.render(), r && r(t, e)
        },
        n = (t, e) => this.stop(t, e),
        a = () => Z(t => {
          var e;
          return "paused" === this.getAnimationState(t) && (null == (e = this.getAxisMotionValue(t).animation) ? void 0 : e.play())
        }),
        {
          dragSnapToOrigin: l
        } = this.getProps();
      this.panSession = new B(t, {
        onSessionStart: s,
        onStart: o,
        onMove: r,
        onSessionEnd: n,
        resumeAnimation: a
      }, {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: l,
        contextWindow: ti(this.visualElement)
      })
    }
    stop(t, e) {
      let i = this.isDragging;
      if (this.cancel(), !i) return;
      let {
        velocity: s
      } = e;
      this.startAnimation(s);
      let {
        onDragEnd: o
      } = this.getProps();
      o && R.frame.postRender(() => o(t, e))
    }
    cancel() {
      this.isDragging = !1;
      let {
        projection: t,
        animationState: e
      } = this.visualElement;
      t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
      let {
        dragPropagation: i
      } = this.getProps();
      !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1)
    }
    updateAxis(t, e, i) {
      let {
        drag: s
      } = this.getProps();
      if (!i || !tn(t, s, this.currentDirection)) return;
      let o = this.getAxisMotionValue(t),
        r = this.originPoint[t] + i[t];
      this.constraints && this.constraints[t] && (r = function(t, {
        min: e,
        max: i
      }, s) {
        return void 0 !== e && t < e ? t = s ? (0, O.mixNumber)(e, t, s.min) : Math.max(t, e) : void 0 !== i && t > i && (t = s ? (0, O.mixNumber)(i, t, s.max) : Math.min(t, i)), t
      }(r, this.constraints[t], this.elastic[t])), o.set(r)
    }
    resolveConstraints() {
      var t;
      let {
        dragConstraints: e,
        dragElastic: i
      } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null == (t = this.visualElement.projection) ? void 0 : t.layout, o = this.constraints;
      e && F(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && s ? this.constraints = function(t, {
        top: e,
        left: i,
        bottom: s,
        right: o
      }) {
        return {
          x: X(t.x, i, o),
          y: X(t.y, e, s)
        }
      }(s.layoutBox, e) : this.constraints = !1, this.elastic = function(t = .35) {
        return !1 === t ? t = 0 : !0 === t && (t = .35), {
          x: K(t, "left", "right"),
          y: K(t, "top", "bottom")
        }
      }(i), o !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && Z(t => {
        var e, i;
        let o;
        !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = (e = s.layoutBox[t], i = this.constraints[t], o = {}, void 0 !== i.min && (o.min = i.min - e.min), void 0 !== i.max && (o.max = i.max - e.min), o))
      })
    }
    resolveRefConstraints() {
      var t;
      let {
        dragConstraints: e,
        onMeasureDragConstraints: i
      } = this.getProps();
      if (!e || !F(e)) return !1;
      let s = e.current;
      (0, T.invariant)(null !== s, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
      let {
        projection: o
      } = this.visualElement;
      if (!o || !o.layout) return !1;
      let r = (0, J.measurePageBox)(s, o.root, this.visualElement.getTransformPagePoint()),
        n = (t = o.layout.layoutBox, {
          x: Y(t.x, r.x),
          y: Y(t.y, r.y)
        });
      if (i) {
        let t = i((0, Q.convertBoxToBoundingBox)(n));
        this.hasMutatedConstraints = !!t, t && (n = (0, Q.convertBoundingBoxToBox)(t))
      }
      return n
    }
    startAnimation(t) {
      let {
        drag: e,
        dragMomentum: i,
        dragElastic: s,
        dragTransition: o,
        dragSnapToOrigin: r,
        onDragTransitionEnd: n
      } = this.getProps(), a = this.constraints || {};
      return Promise.all(Z(n => {
        if (!tn(n, e, this.currentDirection)) return;
        let l = a && a[n] || {};
        r && (l = {
          min: 0,
          max: 0
        });
        let h = {
          type: "inertia",
          velocity: i ? t[n] : 0,
          bounceStiffness: s ? 200 : 1e6,
          bounceDamping: s ? 40 : 1e7,
          timeConstant: 750,
          restDelta: 1,
          restSpeed: 10,
          ...o,
          ...l
        };
        return this.startAxisValueAnimation(n, h)
      })).then(n)
    }
    startAxisValueAnimation(t, e) {
      let i = this.getAxisMotionValue(t);
      return (0, ts.addValueToWillChange)(this.visualElement, t), i.start((0, te.animateMotionValue)(t, i, 0, e, this.visualElement, !1))
    }
    stopAnimation() {
      Z(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
      Z(t => {
        var e;
        return null == (e = this.getAxisMotionValue(t).animation) ? void 0 : e.pause()
      })
    }
    getAnimationState(t) {
      var e;
      return null == (e = this.getAxisMotionValue(t).animation) ? void 0 : e.state
    }
    getAxisMotionValue(t) {
      let e = `_drag${t.toUpperCase()}`,
        i = this.visualElement.getProps();
      return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
      Z(e => {
        let {
          drag: i
        } = this.getProps();
        if (!tn(e, i, this.currentDirection)) return;
        let {
          projection: s
        } = this.visualElement, o = this.getAxisMotionValue(e);
        if (s && s.layout) {
          let {
            min: i,
            max: r
          } = s.layout.layoutBox[e];
          o.set(t[e] - (0, O.mixNumber)(i, r, .5))
        }
      })
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let {
        drag: t,
        dragConstraints: e
      } = this.getProps(), {
        projection: i
      } = this.visualElement;
      if (!F(e) || !i || !this.constraints) return;
      this.stopAnimation();
      let s = {
        x: 0,
        y: 0
      };
      Z(t => {
        let e = this.getAxisMotionValue(t);
        if (e && !1 !== this.constraints) {
          var i, o;
          let r, n, a, l = e.get();
          s[t] = (i = {
            min: l,
            max: l
          }, o = this.constraints[t], r = .5, n = N(i), (a = N(o)) > n ? r = (0, U.progress)(o.min, o.max - n, i.min) : n > a && (r = (0, U.progress)(i.min, i.max - a, o.min)), (0, G.clamp)(0, 1, r))
        }
      });
      let {
        transformTemplate: o
      } = this.visualElement.getProps();
      this.visualElement.current.style.transform = o ? o({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), Z(e => {
        if (!tn(e, t, null)) return;
        let i = this.getAxisMotionValue(e),
          {
            min: o,
            max: r
          } = this.constraints[e];
        i.set((0, O.mixNumber)(o, r, s[e]))
      })
    }
    addListeners() {
      if (!this.visualElement.current) return;
      to.set(this.visualElement, this);
      let t = C(this.visualElement.current, "pointerdown", t => {
          let {
            drag: e,
            dragListener: i = !0
          } = this.getProps();
          e && i && this.start(t)
        }),
        e = () => {
          let {
            dragConstraints: t
          } = this.getProps();
          F(t) && t.current && (this.constraints = this.resolveRefConstraints())
        },
        {
          projection: i
        } = this.visualElement,
        s = i.addEventListener("measure", e);
      i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), R.frame.read(e);
      let o = w(window, "resize", () => this.scalePositionWithinConstraints()),
        r = i.addEventListener("didUpdate", ({
          delta: t,
          hasLayoutChanged: e
        }) => {
          this.isDragging && e && (Z(e => {
            let i = this.getAxisMotionValue(e);
            i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
          }), this.visualElement.render())
        });
      return () => {
        o(), t(), s(), r && r()
      }
    }
    getProps() {
      let t = this.visualElement.getProps(),
        {
          drag: e = !1,
          dragDirectionLock: i = !1,
          dragPropagation: s = !1,
          dragConstraints: o = !1,
          dragElastic: r = .35,
          dragMomentum: n = !0
        } = t;
      return {
        ...t,
        drag: e,
        dragDirectionLock: i,
        dragPropagation: s,
        dragConstraints: o,
        dragElastic: r,
        dragMomentum: n
      }
    }
  }

  function tn(t, e, i) {
    return (!0 === e || e === t) && (null === i || i === t)
  }
  let ta = t => (e, i) => {
    t && R.frame.postRender(() => t(e, i))
  };
  var tl = t.i(48277),
    th = t.i(30668);
  let tu = (0, th.createContext)(null);

  function tc(t = !0) {
    let e = (0, th.useContext)(tu);
    if (null === e) return [!0, null];
    let {
      isPresent: i,
      onExitComplete: s,
      register: o
    } = e, r = (0, th.useId)();
    (0, th.useEffect)(() => {
      t && o(r)
    }, [t]);
    let n = (0, th.useCallback)(() => t && s && s(r), [r, s, t]);
    return !i && s ? [!1, n] : [!0]
  }
  t.s(["PresenceContext", () => tu], 8812), t.s(["usePresence", () => tc], 3363);
  let td = (0, th.createContext)({});
  t.s(["LayoutGroupContext", () => td], 56298);
  let tm = (0, th.createContext)({}),
    tp = {
      hasAnimatedSinceResize: !0,
      hasEverUpdated: !1
    };

  function tf(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
  }
  let tv = {
    correct: (t, e) => {
      if (!e.target) return t;
      if ("string" == typeof t)
        if (!tt.px.test(t)) return t;
        else t = parseFloat(t);
      let i = tf(t, e.target.x),
        s = tf(t, e.target.y);
      return `${i}% ${s}%`
    }
  };
  var tg = t.i(31934),
    ty = t.i(24958);
  let {
    schedule: tx,
    cancel: tP
  } = (0, t.i(47476).createRenderBatcher)(queueMicrotask, !1);
  class tT extends th.Component {
    componentDidMount() {
      let {
        visualElement: t,
        layoutGroup: e,
        switchLayoutGroup: i,
        layoutId: s
      } = this.props, {
        projection: o
      } = t;
      (0, ty.addScaleCorrector)(tA), o && (e.group && e.group.add(o), i && i.register && s && i.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
        this.safeToRemove()
      }), o.setOptions({
        ...o.options,
        onExitComplete: () => this.safeToRemove()
      })), tp.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
      let {
        layoutDependency: e,
        visualElement: i,
        drag: s,
        isPresent: o
      } = this.props, r = i.projection;
      return r && (r.isPresent = o, s || t.layoutDependency !== e || void 0 === e ? r.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? r.promote() : r.relegate() || R.frame.postRender(() => {
        let t = r.getStack();
        t && t.members.length || this.safeToRemove()
      }))), null
    }
    componentDidUpdate() {
      let {
        projection: t
      } = this.props.visualElement;
      t && (t.root.didUpdate(), tx.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove()
      }))
    }
    componentWillUnmount() {
      let {
        visualElement: t,
        layoutGroup: e,
        switchLayoutGroup: i
      } = this.props, {
        projection: s
      } = t;
      s && (s.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(s), i && i.deregister && i.deregister(s))
    }
    safeToRemove() {
      let {
        safeToRemove: t
      } = this.props;
      t && t()
    }
    render() {
      return null
    }
  }

  function tD(t) {
    let [e, i] = tc(), s = (0, th.useContext)(td);
    return (0, tl.jsx)(tT, {
      ...t,
      layoutGroup: s,
      switchLayoutGroup: (0, th.useContext)(tm),
      isPresent: e,
      safeToRemove: i
    })
  }
  let tA = {
    borderRadius: {
      ...tv,
      applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: tv,
    borderTopRightRadius: tv,
    borderBottomLeftRadius: tv,
    borderBottomRightRadius: tv,
    boxShadow: {
      correct: (t, {
        treeScale: e,
        projectionDelta: i
      }) => {
        let s = tg.complex.parse(t);
        if (s.length > 5) return t;
        let o = tg.complex.createTransformer(t),
          r = +("number" != typeof s[0]),
          n = i.x.scale * e.x,
          a = i.y.scale * e.y;
        s[0 + r] /= n, s[1 + r] /= a;
        let l = (0, O.mixNumber)(n, a, .5);
        return "number" == typeof s[2 + r] && (s[2 + r] /= l), "number" == typeof s[3 + r] && (s[3 + r] /= l), o(s)
      }
    }
  };
  var tS = t.i(20448),
    tw = t.i(85246),
    tE = t.i(20614),
    tC = t.i(97404),
    tb = t.i(52427),
    tV = t.i(97025);
  let tR = (t, e) => t.depth - e.depth;
  class tB {
    constructor() {
      this.children = [], this.isDirty = !1
    }
    add(t) {
      (0, tV.addUniqueItem)(this.children, t), this.isDirty = !0
    }
    remove(t) {
      (0, tV.removeItem)(this.children, t), this.isDirty = !0
    }
    forEach(t) {
      this.isDirty && this.children.sort(tR), this.isDirty = !1, this.children.forEach(t)
    }
  }
  var tM = t.i(71185),
    tj = t.i(7505),
    tL = t.i(5724);

  function tk(t) {
    let e = (0, tL.isMotionValue)(t) ? t.get() : t;
    return (0, tj.isCustomValue)(e) ? e.toValue() : e
  }
  var tF = t.i(12926);
  let tU = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    tO = tU.length,
    tN = t => "string" == typeof t ? parseFloat(t) : t,
    tI = t => "number" == typeof t || tt.px.test(t);

  function tW(t, e) {
    return void 0 !== t[e] ? t[e] : t.borderRadius
  }
  let t$ = tz(0, .5, tF.circOut),
    tH = tz(.5, .95, P.noop);

  function tz(t, e, i) {
    return s => s < t ? 0 : s > e ? 1 : i((0, U.progress)(t, e, s))
  }

  function tG(t, e) {
    t.min = e.min, t.max = e.max
  }

  function tX(t, e) {
    tG(t.x, e.x), tG(t.y, e.y)
  }

  function tY(t, e) {
    t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
  }
  var tK = t.i(1699);

  function t_(t, e, i, s, o) {
    return t -= e, t = (0, tK.scalePoint)(t, 1 / i, s), void 0 !== o && (t = (0, tK.scalePoint)(t, 1 / o, s)), t
  }

  function tq(t, e, [i, s, o], r, n) {
    ! function(t, e = 0, i = 1, s = .5, o, r = t, n = t) {
      if (tt.percent.test(e) && (e = parseFloat(e), e = (0, O.mixNumber)(n.min, n.max, e / 100) - n.min), "number" != typeof e) return;
      let a = (0, O.mixNumber)(r.min, r.max, s);
      t === r && (a -= e), t.min = t_(t.min, e, i, a, o), t.max = t_(t.max, e, i, a, o)
    }(t, e[i], e[s], e[o], e.scale, r, n)
  }
  let tZ = ["x", "scaleX", "originX"],
    tJ = ["y", "scaleY", "originY"];

  function tQ(t, e, i, s) {
    tq(t.x, e, tZ, i ? i.x : void 0, s ? s.x : void 0), tq(t.y, e, tJ, i ? i.y : void 0, s ? s.y : void 0)
  }

  function t0(t) {
    return 0 === t.translate && 1 === t.scale
  }

  function t1(t) {
    return t0(t.x) && t0(t.y)
  }

  function t3(t, e) {
    return t.min === e.min && t.max === e.max
  }

  function t5(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
  }

  function t2(t, e) {
    return t5(t.x, e.x) && t5(t.y, e.y)
  }

  function t4(t) {
    return N(t.x) / N(t.y)
  }

  function t9(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
  }
  class t6 {
    constructor() {
      this.members = []
    }
    add(t) {
      (0, tV.addUniqueItem)(this.members, t), t.scheduleRender()
    }
    remove(t) {
      if ((0, tV.removeItem)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
        let t = this.members[this.members.length - 1];
        t && this.promote(t)
      }
    }
    relegate(t) {
      let e, i = this.members.findIndex(e => t === e);
      if (0 === i) return !1;
      for (let t = i; t >= 0; t--) {
        let i = this.members[t];
        if (!1 !== i.isPresent) {
          e = i;
          break
        }
      }
      return !!e && (this.promote(e), !0)
    }
    promote(t, e) {
      let i = this.lead;
      if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
        i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
        let {
          crossfade: s
        } = t.options;
        !1 === s && i.hide()
      }
    }
    exitAnimationComplete() {
      this.members.forEach(t => {
        let {
          options: e,
          resumingFrom: i
        } = t;
        e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
      })
    }
    scheduleRender() {
      this.members.forEach(t => {
        t.instance && t.scheduleRender(!1)
      })
    }
    removeLeadSnapshot() {
      this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
  }
  var t7 = t.i(90117);
  let t8 = {
      type: "projectionFrame",
      totalNodes: 0,
      resolvedTargetDeltas: 0,
      recalculatedProjection: 0
    },
    et = "undefined" != typeof window && void 0 !== window.MotionDebug,
    ee = ["", "X", "Y", "Z"],
    ei = {
      visibility: "hidden"
    },
    es = 0;

  function eo(t, e, i, s) {
    let {
      latestValues: o
    } = e;
    o[t] && (i[t] = o[t], e.setStaticValue(t, 0), s && (s[t] = 0))
  }

  function er({
    attachResizeListener: t,
    defaultParent: e,
    measureScroll: i,
    checkIsScrollRoot: s,
    resetTransform: o
  }) {
    return class {
      constructor(t = {}, i = null == e ? void 0 : e()) {
        this.id = es++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
          x: 1,
          y: 1
        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
          this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
        }, this.updateProjection = () => {
          this.projectionUpdateScheduled = !1, et && (t8.totalNodes = t8.resolvedTargetDeltas = t8.recalculatedProjection = 0), this.nodes.forEach(el), this.nodes.forEach(ef), this.nodes.forEach(ev), this.nodes.forEach(eh), et && window.MotionDebug.record(t8)
        }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
        this.root === this && (this.nodes = new tB)
      }
      addEventListener(t, e) {
        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new tM.SubscriptionManager), this.eventHandlers.get(t).add(e)
      }
      notifyListeners(t, ...e) {
        let i = this.eventHandlers.get(t);
        i && i.notify(...e)
      }
      hasListeners(t) {
        return this.eventHandlers.has(t)
      }
      mount(e, i = this.root.hasTreeAnimated) {
        if (this.instance) return;
        this.isSVG = (0, tb.isSVGElement)(e), this.instance = e;
        let {
          layoutId: s,
          layout: o,
          visualElement: r
        } = this.options;
        if (r && !r.current && r.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), i && (o || s) && (this.isLayoutDirty = !0), t) {
          let i, s = () => this.root.updateBlockedByResize = !1;
          t(e, () => {
            let t, e;
            this.root.updateBlockedByResize = !0, i && i(), t = tC.time.now(), e = ({
              timestamp: i
            }) => {
              let o = i - t;
              o >= 250 && ((0, R.cancelFrame)(e), s(o - 250))
            }, R.frame.read(e, !0), i = () => (0, R.cancelFrame)(e), tp.hasAnimatedSinceResize && (tp.hasAnimatedSinceResize = !1, this.nodes.forEach(ep))
          })
        }
        s && this.root.registerSharedNode(s, this), !1 !== this.options.animate && r && (s || o) && this.addEventListener("didUpdate", ({
          delta: t,
          hasLayoutChanged: e,
          hasRelativeTargetChanged: i,
          layout: s
        }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0, this.relativeTarget = void 0;
            return
          }
          let o = this.options.transition || r.getDefaultTransition() || eD,
            {
              onLayoutAnimationStart: n,
              onLayoutAnimationComplete: a
            } = r.getProps(),
            l = !this.targetLayout || !t2(this.targetLayout, s) || i,
            h = !e && i;
          if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || h || e && (l || !this.currentAnimation)) {
            this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, h);
            let e = {
              ...(0, tS.getValueTransition)(o, "layout"),
              onPlay: n,
              onComplete: a
            };
            (r.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
          } else e || ep(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
          this.targetLayout = s
        })
      }
      unmount() {
        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
        let t = this.getStack();
        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, R.cancelFrame)(this.updateProjection)
      }
      blockUpdate() {
        this.updateManuallyBlocked = !0
      }
      unblockUpdate() {
        this.updateManuallyBlocked = !1
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize
      }
      isTreeAnimationBlocked() {
        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
      }
      startUpdate() {
        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(eg), this.animationId++)
      }
      getTransformTemplate() {
        let {
          visualElement: t
        } = this.options;
        return t && t.getProps().transformTemplate
      }
      willUpdate(t = !0) {
        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
          this.options.onExitComplete && this.options.onExitComplete();
          return
        }
        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
            if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
            let {
              visualElement: i
            } = e.options;
            if (!i) return;
            let s = (0, tE.getOptimisedAppearId)(i);
            if (window.MotionHasOptimisedAnimation(s, "transform")) {
              let {
                layout: t,
                layoutId: i
              } = e.options;
              window.MotionCancelOptimisedAnimation(s, "transform", R.frame, !(t || i))
            }
            let {
              parent: o
            } = e;
            o && !o.hasCheckedOptimisedAppear && t(o)
          }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
        this.isLayoutDirty = !0;
        for (let t = 0; t < this.path.length; t++) {
          let e = this.path[t];
          e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
        }
        let {
          layoutId: e,
          layout: i
        } = this.options;
        if (void 0 === e && !i) return;
        let s = this.getTransformTemplate();
        this.prevTransformTemplateValue = s ? s(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
      }
      update() {
        if (this.updateScheduled = !1, this.isUpdateBlocked()) {
          this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ec);
          return
        }
        this.isUpdating || this.nodes.forEach(ed), this.isUpdating = !1, this.nodes.forEach(em), this.nodes.forEach(en), this.nodes.forEach(ea), this.clearAllSnapshots();
        let t = tC.time.now();
        R.frameData.delta = (0, G.clamp)(0, 1e3 / 60, t - R.frameData.timestamp), R.frameData.timestamp = t, R.frameData.isProcessing = !0, R.frameSteps.update.process(R.frameData), R.frameSteps.preRender.process(R.frameData), R.frameSteps.render.process(R.frameData), R.frameData.isProcessing = !1
      }
      didUpdate() {
        this.updateScheduled || (this.updateScheduled = !0, tx.read(this.scheduleUpdate))
      }
      clearAllSnapshots() {
        this.nodes.forEach(eu), this.sharedNodes.forEach(ey)
      }
      scheduleUpdateProjection() {
        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, R.frame.preRender(this.updateProjection, !1, !0))
      }
      scheduleCheckAfterUnmount() {
        R.frame.postRender(() => {
          this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
        })
      }
      updateSnapshot() {
        !this.snapshot && this.instance && (this.snapshot = this.measure())
      }
      updateLayout() {
        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
        if (this.resumeFrom && !this.resumeFrom.instance)
          for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
        let t = this.layout;
        this.layout = this.measure(!1), this.layoutCorrected = (0, q.createBox)(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
        let {
          visualElement: e
        } = this.options;
        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
      }
      updateScroll(t = "measure") {
        let e = !!(this.options.layoutScroll && this.instance);
        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e) {
          let e = s(this.instance);
          this.scroll = {
            animationId: this.root.animationId,
            phase: t,
            isRoot: e,
            offset: i(this.instance),
            wasRoot: this.scroll ? this.scroll.isRoot : e
          }
        }
      }
      resetTransform() {
        if (!o) return;
        let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
          e = this.projectionDelta && !t1(this.projectionDelta),
          i = this.getTransformTemplate(),
          s = i ? i(this.latestValues, "") : void 0,
          r = s !== this.prevTransformTemplateValue;
        t && (e || (0, t7.hasTransform)(this.latestValues) || r) && (o(this.instance, s), this.shouldResetTransform = !1, this.scheduleRender())
      }
      measure(t = !0) {
        var e;
        let i = this.measurePageBox(),
          s = this.removeElementScroll(i);
        return t && (s = this.removeTransform(s)), ew((e = s).x), ew(e.y), {
          animationId: this.root.animationId,
          measuredBox: i,
          layoutBox: s,
          latestValues: {},
          source: this.id
        }
      }
      measurePageBox() {
        var t;
        let {
          visualElement: e
        } = this.options;
        if (!e) return (0, q.createBox)();
        let i = e.measureViewportBox();
        if (!((null == (t = this.scroll) ? void 0 : t.wasRoot) || this.path.some(eC))) {
          let {
            scroll: t
          } = this.root;
          t && ((0, tK.translateAxis)(i.x, t.offset.x), (0, tK.translateAxis)(i.y, t.offset.y))
        }
        return i
      }
      removeElementScroll(t) {
        var e;
        let i = (0, q.createBox)();
        if (tX(i, t), null == (e = this.scroll) ? void 0 : e.wasRoot) return i;
        for (let e = 0; e < this.path.length; e++) {
          let s = this.path[e],
            {
              scroll: o,
              options: r
            } = s;
          s !== this.root && o && r.layoutScroll && (o.wasRoot && tX(i, t), (0, tK.translateAxis)(i.x, o.offset.x), (0, tK.translateAxis)(i.y, o.offset.y))
        }
        return i
      }
      applyTransform(t, e = !1) {
        let i = (0, q.createBox)();
        tX(i, t);
        for (let t = 0; t < this.path.length; t++) {
          let s = this.path[t];
          !e && s.options.layoutScroll && s.scroll && s !== s.root && (0, tK.transformBox)(i, {
            x: -s.scroll.offset.x,
            y: -s.scroll.offset.y
          }), (0, t7.hasTransform)(s.latestValues) && (0, tK.transformBox)(i, s.latestValues)
        }
        return (0, t7.hasTransform)(this.latestValues) && (0, tK.transformBox)(i, this.latestValues), i
      }
      removeTransform(t) {
        let e = (0, q.createBox)();
        tX(e, t);
        for (let t = 0; t < this.path.length; t++) {
          let i = this.path[t];
          if (!i.instance || !(0, t7.hasTransform)(i.latestValues)) continue;
          (0, t7.hasScale)(i.latestValues) && i.updateSnapshot();
          let s = (0, q.createBox)();
          tX(s, i.measurePageBox()), tQ(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, s)
        }
        return (0, t7.hasTransform)(this.latestValues) && tQ(e, this.latestValues), e
      }
      setTargetDelta(t) {
        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
      }
      setOptions(t) {
        this.options = {
          ...this.options,
          ...t,
          crossfade: void 0 === t.crossfade || t.crossfade
        }
      }
      clearMeasurements() {
        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
      }
      forceRelativeParentToResolveTarget() {
        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== R.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
      }
      resolveTargetDelta(t = !1) {
        var e, i, s, o;
        let r = this.getLead();
        this.isProjectionDirty || (this.isProjectionDirty = r.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = r.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = r.isSharedProjectionDirty);
        let n = !!this.resumingFrom || this !== r;
        if (!(t || n && this.isSharedProjectionDirty || this.isProjectionDirty || (null == (e = this.parent) ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
        let {
          layout: a,
          layoutId: l
        } = this.options;
        if (this.layout && (a || l)) {
          if (this.resolvedRelativeTargetAt = R.frameData.timestamp, !this.targetDelta && !this.relativeTarget) {
            let t = this.getClosestProjectingParent();
            t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, q.createBox)(), this.relativeTargetOrigin = (0, q.createBox)(), z(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), tX(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
          }
          if (this.relativeTarget || this.targetDelta) {
            if ((this.target || (this.target = (0, q.createBox)(), this.targetWithTransforms = (0, q.createBox)()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), i = this.target, s = this.relativeTarget, o = this.relativeParent.target, $(i.x, s.x, o.x), $(i.y, s.y, o.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : tX(this.target, this.layout.layoutBox), (0, tK.applyBoxDelta)(this.target, this.targetDelta)) : tX(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
              this.attemptToResolveRelativeTarget = !1;
              let t = this.getClosestProjectingParent();
              t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, q.createBox)(), this.relativeTargetOrigin = (0, q.createBox)(), z(this.relativeTargetOrigin, this.target, t.target), tX(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
            }
            et && t8.resolvedTargetDeltas++
          }
        }
      }
      getClosestProjectingParent() {
        if (!(!this.parent || (0, t7.hasScale)(this.parent.latestValues) || (0, t7.has2DTranslate)(this.parent.latestValues)))
          if (this.parent.isProjecting()) return this.parent;
          else return this.parent.getClosestProjectingParent()
      }
      isProjecting() {
        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
      }
      calcProjection() {
        var t;
        let e = this.getLead(),
          i = !!this.resumingFrom || this !== e,
          s = !0;
        if ((this.isProjectionDirty || (null == (t = this.parent) ? void 0 : t.isProjectionDirty)) && (s = !1), i && (this.isSharedProjectionDirty || this.isTransformDirty) && (s = !1), this.resolvedRelativeTargetAt === R.frameData.timestamp && (s = !1), s) return;
        let {
          layout: o,
          layoutId: r
        } = this.options;
        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(o || r)) return;
        tX(this.layoutCorrected, this.layout.layoutBox);
        let n = this.treeScale.x,
          a = this.treeScale.y;
        (0, tK.applyTreeDeltas)(this.layoutCorrected, this.treeScale, this.path, i), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox, e.targetWithTransforms = (0, q.createBox)());
        let {
          target: l
        } = e;
        if (!l) {
          this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
          return
        }
        this.projectionDelta && this.prevProjectionDelta ? (tY(this.prevProjectionDelta.x, this.projectionDelta.x), tY(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), W(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.treeScale.x === n && this.treeScale.y === a && t9(this.projectionDelta.x, this.prevProjectionDelta.x) && t9(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), et && t8.recalculatedProjection++
      }
      hide() {
        this.isVisible = !1
      }
      show() {
        this.isVisible = !0
      }
      scheduleRender(t = !0) {
        var e;
        if (null == (e = this.options.visualElement) || e.scheduleRender(), t) {
          let t = this.getStack();
          t && t.scheduleRender()
        }
        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
      }
      createProjectionDeltas() {
        this.prevProjectionDelta = (0, q.createDelta)(), this.projectionDelta = (0, q.createDelta)(), this.projectionDeltaWithTransform = (0, q.createDelta)()
      }
      setAnimationOrigin(t, e = !1) {
        let i, s = this.snapshot,
          o = s ? s.latestValues : {},
          r = {
            ...this.latestValues
          },
          n = (0, q.createDelta)();
        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
        let a = (0, q.createBox)(),
          l = (s ? s.source : void 0) !== (this.layout ? this.layout.source : void 0),
          h = this.getStack(),
          u = !h || h.members.length <= 1,
          c = !!(l && !u && !0 === this.options.crossfade && !this.path.some(eT));
        this.animationProgress = 0, this.mixTargetDelta = e => {
          let s = e / 1e3;
          if (ex(n.x, t.x, s), ex(n.y, t.y, s), this.setTargetDelta(n), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
            var h, d, m, p, f, v;
            z(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), m = this.relativeTarget, p = this.relativeTargetOrigin, f = a, v = s, eP(m.x, p.x, f.x, v), eP(m.y, p.y, f.y, v), i && (h = this.relativeTarget, d = i, t3(h.x, d.x) && t3(h.y, d.y)) && (this.isProjectionDirty = !1), i || (i = (0, q.createBox)()), tX(i, this.relativeTarget)
          }
          l && (this.animationValues = r, function(t, e, i, s, o, r) {
            o ? (t.opacity = (0, O.mixNumber)(0, void 0 !== i.opacity ? i.opacity : 1, t$(s)), t.opacityExit = (0, O.mixNumber)(void 0 !== e.opacity ? e.opacity : 1, 0, tH(s))) : r && (t.opacity = (0, O.mixNumber)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, s));
            for (let o = 0; o < tO; o++) {
              let r = `border${tU[o]}Radius`,
                n = tW(e, r),
                a = tW(i, r);
              (void 0 !== n || void 0 !== a) && (n || (n = 0), a || (a = 0), 0 === n || 0 === a || tI(n) === tI(a) ? (t[r] = Math.max((0, O.mixNumber)(tN(n), tN(a), s), 0), (tt.percent.test(a) || tt.percent.test(n)) && (t[r] += "%")) : t[r] = a)
            }(e.rotate || i.rotate) && (t.rotate = (0, O.mixNumber)(e.rotate || 0, i.rotate || 0, s))
          }(r, o, this.latestValues, s, c, u)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = s
        }, this.mixTargetDelta(1e3 * !!this.options.layoutRoot)
      }
      startAnimation(t) {
        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, R.cancelFrame)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = R.frame.update(() => {
          tp.hasAnimatedSinceResize = !0, this.currentAnimation = (0, tw.animateSingleValue)(0, 1e3, {
            ...t,
            onUpdate: e => {
              this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
            },
            onComplete: () => {
              t.onComplete && t.onComplete(), this.completeAnimation()
            }
          }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
        })
      }
      completeAnimation() {
        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
        let t = this.getStack();
        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
      }
      finishAnimation() {
        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
      }
      applyTransformsToTarget() {
        let t = this.getLead(),
          {
            targetWithTransforms: e,
            target: i,
            layout: s,
            latestValues: o
          } = t;
        if (e && i && s) {
          if (this !== t && this.layout && s && eE(this.options.animationType, this.layout.layoutBox, s.layoutBox)) {
            i = this.target || (0, q.createBox)();
            let e = N(this.layout.layoutBox.x);
            i.x.min = t.target.x.min, i.x.max = i.x.min + e;
            let s = N(this.layout.layoutBox.y);
            i.y.min = t.target.y.min, i.y.max = i.y.min + s
          }
          tX(e, i), (0, tK.transformBox)(e, o), W(this.projectionDeltaWithTransform, this.layoutCorrected, e, o)
        }
      }
      registerSharedNode(t, e) {
        this.sharedNodes.has(t) || this.sharedNodes.set(t, new t6), this.sharedNodes.get(t).add(e);
        let i = e.options.initialPromotionConfig;
        e.promote({
          transition: i ? i.transition : void 0,
          preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
        })
      }
      isLead() {
        let t = this.getStack();
        return !t || t.lead === this
      }
      getLead() {
        var t;
        let {
          layoutId: e
        } = this.options;
        return e && (null == (t = this.getStack()) ? void 0 : t.lead) || this
      }
      getPrevLead() {
        var t;
        let {
          layoutId: e
        } = this.options;
        return e ? null == (t = this.getStack()) ? void 0 : t.prevLead : void 0
      }
      getStack() {
        let {
          layoutId: t
        } = this.options;
        if (t) return this.root.sharedNodes.get(t)
      }
      promote({
        needsReset: t,
        transition: e,
        preserveFollowOpacity: i
      } = {}) {
        let s = this.getStack();
        s && s.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
          transition: e
        })
      }
      relegate() {
        let t = this.getStack();
        return !!t && t.relegate(this)
      }
      resetSkewAndRotation() {
        let {
          visualElement: t
        } = this.options;
        if (!t) return;
        let e = !1,
          {
            latestValues: i
          } = t;
        if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0), !e) return;
        let s = {};
        i.z && eo("z", t, s, this.animationValues);
        for (let e = 0; e < ee.length; e++) eo(`rotate${ee[e]}`, t, s, this.animationValues), eo(`skew${ee[e]}`, t, s, this.animationValues);
        for (let e in t.render(), s) t.setStaticValue(e, s[e]), this.animationValues && (this.animationValues[e] = s[e]);
        t.scheduleRender()
      }
      getProjectionStyles(t) {
        var e, i;
        if (!this.instance || this.isSVG) return;
        if (!this.isVisible) return ei;
        let s = {
            visibility: ""
          },
          o = this.getTransformTemplate();
        if (this.needsReset) return this.needsReset = !1, s.opacity = "", s.pointerEvents = tk(null == t ? void 0 : t.pointerEvents) || "", s.transform = o ? o(this.latestValues, "") : "none", s;
        let r = this.getLead();
        if (!this.projectionDelta || !this.layout || !r.target) {
          let e = {};
          return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = tk(null == t ? void 0 : t.pointerEvents) || ""), this.hasProjected && !(0, t7.hasTransform)(this.latestValues) && (e.transform = o ? o({}, "") : "none", this.hasProjected = !1), e
        }
        let n = r.animationValues || r.latestValues;
        this.applyTransformsToTarget(), s.transform = function(t, e, i) {
          let s = "",
            o = t.x.translate / e.x,
            r = t.y.translate / e.y,
            n = (null == i ? void 0 : i.z) || 0;
          if ((o || r || n) && (s = `translate3d(${o}px, ${r}px, ${n}px) `), (1 !== e.x || 1 !== e.y) && (s += `scale(${1/e.x}, ${1/e.y}) `), i) {
            let {
              transformPerspective: t,
              rotate: e,
              rotateX: o,
              rotateY: r,
              skewX: n,
              skewY: a
            } = i;
            t && (s = `perspective(${t}px) ${s}`), e && (s += `rotate(${e}deg) `), o && (s += `rotateX(${o}deg) `), r && (s += `rotateY(${r}deg) `), n && (s += `skewX(${n}deg) `), a && (s += `skewY(${a}deg) `)
          }
          let a = t.x.scale * e.x,
            l = t.y.scale * e.y;
          return (1 !== a || 1 !== l) && (s += `scale(${a}, ${l})`), s || "none"
        }(this.projectionDeltaWithTransform, this.treeScale, n), o && (s.transform = o(n, s.transform));
        let {
          x: a,
          y: l
        } = this.projectionDelta;
        for (let t in s.transformOrigin = `${100*a.origin}% ${100*l.origin}% 0`, r.animationValues ? s.opacity = r === this ? null != (i = null != (e = n.opacity) ? e : this.latestValues.opacity) ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : n.opacityExit : s.opacity = r === this ? void 0 !== n.opacity ? n.opacity : "" : void 0 !== n.opacityExit ? n.opacityExit : 0, ty.scaleCorrectors) {
          if (void 0 === n[t]) continue;
          let {
            correct: e,
            applyTo: i
          } = ty.scaleCorrectors[t], o = "none" === s.transform ? n[t] : e(n[t], r);
          if (i) {
            let t = i.length;
            for (let e = 0; e < t; e++) s[i[e]] = o
          } else s[t] = o
        }
        return this.options.layoutId && (s.pointerEvents = r === this ? tk(null == t ? void 0 : t.pointerEvents) || "" : "none"), s
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0
      }
      resetTree() {
        this.root.nodes.forEach(t => {
          var e;
          return null == (e = t.currentAnimation) ? void 0 : e.stop()
        }), this.root.nodes.forEach(ec), this.root.sharedNodes.clear()
      }
    }
  }

  function en(t) {
    t.updateLayout()
  }

  function ea(t) {
    var e;
    let i = (null == (e = t.resumeFrom) ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
      let {
        layoutBox: e,
        measuredBox: s
      } = t.layout, {
        animationType: o
      } = t.options, r = i.source !== t.layout.source;
      "size" === o ? Z(t => {
        let s = r ? i.measuredBox[t] : i.layoutBox[t],
          o = N(s);
        s.min = e[t].min, s.max = s.min + o
      }) : eE(o, i.layoutBox, e) && Z(s => {
        let o = r ? i.measuredBox[s] : i.layoutBox[s],
          n = N(e[s]);
        o.max = o.min + n, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[s].max = t.relativeTarget[s].min + n)
      });
      let n = (0, q.createDelta)();
      W(n, e, i.layoutBox);
      let a = (0, q.createDelta)();
      r ? W(a, t.applyTransform(s, !0), i.measuredBox) : W(a, e, i.layoutBox);
      let l = !t1(n),
        h = !1;
      if (!t.resumeFrom) {
        let s = t.getClosestProjectingParent();
        if (s && !s.resumeFrom) {
          let {
            snapshot: o,
            layout: r
          } = s;
          if (o && r) {
            let n = (0, q.createBox)();
            z(n, i.layoutBox, o.layoutBox);
            let a = (0, q.createBox)();
            z(a, e, r.layoutBox), t2(n, a) || (h = !0), s.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = n, t.relativeParent = s)
          }
        }
      }
      t.notifyListeners("didUpdate", {
        layout: e,
        snapshot: i,
        delta: a,
        layoutDelta: n,
        hasLayoutChanged: l,
        hasRelativeTargetChanged: h
      })
    } else if (t.isLead()) {
      let {
        onExitComplete: e
      } = t.options;
      e && e()
    }
    t.options.transition = void 0
  }

  function el(t) {
    et && t8.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
  }

  function eh(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
  }

  function eu(t) {
    t.clearSnapshot()
  }

  function ec(t) {
    t.clearMeasurements()
  }

  function ed(t) {
    t.isLayoutDirty = !1
  }

  function em(t) {
    let {
      visualElement: e
    } = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
  }

  function ep(t) {
    t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
  }

  function ef(t) {
    t.resolveTargetDelta()
  }

  function ev(t) {
    t.calcProjection()
  }

  function eg(t) {
    t.resetSkewAndRotation()
  }

  function ey(t) {
    t.removeLeadSnapshot()
  }

  function ex(t, e, i) {
    t.translate = (0, O.mixNumber)(e.translate, 0, i), t.scale = (0, O.mixNumber)(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
  }

  function eP(t, e, i, s) {
    t.min = (0, O.mixNumber)(e.min, i.min, s), t.max = (0, O.mixNumber)(e.max, i.max, s)
  }

  function eT(t) {
    return t.animationValues && void 0 !== t.animationValues.opacityExit
  }
  let eD = {
      duration: .45,
      ease: [.4, 0, .1, 1]
    },
    eA = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
    eS = eA("applewebkit/") && !eA("chrome/") ? Math.round : P.noop;

  function ew(t) {
    t.min = eS(t.min), t.max = eS(t.max)
  }

  function eE(t, e, i) {
    return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(t4(e) - t4(i)))
  }

  function eC(t) {
    var e;
    return t !== t.root && (null == (e = t.scroll) ? void 0 : e.wasRoot)
  }
  let eb = er({
      attachResizeListener: (t, e) => w(t, "resize", e),
      measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
      }),
      checkIsScrollRoot: () => !0
    }),
    eV = {
      current: void 0
    },
    eR = er({
      measureScroll: t => ({
        x: t.scrollLeft,
        y: t.scrollTop
      }),
      defaultParent: () => {
        if (!eV.current) {
          let t = new eb({});
          t.mount(window), t.setOptions({
            layoutScroll: !0
          }), eV.current = t
        }
        return eV.current
      },
      resetTransform: (t, e) => {
        t.style.transform = void 0 !== e ? e : "none"
      },
      checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
    });
  var eB = t.i(71741);

  function eM(t, e, i) {
    let {
      props: s
    } = t;
    t.animationState && s.whileHover && t.animationState.setActive("whileHover", "Start" === i);
    let o = s["onHover" + i];
    o && R.frame.postRender(() => o(e, E(e)))
  }
  var ej = t.i(90282);

  function eL(t, e, i) {
    let {
      props: s
    } = t;
    t.animationState && s.whileTap && t.animationState.setActive("whileTap", "Start" === i);
    let o = s["onTap" + ("End" === i ? "" : i)];
    o && R.frame.postRender(() => o(e, E(e)))
  }
  let ek = new WeakMap,
    eF = new WeakMap,
    eU = t => {
      let e = ek.get(t.target);
      e && e(t)
    },
    eO = t => {
      t.forEach(eU)
    },
    eN = {
      some: 0,
      all: 1
    },
    eI = (0, th.createContext)({
      strict: !1
    }),
    eW = (0, th.createContext)({
      transformPagePoint: t => t,
      isStatic: !1,
      reducedMotion: "never"
    });
  t.s(["MotionConfigContext", () => eW], 43533);
  let e$ = (0, th.createContext)({});
  var eH = t.i(62582);

  function ez(t) {
    return Array.isArray(t) ? t.join(" ") : t
  }
  var eG = t.i(33645),
    eX = t.i(53306);
  let eY = Symbol.for("motionComponentSymbol"),
    eK = eG.isBrowser ? th.useLayoutEffect : th.useEffect;
  t.s(["useIsomorphicLayoutEffect", () => eK], 53899);
  var e_ = t.i(60076);
  let eq = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

  function eZ(t) {
    if ("string" != typeof t || t.includes("-"));
    else if (eq.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
    return !1
  }
  var eJ = t.i(432);

  function eQ(t) {
    let e = (0, th.useRef)(null);
    return null === e.current && (e.current = t()), e.current
  }
  t.s(["useConstant", () => eQ], 50772);
  let e0 = t => (e, i) => {
    let s = (0, th.useContext)(e$),
      r = (0, th.useContext)(tu),
      n = () => (function({
        scrapeMotionValuesFromProps: t,
        createRenderState: e,
        onUpdate: i
      }, s, r, n) {
        let a = {
          latestValues: function(t, e, i, s) {
            let r = {},
              n = s(t, {});
            for (let t in n) r[t] = tk(n[t]);
            let {
              initial: a,
              animate: l
            } = t, h = (0, eH.isControllingVariants)(t), u = (0, eH.isVariantNode)(t);
            e && u && !h && !1 !== t.inherit && (void 0 === a && (a = e.initial), void 0 === l && (l = e.animate));
            let c = !!i && !1 === i.initial,
              d = (c = c || !1 === a) ? l : a;
            if (d && "boolean" != typeof d && !(0, o.isAnimationControls)(d)) {
              let e = Array.isArray(d) ? d : [d];
              for (let i = 0; i < e.length; i++) {
                let s = (0, eJ.resolveVariantFromProps)(t, e[i]);
                if (s) {
                  let {
                    transitionEnd: t,
                    transition: e,
                    ...i
                  } = s;
                  for (let t in i) {
                    let e = i[t];
                    if (Array.isArray(e)) {
                      let t = c ? e.length - 1 : 0;
                      e = e[t]
                    }
                    null !== e && (r[t] = e)
                  }
                  for (let e in t) r[e] = t[e]
                }
              }
            }
            return r
          }(s, r, n, t),
          renderState: e()
        };
        return i && (a.onMount = t => i({
          props: s,
          current: t,
          ...a
        }), a.onUpdate = t => i(t)), a
      })(t, e, s, r);
    return i ? n() : eQ(n)
  };
  var e1 = t.i(63667),
    e3 = t.i(95719);
  let e5 = () => ({
      style: {},
      transform: {},
      transformOrigin: {},
      vars: {}
    }),
    e2 = () => ({
      ...e5(),
      attrs: {}
    });
  var e4 = t.i(45750),
    e9 = t.i(39810),
    e6 = t.i(14741);
  let e7 = ["x", "y", "width", "height", "cx", "cy", "r"],
    e8 = {
      useVisualState: e0({
        scrapeMotionValuesFromProps: e6.scrapeMotionValuesFromProps,
        createRenderState: e2,
        onUpdate: ({
          props: t,
          prevProps: e,
          current: i,
          renderState: s,
          latestValues: o
        }) => {
          if (!i) return;
          let r = !!t.drag;
          if (!r) {
            for (let t in o)
              if (e1.transformProps.has(t)) {
                r = !0;
                break
              }
          }
          if (!r) return;
          let n = !e;
          if (e)
            for (let i = 0; i < e7.length; i++) {
              let s = e7[i];
              t[s] !== e[s] && (n = !0)
            }
          n && R.frame.read(() => {
            try {
              s.dimensions = "function" == typeof i.getBBox ? i.getBBox() : i.getBoundingClientRect()
            } catch (t) {
              s.dimensions = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
              }
            }
            R.frame.render(() => {
              (0, e3.buildSVGAttrs)(s, o, (0, e4.isSVGTag)(i.tagName), t.transformTemplate), (0, e9.renderSVG)(i, s)
            })
          })
        }
      })
    },
    it = {
      useVisualState: e0({
        scrapeMotionValuesFromProps: t.i(55145).scrapeMotionValuesFromProps,
        createRenderState: e5
      })
    };
  var ie = t.i(45692),
    ii = t.i(39083);

  function is(t, e, i) {
    for (let s in e)(0, tL.isMotionValue)(e[s]) || (0, ie.isForcedMotionValue)(s, i) || (t[s] = e[s])
  }
  let io = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

  function ir(t) {
    return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || io.has(t)
  }
  let ia = t => !ir(t);
  try {
    (e = (() => {
      let t = Error("Cannot find module '@emotion/is-prop-valid'");
      throw t.code = "MODULE_NOT_FOUND", t
    })().default) && (ia = t => t.startsWith("on") ? !ir(t) : e(t))
  } catch (t) {}
  var il = t.i(92046),
    ih = t.i(30532);
  let iu = function(t) {
    if ("undefined" == typeof Proxy) return t;
    let e = new Map;
    return new Proxy((...e) => t(...e), {
      get: (i, s) => "create" === s ? t : (e.has(s) || e.set(s, t(s)), e.get(s))
    })
  }((i = {
    animation: {
      Feature: class extends y {
        constructor(t) {
          super(t), t.animationState || (t.animationState = function(t) {
            let e = e => Promise.all(e.map(({
                animation: e,
                options: i
              }) => (function(t, e, i = {}) {
                let s;
                if (t.notify("AnimationStart", e), Array.isArray(e)) s = Promise.all(e.map(e => c(t, e, i)));
                else if ("string" == typeof e) s = c(t, e, i);
                else {
                  let o = "function" == typeof e ? (0, l.resolveVariant)(t, e, i.custom) : e;
                  s = Promise.all((0, u.animateTarget)(t, o, i))
                }
                return s.then(() => {
                  t.notify("AnimationComplete", e)
                })
              })(t, e, i))),
              i = g(),
              s = !0,
              d = e => (i, s) => {
                var o;
                let r = (0, l.resolveVariant)(t, s, "exit" === e ? null == (o = t.presenceContext) ? void 0 : o.custom : void 0);
                if (r) {
                  let {
                    transition: t,
                    transitionEnd: e,
                    ...s
                  } = r;
                  i = {
                    ...i,
                    ...s,
                    ...e
                  }
                }
                return i
              };

            function v(l) {
              let {
                props: u
              } = t, c = function t(e) {
                if (!e) return;
                if (!e.isControllingVariants) {
                  let i = e.parent && t(e.parent) || {};
                  return void 0 !== e.props.initial && (i.initial = e.props.initial), i
                }
                let i = {};
                for (let t = 0; t < m; t++) {
                  let s = h.variantProps[t],
                    o = e.props[s];
                  ((0, a.isVariantLabel)(o) || !1 === o) && (i[s] = o)
                }
                return i
              }(t.parent) || {}, v = [], g = new Set, y = {}, x = 1 / 0;
              for (let e = 0; e < f; e++) {
                var P, T;
                let h = p[e],
                  m = i[h],
                  f = void 0 !== u[h] ? u[h] : c[h],
                  D = (0, a.isVariantLabel)(f),
                  A = h === l ? m.isActive : null;
                !1 === A && (x = e);
                let S = f === c[h] && f !== u[h] && D;
                if (S && s && t.manuallyAnimateOnMount && (S = !1), m.protectedKeys = {
                    ...y
                  }, !m.isActive && null === A || !f && !m.prevProp || (0, o.isAnimationControls)(f) || "boolean" == typeof f) continue;
                let w = (P = m.prevProp, "string" == typeof(T = f) ? T !== P : !!Array.isArray(T) && !n(T, P)),
                  E = w || h === l && m.isActive && !S && D || e > x && D,
                  C = !1,
                  b = Array.isArray(f) ? f : [f],
                  V = b.reduce(d(h), {});
                !1 === A && (V = {});
                let {
                  prevResolvedValues: R = {}
                } = m, B = {
                  ...R,
                  ...V
                }, M = e => {
                  E = !0, g.has(e) && (C = !0, g.delete(e)), m.needsAnimating[e] = !0;
                  let i = t.getValue(e);
                  i && (i.liveStyle = !1)
                };
                for (let t in B) {
                  let e = V[t],
                    i = R[t];
                  if (!y.hasOwnProperty(t))((0, r.isKeyframesTarget)(e) && (0, r.isKeyframesTarget)(i) ? n(e, i) : e === i) ? void 0 !== e && g.has(t) ? M(t) : m.protectedKeys[t] = !0 : null != e ? M(t) : g.add(t)
                }
                m.prevProp = f, m.prevResolvedValues = V, m.isActive && (y = {
                  ...y,
                  ...V
                }), s && t.blockInitialAnimation && (E = !1);
                let j = !(S && w) || C;
                E && j && v.push(...b.map(t => ({
                  animation: t,
                  options: {
                    type: h
                  }
                })))
              }
              if (g.size) {
                let e = {};
                g.forEach(i => {
                  let s = t.getBaseTarget(i),
                    o = t.getValue(i);
                  o && (o.liveStyle = !0), e[i] = null != s ? s : null
                }), v.push({
                  animation: e
                })
              }
              let D = !!v.length;
              return s && (!1 === u.initial || u.initial === u.animate) && !t.manuallyAnimateOnMount && (D = !1), s = !1, D ? e(v) : Promise.resolve()
            }
            return {
              animateChanges: v,
              setActive: function(e, s) {
                var o;
                if (i[e].isActive === s) return Promise.resolve();
                null == (o = t.variantChildren) || o.forEach(t => {
                  var i;
                  return null == (i = t.animationState) ? void 0 : i.setActive(e, s)
                }), i[e].isActive = s;
                let r = v(e);
                for (let t in i) i[t].protectedKeys = {};
                return r
              },
              setAnimateFunction: function(i) {
                e = i(t)
              },
              getState: () => i,
              reset: () => {
                i = g(), s = !0
              }
            }
          }(t))
        }
        updateAnimationControlsSubscription() {
          let {
            animate: t
          } = this.node.getProps();
          (0, o.isAnimationControls)(t) && (this.unmountControls = t.subscribe(this.node))
        }
        mount() {
          this.updateAnimationControlsSubscription()
        }
        update() {
          let {
            animate: t
          } = this.node.getProps(), {
            animate: e
          } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription()
        }
        unmount() {
          var t;
          this.node.animationState.reset(), null == (t = this.unmountControls) || t.call(this)
        }
      }
    },
    exit: {
      Feature: class extends y {
        constructor() {
          super(...arguments), this.id = x++
        }
        update() {
          if (!this.node.presenceContext) return;
          let {
            isPresent: t,
            onExitComplete: e
          } = this.node.presenceContext, {
            isPresent: i
          } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let s = this.node.animationState.setActive("exit", !t);
          e && !t && s.then(() => e(this.id))
        }
        mount() {
          let {
            register: t
          } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id))
        }
        unmount() {}
      }
    },
    inView: {
      Feature: class extends y {
        constructor() {
          super(...arguments), this.hasEnteredView = !1, this.isInView = !1
        }
        startObserver() {
          var t;
          let e;
          this.unmount();
          let {
            viewport: i = {}
          } = this.node.getProps(), {
            root: s,
            margin: o,
            amount: r = "some",
            once: n
          } = i, a = {
            root: s ? s.current : void 0,
            rootMargin: o,
            threshold: "number" == typeof r ? r : eN[r]
          }, l = t => {
            let {
              isIntersecting: e
            } = t;
            if (this.isInView === e || (this.isInView = e, n && !e && this.hasEnteredView)) return;
            e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
            let {
              onViewportEnter: i,
              onViewportLeave: s
            } = this.node.getProps(), o = e ? i : s;
            o && o(t)
          };
          return t = this.node.current, e = function({
            root: t,
            ...e
          }) {
            let i = t || document;
            eF.has(i) || eF.set(i, {});
            let s = eF.get(i),
              o = JSON.stringify(e);
            return s[o] || (s[o] = new IntersectionObserver(eO, {
              root: t,
              ...e
            })), s[o]
          }(a), ek.set(t, l), e.observe(t), () => {
            ek.delete(t), e.unobserve(t)
          }
        }
        mount() {
          this.startObserver()
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let {
            props: t,
            prevProps: e
          } = this.node;
          ["amount", "margin", "root"].some(function({
            viewport: t = {}
          }, {
            viewport: e = {}
          } = {}) {
            return i => t[i] !== e[i]
          }(t, e)) && this.startObserver()
        }
        unmount() {}
      }
    },
    tap: {
      Feature: class extends y {
        mount() {
          let {
            current: t
          } = this.node;
          t && (this.unmount = (0, ej.press)(t, t => (eL(this.node, t, "Start"), (t, {
            success: e
          }) => eL(this.node, t, e ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
          }))
        }
        unmount() {}
      }
    },
    focus: {
      Feature: class extends y {
        constructor() {
          super(...arguments), this.isActive = !1
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible")
          } catch (e) {
            t = !0
          }
          t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
        }
        onBlur() {
          this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
        }
        mount() {
          this.unmount = (0, V.pipe)(w(this.node.current, "focus", () => this.onFocus()), w(this.node.current, "blur", () => this.onBlur()))
        }
        unmount() {}
      }
    },
    hover: {
      Feature: class extends y {
        mount() {
          let {
            current: t
          } = this.node;
          t && (this.unmount = (0, eB.hover)(t, t => (eM(this.node, t, "Start"), t => eM(this.node, t, "End"))))
        }
        unmount() {}
      }
    },
    pan: {
      Feature: class extends y {
        constructor() {
          super(...arguments), this.removePointerDownListener = P.noop
        }
        onPointerDown(t) {
          this.session = new B(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: ti(this.node)
          })
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: s
          } = this.node.getProps();
          return {
            onSessionStart: ta(t),
            onStart: ta(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, s && R.frame.postRender(() => s(t, e))
            }
          }
        }
        mount() {
          this.removePointerDownListener = C(this.node.current, "pointerdown", t => this.onPointerDown(t))
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers())
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end()
        }
      }
    },
    drag: {
      Feature: class extends y {
        constructor(t) {
          super(t), this.removeGroupControls = P.noop, this.removeListeners = P.noop, this.controls = new tr(t)
        }
        mount() {
          let {
            dragControls: t
          } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || P.noop
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners()
        }
      },
      ProjectionNode: eR,
      MeasureLayout: tD
    },
    layout: {
      ProjectionNode: eR,
      MeasureLayout: tD
    }
  }, s = (t, e) => eZ(t) ? new ih.SVGVisualElement(e) : new il.HTMLVisualElement(e, {
    allowProjection: t !== th.Fragment
  }), function(t, {
    forwardMotionProps: e
  } = {
    forwardMotionProps: !1
  }) {
    return function({
      preloadedFeatures: t,
      createVisualElement: e,
      useRender: i,
      useVisualState: s,
      Component: o
    }) {
      var r, n;

      function l(t, r) {
        var n;
        let l, h = {
            ...(0, th.useContext)(eW),
            ...t,
            layoutId: function({
              layoutId: t
            }) {
              let e = (0, th.useContext)(td).id;
              return e && void 0 !== t ? e + "-" + t : t
            }(t)
          },
          {
            isStatic: u
          } = h,
          c = function(t) {
            let {
              initial: e,
              animate: i
            } = function(t, e) {
              if ((0, eH.isControllingVariants)(t)) {
                let {
                  initial: e,
                  animate: i
                } = t;
                return {
                  initial: !1 === e || (0, a.isVariantLabel)(e) ? e : void 0,
                  animate: (0, a.isVariantLabel)(i) ? i : void 0
                }
              }
              return !1 !== t.inherit ? e : {}
            }(t, (0, th.useContext)(e$));
            return (0, th.useMemo)(() => ({
              initial: e,
              animate: i
            }), [ez(e), ez(i)])
          }(t),
          d = s(t, u);
        if (!u && eG.isBrowser) {
          (0, th.useContext)(eI).strict;
          let t = function(t) {
            let {
              drag: e,
              layout: i
            } = eX.featureDefinitions;
            if (!e && !i) return {};
            let s = {
              ...e,
              ...i
            };
            return {
              MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == i ? void 0 : i.isEnabled(t)) ? s.MeasureLayout : void 0,
              ProjectionNode: s.ProjectionNode
            }
          }(h);
          l = t.MeasureLayout, c.visualElement = function(t, e, i, s, o) {
            var r, n;
            let {
              visualElement: a
            } = (0, th.useContext)(e$), l = (0, th.useContext)(eI), h = (0, th.useContext)(tu), u = (0, th.useContext)(eW).reducedMotion, c = (0, th.useRef)(null);
            s = s || l.renderer, !c.current && s && (c.current = s(t, {
              visualState: e,
              parent: a,
              props: i,
              presenceContext: h,
              blockInitialAnimation: !!h && !1 === h.initial,
              reducedMotionConfig: u
            }));
            let d = c.current,
              m = (0, th.useContext)(tm);
            d && !d.projection && o && ("html" === d.type || "svg" === d.type) && function(t, e, i, s) {
              let {
                layoutId: o,
                layout: r,
                drag: n,
                dragConstraints: a,
                layoutScroll: l,
                layoutRoot: h
              } = e;
              t.projection = new i(t.latestValues, e["data-framer-portal-id"] ? void 0 : function t(e) {
                if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
              }(t.parent)), t.projection.setOptions({
                layoutId: o,
                layout: r,
                alwaysMeasureLayout: !!n || a && F(a),
                visualElement: t,
                animationType: "string" == typeof r ? r : "both",
                initialPromotionConfig: s,
                layoutScroll: l,
                layoutRoot: h
              })
            }(c.current, i, o, m);
            let p = (0, th.useRef)(!1);
            (0, th.useInsertionEffect)(() => {
              d && p.current && d.update(i, h)
            });
            let f = i[e_.optimizedAppearDataAttribute],
              v = (0, th.useRef)(!!f && !(null == (r = window.MotionHandoffIsComplete) ? void 0 : r.call(window, f)) && (null == (n = window.MotionHasOptimisedAnimation) ? void 0 : n.call(window, f)));
            return eK(() => {
              d && (p.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), tx.render(d.render), v.current && d.animationState && d.animationState.animateChanges())
            }), (0, th.useEffect)(() => {
              d && (!v.current && d.animationState && d.animationState.animateChanges(), v.current && (queueMicrotask(() => {
                var t;
                null == (t = window.MotionHandoffMarkAsComplete) || t.call(window, f)
              }), v.current = !1))
            }), d
          }(o, d, h, e, t.ProjectionNode)
        }
        return (0, tl.jsxs)(e$.Provider, {
          value: c,
          children: [l && c.visualElement ? (0, tl.jsx)(l, {
            visualElement: c.visualElement,
            ...h
          }) : null, i(o, t, (n = c.visualElement, (0, th.useCallback)(t => {
            t && d.onMount && d.onMount(t), n && (t ? n.mount(t) : n.unmount()), r && ("function" == typeof r ? r(t) : F(r) && (r.current = t))
          }, [n])), d, u, c.visualElement)]
        })
      }
      t && function(t) {
        for (let e in t) eX.featureDefinitions[e] = {
          ...eX.featureDefinitions[e],
          ...t[e]
        }
      }(t), l.displayName = `motion.${"string"==typeof o?o:`create(${null!=(n=null!=(r=o.displayName)?r:o.name)?n:""})`}`;
      let h = (0, th.forwardRef)(l);
      return h[eY] = o, h
    }({
      ...eZ(t) ? e8 : it,
      preloadedFeatures: i,
      useRender: function(t = !1) {
        return (e, i, s, {
          latestValues: o
        }, r) => {
          let n = (eZ(e) ? function(t, e, i, s) {
              let o = (0, th.useMemo)(() => {
                let i = e2();
                return (0, e3.buildSVGAttrs)(i, e, (0, e4.isSVGTag)(s), t.transformTemplate), {
                  ...i.attrs,
                  style: {
                    ...i.style
                  }
                }
              }, [e]);
              if (t.style) {
                let e = {};
                is(e, t.style, t), o.style = {
                  ...e,
                  ...o.style
                }
              }
              return o
            } : function(t, e) {
              let i, s, o = {},
                r = (i = t.style || {}, is(s = {}, i, t), Object.assign(s, function({
                  transformTemplate: t
                }, e) {
                  return (0, th.useMemo)(() => {
                    let i = e5();
                    return (0, ii.buildHTMLStyles)(i, e, t), Object.assign({}, i.vars, i.style)
                  }, [e])
                }(t, e)), s);
              return t.drag && !1 !== t.dragListener && (o.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (o.tabIndex = 0), o.style = r, o
            })(i, o, r, e),
            a = function(t, e, i) {
              let s = {};
              for (let o in t)("values" !== o || "object" != typeof t.values) && (ia(o) || !0 === i && ir(o) || !e && !ir(o) || t.draggable && o.startsWith("onDrag")) && (s[o] = t[o]);
              return s
            }(i, "string" == typeof e, t),
            l = e !== th.Fragment ? {
              ...a,
              ...n,
              ref: s
            } : {},
            {
              children: h
            } = i,
            u = (0, th.useMemo)(() => (0, tL.isMotionValue)(h) ? h.get() : h, [h]);
          return (0, th.createElement)(e, {
            ...l,
            children: u
          })
        }
      }(e),
      createVisualElement: s,
      Component: t
    })
  }));
  t.s(["motion", () => iu], 35691)
}]);