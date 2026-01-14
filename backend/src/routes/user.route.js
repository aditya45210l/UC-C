import { Router } from "express";
import { userRegister } from "../controllers/User.controller.js";
import { body } from "express-validator";

const userRouter = Router();

userRouter.post(
  "/register",
  [
    body("email")
      .trim()
      .escape()
      .exists()
      .notEmpty()
      .withMessage("Email address is required")
      .bail()
      .isLength({
        min: 3,
        max: 100,
      })
      .isEmail(),
    body("password")
      .trim()
      .escape()
      .exists()
      .notEmpty()
      .withMessage("password address is required")
      .bail()
      .isLength({
        min: 3,
        max: 100,
      }),
    body("fullName.firstName")
      .trim()
      .escape()
      .exists()
      .notEmpty()
      .withMessage("full name is required")
      .bail()
      .isLength({
        min: 3,
        max: 100,
      }),
  ],
  userRegister
);

export default userRouter;
