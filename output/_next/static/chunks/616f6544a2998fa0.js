(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 43766, t => {
  "use strict";
  var e = t.i(48277),
    i = t.i(96086),
    o = t.i(30668);

  function u() {
    return (0, o.useEffect)(() => {
      fetch("https://guns.lol/api/auth/logout"), (0, i.redirect)("/login")
    }, []), (0, e.jsx)("div", {})
  }
  t.s(["default", () => u])
}]);