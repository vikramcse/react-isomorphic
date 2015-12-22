module.exports = function(app) {
    console.log('items.js file');
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

    app.route('/api/items')
    .get(function(req, res) {
        res.send(items);
    })
    .post(function(req, res) {
        var item = req.body;
        items.push(item);
    });
};