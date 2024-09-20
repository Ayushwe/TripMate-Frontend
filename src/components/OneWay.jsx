import React from "react";
import { FaSearch, FaExchangeAlt } from "react-icons/fa";
import DateRangePicker from "./DateRangePicker";
import TravelerSelection from "./TravelerSelection";

const OneWay = () => {
  return (
    <div className="flex flex-wrap items-center space-x-4 mb-4">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Leaving From"
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 mt-2"
        />
      </div>

      <FaExchangeAlt className="text-gray-500 mx-4 mt-2" />

      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Going To"
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 mt-2"
        />
      </div>

      <DateRangePicker className="flex-1" />
      <TravelerSelection className="flex-1" />

      <button className="flex items-center bg-blue-600 text-white py-3 px-5 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
        <FaSearch className="mr-2 text-lg" />
        Search
      </button>
    </div>
  );
};

export default OneWay;
