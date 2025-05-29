import {Status} from "./StatusEnum";

export interface IStatusContainerProps {
    name: string;
    time: string;
    title?: string;
    status: Status;
}