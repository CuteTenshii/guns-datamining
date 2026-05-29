(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 52202, e => {
  "use strict";
  var t = e.i(48277),
    a = e.i(16506),
    n = e.i(17435);

  function r({
    href: e,
    asTag: r,
    locale: o,
    children: s,
    ...i
  }) {
    let l = o || (0, n.useLang)();
    if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("mailto:") || e.startsWith("tel:")) return r ? (0, t.jsx)("a", {
      href: e,
      ...i,
      children: s
    }) : (0, t.jsx)(a.default, {
      href: e,
      ...i,
      children: s
    });
    let d = "en" == l ? `${e.startsWith("/")?"":"/"}${e}` : `/${l}${e.startsWith("/")?"":"/"}${e}`;
    return r ? (0, t.jsx)("a", {
      href: d,
      ...i,
      children: s
    }) : (0, t.jsx)(a.default, {
      href: d,
      ...i,
      children: s
    })
  }
  e.s(["default", () => r])
}, 54976, e => {
  "use strict";
  var t = e.i(30668),
    a = e.i(69941),
    n = Array(12).fill(0),
    r = ({
      visible: e,
      className: a
    }) => t.default.createElement("div", {
      className: ["sonner-loading-wrapper", a].filter(Boolean).join(" "),
      "data-visible": e
    }, t.default.createElement("div", {
      className: "sonner-spinner"
    }, n.map((e, a) => t.default.createElement("div", {
      className: "sonner-loading-bar",
      key: `spinner-bar-${a}`
    })))),
    o = t.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20"
    }, t.default.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd"
    })),
    s = t.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20"
    }, t.default.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd"
    })),
    i = t.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20"
    }, t.default.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd"
    })),
    l = t.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20"
    }, t.default.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd"
    })),
    d = t.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, t.default.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }), t.default.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    })),
    c = 1,
    u = new class {
      constructor() {
        this.subscribe = e => (this.subscribers.push(e), () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1)
        }), this.publish = e => {
          this.subscribers.forEach(t => t(e))
        }, this.addToast = e => {
          this.publish(e), this.toasts = [...this.toasts, e]
        }, this.create = e => {
          var t;
          let {
            message: a,
            ...n
          } = e, r = "number" == typeof(null == e ? void 0 : e.id) || (null == (t = e.id) ? void 0 : t.length) > 0 ? e.id : c++, o = this.toasts.find(e => e.id === r), s = void 0 === e.dismissible || e.dismissible;
          return this.dismissedToasts.has(r) && this.dismissedToasts.delete(r), o ? this.toasts = this.toasts.map(t => t.id === r ? (this.publish({
            ...t,
            ...e,
            id: r,
            title: a
          }), {
            ...t,
            ...e,
            id: r,
            dismissible: s,
            title: a
          }) : t) : this.addToast({
            title: a,
            ...n,
            dismissible: s,
            id: r
          }), r
        }, this.dismiss = e => (this.dismissedToasts.add(e), e || this.toasts.forEach(e => {
          this.subscribers.forEach(t => t({
            id: e.id,
            dismiss: !0
          }))
        }), this.subscribers.forEach(t => t({
          id: e,
          dismiss: !0
        })), e), this.message = (e, t) => this.create({
          ...t,
          message: e
        }), this.error = (e, t) => this.create({
          ...t,
          message: e,
          type: "error"
        }), this.success = (e, t) => this.create({
          ...t,
          type: "success",
          message: e
        }), this.info = (e, t) => this.create({
          ...t,
          type: "info",
          message: e
        }), this.warning = (e, t) => this.create({
          ...t,
          type: "warning",
          message: e
        }), this.loading = (e, t) => this.create({
          ...t,
          type: "loading",
          message: e
        }), this.promise = (e, a) => {
          let n;
          if (!a) return;
          void 0 !== a.loading && (n = this.create({
            ...a,
            promise: e,
            type: "loading",
            message: a.loading,
            description: "function" != typeof a.description ? a.description : void 0
          }));
          let r = e instanceof Promise ? e : e(),
            o = void 0 !== n,
            s, i = r.then(async e => {
              if (s = ["resolve", e], t.default.isValidElement(e)) o = !1, this.create({
                id: n,
                type: "default",
                message: e
              });
              else if (h(e) && !e.ok) {
                o = !1;
                let t = "function" == typeof a.error ? await a.error(`HTTP error! status: ${e.status}`) : a.error,
                  r = "function" == typeof a.description ? await a.description(`HTTP error! status: ${e.status}`) : a.description;
                this.create({
                  id: n,
                  type: "error",
                  message: t,
                  description: r
                })
              } else if (void 0 !== a.success) {
                o = !1;
                let t = "function" == typeof a.success ? await a.success(e) : a.success,
                  r = "function" == typeof a.description ? await a.description(e) : a.description;
                this.create({
                  id: n,
                  type: "success",
                  message: t,
                  description: r
                })
              }
            }).catch(async e => {
              if (s = ["reject", e], void 0 !== a.error) {
                o = !1;
                let t = "function" == typeof a.error ? await a.error(e) : a.error,
                  r = "function" == typeof a.description ? await a.description(e) : a.description;
                this.create({
                  id: n,
                  type: "error",
                  message: t,
                  description: r
                })
              }
            }).finally(() => {
              var e;
              o && (this.dismiss(n), n = void 0), null == (e = a.finally) || e.call(a)
            }),
            l = () => new Promise((e, t) => i.then(() => "reject" === s[0] ? t(s[1]) : e(s[1])).catch(t));
          return "string" != typeof n && "number" != typeof n ? {
            unwrap: l
          } : Object.assign(n, {
            unwrap: l
          })
        }, this.custom = (e, t) => {
          let a = (null == t ? void 0 : t.id) || c++;
          return this.create({
            jsx: e(a),
            id: a,
            ...t
          }), a
        }, this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = new Set
      }
    },
    h = e => e && "object" == typeof e && "ok" in e && "boolean" == typeof e.ok && "status" in e && "number" == typeof e.status,
    p = Object.assign((e, t) => {
      let a = (null == t ? void 0 : t.id) || c++;
      return u.addToast({
        title: e,
        ...t,
        id: a
      }), a
    }, {
      success: u.success,
      info: u.info,
      warning: u.warning,
      error: u.error,
      custom: u.custom,
      message: u.message,
      promise: u.promise,
      dismiss: u.dismiss,
      loading: u.loading
    }, {
      getHistory: () => u.toasts,
      getToasts: () => u.getActiveToasts()
    });

  function f(e) {
    return void 0 !== e.label
  }

  function m(...e) {
    return e.filter(Boolean).join(" ")
  }! function(e, {
    insertAt: t
  } = {}) {
    if (!e || "undefined" == typeof document) return;
    let a = document.head || document.getElementsByTagName("head")[0],
      n = document.createElement("style");
    n.type = "text/css", "top" === t && a.firstChild ? a.insertBefore(n, a.firstChild) : a.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e))
  }(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
  var g = e => {
    var a, n, c, u, h, p, g, v, w, x, _, y, b, E;
    let {
      invert: j,
      toast: C,
      unstyled: S,
      interacting: k,
      setHeights: N,
      visibleToasts: T,
      heights: q,
      index: B,
      toasts: R,
      expanded: O,
      removeToast: L,
      defaultRichColors: P,
      closeButton: I,
      style: Z,
      cancelButtonStyle: M,
      actionButtonStyle: A,
      className: $ = "",
      descriptionClassName: W = "",
      duration: D,
      position: U,
      gap: z,
      loadingIcon: H,
      expandByDefault: V,
      classNames: Y,
      icons: F,
      closeButtonAriaLabel: G = "Close toast",
      pauseWhenPageIsHidden: X
    } = e, [K, J] = t.default.useState(null), [Q, ee] = t.default.useState(null), [et, ea] = t.default.useState(!1), [en, er] = t.default.useState(!1), [eo, es] = t.default.useState(!1), [ei, el] = t.default.useState(!1), [ed, ec] = t.default.useState(!1), [eu, eh] = t.default.useState(0), [ep, ef] = t.default.useState(0), em = t.default.useRef(C.duration || D || 4e3), eg = t.default.useRef(null), ev = t.default.useRef(null), ew = 0 === B, ex = B + 1 <= T, e_ = C.type, ey = !1 !== C.dismissible, eb = C.className || "", eE = C.descriptionClassName || "", ej = t.default.useMemo(() => q.findIndex(e => e.toastId === C.id) || 0, [q, C.id]), eC = t.default.useMemo(() => {
      var e;
      return null != (e = C.closeButton) ? e : I
    }, [C.closeButton, I]), eS = t.default.useMemo(() => C.duration || D || 4e3, [C.duration, D]), ek = t.default.useRef(0), eN = t.default.useRef(0), eT = t.default.useRef(0), eq = t.default.useRef(null), [eB, eR] = U.split("-"), eO = t.default.useMemo(() => q.reduce((e, t, a) => a >= ej ? e : e + t.height, 0), [q, ej]), eL = (() => {
      let [e, a] = t.default.useState(document.hidden);
      return t.default.useEffect(() => {
        let e = () => {
          a(document.hidden)
        };
        return document.addEventListener("visibilitychange", e), () => window.removeEventListener("visibilitychange", e)
      }, []), e
    })(), eP = C.invert || j, eI = "loading" === e_;
    eN.current = t.default.useMemo(() => ej * z + eO, [ej, eO]), t.default.useEffect(() => {
      em.current = eS
    }, [eS]), t.default.useEffect(() => {
      ea(!0)
    }, []), t.default.useEffect(() => {
      let e = ev.current;
      if (e) {
        let t = e.getBoundingClientRect().height;
        return ef(t), N(e => [{
          toastId: C.id,
          height: t,
          position: C.position
        }, ...e]), () => N(e => e.filter(e => e.toastId !== C.id))
      }
    }, [N, C.id]), t.default.useLayoutEffect(() => {
      if (!et) return;
      let e = ev.current,
        t = e.style.height;
      e.style.height = "auto";
      let a = e.getBoundingClientRect().height;
      e.style.height = t, ef(a), N(e => e.find(e => e.toastId === C.id) ? e.map(e => e.toastId === C.id ? {
        ...e,
        height: a
      } : e) : [{
        toastId: C.id,
        height: a,
        position: C.position
      }, ...e])
    }, [et, C.title, C.description, N, C.id]);
    let eZ = t.default.useCallback(() => {
      er(!0), eh(eN.current), N(e => e.filter(e => e.toastId !== C.id)), setTimeout(() => {
        L(C)
      }, 200)
    }, [C, L, N, eN]);
    return t.default.useEffect(() => {
      let e;
      if ((!C.promise || "loading" !== e_) && C.duration !== 1 / 0 && "loading" !== C.type) return O || k || X && eL ? (() => {
        if (eT.current < ek.current) {
          let e = new Date().getTime() - ek.current;
          em.current = em.current - e
        }
        eT.current = new Date().getTime()
      })() : em.current !== 1 / 0 && (ek.current = new Date().getTime(), e = setTimeout(() => {
        var e;
        null == (e = C.onAutoClose) || e.call(C, C), eZ()
      }, em.current)), () => clearTimeout(e)
    }, [O, k, C, e_, X, eL, eZ]), t.default.useEffect(() => {
      C.delete && eZ()
    }, [eZ, C.delete]), t.default.createElement("li", {
      tabIndex: 0,
      ref: ev,
      className: m($, eb, null == Y ? void 0 : Y.toast, null == (a = null == C ? void 0 : C.classNames) ? void 0 : a.toast, null == Y ? void 0 : Y.default, null == Y ? void 0 : Y[e_], null == (n = null == C ? void 0 : C.classNames) ? void 0 : n[e_]),
      "data-sonner-toast": "",
      "data-rich-colors": null != (c = C.richColors) ? c : P,
      "data-styled": !(C.jsx || C.unstyled || S),
      "data-mounted": et,
      "data-promise": !!C.promise,
      "data-swiped": ed,
      "data-removed": en,
      "data-visible": ex,
      "data-y-position": eB,
      "data-x-position": eR,
      "data-index": B,
      "data-front": ew,
      "data-swiping": eo,
      "data-dismissible": ey,
      "data-type": e_,
      "data-invert": eP,
      "data-swipe-out": ei,
      "data-swipe-direction": Q,
      "data-expanded": !!(O || V && et),
      style: {
        "--index": B,
        "--toasts-before": B,
        "--z-index": R.length - B,
        "--offset": `${en?eu:eN.current}px`,
        "--initial-height": V ? "auto" : `${ep}px`,
        ...Z,
        ...C.style
      },
      onDragEnd: () => {
        es(!1), J(null), eq.current = null
      },
      onPointerDown: e => {
        eI || !ey || (eg.current = new Date, eh(eN.current), e.target.setPointerCapture(e.pointerId), "BUTTON" !== e.target.tagName && (es(!0), eq.current = {
          x: e.clientX,
          y: e.clientY
        }))
      },
      onPointerUp: () => {
        var e, t, a, n;
        if (ei || !ey) return;
        eq.current = null;
        let r = Number((null == (e = ev.current) ? void 0 : e.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
          o = Number((null == (t = ev.current) ? void 0 : t.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
          s = new Date().getTime() - (null == (a = eg.current) ? void 0 : a.getTime()),
          i = "x" === K ? r : o,
          l = Math.abs(i) / s;
        if (Math.abs(i) >= 20 || l > .11) {
          eh(eN.current), null == (n = C.onDismiss) || n.call(C, C), ee("x" === K ? r > 0 ? "right" : "left" : o > 0 ? "down" : "up"), eZ(), el(!0), ec(!1);
          return
        }
        es(!1), J(null)
      },
      onPointerMove: t => {
        var a, n, r, o;
        if (!eq.current || !ey || (null == (a = window.getSelection()) ? void 0 : a.toString().length) > 0) return;
        let s = t.clientY - eq.current.y,
          i = t.clientX - eq.current.x,
          l = null != (n = e.swipeDirections) ? n : function(e) {
            let [t, a] = e.split("-"), n = [];
            return t && n.push(t), a && n.push(a), n
          }(U);
        !K && (Math.abs(i) > 1 || Math.abs(s) > 1) && J(Math.abs(i) > Math.abs(s) ? "x" : "y");
        let d = {
          x: 0,
          y: 0
        };
        "y" === K ? (l.includes("top") || l.includes("bottom")) && (l.includes("top") && s < 0 || l.includes("bottom") && s > 0) && (d.y = s) : "x" === K && (l.includes("left") || l.includes("right")) && (l.includes("left") && i < 0 || l.includes("right") && i > 0) && (d.x = i), (Math.abs(d.x) > 0 || Math.abs(d.y) > 0) && ec(!0), null == (r = ev.current) || r.style.setProperty("--swipe-amount-x", `${d.x}px`), null == (o = ev.current) || o.style.setProperty("--swipe-amount-y", `${d.y}px`)
      }
    }, eC && !C.jsx ? t.default.createElement("button", {
      "aria-label": G,
      "data-disabled": eI,
      "data-close-button": !0,
      onClick: eI || !ey ? () => {} : () => {
        var e;
        eZ(), null == (e = C.onDismiss) || e.call(C, C)
      },
      className: m(null == Y ? void 0 : Y.closeButton, null == (u = null == C ? void 0 : C.classNames) ? void 0 : u.closeButton)
    }, null != (h = null == F ? void 0 : F.close) ? h : d) : null, C.jsx || (0, t.isValidElement)(C.title) ? C.jsx ? C.jsx : "function" == typeof C.title ? C.title() : C.title : t.default.createElement(t.default.Fragment, null, e_ || C.icon || C.promise ? t.default.createElement("div", {
      "data-icon": "",
      className: m(null == Y ? void 0 : Y.icon, null == (p = null == C ? void 0 : C.classNames) ? void 0 : p.icon)
    }, C.promise || "loading" === C.type && !C.icon ? C.icon || (null != F && F.loading ? t.default.createElement("div", {
      className: m(null == Y ? void 0 : Y.loader, null == (y = null == C ? void 0 : C.classNames) ? void 0 : y.loader, "sonner-loader"),
      "data-visible": "loading" === e_
    }, F.loading) : H ? t.default.createElement("div", {
      className: m(null == Y ? void 0 : Y.loader, null == (b = null == C ? void 0 : C.classNames) ? void 0 : b.loader, "sonner-loader"),
      "data-visible": "loading" === e_
    }, H) : t.default.createElement(r, {
      className: m(null == Y ? void 0 : Y.loader, null == (E = null == C ? void 0 : C.classNames) ? void 0 : E.loader),
      visible: "loading" === e_
    })) : null, "loading" !== C.type ? C.icon || (null == F ? void 0 : F[e_]) || (e => {
      switch (e) {
        case "success":
          return o;
        case "info":
          return i;
        case "warning":
          return s;
        case "error":
          return l;
        default:
          return null
      }
    })(e_) : null) : null, t.default.createElement("div", {
      "data-content": "",
      className: m(null == Y ? void 0 : Y.content, null == (g = null == C ? void 0 : C.classNames) ? void 0 : g.content)
    }, t.default.createElement("div", {
      "data-title": "",
      className: m(null == Y ? void 0 : Y.title, null == (v = null == C ? void 0 : C.classNames) ? void 0 : v.title)
    }, "function" == typeof C.title ? C.title() : C.title), C.description ? t.default.createElement("div", {
      "data-description": "",
      className: m(W, eE, null == Y ? void 0 : Y.description, null == (w = null == C ? void 0 : C.classNames) ? void 0 : w.description)
    }, "function" == typeof C.description ? C.description() : C.description) : null), (0, t.isValidElement)(C.cancel) ? C.cancel : C.cancel && f(C.cancel) ? t.default.createElement("button", {
      "data-button": !0,
      "data-cancel": !0,
      style: C.cancelButtonStyle || M,
      onClick: e => {
        var t, a;
        f(C.cancel) && ey && (null == (a = (t = C.cancel).onClick) || a.call(t, e), eZ())
      },
      className: m(null == Y ? void 0 : Y.cancelButton, null == (x = null == C ? void 0 : C.classNames) ? void 0 : x.cancelButton)
    }, C.cancel.label) : null, (0, t.isValidElement)(C.action) ? C.action : C.action && f(C.action) ? t.default.createElement("button", {
      "data-button": !0,
      "data-action": !0,
      style: C.actionButtonStyle || A,
      onClick: e => {
        var t, a;
        f(C.action) && (null == (a = (t = C.action).onClick) || a.call(t, e), e.defaultPrevented || eZ())
      },
      className: m(null == Y ? void 0 : Y.actionButton, null == (_ = null == C ? void 0 : C.classNames) ? void 0 : _.actionButton)
    }, C.action.label) : null))
  };

  function v() {
    if ("undefined" == typeof window || "undefined" == typeof document) return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return "auto" !== e && e ? e : window.getComputedStyle(document.documentElement).direction
  }
  var w = (0, t.forwardRef)(function(e, n) {
    let {
      invert: r,
      position: o = "bottom-right",
      hotkey: s = ["altKey", "KeyT"],
      expand: i,
      closeButton: l,
      className: d,
      offset: c,
      mobileOffset: h,
      theme: p = "light",
      richColors: f,
      duration: m,
      style: w,
      visibleToasts: x = 3,
      toastOptions: _,
      dir: y = v(),
      gap: b = 14,
      loadingIcon: E,
      icons: j,
      containerAriaLabel: C = "Notifications",
      pauseWhenPageIsHidden: S
    } = e, [k, N] = t.default.useState([]), T = t.default.useMemo(() => Array.from(new Set([o].concat(k.filter(e => e.position).map(e => e.position)))), [k, o]), [q, B] = t.default.useState([]), [R, O] = t.default.useState(!1), [L, P] = t.default.useState(!1), [I, Z] = t.default.useState("system" !== p ? p : "undefined" != typeof window && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), M = t.default.useRef(null), A = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""), $ = t.default.useRef(null), W = t.default.useRef(!1), D = t.default.useCallback(e => {
      N(t => {
        var a;
        return null != (a = t.find(t => t.id === e.id)) && a.delete || u.dismiss(e.id), t.filter(({
          id: t
        }) => t !== e.id)
      })
    }, []);
    return t.default.useEffect(() => u.subscribe(e => {
      e.dismiss ? N(t => t.map(t => t.id === e.id ? {
        ...t,
        delete: !0
      } : t)) : setTimeout(() => {
        a.default.flushSync(() => {
          N(t => {
            let a = t.findIndex(t => t.id === e.id);
            return -1 !== a ? [...t.slice(0, a), {
              ...t[a],
              ...e
            }, ...t.slice(a + 1)] : [e, ...t]
          })
        })
      })
    }), []), t.default.useEffect(() => {
      if ("system" !== p) return void Z(p);
      if ("system" === p && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Z("dark") : Z("light")), "undefined" == typeof window) return;
      let e = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        e.addEventListener("change", ({
          matches: e
        }) => {
          Z(e ? "dark" : "light")
        })
      } catch (t) {
        e.addListener(({
          matches: e
        }) => {
          try {
            Z(e ? "dark" : "light")
          } catch (e) {
            console.error(e)
          }
        })
      }
    }, [p]), t.default.useEffect(() => {
      k.length <= 1 && O(!1)
    }, [k]), t.default.useEffect(() => {
      let e = e => {
        var t, a;
        s.every(t => e[t] || e.code === t) && (O(!0), null == (t = M.current) || t.focus()), "Escape" === e.code && (document.activeElement === M.current || null != (a = M.current) && a.contains(document.activeElement)) && O(!1)
      };
      return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
    }, [s]), t.default.useEffect(() => {
      if (M.current) return () => {
        $.current && ($.current.focus({
          preventScroll: !0
        }), $.current = null, W.current = !1)
      }
    }, [M.current]), t.default.createElement("section", {
      ref: n,
      "aria-label": `${C} ${A}`,
      tabIndex: -1,
      "aria-live": "polite",
      "aria-relevant": "additions text",
      "aria-atomic": "false",
      suppressHydrationWarning: !0
    }, T.map((a, n) => {
      var o;
      let s, [u, p] = a.split("-");
      return k.length ? t.default.createElement("ol", {
        key: a,
        dir: "auto" === y ? v() : y,
        tabIndex: -1,
        ref: M,
        className: d,
        "data-sonner-toaster": !0,
        "data-theme": I,
        "data-y-position": u,
        "data-lifted": R && k.length > 1 && !i,
        "data-x-position": p,
        style: {
          "--front-toast-height": `${(null==(o=q[0])?void 0:o.height)||0}px`,
          "--width": "356px",
          "--gap": `${b}px`,
          ...w,
          ...(s = {}, [c, h].forEach((e, t) => {
            let a = 1 === t,
              n = a ? "--mobile-offset" : "--offset",
              r = a ? "16px" : "32px";

            function o(e) {
              ["top", "right", "bottom", "left"].forEach(t => {
                s[`${n}-${t}`] = "number" == typeof e ? `${e}px` : e
              })
            }
            "number" == typeof e || "string" == typeof e ? o(e) : "object" == typeof e ? ["top", "right", "bottom", "left"].forEach(t => {
              void 0 === e[t] ? s[`${n}-${t}`] = r : s[`${n}-${t}`] = "number" == typeof e[t] ? `${e[t]}px` : e[t]
            }) : o(r)
          }), s)
        },
        onBlur: e => {
          W.current && !e.currentTarget.contains(e.relatedTarget) && (W.current = !1, $.current && ($.current.focus({
            preventScroll: !0
          }), $.current = null))
        },
        onFocus: e => {
          e.target instanceof HTMLElement && "false" === e.target.dataset.dismissible || W.current || (W.current = !0, $.current = e.relatedTarget)
        },
        onMouseEnter: () => O(!0),
        onMouseMove: () => O(!0),
        onMouseLeave: () => {
          L || O(!1)
        },
        onDragEnd: () => O(!1),
        onPointerDown: e => {
          e.target instanceof HTMLElement && "false" === e.target.dataset.dismissible || P(!0)
        },
        onPointerUp: () => P(!1)
      }, k.filter(e => !e.position && 0 === n || e.position === a).map((n, o) => {
        var s, d;
        return t.default.createElement(g, {
          key: n.id,
          icons: j,
          index: o,
          toast: n,
          defaultRichColors: f,
          duration: null != (s = null == _ ? void 0 : _.duration) ? s : m,
          className: null == _ ? void 0 : _.className,
          descriptionClassName: null == _ ? void 0 : _.descriptionClassName,
          invert: r,
          visibleToasts: x,
          closeButton: null != (d = null == _ ? void 0 : _.closeButton) ? d : l,
          interacting: L,
          position: a,
          style: null == _ ? void 0 : _.style,
          unstyled: null == _ ? void 0 : _.unstyled,
          classNames: null == _ ? void 0 : _.classNames,
          cancelButtonStyle: null == _ ? void 0 : _.cancelButtonStyle,
          actionButtonStyle: null == _ ? void 0 : _.actionButtonStyle,
          removeToast: D,
          toasts: k.filter(e => e.position == n.position),
          heights: q.filter(e => e.position == n.position),
          setHeights: B,
          expandByDefault: i,
          gap: b,
          loadingIcon: E,
          expanded: R,
          pauseWhenPageIsHidden: S,
          swipeDirections: e.swipeDirections
        })
      })) : null
    }))
  });
  e.s(["Toaster", () => w, "toast", () => p])
}, 32872, e => {
  "use strict";
  var t = e.i(48277),
    a = e.i(30668),
    n = e.i(50250),
    r = e.i(33544);

  function o({
    featureName: e,
    onChangeFunction: o,
    value: s,
    placeholder: i,
    icon: l,
    prefix: d,
    prefixLength: c,
    viewPassword: u,
    onKeyPress: h,
    isImageUrl: p,
    type: f = "text",
    ...m
  }) {
    let [g, v] = (0, a.useState)(!!u);
    return (0, a.useEffect)(() => {
      v(!!u)
    }, [u]), (0, t.jsxs)("div", {
      className: n.default.inputContainerWrapper,
      "data-dashboard-feature-label": "string" == typeof e ? e : void 0,
      children: [e && (0, t.jsx)("h1", {
        className: n.default.featureName,
        children: e
      }), (0, t.jsxs)("div", {
        className: `${n.default.inputWrapperDiv} ${d&&n.default.inputWrapperURL}`,
        children: [(0, t.jsxs)("span", {
          className: n.default.inputWrapperSpan,
          style: {
            position: d ? "absolute" : "static"
          },
          children: [p ? (0, t.jsx)("img", {
            src: l,
            alt: "icon",
            className: n.default.inputWrapperIconImage
          }) : l, d && (0, t.jsx)("h1", {
            children: d
          })]
        }), u && (0, t.jsx)("p", {
          onClick: () => {
            v(!g)
          },
          children: g ? r.default.hidePassword : r.default.views
        }), (0, t.jsx)("input", {
          autoCorrect: "false",
          type: u ? g ? "password" : "text" : f,
          onKeyDown: h,
          value: s,
          style: {
            paddingLeft: d ? c : "",
            paddingRight: u ? 47 : ""
          },
          placeholder: i,
          className: n.default.inputWrapperInput,
          onChange: o,
          ...m
        })]
      })]
    })
  }
  e.s(["default", () => o])
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
  var t = e.i(48277),
    a = e.i(30668),
    n = e.i(69941),
    r = e.i(19168);

  function o({
    opened: e,
    onClose: o,
    onOverlayClose: s,
    onCloseButtonClick: i,
    onEscapeClose: l,
    title: d,
    centered: c = !0,
    size: u = "auto",
    closeOnOverlayClick: h = !0,
    withCloseButton: p = !0,
    centerTitle: f = !1,
    className: m,
    bodyClassName: g,
    children: v
  }) {
    let [w, x] = (0, a.useState)(e), [_, y] = (0, a.useState)(!1), [b, E] = (0, a.useState)(null), j = (0, a.useRef)(null), C = (0, a.useRef)(null), S = (0, a.useRef)(null), k = (0, a.useRef)(!1), N = e => {
      if (!e) return !1;
      let t = window.getComputedStyle(e).overflowY;
      return e.scrollHeight > e.clientHeight + 1 && ("auto" === t || "scroll" === t)
    }, T = e => {
      let t = C.current;
      if (!t || !e) return null;
      let a = e;
      for (; a && t.contains(a);) {
        if (N(a)) return a;
        a = a.parentElement
      }
      return null
    }, q = (e, t) => t < 0 ? e.scrollTop > 0 : !(t > 0) || e.scrollTop + e.clientHeight < e.scrollHeight;
    if ((0, a.useEffect)(() => {
        if (e) {
          x(!0), y(!1);
          return
        }
        return y(!0), j.current = setTimeout(() => {
          x(!1), y(!1)
        }, 180), () => {
          j.current && (clearTimeout(j.current), j.current = null)
        }
      }, [e]), (0, a.useEffect)(() => {
        if ("undefined" == typeof document) return;
        let e = document.createElement("div");
        return document.body.appendChild(e), E(e), () => {
          document.body.removeChild(e), E(null)
        }
      }, []), (0, a.useEffect)(() => {
        if (!w) return;
        let e = e => {
            "Escape" === e.key ? l ? l() : o() : ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(e.key) && !C.current?.contains(e.target) && e.preventDefault()
          },
          t = e => {
            let t = C.current;
            if (!t) return void e.preventDefault();
            let a = e.target;
            if (!(a && t.contains(a))) return void e.preventDefault();
            if (e instanceof WheelEvent) {
              let t = T(a);
              t && q(t, e.deltaY) || e.preventDefault();
              return
            }
            if (e instanceof TouchEvent) {
              let t = e.touches[0]?.clientY ?? null,
                n = S.current;
              S.current = t;
              let r = T(a);
              r && q(r, null !== n && null !== t ? n - t : 0) || e.preventDefault()
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
      }, [q, T, o, l, w]), (0, a.useEffect)(() => {
        if (!w) return;
        let e = e => {
          if (!C.current?.contains(e.target)) {
            S.current = null;
            return
          }
          S.current = e.touches[0]?.clientY ?? null
        };
        return window.addEventListener("touchstart", e, {
          passive: !0
        }), () => window.removeEventListener("touchstart", e)
      }, [w]), !w || !b) return null;
    let B = "number" == typeof u ? `${u}px` : u,
      R = {};
    B && "auto" !== B ? R.maxWidth = B : (R.width = "fit-content", R.maxWidth = "clamp(100%, 100%, 850px)", R.boxSizing = "border-box");
    let O = _ ? "closing" : "open",
      L = (0, t.jsx)("div", {
        className: r.default.overlay,
        "data-centered": c,
        "data-state": O,
        onMouseDown: e => {
          k.current = e.target === e.currentTarget
        },
        onClick: e => {
          let t = e.target === e.currentTarget,
            a = h && t && k.current;
          k.current = !1, a && (s ? s() : o())
        },
        children: (0, t.jsxs)("div", {
          className: `${r.default.modal} ${m??""}`,
          "data-state": O,
          style: R,
          ref: C,
          onClick: e => e.stopPropagation(),
          children: [(d || p) && (0, t.jsxs)("div", {
            className: r.default.header,
            children: [d && (0, t.jsx)("h2", {
              className: r.default.title,
              style: f ? {
                textAlign: "center",
                width: "100%"
              } : {},
              children: d
            }), p && (0, t.jsx)("button", {
              type: "button",
              className: r.default.closeButton,
              onClick: i ?? o,
              children: (0, t.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                viewBox: "7.43 7.45 9.15 9.15",
                children: (0, t.jsx)("path", {
                  fill: "currentColor",
                  d: "m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"
                })
              })
            })]
          }), (0, t.jsx)("div", {
            className: `${r.default.body} ${g??""}`,
            children: v
          })]
        })
      });
    return (0, n.createPortal)(L, b)
  }
  e.s(["default", () => o])
}, 29066, e => {
  e.v({
    actions: "authExperience-module__Zt0w7q__actions",
    agreement: "authExperience-module__Zt0w7q__agreement",
    agreementList: "authExperience-module__Zt0w7q__agreementList",
    body: "authExperience-module__Zt0w7q__body",
    brand: "authExperience-module__Zt0w7q__brand",
    brandLink: "authExperience-module__Zt0w7q__brandLink",
    brandLogo: "authExperience-module__Zt0w7q__brandLogo",
    brandText: "authExperience-module__Zt0w7q__brandText",
    captchaWrapper: "authExperience-module__Zt0w7q__captchaWrapper",
    centeredStack: "authExperience-module__Zt0w7q__centeredStack",
    credentialsStack: "authExperience-module__Zt0w7q__credentialsStack",
    divider: "authExperience-module__Zt0w7q__divider",
    emailSection: "authExperience-module__Zt0w7q__emailSection",
    errorBanner: "authExperience-module__Zt0w7q__errorBanner",
    field: "authExperience-module__Zt0w7q__field",
    fieldInput: "authExperience-module__Zt0w7q__fieldInput",
    fieldInputWithPrefix: "authExperience-module__Zt0w7q__fieldInputWithPrefix",
    fieldLabel: "authExperience-module__Zt0w7q__fieldLabel",
    fieldPrefix: "authExperience-module__Zt0w7q__fieldPrefix",
    fieldRight: "authExperience-module__Zt0w7q__fieldRight",
    fieldShell: "authExperience-module__Zt0w7q__fieldShell",
    footer: "authExperience-module__Zt0w7q__footer",
    footerButton: "authExperience-module__Zt0w7q__footerButton",
    footerContainer: "authExperience-module__Zt0w7q__footerContainer",
    ghostButton: "authExperience-module__Zt0w7q__ghostButton",
    helperAction: "authExperience-module__Zt0w7q__helperAction",
    helperText: "authExperience-module__Zt0w7q__helperText",
    inlineLink: "authExperience-module__Zt0w7q__inlineLink",
    legal: "authExperience-module__Zt0w7q__legal",
    loadingIcon: "authExperience-module__Zt0w7q__loadingIcon",
    loadingMessage: "authExperience-module__Zt0w7q__loadingMessage",
    metaRow: "authExperience-module__Zt0w7q__metaRow",
    metaRowWrap: "authExperience-module__Zt0w7q__metaRowWrap",
    modalDescription: "authExperience-module__Zt0w7q__modalDescription",
    modalStack: "authExperience-module__Zt0w7q__modalStack",
    modalTextBlock: "authExperience-module__Zt0w7q__modalTextBlock",
    modalTitle: "authExperience-module__Zt0w7q__modalTitle",
    page: "authExperience-module__Zt0w7q__page",
    panel: "authExperience-module__Zt0w7q__panel",
    panelHeaderAction: "authExperience-module__Zt0w7q__panelHeaderAction",
    passwordHint: "authExperience-module__Zt0w7q__passwordHint",
    passwordReveal: "authExperience-module__Zt0w7q__passwordReveal",
    passwordRevealOpen: "authExperience-module__Zt0w7q__passwordRevealOpen",
    passwordToggle: "authExperience-module__Zt0w7q__passwordToggle",
    primaryButton: "authExperience-module__Zt0w7q__primaryButton",
    providerEyebrow: "authExperience-module__Zt0w7q__providerEyebrow",
    providerIconWrap: "authExperience-module__Zt0w7q__providerIconWrap",
    providerMeta: "authExperience-module__Zt0w7q__providerMeta",
    providerName: "authExperience-module__Zt0w7q__providerName",
    providerRow: "authExperience-module__Zt0w7q__providerRow",
    pwBar: "authExperience-module__Zt0w7q__pwBar",
    pwLabel: "authExperience-module__Zt0w7q__pwLabel",
    pwMeter: "authExperience-module__Zt0w7q__pwMeter",
    pwOn: "authExperience-module__Zt0w7q__pwOn",
    registerButton: "authExperience-module__Zt0w7q__registerButton",
    secondaryButton: "authExperience-module__Zt0w7q__secondaryButton",
    section: "authExperience-module__Zt0w7q__section",
    socialButton: "authExperience-module__Zt0w7q__socialButton",
    socialLastUsedBadge: "authExperience-module__Zt0w7q__socialLastUsedBadge",
    stepBackButton: "authExperience-module__Zt0w7q__stepBackButton",
    stepBackIcon: "authExperience-module__Zt0w7q__stepBackIcon",
    subtitle: "authExperience-module__Zt0w7q__subtitle",
    subtleText: "authExperience-module__Zt0w7q__subtleText",
    summaryCard: "authExperience-module__Zt0w7q__summaryCard",
    summaryCardButton: "authExperience-module__Zt0w7q__summaryCardButton",
    summaryEditAction: "authExperience-module__Zt0w7q__summaryEditAction",
    summaryGrid: "authExperience-module__Zt0w7q__summaryGrid",
    summaryHeader: "authExperience-module__Zt0w7q__summaryHeader",
    summaryInfoBlock: "authExperience-module__Zt0w7q__summaryInfoBlock",
    summaryLabel: "authExperience-module__Zt0w7q__summaryLabel",
    summaryLabelPlain: "authExperience-module__Zt0w7q__summaryLabelPlain",
    summaryValue: "authExperience-module__Zt0w7q__summaryValue",
    title: "authExperience-module__Zt0w7q__title",
    usernameSection: "authExperience-module__Zt0w7q__usernameSection",
    usernameStatus: "authExperience-module__Zt0w7q__usernameStatus",
    usernameStatusError: "authExperience-module__Zt0w7q__usernameStatusError",
    usernameStatusIcon: "authExperience-module__Zt0w7q__usernameStatusIcon",
    usernameStatusSuccess: "authExperience-module__Zt0w7q__usernameStatusSuccess"
  })
}, 87909, e => {
  "use strict";
  var t = e.i(48277),
    a = e.i(52202),
    n = e.i(29066);

  function r({
    title: e,
    subtitle: r,
    headerAction: o,
    children: s,
    footer: i,
    legal: l
  }) {
    return (0, t.jsx)("div", {
      className: n.default.page,
      children: (0, t.jsxs)("div", {
        className: n.default.panel,
        children: [o && (0, t.jsx)("div", {
          className: n.default.panelHeaderAction,
          children: o
        }), (0, t.jsxs)("div", {
          className: n.default.brand,
          children: [(0, t.jsx)(a.default, {
            href: "/",
            className: n.default.brandLink,
            children: (0, t.jsx)("img", {
              src: "https://assets.guns.lol/guns_logo_no_background_cropped.png",
              alt: "guns.lol",
              className: n.default.brandLogo
            })
          }), (0, t.jsxs)("div", {
            className: n.default.brandText,
            children: [(0, t.jsx)("h1", {
              className: n.default.title,
              children: e
            }), r && (0, t.jsx)("p", {
              className: n.default.subtitle,
              children: r
            })]
          })]
        }), (0, t.jsx)("div", {
          className: n.default.body,
          children: s
        }), i && (0, t.jsx)("div", {
          className: n.default.footer,
          children: i
        }), l && (0, t.jsx)("div", {
          className: n.default.legal,
          children: l
        })]
      })
    })
  }
  e.s(["default", () => r])
}, 96836, e => {
  "use strict";
  var t = e.i(48277);
  let a = {
    mfaToken: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6zm9 15q-2.075 0-3.537-1.463T13 18q0-2.075 1.463-3.537T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23m1.65-2.65l.7-.7l-1.85-1.85V15h-1v3.2zM12.25 22H6q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v1.3q-.5-.175-1-.238T18 11q-2.925 0-4.962 2.038T11 18q0 1.075.338 2.088T12.25 22"
      })
    }),
    discord: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"
      })
    }),
    google: (0, t.jsxs)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 256 262",
      children: [(0, t.jsx)("path", {
        fill: "#4285F4",
        d: "M255.68 133.53c0-10.03-.9-19.66-2.57-28.9H130.55v54.68h70.03c-3.02 16.27-12.17 30.06-25.94 39.29v32.66h41.93c24.54-22.6 38.71-55.94 38.71-97.73"
      }), (0, t.jsx)("path", {
        fill: "#34A853",
        d: "M130.55 261.1c35.1 0 64.56-11.63 86.08-31.48l-41.93-32.66c-11.63 7.8-26.51 12.4-44.15 12.4c-33.92 0-62.64-22.9-72.9-53.68H14.3v33.66c21.4 42.52 65.42 71.76 116.25 71.76"
      }), (0, t.jsx)("path", {
        fill: "#FBBC05",
        d: "M57.65 155.68c-2.61-7.8-4.1-16.12-4.1-24.68s1.49-16.88 4.1-24.68V72.66H14.3C5.18 90.84 0 110.2 0 131s5.18 40.16 14.3 58.34z"
      }), (0, t.jsx)("path", {
        fill: "#EA4335",
        d: "M130.55 52.64c19.08 0 36.2 6.56 49.66 19.43l37.25-37.25C195.05 13.97 165.58 0 130.55 0C79.72 0 35.7 29.24 14.3 72.66l43.35 33.66c10.26-30.78 38.98-53.68 72.9-53.68"
      })]
    }),
    email: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M13.425 11.9q.275.2.575.2t.575-.2L21 7.425V5l-7 4.85L7 5v2.425zM3 21q-.825 0-1.412-.587T1 19V7.5q0-.425.288-.712T2 6.5q.425 0 .713.288T3 7.5V19h15.5q.425 0 .713.288T19.5 20q0 .425-.288.713T18.5 21zm4-4q-.825 0-1.412-.587T5 15V5q0-.825.588-1.412T7 3h14q.825 0 1.413.588T23 5v10q0 .825-.587 1.413T21 17z"
      })
    }),
    password: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 256 256",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M160 16a80.07 80.07 0 0 0-76.09 104.78l-57.57 57.56A8 8 0 0 0 24 184v40a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 5.66-2.34l9.56-9.57A80 80 0 1 0 160 16m20 76a16 16 0 1 1 16-16a16 16 0 0 1-16 16"
      })
    }),
    loading: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsxs)("g", {
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "2",
        children: [(0, t.jsx)("path", {
          strokeDasharray: "60",
          strokeDashoffset: "60",
          strokeOpacity: ".3",
          d: "M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z",
          children: (0, t.jsx)("animate", {
            fill: "freeze",
            attributeName: "stroke-dashoffset",
            dur: "1.3s",
            values: "60;0"
          })
        }), (0, t.jsxs)("path", {
          strokeDasharray: "15",
          strokeDashoffset: "15",
          d: "M12 3C16.9706 3 21 7.02944 21 12",
          children: [(0, t.jsx)("animate", {
            fill: "freeze",
            attributeName: "stroke-dashoffset",
            dur: "0.3s",
            values: "15;0"
          }), (0, t.jsx)("animateTransform", {
            attributeName: "transform",
            dur: "1.5s",
            repeatCount: "indefinite",
            type: "rotate",
            values: "0 12 12;360 12 12"
          })]
        })]
      })
    }),
    newLocation: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M12 2c3.31 0 6 2.66 6 5.95C18 12.41 12 19 12 19S6 12.41 6 7.95C6 4.66 8.69 2 12 2m0 4a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m8 13c0 2.21-3.58 4-8 4s-8-1.79-8-4c0-1.29 1.22-2.44 3.11-3.17l.64.91C6.67 17.19 6 17.81 6 18.5c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5c0-.69-.67-1.31-1.75-1.76l.64-.91C18.78 16.56 20 17.71 20 19"
      })
    }),
    mfaRecoveryCode: (0, t.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: (0, t.jsx)("path", {
        fill: "currentColor",
        d: "M16.75 8c0-1.478-.33-2.901-1.107-3.975c-.8-1.107-2.03-1.775-3.643-1.775s-2.842.668-3.643 1.775C7.58 5.099 7.25 6.522 7.25 8v1.25h-.58c-.535 0-.98 0-1.345.03c-.38.031-.736.098-1.073.27a2.75 2.75 0 0 0-1.202 1.202c-.172.337-.24.694-.27 1.074c-.03.364-.03.81-.03 1.344v4.66c0 .535 0 .98.03 1.345c.03.38.098.737.27 1.074a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.239 1.073.27c.365.03.81.03 1.345.03h10.66c.535 0 .98 0 1.345-.03c.38-.031.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.202c.172-.337.24-.694.27-1.074c.03-.364.03-.81.03-1.344V13.17c0-.534 0-.98-.03-1.344c-.03-.38-.098-.737-.27-1.074a2.75 2.75 0 0 0-1.2-1.202c-.338-.172-.694-.239-1.074-.27c-.365-.03-.81-.03-1.345-.03h-.58zm-8 0c0-1.283.29-2.36.822-3.096c.51-.703 1.28-1.154 2.428-1.154s1.919.45 2.428 1.154c.532.736.822 1.813.822 3.096v1.25h-6.5zm4 7.25v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 1.5 0M16 14.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75m-7.25.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 1.5 0"
      })
    })
  };
  e.s(["default", 0, a])
}, 15149, (e, t, a) => {
  t.exports = e.r(77878)
}, 25036, e => {
  e.v({
    buttonText: "authSocialButtons-module__w6Pl8G__buttonText",
    compact: "authSocialButtons-module__w6Pl8G__compact",
    icon: "authSocialButtons-module__w6Pl8G__icon",
    lastUsedBadge: "authSocialButtons-module__w6Pl8G__lastUsedBadge",
    socialButton: "authSocialButtons-module__w6Pl8G__socialButton",
    socialButtons: "authSocialButtons-module__w6Pl8G__socialButtons"
  })
}, 6289, 10043, e => {
  "use strict";

  function t(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }

  function a(e, t) {
    return (a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
      return e.__proto__ = t, e
    })(e, t)
  }
  var n = e.i(30668),
    r = Object.defineProperty,
    o = Object.defineProperties,
    s = Object.getOwnPropertyDescriptors,
    i = Object.getOwnPropertySymbols,
    l = Object.prototype.hasOwnProperty,
    d = Object.prototype.propertyIsEnumerable,
    c = (e, t, a) => t in e ? r(e, t, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: a
    }) : e[t] = a,
    u = (e, t) => {
      for (var a in t || (t = {})) l.call(t, a) && c(e, a, t[a]);
      if (i)
        for (var a of i(t)) d.call(t, a) && c(e, a, t[a]);
      return e
    },
    h = (e, t, a) => (c(e, "symbol" != typeof t ? t + "" : t, a), a),
    p = (e, t, a) => new Promise((n, r) => {
      var o = e => {
          try {
            i(a.next(e))
          } catch (e) {
            r(e)
          }
        },
        s = e => {
          try {
            i(a.throw(e))
          } catch (e) {
            r(e)
          }
        },
        i = e => e.done ? n(e.value) : Promise.resolve(e.value).then(o, s);
      i((a = a.apply(e, t)).next())
    }),
    f = "hCaptchaOnLoad",
    m = "script-error",
    g = "@hCaptcha/loader";

  function v(e) {
    let t = e && e.ownerDocument || document,
      a = t.defaultView || t.parentWindow || window;
    return {
      document: t,
      window: a
    }
  }

  function w(e) {
    return e || document.head
  }
  var x = class e {
      constructor(e) {
        h(this, "_parent"), h(this, "breadcrumbs", []), h(this, "context", {}), h(this, "extra", {}), h(this, "tags", {}), h(this, "request"), h(this, "user"), this._parent = e
      }
      get parent() {
        return this._parent
      }
      child() {
        return new e(this)
      }
      setRequest(e) {
        return this.request = e, this
      }
      removeRequest() {
        return this.request = void 0, this
      }
      addBreadcrumb(e) {
        return typeof e.timestamp > "u" && (e.timestamp = new Date().toISOString()), this.breadcrumbs.push(e), this
      }
      setExtra(e, t) {
        return this.extra[e] = t, this
      }
      removeExtra(e) {
        return delete this.extra[e], this
      }
      setContext(e, t) {
        return typeof t.type > "u" && (t.type = e), this.context[e] = t, this
      }
      removeContext(e) {
        return delete this.context[e], this
      }
      setTags(e) {
        return this.tags = u(u({}, this.tags), e), this
      }
      setTag(e, t) {
        return this.tags[e] = t, this
      }
      removeTag(e) {
        return delete this.tags[e], this
      }
      setUser(e) {
        return this.user = e, this
      }
      removeUser() {
        return this.user = void 0, this
      }
      toBody() {
        let e = [],
          t = this;
        for (; t;) e.push(t), t = t.parent;
        return e.reverse().reduce((e, t) => {
          var a;
          return e.breadcrumbs = [...null != (a = e.breadcrumbs) ? a : [], ...t.breadcrumbs], e.extra = u(u({}, e.extra), t.extra), e.contexts = u(u({}, e.contexts), t.context), e.tags = u(u({}, e.tags), t.tags), t.user && (e.user = t.user), t.request && (e.request = t.request), e
        }, {
          breadcrumbs: [],
          extra: {},
          contexts: {},
          tags: {},
          request: void 0,
          user: void 0
        })
      }
      clear() {
        this.breadcrumbs = [], this.context = {}, this.tags = {}, this.user = void 0
      }
    },
    _ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,
    y = "An unknown error occurred";

  function b(e) {
    return (e + 256).toString(16).substring(1)
  }
  var E, j = [
      [/^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, "chrome"],
      [/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, "winjs"],
      [/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i, "gecko"]
    ],
    C = (E = class {
      constructor(e) {
        var t, a, n, r, o;
        h(this, "apiURL"), h(this, "dsn"), h(this, "environment"), h(this, "release"), h(this, "sampleRate"), h(this, "debug"), h(this, "_scope"), h(this, "shouldBuffer", !1), h(this, "bufferlimit", 20), h(this, "buffer", []), this.environment = e.environment, this.release = e.release, this.sampleRate = null != (t = e.sampleRate) ? t : 1, this.debug = null != (a = e.debug) && a, this._scope = null != (n = e.scope) ? n : new x, this.apiURL = function(e) {
          let t = _.exec(e),
            a = t ? t.slice(1) : [];
          if (6 !== a.length) throw Error("Invalid DSN");
          let n = a[5].split("/"),
            r = n.slice(0, -1).join("/");
          return a[0] + "://" + a[3] + (a[4] ? ":" + a[4] : "") + (r ? "/" + r : "") + "/api/" + n.pop() + "/envelope/?sentry_version=7&sentry_key=" + a[1] + (a[2] ? "&sentry_secret=" + a[2] : "")
        }(e.dsn), this.dsn = e.dsn, this.shouldBuffer = null != (r = e.buffer) && r, this.bufferlimit = null != (o = e.bufferLimit) ? o : 20
      }
      static init(e) {
        E._instance || (E._instance = new E(e))
      }
      static get instance() {
        if (!E._instance) throw Error("Sentry has not been initialized");
        return E._instance
      }
      log(...e) {
        this.debug && console.log(...e)
      }
      get scope() {
        return this._scope
      }
      static get scope() {
        return E.instance.scope
      }
      withScope(e) {
        e(this._scope.child())
      }
      static withScope(e) {
        E.instance.withScope(e)
      }
      captureException(e, t) {
        this.captureEvent({
          type: "exception",
          level: "error",
          error: function(e) {
            if (e instanceof Error) return e;
            if ("string" == typeof e) return Error(e);
            if ("object" == typeof e && null !== e && !Array.isArray(e)) {
              let {
                message: t
              } = e, a = ((e, t) => {
                var a = {};
                for (var n in e) l.call(e, n) && 0 > t.indexOf(n) && (a[n] = e[n]);
                if (null != e && i)
                  for (var n of i(e)) 0 > t.indexOf(n) && d.call(e, n) && (a[n] = e[n]);
                return a
              })(e, ["message"]);
              return Object.assign(Error("string" == typeof t ? t : y), a)
            }
            return Object.assign(Error(y), {
              cause: e
            })
          }(e),
          scope: null != t ? t : this._scope
        })
      }
      static captureException(e, t) {
        E.instance.captureException(e, t)
      }
      captureMessage(e, t = "info", a) {
        this.captureEvent({
          type: "message",
          level: t,
          message: e,
          scope: null != a ? a : this._scope
        })
      }
      static captureMessage(e, t = "info", a) {
        E.instance.captureMessage(e, t, a)
      }
      captureEvent(e) {
        if (Math.random() >= this.sampleRate) return void this.log("Dropped event due to sample rate");
        if (this.shouldBuffer) {
          if (this.buffer.length >= this.bufferlimit) return;
          this.buffer.push(e)
        } else this.sendEvent(e)
      }
      sendEvent(e, t = 5e3) {
        return p(this, null, function*() {
          try {
            this.log("Sending sentry event", e);
            let a = function(e, t, a) {
                var n, r, o;
                let s, i = u({
                  event_id: ((s = function(e) {
                    for (let t = 0; t < e.length; t++) e[t] = Math.floor(256 * Math.random());
                    return e
                  }(Array(16)))[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, b(s[0]) + b(s[1]) + b(s[2]) + b(s[3]) + "-" + b(s[4]) + b(s[5]) + "-" + b(s[6]) + b(s[7]) + "-" + b(s[8]) + b(s[9]) + "-" + b(s[10]) + b(s[11]) + b(s[12]) + b(s[13]) + b(s[14]) + b(s[15])).replaceAll("-", ""),
                  platform: "javascript",
                  sdk: {
                    name: "@hcaptcha/sentry",
                    version: "0.0.4"
                  },
                  environment: t,
                  release: a,
                  timestamp: Date.now() / 1e3
                }, e.scope.toBody());
                if ("exception" === e.type) {
                  let t;
                  i.message = null != (r = null == (n = e.error) ? void 0 : n.message) ? r : "Unknown error", i.fingerprint = [i.message];
                  let a = [],
                    s = e.error;
                  for (let e = 0; e < 5 && s && (a.push((t = function(e) {
                      var t, a, n, r;
                      if (!e.stack) return null;
                      let o = [],
                        s = null != (n = null == (a = (t = e.stack).split) ? void 0 : a.call(t, `
`)) ? n : [];
                      for (let t = 0; t < s.length; ++t) {
                        let a = null,
                          n = null,
                          i = null;
                        for (let [e, a] of j)
                          if (n = e.exec(s[t])) {
                            i = a;
                            break
                          } if (!(!n || !i)) {
                          if ("chrome" === i) a = {
                            filename: null != (r = n[2]) && r.startsWith("address at ") ? n[2].substring(11) : n[2],
                            function: n[1] || "?",
                            lineno: n[3] ? +n[3] : null,
                            colno: n[4] ? +n[4] : null
                          };
                          else if ("winjs" === i) a = {
                            filename: n[2],
                            function: n[1] || "?",
                            lineno: +n[3],
                            colno: n[4] ? +n[4] : null
                          };
                          else {
                            if ("gecko" !== i) continue;
                            0 === t && !n[5] && void 0 !== e.columnNumber && o.length > 0 && (o[0].column = e.columnNumber + 1), a = {
                              filename: n[3],
                              function: n[1] || "?",
                              lineno: n[4] ? +n[4] : null,
                              colno: n[5] ? +n[5] : null
                            }
                          }!a.function && a.lineno && (a.function = "?"), o.push(a)
                        }
                      }
                      return o.length ? o.reverse() : null
                    }(o = s), {
                      type: o.name,
                      value: o.message,
                      stacktrace: {
                        frames: null != t ? t : []
                      }
                    })), !(!s.cause || !(s.cause instanceof Error))); e++) s = s.cause;
                  i.exception = {
                    values: a.reverse()
                  }
                }
                return "message" === e.type && (i.message = e.message, i.level = e.level), i
              }(e, this.environment, this.release),
              n = {
                event_id: a.event_id,
                dsn: this.dsn
              },
              r = JSON.stringify(n) + `
` + JSON.stringify({
                type: "event"
              }) + `
` + JSON.stringify(a),
              i = yield function(e, t, a) {
                return p(this, null, function*() {
                  var n, r;
                  try {
                    if ("u" > typeof fetch && "u" > typeof AbortSignal) {
                      let n, r, i;
                      if (a) {
                        let e = new AbortController;
                        n = e.signal, setTimeout(() => e.abort(), a)
                      }
                      let l = yield fetch(e, (r = u({}, t), i = {
                        signal: n
                      }, o(r, s(i)))), d = yield l.text();
                      return {
                        status: l.status,
                        body: d
                      }
                    }
                    return yield new Promise((n, r) => {
                      var o, s;
                      let i = new XMLHttpRequest;
                      if (i.open(null != (o = null == t ? void 0 : t.method) ? o : "GET", e), i.onload = () => n({
                          status: i.status,
                          body: i.responseText
                        }), i.onerror = () => r(Error("XHR Network Error")), null == t ? void 0 : t.headers)
                        for (let [e, a] of Object.entries(t.headers)) i.setRequestHeader(e, a);
                      if (a) {
                        let e = setTimeout(() => {
                          i.abort(), r(Error("Request timed out"))
                        }, a);
                        i.onloadend = () => {
                          clearTimeout(e)
                        }
                      }
                      i.send(null == (s = null == t ? void 0 : t.body) ? void 0 : s.toString())
                    })
                  } catch (e) {
                    return {
                      status: 0,
                      body: null != (r = null == (n = null == e ? void 0 : e.toString) ? void 0 : n.call(e)) ? r : "Unknown error"
                    }
                  }
                })
              }(this.apiURL, {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-sentry-envelope"
                },
                body: r
              }, t);
            this.log("Sentry response", i.status), 200 !== i.status && (console.log(i.body), console.error("Failed to send event to Sentry", i))
          } catch (e) {
            console.error("Failed to send event", e)
          }
        })
      }
      flush(e = 5e3) {
        return p(this, null, function*() {
          try {
            this.log("Flushing sentry events", this.buffer.length);
            let t = this.buffer.splice(0, this.buffer.length).map(t => this.sendEvent(t, e));
            yield Promise.all(t), this.log("Flushed all events")
          } catch (e) {
            console.error("Failed to flush events", e)
          }
        })
      }
      static flush(e = 5e3) {
        return E.instance.flush(e)
      }
      static reset() {
        E._instance = void 0
      }
    }, h(E, "_instance"), E);

  function S(e = null) {
    return {
      addBreadcrumb: t => {
        e && e.addBreadcrumb(t)
      },
      captureRequest: t => {
        e && e.setRequest(t)
      },
      captureException: t => {
        e && C.captureException(t, e)
      }
    }
  }
  var k = [];

  function N(e) {
    var t = e && e.ownerDocument || document,
      a = t.defaultView || t.parentWindow || window;
    return {
      document: t,
      window: a
    }
  }

  function T(e) {
    return e || document.head
  }
  var q = function(e) {
    function r(a) {
      var r;
      return (r = e.call(this, a) || this)._hcaptcha = void 0, r.renderCaptcha = r.renderCaptcha.bind(t(r)), r.resetCaptcha = r.resetCaptcha.bind(t(r)), r.removeCaptcha = r.removeCaptcha.bind(t(r)), r.isReady = r.isReady.bind(t(r)), r._onReady = null, r.loadCaptcha = r.loadCaptcha.bind(t(r)), r.handleOnLoad = r.handleOnLoad.bind(t(r)), r.handleSubmit = r.handleSubmit.bind(t(r)), r.handleExpire = r.handleExpire.bind(t(r)), r.handleError = r.handleError.bind(t(r)), r.handleOpen = r.handleOpen.bind(t(r)), r.handleClose = r.handleClose.bind(t(r)), r.handleChallengeExpired = r.handleChallengeExpired.bind(t(r)), r.ref = n.createRef(), r.apiScriptRequested = !1, r.sentryHub = null, r.captchaId = "", r._pendingExecute = null, r.state = {
        isApiReady: !1,
        isRemoved: !1,
        elementId: a.id
      }, r
    }
    r.prototype = Object.create(e.prototype), r.prototype.constructor = r, a(r, e);
    var i = r.prototype;
    return i.componentDidMount = function() {
      var e = this,
        t = N(T(this.props.scriptLocation));
      (this._hcaptcha = t.window.hcaptcha || void 0, void 0 !== this._hcaptcha) ? this.setState({
        isApiReady: !0
      }, function() {
        e.renderCaptcha()
      }): this.loadCaptcha()
    }, i.componentWillUnmount = function() {
      var e = this._hcaptcha,
        t = this.captchaId;
      this._cancelPendingExecute("react-component-unmounted"), this.isReady() && (e.reset(t), e.remove(t))
    }, i.shouldComponentUpdate = function(e, t) {
      return this.state.isApiReady === t.isApiReady && this.state.isRemoved === t.isRemoved
    }, i.componentDidUpdate = function(e) {
      var t = this;
      ["sitekey", "size", "theme", "tabindex", "languageOverride", "endpoint"].every(function(a) {
        return e[a] === t.props[a]
      }) || this.removeCaptcha(function() {
        t.renderCaptcha()
      })
    }, i.loadCaptcha = function() {
      if (!this.apiScriptRequested) {
        var e = this.props,
          t = e.apihost,
          a = e.assethost,
          n = e.endpoint,
          r = e.host,
          i = e.imghost,
          l = e.languageOverride,
          d = e.reCaptchaCompat,
          c = e.reportapi,
          h = e.sentry,
          x = e.custom,
          _ = e.loadAsync,
          y = e.scriptLocation,
          b = e.scriptSource,
          E = e.secureApi,
          j = e.cleanup,
          N = e.userJourneys;
        (function() {
          return p(this, arguments, function*(e = {}) {
            let t = function(e = !0) {
              var t, a, n, r, i, l, d;
              let c, h, p, f, m;
              if (!e) return S();
              C.init({
                dsn: "https://d233059272824702afc8c43834c4912d@sentry.hcaptcha.com/6",
                release: "2.2.0",
                environment: "production"
              });
              let v = C.scope;
              return v.setTag("source", g), v.setTag("url", document.URL), v.setContext("os", {
                UA: navigator.userAgent
              }), v.setContext("browser", u({}, (-1 !== (c = navigator.userAgent).indexOf("Firefox") ? (h = "Firefox", p = null == (a = c.match(/Firefox\/([\d.]+)/)) ? void 0 : a[1]) : -1 !== c.indexOf("Edg") ? (h = "Microsoft Edge", p = null == (n = c.match(/Edg\/([\d.]+)/)) ? void 0 : n[1]) : -1 !== c.indexOf("Chrome") && -1 !== c.indexOf("Safari") ? (h = "Chrome", p = null == (r = c.match(/Chrome\/([\d.]+)/)) ? void 0 : r[1]) : -1 !== c.indexOf("Safari") && -1 === c.indexOf("Chrome") ? (h = "Safari", p = null == (i = c.match(/Version\/([\d.]+)/)) ? void 0 : i[1]) : -1 !== c.indexOf("Opera") || -1 !== c.indexOf("OPR") ? (h = "Opera", p = null == (l = c.match(/(Opera|OPR)\/([\d.]+)/)) ? void 0 : l[2]) : -1 !== c.indexOf("MSIE") || -1 !== c.indexOf("Trident") ? (h = "Internet Explorer", p = null == (d = c.match(/(MSIE |rv:)([\d.]+)/)) ? void 0 : d[2]) : (h = "Unknown", p = "Unknown"), {
                name: h,
                version: p
              }))), v.setContext("device", o(u({}, {
                model: m = -1 !== (f = navigator.userAgent).indexOf("Win") ? "Windows" : -1 !== f.indexOf("Mac") ? "Mac" : -1 !== f.indexOf("Linux") ? "Linux" : -1 !== f.indexOf("Android") ? "Android" : -1 !== f.indexOf("like Mac") || -1 !== f.indexOf("iPhone") || -1 !== f.indexOf("iPad") ? "iOS" : "Unknown",
                family: m,
                device: /Mobile|iPhone|iPod|Android/i.test(f) ? "Mobile" : /Tablet|iPad/i.test(f) ? "Tablet" : "Desktop"
              }), s({
                screen_width_pixels: screen.width,
                screen_height_pixels: screen.height,
                language: navigator.language,
                orientation: (null == (t = screen.orientation) ? void 0 : t.type) || "Unknown",
                processor_count: navigator.hardwareConcurrency,
                platform: navigator.platform
              }))), S(v)
            }(e.sentry);
            return yield function e(t, a, n = 0) {
              return p(this, null, function*() {
                let r = n < 2 ? "Retry loading hCaptcha Api" : "Exceeded maximum retries";
                try {
                  return yield function(e = {
                    cleanup: !1
                  }, t) {
                    try {
                      t.addBreadcrumb({
                        category: g,
                        message: "hCaptcha loader params",
                        data: e
                      });
                      let a = w(e.scriptLocation),
                        n = v(a),
                        r = k.find(({
                          scope: e
                        }) => e === n.window);
                      if (r) return t.addBreadcrumb({
                        category: g,
                        message: "hCaptcha already loaded"
                      }), r.promise;
                      let o = new Promise((a, o) => p(this, null, function*() {
                        try {
                          var s;
                          n.window[f] = () => {
                            t.addBreadcrumb({
                              category: g,
                              message: "hCaptcha script called onload function"
                            }), a(n.window.hcaptcha)
                          };
                          let o = (s = {
                            custom: e.custom,
                            render: e.render,
                            sentry: e.sentry,
                            assethost: e.assethost,
                            imghost: e.imghost,
                            reportapi: e.reportapi,
                            endpoint: e.endpoint,
                            host: e.host,
                            recaptchacompat: e.recaptchacompat,
                            hl: e.hl,
                            uj: e.uj
                          }, Object.entries(s).filter(([, e]) => e || !1 === e).map(([e, t]) => `${encodeURIComponent(e)}=${encodeURIComponent(String(t))}`).join("&"));
                          yield function({
                            scriptLocation: e,
                            query: t,
                            loadAsync: a = !0,
                            crossOrigin: n = "anonymous",
                            apihost: r = "https://js.hcaptcha.com",
                            cleanup: o = !1,
                            secureApi: s = !1,
                            scriptSource: i = ""
                          } = {}, l) {
                            let d = w(e),
                              c = v(d);
                            return new Promise((e, u) => {
                              let h = c.document.createElement("script");
                              h.id = "hCaptcha-script", i ? h.src = `${i}?onload=${f}` : s ? h.src = `${r}/1/secure-api.js?onload=${f}` : h.src = `${r}/1/api.js?onload=${f}`, h.crossOrigin = n, h.async = a;
                              let p = (e, t) => {
                                try {
                                  !s && o && d.removeChild(h), t(e)
                                } catch (e) {
                                  u(e)
                                }
                              };
                              h.onload = t => p(t, e), h.onerror = e => {
                                l && l(h.src), p(e, u)
                              }, h.src += "" !== t ? `&${t}` : "", d.appendChild(h)
                            })
                          }(u({
                            query: o
                          }, e), e => {
                            t.captureRequest({
                              url: e,
                              method: "GET"
                            })
                          }), t.addBreadcrumb({
                            category: g,
                            message: "hCaptcha loaded",
                            data: r
                          })
                        } catch (a) {
                          t.addBreadcrumb({
                            category: g,
                            message: "hCaptcha failed to load"
                          });
                          let e = k.findIndex(e => e.scope === n.window); - 1 !== e && k.splice(e, 1), o(Error(m))
                        }
                      }));
                      return k.push({
                        promise: o,
                        scope: n.window
                      }), o
                    } catch (e) {
                      return t.captureException(e), Promise.reject(Error(m))
                    }
                  }(t, a)
                } catch (o) {
                  return a.addBreadcrumb({
                    category: g,
                    message: r
                  }), n >= 2 ? (a.captureException(o), Promise.reject(o)) : e(t, a, n += 1)
                }
              })
            }(e, t)
          })
        })({
          render: "explicit",
          apihost: t,
          assethost: a,
          endpoint: n,
          hl: l,
          host: r,
          imghost: i,
          recaptchacompat: !1 === d ? "off" : null,
          reportapi: c,
          sentry: h,
          custom: x,
          loadAsync: _,
          scriptLocation: y,
          scriptSource: b,
          secureApi: E,
          cleanup: void 0 === j || j,
          uj: void 0 !== N && N
        }).then(this.handleOnLoad, this.handleError).catch(this.handleError), this.apiScriptRequested = !0
      }
    }, i.renderCaptcha = function(e) {
      var t = this,
        a = this.props.onReady,
        n = this.state.isApiReady,
        r = this.captchaId;
      if (n && !r) {
        var o = Object.assign({
            "open-callback": this.handleOpen,
            "close-callback": this.handleClose,
            "error-callback": this.handleError,
            "chalexpired-callback": this.handleChallengeExpired,
            "expired-callback": this.handleExpire,
            callback: this.handleSubmit
          }, this.props, {
            hl: this.props.hl || this.props.languageOverride,
            languageOverride: void 0
          }),
          s = this._hcaptcha.render(this.ref.current, o);
        this.captchaId = s, this.setState({
          isRemoved: !1
        }, function() {
          e && e(), a && a(), t._onReady && t._onReady(s)
        })
      }
    }, i.resetCaptcha = function() {
      var e = this._hcaptcha,
        t = this.captchaId;
      this.isReady() && (e.reset(t), this._cancelPendingExecute("hcaptcha-reset"))
    }, i.removeCaptcha = function(e) {
      var t = this,
        a = this._hcaptcha,
        n = this.captchaId;
      this._cancelPendingExecute("hcaptcha-removed"), this.isReady() && this.setState({
        isRemoved: !0
      }, function() {
        t.captchaId = "", a.remove(n), e && e()
      })
    }, i.handleOnLoad = function() {
      var e = this;
      this.setState({
        isApiReady: !0
      }, function() {
        var t = N(T(e.props.scriptLocation));
        e._hcaptcha = t.window.hcaptcha, e.renderCaptcha(function() {
          var t = e.props.onLoad;
          t && t()
        })
      })
    }, i.handleSubmit = function(e) {
      var t = this.props.onVerify,
        a = this.state.isRemoved,
        n = this._hcaptcha,
        r = this.captchaId;
      if (void 0 !== n && !a) {
        var o = n.getResponse(r),
          s = n.getRespKey(r);
        t && t(o, s)
      }
    }, i.handleExpire = function() {
      var e = this.props.onExpire,
        t = this._hcaptcha,
        a = this.captchaId;
      this.isReady() && (t.reset(a), e && e())
    }, i.handleError = function(e) {
      var t = this.props.onError,
        a = this._hcaptcha,
        n = this.captchaId;
      this.isReady() && a.reset(n), t && t(e)
    }, i.isReady = function() {
      var e = this.state,
        t = e.isApiReady,
        a = e.isRemoved;
      return t && !a
    }, i._cancelPendingExecute = function(e) {
      if (this._pendingExecute) {
        var t = this._pendingExecute;
        this._pendingExecute = null;
        var a = Error(e);
        t.reject(a)
      }
    }, i.handleOpen = function() {
      this.isReady() && this.props.onOpen && this.props.onOpen()
    }, i.handleClose = function() {
      this.isReady() && this.props.onClose && this.props.onClose()
    }, i.handleChallengeExpired = function() {
      this.isReady() && this.props.onChalExpired && this.props.onChalExpired()
    }, i.execute = function(e) {
      var t = this;
      void 0 === e && (e = null), e = "object" == typeof e ? e : null;
      try {
        var a = this._hcaptcha,
          n = this.captchaId;
        if (e && e.async && this._pendingExecute && this._cancelPendingExecute("hcaptcha-execute-replaced"), !this.isReady())
          if (e && e.async) return new Promise(function(n, r) {
            t._pendingExecute = {
              resolve: n,
              reject: r
            }, t._onReady = function(o) {
              if (t._pendingExecute) try {
                var s = a.execute(o, e);
                s && "function" == typeof s.then ? s.then(function(e) {
                  t._pendingExecute = null, n(e)
                }).catch(function(e) {
                  t._pendingExecute = null, r(e)
                }) : (t._pendingExecute = null, r(Error("hcaptcha-execute-no-promise")))
              } catch (e) {
                t._pendingExecute = null, r(e)
              }
            }
          });
          else return this._onReady = function(t) {
            a.execute(t, e)
          }, null;
        var r = a.execute(n, e);
        if (e && e.async && r && "function" == typeof r.then) return new Promise(function(e, a) {
          t._pendingExecute = {
            resolve: e,
            reject: a
          }, r.then(function(a) {
            t._pendingExecute = null, e(a)
          }).catch(function(e) {
            t._pendingExecute = null, a(e)
          })
        });
        return r
      } catch (t) {
        if (e && e.async) return Promise.reject(t);
        return null
      }
    }, i.close = function() {
      var e = this._hcaptcha,
        t = this.captchaId;
      if (this._cancelPendingExecute("hcaptcha-closed"), this.isReady()) return e.close(t)
    }, i.setData = function(e) {
      var t = this._hcaptcha,
        a = this.captchaId;
      this.isReady() && (e && "object" != typeof e && (e = null), t.setData(a, e))
    }, i.getResponse = function() {
      return this._hcaptcha.getResponse(this.captchaId)
    }, i.getRespKey = function() {
      return this._hcaptcha.getRespKey(this.captchaId)
    }, i.render = function() {
      var e = this.state.elementId;
      return n.createElement("div", {
        ref: this.ref,
        id: e
      })
    }, r
  }(n.Component);
  e.s(["default", 0, q], 6289);
  var B = e.i(39057),
    R = e.i(48277),
    O = e.i(25036),
    L = e.i(96836),
    P = e.i(17435);
  let I = B.default.env.NEXT_PUBLIC_API_URL || "https://guns.lol",
    Z = "guns_last_social_provider",
    M = "guns_last_social_used_at";

  function A({
    returnUri: e,
    setError: t,
    actionLabel: a = "continue",
    usernameHint: r = "",
    refParameter: o = ""
  }) {
    let s = (0, P.useT)(),
      [i, l] = (0, n.useState)(null),
      [d, c] = (0, n.useState)(null),
      [u, h] = (0, n.useState)(""),
      p = {
        google: {
          continue: s("auth.social.continue_with_google"),
          signup: s("auth.social.signup_with_google"),
          icon: L.default.google
        }
      };
    (0, n.useEffect)(() => {
      let e = window.localStorage.getItem(Z),
        t = Number(window.localStorage.getItem(M) || "0");
      "google" === e && t > 0 && (c("google"), h(s("auth.social.last_used")))
    }, []);
    let f = async a => {
      try {
        l(a), t?.("");
        {
          let e = Date.now();
          window.localStorage.setItem(Z, a), window.localStorage.setItem(M, String(e))
        }
        let n = new URLSearchParams({
            returnUri: e
          }),
          s = r.toLowerCase().replace(/[^a-z0-9._]/g, "").slice(0, 16);
        s && n.set("usernameHint", s), o && n.set("ref", o);
        let i = await fetch(`${I}/api/auth/oauth/${a}/url?${n.toString()}`);
        if (!i.ok) throw Error("Could not start sign-in");
        let d = await i.json();
        if (!d?.url) throw Error("Missing redirect url");
        window.location.href = d.url
      } catch {
        l(null), t?.(s("auth.social.error_start"))
      }
    };
    return (0, R.jsx)("div", {
      className: O.default.socialButtons,
      children: ["google"].map(e => {
        let t = p[e],
          n = i === e;
        return (0, R.jsxs)("button", {
          type: "button",
          className: O.default.socialButton,
          onClick: () => f(e),
          disabled: null !== i,
          children: [t.icon, (0, R.jsx)("span", {
            className: O.default.buttonText,
            children: n ? s("auth.social.redirecting") : t[a]
          }), "continue" === a && d === e && u && (0, R.jsx)("span", {
            className: O.default.lastUsedBadge,
            children: u
          })]
        }, e)
      })
    })
  }
  e.s(["default", () => A], 10043)
}, 15796, e => {
  "use strict";
  var t = e.i(48277),
    a = e.i(30668),
    n = e.i(39057),
    r = e.i(15149),
    o = e.i(6289),
    s = e.i(96086),
    i = e.i(96836);
  let l = n.default.env.NEXT_PUBLIC_API_URL || "https://guns.lol";
  async function d(e, t, a, n, r, o, s, d) {
    try {
      o(i.default.loading), r("");
      let d = JSON.stringify({
          email: e,
          password: t,
          token: a,
          captchaProvider: n
        }),
        c = await fetch(l + "/api/auth/login", {
          method: "POST",
          body: d
        }),
        u = await c.json();
      if (c.ok) {
        if (u.newLocation) return s(u.resendToken), "newLocation";
        if (u.mfa) return "mfa";
        return 200
      }
      r(u.error)
    } catch (e) {
      return console.error(e.message), !1
    } finally {
      o(d("auth.login.login_text"))
    }
  }
  async function c(e, t, a, n, r, o, s) {
    try {
      o(i.default.loading), r("");
      let s = JSON.stringify({
          email: e,
          password: t,
          newLocationOTP: a,
          trustDevice: n
        }),
        d = await fetch(l + "/api/auth/login", {
          method: "POST",
          body: s
        }),
        c = await d.json();
      if (d.ok)
        if (c.mfa) return "mfa";
        else return 200;
      r(c.error)
    } catch (e) {
      return console.error(e.message), !1
    } finally {
      o(s("auth.login.submit_text"))
    }
  }
  async function u(e, t, a, n, r, o, s, d, c) {
    try {
      d(i.default.loading), s("");
      let c = JSON.stringify({
          email: e,
          password: t,
          mfaToken: a,
          trustDevice: r,
          newLocationOTP: n,
          useRecoveryCodes: o
        }),
        u = await fetch(l + "/api/auth/login", {
          method: "POST",
          body: c
        }),
        h = await u.json();
      if (u.ok) return 200;
      s(h.error)
    } catch (e) {
      return console.error(e.message), !1
    } finally {
      d(c("auth.login.submit_text"))
    }
  }
  var h = e.i(52202),
    p = e.i(17435),
    f = e.i(74654),
    m = e.i(32872),
    g = e.i(10043),
    v = e.i(87909),
    w = e.i(29066),
    x = e.i(33544);
  let _ = "guns_last_social_provider",
    y = "guns_last_social_used_at";

  function b({
    setNewLocation: e,
    setMfa: n,
    email: l,
    setEmail: c,
    password: u,
    setPassword: b,
    error: E,
    setError: j,
    text: C,
    setText: S,
    setResendToken: k
  }) {
    let N = (0, p.useT)(),
      T = (0, s.useSearchParams)(),
      q = T.get("returnUri"),
      B = T.get("oauthError"),
      R = "https://guns.lol",
      O = ((e, t) => {
        if (!e) return "/account";
        let a = e;
        try {
          a = decodeURIComponent(e)
        } catch {
          a = e
        }
        if (!(a = a.trim()).startsWith("/") || a.startsWith("//") || a.startsWith("/\\") || a.includes("\\")) return "/account";
        try {
          let e = new URL(a, t);
          if (e.origin !== t) return "/account";
          return e.pathname + e.search + e.hash
        } catch {
          return "/account"
        }
      })(q, R),
      L = `${R}${O}`,
      [P, I] = (0, a.useState)(!1),
      [Z, M] = (0, a.useState)("turnstile"),
      [A, $] = (0, a.useState)(!1),
      [W, D] = (0, a.useState)(!1),
      [U, z] = (0, a.useState)(""),
      H = (0, a.useRef)(null);
    async function V(e) {
      F(e)
    }
    async function Y(e) {
      ["100", "110500", "200500", "300", "600"].some(t => e.startsWith(t)) ? M("hcaptcha") : (j(N("auth.login.invalid_captcha", {
        code: e
      })), I(!1))
    }
    let F = async t => {
      I(!1);
      let a = await d(l, u, t, Z, j, S, k, N);
      "newLocation" === a ? (j(""), e(!0)) : "mfa" === a ? (j(""), n(!0)) : a && 200 === a && (location.href = L)
    }, G = async () => {
      try {
        D(!0);
        {
          let e = Date.now();
          window.localStorage.setItem(_, "discord"), window.localStorage.setItem(y, String(e))
        }
        let e = new URLSearchParams({
            returnUri: L
          }),
          t = await fetch(`https://guns.lol/api/auth/discord/url?${e.toString()}`);
        if (!t.ok) {
          j(N("auth.login.unknown_error")), D(!1);
          return
        }
        let a = await t.json();
        if (!a?.url) {
          j(N("auth.login.unknown_error")), D(!1);
          return
        }
        window.location.href = a.url
      } catch {
        j(N("auth.login.unknown_error")), D(!1)
      }
    };
    (0, a.useEffect)(() => {
      Object.assign(window, {
        getToken: V,
        handleError: Y
      })
    }, []), (0, a.useEffect)(() => {
      B && j(B)
    }, [B, j]), (0, a.useEffect)(() => {
      let e = window.localStorage.getItem(_),
        t = Number(window.localStorage.getItem(y) || "0");
      "discord" === e && t > 0 && z(N("auth.login.last_used"))
    }, []), (0, a.useEffect)(() => {
      $(l.includes("@"))
    }, [l]);
    let X = () => {
        (j(""), "" === l || "" === u) ? j(N("auth.login.missing_fields_error")): /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l) ? (I(!0), setTimeout(() => {
          "turnstile" in window && window.turnstile.render(".cf-turnstile", {
            sitekey: "0x4AAAAAAAiZlunD1XPEsBtZ",
            "error-callback": Y,
            callback: V
          })
        }, 100)) : j(N("auth.login.invalid_email_address"))
      },
      K = e => {
        "Enter" === e.key && (e.preventDefault(), X())
      };
    return (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(r.default, {
        strategy: "afterInteractive",
        src: "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",
        id: "_turnstilelogin"
      }), (0, t.jsx)(f.default, {
        opened: P,
        centerTitle: !0,
        centered: !0,
        withCloseButton: !1,
        onClose: () => I(!1),
        title: N("auth.login.verifying_request"),
        children: (0, t.jsx)("div", {
          style: {
            padding: 6,
            display: "flex",
            justifyContent: "center"
          },
          children: "turnstile" === Z ? (0, t.jsx)("div", {
            className: "cf-turnstile"
          }) : (0, t.jsx)(o.default, {
            sitekey: "07967ca6-9d90-4236-8880-69ca1edc6bee",
            onVerify: e => V(e),
            theme: "dark",
            ref: H
          })
        })
      }), (0, t.jsxs)(v.default, {
        title: N("auth.login.login_account_text"),
        subtitle: N("auth.login.login_subtitle"),
        footer: (0, t.jsxs)("div", {
          className: w.default.footerContainer,
          children: [(0, t.jsxs)("span", {
            children: [N("auth.login.lost_access_text"), " ", (0, t.jsx)(h.default, {
              href: "/recovery",
              className: w.default.inlineLink,
              children: N("auth.login.recover_account_link")
            })]
          }), (0, t.jsx)("span", {
            children: N("auth.login.signup_text", {
              signup: (0, t.jsx)(h.default, {
                href: "/register?ref=login",
                className: w.default.inlineLink,
                children: N("auth.login.signup_text_link")
              })
            })
          })]
        }),
        children: ["" !== E && (0, t.jsx)("div", {
          className: w.default.errorBanner,
          children: E
        }), (0, t.jsx)("div", {
          className: w.default.section,
          children: (0, t.jsxs)("div", {
            className: w.default.credentialsStack,
            children: [(0, t.jsx)(m.default, {
              featureName: N("auth.login.email_input_text"),
              autoComplete: "email",
              value: l,
              onChangeFunction: e => c(e.target.value.trim()),
              onKeyPress: K,
              placeholder: N("auth.login.email_placeholder"),
              icon: x.default.email
            }), (0, t.jsx)("div", {
              className: `${w.default.passwordReveal} ${A?w.default.passwordRevealOpen:""}`,
              children: (0, t.jsx)(m.default, {
                featureName: N("auth.login.password_input_text"),
                autoComplete: "current-password",
                value: u,
                onChangeFunction: e => b(e.target.value),
                onKeyPress: K,
                placeholder: N("auth.login.password_placeholder"),
                icon: x.default.password,
                viewPassword: !0
              })
            })]
          })
        }), (0, t.jsx)("div", {
          className: w.default.actions,
          children: (0, t.jsx)("button", {
            type: "button",
            className: w.default.primaryButton,
            onClick: X,
            children: C === N("auth.login.login_text") ? N("auth.login.login_button") : C
          })
        }), (0, t.jsx)("div", {
          className: w.default.divider,
          children: N("auth.login.or")
        }), (0, t.jsx)(g.default, {
          returnUri: L,
          setError: j,
          actionLabel: "continue"
        }), (0, t.jsxs)("button", {
          type: "button",
          className: w.default.socialButton,
          onClick: G,
          disabled: W,
          children: [i.default.discord, (0, t.jsx)("span", {
            children: W ? N("auth.login.discord_redirecting") : N("auth.login.continue_with_discord")
          }), U && (0, t.jsx)("span", {
            className: w.default.socialLastUsedBadge,
            children: U
          })]
        })]
      })]
    })
  }

  function E({
    email: e,
    password: n,
    error: r,
    setError: o,
    mfaText: l,
    setMfaText: d,
    mfaCode: c,
    setMfaCode: h,
    newLocationCode: f,
    trustDevice: g,
    setMfa: x
  }) {
    let _ = (0, p.useT)(),
      y = (0, s.useSearchParams)().get("returnUri"),
      b = "https://guns.lol",
      E = ((e, t) => {
        if (!e) return "/account";
        let a = e;
        try {
          a = decodeURIComponent(e)
        } catch {
          a = e
        }
        if (!(a = a.trim()).startsWith("/") || a.startsWith("//") || a.startsWith("/\\") || a.includes("\\")) return "/account";
        try {
          let e = new URL(a, t);
          if (e.origin !== t) return "/account";
          return e.pathname + e.search + e.hash
        } catch {
          return "/account"
        }
      })(y, b),
      j = `${b}${E}`,
      [C, S] = (0, a.useState)(!1),
      [k, N] = (0, a.useState)(""),
      T = e => {
        "Enter" === e.key && (e.preventDefault(), q())
      },
      q = async () => {
        200 === await u(e, n, C ? k : c, f, g, C, o, d, _) && (location.href = j)
      };
    return (0, t.jsxs)(v.default, {
      title: C ? _("auth.login.recovery_codes_title") : _("auth.login.mfa_title"),
      subtitle: C ? _("auth.login.recovery_codes_description") : _("auth.login.mfa_description"),
      footer: (0, t.jsx)("button", {
        type: "button",
        className: w.default.footerButton,
        onClick: () => {
          S(!C), o(""), h(""), N("")
        },
        children: C ? _("auth.login.use_mfa_code") : _("auth.login.use_recovery_codes")
      }),
      children: [(0, t.jsxs)("div", {
        className: w.default.section,
        children: [C ? (0, t.jsx)(m.default, {
          onKeyPress: T,
          featureName: _("auth.login.recovery_code_text"),
          onChangeFunction: e => {
            N(e.target.value.trim())
          },
          value: k,
          placeholder: _("auth.login.recovery_code_text"),
          icon: i.default.mfaRecoveryCode
        }) : (0, t.jsx)(m.default, {
          onKeyPress: T,
          featureName: _("auth.login.mfa_text"),
          onChangeFunction: e => {
            h(e.target.value.trim())
          },
          value: c,
          placeholder: _("auth.login.mfa_text"),
          icon: i.default.mfaToken
        }), "" !== r && (0, t.jsx)("div", {
          className: w.default.errorBanner,
          children: r
        })]
      }), (0, t.jsx)("div", {
        className: w.default.actions,
        children: (0, t.jsx)("button", {
          type: "button",
          className: w.default.primaryButton,
          onClick: q,
          children: l
        })
      })]
    })
  }
  var j = e.i(54976),
    C = e.i(50250);

  function S({
    email: e,
    password: n,
    error: r,
    setError: o,
    newLocationText: l,
    setNewLocationText: d,
    setMfa: u,
    setNewLocation: h,
    newLocationCode: g,
    setNewLocationCode: _,
    resendToken: y,
    setTrustDevice: b
  }) {
    let E = (0, p.useT)(),
      S = (0, s.useSearchParams)().get("returnUri"),
      k = "https://guns.lol",
      N = ((e, t) => {
        if (!e) return "/account";
        let a = e;
        try {
          a = decodeURIComponent(e)
        } catch {
          a = e
        }
        if (!(a = a.trim()).startsWith("/") || a.startsWith("//") || a.startsWith("/\\") || a.includes("\\")) return "/account";
        try {
          let e = new URL(a, t);
          if (e.origin !== t) return "/account";
          return e.pathname + e.search + e.hash
        } catch {
          return "/account"
        }
      })(S, k),
      T = `${k}${N}`,
      [q, B] = (0, a.useState)(!1),
      [R, O] = (0, a.useState)(!1),
      L = async t => {
        let a = await c(e, n, g, t, o, d, E);
        "mfa" === a ? (B(!0), setTimeout(function() {
          u(!0), o(""), B(!1), h(!1)
        }, 1e3)) : 200 === a && (location.href = T)
      }, P = async () => {
        let e = await fetch("https://guns.lol/api/auth/resend", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              type: "otp",
              token: y
            })
          }),
          t = await e.json();
        200 === e.status ? j.toast.success(E("auth.login.email_sent")) : j.toast.error(t.error)
      };
    return (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(f.default, {
        opened: R,
        onClose: () => O(!1),
        title: E("auth.login.quick_login"),
        centered: !0,
        size: "auto",
        children: (0, t.jsxs)("div", {
          className: w.default.modalStack,
          children: [(0, t.jsxs)("div", {
            className: w.default.modalTextBlock,
            children: [(0, t.jsx)("h1", {
              className: w.default.modalTitle,
              children: E("auth.login.trust_browser_title")
            }), (0, t.jsx)("p", {
              className: w.default.modalDescription,
              children: E("auth.login.trust_browser_description")
            })]
          }), (0, t.jsxs)("div", {
            className: w.default.actions,
            children: [(0, t.jsx)("button", {
              type: "button",
              className: w.default.primaryButton,
              onClick: () => {
                O(!1), L(!0), b(!0)
              },
              children: E("auth.login.trust_browser_accept")
            }), (0, t.jsx)("button", {
              type: "button",
              className: w.default.secondaryButton,
              onClick: () => {
                O(!1), L(!1), b(!1)
              },
              children: E("auth.login.trust_browser_decline")
            })]
          })]
        })
      }), (0, t.jsx)(j.Toaster, {
        richColors: !0,
        position: "top-center",
        theme: "dark",
        className: C.default.toasterStyles,
        icons: {
          success: x.default.successToast
        },
        visibleToasts: 2
      }), (0, t.jsx)(v.default, {
        title: E("auth.login.new_location_title"),
        subtitle: E("auth.login.new_location_description"),
        footer: (0, t.jsx)("button", {
          type: "button",
          className: w.default.footerButton,
          onClick: P,
          children: E("auth.login.resend_email")
        }),
        children: q ? (0, t.jsxs)("div", {
          className: w.default.centeredStack,
          children: [(0, t.jsx)("div", {
            className: w.default.loadingIcon,
            children: i.default.loading
          }), (0, t.jsx)("p", {
            className: w.default.loadingMessage,
            children: E("auth.login.verifying_request")
          })]
        }) : (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsxs)("div", {
            className: w.default.section,
            children: [(0, t.jsx)(m.default, {
              featureName: E("auth.login.otp_text"),
              onKeyPress: e => {
                "Enter" === e.key && (e.preventDefault(), O(!0))
              },
              onChangeFunction: e => {
                _(e.target.value.trim())
              },
              value: g,
              placeholder: E("auth.login.otp"),
              icon: i.default.newLocation
            }), "" !== r && (0, t.jsx)("div", {
              className: w.default.errorBanner,
              children: r
            })]
          }), (0, t.jsx)("div", {
            className: w.default.actions,
            children: (0, t.jsx)("button", {
              type: "button",
              className: w.default.primaryButton,
              onClick: () => O(!0),
              children: l
            })
          })]
        })
      })]
    })
  }

  function k() {
    let e = (0, p.useT)(),
      [n, r] = (0, a.useState)(!1),
      [o, s] = (0, a.useState)(!1),
      [i, l] = (0, a.useState)(""),
      [d, c] = (0, a.useState)(""),
      [u, h] = (0, a.useState)(""),
      [f, m] = (0, a.useState)(e("auth.login.login_text")),
      [g, v] = (0, a.useState)(e("auth.login.submit_text")),
      [w, x] = (0, a.useState)(e("auth.login.submit_text")),
      [_, y] = (0, a.useState)(""),
      [j, C] = (0, a.useState)(""),
      [k, N] = (0, a.useState)(""),
      [T, q] = (0, a.useState)(!1);
    return (0, t.jsx)(t.Fragment, {
      children: o ? (0, t.jsx)(S, {
        email: i,
        password: d,
        error: u,
        setError: h,
        newLocationText: w,
        setNewLocationText: x,
        setMfa: r,
        setNewLocation: s,
        newLocationCode: j,
        setNewLocationCode: C,
        resendToken: k,
        setTrustDevice: q
      }) : n ? (0, t.jsx)(E, {
        email: i,
        password: d,
        error: u,
        setError: h,
        mfaText: g,
        setMfaText: v,
        mfaCode: _,
        setMfaCode: y,
        newLocationCode: j,
        trustDevice: T,
        setMfa: r
      }) : (0, t.jsx)(b, {
        setMfa: r,
        email: i,
        setEmail: l,
        password: d,
        setPassword: c,
        error: u,
        setError: h,
        text: f,
        setText: m,
        setNewLocation: s,
        setResendToken: N
      })
    })
  }
  e.s(["default", () => k], 15796)
}]);