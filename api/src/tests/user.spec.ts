/* eslint-disable no-underscore-dangle */
import { connection } from '@/config/testDb';
import { userDtoInterface } from '@/dto/user';
import supertest from 'supertest';
import { app } from '../app';

const request = supertest(app);

let userId = '';

afterAll(async () => {
  connection.connection.close();
});

beforeAll(async () => {
  const responseAllUsers = await request.get(`/users`);

  await responseAllUsers.body.map(async (user: userDtoInterface) => {
    return await request.delete(`/user/${user.id}`);
  });
});

describe('E2E - Crud users', () => {
  it('should register a user', async () => {
    const response = await request.post('/user').send({
      name: 'Lucas',
      email: 'Santos',
    });

    const { name, email, id } = response.body;
    userId = id;

    expect(response.statusCode).toEqual(200);
    expect(name).toEqual('Lucas');
    expect(email).toEqual('Santos');
  });

  it('should edit user', async () => {
    const response = await request.put(`/user/${userId}`).send({
      name: 'Marcela',
    });

    expect(response.statusCode).toEqual(200);
  });

  it('should get one user', async () => {
    const response = await request.get(`/user/${userId}`);

    const { id, name, email } = response.body;

    expect(id).toEqual(userId);
    expect(name).toEqual('Marcela');
    expect(email).toEqual('Santos');
    expect(response.statusCode).toEqual(200);
  });

  it('should get All users', async () => {
    const response = await request.get(`/users`);

    const { id, name, email } = response.body[0];

    expect(id).toEqual(userId);
    expect(response.body.length).toEqual(1);
    expect(name).toEqual('Marcela');
    expect(email).toEqual('Santos');
    expect(response.statusCode).toEqual(200);
  });

  it('should delete a user', async () => {
    const response = await request.delete(`/user/${userId}`);
    const responseAllUsers = await request.get(`/users`);

    expect(response.statusCode).toEqual(200);
    expect(responseAllUsers.statusCode).toEqual(200);
    expect(responseAllUsers.body.length).toEqual(0);
  });
});
