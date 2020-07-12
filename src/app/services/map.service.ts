import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import{ Mapa } from './../interfaces/map';
import {environment} from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  // Se recibe los datos de GET /commerces/layer para poder imprimir las cordenadas en el mapa
  getFeaturesCollection(){
    return this.http.get<Mapa[]>(environment.pathLayer);
  }
}
