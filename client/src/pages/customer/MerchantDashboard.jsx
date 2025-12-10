import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MerchantDashboard = () => {
  const navigate = useNavigate();
  const [trackingId, setTrackingId] = useState("");

  // Summary stats (mock data)
  const summary = {
    totalParcels: 24,
    booked: 8,
    inTransit: 10,
    delivered: 6,
    totalCOD: 1500,
    totalPrepaid: 1200,
  };

  const handleTrackParcel = () => {
    if (!trackingId) return alert("Enter a valid Tracking ID");
    navigate(`/tracking/${trackingId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#02091F] to-[#001F24] p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Merchant Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <div className="bg-[#020617] p-4 rounded-xl shadow flex flex-col items-center">
          <span className="text-gray-400 text-sm">Total Parcels</span>
          <span className="text-emerald-400 font-semibold text-xl">{summary.totalParcels}</span>
        </div>
        <div className="bg-[#020617] p-4 rounded-xl shadow flex flex-col items-center">
          <span className="text-gray-400 text-sm">Booked</span>
          <span className="text-yellow-400 font-semibold text-xl">{summary.booked}</span>
        </div>
        <div className="bg-[#020617] p-4 rounded-xl shadow flex flex-col items-center">
          <span className="text-gray-400 text-sm">In Transit</span>
          <span className="text-blue-400 font-semibold text-xl">{summary.inTransit}</span>
        </div>
        <div className="bg-[#020617] p-4 rounded-xl shadow flex flex-col items-center">
          <span className="text-gray-400 text-sm">Delivered</span>
          <span className="text-emerald-300 font-semibold text-xl">{summary.delivered}</span>
        </div>
        <div className="bg-[#020617] p-4 rounded-xl shadow flex flex-col items-center">
          <span className="text-gray-400 text-sm">Total COD</span>
          <span className="text-red-400 font-semibold text-xl">৳ {summary.totalCOD}</span>
        </div>
        <div className="bg-[#020617] p-4 rounded-xl shadow flex flex-col items-center">
          <span className="text-gray-400 text-sm">Total Prepaid</span>
          <span className="text-green-400 font-semibold text-xl">৳ {summary.totalPrepaid}</span>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
        <button
          onClick={() => navigate("/customer/new-booking")}
          className="bg-emerald-600 p-6 rounded-xl shadow hover:brightness-110 transition font-semibold"
        >
          Create Parcel
        </button>
        <button
          onClick={() => navigate("/customer/my-parcels")}
          className="bg-[#020617] p-6 rounded-xl shadow hover:brightness-110 transition font-semibold"
        >
          My Parcels
        </button>
        <button
          onClick={() => navigate("/tracking")}
          className="bg-[#020617] p-6 rounded-xl shadow hover:brightness-110 transition font-semibold"
        >
          Tracking
        </button>
        <button
          onClick={() => navigate("/customer/payments")}
          className="bg-[#020617] p-6 rounded-xl shadow hover:brightness-110 transition font-semibold"
        >
          Payments
        </button>
        <button
          onClick={() => navigate("/customer/profile")}
          className="bg-[#020617] p-6 rounded-xl shadow hover:brightness-110 transition font-semibold"
        >
          Profile
        </button>
      </div>

      {/* Parcel Tracking Input */}
      <div className="bg-[#020617] p-6 shadow rounded-xl max-w-md mx-auto">
        <h2 className="text-lg font-semibold mb-3">Track a Parcel</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter Tracking ID"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="flex-1 p-2 rounded-lg text-black outline-none"
          />
          <button
            onClick={handleTrackParcel}
            className="bg-lime-500 px-4 rounded-lg font-semibold hover:bg-lime-600 transition"
          >
            Track
          </button>
        </div>
      </div>
    </div>
  );
};

export default MerchantDashboard;
