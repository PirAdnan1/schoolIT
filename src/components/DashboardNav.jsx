import React from "react";
import Image from "next/image";


// assets
import Elipse from "@/src/assets/Ellipse.png";
import DownArrow from "@/src/assets/DownArrow";
function DashboardNav() {
  return (
    <div className="sticky top-0 left-0 flex items-center justify-items-end bg-[#F2EFEF]">
      <Image src={Elipse} alt="..." />
      <div className="flex items-center">
        <p className="pl-6 pr-2 text-black font-semibold">Account</p>
        <DownArrow />
      </div>
    </div>
  );
}

export default DashboardNav;
