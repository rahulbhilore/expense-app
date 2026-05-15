import { createSlice } from "@reduxjs/toolkit";
// import reducer from "./authSlice";

const initialState = {
 expenses: [],
};

const dashboardSlice = createSlice({
  name: "expense",
  initialState,

  reducers: {
    setExpense: (state, action) => {
      state.expenses = action.payload;
    },
    addExpense: (state, action)=>{
        state.expenses.push(action.payload);
    }
  },
});


export const {setExpense, addExpense} = dashboardSlice.actions

export default dashboardSlice.reducer   