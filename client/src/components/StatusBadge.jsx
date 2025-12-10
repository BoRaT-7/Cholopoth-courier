// ছোট status badge
const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  booked: "bg-blue-100 text-blue-800",
  "in-transit": "bg-indigo-100 text-indigo-800",
  delivered: "bg-emerald-100 text-emerald-800",
  cancelled: "bg-red-100 text-red-800",
};

const StatusBadge = ({ status }) => {
  const key = status?.toLowerCase();
  const color = statusColors[key] || "bg-slate-100 text-slate-800";

  return (
    <span className={`px-2 py-0.5 text-xs rounded-full font-medium ${color}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
