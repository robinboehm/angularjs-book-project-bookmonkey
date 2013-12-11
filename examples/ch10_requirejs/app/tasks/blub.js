module.exports = function(grunt) {

  // A very basic log task
  grunt.registerTask('log', 'Log some stuff.', function() {
    grunt.log.writeln('Logging some stuff...'+this.data+' : '+grunt.config('log.prefix'));
  });
  
  // A very basic task with arguments
  grunt.registerTask('count', 'Count given Arguments.', function() {
    grunt.log.writeln('Arguments: '+arguments.length);
  });
  
    // A aggregation Task
  grunt.registerTask('all', ['log', 'count:a:b']);

};
