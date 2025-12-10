// src/pages/customer/Profile.jsx
import { useState } from "react";

const Profile = () => {
  const [form, setForm] = useState({
    name: "Merchant Name",
    email: "merchant@example.com",
    phone: "01XXXXXXXXX",
    hasBusiness: "yes",
    businessName: "Demo Shop",
    businessSize: "small",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // future: PUT /api/profile
    console.log("profile update =>", form);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-slate-900">Profile</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-sm p-6 space-y-4 max-w-xl"
      >
        <div>
          <label className="block text-sm text-slate-700 mb-1">
            Full name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 text-sm bg-slate-50 cursor-not-allowed"
            disabled
          />
        </div>

        <div>
          <label className="block text-sm text-slate-700 mb-1">Phone</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Business info */}
        <div>
          <label className="block text-sm text-slate-700 mb-1">
            Do you have a business?
          </label>
          <div className="flex gap-4 text-sm mt-1">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="hasBusiness"
                value="no"
                checked={form.hasBusiness === "no"}
                onChange={handleChange}
              />
              <span>No</span>
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="hasBusiness"
                value="yes"
                checked={form.hasBusiness === "yes"}
                onChange={handleChange}
              />
              <span>Yes</span>
            </label>
          </div>

          {form.hasBusiness === "yes" && (
            <div className="mt-3 space-y-3">
              <div>
                <label className="block text-xs text-slate-600 mb-1">
                  Business name
                </label>
                <input
                  name="businessName"
                  value={form.businessName}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-600 mb-1">
                  Business size
                </label>
                <select
                  name="businessSize"
                  value={form.businessSize}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="px-6 py-2 text-sm rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-500"
        >
          Save changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
