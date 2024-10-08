import { Injectable } from '@angular/core';
import {VideoGameUnit} from "./video-game-unit";

@Injectable({
  providedIn: 'root'
})
export class VideogameUnitsService {

  url = 'http://localhost:3000/videogame-units';

  async getUnitsByVideoGameById(id: string | undefined): Promise<VideoGameUnit[]> {
    const data = await fetch(`${this.url}?videogame_id=${id}`);
    return (await data.json()) ?? {};
  }
}
