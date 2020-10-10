const commonSettings = {
  testPathIgnorePatterns: [
    '<rootDir>/bin',
    '<rootDir>/coverage',
    '<rootDir>/lib/',
    '<rootDir>/node_modules/',
  ],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  testEnvironment: 'node',
  watchPathIgnorePatterns: ['<rootDir>/test-out', '.*.js'],
  setupFilesAfterEnv: ['<rootDir>/src/jest-extensions.ts'],
  preset: 'ts-jest',
}

const lowLevelTestSettings = {
  moduleNameMapper: {
    '~(.*)$': '<rootDir>/src/$1',
  },
}

const unitTestSettings = {
  ...commonSettings,
  ...lowLevelTestSettings,
  displayName: 'Unit',
  testMatch: ['<rootDir>/src/**/test.ts'],
  unmockedModulePathPatterns: [],
  coverageDirectory: './coverage/unit-tests',
  coverageReporters: ['lcov', 'text', 'text-summary'],
}

module.exports = unitTestSettings
