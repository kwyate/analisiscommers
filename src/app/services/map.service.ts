import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import{ Mapa } from './../interfaces/map';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  getFeaturesCollection(){
    const path = 'https://alw-lab.herokuapp.com/commerces/layer';
    return this.http.get<Mapa[]>(path);
  }
}
