(function ($, k, ko) {
    'use strict';
    $(function () {
        var app = k.App = k.App || {};
        app.Model = app.Model || {};
        var config = k.AppConfig;
        var apiService = k.Services.apiService;
        var $popup = $("#" + config.popupId);
        var logger = k.Services.loggerService;
        var messenger = k.Services.messageService;
        var ErrorViewModel = app.Model.Error;
        // opts: {isAuthorized: boolean}
        var DepositLimitsViewModel = function (opts) {
            var self = this;
            var confirmationPopupViewModel = null;
            var errorViewModel = null;
            var isValidationStart = false;

            this.isDepositLimitsSet = ko.observable();
            this.currentLimitsPercentage = ko.observable();
            this.depositedAmount = ko.observable();
            this.depositedAmountText = ko.observable(config.labels.loading);
            this.remainingBalance = ko.observable();
            this.remainingBalanceText = ko.observable(config.labels.loading);
            this.amountInCents = ko.observable();
            this.amountText = ko.observable(config.labels.loading);
            this.resetTime = ko.observable(config.labels.loading);
            this.remainingTime = ko.observable(config.labels.loading);
            this.canDisable = false;
            this.isStricterLimit = false;
            this.isCustomLimit = ko.observable(false);
            this.isPendingStatus = ko.observable(false);
            this.isCurrencyExists = ko.observable(true);
    
            this.defaultSelectedAmount = 0;
            this.defaultLimitFrequency = 0;
            this.selectedAmount = ko.observable();
            this.limitFrequency = ko.observable();
            var limitFrequencyMapping = config.limitFrequencyMapping;
            this.limitFrequencyDescription = ko.observable();
            this.coolingData = ko.observable();
            var _depositLimitDataExcludeExpired = {};

            this.showUpdateConfirmation = function () {
                this.canDisable = false;
                // if user didn't select any amount or frequency
                if (!fnInitFormValidation()) return;
                var options = {
                    defaultSelectedAmount: parseInt(self.defaultSelectedAmount),
                    defaultLimitFrequency: parseInt(self.defaultLimitFrequency),
                    nowSelectedAmount: parseInt(self.selectedAmount()),
                    nowLimitFrequency: parseInt(self.limitFrequency())
                }
                // if user try to change both amount and frequency
                //if (options.defaultSelectedAmount !== options.nowSelectedAmount && options.defaultLimitFrequency !== options.nowLimitFrequency) {
                //    fnShowUnableProcessPopup();
                //    return;
                //}
                // if user didn't change either amount or frequency
                if (options.defaultSelectedAmount === options.nowSelectedAmount && options.defaultLimitFrequency === options.nowLimitFrequency) {
                    fnShowWithoutChangingErrorPopup();
                    return;
                }
                if (!fnIsStricterLimit(options)) {
                    this.isStricterLimit = false;
                } else {
                    this.isStricterLimit = true;
                }
                fnPostAndDisablePopup();
            };
      
            this.showEnableConfirmation = function () {
                this.canDisable = false;
                this.isStricterLimit = false;
                if (fnInitFormValidation()) {
                    fnEnablePopup();
                }
            };
      
            this.showDisableDepositConfirmation = function () {
                this.canDisable = true;
                this.isStricterLimit = false;
                fnPostAndDisablePopup();
            };

     
            this.formSubmit = function () {
                var options = {};
                options.amountInCents = fnDollarsToCents(self.selectedAmount() * 1);
                options.periodInDays = self.limitFrequency() / 24;
                apiService.postDepositLimitData(options).then(function () {
                    apiService.trackSignupRegistration().always(function () {
                        fnCloseUI();
                    });
                    //fnGetLimitDataAndRender();
                }, function (error, status, message) {
                    logger.error(message);
                    if (fnIsSpecificResponseError(config.apiCode.InvalidChange)) {
                        fnShowUnableProcessPopup();
                    } else {
                        fnShowGenericErrorPopup({ isGetError: false });
                    }
                });
            };

            this.disableDepositLimit = function () {
                apiService.deleteDepositLimitData()
                    .then(function () {
                        //fnGetLimitDataAndRender();
                        fnCloseUI();
                    }, function (error, status, message) {
                        logger.error(message);
                        if (fnIsSpecificResponseError(config.apiCode.InvalidDisable)) {
                            fnShowUnableProcessPopup();
                        } else {
                            fnShowGenericErrorPopup({ isGetError: false });
                        }
                    });
            };

            this.closeMainUI = function () {
                fnCloseUI();
            };

            var fnIsSpecificResponseError = function (error, errorCode) {
                if (error.responseJson == null) return false;
                var errors = error.responseJson.errors;
                return errors != null && errors.request instanceof Array && errors.request.length > 0 && errors.request[0] === code;
            };

            var fnShowWithoutChangingErrorPopup = function (opts) {
                errorViewModel.updatingViewModelByJSON({
                    errorTitle: config.labels.errorLists.withoutChangingError.title,
                    errorText: config.labels.errorLists.withoutChangingError.text,
                    isGetError: false
                });
                if (config.uiType === "mobile") document.getElementById(config.popupId).scrollIntoView();
                $("#" + config.unableToProcessPopupId).modal("show");
            };

            var fnShowUnableProcessPopup = function (opts) {
                errorViewModel.updatingViewModelByJSON({
                    errorTitle: config.labels.errorLists.postMessageError.title,
                    errorText: config.labels.errorLists.postMessageError.text,
                    isGetError: false
                });
                if (config.uiType === "mobile") document.getElementById(config.popupId).scrollIntoView();
                $("#" + config.unableToProcessPopupId).modal("show");
            };
            // opts = {isGetError: boolean}
            var fnShowGenericErrorPopup = function (opts) {
                errorViewModel.updatingViewModelByJSON({
                    errorTitle: config.labels.errorLists.genericError.title,
                    errorText: config.labels.errorLists.genericError.text,
                    isGetError: opts.isGetError
                });

                if (config.uiType === "mobile") document.getElementById(config.popupId).scrollIntoView();
                $("#" + config.unableToProcessPopupId).modal("show");
            };

            var fnShowConfirmationPopup = function (coolingOffPeriod) {
                confirmationPopupViewModel.updatingViewModelByJSON({
                    selectedAmount: self.selectedAmount(),
                    limitFrequency: self.limitFrequency(),
                    coolingOffPeriod: coolingOffPeriod,
                    canDisable: self.canDisable,
                    isStricterLimit: self.isStricterLimit
                });
                if (config.uiType === "mobile") document.getElementById(config.popupId).scrollIntoView();
                $("#" + config.confirmationPopup).modal("show");
            };

            var fnCloseUI = function () {
                $popup.modal("hide");
                messenger.postMessage({ "key": "redirect" }, parent, config.referDomain);
            };
    
            var fnInitFormValidation = function () {
                var verifySuccess = true;
                if (!self.selectedAmount()) {
                    $(".deposit-limit").popover("show");
                    verifySuccess = false;
                } else {
                    $(".deposit-limit").popover("hide");
                }

                if (!self.limitFrequency()) {
                    $(".limit-frequency").popover("show");
                    verifySuccess = false;
                } else {
                    $(".limit-frequency").popover("hide");
                }
                isValidationStart = true;
                return verifySuccess;
            };

            self.selectedAmount.subscribe(function(value) {
                if (isValidationStart && !!value) {
                    $(".deposit-limit").popover("hide");
                }
            });

            self.limitFrequency.subscribe(function(value) {
                if (isValidationStart && !!value) {
                     $(".limit-frequency").popover("hide");
                }
            });

            var fnStartLoadPageLoading = function() {
                $(".loading").addClass("nav-loading");
            };

            var fnEndLoadPageLoading = function() {
                $(".loading").removeClass("nav-loading");
            };

            this.init = function () {
                $.when(fnGetLimitDataAndRender()).then(function () {
                    confirmationPopupViewModel = new app.Model.ConfirmationPopupView(null, null, null, self);
                    ko.applyBindings(confirmationPopupViewModel, $("#" + config.confirmationPopup)[0]);
                    fnPostIframeHeightMessage();
                }, function (error, status, message) {
                    logger.error(message);
                    fnShowGenericErrorPopup({ isGetError: true });
                });
                errorViewModel = new ErrorViewModel(null, null, self);
                ko.applyBindings(errorViewModel, $("#" + config.unableToProcessPopupId)[0]);
            }

            /**
            * postMessage iframe height
            */
            var fnPostIframeHeightMessage = function () {
                var iframeHeight = 0;
                iframeHeight = $("#" + config.depositLimitContainerId).height();
                messenger.postMessage({ "key": "setIframeHeight", "value": iframeHeight }, parent, config.referDomain);
            }

            var fnPostAndDisablePopup = function () {
                var depositData = _depositLimitDataExcludeExpired,
                    coolingOffPeriodDays = self.coolingData();
                var depositInfo = depositData[0];
                var now = new Date(depositData[2].getResponseHeader("PstDate"));
                if (depositInfo.length === 1) {
                    if (depositInfo[0].status === config.depositLimitStatus.Pending) {
                        //only one pending record returned in depositData
                        if (new Date(depositInfo[0].endDate).getTime() > now.getTime() + coolingOffPeriodDays * 24 * 3600 * 1000) {
                            fnShowConfirmationPopup(coolingOffPeriodDays);
                        } else {
                            fnShowUnableProcessPopup();
                        }
                    } else if (depositInfo[0].status === config.depositLimitStatus.Active) {
                        //only one active record returned in depositData
                        fnShowConfirmationPopup(coolingOffPeriodDays);
                    }
                } else {
                    // more than one record returned in depositData
                    fnShowUnableProcessPopup();
                }
            };

            var fnEnablePopup = function () {
                confirmationPopupViewModel.updatingViewModelByJSON({
                    selectedAmount: self.selectedAmount(),
                    limitFrequency: self.limitFrequency(),
                    coolingOffPeriod: self.coolingData(),
                    canDisable: self.canDisable,
                    isStricterLimit: self.isStricterLimit
                });
                $("#" + config.confirmationPopup).modal("show");
            };

            var fnGetLimitDataAndRender = function () {
                fnIfCurrencyNotExists();
                fnStartLoadPageLoading();
                var promise = $.when(apiService.getDepositLimitDataByClientId({ excludeExpired: true }), apiService.getCoolingOffPeriodByClientId());
                promise.always(function () {
                    fnEndLoadPageLoading();
                }).then(function (arrLimitData, arrCoolingData) {
                    var limitData = arrLimitData[0],
                        limitDataResponse = arrLimitData[2];
                    self.coolingData(arrCoolingData[0][0]);
                    _depositLimitDataExcludeExpired = arrLimitData;
                    /**
                     * if the API returns blank array
                     */
                    if (limitData.length === 0) {
                        self.isDepositLimitsSet(false);
                    } else {
                        /**
                         * if there is a pending data
                         */
                        if (limitData.some(function (item) { return item.status === config.depositLimitStatus.Pending })) {
                            self.isPendingStatus(true);
                        }
                        self.isDepositLimitsSet(true);
                        var filtered = limitData.filter(function (item) {
                            if (item.status === config.depositLimitStatus.Active) {
                                return true;
                            }
                        })[0];
                        var responseDate = new Date(limitDataResponse.getResponseHeader("PstDate"));
                        var processedDepositLimitData = fnDepositLimitDataMapping(filtered, responseDate);
                        self.updatingViewModelByJSON(processedDepositLimitData);
                        self.defaultSelectedAmount = self.selectedAmount();
                        self.defaultLimitFrequency = self.limitFrequency();
                        self.limitFrequencyDescription(limitFrequencyMapping[self.defaultLimitFrequency]);
                        var startDateTime = filtered.startDate;
                        fnGetCashierDataAndRender(startDateTime, filtered);
                    }
                }, function (error, status, message) {
                    logger.error(message);
                    fnShowGenericErrorPopup({ isGetError: true });
                });
                return promise;
            };
            
            var fnGetCashierDataAndRender = function (startDateTime, depositLimitData) {
                apiService.getCashier(startDateTime).then(function (cashierData) {
                    var processedCashierData = fnCashierDataMapping(cashierData, depositLimitData);
                    self.updatingViewModelByJSON(processedCashierData);
                }, function (error, status, message) {
                    logger.error(message);
                    fnShowGenericErrorPopup({ isGetError: true });
                });
            };
     
            var fnIsStricterLimit = function (options) {
                var defaultSelectedAmount = options.defaultSelectedAmount,
                    defaultLimitFrequency = options.defaultLimitFrequency,
                    nowSelectedAmount = options.nowSelectedAmount,
                    nowLimitFrequency = options.nowLimitFrequency;
                return nowLimitFrequency > defaultLimitFrequency || nowSelectedAmount < defaultSelectedAmount;
            };

            var fnIfCurrencyNotExists = function () {
                if (!config.currencySymbol) {
                    self.isCurrencyExists(false);
                }
            };
      
            var fnCashierDataMapping = function (originalData, depositLimitData) {
                var processedData = {};
                $.extend(processedData, originalData);
                /**
                 * you have deposited money
                 */
                processedData.depositedAmountText = originalData.sumOfDeposits + " " + config.currencyCode;
                var depositedAmount = originalData.sumOfDeposits;
                /**
                 * you can still deposit money
                 */
                processedData.remainingBalanceText = (fnCentsToDollars(depositLimitData.amountInCents) - originalData.sumOfDeposits) + " " + config.currencyCode;
                /**
                 * deposited percentage
                 */
                processedData.currentLimitsPercentage = (depositedAmount / fnCentsToDollars(depositLimitData.amountInCents)) * 100 + "%";
                return processedData;
            };
      
            var fnDepositLimitDataMapping = function (depositLimitData, responseDate) {
                var processedDepositLimitData = {};
                /**
                 * limit frequency
                 */
                if (depositLimitData.periodInHours) {
                    processedDepositLimitData.limitFrequency = String(depositLimitData.periodInHours);
                }
                /**
                 * deposit limit money
                 */
                if (depositLimitData.amountInCents) {
                    processedDepositLimitData.selectedAmount = String(fnCentsToDollars(depositLimitData.amountInCents));
                    var noCustomLimit = config.currencyLimits.some(function (item) {
                        return parseInt(processedDepositLimitData.selectedAmount, 10) === item;
                    });
                    self.isCustomLimit(!noCustomLimit);
                }
                /**
                 * reset at time
                 */
                processedDepositLimitData = $.extend(processedDepositLimitData, fnProcessResetTime(depositLimitData));
                /**
                 * remaining time
                 */
                var endDate = new Date(processedDepositLimitData.resetTimeIOS);
                var nowDate = responseDate;
                var nTime = (endDate - nowDate)/1000;
                var day = Math.floor(nTime / 86400);
                var hour = Math.floor(nTime % 86400 / 3600);
                processedDepositLimitData.remainingTime = day + " " + config.labels.day + ", " + hour + " " + config.labels.hours;
                /**
                 * amountInCents
                 */
                processedDepositLimitData.amountText = fnCentsToDollars(depositLimitData.amountInCents) + " " + config.currencyCode;

                return processedDepositLimitData;
            }
            if (opts.isAuthorized) {
                this.init();
            }
        };

        var fnCentsToDollars = function (amount) {
            return amount / 100;
        };

        var fnDollarsToCents = function (amount) {
            return amount * 100;
        };

        var fnProcessResetTime = function (depositLimitData) {
            /**
            * reset at time
            */
            var processedDepositLimitData = {};
            var resetTime = new Date(depositLimitData.currentCycleStartDate).getTime() + depositLimitData.periodInHours * 60 * 60 * 1000;
            resetTime = new Date(resetTime).toISOString();
            var createTime = resetTime.split("T")[1].split(":"),
                createDate = resetTime.split("T")[0].split("-"),
                showDate = createDate[2],
                showMonth = createDate[1],
                showYear = createDate[0],
                showHour = createTime[0],
                showMinutes = createTime[1];
            processedDepositLimitData.resetTimeIOS = resetTime;
            processedDepositLimitData.resetTime = showHour + ":" + showMinutes + " " + config.labels.GMT + " " + showDate + "/" + showMonth + "/" + showYear;
            return processedDepositLimitData;
        };

        DepositLimitsViewModel.prototype = new app.Model.ViewModelBase();

        app.Model.DepositLimitsViewModel = DepositLimitsViewModel;
    });
})(jQuery, kooboo, ko);