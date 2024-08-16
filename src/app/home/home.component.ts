import {Component, inject, Inject} from '@angular/core';
import {CommonModule, NgFor} from '@angular/common';
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
        <input type="text" placeholder="Filter by console" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-video-game 
        *ngFor="let v of videoGameList" 
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

  constructor() {
    this.videoGameList = this.videoGameService.getAllVideoGames();
  }
}
