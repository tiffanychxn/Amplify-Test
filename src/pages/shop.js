import React from 'react';
import ProductCard from '../components/Product.js';

const Shop = () => {
return (
    <div class="page-container">
      <h1 class="brand">BRAND 1</h1>
      <div class="grid-container">
        <ProductCard title="Sample Product Card" />
        <ProductCard title="Sample Product Card" />
        <ProductCard title="Sample Product Card" />
        <ProductCard title="Sample Product Card" />
        <ProductCard title="Sample Product Card" />
      </div>
      <h1 class="brand">BRAND 2</h1>
      <div class="grid-container">
        <ProductCard title="Sample Product Card" />
        <ProductCard title="Sample Product Card" />
        <ProductCard title="Sample Product Card" />
      </div>
    </div>
);
};

export default Shop;
