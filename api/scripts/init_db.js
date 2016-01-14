'use strict';

var config = require('../config'),
    models = require('../models').init(config);

module.exports.run = function(grunt, done) {
    models.db.sync(done);
};
