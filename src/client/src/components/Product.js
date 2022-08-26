import React from 'react';
import '../assets/styles/product.scss';

function Product({
  onClick = () => true,
  id = 0,
  price = 1200.21,
  title = 'Iphone',
  description = 'Apple ipod touch 156GB 16RAM Negro Igual a nuevo, completo y unico',
  city = 'Capital Federal',
  img = '../assets/images/iphone.jpeg',
}) {
  return (
    <div className="product-container" id={id} onClick={onClick}>
      <div className="product">
        <div className="item-image product-item">
          <img src={img} />
        </div>
        <div className="content product-item">
          <h2>$ {price}</h2>
          <h1>{title}</h1>
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
