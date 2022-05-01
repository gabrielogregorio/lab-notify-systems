import { IUser } from '@/models/user';

export type userDtoInterface = {
  id: string;
  name: string;
  email: string;
};

export const userDto = (user: IUser): userDtoInterface => {
  if (!user) {
    return null;
  }

  return {
    id: user?._id?.toString(),
    name: user?.name,
    email: user?.email,
  };
};
