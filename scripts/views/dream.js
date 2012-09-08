var DreamsView = Backbone.View.extend({

    // Delegate events hash
    events: {

    },

    initialize: function () {
        this.model.on('change', this.render, this);
    },

    render: function () {
        dust.render( '', data, function (err, out) {

        });
    }

});