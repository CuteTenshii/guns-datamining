(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2617], {
    22834: (e, a, d) => {
      "use strict";
      d.d(a, {
        n: () => f
      });
      var s = d(95155),
        t = d(12115),
        o = d(67361),
        c = d.n(o);
      let n = (0, t.createContext)(null),
        r = (0, t.createContext)(null),
        i = (...e) => e.filter(Boolean).join(" "),
        b = () => {
          let e = (0, t.useContext)(n);
          if (!e) throw Error("Accordion components must be used within <Accordion>");
          return e
        },
        l = () => {
          let e = (0, t.useContext)(r);
          if (!e) throw Error("Accordion.Item subcomponents must be used within <Accordion.Item>");
          return e
        },
        _ = (e, a) => a ? Array.isArray(e) ? e : "string" == typeof e ? [e] : [] : Array.isArray(e) ? e[0] ?? null : "string" == typeof e ? e : e ?? null,
        f = Object.assign(({
          children: e,
          value: a,
          defaultValue: d,
          multiple: o = !1,
          onChange: r,
          className: b = "",
          ...l
        }) => {
          let f = void 0 !== a,
            p = f ? _(a, o) : null,
            [u, m] = (0, t.useState)(() => _(d, o)),
            h = f ? p : u,
            N = (0, t.useCallback)(e => o ? Array.isArray(h) && h.includes(e) : h === e, [h, o]),
            S = (0, t.useCallback)(e => {
              let a = ((e, a, d) => {
                if (d) {
                  let d = Array.isArray(e) ? e : [];
                  return d.includes(a) ? d.filter(e => e !== a) : [...d, a]
                }
                return e === a ? null : a
              })(h, e, o);
              f || m(a), r?.(a)
            }, [h, f, o, r]),
            U = (0, t.useMemo)(() => ({
              multiple: o,
              currentValue: h,
              toggleItem: S,
              isItemActive: N
            }), [o, h, S, N]);
          return (0, s.jsx)(n.Provider, {
            value: U,
            children: (0, s.jsx)("div", {
              className: i(c().accordion, b),
              ...l,
              children: e
            })
          })
        }, {
          Item: ({
            value: e,
            children: a,
            className: d = "",
            ...o
          }) => {
            let n = b(),
              l = (0, t.useId)(),
              _ = (0, t.useRef)(`${l}-control`),
              f = (0, t.useRef)(`${l}-panel`),
              p = n.isItemActive(e),
              u = (0, t.useMemo)(() => ({
                value: e,
                controlIdRef: _,
                panelIdRef: f
              }), [e]);
            return (0, s.jsx)(r.Provider, {
              value: u,
              children: (0, s.jsx)("div", {
                ...o,
                className: i(c().item, d),
                "data-active": p || void 0,
                children: a
              })
            })
          },
          Control: (0, t.forwardRef)(function({
            children: e,
            className: a = "",
            onClick: d,
            disabled: t,
            id: o,
            ...n
          }, r) {
            let _ = b(),
              f = l(),
              p = o ?? f.controlIdRef.current;
            f.controlIdRef.current = p;
            let u = _.isItemActive(f.value);
            return (0, s.jsx)("button", {
              type: "button",
              ...n,
              id: p,
              ref: r,
              className: i(c().control, a),
              "data-active": u || void 0,
              disabled: t,
              onClick: e => {
                d?.(e), e.defaultPrevented || t || _.toggleItem(f.value)
              },
              children: e
            })
          }),
          Panel: (0, t.forwardRef)(function({
            children: e,
            className: a = "",
            id: d,
            ...o
          }, n) {
            let r = b(),
              _ = l(),
              f = d ?? _.panelIdRef.current;
            _.panelIdRef.current = f;
            let p = r.isItemActive(_.value),
              u = (0, t.useRef)(null),
              [m, h] = (0, t.useState)(0),
              [N, S] = (0, t.useState)(!1);
            (0, t.useEffect)(() => {
              let e = u.current;
              if (!e) return;
              let a = window,
                d = () => {
                  h(e.scrollHeight), S(!0)
                };
              if (d(), void 0 !== a.ResizeObserver) {
                let s = new a.ResizeObserver(d);
                return s.observe(e), () => s.disconnect()
              }
              return a.addEventListener("resize", d), () => a.removeEventListener("resize", d)
            }, []);
            let U = p ? N && m > 0 ? `${m}px` : void 0 : "0px";
            return (0, s.jsx)("div", {
              ...o,
              id: f,
              ref: n,
              className: i(c().panel, a),
              "data-active": p || void 0,
              children: (0, s.jsx)("div", {
                ref: u,
                className: c().content,
                style: {
                  overflow: "hidden",
                  maxHeight: U,
                  opacity: +!!p,
                  transition: N ? "max-height 220ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms ease" : void 0
                },
                children: (0, s.jsx)("div", {
                  className: c().contentInner,
                  children: e
                })
              })
            })
          })
        })
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
    },
    67361: e => {
      e.exports = {
        accordion: "GUNS__12-be3077f3-a8f18deb-1bbe4bcd",
        item: "GUNS__ed-1f5db1b6-6e1c9e9a-9df02a11",
        control: "GUNS__27-485642c9-68e46e30-ba776f64",
        panel: "GUNS__84-639dc8cb-feb99d31-87968fa3",
        content: "GUNS__7f-f8ad7c54-d23abd9d-5b6e2871",
        contentInner: "GUNS__d9-e226e07f-f18301ba-9c54b47c"
      }
    },
    72617: (e, a, d) => {
      "use strict";
      d.r(a), d.d(a, {
        default: () => h
      });
      var s = d(95155),
        t = d(12115),
        o = d(56891),
        c = d.n(o),
        n = d(86297),
        r = d(98241),
        i = d.n(r),
        b = d(54834),
        l = d(66609),
        _ = d(22834),
        f = d(86891);
      let p = "https://help.guns.lol/how-to-guides/image-host",
        u = {
          windows: "Windows",
          macos: "macOS",
          linux: "Linux",
          ios: "iOS",
          android: "Android"
        };

      function m() {
        if ("undefined" == typeof navigator) return "windows";
        let e = navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test(e) ? "ios" : /android/.test(e) ? "android" : /windows|win32|win64/.test(e) ? "windows" : /mac os x|macintosh/.test(e) ? "macos" : /linux|x11/.test(e) ? "linux" : "windows"
      }

      function h({
        data: e
      }) {
        let a = (0, f.kj)(),
          [d, o] = (0, t.useState)(m()),
          [r, h] = (0, t.useState)(!1),
          [N, S] = (0, t.useState)({
            windows: "",
            macos: "",
            linux: ""
          }),
          [U, G] = (0, t.useState)(null),
          g = U?.config?.secret_key || "",
          x = g ? g.slice(0, 5) + "************" : "",
          w = (0, t.useMemo)(() => ({
            windows: a("dashboard.imagehost.setup.platform_names.windows"),
            macos: a("dashboard.imagehost.setup.platform_names.macos"),
            linux: a("dashboard.imagehost.setup.platform_names.linux"),
            ios: a("dashboard.imagehost.setup.platform_names.ios"),
            android: a("dashboard.imagehost.setup.platform_names.android")
          }), [a]),
          j = (0, t.useMemo)(() => ({
            windows: `${p}#windows-desktop-app`,
            macos: `${p}#macos-desktop-app`,
            linux: `${p}#linux-deb`,
            ios: `${p}#ios-shortcut`,
            android: `${p}#android-xshare`
          }), []),
          v = a("dashboard.imagehost.setup.shared.optional_hotkey"),
          y = a("dashboard.imagehost.setup.shared.use_app"),
          C = a("dashboard.imagehost.setup.common.app_name"),
          k = a("dashboard.imagehost.setup.common.xshare_name"),
          A = a("dashboard.imagehost.setup.common.xshare_config"),
          B = a("dashboard.imagehost.setup.common.ios_shortcut_name"),
          L = async e => {
            try {
              await navigator.clipboard.writeText(e), l.oR.success(a("dashboard.imagehost.setup.copy_success"))
            } catch {
              l.oR.error(a("dashboard.imagehost.setup.copy_failed"))
            }
          }, T = ({
            n: e,
            children: a
          }) => (0, s.jsxs)("div", {
            className: c().setupStepRow,
            children: [(0, s.jsx)("div", {
              className: c().setupStepIndex,
              children: e
            }), (0, s.jsx)("div", {
              className: c().setupStepText,
              children: a
            })]
          }), R = async () => {
            let e = await fetch("/api/dashboard/imagehost/data", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                }
              }),
              a = await e.json();
            e.ok ? G(a) : l.oR.error(a.error)
          }, I = async () => {
            let e = await fetch("/api/dashboard/imagehost/appDownloadUrls", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                }
              }),
              a = await e.json();
            if (!e.ok) return l.oR.error(a.error), null;
            S(a)
          };
        return (0, t.useEffect)(() => {
          R(), I()
        }, []), (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(l.l$, {
            richColors: !0,
            position: "top-center",
            theme: "dark",
            className: i().toasterStyles,
            icons: {
              success: b.A.successToast
            },
            visibleToasts: 2
          }), (0, s.jsx)("div", {
            className: c().setupWrapper,
            children: (0, s.jsxs)("div", {
              className: c().setupCard,
              children: [(0, s.jsx)("div", {
                className: c().setupTabs,
                children: Object.keys(u).map(e => (0, s.jsxs)("button", {
                  onClick: () => o(e),
                  className: `${c().setupTab} ${d===e?c().setupTabActive:""}`,
                  children: [w[e], e === m() && (0, s.jsx)("span", {
                    className: c().setupAutoBadge,
                    children: a("dashboard.imagehost.setup.tabs.detected")
                  })]
                }, e))
              }), (0, s.jsxs)("div", {
                className: c().setupKeyBlock,
                children: [(0, s.jsxs)("div", {
                  className: c().setupKeyLabel,
                  children: [n.A.key, " ", a("dashboard.imagehost.setup.upload_key.label")]
                }), (0, s.jsxs)("div", {
                  className: c().setupKeyRow,
                  children: [(0, s.jsx)("span", {
                    className: c().setupKeyValue,
                    children: r ? g : x
                  }), (0, s.jsxs)("div", {
                    className: c().setupKeyActions,
                    children: [(0, s.jsxs)("span", {
                      className: c().uploadKeyButton,
                      onClick: () => h(e => !e),
                      children: [r ? b.A.hidePassword : b.A.password, " ", r ? a("dashboard.imagehost.setup.upload_key.hide") : a("dashboard.imagehost.setup.upload_key.reveal")]
                    }), (0, s.jsxs)("span", {
                      className: c().uploadKeyButton,
                      onClick: () => L(g),
                      children: [b.A.copy, " ", a("dashboard.imagehost.setup.upload_key.copy")]
                    })]
                  })]
                }), (0, s.jsx)("div", {
                  className: c().uploadKeyNote,
                  children: a("dashboard.imagehost.setup.upload_key.note")
                })]
              }), (0, s.jsxs)("div", {
                className: c().setupSteps,
                children: [(0, s.jsx)("div", {
                  className: c().setupStepsHeader,
                  children: (0, s.jsx)("h2", {
                    children: a("dashboard.imagehost.setup.steps_header", {
                      platform: w[d]
                    })
                  })
                }), (0, s.jsx)("div", {
                  className: c().setupStepsBody,
                  children: (0, s.jsx)(() => {
                    switch (d) {
                      case "windows":
                        return (0, s.jsxs)(s.Fragment, {
                          children: [(0, s.jsx)(T, {
                            n: 1,
                            children: a("dashboard.imagehost.setup.windows.step1", {
                              link: (0, s.jsxs)("a", {
                                href: N?.windows,
                                download: !0,
                                children: [n.A.externalLink, " ", C]
                              })
                            })
                          }), (0, s.jsx)(T, {
                            n: 2,
                            children: a("dashboard.imagehost.setup.windows.step2")
                          }), (0, s.jsx)(T, {
                            n: 3,
                            children: v
                          }), (0, s.jsx)(T, {
                            n: 4,
                            children: y
                          }), (0, s.jsxs)("div", {
                            className: c().setupButtonWrapper,
                            children: [(0, s.jsx)("div", {
                              className: c().accordionWrapper,
                              children: (0, s.jsx)(_.n, {
                                children: (0, s.jsxs)(_.n.Item, {
                                  value: "windows-warning",
                                  id: "windows-warning",
                                  className: c().setupAccordionItem,
                                  children: [(0, s.jsx)(_.n.Control, {
                                    id: "windows-warning-control",
                                    className: c().setupAccordionControl,
                                    children: a("dashboard.imagehost.setup.windows.warning.title")
                                  }), (0, s.jsxs)(_.n.Panel, {
                                    children: [a("dashboard.imagehost.setup.windows.warning.body"), (0, s.jsx)("br", {}), a("dashboard.imagehost.setup.windows.warning.hint")]
                                  })]
                                }, "windows-warning")
                              })
                            }), (0, s.jsxs)("a", {
                              href: j.windows,
                              target: "_blank",
                              rel: "noreferrer",
                              className: c().openDocsButton,
                              children: [n.A.link, " ", a("dashboard.imagehost.setup.buttons.open_guide", {
                                platform: w.windows
                              })]
                            })]
                          })]
                        });
                      case "macos":
                        return (0, s.jsxs)(s.Fragment, {
                          children: [(0, s.jsx)(T, {
                            n: 1,
                            children: a("dashboard.imagehost.setup.macos.step1", {
                              link: (0, s.jsxs)("a", {
                                href: N?.macos,
                                download: !0,
                                children: [n.A.externalLink, " ", C]
                              })
                            })
                          }), (0, s.jsx)(T, {
                            n: 2,
                            children: a("dashboard.imagehost.setup.macos.step2", {
                              dmg: (0, s.jsx)("strong", {
                                children: ".dmg"
                              }),
                              folder: (0, s.jsx)("strong", {
                                children: a("dashboard.imagehost.setup.macos.applications_label")
                              })
                            })
                          }), (0, s.jsx)(T, {
                            n: 3,
                            children: a("dashboard.imagehost.setup.macos.step3")
                          }), (0, s.jsxs)("div", {
                            className: c().warningText,
                            children: [(0, s.jsx)("span", {
                              children: a("dashboard.imagehost.setup.macos.warning.title")
                            }), a("dashboard.imagehost.setup.macos.warning.step1"), (0, s.jsx)("br", {}), a("dashboard.imagehost.setup.macos.warning.step2", {
                              command: (0, s.jsx)("code", {
                                children: 'sudo xattr -rd com.apple.quarantine "/Applications/guns.lol Image Host.app"'
                              })
                            })]
                          }), (0, s.jsx)(T, {
                            n: 4,
                            children: v
                          }), (0, s.jsx)(T, {
                            n: 5,
                            children: y
                          }), (0, s.jsx)("div", {
                            className: c().setupButtonWrapper,
                            children: (0, s.jsxs)("a", {
                              href: j.macos,
                              target: "_blank",
                              rel: "noreferrer",
                              className: c().openDocsButton,
                              children: [n.A.link, " ", a("dashboard.imagehost.setup.buttons.open_guide", {
                                platform: w.macos
                              })]
                            })
                          })]
                        });
                      case "linux":
                        return (0, s.jsxs)(s.Fragment, {
                          children: [(0, s.jsx)(T, {
                            n: 1,
                            children: a("dashboard.imagehost.setup.linux.step1", {
                              link: (0, s.jsxs)("a", {
                                href: N?.linux,
                                download: !0,
                                children: [n.A.externalLink, " ", C]
                              })
                            })
                          }), (0, s.jsx)(T, {
                            n: 2,
                            children: a("dashboard.imagehost.setup.linux.step2")
                          }), (0, s.jsx)(T, {
                            n: 3,
                            children: v
                          }), (0, s.jsx)(T, {
                            n: 4,
                            children: y
                          }), (0, s.jsx)("div", {
                            className: c().setupButtonWrapper,
                            children: (0, s.jsxs)("a", {
                              href: j.linux,
                              target: "_blank",
                              rel: "noreferrer",
                              className: c().openDocsButton,
                              children: [n.A.link, " ", a("dashboard.imagehost.setup.buttons.open_guide", {
                                platform: w.linux
                              })]
                            })
                          })]
                        });
                      case "android":
                        return (0, s.jsxs)(s.Fragment, {
                          children: [(0, s.jsx)(T, {
                            n: 1,
                            children: a("dashboard.imagehost.setup.android.step1", {
                              link: (0, s.jsxs)("a", {
                                href: "https://github.com/tsdko/xshare/releases/latest",
                                target: "_blank",
                                children: [n.A.externalLink, " ", k]
                              })
                            })
                          }), (0, s.jsx)(T, {
                            n: 2,
                            children: a("dashboard.imagehost.setup.android.step2", {
                              config: (0, s.jsxs)("a", {
                                onClick: () => {
                                  let e, a, d;
                                  return e = new Blob([JSON.stringify({
                                    Version: "13.1.0",
                                    Name: "guns.lol - Image Host",
                                    DestinationType: "ImageUploader, FileUploader",
                                    RequestMethod: "POST",
                                    RequestURL: "https://guns.lol/api/imagehost/upload",
                                    Body: "MultipartFormData",
                                    Arguments: {
                                      key: g
                                    },
                                    FileFormName: "file",
                                    URL: "$json:link$",
                                    DeletionURL: "$json:deletion_url$",
                                    ErrorMessage: "$json:error$",
                                    Data: ""
                                  }, null, 2)], {
                                    type: "application/json"
                                  }), a = window.URL.createObjectURL(e), void((d = document.createElement("a")).href = a, d.download = "guns.lol_config.sxcu", d.click(), window.URL.revokeObjectURL(a))
                                },
                                children: [n.A.externalLink, " ", A]
                              })
                            })
                          }), (0, s.jsx)(T, {
                            n: 3,
                            children: a("dashboard.imagehost.setup.android.step3")
                          }), (0, s.jsx)(T, {
                            n: 4,
                            children: a("dashboard.imagehost.setup.android.step4")
                          }), (0, s.jsx)(T, {
                            n: 5,
                            children: a("dashboard.imagehost.setup.android.step5")
                          }), (0, s.jsx)(T, {
                            n: 6,
                            children: a("dashboard.imagehost.setup.android.step6")
                          }), (0, s.jsx)("div", {
                            className: c().setupButtonWrapper,
                            children: (0, s.jsxs)("a", {
                              href: j.android,
                              target: "_blank",
                              rel: "noreferrer",
                              className: c().openDocsButton,
                              children: [n.A.link, " ", a("dashboard.imagehost.setup.buttons.open_guide", {
                                platform: w.android
                              })]
                            })
                          })]
                        });
                      case "ios":
                        return (0, s.jsxs)(s.Fragment, {
                          children: [(0, s.jsx)(T, {
                            n: 1,
                            children: a("dashboard.imagehost.setup.ios.step1", {
                              shortcut: (0, s.jsxs)("a", {
                                href: "https://www.icloud.com/shortcuts/f38438b968cc4e068e06558e31c16a68",
                                target: "_blank",
                                children: [n.A.externalLink, " ", a("dashboard.imagehost.setup.common.ios_shortcut_label")]
                              }),
                              name: B
                            })
                          }), (0, s.jsx)(T, {
                            n: 2,
                            children: a("dashboard.imagehost.setup.ios.step2", {
                              name: B
                            })
                          }), (0, s.jsx)(T, {
                            n: 3,
                            children: a("dashboard.imagehost.setup.ios.step3")
                          }), (0, s.jsx)(T, {
                            n: 4,
                            children: a("dashboard.imagehost.setup.ios.step4")
                          }), (0, s.jsx)(T, {
                            n: 5,
                            children: a("dashboard.imagehost.setup.ios.step5")
                          }), (0, s.jsx)("div", {
                            className: c().setupButtonWrapper,
                            children: (0, s.jsxs)("a", {
                              href: j.ios,
                              target: "_blank",
                              rel: "noreferrer",
                              className: c().openDocsButton,
                              children: [n.A.link, " ", a("dashboard.imagehost.setup.buttons.open_guide", {
                                platform: w.ios
                              })]
                            })
                          })]
                        })
                    }
                  }, {})
                })]
              })]
            })
          })]
        })
      }
    }
  }
]);