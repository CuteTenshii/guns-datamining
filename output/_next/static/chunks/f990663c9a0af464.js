(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 52202, t => {
  "use strict";
  var e = t.i(48277),
    a = t.i(16506),
    r = t.i(17435);

  function s({
    href: t,
    asTag: s,
    locale: o,
    children: n,
    ...i
  }) {
    let l = o || (0, r.useLang)();
    if (t.startsWith("http://") || t.startsWith("https://") || t.startsWith("mailto:") || t.startsWith("tel:")) return s ? (0, e.jsx)("a", {
      href: t,
      ...i,
      children: n
    }) : (0, e.jsx)(a.default, {
      href: t,
      ...i,
      children: n
    });
    let d = "en" == l ? `${t.startsWith("/")?"":"/"}${t}` : `/${l}${t.startsWith("/")?"":"/"}${t}`;
    return s ? (0, e.jsx)("a", {
      href: d,
      ...i,
      children: n
    }) : (0, e.jsx)(a.default, {
      href: d,
      ...i,
      children: n
    })
  }
  t.s(["default", () => s])
}, 54976, t => {
  "use strict";
  var e = t.i(30668),
    a = t.i(69941),
    r = Array(12).fill(0),
    s = ({
      visible: t,
      className: a
    }) => e.default.createElement("div", {
      className: ["sonner-loading-wrapper", a].filter(Boolean).join(" "),
      "data-visible": t
    }, e.default.createElement("div", {
      className: "sonner-spinner"
    }, r.map((t, a) => e.default.createElement("div", {
      className: "sonner-loading-bar",
      key: `spinner-bar-${a}`
    })))),
    o = e.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20"
    }, e.default.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd"
    })),
    n = e.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20"
    }, e.default.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd"
    })),
    i = e.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20"
    }, e.default.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd"
    })),
    l = e.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20"
    }, e.default.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd"
    })),
    d = e.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, e.default.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }), e.default.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    })),
    c = 1,
    u = new class {
      constructor() {
        this.subscribe = t => (this.subscribers.push(t), () => {
          let e = this.subscribers.indexOf(t);
          this.subscribers.splice(e, 1)
        }), this.publish = t => {
          this.subscribers.forEach(e => e(t))
        }, this.addToast = t => {
          this.publish(t), this.toasts = [...this.toasts, t]
        }, this.create = t => {
          var e;
          let {
            message: a,
            ...r
          } = t, s = "number" == typeof(null == t ? void 0 : t.id) || (null == (e = t.id) ? void 0 : e.length) > 0 ? t.id : c++, o = this.toasts.find(t => t.id === s), n = void 0 === t.dismissible || t.dismissible;
          return this.dismissedToasts.has(s) && this.dismissedToasts.delete(s), o ? this.toasts = this.toasts.map(e => e.id === s ? (this.publish({
            ...e,
            ...t,
            id: s,
            title: a
          }), {
            ...e,
            ...t,
            id: s,
            dismissible: n,
            title: a
          }) : e) : this.addToast({
            title: a,
            ...r,
            dismissible: n,
            id: s
          }), s
        }, this.dismiss = t => (this.dismissedToasts.add(t), t || this.toasts.forEach(t => {
          this.subscribers.forEach(e => e({
            id: t.id,
            dismiss: !0
          }))
        }), this.subscribers.forEach(e => e({
          id: t,
          dismiss: !0
        })), t), this.message = (t, e) => this.create({
          ...e,
          message: t
        }), this.error = (t, e) => this.create({
          ...e,
          message: t,
          type: "error"
        }), this.success = (t, e) => this.create({
          ...e,
          type: "success",
          message: t
        }), this.info = (t, e) => this.create({
          ...e,
          type: "info",
          message: t
        }), this.warning = (t, e) => this.create({
          ...e,
          type: "warning",
          message: t
        }), this.loading = (t, e) => this.create({
          ...e,
          type: "loading",
          message: t
        }), this.promise = (t, a) => {
          let r;
          if (!a) return;
          void 0 !== a.loading && (r = this.create({
            ...a,
            promise: t,
            type: "loading",
            message: a.loading,
            description: "function" != typeof a.description ? a.description : void 0
          }));
          let s = t instanceof Promise ? t : t(),
            o = void 0 !== r,
            n, i = s.then(async t => {
              if (n = ["resolve", t], e.default.isValidElement(t)) o = !1, this.create({
                id: r,
                type: "default",
                message: t
              });
              else if (f(t) && !t.ok) {
                o = !1;
                let e = "function" == typeof a.error ? await a.error(`HTTP error! status: ${t.status}`) : a.error,
                  s = "function" == typeof a.description ? await a.description(`HTTP error! status: ${t.status}`) : a.description;
                this.create({
                  id: r,
                  type: "error",
                  message: e,
                  description: s
                })
              } else if (void 0 !== a.success) {
                o = !1;
                let e = "function" == typeof a.success ? await a.success(t) : a.success,
                  s = "function" == typeof a.description ? await a.description(t) : a.description;
                this.create({
                  id: r,
                  type: "success",
                  message: e,
                  description: s
                })
              }
            }).catch(async t => {
              if (n = ["reject", t], void 0 !== a.error) {
                o = !1;
                let e = "function" == typeof a.error ? await a.error(t) : a.error,
                  s = "function" == typeof a.description ? await a.description(t) : a.description;
                this.create({
                  id: r,
                  type: "error",
                  message: e,
                  description: s
                })
              }
            }).finally(() => {
              var t;
              o && (this.dismiss(r), r = void 0), null == (t = a.finally) || t.call(a)
            }),
            l = () => new Promise((t, e) => i.then(() => "reject" === n[0] ? e(n[1]) : t(n[1])).catch(e));
          return "string" != typeof r && "number" != typeof r ? {
            unwrap: l
          } : Object.assign(r, {
            unwrap: l
          })
        }, this.custom = (t, e) => {
          let a = (null == e ? void 0 : e.id) || c++;
          return this.create({
            jsx: t(a),
            id: a,
            ...e
          }), a
        }, this.getActiveToasts = () => this.toasts.filter(t => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = new Set
      }
    },
    f = t => t && "object" == typeof t && "ok" in t && "boolean" == typeof t.ok && "status" in t && "number" == typeof t.status,
    h = Object.assign((t, e) => {
      let a = (null == e ? void 0 : e.id) || c++;
      return u.addToast({
        title: t,
        ...e,
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

  function m(t) {
    return void 0 !== t.label
  }

  function p(...t) {
    return t.filter(Boolean).join(" ")
  }! function(t, {
    insertAt: e
  } = {}) {
    if (!t || "undefined" == typeof document) return;
    let a = document.head || document.getElementsByTagName("head")[0],
      r = document.createElement("style");
    r.type = "text/css", "top" === e && a.firstChild ? a.insertBefore(r, a.firstChild) : a.appendChild(r), r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(document.createTextNode(t))
  }(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
  var g = t => {
    var a, r, c, u, f, h, g, v, b, y, w, x, k, E;
    let {
      invert: N,
      toast: j,
      unstyled: T,
      interacting: S,
      setHeights: C,
      visibleToasts: B,
      heights: M,
      index: _,
      toasts: z,
      expanded: R,
      removeToast: $,
      defaultRichColors: I,
      closeButton: P,
      style: Y,
      cancelButtonStyle: D,
      actionButtonStyle: L,
      className: A = "",
      descriptionClassName: H = "",
      duration: W,
      position: O,
      gap: U,
      loadingIcon: V,
      expandByDefault: F,
      classNames: K,
      icons: X,
      closeButtonAriaLabel: J = "Close toast",
      pauseWhenPageIsHidden: Z
    } = t, [q, G] = e.default.useState(null), [Q, tt] = e.default.useState(null), [te, ta] = e.default.useState(!1), [tr, ts] = e.default.useState(!1), [to, tn] = e.default.useState(!1), [ti, tl] = e.default.useState(!1), [td, tc] = e.default.useState(!1), [tu, tf] = e.default.useState(0), [th, tm] = e.default.useState(0), tp = e.default.useRef(j.duration || W || 4e3), tg = e.default.useRef(null), tv = e.default.useRef(null), tb = 0 === _, ty = _ + 1 <= B, tw = j.type, tx = !1 !== j.dismissible, tk = j.className || "", tE = j.descriptionClassName || "", tN = e.default.useMemo(() => M.findIndex(t => t.toastId === j.id) || 0, [M, j.id]), tj = e.default.useMemo(() => {
      var t;
      return null != (t = j.closeButton) ? t : P
    }, [j.closeButton, P]), tT = e.default.useMemo(() => j.duration || W || 4e3, [j.duration, W]), tS = e.default.useRef(0), tC = e.default.useRef(0), tB = e.default.useRef(0), tM = e.default.useRef(null), [t_, tz] = O.split("-"), tR = e.default.useMemo(() => M.reduce((t, e, a) => a >= tN ? t : t + e.height, 0), [M, tN]), t$ = (() => {
      let [t, a] = e.default.useState(document.hidden);
      return e.default.useEffect(() => {
        let t = () => {
          a(document.hidden)
        };
        return document.addEventListener("visibilitychange", t), () => window.removeEventListener("visibilitychange", t)
      }, []), t
    })(), tI = j.invert || N, tP = "loading" === tw;
    tC.current = e.default.useMemo(() => tN * U + tR, [tN, tR]), e.default.useEffect(() => {
      tp.current = tT
    }, [tT]), e.default.useEffect(() => {
      ta(!0)
    }, []), e.default.useEffect(() => {
      let t = tv.current;
      if (t) {
        let e = t.getBoundingClientRect().height;
        return tm(e), C(t => [{
          toastId: j.id,
          height: e,
          position: j.position
        }, ...t]), () => C(t => t.filter(t => t.toastId !== j.id))
      }
    }, [C, j.id]), e.default.useLayoutEffect(() => {
      if (!te) return;
      let t = tv.current,
        e = t.style.height;
      t.style.height = "auto";
      let a = t.getBoundingClientRect().height;
      t.style.height = e, tm(a), C(t => t.find(t => t.toastId === j.id) ? t.map(t => t.toastId === j.id ? {
        ...t,
        height: a
      } : t) : [{
        toastId: j.id,
        height: a,
        position: j.position
      }, ...t])
    }, [te, j.title, j.description, C, j.id]);
    let tY = e.default.useCallback(() => {
      ts(!0), tf(tC.current), C(t => t.filter(t => t.toastId !== j.id)), setTimeout(() => {
        $(j)
      }, 200)
    }, [j, $, C, tC]);
    return e.default.useEffect(() => {
      let t;
      if ((!j.promise || "loading" !== tw) && j.duration !== 1 / 0 && "loading" !== j.type) return R || S || Z && t$ ? (() => {
        if (tB.current < tS.current) {
          let t = new Date().getTime() - tS.current;
          tp.current = tp.current - t
        }
        tB.current = new Date().getTime()
      })() : tp.current !== 1 / 0 && (tS.current = new Date().getTime(), t = setTimeout(() => {
        var t;
        null == (t = j.onAutoClose) || t.call(j, j), tY()
      }, tp.current)), () => clearTimeout(t)
    }, [R, S, j, tw, Z, t$, tY]), e.default.useEffect(() => {
      j.delete && tY()
    }, [tY, j.delete]), e.default.createElement("li", {
      tabIndex: 0,
      ref: tv,
      className: p(A, tk, null == K ? void 0 : K.toast, null == (a = null == j ? void 0 : j.classNames) ? void 0 : a.toast, null == K ? void 0 : K.default, null == K ? void 0 : K[tw], null == (r = null == j ? void 0 : j.classNames) ? void 0 : r[tw]),
      "data-sonner-toast": "",
      "data-rich-colors": null != (c = j.richColors) ? c : I,
      "data-styled": !(j.jsx || j.unstyled || T),
      "data-mounted": te,
      "data-promise": !!j.promise,
      "data-swiped": td,
      "data-removed": tr,
      "data-visible": ty,
      "data-y-position": t_,
      "data-x-position": tz,
      "data-index": _,
      "data-front": tb,
      "data-swiping": to,
      "data-dismissible": tx,
      "data-type": tw,
      "data-invert": tI,
      "data-swipe-out": ti,
      "data-swipe-direction": Q,
      "data-expanded": !!(R || F && te),
      style: {
        "--index": _,
        "--toasts-before": _,
        "--z-index": z.length - _,
        "--offset": `${tr?tu:tC.current}px`,
        "--initial-height": F ? "auto" : `${th}px`,
        ...Y,
        ...j.style
      },
      onDragEnd: () => {
        tn(!1), G(null), tM.current = null
      },
      onPointerDown: t => {
        tP || !tx || (tg.current = new Date, tf(tC.current), t.target.setPointerCapture(t.pointerId), "BUTTON" !== t.target.tagName && (tn(!0), tM.current = {
          x: t.clientX,
          y: t.clientY
        }))
      },
      onPointerUp: () => {
        var t, e, a, r;
        if (ti || !tx) return;
        tM.current = null;
        let s = Number((null == (t = tv.current) ? void 0 : t.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
          o = Number((null == (e = tv.current) ? void 0 : e.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
          n = new Date().getTime() - (null == (a = tg.current) ? void 0 : a.getTime()),
          i = "x" === q ? s : o,
          l = Math.abs(i) / n;
        if (Math.abs(i) >= 20 || l > .11) {
          tf(tC.current), null == (r = j.onDismiss) || r.call(j, j), tt("x" === q ? s > 0 ? "right" : "left" : o > 0 ? "down" : "up"), tY(), tl(!0), tc(!1);
          return
        }
        tn(!1), G(null)
      },
      onPointerMove: e => {
        var a, r, s, o;
        if (!tM.current || !tx || (null == (a = window.getSelection()) ? void 0 : a.toString().length) > 0) return;
        let n = e.clientY - tM.current.y,
          i = e.clientX - tM.current.x,
          l = null != (r = t.swipeDirections) ? r : function(t) {
            let [e, a] = t.split("-"), r = [];
            return e && r.push(e), a && r.push(a), r
          }(O);
        !q && (Math.abs(i) > 1 || Math.abs(n) > 1) && G(Math.abs(i) > Math.abs(n) ? "x" : "y");
        let d = {
          x: 0,
          y: 0
        };
        "y" === q ? (l.includes("top") || l.includes("bottom")) && (l.includes("top") && n < 0 || l.includes("bottom") && n > 0) && (d.y = n) : "x" === q && (l.includes("left") || l.includes("right")) && (l.includes("left") && i < 0 || l.includes("right") && i > 0) && (d.x = i), (Math.abs(d.x) > 0 || Math.abs(d.y) > 0) && tc(!0), null == (s = tv.current) || s.style.setProperty("--swipe-amount-x", `${d.x}px`), null == (o = tv.current) || o.style.setProperty("--swipe-amount-y", `${d.y}px`)
      }
    }, tj && !j.jsx ? e.default.createElement("button", {
      "aria-label": J,
      "data-disabled": tP,
      "data-close-button": !0,
      onClick: tP || !tx ? () => {} : () => {
        var t;
        tY(), null == (t = j.onDismiss) || t.call(j, j)
      },
      className: p(null == K ? void 0 : K.closeButton, null == (u = null == j ? void 0 : j.classNames) ? void 0 : u.closeButton)
    }, null != (f = null == X ? void 0 : X.close) ? f : d) : null, j.jsx || (0, e.isValidElement)(j.title) ? j.jsx ? j.jsx : "function" == typeof j.title ? j.title() : j.title : e.default.createElement(e.default.Fragment, null, tw || j.icon || j.promise ? e.default.createElement("div", {
      "data-icon": "",
      className: p(null == K ? void 0 : K.icon, null == (h = null == j ? void 0 : j.classNames) ? void 0 : h.icon)
    }, j.promise || "loading" === j.type && !j.icon ? j.icon || (null != X && X.loading ? e.default.createElement("div", {
      className: p(null == K ? void 0 : K.loader, null == (x = null == j ? void 0 : j.classNames) ? void 0 : x.loader, "sonner-loader"),
      "data-visible": "loading" === tw
    }, X.loading) : V ? e.default.createElement("div", {
      className: p(null == K ? void 0 : K.loader, null == (k = null == j ? void 0 : j.classNames) ? void 0 : k.loader, "sonner-loader"),
      "data-visible": "loading" === tw
    }, V) : e.default.createElement(s, {
      className: p(null == K ? void 0 : K.loader, null == (E = null == j ? void 0 : j.classNames) ? void 0 : E.loader),
      visible: "loading" === tw
    })) : null, "loading" !== j.type ? j.icon || (null == X ? void 0 : X[tw]) || (t => {
      switch (t) {
        case "success":
          return o;
        case "info":
          return i;
        case "warning":
          return n;
        case "error":
          return l;
        default:
          return null
      }
    })(tw) : null) : null, e.default.createElement("div", {
      "data-content": "",
      className: p(null == K ? void 0 : K.content, null == (g = null == j ? void 0 : j.classNames) ? void 0 : g.content)
    }, e.default.createElement("div", {
      "data-title": "",
      className: p(null == K ? void 0 : K.title, null == (v = null == j ? void 0 : j.classNames) ? void 0 : v.title)
    }, "function" == typeof j.title ? j.title() : j.title), j.description ? e.default.createElement("div", {
      "data-description": "",
      className: p(H, tE, null == K ? void 0 : K.description, null == (b = null == j ? void 0 : j.classNames) ? void 0 : b.description)
    }, "function" == typeof j.description ? j.description() : j.description) : null), (0, e.isValidElement)(j.cancel) ? j.cancel : j.cancel && m(j.cancel) ? e.default.createElement("button", {
      "data-button": !0,
      "data-cancel": !0,
      style: j.cancelButtonStyle || D,
      onClick: t => {
        var e, a;
        m(j.cancel) && tx && (null == (a = (e = j.cancel).onClick) || a.call(e, t), tY())
      },
      className: p(null == K ? void 0 : K.cancelButton, null == (y = null == j ? void 0 : j.classNames) ? void 0 : y.cancelButton)
    }, j.cancel.label) : null, (0, e.isValidElement)(j.action) ? j.action : j.action && m(j.action) ? e.default.createElement("button", {
      "data-button": !0,
      "data-action": !0,
      style: j.actionButtonStyle || L,
      onClick: t => {
        var e, a;
        m(j.action) && (null == (a = (e = j.action).onClick) || a.call(e, t), t.defaultPrevented || tY())
      },
      className: p(null == K ? void 0 : K.actionButton, null == (w = null == j ? void 0 : j.classNames) ? void 0 : w.actionButton)
    }, j.action.label) : null))
  };

  function v() {
    if ("undefined" == typeof window || "undefined" == typeof document) return "ltr";
    let t = document.documentElement.getAttribute("dir");
    return "auto" !== t && t ? t : window.getComputedStyle(document.documentElement).direction
  }
  var b = (0, e.forwardRef)(function(t, r) {
    let {
      invert: s,
      position: o = "bottom-right",
      hotkey: n = ["altKey", "KeyT"],
      expand: i,
      closeButton: l,
      className: d,
      offset: c,
      mobileOffset: f,
      theme: h = "light",
      richColors: m,
      duration: p,
      style: b,
      visibleToasts: y = 3,
      toastOptions: w,
      dir: x = v(),
      gap: k = 14,
      loadingIcon: E,
      icons: N,
      containerAriaLabel: j = "Notifications",
      pauseWhenPageIsHidden: T
    } = t, [S, C] = e.default.useState([]), B = e.default.useMemo(() => Array.from(new Set([o].concat(S.filter(t => t.position).map(t => t.position)))), [S, o]), [M, _] = e.default.useState([]), [z, R] = e.default.useState(!1), [$, I] = e.default.useState(!1), [P, Y] = e.default.useState("system" !== h ? h : "undefined" != typeof window && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), D = e.default.useRef(null), L = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), A = e.default.useRef(null), H = e.default.useRef(!1), W = e.default.useCallback(t => {
      C(e => {
        var a;
        return null != (a = e.find(e => e.id === t.id)) && a.delete || u.dismiss(t.id), e.filter(({
          id: e
        }) => e !== t.id)
      })
    }, []);
    return e.default.useEffect(() => u.subscribe(t => {
      t.dismiss ? C(e => e.map(e => e.id === t.id ? {
        ...e,
        delete: !0
      } : e)) : setTimeout(() => {
        a.default.flushSync(() => {
          C(e => {
            let a = e.findIndex(e => e.id === t.id);
            return -1 !== a ? [...e.slice(0, a), {
              ...e[a],
              ...t
            }, ...e.slice(a + 1)] : [t, ...e]
          })
        })
      })
    }), []), e.default.useEffect(() => {
      if ("system" !== h) return void Y(h);
      if ("system" === h && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Y("dark") : Y("light")), "undefined" == typeof window) return;
      let t = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        t.addEventListener("change", ({
          matches: t
        }) => {
          Y(t ? "dark" : "light")
        })
      } catch (e) {
        t.addListener(({
          matches: t
        }) => {
          try {
            Y(t ? "dark" : "light")
          } catch (t) {
            console.error(t)
          }
        })
      }
    }, [h]), e.default.useEffect(() => {
      S.length <= 1 && R(!1)
    }, [S]), e.default.useEffect(() => {
      let t = t => {
        var e, a;
        n.every(e => t[e] || t.code === e) && (R(!0), null == (e = D.current) || e.focus()), "Escape" === t.code && (document.activeElement === D.current || null != (a = D.current) && a.contains(document.activeElement)) && R(!1)
      };
      return document.addEventListener("keydown", t), () => document.removeEventListener("keydown", t)
    }, [n]), e.default.useEffect(() => {
      if (D.current) return () => {
        A.current && (A.current.focus({
          preventScroll: !0
        }), A.current = null, H.current = !1)
      }
    }, [D.current]), e.default.createElement("section", {
      ref: r,
      "aria-label": `${j} ${L}`,
      tabIndex: -1,
      "aria-live": "polite",
      "aria-relevant": "additions text",
      "aria-atomic": "false",
      suppressHydrationWarning: !0
    }, B.map((a, r) => {
      var o;
      let n, [u, h] = a.split("-");
      return S.length ? e.default.createElement("ol", {
        key: a,
        dir: "auto" === x ? v() : x,
        tabIndex: -1,
        ref: D,
        className: d,
        "data-sonner-toaster": !0,
        "data-theme": P,
        "data-y-position": u,
        "data-lifted": z && S.length > 1 && !i,
        "data-x-position": h,
        style: {
          "--front-toast-height": `${(null==(o=M[0])?void 0:o.height)||0}px`,
          "--width": "356px",
          "--gap": `${k}px`,
          ...b,
          ...(n = {}, [c, f].forEach((t, e) => {
            let a = 1 === e,
              r = a ? "--mobile-offset" : "--offset",
              s = a ? "16px" : "32px";

            function o(t) {
              ["top", "right", "bottom", "left"].forEach(e => {
                n[`${r}-${e}`] = "number" == typeof t ? `${t}px` : t
              })
            }
            "number" == typeof t || "string" == typeof t ? o(t) : "object" == typeof t ? ["top", "right", "bottom", "left"].forEach(e => {
              void 0 === t[e] ? n[`${r}-${e}`] = s : n[`${r}-${e}`] = "number" == typeof t[e] ? `${t[e]}px` : t[e]
            }) : o(s)
          }), n)
        },
        onBlur: t => {
          H.current && !t.currentTarget.contains(t.relatedTarget) && (H.current = !1, A.current && (A.current.focus({
            preventScroll: !0
          }), A.current = null))
        },
        onFocus: t => {
          t.target instanceof HTMLElement && "false" === t.target.dataset.dismissible || H.current || (H.current = !0, A.current = t.relatedTarget)
        },
        onMouseEnter: () => R(!0),
        onMouseMove: () => R(!0),
        onMouseLeave: () => {
          $ || R(!1)
        },
        onDragEnd: () => R(!1),
        onPointerDown: t => {
          t.target instanceof HTMLElement && "false" === t.target.dataset.dismissible || I(!0)
        },
        onPointerUp: () => I(!1)
      }, S.filter(t => !t.position && 0 === r || t.position === a).map((r, o) => {
        var n, d;
        return e.default.createElement(g, {
          key: r.id,
          icons: N,
          index: o,
          toast: r,
          defaultRichColors: m,
          duration: null != (n = null == w ? void 0 : w.duration) ? n : p,
          className: null == w ? void 0 : w.className,
          descriptionClassName: null == w ? void 0 : w.descriptionClassName,
          invert: s,
          visibleToasts: y,
          closeButton: null != (d = null == w ? void 0 : w.closeButton) ? d : l,
          interacting: $,
          position: a,
          style: null == w ? void 0 : w.style,
          unstyled: null == w ? void 0 : w.unstyled,
          classNames: null == w ? void 0 : w.classNames,
          cancelButtonStyle: null == w ? void 0 : w.cancelButtonStyle,
          actionButtonStyle: null == w ? void 0 : w.actionButtonStyle,
          removeToast: W,
          toasts: S.filter(t => t.position == r.position),
          heights: M.filter(t => t.position == r.position),
          setHeights: _,
          expandByDefault: i,
          gap: k,
          loadingIcon: E,
          expanded: z,
          pauseWhenPageIsHidden: T,
          swipeDirections: t.swipeDirections
        })
      })) : null
    }))
  });
  t.s(["Toaster", () => b, "toast", () => h])
}, 86396, t => {
  "use strict";
  t.i(39057);
  var e = t.i(48277),
    a = t.i(30668),
    r = t.i(96086),
    s = t.i(50250);

  function o() {
    return (0, e.jsx)("div", {
      className: s.default.loadingPage,
      children: (0, e.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        children: (0, e.jsxs)("g", {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeWidth: "2",
          children: [(0, e.jsx)("path", {
            strokeDasharray: "60",
            strokeDashoffset: "60",
            strokeOpacity: ".3",
            d: "M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z",
            children: (0, e.jsx)("animate", {
              fill: "freeze",
              attributeName: "stroke-dashoffset",
              dur: "1.3s",
              values: "60;0"
            })
          }), (0, e.jsxs)("path", {
            strokeDasharray: "15",
            strokeDashoffset: "15",
            d: "M12 3C16.9706 3 21 7.02944 21 12",
            children: [(0, e.jsx)("animate", {
              fill: "freeze",
              attributeName: "stroke-dashoffset",
              dur: "0.3s",
              values: "15;0"
            }), (0, e.jsx)("animateTransform", {
              attributeName: "transform",
              dur: "1.5s",
              repeatCount: "indefinite",
              type: "rotate",
              values: "0 12 12;360 12 12"
            })]
          })]
        })
      })
    })
  }
  var n = t.i(54976),
    i = t.i(33544),
    l = t.i(52202),
    d = t.i(17435);

  function c() {
    let t = (0, d.useT)(),
      [c, u] = (0, a.useState)(""),
      f = (0, r.useSearchParams)(),
      h = f.get("e"),
      m = f.get("token"),
      p = f.get("d");
    (0, a.useEffect)(() => {
      if (h) try {
        let t = atob(decodeURIComponent(h));
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t) ? u(t) : u(null)
      } catch (t) {
        u(null), console.error("Error decoding email:", t)
      } else u(null)
    }, [h]);
    let g = async () => {
      let e = await fetch("https://guns.lol/api/auth/resend", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            type: p ? "reset" : "register",
            token: m
          })
        }),
        a = await e.json();
      200 === e.status ? n.toast.success(t("auth.email_sent.resend_email_success")) : n.toast.error(a.error)
    };
    return (0, e.jsxs)(a.Suspense, {
      fallback: (0, e.jsx)(o, {}),
      children: [(0, e.jsx)(n.Toaster, {
        richColors: !0,
        position: "top-center",
        theme: "dark",
        className: s.default.toasterStyles,
        icons: {
          success: i.default.successToast
        },
        visibleToasts: 2
      }), (0, e.jsx)("div", {
        className: s.default.containerWrapper,
        children: (0, e.jsxs)("div", {
          className: s.default.container,
          children: [null !== c ? (0, e.jsxs)(e.Fragment, {
            children: [(0, e.jsx)("h1", {
              children: "pass" === p ? t("auth.email_sent.email_sent_message", {
                link_type: t("auth.email_sent.link_type_options.reset"),
                email: (0, e.jsx)("strong", {
                  style: {
                    color: "#b252cc"
                  },
                  children: c
                })
              }) : t("auth.email_sent.email_sent_message", {
                link_type: t("auth.email_sent.link_type_options.verification"),
                email: (0, e.jsx)("strong", {
                  style: {
                    color: "#b252cc"
                  },
                  children: c
                })
              })
            }), (0, e.jsxs)("h3", {
              children: [t("auth.email_sent.email_link_expiration", {
                minutes: "pass" === p ? 15 : 30
              }), (0, e.jsx)("br", {}), t("auth.email_sent.email_tip")]
            })]
          }) : (0, e.jsxs)(e.Fragment, {
            children: [(0, e.jsx)("h1", {
              children: t("auth.email_sent.error_title")
            }), (0, e.jsxs)("h3", {
              children: [t("auth.email_sent.error_invalid_email"), (0, e.jsx)("br", {})]
            })]
          }), (0, e.jsxs)("div", {
            className: s.default.containerButtons,
            children: [m && null !== c && (0, e.jsx)("span", {
              onClick: g,
              children: t("auth.email_sent.resend_email")
            }), (0, e.jsx)(l.default, {
              href: "/",
              children: t("auth.email_sent.back_to_home")
            })]
          })]
        })
      })]
    })
  }
  t.s(["default", () => c], 86396)
}]);