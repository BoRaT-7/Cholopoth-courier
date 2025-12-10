// src/controllers/parcel.controller.js
import Parcel from "../models/Parcel.js";

// Customer: Book a parcel
export const bookParcel = async (req, res) => {
  try {
    const {
      senderName,
      senderPhone,
      pickupAddress,
      receiverName,
      receiverPhone,
      deliveryAddress,
      parcelType,
      weight,
      price,
      paymentType,
      codAmount,
    } = req.body;

    const parcel = new Parcel({
      senderId: req.user.id,
      senderName,
      senderPhone,
      pickupAddress,
      receiverName,
      receiverPhone,
      deliveryAddress,
      parcelType,
      weight,
      price,
      paymentType,
      codAmount: paymentType === "COD" ? codAmount : 0,
      status: "pending",
    });

    await parcel.save();

    res.status(201).json({
      message: "Parcel booked successfully",
      parcel,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Customer: Get own parcels
export const getMyParcels = async (req, res) => {
  try {
    const parcels = await Parcel.find({ senderId: req.user.id })
      .populate("assignedAgent", "name phone vehicleNumber")
      .sort({ createdAt: -1 });

    res.json({ parcels });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Agent: Get assigned parcels
export const getAssignedParcels = async (req, res) => {
  try {
    const parcels = await Parcel.find({ assignedAgent: req.user.id })
      .populate("senderId", "name phone")
      .sort({ createdAt: -1 });

    res.json({ parcels });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Agent: Update parcel status
export const updateParcelStatus = async (req, res) => {
  try {
    const { parcelId } = req.params;
    const { status, latitude, longitude } = req.body;

    const parcel = await Parcel.findByIdAndUpdate(
      parcelId,
      {
        status,
        currentLocation: {
          latitude,
          longitude,
          updatedAt: new Date(),
        },
      },
      { new: true }
    );

    res.json({
      message: "Parcel status updated",
      parcel,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Admin: Get all parcels
export const getAllParcels = async (req, res) => {
  try {
    const parcels = await Parcel.find()
      .populate("senderId", "name email phone")
      .populate("assignedAgent", "name phone vehicleNumber")
      .sort({ createdAt: -1 });

    res.json({ parcels });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Admin: Assign agent to parcel
export const assignAgentToParcel = async (req, res) => {
  try {
    const { parcelId, agentId } = req.body;

    const parcel = await Parcel.findByIdAndUpdate(
      parcelId,
      { assignedAgent: agentId, status: "picked_up" },
      { new: true }
    ).populate("assignedAgent", "name phone vehicleNumber");

    res.json({
      message: "Agent assigned to parcel",
      parcel,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
