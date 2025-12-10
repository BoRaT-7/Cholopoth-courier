import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AgentRegister = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    nid: "",
    licenseNumber: "",
    vehicleType: "bike", // bike, car, van
    vehicleNumber: "",
    address: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // AgentRegister.jsx
const handleSubmit = (e) => {
  e.preventDefault();

  console.log("agent registration =>", form);

  // demo: localStorage এ agent save
// সফল rider registration এর পরে:
localStorage.setItem(
  "cp_user",
  JSON.stringify({ role: "agent", email: form.email })
);
navigate("/dashboard/agent");

};


  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 to-emerald-50 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">Join as Rider</h1>
        <p className="text-center text-slate-600 mb-6">
          Complete your profile to start delivering parcels
        </p>

        {submitted ? (
          <div className="bg-white rounded-xl p-8 text-center shadow-lg">
            <div className="text-5xl mb-4">✓</div>
            <h2 className="text-xl font-semibold mb-2">
              Application Submitted!
            </h2>
            <p className="text-slate-600 mb-4">
              Your agent profile is under review. Redirecting to dashboard...
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-8 space-y-6"
          >
            {/* Personal Info Section */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-4 text-slate-900">
                Personal Information
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 outline-none focus:border-lime-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 outline-none focus:border-lime-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 outline-none focus:border-lime-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 outline-none focus:border-lime-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    NID Number
                  </label>
                  <input
                    type="text"
                    name="nid"
                    value={form.nid}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 outline-none focus:border-lime-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 outline-none focus:border-lime-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Document Info Section */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-4 text-slate-900">
                Documents & License
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    License Number
                  </label>
                  <input
                    type="text"
                    name="licenseNumber"
                    value={form.licenseNumber}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 outline-none focus:border-lime-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Vehicle Info Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-slate-900">
                Vehicle Information
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Vehicle Type
                  </label>
                  <select
                    name="vehicleType"
                    value={form.vehicleType}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 outline-none focus:border-lime-500"
                  >
                    <option value="bike">Bike</option>
                    <option value="car">Car</option>
                    <option value="van">Van</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Vehicle Number / Plate
                  </label>
                  <input
                    type="text"
                    name="vehicleNumber"
                    value={form.vehicleNumber}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 outline-none focus:border-lime-500"
                    required
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-lime-500 text-white font-semibold py-2 rounded-lg hover:bg-lime-600 transition"
            >
              Complete Registration
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AgentRegister;
