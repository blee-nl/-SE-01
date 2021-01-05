// Required to be set up in the tests to provide configuration for the application.
process.env.APP_ENV = 'development';

module.exports = {
  modulePaths: ['<rootDir>/src/'],
  moduleNameMapper: {
    '\\.(jpg|png|svg)$': '<rootDir>/file-mock.js',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testMatch: ['<rootDir>/src/**/tests/**/*.(spec|test).js'],
  collectCoverage: true,
  coverageDirectory: 'reports/unit',
  coverageReporters: ['html-spa', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 40,
      lines: 50,
      statements: 50,
    },
  },
};
