(function ($, k, ko) {
    'use strict';
    $(function () {
        var app = k.App = k.App || {};
        app.Model = app.Model || {};
        var config = k.AppConfig;
        var ViewModelBase = app.Model.ViewModelBase;

        var ErrorViewModel = function (title, text, parentVm) {
            var self = this;
            this.isGetError = ko.observable(true);
            this.errorTitle = ko.observable(title || "");
            this.errorText = ko.observable(text || "");
            this.cancelErrorPopup = function () {
                if (self.isGetError()) {
                    $("#" + config.unableToProcessPopupId).modal("hide");
                    parentVm.closeMainUI();
                } else {
                    $("#" + config.unableToProcessPopupId).modal("hide");
                }
            }
        }
        ErrorViewModel.prototype = new ViewModelBase;
        app.Model.Error = ErrorViewModel;
    });
})(jQuery, kooboo, ko);