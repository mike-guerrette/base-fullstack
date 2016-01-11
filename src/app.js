'use strict';

var express = require('express'),
    routes = require('./routes');

module.exports = function(config) {
    var app = express();

    routes(app);

    app.listen(config.PORT, function() {
        console.log('API listening on port %s', config.PORT);
    });

    // Error handler; must be last in `api.use` stack.
    app.use(function(err, req, res, next) {
        console.error(
            'action=error; ' +
            'requestHeaders=' + JSON.stringify(req.headers) + '; ' +
            'requestBody=' + JSON.stringify(req.body) + '; ' +
            'requestMethod=' + JSON.stringify(req.method) + '; ' +
            'requestUrl=' + JSON.stringify(req.url) + ';\n' +
            err + ';\n' +
            err.stack
        );
        res.status(500);
        if (req.xhr) {
            res.send({error: err.name});
        } else {
            res.send('An error occurred');
        }
    });

    return app;
};