import { Component } from '@angular/core';
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-menu-header',
  standalone: true,
  imports: [
    NzButtonComponent,
    NzColDirective,
    NzRowDirective,
    RouterLink
  ],
  template: `
    <header class="brand-name">
      <div nz-row class="logo">
        <div nz-col nzSpan="12">
          <a [routerLink]="['/']">
            <img class="brand-logo" src="/assets/game-folder.png" alt="logo" aria-hidden="true"
                 width="7%" height="7%"/>
          </a>
        </div>
        <div nz-col nzSpan="6">
          <a href="https://github.com/Marcohb99/first-angular-app">Follow on github</a>
        </div>
        <div nz-col nzSpan="6">
          <button nz-button style="margin-left: 15rem; margin-right: 0" nzType="primary" routerLink="/create-account">Create Account</button>
        </div>
      </div>
    </header>`,
  styleUrl: './menu-header.component.css'
})
export class MenuHeaderComponent {

}
