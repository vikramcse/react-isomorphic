var express = require('express');
var app = express();
var port = 7777;

app.get('/', function(req, res) {
    res.render('./../app/index.ejs', {});
});

app.use(express.static(__dirname + './../.temp'));

app.listen(port, function() {
   console.log("server is listening on " + port);
});

require('./routes/items.js')(app);