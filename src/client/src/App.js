import React, { useState } from 'react';
import { useEffect } from 'react';
import Header from './components/Header';

function App() {
  const [state, setState] = useState(0);

  function handleClick() {
    setState((current) => current + 1);
  }

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
