import { Component, Input } from '@angular/core';
import { VideoGame } from '../videogame';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-video-game',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <h2> {{ videoGame.name }}</h2>
      <h3> {{ videoGame.console }}</h3>
      <p> Units left:  {{ videoGame.availableUnits }}</p>
      <p> With box:  {{ videoGame.hasBox }}</p>
    </section>
  `,
  styleUrls: ['./video-game.component.css']
})
export class VideoGameComponent {
  @Input() videoGame!: VideoGame;
}
