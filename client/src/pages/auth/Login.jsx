import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("cp_user", JSON.stringify({ role: "customer" }));
navigate("/dashboard/customer");
    // future: POST /api/auth/login
    console.log("login data =>", form);

    // ধরছি merchant user; তাই merchant dashboard এ পাঠাচ্ছি
    navigate("/dashboard/customer");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050922]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-[#0B1120] text-white p-6 rounded-2xl space-y-4 shadow-xl"
      >
        <h2 className="text-xl font-semibold">Login to CholoPoth</h2>

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
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-sm font-medium py-2 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
