import User from "./user.model.js";
import Expense from "./expense.model.js";

User.hasMany(Expense, {
    foreignKey: "userId",
    as : "expenses"
})

Expense.belongsTo(User,{
    foreignKey: "userId",
    as: "user"
})