import React from "react";
import LiveTracking from "../../assets/live-tracking.png";
import SafeDelivery from "../../assets/safe-delivery.png";
import CallCenter from "../../assets/safe-delivery.png"; // corrected image

const brands = ["CASIO", "amazon", "moonstar", "STR+", "startpeople", "randstad"];

const features = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with live parcel tracking. From pick-up to delivery, monitor every movement for complete peace of mind.",
    image: LiveTracking,
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    description:
      "Your parcels are handled with care and delivered safely to their destination. Our process minimizes delays and damages.",
    image: SafeDelivery,
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist with any shipment, tracking, or delivery questions.",
    image: CallCenter,
  },
];

const TrustedBySection = () => {
  return (
    <section className="mt-16 mb-16">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* top brand strip */}
        <div className="text-center space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-700">
            We've helped thousands of sales teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs md:text-sm text-slate-500">
            {brands.map((name) => (
              <span
                key={name}
                className="uppercase tracking-wide opacity-70 hover:opacity-100 transition-opacity"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <hr className="border-slate-200" />

        {/* feature rows */}
        <div className="space-y-4 md:space-y-6">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-6 px-5 py-4 md:px-8 md:py-6 items-center">
                {/* illustration image */}
                <div className="flex items-center justify-center mb-3 md:mb-0">
                  <div className="h-24 w-24 rounded-2xl bg-emerald-50 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-20 w-20 md:h-20 md:w-20 object-contain"
                    />
                  </div>
                </div>

                {/* text */}
                <div className="space-y-1.5 text-center md:text-left">
                  <h3 className="text-sm md:text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
