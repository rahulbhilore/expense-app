import {
  registerUser,
  loginUser,
  forgotPass,
  fetchUser,
  searchUser,
} from "../services/user.service.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { sendSuccess, sendError } from "../utils/responseHandler.js";

dotenv.config();

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userData = { name, email, password };

    const user = await registerUser(userData);

    return sendSuccess(res, 200, "User Created Successfully", user);
  } catch (err) {
    console.log("User Register Error: ", err);
    return sendError(res, 500, "Something Went Wrong");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await loginUser({ email, password });

    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    sendSuccess(res, 200, "User Logedin Successful", token);
  } catch (err) {
    console.log("User Login Error: ", err);
    return sendError(res, 500, "Email not Exists");
  }
};

const forgot = async (req, res) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password,
    };
    console.log("userData", userData);
    const newPass = await forgotPass(userData);
    return sendSuccess(res, 200, "Password Changed Successfully", newPass);
  } catch (error) {
    console.log("User Register Error: ", error);
    return sendError(res, 500, "Something Went Wrong");
  }
};

const listUsers = async (req, res) => {
  try {
    const user = await fetchUser();
    return sendSuccess(res, 200, "User Fetched Successfully", user);
  } catch (error) {
    console.log("User Register Error: ", error);
    return sendError(res, 500, "No users found");
  }
};

const userSearch = async (req, res) => {
  try {
    const data = req.body.query;

    console.log("query: ", data);

    const result = await searchUser(data);
    return sendSuccess(res, 200, "User Found Successfully", result);
  } catch (error) {
    console.log("User Register Error: ", error);
    return sendError(res, 500, "User not found");
  }
};

export { register, login, listUsers, forgot, userSearch };
