"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import Logo from "./Logo";
import MenuNavButton from "./MenuNavButton";
import AboutNavButton from "./AboutNavButton";
import CartButton from "./CartButton";
import LogInButton from "./LogInButton";
import ProfileButton from "./ProfileButton";
import { useSession } from "next-auth/react";
import LogOutButton from "./LogOutButton";
import Cart from "../shop-bag/Cart";
import { useStateContext } from "@/context/StateContext";
import Dropdown from "../heroSection/MobileDropdown";

const Header = () => {
  const { showCart, setShowCart, totalQuantities, setUserEmail } =
    useStateContext();
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    setUserEmail(session.user.email);
  }
  if (status === "unauthenticated") {
    setUserEmail("");
  }

  return (
    <div className="middle-screen:px-16 large-screen:px-20">
      <div className="flex px-4 pt-3 justify-between">
        {/* Header wrapper */}
        <section
          className="hidden mobile-screen:flex justify-center items-center font-notoJP font-normal
      "
        >
          <div className="flex pr-6">
            <Logo />
          </div>

          <MenuNavButton />
          <AboutNavButton />
        </section>
        <div className=" mobile-screen:hidden">
          <Dropdown />
        </div>

        <section className="hidden mobile-screen:flex flew-row gap-4 middle-screen:gap-4  large-screen:gap-6 items-center">
          {/* When user is NOT logged in (no user session), Header should display
          1. Menu (no user session version: user cannot add items to shopping cart and will be directed to signIn/logIn page)
          2. About Us
          3. Sign In / Log In Button
           */}

          {!session && (
            <div className="my-2">
              <LogInButton />
            </div>
          )}
          {/* When user is logged in (valid user session), Header should display
          1. Menu (user session version: user can add items to shopping cart)
          2. About Us
          3. Log out Button
          4. View Shopping bag
          5. Your Profile

           */}
          {session && <CartButton />}
          {session && <ProfileButton />}
          {session && <LogOutButton />}
          {showCart && <Cart />}
        </section>
        <section className="mobile-screen:hidden flex flew-row gap-4 items-center">
          {/* When user is NOT logged in (no user session), Header should display
          1. Menu (no user session version: user cannot add items to shopping cart and will be directed to signIn/logIn page)
          2. About Us
          3. Sign In / Log In Button
           */}

          {!session && (
            <div className="my-2">
              <LogInButton />
            </div>
          )}
          {/* When user is logged in (valid user session), Header should display
          1. Menu (user session version: user can add items to shopping cart)
          2. About Us
          3. Log out Button
          4. View Shopping bag
          5. Your Profile

           */}
          {session && <CartButton />}
          {/* {session && <ProfileButton />} */}
          {session && <LogOutButton />}
          {showCart && <Cart />}
        </section>
      </div>
      <div className="w-full border-b-2 border-white drop-shadow-lg"></div>
    </div>
  );
};

export default Header;
