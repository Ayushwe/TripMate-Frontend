import React from 'react';
import TrendingDesCardContOutside from '../components/TrendingDesCardContOutside';

const TrendingDestinationOutsidePage = () => {
  return (
    <div className=" bg-gray-100 px-4 pt-8 sm:px-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">
        Trending Destinations Outside of India
      </h1>
      <div className="flex justify-center">
        <TrendingDesCardContOutside />
      </div>
    </div>
  );
};

export default TrendingDestinationOutsidePage;
