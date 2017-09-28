(function ($, k) {
    'use strict';
    $(function () {
        var app = k.App = k.App || {};
        app.Model = app.Model || {};
        app.Model.ConfirmationPopupView = app.Model.ConfirmationPopupView || {};
        var ViewModelBase = function () {};
        ViewModelBase.prototype = {
            /**
             * refresh the view modal and UI
             */
            updatingViewModelByJSON: function (json) {
                for (var i in this) {
                    if (this.hasOwnProperty(i)) {
                        if (i in json) {
                            if (typeof this[i] === "function") {
                                this[i](json[i]);
                            }
                        }
                    }
                }
            }
        };

        app.Model.ViewModelBase = ViewModelBase;

    });
})(jQuery, kooboo);

