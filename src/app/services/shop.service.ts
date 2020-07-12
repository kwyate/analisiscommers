import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Shop} from './../interfaces/shop';
import {environment} from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { 

  }

  getAllCommerce(){
    return this.http.get<Shop>(environment.pathCommerce);
  }
}
