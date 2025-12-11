// server/src/models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["customer", "agent", "admin"],
      default: "customer",
    },
    hasBusiness: { type: String, enum: ["yes", "no"], default: "no" },
    businessSize: {
      type: String,
      enum: ["small", "medium", "large"],
      default: null,
    },
    phone: String,
    vehicleType: String,
    nidNumber: String,
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
