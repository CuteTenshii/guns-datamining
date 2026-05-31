(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1457], {
    35223: (e, r, u) => {
      "use strict";
      u.d(r, {
        default: () => n
      });
      var t = u(95155),
        s = u(73321),
        a = u(12115);

      function n() {
        return (0, a.useEffect)(() => {
          fetch("https://guns.lol/api/auth/logout"), (0, s.redirect)("/login")
        }, []), (0, t.jsx)("div", {})
      }
    },
    70325: (e, r, u) => {
      Promise.resolve().then(u.bind(u, 35223))
    },
    73321: (e, r, u) => {
      "use strict";
      var t = u(74645);
      u.o(t, "redirect") && u.d(r, {
        redirect: function() {
          return t.redirect
        }
      }), u.o(t, "useParams") && u.d(r, {
        useParams: function() {
          return t.useParams
        }
      }), u.o(t, "usePathname") && u.d(r, {
        usePathname: function() {
          return t.usePathname
        }
      }), u.o(t, "useRouter") && u.d(r, {
        useRouter: function() {
          return t.useRouter
        }
      }), u.o(t, "useSearchParams") && u.d(r, {
        useSearchParams: function() {
          return t.useSearchParams
        }
      })
    }
  },
  e => {
    e.O(0, [8441, 3794, 7358], () => e(e.s = 70325)), _N_E = e.O()
  }
]);