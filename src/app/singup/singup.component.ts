import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  template: `
    <h2 class="section-heading">Create an account</h2>
    <section class="listing-apply">
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName"/>
        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName"/>
        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email"/>
        <button type="submit" class="primary">Apply now</button>
      </form>
    </section>
  `,
  styleUrl: './singup.component.css'
})
export class SingupComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  submitApplication() {
    alert("Created!");
  }
}
