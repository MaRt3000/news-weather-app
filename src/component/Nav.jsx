import React from 'react'
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className='fixed top-0 left-0 z-10 bg-white w-full sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-4 md:flex-col md:h-full md:w-[250px] md:justify-start md:gap-8'>
      {/* Logo */}
      <div className="w-[80px] md:w-[100px] flex-shrink-0">
        <img className="object-contain" src={Logo} alt='logo' />
      </div>

      

      {/* Links */}
      <div className="flex flex-row sm:flex-row md:flex-col gap-4 md:gap-10 lg:gap-10 align-center justify-center">
        <Link
          to="/"
          className="text-purple-800 py-2 px-4 rounded hover:bg-gray-100 text-base sm:text-sm md:text-[30px] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg border-b-[0.5px] border-[rgba(80,23,32,1)]"
        >
           DASHBOARD
        </Link>
       
        <Link
          to="/weather"
          className="text-purple-800 py-2 px-4 rounded hover:bg-gray-100 text-base sm:text-sm md:text-[30px] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg border-b-[0.5px] border-[rgba(80,23,32,1)]"
        >
          WEATHER
        </Link>
        <Link
          to="/news"
          className="text-purple-800 py-2 px-4 rounded hover:bg-gray-100 text-base sm:text-sm md:text-[30px] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg border-b-[0.5px] border-[rgba(80,23,32,1)]"
        >
          NEWS
        </Link>
      </div>
    </nav>

  )
}

export default Nav