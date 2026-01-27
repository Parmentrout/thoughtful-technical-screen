import request from 'supertest';
import { createApp } from '../src/app';

describe('POST /sort', () => {
  it('returns ok and STANDARD sort for valid parameters', async () => {
    const app = createApp();

    const res = await request(app).post('/sort').send({
        width: 10,
        height: 10,
        length: 10,
        mass: 1
    });

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ stack: 'STANDARD' });
  });

  it('returns 400 for invalid parameters', async () => {
    const app = createApp();
    const input = {
        width: 'invalid',
        height: 10,
        length: 10,
        mass: 1
    };

    const res = await request(app).post('/sort').send(input);

    expect(res.status).toBe(400);
    expect(res.body).toEqual({ error: `Invalid request body for input: ${JSON.stringify(input)}` });
  });
});
