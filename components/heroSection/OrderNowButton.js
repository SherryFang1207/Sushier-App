"use client";
import React from "react";
import Link from "next/link";
import { useStateContext } from "@/context/StateContext";
const OrderNowButton = () => {
  let linkPath;
  const { userEmail } = useStateContext();
  if (userEmail === "") {
    linkPath = "/auth/sign-up";
  } else {
    linkPath = "/menu";
  }
  return (
    <Link
      href={linkPath}
      className="flex  rounded-md
    font-notoJP  bg-[#FD5231] py-2 px-5 text-white 
    border-2 border-[#FD5231] transition-all
      justify-center items-center drop-shadow-md hover:drop-shadow-lg
    hover:scale-105 box-border small-screen:w-3/5 mobile-screen:w-full"
    >
      <div className="font-semibold tracking-wide">Order Now</div>
    </Link>
  );
};

export default OrderNowButton;
