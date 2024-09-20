import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
