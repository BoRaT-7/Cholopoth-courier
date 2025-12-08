// src/pages/customer/NewBooking.jsx
import { useState } from "react";
import ParcelForm from "../../components/ParcelForm";

const NewBooking = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({});

  const handleLocationDone = (data) => {
    setBookingData(prev => ({ ...prev, ...data }));
    setStep(2);
  };

  const handleSubmitParcel = async (data) => {
    const payload = { ...bookingData, ...data };
    // POST /api/parcels
    // success হলে redirect -> /customer/my-parcels
  };

  return (
    <div className="customer-layout">
      {step === 1 && (
        // এখানে তোমার current map component বসাবে
        // onContinue={handleLocationDone}
        <div>Map + Pickup/Drop section</div>
      )}
      {step === 2 && (
        <ParcelForm onSubmit={handleSubmitParcel} />
      )}
    </div>
  );
};

export default NewBooking;
