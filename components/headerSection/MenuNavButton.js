import React from "react";
import Link from "next/link";

const MenuNavButton = () => {
  return (
    <Link
      href="/menu"
      className="flex  rounded-sm
    font-notoJP  font-semibold bg-transparent text-lg pt-3 pb-1 px-5 text-darkBrown 
    border-b-4 border-transparent hover:border-shadeOrange transition-all hover:bg-gradient-to-b from-transparent from-70% to-[#F7E5D4] to-90%
    hover:-translate-y-1 "
    >
      Menu
    </Link>
  );
};

export default MenuNavButton;
