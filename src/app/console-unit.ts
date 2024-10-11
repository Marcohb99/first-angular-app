import {ItemStatus} from "./itemStatus";

export interface ConsoleUnit {
    id: string,
    console_id: string,
    userId: string,
    hasBox: boolean,
    status: ItemStatus,
    price: number,
    originCountry: string,
}