// src/pages/customer/MyParcels.jsx
import { useState, useEffect } from "react";
import ParcelCard from "../../components/ParcelCard";
import StatusBadge from "../../components/StatusBadge";

const MyParcels = () => {
  const [parcels, setParcels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");

  // Dummy data (fallback)
  const dummyParcels = [
    {
      id: 1,
      trackingId: "CP-1001",
      receiverName: "Rahim Uddin",
      from: "Dhaka",
      to: "Chattogram",
      status: "In-Transit",
      weight: 1.2,
      codAmount: 750,
      type: "COD",
      bookedAt: "10 Dec 2025",
    },
    {
      id: 2,
      trackingId: "CP-1002",
      receiverName: "Karim Ahmed",
      from: "Dhaka",
      to: "Sylhet",
      status: "Delivered",
      weight: 0.8,
      codAmount: 1200,
      type: "Prepaid",
      bookedAt: "08 Dec 2025",
    },
    {
      id: 3,
      trackingId: "CP-1003",
      receiverName: "Nusrat Jahan",
      from: "Gazipur",
      to: "Dhaka",
      status: "Pending",
      weight: 2.5,
      codAmount: 500,
      type: "COD",
      bookedAt: "11 Dec 2025",
    },
  ];

  // Fetch from backend
  useEffect(() => {
    const token = localStorage.getItem("customerToken");

    fetch("http://localhost:5000/api/parcels/my-parcels", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.parcels) {
          setParcels(data.parcels);
        } else {
          setParcels(dummyParcels); // fallback
        }
        setLoading(false);
      })
      .catch(() => {
        setParcels(dummyParcels); // fallback on error
        setLoading(false);
      });
  }, []);

  const filtered = parcels.filter((p) => {
    const matchStatus =
      statusFilter === "all" ||
      p.status.toLowerCase() === statusFilter.toLowerCase();

    const matchSearch =
      p.trackingId.toLowerCase().includes(search.toLowerCase()) ||
      p.receiverName.toLowerCase().includes(search.toLowerCase());

    return matchStatus && matchSearch;
  });

  if (loading) {
    return (
      <div className="text-center py-10 text-slate-500">Loading parcels...</div>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold mb-1">My Parcels</h1>
        <p className="text-sm text-slate-500">
          Track and manage all parcels you have booked.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center justify-between bg-white p-3 rounded-xl shadow-sm">
        <div className="flex gap-2 text-xs">
          <button
            onClick={() => setStatusFilter("all")}
            className={`px-3 py-1 rounded-full border text-xs ${
              statusFilter === "all"
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-700"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setStatusFilter("Pending")}
            className="px-3 py-1 rounded-full border text-xs"
          >
            <StatusBadge status="Pending" />
          </button>

          <button
            onClick={() => setStatusFilter("In-Transit")}
            className="px-3 py-1 rounded-full border text-xs"
          >
            <StatusBadge status="In-Transit" />
          </button>

          <button
            onClick={() => setStatusFilter("Delivered")}
            className="px-3 py-1 rounded-full border text-xs"
          >
            <StatusBadge status="Delivered" />
          </button>
        </div>

        <input
          type="text"
          placeholder="Search by tracking ID or name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-64 border border-slate-200 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-lime-500"
        />
      </div>

      {/* Parcel List */}
      {filtered.length === 0 ? (
        <div className="text-sm text-slate-500 bg-white rounded-xl p-6 text-center">
          No parcels found for this filter.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((parcel) => (
            <ParcelCard key={parcel.id} parcel={parcel} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyParcels;
