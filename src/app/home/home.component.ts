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
        <input type="text" placeholder="Filter by console" #filter/>
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
    this.videoGameList = this.videoGameService.getAllVideoGames();
    this.filteredVideoGames = this.videoGameList;
  }

  filterResults(text: string) {
    this.filteredVideoGames = text.length > 0 
      ? this.videoGameService.getVideoGamesByConsole(text)
      : this.videoGameList;
  }
}
