import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoGameComponent} from '../video-game/video-game.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, VideoGameComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by console" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-video-game></app-video-game>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
