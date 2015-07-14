module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
        development: {
            options: {
                paths: ["war/main/less"]
            },
            files: [{"war/main/css/main.css": "war/main/less/styles.less"}]
        }
    },
    cssmin: {
      add_banner: {
        options: {
          banner: '/* David Martin Portfolio */'
        },
        files: {
          'war/main/css/main.min.css': ['war/main/css/main.css']
        }
      }
    }, 
    
    watch: {
      less: {
        files: 'war/main/less/*.less',
        tasks: ['less', 'cssmin']
      },
      
      livereload: {
        // Here we watch the files the less task will compile to
        // These files are sent to the live reload server after less compiles to them
        options: { livereload: true },
        files: ['war/main/less/*.less', 'war/main/js/*.js'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less','cssmin','watch']);
}