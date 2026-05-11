import express from "express";
import { register, login, listUsers, forgot, userSearch } from "../controllers/user.controller.js";
import verifyToken from "../middleware/auth.middleware.js";
// import { app } from "../app.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/getuser", verifyToken, listUsers)

router.patch("/forgot-pass", forgot )

router.post("/search-user", userSearch)

export default router;
