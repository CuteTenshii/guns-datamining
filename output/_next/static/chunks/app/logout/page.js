(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1457], {
    35223: (e, t, c) => {
      "use strict";
      c.d(t, {
        default: () => o
      });
      var n = c(95155),
        a = c(12115);

      function o() {
        let e = (0, a.useRef)(!1);
        return (0, a.useEffect)(() => {
          e.current || (e.current = !0, (async () => {
            try {
              let e = await fetch("https://guns.lol/api/auth/logout", {
                  method: "POST"
                }),
                t = await e.json().catch(() => null);
              window.location.replace(e.ok && t?.switched ? "/account" : "/login")
            } catch {
              window.location.replace("/login")
            }
          })())
        }, []), (0, n.jsx)("div", {})
      }
    },
    70325: (e, t, c) => {
      Promise.resolve().then(c.bind(c, 35223))
    }
  },
  e => {
    e.O(0, [8441, 3794, 7358], () => e(e.s = 70325)), _N_E = e.O()
  }
]);