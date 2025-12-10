// src/controllers/auth.controller.js
import User from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";

// Register - Customer
export const registerCustomer = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({
      name,
      email,
      password,
      phone,
      address,
      role: "customer",
    });

    await user.save();

    const token = generateToken(user._id, user.email, user.role);

    res.status(201).json({
      message: "Customer registered successfully",
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
      token,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Register - Delivery Agent
export const registerAgent = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      nid,
      licenseNumber,
      vehicleType,
      vehicleNumber,
      address,
    } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({
      name,
      email,
      password,
      phone,
      nid,
      licenseNumber,
      vehicleType,
      vehicleNumber,
      address,
      role: "agent",
      isVerified: false, // admin verify করবে
    });

    await user.save();

    const token = generateToken(user._id, user.email, user.role);

    res.status(201).json({
      message: "Agent registration submitted for verification",
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
      token,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = generateToken(user._id, user.email, user.role);

    res.json({
      message: "Login successful",
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
      token,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
