import React, { useState } from "react";
import Link from "next/link";
// components
import Container from "@/src/Mycontainer/Container";

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
        <nav className="flex flex-col md:flex-row mt-8 md:h-0 justify-between md:items-center md:mt-8">
          <div className="mt-4 flex justify-between items-center">
            <Logo />
            <button
              className="text-3xl block md:hidden mr-4  text-primary"
              onClick={() => setMenuClosed((closed) => !closed)}
            >
              {menuClosed ? <Burger /> : <Close />}
            </button>
          </div>
          <ul
            className={clsx(
              "md:mr-14 flex justify-center font-medium text-center px-8 sm:px-4 md:px-0 space-y-4 md:space-y-0  md:mt-0 items-center flex-col md:flex-row",
              {
                "translate-x-[-100%] md:translate-x-0": menuClosed,
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
              className="md:ml-12 bg-[#F18585] w-full px-2 md:px-4 lg:px-8 rounded-full hover:bg-white border-2 border-[#F18585] hover:text-[#F18585] text-white md:py-1 py-1.5"
              href="/login"
            >
              Sign In
            </Link>
          </ul>
        </nav>
      </Container>
    </>
  );
}

export default Navbar;
