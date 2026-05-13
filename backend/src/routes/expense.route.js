import express from "express";
import {createExpense, getExpense, updateExpense, deleteExpense} from "../controllers/expense.controller.js";
import verifyToken from "../middleware/auth.middleware.js";



const router = express.Router();


router.post("/create" , createExpense)

router.get("/get/:id", getExpense)

router.patch("/update/:id", updateExpense)

router.delete("/delete/:id", deleteExpense)


export default router;