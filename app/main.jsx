var React =	require('react'); // here comes useful browserify
var ReactDOM = require('react-dom');

var GroceryItemList = require('./components/GroceryItemList.jsx');

var initial = [{
    name: "Ice Cream",
    purchased: true
}, {
    name: "pizza",
    purchased: false
}, {
    name: "vadapav",
    purchased: false
}];

ReactDOM.render(<GroceryItemList items={initial}/>, document.getElementById('app'));