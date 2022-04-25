import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from '../dialog-service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  @Input()carItem!: {name:string, year:number, img:string}

  constructor(public readonly dialogService:DialogService) { }

  ngOnInit(): void {
  }

  public onClickOnCarItem(): void{
    this.dialogService.isShowModalWindow = true
  }

}
