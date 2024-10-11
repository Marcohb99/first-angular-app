import {Component, inject, Input, OnInit} from '@angular/core';
import {NzContentComponent} from "ng-zorro-antd/layout";
import {NzDividerComponent} from "ng-zorro-antd/divider";
import {NzTableComponent} from "ng-zorro-antd/table";
import {NzRowDirective} from "ng-zorro-antd/grid";
import {ConsoleUnitsService} from "../console-units.service";
import {ConsoleUnit} from "../console-unit";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-console-units',
  standalone: true,
  imports: [
    NzContentComponent,
    NzDividerComponent,
    NzTableComponent,
    NzRowDirective,
    NgIf
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
          This console has no available units yet
          but you can <a onclick="alert('alert created!')">create an alert for it</a>
        </h2>
      </div>
    </nz-content>
  `,
  styleUrl: './console-units.component.css'
})
export class ConsoleUnitsComponent implements OnInit{
  protected consoleUnitsService: ConsoleUnitsService = inject(ConsoleUnitsService);
  protected listOfData: ConsoleUnit[] = [];
  @Input() consoleId!: string;

  ngOnInit() {
    this.consoleUnitsService.getUnitsByConsoleId(this.consoleId)
        .then((unitList: ConsoleUnit[]) => {
          this.listOfData = unitList;
        })
  }
}
