(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8534], {
    49745: (s, e, r) => {
      "use strict";
      r.d(e, {
        default: () => o
      });
      var n = r(95155);
      r(12115);
      var i = r(98241),
        t = r.n(i),
        c = r(54834),
        d = r(98500),
        a = r.n(d),
        l = r(96351);

      function o() {
        let s = (0, l.kj)();
        return (0, n.jsx)("div", {
          className: t().containerWrapper,
          children: (0, n.jsxs)("div", {
            className: t().container,
            children: [c.A.success, (0, n.jsx)("h1", {
              children: s("password.title")
            }), (0, n.jsx)("h3", {
              children: s("password.description")
            }), (0, n.jsxs)("div", {
              className: t().containerButtons,
              children: [(0, n.jsx)(a(), {
                href: "/login",
                children: s("password.buttons.login")
              }), (0, n.jsx)(a(), {
                href: "https://discord.gg/guns",
                target: "_blank",
                children: s("password.buttons.discord_server")
              })]
            })]
          })
        })
      }
    },
    71453: (s, e, r) => {
      Promise.resolve().then(r.bind(r, 49745))
    }
  },
  s => {
    s.O(0, [1268, 8500, 3200, 8441, 3794, 7358], () => s(s.s = 71453)), _N_E = s.O()
  }
]);