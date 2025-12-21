import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

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
    setOpen(false);
    if (!user) return;

    if (user.role === "agent") navigate("/dashboard/agent");
    else if (user.role === "customer") navigate("/dashboard/customer");
    else if (user.role === "admin") navigate("/dashboard/admin");
    else navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("cp_user");
    navigate("/login");
    setOpen(false);
  };

  const hoverLink =
    "transition-all duration-200 hover:text-neutral-900 hover:scale-105";

  const hoverBtn =
    "transition-all duration-200 hover:scale-105 active:scale-95";

  return (
    <header className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-1 transition hover:opacity-80"
          >
            <span className="text-5xl font-extrabold text-lime-800 leading-none">
              C
            </span>
            <span className="text-2xl font-semibold tracking-tight flex gap-0">
              <span className="text-slate-900">holo</span>
              <span className="text-emerald-600">Poth</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6 text-sm text-neutral-600">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`${hoverLink} hover:underline underline-offset-4`}
              >
                {item.label}
              </a>
            ))}

            {user && (
              <button
                onClick={handleDashboardClick}
                className={`${hoverLink} font-medium`}
              >
                Dashboard
              </button>
            )}
          </nav>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3">
            {!user ? (
              <>
                <NavLink
                  to="/login"
                  className={`btn btn-sm bg-base-100 border border-neutral-300 text-neutral-800 hover:bg-neutral-100 ${hoverBtn}`}
                >
                  Sign In
                </NavLink>

                <NavLink
                  to="/register"
                  className={`btn btn-sm border-none bg-lime-400 text-neutral-900 hover:bg-lime-500 ${hoverBtn}`}
                >
                  Sign Up
                </NavLink>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className={`btn btn-sm bg-neutral-900 border-none text-lime-400 hover:bg-neutral-800 ${hoverBtn}`}
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden btn btn-ghost btn-sm ${hoverBtn}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-3 text-sm text-neutral-600">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`${hoverLink} py-1`}
                >
                  {item.label}
                </a>
              ))}

              {user && (
                <button
                  onClick={handleDashboardClick}
                  className={`${hoverLink} text-left`}
                >
                  Dashboard
                </button>
              )}

              <div className="pt-3 border-t flex flex-col gap-2">
                {!user ? (
                  <>
                    <NavLink
                      to="/login"
                      onClick={() => setOpen(false)}
                      className={`btn btn-sm ${hoverBtn}`}
                    >
                      Sign In
                    </NavLink>

                    <NavLink
                      to="/register"
                      onClick={() => setOpen(false)}
                      className={`btn btn-sm bg-lime-400 border-none text-neutral-900 hover:bg-lime-500 ${hoverBtn}`}
                    >
                      Sign Up
                    </NavLink>
                  </>
                ) : (
                  <button
                    onClick={handleLogout}
                    className={`btn btn-sm bg-neutral-900 border-none text-lime-400 hover:bg-neutral-800 ${hoverBtn}`}
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
