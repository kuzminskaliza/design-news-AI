document.documentElement.className += " spai_has_js";
(function (w, d) {
    var b = d.getElementsByTagName('head')[0];
    var s = d.createElement("script");
    var v = ("IntersectionObserver" in w) ? "" : "-compat";
    s.async = true;
    s.src = "https://media.webdesignerdepot.com/assets/js/bundles/spai-lib-bg" + v
        + ".1.1.min.js?v=3.10.0";
    w.spaiDomain = "media.webdesignerdepot.com";
    w.spaiData = {
        version: "3.10.0",
        key: "spai",
        quality: "lossy",
        convert: "auto",
        lqip: false,
        rootMargin: "500px",
        crop: true,
        sizeBreakpoints: {"on": true, "base": 50, "rate": 10},
        backgroundsMaxWidth: 1920,
        resizeStyleBackgrounds: false,
        nativeLazyLoad: false,
        safeLazyBackgrounds: false,
        asyncInitialParsing: false,
        debug: false,
        doSelectors: [{
            "selectors": "img",
            "type": "attr",
            "targetAttr": "src",
            "attrType": "url",
            "lazy": true,
            "resize": true
        }],
        exclusions: {
            "selectors": {".no-lazy": {"lazy": 0, "cdn": 1, "resize": 1, "lqip": 0, "crop": 0}},
            "urls": {
                "regex:\/\\\/\\\/([^\\\/]*\\.|)gravatar.com\\\/\/": {
                    "lazy": 0,
                    "cdn": 0,
                    "resize": 0,
                    "lqip": 0,
                    "crop": -1
                }
            }
        },
        sizeFromImageSuffix: true,
        ajax_url: "https://webdesignerdepot.com/wp-admin/admin-ajax.php",
    };
    b.appendChild(s);
}(window, document));