'use strict';

var orm = require('orm');

module.exports.init = function(config) {
    var models = {};

    var opts = {
        database: config.PG_DB,
        protocol: 'postgres',
        host: config.PG_HOST,
        port: config.PG_PORT,
        user: config.PG_USER,
        password: config.PG_PASS,
        query: {
            pool: true
        }
    };

    models.db = orm.connect(opts, function(err) {
        if (err) {
            console.error(err, err.stack);
            return;
        }
    });

    models.User = require('./user')(models.db);

    return models;

};