var ListItem = Backbone.View.extend({

    // Delegate events hash
    events: {

    },

    initialize: function () {
        this.model.on('change', this.render, this);
    },

    saveImage: function (data) {
        this.$el.find('.img img').attr("src", data.url);
        this.uploader.dialog("close");
    },

    save: function () {
        var self = this,
            data = this.$el.find('form').serializeObject();

        // Finally save the form
        this.model.save(data, {
            wait: true,
            success: function () { self.hideForm(); }
        });
    },

    render: function () {
        dust.render( '', data, function (err, out) {

        });
    }

});