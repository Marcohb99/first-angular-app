import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {NzContentComponent, NzFooterComponent, NzHeaderComponent, NzLayoutComponent} from "ng-zorro-antd/layout";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {MenuHeaderComponent} from "./menu-header/menu-header.component";

@Component({
    selector: 'app-root',
    standalone: true,
  imports: [
    HomeComponent,
    RouterModule,
    NzLayoutComponent,
    NzHeaderComponent,
    NzContentComponent,
    NzFooterComponent,
    NzButtonComponent,
    NzRowDirective,
    NzColDirective,
    MenuHeaderComponent
  ],
    template: `
        <main>
            <nz-layout>
                <nz-header>
                    <app-menu-header></app-menu-header>
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
