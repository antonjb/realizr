var UserModel = BaseModel.extend({

    initialize: function (options) {
        this.dreams = this.getChildren(this.get('dreams'), dreams);
    }

});