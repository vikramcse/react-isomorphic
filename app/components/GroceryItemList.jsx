var React =	require('react'); // here comes useful browserify
var GroceryItem = require('./GroceryItem.jsx');

module.exports = React.createClass({
    render: function() {
        return(
            <div>
                <h1>Grocery List</h1>
                <div>
                    {
                        this.props.items.map(function(item, index) {
                            return(
                                <GroceryItem item={item} key={"item" + index}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
});