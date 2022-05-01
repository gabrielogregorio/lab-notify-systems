import mongoose from 'mongoose';

export const connection = mongoose;

connection
  .connect('mongodb://127.0.0.1:27017/test-notify', {})
  .then(() => null)
  .catch((error) => error);
