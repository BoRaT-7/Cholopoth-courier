// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import AdminLayout from "./layouts/AdminLayout";
import CustomerLayout from "./layouts/CustomerLayout";
import AgentLayout from "./layouts/AgentLayout";

import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageParcels from "./pages/admin/ManageParcels";
import ManageUsers from "./pages/admin/ManageUsers";
import Reports from "./pages/admin/Reports";

import CustomerDashboard from "./pages/customer/CustomerDashboard";
import MyParcels from "./pages/customer/MyParcels";
import NewBooking from "./pages/customer/NewBooking";
import Payments from "./pages/customer/Payments";
import Profile from "./pages/customer/Profile";
import MerchantDashboard from "./pages/customer/MerchantDashboard";
import AgentRegister from "./pages/auth/AgentRegister";
import AgentDashboard from "./pages/agent/AgentDashboard";
import AssignedParcels from "./pages/agent/AssignedParcels";
import RouteMap from "./pages/agent/RouteMap";

import TrackParcel from "./pages/tracking/TrackParcel";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6">
        <Routes>
          {/* public / landing */}
          <Route path="/" element={<CustomerDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/track/:trackingId" element={<TrackParcel />} />

          {/* admin */}
          <Route element={<AdminLayout />}>
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
            <Route path="/dashboard/admin/parcels" element={<ManageParcels />} />
            <Route path="/dashboard/admin/users" element={<ManageUsers />} />
            <Route path="/dashboard/admin/reports" element={<Reports />} />
          </Route>

          {/* customer / merchant */}
         <Route element={<CustomerLayout />}>
  <Route path="/dashboard/customer" element={<MerchantDashboard />} />
  <Route path="/dashboard/customer/parcels" element={<MyParcels />} />
  <Route path="/dashboard/customer/new-booking" element={<NewBooking />} />
  <Route path="/dashboard/customer/payments" element={<Payments />} />
  <Route path="/dashboard/customer/profile" element={<Profile />} />
</Route>
<Route path="/agent-register" element={<AgentRegister />} />
          {/* agent */}
          <Route element={<AgentLayout />}>
            <Route path="/dashboard/agent" element={<AgentDashboard />} />
            <Route path="/dashboard/agent/parcels" element={<AssignedParcels />} />
            <Route path="/dashboard/agent/route" element={<RouteMap />} />
          </Route>
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
