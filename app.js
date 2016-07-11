var express = require ('express');
var app = express();
var port = process.env.PORT || 8008;

app.use(express.static(__dirname + '/public'));
app.listen(port);

console.log("Now listening at port " + port);