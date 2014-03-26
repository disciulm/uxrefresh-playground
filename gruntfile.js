module.exports = function(grunt) {

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'js/scripts.js' : ['_components/js/scripts.js'] // can use '*' wildcards
        } //files
      } //my_target
    }, //uglify
    compass: {
      dev: {
        options: {
          config: 'config.rb'
        } // options
      } // dev
    }, // compass
    watch: {
          options: { livereload: true },
          scripts: {
            files:   ['_components/js/scripts.js'], // can use '*' wildcards
            tasks:   ['uglify']
          }, // scripts
          sass: {
            files: ['_components/sass/*.scss'],
            tasks: ['compass:dev']
          }, //sass
          html: {
            files: ['*.html']
          }
        } //watch
  }) //initConfig
  grunt.registerTask('default', 'watch');
} //exports