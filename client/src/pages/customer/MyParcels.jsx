// src/pages/customer/MyParcels.jsx
import ParcelCard from "../../components/ParcelCard";

const MyParcels = () => {
  const parcels = []; // GET /api/parcels?role=customer

  return (
    <div>
      <h2 className="page-title">My Parcels</h2>
      <div className="grid gap-4">
        {parcels.map(p => (
          <ParcelCard key={p._id} parcel={p} role="customer" />
        ))}
      </div>
    </div>
  );
};

export default MyParcels;
