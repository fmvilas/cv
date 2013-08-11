"use strict";

define([
    'jquery',
    'underscore',
    'backbone',
    'text!tpl/spanish.html',
    'require'
], function ($, _, Backbone, tpl, require) {

    var template = _.template(tpl);

    return Backbone.View.extend({

        render: function () {
            this.$el.html(template());
            return this;
        }
    });

});