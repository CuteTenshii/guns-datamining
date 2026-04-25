"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1891], {
    14311: (e, a, t) => {
      t.d(a, {
        fr: () => l
      });
      let n = {
        lessThanXSeconds: {
          one: "moins d’une seconde",
          other: "moins de {{count}} secondes"
        },
        xSeconds: {
          one: "1 seconde",
          other: "{{count}} secondes"
        },
        halfAMinute: "30 secondes",
        lessThanXMinutes: {
          one: "moins d’une minute",
          other: "moins de {{count}} minutes"
        },
        xMinutes: {
          one: "1 minute",
          other: "{{count}} minutes"
        },
        aboutXHours: {
          one: "environ 1 heure",
          other: "environ {{count}} heures"
        },
        xHours: {
          one: "1 heure",
          other: "{{count}} heures"
        },
        xDays: {
          one: "1 jour",
          other: "{{count}} jours"
        },
        aboutXWeeks: {
          one: "environ 1 semaine",
          other: "environ {{count}} semaines"
        },
        xWeeks: {
          one: "1 semaine",
          other: "{{count}} semaines"
        },
        aboutXMonths: {
          one: "environ 1 mois",
          other: "environ {{count}} mois"
        },
        xMonths: {
          one: "1 mois",
          other: "{{count}} mois"
        },
        aboutXYears: {
          one: "environ 1 an",
          other: "environ {{count}} ans"
        },
        xYears: {
          one: "1 an",
          other: "{{count}} ans"
        },
        overXYears: {
          one: "plus d’un an",
          other: "plus de {{count}} ans"
        },
        almostXYears: {
          one: "presqu’un an",
          other: "presque {{count}} ans"
        }
      };
      var i = t(81090);
      let r = {
          date: (0, i.k)({
            formats: {
              full: "EEEE d MMMM y",
              long: "d MMMM y",
              medium: "d MMM y",
              short: "dd/MM/y"
            },
            defaultWidth: "full"
          }),
          time: (0, i.k)({
            formats: {
              full: "HH:mm:ss zzzz",
              long: "HH:mm:ss z",
              medium: "HH:mm:ss",
              short: "HH:mm"
            },
            defaultWidth: "full"
          }),
          dateTime: (0, i.k)({
            formats: {
              full: "{{date}} '\xe0' {{time}}",
              long: "{{date}} '\xe0' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}"
            },
            defaultWidth: "full"
          })
        },
        o = {
          lastWeek: "eeee 'dernier \xe0' p",
          yesterday: "'hier \xe0' p",
          today: "'aujourd’hui \xe0' p",
          tomorrow: "'demain \xe0' p'",
          nextWeek: "eeee 'prochain \xe0' p",
          other: "P"
        };
      var d = t(47068);
      let s = ["MMM", "MMMM"],
        u = {
          preprocessor: (e, a) => 1 !== e.getDate() && a.some(e => e.isToken && s.includes(e.value)) ? a.map(e => e.isToken && "do" === e.value ? {
            isToken: !0,
            value: "d"
          } : e) : a,
          ordinalNumber: (e, a) => {
            let t, n = Number(e),
              i = a?.unit;
            return 0 === n ? "0" : (t = 1 === n ? i && ["year", "week", "hour", "minute", "second"].includes(i) ? "\xe8re" : "er" : "\xe8me", n + t)
          },
          era: (0, d.o)({
            values: {
              narrow: ["av. J.-C", "ap. J.-C"],
              abbreviated: ["av. J.-C", "ap. J.-C"],
              wide: ["avant J\xe9sus-Christ", "apr\xe8s J\xe9sus-Christ"]
            },
            defaultWidth: "wide"
          }),
          quarter: (0, d.o)({
            values: {
              narrow: ["T1", "T2", "T3", "T4"],
              abbreviated: ["1er trim.", "2\xe8me trim.", "3\xe8me trim.", "4\xe8me trim."],
              wide: ["1er trimestre", "2\xe8me trimestre", "3\xe8me trimestre", "4\xe8me trimestre"]
            },
            defaultWidth: "wide",
            argumentCallback: e => e - 1
          }),
          month: (0, d.o)({
            values: {
              narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
              abbreviated: ["janv.", "f\xe9vr.", "mars", "avr.", "mai", "juin", "juil.", "ao\xfbt", "sept.", "oct.", "nov.", "d\xe9c."],
              wide: ["janvier", "f\xe9vrier", "mars", "avril", "mai", "juin", "juillet", "ao\xfbt", "septembre", "octobre", "novembre", "d\xe9cembre"]
            },
            defaultWidth: "wide"
          }),
          day: (0, d.o)({
            values: {
              narrow: ["D", "L", "M", "M", "J", "V", "S"],
              short: ["di", "lu", "ma", "me", "je", "ve", "sa"],
              abbreviated: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
              wide: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
            },
            defaultWidth: "wide"
          }),
          dayPeriod: (0, d.o)({
            values: {
              narrow: {
                am: "AM",
                pm: "PM",
                midnight: "minuit",
                noon: "midi",
                morning: "mat.",
                afternoon: "ap.m.",
                evening: "soir",
                night: "mat."
              },
              abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "minuit",
                noon: "midi",
                morning: "matin",
                afternoon: "apr\xe8s-midi",
                evening: "soir",
                night: "matin"
              },
              wide: {
                am: "AM",
                pm: "PM",
                midnight: "minuit",
                noon: "midi",
                morning: "du matin",
                afternoon: "de l’apr\xe8s-midi",
                evening: "du soir",
                night: "du matin"
              }
            },
            defaultWidth: "wide"
          })
        };
      var m = t(80134);
      let l = {
        code: "fr",
        formatDistance: (e, a, t) => {
          let i, r = n[e];
          if (i = "string" == typeof r ? r : 1 === a ? r.one : r.other.replace("{{count}}", String(a)), t?.addSuffix)
            if (t.comparison && t.comparison > 0) return "dans " + i;
            else return "il y a " + i;
          return i
        },
        formatLong: r,
        formatRelative: (e, a, t, n) => o[e],
        localize: u,
        match: {
          ordinalNumber: (0, t(58662).K)({
            matchPattern: /^(\d+)(ième|ère|ème|er|e)?/i,
            parsePattern: /\d+/i,
            valueCallback: e => parseInt(e)
          }),
          era: (0, m.A)({
            matchPatterns: {
              narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,
              abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,
              wide: /^(avant Jésus-Christ|après Jésus-Christ)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/^av/i, /^ap/i]
            },
            defaultParseWidth: "any"
          }),
          quarter: (0, m.A)({
            matchPatterns: {
              narrow: /^T?[1234]/i,
              abbreviated: /^[1234](er|ème|e)? trim\.?/i,
              wide: /^[1234](er|ème|e)? trimestre/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/1/i, /2/i, /3/i, /4/i]
            },
            defaultParseWidth: "any",
            valueCallback: e => e + 1
          }),
          month: (0, m.A)({
            matchPatterns: {
              narrow: /^[jfmasond]/i,
              abbreviated: /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,
              wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
              any: [/^ja/i, /^f/i, /^mar/i, /^av/i, /^ma/i, /^juin/i, /^juil/i, /^ao/i, /^s/i, /^o/i, /^n/i, /^d/i]
            },
            defaultParseWidth: "any"
          }),
          day: (0, m.A)({
            matchPatterns: {
              narrow: /^[lmjvsd]/i,
              short: /^(di|lu|ma|me|je|ve|sa)/i,
              abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,
              wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
              any: [/^di/i, /^lu/i, /^ma/i, /^me/i, /^je/i, /^ve/i, /^sa/i]
            },
            defaultParseWidth: "any"
          }),
          dayPeriod: (0, m.A)({
            matchPatterns: {
              narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,
              any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^min/i,
                noon: /^mid/i,
                morning: /mat/i,
                afternoon: /ap/i,
                evening: /soir/i,
                night: /nuit/i
              }
            },
            defaultParseWidth: "any"
          })
        },
        options: {
          weekStartsOn: 1,
          firstWeekContainsDate: 4
        }
      }
    },
    15875: (e, a, t) => {
      t.d(a, {
        tr: () => m
      });
      let n = {
        lessThanXSeconds: {
          one: "bir saniyeden az",
          other: "{{count}} saniyeden az"
        },
        xSeconds: {
          one: "1 saniye",
          other: "{{count}} saniye"
        },
        halfAMinute: "yarım dakika",
        lessThanXMinutes: {
          one: "bir dakikadan az",
          other: "{{count}} dakikadan az"
        },
        xMinutes: {
          one: "1 dakika",
          other: "{{count}} dakika"
        },
        aboutXHours: {
          one: "yaklaşık 1 saat",
          other: "yaklaşık {{count}} saat"
        },
        xHours: {
          one: "1 saat",
          other: "{{count}} saat"
        },
        xDays: {
          one: "1 g\xfcn",
          other: "{{count}} g\xfcn"
        },
        aboutXWeeks: {
          one: "yaklaşık 1 hafta",
          other: "yaklaşık {{count}} hafta"
        },
        xWeeks: {
          one: "1 hafta",
          other: "{{count}} hafta"
        },
        aboutXMonths: {
          one: "yaklaşık 1 ay",
          other: "yaklaşık {{count}} ay"
        },
        xMonths: {
          one: "1 ay",
          other: "{{count}} ay"
        },
        aboutXYears: {
          one: "yaklaşık 1 yıl",
          other: "yaklaşık {{count}} yıl"
        },
        xYears: {
          one: "1 yıl",
          other: "{{count}} yıl"
        },
        overXYears: {
          one: "1 yıldan fazla",
          other: "{{count}} yıldan fazla"
        },
        almostXYears: {
          one: "neredeyse 1 yıl",
          other: "neredeyse {{count}} yıl"
        }
      };
      var i = t(81090);
      let r = {
          date: (0, i.k)({
            formats: {
              full: "d MMMM y EEEE",
              long: "d MMMM y",
              medium: "d MMM y",
              short: "dd.MM.yyyy"
            },
            defaultWidth: "full"
          }),
          time: (0, i.k)({
            formats: {
              full: "HH:mm:ss zzzz",
              long: "HH:mm:ss z",
              medium: "HH:mm:ss",
              short: "HH:mm"
            },
            defaultWidth: "full"
          }),
          dateTime: (0, i.k)({
            formats: {
              full: "{{date}} 'saat' {{time}}",
              long: "{{date}} 'saat' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}"
            },
            defaultWidth: "full"
          })
        },
        o = {
          lastWeek: "'ge\xe7en hafta' eeee 'saat' p",
          yesterday: "'d\xfcn saat' p",
          today: "'bug\xfcn saat' p",
          tomorrow: "'yarın saat' p",
          nextWeek: "eeee 'saat' p",
          other: "P"
        };
      var d = t(47068);
      let s = {
        ordinalNumber: (e, a) => Number(e) + ".",
        era: (0, d.o)({
          values: {
            narrow: ["M\xd6", "MS"],
            abbreviated: ["M\xd6", "MS"],
            wide: ["Milattan \xd6nce", "Milattan Sonra"]
          },
          defaultWidth: "wide"
        }),
        quarter: (0, d.o)({
          values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["1\xc7", "2\xc7", "3\xc7", "4\xc7"],
            wide: ["İlk \xe7eyrek", "İkinci \xc7eyrek", "\xdc\xe7\xfcnc\xfc \xe7eyrek", "Son \xe7eyrek"]
          },
          defaultWidth: "wide",
          argumentCallback: e => Number(e) - 1
        }),
        month: (0, d.o)({
          values: {
            narrow: ["O", "Ş", "M", "N", "M", "H", "T", "A", "E", "E", "K", "A"],
            abbreviated: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
            wide: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eyl\xfcl", "Ekim", "Kasım", "Aralık"]
          },
          defaultWidth: "wide"
        }),
        day: (0, d.o)({
          values: {
            narrow: ["P", "P", "S", "\xc7", "P", "C", "C"],
            short: ["Pz", "Pt", "Sa", "\xc7a", "Pe", "Cu", "Ct"],
            abbreviated: ["Paz", "Pzt", "Sal", "\xc7ar", "Per", "Cum", "Cts"],
            wide: ["Pazar", "Pazartesi", "Salı", "\xc7arşamba", "Perşembe", "Cuma", "Cumartesi"]
          },
          defaultWidth: "wide"
        }),
        dayPeriod: (0, d.o)({
          values: {
            narrow: {
              am: "\xf6\xf6",
              pm: "\xf6s",
              midnight: "gy",
              noon: "\xf6",
              morning: "sa",
              afternoon: "\xf6s",
              evening: "ak",
              night: "ge"
            },
            abbreviated: {
              am: "\xd6\xd6",
              pm: "\xd6S",
              midnight: "gece yarısı",
              noon: "\xf6ğle",
              morning: "sabah",
              afternoon: "\xf6ğleden sonra",
              evening: "akşam",
              night: "gece"
            },
            wide: {
              am: "\xd6.\xd6.",
              pm: "\xd6.S.",
              midnight: "gece yarısı",
              noon: "\xf6ğle",
              morning: "sabah",
              afternoon: "\xf6ğleden sonra",
              evening: "akşam",
              night: "gece"
            }
          },
          defaultWidth: "wide",
          formattingValues: {
            narrow: {
              am: "\xf6\xf6",
              pm: "\xf6s",
              midnight: "gy",
              noon: "\xf6",
              morning: "sa",
              afternoon: "\xf6s",
              evening: "ak",
              night: "ge"
            },
            abbreviated: {
              am: "\xd6\xd6",
              pm: "\xd6S",
              midnight: "gece yarısı",
              noon: "\xf6ğlen",
              morning: "sabahleyin",
              afternoon: "\xf6ğleden sonra",
              evening: "akşamleyin",
              night: "geceleyin"
            },
            wide: {
              am: "\xf6.\xf6.",
              pm: "\xf6.s.",
              midnight: "gece yarısı",
              noon: "\xf6ğlen",
              morning: "sabahleyin",
              afternoon: "\xf6ğleden sonra",
              evening: "akşamleyin",
              night: "geceleyin"
            }
          },
          defaultFormattingWidth: "wide"
        })
      };
      var u = t(80134);
      let m = {
        code: "tr",
        formatDistance: (e, a, t) => {
          let i, r = n[e];
          if (i = "string" == typeof r ? r : 1 === a ? r.one : r.other.replace("{{count}}", a.toString()), t?.addSuffix)
            if (t.comparison && t.comparison > 0) return i + " sonra";
            else return i + " \xf6nce";
          return i
        },
        formatLong: r,
        formatRelative: (e, a, t, n) => o[e],
        localize: s,
        match: {
          ordinalNumber: (0, t(58662).K)({
            matchPattern: /^(\d+)(\.)?/i,
            parsePattern: /\d+/i,
            valueCallback: function(e) {
              return parseInt(e, 10)
            }
          }),
          era: (0, u.A)({
            matchPatterns: {
              narrow: /^(mö|ms)/i,
              abbreviated: /^(mö|ms)/i,
              wide: /^(milattan önce|milattan sonra)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/(^mö|^milattan önce)/i, /(^ms|^milattan sonra)/i]
            },
            defaultParseWidth: "any"
          }),
          quarter: (0, u.A)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^[1234]ç/i,
              wide: /^((i|İ)lk|(i|İ)kinci|üçüncü|son) çeyrek/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/1/i, /2/i, /3/i, /4/i],
              abbreviated: [/1ç/i, /2ç/i, /3ç/i, /4ç/i],
              wide: [/^(i|İ)lk çeyrek/i, /(i|İ)kinci çeyrek/i, /üçüncü çeyrek/i, /son çeyrek/i]
            },
            defaultParseWidth: "any",
            valueCallback: e => e + 1
          }),
          month: (0, u.A)({
            matchPatterns: {
              narrow: /^[oşmnhtaek]/i,
              abbreviated: /^(oca|şub|mar|nis|may|haz|tem|ağu|eyl|eki|kas|ara)/i,
              wide: /^(ocak|şubat|mart|nisan|mayıs|haziran|temmuz|ağustos|eylül|ekim|kasım|aralık)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^o/i, /^ş/i, /^m/i, /^n/i, /^m/i, /^h/i, /^t/i, /^a/i, /^e/i, /^e/i, /^k/i, /^a/i],
              any: [/^o/i, /^ş/i, /^mar/i, /^n/i, /^may/i, /^h/i, /^t/i, /^ağ/i, /^ey/i, /^ek/i, /^k/i, /^ar/i]
            },
            defaultParseWidth: "any"
          }),
          day: (0, u.A)({
            matchPatterns: {
              narrow: /^[psçc]/i,
              short: /^(pz|pt|sa|ça|pe|cu|ct)/i,
              abbreviated: /^(paz|pzt|sal|çar|per|cum|cts)/i,
              wide: /^(pazar(?!tesi)|pazartesi|salı|çarşamba|perşembe|cuma(?!rtesi)|cumartesi)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^p/i, /^p/i, /^s/i, /^ç/i, /^p/i, /^c/i, /^c/i],
              any: [/^pz/i, /^pt/i, /^sa/i, /^ça/i, /^pe/i, /^cu/i, /^ct/i],
              wide: [/^pazar(?!tesi)/i, /^pazartesi/i, /^salı/i, /^çarşamba/i, /^perşembe/i, /^cuma(?!rtesi)/i, /^cumartesi/i]
            },
            defaultParseWidth: "any"
          }),
          dayPeriod: (0, u.A)({
            matchPatterns: {
              narrow: /^(öö|ös|gy|ö|sa|ös|ak|ge)/i,
              any: /^(ö\.?\s?[ös]\.?|öğleden sonra|gece yarısı|öğle|(sabah|öğ|akşam|gece)(leyin))/i
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^ö\.?ö\.?/i,
                pm: /^ö\.?s\.?/i,
                midnight: /^(gy|gece yarısı)/i,
                noon: /^öğ/i,
                morning: /^sa/i,
                afternoon: /^öğleden sonra/i,
                evening: /^ak/i,
                night: /^ge/i
              }
            },
            defaultParseWidth: "any"
          })
        },
        options: {
          weekStartsOn: 1,
          firstWeekContainsDate: 1
        }
      }
    },
    20248: (e, a, t) => {
      t.d(a, {
        es: () => h
      });
      let n = {
        lessThanXSeconds: {
          one: "menos de un segundo",
          other: "menos de {{count}} segundos"
        },
        xSeconds: {
          one: "1 segundo",
          other: "{{count}} segundos"
        },
        halfAMinute: "medio minuto",
        lessThanXMinutes: {
          one: "menos de un minuto",
          other: "menos de {{count}} minutos"
        },
        xMinutes: {
          one: "1 minuto",
          other: "{{count}} minutos"
        },
        aboutXHours: {
          one: "alrededor de 1 hora",
          other: "alrededor de {{count}} horas"
        },
        xHours: {
          one: "1 hora",
          other: "{{count}} horas"
        },
        xDays: {
          one: "1 d\xeda",
          other: "{{count}} d\xedas"
        },
        aboutXWeeks: {
          one: "alrededor de 1 semana",
          other: "alrededor de {{count}} semanas"
        },
        xWeeks: {
          one: "1 semana",
          other: "{{count}} semanas"
        },
        aboutXMonths: {
          one: "alrededor de 1 mes",
          other: "alrededor de {{count}} meses"
        },
        xMonths: {
          one: "1 mes",
          other: "{{count}} meses"
        },
        aboutXYears: {
          one: "alrededor de 1 a\xf1o",
          other: "alrededor de {{count}} a\xf1os"
        },
        xYears: {
          one: "1 a\xf1o",
          other: "{{count}} a\xf1os"
        },
        overXYears: {
          one: "m\xe1s de 1 a\xf1o",
          other: "m\xe1s de {{count}} a\xf1os"
        },
        almostXYears: {
          one: "casi 1 a\xf1o",
          other: "casi {{count}} a\xf1os"
        }
      };
      var i = t(81090);
      let r = {
          date: (0, i.k)({
            formats: {
              full: "EEEE, d 'de' MMMM 'de' y",
              long: "d 'de' MMMM 'de' y",
              medium: "d MMM y",
              short: "dd/MM/y"
            },
            defaultWidth: "full"
          }),
          time: (0, i.k)({
            formats: {
              full: "HH:mm:ss zzzz",
              long: "HH:mm:ss z",
              medium: "HH:mm:ss",
              short: "HH:mm"
            },
            defaultWidth: "full"
          }),
          dateTime: (0, i.k)({
            formats: {
              full: "{{date}} 'a las' {{time}}",
              long: "{{date}} 'a las' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}"
            },
            defaultWidth: "full"
          })
        },
        o = {
          lastWeek: "'el' eeee 'pasado a la' p",
          yesterday: "'ayer a la' p",
          today: "'hoy a la' p",
          tomorrow: "'ma\xf1ana a la' p",
          nextWeek: "eeee 'a la' p",
          other: "P"
        },
        d = {
          lastWeek: "'el' eeee 'pasado a las' p",
          yesterday: "'ayer a las' p",
          today: "'hoy a las' p",
          tomorrow: "'ma\xf1ana a las' p",
          nextWeek: "eeee 'a las' p",
          other: "P"
        };
      var s = t(47068);
      let u = {
        ordinalNumber: (e, a) => Number(e) + "\xba",
        era: (0, s.o)({
          values: {
            narrow: ["AC", "DC"],
            abbreviated: ["AC", "DC"],
            wide: ["antes de cristo", "despu\xe9s de cristo"]
          },
          defaultWidth: "wide"
        }),
        quarter: (0, s.o)({
          values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["T1", "T2", "T3", "T4"],
            wide: ["1\xba trimestre", "2\xba trimestre", "3\xba trimestre", "4\xba trimestre"]
          },
          defaultWidth: "wide",
          argumentCallback: e => Number(e) - 1
        }),
        month: (0, s.o)({
          values: {
            narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
            abbreviated: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
            wide: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
          },
          defaultWidth: "wide"
        }),
        day: (0, s.o)({
          values: {
            narrow: ["d", "l", "m", "m", "j", "v", "s"],
            short: ["do", "lu", "ma", "mi", "ju", "vi", "s\xe1"],
            abbreviated: ["dom", "lun", "mar", "mi\xe9", "jue", "vie", "s\xe1b"],
            wide: ["domingo", "lunes", "martes", "mi\xe9rcoles", "jueves", "viernes", "s\xe1bado"]
          },
          defaultWidth: "wide"
        }),
        dayPeriod: (0, s.o)({
          values: {
            narrow: {
              am: "a",
              pm: "p",
              midnight: "mn",
              noon: "md",
              morning: "ma\xf1ana",
              afternoon: "tarde",
              evening: "tarde",
              night: "noche"
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "medianoche",
              noon: "mediodia",
              morning: "ma\xf1ana",
              afternoon: "tarde",
              evening: "tarde",
              night: "noche"
            },
            wide: {
              am: "a.m.",
              pm: "p.m.",
              midnight: "medianoche",
              noon: "mediodia",
              morning: "ma\xf1ana",
              afternoon: "tarde",
              evening: "tarde",
              night: "noche"
            }
          },
          defaultWidth: "wide",
          formattingValues: {
            narrow: {
              am: "a",
              pm: "p",
              midnight: "mn",
              noon: "md",
              morning: "de la ma\xf1ana",
              afternoon: "de la tarde",
              evening: "de la tarde",
              night: "de la noche"
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "medianoche",
              noon: "mediodia",
              morning: "de la ma\xf1ana",
              afternoon: "de la tarde",
              evening: "de la tarde",
              night: "de la noche"
            },
            wide: {
              am: "a.m.",
              pm: "p.m.",
              midnight: "medianoche",
              noon: "mediodia",
              morning: "de la ma\xf1ana",
              afternoon: "de la tarde",
              evening: "de la tarde",
              night: "de la noche"
            }
          },
          defaultFormattingWidth: "wide"
        })
      };
      var m = t(58662),
        l = t(80134);
      let h = {
        code: "es",
        formatDistance: (e, a, t) => {
          let i, r = n[e];
          if (i = "string" == typeof r ? r : 1 === a ? r.one : r.other.replace("{{count}}", a.toString()), t?.addSuffix)
            if (t.comparison && t.comparison > 0) return "en " + i;
            else return "hace " + i;
          return i
        },
        formatLong: r,
        formatRelative: (e, a, t, n) => 1 !== a.getHours() ? d[e] : o[e],
        localize: u,
        match: {
          ordinalNumber: (0, m.K)({
            matchPattern: /^(\d+)(º)?/i,
            parsePattern: /\d+/i,
            valueCallback: function(e) {
              return parseInt(e, 10)
            }
          }),
          era: (0, l.A)({
            matchPatterns: {
              narrow: /^(ac|dc|a|d)/i,
              abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
              wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/^ac/i, /^dc/i],
              wide: [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i]
            },
            defaultParseWidth: "any"
          }),
          quarter: (0, l.A)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^T[1234]/i,
              wide: /^[1234](º)? trimestre/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/1/i, /2/i, /3/i, /4/i]
            },
            defaultParseWidth: "any",
            valueCallback: e => e + 1
          }),
          month: (0, l.A)({
            matchPatterns: {
              narrow: /^[efmajsond]/i,
              abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
              wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
              any: [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
            },
            defaultParseWidth: "any"
          }),
          day: (0, l.A)({
            matchPatterns: {
              narrow: /^[dlmjvs]/i,
              short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
              abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
              wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
              any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i]
            },
            defaultParseWidth: "any"
          }),
          dayPeriod: (0, l.A)({
            matchPatterns: {
              narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
              any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^mn/i,
                noon: /^md/i,
                morning: /mañana/i,
                afternoon: /tarde/i,
                evening: /tarde/i,
                night: /noche/i
              }
            },
            defaultParseWidth: "any"
          })
        },
        options: {
          weekStartsOn: 1,
          firstWeekContainsDate: 1
        }
      }
    },
    28872: (e, a, t) => {
      t.d(a, {
        de: () => h
      });
      let n = {
        lessThanXSeconds: {
          standalone: {
            one: "weniger als 1 Sekunde",
            other: "weniger als {{count}} Sekunden"
          },
          withPreposition: {
            one: "weniger als 1 Sekunde",
            other: "weniger als {{count}} Sekunden"
          }
        },
        xSeconds: {
          standalone: {
            one: "1 Sekunde",
            other: "{{count}} Sekunden"
          },
          withPreposition: {
            one: "1 Sekunde",
            other: "{{count}} Sekunden"
          }
        },
        halfAMinute: {
          standalone: "eine halbe Minute",
          withPreposition: "einer halben Minute"
        },
        lessThanXMinutes: {
          standalone: {
            one: "weniger als 1 Minute",
            other: "weniger als {{count}} Minuten"
          },
          withPreposition: {
            one: "weniger als 1 Minute",
            other: "weniger als {{count}} Minuten"
          }
        },
        xMinutes: {
          standalone: {
            one: "1 Minute",
            other: "{{count}} Minuten"
          },
          withPreposition: {
            one: "1 Minute",
            other: "{{count}} Minuten"
          }
        },
        aboutXHours: {
          standalone: {
            one: "etwa 1 Stunde",
            other: "etwa {{count}} Stunden"
          },
          withPreposition: {
            one: "etwa 1 Stunde",
            other: "etwa {{count}} Stunden"
          }
        },
        xHours: {
          standalone: {
            one: "1 Stunde",
            other: "{{count}} Stunden"
          },
          withPreposition: {
            one: "1 Stunde",
            other: "{{count}} Stunden"
          }
        },
        xDays: {
          standalone: {
            one: "1 Tag",
            other: "{{count}} Tage"
          },
          withPreposition: {
            one: "1 Tag",
            other: "{{count}} Tagen"
          }
        },
        aboutXWeeks: {
          standalone: {
            one: "etwa 1 Woche",
            other: "etwa {{count}} Wochen"
          },
          withPreposition: {
            one: "etwa 1 Woche",
            other: "etwa {{count}} Wochen"
          }
        },
        xWeeks: {
          standalone: {
            one: "1 Woche",
            other: "{{count}} Wochen"
          },
          withPreposition: {
            one: "1 Woche",
            other: "{{count}} Wochen"
          }
        },
        aboutXMonths: {
          standalone: {
            one: "etwa 1 Monat",
            other: "etwa {{count}} Monate"
          },
          withPreposition: {
            one: "etwa 1 Monat",
            other: "etwa {{count}} Monaten"
          }
        },
        xMonths: {
          standalone: {
            one: "1 Monat",
            other: "{{count}} Monate"
          },
          withPreposition: {
            one: "1 Monat",
            other: "{{count}} Monaten"
          }
        },
        aboutXYears: {
          standalone: {
            one: "etwa 1 Jahr",
            other: "etwa {{count}} Jahre"
          },
          withPreposition: {
            one: "etwa 1 Jahr",
            other: "etwa {{count}} Jahren"
          }
        },
        xYears: {
          standalone: {
            one: "1 Jahr",
            other: "{{count}} Jahre"
          },
          withPreposition: {
            one: "1 Jahr",
            other: "{{count}} Jahren"
          }
        },
        overXYears: {
          standalone: {
            one: "mehr als 1 Jahr",
            other: "mehr als {{count}} Jahre"
          },
          withPreposition: {
            one: "mehr als 1 Jahr",
            other: "mehr als {{count}} Jahren"
          }
        },
        almostXYears: {
          standalone: {
            one: "fast 1 Jahr",
            other: "fast {{count}} Jahre"
          },
          withPreposition: {
            one: "fast 1 Jahr",
            other: "fast {{count}} Jahren"
          }
        }
      };
      var i = t(81090);
      let r = {
          date: (0, i.k)({
            formats: {
              full: "EEEE, do MMMM y",
              long: "do MMMM y",
              medium: "do MMM y",
              short: "dd.MM.y"
            },
            defaultWidth: "full"
          }),
          time: (0, i.k)({
            formats: {
              full: "HH:mm:ss zzzz",
              long: "HH:mm:ss z",
              medium: "HH:mm:ss",
              short: "HH:mm"
            },
            defaultWidth: "full"
          }),
          dateTime: (0, i.k)({
            formats: {
              full: "{{date}} 'um' {{time}}",
              long: "{{date}} 'um' {{time}}",
              medium: "{{date}} {{time}}",
              short: "{{date}} {{time}}"
            },
            defaultWidth: "full"
          })
        },
        o = {
          lastWeek: "'letzten' eeee 'um' p",
          yesterday: "'gestern um' p",
          today: "'heute um' p",
          tomorrow: "'morgen um' p",
          nextWeek: "eeee 'um' p",
          other: "P"
        };
      var d = t(47068);
      let s = {
          narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          abbreviated: ["Jan", "Feb", "M\xe4r", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
          wide: ["Januar", "Februar", "M\xe4rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
        },
        u = {
          narrow: s.narrow,
          abbreviated: ["Jan.", "Feb.", "M\xe4rz", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."],
          wide: s.wide
        },
        m = {
          ordinalNumber: e => Number(e) + ".",
          era: (0, d.o)({
            values: {
              narrow: ["v.Chr.", "n.Chr."],
              abbreviated: ["v.Chr.", "n.Chr."],
              wide: ["vor Christus", "nach Christus"]
            },
            defaultWidth: "wide"
          }),
          quarter: (0, d.o)({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["Q1", "Q2", "Q3", "Q4"],
              wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"]
            },
            defaultWidth: "wide",
            argumentCallback: e => e - 1
          }),
          month: (0, d.o)({
            values: s,
            formattingValues: u,
            defaultWidth: "wide"
          }),
          day: (0, d.o)({
            values: {
              narrow: ["S", "M", "D", "M", "D", "F", "S"],
              short: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
              abbreviated: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
              wide: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
            },
            defaultWidth: "wide"
          }),
          dayPeriod: (0, d.o)({
            values: {
              narrow: {
                am: "vm.",
                pm: "nm.",
                midnight: "Mitternacht",
                noon: "Mittag",
                morning: "Morgen",
                afternoon: "Nachm.",
                evening: "Abend",
                night: "Nacht"
              },
              abbreviated: {
                am: "vorm.",
                pm: "nachm.",
                midnight: "Mitternacht",
                noon: "Mittag",
                morning: "Morgen",
                afternoon: "Nachmittag",
                evening: "Abend",
                night: "Nacht"
              },
              wide: {
                am: "vormittags",
                pm: "nachmittags",
                midnight: "Mitternacht",
                noon: "Mittag",
                morning: "Morgen",
                afternoon: "Nachmittag",
                evening: "Abend",
                night: "Nacht"
              }
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: {
                am: "vm.",
                pm: "nm.",
                midnight: "Mitternacht",
                noon: "Mittag",
                morning: "morgens",
                afternoon: "nachm.",
                evening: "abends",
                night: "nachts"
              },
              abbreviated: {
                am: "vorm.",
                pm: "nachm.",
                midnight: "Mitternacht",
                noon: "Mittag",
                morning: "morgens",
                afternoon: "nachmittags",
                evening: "abends",
                night: "nachts"
              },
              wide: {
                am: "vormittags",
                pm: "nachmittags",
                midnight: "Mitternacht",
                noon: "Mittag",
                morning: "morgens",
                afternoon: "nachmittags",
                evening: "abends",
                night: "nachts"
              }
            },
            defaultFormattingWidth: "wide"
          })
        };
      var l = t(80134);
      let h = {
        code: "de",
        formatDistance: (e, a, t) => {
          let i, r = t?.addSuffix ? n[e].withPreposition : n[e].standalone;
          if (i = "string" == typeof r ? r : 1 === a ? r.one : r.other.replace("{{count}}", String(a)), t?.addSuffix)
            if (t.comparison && t.comparison > 0) return "in " + i;
            else return "vor " + i;
          return i
        },
        formatLong: r,
        formatRelative: (e, a, t, n) => o[e],
        localize: m,
        match: {
          ordinalNumber: (0, t(58662).K)({
            matchPattern: /^(\d+)(\.)?/i,
            parsePattern: /\d+/i,
            valueCallback: e => parseInt(e)
          }),
          era: (0, l.A)({
            matchPatterns: {
              narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
              abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
              wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/^v/i, /^n/i]
            },
            defaultParseWidth: "any"
          }),
          quarter: (0, l.A)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^q[1234]/i,
              wide: /^[1234](\.)? Quartal/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/1/i, /2/i, /3/i, /4/i]
            },
            defaultParseWidth: "any",
            valueCallback: e => e + 1
          }),
          month: (0, l.A)({
            matchPatterns: {
              narrow: /^[jfmasond]/i,
              abbreviated: /^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,
              wide: /^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
              any: [/^j[aä]/i, /^f/i, /^mär/i, /^ap/i, /^mai/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
            },
            defaultParseWidth: "any"
          }),
          day: (0, l.A)({
            matchPatterns: {
              narrow: /^[smdmf]/i,
              short: /^(so|mo|di|mi|do|fr|sa)/i,
              abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,
              wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/^so/i, /^mo/i, /^di/i, /^mi/i, /^do/i, /^f/i, /^sa/i]
            },
            defaultParseWidth: "any"
          }),
          dayPeriod: (0, l.A)({
            matchPatterns: {
              narrow: /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
              abbreviated: /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
              wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: {
                am: /^v/i,
                pm: /^n/i,
                midnight: /^Mitte/i,
                noon: /^Mitta/i,
                morning: /morgens/i,
                afternoon: /nachmittags/i,
                evening: /abends/i,
                night: /nachts/i
              }
            },
            defaultParseWidth: "any"
          })
        },
        options: {
          weekStartsOn: 1,
          firstWeekContainsDate: 4
        }
      }
    },
    47296: (e, a, t) => {
      t.d(a, {
        F: () => m
      });
      let n = {
        lessThanXSeconds: {
          one: "menos de um segundo",
          other: "menos de {{count}} segundos"
        },
        xSeconds: {
          one: "1 segundo",
          other: "{{count}} segundos"
        },
        halfAMinute: "meio minuto",
        lessThanXMinutes: {
          one: "menos de um minuto",
          other: "menos de {{count}} minutos"
        },
        xMinutes: {
          one: "1 minuto",
          other: "{{count}} minutos"
        },
        aboutXHours: {
          one: "cerca de 1 hora",
          other: "cerca de {{count}} horas"
        },
        xHours: {
          one: "1 hora",
          other: "{{count}} horas"
        },
        xDays: {
          one: "1 dia",
          other: "{{count}} dias"
        },
        aboutXWeeks: {
          one: "cerca de 1 semana",
          other: "cerca de {{count}} semanas"
        },
        xWeeks: {
          one: "1 semana",
          other: "{{count}} semanas"
        },
        aboutXMonths: {
          one: "cerca de 1 m\xeas",
          other: "cerca de {{count}} meses"
        },
        xMonths: {
          one: "1 m\xeas",
          other: "{{count}} meses"
        },
        aboutXYears: {
          one: "cerca de 1 ano",
          other: "cerca de {{count}} anos"
        },
        xYears: {
          one: "1 ano",
          other: "{{count}} anos"
        },
        overXYears: {
          one: "mais de 1 ano",
          other: "mais de {{count}} anos"
        },
        almostXYears: {
          one: "quase 1 ano",
          other: "quase {{count}} anos"
        }
      };
      var i = t(81090);
      let r = {
          date: (0, i.k)({
            formats: {
              full: "EEEE, d 'de' MMMM 'de' y",
              long: "d 'de' MMMM 'de' y",
              medium: "d MMM y",
              short: "dd/MM/yyyy"
            },
            defaultWidth: "full"
          }),
          time: (0, i.k)({
            formats: {
              full: "HH:mm:ss zzzz",
              long: "HH:mm:ss z",
              medium: "HH:mm:ss",
              short: "HH:mm"
            },
            defaultWidth: "full"
          }),
          dateTime: (0, i.k)({
            formats: {
              full: "{{date}} '\xe0s' {{time}}",
              long: "{{date}} '\xe0s' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}"
            },
            defaultWidth: "full"
          })
        },
        o = {
          lastWeek: e => {
            let a = e.getDay();
            return "'" + (0 === a || 6 === a ? "\xfaltimo" : "\xfaltima") + "' eeee '\xe0s' p"
          },
          yesterday: "'ontem \xe0s' p",
          today: "'hoje \xe0s' p",
          tomorrow: "'amanh\xe3 \xe0s' p",
          nextWeek: "eeee '\xe0s' p",
          other: "P"
        };
      var d = t(47068);
      let s = {
        ordinalNumber: (e, a) => {
          let t = Number(e);
          return a?.unit === "week" ? t + "\xaa" : t + "\xba"
        },
        era: (0, d.o)({
          values: {
            narrow: ["AC", "DC"],
            abbreviated: ["AC", "DC"],
            wide: ["antes de cristo", "depois de cristo"]
          },
          defaultWidth: "wide"
        }),
        quarter: (0, d.o)({
          values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["T1", "T2", "T3", "T4"],
            wide: ["1\xba trimestre", "2\xba trimestre", "3\xba trimestre", "4\xba trimestre"]
          },
          defaultWidth: "wide",
          argumentCallback: e => e - 1
        }),
        month: (0, d.o)({
          values: {
            narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
            abbreviated: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
            wide: ["janeiro", "fevereiro", "mar\xe7o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
          },
          defaultWidth: "wide"
        }),
        day: (0, d.o)({
          values: {
            narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
            short: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"],
            abbreviated: ["domingo", "segunda", "ter\xe7a", "quarta", "quinta", "sexta", "s\xe1bado"],
            wide: ["domingo", "segunda-feira", "ter\xe7a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "s\xe1bado"]
          },
          defaultWidth: "wide"
        }),
        dayPeriod: (0, d.o)({
          values: {
            narrow: {
              am: "a",
              pm: "p",
              midnight: "mn",
              noon: "md",
              morning: "manh\xe3",
              afternoon: "tarde",
              evening: "tarde",
              night: "noite"
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "meia-noite",
              noon: "meio-dia",
              morning: "manh\xe3",
              afternoon: "tarde",
              evening: "tarde",
              night: "noite"
            },
            wide: {
              am: "a.m.",
              pm: "p.m.",
              midnight: "meia-noite",
              noon: "meio-dia",
              morning: "manh\xe3",
              afternoon: "tarde",
              evening: "tarde",
              night: "noite"
            }
          },
          defaultWidth: "wide",
          formattingValues: {
            narrow: {
              am: "a",
              pm: "p",
              midnight: "mn",
              noon: "md",
              morning: "da manh\xe3",
              afternoon: "da tarde",
              evening: "da tarde",
              night: "da noite"
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "meia-noite",
              noon: "meio-dia",
              morning: "da manh\xe3",
              afternoon: "da tarde",
              evening: "da tarde",
              night: "da noite"
            },
            wide: {
              am: "a.m.",
              pm: "p.m.",
              midnight: "meia-noite",
              noon: "meio-dia",
              morning: "da manh\xe3",
              afternoon: "da tarde",
              evening: "da tarde",
              night: "da noite"
            }
          },
          defaultFormattingWidth: "wide"
        })
      };
      var u = t(80134);
      let m = {
        code: "pt-BR",
        formatDistance: (e, a, t) => {
          let i, r = n[e];
          if (i = "string" == typeof r ? r : 1 === a ? r.one : r.other.replace("{{count}}", String(a)), t?.addSuffix)
            if (t.comparison && t.comparison > 0) return "em " + i;
            else return "h\xe1 " + i;
          return i
        },
        formatLong: r,
        formatRelative: (e, a, t, n) => {
          let i = o[e];
          return "function" == typeof i ? i(a) : i
        },
        localize: s,
        match: {
          ordinalNumber: (0, t(58662).K)({
            matchPattern: /^(\d+)[ºªo]?/i,
            parsePattern: /\d+/i,
            valueCallback: e => parseInt(e, 10)
          }),
          era: (0, u.A)({
            matchPatterns: {
              narrow: /^(ac|dc|a|d)/i,
              abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
              wide: /^(antes de cristo|depois de cristo)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/^ac/i, /^dc/i],
              wide: [/^antes de cristo/i, /^depois de cristo/i]
            },
            defaultParseWidth: "any"
          }),
          quarter: (0, u.A)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^T[1234]/i,
              wide: /^[1234](º)? trimestre/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/1/i, /2/i, /3/i, /4/i]
            },
            defaultParseWidth: "any",
            valueCallback: e => e + 1
          }),
          month: (0, u.A)({
            matchPatterns: {
              narrow: /^[jfmajsond]/i,
              abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
              wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
              any: [/^ja/i, /^fev/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dez/i]
            },
            defaultParseWidth: "any"
          }),
          day: (0, u.A)({
            matchPatterns: {
              narrow: /^(dom|[23456]ª?|s[aá]b)/i,
              short: /^(dom|[23456]ª?|s[aá]b)/i,
              abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
              wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
              narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
              any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
            },
            defaultParseWidth: "any"
          }),
          dayPeriod: (0, u.A)({
            matchPatterns: {
              narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
              any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^mn|^meia[-\s]noite/i,
                noon: /^md|^meio[-\s]dia/i,
                morning: /manhã/i,
                afternoon: /tarde/i,
                evening: /tarde/i,
                night: /noite/i
              }
            },
            defaultParseWidth: "any"
          })
        },
        options: {
          weekStartsOn: 0,
          firstWeekContainsDate: 1
        }
      }
    },
    65663: (e, a, t) => {
      t.d(a, {
        ar: () => l
      });
      let n = {
        lessThanXSeconds: {
          one: "أقل من ثانية",
          two: "أقل من ثانيتين",
          threeToTen: "أقل من {{count}} ثواني",
          other: "أقل من {{count}} ثانية"
        },
        xSeconds: {
          one: "ثانية واحدة",
          two: "ثانيتان",
          threeToTen: "{{count}} ثواني",
          other: "{{count}} ثانية"
        },
        halfAMinute: "نصف دقيقة",
        lessThanXMinutes: {
          one: "أقل من دقيقة",
          two: "أقل من دقيقتين",
          threeToTen: "أقل من {{count}} دقائق",
          other: "أقل من {{count}} دقيقة"
        },
        xMinutes: {
          one: "دقيقة واحدة",
          two: "دقيقتان",
          threeToTen: "{{count}} دقائق",
          other: "{{count}} دقيقة"
        },
        aboutXHours: {
          one: "ساعة واحدة تقريباً",
          two: "ساعتين تقريبا",
          threeToTen: "{{count}} ساعات تقريباً",
          other: "{{count}} ساعة تقريباً"
        },
        xHours: {
          one: "ساعة واحدة",
          two: "ساعتان",
          threeToTen: "{{count}} ساعات",
          other: "{{count}} ساعة"
        },
        xDays: {
          one: "يوم واحد",
          two: "يومان",
          threeToTen: "{{count}} أيام",
          other: "{{count}} يوم"
        },
        aboutXWeeks: {
          one: "أسبوع واحد تقريبا",
          two: "أسبوعين تقريبا",
          threeToTen: "{{count}} أسابيع تقريبا",
          other: "{{count}} أسبوعا تقريبا"
        },
        xWeeks: {
          one: "أسبوع واحد",
          two: "أسبوعان",
          threeToTen: "{{count}} أسابيع",
          other: "{{count}} أسبوعا"
        },
        aboutXMonths: {
          one: "شهر واحد تقريباً",
          two: "شهرين تقريبا",
          threeToTen: "{{count}} أشهر تقريبا",
          other: "{{count}} شهرا تقريباً"
        },
        xMonths: {
          one: "شهر واحد",
          two: "شهران",
          threeToTen: "{{count}} أشهر",
          other: "{{count}} شهرا"
        },
        aboutXYears: {
          one: "سنة واحدة تقريباً",
          two: "سنتين تقريبا",
          threeToTen: "{{count}} سنوات تقريباً",
          other: "{{count}} سنة تقريباً"
        },
        xYears: {
          one: "سنة واحد",
          two: "سنتان",
          threeToTen: "{{count}} سنوات",
          other: "{{count}} سنة"
        },
        overXYears: {
          one: "أكثر من سنة",
          two: "أكثر من سنتين",
          threeToTen: "أكثر من {{count}} سنوات",
          other: "أكثر من {{count}} سنة"
        },
        almostXYears: {
          one: "ما يقارب سنة واحدة",
          two: "ما يقارب سنتين",
          threeToTen: "ما يقارب {{count}} سنوات",
          other: "ما يقارب {{count}} سنة"
        }
      };
      var i = t(81090);
      let r = {
          date: (0, i.k)({
            formats: {
              full: "EEEE، do MMMM y",
              long: "do MMMM y",
              medium: "d MMM y",
              short: "dd/MM/yyyy"
            },
            defaultWidth: "full"
          }),
          time: (0, i.k)({
            formats: {
              full: "HH:mm:ss",
              long: "HH:mm:ss",
              medium: "HH:mm:ss",
              short: "HH:mm"
            },
            defaultWidth: "full"
          }),
          dateTime: (0, i.k)({
            formats: {
              full: "{{date}} 'عند الساعة' {{time}}",
              long: "{{date}} 'عند الساعة' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}"
            },
            defaultWidth: "full"
          })
        },
        o = {
          lastWeek: "eeee 'الماضي عند الساعة' p",
          yesterday: "'الأمس عند الساعة' p",
          today: "'اليوم عند الساعة' p",
          tomorrow: "'غدا عند الساعة' p",
          nextWeek: "eeee 'القادم عند الساعة' p",
          other: "P"
        };
      var d = t(47068);
      let s = {
        ordinalNumber: e => String(e),
        era: (0, d.o)({
          values: {
            narrow: ["ق", "ب"],
            abbreviated: ["ق.م.", "ب.م."],
            wide: ["قبل الميلاد", "بعد الميلاد"]
          },
          defaultWidth: "wide"
        }),
        quarter: (0, d.o)({
          values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["ر1", "ر2", "ر3", "ر4"],
            wide: ["الربع الأول", "الربع الثاني", "الربع الثالث", "الربع الرابع"]
          },
          defaultWidth: "wide",
          argumentCallback: e => e - 1
        }),
        month: (0, d.o)({
          values: {
            narrow: ["ي", "ف", "م", "أ", "م", "ي", "ي", "أ", "س", "أ", "ن", "د"],
            abbreviated: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            wide: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
          },
          defaultWidth: "wide"
        }),
        day: (0, d.o)({
          values: {
            narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            short: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
            abbreviated: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
            wide: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
          },
          defaultWidth: "wide"
        }),
        dayPeriod: (0, d.o)({
          values: {
            narrow: {
              am: "ص",
              pm: "م",
              morning: "الصباح",
              noon: "الظهر",
              afternoon: "بعد الظهر",
              evening: "المساء",
              night: "الليل",
              midnight: "منتصف الليل"
            },
            abbreviated: {
              am: "ص",
              pm: "م",
              morning: "الصباح",
              noon: "الظهر",
              afternoon: "بعد الظهر",
              evening: "المساء",
              night: "الليل",
              midnight: "منتصف الليل"
            },
            wide: {
              am: "ص",
              pm: "م",
              morning: "الصباح",
              noon: "الظهر",
              afternoon: "بعد الظهر",
              evening: "المساء",
              night: "الليل",
              midnight: "منتصف الليل"
            }
          },
          defaultWidth: "wide",
          formattingValues: {
            narrow: {
              am: "ص",
              pm: "م",
              morning: "في الصباح",
              noon: "الظهر",
              afternoon: "بعد الظهر",
              evening: "في المساء",
              night: "في الليل",
              midnight: "منتصف الليل"
            },
            abbreviated: {
              am: "ص",
              pm: "م",
              morning: "في الصباح",
              noon: "الظهر",
              afternoon: "بعد الظهر",
              evening: "في المساء",
              night: "في الليل",
              midnight: "منتصف الليل"
            },
            wide: {
              am: "ص",
              pm: "م",
              morning: "في الصباح",
              noon: "الظهر",
              afternoon: "بعد الظهر",
              evening: "في المساء",
              night: "في الليل",
              midnight: "منتصف الليل"
            }
          },
          defaultFormattingWidth: "wide"
        })
      };
      var u = t(58662),
        m = t(80134);
      let l = {
        code: "ar",
        formatDistance: (e, a, t) => {
          let i, r = n[e];
          if (i = "string" == typeof r ? r : 1 === a ? r.one : 2 === a ? r.two : a <= 10 ? r.threeToTen.replace("{{count}}", String(a)) : r.other.replace("{{count}}", String(a)), t?.addSuffix)
            if (t.comparison && t.comparison > 0) return "خلال " + i;
            else return "منذ " + i;
          return i
        },
        formatLong: r,
        formatRelative: e => o[e],
        localize: s,
        match: {
          ordinalNumber: (0, u.K)({
            matchPattern: /^(\d+)(th|st|nd|rd)?/i,
            parsePattern: /\d+/i,
            valueCallback: e => parseInt(e, 10)
          }),
          era: (0, m.A)({
            matchPatterns: {
              narrow: /[قب]/,
              abbreviated: /[قب]\.م\./,
              wide: /(قبل|بعد) الميلاد/
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/قبل/, /بعد/]
            },
            defaultParseWidth: "any"
          }),
          quarter: (0, m.A)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /ر[1234]/,
              wide: /الربع (الأول|الثاني|الثالث|الرابع)/
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/1/i, /2/i, /3/i, /4/i]
            },
            defaultParseWidth: "any",
            valueCallback: e => e + 1
          }),
          month: (0, m.A)({
            matchPatterns: {
              narrow: /^[أيفمسند]/,
              abbreviated: /^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/,
              wide: /^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^ي/i, /^ف/i, /^م/i, /^أ/i, /^م/i, /^ي/i, /^ي/i, /^أ/i, /^س/i, /^أ/i, /^ن/i, /^د/i],
              any: [/^يناير/i, /^فبراير/i, /^مارس/i, /^أبريل/i, /^مايو/i, /^يونيو/i, /^يوليو/i, /^أغسطس/i, /^سبتمبر/i, /^أكتوبر/i, /^نوفمبر/i, /^ديسمبر/i]
            },
            defaultParseWidth: "any"
          }),
          day: (0, m.A)({
            matchPatterns: {
              narrow: /^[حنثرخجس]/i,
              short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
              abbreviated: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
              wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i],
              wide: [/^الأحد/i, /^الاثنين/i, /^الثلاثاء/i, /^الأربعاء/i, /^الخميس/i, /^الجمعة/i, /^السبت/i],
              any: [/^أح/i, /^اث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i]
            },
            defaultParseWidth: "any"
          }),
          dayPeriod: (0, m.A)({
            matchPatterns: {
              narrow: /^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/,
              any: /^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^ص/,
                pm: /^م/,
                midnight: /منتصف الليل/,
                noon: /الظهر/,
                afternoon: /بعد الظهر/,
                morning: /في الصباح/,
                evening: /في المساء/,
                night: /في الليل/
              }
            },
            defaultParseWidth: "any"
          })
        },
        options: {
          weekStartsOn: 6,
          firstWeekContainsDate: 1
        }
      }
    },
    69756: (e, a, t) => {
      function n(e, a) {
        if (void 0 !== e.one && 1 === a) return e.one;
        let t = a % 10,
          n = a % 100;
        return 1 === t && 11 !== n ? e.singularNominative.replace("{{count}}", String(a)) : t >= 2 && t <= 4 && (n < 10 || n > 20) ? e.singularGenitive.replace("{{count}}", String(a)) : e.pluralGenitive.replace("{{count}}", String(a))
      }

      function i(e) {
        return (a, t) => {
          if (!t?.addSuffix) return n(e.regular, a);
          if (t.comparison && t.comparison > 0)
            if (e.future) return n(e.future, a);
            else return "через " + n(e.regular, a);
          return e.past ? n(e.past, a) : n(e.regular, a) + " назад"
        }
      }
      t.d(a, {
        ru: () => p
      });
      let r = {
        lessThanXSeconds: i({
          regular: {
            one: "меньше секунды",
            singularNominative: "меньше {{count}} секунды",
            singularGenitive: "меньше {{count}} секунд",
            pluralGenitive: "меньше {{count}} секунд"
          },
          future: {
            one: "меньше, чем через секунду",
            singularNominative: "меньше, чем через {{count}} секунду",
            singularGenitive: "меньше, чем через {{count}} секунды",
            pluralGenitive: "меньше, чем через {{count}} секунд"
          }
        }),
        xSeconds: i({
          regular: {
            singularNominative: "{{count}} секунда",
            singularGenitive: "{{count}} секунды",
            pluralGenitive: "{{count}} секунд"
          },
          past: {
            singularNominative: "{{count}} секунду назад",
            singularGenitive: "{{count}} секунды назад",
            pluralGenitive: "{{count}} секунд назад"
          },
          future: {
            singularNominative: "через {{count}} секунду",
            singularGenitive: "через {{count}} секунды",
            pluralGenitive: "через {{count}} секунд"
          }
        }),
        halfAMinute: (e, a) => {
          if (a?.addSuffix)
            if (a.comparison && a.comparison > 0) return "через полминуты";
            else return "полминуты назад";
          return "полминуты"
        },
        lessThanXMinutes: i({
          regular: {
            one: "меньше минуты",
            singularNominative: "меньше {{count}} минуты",
            singularGenitive: "меньше {{count}} минут",
            pluralGenitive: "меньше {{count}} минут"
          },
          future: {
            one: "меньше, чем через минуту",
            singularNominative: "меньше, чем через {{count}} минуту",
            singularGenitive: "меньше, чем через {{count}} минуты",
            pluralGenitive: "меньше, чем через {{count}} минут"
          }
        }),
        xMinutes: i({
          regular: {
            singularNominative: "{{count}} минута",
            singularGenitive: "{{count}} минуты",
            pluralGenitive: "{{count}} минут"
          },
          past: {
            singularNominative: "{{count}} минуту назад",
            singularGenitive: "{{count}} минуты назад",
            pluralGenitive: "{{count}} минут назад"
          },
          future: {
            singularNominative: "через {{count}} минуту",
            singularGenitive: "через {{count}} минуты",
            pluralGenitive: "через {{count}} минут"
          }
        }),
        aboutXHours: i({
          regular: {
            singularNominative: "около {{count}} часа",
            singularGenitive: "около {{count}} часов",
            pluralGenitive: "около {{count}} часов"
          },
          future: {
            singularNominative: "приблизительно через {{count}} час",
            singularGenitive: "приблизительно через {{count}} часа",
            pluralGenitive: "приблизительно через {{count}} часов"
          }
        }),
        xHours: i({
          regular: {
            singularNominative: "{{count}} час",
            singularGenitive: "{{count}} часа",
            pluralGenitive: "{{count}} часов"
          }
        }),
        xDays: i({
          regular: {
            singularNominative: "{{count}} день",
            singularGenitive: "{{count}} дня",
            pluralGenitive: "{{count}} дней"
          }
        }),
        aboutXWeeks: i({
          regular: {
            singularNominative: "около {{count}} недели",
            singularGenitive: "около {{count}} недель",
            pluralGenitive: "около {{count}} недель"
          },
          future: {
            singularNominative: "приблизительно через {{count}} неделю",
            singularGenitive: "приблизительно через {{count}} недели",
            pluralGenitive: "приблизительно через {{count}} недель"
          }
        }),
        xWeeks: i({
          regular: {
            singularNominative: "{{count}} неделя",
            singularGenitive: "{{count}} недели",
            pluralGenitive: "{{count}} недель"
          }
        }),
        aboutXMonths: i({
          regular: {
            singularNominative: "около {{count}} месяца",
            singularGenitive: "около {{count}} месяцев",
            pluralGenitive: "около {{count}} месяцев"
          },
          future: {
            singularNominative: "приблизительно через {{count}} месяц",
            singularGenitive: "приблизительно через {{count}} месяца",
            pluralGenitive: "приблизительно через {{count}} месяцев"
          }
        }),
        xMonths: i({
          regular: {
            singularNominative: "{{count}} месяц",
            singularGenitive: "{{count}} месяца",
            pluralGenitive: "{{count}} месяцев"
          }
        }),
        aboutXYears: i({
          regular: {
            singularNominative: "около {{count}} года",
            singularGenitive: "около {{count}} лет",
            pluralGenitive: "около {{count}} лет"
          },
          future: {
            singularNominative: "приблизительно через {{count}} год",
            singularGenitive: "приблизительно через {{count}} года",
            pluralGenitive: "приблизительно через {{count}} лет"
          }
        }),
        xYears: i({
          regular: {
            singularNominative: "{{count}} год",
            singularGenitive: "{{count}} года",
            pluralGenitive: "{{count}} лет"
          }
        }),
        overXYears: i({
          regular: {
            singularNominative: "больше {{count}} года",
            singularGenitive: "больше {{count}} лет",
            pluralGenitive: "больше {{count}} лет"
          },
          future: {
            singularNominative: "больше, чем через {{count}} год",
            singularGenitive: "больше, чем через {{count}} года",
            pluralGenitive: "больше, чем через {{count}} лет"
          }
        }),
        almostXYears: i({
          regular: {
            singularNominative: "почти {{count}} год",
            singularGenitive: "почти {{count}} года",
            pluralGenitive: "почти {{count}} лет"
          },
          future: {
            singularNominative: "почти через {{count}} год",
            singularGenitive: "почти через {{count}} года",
            pluralGenitive: "почти через {{count}} лет"
          }
        })
      };
      var o = t(81090);
      let d = {
        date: (0, o.k)({
          formats: {
            full: "EEEE, d MMMM y 'г.'",
            long: "d MMMM y 'г.'",
            medium: "d MMM y 'г.'",
            short: "dd.MM.y"
          },
          defaultWidth: "full"
        }),
        time: (0, o.k)({
          formats: {
            full: "H:mm:ss zzzz",
            long: "H:mm:ss z",
            medium: "H:mm:ss",
            short: "H:mm"
          },
          defaultWidth: "full"
        }),
        dateTime: (0, o.k)({
          formats: {
            any: "{{date}}, {{time}}"
          },
          defaultWidth: "any"
        })
      };
      var s = t(55630),
        u = t(9689);

      function m(e, a) {
        let t = (0, u.q)(),
          n = a?.weekStartsOn ?? a?.locale?.options?.weekStartsOn ?? t.weekStartsOn ?? t.locale?.options?.weekStartsOn ?? 0,
          i = (0, s.a)(e),
          r = i.getDay();
        return i.setDate(i.getDate() - (7 * (r < n) + r - n)), i.setHours(0, 0, 0, 0), i
      }

      function l(e, a, t) {
        return +m(e, t) == +m(a, t)
      }
      let h = ["воскресенье", "понедельник", "вторник", "среду", "четверг", "пятницу", "субботу"];

      function c(e) {
        let a = h[e];
        return 2 === e ? "'во " + a + " в' p" : "'в " + a + " в' p"
      }
      let g = {
        lastWeek: (e, a, t) => {
          let n = e.getDay();
          if (l(e, a, t)) return c(n);
          let i = h[n];
          switch (n) {
            case 0:
              return "'в прошлое " + i + " в' p";
            case 1:
            case 2:
            case 4:
              return "'в прошлый " + i + " в' p";
            case 3:
            case 5:
            case 6:
              return "'в прошлую " + i + " в' p"
          }
        },
        yesterday: "'вчера в' p",
        today: "'сегодня в' p",
        tomorrow: "'завтра в' p",
        nextWeek: (e, a, t) => {
          let n = e.getDay();
          if (l(e, a, t)) return c(n);
          let i = h[n];
          switch (n) {
            case 0:
              return "'в следующее " + i + " в' p";
            case 1:
            case 2:
            case 4:
              return "'в следующий " + i + " в' p";
            case 3:
            case 5:
            case 6:
              return "'в следующую " + i + " в' p"
          }
        },
        other: "P"
      };
      var f = t(47068);
      let v = {
        ordinalNumber: (e, a) => {
          let t = Number(e),
            n = a?.unit;
          return t + ("date" === n ? "-е" : "week" === n || "minute" === n || "second" === n ? "-я" : "-й")
        },
        era: (0, f.o)({
          values: {
            narrow: ["до н.э.", "н.э."],
            abbreviated: ["до н. э.", "н. э."],
            wide: ["до нашей эры", "нашей эры"]
          },
          defaultWidth: "wide"
        }),
        quarter: (0, f.o)({
          values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."],
            wide: ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"]
          },
          defaultWidth: "wide",
          argumentCallback: e => e - 1
        }),
        month: (0, f.o)({
          values: {
            narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
            abbreviated: ["янв.", "фев.", "март", "апр.", "май", "июнь", "июль", "авг.", "сент.", "окт.", "нояб.", "дек."],
            wide: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]
          },
          defaultWidth: "wide",
          formattingValues: {
            narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
            abbreviated: ["янв.", "фев.", "мар.", "апр.", "мая", "июн.", "июл.", "авг.", "сент.", "окт.", "нояб.", "дек."],
            wide: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
          },
          defaultFormattingWidth: "wide"
        }),
        day: (0, f.o)({
          values: {
            narrow: ["В", "П", "В", "С", "Ч", "П", "С"],
            short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
            abbreviated: ["вск", "пнд", "втр", "срд", "чтв", "птн", "суб"],
            wide: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
          },
          defaultWidth: "wide"
        }),
        dayPeriod: (0, f.o)({
          values: {
            narrow: {
              am: "ДП",
              pm: "ПП",
              midnight: "полн.",
              noon: "полд.",
              morning: "утро",
              afternoon: "день",
              evening: "веч.",
              night: "ночь"
            },
            abbreviated: {
              am: "ДП",
              pm: "ПП",
              midnight: "полн.",
              noon: "полд.",
              morning: "утро",
              afternoon: "день",
              evening: "веч.",
              night: "ночь"
            },
            wide: {
              am: "ДП",
              pm: "ПП",
              midnight: "полночь",
              noon: "полдень",
              morning: "утро",
              afternoon: "день",
              evening: "вечер",
              night: "ночь"
            }
          },
          defaultWidth: "any",
          formattingValues: {
            narrow: {
              am: "ДП",
              pm: "ПП",
              midnight: "полн.",
              noon: "полд.",
              morning: "утра",
              afternoon: "дня",
              evening: "веч.",
              night: "ночи"
            },
            abbreviated: {
              am: "ДП",
              pm: "ПП",
              midnight: "полн.",
              noon: "полд.",
              morning: "утра",
              afternoon: "дня",
              evening: "веч.",
              night: "ночи"
            },
            wide: {
              am: "ДП",
              pm: "ПП",
              midnight: "полночь",
              noon: "полдень",
              morning: "утра",
              afternoon: "дня",
              evening: "вечера",
              night: "ночи"
            }
          },
          defaultFormattingWidth: "wide"
        })
      };
      var w = t(80134);
      let p = {
        code: "ru",
        formatDistance: (e, a, t) => r[e](a, t),
        formatLong: d,
        formatRelative: (e, a, t, n) => {
          let i = g[e];
          return "function" == typeof i ? i(a, t, n) : i
        },
        localize: v,
        match: {
          ordinalNumber: (0, t(58662).K)({
            matchPattern: /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i,
            parsePattern: /\d+/i,
            valueCallback: e => parseInt(e, 10)
          }),
          era: (0, w.A)({
            matchPatterns: {
              narrow: /^((до )?н\.?\s?э\.?)/i,
              abbreviated: /^((до )?н\.?\s?э\.?)/i,
              wide: /^(до нашей эры|нашей эры|наша эра)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/^д/i, /^н/i]
            },
            defaultParseWidth: "any"
          }),
          quarter: (0, w.A)({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i,
              wide: /^[1234](-?[ыои]?й?)? квартал/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/1/i, /2/i, /3/i, /4/i]
            },
            defaultParseWidth: "any",
            valueCallback: e => e + 1
          }),
          month: (0, w.A)({
            matchPatterns: {
              narrow: /^[яфмаисонд]/i,
              abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,
              wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^я/i, /^ф/i, /^м/i, /^а/i, /^м/i, /^и/i, /^и/i, /^а/i, /^с/i, /^о/i, /^н/i, /^я/i],
              any: [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^ав/i, /^с/i, /^о/i, /^н/i, /^д/i]
            },
            defaultParseWidth: "any"
          }),
          day: (0, w.A)({
            matchPatterns: {
              narrow: /^[впсч]/i,
              short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,
              abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,
              wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^в/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
              any: [/^в[ос]/i, /^п[он]/i, /^в/i, /^ср/i, /^ч/i, /^п[ят]/i, /^с[уб]/i]
            },
            defaultParseWidth: "any"
          }),
          dayPeriod: (0, w.A)({
            matchPatterns: {
              narrow: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
              abbreviated: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
              wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: {
                am: /^дп/i,
                pm: /^пп/i,
                midnight: /^полн/i,
                noon: /^полд/i,
                morning: /^у/i,
                afternoon: /^д[ен]/i,
                evening: /^в/i,
                night: /^н/i
              }
            },
            defaultParseWidth: "any"
          })
        },
        options: {
          weekStartsOn: 1,
          firstWeekContainsDate: 1
        }
      }
    }
  }
]);