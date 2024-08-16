import { Injectable } from '@angular/core';
import { VideoGame } from './videogame';

@Injectable({
  providedIn: 'root'
})
export class VideoGameService {
  videoGameList : VideoGame[] = [
      {
        id: "44ede8ba-94ee-438d-967e-d35e787fb49a",
        name: "Metroid Prime",
        console: "Nintendo Gamecube (NGC)",
        releaseDate: "19-11-2003",
        availableUnits: 105,
        hasBox: true,
      }
  ];

  getAllVideoGames(): VideoGame[] {
    return this.videoGameList;
  }

  getVideoGameById(id: string): VideoGame | undefined {
    return this.videoGameList.find((videoGame) => videoGame.id === id);
  }
}
