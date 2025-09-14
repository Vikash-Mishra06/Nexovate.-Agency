import React from "react";
import {
  FaPhoneVolume,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-start justify-between lg:px-[80px] px-[20px] lg:py-[50px] py-[30px] gap-[60px]">
        {/* Brand & Contact */}
        <div className="lg:w-[25%] w-full flex flex-col justify-center items-start gap-5">
          <div className="text-themegreen font-bold text-left lg:text-4xl text-3xl uppercase">
            NEXOVATE <span className="text-white">.</span>
          </div>
          <p className="text-gray-300 text-md font-poppins">
            Feel free to call us in working hours Mon-Fri 9:00 - 18:00.
          </p>
          <div className="flex justify-center items-center gap-2 text-white">
            <FaPhoneVolume className="text-themegreen size-5" /> +1 (123) 456-7890
          </div>
          <div className="flex justify-center items-center gap-6">
            <FaFacebookF className="size-4 text-white hover:text-themegreen cursor-pointer" />
            <FaTwitter className="size-4 text-white hover:text-themegreen cursor-pointer" />
            <FaLinkedin className="size-4 text-white hover:text-themegreen cursor-pointer" />
            <FaInstagram className="size-4 text-white hover:text-themegreen cursor-pointer" />
          </div>
        </div>

        {/* Company Links */}
        <div className="lg:w-[15%] w-full flex flex-col justify-center items-start gap-6">
          <h1 className="text-white text-[23px] capitalize leading-[1.2em] font-poppins">
            Company
          </h1>
          <ul className="flex flex-col justify-center items-start gap-2">
            <li className="text-gray-300 hover:text-themegreen cursor-pointer">Home</li>
            <li className="text-gray-300 hover:text-themegreen cursor-pointer">Our Project</li>
            <li className="text-gray-300 hover:text-themegreen cursor-pointer">About Us</li>
            <li className="text-gray-300 hover:text-themegreen cursor-pointer">Pricing</li>
            <li className="text-gray-300 hover:text-themegreen cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="lg:w-[15%] w-full flex flex-col justify-center items-start gap-6">
          <h1 className="text-white text-[23px] capitalize leading-[1.2em] font-poppins">
            Services
          </h1>
          <ul className="flex flex-col justify-center items-start gap-2">
            <li className="text-gray-300 hover:text-themegreen cursor-pointer">Advertising</li>
            <li className="text-gray-300 hover:text-themegreen cursor-pointer">Content Marketing</li>
            <li className="text-gray-300 hover:text-themegreen cursor-pointer">Content Writing</li>
            <li className="text-gray-300 hover:text-themegreen cursor-pointer">Social Media</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:w-[30%] w-full flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-[23px] capitalize leading-[1.2em] font-poppins">
            Subscribe to Newsletter
          </h1>
          <div className="flex flex-col justify-center items-start w-full">
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full p-4 bg-transparent border-2 border-gray-800 text-white rounded-md"
            />
            <button className="w-full bg-themegreen hover:bg-white text-black font-poppins font-medium text-md rounded-md py-2 mt-5 px-5">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full border-t-2 border-gray-700 py-6 lg:px-[80px] px-[20px] flex lg:flex-row flex-col items-center justify-between gap-[10px]">
        <p className="text-gray-300 text-md font-poppins text-center">
          Copyright © 2025. All rights reserved.
        </p>
        <ul className="text-gray-300 flex justify-center items-end gap-6">
          <li className="hover:text-themegreen cursor-pointer">Terms & Conditions</li>
          <li className="hover:text-themegreen cursor-pointer">Privacy Policy</li>
          <li className="hover:text-themegreen cursor-pointer">Cookie Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
