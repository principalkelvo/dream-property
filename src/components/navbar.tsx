"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {  useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");

    const menuItems = ["Home", "About", "Property", "FAQs", "Contact"];
    
    
  return (
    <nav className="bg-transparent dark:bg-gray-900 w-full">
      <div className="flex flex-wrap items-end justify-between mx-auto">
        <Link href="/">
          <div className="flex items-center rtl:space-x-reverse">
            <span className="self-center md:text-2xl font-semibold whitespace-nowrap dark:text-white text-white">
              Dream Home
            </span>
          </div>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-transparent border hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-xl md:text-sm text-sm px-2 py-1 md:px-4 md:py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 focus:text-gray-300"
          >
            Sign Up
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white border rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 bg-transparent"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-normal text-white rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {menuItems.map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase()}`}>
                  <div
                    onClick={() => {
                      setActivePage(item);
                      setIsMenuOpen(false);
                    }}
                    className={`block py-2 px-2 rounded md:p-0 ${
                      activePage === item
                        ? "text-white md:bg-transparent md:text-white"
                        : "text-gray-200 hover:text-white"
                    }`}
                  >
                    {item}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
