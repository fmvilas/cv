"use strict";

define([
    'jquery',
    'underscore',
    'backbone',
    'text!tpl/Shell.html',
    'require',
    'bootstrap'
], function($, _, Backbone, tpl, require) {

    var template = _.template(tpl);

    return Backbone.View.extend({

        render: function () {
            this.$el.html(template());
            $('.dropdown-toggle').dropdown();
            return this;
        }

    });

});