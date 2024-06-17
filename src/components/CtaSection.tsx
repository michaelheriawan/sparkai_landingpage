import React from "react";

const CTASection = () => {
  return (
    <section>
      <div className="container pt-8 pb-20 lg:pt-24 lg:pb-40">
        <div className="bg-gradient-to-r from-gradientStart to-gradientEnd to-95% text-black px-6 py-7 rounded-lg text-center flex flex-col lg:flex-row lg:text-left lg:justify-between lg:items-center lg:py-14 lg:px-8">
          <div>
            <p className="text-sm font-medium">
              Request Early Access to Get Started
            </p>
            <h1 className="font-extrabold text-xl  pb-2 mt-3">
              Register today & start exploring the endless possiblities.
            </h1>
          </div>
          <div>
            <button className="rounded-[40px] px-8 py-3 text-white bg-black mx-auto block mt-3 mb-1">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
