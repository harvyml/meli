import React, { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [state, setState] = useState(0)

  function handleClick(){
    setState(current => current+1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          count {state}
        </p>
        <a
          className="App-link"
          onClick={handleClick}
        >
          Increment
        </a>
      </header>
    </div>
  );
}

export default App;
