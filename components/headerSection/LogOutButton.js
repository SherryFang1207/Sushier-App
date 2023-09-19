"use client";
import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
function logOutHandler() {
  signOut();
}

const LogOutButton = () => {
  return (
    <div>
      <div className="hidden mobile-screen:block">
        <button
          onClick={logOutHandler}
          className="flex  rounded-lg
    font-notoJP  font-medium bg-white text-base py-2 px-5 text-darkBrown 
    border-2 border-[#FD5231] transition-all
    hover:-translate-y-1  justify-center items-center drop-shadow-md hover:drop-shadow-lg"
        >
          <div className="tracking-wider text-lightOrange"> Log Out</div>
        </button>
      </div>
      <div className="mobile-screen:hidden">
        <button
          onClick={logOutHandler}
          className="flex  rounded-lg mb-1
    font-notoJP  font-medium bg-white text-sm py-1 px-3 text-darkBrown 
    border-2 border-[#FD5231] transition-all
    hover:-translate-y-1  justify-center items-center drop-shadow-md hover:drop-shadow-lg"
        >
          <div className="tracking-wider text-lightOrange"> Log Out</div>
        </button>
      </div>
    </div>
  );
};

export default LogOutButton;
