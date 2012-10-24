var CounterModel = Backbone.Model.extend({
    // Find counters at /counter/<id>
    // save PUTs or POSTs json with
    // the current values to /counter/<id>
    // where id is one of the params
    urlRoot: '/counter',
    defaults: {
        id: 0,
        value: 0
    },

    initialize: function() 
    {
    },

    incr: function()
    {
        // Increment the counter 
        value = this.get("value");
        this.set({value: value+1});
    }
});

