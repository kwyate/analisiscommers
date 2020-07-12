import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


    @Output() infocardEvent: EventEmitter<object> = new EventEmitter;

    
    title = 'App analisis comerciantes';

    ngOnInit() { 
    }
    
    

}
