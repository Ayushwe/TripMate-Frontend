import React from 'react';
import TrendingDesCardCont from '../components/TrendingDesCardCont';

const TrendingDestinationPage = () => {
  return (
    <div className="pt-8 bg-gray-50 ">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Trending Destinations in India
      </h1>
      <TrendingDesCardCont />
    </div>
  );
};

export default TrendingDestinationPage;
