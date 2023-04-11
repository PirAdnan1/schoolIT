import React, { useState } from "react";

// assets
import DownArrow from "../assets/DownArrow";
import LeftArrow from "../assets/LeftArrow";

function Expenses() {
    const [view , setVeiw] = useState (false)
    const handleSubmit = (() => {
        setVeiw(!view)
    })
  return (
    <div>
      <button className="bg-[#074279] my-7 text-sm px-11 py-2 text-white rounded-full">
        <span className="pr-6 text-lg">+</span>Create a new Expense
      </button>
      <table className="table-auto w-full border-separate border-spacing-y-3">
        <thead className="text-[#9F9F9F] uppercase text-xs">
          <th>Date</th>
          <th>Time</th>
          <th>Name</th>
          <th>description</th>
          <th>amount</th>
          <th>action</th>
        </thead>
        <tbody>
          <tr className="bg-white py-3 text-xs text-center cursor-pointer">
            <td className="flex items-center gap-7 py-3" onClick={handleSubmit} >
              <DownArrow  />
              <span>01 - 12 -2020</span>
            </td>
            <td>12 : 45</td>
            <td>Joshua Hungevu</td>
            <td>Staff quarters maintenance</td>
            <td>₦ 30, 000</td>
            <td className="text-[#074279] font-bold">Manage</td>
          </tr>
        {view &&   <tr>
            <td className="flex flex-col">
              <span className="text-[10px] text-[#9F9F9F]">AMOUNT</span>
              <span className="text-[20px] font-semibold">₦ 30,000 </span>
            </td>
            <td></td>
            <td className="flex flex-col">
              <span className="text-[10px] text-[#9F9F9F]">DEPARTMENT</span>
              <span className="text-[20px] font-semibold">Teaching</span>
            </td>
            <td></td>
            <td className="text-[10px] flex flex-col text-[#9F9F9F]">
              <span className="my-3">DETAILS</span>
              <span className="max-w-[234px]">
                Block work removal and renovation, Industrial Glasss for deep
                cleaning moton graphics
              </span>
            </td>
          </tr>}
          <tr className="text-xs bg-[#ECEAEA]">
            <td className="flex items-center py-3">
            <LeftArrow />
            <span className="ml-7">05 - 12 -2020</span>
            </td>
            <td>
            14 : 30
            </td>
            <td>Adefarasin Emmanuel</td>
            <td>Car Servicing</td>
            <td>₦ 80, 000</td>
            <td className="text-[#074279] font-bold">Manage</td>
          </tr>
          <tr className="text-xs bg-white">
            <td className="flex items-center py-3">
            <LeftArrow />
            <span className="ml-7">10 - 12 -2020</span>
            </td>
            <td>
            8 : 30
            </td>
            <td>Chukuma Ejiofor</td>
            <td>Light Bill</td>
            <td>₦ 80, 000</td>
            <td className="text-[#074279] font-bold">Manage</td>
          </tr>
          <tr className="text-xs bg-[#ECEAEA]">
            <td className="flex items-center py-3">
            <LeftArrow />
            <span className="ml-7">20 - 12 -2020</span>
            </td>
            <td>
            15 : 30
            </td>
            <td>Travolta John</td>
            <td>Toiletries</td>
            <td>₦ 80, 000</td>
            <td className="text-[#074279] font-bold">Manage</td>
          </tr>
          <tr className="text-xs bg-white">
            <td className="flex items-center py-3">
            <LeftArrow />
            <span className="ml-7">25 - 12 -2020</span>
            </td>
            <td>
            17 : 30
            </td>
            <td>Mckein Cynthia</td>
            <td>ISP Payment</td>
            <td>₦ 80, 000</td>
            <td className="text-[#074279] font-bold">Manage</td>
          </tr>
          
        </tbody>
      </table>
      <button className="uppercase flex items-center gap-4 mx-auto py-7">load more <DownArrow /></button>
    </div>
  );
}

export default Expenses;
