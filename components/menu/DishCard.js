import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useStateContext } from "@/context/StateContext";
const DishCard = (props) => {
  const { userEmail } = useStateContext();
  const { name, subtitle, desc, img, price, id, type } = props;
  let linkPath;
  if (userEmail === "") {
    linkPath = "/auth/sign-up";
  } else {
    linkPath = `/menu/${id}`;
  }

  return (
    <Link href={linkPath} className="hover:scale-105 transition">
      <div className="flex flex-col bg-white drop-shadow-md p-2">
        <div className="rounded-md w-40 bg-white h-40">
          <Image src={img} width={300} height={300} alt={name} />
        </div>
        <div className="titles text-center flex-col flex  mt-4">
          <div className="text-center font-notoJP font-semibold">{name}</div>
          <div className="font-lato text-sm text-stone-400 tracking-wide">
            {subtitle}
          </div>
          <div className="my-2">$ {price}</div>
        </div>
      </div>
    </Link>
  );
};

export default DishCard;
