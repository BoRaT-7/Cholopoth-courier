import { NavLink, Outlet } from "react-router-dom";

const linkClass =
  "block px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800";
const activeClass = "bg-slate-900 text-white";

const CustomerLayout = () => {
  return (
    <div className="min-h-screen flex bg-slate-100">
      {/* sidebar */}
      <aside className="w-64 bg-slate-950 text-slate-100 p-4 space-y-4">
        <div className="font-semibold text-sm uppercase tracking-wide">
          Customer
        </div>

        <nav className="space-y-2">
          <NavLink
            to="/dashboard/customer"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/dashboard/customer/parcels"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            My Parcels
          </NavLink>

          <NavLink
            to="/dashboard/customer/new-booking"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            New Booking
          </NavLink>

          <NavLink
            to="/dashboard/customer/payments"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Payments
          </NavLink>

          <NavLink
            to="/dashboard/customer/profile"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Profile
          </NavLink>
        </nav>
      </aside>

      {/* main content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default CustomerLayout;
