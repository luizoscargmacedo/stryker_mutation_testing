# Stryker - Mutation Testing

## Mutation Testing 
## Java Script - Jest - Stryker

It's fast, scalable, and integrates with modern tests and build tooling.
Faults (or mutations) are automatically seeded into your code, then your tests are run. 

The quality of your tests can be gauged from the percentage of mutations killed.

To put it another way - Stryker runs your unit tests against automatically modified versions of your application code. When the application code changes, it should produce different results and cause the unit tests to fail. If a unit test does not fail in this situation, it may indicate an issue with the test suite.

You can use a mutant to help with ensuring the test coverage!

It is a good practice to validate your Unit Testing with a mutant before CI/CD, or we can make it part of the CI process (be careful, each team needs to do a time impact analysis about mutation testing in your project).

Video: xxxxxxxxxxxxxxxxx

#### Frameworks básicos: 
- Node.js, Jest and Stryker
_____________________________________________

### Environment Configuration ###
### Installation ###
JEST
   - url: https://archive.jestjs.io/docs/en/22.x/getting-started.html

    To install  (Terminal command):
    ```sh
    npm install jest-cli --save-dev
    ```

Stryker Mutation Testing
   - url: https://stryker-mutator.io/

    To install  (Terminal command):
    ```sh
    npm i --save-dev @stryker-mutator/core @stryker-mutator/jest-runner 
    ```

_____________________________________________

### Configuration Project ###
 Mutation Testing in Software Testing: Mutant Score & Analysis Example 
   - url: https://lnkd.in/dAbYmbc

 Mutation Testing 
   - url: https://lnkd.in/dwaW-KH

_____________________________________________


### Execution Project ###

To Run the unit test (Terminal command):
```sh
npm test
```

To Run the unit test (Terminal command):
```sh
npx stryker run
```
  
_____________________________________________
  
**Version:** 1.0 <br>
**Created:** 2021-05-16

E-mail: luiz.gmacedo@gmail.com



