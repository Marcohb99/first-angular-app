import {Component, inject, Input} from '@angular/core';
import { VideoGame } from '../videogame';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterModule} from '@angular/router';
import {Console as ConsoleEntity}  from "../console";
import {ConsoleService} from "../console.service";

@Component({
  selector: 'app-video-game',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  template: `
    <section class="listing" *ngIf="videoGame">
      <h2 class="listing-heading"><a [routerLink]="['/details', videoGame.id]">{{ videoGame.name }}</a></h2>
      <img class="listing-photo" src="/assets/{{videoGame.image}}" alt="{{videoGame.name}} image"/><br>
      <h3 class="listing-heading"> <a
          [routerLink]="['/console-details', videoGame.console.id]">{{ videoGame.console.name }}</a></h3>
    </section>
  `,
  styleUrls: ['./video-game.component.css']
})
export class VideoGameComponent {
  @Input() videoGame!: VideoGame;
}
