import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/authSlice.js"
import expenseReducer from "../features/dashboardSlice.js"

export const store = configureStore({
  reducer: {

    user: userReducer,
    expense : expenseReducer

  },
  
}

);






