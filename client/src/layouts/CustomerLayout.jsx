import { NavLink, Outlet } from "react-router-dom";

const linkClass =
  "block px-4 py-2 rounded-lg text-sm font-medium hover:bg-lime-600/80";
const activeClass = "bg-lime-600 text-white";

const CustomerLayout = () => {
  return (
    <div className="min-h-screen flex bg-lime-500/10">
      {/* sidebar */}
      <aside className="w-60 bg-lime-green text-black p-4 space-y-4 rounded-r-3xl shadow-lg">
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

      {/* main content; width শুধু প্রয়োজন অনুযায়ী */}
      <main className="flex-1 p-6 max-w-5xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default CustomerLayout;
