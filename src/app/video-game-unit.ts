import {ItemStatus} from "./itemStatus";

export interface VideoGameUnit {
    id: string,
    videogame_id: string,
    userId: string,
    hasBox: boolean,
    status: ItemStatus,
    price: number,
    originCountry: string,
}