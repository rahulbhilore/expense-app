import {
  registerUser,
  loginUser,
  forgotPass,
  fetchUser,
  searchUser,
} from "../services/user.service.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userData = {
      name,
      email,
      password,
    };

    console.log("data", req);

    const user = await registerUser(userData);

    res.status(201).json({
      success: true,
      message: user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await loginUser({ email, password });

    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    res.status(200).json({
      token,
      status: "Login Successful",
      email: user,
    });
  } catch (err) {
    res.status(401).json({
      // status: "Invalid Credentials",
      // message: err.message,
    });
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
    res.status(200).json({
      status: true,
      message: "Password updated successfully",
      data: newPass,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      status: false,
      message: "Email not exist",
    });
  }
};

const listUsers = async (req, res) => {
  try {
    const user = await fetchUser();
    res.status(200).json({
      status: true,
      message: "User Fetched Successful",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      message: error.message,
    });
  }
};

const userSearch = async (req, res) => {
  try {
    const data = req.body.query 

    console.log("query: ", data)

    const result = await searchUser(data);
    res.status(200).json({
      status: true,
      message: "User Found",
      data: result
    });
  } catch (error) {
    console.log("search user error: ", error.message);
    res.status(400).json({
      status: false,
      message: "User not found",
    });
  }
};

export { register, login, listUsers, forgot, userSearch };
