import React from "react";
import { sum } from "./sum";

function App() {
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
          Learn React {sum(2, 2)}
        </a>
      </header>
    </div>
  );
}

export default App;
