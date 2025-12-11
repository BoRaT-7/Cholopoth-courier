// server/src/models/Parcel.js
import mongoose from "mongoose";

const parcelSchema = new mongoose.Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // যিনি বুক করছেন
    trackingId: { type: String, required: true, unique: true },

    pickupAddress: { type: String, required: true },
    deliveryAddress: { type: String, required: true },

    parcelSize: { type: String, enum: ["Small", "Medium", "Large"], required: true },
    parcelType: { type: String, required: true },

    paymentMethod: { type: String, enum: ["COD", "Prepaid"], required: true },
    codAmount: { type: Number, default: 0 },   // COD হলে এখানে টাকা রাখবে
    prepaidAmount: { type: Number, default: 0 },

    status: {
      type: String,
      enum: ["Pending", "Picked Up", "In-Transit", "Delivered", "Failed"],
      default: "Pending",
    },

    agent: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // assign করলে agent
  },
  { timestamps: true }
);

export default mongoose.model("Parcel", parcelSchema);
