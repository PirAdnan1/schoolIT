import React, { useState } from "react";
import Link from "next/link";
// components
import Container from "./container";

// util
import clsx from "clsx";

// assets
import Logo from "../assets/logo";
import Burger from "../assets/Hamburger";
import Close from "../assets/Close";

function Navbar() {
  const [menuClosed, setMenuClosed] = useState(true);

  return (
    <>
      <Container>
        <div className="flex flex-col md:flex-row h-screen md:h-0 justify-between md:items-center md:mt-8">
          <div className="mt-4 flex justify-between items-center">
            <Logo />
            <button
              className="text-3xl block lg:hidden  text-primary"
              onClick={() => setMenuClosed((closed) => !closed)}
            >
              {menuClosed ? <Burger /> : <Close />}
            </button>
          </div>
          <ul
            className={clsx(
              "md:mr-14 flex justify-center text-center px-8 md:px-0 space-y-4 md:space-y-0  md:mt-0 items-center flex-col md:flex-row",
              {
                "translate-x-[100%] lg:translate-x-0": menuClosed,
                "translate-x-0": !menuClosed,
              }
            )}
          >
            <Link
              className="md:ml-12 text-[#F18585] border-b-2 border-b-[#F18585]"
              href="/"
            >
              Home
            </Link>
            <Link
              className="md:ml-12 hover:text-[#F18585] hover:border-b-2 hover:border-b-[#F18585]"
              href="/about"
            >
              About
            </Link>
            <Link
              className="md:ml-12 hover:text-[#F18585] hover:border-b-2 hover:border-b-[#F18585]"
              href="/products"
            >
              Products
            </Link>
            <Link
              className="md:ml-12 hover:text-[#F18585] hover:border-b-2 hover:border-b-[#F18585]"
              href="/contact"
            >
              Contact
            </Link>
            <Link
              className="md:ml-12 bg-[#F18585] px-8 md:px-16 rounded-full text-white md:py-2 py-1.5"
              href="/login"
            >
              Sign In
            </Link>
          </ul>
        </div>
      </Container>
    </>
  );
}

export default Navbar;
