import { PORT } from '@/constants/envs';
import appWs from './ws';
import { app } from './app';
import mongoose from 'mongoose';
import { UserService } from './services/user';

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => null)
  .catch((error) => error);

const server = app.listen(PORT);

const wss = appWs(server);


const handleNewUsers = () => {
  
}

setInterval(() => {
  UserService.FindAll().then((res) => {
    wss.broadcast({ n: Math.random(), users: res });
  })
  
}, 1000);
