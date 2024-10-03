import { Injectable } from '@angular/core';
import { VideoGame } from './videogame';

@Injectable({
  providedIn: 'root'
})
export class VideoGameService {
  videoGameList : VideoGame[] = [];

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
    const data = await fetch(`${this.url}?console=${text}`);
    return (await data.json()) ?? {};
  }

  async getAllVideoGames(): Promise<VideoGame[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
