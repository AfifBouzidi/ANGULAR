**Setting Up the Development Environment**   
- nodejs: is an environment to execute javascript in the server side   
- npm: node package manager to install third-party library  
- Angular CLI: tools to create new angular projects   
- npm install -g @angular/cli  
- check version: ng --version  

**Proxy configuration**
- npm config set proxy http://proxy.company.com:8080
- npm config set https-proxy http://proxy.company.com:8080  
- clear http proxy setting : npm config rm proxy
- clear https proxy setting : npm config rm https-proxy  

**First Angular App**   
- ng new hello-world
- test the application: ng serve

**Structure of Angular Projects**   
- e2e (end-to-end):where to write the end to end test of the application, simulate real user(Launch browser, navigate to the home page…)  
- node_modules: where to store third-party library  
- src: the source code of the application 
- src/app: Contains component and modules of the application  
- assets: where we store static assets of the application like images, text...  
-  environments:  Configuration settings of the environments (prod and dev)
- src/favicon : icon dispalyed in the browser
- src/index.html: the html file that contains the angular application
- src/main.ts: the started point of the application 
- src/polyfills.ts: provids javacript needed by angular but not supported by browser
- src/styles.css: global styles of the application 
- src/test.ts: setup the test environment 
  
  
