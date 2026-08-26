(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6746], {
    28356: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = {
        cancelIdleCallback: function() {
          return o
        },
        requestIdleCallback: function() {
          return n
        }
      };
      for (var i in r) Object.defineProperty(e, i, {
        enumerable: !0,
        get: r[i]
      });
      let n = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(t) {
          let e = Date.now();
          return self.setTimeout(function() {
            t({
              didTimeout: !1,
              timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - e))
              }
            })
          }, 1)
        },
        o = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(t) {
          return clearTimeout(t)
        };
      ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
        value: !0
      }), Object.assign(e.default, e), t.exports = e.default)
    },
    29722: (t, e, r) => {
      "use strict";
      r.d(e, {
        A: () => i
      });
      let i = function() {
        for (var t, e, r = 0, i = "", n = arguments.length; r < n; r++)(t = arguments[r]) && (e = function t(e) {
          var r, i, n = "";
          if ("string" == typeof e || "number" == typeof e) n += e;
          else if ("object" == typeof e)
            if (Array.isArray(e)) {
              var o = e.length;
              for (r = 0; r < o; r++) e[r] && (i = t(e[r])) && (n && (n += " "), n += i)
            } else
              for (i in e) e[i] && (n && (n += " "), n += i);
          return n
        }(t)) && (i && (i += " "), i += e);
        return i
      }
    },
    38326: (t, e) => {
      var r, i, n = function() {
        var t, e, r, i, n, o, a, s = function(t, e) {
          var r = t,
            i = l[e],
            n = null,
            o = 0,
            a = null,
            s = [],
            u = {},
            y = function(t, e) {
              n = function(t) {
                for (var e = Array(t), r = 0; r < t; r += 1) {
                  e[r] = Array(t);
                  for (var i = 0; i < t; i += 1) e[r][i] = null
                }
                return e
              }(o = 4 * r + 17), m(0, 0), m(o - 7, 0), m(0, o - 7), M(), b(), C(t, e), r >= 7 && S(t), null == a && (a = I(r, i, s)), P(a, e)
            },
            m = function(t, e) {
              for (var r = -1; r <= 7; r += 1)
                if (!(t + r <= -1) && !(o <= t + r))
                  for (var i = -1; i <= 7; i += 1) e + i <= -1 || o <= e + i || (0 <= r && r <= 6 && (0 == i || 6 == i) || 0 <= i && i <= 6 && (0 == r || 6 == r) || 2 <= r && r <= 4 && 2 <= i && i <= 4 ? n[t + r][e + i] = !0 : n[t + r][e + i] = !1)
            },
            v = function() {
              for (var t = 0, e = 0, r = 0; r < 8; r += 1) {
                y(!0, r);
                var i = h.getLostPoint(u);
                (0 == r || t > i) && (t = i, e = r)
              }
              return e
            },
            b = function() {
              for (var t = 8; t < o - 8; t += 1) null == n[t][6] && (n[t][6] = t % 2 == 0);
              for (var e = 8; e < o - 8; e += 1) null == n[6][e] && (n[6][e] = e % 2 == 0)
            },
            M = function() {
              for (var t = h.getPatternPosition(r), e = 0; e < t.length; e += 1)
                for (var i = 0; i < t.length; i += 1) {
                  var o = t[e],
                    a = t[i];
                  if (null == n[o][a])
                    for (var s = -2; s <= 2; s += 1)
                      for (var l = -2; l <= 2; l += 1) - 2 == s || 2 == s || -2 == l || 2 == l || 0 == s && 0 == l ? n[o + s][a + l] = !0 : n[o + s][a + l] = !1
                }
            },
            S = function(t) {
              for (var e = h.getBCHTypeNumber(r), i = 0; i < 18; i += 1) {
                var a = !t && (e >> i & 1) == 1;
                n[Math.floor(i / 3)][i % 3 + o - 8 - 3] = a
              }
              for (var i = 0; i < 18; i += 1) {
                var a = !t && (e >> i & 1) == 1;
                n[i % 3 + o - 8 - 3][Math.floor(i / 3)] = a
              }
            },
            C = function(t, e) {
              for (var r = i << 3 | e, a = h.getBCHTypeInfo(r), s = 0; s < 15; s += 1) {
                var l = !t && (a >> s & 1) == 1;
                s < 6 ? n[s][8] = l : s < 8 ? n[s + 1][8] = l : n[o - 15 + s][8] = l
              }
              for (var s = 0; s < 15; s += 1) {
                var l = !t && (a >> s & 1) == 1;
                s < 8 ? n[8][o - s - 1] = l : s < 9 ? n[8][15 - s - 1 + 1] = l : n[8][15 - s - 1] = l
              }
              n[o - 8][8] = !t
            },
            P = function(t, e) {
              for (var r = -1, i = o - 1, a = 7, s = 0, l = h.getMaskFunction(e), u = o - 1; u > 0; u -= 2)
                for (6 == u && (u -= 1);;) {
                  for (var c = 0; c < 2; c += 1)
                    if (null == n[i][u - c]) {
                      var d = !1;
                      s < t.length && (d = (t[s] >>> a & 1) == 1), l(i, u - c) && (d = !d), n[i][u - c] = d, -1 == (a -= 1) && (s += 1, a = 7)
                    } if ((i += r) < 0 || o <= i) {
                    i -= r, r = -r;
                    break
                  }
                }
            },
            D = function(t, e) {
              for (var r = 0, i = 0, n = 0, o = Array(e.length), a = Array(e.length), s = 0; s < e.length; s += 1) {
                var l = e[s].dataCount,
                  u = e[s].totalCount - l;
                i = Math.max(i, l), n = Math.max(n, u), o[s] = Array(l);
                for (var d = 0; d < o[s].length; d += 1) o[s][d] = 255 & t.getBuffer()[d + r];
                r += l;
                var g = h.getErrorCorrectPolynomial(u),
                  f = c(o[s], g.getLength() - 1).mod(g);
                a[s] = Array(g.getLength() - 1);
                for (var d = 0; d < a[s].length; d += 1) {
                  var p = d + f.getLength() - a[s].length;
                  a[s][d] = p >= 0 ? f.getAt(p) : 0
                }
              }
              for (var _ = 0, d = 0; d < e.length; d += 1) _ += e[d].totalCount;
              for (var w = Array(_), y = 0, d = 0; d < i; d += 1)
                for (var s = 0; s < e.length; s += 1) d < o[s].length && (w[y] = o[s][d], y += 1);
              for (var d = 0; d < n; d += 1)
                for (var s = 0; s < e.length; s += 1) d < a[s].length && (w[y] = a[s][d], y += 1);
              return w
            },
            I = function(t, e, r) {
              for (var i = d.getRSBlocks(t, e), n = g(), o = 0; o < r.length; o += 1) {
                var a = r[o];
                n.put(a.getMode(), 4), n.put(a.getLength(), h.getLengthInBits(a.getMode(), t)), a.write(n)
              }
              for (var s = 0, o = 0; o < i.length; o += 1) s += i[o].dataCount;
              if (n.getLengthInBits() > 8 * s) throw "code length overflow. (" + n.getLengthInBits() + ">" + 8 * s + ")";
              for (n.getLengthInBits() + 4 <= 8 * s && n.put(0, 4); n.getLengthInBits() % 8 != 0;) n.putBit(!1);
              for (; !(n.getLengthInBits() >= 8 * s) && (n.put(236, 8), !(n.getLengthInBits() >= 8 * s));) {
                ;
                n.put(17, 8)
              }
              return D(n, i)
            };
          u.addData = function(t, e) {
            var r = null;
            switch (e = e || "Byte") {
              case "Numeric":
                r = f(t);
                break;
              case "Alphanumeric":
                r = p(t);
                break;
              case "Byte":
                r = _(t);
                break;
              case "Kanji":
                r = w(t);
                break;
              default:
                throw "mode:" + e
            }
            s.push(r), a = null
          }, u.isDark = function(t, e) {
            if (t < 0 || o <= t || e < 0 || o <= e) throw t + "," + e;
            return n[t][e]
          }, u.getModuleCount = function() {
            return o
          }, u.make = function() {
            if (r < 1) {
              for (var t = 1; t < 40; t++) {
                for (var e = d.getRSBlocks(t, i), n = g(), o = 0; o < s.length; o++) {
                  var a = s[o];
                  n.put(a.getMode(), 4), n.put(a.getLength(), h.getLengthInBits(a.getMode(), t)), a.write(n)
                }
                for (var l = 0, o = 0; o < e.length; o++) l += e[o].dataCount;
                if (n.getLengthInBits() <= 8 * l) break
              }
              r = t
            }
            y(!1, v())
          }, u.createTableTag = function(t, e) {
            t = t || 2;
            var r = "";
            r += '<table style=" border-width: 0px; border-style: none; border-collapse: collapse; padding: 0px; margin: ' + (e = void 0 === e ? 4 * t : e) + 'px;"><tbody>';
            for (var i = 0; i < u.getModuleCount(); i += 1) {
              r += "<tr>";
              for (var n = 0; n < u.getModuleCount(); n += 1) r += '<td style=" border-width: 0px; border-style: none; border-collapse: collapse; padding: 0px; margin: 0px; width: ' + t + "px;" + (" height: " + t) + "px; background-color: " + (u.isDark(i, n) ? "#000000" : "#ffffff") + ';"/>';
              r += "</tr>"
            }
            return r + "</tbody></table>"
          }, u.createSvgTag = function(t, e, r, i) {
            var n = {};
            "object" == typeof arguments[0] && (n = arguments[0], t = n.cellSize, e = n.margin, r = n.alt, i = n.title), t = t || 2, e = void 0 === e ? 4 * t : e, (r = "string" == typeof r ? {
              text: r
            } : r || {}).text = r.text || null, r.id = r.text ? r.id || "qrcode-description" : null, (i = "string" == typeof i ? {
              text: i
            } : i || {}).text = i.text || null, i.id = i.text ? i.id || "qrcode-title" : null;
            var o, a, s, l, h = u.getModuleCount() * t + 2 * e,
              c = "";
            for (l = "l" + t + ",0 0," + t + " -" + t + ",0 0,-" + t + "z ", c += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', c += n.scalable ? "" : ' width="' + h + 'px" height="' + h + 'px"', c += ' viewBox="0 0 ' + h + " " + h + '" ', c += ' preserveAspectRatio="xMinYMin meet"', c += i.text || r.text ? ' role="img" aria-labelledby="' + $([i.id, r.id].join(" ").trim()) + '"' : "", c += ">", c += i.text ? '<title id="' + $(i.id) + '">' + $(i.text) + "</title>" : "", c += r.text ? '<description id="' + $(r.id) + '">' + $(r.text) + "</description>" : "", c += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', c += '<path d="', a = 0; a < u.getModuleCount(); a += 1)
              for (o = 0, s = a * t + e; o < u.getModuleCount(); o += 1) u.isDark(a, o) && (c += "M" + (o * t + e) + "," + s + l);
            return c += '" stroke="transparent" fill="black"/>', c += "</svg>"
          }, u.createDataURL = function(t, e) {
            t = t || 2, e = void 0 === e ? 4 * t : e;
            var r = u.getModuleCount() * t + 2 * e,
              i = e,
              n = r - e;
            return x(r, r, function(e, r) {
              if (!(i <= e) || !(e < n) || !(i <= r) || !(r < n)) return 1;
              var o = Math.floor((e - i) / t),
                a = Math.floor((r - i) / t);
              return +!u.isDark(a, o)
            })
          }, u.createImgTag = function(t, e, r) {
            t = t || 2, e = void 0 === e ? 4 * t : e;
            var i = u.getModuleCount() * t + 2 * e,
              n = "";
            return n += "<img", n += ' src="', n += u.createDataURL(t, e), n += '"', n += ' width="', n += i, n += '"', n += ' height="', n += i, n += '"', r && (n += ' alt="', n += $(r), n += '"'), n += "/>"
          };
          var $ = function(t) {
              for (var e = "", r = 0; r < t.length; r += 1) {
                var i = t.charAt(r);
                switch (i) {
                  case "<":
                    e += "&lt;";
                    break;
                  case ">":
                    e += "&gt;";
                    break;
                  case "&":
                    e += "&amp;";
                    break;
                  case '"':
                    e += "&quot;";
                    break;
                  default:
                    e += i
                }
              }
              return e
            },
            O = function(t) {
              t = void 0 === t ? 2 : t;
              var e, r, i, n, o, a = +u.getModuleCount() + 2 * t,
                s = t,
                l = a - t,
                h = {
                  "██": "█",
                  "█ ": "▀",
                  " █": "▄",
                  "  ": " "
                },
                c = {
                  "██": "▀",
                  "█ ": "▀",
                  " █": " ",
                  "  ": " "
                },
                d = "";
              for (e = 0; e < a; e += 2) {
                for (r = 0, i = Math.floor((e - s) / 1), n = Math.floor((e + 1 - s) / 1); r < a; r += 1) o = "█", s <= r && r < l && s <= e && e < l && u.isDark(i, Math.floor((r - s) / 1)) && (o = " "), s <= r && r < l && s <= e + 1 && e + 1 < l && u.isDark(n, Math.floor((r - s) / 1)) ? o += " " : o += "█", d += t < 1 && e + 1 >= l ? c[o] : h[o];
                d += "\n"
              }
              return a % 2 && t > 0 ? d.substring(0, d.length - a - 1) + Array(a + 1).join("▀") : d.substring(0, d.length - 1)
            };
          return u.createASCII = function(t, e) {
            if ((t = t || 1) < 2) return O(e);
            t -= 1, e = void 0 === e ? 2 * t : e;
            var r, i, n, o, a = u.getModuleCount() * t + 2 * e,
              s = e,
              l = a - e,
              h = Array(t + 1).join("██"),
              c = Array(t + 1).join("  "),
              d = "",
              g = "";
            for (r = 0; r < a; r += 1) {
              for (i = 0, n = Math.floor((r - s) / t), g = ""; i < a; i += 1) o = 1, s <= i && i < l && s <= r && r < l && u.isDark(n, Math.floor((i - s) / t)) && (o = 0), g += o ? h : c;
              for (n = 0; n < t; n += 1) d += g + "\n"
            }
            return d.substring(0, d.length - 1)
          }, u.renderTo2dContext = function(t, e) {
            e = e || 2;
            for (var r = u.getModuleCount(), i = 0; i < r; i++)
              for (var n = 0; n < r; n++) t.fillStyle = u.isDark(i, n) ? "black" : "white", t.fillRect(i * e, n * e, e, e)
          }, u
        };
        s.stringToBytesFuncs = {
          default: function(t) {
            for (var e = [], r = 0; r < t.length; r += 1) {
              var i = t.charCodeAt(r);
              e.push(255 & i)
            }
            return e
          }
        }, s.stringToBytes = s.stringToBytesFuncs.default, s.createStringToBytes = function(t, e) {
          var r = function() {
            for (var r = v(t), i = function() {
                var t = r.read();
                if (-1 == t) throw "eof";
                return t
              }, n = 0, o = {};;) {
              var a = r.read();
              if (-1 == a) break;
              var s = i(),
                l = i(),
                h = i(),
                u = String.fromCharCode(a << 8 | s),
                c = l << 8 | h;
              o[u] = c, n += 1
            }
            if (n != e) throw n + " != " + e;
            return o
          }();
          return function(t) {
            for (var e = [], i = 0; i < t.length; i += 1) {
              var n = t.charCodeAt(i);
              if (n < 128) e.push(n);
              else {
                var o = r[t.charAt(i)];
                "number" == typeof o ? (255 & o) == o ? e.push(o) : (e.push(o >>> 8), e.push(255 & o)) : e.push(63)
              }
            }
            return e
          }
        };
        var l = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2
          },
          h = (t = [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170]
          ], e = {}, r = function(t) {
            for (var e = 0; 0 != t;) e += 1, t >>>= 1;
            return e
          }, e.getBCHTypeInfo = function(t) {
            for (var e = t << 10; r(e) - r(1335) >= 0;) e ^= 1335 << r(e) - r(1335);
            return (t << 10 | e) ^ 21522
          }, e.getBCHTypeNumber = function(t) {
            for (var e = t << 12; r(e) - r(7973) >= 0;) e ^= 7973 << r(e) - r(7973);
            return t << 12 | e
          }, e.getPatternPosition = function(e) {
            return t[e - 1]
          }, e.getMaskFunction = function(t) {
            switch (t) {
              case 0:
                return function(t, e) {
                  return (t + e) % 2 == 0
                };
              case 1:
                return function(t, e) {
                  return t % 2 == 0
                };
              case 2:
                return function(t, e) {
                  return e % 3 == 0
                };
              case 3:
                return function(t, e) {
                  return (t + e) % 3 == 0
                };
              case 4:
                return function(t, e) {
                  return (Math.floor(t / 2) + Math.floor(e / 3)) % 2 == 0
                };
              case 5:
                return function(t, e) {
                  return t * e % 2 + t * e % 3 == 0
                };
              case 6:
                return function(t, e) {
                  return (t * e % 2 + t * e % 3) % 2 == 0
                };
              case 7:
                return function(t, e) {
                  return (t * e % 3 + (t + e) % 2) % 2 == 0
                };
              default:
                throw "bad maskPattern:" + t
            }
          }, e.getErrorCorrectPolynomial = function(t) {
            for (var e = c([1], 0), r = 0; r < t; r += 1) e = e.multiply(c([1, u.gexp(r)], 0));
            return e
          }, e.getLengthInBits = function(t, e) {
            if (1 <= e && e < 10) switch (t) {
              case 1:
                return 10;
              case 2:
                return 9;
              case 4:
              case 8:
                return 8;
              default:
                throw "mode:" + t
            }
            if (e < 27) switch (t) {
              case 1:
                return 12;
              case 2:
                return 11;
              case 4:
                return 16;
              case 8:
                return 10;
              default:
                throw "mode:" + t
            }
            if (e < 41) switch (t) {
              case 1:
                return 14;
              case 2:
                return 13;
              case 4:
                return 16;
              case 8:
                return 12;
              default:
                throw "mode:" + t
            }
            throw "type:" + e
          }, e.getLostPoint = function(t) {
            for (var e = t.getModuleCount(), r = 0, i = 0; i < e; i += 1)
              for (var n = 0; n < e; n += 1) {
                for (var o = 0, a = t.isDark(i, n), s = -1; s <= 1; s += 1)
                  if (!(i + s < 0) && !(e <= i + s))
                    for (var l = -1; l <= 1; l += 1) n + l < 0 || e <= n + l || (0 != s || 0 != l) && a == t.isDark(i + s, n + l) && (o += 1);
                o > 5 && (r += 3 + o - 5)
              }
            for (var i = 0; i < e - 1; i += 1)
              for (var n = 0; n < e - 1; n += 1) {
                var h = 0;
                t.isDark(i, n) && (h += 1), t.isDark(i + 1, n) && (h += 1), t.isDark(i, n + 1) && (h += 1), t.isDark(i + 1, n + 1) && (h += 1), (0 == h || 4 == h) && (r += 3)
              }
            for (var i = 0; i < e; i += 1)
              for (var n = 0; n < e - 6; n += 1) t.isDark(i, n) && !t.isDark(i, n + 1) && t.isDark(i, n + 2) && t.isDark(i, n + 3) && t.isDark(i, n + 4) && !t.isDark(i, n + 5) && t.isDark(i, n + 6) && (r += 40);
            for (var n = 0; n < e; n += 1)
              for (var i = 0; i < e - 6; i += 1) t.isDark(i, n) && !t.isDark(i + 1, n) && t.isDark(i + 2, n) && t.isDark(i + 3, n) && t.isDark(i + 4, n) && !t.isDark(i + 5, n) && t.isDark(i + 6, n) && (r += 40);
            for (var u = 0, n = 0; n < e; n += 1)
              for (var i = 0; i < e; i += 1) t.isDark(i, n) && (u += 1);
            return r + 10 * (Math.abs(100 * u / e / e - 50) / 5)
          }, e),
          u = function() {
            for (var t = Array(256), e = Array(256), r = 0; r < 8; r += 1) t[r] = 1 << r;
            for (var r = 8; r < 256; r += 1) t[r] = t[r - 4] ^ t[r - 5] ^ t[r - 6] ^ t[r - 8];
            for (var r = 0; r < 255; r += 1) e[t[r]] = r;
            var i = {};
            return i.glog = function(t) {
              if (t < 1) throw "glog(" + t + ")";
              return e[t]
            }, i.gexp = function(e) {
              for (; e < 0;) e += 255;
              for (; e >= 256;) e -= 255;
              return t[e]
            }, i
          }();

        function c(t, e) {
          if (void 0 === t.length) throw t.length + "/" + e;
          var r = function() {
              for (var r = 0; r < t.length && 0 == t[r];) r += 1;
              for (var i = Array(t.length - r + e), n = 0; n < t.length - r; n += 1) i[n] = t[n + r];
              return i
            }(),
            i = {};
          return i.getAt = function(t) {
            return r[t]
          }, i.getLength = function() {
            return r.length
          }, i.multiply = function(t) {
            for (var e = Array(i.getLength() + t.getLength() - 1), r = 0; r < i.getLength(); r += 1)
              for (var n = 0; n < t.getLength(); n += 1) e[r + n] ^= u.gexp(u.glog(i.getAt(r)) + u.glog(t.getAt(n)));
            return c(e, 0)
          }, i.mod = function(t) {
            if (i.getLength() - t.getLength() < 0) return i;
            for (var e = u.glog(i.getAt(0)) - u.glog(t.getAt(0)), r = Array(i.getLength()), n = 0; n < i.getLength(); n += 1) r[n] = i.getAt(n);
            for (var n = 0; n < t.getLength(); n += 1) r[n] ^= u.gexp(u.glog(t.getAt(n)) + e);
            return c(r, 0).mod(t)
          }, i
        }
        var d = (i = [
            [1, 26, 19],
            [1, 26, 16],
            [1, 26, 13],
            [1, 26, 9],
            [1, 44, 34],
            [1, 44, 28],
            [1, 44, 22],
            [1, 44, 16],
            [1, 70, 55],
            [1, 70, 44],
            [2, 35, 17],
            [2, 35, 13],
            [1, 100, 80],
            [2, 50, 32],
            [2, 50, 24],
            [4, 25, 9],
            [1, 134, 108],
            [2, 67, 43],
            [2, 33, 15, 2, 34, 16],
            [2, 33, 11, 2, 34, 12],
            [2, 86, 68],
            [4, 43, 27],
            [4, 43, 19],
            [4, 43, 15],
            [2, 98, 78],
            [4, 49, 31],
            [2, 32, 14, 4, 33, 15],
            [4, 39, 13, 1, 40, 14],
            [2, 121, 97],
            [2, 60, 38, 2, 61, 39],
            [4, 40, 18, 2, 41, 19],
            [4, 40, 14, 2, 41, 15],
            [2, 146, 116],
            [3, 58, 36, 2, 59, 37],
            [4, 36, 16, 4, 37, 17],
            [4, 36, 12, 4, 37, 13],
            [2, 86, 68, 2, 87, 69],
            [4, 69, 43, 1, 70, 44],
            [6, 43, 19, 2, 44, 20],
            [6, 43, 15, 2, 44, 16],
            [4, 101, 81],
            [1, 80, 50, 4, 81, 51],
            [4, 50, 22, 4, 51, 23],
            [3, 36, 12, 8, 37, 13],
            [2, 116, 92, 2, 117, 93],
            [6, 58, 36, 2, 59, 37],
            [4, 46, 20, 6, 47, 21],
            [7, 42, 14, 4, 43, 15],
            [4, 133, 107],
            [8, 59, 37, 1, 60, 38],
            [8, 44, 20, 4, 45, 21],
            [12, 33, 11, 4, 34, 12],
            [3, 145, 115, 1, 146, 116],
            [4, 64, 40, 5, 65, 41],
            [11, 36, 16, 5, 37, 17],
            [11, 36, 12, 5, 37, 13],
            [5, 109, 87, 1, 110, 88],
            [5, 65, 41, 5, 66, 42],
            [5, 54, 24, 7, 55, 25],
            [11, 36, 12, 7, 37, 13],
            [5, 122, 98, 1, 123, 99],
            [7, 73, 45, 3, 74, 46],
            [15, 43, 19, 2, 44, 20],
            [3, 45, 15, 13, 46, 16],
            [1, 135, 107, 5, 136, 108],
            [10, 74, 46, 1, 75, 47],
            [1, 50, 22, 15, 51, 23],
            [2, 42, 14, 17, 43, 15],
            [5, 150, 120, 1, 151, 121],
            [9, 69, 43, 4, 70, 44],
            [17, 50, 22, 1, 51, 23],
            [2, 42, 14, 19, 43, 15],
            [3, 141, 113, 4, 142, 114],
            [3, 70, 44, 11, 71, 45],
            [17, 47, 21, 4, 48, 22],
            [9, 39, 13, 16, 40, 14],
            [3, 135, 107, 5, 136, 108],
            [3, 67, 41, 13, 68, 42],
            [15, 54, 24, 5, 55, 25],
            [15, 43, 15, 10, 44, 16],
            [4, 144, 116, 4, 145, 117],
            [17, 68, 42],
            [17, 50, 22, 6, 51, 23],
            [19, 46, 16, 6, 47, 17],
            [2, 139, 111, 7, 140, 112],
            [17, 74, 46],
            [7, 54, 24, 16, 55, 25],
            [34, 37, 13],
            [4, 151, 121, 5, 152, 122],
            [4, 75, 47, 14, 76, 48],
            [11, 54, 24, 14, 55, 25],
            [16, 45, 15, 14, 46, 16],
            [6, 147, 117, 4, 148, 118],
            [6, 73, 45, 14, 74, 46],
            [11, 54, 24, 16, 55, 25],
            [30, 46, 16, 2, 47, 17],
            [8, 132, 106, 4, 133, 107],
            [8, 75, 47, 13, 76, 48],
            [7, 54, 24, 22, 55, 25],
            [22, 45, 15, 13, 46, 16],
            [10, 142, 114, 2, 143, 115],
            [19, 74, 46, 4, 75, 47],
            [28, 50, 22, 6, 51, 23],
            [33, 46, 16, 4, 47, 17],
            [8, 152, 122, 4, 153, 123],
            [22, 73, 45, 3, 74, 46],
            [8, 53, 23, 26, 54, 24],
            [12, 45, 15, 28, 46, 16],
            [3, 147, 117, 10, 148, 118],
            [3, 73, 45, 23, 74, 46],
            [4, 54, 24, 31, 55, 25],
            [11, 45, 15, 31, 46, 16],
            [7, 146, 116, 7, 147, 117],
            [21, 73, 45, 7, 74, 46],
            [1, 53, 23, 37, 54, 24],
            [19, 45, 15, 26, 46, 16],
            [5, 145, 115, 10, 146, 116],
            [19, 75, 47, 10, 76, 48],
            [15, 54, 24, 25, 55, 25],
            [23, 45, 15, 25, 46, 16],
            [13, 145, 115, 3, 146, 116],
            [2, 74, 46, 29, 75, 47],
            [42, 54, 24, 1, 55, 25],
            [23, 45, 15, 28, 46, 16],
            [17, 145, 115],
            [10, 74, 46, 23, 75, 47],
            [10, 54, 24, 35, 55, 25],
            [19, 45, 15, 35, 46, 16],
            [17, 145, 115, 1, 146, 116],
            [14, 74, 46, 21, 75, 47],
            [29, 54, 24, 19, 55, 25],
            [11, 45, 15, 46, 46, 16],
            [13, 145, 115, 6, 146, 116],
            [14, 74, 46, 23, 75, 47],
            [44, 54, 24, 7, 55, 25],
            [59, 46, 16, 1, 47, 17],
            [12, 151, 121, 7, 152, 122],
            [12, 75, 47, 26, 76, 48],
            [39, 54, 24, 14, 55, 25],
            [22, 45, 15, 41, 46, 16],
            [6, 151, 121, 14, 152, 122],
            [6, 75, 47, 34, 76, 48],
            [46, 54, 24, 10, 55, 25],
            [2, 45, 15, 64, 46, 16],
            [17, 152, 122, 4, 153, 123],
            [29, 74, 46, 14, 75, 47],
            [49, 54, 24, 10, 55, 25],
            [24, 45, 15, 46, 46, 16],
            [4, 152, 122, 18, 153, 123],
            [13, 74, 46, 32, 75, 47],
            [48, 54, 24, 14, 55, 25],
            [42, 45, 15, 32, 46, 16],
            [20, 147, 117, 4, 148, 118],
            [40, 75, 47, 7, 76, 48],
            [43, 54, 24, 22, 55, 25],
            [10, 45, 15, 67, 46, 16],
            [19, 148, 118, 6, 149, 119],
            [18, 75, 47, 31, 76, 48],
            [34, 54, 24, 34, 55, 25],
            [20, 45, 15, 61, 46, 16]
          ], n = function(t, e) {
            var r = {};
            return r.totalCount = t, r.dataCount = e, r
          }, o = {}, a = function(t, e) {
            switch (e) {
              case l.L:
                return i[(t - 1) * 4 + 0];
              case l.M:
                return i[(t - 1) * 4 + 1];
              case l.Q:
                return i[(t - 1) * 4 + 2];
              case l.H:
                return i[(t - 1) * 4 + 3];
              default:
                return
            }
          }, o.getRSBlocks = function(t, e) {
            var r = a(t, e);
            if (void 0 === r) throw "bad rs block @ typeNumber:" + t + "/errorCorrectionLevel:" + e;
            for (var i = r.length / 3, o = [], s = 0; s < i; s += 1)
              for (var l = r[3 * s + 0], h = r[3 * s + 1], u = r[3 * s + 2], c = 0; c < l; c += 1) o.push(n(h, u));
            return o
          }, o),
          g = function() {
            var t = [],
              e = 0,
              r = {};
            return r.getBuffer = function() {
              return t
            }, r.getAt = function(e) {
              return (t[Math.floor(e / 8)] >>> 7 - e % 8 & 1) == 1
            }, r.put = function(t, e) {
              for (var i = 0; i < e; i += 1) r.putBit((t >>> e - i - 1 & 1) == 1)
            }, r.getLengthInBits = function() {
              return e
            }, r.putBit = function(r) {
              var i = Math.floor(e / 8);
              t.length <= i && t.push(0), r && (t[i] |= 128 >>> e % 8), e += 1
            }, r
          },
          f = function(t) {
            var e = {};
            e.getMode = function() {
              return 1
            }, e.getLength = function(e) {
              return t.length
            }, e.write = function(e) {
              for (var i = 0; i + 2 < t.length;) e.put(r(t.substring(i, i + 3)), 10), i += 3;
              i < t.length && (t.length - i == 1 ? e.put(r(t.substring(i, i + 1)), 4) : t.length - i == 2 && e.put(r(t.substring(i, i + 2)), 7))
            };
            var r = function(t) {
                for (var e = 0, r = 0; r < t.length; r += 1) e = 10 * e + i(t.charAt(r));
                return e
              },
              i = function(t) {
                if ("0" <= t && t <= "9") return t.charCodeAt(0) - 48;
                throw "illegal char :" + t
              };
            return e
          },
          p = function(t) {
            var e = {};
            e.getMode = function() {
              return 2
            }, e.getLength = function(e) {
              return t.length
            }, e.write = function(e) {
              for (var i = 0; i + 1 < t.length;) e.put(45 * r(t.charAt(i)) + r(t.charAt(i + 1)), 11), i += 2;
              i < t.length && e.put(r(t.charAt(i)), 6)
            };
            var r = function(t) {
              if ("0" <= t && t <= "9") return t.charCodeAt(0) - 48;
              if ("A" <= t && t <= "Z") return t.charCodeAt(0) - 65 + 10;
              switch (t) {
                case " ":
                  return 36;
                case "$":
                  return 37;
                case "%":
                  return 38;
                case "*":
                  return 39;
                case "+":
                  return 40;
                case "-":
                  return 41;
                case ".":
                  return 42;
                case "/":
                  return 43;
                case ":":
                  return 44;
                default:
                  throw "illegal char :" + t
              }
            };
            return e
          },
          _ = function(t) {
            var e = s.stringToBytes(t),
              r = {};
            return r.getMode = function() {
              return 4
            }, r.getLength = function(t) {
              return e.length
            }, r.write = function(t) {
              for (var r = 0; r < e.length; r += 1) t.put(e[r], 8)
            }, r
          },
          w = function(t) {
            var e = s.stringToBytesFuncs.SJIS;
            if (!e) throw "sjis not supported.";
            var r = e("友");
            if (2 != r.length || (r[0] << 8 | r[1]) != 38726) throw "sjis not supported.";
            var i = e(t),
              n = {};
            return n.getMode = function() {
              return 8
            }, n.getLength = function(t) {
              return ~~(i.length / 2)
            }, n.write = function(t) {
              for (var e = 0; e + 1 < i.length;) {
                var r = (255 & i[e]) << 8 | 255 & i[e + 1];
                if (33088 <= r && r <= 40956) r -= 33088;
                else if (57408 <= r && r <= 60351) r -= 49472;
                else throw "illegal char at " + (e + 1) + "/" + r;
                r = (r >>> 8 & 255) * 192 + (255 & r), t.put(r, 13), e += 2
              }
              if (e < i.length) throw "illegal char at " + (e + 1)
            }, n
          },
          y = function() {
            var t = [],
              e = {};
            return e.writeByte = function(e) {
              t.push(255 & e)
            }, e.writeShort = function(t) {
              e.writeByte(t), e.writeByte(t >>> 8)
            }, e.writeBytes = function(t, r, i) {
              r = r || 0, i = i || t.length;
              for (var n = 0; n < i; n += 1) e.writeByte(t[n + r])
            }, e.writeString = function(t) {
              for (var r = 0; r < t.length; r += 1) e.writeByte(t.charCodeAt(r))
            }, e.toByteArray = function() {
              return t
            }, e.toString = function() {
              var e = "";
              e += "[";
              for (var r = 0; r < t.length; r += 1) r > 0 && (e += ","), e += t[r];
              return e + "]"
            }, e
          },
          m = function() {
            var t = 0,
              e = 0,
              r = 0,
              i = "",
              n = {},
              o = function(t) {
                i += String.fromCharCode(a(63 & t))
              },
              a = function(t) {
                if (t < 0);
                else if (t < 26) return 65 + t;
                else if (t < 52) return 97 + (t - 26);
                else if (t < 62) return 48 + (t - 52);
                else if (62 == t) return 43;
                else if (63 == t) return 47;
                throw "n:" + t
              };
            return n.writeByte = function(i) {
              for (t = t << 8 | 255 & i, e += 8, r += 1; e >= 6;) o(t >>> e - 6), e -= 6
            }, n.flush = function() {
              if (e > 0 && (o(t << 6 - e), t = 0, e = 0), r % 3 != 0)
                for (var n = 3 - r % 3, a = 0; a < n; a += 1) i += "="
            }, n.toString = function() {
              return i
            }, n
          },
          v = function(t) {
            var e = 0,
              r = 0,
              i = 0,
              n = {};
            n.read = function() {
              for (; i < 8;) {
                if (e >= t.length) {
                  if (0 == i) return -1;
                  throw "unexpected end of file./" + i
                }
                var n = t.charAt(e);
                if (e += 1, "=" == n) return i = 0, -1;
                n.match(/^\s$/) || (r = r << 6 | o(n.charCodeAt(0)), i += 6)
              }
              var a = r >>> i - 8 & 255;
              return i -= 8, a
            };
            var o = function(t) {
              if (65 <= t && t <= 90) return t - 65;
              if (97 <= t && t <= 122) return t - 97 + 26;
              if (48 <= t && t <= 57) return t - 48 + 52;
              if (43 == t) return 62;
              if (47 == t) return 63;
              else throw "c:" + t
            };
            return n
          },
          b = function(t, e) {
            var r = Array(t * e),
              i = {};
            i.setPixel = function(e, i, n) {
              r[i * t + e] = n
            }, i.write = function(r) {
              r.writeString("GIF87a"), r.writeShort(t), r.writeShort(e), r.writeByte(128), r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(255), r.writeByte(255), r.writeByte(255), r.writeString(","), r.writeShort(0), r.writeShort(0), r.writeShort(t), r.writeShort(e), r.writeByte(0);
              var i = o(2);
              r.writeByte(2);
              for (var n = 0; i.length - n > 255;) r.writeByte(255), r.writeBytes(i, n, 255), n += 255;
              r.writeByte(i.length - n), r.writeBytes(i, n, i.length - n), r.writeByte(0), r.writeString(";")
            };
            var n = function(t) {
                var e = 0,
                  r = 0,
                  i = {};
                return i.write = function(i, n) {
                  if (i >>> n != 0) throw "length over";
                  for (; e + n >= 8;) t.writeByte(255 & (i << e | r)), n -= 8 - e, i >>>= 8 - e, r = 0, e = 0;
                  r = i << e | r, e += n
                }, i.flush = function() {
                  e > 0 && t.writeByte(r)
                }, i
              },
              o = function(t) {
                for (var e = 1 << t, i = (1 << t) + 1, o = t + 1, s = a(), l = 0; l < e; l += 1) s.add(String.fromCharCode(l));
                s.add(String.fromCharCode(e)), s.add(String.fromCharCode(i));
                var h = y(),
                  u = n(h);
                u.write(e, o);
                var c = 0,
                  d = String.fromCharCode(r[0]);
                for (c += 1; c < r.length;) {
                  var g = String.fromCharCode(r[c]);
                  c += 1, s.contains(d + g) ? d += g : (u.write(s.indexOf(d), o), 4095 > s.size() && (s.size() == 1 << o && (o += 1), s.add(d + g)), d = g)
                }
                return u.write(s.indexOf(d), o), u.write(i, o), u.flush(), h.toByteArray()
              },
              a = function() {
                var t = {},
                  e = 0,
                  r = {};
                return r.add = function(i) {
                  if (r.contains(i)) throw "dup key:" + i;
                  t[i] = e, e += 1
                }, r.size = function() {
                  return e
                }, r.indexOf = function(e) {
                  return t[e]
                }, r.contains = function(e) {
                  return void 0 !== t[e]
                }, r
              };
            return i
          },
          x = function(t, e, r) {
            for (var i = b(t, e), n = 0; n < e; n += 1)
              for (var o = 0; o < t; o += 1) i.setPixel(o, n, r(o, n));
            var a = y();
            i.write(a);
            for (var s = m(), l = a.toByteArray(), h = 0; h < l.length; h += 1) s.writeByte(l[h]);
            return s.flush(), "data:image/gif;base64," + s
          };
        return s
      }();
      n.stringToBytesFuncs["UTF-8"] = function(t) {
        for (var e = [], r = 0; r < t.length; r++) {
          var i = t.charCodeAt(r);
          i < 128 ? e.push(i) : i < 2048 ? e.push(192 | i >> 6, 128 | 63 & i) : i < 55296 || i >= 57344 ? e.push(224 | i >> 12, 128 | i >> 6 & 63, 128 | 63 & i) : (r++, i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(r)), e.push(240 | i >> 18, 128 | i >> 12 & 63, 128 | i >> 6 & 63, 128 | 63 & i))
        }
        return e
      }, void 0 === (i = "function" == typeof(r = function() {
        return n
      }) ? r.apply(e, []) : r) || (t.exports = i)
    },
    42593: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var i = {
        default: function() {
          return m
        },
        handleClientScriptLoad: function() {
          return _
        },
        initScriptLoader: function() {
          return w
        }
      };
      for (var n in i) Object.defineProperty(e, n, {
        enumerable: !0,
        get: i[n]
      });
      let o = r(73623),
        a = r(66388),
        s = r(95155),
        l = o._(r(47650)),
        h = a._(r(12115)),
        u = r(75368),
        c = r(3584),
        d = r(28356),
        g = new Map,
        f = new Set,
        p = t => {
          let {
            src: e,
            id: r,
            onLoad: i = () => {},
            onReady: n = null,
            dangerouslySetInnerHTML: o,
            children: a = "",
            strategy: s = "afterInteractive",
            onError: h,
            stylesheets: u
          } = t, d = r || e;
          if (d && f.has(d)) return;
          if (g.has(e)) {
            f.add(d), g.get(e).then(i, h);
            return
          }
          let p = () => {
              n && n(), f.add(d)
            },
            _ = document.createElement("script"),
            w = new Promise((t, e) => {
              _.addEventListener("load", function(e) {
                t(), i && i.call(this, e), p()
              }), _.addEventListener("error", function(t) {
                e(t)
              })
            }).catch(function(t) {
              h && h(t)
            });
          o ? (_.innerHTML = o.__html || "", p()) : a ? (_.textContent = "string" == typeof a ? a : Array.isArray(a) ? a.join("") : "", p()) : e && (_.src = e, g.set(e, w)), (0, c.setAttributesFromProps)(_, t), "worker" === s && _.setAttribute("type", "text/partytown"), _.setAttribute("data-nscript", s), u && (t => {
            if (l.default.preinit) return t.forEach(t => {
              l.default.preinit(t, {
                as: "style"
              })
            });
            {
              let e = document.head;
              t.forEach(t => {
                let r = document.createElement("link");
                r.type = "text/css", r.rel = "stylesheet", r.href = t, e.appendChild(r)
              })
            }
          })(u), document.body.appendChild(_)
        };

      function _(t) {
        let {
          strategy: e = "afterInteractive"
        } = t;
        "lazyOnload" === e ? window.addEventListener("load", () => {
          (0, d.requestIdleCallback)(() => p(t))
        }) : p(t)
      }

      function w(t) {
        t.forEach(_), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(t => {
          let e = t.id || t.getAttribute("src");
          f.add(e)
        })
      }

      function y(t) {
        let {
          id: e,
          src: r = "",
          onLoad: i = () => {},
          onReady: n = null,
          strategy: o = "afterInteractive",
          onError: a,
          stylesheets: c,
          ...g
        } = t, {
          updateScripts: _,
          scripts: w,
          getIsSsr: y,
          appDir: m,
          nonce: v
        } = (0, h.useContext)(u.HeadManagerContext);
        v = g.nonce || v;
        let b = (0, h.useRef)(!1);
        (0, h.useEffect)(() => {
          let t = e || r;
          b.current || (n && t && f.has(t) && n(), b.current = !0)
        }, [n, e, r]);
        let x = (0, h.useRef)(!1);
        if ((0, h.useEffect)(() => {
            if (!x.current) {
              if ("afterInteractive" === o) p(t);
              else "lazyOnload" === o && ("complete" === document.readyState ? (0, d.requestIdleCallback)(() => p(t)) : window.addEventListener("load", () => {
                (0, d.requestIdleCallback)(() => p(t))
              }));
              x.current = !0
            }
          }, [t, o]), ("beforeInteractive" === o || "worker" === o) && (_ ? (w[o] = (w[o] || []).concat([{
            id: e,
            src: r,
            onLoad: i,
            onReady: n,
            onError: a,
            ...g,
            nonce: v
          }]), _(w)) : y && y() ? f.add(e || r) : y && !y() && p({
            ...t,
            nonce: v
          })), m) {
          if (c && c.forEach(t => {
              l.default.preinit(t, {
                as: "style"
              })
            }), "beforeInteractive" === o)
            if (!r) return g.dangerouslySetInnerHTML && (g.children = g.dangerouslySetInnerHTML.__html, delete g.dangerouslySetInnerHTML), (0, s.jsx)("script", {
              nonce: v,
              dangerouslySetInnerHTML: {
                __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([0,{...g,id:e}])})`
              }
            });
            else return l.default.preload(r, g.integrity ? {
              as: "script",
              integrity: g.integrity,
              nonce: v,
              crossOrigin: g.crossOrigin
            } : {
              as: "script",
              nonce: v,
              crossOrigin: g.crossOrigin
            }), (0, s.jsx)("script", {
              nonce: v,
              dangerouslySetInnerHTML: {
                __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([r,{...g,id:e}])})`
              }
            });
          "afterInteractive" === o && r && l.default.preload(r, g.integrity ? {
            as: "script",
            integrity: g.integrity,
            nonce: v,
            crossOrigin: g.crossOrigin
          } : {
            as: "script",
            nonce: v,
            crossOrigin: g.crossOrigin
          })
        }
        return null
      }
      Object.defineProperty(y, "__nextScript", {
        value: !0
      });
      let m = y;
      ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
        value: !0
      }), Object.assign(e.default, e), t.exports = e.default)
    },
    63212: (t, e, r) => {
      "use strict";
      r.d(e, {
        g: () => tr
      });
      var i = r(95155),
        n = r(12115),
        o = r(38326);
      let a = {
          L: .07,
          M: .15,
          Q: .25,
          H: .3
        },
        s = "radial",
        l = "square";
      var h = Object.defineProperty,
        u = (t, e, r) => {
          let i;
          return (i = "symbol" != typeof e ? e + "" : e) in t ? h(t, i, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
          }) : t[i] = r, r
        };
      class c {
        constructor({
          context: t,
          type: e
        }) {
          u(this, "_context"), u(this, "_type"), this._context = t, this._type = e
        }
        draw(t, e, r, i) {
          let n, o = this._context;
          (n = this._type === l ? this._drawSquare : this._drawDot).call(this, {
            x: t,
            y: e,
            size: r,
            context: o,
            rotation: i
          })
        }
        _rotateFigure({
          x: t,
          y: e,
          size: r,
          context: i,
          rotation: n = 0,
          draw: o
        }) {
          let a = t + r / 2,
            s = e + r / 2;
          i.translate(a, s), n && i.rotate(n), o(), i.closePath(), n && i.rotate(-n), i.translate(-a, -s)
        }
        _basicDot(t) {
          let {
            size: e,
            context: r
          } = t;
          this._rotateFigure({
            ...t,
            draw: () => {
              r.arc(0, 0, e / 2, 0, 2 * Math.PI)
            }
          })
        }
        _basicSquare(t) {
          let {
            size: e,
            context: r
          } = t;
          this._rotateFigure({
            ...t,
            draw: () => {
              r.rect(-e / 2, -e / 2, e, e)
            }
          })
        }
        _drawDot({
          x: t,
          y: e,
          size: r,
          context: i,
          rotation: n
        }) {
          this._basicDot({
            x: t,
            y: e,
            size: r,
            context: i,
            rotation: n
          })
        }
        _drawSquare({
          x: t,
          y: e,
          size: r,
          context: i,
          rotation: n
        }) {
          this._basicSquare({
            x: t,
            y: e,
            size: r,
            context: i,
            rotation: n
          })
        }
      }
      let d = "square",
        g = "extra-rounded";
      var f = Object.defineProperty,
        p = (t, e, r) => {
          let i;
          return (i = "symbol" != typeof e ? e + "" : e) in t ? f(t, i, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
          }) : t[i] = r, r
        };
      class _ {
        constructor({
          context: t,
          type: e
        }) {
          p(this, "_context"), p(this, "_type"), this._context = t, this._type = e
        }
        draw(t, e, r, i) {
          let n, o = this._context;
          switch (this._type) {
            case d:
              n = this._drawSquare;
              break;
            case g:
              n = this._drawExtraRounded;
              break;
            default:
              n = this._drawDot
          }
          n.call(this, {
            x: t,
            y: e,
            size: r,
            context: o,
            rotation: i
          })
        }
        _rotateFigure({
          x: t,
          y: e,
          size: r,
          context: i,
          rotation: n = 0,
          draw: o
        }) {
          let a = t + r / 2,
            s = e + r / 2;
          i.translate(a, s), n && i.rotate(n), o(), i.closePath(), n && i.rotate(-n), i.translate(-a, -s)
        }
        _basicDot(t) {
          let {
            size: e,
            context: r
          } = t, i = e / 7;
          this._rotateFigure({
            ...t,
            draw: () => {
              r.arc(0, 0, e / 2, 0, 2 * Math.PI), r.arc(0, 0, e / 2 - i, 0, 2 * Math.PI)
            }
          })
        }
        _basicSquare(t) {
          let {
            size: e,
            context: r
          } = t, i = e / 7;
          this._rotateFigure({
            ...t,
            draw: () => {
              r.rect(-e / 2, -e / 2, e, e), r.rect(-e / 2 + i, -e / 2 + i, e - 2 * i, e - 2 * i)
            }
          })
        }
        _basicExtraRounded(t) {
          let {
            size: e,
            context: r
          } = t, i = e / 7;
          this._rotateFigure({
            ...t,
            draw: () => {
              r.arc(-i, -i, 2.5 * i, Math.PI, -Math.PI / 2), r.lineTo(i, -3.5 * i), r.arc(i, -i, 2.5 * i, -Math.PI / 2, 0), r.lineTo(3.5 * i, -i), r.arc(i, i, 2.5 * i, 0, Math.PI / 2), r.lineTo(-i, 3.5 * i), r.arc(-i, i, 2.5 * i, Math.PI / 2, Math.PI), r.lineTo(-3.5 * i, -i), r.arc(-i, -i, 1.5 * i, Math.PI, -Math.PI / 2), r.lineTo(i, -2.5 * i), r.arc(i, -i, 1.5 * i, -Math.PI / 2, 0), r.lineTo(2.5 * i, -i), r.arc(i, i, 1.5 * i, 0, Math.PI / 2), r.lineTo(-i, 2.5 * i), r.arc(-i, i, 1.5 * i, Math.PI / 2, Math.PI), r.lineTo(-2.5 * i, -i)
            }
          })
        }
        _drawDot({
          x: t,
          y: e,
          size: r,
          context: i,
          rotation: n
        }) {
          this._basicDot({
            x: t,
            y: e,
            size: r,
            context: i,
            rotation: n
          })
        }
        _drawSquare({
          x: t,
          y: e,
          size: r,
          context: i,
          rotation: n
        }) {
          this._basicSquare({
            x: t,
            y: e,
            size: r,
            context: i,
            rotation: n
          })
        }
        _drawExtraRounded({
          x: t,
          y: e,
          size: r,
          context: i,
          rotation: n
        }) {
          this._basicExtraRounded({
            x: t,
            y: e,
            size: r,
            context: i,
            rotation: n
          })
        }
      }
      let w = "dots",
        y = "rounded",
        m = "classy",
        v = "classy-rounded",
        b = "extra-rounded";
      var x = Object.defineProperty,
        M = (t, e, r) => {
          let i;
          return (i = "symbol" != typeof e ? e + "" : e) in t ? x(t, i, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
          }) : t[i] = r, r
        };
      class S {
        constructor({
          context: t,
          type: e
        }) {
          M(this, "_context"), M(this, "_type"), this._context = t, this._type = e
        }
        draw(t, e, r, i) {
          let n, o = this._context;
          switch (this._type) {
            case w:
              n = this._drawDot;
              break;
            case m:
              n = this._drawClassy;
              break;
            case v:
              n = this._drawClassyRounded;
              break;
            case y:
              n = this._drawRounded;
              break;
            case b:
              n = this._drawExtraRounded;
              break;
            default:
              n = this._drawSquare
          }
          n.call(this, {
            x: t,
            y: e,
            size: r,
            context: o,
            getNeighbor: i
          })
        }
        _rotateFigure({
          x: t,
          y: e,
          size: r,
          context: i,
          rotation: n = 0,
          draw: o
        }) {
          let a = t + r / 2,
            s = e + r / 2;
          i.translate(a, s), n && i.rotate(n), o(), i.closePath(), n && i.rotate(-n), i.translate(-a, -s)
        }
        _basicDot(t) {
          let {
            size: e,
            context: r
          } = t;
          this._rotateFigure({
            ...t,
            draw: () => {
              r.arc(0, 0, e / 2, 0, 2 * Math.PI)
            }
          })
        }
        _basicSquare(t) {
          let {
            size: e,
            context: r
          } = t;
          this._rotateFigure({
            ...t,
            draw: () => {
              r.rect(-e / 2, -e / 2, e, e)
            }
          })
        }
        _basicSideRounded(t) {
          let {
            size: e,
            context: r
          } = t;
          this._rotateFigure({
            ...t,
            draw: () => {
              r.arc(0, 0, e / 2, -Math.PI / 2, Math.PI / 2), r.lineTo(-e / 2, e / 2), r.lineTo(-e / 2, -e / 2), r.lineTo(0, -e / 2)
            }
          })
        }
        _basicCornerRounded(t) {
          let {
            size: e,
            context: r
          } = t;
          this._rotateFigure({
            ...t,
            draw: () => {
              r.arc(0, 0, e / 2, -Math.PI / 2, 0), r.lineTo(e / 2, e / 2), r.lineTo(-e / 2, e / 2), r.lineTo(-e / 2, -e / 2), r.lineTo(0, -e / 2)
            }
          })
        }
        _basicCornerExtraRounded(t) {
          let {
            size: e,
            context: r
          } = t;
          this._rotateFigure({
            ...t,
            draw: () => {
              r.arc(-e / 2, e / 2, e, -Math.PI / 2, 0), r.lineTo(-e / 2, e / 2), r.lineTo(-e / 2, -e / 2)
            }
          })
        }
        _basicCornersRounded(t) {
          let {
            size: e,
            context: r
          } = t;
          this._rotateFigure({
            ...t,
            draw: () => {
              r.arc(0, 0, e / 2, -Math.PI / 2, 0), r.lineTo(e / 2, e / 2), r.lineTo(0, e / 2), r.arc(0, 0, e / 2, Math.PI / 2, Math.PI), r.lineTo(-e / 2, -e / 2), r.lineTo(0, -e / 2)
            }
          })
        }
        _basicCornersExtraRounded(t) {
          let {
            size: e,
            context: r
          } = t;
          this._rotateFigure({
            ...t,
            draw: () => {
              r.arc(-e / 2, e / 2, e, -Math.PI / 2, 0), r.arc(e / 2, -e / 2, e, Math.PI / 2, Math.PI)
            }
          })
        }
        _drawDot({
          x: t,
          y: e,
          size: r,
          context: i
        }) {
          this._basicDot({
            x: t,
            y: e,
            size: r,
            context: i,
            rotation: 0
          })
        }
        _drawSquare({
          x: t,
          y: e,
          size: r,
          context: i
        }) {
          this._basicSquare({
            x: t,
            y: e,
            size: r,
            context: i,
            rotation: 0
          })
        }
        _drawRounded({
          x: t,
          y: e,
          size: r,
          context: i,
          getNeighbor: n
        }) {
          let o = n ? +n(-1, 0) : 0,
            a = n ? +n(1, 0) : 0,
            s = n ? +n(0, -1) : 0,
            l = n ? +n(0, 1) : 0,
            h = o + a + s + l;
          if (0 === h) return void this._basicDot({
            x: t,
            y: e,
            size: r,
            context: i,
            rotation: 0
          });
          if (h > 2 || o && a || s && l) return void this._basicSquare({
            x: t,
            y: e,
            size: r,
            context: i,
            rotation: 0
          });
          if (2 === h) {
            let n = 0;
            o && s ? n = Math.PI / 2 : s && a ? n = Math.PI : a && l && (n = -Math.PI / 2), this._basicCornerRounded({
              x: t,
              y: e,
              size: r,
              context: i,
              rotation: n
            });
            return
          }
          if (1 === h) {
            let n = 0;
            s ? n = Math.PI / 2 : a ? n = Math.PI : l && (n = -Math.PI / 2), this._basicSideRounded({
              x: t,
              y: e,
              size: r,
              context: i,
              rotation: n
            });
            return
          }
        }
        _drawExtraRounded({
          x: t,
          y: e,
          size: r,
          context: i,
          getNeighbor: n
        }) {
          let o = n ? +n(-1, 0) : 0,
            a = n ? +n(1, 0) : 0,
            s = n ? +n(0, -1) : 0,
            l = n ? +n(0, 1) : 0,
            h = o + a + s + l;
          if (0 === h) return void this._basicDot({
            x: t,
            y: e,
            size: r,
            context: i,
            rotation: 0
          });
          if (h > 2 || o && a || s && l) return void this._basicSquare({
            x: t,
            y: e,
            size: r,
            context: i,
            rotation: 0
          });
          if (2 === h) {
            let n = 0;
            o && s ? n = Math.PI / 2 : s && a ? n = Math.PI : a && l && (n = -Math.PI / 2), this._basicCornerExtraRounded({
              x: t,
              y: e,
              size: r,
              context: i,
              rotation: n
            });
            return
          }
          if (1 === h) {
            let n = 0;
            s ? n = Math.PI / 2 : a ? n = Math.PI : l && (n = -Math.PI / 2), this._basicSideRounded({
              x: t,
              y: e,
              size: r,
              context: i,
              rotation: n
            });
            return
          }
        }
        _drawClassy({
          x: t,
          y: e,
          size: r,
          context: i,
          getNeighbor: n
        }) {
          let o = n ? +n(-1, 0) : 0,
            a = n ? +n(1, 0) : 0,
            s = n ? +n(0, -1) : 0,
            l = n ? +n(0, 1) : 0;
          o + a + s + l === 0 ? this._basicCornersRounded({
            x: t,
            y: e,
            size: r,
            context: i,
            rotation: Math.PI / 2
          }) : o || s ? a || l ? this._basicSquare({
            x: t,
            y: e,
            size: r,
            context: i,
            rotation: 0
          }) : this._basicCornerRounded({
            x: t,
            y: e,
            size: r,
            context: i,
            rotation: Math.PI / 2
          }) : this._basicCornerRounded({
            x: t,
            y: e,
            size: r,
            context: i,
            rotation: -Math.PI / 2
          })
        }
        _drawClassyRounded({
          x: t,
          y: e,
          size: r,
          context: i,
          getNeighbor: n
        }) {
          let o = n ? +n(-1, 0) : 0,
            a = n ? +n(1, 0) : 0,
            s = n ? +n(0, -1) : 0,
            l = n ? +n(0, 1) : 0;
          o + a + s + l === 0 ? this._basicCornersRounded({
            x: t,
            y: e,
            size: r,
            context: i,
            rotation: Math.PI / 2
          }) : o || s ? a || l ? this._basicSquare({
            x: t,
            y: e,
            size: r,
            context: i,
            rotation: 0
          }) : this._basicCornerExtraRounded({
            x: t,
            y: e,
            size: r,
            context: i,
            rotation: Math.PI / 2
          }) : this._basicCornerExtraRounded({
            x: t,
            y: e,
            size: r,
            context: i,
            rotation: -Math.PI / 2
          })
        }
      }

      function C({
        originalHeight: t,
        originalWidth: e,
        maxHiddenDots: r,
        maxHiddenAxisDots: i,
        dotSize: n
      }) {
        let o = {
            x: 0,
            y: 0
          },
          a = {
            x: 0,
            y: 0
          };
        if (t <= 0 || e <= 0 || r <= 0 || n <= 0) return {
          height: 0,
          width: 0,
          hideYDots: 0,
          hideXDots: 0
        };
        let s = t / e;
        return o.x = Math.floor(Math.sqrt(r / s)), o.x <= 0 && (o.x = 1), i && i < o.x && (o.x = i), o.x % 2 == 0 && o.x--, a.x = o.x * n, o.y = 1 + 2 * Math.ceil((o.x * s - 1) / 2), a.y = Math.round(a.x * s), (o.y * o.x > r || i && i < o.y) && (i && i < o.y ? (o.y = i, o.y % 2 == 0 && o.x--) : o.y -= 2, a.y = o.y * n, o.x = 1 + 2 * Math.ceil((o.y / s - 1) / 2), a.x = Math.round(a.y / s)), {
          height: a.y,
          width: a.x,
          hideYDots: o.x,
          hideXDots: o.y
        }
      }
      var P = Object.defineProperty,
        D = (t, e, r) => {
          let i;
          return (i = "symbol" != typeof e ? e + "" : e) in t ? P(t, i, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
          }) : t[i] = r, r
        };
      let I = [
          [1, 1, 1, 1, 1, 1, 1],
          [1, 0, 0, 0, 0, 0, 1],
          [1, 0, 0, 0, 0, 0, 1],
          [1, 0, 0, 0, 0, 0, 1],
          [1, 0, 0, 0, 0, 0, 1],
          [1, 0, 0, 0, 0, 0, 1],
          [1, 1, 1, 1, 1, 1, 1]
        ],
        $ = [
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 1, 1, 1, 0, 0],
          [0, 0, 1, 1, 1, 0, 0],
          [0, 0, 1, 1, 1, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ];
      class O {
        constructor(t) {
          D(this, "_canvas"), D(this, "_options"), D(this, "_qr"), D(this, "_image"), this._canvas = document.createElement("canvas"), this._canvas.width = t.width, this._canvas.height = t.height, this._options = t
        }
        get context() {
          return this._canvas.getContext("2d")
        }
        get width() {
          return this._canvas.width
        }
        get height() {
          return this._canvas.height
        }
        getCanvas() {
          return this._canvas
        }
        clear() {
          let t = this.context;
          t && t.clearRect(0, 0, this._canvas.width, this._canvas.height)
        }
        async drawQR(t) {
          let e = t.getModuleCount(),
            r = Math.floor((Math.min(this._options.width, this._options.height) - 2 * this._options.margin) / e),
            i = {
              hideXDots: 0,
              hideYDots: 0,
              width: 0,
              height: 0
            };
          if (this._qr = t, this._options.image) {
            if (await this.loadImage(), !this._image) return;
            let {
              imageOptions: t,
              qrOptions: n
            } = this._options, o = Math.floor(t.imageSize * a[n.errorCorrectionLevel] * e * e);
            i = C({
              originalWidth: this._image.width,
              originalHeight: this._image.height,
              maxHiddenDots: o,
              maxHiddenAxisDots: e - 14,
              dotSize: r
            })
          }
          this.clear(), this.drawBackground(), this.drawDots((t, r) => {
            var n, o, a, s, l, h;
            return !(this._options.imageOptions.hideBackgroundDots && t >= (e - i.hideXDots) / 2 && t < (e + i.hideXDots) / 2 && r >= (e - i.hideYDots) / 2 && r < (e + i.hideYDots) / 2 || null != (n = I[t]) && n[r] || null != (o = I[t - e + 7]) && o[r] || null != (a = I[t]) && a[r - e + 7] || null != (s = $[t]) && s[r] || null != (l = $[t - e + 7]) && l[r] || null != (h = $[t]) && h[r - e + 7])
          }), this.drawCorners(), this._options.image && this.drawImage({
            width: i.width,
            height: i.height,
            count: e,
            dotSize: r
          })
        }
        drawBackground() {
          let t = this.context,
            e = this._options;
          if (t) {
            if (e.backgroundOptions.gradient) {
              let r = e.backgroundOptions.gradient,
                i = this._createGradient({
                  context: t,
                  options: r,
                  additionalRotation: 0,
                  x: 0,
                  y: 0,
                  size: this._canvas.width > this._canvas.height ? this._canvas.width : this._canvas.height
                });
              r.colorStops.forEach(({
                offset: t,
                color: e
              }) => {
                i.addColorStop(t, e)
              }), t.fillStyle = i
            } else e.backgroundOptions.color && (t.fillStyle = e.backgroundOptions.color);
            t.fillRect(0, 0, this._canvas.width, this._canvas.height)
          }
        }
        drawDots(t) {
          if (!this._qr) throw "QR code is not defined";
          let e = this.context;
          if (!e) throw "QR code is not defined";
          let r = this._options,
            i = this._qr.getModuleCount();
          if (i > r.width || i > r.height) throw "The canvas is too small.";
          let n = Math.floor((Math.min(r.width, r.height) - 2 * r.margin) / i),
            o = Math.floor((r.width - i * n) / 2),
            a = Math.floor((r.height - i * n) / 2),
            s = new S({
              context: e,
              type: r.dotsOptions.type
            });
          e.beginPath();
          for (let e = 0; e < i; e++)
            for (let r = 0; r < i; r++) {
              if (t && !t(e, r) || !this._qr.isDark(e, r)) continue;
              let l = this._options.useLegacyDotRotation ? o + e * n : a + r * n,
                h = this._options.useLegacyDotRotation ? a + r * n : o + e * n;
              s.draw(l, h, n, (n, o) => this._options.useLegacyDotRotation ? !(e + n < 0) && !(r + o < 0) && !(e + n >= i) && !(r + o >= i) && (!t || !!t(e + n, r + o)) && !!this._qr && this._qr.isDark(e + n, r + o) : !(r + n < 0) && !(e + o < 0) && !(r + n >= i) && !(e + o >= i) && (!t || !!t(r + n, e + o)) && !!this._qr && this._qr.isDark(e + o, r + n))
            }
          if (r.dotsOptions.gradient) {
            let t = r.dotsOptions.gradient,
              s = this._createGradient({
                context: e,
                options: t,
                additionalRotation: 0,
                x: o,
                y: a,
                size: i * n
              });
            t.colorStops.forEach(({
              offset: t,
              color: e
            }) => {
              s.addColorStop(t, e)
            }), e.fillStyle = e.strokeStyle = s
          } else r.dotsOptions.color && (e.fillStyle = e.strokeStyle = r.dotsOptions.color);
          e.fill("evenodd")
        }
        drawCorners(t) {
          if (!this._qr) throw "QR code is not defined";
          let e = this.context;
          if (!e) throw "QR code is not defined";
          let r = this._options,
            i = this._qr.getModuleCount(),
            n = Math.floor((Math.min(r.width, r.height) - 2 * r.margin) / i),
            o = 7 * n,
            a = 3 * n,
            s = Math.floor((r.width - i * n) / 2),
            l = Math.floor((r.height - i * n) / 2);
          [
            [0, 0, 0],
            [1, 0, Math.PI / 2],
            [0, 1, -Math.PI / 2]
          ].forEach(([h, u, d]) => {
            var g, f, p, w, y, m, v, b, x, M;
            if (t && !t(h, u)) return;
            let C = s + h * n * (i - 7),
              P = l + u * n * (i - 7);
            if (null != (g = r.cornersSquareOptions) && g.type) {
              let t = new _({
                context: e,
                type: null == (f = r.cornersSquareOptions) ? void 0 : f.type
              });
              e.beginPath(), t.draw(C, P, o, d)
            } else {
              let t = new S({
                context: e,
                type: r.dotsOptions.type
              });
              e.beginPath();
              for (let e = 0; e < I.length; e++)
                for (let r = 0; r < I[e].length; r++) null != (p = I[e]) && p[r] && t.draw(C + e * n, P + r * n, n, (t, i) => {
                  var n;
                  return !!(null != (n = I[e + t]) && n[r + i])
                })
            }
            if (null != (w = r.cornersSquareOptions) && w.gradient) {
              let t = r.cornersSquareOptions.gradient,
                i = this._createGradient({
                  context: e,
                  options: t,
                  additionalRotation: d,
                  x: C,
                  y: P,
                  size: o
                });
              t.colorStops.forEach(({
                offset: t,
                color: e
              }) => {
                i.addColorStop(t, e)
              }), e.fillStyle = e.strokeStyle = i
            } else null != (y = r.cornersSquareOptions) && y.color && (e.fillStyle = e.strokeStyle = r.cornersSquareOptions.color);
            if (e.fill("evenodd"), null != (m = r.cornersDotOptions) && m.type) {
              let t = new c({
                context: e,
                type: null == (v = r.cornersDotOptions) ? void 0 : v.type
              });
              e.beginPath(), t.draw(C + 2 * n, P + 2 * n, a, d)
            } else {
              let t = new S({
                context: e,
                type: r.dotsOptions.type
              });
              e.beginPath();
              for (let e = 0; e < $.length; e++)
                for (let r = 0; r < $[e].length; r++) null != (b = $[e]) && b[r] && t.draw(C + e * n, P + r * n, n, (t, i) => {
                  var n;
                  return !!(null != (n = $[e + t]) && n[r + i])
                })
            }
            if (null != (x = r.cornersDotOptions) && x.gradient) {
              let t = r.cornersDotOptions.gradient,
                i = this._createGradient({
                  context: e,
                  options: t,
                  additionalRotation: d,
                  x: C + 2 * n,
                  y: P + 2 * n,
                  size: a
                });
              t.colorStops.forEach(({
                offset: t,
                color: e
              }) => {
                i.addColorStop(t, e)
              }), e.fillStyle = e.strokeStyle = i
            } else null != (M = r.cornersDotOptions) && M.color && (e.fillStyle = e.strokeStyle = r.cornersDotOptions.color);
            e.fill("evenodd")
          })
        }
        loadImage() {
          return new Promise((t, e) => {
            let r = this._options,
              i = new Image;
            if (!r.image) return e("Image is not defined");
            "string" == typeof r.imageOptions.crossOrigin && (i.crossOrigin = r.imageOptions.crossOrigin), this._image = i, i.onload = () => {
              t()
            }, i.src = r.image
          })
        }
        drawImage({
          width: t,
          height: e,
          count: r,
          dotSize: i
        }) {
          let n = this.context;
          if (!n) throw "canvasContext is not defined";
          if (!this._image) throw "image is not defined";
          let o = this._options,
            a = Math.floor((o.width - r * i) / 2),
            s = Math.floor((o.height - r * i) / 2),
            l = a + o.imageOptions.margin + (r * i - t) / 2,
            h = s + o.imageOptions.margin + (r * i - e) / 2,
            u = t - 2 * o.imageOptions.margin,
            c = e - 2 * o.imageOptions.margin;
          n.drawImage(this._image, l, h, u < 0 ? 0 : u, c < 0 ? 0 : c)
        }
        _createGradient({
          context: t,
          options: e,
          additionalRotation: r,
          x: i,
          y: n,
          size: o
        }) {
          let a;
          if (e.type === s) a = t.createRadialGradient(i + o / 2, n + o / 2, 0, i + o / 2, n + o / 2, o / 2);
          else {
            let s = ((e.rotation || 0) + r) % (2 * Math.PI),
              l = (s + 2 * Math.PI) % (2 * Math.PI),
              h = i + o / 2,
              u = n + o / 2,
              c = i + o / 2,
              d = n + o / 2;
            l >= 0 && l <= .25 * Math.PI || l > 1.75 * Math.PI && l <= 2 * Math.PI ? (h -= o / 2, u -= o / 2 * Math.tan(s), c += o / 2, d += o / 2 * Math.tan(s)) : l > .25 * Math.PI && l <= .75 * Math.PI ? (u -= o / 2, h -= o / 2 / Math.tan(s), d += o / 2, c += o / 2 / Math.tan(s)) : l > .75 * Math.PI && l <= 1.25 * Math.PI ? (h += o / 2, u += o / 2 * Math.tan(s), c -= o / 2, d -= o / 2 * Math.tan(s)) : l > 1.25 * Math.PI && l <= 1.75 * Math.PI && (u += o / 2, h += o / 2 / Math.tan(s), d -= o / 2, c -= o / 2 / Math.tan(s)), a = t.createLinearGradient(Math.round(h), Math.round(u), Math.round(c), Math.round(d))
          }
          return a
        }
      }
      let A = "canvas",
        z = {};
      for (let t = 0; t <= 40; t++) z[t] = t;
      let k = {
        type: A,
        width: 300,
        height: 300,
        data: "",
        margin: 0,
        qrOptions: {
          typeNumber: z[0],
          mode: void 0,
          errorCorrectionLevel: "Q"
        },
        imageOptions: {
          hideBackgroundDots: !0,
          imageSize: .4,
          crossOrigin: "anonymous",
          margin: 0
        },
        dotsOptions: {
          type: "square",
          color: "#000"
        },
        backgroundOptions: {
          color: "#fff"
        },
        useLegacyDotRotation: !1
      };
      var q = Object.defineProperty,
        R = (t, e, r) => {
          let i;
          return (i = "symbol" != typeof e ? e + "" : e) in t ? q(t, i, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
          }) : t[i] = r, r
        };
      class E {
        constructor({
          svg: t,
          type: e
        }) {
          R(this, "_element"), R(this, "_svg"), R(this, "_type"), this._svg = t, this._type = e
        }
        draw(t, e, r, i) {
          let n;
          (n = this._type === l ? this._drawSquare : this._drawDot).call(this, {
            x: t,
            y: e,
            size: r,
            rotation: i
          })
        }
        _rotateFigure({
          x: t,
          y: e,
          size: r,
          rotation: i = 0,
          draw: n
        }) {
          var o;
          n(), null == (o = this._element) || o.setAttribute("transform", `rotate(${180*i/Math.PI},${t+r/2},${e+r/2})`)
        }
        _basicDot(t) {
          let {
            size: e,
            x: r,
            y: i
          } = t;
          this._rotateFigure({
            ...t,
            draw: () => {
              this._element = document.createElementNS("http://www.w3.org/2000/svg", "circle"), this._element.setAttribute("cx", String(r + e / 2)), this._element.setAttribute("cy", String(i + e / 2)), this._element.setAttribute("r", String(e / 2))
            }
          })
        }
        _basicSquare(t) {
          let {
            size: e,
            x: r,
            y: i
          } = t;
          this._rotateFigure({
            ...t,
            draw: () => {
              this._element = document.createElementNS("http://www.w3.org/2000/svg", "rect"), this._element.setAttribute("x", String(r)), this._element.setAttribute("y", String(i)), this._element.setAttribute("width", String(e)), this._element.setAttribute("height", String(e))
            }
          })
        }
        _drawDot({
          x: t,
          y: e,
          size: r,
          rotation: i
        }) {
          this._basicDot({
            x: t,
            y: e,
            size: r,
            rotation: i
          })
        }
        _drawSquare({
          x: t,
          y: e,
          size: r,
          rotation: i
        }) {
          this._basicSquare({
            x: t,
            y: e,
            size: r,
            rotation: i
          })
        }
      }
      var B = Object.defineProperty,
        L = (t, e, r) => {
          let i;
          return (i = "symbol" != typeof e ? e + "" : e) in t ? B(t, i, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
          }) : t[i] = r, r
        };
      class N {
        constructor({
          svg: t,
          type: e
        }) {
          L(this, "_element"), L(this, "_svg"), L(this, "_type"), this._svg = t, this._type = e
        }
        draw(t, e, r, i) {
          let n;
          switch (this._type) {
            case d:
              n = this._drawSquare;
              break;
            case g:
              n = this._drawExtraRounded;
              break;
            default:
              n = this._drawDot
          }
          n.call(this, {
            x: t,
            y: e,
            size: r,
            rotation: i
          })
        }
        _rotateFigure({
          x: t,
          y: e,
          size: r,
          rotation: i = 0,
          draw: n
        }) {
          var o;
          n(), null == (o = this._element) || o.setAttribute("transform", `rotate(${180*i/Math.PI},${t+r/2},${e+r/2})`)
        }
        _basicDot(t) {
          let {
            size: e,
            x: r,
            y: i
          } = t, n = e / 7;
          this._rotateFigure({
            ...t,
            draw: () => {
              this._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("clip-rule", "evenodd"), this._element.setAttribute("d", `M ${r+e/2} ${i}a ${e/2} ${e/2} 0 1 0 0.1 0zm 0 ${n}a ${e/2-n} ${e/2-n} 0 1 1 -0.1 0Z`)
            }
          })
        }
        _basicSquare(t) {
          let {
            size: e,
            x: r,
            y: i
          } = t, n = e / 7;
          this._rotateFigure({
            ...t,
            draw: () => {
              this._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("clip-rule", "evenodd"), this._element.setAttribute("d", `M ${r} ${i}v ${e}h ${e}v ${-e}zM ${r+n} ${i+n}h ${e-2*n}v ${e-2*n}h ${-e+2*n}z`)
            }
          })
        }
        _basicExtraRounded(t) {
          let {
            size: e,
            x: r,
            y: i
          } = t, n = e / 7;
          this._rotateFigure({
            ...t,
            draw: () => {
              this._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("clip-rule", "evenodd"), this._element.setAttribute("d", `M ${r} ${i+2.5*n}v ${2*n}a ${2.5*n} ${2.5*n}, 0, 0, 0, ${2.5*n} ${2.5*n}h ${2*n}a ${2.5*n} ${2.5*n}, 0, 0, 0, ${2.5*n} ${-(2.5*n)}v ${-2*n}a ${2.5*n} ${2.5*n}, 0, 0, 0, ${-(2.5*n)} ${-(2.5*n)}h ${-2*n}a ${2.5*n} ${2.5*n}, 0, 0, 0, ${-(2.5*n)} ${2.5*n}M ${r+2.5*n} ${i+n}h ${2*n}a ${1.5*n} ${1.5*n}, 0, 0, 1, ${1.5*n} ${1.5*n}v ${2*n}a ${1.5*n} ${1.5*n}, 0, 0, 1, ${-(1.5*n)} ${1.5*n}h ${-2*n}a ${1.5*n} ${1.5*n}, 0, 0, 1, ${-(1.5*n)} ${-(1.5*n)}v ${-2*n}a ${1.5*n} ${1.5*n}, 0, 0, 1, ${1.5*n} ${-(1.5*n)}`)
            }
          })
        }
        _drawDot({
          x: t,
          y: e,
          size: r,
          rotation: i
        }) {
          this._basicDot({
            x: t,
            y: e,
            size: r,
            rotation: i
          })
        }
        _drawSquare({
          x: t,
          y: e,
          size: r,
          rotation: i
        }) {
          this._basicSquare({
            x: t,
            y: e,
            size: r,
            rotation: i
          })
        }
        _drawExtraRounded({
          x: t,
          y: e,
          size: r,
          rotation: i
        }) {
          this._basicExtraRounded({
            x: t,
            y: e,
            size: r,
            rotation: i
          })
        }
      }
      var T = Object.defineProperty,
        F = (t, e, r) => {
          let i;
          return (i = "symbol" != typeof e ? e + "" : e) in t ? T(t, i, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
          }) : t[i] = r, r
        };
      class j {
        constructor({
          svg: t,
          type: e
        }) {
          F(this, "_element"), F(this, "_svg"), F(this, "_type"), this._svg = t, this._type = e
        }
        draw(t, e, r, i) {
          let n;
          switch (this._type) {
            case w:
              n = this._drawDot;
              break;
            case m:
              n = this._drawClassy;
              break;
            case v:
              n = this._drawClassyRounded;
              break;
            case y:
              n = this._drawRounded;
              break;
            case b:
              n = this._drawExtraRounded;
              break;
            default:
              n = this._drawSquare
          }
          n.call(this, {
            x: t,
            y: e,
            size: r,
            getNeighbor: i
          })
        }
        _rotateFigure({
          x: t,
          y: e,
          size: r,
          rotation: i = 0,
          draw: n
        }) {
          var o;
          n(), null == (o = this._element) || o.setAttribute("transform", `rotate(${180*i/Math.PI},${t+r/2},${e+r/2})`)
        }
        _basicDot(t) {
          let {
            size: e,
            x: r,
            y: i
          } = t;
          this._rotateFigure({
            ...t,
            draw: () => {
              this._element = document.createElementNS("http://www.w3.org/2000/svg", "circle"), this._element.setAttribute("cx", String(r + e / 2)), this._element.setAttribute("cy", String(i + e / 2)), this._element.setAttribute("r", String(e / 2))
            }
          })
        }
        _basicSquare(t) {
          let {
            size: e,
            x: r,
            y: i
          } = t;
          this._rotateFigure({
            ...t,
            draw: () => {
              this._element = document.createElementNS("http://www.w3.org/2000/svg", "rect"), this._element.setAttribute("x", String(r)), this._element.setAttribute("y", String(i)), this._element.setAttribute("width", String(e)), this._element.setAttribute("height", String(e))
            }
          })
        }
        _basicSideRounded(t) {
          let {
            size: e,
            x: r,
            y: i
          } = t;
          this._rotateFigure({
            ...t,
            draw: () => {
              this._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("d", `M ${r} ${i}v ${e}h ${e/2}a ${e/2} ${e/2}, 0, 0, 0, 0 ${-e}`)
            }
          })
        }
        _basicCornerRounded(t) {
          let {
            size: e,
            x: r,
            y: i
          } = t;
          this._rotateFigure({
            ...t,
            draw: () => {
              this._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("d", `M ${r} ${i}v ${e}h ${e}v ${-e/2}a ${e/2} ${e/2}, 0, 0, 0, ${-e/2} ${-e/2}`)
            }
          })
        }
        _basicCornerExtraRounded(t) {
          let {
            size: e,
            x: r,
            y: i
          } = t;
          this._rotateFigure({
            ...t,
            draw: () => {
              this._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("d", `M ${r} ${i}v ${e}h ${e}a ${e} ${e}, 0, 0, 0, ${-e} ${-e}`)
            }
          })
        }
        _basicCornersRounded(t) {
          let {
            size: e,
            x: r,
            y: i
          } = t;
          this._rotateFigure({
            ...t,
            draw: () => {
              this._element = document.createElementNS("http://www.w3.org/2000/svg", "path"), this._element.setAttribute("d", `M ${r} ${i}v ${e/2}a ${e/2} ${e/2}, 0, 0, 0, ${e/2} ${e/2}h ${e/2}v ${-e/2}a ${e/2} ${e/2}, 0, 0, 0, ${-e/2} ${-e/2}`)
            }
          })
        }
        _drawDot({
          x: t,
          y: e,
          size: r
        }) {
          this._basicDot({
            x: t,
            y: e,
            size: r,
            rotation: 0
          })
        }
        _drawSquare({
          x: t,
          y: e,
          size: r
        }) {
          this._basicSquare({
            x: t,
            y: e,
            size: r,
            rotation: 0
          })
        }
        _drawRounded({
          x: t,
          y: e,
          size: r,
          getNeighbor: i
        }) {
          let n = i ? +i(-1, 0) : 0,
            o = i ? +i(1, 0) : 0,
            a = i ? +i(0, -1) : 0,
            s = i ? +i(0, 1) : 0,
            l = n + o + a + s;
          if (0 === l) return void this._basicDot({
            x: t,
            y: e,
            size: r,
            rotation: 0
          });
          if (l > 2 || n && o || a && s) return void this._basicSquare({
            x: t,
            y: e,
            size: r,
            rotation: 0
          });
          if (2 === l) {
            let i = 0;
            n && a ? i = Math.PI / 2 : a && o ? i = Math.PI : o && s && (i = -Math.PI / 2), this._basicCornerRounded({
              x: t,
              y: e,
              size: r,
              rotation: i
            });
            return
          }
          if (1 === l) {
            let i = 0;
            a ? i = Math.PI / 2 : o ? i = Math.PI : s && (i = -Math.PI / 2), this._basicSideRounded({
              x: t,
              y: e,
              size: r,
              rotation: i
            });
            return
          }
        }
        _drawExtraRounded({
          x: t,
          y: e,
          size: r,
          getNeighbor: i
        }) {
          let n = i ? +i(-1, 0) : 0,
            o = i ? +i(1, 0) : 0,
            a = i ? +i(0, -1) : 0,
            s = i ? +i(0, 1) : 0,
            l = n + o + a + s;
          if (0 === l) return void this._basicDot({
            x: t,
            y: e,
            size: r,
            rotation: 0
          });
          if (l > 2 || n && o || a && s) return void this._basicSquare({
            x: t,
            y: e,
            size: r,
            rotation: 0
          });
          if (2 === l) {
            let i = 0;
            n && a ? i = Math.PI / 2 : a && o ? i = Math.PI : o && s && (i = -Math.PI / 2), this._basicCornerExtraRounded({
              x: t,
              y: e,
              size: r,
              rotation: i
            });
            return
          }
          if (1 === l) {
            let i = 0;
            a ? i = Math.PI / 2 : o ? i = Math.PI : s && (i = -Math.PI / 2), this._basicSideRounded({
              x: t,
              y: e,
              size: r,
              rotation: i
            });
            return
          }
        }
        _drawClassy({
          x: t,
          y: e,
          size: r,
          getNeighbor: i
        }) {
          let n = i ? +i(-1, 0) : 0,
            o = i ? +i(1, 0) : 0,
            a = i ? +i(0, -1) : 0,
            s = i ? +i(0, 1) : 0;
          n + o + a + s === 0 ? this._basicCornersRounded({
            x: t,
            y: e,
            size: r,
            rotation: Math.PI / 2
          }) : n || a ? o || s ? this._basicSquare({
            x: t,
            y: e,
            size: r,
            rotation: 0
          }) : this._basicCornerRounded({
            x: t,
            y: e,
            size: r,
            rotation: Math.PI / 2
          }) : this._basicCornerRounded({
            x: t,
            y: e,
            size: r,
            rotation: -Math.PI / 2
          })
        }
        _drawClassyRounded({
          x: t,
          y: e,
          size: r,
          getNeighbor: i
        }) {
          let n = i ? +i(-1, 0) : 0,
            o = i ? +i(1, 0) : 0,
            a = i ? +i(0, -1) : 0,
            s = i ? +i(0, 1) : 0;
          n + o + a + s === 0 ? this._basicCornersRounded({
            x: t,
            y: e,
            size: r,
            rotation: Math.PI / 2
          }) : n || a ? o || s ? this._basicSquare({
            x: t,
            y: e,
            size: r,
            rotation: 0
          }) : this._basicCornerExtraRounded({
            x: t,
            y: e,
            size: r,
            rotation: Math.PI / 2
          }) : this._basicCornerExtraRounded({
            x: t,
            y: e,
            size: r,
            rotation: -Math.PI / 2
          })
        }
      }
      var H = Object.defineProperty,
        Q = (t, e, r) => {
          let i;
          return (i = "symbol" != typeof e ? e + "" : e) in t ? H(t, i, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
          }) : t[i] = r, r
        };
      let U = [
          [1, 1, 1, 1, 1, 1, 1],
          [1, 0, 0, 0, 0, 0, 1],
          [1, 0, 0, 0, 0, 0, 1],
          [1, 0, 0, 0, 0, 0, 1],
          [1, 0, 0, 0, 0, 0, 1],
          [1, 0, 0, 0, 0, 0, 1],
          [1, 1, 1, 1, 1, 1, 1]
        ],
        G = [
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 1, 1, 1, 0, 0],
          [0, 0, 1, 1, 1, 0, 0],
          [0, 0, 1, 1, 1, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        X = class t {
          constructor(e) {
            Q(this, "_id"), Q(this, "_element"), Q(this, "_style"), Q(this, "_defs"), Q(this, "_dotsClipPath"), Q(this, "_cornersSquareClipPath"), Q(this, "_cornersDotClipPath"), Q(this, "_dots"), Q(this, "_cornerSquares"), Q(this, "_corners"), Q(this, "_cornerDots"), Q(this, "_options"), Q(this, "_qr"), Q(this, "_image"), this._id = t._id++, this._element = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this._element.setAttribute("width", String(e.width)), this._element.setAttribute("height", String(e.height)), this._element.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this._element.setAttribute("data-internal-uid", this.id), this._defs = document.createElementNS("http://www.w3.org/2000/svg", "defs"), this._style = document.createElementNS("http://www.w3.org/2000/svg", "style"), this._options = e
          }
          get width() {
            return this._options.width
          }
          get height() {
            return this._options.height
          }
          get id() {
            return `svg_qr_${this._id}`
          }
          getElement() {
            return this._element
          }
          clear() {
            var t;
            let e = this._element;
            this._element = e.cloneNode(!1), null == (t = null == e ? void 0 : e.parentNode) || t.replaceChild(this._element, e), this._defs = document.createElementNS("http://www.w3.org/2000/svg", "defs"), this._style = document.createElementNS("http://www.w3.org/2000/svg", "style"), this._element.appendChild(this._style), this._element.appendChild(this._defs)
          }
          async drawQR(t) {
            let e = t.getModuleCount(),
              r = Math.floor((Math.min(this._options.width, this._options.height) - 2 * this._options.margin) / e),
              i = {
                hideXDots: 0,
                hideYDots: 0,
                width: 0,
                height: 0
              };
            if (this._qr = t, this._options.image) {
              if (await this.loadImage(), !this._image) return;
              let {
                imageOptions: t,
                qrOptions: n
              } = this._options, o = Math.floor(t.imageSize * a[n.errorCorrectionLevel] * e * e);
              i = C({
                originalWidth: this._image.width,
                originalHeight: this._image.height,
                maxHiddenDots: o,
                maxHiddenAxisDots: e - 14,
                dotSize: r
              })
            }
            this._element.appendChild(this._style), this._element.appendChild(this._defs), this.clear(), this.drawBackground(), this.drawDots((t, r) => {
              var n, o, a, s, l, h;
              return !(this._options.imageOptions.hideBackgroundDots && t >= (e - i.hideXDots) / 2 && t < (e + i.hideXDots) / 2 && r >= (e - i.hideYDots) / 2 && r < (e + i.hideYDots) / 2 || null != (n = U[t]) && n[r] || null != (o = U[t - e + 7]) && o[r] || null != (a = U[t]) && a[r - e + 7] || null != (s = G[t]) && s[r] || null != (l = G[t - e + 7]) && l[r] || null != (h = G[t]) && h[r - e + 7])
            }), this.drawCorners(), this._options.image && await this.drawImage({
              width: i.width,
              height: i.height,
              count: e,
              dotSize: r
            })
          }
          drawBackground() {
            var t, e, r;
            let i = this._element,
              n = this._options;
            if (i) {
              let i = null == (t = n.backgroundOptions) ? void 0 : t.gradient,
                o = null == (e = n.backgroundOptions) ? void 0 : e.color;
              i ? this._createColor({
                options: i,
                color: o,
                additionalRotation: 0,
                x: 0,
                y: 0,
                height: n.height,
                width: n.width,
                name: "background-color"
              }) : null != (r = n.backgroundOptions) && r.color && this._createStyle({
                color: o,
                name: "background-color"
              })
            }
          }
          drawDots(t) {
            var e, r, i;
            if (!this._qr) throw "QR code is not defined";
            let n = this._options,
              o = this._qr.getModuleCount();
            if (o > n.width || o > n.height) throw "The canvas is too small.";
            let a = Math.floor((Math.min(n.width, n.height) - 2 * n.margin) / o),
              s = Math.floor((n.width - o * a) / 2),
              l = Math.floor((n.height - o * a) / 2),
              h = new j({
                svg: this._element,
                type: n.dotsOptions.type
              });
            null != (e = n.dotsOptions) && e.gradient ? (this._dotsClipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), this._dotsClipPath.setAttribute("id", "clip-path-dot-color"), this._defs.appendChild(this._dotsClipPath), this._createColor({
              options: null == (r = n.dotsOptions) ? void 0 : r.gradient,
              color: n.dotsOptions.color,
              additionalRotation: 0,
              x: s,
              y: l,
              height: o * a,
              width: o * a,
              name: "dot-color"
            })) : n.dotsOptions.color && (this._dots = document.createElementNS("http://www.w3.org/2000/svg", "g"), this._dots.setAttribute("class", "dot-color"), this._element.appendChild(this._dots), this._createStyle({
              color: n.dotsOptions.color,
              name: "dot-color"
            }));
            for (let e = 0; e < o; e++)
              for (let r = 0; r < o; r++) {
                if (t && !t(e, r) || !(null != (i = this._qr) && i.isDark(e, r))) continue;
                let n = this._options.useLegacyDotRotation ? s + e * a : l + r * a,
                  u = this._options.useLegacyDotRotation ? l + r * a : s + e * a;
                h.draw(n, u, a, (i, n) => this._options.useLegacyDotRotation ? !(e + i < 0) && !(r + n < 0) && !(e + i >= o) && !(r + n >= o) && (!t || !!t(e + i, r + n)) && !!this._qr && this._qr.isDark(e + i, r + n) : !(r + i < 0) && !(e + n < 0) && !(r + i >= o) && !(e + n >= o) && (!t || !!t(r + i, e + n)) && !!this._qr && this._qr.isDark(e + n, r + i)), h._element && this._dotsClipPath ? this._dotsClipPath.appendChild(h._element) : h._element && this._dots && this._dots.appendChild(h._element)
              }
          }
          drawCorners() {
            if (!this._qr) throw "QR code is not defined";
            let t = this._element,
              e = this._options;
            if (!t) throw "Element code is not defined";
            let r = this._qr.getModuleCount(),
              i = Math.floor((Math.min(e.width, e.height) - 2 * e.margin) / r),
              n = 7 * i,
              o = 3 * i,
              a = Math.floor((e.width - r * i) / 2),
              s = Math.floor((e.height - r * i) / 2);
            [
              [0, 0, 0],
              [1, 0, Math.PI / 2],
              [0, 1, -Math.PI / 2]
            ].forEach(([t, l, h]) => {
              var u, c, d, g, f, p, _, w, y, m, v, b, x, M;
              let S = a + t * i * (r - 7),
                C = s + l * i * (r - 7),
                P = this._dotsClipPath,
                D = this._dotsClipPath;
              if (null != (u = e.cornersSquareOptions) && u.gradient ? ((P = document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", `clip-path-corners-square-color-${t}-${l}`), this._defs.appendChild(P), this._cornersSquareClipPath = this._cornersDotClipPath = D = P, this._createColor({
                  options: null == (c = e.cornersSquareOptions) ? void 0 : c.gradient,
                  color: null == (d = e.cornersSquareOptions) ? void 0 : d.color,
                  additionalRotation: h,
                  x: S,
                  y: C,
                  height: n,
                  width: n,
                  name: `corners-square-color-${t}-${l}`
                })) : (this._cornerSquares = document.createElementNS("http://www.w3.org/2000/svg", "g"), this._cornerSquares.setAttribute("class", `corners-square-color-${t}-${l}`), this._element.appendChild(this._cornerSquares), this._createStyle({
                  color: null == (g = e.cornersSquareOptions) ? void 0 : g.color,
                  name: `corners-square-color-${t}-${l}`
                })), null != (f = e.cornersSquareOptions) && f.type) {
                let t = new N({
                  svg: this._element,
                  type: e.cornersSquareOptions.type
                });
                t.draw(S, C, n, h), null != (p = e.cornersSquareOptions) && p.gradient && t._element && P ? P.appendChild(t._element) : t._element && this._cornerSquares && this._cornerSquares.appendChild(t._element)
              } else {
                let t = new j({
                  svg: this._element,
                  type: e.dotsOptions.type
                });
                for (let e = 0; e < U.length; e++)
                  for (let r = 0; r < U[e].length; r++) null != (_ = U[e]) && _[r] && (t.draw(S + e * i, C + r * i, i, (t, i) => {
                    var n;
                    return !!(null != (n = U[e + t]) && n[r + i])
                  }), t._element && this._cornersSquareClipPath ? this._cornersSquareClipPath.appendChild(t._element) : t._element && this._cornerSquares && this._cornerSquares.appendChild(t._element))
              }
              if (null != (w = e.cornersDotOptions) && w.gradient ? ((D = document.createElementNS("http://www.w3.org/2000/svg", "clipPath")).setAttribute("id", `clip-path-corners-dot-color-${t}-${l}`), this._defs.appendChild(D), this._cornersDotClipPath = D, this._createColor({
                  options: null == (y = e.cornersDotOptions) ? void 0 : y.gradient,
                  color: null == (m = e.cornersDotOptions) ? void 0 : m.color,
                  additionalRotation: h,
                  x: S + 2 * i,
                  y: C + 2 * i,
                  height: o,
                  width: o,
                  name: `corners-dot-color-${t}-${l}`
                })) : (this._cornerDots = document.createElementNS("http://www.w3.org/2000/svg", "g"), this._cornerDots.setAttribute("class", `corners-dot-color-${t}-${l}`), this._element.appendChild(this._cornerDots), this._createStyle({
                  color: null == (v = e.cornersDotOptions) ? void 0 : v.color,
                  name: `corners-dot-color-${t}-${l}`
                })), null != (b = e.cornersDotOptions) && b.type) {
                let t = new E({
                  svg: this._element,
                  type: e.cornersDotOptions.type
                });
                t.draw(S + 2 * i, C + 2 * i, o, h), null != (x = e.cornersDotOptions) && x.gradient && t._element && D ? D.appendChild(t._element) : t._element && this._cornerDots && this._cornerDots.appendChild(t._element)
              } else {
                let t = new j({
                  svg: this._element,
                  type: e.dotsOptions.type
                });
                for (let e = 0; e < G.length; e++)
                  for (let r = 0; r < G[e].length; r++) null != (M = G[e]) && M[r] && (t.draw(S + e * i, C + r * i, i, (t, i) => {
                    var n;
                    return !!(null != (n = G[e + t]) && n[r + i])
                  }), t._element && this._cornersDotClipPath ? this._cornersDotClipPath.appendChild(t._element) : t._element && this._cornerDots && this._cornerDots.appendChild(t._element))
              }
            })
          }
          loadImage() {
            return new Promise((t, e) => {
              let r = this._options,
                i = new Image;
              if (!r.image) return e("Image is not defined");
              "string" == typeof r.imageOptions.crossOrigin && (i.crossOrigin = r.imageOptions.crossOrigin), this._image = i, i.onload = () => {
                t()
              }, i.src = r.image
            })
          }
          async drawImage({
            width: t,
            height: e,
            count: r,
            dotSize: i
          }) {
            let n = this._options,
              o = Math.floor((n.width - r * i) / 2),
              a = Math.floor((n.height - r * i) / 2),
              s = o + n.imageOptions.margin + (r * i - t) / 2,
              l = a + n.imageOptions.margin + (r * i - e) / 2,
              h = t - 2 * n.imageOptions.margin,
              u = e - 2 * n.imageOptions.margin,
              c = document.createElementNS("http://www.w3.org/2000/svg", "image"),
              d = await this._getBase64Image(n.image || "");
            c.setAttribute("href", d), c.setAttribute("xlink:href", d), c.setAttribute("x", String(s)), c.setAttribute("y", String(l)), c.setAttribute("width", `${h}px`), c.setAttribute("height", `${u}px`), this._element.appendChild(c)
          }
          async _getImageBlob(t) {
            return (await fetch(t)).blob()
          }
          _blobToBase64(t) {
            return new Promise(e => {
              let r = new FileReader;
              r.onload = () => {
                e(r.result)
              }, r.readAsDataURL(t)
            })
          }
          async _getBase64Image(t) {
            if ("" === t) return new Promise(t => {
              t("")
            });
            let e = await this._getImageBlob(t);
            return await this._blobToBase64(e)
          }
          _createColor({
            options: t,
            color: e,
            additionalRotation: r,
            x: i,
            y: n,
            height: o,
            width: a,
            name: l
          }) {
            let h = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            if (h.setAttribute("x", String(i)), h.setAttribute("y", String(n)), h.setAttribute("height", String(o)), h.setAttribute("width", String(a)), h.setAttribute("clip-path", `url('#clip-path-${l}')`), t) {
              let e;
              if (t.type === s)(e = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient")).setAttribute("id", l), e.setAttribute("gradientUnits", "userSpaceOnUse"), e.setAttribute("fx", String(i + a / 2)), e.setAttribute("fy", String(n + o / 2)), e.setAttribute("cx", String(i + a / 2)), e.setAttribute("cy", String(n + o / 2)), e.setAttribute("r", String((a > o ? a : o) / 2));
              else {
                let s = ((t.rotation || 0) + r) % (2 * Math.PI),
                  h = (s + 2 * Math.PI) % (2 * Math.PI),
                  u = i + a / 2,
                  c = n + o / 2,
                  d = i + a / 2,
                  g = n + o / 2;
                h >= 0 && h <= .25 * Math.PI || h > 1.75 * Math.PI && h <= 2 * Math.PI ? (u -= a / 2, c -= o / 2 * Math.tan(s), d += a / 2, g += o / 2 * Math.tan(s)) : h > .25 * Math.PI && h <= .75 * Math.PI ? (c -= o / 2, u -= a / 2 / Math.tan(s), g += o / 2, d += a / 2 / Math.tan(s)) : h > .75 * Math.PI && h <= 1.25 * Math.PI ? (u += a / 2, c += o / 2 * Math.tan(s), d -= a / 2, g -= o / 2 * Math.tan(s)) : h > 1.25 * Math.PI && h <= 1.75 * Math.PI && (c += o / 2, u += a / 2 / Math.tan(s), g -= o / 2, d -= a / 2 / Math.tan(s)), (e = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient")).setAttribute("id", l), e.setAttribute("gradientUnits", "userSpaceOnUse"), e.setAttribute("x1", String(Math.round(u))), e.setAttribute("y1", String(Math.round(c))), e.setAttribute("x2", String(Math.round(d))), e.setAttribute("y2", String(Math.round(g)))
              }
              t.colorStops.forEach(({
                offset: t,
                color: r
              }) => {
                let i = document.createElementNS("http://www.w3.org/2000/svg", "stop");
                i.setAttribute("offset", `${100*t}%`), i.setAttribute("stop-color", r), e.appendChild(i)
              }), h.setAttribute("fill", `url('#${l}')`), this._defs.appendChild(e)
            } else e && h.setAttribute("fill", e);
            this._element.appendChild(h)
          }
          _createStyle({
            color: t,
            name: e
          }) {
            this._style.innerHTML += `[data-internal-uid="${this.id}"] .${e}{ fill: ${t}; }`
          }
        };

      function Y(t, e) {
        let r = document.createElement("a");
        r.download = e, r.href = t, document.body.appendChild(r), r.click(), document.body.removeChild(r)
      }
      Q(X, "_id", 0);
      let J = t => !!t && "object" == typeof t && !Array.isArray(t);

      function W(t, ...e) {
        if (!e.length) return t;
        let r = e.shift();
        return void 0 !== r && J(t) && J(r) ? (t = {
          ...t
        }, Object.keys(r).forEach(e => {
          let i = t[e],
            n = r[e];
          Array.isArray(i) && Array.isArray(n) ? t[e] = n : J(i) && J(n) ? t[e] = W(Object.assign({}, i), n) : t[e] = n
        }), W(t, ...e)) : t
      }

      function Z(t) {
        let e = {
          ...t
        };
        if (!e.colorStops || !e.colorStops.length) throw "Field 'colorStops' is required in gradient";
        return e.rotation ? e.rotation = Number(e.rotation) : e.rotation = 0, e.colorStops = e.colorStops.map(t => ({
          ...t,
          offset: Number(t.offset)
        })), e
      }

      function K(t) {
        let e = {
          ...t
        };
        return e.width = Number(e.width), e.height = Number(e.height), e.margin = Number(e.margin), e.imageOptions = {
          ...e.imageOptions,
          hideBackgroundDots: !!e.imageOptions.hideBackgroundDots,
          imageSize: Number(e.imageOptions.imageSize),
          margin: Number(e.imageOptions.margin)
        }, e.margin > Math.min(e.width, e.height) && (e.margin = Math.min(e.width, e.height)), e.dotsOptions = {
          ...e.dotsOptions
        }, e.dotsOptions.gradient && (e.dotsOptions.gradient = Z(e.dotsOptions.gradient)), e.cornersSquareOptions && (e.cornersSquareOptions = {
          ...e.cornersSquareOptions
        }, e.cornersSquareOptions.gradient && (e.cornersSquareOptions.gradient = Z(e.cornersSquareOptions.gradient))), e.cornersDotOptions && (e.cornersDotOptions = {
          ...e.cornersDotOptions
        }, e.cornersDotOptions.gradient && (e.cornersDotOptions.gradient = Z(e.cornersDotOptions.gradient))), e.backgroundOptions && (e.backgroundOptions = {
          ...e.backgroundOptions
        }, e.backgroundOptions.gradient && (e.backgroundOptions.gradient = Z(e.backgroundOptions.gradient))), e
      }
      var V = Object.defineProperty,
        tt = (t, e, r) => {
          let i;
          return (i = "symbol" != typeof e ? e + "" : e) in t ? V(t, i, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
          }) : t[i] = r, r
        };
      class te {
        constructor(t) {
          tt(this, "_options"), tt(this, "_container"), tt(this, "_canvas"), tt(this, "_svg"), tt(this, "_qr"), tt(this, "_canvasDrawingPromise"), tt(this, "_svgDrawingPromise"), this._options = t ? K(W(k, t)) : k, this.update()
        }
        static _clearContainer(t) {
          t && (t.innerHTML = "")
        }
        async _getQRStylingElement(t) {
          let e, r;
          if (!this._qr) throw "QR code is empty";
          if ("svg" === t.toLowerCase()) {
            let t, e;
            return this._svg && this._svgDrawingPromise ? (e = this._svg, t = this._svgDrawingPromise) : t = (e = new X(this._options)).drawQR(this._qr), await t, e
          }
          return this._canvas && this._canvasDrawingPromise ? (r = this._canvas, e = this._canvasDrawingPromise) : e = (r = new O(this._options)).drawQR(this._qr), await e, r
        }
        update(t) {
          te._clearContainer(this._container), this._options = t ? K(W(this._options, t)) : this._options, this._options.data && (this._qr = o(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || function(t) {
            switch (!0) {
              case /^[0-9]*$/.test(t):
                return "Numeric";
              case /^[0-9A-Z $%*+\-./:]*$/.test(t):
                return "Alphanumeric";
              default:
                return "Byte"
            }
          }(this._options.data)), this._qr.make(), this._options.type === A ? (this._canvas = new O(this._options), this._canvasDrawingPromise = this._canvas.drawQR(this._qr), this._svgDrawingPromise = void 0, this._svg = void 0) : (this._svg = new X(this._options), this._svgDrawingPromise = this._svg.drawQR(this._qr), this._canvasDrawingPromise = void 0, this._canvas = void 0), this.append(this._container))
        }
        append(t) {
          if (t) {
            if ("function" != typeof t.appendChild) throw "Container should be a single DOM node";
            this._options.type === A ? this._canvas && t.appendChild(this._canvas.getCanvas()) : this._svg && t.appendChild(this._svg.getElement()), this._container = t
          }
        }
        async getRawData(t = "png", e) {
          if (!this._qr) throw "QR code is empty";
          let r = t.toLocaleLowerCase();
          if ("svg" === r) {
            let t = await this._getQRStylingElement(r),
              e = new XMLSerializer().serializeToString(t.getElement());
            return new Blob([`<?xml version="1.0" standalone="no"?>\r
${e}`], {
              type: "image/svg+xml"
            })
          }
          let i = await this._getQRStylingElement(r);
          return new Promise(t => i.getCanvas().toBlob(t, `image/${r}`, e))
        }
        async toDataUrl(t = "png", e) {
          if (!this._qr) throw "QR code is empty";
          let r = t.toLocaleLowerCase();
          return (await this._getQRStylingElement(r)).getCanvas().toDataURL(`image/${r}`, e)
        }
        async download(t) {
          if (!this._qr) throw "QR code is empty";
          let e = "png",
            r = "qr";
          "object" == typeof t && null !== t && (t.name && (r = t.name), t.extension && (e = t.extension));
          let i = e.toLocaleLowerCase();
          if ("svg" === i) {
            let t = await this._getQRStylingElement(i),
              e = new XMLSerializer().serializeToString(t.getElement());
            e = `<?xml version="1.0" standalone="no"?>\r
${e}`, Y(`data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`, `${r}.svg`)
          } else Y((await this._getQRStylingElement(i)).getCanvas().toDataURL(`image/${e}`), `${r}.${e}`)
        }
      }
      let tr = (0, n.forwardRef)(({
        containerProps: t,
        className: e,
        style: r,
        id: o,
        ...a
      }, s) => {
        let l = (0, n.useRef)(null),
          h = (0, n.useRef)();
        return (0, n.useEffect)(() => {
          if (!l.current) return;
          if (h.current) return void h.current.update(a);
          let t = new te(a);
          t.append(l.current), h.current = t
        }, [a]), (0, n.useImperativeHandle)(s, () => ({
          getContainer: () => l.current || null,
          getInstance: () => h.current || null
        }), []), (0, i.jsx)("div", {
          ...t,
          className: e,
          style: r,
          id: o,
          ref: l
        })
      })
    },
    65596: (t, e, r) => {
      "use strict";
      r.d(e, {
        default: () => n.a
      });
      var i = r(42593),
        n = r.n(i)
    }
  }
]);