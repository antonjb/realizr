var DreamsView = Backbone.View.extend({

    dreamClass: 'dream-item',
    activeClass: 'active',

    // Delegate events hash
    events: {
        'button.save': 'save',
        'click .dream-item': 'toggleView'
    },

    toggleView: function(ev){
        var $ct = $(ev.currentTarget),
            selected = $ct.hasClass(this.activeClass);

        $('.' + this.activeClass, this.$el).removeClass(this.activeClass);
        if (!selected) $ct.addClass(this.activeClass);
    },

    initialize: function () {
        this.collection.on('change reset add', this.render, this);
    },

    // Save you dream
    save: function (ev) {
        // Grab the id of the dream from the event attribute
        var dId = $(ev.target).attr('data-dream-id'),
            dream = this.collection;
    },

    render: function () {
        var self = this,
            data = {
                dreams: this.collection.toJSON()
            };

        dust.render('list-item-template', data, function (err, out) {
            self.$el.append(out);
            self.$el.find('.time').each(function(index, el){
                var $this = $(el),
                    when = moment(new Date(Number($this.text())));
                $this.text(when.format("MMM, YYYY"));
            });
        });
    }

});