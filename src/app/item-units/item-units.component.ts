import { Component } from '@angular/core';
import {NzDividerComponent} from "ng-zorro-antd/divider";
import {NzTableComponent} from "ng-zorro-antd/table";

@Component({
  selector: 'app-item-units',
  standalone: true,
  imports: [
    NzDividerComponent,
    NzTableComponent
  ],
  template: `
    <h3> Credits </h3>
    <nz-table #basicTable [nzData]="listOfData">
      <thead>
        <tr>
          <th>User</th>
          <th>Status</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        @for (data of basicTable.data; track data) {
          <tr>
            <td>{{ data.user }}</td>
            <td>{{ data.status }}</td>
            <td>{{ data.price }}</td>
            <td>
              <a>Action 一 {{ data.user }}</a>
              <nz-divider nzType="vertical"></nz-divider>
              <a>Delete</a>
            </td>
          </tr>
        }
      </tbody>
    </nz-table>
  `,
  styleUrl: './item-units.component.css'
})
export class ItemUnitsComponent {
  listOfData = [
    {
      key: '1',
      user: 'John Brown',
      status: 'Mint',
      price: '5€'
    },
    {
      key: '2',
      user: 'Jim Green',
      status: 'Good',
      price: '5€'
    },
    {
      key: '3',
      user: 'Joe Black',
      status: 'Medium',
      price: '5€'
    }
  ];
}
