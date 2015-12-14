var React =	require('react'); // here comes useful browserify
var action = require('./../actions/GroceryItemActionCreator.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            input: ''
        };
    },
    handleInput: function() {
        this.setState({
            input: this.refs.name.value
        });
    },
    addItem: function(e) {
        e.preventDefault();
        action.add({
            name: this.state.input
        });
        this.setState({
            input: ''
        });
    },
    render: function() {
        return (
          <div className="grocery-form">
              <form onSubmit={this.addItem}>
                  <input
                        type="text"
                        ref="name"
                        value={this.state.input}
                        onChange={this.handleInput}/>
                  <button>Add</button>
              </form>
          </div>
        );
    }
});