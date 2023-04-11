import React from "react";

function Sallery() {
  return (
    <div>
      <div className="flex justify-between mt-6">
        <h1 className="text-[#00000080]/50 text-[20px] font-semibold">
          December Salary Payment Schedule
        </h1>
        <input
          className="px-7 py-1.5 rounded-lg outline-none"
          type="text"
          placeholder="Filter by Employe's Name"
        />
      </div>
      <table className="table-auto w-full mt-7 border-separate border-spacing-y-3">
        <thead className="text-[#9F9F9F] text-xs text-left">
          <tr>
            <th>EMP. ID</th>
            <th>NAME</th>
            <th>DEPARTMENT</th>
            <th>AMOUNT</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
            <tr className="text-xs bg-white">
                <td className="py-3">1001</td>
                <td>Joshua Hungevu</td>
                <td>Teaching</td>
                <td>₦ 300, 000</td>
                <td><span className="bg-[#074279] rounded-full text-white px-5 py-1">Play</span></td>
            </tr>
            <tr className="text-xs bg-[#ECEAEA]">
                <td className="py-3">1002</td>
                <td>Adefarasin Emmanuel</td>
                <td>Teaching</td>
                <td>₦ 320, 000</td>
                <td><span className="bg-[#074279] rounded-full text-white px-5 py-1">Play</span></td>
            </tr>
            <tr className="text-xs bg-white">
                <td className="py-3">1001</td>
                <td>Joshua Hungevu</td>
                <td>Teaching</td>
                <td>₦ 300, 000</td>
                <td><span className="bg-[#074279] rounded-full text-white px-5 py-1">Play</span></td>
            </tr>
            <tr className="text-xs bg-[#ECEAEA]">
                <td className="py-3">1001</td>
                <td>Joshua Hungevu</td>
                <td>Teaching</td>
                <td>₦ 300, 000</td>
                <td><span className="bg-[#074279] rounded-full text-white px-5 py-1">Play</span></td>
            </tr>
            <tr className="text-xs bg-white">
                <td className="py-3">1001</td>
                <td>Joshua Hungevu</td>
                <td>Teaching</td>
                <td>₦ 300, 000</td>
                <td><span className="bg-[#074279] rounded-full text-white px-5 py-1">Play</span></td>
            </tr>
            <tr className="text-xs bg-[#ECEAEA]">
                <td className="py-3">1001</td>
                <td>Joshua Hungevu</td>
                <td>Teaching</td>
                <td>₦ 300, 000</td>
                <td><span className="bg-[#074279] rounded-full text-white px-5 py-1">Play</span></td>
            </tr>
            <tr className="text-xs bg-white">
                <td className="py-3">1001</td>
                <td>Joshua Hungevu</td>
                <td>Teaching</td>
                <td>₦ 300, 000</td>
                <td><span className="bg-[#074279] rounded-full text-white px-5 py-1">Play</span></td>
            </tr>
            <tr className="text-xs bg-[#ECEAEA]">
                <td className="py-3">1001</td>
                <td>Joshua Hungevu</td>
                <td>Teaching</td>
                <td>₦ 300, 000</td>
                <td><span className="bg-[#074279] rounded-full text-white px-5 py-1">Play</span></td>
            </tr>
            <tr className="text-xs bg-white">
                <td className="py-3">1001</td>
                <td>Joshua Hungevu</td>
                <td>Teaching</td>
                <td>₦ 300, 000</td>
                <td><span className="bg-[#074279] rounded-full text-white px-5 py-1">Play</span></td>
            </tr>
            <tr className="text-xs bg-[#ECEAEA]">
                <td className="py-3">1001</td>
                <td>Joshua Hungevu</td>
                <td>Teaching</td>
                <td>₦ 300, 000</td>
                <td><span className="bg-[#074279] rounded-full text-white px-5 py-1">Play</span></td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Sallery;
