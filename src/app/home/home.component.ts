import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoGameComponent} from '../video-game/video-game.component';
import {VideoGame} from '../videogame';
import { VideoGameService } from '../video-game.service';
import {RouterLink} from "@angular/router";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Console as ConsoleEntity} from "../console";
import {ConsoleService} from "../console.service";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzDropDownADirective, NzDropDownDirective, NzDropdownMenuComponent} from "ng-zorro-antd/dropdown";
import {NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent} from "ng-zorro-antd/menu";
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzContentComponent, NzHeaderComponent, NzLayoutComponent, NzSiderComponent} from "ng-zorro-antd/layout";
import {Company} from "../company";
import {CompanyService} from "../company.service";
import {MenuSideBarComponent} from "../menu-side-bar/menu-side-bar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    VideoGameComponent,
    RouterLink,
    ReactiveFormsModule,
    NzButtonComponent,
    NzIconDirective,
    NzDropDownADirective,
    NzDropdownMenuComponent,
    NzMenuDirective,
    NzDropDownDirective,
    NzInputDirective,
    NzContentComponent,
    NzHeaderComponent,
    NzLayoutComponent,
    NzMenuItemComponent,
    NzSubMenuComponent,
    NzSiderComponent,
    MenuSideBarComponent
  ],
  template: `
    <nz-layout>
      <app-menu-side-bar
        [videoGameList]="videoGameList"
        (filteredVideoGames)="updateItems($event)"
      ></app-menu-side-bar>
      <nz-content>
        <section class="results">
          <app-video-game
              *ngFor="let videoGame of filteredVideoGames"
              [videoGame]="videoGame">
          </app-video-game>
          <h3 *ngIf="filteredVideoGames.length === 0"> No items match the chosen criteria. </h3>
        </section>
      </nz-content>
    </nz-layout>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  protected videoGameList : VideoGame[] = [];
  protected videoGameService: VideoGameService = inject(VideoGameService);
  protected filteredVideoGames: VideoGame[] = [];


  constructor() {
    this.videoGameService.getAllVideoGames()
    .then((videoGameList: VideoGame[]) => {
      this.videoGameList = videoGameList;
      this.filteredVideoGames = videoGameList;
    });
  }

  updateItems(list: VideoGame[]) {
    this.filteredVideoGames = list;
  }
}
