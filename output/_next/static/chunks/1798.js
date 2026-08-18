(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1798], {
    7092: e => {
      e.exports = {
        container: "GUNS__a3-24c433d6-378c65c5-2a8e726a",
        label: "GUNS__4f-eeffaf02-c3f457dc-e1ef8e24",
        shell: "GUNS__3b-14d46023-9e79b44b-159c4ff0",
        iconSlot: "GUNS__d3-c21cfd38-430b0eff-b94dc041",
        trigger: "GUNS__5d-ca15789f-fd0ac2bd-19e39093",
        triggerWithIcon: "GUNS__65-05a6d251-5f226ec3-05f5c4ce",
        value: "GUNS__07-9e3274c0-c9b7af62-a0bf4c90",
        placeholder: "GUNS__48-aee4e72d-4ec1dc72-c8ce0788",
        chevrons: "GUNS__bf-591b5384-98753a6b-866fb128",
        dropdown: "GUNS__07-c3fa643a-8fe967b1-59b4fc78",
        optionList: "GUNS__38-ea4b0fb7-4d271638-45d22497",
        option: "GUNS__58-75b6f7ee-8f90fb52-c8d87b43",
        emptyState: "GUNS__a1-5fe1652b-2b03f8ad-cf811adc"
      }
    },
    19376: (e, a, d) => {
      "use strict";
      d.d(a, {
        A: () => o
      });
      var t = d(95155),
        c = d(12115),
        n = d(29722),
        f = d(71537),
        _ = d.n(f);
      let b = (e, a, d) => Math.min(Math.max(e, a), d),
        i = (e, a) => e > a ? [] : Array.from({
          length: a - e + 1
        }, (a, d) => e + d);

      function o({
        value: e,
        onChange: a,
        total: d,
        className: f,
        siblings: o = 1,
        disabled: r = !1,
        prevIcon: l = (0, t.jsx)("span", {
          children: "‹"
        }),
        nextIcon: s = (0, t.jsx)("span", {
          children: "›"
        })
      }) {
        let S = b(e, 1, Math.max(1, d)),
          u = (0, c.useMemo)(() => (function(e, a, d) {
            let t = Math.max(0, d);
            if (a <= 2 * t + 5) return i(1, a);
            let c = Math.max(e - t, 2),
              n = Math.min(e + t, a - 1),
              f = c > 2,
              _ = n < a - 1,
              b = [1];
            if (!f && !_) return b.push(...i(2, a - 1), a), b;
            if (!f && _) {
              let e = Math.min(a - 1, 3 + 2 * t);
              return b.push(...i(2, e)), b.push("end-ellipsis", a), b
            }
            if (f && !_) {
              let e = Math.max(2, a - (3 + 2 * t) + 1);
              return b.push("start-ellipsis", ...i(e, a - 1), a), b
            }
            return b.push("start-ellipsis", ...i(c, n), "end-ellipsis", a), b
          })(S, Math.max(1, d), o), [S, d, o]);
        if (d <= 1) return null;
        let N = e => {
          if (r || e === S) return;
          let t = b(e, 1, d);
          t !== S && a(t)
        };
        return (0, t.jsxs)("nav", {
          className: (0, n.A)(_().pagination, f),
          children: [(0, t.jsx)("button", {
            type: "button",
            className: (0, n.A)(_().pageButton, _().arrowButton),
            onClick: () => N(S - 1),
            disabled: 1 === S || r,
            children: l
          }), u.map((e, a) => {
            if ("number" == typeof e) {
              let a = e === S;
              return (0, t.jsx)("button", {
                type: "button",
                className: (0, n.A)(_().pageButton, {
                  [_().active]: a
                }),
                onClick: () => N(e),
                children: e
              }, `page-${e}`)
            }
            return (0, t.jsx)("span", {
              className: _().ellipsis,
              children: "…"
            }, `${e}-${a}`)
          }), (0, t.jsx)("button", {
            type: "button",
            className: (0, n.A)(_().pageButton, _().arrowButton),
            onClick: () => N(S + 1),
            disabled: S === d || r,
            children: s
          })]
        })
      }
    },
    29483: (e, a, d) => {
      "use strict";
      d.d(a, {
        A: () => f
      });
      var t = d(12115);
      let c = {
          leading: !1,
          trailing: !0
        },
        n = e => {
          e.current && (clearTimeout(e.current), e.current = null)
        };

      function f(e, a = 600, d = c) {
        let {
          leading: _ = !1,
          trailing: b = !0,
          maxWait: i
        } = d, [o, r] = (0, t.useState)(e), l = (0, t.useRef)(null), s = (0, t.useRef)(null), S = (0, t.useRef)(!1), u = (0, t.useCallback)(() => {
          n(l), n(s), S.current = !1
        }, []), N = (0, t.useCallback)(() => {
          n(l), n(s), S.current = !1, r(e)
        }, [e]);
        return (0, t.useEffect)(() => (_ && !S.current && (r(e), S.current = !0), n(l), b && (l.current = setTimeout(() => {
          r(e), S.current = !1
        }, a)), "number" == typeof i && (n(s), s.current = setTimeout(() => {
          r(e), S.current = !1, n(l)
        }, i)), () => {
          n(l), n(s)
        }), [e, a, _, b, i]), [o, {
          cancel: u,
          flush: N,
          setValue: r
        }]
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
    },
    60141: (e, a, d) => {
      "use strict";
      d.d(a, {
        A: () => i
      });
      var t = d(95155),
        c = d(29722),
        n = d(12115),
        f = d(47650),
        _ = d(7092),
        b = d.n(_);

      function i({
        featureName: e,
        icon: a,
        placeholder: d,
        data: _,
        value: i,
        defaultValue: o = null,
        onChangeFunction: r,
        dropdownMaxHeight: l = 240,
        dropdownClassName: s,
        className: S,
        disabled: u,
        name: N,
        required: U,
        id: G,
        onFocus: p,
        onBlur: m,
        onKeyDown: h,
        ...g
      }) {
        let v = (0, n.useMemo)(() => Array.isArray(_) ? _.map(e => "string" == typeof e ? {
            value: e,
            label: e
          } : e?.value === void 0 || e?.value === null ? null : {
            value: e.value,
            label: e.label ?? e.value,
            disabled: e.disabled ?? !1
          }).filter(e => !!e) : [], [_]),
          w = void 0 !== i,
          [C, x] = (0, n.useState)(o ?? null),
          [y, B] = (0, n.useState)(!1),
          [L, A] = (0, n.useState)(!1),
          [M, T] = (0, n.useState)(-1),
          k = (0, n.useRef)(null),
          E = (0, n.useRef)(null),
          D = (0, n.useRef)(null),
          j = (0, n.useRef)(null),
          [H, I] = (0, n.useState)(null),
          [R, W] = (0, n.useState)(!1),
          F = (0, n.useId)(),
          V = G ?? F,
          $ = `${V}-dropdown`,
          K = (0, n.useCallback)(() => {
            let e = E.current;
            if (!e) return;
            let a = e.getBoundingClientRect(),
              d = window.visualViewport,
              t = d?.offsetLeft ?? 0,
              c = d?.offsetTop ?? 0,
              n = d?.width ?? window.innerWidth,
              f = c + (d?.height ?? window.innerHeight),
              _ = j.current,
              b = D.current,
              i = _ && b ? Math.max(12, _.offsetHeight - b.clientHeight) : 16,
              o = b?.scrollHeight ?? Math.max(40, 40 * v.length),
              r = Math.min(o, l) + i,
              s = Math.max(0, f - a.bottom - 9 - 8),
              S = Math.max(0, a.top - c - 9 - 8),
              u = r > s && S > s ? "top" : "bottom",
              N = Math.max(40, Math.min(l, ("top" === u ? S : s) - i)),
              U = Math.min(o, N) + i,
              G = Math.min(a.width, Math.max(0, n - 16));
            I({
              left: Math.min(Math.max(a.left, t + 8), Math.max(t + 8, t + n - 8 - G)),
              top: Math.min("top" === u ? Math.max(c + 8, a.top - 9 - U) : a.bottom + 9, Math.max(c + 8, f - 8 - U)),
              width: G,
              listMaxHeight: N,
              placement: u
            })
          }, [l, v.length]);
        (0, n.useEffect)(() => {
          w || x(o ?? null)
        }, [o, w]), (0, n.useEffect)(() => {
          W(!0)
        }, []);
        let P = w ? i ?? null : C,
          z = null == P ? "" : String(P),
          q = v.find(e => e.value === P) ?? null,
          O = !!q || null != P && "" != `${P}`;
        (0, n.useEffect)(() => {
          y ? T(q && !q.disabled ? v.findIndex(e => e.value === q.value) : v.findIndex(e => !e.disabled)) : T(-1)
        }, [y, v, q]), (0, n.useEffect)(() => {
          if (!y) return;
          K();
          let e = window.requestAnimationFrame(K);
          return window.addEventListener("resize", K), window.addEventListener("scroll", K, !0), window.visualViewport?.addEventListener("resize", K), window.visualViewport?.addEventListener("scroll", K), () => {
            window.cancelAnimationFrame(e), window.removeEventListener("resize", K), window.removeEventListener("scroll", K, !0), window.visualViewport?.removeEventListener("resize", K), window.visualViewport?.removeEventListener("scroll", K)
          }
        }, [y, K]), (0, n.useEffect)(() => {
          if (!y) return;
          let e = e => {
            let a = e.target,
              d = k.current?.contains(a),
              t = j.current?.contains(a);
            d || t || B(!1)
          };
          return document.addEventListener("mousedown", e), document.addEventListener("touchstart", e), () => {
            document.removeEventListener("mousedown", e), document.removeEventListener("touchstart", e)
          }
        }, [y]), (0, n.useEffect)(() => {
          if (!y || M < 0) return;
          let e = D.current,
            a = e?.children[M];
          if (e && a) {
            let d = a.offsetTop,
              t = d + a.offsetHeight,
              c = e.scrollTop,
              n = c + e.clientHeight;
            d < c ? e.scrollTop = d : t > n && (e.scrollTop = t - e.clientHeight)
          }
        }, [M, y]);
        let Q = e => {
            let a = v[e];
            if (a && !a.disabled) {
              var d;
              d = a.value, w || x(d), r?.(d), B(!1)
            }
          },
          J = e => {
            if (!v.length || !v.some(e => !e.disabled)) return;
            let a = M;
            for (let d = 0; d < v.length; d += 1)
              if (a = (a + e + v.length) % v.length, !v[a].disabled) {
                T(a);
                break
              }
          },
          X = q?.label ?? (O ? String(P ?? "") : d),
          Y = (0, t.jsx)("div", {
            ref: j,
            className: (0, c.A)(b().dropdown, s),
            "data-open": y,
            "data-placement": H?.placement ?? "bottom",
            id: $,
            style: {
              position: "fixed",
              width: H?.width,
              left: H?.left,
              top: H?.top
            },
            children: v.length > 0 ? (0, t.jsx)("ul", {
              ref: D,
              className: b().optionList,
              style: {
                maxHeight: H?.listMaxHeight ?? l
              },
              children: v.map((e, a) => {
                let d = `${$}-option-${a}`,
                  c = a === M,
                  n = e.value === P;
                return (0, t.jsx)("li", {
                  id: d,
                  "data-highlighted": c,
                  "data-selected": n,
                  "data-disabled": e.disabled,
                  className: b().option,
                  onMouseDown: e => e.preventDefault(),
                  onMouseEnter: () => {
                    e.disabled || T(a)
                  },
                  onClick: () => Q(a),
                  children: (0, t.jsx)("span", {
                    children: e.label
                  })
                }, `${e.value}-${a}`)
              })
            }) : (0, t.jsx)("div", {
              className: b().emptyState,
              children: "No options available"
            })
          }),
          Z = R && "undefined" != typeof document ? (0, f.createPortal)(Y, document.body) : null,
          ee = "string" == typeof e ? e : void 0;
        return (0, t.jsxs)("div", {
          className: b().container,
          ref: k,
          "data-dashboard-feature-label": ee,
          children: [e && (0, t.jsx)("div", {
            className: b().label,
            children: e
          }), N && (0, t.jsx)("input", {
            type: "hidden",
            name: N,
            value: z,
            required: U
          }), (0, t.jsxs)("div", {
            className: (0, c.A)(b().shell, S),
            "data-open": y,
            "data-focused": L,
            "data-disabled": u,
            ref: E,
            children: [a && (0, t.jsx)("span", {
              className: b().iconSlot,
              children: a
            }), (0, t.jsx)("button", {
              ...g,
              id: V,
              type: "button",
              className: (0, c.A)(b().trigger, a ? b().triggerWithIcon : void 0),
              onFocus: e => {
                A(!0), p?.(e)
              },
              onBlur: e => {
                let a = e.relatedTarget;
                a && k.current?.contains(a) || (A(!1), B(!1)), m?.(e)
              },
              onClick: () => {
                u || B(e => {
                  let a = !e;
                  return !e && a && K(), a
                })
              },
              onKeyDown: e => {
                u || ("ArrowDown" === e.key ? (e.preventDefault(), y ? J(1) : (K(), B(!0))) : "ArrowUp" === e.key ? (e.preventDefault(), y ? J(-1) : (K(), B(!0))) : "Enter" === e.key || " " === e.key ? (e.preventDefault(), y ? M >= 0 && Q(M) : (K(), B(!0))) : "Escape" === e.key ? y && (e.preventDefault(), B(!1)) : "Tab" === e.key && B(!1)), h?.(e)
              },
              disabled: u,
              children: (0, t.jsx)("span", {
                className: (0, c.A)(b().value, !O && b().placeholder),
                children: X || d || "Select an option"
              })
            }), (0, t.jsxs)("span", {
              className: b().chevrons,
              children: [(0, t.jsx)("span", {
                children: "▲"
              }), (0, t.jsx)("span", {
                children: "▼"
              })]
            })]
          }), Z]
        })
      }
    },
    71537: e => {
      e.exports = {
        pagination: "GUNS__6a-82551f81-9c04c9f2-03cac168",
        pageButton: "GUNS__61-66336a70-45373836-34ed0e54",
        arrowButton: "GUNS__a6-f698710b-95be9b1b-a37b6b67",
        active: "GUNS__d0-676f0525-915ed755-33cde83a",
        ellipsis: "GUNS__9f-3a9a28c6-7f7161a3-b4d7b6d8"
      }
    }
  }
]);