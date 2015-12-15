var guid =	require('guid');
var listeners = {};

module.exports = {
    //5.
    // The callback is registered here
    // having a unique id.
    // now lets wait when user generate an action
    // lets go to GroceryListAddItem.jsx
    register : function(callback) {
        var id = guid.raw();
        listeners[id] = callback;
        return id;
    },

    //8.
    // remember we registered the callback in store
    // then in dispatch all the listener which we registered
    // and pass the payload then the specified action is called
    // here addGroceryItem is called in store
    // lets again go to store
    dispatch : function(payload) {
        console.info("Dispatching...", payload);
        for(var id in listeners) {
            var listener = listeners[id];
            listener(payload);
        }
    }
};