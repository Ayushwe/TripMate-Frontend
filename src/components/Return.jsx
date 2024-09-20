import React from "react";
import { FaSearch, FaExchangeAlt } from "react-icons/fa";
import TravelerSelection from "./TravelerSelection";
import DatePicker from "./DatePicker";

const Return = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap items-center space-y-4 lg:space-y-0 lg:space-x-4 mb-4">
      <div className="relative flex-1 w-full lg:w-auto">
        <input
          type="text"
          placeholder="Leaving From"
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
      </div>

      <FaExchangeAlt className="text-gray-500 mx-4 hidden lg:block" />

      <div className="relative flex-1 w-full lg:w-auto">
        <input
          type="text"
          placeholder="Going To"
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
      </div>

      <div className="flex flex-1 w-full lg:w-auto">
        <DatePicker className="flex-1" />
      </div>

      <div className="flex flex-1 w-full lg:w-auto">
        <TravelerSelection className="flex-1" />
      </div>

      <button className="w-full lg:w-auto flex items-center justify-center bg-blue-600 text-white py-3 px-5 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
        <FaSearch className="mr-2 text-lg" />
        Search
      </button>
    </div>
  );
};

export default Return;
