import React from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { useStateContext } from "@/context/StateContext";
const ProfileButton = () => {
  const { userEmail } = useStateContext();
  return (
    // <Link
    //   href="/user-profile"
    //   className="flex  rounded-lg
    // font-notoJP  font-medium bg-white text-base py-2 px-5 text-darkBrown
    // border-2 border-[#FD5231] transition-all
    // hover:-translate-y-1  justify-center items-center drop-shadow-md hover:drop-shadow-lg"
    // >
    //   <div className="tracking-wider text-lightOrange"> Your Profile</div>
    // </Link>
    <div className="flex flex-row items-center gap-2 font-notoJP  font-normal text-lg text-darkBrown ">
      <CgProfile size="35px" color="#FD5231" />
      {userEmail !== "" && <div>Welcome, {userEmail}!</div>}
    </div>
  );
};

export default ProfileButton;
