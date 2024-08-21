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

  url = 'http://localhost:3000/videogames';

  async getVideoGameById(id: string): Promise<VideoGame | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }

  async getVideoGamesByConsole(text: string): Promise<VideoGame[]> {
    if (!text) {
      return [];
    }
    let games = this.videoGameList.filter((videoGame) =>
      videoGame?.console.toLowerCase().includes(text.toLowerCase()),
    );
    return games;
  }

  async getAllVideoGames(): Promise<VideoGame[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
