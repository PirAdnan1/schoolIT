import React from "react";

// components
import Sidebar from "@/src/components/admin/Sidebar";
import DashboardNav from "@/src/components/DashboardNav";

function Layout({ children }) {
  return (
    <div className="flex h-screen bg-[#F2EFEF]">
      <Sidebar />

      <div className="flex-grow h-full overflow-y-auto bg-[#F2EFEF]">
        <div className="flex justify-end items-center pt-2.5 md:px-24 px-7">
          <DashboardNav />
        </div>

        {children}
      </div>
    </div>
  );
}

export default Layout;
