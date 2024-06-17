import React from "react";
import Image from "next/image";
import logo from "@/assets/Asset 1.svg";

const Footer = () => {
  return (
    <footer className="bg-[#031B34] mt-20">
      <div className="container pt-20 xl:pt-44 pb-10">
        <h1 className="font-extrabold text-3xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-gradientStart to-gradientEnd to-95% block mx-auto text-transparent bg-clip-text text-center">
          Do you want to step in to the future before others
        </h1>
        <button className="border-white border-solid border-2 py-3 px-5 block mx-auto mt-10 text-base xl:mt-16">
          Request Early Access
        </button>
        <div className="mt-20 xl:mt-48 grid grid-cols-1 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Image
              src={logo}
              alt=""
              className="w-auto h-8 block mx-auto sm:ml-0"
            />
            <p className="text-center text-sm mt-3 sm:text-left">
              Crechterwoord K12 182 DK Alknjkcb, <br></br>All Rights Reserved
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:col-span-4 xl:text-sm">
            <div className="text-center mt-12 sm:text-left lg:mt-0 grid grid-cols-1 gap-4 xl:gap-6">
              <p className="font-bold">Links</p>
              <p className="">Overons</p>
              <p className="">Social Media</p>
              <p className="">Counters</p>
              <p className="">Contact</p>
            </div>
            <div className="text-center mt-12 sm:text-left lg:mt-0 grid grid-cols-1 gap-4 xl:gap-6">
              <p className="font-bold">Company</p>
              <p className="">Terms & Conditions</p>
              <p className="">Social Media</p>
              <p className="">Privacy Policy</p>
              <p className="">Contact</p>
            </div>
            <div className="text-center mt-12 sm:text-left lg:mt-0 grid grid-cols-1 gap-4 xl:gap-6">
              <p className="font-bold">Get in touch</p>
              <p className="">Crechterwoord K12 182 DK Alknjkcb</p>
              <p className="">085-132567</p>
              <p className="">info@payme.net</p>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center sm:mt-20">
          © 2024 SparkAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
