const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://34.93.74.17:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'network',
	    'sonar.projectKey':'network',
	    'sonar.login': 'sqp_f741d02efb6d27d1a32f33fba69855545cdfc646',
	    //'sonar.login': 'sqa_9d244c47d4ad8b7b4c98aaf53da6079f730e9774',
	    //'sonar.login': 'admin',
	    //'sonar.password': 'Qwerty',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
