import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { VideoGame } from '../videogame';
import { VideoGameService } from '../video-game.service';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzContentComponent} from "ng-zorro-antd/layout";
import {ItemUnitsComponent} from "../item-units/item-units.component";
import {ItemCreditsComponent} from "../item-credits/item-credits.component";
import {NzSpinComponent} from "ng-zorro-antd/spin";

@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule, NgOptimizedImage, NzRowDirective, NzColDirective, NzContentComponent, RouterLink, ItemUnitsComponent, ItemCreditsComponent, NzSpinComponent],
  standalone: true,
  template: `
    <nz-content *ngIf="videoGame === undefined ">
      <div nz-row>
        <h2 class="listing-heading"> No Game found with that id </h2>
      </div>
    </nz-content>
    <nz-content *ngIf="videoGame !== undefined ">
      <div nz-row>
        <h2 class="listing-heading">{{ videoGame.name }} </h2>
      </div>
      <nz-content>
        <div nz-row>
          <div nz-col class="inner-content" nzSpan="12">
            <h2 class="section-heading">About this video game</h2>
            <p>Release date: {{ videoGame.releaseDate }}</p>
            <p>Platform: <a [routerLink]="['/console-details', videoGame.console.id]">({{ videoGame.console.name }}
              )</a></p>
            <p class="detail-description">
              {{ videoGame.description }}
            </p>
            <app-item-credits></app-item-credits>
          </div>
          <div class="inner-content" nz-col nzSpan="12">
            <img
                src="/assets/{{videoGame.image}}"
                alt="Image of {{ videoGame.name }}"
                crossorigin
            />
          </div>
        </div>
        <div nz-row>
          <div class="inner-content" nz-col nzSpan="24">
<!--            @defer (on timer(10s)) {-->
            @defer (on viewport; on timer(10s)) {
              <app-item-units 
                  [videoGameId]="videoGame.id"
              ></app-item-units>
            } @placeholder {
              <nz-spin nzSimple></nz-spin>
            } @loading (after 3s; minimum 3s) {
              <nz-spin nzSimple></nz-spin>
            }
          </div>
        </div>
      </nz-content>
    </nz-content>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  videoGame: VideoGame | undefined = undefined;
  videoGameService = inject(VideoGameService);

  constructor() {
    const videoGameId = String(this.route.snapshot.params['id']);
    this.videoGameService.getVideoGameById(videoGameId)
    .then(videoGame => {
      this.videoGame = videoGame;
    });
  }
}
