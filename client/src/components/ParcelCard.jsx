import StatusBadge from "./StatusBadge";

const ParcelCard = ({ parcel }) => {
  return (
    <div className="border border-slate-200 rounded-xl p-4 flex flex-col gap-2 bg-white shadow-sm">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-sm">
          #{parcel.trackingId} • {parcel.receiverName}
        </h3>
        <StatusBadge status={parcel.status} />
      </div>

      <p className="text-xs text-slate-500">
        {parcel.from} → {parcel.to}
      </p>

      <div className="flex justify-between items-center text-xs text-slate-500">
        <span>Weight: {parcel.weight} kg</span>
        <span>COD: ৳ {parcel.codAmount}</span>
      </div>

      <div className="flex justify-between items-center text-xs text-slate-500">
        <span>Booked: {parcel.bookedAt}</span>
        <span>Type: {parcel.type}</span>
      </div>
    </div>
  );
};

export default ParcelCard;
