import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConsoleComponent } from './console/console.component';


@NgModule({
  imports: [],
  declarations: [
    AppComponent,
    HomeComponent,
    ConsoleComponent,   
],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/