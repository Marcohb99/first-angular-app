import {Component} from '@angular/core';
import {CommonModule, NgFor} from '@angular/common';
import {VideoGameComponent} from '../video-game/video-game.component';
import {VideoGame} from '../videogame';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, VideoGameComponent, NgFor],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by console" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-video-game
        *ngFor="let videoGame of videoGameList"
        [videoGame]="videoGame"]
      >
      </app-video-game>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
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
}
