import React from "react";
import LocationMerchant from "../../assets/location-merchant.png";
import BeAMerchantBg from "../../assets/be-a-merchant-bg.png";

const MerchantCtaBanner = () => {
  return (
    <section className="mt-16 mb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-3xl bg-emerald-950 text-white px-6 py-8 md:px-10 md:py-12 relative overflow-hidden">
          {/* background texture image */}
          <div className="absolute inset-0 opacity-40 mix-blend-soft-light pointer-events-none">
            <img
              src={BeAMerchantBg}
              alt="Merchant background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* subtle gradient top */}
          <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-emerald-300/40 via-emerald-900/0 to-transparent" />

          <div className="relative grid gap-10 md:grid-cols-[1.6fr_1.1fr] items-center">
            {/* left text */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
                Merchant and Customer Satisfaction
                <br />
                is Our First Priority
              </h2>
              <p className="text-sm md:text-base text-emerald-100 max-w-md leading-relaxed">
                We offer fair delivery charges with high-value service and full
                visibility of each parcel. CholoPoth Courier delivers on time
                in every corner of Bangladesh.
              </p>

              <div className="flex flex-wrap gap-4 md:gap-6 pt-4">
                <button className="btn px-3 font-bold  btn-sm md:btn-md border-none bg-lime-400  text-black hover:bg-lime-300">
                  Become a Merchant
                </button>
                <button className="btn border ml-20 text-lime-400 border-lime-400 hover:bg-lime-400 font-bold hover:text-black te px-3 rounded-[5px] transition-all duration-300">
  Earn with CholoPoth Courier
</button>
               
              </div>
            </div>

            {/* right illustration with image */}
            <div className="flex justify-center md:justify-end mt-6 md:mt-0">
              <div className="relative w-80 font-bold h-42 mr-20 flex items-center justify-center">
                {/* outline box frame */}
                <div className="absolute inset-0 rounded-2xl border border-emerald-300/40" />
                {/* main image */}
                <img
                  src={LocationMerchant}
                  alt="Merchant parcel location"
                  className="relative z-10 max-h-40 w-auto object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchantCtaBanner;
