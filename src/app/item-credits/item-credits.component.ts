import { Component } from '@angular/core';
import {NzDividerComponent} from "ng-zorro-antd/divider";
import {NzTableComponent} from "ng-zorro-antd/table";

@Component({
  selector: 'app-item-credits',
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
          <th>Name</th>
          <th>Role</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        @for (data of basicTable.data; track data) {
          <tr>
            <td>{{ data.name }}</td>
            <td>{{ data.age }}</td>
            <td>{{ data.address }}</td>
            <td>
              <a>Action 一 {{ data.name }}</a>
              <nz-divider nzType="vertical"></nz-divider>
              <a>Delete</a>
            </td>
          </tr>
        }
      </tbody>
    </nz-table>
  `,
  styleUrl: './item-credits.component.css'
})
export class ItemCreditsComponent {
  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 'Executive director',
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 'Executive Art Director',
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 'Music Composer',
      address: 'Sidney No. 1 Lake Park'
    }
  ];
}
