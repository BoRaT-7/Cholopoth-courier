// src/pages/customer/MyParcels.jsx
import { useEffect, useState } from "react";
import ParcelCard from "../../components/ParcelCard";
import StatusBadge from "../../components/StatusBadge";

const MyParcels = () => {
  const [parcels, setParcels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const token = localStorage.getItem("customerToken");

    const fetchParcels = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/parcels/my-parcels",
          {
            headers: { Authorization: `Bearer ${token}` },
            signal: controller.signal,
          }
        );

        let baseParcels = [];

        if (res.ok) {
          const data = await res.json();
          if (data?.parcels && Array.isArray(data.parcels)) {
            baseParcels = data.parcels;
          }
        }

        // localStorage থেকে নতুন বুকিংগুলা আনো
        const local = JSON.parse(localStorage.getItem("myParcels") || "[]");

        // merge করে setParcels
        setParcels([...baseParcels, ...local]);
      } catch (error) {
        if (error.name !== "AbortError") {
          // শুধু localStorage এর data দেখাও (backend ডাউন থাকলে)
          const local = JSON.parse(localStorage.getItem("myParcels") || "[]");
          setParcels(local);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchParcels();

    return () => controller.abort();
  }, []);

  const filteredParcels = parcels.filter((parcel) => {
    const matchesStatus =
      statusFilter === "all" ||
      parcel.status?.toLowerCase() === statusFilter.toLowerCase();

    const lowerSearch = searchTerm.toLowerCase();
    const matchesSearch =
      parcel.trackingId?.toLowerCase().includes(lowerSearch) ||
      (parcel.receiverName || "").toLowerCase().includes(lowerSearch);

    return matchesStatus && matchesSearch;
  });

  if (loading) {
    return (
      <div className="py-10 text-center text-slate-500">
        Loading parcels...
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <header>
        <h1 className="mb-1 text-2xl font-semibold">My Parcels</h1>
        <p className="text-sm text-slate-500">
          Track and manage all parcels you have booked.
        </p>
      </header>

      {/* Filters */}
      <section className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white p-3 shadow-sm">
        <div className="flex gap-2 text-xs">
          <button
            type="button"
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
            type="button"
            onClick={() => setStatusFilter("Pending")}
            className="px-3 py-1 rounded-full border text-xs"
          >
            <StatusBadge status="Pending" />
          </button>

          <button
            type="button"
            onClick={() => setStatusFilter("In-Transit")}
            className="px-3 py-1 rounded-full border text-xs"
          >
            <StatusBadge status="In-Transit" />
          </button>

          <button
            type="button"
            onClick={() => setStatusFilter("Delivered")}
            className="px-3 py-1 rounded-full border text-xs"
          >
            <StatusBadge status="Delivered" />
          </button>
        </div>

        <input
          type="text"
          placeholder="Search by tracking ID or name"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="w-full rounded-lg border border-slate-200 px-3 py-1.5 text-sm outline-none focus:border-lime-500 md:w-64"
        />
      </section>

      {/* Parcel list */}
      <section>
        {filteredParcels.length === 0 ? (
          <div className="rounded-xl bg-white p-6 text-center text-sm text-slate-500">
            No parcels found for this filter.
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {filteredParcels.map((parcel) => (
              <ParcelCard
                key={parcel.id || parcel._id || parcel.trackingId}
                parcel={parcel}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default MyParcels;
