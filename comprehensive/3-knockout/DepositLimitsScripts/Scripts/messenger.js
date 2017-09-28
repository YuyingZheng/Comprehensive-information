(function (k) {
    'use strict';
    var messenger = {
        postMessage: function (message, targetFrame, targetDomain) {
            if (targetFrame !== window) {
                targetFrame.postMessage(message, targetDomain);
            } else {
                window.postMessage(message, window.location.origin);
            }
        },
        isInHostingPage: function () {
            return parent !== window;
        }
    }

    k.Services.messageService = messenger;
})(kooboo);