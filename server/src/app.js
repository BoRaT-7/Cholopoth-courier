// src/app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import agentRoutes from "./routes/agent.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); // important for axios JSON body

app.use("/api/auth", authRoutes);
app.use("/api/agent", agentRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Server is running 🚀" });
});

export default app;
