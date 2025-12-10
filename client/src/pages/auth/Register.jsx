// src/pages/auth/Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",          // customer / agent / admin
    hasBusiness: "no",         // "yes" | "no"
    businessSize: "",          // "small" | "medium" | "large"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = { ...form };
  if (payload.hasBusiness === "no") {
    delete payload.businessSize;
  }

const res = await fetch("http://localhost:5000/api/auth/register", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});

const data = await res.json();

  console.log("Register response:", data);

  if (res.ok) {
    alert("Registration successful!");
    navigate("/");
  } else {
    alert(data.message);
  }
};


  const handleGoogleLogin = () => {
    // future এ এখানে Google OAuth redirect করবে, যেমন window.location.href = "/api/auth/google"
    console.log("Google login clicked");
  };

  return (
    <div className="min-h-screen bg-[#F5F7FB] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            Create your CholoPoth account
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Book parcels, track in real‑time & manage deliveries.
          </p>
        </div>

        {/* Google login button */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full border border-gray-300 rounded-lg py-2.5 flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-50 mb-4"
        >
          {/* simple Google icon (circle with G) */}
          <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white border">
            <span className="text-[11px] font-bold text-blue-600">G</span>
          </span>
          <span>Continue with Google</span>
        </button>

        <div className="flex items-center gap-2 mb-4">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-[11px] uppercase text-gray-400">or</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="mt-1 w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="********"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Sign up as
            </label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="mt-1 w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="customer">Customer</option>
              <option value="agent">Delivery Agent</option>
              <option value="admin">Admin</option>
            </select>
          </div>

                   {/* Business question (optional) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Do you have a business?{" "}
              <span className="text-xs text-gray-400">(optional)</span>
            </label>

            <div className="mt-1 flex gap-4 text-sm">
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

            {/* যদি user "Yes" সিলেক্ট করে তখনই size select দেখাবে */}
            {form.hasBusiness === "yes" && (
              <div className="mt-3">
                <label className="block text-xs font-medium text-gray-600">
                  Business size
                </label>
                <select
                  name="businessSize"
                  value={form.businessSize}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select size</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-green-700 text-white text-sm font-medium py-2.5 rounded-lg transition"
          >
            Sign up
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-gray-500">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-green-600 hover:underline"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;

