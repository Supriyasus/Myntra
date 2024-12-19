import React from 'react';
import { Link } from 'react-router-dom';
import { mockProducts } from '../../src/mockData';
import './Carousel.css';

const Carousel: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {mockProducts.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} className="block">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold truncate">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold">₹{product.price}</span>
                </div>
                <span className="text-sm text-green-500 font-semibold">{product.discount}% OFF</span>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-sm text-yellow-400">{product.rating} ★</span>
                <span className="ml-1 text-xs text-gray-600">({product.reviews})</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Carousel;
