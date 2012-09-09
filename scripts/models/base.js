var BaseModel = Backbone.Model.extend({

    getChildren: function (ids, collection) {
        var self = this,
            newCollection = new Backbone.Collection();

        if (typeof ids !== 'undefined') {
            _.each(ids, function (i) {
                newCollection.push(collection.find(function (model) {
                    return model.id === i;
                }));
            });
        }

        return newCollection;
    }

});