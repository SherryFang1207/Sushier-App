import React from "react";
import Link from "next/link";
const ViewMenu = () => {
  return (
    <Link
      href="/menu"
      className="flex  rounded-md
    font-notoJP  bg-white py-2 px-5 text-[#FD5231] 
    border-2 border-[#FD5231] transition-all
      justify-center items-center drop-shadow-md hover:drop-shadow-lg
    hover:scale-105 box-border small-screen:w-2/5 mobile-screen:w-full"
    >
      <div className="font-semibold tracking-wide">View Menu</div>
    </Link>
  );
};

export default ViewMenu;
