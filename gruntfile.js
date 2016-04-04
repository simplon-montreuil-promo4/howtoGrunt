module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		running :{
			taskOwner :'Roro'
		}
		});
  
  grunt.registerTask('running', function(arg){
  	grunt.log.writeln('grunt running...'+ arg);
  });
  
  }