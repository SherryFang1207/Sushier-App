import React from "react";
import OrderNowButton from "./OrderNowButton";
import ViewMenu from "./ViewMenuButton";

const HeroTextMobileContainer = () => {
  return (
    <div className="propmptContainer flex flex-col mt-10 ml-4 mr-4">
      <div
        className=" text-4xl font-notoJP font-bold text-darkBrown leading-normal
      "
      >
        Savor the <br />
        <span className="font-notoJP text-[#FD5231]">Irrestible</span> Delights
      </div>
      <div className="leading-normal font-lato text-[#997866] tracking-wide my-2">
        Indulge in an Exquisite Sushi Feast, <br />
        Effortlessly Ordered with the Sushier App
      </div>
      <div
        className=" flex-col w-full gap-4
      buttonContainer flex small-screen:flex-row small-screen:justify-between small-screen:gap-4 middle-screen:mt-4 large-screen:mt-6"
      >
        <OrderNowButton />
        <ViewMenu />
      </div>
    </div>
  );
};

export default HeroTextMobileContainer;
