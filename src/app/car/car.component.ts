import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  
  @Input()carItem: {name:string, year:number, img:string} = {name: "Porshe", year:1993, img: ''}

  carName: string = " ";
  carYear: number = 2000;
  carImg: string = './assets/404.jpg'

  constructor(public readonly dialogService:DialogService) { }

  ngOnInit(): void {
    this.carName = this.carItem.name;
    this.carYear = this.carItem.year;
    this.carImg = this.carItem.img;
  }

  public onClickOnCarItem(): void{
    this.dialogService.isShowModalWindow = true
    console.log(this.dialogService.isShowModalWindow);
    
  }

}
