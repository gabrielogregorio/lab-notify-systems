import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import userController from '@/controllers/userController';
import helmet from 'helmet';
import morgan from 'morgan';
import { CORS_ORIGIN } from '@/constants/envs';

export const app: Application = express();
app.disable('x-powered-by');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.static('public'));
app.use(helmet());
app.use(morgan('dev'));

app.use('/', userController);

app.get('/', (_req: Request, res: Response): Response => res.sendStatus(200));

app.post('/login', (_req: Request, res: Response) => {
  res.json({ token: '123456' });
});
