import React from "react";

const DefSection = () => {
  return (
    <section className="pt-10 pb-20 xl:pt-32">
      <div className="container">
        <div className="bg-darkBlue2 p-4 md:p-10 defSection relative xl:p-14">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-5">
              <hr className="w-8 h-1 my-3 border-0 rounded bg-gradient-to-r from-gradientStart to-gradientEnd to-95% "></hr>
            </div>
            <div className="md:col-span-2">
              <h1 className="font-extrabold text-lg my-2 md:mt-1 xl:text-2xl">
                What is SparkAI
              </h1>
            </div>
            <div className="md:col-span-3">
              <p className="text-sm text-lightBlue text-justify md:mt-1">
                We so opinion friends me message as delight. Whole front do of
                plate heard oh ought. His defective nor convinced residence own.
                Connection has put impossible own apartments boisterous. At
                jointure ladyship an insisted so humanity he. Friendly bachelor
                entrance to on by.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-9 grid-cols-1 grid md:grid-cols-2 xl:mt-20">
            <div>
              <h1 className="font-extrabold text-xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-gradientStart to-gradientEnd to-95% inline-block text-transparent bg-clip-text pb-2">
                The possibilities are beyond your imagination
              </h1>
            </div>
            <div>
              <p className="text-[#FF8A71] text-base font-medium md:text-right">
                Explore The Library
              </p>
            </div>
          </div>
          <div className="mt-7 md:mt-9 grid grid-cols-1 md:grid-cols-3 gap-4 mb-5 md:gap-8 xl:mt-20">
            <div>
              <hr className="w-8 h-1 my-3 border-0 rounded bg-gradient-to-r from-gradientStart to-gradientEnd to-95% "></hr>
              <h1 className="font-extrabold text-lg my-2 xl:text-2xl">
                Chatbots
              </h1>
              <p className="text-sm text-lightBlue text-justify mt-4 xl:mt-14">
                We so opinion friends me message as delight. Whole front do of
                plate heard oh ought.
              </p>
            </div>
            <div className="">
              <hr className="w-8 h-1 my-3 border-0 rounded bg-gradient-to-r from-gradientStart to-gradientEnd to-95% "></hr>
              <h1 className="font-extrabold text-lg my-2 xl:text-2xl">
                Knowledgebase
              </h1>
              <p className="text-sm text-lightBlue text-justify mt-4 xl:mt-14">
                At jointure ladyship an insisted so humanity he. Friendly
                bachelor entrance to on by. As put impossible own apartments b
              </p>
            </div>
            <div className="">
              <hr className="w-8 h-1 my-3 border-0 rounded bg-gradient-to-r from-gradientStart to-gradientEnd to-95% "></hr>
              <h1 className="font-extrabold text-lg my-2 xl:text-2xl">
                Education
              </h1>
              <p className="text-sm text-lightBlue text-justify mt-4 xl:mt-14">
                At jointure ladyship an insisted so humanity he. Friendly
                bachelor entrance to on by. As put impossible own apartments b
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefSection;
