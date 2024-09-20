import React, { useState } from "react";
import FlightUI from "./FlightUi";
import Packages from "./Packages";
import Hotels from "./Hotels";

const SearchBox = () => {
  const [selectedCategory, setSelectedCategory] = useState("Hotels");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div
      className="flex flex-wrap items-center justify-between bg-white p-4 lg:p-6 rounded-xl shadow-lg w-full max-w-[1200px] mx-auto space-x-4 space-y-4"
    >
      {/* Category Selection */}
      <div className="w-full flex justify-around mb-4">
        {["Hotels", "Flights", "Packages"].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`text-sm lg:text-lg text-gray-600 font-semibold focus:outline-none pb-2 ${
              selectedCategory === category
                ? "text-blue-600 border-b-2 border-blue-600"
                : "hover:text-blue-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Conditional Rendering */}
      {selectedCategory === "Flights" ? (
        <FlightUI />
      ) : selectedCategory === "Packages" ? (
        <Packages />
      ) : (
        <Hotels />
      )}
    </div>
  );
};

export default SearchBox;
