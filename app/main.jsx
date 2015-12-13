var React =	require('react'); // here comes useful browserify
var ReactDOM = require('react-dom');

var GroceryItemList = require('./components/GroceryItemList');

ReactDOM.render(<GroceryItemList />, document.getElementById('app'));