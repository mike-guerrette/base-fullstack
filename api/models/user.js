'use strict';

var User;

module.exports = function(db) {
    if (User) {
        return User;
    }

    User = db.define('user', {
        username: {type: 'text', required: true, key: true},
        email: {type: 'text', required: true}
    });

    return User;
};