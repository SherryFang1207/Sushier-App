import React, { Fragment } from "react";
import Link from "next/link";
import Header from "@/components/headerSection/Header";
import HeroContainer from "@/components/heroSection/heroContainer";
import Component from "@/components/login-btn";
import App from "@/components/AuthProvider";
import { useSession } from "next-auth/react";

const page = () => {
  return (
    <Fragment>
      {/* <Header></Header> */}
      <HeroContainer></HeroContainer>

      {/* <Component /> */}
    </Fragment>
  );
};

export default page;
