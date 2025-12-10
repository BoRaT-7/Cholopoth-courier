// src/models/Parcel.js
import mongoose from "mongoose";

const parcelSchema = new mongoose.Schema(
  {
    trackingCode: {
      type: String,
      unique: true,
      required: true,
      default: () => "CP-" + Date.now(),
    },

    // Sender (Customer)
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    senderName: String,
    senderPhone: String,
    pickupAddress: { type: String, required: true },

    // Receiver
    receiverName: { type: String, required: true },
    receiverPhone: { type: String, required: true },
    deliveryAddress: { type: String, required: true },

    // Parcel Details
    parcelType: { type: String, enum: ["document", "package", "box"] },
    weight: { type: Number, required: true }, // kg
    price: { type: Number, required: true },

    // Payment
    paymentType: { type: String, enum: ["COD", "prepaid"], default: "COD" },
    codAmount: { type: Number, default: 0 },
    isPaid: { type: Boolean, default: false },

    // Status
    status: {
      type: String,
      enum: ["pending", "picked_up", "in_transit", "delivered", "failed"],
      default: "pending",
    },

    // Agent Assignment
    assignedAgent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    // Location Tracking
    currentLocation: {
      latitude: Number,
      longitude: Number,
      updatedAt: Date,
    },

    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Parcel", parcelSchema);
