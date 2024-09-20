import React, { useState } from 'react';
import { FaUserFriends } from 'react-icons/fa';

const TravelerSelection = () => {
  const [adults, setAdults] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className='relative'>
      <div
        className='flex items-center space-x-2 border-2 border-blue-500 rounded-lg p-3 cursor-pointer bg-white w-full sm:w-48 md:w-[120px] lg:w-64 h-14 shadow-sm'
        onClick={() => setShowOptions(!showOptions)}
      >
        <FaUserFriends className='text-xl text-blue-900' />
        <div>
          <p className='text-sm md:text-base font-bold'>{`${adults} adults`}</p>
          <p className='text-xs md:text-sm text-gray-500'>{`${rooms} room${rooms > 1 ? 's' : ''}`}</p>
        </div>
      </div>

      {showOptions && (
        <div className='absolute top-full left-0 mt-2 w-full sm:w-48 md:w-[150px] lg:w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-10'>
          <div className='flex justify-between p-2'>
            <span className='text-xs md:text-sm font-bold text-gray-600'>Adults</span>
            <div className='flex items-center'>
              <button
                onClick={() => setAdults(adults - 1)}
                disabled={adults <= 1}
                className='px-2 py-1 border border-gray-300 rounded-lg disabled:opacity-50 text-sm md:text-base'
              >
                -
              </button>
              <span className='mx-2 text-sm md:text-base'>{adults}</span>
              <button
                onClick={() => setAdults(adults + 1)}
                className='px-2 py-1 border border-gray-300 rounded-lg text-sm md:text-base'
              >
                +
              </button>
            </div>
          </div>
          <div className='flex justify-between p-2'>
            <span className='text-xs md:text-sm font-bold text-gray-600'>Rooms</span>
            <div className='flex items-center'>
              <button
                onClick={() => setRooms(rooms - 1)}
                disabled={rooms <= 1}
                className='px-2 py-1 border border-gray-300 rounded-lg disabled:opacity-50 text-sm md:text-base'
              >
                -
              </button>
              <span className='mx-2 text-sm md:text-base'>{rooms}</span>
              <button
                onClick={() => setRooms(rooms + 1)}
                className='px-2 py-1 border border-gray-300 rounded-lg text-sm md:text-base'
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TravelerSelection;
