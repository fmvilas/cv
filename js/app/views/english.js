"use strict";

define([
    'jquery',
    'underscore',
    'backbone',
    'text!tpl/english.html',
    'require'
], function ($, _, Backbone, tpl, require) {

    var template = _.template(tpl);

    return Backbone.View.extend({

        render: function () {
            this.$el.html(template());

            $('.lang-caption').text('Select language');
            $('span', '.like').text('Do you like what you see? ');
            $('a', '.like').attr('href', 'mailto:fmvilas@gmail.com').text('Hire me!');
            $('#download').attr('href', 'files/fmvilas_cv_en.pdf').text('Download CV as a PDF file');

            return this;
        }
    });

});