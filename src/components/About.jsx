// components/Navbar.jsx
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <nav className="p-4 shadow-md bg-gray-100 dark:bg-gray-800 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Website</h1>
      <button
        onClick={toggleDarkMode}
        className="text-xl p-2 rounded-full border-2 border-gray-400 dark:border-gray-200"
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
};

export default Navbar;
