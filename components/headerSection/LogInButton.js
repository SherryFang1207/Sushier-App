import React from "react";
import Link from "next/link";
const LogInButton = () => {
  return (
    <div>
      <div className="hidden mobile-screen:block">
        <Link
          href="/auth/sign-up"
          className="flex  rounded-lg
    font-notoJP  font-medium bg-white text-base py-2 px-5 text-darkBrown 
    border-2 border-[#FD5231] transition-all
    hover:-translate-y-1  justify-center items-center drop-shadow-md hover:drop-shadow-lg"
        >
          <div className="tracking-wider text-lightOrange">
            {" "}
            Sign In / Log In
          </div>
        </Link>
      </div>
      <div className="mobile-screen:hidden">
        <Link
          href="/auth/sign-up"
          className="flex  rounded-lg
    font-notoJP  font-medium bg-white text-sm py-1 px-3 -mt-1 text-darkBrown 
    border-2 border-[#FD5231] transition-all
    hover:-translate-y-1  justify-center items-center drop-shadow-md hover:drop-shadow-lg"
        >
          <div className="tracking-wider text-lightOrange">
            {" "}
            Sign In / Log In
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LogInButton;
