import User from "../models/user.model.js";
import Expense from "../models/expense.model.js";
import dotenv from "dotenv";

dotenv.config();

const createExpenseService = async ({
  title,
  amount,
  description,
  category,
  date,
  expenseBy,
}) => {
  const expense = await Expense.create({
    title,
    amount,
    description,
    category,
    date,
    expenseBy,
  });

  if (expense.length === 0) {
    throw new Error();
  }

  return expense;
};

const getExpenseService = async (id) => {
  const expense = await Expense.findAll({ where: { userId: id } });

  if (expense.length === 0) {
    throw new Error();
  }

  return expense;
};

const updateExpenseService = async ({
  id,
  title,
  amount,
  description,
  category,
  date,
  expenseBy,
}) => {
  const updateExpense = await Expense.update(
    {
      title,
      amount,
      description,
      category,
      date,
      expenseBy,
    },
    {
      where: {
        id,
      },
    },
  );

  if (updateExpense.length === 0) {
    throw new Error();
  }

  return updateExpense;
};


const deleteExpenseService = async (id)=>{

    const deleteExpense = await Expense.destroy({where: {id}})

    if(id.length === 0){
        throw new Error
    }

    return deleteExpense
}

export { createExpenseService, getExpenseService, updateExpenseService, deleteExpenseService };
