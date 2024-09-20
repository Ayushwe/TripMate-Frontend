import React from 'react';
import PropTypes from 'prop-types';

const TrendingDesCard = ({ image, destinationName }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 w-[270px] h-[320px]">
      <img
        src={image}
        alt={destinationName}
        className="w-full h-2/3 object-cover rounded-t-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800 text-center">{destinationName}</h3>
    </div>
  );
};

TrendingDesCard.propTypes = {
  image: PropTypes.string.isRequired,
  destinationName: PropTypes.string.isRequired,
};

export default TrendingDesCard;
