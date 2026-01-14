import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
  fullName: {
    firstName: {
      type: String,
      minleng: [3, "min length must be 3"],
      require: true,
    },
    lastName: {
      type: String,
      minleng: [3, "min length must be 3"],
    },
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
    select: false,
  },
  socketId: {
    type: String,
    require: false,
  },
});

UserSchema.method.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
UserSchema.statics.hashedPassword = async function (password) {
  return bcrypt.hash(password, 10);
};
UserSchema.method.generateJwtToken = async function () {
  return jwt.sign({ _id: this._id }, JWT_SECRET_KEY, { expiresIn: "24h" });
};

export const User = mongoose.model("User", UserSchema);
