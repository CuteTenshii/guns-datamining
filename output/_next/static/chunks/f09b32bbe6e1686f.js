(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 30332, e => {
  "use strict";
  e.i(39057);
  var t = e.i(48277),
    a = e.i(33544),
    r = e.i(50250),
    n = e.i(32872),
    s = e.i(30668),
    o = e.i(60592),
    i = e.i(54976),
    l = e.i(16506),
    d = e.i(33108),
    u = e.i(91850),
    c = e.i(60525),
    f = e.i(60445),
    m = e.i(17435);

  function h({
    continueFunction: e,
    customBadgeData: a,
    setCustomBadgeData: r
  }) {
    let n = (0, m.useT)();

    function s(e) {
      let t = 7.99 * e ** .95,
        a = 7.99 * e,
        r = (1 - t / a) * 100;
      return {
        totalPrice: parseFloat(t.toFixed(2)),
        rawPrice: parseFloat(a.toFixed(2)),
        discountPercent: parseFloat(r.toFixed(0))
      }
    }
    let o = a.amount > 1 ? (0, t.jsxs)(t.Fragment, {
      children: [s(a.amount).totalPrice, "€ ", (0, t.jsxs)("s", {
        children: [s(a.amount).rawPrice, "€"]
      })]
    }) : (0, t.jsxs)(t.Fragment, {
      children: [s(a.amount).totalPrice, "€"]
    });
    return (0, t.jsxs)("div", {
      className: u.default.CustomBadgePurchaseModal,
      children: [(0, t.jsx)(c.default, {
        featureName: n("modals.custom_badge.title_gift"),
        value: a.amount,
        min: 1,
        max: 500,
        onChange: e => r({
          ...a,
          amount: e
        }),
        icon: f.default.shoppingBag
      }), (0, t.jsxs)("div", {
        className: u.default.CustomBadgePurchaseModalDiscount,
        children: [(0, t.jsx)("h1", {
          children: n("modals.custom_badge.information_text_gift")
        }), (0, t.jsx)("h3", {
          children: n("modals.custom_badge.description_gift", {
            percentage: s(a.amount).discountPercent,
            amount: a.amount
          })
        })]
      }), (0, t.jsx)("span", {
        className: u.default.CustomBadgePurchaseModalButton,
        onClick: t => {
          r({
            ...a,
            totalPrice: s(a.amount).totalPrice
          }), e(t)
        },
        children: n("modals.custom_badge.purchase_text", {
          price: o
        })
      })]
    })
  }
  var p = e.i(30817),
    g = e.i(74654);

  function v({
    defaultSelection: e,
    redirectLogin: u,
    showGiftContainer: c,
    purchaseSource: f = "unknown"
  }) {
    let v = (0, m.useT)(),
      b = (0, m.useLocaleHref)(),
      w = {
        imagehost: v("modals.gift.gift_imagehost"),
        premiumLifetime: v("modals.gift.gift_premium"),
        verified: v("modals.gift.gift_verified_badge"),
        custombadge: v("modals.gift.gift_custom_badge")
      },
      [y, x] = (0, s.useState)(!1),
      [N, j] = (0, s.useState)(""),
      [E, k] = (0, s.useState)(""),
      [C, _] = (0, s.useState)({
        displayName: "",
        username: "",
        avatar: "",
        found: !1
      }),
      [T, S] = (0, s.useState)(e),
      [B, M] = (0, s.useState)(!1),
      [P, L] = (0, s.useState)(!1),
      [$, D] = (0, s.useState)({
        amount: 1,
        totalPrice: 0
      }),
      R = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 12q-1.65 0-2.825-1.175T7 8t1.175-2.825T11 4t2.825 1.175T15 8t-1.175 2.825T11 12m11.1 11.5l-3.2-3.2q-.525.3-1.125.5T16.5 21q-1.875 0-3.187-1.312T12 16.5t1.313-3.187T16.5 12t3.188 1.313T21 16.5q0 .675-.2 1.275t-.5 1.125l3.2 3.2zM16.5 19q1.05 0 1.775-.725T19 16.5t-.725-1.775T16.5 14t-1.775.725T14 16.5t.725 1.775T16.5 19m-5.475-6q-1.05 1.55-1.05 3.5t1.05 3.5H3v-2.775q0-.85.425-1.575t1.175-1.1q1.275-.65 2.875-1.1t3.55-.45"></path></svg>',
      z = async (e, t = !1) => {
        if (!N) return void i.toast.error(v("modals.gift.error_gift_username"));
        if (!T) return void i.toast.error(v("modals.gift.error_gift_product"));
        let a = await W(e, !1);
        (C.found || a) && (t ? L(!0) : M(!0))
      }, W = async (e, t = !0) => {
        try {
          e.target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeDasharray="15" strokeDashoffset="15" strokeLinecap="round" strokeWidth="2" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"></animate><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></svg>';
          let a = await fetch("https://guns.lol/api/gift/user", {
              method: "POST",
              body: JSON.stringify({
                username: N
              })
            }),
            r = await a.json();
          if (!a.ok) return e.target.innerHTML = t ? R : v("modals.gift.continue_button"), i.toast.error(r.error), null;
          {
            let a = {
              displayName: r.display_name,
              username: N,
              avatar: r.avatar,
              found: !0
            };
            return _(a), e.target.innerHTML = t ? R : v("modals.gift.continue_button"), a
          }
        } finally {
          e.target.innerHTML = t ? R : v("modals.gift.continue_button")
        }
      }, I = B || P ? P && !B ? (0, t.jsx)(h, {
        continueFunction: z,
        customBadgeData: $,
        setCustomBadgeData: D
      }) : (0, t.jsx)(d.default, {
        type: T,
        gift: !0,
        giftMessage: E,
        username: N,
        customBadgeData: "custombadge" === T ? $ : void 0,
        purchaseSource: f
      }) : (0, t.jsxs)("div", {
        children: [(0, t.jsxs)("h1", {
          className: r.default.giftBanner,
          children: [a.default.gift, (0, t.jsxs)("div", {
            className: r.default.giftBannerContent,
            children: [" ", v("modals.gift.gift_badge_text", {
              exclusive: (0, t.jsx)("span", {
                children: "exclusive"
              })
            })]
          })]
        }), (0, t.jsxs)("div", {
          className: r.default.giftModal,
          children: [(0, t.jsx)("img", {
            className: r.default.giftImage,
            src: "https://assets.guns.lol/present_asset.png"
          }), (0, t.jsxs)("div", {
            className: r.default.giftInformation,
            children: [(0, t.jsx)("div", {
              className: r.default.usernameSearch,
              children: C.found ? (0, t.jsxs)("div", {
                className: r.default.user,
                children: [(0, t.jsx)("img", {
                  src: C.avatar,
                  alt: ""
                }), (0, t.jsxs)("div", {
                  className: r.default.userDescription,
                  children: [(0, t.jsx)("h1", {
                    children: "" !== C.displayName ? C.displayName : C.username
                  }), (0, t.jsxs)(l.default, {
                    href: `/${C.username}`,
                    target: "_blank",
                    children: ["guns.lol/", C.username]
                  })]
                }), (0, t.jsxs)("span", {
                  className: r.default.removeUser,
                  onClick: () => {
                    _({
                      displayName: "",
                      username: "",
                      avatar: "",
                      found: !1
                    }), j("")
                  },
                  children: [a.default.removeUser, " ", v("modals.gift.change_user")]
                })]
              }) : (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(n.default, {
                  featureName: v("modals.gift.gift_inputs.send_to"),
                  onChangeFunction: e => {
                    j(e.target.value)
                  },
                  value: N,
                  placeholder: "Username",
                  icon: a.default.user
                }), (0, t.jsx)("span", {
                  className: r.default.searchButton,
                  onClick: W,
                  children: a.default.usernameSearch
                })]
              })
            }), (0, t.jsx)(o.default, {
              featureName: v("modals.gift.gift_inputs.gift_message"),
              placeholder: v("modals.gift.gift_inputs.gift_message_placeholder"),
              onChangeFunction: e => {
                k(e.target.value)
              },
              value: E
            }), (0, t.jsxs)("div", {
              className: r.default.yourGift,
              children: [(0, t.jsx)("h1", {
                className: r.default.yourGiftText,
                children: v("modals.gift.your_gift")
              }), (0, t.jsxs)("div", {
                className: r.default.giftTypes,
                children: [(0, t.jsxs)("div", {
                  className: `${r.default.giftContainer} ${"verified"===T&&r.default.selectedGift}`,
                  onClick: () => S("verified"),
                  children: [(0, t.jsxs)("div", {
                    className: r.default.giftDescription,
                    children: [(0, t.jsxs)("h1", {
                      children: ["guns.lol ", v("common.pricing.verified.name")]
                    }), (0, t.jsx)("h3", {
                      children: v("modals.gift.gift_verified_badge")
                    })]
                  }), (0, t.jsx)("span", {
                    className: r.default.priceText,
                    children: (0, t.jsx)("strong", {
                      children: "14,99€"
                    })
                  })]
                }), (0, t.jsxs)("div", {
                  className: `${r.default.giftContainer} ${"custombadge"===T&&r.default.selectedGift}`,
                  onClick: () => S("custombadge"),
                  children: [(0, t.jsxs)("div", {
                    className: r.default.giftDescription,
                    children: [(0, t.jsxs)("h1", {
                      children: ["guns.lol ", v("common.pricing.custom_badge.name")]
                    }), (0, t.jsx)("h3", {
                      children: v("modals.gift.gift_custom_badge")
                    })]
                  }), (0, t.jsx)("span", {
                    className: r.default.priceText,
                    children: (0, t.jsx)("strong", {
                      children: "8,99€"
                    })
                  })]
                }), (0, t.jsxs)("div", {
                  className: `${r.default.giftContainer} ${"premiumLifetime"===T&&r.default.selectedGift}`,
                  onClick: () => S("premiumLifetime"),
                  children: [(0, t.jsxs)("div", {
                    className: r.default.giftDescription,
                    children: [(0, t.jsxs)("h1", {
                      children: ["guns.lol ", v("common.pricing.premium_plan.name"), " ", (0, t.jsx)("span", {
                        className: r.default.saveText,
                        children: v("modals.gift.save_premium")
                      })]
                    }), (0, t.jsx)("h3", {
                      children: v("modals.gift.gift_premium")
                    })]
                  }), (0, t.jsx)("span", {
                    className: r.default.priceText,
                    children: (0, t.jsx)("strong", {
                      children: "7,19€"
                    })
                  })]
                }), (0, t.jsxs)("div", {
                  className: `${r.default.giftContainer} ${"imagehost"===T&&r.default.selectedGift}`,
                  onClick: () => S("imagehost"),
                  children: [(0, t.jsxs)("div", {
                    className: r.default.giftDescription,
                    children: [(0, t.jsxs)("h1", {
                      children: ["guns.lol ", v("common.pricing.imagehost_plan.name")]
                    }), (0, t.jsx)("h3", {
                      children: v("modals.gift.gift_imagehost")
                    })]
                  }), (0, t.jsx)("span", {
                    className: r.default.priceText,
                    children: (0, t.jsx)("strong", {
                      children: "4,99€"
                    })
                  })]
                })]
              })]
            }), (0, t.jsx)("div", {
              className: r.default.buttonWrapper,
              children: (0, t.jsx)("span", {
                className: r.default.continueButton,
                onClick: e => z(e, "custombadge" === T),
                children: v("modals.gift.continue_button")
              })
            })]
          })]
        })]
      });
    return (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(g.default, {
        opened: y,
        onClose: () => {
          x(!1), setTimeout(() => {
            M(!1), L(!1), D({
              amount: 1,
              totalPrice: 0
            })
          }, 500)
        },
        title: w[T],
        centered: !0,
        size: "auto",
        children: I
      }), c ? I : (0, t.jsx)(p.default, {
        content: w[e],
        offset: 15,
        children: (0, t.jsx)("span", {
          className: r.default.giftButton,
          onClick: () => {
            u ? location.href = b("/login?returnUri=/pricing") : (x(!0), S(e))
          },
          children: a.default.gift
        })
      })]
    })
  }
  e.s(["default", () => v], 30332)
}, 60592, e => {
  "use strict";
  var t = e.i(48277),
    a = e.i(50250);

  function r({
    featureName: e,
    onChangeFunction: r,
    value: n,
    placeholder: s,
    ...o
  }) {
    return (0, t.jsxs)("div", {
      className: a.default.inputContainerWrapper,
      "data-dashboard-feature-label": "string" == typeof e ? e : void 0,
      children: [(0, t.jsx)("h1", {
        className: a.default.featureName,
        children: e
      }), (0, t.jsx)("div", {
        className: a.default.inputWrapperDiv,
        children: (0, t.jsx)("textarea", {
          style: {
            paddingLeft: "12px",
            transition: "border 0.25s",
            resize: "vertical"
          },
          spellCheck: "false",
          type: "text",
          value: n,
          placeholder: s,
          className: a.default.inputWrapperInput,
          onChange: r,
          ...o
        })
      })]
    })
  }
  e.s(["default", () => r])
}, 32872, e => {
  "use strict";
  var t = e.i(48277),
    a = e.i(30668),
    r = e.i(50250),
    n = e.i(33544);

  function s({
    featureName: e,
    onChangeFunction: s,
    value: o,
    placeholder: i,
    icon: l,
    prefix: d,
    prefixLength: u,
    viewPassword: c,
    onKeyPress: f,
    isImageUrl: m,
    type: h = "text",
    ...p
  }) {
    let [g, v] = (0, a.useState)(!!c);
    return (0, a.useEffect)(() => {
      v(!!c)
    }, [c]), (0, t.jsxs)("div", {
      className: r.default.inputContainerWrapper,
      "data-dashboard-feature-label": "string" == typeof e ? e : void 0,
      children: [e && (0, t.jsx)("h1", {
        className: r.default.featureName,
        children: e
      }), (0, t.jsxs)("div", {
        className: `${r.default.inputWrapperDiv} ${d&&r.default.inputWrapperURL}`,
        children: [(0, t.jsxs)("span", {
          className: r.default.inputWrapperSpan,
          style: {
            position: d ? "absolute" : "static"
          },
          children: [m ? (0, t.jsx)("img", {
            src: l,
            alt: "icon",
            className: r.default.inputWrapperIconImage
          }) : l, d && (0, t.jsx)("h1", {
            children: d
          })]
        }), c && (0, t.jsx)("p", {
          onClick: () => {
            v(!g)
          },
          children: g ? n.default.hidePassword : n.default.views
        }), (0, t.jsx)("input", {
          autoCorrect: "false",
          type: c ? g ? "password" : "text" : h,
          onKeyDown: f,
          value: o,
          style: {
            paddingLeft: d ? u : "",
            paddingRight: c ? 47 : ""
          },
          placeholder: i,
          className: r.default.inputWrapperInput,
          onChange: s,
          ...p
        })]
      })]
    })
  }
  e.s(["default", () => s])
}, 19168, e => {
  e.v({
    body: "modalWrapper-module__XCOtVG__body",
    closeButton: "modalWrapper-module__XCOtVG__closeButton",
    header: "modalWrapper-module__XCOtVG__header",
    modal: "modalWrapper-module__XCOtVG__modal",
    "modal-scale-in": "modalWrapper-module__XCOtVG__modal-scale-in",
    "modal-scale-out": "modalWrapper-module__XCOtVG__modal-scale-out",
    overlay: "modalWrapper-module__XCOtVG__overlay",
    "overlay-fade-in": "modalWrapper-module__XCOtVG__overlay-fade-in",
    "overlay-fade-out": "modalWrapper-module__XCOtVG__overlay-fade-out",
    title: "modalWrapper-module__XCOtVG__title"
  })
}, 74654, e => {
  "use strict";
  var t = e.i(48277),
    a = e.i(30668),
    r = e.i(69941),
    n = e.i(19168);

  function s({
    opened: e,
    onClose: s,
    onOverlayClose: o,
    onCloseButtonClick: i,
    onEscapeClose: l,
    title: d,
    centered: u = !0,
    size: c = "auto",
    closeOnOverlayClick: f = !0,
    withCloseButton: m = !0,
    centerTitle: h = !1,
    className: p,
    bodyClassName: g,
    children: v
  }) {
    let [b, w] = (0, a.useState)(e), [y, x] = (0, a.useState)(!1), [N, j] = (0, a.useState)(null), E = (0, a.useRef)(null), k = (0, a.useRef)(null), C = (0, a.useRef)(null), _ = (0, a.useRef)(!1), T = e => {
      if (!e) return !1;
      let t = window.getComputedStyle(e).overflowY;
      return e.scrollHeight > e.clientHeight + 1 && ("auto" === t || "scroll" === t)
    }, S = e => {
      let t = k.current;
      if (!t || !e) return null;
      let a = e;
      for (; a && t.contains(a);) {
        if (T(a)) return a;
        a = a.parentElement
      }
      return null
    }, B = (e, t) => t < 0 ? e.scrollTop > 0 : !(t > 0) || e.scrollTop + e.clientHeight < e.scrollHeight;
    if ((0, a.useEffect)(() => {
        if (e) {
          w(!0), x(!1);
          return
        }
        return x(!0), E.current = setTimeout(() => {
          w(!1), x(!1)
        }, 180), () => {
          E.current && (clearTimeout(E.current), E.current = null)
        }
      }, [e]), (0, a.useEffect)(() => {
        if ("undefined" == typeof document) return;
        let e = document.createElement("div");
        return document.body.appendChild(e), j(e), () => {
          document.body.removeChild(e), j(null)
        }
      }, []), (0, a.useEffect)(() => {
        if (!b) return;
        let e = e => {
            "Escape" === e.key ? l ? l() : s() : ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(e.key) && !k.current?.contains(e.target) && e.preventDefault()
          },
          t = e => {
            let t = k.current;
            if (!t) return void e.preventDefault();
            let a = e.target;
            if (!(a && t.contains(a))) return void e.preventDefault();
            if (e instanceof WheelEvent) {
              let t = S(a);
              t && B(t, e.deltaY) || e.preventDefault();
              return
            }
            if (e instanceof TouchEvent) {
              let t = e.touches[0]?.clientY ?? null,
                r = C.current;
              C.current = t;
              let n = S(a);
              n && B(n, null !== r && null !== t ? r - t : 0) || e.preventDefault()
            }
          },
          a = {
            passive: !1
          };
        return window.addEventListener("keydown", e, {
          passive: !1
        }), window.addEventListener("wheel", t, a), window.addEventListener("touchmove", t, a), () => {
          window.removeEventListener("keydown", e), window.removeEventListener("wheel", t, a), window.removeEventListener("touchmove", t, a)
        }
      }, [B, S, s, l, b]), (0, a.useEffect)(() => {
        if (!b) return;
        let e = e => {
          if (!k.current?.contains(e.target)) {
            C.current = null;
            return
          }
          C.current = e.touches[0]?.clientY ?? null
        };
        return window.addEventListener("touchstart", e, {
          passive: !0
        }), () => window.removeEventListener("touchstart", e)
      }, [b]), !b || !N) return null;
    let M = "number" == typeof c ? `${c}px` : c,
      P = {};
    M && "auto" !== M ? P.maxWidth = M : (P.width = "fit-content", P.maxWidth = "clamp(100%, 100%, 850px)", P.boxSizing = "border-box");
    let L = y ? "closing" : "open",
      $ = (0, t.jsx)("div", {
        className: n.default.overlay,
        "data-centered": u,
        "data-state": L,
        onMouseDown: e => {
          _.current = e.target === e.currentTarget
        },
        onClick: e => {
          let t = e.target === e.currentTarget,
            a = f && t && _.current;
          _.current = !1, a && (o ? o() : s())
        },
        children: (0, t.jsxs)("div", {
          className: `${n.default.modal} ${p??""}`,
          "data-state": L,
          style: P,
          ref: k,
          onClick: e => e.stopPropagation(),
          children: [(d || m) && (0, t.jsxs)("div", {
            className: n.default.header,
            children: [d && (0, t.jsx)("h2", {
              className: n.default.title,
              style: h ? {
                textAlign: "center",
                width: "100%"
              } : {},
              children: d
            }), m && (0, t.jsx)("button", {
              type: "button",
              className: n.default.closeButton,
              onClick: i ?? s,
              children: (0, t.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                viewBox: "7.43 7.45 9.15 9.15",
                children: (0, t.jsx)("path", {
                  fill: "currentColor",
                  d: "m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z"
                })
              })
            })]
          }), (0, t.jsx)("div", {
            className: `${n.default.body} ${g??""}`,
            children: v
          })]
        })
      });
    return (0, r.createPortal)($, N)
  }
  e.s(["default", () => s])
}, 54976, e => {
  "use strict";
  var t = e.i(30668),
    a = e.i(69941),
    r = Array(12).fill(0),
    n = ({
      visible: e,
      className: a
    }) => t.default.createElement("div", {
      className: ["sonner-loading-wrapper", a].filter(Boolean).join(" "),
      "data-visible": e
    }, t.default.createElement("div", {
      className: "sonner-spinner"
    }, r.map((e, a) => t.default.createElement("div", {
      className: "sonner-loading-bar",
      key: `spinner-bar-${a}`
    })))),
    s = t.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20"
    }, t.default.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd"
    })),
    o = t.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20"
    }, t.default.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd"
    })),
    i = t.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20"
    }, t.default.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd"
    })),
    l = t.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20"
    }, t.default.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd"
    })),
    d = t.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, t.default.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }), t.default.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    })),
    u = 1,
    c = new class {
      constructor() {
        this.subscribe = e => (this.subscribers.push(e), () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1)
        }), this.publish = e => {
          this.subscribers.forEach(t => t(e))
        }, this.addToast = e => {
          this.publish(e), this.toasts = [...this.toasts, e]
        }, this.create = e => {
          var t;
          let {
            message: a,
            ...r
          } = e, n = "number" == typeof(null == e ? void 0 : e.id) || (null == (t = e.id) ? void 0 : t.length) > 0 ? e.id : u++, s = this.toasts.find(e => e.id === n), o = void 0 === e.dismissible || e.dismissible;
          return this.dismissedToasts.has(n) && this.dismissedToasts.delete(n), s ? this.toasts = this.toasts.map(t => t.id === n ? (this.publish({
            ...t,
            ...e,
            id: n,
            title: a
          }), {
            ...t,
            ...e,
            id: n,
            dismissible: o,
            title: a
          }) : t) : this.addToast({
            title: a,
            ...r,
            dismissible: o,
            id: n
          }), n
        }, this.dismiss = e => (this.dismissedToasts.add(e), e || this.toasts.forEach(e => {
          this.subscribers.forEach(t => t({
            id: e.id,
            dismiss: !0
          }))
        }), this.subscribers.forEach(t => t({
          id: e,
          dismiss: !0
        })), e), this.message = (e, t) => this.create({
          ...t,
          message: e
        }), this.error = (e, t) => this.create({
          ...t,
          message: e,
          type: "error"
        }), this.success = (e, t) => this.create({
          ...t,
          type: "success",
          message: e
        }), this.info = (e, t) => this.create({
          ...t,
          type: "info",
          message: e
        }), this.warning = (e, t) => this.create({
          ...t,
          type: "warning",
          message: e
        }), this.loading = (e, t) => this.create({
          ...t,
          type: "loading",
          message: e
        }), this.promise = (e, a) => {
          let r;
          if (!a) return;
          void 0 !== a.loading && (r = this.create({
            ...a,
            promise: e,
            type: "loading",
            message: a.loading,
            description: "function" != typeof a.description ? a.description : void 0
          }));
          let n = e instanceof Promise ? e : e(),
            s = void 0 !== r,
            o, i = n.then(async e => {
              if (o = ["resolve", e], t.default.isValidElement(e)) s = !1, this.create({
                id: r,
                type: "default",
                message: e
              });
              else if (f(e) && !e.ok) {
                s = !1;
                let t = "function" == typeof a.error ? await a.error(`HTTP error! status: ${e.status}`) : a.error,
                  n = "function" == typeof a.description ? await a.description(`HTTP error! status: ${e.status}`) : a.description;
                this.create({
                  id: r,
                  type: "error",
                  message: t,
                  description: n
                })
              } else if (void 0 !== a.success) {
                s = !1;
                let t = "function" == typeof a.success ? await a.success(e) : a.success,
                  n = "function" == typeof a.description ? await a.description(e) : a.description;
                this.create({
                  id: r,
                  type: "success",
                  message: t,
                  description: n
                })
              }
            }).catch(async e => {
              if (o = ["reject", e], void 0 !== a.error) {
                s = !1;
                let t = "function" == typeof a.error ? await a.error(e) : a.error,
                  n = "function" == typeof a.description ? await a.description(e) : a.description;
                this.create({
                  id: r,
                  type: "error",
                  message: t,
                  description: n
                })
              }
            }).finally(() => {
              var e;
              s && (this.dismiss(r), r = void 0), null == (e = a.finally) || e.call(a)
            }),
            l = () => new Promise((e, t) => i.then(() => "reject" === o[0] ? t(o[1]) : e(o[1])).catch(t));
          return "string" != typeof r && "number" != typeof r ? {
            unwrap: l
          } : Object.assign(r, {
            unwrap: l
          })
        }, this.custom = (e, t) => {
          let a = (null == t ? void 0 : t.id) || u++;
          return this.create({
            jsx: e(a),
            id: a,
            ...t
          }), a
        }, this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = new Set
      }
    },
    f = e => e && "object" == typeof e && "ok" in e && "boolean" == typeof e.ok && "status" in e && "number" == typeof e.status,
    m = Object.assign((e, t) => {
      let a = (null == t ? void 0 : t.id) || u++;
      return c.addToast({
        title: e,
        ...t,
        id: a
      }), a
    }, {
      success: c.success,
      info: c.info,
      warning: c.warning,
      error: c.error,
      custom: c.custom,
      message: c.message,
      promise: c.promise,
      dismiss: c.dismiss,
      loading: c.loading
    }, {
      getHistory: () => c.toasts,
      getToasts: () => c.getActiveToasts()
    });

  function h(e) {
    return void 0 !== e.label
  }

  function p(...e) {
    return e.filter(Boolean).join(" ")
  }! function(e, {
    insertAt: t
  } = {}) {
    if (!e || "undefined" == typeof document) return;
    let a = document.head || document.getElementsByTagName("head")[0],
      r = document.createElement("style");
    r.type = "text/css", "top" === t && a.firstChild ? a.insertBefore(r, a.firstChild) : a.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
  }(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
  var g = e => {
    var a, r, u, c, f, m, g, v, b, w, y, x, N, j;
    let {
      invert: E,
      toast: k,
      unstyled: C,
      interacting: _,
      setHeights: T,
      visibleToasts: S,
      heights: B,
      index: M,
      toasts: P,
      expanded: L,
      removeToast: $,
      defaultRichColors: D,
      closeButton: R,
      style: z,
      cancelButtonStyle: W,
      actionButtonStyle: I,
      className: H = "",
      descriptionClassName: Y = "",
      duration: A,
      position: O,
      gap: V,
      loadingIcon: F,
      expandByDefault: G,
      classNames: U,
      icons: q,
      closeButtonAriaLabel: X = "Close toast",
      pauseWhenPageIsHidden: K
    } = e, [J, Q] = t.default.useState(null), [Z, ee] = t.default.useState(null), [et, ea] = t.default.useState(!1), [er, en] = t.default.useState(!1), [es, eo] = t.default.useState(!1), [ei, el] = t.default.useState(!1), [ed, eu] = t.default.useState(!1), [ec, ef] = t.default.useState(0), [em, eh] = t.default.useState(0), ep = t.default.useRef(k.duration || A || 4e3), eg = t.default.useRef(null), ev = t.default.useRef(null), eb = 0 === M, ew = M + 1 <= S, ey = k.type, ex = !1 !== k.dismissible, eN = k.className || "", ej = k.descriptionClassName || "", eE = t.default.useMemo(() => B.findIndex(e => e.toastId === k.id) || 0, [B, k.id]), ek = t.default.useMemo(() => {
      var e;
      return null != (e = k.closeButton) ? e : R
    }, [k.closeButton, R]), eC = t.default.useMemo(() => k.duration || A || 4e3, [k.duration, A]), e_ = t.default.useRef(0), eT = t.default.useRef(0), eS = t.default.useRef(0), eB = t.default.useRef(null), [eM, eP] = O.split("-"), eL = t.default.useMemo(() => B.reduce((e, t, a) => a >= eE ? e : e + t.height, 0), [B, eE]), e$ = (() => {
      let [e, a] = t.default.useState(document.hidden);
      return t.default.useEffect(() => {
        let e = () => {
          a(document.hidden)
        };
        return document.addEventListener("visibilitychange", e), () => window.removeEventListener("visibilitychange", e)
      }, []), e
    })(), eD = k.invert || E, eR = "loading" === ey;
    eT.current = t.default.useMemo(() => eE * V + eL, [eE, eL]), t.default.useEffect(() => {
      ep.current = eC
    }, [eC]), t.default.useEffect(() => {
      ea(!0)
    }, []), t.default.useEffect(() => {
      let e = ev.current;
      if (e) {
        let t = e.getBoundingClientRect().height;
        return eh(t), T(e => [{
          toastId: k.id,
          height: t,
          position: k.position
        }, ...e]), () => T(e => e.filter(e => e.toastId !== k.id))
      }
    }, [T, k.id]), t.default.useLayoutEffect(() => {
      if (!et) return;
      let e = ev.current,
        t = e.style.height;
      e.style.height = "auto";
      let a = e.getBoundingClientRect().height;
      e.style.height = t, eh(a), T(e => e.find(e => e.toastId === k.id) ? e.map(e => e.toastId === k.id ? {
        ...e,
        height: a
      } : e) : [{
        toastId: k.id,
        height: a,
        position: k.position
      }, ...e])
    }, [et, k.title, k.description, T, k.id]);
    let ez = t.default.useCallback(() => {
      en(!0), ef(eT.current), T(e => e.filter(e => e.toastId !== k.id)), setTimeout(() => {
        $(k)
      }, 200)
    }, [k, $, T, eT]);
    return t.default.useEffect(() => {
      let e;
      if ((!k.promise || "loading" !== ey) && k.duration !== 1 / 0 && "loading" !== k.type) return L || _ || K && e$ ? (() => {
        if (eS.current < e_.current) {
          let e = new Date().getTime() - e_.current;
          ep.current = ep.current - e
        }
        eS.current = new Date().getTime()
      })() : ep.current !== 1 / 0 && (e_.current = new Date().getTime(), e = setTimeout(() => {
        var e;
        null == (e = k.onAutoClose) || e.call(k, k), ez()
      }, ep.current)), () => clearTimeout(e)
    }, [L, _, k, ey, K, e$, ez]), t.default.useEffect(() => {
      k.delete && ez()
    }, [ez, k.delete]), t.default.createElement("li", {
      tabIndex: 0,
      ref: ev,
      className: p(H, eN, null == U ? void 0 : U.toast, null == (a = null == k ? void 0 : k.classNames) ? void 0 : a.toast, null == U ? void 0 : U.default, null == U ? void 0 : U[ey], null == (r = null == k ? void 0 : k.classNames) ? void 0 : r[ey]),
      "data-sonner-toast": "",
      "data-rich-colors": null != (u = k.richColors) ? u : D,
      "data-styled": !(k.jsx || k.unstyled || C),
      "data-mounted": et,
      "data-promise": !!k.promise,
      "data-swiped": ed,
      "data-removed": er,
      "data-visible": ew,
      "data-y-position": eM,
      "data-x-position": eP,
      "data-index": M,
      "data-front": eb,
      "data-swiping": es,
      "data-dismissible": ex,
      "data-type": ey,
      "data-invert": eD,
      "data-swipe-out": ei,
      "data-swipe-direction": Z,
      "data-expanded": !!(L || G && et),
      style: {
        "--index": M,
        "--toasts-before": M,
        "--z-index": P.length - M,
        "--offset": `${er?ec:eT.current}px`,
        "--initial-height": G ? "auto" : `${em}px`,
        ...z,
        ...k.style
      },
      onDragEnd: () => {
        eo(!1), Q(null), eB.current = null
      },
      onPointerDown: e => {
        eR || !ex || (eg.current = new Date, ef(eT.current), e.target.setPointerCapture(e.pointerId), "BUTTON" !== e.target.tagName && (eo(!0), eB.current = {
          x: e.clientX,
          y: e.clientY
        }))
      },
      onPointerUp: () => {
        var e, t, a, r;
        if (ei || !ex) return;
        eB.current = null;
        let n = Number((null == (e = ev.current) ? void 0 : e.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
          s = Number((null == (t = ev.current) ? void 0 : t.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
          o = new Date().getTime() - (null == (a = eg.current) ? void 0 : a.getTime()),
          i = "x" === J ? n : s,
          l = Math.abs(i) / o;
        if (Math.abs(i) >= 20 || l > .11) {
          ef(eT.current), null == (r = k.onDismiss) || r.call(k, k), ee("x" === J ? n > 0 ? "right" : "left" : s > 0 ? "down" : "up"), ez(), el(!0), eu(!1);
          return
        }
        eo(!1), Q(null)
      },
      onPointerMove: t => {
        var a, r, n, s;
        if (!eB.current || !ex || (null == (a = window.getSelection()) ? void 0 : a.toString().length) > 0) return;
        let o = t.clientY - eB.current.y,
          i = t.clientX - eB.current.x,
          l = null != (r = e.swipeDirections) ? r : function(e) {
            let [t, a] = e.split("-"), r = [];
            return t && r.push(t), a && r.push(a), r
          }(O);
        !J && (Math.abs(i) > 1 || Math.abs(o) > 1) && Q(Math.abs(i) > Math.abs(o) ? "x" : "y");
        let d = {
          x: 0,
          y: 0
        };
        "y" === J ? (l.includes("top") || l.includes("bottom")) && (l.includes("top") && o < 0 || l.includes("bottom") && o > 0) && (d.y = o) : "x" === J && (l.includes("left") || l.includes("right")) && (l.includes("left") && i < 0 || l.includes("right") && i > 0) && (d.x = i), (Math.abs(d.x) > 0 || Math.abs(d.y) > 0) && eu(!0), null == (n = ev.current) || n.style.setProperty("--swipe-amount-x", `${d.x}px`), null == (s = ev.current) || s.style.setProperty("--swipe-amount-y", `${d.y}px`)
      }
    }, ek && !k.jsx ? t.default.createElement("button", {
      "aria-label": X,
      "data-disabled": eR,
      "data-close-button": !0,
      onClick: eR || !ex ? () => {} : () => {
        var e;
        ez(), null == (e = k.onDismiss) || e.call(k, k)
      },
      className: p(null == U ? void 0 : U.closeButton, null == (c = null == k ? void 0 : k.classNames) ? void 0 : c.closeButton)
    }, null != (f = null == q ? void 0 : q.close) ? f : d) : null, k.jsx || (0, t.isValidElement)(k.title) ? k.jsx ? k.jsx : "function" == typeof k.title ? k.title() : k.title : t.default.createElement(t.default.Fragment, null, ey || k.icon || k.promise ? t.default.createElement("div", {
      "data-icon": "",
      className: p(null == U ? void 0 : U.icon, null == (m = null == k ? void 0 : k.classNames) ? void 0 : m.icon)
    }, k.promise || "loading" === k.type && !k.icon ? k.icon || (null != q && q.loading ? t.default.createElement("div", {
      className: p(null == U ? void 0 : U.loader, null == (x = null == k ? void 0 : k.classNames) ? void 0 : x.loader, "sonner-loader"),
      "data-visible": "loading" === ey
    }, q.loading) : F ? t.default.createElement("div", {
      className: p(null == U ? void 0 : U.loader, null == (N = null == k ? void 0 : k.classNames) ? void 0 : N.loader, "sonner-loader"),
      "data-visible": "loading" === ey
    }, F) : t.default.createElement(n, {
      className: p(null == U ? void 0 : U.loader, null == (j = null == k ? void 0 : k.classNames) ? void 0 : j.loader),
      visible: "loading" === ey
    })) : null, "loading" !== k.type ? k.icon || (null == q ? void 0 : q[ey]) || (e => {
      switch (e) {
        case "success":
          return s;
        case "info":
          return i;
        case "warning":
          return o;
        case "error":
          return l;
        default:
          return null
      }
    })(ey) : null) : null, t.default.createElement("div", {
      "data-content": "",
      className: p(null == U ? void 0 : U.content, null == (g = null == k ? void 0 : k.classNames) ? void 0 : g.content)
    }, t.default.createElement("div", {
      "data-title": "",
      className: p(null == U ? void 0 : U.title, null == (v = null == k ? void 0 : k.classNames) ? void 0 : v.title)
    }, "function" == typeof k.title ? k.title() : k.title), k.description ? t.default.createElement("div", {
      "data-description": "",
      className: p(Y, ej, null == U ? void 0 : U.description, null == (b = null == k ? void 0 : k.classNames) ? void 0 : b.description)
    }, "function" == typeof k.description ? k.description() : k.description) : null), (0, t.isValidElement)(k.cancel) ? k.cancel : k.cancel && h(k.cancel) ? t.default.createElement("button", {
      "data-button": !0,
      "data-cancel": !0,
      style: k.cancelButtonStyle || W,
      onClick: e => {
        var t, a;
        h(k.cancel) && ex && (null == (a = (t = k.cancel).onClick) || a.call(t, e), ez())
      },
      className: p(null == U ? void 0 : U.cancelButton, null == (w = null == k ? void 0 : k.classNames) ? void 0 : w.cancelButton)
    }, k.cancel.label) : null, (0, t.isValidElement)(k.action) ? k.action : k.action && h(k.action) ? t.default.createElement("button", {
      "data-button": !0,
      "data-action": !0,
      style: k.actionButtonStyle || I,
      onClick: e => {
        var t, a;
        h(k.action) && (null == (a = (t = k.action).onClick) || a.call(t, e), e.defaultPrevented || ez())
      },
      className: p(null == U ? void 0 : U.actionButton, null == (y = null == k ? void 0 : k.classNames) ? void 0 : y.actionButton)
    }, k.action.label) : null))
  };

  function v() {
    if ("undefined" == typeof window || "undefined" == typeof document) return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return "auto" !== e && e ? e : window.getComputedStyle(document.documentElement).direction
  }
  var b = (0, t.forwardRef)(function(e, r) {
    let {
      invert: n,
      position: s = "bottom-right",
      hotkey: o = ["altKey", "KeyT"],
      expand: i,
      closeButton: l,
      className: d,
      offset: u,
      mobileOffset: f,
      theme: m = "light",
      richColors: h,
      duration: p,
      style: b,
      visibleToasts: w = 3,
      toastOptions: y,
      dir: x = v(),
      gap: N = 14,
      loadingIcon: j,
      icons: E,
      containerAriaLabel: k = "Notifications",
      pauseWhenPageIsHidden: C
    } = e, [_, T] = t.default.useState([]), S = t.default.useMemo(() => Array.from(new Set([s].concat(_.filter(e => e.position).map(e => e.position)))), [_, s]), [B, M] = t.default.useState([]), [P, L] = t.default.useState(!1), [$, D] = t.default.useState(!1), [R, z] = t.default.useState("system" !== m ? m : "undefined" != typeof window && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), W = t.default.useRef(null), I = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), H = t.default.useRef(null), Y = t.default.useRef(!1), A = t.default.useCallback(e => {
      T(t => {
        var a;
        return null != (a = t.find(t => t.id === e.id)) && a.delete || c.dismiss(e.id), t.filter(({
          id: t
        }) => t !== e.id)
      })
    }, []);
    return t.default.useEffect(() => c.subscribe(e => {
      e.dismiss ? T(t => t.map(t => t.id === e.id ? {
        ...t,
        delete: !0
      } : t)) : setTimeout(() => {
        a.default.flushSync(() => {
          T(t => {
            let a = t.findIndex(t => t.id === e.id);
            return -1 !== a ? [...t.slice(0, a), {
              ...t[a],
              ...e
            }, ...t.slice(a + 1)] : [e, ...t]
          })
        })
      })
    }), []), t.default.useEffect(() => {
      if ("system" !== m) return void z(m);
      if ("system" === m && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? z("dark") : z("light")), "undefined" == typeof window) return;
      let e = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        e.addEventListener("change", ({
          matches: e
        }) => {
          z(e ? "dark" : "light")
        })
      } catch (t) {
        e.addListener(({
          matches: e
        }) => {
          try {
            z(e ? "dark" : "light")
          } catch (e) {
            console.error(e)
          }
        })
      }
    }, [m]), t.default.useEffect(() => {
      _.length <= 1 && L(!1)
    }, [_]), t.default.useEffect(() => {
      let e = e => {
        var t, a;
        o.every(t => e[t] || e.code === t) && (L(!0), null == (t = W.current) || t.focus()), "Escape" === e.code && (document.activeElement === W.current || null != (a = W.current) && a.contains(document.activeElement)) && L(!1)
      };
      return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
    }, [o]), t.default.useEffect(() => {
      if (W.current) return () => {
        H.current && (H.current.focus({
          preventScroll: !0
        }), H.current = null, Y.current = !1)
      }
    }, [W.current]), t.default.createElement("section", {
      ref: r,
      "aria-label": `${k} ${I}`,
      tabIndex: -1,
      "aria-live": "polite",
      "aria-relevant": "additions text",
      "aria-atomic": "false",
      suppressHydrationWarning: !0
    }, S.map((a, r) => {
      var s;
      let o, [c, m] = a.split("-");
      return _.length ? t.default.createElement("ol", {
        key: a,
        dir: "auto" === x ? v() : x,
        tabIndex: -1,
        ref: W,
        className: d,
        "data-sonner-toaster": !0,
        "data-theme": R,
        "data-y-position": c,
        "data-lifted": P && _.length > 1 && !i,
        "data-x-position": m,
        style: {
          "--front-toast-height": `${(null==(s=B[0])?void 0:s.height)||0}px`,
          "--width": "356px",
          "--gap": `${N}px`,
          ...b,
          ...(o = {}, [u, f].forEach((e, t) => {
            let a = 1 === t,
              r = a ? "--mobile-offset" : "--offset",
              n = a ? "16px" : "32px";

            function s(e) {
              ["top", "right", "bottom", "left"].forEach(t => {
                o[`${r}-${t}`] = "number" == typeof e ? `${e}px` : e
              })
            }
            "number" == typeof e || "string" == typeof e ? s(e) : "object" == typeof e ? ["top", "right", "bottom", "left"].forEach(t => {
              void 0 === e[t] ? o[`${r}-${t}`] = n : o[`${r}-${t}`] = "number" == typeof e[t] ? `${e[t]}px` : e[t]
            }) : s(n)
          }), o)
        },
        onBlur: e => {
          Y.current && !e.currentTarget.contains(e.relatedTarget) && (Y.current = !1, H.current && (H.current.focus({
            preventScroll: !0
          }), H.current = null))
        },
        onFocus: e => {
          e.target instanceof HTMLElement && "false" === e.target.dataset.dismissible || Y.current || (Y.current = !0, H.current = e.relatedTarget)
        },
        onMouseEnter: () => L(!0),
        onMouseMove: () => L(!0),
        onMouseLeave: () => {
          $ || L(!1)
        },
        onDragEnd: () => L(!1),
        onPointerDown: e => {
          e.target instanceof HTMLElement && "false" === e.target.dataset.dismissible || D(!0)
        },
        onPointerUp: () => D(!1)
      }, _.filter(e => !e.position && 0 === r || e.position === a).map((r, s) => {
        var o, d;
        return t.default.createElement(g, {
          key: r.id,
          icons: E,
          index: s,
          toast: r,
          defaultRichColors: h,
          duration: null != (o = null == y ? void 0 : y.duration) ? o : p,
          className: null == y ? void 0 : y.className,
          descriptionClassName: null == y ? void 0 : y.descriptionClassName,
          invert: n,
          visibleToasts: w,
          closeButton: null != (d = null == y ? void 0 : y.closeButton) ? d : l,
          interacting: $,
          position: a,
          style: null == y ? void 0 : y.style,
          unstyled: null == y ? void 0 : y.unstyled,
          classNames: null == y ? void 0 : y.classNames,
          cancelButtonStyle: null == y ? void 0 : y.cancelButtonStyle,
          actionButtonStyle: null == y ? void 0 : y.actionButtonStyle,
          removeToast: A,
          toasts: _.filter(e => e.position == r.position),
          heights: B.filter(e => e.position == r.position),
          setHeights: M,
          expandByDefault: i,
          gap: N,
          loadingIcon: j,
          expanded: P,
          pauseWhenPageIsHidden: C,
          swipeDirections: e.swipeDirections
        })
      })) : null
    }))
  });
  e.s(["Toaster", () => b, "toast", () => m])
}, 99325, e => {
  "use strict";
  e.s(["default", 0, function() {
    for (var e, t, a = 0, r = "", n = arguments.length; a < n; a++)(e = arguments[a]) && (t = function e(t) {
      var a, r, n = "";
      if ("string" == typeof t || "number" == typeof t) n += t;
      else if ("object" == typeof t)
        if (Array.isArray(t)) {
          var s = t.length;
          for (a = 0; a < s; a++) t[a] && (r = e(t[a])) && (n && (n += " "), n += r)
        } else
          for (r in t) t[r] && (n && (n += " "), n += r);
      return n
    }(e)) && (r && (r += " "), r += t);
    return r
  }])
}, 55927, e => {
  e.v({
    tooltip: "tooltipWrapper-module__pOyMVa__tooltip",
    wrapper: "tooltipWrapper-module__pOyMVa__wrapper"
  })
}, 30817, e => {
  "use strict";
  var t = e.i(48277),
    a = e.i(69941),
    r = e.i(30668),
    n = e.i(55927);
  let s = "undefined" != typeof navigator && /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  function o({
    content: e,
    children: o,
    placement: i = "top",
    delay: l = 110,
    offset: d = 10,
    maxWidth: u = 260,
    className: c,
    tooltipClassName: f,
    hideTooltip: m = !1,
    pageTooltipStyles: h = !1
  }) {
    let [p, g] = (0, r.useState)(!1), [v, b] = (0, r.useState)(!1), [w, y] = (0, r.useState)({
      top: 0,
      left: 0
    }), [x, N] = (0, r.useState)(!1), j = (0, r.useRef)(null), E = (0, r.useRef)(null), k = (0, r.useRef)(null), C = h ? 25 + 30 * !!s : l;
    (0, r.useEffect)(() => {
      N(!0)
    }, []);
    let _ = (0, r.useCallback)(() => {
        j.current && (clearTimeout(j.current), j.current = null)
      }, []),
      T = (0, r.useCallback)(() => "undefined" != typeof document && "active" === document.documentElement.getAttribute("data-user-page-enter-transition"), []),
      S = (0, r.useCallback)(e => {
        if (m || T()) return;
        let t = e?.immediate ?? !1;
        (_(), t || C <= 0) ? g(!0): j.current = setTimeout(() => g(!0), C)
      }, [_, C, m, T]),
      B = (0, r.useCallback)(e => {
        _(), e?.immediate, g(!1)
      }, [_]);
    (0, r.useEffect)(() => () => {
      _()
    }, [_]), (0, r.useEffect)(() => {
      m && B({
        immediate: !0
      })
    }, [m, B]);
    let M = (e, t, a) => Math.min(Math.max(e, t), a),
      P = (0, r.useCallback)(() => {
        let e = E.current,
          t = k.current;
        if (!e || !t) return;
        let a = e.getBoundingClientRect(),
          r = t.getBoundingClientRect(),
          n = 0,
          s = 0;
        switch (i) {
          case "bottom":
            n = a.bottom + d, s = a.left + a.width / 2 - r.width / 2;
            break;
          case "left":
            n = a.top + a.height / 2 - r.height / 2, s = a.left - r.width - d;
            break;
          case "right":
            n = a.top + a.height / 2 - r.height / 2, s = a.right + d;
            break;
          default:
            n = a.top - r.height - d, s = a.left + a.width / 2 - r.width / 2
        }
        let o = window.innerWidth - r.width - 8,
          l = window.innerHeight - r.height - 8,
          u = r.width >= window.innerWidth ? 8 : M(s, 8, Math.max(8, o));
        y({
          top: r.height >= window.innerHeight ? 8 : M(n, 8, Math.max(8, l)),
          left: u
        })
      }, [d, i]);
    (0, r.useLayoutEffect)(() => {
      if (!p) return;
      P();
      let e = () => P();
      return window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
        window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0)
      }
    }, [P, p]);
    let L = (0, r.useCallback)(e => {
      T() || (e.stopPropagation(), b(!0), p ? B({
        immediate: !0
      }) : S({
        immediate: !0
      }))
    }, [B, T, S, p]);
    (0, r.useEffect)(() => {
      if (!p || !v) return;
      let e = e => {
        E.current && (E.current.contains(e.target) || B({
          immediate: !0
        }))
      };
      return document.addEventListener("touchstart", e, {
        passive: !0
      }), () => {
        document.removeEventListener("touchstart", e)
      }
    }, [m, B, v, p]);
    let $ = {
        "--tooltip-max-width": "number" == typeof u ? `${u}px` : u,
        top: `${w.top}px`,
        left: `${w.left}px`
      },
      D = (0, t.jsx)("span", {
        ref: k,
        className: `${n.default.tooltip} ${f??""}`,
        style: {
          ...$,
          borderColor: h ? "#1a1a1a33" : "var(--tooltip-border-color)",
          backgroundColor: h ? "#14141463" : "var(--tooltip-background-color)"
        },
        "data-visible": p,
        "data-placement": i,
        children: e
      });
    return (0, t.jsxs)("span", {
      ref: E,
      className: `${n.default.wrapper} ${c??""}`,
      onMouseEnter: () => S(),
      onMouseLeave: () => B(),
      onFocusCapture: () => S(),
      onBlurCapture: () => B({
        immediate: !0
      }),
      onTouchStart: L,
      children: [o, x ? (0, a.createPortal)(D, document.body) : D]
    })
  }
  e.s(["default", () => o])
}]);