import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {NzSiderComponent} from "ng-zorro-antd/layout";
import {NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent} from "ng-zorro-antd/menu";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NgForOf} from "@angular/common";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzInputDirective} from "ng-zorro-antd/input";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {VideoGame} from "../videogame";
import {Company} from "../company";
import {Console as ConsoleEntity} from "../console";
import {ConsoleService} from "../console.service";
import {CompanyService} from "../company.service";
import {VideoGameService} from "../video-game.service";

@Component({
  selector: 'app-menu-side-bar',
  standalone: true,
  imports: [
    NzSiderComponent,
    NzMenuDirective,
    NzMenuItemComponent,
    NzIconDirective,
    NgForOf,
    NzButtonComponent,
    NzInputDirective,
    NzSubMenuComponent,
    ReactiveFormsModule
  ],
  template: `
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
  `,
  styleUrl: './menu-side-bar.component.css'
})
export class MenuSideBarComponent {
  protected consoleService: ConsoleService = inject(ConsoleService);
  protected companyService: CompanyService = inject(CompanyService);
  protected consoleList : ConsoleEntity[] = [];
  protected companyList : Company[] = [];
  protected searchForm = new FormGroup({});
  protected videoGameService: VideoGameService = inject(VideoGameService);

  @Input() videoGameList!: VideoGame[];
  @Output() filteredVideoGames = new EventEmitter<VideoGame[]>();

  filterResults(text: string) {
    if (!text) {
      this.filteredVideoGames.emit(this.videoGameList);
      return;
    }

    this.videoGameService.getVideoGamesByName(text)
        .then((filteredVideoGameList: VideoGame[]) => {
          this.filteredVideoGames.emit(filteredVideoGameList);
        });
  }
  onSelectedConsole(consoleName: string): void {
    if (consoleName === "All") {
      this.filteredVideoGames.emit(this.videoGameList);
      return;
    }

    this.videoGameService.getVideoGamesByConsole(consoleName)
        .then((filteredVideoGameList: VideoGame[]) => {
          this.filteredVideoGames.emit(filteredVideoGameList);
        });
  }

  onSelectedCompany(companyName: string) {
    if (companyName === "All") {
      this.filteredVideoGames.emit(this.videoGameList);
      return;
    }
    this.companyService.getByName(companyName).then((company: Company[]) => {
      this.videoGameService.getVideoGamesByCompany(company[0].id)
          .then((filteredVideoGameList: VideoGame[]) => {
            this.filteredVideoGames.emit(filteredVideoGameList);
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
