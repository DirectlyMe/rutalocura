module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                       name: 'small',
                       width: 320,
                       height: 240,
                    },
                    {
                        name: 'medium',
                        width: 640
                    }, 
                    {
                        name: 'large',
                        width: 1024
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,pgn}'],
                    cwd: 'public/Images/',
                    dest: 'public/build/Images/'
                }]
            }
        },
        concat: {
            css: {
              src: ['public/css/main.css', 'public/css/responsive.css'],
              dest: 'public/build/css/style.css',
            },
          },
        clean: {
            contents: ['public/Images/*']
        }
      })
      

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', [''])
}