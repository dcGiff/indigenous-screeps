module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        screeps: {
            options: {
                email: 'dgiffman@gmail.com',
                password: '1qaz@WSX',
                branch: 'Test Code',
                ptr: false
            },
            dist: {
                src: ['main.js', 'mech.js', 'planner.js'] //, 'reportallcreepstats.js', 'constructionsite.js']

            }
        }
    });
}
