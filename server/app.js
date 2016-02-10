var port = process.env.PORT || 3000;

var express = require('express');

var app = express();

app.listen(port);
console.log('Server on port: ', port);