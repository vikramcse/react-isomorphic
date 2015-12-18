module.exports = function(app) {
    var items = [{
        name: "Ice Cream",
        purchased: true
    }, {
        name: "pizza",
        purchased: false
    }, {
        name: "vadapav",
        purchased: false
    }];

    app.route('/api/items');
    app.get('/', function(req, res) {
        res.send(items);
    });
};