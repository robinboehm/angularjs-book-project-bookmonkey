module.exports = function(grunt) {

	//[...]
	
// Register Multi Task
	grunt.registerMultiTask('Multilog', 'Log stuff.', function() {
		grunt.log.writeln('args: '
									+ arguments.length 
									+ '\n'
									+ this.target 
									+ ': ' 
									+ this.data);
	});  
  	//[...]

};
