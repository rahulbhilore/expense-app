import jwt from "jsonwebtoken";
import { loginUser, registerUser } from "../services/user.service.js";
import dotenv from "dotenv"

dotenv.config()

const verifyToken = async (req, res, next) => {
  const authHeader = req.header("Authorization");

  try {
    if (!authHeader) {
      res.status(404).json({
        status: false,
        message: "Access Denied",
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = await jwt.verify(token, process.env.JWT_SECRET) ;

    req.user = decoded;
    next();
  } catch (error) {
    error: "Invalid Token";
  }
};

export default verifyToken;
