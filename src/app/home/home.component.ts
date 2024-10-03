import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoGameComponent} from '../video-game/video-game.component';
import {VideoGame} from '../videogame';
import { VideoGameService } from '../video-game.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    VideoGameComponent
  ],
  template: `
    <section>
      <form>
        <input class="search-input" type="text" appearance="outline" placeholder="Filter by console" #filter/>
        <button class="primary" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-video-game 
        *ngFor="let v of filteredVideoGames" 
        [videoGame]="v"
      >
      </app-video-game>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  videoGameList : VideoGame[] = [];
  videoGameService: VideoGameService = inject(VideoGameService);
  filteredVideoGames: VideoGame[] = [];

  constructor() {
    this.videoGameService.getAllVideoGames()
    .then((videoGameList: VideoGame[]) => {
      this.videoGameList = videoGameList;
      this.filteredVideoGames = videoGameList;
    });
  }

  filterResults(text: string) {
    if (text.length <= 0) {
      this.filteredVideoGames = this.videoGameList;
      return;
    }

    this.videoGameService.getVideoGamesByConsole(text)
    .then((videoGameList: VideoGame[]) => {
      this.filteredVideoGames = videoGameList;
    });
  }
}
