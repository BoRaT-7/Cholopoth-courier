// src/pages/customer/NewBooking.jsx

import { useMemo, useState } from "react";
import { routePricing } from "../../data/routePricing";
import { generateTrackingId } from "../../utils/generateTrackingId";

const NewBooking = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [size, setSize] = useState(""); // 'small' | 'medium' | 'big'
  const [price, setPrice] = useState(null);

  const fromLocations = useMemo(() => {
    const unique = new Set(routePricing.map((r) => r.from));
    return Array.from(unique);
  }, []);

  const toLocations = useMemo(() => {
    if (!from) return [];
    const filtered = routePricing.filter((r) => r.from === from);
    const unique = new Set(filtered.map((r) => r.to));
    return Array.from(unique);
  }, [from]);

  const calculatePrice = () => {
    if (!from || !to || !size) {
      setPrice(null);
      return;
    }

    const route = routePricing.find((r) => r.from === from && r.to === to);

    if (!route) {
      setPrice(null);
      return;
    }

    const selectedPrice = route.pricing[size];
    setPrice(selectedPrice);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // আগে price না থাকলে calculate করে নেই
    if (price === null) {
      calculatePrice();
    }

    if (!from || !to || !size) {
      alert("Please select from, to and size");
      return;
    }

    // 1) tracking id generate
    const trackingId = generateTrackingId();

    // 2) new parcel object বানাই (future এ backend payload হবে)
    const newParcel = {
      id: Date.now(), // demo purpose
      trackingId,
      from,
      to,
      status: "Pending",
      weight: size === "small" ? 0.5 : size === "medium" ? 1 : 2,
      codAmount: price || 0,
      type: "COD",
      bookedAt: new Date().toLocaleDateString("en-GB"), // 16 Dec 2025 ফরম্যাট[web:42]
    };

    // 3) localStorage এ save করি যেন MyParcels পেইজে দেখা যায়
    const existing = JSON.parse(localStorage.getItem("myParcels") || "[]");
    existing.push(newParcel);
    localStorage.setItem("myParcels", JSON.stringify(existing));

    alert(`Booking Confirmed! Tracking ID: ${trackingId}`);

    // form reset
    setFrom("");
    setTo("");
    setSize("");
    setPrice(null);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">New Booking</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* From location */}
        <div>
          <label className="block mb-1 font-medium">From</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
              setTo("");
              setPrice(null);
            }}
          >
            <option value="">Select From</option>
            {fromLocations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* To location */}
        <div>
          <label className="block mb-1 font-medium">To</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
              setPrice(null);
            }}
            disabled={!from}
          >
            <option value="">
              {from ? "Select To" : "Select From first"}
            </option>
            {toLocations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Parcel size */}
        <div>
          <label className="block mb-1 font-medium">Parcel Size</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={size}
            onChange={(e) => {
              setSize(e.target.value);
              setPrice(null);
            }}
          >
            <option value="">Select Size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="big">Big</option>
          </select>
        </div>

        {/* Price show */}
        <div>
          <button
            type="button"
            onClick={calculatePrice}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Calculate Price
          </button>
        </div>

        {price !== null && (
          <div className="p-3 bg-green-100 border border-green-300 rounded">
            <p className="font-semibold">
              Total Delivery Charge: {price} ৳
            </p>
          </div>
        )}

        <button
          type="submit"
          className="px-4 py-2 bg-emerald-600 text-white rounded"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default NewBooking;
