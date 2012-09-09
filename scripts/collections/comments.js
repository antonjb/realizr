var CommentsCollection = Backbone.Collection.extend({

    localStorage: new Store("dreams"),

    model: CommentModel

});