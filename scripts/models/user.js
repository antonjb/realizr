var ProjectModel = BaseModel.extend({

    initialize: function (attributes, options) {
        BaseModel.prototype.initialize.call(this, attributes, options);
        this.collections = {
            dreams: new Backbone.Collection(null, {user: this}),
            friends: new Backbone.Collection(null, {user: this}),
            products: new Backbone.Collection(null, {user: this})
        };
    },

    fetchCollections: function () {
        _.each(this.collections, function (collection) {
            collection.fetch();
        });
    }

});