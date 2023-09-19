"use client";
import React from "react";
import Image from "next/image";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Logo = () => {
  const router = useRouter();
  // function clickHandler() {
  //   return router.push("/");
  // }
  return (
    <>
      <Link href="/">
        <div className="flex w-[100px] h-auto">
          <Image
            src="/logo/Sushier-logo.png"
            width={120}
            height={100}
            alt="Picture of the author"
          />
        </div>
      </Link>
    </>
  );
};

export default Logo;
