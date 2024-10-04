import {Component, inject, Input} from '@angular/core';
import {Console} from "../console";
import {ActivatedRoute} from "@angular/router";
import {ConsoleService} from "../console.service";

@Component({
  selector: 'app-console-detail',
  standalone: true,
  imports: [],
  template: `
    <article>
      <section class="listing-description">
        <h2 class="listing-heading">
          {{ consoleEntity?.name }} 
          <img
            width="3%"
            height="3%"
            src="/assets/{{consoleEntity?.icon}}"
            alt="Icon of {{ consoleEntity?.name }}"
            crossorigin
        />
        </h2>
        <img
            class="listing-photo"
            src="/assets/{{consoleEntity?.image}}"
            alt="Image of {{ consoleEntity?.name }}"
            crossorigin
        />
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this console</h2>
        <p>Release date: {{ consoleEntity?.releaseDate }}</p>
        <p class="detail-description">
          {{ consoleEntity?.description }}
        </p>
      </section>
    </article>
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
