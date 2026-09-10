(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9877], {
    28356: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = {
        cancelIdleCallback: function() {
          return a
        },
        requestIdleCallback: function() {
          return o
        }
      };
      for (var n in r) Object.defineProperty(t, n, {
        enumerable: !0,
        get: r[n]
      });
      let o = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
          let t = Date.now();
          return self.setTimeout(function() {
            e({
              didTimeout: !1,
              timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - t))
              }
            })
          }, 1)
        },
        a = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
          return clearTimeout(e)
        };
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    29722: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => n
      });
      let n = function() {
        for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)(e = arguments[r]) && (t = function e(t) {
          var r, n, o = "";
          if ("string" == typeof t || "number" == typeof t) o += t;
          else if ("object" == typeof t)
            if (Array.isArray(t)) {
              var a = t.length;
              for (r = 0; r < a; r++) t[r] && (n = e(t[r])) && (o && (o += " "), o += n)
            } else
              for (n in t) t[n] && (o && (o += " "), o += n);
          return o
        }(e)) && (n && (n += " "), n += t);
        return n
      }
    },
    42593: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = {
        default: function() {
          return w
        },
        handleClientScriptLoad: function() {
          return m
        },
        initScriptLoader: function() {
          return g
        }
      };
      for (var o in n) Object.defineProperty(t, o, {
        enumerable: !0,
        get: n[o]
      });
      let a = r(73623),
        i = r(66388),
        s = r(95155),
        c = a._(r(47650)),
        l = i._(r(12115)),
        d = r(75368),
        u = r(3584),
        p = r(28356),
        h = new Map,
        f = new Set,
        y = e => {
          let {
            src: t,
            id: r,
            onLoad: n = () => {},
            onReady: o = null,
            dangerouslySetInnerHTML: a,
            children: i = "",
            strategy: s = "afterInteractive",
            onError: l,
            stylesheets: d
          } = e, p = r || t;
          if (p && f.has(p)) return;
          if (h.has(t)) {
            f.add(p), h.get(t).then(n, l);
            return
          }
          let y = () => {
              o && o(), f.add(p)
            },
            m = document.createElement("script"),
            g = new Promise((e, t) => {
              m.addEventListener("load", function(t) {
                e(), n && n.call(this, t), y()
              }), m.addEventListener("error", function(e) {
                t(e)
              })
            }).catch(function(e) {
              l && l(e)
            });
          a ? (m.innerHTML = a.__html || "", y()) : i ? (m.textContent = "string" == typeof i ? i : Array.isArray(i) ? i.join("") : "", y()) : t && (m.src = t, h.set(t, g)), (0, u.setAttributesFromProps)(m, e), "worker" === s && m.setAttribute("type", "text/partytown"), m.setAttribute("data-nscript", s), d && (e => {
            if (c.default.preinit) return e.forEach(e => {
              c.default.preinit(e, {
                as: "style"
              })
            });
            {
              let t = document.head;
              e.forEach(e => {
                let r = document.createElement("link");
                r.type = "text/css", r.rel = "stylesheet", r.href = e, t.appendChild(r)
              })
            }
          })(d), document.body.appendChild(m)
        };

      function m(e) {
        let {
          strategy: t = "afterInteractive"
        } = e;
        "lazyOnload" === t ? window.addEventListener("load", () => {
          (0, p.requestIdleCallback)(() => y(e))
        }) : y(e)
      }

      function g(e) {
        e.forEach(m), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
          let t = e.id || e.getAttribute("src");
          f.add(t)
        })
      }

      function v(e) {
        let {
          id: t,
          src: r = "",
          onLoad: n = () => {},
          onReady: o = null,
          strategy: a = "afterInteractive",
          onError: i,
          stylesheets: u,
          ...h
        } = e, {
          updateScripts: m,
          scripts: g,
          getIsSsr: v,
          appDir: w,
          nonce: b
        } = (0, l.useContext)(d.HeadManagerContext);
        b = h.nonce || b;
        let x = (0, l.useRef)(!1);
        (0, l.useEffect)(() => {
          let e = t || r;
          x.current || (o && e && f.has(e) && o(), x.current = !0)
        }, [o, t, r]);
        let j = (0, l.useRef)(!1);
        if ((0, l.useEffect)(() => {
            if (!j.current) {
              if ("afterInteractive" === a) y(e);
              else "lazyOnload" === a && ("complete" === document.readyState ? (0, p.requestIdleCallback)(() => y(e)) : window.addEventListener("load", () => {
                (0, p.requestIdleCallback)(() => y(e))
              }));
              j.current = !0
            }
          }, [e, a]), ("beforeInteractive" === a || "worker" === a) && (m ? (g[a] = (g[a] || []).concat([{
            id: t,
            src: r,
            onLoad: n,
            onReady: o,
            onError: i,
            ...h,
            nonce: b
          }]), m(g)) : v && v() ? f.add(t || r) : v && !v() && y({
            ...e,
            nonce: b
          })), w) {
          if (u && u.forEach(e => {
              c.default.preinit(e, {
                as: "style"
              })
            }), "beforeInteractive" === a)
            if (!r) return h.dangerouslySetInnerHTML && (h.children = h.dangerouslySetInnerHTML.__html, delete h.dangerouslySetInnerHTML), (0, s.jsx)("script", {
              nonce: b,
              dangerouslySetInnerHTML: {
                __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([0,{...h,id:t}])})`
              }
            });
            else return c.default.preload(r, h.integrity ? {
              as: "script",
              integrity: h.integrity,
              nonce: b,
              crossOrigin: h.crossOrigin
            } : {
              as: "script",
              nonce: b,
              crossOrigin: h.crossOrigin
            }), (0, s.jsx)("script", {
              nonce: b,
              dangerouslySetInnerHTML: {
                __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([r,{...h,id:t}])})`
              }
            });
          "afterInteractive" === a && r && c.default.preload(r, h.integrity ? {
            as: "script",
            integrity: h.integrity,
            nonce: b,
            crossOrigin: h.crossOrigin
          } : {
            as: "script",
            nonce: b,
            crossOrigin: h.crossOrigin
          })
        }
        return null
      }
      Object.defineProperty(v, "__nextScript", {
        value: !0
      });
      let w = v;
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    65596: (e, t, r) => {
      "use strict";
      r.d(t, {
        default: () => o.a
      });
      var n = r(42593),
        o = r.n(n)
    },
    87133: (e, t, r) => {
      "use strict";
      r.d(t, {
        default: () => c
      });
      var n = r(95155);
      r(12115);
      var o = r(98241),
        a = r.n(o),
        i = r(81382),
        s = r(86891);

      function c({
        data: e
      }) {
        let t = (0, s.kj)(),
          r = (0, s.useLang)(),
          o = e.statsData,
          c = e.tokenData,
          l = {
            "Changes To Privacy Policy": (0, n.jsx)("p", {
              children: "guns.lol may update this Privacy Policy from time to time. Changes take effect when posted on the Service or otherwise communicated to you. Your continued use of the Service after the effective date constitutes acceptance of the updated Policy, so please review it periodically."
            }),
            "Information We Collect": (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("p", {
                children: "We collect only the information needed to operate guns.lol securely and reliably. When you create or manage an account, we receive the details you provide, along with security signals captured at the time of account actions to help prevent abuse. Passwords are stored using industry-standard hashing. We may also record the network address used at signup or login for fraud prevention and account safety. When you update your account email, we may retain previous email addresses for a limited period for account integrity, fraud prevention, or legal compliance purposes. These are not used for communication and are permanently deleted once no longer necessary."
              }), (0, n.jsx)("p", {
                children: "When you are signed in, we maintain a server-side session so you can stay authenticated across requests. That session record contains a session identifier tied to your account and limited context such as the device or browser type, an approximate country derived from your network address, and the network address itself. This information is used to provide secure sign-in, detect unusual activity, and help you manage active sessions."
              }), (0, n.jsx)("p", {
                children: "We run lightweight, cookie-free analytics to understand how public profile pages perform and to attribute clicks on links inside those pages. When a visitor views a page or clicks a link, we log a minimal event that associates the action with the page owner, notes the referring site where available, captures an approximate country, identifies the general device type, and records the time of the event. We do not use cookies for analytics and we do not attempt to identify individual visitors beyond the signals described here."
              }), (0, n.jsx)("p", {
                children: "Website diagnostics and error logging: when the site encounters an error or other unusual behavior, we record a small diagnostic event. This may include the user's account ID if signed in, a session identifier, the network address, and the browser or device type. This information helps us detect and fix problems, improve site stability, and protect against abuse. We do not use these logs for advertising, analytics, or behavioral tracking."
              }), (0, n.jsx)("p", {
                children: "If you upload to the image host, we store information necessary to deliver and manage the file: the uploading account, descriptive and technical details about the file (such as name shown, size, and type) and when it was uploaded. We also record limited upload metadata such as the uploader's network address, browser, and device information."
              }), (0, n.jsx)("p", {
                children: "If you contact us or receive service emails, we process your communications and related metadata so we can respond, provide support, and keep you informed about important changes to your account or to the Service."
              })]
            }),
            Cookies: (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("p", {
                children: "guns.lol does not use cookies for analytics. We may use strictly necessary cookies or similar technologies to keep you signed in, protect your account, prevent abuse, and enable core functionality. These cookies are essential to the functioning of the Service and cannot be turned off in our systems."
              }), (0, n.jsxs)("p", {
                children: ["Our infrastructure is served and protected by Cloudflare, which may set its own cookies or use other identifiers for essential purposes such as load balancing, network routing, security, and DDoS protection. These Cloudflare cookies are technically necessary to maintain availability and protect against malicious traffic. You can review Cloudflare's cookie and privacy practices at", " ", (0, n.jsx)("a", {
                  href: "https://www.cloudflare.com/privacypolicy/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "https://www.cloudflare.com/privacypolicy/"
                }), "."]
              }), (0, n.jsx)("p", {
                children: "You can control non-essential cookies in your browser settings, but disabling essential cookies or Cloudflare security cookies may affect access or performance of the Service."
              })]
            }),
            "Cloudflare Turnstile": (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("p", {
                children: "We use Cloudflare Turnstile on certain forms and account actions to help distinguish human visitors from automated traffic and to prevent spam, fraud, and abuse."
              }), (0, n.jsxs)("p", {
                children: ["In providing Turnstile, Cloudflare may process client-side signals such as your network address, TLS fingerprint, browser user-agent header, sitekey, and the associated website origin. Cloudflare processes these signals as described in its", " ", (0, n.jsx)("a", {
                  href: "https://www.cloudflare.com/turnstile-privacy-policy/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Turnstile Privacy Addendum"
                }), "."]
              })]
            }),
            "How We Use Your Information": (0, n.jsx)(n.Fragment, {
              children: (0, n.jsx)("p", {
                children: "We use the information described above to operate and improve guns.lol; authenticate users and maintain secure sessions; display public profiles and links; measure page views and link performance without cookies; detect and debug website errors; monitor service health and reliability; prevent fraud, spam, and abuse; provide support; process purchases and subscriptions; comply with legal obligations; and enforce our Terms of Service. Diagnostic and telemetry data are used only to maintain and improve performance and security."
              })
            }),
            "Marketing and Communications": (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("p", {
                children: "If you choose to receive updates from us, we may send you occasional emails about new features, product updates, promotions, or other information related to guns.lol. We only send marketing communications where permitted by law or where you have given explicit consent."
              }), (0, n.jsxs)("p", {
                children: ["You can opt out of marketing emails at any time by clicking the unsubscribe link included in every message or by contacting ", (0, n.jsx)("a", {
                  href: "mailto:support@guns.lol",
                  children: "support@guns.lol"
                }), ". Opting out will not affect essential service communications, such as transactional or account-related emails."]
              }), (0, n.jsx)("p", {
                children: "We use reputable email service providers to deliver communications and track limited engagement metrics (such as open rates or link clicks) to understand effectiveness and prevent abuse. This data is processed in accordance with this Privacy Policy and applicable law."
              })]
            }),
            "Legal Bases": (0, n.jsx)(n.Fragment, {
              children: (0, n.jsx)("p", {
                children: "Where required by law, we process personal data on the following bases: to perform a contract with you (providing the Service and paid features); for our legitimate interests (security, abuse prevention, service analytics without cookies, product improvement); with your consent where requested; and to comply with legal obligations and lawful requests."
              })
            }),
            "Data Retention and Deletion": (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("p", {
                children: "We keep personal data only as long as needed for the purposes described in this Policy or as required by law. Analytics events are stored with an automatic lifetime and are removed when they expire. Session records end when they expire or are revoked. Image-hosting records remain while files are active or until their configured lifetime ends."
              }), (0, n.jsx)("p", {
                children: "When you request account deletion and the request is verified, we permanently delete your personal account data and user-generated content from active systems. This process is irreversible. Limited system logs and backup copies may temporarily persist for security, integrity, or legal compliance, after which they are automatically purged. We do not retain deleted user data for business, analytical, or operational use once deletion is complete."
              })]
            }),
            "Disclosure of Your Information": (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("p", {
                children: "We do not sell personal data. We share information with service providers who process it for us to deliver the Service for example, cloud hosting, content delivery and security, payment processing and billing, email delivery, and anti-abuse tooling. These providers are bound by confidentiality and use limitations."
              }), (0, n.jsx)("p", {
                children: "We may disclose information if required by law or legal process; to protect the rights, safety, or integrity of users, the public, or the Service; or in connection with a corporate transaction involving the Service, in which case the successor will be bound by terms no less protective than those stated here."
              })]
            }),
            "Third-Party Links and Services": (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("p", {
                children: "guns.lol may contain links to third-party websites, services, or profiles that are not operated or controlled by us. When you follow a link or interact with content from another platform, any personal information you provide is subject to that third party's own privacy policy, terms, and data practices not ours. We do not monitor, endorse, or assume responsibility for how these external services collect, use, or protect your information."
              }), (0, n.jsx)("p", {
                children: "This includes links or embeds that users choose to display on their guns.lol pages, as well as integrations or external platforms you connect to your account. We recommend reviewing the privacy policies of any third-party websites or services before interacting with them or submitting personal data."
              })]
            }),
            "Payments and Billing": (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("p", {
                children: "Purchases, paid upgrades, and other transactions on guns.lol may be processed by third-party payment and order processing providers. Depending on the product, payment method, or checkout used, these providers may collect and process information such as payment details, billing information, transaction information, and other data necessary to complete your purchase."
              }), (0, n.jsx)("p", {
                children: "guns.lol does not receive or store full payment card details. We may retain limited order and transaction information, such as the purchased product, transaction ID, payment status, and amount, where necessary to fulfill purchases, activate account features, prevent fraud, maintain records, and provide support."
              }), (0, n.jsxs)("p", {
                children: ["These providers process your information under their own privacy and security policies. Our payment and order processing providers may include ", (0, n.jsx)("a", {
                  href: "https://www.tebex.io/legal/privacy",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Tebex"
                }), ", ", (0, n.jsx)("a", {
                  href: "https://www.lemonsqueezy.com/privacy",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Lemon Squeezy"
                }), ", and ", (0, n.jsx)("a", {
                  href: "https://cryptomus.com/privacy",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Cryptomus"
                }), "."]
              })]
            }),
            "International Transfers": (0, n.jsx)(n.Fragment, {
              children: (0, n.jsx)("p", {
                children: "Our infrastructure and service providers may operate in multiple countries. Where required, we implement safeguards for cross-border transfers and apply technical and organizational measures designed to protect your information regardless of where it is processed."
              })
            }),
            Security: (0, n.jsx)(n.Fragment, {
              children: (0, n.jsxs)("p", {
                children: ["We use administrative, technical, and physical safeguards designed to protect personal data, including encrypted transport, access controls, and routine monitoring. No method of transmission or storage is entirely secure, and we cannot guarantee absolute security. If you suspect unauthorized access to your account, contact", " ", (0, n.jsx)("a", {
                  href: "mailto:support@guns.lol",
                  children: "support@guns.lol"
                }), " immediately."]
              })
            }),
            "Data Protection Rights": (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("p", {
                children: "Depending on your location, you may be entitled to certain rights under data protection laws such as the General Data Protection Regulation (GDPR), the United Kingdom's Data Protection Act, or comparable privacy laws in other jurisdictions. guns.lol recognizes these principles globally and allows all users, where applicable, to exercise similar rights regarding their personal data. You have the right to know whether we hold information about you, to request a copy of that data, and to obtain it in a commonly used digital format. If any of the information we hold about you is inaccurate or incomplete, you may request that it be corrected or updated."
              }), (0, n.jsx)("p", {
                children: "You may also request that your data be deleted entirely from our systems. Once your identity has been verified and your request confirmed, we will permanently remove your personal information and user-generated content from active systems, except where limited retention is required to comply with legal obligations, prevent fraud, resolve disputes, or maintain service integrity. If you believe we are processing your information unlawfully or beyond the scope of your consent, you may request that we restrict or suspend certain types of processing, or object entirely where the processing is based on legitimate interest."
              }), (0, n.jsx)("p", {
                children: "Where our use of your information relies on your consent, you may withdraw that consent at any time without affecting the legality of any processing carried out before withdrawal. guns.lol does not engage in automated decision-making or profiling that would have a significant legal or personal effect on you. If you are unsatisfied with how we handle your data, you have the right to file a complaint with your local data protection authority. However, we encourage you to contact us first so we can attempt to resolve the matter directly and transparently."
              }), (0, n.jsxs)("p", {
                children: ["To access, edit, correct, or delete your personal information, you can use your account settings or contact", " ", (0, n.jsx)("a", {
                  href: "mailto:support@guns.lol",
                  children: "support@guns.lol"
                }), ". If you cannot access your account, contact support and we can process a manual deletion request. We will respond to all verified data requests within the time limits required by applicable law and may ask for reasonable proof of identity before taking action to protect your account and data."]
              })]
            }),
            "Children's Information": (0, n.jsx)(n.Fragment, {
              children: (0, n.jsxs)("p", {
                children: ["The Service is not intended for children under 13, or the minimum age required in your jurisdiction if higher. We do not knowingly collect personal information from children below the applicable age. If you believe a child has provided personal information to us, contact", " ", (0, n.jsx)("a", {
                  href: "mailto:support@guns.lol",
                  children: "support@guns.lol"
                }), " and we will take appropriate action."]
              })
            })
          };
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(i.default, {
            data: c,
            statsData: o,
            children: (0, n.jsx)("div", {
              className: a().privacyPolicyWrapper,
              children: (0, n.jsxs)("div", {
                className: a().privacyPolicy,
                children: ["en" !== r && (0, n.jsx)("div", {
                  className: a().notification,
                  children: (0, n.jsx)("h1", {
                    children: t("common.legal.notification_text")
                  })
                }), (0, n.jsxs)("div", {
                  className: a().description,
                  children: [(0, n.jsx)("h1", {
                    children: "Privacy Policy"
                  }), (0, n.jsx)("h3", {
                    children: "This Policy explains what we collect, why we collect it, and how we handle it when you create profiles, share links, and host images on guns.lol. We keep analytics lightweight and do not use cookies for analytics. By using the Service, you consent to the practices described here."
                  })]
                }), (0, n.jsx)("div", {
                  className: a().terms,
                  children: Object.entries(l).map(([e, t]) => (0, n.jsxs)("div", {
                    className: a().term,
                    children: [(0, n.jsx)("h1", {
                      children: e
                    }), (0, n.jsx)("div", {
                      className: a().termsValue,
                      children: t
                    })]
                  }, e))
                }), (0, n.jsxs)("div", {
                  className: a().legalDescription,
                  children: [(0, n.jsxs)("h3", {
                    children: ["Any questions or concerns? Please reach out to ", (0, n.jsx)("a", {
                      href: "mailto:support@guns.lol",
                      children: "support@guns.lol"
                    }), "."]
                  }), (0, n.jsx)("span", {
                    className: a().lastUpdate,
                    children: "Last updated: 2026/08/15"
                  })]
                })]
              })
            })
          })
        })
      }
    },
    96043: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 87133))
    }
  },
  e => {
    e.O(0, [379, 8604, 1899, 4236, 6609, 4293, 5810, 6891, 5886, 9182, 8481, 3434, 1378, 1382, 8441, 3794, 7358], () => e(e.s = 96043)), _N_E = e.O()
  }
]);