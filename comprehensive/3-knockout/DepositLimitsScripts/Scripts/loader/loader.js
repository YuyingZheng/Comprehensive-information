(function ($, w) {
    var config = w.DepositLimitsConfig;
    if (!config) {
        return;
    }
    var uiType = fnGetUIType(config);

    var isIE = navigator.userAgent.toUpperCase().indexOf("MSIE") > -1 ? true : false;

    if (uiType === config.allUITypes.mobile) {
        $("head").append('<meta id="customed-meta" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">');
    }

    function fnInjectIframe() {
        if ($("#" + config.iframeId).length > 0) {
            console.error("an element with id '" + config.iframeId + "' already exist in the DOM");
            return;
        }
        var iframe = $("<iframe></iframe>");
        iframe.attr("id", config.iframeId);
        iframe.attr("class", "account-recovery-popup");
        iframe.attr("scrolling", "no");
        iframe.attr("frameBorder", "no");
        iframe.attr("style","visibility:hidden");
        iframe.attr("onload", "this.style.visibility = 'visible';");
        iframe.attr("src", config.homePageUrl + "?referDomain=" + encodeURI(location.protocol+"//"+location.host) + "&ui=" + uiType + "&ref=" + config.ref);
        fnPostOverriddenStyleAddressMessage(iframe);
        $("body").append(iframe);
        fnSetIframePosition();
    }

    function fnSetIframePosition() {
        $("#" + config.iframeId).css({
            "position": "fixed",
            "z-index": "1000",
            "left": "0",
            "top": "0",
            "width": "100%",
            "height": "100%",
            "min-height": "100%"
        });
        if (uiType === config.allUITypes.mobile) {
            $("#" + config.iframeId).css({
                "position": "absolute",
            });
        }
    }

    function fnIsValidStyleSheetAddress(styleHref) {
        return new RegExp("^http(s)?").test(styleHref);
    }

    function fnPostOverriddenStyleAddressMessage($iframe) {
        if (fnIsValidStyleSheetAddress(config.overriddenStyleUrl)) {
            $iframe.on("load", function () {
                $iframe[0].contentWindow.postMessage({
                    "key": "injectOverriddenStyleSheet",
                    "value": config.overriddenStyleUrl
                }, config.homePageUrl);
            });
        }
    }

    function fnMonitorHash() {
        var hashTag = w.location.hash.split("#")[1];
        if (!!hashTag && hashTag.toLocaleLowerCase() === config.hashTag.toLocaleLowerCase()) {
            fnInjectIframe();
        } else if (!hashTag) {
            if ($.isFunction(config.onClosePopup)) config.onClosePopup();
            $("#" + config.iframeId).remove();
            if (uiType === config.allUITypes.mobile) {
                $("#customed-meta").remove();
            }
        }
    }

    function fnInitLink() {
        $("a[data-hash=" +config.hashTag.toLocaleLowerCase() + "]").click(function () {
            fnInjectIframe();
        });
    }

    function fnReadCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function fnGetUIType(config) {
        if (!!config.uiType) return config.uiType;
        var uiType = config.allUITypes.desktop;
        var userPrefs = fnReadCookie("UserPrefsCookie");
        if (userPrefs != null) {
            var regex = /device=(m|d)/g;
            var match = regex.exec(userPrefs);
            if (match && match[1] === "m") {
                uiType = config.allUITypes.mobile;
            }
        }
        return uiType;
    }

    $(w).on('message', function (e) {
        if (e.originalEvent.data.key === 'closePopup') {
            if (isIE) {
                location.hash = "";
            } else {
                w.history.pushState("", w.document.title, w.location.pathname + w.location.search);
                $(w).trigger('hashchange');
            }
        } else if (e.originalEvent.data.key === 'redirect') {
            if ($.isFunction(config.onRedirect)) config.onRedirect(config.redirectUrl);
            var redirectUrl = config.redirectURL;
            redirectUrl && (w.location.href = redirectUrl);
        } else if (e.originalEvent.data.key === 'setIframeHeight') {
            var iframeHeight = e.originalEvent.data.value + "px";
            $("#" + config.iframeId).css({
                "height": iframeHeight
            });
        }
    });

    $(w).on('hashchange', fnMonitorHash);

    fnMonitorHash();
    $(fnInitLink);

})(jQuery, window);