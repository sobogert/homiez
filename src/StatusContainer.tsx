import React from 'react';
import './StatusContainer.css';
import { StatusContainerProps } from './StatusContainerInterface';

function StatusContainer({ name, time, title, status }: StatusContainerProps) {
    return (
        <div className={`status-container ${status}`}>
            <div className={"top-row"}>
                <h2>{name}</h2>
                <h2>{time}</h2>
            </div>
            <h3>{title}</h3>
        </div>
    );
}

export default StatusContainer;
