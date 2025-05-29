import React from 'react';
import '../styles/StatusContainer.css';
import { IStatusContainerProps } from '../StatusContainerInterface';
import {Status} from "../StatusEnum";

function StatusContainer({ name, time, title, status }: IStatusContainerProps) {
    return (
        <div className={`status-container ${Status[status].toLowerCase()}`}>
            <div className={"top-row"}>
                <h2>{name}</h2>
                <h2>{time}</h2>
            </div>
            <h3>{title}</h3>
        </div>
    );
}

export default StatusContainer;
