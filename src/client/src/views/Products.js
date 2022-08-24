import React from 'react';
import Product from '../components/Product';
import '../assets/styles/products.scss';

function Products() {
  return (
    <div className="container">
      <div className="products-container">
        <Product />
      </div>
    </div>
  );
}

export default Products;
