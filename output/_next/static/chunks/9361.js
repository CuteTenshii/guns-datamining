(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9361], {
    40428: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => n
      });
      var r = s(95155),
        t = s(12115),
        i = s(59931),
        o = s.n(i);

      function n({
        checked: e,
        onChange: a,
        label: s,
        description: i,
        disabled: n = !1,
        name: l,
        id: c,
        className: d
      }) {
        let u = (0, t.useId)(),
          h = c ?? u,
          m = (0, r.jsx)("svg", {
            viewBox: "0 0 10 7",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
              d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          });
        return (0, r.jsxs)("label", {
          className: `${o().checkboxWrapper} ${d??""}`,
          "data-disabled": n,
          "data-checked": e,
          htmlFor: h,
          children: [(0, r.jsx)("input", {
            type: "checkbox",
            id: h,
            name: l,
            checked: e,
            onChange: a,
            disabled: n
          }), (0, r.jsx)("span", {
            className: o().checkboxBox,
            children: (0, r.jsx)("span", {
              className: o().checkmark,
              children: m
            })
          }), (s || i) && (0, r.jsxs)("span", {
            className: o().checkboxContent,
            children: [s && (0, r.jsx)("span", {
              className: o().label,
              children: s
            }), i && (0, r.jsx)("span", {
              className: o().description,
              children: i
            })]
          })]
        })
      }
    },
    49361: (e, a, s) => {
      "use strict";
      s.r(a), s.d(a, {
        default: () => H
      });
      var r = s(95155),
        t = s(12115),
        i = s(31887),
        o = s.n(i),
        n = s(98241),
        l = s.n(n),
        c = s(66609);
      let d = {
        image: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            d: "M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm2-4h10q.3 0 .45-.275t-.05-.525l-2.75-3.675q-.15-.2-.4-.2t-.4.2L11.25 16L9.4 13.525q-.15-.2-.4-.2t-.4.2l-2 2.675q-.2.25-.05.525T7 17"
          })
        }),
        deleteFile: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "m7 7l10 10M7 17L17 7"
          })
        }),
        audio: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 512 512",
          id: "ignore",
          children: (0, r.jsx)("path", {
            id: "ignore",
            d: "M406.3 48.2c-4.7.9-202 39.2-206.2 40-4.2.8-8.1 3.6-8.1 8v240.1c0 1.6-.1 7.2-2.4 11.7-3.1 5.9-8.5 10.2-16.1 12.7-3.3 1.1-7.8 2.1-13.1 3.3-24.1 5.4-64.4 14.6-64.4 51.8 0 31.1 22.4 45.1 41.7 47.5 2.1.3 4.5.7 7.1.7 6.7 0 36-3.3 51.2-13.2 11-7.2 24.1-21.4 24.1-47.8V190.5c0-3.8 2.7-7.1 6.4-7.8l152-30.7c5-1 9.6 2.8 9.6 7.8v130.9c0 4.1-.2 8.9-2.5 13.4-3.1 5.9-8.5 10.2-16.2 12.7-3.3 1.1-8.8 2.1-14.1 3.3-24.1 5.4-64.4 14.5-64.4 51.7 0 33.7 25.4 47.2 41.8 48.3 6.5.4 11.2.3 19.4-.9s23.5-5.5 36.5-13c17.9-10.3 27.5-26.8 27.5-48.2V55.9c-.1-4.4-3.8-8.9-9.8-7.7z",
            fill: "currentColor"
          })
        }),
        loading: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          style: {
            fontSize: "30px"
          },
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, r.jsxs)("g", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeWidth: "2",
            children: [(0, r.jsx)("path", {
              strokeDasharray: "60",
              strokeDashoffset: "60",
              strokeOpacity: ".3",
              d: "M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z",
              children: (0, r.jsx)("animate", {
                fill: "freeze",
                attributeName: "stroke-dashoffset",
                dur: "1.3s",
                values: "60;0"
              })
            }), (0, r.jsxs)("path", {
              strokeDasharray: "15",
              strokeDashoffset: "15",
              d: "M12 3C16.9706 3 21 7.02944 21 12",
              children: [(0, r.jsx)("animate", {
                fill: "freeze",
                attributeName: "stroke-dashoffset",
                dur: "0.3s",
                values: "15;0"
              }), (0, r.jsx)("animateTransform", {
                attributeName: "transform",
                dur: "1.5s",
                repeatCount: "indefinite",
                type: "rotate",
                values: "0 12 12;360 12 12"
              })]
            })]
          })
        }),
        description: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            d: "M5 17v2h14v-2zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1zM12 5.98L13.87 11h-3.74z"
          })
        }),
        discordPresence: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            d: "M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"
          })
        }),
        backgroundEffects: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 48 48",
          children: (0, r.jsxs)("g", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "4",
            children: [(0, r.jsx)("path", {
              fill: "currentColor",
              d: "m24.95 42.36l5.466-11.99l12.689-3.72l-9.767-8.88l.368-13.163l-11.502 6.503l-12.46-4.416l2.657 12.9l-8.069 10.433l13.145 1.47z"
            }), (0, r.jsx)("path", {
              d: "m36.178 36.054l8 7.964"
            })]
          })
        }),
        usernameEffects: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 48 48",
          children: (0, r.jsxs)("g", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "4",
            children: [(0, r.jsx)("circle", {
              cx: "24",
              cy: "11",
              r: "7",
              fill: "currentColor"
            }), (0, r.jsx)("path", {
              d: "M4 41c0-8.837 8.059-16 18-16"
            }), (0, r.jsx)("path", {
              fill: "currentColor",
              d: "m31 42l10-10l-4-4l-10 10v4z"
            })]
          })
        }),
        premium: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 512 512",
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            d: "M121.72 32a4 4 0 0 0-3.72 5.56l2.3 5.43l40.7 94.9a4 4 0 0 0 6.88.82L243 38.4a4 4 0 0 0-3.2-6.4Zm298.21 26.06l-41.28 96.37a4 4 0 0 0 3.68 5.57h101a4 4 0 0 0 3.4-6.11L427 57.53a4 4 0 0 0-7.07.53M85 57.57l-59.71 96.32a4 4 0 0 0 3.4 6.11h101a4 4 0 0 0 3.67-5.58L92 58.1a4 4 0 0 0-7-.53M393.27 32H267.82a1.94 1.94 0 0 0-1.56 3.11l79.92 106.46a1.94 1.94 0 0 0 3.34-.4L391.6 43l3.4-8.34a1.92 1.92 0 0 0-1.7-2.66ZM239 448l-89.43-253.49A3.78 3.78 0 0 0 146 192H25.7a3.72 3.72 0 0 0-2.95 6l216 279.81a5.06 5.06 0 0 0 6.39 1.37a5 5 0 0 0 2.39-6.08Zm247.3-256H366a3.75 3.75 0 0 0-3.54 2.51l-98.2 278.16a5.21 5.21 0 0 0 2.42 6.31a5.22 5.22 0 0 0 6.61-1.39L489.25 198a3.72 3.72 0 0 0-2.95-6M259.2 78.93l56 74.67a4 4 0 0 1-3.2 6.4H200a4 4 0 0 1-3.2-6.4l56-74.67a4 4 0 0 1 6.4 0m-7 310.31l-67.7-191.91a4 4 0 0 1 3.77-5.33h135.46a4 4 0 0 1 3.77 5.33l-67.73 191.91a4 4 0 0 1-7.54 0Z"
          })
        }),
        lock: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            d: "M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm6-5q.825 0 1.413-.587T14 15q0-.825-.587-1.412T12 13q-.825 0-1.412.588T10 15q0 .825.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6z"
          })
        }),
        none: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, r.jsxs)("g", {
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            children: [(0, r.jsx)("path", {
              strokeLinecap: "round",
              d: "m18.5 5.5l-13 13"
            }), (0, r.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10"
            })]
          })
        }),
        audioManager: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "#ffffff",
            d: "M14 22v-3.075l5.525-5.5q.225-.225.5-.325t.55-.1q.3 0 .575.113t.5.337l.925.925q.2.225.313.5t.112.55t-.1.563t-.325.512l-5.5 5.5zm6.575-5.6l.925-.975l-.925-.925l-.95.95zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v3.3q-.35-.15-.725-.225t-.75-.075q-.7 0-1.312.25T18.1 12L12 18.1V20z"
          })
        }),
        deleteButton: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            d: "M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5q0-.425.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.587 1.413T17 21zm3-4q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8q-.425 0-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8q-.425 0-.712.288T13 9v7q0 .425.288.713T14 17"
          })
        }),
        editButton: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            d: "M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15q.4 0 .775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"
          })
        }),
        glow: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 32 32",
          children: (0, r.jsxs)("g", {
            fill: "currentColor",
            children: [(0, r.jsx)("path", {
              d: "m28.979 17.003l-3.108.214c-.834.06-1.178 1.079-.542 1.608l2.388 1.955c.521.428 1.314.204 1.523-.428l.709-2.127c.219-.632-.292-1.273-.97-1.222M21.75 2.691l-.72 2.9c-.2.78.66 1.41 1.34.98l2.54-1.58c.55-.34.58-1.14.05-1.52l-1.78-1.29a.912.912 0 0 0-1.43.51M6.43 4.995l2.53 1.58c.68.43 1.54-.19 1.35-.98l-.72-2.9a.92.92 0 0 0-1.43-.52l-1.78 1.29c-.53.4-.5 1.19.05 1.53M4.185 20.713l2.29-1.92c.62-.52.29-1.53-.51-1.58l-2.98-.21a.92.92 0 0 0-.94 1.2l.68 2.09c.2.62.97.84 1.46.42m13.61 7.292l-1.12-2.77c-.3-.75-1.36-.75-1.66 0l-1.12 2.77c-.24.6.2 1.26.85 1.26h2.2a.92.92 0 0 0 .85-1.26"
            }), (0, r.jsx)("path", {
              d: "m17.565 3.324l1.726 3.72c.326.694.967 1.18 1.717 1.29l4.056.624c1.835.278 2.575 2.53 1.293 3.859L23.268 16a2.28 2.28 0 0 0-.612 1.964l.71 4.374c.307 1.885-1.687 3.293-3.354 2.37l-3.405-1.894a2.25 2.25 0 0 0-2.21 0l-3.404 1.895c-1.668.922-3.661-.486-3.355-2.37l.71-4.375A2.28 2.28 0 0 0 7.736 16l-3.088-3.184c-1.293-1.34-.543-3.581 1.293-3.859l4.055-.625a2.3 2.3 0 0 0 1.717-1.29l1.727-3.719c.819-1.765 3.306-1.765 4.124 0"
            })]
          })
        }),
        locationMarker: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "4 2 16 20",
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            d: "M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"
          })
        }),
        settings: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M9 3.223a1 1 0 0 1 .777-.975a9.99 9.99 0 0 1 4.445.002a1 1 0 0 1 .778.975v1.847a1 1 0 0 0 1.5.866l1.601-.925a1 1 0 0 1 1.234.187a10.064 10.064 0 0 1 2.221 3.848a1 1 0 0 1-.455 1.162l-1.601.924a1 1 0 0 0 0 1.732l1.6.923a1 1 0 0 1 .455 1.161a9.99 9.99 0 0 1-2.22 3.851a1 1 0 0 1-1.234.186l-1.601-.925a1 1 0 0 0-1.5.866v1.85a1 1 0 0 1-.778.974a9.991 9.991 0 0 1-4.445-.002A1 1 0 0 1 9 20.775v-1.847a1 1 0 0 0-1.5-.866l-1.601.925a1 1 0 0 1-1.234-.187A10.029 10.029 0 0 1 3.34 17a10.028 10.028 0 0 1-.896-2.048a1 1 0 0 1 .455-1.162l1.6-.924a1 1 0 0 0 0-1.732l-1.598-.923a1 1 0 0 1-.456-1.161a9.99 9.99 0 0 1 2.22-3.85a1 1 0 0 1 1.233-.187l1.602.925A1 1 0 0 0 9 5.072zM12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6",
            clipRule: "evenodd"
          })
        }),
        idleText: (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            d: "M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"
          })
        })
      };
      var u = s(39818);
      let h = ({
        assetURL: e,
        fileType: a,
        setAsset: s
      }) => (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: o().fileBadge,
          children: [(0, r.jsx)("span", {
            children: ("." + e.substring(e.lastIndexOf(".") + 1)).toUpperCase()
          }), (0, r.jsx)("span", {
            onClick: function() {
              null !== (0, u._Y)(a) && s("")
            },
            children: d.deleteFile
          })]
        }), [".mp4", ".mov", ".avi", ".m4v", ".webm", ".mkv"].find(a => e.endsWith(a)) ? (0, r.jsx)("video", {
          src: e,
          className: o().uploadCardImage
        }) : (0, r.jsx)("img", {
          src: e,
          alt: "File",
          className: o().uploadCardImage
        })]
      });
      var m = s(38256);
      let p = ({
        label: e,
        value: a,
        accept: s,
        isLoading: t,
        onFileChange: i,
        fileType: n,
        setAsset: l
      }) => {
        let c = (0, m.kj)();
        return (0, r.jsxs)("div", {
          className: o().uploadCardWrapper,
          children: [(0, r.jsx)("span", {
            children: e
          }), (0, r.jsx)("div", {
            className: o().uploadCard,
            children: "" === a ? (0, r.jsxs)(r.Fragment, {
              children: [t ? (0, r.jsxs)("div", {
                className: o().uploaderMessage,
                children: [(0, r.jsx)("span", {
                  children: d.loading
                }), (0, r.jsx)("h1", {
                  children: c("dashboard.customize.assets.uploading")
                })]
              }) : (0, r.jsxs)("div", {
                className: o().uploadCardText,
                children: [d.image, (0, r.jsx)("h1", {
                  children: c("dashboard.customize.assets.upload_prompt")
                })]
              }), (0, r.jsx)("input", {
                type: "file",
                accept: s,
                onChange: i
              })]
            }) : (0, r.jsx)(h, {
              assetURL: a,
              fileType: n,
              setAsset: l
            })
          })]
        })
      };
      var g = s(37897),
        f = s(45941);
      let x = function({
        url: e
      }) {
        let [a, s] = (0, t.useState)("--:--");
        return (0, t.useEffect)(() => {
          let a = document.createElement("audio");
          a.src = e, a.addEventListener("loadedmetadata", () => {
            let e = Math.floor(a.duration),
              r = Math.floor(e / 60),
              t = e % 60;
            s(`${r}:${t<10?"0":""}${t}`)
          })
        }, [e]), (0, r.jsx)("h3", {
          children: a
        })
      };
      var b = s(61778),
        v = s(81934),
        j = s(57776),
        _ = s(40428),
        w = s(12521),
        N = s(21924);
      let k = ({
        data: e
      }) => {
        let a = (0, m.kj)(),
          s = e.config,
          [i, n] = (0, t.useState)({
            isLoading: !1,
            assetType: ""
          }),
          l = {
            isLoading: !1,
            assetType: ""
          },
          [h, k] = (0, t.useState)("" !== s.url ? s.url : ""),
          [y, z] = (0, t.useState)("" !== s.avatar ? s.avatar : ""),
          [C, A] = (0, t.useState)("" !== s.custom_cursor ? s.custom_cursor : ""),
          [T, S] = (0, t.useState)(!1),
          [M, L] = (0, t.useState)(e.config.shuffle_audios ?? !1),
          [B, E] = (0, t.useState)(e.config.audio_player ?? !1),
          [R, F] = (0, t.useState)(""),
          [q, W] = (0, t.useState)(s.audio),
          [P, I] = (0, t.useState)(""),
          [D, $] = (0, t.useState)({
            id: "",
            currentTitle: ""
          }),
          [O, U] = (0, t.useState)(),
          H = (0, t.useRef)(null),
          G = e.premium ? 4 : 2,
          Y = "string" == typeof q && "" !== q,
          J = (0, t.useMemo)(() => Y ? 1 : Array.isArray(q) ? q.length : 0, [q, Y]),
          V = "audioManager" === R ? a("dashboard.customize.audio.modal.manager") : "addAudio" === R ? a("dashboard.customize.audio.modal.add") : "editAudioDetails" === R ? a("dashboard.customize.audio.modal.edit") : "",
          [X, Z] = (0, t.useState)(""),
          [K, Q] = (0, t.useState)(null),
          [ee, ea] = (0, t.useState)(""),
          [es, er] = (0, t.useState)(null),
          [et, ei] = (0, t.useState)(!1),
          [eo, en] = (0, t.useState)(!1),
          [el, ec] = (0, t.useState)(null),
          [ed, eu] = (0, t.useState)(!1),
          [eh, em] = (0, t.useState)(1),
          [ep, eg] = (0, t.useState)(0),
          [ef, ex] = (0, t.useState)({
            x: 0,
            y: 0
          }),
          [eb, ev] = (0, t.useState)(!1),
          ej = (0, t.useRef)(null),
          e_ = (0, t.useRef)({}),
          ew = (0, t.useRef)({
            mode: "none",
            panPointerId: -1,
            startX: 0,
            startY: 0,
            startOffset: {
              x: 0,
              y: 0
            },
            pinchDistance: 0,
            pinchAngle: 0,
            pinchCenter: {
              x: 0,
              y: 0
            },
            pinchStartZoom: 1,
            pinchStartRotation: 0,
            pinchStartOffset: {
              x: 0,
              y: 0
            }
          }),
          eN = async e => {
            let s = e.target.files?.[0];
            if (!s) return;
            let r = f.nB.audio,
              t = ek(s.name).toLowerCase();
            if (!r.includes(t)) {
              c.oR.error(a("dashboard.customize.audio.errors.invalid_file")), e.target.value = "";
              return
            }
            U(s)
          };

        function ek(e) {
          return "." + e.substring(e.lastIndexOf(".") + 1)
        }
        let ey = (e, a, s) => Math.min(s, Math.max(a, e)),
          ez = e => {
            let a = e;
            for (; a > 180;) a -= 360;
            for (; a < -180;) a += 360;
            return a
          },
          eC = (e, a) => Math.hypot(e.x - a.x, e.y - a.y),
          eA = (e, a) => 180 * Math.atan2(a.y - e.y, a.x - e.x) / Math.PI,
          eT = (e, a) => ({
            x: (e.x + a.x) / 2,
            y: (e.y + a.y) / 2
          }),
          eS = (0, t.useCallback)((e, a, s, r) => {
            if (!s) return {
              x: 0,
              y: 0
            };
            let t = Math.max(340 / s.naturalWidth, 340 / s.naturalHeight) * a,
              i = s.naturalWidth * t,
              o = s.naturalHeight * t,
              n = Math.abs(r) * Math.PI / 180,
              l = Math.abs(Math.cos(n)),
              c = Math.abs(Math.sin(n)),
              d = Math.max(0, (i * l + o * c - 340) / 2),
              u = Math.max(0, (i * c + o * l - 340) / 2);
            return {
              x: Math.min(d, Math.max(-d, e.x)),
              y: Math.min(u, Math.max(-u, e.y))
            }
          }, []),
          eM = (0, t.useCallback)(() => {
            em(1), eg(0), ex({
              x: 0,
              y: 0
            }), ev(!1), e_.current = {}, ew.current.mode = "none"
          }, []),
          eL = (0, t.useCallback)(() => {
            eu(!1), ec(e => (e && URL.revokeObjectURL(e.objectUrl), null)), eM()
          }, [eM]),
          eB = async e => {
            let s = URL.createObjectURL(e);
            try {
              let a = await new Promise((e, a) => {
                let r = new Image;
                r.onload = () => e({
                  width: r.naturalWidth,
                  height: r.naturalHeight
                }), r.onerror = () => a(Error()), r.src = s
              });
              if (!a.width || !a.height) throw Error("Invalid image.");
              ec({
                objectUrl: s,
                fileName: e.name,
                naturalWidth: a.width,
                naturalHeight: a.height
              }), eM(), eu(!0)
            } catch {
              URL.revokeObjectURL(s), c.oR.error(a("dashboard.customize.assets.avatar_editor.errors.open"))
            }
          }, eE = async e => {
            n({
              isLoading: !0,
              assetType: "avatar"
            });
            try {
              let s = await (0, u.iN)("avatar", e, a);
              s && z(s)
            } finally {
              n(l)
            }
          }, eR = async e => {
            let a = e.target.files?.[0];
            e.target.value = "", !a || (".gif" === ek(a.name).toLowerCase() ? await eE(a) : (0, u.vH)(a, "avatar") && await eB(a))
          }, eF = () => {
            let e = Object.values(e_.current);
            e.length < 2 || (ew.current = {
              mode: "pinch",
              panPointerId: -1,
              startX: 0,
              startY: 0,
              startOffset: ef,
              pinchDistance: eC(e[0], e[1]),
              pinchAngle: eA(e[0], e[1]),
              pinchCenter: eT(e[0], e[1]),
              pinchStartZoom: eh,
              pinchStartRotation: ep,
              pinchStartOffset: ef
            })
          }, eq = e => {
            e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId), delete e_.current[e.pointerId];
            let a = Object.values(e_.current);
            if (a.length >= 2) return void eF();
            if (1 === a.length) {
              ew.current = {
                mode: "pan",
                panPointerId: Number(Object.keys(e_.current)[0]),
                startX: a[0].x,
                startY: a[0].y,
                startOffset: ef,
                pinchDistance: 0,
                pinchAngle: 0,
                pinchCenter: {
                  x: 0,
                  y: 0
                },
                pinchStartZoom: eh,
                pinchStartRotation: ep,
                pinchStartOffset: ef
              };
              return
            }
            ew.current.mode = "none", ew.current.panPointerId = -1
          }, eW = async () => {
            if (el && !eb) {
              ev(!0), n({
                isLoading: !0,
                assetType: "avatar"
              });
              try {
                let e, s = await (e = el.objectUrl, new Promise((a, s) => {
                    let r = new Image;
                    r.onload = () => a(r), r.onerror = () => s(Error()), r.src = e
                  })),
                  r = document.createElement("canvas"),
                  t = r.getContext("2d");
                if (!t) return void c.oR.error(a("dashboard.customize.assets.avatar_editor.errors.edit"));
                let i = Math.max(340 / el.naturalWidth, 340 / el.naturalHeight),
                  o = Math.floor(340 / (i * eh)),
                  n = Math.min(512, Math.max(128, o)),
                  l = i * eh,
                  d = n / 340,
                  h = el.naturalWidth * l * d,
                  m = el.naturalHeight * l * d,
                  p = ep * Math.PI / 180;
                r.width = n, r.height = n, t.imageSmoothingEnabled = !0, t.imageSmoothingQuality = "high", t.clearRect(0, 0, n, n), t.save(), t.translate(n / 2 + ef.x * d, n / 2 + ef.y * d), t.rotate(p), t.drawImage(s, -h / 2, -m / 2, h, m), t.restore();
                let g = await new Promise(e => {
                  r.toBlob(e, "image/png", .95)
                });
                if (!g) return void c.oR.error(a("dashboard.customize.assets.avatar_editor.errors.process"));
                let f = el.fileName.replace(/\.[^/.]+$/, ""),
                  x = new File([g], `${f}-avatar.png`, {
                    type: "image/png"
                  }),
                  b = await (0, u.iN)("avatar", x, a);
                b && (z(b), eL())
              } catch {
                c.oR.error(a("dashboard.customize.assets.avatar_editor.errors.process"))
              } finally {
                n(l), ev(!1)
              }
            }
          };
        (0, t.useEffect)(() => {
          el && ex(e => eS(e, eh, el, ep))
        }, [el, eh, ep, eS]), (0, t.useEffect)(() => () => {
          el && URL.revokeObjectURL(el.objectUrl)
        }, [el]);
        let eP = (0, t.useMemo)(() => {
          if (!el) return null;
          let e = Math.max(340 / el.naturalWidth, 340 / el.naturalHeight) * eh;
          return {
            widthRatio: el.naturalWidth * e / 340,
            heightRatio: el.naturalHeight * e / 340
          }
        }, [el, eh]);
        (0, t.useMemo)(() => (eh - 1) / 3 * 100, [eh]), (0, t.useMemo)(() => (ep - -180) / 360 * 100, [ep]);
        let eI = (0, t.useMemo)(() => .001 > Math.abs(eh - 1), [eh]),
          eD = (0, t.useMemo)(() => .1 > Math.abs(ep), [ep]),
          e$ = async () => {
            et || (O ? (ei(!0), await (0, u.C9)(P, O, es, W) && (F("audioManager"), U(void 0), I(""), ea(""), er(null)), ei(!1)) : c.oR.error(a("dashboard.customize.audio.errors.select_file")))
          }, eO = async (e, a) => {
            await (0, u.qc)(e, a)
          }, eU = async () => {
            eo || (en(!0), await (0, u.l4)(D.id, D.currentTitle, K ?? X, W) && (F("audioManager"), $({
              id: "",
              currentTitle: ""
            }), Z(""), Q(null)), en(!1))
          }, eH = async e => {
            let a = e.currentTarget.checked;
            await (0, u.F_)(a, L)
          }, eG = async e => {
            let a = e.currentTarget.checked;
            await (0, u.I9)(a, E)
          }, eY = async (e, a, s, r) => {
            let t = e.target;
            M || r || ["svg", "path", "span"].includes(t.nodeName.toLowerCase()) && "" === t.id || await (0, u.h3)(a, s)
          }, eJ = async (e, s) => {
            let r = e.target.files?.[0];
            if (!r) {
              e.target.value = "";
              return
            }
            n({
              isLoading: !0,
              assetType: s
            }), e.target.disabled = !0;
            try {
              let t = await (0, u.iN)(s, r, a);
              t ? ("background" === s && k(t), "avatar" === s && z(t), "cursor" === s && A(t)) : e.target.value = ""
            } finally {
              e.target.disabled = !1, n(l)
            }
          }, eV = (0, t.useMemo)(() => ({
            url: h,
            avatar: y,
            custom_cursor: C
          }), [h, y, C]), eX = async e => {
            let s, r = e.target.files?.[0];
            if (!r) return;
            let t = f.nB.cover,
              i = ek(r.name).toLowerCase();
            if (!t.includes(i)) {
              c.oR.error(a("dashboard.customize.audio.errors.invalid_file")), e.target.value = "";
              return
            }
            Q(r), (s = new FileReader).onload = function(e) {
              Z(e.target.result)
            }, s.readAsDataURL(r)
          }, eZ = async e => {
            let s, r = e.target.files?.[0];
            if (!r) return;
            let t = f.nB.cover,
              i = ek(r.name).toLowerCase();
            if (!t.includes(i)) {
              c.oR.error(a("dashboard.customize.audio.errors.invalid_file")), e.target.value = "";
              return
            }
            er(r), (s = new FileReader).onload = function(e) {
              ea(e.target.result)
            }, s.readAsDataURL(r)
          };
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(j.A, {
            opened: T,
            onClose: () => S(!1),
            title: V,
            size: "550px",
            centered: !0,
            children: "audioManager" === R ? (0, r.jsxs)("div", {
              className: o().audioManager,
              children: [(Y || Array.isArray(q) && 0 !== q.length) && (0, r.jsx)("h3", {
                className: o().audioManagerDescription,
                children: a("dashboard.customize.audio.manager.description")
              }), ("string" == typeof q && "" !== q || Array.isArray(q) && 0 !== q.length) && !e.premium && (0, r.jsx)("div", {
                className: o().premiumAd,
                style: {
                  width: "100%",
                  padding: "10px",
                  boxSizing: "border-box"
                },
                children: (0, r.jsx)("span", {
                  style: {
                    fontSize: "17px"
                  },
                  children: a("dashboard.customize.audio.manager.premium_cta", {
                    premium: (0, r.jsx)("span", {
                      style: {
                        fontSize: "17px"
                      },
                      children: (0, r.jsxs)(v.A, {
                        href: "/pricing",
                        target: "_blank",
                        children: [d.premium, " ", a("dashboard.customize.premium_label")]
                      })
                    })
                  })
                })
              }), (0, r.jsxs)("div", {
                className: o().audiosWrapper,
                children: [!Y && Array.isArray(q) && 0 === q.length || !Y && !Array.isArray(q) || "string" == typeof q && "" === q ? (0, r.jsx)("h1", {
                  className: o().noAudios,
                  children: a("dashboard.customize.audio.manager.empty")
                }) : (0, r.jsx)("h1", {
                  className: o().audioAmount,
                  children: a("dashboard.customize.audio.manager.count", {
                    current: J,
                    total: G
                  })
                }), (0, r.jsx)("div", {
                  className: o().audios,
                  children: !Y && Array.isArray(q) && 0 === q.length || "string" == typeof q && "" === q ? null : Y ? (0, r.jsxs)("div", {
                    className: o().audioContainer,
                    children: [(0, r.jsxs)("div", {
                      className: o().audioContainerWrapper,
                      children: [d.audio, (0, r.jsxs)("div", {
                        className: o().audioDescription,
                        children: [(0, r.jsx)("h1", {
                          children: a("dashboard.customize.audio.single_title")
                        }), (0, r.jsx)(x, {
                          url: q
                        })]
                      })]
                    }), (0, r.jsxs)("div", {
                      className: o().buttonDiv,
                      children: [(0, r.jsx)("span", {
                        className: o().activeAudio,
                        children: a("dashboard.customize.audio.badges.active")
                      }), (0, r.jsx)("span", {
                        className: o().deleteButton,
                        onClick: () => eO("", W),
                        children: d.deleteButton
                      })]
                    })]
                  }) : Array.isArray(q) && q.map((e, s) => (0, r.jsx)(t.Fragment, {
                    children: (0, r.jsx)(b.A, {
                      content: a("dashboard.customize.audio.tooltip"),
                      hideTooltip: !!e.selected,
                      children: (0, r.jsxs)("div", {
                        className: o().audioContainer,
                        onClick: a => eY(a, e.id, W, !!e.selected),
                        children: [(0, r.jsxs)("div", {
                          className: o().audioContainerWrapper,
                          children: [e.cover && "" !== e.cover ? (0, r.jsx)("img", {
                            className: o().audioCover,
                            src: e.cover,
                            alt: "Cover"
                          }) : d.audio, (0, r.jsxs)("div", {
                            className: o().audioDescription,
                            children: [(0, r.jsx)("h1", {
                              children: e.title
                            }), (0, r.jsx)(x, {
                              url: e.url
                            })]
                          })]
                        }), (0, r.jsxs)("div", {
                          className: o().buttonDiv,
                          children: [e.selected && !M && (0, r.jsx)("span", {
                            className: o().activeAudio,
                            children: a("dashboard.customize.audio.badges.active")
                          }), (0, r.jsx)("span", {
                            className: o().editButton,
                            onClick: () => {
                              F("editAudioDetails"), $({
                                id: e.id,
                                currentTitle: e.title
                              }), Z(e.cover ?? "")
                            },
                            children: d.editButton
                          }), (0, r.jsx)("span", {
                            className: o().deleteButton,
                            onClick: () => eO(e.id, W),
                            children: d.deleteButton
                          })]
                        })]
                      })
                    })
                  }, s))
                })]
              }), (0, r.jsxs)("div", {
                className: o().audioManagerBottomWrapper,
                children: [("string" == typeof q && "" !== q || Array.isArray(q) && 0 !== q.length) && (0, r.jsxs)("div", {
                  className: o().audioManagerSettings,
                  children: [(0, r.jsxs)("div", {
                    className: o().shuffleSongs,
                    children: [(0, r.jsxs)("div", {
                      className: o().shuffleSongsDescription,
                      children: [(0, r.jsx)("h1", {
                        children: a("dashboard.customize.audio.manager.shuffle.title")
                      }), (0, r.jsx)("h3", {
                        children: a("dashboard.customize.audio.manager.shuffle.description")
                      })]
                    }), (0, r.jsx)(_.A, {
                      checked: M,
                      onChange: eH
                    })]
                  }), (0, r.jsxs)("div", {
                    className: o().audioPlayer,
                    children: [(0, r.jsxs)("div", {
                      className: o().audioPlayerDescription,
                      children: [(0, r.jsx)("h1", {
                        children: a("dashboard.customize.audio.manager.player.title")
                      }), (0, r.jsx)("h3", {
                        children: a("dashboard.customize.audio.manager.player.description")
                      })]
                    }), (0, r.jsx)(_.A, {
                      checked: B,
                      onChange: eG
                    })]
                  })]
                }), (0, r.jsxs)("span", {
                  onClick: () => {
                    F("addAudio")
                  },
                  className: o().addAudioButton,
                  children: [d.audio, " ", a("dashboard.customize.audio.manager.add_button")]
                })]
              })]
            }) : "addAudio" === R ? (0, r.jsxs)("div", {
              className: o().addAudioWrapper,
              children: [(0, r.jsxs)("div", {
                className: o().addAudio,
                children: [(0, r.jsxs)("div", {
                  className: o().audioUploadCardWrapper,
                  children: [(0, r.jsxs)("div", {
                    className: o().uploadCard,
                    style: {
                      height: "110px"
                    },
                    children: [(0, r.jsx)("div", {
                      className: o().uploadCardText,
                      children: O ? (0, r.jsxs)(r.Fragment, {
                        children: [d.audio, (0, r.jsxs)("div", {
                          className: o().fileBadge,
                          children: [(0, r.jsx)("span", {
                            children: ek(O.name).toUpperCase()
                          }), (0, r.jsx)("span", {
                            onClick: function() {
                              U(void 0), H.current && (H.current.value = "")
                            },
                            children: d.deleteFile
                          })]
                        })]
                      }) : (0, r.jsxs)(r.Fragment, {
                        children: [d.audio, (0, r.jsx)("h1", {
                          children: a("dashboard.customize.audio.add.upload_audio")
                        })]
                      })
                    }), (0, r.jsx)("input", {
                      disabled: !!O,
                      className: o().audioInput,
                      type: "file",
                      accept: w.vJ.audio.map(e => e).join(", "),
                      onChange: eN,
                      ref: H
                    })]
                  }), (0, r.jsx)("div", {
                    className: o().uploadCard,
                    style: {
                      height: "110px"
                    },
                    children: (0, r.jsx)("div", {
                      className: o().uploadCardText,
                      children: "" === ee ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)("div", {
                          className: o().uploadCardText,
                          children: [d.image, (0, r.jsx)("h1", {
                            children: a("dashboard.customize.audio.add.upload_cover")
                          })]
                        }), (0, r.jsx)("input", {
                          className: o().audioInput,
                          style: {
                            top: 0,
                            left: 0
                          },
                          type: "file",
                          accept: w.vJ.cover.map(e => e).join(", "),
                          onChange: e => {
                            eZ(e)
                          }
                        })]
                      }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)("div", {
                          className: o().fileBadge,
                          children: [(0, r.jsx)("span", {
                            children: ek(es ? es.name : ee).toUpperCase()
                          }), (0, r.jsx)("span", {
                            onClick: function() {
                              er(null), ea("")
                            },
                            children: d.deleteFile
                          })]
                        }), (0, r.jsx)("img", {
                          src: ee,
                          alt: "Cover",
                          className: o().uploadCardImage,
                          style: {
                            top: 0,
                            left: 0
                          }
                        })]
                      })
                    })
                  })]
                }), (0, r.jsx)(g.A, {
                  featureName: a("dashboard.customize.audio.add.title_label"),
                  onChangeFunction: e => {
                    I(e.target.value)
                  },
                  value: P,
                  placeholder: a("dashboard.customize.audio.add.title_placeholder"),
                  icon: d.audio
                })]
              }), (0, r.jsxs)("span", {
                className: o().addAudioButton,
                style: {
                  width: "fit-content",
                  padding: "7px 15px",
                  backgroundColor: "#151515",
                  height: "42px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8
                },
                onClick: e$,
                children: [et ? d.loading : null, et ? a("dashboard.customize.audio.add.loading") : a("dashboard.customize.audio.add.button")]
              })]
            }) : "editAudioDetails" === R && (0, r.jsxs)("div", {
              className: o().addAudioWrapper,
              children: [(0, r.jsxs)("div", {
                className: o().addAudio,
                children: [(0, r.jsx)("div", {
                  className: o().uploadCard,
                  style: {
                    height: "110px"
                  },
                  children: (0, r.jsx)("div", {
                    className: o().uploadCardText,
                    children: "" === X ? (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsxs)("div", {
                        className: o().uploadCardText,
                        children: [d.image, (0, r.jsx)("h1", {
                          children: a("dashboard.customize.audio.add.upload_cover")
                        })]
                      }), (0, r.jsx)("input", {
                        className: o().audioInput,
                        style: {
                          top: 0,
                          left: 0
                        },
                        type: "file",
                        accept: w.vJ.cover.map(e => e).join(", "),
                        onChange: e => {
                          eX(e)
                        }
                      })]
                    }) : (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsxs)("div", {
                        className: o().fileBadge,
                        children: [(0, r.jsx)("span", {
                          children: ek(K ? K.name : X).toUpperCase()
                        }), (0, r.jsx)("span", {
                          onClick: function() {
                            Z(""), Q(null)
                          },
                          children: d.deleteFile
                        })]
                      }), (0, r.jsx)("img", {
                        src: X,
                        alt: "Cover",
                        className: o().uploadCardImage,
                        style: {
                          top: 0,
                          left: 0
                        }
                      })]
                    })
                  })
                }), (0, r.jsx)(g.A, {
                  featureName: a("dashboard.customize.audio.edit.title_label"),
                  onChangeFunction: e => {
                    $({
                      id: D.id,
                      currentTitle: e.target.value
                    })
                  },
                  value: D.currentTitle,
                  placeholder: a("dashboard.customize.audio.add.title_placeholder"),
                  icon: d.audio
                })]
              }), (0, r.jsxs)("span", {
                className: o().addAudioButton,
                style: {
                  width: "fit-content",
                  padding: "7px 15px",
                  backgroundColor: "#151515",
                  height: "42px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8
                },
                onClick: eU,
                children: [eo ? d.loading : null, eo ? a("dashboard.customize.audio.edit.loading") : a("dashboard.customize.audio.edit.button")]
              })]
            })
          }), (0, r.jsx)(j.A, {
            opened: ed,
            onClose: eL,
            title: a("dashboard.customize.assets.avatar_editor.title"),
            size: "min(680px, 96vw)",
            centered: !0,
            bodyClassName: o().avatarCropperModalBody,
            children: (0, r.jsxs)("div", {
              className: o().avatarCropperModal,
              children: [(0, r.jsxs)("div", {
                ref: ej,
                className: o().avatarCropperStage,
                onPointerDown: e => {
                  el && ((e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId), e_.current[e.pointerId] = {
                    x: e.clientX,
                    y: e.clientY
                  }, Object.values(e_.current).length >= 2) ? eF() : ew.current = {
                    mode: "pan",
                    panPointerId: e.pointerId,
                    startX: e.clientX,
                    startY: e.clientY,
                    startOffset: ef,
                    pinchDistance: 0,
                    pinchAngle: 0,
                    pinchCenter: {
                      x: 0,
                      y: 0
                    },
                    pinchStartZoom: eh,
                    pinchStartRotation: ep,
                    pinchStartOffset: ef
                  })
                },
                onPointerMove: e => {
                  if (!el || !(e.pointerId in e_.current)) return;
                  e_.current[e.pointerId] = {
                    x: e.clientX,
                    y: e.clientY
                  };
                  let a = Object.values(e_.current),
                    s = ew.current;
                  if (a.length >= 2) {
                    "pinch" !== s.mode && eF();
                    let r = ew.current,
                      t = eC(a[0], a[1]),
                      i = eA(a[0], a[1]),
                      o = eT(a[0], a[1]),
                      n = r.pinchDistance > 0 ? t / r.pinchDistance : 1,
                      l = ey(r.pinchStartZoom * n, 1, 4),
                      c = ez(r.pinchStartRotation + ez(i - r.pinchAngle)),
                      d = 340 / (e.currentTarget.clientWidth > 0 ? e.currentTarget.clientWidth : 340),
                      u = eS({
                        x: r.pinchStartOffset.x + (o.x - r.pinchCenter.x) * d,
                        y: r.pinchStartOffset.y + (o.y - r.pinchCenter.y) * d
                      }, l, el, c);
                    em(l), eg(c), ex(u);
                    return
                  }
                  "pan" !== s.mode || s.panPointerId !== e.pointerId || ex(eS({
                    x: s.startOffset.x + (e.clientX - s.startX) * (340 / (e.currentTarget.clientWidth > 0 ? e.currentTarget.clientWidth : 340)),
                    y: s.startOffset.y + (e.clientY - s.startY) * (340 / (e.currentTarget.clientWidth > 0 ? e.currentTarget.clientWidth : 340))
                  }, eh, el, ep))
                },
                onPointerUp: eq,
                onPointerCancel: eq,
                onLostPointerCapture: eq,
                onWheel: e => {
                  if (!el) return;
                  if (e.preventDefault(), e.shiftKey) {
                    let a = ez(ep + (e.deltaY < 0 ? 2 : -2));
                    eg(a), ex(e => eS(e, eh, el, a));
                    return
                  }
                  let a = ey(eh + (e.deltaY < 0 ? .09 : -.09), 1, 4);
                  em(a), ex(e => eS(e, a, el, ep))
                },
                children: [el && eP && (0, r.jsx)("img", {
                  src: el.objectUrl,
                  alt: a("dashboard.customize.assets.avatar_editor.alt_preview"),
                  className: o().avatarCropperImage,
                  style: {
                    width: `${100*eP.widthRatio}%`,
                    height: `${100*eP.heightRatio}%`,
                    left: `calc(50% + ${ef.x/340*100}%)`,
                    top: `calc(50% + ${ef.y/340*100}%)`,
                    transform: `translate(-50%, -50%) rotate(${ep}deg)`
                  },
                  draggable: !1
                }), (0, r.jsx)("div", {
                  className: o().avatarCropperGrid
                }), (0, r.jsx)("div", {
                  className: o().avatarCropperMask
                })]
              }), (0, r.jsxs)("p", {
                className: o().avatarCropperHint,
                children: [(0, r.jsx)("span", {
                  className: o().avatarCropperHintDesktop,
                  children: a("dashboard.customize.assets.avatar_editor.hints.desktop")
                }), (0, r.jsx)("span", {
                  className: o().avatarCropperHintMobile,
                  children: a("dashboard.customize.assets.avatar_editor.hints.mobile")
                })]
              }), (0, r.jsxs)("div", {
                className: o().avatarCropperBottom,
                children: [(0, r.jsxs)("div", {
                  className: o().avatarCropperSliderGroup,
                  children: [(0, r.jsxs)("div", {
                    className: o().avatarCropperSliderLabel,
                    children: [(0, r.jsx)("span", {
                      children: a("dashboard.customize.assets.avatar_editor.controls.zoom")
                    }), (0, r.jsxs)("div", {
                      className: o().avatarCropperSliderMeta,
                      children: [(0, r.jsx)("button", {
                        type: "button",
                        className: o().avatarCropperInlineReset,
                        onClick: () => {
                          em(1), ex(e => eS(e, 1, el, ep))
                        },
                        disabled: eI,
                        children: a("dashboard.customize.assets.avatar_editor.controls.reset")
                      }), (0, r.jsxs)("strong", {
                        children: [eh.toFixed(2), "x"]
                      })]
                    })]
                  }), (0, r.jsx)("div", {
                    className: o().avatarCropperZoomSlider,
                    children: (0, r.jsx)(N.A, {
                      min: 1,
                      max: 4,
                      step: .01,
                      value: eh,
                      onChange: e => {
                        let a = Number(e.currentTarget.value);
                        em(a), ex(e => eS(e, a, el, ep))
                      }
                    })
                  })]
                }), (0, r.jsxs)("div", {
                  className: o().avatarCropperSliderGroup,
                  children: [(0, r.jsxs)("div", {
                    className: o().avatarCropperSliderLabel,
                    children: [(0, r.jsx)("span", {
                      children: a("dashboard.customize.assets.avatar_editor.controls.rotation")
                    }), (0, r.jsxs)("div", {
                      className: o().avatarCropperSliderMeta,
                      children: [(0, r.jsx)("button", {
                        type: "button",
                        className: o().avatarCropperInlineReset,
                        onClick: () => {
                          eg(0), ex(e => eS(e, eh, el, 0))
                        },
                        disabled: eD,
                        children: a("dashboard.customize.assets.avatar_editor.controls.reset")
                      }), (0, r.jsxs)("strong", {
                        children: [Math.round(ep), " ", a("dashboard.customize.assets.avatar_editor.controls.rotation_unit")]
                      })]
                    })]
                  }), (0, r.jsx)("div", {
                    className: o().avatarCropperRotationSlider,
                    children: (0, r.jsx)(N.A, {
                      min: -180,
                      max: 180,
                      step: 1,
                      value: ep,
                      onChange: e => {
                        let a = ez(Number(e.currentTarget.value));
                        eg(a), ex(e => eS(e, eh, el, a))
                      }
                    })
                  })]
                }), (0, r.jsxs)("div", {
                  className: o().avatarCropperActions,
                  children: [(0, r.jsx)("button", {
                    type: "button",
                    className: o().avatarCropperSecondaryButton,
                    onClick: eL,
                    children: a("dashboard.customize.assets.avatar_editor.actions.cancel")
                  }), (0, r.jsxs)("button", {
                    type: "button",
                    className: o().avatarCropperPrimaryButton,
                    onClick: eW,
                    children: [eb ? d.loading : null, eb ? a("dashboard.customize.assets.avatar_editor.actions.saving") : a("dashboard.customize.assets.avatar_editor.actions.apply")]
                  })]
                })]
              })]
            })
          }), (0, r.jsx)(p, {
            label: a("dashboard.customize.assets.background"),
            value: eV.url,
            accept: w.vJ.background.map(e => e).join(", "),
            isLoading: i.isLoading && "background" === i.assetType,
            onFileChange: e => eJ(e, "background"),
            fileType: "background",
            setAsset: k
          }), (0, r.jsxs)("div", {
            className: o().uploadCardWrapper,
            children: [(0, r.jsx)("span", {
              children: a("dashboard.customize.assets.audio")
            }), (0, r.jsx)("div", {
              className: o().uploadCard,
              onClick: () => {
                F("audioManager"), S(!0)
              },
              children: (0, r.jsxs)("div", {
                className: o().uploadCardText,
                children: [d.audioManager, (0, r.jsx)("h1", {
                  children: a("dashboard.customize.assets.audio_open_manager")
                })]
              })
            })]
          }), (0, r.jsx)(p, {
            label: a("dashboard.customize.assets.avatar"),
            value: eV.avatar,
            accept: w.vJ.avatar.map(e => e).join(", "),
            isLoading: i.isLoading && "avatar" === i.assetType,
            onFileChange: eR,
            fileType: "avatar",
            setAsset: z
          }), (0, r.jsx)(p, {
            label: a("dashboard.customize.assets.cursor"),
            value: eV.custom_cursor,
            accept: w.vJ.cursor.map(e => e).join(", "),
            isLoading: i.isLoading && "cursor" === i.assetType,
            onFileChange: e => eJ(e, "cursor"),
            fileType: "cursor",
            setAsset: A
          })]
        })
      };
      var y = s(60141);
      async function z(e, a) {
        try {
          let s = await fetch("https://guns.lol/api/dashboard/customize/usernameEffects", {
              method: "POST",
              body: JSON.stringify({
                username_effects: e
              })
            }),
            r = await s.json();
          s.ok ? (c.oR.success("Successfully saved username effects."), a()) : c.oR.error(r.error)
        } catch (e) {
          console.error(e.message)
        }
      }
      var C = s(41609),
        A = s.n(C),
        T = s(16053),
        S = s(57157),
        M = s(81469),
        L = s(61861),
        B = s(98500),
        E = s.n(B);
      let R = ({
        description: e,
        setDescription: a,
        discordPresence: s,
        setDiscordPresence: i,
        backgroundEffects: n,
        setBackgroundEffects: l,
        opacity: u,
        setOpacity: h,
        usernameEffects: p,
        blur: f,
        setBlur: x,
        usernameGlow: b,
        setUsernameGlow: _,
        badgeGlow: w,
        setBadgeGlow: k,
        socialGlow: C,
        setSocialGlow: B,
        userData: R,
        locationMarker: F,
        setLocation: q
      }) => {
        let W = (0, m.kj)(),
          [P, I] = (0, t.useState)(""),
          D = {
            usernameEffects: W("dashboard.customize.general.username_effects.modal_title"),
            discordPresenceSettings: W("dashboard.customize.general.discord_presence.modal_title")
          },
          [$, O] = (0, t.useState)(!1),
          [U, H] = (0, t.useState)(""),
          [G, Y] = (0, t.useState)(R.config.discord_presence_settings || {
            show_badges: !0,
            show_guild_tag: !0,
            idle_text: ""
          }),
          J = "" !== R.config.display_name ? R.config.display_name : R.username,
          V = R.premium,
          X = R.config.opacity ?? 1,
          Z = R.config.profile_gradient ? {
            backgroundColor: (0, T.E2)(R.config.color, X),
            backgroundImage: `linear-gradient(25deg, ${(0,T.E2)(R.config.gradient_1,X)}, ${(0,T.E2)(R.config.gradient_2,X)})`,
            color: R.config.text_color
          } : {
            backgroundColor: (0, T.E2)(R.config.color, X),
            color: R.config.text_color
          },
          K = [{
            value: "none",
            label: W("dashboard.customize.general.background_effects.none")
          }, {
            value: "dither",
            label: W("dashboard.customize.general.background_effects.dither", {
              premium: V ? "" : W("dashboard.customize.general.premium_only")
            }),
            disabled: !V
          }, {
            value: "plasma",
            label: W("dashboard.customize.general.background_effects.plasma", {
              premium: V ? "" : W("dashboard.customize.general.premium_only")
            }),
            disabled: !V
          }, {
            value: "aurora",
            label: W("dashboard.customize.general.background_effects.aurora")
          }, {
            value: "snowflakes",
            label: W("dashboard.customize.general.background_effects.snowflakes")
          }, {
            value: "rain",
            label: W("dashboard.customize.general.background_effects.rain")
          }, {
            value: "blurred",
            label: W("dashboard.customize.general.background_effects.blurred")
          }, {
            value: "night",
            label: W("dashboard.customize.general.background_effects.night")
          }, {
            value: "tv",
            label: W("dashboard.customize.general.background_effects.tv")
          }],
          Q = [{
            value: "enabled",
            label: W("dashboard.customize.general.discord_presence.enabled")
          }, {
            value: "disabled",
            label: W("dashboard.customize.general.discord_presence.disabled")
          }],
          ee = (0, t.useMemo)(() => [{
            value: .2,
            label: W("dashboard.customize.general.sliders.opacity.marks.twenty")
          }, {
            value: .5,
            label: W("dashboard.customize.general.sliders.opacity.marks.fifty")
          }, {
            value: .8,
            label: W("dashboard.customize.general.sliders.opacity.marks.eighty")
          }], [W]),
          ea = (0, t.useMemo)(() => [{
            value: 20,
            label: W("dashboard.customize.general.sliders.blur.marks.twenty")
          }, {
            value: 50,
            label: W("dashboard.customize.general.sliders.blur.marks.fifty")
          }, {
            value: 80,
            label: W("dashboard.customize.general.sliders.blur.marks.eighty")
          }], [W]),
          es = {
            none: "none",
            rgb: "rainbow",
            rainbow: "rainbow",
            black: "sparkle_black",
            blue: "sparkle_blue",
            green: "sparkle_green",
            pink: "sparkle_pink",
            red: "sparkle_red",
            white: "sparkle_white",
            yellow: "sparkle_yellow",
            sparkle_black: "sparkle_black",
            sparkle_blue: "sparkle_blue",
            sparkle_green: "sparkle_green",
            sparkle_pink: "sparkle_pink",
            sparkle_red: "sparkle_red",
            sparkle_white: "sparkle_white",
            sparkle_yellow: "sparkle_yellow",
            typewriter: "typewriter",
            fuzzy: "fuzzy",
            shuffle: "shuffle"
          },
          er = (0, t.useMemo)(() => [{
            urlName: "typewriter",
            image: !1,
            name: W("dashboard.customize.general.username_effects.list.typewriter"),
            premium: !0
          }, {
            urlName: "rainbow",
            image: !1,
            name: W("dashboard.customize.general.username_effects.list.rainbow"),
            premium: !1
          }, {
            urlName: "fuzzy",
            image: !1,
            name: W("dashboard.customize.general.username_effects.list.fuzzy"),
            premium: !1
          }, {
            urlName: "shuffle",
            image: !1,
            name: W("dashboard.customize.general.username_effects.list.shuffle"),
            premium: !1
          }, {
            urlName: "sparkle_black",
            image: !0,
            name: W("dashboard.customize.general.username_effects.list.sparkle_black"),
            premium: !1
          }, {
            urlName: "sparkle_blue",
            image: !0,
            name: W("dashboard.customize.general.username_effects.list.sparkle_blue"),
            premium: !1
          }, {
            urlName: "sparkle_green",
            image: !0,
            name: W("dashboard.customize.general.username_effects.list.sparkle_green"),
            premium: !1
          }, {
            urlName: "sparkle_pink",
            image: !0,
            name: W("dashboard.customize.general.username_effects.list.sparkle_pink"),
            premium: !1
          }, {
            urlName: "sparkle_red",
            image: !0,
            name: W("dashboard.customize.general.username_effects.list.sparkle_red"),
            premium: !1
          }, {
            urlName: "sparkle_white",
            image: !0,
            name: W("dashboard.customize.general.username_effects.list.sparkle_white"),
            premium: !1
          }, {
            urlName: "sparkle_yellow",
            image: !0,
            name: W("dashboard.customize.general.username_effects.list.sparkle_yellow"),
            premium: !1
          }], [W]),
          et = (0, t.useMemo)(() => ({
            rainbow: W("dashboard.customize.general.username_effects.samples.rainbow"),
            typewriter: W("dashboard.customize.general.username_effects.samples.typewriter"),
            fuzzy: W("dashboard.customize.general.username_effects.samples.fuzzy"),
            shuffle: W("dashboard.customize.general.username_effects.samples.shuffle")
          }), [W]);
        (0, t.useEffect)(() => {
          if ("" !== p) {
            let e = es[p],
              a = er.find(a => a.urlName === e),
              s = !!a && a.premium;
            H({
              urlName: e,
              name: a?.name,
              premium: s,
              image: a?.image
            })
          }
        }, [p, er]);
        let ei = (e, a, s, r) => {
            H({
              urlName: e,
              name: a,
              premium: s,
              image: r
            })
          },
          eo = () => {
            z(U.urlName, close)
          },
          en = e => {
            "username" === e ? _(!b) : "socials" === e ? B(!C) : "badges" === e && k(!w)
          },
          el = async () => {
            let e = await fetch("https://guns.lol/api/dashboard/customize/discordPresenceSettings", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(G)
              }),
              a = await e.json();
            e.ok ? (c.oR.success(a.message), O(!1)) : c.oR.error(a.error)
          };
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(j.A, {
            opened: $,
            onClose: () => O(!1),
            centered: !0,
            size: "discordPresenceSettings" === P ? "400px" : "auto",
            title: D[P],
            bodyClassName: "usernameEffects" === P ? o().usernameEffectsModalBody : void 0,
            children: "usernameEffects" === P ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsxs)("div", {
                className: o().usernameEffectsModalContent,
                children: [(0, r.jsxs)("div", {
                  className: o().usernameEffects,
                  children: [(0, r.jsxs)("div", {
                    className: o().usernameEffectsSelection,
                    children: [(0, r.jsx)("div", {
                      className: `${o().usernameEffect} ${"none"===U.urlName&&o().selectedEffect}`,
                      onClick: () => ei("none", W("dashboard.customize.general.username_effects.none"), !1, !1),
                      children: (0, r.jsxs)("div", {
                        className: o().noUsernameEffect,
                        children: [d.none, (0, r.jsx)("span", {
                          children: W("dashboard.customize.general.username_effects.none")
                        })]
                      })
                    }), er.map((e, a) => (0, r.jsxs)("div", {
                      className: `${o().usernameEffect} ${U.urlName===e.urlName&&o().selectedEffect}`,
                      onClick: () => ei(e.urlName, e.name, e.premium, e.image),
                      children: [e.premium && (0, r.jsx)("div", {
                        className: o().premiumOnly,
                        children: R.premium ? d.premium : d.lock
                      }), e.image ? (0, r.jsx)("img", {
                        src: `https://assets.guns.lol/${e.urlName}.gif`,
                        alt: "Username effect preview"
                      }) : "rainbow" === e.urlName ? (0, r.jsx)("h1", {
                        className: o().rainbowName,
                        children: et.rainbow
                      }) : "typewriter" === e.urlName ? (0, r.jsx)(A(), {
                        options: {
                          strings: et.typewriter,
                          autoStart: !0,
                          loop: !0,
                          pauseFor: 1e3,
                          stringSplitter: T.dz
                        }
                      }) : "fuzzy" === e.urlName ? (0, r.jsx)(L.A, {
                        username: et.fuzzy,
                        usernameEffect: "fuzzy",
                        textColor: "#fafafa",
                        fontSize: "22px"
                      }) : "shuffle" === e.urlName && (0, r.jsx)(L.A, {
                        username: et.shuffle,
                        usernameEffect: "shuffle",
                        textColor: "#fafafa",
                        fontSize: "22px"
                      })]
                    }, a))]
                  }), (0, r.jsx)("div", {
                    className: o().usernameEffectsPreview,
                    children: (0, r.jsxs)("div", {
                      className: o().usernameEffectsPreviewInnerWrapper,
                      children: [(0, r.jsx)("div", {
                        className: o().userBackground,
                        style: Z,
                        children: U.image ? (0, r.jsx)("h1", {
                          className: o().usernameEffectPreviewTitle,
                          style: {
                            backgroundImage: "" !== U ? `url(https://assets.guns.lol/${U.urlName}.gif)` : ""
                          },
                          children: J
                        }) : "rainbow" === U.urlName ? (0, r.jsx)("h1", {
                          className: o().rainbowName,
                          children: J
                        }) : "typewriter" === U.urlName ? (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)("style", {
                            children: `.${o().userBackground} .Typewriter {
                                                        font-size: 22px;
                                                        margin: 21px 0;
                                                    }
                                                    `
                          }), (0, r.jsx)(A(), {
                            options: {
                              strings: J,
                              autoStart: !0,
                              loop: !0,
                              stringSplitter: T.dz
                            }
                          })]
                        }) : "fuzzy" === U.urlName ? (0, r.jsx)(L.A, {
                          username: J,
                          usernameEffect: "fuzzy",
                          textColor: R.config.text_color,
                          fontSize: "23px"
                        }) : "shuffle" === U.urlName ? (0, r.jsx)(L.A, {
                          username: J,
                          usernameEffect: "shuffle",
                          textColor: R.config.text_color,
                          fontSize: "24px"
                        }) : (0, r.jsx)("h1", {
                          children: J
                        })
                      }), "none" === U.urlName ? (0, r.jsxs)("div", {
                        className: o().usernameEffectSelected,
                        children: [(0, r.jsx)("h1", {
                          children: W("dashboard.customize.general.username_effects.preview.no_effect_title")
                        }), (0, r.jsx)("span", {
                          children: W("dashboard.customize.general.username_effects.preview.no_effect_description")
                        })]
                      }) : "" !== U && (0, r.jsxs)("div", {
                        className: o().usernameEffectSelected,
                        children: [(0, r.jsx)("h1", {
                          children: U.name
                        }), (0, r.jsx)("span", {
                          children: W("dashboard.customize.general.username_effects.preview.description", {
                            type: U.premium ? (0, r.jsx)("span", {
                              className: o().premiumTextGradient,
                              children: W("dashboard.customize.general.username_effects.preview.premium_label")
                            }) : W("dashboard.customize.general.username_effects.preview.free_label")
                          })
                        })]
                      })]
                    })
                  })]
                }), (0, r.jsxs)("div", {
                  className: o().usernameEffectsButtonsMobile,
                  children: [(0, r.jsx)("span", {
                    className: o().saveButtonUsernameEffects,
                    onClick: () => O(!1),
                    children: W("dashboard.customize.general.username_effects.preview.buttons.cancel")
                  }), U.premium && !R.premium ? (0, r.jsx)(v.A, {
                    href: "/pricing",
                    target: "_blank",
                    children: W("dashboard.customize.general.username_effects.preview.buttons.buy")
                  }) : (0, r.jsx)("span", {
                    className: o().saveButtonUsernameEffects,
                    onClick: eo,
                    children: W("dashboard.customize.general.username_effects.preview.buttons.save")
                  })]
                })]
              }), (0, r.jsx)("div", {
                className: o().usernameEffectsModalFooter,
                children: (0, r.jsxs)("div", {
                  className: o().usernameEffectsButtons,
                  children: [(0, r.jsx)("span", {
                    className: o().saveButtonUsernameEffects,
                    onClick: () => O(!1),
                    children: W("dashboard.customize.general.username_effects.preview.buttons.cancel")
                  }), U.premium && !R.premium ? (0, r.jsx)(v.A, {
                    href: "/pricing",
                    target: "_blank",
                    children: W("dashboard.customize.general.username_effects.preview.buttons.buy")
                  }) : (0, r.jsx)("span", {
                    className: o().saveButtonUsernameEffects,
                    onClick: eo,
                    children: W("dashboard.customize.general.username_effects.preview.buttons.save")
                  })]
                })
              })]
            }) : "discordPresenceSettings" === P && ("enabled" === s ? (0, r.jsxs)("div", {
              className: o().discordPresenceSettingsContainer,
              children: [(0, r.jsxs)("div", {
                className: o().discordPresenceSettingsSwitchWrapperContainer,
                children: [(0, r.jsx)(M.A, {
                  featureName: W("dashboard.customize.general.discord_presence.show_badges"),
                  checked: G.show_badges,
                  onChangeFunction: e => Y({
                    ...G,
                    show_badges: e.currentTarget.checked
                  })
                }), (0, r.jsx)(M.A, {
                  featureName: W("dashboard.customize.general.discord_presence.show_guild_tag"),
                  checked: G.show_guild_tag,
                  onChangeFunction: e => Y({
                    ...G,
                    show_guild_tag: e.currentTarget.checked
                  })
                })]
              }), (0, r.jsx)(g.A, {
                icon: d.idleText,
                featureName: W("dashboard.customize.general.discord_presence.idle_text_label"),
                value: G.idle_text,
                onChangeFunction: e => Y({
                  ...G,
                  idle_text: e.target.value
                }),
                placeholder: W("dashboard.customize.general.discord_presence.idle_text_placeholder")
              }), (0, r.jsx)("span", {
                className: o().saveDiscordPresenceSettingsButton,
                onClick: el,
                children: W("dashboard.customize.general.discord_presence.save_button")
              })]
            }) : (0, r.jsx)("h1", {
              className: o().discordPresenceSettingsDisabled,
              children: W("dashboard.customize.general.discord_presence.enable_notice")
            }))
          }), (0, r.jsxs)("div", {
            className: o().generalComponentContainer,
            children: [(0, r.jsxs)("div", {
              className: o().generalComponentLeft,
              children: [(0, r.jsxs)("div", {
                className: o().featureRow,
                children: [R.config.premium.typewriter_enabled && 0 === R.config.premium.typewriter.length || !R.config.premium.typewriter_enabled ? (0, r.jsx)(g.A, {
                  featureName: W("dashboard.customize.general.description.label"),
                  value: e,
                  onChangeFunction: e => {
                    a(e.target.value)
                  },
                  placeholder: W("dashboard.customize.general.description.placeholder"),
                  icon: d.description
                }) : (0, r.jsxs)("div", {
                  className: o().descriptionWrapper,
                  children: [(0, r.jsx)("h1", {
                    className: o().description,
                    children: W("dashboard.customize.general.description.label")
                  }), (0, r.jsx)("div", {
                    className: o().descriptionText,
                    children: (0, r.jsx)("h1", {
                      children: W("dashboard.customize.general.description.typewriter_enabled", {
                        link: (0, r.jsx)(E(), {
                          href: "/premium",
                          target: "_blank",
                          children: W("dashboard.customize.premium_label")
                        })
                      })
                    })
                  })]
                }), R.discord || !R.discord && "enabled" === R.config.presence ? (0, r.jsxs)("div", {
                  className: o().discordPresenceSelectWrapper,
                  children: [(0, r.jsx)(y.A, {
                    data: Q,
                    featureName: W("dashboard.customize.general.discord_presence.field_label"),
                    value: s,
                    onChangeFunction: i,
                    placeholder: W("dashboard.customize.general.select_placeholder"),
                    icon: d.discordPresence
                  }), (0, r.jsx)("span", {
                    className: o().discordPresenceSettings,
                    onClick: () => {
                      I("discordPresenceSettings"), O(!0)
                    },
                    children: d.settings
                  })]
                }) : (0, r.jsxs)("div", {
                  className: o().discordPresenceWrapper,
                  children: [(0, r.jsx)("h1", {
                    className: o().discordPresence,
                    children: W("dashboard.customize.general.discord_presence.field_label")
                  }), (0, r.jsx)("div", {
                    className: o().discordPresenceConnect,
                    children: (0, r.jsx)("h1", {
                      children: W("dashboard.customize.general.discord_presence.connect_description", {
                        link: (0, r.jsxs)(E(), {
                          href: "/account",
                          children: [d.lock, " ", W("dashboard.customize.general.discord_presence.connect_link")]
                        })
                      })
                    })
                  })]
                })]
              }), (0, r.jsxs)("div", {
                className: o().featureRow,
                children: [(0, r.jsx)(y.A, {
                  data: K,
                  featureName: W("dashboard.customize.general.background_effects_field"),
                  value: n,
                  onChangeFunction: l,
                  placeholder: W("dashboard.customize.general.select_placeholder"),
                  icon: d.backgroundEffects
                }), (0, r.jsxs)("div", {
                  className: o().usernameEffectsWrapper,
                  children: [(0, r.jsx)("h1", {
                    className: o().usernameEffectsText,
                    children: W("dashboard.customize.general.username_effects.section_title")
                  }), (0, r.jsxs)("span", {
                    className: o().usernameEffectsButton,
                    onClick: () => {
                      I("usernameEffects"), O(!0)
                    },
                    children: [d.backgroundEffects, " ", W("dashboard.customize.general.username_effects.button_label")]
                  })]
                })]
              })]
            }), (0, r.jsxs)("div", {
              className: o().generalComponentRight,
              children: [(0, r.jsxs)("div", {
                className: `${o().featureRow} ${o().sliderDiv}`,
                children: [(0, r.jsx)(S.A, {
                  featureName: W("dashboard.customize.general.sliders.opacity.title"),
                  helpDescription: W("dashboard.customize.general.sliders.opacity.description"),
                  element: (0, r.jsx)(N.A, {
                    value: u,
                    onChangeFunction: h,
                    step: .01,
                    max: 1,
                    min: 0,
                    label: e => `${Math.floor(100*e)}%`,
                    marks: ee
                  })
                }), (0, r.jsx)(S.A, {
                  featureName: W("dashboard.customize.general.sliders.blur.title"),
                  helpDescription: W("dashboard.customize.general.sliders.blur.description"),
                  element: (0, r.jsx)(N.A, {
                    value: f,
                    onChangeFunction: x,
                    step: 1,
                    max: 100,
                    min: 0,
                    label: e => `${e}px`,
                    marks: ea
                  })
                })]
              }), (0, r.jsxs)("div", {
                className: o().featureRow,
                children: [(0, r.jsx)(g.A, {
                  featureName: W("dashboard.customize.general.location.label"),
                  value: F,
                  onChangeFunction: e => {
                    q(e.target.value)
                  },
                  placeholder: W("dashboard.customize.general.location.placeholder"),
                  icon: d.locationMarker
                }), (0, r.jsx)(S.A, {
                  featureName: W("dashboard.customize.general.glow.title"),
                  helpDescription: W("dashboard.customize.general.glow.description"),
                  element: (0, r.jsx)("div", {
                    className: o().glowSettings,
                    children: (0, r.jsxs)("div", {
                      className: o().glowSettingsInner,
                      children: [(0, r.jsxs)("div", {
                        className: `${o().glowSetting} ${b&&o().glowSettingEnabled}`,
                        onClick: () => en("username"),
                        children: [d.glow, " ", W("dashboard.customize.general.glow.username")]
                      }), (0, r.jsxs)("div", {
                        className: `${o().glowSetting} ${C&&o().glowSettingEnabled}`,
                        onClick: () => en("socials"),
                        children: [d.glow, " ", W("dashboard.customize.general.glow.socials")]
                      }), (0, r.jsxs)("div", {
                        className: `${o().glowSetting} ${w&&o().glowSettingEnabled}`,
                        onClick: () => en("badges"),
                        children: [d.glow, " ", W("dashboard.customize.general.glow.badges")]
                      })]
                    })
                  })
                })]
              })]
            })]
          })]
        })
      };
      var F = s(9992),
        q = s(30184);
      let W = new Set(["dither", "plasma", "aurora", "snowflakes", "rain", "blurred", "night", "tv"]),
        P = ({
          accentColor: e,
          setAccentColor: a,
          textColor: s,
          setTextColor: t,
          backgroundColor: i,
          setBackgroundColor: n,
          gradientPrimary: l,
          setGradientPrimary: c,
          gradientSecondary: d,
          setGradientSecondary: u,
          isGradientEnabled: h,
          setGradientEnabled: p,
          setIconColor: g,
          iconColor: f,
          backgroundEffects: x,
          backgroundEffectsColor: b,
          setBackgroundEffectsColor: v
        }) => {
          let j = (0, m.kj)(),
            _ = W.has(x);
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)("div", {
              className: o().generalComponentContainer,
              children: [(0, r.jsxs)("div", {
                className: o().generalComponentLeft,
                children: [(0, r.jsxs)("div", {
                  className: o().featureRow,
                  children: [(0, r.jsx)(q.A, {
                    featureName: j("dashboard.customize.color.fields.accent"),
                    onChangeFunction: a,
                    value: e,
                    placeholder: j("dashboard.customize.color.placeholder")
                  }), (0, r.jsx)(q.A, {
                    featureName: j("dashboard.customize.color.fields.text"),
                    onChangeFunction: t,
                    value: s,
                    placeholder: j("dashboard.customize.color.placeholder")
                  })]
                }), (0, r.jsxs)("div", {
                  className: o().featureRow,
                  children: [(0, r.jsx)(q.A, {
                    featureName: j("dashboard.customize.color.fields.background"),
                    onChangeFunction: n,
                    value: i,
                    placeholder: j("dashboard.customize.color.placeholder")
                  }), (0, r.jsx)(q.A, {
                    featureName: j("dashboard.customize.color.fields.icon"),
                    onChangeFunction: g,
                    value: f,
                    placeholder: j("dashboard.customize.color.placeholder")
                  })]
                }), _ && (0, r.jsx)("div", {
                  className: o().featureRow,
                  children: (0, r.jsx)(q.A, {
                    featureName: j("dashboard.customize.color.fields.background_effect"),
                    onChangeFunction: v,
                    value: b,
                    placeholder: j("dashboard.customize.color.placeholder")
                  })
                })]
              }), (0, r.jsxs)("div", {
                className: o().generalComponentRight,
                children: [(0, r.jsx)("span", {
                  className: h ? o().gradientButtonEnabled : o().gradientButtonDisabled,
                  onClick: function() {
                    h ? p(!1) : p(!0)
                  },
                  children: j(h ? "dashboard.customize.color.gradient.disable_button" : "dashboard.customize.color.gradient.enable_button")
                }), h && (0, r.jsxs)("div", {
                  className: o().featureRow,
                  children: [(0, r.jsx)(q.A, {
                    featureName: j("dashboard.customize.color.gradient.primary"),
                    onChangeFunction: c,
                    value: l,
                    placeholder: j("dashboard.customize.color.placeholder")
                  }), (0, r.jsx)(q.A, {
                    featureName: j("dashboard.customize.color.gradient.secondary"),
                    onChangeFunction: u,
                    value: d,
                    placeholder: j("dashboard.customize.color.placeholder")
                  })]
                })]
              })]
            })
          })
        },
        I = ({
          discordAvatar: e,
          setDiscordAvatar: a,
          monochromeIcons: s,
          setMonochromeIcons: t,
          animatedTitle: i,
          setAnimatedTitle: n,
          volumeControl: l,
          setVolumeControl: c,
          swapColors: d,
          setSwapColors: u,
          discordAvatarDecoration: h,
          setDiscordAvatarDecoration: p
        }) => {
          let g = (0, m.kj)();
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)("div", {
              className: o().generalComponentContainer,
              children: (0, r.jsxs)("div", {
                className: `${o().generalComponentLeft} ${o().otherComponent} ${o().otherComponentWrapper}`,
                children: [(0, r.jsxs)("div", {
                  className: `${o().featureRow} ${o().otherComponent}`,
                  children: [(0, r.jsx)(S.A, {
                    featureName: g("dashboard.customize.other.monochrome_icons.label"),
                    helpDescription: g("dashboard.customize.other.monochrome_icons.description"),
                    element: (0, r.jsx)(M.A, {
                      checked: s,
                      onChangeFunction: e => t(e.currentTarget.checked)
                    })
                  }), (0, r.jsx)(M.A, {
                    featureName: g("dashboard.customize.other.animated_title"),
                    checked: i,
                    onChangeFunction: e => n(e.currentTarget.checked)
                  }), (0, r.jsx)(S.A, {
                    featureName: g("dashboard.customize.other.swap_box_colors.label"),
                    helpDescription: g("dashboard.customize.other.swap_box_colors.description"),
                    element: (0, r.jsx)(M.A, {
                      checked: d,
                      onChangeFunction: e => u(e.currentTarget.checked)
                    })
                  })]
                }), (0, r.jsxs)("div", {
                  className: `${o().featureRow} ${o().otherComponent}`,
                  children: [(0, r.jsx)(M.A, {
                    featureName: g("dashboard.customize.other.volume_control"),
                    checked: l,
                    onChangeFunction: e => c(e.currentTarget.checked)
                  }), (0, r.jsx)(M.A, {
                    featureName: g("dashboard.customize.other.use_discord_avatar"),
                    checked: e,
                    onChangeFunction: e => a(e.currentTarget.checked)
                  }), (0, r.jsx)(M.A, {
                    featureName: g("dashboard.customize.other.discord_avatar_decoration"),
                    checked: h,
                    onChangeFunction: e => p(e.currentTarget.checked)
                  })]
                })]
              })
            })
          })
        };
      var D = s(54834);
      async function $(e, a, s, r, t) {
        try {
          a(D.A.loading);
          let i = /^#[0-9a-fA-F]{6}$/.test(e.background_effects_color ?? ""),
            o = await fetch("https://guns.lol/api/dashboard/customize", {
              method: "POST",
              body: JSON.stringify({
                color: e.color,
                text_color: e.text_color,
                bg_color: e.bg_color,
                icon_color: e.icon_color,
                gradient_1: e.gradient_1,
                gradient_2: e.gradient_2,
                profile_gradient: e.profile_gradient,
                description: e.description,
                presence: e.presence,
                background_effects: e.background_effects,
                background_effects_color: i ? e.background_effects_color : "#000000",
                opacity: e.opacity,
                blur: e.blur,
                username_glow: e.username_glow,
                social_glow: e.social_glow ?? !0,
                badge_glow: e.badge_glow,
                use_discord_avatar: e.use_discord_avatar,
                monochrome: e.monochrome,
                animated_title: e.animated_title,
                volume_control: e.volume_control,
                swap_colors: e.swap_colors,
                location: e.location ?? "",
                discord_avatar_decoration: e.discord_avatar_decoration ?? !0
              })
            }),
            n = await o.json();
          o.ok ? (c.oR.success(t("common.unsaved_changes.settings_saved")), setTimeout(() => {
            r(e), s(!1)
          }, 500)) : c.oR.error(n.error)
        } catch (e) {
          console.error(e.message)
        } finally {
          setTimeout(() => {
            a(t("common.unsaved_changes.save_button"))
          }, 500)
        }
      }
      var O = s(39449),
        U = s(60884);
      let H = ({
        data: e
      }) => {
        let a = (0, m.kj)(),
          s = a("common.unsaved_changes.save_button"),
          [i, n] = (0, t.useState)({
            ...e.config
          }),
          [u, h] = (0, t.useState)(i),
          [p, g] = (0, t.useState)(!1),
          [f, x] = (0, t.useState)(s);
        (0, t.useEffect)(() => {
          g(JSON.stringify(u) !== JSON.stringify(i))
        }, [u, i]);
        let b = e => a => {
          h(s => ({
            ...s,
            [e]: a
          }))
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(c.l$, {
            richColors: !0,
            position: "top-center",
            theme: "dark",
            className: l().toasterStyles,
            icons: {
              success: D.A.successToast
            },
            visibleToasts: 2
          }), (0, r.jsx)(O.N, {
            children: p && (0, r.jsx)("div", {
              className: l().unsavedChangesWrapper,
              children: (0, r.jsxs)(U.P.div, {
                className: l().unsavedChangesBar,
                initial: {
                  opacity: 0,
                  y: 40,
                  scale: .9
                },
                animate: {
                  opacity: 1,
                  y: 0,
                  scale: 1
                },
                exit: {
                  opacity: 0,
                  y: 40,
                  scale: .9
                },
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                },
                children: [(0, r.jsx)("h1", {
                  children: a("common.unsaved_changes.title")
                }), (0, r.jsx)("h1", {
                  className: l().compactText,
                  children: a("common.unsaved_changes.compact")
                }), (0, r.jsxs)("div", {
                  className: l().unsavedChangesButtons,
                  children: [(0, r.jsx)("span", {
                    className: l().resetButton,
                    onClick: () => {
                      h({
                        ...i
                      }), g(!1)
                    },
                    children: a("common.unsaved_changes.reset")
                  }), (0, r.jsx)("span", {
                    className: l().saveButton,
                    onClick: () => $(u, x, g, n, a),
                    children: f
                  })]
                })]
              })
            })
          }), (0, r.jsxs)("div", {
            className: o().featureGap,
            children: [(0, r.jsx)(F.A, {
              featureName: a("dashboard.customize.sections.assets"),
              children: (0, r.jsx)(k, {
                data: e
              })
            }), !e.premium && (0, r.jsx)(v.A, {
              href: "/pricing",
              style: {
                textDecoration: "none"
              },
              target: "_blank",
              children: (0, r.jsx)("div", {
                className: o().premiumAd,
                children: (0, r.jsx)("span", {
                  children: a("dashboard.customize.premium_cta", {
                    premium: (0, r.jsxs)("span", {
                      children: [d.premium, " ", a("dashboard.customize.premium_label")]
                    })
                  })
                })
              })
            }), (0, r.jsx)(F.A, {
              featureName: a("dashboard.customize.sections.general"),
              children: (0, r.jsx)(R, {
                description: u.description,
                setDescription: b("description"),
                discordPresence: u.presence,
                setDiscordPresence: b("presence"),
                backgroundEffects: u.background_effects,
                setBackgroundEffects: b("background_effects"),
                opacity: u.opacity,
                setOpacity: b("opacity"),
                usernameEffects: u.username_effects,
                blur: u.blur,
                setBlur: b("blur"),
                usernameGlow: u.username_glow,
                setUsernameGlow: b("username_glow"),
                socialGlow: u.social_glow,
                setSocialGlow: b("social_glow"),
                badgeGlow: u.badge_glow,
                setBadgeGlow: b("badge_glow"),
                userData: e,
                locationMarker: u.location,
                setLocation: b("location")
              })
            }), (0, r.jsx)(F.A, {
              featureName: a("dashboard.customize.sections.color"),
              children: (0, r.jsx)(P, {
                accentColor: u.color,
                setAccentColor: b("color"),
                textColor: u.text_color,
                setTextColor: b("text_color"),
                backgroundColor: u.bg_color,
                setBackgroundColor: b("bg_color"),
                gradientPrimary: u.gradient_1,
                setGradientPrimary: b("gradient_1"),
                gradientSecondary: u.gradient_2,
                setGradientSecondary: b("gradient_2"),
                isGradientEnabled: u.profile_gradient,
                setGradientEnabled: b("profile_gradient"),
                setIconColor: b("icon_color"),
                iconColor: u.icon_color,
                backgroundEffects: u.background_effects,
                backgroundEffectsColor: u.background_effects_color || "#000000",
                setBackgroundEffectsColor: b("background_effects_color")
              })
            }), (0, r.jsx)(F.A, {
              featureName: a("dashboard.customize.sections.other"),
              children: (0, r.jsx)(I, {
                discordAvatar: u.use_discord_avatar,
                setDiscordAvatar: b("use_discord_avatar"),
                monochromeIcons: u.monochrome,
                setMonochromeIcons: b("monochrome"),
                animatedTitle: u.animated_title,
                setAnimatedTitle: b("animated_title"),
                volumeControl: u.volume_control,
                setVolumeControl: b("volume_control"),
                swapColors: u.swap_colors,
                setSwapColors: b("swap_colors"),
                discordAvatarDecoration: u.discord_avatar_decoration,
                setDiscordAvatarDecoration: b("discord_avatar_decoration")
              })
            })]
          })]
        })
      }
    },
    57157: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => l
      });
      var r = s(95155),
        t = s(98241),
        i = s.n(t),
        o = s(54834),
        n = s(81576);

      function l({
        featureName: e,
        helpDescription: a,
        element: s,
        id: t
      }) {
        return (0, r.jsxs)("div", {
          className: i().featureName,
          "data-dashboard-feature-label": "string" == typeof e ? e : void 0,
          children: [(0, r.jsxs)("h1", {
            className: i().featureNameText,
            style: {
              marginBottom: "6px"
            },
            children: [e, (0, r.jsxs)(n.Ay, {
              width: "370px",
              position: "top",
              id: t,
              children: [(0, r.jsx)(n.Ay.Target, {
                children: o.A.help
              }), (0, r.jsx)(n.Ay.Dropdown, {
                children: (0, r.jsx)("div", {
                  className: i().helpDescription,
                  children: a.split("\n").map((e, a) => (0, r.jsxs)("span", {
                    children: [e, (0, r.jsx)("br", {})]
                  }, a))
                })
              })]
            })]
          }), s]
        })
      }
    },
    59931: e => {
      e.exports = {
        checkboxWrapper: "checkboxWrapper_checkboxWrapper__9OUSt",
        checkboxBox: "checkboxWrapper_checkboxBox__LRzEf",
        checkmark: "checkboxWrapper_checkmark__JWvoQ",
        checkboxContent: "checkboxWrapper_checkboxContent__XMPvb",
        label: "checkboxWrapper_label__W2Pzt",
        description: "checkboxWrapper_description__1OY4I"
      }
    },
    73728: e => {
      e.exports = {
        switch: "switchWrapper_switch__mTK4q",
        input: "switchWrapper_input__wPAP0",
        track: "switchWrapper_track__6KFya",
        thumb: "switchWrapper_thumb__HeiXF"
      }
    },
    81469: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => h
      });
      var r = s(95155),
        t = s(29722),
        i = s(12115),
        o = s(98241),
        n = s.n(o),
        l = s(73728),
        c = s.n(l),
        d = s(38256);
      let u = ["ar", "he", "fa", "ur"];

      function h({
        featureName: e,
        onChangeFunction: a,
        className: s,
        id: o,
        onChange: l,
        defaultChecked: h,
        disabled: m,
        ...p
      }) {
        let g = (0, d.useLang)(),
          f = (0, i.useId)(),
          x = u.includes(g) ? "rtl" : "ltr",
          b = "string" == typeof e ? e : void 0;
        return (0, r.jsxs)("div", {
          className: n().inputContainerWrapper,
          "data-dashboard-feature-label": b,
          children: [e && (0, r.jsx)("h1", {
            className: n().featureName,
            children: e
          }), (0, r.jsx)("div", {
            className: n().inputWrapperDiv,
            style: {
              direction: x
            },
            children: (0, r.jsxs)("label", {
              className: (0, t.A)(c().switch, s),
              "data-disabled": m,
              "data-direction": x,
              children: [(0, r.jsx)("input", {
                ...p,
                id: o ?? f,
                type: "checkbox",
                className: c().input,
                defaultChecked: h,
                disabled: m,
                onChange: e => {
                  l?.(e), a?.(e)
                }
              }), (0, r.jsx)("span", {
                className: c().track,
                children: (0, r.jsx)("span", {
                  className: c().thumb
                })
              })]
            })
          })]
        })
      }
    }
  }
]);