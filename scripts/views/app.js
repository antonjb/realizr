var AppView = Backbone.View.extend({

    initialize: function (options) {
        this.model.on('change', this.render, this);
    },

    render: function () {
        var self = this;

        dust.render('app-template', {}, function (err, out) {
            self.$el.attr('role', 'main');
            self.$el.append(out).appendTo('body');
            self.createViews();
            self.views.dreams.render();
            self.views.addView.render();
        });

        return this;
    },

    createViews: function () {
        // Create and render all child views
        this.views = {
            dreams: new DreamsView({
                el: $(".container"),
                collection: this.model.dreams
            }),
            profile: new ProfileView({
                el: $("#summary"),
                model: this.model // user model
            }),
            addView: new AddView({
                el: $('.container')
            })
        };
    }

});