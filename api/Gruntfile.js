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

    // Register the scripts as individual tasks
    grunt.file.expand('./api/scripts/*.js').forEach(function(filename) {
        var script = filename.slice(14, -3);
        grunt.registerTask(script, 'Run ' + script + ' script', function() {
            require(filename).run(grunt, this.async());
        });
    });
};