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

            $('.lang-caption').text('Seleccionar idioma');
            $('span', '.like').html('&iquest;Te gusta lo que ves? ');
            $('a', '.like').attr('href', 'mailto:fmvilas@gmail.com').html('&iexcl;Contr&aacute;tame!');
            $('#download').attr('href', 'files/fmvilas_cv_es.pdf').text('Descarga el CV en formato PDF');

            return this;
        }
    });

});