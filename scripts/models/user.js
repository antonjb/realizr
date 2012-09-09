var UserModel = Backbone.Model.extend({

    initialize: function (options) {
        // Grab the dreams for this user
        var self = this,
            dreamIds = this.get('dreams');

        this.dreams = new Backbone.Collection();

        if (typeof dreamIds !== 'undefined') {
            _.each(dreamIds, function (i) {
                self.dreams.push(window.dreams.find(function (dream) {
                    return dream.id === i;
                }));
            });
        }
    }

});