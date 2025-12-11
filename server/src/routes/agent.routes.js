// src/routes/agent.routes.js
import express from "express";
import bcrypt from "bcryptjs";
import Agent from "../models/Agent.js";
import { generateToken } from "../utils/generateToken.js";

const router = express.Router();

// agent register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, phone, vehicleType, nidNumber } = req.body;

    const existing = await Agent.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Agent already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const agent = await Agent.create({
      name,
      email,
      password: hashed,
      phone,
      vehicleType,
      nidNumber,
    });

    return res.status(201).json({
      message: "Agent registered successfully",
      agent: {
        id: agent._id,
        name: agent.name,
        email: agent.email,
      },
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Server error" });
  }
});

// agent login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const agent = await Agent.findOne({ email });
    if (!agent) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, agent.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(agent._id, agent.email, "agent");

    return res.json({
      user: {
        id: agent._id,
        name: agent.name,
        email: agent.email,
        role: "agent",
      },
      token,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;
