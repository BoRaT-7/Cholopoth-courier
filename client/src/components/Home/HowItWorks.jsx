// src/components/home/HowItWorks.jsx
import BookingIcon from "../../assets/bookingIcon.png";

const steps = [
  {
    id: 1,
    title: "Booking Pick & Drop",
    description:
      "From personal parcels to business shipments – schedule pickup in a few taps.",
  },
  {
    id: 2,
    title: "Cash On Delivery",
    description:
      "Collect payments at the doorstep with secure COD for your customers.",
  },
  {
    id: 3,
    title: "Delivery Hub",
    description:
      "Smart routing through city hubs keeps every delivery on time, every time.",
  },
  {
    id: 4,
    title: "Booking SME & Corporate",
    description:
      "Custom courier plans for SMEs and enterprises with priority support.",
  },
]

const HowItWorks = () => {
  return (
    <section className="mt-12 mb-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6">
          How it works
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group bg-white rounded-3xl p-5 shadow-sm border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all duration-200 flex flex-col gap-3"
            >
              {/* icon circle */}
              <div className="h-10 w-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <img src={BookingIcon} alt="" />
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-600">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
