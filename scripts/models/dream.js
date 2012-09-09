var DreamModel = BaseModel.extend({

    // Nasty copy pasta from user model
    initialize: function (options) {
        this.comments = this.getChildren(this.get('comments'), dreams);
        this.products = products.getByKeywords(this.get('keywords'));
    },

    toJSON: function () {
        return _.extend(this.attributes, { products: this.products.toJSON() });
    }

});