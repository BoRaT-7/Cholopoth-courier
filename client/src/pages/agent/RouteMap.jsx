// src/pages/agent/RouteMap.jsx
import { useParams } from "react-router-dom";

const RouteMap = () => {
  const { id } = useParams();
  const parcel = {}; // GET /api/parcels/:id with coordinates

  return (
    <div className="flex">
      <div className="w-1/3 p-4">
        {/* parcel info + buttons for Picked Up / In Transit / Delivered */}
      </div>
      <div className="w-2/3">
        {/* MapDirectionsComponent origin=pickupCoord dest=dropCoord */}
      </div>
    </div>
  );
};

export default RouteMap;
