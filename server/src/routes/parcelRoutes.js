// server/src/routes/parcelRoutes.js
import express from "express";
import Parcel from "../models/Parcel.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

// helper: simple tracking id
const generateTrackingId = () =>
  "CP-" + Math.floor(100000 + Math.random() * 900000);

// ✅ New booking (customer)
router.post("/book", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id; // token থেকে আসবে
    const {
      pickupAddress,
      deliveryAddress,
      parcelSize,
      parcelType,
      payment,       // "COD" | "Prepaid"
      codAmount = 0,
      prepaidAmount = 0,
    } = req.body;

    const parcel = await Parcel.create({
      customer: userId,
      trackingId: generateTrackingId(),
      pickupAddress,
      deliveryAddress,
      parcelSize,
      parcelType,
      paymentMethod: payment,
      codAmount: payment === "COD" ? codAmount : 0,
      prepaidAmount: payment === "Prepaid" ? prepaidAmount : 0,
    });

    res.status(201).json({ success: true, parcel });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ My parcels (customer dashboard)
router.get("/my-parcels", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    const parcels = await Parcel.find({ customer: userId })
      .sort({ createdAt: -1 })
      .lean();

    res.json({ success: true, parcels });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ Summary stats for MerchantDashboard
router.get("/summary", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    const parcels = await Parcel.find({ customer: userId }).lean();

    const totalParcels = parcels.length;
    const booked = parcels.filter(p => p.status === "Pending").length;
    const inTransit = parcels.filter(p => p.status === "In-Transit").length;
    const delivered = parcels.filter(p => p.status === "Delivered").length;
    const totalCOD = parcels
      .filter(p => p.paymentMethod === "COD")
      .reduce((sum, p) => sum + (p.codAmount || 0), 0);
    const totalPrepaid = parcels
      .filter(p => p.paymentMethod === "Prepaid")
      .reduce((sum, p) => sum + (p.prepaidAmount || 0), 0);

    res.json({
      success: true,
      summary: { totalParcels, booked, inTransit, delivered, totalCOD, totalPrepaid },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ Payments info (customer)
router.get("/payments", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    const parcels = await Parcel.find({ customer: userId }).lean();

    const totalCod = parcels
      .filter(p => p.paymentMethod === "COD")
      .reduce((sum, p) => sum + (p.codAmount || 0), 0);
    const prepaidTotal = parcels
      .filter(p => p.paymentMethod === "Prepaid")
      .reduce((sum, p) => sum + (p.prepaidAmount || 0), 0);

    // উদাহরণ: প্রত্যেক parcel-এর payment row
    const rows = parcels.map(p => ({
      id: p.trackingId,
      date: p.createdAt,
      amount: p.paymentMethod === "COD" ? p.codAmount : p.prepaidAmount,
      method: p.paymentMethod,
      status:
        p.paymentMethod === "Prepaid"
          ? "Paid"
          : p.status === "Delivered"
          ? "Collected"
          : "Pending",
    }));

    res.json({
      success: true,
      data: {
        totalCod,
        codCollected: rows
          .filter(r => r.method === "COD" && r.status === "Collected")
          .reduce((s, r) => s + r.amount, 0),
        codPending: rows
          .filter(r => r.method === "COD" && r.status === "Pending")
          .reduce((s, r) => s + r.amount, 0),
        prepaidTotal,
        rows,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ Track by trackingId (customer public page)
router.get("/track/:trackingId", async (req, res) => {
  try {
    const parcel = await Parcel.findOne({
      trackingId: req.params.trackingId,
    }).lean();

    if (!parcel) {
      return res.status(404).json({ message: "Parcel not found" });
    }

    res.json({ success: true, parcel });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
