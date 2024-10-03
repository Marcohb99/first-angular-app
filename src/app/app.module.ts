import { NgModule } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideoGameComponent } from './video-game/video-game.component';
import { DetailsComponent } from './details/details.component';
import { SingupComponent } from './singup/singup.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    AppComponent,
    HomeComponent,
    VideoGameComponent,
    FormControl,
    ReactiveFormsModule,
    DetailsComponent,
    SingupComponent,
    AppRoutingModule,
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