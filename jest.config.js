module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  moduleNameMapper: {
    /* This "Content" must be the same with "tsconfig.json => paths" */
    '^@Src/(.*)$': '<rootDir>/src/$1',
    '^@Pages/(.*)$': '<rootDir>/pages/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@ui': '<rootDir>/src/components/ui',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
  },
};
