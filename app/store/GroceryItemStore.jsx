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

    // this will keep all the listeners
    function onChange(listener) {
        listeners.push(listener);
        console.log(listeners);
    }

    function triggerListeners() {
        listeners.forEach(function(listener) {
            listener(items);
        });
    }

    function addGroceryItem(item) {
        items.push(item);
        triggerListeners();
    }

    dispatcher.register(function(event) {
        var split = event.type.split(":");
        if(split[0] === 'grocery-item') {
            switch(split[1]) {
                case 'add':
                    addGroceryItem(event.payload);
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