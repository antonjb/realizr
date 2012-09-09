var ProductsCollection = Backbone.Collection.extend({

    localStorage: new Store("products"),

    model: ProductModel,

    // Return a collection of products based on a keyword
    // search. Keywords passed in an array and are case
    // insensitive. Returns a collection of products.
    getByKeywords: function (keywords) {
        var self = this,
            products = new Backbone.Collection();

        _.each(keywords, function (word) {
            self.each(function (prod) {
                var haveKeyword = _.any(prod.get('keywords'), function (kw) {
                    return word.toLowerCase() === kw.toLowerCase();
                });


                if (haveKeyword) {
                    products.push(prod);
                }
            });
        });

        return products;
    }

});