import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import '../assets/styles/products.scss';
import Breadcrumb from '../components/Breadcrumb';
import { useFetch } from '../hooks/useFetch';

function Products() {
  const [params, setParams] = useState(null);
  let search;
  if (typeof window !== 'undefined') {
    search = new URLSearchParams(window.location.search);
  }

  useEffect(() => {
    console.log('search: ', search);
  }, [search]);

  const { status, isLoading, data, isError } = useFetch(
    ['/api/items?search=iphone'],
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
                url={product.picture}
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
