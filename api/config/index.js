'use strict';
/**
 * Config loader
 * Pulls in settings from sub-modules and merges them into a single config
 * object in order.
*/

var _ = require('lodash'),
    defaults = require('./defaults');

// Load local settings if present
var local;
try {
    local = require('./local');
} catch(e) {
    local = {};
}

// Load "production", "staging", or "test" configuration nodes as directed by
// the NODE_ENV environment variable.  Note that this is how the deployment
// servers set their configurations - the chef script creates the config file
// during the deployment.
defaults.env = process.env.NODE_ENV || 'development';
var env = {};
if (defaults.env && defaults.env !== 'development') {
    env = require('./' + defaults.env);
}

// Load order is:
// - defaults,
// - local settings if any,
// - environment settings if specified
module.exports = _.merge(
    defaults,
    local,
    env
);
