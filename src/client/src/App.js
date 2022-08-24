import React from 'react';
import Header from './components/Header';
import './assets/styles/app.scss';
import Products from './views/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
    </div>
  );
}

export default App;
