import { Component, OnInit } from '@angular/core';
import {ShopService} from './../services/shop.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  // Variable que se renderizara la informacion en la vista
  datos;
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getAllCommerce();
  }
  // Se guardan los valores en el local storage para poder asignarlos a this.datos y poder enviarlos a la vista e interpretarlos
  getAllCommerce(){   
    this.shopService.getAllCommerce().subscribe(commerce => {
      localStorage.setItem("commerce", JSON.stringify(commerce));
    });
    this.datos = JSON.parse(localStorage.getItem("commerce"));
    setTimeout(()=>{localStorage.removeItem("commerce");}, 100);

  }

}
