import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../assets/styles/app.scss';
import Products from '../views/Products';

import { QueryClient, QueryClientProvider } from 'react-query';
import { connect } from 'react-redux';

const queryClient = new QueryClient();

function App({ query }) {
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Header search={search} setSearch={(e) => setSearch(e.target.value)} />
        <Products query={query} />
      </QueryClientProvider>
    </div>
  );
}

const mapStateToProps = ({ query }) => ({
  query,
});

const mapDispatchProps = (dispatch) => ({
  changeQuery: () => dispatch({ type: 'CHANGE_QUERY' }),
});

export default connect(mapStateToProps, mapDispatchProps)(App);
