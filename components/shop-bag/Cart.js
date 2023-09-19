"use client";
import React from "react";
import { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
  AiOutlineLeft,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import { useStateContext } from "@/context/StateContext";
import dishes from "@/app/libs/dishes";
import Image from "next/image";
import getStripe from "@/app/libs/getStripe";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
const Cart = () => {
  const cartRef = useRef();
  const {
    cartItems,
    totalPrice,
    totalQuantities,

    setShowCart,
    toggleCartItemQuantity,
    onRemove,
    userEmail,
  } = useStateContext();

  async function handleCheckout() {
    // const stripe = await getStripe();
    console.log("fetch request sending to checkout api");
    const response = await fetch("/api/checkout_session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;
    const data = await response.json();
    toast.loading("Redirecting...");
    console.log("Logging the session returned by Stripe:");
    console.log(data);
    // stripePromise.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div className="fixed inset-0 flex justify-end z-10">
      <div
        className="absolute inset-0 bg-gray-600 opacity-50 z-10"
        onClick={() => setShowCart(false)}
      ></div>
      <div className="z-50 bg-white min-h-screen mobile-screen:w-[600px]  w-full relative">
        {/* Close Cart Button */}
        <div
          className="cursor-pointer flex flex-row items-center gap-2 mt-6"
          onClick={() => setShowCart(false)}
        >
          <div className="ml-4">
            <AiOutlineLeft color="#57534e" />
          </div>

          <div className="text-stone-600 font-notoJP font-semibold ">
            Your Cart
          </div>
          <div className="text-lightOrange font-notoJP font-semibold ">
            ({totalQuantities} items)
          </div>
        </div>
        {/* Placeholder when cart is empty */}
        {cartItems.length < 1 && (
          <div className="flex flex-col items-center">
            <div className="flex mt-36">
              <AiOutlineShopping size={150} />
            </div>
            <div className="text-stone-600 font-notoJP font-semibold mt-6 mobile-screen:text-base text-sm">
              Your cart is empty. Let's go shop delicious Sushi!
            </div>
            <div
              onClick={() => setShowCart(false)}
              className="transition hover:scale-105 hover:shadow-sm"
            >
              <Link href="/menu">
                <div className="tracking-wide text-white bg-lightOrange rounded-md py-2 px-28 mt-4">
                  VIEW MENU
                </div>
              </Link>
            </div>
          </div>
        )}
        {/* Display items when cart is NOT empty */}
        {cartItems.length >= 1 && (
          <div className="bg-white h-3/4 overflow-auto">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-row  gap-2 mobile-screen:gap-8 mt-6"
              >
                <div className="img-wrapper rounded-lg mobile-screen:w-40 mobile-screen:ml-12 w-28 mt-4 ml-2">
                  <Image
                    src={item.src_img}
                    alt={item.name}
                    height={200}
                    width={200}
                  />
                </div>
                {/* text wrapper */}
                <div className="flex flex-col">
                  <div className="flex flex-row items-center mobile-screen:mt-8 mt-4 justify-between mobile-screen:w-72 w-full">
                    <div className="text-stone-600 font-notoJP font-semibold mobile-screen:text-xl ">
                      {item.name}
                    </div>
                    <div className="text-stone-600 font-notoJP font-semibold mobile-screen:text-lg  mr-6 mobile-screen:mr-0">
                      $ {item.price}
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-72 mobile-screen:mt-8 mt-4">
                    <div className="flex flex-row">
                      <button
                        className="p-2 border-black border  h-8"
                        onClick={() => toggleCartItemQuantity(item.id, "dec")}
                      >
                        <AiOutlineMinus />
                      </button>
                      <div className=" border-black border-t border-b h-8">
                        <div className="px-4 pt-1 ">{item.quantity}</div>
                      </div>
                      <button
                        className="p-2 border-black border  h-8"
                        onClick={() => toggleCartItemQuantity(item.id, "inc")}
                      >
                        <AiOutlinePlus />
                      </button>
                    </div>
                    <button
                      onClick={() => onRemove(item)}
                      className="mr-6 mobile-screen:mr-0"
                    >
                      <TiDeleteOutline color="red" size={24} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {cartItems.length >= 1 && (
          <div className=" absolute bottom-0 left-0 right-0  bg-neutral-50 h-[150px] border-t-2 border-black flex flex-col items-center">
            <div className="flex flex-row justify-between w-3/4 mt-6">
              <div className="text-stone-800 font-notoJP font-semibold text-xl ">
                Subtotal:{" "}
              </div>
              <div className="text-stone-800 font-notoJP font-semibold text-xl ">
                $ {totalPrice}
              </div>
            </div>
            <div
              className="tracking-wide text-center p-3 text-white bg-lightOrange rounded-md w-3/4 mt-4 transition hover:scale-105"
              onClick=""
            >
              PAY WITH STRIPE
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
