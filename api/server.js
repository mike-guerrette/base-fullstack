'use strict';

var config = require('./config'),
    app = require('./src/app');

app(config);

process.on('uncaughtException', function(err) {
    console.error(err, err.stack);
});
