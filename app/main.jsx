var React =	require('react'); // here comes useful browserify
var ReactDOM = require('react-dom');

var GroceryItemList = require('./components/GroceryItemList.jsx');
var GroceryItemStore = require('./store/GroceryItemStore.jsx');

var initial = GroceryItemStore.getItems();

function render() {
    ReactDOM.render(<GroceryItemList items={initial}/>, document.getElementById('app'));
}

GroceryItemStore.onChange(function(items) {
    initial = items;
    render();
});


render();
