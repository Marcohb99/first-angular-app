import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {NzContentComponent, NzFooterComponent, NzHeaderComponent, NzLayoutComponent} from "ng-zorro-antd/layout";
import {MenuSidebarComponent} from "./menu-sidebar/menu-sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule, NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, MenuSidebarComponent],
  template: `
    <main>
      <nz-layout>
        <nz-header>
          <a [routerLink]="['/']">
            <header class="brand-name">
              <div class="logo">
                <img class="brand-logo" src="/assets/game-folder.png" alt="logo" aria-hidden="true" width="7%" height="7%" />
              </div>
            </header>
          </a>
        </nz-header>
        <router-outlet></router-outlet>
        <nz-footer>Marco Hurtado ©2024</nz-footer>
      </nz-layout>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
}
