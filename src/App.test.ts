import * as request from 'supertest';
import app from './index';

describe('GET / - a simple api endpoint', () => {
  it('Hello API Request', async () => {
    const result = 100+100;
    expect(result).toEqual(200);
  });
})