import React from 'react';
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  return (
    <div className="navbar">
      {/* Myntra logo or brand */}
      <img
        className="navbar__logo"
        src="https://www.myntra.com/favicon.ico"
        alt="Myntra Logo"
      />

      {/* Navbar links */}
      <div className="navbar__links">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Offers</a>
      </div>

      {/* Search bar */}
      <div className="navbar__search">
        <input type="text" placeholder="Search for products, brands and more" />
        <SearchIcon className="navbar__searchIcon" />
      </div>

      {/* Icons */}
      <div className="navbar__icons">
        <ShoppingCartIcon />
      </div>
    </div>
  );
}

export default Navbar;
