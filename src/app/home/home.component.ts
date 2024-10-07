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
import {NzMenuDirective} from "ng-zorro-antd/menu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzContentComponent} from "ng-zorro-antd/layout";

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
    NzRowDirective,
    NzColDirective,
    NzContentComponent
  ],
  template: `
    <nz-content>
      <div nz-row>
        <div class="search-form" nz-col nzSpan="12">
          <form [formGroup]="searchForm" (submit)="filterResults(filter.value)">
            <input nz-input placeholder="Filter by name" nzSize="default" #filter/>
            <button nz-button nzType="primary" (click)="filterResults(filter.value)">
              <span nz-icon nzType="search"></span>
              Search
            </button>
          </form>
        </div>
        <div nz-col style="margin-top: 1.25rem" nzSpan="8">
          <select style="margin-left: 1rem; margin-right: 1rem" #consoleFilter (change)="onSelected(consoleFilter.value)">
            <option>All</option>
            <option *ngFor="let console of consoleList">{{console.name}}</option>
          </select>
        </div>
        <div nz-col style="margin-top: 1rem" nzSpan="2">
          <button nz-button nzType="primary" routerLink="/create-account">Create Account</button>
        </div>
      </div>
      <section class="results">
        <app-video-game
            *ngFor="let videoGame of filteredVideoGames"
            [videoGame]="videoGame">
        </app-video-game>
      </section>
    </nz-content>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  protected videoGameList : VideoGame[] = [];
  protected consoleList : ConsoleEntity[] = [];
  protected videoGameService: VideoGameService = inject(VideoGameService);
  protected consoleService: ConsoleService = inject(ConsoleService);
  protected filteredVideoGames: VideoGame[] = [];
  protected searchForm = new FormGroup({});

  constructor() {
    this.videoGameService.getAllVideoGames()
    .then((videoGameList: VideoGame[]) => {
      this.videoGameList = videoGameList;
      this.filteredVideoGames = videoGameList;
    });
    this.consoleService.getAllConsoles()
        .then((consoleList: ConsoleEntity[]) => {
          this.consoleList = consoleList;
        });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredVideoGames = this.videoGameList;
      return;
    }

    this.videoGameService.getVideoGamesByName(text)
    .then((filteredVideoGameList: VideoGame[]) => {
      this.filteredVideoGames = filteredVideoGameList;
    });
  }
  onSelected(consoleName: string): void {
    console.log(consoleName === "All")
    if (consoleName === "All") {
      this.videoGameService.getAllVideoGames()
          .then((videoGameList: VideoGame[]) => {
            this.filteredVideoGames = videoGameList;
          });
      return;
    }

    this.videoGameService.getVideoGamesByConsole(consoleName)
        .then((filteredVideoGameList: VideoGame[]) => {
          this.filteredVideoGames = filteredVideoGameList;
        });
  }
}
