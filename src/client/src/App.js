import React from 'react';
import Header from './components/Header';
import './assets/styles/app.scss';
import Products from './views/Products';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Header />
        <Products />
      </QueryClientProvider>
    </div>
  );
}

export default App;
