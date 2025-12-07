// src/components/home/TestimonialsSection.jsx
import CustomerTop from "../../assets/customer-top.png"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Awlad Hossain",
    role: "Senior Product Designer",
    quote:
      "CholoPoth Courier keeps our parcels on time and fully trackable. The live updates give our team and customers complete peace of mind.",
  },
  {
    id: 2,
    name: "Rasel Ahmed",
    role: "E‑commerce Owner",
    quote:
      "Pickup and delivery are super reliable. COD settlements are fast, which keeps our cash flow and customer satisfaction high.",
  },
  {
    id: 3,
    name: "Nasir Uddin",
    role: "Logistics Manager",
    quote:
      "Their rider network and support team respond quickly. Even during peak hours, our parcels reach customers without delays.",
  },
]

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="mt-16 mb-20">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* icon + heading */}
        <div className="space-y-3">
          <div className="flex justify-center">
            <div className="h-12 w-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
             <img src={CustomerTop} alt="" />
            </div>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            What our customers are saying
          </h2>
          <p className="text-xs md:text-sm text-slate-500 max-w-2xl mx-auto">
            Businesses across Bangladesh trust CholoPoth Courier to keep their
            deliveries fast, safe, and transparent for every parcel.
          </p>
        </div>

        {/* cards row */}
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item, index) => {
            const isActive = index === activeIndex
            return (
              <div
                key={item.id}
                className={`rounded-3xl p-5 md:p-6 border transition-all duration-200 ${
                  isActive
                    ? "bg-white border-emerald-200 shadow-lg"
                    : "bg-slate-50 border-slate-100 opacity-60 md:opacity-50"
                }`}
              >
                <div className="flex flex-col h-full text-left space-y-3">
                  <span className="text-emerald-500 text-2xl">“</span>
                  <p className="text-xs md:text-sm leading-relaxed text-slate-600">
                    {item.quote}
                  </p>
                  <div className="pt-3">
                    <p className="text-sm font-semibold text-slate-900">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {testimonials.map((_, index) => {
            const isActive = index === activeIndex
            return (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "w-5 bg-emerald-500"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
