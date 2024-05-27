// jest.config.js
export default {
  setupFilesAfterEnv: ['./src/tests/setupTests.js'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx'],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
};
