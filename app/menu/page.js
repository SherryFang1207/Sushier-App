"use client";
import { useState } from "react";
import DishCard from "@/components/menu/DishCard";
import React from "react";
import dishes from "../libs/dishes";
import Link from "next/link";
import FilterButtons from "@/components/menu/FilterButton";
import toast, { Toaster } from "react-hot-toast";
import { useStateContext } from "@/context/StateContext";
const Menu = () => {
  const { userEmail } = useStateContext();
  const [filterType, setFilterType] = useState("all");
  // Filter the dishes based on the selected filter type
  const filteredDishes =
    filterType === "all"
      ? dishes
      : dishes.filter((dish) => dish.type === filterType);
  return (
    <div className="flex bg-[#F7F7F7] items-center flex-col pb-60 min-h-screen">
      <p className=" text-xl mobile-screen:text-3xl  mobile-screen:font-semibold font-notoJP mt-10 mb-4 text-stone-600">
        🍣 Explore Our Best Menu 🍣
      </p>
      {/* Filter controls */}
      <div className="mb-4 mt-4">
        <FilterButtons filterType={filterType} setFilterType={setFilterType} />
      </div>
      <div className="dish-cards grid grid-cols-2 gap-2 mobile-screen:grid-cols-4 mobile-screen:gap-4 mt-6">
        {filteredDishes.map((dish) => (
          <DishCard
            key={dish.id}
            id={dish.id}
            name={dish.name}
            subtitle={dish.subtitle}
            desc={dish.description}
            img={dish.src_img}
            price={dish.price}
            type={dish.type}
          />
        ))}
      </div>
      {userEmail === "" && (
        <div className="fixed font-notoJP bottom-0 left-0 right-0 bg-[#FEF8EC] drop-shadow-2xl py-8 flex flex-col items-center gap-3">
          <div className="font-bold text-xl">
            Ready to treat your taste buds with the finest Sushi?
          </div>
          <Link href="/auth/sign-up">
            <div className="py-4 px-16 bg-lightOrange text-white rounded-xl tracking-widest ">
              Order with Sushier Now!
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
