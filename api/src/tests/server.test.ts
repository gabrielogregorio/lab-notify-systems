import supertest from 'supertest';
import { app } from '../app';

const request = supertest(app);

describe('Testa se o servidor está rodando', () => {
  it('A aplicação deve responder', () =>
    request.get('/').then((res) => {
      expect(res.statusCode).toEqual(200);
    }));
});
