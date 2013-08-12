"use strict";

define([
    'jquery',
    'underscore',
    'backbone',
    'text!tpl/portuguese.html',
    'require'
], function ($, _, Backbone, tpl, require) {

    var template = _.template(tpl);

    return Backbone.View.extend({

        render: function () {
            this.$el.html(template());

            $('.lang-caption').text('Selecione o idioma');
            $('span', '.like').html('Gosta do que v&ecirc;? ');
            $('a', '.like').attr('href', 'mailto:fmvilas@gmail.com').html('Contrate me!');
            $('#download').attr('href', 'files/fmvilas_cv_pt.pdf').text('Descarregue o CV como um arquivo PDF');

            return this;
        }
    });

});