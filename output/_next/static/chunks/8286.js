(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8286], {
    48286: (e, a, d) => {
      "use strict";
      d.r(a), d.d(a, {
        default: () => j
      });
      var s = d(95155),
        c = d(12115),
        t = d(56891),
        i = d.n(t),
        o = d(86297),
        r = d(66609),
        n = d(98241),
        _ = d.n(n),
        b = d(54834),
        l = d(37206),
        f = d(86891),
        m = d(13782),
        h = d(12521),
        N = d(61836),
        p = d(50686),
        S = d(97478),
        U = d(7109),
        g = d(50163),
        G = d.n(g);

      function u({
        currentExtraStorageGb: e
      }) {
        let a = (0, f.kj)(),
          d = N.Yi.find(e => "recommended" in e && e.recommended) ?? N.Yi[0],
          [t, i] = (0, c.useState)(d.gb),
          [o, r] = (0, c.useState)(!1),
          [n, _] = (0, c.useState)(!1),
          b = (0, N.wH)(t);
        return n ? (0, s.jsx)(p.A, {
          type: "storage",
          storageData: {
            gb: t
          },
          purchaseSource: "imagehostStorage"
        }) : (0, s.jsxs)("div", {
          className: G().creditsContainer,
          children: [(0, s.jsxs)("div", {
            className: G().creditsDescription,
            children: [(0, s.jsx)("h1", {
              children: a("dashboard.imagehost.storage_purchase.title")
            }), (0, s.jsx)("h3", {
              children: a("dashboard.imagehost.storage_purchase.description")
            }), (0, s.jsx)("h3", {
              children: a("dashboard.imagehost.storage_purchase.current_extra", {
                amount: e
              })
            })]
          }), (0, s.jsxs)("div", {
            className: G().creditsOptions,
            children: [(0, s.jsx)("h1", {
              className: G().creditsTitle,
              children: a("dashboard.imagehost.storage_purchase.question")
            }), (0, s.jsxs)("div", {
              className: G().preselectedAmounts,
              children: [N.Yi.map(e => {
                let d = !o && e.gb === t,
                  c = "recommended" in e && e.recommended;
                return (0, s.jsxs)("div", {
                  className: `${G().preselectedAmount} ${d?G().active:""}`,
                  onClick: () => {
                    r(!1), i(e.gb)
                  },
                  children: [(0, s.jsxs)("span", {
                    className: G().amountText,
                    children: ["+", e.gb, " GB"]
                  }), (0, s.jsxs)("div", {
                    className: G().creditsPriceWrapper,
                    children: [(0, s.jsx)("span", {
                      className: G().priceDiscount,
                      style: {
                        opacity: +!!c
                      },
                      children: a("dashboard.imagehost.storage_purchase.recommended")
                    }), (0, s.jsx)("span", {
                      className: G().priceText,
                      children: (0, N.$g)(e.price)
                    })]
                  })]
                }, e.gb)
              }), (0, s.jsxs)("span", {
                className: `${G().customCreditsAmountButton} ${o?G().active:""}`,
                onClick: () => {
                  r(!0), i(N.KH)
                },
                children: [U.A.customAmount, " ", a("dashboard.imagehost.storage_purchase.custom_label")]
              })]
            }), o && (0, s.jsxs)("div", {
              className: G().customCreditsAmount,
              children: [(0, s.jsx)("h1", {
                children: a("dashboard.imagehost.storage_purchase.custom_label")
              }), (0, s.jsx)(S.A, {
                value: t,
                onChange: i,
                icon: U.A.shoppingBag,
                min: N.KH,
                max: N.YL,
                step: 1,
                placeholder: a("dashboard.imagehost.storage_purchase.custom_placeholder"),
                precision: 0
              })]
            }), (0, s.jsx)("span", {
              className: G().purchaseCreditsButton,
              onClick: () => {
                null !== b && _(!0)
              },
              children: null === b ? a("dashboard.imagehost.storage_purchase.continue") : a("dashboard.imagehost.storage_purchase.continue_with_price", {
                storage: t,
                price: (0, N.$g)(b)
              })
            })]
          })]
        })
      }
      let x = (0, l.default)(() => Promise.all([d.e(7776), d.e(6986)]).then(d.bind(d, 36986)), {
        loadableGenerated: {
          webpack: () => [36986]
        },
        ssr: !1
      });

      function j({
        data: e
      }) {
        let a = (0, f.kj)(),
          d = e.config,
          [t, n] = (0, c.useState)({
            totalUploads: 0,
            uploadsToday: 0,
            leaderboardRank: 0,
            storageUsedFormatted: "0MB",
            storageUsed: 0,
            storageLimit: 0,
            storageLeftFormatted: "0MB",
            extraStorageGb: 0,
            config: {
              domain: ""
            }
          }),
          l = t.totalUploads || 0,
          N = t.leaderboardRank || "N/A",
          p = t.storageUsedFormatted || "0MB",
          S = t.storageUsed || 0,
          U = t.storageLimit || 0,
          g = t.storageLeftFormatted || "0MB",
          G = U ? Math.min(S / U * 100, 100).toFixed(0) : 0,
          j = t.config?.domain,
          [v, C] = (0, c.useState)(!1),
          [y, B] = (0, c.useState)([]),
          [k, A] = (0, c.useState)(!1),
          [T, w] = (0, c.useState)(!1),
          [L, D] = (0, c.useState)({}),
          W = async () => {
            let e = await fetch("/api/dashboard/imagehost/data?latestDomain=true", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                }
              }),
              a = await e.json();
            e.ok ? n(a) : r.oR.error(a.error)
          }, F = async () => {
            let e = await fetch("/api/dashboard/imagehost/dailyUploads", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                }
              }),
              a = await e.json();
            e.ok ? B(a.dailyUploads) : r.oR.error(a.error)
          };
        (0, c.useEffect)(() => {
          W(), F()
        }, []);
        let R = async e => {
          let d = e.target.files?.[0];
          if (!d) return;
          if (v) return void r.oR.error(a("dashboard.imagehost.upload.in_progress"));
          C(!0), e.target.disabled = !0;
          let s = new FormData;
          s.append("file", d);
          let c = await fetch("/api/dashboard/imagehost/upload", {
              method: "POST",
              body: s
            }),
            t = await c.json();
          c.ok ? (D(t), A(!0), r.oR.success(a("dashboard.imagehost.upload.success"))) : r.oR.error(t.error), C(!1), e.target.value = "", e.target.disabled = !1
        }, M = /^(mp4|mov|avi|m4v|webm|mkv)$/i.test(L?.extension || "");
        return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(m.A, {
            opened: T,
            onClose: () => w(!1),
            title: a("dashboard.imagehost.storage_purchase.modal_title"),
            centered: !0,
            size: "auto",
            children: (0, s.jsx)(u, {
              currentExtraStorageGb: t.extraStorageGb || 0
            })
          }), (0, s.jsx)(m.A, {
            opened: k,
            onClose: () => A(!1),
            title: a("dashboard.imagehost.modal.title"),
            centered: !0,
            size: "450px",
            children: (0, s.jsxs)("div", {
              className: i().uploadResultContainer,
              children: [(0, s.jsxs)("div", {
                className: i().uploadPreview,
                children: [M ? (0, s.jsx)("video", {
                  src: L?.url,
                  controls: !0
                }) : (0, s.jsx)("img", {
                  src: L?.url,
                  alt: L?.file_name
                }), (0, s.jsxs)("div", {
                  className: i().uploadFileInfo,
                  children: [(0, s.jsx)("h1", {
                    children: L?.file_name
                  }), (0, s.jsxs)("h3", {
                    children: [new Date(1e3 * L?.upload_date).toLocaleString("en-US", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit"
                    }), " •", " ", ((L?.file_size ?? 0) / 1048576).toFixed(2), " MB"]
                  })]
                })]
              }), (0, s.jsxs)("div", {
                className: i().uploadActions,
                children: [(0, s.jsxs)("a", {
                  href: `https://${j}/${L?.key}`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: `${i().uploadButton} ${i().primary}`,
                  children: [o.A.open, " ", a("dashboard.imagehost.modal.open_url")]
                }), (0, s.jsxs)("span", {
                  className: i().uploadButton,
                  onClick: () => {
                    navigator.clipboard.writeText(`https://${j}/${L?.key}`), r.oR.success(a("dashboard.imagehost.modal.copy_success"))
                  },
                  children: [o.A.link, " ", a("dashboard.imagehost.modal.copy_link")]
                }), (0, s.jsxs)("a", {
                  href: "/imagehost/gallery",
                  className: i().uploadButton,
                  children: [o.A.imageGallery, " ", a("dashboard.imagehost.modal.gallery")]
                })]
              })]
            })
          }), (0, s.jsx)(r.l$, {
            richColors: !0,
            position: "top-center",
            theme: "dark",
            className: _().toasterStyles,
            icons: {
              success: b.A.successToast
            },
            visibleToasts: 2
          }), (0, s.jsxs)("div", {
            className: i().imagehostContainer,
            children: [(0, s.jsxs)("div", {
              className: i().imagehostCardsWrapper,
              children: [(0, s.jsx)("h1", {
                className: i().imagehostTitle,
                children: a("dashboard.imagehost.overview.title")
              }), (0, s.jsxs)("div", {
                className: i().imagehostCards,
                children: [(0, s.jsxs)("div", {
                  className: i().imagehostCard,
                  children: [(0, s.jsxs)("div", {
                    className: i().cardTop,
                    children: [(0, s.jsx)("h1", {
                      children: a("dashboard.imagehost.overview.cards.total_uploads")
                    }), o.A.totalUploads]
                  }), (0, s.jsxs)("div", {
                    className: i().cardBottom,
                    children: [(0, s.jsx)("h1", {
                      children: l
                    }), (0, s.jsx)("h3", {
                      children: a("dashboard.imagehost.overview.cards.rank", {
                        rank: N
                      })
                    })]
                  })]
                }), (0, s.jsxs)("div", {
                  className: i().imagehostCard,
                  children: [(0, s.jsxs)("div", {
                    className: i().cardTop,
                    children: [(0, s.jsx)("h1", {
                      children: a("dashboard.imagehost.overview.cards.domain_title")
                    }), o.A.link]
                  }), (0, s.jsxs)("div", {
                    className: i().cardBottom,
                    children: [(0, s.jsx)("h1", {
                      children: j
                    }), (0, s.jsx)("h3", {
                      children: a("dashboard.imagehost.overview.cards.domain_description")
                    })]
                  })]
                }), (0, s.jsxs)("div", {
                  className: i().imagehostCard,
                  children: [(0, s.jsxs)("div", {
                    className: i().cardTop,
                    children: [(0, s.jsx)("h1", {
                      children: a("dashboard.imagehost.overview.cards.storage_title")
                    }), o.A.storageUsed]
                  }), (0, s.jsxs)("div", {
                    className: i().cardBottom,
                    children: [(0, s.jsxs)("h1", {
                      children: [p, " (", G, "%)"]
                    }), (0, s.jsxs)("div", {
                      className: i().storageMeta,
                      children: [(0, s.jsx)("h3", {
                        children: a("dashboard.imagehost.overview.cards.storage_left", {
                          amount: g
                        })
                      }), (0, s.jsx)("button", {
                        type: "button",
                        className: i().buyStorageButton,
                        onClick: () => w(!0),
                        children: a("dashboard.imagehost.overview.cards.buy_storage")
                      })]
                    })]
                  })]
                }), (0, s.jsxs)("div", {
                  className: i().imagehostCard,
                  children: [(0, s.jsxs)("div", {
                    className: i().cardTop,
                    children: [(0, s.jsx)("h1", {
                      children: a("dashboard.imagehost.overview.cards.premium_title")
                    }), o.A.premiumPerks]
                  }), (0, s.jsxs)("div", {
                    className: i().cardBottom,
                    children: [(0, s.jsx)("h1", {
                      style: {
                        display: "flex"
                      },
                      children: d.premium ? (0, s.jsx)("span", {
                        className: i().perksActivated,
                        children: a("dashboard.imagehost.overview.cards.premium_active")
                      }) : (0, s.jsx)("span", {
                        className: i().perksDisabled,
                        children: a("dashboard.imagehost.overview.cards.premium_inactive")
                      })
                    }), (0, s.jsx)("h3", {
                      children: d.premium ? a("dashboard.imagehost.overview.cards.premium_description_active") : a("dashboard.imagehost.overview.cards.premium_description_inactive")
                    })]
                  })]
                })]
              })]
            }), (0, s.jsxs)("div", {
              className: i().imagehostUsageWrapper,
              children: [(0, s.jsx)("h1", {
                className: i().imagehostUsageTitle,
                children: a("dashboard.imagehost.usage.title")
              }), (0, s.jsxs)("div", {
                className: i().imagehostChartsWrapper,
                children: [(0, s.jsxs)("div", {
                  className: i().imagehostLinksWrapper,
                  children: [(0, s.jsx)("h1", {
                    className: i().imagehostLinksTitle,
                    children: a("dashboard.imagehost.usage.manage.title")
                  }), (0, s.jsx)("h3", {
                    children: a("dashboard.imagehost.usage.manage.description")
                  }), (0, s.jsxs)("div", {
                    className: i().imagehostLinks,
                    children: [(0, s.jsxs)("a", {
                      href: "/imagehost/gallery",
                      children: [o.A.imageGallery, " ", a("dashboard.imagehost.usage.manage.links.gallery")]
                    }), (0, s.jsxs)("a", {
                      href: "/imagehost/domains",
                      children: [o.A.link, " ", a("dashboard.imagehost.usage.manage.links.domains")]
                    }), (0, s.jsxs)("a", {
                      href: "/imagehost/setup",
                      children: [o.A.setupIcon, " ", a("dashboard.imagehost.usage.manage.links.setup")]
                    }), (0, s.jsxs)("a", {
                      href: "/imagehost/settings",
                      children: [o.A.settings, " ", a("dashboard.imagehost.usage.manage.links.settings")]
                    }), (0, s.jsxs)("div", {
                      className: i().fileUploadBox,
                      children: [(0, s.jsx)("h1", {
                        className: i().fileUploadTitle,
                        children: a("dashboard.imagehost.upload.title")
                      }), (0, s.jsxs)("div", {
                        className: i().fileUploadContainer,
                        children: [(0, s.jsx)("input", {
                          type: "file",
                          className: i().fileUploadInput,
                          accept: h.vJ.imagehostUpload.map(e => e).join(", "),
                          onChange: R
                        }), v ? (0, s.jsxs)("h1", {
                          children: [o.A.loading, " ", a("dashboard.imagehost.upload.loading")]
                        }) : (0, s.jsxs)("h1", {
                          children: [o.A.image, " ", a("dashboard.imagehost.upload.prompt")]
                        })]
                      })]
                    })]
                  })]
                }), (0, s.jsxs)("div", {
                  className: i().dailyUploadsChartWrapper,
                  children: [(0, s.jsxs)("div", {
                    className: i().dailyUploadsChartHeader,
                    children: [(0, s.jsxs)("h1", {
                      children: [a("dashboard.imagehost.usage.chart.title"), " ", (0, s.jsx)("span", {
                        children: a("dashboard.imagehost.usage.chart.range")
                      })]
                    }), (0, s.jsx)("h3", {
                      children: a("dashboard.imagehost.usage.chart.subtitle")
                    })]
                  }), (0, s.jsx)(x, {
                    dailyData: y
                  })]
                })]
              })]
            })]
          })]
        })
      }
    },
    56891: e => {
      e.exports = {
        imagehostContainer: "GUNS__16-ffbeffeb-25cb95ae-14022343",
        imagehostCards: "GUNS__28-48c01132-c71bc95e-c24b6bfa",
        imagehostCard: "GUNS__29-d52d2531-1642c0e3-4e281de7",
        cardTop: "GUNS__27-c4253c00-060945bd-de7ca3bb",
        cardBottom: "GUNS__fc-2cce561e-125fac0d-c425669b",
        storageMeta: "GUNS__a2-54504517-c5a56822-a9c649e0",
        buyStorageButton: "GUNS__e2-6e7f236b-2fbe3f1d-c9b2c2e8",
        perksActivated: "GUNS__23-84f979f0-6d3e3947-7751edf5",
        perksDisabled: "GUNS__e5-6795e004-1c9b8877-a78c25af",
        dailyUploadsChartWrapper: "GUNS__48-ec69a7d2-7a5f5707-9801c156",
        imagehostCardsWrapper: "GUNS__9c-680b0279-f3b91169-be462484",
        imagehostTitle: "GUNS__c1-66d1db1d-b10c75a0-4478e250",
        imagehostLinksWrapper: "GUNS__85-0b4efc0b-7fe07641-0697d16b",
        imagehostLinksTitle: "GUNS__0c-d794b46e-bc3820c4-90eca180",
        imagehostChartsWrapper: "GUNS__7a-f41b4e6d-cd9d78b1-06b6ba4b",
        imagehostLinks: "GUNS__6e-e7d66b52-a1b6cc54-453529d9",
        fileUploadContainer: "GUNS__5e-8534a2b2-e14f8168-14f00acd",
        imagehostUsageWrapper: "GUNS__ea-34b1d217-950a9873-aac8df96",
        imagehostUsageTitle: "GUNS__40-8f97e4a8-c5ce4d01-e229f344",
        fileUploadBox: "GUNS__9d-48f31064-956b0061-baf9cccf",
        fileUploadTitle: "GUNS__59-9ab4706b-3fdf301c-21c8ee3d",
        imageGalleryContainer: "GUNS__d1-d3bcec01-c0cae11b-bc839ddb",
        searchContainer: "GUNS__83-ed169847-a3694b8a-9d9bb3b1",
        imageContainer: "GUNS__46-c6079ee7-d117f4b7-2e965b6d",
        imageCard: "GUNS__3e-8eb6d584-61922899-2b05afd5",
        imageInformation: "GUNS__c8-fa7feeff-0362e632-c436651b",
        imageControls: "GUNS__8a-d87fc472-8c724161-4919fda6",
        paginationWrapper: "GUNS__38-fbf03b6a-aa089e81-68f6d8df",
        confirmationMessage: "GUNS__13-4afb2781-6ee9e06e-98270375",
        confirmationContainer: "GUNS__d0-652b700c-2922fa99-2efe75bc",
        resultsNotFound: "GUNS__2f-fad8bf04-e6ed2ea7-613060fe",
        galleryShellFull: "GUNS__1d-5cc4a088-0e9fa6ec-6f729ed6",
        folderSidebar: "GUNS__2e-68617b8e-b11ab23f-0c78a438",
        folderAll: "GUNS__d3-7839bb44-07b52241-6d769fe4",
        activeSoft: "GUNS__3b-a03a5973-bf19a751-52dc59f5",
        folderList: "GUNS__0c-40303f0c-4062fab6-262a435d",
        folderItem: "GUNS__2b-d1540424-545c5750-1fae04d2",
        folderItemLeft: "GUNS__45-f1db6661-4397d48b-a437cb53",
        folderName: "GUNS__37-38ca9f07-aec1ee3b-dfb8c39e",
        folderCount: "GUNS__e2-e6c53812-600069ae-8b6db869",
        createFolderButton: "GUNS__50-7c81678e-fd9d96c9-973b681a",
        filesSection: "GUNS__6c-ea04c9ee-9e3388c1-b95d0829",
        searchInput: "GUNS__aa-c9d98c04-58551773-8b5dbfb7",
        searchInputWrapper: "GUNS__33-beac96d9-fbc28b65-06a7ff46",
        searchButton: "GUNS__6a-0aa3330c-66d39113-d529fe69",
        searchInputContainer: "GUNS__d2-6fcdc71f-b96a0e1c-df034e36",
        removeSearchButton: "GUNS__d5-6cfc6d05-88a92d90-7c086120",
        fileControls: "GUNS__6e-7888cafd-b8f0b2e6-cc1405b4",
        noFolders: "GUNS__6b-d55aaf33-48e2d33a-7a325354",
        loadingDiv: "GUNS__cb-e91ba871-85c08542-3fcd45f8",
        createFolderContainer: "GUNS__d3-b7cfbc37-ef0e33bc-a7012860",
        createFolderButtonModal: "GUNS__f3-24d8b089-b6521944-90a3154d",
        folderDeleteIcon: "GUNS__db-f930c680-150cd7a2-d798074b",
        folderText: "GUNS__43-de7a044c-9ae5c465-1bef654b",
        imageFileName: "GUNS__a6-3fbb5f10-ad141746-686b60f9",
        imageCardSelected: "GUNS__6a-b8bb94e2-d99cc95a-e22d25a2",
        dailyUploadsChartHeader: "GUNS__d3-15ae5345-a8ddebc4-a6b6ed6b",
        uploadResultContainer: "GUNS__91-5b221749-54623001-e7c7dd13",
        uploadPreview: "GUNS__df-f7707572-e6e43e5d-7d1dee30",
        uploadFileInfo: "GUNS__c7-aa6aece2-6bea4677-a4edfde0",
        uploadActions: "GUNS__bf-2e13da44-f4cebc4e-20d8a850",
        uploadButton: "GUNS__db-f9288156-f8fc46ed-5e48d618",
        primary: "GUNS__72-1c636269-daf55e55-7cc35c5e",
        domainsHeader: "GUNS__31-aa571824-a7433f23-88ec89d3",
        domainsTitleContainer: "GUNS__82-50ce70d1-6548d248-44012864",
        domainsControls: "GUNS__8a-394b5386-a7ed89fe-fc866ff4",
        domainsBody: "GUNS__f8-0bbdb21a-16e79782-964f2b16",
        addDomainContainer: "GUNS__1b-6c5eeab9-dab79946-adf37072",
        myDomainsContainer: "GUNS__22-44c90848-83646d56-58cfd2ae",
        domainsLeftTitle: "GUNS__9c-cdde4f99-00dcfdc9-6686e619",
        domainsLeftSub: "GUNS__e5-0db77955-29ae44cf-0f780e93",
        domainsFormBlock: "GUNS__4d-0fd2296b-354b0b85-d67bc9bc",
        addDomainButton: "GUNS__55-36b3075d-5aa473f3-832461ee",
        domainsListContainer: "GUNS__ac-6fed741d-fbf46a22-14049b49",
        domainsListHeader: "GUNS__29-084dac0f-1df0a5b4-b8970d47",
        domainsList: "GUNS__26-f596d1cd-5321d491-c7aea1c1",
        domainsLoading: "GUNS__9e-991e0d0a-360b2b63-bda26b93",
        domainsEmpty: "GUNS__92-79528039-fc3577fe-da9179ef",
        dnsModalBody: "GUNS__95-46209808-047e4024-c84a8a54",
        dnsRecordsList: "GUNS__e5-2bd7bcd9-1b4dbc93-1c781928",
        dnsRecordRow: "GUNS__ec-521dc9b0-ad0ec630-cb6747ac",
        dnsRowTop: "GUNS__2b-7df6944b-e12507c6-fd7a20ad",
        dnsType: "GUNS__c7-bc3442ed-67ca4cd1-1a36fbc7",
        dnsInline: "GUNS__5f-b1acc6f9-23a2f776-223fdf33",
        dnsField: "GUNS__dd-c69e27dc-d4df074e-1cc89727",
        dnsLabel: "GUNS__3c-017d73c0-c97e2231-00412af9",
        domainsCopyBtn: "GUNS__19-d4771870-6f87bbaa-9289efe4",
        dnsModalHeader: "GUNS__4d-264a5f52-8626aefe-0de6a2e5",
        dnsHeaderLeft: "GUNS__f9-aac0963c-a4fc016a-bd7084c6",
        dnsTitle: "GUNS__e4-87415beb-ef4ff3d2-6a91f287",
        dnsHostLine: "GUNS__76-4ad607ff-3463ded1-50e3a8bc",
        dnsQuickNote: "GUNS__07-bc4edfb6-1b89095f-ec975a97",
        dnsActionRow: "GUNS__dc-af13ceef-77a484be-eee52db7",
        dnsNotice: "GUNS__d8-3dae1599-44302ba6-e5131611",
        dnsNote: "GUNS__ca-192a42bc-eda5b6b8-df2464f2",
        pendingDomainsAlert: "GUNS__aa-6c892b92-a984e6a0-849f2d8c",
        domainCard: "GUNS__3e-da6154ef-d2ae5eb7-34048656",
        domainCardLeft: "GUNS__ef-7e704f4d-acbd4440-2fcb7ec9",
        domainCardRight: "GUNS__4d-52ddcb15-c417c715-49d13530",
        domainUsage: "GUNS__10-ebce90e9-b41519a9-f5c5a0c6",
        domainStatus: "GUNS__49-38bb50da-1721e385-70e1846e",
        domainName: "GUNS__90-3dc79be8-22b831b9-54f0a45b",
        domainNameList: "GUNS__71-82e6ef3a-0899dde1-ce3a7fe5",
        domainCardTop: "GUNS__3d-9c424178-a2c685c9-49ef5496",
        domainInfo: "GUNS__95-6248da79-7c03056f-163abb3c",
        active: "GUNS__e4-95b8d3ce-60ef7d3d-da11ac11",
        pending: "GUNS__a1-d9553a92-b19b4ed9-7d6a70b5",
        domainDnsSetupButton: "GUNS__db-c9653034-c02dab05-3b75d4cb",
        dnsValue: "GUNS__66-fec2d5fc-ac1e1953-4da71480",
        dnsDescription: "GUNS__f2-9c369d5c-c05f5228-ab3387b5",
        checkDomainButton: "GUNS__2b-bb9a020f-e5dcb37e-83b2bf51",
        dnsValueWrapper: "GUNS__1c-d9e859d8-68d9899d-cdd4ee97",
        domainTags: "GUNS__cc-0755baa1-ebf931f2-7453fbbf",
        domainCardList: "GUNS__6f-91a47d36-5e77d3ee-fe76098e",
        domainCardListLeft: "GUNS__aa-6da3d07d-5911b872-e2f83272",
        applyDomainButton: "GUNS__63-a41b9f87-6969c7d8-fc12a2f1",
        domainCardActions: "GUNS__42-cb06e560-f798675e-428aaccf",
        domainDeleteButton: "GUNS__3f-387a8cfb-90b88637-cbdda1de",
        domainActions: "GUNS__fb-28a5445c-01afcb10-ca33979a",
        deleteDomainButtons: "GUNS__c5-a2d99597-3bc4062f-17875b58",
        confirmDeleteButton: "GUNS__5b-57af99f7-45ef7a92-9c851a8d",
        cancelDeleteButton: "GUNS__94-118e5e2d-f72ffc37-acf0c4ac",
        domainCardHeader: "GUNS__89-db0a5f59-df598991-ab5ec53c",
        domainManagementContainer: "GUNS__b7-ffaa96c2-381556e2-e8ad83aa",
        usageCountBadge: "GUNS__03-a0328023-8f4c2879-a712fec5",
        dnsOnlyCf: "GUNS__5b-ff754ec5-e4292f24-1650fd53",
        applied: "GUNS__76-183b36b8-31239c28-13b4cf23",
        visibilityBadge: "GUNS__56-fd90f8cd-995905ec-b18dfe57",
        domainTagsWrapper: "GUNS__cd-c2ee483d-33c412c2-b66b8954",
        addDomainInfo: "GUNS__75-00eb0d38-eba1f0db-25105797",
        setupWrapper: "GUNS__6a-a133c5ad-116c99be-a5676aa2",
        setupCard: "GUNS__4c-6c3aeeea-8caa425a-b44cfe6d",
        setupDetected: "GUNS__18-9f1bc9e9-857a5f50-4d181497",
        setupTabs: "GUNS__cd-e3bf9272-aba5dd45-b44e724b",
        setupTab: "GUNS__74-cc5a342f-7ebb48ae-b05b7dfc",
        setupTabActive: "GUNS__5a-a42a9619-d74e2dcf-5eff1903",
        setupAutoBadge: "GUNS__8b-bbdbad9f-afb5cde4-03ab93a9",
        setupKeyBlock: "GUNS__cd-b52b6975-7f986448-e01cbe0a",
        setupKeyLabel: "GUNS__57-beb6c4a8-7a32fc5b-c4080ea7",
        setupKeyRow: "GUNS__c0-b8529b1f-06bde11d-d311af54",
        setupKeyValue: "GUNS__f4-5086f632-c2008df9-eb84432a",
        setupKeyActions: "GUNS__dc-bcc04e9c-48fbe083-80f6900e",
        setupSteps: "GUNS__12-29fc9a65-baadd7bc-6769fe5c",
        setupStepsHeader: "GUNS__f1-03489406-feb1b13f-e6780b64",
        setupStepsBody: "GUNS__8b-3e7161aa-842520b3-101758cc",
        setupStepRow: "GUNS__bd-3018228a-1b792e2c-95d58cc5",
        setupStepIndex: "GUNS__f3-6f1bf887-a6c47571-b0550bd7",
        setupStepText: "GUNS__e9-b3e86229-6c8fe1f8-7f675b17",
        setupCodeBox: "GUNS__f9-2e1f47d1-367706ea-a7136db9",
        uploadKeyNote: "GUNS__04-1db65f4a-e35d569a-68a41a83",
        uploadKeyButton: "GUNS__63-f03dfb28-43b07fc2-c621fa9a",
        openDocsButton: "GUNS__a4-7282f1f1-089c1391-2b0a658a",
        setupButtonWrapper: "GUNS__7b-c227547a-40fa0881-3224cb35",
        appleLink: "GUNS__e3-1070239e-44f9bb37-42f91e0d",
        settingsWrapper: "GUNS__62-ac84b2b4-d5f25cd0-2837894b",
        settingsHeader: "GUNS__67-50987d0b-565b7ada-7bd74aaa",
        settingsLoader: "GUNS__9f-39cfa879-433c7eb4-214a87ba",
        settingsGrid: "GUNS__02-f4eb3362-eea3e061-d7fa379a",
        settingsCard: "GUNS__1c-65f3f249-0304192d-de513548",
        settingsCardTop: "GUNS__f8-d1c7cba5-061263fc-1960e239",
        dangerSettingsCard: "GUNS__1f-7355fd72-4b9fe689-9e6b558f",
        deleteAllSummary: "GUNS__ff-917cb290-7662aeac-ce301e9b",
        deleteAllProgress: "GUNS__54-ae607418-cd098ad7-61b3ccc1",
        deleteAllProgressLabel: "GUNS__e6-1071dd07-19742fdd-a5695195",
        deleteAllProgressTrack: "GUNS__cd-d5da291c-78a7454b-4dbe364b",
        deleteAllOpenButton: "GUNS__b1-f730f867-a3f2b932-cf7f5928",
        deleteAllConfirmButton: "GUNS__2d-fb3c1218-02f33cd2-58e499ec",
        deleteAllModal: "GUNS__9b-2fa93789-202d5b6a-b38e882c",
        deleteAllWarning: "GUNS__c5-1e5da590-5399c1fe-db8c8383",
        deleteAllPasswordNotice: "GUNS__5e-f096af63-cc0f6ce5-5fa31e73",
        settingHelp: "GUNS__06-4b392795-fc615631-b38118df",
        switchGroup: "GUNS__19-9a9fc2b2-00992980-fa86d98c",
        domainRow: "GUNS__8d-524da5e5-f0e750ae-7866332c",
        domainPill: "GUNS__9e-9d305cab-52e30e3d-e203cb55",
        settingsLinkButton: "GUNS__41-6367eed2-cd7c123c-c3c5d508",
        regenerateButton: "GUNS__a5-e8e92e64-a1c81f84-3d29cbcd",
        settingsActions: "GUNS__b6-23001478-8e871751-06cc0e8f",
        configureEmbed: "GUNS__55-34a7057d-71170852-97fdcc15",
        configureEmbedWrapper: "GUNS__55-5f773b9d-3a903852-2d815dd4",
        domainPillContainer: "GUNS__0b-3894aeb4-4b400703-a6901089",
        variableList: "GUNS__92-1853df2a-c5323e71-7700de02",
        visibilityButtonContainer: "GUNS__74-67aaba76-f9e36277-5cc108bb",
        domainVisibilityHeader: "GUNS__0b-ba3d6736-ce582cf1-162c5fad",
        domainVisibilityBanner: "GUNS__29-e111fbf5-d960d9ae-5d74027c",
        warningText: "GUNS__92-99da8a31-6efc5f1a-62dc11bf",
        closeErrorModalButton: "GUNS__18-e5b86ebf-a08f9907-c9c8f513",
        errorModalBanner: "GUNS__b5-c7b49bf7-d553156f-fc24a430",
        errorModalBannerText: "GUNS__ec-9528fe7b-b2d59f36-b9624bb0",
        variableText: "GUNS__ed-4480885a-f2516ddf-08c2ce03",
        setupAccordionItem: "GUNS__40-b3bf8c49-f7392e6c-2835f3c7",
        setupAccordionControl: "GUNS__60-f023903c-e3a9ab6b-3c26b796",
        moveSelect: "GUNS__03-e042ce7a-25c4d602-b84f8a63",
        sortSelect: "GUNS__8e-9038e083-084dfb49-5e1d7966"
      }
    }
  }
]);