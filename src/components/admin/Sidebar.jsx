import React from "react";
import Image from "next/image";

// compoents
import Container from "../Container";


// assets
import SidebarLogo from "@/src/assets/SidebarLogo";
import BoyPic from "@/src/assets/BoyPic.png";
import SidebarVector from "@/src/assets/SidebarVector";
import Employee from "@/src/assets/Employee";
import Attendence from "@/src/assets/Attendence";
import Expensis from "@/src/assets/Expensis";
import Events from "@/src/assets/Events";

function Sidebar() {
  return (
    <Container>
    <div className="bg-[#435260]">
      <div>
        <div className="pt-2 pl-9 pb-14">
          <SidebarLogo />
        </div>
        <div className="bg-[#2D4053] flex flex-col justify-center items-center py-7 text-white">
            <Image src={BoyPic}  />
            <p className="text-base font-medium pt-4">Richard Oyome</p>
            <p className="text-xs font-medium pt-4">Super Admin</p>
        </div>
        <div className="bg-[#435260] py-7 "></div>
        <div className="bg-[#2D4053] flex py-2 pl-9 rounded-r-full">
            <SidebarVector />
            <p className="pl-4 text-white">Home</p>
        </div>
        <div className="flex py-2 pl-9 rounded-r-full pt-8">
            <Employee />
            <p className="pl-4 text-white">Employee</p>
        </div>
        <div className="flex py-2 pl-9 rounded-r-full pt-8">
            <Attendence />
            <p className="pl-4 text-white">Attendance</p>
        </div>
        <div className="flex py-2 pl-9 rounded-r-full pt-8">
            <Expensis />
            <p className="pl-4 text-white">Expenses</p>
        </div>
        <div className="flex py-2 pl-9 rounded-r-full pt-8">
            <Events />
            <p className="pl-4 text-white">Events</p>
        </div>
      </div>
    </div>
    </Container>
  );
}

export default Sidebar;
