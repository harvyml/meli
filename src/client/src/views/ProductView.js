import React, { useState, useEffect } from 'react';
import '../assets/styles/products.scss';
import Breadcrumb from '../components/Breadcrumb';
import '../assets/styles/productView.scss';

function ProductView({
  categories,
  picture,
  condition,
  sold_quantity,
  title,
  price,
  decimals,
  description,
}) {
  const [parsedData, setParsedData] = useState({
    price: 0,
    decimals: 0,
    condition: 'new',
  });

  function parse() {
    let _price = parseInt(price);
    // make the decimal not have the 0 at the left
    let _decimals = parseFloat(decimals).toFixed(2).toString().slice(1);
    let _condition = condition === 'new' ? 'Nuevo' : 'Usado';
    setParsedData((current) => {
      return {
        ...current,
        price: _price,
        decimals: _decimals,
        condition: _condition,
      };
    });
  }

  useEffect(() => {
    parse();
  }, [decimals]);

  return (
    <div className="container product-view-container">
      <Breadcrumb items={categories} />
      <div className="product-view">
        <div className="flex">
          <div className="product-view-image-container">
            <img className="product-view-image" src={picture} />
          </div>
          <div className="product-view-info-container">
            <div className="product-view-info">
              <div className="product-view-general-info">
                <span>
                  {parsedData.condition} - {sold_quantity} vendidos
                </span>
                <h1>{title}</h1>
              </div>
              <div className="product-view-price-info">
                <h3>
                  {parsedData.price}
                  <span className="decimals">{parsedData.decimals}</span>
                </h3>
              </div>
              <div className="product-view-info-button-buy-container">
                <button className="product-view-info-button-buy button blue">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product-view-description">
          <h4>Descripción del producto</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
