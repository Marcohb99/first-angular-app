import { NgModule } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideoGameComponent } from './video-game/video-game.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  imports: [
    AppComponent,
    HomeComponent,
    VideoGameComponent,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    DetailsComponent
  ],
  declarations: [],
  bootstrap: []
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/