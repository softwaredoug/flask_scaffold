SearchView = Backbone.View.extend({
    initialize: function(){
        this.render();
    },

    render: function() {
        // compile the template using underscore
        var template = _.template( $("#foo_template").html(), 
                                 {search_label: "Doug's Search"} );
        // Load the compiled HTML into the backbone "el"
        this.$el.html(template);
    },

    events: {
        "click input[type=button]": "doSearch"
    },
    
    doSearch: function(event){
        alert("Search for " + $("#search_input").val() );
    }


});

var search_view = new SearchView({ el: $("#foo_container") });
