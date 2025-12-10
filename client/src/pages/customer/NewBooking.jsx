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

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleParcelSize = (size) => setForm({ ...form, parcelSize: size });
  const handlePayment = (e) => setForm({ ...form, payment: e.target.value });

  const handleConfirm = () => {
    console.log("Pickup Request Data:", form);
    alert("Pickup request confirmed! Check console for details.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-100">
      <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">New Pickup Request</h2>
        <p className="text-sm text-gray-500 mb-6">
          Book a parcel pickup with addresses, parcel size/type, and payment method.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Pickup Address */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Pickup Address</label>
            <input
              name="pickupAddress"
              value={form.pickupAddress}
              onChange={handleChange}
              placeholder="House, Road, Area"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
              type="text"
              required
            />
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Delivery Address</label>
            <input
              name="deliveryAddress"
              value={form.deliveryAddress}
              onChange={handleChange}
              placeholder="House, Road, Area"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
              type="text"
              required
            />
          </div>

          {/* Parcel Size */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">Parcel Size</label>
            <div className="inline-flex gap-2">
              {parcelSizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => handleParcelSize(size)}
                  className={`px-4 py-1 text-sm rounded-full font-medium border transition ${
                    form.parcelSize === size
                      ? "bg-lime-500 text-white border-lime-500"
                      : "bg-white border-gray-300 text-gray-700 hover:bg-lime-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Parcel Type */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">Parcel Type</label>
            <select
              name="parcelType"
              value={form.parcelType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
            >
              {parcelTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Payment */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">Payment Method</label>
            <div className="space-y-2 text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="COD"
                  checked={form.payment === "COD"}
                  onChange={handlePayment}
                  className="accent-lime-500"
                />
                Cash on Delivery
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="Prepaid"
                  checked={form.payment === "Prepaid"}
                  onChange={handlePayment}
                  className="accent-lime-500"
                />
                Prepaid (Online)
              </label>
            </div>
          </div>

          {/* Summary Box */}
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600 mb-2">Summary</label>
            <div className="border border-gray-300 rounded-lg p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Estimated Fare</span>
                <span className="text-lime-500 font-semibold">৳ 120</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Estimated Delivery</span>
                <span className="text-lime-500 font-semibold">Today, 6–8 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={() => alert("Draft saved!")}
            className="px-5 py-2 text-sm rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-lime-50"
          >
            Save Draft
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            className="px-6 py-2 text-sm rounded-full bg-lime-500 hover:bg-lime-600 text-white font-medium"
          >
            Confirm Pickup
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewBooking;
