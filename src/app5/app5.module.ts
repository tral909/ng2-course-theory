import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app5.component';
import { PowPipe } from './pow.pipe';
import { CarFilterPipe } from './car-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PowPipe,
    CarFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
