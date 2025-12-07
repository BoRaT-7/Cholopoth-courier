import React from "react"
import BigDeliveryMan from "../../assets/big-deliveryman.png"
import TinyDeliveryman from "../../assets/tiny-deliveryman.png"
import HowItWorks from "../../components/Home/HowItWorks"
import ServicesSection from "../../components/Home/ServicesSection"
 
const CustomerDashboard = () => {
  return (
     <div>
    <div className="min-h-[calc(100vh-80px)] flex items-center -mt-10 justify-center ">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-lg p-8 grid md:grid-cols-2 gap-8">
        {/* left text */}
        <div className="space-y-4">
          <img src={TinyDeliveryman} alt="" />
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            We Make Sure Your{" "}
            <span className="text-lime-500">Parcel Arrives</span> On Time – No
            Fuss.
          </h1>
          <p className="text-sm text-gray-500 max-w-md">
            Fast, reliable parcel delivery with real-time tracking and zero
            hassle. From personal packages to business shipments – we deliver on
            time, every time.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            <button className="btn btn-sm md:btn-md bg-lime-400 px-3 text-gray-900 font-bold border-none hover:bg-lime-500">
              Track Your Parcel
            </button>
            {/* Be A Rider Button */}
<button className="btn border border-lime-400 hover:bg-lime-400 font-bold text-gray-700 te px-3 rounded-[5px] transition-all duration-300">
  Be A Rider
</button>


          </div>
        </div>

        {/* right image */}
        <div className="flex items-center justify-center">
          <img
            src={BigDeliveryMan}
            alt="Courier delivering parcels"
            className="max-h-72 w-auto object-contain"
          />
        </div>
      </div> 
    </div>
   
     <HowItWorks></HowItWorks>
     <ServicesSection></ServicesSection>
     
     
    </div>
    
  )
}

export default CustomerDashboard
