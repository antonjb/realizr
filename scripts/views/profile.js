var ProfileView = Backbone.View.extend({

    // Delegate events hash
    events: {

    },

    initialize: function () {
        this.model.on('change', this.render, this);
    },

    render: function () {
        dust.render( 'profile-template', data, function (err, out) {

        });
    }

});