import React from 'react';
import './App.css';
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import '../src/pages/ProductDetails'
import ProductDetails from '../src/pages/ProductDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
