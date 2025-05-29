import React from 'react';
import '../styles/ViewStatuses.css';
import StatusContainer from './StatusContainer';
import {IStatusContainerProps} from '../StatusContainerInterface';
import {Status} from "../StatusEnum";

function ViewStatuses() {

    class StatusContainerProps implements IStatusContainerProps {
        name: string;
        time: string;
        title?: string;
        status: Status;

        constructor(name: string, time: string, status: Status, title?: string)
        {
            this.name = name;
            this.time = time;
            this.title = title;
            this.status = status;
        }
    }

    let statuses: StatusContainerProps[] =
        [
            new StatusContainerProps(
                "Joe Vuchetich",
                "now",
                Status.Available,
                "Biking to Estabrook Park!"),

            new StatusContainerProps(
                "Sofi Bogert",
                "6:30 - 9:30",
                Status.Unavailable,
                "just hanging"),
        ];

    return (
        <>
            <header className={"title-only"}>Statuses</header>
            <section className={"statuses"}>
                {
                    statuses.map((stat) =>
                        <StatusContainer
                            name={stat.name}
                            time={stat.time}
                            title={stat.title}
                            status={stat.status}
                        />
                    )
                }
            </section>
        </>
    );
}

export default ViewStatuses;
