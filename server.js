var express = require('express');
var app = express();

var port = process.env.PORT || 15000;
var server = require('http').createServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes')(app);

server.listen(port);
console.log(`Сервер запустився на порті: ` + port)