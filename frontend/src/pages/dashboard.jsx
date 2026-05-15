import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setExpense, addExpense } from "../features/dashboardSlice.js";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [expenseBy, setExpenseBy] = useState("");

  const handlesetExpense = async () => {
    const response = await axiosInstance.post("/expense/create", {
      title,
      amount,
      description,
      category,
      date,
      expenseBy,
    });

    toast.success("Expense Added Successfully");
    navigate("/navbar");

    dispatch(addExpense(response.data.data));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* SIDEBAR */}
      <div className="w-64 bg-gray-900 text-white flex flex-col justify-between p-6">
        <div>
          <h1 className="text-3xl font-bold mb-10">Expense App</h1>

          <nav className="space-y-4">
            <button className="w-full text-left bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-xl transition">
              Dashboard
            </button>

            <button className="w-full text-left hover:bg-gray-800 px-4 py-3 rounded-xl transition">
              Expenses
            </button>

            <button className="w-full text-left hover:bg-gray-800 px-4 py-3 rounded-xl transition">
              Reports
            </button>

            <button className="w-full text-left hover:bg-gray-800 px-4 py-3 rounded-xl transition">
              Settings
            </button>
          </nav>
        </div>

        {/* LOGOUT */}
        <button className="bg-red-500 hover:bg-red-600 py-3 rounded-xl font-semibold transition">
          Logout
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">
        {/* NAVBAR */}
        <div className="bg-white shadow-sm px-8 py-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-semibold text-gray-800">Rahul</p>
              <p className="text-sm text-gray-500">rahul@gmail.com</p>
            </div>

            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
              R
            </div>
          </div>
        </div>

        {/* PAGE CONTENT */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* CARD 1 */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-gray-500 text-sm mb-2">Total Expenses</h3>
              <p className="text-3xl font-bold text-gray-800">₹25,000</p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-gray-500 text-sm mb-2">This Month</h3>
              <p className="text-3xl font-bold text-gray-800">₹12,000</p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-gray-500 text-sm mb-2">Total Records</h3>
              <p className="text-3xl font-bold text-gray-800">15</p>
            </div>
          </div>

          {/* ADD EXPENSE FORM */}
          <div className="bg-white rounded-3xl shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Add Expense
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* TITLE */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Title
                </label>

                <input
                  type="text"
                  placeholder="Enter expense title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* AMOUNT */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Amount
                </label>

                <input
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* CATEGORY */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Category
                </label>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Food</option>
                  <option>Travel</option>
                  <option>Shopping</option>
                  <option>Bills</option>
                  <option>Medical</option>
                </select>
              </div>

              {/* DATE */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Date
                </label>

                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* EXPENSE BY */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Expense By
                </label>

                <select
                  value={expenseBy}
                  onChange={(e) => setExpenseBy(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Rahul</option>
                  <option>Mahesh</option>
                  <option>Ashwini</option>
                  <option>Sanjay</option>
                  <option>Pushpa</option>
                  <option>Nayna</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="mt-6">
              <label className="block text-gray-700 font-medium mb-2">
                Description
              </label>

              <textarea
                rows="4"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* BUTTON */}
            <div className="mt-8 flex justify-end">
              <button
                onClick={handlesetExpense}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition"
              >
                Add Expense
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
