"use strict";

define([
    'jquery',
    'backbone',
    'app/views/Shell',
    'require'
], function ($, Backbone, ShellView, require) {

    var $body = $('body'),
        shellView = new ShellView({el: $body}).render(),
        $content = $("#content", shellView.el);

    return Backbone.Router.extend({

        routes: {
            "": "english",
            "en": "english",
            'es': 'spanish',
            'pt': 'portuguese'
        },

        english: function () {
            require(['app/views/english'], function(EnglishView) {
                var englishView = new EnglishView({el: $content});
                
                englishView.delegateEvents(); // delegate events when the view is recycled
                englishView.render();
            });
        },

        spanish: function () {
            require(['app/views/spanish'], function(SpanishView) {
                var spanishView = new SpanishView({el: $content});
                
                spanishView.delegateEvents(); // delegate events when the view is recycled
                spanishView.render();
            });
        },

        portuguese: function () {
            require(['app/views/portuguese'], function(PortugueseView) {
                var portugueseView = new PortugueseView({el: $content});
                
                portugueseView.delegateEvents(); // delegate events when the view is recycled
                portugueseView.render();
            });
        }

    });

});