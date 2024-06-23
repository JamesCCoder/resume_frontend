module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(pdf)$': '<rootDir>/jest.fileMock.js',
    '^Project1/(.*)$': '<rootDir>/src/Project1/$1',
    '^MainPage/(.*)$': '<rootDir>/src/MainPage/$1',
    '^static/(.*)$': '<rootDir>/src/static/$1',
    '^api$': '<rootDir>/src/api.tsx',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
    // Ignore patterns
  coveragePathIgnorePatterns: [
    // '<rootDir>/node_modules/',
    // '<rootDir>/src/some-directory-to-ignore/', 
    // '<rootDir>/src/some-file-to-ignore.ts', 
    '<rootDir>/scripts/test.js'
  ],
  testPathIgnorePatterns: [
    // '<rootDir>/node_modules/',
    // '<rootDir>/src/some-directory-to-ignore/', // 忽略某个文件夹
    // '<rootDir>/src/some-file-to-ignore.test.ts', // 忽略某个测试文件
    '<rootDir>/scripts/test.js'
  ],
};
