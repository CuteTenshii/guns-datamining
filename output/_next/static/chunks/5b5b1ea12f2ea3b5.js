(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 40125, s => {
  "use strict";
  var e = s.i(48277),
    t = s.i(50250),
    i = s.i(33544),
    r = s.i(16506),
    d = s.i(17435);

  function n() {
    let s = (0, d.useT)();
    return (0, e.jsx)("div", {
      className: t.default.containerWrapper,
      children: (0, e.jsxs)("div", {
        className: t.default.container,
        children: [i.default.success, (0, e.jsx)("h1", {
          children: s("password.title")
        }), (0, e.jsx)("h3", {
          children: s("password.description")
        }), (0, e.jsxs)("div", {
          className: t.default.containerButtons,
          children: [(0, e.jsx)(r.default, {
            href: "/login",
            children: s("password.buttons.login")
          }), (0, e.jsx)(r.default, {
            href: "https://discord.gg/guns",
            target: "_blank",
            children: s("password.buttons.discord_server")
          })]
        })]
      })
    })
  }
  s.s(["default", () => n])
}]);