(function () {
    'use strict';

    angular
        .module('flatapp.config')
        .config([
            'config',
            function (
                config
            ) {
                var parts = (window.location.href.match(/(dev-|staging-)?([\w-]+)\..+\..+/)),
                    domain = '.qipp.com',
                    protocol = 'https://';
                config.api.host = protocol + (parts[1] || '') + 'home' + domain;
                config.auth.host =  '';
                config.auth.prefix =  '/auth/';
                config.subdomain = parts[2];
            }
        ]);

}());
