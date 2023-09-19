"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative flex flex-col text-left">
      <button onClick={toggleDropdown} className="px-1  rounded-md">
        <div className="w-20 h-12">
          <Image
            src="/logo/Sushier-logo.png"
            alt="Sushier logo"
            width={100}
            height={100}
          />
        </div>
      </button>
      {isOpen && (
        <div className="absolute left-0 top-12 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              href="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={closeDropdown}
            >
              Homepage
            </Link>
            <Link
              href="/menu"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={closeDropdown}
            >
              Menu
            </Link>
            <Link
              href="/about-us"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={closeDropdown}
            >
              About Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
