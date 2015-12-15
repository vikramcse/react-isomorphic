var React =	require('react'); // here comes useful browserify
var dispatcher = require('./../dispatcher.js');

function GroceryItemStore() {

    var items = [{
        name: "Ice Cream",
        purchased: true
    }, {
        name: "pizza",
        purchased: false
    }, {
        name: "vadapav",
        purchased: false
    }];

    var listeners = [];

    function getItems() {
        return items;
    }

    // 3.
    // Here the listener is registered by pushing it to the list
    function onChange(listener) {
        listeners.push(listener);
        console.log(listeners);
    }

    // 10.
    // remember the listener added at step one
    // pass new changed item to it
    // and the render method is called with the new data
    function triggerListeners() {
        listeners.forEach(function(listener) {
            listener(items);
        });
    }

    //9.
    // The new item is added to the store
    // then new need to trigger the listeners that change
    // happened now time to re-render
    function addGroceryItem(item) {
        items.push(item);
        triggerListeners();
    }

    function deleteGroceryItem(item) {
        var index;
        items.filter(function(_item, _index) {
            if(_item.name == item.name) {
                index = _index;
            }
        });

        items.splice(index, 1);
        triggerListeners();
    }

    function buyGroceryItem(item) {
        item.purchased = true;
        triggerListeners();
    }

    function unbuyGroceryItem(item) {
        item.purchased = false;
        triggerListeners();
    }

    // 4.
    // Automatically the register function is called
    // here we need to specify about the action and what to do
    // when that action triggers
    // lets go to register function in dispatcher
    dispatcher.register(function(event) {
        var split = event.type.split(":");
        if(split[0] === 'grocery-item') {
            switch(split[1]) {
                case 'add':
                    addGroceryItem(event.payload);
                    break;
                case 'delete':
                    deleteGroceryItem(event.payload);
                    break;
                case 'buy':
                    buyGroceryItem(event.payload);
                    break;
                case 'unbuy':
                    unbuyGroceryItem(event.payload);
                    break;
            }
        }
    });

    return {
        getItems: getItems,
        onChange: onChange
    };
}

module.exports = new GroceryItemStore();