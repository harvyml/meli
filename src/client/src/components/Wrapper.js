import React from 'react';
import Header from './Header';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

const Wrapper = ({ children }) => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Header />
        {children}
      </QueryClientProvider>
    </div>
  );
};

export default Wrapper;
