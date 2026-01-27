# Thoughtful Technical Screen
Technical Screen for Thoughtful Full Stack role for Patrick Armentrout.

This solution is built as an express App with TypeScript. It includes Jest API and unit tests to ensure accuracy.

## Prerequisites
- npm
- Node.js >= 20

## Getting Started
Run the following in a terminal
```
npm i
npm run dev
```
The server will start on `http://localhost:3000`

## Testing the code

With the server running, add a new console and hit the APIs directly using a supertest integration test:

```
npm run test

PASS  tests/sort.test.ts
  POST /sort
    ✓ returns ok and STANDARD sort for valid parameters (22 ms)
    ✓ returns 400 for invalid parameters (2 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
```
And then follow that with unit testing via
```
npm run test:unit

PASS  src/sort.unit.test.ts
  sort(width, height, length, mass)
    ✓ returns STANDARD for small and light packages (1 ms)
    ✓ returns SPECIAL for bulky packages
    ✓ returns SPECIAL for heavy packages
    ✓ returns REJECTED for bulky and heavy packages
```