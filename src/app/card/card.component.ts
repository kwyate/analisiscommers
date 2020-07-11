import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() fitgureInfo: any = {address: "Av 5 # 54-54",days: "Lunes - Viernes",id: 6,name: "Comercio 6",nit: "123456789",owner: "Jhon Smith", phone: "123456", sales: "25692986", schedule: "8:00 am – 5:00 pm"};

  constructor() { 
    console.log("this.fitgureInfo", this.fitgureInfo);
  }

  ngOnInit(): void {
    // this.datos = JSON.parse("" +this.fitgureInfo+ "");
    // this.datos = this.d.informacionComercio
    // console.log(this.datos);
    // console.log("convertir",  JSON.parse("" +this.fitgureInfo+ ""))
    // console.log("this.fitgureInfo",  this.fitgureInfo );
  }
  enviarObj(){
    this.fitgureInfo = {comercio: "Cambio de valor", tel: "se cambio"}
    // this.fitgureInfo = this.fitgureInfo.comercio;
  }

}
