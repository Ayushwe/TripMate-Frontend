import React from 'react';

const Navbar = () => {
  return (
    <nav className="pt-6">
      <div className="flex items-center justify-between h-[70px] px-4 lg:px-20">
        {/* Logo */}
        <img
          src="./src/assets/logo.png"
          className="w-[80px] sm:w-[90px] lg:w-[103px]"
          alt="Logo"
        />

        {/* Navigation Links */}
        <ul className="flex space-x-4 sm:space-x-6 items-center text-sm sm:text-base lg:text-lg font-sans text-white">
          {['Home', 'About', 'Hotels', 'Contact'].map((item, index) => (
            <li key={index} className="hover:text-gray-400 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
