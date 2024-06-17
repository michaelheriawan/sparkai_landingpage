"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/assets/Asset 1.svg";
import { FiMenu, FiX } from "react-icons/fi";
const NavbarFixed = () => {
  const [MobileClass, setMobileClass] = useState(
    "w-full block fixed z-50 bg-[#040c18] py-3 lg:hidden"
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined && window.innerWidth >= 1024) {
      let windowHeight = window.scrollY;
      windowHeight > 500
        ? setMobileClass("w-full block fixed z-50 bg-[#040c18] py-3")
        : setMobileClass("hidden relative");
    }
  };
  return (
    <nav className={MobileClass}>
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="">
              <Image src={logo} alt="logo" className="w-28" priority={true} />
            </Link>
            <ul className="hidden lg:flex gap-4 lg:ml-8 xl:ml-16 xl:gap-9">
              <li>
                <Link href="">Home</Link>
              </li>
              <li>
                <Link href="">What is SparkAI?</Link>
              </li>
              <li>
                <Link href="">OpenAI</Link>
              </li>
              <li>
                <Link href="">Case Studies</Link>
              </li>
              <li>
                <Link href="">Library</Link>
              </li>
            </ul>
          </div>
          <div className="md:flex md:gap-4">
            <button className="hidden md:block">Sign In</button>
            <button className="hidden md:block rounded bg-[#FF4820] py-2 px-6 xl:py-4 xl:px-11">
              Sign Up
            </button>
            {!isMobileMenuOpen && (
              <button
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <FiMenu className="text-4xl " />
              </button>
            )}
            {isMobileMenuOpen && (
              <button
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FiX className="text-4xl " />
              </button>
            )}
          </div>
        </div>
        {isMobileMenuOpen && (
          <div id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href="">Home</Link>
                </li>
                <li>
                  <Link href="">What is SparkAI?</Link>
                </li>
                <li>
                  <Link href="">OpenAI</Link>
                </li>
                <li>
                  <Link href="">Case Studies</Link>
                </li>
                <li>
                  <Link href="">Library</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarFixed;
