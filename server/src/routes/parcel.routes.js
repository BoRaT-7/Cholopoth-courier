// src/routes/parcel.routes.js
import express from "express";
import {
  bookParcel,
  getMyParcels,
  getAssignedParcels,
  updateParcelStatus,
  getAllParcels,
  assignAgentToParcel,
} from "../controllers/parcel.controller.js";
import { verifyToken, allowRoles } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Customer routes
router.post("/book", verifyToken, allowRoles("customer"), bookParcel);
router.get("/my-parcels", verifyToken, allowRoles("customer"), getMyParcels);

// Agent routes
router.get(
  "/assigned",
  verifyToken,
  allowRoles("agent"),
  getAssignedParcels
);
router.patch(
  "/:parcelId/status",
  verifyToken,
  allowRoles("agent"),
  updateParcelStatus
);

// Admin routes
router.get("/all", verifyToken, allowRoles("admin"), getAllParcels);
router.post("/assign", verifyToken, allowRoles("admin"), assignAgentToParcel);

export default router;
