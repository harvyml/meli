// USE ../../ because this route is one level deeper

import React from 'react';
import '../assets/styles/app.scss';
import { connect } from 'react-redux';
import ProductView from '../views/ProductView';
import Wrapper from '../components/Wrapper';

function MainProduct({ data = {} }) {
  const { item } = data;
  return (
    <Wrapper>
      <ProductView
        categories={data.categories}
        picture={item.picture}
        condition={item.condition}
        sold_quantity={item.sold_quantity}
        price={item.price.amount}
        decimals={item.price.decimals}
        title={item.title}
        description={data.description.plain_text}
        city={item.city}
        img={item.picture}
      />
    </Wrapper>
  );
}

const mapStateToProps = ({ data }) => ({
  data,
});

const mapDispatchProps = (dispatch) => ({
  changeQuery: () => dispatch({ type: 'CHANGE_QUERY' }),
});

export default connect(mapStateToProps, mapDispatchProps)(MainProduct);
