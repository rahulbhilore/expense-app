import sequelize from "../config/database.js";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const registerUser = async ({ name, email, password }) => {
  const hashpass = await bcrypt.hash(password, 10);

  console.log("pass: ", hashpass);

  const user = await User.create({
    name,
    email,
    password: hashpass,
  });

  return user;
};

const loginUser = async ({ email, password }) => {


  const user = await User.findOne({ where: { email } });

  const hashpass = await bcrypt.compare(password, user.password)

  if (!user) {
    throw new Error("Email not exists");
  }
  if (!hashpass) {
    throw new Error("Incorrect Password");
  }
  return {email:user.email, name:user.name};
};

export { registerUser, loginUser };
