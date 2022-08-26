// USE ../../ because this route is one level deeper

import React, { useEffect } from 'react';
import Header from '../components/Header';
import '../assets/styles/app.scss';

import { QueryClient, QueryClientProvider } from 'react-query';
import { connect } from 'react-redux';
import ProductView from '../views/ProductView';

const queryClient = new QueryClient();

function MainProduct({ data = {} }) {
  const { item } = data;
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Header />
        <ProductView
          categories={item.categories}
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
      </QueryClientProvider>
    </div>
  );
}

const mapStateToProps = ({ data }) => ({
  data,
});

const mapDispatchProps = (dispatch) => ({
  changeQuery: () => dispatch({ type: 'CHANGE_QUERY' }),
});

export default connect(mapStateToProps, mapDispatchProps)(MainProduct);
