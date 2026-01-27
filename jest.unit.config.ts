import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,

  testMatch: ['**/src/**/*.unit.test.ts']
};

export default config;
