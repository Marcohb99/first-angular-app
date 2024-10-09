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
    NzSiderComponent
  ],
  template: `
    <nz-layout>
      <nz-sider nzCollapsible nzWidth="200px">
        <div class="logo"></div>
        <ul nz-menu nzTheme="dark" nzMode="inline">
          <li nz-menu-item>
            <span nz-icon nzType="pie-chart"></span>
            <span>Item Type</span>
            <!-- TODO -->
          </li>
          <li nz-submenu nzTitle="Search" nzIcon="user">
            <form [formGroup]="searchForm" (submit)="filterResults(filter.value)">
              <input nz-input placeholder="Filter by name" nzSize="default" #filter/>
              <button nz-button nzType="primary" (click)="filterResults(filter.value)">
                <span nz-icon nzType="search"></span>
                Search
              </button>
            </form>
          </li>
          <li nz-submenu (click)="loadConsoles()" nzTitle="By Console" nzIcon="user">
            <ul>
              <li nz-menu-item (click)="onSelectedConsole('All')">All</li>
              <li nz-menu-item
                  *ngFor="let consoleElem of consoleList"
                  (click)="onSelectedConsole(consoleElem.name)"
              >
                {{ consoleElem.name }}
              </li>
            </ul>
          </li>
          <li nz-submenu (click)="loadCompanies()" nzTitle="By Company" nzIcon="user">
            <ul>
              <li nz-menu-item (click)="onSelectedCompany('All')">All</li>
              <li nz-menu-item
                  *ngFor="let company of companyList"
                  (click)="onSelectedCompany(company.name)"
              >
                {{ company.name }}
              </li>
            </ul>
          </li>
        </ul>
      </nz-sider>
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
  protected consoleList : ConsoleEntity[] = [];
  protected companyList : Company[] = [];
  protected videoGameService: VideoGameService = inject(VideoGameService);
  protected consoleService: ConsoleService = inject(ConsoleService);
  protected companyService: CompanyService = inject(CompanyService);
  protected filteredVideoGames: VideoGame[] = [];
  protected searchForm = new FormGroup({});

  constructor() {
    this.videoGameService.getAllVideoGames()
    .then((videoGameList: VideoGame[]) => {
      this.videoGameList = videoGameList;
      this.filteredVideoGames = videoGameList;
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
  onSelectedConsole(consoleName: string): void {
    if (consoleName === "All") {
      this.filteredVideoGames = this.videoGameList;
      return;
    }

    this.videoGameService.getVideoGamesByConsole(consoleName)
        .then((filteredVideoGameList: VideoGame[]) => {
          this.filteredVideoGames = filteredVideoGameList;
        });
  }

  onSelectedCompany(companyName: string) {
    if (companyName === "All") {
      this.filteredVideoGames = this.videoGameList;
      return;
    }
    this.companyService.getByName(companyName).then((company: Company[]) => {
      this.videoGameService.getVideoGamesByCompany(company[0].id)
          .then((filteredVideoGameList: VideoGame[]) => {
            this.filteredVideoGames = filteredVideoGameList;
          });
    })
  }

  loadConsoles() {
    if (this.consoleList.length === 0) {
      this.consoleService.getAllConsoles()
          .then((consoleList: ConsoleEntity[]) => {
            this.consoleList = consoleList;
          });
    }
  }
  loadCompanies(): void {
    if (this.companyList.length === 0) {
      this.companyService.getAllCompanies()
          .then((companyList: Company[]) => {
            this.companyList = companyList;
          });
    }
  }
}
