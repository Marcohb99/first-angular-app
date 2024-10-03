import { Component, inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { VideoGame } from '../videogame';
import { VideoGameService } from '../video-game.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule, NgOptimizedImage],
  standalone: true,
  template: `
    <article>
      <section class="listing-description">
        <h2 class="listing-heading">{{ videoGame?.name }}</h2>
        <img
            class="listing-photo"
            src="/assets/{{videoGame?.image}}"
            alt="Image of {{ videoGame?.name }}"
            crossorigin
        />
        <p class="listing-location">{{ videoGame?.console }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this video game</h2>
        <p>Release date: {{ videoGame?.releaseDate }}</p>
        <p class="detail-description">
          {{ videoGame?.description }}
        </p>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  videoGame: VideoGame | undefined;
  videoGameService = inject(VideoGameService);

  constructor() {
    const videoGameId = String(this.route.snapshot.params['id']);
    this.videoGameService.getVideoGameById(videoGameId)
    .then(videoGame => {
      console.log(videoGame);
      this.videoGame = videoGame;
    });
  }
}
