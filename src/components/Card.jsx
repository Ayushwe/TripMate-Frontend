import React from "react";

const Card = ({ icon: Icon, heading, paragraph }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="text-blue-500 mb-4">
        <Icon size={48} />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{heading}</h3>
      <p className="text-gray-600 text-center">{paragraph}</p>
    </div>
  );
};

export default Card;
