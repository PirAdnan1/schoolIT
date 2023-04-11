import React from "react";

// components
import AttendenceData from "@/src/components/admin/Attendence";
import Layout from "@/src/layout/dashboard";

Attendence.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
function Attendence() {
  return (
    <div className="h-screen bg-[#F2EFEF] px-14 mt-14">
        <div className="flex flex-col md:flex-row justify-between gap-7">
          <h1 className="font-semibold text-[24px]">Attendance Tracker</h1>
          <div className="flex flex-col md:flex-row gap-7">
            <input
              type="text"
              placeholder="Filter by employee’s name"
              className="bg-white pl-7 outline-none pr-12 text-xs rounded-lg py-2"
            />
            <input className="py-1 rounded-lg px-7 outline-none" type="date" />
          </div>
        </div>
    
      <AttendenceData />
    </div>
  );
}

export default Attendence;
