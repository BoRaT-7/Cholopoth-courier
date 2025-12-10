import { useState } from "react";
import { useNavigate } from "react-router-dom";

const dummyAssignedParcels = [
  {
    id: 1,
    trackingId: "CP-1001",
    senderName: "Rahim Uddin",
    senderPhone: "01712345678",
    receiverName: "Karim Ahmed",
    receiverPhone: "01798765432",
    pickupAddress: "Dhaka, Gulshan",
    deliveryAddress: "Chattogram, Halishahar",
    status: "Picked Up",
    parcelType: "Document",
    weight: 0.5,
    codAmount: 750,
    assignedAt: "10 Dec 2025, 9:00 AM",
  },
  {
    id: 2,
    trackingId: "CP-1002",
    senderName: "Nusrat Jahan",
    senderPhone: "01654321098",
    receiverName: "Fatima Akter",
    receiverPhone: "01887654321",
    pickupAddress: "Gazipur, Tongi",
    deliveryAddress: "Dhaka, Mirpur",
    status: "In Transit",
    parcelType: "Package",
    weight: 2.3,
    codAmount: 1200,
    assignedAt: "10 Dec 2025, 10:30 AM",
  },
  {
    id: 3,
    trackingId: "CP-1003",
    senderName: "Ahmed Hassan",
    senderPhone: "01912345678",
    receiverName: "Sumon Roy",
    receiverPhone: "01776543210",
    pickupAddress: "Narayanganj, Siddhirganj",
    deliveryAddress: "Dhaka, Dhanmondi",
    status: "Pending",
    parcelType: "Box",
    weight: 3.5,
    codAmount: 2000,
    assignedAt: "10 Dec 2025, 11:45 AM",
  },
];

const AgentDashboard = () => {
  const navigate = useNavigate();
  const [parcels, setParcels] = useState(dummyAssignedParcels);
  const [selectedParcel, setSelectedParcel] = useState(null);

  const stats = {
    assigned: parcels.length,
    completed: parcels.filter((p) => p.status === "Delivered").length,
    inProgress: parcels.filter((p) => p.status === "In Transit").length,
    earnings: 4950,
  };

  const handleStatusUpdate = (parcelId, newStatus) => {
    setParcels(
      parcels.map((p) => (p.id === parcelId ? { ...p, status: newStatus } : p))
    );
    setSelectedParcel(null);
    alert(`Status updated to: ${newStatus}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-1">Delivery Dashboard</h1>
        <p className="text-slate-600">
          View and manage your assigned parcels
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-lime-500">
          <div className="text-sm text-slate-600 mb-1">Assigned</div>
          <div className="text-2xl font-bold">{stats.assigned}</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-blue-500">
          <div className="text-sm text-slate-600 mb-1">In Progress</div>
          <div className="text-2xl font-bold">{stats.inProgress}</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-emerald-500">
          <div className="text-sm text-slate-600 mb-1">Completed</div>
          <div className="text-2xl font-bold">{stats.completed}</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-yellow-500">
          <div className="text-sm text-slate-600 mb-1">Today's Earnings</div>
          <div className="text-2xl font-bold">৳ {stats.earnings}</div>
        </div>
      </div>

      {/* Parcels List */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Assigned Parcels</h2>

        <div className="space-y-3">
          {parcels.map((parcel) => (
            <div
              key={parcel.id}
              className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition cursor-pointer"
              onClick={() => setSelectedParcel(parcel)}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold">
                    #{parcel.trackingId} • {parcel.receiverName}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {parcel.pickupAddress} → {parcel.deliveryAddress}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 text-xs rounded-full font-medium ${
                    parcel.status === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : parcel.status === "Picked Up"
                      ? "bg-blue-100 text-blue-800"
                      : parcel.status === "In Transit"
                      ? "bg-indigo-100 text-indigo-800"
                      : "bg-emerald-100 text-emerald-800"
                  }`}
                >
                  {parcel.status}
                </span>
              </div>

              <div className="text-xs text-slate-600 space-y-1">
                <div className="flex justify-between">
                  <span>Type: {parcel.parcelType} • Weight: {parcel.weight} kg</span>
                  <span>COD: ৳ {parcel.codAmount}</span>
                </div>
                <div>
                  Receiver: {parcel.receiverPhone} • Assigned: {parcel.assignedAt}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for status update */}
      {selectedParcel && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h2 className="text-lg font-semibold mb-4">
              Update Parcel Status
            </h2>

            <div className="mb-4 p-3 bg-slate-100 rounded-lg text-sm">
              <p>
                <strong>Tracking ID:</strong> {selectedParcel.trackingId}
              </p>
              <p>
                <strong>Receiver:</strong> {selectedParcel.receiverName}
              </p>
              <p>
                <strong>Current Status:</strong> {selectedParcel.status}
              </p>
            </div>

            <div className="space-y-2">
              {["Pending", "Picked Up", "In Transit", "Delivered", "Failed"].map(
                (status) => (
                  <button
                    key={status}
                    onClick={() =>
                      handleStatusUpdate(selectedParcel.id, status)
                    }
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-100 transition text-sm"
                  >
                    {status}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() => setSelectedParcel(null)}
              className="w-full mt-4 px-4 py-2 bg-slate-200 rounded-lg text-sm font-medium hover:bg-slate-300 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentDashboard;
