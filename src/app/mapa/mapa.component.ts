import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import {MapService} from './../services/map.service';

@Component({
    selector: 'app-mapa',
    templateUrl: './mapa.component.html',
    styleUrls: ['./mapa.component.css']
})
// En este componente se implementa la API mapbox
export class MapaComponent implements OnInit {
    // Se inicializa una variable de tipo mapbox
    mapa: Mapboxgl.Map;
    // Variable que pasara informacion al compónente hijo cardComponent
    informacionComercio: any = {address: "",days: "",id: 6,name: "",nit: "",owner: "", phone: "", sales: "", schedule: ""};
    //variable almacenara los datos del web services
    datos;
    constructor(private mapService:MapService) { 
    }

    ngOnInit(): void {
        this.getFeaturesCollection();
        setTimeout(()=>{
            (Mapboxgl as any).accessToken = environment.mapboxKey;
    
            this.mapa = new Mapboxgl.Map({
                container: 'mapa-mapbox',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: { lng: -74.08699035644531, lat: 4.742043976363009 },
                zoom: 10
            });
            this.mapa.addControl(new Mapboxgl.NavigationControl());
            this.loadSource();
            this.eventMap();
            this.crearMarcador(-74.08699035644531, 4.742043976363009);
        },100);
        
    }
    // Este metodo asignara a this.datos la data del web service
    getFeaturesCollection() {
        
        this.mapService.getFeaturesCollection().subscribe(features=>{ 
            localStorage.setItem("datosFeatures", JSON.stringify(features['features']));
        });
        this.datos = JSON.parse(localStorage.getItem("datosFeatures"));
        setTimeout(()=>{localStorage.removeItem("datosFeatures");},100);

    }
    // Metodo que cargara los sources del mapa en este caso se le pasara la data obtenida en this.getFeatureCollection()
    loadSource() {
            this.mapa.on('load', () => {
                // add source and layer for museums
                this.mapa.addSource('tienda', {
                    'type': 'geojson',
                    'data': {
                        "type": "FeatureCollection",
                        "features": this.datos
                    }
                });
                    this.mapa.addLayer({
                        'id': 'tienda',
                        'type': 'circle',
                        'source': 'tienda',
                        'paint': {
                            'circle-radius': 8,
                            'circle-color': '#B42222'
                        },
                        'filter': ['==', '$type', 'Point']
                    });
            });
    }
    // Separacion de eventos de mouse 
    eventMap() {

        this.mapa.on("load", () => {

            
            this.mapa.on('mouseenter', 'tienda', function () {
                this.getCanvas().style.cursor = 'pointer';
            });

            // Change it back to a pointer when it leaves.
            this.mapa.on('mouseleave', 'tienda', function () {
                this.getCanvas().style.cursor = '';
            });
        })
    }
    // Enviar los datos al componente hijo CardComponente del comercio clickeado en el mapa y renderizarlos en la tarjeta
    obtenerInformation(){
        this.mapa.on('click', 'tienda', (point)=>{
            localStorage.setItem("datosComerciante", JSON.stringify(point.features[0].properties));
        });
        this.informacionComercio = JSON.parse(localStorage.getItem("datosComerciante"));
        setTimeout(()=>{
            localStorage.removeItem("datosComerciante");
        }, 100);
    }
    // Se crea un marcadar draggable
    crearMarcador(lng: number, lat: number) {
        const marker = new Mapboxgl.Marker({
            draggable: true
        }).setLngLat([lng, lat]).addTo(this.mapa);
        marker.on("drag", () => {
            // console.log(marker.getLngLat());
        });
    }
}