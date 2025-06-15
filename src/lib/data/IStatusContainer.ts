import { Status } from "./status";

export interface IStatusContainerProps {
    name: string;
    time: string;
    title?: string;
    status: Status;
}