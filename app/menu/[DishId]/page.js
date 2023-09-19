"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import dishes from "@/app/libs/dishes";
import Image from "next/image";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
  AiOutlineLeft,
} from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";

function findDishById(dishName) {
  return dishes.find((dish) => dish.id === dishName);
}
const dishDetail = (props) => {
  const dishName = props.params.DishId;
  const currentDish = findDishById(dishName);

  if (currentDish) {
    const { decQty, incQty, qty, onAdd, setQty } = useStateContext();
    // setQty(1);
    const { id, name, subtitle, description, src_img, price, rating, sales } =
      currentDish;
    const fullStarArray = [];
    for (let i = 0; i < rating; i++) {
      fullStarArray.push(i);
    }
    const emptyStarArray = [];
    const negativeRating = 5 - rating;
    for (let i = 0; i < negativeRating; i++) {
      emptyStarArray.push(i);
    }
    return (
      <div className="h-full bg-[#F7F7F7] flex flex-col">
        <div className=" mobile-screen:mt-16  mobile-screen:ml-16 mt-6 ml-6">
          <div className="flex w-60 hover:scale-105 transition">
            <Link
              href="/menu"
              className="flex flex-row hover:drop-shadow-sm items-center"
            >
              <AiOutlineLeft size={24} />
              <div className=" mobile-screen:pl-4 font-lato font-semibold text-2xl  text-stone-600">
                Go to Menu{" "}
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 px-12 ">
          <div
            className="w-full flex flex-col md:flex-row item-small-screen:gap-24 items-center md:justify-center mb-32  text-center md:text-left 
        "
          >
            <div className="image-block ">
              <div className="bg-white drop-shadow-lg rounded-md item-small-screen:w-80 flex justify-center w-40">
                <Image src={src_img} width={600} height={600} />
              </div>
            </div>
            <div className="text-block">
              <div className="font-bold font-notoJP text-4xl mt-6 mb-2 text-stone-600">
                {name}
              </div>
              <div className="font-lato text-lg text-stone-400 tracking-wide my-2">
                {subtitle}
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex flex-row">
                  {fullStarArray.map((star, index) => (
                    <AiFillStar color="red" />
                  ))}
                  {emptyStarArray.map((star, index) => (
                    <AiOutlineStar color="red" />
                  ))}
                </div>

                <div className="font-lato text-stone-500">
                  Rated by{" "}
                  <span className="font-semibold text-stone-600">{sales}</span>{" "}
                  Sushier 🎉
                </div>
              </div>

              <div className="font-lato text-lg text-stone-600 tracking-wide py-4">
                <span className="font-semibold">Dish Details:</span>
                <br />
                {description}
              </div>
              <div className="flex flex-row items-end justify-center item-small-screen:justify-normal">
                <div className="font-bold font-notoJP text-3xl text-red-500">
                  $ {price}
                </div>
                <div className="pl-4 pb-0.5 text-stone-600">per dish</div>
              </div>

              <div className="quantity-selector flex flex-col items-center item-small-screen:flex-row item-small-screen:items-center mt-2 gap-6 item-small-screen:mt-4">
                <div className="mb-1 text-lg font-lato text-stone-600 tracking-wide font-semibold">
                  Quantity:{" "}
                </div>
                <div className="flex flex-row">
                  <button
                    className="p-4 border-black border  h-12"
                    onClick={() => decQty()}
                  >
                    <AiOutlineMinus />
                  </button>
                  <div className=" border-black border-t border-b  h-12">
                    <div className="px-4 pt-3 ">{qty}</div>
                  </div>
                  <button
                    className="p-4 border-black border  h-12"
                    onClick={() => incQty()}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
              <div className="flex flex-col item-middle-screen:flex-row gap-8 mt-8">
                <button
                  className="border-lightOrange border-2"
                  onClick={() => {
                    onAdd(currentDish, qty);
                  }}
                >
                  <div className="py-4 px-24 font-lato font-semibold text-lightOrange">
                    Add to Cart
                  </div>
                </button>
                <button className="border-lightOrange border-2 bg-lightOrange">
                  <div className="py-4 px-28 font-lato font-semibold text-white">
                    Buy Now
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div> Sorry, no dish found for {dishName}</div>;
};

export default dishDetail;
