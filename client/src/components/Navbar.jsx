import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const stored = localStorage.getItem("cp_user");
  const user = stored ? JSON.parse(stored) : null;

  const navItems = [
    { label: "Home", href: "/#services" },
    { label: "About Us", href: "/#about" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Blog", href: "/#blog" },
    { label: "Contact", href: "/#contact" },
  ];

  const handleDashboardClick = () => {
    if (!user) return;

    if (user.role === "agent") {
      navigate("/dashboard/agent");        // biker / delivery agent dashboard
    } else if (user.role === "customer") {
      navigate("/dashboard/customer");     // normal user dashboard
    } else if (user.role === "admin") {
      navigate("/dashboard/admin");
    } else {
      navigate("/");                       // fallback
    }
  };

  return (
    <header className="bg-base-100 shadow-sm">
      <div className="navbar max-w-6xl mx-auto px-4">
        {/* left */}
        <div className="navbar-start">
          <Link to="/" className="flex items-center gap-1">
            <span className="text-5xl font-extrabold text-lime-800 leading-none">
              C
            </span>
            <span className="text-2xl font-semibold tracking-tight flex gap-0">
              <span className="text-slate-900">holo</span>
              <span className="text-emerald-600">Poth</span>
            </span>
          </Link>
        </div>

        {/* center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-sm text-neutral-500">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-neutral-900 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}

            {user && (
              <li>
                <button
                  onClick={handleDashboardClick}
                  className="hover:text-neutral-900 mt-1.5 transition-colors"
                >
                  Dashboard
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* right */}
        <div className="navbar-end hidden md:flex items-center gap-3">
          {!user && (
            <>
              <NavLink
                to="/login"
                className="btn btn-sm bg-base-100 border border-neutral-300 text-neutral-800 hover:bg-neutral-100"
              >
                Sign In
              </NavLink>

              <NavLink
                to="/register"
                className="btn btn-sm border-none bg-lime-400 text-neutral-900 hover:bg-lime-500"
              >
                Sign Up
              </NavLink>
            </>
          )}

          {user && (
            <button
              onClick={() => {
                localStorage.removeItem("cp_user");
                navigate("/login");
              }}
              className="btn btn-sm bg-neutral-900 border-none hover:bg-neutral-800 text-lime-400"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
