import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConsoleComponent} from '../console/console.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ConsoleComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by console" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-console></app-console>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
