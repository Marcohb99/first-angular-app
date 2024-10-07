import { Component, inject } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { VideoGame } from '../videogame';
import { VideoGameService } from '../video-game.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzContentComponent} from "ng-zorro-antd/layout";

@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule, NgOptimizedImage, NzRowDirective, NzColDirective, NzContentComponent, RouterLink],
  standalone: true,
  template: `
    <nz-content>
      <div nz-row>
        <h2 class="listing-heading">{{ videoGame?.name }} <a [routerLink]="['/console-details', videoGame?.console?.id]">({{ videoGame?.console?.name }})</a></h2>
      </div>
      <nz-content>
        <div nz-row>
          <div nz-col class="inner-content" nzSpan="12">
            <h2 class="section-heading">About this video game</h2>
            <p>Release date: {{ videoGame?.releaseDate }}</p>
            <p class="detail-description">
              {{ videoGame?.description }}
            </p>
          </div>
          <div class="inner-content" nz-col nzSpan="12">
            <img
                src="/assets/{{videoGame?.image}}"
                alt="Image of {{ videoGame?.name }}"
                crossorigin
            />
          </div>
        </div>
      </nz-content>
    </nz-content>
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
