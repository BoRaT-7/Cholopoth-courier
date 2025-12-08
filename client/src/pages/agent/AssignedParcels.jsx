// src/pages/agent/AssignedParcels.jsx
const AssignedParcels = () => {
  const parcels = []; // GET /api/parcels?assignedTo=me

  const updateStatus = (id, status) => {
    // PATCH /api/parcels/:id/status
  };

  return (
    <div>
      <h2>Assigned Parcels</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Parcel</th><th>Pickup</th><th>Drop</th><th>COD</th><th>Status</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {parcels.map(p => (
            <tr key={p._id}>
              <td>{p.trackingId}</td>
              <td>{p.pickupAddress}</td>
              <td>{p.deliveryAddress}</td>
              <td>{p.codAmount}</td>
              <td><StatusBadge status={p.status} /></td>
              <td className="space-x-2">
                <button onClick={() => updateStatus(p._id, "PICKED_UP")}>Picked</button>
                <button onClick={() => updateStatus(p._id, "IN_TRANSIT")}>Transit</button>
                <button onClick={() => updateStatus(p._id, "DELIVERED")}>Done</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignedParcels;
