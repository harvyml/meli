import React from "react";
import { useEffect } from "react";

function App() {
  if (typeof window === "undefined") { 
    //client side code 
    console.log("INDEINGED")
  }else{
    console.log("SERVER")
  }
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
