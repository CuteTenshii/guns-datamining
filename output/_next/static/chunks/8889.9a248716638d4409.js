"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8889], {
    48889: (s, a, i) => {
      i.r(a), i.d(a, {
        default: () => N
      });
      var e = i(95155),
        d = i(12115),
        n = i(56891),
        o = i.n(n),
        t = i(98241),
        l = i.n(t),
        m = i(86297),
        r = i(54834),
        c = i(66609),
        h = i(60141),
        p = i(37897),
        u = i(57157),
        g = i(96351),
        b = i(19376),
        v = i(57776),
        j = i(29483);
      let x = "https://guns.lol",
        y = (s, a, i) => {
          let e, d;
          return "ru" !== s || "number" != typeof i ? a : `${a}_${e=i%10,d=i%100,1===e&&11!==d?"single":e>=2&&e<=4&&(d<12||d>14)?"few":"many"}`
        };

      function N({
        data: s
      }) {
        let a, i, n, t = (0, g.kj)(),
          N = (0, g.useLang)(),
          [f, _] = (0, d.useState)(""),
          [C, S] = (0, d.useState)({
            page: 0,
            total: 0,
            totalPages: 0
          }),
          [A, k] = (0, d.useState)([]),
          [D, T] = (0, d.useState)([]),
          [w, R] = (0, d.useState)(!0),
          [B, L] = (0, d.useState)(!1),
          [V, $] = (0, d.useState)(!1),
          [O, M] = (0, d.useState)(!0),
          [P, E] = (0, d.useState)(""),
          [F, H] = (0, d.useState)(1),
          [I] = (0, j.A)(P, 600),
          [J, z] = (0, d.useState)(!1),
          [W, Z] = (0, d.useState)(""),
          [q, K] = (0, d.useState)("public"),
          [U, G] = (0, d.useState)(!1),
          [Q, X] = (0, d.useState)(""),
          [Y, ss] = (0, d.useState)(""),
          [sa, si] = (0, d.useState)({
            hostname: "",
            currentVisibility: ""
          }),
          se = (0, d.useMemo)(() => ({
            dnsSetup: t("dashboard.imagehost.domains.modals.dns_setup_title"),
            deleteDomain: t("dashboard.imagehost.domains.modals.delete_domain_title"),
            domainVisibility: t("dashboard.imagehost.domains.modals.visibility_title"),
            unsupportedDns: t("dashboard.imagehost.domains.modals.unsupported_title")
          }), [t]),
          [sd, sn] = (0, d.useState)(null),
          so = D.some(s => "active" !== s.status || "active" !== s.sslStatus),
          st = async s => {
            await navigator.clipboard.writeText(s), c.oR.success(t("dashboard.imagehost.domains.notifications.copied"))
          }, sl = (0, d.useCallback)(async () => {
            R(!0);
            let s = await fetch(`${x}/api/dashboard/imagehost/domains/list`, {
                method: "POST",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  search: P || "",
                  page: F
                })
              }),
              a = await s.json();
            s.ok ? (S({
              page: a.page,
              total: a.total,
              totalPages: a.totalPages
            }), k(a.domains)) : c.oR.error(a.error), R(!1)
          }, [F, P]), sm = (0, d.useCallback)(async () => {
            M(!0);
            let s = await fetch(`${x}/api/dashboard/imagehost/domains/user`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                }
              }),
              a = await s.json();
            s.ok ? T(a.domains) : c.oR.error(a.error), M(!1)
          }, []);
        (0, d.useEffect)(() => {
          sl()
        }, [I, F]), (0, d.useEffect)(() => {
          sm()
        }, []);
        let sr = async () => {
          if (!W.trim()) return c.oR.error(t("dashboard.imagehost.domains.notifications.domain_required"));
          if (!/^(?=.{1,253}$)(?!-)[A-Za-z0-9-]{1,63}(?<!-)(\.(?!-)[A-Za-z0-9-]{1,63}(?<!-))+\.?$/.test(W)) return c.oR.error(t("dashboard.imagehost.domains.notifications.domain_invalid"));
          z(!0);
          let s = await fetch(`${x}/api/dashboard/imagehost/domains/add`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                host: W.trim(),
                visibility: q
              })
            }),
            a = await s.json();
          if (a?.unsupportedDns) {
            X("unsupportedDns"), ss(W.trim()), G(!0), z(!1);
            return
          }
          s.ok ? (c.oR.success(t("dashboard.imagehost.domains.notifications.domain_added")), sm(), Z(""), K("public"), sn({
            hostname: a.hostname,
            cfManaged: a.cf,
            records: a.dnsRecords
          }), X("dnsSetup"), G(!0)) : c.oR.error(a.error), z(!1)
        }, sc = async s => {
          L(!0);
          let a = await fetch(`${x}/api/dashboard/imagehost/domains/status`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                host: s
              })
            }),
            i = await a.json();
          if (a.ok) {
            let s = "active" === i.status && "active" === i.sslStatus,
              a = i.badge || !1;
            s ? (sm(), sl(), sn(null), G(!1), c.oR.success(a ? t("dashboard.imagehost.domains.notifications.domain_active_badge") : t("dashboard.imagehost.domains.notifications.domain_active"))) : c.oR.info(t("dashboard.imagehost.domains.notifications.domain_pending"))
          } else i?.info ? c.oR.info(i.message) : c.oR.error(i.error);
          L(!1)
        }, sh = async (s, a) => {
          $(!0), s.target.style.pointerEvents = "none";
          let i = await fetch(`${x}/api/dashboard/imagehost/domains/delete`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                host: a
              })
            }),
            e = await i.json();
          i.ok ? (c.oR.success(t("dashboard.imagehost.domains.notifications.domain_deleted")), sm(), G(!1)) : c.oR.error(e.error), $(!1), s.target.style.pointerEvents = "auto"
        }, sp = async s => {
          let a = await fetch(`${x}/api/dashboard/imagehost/domains/apply`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                host: s
              })
            }),
            i = await a.json();
          a.ok ? (c.oR.success(t("dashboard.imagehost.domains.notifications.domain_applied", {
            hostname: s
          })), sm(), _(s), G(!1)) : c.oR.error(i.error)
        }, su = async () => {
          let s = await fetch("/api/dashboard/imagehost/domains/current", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              }
            }),
            a = await s.json();
          s.ok ? _(a.domain) : c.oR.error(a.error)
        }, sg = async (s, a) => {
          let i = await fetch(`${x}/api/dashboard/imagehost/domains/visibility`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                host: s,
                visibility: a
              })
            }),
            e = await i.json();
          if (i.ok) {
            let s = "public" === a ? t("dashboard.imagehost.domains.visibility.public") : t("dashboard.imagehost.domains.visibility.private");
            c.oR.success(t("dashboard.imagehost.domains.notifications.visibility_updated", {
              visibility: s
            })), sm(), G(!1)
          } else c.oR.error(e.error)
        };
        (0, d.useEffect)(() => {
          su()
        }, []);
        let sb = s => {
            X("deleteDomain"), sn({
              hostname: s,
              cfManaged: null,
              records: []
            }), G(!0)
          },
          sv = ({
            r: s
          }) => (0, e.jsxs)("div", {
            className: `${o().dnsRecordRow} ${o().dnsRowCompact}`,
            children: [(0, e.jsx)("div", {
              className: o().dnsRowTop,
              children: (0, e.jsx)("span", {
                className: o().dnsType,
                children: s.type
              })
            }), (0, e.jsxs)("div", {
              className: o().dnsInline,
              children: [(0, e.jsxs)("div", {
                className: o().dnsField,
                children: [(0, e.jsx)("span", {
                  className: o().dnsLabel,
                  children: t("dashboard.imagehost.domains.dns.field_name")
                }), (0, e.jsxs)("div", {
                  className: o().dnsValueWrapper,
                  children: [(0, e.jsx)("div", {
                    className: o().dnsValue,
                    children: "@" !== s.nameCopy ? (0, e.jsxs)(e.Fragment, {
                      children: [s.nameCopy, (0, e.jsx)("span", {
                        children: s.name.replace(s.nameCopy, "")
                      })]
                    }) : s.name
                  }), (0, e.jsx)("span", {
                    className: o().domainsCopyBtn,
                    onClick: () => st(s.nameCopy),
                    children: r.A.copy
                  })]
                })]
              }), (0, e.jsxs)("div", {
                className: o().dnsField,
                children: [(0, e.jsx)("span", {
                  className: o().dnsLabel,
                  children: t("dashboard.imagehost.domains.dns.field_value")
                }), (0, e.jsxs)("div", {
                  className: o().dnsValueWrapper,
                  children: [(0, e.jsx)("div", {
                    className: o().dnsValue,
                    children: s.value
                  }), (0, e.jsx)("span", {
                    className: o().domainsCopyBtn,
                    onClick: () => st(s.value),
                    children: r.A.copy
                  })]
                })]
              })]
            })]
          });
        return (0, e.jsxs)(e.Fragment, {
          children: [(0, e.jsx)(c.l$, {
            richColors: !0,
            position: "top-center",
            theme: "dark",
            className: l().toasterStyles,
            icons: {
              success: r.A.successToast
            },
            visibleToasts: 2
          }), (0, e.jsx)(v.A, {
            opened: U,
            onClose: () => G(!1),
            title: se[Q],
            centered: !0,
            size: "domainVisibility" === Q ? "450px" : "auto",
            children: "dnsSetup" === Q ? sd && (a = sd.hostname, i = sd.cfManaged, n = sd.records, (0, e.jsxs)("div", {
              className: o().dnsModalBody,
              children: [(0, e.jsx)("div", {
                className: o().dnsModalHeader,
                children: (0, e.jsx)("div", {
                  className: o().dnsDescription,
                  children: t("dashboard.imagehost.domains.dns.instructions")
                })
              }), (0, e.jsx)("div", {
                className: o().dnsRecordsList,
                style: {
                  marginTop: 4
                },
                children: n.map((s, a) => (0, e.jsx)(sv, {
                  r: s
                }, a))
              }), (0, e.jsxs)("div", {
                className: o().dnsActionRow,
                children: [i && (0, e.jsxs)("div", {
                  className: o().dnsOnlyCf,
                  children: [(0, e.jsxs)("span", {
                    children: [m.A.domainNotice, " ", t("dashboard.imagehost.domains.dns.cf_notice")]
                  }), (0, e.jsx)("img", {
                    src: "https://assets.guns.lol/help-center/cf-dns-only.png",
                    alt: "CF Proxy off"
                  })]
                }), !i && (0, e.jsxs)("div", {
                  className: o().dnsNotice,
                  children: [m.A.domainNotice, " ", t("dashboard.imagehost.domains.dns.reminder")]
                }), (0, e.jsxs)("span", {
                  className: o().checkDomainButton,
                  onClick: () => sc(a),
                  children: [B ? m.A.loading : m.A.refresh, B ? "" : t("dashboard.imagehost.domains.dns.check_button")]
                })]
              })]
            })) : "deleteDomain" === Q && sd ? (0, e.jsx)("div", {
              className: o().deleteDomainModalBody,
              children: (0, e.jsxs)("div", {
                className: o().deleteDomainDescription,
                children: [t("dashboard.imagehost.domains.modals.delete_domain_message", {
                  hostname: sd.hostname
                }), (0, e.jsxs)("div", {
                  className: o().deleteDomainButtons,
                  children: [(0, e.jsx)("span", {
                    className: o().confirmDeleteButton,
                    onClick: s => {
                      sh(s, sd.hostname)
                    },
                    children: V ? m.A.loading : t("dashboard.imagehost.domains.modals.delete_button")
                  }), (0, e.jsx)("span", {
                    className: o().cancelDeleteButton,
                    onClick: () => G(!1),
                    children: t("dashboard.imagehost.domains.modals.cancel_button")
                  })]
                })]
              })
            }) : "domainVisibility" === Q ? (0, e.jsxs)(e.Fragment, {
              children: [(0, e.jsx)("div", {
                className: o().domainVisibilityHeader,
                children: (0, e.jsx)("h3", {
                  children: t("dashboard.imagehost.domains.visibility.current", {
                    hostname: sa?.hostname,
                    visibility: sa?.currentVisibility === "public" ? t("dashboard.imagehost.domains.visibility.public") : t("dashboard.imagehost.domains.visibility.private")
                  })
                })
              }), (0, e.jsx)("div", {
                className: o().domainVisibilityBanner,
                children: sa?.currentVisibility === "public" ? (0, e.jsxs)(e.Fragment, {
                  children: [m.A.alert, " ", t("dashboard.imagehost.domains.visibility.private_notice")]
                }) : (0, e.jsxs)(e.Fragment, {
                  children: [m.A.info, " ", t("dashboard.imagehost.domains.visibility.public_notice")]
                })
              }), (0, e.jsxs)("div", {
                className: o().visibilityButtonContainer,
                children: [(0, e.jsx)("span", {
                  onClick: () => sg(sa?.hostname, sa?.currentVisibility === "public" ? "private" : "public"),
                  children: sa?.currentVisibility === "public" ? t("dashboard.imagehost.domains.visibility.change_to_private") : t("dashboard.imagehost.domains.visibility.change_to_public")
                }), (0, e.jsx)("span", {
                  onClick: () => G(!1),
                  children: t("dashboard.imagehost.domains.modals.cancel_button")
                })]
              })]
            }) : "unsupportedDns" === Q && (0, e.jsxs)("div", {
              className: o().dnsModalBody,
              children: [(0, e.jsxs)("div", {
                className: o().errorModalBanner,
                children: [m.A.alert, (0, e.jsxs)("div", {
                  className: o().errorModalBannerText,
                  children: [t("dashboard.imagehost.domains.unsupported.title"), (0, e.jsx)("span", {
                    children: t("dashboard.imagehost.domains.unsupported.description", {
                      hostname: Y
                    })
                  })]
                })]
              }), (0, e.jsxs)("div", {
                className: o().warningText,
                children: [(0, e.jsx)("span", {
                  children: t("dashboard.imagehost.domains.unsupported.next_steps_title")
                }), (0, e.jsx)("p", {
                  style: {
                    margin: "6px 0 0 0"
                  },
                  children: t("dashboard.imagehost.domains.unsupported.cloudflare_tip")
                }), (0, e.jsx)("p", {
                  style: {
                    margin: "6px 0 0 0"
                  },
                  children: t("dashboard.imagehost.domains.unsupported.subdomain_tip", {
                    hostname: Y
                  })
                })]
              }), (0, e.jsx)("span", {
                className: o().closeErrorModalButton,
                onClick: () => G(!1),
                children: t("dashboard.imagehost.domains.unsupported.close_button")
              })]
            })
          }), (0, e.jsx)("div", {
            className: o().domainsHeader,
            children: (0, e.jsxs)("div", {
              className: o().domainsTitleContainer,
              children: [(0, e.jsxs)("h1", {
                children: [m.A.imagehostDomains, " ", t("dashboard.imagehost.domains.header.title")]
              }), (0, e.jsx)("h3", {
                children: t("dashboard.imagehost.domains.header.description")
              })]
            })
          }), (0, e.jsxs)("div", {
            className: o().domainsBody,
            children: [(0, e.jsxs)("div", {
              className: o().domainManagementContainer,
              children: [(0, e.jsxs)("div", {
                className: o().addDomainContainer,
                children: [(0, e.jsx)("h1", {
                  className: o().domainsLeftTitle,
                  children: t("dashboard.imagehost.domains.add_section.title")
                }), (0, e.jsx)("h3", {
                  className: o().domainsLeftSub,
                  children: t("dashboard.imagehost.domains.add_section.subtitle")
                }), (0, e.jsxs)("div", {
                  className: o().addDomainInfo,
                  children: [m.A.sparkles, " ", (0, e.jsx)("span", {
                    children: t("dashboard.imagehost.domains.add_section.badge_note")
                  })]
                }), (0, e.jsxs)("div", {
                  className: o().domainsFormBlock,
                  children: [(0, e.jsx)(p.A, {
                    id: "domainHost",
                    icon: m.A.link,
                    placeholder: t("dashboard.imagehost.domains.form.placeholder"),
                    value: W,
                    maxLength: 253,
                    onChange: s => Z(s.target.value),
                    featureName: t("dashboard.imagehost.domains.form.domain_label")
                  }), (0, e.jsx)(u.A, {
                    id: "domainVisibilityHelp",
                    featureName: t("dashboard.imagehost.domains.form.visibility_label"),
                    helpDescription: t("dashboard.imagehost.domains.form.visibility_help"),
                    element: (0, e.jsx)(h.A, {
                      id: "domainVisibility",
                      icon: m.A.visibility,
                      placeholder: t("dashboard.imagehost.domains.form.visibility_placeholder"),
                      value: q,
                      onChangeFunction: s => K(s),
                      data: [{
                        value: "private",
                        label: t("dashboard.imagehost.domains.visibility.private")
                      }, {
                        value: "public",
                        label: t("dashboard.imagehost.domains.visibility.public")
                      }]
                    })
                  }), (0, e.jsxs)("span", {
                    className: o().addDomainButton,
                    onClick: sr,
                    children: [J ? m.A.loading : m.A.addSign, " ", J ? t("dashboard.imagehost.domains.form.adding") : t("dashboard.imagehost.domains.form.add_button")]
                  }), so && !O && (0, e.jsxs)("div", {
                    className: o().pendingDomainsAlert,
                    children: [m.A.alert, " ", t("dashboard.imagehost.domains.add_section.pending_alert")]
                  })]
                })]
              }), (0, e.jsxs)("div", {
                className: o().myDomainsContainer,
                children: [(0, e.jsx)("h1", {
                  className: o().domainsLeftTitle,
                  children: t("dashboard.imagehost.domains.my_domains.title", {
                    count: D.length
                  })
                }), (0, e.jsx)("h3", {
                  className: o().domainsLeftSub,
                  children: t("dashboard.imagehost.domains.my_domains.subtitle")
                }), (0, e.jsxs)("div", {
                  className: o().domainsList,
                  children: [O && (0, e.jsx)("div", {
                    className: o().domainsLoading,
                    children: m.A.loading
                  }), !O && 0 === D.length && (0, e.jsx)("div", {
                    className: o().domainsEmpty,
                    children: t("dashboard.imagehost.domains.my_domains.empty")
                  }), !O && D.map(s => {
                    var a;
                    return (0, e.jsxs)("div", {
                      className: o().domainCard,
                      children: [(0, e.jsxs)("div", {
                        className: o().domainCardLeft,
                        children: [(0, e.jsxs)("div", {
                          className: o().domainCardHeader,
                          children: [(0, e.jsxs)("div", {
                            className: o().domainCardTop,
                            children: [(0, e.jsx)("span", {
                              className: o().domainNameList,
                              children: s.domain
                            }), (0, e.jsxs)("div", {
                              className: o().domainTagsWrapper,
                              children: [(0, e.jsx)("span", {
                                className: `${o().domainStatus} ${"active"===s.status&&"active"===s.sslStatus?o().active:o().pending}`,
                                children: "active" !== (a = s).status ? t({
                                  pending: "dashboard.imagehost.domains.status.hostname.pending",
                                  active: "dashboard.imagehost.domains.status.hostname.active",
                                  active_redeploying: "dashboard.imagehost.domains.status.hostname.redeploying",
                                  blocked: "dashboard.imagehost.domains.status.hostname.blocked",
                                  moved: "dashboard.imagehost.domains.status.hostname.moved",
                                  deleted: "dashboard.imagehost.domains.status.hostname.deleted"
                                } [a.status] || "dashboard.imagehost.domains.status.hostname.unknown") : "active" !== a.sslStatus ? t({
                                  initializing: "dashboard.imagehost.domains.status.ssl.initializing",
                                  pending_validation: "dashboard.imagehost.domains.status.ssl.pending_validation",
                                  pending_issuance: "dashboard.imagehost.domains.status.ssl.pending_issuance",
                                  pending_deployment: "dashboard.imagehost.domains.status.ssl.pending_deployment",
                                  active: "dashboard.imagehost.domains.status.ssl.active",
                                  pending_cleanup: "dashboard.imagehost.domains.status.ssl.pending_cleanup",
                                  holding_deployment: "dashboard.imagehost.domains.status.ssl.holding_deployment",
                                  deactivating: "dashboard.imagehost.domains.status.ssl.deactivating",
                                  inactive: "dashboard.imagehost.domains.status.ssl.inactive",
                                  expired: "dashboard.imagehost.domains.status.ssl.expired"
                                } [a.sslStatus] || "dashboard.imagehost.domains.status.ssl.unknown") : t("dashboard.imagehost.domains.status.active")
                              }), "active" === s.status && "active" === s.sslStatus && (0, e.jsx)("span", {
                                className: o().usageCountBadge,
                                children: t(y(N, "dashboard.imagehost.domains.my_domains.usage_badge", s.usageCount), {
                                  count: s.usageCount
                                })
                              }), (0, e.jsx)("span", {
                                className: o().visibilityBadge,
                                children: "public" === s.visibility ? t("dashboard.imagehost.domains.visibility.public") : t("dashboard.imagehost.domains.visibility.private")
                              })]
                            })]
                          }), "active" === s.status && "active" === s.sslStatus && (0, e.jsxs)("div", {
                            className: o().domainActions,
                            children: [(0, e.jsx)("span", {
                              onClick: () => sp(s.domain),
                              children: m.A.applyDomain
                            }), (0, e.jsx)("span", {
                              onClick: () => {
                                si({
                                  hostname: s.domain,
                                  currentVisibility: s.visibility
                                }), X("domainVisibility"), G(!0)
                              },
                              children: m.A.visibility
                            }), (0, e.jsx)("span", {
                              onClick: () => sb(s.domain),
                              children: m.A.deleteDomain
                            })]
                          })]
                        }), (0, e.jsx)("span", {
                          className: o().domainInfo,
                          children: t("dashboard.imagehost.domains.my_domains.added_on", {
                            date: new Date(1e3 * s.createdAt).toLocaleDateString()
                          })
                        })]
                      }), ("active" !== s.status || "active" !== s.sslStatus) && (0, e.jsxs)("div", {
                        className: o().domainCardActions,
                        children: [(0, e.jsxs)("span", {
                          className: o().domainDnsSetupButton,
                          onClick: () => {
                            sn({
                              hostname: s.domain,
                              cfManaged: s.cfManaged,
                              records: s.dnsRecords
                            }), X("dnsSetup"), G(!0)
                          },
                          children: [m.A.dnsSetup, " ", t("dashboard.imagehost.domains.my_domains.open_dns")]
                        }), (0, e.jsx)("span", {
                          className: o().domainDeleteButton,
                          onClick: () => sb(s.domain),
                          children: m.A.deleteDomain
                        })]
                      })]
                    }, s.id)
                  })]
                })]
              })]
            }), (0, e.jsxs)("div", {
              className: o().domainsListContainer,
              children: [(0, e.jsxs)("div", {
                className: o().domainsListHeader,
                children: [(0, e.jsx)("h1", {
                  children: t("dashboard.imagehost.domains.community.title")
                }), (0, e.jsx)("h3", {
                  children: t(y(N, "dashboard.imagehost.domains.community.subtitle", C.total + 1), {
                    count: C.total + 1
                  })
                })]
              }), (0, e.jsx)("div", {
                className: o().domainsControls,
                children: (0, e.jsxs)("div", {
                  className: o().searchInputWrapper,
                  children: [(0, e.jsxs)("div", {
                    className: o().searchInputContainer,
                    children: [(0, e.jsx)("input", {
                      type: "text",
                      className: o().searchInput,
                      style: {
                        paddingRight: "" !== P ? "40px" : "15px"
                      },
                      value: P,
                      onKeyDown: s => "Enter" === s.key && void(H(1), sl()),
                      onChange: s => E(s.target.value.trim()),
                      placeholder: t("dashboard.imagehost.domains.community.search_placeholder")
                    }), "" !== P && (0, e.jsx)("span", {
                      className: o().removeSearchButton,
                      onClick: () => E(""),
                      children: m.A.removeSearch
                    })]
                  }), (0, e.jsx)("span", {
                    className: o().searchButton,
                    children: m.A.search
                  })]
                })
              }), (0, e.jsxs)("div", {
                className: o().domainsList,
                children: [w && (0, e.jsx)("div", {
                  className: o().domainsLoading,
                  children: m.A.loading
                }), !w && 0 === A.length && (0, e.jsx)("div", {
                  className: o().domainsEmpty,
                  children: t("dashboard.imagehost.domains.community.empty")
                }), !w && A.map(s => (0, e.jsxs)("div", {
                  className: o().domainCardList,
                  children: [(0, e.jsxs)("div", {
                    className: o().domainCardListLeft,
                    children: [(0, e.jsx)("span", {
                      className: o().domainName,
                      children: s.domain
                    }), (0, e.jsx)("div", {
                      className: o().domainTags,
                      children: "DEFAULT" !== s.id ? (0, e.jsxs)(e.Fragment, {
                        children: [(0, e.jsx)("span", {
                          children: t("dashboard.imagehost.domains.visibility.public")
                        }), (0, e.jsx)("span", {
                          children: t(y(N, "dashboard.imagehost.domains.community.usage_badge", s.usageCount), {
                            count: s.usageCount
                          })
                        })]
                      }) : (0, e.jsx)("span", {
                        children: t("dashboard.imagehost.domains.community.default_badge")
                      })
                    })]
                  }), (0, e.jsx)("span", {
                    className: `${o().applyDomainButton} ${f===s.domain?o().applied:""}`,
                    onClick: () => sp(s.domain),
                    children: f === s.domain ? t("dashboard.imagehost.domains.community.applied") : t("dashboard.imagehost.domains.community.apply_button")
                  })]
                }, s.id))]
              }), C.totalPages > 1 && (0, e.jsx)("div", {
                className: o().paginationWrapper,
                children: (0, e.jsx)(b.A, {
                  value: F,
                  onChange: H,
                  total: C.totalPages
                })
              })]
            })]
          })]
        })
      }
    },
    57157: (s, a, i) => {
      i.d(a, {
        A: () => l
      });
      var e = i(95155),
        d = i(98241),
        n = i.n(d),
        o = i(54834),
        t = i(81576);

      function l({
        featureName: s,
        helpDescription: a,
        element: i,
        id: d
      }) {
        return (0, e.jsxs)("div", {
          className: n().featureName,
          children: [(0, e.jsxs)("h1", {
            className: n().featureNameText,
            style: {
              marginBottom: "6px"
            },
            children: [s, (0, e.jsxs)(t.Ay, {
              width: "370px",
              position: "top",
              id: d,
              children: [(0, e.jsx)(t.Ay.Target, {
                children: o.A.help
              }), (0, e.jsx)(t.Ay.Dropdown, {
                children: (0, e.jsx)("div", {
                  className: n().helpDescription,
                  children: a.split("\n").map((s, a) => (0, e.jsxs)("span", {
                    children: [s, (0, e.jsx)("br", {})]
                  }, a))
                })
              })]
            })]
          }), i]
        })
      }
    }
  }
]);