// DateRangePicker.jsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Keep this import for default styles

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="flex items-center space-x-4 p-4 rounded-lg ">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          startDate={startDate}
          endDate={endDate}
          selectsStart
          placeholderText="Start Date"
          className="border border-gray-300 p-2 rounded-lg w-32 text-center focus:border-blue-500 focus:outline-none transition-colors cursor-pointer"
          calendarClassName="react-datepicker-calendar"
        />
        <span className="text-lg font-semibold text-gray-600">to</span>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          startDate={startDate}
          endDate={endDate}
          selectsEnd
          minDate={startDate}
          placeholderText="End Date"
          className="border border-gray-300 p-2 rounded-lg w-32 text-center focus:border-blue-500 focus:outline-none transition-colors cursor-pointer"
          calendarClassName="react-datepicker-calendar"
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
