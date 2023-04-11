import React, { useState } from "react";

// components
import Expenses from "../Expenses";
import Sallery from "../Sallery";

// assets
import Expens from "@/src/assets/Expens";
import UperAr from "@/src/assets/UperAr";

function Account() {
  const [tableShow, setTableShow] = useState(0);
  
  return (
    <div className="mx-7 lg:mx-14">
      <h1 className="text-[24px] font-semibold">Account</h1>
      <div className="flex justify-between mt-7">
        <div className="bg-gradient-to-b text-white rounded-lg w-[302px] h-[195px] from-[#000000] to-[#5169BF]">
          <div className="flex items-center pt-7 pl-7">
            <Expens />
            <span className="ml-4 font-bold">Expenses</span>
          </div>
          <div className="flex relative flex-col font-bold pt-7 pl-7">
            <span>December</span>
            <span className="text-[24px] pt-4">₦ 300,000</span>
            <div className="border-2 flex absolute right-7 top-2 h-[35] items-center border-white w-[91px] px-2 rounded-full">
              <span className="mr-5 py-1">HIGH</span>
              <UperAr />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b text-white rounded-lg w-[302px] h-[195px] from-[#000000] to-[#5169BF]">
          <div className="flex items-center pt-7 pl-7">
            <Expens />
            <span className="ml-4 font-bold">Paid Total Salary</span>
          </div>
          <div className="flex relative flex-col font-bold pt-7 pl-7">
            <span>December</span>
            <span className="text-[24px] pt-4">₦ 1,200,000 </span>
          </div>
        </div>
      </div>
      <div className="text-[24px] flex justify-center gap-28 mt-14">
        <button onClick={(() => setTableShow(0))}><h3 className="cursor-pointer">Expenses</h3></button>
        <button onClick={(() => setTableShow(1))}><h3 className="cursor-pointer">Salery</h3></button>
      </div>
      <div>
      {tableShow === 0 && <Expenses /> }  
     
      {tableShow === 1 &&  <Sallery />}
      </div>
      <div>
       
      </div>
    </div>
  );
}

export default Account;
