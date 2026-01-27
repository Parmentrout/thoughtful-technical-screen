import express from 'express';
import { SortInput } from './models/sort';
import { isValidateRequest } from './request-validator';
import { sort } from './sort';

export function createApp() {
  const app = express();
  app.use(express.json());

  app.post('/sort', (_req, res) => {
    const { width, height, length, mass } = _req.body ?? {};
    const input: SortInput = {
        width,
        height,
        length,
        mass
    };
    if (!isValidateRequest(input)) {
        return res.status(400).json({
        error: `Invalid request body for input: ${JSON.stringify(input)}`,
      });
    };

    const stack = sort(input);

    res.json({ stack });
  });

  return app;
}


