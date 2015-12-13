###Mini boilerplate for practicing ES6 features

This repo has been created for giving a really simple boilerplate to practice ES6 features. For now 
It uses 
- **Gulp** for task running,
- **Webpack** to handle your modules,
- **Karma** for running your tests,
- **Mocha** and **Chai** for your tests,
- **Babel** for transpiling your code,
- **ESLint** for linting your code,
- **PhantomJS** headless browser as an environment for the tests,
- **Sinon** as mocking framework.

####Prerequisities

- Node installed globally
- Gulp installed globally

####Using the boilerplate

Clone the repo and install the node packages (`npm install`). 

After that you can test the framework by `gulp karma` (or `npm run test`).

#####Gulp Tasks

- the default task (`gulp`) runs linting and transpliles your javascript files located in `src` folder 
and saves them into `dist` folder. 
- `gulp karma`: runs your test in `test` folder once
- `gulp karma-watch`: runs your test in `test` folder, and after changing some file in `src` or `test` folder 
runs the tests again.
- `gulp watch`: lints your files and watch their changes.

You have to save your tests into `test` folder as `*.spec.js`.



