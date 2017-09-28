(function ($, ko, k, w) {
    'use strict';
    $(function () {
        var app = k.App = k.App || {};
        var config = k.AppConfig;
        var logger = k.Services.loggerService;
        var messenger = k.Services.messageService;
        var apiService = k.Services.apiService;
        var $popup = $("#" + config.popupId);
        var currencyCode = "";
        var acceptedLisences = config.acceptedLisences;

        function fnLoadPage(pageUrl, callback, opt) {
            var params = [];
            var paramString = "";
            if (opt && opt instanceof Object) {
                for (var key in opt) {
                    if (opt.hasOwnProperty(key)) {
                        params.push(key + "=" + encodeURIComponent(opt[key]));
                    }
                }
            }
            paramString = "?referDomain=" + config.referDomain + "&ui=" + config.uiType;
            if (params.length > 0) paramString += "&" + params.join("&");
            $popup.find(".modal-dialog").load(pageUrl + paramString, function () {
                if ($.isFunction(callback)) {
                    callback();
                }
            });
        }

        function fnClosePopup() {
            $popup.modal("hide");
        }

        function fnStartOver() {
            fnLoadPage(config.setDepositLimitPage, function () {
                var depositLimitsViewModel = new app.Model.DepositLimitsViewModel({ isAuthorized: true });
                ko.applyBindings(depositLimitsViewModel, $("#" + config.depositLimitContainerId)[0]);
            }, { "CurrencyCode": currencyCode });
        }
        
        function fnInjectOverriddenStyleSheet(styleHref) {
            var cssFile = $("<link>");
            cssFile.attr("rel", "stylesheet");
            cssFile.attr("href", styleHref);
            $(document.head).append(cssFile);
        }

        $(w).on("message", function (e) {
            var originalEvent = e.originalEvent;
            if (originalEvent.data.key === "injectOverriddenStyleSheet") {
                if (originalEvent.data.value) {
                    fnInjectOverriddenStyleSheet(originalEvent.data.value);
                }
            }
        });
        
        $popup.on("hide.bs.modal", function () {
            messenger.postMessage({ "key": "closePopup" }, parent, config.referDomain);
            messenger.postMessage({ "key": "redirect" }, parent, config.referDomain);
        });


        /**
        * fix the multi-modals bug in bootstrap
        */
        $(document).on('show.bs.modal', '.modal', function () {
            var zIndex = 1040 + (10 * $('.modal:visible').length);
            $(this).css('z-index', zIndex);
            setTimeout(function () {
                $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
            }, 0);
        });

        $popup.modal();
        app.closePopup = fnClosePopup;
        app.startOver = fnStartOver;
        apiService.getProfile().then(function (profileData) {
            if (acceptedLisences.indexOf(profileData.LicenseType) > -1) {
                currencyCode = profileData.CurrencyCode;
                fnStartOver();
            } else {
                fnLoadPage(config.unauthorizedPage, function () {
                    var depositLimitsViewModel = new app.Model.DepositLimitsViewModel({ isAuthorized: false });
                    ko.applyBindings(depositLimitsViewModel, $("#" + config.depositLimitContainerId)[0]);
                });
            }
        }, function () {
            fnLoadPage(config.unauthorizedPage, function () {
                var depositLimitsViewModel = new app.Model.DepositLimitsViewModel({ isAuthorized: false });
                ko.applyBindings(depositLimitsViewModel, $("#" + config.depositLimitContainerId)[0]);

            });
        });
    });
})(jQuery, ko, kooboo, window);

