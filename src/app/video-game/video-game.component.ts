import {Component, inject, Input} from '@angular/core';
import { VideoGame } from '../videogame';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterModule} from '@angular/router';
import {Console as ConsoleEntity}  from "../console";
import {ConsoleService} from "../console.service";
import {NzCardComponent} from "ng-zorro-antd/card";

@Component({
  selector: 'app-video-game',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage, NzCardComponent],
  template: `
    <nz-card *ngIf="videoGame" style="width:300px;" nzTitle="{{ videoGame.name }}" [nzCover]="coverTemplate">
      <h3 class="listing-heading"> 
        <a [routerLink]="['/console-details', videoGame.console.id]">{{ videoGame.console.name }}</a>
      </h3>
    </nz-card>
    <ng-template #coverTemplate>
      <a [routerLink]="['/details', videoGame.id]">
        <img alt="example" src="/assets/{{videoGame.image}}" width="100%">
      </a>
    </ng-template>
  `,
  styleUrls: ['./video-game.component.css']
})
export class VideoGameComponent {
  @Input() videoGame!: VideoGame;
}
