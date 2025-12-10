import { NavLink, Outlet } from "react-router-dom";

const linkClass =
  "block px-4 py-2 rounded-lg text-sm font-medium hover:bg-lime-600/80";
const activeClass = "bg-lime-600 text-white";

const AgentLayout = () => {
  return (
    <div className="min-h-screen flex bg-lime-500/10">
      <aside className="w-60 bg-lime-500 text-white p-4 space-y-4 rounded-r-3xl shadow-lg">
        <div className="font-semibold text-sm uppercase tracking-wide">
          Delivery Agent
        </div>

        <nav className="space-y-2">
          <NavLink
            to="/dashboard/agent"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/dashboard/agent/parcels"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            My Parcels
          </NavLink>

          <NavLink
            to="/dashboard/agent/route"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Delivery Route
          </NavLink>
        </nav>
      </aside>

      <main className="flex-1 p-6 max-w-5xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AgentLayout;
