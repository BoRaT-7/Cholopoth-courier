// src/routes/authRoutes.js
import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";

const router = express.Router();

// REGISTER (customer/agent/admin common)
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role, hasBusiness, businessSize } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
      hasBusiness,
      businessSize: hasBusiness === "yes" ? businessSize : null,
    });

    await user.save();

    return res
      .status(201)
      .json({ success: true, message: "User registered successfully!" });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Server error" });
  }
});

// ✅ AGENT REGISTER (always role: 'agent')
router.post("/agent/register", async (req, res) => {
  try {
    const { name, email, password, phone, vehicleType, nidNumber } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Agent already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const newAgent = new User({
      name,
      email,
      password: hashed,
      role: "agent", // IMPORTANT
      phone,
      vehicleType,
      nidNumber,
    });

    await newAgent.save();

    return res
      .status(201)
      .json({ success: true, message: "Agent registered" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

// NORMAL LOGIN (any role)
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id, user.email, user.role);

    return res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

// ✅ AGENT ONLY LOGIN
router.post("/agent/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // only agents
    const user = await User.findOne({ email, role: "agent" });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Agent not found or role mismatch" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id, user.email, user.role);

    return res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;
