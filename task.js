module.exports = function(grunt) {
    'use strict';
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.initConfig({
        
        
        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                        "css/*.css",
                        "*.html"
                    ]
                },
                options: {
                    baseDir: "./",
                    // logLevel: "debug",
                    logFileChanges: true,
                    files: "./**",
                    server: {
                        baseDir: "./"
                    }
                }
            }
        }
    });
    grunt.registerTask('default', ['browserSync']);

};

