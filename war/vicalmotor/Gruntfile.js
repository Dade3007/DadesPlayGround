module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
        development: {
            options: {
                paths: ["less"]
            },
            files: [{"css/main.css": "less/main.less"}]
        }
    },
    cssmin: {
      add_banner: {
        options: {
          banner: '/* Parallax Vicalmotor */'
        },
        files: {
          'css/main.min.css': ['css/main.css']
        }
      }
    }, 
    
    watch: {
      less: {
        files: 'less/*.less',
        tasks: ['less', 'cssmin']
      },
      
      livereload: {
        // Here we watch the files the less task will compile to
        // These files are sent to the live reload server after less compiles to them
        options: { livereload: true },
        files: ['less/*.less', 'js/*.js'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less','cssmin','watch']);
}