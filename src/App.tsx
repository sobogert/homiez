import React from 'react';
import logo from './logo.svg';
import './App.css';
import StatusContainer from './StatusContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
        <main>
            <div className={"statuses"}>
                <StatusContainer/>
            </div>
        </main>
    </div>
  );
}

export default App;
