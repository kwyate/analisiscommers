import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // variable que recibe valores del componente padre MapaComponent
  @Input() fitgureInfo: any;

  constructor() { 
    console.log("this.fitgureInfo", this.fitgureInfo);
  }

  ngOnInit(): void {
  }

}
