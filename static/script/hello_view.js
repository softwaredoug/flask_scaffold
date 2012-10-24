SearchView = Backbone.View.extend({
    initialize: function(){
        this.counter = new CounterModel({id:5, value:0});
        this.render();
    },

    render: function() {
        // compile the template using underscore
        var template = _.template( $("#counter_template").html(), 
                                 {counter_value: this.counter.get("value"),
                                  counter_id: this.counter.get("id")} );
        // Load the compiled HTML into the backbone "el"B4
        //
        this.$el.html(template);
    },

    // These events are a combination of the 
    // jQuery selector syntax AND
    // jQuery events. See: http://api.jquery.com/category/events/
    events: {
        "click input[type=button]": "incrCounter",
        "change #counter_id": "changeCounter"
    },

    changeCounter: function(event){

        var countValStr = $("#counter_value").html();
        var currIdStr = $("#counter_id").val();

        var currVal = parseInt(countValStr, 10);
        var currId = parseInt(currIdStr, 10);
        this.counter = new CounterModel({id:currId, value:currVal});
    },
    
    incrCounter: function(event){
        this.counter.incr();
        this.counter.save();
    }


});

var search_view = new SearchView({ el: $("#counter_container") });
