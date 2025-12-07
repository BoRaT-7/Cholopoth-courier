const Login = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-gray-900">Sign In</h2>
      <p className="text-sm text-gray-500">
        লগ ইন করে তোমার পার্সেল বুকিং ও ট্র্যাকিং ম্যানেজ করো।
      </p>

      <form className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="you@example.com"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered w-full"
            placeholder="••••••••"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Sign In
        </button>
      </form>
    </div>
  )
}

export default Login
