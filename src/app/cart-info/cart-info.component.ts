import { Component, OnInit } from '@angular/core';
import { CarComponent } from '../car/car.component';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.scss']
})
export class CartInfoComponent implements OnInit {

  carNameOne:string = this.carComponent.carName;
  carYearOne:number = this.carComponent.carYear;
  carImgOne:string = this.carComponent.carImg;

  constructor(public carComponent:CarComponent) { }

  
  ngOnInit(): void {
    
  }


  public onClickToCloseCarItems():void {
    this.carComponent.dialogService.isShowModalWindow = false
    console.log(this.carComponent.dialogService.isShowModalWindow);
  }
}
