import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  carName = ''

  cars: {id:number, name:string, year:number, img:string}[] = [{
    id: 1,
    name: 'Lexus',
    year: 2013,
    img: './assets/LFA.jpg'
  },
  {
    id: 2,
    name: 'Audi',
    year: 2020,
    img: './assets/R8.jpg'
  },
  {
    id: 3,
    name: 'Toyota',
    year: 2019,
    img: './assets/LandCruiser.jpg'
  },
  {
    id: 4,
    name: 'Porcshe',
    year: 2020,
    img: './assets/404.jpg'
  },
  {
    id: 5,
    name: 'Dodge',
    year: 2023,
    img: './assets/404.jpg'
  },]

  constructor() { }

  ngOnInit(): void {
  }

}
