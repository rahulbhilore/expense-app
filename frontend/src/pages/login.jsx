import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../features/authSlice";
import { useState } from "react";
import axiosInstance from "../utils/axiosInstance.js";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try{
    const response = await axiosInstance.post(
        "/user/login",
        {
            email,
            password,
        }
    )

    console.log(response.data);

    dispatch(setUser({
        user: response.data.data.user,
        token: response.data.data.token
    }))

    navigate("/navbar")
    toast.success("Login Successful");

}catch(error){
    console.log(error)
    toast.error("Invalid Credentails")
}
  };

  console.log(handleSubmit)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center px-4">
  <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome Back
      </h1>

      <p className="text-gray-500 mt-2">
        Login to continue
      </p>
    </div>

    <div className="space-y-5">

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button onClick={handleSubmit} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition duration-300">
        Login
      </button>
    </div>

    <p className="text-center text-gray-500 text-sm mt-6">
      Don&apos;t have an account?
      <span className="text-blue-600 font-semibold cursor-pointer ml-1">
        
        <Link to="/register"> Register </Link>
      </span>
    </p>
  </div>
</div>
  );
};

export default Login;
