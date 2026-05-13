import { where} from "sequelize";
import sequelize from "../config/database.js";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { Op } from "sequelize";


const registerUser = async ({ name, email, password }) => {
  const hashpass = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashpass,
  });

  return user;
};

const loginUser = async ({ email, password }) => {
  const users = await User.findOne({ where: { email } });

  if (!users) {
    throw new Error("Email not exists");
  }

  const hashpass = await bcrypt.compare(password, users.password);

  if (!hashpass) {
    throw new Error("Incorrect Password");
  }
  console.log("users: ", users);
  return users;
};

const forgotPass = async ({ email, password }) => {
  const user = await User.findOne({
    where: { email },
  });

  if (!user) {
    throw new Error();
  }
  const hashpass = await bcrypt.hash(password, 10);
  const updatedPass = await User.update(
    { password: hashpass },
    { where: { id: user.id } },
  );

  return updatedPass;
};

const fetchUser = async () => {
  const users = await User.findAll();

  if (users.length === 0) {
    throw new Error("No user found");
  }

  return users;
};

const searchUser = async (query) => {
  const user = await User.findAll({
    where: {
      name: {
        [Op.like]: `%${query}%`,
      },
    },
  });

  console.log("user query" ,query)

  if (user.length === 0) {
    throw new Error();
  }

  return user;
};

export { registerUser, loginUser, fetchUser, forgotPass, searchUser };
