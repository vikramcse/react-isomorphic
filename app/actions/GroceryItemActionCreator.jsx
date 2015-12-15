var dispatcher = require('./../dispatcher.js');

module.exports = {
    //7.
    // The dispatch event is generated
    // where we have to pass the the payload and the
    // action i.e add
    // lets again go to dispatcher
    add: function(item) {
        dispatcher.dispatch({
            payload: item,
            type: "grocery-item:add"
        });
    }
};

