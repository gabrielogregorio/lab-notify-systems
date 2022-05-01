/* eslint-disable no-underscore-dangle */
import supertest from 'supertest';
import { app } from '../app';

const request = supertest(app);

describe('Login', () => {
  it('should login in API', async () => {
    const response = await request.post('/login');

    const { token } = response.body;

    expect(token).toEqual('123456');
  });
});
