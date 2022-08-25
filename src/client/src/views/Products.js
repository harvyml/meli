import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import '../assets/styles/products.scss';
import Breadcrumb from '../components/Breadcrumb';
import { useFetch } from '../hooks/useFetch';

function Products({ query = {} }) {
  const { status, isLoading, data, isError } = useFetch(
    [`/api/items?search=${query.search}`],
    'products'
  );

  if (status == 'success') {
    return (
      <div className="container">
        {data && <Breadcrumb items={data.categories} />}
        <div className="products-container">
          {data.items.map((product, idx) => {
            return (
              <Product
                title={product.title}
                img={product.picture}
                price={product.price.amount}
                city={'Buenos Aires'}
              />
            );
          })}
        </div>
      </div>
    );
  } else if (isError) {
    return <h4>An Error has occured</h4>;
  } else if (isLoading) {
    return <h3>Loading...</h3>;
  }
}

export default Products;
