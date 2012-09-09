var UsersCollection = Backbone.Collection.extend({

    model: UserModel,

    localStorage: new Store("users")

});