// src/components/home/ServicesSection.jsx
import React from "react";
import ServiceIcon from "../../assets/service.png";

const services = [
  { id: 1, title: "Express & Standard Delivery", description: "We deliver parcels within 24–72 hours in major cities with reliable door-to-door service.", highlighted: false },
  { id: 2, title: "Nationwide Delivery", description: "Reach customers nationwide with home delivery, ensuring your products arrive within 48–72 hours.", highlighted: true },
  { id: 3, title: "Fulfillment Solution", description: "Inventory management, order processing, and secure packaging for your growing business.", highlighted: false },
  { id: 4, title: "Cash on Home Delivery", description: "COD across major cities with secure payment handling and instant confirmation.", highlighted: false },
  { id: 5, title: "Corporate Service / Contract", description: "Custom courier plans for SMEs and enterprises with priority support and reporting.", highlighted: false },
  { id: 6, title: "Parcel Return", description: "Easy reverse logistics so your customers can return products without any hassle.", highlighted: false },
];

const ServicesSection = () => {
  return (
    <section className="mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl bg-emerald-900 px-6 py-10 md:px-10 md:py-12">
          {/* heading */}
          <div className="text-center text-white mb-8 space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold">Our Services</h2>
            <p className="text-xs md:text-sm text-emerald-100 max-w-2xl mx-auto">
              Fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments— we deliver on time, every time.
            </p>
          </div>

          {/* services grid */}
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className={`rounded-2xl p-5 flex flex-col items-center gap-3 border shadow-sm transition-all duration-200 text-center ${
                  service.highlighted
                    ? "bg-lime-300/80 border-lime-400 shadow-md"
                    : "bg-white border-emerald-50 hover:border-emerald-200 hover:shadow-md"
                }`}
              >
                {/* small icon circle */}
                <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <img src={ServiceIcon} alt={service.title} className="w-8 h-8 md:w-10 md:h-10" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm md:text-base font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm leading-relaxed text-slate-500">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
