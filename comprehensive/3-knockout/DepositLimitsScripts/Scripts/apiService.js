(function ($, k) {
    var apiService = {};
    var apiLists = k.AppConfig.apiList;
    var config = k.AppConfig;
    var cookieUtil = window.Cookies.noConflict();
    var customerId = fnGetUserName(),
        userName = fnGetUserName(),
        isRecurring = config.isRecurring;
    
    function fnDeparam(params) {
        var o = {};
        if (!params) return o;
        var a = params.split('&');
        for (var i = 0; i < a.length; i++) {
            var pair = a[i].split('=');
            o[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
        return o;
    }

    function fnGetCookieField (cookieName, fieldName) {
        var result = null;
        var value = cookieUtil.get(cookieName);
        if (!!value) {
            var obj = fnDeparam(value);
            result = obj[fieldName];
        }
        return result;
    }

    function fnGetUserName() {
        return fnGetCookieField(config.cookieNames.customerId, config.cookieFields.id) ||
               fnGetCookieField(config.cookieNames.tempId, config.cookieFields.id);
    }

    apiService.getProfile = function () {
        return $.ajax({
            url: apiLists.profile,
            method: "get",
            dataType: "json"
        });
    };

    apiService.getDepositLimitDataByClientId = function (opt) {
        var options = {
            customerId: customerId
        };
        if (opt) $.extend(options, opt);
        return $.ajax({
            url: apiLists.depositLimits,
            data: options,
            method: "get",
            dataType: "json",
            cached:false
        });
    };



    apiService.getCoolingOffPeriodByClientId = function () {
        return $.ajax({
            url: apiLists.coolingOffPeriods,
            data: {
                customerId: customerId
            },
            method: "get",
            dataType: "json",
            cached: false
        });
    };

    apiService.postDepositLimitData = function (parameters) {
        var options = $.extend(parameters,
        {
            isRecurring: isRecurring,
            customerId: customerId,
            userName: userName
        });
        return $.ajax({
            url: apiLists.depositLimits,
            dataType: "json",
            method: "post",
            contentType: "application/json",
            data: JSON.stringify(options),
            cached: false
        });
    };

    apiService.getCashier = function (startDateTime) {
        return $.ajax({
            url: apiLists.cashier,
            data: {
                id: customerId,
                startDateTime: startDateTime
            },
            method: "get",
            dataType: "json",
            cached: false
        });
    };

    apiService.deleteDepositLimitData = function () {
        var options = {
            customerId: customerId,
            userName: userName
        };
        return $.ajax({
            url: apiLists.depositLimits,
            method: "delete",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(options),
            cached: false
        });
    };

    apiService.trackSignupRegistration = function () {
        var options = {
            customerId: customerId,
            userName: userName,
            device: fnGetCookieField(config.cookieNames.userPrefs, config.cookieFields.device),
            source: k.AppConfig.urlParameters.ref
        };
        return $.ajax({
            url: apiLists.signup,
            method: "post",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(options),
            cached: false
        });
    };



    k.Services.apiService = apiService;

})(jQuery, kooboo);