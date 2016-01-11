'use strict';

module.exports = function() {
    var controller = {};

    controller.hello = function(req, res) {
        res.json(200, {
            code: 200,
            message: 'Hello World!',
            data: []
        });
    };

    return controller;
};