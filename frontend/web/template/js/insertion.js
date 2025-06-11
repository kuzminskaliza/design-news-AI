!function () {
    "use strict";

    function e() {
        return e = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        }, e.apply(this, arguments)
    }

    window.adthriveCLS.buildDate = "2025-06-03";
    const t = {
            AdDensity: "addensity",
            AdLayout: "adlayout",
            Interstitial: "interstitial",
            StickyOutstream: "stickyoutstream"
        }, i = "Below_Post", n = "Content", s = "Recipe", o = "Footer", r = "Header", a = "Sidebar", l = "desktop",
        c = "mobile", d = "Video_Collapse_Autoplay_SoundOff", h = "Video_Individual_Autoplay_SOff",
        u = "Video_Coll_SOff_Smartphone", p = "Video_In-Post_ClicktoPlay_SoundOn", m = e => {
            const t = {};
            return function (...i) {
                const n = JSON.stringify(i);
                if (t[n]) return t[n];
                const s = e.apply(this, i);
                return t[n] = s, s
            }
        }, g = navigator.userAgent, y = m((e => /Chrom|Applechromium/.test(e || g))), _ = m((() => /WebKit/.test(g))),
        f = m((() => y() ? "chromium" : _() ? "webkit" : "other"));
    const v = new class {
        info(e, t, ...i) {
            this.call(console.info, e, t, ...i)
        }

        warn(e, t, ...i) {
            this.call(console.warn, e, t, ...i)
        }

        error(e, t, ...i) {
            this.call(console.error, e, t, ...i), this.sendErrorLogToCommandQueue(e, t, ...i)
        }

        event(e, t, ...i) {
            var n;
            "debug" === (null == (n = window.adthriveCLS) ? void 0 : n.bucket) && this.info(e, t)
        }

        sendErrorLogToCommandQueue(e, t, ...i) {
            window.adthrive = window.adthrive || {}, window.adthrive.cmd = window.adthrive.cmd || [], window.adthrive.cmd.push((() => {
                void 0 !== window.adthrive.logError && "function" == typeof window.adthrive.logError && window.adthrive.logError(e, t, i)
            }))
        }

        call(e, t, i, ...n) {
            const s = [`%c${t}::${i} `], o = ["color: #999; font-weight: bold;"];
            n.length > 0 && "string" == typeof n[0] && s.push(n.shift()), o.push(...n);
            try {
                Function.prototype.apply.call(e, console, [s.join(""), ...o])
            } catch (e) {
                return void console.error(e)
            }
        }
    }, b = (e, t) => null == e || e != e ? t : e, S = e => {
        const t = e.offsetHeight, i = e.offsetWidth, n = e.getBoundingClientRect(), s = document.body,
            o = document.documentElement, r = window.pageYOffset || o.scrollTop || s.scrollTop,
            a = window.pageXOffset || o.scrollLeft || s.scrollLeft, l = o.clientTop || s.clientTop || 0,
            c = o.clientLeft || s.clientLeft || 0, d = Math.round(n.top + r - l), h = Math.round(n.left + a - c);
        return {top: d, left: h, bottom: d + t, right: h + i, width: i, height: t}
    }, E = e => {
        let t = {};
        const i = ((e = window.location.search) => {
            const t = 0 === e.indexOf("?") ? 1 : 0;
            return e.slice(t).split("&").reduce(((e, t) => {
                const [i, n] = t.split("=");
                return e.set(i, n), e
            }), new Map)
        })().get(e);
        if (i) try {
            const n = decodeURIComponent(i).replace(/\+/g, "");
            t = JSON.parse(n), v.event("ExperimentOverridesUtil", "getExperimentOverrides", e, t)
        } catch (e) {
        }
        return t
    }, x = m(((e = navigator.userAgent) => /Windows NT|Macintosh/i.test(e))), A = m((() => {
        const e = navigator.userAgent,
            t = /Tablet|iPad|Playbook|Nook|webOS|Kindle|Android (?!.*Mobile).*Safari|CrOS/i.test(e);
        return /Mobi|iP(hone|od)|Opera Mini/i.test(e) && !t
    })), w = (e, t, i = document) => {
        const n = ((e = document) => {
            const t = e.querySelectorAll("article");
            if (0 === t.length) return null;
            const i = Array.from(t).reduce(((e, t) => t.offsetHeight > e.offsetHeight ? t : e));
            return i && i.offsetHeight > 1.5 * window.innerHeight ? i : null
        })(i), s = n ? [n] : [], o = [];
        e.forEach((e => {
            const n = Array.from(i.querySelectorAll(e.elementSelector)).slice(0, e.skip);
            var r;
            (r = e.elementSelector, r.includes(",") ? r.split(",") : [r]).forEach((r => {
                const a = i.querySelectorAll(r);
                for (let i = 0; i < a.length; i++) {
                    const r = a[i];
                    if (t.map.some((({el: e}) => e.isEqualNode(r)))) continue;
                    const l = r && r.parentElement;
                    l && l !== document.body ? s.push(l) : s.push(r), -1 === n.indexOf(r) && o.push({
                        dynamicAd: e,
                        element: r
                    })
                }
            }))
        }));
        const r = ((e = document) => (e === document ? document.body : e).getBoundingClientRect().top)(i),
            a = o.sort(((e, t) => e.element.getBoundingClientRect().top - r - (t.element.getBoundingClientRect().top - r)));
        return [s, a]
    };

    class C {
    }

    const D = ["mcmpfreqrec"];
    const k = new class extends C {
        init(e) {
            this._gdpr = "true" === e.gdpr, this._shouldQueue = this._gdpr
        }

        clearQueue(e) {
            e && (this._shouldQueue = !1, this._sessionStorageHandlerQueue.forEach((e => {
                this.setSessionStorage(e.key, e.value)
            })), this._localStorageHandlerQueue.forEach((e => {
                if ("adthrive_abgroup" === e.key) {
                    const t = Object.keys(e.value)[0], i = e.value[t], n = e.value[`${t}_weight`];
                    this.getOrSetABGroupLocalStorageValue(t, i, n, {value: 24, unit: "hours"})
                } else e.expiry ? "internal" === e.type ? this.setExpirableInternalLocalStorage(e.key, e.value, {
                    expiry: e.expiry,
                    resetOnRead: e.resetOnRead
                }) : this.setExpirableExternalLocalStorage(e.key, e.value, {
                    expiry: e.expiry,
                    resetOnRead: e.resetOnRead
                }) : "internal" === e.type ? this.setInternalLocalStorage(e.key, e.value) : this.setExternalLocalStorage(e.key, e.value)
            })), this._cookieHandlerQueue.forEach((e => {
                "internal" === e.type ? this.setInternalCookie(e.key, e.value) : this.setExternalCookie(e.key, e.value)
            }))), this._sessionStorageHandlerQueue = [], this._localStorageHandlerQueue = [], this._cookieHandlerQueue = []
        }

        readInternalCookie(e) {
            return this._verifyInternalKey(e), this._readCookie(e)
        }

        readExternalCookie(e) {
            return this._readCookie(e)
        }

        readInternalLocalStorage(e) {
            return this._verifyInternalKey(e), this._readFromLocalStorage(e)
        }

        readExternalLocalStorage(e) {
            return this._readFromLocalStorage(e)
        }

        readSessionStorage(e) {
            const t = window.sessionStorage.getItem(e);
            if (!t) return null;
            try {
                return JSON.parse(t)
            } catch (e) {
                return t
            }
        }

        deleteCookie(e) {
            document.cookie = `${e}=; SameSite=None; Secure; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`
        }

        deleteLocalStorage(e) {
            window.localStorage.removeItem(e)
        }

        deleteSessionStorage(e) {
            window.sessionStorage.removeItem(e)
        }

        setInternalCookie(e, t, i) {
            this._verifyInternalKey(e), this._setCookieValue("internal", e, t, i)
        }

        setExternalCookie(e, t, i) {
            this._setCookieValue("external", e, t, i)
        }

        setInternalLocalStorage(e, t) {
            if (this._verifyInternalKey(e), this._gdpr && this._shouldQueue) {
                const i = {key: e, value: t, type: "internal"};
                this._localStorageHandlerQueue.push(i)
            } else {
                const i = "string" == typeof t ? t : JSON.stringify(t);
                window.localStorage.setItem(e, i)
            }
        }

        setExternalLocalStorage(e, t) {
            if (this._gdpr && this._shouldQueue) {
                const i = {key: e, value: t, type: "external"};
                this._localStorageHandlerQueue.push(i)
            } else {
                const i = "string" == typeof t ? t : JSON.stringify(t);
                window.localStorage.setItem(e, i)
            }
        }

        setExpirableInternalLocalStorage(e, t, i) {
            this._verifyInternalKey(e);
            try {
                var n;
                const o = null != (n = null == i ? void 0 : i.expiry) ? n : {value: 400, unit: "days"};
                var s;
                const r = null != (s = null == i ? void 0 : i.resetOnRead) && s;
                if (this._gdpr && this._shouldQueue) {
                    const i = {
                        key: e,
                        value: t,
                        type: "internal",
                        expires: this._getExpiryDate(o),
                        expiry: o,
                        resetOnRead: r
                    };
                    this._localStorageHandlerQueue.push(i)
                } else {
                    const i = {value: t, type: "internal", expires: this._getExpiryDate(o), expiry: o, resetOnRead: r};
                    window.localStorage.setItem(e, JSON.stringify(i))
                }
            } catch (e) {
                console.error(e)
            }
        }

        setExpirableExternalLocalStorage(e, t, i) {
            try {
                var n;
                const o = null != (n = null == i ? void 0 : i.expiry) ? n : {value: 400, unit: "days"};
                var s;
                const r = null != (s = null == i ? void 0 : i.resetOnRead) && s;
                if (this._gdpr && this._shouldQueue) {
                    const i = {
                        key: e,
                        value: JSON.stringify(t),
                        type: "external",
                        expires: this._getExpiryDate(o),
                        expiry: o,
                        resetOnRead: r
                    };
                    this._localStorageHandlerQueue.push(i)
                } else {
                    const i = {value: t, type: "external", expires: this._getExpiryDate(o), expiry: o, resetOnRead: r};
                    window.localStorage.setItem(e, JSON.stringify(i))
                }
            } catch (e) {
                console.error(e)
            }
        }

        setSessionStorage(e, t) {
            if (this._gdpr && this._shouldQueue) {
                const i = {key: e, value: t};
                this._sessionStorageHandlerQueue.push(i)
            } else {
                const i = "string" == typeof t ? t : JSON.stringify(t);
                window.sessionStorage.setItem(e, i)
            }
        }

        getOrSetABGroupLocalStorageValue(t, i, n, s, o = !0) {
            const r = "adthrive_abgroup", a = this.readInternalLocalStorage(r);
            if (null !== a) {
                const e = a[t];
                var l;
                const i = null != (l = a[`${t}_weight`]) ? l : null;
                if (this._isValidABGroupLocalStorageValue(e)) return [e, i]
            }
            const c = e({}, a, {[t]: i, [`${t}_weight`]: n});
            return s ? this.setExpirableInternalLocalStorage(r, c, {
                expiry: s,
                resetOnRead: o
            }) : this.setInternalLocalStorage(r, c), [i, n]
        }

        _isValidABGroupLocalStorageValue(e) {
            return null != e && !("number" == typeof e && isNaN(e))
        }

        _getExpiryDate({value: e, unit: t}) {
            const i = new Date;
            return "milliseconds" === t ? i.setTime(i.getTime() + e) : "seconds" == t ? i.setTime(i.getTime() + 1e3 * e) : "minutes" === t ? i.setTime(i.getTime() + 60 * e * 1e3) : "hours" === t ? i.setTime(i.getTime() + 60 * e * 60 * 1e3) : "days" === t ? i.setTime(i.getTime() + 24 * e * 60 * 60 * 1e3) : "months" === t && i.setTime(i.getTime() + 30 * e * 24 * 60 * 60 * 1e3), i.toUTCString()
        }

        _resetExpiry(e) {
            return e.expires = this._getExpiryDate(e.expiry), e
        }

        _readCookie(e) {
            const t = document.cookie.split("; ").find((t => t.split("=")[0] === e));
            if (!t) return null;
            const i = t.split("=")[1];
            if (i) try {
                return JSON.parse(decodeURIComponent(i))
            } catch (e) {
                return decodeURIComponent(i)
            }
            return null
        }

        _readFromLocalStorage(e) {
            const t = window.localStorage.getItem(e);
            if (!t) return null;
            try {
                const n = JSON.parse(t), s = n.expires && (new Date).getTime() >= new Date(n.expires).getTime();
                if ("adthrive_abgroup" === e && n.created) return window.localStorage.removeItem(e), null;
                if (n.resetOnRead && n.expires && !s) {
                    const t = this._resetExpiry(n);
                    var i;
                    return window.localStorage.setItem(e, JSON.stringify(n)), null != (i = t.value) ? i : t
                }
                if (s) return window.localStorage.removeItem(e), null;
                if (!n.hasOwnProperty("value")) return n;
                try {
                    return JSON.parse(n.value)
                } catch (e) {
                    return n.value
                }
            } catch (e) {
                return t
            }
        }

        _setCookieValue(e, t, i, n) {
            try {
                if (this._gdpr && this._shouldQueue) {
                    const n = {key: t, value: i, type: e};
                    this._cookieHandlerQueue.push(n)
                } else {
                    var s;
                    const e = this._getExpiryDate(null != (s = null == n ? void 0 : n.expiry) ? s : {
                        value: 400,
                        unit: "days"
                    });
                    var o;
                    const a = null != (o = null == n ? void 0 : n.sameSite) ? o : "None";
                    var r;
                    const l = null == (r = null == n ? void 0 : n.secure) || r,
                        c = "object" == typeof i ? JSON.stringify(i) : i;
                    document.cookie = `${t}=${c}; SameSite=${a}; ${l ? "Secure;" : ""} expires=${e}; path=/`
                }
            } catch (e) {
            }
        }

        _verifyInternalKey(e) {
            const t = e.startsWith("adthrive_"), i = e.startsWith("adt_");
            if (!t && !i && !D.includes(e)) throw new Error('When reading an internal cookie, the key must start with "adthrive_" or "adt_" or be part of the allowed legacy keys.')
        }

        constructor(...e) {
            super(...e), this.name = "BrowserStorage", this.disable = !1, this.gdprPurposes = [1], this._sessionStorageHandlerQueue = [], this._localStorageHandlerQueue = [], this._cookieHandlerQueue = [], this._shouldQueue = !1
        }
    }, P = (e, i, n) => {
        switch (i) {
            case t.AdDensity:
                return ((e, t) => {
                    const i = e.adDensityEnabled,
                        n = e.adDensityLayout.pageOverrides.find((e => !!document.querySelector(e.pageSelector) && (e[t].onePerViewport || "number" == typeof e[t].adDensity)));
                    return !i || !n
                })(e, n);
            case t.StickyOutstream:
                return (e => {
                    var t, i, n;
                    const s = null == (n = e.videoPlayers) || null == (i = n.partners) || null == (t = i.stickyOutstream) ? void 0 : t.blockedPageSelectors;
                    return !s || !document.querySelector(s)
                })(e);
            case t.Interstitial:
                return (e => {
                    const t = e.adOptions.interstitialBlockedPageSelectors;
                    return !t || !document.querySelector(t)
                })(e);
            default:
                return !0
        }
    }, O = t => {
        try {
            return {valid: !0, elements: document.querySelectorAll(t)}
        } catch (t) {
            return e({valid: !1}, t)
        }
    }, I = e => "" === e ? {valid: !0} : O(e), M = (e, t) => {
        if (!e) return !1;
        const i = !!e.enabled, n = null == e.dateStart || Date.now() >= e.dateStart,
            s = null == e.dateEnd || Date.now() <= e.dateEnd,
            o = null === e.selector || "" !== e.selector && !!document.querySelector(e.selector),
            r = "mobile" === e.platform && "mobile" === t, a = "desktop" === e.platform && "desktop" === t,
            l = null === e.platform || "all" === e.platform || r || a,
            c = "bernoulliTrial" === e.experimentType ? 1 === e.variants.length : (e => {
                const t = e.reduce(((e, t) => t.weight ? t.weight + e : e), 0);
                return e.length > 0 && e.every((e => {
                    const t = e.value, i = e.weight;
                    return !(null == t || "number" == typeof t && isNaN(t) || !i)
                })) && 100 === t
            })(e.variants);
        return c || v.error("SiteTest", "validateSiteExperiment", "experiment presented invalid choices for key:", e.key, e.variants), i && n && s && o && l && c
    }, L = ["siteId", "siteName", "adOptions", "breakpoints", "adUnits"];

    class R {
        get enabled() {
            return !!this._clsGlobalData && !!this._clsGlobalData.siteAds && ((e, t = L) => {
                if (!e) return !1;
                for (let i = 0; i < t.length; i++) if (!e[t[i]]) return !1;
                return !0
            })(this._clsGlobalData.siteAds)
        }

        get error() {
            return !(!this._clsGlobalData || !this._clsGlobalData.error)
        }

        set siteAds(e) {
            this._clsGlobalData.siteAds = e
        }

        get siteAds() {
            return this._clsGlobalData.siteAds
        }

        set disableAds(e) {
            this._clsGlobalData.disableAds = e
        }

        get disableAds() {
            return this._clsGlobalData.disableAds
        }

        set enabledLocations(e) {
            this._clsGlobalData.enabledLocations = e
        }

        get enabledLocations() {
            return this._clsGlobalData.enabledLocations
        }

        get injectedFromPlugin() {
            return this._clsGlobalData.injectedFromPlugin
        }

        set injectedFromPlugin(e) {
            this._clsGlobalData.injectedFromPlugin = e
        }

        get injectedFromSiteAds() {
            return this._clsGlobalData.injectedFromSiteAds
        }

        set injectedFromSiteAds(e) {
            this._clsGlobalData.injectedFromSiteAds = e
        }

        overwriteInjectedSlots(e) {
            this._clsGlobalData.injectedSlots = e
        }

        setInjectedSlots(e) {
            this._clsGlobalData.injectedSlots = this._clsGlobalData.injectedSlots || [], this._clsGlobalData.injectedSlots.push(e)
        }

        get injectedSlots() {
            return this._clsGlobalData.injectedSlots
        }

        setInjectedVideoSlots(e) {
            this._clsGlobalData.injectedVideoSlots = this._clsGlobalData.injectedVideoSlots || [], this._clsGlobalData.injectedVideoSlots.push(e)
        }

        get injectedVideoSlots() {
            return this._clsGlobalData.injectedVideoSlots
        }

        setInjectedScripts(e) {
            this._clsGlobalData.injectedScripts = this._clsGlobalData.injectedScripts || [], this._clsGlobalData.injectedScripts.push(e)
        }

        get getInjectedScripts() {
            return this._clsGlobalData.injectedScripts
        }

        setExperiment(e, t, i = !1) {
            this._clsGlobalData.experiments = this._clsGlobalData.experiments || {}, this._clsGlobalData.siteExperiments = this._clsGlobalData.siteExperiments || {};
            (i ? this._clsGlobalData.siteExperiments : this._clsGlobalData.experiments)[e] = t
        }

        getExperiment(e, t = !1) {
            const i = t ? this._clsGlobalData.siteExperiments : this._clsGlobalData.experiments;
            return i && i[e]
        }

        setWeightedChoiceExperiment(e, t, i = !1) {
            this._clsGlobalData.experimentsWeightedChoice = this._clsGlobalData.experimentsWeightedChoice || {}, this._clsGlobalData.siteExperimentsWeightedChoice = this._clsGlobalData.siteExperimentsWeightedChoice || {};
            (i ? this._clsGlobalData.siteExperimentsWeightedChoice : this._clsGlobalData.experimentsWeightedChoice)[e] = t
        }

        getWeightedChoiceExperiment(e, t = !1) {
            var i, n;
            const s = t ? null == (i = this._clsGlobalData) ? void 0 : i.siteExperimentsWeightedChoice : null == (n = this._clsGlobalData) ? void 0 : n.experimentsWeightedChoice;
            return s && s[e]
        }

        get branch() {
            return this._clsGlobalData.branch
        }

        get bucket() {
            return this._clsGlobalData.bucket
        }

        set videoDisabledFromPlugin(e) {
            this._clsGlobalData.videoDisabledFromPlugin = e
        }

        get videoDisabledFromPlugin() {
            return this._clsGlobalData.videoDisabledFromPlugin
        }

        set targetDensityLog(e) {
            this._clsGlobalData.targetDensityLog = e
        }

        get targetDensityLog() {
            return this._clsGlobalData.targetDensityLog
        }

        get removeVideoTitleWrapper() {
            return this._clsGlobalData.siteAds.adOptions.removeVideoTitleWrapper
        }

        constructor() {
            this._clsGlobalData = window.adthriveCLS
        }
    }

    class T {
        static getScrollTop() {
            return (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0)
        }

        static getScrollBottom() {
            return this.getScrollTop() + (document.documentElement.clientHeight || 0)
        }

        static shufflePlaylist(e) {
            let t, i, n = e.length;
            for (; 0 !== n;) i = Math.floor(Math.random() * e.length), n -= 1, t = e[n], e[n] = e[i], e[i] = t;
            return e
        }

        static isMobileLandscape() {
            return window.matchMedia("(orientation: landscape) and (max-height: 480px)").matches
        }

        static playerViewable(e) {
            const t = e.getBoundingClientRect();
            return this.isMobileLandscape() ? window.innerHeight > t.top + t.height / 2 && t.top + t.height / 2 > 0 : window.innerHeight > t.top + t.height / 2
        }

        static createQueryString(e) {
            return Object.keys(e).map((t => `${t}=${e[t]}`)).join("&")
        }

        static createEncodedQueryString(e) {
            return Object.keys(e).map((t => `${t}=${encodeURIComponent(e[t])}`)).join("&")
        }

        static setMobileLocation(e) {
            return "top-left" === (e = e || "bottom-right") ? e = "adthrive-collapse-top-left" : "top-right" === e ? e = "adthrive-collapse-top-right" : "bottom-left" === e ? e = "adthrive-collapse-bottom-left" : "bottom-right" === e ? e = "adthrive-collapse-bottom-right" : "top-center" === e && (e = A() ? "adthrive-collapse-top-center" : "adthrive-collapse-bottom-right"), e
        }

        static addMaxResolutionQueryParam(e) {
            const t = `max_resolution=${A() ? "320" : "1280"}`, [i, n] = String(e).split("?");
            return `${i}?${n ? n + `&${t}` : t}`
        }
    }

    class j {
        constructor(e) {
            this._clsOptions = e, this.removeVideoTitleWrapper = b(this._clsOptions.siteAds.adOptions.removeVideoTitleWrapper, !1);
            const t = this._clsOptions.siteAds.videoPlayers;
            this.footerSelector = b(t && t.footerSelector, ""), this.players = b(t && t.players.map((e => (e.mobileLocation = T.setMobileLocation(e.mobileLocation), e))), []), this.relatedSettings = t && t.contextual
        }
    }

    class H {
        constructor(e) {
            this.mobileStickyPlayerOnPage = !1, this.playlistPlayerAdded = !1, this.relatedPlayerAdded = !1, this.footerSelector = "", this.removeVideoTitleWrapper = !1, this.videoAdOptions = new j(e), this.players = this.videoAdOptions.players, this.relatedSettings = this.videoAdOptions.relatedSettings, this.removeVideoTitleWrapper = this.videoAdOptions.removeVideoTitleWrapper, this.footerSelector = this.videoAdOptions.footerSelector
        }
    }

    class V {
    }

    class N extends V {
        get() {
            if (this._probability < 0 || this._probability > 1) throw new Error(`Invalid probability: ${this._probability}`);
            return Math.random() < this._probability
        }

        constructor(e) {
            super(), this._probability = e
        }
    }

    class G {
        setExperimentKey(e = !1) {
            this._clsOptions.setExperiment(this.abgroup, this.result, e)
        }

        constructor() {
            this._clsOptions = new R, this.shouldUseCoreExperimentsConfig = !1
        }
    }

    class B extends G {
        get result() {
            return this._result
        }

        run() {
            return new N(this.weight).get()
        }

        constructor(e) {
            super(), this._result = !1, this.key = "ParallaxAdsExperiment", this.abgroup = "parallax", this._choices = [{choice: !0}, {choice: !1}], this.weight = 0;
            !!A() && e.largeFormatsMobile && (this._result = this.run(), this.setExperimentKey())
        }
    }

    const W = [[728, 90], [300, 250], [300, 600], [320, 50], [970, 250], [160, 600], [300, 1050], [336, 280], [970, 90], [300, 50], [320, 100], [468, 60], [250, 250], [120, 240], [1, 1], [300, 300], [552, 334], [300, 420], [728, 250], [320, 300], [300, 390]],
        F = [[300, 600], [160, 600]],
        z = new Map([[o, 1], [r, 2], [a, 3], [n, 4], [s, 5], ["Sidebar_sticky", 6], ["Below Post", 7]]), q = (e, t) => {
            const {location: i, sticky: n} = e;
            if (i === s && t) {
                const {recipeMobile: e, recipeDesktop: i} = t;
                if (A() && (null == e ? void 0 : e.enabled)) return !0;
                if (!A() && (null == i ? void 0 : i.enabled)) return !0
            }
            return i === o || n
        }, U = (e, t) => {
            const i = t.adUnits, l = (e => !!e.adTypes && new B(e.adTypes).result)(t);
            return i.filter((e => void 0 !== e.dynamic && e.dynamic.enabled)).map((i => {
                const c = i.location.replace(/\s+/g, "_"), d = "Sidebar" === c ? 0 : 2;
                return {
                    auctionPriority: z.get(c) || 8,
                    location: c,
                    sequence: b(i.sequence, 1),
                    sizes: (h = i.adSizes, W.filter((([e, t]) => h.some((([i, n]) => e === i && t === n))))).filter((t => ((e, [t, i], n) => {
                        const {location: l, sequence: c} = e;
                        if (l === o) return !("phone" === n && 320 === t && 100 === i);
                        if (l === r) return !0;
                        if (l === s) return !(A() && "phone" === n && (300 === t && 390 === i || 320 === t && 300 === i));
                        if (l === a) {
                            const t = e.adSizes.some((([, e]) => e <= 300)), n = i > 300;
                            return !(!n || t) || 9 === c || (c && c <= 5 ? !n || e.sticky : !n)
                        }
                        return !0
                    })(i, t, e))).concat(l && i.location === n ? F : []),
                    devices: i.devices,
                    pageSelector: b(i.dynamic.pageSelector, "").trim(),
                    elementSelector: b(i.dynamic.elementSelector, "").trim(),
                    position: b(i.dynamic.position, "beforebegin"),
                    max: Math.floor(b(i.dynamic.max, 0)),
                    spacing: b(i.dynamic.spacing, 0),
                    skip: Math.floor(b(i.dynamic.skip, 0)),
                    every: Math.max(Math.floor(b(i.dynamic.every, 1)), 1),
                    classNames: i.dynamic.classNames || [],
                    sticky: q(i, t.adOptions.stickyContainerConfig),
                    stickyOverlapSelector: b(i.stickyOverlapSelector, "").trim(),
                    autosize: i.autosize,
                    special: b(i.targeting, []).filter((e => "special" === e.key)).reduce(((e, t) => e.concat(...t.value)), []),
                    lazy: b(i.dynamic.lazy, !1),
                    lazyMax: b(i.dynamic.lazyMax, d),
                    lazyMaxDefaulted: 0 !== i.dynamic.lazyMax && !i.dynamic.lazyMax,
                    name: i.name
                };
                var h
            }))
        }, Q = (e, t) => {
            const i = (e => {
                let t = e.clientWidth;
                if (getComputedStyle) {
                    const i = getComputedStyle(e, null);
                    t -= parseFloat(i.paddingLeft || "0") + parseFloat(i.paddingRight || "0")
                }
                return t
            })(t), n = e.sticky && e.location === a;
            return e.sizes.filter((t => {
                const s = !e.autosize || (t[0] <= i || t[0] <= 320), o = !n || t[1] <= window.innerHeight - 100;
                return s && o
            }))
        };

    class J {
        constructor(e) {
            this.clsOptions = e, this.enabledLocations = [i, n, s, a]
        }
    }

    const K = e => `adthrive-${e.location.replace("_", "-").toLowerCase()}`, Z = e => `${K(e)}-${e.sequence}`;

    function Y(e, t) {
        void 0 === t && (t = {});
        var i = t.insertAt;
        if (e && "undefined" != typeof document) {
            var n = document.head || document.getElementsByTagName("head")[0], s = document.createElement("style");
            s.type = "text/css", "top" === i && n.firstChild ? n.insertBefore(s, n.firstChild) : n.appendChild(s), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(document.createTextNode(e))
        }
    }

    const X = e => e.some((e => null !== document.querySelector(e)));

    function ee(e, t, i, n) {
        var s, o = arguments.length, r = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (r = (o < 3 ? s(r) : o > 3 ? s(t, i, r) : s(t, i)) || r);
        return o > 3 && r && Object.defineProperty(t, i, r), r
    }

    function te(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    }

    "function" == typeof SuppressedError && SuppressedError;

    class ie extends V {
        static fromArray(e, t) {
            return new ie(e.map((([e, t]) => ({choice: e, weight: t}))), t)
        }

        addChoice(e, t) {
            this._choices.push({choice: e, weight: t})
        }

        get() {
            const e = (t = 0, i = 100, Math.random() * (i - t) + t);
            var t, i;
            let n = 0;
            for (const {choice: t, weight: i} of this._choices) if (n += i, n >= e) return t;
            return this._default
        }

        get totalWeight() {
            return this._choices.reduce(((e, {weight: t}) => e + t), 0)
        }

        constructor(e = [], t) {
            super(), this._choices = e, this._default = t
        }
    }

    const ne = {
        "Europe/Brussels": "gdpr",
        "Europe/Sofia": "gdpr",
        "Europe/Prague": "gdpr",
        "Europe/Copenhagen": "gdpr",
        "Europe/Berlin": "gdpr",
        "Europe/Tallinn": "gdpr",
        "Europe/Dublin": "gdpr",
        "Europe/Athens": "gdpr",
        "Europe/Madrid": "gdpr",
        "Africa/Ceuta": "gdpr",
        "Europe/Paris": "gdpr",
        "Europe/Zagreb": "gdpr",
        "Europe/Rome": "gdpr",
        "Asia/Nicosia": "gdpr",
        "Europe/Nicosia": "gdpr",
        "Europe/Riga": "gdpr",
        "Europe/Vilnius": "gdpr",
        "Europe/Luxembourg": "gdpr",
        "Europe/Budapest": "gdpr",
        "Europe/Malta": "gdpr",
        "Europe/Amsterdam": "gdpr",
        "Europe/Vienna": "gdpr",
        "Europe/Warsaw": "gdpr",
        "Europe/Lisbon": "gdpr",
        "Atlantic/Madeira": "gdpr",
        "Europe/Bucharest": "gdpr",
        "Europe/Ljubljana": "gdpr",
        "Europe/Bratislava": "gdpr",
        "Europe/Helsinki": "gdpr",
        "Europe/Stockholm": "gdpr",
        "Europe/London": "gdpr",
        "Europe/Vaduz": "gdpr",
        "Atlantic/Reykjavik": "gdpr",
        "Europe/Oslo": "gdpr",
        "Europe/Istanbul": "gdpr",
        "Europe/Zurich": "gdpr"
    }, se = () => (e, i, n) => {
        const s = n.value;
        s && (n.value = function (...e) {
            const i = (e => {
                    if (null === e) return null;
                    const t = e.map((({choice: e}) => e));
                    return (e => {
                        let t = 5381, i = e.length;
                        for (; i;) t = 33 * t ^ e.charCodeAt(--i);
                        return t >>> 0
                    })(JSON.stringify(t)).toString(16)
                })(this._choices), n = this._expConfigABGroup ? this._expConfigABGroup : this.abgroup,
                o = n ? n.toLowerCase() : this.key ? this.key.toLowerCase() : "", r = i ? `${o}_${i}` : o,
                a = this.localStoragePrefix ? `${this.localStoragePrefix}-${r}` : r;
            if ([t.AdLayout, t.AdDensity].includes(o) && "gdpr" === (() => {
                const e = Intl.DateTimeFormat().resolvedOptions().timeZone, t = ne[e];
                return null != t ? t : null
            })()) {
                return s.apply(this, e)
            }
            const l = k.readInternalLocalStorage("adthrive_branch");
            !1 === (l && l.enabled) && k.deleteLocalStorage(a);
            const c = (() => s.apply(this, e))(),
                d = (h = this._choices, u = c, null != (m = null == (p = h.find((({choice: e}) => e === u))) ? void 0 : p.weight) ? m : null);
            var h, u, p, m;
            const [g, y] = k.getOrSetABGroupLocalStorageValue(a, c, d, {value: 24, unit: "hours"});
            return this._stickyResult = g, this._stickyWeight = y, g
        })
    };

    class oe {
        get enabled() {
            return void 0 !== this.experimentConfig
        }

        _isValidResult(e, t = () => !0) {
            return t() && (e => null != e && !("number" == typeof e && isNaN(e)))(e)
        }
    }

    class re extends oe {
        _isValidResult(e) {
            return super._isValidResult(e, (() => this._resultValidator(e) || "control" === e))
        }

        run() {
            if (!this.enabled) return v.error("CLSWeightedChoiceSiteExperiment", "run", "() => %o", "No experiment config found. Defaulting to control."), "control";
            if (!this._mappedChoices || 0 === this._mappedChoices.length) return v.error("CLSWeightedChoiceSiteExperiment", "run", "() => %o", "No experiment variants found. Defaulting to control."), "control";
            const e = new ie(this._mappedChoices).get();
            return this._isValidResult(e) ? e : (v.error("CLSWeightedChoiceSiteExperiment", "run", "() => %o", "Invalid result from experiment choices. Defaulting to control."), "control")
        }

        constructor(...e) {
            super(...e), this._resultValidator = () => !0
        }
    }

    class ae {
        getSiteExperimentByKey(e) {
            const t = this.siteExperiments.filter((t => t.key.toLowerCase() === e.toLowerCase()))[0],
                i = E("at_site_features"),
                n = (s = (null == t ? void 0 : t.variants[1]) ? null == t ? void 0 : t.variants[1].value : null == t ? void 0 : t.variants[0].value, o = i[e], typeof s == typeof o);
            var s, o;
            return t && i[e] && n && (t.variants = [{displayName: "test", value: i[e], weight: 100, id: 0}]), t
        }

        constructor(e) {
            var t, i;
            this.siteExperiments = [], this._clsOptions = e, this._device = A() ? "mobile" : "desktop", this.siteExperiments = null != (i = null == (t = this._clsOptions.siteAds.siteExperiments) ? void 0 : t.filter((e => {
                const t = e.key, i = M(e, this._device), n = P(this._clsOptions.siteAds, t, this._device);
                return i && n
            }))) ? i : []
        }
    }

    class le extends re {
        get result() {
            return this._result
        }

        run() {
            if (!this.enabled) return v.error("CLSAdLayoutSiteExperiment", "run", "() => %o", "No experiment config found. Defaulting to empty class name."), "";
            const e = new ie(this._mappedChoices).get();
            return this._isValidResult(e) ? e : (v.error("CLSAdLayoutSiteExperiment", "run", "() => %o", "Invalid result from experiment choices. Defaulting to empty class name."), "")
        }

        _mapChoices() {
            return this._choices.map((({weight: e, value: t}) => ({weight: e, choice: t})))
        }

        constructor(e) {
            super(), this._choices = [], this._mappedChoices = [], this._result = "", this._resultValidator = e => "string" == typeof e, this.key = t.AdLayout, this.abgroup = t.AdLayout, this._clsSiteExperiments = new ae(e), this.experimentConfig = this._clsSiteExperiments.getSiteExperimentByKey(this.key), this.enabled && this.experimentConfig && (this._choices = this.experimentConfig.variants, this._mappedChoices = this._mapChoices(), this._result = this.run(), e.setWeightedChoiceExperiment(this.abgroup, this._result, !0))
        }
    }

    ee([se(), te("design:type", Function), te("design:paramtypes", []), te("design:returntype", void 0)], le.prototype, "run", null);

    class ce extends re {
        get result() {
            return this._result
        }

        run() {
            if (!this.enabled) return v.error("CLSTargetAdDensitySiteExperiment", "run", "() => %o", "No experiment config found. Defaulting to control."), "control";
            const e = new ie(this._mappedChoices).get();
            return this._isValidResult(e) ? e : (v.error("CLSTargetAdDensitySiteExperiment", "run", "() => %o", "Invalid result from experiment choices. Defaulting to control."), "control")
        }

        _mapChoices() {
            return this._choices.map((({weight: e, value: t}) => ({
                weight: e,
                choice: "number" == typeof t ? (t || 0) / 100 : "control"
            })))
        }

        constructor(e) {
            super(), this._choices = [], this._mappedChoices = [], this._result = "control", this._resultValidator = e => "number" == typeof e, this.key = t.AdDensity, this.abgroup = t.AdDensity, this._clsSiteExperiments = new ae(e), this.experimentConfig = this._clsSiteExperiments.getSiteExperimentByKey(this.key), this.enabled && this.experimentConfig && (this._choices = this.experimentConfig.variants, this._mappedChoices = this._mapChoices(), this._result = this.run(), e.setWeightedChoiceExperiment(this.abgroup, this._result, !0))
        }
    }

    ee([se(), te("design:type", Function), te("design:paramtypes", []), te("design:returntype", void 0)], ce.prototype, "run", null);
    const de = "250px";

    class he {
        start() {
            try {
                var e, t;
                (e => {
                    const t = document.body, i = `adthrive-device-${e}`;
                    if (!t.classList.contains(i)) try {
                        t.classList.add(i)
                    } catch (e) {
                        v.error("BodyDeviceClassComponent", "init", {message: e.message});
                        const t = "classList" in document.createElement("_");
                        v.error("BodyDeviceClassComponent", "init.support", {support: t})
                    }
                })(this._device);
                const s = new le(this._clsOptions);
                if (s.enabled) {
                    const e = s.result, t = e.startsWith(".") ? e.substring(1) : e;
                    if ((e => /^[-_a-zA-Z]+[-_a-zA-Z0-9]*$/.test(e))(t)) try {
                        document.body.classList.add(t)
                    } catch (e) {
                        v.error("ClsDynamicAdsInjector", "start", `Uncaught CSS Class error: ${e}`)
                    } else v.error("ClsDynamicAdsInjector", "start", `Invalid class name: ${t}`)
                }
                const o = U(this._device, this._clsOptions.siteAds).filter((e => this._locationEnabled(e))).filter((e => {
                    return t = e, i = this._device, t.devices.includes(i);
                    var t, i
                })).filter((e => {
                    return 0 === (t = e).pageSelector.length || null !== document.querySelector(t.pageSelector);
                    var t
                })), r = this.inject(o);
                var i, n;
                if (null == (t = this._clsOptions.siteAds.adOptions.stickyContainerConfig) || null == (e = t.content) ? void 0 : e.enabled) if (!X(this._clsOptions.siteAds.adOptions.stickyContainerConfig.blockedSelectors || [])) Y(`\n  .adthrive-device-phone .adthrive-sticky-content {\n    height: 450px !important;\n    margin-bottom: 100px !important;\n  }\n  .adthrive-content.adthrive-sticky {\n    position: -webkit-sticky;\n    position: sticky !important;\n    top: 42px !important;\n    margin-top: 42px !important;\n  }\n  .adthrive-content.adthrive-sticky:after {\n    content: "— Advertisement. Scroll down to continue. —";\n    font-size: 10pt;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    display:block;\n    color: #888;\n  }\n  .adthrive-sticky-container {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    min-height:${(null == (n = this._clsOptions.siteAds.adOptions.stickyContainerConfig) || null == (i = n.content) ? void 0 : i.minHeight) || 400}px !important;\n    margin: 10px 0 10px 0;\n    background-color: #FAFAFA;\n    padding-bottom:0px;\n  }\n  `);
                r.forEach((e => this._clsOptions.setInjectedSlots(e)))
            } catch (e) {
                v.error("ClsDynamicAdsInjector", "start", e)
            }
        }

        inject(e, t = document) {
            this._densityDevice = "desktop" === this._device ? l : c, this._overrideDefaultAdDensitySettingsWithSiteExperiment();
            const i = this._clsOptions.siteAds, s = b(i.adDensityEnabled, !0), o = i.adDensityLayout && s,
                r = e.filter((e => o ? e.location !== n : e)), a = e.filter((e => o ? e.location === n : null));
            return [...r.length ? this._injectNonDensitySlots(r, t) : [], ...a.length ? this._injectDensitySlots(a, t) : []]
        }

        _injectNonDensitySlots(e, t = document) {
            var i;
            const n = [], o = [];
            if (e.some((e => e.location === s && e.sticky)) && !X((null == (i = this._clsOptions.siteAds.adOptions.stickyContainerConfig) ? void 0 : i.blockedSelectors) || [])) {
                var r, a;
                const e = this._clsOptions.siteAds.adOptions.stickyContainerConfig;
                (e => {
                    Y(`\n  .adthrive-recipe.adthrive-sticky {\n    position: -webkit-sticky;\n    position: sticky !important;\n    top: 42px !important;\n    margin-top: 42px !important;\n  }\n  .adthrive-recipe-sticky-container {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    min-height:${e || 400}px !important;\n    margin: 10px 0 10px 0;\n    background-color: #FAFAFA;\n    padding-bottom:0px;\n  }\n  `)
                })("phone" === this._device ? null == e || null == (r = e.recipeMobile) ? void 0 : r.minHeight : null == e || null == (a = e.recipeDesktop) ? void 0 : a.minHeight)
            }
            for (const i of e) this._insertNonDensityAds(i, n, o, t);
            return o.forEach((({location: e, element: t}) => {
                t.style.minHeight = this.locationToMinHeight[e]
            })), n
        }

        _injectDensitySlots(e, t = document) {
            try {
                this._calculateMainContentHeightAndAllElements(e, t)
            } catch (e) {
                return []
            }
            const {
                onePerViewport: i,
                targetAll: n,
                targetDensityUnits: s,
                combinedMax: o,
                numberOfUnits: r
            } = this._getDensitySettings(e, t);
            return this._absoluteMinimumSpacingByDevice = i ? window.innerHeight : this._absoluteMinimumSpacingByDevice, r ? (this._adInjectionMap.filterUsed(), this._findElementsForAds(r, i, n, o, s, t), this._insertAds()) : []
        }

        _overrideDefaultAdDensitySettingsWithSiteExperiment() {
            var e;
            if (null == (e = this._clsTargetAdDensitySiteExperiment) ? void 0 : e.enabled) {
                const e = this._clsTargetAdDensitySiteExperiment.result;
                "number" == typeof e && (this._clsOptions.siteAds.adDensityEnabled = !0, this._clsOptions.siteAds.adDensityLayout[this._densityDevice].adDensity = e)
            }
        }

        _getDensitySettings(e, t = document) {
            const i = this._clsOptions.siteAds.adDensityLayout, n = this._determineOverrides(i.pageOverrides),
                s = n.length ? n[0] : i[this._densityDevice], o = s.adDensity, r = s.onePerViewport,
                a = this._shouldTargetAllEligible(o), l = this._getTargetDensityUnits(o, a),
                c = this._getCombinedMax(e, t),
                d = Math.min(this._totalAvailableElements.length, l, ...c > 0 ? [c] : []);
            return this._pubLog = {
                onePerViewport: r,
                targetDensity: o,
                targetDensityUnits: l,
                combinedMax: c
            }, {onePerViewport: r, targetAll: a, targetDensityUnits: l, combinedMax: c, numberOfUnits: d}
        }

        _determineOverrides(e) {
            return e.filter((e => {
                const t = I(e.pageSelector);
                return "" === e.pageSelector || t.elements && t.elements.length
            })).map((e => e[this._densityDevice]))
        }

        _shouldTargetAllEligible(e) {
            return e === this._densityMax
        }

        _getTargetDensityUnits(e, t) {
            return t ? this._totalAvailableElements.length : Math.floor(e * this._mainContentHeight / (1 - e) / this._minDivHeight) - this._recipeCount
        }

        _getCombinedMax(e, t = document) {
            return b(e.filter((e => {
                let i;
                try {
                    i = t.querySelector(e.elementSelector)
                } catch (e) {
                }
                return i
            })).map((e => Number(e.max) + Number(e.lazyMaxDefaulted ? 0 : e.lazyMax))).sort(((e, t) => t - e))[0], 0)
        }

        _elementLargerThanMainContent(e) {
            return e.offsetHeight >= this._mainContentHeight && this._totalAvailableElements.length > 1
        }

        _elementDisplayNone(e) {
            const t = window.getComputedStyle(e, null).display;
            return t && "none" === t || "none" === e.style.display
        }

        _isBelowMaxes(e, t) {
            return this._adInjectionMap.map.length < e && this._adInjectionMap.map.length < t
        }

        _findElementsForAds(e, t, i, n, s, o = document) {
            this._clsOptions.targetDensityLog = {
                onePerViewport: t,
                combinedMax: n,
                targetDensityUnits: s,
                targetDensityPercentage: this._pubLog.targetDensity,
                mainContentHeight: this._mainContentHeight,
                recipeCount: this._recipeCount,
                numberOfEls: this._totalAvailableElements.length
            };
            const r = e => {
                for (const {
                    dynamicAd: t,
                    element: r
                } of this._totalAvailableElements) if (this._logDensityInfo(r, t.elementSelector, e), !(!i && this._elementLargerThanMainContent(r) || this._elementDisplayNone(r))) {
                    if (!this._isBelowMaxes(n, s)) break;
                    this._checkElementSpacing({dynamicAd: t, element: r, insertEvery: e, targetAll: i, target: o})
                }
                !this._usedAbsoluteMinimum && this._smallerIncrementAttempts < 5 && (++this._smallerIncrementAttempts, r(this._getSmallerIncrement(e)))
            }, a = this._getInsertEvery(e, t, s);
            r(a)
        }

        _getSmallerIncrement(e) {
            let t = .6 * e;
            return t <= this._absoluteMinimumSpacingByDevice && (t = this._absoluteMinimumSpacingByDevice, this._usedAbsoluteMinimum = !0), t
        }

        _insertNonDensityAds(e, t, i, n = document) {
            let o = 0, r = 0, l = 0;
            e.spacing > 0 && (o = window.innerHeight * e.spacing, r = o);
            const c = this._repeatDynamicAds(e), d = this.getElements(e.elementSelector, n);
            e.skip;
            for (let h = e.skip; h < d.length && !(l + 1 > c.length); h += e.every) {
                let u = d[h];
                if (o > 0) {
                    const {bottom: e} = S(u);
                    if (e <= r) continue;
                    r = e + o
                }
                const p = c[l], m = `${p.location}_${p.sequence}`;
                t.some((e => e.name === m)) && (l += 1);
                const g = this.getDynamicElementId(p), y = K(e), _ = Z(e),
                    f = [e.location === a && e.sticky && e.sequence && e.sequence <= 5 ? "adthrive-sticky-sidebar" : "", e.location === s && e.sticky ? "adthrive-recipe-sticky-container" : "", y, _, ...e.classNames],
                    v = this.addAd(u, g, e.position, f);
                if (v) {
                    const o = Q(p, v);
                    if (o.length) {
                        const r = {
                            clsDynamicAd: e,
                            dynamicAd: p,
                            element: v,
                            sizes: o,
                            name: m,
                            infinite: n !== document
                        };
                        t.push(r), i.push({
                            location: p.location,
                            element: v
                        }), e.location === s && ++this._recipeCount, l += 1
                    }
                    u = v
                }
            }
        }

        _insertAds() {
            const e = [];
            return this._adInjectionMap.filterUsed(), this._adInjectionMap.map.forEach((({
                                                                                             el: t,
                                                                                             dynamicAd: i,
                                                                                             target: n
                                                                                         }, s) => {
                const o = Number(i.sequence) + s, r = i.max, a = i.lazy && o > r;
                i.sequence = o, i.lazy = a;
                const l = this._addContentAd(t, i, n);
                l && (i.used = !0, e.push(l))
            })), e
        }

        _getInsertEvery(e, t, i) {
            let n = this._absoluteMinimumSpacingByDevice;
            return this._moreAvailableElementsThanUnitsToInject(i, e) ? (this._usedAbsoluteMinimum = !1, n = this._useWiderSpacing(i, e)) : (this._usedAbsoluteMinimum = !0, n = this._useSmallestSpacing(t)), t && window.innerHeight > n ? window.innerHeight : n
        }

        _useWiderSpacing(e, t) {
            return this._mainContentHeight / Math.min(e, t)
        }

        _useSmallestSpacing(e) {
            return e && window.innerHeight > this._absoluteMinimumSpacingByDevice ? window.innerHeight : this._absoluteMinimumSpacingByDevice
        }

        _moreAvailableElementsThanUnitsToInject(e, t) {
            return this._totalAvailableElements.length > e || this._totalAvailableElements.length > t
        }

        _logDensityInfo(e, t, i) {
            const {onePerViewport: n, targetDensity: s, targetDensityUnits: o, combinedMax: r} = this._pubLog;
            this._totalAvailableElements.length
        }

        _checkElementSpacing({dynamicAd: t, element: i, insertEvery: n, targetAll: s, target: o = document}) {
            (this._isFirstAdInjected() || this._hasProperSpacing(i, t, s, n)) && this._markSpotForContentAd(i, e({}, t), o)
        }

        _isFirstAdInjected() {
            return !this._adInjectionMap.map.length
        }

        _markSpotForContentAd(e, t, i = document) {
            const n = "beforebegin" === t.position || "afterbegin" === t.position;
            this._adInjectionMap.add(e, this._getElementCoords(e, n), t, i), this._adInjectionMap.sort()
        }

        _hasProperSpacing(e, t, n, s) {
            const o = "beforebegin" === t.position || "afterbegin" === t.position,
                r = "beforeend" === t.position || "afterbegin" === t.position,
                a = n || this._isElementFarEnoughFromOtherAdElements(e, s, o), l = r || this._isElementNotInRow(e, o),
                c = -1 === e.id.indexOf(`AdThrive_${i}`);
            return a && l && c
        }

        _isElementFarEnoughFromOtherAdElements(e, t, i) {
            const n = this._getElementCoords(e, i);
            let s = !1;
            for (let e = 0; e < this._adInjectionMap.map.length; e++) {
                const i = this._adInjectionMap.map[e].coords,
                    o = this._adInjectionMap.map[e + 1] && this._adInjectionMap.map[e + 1].coords;
                if (s = n - t > i && (!o || n + t < o), s) break
            }
            return s
        }

        _isElementNotInRow(e, t) {
            const i = e.previousElementSibling, n = e.nextElementSibling,
                s = t ? !i && n || i && e.tagName !== i.tagName ? n : i : n;
            return !(!s || 0 !== e.getBoundingClientRect().height) || (!s || e.getBoundingClientRect().top !== s.getBoundingClientRect().top)
        }

        _calculateMainContentHeightAndAllElements(e, t = document) {
            const [i, n] = ((e, t, i = document) => {
                const [n, s] = w(e, t, i);
                if (0 === n.length) throw Error("No Main Content Elements Found");
                return [Array.from(n).reduce(((e, t) => t.offsetHeight > e.offsetHeight ? t : e)) || document.body, s]
            })(e, this._adInjectionMap, t);
            this._mainContentDiv = i, this._totalAvailableElements = n, this._mainContentHeight = ((e, t = "div #comments, section .comments") => {
                const i = e.querySelector(t);
                return i ? e.offsetHeight - i.offsetHeight : e.offsetHeight
            })(this._mainContentDiv)
        }

        _getElementCoords(e, t = !1) {
            const i = e.getBoundingClientRect();
            return (t ? i.top : i.bottom) + window.scrollY
        }

        _addContentAd(e, t, i = document) {
            var n, s;
            let o = null;
            const r = K(t), a = Z(t),
                l = (null == (s = this._clsOptions.siteAds.adOptions.stickyContainerConfig) || null == (n = s.content) ? void 0 : n.enabled) ? "adthrive-sticky-container" : "",
                c = this.addAd(e, this.getDynamicElementId(t), t.position, [l, r, a, ...t.classNames]);
            if (c) {
                const e = Q(t, c);
                if (e.length) {
                    c.style.minHeight = this.locationToMinHeight[t.location];
                    o = {
                        clsDynamicAd: t,
                        dynamicAd: t,
                        element: c,
                        sizes: e,
                        name: `${t.location}_${t.sequence}`,
                        infinite: i !== document
                    }
                }
            }
            return o
        }

        getDynamicElementId(e) {
            return `AdThrive_${e.location}_${e.sequence}_${this._device}`
        }

        getElements(e, t = document) {
            return t.querySelectorAll(e)
        }

        addAd(e, t, i, n = []) {
            if (!document.getElementById(t)) {
                const s = `<div id="${t}" class="adthrive-ad ${n.join(" ")}"></div>`;
                e.insertAdjacentHTML(i, s)
            }
            return document.getElementById(t)
        }

        _repeatDynamicAds(t) {
            const i = [], n = t.location === s ? 99 : this.locationMaxLazySequence.get(t.location),
                o = t.lazy ? b(n, 0) : 0, r = t.max, a = t.lazyMax,
                l = 0 === o && t.lazy ? r + a : Math.min(Math.max(o - t.sequence + 1, 0), r + a), c = Math.max(r, l);
            for (let n = 0; n < c; n++) {
                const s = Number(t.sequence) + n;
                if ("Recipe_1" !== t.name || 5 !== s) {
                    const o = t.lazy && n >= r;
                    i.push(e({}, t, {sequence: s, lazy: o}))
                }
            }
            return i
        }

        _locationEnabled(e) {
            const t = this._clsOptions.enabledLocations.includes(e.location),
                i = this._clsOptions.disableAds && this._clsOptions.disableAds.all || document.body.classList.contains("adthrive-disable-all"),
                n = !document.body.classList.contains("adthrive-disable-content") && !this._clsOptions.disableAds.reasons.has("content_plugin");
            return t && !i && n
        }

        constructor(e, t) {
            this._clsOptions = e, this._adInjectionMap = t, this._recipeCount = 0, this._mainContentHeight = 0, this._mainContentDiv = null, this._totalAvailableElements = [], this._minDivHeight = 250, this._densityDevice = l, this._pubLog = {
                onePerViewport: !1,
                targetDensity: 0,
                targetDensityUnits: 0,
                combinedMax: 0
            }, this._densityMax = .99, this._smallerIncrementAttempts = 0, this._absoluteMinimumSpacingByDevice = 250, this._usedAbsoluteMinimum = !1, this._infPageEndOffset = 0, this.locationMaxLazySequence = new Map([[s, 5]]), this.locationToMinHeight = {
                Below_Post: de,
                Content: de,
                Recipe: de,
                Sidebar: de
            };
            const {tablet: i, desktop: n} = this._clsOptions.siteAds.breakpoints;
            this._device = ((e, t) => {
                const i = window.innerWidth;
                return i >= t ? "desktop" : i >= e ? "tablet" : "phone"
            })(i, n), this._config = new J(e), this._clsOptions.enabledLocations = this._config.enabledLocations, this._clsTargetAdDensitySiteExperiment = this._clsOptions.siteAds.siteExperiments ? new ce(this._clsOptions) : null
        }
    }

    function ue(e, t) {
        if (null == e) return {};
        var i, n, s = {}, o = Object.keys(e);
        for (n = 0; n < o.length; n++) i = o[n], t.indexOf(i) >= 0 || (s[i] = e[i]);
        return s
    }

    class pe {
        get enabled() {
            return !0
        }
    }

    class me extends pe {
        setPotentialPlayersMap() {
            const e = this._videoConfig.players || [], t = this._filterPlayerMap(),
                i = e.filter((e => "stationaryRelated" === e.type && e.enabled));
            return t.stationaryRelated = i, this._potentialPlayerMap = t, this._potentialPlayerMap
        }

        _filterPlayerMap() {
            const e = this._videoConfig.players, t = {stickyRelated: [], stickyPlaylist: [], stationaryRelated: []};
            return e && e.length ? e.filter((e => {
                var t;
                return null == (t = e.devices) ? void 0 : t.includes(this._device)
            })).reduce(((e, t) => (e[t.type] || (v.event(this._component, "constructor", "Unknown Video Player Type detected", t.type), e[t.type] = []), t.enabled && e[t.type].push(t), e)), t) : t
        }

        _checkPlayerSelectorOnPage(e) {
            const t = this._potentialPlayerMap[e].map((e => ({
                player: e,
                playerElement: this._getPlacementElement(e)
            })));
            return t.length ? t[0] : {player: null, playerElement: null}
        }

        _getOverrideElement(e, t, i) {
            if (e && t) {
                const n = document.createElement("div");
                t.insertAdjacentElement(e.position, n), i = n
            } else {
                const {player: e, playerElement: t} = this._checkPlayerSelectorOnPage("stickyPlaylist");
                if (e && t) {
                    const n = document.createElement("div");
                    t.insertAdjacentElement(e.position, n), i = n
                }
            }
            return i
        }

        _shouldOverrideElement(e) {
            const t = e.getAttribute("override-embed");
            return "true" === t || "false" === t ? "true" === t : !!this._videoConfig.relatedSettings && this._videoConfig.relatedSettings.overrideEmbedLocation
        }

        _checkPageSelector(e, t, i = []) {
            if (e && t && 0 === i.length) {
                return !("/" === window.location.pathname) && v.event("VideoUtils", "getPlacementElement", new Error(`PSNF: ${e} does not exist on the page`)), !1
            }
            return !0
        }

        _getElementSelector(e, t, i) {
            return t && t.length > i ? t[i] : (v.event("VideoUtils", "getPlacementElement", new Error(`ESNF: ${e} does not exist on the page`)), null)
        }

        _getPlacementElement(e) {
            const {pageSelector: t, elementSelector: i, skip: n} = e, s = I(t), {valid: o, elements: r} = s,
                a = ue(s, ["valid", "elements"]), l = O(i), {valid: c, elements: d} = l,
                h = ue(l, ["valid", "elements"]);
            if ("" !== t && !o) return v.error("VideoUtils", "getPlacementElement", new Error(`${t} is not a valid selector`), a), null;
            if (!c) return v.error("VideoUtils", "getPlacementElement", new Error(`${i} is not a valid selector`), h), null;
            if (!this._checkPageSelector(t, o, r)) return null;
            return this._getElementSelector(i, d, n) || null
        }

        _getEmbeddedPlayerType(e) {
            let t = e.getAttribute("data-player-type");
            return t && "default" !== t || (t = this._videoConfig.relatedSettings ? this._videoConfig.relatedSettings.defaultPlayerType : "static"), this._stickyRelatedOnPage && (t = "static"), t
        }

        _getMediaId(e) {
            const t = e.getAttribute("data-video-id");
            return !!t && (this._relatedMediaIds.push(t), t)
        }

        _createRelatedPlayer(e, t, i, n) {
            "collapse" === t ? this._createCollapsePlayer(e, i) : "static" === t && this._createStaticPlayer(e, i, n)
        }

        _createCollapsePlayer(t, i) {
            const {player: n, playerElement: s} = this._checkPlayerSelectorOnPage("stickyRelated"),
                o = n || this._potentialPlayerMap.stationaryRelated[0];
            if (o && o.playerId) {
                this._shouldOverrideElement(i) && (i = this._getOverrideElement(n, s, i)), i = document.querySelector(`#cls-video-container-${t} > div`) || i, this._createStickyRelatedPlayer(e({}, o, {mediaId: t}), i)
            } else v.error(this._component, "_createCollapsePlayer", "No video player found")
        }

        _createStaticPlayer(t, i, n) {
            if (this._potentialPlayerMap.stationaryRelated.length && this._potentialPlayerMap.stationaryRelated[0].playerId) {
                const s = this._potentialPlayerMap.stationaryRelated[0];
                this._createStationaryRelatedPlayer(e({}, s, {mediaOrPlaylistId: t}), i, n)
            } else v.error(this._component, "_createStaticPlayer", "No video player found")
        }

        _shouldRunAutoplayPlayers() {
            return !(!this._isVideoAllowedOnPage() || !this._potentialPlayerMap.stickyRelated.length && !this._potentialPlayerMap.stickyPlaylist.length)
        }

        _setPlaylistMediaIdWhenStationaryOnPage(t, i) {
            if (this._potentialPlayerMap.stationaryRelated.length && this._potentialPlayerMap.stationaryRelated[0].playerId && t && t.length) {
                const n = t[0].getAttribute("data-video-id");
                return n ? e({}, i, {mediaId: n}) : i
            }
            return i
        }

        _determineAutoplayPlayers(e) {
            const t = this._component, i = "VideoManagerComponent" === t, n = this._context;
            if (this._stickyRelatedOnPage) return void v.event(t, "stickyRelatedOnPage", i && {
                device: n && n.device,
                isDesktop: this._device
            } || {});
            const {playerElement: s} = this._checkPlayerSelectorOnPage("stickyPlaylist");
            let {player: o} = this._checkPlayerSelectorOnPage("stickyPlaylist");
            o && o.playerId && s ? (o = this._setPlaylistMediaIdWhenStationaryOnPage(e, o), this._createPlaylistPlayer(o, s)) : Math.random() < .01 && setTimeout((() => {
                v.event(t, "noStickyPlaylist", i && {
                    vendor: "none",
                    device: n && n.device,
                    isDesktop: this._device
                } || {})
            }), 1e3)
        }

        _initializeRelatedPlayers(e) {
            const t = new Map;
            for (let i = 0; i < e.length; i++) {
                const n = e[i], s = n.offsetParent, o = this._getEmbeddedPlayerType(n), r = this._getMediaId(n);
                if (s && r) {
                    const e = (t.get(r) || 0) + 1;
                    t.set(r, e), this._createRelatedPlayer(r, o, n, e)
                }
            }
        }

        constructor(e, t, i) {
            super(), this._videoConfig = e, this._component = t, this._context = i, this._stickyRelatedOnPage = !1, this._relatedMediaIds = [], this._device = x() ? "desktop" : "mobile", this._potentialPlayerMap = this.setPotentialPlayersMap()
        }
    }

    class ge extends me {
        init() {
            this._initializePlayers()
        }

        _wrapVideoPlayerWithCLS(e, t, i = 0) {
            if (e.parentNode) {
                const n = e.offsetWidth * (9 / 16), s = this._createGenericCLSWrapper(n, t, i);
                return e.parentNode.insertBefore(s, e), s.appendChild(e), s
            }
            return null
        }

        _createGenericCLSWrapper(e, t, i) {
            const n = document.createElement("div");
            return n.id = `cls-video-container-${t}`, n.className = "adthrive", n.style.minHeight = `${e + i}px`, n
        }

        _getTitleHeight() {
            const e = document.createElement("h3");
            e.style.margin = "10px 0", e.innerText = "Title", e.style.visibility = "hidden", document.body.appendChild(e);
            const t = window.getComputedStyle(e), i = parseInt(t.height, 10), n = parseInt(t.marginTop, 10),
                s = parseInt(t.marginBottom, 10);
            return document.body.removeChild(e), Math.min(i + s + n, 50)
        }

        _initializePlayers() {
            const e = document.querySelectorAll(this._IN_POST_SELECTOR);
            e.length && this._initializeRelatedPlayers(e), this._shouldRunAutoplayPlayers() && this._determineAutoplayPlayers(e)
        }

        _createStationaryRelatedPlayer(e, t, i) {
            const n = "mobile" === this._device ? [400, 225] : [640, 360], s = p;
            if (t && e.mediaOrPlaylistId) {
                const o = `${e.mediaOrPlaylistId}_${i}`, r = this._wrapVideoPlayerWithCLS(t, o);
                this._playersAddedFromPlugin.push(e.mediaOrPlaylistId), r && this._clsOptions.setInjectedVideoSlots({
                    playerId: e.playerId,
                    playerName: s,
                    playerSize: n,
                    element: r,
                    type: "stationaryRelated"
                })
            }
        }

        _createStickyRelatedPlayer(e, t) {
            const i = "mobile" === this._device ? [400, 225] : [640, 360], n = h;
            if (this._stickyRelatedOnPage = !0, this._videoConfig.mobileStickyPlayerOnPage = "mobile" === this._device, t && e.position && e.mediaId) {
                const s = document.createElement("div");
                t.insertAdjacentElement(e.position, s);
                const o = this._getTitleHeight(),
                    r = this._wrapVideoPlayerWithCLS(s, e.mediaId, this._WRAPPER_BAR_HEIGHT + o);
                this._playersAddedFromPlugin.push(e.mediaId), r && this._clsOptions.setInjectedVideoSlots({
                    playlistId: e.playlistId,
                    playerId: e.playerId,
                    playerSize: i,
                    playerName: n,
                    element: s,
                    type: "stickyRelated"
                })
            }
        }

        _createPlaylistPlayer(e, t) {
            const i = e.playlistId, n = "mobile" === this._device ? u : d,
                s = "mobile" === this._device ? [400, 225] : [640, 360];
            this._videoConfig.mobileStickyPlayerOnPage = !0;
            const o = document.createElement("div");
            t.insertAdjacentElement(e.position, o);
            let r = this._WRAPPER_BAR_HEIGHT;
            e.title && (r += this._getTitleHeight());
            const a = this._wrapVideoPlayerWithCLS(o, i, r);
            this._playersAddedFromPlugin.push(`playlist-${i}`), a && this._clsOptions.setInjectedVideoSlots({
                playlistId: e.playlistId,
                playerId: e.playerId,
                playerSize: s,
                playerName: n,
                element: o,
                type: "stickyPlaylist"
            })
        }

        _isVideoAllowedOnPage() {
            const e = this._clsOptions.disableAds;
            if (e && e.video) {
                let t = "";
                e.reasons.has("video_tag") ? t = "video tag" : e.reasons.has("video_plugin") ? t = "video plugin" : e.reasons.has("video_page") && (t = "command queue");
                const i = t ? "ClsVideoInsertionMigrated" : "ClsVideoInsertion";
                return v.error(i, "isVideoAllowedOnPage", new Error(`DBP: Disabled by publisher via ${t || "other"}`)), !1
            }
            return !this._clsOptions.videoDisabledFromPlugin
        }

        constructor(e, t) {
            super(e, "ClsVideoInsertion"), this._videoConfig = e, this._clsOptions = t, this._IN_POST_SELECTOR = ".adthrive-video-player", this._WRAPPER_BAR_HEIGHT = 36, this._playersAddedFromPlugin = [], t.removeVideoTitleWrapper && (this._WRAPPER_BAR_HEIGHT = 0)
        }
    }

    class ye {
        add(e, t, i, n = document) {
            this._map.push({el: e, coords: t, dynamicAd: i, target: n})
        }

        get map() {
            return this._map
        }

        sort() {
            this._map.sort((({coords: e}, {coords: t}) => e - t))
        }

        filterUsed() {
            this._map = this._map.filter((({dynamicAd: e}) => !e.used))
        }

        reset() {
            this._map = []
        }

        constructor() {
            this._map = []
        }
    }

    class _e extends ye {
    }

    const fe = e => {
        const t = f(), i = (() => {
            const e = A() ? "mobile" : "tablet";
            return x(g) ? "desktop" : e
        })(), n = e.siteAdsProfiles;
        let s = null;
        if (n && n.length) for (const e of n) {
            const n = e.targeting.device, o = e.targeting.browserEngine, r = n && n.length && n.includes(i),
                a = o && o.length && o.includes(t);
            r && a && (s = e)
        }
        return s
    };
    try {
        (() => {
            const e = new R;
            e && e.enabled && (e.siteAds && (e => {
                const t = fe(e);
                if (t) {
                    const e = t.profileId;
                    document.body.classList.add(`raptive-profile-${e}`)
                }
            })(e.siteAds), new he(e, new _e).start(), new ge(new H(e), e).init())
        })()
    } catch (e) {
        v.error("CLS", "pluginsertion-iife", e), window.adthriveCLS && (window.adthriveCLS.injectedFromPlugin = !1)
    }
}();