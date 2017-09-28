(function (k, $) {
    'use strict';
    var config = k.LoggingConfig;
    var lastLogMessage;
    var lastLogTime;

    var service = {
        debug: fnDebug,
        error: fnError,
        info: fnInfo,
        trace: fnTrace,
        warn: fnWarn
    };

    k.Services.loggerService = service;

    function fnDebug(message) {
        fnLogToServer("debug", message);
    }

    function fnError(message, exception) {
        fnLogToServer("error", message, exception);
    }

    function fnInfo(message) {
        fnLogToServer("info", message);
    }

    function fnTrace(message) {
        fnLogToServer("trace", message);
    }

    function fnWarn(message) {
        fnLogToServer("warn", message);
    }

    function fnLogToServer(type, message, exception) {

        if (!config.loggingEnabled) {
            return;
        }

        try {
            if ($.isPlainObject(message)) {
                message = JSON.stringify(message);
            }
            // Throttling! If we get the same message in a small window, ignores duplicates.
            // Very simple for now..
            // ie: it wont handle if for example two different log messages are getting logged very quickly 
            //     (since lastLogMessage will switch between the two)
            if (message === lastLogMessage && !!lastLogTime) {
                var diffMs = (new Date() - lastLogTime);

                if (diffMs < config.throttlingDelayInSeconds * 1000) {
                    return;
                }
            }

            lastLogMessage = message;
            lastLogTime = new Date();

            var data = {
                type: type,
                message: message,
                exception: exception,
                path: location.path
            };

            // There was a problem when the URL was not in the Site Settings yet.
            // k.Logging.url was undefined.
            // however, the $http.post call worked (so the catch didn't catch anything)
            // In the next $digest, it tried to do the actual post call and failed, and called $log.error
            // Which eventually comes back here, and does the same (so infinite loop).
            // So I'm making sure there is a valid URL. nothing else should fail.. 
            // wort case we get a console.log of "length cannot be called on undefined", which is fine
            if (config.url.length > 0) {

                // Just fire and forget - no need for success or error callbacks
                $.ajax(config.url, {
                    cache: false,
                    data: JSON.stringify(data),
                    method: 'POST'
                });
            }
        } catch (e) {
            console.log(e);
        }
    }
})(kooboo, jQuery);