import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app6.component';
import { CarComponent } from './car/car.component';
import { CarAddComponent } from './car-add/car-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
