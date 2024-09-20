import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import OneWay from "./OneWay";
import Return from "./Return"; // Import the Return component

const FlightUI = () => {
  const [flightType, setFlightType] = useState("One-way");
  const [classType, setClassType] = useState("Economy");
  const [showClassOptions, setShowClassOptions] = useState(false);
  const [addPlaceToStay, setAddPlaceToStay] = useState(false);

  const flightOptions = ["One-way", "Return"];
  const classOptions = ["Economy", "Premium Economy", "Business Class", "First Class"];

  return (
    <div className="flex flex-col items-center bg-white rounded-xl shadow-lg w-full">
      {/* Flight Options and Class Type Button */}
      <div className="flex space-x-10 mb-4">
        {flightOptions.map((option) => (
          <button
            key={option}
            onClick={() => setFlightType(option)}
            className={`text-lg font-semibold focus:outline-none border-b-2 ${
              flightType === option ? "border-blue-600 text-blue-600" : "border-transparent"
            }`}
          >
            {option}
          </button>
        ))}

        {/* Class Type Button */}
        <div className="relative">
          <button
            onClick={() => setShowClassOptions(!showClassOptions)}
            className="flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none"
          >
            {classType}
            <FaChevronDown className="ml-2 text-lg" />
          </button>
          {showClassOptions && (
            <div className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              {classOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setClassType(option);
                    setShowClassOptions(false);
                  }}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 transition"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Conditional Rendering of Components */}
      {flightType === "One-way" && <OneWay />}
      {flightType === "Return" && <Return />}

      {/* Add a Place to Stay Checkbox */}
      <div className="flex items-center w-full mt-4">
        <input
          type="checkbox"
          checked={addPlaceToStay}
          onChange={() => setAddPlaceToStay(!addPlaceToStay)}
          className="mr-2"
        />
        <label>Add a place to stay</label>
      </div>
    </div>
  );
};

export default FlightUI;
