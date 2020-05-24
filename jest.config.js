module.exports = {
  roots: ['<rootDir>/src/'],
  moduleFileExtensions: ['js', 'json'],
  moduleDirectories: ['node_modules'],
  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  transform: {
    '^.+\\.(js|jsx)?$': './node_modules/babel-jest',
  },
  testEnvironment: 'jsdom',
  testRegex: '.*.test.js',
  testPathIgnorePatterns: ['/node_modules/', '__snapshots__'],
  verbose: true,
};
