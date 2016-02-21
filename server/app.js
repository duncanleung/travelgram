var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

// Set View Engine to Jade
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// Serve /public directory
app.use(express.static(__dirname + '/public'));

// Handle main domain route
app.get('/', function(req, res) {
  res.render('index.jade');
});

app.listen(port);
console.log('Server on port: ', port);