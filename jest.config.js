/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const customJestConfig = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['node_modules'],
  moduleNameMapper: {
    '^@auth/(.*)$': '<rootDir>/src/auth/$1',
    '^@article/(.*)$': '<rootDir>/src/article/$1',
    '^@comment/(.*)$': '<rootDir>/src/comment/$1',
    '^@profile/(.*)$': '<rootDir>/src/profile/$1',
    '^@tag/(.*)$': '<rootDir>/src/tag/$1',
    '^@common/(.*)$': '<rootDir>/src/common/$1',
  },
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'jest-plugin-context/setup',
  ],
  verbose: true,
};

module.exports = createJestConfig(customJestConfig);
