import React from "react";
import Image from "next/image";
const AboutUs = () => {
  const ziqi_email = "zfang1207@gmail.com";
  const linkedin_profile = "linkedin.com/in/ziqi-fang";
  return (
    <div className="mx-10">
      <div className="font-lato flex flex-col gap-4 mt-16 text-lg text-stone-600">
        <div className="font-semibold text-2xl">
          A Concept Project by Ziqi Fang:
          <span className="font-normal">(Made with LOVE🧡)</span>
        </div>
        <div>
          Sushier is not just an e-commerce platform; it's a concept project
          brought to life by Ziqi Fang. All rights reserved.
        </div>
        <div className="font-semibold text-2xl">
          Tech Stack and Sushier Versions: 🛠️
        </div>
        <div>
          Sushier is implemented based on MERN(MongoDB, Express.js, React.js,
          and Nodejs) tech stack. Sushier is a open-source object and all design
          files and source code are available at [github site].
        </div>
        <div>
          Sushier is planed to be continuous upgraded and deployed during
          continuous development. For future version functionality plans, please
          visit [github site].
        </div>
        <div className="font-semibold text-2xl">Contact Ziqi Fang: ✉️</div>
        <div>
          Your comments and suggestions help Ziqi better improve this project!
          Please don't hesitate to reach out and discuss your view on Sushier
          app with Ziqi!
        </div>
        <div>
          Email:{" "}
          <span className="underline underline-offset-2">{ziqi_email}</span>
        </div>
        <div>
          LinkedIn:{" "}
          <span className="underline underline-offset-2">
            {linkedin_profile}
          </span>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <div className="flex flex-col items-center gap-4">
          <div className="text-orange-600 text-lg font-semibold">
            THANK YOU FOR USING SUSHIER!
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/logo/Sushier-logo.png"
              alt="sushier logo"
              height={100}
              width={100}
            />
            <div className="text-orange-600">v 1.0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
