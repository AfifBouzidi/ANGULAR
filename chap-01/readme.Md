**Setting Up the Development Environment**   
- nodejs: is an environment to execute javascript in the server side   
- npm: node package manager to install third-party library  
- Angular CLI: tools to create new angular projects   
- npm install -g @angular/cli  
- check version: ng --version 
- npm install : the npm looks at the package.json and install dependecies 

**Proxy configuration**
- npm config set proxy http://proxy.company.com:8080
- npm config set https-proxy http://proxy.company.com:8080  
- clear http proxy setting : npm config rm proxy
- clear https proxy setting : npm config rm https-proxy  

**Error: Cannot find module '@angular-devkit/core'**   
- npm update -g @angular/cli
- editing my package.json changing the line: "@angular/cli": "1.6.0" -> "@angular/cli": "^1.6.0"
- npm update

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
- .angular-cli.json: configuration fo angular cli
- .editorconfig: all dev team member must have the same config
- .gitignore: files to be egnored by git
- karma.conf.js: test runner of javascript code 
- package.json : name and version of the application, dependencies, - devdependencies...
- protractor.conf.js: run end to end test
-tsconfig.json: config of typescipt compiler 
- tslint.json: static analysis code of typescript 

**Webpack**  
- Angular/cli uses a tool called webpack: build automation tool
- Minify dependencies and create bundles
- Optimization

**Building Blocks of Angular Apps**   
*Component*  
- Component encapsulates : data, html and logic for view 
- Every application is composed by one or several components 
- We can reuse a component in multiple places in the same App or different App
1. create a class 
2. export it 
3. add and configure decorator @Component: selector, templateUrl, 
styleUrls 
4. register the component in the module: AppModule (app.module.ts)

 - Alternative way  to Generate Components Using Angular CLI: ng g c math

*Modules* 
- Module is a container of group of related components
- Every Angular App has at least one module called AppModule
- As the application grows the AppModule is divided in small modules 
- Each module is responsible of a specific area of the application

*Template*   
Angular manages what the user sees and can do through the interaction of a component class instance (the component) and its user-facing template

*Directives*  
Directive is used to manipulate the HTML dom: add elements, modify,delete...

*service*  
- A class contains the business logic (comunicate via http...)
- register service in the provider section of the AppModule 
- Generating Services Using Angular CLI: ng g s serviceName
- @Injectable : used if the service need dependecies

*Dependency Injection*  
to activate dependecy injection, dependecies must be registred in the AppModule (in the provider section)