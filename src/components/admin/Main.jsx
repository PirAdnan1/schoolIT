import React from "react";
import Image from "next/image";

// assets
import LeftArrow from "@/src/assets/LeftArrow";
import Elipse from "@/src/assets/Ellipse.png";

function Main() {
  return (
    <div>
      <div className="md:pl-14 pl-7 md:pr-24 pr-12 bg-[#F2EFEF] h-full col-span-10">
        <div className="flex items-center justify-between pt-14">
          <h5 className="font-semibold text-[24px]">Summary</h5>
          <LeftArrow />
        </div>
        <p className="text-xs py-8">02-January-2020</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="shadow-md rounded-lg flex flex-col px-5 pb-10 pt-5 bg-white md:max-w-[272px] w-full">
            <span className="bg-[#1C33A74D]/30 rounded-full px-4 py-1 max-w-[110px]">
              Attendence
            </span>
            <p className="md:text-[32px] text-[18px] text-center mt-5">
              300<span className="text-base text-slate-400">/400</span>
            </p>
          </div>
          <div className="shadow-md rounded-lg flex flex-col px-5 pb-10 pt-5 bg-white max-w-[272px] w-full">
            <span className="bg-[#A7571C4D]/30 rounded-full px-4 py-1 max-w-[110px]">
              Expenses
            </span>
            <p className="md:text-[32px] text-[18px]  text-center mt-5">₦ 300,000 </p>
          </div>
          <div className="shadow-md rounded-lg flex flex-col px-5 pb-10 pt-5 bg-white max-w-[272px] w-full">
            <span className="bg-[#FFB9B94D]/30 rounded-full px-4 py-1 max-w-[110px]">
              Events
            </span>
            <p className="md:text-[32px] text-[18px] text-center mt-5">15</p>
          </div>
        </div>
        <h1 className="text-[24px] my-7 font-semibold">Employee’s Tracker</h1>
        <div className="overflow-x-auto">
          <table className="table-auto rounded-md w-screen md:w-full border-separate overflow-x-auto border-spacing-y-2">
            <thead>
              <tr className="text-[#9F9F9F] text-left text-xs">
                <th>PERSONNEL DETAILS</th>
                <th>DATE</th>
                <th>DEPARTMENT</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white px-5">
                <td className="py-4 pl-5 flex items-center gap-4">
                  <Image src={Elipse} width={35} height={35} alt="..." />
                  <p>Aderinsola Emmanuel</p>
                </td>
                <td>02 - 01 - 2020</td>
                <td>Teaching</td>
                <td>
                  <p className="bg-[#49A71C4D]/30 text-center rounded-md mr-3">
                    Present
                  </p>
                </td>
              </tr>
              <tr className="bg-white py-4">
                <td className="py-4 pl-5 flex gap-4">
                  <Image src={Elipse} width={35} height={35} alt="..." />
                  <p>Adefarasin Elizabeth</p>
                </td>
                <td>02 - 01 - 2020</td>
                <td>Administration</td>
                <td>
                  <p className="bg-[#FF00004D]/30 text-center rounded-md mr-3">
                    Absent
                  </p>
                </td>
              </tr>
              <tr className="bg-white py-4">
                <td className="py-4 pl-5 flex gap-4">
                  <Image src={Elipse} width={35} height={35} alt="..." />
                  <p>Chukwudi Ugochukwu</p>
                </td>
                <td>02 - 01 - 2020</td>
                <td>Administration</td>
                <td>
                  <p className="bg-[#49A71C4D]/30 text-center rounded-md mr-3">
                    Present
                  </p>
                </td>
              </tr>
              <tr className="bg-white py-4">
                <td className="py-4 pl-5 flex gap-4">
                  <Image src={Elipse} width={35} height={35} alt="..." />
                  <p>Abdullahi Hawau</p>
                </td>
                <td>02 - 01 - 2020</td>
                <td>Teaching</td>
                <td>
                  <p className="bg-[#49A71C4D]/30 text-center rounded-md mr-3">
                    Present
                  </p>
                </td>
              </tr>
              <tr className="bg-white py-4">
                <td className="py-4 pl-5 flex gap-4">
                  <Image src={Elipse} width={35} height={35} alt="..." />
                  <p>Uzomeka Chinyere</p>
                </td>
                <td>02 - 01 - 2020</td>
                <td>Security</td>
                <td>
                  <p className="bg-[#FF00004D]/30 text-center rounded-md mr-3">
                    Absent
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-center items-center py-14">
            <p className="uppercase mr-2">Load more</p>
            <LeftArrow />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
