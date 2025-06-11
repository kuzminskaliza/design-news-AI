var cls_disable_ads = function (t) {
    "use strict";
    window.adthriveCLS && (window.adthriveCLS.buildDate = "2025-06-03");

    const e = "Content", i = "Recipe";
    const s = new class {
        info(t, e, ...i) {
            this.call(console.info, t, e, ...i)
        }

        warn(t, e, ...i) {
            this.call(console.warn, t, e, ...i)
        }

        error(t, e, ...i) {
            this.call(console.error, t, e, ...i), this.sendErrorLogToCommandQueue(t, e, ...i)
        }

        event(t, e, ...i) {
            var s;
            "debug" === (null == (s = window.adthriveCLS) ? void 0 : s.bucket) && this.info(t, e)
        }

        sendErrorLogToCommandQueue(t, e, ...i) {
            window.adthrive = window.adthrive || {}, window.adthrive.cmd = window.adthrive.cmd || [], window.adthrive.cmd.push((() => {
                void 0 !== window.adthrive.logError && "function" == typeof window.adthrive.logError && window.adthrive.logError(t, e, i)
            }))
        }

        call(t, e, i, ...s) {
            const o = [`%c${e}::${i} `], a = ["color: #999; font-weight: bold;"];
            s.length > 0 && "string" == typeof s[0] && o.push(s.shift()), a.push(...s);
            try {
                Function.prototype.apply.call(t, console, [o.join(""), ...a])
            } catch (t) {
                return void console.error(t)
            }
        }
    }, o = t => {
        const e = window.location.href;
        return t.some((t => new RegExp(t, "i").test(e)))
    };

    class a {
        checkCommandQueue() {
            this.adthrive && this.adthrive.cmd && this.adthrive.cmd.forEach((t => {
                const e = t.toString(), i = this.extractAPICall(e, "disableAds");
                i && this.disableAllAds(this.extractPatterns(i));
                const s = this.extractAPICall(e, "disableContentAds");
                s && this.disableContentAds(this.extractPatterns(s));
                const o = this.extractAPICall(e, "disablePlaylistPlayers");
                o && this.disablePlaylistPlayers(this.extractPatterns(o))
            }))
        }

        extractPatterns(t) {
            const e = t.match(/["'](.*?)['"]/g);
            if (null !== e) return e.map((t => t.replace(/["']/g, "")))
        }

        extractAPICall(t, e) {
            const i = new RegExp(e + "\\((.*?)\\)", "g"), s = t.match(i);
            return null !== s && s[0]
        }

        disableAllAds(t) {
            t && !o(t) || (this.all = !0, this.reasons.add("all_page"))
        }

        disableContentAds(t) {
            t && !o(t) || (this.content = !0, this.recipe = !0, this.locations.add(e), this.locations.add(i), this.reasons.add("content_plugin"))
        }

        disablePlaylistPlayers(t) {
            t && !o(t) || (this.video = !0, this.locations.add("Video"), this.reasons.add("video_page"))
        }

        urlHasEmail(t) {
            if (!t) return !1;
            return null !== /([A-Z0-9._%+-]+(@|%(25)*40)[A-Z0-9.-]+\.[A-Z]{2,})/i.exec(t)
        }

        constructor(t) {
            this.adthrive = t, this.all = !1, this.content = !1, this.recipe = !1, this.video = !1, this.locations = new Set, this.reasons = new Set, (this.urlHasEmail(window.location.href) || this.urlHasEmail(window.document.referrer)) && (this.all = !0, this.reasons.add("all_email"));
            try {
                this.checkCommandQueue(), null !== document.querySelector(".tag-novideo") && (this.video = !0, this.locations.add("Video"), this.reasons.add("video_tag"))
            } catch (t) {
                s.error("ClsDisableAds", "checkCommandQueue", t)
            }
        }
    }

    const n = window.adthriveCLS;
    return n && (n.disableAds = new a(window.adthrive)), t.ClsDisableAds = a, t
}({});