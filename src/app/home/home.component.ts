import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoGameComponent} from '../video-game/video-game.component';
import {VideoGame} from '../videogame';
import { VideoGameService } from '../video-game.service';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    VideoGameComponent,
    RouterLink
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by console" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
        <button class="primary" routerLink="/create-account">Create Account</button>
      </form>
    </section>
    <section class="results">
      <app-video-game
          *ngFor="let videoGame of filteredVideoGames"
          [videoGame]="videoGame">
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
    if (!text) {
      this.filteredVideoGames = this.videoGameList;
      return;
    }

    this.videoGameService.getVideoGamesByConsole(text)
    .then((filteredVideoGameList: VideoGame[]) => {
      this.filteredVideoGames = filteredVideoGameList;
    });
  }
}
