//'use strict';
let express = require('express');
let app = express();

app.get('/', function (req, res) {
    res.send('Ahora me voy a dormir!');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

