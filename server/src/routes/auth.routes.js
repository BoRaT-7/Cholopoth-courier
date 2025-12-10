// src/routes/auth.routes.js
import express from "express";
import {
  registerCustomer,
  registerAgent,
  login,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", registerCustomer);
router.post("/agent-register", registerAgent);
router.post("/login", login);

export default router;
