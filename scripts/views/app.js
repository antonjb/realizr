// Application view
//
// This view is the master for the entire application. It
// sets up other child views and passes in models and
// collections.
// ------------------------------------------------------
var AppView = Backbone.View.extend({

    currentProjectId: 0,

    initialize: function () {},

    render: function () {
        var self = this;
        dust.render( 'app', {}, function (err, out) {

        });
    },

    showSettings: function () {
        var fn = 'hide';
        if (this.model.get('userIsChief')) fn = 'show';
        $('#tabs-menu').find('li').last()[fn]();
    },

    createViews: function () {
        // Create and render all child views
        this.views = {
            newProject: new NewProjectView({
                el: $("#new-project")
            }),
            summary: new SummaryView({
                el: $("#summary"),
                model: this.model
            })
        };
    }
});