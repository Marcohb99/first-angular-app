import {Component, inject, Input, OnInit} from '@angular/core';
import {NzDividerComponent} from "ng-zorro-antd/divider";
import {NzTableComponent} from "ng-zorro-antd/table";
import {VideogameUnitsService} from "../videogame-units.service";
import {VideoGameUnit} from "../video-game-unit";
import {NgIf} from "@angular/common";
import {NzContentComponent} from "ng-zorro-antd/layout";
import {NzRowDirective} from "ng-zorro-antd/grid";

@Component({
  selector: 'app-item-units',
  standalone: true,
  imports: [
    NzDividerComponent,
    NzTableComponent,
    NgIf,
    NzContentComponent,
    NzRowDirective
  ],
  template: `
    <h3> Available units </h3>
    <nz-table #basicTable [nzData]="listOfData" *ngIf="listOfData.length !== 0">
      <thead>
        <tr>
          <th>User</th>
          <th>Status</th>
          <th>Price</th>
          <th>Boxed</th>
          <th>Location</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        @for (data of basicTable.data; track data) {
          <tr>
            <td>{{ data.userId }}</td>
            <td>{{ data.status }}</td>
            <td>{{ data.price }}</td>
            <td>{{ data.hasBox }}</td>
            <td>{{ data.originCountry }}</td>
            <td>
              <a>Action 一 {{ data.userId }}</a>
              <nz-divider nzType="vertical"></nz-divider>
              <a>Delete</a>
            </td>
          </tr>
        }
      </tbody>
    </nz-table>
    <nz-content *ngIf="listOfData.length === 0 ">
      <div nz-row>
        <h2 class="listing-heading"> 
          This game has no available units yet
          but you can <a onclick="alert('alert created!')">create an alert for it</a>
        </h2>
      </div>
    </nz-content>
  `,
  styleUrl: './item-units.component.css'
})
export class ItemUnitsComponent implements OnInit{
  protected videoGameUnitService: VideogameUnitsService = inject(VideogameUnitsService);
  protected listOfData: VideoGameUnit[] = [];
  @Input() videoGameId!: string;

  ngOnInit() {
    this.videoGameUnitService.getUnitsByVideoGameById(this.videoGameId)
        .then((unitList: VideoGameUnit[]) => {
          this.listOfData = unitList;
        })
  }
}
