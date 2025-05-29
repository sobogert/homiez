import React from 'react';
import logo from './logo.svg';
import './App.css';
import StatusContainer from './StatusContainer';

function App() {

    // let statuses: any =
    // {
    //     [
    //     {
    //      "name": "Joe Vuchetich",
    //     "time": "now",
    //     "title": "Biking to Estabrook park!",
    //         "status": "active"
    //     },
    // {
    //     "name": "Sofi Bogert",
    //         "time": "6:30-9:30",
    //         "title": "hangin",
    //     "status": "active"
    // }]
    // };

    return (
    <div className="App">
      <header className="App-header">

      </header>
        <main>
            <div className={"statuses"}>
                {/*{*/}
                {/*    statuses.map((statuses: any, index: number | undefined, index2: any) =>*/}
                {/*    <StatusContainer*/}
                {/*        name={`${statuses[index][index2]}`}*/}
                {/*        time={"now"}*/}
                {/*        title={"Biking to Estabrook park!"}*/}
                {/*        status={"active"}*/}
                {/*    />*/}
                {/*    )*/}
                {/*}*/}

            </div>
        </main>
    </div>
  );
}

export default App;
