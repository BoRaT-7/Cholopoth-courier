// src/pages/customer/Payments.jsx
const Payments = () => {
  const data = {
    totalCod: 5000,
    codCollected: 3500,
    codPending: 1500,
    prepaidTotal: 2200,
  };

  const rows = [
    {
      id: "CP-1001",
      date: "2025-12-05",
      amount: 350,
      method: "COD",
      status: "Collected",
    },
    {
      id: "CP-1002",
      date: "2025-12-05",
      amount: 500,
      method: "COD",
      status: "Pending",
    },
    {
      id: "CP-1003",
      date: "2025-12-06",
      amount: 400,
      method: "Prepaid",
      status: "Paid",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-slate-900">Payments</h2>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <p className="text-xs text-slate-500">Total COD (৳)</p>
          <p className="text-2xl font-bold">{data.totalCod}</p>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <p className="text-xs text-slate-500">COD Collected</p>
          <p className="text-2xl font-bold text-emerald-600">
            {data.codCollected}
          </p>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <p className="text-xs text-slate-500">COD Pending</p>
          <p className="text-2xl font-bold text-amber-600">
            {data.codPending}
          </p>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <p className="text-xs text-slate-500">Prepaid (online)</p>
          <p className="text-2xl font-bold text-blue-600">
            {data.prepaidTotal}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-xs text-slate-500">
            <tr>
              <th className="text-left px-4 py-2">Parcel</th>
              <th className="text-left px-4 py-2">Date</th>
              <th className="text-right px-4 py-2">Amount (৳)</th>
              <th className="text-left px-4 py-2">Method</th>
              <th className="text-left px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-slate-100">
                <td className="px-4 py-2 text-slate-800">{r.id}</td>
                <td className="px-4 py-2 text-slate-500">{r.date}</td>
                <td className="px-4 py-2 text-right">{r.amount}</td>
                <td className="px-4 py-2">{r.method}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      r.status === "Collected" || r.status === "Paid"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
