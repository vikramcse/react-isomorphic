var React =	require('react'); // here comes useful browserify

module.exports = React.createClass({
    render: function() {
        return (
          <div className="grocery-form">
              <form>
                  <input type="text"/>
                  <button>Add</button>
              </form>
          </div>
        );
    }
});