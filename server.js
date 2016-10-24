var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var favoritesRouter = require('./routes/favorites')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/favorites', favoritesRouter);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
  console.log('Listening on port', server.address().port);
});
