import React from "react";
import Image from "next/image";

// components
import Sidebar from "./Sidebar";

// assets
import Elipse from "@/src/assets/Ellipse.png";
import DownArrow from "@/src/assets/DownArrow";
import LeftArrow from "@/src/assets/LeftArrow";

function Main() {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="pl-14 pr-24 bg-[#F2EFEF] col-span-4">
        <div className="flex items-center justify-end mt-2.5">
          <Image src={Elipse} />
          <div className="flex items-center">
            <p className="pl-6 pr-2 text-black font-semibold">Account</p>
            <DownArrow />
          </div>
        </div>
        <div className="flex items-center justify-between mt-14">
          <h5 className="font-semibold text-[24px]">Summary</h5>
          <LeftArrow />
        </div>
        <p className="text-xs py-8">02-January-2020</p>
        <div className="flex justify-between gap-12">
          <div className="shadow-md rounded-lg flex flex-col px-5 pb-10 pt-5 bg-white max-w-[272px] w-full">
            <span className="bg-[#1C33A74D]/30 rounded-full px-4 py-1">
              Attendence
            </span>
            <p className="text-[32px] text-center mt-5">
              300<span className="text-base text-slate-400">/400</span>
            </p>
          </div>
          <div className="shadow-md rounded-lg flex flex-col px-5 pb-10 pt-5 bg-white max-w-[272px] w-full">
            <span className="bg-[#A7571C4D]/30 rounded-full px-4 py-1 max-w-[110px]">
              Expenses
            </span>
            <p className="text-[32px] text-center mt-5">₦ 300,000 </p>
          </div>
          <div className="shadow-md rounded-lg flex flex-col px-5 pb-10 pt-5 bg-white max-w-[272px] w-full">
            <span className="bg-[#FFB9B94D]/30 rounded-full px-4 py-1 max-w-[110px]">
              Events
            </span>
            <p className="text-[32px] text-center mt-5">15</p>
          </div>
        </div>
        <h1 className="text-[24px] my-7 font-semibold">Employee’s Tracker</h1>
        <div>
          <table className="table-auto w-full border-separate border-spacing-y-2">
            <thead>
              <tr className="text-[#9F9F9F] text-xs">
                <th>PERSONNEL DETAILS</th>
                <th>DATE</th>
                <th>DEPARTMENT</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white px-5">
                <td className="py-4 pl-5 flex items-center gap-4">
                  <Image src={Elipse} width={35} height={35} />
                  <p>Aderinsola Emmanuel</p>
                </td>
                <td>02 - 01 - 2020</td>
                <td>Teaching</td>
                <td ><p className="bg-[#49A71C4D]/30 text-center rounded-md mr-3">Present</p></td>
              </tr>
              <tr className="bg-white py-4">
                <td className="py-4 pl-5 flex gap-4">
                  <Image src={Elipse} width={35} height={35} />
                  <p>Adefarasin Elizabeth</p>
                </td>
                <td>02 - 01 - 2020</td>
                <td>Administration</td>
                <td ><p className="bg-[#FF00004D]/30 text-center rounded-md mr-3">Absent</p></td>
              </tr>
              <tr className="bg-white py-4">
                <td className="py-4 pl-5 flex gap-4">
                  <Image src={Elipse} width={35} height={35} />
                  <p>Chukwudi Ugochukwu</p>
                </td>
                <td>02 - 01 - 2020</td>
                <td>Administration</td>
                <td ><p className="bg-[#49A71C4D]/30 text-center rounded-md mr-3">Present</p></td>
              </tr>
              <tr className="bg-white py-4">
                <td className="py-4 pl-5 flex gap-4">
                  <Image src={Elipse} width={35} height={35} />
                  <p>Abdullahi Hawau</p>
                </td>
                <td>02 - 01 - 2020</td>
                <td>Teaching</td>
                <td ><p className="bg-[#49A71C4D]/30 text-center rounded-md mr-3">Present</p></td>
              </tr>
              <tr className="bg-white py-4">
                <td className="py-4 pl-5 flex gap-4">
                  <Image src={Elipse} width={35} height={35} />
                  <p>Uzomeka Chinyere</p>
                </td>
                <td>02 - 01 - 2020</td>
                <td>Security</td>
                <td><p className="bg-[#FF00004D]/30 text-center rounded-md mr-3">Absent</p></td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-center items-center py-14">
            <p className="uppercase mr-2">Load more</p>
            <LeftArrow />
          </div>
        </div>
      </div>
      <div className="col-span-1 overflow-y-hidden">
        <Sidebar />
      </div>
    </div>
  );
}

export default Main;
