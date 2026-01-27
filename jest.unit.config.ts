import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,

  // Unit tests live next to code
  testMatch: ['**/src/**/*.unit.test.ts']
};

export default config;
