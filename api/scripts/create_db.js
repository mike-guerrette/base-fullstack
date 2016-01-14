'use strict';

var async = require('async'),
    pg = require('pg'),
    config = require('../config');

module.exports.run = function(grunt, done) {
    var connString = 'postgres://' + config.PG_USER + ':' + config.PG_PASS +
        '@' + config.PG_HOST;

    var connectionDone;

    async.retry(
        5,
        function(cb) {
            pg.connect(connString, function(err, client, done) {
                if (!client) {
                    console.log('Waiting for connection ...');
                    setTimeout(function() { cb(err); }, 5000);
                } else {
                    connectionDone = done;
                    cb(null, client);
                }
            });
        },
        function(err, client) {
            if (err) { return console.error(err); }
            client.query('DROP DATABASE IF EXISTS ' + config.PG_DB, function() {
                client.query('CREATE DATABASE ' + config.PG_DB, function(err) {
                    if (err) { console.error(err); }
                    done();
                });
            });
        }
    );
};
