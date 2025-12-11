// src/models/Agent.js
import mongoose from "mongoose";

const agentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: String,
    vehicleType: String,
    nidNumber: String,
    status: { type: String, default: "pending" },
  },
  { timestamps: true, collection: "agentdata" }
);

const Agent = mongoose.model("Agent", agentSchema);
export default Agent;
