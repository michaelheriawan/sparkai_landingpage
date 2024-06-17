"use client";
import React, { useEffect, useState } from "react";
import img1 from "@/assets/article/Rectangle 22-1.png";
import img2 from "@/assets/article/Rectangle 22-2.png";
import img3 from "@/assets/article/Rectangle 22-3.png";
import img4 from "@/assets/article/Rectangle 22-4.png";
import img5 from "@/assets/article/Rectangle 22.png";
import Image from "next/image";
import Slider from "react-slick";

const BlogSlider = () => {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth <= 1025) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    isMobile && (
      <Slider {...settings}>
        <figure>
          <Image
            src={img1}
            alt="article 1"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-28 object-cover"
          />
          <div className="bg-darkBlue2">
            <div className="p-6">
              <p>Jan 26,2024</p>
              <h2>
                GPT-4 and Open AI is the future. Let us explore how it is?
              </h2>
              <button className="mt-9">Read Full Article</button>
            </div>
          </div>
        </figure>
        <figure>
          <Image
            src={img2}
            alt="article 2"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-28 object-cover"
          />
          <div className="bg-darkBlue2">
            <div className="p-6">
              <p>Jan 26,2024</p>
              <h2>
                GPT-4 and Open AI is the future. Let us explore how it is?
              </h2>
              <button className="mt-9">Read Full Article</button>
            </div>
          </div>
        </figure>
        <figure>
          <Image
            src={img3}
            alt="article 3"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-28 object-cover"
          />
          <div className="bg-darkBlue2">
            <div className="p-6">
              <p>Jan 26,2024</p>
              <h2>
                GPT-4 and Open AI is the future. Let us explore how it is?
              </h2>
              <button className="mt-9">Read Full Article</button>
            </div>
          </div>
        </figure>
        <figure>
          <Image
            src={img4}
            alt="article 4"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-28 object-cover"
          />
          <div className="bg-darkBlue2">
            <div className="p-6">
              <p>Jan 26,2024</p>
              <h2>
                GPT-4 and Open AI is the future. Let us explore how it is?
              </h2>
              <button className="mt-9">Read Full Article</button>
            </div>
          </div>
        </figure>
        <figure>
          <Image
            src={img5}
            alt="article 5"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-28 object-cover"
          />
          <div className="bg-darkBlue2">
            <div className="p-6">
              <p>Jan 26,2024</p>
              <h2>
                GPT-4 and Open AI is the future. Let us explore how it is?
              </h2>
              <button className="mt-9">Read Full Article</button>
            </div>
          </div>
        </figure>
      </Slider>
    )
  );
};

export default BlogSlider;
