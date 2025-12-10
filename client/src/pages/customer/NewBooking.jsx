// src/pages/customer/NewBooking.jsx
import { useState } from "react";

const NewBooking = () => {
  const [form, setForm] = useState({
    pickupAddress: "",
    deliveryAddress: "",
    parcelSize: "Small",
    parcelType: "Documents",
    payment: "COD",
  });

  const parcelSizes = ["Small", "Medium", "Large"];
  const parcelTypes = ["Documents", "Electronics", "Fragile items", "Others"];

  // handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle parcel size selection
  const handleParcelSize = (size) => {
    setForm({ ...form, parcelSize: size });
  };

  // handle payment change
  const handlePayment = (e) => {
    setForm({ ...form, payment: e.target.value });
  };

  // handle confirm booking
  const handleConfirm = () => {
    console.log("Pickup Request Data:", form);
    alert("Pickup request confirmed! (Check console log)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#02091F] to-[#001F24] flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-[#020816]/90 border border-slate-800 rounded-3xl p-8 shadow-2xl text-slate-100">
        
        <h2 className="text-lg font-semibold mb-2">Pickup Request / পার্সেল বুকিং</h2>
        <p className="text-xs text-slate-400 mb-6">
          Customer can book a parcel pickup with addresses, parcel size/type and COD or prepaid.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Pickup Address */}
          <div>
            <label className="block text-xs text-slate-300 mb-1">
              Pickup Address / তুলে নেওয়ার ঠিকানা
            </label>
            <input
              name="pickupAddress"
              value={form.pickupAddress}
              onChange={handleChange}
              className="w-full bg-[#020617] border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500"
              placeholder="House, road, area"
              type="text"
              required
            />
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-xs text-slate-300 mb-1">
              Delivery Address / পৌঁছানোর ঠিকানা
            </label>
            <input
              name="deliveryAddress"
              value={form.deliveryAddress}
              onChange={handleChange}
              className="w-full bg-[#020617] border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500"
              placeholder="House, road, area"
              type="text"
              required
            />
          </div>

          {/* Parcel Size */}
          <div>
            <label className="block text-xs text-slate-300 mb-2">Parcel Size / পার্সেলের আকার</label>
            <div className="inline-flex gap-2">
              {parcelSizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => handleParcelSize(size)}
                  className={`px-4 py-1 text-xs rounded-full ${
                    form.parcelSize === size
                      ? "bg-emerald-600 text-white"
                      : "bg-[#020617] border border-slate-600 text-slate-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Parcel Type */}
          <div>
            <label className="block text-xs text-slate-300 mb-2">Parcel Type / পার্সেলের ধরন</label>
            <select
              name="parcelType"
              value={form.parcelType}
              onChange={handleChange}
              className="w-full bg-[#020617] border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500"
            >
              {parcelTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Payment */}
          <div>
            <label className="block text-xs text-slate-300 mb-2">Payment / পেমেন্ট</label>
            <div className="space-y-1 text-xs">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="COD"
                  checked={form.payment === "COD"}
                  onChange={handlePayment}
                />
                <span>Cash on Delivery (COD) / কেশ অন ডেলিভারি</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="Prepaid"
                  checked={form.payment === "Prepaid"}
                  onChange={handlePayment}
                />
                <span>Prepaid (Online) / প্রিপেইড অনলাইন</span>
              </label>
            </div>
          </div>

          {/* Summary Box */}
          <div>
            <label className="block text-xs text-slate-300 mb-2">Summary / সারসংক্ষেপ</label>
            <div className="bg-[#020617] border border-slate-700 rounded-xl px-4 py-3 text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-400">Estimated fare / আনুমানিক চার্জ</span>
                <span className="text-emerald-400 font-semibold">৳ 120</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Estimated delivery / আনুমানিক ডেলিভারি</span>
                <span className="text-emerald-300 font-semibold">Today, 6–8 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            className="px-5 py-2 text-sm rounded-full border border-slate-600 bg-[#020617] text-slate-100 hover:bg-slate-800"
            onClick={() => alert("Draft saved!")}
          >
            Save Draft / ড্রাফ্ট সংরক্ষণ
          </button>
          <button
            type="button"
            className="px-6 py-2 text-sm rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium"
            onClick={handleConfirm}
          >
            Confirm Pickup / বুকিং নিশ্চিত করুন
          </button>
        </div>

      </div>
    </div>
  );
};

export default NewBooking;
