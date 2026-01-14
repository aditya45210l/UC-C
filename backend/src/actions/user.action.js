import { User } from "../models/User.model.js";

export const action_CreateUser = async ({
  email,
  password,
  firstName,
  lastName,
}) => {
  if (!email || !password || !firstName) {
    throw new Error("All fealds are required!");
  }
  const user = await User.create({
    email,
    password,
    fullName: {
      firstName,
      lastName,
    },
  });

  return user;
};
