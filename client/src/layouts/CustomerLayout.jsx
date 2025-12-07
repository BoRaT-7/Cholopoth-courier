import { Outlet, NavLink } from "react-router-dom"

const CustomerLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-56 bg-white border-r border-gray-200 p-4 space-y-3">
        <h2 className="text-sm font-semibold text-gray-700 mb-2">
          Customer
        </h2>
        <nav className="flex flex-col gap-2 text-sm">
          <NavLink
            to="/dashboard/customer"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg hover:bg-gray-100 ${
                isActive ? "bg-gray-900 text-white" : "text-gray-700"
              }`
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="/dashboard/customer/parcels"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg hover:bg-gray-100 ${
                isActive ? "bg-gray-900 text-white" : "text-gray-700"
              }`
            }
          >
            My Parcels
          </NavLink>
          <NavLink
            to="/dashboard/customer/new-booking"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg hover:bg-gray-100 ${
                isActive ? "bg-gray-900 text-white" : "text-gray-700"
              }`
            }
          >
            New Booking
          </NavLink>
        </nav>
      </aside>

      <section className="flex-1 p-6">
        <Outlet />
      </section>
    </div>
  )
}

export default CustomerLayout
