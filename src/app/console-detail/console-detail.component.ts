import {Component, inject, Input} from '@angular/core';
import {Console} from "../console";
import {ActivatedRoute} from "@angular/router";
import {ConsoleService} from "../console.service";
import {NzContentComponent} from "ng-zorro-antd/layout";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {ItemCreditsComponent} from "../item-credits/item-credits.component";
import {ItemUnitsComponent} from "../item-units/item-units.component";

@Component({
  selector: 'app-console-detail',
  standalone: true,
  imports: [
    NzContentComponent,
    NzRowDirective,
    NzColDirective,
    ItemCreditsComponent,
    ItemUnitsComponent
  ],
  template: `
    <nz-content>
      <div nz-row>
        <h2 class="listing-heading">
          {{ consoleEntity?.name }}
          <img
              width="10%"
              src="/assets/{{consoleEntity?.icon}}"
              alt="Icon of {{ consoleEntity?.name }}"
              crossorigin
          />
        </h2>
      </div>
      <nz-content>
        <div nz-row>
          <div nz-col class="inner-content" nzSpan="12">
            <h2 class="section-heading">About this console</h2>
            <p>Release date: {{ consoleEntity?.releaseDate }}</p>
            <p class="detail-description">
              {{ consoleEntity?.description }}
            </p>
            <app-item-credits></app-item-credits>
          </div>
          <div nz-col class="inner-content" nzSpan="12">
            <img
                class="listing-photo"
                src="/assets/{{consoleEntity?.image}}"
                alt="Image of {{ consoleEntity?.name }}"
                crossorigin
            />
          </div>
        </div>
        <div nz-row>
          <div class="inner-content" nz-col nzSpan="24">
<!--            <app-item-units></app-item-units>-->
          </div>
        </div>
      </nz-content>
    </nz-content>
  `,
  styleUrl: './console-detail.component.css'
})
export class ConsoleDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  consoleEntity: Console | undefined;
  consoleService = inject(ConsoleService);

  constructor() {
    const consoleId = String(this.route.snapshot.params['id']);
    this.consoleService.getConsoleById(consoleId)
        .then(consoleEntity => {
          this.consoleEntity = consoleEntity;
        });
  }

}
