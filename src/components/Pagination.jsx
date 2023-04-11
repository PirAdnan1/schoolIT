import Link from "next/link";

const Pagination = () => {
  return (
    <div className="flex justify-center rounded-md pb-16 pt-7">
      <ul className="inline-flex text-xs text-black">
        <li>
          <Link
            href="#"
            className="px-3 py-3 ml-0  font-medium text-black  border border-[#C4C4C4] rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Previous
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="px-3 py-3  border border-[#C4C4C4] hover:bg-gray-100 hover:text-gray-700"
          >
            1
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="px-3 py-3  border border-[#C4C4C4] hover:bg-gray-100 hover:text-gray-700"
          >
            2
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="px-3 py-3  border border-[#C4C4C4] hover:bg-gray-100 hover:text-gray-700"
          >
            3
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="px-3 py-3  border border-[#C4C4C4] hover:bg-gray-100 hover:text-gray-700"
          >
            4
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="px-3 py-3  text-gray-500  border border-[#C4C4C4] hover:bg-gray-100 hover:text-gray-700"
          >
            5
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="px-3 py-3  text-black  border font-medium border-[#C4C4C4] rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Next
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
