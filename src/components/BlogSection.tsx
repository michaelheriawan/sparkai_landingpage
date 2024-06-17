import React from "react";
import BlogSlider from "./BlogSlider";
import img1 from "@/assets/article/Rectangle 22-1.png";
import img2 from "@/assets/article/Rectangle 22-2.png";
import img3 from "@/assets/article/Rectangle 22-3.png";
import img4 from "@/assets/article/Rectangle 22-4.png";
import img5 from "@/assets/article/Rectangle 22.png";
import Image from "next/image";
const BlogSection = () => {
  return (
    <article>
      <div className="container">
        <h1 className="font-extrabold text-3xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-gradientStart to-gradientEnd to-95% inline-block text-transparent bg-clip-text pb-2 mt-3">
          A lot is happening,<br className="hidden lg:inline"></br>We are
          blogging about it.
        </h1>
        <div className="pb-20 mt-8 z-0 relative">
          <BlogSlider />
          <div className="hidden xl:grid xl:grid-cols-12 xl:gap-11">
            <div className="xl:col-span-4">
              <figure className="h-full">
                <Image
                  src={img4}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[287px] w-full object-cover object-center"
                />
                <div className="bg-darkBlue2 h-[calc(100%-287px)]">
                  <div className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <p className="font-bold">Jan 26,2024</p>
                      <h2 className="font-extrabold mb-32 text-xl">
                        GPT-4 and Open AI is the future. Let us explore how it
                        is?
                      </h2>
                    </div>
                    <button className="mt-9 text-left">
                      Read Full Article
                    </button>
                  </div>
                </div>
              </figure>
            </div>
            <div className="xl:col-span-8 grid grid-cols-2 gap-11">
              <figure>
                <Image
                  src={img1}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[130px] w-full object-cover object-center"
                />
                <div className="bg-darkBlue2">
                  <div className="p-4">
                    <p className="font-bold">Jan 26,2024</p>
                    <h2 className="font-extrabold mb-4">
                      GPT-4 and Open AI is the future. Let us explore how it is?
                    </h2>
                    <button className="mt-9">Read Full Article</button>
                  </div>
                </div>
              </figure>
              <figure>
                <Image
                  src={img2}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[130px] w-full object-cover object-center"
                />
                <div className="bg-darkBlue2">
                  <div className="p-4">
                    <p className="font-bold">Jan 26,2024</p>
                    <h2 className="font-extrabold mb-4">
                      GPT-4 and Open AI is the future. Let us explore how it is?
                    </h2>
                    <button className="mt-9">Read Full Article</button>
                  </div>
                </div>
              </figure>
              <figure>
                <Image
                  src={img3}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[130px] w-full object-cover object-center"
                />
                <div className="bg-darkBlue2">
                  <div className="p-4">
                    <p className="font-bold">Jan 26,2024</p>
                    <h2 className="font-extrabold mb-4">
                      GPT-4 and Open AI is the future. Let us explore how it is?
                    </h2>
                    <button className="mt-9">Read Full Article</button>
                  </div>
                </div>
              </figure>
              <figure>
                <Image
                  src={img5}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[130px] w-full object-cover object-center"
                />
                <div className="bg-darkBlue2">
                  <div className="p-4">
                    <p className="font-bold">Jan 26,2024</p>
                    <h2 className="font-extrabold mb-4">
                      GPT-4 and Open AI is the future. Let us explore how it is?
                    </h2>
                    <button className="mt-9">Read Full Article</button>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogSection;
