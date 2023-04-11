import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// assets
import SidebarLogo from "@/src/assets/SidebarLogo";
import BoyPic from "@/src/assets/BoyPic.png";
import SidebarVector from "@/src/assets/SidebarVector";
import Employee from "@/src/assets/Employee";
import Attendence from "@/src/assets/Attendence";
import Expensis from "@/src/assets/Expensis";
import Events from "@/src/assets/Events";
import Burger from "@/src/assets/Hamburger";
import Close from "@/src/assets/Close";
import clsx from "clsx";

function Sidebar() {
  const [menuClosed, setMenuClosed] = useState(true);

  return (
    <>
      <div
        className={clsx(
          "bg-[#435260] w-[248px] shrink-0 h-full absolute top-0 left-0 lg:relative z-10 overflow-y-auto",
          {
            "translate-x-[-100%] lg:translate-x-0": menuClosed,
            "translate-x-0": !menuClosed,
          }
        )}
      >
        <div>
          <div className="pt-2 px-9 pb-14 flex justify-between">
            <Link href="/">
              <SidebarLogo />
            </Link>
            <button
              className="lg:hidden pl-14 pt-2.5"
              onClick={() => setMenuClosed(!menuClosed)}
            >
              {menuClosed ? <Burger /> : <Close />}
            </button>
          </div>
          <div className="bg-[#2D4053] flex flex-col justify-center items-center py-7 text-white">
            <Image src={BoyPic} alt="..." />
            <p className="text-base font-medium pt-4">Richard Oyome</p>
            <p className="text-xs font-medium pt-4">Super Admin</p>
          </div>
          <div className="bg-[#435260] py-7 "></div>
          <Link
            href="/dashboard"
            className="focus:bg-[#2D4053] flex py-2 pl-9 rounded-r-full"
          >
            <SidebarVector />
            <p className="pl-4 text-white">Home</p>
          </Link>
          <Link
            href="/dashboard/employee"
            className="flex py-2 pl-9 rounded-r-full mt-8 focus:bg-[#2D4053]"
          >
            <Employee />
            <p className="pl-4 text-white">Employee</p>
          </Link>
          <Link
            href="/dashboard/attendence"
            className="flex py-2 pl-9 focus:bg-[#2D4053] rounded-r-full mt-8"
          >
            <Attendence />
            <p className="pl-4 text-white">Attendance</p>
          </Link>
          <Link
            href="/dashboard/account"
            className="flex py-2 pl-9 focus:bg-[#2D4053] rounded-r-full mt-8"
          >
            <Expensis />
            <p className="pl-4 text-white">Account</p>
          </Link>
          <Link
            href="/dashboard/events"
            className="flex py-2 pl-9 focus:bg-[#2D4053] rounded-r-full mt-8"
          >
            <Events />
            <p className="pl-4 text-white">Events</p>
          </Link>
        </div>
      </div>
      <div>
        <button
          className="block lg:hidden pl-14 pt-2.5 absolute"
          onClick={() => setMenuClosed(!menuClosed)}
        >
          {menuClosed ? <Burger /> : <Close />}
        </button>
      </div>
    </>
  );
}

export default Sidebar;
