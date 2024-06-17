import React from "react";
import Image from "next/image";
import logo1 from "@/assets/logo_icon/atlassian.png";
import logo2 from "@/assets/logo_icon/dropbox.png";
import logo3 from "@/assets/logo_icon/google.png";
import logo4 from "@/assets/logo_icon/shopify.png";
import logo5 from "@/assets/logo_icon/slack.png";
const CompanySection = () => {
  return (
    <section className="flex flex-wrap items-center gap-2 justify-center mt-14 lg:col-span-2 xl:col-span-12 xl:-mt-0 xl:gap-11">
      <Image
        src={logo3}
        alt="google"
        className="h-5 md:h-6 w-auto object-contain xl:h-6"
      />
      <Image
        src={logo5}
        alt="slack"
        className="h-5 md:h-6 w-auto object-contain xl:h-6"
      />
      <Image
        src={logo1}
        alt="atlassian"
        className="h-5 md:h-6 w-auto object-contain xl:h-6"
      />
      <Image
        src={logo2}
        alt="dropbox"
        className="h-5 md:h-6 w-auto object-contain xl:h-6"
      />
      <Image
        src={logo4}
        alt="shopify"
        className="h-5 md:h-6 w-auto object-contain"
      />
    </section>
  );
};

export default CompanySection;
