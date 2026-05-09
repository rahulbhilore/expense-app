import { registerUser, loginUser } from "../services/user.service.js";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userData = {
      name,
      email,
      password,
    };

    console.log("data", req);

    const user = await registerUser(userData);

    res.status(201).json({
      success: true,
      message: user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await loginUser({email, password});

    

    res.status(200).json({
      status: "Login Successful",
      email: user,
    });
  } catch (err) {
    
    res.status(401).json({
      status: "Invalid Credentials",
      message: err.message,
    });
  }
};

export  {register, login};
