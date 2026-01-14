import { action_CreateUser } from "../actions/user.action.js";
import { User } from "../models/User.model.js";
import { connectToDB } from "../../lib/db.js";
import { validationResult } from "express-validator";

export const userRegister = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(400).json({ error: true, message: error.array() });
  }
  try {
    const { email, password, fullName } = req.body;
    if (!email || !password || !fullName) {
      return res
        .status(400)
        .json({ error: true, error: "all fealds are compelsoury!" });
    }
    await connectToDB();

    const isUserAllreadyExist = await User.findOne({ email: email });
    if (isUserAllreadyExist) {
      return res
        .status(400)
        .json({ error: true, message: "User allready exist!" });
    }
    const user = await action_CreateUser({
      email,
      password,
      firstName: fullName.firstName,
      lastName: fullName.lastName,
    });

    if (!user) {
      res.status(400).json({ error: true, message: "Fail to create User!" });
    }
    return res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const experent = async (req, res) => {
  res.send("Hello world!");
};
