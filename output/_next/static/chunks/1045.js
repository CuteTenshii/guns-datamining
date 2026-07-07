"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1045], {
    31045: (e, t, u) => {
      u.r(t), u.d(t, {
        default: () => n
      });
      var l = u(95155),
        a = u(12115);

      function n({
        encoded: e,
        children: t,
        ...u
      }) {
        let [n, s] = (0, a.useState)(null);
        return ((0, a.useEffect)(() => {
          s(atob(e))
        }, []), n) ? (0, l.jsx)("a", {
          href: `mailto:${n}`,
          ...u,
          children: t
        }) : null
      }
    }
  }
]);