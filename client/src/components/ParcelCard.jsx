// client/src/components/ParcelCard.jsx
import StatusBadge from "./StatusBadge";

const ParcelCard = ({ parcel, role }) => {
  // demo data handle করার জন্য default value
  const p = parcel || {
    trackingId: "CP-123456",
    pickupAddress: "Demo pickup address",
    deliveryAddress: "Demo delivery address",
    codAmount: 250,
    status: "BOOKED",
  };

  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-sm">
          Tracking ID: {p.trackingId}
        </h3>
        <StatusBadge status={p.status} />
      </div>

      <div className="text-xs text-gray-600">
        <p><span className="font-medium">Pickup:</span> {p.pickupAddress}</p>
        <p><span className="font-medium">Drop:</span> {p.deliveryAddress}</p>
      </div>

      <div className="flex justify-between items-center text-sm mt-2">
        <span>COD: <span className="font-semibold">{p.codAmount} ৳</span></span>
        {role === "customer" && (
          <button className="px-3 py-1 text-xs bg-green-600 text-white rounded">
            Track
          </button>
        )}
        {role === "agent" && (
          <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded">
            Open Route
          </button>
        )}
      </div>
    </div>
  );
};

export default ParcelCard;
