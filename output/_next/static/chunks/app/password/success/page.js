(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8534], {
    49745: (s, e, r) => {
      "use strict";
      r.d(e, {
        default: () => d
      });
      var n = r(95155);
      r(12115);
      var i = r(98241),
        a = r.n(i),
        t = r(54834),
        c = r(38256);

      function d() {
        let s = (0, c.kj)();
        return (0, n.jsx)("div", {
          className: a().containerWrapper,
          children: (0, n.jsxs)("div", {
            className: a().container,
            children: [t.A.success, (0, n.jsx)("h1", {
              children: s("password.title")
            }), (0, n.jsx)("h3", {
              children: s("password.description")
            }), (0, n.jsxs)("div", {
              className: a().containerButtons,
              children: [(0, n.jsx)("a", {
                href: "/login",
                children: s("password.buttons.login")
              }), (0, n.jsx)("a", {
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
    s.O(0, [8121, 8256, 5886, 8441, 3794, 7358], () => s(s.s = 71453)), _N_E = s.O()
  }
]);