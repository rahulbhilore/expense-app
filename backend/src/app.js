import express from "express";
import { register } from "./controllers/user.controller.js";
import userRoute from "./routes/user.route.js";
import expenseRoute from "./routes/expense.route.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());

const router = express.Router();

// Routes
app.use("/api/user", userRoute);

app.use("/api/expense", expenseRoute);

// Create Server

app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(3000, (req, res) => {
  console.log("Server Started");
});

export default app;
