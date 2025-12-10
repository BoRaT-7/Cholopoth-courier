import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js"; // MongoDB User model

const router = express.Router();

// Register route
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role, hasBusiness, businessSize } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
      hasBusiness,
      businessSize: hasBusiness === "yes" ? businessSize : null,
    });

    await user.save();

    res.status(201).json({ success: true, message: "User registered successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
