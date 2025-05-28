import React from 'react';
import './StatusContainer.css';

function StatusContainer() {
    return (
        <div className="status-container active">
            <div className={"top-row"}>
                <h2>Joe Vuchetich</h2>
                <h2>now</h2>
            </div>
            <h3>Biking to estabrook park!</h3>
        </div>
    );
}

export default StatusContainer;
