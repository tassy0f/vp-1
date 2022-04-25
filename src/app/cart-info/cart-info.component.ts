import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/dialog-service';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.scss']
})
export class CartInfoComponent implements OnInit {

  constructor(private dialogService:DialogService) { }

  ngOnInit(): void {
  }


  public onClickToCloseCarItems():void {
    this.dialogService.isShowModalWindow = false
    console.log(this.dialogService.isShowModalWindow);
  }
}
