(function ($, k, ko) {
    'use strict';
    $(function () {
        var app = k.App = k.App || {};
        app.Model = app.Model || {};
        var config = k.AppConfig;
        var limitFrequencyMapping = config.limitFrequencyMapping;
        function ConfirmationPopupViewModel(selectedAmount, limitFrequency, coolingOffPeriod, parentViewModel) {
            var self = this;
            this.currencySymbol = ko.observable(config.currencySymbol);
            this.currencyCode = ko.observable(config.currencyCode);
            this.selectedAmount = ko.observable(selectedAmount);
            this.limitFrequency = ko.observable(limitFrequency);
            this.isDepositLimitsSet = ko.observable(parentViewModel.isDepositLimitsSet());
            this.canDisable = ko.observable(false);
            this.isStricterLimit = ko.observable(false);
            this.limitFrequencyDescription = ko.computed(function () {
                return limitFrequencyMapping[self.limitFrequency()];
            });
            this.coolingOffPeriod = ko.observable(coolingOffPeriod);
            this.formSubmit = function () {
                parentViewModel.formSubmit();
                self.cancelDepositAlert();
            };
            this.disableDepositLimit = function() {
                parentViewModel.disableDepositLimit();
                self.cancelDepositAlert();
            }
            /**
             * cancel the enable confirmation window or update confirmation window
             */
            this.cancelDepositAlert = function () {
                $("#" + config.confirmationPopup).modal("hide");
            };
        };
        ConfirmationPopupViewModel.prototype = new app.Model.ViewModelBase();
        app.Model.ConfirmationPopupView = ConfirmationPopupViewModel;

    });
})(jQuery, kooboo, ko);

