import React from 'react';
import { getLaunches } from './data/launchesSource';
import './App.css';

function App() {
  React.useEffect(() => {
    (async () => {
      await getLaunches();
    })();
  });
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/sx</code> and save to reload.
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
