// server/src/app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import agentRoutes from "./routes/agent.routes.js";
import parcelRoutes from "./routes/parcelRoutes.js";

dotenv.config();

const app = express();          // ✅ আগে app বানাও

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/agent", agentRoutes);
app.use("/api/parcels", parcelRoutes);   // ✅ এখন use করো

app.get("/", (req, res) => {
  res.json({ message: "Server is running 🚀" });
});

export default app;
