// src/utils/generateToken.js
import jwt from "jsonwebtoken";

export const generateToken = (userId, email, role) => {
  return jwt.sign(
    { id: userId, email, role },
    process.env.JWT_SECRET || "secret",
    { expiresIn: "7d" }
  );
};
