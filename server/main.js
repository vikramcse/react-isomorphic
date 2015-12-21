var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 7777;

app.get('/', function(req, res) {
    res.render('./../app/index.ejs', {});
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(__dirname + './../.temp'));
require('./routes/items.js')(app);

app.listen(port, function() {
   console.log("server is listening on " + port);
});
