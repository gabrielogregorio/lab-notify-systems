import mongoose, { Types }  from 'mongoose';

export interface IUser {
  _id: Types.ObjectId;
  name: string;
  email: string;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: String,
    email: String,
  },
  {
    timestamps: true,
  },
);

export const User = mongoose.model<IUser>('User', userSchema);
