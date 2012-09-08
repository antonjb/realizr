var AppView = Backbone.View.extend({

    initialize: function () {
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
            dreamsTodo: new DreamsView({
                el: $("#dreams-todo")
            }),
            dreamsCompleted: new DreamsView({
                el: $("#dreams-completed")
            }),
            profile: new ProfileView({
                el: $("#summary"),
                model: this.model // user model
            })
        };
    }

});