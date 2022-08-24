import React from 'react';
import '../assets/styles/product.scss';

function Product({
  price = 1200.21,
  decimals = 0.23,
  title = 'Iphone',
  description = 'Apple ipod touch 156GB 16RAM Negro Igual a nuevo, completo y unico',
  city = 'Capital Federal',
  url = '../assets/images/iphone.jpeg',
}) {
  return (
    <div className="product-container">
      <div className="product">
        <div className="item-image product-item">
          <img src={url} />
        </div>
        <div className="content product-item">
          <h2>$ {price}</h2>
          <p>{description}</p>
        </div>
        <div className="city product-item">
          <p>{city}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
