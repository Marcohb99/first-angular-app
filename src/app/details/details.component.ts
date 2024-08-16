import { Component, inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { VideoGame } from '../videogame';
import { VideoGameService } from '../video-game.service';

@Component({
  selector: 'app-details',
  template: `
    <article>
      <section class="listing-description">
        <h2 class="listing-heading">{{ videoGame?.name }}</h2>
        <p class="listing-location">{{ videoGame?.console }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this video game</h2>
        <ul>
          <li>Units available: {{ videoGame?.availableUnits }}</li>
          <li>Does this video game have box: {{ videoGame?.hasBox }}</li>
          <li>Release date: {{ videoGame?.releaseDate }}</li>
        </ul>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  videoGame: VideoGame | undefined;
  videoGameService = inject(VideoGameService)

  constructor() {
    const videoGameId = String(this.route.snapshot.params['id']);
    this.videoGame = this.videoGameService.getVideoGameById(videoGameId);
  }
}
