'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: 'client/**/*.js'
        },
        nodemon: {
            script: 'server.js',
            options: {
                watch: ['./web/*'],
                legacyWatch: false
            }
        }
    });

    grunt.registerTask('serve', ['nodemon']);
};