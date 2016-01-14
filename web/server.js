'use strict';

var express = require('express'),
    path = require('path');

var app = express();

app.set('views', path.join(__dirname, './'));

app.set('view engine', 'jade');

app.use('/bower_components', express.static(path.resolve(__dirname, '../bower_components')));
app.use(express.static(path.resolve(__dirname + '/client')));

app.locals.assets = require('./assets');

app.get('*', function(req, res) {
    res.render('index');
});

var port = process.env.PORT || 9000;
// Start the listener
app.listen(port, function() {
    console.log('Web UI Listening on port %s', port);
});
