'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        nodemon: {
            script: 'server.js',
            options: {
                watch: ['./api'],
                legacyWatch: true
            }
        }
    });

    grunt.registerTask('serve', ['nodemon']);
};