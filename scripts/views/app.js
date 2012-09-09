var AppView = Backbone.View.extend({

    initialize: function (options) {
        this.model.on('change', this.render, this);
    },

    render: function () {
        var self = this;
        dust.render('app', {}, function (err, out) {
            self.$el.appendTo('body');
        });
    },

    createViews: function () {
        // Create and render all child views
        this.views = {
            dreams: new DreamsView({
                el: $("#dreams-todo"),
                collection: this.model.collections.dreams
            }),
            profile: new ProfileView({
                el: $("#summary"),
                model: this.model // user model
            })
        };
    }

});