import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import{ Mapa } from './../interfaces/map';
import {environment} from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  getFeaturesCollection(){
    return this.http.get<Mapa[]>(environment.pathLayer);
  }
}
