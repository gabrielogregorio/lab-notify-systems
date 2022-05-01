import { UserService } from '@/services/user';
import express, { Request, Response, Router } from 'express';
import { userDtoInterface } from '@/dto/user';

const userController: Router = express.Router();

userController.post('/user', async (req: Request, res: Response): Promise<Response> => {
  const { name, email } = req.body;

  const user: userDtoInterface = await UserService.Create({ name, email });

  return res.json(user);
});

userController.put('/user/:id', async (req: Request, res: Response): Promise<Response> => {
  const { name } = req.body;
  const { id } = req.params;

  const user: userDtoInterface = await UserService.FindByIdAndUpdate(id, { name });

  return res.json(user);
});

userController.get(
  '/users',
  async (_req: Request, res: Response): Promise<Response> => res.json(await UserService.FindAll()),
);

userController.get('/user/:id', async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const user: userDtoInterface = await UserService.FindById(id);

  return res.json(user);
});

userController.delete('/user/:id', async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;

  await UserService.DeleteById(id);

  return res.sendStatus(200);
});

export default userController;
