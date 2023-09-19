import React from "react";
import OrderNowButton from "./OrderNowButton";
import ViewMenu from "./ViewMenuButton";

const HeroTextContainer = () => {
  return (
    <div className="propmptContainer flex flex-col mobile-screen:mt-28 small-screen:mt-36 middle-screen:mt-40  mobile-screen:ml-20 middle-screen:ml-32">
      <div
        className=" mobile-screen:text-4xl small-screen:text-5xl middle-screen:text-6xl  large-screen:text-7xl  font-notoJP font-bold text-darkBrown small-screen:leading-normal middle-screen:leading-normal large-screen:leading-snug
      "
      >
        Savor the <br />
        <span className="font-notoJP text-[#FD5231]">Irrestible</span> Delights
      </div>
      <div className="leading-normal font-lato text-[#997866] tracking-wide  mobile-screen:text-lg mobile-screen:py-3 small-screen:text-lg small-screen:py-3 middle-screen:text-lg middle-screen:py-3 large-screen:text-xl large-screen:py-3">
        Indulge in an Exquisite Sushi Feast, <br />
        Effortlessly Ordered with the Sushier App
      </div>
      <div
        className=" mobile-screen:flex-col mobile-screen:w-full mobile-screen:gap-4
      buttonContainer flex small-screen:flex-row small-screen:justify-between small-screen:gap-4 middle-screen:mt-4 large-screen:mt-6"
      >
        <OrderNowButton />
        <ViewMenu />
      </div>
    </div>
  );
};

export default HeroTextContainer;
