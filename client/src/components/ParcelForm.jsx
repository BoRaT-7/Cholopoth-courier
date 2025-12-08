// client/src/components/ParcelForm.jsx
import { useState } from "react";

const ParcelForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    parcelSize: "",
    parcelType: "",
    paymentMode: "COD",
    receiverName: "",
    receiverPhone: "",
    note: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-lg">
      <div>
        <label>Parcel Size</label>
        <select
          name="parcelSize"
          value={form.parcelSize}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Select size</option>
          <option value="SMALL">Small</option>
          <option value="MEDIUM">Medium</option>
          <option value="LARGE">Large</option>
        </select>
      </div>

      <div>
        <label>Parcel Type</label>
        <input
          name="parcelType"
          value={form.parcelType}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Document / Fragile / Other"
        />
      </div>

      <div>
        <label>Payment Mode</label>
        <select
          name="paymentMode"
          value={form.paymentMode}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="COD">Cash on Delivery (COD)</option>
          <option value="PREPAID">Prepaid</option>
        </select>
      </div>

      <div>
        <label>Receiver Name</label>
        <input
          name="receiverName"
          value={form.receiverName}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label>Receiver Phone</label>
        <input
          name="receiverPhone"
          value={form.receiverPhone}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label>Note</label>
        <textarea
          name="note"
          value={form.note}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          rows={3}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded"
      >
        Confirm Booking
      </button>
    </form>
  );
};

export default ParcelForm;
