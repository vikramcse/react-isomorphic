var React =	require('react'); // here comes useful browserify

module.exports = React.createClass({
    render: function() {
        return(
            <div>
                <h4 className={this.props.item.purchased ? "strikethrough" : ""}>
                    {this.props.item.name}
                </h4>
            </div>
        )
    }
});