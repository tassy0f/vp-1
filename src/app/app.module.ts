import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { CartInfoComponent } from './cart-info/cart-info.component';
import { DialogService } from './dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    CartInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
