var CommentsCollection = Backbone.Collection.extend({

    localStorage: new Store("comments"),

    model: CommentModel

});