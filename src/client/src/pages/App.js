import React from 'react';
import '../assets/styles/app.scss';
import Products from '../views/Products';
import { connect } from 'react-redux';
import Wrapper from '../components/Wrapper';

function App({ query }) {
  return (
    <Wrapper>
      <Products query={query} />
    </Wrapper>
  );
}

const mapStateToProps = ({ query }) => ({
  query,
});

const mapDispatchProps = (dispatch) => ({
  changeQuery: () => dispatch({ type: 'CHANGE_QUERY' }),
});

export default connect(mapStateToProps, mapDispatchProps)(App);
