# Présentation de Grunt.js
___
#### Pour bien commencer :

1. Installation :
	+ `npm install -g grunt-cli` (attention au `sudo`)
	+ `mkdir grunt-project`
	+ `cd grunt-project`
	
	* `npm init` 
	* rentrer le nom de votre projet : `name : (grunt-project) exemple-grunt-project`
	* laisser la version par defaut 	  : `version :(1.0.0)`
	* mettre une description : `description : Un exemple application avec Grunt`
	* laisser les autres champs vides sauf pour `author:` 
	* à la question `Is this ok ? (yes)` mettre entrer.
	
2. Création du `package.json` pour Grunt
	
	+ `npm install --save-dev grunt` (attention `sudo`).

#### Installation Basique :
  On  a besoin de créer un fichier `gruntfile.js` comprenant :
  
  ``` javascript
  module.exports = function (grunt) {
     'use strict';
  
  grunt.registerTask('default', function(){
  	grunt.log.writeln('grunt running...');
  });
  
  }
  
  ```
  + Si on ajoute un autre paramètre a `grunt.registerTask('default','un exemple de tâche' function(){});` alors on peut voir s'afficher une option dans `grunt --help`
  
 Donc on a le minimmum pour faire tourner une application avec grunt.
 ___
 
#### Création d'une tâche :
On reprend la base de du fichier `gruntfile.js`:

``` javascript
  module.exports = function (grunt) {
     'use strict';
  
  grunt.registerTask('running', function(){
  	grunt.log.writeln('grunt running...');
  });
  
  }
  
  ```
  + on lance ensuite : `grunt running` dans le terminal. // on a creé la tâche running.
  
  + {BONUS} 
  	+ lancer une tâche avec paramètre : 
  	
  ```
  module.exports = function (grunt) {
     'use strict';
  
  grunt.registerTask('running', function(arg){
  	grunt.log.writeln('grunt running...'+ arg);
  });
  
  }
  ```
  a tester : `grunt running:test` 
#### Configurer une/des tâches :

+ La base :

``` javascript
grunt.initConfig({
	running :{
			taskOwner :'Roro'
		}
		});
		...
	grunt.log.writeln('grunt running ...'+ arg, grunt.config.get('running.taskOwner));
		
``` 
 + liaison avec un fichier :
 
 
 ``` javascript
grunt.initConfig({
	running :{
			taskOwner :'Roro',
			src : 'js/somefile.js' 
		}
		});
		...
	grunt.log.writeln(grunt.config.get('running.src'));
		
``` 
  
  
	