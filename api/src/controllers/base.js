'use strict';

module.exports = function() {
    var controller = {};

    controller.hello = function(req, res) {
        res.status(200).json({
            code: 200,
            message: 'Hello World!',
            data: []
        });
    };

    return controller;
};