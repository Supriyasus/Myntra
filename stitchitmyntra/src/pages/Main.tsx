import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Filters from '../components/Filters';
import Carousel from '../components/Carousel';


const Main: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row mt-8">
          <Filters />
          <Carousel />
      </div>
    </div>
  );
};

export default Main;