'use strict';

module.exports = function(app) {

    var controllers = {
        base: require('./controllers/base.js')()
    };

    app.get('/', controllers.base.hello);
};