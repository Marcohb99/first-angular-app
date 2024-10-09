import {Console} from "./console";
import {Company} from "./company";

export interface VideoGame {
    id: string,
    name: string,
    console: Console,
    releaseDate: string,
    image: string,
    description: string,
    company: string
}