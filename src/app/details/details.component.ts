import { Component, inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { VideoGame } from '../videogame';
import { VideoGameService } from '../video-game.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
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
      <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName" />
          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName" />
          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email" />
          <button type="submit" class="primary">Apply now</button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  videoGame: VideoGame | undefined;
  videoGameService = inject(VideoGameService);
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const videoGameId = String(this.route.snapshot.params['id']);
    this.videoGameService.getVideoGameById(videoGameId)
    .then(videoGame => {
      this.videoGame = videoGame;
    });
  }

  submitApplication() {
    this.videoGameService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
}
