"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1045], {
    31045: (e, t, u) => {
      u.r(t), u.d(t, {
        default: () => f
      });
      var l = u(95155),
        n = u(12115),
        s = u(98500),
        a = u.n(s);

      function f({
        encoded: e,
        children: t,
        ...u
      }) {
        let [s, f] = (0, n.useState)(null);
        return ((0, n.useEffect)(() => {
          f(atob(e))
        }, []), s) ? (0, l.jsx)(a(), {
          href: `mailto:${s}`,
          ...u,
          children: t
        }) : null
      }
    }
  }
]);