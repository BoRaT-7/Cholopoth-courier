// src/context/ParcelContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const ParcelContext = createContext();

export const ParcelProvider = ({ children }) => {
  const [summary, setSummary] = useState({
    totalParcels: 0,
    booked: 0,
    inTransit: 0,
    delivered: 0,
    totalCOD: 0,
    totalPrepaid: 0,
  });

  // প্রথমবার load হলে backend থেকে summary আনো
  useEffect(() => {
    const token = localStorage.getItem("customerToken");
    if (!token) return;

    fetch("http://localhost:5000/api/parcels/summary", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.summary) {
          setSummary(data.summary);
        }
      })
      .catch((err) => {
        console.log("Summary fetch error", err);
      });
  }, []);

  // নতুন parcel add হলে summary update করার helper
  const incrementSummaryOnNewParcel = (parcel) => {
    setSummary((prev) => ({
      ...prev,
      totalParcels: prev.totalParcels + 1,
      booked: prev.booked + 1, // নতুন parcel ধরছি booked/pending হিসেবে
      totalCOD:
        parcel.type === "COD"
          ? prev.totalCOD + (parcel.codAmount || 0)
          : prev.totalCOD,
      totalPrepaid:
        parcel.type === "Prepaid"
          ? prev.totalPrepaid + (parcel.codAmount || 0)
          : prev.totalPrepaid,
    }));
  };

  const value = {
    summary,
    setSummary,
    incrementSummaryOnNewParcel,
  };

  return (
    <ParcelContext.Provider value={value}>{children}</ParcelContext.Provider>
  );
};

export const useParcelContext = () => useContext(ParcelContext);
