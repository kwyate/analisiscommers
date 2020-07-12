import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() fitgureInfo: any;

  constructor() { 
    console.log("this.fitgureInfo", this.fitgureInfo);
  }

  ngOnInit(): void {
  }

}
