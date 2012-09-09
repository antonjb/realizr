var UserModel = Backbone.Model.extend({

    initialize: function (options) {
        // Grab the dreams for this user
        var self = this,
            dreamIds = this.get('dreams');

        this.dreams = this.getChildren(this.get('dreams'), dreams);
    },

    getChildren: function (ids, collection) {
        var self = this;
        newCollection = new Backbone.Collection();

        if (typeof ids !== 'undefined') {
            _.each(ids, function (i) {
                newCollection.push(window.dreams.find(function (dream) {
                    return dream.id === i;
                }));
            });
        }

        return newCollection;
    }

});