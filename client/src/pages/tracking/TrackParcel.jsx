// src/pages/tracking/TrackParcel.jsx
import { useParams } from "react-router-dom";

const TrackParcel = () => {
  const { id } = useParams();          // /tracking/:id
  const parcel = {};                  // GET /api/parcels/:id + live location via socket

  return (
    <div className="flex">
      <div className="w-1/3 p-4">
        {/* parcel info + status timeline */}
      </div>
      <div className="w-2/3">
        {/* Google Map component with current agent location */}
      </div>
    </div>
  );
};

export default TrackParcel;
