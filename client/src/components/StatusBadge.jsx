// client/src/components/StatusBadge.jsx
const colors = {
  BOOKED: "bg-gray-100 text-gray-700",
  PICKED_UP: "bg-blue-100 text-blue-700",
  IN_TRANSIT: "bg-yellow-100 text-yellow-700",
  DELIVERED: "bg-green-100 text-green-700",
  FAILED: "bg-red-100 text-red-700",
};

const StatusBadge = ({ status = "BOOKED" }) => {
  const cls = colors[status] || colors.BOOKED;
  return (
    <span className={`px-2 py-1 rounded-full text-[10px] font-semibold ${cls}`}>
      {status.replace("_", " ")}
    </span>
  );
};

export default StatusBadge;
