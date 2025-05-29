import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import ViewStatuses from "./components/ViewStatuses";

function App() {

    return (
    <div className="App">
        <main>
            <ViewStatuses/>
        </main>
        <NavBar/>
    </div>
  );
}

export default App;
