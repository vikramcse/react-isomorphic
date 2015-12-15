var React =	require('react'); // here comes useful browserify
var action = require('./../actions/GroceryItemActionCreator.jsx');

module.exports = React.createClass({
    delete: function(e) {
        e.preventDefault();
        action.delete(this.props.item);
    },
    togglePurchase: function(e) {
        e.preventDefault();
        if(this.props.item.purchased) {
            action.unbuy(this.props.item);
        } else {
            action.buy(this.props.item);
        }
    },
    render: function() {
        return(
            <div>
                <div>
                    <h4 className={this.props.item.purchased ? "strikethrough" : ""}>
                        {this.props.item.name}
                    </h4>
                </div>
                <form onSubmit={this.togglePurchase}>
                    <button className={this.props.item.purchased ? "" : "button-primary"}>
                        {this.props.item.purchased ? "Unbuy" : "Buy"}
                    </button>
                </form>
                <form onSubmit={this.delete}>
                    <button>&times;</button>
                </form>
            </div>
        )
    }
});