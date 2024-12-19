import React from 'react';
import logo from '../assets/myntra.svg'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
            
          {/* Navigation Items */}
          <div className="hidden md:flex space-x-4 items-center">
            <img src={logo} className='h-10 w-10'/>
            <div className='flex space-x-4 font-bold text-gray-700'>
            <a href="#" className="nav-item ">MEN</a>
            <a href="#" className="nav-item">WOMEN</a>
            <a href="#" className="nav-item">KIDS</a>
            <a href="#" className="nav-item">HOME & LIVING</a>
            <a href="#" className="nav-item">BEAUTY</a>
            <a href="#" className="nav-item">STUDIO</a>
            <a href="#" className="active-nav-item">STITCH IT</a>
            </div>            
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <input
                className="w-full px-4 py-2 border rounded-md"
                type="search"
                placeholder="Search"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600">Profile</button>
            <button className="text-gray-600">Wishlist</button>
            <button className="text-gray-600">Bag</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;