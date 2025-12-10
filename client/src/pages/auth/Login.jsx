import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE = "http://localhost:5000";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post(`${API_BASE}/api/auth/login`, form);
      const { user, token } = res.data;

      localStorage.setItem(
        "cp_user",
        JSON.stringify({
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          token,
        })
      );

      if (user.role === "customer") navigate("/dashboard/customer");
      else if (user.role === "agent") navigate("/dashboard/agent");
      else if (user.role === "admin") navigate("/dashboard/admin");
      else navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
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
        <h2 className="text-xl font-semibold text-center">Login to CholoPoth</h2>

        {error && (
          <p className="text-sm bg-red-500/20 border border-red-400 px-3 py-2 rounded">
            {error}
          </p>
        )}

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

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-sm font-medium py-2 rounded-lg transition disabled:opacity-40"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
