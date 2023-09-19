import React from "react";
import Link from "next/link";
import ShopBagIcon from "../Icons/ShopBagIcon";
import { useStateContext } from "@/context/StateContext";

const CartButton = () => {
  const {
    totalQuantities,

    setShowCart,
  } = useStateContext();
  return (
    <div>
      <div className="hidden mobile-screen:block">
        <button onClick={() => setShowCart(true)} className="relative">
          <div className="flex mb-0.5 ml-2 pr-2">
            <ShopBagIcon color="#FD5231" size="40px" />
          </div>

          <div className=" absolute red-dot bg-red-500 rounded-full px-2 py-0.5 top-0 right-0 text-sm text-white">
            {totalQuantities}
          </div>
        </button>
      </div>
      <div className=" mobile-screen:hidden">
        <button onClick={() => setShowCart(true)} className="relative">
          <div className="flex mb-0.5 ml-2 pr-2">
            <ShopBagIcon color="#FD5231" size="30px" />
          </div>

          <div className=" absolute red-dot bg-red-500 rounded-full px-2 py-0.5 -top-1 right-0 text-sm text-white">
            {totalQuantities}
          </div>
        </button>
      </div>
    </div>
  );
};

export default CartButton;
