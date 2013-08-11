"use strict";

define([
    'jquery',
    'underscore',
    'backbone',
    'text!tpl/main.html',
    'require'
], function ($, _, Backbone, tpl, require) {

    var template = _.template(tpl);

    return Backbone.View.extend({

        render: function () {
            this.$el.html(template(this.model.attributes));
            this.model.reports.fetch({
                success: function (data) {
                    if (data.length === 0) {
                        $('.no-reports').show();
                    }
                }
            });
            var listView = new EmployeeListView({collection: this.model.reports, el: $('.report-list', this.el)});
            listView.render();
            return this;
        }
    });

});