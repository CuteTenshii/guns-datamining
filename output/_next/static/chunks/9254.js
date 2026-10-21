"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9254], {
    59254: (t, e, s) => {
      s.r(e), s.d(e, {
        BatManager: () => a
      });
      class a {
        constructor(t) {
          this.host = t, this.bats = [], this.running = !0
        }
        makeBats(t) {
          for (let e = 0; e < t; e++) {
            let t = document.createElement("div"),
              e = document.createElement("img");
            e.src = "/events/halloween-2026/bat.gif", e.alt = "", e.draggable = !1, t.style.position = "absolute", t.style.left = "0", t.style.top = "0", t.style.opacity = "0", t.appendChild(e), this.host.appendChild(t);
            let s = window.innerWidth * Math.random(),
              a = window.innerHeight * Math.random();
            t.style.transform = `translate(${s}px, ${a}px)`;
            let i = {
                element: t,
                fly: () => {}
              },
              n = (t, e) => Math.max(0, Math.min(t + (Math.random() - .5) * 400, e - 48));
            i.fly = () => {
              if (!this.running) return;
              let r = n(s, window.innerWidth),
                h = n(a, window.innerHeight),
                l = Math.max(500, 5 * Math.hypot(s - r, a - h));
              t.style.transition = `transform ${l/1e3}s linear, opacity 1s linear`, t.style.opacity = "1", t.style.transform = `translate(${r}px, ${h}px)`, e.style.transform = s > r ? "" : "scaleX(-1)", s = r, a = h, i.timer = setTimeout(i.fly, l)
            }, this.bats.push(i), i.timer = setTimeout(i.fly, 3e3 * Math.random())
          }
        }
        pause() {
          this.running = !1, this.host.style.display = "none", this.bats.forEach(t => clearTimeout(t.timer))
        }
        resume() {
          this.running || (this.running = !0, this.host.style.display = "", this.bats.forEach(t => t.fly()))
        }
        destroy() {
          this.pause(), this.bats.forEach(t => t.element.remove()), this.bats = [], this.host.style.display = ""
        }
      }
    }
  }
]);