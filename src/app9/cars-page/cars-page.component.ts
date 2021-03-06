import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars9.service';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit {
  cars = [];

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.cars = this.carsService.cars;
  }

}
