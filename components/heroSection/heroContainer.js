import React from "react";
import Image from "next/image";
import HeroTextContainer from "./textContainer";
import HeroTextMobileContainer from "./HeroTextMobileContainer";

const HeroContainer = (props) => {
  return (
    <div className="w-full h-auto bg-white mt-5">
      {/* Content for screens larger than 760px */}
      <div className="hidden md:flex md:flex-row justify-evenly">
        <HeroTextContainer />
        <div className="w-1/2 max-w-2xl">
          <Image
            src="/hero/hero-image.jpg"
            alt="chopsticks and sushi rolls"
            width={850}
            height={1020}
            layout="responsive"
          />
        </div>
      </div>

      {/* Content for screens smaller than 760px */}
      <div className="md:hidden w-full relative">
        <div className="w-full flex justify-center">
          <Image
            src="/hero/hero-image-mobile.png"
            alt="hero image for mobile"
            width={760}
            height={1200}
          />
        </div>
        <div className=" absolute top-0 right-0 left-0">
          <HeroTextMobileContainer />
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
