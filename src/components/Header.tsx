import React from "react";
import Image from "next/image";

import HeaderIllus from "./HeaderIllus";
import Navbar from "./Navbar";
const Header = () => {
  const urlImage = "https://i.pravatar.cc/300?img=";
  const urlArray = Array.apply(null, Array(5)).map(function (x, i) {
    return urlImage + `${i + 1}`;
  });

  return (
    <header className="relative z-0">
      <Navbar />
      <div className="container pt-20 lg:pt-0 pb-12 xl:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12">
          <div className="lg:pt-20 lg:col-span-1 xl:pt-24 xl:col-span-7 xl:pb-11">
            <h1 className=" font-extrabold text-5xl xl:text-6xl bg-gradient-to-r from-gradientStart to-gradientEnd to-95% inline-block text-transparent bg-clip-text pb-2 lg:leading-tight ">
              Let&#x2019;s Build Something amazing with
              <br className="hidden lg:block"></br> GPT-4 OpenAI
            </h1>
            <p className="text-lightBlue mt-4 xl:mt-8">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            <div className="mt-8 relative md:w-5/6 lg:w-11/12 xl:mt-11">
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-darkBlue rounded-l pl-4 py-2 pr-5 w-full  placeholder:text-placeHolder outline-0 lg:py-3 lg:pl-5 xl:py-5 xl:pl-8"
              />
              <button className="bg-orange rounded-r pl-2 py-2 pr-2 absolute top-0 bottom-0 right-0 text-sm lg:py-3 lg:px-5 xl:py-5 xl:px-8">
                Get Started
              </button>
            </div>
            <div className="mt-9 md:flex gap-2 md:items-center">
              <ul className="flex justify-center">
                {urlArray.map((user, index) => (
                  <li
                    className={
                      index !== 0 ? "inline-block -ml-4" : "inline-block"
                    }
                    key={index}
                  >
                    <Image
                      src={user}
                      alt={`user${index}`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="rounded-full w-10 h-auto border-white border-solid border-2 "
                    />
                  </li>
                ))}
                <li className="inline-block -ml-4 w-10 h-auto rounded-full border-white border-solid border-2 bg-cyanGreenBg text-black relative">
                  <span className="absolute h-[12] valign text-sm text-center ">
                    1.6k+
                  </span>
                </li>
              </ul>
              <p className="text-sm mt-4 text-center md:mt-0 lg:text-[.7rem] xl:text-[.9rem]">
                1,600 people requested access a visit in last 24 hours
              </p>
            </div>
          </div>
          <div className="w-full h-full hidden lg:block relative lg:col-span-1 xl:col-span-5 xl:h-[650px]">
            <HeaderIllus />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
