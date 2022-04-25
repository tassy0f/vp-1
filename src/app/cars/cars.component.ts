import { Component, OnInit } from '@angular/core';
import { DialogService } from '../dialog-service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  carName = ''

  cars: {name:string, year:number, img:string}[] = [{
    name: 'Lexus',
    year: 2013,
    img: './assets/LFA.jpg'
  },
  {
    name: 'Audi',
    year: 2020,
    img: './assets/R8.jpg'
  },
  {
    name: 'Toyota',
    year: 2019,
    img: './assets/LandCruiser.jpg'
  },
  {
    name: 'Audi',
    year: 2020,
    img: './assets/404.jpg'
  },
  {
    name: 'Audi',
    year: 2020,
    img: './assets/404.jpg'
  },
  {
    name: 'Audi',
    year: 2020,
    img: './assets/404.jpg'
  },
  {
    name: 'Audi',
    year: 2020,
    img: './assets/404.jpg'
  },
  {
    name: 'Audi',
    year: 2020,
    img: './assets/404.jpg'
  },
  {
    name: 'Audi',
    year: 2020,
    img: './assets/R8.jpg'
  },
  {
    name: 'Audi',
    year: 2020,
    img: './assets/R8.jpg'
  },
  {
    name: 'Audi',
    year: 2020,
    img: './assets/R8.jpg'
  },
  {
    name: 'Audi',
    year: 2020,
    img: './assets/R8.jpg'
  },
  {
    name: 'Audi',
    year: 2020,
    img: './assets/R8.jpg'
  },
  {
    name: 'Audi',
    year: 2020,
    img: './assets/R8.jpg'
  },
  {
    name: 'Audi',
    year: 2020,
    img: './assets/R8.jpg'
  },
  {
    name: 'Audi',
    year: 2020,
    img: './assets/R8.jpg'
  },
  {
    name: 'Audi',
    year: 2020,
    img: './assets/R8.jpg'
  },
  {
    name: 'Audi',
    year: 2020,
    img: './assets/R8.jpg'
  },
  {
    name: 'Audi',
    year: 2020,
    img: './assets/R8.jpg'
  },
  {
    name: 'Audi',
    year: 2020,
    img: './assets/R8.jpg'
  },
  {
    name: 'Audi',
    year: 2020,
    img: './assets/R8.jpg'
  },
  {
    name: 'Audi',
    year: 2020,
    img: './assets/R8.jpg'
  },
  {
    name: 'Audi',
    year: 2020,
    img: './assets/R8.jpg'
  },
  {
    name: 'Audi',
    year: 2020,
    img: './assets/R8.jpg'
  },
  {
    name: 'Audi',
    year: 2020,
    img: './assets/R8.jpg'
  },
  {
    name: 'Audi',
    year: 2020,
    img: './assets/R8.jpg'
  },
  {
    name: 'Audi',
    year: 2020,
    img: './assets/R8.jpg'
  },
  {
    name: 'Audi',
    year: 2020,
    img: './assets/R8.jpg'
  }]

  constructor(public readonly dialogService:DialogService) { }

  ngOnInit(): void {
  }

}
