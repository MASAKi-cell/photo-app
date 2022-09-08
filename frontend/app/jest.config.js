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
    collectCoverage: false,
    compilerOptions: {
        "baseUrl": ".",
        "paths": {
          "@/*": ["src/*"]
        }
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
      },
}