import { Component, OnInit, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';
import { AttributeMarker } from '@angular/compiler/src/core';
import { formatNumber } from '@angular/common';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit  {


    

    @ViewChild('cardInfo') cardInfo!: ElementRef;
    title = 'prueba-analitycs';
    mapa: Mapboxgl.Map;
    carInfo: object;
    i: number = 0;
    ngAfterViewInit(): void {
        
        console.log("cardInfo", this.cardInfo);
        this.cardInfo.nativeElement.childNodes[0].innerText = "Tienda" + this.i;
        this.i++;
    }
    ngOnInit() {

        
        (Mapboxgl as any).accessToken = environment.mapboxKey;

        this.mapa = new Mapboxgl.Map({
            container: 'mapa-mapbox',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: {lng: -74.1709688, lat: 4.584694}, 
            zoom: 15
        });
        this.mapa.addControl(new Mapboxgl.NavigationControl());
        this.loadSource();
        this.cardLoadInformation();
        this.forEachLayer();
        this.crearMarcador(-74.1709688, 4.584694);
    }
    loadSource(){
        this.mapa.on('load', () => {
            // add source and layer for museums
            this.mapa.addSource('tienda', {
                'type': 'geojson',
                'data': {
                    "type": "FeatureCollection",
                    "features": [
                        {
                            "type": "Feature",
                            "properties": {
                                "id": 1,
                                "name": "Comercio 1",
                                "nit": "123456789",
                                "address": "Av 5 # 54-54",
                                "phone": "123456",
                                "owner": "Jhon Smith",
                                "schedule": "8:00 am – 5:00 pm",
                                "days": "Lunes - Viernes",
                                "sales": "25692986"
                            },
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -74.08699035644531,
                                    4.653079918274051
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "id": 2,
                                "name": "Comercio 2",
                                "nit": "123456789",
                                "address": "Av 5 # 54-54",
                                "phone": "123456",
                                "owner": "Jhon Smith",
                                "schedule": "8:00 am – 5:00 pm",
                                "days": "Lunes - Viernes",
                                "sales": "25692986"
                            },
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -74.036865234375,
                                    4.737253893957665
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "id": 3,
                                "name": "Comercio 3",
                                "nit": "123456789",
                                "address": "Av 5 # 54-54",
                                "phone": "123456",
                                "owner": "Jhon Smith",
                                "schedule": "8:00 am – 5:00 pm",
                                "days": "Lunes - Viernes",
                                "sales": "25692986"
                            },
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -74.06707763671875,
                                    4.715355952274436
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "id": 4,
                                "name": "Comercio 4",
                                "nit": "123456789",
                                "address": "Av 5 # 54-54",
                                "phone": "123456",
                                "owner": "Jhon Smith",
                                "schedule": "8:00 am – 5:00 pm",
                                "days": "Lunes - Viernes",
                                "sales": "25692986"
                            },
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -74.10415649414062,
                                    4.693457320237691
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "id": 5,
                                "name": "Comercio 5",
                                "nit": "123456789",
                                "address": "Av 5 # 54-54",
                                "phone": "123456",
                                "owner": "Jhon Smith",
                                "schedule": "8:00 am – 5:00 pm",
                                "days": "Lunes - Viernes",
                                "sales": "25692986"
                            },
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -74.12887573242188,
                                    4.641445320914245
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "id": 6,
                                "name": "Comercio 6",
                                "nit": "123456789",
                                "address": "Av 5 # 54-54",
                                "phone": "123456",
                                "owner": "Jhon Smith",
                                "schedule": "8:00 am – 5:00 pm",
                                "days": "Lunes - Viernes",
                                "sales": "25692986"
                            },
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -74.12750244140625,
                                    4.603802664823001
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "id": 7,
                                "name": "Comercio 7",
                                "nit": "123456789",
                                "address": "Av 5 # 54-54",
                                "phone": "123456",
                                "owner": "Jhon Smith",
                                "schedule": "8:00 am – 5:00 pm",
                                "days": "Lunes - Viernes",
                                "sales": "25692986"
                            },
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -74.12544250488281,
                                    4.538778849955251
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "id": 8,
                                "name": "Comercio 8",
                                "nit": "58475465",
                                "address": "Av 5 # 54-54",
                                "phone": "363475",
                                "owner": "David Smith",
                                "schedule": "8:00 am – 5:00 pm",
                                "days": "Lunes - Viernes",
                                "sales": "35435542"
                            },
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -74.08493041992186,
                                    4.653079918274051
                                ]
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "id": 9,
                                "name": "Comercio 9",
                                "nit": "123456789",
                                "address": "Av 5 # 54-54",
                                "phone": "123456",
                                "owner": "Jhon Smith",
                                "schedule": "8:00 am – 5:00 pm",
                                "days": "Lunes - Viernes",
                                "sales": "25692986"
                            },
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -74.1709688, 
                                    4.584640527464131
                                ]
                            }
                        }
                    ]
                }
            });
            this.mapa.addLayer({
                'id': 'tienda',
                'type': 'circle',
                'source': 'tienda',
                'paint': {
                'circle-radius': 10,
                'circle-color': '#B42222'
                },
                'filter': ['==', '$type', 'Point']
            });
        });
    }
    forEachLayer(){
        // // enumerate ids of the layers
        var toggleableLayerIds = ['tienda'];

        // // set up the corresponding toggle button for each layer
        for (var i = 0; i < toggleableLayerIds.length; i++) {
            var id = toggleableLayerIds[i];

            var link = document.createElement('a');
            link.href = '#';
            link.className = 'active';
            link.textContent = id;

            link.onclick = (e) => {
                var clickedLayer = link.textContent;
                e.preventDefault();
                e.stopPropagation();

                var visibility = this.mapa.getLayoutProperty(clickedLayer, 'visibility');

                // toggle layer visibility by changing the layout object's visibility property
                if (visibility === 'visible') {
                    this.mapa.setLayoutProperty(clickedLayer, 'visibility', 'none');
                    link.className = '';
                } else {
                    link.className = 'active';
                    this.mapa.setLayoutProperty(clickedLayer, 'visibility', 'visible');
                }
            };
        }
        var layers = document.getElementById('menu');
        layers.appendChild(link);

    }
    cardLoadInformation(){
        
        this.mapa.on("load", ()=>{
            
            this.mapa.on('click', 'tienda', function(point) {
                console.log(this.cardInfo);
                console.log("e: ", point);
                this.ngAfterViewInit;
                // return point.features[0].properties
                
                
            });
            this.mapa.on('mouseenter', 'tienda', function() {
                this.getCanvas().style.cursor = 'pointer';
            });
                 
                // Change it back to a pointer when it leaves.
            this.mapa.on('mouseleave', 'tienda', function() {
                this.getCanvas().style.cursor = '';
            });
        })
    }
    crearMarcador(lng: number, lat: number) {
        const marker = new Mapboxgl.Marker({
            draggable: true
        }).setLngLat([lng, lat]).addTo(this.mapa);
        marker.on("drag", () => {
            console.log(marker.getLngLat());
        });
    }
    

}
