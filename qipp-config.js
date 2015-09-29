(function () {
    'use strict';

    angular
        .module('flatapp.config')
        .config([
            'config',
            function (
                config
            ) {
                var prefix =
                        (window.location.href.match(/([dev|staging]+-{1})/) || [''])
                        .shift(),
                    domain = '.qipp.com',
                    protocol = 'https://';
                config.api.host = protocol + prefix + 'home' + domain;
                config.auth.host = protocol + prefix + 'auth' + domain;
            }
        ]);

}());
