import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">ScholarSync</h1>
      <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
        Register
      </button>
    </nav>
  );
};

export default Navbar;