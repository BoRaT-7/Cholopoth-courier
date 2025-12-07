import { Outlet, NavLink } from "react-router-dom"

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* sidebar */}
      <aside className="w-60 bg-white border-r border-gray-200 p-4 space-y-3">
        <h2 className="text-sm font-semibold text-gray-700 mb-2">
          Admin Panel
        </h2>
        <nav className="flex flex-col gap-2 text-sm">
          <NavLink
            to="/dashboard/admin"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg hover:bg-gray-100 ${
                isActive ? "bg-gray-900 text-white" : "text-gray-700"
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/dashboard/admin/parcels"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg hover:bg-gray-100 ${
                isActive ? "bg-gray-900 text-white" : "text-gray-700"
              }`
            }
          >
            Parcels
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg hover:bg-gray-100 ${
                isActive ? "bg-gray-900 text-white" : "text-gray-700"
              }`
            }
          >
            Users
          </NavLink>
          <NavLink
            to="/dashboard/admin/reports"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg hover:bg-gray-100 ${
                isActive ? "bg-gray-900 text-white" : "text-gray-700"
              }`
            }
          >
            Reports
          </NavLink>
        </nav>
      </aside>

      {/* main content */}
      <section className="flex-1 p-6">
        <Outlet />
      </section>
    </div>
  )
}

export default AdminLayout
