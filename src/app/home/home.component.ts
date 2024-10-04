import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoGameComponent} from '../video-game/video-game.component';
import {VideoGame} from '../videogame';
import { VideoGameService } from '../video-game.service';
import {RouterLink} from "@angular/router";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Console as ConsoleEntity} from "../console";
import {ConsoleService} from "../console.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    VideoGameComponent,
    RouterLink,
    ReactiveFormsModule
  ],
  template: `
    <section>
      <form [formGroup]="searchForm" (submit)="filterResults(filter.value)">
        <input type="text" placeholder="Filter by name" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
      <select #consoleFilter (change)="onSelected(consoleFilter.value)">
        <option>All</option>
        <option *ngFor="let console of consoleList">{{console.name}}</option>
      </select>
      <button class="primary" routerLink="/create-account">Create Account</button>
    </section>
    <section class="results">
      <app-video-game
          *ngFor="let videoGame of filteredVideoGames"
          [videoGame]="videoGame">
      </app-video-game>
    </section>
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
