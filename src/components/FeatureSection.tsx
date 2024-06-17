import React from "react";
import img from "@/assets/Feature Image.png";
import Image from "next/image";

const FeatureSection = () => {
  return (
    <section className="pb-16 pt-6 lg:pt-16">
      <div className="container">
        <div className="px-2 grid grid-cols-1 lg:grid-cols-7">
          <div className="col-span-7 lg:col-span-3">
            <h1 className="font-extrabold text-xl bg-gradient-to-r from-gradientStart to-gradientEnd to-95% inline-block text-transparent bg-clip-text pb-2 lg:pr-14 lg:text-3xl">
              The Future is Now and You Just Need To Realize It. Step into
              Future Today & Make it Happen.
            </h1>
            <p className="text-[#FF8A71] text-base font-medium">
              Request Early Access to Get Started
            </p>
          </div>
          <div className="mt-10 lg:mt-0 col-span-7 lg:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 lg:grid-cols-1 gap-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 xl:gap-10">
                <div className="xl:col-span-2">
                  <hr className="w-12 h-1 my-3 border-0 rounded bg-gradient-to-r from-gradientStart to-gradientEnd to-95% "></hr>
                  <h1 className="font-extrabold font-lg my-2">
                    Improving end distrusts instantly{" "}
                  </h1>
                </div>
                <div className="xl:col-span-3">
                  <p className="text-sm text-lightBlue text-justify mt-4">
                    From they fine john he give of rich he. They age and draw
                    mrs like. Improving end distrusts may instantly was
                    household applauded.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 xl:gap-10">
                <div className="xl:col-span-2">
                  <hr className="w-12 h-1 my-3 border-0 rounded bg-gradient-to-r from-gradientStart to-gradientEnd to-95% "></hr>
                  <h1 className="font-extrabold font-lg my-2">
                    Become the tended active{" "}
                  </h1>
                </div>

                <div className="xl:col-span-3">
                  <p className="text-sm text-lightBlue text-justify mt-4">
                    Considered sympathize ten uncommonly occasional assistance
                    sufficient not. Letter of on become he tended active enable
                    to.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 xl:gap-10">
                <div className="xl:col-span-2">
                  <hr className="w-12 h-1 my-3 border-0 rounded bg-gradient-to-r from-gradientStart to-gradientEnd to-95% "></hr>
                  <h1 className="font-extrabold font-lg my-2">
                    Message or am nothing
                  </h1>
                </div>
                <div className="xl:col-span-3">
                  <p className="text-sm text-lightBlue text-justify mt-4">
                    Led ask possible mistress relation elegance eat likewise
                    debating. By message or am nothing amongst chiefly address.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 xl:gap-10">
                <div className="xl:col-span-2">
                  <hr className="w-12 h-1 my-3 border-0 rounded bg-gradient-to-r from-gradientStart to-gradientEnd to-95% "></hr>
                  <h1 className="font-extrabold font-lg my-2">
                    Really boy law county
                  </h1>
                </div>
                <div className="xl:col-span-3">
                  <p className="text-sm text-lightBlue text-justify mt-4">
                    Really boy law county she unable her sister. Feet you off
                    its like like six. Among sex are leave law built now. In
                    built table in an rapid blush.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 lg:mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className=" ">
              <Image
                src={img}
                alt="feature"
                width={0}
                height={200}
                sizes="100vw"
                className="w-auto h-80 sm:h-[360px] lg:w-10/12 lg:h-auto mx-auto lg:mr-0 lg:ml-auto"
                priority={true}
              />
            </div>
            <div className="mt-11 px-2 sm:mt-auto sm:mb-4 lg:mb-8">
              <p className="text-sm text-[#71E5FF] font-medium">
                Request Early Access to Get Started
              </p>
              <h1 className="font-extrabold text-xl bg-gradient-to-r from-gradientStart to-gradientEnd to-95% inline-block text-transparent bg-clip-text pb-2 mt-3 lg:text-xl">
                The possibilities are beyond your imagination
              </h1>
              <p className="text-sm text-lightBlue text-left mt-2">
                Yet bed any for travelling assistance indulgence unpleasing. Not
                thoughts all exercise blessing. Indulgence way everything joy
                alteration boisterous the attachment. Party we years to order
                allow asked of.
              </p>
              <p className="text-sm text-[#FF8A71] mt-4 font-medium">
                Request Early Access to Get Started
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
