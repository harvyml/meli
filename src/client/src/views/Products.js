import React from 'react';
import Product from '../components/Product';
import '../assets/styles/products.scss';
import Breadcrumb from '../components/Breadcrumb';
import { useFetch } from '../hooks/useFetch';

function Products({ query = {} }) {
  const { status, isLoading, data, isError } = useFetch(
    [`/api/items?search=${query.search}`],
    'products'
  );

  function navigateToProduct(e) {
    const id = e.currentTarget.getAttribute('id');
    window.location.replace(`/items/${id}`);
  }

  if (status == 'success' && data.items) {
    return (
      <div className="container">
        {data && <Breadcrumb items={data.categories} />}
        <div className="products-container">
          {data?.items.map((product, idx) => {
            return (
              <Product
                onClick={navigateToProduct}
                id={product.id}
                key={`product-${idx}`}
                title={product.title}
                img={product.picture}
                price={product.price.amount}
                city={product.city}
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
  } else {
    return <h3>Nothing to display</h3>;
  }
}

export default Products;
