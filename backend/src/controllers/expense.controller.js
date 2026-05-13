import {
  createExpenseService,
  getExpenseService,
  updateExpenseService,
  deleteExpenseService,
} from "../services/expense.service.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { sendError, sendSuccess } from "../utils/responseHandler.js";
dotenv.config();

const createExpense = async (req, res) => {
  try {
    const { title, amount, description, category, date, expenseBy } = req.body;

    const expense = await createExpenseService(req.body);
    return sendSuccess(res, 200, "Expense Created Successfully", expense);
  } catch (error) {
    console.log("User Register Error: ", error);
    return sendError(res, 500, "Something Went Wrong");
  }
};

const getExpense = async (req, res) => {
  try {
    const id = req.params.id;

    const expenses = await getExpenseService(id);

    console.log(expenses);

    return sendSuccess(res, 200, "Expenses fetched Successfully", expenses);
  } catch (error) {
    console.log("User Register Error: ", error);
    return sendError(res, 500, "No Expense Found");
  }
};

const updateExpense = async (req, res) => {
  try {
    const data = {
      id: req.params.id,
      title: req.body.title,
      amount: req.body.amount,
      description: req.body.description,
      category: req.body.category,
      date: req.body.category,
      expenseBy: req.body.expenseBy,
    };

    const updatedExpense = await updateExpenseService(data);
    return sendSuccess(
      res,
      200,
      "Expense Updated Successfully",
      updatedExpense,
    );
  } catch (error) {
    console.log("Update Expense Error: ", error);
    return sendError(res, 500, "Something Went Wrong");
  }
};

const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    console.log(id);

    const deletedExpense = await deleteExpenseService(id);
    return sendSuccess(
      res,
      200,
      "Expense Deleted Successfully",
      deletedExpense,
    );
  } catch (error) {
    console.log("Delete Expense Error: ", error);
    return sendError(res, 500, "Something Went Wrong");
  }
};

export { createExpense, getExpense, updateExpense, deleteExpense };
