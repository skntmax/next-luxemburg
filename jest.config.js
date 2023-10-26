module.exports = {
    // Specify the test environment, e.g., jsdom for browser-like environment.
    testEnvironment: 'jsdom',
  
    // Define the test regex pattern to match your test files.
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
  
    // Specify the test runner. The default is "jasmine".
    testRunner: 'jest-circus/runner',
  
    // Define the directories to search for tests in.
    roots: ['<rootDir>'],
  
    // List of test environments to use for different test suites.
    // Example: { 'testEnvironment': './custom-environment.js' }
    // (you can create a custom environment if needed).
  
    // Configure Jest to use various transformers like Babel for JavaScript files.
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
  
    // Additional configuration options...
  
    // List of test paths to ignore.
    // testPathIgnorePatterns: ['/node_modules/'],
  
    // Configure reporters for test results.
    // reporters: ['default'],
  
    // Set up module paths and aliases if needed.
    // moduleNameMapper: {
    //   '^@/(.*)$': '<rootDir>/src/$1',
    // },
  
    // More options for customizing Jest's behavior...
  
    // Example: Enable collectCoverage for code coverage reporting.
    // collectCoverage: true,
    // coverageDirectory: 'coverage',
  
    // List of global setup and teardown modules.
    // globalSetup: './global-setup.js',
    // globalTeardown: './global-teardown.js',
  };
  
  