import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role, hasBusiness, businessSize } = req.body;

    // 1. check if already exists
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Email already exists!" });
    }

    // 2. password hash
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. create user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      hasBusiness,
      businessSize: hasBusiness === "yes" ? businessSize : "",
    });

    // 4. Generate JWT
    const token = jwt.sign(
      {
        id: newUser._id,
        role: newUser.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.status(201).json({
      message: "Registration successful!",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        hasBusiness: newUser.hasBusiness,
        businessSize: newUser.businessSize,
      },
      token,
    });
  } catch (err) {
    console.log("REGISTER ERROR:", err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};
