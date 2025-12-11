// src/pages/AgentRegister.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE = "http://localhost:5000";

const AgentRegister = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    vehicleType: "",
    nidNumber: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
     await axios.post(`${API_BASE}/api/auth/agent/register`, form);


      // after successful register go to agent login
      navigate("/agent-login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-lime-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-[#0B1120] text-white p-6 rounded-2xl space-y-4 shadow-lg border border-slate-700"
      >
        <h2 className="text-xl font-semibold text-center">Be a Rider</h2>

        {error && (
          <p className="text-sm bg-red-500/20 border border-red-400 px-3 py-2 rounded">
            {error}
          </p>
        )}

        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-transparent border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-transparent border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full bg-transparent border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Phone</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full bg-transparent border border-slate-600 rounded-lg px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Vehicle Type</label>
          <input
            name="vehicleType"
            value={form.vehicleType}
            onChange={handleChange}
            className="w-full bg-transparent border border-slate-600 rounded-lg px-3 py-2 text-sm"
            placeholder="Bike / Motorbike / Car"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">NID Number</label>
          <input
            name="nidNumber"
            value={form.nidNumber}
            onChange={handleChange}
            className="w-full bg-transparent border border-slate-600 rounded-lg px-3 py-2 text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-sm font-medium py-2 rounded-lg transition disabled:opacity-40"
        >
          {loading ? "Registering..." : "Register as Rider"}
        </button>
      </form>
    </div>
  );
};

export default AgentRegister;
