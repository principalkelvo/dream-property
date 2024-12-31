"use client";
import { useState } from "react";
import Navbar from "@/components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import PropertySearch from "@/components/propertySearch";

const dummyBackgrounds = [
  "url('/ai-generated-dream-property.jpg')",
  "url('beautiful-rustic-house-landscape.jpg')",
  "url('luxurious-villa-with-modern-architectural-design.jpg')",
];

export default function Home() {
  const [activeBgIndex, setActiveBgIndex] = useState(0);

  const changeBackground = (index:number) => {
    setActiveBgIndex(index);
  };

  const previousBackground = () => {
    setActiveBgIndex((prevIndex) =>
      prevIndex === 0 ? dummyBackgrounds.length - 1 : prevIndex - 1
    );
  };

  const nextBackground = () => {
    setActiveBgIndex((prevIndex) =>
      prevIndex === dummyBackgrounds.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div
      className="bg-cover h-screen xl:p-20 md:p-8 p-2"
      style={{ backgroundImage: dummyBackgrounds[activeBgIndex] }}
    >
      <div className="shadow-[rgba(0,0,0,0.35)_0px_0px_8px_14px] h-full ">
        <div className="max-w-screen-xl mx-auto p-4 h-full flex flex-col justify-between ">
          <div>
            <Navbar />
          </div>
          <div className="bg-transparent w-full ">
            <div className="flex justify-between items-center">
              <div className="w-2/3 md:w-1/2 xl:w-2/3">
                <h1 className="text-3xl md:text-5xl xl:text-7xl font-semibold text-white">
                  Turn Your Dream Property Into Reality
                </h1>
                <h1 className="text-sm md:text-normal font-bold text-gray-300">
                  Discover spaces where memories are made and dreams come true
                </h1>
              </div>
              <div className=" text-white space-y-4">
                <div className="border border-gray-200 rounded-full p-1.5 flex items-center justify-center">
                  <FontAwesomeIcon icon={faXTwitter} size="lg" />
                </div>
                <div className="border border-gray-100 rounded-full p-1.5 flex items-center justify-center">
                  <FontAwesomeIcon icon={faFacebookF} size="lg" />
                </div>
                <div className="border border-gray-100 rounded-full p-1.5 flex items-center justify-center">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </div>
                <div className="border border-gray-100 rounded-full p-1.5 flex items-center justify-center">
                  <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <PropertySearch />
            </div>
            <footer className="sm:mt-16 mt-4">
              <div className="flex sm:justify-between items-center justify-center">
                <div className="sm:block hidden">
                  <button
                    type="button"
                    className="py-2.5 px-5 font-medium text-white focus:outline-none rounded-full border border-gray-200 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                  >
                    Learn More
                  </button>
                </div>
                <div className=" flex justify-center items-center space-x-2">
                  <button
                    onClick={previousBackground}
                    className="swiper-button-prev group !p-2 flex justify-center items-center border border-solid border-white !w-8 !h-8 transition-all duration-500 rounded-full hover:bg-white"
                  >
                    <svg
                      className="h-5 w-5 text-white group-hover:text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M10.0002 11.9999L6 7.99971L10.0025 3.99719"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div className="flex space-x-2">
                    {dummyBackgrounds.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => changeBackground(index)}
                        className={`w-6 h-1 rounded-full transition-all duration-300 border ${
                          index === activeBgIndex
                            ? "bg-white"
                            : "bg-transparent"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextBackground}
                    className="swiper-button-next group !p-2 flex justify-center items-center border border-solid border-white !w-8 !h-8 transition-all duration-500 rounded-full hover:bg-white"
                  >
                    <svg
                      className="h-5 w-5 text-white group-hover:text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.99984 4.00012L10 8.00029L5.99748 12.0028"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
