import { Component, Input } from '@angular/core';
import { VideoGame } from '../videogame';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-video-game',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing" *ngIf="videoGame">
      <h2 class="listing-heading">{{ videoGame.name }}</h2>
      <h3 class="listing-heading">{{ videoGame.console }}</h3>
      <p class="listing-location">Units left: {{ videoGame.availableUnits }}</p>
      <p class="listing-location">With box: {{ videoGame.hasBox }}</p>
    </section>
  `,
  styleUrls: ['./video-game.component.css']
})
export class VideoGameComponent {
  @Input() videoGame!: VideoGame;
}
