import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  const navItems = [
    { label: "Services", href: "/#services" },
    { label: "Coverage", href: "/#coverage" },
    { label: "About Us", href: "/#about" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Blog", href: "/#blog" },
    { label: "Contact", href: "/#contact" },
  ]

  return (
    <header className="bg-base-100 shadow-sm">
      <div className="navbar max-w-6xl mx-auto px-4">
        {/* left: logo + mobile menu */}
        <div className="navbar-start">
          {/* mobile dropdown */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <li className="mt-2">
                <NavLink to="/login">Sign In</NavLink>
              </li>
              <li>
                <NavLink to="/register">Sign Up</NavLink>
              </li>
            </ul>
          </div>

          {/* logo */}
<Link to="/" className="flex items-center gap-1">
  {/* Big C */}
  <span className="text-5xl font-extrabold text-lime-800 leading-none">
    C
  </span>

  {/* holoPoth */}
  <span className="text-2xl font-semibold tracking-tight flex gap-0">
    <span className="text-slate-900">holo</span>
    <span className="text-emerald-600">Poth</span>
  </span>
</Link>






        </div>

        {/* center: desktop menu */}
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
          </ul>
        </div>

        {/* right: auth buttons */}
        <div className="navbar-end hidden md:flex items-center gap-3">
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

          <button className="btn btn-sm btn-circle bg-neutral-900 border-none hover:bg-neutral-800 text-lime-400">
            ↗
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
