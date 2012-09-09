var DreamsCollection = Backbone.Collection.extend({

    localStorage: new Store("dreams"),

    model: DreamModel

});