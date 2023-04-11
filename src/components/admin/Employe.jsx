import React from "react";

// components
import Pagination from "../Pagination";

function Employe() {
  return (
    <div className="xl:mx-14 px-7">
      <div className="flex justify-between items-center pt-14">
        <h1 className="text-[24px] font-semibold">Employees</h1>
        <button className="bg-[#074279] py-2 md:px-8 px-2 text-white rounded-full text-sm">
          <span className="mr-3 text-[20px]">+</span>Create Employee
        </button>
      </div>

      <div className="relative overflow-x-auto lg:overflow-x-hidden">
        <table className="table-auto w-screen lg:w-full text-xs text-left border-separate mt-7 border-spacing-y-2">
          <thead className="uppercase text-[#9F9F9F]">
            <th className="px-8">#</th>
            <th>surename</th>
            <th>firstname</th>
            <th>department</th>
            <th>created on</th>
            <th>action</th>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="py-4 px-8">1</td>
              <td>Aderinsola </td>
              <td>Emmanuel</td>
              <td>Teaching</td>
              <td>02 - 01 - 2008</td>
              <td className="font-bold text-blue">Manage</td>
            </tr>
            <tr className="bg-white">
              <td className="py-4 px-8">2</td>
              <td>Chukwuma </td>
              <td>Ugochukwu </td>
              <td>Administration</td>
              <td>22 - 03 - 2017</td>
              <td className="font-bold text-blue">Manage</td>
            </tr>
            <tr className="bg-white">
              <td className="py-4 px-8">3</td>
              <td>Taiwo </td>
              <td>Sunday </td>
              <td>Teaching</td>
              <td>14 - 05 - 2018</td>
              <td className="font-bold text-blue">Manage</td>
            </tr>
            <tr className="bg-white">
              <td className="py-4 px-8">4</td>
              <td>Adefarasin</td>
              <td>Adewumi</td>
              <td>Teaching</td>
              <td>27 - 01 - 2016</td>
              <td className="font-bold text-blue">Manage</td>
            </tr>
            <tr className="bg-white">
              <td className="py-4 px-8">5</td>
              <td>Afolayan</td>
              <td>Funmi </td>
              <td>Administration</td>
              <td>09 - 04 - 2000</td>
              <td className="font-bold text-blue">Manage</td>
            </tr>
            <tr className="bg-white">
              <td className="py-4 px-8">6</td>
              <td>Chima</td>
              <td>Uche</td>
              <td>Security</td>
              <td>14 - 01 - 2000</td>
              <td className="font-bold text-blue">Manage</td>
            </tr>
            <tr className="bg-white">
              <td className="py-4 px-8">7</td>
              <td>Afenifere </td>
              <td>Esther </td>
              <td>Security</td>
              <td>30 - 01 - 2019</td>
              <td className="font-bold text-blue">Manage</td>
            </tr>
            <tr className="bg-white">
              <td className="py-4 px-8">8</td>
              <td>Johnson</td>
              <td>Stephen</td>
              <td>Teaching</td>
              <td>02 - 01 - 2007</td>
              <td className="font-bold text-blue">Manage</td>
            </tr>
            <tr className="bg-white">
              <td className="py-4 px-8">9</td>
              <td>Owolabi</td>
              <td>Johanna</td>
              <td>Administration</td>
              <td>02 - 06 - 2016</td>
              <td className="font-bold text-blue">Manage</td>
            </tr>
            <tr className="bg-white">
              <td className="py-4 px-8">10</td>
              <td>Abdullahi</td>
              <td>Taofeeq</td>
              <td>Teaching</td>
              <td>22 - 08 - 2018</td>
              <td className="font-bold text-blue">Manage</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
}

export default Employe;
