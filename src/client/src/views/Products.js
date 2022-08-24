import React from 'react';
import Product from '../components/Product';
import '../assets/styles/products.scss';
import Breadcrumb from '../components/Breadcrumb';

function Products() {
  return (
    <div className="container">
      <Breadcrumb />
      <div className="products-container">
        <Product />
      </div>
    </div>
  );
}

export default Products;
