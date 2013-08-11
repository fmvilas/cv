require.config({

    baseUrl: 'js/lib',

    paths: {
        app: '../app',
        tpl: '../../tpl',
        bootstrap: 'bootstrap/js/bootstrap.min'
    },

    map: {
        '*': {
            'app/models/english': 'app/models/memory/english'
        }
    },

    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require(['jquery', 'backbone', 'app/router', 'bootstrap'], function ($, Backbone, Router) {
    var router = new Router();
    Backbone.history.start();
});