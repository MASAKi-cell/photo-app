module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    globals: {
        'ts-jest': {
          tsconfig: "./test/tsconfig.json",
        }
      },
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    roots: ['<rootDir>/test', '<rootDir>/src'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
      },
    collectCoverage: false,
    collectCoverageFrom: [
      '**/*.{ts,tsx}',
      '!**/functions/**',
      '!**/handlers/**',
      '!**/node_modules/**',
      '!**/tests/**',
    ],
    testTimeout: 300000,
    // moduleNameMapper: {
        // "^@/(.*)$": "<rootDir>/src/$1",
    //   },
}