(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2056], {
    22834: (e, a, t) => {
      "use strict";
      t.d(a, {
        n: () => u
      });
      var o = t(95155),
        s = t(12115),
        r = t(67361),
        n = t.n(r);
      let i = (0, s.createContext)(null),
        l = (0, s.createContext)(null),
        c = (...e) => e.filter(Boolean).join(" "),
        d = () => {
          let e = (0, s.useContext)(i);
          if (!e) throw Error("Accordion components must be used within <Accordion>");
          return e
        },
        f = () => {
          let e = (0, s.useContext)(l);
          if (!e) throw Error("Accordion.Item subcomponents must be used within <Accordion.Item>");
          return e
        },
        p = (e, a) => a ? Array.isArray(e) ? e : "string" == typeof e ? [e] : [] : Array.isArray(e) ? e[0] ?? null : "string" == typeof e ? e : e ?? null,
        u = Object.assign(({
          children: e,
          value: a,
          defaultValue: t,
          multiple: r = !1,
          onChange: l,
          className: d = "",
          ...f
        }) => {
          let u = void 0 !== a,
            m = u ? p(a, r) : null,
            [b, _] = (0, s.useState)(() => p(t, r)),
            h = u ? m : b,
            S = (0, s.useCallback)(e => r ? Array.isArray(h) && h.includes(e) : h === e, [h, r]),
            g = (0, s.useCallback)(e => {
              let a = ((e, a, t) => {
                if (t) {
                  let t = Array.isArray(e) ? e : [];
                  return t.includes(a) ? t.filter(e => e !== a) : [...t, a]
                }
                return e === a ? null : a
              })(h, e, r);
              u || _(a), l?.(a)
            }, [h, u, r, l]),
            N = (0, s.useMemo)(() => ({
              multiple: r,
              currentValue: h,
              toggleItem: g,
              isItemActive: S
            }), [r, h, g, S]);
          return (0, o.jsx)(i.Provider, {
            value: N,
            children: (0, o.jsx)("div", {
              className: c(n().accordion, d),
              ...f,
              children: e
            })
          })
        }, {
          Item: ({
            value: e,
            children: a,
            className: t = "",
            ...r
          }) => {
            let i = d(),
              f = (0, s.useId)(),
              p = (0, s.useRef)(`${f}-control`),
              u = (0, s.useRef)(`${f}-panel`),
              m = i.isItemActive(e),
              b = (0, s.useMemo)(() => ({
                value: e,
                controlIdRef: p,
                panelIdRef: u
              }), [e]);
            return (0, o.jsx)(l.Provider, {
              value: b,
              children: (0, o.jsx)("div", {
                ...r,
                className: c(n().item, t),
                "data-active": m || void 0,
                children: a
              })
            })
          },
          Control: (0, s.forwardRef)(function({
            children: e,
            className: a = "",
            onClick: t,
            disabled: s,
            id: r,
            ...i
          }, l) {
            let p = d(),
              u = f(),
              m = r ?? u.controlIdRef.current;
            u.controlIdRef.current = m;
            let b = p.isItemActive(u.value);
            return (0, o.jsx)("button", {
              type: "button",
              ...i,
              id: m,
              ref: l,
              className: c(n().control, a),
              "data-active": b || void 0,
              disabled: s,
              onClick: e => {
                t?.(e), e.defaultPrevented || s || p.toggleItem(u.value)
              },
              children: e
            })
          }),
          Panel: (0, s.forwardRef)(function({
            children: e,
            className: a = "",
            id: t,
            ...r
          }, i) {
            let l = d(),
              p = f(),
              u = t ?? p.panelIdRef.current;
            p.panelIdRef.current = u;
            let m = l.isItemActive(p.value),
              b = (0, s.useRef)(null),
              [_, h] = (0, s.useState)(0),
              [S, g] = (0, s.useState)(!1);
            (0, s.useEffect)(() => {
              let e = b.current;
              if (!e) return;
              let a = window,
                t = () => {
                  h(e.scrollHeight), g(!0)
                };
              if (t(), void 0 !== a.ResizeObserver) {
                let o = new a.ResizeObserver(t);
                return o.observe(e), () => o.disconnect()
              }
              return a.addEventListener("resize", t), () => a.removeEventListener("resize", t)
            }, []);
            let N = m ? S && _ > 0 ? `${_}px` : void 0 : "0px";
            return (0, o.jsx)("div", {
              ...r,
              id: u,
              ref: i,
              className: c(n().panel, a),
              "data-active": m || void 0,
              children: (0, o.jsx)("div", {
                ref: b,
                className: n().content,
                style: {
                  overflow: "hidden",
                  maxHeight: N,
                  opacity: +!!m,
                  transition: S ? "max-height 220ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms ease" : void 0
                },
                children: (0, o.jsx)("div", {
                  className: n().contentInner,
                  children: e
                })
              })
            })
          })
        })
    },
    43477: e => {
      e.exports = {
        featureGap: "GUNS__f8-36442cf1-633c2941-ec04ba9a",
        generalComponentRight: "GUNS__1b-e42e8b85-e3e6f07f-16a5a52f",
        generalComponentLeft: "GUNS__3c-ca930601-a3ebba23-5a80c79a",
        settingsComponent: "GUNS__46-ddf97968-5a7e1046-15b9dda6",
        generalComponentContainer: "GUNS__09-774382c3-57b805e5-a212ece6",
        featureRow: "GUNS__f1-cc829fe6-2903c1a9-1f5bda1a",
        layoutControlsStack: "GUNS__d2-33e4d226-0d4a3774-0d73b7db",
        layoutDropdownRow: "GUNS__35-05a9e401-46cba892-49f8732e",
        premiumNavigation: "GUNS__15-fe4c36c7-d299ccbe-a5871c14",
        active: "GUNS__21-b1fbab52-1a408719-b0e8e664",
        buttonDisabled: "GUNS__8e-8d7c8209-0a1df6e7-188a8711",
        buttonEnabled: "GUNS__94-d3720c82-616d1568-92e52560",
        borderDiv: "GUNS__e7-7271713a-7347acf8-3359dc68",
        borderControlsRow: "GUNS__4a-e4f66c0a-4a85a784-209d8397",
        modernLayoutComponentLeft: "GUNS__d0-2a0d29db-82efff2b-4c913a14",
        typewriter: "GUNS__b0-3bab2bb3-08b4eda8-fb7778ed",
        typewriterWrapper: "GUNS__0c-ad22cffd-36d192bc-94db58de",
        tagsInputWrapper: "GUNS__e8-c53670da-214ecab2-89996df0",
        tagsWrapper: "GUNS__5c-62fae5b6-708c76a2-4daecd14",
        manageTypewriter: "GUNS__3c-c70f1c03-1a97d0e8-d1972d0f",
        addTag: "GUNS__2d-12aa9f70-8a131f54-d78e4aa9",
        tags: "GUNS__ec-3f195a31-efc145ec-f29a68f5",
        typewriterTagContainer: "GUNS__a7-b0fd6e25-2ec90e52-bae1efa1",
        typewriterDragHandle: "GUNS__8a-3070c3a3-ef3624e3-3092a359",
        tag: "GUNS__9a-55842480-5e7019c0-83b2a7cc",
        tagName: "GUNS__2c-2e936af4-4760a69b-13403bc8",
        tagActions: "GUNS__bd-18d0ce71-d5017d82-43da4d6e",
        tagActionButton: "GUNS__e2-92c34b7b-d0bc8a48-c4ea3afd",
        editTagButton: "GUNS__36-8d103e34-37692816-d3a9759b",
        removeTag: "GUNS__c2-ebcecdd9-6e3a1cd4-c5450ba5",
        tagEditInput: "GUNS__b4-e9ba675e-32274d8b-3e099940",
        saveTypewriter: "GUNS__ae-2105fdaa-af22acd0-03ad0a6f",
        typewriterDisabled: "GUNS__29-34541698-1465b056-66ae4b52",
        typewriterEnabled: "GUNS__65-80aa4e1e-688f529e-93784047",
        myTexts: "GUNS__df-93202286-9ae95b22-b1779d46",
        simplisticLayout: "GUNS__b6-e634499e-96563531-72caf5b8",
        buttonEditor: "GUNS__2d-ef4c70a2-ec572fd1-eb7578c8",
        settings: "GUNS__5d-da6f4b52-e536ad3b-80cd696a",
        buttonEditorHeading: "GUNS__2b-89f9e32d-2774aae0-be8fa22a",
        modalButtonGap: "GUNS__ee-426d4f33-33a320ae-9bb22d53",
        addButtonSpan: "GUNS__54-8c4df733-0d9e0da0-916b06d1",
        buttons: "GUNS__57-b71f4526-c11efaf7-6e14893e",
        buttonCount: "GUNS__4d-b80acf1c-ae8aeeec-da0cb186",
        buttonPreview: "GUNS__1c-d473fe1c-f912b066-f8475241",
        buttonGap: "GUNS__6b-9a71ac33-e0d33dc7-a61319c4",
        buttonDiv: "GUNS__35-cef5c06a-ccdd2745-43b5891b",
        editButton: "GUNS__b1-320ffd38-5dc0ad2d-1e7dbce7",
        deleteButton: "GUNS__6c-bc6e0ebe-2649bc26-fd08fffc",
        buttonSettingsHeading: "GUNS__59-72757c60-100621cd-f9ada352",
        settingsContainer: "GUNS__58-875e08fb-4c7c400f-ae75eed1",
        iconUpload: "GUNS__25-f5b44b53-68dd5154-a771d950",
        uploadCardText: "GUNS__28-e6a5a33b-d0952925-dab442a2",
        uploaderMessage: "GUNS__f1-e8125eef-6a9b3ab9-f84f5631",
        uploadCardImage: "GUNS__2d-527bc255-4f6ecd1f-f3f221e3",
        uploaderHeadingText: "GUNS__9f-5c742e4f-11388048-43664f36",
        iconUploadWrapper: "GUNS__c2-f7c22fa1-7e117704-35d60f2d",
        fileBadge: "GUNS__ba-517d2b5b-0764671b-90a8a941",
        buttonContainer: "GUNS__1a-9d241dd4-3c510374-93d32ba2",
        dragHandleContainer: "GUNS__ad-97b3f0a6-6cce40d1-b9431d86",
        buttonWrapper: "GUNS__86-0daaa4e5-14c0619c-0ba352df",
        metadataContainer: "GUNS__2f-b20e2ac2-9970bec2-9cc32e9e",
        metadataContainerDescription: "GUNS__a4-97807326-5ce4d36b-68ed0698",
        metadataCustomization: "GUNS__35-196854c0-20e52158-6eae1eef",
        fileInputStyle: "GUNS__3b-07b6cc1a-9ea27eaa-5c7777f7",
        websiteImageText: "GUNS__2c-d5b0d51b-77495517-2567c8a8",
        metadataPreviewText: "GUNS__27-97c49254-307e2bab-5bde0c15",
        metadataContainerWrapper: "GUNS__f6-761bf2dc-f01326c5-f29c6554",
        metadataCustomizationWrapper: "GUNS__ed-1ebbfe8d-132c7f27-cbec805e",
        metadataPreview: "GUNS__20-65697431-30c9fcd3-d7364230",
        preview: "GUNS__9a-21a5b0c6-badf1315-bede8fae",
        previewDescription: "GUNS__ee-fc2d3cd5-784eef4e-5b8a7f11",
        imageWrapper: "GUNS__aa-717a96ca-0568395b-6274fb74",
        switchWrapper: "GUNS__f4-c9479b52-50960148-69435efc",
        userInformationOverlayText: "GUNS__f6-245b7806-3e86476e-ad0b4940",
        metadataNotification: "GUNS__47-0d4c1f1b-c12cd480-89b11fd2",
        typewriterSettings: "GUNS__f9-8f27866a-40211da5-71d26ad3",
        saveChangesTypewriter: "GUNS__13-48292c3c-0536a1ad-23626923",
        secondTabButton: "GUNS__45-970326e9-310e23a4-7c2ac44a",
        secondTab: "GUNS__ea-dc7bfc5a-f962aca5-1cd835c5",
        timezonePickerContainer: "GUNS__f4-46701168-421e5b47-fe6c36dc",
        timezoneComboboxWrapper: "GUNS__3d-8642eb77-64179168-017bf3d4",
        timezoneInputRow: "GUNS__3a-38ed0aa4-3e7b48f9-d5462bf1",
        useMyTimezoneBtn: "GUNS__53-024c063d-763b7dd4-638b2d7e",
        timezoneComboboxInput: "GUNS__be-9a074913-7d283fe5-0056b78d",
        timezoneDropdown: "GUNS__0e-76d7bfd1-1560ebde-941299f3",
        timezoneDropdownList: "GUNS__2a-3014a14d-c6989419-1a7b14e4",
        timezoneDropdownItem: "GUNS__29-18f0d9ab-453be0b7-131701b1",
        timezoneDropdownSelected: "GUNS__fe-46787262-af7763c3-3c9f8a0f",
        clockSettingsGroup: "GUNS__6d-f732c894-a1042cf8-759aef47",
        clockSettingRow: "GUNS__75-562bd308-9b994cb1-6a1aa05d",
        clockSettingDivider: "GUNS__a6-67920666-cf49df73-da3af0b5",
        clockSettingLabel: "GUNS__c3-c9bec9ee-04f31365-67de180b",
        segmentControl: "GUNS__68-41590ace-620cccfd-f02177b7",
        segmentBtn: "GUNS__cf-3eb1c422-a7156257-7e0dbd1e",
        segmentActive: "GUNS__10-0db2fefa-7033a6d0-40467c94",
        saveSecondTabButton: "GUNS__62-86e73021-8bac76f7-7934e4ec",
        manageFontsButton: "GUNS__41-2375a732-de76e36e-8842a617",
        manageFontsText: "GUNS__c4-fdfc16be-45249bb4-6b5b64e3",
        manageFontsWrapper: "GUNS__80-4574b40a-aeebe2bb-66ad33c7",
        defaultFontsWrapper: "GUNS__5c-a65f1f93-9f73f49b-d0e71293",
        defaultFontsContainer: "GUNS__72-5dd7f6c2-e47c70fa-385fab0d",
        defaultFontItem: "GUNS__01-00d59559-180f2080-3fb758e0",
        customFontWrapper: "GUNS__db-45e6c70a-8e19063b-d3ff2152",
        customFontDescription: "GUNS__fa-2bcb6b02-b43c2b05-9a1ac96a",
        uploadFontButton: "GUNS__a4-0c01ba70-d3977662-1443aa16",
        uploadFontWrapper: "GUNS__d7-acf76142-f6afa85c-fd0b39f6",
        textFontWrapper: "GUNS__f2-22983594-4ece2925-6a690b23",
        fontModalBody: "GUNS__23-17547bb0-2249f290-fd70a731",
        fontModalContent: "GUNS__8e-5bee41d7-ce7ca8a8-4c86fc01",
        fontModalFooter: "GUNS__0a-d6bb9f3e-bce186f6-08124622",
        saveChangesFonts: "GUNS__7d-3800c993-bcc0dfea-a2715b86",
        activeFont: "GUNS__6a-7427545b-ce17725c-e9997dcf",
        customFont: "GUNS__72-05a0bbd7-651c27ec-4a87f549",
        customFontText: "GUNS__4b-313a1a10-b503faa4-49e15745",
        customFontWeight: "GUNS__0d-f0658696-8b3f1b88-1ad8dcef",
        customFontStyle: "GUNS__99-4732b2a1-fbc881b3-1c9d7fb0",
        customFontRemove: "GUNS__55-e1c0e24f-4a6d4868-450f132c",
        customFontInfo: "GUNS__3d-11ac5bbc-0fe776f7-77ffbcb7",
        customFontSettings: "GUNS__21-bed85db7-c887db9a-46925714",
        fontSettingsAccordionItem: "GUNS__85-5fdf516c-499e308d-9eac0fde",
        fontSettingsAccordionControl: "GUNS__ed-ebe91991-f0bdd217-41e42093",
        portfolioSettings: "GUNS__0b-2614049f-eeb34d12-16b515ed",
        portfolioTopSettings: "GUNS__f7-b2b19421-26a218ac-8be7cc70",
        portfolioTopSettingsHeader: "GUNS__be-501e217e-c4e58cf6-d3e900c5",
        portfolioManagerHeader: "GUNS__44-54281092-934f314c-af9992be",
        portfolioAddModuleText: "GUNS__b2-ef49c73d-f5488164-ec184f25",
        portfolioModuleTypeIcon: "GUNS__39-b92041b4-6727abbe-f583d58d",
        portfo: "GUNS__3c-b4140428-7bfeb457-e5ee12b1",
        portfolioProfileSettings: "GUNS__85-9196990f-041014ba-c31e2370",
        portfolioManagerActions: "GUNS__d4-2411ad29-1f2b65ea-293bc752",
        portfolioAddModuleGrid: "GUNS__18-73d55763-69cdb1e1-2682f99f",
        portfolioAddModuleOption: "GUNS__47-55ed1814-39b21c40-4116ba1a",
        portfolioAddModuleIcon: "GUNS__0e-f863f464-b3608f44-d15b7901",
        portfolioAddModuleArrow: "GUNS__aa-88092d10-654235cd-fa86b5fa",
        portfolioAddBar: "GUNS__e0-fe715b44-427153db-342632a0",
        portfolioInlineButton: "GUNS__2c-8cf08d3a-30e819ec-c029599b",
        portfolioModulesSettings: "GUNS__f6-7c76db4f-91182902-5a1f26ef",
        portfolioModuleList: "GUNS__e5-577ab770-e8c9091d-2a8cabc8",
        portfolioModuleItem: "GUNS__a5-f70aab84-4856a834-49f3c257",
        portfolioDragHandleStrip: "GUNS__94-74be09d4-2b1591d2-d6bb71b6",
        portfolioModuleContent: "GUNS__0b-fb06fbc0-ef75fff2-7b5b68cc",
        portfolioModuleItemCollapsed: "GUNS__f6-46a46230-687d66f3-2683465b",
        portfolioModuleHeader: "GUNS__79-a22ae690-a363d580-79ce4609",
        portfolioModuleOverlay: "GUNS__f2-b22a72df-59013771-1cbacdf7",
        portfolioModuleHeaderStatic: "GUNS__72-3de2a615-e1cc14f5-a2a0e191",
        portfolioModuleTitle: "GUNS__44-ea19810a-929aab78-8dffc540",
        portfolioModuleBadge: "GUNS__22-072196eb-22e572a7-69bf2207",
        portfolioStaticHandle: "GUNS__cf-9265094b-cdbee3f7-2e914e46",
        portfolioDragHandle: "GUNS__fa-2fad65d3-28a31aac-84b557ed",
        portfolioModuleActions: "GUNS__cc-6d2cf62f-0d70e89c-dd7304e8",
        portfolioProjectHeader: "GUNS__7d-0c49e62f-d0f009ef-2065ceb9",
        portfolioFieldGrid: "GUNS__0a-01a3f636-433a1237-63068cad",
        portfolioFieldStack: "GUNS__49-dd13d930-3ab8d643-8138bd2e",
        portfolioAudioLyricsToggleRow: "GUNS__88-883321a8-a454e938-4776a00f",
        portfolioAudioLyricsToggleText: "GUNS__ac-71dbef1c-5210aaa7-65990341",
        portfolioAudioLyricsToggleButton: "GUNS__ff-603fde7c-ca2545bf-b527d4dd",
        portfolioAudioLyricsHint: "GUNS__27-da0dd2cd-e3358268-e5a83857",
        portfolioAudioLyricsEmpty: "GUNS__d6-e7d30880-8bd27483-827653ae",
        portfolioAudioLyricsActions: "GUNS__8c-323b0594-58f43803-95b03a6b",
        portfolioLyricsResults: "GUNS__2b-f5eac303-688eb3ac-5cfd8d31",
        portfolioLyricsResult: "GUNS__31-d1987987-2f36b16f-6a357a4f",
        portfolioLyricsResultMeta: "GUNS__9e-b798c47f-7d2753df-bfcbaf1b",
        portfolioSectionSpacing: "GUNS__39-068c0434-6f067424-fc401571",
        portfolioField: "GUNS__0c-2a700250-85dd8bae-6828085f",
        portfolioToggleGrid: "GUNS__25-3833707c-ef1ad721-b499230b",
        portfolioProjectEditor: "GUNS__5b-b9db9754-4828862e-cc2a6d47",
        portfolioProjectDragStrip: "GUNS__0a-de035a93-f2d43ff3-ce632717",
        portfolioProjectContent: "GUNS__bb-c71c0fd4-69e8904b-ea08ffa8",
        portfolioProjectList: "GUNS__35-effa120a-ae7e91d2-4247deb7",
        portfolioTagEditor: "GUNS__30-82576f90-84af91bc-b6d27c91",
        portfolioTagList: "GUNS__fa-790bd726-8d477646-c8c65122",
        portfolioProjectTag: "GUNS__49-a28ffbf0-4becd051-4001ccd6",
        portfolioProjectTagHandle: "GUNS__b3-ace43105-106b73cf-ea89fb5e",
        portfolioSkillTagLabel: "GUNS__8e-f09a6dca-42530a27-09ac7b10",
        skillAutocompleteDot: "GUNS__76-ab3c7f15-9d920898-de1239b8",
        skillAutocompleteIcon: "GUNS__56-2b4976fb-64cfb06e-8ec6fe0b",
        portfolioTagInputRow: "GUNS__16-20a82b65-e782cac3-b953ae3e",
        portfolioTagAddButton: "GUNS__33-530c1151-a00110b4-449cb027",
        portfolioInfoPanel: "GUNS__19-8f719604-a848cc64-b95f089c",
        portfolioCardTypeRow: "GUNS__7b-c2ab3911-468645f0-b7b24a37",
        portfolioCardSection: "GUNS__61-5b6af104-7782ae0b-84edd77b",
        portfolioCardTriggerRow: "GUNS__d0-d4d82cc1-fe9af84a-cc05cf4d",
        portfolioCardTriggerInfo: "GUNS__cf-96bc1599-2363c76f-6bb2deea",
        portfolioCardTriggerLabel: "GUNS__cb-4682f2d0-0ee72ab0-07300db3",
        portfolioCardTriggerCurrent: "GUNS__26-fd44d589-34ecc619-be50e500",
        portfolioCardTriggerDisabled: "GUNS__b7-bf93f6a3-daca25e4-0d361efa",
        portfolioSkillsSection: "GUNS__60-e1bb9d1a-586576ac-645c85f8",
        portfolioFieldLabel: "GUNS__f3-7390b765-537f5c14-4169ac65",
        portfolioFieldCount: "GUNS__39-7dd0630e-cfabf8d5-94ddfa8d",
        portfolioSkillsHint: "GUNS__cb-34a02d00-392a6ad6-7c1811fc",
        portfolioMarkdownHint: "GUNS__f9-795141e8-49da5eed-2bcf0bdc",
        portfolioEditorBox: "GUNS__fc-2c4ec393-690afe72-3e770541",
        portfolioMarkdownToolbar: "GUNS__a0-0f40a338-390e97fa-edc9e5f2",
        portfolioToolbarGroup: "GUNS__f2-b633ac2e-21e459e4-2c1b038e",
        portfolioToolbarBtn: "GUNS__50-6cd03cc6-a73ae7a4-7c8456d1",
        portfolioToolbarDivider: "GUNS__d0-8ddb18fb-1b2503bd-ee65b681",
        portfolioToolbarOptionsBtn: "GUNS__c4-7854ffb2-5177880b-d7f702bd",
        portfolioEditorTextarea: "GUNS__7c-60ffaf21-cd71e92b-d32b9f41",
        portfolioInlineCount: "GUNS__fc-5e27bf19-3fa7266a-dd1e2109",
        portfolioStickyAddGrid: "GUNS__21-cc44114c-1c3bd477-88ed50e5",
        portfolioStickyItem: "GUNS__fb-0afea1e1-0b783241-b4db8312",
        portfolioProjectUploadCard: "GUNS__b3-d1e4ad55-e27c1283-7a043dcf",
        skillAutocompleteWrap: "GUNS__01-6fcf4915-d43ac062-e10c1a83",
        skillAutocompleteDropdown: "GUNS__20-17b08fbb-8785485a-c23c8c01",
        skillAutocompleteSuggestion: "GUNS__2b-24f50a7d-e93cbb77-b3f8811d",
        skillAutocompleteSuggestionActive: "GUNS__d1-6234c912-f5764ee7-0ccd3e62",
        heroStyleSection: "GUNS__a4-19c13f2a-81e4675b-70112bef",
        heroStylePicker: "GUNS__65-a933dff8-31be525f-e9101ac6",
        heroStyleOption: "GUNS__2c-145a72a4-67f1eae1-1e906523",
        heroStyleOptionSelected: "GUNS__f7-e362790e-691dcec6-b66acd13",
        heroStylePreview: "GUNS__e5-7cac7ef3-4c8ec908-25d688f8",
        heroStyleLabel: "GUNS__fb-878232ac-96623141-98654451",
        heroToggleSection: "GUNS__5f-8fd23ce5-2bad508c-28703145",
        heroToggleLabel: "GUNS__90-25f6b44c-12daf1b1-e16e612a",
        heroElementsPanel: "GUNS__70-63b502e7-58a8b271-20e8eb93",
        heroRadiusBlock: "GUNS__c6-1b3827be-287abcb5-cbb51542",
        borderToggleRow: "GUNS__b7-bb8988c8-eac91e31-da3f75d9",
        heroRadiusHeader: "GUNS__94-a8edbc9d-35b61b3e-c8a5268c",
        heroRadiusInlineValue: "GUNS__26-1401fbf3-29d657a9-95bf7ce9",
        heroRadiusSliderWrap: "GUNS__97-3805bfe2-6ba76d44-17c6271a",
        heroRadiusSliderCard: "GUNS__09-293a8c14-c9498e8c-c24d04c5",
        heroVisibilityList: "GUNS__b3-8dd70fa5-458fe46c-3c1dd480",
        heroVisibilityRow: "GUNS__94-961684e8-ab30572e-8ea6e755",
        heroVisibilityRowLabel: "GUNS__c0-32e9984d-8b41a169-852ab9fd",
        heroVisibilitySwitchCell: "GUNS__cc-b53edda7-f033de14-2b57e824",
        portfolioProjectUploadCardTitle: "GUNS__7f-66145514-96d08f7f-29c49f2e",
        clickSoundList: "GUNS__e6-b02f5400-15dd0f2c-ccc67f33",
        clickSoundOption: "GUNS__0b-57566a92-50b0250a-50869873",
        clickSoundOptionActive: "GUNS__cc-5111c397-3c373c25-4ffa41c9",
        clickSoundOptionLabel: "GUNS__eb-2c82f17d-bf1dd9e0-8b43c6b6",
        clickSoundPreviewButton: "GUNS__67-b463e7d6-de8b0a06-8f7b9bf1",
        clickSoundUploadButton: "GUNS__86-438fe01b-f9afb55e-b6c14215",
        clickSoundUpload: "GUNS__f4-a1ca6bcd-d478b262-c11b1b66",
        clickSoundUploadDetails: "GUNS__5d-174b81ba-972b983a-6604c1a4",
        clickSoundRemoveButton: "GUNS__bd-fe6c4678-4590b00f-a49a124a",
        clickSoundSaveButton: "GUNS__96-e505c220-ac056d7a-e2856de0",
        portfolioAboutBioSection: "GUNS__21-58649629-def4532f-e9972ab4"
      }
    },
    47256: () => {},
    56311: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => H
      });
      var o = t(95155),
        s = t(12115),
        r = t(39449),
        n = t(60884),
        i = t(43477),
        l = t.n(i),
        c = t(66609),
        d = t(9992),
        f = t(60141),
        p = t(30184),
        u = t(13782),
        m = t(12555),
        b = t(82413),
        _ = t(22834),
        h = t(57157),
        S = t(5354),
        g = t(21924),
        N = t(86891);
      let y = ({
        fontData: e,
        fontSizeData: a,
        letterSpacingData: t
      }) => {
        let r = (0, N.kj)(),
          [n, i] = (0, s.useState)(!1),
          [d, f] = (0, s.useState)(!1),
          [p, y] = (0, s.useState)(e),
          [v, U] = (0, s.useState)("string" == typeof e ? e : ""),
          [x, G] = (0, s.useState)(a ?? 2),
          [j, w] = (0, s.useState)(t ?? 2),
          [k, C] = (0, s.useState)(null),
          A = [{
            value: "satoshi",
            label: r("dashboard.premium.fonts.default_fonts.options.satoshi")
          }, {
            value: "firacode",
            label: r("dashboard.premium.fonts.default_fonts.options.firacode")
          }, {
            value: "poppins",
            label: r("dashboard.premium.fonts.default_fonts.options.poppins")
          }, {
            value: "jetbrains_mono",
            label: r("dashboard.premium.fonts.default_fonts.options.jetbrains_mono")
          }, {
            value: "array",
            label: r("dashboard.premium.fonts.default_fonts.options.array")
          }, {
            value: "velocity",
            label: r("dashboard.premium.fonts.default_fonts.options.velocity")
          }, {
            value: "outfit",
            label: r("dashboard.premium.fonts.default_fonts.options.outfit")
          }, {
            value: "silkscreen",
            label: r("dashboard.premium.fonts.default_fonts.options.silkscreen")
          }, {
            value: "technor",
            label: r("dashboard.premium.fonts.default_fonts.options.technor")
          }, {
            value: "parkinsans",
            label: r("dashboard.premium.fonts.default_fonts.options.parkinsans")
          }, {
            value: "chillax",
            label: r("dashboard.premium.fonts.default_fonts.options.chillax")
          }, {
            value: "drippy",
            label: r("dashboard.premium.fonts.default_fonts.options.drippy")
          }, {
            value: "minecraft",
            label: r("dashboard.premium.fonts.default_fonts.options.minecraft")
          }];
        (0, s.useEffect)(() => {
          let e = document.head,
            a = {
              firacode: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap",
              poppins: "https://fonts.googleapis.com/css2?family=Poppins&display=swap",
              array: "https://api.fontshare.com/v2/css?f[]=array@400&display=swap",
              drippy: "https://fonts.cdnfonts.com/css/were-beast-2",
              minecraft: "https://fonts.cdnfonts.com/css/minecraftia",
              outfit: "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap",
              chillax: "https://api.fontshare.com/v2/css?f[]=chillax@500&display=swap",
              velocity: "https://api.fontshare.com/v2/css?f[]=panchang@500&display=swap",
              technor: "https://api.fontshare.com/v2/css?f[]=technor@400&display=swap",
              jetbrains_mono: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital@0;1&display=swap",
              silkscreen: "https://fonts.googleapis.com/css2?family=Silkscreen&display=swap",
              parkinsans: "https://fonts.googleapis.com/css2?family=Parkinsans:wght@500&display=swap"
            };
          Array.from(e.querySelectorAll("link[data-font]")).forEach(a => e.removeChild(a)), Object.keys(a).forEach(t => {
            let o = document.createElement("link");
            o.rel = "stylesheet", o.dataset.font = t, o.href = a[t], e.appendChild(o)
          })
        }, []);
        let F = async e => {
          f(!0), e.target.disabled = !0;
          try {
            let a = e.target.files?.[0];
            if (!a) return;
            let t = a.name.split(".").pop()?.toLowerCase();
            if (!["ttf", "otf", "woff"].includes(t || "")) return void c.oR.error(r("dashboard.premium.fonts.errors.invalid_type"));
            if (a.size > 5242880) return void c.oR.error(r("dashboard.premium.fonts.errors.max_size"));
            let o = await T(a);
            if (!o) return void c.oR.error(r("dashboard.premium.fonts.errors.invalid_font"));
            let s = o.names.fullName?.en !== "false" ? o.names.fullName.en : r("dashboard.premium.fonts.custom_font_name"),
              n = new FormData;
            n.append("font", a), n.append("fontName", s), n.append("fontWeight", o.tables.os2.usWeightClass), n.append("fontStyle", o.names.fontSubfamily?.en || "Regular");
            let i = await fetch("https://guns.lol/api/dashboard/premium/upload/font", {
                method: "POST",
                body: n
              }),
              l = await i.json();
            i.ok ? (c.oR.success(r("dashboard.premium.fonts.upload_success")), y({
              name: s,
              weight: o.tables.os2.usWeightClass,
              style: o.names.fontSubfamily?.en || "Regular"
            }), U(""), await L(l.url)) : c.oR.error(l.error)
          } finally {
            e.target.disabled = !1, e.target.value = "", f(!1)
          }
        }, T = e => new Promise(a => {
          let t = new FileReader;
          t.onload = function() {
            let e = t.result;
            try {
              let t = S.qg(e);
              a(t)
            } catch (e) {
              a(null)
            }
          }, t.readAsArrayBuffer(e)
        }), R = async () => {
          let e = await fetch("https://guns.lol/api/dashboard/premium/remove/font", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              }
            }),
            a = await e.json();
          e.ok ? (C(null), y(""), U("satoshi"), c.oR.success(r("dashboard.premium.fonts.remove_success"))) : c.oR.error(a.error)
        }, L = async e => {
          let a = new FontFace("USERFONT", `url(${e})`);
          await a.load(), document.fonts.add(a), C(a.family)
        }, B = async () => {
          let e = "" === v ? {
              letterSpacing: j,
              fontSize: x
            } : {
              font: v
            },
            a = "" === v,
            t = await fetch("https://guns.lol/api/dashboard/premium/font", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(e)
            }),
            o = await t.json();
          t.ok ? (c.oR.success(a ? r("dashboard.premium.fonts.save_success.settings") : r("dashboard.premium.fonts.save_success.default")), a || y(v)) : c.oR.error(o.error)
        }, E = [{
          value: 1,
          label: r("dashboard.premium.fonts.letter_spacing.marks.compact")
        }, {
          value: 2,
          label: r("dashboard.premium.fonts.letter_spacing.marks.normal")
        }, {
          value: 3,
          label: r("dashboard.premium.fonts.letter_spacing.marks.extended")
        }], O = [{
          value: 1,
          label: r("dashboard.premium.fonts.font_size.marks.small")
        }, {
          value: 2,
          label: r("dashboard.premium.fonts.font_size.marks.normal")
        }, {
          value: 3,
          label: r("dashboard.premium.fonts.font_size.marks.large")
        }];
        return (0, o.jsxs)(o.Fragment, {
          children: [(0, o.jsxs)(u.A, {
            opened: n,
            onClose: () => i(!1),
            centered: !0,
            title: r("dashboard.premium.fonts.modal.title"),
            size: "550px",
            bodyClassName: l().fontModalBody,
            children: [(0, o.jsx)("div", {
              className: l().fontModalContent,
              children: (0, o.jsxs)("div", {
                className: l().textFontWrapper,
                children: [(0, o.jsxs)("div", {
                  className: l().customFontWrapper,
                  children: [(0, o.jsxs)("div", {
                    className: l().customFontDescription,
                    children: [(0, o.jsx)(h.A, {
                      featureName: r("dashboard.premium.fonts.custom_font.label"),
                      helpDescription: r("dashboard.premium.fonts.custom_font.description")
                    }), (0, o.jsx)("h3", {
                      children: r("dashboard.premium.fonts.custom_font.subtitle")
                    })]
                  }), "string" == typeof p ? (0, o.jsxs)("div", {
                    className: l().uploadFontWrapper,
                    children: [d ? (0, o.jsx)("span", {
                      className: l().uploadFontButton,
                      children: m.A.loading
                    }) : (0, o.jsxs)("span", {
                      className: l().uploadFontButton,
                      children: [m.A.upload, " ", r("dashboard.premium.fonts.upload_button")]
                    }), (0, o.jsx)("input", {
                      type: "file",
                      accept: ".ttf,.otf,.woff",
                      onChange: e => {
                        F(e)
                      }
                    })]
                  }) : (0, o.jsxs)("div", {
                    className: l().customFont,
                    children: [(0, o.jsx)("span", {
                      className: l().customFontText,
                      style: {
                        fontFamily: k || ""
                      },
                      children: p.name
                    }), (0, o.jsxs)("div", {
                      className: l().customFontInfo,
                      children: [(0, o.jsxs)("span", {
                        className: l().customFontWeight,
                        children: [m.A.fontWeight, " ", r("dashboard.premium.fonts.custom_font.weight_label", {
                          weight: p.weight
                        })]
                      }), (0, o.jsxs)("span", {
                        className: l().customFontStyle,
                        children: [m.A.fontStyle, " ", r("dashboard.premium.fonts.custom_font.style_label", {
                          style: p.style
                        })]
                      })]
                    }), (0, o.jsx)("div", {
                      className: l().customFontRemove,
                      onClick: R,
                      children: (0, o.jsx)("span", {
                        children: m.A.deleteButton
                      })
                    })]
                  }), "string" != typeof p && (0, o.jsx)(_.n, {
                    children: (0, o.jsxs)(_.n.Item, {
                      value: "customFontSettings",
                      className: l().fontSettingsAccordionItem,
                      children: [(0, o.jsx)(_.n.Control, {
                        className: l().fontSettingsAccordionControl,
                        children: r("dashboard.premium.fonts.custom_font.settings_title")
                      }), (0, o.jsx)(_.n.Panel, {
                        children: (0, o.jsxs)("div", {
                          className: l().customFontSettings,
                          children: [(0, o.jsx)(g.A, {
                            featureName: r("dashboard.premium.fonts.font_size.label"),
                            step: 1,
                            max: 3,
                            min: 1,
                            label: e => {},
                            marks: O,
                            value: x,
                            onChangeFunction: G
                          }), (0, o.jsx)(g.A, {
                            featureName: r("dashboard.premium.fonts.letter_spacing.label"),
                            step: 1,
                            max: 3,
                            min: 1,
                            label: e => {},
                            marks: E,
                            value: j,
                            onChangeFunction: w
                          })]
                        })
                      })]
                    }, "customFontSettings")
                  })]
                }), (0, o.jsxs)("div", {
                  className: l().defaultFontsWrapper,
                  children: [(0, o.jsx)("h1", {
                    children: r("dashboard.premium.fonts.default_fonts.title")
                  }), (0, o.jsx)("div", {
                    className: l().defaultFontsContainer,
                    children: A.map(e => (0, o.jsx)("div", {
                      className: `${l().defaultFontItem} ${v===e.value&&l().activeFont}`,
                      onClick: () => U(e.value),
                      children: (0, o.jsx)("span", {
                        style: {
                          fontFamily: `${b.k[e.value]}`
                        },
                        children: e.label
                      })
                    }, e.value))
                  })]
                })]
              })
            }), (0, o.jsx)("div", {
              className: l().fontModalFooter,
              children: (0, o.jsx)("span", {
                className: l().saveChangesFonts,
                onClick: B,
                children: r("dashboard.premium.fonts.save_button")
              })
            })]
          }), (0, o.jsxs)("div", {
            className: l().manageFontsWrapper,
            children: [(0, o.jsx)("h1", {
              className: l().manageFontsText,
              children: r("dashboard.premium.fonts.section_title")
            }), (0, o.jsxs)("span", {
              className: l().manageFontsButton,
              onClick: () => {
                "string" != typeof p && L(p.url), i(!0)
              },
              children: [m.A.font, " ", r("dashboard.premium.fonts.section_button")]
            })]
          })]
        })
      };
      y.displayName = "FontSelectionComponent";
      var v = t(12521),
        U = t(37897);
      async function x(e, a, t, o) {
        try {
          let s = new FormData;
          s.append("text", e), s.append("subtitle", a), t && s.append("icon", t);
          let r = await fetch("https://guns.lol/api/dashboard/premium/special/enter-screen", {
              method: "POST",
              body: s
            }),
            n = await r.json();
          if (!r.ok) return c.oR.error(n.error), null;
          return c.oR.success(o("dashboard.premium.special.enter_screen.modal.save_success")), {
            page_enter_text: n.page_enter_text,
            page_enter_subtitle: n.page_enter_subtitle,
            page_enter_icon: n.page_enter_icon
          }
        } catch (e) {
          return console.error(e), c.oR.error(o("common.unsaved_changes.unknown_error")), null
        }
      }

      function G({
        value: e,
        onClose: a,
        onSaved: t
      }) {
        let r, n, i = (0, N.kj)(),
          [d, f] = (0, s.useState)(e.page_enter_text || ""),
          [p, u] = (0, s.useState)(e.page_enter_subtitle || ""),
          [b, _] = (0, s.useState)(e.page_enter_icon || ""),
          [h, S] = (0, s.useState)(null),
          [g, y] = (0, s.useState)(!1);
        (0, s.useEffect)(() => () => {
          b.startsWith("blob:") && URL.revokeObjectURL(b)
        }, [b]);
        let G = async () => {
          if (!g) {
            y(!0);
            try {
              let e = await x(d, p, h || b, i);
              e && (t(e), a())
            } finally {
              y(!1)
            }
          }
        };
        return (0, o.jsxs)("div", {
          className: l().modalButtonGap,
          children: [(0, o.jsx)(U.A, {
            icon: m.A.pageEnterText,
            featureName: i("dashboard.premium.special.enter_screen.modal.text_label"),
            onChangeFunction: e => f(e.target.value),
            value: d,
            placeholder: i("dashboard.premium.special.enter_screen.modal.text_placeholder"),
            maxLength: 150
          }), (0, o.jsx)(U.A, {
            icon: m.A.typewriterDescripion,
            featureName: i("dashboard.premium.special.enter_screen.modal.subtitle_label"),
            onChangeFunction: e => u(e.target.value),
            value: p,
            placeholder: i("dashboard.premium.special.enter_screen.modal.subtitle_placeholder"),
            maxLength: 100
          }), (0, o.jsxs)("div", {
            className: l().iconUploadWrapper,
            children: [(0, o.jsx)("h1", {
              className: l().uploaderHeadingText,
              children: i("dashboard.premium.special.enter_screen.modal.icon_label")
            }), (0, o.jsx)("div", {
              className: l().iconUpload,
              children: b ? (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsxs)("div", {
                  className: l().fileBadge,
                  children: [(0, o.jsx)("span", {
                    children: (n = (r = (h?.name || b).split(/[?#]/)[0].split("/").pop() || "").lastIndexOf(".")) > -1 ? r.slice(n).toUpperCase() : ""
                  }), (0, o.jsx)("span", {
                    onClick: () => {
                      b.startsWith("blob:") && URL.revokeObjectURL(b), S(null), _("")
                    },
                    children: m.A.deleteFile
                  })]
                }), (0, o.jsx)("img", {
                  src: b,
                  alt: "",
                  className: l().uploadCardImage
                })]
              }) : (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsxs)("div", {
                  className: l().uploadCardText,
                  children: [m.A.image, (0, o.jsx)("h1", {
                    children: i("dashboard.premium.special.enter_screen.modal.icon_upload_prompt")
                  })]
                }), (0, o.jsx)("input", {
                  type: "file",
                  accept: v.vJ.icon.join(","),
                  onChange: e => {
                    let a = e.target.files?.[0];
                    if (e.target.value = "", !a) return;
                    let t = "." + a.name.split(".").pop()?.toLowerCase();
                    v.vJ.icon.includes(t) ? (b.startsWith("blob:") && URL.revokeObjectURL(b), S(a), _(URL.createObjectURL(a))) : c.oR.error(i("dashboard.premium.special.enter_screen.modal.invalid_file"))
                  }
                })]
              })
            })]
          }), (0, o.jsxs)("span", {
            className: l().addButtonSpan,
            onClick: G,
            children: [g ? m.A.loading : m.A.editButton, " ", i("dashboard.premium.special.enter_screen.modal.save_button")]
          })]
        })
      }
      var j = t(54834),
        w = t(64266);
      async function k(e, a, t, o) {
        try {
          let s = new FormData;
          s.append("click_sound", e), a && s.append("file", a), t && s.append("remove_custom", "true");
          let r = await fetch("https://guns.lol/api/dashboard/premium/special/click-sound", {
              method: "POST",
              body: s
            }),
            n = await r.json();
          if (!r.ok) return c.oR.error(n.error), null;
          return c.oR.success(o("dashboard.premium.special.click_sound.modal.save_success")), {
            click_sound: n.click_sound,
            click_sound_custom_url: n.click_sound_custom_url || ""
          }
        } catch (e) {
          return console.error(e), c.oR.error(o("common.unsaved_changes.unknown_error")), null
        }
      }

      function C(e) {
        if (!e) return;
        let a = new Audio(e);
        a.volume = w.AI, a.play().catch(() => void 0)
      }

      function A({
        value: e,
        customUrl: a,
        onClose: t,
        onSaved: r
      }) {
        let n = (0, N.kj)(),
          [i, d] = (0, s.useState)(e || "none"),
          [f, p] = (0, s.useState)(null),
          [u, b] = (0, s.useState)(a || ""),
          [_, h] = (0, s.useState)(!1),
          [S, g] = (0, s.useState)(!1),
          [y, U] = (0, s.useState)(!1),
          x = (0, s.useRef)(null);
        (0, s.useEffect)(() => () => {
          u.startsWith("blob:") && URL.revokeObjectURL(u)
        }, [u]);
        let G = async e => {
          let a = e.target.files?.[0];
          if (e.target.value = "", !a) return;
          let t = "." + a.name.split(".").pop()?.toLowerCase();
          if (!v.vJ.clickSound.includes(t)) return void c.oR.error(n("dashboard.premium.special.click_sound.modal.invalid_file"));
          if (a.size > 1024 * v.dO.clickSound * 1024) return void c.oR.error(n("dashboard.premium.special.click_sound.modal.file_too_large"));
          g(!0);
          try {
            if (await new Promise((e, t) => {
                let o = URL.createObjectURL(a),
                  s = new Audio;
                s.preload = "metadata", s.onloadedmetadata = () => {
                  let a = s.duration;
                  URL.revokeObjectURL(o), Number.isFinite(a) && a > 0 ? e(a) : t()
                }, s.onerror = () => {
                  URL.revokeObjectURL(o), t()
                }, s.src = o
              }) > 1.05) return void c.oR.error(n("dashboard.premium.special.click_sound.modal.too_long"));
            u.startsWith("blob:") && URL.revokeObjectURL(u);
            let e = URL.createObjectURL(a);
            p(a), b(e), h(!1), d("custom"), C(e)
          } catch {
            c.oR.error(n("dashboard.premium.special.click_sound.modal.invalid_audio"))
          } finally {
            g(!1)
          }
        }, A = async () => {
          if (!y && !S) {
            if ("custom" === i && !u) return void c.oR.error(n("dashboard.premium.special.click_sound.modal.custom_required"));
            U(!0);
            try {
              let e = await k(i, "custom" === i ? f : null, _, n);
              e && (r(e), t())
            } finally {
              U(!1)
            }
          }
        };
        return (0, o.jsxs)("div", {
          className: l().modalButtonGap,
          children: [(0, o.jsxs)("div", {
            className: l().clickSoundList,
            children: [(0, o.jsx)("button", {
              type: "button",
              className: `${l().clickSoundOption} ${"none"===i?l().clickSoundOptionActive:""}`,
              onClick: () => d("none"),
              children: (0, o.jsx)("span", {
                className: l().clickSoundOptionLabel,
                children: n("dashboard.premium.special.click_sound.modal.presets.none")
              })
            }), w.oy.map(e => (0, o.jsxs)("button", {
              type: "button",
              className: `${l().clickSoundOption} ${i===e?l().clickSoundOptionActive:""}`,
              onClick: () => {
                d(e), (0, w.hN)(e)
              },
              children: [(0, o.jsx)("span", {
                className: l().clickSoundOptionLabel,
                children: n(`dashboard.premium.special.click_sound.modal.presets.${e}`)
              }), (0, o.jsx)("span", {
                className: l().clickSoundPreviewButton,
                children: j.A.play
              })]
            }, e)), (0, o.jsxs)("button", {
              type: "button",
              className: `${l().clickSoundOption} ${"custom"===i?l().clickSoundOptionActive:""}`,
              onClick: () => {
                if (!S && !y) {
                  if (!u) return void x.current?.click();
                  d("custom"), C(u)
                }
              },
              disabled: S || y,
              children: [(0, o.jsx)("span", {
                className: l().clickSoundOptionLabel,
                children: n("dashboard.premium.special.click_sound.modal.presets.custom")
              }), (0, o.jsx)("span", {
                className: `${l().clickSoundPreviewButton} ${!u?l().clickSoundUploadButton:""}`,
                children: u ? j.A.play : j.A.upload
              })]
            })]
          }), (0, o.jsxs)("div", {
            className: l().clickSoundUpload,
            children: [u ? (0, o.jsxs)(o.Fragment, {
              children: [(0, o.jsxs)("div", {
                className: l().clickSoundUploadDetails,
                children: [j.A.audioIcon, (0, o.jsx)("div", {
                  children: (0, o.jsx)("span", {
                    children: f?.name || n("dashboard.premium.special.click_sound.modal.current_custom")
                  })
                })]
              }), (0, o.jsx)("button", {
                type: "button",
                className: l().clickSoundRemoveButton,
                onClick: () => {
                  if (u.startsWith("blob:") && URL.revokeObjectURL(u), f) {
                    p(null), b(a || ""), h(!1), a || d("none");
                    return
                  }
                  b(""), h(!!a), "custom" === i && d("none")
                },
                children: j.A.deleteFile
              })]
            }) : (0, o.jsxs)("div", {
              className: l().clickSoundUploadDetails,
              children: [j.A.upload, (0, o.jsx)("div", {
                children: (0, o.jsx)("span", {
                  children: S ? n("dashboard.premium.special.click_sound.modal.checking") : n("dashboard.premium.special.click_sound.modal.upload_prompt")
                })
              })]
            }), (0, o.jsx)("input", {
              ref: x,
              type: "file",
              accept: v.vJ.clickSound.join(","),
              onChange: G,
              disabled: S || y
            })]
          }), (0, o.jsxs)("button", {
            type: "button",
            className: l().clickSoundSaveButton,
            onClick: A,
            disabled: S || y,
            children: [y ? m.A.loading : m.A.editButton, " ", n("dashboard.premium.special.click_sound.modal.save_button")]
          })]
        })
      }
      let F = ({
          cursorEffectsColor: e,
          setCursorEffectsColor: a,
          cursorEffects: t,
          setCursorEffects: r,
          font: n,
          pageEnterText: i,
          pageEnterSubtitle: c,
          pageEnterIcon: d,
          onEnterScreenSaved: b,
          clickSound: _,
          clickSoundCustomUrl: h,
          onClickSoundSaved: S,
          fontSize: g,
          letterSpacing: v
        }) => {
          let U = (0, N.kj)(),
            [x, j] = (0, s.useState)(!1),
            [w, k] = (0, s.useState)(!1),
            [C, F] = (0, s.useState)({
              page_enter_text: i,
              page_enter_subtitle: c,
              page_enter_icon: d
            }),
            [T, R] = (0, s.useState)(_),
            [L, B] = (0, s.useState)(h),
            E = [{
              value: "none",
              label: U("dashboard.premium.special.cursor_effects.options.none")
            }, {
              value: "cat",
              label: U("dashboard.premium.special.cursor_effects.options.cat")
            }, {
              value: "snowflakes",
              label: U("dashboard.premium.special.cursor_effects.options.snowflakes")
            }, {
              value: "ghost",
              label: U("dashboard.premium.special.cursor_effects.options.ghost")
            }, {
              value: "dot",
              label: U("dashboard.premium.special.cursor_effects.options.dot")
            }, {
              value: "bubbles",
              label: U("dashboard.premium.special.cursor_effects.options.bubbles")
            }, {
              value: "particles",
              label: U("dashboard.premium.special.cursor_effects.options.particles")
            }, {
              value: "shooting_star",
              label: U("dashboard.premium.special.cursor_effects.options.shooting_star")
            }];
          return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(u.A, {
              opened: x,
              onClose: () => j(!1),
              centered: !0,
              title: U("dashboard.premium.special.enter_screen.modal.title"),
              size: "435px",
              children: (0, o.jsx)(G, {
                value: C,
                onClose: () => j(!1),
                onSaved: e => {
                  F(e), b(e)
                }
              })
            }), (0, o.jsx)(u.A, {
              opened: w,
              onClose: () => k(!1),
              centered: !0,
              title: U("dashboard.premium.special.click_sound.modal.title"),
              size: "435px",
              children: (0, o.jsx)(A, {
                value: T,
                customUrl: L,
                onClose: () => k(!1),
                onSaved: e => {
                  R(e.click_sound), B(e.click_sound_custom_url), S(e)
                }
              })
            }), (0, o.jsx)("div", {
              className: l().generalComponentContainer,
              children: (0, o.jsxs)("div", {
                className: l().generalComponentLeft,
                children: [(0, o.jsxs)("div", {
                  className: l().featureRow,
                  children: [(0, o.jsx)(f.A, {
                    data: E,
                    featureName: U("dashboard.premium.special.cursor_effects.label"),
                    onChangeFunction: r,
                    value: t,
                    placeholder: U("dashboard.premium.profile.select_placeholder"),
                    icon: m.A.cursorEffects
                  }), (0, o.jsx)(p.A, {
                    featureName: U("dashboard.premium.special.cursor_effects_color"),
                    onChangeFunction: a,
                    value: e,
                    icon: m.A.cursorEffectsColor
                  })]
                }), (0, o.jsxs)("div", {
                  className: l().featureRow,
                  children: [(0, o.jsx)(y, {
                    fontData: n,
                    fontSizeData: g,
                    letterSpacingData: v
                  }), (0, o.jsxs)("div", {
                    className: l().manageFontsWrapper,
                    children: [(0, o.jsx)("h1", {
                      className: l().manageFontsText,
                      children: U("dashboard.premium.special.enter_screen.label")
                    }), (0, o.jsxs)("span", {
                      className: l().manageFontsButton,
                      onClick: () => j(!0),
                      children: [m.A.pageEnterText, " ", U("dashboard.premium.special.enter_screen.button")]
                    })]
                  })]
                }), (0, o.jsx)("div", {
                  className: l().featureRow,
                  children: (0, o.jsxs)("div", {
                    className: l().manageFontsWrapper,
                    children: [(0, o.jsx)("h1", {
                      className: l().manageFontsText,
                      children: U("dashboard.premium.special.click_sound.label")
                    }), (0, o.jsxs)("span", {
                      className: l().manageFontsButton,
                      onClick: () => k(!0),
                      children: [m.A.clickSound, " ", U("dashboard.premium.special.click_sound.button")]
                    })]
                  })
                })]
              })
            })]
          })
        },
        T = ({
          setLayout: e,
          layout: a,
          setAnimation: t,
          animation: s
        }) => {
          let r = (0, N.kj)(),
            n = [{
              value: "default",
              label: r("dashboard.premium.profile.layout.options.default")
            }, {
              value: "modern",
              label: r("dashboard.premium.profile.layout.options.modern")
            }, {
              value: "simplistic",
              label: r("dashboard.premium.profile.layout.options.simplistic")
            }, {
              value: "sleek",
              label: r("dashboard.premium.profile.layout.options.sleek")
            }, {
              value: "portfolio",
              label: r("dashboard.premium.profile.layout.options.portfolio")
            }],
            i = [{
              value: "fade",
              label: r("dashboard.premium.profile.animation.options.fade")
            }, {
              value: "unfold",
              label: r("dashboard.premium.profile.animation.options.unfold")
            }, {
              value: "pop",
              label: r("dashboard.premium.profile.animation.options.pop")
            }];
          return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsx)("div", {
              className: l().generalComponentContainer,
              children: (0, o.jsx)("div", {
                className: l().generalComponentLeft,
                children: (0, o.jsxs)("div", {
                  className: l().featureRow,
                  children: [(0, o.jsx)(f.A, {
                    featureName: r("dashboard.premium.profile.layout.label"),
                    onChangeFunction: e,
                    value: a,
                    placeholder: r("dashboard.premium.profile.select_placeholder"),
                    icon: m.A.layout,
                    data: n
                  }), (0, o.jsx)(f.A, {
                    featureName: r("dashboard.premium.profile.animation.label"),
                    onChangeFunction: t,
                    value: s,
                    placeholder: r("dashboard.premium.profile.select_placeholder"),
                    icon: m.A.animation,
                    data: i
                  })]
                })
              })
            })
          })
        };
      var R = t(81469),
        L = t(44923),
        B = t(87256),
        E = t(39768),
        O = t(47650);

      function I({
        item: e,
        isUpdating: a,
        isEditing: t,
        editingValue: s,
        onEditingValueChange: r,
        onEditKeyPress: n,
        onSaveEdit: i,
        onCancelEdit: c,
        onStartEdit: d,
        onRemove: f
      }) {
        let {
          attributes: p,
          listeners: u,
          setNodeRef: b,
          transform: _,
          transition: h,
          isDragging: S
        } = (0, B.gl)({
          id: e.id,
          animateLayoutChanges: () => !1
        }), g = {
          transform: E.Ks.Transform.toString(_),
          transition: h,
          opacity: +!S
        };
        return (0, o.jsxs)("div", {
          ref: b,
          style: g,
          className: l().typewriterTagContainer,
          children: [(0, o.jsx)("div", {
            className: l().typewriterDragHandle,
            ...!a && !t ? p : {},
            ...!a && !t ? u : {},
            children: m.A.dragHandle
          }), (0, o.jsx)("div", {
            className: l().tag,
            children: t ? (0, o.jsxs)(o.Fragment, {
              children: [(0, o.jsx)("input", {
                autoFocus: !0,
                type: "text",
                value: s,
                onChange: e => r(e.target.value),
                onKeyDown: n,
                maxLength: 100,
                className: l().tagEditInput
              }), (0, o.jsxs)("div", {
                className: l().tagActions,
                children: [(0, o.jsx)("button", {
                  type: "button",
                  className: l().tagActionButton,
                  onClick: i,
                  disabled: a,
                  children: m.A.confirm
                }), (0, o.jsx)("button", {
                  type: "button",
                  className: `${l().tagActionButton} ${l().removeTag}`,
                  onClick: c,
                  disabled: a,
                  children: m.A.removeTag
                })]
              })]
            }) : (0, o.jsxs)(o.Fragment, {
              children: [(0, o.jsx)("span", {
                className: l().tagName,
                children: e.text
              }), (0, o.jsxs)("div", {
                className: l().tagActions,
                children: [(0, o.jsx)("button", {
                  type: "button",
                  className: `${l().tagActionButton} ${l().editTagButton}`,
                  onClick: () => d(e.id),
                  disabled: a,
                  children: m.A.editButton
                }), (0, o.jsx)("button", {
                  type: "button",
                  className: `${l().tagActionButton} ${l().removeTag}`,
                  onClick: () => f(e.id),
                  disabled: a,
                  children: m.A.removeTag
                })]
              })]
            })
          })]
        })
      }
      let D = ({
        onTagsChange: e,
        tagsList: a
      }) => {
        let t = (0, N.kj)(),
          [r, n] = (0, s.useState)(""),
          [i, d] = (0, s.useState)([]),
          [f, p] = (0, s.useState)(null),
          [u, b] = (0, s.useState)(null),
          [_, h] = (0, s.useState)(""),
          [S, g] = (0, s.useState)(!1),
          [y, v] = (0, s.useState)(!1),
          x = {
            margin: 0 === i.length ? "7px 0 0px 0" : "20px 0 15px 0"
          };
        (0, s.useEffect)(() => {
          v(!0)
        }, []), (0, s.useEffect)(() => {
          d(a.map((e, a) => ({
            id: `tag-${a}-${e.length}`,
            text: e
          })))
        }, [a]);
        let G = (0, L.FR)((0, L.MS)(L.AN, {
            activationConstraint: {
              distance: 10
            }
          })),
          j = e => "" === e.trim() ? (c.oR.error(t("dashboard.premium.settings.typewriter.tags.errors.empty")), !1) : !(e.trim().length > 100) || (c.oR.error(t("dashboard.premium.settings.typewriter.tags.errors.max_length")), !1),
          w = async (a, t = !0) => {
            g(!0);
            try {
              if (!await e(a.map(e => e.text))) return !1;
              return t && d(a), !0
            } catch {
              return !1
            } finally {
              g(!1)
            }
          }, k = async () => {
            S || !j(r) || (i.length > 4 ? c.oR.error(t("dashboard.premium.settings.typewriter.tags.errors.max_count")) : await w([...i, {
              id: `tag-new-${Date.now()}`,
              text: r.trim()
            }]) && n(""))
          }, C = async e => {
            if (S) return;
            let a = i.filter(a => a.id !== e);
            await w(a) && u === e && (b(null), h(""))
          }, A = async e => {
            if (p(null), S) return;
            let {
              active: a,
              over: t
            } = e;
            if (!t || a.id === t.id) return;
            let o = i.findIndex(e => e.id === a.id),
              s = i.findIndex(e => e.id === t.id);
            if (s === o || -1 === o || -1 === s) return;
            let r = (0, B.be)(i, o, s);
            d(r), await w(r, !1) || d(i)
          }, F = e => {
            if (S) return;
            let a = i.find(a => a.id === e);
            a && (b(e), h(a.text))
          }, T = () => {
            b(null), h("")
          }, R = async () => {
            if (!u || S || !j(_)) return;
            let e = _.trim(),
              a = i.findIndex(e => e.id === u);
            if (-1 === a) return;
            if (e === i[a].text) return void T();
            let t = [...i];
            t[a] = {
              ...t[a],
              text: e
            }, await w(t) && T()
          }, E = async e => {
            "Enter" === e.key && (e.preventDefault(), await k())
          }, D = async e => {
            if ("Enter" === e.key) {
              e.preventDefault(), await R();
              return
            }
            "Escape" === e.key && (e.preventDefault(), T())
          };
        return y ? (0, o.jsxs)("div", {
          className: l().tagsInputWrapper,
          children: [(0, o.jsxs)("div", {
            className: l().manageTypewriter,
            children: [(0, o.jsx)(U.A, {
              icon: m.A.typewriterDescripion,
              placeholder: t("dashboard.premium.settings.typewriter.tags.placeholder"),
              value: r,
              onChangeFunction: e => {
                n(e.target.value)
              },
              onKeyPress: E
            }), (0, o.jsx)("button", {
              type: "button",
              className: l().addTag,
              onClick: k,
              disabled: S,
              children: m.A.addTag
            })]
          }), (0, o.jsx)("div", {
            className: l().tagsWrapper,
            style: x,
            children: 0 !== i.length && (0, o.jsxs)(o.Fragment, {
              children: [(0, o.jsx)("h1", {
                className: l().myTexts,
                children: t("dashboard.premium.settings.typewriter.tags.title")
              }), (0, o.jsxs)(L.Mp, {
                sensors: G,
                collisionDetection: L.fp,
                onDragStart: e => {
                  let {
                    active: a
                  } = e, t = i.find(e => e.id === a.id);
                  t && p(t)
                },
                onDragCancel: () => {
                  p(null)
                },
                onDragEnd: A,
                autoScroll: !1,
                children: [(0, o.jsx)(B.gB, {
                  items: i.map(e => e.id),
                  strategy: B._G,
                  children: (0, o.jsx)("div", {
                    className: l().tags,
                    children: i.map(e => (0, o.jsx)(I, {
                      item: e,
                      isUpdating: S,
                      isEditing: u === e.id,
                      editingValue: _,
                      onEditingValueChange: h,
                      onEditKeyPress: D,
                      onSaveEdit: R,
                      onCancelEdit: T,
                      onStartEdit: F,
                      onRemove: C
                    }, e.id))
                  })
                }), y && (0, O.createPortal)((0, o.jsx)(L.Hd, {
                  zIndex: 0x7fffffff,
                  dropAnimation: null,
                  children: f ? (0, o.jsxs)("div", {
                    className: l().typewriterTagContainer,
                    children: [(0, o.jsx)("div", {
                      className: l().typewriterDragHandle,
                      children: m.A.dragHandle
                    }), (0, o.jsx)("div", {
                      className: l().tag,
                      children: (0, o.jsx)("span", {
                        className: l().tagName,
                        children: f.text
                      })
                    })]
                  }) : null
                }), document.body)]
              })]
            })
          })]
        }) : null
      };
      async function P(e, a, t, o, s) {
        try {
          let r = JSON.stringify({
              typewriter_enabled: t
            }),
            n = JSON.stringify({
              typewriter_list: o
            }),
            i = await fetch("https://guns.lol/api/dashboard/premium/typewriter", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: a ? r : n
            }),
            l = await i.json();
          if (i.ok) return a ? c.oR.success(s("dashboard.premium.settings.typewriter.typewriter_toggle_success", {
            action: s(t ? "dashboard.premium.settings.typewriter.enabled_label" : "dashboard.premium.settings.typewriter.disabled_label")
          })) : e && c.oR.success(s("dashboard.premium.settings.typewriter.text_updated")), !0;
          return c.oR.error(l.error), !1
        } catch (e) {
          return console.error(e.message), !1
        }
      }
      let M = ({
        hideViews: e,
        setHideViews: a,
        isTypewriterEnabled: t,
        setIsTypewriterEnabled: r,
        typewriterList: n,
        setParallaxAnimation: i,
        parallaxAnimation: d,
        setTypewriterSpeed: f,
        typewriterSpeed: p,
        typewriterDeleteSpeed: b,
        setTypewriterDeleteSpeed: _
      }) => {
        let S = (0, N.kj)(),
          [y, v] = (0, s.useState)(!1),
          [U, x] = (0, s.useState)(n),
          G = [{
            value: 3,
            label: S("dashboard.premium.settings.typewriter.speed_marks.slow")
          }, {
            value: 8,
            label: S("dashboard.premium.settings.typewriter.speed_marks.fast")
          }],
          j = async e => !!await P(!0, !1, !1, e, S) && (x(e), !0);
        async function w() {
          t ? await P(!1, !0, !1, [], S) && r(!1) : await P(!1, !0, !0, [], S) && r(!0)
        }
        let k = async () => {
          let e = await fetch("https://guns.lol/api/dashboard/premium/typewriterSpeed", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                typewriter_speed: p,
                typewriter_delete_speed: b
              })
            }),
            a = await e.json();
          e.ok ? c.oR.success(S("dashboard.premium.settings.typewriter.save_success")) : c.oR.error(a.error)
        };
        return (0, o.jsxs)(o.Fragment, {
          children: [(0, o.jsxs)(u.A, {
            opened: y,
            onClose: () => v(!1),
            centered: !0,
            title: S("dashboard.premium.settings.typewriter.modal_title"),
            size: "550px",
            children: [(0, o.jsxs)("div", {
              className: l().typewriterWrapper,
              children: [(0, o.jsx)("span", {
                className: t ? l().typewriterEnabled : l().typewriterDisabled,
                onClick: w,
                children: t ? S("dashboard.premium.settings.typewriter.disable_button") : S("dashboard.premium.settings.typewriter.enable_button")
              }), t && (0, o.jsx)(D, {
                onTagsChange: j,
                tagsList: U
              })]
            }), t && (0, o.jsxs)(o.Fragment, {
              children: [(0, o.jsxs)("div", {
                className: l().typewriterSettings,
                children: [(0, o.jsx)(g.A, {
                  featureName: S("dashboard.premium.settings.typewriter.speed_label"),
                  step: 1,
                  max: 10,
                  min: 1,
                  label: e => {},
                  marks: G,
                  value: p,
                  onChangeFunction: f
                }), (0, o.jsx)(g.A, {
                  featureName: S("dashboard.premium.settings.typewriter.delete_speed_label"),
                  step: 1,
                  max: 10,
                  min: 1,
                  label: e => {},
                  marks: G,
                  value: b,
                  onChangeFunction: _
                })]
              }), (0, o.jsx)("span", {
                className: l().saveChangesTypewriter,
                onClick: k,
                children: S("dashboard.premium.settings.typewriter.save_button")
              })]
            })]
          }), (0, o.jsx)("div", {
            className: l().generalComponentContainer,
            children: (0, o.jsxs)("div", {
              className: `${l().generalComponentLeft} ${l().settingsComponent}`,
              children: [(0, o.jsx)("div", {
                className: `${l().featureRow} ${l().settingsComponent}`,
                children: (0, o.jsxs)("div", {
                  className: l().typewriter,
                  children: [(0, o.jsx)("h1", {
                    children: S("dashboard.premium.settings.typewriter.section_title")
                  }), (0, o.jsxs)("span", {
                    onClick: () => v(!0),
                    children: [m.A.typewriterDescripion, " ", S("dashboard.premium.settings.typewriter.section_button")]
                  })]
                })
              }), (0, o.jsxs)("div", {
                className: `${l().featureRow} ${l().settingsComponent}`,
                children: [(0, o.jsx)(h.A, {
                  featureName: S("dashboard.premium.settings.parallax.label"),
                  helpDescription: S("dashboard.premium.settings.parallax.description"),
                  element: (0, o.jsx)(R.A, {
                    onChangeFunction: e => i(e.currentTarget.checked),
                    checked: d
                  })
                }), (0, o.jsx)(R.A, {
                  featureName: S("dashboard.premium.settings.hide_views"),
                  onChangeFunction: e => a(e.currentTarget.checked),
                  checked: e
                })]
              })]
            })
          })]
        })
      };
      async function W(e, a, t, o, s) {
        try {
          a(j.A.loading);
          let r = await fetch("https://guns.lol/api/dashboard/premium", {
              method: "POST",
              body: JSON.stringify({
                page_enter_text: e.page_enter_text,
                cursor_effects: e.cursor_effects,
                effects_color: e.effects_color,
                hide_views: e.hide_views,
                layout: e.layout,
                parallax_animation: e.parallax_animation ?? !1,
                animation: e.animation ?? "fade"
              })
            }),
            n = await r.json();
          r.ok ? (c.oR.success(s("common.unsaved_changes.settings_saved")), setTimeout(() => {
            o(e), t(!1)
          }, 500)) : c.oR.error(n.error)
        } catch (e) {
          console.error(e.message)
        } finally {
          setTimeout(() => {
            a(s("common.unsaved_changes.save_button"))
          }, 500)
        }
      }
      var $ = t(98241),
        z = t.n($);
      let H = ({
        data: e
      }) => {
        let a = (0, N.kj)(),
          [t, i] = (0, s.useState)({
            ...e.config.premium
          }),
          [f, p] = (0, s.useState)(t),
          [u, m] = (0, s.useState)(!1),
          b = a("common.unsaved_changes.save_button"),
          [_, h] = (0, s.useState)(b);
        (0, s.useEffect)(() => {
          let {
            typewriter_enabled: e,
            typewriter_speed: a,
            typewriter_delete_speed: o,
            ...s
          } = f, {
            typewriter_enabled: r,
            typewriter_speed: n,
            typewriter_delete_speed: i,
            ...l
          } = t;
          m(JSON.stringify(s) !== JSON.stringify(l))
        }, [f, t]);
        let S = e => a => {
          p(t => ({
            ...t,
            [e]: a
          }))
        };
        return (0, o.jsxs)(o.Fragment, {
          children: [(0, o.jsx)(c.l$, {
            richColors: !0,
            position: "top-center",
            theme: "dark",
            className: z().toasterStyles,
            icons: {
              success: j.A.successToast
            },
            visibleToasts: 2
          }), (0, o.jsx)(r.N, {
            children: u && (0, o.jsx)("div", {
              className: z().unsavedChangesWrapper,
              children: (0, o.jsxs)(n.P.div, {
                className: z().unsavedChangesBar,
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
                children: [(0, o.jsx)("h1", {
                  children: a("common.unsaved_changes.title")
                }), (0, o.jsx)("h1", {
                  className: z().compactText,
                  children: a("common.unsaved_changes.compact")
                }), (0, o.jsxs)("div", {
                  className: z().unsavedChangesButtons,
                  children: [(0, o.jsx)("span", {
                    className: z().resetButton,
                    onClick: () => {
                      p({
                        ...t
                      }), m(!1)
                    },
                    children: a("common.unsaved_changes.reset")
                  }), (0, o.jsx)("span", {
                    className: z().saveButton,
                    onClick: () => {
                      W(f, h, m, i, a)
                    },
                    children: _
                  })]
                })]
              })
            })
          }), (0, o.jsxs)("div", {
            className: l().featureGap,
            children: [(0, o.jsx)(d.A, {
              featureName: a("dashboard.premium.feature_names.profile"),
              className: l().purpleGlow,
              children: (0, o.jsx)(T, {
                layout: f.layout,
                setLayout: S("layout"),
                animation: f.animation,
                setAnimation: S("animation")
              })
            }), (0, o.jsx)(d.A, {
              featureName: a("dashboard.premium.feature_names.special"),
              children: (0, o.jsx)(F, {
                cursorEffectsColor: f.effects_color,
                setCursorEffectsColor: S("effects_color"),
                cursorEffects: f.cursor_effects,
                setCursorEffects: S("cursor_effects"),
                font: f.font,
                pageEnterText: t.page_enter_text ?? "",
                pageEnterSubtitle: t.page_enter_subtitle ?? "",
                pageEnterIcon: t.page_enter_icon ?? "",
                onEnterScreenSaved: e => {
                  i(a => ({
                    ...a,
                    ...e
                  })), p(a => ({
                    ...a,
                    ...e
                  }))
                },
                clickSound: t.click_sound ?? "none",
                clickSoundCustomUrl: t.click_sound_custom_url ?? "",
                onClickSoundSaved: e => {
                  i(a => ({
                    ...a,
                    ...e
                  })), p(a => ({
                    ...a,
                    ...e
                  }))
                },
                fontSize: f.font_size,
                letterSpacing: f.font_letter_spacing
              })
            }), (0, o.jsx)(d.A, {
              featureName: a("dashboard.premium.feature_names.settings"),
              children: (0, o.jsx)(M, {
                hideViews: f.hide_views,
                setHideViews: S("hide_views"),
                parallaxAnimation: f.parallax_animation,
                setParallaxAnimation: S("parallax_animation"),
                isTypewriterEnabled: f.typewriter_enabled,
                setIsTypewriterEnabled: S("typewriter_enabled"),
                typewriterList: f.typewriter,
                typewriterSpeed: f.typewriter_speed,
                setTypewriterSpeed: S("typewriter_speed"),
                typewriterDeleteSpeed: f.typewriter_delete_speed,
                setTypewriterDeleteSpeed: S("typewriter_delete_speed")
              })
            })]
          })]
        })
      }
    },
    64266: (e, a, t) => {
      "use strict";
      t.d(a, {
        AI: () => r,
        gX: () => u,
        hN: () => p,
        oy: () => s,
        pG: () => c,
        vn: () => m
      });
      let o = [{
          id: "crisp_click",
          url: "https://assets.guns.lol/click-sounds/crisp_click.ogg"
        }, {
          id: "pixel_click",
          url: "https://assets.guns.lol/click-sounds/pixel_click.mp3"
        }, {
          id: "bass_tick",
          url: "https://assets.guns.lol/click-sounds/bass_tick.wav"
        }, {
          id: "mouse_click",
          url: "https://assets.guns.lol/click-sounds/mouse_click.mp3"
        }],
        s = o.map(e => e.id),
        r = .6,
        n = new Map,
        i = new Map;

      function l(e) {
        let a = n.get(e);
        return a || (a = Array.from({
          length: 4
        }, () => {
          let a = new Audio(e);
          return a.preload = "auto", a.volume = r, a
        }), n.set(e, a)), a
      }

      function c(e) {
        e && l(e).forEach(e => e.load())
      }

      function d(e) {
        if (!e) return;
        let a = l(e),
          t = i.get(e) || 0,
          o = a[t];
        i.set(e, (t + 1) % a.length), o.pause(), o.currentTime = 0, o.play().catch(() => void 0)
      }

      function f(e) {
        return o.find(a => a.id === e)?.url || ""
      }

      function p(e) {
        d(f(e))
      }

      function u(e, a = "") {
        "custom" === e ? d(a) : b(e) && p(e)
      }

      function m(e, a = "") {
        return "custom" === e ? a : b(e) ? f(e) : ""
      }

      function b(e) {
        return s.includes(e)
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
    82413: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r,
        k: () => s
      });
      var o = t(12115);
      let s = {
        satoshi: "'Satoshi', sans-serif",
        firacode: "'Fira Code', monospace",
        poppins: "'Poppins', sans-serif",
        array: "'Array', sans-serif",
        drippy: "'Were-Beast', sans-serif",
        minecraft: "'Minecraftia', sans-serif",
        outfit: "'Outfit', sans-serif",
        chillax: "'Chillax', sans-serif",
        velocity: "'Panchang', sans-serif",
        technor: "'Technor', sans-serif",
        jetbrains_mono: "'JetBrains Mono', monospace",
        silkscreen: "'Silkscreen', serif",
        parkinsans: "'Parkinsans', serif"
      };

      function r({
        font: e,
        letterSpacing: a
      }) {
        let t = {
          1: "-0.5px",
          2: null,
          3: "1.5px"
        };
        return (0, o.useEffect)(() => {
          let o = document.head;
          if ("object" == typeof e) {
            let s = e.url;
            new FontFace("USERFONT", `url(${s})`).load().then(e => {
              document.fonts.add(e), document.body.style.fontFamily = "USERFONT, sans-serif";
              let s = document.createElement("style");
              s.innerHTML = `
                    button, input, select, textarea, span, a {
                        font-family: USERFONT, sans-serif;
                        font-size-adjust: initial;

                    }
                `, o.appendChild(s);
              let r = a ? t[a] : null;
              r && (document.body.style.letterSpacing = r)
            }).catch(e => {
              console.error("Failed to load font:", e)
            })
          } else {
            let a = document.createElement("link");
            switch (a.rel = "stylesheet", a.dataset.font = e, e) {
              case "firacode":
                a.href = "https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap";
                break;
              case "poppins":
                a.href = "https://fonts.googleapis.com/css2?family=Poppins&display=swap";
                break;
              case "array":
                a.href = "https://api.fontshare.com/v2/css?f[]=array@400&display=swap";
                break;
              case "drippy":
                a.href = "https://fonts.cdnfonts.com/css/were-beast-2";
                break;
              case "minecraft":
                a.href = "https://fonts.cdnfonts.com/css/minecraftia";
                break;
              case "outfit":
                a.href = "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap";
                break;
              case "chillax":
                a.href = "https://api.fontshare.com/v2/css?f[]=chillax@500&display=swap";
                break;
              case "velocity":
                a.href = "https://api.fontshare.com/v2/css?f[]=panchang@500&display=swap";
                break;
              case "technor":
                a.href = "https://api.fontshare.com/v2/css?f[]=technor@400&display=swap";
                break;
              case "jetbrains_mono":
                a.href = "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital@0;1&display=swap";
                break;
              case "silkscreen":
                a.href = "https://fonts.googleapis.com/css2?family=Silkscreen&display=swap";
                break;
              case "parkinsans":
                a.href = "https://fonts.googleapis.com/css2?family=Parkinsans:wght@500&display=swap";
                break;
              default:
                a.href = ""
            }
            a.href && o.appendChild(a);
            let t = document.createElement("style");
            return t.dataset.font = e, t.innerHTML = `
                body, * {
                    font-family: ${s[e]||"sans-serif"} !important;
                }
            `, o.appendChild(t), () => {
              a.parentNode && o.removeChild(a), t.parentNode && o.removeChild(t)
            }
          }
        }, [e]), null
      }
    }
  }
]);