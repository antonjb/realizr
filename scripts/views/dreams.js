var DreamsView = Backbone.View.extend({

    // Delegate events hash
    events: {
        'button.save': 'save'
    },

    initialize: function () {
        this.collection.on('change reset add', this.render, this);
    },

    // Save you dream
    save: function (ev) {
        // Grab the id of the dream from the event attribute
        var dId = $(ev.target).attr('data-dream-id'),
            dream = this.collection

    },

    render: function () {
        var self = this,
            data = _.extend(this.collection.toJSON(), products.getByKeywords(''));

        dust.render('', this.collection.toJSON(), function (err, out) {
            self.$el.append(data);

            // Attach masonry plugin to the view
            s
        });
    }

});