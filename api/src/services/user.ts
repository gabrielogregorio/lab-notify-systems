import { User, IUser } from '@/models/user';
import { userDto, userDtoInterface } from '@/dto/user';

export class UserService {
  static async Create({ name, email }: Partial<IUser>): Promise<userDtoInterface> {
    const newUser = new User({ name, email });
    await newUser.save();
    return userDto(newUser);
  }

  static async FindByIdAndUpdate(id: string, { name }): Promise<userDtoInterface> {
    return userDto(await User.findOneAndUpdate({ _id: id }, { $set: { name } }));
  }

  static async FindAll(): Promise<userDtoInterface[]> {
    const users = await User.find()
    console.log(users, 'aaa')
    return users.map((user) => userDto(user));
  }

  static async FindById(id: string): Promise<userDtoInterface> {
    return userDto(await User.findById(id));
  }

  static async DeleteById(id: string) {
    return User.findOneAndDelete({ _id: id });
  }
}
