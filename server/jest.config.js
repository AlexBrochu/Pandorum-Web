module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/test/**/*.test.(ts|js)'],
  testEnvironment: 'node',
  moduleNameMapper: {
    '^Root/(.*)$': '<rootDir>/src/$1',
    '^Assets/(.*)$': '<rootDir>/assets/$1',
  },
}
