import {Console} from "./console";

export interface VideoGame {
    id: string,
    name: string,
    console: Console,
    releaseDate: string,
    image: string,
    description: string,
}