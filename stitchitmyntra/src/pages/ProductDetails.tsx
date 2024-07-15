// ProductDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { mockProducts } from '../../src/mockData';
import Navbar from '../components/Navbar';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = mockProducts.find(p => p.id === parseInt(id || ''));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
    <Navbar/>
    <div className="max-w-4xl mx-auto p-4 mt-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <div className="mt-4">
            <span className="text-3xl font-bold">₹{product.price}</span>
            <span className="ml-2 text-gray-500 line-through">
              ₹{product.price}
            </span>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Select Size</h2>
            <div className="flex space-x-2 mt-2">
              {['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                <button key={size} className="border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100">
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Customization Options</h2>
            <div className="mt-2">
              <label className="block">Neck</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 mt-1">
                <option className='text-gray-500'>Please Select</option>
                <option>Boat Neck</option>
                <option>Boat Neck with Deep V</option>
                <option>Chinese Collar</option>
                
              </select>
            </div>
            <div className="mt-2">
              <label className="block">Lining</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 mt-1">
              <option className='text-gray-500'>Please Select</option>
                <option>Cotton</option>
                <option>Polyester</option>
                <option>Silk</option>
              </select>
            </div>
            <div className="mt-2">
              <label className="block">Feeding Zip</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 mt-1">
              <option className='text-gray-500'>Please Select</option>
                <option>With zips</option>
                <option>Without zips</option>
              </select>
            </div>
            <div className="mt-2">
              <label className="block">Sleeves</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 mt-1">
              <option className='text-gray-500'>Please Select</option>
                <option>Short</option>
                <option>Long</option>
                <option>Sleeveless</option>
              </select>
            </div>
          </div>
          <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600">
            Add to Bag
          </button>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default ProductDetails;