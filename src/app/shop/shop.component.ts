import { Component, OnInit } from '@angular/core';
import {ShopService} from './../services/shop.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  datos;
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getAllCommerce();
  }
  getAllCommerce(){   
    this.shopService.getAllCommerce().subscribe(commerce => {
      localStorage.setItem("commerce", JSON.stringify(commerce));
    });
    this.datos = JSON.parse(localStorage.getItem("commerce"));
    setTimeout(()=>{localStorage.removeItem("commerce");}, 100);

  }

}
