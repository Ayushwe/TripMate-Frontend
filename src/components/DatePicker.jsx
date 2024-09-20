import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className='flex items-center border-2 border-blue-500 rounded-lg p-3 bg-white' style={{ width: '190px', height: '64px' }}>
      <FaCalendarAlt className='text-3xl text-blue-900' />
      <div className='flex flex-col ml-2'>
        <span className='text-sm font-semibold text-gray-500'>Select Date</span>
        <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          dateFormat="dd MMM"
          className="text-sm font-semibold bg-transparent focus:outline-none w-20 text-center"
          style={{ marginRight: '0.25rem' }} // Reduced margin-right
        />
      </div>
    </div>
  );
};

export default DatePickerComponent;
