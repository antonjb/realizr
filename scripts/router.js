var Router = Backbone.Router.extend({

    routes: {
        "dreams/todo": "showTodo",
        "dreams/done": "showDone",
        "dreams/:id": "showDream"
    },

    goToNew: function () {
        this.navigate('new');
    },

    showNew: function (id) {
        app.showNew(id);
    },

    showMain: function (id, tab) {
        var tabs = ['overview', 'chippers', 'gifts', 'settings'];
        if (typeof tab === 'undefined' || tabs.indexOf(tab) < 0) {
            this.navigate(id+'/overview', true);
            return;
        }
        app.showMain(id, tab);
    },

    showCheckout: function (id) {
        app.showCheckout(id);
    }

});