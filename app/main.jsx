var React =	require('react'); // here comes useful browserify
var ReactDOM = require('react-dom');

var GroceryItemList = require('./components/GroceryItemList.jsx');
var GroceryItemStore = require('./store/GroceryItemStore.jsx');

var initial = GroceryItemStore.getItems();

function render() {
    ReactDOM.render(<GroceryItemList items={initial}/>, document.getElementById('app'));
}

// 1.
// Initially the listener is register to the store listeners
// in the form of callback and the callback contains changed data
// now lets go to store to see what will happen in onChange
GroceryItemStore.onChange(function(items) {
    initial = items;
    render();
});

// 2 initial render happens
render();
